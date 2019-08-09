import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The submitted registration token has expired. This can happen if the buyer's browser takes too long to redirect to your page, the buyer has resubmitted the registration token, or your application has held on to the registration token for too long. Your SaaS registration website should redeem this token as soon as it is submitted by the buyer's browser.</p>
 */
export interface ExpiredTokenException
  extends __ServiceException__<_ExpiredTokenExceptionDetails> {
  name: "ExpiredTokenException";
}

export interface _ExpiredTokenExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
