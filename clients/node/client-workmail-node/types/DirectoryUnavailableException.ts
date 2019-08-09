import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The directory on which you are trying to perform operations isn't available.</p>
 */
export interface DirectoryUnavailableException
  extends __ServiceException__<_DirectoryUnavailableExceptionDetails> {
  name: "DirectoryUnavailableException";
}

export interface _DirectoryUnavailableExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
