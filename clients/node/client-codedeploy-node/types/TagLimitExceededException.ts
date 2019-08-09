import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum allowed number of tags was exceeded.</p>
 */
export interface TagLimitExceededException
  extends __ServiceException__<_TagLimitExceededExceptionDetails> {
  name: "TagLimitExceededException";
}

export interface _TagLimitExceededExceptionDetails {}
