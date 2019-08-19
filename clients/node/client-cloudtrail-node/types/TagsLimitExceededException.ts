import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of tags per trail has exceeded the permitted amount. Currently, the limit is 50.</p>
 */
export interface TagsLimitExceededException
  extends __ServiceException__<_TagsLimitExceededExceptionDetails> {
  name: "TagsLimitExceededException";
}

export interface _TagsLimitExceededExceptionDetails {}
