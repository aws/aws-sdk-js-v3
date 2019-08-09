import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
 */
export interface DirectoryServiceAuthenticationFailedException
  extends __ServiceException__<
    _DirectoryServiceAuthenticationFailedExceptionDetails
  > {
  name: "DirectoryServiceAuthenticationFailedException";
}

export interface _DirectoryServiceAuthenticationFailedExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
