/**
 * <p>Describes a private IPv4 address for a Scheduled Instance.</p>
 */
export interface _ScheduledInstancesPrivateIpAddressConfig {
  /**
   * <p>Indicates whether this is a primary IPv4 address. Otherwise, this is a secondary IPv4 address.</p>
   */
  Primary?: boolean;

  /**
   * <p>The IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

export type _UnmarshalledScheduledInstancesPrivateIpAddressConfig = _ScheduledInstancesPrivateIpAddressConfig;
