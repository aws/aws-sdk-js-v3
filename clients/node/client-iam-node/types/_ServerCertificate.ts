import {
  _ServerCertificateMetadata,
  _UnmarshalledServerCertificateMetadata
} from "./_ServerCertificateMetadata";

/**
 * <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p>
 */
export interface _ServerCertificate {
  /**
   * <p>The meta information of the server certificate, such as its name, path, ID, and ARN.</p>
   */
  ServerCertificateMetadata: _ServerCertificateMetadata;

  /**
   * <p>The contents of the public key certificate.</p>
   */
  CertificateBody: string;

  /**
   * <p>The contents of the public key certificate chain.</p>
   */
  CertificateChain?: string;
}

export interface _UnmarshalledServerCertificate extends _ServerCertificate {
  /**
   * <p>The meta information of the server certificate, such as its name, path, ID, and ARN.</p>
   */
  ServerCertificateMetadata: _UnmarshalledServerCertificateMetadata;
}
