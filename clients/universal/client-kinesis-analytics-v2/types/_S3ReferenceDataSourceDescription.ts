/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data.</p>
 */
export interface _S3ReferenceDataSourceDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string;

  /**
   * <p>Amazon S3 object key name.</p>
   */
  FileKey: string;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to read the Amazon S3 object on your behalf to populate the in-application reference table. </p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>
   */
  ReferenceRoleARN?: string;
}

export type _UnmarshalledS3ReferenceDataSourceDescription = _S3ReferenceDataSourceDescription;
