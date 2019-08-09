import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We encountered an unknown error. Try again in a few minutes.</p>
 */
export interface InternalServiceErrorException
  extends __ServiceException__<_InternalServiceErrorExceptionDetails> {
  name: "InternalServiceErrorException";
}

export interface _InternalServiceErrorExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
