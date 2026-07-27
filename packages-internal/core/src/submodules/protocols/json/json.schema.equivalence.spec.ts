/**
 * Schema-based JSON codec equivalence test.
 * Exercises all smithy type permutations and verifies v1 ≡ v2.
 */
import { NumericValue } from "@smithy/core/serde";
import type {
  BigDecimalSchema,
  BigIntegerSchema,
  BlobSchema,
  BooleanSchema,
  DocumentSchema,
  NumericSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticStructureSchema,
  StaticUnionSchema,
  StringSchema,
  TimestampDateTimeSchema,
  TimestampEpochSecondsSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";
import { describe, expect, it } from "vitest";

import { JsonShapeDeserializer } from "./codec-v1/JsonShapeDeserializer";
import { JsonShapeSerializer } from "./codec-v1/JsonShapeSerializer";
import { JsonShapeDeserializer2 } from "./codec-v2/JsonShapeDeserializer2";
import { JsonShapeSerializer2 } from "./codec-v2/JsonShapeSerializer2";

// ─── Settings ────────────────────────────────────────────────────────────────

const settings = {
  jsonName: true,
  timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
} as const;

// ─── Codec instances ─────────────────────────────────────────────────────────

const ser1 = new JsonShapeSerializer(settings);
const de1 = new JsonShapeDeserializer(settings);
const ser2 = new JsonShapeSerializer2(settings);
const de2 = new JsonShapeDeserializer2(settings);

// ─── Helpers ─────────────────────────────────────────────────────────────────

const decoder = new TextDecoder();
const nv = (s: string) => new NumericValue(s, "bigDecimal");

function assertSerializationEquivalence(schema: any, value: any): void {
  ser1.write(schema, value);
  const v1Json = ser1.flush();
  ser2.write(schema, value);
  const v2Json = decoder.decode(ser2.flush());
  expect(v2Json).toEqual(v1Json);
}

async function assertDeserializationEquivalence(schema: any, json: string): Promise<void> {
  const v1Result = await de1.read(schema, json);
  const v2Result = await de2.read(schema, json);
  expect(v2Result).toEqual(v1Result);
}

async function assertEquivalence(schema: any, value: any): Promise<void> {
  // Serialization equivalence
  ser1.write(schema, value);
  const v1Json = ser1.flush();
  ser2.write(schema, value);
  const v2Json = decoder.decode(ser2.flush());
  expect(v2Json).toEqual(v1Json);

  // Deserialization equivalence from v1-serialized JSON
  const v1Result = await de1.read(schema, v1Json);
  const v2Result = await de2.read(schema, v1Json);
  expect(v2Result).toEqual(v1Result);

  // Round-trip: re-serialize the deserialized output and verify stability
  ser1.write(schema, v1Result);
  const roundTrip1 = ser1.flush();
  ser2.write(schema, v1Result);
  const roundTrip2 = decoder.decode(ser2.flush());
  expect(roundTrip1).toEqual(v1Json);
  expect(roundTrip2).toEqual(v1Json);
}

function wrap(memberName: string, memberSchema: any, value: any): { schema: StaticStructureSchema; value: any } {
  const schema: StaticStructureSchema = [3, "ns", "Wrapper", 0, [memberName], [memberSchema]];
  return { schema, value: value === undefined ? {} : { [memberName]: value } };
}

function randBytes(len: number): Uint8Array {
  const buf = new Uint8Array(len);
  for (let i = 0; i < len; ++i) {
    buf[i] = (Math.random() * 256) | 0;
  }
  return buf;
}

function randString(len: number): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789あいう🎉";
  let s = "";
  for (let i = 0; i < len; ++i) {
    s += chars[(Math.random() * chars.length) | 0];
  }
  return s;
}

// ─── Schemas ─────────────────────────────────────────────────────────────────

const emptyStruct: StaticStructureSchema = [3, "ns", "Empty", 0, [], []];

const unionSchema: StaticUnionSchema = [
  4,
  "ns",
  "MyUnion",
  0,
  ["strVal", "numVal", "boolVal"],
  [0 satisfies StringSchema, 1 satisfies NumericSchema, 2 satisfies BooleanSchema],
];

