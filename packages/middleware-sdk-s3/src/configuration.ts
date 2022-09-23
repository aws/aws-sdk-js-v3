/**
 * All endpoint parameters with built-in bindings of AWS::S3::*
 */
export interface S3InputConfig {
  /**
   * Whether to force path style URLs for S3 objects
   * (e.g., https://s3.amazonaws.com/<bucketName>/<key> instead of https://<bucketName>.s3.amazonaws.com/<key>
   */
  forcePathStyle?: boolean;
  /**
   * Whether to use the S3 Transfer Acceleration endpoint by default
   */
  useAccelerateEndpoint?: boolean;
  /**
   * Whether multi-region access points (MRAP) should be disabled.
   */
  disableMultiregionAccessPoints?: boolean;
}

export interface S3ResolvedConfig {
  forcePathStyle: boolean;
  useAccelerateEndpoint: boolean;
  disableMultiregionAccessPoints: boolean;
}

export const resolveS3Config = <T>(input: T & S3InputConfig): T & S3ResolvedConfig => ({
  ...input,
  forcePathStyle: input.forcePathStyle ?? false,
  useAccelerateEndpoint: input.useAccelerateEndpoint ?? false,
  disableMultiregionAccessPoints: input.disableMultiregionAccessPoints ?? false,
});
