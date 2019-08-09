import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can associate up to 50 tags with a private CA. Exception information is contained in the exception message field.</p>
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
