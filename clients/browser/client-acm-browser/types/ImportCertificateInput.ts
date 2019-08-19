import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportCertificateInput shape
 */
export interface ImportCertificateInput {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an imported certificate to replace. To import a new certificate, omit this field. </p>
   */
  CertificateArn?: string;

  /**
   * <p>The certificate to import.</p>
   */
  Certificate: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The private key that matches the public key in the certificate.</p>
   */
  PrivateKey: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The PEM encoded certificate chain.</p>
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
