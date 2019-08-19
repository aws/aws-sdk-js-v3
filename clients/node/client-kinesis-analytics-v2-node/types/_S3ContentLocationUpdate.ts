/**
 * <p>Describes an update for the Amazon S3 code content location for a Java-based Amazon Kinesis Data Analytics application.</p>
 */
export interface _S3ContentLocationUpdate {
  /**
   * <p>The new Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   */
  BucketARNUpdate?: string;

  /**
   * <p>The new file key for the object containing the application code.</p>
   */
  FileKeyUpdate?: string;

  /**
   * <p>The new version of the object containing the application code.</p>
   */
  ObjectVersionUpdate?: string;
}

export type _UnmarshalledS3ContentLocationUpdate = _S3ContentLocationUpdate;
