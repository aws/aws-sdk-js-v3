/**
 * <p>The audits that were performed.</p>
 */
export interface _AuditTaskMetadata {
  /**
   * <p>The ID of this audit.</p>
   */
  taskId?: string;

  /**
   * <p>The status of this audit. One of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".</p>
   */
  taskStatus?: "IN_PROGRESS" | "COMPLETED" | "FAILED" | "CANCELED" | string;

  /**
   * <p>The type of this audit. One of "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".</p>
   */
  taskType?: "ON_DEMAND_AUDIT_TASK" | "SCHEDULED_AUDIT_TASK" | string;
}

export type _UnmarshalledAuditTaskMetadata = _AuditTaskMetadata;
