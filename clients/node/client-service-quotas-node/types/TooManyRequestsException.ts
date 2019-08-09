import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
