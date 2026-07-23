import fc from "fast-check";
import { NumericValue } from "@smithy/core/serde";
import type {
  BlobSchema,
  BigDecimalSchema,
  BigIntegerSchema,
  BooleanSchema,
  DocumentSchema,
  NumericSchema,
  StaticListSchema,
  StaticStructureSchema,
  StaticUnionSchema,
  StringSchema,
  TimestampDefaultSchema,
  TimestampEpochSecondsSchema,
  TimestampDateTimeSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";
import { describe, expect, it } from "vitest";

import { ByteJsonShapeSerializer } from "./experimental/ByteJsonShapeSerializer";
import { BufferJsonShapeDeserializer } from "./experimental/BufferJsonShapeDeserializer";
import { JsonShapeDeserializer } from "./JsonShapeDeserializer";
import { JsonShapeSerializer } from "./JsonShapeSerializer";

// ─── Settings ────────────────────────────────────────────────────────────────

const settings = {
  jsonName: true,
  timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
} as const;

// ─── Production (reference) implementations ──────────────────────────────────

const refSerializer = new JsonShapeSerializer(settings);
const refDeserializer = new JsonShapeDeserializer(settings);

// ─── Experimental (candidate) implementations ────────────────────────────────

const byteSerializer = new ByteJsonShapeSerializer(settings);
const bufferDeserializer = new BufferJsonShapeDeserializer(settings);

// ─── Helpers ─────────────────────────────────────────────────────────────────

const decoder = new TextDecoder();

function serializeRef(schema: any, data: unknown): string {
  refSerializer.write(schema, data);
  return refSerializer.flush();
}

function serializeByte(schema: any, data: unknown): string {
  byteSerializer.write(schema, data);
  return decoder.decode(byteSerializer.flush());
}

async function deserializeRef(schema: any, json: string): Promise<unknown> {
  return refDeserializer.read(schema, json);
}

async function deserializeBuffer(schema: any, json: string): Promise<unknown> {
  return bufferDeserializer.read(schema, json);
}

async function deserializeBufferBytes(schema: any, json: string): Promise<unknown> {
  const bytes = new TextEncoder().encode(json);
  return bufferDeserializer.read(schema, bytes);
}

// ─── Schemas ─────────────────────────────────────────────────────────────────

const stringMapSchema = [3, "", "S", 0, ["tags"], [[2, "", "Map", 0, 0, 0]]] satisfies StaticStructureSchema;
const numericMapSchema = [3, "", "S", 0, ["values"], [[2, "", "Map", 0, 0, 1]]] satisfies StaticStructureSchema;
const booleanMapSchema = [3, "", "S", 0, ["flags"], [[2, "", "Map", 0, 0, 2]]] satisfies StaticStructureSchema;

const sparseStringMapSchema = [
  3,
  "",
  "S",
  0,
  ["tags"],
  [[[2, "", "Map", 0, 0, 0], { sparse: 1 }]],
] satisfies StaticStructureSchema;

const listOfStringsSchema = [
  3,
  "",
  "S",
  0,
  ["items"],
  [[[1, "", "List", 0, 0] satisfies StaticListSchema, 0]],
] satisfies StaticStructureSchema;

const listOfNumbersSchema = [
  3,
  "",
  "S",
  0,
  ["items"],
  [[[1, "", "List", 0, 1] satisfies StaticListSchema, 0]],
] satisfies StaticStructureSchema;

const blobSchema = [3, "", "S", 0, ["data"], [21 satisfies BlobSchema]] satisfies StaticStructureSchema;

const timestampSchema = [
  3,
  "",
  "S",
  0,
  ["epochTs", "isoTs", "httpTs"],
  [7 satisfies TimestampEpochSecondsSchema, 5 satisfies TimestampDateTimeSchema, 6 satisfies TimestampHttpDateSchema],
] satisfies StaticStructureSchema;

const bigNumberSchema = [
  3,
  "",
  "S",
  0,
  ["bigint", "bigdecimal"],
  [17 satisfies BigIntegerSchema, 19 satisfies BigDecimalSchema],
] satisfies StaticStructureSchema;

const nestingStruct: StaticStructureSchema = [
  3,
  "ns",
  "Nested",
  0,
  ["str", "num", "bool", "list", "map", "nested"],
  [
    0 satisfies StringSchema,
    1 satisfies NumericSchema,
    2 satisfies BooleanSchema,
    64 | 1,
    128 | 0,
    () => nestingStruct,
  ],
];

const unionSchema = [
  4,
  "ns",
  "MyUnion",
  0,
  ["strVal", "numVal", "boolVal"],
  [0 satisfies StringSchema, 1 satisfies NumericSchema, 2 satisfies BooleanSchema],
] satisfies StaticUnionSchema;

const structWithUnion = [3, "ns", "S", 0, ["union"], [unionSchema]] satisfies StaticStructureSchema;

const documentSchema = 15 satisfies DocumentSchema;
const documentStructSchema = [3, "", "S", 0, ["doc"], [15 satisfies DocumentSchema]] satisfies StaticStructureSchema;

const allTypesSchema: StaticStructureSchema = [
  3,
  "ns",
  "AllTypes",
  0,
  ["str", "num", "bool", "blob", "ts", "bigint", "list", "map", "nested"],
  [
    0 satisfies StringSchema,
    1 satisfies NumericSchema,
    2 satisfies BooleanSchema,
    21 satisfies BlobSchema,
    7 satisfies TimestampEpochSecondsSchema,
    17 satisfies BigIntegerSchema,
    [1, "", "List", 0, 0] satisfies StaticListSchema,
    [2, "", "Map", 0, 0, 0],
    () => allTypesSchema,
  ],
] satisfies StaticStructureSchema;

// ─── Arbitraries ─────────────────────────────────────────────────────────────

/** Arbitrary string with varied characters including ones that need JSON escaping. */
const jsonString = fc.oneof(
  fc.string({ minLength: 0, maxLength: 100 }),
  // Strings with control characters and special JSON chars
  fc.string({
    unit: fc.oneof(
      fc.constantFrom(..."abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")),
      fc.constantFrom('"', "\\", "\n", "\t", "\r", "\b", "\f", "\0"),
      // Unicode chars
      fc.constantFrom("\u00e9", "\u2603", "\ud83d\ude00", "\u0001", "\u001f")
    ),
    minLength: 0,
    maxLength: 50,
  }),
  // ASCII-safe strings (common case)
  fc.string({
    unit: fc.constantFrom(..."abcdefghijklmnopqrstuvwxyz0123456789-_.".split("")),
    minLength: 0,
    maxLength: 50,
  })
);

