import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The certificate authority certificate you are importing does not comply with conditions specified in the certificate that signed it.</p>
 */
export interface CertificateMismatchException
  extends __ServiceException__<_CertificateMismatchExceptionDetails> {
  name: "CertificateMismatchException";
}

export interface _CertificateMismatchExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
