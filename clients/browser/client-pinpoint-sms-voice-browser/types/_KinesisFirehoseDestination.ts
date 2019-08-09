/**
 * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
 */
export interface _KinesisFirehoseDestination {
  /**
   * The Amazon Resource Name (ARN) of an IAM role that can write data to an Amazon Kinesis Data Firehose stream.
   */
  DeliveryStreamArn?: string;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose destination that you want to use in the event destination.
   */
  IamRoleArn?: string;
}

export type _UnmarshalledKinesisFirehoseDestination = _KinesisFirehoseDestination;
