/**
 * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
 */
export interface _CloudWatchLoggingOptions {
  /**
   * <p>Enables or disables CloudWatch logging.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The CloudWatch group name for logging. This value is required if CloudWatch logging is enabled.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The CloudWatch log stream name for logging. This value is required if CloudWatch logging is enabled.</p>
   */
  LogStreamName?: string;
}

export type _UnmarshalledCloudWatchLoggingOptions = _CloudWatchLoggingOptions;
