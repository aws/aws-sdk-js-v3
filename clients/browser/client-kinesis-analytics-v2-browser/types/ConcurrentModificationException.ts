import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
