import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The web identity token that was passed is expired or is not valid. Get a new identity token from the identity provider and then retry the request.</p>
 */
export interface ExpiredTokenException
  extends __ServiceException__<_ExpiredTokenExceptionDetails> {
  name: "ExpiredTokenException";
}

export interface _ExpiredTokenExceptionDetails {
  /**
   * _expiredIdentityTokenMessage shape
   */
  message?: string;
}
