import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified certificate does not exist.</p>
 */
export interface CertificateNotFoundException
  extends __ServiceException__<_CertificateNotFoundExceptionDetails> {
  name: "CertificateNotFoundException";
}

export interface _CertificateNotFoundExceptionDetails {}
