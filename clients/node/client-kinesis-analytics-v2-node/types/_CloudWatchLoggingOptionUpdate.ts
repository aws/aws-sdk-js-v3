/**
 * <p>Describes the Amazon CloudWatch logging option updates.</p>
 */
export interface _CloudWatchLoggingOptionUpdate {
  /**
   * <p>The ID of the CloudWatch logging option to update</p>
   */
  CloudWatchLoggingOptionId: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARNUpdate?: string;
}

export type _UnmarshalledCloudWatchLoggingOptionUpdate = _CloudWatchLoggingOptionUpdate;
