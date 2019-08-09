import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
 */
export interface WAFStaleDataException
  extends __ServiceException__<_WAFStaleDataExceptionDetails> {
  name: "WAFStaleDataException";
}

export interface _WAFStaleDataExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
