import { ChecksumAlgorithm } from "./constants";

/**
 * List of algorithms supported by client.
 */
export const CLIENT_SUPPORTED_ALGORITHMS = [
  ChecksumAlgorithm.CRC32,
  ChecksumAlgorithm.CRC32C,
  ChecksumAlgorithm.SHA1,
  ChecksumAlgorithm.SHA256,
];

/**
 * Priority order for validating checksum algorithm. A faster algorithm has higher priority.
 * ToDo: update the priority order based on profiling of JavaScript implementations.
 */
export const PRIORITY_ORDER_ALGORITHMS = [
  ChecksumAlgorithm.CRC32,
  ChecksumAlgorithm.CRC32C,
  ChecksumAlgorithm.SHA1,
  ChecksumAlgorithm.SHA256,
];
