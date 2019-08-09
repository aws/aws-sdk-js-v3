import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The target of the operation is currently being modified by a different request. Try again later.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
