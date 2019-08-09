import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Unable to verify the CA certificate used to sign the device certificate you are attempting to register. This is happens when you have registered more than one CA certificate that has the same subject field and public key.</p>
 */
export interface CertificateConflictException
  extends __ServiceException__<_CertificateConflictExceptionDetails> {
  name: "CertificateConflictException";
}

export interface _CertificateConflictExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
