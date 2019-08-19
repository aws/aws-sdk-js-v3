/**
 * <p>The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.</p>
 */
export interface _Certificate {
  /**
   * <p>A customer-assigned name for the certificate. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.</p>
   */
  CertificateIdentifier?: string;

  /**
   * <p>The date that the certificate was created.</p>
   */
  CertificateCreationDate?: Date | string | number;

  /**
   * <p>The contents of a <code>.pem</code> file, which contains an X.509 certificate.</p>
   */
  CertificatePem?: string;

  /**
   * <p>The location of an imported Oracle Wallet certificate for use with SSL.</p>
   */
  CertificateWallet?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The owner of the certificate.</p>
   */
  CertificateOwner?: string;

  /**
   * <p>The beginning date that the certificate is valid.</p>
   */
  ValidFromDate?: Date | string | number;

  /**
   * <p>The final date that the certificate is valid.</p>
   */
  ValidToDate?: Date | string | number;

  /**
   * <p>The signing algorithm for the certificate.</p>
   */
  SigningAlgorithm?: string;

  /**
   * <p>The key length of the cryptographic algorithm being used.</p>
   */
  KeyLength?: number;
}

export interface _UnmarshalledCertificate extends _Certificate {
  /**
   * <p>The date that the certificate was created.</p>
   */
  CertificateCreationDate?: Date;

  /**
   * <p>The location of an imported Oracle Wallet certificate for use with SSL.</p>
   */
  CertificateWallet?: Uint8Array;

  /**
   * <p>The beginning date that the certificate is valid.</p>
   */
  ValidFromDate?: Date;

  /**
   * <p>The final date that the certificate is valid.</p>
   */
  ValidToDate?: Date;
}
