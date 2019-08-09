import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the certificate was malformed or expired. The error message describes the specific error.</p>
 */
export interface MalformedCertificateException
  extends __ServiceException__<_MalformedCertificateExceptionDetails> {
  name: "MalformedCertificateException";
}

export interface _MalformedCertificateExceptionDetails {
  /**
   * _malformedCertificateMessage shape
   */
  message?: string;
}
