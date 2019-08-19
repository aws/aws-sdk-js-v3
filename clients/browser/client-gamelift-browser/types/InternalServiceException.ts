import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.</p>
 */
export interface InternalServiceException
  extends __ServiceException__<_InternalServiceExceptionDetails> {
  name: "InternalServiceException";
}

export interface _InternalServiceExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}
