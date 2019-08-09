import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The web identity token that was passed could not be validated by AWS. Get a new identity token from the identity provider and then retry the request.</p>
 */
export interface InvalidIdentityTokenException
  extends __ServiceException__<_InvalidIdentityTokenExceptionDetails> {
  name: "InvalidIdentityTokenException";
}

export interface _InvalidIdentityTokenExceptionDetails {
  /**
   * _invalidIdentityTokenMessage shape
   */
  message?: string;
}
