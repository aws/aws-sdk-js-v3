import { DynamoDB, ScanCommand } from "@aws-sdk/client-dynamodb";
import { HeadBucketCommand, HeadBucketCommandInput, S3Client } from "@aws-sdk/client-s3";
import { DynamoDBDocument, ScanCommand as DocumentScanCommand, ScanCommandInput } from "@aws-sdk/lib-dynamodb";
import { describe, expect, test as it } from "vitest";

import { requireRequestsFrom } from "../../../../private/aws-util-test/src";

describe("DynamoDBDocument command mutability", () => {
  it("should allow sending the same command more than once without mutating the Command instance", async () => {
    const ddb = new DynamoDB({
      region: "us-west-2",
    });

    const doc = DynamoDBDocument.from(ddb);

    doc.middlewareStack.add(
      (next) => async (args) => {
        (args.input as any).TableName = "modified-by-middleware";
        return next(args);
      },
      {
        name: "input-modifying-custom-middleware",
      }
    );

    let requestCount = 0;

    requireRequestsFrom(doc).toMatch({
      hostname: /dynamodb/,
      body(json: string) {
        const requestBody = JSON.parse(json);
        if (requestCount === 0) {
          expect(requestBody).toEqual({
            ExpressionAttributeValues: { ":id": { S: "1" } },
            FilterExpression: "id = :id",
            TableName: "modified-by-middleware",
          });
        } else if (requestCount === 1) {
          expect(requestBody).toEqual({
            ExpressionAttributeValues: { ":id": { S: "1" } },
            FilterExpression: "id = :id",
            TableName: "modified-by-middleware",
            ExclusiveStartKey: {
              id: {
                S: "abc",
              },
            },
          });
        } else if (requestCount === 2) {
          expect(requestBody).toEqual({
            ExpressionAttributeValues: { ":id": { S: "1" } },
            FilterExpression: "id = :id",
            TableName: "modified-by-middleware",
            ExclusiveStartKey: {
              id: { S: "def" },
            },
          });
        } else if (requestCount === 3) {
          expect(requestBody).toEqual({
            ExpressionAttributeValues: { ":id": { S: "1" } },
            FilterExpression: "id = :id",
            TableName: "modified-by-middleware",
            ExclusiveStartKey: {
              id: { S: "ghi" },
            },
          });
        }
        requestCount += 1;
      },
    });

    const params: ScanCommandInput = {
      TableName: "test",
      FilterExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": "1",
      },
    };

    const command = new DocumentScanCommand(params);

    await doc.send(command);
    params.ExclusiveStartKey = { id: "abc" };
    await doc.send(command);
    params.ExclusiveStartKey = { id: "def" };
    await doc.send(command);
    params.ExclusiveStartKey = { id: "ghi" };
    await doc.send(command);

    // params should remain what it was set to by the caller,
    // disregarding middleware modifications and mutations
    // applied by the marshaller.
    expect(params).toEqual({
      TableName: "test",
      FilterExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": "1",
      },
      ExclusiveStartKey: {
        id: "ghi",
      },
    });

    expect.assertions(9);
  });

  it("the base dynamodb client can also use Command instances repeatedly", async () => {
    const ddb = new DynamoDB({
      region: "us-west-2",
    });

    ddb.middlewareStack.add(
      (next) => async (args) => {
        (args.input as any).TableName = "modified-by-middleware";
        return next(args);
      },
      {
        name: "input-modifying-custom-middleware",
      }
    );

    let requestCount = 0;

    requireRequestsFrom(ddb).toMatch({
      hostname: /dynamodb/,
      body(json: string) {
        const requestBody = JSON.parse(json);
        if (requestCount === 0) {
          expect(requestBody).toEqual({
            ExpressionAttributeValues: { ":id": { S: "1" } },
            FilterExpression: "id = :id",
            TableName: "modified-by-middleware",
          });
        } else if (requestCount === 1) {
          expect(requestBody).toEqual({
            ExpressionAttributeValues: { ":id": { S: "1" } },
            FilterExpression: "id = :id",
            TableName: "modified-by-middleware",
            ExclusiveStartKey: {
              id: {
                S: "abc",
              },
            },
          });
        } else if (requestCount === 2) {
          expect(requestBody).toEqual({
            ExpressionAttributeValues: { ":id": { S: "1" } },
            FilterExpression: "id = :id",
            TableName: "modified-by-middleware",
            ExclusiveStartKey: {
              id: { S: "def" },
            },
          });
        } else if (requestCount === 3) {
          expect(requestBody).toEqual({
            ExpressionAttributeValues: { ":id": { S: "1" } },
            FilterExpression: "id = :id",
            TableName: "modified-by-middleware",
            ExclusiveStartKey: {
              id: { S: "ghi" },
            },
          });
        }
        requestCount += 1;
      },
    });

    const params: ScanCommandInput = {
      TableName: "test",
      FilterExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": { S: "1" },
      },
    };

    const command = new ScanCommand(params);

    await ddb.send(command);
    params.ExclusiveStartKey = { id: { S: "abc" } };
    await ddb.send(command);
    params.ExclusiveStartKey = { id: { S: "def" } };
    await ddb.send(command);
    params.ExclusiveStartKey = { id: { S: "ghi" } };
    await ddb.send(command);

    // for regular clients, middleware modifications to the
    // args.input object persist beyond the request.
    expect(params).toEqual({
      TableName: "modified-by-middleware",
      FilterExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": { S: "1" },
      },
      ExclusiveStartKey: {
        id: {
          S: "ghi",
        },
      },
    });

    expect.assertions(9);
  });

  it("other clients can also use Command instances repeatedly", async () => {
    const s3 = new S3Client({
      region: "us-west-2",
    });

    s3.middlewareStack.add(
      (next) => async (args) => {
        (args.input as any).ExpectedBucketOwner = "me";
        return next(args);
      },
      {
        name: "input-modifying-custom-middleware",
      }
    );

    let requestCount = 0;

    requireRequestsFrom(s3).toMatch({
      headers: {
        "x-amz-expected-bucket-owner": /^me$/,
      },
      hostname: (h: string) => {
        if (requestCount === 0) {
          expect(h).toEqual(`bucket1.s3.us-west-2.amazonaws.com`);
        } else if (requestCount === 1) {
          expect(h).toEqual(`bucket2.s3.us-west-2.amazonaws.com`);
        } else if (requestCount === 2) {
          expect(h).toEqual(`bucket3.s3.us-west-2.amazonaws.com`);
        } else if (requestCount === 3) {
          expect(h).toEqual(`bucket4.s3.us-west-2.amazonaws.com`);
        }
        requestCount += 1;
      },
    });

    const params: HeadBucketCommandInput = {
      Bucket: "bucket1",
    };

    const command = new HeadBucketCommand(params);

    await s3.send(command);
    params.Bucket = "bucket2";
    await s3.send(command);
    params.Bucket = `bucket3`;
    await s3.send(command);
    params.Bucket = `bucket4`;
    await s3.send(command);

    // for regular clients, middleware modifications to the
    // args.input object persist beyond the request.
    expect(params).toEqual({
      Bucket: "bucket4",
      ExpectedBucketOwner: "me",
    });

    expect.assertions(9);
  });
});
