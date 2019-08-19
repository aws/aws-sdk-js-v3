import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The list of tags on the repository is over the limit. The maximum number of tags that can be applied to a repository is 50.</p>
 */
export interface TooManyTagsException
  extends __ServiceException__<_TooManyTagsExceptionDetails> {
  name: "TooManyTagsException";
}

export interface _TooManyTagsExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
