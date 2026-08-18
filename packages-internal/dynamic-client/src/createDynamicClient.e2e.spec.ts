import { readFileSync } from "node:fs";
import { join } from "node:path";
const modelsPath = join(__dirname, "..", "..", "..", "codegen", "sdk-codegen", "aws-models");

import { AwsSmithyRpcV2CborProtocol } from "@aws-sdk/core/protocols";
import { afterAll, describe, expect, test as it } from "vitest";

import { createDynamicClient } from "./createDynamicClient";
import type { ClientProtocolCtor } from "./protocol/types";

const TEST_TAG_KEY = "dynamic-client-e2e";
const TEST_TAG_VALUE = "temp-resource";

describe("dynamic-client e2e", () => {
  function loadModel(serviceName: string) {
    return JSON.parse(readFileSync(join(modelsPath, serviceName + ".json"), "utf-8"));
  }

  it("loads the DynamoDB model and can ListTables", async () => {
    const exports = createDynamicClient(loadModel("dynamodb"));

    const { DynamoDBClient, ListTablesCommand } = exports;

    expect(DynamoDBClient).toBeDefined();
    expect(ListTablesCommand).toBeDefined();

    const client = new DynamoDBClient({
      region: "us-west-2",
    });

    const result = await client.send(
      new ListTablesCommand({
        Limit: 1,
      })
    );

    expect(result.$metadata.httpStatusCode).toBe(200);
    expect(Array.isArray(result.TableNames)).toBe(true);
    expect(result.TableNames.length).toBeLessThanOrEqual(1);
  });

  it("loads the S3 model and can list buckets", async () => {
    const exports = createDynamicClient(loadModel("s3"));
    const { S3 } = exports;

    const s3 = new S3({
      region: "us-west-2",
    });

    const buckets = await s3.listBuckets({
      MaxBuckets: 5,
    });

    expect(buckets.$metadata.httpStatusCode).toBe(200);
    expect(Array.isArray(buckets.Buckets)).toBe(true);
    expect(buckets.Buckets.length).toBeLessThanOrEqual(5);
  });

  it("loads the STS model and can GetCallerIdentity", async () => {
    const exports = createDynamicClient(loadModel("sts"));
    const { STSClient, GetCallerIdentityCommand } = exports;

    expect(STSClient).toBeDefined();
    expect(GetCallerIdentityCommand).toBeDefined();

    const client = new STSClient({ region: "us-east-1" });
    const result = await client.send(new GetCallerIdentityCommand({}));

    expect(result.$metadata.httpStatusCode).toBe(200);
    expect(result.Account).toBeDefined();
    expect(result.Arn).toBeDefined();
  });

  it("loads the SQS model and can ListQueues", async () => {
    const exports = createDynamicClient(loadModel("sqs"));
    const { SQSClient, ListQueuesCommand } = exports;

    expect(SQSClient).toBeDefined();
    expect(ListQueuesCommand).toBeDefined();

    const client = new SQSClient({ region: "us-west-2" });
    const result = await client.send(new ListQueuesCommand({ MaxResults: 1 }));

    expect(result.$metadata.httpStatusCode).toBe(200);
  });

  it("loads the Route 53 model and can ListHostedZones", async () => {
    const exports = createDynamicClient(loadModel("route-53"));
    const { Route53Client, ListHostedZonesCommand } = exports;

    expect(Route53Client).toBeDefined();
    expect(ListHostedZonesCommand).toBeDefined();

    const client = new Route53Client({ region: "us-east-1" });
    const result = await client.send(new ListHostedZonesCommand({ MaxItems: 1 }));

    expect(result.$metadata.httpStatusCode).toBe(200);
    expect(Array.isArray(result.HostedZones)).toBe(true);
  });

  it("loads the Lambda model and can ListFunctions", async () => {
    const exports = createDynamicClient(loadModel("lambda"));
    const { LambdaClient, ListFunctionsCommand } = exports;

    expect(LambdaClient).toBeDefined();
    expect(ListFunctionsCommand).toBeDefined();

    const client = new LambdaClient({ region: "us-west-2" });
    const result = await client.send(new ListFunctionsCommand({ MaxItems: 1 }));

    expect(result.$metadata.httpStatusCode).toBe(200);
    expect(Array.isArray(result.Functions)).toBe(true);
  });

  it("loads the CloudWatch model with RPCv2 CBOR protocol override and can ListMetrics", async () => {
    const exports = createDynamicClient(loadModel("cloudwatch"));
    const { CloudWatchClient, ListMetricsCommand } = exports;

    expect(CloudWatchClient).toBeDefined();
    expect(ListMetricsCommand).toBeDefined();

    const client = new CloudWatchClient({
      region: "us-west-2",
      protocol: AwsSmithyRpcV2CborProtocol as ClientProtocolCtor,
    });

    const result = await client.send(new ListMetricsCommand({ Namespace: "AWS/EC2" }));
    expect(result.$metadata.httpStatusCode).toBe(200);
    expect(Array.isArray(result.Metrics)).toBe(true);
  });

  describe("RTTC input validation", () => {
    it("DynamoDB ListTables rejects wrong type for Limit", async () => {
      const { DynamoDBClient, ListTablesCommand } = createDynamicClient(loadModel("dynamodb"));
      const client = new DynamoDBClient({ region: "us-west-2" });

      await expect(client.send(new ListTablesCommand({ Limit: "not-a-number" }))).rejects.toThrow(
        /input validation.*Limit.*expected number/is
      );
    });

    it("DynamoDB GetItem rejects missing required Key", async () => {
      const { DynamoDBClient, GetItemCommand } = createDynamicClient(loadModel("dynamodb"));
      const client = new DynamoDBClient({ region: "us-west-2" });

      await expect(client.send(new GetItemCommand({ TableName: "t" }))).rejects.toThrow(
        /input validation.*Key.*required/is
      );
    });

    it("S3 GetObject rejects missing required Bucket and Key", async () => {
      const { S3Client, GetObjectCommand } = createDynamicClient(loadModel("s3"));
      const client = new S3Client({ region: "us-west-2" });

      await expect(client.send(new GetObjectCommand({}))).rejects.toThrow(/input validation.*Bucket.*required/is);
    });

    it("S3 ListBuckets rejects wrong type for MaxBuckets", async () => {
      const { S3Client, ListBucketsCommand } = createDynamicClient(loadModel("s3"));
      const client = new S3Client({ region: "us-west-2" });

      await expect(client.send(new ListBucketsCommand({ MaxBuckets: "five" }))).rejects.toThrow(
        /input validation.*MaxBuckets.*expected number/is
      );
    });

    it("SQS ListQueues rejects wrong type for MaxResults", async () => {
      const { SQSClient, ListQueuesCommand } = createDynamicClient(loadModel("sqs"));
      const client = new SQSClient({ region: "us-west-2" });

      await expect(client.send(new ListQueuesCommand({ MaxResults: "ten" }))).rejects.toThrow(
        /input validation.*MaxResults.*expected number/is
      );
    });

    it("Route53 ListHostedZones rejects wrong type for MaxItems", async () => {
      const { Route53Client, ListHostedZonesCommand } = createDynamicClient(loadModel("route-53"));
      const client = new Route53Client({ region: "us-east-1" });

      await expect(client.send(new ListHostedZonesCommand({ MaxItems: "one" }))).rejects.toThrow(
        /input validation.*MaxItems.*expected number/is
      );
    });

    it("Lambda ListFunctions rejects wrong type for MaxItems", async () => {
      const { LambdaClient, ListFunctionsCommand } = createDynamicClient(loadModel("lambda"));
      const client = new LambdaClient({ region: "us-west-2" });

      await expect(client.send(new ListFunctionsCommand({ MaxItems: false }))).rejects.toThrow(
        /input validation.*MaxItems.*expected number/is
      );
    });

    it("CloudWatch ListMetrics rejects wrong type for Namespace", async () => {
      const exports = createDynamicClient(loadModel("cloudwatch"));
      const { CloudWatchClient, ListMetricsCommand } = exports;
      const client = new CloudWatchClient({
        region: "us-west-2",
        protocol: AwsSmithyRpcV2CborProtocol as ClientProtocolCtor,
      });

      await expect(client.send(new ListMetricsCommand({ Namespace: 123 }))).rejects.toThrow(
        /input validation.*Namespace.*expected string/is
      );
    });
  });
});

