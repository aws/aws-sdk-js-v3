/**
 * <p>Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.</p>
 */
export interface _AssociatedTargetNetwork {
  /**
   * <p>The ID of the subnet.</p>
   */
  NetworkId?: string;

  /**
   * <p>The target network type.</p>
   */
  NetworkType?: "vpc" | string;
}

export type _UnmarshalledAssociatedTargetNetwork = _AssociatedTargetNetwork;
