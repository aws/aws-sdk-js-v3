import { op, sim, struct } from "@smithy/core/schema";
import { HttpResponse } from "@smithy/protocol-http";
import type {
  BlobSchema,
  BooleanSchema,
  MapSchemaModifier,
  NumericSchema,
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
  const schema = struct(
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
    ]
  );
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

    const operationSchema = op(
      "ns",
      "MyOperation",
      {},
      struct(
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
            struct(
              "ns",
              "PayloadStruct",
              0,
              ["a", "b"],
              [
                [0 satisfies StringSchema, 0],
                [0 satisfies StringSchema, { jsonName: "JSON_NAME" }],
              ]
            ),
            { httpPayload: 1 },
          ],
        ]
      ),
      struct(
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
            struct(
              "ns",
              "PayloadStruct",
              { httpPayload: 1 },
              ["a", "b"],
              [
                [0 satisfies StringSchema, 0],
                [0 satisfies StringSchema, { jsonName: "JSON_NAME" }],
              ]
            ),
            { httpPayload: 1 },
          ],
        ]
      )
    );

    it("obeys jsonName and HTTP bindings during serialization", async () => {
      const request = await protocol.serializeRequest(
        operationSchema,
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
        operationSchema,
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
        op(
          "ns",
          "",
          0,
          struct(
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
                sim("ns", "", 7 satisfies TimestampEpochSecondsSchema, 0),
                {
                  httpHeader: "header-target-trait-date",
                },
              ],
              [4 satisfies TimestampDefaultSchema, { httpQuery: "query-default-date" }],
              [
                struct("ns", "date", 0, ["payloadDefaultDate"], [4 satisfies TimestampDefaultSchema]),
                { httpPayload: 1 },
              ],
            ]
          ),
          "unit"
        ),
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
  });
});
