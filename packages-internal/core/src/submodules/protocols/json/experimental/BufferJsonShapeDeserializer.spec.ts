import { NumericValue } from "@smithy/core/serde";
import type { TimestampEpochSecondsSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { createNestingWidget, nestingWidget, unionStruct, unionStructControl, widget } from "../../test-schema.spec";
import { JsonShapeDeserializer } from "../JsonShapeDeserializer";
import { JsonShapeSerializer } from "../JsonShapeSerializer";
import { BufferJsonShapeDeserializer } from "./BufferJsonShapeDeserializer";

describe(BufferJsonShapeDeserializer.name, () => {
  let contextSourceAvailable = false;
  JSON.parse(`{ "key": 1 }`, function (key, value, context?: { source?: string }) {
    if (context?.source) {
      contextSourceAvailable = true;
    }
  });

  const deserializer = new BufferJsonShapeDeserializer({
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

  describe("in-place mutation identity checks", () => {
    const noRenameDeserializer = new BufferJsonShapeDeserializer({
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
    const originalDeserializer = new JsonShapeDeserializer({
      jsonName: true,
      timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
    });
    const serializer = new JsonShapeSerializer({
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
