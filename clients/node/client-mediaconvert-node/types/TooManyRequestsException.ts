import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * ___string shape
   */
  Message?: string;
}
