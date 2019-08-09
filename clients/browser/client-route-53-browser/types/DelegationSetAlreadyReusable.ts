import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified delegation set has already been marked as reusable.</p>
 */
export interface DelegationSetAlreadyReusable
  extends __ServiceException__<_DelegationSetAlreadyReusableDetails> {
  name: "DelegationSetAlreadyReusable";
}

export interface _DelegationSetAlreadyReusableDetails {
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}
