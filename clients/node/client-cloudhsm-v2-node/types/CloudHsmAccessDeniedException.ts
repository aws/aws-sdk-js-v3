import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
 */
export interface CloudHsmAccessDeniedException
  extends __ServiceException__<_CloudHsmAccessDeniedExceptionDetails> {
  name: "CloudHsmAccessDeniedException";
}

export interface _CloudHsmAccessDeniedExceptionDetails {
  /**
   * _errorMessage shape
   */
  Message?: string;
}
