/**
 * <p>Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action.</p>
 */
export interface _PrivateIp {
  /**
   * <p>The DNS name of the private IP address.</p>
   */
  privateDnsName?: string;

  /**
   * <p>The full IP address of the network inteface.</p>
   */
  privateIpAddress?: string;
}

export type _UnmarshalledPrivateIp = _PrivateIp;
