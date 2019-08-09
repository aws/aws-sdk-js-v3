import { _Target } from "./_Target";
import { _MaintenanceWindowTaskParameterValueExpression } from "./_MaintenanceWindowTaskParameterValueExpression";
import { _MaintenanceWindowTaskInvocationParameters } from "./_MaintenanceWindowTaskInvocationParameters";
import { _LoggingInfo } from "./_LoggingInfo";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterTaskWithMaintenanceWindowInput shape
 */
export interface RegisterTaskWithMaintenanceWindowInput {
  /**
   * <p>The ID of the maintenance window the task should be added to.</p>
   */
  WindowId: string;

  /**
   * <p>The targets (either instances or maintenance window targets).</p> <p>Specify instances using the following format: </p> <p> <code>Key=InstanceIds,Values=&lt;instance-id-1&gt;,&lt;instance-id-2&gt;</code> </p> <p>Specify maintenance window targets using the following format:</p> <p> <code>Key=WindowTargetIds;,Values=&lt;window-target-id-1&gt;,&lt;window-target-id-2&gt;</code> </p>
   */
  Targets: Array<_Target> | Iterable<_Target>;

  /**
   * <p>The ARN of the task to run.</p>
   */
  TaskArn: string;

  /**
   * <p>The ARN of the IAM service role for Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses your account's service-linked role. If no service-linked role for Systems Manager exists in your account, it is created when you run <code>RegisterTaskWithMaintenanceWindow</code>.</p> <p>For more information, see the following topics in the in the <i>AWS Systems Manager User Guide</i>:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/using-service-linked-roles.html#slr-permissions">Service-Linked Role Permissions for Systems Manager</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html#maintenance-window-tasks-service-role">Should I Use a Service-Linked Role or a Custom Service Role to Run Maintenance Window Tasks? </a> </p> </li> </ul>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The type of task being registered.</p>
   */
  TaskType: "RUN_COMMAND" | "AUTOMATION" | "STEP_FUNCTIONS" | "LAMBDA" | string;

  /**
   * <p>The parameters that should be passed to the task when it is run.</p> <note> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
   */
  TaskParameters?:
    | { [key: string]: _MaintenanceWindowTaskParameterValueExpression }
    | Iterable<[string, _MaintenanceWindowTaskParameterValueExpression]>;

  /**
   * <p>The parameters that the task should use during execution. Populate only the fields that match the task type. All other fields should be empty. </p>
   */
  TaskInvocationParameters?: _MaintenanceWindowTaskInvocationParameters;

  /**
   * <p>The priority of the task in the maintenance window, the lower the number the higher the priority. Tasks in a maintenance window are scheduled in priority order with tasks that have the same priority scheduled in parallel.</p>
   */
  Priority?: number;

  /**
   * <p>The maximum number of targets this task can be run for in parallel.</p>
   */
  MaxConcurrency: string;

  /**
   * <p>The maximum number of errors allowed before this task stops being scheduled.</p>
   */
  MaxErrors: string;

  /**
   * <p>A structure containing information about an Amazon S3 bucket to write instance-level logs to. </p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
   */
  LoggingInfo?: _LoggingInfo;

  /**
   * <p>An optional name for the task.</p>
   */
  Name?: string;

  /**
   * <p>An optional description for the task.</p>
   */
  Description?: string;

  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
