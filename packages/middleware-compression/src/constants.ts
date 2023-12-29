/**
 * Compression Algorithms supported by the SDK.
 */
export enum CompressionAlgorithm {
  GZIP = "gzip",
}

export const CLIENT_SUPPORTED_ALGORITHMS: CompressionAlgorithm[] = [CompressionAlgorithm.GZIP];
