import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(__dirname, "..", "planning", "checksums.md");

const require = createRequire(import.meta.url);
const { Crc32, Crc32Js, Crc32Node, Crc32cJs, Crc32cNode, Crc64NvmeJs, Crc64Nvme } = require("@aws-sdk/checksums/crc");
try {
  require("@aws-sdk/crc64-nvme-crt");
} catch {}
const { Sha1Js, Sha1Node, Sha1WebCrypto, Sha256, Sha256Js, Sha256Node } = require("@aws-sdk/checksums/sha");
const { AwsCrc32 } = require("@aws-crypto/crc32");
const { AwsCrc32c } = require("@aws-crypto/crc32c");
const { Sha256: AwsSha256 } = require("@aws-crypto/sha256-js");
const { Md5Js, Md5Node, Sha256WebCrypto } = require("@smithy/core/checksum");

const SIZES = [32, 256, 1024, 64 * 1024, 1024 * 1024, 10 * 1024 * 1024];
const ITERATIONS = [10000, 5000, 2000, 200, 20, 5];

function generateData(size) {
  const buf = new Uint8Array(size);
  for (let i = 0; i < size; ++i) {
    buf[i] = i & 0xff;
  }
  return buf;
}

const WARMUP_DATA = generateData(64 * 1024);

async function warmup(Impl, ...ctorArgs) {
  const deadline = performance.now() + 1000;
  while (performance.now() < deadline) {
    const h = new Impl(...ctorArgs);
    h.update(WARMUP_DATA);
    await h.digest();
  }
}

