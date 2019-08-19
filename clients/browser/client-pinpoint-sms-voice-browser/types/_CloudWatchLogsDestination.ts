/**
 * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
 */
export interface _CloudWatchLogsDestination {
  /**
   * The Amazon Resource Name (ARN) of an Amazon Identity and Access Management (IAM) role that is able to write event data to an Amazon CloudWatch destination.
   */
  IamRoleArn?: string;

  /**
   * The name of the Amazon CloudWatch Log Group that you want to record events in.
   */
  LogGroupArn?: string;
}

export type _UnmarshalledCloudWatchLogsDestination = _CloudWatchLogsDestination;
