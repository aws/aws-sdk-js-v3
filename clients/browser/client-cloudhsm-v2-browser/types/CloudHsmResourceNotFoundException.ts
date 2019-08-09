import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because it refers to a resource that cannot be found.</p>
 */
export interface CloudHsmResourceNotFoundException
  extends __ServiceException__<_CloudHsmResourceNotFoundExceptionDetails> {
  name: "CloudHsmResourceNotFoundException";
}

export interface _CloudHsmResourceNotFoundExceptionDetails {
  /**
   * _errorMessage shape
   */
  Message?: string;
}
