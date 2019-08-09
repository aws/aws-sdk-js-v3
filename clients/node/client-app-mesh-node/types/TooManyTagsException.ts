import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request exceeds the maximum allowed number of tags allowed per resource. The current
 *          limit is 50 user tags per resource. You must reduce the number of tags in the request. None
 *          of the tags in this request were applied.</p>
 */
export interface TooManyTagsException
  extends __ServiceException__<_TooManyTagsExceptionDetails> {
  name: "TooManyTagsException";
}

export interface _TooManyTagsExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
