import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if a retrieval job would exceed the current data policy's retrieval rate limit. For more information about data retrieval policies,</p>
 */
export interface PolicyEnforcedException
  extends __ServiceException__<_PolicyEnforcedExceptionDetails> {
  name: "PolicyEnforcedException";
}

export interface _PolicyEnforcedExceptionDetails {
  /**
   * <p>Client</p>
   */
  type?: string;

  /**
   * <p>PolicyEnforcedException</p>
   */
  code?: string;

  /**
   * <p>InitiateJob request denied by current data retrieval policy.</p>
   */
  message?: string;
}
