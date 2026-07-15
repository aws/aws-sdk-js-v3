import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import { describe, expect, test as it } from "vitest";

import { encode, type EncodeOptions } from "./0.encode";
import { decode, type DecodeOptions } from "./1.decode";
import { NumberValue } from "./NumberValue";

describe("encode", () => {
  describe("null", () => {
    it("returns NULL for null", () => {
      expect(encode(null)).toEqual({ NULL: true });
    });
  });

  describe("boolean", () => {
    [true, false].forEach((bool) => {
      it(`returns BOOL for ${bool}`, () => {
        expect(encode(bool)).toEqual({ BOOL: bool });
      });
    });
  });

  describe("number", () => {
    [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER].forEach((num) => {
      it(`returns N for integer: ${num}`, () => {
        expect(encode(num)).toEqual({ N: num.toString() });
      });
    });

    [1.01, Math.PI, Math.E, Number.MIN_VALUE, Number.EPSILON].forEach((num) => {
      it(`returns N for float: ${num}`, () => {
        expect(encode(num)).toEqual({ N: num.toString() });
      });
    });

    [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].forEach((num) => {
      it(`throws for special numeric value: ${num}`, () => {
        expect(() => encode(num)).toThrowError(`Special numeric value ${num.toString()} is not allowed`);
      });
    });

    [Number.MAX_SAFE_INTEGER + 1, Number.MAX_VALUE].forEach((num) => {
      it(`throws for number > MAX_SAFE_INTEGER: ${num}`, () => {
        expect(() => encode(num)).toThrowError("greater than Number.MAX_SAFE_INTEGER");
      });
    });

    [Number.MIN_SAFE_INTEGER - 1].forEach((num) => {
      it(`throws for number < MIN_SAFE_INTEGER: ${num}`, () => {
        expect(() => encode(num)).toThrowError("less than Number.MIN_SAFE_INTEGER");
      });
    });

    describe("allowImpreciseNumbers", () => {
      const opts: EncodeOptions = { allowImpreciseNumbers: true };

      [1.23e40, Number.MAX_VALUE, Number.MAX_SAFE_INTEGER + 1].forEach((num) => {
        it(`allows imprecise number: ${num}`, () => {
          expect(encode(num, opts)).toEqual({ N: String(num) });
        });
      });
    });

    describe("allowImpreciseNumbers only affects typeof number, not bigint", () => {
      it("throws for number > MAX_SAFE_INTEGER with allowImpreciseNumbers=false", () => {
        expect(() => encode(Number.MAX_SAFE_INTEGER + 1, { allowImpreciseNumbers: false })).toThrowError(
          "greater than Number.MAX_SAFE_INTEGER"
        );
      });

      it("does NOT throw for bigint > MAX_SAFE_INTEGER with allowImpreciseNumbers=false", () => {
        const big = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
        expect(encode(big, { allowImpreciseNumbers: false })).toEqual({ N: big.toString() });
      });

      it("does NOT throw for bigint < MIN_SAFE_INTEGER with allowImpreciseNumbers=false", () => {
        const big = BigInt(Number.MIN_SAFE_INTEGER) - 2n;
        expect(encode(big, { allowImpreciseNumbers: false })).toEqual({ N: big.toString() });
      });
    });
  });

  describe("bigint", () => {
    it("returns N for small bigint", () => {
      expect(encode(1n)).toEqual({ N: "1" });
    });

    it("returns N for large bigint (no precision check for bigints)", () => {
      const big = BigInt(Number.MAX_SAFE_INTEGER) * 2n;
      expect(encode(big)).toEqual({ N: big.toString() });
    });

    it("returns N for negative large bigint", () => {
      const big = BigInt(Number.MAX_SAFE_INTEGER) * -2n;
      expect(encode(big)).toEqual({ N: big.toString() });
    });

    it("does NOT throw for large bigint even with allowImpreciseNumbers=false", () => {
      const big = BigInt(Number.MAX_SAFE_INTEGER) * 2n;
      expect(encode(big, { allowImpreciseNumbers: false })).toEqual({ N: big.toString() });
    });
  });

  describe("NumberValue", () => {
    [1n, BigInt(Number.MAX_SAFE_INTEGER) * 2n].forEach((num) => {
      it(`returns N for NumberValue: ${num}`, () => {
        expect(encode(NumberValue.from(num))).toEqual({ N: num.toString() });
      });
    });
  });

  describe("binary", () => {
    it("returns B for Uint8Array", () => {
      const data = new Uint8Array([1, 2, 3, 4]);
      expect(encode(data)).toEqual({ B: data });
    });

    it("returns B for empty Uint8Array", () => {
      const data = new Uint8Array();
      expect(encode(data)).toEqual({ B: data });
    });

    it("returns NULL for empty Uint8Array when convertEmptyValues=true", () => {
      expect(encode(new Uint8Array(), { convertEmptyValues: true })).toEqual({ NULL: true });
    });

    it("does NOT convert non-empty Uint8Array to NULL with convertEmptyValues=true", () => {
      const data = new Uint8Array([1]);
      expect(encode(data, { convertEmptyValues: true })).toEqual({ B: data });
    });
  });

  describe("string", () => {
    ["", "hello", "'single'", '"double"'].forEach((str) => {
      it(`returns S for: "${str}"`, () => {
        expect(encode(str)).toEqual({ S: str });
      });
    });

    it("returns NULL for empty string when convertEmptyValues=true", () => {
      expect(encode("", { convertEmptyValues: true })).toEqual({ NULL: true });
    });

    it("does NOT convert empty string to NULL by default", () => {
      expect(encode("")).toEqual({ S: "" });
    });
  });

  describe("list", () => {
    it("encodes mixed list", () => {
      expect(encode([null, true, 1, "two", new Uint8Array([3])])).toEqual({
        L: [{ NULL: true }, { BOOL: true }, { N: "1" }, { S: "two" }, { B: new Uint8Array([3]) }],
      });
    });

    it("encodes nested lists", () => {
      expect(encode([[1, 2], [3]])).toEqual({
        L: [{ L: [{ N: "1" }, { N: "2" }] }, { L: [{ N: "3" }] }],
      });
    });

    it("removes undefined values by default", () => {
      expect(encode(["a", undefined, "b"])).toEqual({
        L: [{ S: "a" }, { S: "b" }],
      });
    });

    it("throws for undefined when removeUndefinedValues=false", () => {
      expect(() => encode(["a", undefined], { removeUndefinedValues: false })).toThrowError(
        "removeUndefinedValues=true"
      );
    });
  });

  describe("set", () => {
    it("number set", () => {
      expect(encode(new Set([1, 2, 3]))).toEqual({ NS: ["1", "2", "3"] });
    });

    it("NumberValue set", () => {
      const nv1 = NumberValue.from("9007199254740993");
      const nv2 = NumberValue.from("9007199254740994");
      expect(encode(new Set([nv1, nv2]))).toEqual({
        NS: ["9007199254740993", "9007199254740994"],
      });
    });

    it("string set", () => {
      expect(encode(new Set(["a", "b", "c"]))).toEqual({ SS: ["a", "b", "c"] });
    });

    it("binary set", () => {
      const a = new Uint8Array([1]);
      const b = new Uint8Array([2]);
      expect(encode(new Set([a, b]))).toEqual({ BS: [a, b] });
    });

    it("removes undefined from set by default", () => {
      expect(encode(new Set([1, undefined, 3]))).toEqual({ NS: ["1", "3"] });
    });

    it("throws for undefined in set when removeUndefinedValues=false", () => {
      expect(() => encode(new Set([1, undefined]), { removeUndefinedValues: false })).toThrowError("undefined");
    });

    it("converts empty set to NULL by default", () => {
      expect(encode(new Set([]))).toEqual({ NULL: true });
    });

    it("converts empty set to NULL when convertEmptyValues=true", () => {
      expect(encode(new Set([]), { convertEmptyValues: true })).toEqual({ NULL: true });
    });

    it("throws for empty set when convertEmptySetsToNull=false", () => {
      expect(() => encode(new Set([]), { convertEmptySetsToNull: false })).toThrowError("non-empty set");
    });

    it("throws for unsupported set member types", () => {
      expect(() => encode(new Set([true, false]) as any)).toThrowError("Only Number Set");
    });

    it("throws for mixed-type sets", () => {
      expect(() => encode(new Set([1, "two"]) as any)).toThrowError("uniform data types");
    });
  });

  describe("map (object)", () => {
    it("encodes plain object", () => {
      expect(encode({ a: "A", b: 1 })).toEqual({
        M: { a: { S: "A" }, b: { N: "1" } },
      });
    });

    it("encodes nested object", () => {
      expect(encode({ nested: { x: true } })).toEqual({
        M: { nested: { M: { x: { BOOL: true } } } },
      });
    });

    it("encodes Object.create(null)", () => {
      const obj = Object.create(null);
      obj.key = "val";
      expect(encode(obj)).toEqual({ M: { key: { S: "val" } } });
    });

    it("encodes empty object", () => {
      expect(encode({})).toEqual({ M: {} });
    });

    it("removes undefined values by default", () => {
      expect(encode({ a: "a", b: undefined })).toEqual({ M: { a: { S: "a" } } });
    });

    it("throws for undefined value when removeUndefinedValues=false", () => {
      expect(() => encode({ a: undefined }, { removeUndefinedValues: false })).toThrowError(
        "removeUndefinedValues=true"
      );
    });

    it("skips function values", () => {
      expect(encode({ a: 1, fn: (() => {}) as any })).toEqual({ M: { a: { N: "1" } } });
    });
  });

  describe("map (Map)", () => {
    it("encodes Map", () => {
      expect(encode(new Map([["k", "v"]]))).toEqual({ M: { k: { S: "v" } } });
    });

    it("encodes empty Map", () => {
      expect(encode(new Map())).toEqual({ M: {} });
    });
  });

  describe("class instances", () => {
    class Foo {
      constructor(public x: number) {}
    }

    it("converts class instance to map by default", () => {
      expect(encode(new Foo(5) as any)).toEqual({ M: { x: { N: "5" } } });
    });

    it("throws when convertClassInstanceToMap=false", () => {
      expect(() => encode(new Foo(5) as any, { convertClassInstanceToMap: false })).toThrowError(
        "Unsupported type passed"
      );
    });
  });

  describe("undefined", () => {
    it("throws for top-level undefined", () => {
      expect(() => encode(undefined)).toThrowError("removeUndefinedValues=true");
    });
  });

  describe("convertEmptyValues (deprecated option)", () => {
    const opts: EncodeOptions = { convertEmptyValues: true };

    it("converts empty string to NULL", () => {
      expect(encode("", opts)).toEqual({ NULL: true });
    });

    it("does not convert non-empty string to NULL", () => {
      expect(encode("x", opts)).toEqual({ S: "x" });
    });

    it("converts empty Uint8Array to NULL", () => {
      expect(encode(new Uint8Array(), opts)).toEqual({ NULL: true });
    });

    it("does not convert non-empty Uint8Array to NULL", () => {
      const data = new Uint8Array([1]);
      expect(encode(data, opts)).toEqual({ B: data });
    });

    it("converts empty set to NULL", () => {
      expect(encode(new Set([]), opts)).toEqual({ NULL: true });
    });

    it("converts all empty values in a map", () => {
      expect(encode({ s: "", b: new Uint8Array(), set: new Set([]) }, opts)).toEqual({
        M: {
          s: { NULL: true },
          b: { NULL: true },
          set: { NULL: true },
        },
      });
    });

    it("converts all empty values in a list", () => {
      expect(encode(["", new Uint8Array(), new Set([])], opts)).toEqual({
        L: [{ NULL: true }, { NULL: true }, { NULL: true }],
      });
    });
  });
});

