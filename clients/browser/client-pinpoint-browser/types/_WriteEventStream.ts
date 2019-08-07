/**
 * Request to save an EventStream.
 */
export interface _WriteEventStream {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Firehose delivery stream to which you want to publish events.
   *  Firehose ARN: arn:aws:firehose:REGION:ACCOUNT_ID:deliverystream/STREAM_NAME
   *  Kinesis ARN: arn:aws:kinesis:REGION:ACCOUNT_ID:stream/STREAM_NAME
   */
  DestinationStreamArn?: string;

  /**
   * The IAM role that authorizes Amazon Pinpoint to publish events to the stream in your account.
   */
  RoleArn?: string;
}

export type _UnmarshalledWriteEventStream = _WriteEventStream;
