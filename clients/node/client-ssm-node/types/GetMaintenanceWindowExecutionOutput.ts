import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMaintenanceWindowExecutionOutput shape
 */
export interface GetMaintenanceWindowExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the maintenance window execution.</p>
   */
  WindowExecutionId?: string;

  /**
   * <p>The ID of the task executions from the maintenance window execution.</p>
   */
  TaskIds?: Array<string>;

  /**
   * <p>The status of the maintenance window execution.</p>
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
   * <p>The time the maintenance window started running.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the maintenance window finished running.</p>
   */
  EndTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
