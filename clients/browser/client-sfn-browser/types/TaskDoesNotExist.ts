import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * TaskDoesNotExist shape
 */
export interface TaskDoesNotExist
  extends __ServiceException__<_TaskDoesNotExistDetails> {
  name: "TaskDoesNotExist";
}

export interface _TaskDoesNotExistDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
