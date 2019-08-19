import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal error occurred.</p>
 */
export interface InternalServiceErrorException
  extends __ServiceException__<_InternalServiceErrorExceptionDetails> {
  name: "InternalServiceErrorException";
}

export interface _InternalServiceErrorExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
