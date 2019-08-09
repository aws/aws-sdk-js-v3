import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical. </p>
 */
export interface IdempotentParameterMismatchException
  extends __ServiceException__<_IdempotentParameterMismatchExceptionDetails> {
  name: "IdempotentParameterMismatchException";
}

export interface _IdempotentParameterMismatchExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
