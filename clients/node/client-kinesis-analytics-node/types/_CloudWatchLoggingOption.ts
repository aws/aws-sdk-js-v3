/**
 * <p>Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.</p>
 */
export interface _CloudWatchLoggingOption {
  /**
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string;

  /**
   * <p>IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role that is used must have the <code>PutLogEvents</code> policy action enabled.</p>
   */
  RoleARN: string;
}

export type _UnmarshalledCloudWatchLoggingOption = _CloudWatchLoggingOption;
