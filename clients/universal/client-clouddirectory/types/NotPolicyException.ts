import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the requested operation can only operate on policy objects.</p>
 */
export interface NotPolicyException
  extends __ServiceException__<_NotPolicyExceptionDetails> {
  name: "NotPolicyException";
}

export interface _NotPolicyExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
