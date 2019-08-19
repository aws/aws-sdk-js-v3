/**
 * <p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>
 */
export interface _PendingCloudwatchLogsExports {
  /**
   * <p>Log types that are in the process of being deactivated. After they are deactivated, these log types aren't exported to CloudWatch Logs.</p>
   */
  LogTypesToEnable?: Array<string> | Iterable<string>;

  /**
   * <p>Log types that are in the process of being enabled. After they are enabled, these log types are exported to CloudWatch Logs.</p>
   */
  LogTypesToDisable?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPendingCloudwatchLogsExports
  extends _PendingCloudwatchLogsExports {
  /**
   * <p>Log types that are in the process of being deactivated. After they are deactivated, these log types aren't exported to CloudWatch Logs.</p>
   */
  LogTypesToEnable?: Array<string>;

  /**
   * <p>Log types that are in the process of being enabled. After they are enabled, these log types are exported to CloudWatch Logs.</p>
   */
  LogTypesToDisable?: Array<string>;
}
