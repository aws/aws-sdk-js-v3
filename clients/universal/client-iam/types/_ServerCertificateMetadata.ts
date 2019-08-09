/**
 * <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> operations. </p>
 */
export interface _ServerCertificateMetadata {
  /**
   * <p> The path to the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  Path: string;

  /**
   * <p>The name that identifies the server certificate.</p>
   */
  ServerCertificateName: string;

  /**
   * <p> The stable and unique string identifying the server certificate. For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  ServerCertificateId: string;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the server certificate. For more information about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  Arn: string;

  /**
   * <p>The date when the server certificate was uploaded.</p>
   */
  UploadDate?: Date | string | number;

  /**
   * <p>The date on which the certificate is set to expire.</p>
   */
  Expiration?: Date | string | number;
}

export interface _UnmarshalledServerCertificateMetadata
  extends _ServerCertificateMetadata {
  /**
   * <p>The date when the server certificate was uploaded.</p>
   */
  UploadDate?: Date;

  /**
   * <p>The date on which the certificate is set to expire.</p>
   */
  Expiration?: Date;
}
