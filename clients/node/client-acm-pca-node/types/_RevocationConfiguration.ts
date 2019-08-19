import {
  _CrlConfiguration,
  _UnmarshalledCrlConfiguration
} from "./_CrlConfiguration";

/**
 * <p>Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>.</p>
 */
export interface _RevocationConfiguration {
  /**
   * <p>Configuration of the certificate revocation list (CRL), if any, maintained by your private CA.</p>
   */
  CrlConfiguration?: _CrlConfiguration;
}

export interface _UnmarshalledRevocationConfiguration
  extends _RevocationConfiguration {
  /**
   * <p>Configuration of the certificate revocation list (CRL), if any, maintained by your private CA.</p>
   */
  CrlConfiguration?: _UnmarshalledCrlConfiguration;
}
