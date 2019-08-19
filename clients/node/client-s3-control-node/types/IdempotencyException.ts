import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface IdempotencyException
  extends __ServiceException__<_IdempotencyExceptionDetails> {
  name: "IdempotencyException";
}

export interface _IdempotencyExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
