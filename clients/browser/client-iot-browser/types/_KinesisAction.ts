/**
 * <p>Describes an action to write data to an Amazon Kinesis stream.</p>
 */
export interface _KinesisAction {
  /**
   * <p>The ARN of the IAM role that grants access to the Amazon Kinesis stream.</p>
   */
  roleArn: string;

  /**
   * <p>The name of the Amazon Kinesis stream.</p>
   */
  streamName: string;

  /**
   * <p>The partition key.</p>
   */
  partitionKey?: string;
}

export type _UnmarshalledKinesisAction = _KinesisAction;
