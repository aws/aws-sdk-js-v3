import { Crc64Nvme } from "@aws-sdk/crc64-nvme";
import { describe, it } from "vitest";

import { ChecksumXxHash3_64 } from "./xxhash3_64/ChecksumXxHash3_64";
import { ChecksumXxHash3_128 } from "./xxhash3_128/ChecksumXxHash3_128";
import { ChecksumXxHash64 } from "./xxhash64/ChecksumXxHash64";

describe("xxhash throughput", () => {
  const MB = 1024 * 1024;
  const data = new Uint8Array(MB);
  for (let i = 0; i < data.length; i++) data[i] = i & 0xff;

  async function measure(name: string, factory: () => { update(c: Uint8Array): void; digest(): Promise<Uint8Array> }) {
    // warmup
    const w = factory();
    w.update(data);
    await w.digest();

    const iterations = 20;
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
      const c = factory();
      c.update(data);
      await c.digest();
    }
    const elapsed = (performance.now() - start) / 1000;
    const mbps = (iterations / elapsed).toFixed(1);
    console.log(`${name}: ${mbps} MB/s`);
  }

  it("xxhash64", async () => {
    await measure("XxHash64", () => new ChecksumXxHash64());
  });

  it("xxhash3_64", async () => {
    await measure("XxHash3_64", () => new ChecksumXxHash3_64());
  });

  it("xxhash3_128", async () => {
    await measure("XxHash3_128", () => new ChecksumXxHash3_128());
  });

  it("crc64nvme", async () => {
    await measure("CRC64NVME", () => new Crc64Nvme());
  });
});
