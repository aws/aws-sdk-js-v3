import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Can't add more than 50 tags to a topic.</p>
 */
export interface TagLimitExceededException
  extends __ServiceException__<_TagLimitExceededExceptionDetails> {
  name: "TagLimitExceededException";
}

export interface _TagLimitExceededExceptionDetails {
  /**
   * __string shape
   */
  message?: string;
}
