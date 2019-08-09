/**
 * <p>Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>.</p>
 */
export interface _AuditMitigationActionsTaskMetadata {
  /**
   * <p>The unique identifier for the task.</p>
   */
  taskId?: string;

  /**
   * <p>The time at which the audit mitigation actions task was started.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>The current state of the audit mitigation actions task.</p>
   */
  taskStatus?: "IN_PROGRESS" | "COMPLETED" | "FAILED" | "CANCELED" | string;
}

export interface _UnmarshalledAuditMitigationActionsTaskMetadata
  extends _AuditMitigationActionsTaskMetadata {
  /**
   * <p>The time at which the audit mitigation actions task was started.</p>
   */
  startTime?: Date;
}
