/**
 * <p>The data associated with a network profile.</p>
 */
export interface _NetworkProfileData {
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
   * <p>The authentication standard that is used in the EAP framework. Currently, EAP_TLS is supported.</p>
   */
  EapMethod?: "EAP_TLS" | string;

  /**
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager (ACM). This is used to issue certificates to the devices.</p>
   */
  CertificateAuthorityArn?: string;
}

export type _UnmarshalledNetworkProfileData = _NetworkProfileData;
