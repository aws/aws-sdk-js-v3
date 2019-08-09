import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 */
export interface CloudHsmServiceException
  extends __ServiceException__<_CloudHsmServiceExceptionDetails> {
  name: "CloudHsmServiceException";
}

export interface _CloudHsmServiceExceptionDetails {
  /**
   * <p>Additional information about the error.</p>
   */
  message?: string;

  /**
   * <p>Indicates if the action can be retried.</p>
   */
  retryable?: boolean;
}
