import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified scheduler is already running.</p>
 */
export interface SchedulerRunningException
  extends __ServiceException__<_SchedulerRunningExceptionDetails> {
  name: "SchedulerRunningException";
}

export interface _SchedulerRunningExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
