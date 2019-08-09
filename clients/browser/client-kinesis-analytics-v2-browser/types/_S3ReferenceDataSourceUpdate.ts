/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table. </p>
 */
export interface _S3ReferenceDataSourceUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARNUpdate?: string;

  /**
   * <p>The object key name.</p>
   */
  FileKeyUpdate?: string;
}

export type _UnmarshalledS3ReferenceDataSourceUpdate = _S3ReferenceDataSourceUpdate;
