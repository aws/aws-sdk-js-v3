import { DeleteObjectsCommand } from "@aws-sdk/client-s3";
import { AwsRestXmlProtocol } from "@aws-sdk/core/protocols";
import { HttpRequest } from "@smithy/protocol-http";
import { toUtf8 } from "@smithy/util-utf8";
import { describe, expect, test as it } from "vitest";

import { parseXmlBody } from "./parseXmlBody";

describe(AwsRestXmlProtocol.name, () => {
  const command = new DeleteObjectsCommand({} as any);

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
            path: "/{Bucket}",
            method: "POST",
            headers: {},
          },
          body: `
<DeleteObjectsRequest xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
	<Delete>
		<Object>
			<ObjectIdentifier>
				<Key>key1</Key>
			</ObjectIdentifier>
			<ObjectIdentifier>
				<Key>key2</Key>
			</ObjectIdentifier>
		</Object>
	</Delete>
</DeleteObjectsRequest>`,
        },
      },
    ];

    for (const testCase of testCases) {
      it(`should serialize HTTP Requests: ${testCase.name}`, async () => {
        const protocol = new AwsRestXmlProtocol();
        const httpRequest = await protocol.serializeRequest(command.schema, testCase.input, {
          endpointV2: {
            url: new URL("https://example.com/"),
          },
        });

        const body = httpRequest.body;
        httpRequest.body = void 0;

        expect(httpRequest).toEqual(
          new HttpRequest({
            protocol: "https:",
            hostname: "example.com",
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

  describe("deserialization", () => {
    const testCases = [{ name: "" }];

    for (const testCase of testCases) {
      it(`should deserialize HTTP Responses: ${testCase.name}`, async () => {});
    }
  });
});
