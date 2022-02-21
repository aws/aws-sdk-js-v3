import { ChecksumAlgorithm } from "./constants";

/**
 * Returns location (header/trailer) name to use to populate checksum in.
 */
export const getChecksumLocationName = (algorithm: ChecksumAlgorithm): string =>
  algorithm === ChecksumAlgorithm.MD5 ? "content-md5" : `x-amz-checksum-${algorithm.toLowerCase()}`;
