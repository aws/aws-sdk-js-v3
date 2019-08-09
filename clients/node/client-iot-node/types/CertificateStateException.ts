import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The certificate operation is not allowed.</p>
 */
export interface CertificateStateException
  extends __ServiceException__<_CertificateStateExceptionDetails> {
  name: "CertificateStateException";
}

export interface _CertificateStateExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
