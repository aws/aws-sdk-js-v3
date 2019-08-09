import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Unable to modify the tag due to a simultaneous update request.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}
