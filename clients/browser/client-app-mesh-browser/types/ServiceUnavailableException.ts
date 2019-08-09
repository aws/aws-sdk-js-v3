import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request has failed due to a temporary failure of the service.</p>
 */
export interface ServiceUnavailableException
  extends __ServiceException__<_ServiceUnavailableExceptionDetails> {
  name: "ServiceUnavailableException";
}

export interface _ServiceUnavailableExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
