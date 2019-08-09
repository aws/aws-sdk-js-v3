import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because an error occurred.</p>
 */
export interface CloudHsmServiceException
  extends __ServiceException__<_CloudHsmServiceExceptionDetails> {
  name: "CloudHsmServiceException";
}

export interface _CloudHsmServiceExceptionDetails {
  /**
   * _errorMessage shape
   */
  Message?: string;
}
