import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource does not exist in the customer account.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _ErrorMsg shape
   */
  Message?: string;
}
