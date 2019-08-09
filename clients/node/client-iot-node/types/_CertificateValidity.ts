/**
 * <p>When the certificate is valid.</p>
 */
export interface _CertificateValidity {
  /**
   * <p>The certificate is not valid before this date.</p>
   */
  notBefore?: Date | string | number;

  /**
   * <p>The certificate is not valid after this date.</p>
   */
  notAfter?: Date | string | number;
}

export interface _UnmarshalledCertificateValidity extends _CertificateValidity {
  /**
   * <p>The certificate is not valid before this date.</p>
   */
  notBefore?: Date;

  /**
   * <p>The certificate is not valid after this date.</p>
   */
  notAfter?: Date;
}
