import { list, map, NormalizedSchema, sim, struct, TypeRegistry } from "@smithy/core/schema";
import type {
  BigDecimalSchema,
  BigIntegerSchema,
  BlobSchema,
  BooleanSchema,
  DocumentSchema,
  DocumentType,
  NumericSchema,
  StringSchema,
  TimestampDateTimeSchema,
  TimestampDefaultSchema,
  TimestampEpochSecondsSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";
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
    21 satisfies BlobSchema,
    2 satisfies BooleanSchema,
    sim("smithy.api", "String", 0, {
      jsonName: "String",
      xmlName: "String",
    }),
    sim("smithy.api", "Byte", 1 satisfies NumericSchema, 0),
    sim("smithy.api", "Short", 1 satisfies NumericSchema, 0),
    sim("smithy.api", "Integer", 1 satisfies NumericSchema, 0),
    sim("smithy.api", "Long", 1 satisfies NumericSchema, 0),
    sim("smithy.api", "Float", 1 satisfies NumericSchema, 0),
    1 satisfies NumericSchema, // double
    17 satisfies BigIntegerSchema,
    19 satisfies BigDecimalSchema,
    4 satisfies TimestampDefaultSchema,
    5 satisfies TimestampDateTimeSchema,
    6 satisfies TimestampHttpDateSchema,
    7 satisfies TimestampEpochSecondsSchema,
    15 satisfies DocumentSchema,
    sim("smithy.api", "Enum", 0 satisfies StringSchema, 0),
    sim("smithy.api", "IntEnum", 1 satisfies NumericSchema, 0),
    list("smithy.example", "OmniWidgetList", 0, () => OmniWidget),
    map("smithy.example", "OmniWidgetMap", 0, 0, () => OmniWidget),
    () => OmniWidget,
  ]
);

TypeRegistry.for(OmniWidget.namespace).register(OmniWidget.getName(), OmniWidget);

function getJsonCodec(test: { settings: JsonSettings }): JsonCodec {
  const { settings } = test;
  const format =
    {
      "date-time": 5 as const satisfies TimestampDateTimeSchema,
      "http-date": 6 as const satisfies TimestampHttpDateSchema,
      "epoch-seconds": 7 as const satisfies TimestampEpochSecondsSchema,
    }[(settings.timestampFormat?.default as unknown as string) ?? "epoch-seconds"] ??
    (7 as const satisfies TimestampEpochSecondsSchema);
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
  return deserializer.readObject(15 satisfies DocumentSchema, data);
}

describe("schema conversion tests for serializations, data objects, and documents", () => {
  for (const test of testCases.serdeTests) {
    it(test.name, async () => {
      const subjectSchema = NormalizedSchema.of(TypeRegistry.for("smithy.example").getSchema(test.subject));

      const codec = getJsonCodec(test);
      const serializer = codec.createSerializer();
      const deserializer = codec.createDeserializer();

      serializer.write(15 satisfies DocumentSchema, test.serialized);
      const serialization = serializer.flush();
      const documentFromSerialization = await deserializer.read(15 satisfies DocumentSchema, serialization);
      const canonicalDataObject = await deserializer.read(subjectSchema, serialization);

      serializer.writeDiscriminatedDocument(subjectSchema, canonicalDataObject);
      const documentFromDataObject = await deserializer.read(15 satisfies DocumentSchema, serializer.flush());

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
      serializer.write(15 satisfies DocumentSchema, documentFromSerialization);
      const serializationFromSerializedDocument = serializer.flush();
      expect(serializationFromSerializedDocument).toEqual(serialization);

      // 6. serialization from data object document
      delete documentFromDataObject.__type;
      serializer.write(15 satisfies DocumentSchema, documentFromDataObject);
      const serializationFromDocumentFromDataObject = serializer.flush();
      expect(serializationFromDocumentFromDataObject).toEqual(serialization);
    });
  }
});
