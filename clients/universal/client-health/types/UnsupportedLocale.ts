import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified locale is not supported.</p>
 */
export interface UnsupportedLocale
  extends __ServiceException__<_UnsupportedLocaleDetails> {
  name: "UnsupportedLocale";
}

export interface _UnsupportedLocaleDetails {
  /**
   * _string shape
   */
  message?: string;
}
