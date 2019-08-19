import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>DynamoDB rejected the request because you retried a request with a different payload but with an idempotent token that was already used.</p>
 */
export interface IdempotentParameterMismatchException
  extends __ServiceException__<_IdempotentParameterMismatchExceptionDetails> {
  name: "IdempotentParameterMismatchException";
}

export interface _IdempotentParameterMismatchExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
