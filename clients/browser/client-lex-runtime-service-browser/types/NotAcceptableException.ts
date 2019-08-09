import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The accept header in the request does not have a valid value.</p>
 */
export interface NotAcceptableException
  extends __ServiceException__<_NotAcceptableExceptionDetails> {
  name: "NotAcceptableException";
}

export interface _NotAcceptableExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
