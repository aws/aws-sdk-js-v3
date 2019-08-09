/**
 * <p>When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source.</p>
 */
export interface _KinesisFirehoseInputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the input Amazon Kinesis Firehose delivery stream to read.</p>
   */
  ResourceARNUpdate?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARNUpdate?: string;
}

export type _UnmarshalledKinesisFirehoseInputUpdate = _KinesisFirehoseInputUpdate;
