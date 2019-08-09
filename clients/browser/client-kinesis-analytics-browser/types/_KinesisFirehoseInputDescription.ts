/**
 * <p> Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration. </p>
 */
export interface _KinesisFirehoseInputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.</p>
   */
  ResourceARN?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics assumes to access the stream.</p>
   */
  RoleARN?: string;
}

export type _UnmarshalledKinesisFirehoseInputDescription = _KinesisFirehoseInputDescription;
