/**
 * <p>An Amazon S3 bucket where you want to store the results of this request.</p>
 */
export interface _S3OutputLocation {
  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager automatically determines the Amazon S3 bucket region.</p>
   */
  OutputS3Region?: string;

  /**
   * <p>The name of the Amazon S3 bucket.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The Amazon S3 bucket subfolder.</p>
   */
  OutputS3KeyPrefix?: string;
}

export type _UnmarshalledS3OutputLocation = _S3OutputLocation;
