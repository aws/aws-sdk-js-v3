import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 */
export interface OperationInProgressException
  extends __ServiceException__<_OperationInProgressExceptionDetails> {
  name: "OperationInProgressException";
}

export interface _OperationInProgressExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
