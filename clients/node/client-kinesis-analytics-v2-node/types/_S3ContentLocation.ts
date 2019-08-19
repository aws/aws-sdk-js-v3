/**
 * <p>For a Java-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. </p>
 */
export interface _S3ContentLocation {
  /**
   * <p>The Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   */
  BucketARN: string;

  /**
   * <p>The file key for the object containing the application code.</p>
   */
  FileKey: string;

  /**
   * <p>The version of the object containing the application code.</p>
   */
  ObjectVersion?: string;
}

export type _UnmarshalledS3ContentLocation = _S3ContentLocation;
