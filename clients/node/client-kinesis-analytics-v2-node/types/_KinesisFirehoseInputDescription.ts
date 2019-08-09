/**
 * <p>Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration. </p>
 */
export interface _KinesisFirehoseInputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics assumes to access the stream.</p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>
   */
  RoleARN?: string;
}

export type _UnmarshalledKinesisFirehoseInputDescription = _KinesisFirehoseInputDescription;
