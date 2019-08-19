import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS WAF is not able to access the service linked role. This can be caused by a previous <code>PutLoggingConfiguration</code> request, which can lock the service linked role for about 20 seconds. Please try your request again. The service linked role can also be locked by a previous <code>DeleteServiceLinkedRole</code> request, which can lock the role for 15 minutes or more. If you recently made a <code>DeleteServiceLinkedRole</code>, wait at least 15 minutes and try the request again. If you receive this same exception again, you will have to wait additional time until the role is unlocked.</p>
 */
export interface WAFServiceLinkedRoleErrorException
  extends __ServiceException__<_WAFServiceLinkedRoleErrorExceptionDetails> {
  name: "WAFServiceLinkedRoleErrorException";
}

export interface _WAFServiceLinkedRoleErrorExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
