/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).</p>
 */
export interface _KinesisFirehoseInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string;
}

export type _UnmarshalledKinesisFirehoseInput = _KinesisFirehoseInput;