describe("dynamic-client e2e — DynamoDB CRUD lifecycle", () => {
  const exports = createDynamicClient(JSON.parse(readFileSync(join(modelsPath, "dynamodb.json"), "utf-8")));
  const { DynamoDB } = exports;

  const ddb = new DynamoDB({ region: "us-west-2" });
  const TableName = `dynamic-client-e2e-${crypto.randomUUID()}`;

  afterAll(async () => {
    // Cleanup: find and delete all tables tagged with our test tag.
    try {
      const listResult = await ddb.listTables({});
      const tables: string[] = listResult.TableNames ?? [];

      for (const name of tables) {
        if (!name.startsWith("dynamic-client-e2e-")) continue;
        try {
          const desc = await ddb.describeTable({ TableName: name });
          const arn = desc.Table?.TableArn;
          if (!arn) continue;
          const tags = await ddb.listTagsOfResource({ ResourceArn: arn });
          const hasTag = (tags.Tags ?? []).some((t: any) => t.Key === TEST_TAG_KEY && t.Value === TEST_TAG_VALUE);
          if (hasTag) {
            await ddb.deleteTable({ TableName: name });
          }
        } catch {
          // best effort
        }
      }
    } catch {
      // best effort
    }
  }, 30_000);

  async function waitForTableActive() {
    for (let i = 0; i < 30; i++) {
      const desc = await ddb.describeTable({ TableName });
      if (desc.Table?.TableStatus === "ACTIVE") return desc;
      await new Promise((r) => setTimeout(r, 2000));
    }
    throw new Error(`Table ${TableName} did not become ACTIVE`);
  }

  it("creates a DynamoDB table with tag", async () => {
    const result = await ddb.createTable({
      TableName,
      AttributeDefinitions: [{ AttributeName: "pk", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "pk", KeyType: "HASH" }],
      BillingMode: "PAY_PER_REQUEST",
      Tags: [{ Key: TEST_TAG_KEY, Value: TEST_TAG_VALUE }],
    });
    expect(result.$metadata.httpStatusCode).toBe(200);
    expect(result.TableDescription?.TableName).toBe(TableName);

    await waitForTableActive();
  }, 90_000);

  it("puts an item", async () => {
    const result = await ddb.putItem({
      TableName,
      Item: {
        pk: { S: "item-1" },
        data: { S: "hello world" },
        count: { N: "42" },
      },
    });
    expect(result.$metadata.httpStatusCode).toBe(200);
  });

  it("gets the item back", async () => {
    const result = await ddb.getItem({
      TableName,
      Key: { pk: { S: "item-1" } },
      ConsistentRead: true,
    });
    expect(result.$metadata.httpStatusCode).toBe(200);
    expect(result.Item?.pk?.S).toBe("item-1");
    expect(result.Item?.data?.S).toBe("hello world");
    expect(result.Item?.count?.N).toBe("42");
  });

  it("getItem rejects wrong type for ConsistentRead (RTTC)", async () => {
    await expect(
      ddb.getItem({
        TableName,
        Key: { pk: { S: "item-1" } },
        ConsistentRead: "yes",
      })
    ).rejects.toThrow(/input validation.*ConsistentRead.*expected boolean/is);
  });

  it("updates the item", async () => {
    const result = await ddb.updateItem({
      TableName,
      Key: { pk: { S: "item-1" } },
      UpdateExpression: "SET #d = :d, #c = :c",
      ExpressionAttributeNames: { "#d": "data", "#c": "count" },
      ExpressionAttributeValues: {
        ":d": { S: "updated" },
        ":c": { N: "99" },
      },
      ReturnValues: "ALL_NEW",
    });
    expect(result.$metadata.httpStatusCode).toBe(200);
    expect(result.Attributes?.data?.S).toBe("updated");
    expect(result.Attributes?.count?.N).toBe("99");
  });

  it("deletes the item", async () => {
    const result = await ddb.deleteItem({
      TableName,
      Key: { pk: { S: "item-1" } },
      ReturnValues: "ALL_OLD",
    });
    expect(result.$metadata.httpStatusCode).toBe(200);
    expect(result.Attributes?.pk?.S).toBe("item-1");
  });

  it("verifies item is gone", async () => {
    const result = await ddb.getItem({
      TableName,
      Key: { pk: { S: "item-1" } },
      ConsistentRead: true,
    });
    expect(result.$metadata.httpStatusCode).toBe(200);
    expect(result.Item).toBeUndefined();
  });
}, 180_000);

