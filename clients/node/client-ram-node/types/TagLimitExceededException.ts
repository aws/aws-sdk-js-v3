import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested tags exceed the limit for your account.</p>
 */
export interface TagLimitExceededException
  extends __ServiceException__<_TagLimitExceededExceptionDetails> {
  name: "TagLimitExceededException";
}

export interface _TagLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
