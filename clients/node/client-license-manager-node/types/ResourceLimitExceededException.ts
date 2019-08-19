import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your resource limits have been exceeded.</p>
 */
export interface ResourceLimitExceededException
  extends __ServiceException__<_ResourceLimitExceededExceptionDetails> {
  name: "ResourceLimitExceededException";
}

export interface _ResourceLimitExceededExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
