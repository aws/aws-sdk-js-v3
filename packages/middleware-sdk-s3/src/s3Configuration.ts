/**
 * @public
 *
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
  /**
   * This feature was previously called the S3 Global Client.
   * This can result in additional latency as failed requests are retried
   * with a corrected region when receiving a permanent redirect error with status 301.
   * This feature should only be used as a last resort if you do not know the region of your bucket(s) ahead of time.
   */
  followRegionRedirects?: boolean;
}

export interface S3ResolvedConfig {
  forcePathStyle: boolean;
  useAccelerateEndpoint: boolean;
  disableMultiregionAccessPoints: boolean;
  followRegionRedirects: boolean;
}

export const resolveS3Config = <T>(input: T & S3InputConfig): T & S3ResolvedConfig => ({
  ...input,
  forcePathStyle: input.forcePathStyle ?? false,
  useAccelerateEndpoint: input.useAccelerateEndpoint ?? false,
  disableMultiregionAccessPoints: input.disableMultiregionAccessPoints ?? false,
  followRegionRedirects: input.followRegionRedirects ?? false,
});
