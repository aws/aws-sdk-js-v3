import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request processing failed because of an unknown error, exception, or failure. You can retry the request.</p>
 */
export interface InternalServiceException
  extends __ServiceException__<_InternalServiceExceptionDetails> {
  name: "InternalServiceException";
}

export interface _InternalServiceExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
