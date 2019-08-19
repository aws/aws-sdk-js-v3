/**
 * <p>When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination.</p>
 */
export interface _KinesisStreamsOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream where you want to write the output.</p>
   */
  ResourceARNUpdate: string;
}

export type _UnmarshalledKinesisStreamsOutputUpdate = _KinesisStreamsOutputUpdate;
