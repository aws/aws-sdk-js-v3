import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Exception thrown when an operation fails due to non-existent resource. </p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _Code shape
   */
  code: string;

  /**
   * _ErrorMessage shape
   */
  message: string;
}