async function bench(Impl, data, iterations, ...ctorArgs) {
  const start = performance.now();
  for (let i = 0; i < iterations; ++i) {
    const h = new Impl(...ctorArgs);
    h.update(data);
    await h.digest();
  }
  return performance.now() - start;
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${bytes / (1024 * 1024)}MB`;
  if (bytes >= 1024) return `${bytes / 1024}KB`;
  return `${bytes}B`;
}

function formatThroughput(bytesPerSec) {
  if (bytesPerSec >= 1024 * 1024 * 1024) return `${(bytesPerSec / (1024 * 1024 * 1024)).toFixed(2)} GB/s`;
  if (bytesPerSec >= 1024 * 1024) return `${(bytesPerSec / (1024 * 1024)).toFixed(1)} MB/s`;
  return `${(bytesPerSec / 1024).toFixed(1)} KB/s`;
}

function alignedTable(headers, rows) {
  const widths = headers.map((h, i) => Math.max(h.length, ...rows.map((r) => r[i].length)));
  const pad = (s, i) => s.padEnd(widths[i]);
  const sep = widths.map((w) => "-".repeat(w));
  const out = [];
  out.push("| " + headers.map(pad).join(" | ") + " |");
  out.push("| " + sep.join(" | ") + " |");
  for (const row of rows) {
    out.push("| " + row.map(pad).join(" | ") + " |");
  }
  return out;
}

async function runSection(label, impls) {
  const rows = [];
  for (let si = 0; si < SIZES.length; ++si) {
    const size = SIZES[si];
    const data = generateData(size);
    const iters = ITERATIONS[si];
    const row = [formatSize(size)];
    const parts = [];
    for (const { name, Impl, ctorArgs } of impls) {
      const ms = await bench(Impl, data, iters, ...(ctorArgs || []));
      const tp = formatThroughput((size * iters * 1000) / ms);
      row.push(tp);
      parts.push(`${name}=${tp}`);
    }
    rows.push(row);
    console.log(`  ${label} ${formatSize(size)}: ${parts.join(", ")}`);
  }
  return rows;
}

const WEBCRYPTO_NOTE =
  "> **Note:** WebCrypto (`crypto.subtle`) was benchmarked from Node.js and may be significantly faster in a browser.";

const sections = [
  {
    title: "CRC-32",
    headers: ["Size", "Crc32Js (JS)", "Crc32Node (node:zlib)", "@aws-crypto/crc32"],
    impls: [
      { name: "Crc32Js", Impl: Crc32Js },
      { name: "Crc32Node", Impl: Crc32Node },
      { name: "@aws-crypto/crc32", Impl: AwsCrc32 },
    ],
  },
  {
    title: "CRC-32C",
    headers: ["Size", "Crc32cJs (JS)", "@aws-crypto/crc32c"],
    impls: [
      { name: "Crc32cJs", Impl: Crc32cJs },
      { name: "@aws-crypto/crc32c", Impl: AwsCrc32c },
    ],
  },
  {
    title: "CRC-64/NVME",
    headers: ["Size", "Crc64NvmeJs (JS)", "Crc64Nvme (auto CRT)"],
    impls: [
      { name: "Crc64NvmeJs", Impl: Crc64NvmeJs },
      { name: "Crc64Nvme", Impl: Crc64Nvme },
    ],
  },
  {
    title: "SHA-1 (hash)",
    note: WEBCRYPTO_NOTE,
    headers: ["Size", "Sha1Js (JS)", "Sha1Node (node:crypto)", "Sha1WebCrypto"],
    impls: [
      { name: "Sha1Js", Impl: Sha1Js },
      { name: "Sha1Node", Impl: Sha1Node },
      { name: "Sha1WebCrypto", Impl: Sha1WebCrypto },
    ],
  },
  {
    title: "SHA-1 (HMAC)",
    note: WEBCRYPTO_NOTE,
    headers: ["Size", "Sha1Js (JS)", "Sha1Node (node:crypto)", "Sha1WebCrypto"],
    impls: [
      { name: "Sha1Js", Impl: Sha1Js, ctorArgs: [generateData(32)] },
      { name: "Sha1Node", Impl: Sha1Node, ctorArgs: [generateData(32)] },
      { name: "Sha1WebCrypto", Impl: Sha1WebCrypto, ctorArgs: [generateData(32)] },
    ],
  },
  {
    title: "SHA-256 (hash)",
    note: WEBCRYPTO_NOTE,
    headers: ["Size", "Sha256Js (JS)", "Sha256Node (node:crypto)", "Sha256WebCrypto", "@aws-crypto/sha256-js"],
    impls: [
      { name: "Sha256Js", Impl: Sha256Js },
      { name: "Sha256Node", Impl: Sha256Node },
      { name: "Sha256WebCrypto", Impl: Sha256WebCrypto },
      { name: "@aws-crypto/sha256-js", Impl: AwsSha256 },
    ],
  },
  {
    title: "SHA-256 (HMAC)",
    note: WEBCRYPTO_NOTE,
    headers: ["Size", "Sha256Js (JS)", "Sha256Node (node:crypto)", "Sha256WebCrypto", "@aws-crypto/sha256-js"],
    impls: [
      { name: "Sha256Js", Impl: Sha256Js, ctorArgs: [generateData(32)] },
      { name: "Sha256Node", Impl: Sha256Node, ctorArgs: [generateData(32)] },
      { name: "Sha256WebCrypto", Impl: Sha256WebCrypto, ctorArgs: [generateData(32)] },
      { name: "@aws-crypto/sha256-js", Impl: AwsSha256, ctorArgs: [generateData(32)] },
    ],
  },
  {
    title: "MD5",
    headers: ["Size", "Md5Js (JS)", "Md5Node (node:crypto)"],
    impls: [
      { name: "Md5Js", Impl: Md5Js },
      { name: "Md5Node", Impl: Md5Node },
    ],
  },
];

console.log("Warming up...");
const allImpls = sections.flatMap((s) => s.impls);
for (const { name, Impl, ctorArgs } of allImpls) {
  process.stdout.write(`  ${name}...`);
  await warmup(Impl, ...(ctorArgs || []));
  console.log(" done");
}
await new Promise((r) => setTimeout(r, 1000));

console.log("\nRunning checksum benchmarks...\n");

const lines = [
  `# @aws-sdk/checksums Benchmarks\n`,
  `Platform: Node.js ${process.version} (${process.platform} ${process.arch})`,
  `Date: ${new Date().toISOString()}`,
  `Iterations per size: [${ITERATIONS.join(", ")}], Warmup: 1s per algo\n`,
];

for (const { title, headers, impls, note } of sections) {
  lines.push(`\n## ${title}\n`);
  if (note) {
    lines.push(`${note}\n`);
  }
  const rows = await runSection(title, impls);
  lines.push(...alignedTable(headers, rows));
}

console.log("\n" + lines.join("\n"));
writeFileSync(outputPath, lines.join("\n") + "\n");
console.log(`\nResults written to ${outputPath}`);
