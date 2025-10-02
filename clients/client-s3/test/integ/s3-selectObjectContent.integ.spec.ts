import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { S3 } from "@aws-sdk/client-s3";
import { HttpResponse } from "@smithy/protocol-http";
import { describe, expect, test as it } from "vitest";

describe("selectObjectContent", () => {
  const credentials = {
    accessKeyId: "INTEG",
    secretAccessKey: "INTEG",
  };

  it("should make correct request", async () => {
    const client = new S3({ region: "us-west-2", credentials });

    requireRequestsFrom(client)
      .toMatch({
        hostname: /aws-sdk-js-integ-test-bucket\.s3\.us-west-2\.amazonaws\.com/,
        method: "POST",
        path: "/test-key",
        headers: {
          authorization: /AWS4-HMAC-SHA256 Credential/,
          "content-type": "application/xml",
          "x-amz-content-sha256": /./,
        },
        body(xmlBody) {
          expect(xmlBody).toContain(
            "<Expression>SELECT user_name FROM S3Object WHERE cast(age as int) &gt; 20</Expression>"
          );
          expect(xmlBody).toContain("<ExpressionType>SQL</ExpressionType>");
        },
      })
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {
            "x-amz-checksum-crc32": "3117266289",
          },
          body: {
            *[Symbol.asyncIterator]() {
              // see https://docs.aws.amazon.com/AmazonS3/latest/API/RESTSelectObjectAppendix.html
              yield new Uint8Array([
                /* message size */ ...[0, 0, 0, 97],
                /* header size */ ...[0, 0, 0, 81],
                /* prelude crc */ ...[221, 28, 224, 246],
                /* headers */
                /* :event-type */
                11,
                ...[58, 101, 118, 101, 110, 116, 45, 116, 121, 112, 101],
                7,
                /* End */
                0,
                3,
                ...[69, 110, 100],
                /* :content-type */
                13,
                ...[58, 99, 111, 110, 116, 101, 110, 116, 45, 116, 121, 112, 101],
                7,
                /* application/octet-stream */
                0,
                24,
                ...[
                  97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 111, 99, 116, 101, 116, 45, 115, 116, 114,
                  101, 97, 109,
                ],
                /* :message-type */
                13,
                ...[58, 109, 101, 115, 115, 97, 103, 101, 45, 116, 121, 112, 101],
                7,
                /* event */
                0,
                5,
                ...[101, 118, 101, 110, 116],
                /* message crc */
                ...[75, 107, 103, 102],
              ]);
            },
          },
        })
      );

    const response = await client.selectObjectContent({
      Bucket: "aws-sdk-js-integ-test-bucket",
      Key: "test-key",
      ExpressionType: "SQL",
      Expression: "SELECT user_name FROM S3Object WHERE cast(age as int) > 20",
      InputSerialization: {
        CSV: {
          FileHeaderInfo: "USE",
          RecordDelimiter: "\n",
          FieldDelimiter: ",",
        },
      },
      OutputSerialization: {
        CSV: {},
      },
    });

    expect.hasAssertions();
    expect(response).toHaveProperty("$metadata");
    expect(response.$metadata.httpStatusCode).toBe(200);
    expect(response).toHaveProperty("Payload");
    expect(response.Payload).toBeDefined();

    const events = [];
    for await (const event of response.Payload!) {
      events.push(event);
    }
    expect(events).toEqual([{ End: {} }]);
  });
});
