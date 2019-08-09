import { _Target, _UnmarshalledTarget } from "./_Target";
import {
  _MaintenanceWindowTaskParameterValueExpression,
  _UnmarshalledMaintenanceWindowTaskParameterValueExpression
} from "./_MaintenanceWindowTaskParameterValueExpression";
import { _LoggingInfo, _UnmarshalledLoggingInfo } from "./_LoggingInfo";

/**
 * <p>Information about a task defined for a maintenance window.</p>
 */
export interface _MaintenanceWindowTask {
  /**
   * <p>The ID of the maintenance window where the task is registered.</p>
   */
  WindowId?: string;

  /**
   * <p>The task ID.</p>
   */
  WindowTaskId?: string;

  /**
   * <p>The resource that the task uses during execution. For RUN_COMMAND and AUTOMATION task types, <code>TaskArn</code> is the Systems Manager document name or ARN. For LAMBDA tasks, it's the function name or ARN. For STEP_FUNCTIONS tasks, it's the state machine ARN.</p>
   */
  TaskArn?: string;

  /**
   * <p>The type of task. The type can be one of the following: RUN_COMMAND, AUTOMATION, LAMBDA, or STEP_FUNCTIONS.</p>
   */
  Type?: "RUN_COMMAND" | "AUTOMATION" | "STEP_FUNCTIONS" | "LAMBDA" | string;

  /**
   * <p>The targets (either instances or tags). Instances are specified using Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;. Tags are specified using Key=&lt;tag name&gt;,Values=&lt;tag value&gt;.</p>
   */
  Targets?: Array<_Target> | Iterable<_Target>;

  /**
   * <p>The parameters that should be passed to the task when it is run.</p> <note> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
   */
  TaskParameters?:
    | { [key: string]: _MaintenanceWindowTaskParameterValueExpression }
    | Iterable<[string, _MaintenanceWindowTaskParameterValueExpression]>;

  /**
   * <p>The priority of the task in the maintenance window. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.</p>
   */
  Priority?: number;

  /**
   * <p>Information about an Amazon S3 bucket to write task-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
   */
  LoggingInfo?: _LoggingInfo;

  /**
   * <p>The ARN of the IAM service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The maximum number of targets this task can be run for, in parallel.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before this task stops being scheduled.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The task name.</p>
   */
  Name?: string;

  /**
   * <p>A description of the task.</p>
   */
  Description?: string;
}

export interface _UnmarshalledMaintenanceWindowTask
  extends _MaintenanceWindowTask {
  /**
   * <p>The targets (either instances or tags). Instances are specified using Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;. Tags are specified using Key=&lt;tag name&gt;,Values=&lt;tag value&gt;.</p>
   */
  Targets?: Array<_UnmarshalledTarget>;

  /**
   * <p>The parameters that should be passed to the task when it is run.</p> <note> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
   */
  TaskParameters?: {
    [key: string]: _UnmarshalledMaintenanceWindowTaskParameterValueExpression;
  };

  /**
   * <p>Information about an Amazon S3 bucket to write task-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
   */
  LoggingInfo?: _UnmarshalledLoggingInfo;
}
