import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the same certificate is associated with an IAM user in the account.</p>
 */
export interface DuplicateCertificateException
  extends __ServiceException__<_DuplicateCertificateExceptionDetails> {
  name: "DuplicateCertificateException";
}

export interface _DuplicateCertificateExceptionDetails {
  /**
   * _duplicateCertificateMessage shape
   */
  message?: string;
}