describe("decode", () => {
  describe("null", () => {
    it("returns null for NULL", () => {
      expect(decode({ NULL: true })).toEqual(null);
    });
  });

  describe("boolean", () => {
    [true, false].forEach((bool) => {
      it(`returns ${bool} for BOOL`, () => {
        expect(decode({ BOOL: bool })).toEqual(bool);
      });
    });
  });

  describe("number", () => {
    [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER].forEach((num) => {
      it(`returns number for integer N: ${num}`, () => {
        expect(decode({ N: num.toString() })).toEqual(num);
      });
    });

    [1.01, Math.PI, Math.E, Number.MIN_VALUE, Number.EPSILON].forEach((num) => {
      it(`returns number for float N: ${num}`, () => {
        expect(decode({ N: num.toString() })).toEqual(num);
      });
    });

    [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].forEach((num) => {
      it(`returns special numeric value: ${num}`, () => {
        expect(decode({ N: num.toString() })).toEqual(num);
      });
    });

    it("returns bigint for numbers > MAX_SAFE_INTEGER", () => {
      const big = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
      expect(decode({ N: big.toString() })).toEqual(big);
    });

    it("returns bigint for numbers < MIN_SAFE_INTEGER", () => {
      const big = BigInt(Number.MIN_SAFE_INTEGER) - 2n;
      expect(decode({ N: big.toString() })).toEqual(big);
    });

    it("throws when bigint conversion fails for large floats", () => {
      const val = `${Number.MAX_SAFE_INTEGER + 2}.1`;
      expect(() => decode({ N: val })).toThrowError("can't be converted to BigInt");
    });

    describe("wrapNumbers=true", () => {
      const opts: DecodeOptions = { wrapNumbers: true };

      [1, Number.MAX_SAFE_INTEGER, 1.01].forEach((num) => {
        it(`returns NumberValue for: ${num}`, () => {
          expect(decode({ N: num.toString() }, opts)).toEqual({ value: num.toString() });
        });
      });

      it("returns NumberValue for large numbers", () => {
        const big = (BigInt(Number.MAX_SAFE_INTEGER) + 2n).toString();
        expect(decode({ N: big }, opts)).toEqual({ value: big });
      });
    });

    describe("wrapNumbers as function", () => {
      it("calls custom function", () => {
        expect(decode({ N: "124" }, { wrapNumbers: (s) => Number(s) / 2 })).toEqual(62);
      });
    });

    describe("small numbers and scientific notation", () => {
      ["0.0000001", "0.0000000001", "1e-7", "1e-20", "1e15"].forEach((numStr) => {
        it(`handles: ${numStr}`, () => {
          expect(decode({ N: numStr })).toEqual(Number(numStr));
        });
      });
    });
  });

  describe("binary", () => {
    it("returns Uint8Array for B", () => {
      const data = new Uint8Array([1, 2, 3, 4]);
      expect(decode({ B: data })).toEqual(data);
    });

    it("returns empty Uint8Array for empty B", () => {
      const data = new Uint8Array();
      expect(decode({ B: data })).toEqual(data);
    });
  });

  describe("string", () => {
    ["", "hello", "'single'", '"double"'].forEach((str) => {
      it(`returns string for S: "${str}"`, () => {
        expect(decode({ S: str })).toEqual(str);
      });
    });
  });

  describe("list", () => {
    it("decodes mixed list", () => {
      const input: AttributeValue[] = [
        { NULL: true },
        { BOOL: true },
        { N: "1" },
        { S: "two" },
        { B: new Uint8Array([3]) },
      ];
      expect(decode({ L: input })).toEqual([null, true, 1, "two", new Uint8Array([3])]);
    });

    it("decodes nested lists", () => {
      expect(
        decode({
          L: [{ L: [{ N: "1" }, { N: "2" }] }, { L: [{ N: "3" }] }],
        })
      ).toEqual([[1, 2], [3]]);
    });

    it("decodes list with wrapNumbers=true", () => {
      const input: AttributeValue[] = [{ N: "1.01" }, { N: "9007199254740996" }];
      expect(decode({ L: input }, { wrapNumbers: true })).toEqual([{ value: "1.01" }, { value: "9007199254740996" }]);
    });
  });

  describe("map", () => {
    it("decodes map to object", () => {
      expect(decode({ M: { a: { S: "A" }, b: { N: "1" } } })).toEqual({ a: "A", b: 1 });
    });

    it("decodes nested map", () => {
      expect(decode({ M: { nested: { M: { x: { BOOL: true } } } } })).toEqual({ nested: { x: true } });
    });

    it("decodes empty map", () => {
      expect(decode({ M: {} })).toEqual({});
    });

    it("decodes map with wrapNumbers=true", () => {
      expect(decode({ M: { n: { N: "42" } } }, { wrapNumbers: true })).toEqual({ n: { value: "42" } });
    });

    it("decodes map to Map when useMaps=true", () => {
      const result = decode({ M: { a: { S: "hello" } } }, { useMaps: true });
      expect(result).toBeInstanceOf(Map);
      expect((result as Map<string, any>).get("a")).toEqual("hello");
    });

    it("decodes large map", () => {
      const input: Record<string, AttributeValue> = {};
      const expected: Record<string, number> = {};
      for (let i = 0; i < 1000; i++) {
        input[String(i)] = { N: "1" };
        expected[String(i)] = 1;
      }
      expect(decode({ M: input })).toEqual(expected);
    });
  });

  describe("sets", () => {
    it("decodes number set", () => {
      expect(decode({ NS: ["1", "2", "3"] })).toEqual(new Set([1, 2, 3]));
    });

    it("decodes number set with bigints", () => {
      const big = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
      expect(decode({ NS: [big.toString()] })).toEqual(new Set([big]));
    });

    it("decodes number set with wrapNumbers=true", () => {
      expect(decode({ NS: ["1", "2"] }, { wrapNumbers: true })).toEqual(new Set([{ value: "1" }, { value: "2" }]));
    });

    it("decodes binary set", () => {
      const a = new Uint8Array([1]);
      const b = new Uint8Array([2]);
      expect(decode({ BS: [a, b] })).toEqual(new Set([a, b]));
    });

    it("decodes string set", () => {
      expect(decode({ SS: ["a", "b", "c"] })).toEqual(new Set(["a", "b", "c"]));
    });
  });

  describe("unsupported type", () => {
    ["X", "ZZ", "LS"].forEach((type) => {
      it(`throws for: ${type}`, () => {
        expect(() => decode({ [type]: "data" } as any)).toThrowError(`Unsupported type passed: ${type}`);
      });
    });
  });

  describe("empty input", () => {
    it("throws for empty object", () => {
      expect(() => decode({} as any)).toThrowError("No value defined");
    });
  });
});

