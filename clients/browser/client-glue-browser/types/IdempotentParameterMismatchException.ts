import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The same unique identifier was associated with two different records.</p>
 */
export interface IdempotentParameterMismatchException
  extends __ServiceException__<_IdempotentParameterMismatchExceptionDetails> {
  name: "IdempotentParameterMismatchException";
}

export interface _IdempotentParameterMismatchExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
