/**
 * <p>Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul> </p>
 */
export interface _LogPublishingOption {
  /**
   * <p>ARN of the Cloudwatch log group to which log needs to be published.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p> Specifies whether given log publishing option is enabled or not.</p>
   */
  Enabled?: boolean;
}

export type _UnmarshalledLogPublishingOption = _LogPublishingOption;
