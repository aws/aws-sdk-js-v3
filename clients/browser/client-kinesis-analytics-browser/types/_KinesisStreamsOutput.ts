/**
 * <p>When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf.</p>
 */
export interface _KinesisStreamsOutput {
  /**
   * <p>ARN of the destination Amazon Kinesis stream to write to.</p>
   */
  ResourceARN: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARN: string;
}

export type _UnmarshalledKinesisStreamsOutput = _KinesisStreamsOutput;
