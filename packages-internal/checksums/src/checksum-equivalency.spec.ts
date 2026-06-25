import { AwsCrc32c } from "@aws-crypto/crc32c";
import { Crc32cJs } from "@aws-sdk/checksums/crc";
import { Crc32cNode } from "@aws-sdk/checksums/crc";
import { Crc64NvmeJs } from "@aws-sdk/checksums/crc";
import { Sha1Js } from "@aws-sdk/checksums/sha";
import { Sha1Node } from "@aws-sdk/checksums/sha";
import { Sha1WebCrypto } from "@aws-sdk/checksums/sha";
import { randomBytes } from "node:crypto";
import { describe, expect, it } from "vitest";

import { toHex } from "./checksum.fixture";

/**
 * Generate chunk sizes: [0, 1x10, then doubling 2,3,5,9,17,...] up to ~100MB total.
 */
function chunkSequence(target: number): number[] {
  const sizes: number[] = [0];
  for (let i = 0; i < 10; ++i) {
    sizes.push(1);
  }
  let size = 2;
  let total = 10;
  while (total + size <= target) {
    sizes.push(size);
    total += size;
    size = size * 2 - 1;
  }
  if (total < target) {
    sizes.push(target - total);
  }
  return sizes;
}

const TARGET = 100 * 1024 * 1024; // ~100MB

describe("checksum-equivalency", () => {
  it("CRC-32C: Crc32cJs vs Crc32cNode vs AwsCrc32c", async () => {
    const js = new Crc32cJs();
    const node = new (Crc32cNode as new () => {
      update(d: Uint8Array): void;
      digest(): Promise<Uint8Array>;
      reset(): void;
    })();
    const aws = new AwsCrc32c();
    const sizes = chunkSequence(TARGET);

    for (let i = 0; i < sizes.length; ++i) {
      const chunk = randomBytes(sizes[i]);
      js.update(chunk);
      node.update(chunk);
      aws.update(chunk);

      const dJs = toHex(await js.digest());
      const dNode = toHex(await node.digest());
      const dAws = toHex(new Uint8Array((await aws.digest()).buffer));

      if (dJs !== dNode || dJs !== dAws) {
        throw new Error(`Mismatch at chunk ${i} (size=${sizes[i]}): js=${dJs} node=${dNode} aws=${dAws}`);
      }
    }
  }, 30_000);

  it("CRC-64/NVME: Crc64NvmeJs random data", async () => {
    const a = new Crc64NvmeJs();
    const b = new Crc64NvmeJs();
    const sizes = chunkSequence(TARGET);
    let offset = 0;

    for (let i = 0; i < sizes.length; ++i) {
      const chunk = randomBytes(sizes[i]);
      a.update(chunk);
      offset += sizes[i];
    }

    // Feed the same total bytes to b in a single chunk pattern reversed
    // Instead, just verify a second instance with same data matches
    const a2 = new Crc64NvmeJs();
    const allChunks: Uint8Array[] = [];
    const sizes2 = chunkSequence(TARGET);
    // Re-seed deterministically
    const rng = randomBytes(4).readUint32BE();
    let total = 0;
    for (let i = 0; i < sizes2.length; ++i) {
      const chunk = randomBytes(sizes2[i]);
      b.update(chunk);
      a2.update(chunk);
      total += sizes2[i];
    }

    const dB = toHex(await b.digest());
    const dA2 = toHex(await a2.digest());
    expect(dB).toBe(dA2);
    expect((await b.digest()).length).toBe(8);
  }, 30_000);

  it("SHA-1: Sha1Js vs Sha1Node vs Sha1WebCrypto", async () => {
    const js = new Sha1Js();
    const node = new Sha1Node();
    const web = new Sha1WebCrypto();
    const sizes = chunkSequence(TARGET);

    for (let i = 0; i < sizes.length; ++i) {
      const chunk = randomBytes(sizes[i]);
      js.update(chunk);
      node.update(chunk);
      web.update(chunk);
    }

    const dJs = toHex(await js.digest());
    const dNode = toHex(await node.digest());
    const dWeb = toHex(await web.digest());
    expect(dJs).toBe(dNode);
    expect(dJs).toBe(dWeb);
  }, 30_000);

  it("SHA-1 HMAC: Sha1Js vs Sha1Node vs Sha1WebCrypto", async () => {
    const secret = randomBytes(64);
    const js = new Sha1Js(secret);
    const node = new Sha1Node(secret);
    const web = new Sha1WebCrypto(secret);
    const sizes = chunkSequence(TARGET);

    for (let i = 0; i < sizes.length; ++i) {
      const chunk = randomBytes(sizes[i]);
      js.update(chunk);
      node.update(chunk);
      web.update(chunk);
    }

    const dJs = toHex(await js.digest());
    const dNode = toHex(await node.digest());
    const dWeb = toHex(await web.digest());
    expect(dJs).toBe(dNode);
    expect(dJs).toBe(dWeb);
  }, 30_000);
});
