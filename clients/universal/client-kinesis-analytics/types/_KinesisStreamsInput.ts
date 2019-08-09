/**
 * <p> Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.</p>
 */
export interface _KinesisStreamsInput {
  /**
   * <p>ARN of the input Amazon Kinesis stream to read.</p>
   */
  ResourceARN: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARN: string;
}

export type _UnmarshalledKinesisStreamsInput = _KinesisStreamsInput;
