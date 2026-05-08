import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { S3 } from "@aws-sdk/client-s3";
import { HttpResponse } from "@smithy/core/protocols";
import { Readable } from "node:stream";
import { describe, expect, test as it } from "vitest";

const credentials = { accessKeyId: "INTEG", secretAccessKey: "INTEG" };

const xmlError = `
  <?xml version="1.0" encoding="UTF-8"?>
  <Error>
    <Code>InternalError</Code>
    <Message>We encountered an internal error. Please try again.</Message>
    <RequestId>EXAMPLE</RequestId>
  </Error>
`.trim();

function streamBody(content: string) {
  return Readable.from(Buffer.from(content));
}

const matcher = { hostname: /./ };

describe("200-status errors", () => {
  it("should retry on CopyObject 200 with Error XML body", async () => {
    const client = new S3({ region: "us-west-2", credentials });

    requireRequestsFrom(client)
      .toMatch(matcher)
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: streamBody(xmlError),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: streamBody(xmlError),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: streamBody(
            `
<?xml version="1.0" encoding="UTF-8"?>
<CopyObjectResult>
  <ETag>&quot;etag&quot;</ETag>
  <LastModified>2026-01-01T00:00:00.000Z</LastModified>
</CopyObjectResult>
`.trim()
          ),
        })
      );

    await client.copyObject({ Bucket: "bucket", Key: "key", CopySource: "src-bucket/src-key" });
  });

  it("should retry on CompleteMultipartUpload 200 with Error XML body", async () => {
    const client = new S3({ region: "us-west-2", credentials });

    requireRequestsFrom(client)
      .toMatch(matcher)
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: streamBody(xmlError),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: streamBody(xmlError),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: streamBody(
            `
<?xml version="1.0" encoding="UTF-8"?>
<CompleteMultipartUploadResult>
   <Location>string</Location>
   <Bucket>string</Bucket>
   <Key>string</Key>
   <ETag>string</ETag>
   <ChecksumCRC32>string</ChecksumCRC32>
   <ChecksumCRC32C>string</ChecksumCRC32C>
   <ChecksumCRC64NVME>string</ChecksumCRC64NVME>
   <ChecksumSHA1>string</ChecksumSHA1>
   <ChecksumSHA256>string</ChecksumSHA256>
   <ChecksumType>string</ChecksumType>
</CompleteMultipartUploadResult>
`.trim()
          ),
        })
      );

    await client.completeMultipartUpload({
      Bucket: "bucket",
      Key: "key",
      UploadId: "upload-id",
      MultipartUpload: { Parts: [] },
    });
  });

  it("should not throw on CopyObject 200 with success XML body", async () => {
    const client = new S3({ region: "us-west-2", credentials, maxAttempts: 1 });

    requireRequestsFrom(client)
      .toMatch(matcher)
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: streamBody(
            `
<?xml version="1.0" encoding="UTF-8"?>
<CopyObjectResult>
  <ETag>&quot;etag&quot;</ETag>
  <LastModified>2026-01-01T00:00:00.000Z</LastModified>
</CopyObjectResult>
`.trim()
          ),
        })
      );

    const result = await client.copyObject({ Bucket: "bucket", Key: "key", CopySource: "src-bucket/src-key" });
    expect(result.$metadata.httpStatusCode).toBe(200);
  });
});
