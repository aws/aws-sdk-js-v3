/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
 */
export interface _S3ReferenceDataSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN?: string;

  /**
   * <p>The object key name containing the reference data.</p>
   */
  FileKey?: string;
}

export type _UnmarshalledS3ReferenceDataSource = _S3ReferenceDataSource;
