import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the provided password did not meet the requirements imposed by the account password policy.</p>
 */
export interface PasswordPolicyViolationException
  extends __ServiceException__<_PasswordPolicyViolationExceptionDetails> {
  name: "PasswordPolicyViolationException";
}

export interface _PasswordPolicyViolationExceptionDetails {
  /**
   * _passwordPolicyViolationMessage shape
   */
  message?: string;
}
