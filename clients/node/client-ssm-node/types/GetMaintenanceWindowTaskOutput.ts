import { _UnmarshalledTarget } from "./_Target";
import { _UnmarshalledMaintenanceWindowTaskParameterValueExpression } from "./_MaintenanceWindowTaskParameterValueExpression";
import { _UnmarshalledMaintenanceWindowTaskInvocationParameters } from "./_MaintenanceWindowTaskInvocationParameters";
import { _UnmarshalledLoggingInfo } from "./_LoggingInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMaintenanceWindowTaskOutput shape
 */
export interface GetMaintenanceWindowTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The retrieved maintenance window ID.</p>
   */
  WindowId?: string;

  /**
   * <p>The retrieved maintenance window task ID.</p>
   */
  WindowTaskId?: string;

  /**
   * <p>The targets where the task should run.</p>
   */
  Targets?: Array<_UnmarshalledTarget>;

  /**
   * <p>The resource that the task used during execution. For RUN_COMMAND and AUTOMATION task types, the TaskArn is the Systems Manager Document name/ARN. For LAMBDA tasks, the value is the function name/ARN. For STEP_FUNCTIONS tasks, the value is the state machine ARN.</p>
   */
  TaskArn?: string;

  /**
   * <p>The ARN of the IAM service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The type of task to run.</p>
   */
  TaskType?:
    | "RUN_COMMAND"
    | "AUTOMATION"
    | "STEP_FUNCTIONS"
    | "LAMBDA"
    | string;

  /**
   * <p>The parameters to pass to the task when it runs.</p> <note> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
   */
  TaskParameters?: {
    [key: string]: _UnmarshalledMaintenanceWindowTaskParameterValueExpression;
  };

  /**
   * <p>The parameters to pass to the task when it runs.</p>
   */
  TaskInvocationParameters?: _UnmarshalledMaintenanceWindowTaskInvocationParameters;

  /**
   * <p>The priority of the task when it runs. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.</p>
   */
  Priority?: number;

  /**
   * <p>The maximum number of targets allowed to run this task in parallel.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before the task stops being scheduled.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The location in Amazon S3 where the task results are logged.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
   */
  LoggingInfo?: _UnmarshalledLoggingInfo;

  /**
   * <p>The retrieved task name.</p>
   */
  Name?: string;

  /**
   * <p>The retrieved task description.</p>
   */
  Description?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
