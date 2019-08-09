import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The address provided was invalid. Check the address with your region's carrier, and try again.</p>
 */
export interface InvalidAddressException
  extends __ServiceException__<_InvalidAddressExceptionDetails> {
  name: "InvalidAddressException";
}

export interface _InvalidAddressExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
