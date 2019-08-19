import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request failed because AWS service role policies can only be attached to the service-linked role for that service.</p>
 */
export interface PolicyNotAttachableException
  extends __ServiceException__<_PolicyNotAttachableExceptionDetails> {
  name: "PolicyNotAttachableException";
}

export interface _PolicyNotAttachableExceptionDetails {
  /**
   * _policyNotAttachableMessage shape
   */
  message?: string;
}
