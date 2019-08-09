import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.</p>
 */
export interface InvalidSecurityException
  extends __ServiceException__<_InvalidSecurityExceptionDetails> {
  name: "InvalidSecurityException";
}

export interface _InvalidSecurityExceptionDetails {
  /**
   * _string shape
   */
  message?: string;
}
