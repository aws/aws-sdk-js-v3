import {
  _CloudWatchLogsLogStream,
  _UnmarshalledCloudWatchLogsLogStream
} from "./_CloudWatchLogsLogStream";

/**
 * <p>Describes the Amazon CloudWatch logs configuration for a layer.</p>
 */
export interface _CloudWatchLogsConfiguration {
  /**
   * <p>Whether CloudWatch Logs is enabled for a layer.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A list of configuration options for CloudWatch Logs.</p>
   */
  LogStreams?:
    | Array<_CloudWatchLogsLogStream>
    | Iterable<_CloudWatchLogsLogStream>;
}

export interface _UnmarshalledCloudWatchLogsConfiguration
  extends _CloudWatchLogsConfiguration {
  /**
   * <p>A list of configuration options for CloudWatch Logs.</p>
   */
  LogStreams?: Array<_UnmarshalledCloudWatchLogsLogStream>;
}
