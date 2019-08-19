import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified streaming distribution does not exist.</p>
 */
export interface NoSuchStreamingDistribution
  extends __ServiceException__<_NoSuchStreamingDistributionDetails> {
  name: "NoSuchStreamingDistribution";
}

export interface _NoSuchStreamingDistributionDetails {
  /**
   * _string shape
   */
  Message?: string;
}
