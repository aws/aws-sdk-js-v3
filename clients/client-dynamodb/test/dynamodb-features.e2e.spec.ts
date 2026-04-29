import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe(DynamoDB.name, () => {
  let client!: DynamoDB;
  let TableName!: string;

  beforeAll(async () => {
    client = new DynamoDB({ region: "us-west-2", maxAttempts: 10, credentials: aws?.testCredentials });

    const randId = (Math.random() + 1).toString(36).substring(2, 6);
    const timestamp = (Date.now() / 1000) | 0;
    TableName = `js-sdk-client-dynamodb-test-${timestamp}-${randId}`;
    const start = Date.now();
    const mark = () => `DDB-E2E: ` + ((Date.now() - start) / 1000).toFixed(3) + "s elapsed.";

    /**
     * todo: flaky test, entering verbose manual mode.
     * this can be removed in favor of a plain `waitUntilTableExists`
     * call later, if remedied.
     */
    console.log(mark(), `Selected TableName: ${TableName}`);

    const create = await client.createTable({
      TableName,
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      BillingMode: "PAY_PER_REQUEST",
    });

    console.log(mark(), "CreateTable:", create.$metadata.httpStatusCode);

    while (true) {
      try {
        const describe = await client.describeTable({
          TableName,
        });
        console.log(mark(), "DescribeTable:", describe.$metadata.httpStatusCode, describe.Table?.TableStatus);
        if (describe.Table?.TableStatus === "ACTIVE") {
          break;
        }
      } catch (e) {
        console.log(mark(), "DescribeTable:", e.$metadata.httpStatusCode);
        console.log("\t", e.name, e.message);
      }
      await new Promise((resolve) => setTimeout(resolve, 6_000));
    }

    // end verbose mode - waiter can be called even if the check above succeeded.
    // it should return immediately.
    await client.waitUntilTableExists({ TableName }, { maxWaitTime: 300 });
  }, 360_000);

  afterAll(async () => {
    const prefix = "js-sdk-client-dynamodb-test-";
    const eightHoursAgo = Date.now() - 8 * 60 * 60 * 1000;

    if (TableName) {
      await client.deleteTable({ TableName }).catch(() => {});
    }

    let lastTable: string | undefined;
    do {
      const list = await client.listTables({
        ...(lastTable ? { ExclusiveStartTableName: lastTable } : {}),
      });
      const tables = list.TableNames ?? [];
      lastTable = list.LastEvaluatedTableName;

      for (const name of tables) {
        if (!name.startsWith(prefix) || name === TableName) {
          continue;
        }
        try {
          const desc = await client.describeTable({ TableName: name });
          if ((desc?.Table?.CreationDateTime?.getTime?.() ?? Infinity) < eightHoursAgo) {
            await client.deleteTable({ TableName: name }).catch(() => {});
            console.log("Deleted", name);
          }
        } catch {}
      }
    } while (lastTable);
  }, 120_000);

  describe("Creating a table", () => {
    it("should verify table exists and is active", async () => {
      const describeResult = await client.describeTable({ TableName });
      expect(describeResult.Table?.TableName).toBe(TableName);
      expect(describeResult.Table?.TableStatus).toBe("ACTIVE");
    });
  });

  describe("Item CRUD", () => {
    it("should put item, get it, and verify attributes", async () => {
      const item = { id: { S: "foo" }, data: { S: "bår" } };
      const putResult = await client.putItem({
        TableName,
        Item: item,
      });

      expect(putResult.$metadata?.httpStatusCode).toBe(200);

      const getResult = await client.getItem({
        TableName,
        Key: { id: { S: "foo" } },
      });

      expect(getResult.Item?.id.S).toBe("foo");
      expect(getResult.Item?.data.S).toBe("bår");
    });
  });

  describe("UTF-8 support", () => {
    it("should handle UTF-8 characters and return ResourceNotFoundException for non-existent table", async () => {
      await expect(
        client.deleteItem({
          TableName: "table",
          Key: { id: { S: "føø" } },
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ResourceNotFoundException",
        })
      );
    });
  });

  describe("Improper table deletion", () => {
    it("should return ValidationException for empty table parameter", async () => {
      await expect(client.deleteTable({ TableName: "" })).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
          $metadata: expect.objectContaining({
            httpStatusCode: 400,
          }),
        })
      );
    });
  });

  describe("Recursive Attributes", () => {
    it("should handle complex nested attributes", async () => {
      // Put recursive item
      const recursiveItem = {
        id: { S: "fooRecursive" },
        data: {
          M: {
            attr1: {
              L: [{ S: "value1" }, { L: [{ M: { attr12: { S: "value2" } } }] }],
            },
            attr2: {
              L: [{ B: new Uint8Array([0]) }, { B: new Uint8Array([1]) }, { NULL: true }, { BOOL: true }],
            },
          },
        },
      };

      const putResult = await client.putItem({
        TableName,
        Item: recursiveItem,
      });

      expect(putResult.$metadata?.httpStatusCode).toBe(200);

      // Get item and verify nested attribute
      const getResult = await client.getItem({
        TableName,
        Key: { id: { S: "fooRecursive" } },
      });

      expect(getResult.$metadata?.httpStatusCode).toBe(200);
      expect(getResult.Item?.id.S).toBe("fooRecursive");

      // Verify deeply nested attribute: data.M.attr1.L[1].L[0].M.attr12.S
      const nestedValue = getResult.Item?.data?.M?.attr1?.L?.[1]?.L?.[0]?.M?.attr12?.S;
      expect(nestedValue).toBe("value2");
    });
  });
});
