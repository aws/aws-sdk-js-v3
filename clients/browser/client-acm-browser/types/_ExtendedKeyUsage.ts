/**
 * <p>The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension. </p>
 */
export interface _ExtendedKeyUsage {
  /**
   * <p>The name of an Extended Key Usage value.</p>
   */
  Name?:
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
    | string;

  /**
   * <p>An object identifier (OID) for the extension value. OIDs are strings of numbers separated by periods. The following OIDs are defined in RFC 3280 and RFC 5280. </p> <ul> <li> <p> <code>1.3.6.1.5.5.7.3.1 (TLS_WEB_SERVER_AUTHENTICATION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.2 (TLS_WEB_CLIENT_AUTHENTICATION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.3 (CODE_SIGNING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.4 (EMAIL_PROTECTION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.8 (TIME_STAMPING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.9 (OCSP_SIGNING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.5 (IPSEC_END_SYSTEM)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.6 (IPSEC_TUNNEL)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.7 (IPSEC_USER)</code> </p> </li> </ul>
   */
  OID?: string;
}

export type _UnmarshalledExtendedKeyUsage = _ExtendedKeyUsage;
