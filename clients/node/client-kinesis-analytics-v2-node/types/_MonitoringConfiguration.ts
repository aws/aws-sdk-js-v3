/**
 * <p>Describes configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.</p>
 */
export interface _MonitoringConfiguration {
  /**
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.</p>
   */
  ConfigurationType: "DEFAULT" | "CUSTOM" | string;

  /**
   * <p>Describes the granularity of the CloudWatch Logs for an application.</p>
   */
  MetricsLevel?: "APPLICATION" | "TASK" | "OPERATOR" | "PARALLELISM" | string;

  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: "INFO" | "WARN" | "ERROR" | "DEBUG" | string;
}

export type _UnmarshalledMonitoringConfiguration = _MonitoringConfiguration;
