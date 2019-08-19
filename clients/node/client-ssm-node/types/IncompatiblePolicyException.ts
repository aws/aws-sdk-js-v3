import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is a conflict in the policies specified for this parameter. You can't, for example, specify two Expiration policies for a parameter. Review your policies, and try again.</p>
 */
export interface IncompatiblePolicyException
  extends __ServiceException__<_IncompatiblePolicyExceptionDetails> {
  name: "IncompatiblePolicyException";
}

export interface _IncompatiblePolicyExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
