/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination.</p>
 */
export interface _KinesisFirehoseOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream to write to. </p>
   */
  ResourceARNUpdate: string;
}

export type _UnmarshalledKinesisFirehoseOutputUpdate = _KinesisFirehoseOutputUpdate;
