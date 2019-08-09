/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream. </p>
 */
export interface _KinesisFirehoseOutput {
  /**
   * <p>The ARN of the destination delivery stream to write to.</p>
   */
  ResourceARN: string;
}

export type _UnmarshalledKinesisFirehoseOutput = _KinesisFirehoseOutput;
