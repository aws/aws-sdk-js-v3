import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { StaticOperationSchema } from "@smithy/types";
import { toUtf8 } from "@smithy/util-utf8";
import { Readable } from "node:stream";
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
        schema: command.schema[4],
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
            // S3 customization not active here since this is a mock.
            // customization does model preprocessing to remove /{Bucket} prefix
            // when it is a contextParam.
            path: "/{Bucket}",
            method: "POST",
            headers: {
              "content-type": "application/xml",
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

        const [, namespace, name, traits, input, output] = command.schema as StaticOperationSchema;

        const httpRequest = await protocol.serializeRequest(
          { namespace, name, traits, input, output },
          testCase.input,
          context
        );

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

    const output = await protocol.deserializeResponse(
      {
        namespace: deleteObjects[1],
        name: deleteObjects[2],
        traits: deleteObjects[3],
        input: deleteObjects[4],
        output: deleteObjects[5],
      },
      context,
      httpResponse
    );

    expect(output).toEqual({
      $metadata: {
        httpStatusCode: 200,
        requestId: undefined,
        extendedRequestId: undefined,
        cfId: undefined,
      },
    });
  });

  it("decorates service exceptions with unmodeled fields", async () => {
    const httpResponse = new HttpResponse({
      statusCode: 400,
      headers: {},
      body: Buffer.from(`<Exception><UnmodeledField>Oh no</UnmodeledField></Exception>`),
    });

    const protocol = new AwsRestXmlProtocol({
      defaultNamespace: "",
      xmlNamespace: "ns",
    });

    const output = await protocol
      .deserializeResponse(
        {
          namespace: "ns",
          name: "Empty",
          traits: 0,
          input: "unit" as const,
          output: [3, "ns", "EmptyOutput", 0, [], []],
        },
        context,
        httpResponse
      )
      .catch((e) => {
        return e;
      });

    expect(output).toMatchObject({
      UnmodeledField: "Oh no",
      $metadata: {
        httpStatusCode: 400,
      },
    });
  });
});
