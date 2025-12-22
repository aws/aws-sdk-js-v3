import { DynamoDB, waitUntilTableExists } from "@aws-sdk/client-dynamodb";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe(DynamoDB.name, () => {
  let client: DynamoDB;
  let sharedTableName: string;

  beforeAll(async () => {
    client = new DynamoDB({ region: "us-west-2", maxAttempts: 10 });

    // Create shared table for tests
    sharedTableName = `aws-sdk-js-integration-${Date.now()}`;
    await client.createTable({
      TableName: sharedTableName,
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      BillingMode: "PAY_PER_REQUEST",
    });

    // Wait for table to be active
    await waitUntilTableExists({ client, maxWaitTime: 300 }, { TableName: sharedTableName });
  }, 60000);

  afterAll(async () => {
    // Cleanup shared table
    if (sharedTableName) {
      try {
        await client.deleteTable({ TableName: sharedTableName });
      } catch (error) {
        // Ignore errors during cleanup
      }
    }
  });

  describe("Creating a table", () => {
    it("should verify table exists and is active", async () => {
      // Verify table exists by describing it
      const describeResult = await client.describeTable({ TableName: sharedTableName });
      expect(describeResult.Table?.TableName).toBe(sharedTableName);
      expect(describeResult.Table?.TableStatus).toBe("ACTIVE");
    });
  });

  describe("Item CRUD", () => {
    it("should put item, get it, and verify attributes", async () => {
      // Put item
      const item = { id: { S: "foo" }, data: { S: "bår" } };
      const putResult = await client.putItem({
        TableName: sharedTableName,
        Item: item,
      });

      expect(putResult.$metadata?.httpStatusCode).toBe(200);

      // Get item
      const getResult = await client.getItem({
        TableName: sharedTableName,
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
        TableName: sharedTableName,
        Item: recursiveItem,
      });

      expect(putResult.$metadata?.httpStatusCode).toBe(200);

      // Get item and verify nested attribute
      const getResult = await client.getItem({
        TableName: sharedTableName,
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
