import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { Sha512 } from "@aws-sdk/checksums/sha";
import { Xxh3_64, Xxh3_128, Xxh64 } from "@aws-sdk/checksums/xxh";
import { ChecksumAlgorithm, S3 } from "@aws-sdk/client-s3";
import type { ChecksumConstructor } from "@smithy/types";
import { beforeAll, describe, expect, test as it } from "vitest";

// WHY: these algorithms are not built into flexible-checksums' selectChecksumAlgorithmFunction;
// they are registered per-client through the checksum extension seam (the `extensions` ctor
// property), which lands the constructor in runtimeConfig.checksumAlgorithms[id] where the
// middleware's default branch resolves it by the S3 model's ChecksumAlgorithm value.
const NEW_ALGORITHMS: Record<string, ChecksumConstructor> = {
  [ChecksumAlgorithm.SHA512]: Sha512 as unknown as ChecksumConstructor,
  [ChecksumAlgorithm.XXHASH64]: Xxh64 as unknown as ChecksumConstructor,
  [ChecksumAlgorithm.XXHASH3]: Xxh3_64 as unknown as ChecksumConstructor,
  [ChecksumAlgorithm.XXHASH128]: Xxh3_128 as unknown as ChecksumConstructor,
};

function registerChecksumsExtension() {
  return {
    configure(extensionConfiguration: any) {
      for (const [id, ctor] of Object.entries(NEW_ALGORITHMS)) {
        extensionConfiguration.addChecksumAlgorithm({
          algorithmId: () => id,
          checksumConstructor: () => ctor,
        });
      }
    },
  };
}

// Byte-length boundaries exercising each algorithm's internal path transitions:
// xxh3 small/medium/large splits (<=16, 17-128, 129-240, >240), sha/xxh64 block
// boundaries (64/128), and the S3 8KiB request-buffer threshold.
const SIZES = [0, 1, 16, 17, 64, 128, 129, 240, 241, 256, 1024, 8192, 8193];

describe("S3 checksum round-trip for SDK-vended algorithms", () => {
  let s3: S3;
  let Bucket: string;
  let region: string;

  function body(size: number): Uint8Array {
    const b = new Uint8Array(size);
    for (let i = 0; i < size; ++i) {
      b[i] = (i * 31 + 7) & 0xff;
    }
    return b;
  }

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);
    region = process.env.AWS_SMOKE_TEST_REGION as string;
    Bucket = process.env.AWS_SMOKE_TEST_BUCKET as string;

    s3 = new S3({
      region,
      requestStreamBufferSize: 8 * 1024,
      extensions: [registerChecksumsExtension()],
    });
  });

  async function roundTrip(algo: string, size: number): Promise<void> {
    const Key = `checksum-e2e/${algo}/${size}`;
    const data = body(size);

    await s3.putObject({
      Bucket,
      Key,
      Body: data,
      ContentLength: size,
      ChecksumAlgorithm: algo as ChecksumAlgorithm,
    });

    const get = await s3.getObject({ Bucket, Key, ChecksumMode: "ENABLED" });
    expect(get.$metadata.httpStatusCode).toEqual(200);

    // S3 validated and stored the client-computed checksum server-side; its
    // presence on the response is the authoritative cross-check of our impl.
    expect(get[`Checksum${algo}` as keyof typeof get]).toBeDefined();

    const retrieved = await get.Body?.transformToByteArray();
    expect(retrieved?.byteLength).toEqual(size);
    expect(Array.from(retrieved ?? [])).toEqual(Array.from(data));
  }

  for (const algo of Object.keys(NEW_ALGORITHMS)) {
    // All byte-length boundaries run concurrently; Promise.all surfaces the
    // first rejection, which is sufficient to fail the algorithm.
    it(`${algo}: put and get across byte-length boundaries`, async () => {
      await Promise.all(SIZES.map((size) => roundTrip(algo, size)));
    });
  }
}, 120_000);
