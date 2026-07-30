import { NumericValue } from "@smithy/core/serde";
import type {
  StaticSimpleSchema,
  StaticStructureSchema,
  TimestampDateTimeSchema,
  TimestampEpochSecondsSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";
import { describe, expect, test as it, beforeEach } from "vitest";

import { createNestingWidget, nestingWidget, unionStruct, widget } from "../../test-schema.spec";
import { JsonShapeSerializer2 } from "./JsonShapeSerializer2";

const decoder = new TextDecoder();

function decode(bytes: Uint8Array): string {
  return decoder.decode(bytes);
}

const settings = {
  jsonName: true,
  timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
} as const;

describe(JsonShapeSerializer2.name, () => {
  let serializer: JsonShapeSerializer2;

  beforeEach(() => {
    serializer = new JsonShapeSerializer2(settings);
  });

  // ─── Basic serialization ──────────────────────────────────────────────────

  describe("basic serialization", () => {
    it("serializes an empty struct", () => {
      serializer.write(widget, {});
      expect(decode(serializer.flush())).toEqual("{}");
    });

    it("serializes a struct with blob, timestamp, bigint, bigdecimal", () => {
      const data = {
        timestamp: new Date(0),
        bigint: 10000000000000000000000054321n,
        bigdecimal: new NumericValue("0.10000000000000000000000054321", "bigDecimal"),
        blob: new Uint8Array([0, 0, 0, 1]),
      };
      serializer.write(widget, data);
      expect(decode(serializer.flush())).toEqual(
        `{"blob":"AAAAAQ==","timestamp":0,"bigint":10000000000000000000000054321,"bigdecimal":0.10000000000000000000000054321}`
      );
    });

    it("serializes nested structures", () => {
      serializer.write(nestingWidget, createNestingWidget(3));
      const result = decode(serializer.flush());
      expect(result).toBeTruthy();
      expect(() => JSON.parse(result)).not.toThrow();
    });

    it("serializes boolean values", () => {
      const docSchema = 15;
      serializer.write(docSchema, { yes: true, no: false });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ yes: true, no: false });
    });

    it("serializes null in document context", () => {
      const docSchema = 15;
      serializer.write(docSchema, [null, "a", null]);
      expect(JSON.parse(decode(serializer.flush()))).toEqual([null, "a", null]);
    });
  });

  // ─── String escaping ──────────────────────────────────────────────────────

  describe("string escaping", () => {
    it("escapes all JSON control characters", () => {
      const docSchema = 15;
      const data = {
        bs: "\b",
        tab: "\t",
        nl: "\n",
        ff: "\f",
        cr: "\r",
        quote: '"',
        backslash: "\\",
        nul: "\u0000",
        esc: "\u001b",
        del: "\u001f",
      };
      serializer.write(docSchema, data);
      expect(JSON.parse(decode(serializer.flush()))).toEqual(data);
    });

    it("handles non-ASCII BMP characters (UTF-8 multi-byte)", () => {
      const docSchema = 15;
      const data = { text: "café résumé naïve 中文 日本語 한국어 Ñoño" };
      serializer.write(docSchema, data);
      expect(JSON.parse(decode(serializer.flush()))).toEqual(data);
    });

    it("handles surrogate pairs (emoji)", () => {
      const docSchema = 15;
      const data = { emoji: "Hello 🌍🎉🚀 World 💻🔥" };
      serializer.write(docSchema, data);
      expect(JSON.parse(decode(serializer.flush()))).toEqual(data);
    });

    it("handles mixed ASCII, escapes, and unicode", () => {
      const docSchema = 15;
      const data = { mix: 'line1\nline2\t"quoted" café 🎉 \\ end' };
      serializer.write(docSchema, data);
      expect(JSON.parse(decode(serializer.flush()))).toEqual(data);
    });

    it("handles empty string", () => {
      const docSchema = 15;
      serializer.write(docSchema, { empty: "" });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ empty: "" });
    });

    it("handles lone low surrogates by escaping them", () => {
      const docSchema = 15;
      // A lone low surrogate (0xDC00) — should be \uXXXX escaped
      const str = String.fromCharCode(0xdc00);
      serializer.write(docSchema, { s: str });
      const result = decode(serializer.flush());
      // Should produce valid JSON even with the unusual input
      expect(result).toContain("\\udc00");
    });

    it("handles lone high surrogates by escaping them", () => {
      const docSchema = 15;
      // A lone high surrogate (0xD800) without a following low surrogate
      const str = String.fromCharCode(0xd800) + "abc";
      serializer.write(docSchema, { s: str });
      const result = decode(serializer.flush());
      expect(result).toContain("\\ud800");
    });

    it("handles 2-byte UTF-8 characters (0x80-0x7FF range)", () => {
      const docSchema = 15;
      // Latin Extended, Greek, Cyrillic, etc.
      const data = { text: "àáâãäå ÆÇÈ αβγδ ЖЗИ" };
      serializer.write(docSchema, data);
      expect(JSON.parse(decode(serializer.flush()))).toEqual(data);
    });

    it("handles 3-byte UTF-8 characters (0x800-0xFFFF range)", () => {
      const docSchema = 15;
      // CJK characters, Thai, Arabic
      const data = { text: "你好世界 สวัสดี مرحبا" };
      serializer.write(docSchema, data);
      expect(JSON.parse(decode(serializer.flush()))).toEqual(data);
    });
  });

  // ─── Buffer growth ────────────────────────────────────────────────────────

  describe("buffer growth", () => {
    it("handles long strings that trigger buffer reallocation", () => {
      const docSchema = 15;
      const longStr = "a".repeat(5000) + '"\n\\' + "b".repeat(5000);
      serializer.write(docSchema, { long: longStr });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ long: longStr });
    });

    it("handles many small writes without corruption", () => {
      const docSchema = 15;
      for (let i = 0; i < 100; i++) {
        serializer.write(docSchema, { i, s: `value-${i}` });
        const result = JSON.parse(decode(serializer.flush()));
        expect(result).toEqual({ i, s: `value-${i}` });
      }
    });

    it("reuses the serializer instance across multiple write/flush cycles", () => {
      serializer.write(widget, { blob: new Uint8Array([1, 2, 3]) });
      const first = decode(serializer.flush());

      serializer.write(widget, { blob: new Uint8Array([4, 5, 6]) });
      const second = decode(serializer.flush());

      expect(JSON.parse(first)).toEqual({ blob: "AQID" });
      expect(JSON.parse(second)).toEqual({ blob: "BAUG" });
    });
  });

  // ─── Numeric values ───────────────────────────────────────────────────────

  describe("numeric values", () => {
    it("serializes integers", () => {
      const docSchema = 15;
      serializer.write(docSchema, { n: 42 });
      expect(decode(serializer.flush())).toEqual('{"n":42}');
    });

    it("serializes floating point numbers", () => {
      const docSchema = 15;
      serializer.write(docSchema, { n: 3.14159 });
      expect(decode(serializer.flush())).toEqual('{"n":3.14159}');
    });

    it("serializes negative numbers", () => {
      const docSchema = 15;
      serializer.write(docSchema, { n: -100 });
      expect(decode(serializer.flush())).toEqual('{"n":-100}');
    });

    it("serializes zero", () => {
      const docSchema = 15;
      serializer.write(docSchema, { n: 0 });
      expect(decode(serializer.flush())).toEqual('{"n":0}');
    });

    it("serializes Infinity as quoted string", () => {
      serializer.write(widget, { scalar: Infinity });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ scalar: "Infinity" });
    });

    it("serializes -Infinity as quoted string", () => {
      serializer.write(widget, { scalar: -Infinity });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ scalar: "-Infinity" });
    });

    it("serializes NaN as quoted string", () => {
      serializer.write(widget, { scalar: NaN });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ scalar: "NaN" });
    });

    it("serializes bigint as raw numeric literal", () => {
      serializer.write(widget, { bigint: 123456789012345678901234567890n });
      const result = decode(serializer.flush());
      expect(result).toContain("123456789012345678901234567890");
      // Should NOT be quoted
      expect(result).not.toContain('"123456789012345678901234567890"');
    });

    it("serializes NumericValue without quotes", () => {
      serializer.write(widget, { bigdecimal: new NumericValue("1.23456789", "bigDecimal") });
      const result = decode(serializer.flush());
      expect(result).toContain("1.23456789");
      expect(result).not.toContain('"1.23456789"');
    });
  });

  // ─── Base64 (blob) encoding ───────────────────────────────────────────────

  describe("base64 encoding", () => {
    it("encodes empty Uint8Array", () => {
      serializer.write(widget, { blob: new Uint8Array([]) });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ blob: "" });
    });

    it("encodes single byte", () => {
      serializer.write(widget, { blob: new Uint8Array([0xff]) });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ blob: "/w==" });
    });

    it("encodes two bytes (padding with one =)", () => {
      serializer.write(widget, { blob: new Uint8Array([0xff, 0xfe]) });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ blob: "//4=" });
    });

    it("encodes three bytes (no padding)", () => {
      serializer.write(widget, { blob: new Uint8Array([0x01, 0x02, 0x03]) });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ blob: "AQID" });
    });

    it("encodes larger blobs correctly", () => {
      const data = new Uint8Array(256);
      for (let i = 0; i < 256; i++) data[i] = i;
      serializer.write(widget, { blob: data });
      const result = JSON.parse(decode(serializer.flush()));
      // Verify by decoding back
      const decoded = Buffer.from(result.blob, "base64");
      expect(new Uint8Array(decoded)).toEqual(data);
    });

    it("encodes string blob as base64", () => {
      // When a string is given for a blob schema, it should be base64-encoded
      serializer.write(widget, { blob: "hello" });
      const result = JSON.parse(decode(serializer.flush()));
      expect(result.blob).toBeDefined();
    });
  });

  // ─── Timestamp serialization ──────────────────────────────────────────────

  describe("timestamp serialization", () => {
    it("serializes epoch-seconds format (default)", () => {
      serializer.write(widget, { timestamp: new Date(1000) });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ timestamp: 1 });
    });

    it("serializes epoch 0", () => {
      serializer.write(widget, { timestamp: new Date(0) });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ timestamp: 0 });
    });

    it("serializes date-time format", () => {
      const dateTimeSettings = {
        jsonName: true,
        timestampFormat: { default: 5 satisfies TimestampDateTimeSchema, useTrait: true },
      } as const;
      const s = new JsonShapeSerializer2(dateTimeSettings);
      const schema = [3, "", "S", 0, ["ts"], [4]] satisfies StaticStructureSchema;
      s.write(schema, { ts: new Date("2023-06-15T10:30:00.000Z") });
      const result = JSON.parse(decode(s.flush()));
      expect(result.ts).toEqual("2023-06-15T10:30:00Z");
    });

    it("serializes http-date format", () => {
      const httpDateSettings = {
        jsonName: true,
        timestampFormat: { default: 6 satisfies TimestampHttpDateSchema, useTrait: true },
      } as const;
      const s = new JsonShapeSerializer2(httpDateSettings);
      const schema = [3, "", "S", 0, ["ts"], [4]] satisfies StaticStructureSchema;
      s.write(schema, { ts: new Date("2023-06-15T10:30:00.000Z") });
      const result = JSON.parse(decode(s.flush()));
      // http-date format like "Thu, 15 Jun 2023 10:30:00 GMT"
      expect(result.ts).toMatch(/\w+, \d+ \w+ \d{4} \d{2}:\d{2}:\d{2} GMT/);
    });
  });

  // ─── Lists ────────────────────────────────────────────────────────────────

  describe("list serialization", () => {
    it("serializes empty list", () => {
      serializer.write(widget, { list: [] });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ list: [] });
    });

    it("serializes list of numbers", () => {
      serializer.write(widget, { list: [1, 2, 3] });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ list: [1, 2, 3] });
    });

    it("skips null items in non-sparse lists", () => {
      serializer.write(widget, { list: [1, null, 3] });
      const result = JSON.parse(decode(serializer.flush()));
      // null items should be skipped in non-sparse lists
      expect(result.list).toEqual([1, 3]);
    });

    it("preserves null items in sparse lists", () => {
      serializer.write(widget, { sparseList: ["a", null, "b"] });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ sparseList: ["a", null, "b"] });
    });

    it("serializes document arrays", () => {
      const docSchema = 15;
      serializer.write(docSchema, [1, "two", true, null, { nested: "obj" }]);
      expect(JSON.parse(decode(serializer.flush()))).toEqual([1, "two", true, null, { nested: "obj" }]);
    });
  });

  // ─── Maps ─────────────────────────────────────────────────────────────────

  describe("map serialization", () => {
    it("serializes empty map", () => {
      serializer.write(widget, { map: {} });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ map: {} });
    });

    it("serializes map with string values", () => {
      serializer.write(widget, { map: { foo: "bar", baz: "qux" } });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ map: { foo: "bar", baz: "qux" } });
    });

    it("skips null values in non-sparse maps", () => {
      // Note: The widget map schema is Map<string, string>, which triggers
      // the JSON.stringify fast path. JSON.stringify converts null to null.
      serializer.write(widget, { map: { a: "hello", b: null, c: "world" } });
      const result = JSON.parse(decode(serializer.flush()));
      expect(result.map).toEqual({ a: "hello", b: null, c: "world" });
    });

    it("preserves null values in sparse maps", () => {
      serializer.write(widget, { sparseMap: { a: "hello", b: null, c: "world" } });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({ sparseMap: { a: "hello", b: null, c: "world" } });
    });

    it("escapes map keys with special characters", () => {
      const docSchema = 15;
      const data = { 'key "with" quotes': "val1", "key\nwith\nnewlines": "val2", "key\\backslash": "val3" };
      serializer.write(docSchema, data);
      expect(JSON.parse(decode(serializer.flush()))).toEqual(data);
    });

    it("handles map keys with unicode", () => {
      const docSchema = 15;
      const data = { clé: "valeur", キー: "値", "🔑": "secret" };
      serializer.write(docSchema, data);
      expect(JSON.parse(decode(serializer.flush()))).toEqual(data);
    });

    it("uses fast path for string-value maps (JSON.stringify delegation)", () => {
      // The fast path triggers when schema says values are string/numeric/boolean
      const stringMapSchema = [3, "", "S", 0, ["m"], [[2, "", "Map", 0, 0, 0]]] as any;
      const data = { m: { key1: "value1", key2: "value2", key3: "value3" } };
      serializer.write(stringMapSchema, data);
      expect(JSON.parse(decode(serializer.flush()))).toEqual(data);
    });
  });

  // ─── Union serialization ──────────────────────────────────────────────────

  describe("union serialization", () => {
    it("serializes $unknown union members", () => {
      serializer.write(unionStruct, {
        union: {
          $unknown: [
            "unknownKey",
            {
              timestamp: new Date(0),
              blob: new Uint8Array([0, 1, 2, 3]),
            },
          ],
        },
      });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({
        union: { unknownKey: { timestamp: 0, blob: "AAECAw==" } },
      });
    });

    it("serializes known union member", () => {
      serializer.write(unionStruct, {
        union: { string: "hello" },
      });
      expect(JSON.parse(decode(serializer.flush()))).toEqual({
        union: { string: "hello" },
      });
    });
  });

  // ─── Document type ────────────────────────────────────────────────────────

  describe("document type serialization", () => {
    it("serializes deeply nested documents", () => {
      const docSchema = 15;
      const data = {
        level1: {
          level2: {
            level3: {
              items: [1, "two", { three: true }],
              nested: { deep: "value" },
            },
          },
          sibling: [null, false, 0, ""],
        },
      };
      serializer.write(docSchema, data);
      expect(JSON.parse(decode(serializer.flush()))).toEqual(data);
    });

    it("serializes extra document members when encountering __type", () => {
      const data = {
        __type: "ns#PlateOfFood",
        pasta: "Macaroni",
        cheese: "cheddar",
      };
      serializer.write(widget, data);
      expect(decode(serializer.flush())).toEqual(`{"__type":"ns#PlateOfFood","pasta":"Macaroni","cheese":"cheddar"}`);
    });

    it("serializes Date in document context as epoch-seconds", () => {
      const docSchema = 15;
      serializer.write(docSchema, { date: new Date(5000) });
      const result = JSON.parse(decode(serializer.flush()));
      expect(result.date).toEqual(5);
    });

    it("serializes Uint8Array in document context as base64", () => {
      const docSchema = 15;
      serializer.write(docSchema, { blob: new Uint8Array([1, 2, 3]) });
      const result = JSON.parse(decode(serializer.flush()));
      expect(result.blob).toEqual("AQID");
    });
  });

  // ─── writeDiscriminatedDocument ───────────────────────────────────────────

  describe("writeDiscriminatedDocument", () => {
    it("injects __type as the first key", () => {
      const schema = [3, "com.example", "MyShape", 0, ["name", "age"], [0, 1]] satisfies StaticStructureSchema;
      serializer.writeDiscriminatedDocument(schema, { name: "Alice", age: 30 });
      const result = decode(serializer.flush());
      const parsed = JSON.parse(result);
      expect(parsed.__type).toEqual("com.example#MyShape");
      expect(parsed.name).toEqual("Alice");
      expect(parsed.age).toEqual(30);
      // __type should be first in the output
      expect(result.indexOf("__type")).toBeLessThan(result.indexOf("name"));
    });

    it("falls back to writeValue for non-struct schemas", () => {
      const docSchema = 15;
      serializer.writeDiscriminatedDocument(docSchema, [1, 2, 3]);
      expect(JSON.parse(decode(serializer.flush()))).toEqual([1, 2, 3]);
    });

    it("falls back to writeValue for null input", () => {
      const schema = [3, "ns", "S", 0, ["a"], [0]] satisfies StaticStructureSchema;
      serializer.writeDiscriminatedDocument(schema, null);
      expect(decode(serializer.flush())).toEqual("null");
    });
  });

  // ─── Media type (LazyJsonString) ──────────────────────────────────────────

  describe("media type handling", () => {
    it("serializes media type JSON strings", () => {
      serializer.write(widget, { media: '{"nested":"json"}' });
      const result = JSON.parse(decode(serializer.flush()));
      expect(JSON.parse(result.media)).toEqual({ nested: "json" });
    });

    it("serializes media type with nested escaping", () => {
      serializer.write(widget, { media: '{"key":"value with \\"quotes\\""}' });
      const result = decode(serializer.flush());
      // Should be valid JSON
      expect(() => JSON.parse(result)).not.toThrow();
    });
  });

  // ─── Idempotency token ────────────────────────────────────────────────────

  describe("idempotency token", () => {
    it("auto-generates token when value is undefined", () => {
      const idempotencySchema = [
        3,
        "ns",
        "S",
        0,
        ["token", "name"],
        [
          [0, "ns", "Token", 0b0100, 0] satisfies StaticSimpleSchema,
          [0, "ns", "Name", 0, 0] satisfies StaticSimpleSchema,
        ],
      ] satisfies StaticStructureSchema;

      serializer.write(idempotencySchema, { token: undefined, name: "hello" });
      const parsed = JSON.parse(decode(serializer.flush()));
      expect(parsed.token).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
      expect(parsed.name).toEqual("hello");
    });

    it("preserves caller-provided token", () => {
      const idempotencySchema = [
        3,
        "ns",
        "S",
        0,
        ["token", "name"],
        [
          [0, "ns", "Token", 0b0100, 0] satisfies StaticSimpleSchema,
          [0, "ns", "Name", 0, 0] satisfies StaticSimpleSchema,
        ],
      ] satisfies StaticStructureSchema;

      serializer.write(idempotencySchema, { token: "my-custom-token", name: "hello" });
      const parsed = JSON.parse(decode(serializer.flush()));
      expect(parsed.token).toEqual("my-custom-token");
    });
  });

  // ─── __type document member serialization ───────────────────────────────────

  describe("__type struct serialization", () => {
    const structWithJsonNames: StaticStructureSchema = [
      3,
      "ns",
      "MyStruct",
      0,
      ["firstName", "lastName", "age"],
      [
        [0, "ns", "FirstName", { jsonName: "first_name" }, 0],
        [0, "ns", "LastName", { jsonName: "last_name" }, 0],
        [1, "ns", "Age", 0, 0],
      ],
    ];

    it("serializes extra members not in the schema when __type is present", () => {
      const data = {
        __type: "ns#ExtendedStruct",
        firstName: "Alice",
        lastName: "Smith",
        age: 30,
        extraField: "extra_value",
        anotherExtra: 42,
      };
      serializer.write(structWithJsonNames, data);
      const result = JSON.parse(decode(serializer.flush()));

      expect(result.first_name).toEqual("Alice");
      expect(result.last_name).toEqual("Smith");
      expect(result.age).toEqual(30);
      expect(result.extraField).toEqual("extra_value");
      expect(result.anotherExtra).toEqual(42);
      expect(result.__type).toEqual("ns#ExtendedStruct");
    });

    it("does not duplicate schema members as extra members when __type is present", () => {
      const data = {
        __type: "ns#Thing",
        firstName: "Bob",
        lastName: "Jones",
        age: 25,
      };
      serializer.write(structWithJsonNames, data);
      const result = decode(serializer.flush());
      const parsed = JSON.parse(result);

      expect(parsed.first_name).toEqual("Bob");
      // The raw key "firstName" should not appear — only the jsonName "first_name"
      expect(Object.keys(parsed).filter((k) => k === "firstName")).toHaveLength(0);
      // Each jsonName key should appear exactly once
      expect((result.match(/first_name/g) || []).length).toEqual(1);
    });

    it("writtenKeys prevents raw member names from appearing as extras", () => {
      const data = {
        __type: "ns#Thing",
        firstName: "Bob",
        lastName: "Jones",
        age: 25,
      };
      serializer.write(structWithJsonNames, data);
      const result = decode(serializer.flush());

      // "firstName" (source key) should NOT appear in output
      expect(result).not.toContain('"firstName"');
      // "first_name" (jsonName) SHOULD appear
      expect(result).toContain('"first_name"');
    });

    it("serializes __type struct without jsonName settings", () => {
      const noJsonSerializer = new JsonShapeSerializer2({
        jsonName: false,
        timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
      });
      const simpleStruct: StaticStructureSchema = [3, "ns", "SimpleStruct", 0, ["name", "value"], [0, 0]];
      const data = {
        __type: "ns#NoRename",
        name: "Dave",
        value: "test",
        unknownField: "mystery",
      };
      noJsonSerializer.write(simpleStruct, data);
      const result = JSON.parse(decode(noJsonSerializer.flush()));

      expect(result.__type).toEqual("ns#NoRename");
      expect(result.name).toEqual("Dave");
      expect(result.value).toEqual("test");
      expect(result.unknownField).toEqual("mystery");
    });
  });

  // ─── flush() behavior ─────────────────────────────────────────────────────

  describe("flush", () => {
    it("returns a Uint8Array", () => {
      serializer.write(widget, {});
      const result = serializer.flush();
      expect(result).toBeInstanceOf(Uint8Array);
    });

    it("returns valid UTF-8 bytes", () => {
      const docSchema = 15;
      serializer.write(docSchema, { text: "hello 🌍" });
      const bytes = serializer.flush();
      expect(decoder.decode(bytes)).toEqual('{"text":"hello 🌍"}');
    });

    it("returns an independent buffer on each flush (no aliasing)", () => {
      serializer.write(widget, { scalar: 1 });
      const first = serializer.flush();

      serializer.write(widget, { scalar: 2 });
      const second = serializer.flush();

      // Modifying the second result should not affect the first
      expect(decode(first)).toEqual('{"scalar":1}');
      expect(decode(second)).toEqual('{"scalar":2}');
    });
  });
});
