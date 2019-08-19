import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Placeholder documentation for TooManyRequestsException
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}
