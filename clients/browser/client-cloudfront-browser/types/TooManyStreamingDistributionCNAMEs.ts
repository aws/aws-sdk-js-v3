import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 */
export interface TooManyStreamingDistributionCNAMEs
  extends __ServiceException__<_TooManyStreamingDistributionCNAMEsDetails> {
  name: "TooManyStreamingDistributionCNAMEs";
}

export interface _TooManyStreamingDistributionCNAMEsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
