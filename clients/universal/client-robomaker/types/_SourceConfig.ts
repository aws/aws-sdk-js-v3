/**
 * <p>Information about a source configuration.</p>
 */
export interface _SourceConfig {
  /**
   * <p>The Amazon S3 bucket name.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The s3 object key.</p>
   */
  s3Key?: string;

  /**
   * <p>The target processor architecture for the application.</p>
   */
  architecture?: "X86_64" | "ARM64" | "ARMHF" | string;
}

export type _UnmarshalledSourceConfig = _SourceConfig;
