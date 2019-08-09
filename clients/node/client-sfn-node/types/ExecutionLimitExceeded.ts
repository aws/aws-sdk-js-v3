import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of running executions has been reached. Running executions must end or be stopped before a new execution can be started.</p>
 */
export interface ExecutionLimitExceeded
  extends __ServiceException__<_ExecutionLimitExceededDetails> {
  name: "ExecutionLimitExceeded";
}

export interface _ExecutionLimitExceededDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
