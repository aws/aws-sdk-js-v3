import { _ASN1Subject, _UnmarshalledASN1Subject } from "./_ASN1Subject";

/**
 * <p>Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a>CreateCertificateAuthority</a> action. </p>
 */
export interface _CertificateAuthorityConfiguration {
  /**
   * <p>Type of the public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. When you create a subordinate CA, you must use a key algorithm supported by the parent CA.</p>
   */
  KeyAlgorithm:
    | "RSA_2048"
    | "RSA_4096"
    | "EC_prime256v1"
    | "EC_secp384r1"
    | string;

  /**
   * <p>Name of the algorithm your private CA uses to sign certificate requests.</p>
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
   * <p>Structure that contains X.500 distinguished name information for your private CA.</p>
   */
  Subject: _ASN1Subject;
}

export interface _UnmarshalledCertificateAuthorityConfiguration
  extends _CertificateAuthorityConfiguration {
  /**
   * <p>Structure that contains X.500 distinguished name information for your private CA.</p>
   */
  Subject: _UnmarshalledASN1Subject;
}
