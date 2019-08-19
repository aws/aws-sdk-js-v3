/**
 * <p>Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones.</p>
 */
export interface _ZoneAwarenessConfig {
  /**
   * <p>An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled</p>
   */
  AvailabilityZoneCount?: number;
}

export type _UnmarshalledZoneAwarenessConfig = _ZoneAwarenessConfig;
