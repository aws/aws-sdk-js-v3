import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of directories in the region has been reached. You can use the <a>GetDirectoryLimits</a> operation to determine your directory limits in the region.</p>
 */
export interface DirectoryLimitExceededException
  extends __ServiceException__<_DirectoryLimitExceededExceptionDetails> {
  name: "DirectoryLimitExceededException";
}

export interface _DirectoryLimitExceededExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