/** Arbitrary safe map key. */
const mapKey = fc
  .oneof(
    fc.string({ minLength: 1, maxLength: 30 }),
    fc.string({
      unit: fc.oneof(
        fc.constantFrom(..."abcdefghijklmnopqrstuvwxyz0123456789".split("")),
        fc.constantFrom('"', "\\", "\n", "\t", "\r", "\0")
      ),
      minLength: 1,
      maxLength: 20,
    })
    // __proto__ is excluded because fc.dictionary assigns keys via normal property
    // assignment, which triggers the __proto__ setter instead of creating an own
    // property. This makes the test data itself inconsistent. The __proto__ handling
    // is covered by dedicated unit tests instead.
  )
  .filter((k) => k !== "__proto__");

/** Arbitrary number that's JSON-safe (no Infinity, no NaN for basic tests). */
const jsonNumber = fc.oneof(
  fc.integer(),
  fc.double({ noNaN: true, noDefaultInfinity: true, min: -1e15, max: 1e15 }),
  fc.constantFrom(0, -0, 1, -1, 0.1, -0.1, 1e10, -1e10)
);

/** Arbitrary map with string values. */
const stringMap = fc.dictionary(mapKey, jsonString, { minKeys: 0, maxKeys: 50 });

/** Arbitrary map with numeric values. */
const numericMap = fc.dictionary(mapKey, jsonNumber, { minKeys: 0, maxKeys: 50 });

