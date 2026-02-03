import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { StaticOperationSchema, StaticStructureSchema } from "@smithy/types";
import { toUtf8 } from "@smithy/util-utf8";
import { describe, expect, test as it } from "vitest";

import { context, deleteObjects } from "../test-schema.spec";
import { AwsRestXmlProtocol } from "./AwsRestXmlProtocol";
import { parseXmlBody } from "./parseXmlBody";

describe(AwsRestXmlProtocol.name, () => {
  const command = {
    schema: deleteObjects,
  };

  const protocol = new AwsRestXmlProtocol({
    xmlNamespace: "http://s3.amazonaws.com/doc/2006-03-01/",
    defaultNamespace: "com.amazonaws.s3",
  });

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

    it("should prepend an xml declaration only if the content type is application/xml and the input schema does not have a payload binding", async () => {
      const document = [
        3,
        "ns",
        "Struct",
        0,
        ["a", "b", "c", "h"],
        [0, 0, 0, [0, { httpHeader: "content-type" }]],
      ] satisfies StaticStructureSchema;
      const payload = [
        3,
        "ns",
        "PayloadStruct",
        0,
        ["a", "b", "c", "h"],
        [0, 0, [0, { httpPayload: 1 }], [0, { httpHeader: "content-type" }]],
      ] satisfies StaticStructureSchema;

      const createOperation = (input: StaticStructureSchema) => ({
        namespace: "ns",
        name: "operation",
        traits: {},
        input,
        output: "unit" as const,
      });

      const httpRequest1 = await protocol.serializeRequest(
        createOperation(document),
        {
          c: "<XML></XML>",
          h: "application/xml",
        },
        context
      );

      // this is not a payload binding, so although the
      // content and header appear to be XML,
      // the data is encoded within an XML container structure and the xml declaration
      // is prepended by the SDK.
      expect(httpRequest1.body).toBe(
        `<?xml version="1.0" encoding="UTF-8"?><Struct xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><c>&lt;XML&gt;&lt;/XML&gt;</c></Struct>`
      );

      const httpRequest2 = await protocol.serializeRequest(
        createOperation(payload),
        {
          c: "<XML></XML>",
          h: "application/xml",
        },
        context
      );

      // even though this could be interpreted as XML input by the content and the header value,
      // because this operation is a payload binding of a string,
      // we simply send what the caller has provided rather than prepending the XML declaration.
      expect(httpRequest2.body).toBe(`<XML></XML>`);

      const httpRequest3 = await protocol.serializeRequest(
        createOperation(payload),
        {
          c: "<XML></XML>",
          h: "text/xml",
        },
        context
      );

      expect(httpRequest3.body).toBe(`<XML></XML>`);
    });
  });

  describe("deserialization", () => {
    it("deserializes http responses", async () => {
      const httpResponse = new HttpResponse({
        statusCode: 200,
        headers: {},
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
});
