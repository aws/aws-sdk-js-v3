import {
  _CloudWatchLogsConfig,
  _UnmarshalledCloudWatchLogsConfig
} from "./_CloudWatchLogsConfig";
import { _S3LogsConfig, _UnmarshalledS3LogsConfig } from "./_S3LogsConfig";

/**
 * <p>Information about build logs in Amazon CloudWatch Logs.</p>
 */
export interface _LogsLocation {
  /**
   * <p>The name of the Amazon CloudWatch Logs group for the build logs.</p>
   */
  groupName?: string;

  /**
   * <p>The name of the Amazon CloudWatch Logs stream for the build logs.</p>
   */
  streamName?: string;

  /**
   * <p>The URL to an individual build log in Amazon CloudWatch Logs.</p>
   */
  deepLink?: string;

  /**
   * <p> The URL to a build log in an S3 bucket. </p>
   */
  s3DeepLink?: string;

  /**
   * <p> Information about Amazon CloudWatch Logs for a build project. </p>
   */
  cloudWatchLogs?: _CloudWatchLogsConfig;

  /**
   * <p> Information about S3 logs for a build project. </p>
   */
  s3Logs?: _S3LogsConfig;
}

export interface _UnmarshalledLogsLocation extends _LogsLocation {
  /**
   * <p> Information about Amazon CloudWatch Logs for a build project. </p>
   */
  cloudWatchLogs?: _UnmarshalledCloudWatchLogsConfig;

  /**
   * <p> Information about S3 logs for a build project. </p>
   */
  s3Logs?: _UnmarshalledS3LogsConfig;
}
