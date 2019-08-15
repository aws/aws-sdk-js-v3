import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.</p>
 */
export interface TaskAlreadyExistsException
  extends __ServiceException__<_TaskAlreadyExistsExceptionDetails> {
  name: "TaskAlreadyExistsException";
}

export interface _TaskAlreadyExistsExceptionDetails {
  /**
   * __errorMessage shape
   */
  message?: string;
}
