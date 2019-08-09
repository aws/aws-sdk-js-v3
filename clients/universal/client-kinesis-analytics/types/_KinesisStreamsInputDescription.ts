/**
 * <p> Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration. </p>
 */
export interface _KinesisStreamsInputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream.</p>
   */
  ResourceARN?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.</p>
   */
  RoleARN?: string;
}

export type _UnmarshalledKinesisStreamsInputDescription = _KinesisStreamsInputDescription;
