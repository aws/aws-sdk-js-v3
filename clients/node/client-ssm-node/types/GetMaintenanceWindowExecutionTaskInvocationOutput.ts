import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMaintenanceWindowExecutionTaskInvocationOutput shape
 */
export interface GetMaintenanceWindowExecutionTaskInvocationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The maintenance window execution ID.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The task execution ID.</p>
   */
  TaskExecutionId?: string;

  /**
   * <p>The invocation ID.</p>
   */
  InvocationId?: string;

  /**
   * <p>The execution ID.</p>
   */
  ExecutionId?: string;

  /**
   * <p>Retrieves the task type for a maintenance window. Task types include the following: LAMBDA, STEP_FUNCTIONS, AUTOMATION, RUN_COMMAND.</p>
   */
  TaskType?:
    | "RUN_COMMAND"
    | "AUTOMATION"
    | "STEP_FUNCTIONS"
    | "LAMBDA"
    | string;

  /**
   * <p>The parameters used at the time that the task ran.</p>
   */
  Parameters?: string;

  /**
   * <p>The task status for an invocation.</p>
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
   * <p>The details explaining the status. Details are only available for certain status values.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The time that the task started running on the target.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time that the task finished running on the target.</p>
   */
  EndTime?: Date;

  /**
   * <p>User-provided value to be included in any CloudWatch events raised while running tasks for these targets in this maintenance window. </p>
   */
  OwnerInformation?: string;

  /**
   * <p>The maintenance window target ID.</p>
   */
  WindowTargetId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
