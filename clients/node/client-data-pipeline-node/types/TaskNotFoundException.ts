import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified task was not found. </p>
 */
export interface TaskNotFoundException
  extends __ServiceException__<_TaskNotFoundExceptionDetails> {
  name: "TaskNotFoundException";
}

export interface _TaskNotFoundExceptionDetails {
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}
