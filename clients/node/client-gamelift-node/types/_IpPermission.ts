/**
 * <p>A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift. New game sessions that are started on the fleet are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. For fleets created with a custom game server, the ranges reflect the server's game session assignments. For Realtime Servers fleets, Amazon GameLift automatically opens two port ranges, one for TCP messaging and one for UDP for use by the Realtime servers.</p>
 */
export interface _IpPermission {
  /**
   * <p>Starting value for a range of allowed port numbers.</p>
   */
  FromPort: number;

  /**
   * <p>Ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than <code>FromPort</code>.</p>
   */
  ToPort: number;

  /**
   * <p>Range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "<code>000.000.000.000/[subnet mask]</code>" or optionally the shortened version "<code>0.0.0.0/[subnet mask]</code>".</p>
   */
  IpRange: string;

  /**
   * <p>Network communication protocol used by the fleet.</p>
   */
  Protocol: "TCP" | "UDP" | string;
}

export type _UnmarshalledIpPermission = _IpPermission;
