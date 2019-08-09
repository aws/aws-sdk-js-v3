/**
 * <p>Information about the targets to which audit notifications are sent.</p>
 */
export interface _AuditNotificationTarget {
  /**
   * <p>The ARN of the target (SNS topic) to which audit notifications are sent.</p>
   */
  targetArn?: string;

  /**
   * <p>The ARN of the role that grants permission to send notifications to the target.</p>
   */
  roleArn?: string;

  /**
   * <p>True if notifications to the target are enabled.</p>
   */
  enabled?: boolean;
}

export type _UnmarshalledAuditNotificationTarget = _AuditNotificationTarget;
