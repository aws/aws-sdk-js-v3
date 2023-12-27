/**
 * @public
 *
 */
export interface CompressionInputConfig {
  /**
   * Whether to disable request compression.
   */
  disableRequestCompression?: boolean;
  /**
   * Minimum size in bytes for compression. The value must be a non-negative integer value between 0 and 10485760 bytes inclusive.
   */
  minCompressionSizeInBytes?: number;
}

export interface CompressionResolvedConfig {
  disableRequestCompression: boolean;
  minCompressionSizeInBytes: number;
}

export const resolveCompressionConfig = <T>(input: T & CompressionInputConfig): T & CompressionResolvedConfig => {
  const minCompressionSizeInBytes = input.minCompressionSizeInBytes ?? 10240;
  const maxCompressionSizeInBytes = 10485760;
  // minCompressionSizeInBytes explanation
  if (minCompressionSizeInBytes < 0 || minCompressionSizeInBytes > maxCompressionSizeInBytes) {
    throw new Error("minCompressionSizeInBytes must be between 0 and 10485760 bytes inclusive");
  }
  return {
    ...input,
    disableRequestCompression: input.disableRequestCompression ?? false,
    minCompressionSizeInBytes,
  };
};
