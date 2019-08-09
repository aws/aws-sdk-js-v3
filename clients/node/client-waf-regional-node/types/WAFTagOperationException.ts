import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * WAFTagOperationException shape
 */
export interface WAFTagOperationException
  extends __ServiceException__<_WAFTagOperationExceptionDetails> {
  name: "WAFTagOperationException";
}

export interface _WAFTagOperationExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
