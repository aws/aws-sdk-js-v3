import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the certificate is invalid.</p>
 */
export interface InvalidCertificateException
  extends __ServiceException__<_InvalidCertificateExceptionDetails> {
  name: "InvalidCertificateException";
}

export interface _InvalidCertificateExceptionDetails {
  /**
   * _invalidCertificateMessage shape
   */
  message?: string;
}
