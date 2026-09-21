import type { S3 as S3Type } from "@aws-sdk/client-s3";
import type { S3TransferManager as S3TransferManagerType } from "@aws-sdk/lib-transfer-manager/transfer-manager";
import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { FetchHttpHandler } from "@smithy/fetch-http-handler";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";
import {
  S3 as S3Browser,
  S3TransferManager as S3TransferManagerBrowser,
} from "../browser-build/browser-transfer-manager-bundle.js";

const S3 = S3Browser as unknown as typeof S3Type;
const S3TransferManager = S3TransferManagerBrowser as unknown as typeof S3TransferManagerType;

describe("S3TransferManager browser e2e", () => {
  const PATTERN = new Uint8Array([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37]); // "01234567"

  function data(bytes: number): Uint8Array {
    const buf = new Uint8Array(bytes);
    if (bytes === 0) return buf;
    const seedLen = Math.min(PATTERN.length, bytes);
    buf.set(PATTERN.subarray(0, seedLen));
    let filled = seedLen;
    while (filled < bytes) {
      const copyLen = Math.min(filled, bytes - filled);
      buf.copyWithin(filled, 0, filled + copyLen);
      filled += copyLen;
    }
    return buf;
  }

  function check(actual: Uint8Array, expected: Uint8Array) {
    expect(actual.length).toEqual(expected.length);
    // byte-wise comparison without relying on Node Buffer.
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] !== expected[i]) {
        expect.fail(`byte mismatch at index ${i}: ${actual[i]} !== ${expected[i]}`);
      }
    }
  }

  let client: InstanceType<typeof S3>;
  let tmPart: InstanceType<typeof S3TransferManager>;
  let tmRange: InstanceType<typeof S3TransferManager>;
  let Bucket: string;
  let region: string;

  const SIZE_5MB = 5 * 1024 * 1024;
  const SIZE_11MB = 11 * 1024 * 1024;

  const keys: string[] = [];
  const key = (name: string) => {
    const k = `tm-browser-e2e-${name}-${crypto.randomUUID()}`;
    keys.push(k);
    return k;
  };

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;
    if (!Bucket) {
      throw new Error(
        "AWS_SMOKE_TEST_BUCKET env var is required for the browser e2e test " +
          "(e.g. AWS_SMOKE_TEST_BUCKET=<bucket> yarn ...)."
      );
    }

    const provider = fromNodeProviderChain();
    const credentials = await provider();

    client = new S3({
      region,
      credentials,
      requestHandler: FetchHttpHandler.create({ credentials: "include" }),
    });

    tmPart = new S3TransferManager({ s3: client, multipartDownloadType: "PART" });
    tmRange = new S3TransferManager({ s3: client, multipartDownloadType: "RANGE" });
  });

  afterAll(async () => {
    await Promise.all(keys.map((Key) => client.deleteObject({ Bucket, Key }).catch(() => {})));
  });

  it("should upload then download a multipart object using the browser build (PART)", async () => {
    const Key = key("part");
    const body = data(SIZE_11MB);

    let initiated = false;
    let completed = false;
    const upload = await tmPart.upload(
      { Bucket, Key, Body: body },
      {
        eventListeners: {
          transferInitiated: [
            ({ snapshot }) => {
              initiated = true;
              expect(snapshot.transferredBytes).toEqual(0);
              expect(snapshot.totalBytes).toEqual(body.length);
            },
          ],
          transferComplete: [
            ({ snapshot }) => {
              completed = true;
              expect(snapshot.transferredBytes).toEqual(body.length);
            },
          ],
        },
      }
    );
    expect(upload.ETag).toBeDefined();
    expect(initiated).toBe(true);
    expect(completed).toBe(true);

    const download = await tmPart.download({ Bucket, Key });
    // Browser download bodies are web ReadableStreams; the browser joinStreams
    // path is what produces this Body.
    expect(download.Body).toBeInstanceOf(ReadableStream);
    const downloaded = await download.Body?.transformToByteArray();
    check(downloaded!, body);
    expect(download.ContentLength).toEqual(body.length);
  });

  it("should download a multipart object using the browser build (RANGE)", async () => {
    const Key = key("range");
    const body = data(SIZE_11MB);

    await tmRange.upload({ Bucket, Key, Body: body });

    const download = await tmRange.download({ Bucket, Key });
    expect(download.Body).toBeInstanceOf(ReadableStream);
    const downloaded = await download.Body?.transformToByteArray();
    check(downloaded!, body);
    expect(download.ContentLength).toEqual(body.length);
  });

  it("should report cumulative progress through the browser joinStreams path", async () => {
    const Key = key("progress");
    const body = data(SIZE_11MB);

    await tmPart.upload({ Bucket, Key, Body: body });

    const observed: number[] = [];
    const download = await tmPart.download(
      { Bucket, Key },
      {
        eventListeners: {
          bytesTransferred: [
            ({ snapshot }) => {
              observed.push(snapshot.transferredBytes);
              expect(snapshot.totalBytes).toEqual(body.length);
              expect(snapshot.transferredBytes).toBeLessThanOrEqual(body.length);
            },
          ],
        },
      }
    );

    const downloaded = await download.Body?.transformToByteArray();
    check(downloaded!, body);

    expect(observed.length).toBeGreaterThan(0);
    for (let i = 1; i < observed.length; i++) {
      expect(observed[i]).toBeGreaterThanOrEqual(observed[i - 1]);
    }
    expect(observed[observed.length - 1]).toEqual(body.length);
  });

  it("should download a range slice using the browser build", async () => {
    const Key = key("range-slice");
    const body = data(SIZE_11MB);

    await tmRange.upload({ Bucket, Key, Body: body });

    const download = await tmRange.download({ Bucket, Key, Range: `bytes=0-${SIZE_5MB - 1}` });
    const downloaded = await download.Body?.transformToByteArray();
    check(downloaded!, body.subarray(0, SIZE_5MB));
    expect(download.ContentLength).toEqual(SIZE_5MB);
  });
});
