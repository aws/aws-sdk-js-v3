import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified scheduler is transitioning.</p>
 */
export interface SchedulerTransitioningException
  extends __ServiceException__<_SchedulerTransitioningExceptionDetails> {
  name: "SchedulerTransitioningException";
}

export interface _SchedulerTransitioningExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
