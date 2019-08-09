/**
 * <p>Configuration options for sending command output to CloudWatch Logs.</p>
 */
export interface _CloudWatchOutputConfig {
  /**
   * <p>The name of the CloudWatch log group where you want to send command output. If you don't specify a group name, Systems Manager automatically creates a log group for you. The log group uses the following naming format: aws/ssm/<i>SystemsManagerDocumentName</i>.</p>
   */
  CloudWatchLogGroupName?: string;

  /**
   * <p>Enables Systems Manager to send command output to CloudWatch Logs.</p>
   */
  CloudWatchOutputEnabled?: boolean;
}

export type _UnmarshalledCloudWatchOutputConfig = _CloudWatchOutputConfig;
