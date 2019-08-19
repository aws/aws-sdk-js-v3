import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
 */
export interface InvalidIfMatchVersion
  extends __ServiceException__<_InvalidIfMatchVersionDetails> {
  name: "InvalidIfMatchVersion";
}

export interface _InvalidIfMatchVersionDetails {
  /**
   * _string shape
   */
  Message?: string;
}
