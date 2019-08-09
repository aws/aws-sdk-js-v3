import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find the resource that you asked for.</p>
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
