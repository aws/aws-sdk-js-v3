import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified distribution does not exist.</p>
 */
export interface NoSuchDistribution
  extends __ServiceException__<_NoSuchDistributionDetails> {
  name: "NoSuchDistribution";
}

export interface _NoSuchDistributionDetails {
  /**
   * _string shape
   */
  Message?: string;
}
