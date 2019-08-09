import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified directory is unavailable or could not be found.</p>
 */
export interface DirectoryUnavailableException
  extends __ServiceException__<_DirectoryUnavailableExceptionDetails> {
  name: "DirectoryUnavailableException";
}

export interface _DirectoryUnavailableExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