const allTypesSchema: StaticStructureSchema = [
  3,
  "ns",
  "AllTypes",
  0,
  [
    "blob",
    "bool",
    "str",
    "num",
    "bigInt",
    "bigDec",
    "tsEpoch",
    "tsDateTime",
    "tsHttpDate",
    "doc",
    "listStr",
    "listNum",
    "sparseList",
    "mapStr",
    "mapNum",
    "sparseMap",
    "union",
    "nested",
  ],
  [
    21 satisfies BlobSchema,
    2 satisfies BooleanSchema,
    0 satisfies StringSchema,
    1 satisfies NumericSchema,
    17 satisfies BigIntegerSchema,
    19 satisfies BigDecimalSchema,
    7 satisfies TimestampEpochSecondsSchema,
    5 satisfies TimestampDateTimeSchema,
    6 satisfies TimestampHttpDateSchema,
    15 satisfies DocumentSchema,
    [1, "ns", "LS", 0, 0] satisfies StaticListSchema,
    [1, "ns", "LN", 0, 1] satisfies StaticListSchema,
    [1, "ns", "SL", { sparse: 1 }, 0] satisfies StaticListSchema,
    [2, "ns", "MS", 0, 0, 0] satisfies StaticMapSchema,
    [2, "ns", "MN", 0, 0, 1] satisfies StaticMapSchema,
    [2, "ns", "SM", { sparse: 1 }, 0, 0] satisfies StaticMapSchema,
    unionSchema,
    (() => allTypesSchema) as any,
  ],
];

// ─── Pre-generated test values ───────────────────────────────────────────────

const BLOB_3 = randBytes(3);
const BLOB_256 = randBytes(256);
const STR_1 = randString(1);
const STR_10 = randString(10);
const STR_50 = randString(50);

// ─── Tests ───────────────────────────────────────────────────────────────────

