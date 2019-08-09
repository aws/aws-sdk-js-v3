/**
 * An object that contains information about an event destination that sends data to Amazon SNS.
 */
export interface _SnsDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.
   */
  TopicArn?: string;
}

export type _UnmarshalledSnsDestination = _SnsDestination;
