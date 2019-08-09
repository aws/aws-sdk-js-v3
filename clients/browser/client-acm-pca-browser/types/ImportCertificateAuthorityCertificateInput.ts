import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportCertificateAuthorityCertificateInput shape
 */
export interface ImportCertificateAuthorityCertificateInput {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   */
  CertificateAuthorityArn: string;

  /**
   * <p>The PEM-encoded certificate for a private CA. This may be a self-signed certificate in the case of a root CA, or it may be signed by another CA that you control.</p>
   */
  Certificate: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>A PEM-encoded file that contains all of your certificates, other than the certificate you're importing, chaining up to your root CA. Your ACM Private CA-hosted or on-premises root certificate is the last in the chain, and each certificate in the chain signs the one preceding. </p> <p>This parameter must be supplied when you import a subordinate CA. When you import a root CA, there is no chain.</p>
   */
  CertificateChain?: ArrayBuffer | ArrayBufferView | string;

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
