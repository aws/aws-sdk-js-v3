import { ChecksumConstructor, HashConstructor } from "@aws-sdk/types";
import { toUint8Array } from "@aws-sdk/util-utf8";

/**
 * A function that, given a hash constructor and a string, calculates the hash of the string.
 */
export const stringHasher = (checksumAlgorithmFn: ChecksumConstructor | HashConstructor, body: any) => {
  const hash = new checksumAlgorithmFn();
  hash.update(toUint8Array(body || ""));
  return hash.digest();
};
