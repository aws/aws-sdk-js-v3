import { CompressionAlgorithm } from "./constants";

export const CLIENT_SUPPORTED_ALGORITHMS: CompressionAlgorithm[] = [
  'gzip',
  // add more supported compression algorithms here
];

export const PRIORITY_ORDER_ALGORITHMS: CompressionAlgorithm[] = [
  'gzip',
  // add more supported compression algorithms here in the order of their priority
];