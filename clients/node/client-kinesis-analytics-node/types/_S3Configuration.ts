/**
 * <p>Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data.</p>
 */
export interface _S3Configuration {
  /**
   * <p>IAM ARN of the role used to access the data.</p>
   */
  RoleARN: string;

  /**
   * <p>ARN of the S3 bucket that contains the data.</p>
   */
  BucketARN: string;

  /**
   * <p>The name of the object that contains the data.</p>
   */
  FileKey: string;
}

export type _UnmarshalledS3Configuration = _S3Configuration;
