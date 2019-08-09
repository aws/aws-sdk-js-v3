import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified directory has already been shared with this AWS account.</p>
 */
export interface DirectoryAlreadySharedException
  extends __ServiceException__<_DirectoryAlreadySharedExceptionDetails> {
  name: "DirectoryAlreadySharedException";
}

export interface _DirectoryAlreadySharedExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
