/**
 * <p>The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.</p>
 */
export interface _KeyUsage {
  /**
   * <p>A string value that contains a Key Usage extension name.</p>
   */
  Name?:
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
    | string;
}

export type _UnmarshalledKeyUsage = _KeyUsage;
