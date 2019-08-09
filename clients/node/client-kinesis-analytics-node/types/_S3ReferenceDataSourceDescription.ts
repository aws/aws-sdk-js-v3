/**
 * <p>Provides the bucket name and object key name that stores the reference data.</p>
 */
export interface _S3ReferenceDataSourceDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string;

  /**
   * <p>Amazon S3 object key name.</p>
   */
  FileKey: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf to populate the in-application reference table.</p>
   */
  ReferenceRoleARN: string;
}

export type _UnmarshalledS3ReferenceDataSourceDescription = _S3ReferenceDataSourceDescription;
