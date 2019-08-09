import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request contains more trusted signers than are allowed per distribution.</p>
 */
export interface TooManyTrustedSigners
  extends __ServiceException__<_TooManyTrustedSignersDetails> {
  name: "TooManyTrustedSigners";
}

export interface _TooManyTrustedSignersDetails {
  /**
   * _string shape
   */
  Message?: string;
}
