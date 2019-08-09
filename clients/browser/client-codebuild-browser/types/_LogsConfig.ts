import {
  _CloudWatchLogsConfig,
  _UnmarshalledCloudWatchLogsConfig
} from "./_CloudWatchLogsConfig";
import { _S3LogsConfig, _UnmarshalledS3LogsConfig } from "./_S3LogsConfig";

/**
 * <p> Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. </p>
 */
export interface _LogsConfig {
  /**
   * <p> Information about Amazon CloudWatch Logs for a build project. Amazon CloudWatch Logs are enabled by default. </p>
   */
  cloudWatchLogs?: _CloudWatchLogsConfig;

  /**
   * <p> Information about logs built to an S3 bucket for a build project. S3 logs are not enabled by default. </p>
   */
  s3Logs?: _S3LogsConfig;
}

export interface _UnmarshalledLogsConfig extends _LogsConfig {
  /**
   * <p> Information about Amazon CloudWatch Logs for a build project. Amazon CloudWatch Logs are enabled by default. </p>
   */
  cloudWatchLogs?: _UnmarshalledCloudWatchLogsConfig;

  /**
   * <p> Information about logs built to an S3 bucket for a build project. S3 logs are not enabled by default. </p>
   */
  s3Logs?: _UnmarshalledS3LogsConfig;
}
