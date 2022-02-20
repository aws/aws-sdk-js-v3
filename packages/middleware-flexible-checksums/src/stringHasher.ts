import { HashConstructor } from "@aws-sdk/types";

/**
 * A function that, given a hash constructor and a string, calculates the hash of the string.
 */
export const stringHasher = (checksumAlgorithmFn: HashConstructor, body: any) => {
  const hash = new checksumAlgorithmFn();
  hash.update(body || "");
  return hash.digest();
};
