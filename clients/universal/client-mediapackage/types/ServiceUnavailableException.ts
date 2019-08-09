import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * An unexpected error occurred.
 */
export interface ServiceUnavailableException
  extends __ServiceException__<_ServiceUnavailableExceptionDetails> {
  name: "ServiceUnavailableException";
}

export interface _ServiceUnavailableExceptionDetails {
  /**
   * ___string shape
   */
  Message?: string;
}
