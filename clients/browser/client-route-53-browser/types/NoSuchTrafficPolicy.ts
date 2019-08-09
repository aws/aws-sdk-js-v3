import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No traffic policy exists with the specified ID.</p>
 */
export interface NoSuchTrafficPolicy
  extends __ServiceException__<_NoSuchTrafficPolicyDetails> {
  name: "NoSuchTrafficPolicy";
}

export interface _NoSuchTrafficPolicyDetails {
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}
