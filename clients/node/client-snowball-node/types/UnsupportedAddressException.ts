import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The address is either outside the serviceable area for your region, or an error occurred. Check the address with your region's carrier and try again. If the issue persists, contact AWS Support.</p>
 */
export interface UnsupportedAddressException
  extends __ServiceException__<_UnsupportedAddressExceptionDetails> {
  name: "UnsupportedAddressException";
}

export interface _UnsupportedAddressExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
