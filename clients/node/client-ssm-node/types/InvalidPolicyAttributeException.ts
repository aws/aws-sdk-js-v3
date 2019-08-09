import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A policy attribute or its value is invalid. </p>
 */
export interface InvalidPolicyAttributeException
  extends __ServiceException__<_InvalidPolicyAttributeExceptionDetails> {
  name: "InvalidPolicyAttributeException";
}

export interface _InvalidPolicyAttributeExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
