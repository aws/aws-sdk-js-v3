import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * The client has exceeded their resource or throttling limits.
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
