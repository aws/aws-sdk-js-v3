import { _UnmarshalledValidationError } from "./_ValidationError";
import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Placeholder documentation for UnprocessableEntityException
 */
export interface UnprocessableEntityException
  extends __ServiceException__<_UnprocessableEntityExceptionDetails> {
  name: "UnprocessableEntityException";
}

export interface _UnprocessableEntityExceptionDetails {
  /**
   * Placeholder documentation for __string
   */
  Message?: string;

  /**
   * A collection of validation error responses.
   */
  ValidationErrors?: Array<_UnmarshalledValidationError>;
}