describe("dynamic-client e2e — S3 CRUD lifecycle", () => {
  const exports = createDynamicClient(JSON.parse(readFileSync(join(modelsPath, "s3.json"), "utf-8")));
  const { S3 } = exports;

  const s3 = new S3({ region: "us-west-2" });
  const Bucket = `dyn-e2e-${crypto.randomUUID()}`;
  const Key = "test-object.txt";
  const Body = "Hello from dynamic-client e2e test!";

  afterAll(async () => {
    // Cleanup: find and delete all buckets with our test prefix.
    try {
      const listResult = await s3.listBuckets({});
      const buckets: Array<{ Name?: string }> = listResult.Buckets ?? [];

      for (const b of buckets) {
        const name = b.Name;
        if (!name || !name.startsWith("dyn-e2e-")) continue;
        try {
          // Empty the bucket first (delete all objects).
          const objects = await s3.listObjectsV2({ Bucket: name });
          for (const obj of objects.Contents ?? []) {
            await s3.deleteObject({ Bucket: name, Key: obj.Key });
          }
          await s3.deleteBucket({ Bucket: name });
        } catch {
          // best effort
        }
      }
    } catch {
      // best effort
    }
  }, 60_000);

  it("creates an S3 bucket", async () => {
    const result = await s3.createBucket({
      Bucket,
      CreateBucketConfiguration: { LocationConstraint: "us-west-2" },
    });
    expect(result.$metadata.httpStatusCode).toBe(200);
  });

  it("puts an object", async () => {
    const result = await s3.putObject({ Bucket, Key, Body });
    expect(result.$metadata.httpStatusCode).toBe(200);
  });

  it("gets the object back", async () => {
    const result = await s3.getObject({ Bucket, Key });
    expect(result.$metadata.httpStatusCode).toBe(200);

    // Read body stream
    const chunks: Uint8Array[] = [];
    for await (const chunk of result.Body) {
      chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
    }
    const body = Buffer.concat(chunks).toString("utf-8");
    expect(body).toBe(Body);
  });

  it("getObject rejects wrong type for PartNumber (RTTC)", async () => {
    await expect(s3.getObject({ Bucket, Key, PartNumber: "one" })).rejects.toThrow(
      /input validation.*PartNumber.*expected number/is
    );
  });

  it("deletes the object", async () => {
    const result = await s3.deleteObject({ Bucket, Key });
    expect(result.$metadata.httpStatusCode).toBe(204);
  });

  it("verifies the object is gone", async () => {
    try {
      await s3.getObject({ Bucket, Key });
      expect.fail("Expected NoSuchKey error");
    } catch (err: any) {
      // The dynamic client may report the error via name or Code.
      expect(err.$metadata?.httpStatusCode).toBe(404);
    }
  });

  it("deletes the bucket", async () => {
    const result = await s3.deleteBucket({ Bucket });
    expect(result.$metadata.httpStatusCode).toBe(204);
  });
}, 120_000);
