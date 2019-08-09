import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A previous update to your private CA is still ongoing.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
