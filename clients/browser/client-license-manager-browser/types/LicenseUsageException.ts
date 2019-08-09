import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You do not have enough licenses available to support a new resource launch.</p>
 */
export interface LicenseUsageException
  extends __ServiceException__<_LicenseUsageExceptionDetails> {
  name: "LicenseUsageException";
}

export interface _LicenseUsageExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
