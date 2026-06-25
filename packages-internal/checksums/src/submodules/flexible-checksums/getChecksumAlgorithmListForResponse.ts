import type { ChecksumAlgorithm } from "./constants";
import { PRIORITY_ORDER_ALGORITHMS } from "./types";

/**
 * Returns the priority array of algorithm to use to verify checksum and names
 * to be used as a key in the response header.
 */
export const getChecksumAlgorithmListForResponse = (responseAlgorithms: string[] = []): ChecksumAlgorithm[] => {
  const validChecksumAlgorithms: ChecksumAlgorithm[] = [];

  let i = PRIORITY_ORDER_ALGORITHMS.length;

  for (const algorithm of responseAlgorithms) {
    const priority = PRIORITY_ORDER_ALGORITHMS.indexOf(algorithm as ChecksumAlgorithm);
    if (priority !== -1) {
      validChecksumAlgorithms[priority] = algorithm as ChecksumAlgorithm;
    } else {
      validChecksumAlgorithms[i++] = algorithm as ChecksumAlgorithm;
    }
  }

  return validChecksumAlgorithms.filter(Boolean);
};
