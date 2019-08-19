import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 */
export interface TooManyDistributionCNAMEs
  extends __ServiceException__<_TooManyDistributionCNAMEsDetails> {
  name: "TooManyDistributionCNAMEs";
}

export interface _TooManyDistributionCNAMEsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
