/**
 * @public
 */
export interface CompressionInputConfig {
  /**
   * Whether to disable request compression.
   */
  disableRequestCompression: boolean;

  /**
   * The minimum size in bytes that a request body should be to trigger compression.
   * The value must be a non-negative integer value between 0 and 10485760 bytes inclusive.
   */
  requestMinCompressionSizeBytes: number;
}

/**
 * @internal
 */
export interface CompressionResolvedConfig extends CompressionInputConfig {}
