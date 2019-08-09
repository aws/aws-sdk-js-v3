import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource hierarchy is changing.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
