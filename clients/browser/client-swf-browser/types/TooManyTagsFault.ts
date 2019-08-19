import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've exceeded the number of tags allowed for a domain.</p>
 */
export interface TooManyTagsFault
  extends __ServiceException__<_TooManyTagsFaultDetails> {
  name: "TooManyTagsFault";
}

export interface _TooManyTagsFaultDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
