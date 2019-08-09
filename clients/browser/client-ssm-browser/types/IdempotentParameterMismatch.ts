import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Error returned when an idempotent operation is retried and the parameters don't match the original call to the API with the same idempotency token. </p>
 */
export interface IdempotentParameterMismatch
  extends __ServiceException__<_IdempotentParameterMismatchDetails> {
  name: "IdempotentParameterMismatch";
}

export interface _IdempotentParameterMismatchDetails {
  /**
   * _String shape
   */
  Message?: string;
}
