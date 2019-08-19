import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RevokeCertificateInput shape
 */
export interface RevokeCertificateInput {
  /**
   * <p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   */
  CertificateAuthorityArn: string;

  /**
   * <p>Serial number of the certificate to be revoked. This must be in hexadecimal format. You can retrieve the serial number by calling <a>GetCertificate</a> with the Amazon Resource Name (ARN) of the certificate you want and the ARN of your private CA. The <b>GetCertificate</b> action retrieves the certificate in the PEM format. You can use the following OpenSSL command to list the certificate in text format and copy the hexadecimal serial number. </p> <p> <code>openssl x509 -in <i>file_path</i> -text -noout</code> </p> <p>You can also copy the serial number from the console or use the <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html">DescribeCertificate</a> action in the <i>AWS Certificate Manager API Reference</i>. </p>
   */
  CertificateSerial: string;

  /**
   * <p>Specifies why you revoked the certificate.</p>
   */
  RevocationReason:
    | "UNSPECIFIED"
    | "KEY_COMPROMISE"
    | "CERTIFICATE_AUTHORITY_COMPROMISE"
    | "AFFILIATION_CHANGED"
    | "SUPERSEDED"
    | "CESSATION_OF_OPERATION"
    | "PRIVILEGE_WITHDRAWN"
    | "A_A_COMPROMISE"
    | string;

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
