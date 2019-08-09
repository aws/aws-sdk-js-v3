import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of tag groups included in the tag set list exceeded the maximum allowed limit of 3.</p>
 */
export interface TagSetListLimitExceededException
  extends __ServiceException__<_TagSetListLimitExceededExceptionDetails> {
  name: "TagSetListLimitExceededException";
}

export interface _TagSetListLimitExceededExceptionDetails {}
