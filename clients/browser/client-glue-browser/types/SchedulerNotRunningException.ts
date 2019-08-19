import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified scheduler is not running.</p>
 */
export interface SchedulerNotRunningException
  extends __ServiceException__<_SchedulerNotRunningExceptionDetails> {
  name: "SchedulerNotRunningException";
}

export interface _SchedulerNotRunningExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
