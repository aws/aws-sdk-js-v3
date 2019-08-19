import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service encountered an internal error.</p>
 */
export interface InternalServiceException
  extends __ServiceException__<_InternalServiceExceptionDetails> {
  name: "InternalServiceException";
}

export interface _InternalServiceExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
