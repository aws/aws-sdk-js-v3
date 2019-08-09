import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM) or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might indicate that the certificate is not fully available yet.</p>
 */
export interface CertificateNotFoundException
  extends __ServiceException__<_CertificateNotFoundExceptionDetails> {
  name: "CertificateNotFoundException";
}

export interface _CertificateNotFoundExceptionDetails {}
