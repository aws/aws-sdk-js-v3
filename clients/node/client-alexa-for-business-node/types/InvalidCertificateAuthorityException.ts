import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Certificate Authority can't issue or revoke a certificate.</p>
 */
export interface InvalidCertificateAuthorityException
  extends __ServiceException__<_InvalidCertificateAuthorityExceptionDetails> {
  name: "InvalidCertificateAuthorityException";
}

export interface _InvalidCertificateAuthorityExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
