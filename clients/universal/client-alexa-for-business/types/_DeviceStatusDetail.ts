/**
 * <p>Details of a device’s status.</p>
 */
export interface _DeviceStatusDetail {
  /**
   * <p>The list of available features on the device.</p>
   */
  Feature?:
    | "BLUETOOTH"
    | "VOLUME"
    | "NOTIFICATIONS"
    | "LISTS"
    | "SKILLS"
    | "NETWORK_PROFILE"
    | "SETTINGS"
    | "ALL"
    | string;

  /**
   * <p>The device status detail code.</p>
   */
  Code?:
    | "DEVICE_SOFTWARE_UPDATE_NEEDED"
    | "DEVICE_WAS_OFFLINE"
    | "CREDENTIALS_ACCESS_FAILURE"
    | "TLS_VERSION_MISMATCH"
    | "ASSOCIATION_REJECTION"
    | "AUTHENTICATION_FAILURE"
    | "DHCP_FAILURE"
    | "INTERNET_UNAVAILABLE"
    | "DNS_FAILURE"
    | "UNKNOWN_FAILURE"
    | "CERTIFICATE_ISSUING_LIMIT_EXCEEDED"
    | "INVALID_CERTIFICATE_AUTHORITY"
    | "NETWORK_PROFILE_NOT_FOUND"
    | "INVALID_PASSWORD_STATE"
    | "PASSWORD_NOT_FOUND"
    | string;
}

export type _UnmarshalledDeviceStatusDetail = _DeviceStatusDetail;
