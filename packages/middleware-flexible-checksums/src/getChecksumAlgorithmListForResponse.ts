import { ChecksumAlgorithm } from "./constants";
import { CLIENT_SUPPORTED_ALGORITHMS, PRIORITY_ORDER_ALGORITHMS } from "./types";

/**
 * Returns the priority array of algorithm to use to verify checksum and names
 * to be used as a key in the response header.
 */
export const getChecksumAlgorithmListForResponse = (responseAlgorithms: string[] = []): ChecksumAlgorithm[] => {
  const validChecksumAlgorithms: ChecksumAlgorithm[] = [];

  for (const algorithm of PRIORITY_ORDER_ALGORITHMS) {
    if (!responseAlgorithms.includes(algorithm) || !CLIENT_SUPPORTED_ALGORITHMS.includes(algorithm)) {
      continue;
    }
    validChecksumAlgorithms.push(algorithm as ChecksumAlgorithm);
  }

  return validChecksumAlgorithms;
};
