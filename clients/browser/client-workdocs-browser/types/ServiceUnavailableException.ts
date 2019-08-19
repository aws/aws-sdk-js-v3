import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more of the dependencies is unavailable.</p>
 */
export interface ServiceUnavailableException
  extends __ServiceException__<_ServiceUnavailableExceptionDetails> {
  name: "ServiceUnavailableException";
}

export interface _ServiceUnavailableExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
