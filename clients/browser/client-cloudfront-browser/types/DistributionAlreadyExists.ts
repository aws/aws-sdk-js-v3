import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The caller reference you attempted to create the distribution with is associated with another distribution.</p>
 */
export interface DistributionAlreadyExists
  extends __ServiceException__<_DistributionAlreadyExistsDetails> {
  name: "DistributionAlreadyExists";
}

export interface _DistributionAlreadyExistsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
