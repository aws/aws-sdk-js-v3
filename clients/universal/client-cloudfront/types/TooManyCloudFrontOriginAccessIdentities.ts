import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Processing your request would cause you to exceed the maximum number of origin access identities allowed.</p>
 */
export interface TooManyCloudFrontOriginAccessIdentities
  extends __ServiceException__<
    _TooManyCloudFrontOriginAccessIdentitiesDetails
  > {
  name: "TooManyCloudFrontOriginAccessIdentities";
}

export interface _TooManyCloudFrontOriginAccessIdentitiesDetails {
  /**
   * _string shape
   */
  Message?: string;
}
