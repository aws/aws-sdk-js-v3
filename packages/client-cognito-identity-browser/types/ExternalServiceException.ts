import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An exception thrown when a dependent service such as Facebook or Twitter is not responding</p>
 */
export interface ExternalServiceException
  extends __ServiceException__<_ExternalServiceExceptionDetails> {
  name: "ExternalServiceException";
}

export interface _ExternalServiceExceptionDetails {
  /**
   * <p>The message returned by an ExternalServiceException</p>
   */
  message?: string;
}
