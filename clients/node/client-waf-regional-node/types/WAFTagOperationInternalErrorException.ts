import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * WAFTagOperationInternalErrorException shape
 */
export interface WAFTagOperationInternalErrorException
  extends __ServiceException__<_WAFTagOperationInternalErrorExceptionDetails> {
  name: "WAFTagOperationInternalErrorException";
}

export interface _WAFTagOperationInternalErrorExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
