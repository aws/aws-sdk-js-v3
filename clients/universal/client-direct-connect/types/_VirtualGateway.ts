/**
 * <p>Information about a virtual private gateway for a private virtual interface.</p>
 */
export interface _VirtualGateway {
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The state of the virtual private gateway. The following are the possible values:</p> <ul> <li> <p> <code>pending</code>: Initial state after creating the virtual private gateway.</p> </li> <li> <p> <code>available</code>: Ready for use by a private virtual interface.</p> </li> <li> <p> <code>deleting</code>: Initial state after deleting the virtual private gateway.</p> </li> <li> <p> <code>deleted</code>: The virtual private gateway is deleted. The private virtual interface is unable to send traffic over this gateway.</p> </li> </ul>
   */
  virtualGatewayState?: string;
}

export type _UnmarshalledVirtualGateway = _VirtualGateway;
