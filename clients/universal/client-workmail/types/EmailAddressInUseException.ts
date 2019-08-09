import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The email address that you're trying to assign is already created for a different user, group, or resource.</p>
 */
export interface EmailAddressInUseException
  extends __ServiceException__<_EmailAddressInUseExceptionDetails> {
  name: "EmailAddressInUseException";
}

export interface _EmailAddressInUseExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
