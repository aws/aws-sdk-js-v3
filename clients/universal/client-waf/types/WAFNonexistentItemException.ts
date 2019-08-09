import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation failed because the referenced object doesn't exist.</p>
 */
export interface WAFNonexistentItemException
  extends __ServiceException__<_WAFNonexistentItemExceptionDetails> {
  name: "WAFNonexistentItemException";
}

export interface _WAFNonexistentItemExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
