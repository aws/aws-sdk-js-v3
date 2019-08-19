import { _UnmarshalledMaintenanceWindowTaskParameterValueExpression } from "./_MaintenanceWindowTaskParameterValueExpression";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMaintenanceWindowExecutionTaskOutput shape
 */
export interface GetMaintenanceWindowExecutionTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The ID of the specific task execution in the maintenance window task that was retrieved.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>The ARN of the task that ran.</p>
   */
  TaskArn?: string;

  /**
   * <p>The role that was assumed when running the task.</p>
   */
  ServiceRole?: string;

  /**
   * <p>The type of task that was run.</p>
   */
  Type?: "RUN_COMMAND" | "AUTOMATION" | "STEP_FUNCTIONS" | "LAMBDA" | string;

  /**
   * <p>The parameters passed to the task when it was run.</p> <note> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> <p>The map has the following format:</p> <p>Key: string, between 1 and 255 characters</p> <p>Value: an array of strings, each string is between 1 and 255 characters</p>
   */
  TaskParameters?: Array<{
    [key: string]: _UnmarshalledMaintenanceWindowTaskParameterValueExpression;
  }>;

  /**
   * <p>The priority of the task.</p>
   */
  Priority?: number;

  /**
   * <p>The defined maximum number of task executions that could be run in parallel.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The defined maximum number of task execution errors allowed before scheduling of the task execution would have been stopped.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The status of the task.</p>
   */
  Status?:
    | "PENDING"
    | "IN_PROGRESS"
    | "SUCCESS"
    | "FAILED"
    | "TIMED_OUT"
    | "CANCELLING"
    | "CANCELLED"
    | "SKIPPED_OVERLAPPING"
    | string;

  /**
   * <p>The details explaining the Status. Only available for certain status values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The time the task execution started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the task execution completed.</p>
   */
  EndTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
