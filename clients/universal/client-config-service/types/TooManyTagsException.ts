import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have reached the limit of the number of tags you can use. You have more than 50 tags.</p>
 */
export interface TooManyTagsException
  extends __ServiceException__<_TooManyTagsExceptionDetails> {
  name: "TooManyTagsException";
}

export interface _TooManyTagsExceptionDetails {}
