import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
 */
export interface ServiceUnavailableException
  extends __ServiceException__<_ServiceUnavailableExceptionDetails> {
  name: "ServiceUnavailableException";
}

export interface _ServiceUnavailableExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
