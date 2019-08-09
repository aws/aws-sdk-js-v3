import {
  _NotificationConfig,
  _UnmarshalledNotificationConfig
} from "./_NotificationConfig";

/**
 * <p>The parameters for a RUN_COMMAND task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Run Command tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note>
 */
export interface _MaintenanceWindowRunCommandParameters {
  /**
   * <p>Information about the commands to run.</p>
   */
  Comment?: string;

  /**
   * <p>The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes have been deprecated.</p>
   */
  DocumentHash?: string;

  /**
   * <p>SHA-256 or SHA-1. SHA-1 hashes have been deprecated.</p>
   */
  DocumentHashType?: "Sha256" | "Sha1" | string;

  /**
   * <p>Configurations for sending notifications about command status changes on a per-instance basis.</p>
   */
  NotificationConfig?: _NotificationConfig;

  /**
   * <p>The name of the Amazon S3 bucket.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The Amazon S3 bucket subfolder.</p>
   */
  OutputS3KeyPrefix?: string;

  /**
   * <p>The parameters for the RUN_COMMAND task execution.</p>
   */
  Parameters?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The ARN of the IAM service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>If this time is reached and the command has not already started running, it doesn't run.</p>
   */
  TimeoutSeconds?: number;
}

export interface _UnmarshalledMaintenanceWindowRunCommandParameters
  extends _MaintenanceWindowRunCommandParameters {
  /**
   * <p>Configurations for sending notifications about command status changes on a per-instance basis.</p>
   */
  NotificationConfig?: _UnmarshalledNotificationConfig;

  /**
   * <p>The parameters for the RUN_COMMAND task execution.</p>
   */
  Parameters?: { [key: string]: Array<string> };
}
