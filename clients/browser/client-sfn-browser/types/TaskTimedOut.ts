import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * TaskTimedOut shape
 */
export interface TaskTimedOut
  extends __ServiceException__<_TaskTimedOutDetails> {
  name: "TaskTimedOut";
}

export interface _TaskTimedOutDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
