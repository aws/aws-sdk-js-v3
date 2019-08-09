import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum allowed number of tags was exceeded.</p>
 */
export interface TagLimitExceededException
  extends __ServiceException__<_TagLimitExceededExceptionDetails> {
  name: "TagLimitExceededException";
}

export interface _TagLimitExceededExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
