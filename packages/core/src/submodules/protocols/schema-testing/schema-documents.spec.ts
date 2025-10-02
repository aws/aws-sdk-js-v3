import { list, map, NormalizedSchema, SCHEMA, sim, struct, TypeRegistry } from "@smithy/core/schema";
import { DocumentType, Schema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { JsonCodec, JsonSettings } from "../json/JsonCodec";
import { JsonShapeDeserializer } from "../json/JsonShapeDeserializer";
import { testCases } from "./new-document-type-test-cases.spec";

/* eslint no-var: 0 */
export var OmniWidget = struct(
  "smithy.example",
  "OmniWidget",
  0,
  [
    "blob",
    "boolean",
    "string",
    "byte",
    "short",
    "integer",
    "long",
    "float",
    "double",
    "bigInteger",
    "bigDecimal",
    "timestamp",
    "timestampDateTime",
    "timestampHttpDate",
    "timestampEpochSeconds",
    "document",
    "enum",
    "intEnum",
    "list",
    "map",
    "structure",
  ],
  [
    SCHEMA.BLOB,
    SCHEMA.BOOLEAN,
    sim("smithy.api", "String", 0, {
      jsonName: "String",
      xmlName: "String",
    }),
    sim("smithy.api", "Byte", SCHEMA.NUMERIC, 0),
    sim("smithy.api", "Short", SCHEMA.NUMERIC, 0),
    sim("smithy.api", "Integer", SCHEMA.NUMERIC, 0),
    sim("smithy.api", "Long", SCHEMA.NUMERIC, 0),
    sim("smithy.api", "Float", SCHEMA.NUMERIC, 0),
    SCHEMA.NUMERIC, // double
    SCHEMA.BIG_INTEGER,
    SCHEMA.BIG_DECIMAL,
    SCHEMA.TIMESTAMP_DEFAULT,
    SCHEMA.TIMESTAMP_DATE_TIME,
    SCHEMA.TIMESTAMP_HTTP_DATE,
    SCHEMA.TIMESTAMP_EPOCH_SECONDS,
    SCHEMA.DOCUMENT,
    sim("smithy.api", "Enum", SCHEMA.STRING, 0),
    sim("smithy.api", "IntEnum", SCHEMA.NUMERIC, 0),
    list("smithy.example", "OmniWidgetList", 0, () => OmniWidget),
    map("smithy.example", "OmniWidgetMap", 0, 0, () => OmniWidget),
    () => OmniWidget,
  ]
);

function getJsonCodec(test: { settings: JsonSettings }): JsonCodec {
  const { settings } = test;
  const format =
    {
      "date-time": SCHEMA.TIMESTAMP_DATE_TIME,
      "http-date": SCHEMA.TIMESTAMP_HTTP_DATE,
      "epoch-seconds": SCHEMA.TIMESTAMP_EPOCH_SECONDS,
    }[(settings.timestampFormat?.default as unknown as string) ?? "epoch-seconds"] ?? SCHEMA.TIMESTAMP_EPOCH_SECONDS;
  return new JsonCodec({
    jsonName: settings.jsonName ?? false,
    timestampFormat: {
      default: format,
      useTrait: settings.timestampFormat?.useTrait ?? true,
    },
    httpBindings: settings.httpBindings ?? false,
  });
}

/**
 * Attempts to use the discriminator on the data instead of requiring a
 * schema as input.
 */
function readDocument(deserializer: JsonShapeDeserializer, data: DocumentType): any {
  if (data && typeof data === "object" && typeof (data as any).__type === "string") {
    const object = data as any;
    const [namespace, name] = object.__type.split("#");
    delete object.__type;
    const schema = TypeRegistry.for(namespace).getSchema(name);
    const ns = NormalizedSchema.of(schema);
    return deserializer.readObject(ns, object);
  }
  return deserializer.readObject(SCHEMA.DOCUMENT, data);
}

describe("schema conversion tests for serializations, data objects, and documents", () => {
  for (const test of testCases.serdeTests) {
    it(test.name, async () => {
      const subjectSchema = NormalizedSchema.of(TypeRegistry.for("smithy.example").getSchema(test.subject));

      const codec = getJsonCodec(test);
      const serializer = codec.createSerializer();
      const deserializer = codec.createDeserializer();

      serializer.write(SCHEMA.DOCUMENT, test.serialized);
      const serialization = serializer.flush();
      const documentFromSerialization = await deserializer.read(SCHEMA.DOCUMENT, serialization);
      const canonicalDataObject = await deserializer.read(subjectSchema, serialization);

      serializer.writeDiscriminatedDocument(subjectSchema, canonicalDataObject);
      const documentFromDataObject = await deserializer.read(SCHEMA.DOCUMENT, serializer.flush());

      // 1. data object from serialization
      expect(typeof documentFromSerialization).toBe("object");

      // 2. data object document back to data object
      const dataObjectFromDocument = await deserializer.readObject(subjectSchema, documentFromDataObject);
      expect(dataObjectFromDocument).toEqual(canonicalDataObject);

      // 3. data object from serialization document
      const dataObjectFromSerializedDocument = await deserializer.readObject(subjectSchema, documentFromSerialization);
      expect(dataObjectFromSerializedDocument).toEqual(canonicalDataObject);

      // 4. serialization from data object
      serializer.write(subjectSchema, canonicalDataObject);
      const serializationFromDataObject = serializer.flush();
      expect(serializationFromDataObject).toEqual(serialization);

      // 5. serialization from serialization document
      serializer.write(SCHEMA.DOCUMENT, documentFromSerialization);
      const serializationFromSerializedDocument = serializer.flush();
      expect(serializationFromSerializedDocument).toEqual(serialization);

      // 6. serialization from data object document
      delete documentFromDataObject.__type;
      serializer.write(SCHEMA.DOCUMENT, documentFromDataObject);
      const serializationFromDocumentFromDataObject = serializer.flush();
      expect(serializationFromDocumentFromDataObject).toEqual(serialization);
    });
  }
});
