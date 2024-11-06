import { ChecksumConstructor, Encoder, HashConstructor } from "@smithy/types";

import { stringHasher } from "./stringHasher";

export interface GetChecksumDigestOptions {
  checksumAlgorithmFn: ChecksumConstructor | HashConstructor;
  base64Encoder: Encoder;
}

export const getChecksum = async (body: unknown, { checksumAlgorithmFn, base64Encoder }: GetChecksumDigestOptions) =>
  base64Encoder(await stringHasher(checksumAlgorithmFn, body));
