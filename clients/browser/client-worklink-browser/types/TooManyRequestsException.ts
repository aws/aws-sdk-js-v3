import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of requests exceeds the limit.</p>
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
