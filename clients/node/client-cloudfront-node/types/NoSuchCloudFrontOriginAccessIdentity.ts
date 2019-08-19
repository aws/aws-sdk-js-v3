import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified origin access identity does not exist.</p>
 */
export interface NoSuchCloudFrontOriginAccessIdentity
  extends __ServiceException__<_NoSuchCloudFrontOriginAccessIdentityDetails> {
  name: "NoSuchCloudFrontOriginAccessIdentity";
}

export interface _NoSuchCloudFrontOriginAccessIdentityDetails {
  /**
   * _string shape
   */
  Message?: string;
}
