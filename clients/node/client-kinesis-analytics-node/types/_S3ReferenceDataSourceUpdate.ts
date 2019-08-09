/**
 * <p>Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
 */
export interface _S3ReferenceDataSourceUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARNUpdate?: string;

  /**
   * <p>Object key name.</p>
   */
  FileKeyUpdate?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application.</p>
   */
  ReferenceRoleARNUpdate?: string;
}

export type _UnmarshalledS3ReferenceDataSourceUpdate = _S3ReferenceDataSourceUpdate;
