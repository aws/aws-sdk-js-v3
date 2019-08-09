/**
 * <p> Information about Amazon CloudWatch Logs for a build project. </p>
 */
export interface _CloudWatchLogsConfig {
  /**
   * <p>The current status of the logs in Amazon CloudWatch Logs for a build project. Valid values are:</p> <ul> <li> <p> <code>ENABLED</code>: Amazon CloudWatch Logs are enabled for this build project.</p> </li> <li> <p> <code>DISABLED</code>: Amazon CloudWatch Logs are not enabled for this build project.</p> </li> </ul>
   */
  status: "ENABLED" | "DISABLED" | string;

  /**
   * <p> The group name of the logs in Amazon CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with Log Groups and Log Streams</a>. </p>
   */
  groupName?: string;

  /**
   * <p> The prefix of the stream name of the Amazon CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with Log Groups and Log Streams</a>. </p>
   */
  streamName?: string;
}

export type _UnmarshalledCloudWatchLogsConfig = _CloudWatchLogsConfig;
