import { S3 } from "@aws-sdk/client-s3";
import { HttpResponse } from "@smithy/protocol-http";
import { Readable } from "stream";
import { describe, expect, test as it } from "vitest";

import { requireRequestsFrom } from "../../../../private/aws-util-test/src";

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
          body: Readable.from([
            `<?xml version="1.0" encoding="UTF-8"?>`,
            `<Payload>`,
            `<Records><Payload>blob</Payload></Records>`,
            `<Stats><Details><BytesProcessed>100</BytesProcessed><BytesReturned>50</BytesReturned><BytesScanned>100</BytesScanned></Details></Stats>`,
            `<Progress><Details><BytesProcessed>100</BytesProcessed><BytesReturned>50</BytesReturned><BytesScanned>100</BytesScanned></Details></Progress>`,
            `<Cont></Cont>`,
            `<End></End>`,
            `</Payload>`,
          ]),
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
  });
});
