import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The certificate request is in process and the certificate in your account has not yet been issued.</p>
 */
export interface RequestInProgressException
  extends __ServiceException__<_RequestInProgressExceptionDetails> {
  name: "RequestInProgressException";
}

export interface _RequestInProgressExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
