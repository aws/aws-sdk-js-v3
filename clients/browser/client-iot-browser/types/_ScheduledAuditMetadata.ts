/**
 * <p>Information about the scheduled audit.</p>
 */
export interface _ScheduledAuditMetadata {
  /**
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;

  /**
   * <p>How often the scheduled audit occurs.</p>
   */
  frequency?: "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | string;

  /**
   * <p>The day of the month on which the scheduled audit is run (if the <code>frequency</code> is "MONTHLY"). If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit is run (if the <code>frequency</code> is "WEEKLY" or "BIWEEKLY").</p>
   */
  dayOfWeek?: "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | string;
}

export type _UnmarshalledScheduledAuditMetadata = _ScheduledAuditMetadata;
