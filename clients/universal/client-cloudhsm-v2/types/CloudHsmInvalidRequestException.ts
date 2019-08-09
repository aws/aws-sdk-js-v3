import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because it is not a valid request.</p>
 */
export interface CloudHsmInvalidRequestException
  extends __ServiceException__<_CloudHsmInvalidRequestExceptionDetails> {
  name: "CloudHsmInvalidRequestException";
}

export interface _CloudHsmInvalidRequestExceptionDetails {
  /**
   * _errorMessage shape
   */
  Message?: string;
}
