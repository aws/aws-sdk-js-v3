import { _UnmarshalledTaskStatistics } from "./_TaskStatistics";
import { _UnmarshalledAuditCheckDetails } from "./_AuditCheckDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAuditTaskOutput shape
 */
export interface DescribeAuditTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the audit: one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".</p>
   */
  taskStatus?: "IN_PROGRESS" | "COMPLETED" | "FAILED" | "CANCELED" | string;

  /**
   * <p>The type of audit: "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".</p>
   */
  taskType?: "ON_DEMAND_AUDIT_TASK" | "SCHEDULED_AUDIT_TASK" | string;

  /**
   * <p>The time the audit started.</p>
   */
  taskStartTime?: Date;

  /**
   * <p>Statistical information about the audit.</p>
   */
  taskStatistics?: _UnmarshalledTaskStatistics;

  /**
   * <p>The name of the scheduled audit (only if the audit was a scheduled audit).</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>Detailed information about each check performed during this audit.</p>
   */
  auditDetails?: { [key: string]: _UnmarshalledAuditCheckDetails };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
