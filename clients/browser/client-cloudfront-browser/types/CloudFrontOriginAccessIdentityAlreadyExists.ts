import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>
 */
export interface CloudFrontOriginAccessIdentityAlreadyExists
  extends __ServiceException__<
    _CloudFrontOriginAccessIdentityAlreadyExistsDetails
  > {
  name: "CloudFrontOriginAccessIdentityAlreadyExists";
}

export interface _CloudFrontOriginAccessIdentityAlreadyExistsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
