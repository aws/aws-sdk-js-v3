/**
 * <p>Describes the network details of the fleet or image builder instance.</p>
 */
export interface _NetworkAccessConfiguration {
  /**
   * <p>The private IP address of the elastic network interface that is attached to instances in your VPC.</p>
   */
  EniPrivateIpAddress?: string;

  /**
   * <p>The resource identifier of the elastic network interface that is attached to instances in your VPC. All network interfaces have the eni-xxxxxxxx resource identifier.</p>
   */
  EniId?: string;
}

export type _UnmarshalledNetworkAccessConfiguration = _NetworkAccessConfiguration;
