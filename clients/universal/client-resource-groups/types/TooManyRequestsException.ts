import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The caller has exceeded throttling limits.</p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
