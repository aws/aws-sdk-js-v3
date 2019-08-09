import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeScheduledAuditOutput shape
 */
export interface DescribeScheduledAuditOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>How often the scheduled audit takes place. One of "DAILY", "WEEKLY", "BIWEEKLY", or "MONTHLY". The start time of each audit is determined by the system.</p>
   */
  frequency?: "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | string;

  /**
   * <p>The day of the month on which the scheduled audit takes place. Will be "1" through "31" or "LAST". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place. One of "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT".</p>
   */
  dayOfWeek?: "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | string;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)</p>
   */
  targetCheckNames?: Array<string>;

  /**
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
