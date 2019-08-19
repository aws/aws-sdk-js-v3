/**
 * <p>When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN). </p>
 */
export interface _KinesisStreamsOutput {
  /**
   * <p>The ARN of the destination Kinesis data stream to write to.</p>
   */
  ResourceARN: string;
}

export type _UnmarshalledKinesisStreamsOutput = _KinesisStreamsOutput;
