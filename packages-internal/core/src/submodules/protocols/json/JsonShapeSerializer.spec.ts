import { NumericValue } from "@smithy/core/serde";
import type { StaticSimpleSchema, StaticStructureSchema, TimestampEpochSecondsSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { createNestingWidget, nestingWidget, unionStruct, widget } from "../test-schema.spec";
import { ByteJsonShapeSerializer } from "./experimental/ByteJsonShapeSerializer";
import { JsonShapeSerializer } from "./JsonShapeSerializer";

const decoder = new TextDecoder();

/**
 * Wraps a serializer so that flush() always returns a string,
 * enabling uniform assertions across both implementations.
 */
function createSerializerAdapter(serializer: JsonShapeSerializer | ByteJsonShapeSerializer) {
  return {
    name: serializer.constructor.name,
    write(schema: any, value: unknown) {
      serializer.write(schema, value);
    },
    flush(): string {
      const result = serializer.flush();
      if (result instanceof Uint8Array) {
        return decoder.decode(result);
      }
      return result as string;
    },
    raw: serializer,
  };
}

const settings = {
  jsonName: true,
  timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
} as const;

const serializers = [
  createSerializerAdapter(new JsonShapeSerializer(settings)),
  createSerializerAdapter(new ByteJsonShapeSerializer(settings)),
];

describe("JsonShapeSerializer correctness", () => {
  describe.each(serializers)("$name", (adapter) => {
    it("serializes data to JSON", () => {
      const data = {
        timestamp: new Date(0),
        bigint: 10000000000000000000000054321n,
        bigdecimal: new NumericValue("0.10000000000000000000000054321", "bigDecimal"),
        blob: new Uint8Array([0, 0, 0, 1]),
      };
      adapter.write(widget, data);
      const serialization = adapter.flush();
      expect(serialization).toEqual(
        `{"blob":"AAAAAQ==","timestamp":0,"bigint":10000000000000000000000054321,"bigdecimal":0.10000000000000000000000054321}`
      );
    });

    it("serializes extra document members when encountering __type", () => {
      const data = {
        __type: "ns#PlateOfFood",
        pasta: "Macaroni",
        cheese: "cheddar",
      };
      adapter.write(widget, data);
      const serialization = adapter.flush();
      expect(serialization).toEqual(`{"__type":"ns#PlateOfFood","pasta":"Macaroni","cheese":"cheddar"}`);
    });

    it("serializes $unknown union members", () => {
      adapter.write(unionStruct, {
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
      const serialization = adapter.flush();
      expect(serialization).toEqual(`{"union":{"unknownKey":{"timestamp":0,"blob":"AAECAw=="}}}`);
    });

    it("serializes nested structures", () => {
      adapter.write(nestingWidget, createNestingWidget(3));
      const serialization = adapter.flush();
      expect(serialization).toBeTruthy();
      // Verify it's valid JSON
      expect(() => JSON.parse(serialization)).not.toThrow();
    });

    it("serializes empty struct", () => {
      adapter.write(widget, {});
      const serialization = adapter.flush();
      expect(serialization).toEqual(`{}`);
    });

    it("serializes boolean values via document schema", () => {
      const docSchema = 15; // DocumentSchema
      adapter.write(docSchema, { yes: true, no: false });
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual({ yes: true, no: false });
    });

    it("serializes numeric values via document schema", () => {
      const docSchema = 15;
      adapter.write(docSchema, { int: 42, float: 3.14, negative: -1, zero: 0 });
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual({ int: 42, float: 3.14, negative: -1, zero: 0 });
    });

    it("serializes strings with escapes via document schema", () => {
      const docSchema = 15;
      adapter.write(docSchema, { text: 'hello "world"\nnewline\ttab\\backslash' });
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual({ text: 'hello "world"\nnewline\ttab\\backslash' });
    });

    it("serializes null in sparse lists", () => {
      // The sparse trait value of 1 enables sparse list behavior.
      const sparseListSchema = [3, "", "S", 0, ["items"], [[[1, "", "List", 0, 0], { sparse: 1 }]]] as any;
      adapter.write(sparseListSchema, { items: ["a", null, "b"] });
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual({ items: ["a", null, "b"] });
    });

    it("serializes maps with string values", () => {
      adapter.write(widget, { map: { foo: "bar", baz: "qux" } });
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual({ map: { foo: "bar", baz: "qux" } });
    });

    it("serializes lists of numbers", () => {
      adapter.write(widget, { list: [1, 2, 3] });
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual({ list: [1, 2, 3] });
    });

    // ─── String escaping coverage ──────────────────────────────────────────────

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
      adapter.write(docSchema, data);
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual(data);
    });

    it("handles strings with non-ASCII BMP characters", () => {
      const docSchema = 15;
      const data = { text: "café résumé naïve 中文 日本語 한국어 Ñoño" };
      adapter.write(docSchema, data);
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual(data);
    });

    it("handles strings with surrogate pairs (emoji)", () => {
      const docSchema = 15;
      const data = { emoji: "Hello 🌍🎉🚀 World 💻🔥" };
      adapter.write(docSchema, data);
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual(data);
    });

    it("handles strings with mixed ASCII, escapes, and unicode", () => {
      const docSchema = 15;
      const data = { mix: 'line1\nline2\t"quoted" café 🎉 \\ end' };
      adapter.write(docSchema, data);
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual(data);
    });

    it("handles empty string", () => {
      const docSchema = 15;
      adapter.write(docSchema, { empty: "" });
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual({ empty: "" });
    });

    it("handles long strings that may trigger buffer reallocation", () => {
      const docSchema = 15;
      const longStr = "a".repeat(5000) + '"\n\\' + "b".repeat(5000);
      adapter.write(docSchema, { long: longStr });
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual({ long: longStr });
    });

    // ─── Map key escaping ──────────────────────────────────────────────────────

    it("escapes map keys with special characters", () => {
      const docSchema = 15;
      const data = { 'key "with" quotes': "val1", "key\nwith\nnewlines": "val2", "key\\backslash": "val3" };
      adapter.write(docSchema, data);
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual(data);
    });

    it("handles map keys with unicode", () => {
      const docSchema = 15;
      const data = { clé: "valeur", キー: "値", "🔑": "secret" };
      adapter.write(docSchema, data);
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual(data);
    });

    // ─── Numeric edge cases ────────────────────────────────────────────────────

    it("serializes Infinity and NaN as quoted strings", () => {
      adapter.write(widget, { scalar: Infinity });
      expect(JSON.parse(adapter.flush())).toEqual({ scalar: "Infinity" });

      adapter.write(widget, { scalar: -Infinity });
      expect(JSON.parse(adapter.flush())).toEqual({ scalar: "-Infinity" });

      adapter.write(widget, { scalar: NaN });
      expect(JSON.parse(adapter.flush())).toEqual({ scalar: "NaN" });
    });

    // ─── Sparse map ────────────────────────────────────────────────────────────

    it("serializes null values in sparse maps", () => {
      const sparseMapSchema = [3, "", "S", 0, ["m"], [[[2, "", "Map", 0, 0, 0], { sparse: 1 }]]] as any;
      adapter.write(sparseMapSchema, { m: { a: "hello", b: null, c: "world" } });
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual({ m: { a: "hello", b: null, c: "world" } });
    });

    // ─── Nested documents ──────────────────────────────────────────────────────

    it("serializes deeply nested document objects", () => {
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
      adapter.write(docSchema, data);
      const serialization = adapter.flush();
      expect(JSON.parse(serialization)).toEqual(data);
    });

    // ─── Media type (LazyJsonString) ───────────────────────────────────────────

    it("serializes media type JSON strings", () => {
      adapter.write(widget, { media: '{"nested":"json"}' });
      const serialization = adapter.flush();
      const parsed = JSON.parse(serialization);
      expect(JSON.parse(parsed.media)).toEqual({ nested: "json" });
    });

    // ─── Idempotency token ─────────────────────────────────────────────────────

    it("auto-generates idempotency token when value is undefined", () => {
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

      adapter.write(idempotencySchema, { token: undefined, name: "hello" });
      const serialization = adapter.flush();
      const parsed = JSON.parse(serialization);
      // Should have auto-generated a v4 UUID
      expect(parsed.token).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
      expect(parsed.name).toEqual("hello");
    });

    it("preserves caller-provided idempotency token", () => {
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

      adapter.write(idempotencySchema, { token: "my-custom-token-123", name: "hello" });
      const serialization = adapter.flush();
      const parsed = JSON.parse(serialization);
      expect(parsed.token).toEqual("my-custom-token-123");
      expect(parsed.name).toEqual("hello");
    });
  });

  // ─── Broad equivalence test ────────────────────────────────────────────────

  it("both serializers produce identical output for standard cases", () => {
    const [multipass, byte] = serializers;
    const testCases = [
      {
        schema: widget,
        data: {
          timestamp: new Date(0),
          bigint: 10000000000000000000000054321n,
          bigdecimal: new NumericValue("0.10000000000000000000000054321", "bigDecimal"),
          blob: new Uint8Array([0, 0, 0, 1]),
        },
      },
      {
        schema: nestingWidget,
        data: createNestingWidget(3),
      },
      {
        schema: unionStruct,
        data: {
          union: {
            $unknown: [
              "unknownKey",
              {
                timestamp: new Date(0),
                blob: new Uint8Array([0, 1, 2, 3]),
              },
            ],
          },
        },
      },
    ];

    for (const { schema, data } of testCases) {
      multipass.write(schema, data);
      const expected = multipass.flush();
      byte.write(schema, data);
      const actual = byte.flush();
      expect(actual).toEqual(expected);
    }
  });

  it("both serializers produce identical output for edge cases", () => {
    const [multipass, byte] = serializers;
    const docSchema = 15;
    const edgeCases = [
      // Strings with escaping
      { schema: docSchema, data: { s: 'hello "world"\nnewline\ttab\\backslash\u0000null' } },
      // Unicode
      { schema: docSchema, data: { s: "café 🌍🎉 中文 \u0001\u001f" } },
      // Long string crossing buffer boundaries
      { schema: docSchema, data: { s: "x".repeat(3000) + '"' + "y".repeat(3000) } },
      // Nested documents
      { schema: docSchema, data: { a: { b: { c: [1, "two", null, true, { d: "e" }] } } } },
      // Map keys with escapes
      { schema: docSchema, data: { 'k"1': "v1", "k\n2": "v2", "k\\3": "v3", "🔑": "v4" } },
      // Empty containers
      { schema: docSchema, data: { obj: {}, arr: [], str: "" } },
      // Numeric edge cases via widget schema
      { schema: widget, data: { scalar: Infinity } },
      { schema: widget, data: { scalar: -Infinity } },
      { schema: widget, data: { scalar: NaN } },
      // Sparse list
      {
        schema: [3, "", "S", 0, ["items"], [[[1, "", "List", 0, 0], { sparse: 1 }]]] as any,
        data: { items: ["a", null, "b", null] },
      },
      // Sparse map
      {
        schema: [3, "", "S", 0, ["m"], [[[2, "", "Map", 0, 0, 0], { sparse: 1 }]]] as any,
        data: { m: { a: "x", b: null, c: "y" } },
      },
      // Large blob
      { schema: widget, data: { blob: new Uint8Array(4096) } },
      // Deep nesting
      { schema: nestingWidget, data: createNestingWidget(10) },
      // __type document passthrough
      { schema: widget, data: { __type: "com.amazonaws#Foo", bar: "baz", num: 123 } },
      // Media type
      { schema: widget, data: { media: '{"key":"value","arr":[1,2,3]}' } },
    ];

    for (const { schema, data } of edgeCases) {
      multipass.write(schema, data);
      const expected = multipass.flush();
      byte.write(schema, data);
      const actual = byte.flush();
      expect(actual).toEqual(expected);
    }
  });
});

describe("JsonShapeSerializer performance", () => {
  const multipassSerializer = new JsonShapeSerializer(settings);
  const byteSerializer = new ByteJsonShapeSerializer(settings);

  describe.each([
    { name: "JsonShapeSerializer", serializer: multipassSerializer },
    { name: "ByteJsonShapeSerializer", serializer: byteSerializer },
  ])("$name", ({ serializer }) => {
    it("should serialize objects", () => {
      const timings: string[] = [];
      const objects = [];

      // warmup
      for (let i = 0; i < 10; ++i) {
        const o = createNestingWidget(2 ** i);
        objects.push(o);
        serializer.write(nestingWidget, o);
        serializer.write(nestingWidget, o);
        serializer.write(nestingWidget, o);
        serializer.write(nestingWidget, o);
        serializer.flush();
      }

      for (let i = 0; i < objects.length; ++i) {
        const o = objects[i];

        const A = performance.now();
        serializer.write(nestingWidget, o);
        const serialization = serializer.flush();
        const B = performance.now();

        const length = serialization instanceof Uint8Array ? serialization.byteLength : serialization.length;
        timings.push(`${B - A} (length = ${length}, ${length / 1024 / (B - A)} kb/ms)`);
      }

      console.log(`${serializer.constructor.name} performance timings`, timings);
    });
  });

  it("should serialize nested objects without blob (no base64)", () => {
    // Schema without blob field
    const noBlobWidget: any = [
      3,
      "ns",
      "Struct",
      0,
      ["string", "date", "number", "list", "map", "nested"],
      [0, 4, 1, 64 | 1, 128 | 0, () => noBlobWidget],
    ];

    function createNoBlobWidget(nesting = 0): any {
      const object: any = {
        string: "hello, world",
        number: 100000,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        map: { a: "A", b: "B", c: "C" },
        date: new Date(0),
        nested: undefined,
      };
      if (nesting > 0) {
        object.nested = createNoBlobWidget(nesting - 1);
      }
      return object;
    }

    const depths = [1, 4, 16, 64, 256];
    const objects = depths.map((d) => createNoBlobWidget(d));

    // warmup
    for (const o of objects) {
      multipassSerializer.write(noBlobWidget, o);
      multipassSerializer.flush();
      byteSerializer.write(noBlobWidget, o);
      byteSerializer.flush();
    }
    for (const o of objects) {
      multipassSerializer.write(noBlobWidget, o);
      multipassSerializer.flush();
      byteSerializer.write(noBlobWidget, o);
      byteSerializer.flush();
    }

    const timings1: string[] = [];
    const timings3: string[] = [];

    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];

      const A1 = performance.now();
      multipassSerializer.write(noBlobWidget, o);
      const s1 = multipassSerializer.flush();
      const B1 = performance.now();
      timings1.push(
        `${(B1 - A1).toFixed(3)}ms (len=${s1.length}, ${(s1.length / 1024 / (B1 - A1)).toFixed(1)} kb/ms, depth=${depths[i]})`
      );

      const A3 = performance.now();
      byteSerializer.write(noBlobWidget, o);
      const s3 = byteSerializer.flush();
      const B3 = performance.now();
      timings3.push(
        `${(B3 - A3).toFixed(3)}ms (bytes=${s3.byteLength}, ${(s3.byteLength / 1024 / (B3 - A3)).toFixed(1)} kb/ms, depth=${depths[i]})`
      );
    }

    console.log(`${multipassSerializer.constructor.name} no-blob nested`, timings1);
    console.log(`${byteSerializer.constructor.name} no-blob nested`, timings3);
  });

  it("should serialize wide flat string:string maps", () => {
    // Schema: struct with a single map<string, string> member
    const wideMapSchema = [3, "", "WideMap", 0, ["tags"], [[2, "", "Map", 0, 0, 0]]] as any;

    function createWideMap(numKeys: number) {
      const tags: Record<string, string> = {};
      for (let i = 0; i < numKeys; i++) {
        tags[`key-${i.toString().padStart(4, "0")}`] = `value-${i}-${"x".repeat(20)}`;
      }
      return { tags };
    }

    const sizes = [10, 50, 100, 500, 1000, 5000];
    const objects = sizes.map((n) => createWideMap(n));

    // warmup
    for (const o of objects) {
      multipassSerializer.write(wideMapSchema, o);
      multipassSerializer.flush();
      byteSerializer.write(wideMapSchema, o);
      byteSerializer.flush();
    }
    for (const o of objects) {
      multipassSerializer.write(wideMapSchema, o);
      multipassSerializer.flush();
      byteSerializer.write(wideMapSchema, o);
      byteSerializer.flush();
    }

    const timings1: string[] = [];
    const timings3: string[] = [];

    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];

      const A1 = performance.now();
      multipassSerializer.write(wideMapSchema, o);
      const s1 = multipassSerializer.flush();
      const B1 = performance.now();
      timings1.push(`${B1 - A1} (JSON length = ${s1.length}, ${s1.length / 1024 / (B1 - A1)} kb/ms, keys=${sizes[i]})`);

      const A3 = performance.now();
      byteSerializer.write(wideMapSchema, o);
      const s3 = byteSerializer.flush();
      const B3 = performance.now();
      timings3.push(
        `${B3 - A3} (bytes = ${s3.byteLength}, ${s3.byteLength / 1024 / (B3 - A3)} kb/ms, keys=${sizes[i]})`
      );
    }

    console.log(`${multipassSerializer.constructor.name} wide-map timings`, timings1);
    console.log(`${byteSerializer.constructor.name} wide-map timings`, timings3);
  });

  it("should serialize and write to http socket (string vs Uint8Array)", async () => {
    const http = await import("node:http");

    // Schema: struct with a single map<string, string> member
    const wideMapSchema = [3, "", "WideMap", 0, ["tags"], [[2, "", "Map", 0, 0, 0]]] as any;

    function createWideMap(numKeys: number) {
      const tags: Record<string, string> = {};
      for (let i = 0; i < numKeys; i++) {
        tags[`key-${i.toString().padStart(4, "0")}`] = `value-${i}-${"x".repeat(20)}`;
      }
      return { tags };
    }

    const sizes = [100, 1000, 5000];
    const objects = sizes.map((n) => createWideMap(n));

    // Create a local HTTP server that responds immediately
    const server = http.createServer((req, res) => {
      req.resume();
      req.on("end", () => {
        res.writeHead(200);
        res.end();
      });
    });
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    const port = (server.address() as any).port;

    // Keep-alive agent to reuse connections
    const agent = new http.Agent({ keepAlive: true, maxSockets: 1 });

    const makeRequest = (body: string | Uint8Array): Promise<void> => {
      return new Promise((resolve, reject) => {
        const req = http.request(
          { hostname: "127.0.0.1", port, method: "POST", agent, headers: { "content-type": "application/json" } },
          (res) => {
            res.resume();
            res.on("end", resolve);
          }
        );
        req.on("error", reject);
        req.end(body);
      });
    };

    // Warmup connections
    for (let i = 0; i < 10; i++) {
      await makeRequest("{}");
    }

    const iterations = 100;
    const timings1: string[] = [];
    const timings3: string[] = [];

    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];

      // String path
      const A1 = performance.now();
      for (let j = 0; j < iterations; j++) {
        multipassSerializer.write(wideMapSchema, o);
        await makeRequest(multipassSerializer.flush());
      }
      const B1 = performance.now();
      const avgString = (B1 - A1) / iterations;

      // Bytes path
      const A3 = performance.now();
      for (let j = 0; j < iterations; j++) {
        byteSerializer.write(wideMapSchema, o);
        await makeRequest(byteSerializer.flush());
      }
      const B3 = performance.now();
      const avgBytes = (B3 - A3) / iterations;

      timings1.push(`avg=${avgString.toFixed(3)}ms (keys=${sizes[i]})`);
      timings3.push(`avg=${avgBytes.toFixed(3)}ms (keys=${sizes[i]})`);
    }

    agent.destroy();
    server.close();

    console.log(`${multipassSerializer.constructor.name} serialize+http (string)`, timings1);
    console.log(`${byteSerializer.constructor.name} serialize+http (Uint8Array)`, timings3);
  });
}, 30_000);
