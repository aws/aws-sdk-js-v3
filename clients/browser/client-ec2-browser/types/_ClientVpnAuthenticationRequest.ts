import {
  _DirectoryServiceAuthenticationRequest,
  _UnmarshalledDirectoryServiceAuthenticationRequest
} from "./_DirectoryServiceAuthenticationRequest";
import {
  _CertificateAuthenticationRequest,
  _UnmarshalledCertificateAuthenticationRequest
} from "./_CertificateAuthenticationRequest";

/**
 * <p>Describes the authentication method to be used by a Client VPN endpoint. Client VPN supports Active Directory and mutual authentication. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication">Authentication</a> in the <i>AWS Client VPN Administrator Guide</i>.</p>
 */
export interface _ClientVpnAuthenticationRequest {
  /**
   * <p>The type of client authentication to be used. Specify <code>certificate-authentication</code> to use certificate-based authentication, or <code>directory-service-authentication</code> to use Active Directory authentication.</p>
   */
  Type?:
    | "certificate-authentication"
    | "directory-service-authentication"
    | string;

  /**
   * <p>Information about the Active Directory to be used, if applicable. You must provide this information if <b>Type</b> is <code>directory-service-authentication</code>.</p>
   */
  ActiveDirectory?: _DirectoryServiceAuthenticationRequest;

  /**
   * <p>Information about the authentication certificates to be used, if applicable. You must provide this information if <b>Type</b> is <code>certificate-authentication</code>.</p>
   */
  MutualAuthentication?: _CertificateAuthenticationRequest;
}

export interface _UnmarshalledClientVpnAuthenticationRequest
  extends _ClientVpnAuthenticationRequest {
  /**
   * <p>Information about the Active Directory to be used, if applicable. You must provide this information if <b>Type</b> is <code>directory-service-authentication</code>.</p>
   */
  ActiveDirectory?: _UnmarshalledDirectoryServiceAuthenticationRequest;

  /**
   * <p>Information about the authentication certificates to be used, if applicable. You must provide this information if <b>Type</b> is <code>certificate-authentication</code>.</p>
   */
  MutualAuthentication?: _UnmarshalledCertificateAuthenticationRequest;
}
