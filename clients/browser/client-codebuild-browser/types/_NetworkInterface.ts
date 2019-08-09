/**
 * <p>Describes a network interface.</p>
 */
export interface _NetworkInterface {
  /**
   * <p>The ID of the subnet.</p>
   */
  subnetId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  networkInterfaceId?: string;
}

export type _UnmarshalledNetworkInterface = _NetworkInterface;