describe("JSON v2 codec equivalence: schema-based permutations", () => {
  describe("empty struct", () => {
    it("serializes empty struct", async () => {
      await assertEquivalence(emptyStruct, {});
    });
  });

  describe("blob member", () => {
    const cases: Array<[string, any]> = [
      ["absent", undefined],
      ["empty", new Uint8Array(0)],
      ["3 bytes", BLOB_3],
      ["256 bytes", BLOB_256],
    ];
    it.each(cases)("%s", async (_, value) => {
      const { schema, value: v } = wrap("blob", 21 satisfies BlobSchema, value);
      await assertEquivalence(schema, v);
    });
  });

  describe("boolean member", () => {
    const cases: Array<[string, any]> = [
      ["absent", undefined],
      ["false", false],
      ["true", true],
    ];
    it.each(cases)("%s", async (_, value) => {
      const { schema, value: v } = wrap("bool", 2 satisfies BooleanSchema, value);
      await assertEquivalence(schema, v);
    });
  });

  describe("string member", () => {
    const cases: Array<[string, any]> = [
      ["absent", undefined],
      ["empty", ""],
      ["1 char", STR_1],
      ["10 chars", STR_10],
      ["50 chars", STR_50],
      ["with special chars", 'hello "world"\nfoo\tbar\\baz'],
      ["with unicode", "日本語テスト 🎉🚀"],
      ["with control chars", "\u0001\u001f"],
    ];
    it.each(cases)("%s", async (_, value) => {
      const { schema, value: v } = wrap("str", 0 satisfies StringSchema, value);
      await assertEquivalence(schema, v);
    });
  });

  describe("numeric members (byte/short/int/long/float/double)", () => {
    const intCases: Array<[string, number | bigint]> = [
      // byte range
      ["byte: -130", -130],
      ["byte: -128", -128],
      ["byte: -1", -1],
      ["byte: 0", 0],
      ["byte: 1", 1],
      ["byte: 127", 127],
      ["byte: 128", 128],
      ["byte: 130", 130],
      // short range
      ["short: -33000", -33000],
      ["short: -32768", -32768],
      ["short: 32767", 32767],
      ["short: 33000", 33000],
      // integer range
      ["int: -2147483649", -2147483649],
      ["int: -2147483648", -2147483648],
      ["int: 2147483647", 2147483647],
      ["int: 2147483648", 2147483648],
      // long range (number)
      ["long: -9007199254740991", Number.MIN_SAFE_INTEGER],
      ["long: 9007199254740991", Number.MAX_SAFE_INTEGER],
    ];

    const floatCases: Array<[string, number]> = [
      ["float: -1.5", -1.5],
      ["float: -0.1", -0.1],
      ["float: 0.1", 0.1],
      ["float: 1.5", 1.5],
      ["float: 3.14159", 3.14159],
      ["float: 1e10", 1e10],
      ["float: -1e10", -1e10],
      ["float: 1e38", 1e38],
      ["float: -1e38", -1e38],
    ];

    it.each(intCases)("%s", async (_, value) => {
      const { schema, value: v } = wrap("num", 1 satisfies NumericSchema, value);
      await assertEquivalence(schema, v);
    });

    it.each(floatCases)("%s", async (_, value) => {
      const { schema, value: v } = wrap("num", 1 satisfies NumericSchema, value);
      await assertEquivalence(schema, v);
    });

    it("absent", async () => {
      const { schema, value: v } = wrap("num", 1 satisfies NumericSchema, undefined);
      await assertEquivalence(schema, v);
    });
  });

  describe("bigInteger member", () => {
    const cases: Array<[string, any]> = [
      ["absent", undefined],
      ["large negative", BigInt("-99999999999999999999")],
      ["-1", BigInt(-1)],
      ["0", BigInt(0)],
      ["1", BigInt(1)],
      ["large positive", BigInt("99999999999999999999")],
    ];
    it.each(cases)("%s", async (_, value) => {
      const { schema, value: v } = wrap("bigInt", 17 satisfies BigIntegerSchema, value);
      // BigInteger serialization: both should produce same JSON.
      assertSerializationEquivalence(schema, v);
    });
  });

  describe("bigDecimal member", () => {
    const cases: Array<[string, any]> = [
      ["absent", undefined],
      ["large negative decimal", nv("-9999999999.999")],
      ["-1", nv("-1")],
      ["-0.001", nv("-0.001")],
      ["0", nv("0")],
      ["0.001", nv("0.001")],
      ["1", nv("1")],
      ["large positive decimal", nv("9999999999.999")],
    ];
    it.each(cases)("%s", async (_, value) => {
      const { schema, value: v } = wrap("bigDec", 19 satisfies BigDecimalSchema, value);
      assertSerializationEquivalence(schema, v);
    });
  });

  describe("timestamp member", () => {
    const dates: Array<[string, Date | undefined]> = [
      ["absent", undefined],
      ["epoch 0", new Date(0)],
      ["1999-12-31", new Date("1999-12-31T23:59:59.999Z")],
      ["2025-06-15", new Date("2025-06-15T12:00:00.000Z")],
      ["2050-06-15", new Date("2050-06-15T12:00:00.000Z")],
    ];

    describe("epoch-seconds format", () => {
      it.each(dates)("%s", async (_, value) => {
        const { schema, value: v } = wrap("ts", 7 satisfies TimestampEpochSecondsSchema, value);
        await assertEquivalence(schema, v);
      });
    });

    describe("date-time format", () => {
      it.each(dates)("%s", async (_, value) => {
        const { schema, value: v } = wrap("ts", 5 satisfies TimestampDateTimeSchema, value);
        await assertEquivalence(schema, v);
      });
    });

    describe("http-date format", () => {
      it.each(dates)("%s", async (_, value) => {
        const { schema, value: v } = wrap("ts", 6 satisfies TimestampHttpDateSchema, value);
        await assertEquivalence(schema, v);
      });
    });
  });

  describe("document member", () => {
    const cases: Array<[string, any]> = [
      ["absent", undefined],
      ["null", null],
      ["string", "hello"],
      ["number", 42],
      ["boolean", true],
      ["empty object", {}],
      ["empty array", []],
      [
        "complex document",
        {
          bool: true,
          str: "hello",
          num: 42,
          nil: null,
          list: [1, "two", null],
          map: { a: 1, b: "two" },
        },
      ],
    ];
    it.each(cases)("%s", async (_, value) => {
      const { schema, value: v } = wrap("doc", 15 satisfies DocumentSchema, value);
      await assertEquivalence(schema, v);
    });
  });

  describe("list members", () => {
    describe("list of strings", () => {
      const listSchema: StaticListSchema = [1, "ns", "LS", 0, 0];
      const cases: Array<[string, any]> = [
        ["absent", undefined],
        ["empty", []],
        ["3 items", ["alpha", "beta", "gamma"]],
        ["with special chars", ['hello "world"', "foo\nbar", ""]],
      ];
      it.each(cases)("%s", async (_, value) => {
        const { schema, value: v } = wrap("listStr", listSchema, value);
        await assertEquivalence(schema, v);
      });
    });

    describe("list of numbers", () => {
      const listSchema: StaticListSchema = [1, "ns", "LN", 0, 1];
      const cases: Array<[string, any]> = [
        ["absent", undefined],
        ["empty", []],
        ["integers", [1, -2, 0, 9007199254740991]],
        ["floats", [1.5, -3.14, 0.001]],
      ];
      it.each(cases)("%s", async (_, value) => {
        const { schema, value: v } = wrap("listNum", listSchema, value);
        await assertEquivalence(schema, v);
      });
    });

    describe("list of structs (recursive)", () => {
      const innerStruct: StaticStructureSchema = [3, "ns", "Inner", 0, ["name", "val"], [0, 1]];
      const listSchema: StaticListSchema = [1, "ns", "LStruct", 0, innerStruct];
      const cases: Array<[string, any]> = [
        ["absent", undefined],
        ["empty", []],
        ["3 items", [{ name: "a", val: 1 }, { name: "b" }, { val: 99 }]],
      ];
      it.each(cases)("%s", async (_, value) => {
        const { schema, value: v } = wrap("listStruct", listSchema, value);
        await assertEquivalence(schema, v);
      });
    });
  });

  describe("sparse list member", () => {
    const sparseListSchema = [1, "ns", "SL", { sparse: 1 }, 0] satisfies StaticListSchema;
    const cases: Array<[string, any]> = [
      ["absent", undefined],
      ["empty", []],
      ["with nulls", ["hello", null, "world"]],
      ["all nulls", [null, null, null]],
    ];
    it.each(cases)("%s", async (_, value) => {
      const schema: StaticStructureSchema = [3, "ns", "S", 0, ["sparseList"], [sparseListSchema]];
      const v = value === undefined ? {} : { sparseList: value };
      await assertEquivalence(schema, v);
    });
  });

  describe("map members", () => {
    describe("map string→string", () => {
      const mapSchema: StaticMapSchema = [2, "ns", "MS", 0, 0, 0];
      const cases: Array<[string, any]> = [
        ["absent", undefined],
        ["empty", {}],
        ["3 kv pairs", { alpha: "one", beta: "two", gamma: "three" }],
        ["keys with special chars", { 'key"1': "val1", "key\n2": "val2" }],
      ];
      it.each(cases)("%s", async (_, value) => {
        const { schema, value: v } = wrap("mapStr", mapSchema, value);
        await assertEquivalence(schema, v);
      });
    });

    describe("map string→number", () => {
      const mapSchema: StaticMapSchema = [2, "ns", "MN", 0, 0, 1];
      const cases: Array<[string, any]> = [
        ["absent", undefined],
        ["empty", {}],
        ["3 kv pairs", { x: 0, y: -1.5, z: 9007199254740991 }],
      ];
      it.each(cases)("%s", async (_, value) => {
        const { schema, value: v } = wrap("mapNum", mapSchema, value);
        await assertEquivalence(schema, v);
      });
    });
  });

  describe("sparse map member", () => {
    const sparseMapSchema = [2, "ns", "SM", { sparse: 1 }, 0, 0] satisfies StaticMapSchema;
    const cases: Array<[string, any]> = [
      ["absent", undefined],
      ["empty", {}],
      ["with null value", { a: "hello", b: null, c: "world" }],
      ["all null values", { a: null, b: null }],
    ];
    it.each(cases)("%s", async (_, value) => {
      const schema: StaticStructureSchema = [3, "ns", "S", 0, ["sparseMap"], [sparseMapSchema]];
      const v = value === undefined ? {} : { sparseMap: value };
      await assertEquivalence(schema, v);
    });
  });

  describe("union member", () => {
    const structWithUnion: StaticStructureSchema = [3, "ns", "S", 0, ["union"], [unionSchema]];

    const cases: Array<[string, any]> = [
      ["absent", {}],
      ["strVal variant", { union: { strVal: "hello" } }],
      ["numVal variant", { union: { numVal: 42 } }],
      ["boolVal variant", { union: { boolVal: true } }],
    ];

    it.each(cases)("%s", async (_, value) => {
      await assertEquivalence(structWithUnion, value);
    });

    it("unknown key (union $unknown) deserialization", async () => {
      const json = JSON.stringify({ union: { unknownTag: "surprise" } });
      const v1Result = await de1.read(structWithUnion, json);
      const v2Result = await de2.read(structWithUnion, json);
      expect(v2Result).toEqual(v1Result);
    });
  });

  describe("nested struct member", () => {
    const cases: Array<[string, any]> = [
      ["absent", {}],
      ["empty nested", { nested: {} }],
      ["nested with members", { nested: { str: "inner", num: 7, bool: true } }],
      ["deeply nested", { nested: { nested: { str: "deep", num: -1 } } }],
    ];

    it.each(cases)("%s", async (_, value) => {
      await assertEquivalence(allTypesSchema, value);
    });
  });

  describe("struct with unknown keys (error backward compat)", () => {
    it("unknown keys are dropped during deserialization", async () => {
      const schema: StaticStructureSchema = [3, "ns", "AB", 0, ["a", "b"], [0, 1]];
      const json = JSON.stringify({
        unknownField: "dropped",
        a: "kept",
        b: 99,
      });
      await assertDeserializationEquivalence(schema, json);
    });

    it("struct with extra unknown keys", async () => {
      const schema: StaticStructureSchema = [3, "ns", "AB", 0, ["a", "b"], [0, 1]];
      const json = JSON.stringify({
        extra: 123,
        __field__: "xyz",
        a: "known",
        b: 42,
      });
      await assertDeserializationEquivalence(schema, json);
    });
  });

  describe("combined members", () => {
    it("multiple members populated", async () => {
      await assertEquivalence(allTypesSchema, {
        blob: BLOB_3,
        bool: true,
        str: "hello world",
        num: 42,
        // Limited to MAX_SAFE_INTEGER because the round-trip assertion re-parses
        // via JSON.parse, which loses precision on larger integers in Node 20
        // (lacks the source-text reviver from the JSON.parse proposal, available in Node 22+).
        bigInt: BigInt("9007199254740991"),
        bigDec: nv("3.14159"),
        tsEpoch: new Date("2025-01-01T00:00:00.000Z"),
        tsDateTime: new Date("2025-06-15T12:30:00.000Z"),
        tsHttpDate: new Date("2025-06-15T12:30:00.000Z"),
        listStr: ["a", "b", "c"],
        listNum: [1, 2, 3],
        mapStr: { key1: "val1", key2: "val2" },
        mapNum: { x: 10, y: 20 },
        union: { strVal: "tagged" },
        nested: { str: "inner", num: -1 },
      });
    });

    it("all members absent", async () => {
      await assertEquivalence(allTypesSchema, {});
    });

    it("sparse collections with nulls", async () => {
      await assertEquivalence(allTypesSchema, {
        sparseList: ["one", null, "three"],
        sparseMap: { a: "val", b: null },
      });
    });

    it("document with nested structure", async () => {
      await assertEquivalence(allTypesSchema, {
        doc: {
          nested: { arr: [1, 2, 3], obj: { key: "value" } },
          nil: null,
          bool: false,
        },
      });
    });
  });

  describe("jsonName behavior", () => {
    it("uses jsonName trait for serialization", async () => {
      const schema: StaticStructureSchema = [
        3,
        "ns",
        "Named",
        0,
        ["myField", "anotherField"],
        [
          [0, "ns", "MyField", 0, 0, { jsonName: "my_field" }],
          [1, "ns", "AnotherField", 0, 0, { jsonName: "another_field" }],
        ],
      ] as any;
      const value = { myField: "hello", anotherField: 42 };
      assertSerializationEquivalence(schema, value);
    });
  });
});
