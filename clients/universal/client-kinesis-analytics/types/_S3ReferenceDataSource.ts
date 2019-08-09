/**
 * <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger reloading of data into your application.</p>
 */
export interface _S3ReferenceDataSource {
  /**
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string;

  /**
   * <p>Object key name containing reference data.</p>
   */
  FileKey: string;

  /**
   * <p>ARN of the IAM role that the service can assume to read data on your behalf. This role must have permission for the <code>s3:GetObject</code> action on the object and trust policy that allows Amazon Kinesis Analytics service principal to assume this role.</p>
   */
  ReferenceRoleARN: string;
}

export type _UnmarshalledS3ReferenceDataSource = _S3ReferenceDataSource;
