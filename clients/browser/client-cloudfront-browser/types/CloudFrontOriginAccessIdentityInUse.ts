import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Origin Access Identity specified is already in use.</p>
 */
export interface CloudFrontOriginAccessIdentityInUse
  extends __ServiceException__<_CloudFrontOriginAccessIdentityInUseDetails> {
  name: "CloudFrontOriginAccessIdentityInUse";
}

export interface _CloudFrontOriginAccessIdentityInUseDetails {
  /**
   * _string shape
   */
  Message?: string;
}
