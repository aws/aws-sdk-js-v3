import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request contains more cookie names in the whitelist than are allowed per cache behavior.</p>
 */
export interface TooManyCookieNamesInWhiteList
  extends __ServiceException__<_TooManyCookieNamesInWhiteListDetails> {
  name: "TooManyCookieNamesInWhiteList";
}

export interface _TooManyCookieNamesInWhiteListDetails {
  /**
   * _string shape
   */
  Message?: string;
}
