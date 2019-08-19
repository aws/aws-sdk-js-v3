import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request. </p>
 */
export interface TooManyTagsException
  extends __ServiceException__<_TooManyTagsExceptionDetails> {
  name: "TooManyTagsException";
}

export interface _TooManyTagsExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
