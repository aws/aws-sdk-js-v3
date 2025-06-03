import { map, op, SCHEMA, sim, struct } from "@smithy/core/schema";
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
    [SCHEMA.STRING, SCHEMA.NUMERIC, SCHEMA.BOOLEAN, SCHEMA.BLOB, SCHEMA.TIMESTAMP_DEFAULT]
  );
  const serdeContext = {
    base64Encoder: toBase64,
    utf8Encoder: toUtf8,
  } as any;

  describe("codec", () => {
    it("serializes blobs and timestamps", () => {
      const protocol = new AwsJson1_0Protocol({
        defaultNamespace: "namespace",
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
      });
      protocol.setSerdeContext(serdeContext);

      const schema = struct(
        "ns",
        "MyHttpBindingStructure",
        {},
        ["header", "query", "headerMap", "payload"],
        [
          sim("ns", "MyHeader", SCHEMA.STRING, { httpHeader: "header", jsonName: "MyHeader" }),
          sim("ns", "MyQuery", SCHEMA.STRING, { httpQuery: "query" }),
          map(
            "ns",
            "HeaderMap",
            {
              httpPrefixHeaders: "",
            },
            SCHEMA.STRING,
            SCHEMA.NUMERIC
          ),
          sim("ns", "MyPayload", SCHEMA.DOCUMENT, { httpPayload: 1 }),
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
        "content-length": "60",
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "JsonRpc10.MyOperation",
      });
      expect(request.query).toEqual({});
      expect(request.body).toEqual(`{"header":"hello","query":"world","headerMap":{"a":1,"b":2}}`);
    });
  });
});
