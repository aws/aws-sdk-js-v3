import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Specified application can't be found.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
