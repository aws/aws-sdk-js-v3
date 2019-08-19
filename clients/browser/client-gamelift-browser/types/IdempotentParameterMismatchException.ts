import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A game session with this custom ID string already exists in this fleet. Resolve this conflict before retrying this request.</p>
 */
export interface IdempotentParameterMismatchException
  extends __ServiceException__<_IdempotentParameterMismatchExceptionDetails> {
  name: "IdempotentParameterMismatchException";
}

export interface _IdempotentParameterMismatchExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}
