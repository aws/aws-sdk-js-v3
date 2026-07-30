import { NormalizedSchema, TypeRegistry } from "@smithy/core/schema";
import type {
  BigDecimalSchema,
  BigIntegerSchema,
  BlobSchema,
  BooleanSchema,
  DocumentSchema,
  NumericSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StringSchema,
  TimestampDateTimeSchema,
  TimestampDefaultSchema,
  TimestampEpochSecondsSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import type { JsonSettings } from "../json/JsonSettings";
import { JsonCodec } from "../json/codec-v1/JsonCodec";
import { JsonCodec2 } from "../json/codec-v2/JsonCodec2";
import { testCases } from "./new-document-type-test-cases.spec";
import { toUtf8 } from "@smithy/core/serde";
import type { JsonShapeSerializer } from "../json/codec-v1/JsonShapeSerializer";
import type { JsonShapeSerializer2 } from "../json/codec-v2/JsonShapeSerializer2";
import type { JsonShapeDeserializer } from "../json/codec-v1/JsonShapeDeserializer";
import type { JsonShapeDeserializer2 } from "../json/codec-v2/JsonShapeDeserializer2";

/* eslint no-var: 0 */
export var OmniWidget: StaticStructureSchema = [
  3,
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
    [
      0,
      "smithy.api",
      "String",
      {
        jsonName: "String",
        xmlName: "String",
      },
      0,
    ] satisfies StaticSimpleSchema,
    [0, "smithy.api", "Byte", 0, 1 satisfies NumericSchema] satisfies StaticSimpleSchema,
    [0, "smithy.api", "Short", 0, 1 satisfies NumericSchema] satisfies StaticSimpleSchema,
    [0, "smithy.api", "Integer", 0, 1 satisfies NumericSchema] satisfies StaticSimpleSchema,
    [0, "smithy.api", "Long", 0, 1 satisfies NumericSchema] satisfies StaticSimpleSchema,
    [0, "smithy.api", "Float", 0, 1 satisfies NumericSchema] satisfies StaticSimpleSchema,
    1 satisfies NumericSchema, // double
    17 satisfies BigIntegerSchema,
    19 satisfies BigDecimalSchema,
    4 satisfies TimestampDefaultSchema,
    5 satisfies TimestampDateTimeSchema,
    6 satisfies TimestampHttpDateSchema,
    7 satisfies TimestampEpochSecondsSchema,
    15 satisfies DocumentSchema,
    [0, "smithy.api", "Enum", 0 satisfies StringSchema, 0],
    [0, "smithy.api", "IntEnum", 1 satisfies NumericSchema, 0],
    [1, "smithy.example", "OmniWidgetList", 0, () => OmniWidget] satisfies StaticListSchema,
    [2, "smithy.example", "OmniWidgetMap", 0, 0, () => OmniWidget] satisfies StaticMapSchema,
    () => OmniWidget,
  ],
];

TypeRegistry.for(OmniWidget[1]).register(`${OmniWidget[1]}#${OmniWidget[2]}`, OmniWidget);

function getJsonCodec(
  CodecCtor: { new (args: any): JsonCodec | JsonCodec2 },
  test: { settings: JsonSettings }
): JsonCodec | JsonCodec2 {
  const { settings } = test;
  const format =
    {
      "date-time": 5 as const satisfies TimestampDateTimeSchema,
      "http-date": 6 as const satisfies TimestampHttpDateSchema,
      "epoch-seconds": 7 as const satisfies TimestampEpochSecondsSchema,
    }[(settings.timestampFormat?.default as unknown as string) ?? "epoch-seconds"] ??
    (7 as const satisfies TimestampEpochSecondsSchema);
  return new CodecCtor({
    jsonName: settings.jsonName ?? false,
    timestampFormat: {
      default: format,
      useTrait: settings.timestampFormat?.useTrait ?? true,
    },
    httpBindings: settings.httpBindings ?? false,
  });
}

for (const Codec of [JsonCodec, JsonCodec2]) {
  describe("schema conversion tests for serializations, data objects, and documents", () => {
    for (const test of testCases.serdeTests) {
      it(test.name, async () => {
        const subjectSchema = NormalizedSchema.of(TypeRegistry.for("smithy.example").getSchema(test.subject));

        const codec = getJsonCodec(Codec, test);
        const serializer = codec.createSerializer() as JsonShapeSerializer | JsonShapeSerializer2;
        const deserializer = codec.createDeserializer() as JsonShapeDeserializer | JsonShapeDeserializer2;

        serializer.write(15 satisfies DocumentSchema, test.serialized);
        const serialization = toUtf8(serializer.flush());
        const documentFromSerialization = await deserializer.read(15 satisfies DocumentSchema, serialization);
        const canonicalDataObject = await deserializer.read(subjectSchema, serialization);

        serializer.writeDiscriminatedDocument(subjectSchema, canonicalDataObject);
        const documentFromDataObject = await deserializer.read(15 satisfies DocumentSchema, toUtf8(serializer.flush()));

        // 1. data object from serialization
        expect(typeof documentFromSerialization).toBe("object");

        // 2. data object document back to data object
        const dataObjectFromDocument = await deserializer.readObject(subjectSchema, documentFromDataObject);
        delete dataObjectFromDocument.__type;
        expect(dataObjectFromDocument).toEqual(canonicalDataObject);

        // 3. data object from serialization document
        const dataObjectFromSerializedDocument = await deserializer.readObject(
          subjectSchema,
          documentFromSerialization
        );
        expect(dataObjectFromSerializedDocument).toEqual(canonicalDataObject);

        // 4. serialization from data object
        serializer.write(subjectSchema, canonicalDataObject);
        const serializationFromDataObject = toUtf8(serializer.flush());
        expect(serializationFromDataObject).toEqual(serialization);

        // 5. serialization from serialization document
        serializer.write(15 satisfies DocumentSchema, documentFromSerialization);
        const serializationFromSerializedDocument = toUtf8(serializer.flush());
        expect(serializationFromSerializedDocument).toEqual(serialization);

        // 6. serialization from data object document
        delete documentFromDataObject.__type;
        serializer.write(15 satisfies DocumentSchema, documentFromDataObject);
        const serializationFromDocumentFromDataObject = toUtf8(serializer.flush());
        expect(serializationFromDocumentFromDataObject).toEqual(serialization);
      });
    }
  });
}
