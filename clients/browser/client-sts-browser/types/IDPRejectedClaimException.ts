import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The identity provider (IdP) reported that authentication failed. This might be because the claim is invalid.</p> <p>If this error is returned for the <code>AssumeRoleWithWebIdentity</code> operation, it can also mean that the claim has expired or has been explicitly revoked. </p>
 */
export interface IDPRejectedClaimException
  extends __ServiceException__<_IDPRejectedClaimExceptionDetails> {
  name: "IDPRejectedClaimException";
}

export interface _IDPRejectedClaimExceptionDetails {
  /**
   * _idpRejectedClaimMessage shape
   */
  message?: string;
}
