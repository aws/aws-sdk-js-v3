import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the sender address specified for a custom verification email is not verified, and is therefore not eligible to send the custom verification email. </p>
 */
export interface FromEmailAddressNotVerifiedException
  extends __ServiceException__<_FromEmailAddressNotVerifiedExceptionDetails> {
  name: "FromEmailAddressNotVerifiedException";
}

export interface _FromEmailAddressNotVerifiedExceptionDetails {
  /**
   * <p>Indicates that the from email address associated with the custom verification email template is not verified.</p>
   */
  FromEmailAddress?: string;
}
