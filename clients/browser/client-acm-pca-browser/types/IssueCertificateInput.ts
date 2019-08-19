import { _Validity } from "./_Validity";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * IssueCertificateInput shape
 */
export interface IssueCertificateInput {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   */
  CertificateAuthorityArn: string;

  /**
   * <p>The certificate signing request (CSR) for the certificate you want to issue. You can use the following OpenSSL command to create the CSR and a 2048 bit RSA private key. </p> <p> <code>openssl req -new -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr</code> </p> <p>If you have a configuration file, you can use the following OpenSSL command. The <code>usr_cert</code> block in the configuration file contains your X509 version 3 extensions. </p> <p> <code>openssl req -new -config openssl_rsa.cnf -extensions usr_cert -newkey rsa:2048 -days -365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr</code> </p>
   */
  Csr: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The name of the algorithm that will be used to sign the certificate to be issued.</p>
   */
  SigningAlgorithm:
    | "SHA256WITHECDSA"
    | "SHA384WITHECDSA"
    | "SHA512WITHECDSA"
    | "SHA256WITHRSA"
    | "SHA384WITHRSA"
    | "SHA512WITHRSA"
    | string;

  /**
   * <p>Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, ACM Private CA defaults to the <code>EndEntityCertificate/V1</code> template.</p> <p>The following service-owned <code>TemplateArn</code> values are supported by ACM Private CA: </p> <ul> <li> <p>arn:aws:acm-pca:::template/EndEntityCertificate/V1</p> </li> <li> <p>arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen0/V1</p> </li> <li> <p>arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen1/V1</p> </li> <li> <p>arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen2/V1</p> </li> <li> <p>arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen3/V1</p> </li> <li> <p>arn:aws:acm-pca:::template/RootCACertificate/V1</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html">Using Templates</a>.</p>
   */
  TemplateArn?: string;

  /**
   * <p>The type of the validity period.</p>
   */
  Validity: _Validity;

  /**
   * <p>Custom string that can be used to distinguish between calls to the <b>IssueCertificate</b> action. Idempotency tokens time out after one hour. Therefore, if you call <b>IssueCertificate</b> multiple times with the same idempotency token within 5 minutes, ACM Private CA recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, PCA recognizes that you are requesting multiple certificates.</p>
   */
  IdempotencyToken?: string;

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
