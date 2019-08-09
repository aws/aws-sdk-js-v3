import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of recognizers per account has been exceeded. Review the recognizers, perform cleanup, and then try your request again.</p>
 */
export interface ResourceLimitExceededException
  extends __ServiceException__<_ResourceLimitExceededExceptionDetails> {
  name: "ResourceLimitExceededException";
}

export interface _ResourceLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
