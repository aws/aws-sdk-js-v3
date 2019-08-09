import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The tags limit for a resource has been exceeded.</p>
 */
export interface TooManyTagsException
  extends __ServiceException__<_TooManyTagsExceptionDetails> {
  name: "TooManyTagsException";
}

export interface _TooManyTagsExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}
