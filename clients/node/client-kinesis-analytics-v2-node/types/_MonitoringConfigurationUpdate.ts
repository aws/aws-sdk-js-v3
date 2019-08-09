/**
 * <p>Describes updates to configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application.</p>
 */
export interface _MonitoringConfigurationUpdate {
  /**
   * <p>Describes updates to whether to use the default CloudWatch logging configuration for an application.</p>
   */
  ConfigurationTypeUpdate?: "DEFAULT" | "CUSTOM" | string;

  /**
   * <p>Describes updates to the granularity of the CloudWatch Logs for an application.</p>
   */
  MetricsLevelUpdate?:
    | "APPLICATION"
    | "TASK"
    | "OPERATOR"
    | "PARALLELISM"
    | string;

  /**
   * <p>Describes updates to the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevelUpdate?: "INFO" | "WARN" | "ERROR" | "DEBUG" | string;
}

export type _UnmarshalledMonitoringConfigurationUpdate = _MonitoringConfigurationUpdate;
