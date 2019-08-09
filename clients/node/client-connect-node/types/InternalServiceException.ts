import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Request processing failed due to an error or failure with the service.</p>
 */
export interface InternalServiceException
  extends __ServiceException__<_InternalServiceExceptionDetails> {
  name: "InternalServiceException";
}

export interface _InternalServiceExceptionDetails {
  /**
   * <p>The message.</p>
   */
  Message?: string;
}
