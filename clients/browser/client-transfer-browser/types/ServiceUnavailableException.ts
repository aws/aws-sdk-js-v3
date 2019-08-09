import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
 */
export interface ServiceUnavailableException
  extends __ServiceException__<_ServiceUnavailableExceptionDetails> {
  name: "ServiceUnavailableException";
}

export interface _ServiceUnavailableExceptionDetails {
  /**
   * _ServiceErrorMessage shape
   */
  Message?: string;
}
