import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { toUtf8 } from "@smithy/util-utf8";
import { describe, expect, test as it } from "vitest";

import { context, deleteObjects } from "../test-schema.spec";
import { AwsRestXmlProtocol } from "./AwsRestXmlProtocol";
import { parseXmlBody } from "./parseXmlBody";

describe(AwsRestXmlProtocol.name, () => {
  const command = {
    schema: deleteObjects,
  };

  describe("serialization", () => {
    const testCases = [
      {
        name: "DeleteObjects",
        schema: command.schema?.input,
        input: {
          Delete: {
            Objects: [
              {
                Key: "key1",
              },
              {
                Key: "key2",
              },
            ],
          },
        },
        expected: {
          request: {
            path: "/",
            method: "POST",
            headers: {
              "content-type": "application/xml",
              "content-length": "167",
            },
            query: {
              delete: "",
            },
          },
          body: `
<Delete xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <Object>
      <Key>key1</Key>
  </Object>
  <Object>
      <Key>key2</Key>
  </Object>
</Delete>`,
        },
      },
    ];

    for (const testCase of testCases) {
      it(`should serialize HTTP Requests: ${testCase.name}`, async () => {
        const protocol = new AwsRestXmlProtocol({
          xmlNamespace: "http://s3.amazonaws.com/doc/2006-03-01/",
          defaultNamespace: "com.amazonaws.s3",
        });
        const httpRequest = await protocol.serializeRequest(command.schema!, testCase.input, context);

        const body = httpRequest.body;
        httpRequest.body = void 0;

        expect(httpRequest).toEqual(
          new HttpRequest({
            protocol: "https:",
            hostname: "localhost",
            ...testCase.expected.request,
            headers: {
              ...testCase.expected.request.headers,
            },
          })
        );

        const serdeContext = {
          utf8Encoder: toUtf8,
        } as any;

        expect(await parseXmlBody(Buffer.from(body), serdeContext)).toEqual(
          await parseXmlBody(Buffer.from(testCase.expected.body), serdeContext)
        );
      });
    }
  });

  it("deserializes http responses", async () => {
    const httpResponse = new HttpResponse({
      statusCode: 200,
      headers: {},
    });

    const protocol = new AwsRestXmlProtocol({
      defaultNamespace: "",
      xmlNamespace: "ns",
    });

    const output = await protocol.deserializeResponse(deleteObjects, context, httpResponse);

    expect(output).toEqual({
      $metadata: {
        httpStatusCode: 200,
        requestId: undefined,
        extendedRequestId: undefined,
        cfId: undefined,
      },
    });
  });
});
