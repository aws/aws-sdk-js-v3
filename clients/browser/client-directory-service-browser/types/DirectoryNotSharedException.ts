import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified directory has not been shared with this AWS account.</p>
 */
export interface DirectoryNotSharedException
  extends __ServiceException__<_DirectoryNotSharedExceptionDetails> {
  name: "DirectoryNotSharedException";
}

export interface _DirectoryNotSharedExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
