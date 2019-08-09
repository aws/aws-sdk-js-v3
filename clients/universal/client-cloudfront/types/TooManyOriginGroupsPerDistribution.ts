import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Processing your request would cause you to exceed the maximum number of origin groups allowed.</p>
 */
export interface TooManyOriginGroupsPerDistribution
  extends __ServiceException__<_TooManyOriginGroupsPerDistributionDetails> {
  name: "TooManyOriginGroupsPerDistribution";
}

export interface _TooManyOriginGroupsPerDistributionDetails {
  /**
   * _string shape
   */
  Message?: string;
}
