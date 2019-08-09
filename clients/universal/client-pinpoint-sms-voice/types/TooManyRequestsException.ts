import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * You've issued too many requests to the resource. Wait a few minutes, and then try again.
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
