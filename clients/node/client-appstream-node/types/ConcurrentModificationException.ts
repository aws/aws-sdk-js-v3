import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An API error occurred. Wait a few minutes and try again.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}
