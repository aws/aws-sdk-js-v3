import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified CloudFront distribution is not disabled. You must disable the distribution before you can delete it.</p>
 */
export interface DistributionNotDisabled
  extends __ServiceException__<_DistributionNotDisabledDetails> {
  name: "DistributionNotDisabled";
}

export interface _DistributionNotDisabledDetails {
  /**
   * _string shape
   */
  Message?: string;
}
