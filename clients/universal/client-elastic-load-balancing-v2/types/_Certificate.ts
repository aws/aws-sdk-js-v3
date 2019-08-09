/**
 * <p>Information about an SSL server certificate.</p>
 */
export interface _Certificate {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.</p>
   */
  IsDefault?: boolean;
}

export type _UnmarshalledCertificate = _Certificate;
