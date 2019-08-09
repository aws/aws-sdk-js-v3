import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested report expired. Update the date interval and try again.</p>
 */
export interface BillExpirationException
  extends __ServiceException__<_BillExpirationExceptionDetails> {
  name: "BillExpirationException";
}

export interface _BillExpirationExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
