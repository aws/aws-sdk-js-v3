import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A client token input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation.</p>
 */
export interface IdempotentParameterMismatchException
  extends __ServiceException__<_IdempotentParameterMismatchExceptionDetails> {
  name: "IdempotentParameterMismatchException";
}

export interface _IdempotentParameterMismatchExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
