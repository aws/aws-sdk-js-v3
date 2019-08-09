import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCertificateAuthorityAuditReportInput shape
 */
export interface CreateCertificateAuthorityAuditReportInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the CA to be audited. This is of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>.</p>
   */
  CertificateAuthorityArn: string;

  /**
   * <p>The name of the S3 bucket that will contain the audit report.</p>
   */
  S3BucketName: string;

  /**
   * <p>The format in which to create the report. This can be either <b>JSON</b> or <b>CSV</b>.</p>
   */
  AuditReportResponseFormat: "JSON" | "CSV" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
