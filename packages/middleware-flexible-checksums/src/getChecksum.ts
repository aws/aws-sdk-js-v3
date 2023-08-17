import { ChecksumConstructor, Encoder, HashConstructor, StreamHasher } from "@smithy/types";

import { isStreaming } from "./isStreaming";
import { stringHasher } from "./stringHasher";

export interface GetChecksumDigestOptions {
  streamHasher: StreamHasher<any>;
  checksumAlgorithmFn: ChecksumConstructor | HashConstructor;
  base64Encoder: Encoder;
}

export const getChecksum = async (
  body: unknown,
  { streamHasher, checksumAlgorithmFn, base64Encoder }: GetChecksumDigestOptions
) => {
  const digest = isStreaming(body) ? streamHasher(checksumAlgorithmFn, body) : stringHasher(checksumAlgorithmFn, body);
  return base64Encoder(await digest);
};
