import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified execution does not exist.</p>
 */
export interface ExecutionDoesNotExist
  extends __ServiceException__<_ExecutionDoesNotExistDetails> {
  name: "ExecutionDoesNotExist";
}

export interface _ExecutionDoesNotExistDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
