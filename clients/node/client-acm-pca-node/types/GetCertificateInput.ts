import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCertificateInput shape
 */
export interface GetCertificateInput {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>
   */
  CertificateAuthorityArn: string;

  /**
   * <p>The ARN of the issued certificate. The ARN contains the certificate serial number and must be in the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>/certificate/<i>286535153982981100925020015808220737245</i> </code> </p>
   */
  CertificateArn: string;

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
