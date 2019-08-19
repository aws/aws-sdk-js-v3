import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 */
export interface InternalServiceException
  extends __ServiceException__<_InternalServiceExceptionDetails> {
  name: "InternalServiceException";
}

export interface _InternalServiceExceptionDetails {}
