import { toUint8Array } from "@smithy/util-utf8";
import { promisify } from "util";
import { gzip } from "zlib";

import { CompressionAlgorithm } from "./constants";

const gzipAsync = promisify(gzip);

export const compressString = async (body: any, algorithm: CompressionAlgorithm): Promise<Uint8Array> => {
  // Only gzip shall be supported initial release.
  if (algorithm !== CompressionAlgorithm.GZIP) {
    throw new Error(`Only '${CompressionAlgorithm.GZIP}' is supported for compression. Got '${algorithm}'.`);
  }

  try {
    const compressedBuffer = await gzipAsync(toUint8Array(body || ""));
    return toUint8Array(compressedBuffer);
  } catch (err) {
    throw new Error("Failure during compression: " + err.message);
  }
};
