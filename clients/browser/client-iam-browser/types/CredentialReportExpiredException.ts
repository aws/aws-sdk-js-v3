import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the most recent credential report has expired. To generate a new credential report, use <a>GenerateCredentialReport</a>. For more information about credential report expiration, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the <i>IAM User Guide</i>.</p>
 */
export interface CredentialReportExpiredException
  extends __ServiceException__<_CredentialReportExpiredExceptionDetails> {
  name: "CredentialReportExpiredException";
}

export interface _CredentialReportExpiredExceptionDetails {
  /**
   * _credentialReportExpiredExceptionMessage shape
   */
  message?: string;
}
