import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code> list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.</p>
 */
export interface InvalidForwardCookies
  extends __ServiceException__<_InvalidForwardCookiesDetails> {
  name: "InvalidForwardCookies";
}

export interface _InvalidForwardCookiesDetails {
  /**
   * _string shape
   */
  Message?: string;
}
