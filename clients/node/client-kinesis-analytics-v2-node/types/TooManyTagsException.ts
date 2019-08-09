import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
 */
export interface TooManyTagsException
  extends __ServiceException__<_TooManyTagsExceptionDetails> {
  name: "TooManyTagsException";
}

export interface _TooManyTagsExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
