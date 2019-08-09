import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An entity with the same name already exists.</p>
 */
export interface IdempotencyException
  extends __ServiceException__<_IdempotencyExceptionDetails> {
  name: "IdempotencyException";
}

export interface _IdempotencyExceptionDetails {
  /**
   * <p>Any additional information about the exception.</p>
   */
  message?: string;
}
