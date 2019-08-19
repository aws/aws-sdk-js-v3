import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is a concurrent modification of resources.</p>
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
