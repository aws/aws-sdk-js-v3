/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration. </p>
 */
export interface _KinesisStreamsInputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.</p>
   */
  ResourceARN: string;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to access the stream.</p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>
   */
  RoleARN?: string;
}

export type _UnmarshalledKinesisStreamsInputDescription = _KinesisStreamsInputDescription;
