import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The policy documentation is not valid.</p>
 */
export interface MalformedPolicyException
  extends __ServiceException__<_MalformedPolicyExceptionDetails> {
  name: "MalformedPolicyException";
}

export interface _MalformedPolicyExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
