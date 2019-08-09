import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Thrown if the request is throttled.
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * Message returned by a TooManyRequestsException.
   */
  message: string;
}
