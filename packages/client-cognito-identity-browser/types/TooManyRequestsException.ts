import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Thrown when a request is throttled.</p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * <p>Message returned by a TooManyRequestsException</p>
   */
  message?: string;
}
