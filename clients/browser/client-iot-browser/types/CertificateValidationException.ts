import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The certificate is invalid.</p>
 */
export interface CertificateValidationException
  extends __ServiceException__<_CertificateValidationExceptionDetails> {
  name: "CertificateValidationException";
}

export interface _CertificateValidationExceptionDetails {
  /**
   * <p>Additional information about the exception.</p>
   */
  message?: string;
}
