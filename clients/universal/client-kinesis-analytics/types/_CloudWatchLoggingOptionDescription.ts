/**
 * <p>Description of the CloudWatch logging option.</p>
 */
export interface _CloudWatchLoggingOptionDescription {
  /**
   * <p>ID of the CloudWatch logging option description.</p>
   */
  CloudWatchLoggingOptionId?: string;

  /**
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string;

  /**
   * <p>IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the <code>PutLogEvents</code> policy action enabled.</p>
   */
  RoleARN: string;
}

export type _UnmarshalledCloudWatchLoggingOptionDescription = _CloudWatchLoggingOptionDescription;