describe("roundtrip: encode -> decode", () => {
  describe("scalars", () => {
    it("null", () => {
      expect(decode(encode(null))).toEqual(null);
    });

    [true, false].forEach((bool) => {
      it(`boolean: ${bool}`, () => {
        expect(decode(encode(bool))).toEqual(bool);
      });
    });

    [0, 1, -1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 1.01, Math.PI, Math.E].forEach((num) => {
      it(`number: ${num}`, () => {
        expect(decode(encode(num))).toEqual(num);
      });
    });

    it("bigint (small, within safe integer)", () => {
      expect(decode(encode(5n))).toEqual(5); // small bigint encodes as N:"5", decodes as number 5
    });

    it("bigint (large, roundtrips back to bigint)", () => {
      const big = BigInt(Number.MAX_SAFE_INTEGER) * 2n;
      expect(decode(encode(big))).toEqual(big);
    });

    it("negative large bigint roundtrips", () => {
      const big = BigInt(Number.MAX_SAFE_INTEGER) * -2n;
      expect(decode(encode(big))).toEqual(big);
    });

    it("NumberValue roundtrips with wrapNumbers=true", () => {
      const nv = NumberValue.from("12345678901234567890");
      expect(decode(encode(nv), { wrapNumbers: true })).toEqual({ value: "12345678901234567890" });
    });

    it("binary", () => {
      const data = new Uint8Array([0, 1, 2, 255]);
      expect(decode(encode(data))).toEqual(data);
    });

    it("empty binary", () => {
      const data = new Uint8Array();
      expect(decode(encode(data))).toEqual(data);
    });

    ["", "hello", "'quotes'", '"double"', "emoji 🎉"].forEach((str) => {
      it(`string: "${str}"`, () => {
        expect(decode(encode(str))).toEqual(str);
      });
    });
  });

  describe("collections", () => {
    it("list of scalars", () => {
      const input = [null, true, 42, "str", new Uint8Array([7])];
      expect(decode(encode(input))).toEqual(input);
    });

    it("nested list", () => {
      const input = [[1, 2], ["a", "b"], [null]];
      expect(decode(encode(input))).toEqual(input);
    });

    it("list with nested maps", () => {
      const input = [{ a: 1 }, { b: "two" }];
      expect(decode(encode(input))).toEqual(input);
    });

    it("map of scalars", () => {
      const input = { n: null, b: true, num: 5, s: "hi", bin: new Uint8Array([1]) };
      expect(decode(encode(input))).toEqual(input);
    });

    it("nested map", () => {
      const input = { outer: { inner: { deep: 42 } } };
      expect(decode(encode(input))).toEqual(input);
    });

    it("map with lists", () => {
      const input = { list: [1, 2, 3], nested: { arr: ["a", "b"] } };
      expect(decode(encode(input))).toEqual(input);
    });

    it("number set", () => {
      const input = new Set([1, 2, 3]);
      expect(decode(encode(input))).toEqual(input);
    });

    it("string set", () => {
      const input = new Set(["one", "two", "three"]);
      expect(decode(encode(input))).toEqual(input);
    });

    it("binary set", () => {
      const a = new Uint8Array([1, 2]);
      const b = new Uint8Array([3, 4]);
      const input = new Set([a, b]);
      expect(decode(encode(input))).toEqual(input);
    });

    it("Map container", () => {
      const input = new Map<string, any>([
        ["k1", "v1"],
        ["k2", 42],
      ]);
      // Map encodes to M, decodes back to object (not Map) by default
      expect(decode(encode(input))).toEqual({ k1: "v1", k2: 42 });
    });

    it("Map container with useMaps=true", () => {
      const input = new Map<string, any>([
        ["k1", "v1"],
        ["k2", 42],
      ]);
      const result = decode(encode(input), { useMaps: true }) as Map<string, any>;
      expect(result).toBeInstanceOf(Map);
      expect(result.get("k1")).toEqual("v1");
      expect(result.get("k2")).toEqual(42);
    });
  });

  describe("complex nested structures", () => {
    it("DynamoDB item with all types", () => {
      const input = {
        id: "pk-123",
        sort: 42,
        data: new Uint8Array([0xff, 0x00]),
        active: true,
        tags: new Set(["a", "b"]),
        scores: new Set([100, 200, 300]),
        metadata: {
          created: "2024-01-01",
          nested: {
            list: [1, "two", null],
          },
        },
        items: [
          { name: "item1", value: 10 },
          { name: "item2", value: 20 },
        ],
      };
      expect(decode(encode(input))).toEqual(input);
    });

    it("deeply nested structure", () => {
      const input = {
        l1: {
          l2: {
            l3: {
              l4: {
                value: "deep",
                list: [1, [2, [3]]],
              },
            },
          },
        },
      };
      expect(decode(encode(input))).toEqual(input);
    });
  });

  describe("wrapNumbers roundtrip", () => {
    it("integers with wrapNumbers=true", () => {
      [1, Number.MAX_SAFE_INTEGER].forEach((num) => {
        expect(decode(encode(num), { wrapNumbers: true })).toEqual({ value: num.toString() });
      });
    });

    it("floats with wrapNumbers=true", () => {
      [1.01, Math.PI].forEach((num) => {
        expect(decode(encode(num), { wrapNumbers: true })).toEqual({ value: num.toString() });
      });
    });

    it("map with wrapNumbers=true", () => {
      const input = { a: 1, b: 2.5 };
      expect(decode(encode(input), { wrapNumbers: true })).toEqual({
        a: { value: "1" },
        b: { value: "2.5" },
      });
    });

    it("list with wrapNumbers=true", () => {
      const input = [1, 2, 3];
      expect(decode(encode(input), { wrapNumbers: true })).toEqual([{ value: "1" }, { value: "2" }, { value: "3" }]);
    });
  });

  describe("options interactions", () => {
    it("removeUndefinedValues strips undefined from map", () => {
      const input = { a: "keep", b: undefined };
      expect(decode(encode(input))).toEqual({ a: "keep" });
    });

    it("removeUndefinedValues strips undefined from list", () => {
      const input = ["keep", undefined, "also"];
      expect(decode(encode(input))).toEqual(["keep", "also"]);
    });

    it("removeUndefinedValues strips undefined from set", () => {
      const input = new Set([1, undefined, 3]);
      expect(decode(encode(input))).toEqual(new Set([1, 3]));
    });

    it("convertEmptySetsToNull converts empty set", () => {
      const input = { data: new Set([]) };
      // Empty set becomes NULL, which decodes to null
      expect(decode(encode(input))).toEqual({ data: null });
    });
  });
});
