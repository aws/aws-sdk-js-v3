#!/usr/bin/env npx tsx
/**
 * Benchmark: JSON shape serializers and deserializers
 *
 * Runs each serializer/deserializer variant in a separate child process to avoid
 * JIT/GC state contamination between variants.
 *
 * Usage:
 *   npx tsx scripts/benchmark-json-serializer.ts
 *   npx tsx scripts/benchmark-json-serializer.ts --variant=multipass
 *   npx tsx scripts/benchmark-json-serializer.ts --variant=byte
 *   npx tsx scripts/benchmark-json-serializer.ts --variant=deser-original
 *   npx tsx scripts/benchmark-json-serializer.ts --variant=deser-buffer
 *   npx tsx scripts/benchmark-json-serializer.ts --variant=deser-buffer-bytes
 */

import { execFileSync } from "node:child_process";
import { NumericValue } from "@smithy/core/serde";
import type {
  StaticStructureSchema,
  TimestampEpochSecondsSchema,
  BigIntegerSchema,
  BigDecimalSchema,
  BlobSchema,
  NumericSchema,
  StringSchema,
  TimestampDefaultSchema,
  StaticListSchema,
} from "@smithy/types";

import { ByteJsonShapeSerializer } from "../src/submodules/protocols/json/experimental/ByteJsonShapeSerializer";
import { BufferJsonShapeDeserializer } from "../src/submodules/protocols/json/experimental/BufferJsonShapeDeserializer";
import { JsonShapeDeserializer } from "../src/submodules/protocols/json/JsonShapeDeserializer";
import { JsonShapeSerializer } from "../src/submodules/protocols/json/JsonShapeSerializer";

// ─── Schemas ─────────────────────────────────────────────────────────────────

const widget = [
  3,
  "",
  "Struct",
  0,
  ["list", "sparseList", "map", "sparseMap", "blob", "media", "timestamp", "bigint", "bigdecimal", "scalar"],
  [
    [[1, "", "List", 0, 0] satisfies StaticListSchema, 0],
    [[1, "", "List", 0, 0] satisfies StaticListSchema, { sparse: 1 }],
    [2, "", "Map", 0, 0, 0],
    [[2, "", "Map", 0, 0, 0], { sparse: 1 }],
    21 satisfies BlobSchema,
    [0, "", "Media", { mediaType: "application/json" }, 0],
    7 satisfies TimestampEpochSecondsSchema,
    17 satisfies BigIntegerSchema,
    19 satisfies BigDecimalSchema,
    1 satisfies NumericSchema,
  ],
] satisfies StaticStructureSchema;

const nestingWidget: StaticStructureSchema = [
  3,
  "ns",
  "Struct",
  0,
  ["string", "date", "blob", "number", "list", "map", "nested"],
  [
    0 satisfies StringSchema,
    4 satisfies TimestampDefaultSchema,
    21 satisfies BlobSchema,
    1 satisfies NumericSchema,
    64 | 1,
    128 | 0,
    () => nestingWidget,
  ],
];

const noBlobWidget: any = [
  3,
  "ns",
  "Struct",
  0,
  ["string", "date", "number", "list", "map", "nested"],
  [0, 4, 1, 64 | 1, 128 | 0, () => noBlobWidget],
];

const wideMapSchema = [3, "", "WideMap", 0, ["tags"], [[2, "", "Map", 0, 0, 0]]] as any;

// ─── Data generators ─────────────────────────────────────────────────────────

function createNestingWidget(nesting = 0): any {
  const object: any = {
    string: "hello, world",
    number: 100000,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    map: { a: "A", b: "B", c: "C" },
    date: new Date(0),
    blob: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]),
    nested: undefined,
  };
  if (nesting > 0) {
    object.nested = createNestingWidget(nesting - 1);
  }
  return object;
}

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

function createWideMap(numKeys: number) {
  const tags: Record<string, string> = {};
  for (let i = 0; i < numKeys; i++) {
    tags[`key-${i.toString().padStart(4, "0")}`] = `value-${i}-${"x".repeat(20)}`;
  }
  return { tags };
}

