import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the credential report is still being generated.</p>
 */
export interface CredentialReportNotReadyException
  extends __ServiceException__<_CredentialReportNotReadyExceptionDetails> {
  name: "CredentialReportNotReadyException";
}

export interface _CredentialReportNotReadyExceptionDetails {
  /**
   * _credentialReportNotReadyExceptionMessage shape
   */
  message?: string;
}
