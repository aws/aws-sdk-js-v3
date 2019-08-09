/**
 * <p> Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.</p>
 */
export interface _KinesisFirehoseInput {
  /**
   * <p>ARN of the input delivery stream.</p>
   */
  ResourceARN: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to make sure that the role has the necessary permissions to access the stream.</p>
   */
  RoleARN: string;
}

export type _UnmarshalledKinesisFirehoseInput = _KinesisFirehoseInput;
