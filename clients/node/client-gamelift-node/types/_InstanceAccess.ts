import {
  _InstanceCredentials,
  _UnmarshalledInstanceCredentials
} from "./_InstanceCredentials";

/**
 * <p>Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>. </p>
 */
export interface _InstanceAccess {
  /**
   * <p>Unique identifier for a fleet containing the instance being accessed.</p>
   */
  FleetId?: string;

  /**
   * <p>Unique identifier for an instance being accessed.</p>
   */
  InstanceId?: string;

  /**
   * <p>IP address assigned to the instance.</p>
   */
  IpAddress?: string;

  /**
   * <p>Operating system that is running on the instance.</p>
   */
  OperatingSystem?: "WINDOWS_2012" | "AMAZON_LINUX" | string;

  /**
   * <p>Credentials required to access the instance.</p>
   */
  Credentials?: _InstanceCredentials;
}

export interface _UnmarshalledInstanceAccess extends _InstanceAccess {
  /**
   * <p>Credentials required to access the instance.</p>
   */
  Credentials?: _UnmarshalledInstanceCredentials;
}
