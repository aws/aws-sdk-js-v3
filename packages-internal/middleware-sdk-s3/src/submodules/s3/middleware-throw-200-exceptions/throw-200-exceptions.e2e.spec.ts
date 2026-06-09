import { S3 } from "@aws-sdk/client-s3";
import { NodeHttpHandler } from "@aws-sdk/config/requestHandler";
import { HttpResponse } from "@smithy/core/protocols";
import { Readable } from "node:stream";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe("S3 throw 200 exceptions", () => {
  const config = {
    region: "us-west-2",
  };
  const s3 = new S3(config);

  const randId = crypto.randomUUID();
  let Bucket: string;

  beforeAll(async () => {
    Bucket = `js-sdk-e2e-${config.region}-${randId}`;

    await s3.createBucket({
      Bucket,
    });
  });

  afterAll(async () => {
    const list = await s3.listObjectsV2({
      Bucket,
    });
    for (const item of list.Contents ?? []) {
      await s3.deleteObject({
        Bucket,
        Key: item.Key,
      });
    }

    await s3.deleteBucket({
      Bucket,
    });
    s3.destroy();
  });

  it("should retry exceptions thrown from the 200-error middleware", async () => {
    let attempt = 0;

    const s3_2 = new S3({
      ...config,
      // Set credentials to avoid the requestHandler having to make any
      // calls other than CopyObject.
      credentials: async () => s3.config.credentials(),
      requestHandler: new (class extends NodeHttpHandler {
        async handle(request: any, options: any) {
          attempt++;
          if (attempt <= 2) {
            return {
              response: new HttpResponse({
                statusCode: 200,
                headers: { "content-type": "application/xml" },
                body: Readable.from(
                  Buffer.from(
                    `
<?xml version="1.0" encoding="UTF-8"?>
<Error>
  <Code>InternalError</Code>
  <Message>We encountered an internal error. Please try again.</Message>
  <RequestId>FAKE</RequestId>
</Error>
    `.trim()
                  )
                ),
              }),
            };
          }
          return super.handle(request, options);
        }
      })(),
    });

    const Key = `throw-200-test-${randId}`;
    await s3.putObject({ Bucket, Key, Body: "hello" });

    const result = await s3_2.copyObject({
      Bucket,
      Key: `${Key}-copy`,
      CopySource: `${Bucket}/${Key}`,
    });

    expect(attempt).toEqual(3);
    expect(result.$metadata.attempts).toEqual(3);
    expect(result.CopyObjectResult).toBeDefined();

    await s3.deleteObject({ Bucket, Key: `${Key}-copy` });
  });
}, 100_000);
