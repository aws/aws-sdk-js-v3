/**
 * <p>Describes configuration parameters for CloudWatch logging for a Java-based Kinesis Data Analytics application.</p>
 */
export interface _MonitoringConfigurationDescription {
  /**
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.</p>
   */
  ConfigurationType?: "DEFAULT" | "CUSTOM" | string;

  /**
   * <p>Describes the granularity of the CloudWatch Logs for an application.</p>
   */
  MetricsLevel?: "APPLICATION" | "TASK" | "OPERATOR" | "PARALLELISM" | string;

  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: "INFO" | "WARN" | "ERROR" | "DEBUG" | string;
}

export type _UnmarshalledMonitoringConfigurationDescription = _MonitoringConfigurationDescription;