function createEscapyMap(numKeys: number) {
  const tags: Record<string, string> = {};
  for (let i = 0; i < numKeys; i++) {
    tags[`key-"${i}"\n`] = `val\t${i}\u0000${'abc"\\'.repeat(5)}`;
  }
  return { tags };
}

function createDdbItem(targetBytes = 65536) {
  const item: Record<string, any> = {
    pk: { S: "USER#a4b4c5d6-e7f8-9012-3456-789abcdef012" },
    sk: { S: "ORDER#2024-07-17T14:30:00Z#inv-98765" },
    gsi1pk: { S: "TENANT#acme-corp" },
    gsi1sk: { S: "CREATED#2024-07-17T14:30:00.000Z" },
    entityType: { S: "Order" },
    version: { N: "42" },
    createdAt: { S: "2024-07-17T14:30:00.000Z" },
    updatedAt: { S: "2024-07-17T16:45:12.345Z" },
    ttl: { N: "1721318400" },
    status: { S: "PROCESSING" },
    totalAmount: { N: "15499.99" },
    currency: { S: "USD" },
    customerId: { S: "cust-f47ac10b-58cc-4372-a567-0e02b2c3d479" },
    customerEmail: { S: "jane.doe@example-corporation.com" },
    shippingAddress: {
      M: {
        street: { S: "1234 Innovation Boulevard, Suite 567" },
        city: { S: "San Francisco" },
        state: { S: "CA" },
        zip: { S: "94105-2839" },
        country: { S: "US" },
      },
    },
    metadata: {
      M: {
        source: { S: "web-app-v3.2.1" },
        userAgent: { S: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" },
        sessionId: { S: "sess-8a7b6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d" },
      },
    },
    thumbnail: { B: Buffer.alloc(256).toString("base64") },
    lineItems: { L: [] as any[] },
    auditLog: { L: [] as any[] },
  };

  // Fill with line items until we approach target size
  let i = 0;
  while (JSON.stringify(item).length < targetBytes * 0.95) {
    item.lineItems.L.push({
      M: {
        itemId: { S: `item-${String(i).padStart(4, "0")}-abcdef${String(i).padStart(4, "0")}` },
        sku: { S: `SKU-${["ELEC", "BOOK", "HOME", "SPRT", "FOOD"][i % 5]}-${1000 + i}` },
        name: { S: `Product ${i + 1} - ${["Widget", "Gadget", "Tool", "Device", "Component"][i % 5]} Pro Max` },
        description: {
          S: `Item ${i + 1}: ${10 + i}cm x ${5 + i}cm, ${(0.5 + i * 0.3).toFixed(1)}kg. Premium quality with warranty.`,
        },
        quantity: { N: String(1 + (i % 4)) },
        unitPrice: { N: (19.99 + i * 13.5).toFixed(2) },
        category: { S: ["Electronics", "Books", "Home", "Sports", "Food"][i % 5] },
        warehouse: { S: ["US-WEST-1", "US-EAST-2", "EU-CENTRAL-1"][i % 3] },
        trackingNumber: { S: `TRK${9000000000 + i * 111111111}US` },
      },
    });
    i++;
  }

  return item;
}

const ddbItemSchema = 15; // DocumentSchema — DDB items are untyped document shapes

// ─── Scenario definitions ────────────────────────────────────────────────────

interface Scenario {
  name: string;
  schema: any;
  data: unknown;
  iterations: number;
}

function getScenarios(): Scenario[] {
  const scenarios: Scenario[] = [];

  for (const depth of [4, 16, 64, 256, 1024]) {
    scenarios.push({
      name: `nested-struct (depth=${depth})`,
      schema: nestingWidget,
      data: createNestingWidget(depth),
      iterations: depth > 256 ? 50 : 200,
    });
  }

  for (const depth of [16, 64, 256, 1024]) {
    scenarios.push({
      name: `no-blob nested (depth=${depth})`,
      schema: noBlobWidget,
      data: createNoBlobWidget(depth),
      iterations: depth > 256 ? 50 : 200,
    });
  }

  for (const keys of [100, 500, 1000, 5000, 10000]) {
    scenarios.push({
      name: `wide-map (keys=${keys})`,
      schema: wideMapSchema,
      data: createWideMap(keys),
      iterations: keys > 5000 ? 20 : 100,
    });
  }

  for (const keys of [100, 1000, 5000]) {
    scenarios.push({
      name: `escape-heavy map (keys=${keys})`,
      schema: wideMapSchema,
      data: createEscapyMap(keys),
      iterations: keys > 1000 ? 20 : 100,
    });
  }

  scenarios.push({
    name: "small struct (widget)",
    schema: widget,
    data: {
      timestamp: new Date(0),
      bigint: 10000000000000000000000054321n,
      bigdecimal: new NumericValue("0.10000000000000000000000054321", "bigDecimal"),
      blob: new Uint8Array([0, 0, 0, 1]),
    },
    iterations: 5000,
  });

  for (const kb of [16, 64, 256, 512]) {
    scenarios.push({
      name: `blob ${kb}KB`,
      schema: widget,
      data: { blob: new Uint8Array(kb * 1024) },
      iterations: kb > 256 ? 50 : 200,
    });
  }

  // DDB-like items (document schema, realistic shape)
  for (const kb of [4, 16, 64]) {
    const data = createDdbItem(kb * 1024);
    scenarios.push({
      name: `ddb item ~${kb}KB`,
      schema: ddbItemSchema,
      data,
      iterations: kb > 16 ? 50 : 200,
    });
  }

  return scenarios;
}

// ─── Benchmark runner (single variant) ───────────────────────────────────────

interface BenchResult {
  name: string;
  ms: number;
  kbPerMs: number;
  size: number;
}

function runVariant(variant: "multipass" | "byte"): BenchResult[] {
  const settings = {
    jsonName: true,
    timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
  };

  const serializer =
    variant === "multipass" ? new JsonShapeSerializer(settings) : new ByteJsonShapeSerializer(settings);

  const scenarios = getScenarios();
  const results: BenchResult[] = [];

  for (const { name, schema, data, iterations } of scenarios) {
    // Warmup
    for (let i = 0; i < Math.min(iterations, 50); i++) {
      serializer.write(schema, data);
      serializer.flush();
    }

    // Measure
    const start = performance.now();
    let size = 0;
    for (let i = 0; i < iterations; i++) {
      serializer.write(schema, data);
      const r = serializer.flush();
      size = r instanceof Uint8Array ? r.byteLength : r.length;
    }
    const elapsed = performance.now() - start;
    const kbPerMs = (size * iterations) / 1024 / elapsed;

    results.push({ name, ms: elapsed / iterations, kbPerMs, size });
  }

  return results;
}

// ─── Deserialization benchmark runner ────────────────────────────────────────

type DeserVariant = "deser-original" | "deser-buffer" | "deser-buffer-bytes";

async function runDeserVariant(variant: DeserVariant): Promise<BenchResult[]> {
  const settings = {
    jsonName: true,
    timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
  };

  const serializer = new JsonShapeSerializer(settings);
  serializer.setSerdeContext({
    base64Encoder: (input: Uint8Array) => Buffer.from(input).toString("base64"),
  } as any);

  const deserializer =
    variant === "deser-original" ? new JsonShapeDeserializer(settings) : new BufferJsonShapeDeserializer(settings);

  const useBytes = variant === "deser-buffer-bytes";
  const encoder = new TextEncoder();

  const scenarios = getDeserScenarios();
  const results: BenchResult[] = [];

  for (const { name, schema, data, iterations } of scenarios) {
    // Serialize to JSON string (and optionally bytes) for deserialization input.
    serializer.write(schema, data);
    const jsonString = serializer.flush() as string;
    const jsonBytes = useBytes ? encoder.encode(jsonString) : undefined;
    const size = jsonString.length;

    const input: string | Uint8Array = useBytes ? jsonBytes! : jsonString;

    // Warmup
    for (let i = 0; i < Math.min(iterations, 50); ++i) {
      await deserializer.read(schema, input);
    }

    // Measure
    const start = performance.now();
    for (let i = 0; i < iterations; ++i) {
      await deserializer.read(schema, input);
    }
    const elapsed = performance.now() - start;
    const kbPerMs = (size * iterations) / 1024 / elapsed;

    results.push({ name, ms: elapsed / iterations, kbPerMs, size });
  }

  return results;
}

function getDeserScenarios(): Scenario[] {
  const scenarios: Scenario[] = [];

  for (const depth of [4, 16, 64, 256, 1024]) {
    scenarios.push({
      name: `nested-struct (depth=${depth})`,
      schema: nestingWidget,
      data: createNestingWidget(depth),
      iterations: depth > 256 ? 50 : 200,
    });
  }

  for (const depth of [16, 64, 256, 1024]) {
    scenarios.push({
      name: `no-blob nested (depth=${depth})`,
      schema: noBlobWidget,
      data: createNoBlobWidget(depth),
      iterations: depth > 256 ? 50 : 200,
    });
  }

  for (const keys of [100, 500, 1000, 5000, 10000]) {
    scenarios.push({
      name: `wide-map (keys=${keys})`,
      schema: wideMapSchema,
      data: createWideMap(keys),
      iterations: keys > 5000 ? 20 : 100,
    });
  }

  scenarios.push({
    name: "small struct (widget)",
    schema: widget,
    data: {
      timestamp: new Date(0),
      bigint: 10000000000000000000000054321n,
      bigdecimal: new NumericValue("0.10000000000000000000000054321", "bigDecimal"),
      blob: new Uint8Array([0, 0, 0, 1]),
    },
    iterations: 5000,
  });

  // DDB-like items (document schema, realistic shape)
  for (const kb of [4, 16, 64]) {
    const data = createDdbItem(kb * 1024);
    scenarios.push({
      name: `ddb item ~${kb}KB`,
      schema: ddbItemSchema,
      data,
      iterations: kb > 16 ? 50 : 200,
    });
  }

  return scenarios;
}

// ─── Main ────────────────────────────────────────────────────────────────────

const variantArg = process.argv.find((a) => a.startsWith("--variant="));

if (variantArg) {
  // Child process mode: run one variant, output JSON
  const variant = variantArg.split("=")[1] as "multipass" | "byte" | DeserVariant;
  if (variant.startsWith("deser-")) {
    runDeserVariant(variant as DeserVariant).then((results) => {
      process.stdout.write(JSON.stringify(results));
    });
  } else {
    const results = runVariant(variant as "multipass" | "byte");
    process.stdout.write(JSON.stringify(results));
  }
} else {
  // Orchestrator: spawn child processes for each variant
  const scriptPath = __filename;

  function runChild(variant: string): BenchResult[] {
    const output = execFileSync(process.execPath, ["--import", "tsx", scriptPath, `--variant=${variant}`], {
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
    });
    return JSON.parse(output.trim());
  }

  const col = (s: string, w: number) => s.padEnd(w);
  const colR = (s: string, w: number) => s.padStart(w);

  // ─── Serializer benchmark ───────────────────────────────────────────────────

  console.log("JSON Shape Serializer Benchmark (isolated processes)");
  console.log("═".repeat(90));
  console.log();

  process.stdout.write("Running multipass serializer... ");
  const multipassResults = runChild("multipass");
  console.log("done.");

  process.stdout.write("Running byte serializer...      ");
  const byteResults = runChild("byte");
  console.log("done.");
  console.log();

  // Print serializer table
  const serHeader = `${col("Scenario", 30)} │ ${colR("Size", 8)} │ ${colR("Multipass", 12)} │ ${colR("Byte", 12)} │ ${colR("Δ", 8)}`;
  console.log(serHeader);
  console.log(
    "─".repeat(30) + "─┼─" + "─".repeat(8) + "─┼─" + "─".repeat(12) + "─┼─" + "─".repeat(12) + "─┼─" + "─".repeat(8)
  );

  for (let i = 0; i < multipassResults.length; i++) {
    const mp = multipassResults[i];
    const bp = byteResults[i];
    const size = mp.size < 1024 ? `${mp.size} B` : `${(mp.size / 1024).toFixed(1)} KB`;
    const speedup = ((mp.ms - bp.ms) / mp.ms) * 100;
    const delta = `${speedup > 0 ? "+" : ""}${speedup.toFixed(1)}%`;
    console.log(
      `${col(mp.name, 30)} │ ${colR(size, 8)} │ ${colR(`${mp.kbPerMs.toFixed(1)} kb/ms`, 12)} │ ${colR(`${bp.kbPerMs.toFixed(1)} kb/ms`, 12)} │ ${colR(delta, 8)}`
    );
  }

  console.log();
  console.log("Δ = byte serializer speed improvement over multipass (positive = faster)");

  // ─── Deserializer benchmark ─────────────────────────────────────────────────

  console.log();
  console.log();
  console.log("JSON Shape Deserializer Benchmark (isolated processes)");
  console.log("═".repeat(100));
  console.log();

  process.stdout.write("Running original deserializer (string)...       ");
  const deserOriginalResults = runChild("deser-original");
  console.log("done.");

  process.stdout.write("Running buffer deserializer (string)...         ");
  const deserBufferResults = runChild("deser-buffer");
  console.log("done.");

  process.stdout.write("Running buffer deserializer (Uint8Array)...     ");
  const deserBufferBytesResults = runChild("deser-buffer-bytes");
  console.log("done.");
  console.log();

  // Print deserializer table
  const deserHeader = `${col("Scenario", 30)} │ ${colR("Size", 8)} │ ${colR("Original", 12)} │ ${colR("Buffer", 12)} │ ${colR("Buf+Bytes", 12)} │ ${colR("Δ str", 8)} │ ${colR("Δ bytes", 8)}`;
  console.log(deserHeader);
  console.log(
    "─".repeat(30) +
      "─┼─" +
      "─".repeat(8) +
      "─┼─" +
      "─".repeat(12) +
      "─┼─" +
      "─".repeat(12) +
      "─┼─" +
      "─".repeat(12) +
      "─┼─" +
      "─".repeat(8) +
      "─┼─" +
      "─".repeat(8)
  );

  for (let i = 0; i < deserOriginalResults.length; i++) {
    const orig = deserOriginalResults[i];
    const mut = deserBufferResults[i];
    const mutB = deserBufferBytesResults[i];
    const size = orig.size < 1024 ? `${orig.size} B` : `${(orig.size / 1024).toFixed(1)} KB`;
    const strSpeedup = ((orig.ms - mut.ms) / orig.ms) * 100;
    const bytesSpeedup = ((orig.ms - mutB.ms) / orig.ms) * 100;
    const deltaStr = `${strSpeedup > 0 ? "+" : ""}${strSpeedup.toFixed(1)}%`;
    const deltaBytes = `${bytesSpeedup > 0 ? "+" : ""}${bytesSpeedup.toFixed(1)}%`;
    console.log(
      `${col(orig.name, 30)} │ ${colR(size, 8)} │ ${colR(`${orig.kbPerMs.toFixed(1)} kb/ms`, 12)} │ ${colR(`${mut.kbPerMs.toFixed(1)} kb/ms`, 12)} │ ${colR(`${mutB.kbPerMs.toFixed(1)} kb/ms`, 12)} │ ${colR(deltaStr, 8)} │ ${colR(deltaBytes, 8)}`
    );
  }

  console.log();
  console.log("Δ str   = buffer (string input) speed improvement over original (positive = faster)");
  console.log("Δ bytes = buffer (Uint8Array input) speed improvement over original (positive = faster)");
}
