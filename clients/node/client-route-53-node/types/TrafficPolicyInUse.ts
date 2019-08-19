import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more traffic policy instances were created by using the specified traffic policy.</p>
 */
export interface TrafficPolicyInUse
  extends __ServiceException__<_TrafficPolicyInUseDetails> {
  name: "TrafficPolicyInUse";
}

export interface _TrafficPolicyInUseDetails {
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}
