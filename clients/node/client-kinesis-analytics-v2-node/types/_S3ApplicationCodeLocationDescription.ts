/**
 * <p>Describes the location of a Java-based Amazon Kinesis Data Analytics application's code stored in an S3 bucket.</p>
 */
export interface _S3ApplicationCodeLocationDescription {
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

export type _UnmarshalledS3ApplicationCodeLocationDescription = _S3ApplicationCodeLocationDescription;
