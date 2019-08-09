/**
 * <p>Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN). </p>
 */
export interface _CloudWatchLoggingOption {
  /**
   * <p>The ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string;
}

export type _UnmarshalledCloudWatchLoggingOption = _CloudWatchLoggingOption;
