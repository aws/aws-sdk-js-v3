/**
 * <p>This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list. </p>
 */
export interface _Filters {
  /**
   * <p>Specify one or more <a>ExtendedKeyUsage</a> extension values.</p>
   */
  extendedKeyUsage?:
    | Array<
        | "TLS_WEB_SERVER_AUTHENTICATION"
        | "TLS_WEB_CLIENT_AUTHENTICATION"
        | "CODE_SIGNING"
        | "EMAIL_PROTECTION"
        | "TIME_STAMPING"
        | "OCSP_SIGNING"
        | "IPSEC_END_SYSTEM"
        | "IPSEC_TUNNEL"
        | "IPSEC_USER"
        | "ANY"
        | "NONE"
        | "CUSTOM"
        | string
      >
    | Iterable<
        | "TLS_WEB_SERVER_AUTHENTICATION"
        | "TLS_WEB_CLIENT_AUTHENTICATION"
        | "CODE_SIGNING"
        | "EMAIL_PROTECTION"
        | "TIME_STAMPING"
        | "OCSP_SIGNING"
        | "IPSEC_END_SYSTEM"
        | "IPSEC_TUNNEL"
        | "IPSEC_USER"
        | "ANY"
        | "NONE"
        | "CUSTOM"
        | string
      >;

  /**
   * <p>Specify one or more <a>KeyUsage</a> extension values.</p>
   */
  keyUsage?:
    | Array<
        | "DIGITAL_SIGNATURE"
        | "NON_REPUDIATION"
        | "KEY_ENCIPHERMENT"
        | "DATA_ENCIPHERMENT"
        | "KEY_AGREEMENT"
        | "CERTIFICATE_SIGNING"
        | "CRL_SIGNING"
        | "ENCIPHER_ONLY"
        | "DECIPHER_ONLY"
        | "ANY"
        | "CUSTOM"
        | string
      >
    | Iterable<
        | "DIGITAL_SIGNATURE"
        | "NON_REPUDIATION"
        | "KEY_ENCIPHERMENT"
        | "DATA_ENCIPHERMENT"
        | "KEY_AGREEMENT"
        | "CERTIFICATE_SIGNING"
        | "CRL_SIGNING"
        | "ENCIPHER_ONLY"
        | "DECIPHER_ONLY"
        | "ANY"
        | "CUSTOM"
        | string
      >;

  /**
   * <p>Specify one or more algorithms that can be used to generate key pairs.</p>
   */
  keyTypes?:
    | Array<
        | "RSA_2048"
        | "RSA_1024"
        | "RSA_4096"
        | "EC_prime256v1"
        | "EC_secp384r1"
        | "EC_secp521r1"
        | string
      >
    | Iterable<
        | "RSA_2048"
        | "RSA_1024"
        | "RSA_4096"
        | "EC_prime256v1"
        | "EC_secp384r1"
        | "EC_secp521r1"
        | string
      >;
}

export interface _UnmarshalledFilters extends _Filters {
  /**
   * <p>Specify one or more <a>ExtendedKeyUsage</a> extension values.</p>
   */
  extendedKeyUsage?: Array<
    | "TLS_WEB_SERVER_AUTHENTICATION"
    | "TLS_WEB_CLIENT_AUTHENTICATION"
    | "CODE_SIGNING"
    | "EMAIL_PROTECTION"
    | "TIME_STAMPING"
    | "OCSP_SIGNING"
    | "IPSEC_END_SYSTEM"
    | "IPSEC_TUNNEL"
    | "IPSEC_USER"
    | "ANY"
    | "NONE"
    | "CUSTOM"
    | string
  >;

  /**
   * <p>Specify one or more <a>KeyUsage</a> extension values.</p>
   */
  keyUsage?: Array<
    | "DIGITAL_SIGNATURE"
    | "NON_REPUDIATION"
    | "KEY_ENCIPHERMENT"
    | "DATA_ENCIPHERMENT"
    | "KEY_AGREEMENT"
    | "CERTIFICATE_SIGNING"
    | "CRL_SIGNING"
    | "ENCIPHER_ONLY"
    | "DECIPHER_ONLY"
    | "ANY"
    | "CUSTOM"
    | string
  >;

  /**
   * <p>Specify one or more algorithms that can be used to generate key pairs.</p>
   */
  keyTypes?: Array<
    | "RSA_2048"
    | "RSA_1024"
    | "RSA_4096"
    | "EC_prime256v1"
    | "EC_secp384r1"
    | "EC_secp521r1"
    | string
  >;
}
