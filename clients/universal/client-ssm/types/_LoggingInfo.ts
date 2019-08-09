/**
 * <p>Information about an Amazon S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
 */
export interface _LoggingInfo {
  /**
   * <p>The name of an Amazon S3 bucket where execution logs are stored .</p>
   */
  S3BucketName: string;

  /**
   * <p>(Optional) The Amazon S3 bucket subfolder. </p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The region where the Amazon S3 bucket is located.</p>
   */
  S3Region: string;
}

export type _UnmarshalledLoggingInfo = _LoggingInfo;
