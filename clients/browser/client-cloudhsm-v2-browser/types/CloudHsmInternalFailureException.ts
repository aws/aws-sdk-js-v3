import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
 */
export interface CloudHsmInternalFailureException
  extends __ServiceException__<_CloudHsmInternalFailureExceptionDetails> {
  name: "CloudHsmInternalFailureException";
}

export interface _CloudHsmInternalFailureExceptionDetails {
  /**
   * _errorMessage shape
   */
  Message?: string;
}
