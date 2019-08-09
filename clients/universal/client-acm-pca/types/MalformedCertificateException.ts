import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more fields in the certificate are invalid.</p>
 */
export interface MalformedCertificateException
  extends __ServiceException__<_MalformedCertificateExceptionDetails> {
  name: "MalformedCertificateException";
}

export interface _MalformedCertificateExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
