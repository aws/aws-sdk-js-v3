import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the credential report does not exist. To generate a credential report, use <a>GenerateCredentialReport</a>.</p>
 */
export interface CredentialReportNotPresentException
  extends __ServiceException__<_CredentialReportNotPresentExceptionDetails> {
  name: "CredentialReportNotPresentException";
}

export interface _CredentialReportNotPresentExceptionDetails {
  /**
   * _credentialReportNotPresentExceptionMessage shape
   */
  message?: string;
}
