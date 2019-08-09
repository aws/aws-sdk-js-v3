import {
  _DirectoryServiceAuthentication,
  _UnmarshalledDirectoryServiceAuthentication
} from "./_DirectoryServiceAuthentication";
import {
  _CertificateAuthentication,
  _UnmarshalledCertificateAuthentication
} from "./_CertificateAuthentication";

/**
 * <p>Describes the authentication methods used by a Client VPN endpoint. Client VPN supports Active Directory and mutual authentication. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication">Authentication</a> in the <i>AWS Client VPN Administrator Guide</i>.</p>
 */
export interface _ClientVpnAuthentication {
  /**
   * <p>The authentication type used.</p>
   */
  Type?:
    | "certificate-authentication"
    | "directory-service-authentication"
    | string;

  /**
   * <p>Information about the Active Directory, if applicable.</p>
   */
  ActiveDirectory?: _DirectoryServiceAuthentication;

  /**
   * <p>Information about the authentication certificates, if applicable.</p>
   */
  MutualAuthentication?: _CertificateAuthentication;
}

export interface _UnmarshalledClientVpnAuthentication
  extends _ClientVpnAuthentication {
  /**
   * <p>Information about the Active Directory, if applicable.</p>
   */
  ActiveDirectory?: _UnmarshalledDirectoryServiceAuthentication;

  /**
   * <p>Information about the authentication certificates, if applicable.</p>
   */
  MutualAuthentication?: _UnmarshalledCertificateAuthentication;
}
