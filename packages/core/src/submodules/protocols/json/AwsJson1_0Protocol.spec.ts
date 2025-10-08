import { map, op, sim, struct } from "@smithy/core/schema";
import type {
  BlobSchema,
  BooleanSchema,
  DocumentSchema,
  NumericSchema,
  StringSchema,
  TimestampDefaultSchema,
} from "@smithy/types";
import { toBase64 } from "@smithy/util-base64";
import { toUtf8 } from "@smithy/util-utf8";
import { describe, expect, test as it } from "vitest";

import { context } from "../test-schema.spec";
import { AwsJson1_0Protocol } from "./AwsJson1_0Protocol";

describe(AwsJson1_0Protocol.name, () => {
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
      const protocol = new AwsJson1_0Protocol({
        defaultNamespace: "namespace",
        serviceTarget: "JsonRpc10",
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
      const protocol = new AwsJson1_0Protocol({
        defaultNamespace: "namespace",
        serviceTarget: "JsonRpc10",
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

    it("ignores JSON name and HTTP bindings", async () => {
      const protocol = new AwsJson1_0Protocol({
        defaultNamespace: "namespace",
        serviceTarget: "JsonRpc10",
      });
      protocol.setSerdeContext(serdeContext);

      const schema = struct(
        "ns",
        "MyHttpBindingStructure",
        {},
        ["header", "query", "headerMap", "payload"],
        [
          sim("ns", "MyHeader", 0 satisfies StringSchema, { httpHeader: "header", jsonName: "MyHeader" }),
          sim("ns", "MyQuery", 0 satisfies StringSchema, { httpQuery: "query" }),
          map(
            "ns",
            "HeaderMap",
            {
              httpPrefixHeaders: "",
            },
            0 satisfies StringSchema,
            1 satisfies NumericSchema
          ),
          sim("ns", "MyPayload", 15 satisfies DocumentSchema, { httpPayload: 1 }),
        ]
      );
      const operationSchema = op("ns", "MyOperation", {}, schema, "unit");

      const request = await protocol.serializeRequest(
        operationSchema,
        {
          header: "hello",
          query: "world",
          headerMap: {
            a: 1,
            b: 2,
          },
        },
        context
      );

      expect(request.headers).toEqual({
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "JsonRpc10.MyOperation",
      });
      expect(request.query).toEqual({});
      expect(request.body).toEqual(`{"header":"hello","query":"world","headerMap":{"a":1,"b":2}}`);
    });
  });
});
