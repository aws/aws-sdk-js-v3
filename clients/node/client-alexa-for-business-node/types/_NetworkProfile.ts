/**
 * <p>The network profile associated with a device.</p>
 */
export interface _NetworkProfile {
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * <p>The SSID of the Wi-Fi network.</p>
   */
  Ssid?: string;

  /**
   * <p>The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK, WEP, or OPEN.</p>
   */
  SecurityType?:
    | "OPEN"
    | "WEP"
    | "WPA_PSK"
    | "WPA2_PSK"
    | "WPA2_ENTERPRISE"
    | string;

  /**
   * <p>The authentication standard that is used in the EAP framework. Currently, EAP_TLS is supported. </p>
   */
  EapMethod?: "EAP_TLS" | string;

  /**
   * <p>The current password of the Wi-Fi network.</p>
   */
  CurrentPassword?: string;

  /**
   * <p>The next, or subsequent, password of the Wi-Fi network. This password is asynchronously transmitted to the device and is used when the password of the network changes to NextPassword. </p>
   */
  NextPassword?: string;

  /**
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager (ACM). This is used to issue certificates to the devices. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>The root certificates of your authentication server, which is installed on your devices and used to trust your authentication server during EAP negotiation.</p>
   */
  TrustAnchors?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledNetworkProfile extends _NetworkProfile {
  /**
   * <p>The root certificates of your authentication server, which is installed on your devices and used to trust your authentication server during EAP negotiation.</p>
   */
  TrustAnchors?: Array<string>;
}
