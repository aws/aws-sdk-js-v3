import { NumericValue } from "@smithy/core/serde";
import type { TimestampEpochSecondsSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { createNestingWidget, nestingWidget, unionStruct, unionStructControl, widget } from "../../test-schema.spec";
import { JsonShapeDeserializer as V1JsonShapeDeserializer } from "../codec-v1/JsonShapeDeserializer";
import { JsonShapeSerializer as V1JsonShapeSerializer } from "../codec-v1/JsonShapeSerializer";
import { JsonShapeDeserializer2 } from "./JsonShapeDeserializer2";

describe(JsonShapeDeserializer2.name, () => {
  let contextSourceAvailable = false;
  JSON.parse(`{ "key": 1 }`, function (key, value, context?: { source?: string }) {
    if (context?.source) {
      contextSourceAvailable = true;
    }
  });

  const deserializer = new JsonShapeDeserializer2({
    jsonName: true,
    timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
  });

  it("ignores list sparseness in the deserialization path", async () => {
    const json = JSON.stringify({
      list: ["a", "b", null, "c"],
      sparseList: ["a", "b", null, "c"],
    });

    const data = await deserializer.read(widget, json);
    expect(data).toEqual({
      list: ["a", "b", null, "c"],
      sparseList: ["a", "b", null, "c"],
    });
  });

  it("ignores map sparseness in the deserialization path, taking server output as-is", async () => {
    const json = JSON.stringify({
      map: {
        a: "a",
        b: "b",
        c: null,
      },
      sparseMap: {
        a: "a",
        b: "b",
        c: null,
      },
    });

    const data = await deserializer.read(widget, json);
    expect(data).toEqual({
      map: {
        a: "a",
        b: "b",
        c: null,
      },
      sparseMap: {
        a: "a",
        b: "b",
        c: null,
      },
    });
  });

  it("deserializes base64 to blob", async () => {
    expect(
      await deserializer.read(
        widget,
        JSON.stringify({
          blob: "AAAA",
        })
      )
    ).toEqual({
      blob: new Uint8Array([0, 0, 0]),
    });
  });

  it("deserializes JSON media type", async () => {
    expect(
      (
        await deserializer.read(
          widget,
          JSON.stringify({
            media: `{ "data": 1 }`,
          })
        )
      ).media.deserializeJSON()
    ).toEqual({ data: 1 });
  });

  it("deserializes timestamps", async () => {
    expect(
      await deserializer.read(
        widget,
        JSON.stringify({
          timestamp: 0,
        })
      )
    ).toEqual({
      timestamp: new Date(0),
    });
  });

  it("deserializes big integers from string or number", async () => {
    expect(
      await deserializer.read(
        widget,
        `{
      "bigint": "1000000000000000000000000000000000000"
    }`
      )
    ).toEqual({
      bigint: 1000000000000000000000000000000000000n,
    });

    const impreciseParsing = 1000000000000000042420637374017961984n;

    expect(
      await deserializer.read(
        widget,
        `{
      "bigint": 1000000000000000000000000000000000000
    }`
      )
    ).toEqual({
      bigint: contextSourceAvailable ? 1000000000000000000000000000000000000n : impreciseParsing,
    });
  });

  it("deserializes big decimals", async () => {
    expect(
      await deserializer.read(
        widget,
        `{
      "bigdecimal": "0.0000000000000000000000000000000000001"
    }`
      )
    ).toEqual({
      bigdecimal: new NumericValue("0.0000000000000000000000000000000000001", "bigDecimal"),
    });

    expect(
      await deserializer.read(
        widget,
        `{
      "bigdecimal": 0.0001
    }`
      )
    ).toEqual({
      bigdecimal: new NumericValue("0.0001", "bigDecimal"),
    });
  });

  it("deserializes infinite and NaN numerics", async () => {
    expect(await deserializer.read(widget, JSON.stringify({ scalar: "Infinity" }))).toEqual({ scalar: Infinity });
    expect(await deserializer.read(widget, JSON.stringify({ scalar: "-Infinity" }))).toEqual({ scalar: -Infinity });
    expect(await deserializer.read(widget, JSON.stringify({ scalar: "NaN" }))).toEqual({ scalar: NaN });
  });

  it("deserializes $unknown union members", async () => {
    const json = `{"union":{"unknownKey":{"timestamp":0,"blob":"AAECAw=="}}}`;
    {
      const deserialization = await deserializer.read(unionStruct, json);
      expect(deserialization).toEqual({
        union: {
          $unknown: [
            "unknownKey",
            {
              blob: "AAECAw==",
              timestamp: 0,
            },
          ],
        },
      });
    }
    {
      const deserialization = await deserializer.read(unionStructControl, json);
      expect(deserialization).toEqual({
        union: {},
      });
    }
  });

  it("deserializes extra document members when encountering __type", async () => {
    expect(
      await deserializer.read(
        nestingWidget,
        JSON.stringify({
          blob: "AAAA",
          nested: {
            __type: "ns#Other",
            __field__: "xyz",
          },
        })
      )
    ).toEqual({
      blob: new Uint8Array([0, 0, 0]),
      nested: {
        __field__: "xyz",
        __type: "ns#Other",
      },
    });
  });

  // ─── Exponent notation number deserialization (v1/v2 equivalence) ──────────

  describe("exponent notation numbers (v1/v2 equivalence)", () => {
    const v1Deserializer = new V1JsonShapeDeserializer({
      jsonName: true,
      timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
    });

    // Permutations: integral vs non-integral, safe vs unsafe, positive vs negative

    const exponentCases = [
      // ─── Integral, within safe integer range ─────────────────────
      { label: "positive integral, safe (1.23E8)", json: `{"scalar": 1.23E8}` },
      { label: "negative integral, safe (-1.23E8)", json: `{"scalar": -1.23E8}` },
      { label: "positive integral, safe (1E9)", json: `{"scalar": 1E9}` },
      { label: "negative integral, safe (-1E9)", json: `{"scalar": -1E9}` },
      { label: "positive integral, safe (5e+4)", json: `{"scalar": 5e+4}` },
      { label: "negative integral, safe (-5e+4)", json: `{"scalar": -5e+4}` },

      // ─── Integral, outside safe integer range ────────────────────
      { label: "positive integral, unsafe (1E19)", json: `{"scalar": 1E19}` },
      { label: "negative integral, unsafe (-1E19)", json: `{"scalar": -1E19}` },
      { label: "positive integral, unsafe (9.007199254740993E15)", json: `{"scalar": 9.007199254740993E15}` },
      { label: "negative integral, unsafe (-9.007199254740993E15)", json: `{"scalar": -9.007199254740993E15}` },
      { label: "positive integral, unsafe (1.23E100)", json: `{"scalar": 1.23E100}` },
      { label: "negative integral, unsafe (-1.23E100)", json: `{"scalar": -1.23E100}` },

      // ─── Non-integral (fractional), within safe range ────────────
      { label: "positive fractional, safe (1.5e-3)", json: `{"scalar": 1.5e-3}` },
      { label: "negative fractional, safe (-1.5e-3)", json: `{"scalar": -1.5e-3}` },
      { label: "positive fractional, safe (1.784316439424E9)", json: `{"scalar": 1.784316439424E9}` },
      { label: "negative fractional, safe (-1.784316439424E9)", json: `{"scalar": -1.784316439424E9}` },
      { label: "positive fractional, safe (3.14e+2)", json: `{"scalar": 3.14e+2}` },
      { label: "negative fractional, safe (-3.14e+2)", json: `{"scalar": -3.14e+2}` },

      // ─── Non-integral (fractional), outside safe range ───────────
      // Note: these use values where isFractionalNumeric returns true AND the value
      // exceeds MAX_SAFE_INTEGER. The reviver correctly identifies them as needing
      // BigDecimal treatment, but values with many fractional digits and a large
      // exponent (e.g. 18 frac digits, exp 16) trigger a known limitation where
      // exponent-notation source strings aren't normalized before NumericValue creation.
      // Use cases that don't trigger the bug (exponent pushes value just past safe range
      // but decimal portion is short enough to be fully shifted):
      { label: "positive fractional, unsafe (9.999999999999999E20)", json: `{"scalar": 9.999999999999999E20}` },
      { label: "negative fractional, unsafe (-9.999999999999999E20)", json: `{"scalar": -9.999999999999999E20}` },
      { label: "positive fractional, unsafe (1.23456E16)", json: `{"scalar": 1.23456E16}` },
      { label: "negative fractional, unsafe (-1.23456E16)", json: `{"scalar": -1.23456E16}` },

      // ─── Edge cases ──────────────────────────────────────────────
      { label: "zero exponent (1.5E0)", json: `{"scalar": 1.5E0}` },
      { label: "negative zero exponent (1.5e-0)", json: `{"scalar": 1.5e-0}` },
      { label: "uppercase E (1.23E+5)", json: `{"scalar": 1.23E+5}` },
      { label: "lowercase e (1.23e+5)", json: `{"scalar": 1.23e+5}` },
    ];

    it.each(exponentCases)("$label", async ({ json }) => {
      const v1Result = await v1Deserializer.read(widget, json);
      const v2Result = await deserializer.read(widget, json);
      expect(v2Result).toEqual(v1Result);
    });

    // Verify specific known values parse correctly (not just equivalence)
    it("1.23E8 deserializes to 123000000", async () => {
      const result = await deserializer.read(widget, `{"scalar": 1.23E8}`);
      expect(result.scalar).toBe(123000000);
    });

    it("1.784316439424E9 deserializes to 1784316439.424", async () => {
      const result = await deserializer.read(widget, `{"scalar": 1.784316439424E9}`);
      expect(result.scalar).toBe(1784316439.424);
    });

    it("1.5e-3 deserializes to 0.0015", async () => {
      const result = await deserializer.read(widget, `{"scalar": 1.5e-3}`);
      expect(result.scalar).toBe(0.0015);
    });

    // Exponent notation in timestamp fields (real-world: ECS createdAt)
    it("deserializes exponent-notation epoch timestamp", async () => {
      const v1Result = await v1Deserializer.read(widget, `{"timestamp": 1.784316439424E9}`);
      const v2Result = await deserializer.read(widget, `{"timestamp": 1.784316439424E9}`);
      expect(v2Result).toEqual(v1Result);
      expect(v2Result.timestamp).toEqual(new Date(1784316439424));
    });

    // Exponent in bigint field
    (contextSourceAvailable ? it : it.skip)("deserializes large exponent as bigint", async () => {
      const v1Result = await v1Deserializer.read(widget, `{"bigint": 1E19}`);
      const v2Result = await deserializer.read(widget, `{"bigint": 1E19}`);
      expect(v2Result).toEqual(v1Result);
      expect(v2Result.bigint).toBe(10000000000000000000n);
    });

    // Known limitation: exponent-notation fractional numbers with many decimal digits
    // outside safe range throw because NumericValue rejects 'E' in the source string.
    // e.g. "1.123456789012345678E16" (18 frac digits > exp 16 → fractional → NumericValue)
    // Both v1 and v2 share this behavior via jsonReviver.
    (contextSourceAvailable ? it : it.skip)(
      "known limitation: fractional exponent with many digits throws in reviver",
      async () => {
        const json = `{"scalar": 1.123456789012345678E16}`;
        await expect(v1Deserializer.read(widget, json)).rejects.toThrow(/NumericValue/);
        await expect(deserializer.read(widget, json)).rejects.toThrow(/NumericValue/);
      }
    );
  });

  describe("in-place mutation identity checks", () => {
    const noRenameDeserializer = new JsonShapeDeserializer2({
      jsonName: false,
      timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
    });

    it("returns the same list array reference", async () => {
      const parsed = JSON.parse(JSON.stringify({ list: ["a", "b", "c"], sparseList: ["x"] }));
      const listRef = parsed.list;
      const result = noRenameDeserializer.readObject(widget, parsed);
      expect(result.list).toBe(listRef);
    });

    it("returns the same map object reference", async () => {
      const parsed = JSON.parse(JSON.stringify({ map: { a: "1", b: "2" } }));
      const mapRef = parsed.map;
      const result = noRenameDeserializer.readObject(widget, parsed);
      expect(result.map).toBe(mapRef);
    });

    it("allocates a fresh object for structs (drops unrecognized keys)", async () => {
      const parsed = JSON.parse(JSON.stringify({ string: "hello", number: 42 }));
      const result = noRenameDeserializer.readObject(nestingWidget, parsed);
      expect(result).not.toBe(parsed);
      expect(result).toEqual({ string: "hello", number: 42 });
    });
  });

  describe("Buffer fast-path", () => {
    it("deserializes from Uint8Array input", async () => {
      const json = JSON.stringify({ list: ["a", "b"], map: { x: "y" } });
      const bytes = new TextEncoder().encode(json);
      const data = await deserializer.read(widget, bytes);
      expect(data).toEqual({
        list: ["a", "b"],
        map: { x: "y" },
      });
    });

    it("handles reviver for big integers via Uint8Array", async () => {
      const json = `{"bigint": "1000000000000000000000000000000000000"}`;
      const bytes = new TextEncoder().encode(json);
      const data = await deserializer.read(widget, bytes);
      expect(data).toEqual({
        bigint: 1000000000000000000000000000000000000n,
      });
    });
  });

  describe("performance comparison: MutatingJsonShapeDeserializer vs JsonShapeDeserializer", () => {
    const originalDeserializer = new V1JsonShapeDeserializer({
      jsonName: true,
      timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
    });
    const serializer = new V1JsonShapeSerializer({
      jsonName: true,
      timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
    });
    serializer.setSerdeContext({
      base64Encoder: (input: Uint8Array) => {
        return Buffer.from(input).toString("base64");
      },
    } as any);

    it("benchmark: string input", async () => {
      const strings: string[] = [];

      // Generate test data at various nesting depths.
      for (let i = 0; i < 10; ++i) {
        const o = createNestingWidget(2 ** i);
        serializer.write(nestingWidget, o);
        strings.push(serializer.flush());
      }

      // Warmup both implementations.
      for (const s of strings) {
        await originalDeserializer.read(nestingWidget, s);
        await deserializer.read(nestingWidget, s);
      }

      const originalTimings: number[] = [];
      const mutatingTimings: number[] = [];

      for (const s of strings) {
        const A = performance.now();
        await originalDeserializer.read(nestingWidget, s);
        const B = performance.now();
        await deserializer.read(nestingWidget, s);
        const C = performance.now();

        originalTimings.push(B - A);
        mutatingTimings.push(C - B);
      }

      console.log("\n=== Deserialization Benchmark (string input) ===");
      for (let i = 0; i < strings.length; ++i) {
        const len = strings[i].length;
        const origMs = originalTimings[i].toFixed(3);
        const mutMs = mutatingTimings[i].toFixed(3);
        const speedup = (originalTimings[i] / mutatingTimings[i]).toFixed(2);
        console.log(`  JSON ${len} chars: original=${origMs}ms, mutating=${mutMs}ms, speedup=${speedup}x`);
      }
    });

    it("benchmark: Uint8Array input", async () => {
      const strings: string[] = [];
      const buffers: Uint8Array[] = [];
      const enc = new TextEncoder();

      for (let i = 0; i < 10; ++i) {
        const o = createNestingWidget(2 ** i);
        serializer.write(nestingWidget, o);
        const json = serializer.flush();
        strings.push(json);
        buffers.push(enc.encode(json));
      }

      // Warmup both with Uint8Array.
      for (const b of buffers) {
        await originalDeserializer.read(nestingWidget, b);
        await deserializer.read(nestingWidget, b);
      }

      const originalTimings: number[] = [];
      const mutatingTimings: number[] = [];

      for (let i = 0; i < buffers.length; ++i) {
        const A = performance.now();
        await originalDeserializer.read(nestingWidget, buffers[i]);
        const B = performance.now();
        await deserializer.read(nestingWidget, buffers[i]);
        const C = performance.now();

        originalTimings.push(B - A);
        mutatingTimings.push(C - B);
      }

      console.log("\n=== Deserialization Benchmark (Uint8Array input) ===");
      for (let i = 0; i < buffers.length; ++i) {
        const len = strings[i].length;
        const origMs = originalTimings[i].toFixed(3);
        const mutMs = mutatingTimings[i].toFixed(3);
        const speedup = (originalTimings[i] / mutatingTimings[i]).toFixed(2);
        console.log(`  JSON ${len} chars: original=${origMs}ms, mutating=${mutMs}ms, speedup=${speedup}x`);
      }
    });
  }, 60_000);
});
