import { HttpResponse } from "@smithy/protocol-http";
import type {
  BlobSchema,
  BooleanSchema,
  MapSchemaModifier,
  NumericSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StringSchema,
  TimestampDateTimeSchema,
  TimestampDefaultSchema,
  TimestampEpochSecondsSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";
import { toBase64 } from "@smithy/util-base64";
import { toUtf8 } from "@smithy/util-utf8";
import { describe, expect, test as it } from "vitest";

import { context } from "../test-schema.spec";
import { AwsRestJsonProtocol } from "./AwsRestJsonProtocol";

describe(AwsRestJsonProtocol.name, () => {
  const json = {
    string: "string",
    number: 1234,
    boolean: false,
    blob: "AAAAAAAAAAA=",
    timestamp: 0,
  };
  const schema: StaticStructureSchema = [
    3,
    "ns",
    "MyStruct",
    0,
    [...Object.keys(json)],
    [
      0 satisfies StringSchema,
      1 satisfies NumericSchema,
      2 satisfies BooleanSchema,
      21 satisfies BlobSchema,
      4 satisfies TimestampDefaultSchema,
    ],
  ];
  const serdeContext = {
    base64Encoder: toBase64,
    utf8Encoder: toUtf8,
  } as any;

  describe("codec", () => {
    it("serializes blobs and timestamps", () => {
      const protocol = new AwsRestJsonProtocol({
        defaultNamespace: "ns",
      });
      protocol.setSerdeContext(serdeContext);
      const codec = protocol.getPayloadCodec();
      const serializer = codec.createSerializer();
      const data = {
        string: "string",
        number: 1234,
        boolean: false,
        blob: new Uint8Array(8),
        timestamp: new Date(0),
      };
      serializer.write(schema, data);
      const serialized = serializer.flush();
      expect(JSON.parse(serialized)).toEqual({
        string: "string",
        number: 1234,
        boolean: false,
        blob: "AAAAAAAAAAA=",
        timestamp: 0,
      });
    });

    it("deserializes blobs and timestamps", async () => {
      const protocol = new AwsRestJsonProtocol({
        defaultNamespace: "ns",
      });
      protocol.setSerdeContext(serdeContext);
      const codec = protocol.getPayloadCodec();
      const deserializer = codec.createDeserializer();
      const parsed = await deserializer.read(schema, JSON.stringify(json));
      expect(parsed).toEqual({
        string: "string",
        number: 1234,
        boolean: false,
        blob: new Uint8Array(8),
        timestamp: new Date(0),
      });
    });
  });

  describe("protocol", async () => {
    const protocol = new AwsRestJsonProtocol({
      defaultNamespace: "ns",
    });
    protocol.setSerdeContext(serdeContext);

    const operationSchema: StaticOperationSchema = [
      9,
      "ns",
      "MyOperation",
      {},
      [
        3,
        "ns",
        "MyHttpBindingStructureRequest",
        {},
        ["header", "query", "headerMap", "payload"],
        [
          [0 satisfies StringSchema, { httpHeader: "header" }],
          [0 satisfies StringSchema, { httpQuery: "query" }],
          [
            (128 satisfies MapSchemaModifier) | (1 satisfies NumericSchema),
            {
              httpPrefixHeaders: "",
            },
          ],
          [
            [
              3,
              "ns",
              "PayloadStruct",
              0,
              ["a", "b"],
              [
                [0 satisfies StringSchema, 0],
                [0 satisfies StringSchema, { jsonName: "JSON_NAME" }],
              ],
            ],
            { httpPayload: 1 },
          ],
        ],
      ],
      [
        3,
        "ns",
        "MyHttpBindingStructureResponse",
        {},
        ["header", "code", "headerMap", "payload"],
        [
          [0 satisfies StringSchema, { httpHeader: "header" }],
          [1 satisfies NumericSchema, { httpResponseCode: 1 }],
          [
            (128 satisfies MapSchemaModifier) | (1 satisfies NumericSchema),
            {
              httpPrefixHeaders: "x-",
            },
          ],
          [
            [
              3,
              "ns",
              "PayloadStruct",
              { httpPayload: 1 },
              ["a", "b"],
              [
                [0 satisfies StringSchema, 0],
                [0 satisfies StringSchema, { jsonName: "JSON_NAME" }],
              ],
            ],
            { httpPayload: 1 },
          ],
        ],
      ],
    ];

    it("obeys jsonName and HTTP bindings during serialization", async () => {
      const request = await protocol.serializeRequest(
        {
          namespace: operationSchema[1],
          name: operationSchema[2],
          traits: operationSchema[3],
          input: operationSchema[4],
          output: operationSchema[5],
        },
        {
          header: "hello",
          query: "world",
          headerMap: {
            a: 1,
            b: 2,
            c: 3,
          },
          payload: {
            a: "a",
            b: "b",
          },
        },
        context
      );

      expect(request.headers).toEqual({
        "content-type": "application/json",
        header: "hello",
        a: "1",
        b: "2",
        c: "3",
      });
      expect(request.query).toEqual({
        query: "world",
      });
      expect(request.body).toEqual(`{"a":"a","JSON_NAME":"b"}`);
    });

    it("obeys jsonName and HTTP bindings and deserialization", async () => {
      const output = await protocol.deserializeResponse(
        {
          namespace: operationSchema[1],
          name: operationSchema[2],
          traits: operationSchema[3],
          input: operationSchema[4],
          output: operationSchema[5],
        },
        {} as any,
        new HttpResponse({
          statusCode: 200,
          headers: { header: "hello", "x-a": "1", "x-b": "2", "x-c": "3" },
          body: Buffer.from(
            JSON.stringify({
              a: "a",
              JSON_NAME: "b",
            })
          ),
        })
      );

      expect(output).toEqual({
        $metadata: {
          cfId: undefined,
          extendedRequestId: undefined,
          httpStatusCode: 200,
          requestId: undefined,
        },
        header: "hello",
        code: 200,
        headerMap: {
          a: 1,
          b: 2,
          c: 3,
        },
        payload: {
          a: "a",
          b: "b",
        },
      });
    });

    it("selects the correct timestamp format based on http binding location", async () => {
      const request = await protocol.serializeRequest(
        {
          namespace: "ns",
          name: "",
          traits: 0,
          input: [
            3,
            "ns",
            "",
            0,
            [
              "headerDefaultDate",
              "headerMemberTraitDate",
              "headerHttpDate",
              "headerEpochSeconds",
              "headerTargetTraitDate",
              "queryDefaultDate",
              "payloadDefaultDate",
            ],
            [
              [4 satisfies TimestampDefaultSchema, { httpHeader: "header-default-date" }],
              [5 satisfies TimestampDateTimeSchema, { httpHeader: "header-member-trait-date" }],
              [6 satisfies TimestampHttpDateSchema, { httpHeader: "header-http-date" }],
              [7 satisfies TimestampEpochSecondsSchema, { httpHeader: "header-epoch-seconds" }],
              [
                [0, "ns", "", 0, 7 satisfies TimestampEpochSecondsSchema] satisfies StaticSimpleSchema,
                {
                  httpHeader: "header-target-trait-date",
                },
              ],
              [4 satisfies TimestampDefaultSchema, { httpQuery: "query-default-date" }],
              [[3, "ns", "date", 0, ["payloadDefaultDate"], [4 satisfies TimestampDefaultSchema]], { httpPayload: 1 }],
            ],
          ],
          output: "unit",
        },
        {
          headerDefaultDate: new Date(0),
          headerMemberTraitDate: new Date(0),
          headerHttpDate: new Date(0),
          headerEpochSeconds: new Date(0),
          headerTargetTraitDate: new Date(0),
          queryDefaultDate: new Date(0),
          payloadDefaultDate: {
            payloadDefaultDate: new Date(0),
          },
        },
        context
      );
      expect(request.body).toEqual(`{"payloadDefaultDate":0}`);

      expect(request.headers).toEqual({
        "content-type": "application/json",
        "header-default-date": "Thu, 01 Jan 1970 00:00:00 GMT",
        "header-member-trait-date": "1970-01-01T00:00:00Z",
        "header-epoch-seconds": "0",
        "header-http-date": "Thu, 01 Jan 1970 00:00:00 GMT",
        "header-target-trait-date": "0",
      });

      expect(request.query).toEqual({
        "query-default-date": "1970-01-01T00:00:00Z",
      });
    });

    it("inserts a default body only when the payload is a structure shape", async () => {
      const operation = {
        namespace: "ns",
        name: "Operation",
        traits: 0,
        input: [
          3,
          "ns",
          "Input",
          0,
          ["payload", "name"],
          [
            [21 satisfies BlobSchema, { httpPayload: 1 }],
            [0 satisfies StringSchema, { httpHeader: "name" }],
          ],
        ] satisfies StaticStructureSchema,
        output: "unit" as const,
      };

      for (const body of ["", false, undefined, 0, new Uint8Array()]) {
        const request = await protocol.serializeRequest(
          operation,
          {
            name: "hi",
            payload: body,
          },
          context
        );
        if (!body) {
          expect(request.body).toBeFalsy();
        }
        expect(request.body).toEqual(body);
      }

      for (const body of [undefined, null]) {
        const request = await protocol.serializeRequest(
          {
            ...operation,
            input: [
              3,
              "ns",
              "Input",
              0,
              ["payload", "name"],
              [
                [3, "ns", "PayloadStruct", { httpPayload: 1 }, ["a", "b"], [0, 0]] satisfies StaticStructureSchema,
                [0 satisfies StringSchema, { httpHeader: "name" }],
              ],
            ] satisfies StaticStructureSchema,
          },
          {
            payload: body,
          },
          context
        );
        expect(request.body).toEqual(`{}`);
      }
    });

    it("should fill in the payload member of a response if the wire response was empty", async () => {
      const operation = {
        namespace: "ns",
        name: "Operation",
        traits: 0,
        input: "unit" as const,
        output: [
          3,
          "ns",
          "Output",
          0,
          ["name", "payload"],
          [
            [0, { httpHeader: "name" }],
            [21, { httpPayload: 1 }],
          ],
        ] satisfies StaticStructureSchema,
      };

      const output = await protocol.deserializeResponse(
        operation,
        context,
        new HttpResponse({
          statusCode: 200,
          headers: {},
        })
      );

      expect(output).toEqual({
        $metadata: {
          cfId: undefined,
          extendedRequestId: undefined,
          httpStatusCode: 200,
          requestId: undefined,
        },
        payload: null,
      });
    });
  });
});
