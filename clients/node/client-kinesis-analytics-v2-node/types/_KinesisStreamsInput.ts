/**
 * <p> Identifies an Amazon Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).</p>
 */
export interface _KinesisStreamsInput {
  /**
   * <p>The ARN of the input Kinesis data stream to read.</p>
   */
  ResourceARN: string;
}

export type _UnmarshalledKinesisStreamsInput = _KinesisStreamsInput;