/** Arbitrary map with boolean values. */
const booleanMap = fc.dictionary(mapKey, fc.boolean(), { minKeys: 0, maxKeys: 50 });

/** Arbitrary sparse map (string values, some nulls). */
const sparseStringMap = fc.dictionary(mapKey, fc.option(jsonString, { nil: null }), { minKeys: 0, maxKeys: 50 });

/** Arbitrary Uint8Array for blob testing. */
const blob = fc.uint8Array({ minLength: 0, maxLength: 512 });

/** Arbitrary Date for timestamp testing (only valid dates). */
const timestamp = fc
  .date({ min: new Date("1970-01-01"), max: new Date("2100-01-01") })
  .filter((d) => !isNaN(d.getTime()));

/** Arbitrary bigint. */
const bigint = fc.bigInt({ min: -10000000000000000000000000000n, max: 10000000000000000000000000000n });

/**
 * Arbitrary bigint that stays within JSON.parse precision bounds.
 * Used for deserialization tests where the reference uses JSON.parse
 * which loses precision beyond Number.MAX_SAFE_INTEGER.
 */
const safeBigint = fc.bigInt({ min: -9007199254740991n, max: 9007199254740991n });

/** Arbitrary nested struct (recursive). */
const nestedStruct: fc.Arbitrary<any> = fc.letrec((tie) => ({
  struct: fc.record(
    {
      str: fc.option(jsonString, { nil: undefined }),
      num: fc.option(jsonNumber, { nil: undefined }),
      bool: fc.option(fc.boolean(), { nil: undefined }),
      list: fc.option(fc.array(jsonNumber, { minLength: 0, maxLength: 10 }), { nil: undefined }),
      map: fc.option(fc.dictionary(mapKey, jsonString, { minKeys: 0, maxKeys: 5 }), { nil: undefined }),
      nested: fc.option(tie("struct") as fc.Arbitrary<any>, { nil: undefined, depthSize: "small" }),
    },
    { requiredKeys: [] }
  ),
})).struct;

/** Arbitrary data for the allTypes schema. */
const allTypesData: fc.Arbitrary<any> = fc.letrec((tie) => ({
  data: fc.record(
    {
      str: fc.option(jsonString, { nil: undefined }),
      num: fc.option(jsonNumber, { nil: undefined }),
      bool: fc.option(fc.boolean(), { nil: undefined }),
      blob: fc.option(blob, { nil: undefined }),
      ts: fc.option(timestamp, { nil: undefined }),
      bigint: fc.option(bigint, { nil: undefined }),
      list: fc.option(fc.array(jsonString, { minLength: 0, maxLength: 10 }), { nil: undefined }),
      map: fc.option(fc.dictionary(mapKey, jsonString, { minKeys: 0, maxKeys: 5 }), { nil: undefined }),
      nested: fc.option(tie("data") as fc.Arbitrary<any>, { nil: undefined, depthSize: "small" }),
    },
    { requiredKeys: [] }
  ),
})).data;

/**
 * Same as allTypesData but with bigints constrained to safe integer range.
 * Used in deserialization and round-trip tests where the reference deserializer
 * uses JSON.parse which loses precision on large integers.
 */
const safeAllTypesData: fc.Arbitrary<any> = fc.letrec((tie) => ({
  data: fc.record(
    {
      str: fc.option(jsonString, { nil: undefined }),
      num: fc.option(jsonNumber, { nil: undefined }),
      bool: fc.option(fc.boolean(), { nil: undefined }),
      blob: fc.option(blob, { nil: undefined }),
      ts: fc.option(timestamp, { nil: undefined }),
      bigint: fc.option(safeBigint, { nil: undefined }),
      list: fc.option(fc.array(jsonString, { minLength: 0, maxLength: 10 }), { nil: undefined }),
      map: fc.option(fc.dictionary(mapKey, jsonString, { minKeys: 0, maxKeys: 5 }), { nil: undefined }),
      nested: fc.option(tie("data") as fc.Arbitrary<any>, { nil: undefined, depthSize: "small" }),
    },
    { requiredKeys: [] }
  ),
})).data;

