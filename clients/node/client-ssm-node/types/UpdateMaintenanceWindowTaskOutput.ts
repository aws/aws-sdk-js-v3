import { _UnmarshalledTarget } from "./_Target";
import { _UnmarshalledMaintenanceWindowTaskParameterValueExpression } from "./_MaintenanceWindowTaskParameterValueExpression";
import { _UnmarshalledMaintenanceWindowTaskInvocationParameters } from "./_MaintenanceWindowTaskInvocationParameters";
import { _UnmarshalledLoggingInfo } from "./_LoggingInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateMaintenanceWindowTaskOutput shape
 */
export interface UpdateMaintenanceWindowTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the maintenance window that was updated.</p>
   */
  WindowId?: string;

  /**
   * <p>The task ID of the maintenance window that was updated.</p>
   */
  WindowTaskId?: string;

  /**
   * <p>The updated target values.</p>
   */
  Targets?: Array<_UnmarshalledTarget>;

  /**
   * <p>The updated task ARN value.</p>
   */
  TaskArn?: string;

  /**
   * <p>The ARN of the IAM service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The updated parameter values.</p> <note> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
   */
  TaskParameters?: {
    [key: string]: _UnmarshalledMaintenanceWindowTaskParameterValueExpression;
  };

  /**
   * <p>The updated parameter values.</p>
   */
  TaskInvocationParameters?: _UnmarshalledMaintenanceWindowTaskInvocationParameters;

  /**
   * <p>The updated priority value.</p>
   */
  Priority?: number;

  /**
   * <p>The updated MaxConcurrency value.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The updated MaxErrors value.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The updated logging information in Amazon S3.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
   */
  LoggingInfo?: _UnmarshalledLoggingInfo;

  /**
   * <p>The updated task name.</p>
   */
  Name?: string;

  /**
   * <p>The updated task description.</p>
   */
  Description?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
