import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The origin access identity is not valid or doesn't exist.</p>
 */
export interface InvalidOriginAccessIdentity
  extends __ServiceException__<_InvalidOriginAccessIdentityDetails> {
  name: "InvalidOriginAccessIdentity";
}

export interface _InvalidOriginAccessIdentityDetails {
  /**
   * _string shape
   */
  Message?: string;
}
