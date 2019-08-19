/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data.</p>
 */
export interface _S3Configuration {
  /**
   * <p>The ARN of the S3 bucket that contains the data.</p>
   */
  BucketARN: string;

  /**
   * <p>The name of the object that contains the data.</p>
   */
  FileKey: string;
}

export type _UnmarshalledS3Configuration = _S3Configuration;
