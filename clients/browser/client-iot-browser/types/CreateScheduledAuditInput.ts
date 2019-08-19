import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateScheduledAuditInput shape
 */
export interface CreateScheduledAuditInput {
  /**
   * <p>How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY", "BIWEEKLY" or "MONTHLY". The start time of each audit is determined by the system.</p>
   */
  frequency: "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | string;

  /**
   * <p>The day of the month on which the scheduled audit takes place. Can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to "MONTHLY". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place. Can be one of "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the "frequency" parameter is set to "WEEKLY" or "BIWEEKLY".</p>
   */
  dayOfWeek?: "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | string;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)</p>
   */
  targetCheckNames: Array<string> | Iterable<string>;

  /**
   * <p>The name you want to give to the scheduled audit. (Max. 128 chars)</p>
   */
  scheduledAuditName: string;

  /**
   * <p>Metadata that can be used to manage the scheduled audit.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
