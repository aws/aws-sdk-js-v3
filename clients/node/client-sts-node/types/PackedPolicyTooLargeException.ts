import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the policy document was too large. The error message describes how big the policy document is, in packed form, as a percentage of what the API allows.</p>
 */
export interface PackedPolicyTooLargeException
  extends __ServiceException__<_PackedPolicyTooLargeExceptionDetails> {
  name: "PackedPolicyTooLargeException";
}

export interface _PackedPolicyTooLargeExceptionDetails {
  /**
   * _packedPolicyTooLargeMessage shape
   */
  message?: string;
}
