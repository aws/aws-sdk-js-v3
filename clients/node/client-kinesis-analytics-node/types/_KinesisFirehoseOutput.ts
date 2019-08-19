/**
 * <p>When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf.</p>
 */
export interface _KinesisFirehoseOutput {
  /**
   * <p>ARN of the destination Amazon Kinesis Firehose delivery stream to write to.</p>
   */
  ResourceARN: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARN: string;
}

export type _UnmarshalledKinesisFirehoseOutput = _KinesisFirehoseOutput;
