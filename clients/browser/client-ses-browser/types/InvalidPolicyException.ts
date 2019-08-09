import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the provided policy is invalid. Check the error stack for more information about what caused the error.</p>
 */
export interface InvalidPolicyException
  extends __ServiceException__<_InvalidPolicyExceptionDetails> {
  name: "InvalidPolicyException";
}

export interface _InvalidPolicyExceptionDetails {}