/** Arbitrary document value (recursive JSON-like). */
const documentValue: fc.Arbitrary<any> = fc.letrec((tie) => ({
  value: fc.oneof(
    { depthSize: "small" },
    jsonString,
    jsonNumber,
    fc.boolean(),
    fc.constant(null),
    fc.array(tie("value") as fc.Arbitrary<any>, { minLength: 0, maxLength: 5 }),
    fc.dictionary(mapKey, tie("value") as fc.Arbitrary<any>, { minKeys: 0, maxKeys: 5 })
  ),
})).value;

// ─── Fuzz Tests ──────────────────────────────────────────────────────────────

describe("JSON serde fuzz testing", () => {
  describe("Serializer: ByteJsonShapeSerializer matches JsonShapeSerializer", () => {
    it("string maps", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(stringMap, (tags) => {
          const ref = serializeRef(stringMapSchema, { tags });
          const exp = serializeByte(stringMapSchema, { tags });
          expect(exp).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("numeric maps", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(numericMap, (values) => {
          const ref = serializeRef(numericMapSchema, { values });
          const exp = serializeByte(numericMapSchema, { values });
          expect(exp).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("boolean maps", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(booleanMap, (flags) => {
          const ref = serializeRef(booleanMapSchema, { flags });
          const exp = serializeByte(booleanMapSchema, { flags });
          expect(exp).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("sparse maps with null values", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(sparseStringMap, (tags) => {
          const ref = serializeRef(sparseStringMapSchema, { tags });
          const exp = serializeByte(sparseStringMapSchema, { tags });
          expect(exp).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("lists of strings", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(fc.array(jsonString, { minLength: 0, maxLength: 50 }), (items) => {
          const ref = serializeRef(listOfStringsSchema, { items });
          const exp = serializeByte(listOfStringsSchema, { items });
          expect(exp).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("lists of numbers", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(fc.array(jsonNumber, { minLength: 0, maxLength: 50 }), (items) => {
          const ref = serializeRef(listOfNumbersSchema, { items });
          const exp = serializeByte(listOfNumbersSchema, { items });
          expect(exp).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("blobs", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(blob, (data) => {
          const ref = serializeRef(blobSchema, { data });
          const exp = serializeByte(blobSchema, { data });
          expect(exp).toEqual(ref);
        }),
        { numRuns: 5_000 }
      );
    });

    it("timestamps", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(timestamp, (ts) => {
          const data = { epochTs: ts, isoTs: ts, httpTs: ts };
          const ref = serializeRef(timestampSchema, data);
          const exp = serializeByte(timestampSchema, data);
          expect(exp).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("bigints", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(bigint, (bi) => {
          const data = {
            bigint: bi,
            bigdecimal: new NumericValue(`${bi}.${Math.abs(Number(bi % 1000n))}`, "bigDecimal"),
          };
          const ref = serializeRef(bigNumberSchema, data);
          const exp = serializeByte(bigNumberSchema, data);
          expect(exp).toEqual(ref);
        }),
        { numRuns: 5_000 }
      );
    });

    it("nested structs", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(nestedStruct, (data) => {
          const ref = serializeRef(nestingStruct, data);
          const exp = serializeByte(nestingStruct, data);
          expect(exp).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("all types combined", { timeout: 60_000 }, () => {
      fc.assert(
        fc.property(allTypesData, (data) => {
          const ref = serializeRef(allTypesSchema, data);
          const exp = serializeByte(allTypesSchema, data);
          expect(exp).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("document schema (untyped)", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(documentValue, (doc) => {
          const ref = serializeRef(documentStructSchema, { doc });
          const exp = serializeByte(documentStructSchema, { doc });
          expect(exp).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("unions", { timeout: 30_000 }, () => {
      const unionData = fc.oneof(
        jsonString.map((s) => ({ union: { strVal: s } })),
        jsonNumber.map((n) => ({ union: { numVal: n } })),
        fc.boolean().map((b) => ({ union: { boolVal: b } }))
      );
      fc.assert(
        fc.property(unionData, (data) => {
          const ref = serializeRef(structWithUnion, data);
          const exp = serializeByte(structWithUnion, data);
          expect(exp).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });
  });

  describe("Deserializer: BufferJsonShapeDeserializer matches JsonShapeDeserializer", () => {
    it("string maps", { timeout: 30_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(stringMap, async (tags) => {
          const json = JSON.stringify({ tags });
          const ref = await deserializeRef(stringMapSchema, json);
          const exp = await deserializeBuffer(stringMapSchema, json);
          const expBytes = await deserializeBufferBytes(stringMapSchema, json);
          expect(exp).toEqual(ref);
          expect(expBytes).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("numeric maps", { timeout: 30_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(numericMap, async (values) => {
          const json = JSON.stringify({ values });
          const ref = await deserializeRef(numericMapSchema, json);
          const exp = await deserializeBuffer(numericMapSchema, json);
          const expBytes = await deserializeBufferBytes(numericMapSchema, json);
          expect(exp).toEqual(ref);
          expect(expBytes).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("blobs (base64 round-trip)", { timeout: 30_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(blob, async (data) => {
          // Serialize with reference, then deserialize with both
          const json = serializeRef(blobSchema, { data });
          const ref = await deserializeRef(blobSchema, json);
          const exp = await deserializeBuffer(blobSchema, json);
          const expBytes = await deserializeBufferBytes(blobSchema, json);
          expect(exp).toEqual(ref);
          expect(expBytes).toEqual(ref);
        }),
        { numRuns: 5_000 }
      );
    });

    it("timestamps", { timeout: 30_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(timestamp, async (ts) => {
          const data = { epochTs: ts, isoTs: ts, httpTs: ts };
          const json = serializeRef(timestampSchema, data);
          const ref = await deserializeRef(timestampSchema, json);
          const exp = await deserializeBuffer(timestampSchema, json);
          const expBytes = await deserializeBufferBytes(timestampSchema, json);
          expect(exp).toEqual(ref);
          expect(expBytes).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("nested structs", { timeout: 30_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(nestedStruct, async (data) => {
          const json = serializeRef(nestingStruct, data);
          const ref = await deserializeRef(nestingStruct, json);
          const exp = await deserializeBuffer(nestingStruct, json);
          const expBytes = await deserializeBufferBytes(nestingStruct, json);
          expect(exp).toEqual(ref);
          expect(expBytes).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("all types combined", { timeout: 60_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(safeAllTypesData, async (data) => {
          const json = serializeRef(allTypesSchema, data);
          const ref = await deserializeRef(allTypesSchema, json);
          const exp = await deserializeBuffer(allTypesSchema, json);
          const expBytes = await deserializeBufferBytes(allTypesSchema, json);
          expect(exp).toEqual(ref);
          expect(expBytes).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("document schema (untyped)", { timeout: 30_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(documentValue, async (doc) => {
          const json = JSON.stringify({ doc });
          const ref = await deserializeRef(documentStructSchema, json);
          const exp = await deserializeBuffer(documentStructSchema, json);
          const expBytes = await deserializeBufferBytes(documentStructSchema, json);
          expect(exp).toEqual(ref);
          expect(expBytes).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });

    it("unions", { timeout: 30_000 }, async () => {
      const unionData = fc.oneof(
        jsonString.map((s) => ({ union: { strVal: s } })),
        jsonNumber.map((n) => ({ union: { numVal: n } })),
        fc.boolean().map((b) => ({ union: { boolVal: b } }))
      );
      await fc.assert(
        fc.asyncProperty(unionData, async (data) => {
          const json = serializeRef(structWithUnion, data);
          const ref = await deserializeRef(structWithUnion, json);
          const exp = await deserializeBuffer(structWithUnion, json);
          const expBytes = await deserializeBufferBytes(structWithUnion, json);
          expect(exp).toEqual(ref);
          expect(expBytes).toEqual(ref);
        }),
        { numRuns: 10_000 }
      );
    });
  });

  describe("Round-trip: serialize with byte → deserialize with buffer", () => {
    it("string maps survive round-trip", { timeout: 30_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(stringMap, async (tags) => {
          const input = { tags };
          byteSerializer.write(stringMapSchema, input);
          const bytes = byteSerializer.flush();
          const output = await bufferDeserializer.read(stringMapSchema, bytes);
          expect(output).toEqual(input);
        }),
        { numRuns: 10_000 }
      );
    });

    it("nested structs survive round-trip", { timeout: 30_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(nestedStruct, async (data) => {
          byteSerializer.write(nestingStruct, data);
          const bytes = byteSerializer.flush();
          const json = decoder.decode(bytes);
          // Round-trip through reference to normalize (dates→epoch, blobs→base64→Uint8Array)
          const refJson = serializeRef(nestingStruct, data);
          const expected = await deserializeRef(nestingStruct, refJson);
          const actual = await bufferDeserializer.read(nestingStruct, bytes);
          expect(actual).toEqual(expected);
        }),
        { numRuns: 10_000 }
      );
    });

    it("all types survive round-trip", { timeout: 60_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(safeAllTypesData, async (data) => {
          byteSerializer.write(allTypesSchema, data);
          const bytes = byteSerializer.flush();
          // Normalize through reference path
          const refJson = serializeRef(allTypesSchema, data);
          const expected = await deserializeRef(allTypesSchema, refJson);
          const actual = await bufferDeserializer.read(allTypesSchema, bytes);
          expect(actual).toEqual(expected);
        }),
        { numRuns: 10_000 }
      );
    });

    it("documents survive round-trip", { timeout: 30_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(documentValue, async (doc) => {
          const input = { doc };
          byteSerializer.write(documentStructSchema, input);
          const bytes = byteSerializer.flush();
          const refJson = serializeRef(documentStructSchema, input);
          const expected = await deserializeRef(documentStructSchema, refJson);
          const actual = await bufferDeserializer.read(documentStructSchema, bytes);
          expect(actual).toEqual(expected);
        }),
        { numRuns: 10_000 }
      );
    });
  });

  describe("Serializer: should never crash on arbitrary inputs", () => {
    it("byte serializer handles arbitrary objects without crashing", { timeout: 30_000 }, () => {
      fc.assert(
        fc.property(documentValue, (value) => {
          // Should not throw
          byteSerializer.write(documentSchema, value);
          const result = byteSerializer.flush();
          expect(result).toBeInstanceOf(Uint8Array);
          // Should produce valid JSON
          expect(() => JSON.parse(decoder.decode(result))).not.toThrow();
        }),
        { numRuns: 10_000 }
      );
    });
  });

  describe("Deserializer: should never crash on valid JSON", () => {
    it("buffer deserializer handles arbitrary valid JSON without crashing", { timeout: 30_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(documentValue, async (value) => {
          const json = JSON.stringify({ doc: value });
          // Should not throw
          const result = await bufferDeserializer.read(documentStructSchema, json);
          expect(result).toBeDefined();
        }),
        { numRuns: 10_000 }
      );
    });

    it("buffer deserializer handles Uint8Array input without crashing", { timeout: 30_000 }, async () => {
      await fc.assert(
        fc.asyncProperty(documentValue, async (value) => {
          const json = JSON.stringify({ doc: value });
          const bytes = new TextEncoder().encode(json);
          const result = await bufferDeserializer.read(documentStructSchema, bytes);
          expect(result).toBeDefined();
        }),
        { numRuns: 10_000 }
      );
    });
  });
});
