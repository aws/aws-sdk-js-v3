import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request contains too many tags. Try the request again with fewer tags.</p>
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
