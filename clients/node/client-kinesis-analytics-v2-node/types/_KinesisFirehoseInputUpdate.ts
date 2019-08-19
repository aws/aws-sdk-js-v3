/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source.</p>
 */
export interface _KinesisFirehoseInputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the input delivery stream to read.</p>
   */
  ResourceARNUpdate: string;
}

export type _UnmarshalledKinesisFirehoseInputUpdate = _KinesisFirehoseInputUpdate;
