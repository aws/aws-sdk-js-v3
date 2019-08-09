/**
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p>
 */
export interface _CloudwatchLogsExportConfiguration {
  /**
   * <p>The list of log types to enable.</p>
   */
  EnableLogTypes?: Array<string> | Iterable<string>;

  /**
   * <p>The list of log types to disable.</p>
   */
  DisableLogTypes?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCloudwatchLogsExportConfiguration
  extends _CloudwatchLogsExportConfiguration {
  /**
   * <p>The list of log types to enable.</p>
   */
  EnableLogTypes?: Array<string>;

  /**
   * <p>The list of log types to disable.</p>
   */
  DisableLogTypes?: Array<string>;
}
