import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have reached the limit on the number of tags that can be assigned.</p>
 */
export interface TooManyTagsException
  extends __ServiceException__<_TooManyTagsExceptionDetails> {
  name: "TooManyTagsException";
}

export interface _TooManyTagsExceptionDetails {}
