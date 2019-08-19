/**
 * <p>Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT Bucket versioning</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface _VersioningConfiguration {
  /**
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.</p>
   */
  MFADelete?: "Enabled" | "Disabled" | string;

  /**
   * <p>The versioning state of the bucket.</p>
   */
  Status?: "Enabled" | "Suspended" | string;
}

export type _UnmarshalledVersioningConfiguration = _VersioningConfiguration;
