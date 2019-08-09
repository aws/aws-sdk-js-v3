/**
 * <p>Information about an attachment between a Direct Connect gateway and a virtual interface.</p>
 */
export interface _DirectConnectGatewayAttachment {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>The AWS Region where the virtual interface is located.</p>
   */
  virtualInterfaceRegion?: string;

  /**
   * <p>The ID of the AWS account that owns the virtual interface.</p>
   */
  virtualInterfaceOwnerAccount?: string;

  /**
   * <p>The state of the attachment. The following are the possible values:</p> <ul> <li> <p> <code>attaching</code>: The initial state after a virtual interface is created using the Direct Connect gateway.</p> </li> <li> <p> <code>attached</code>: The Direct Connect gateway and virtual interface are attached and ready to pass traffic.</p> </li> <li> <p> <code>detaching</code>: The initial state after calling <a>DeleteVirtualInterface</a>.</p> </li> <li> <p> <code>detached</code>: The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual interface is stopped.</p> </li> </ul>
   */
  attachmentState?:
    | "attaching"
    | "attached"
    | "detaching"
    | "detached"
    | string;

  /**
   * <p>The interface type.</p>
   */
  attachmentType?:
    | "TransitVirtualInterface"
    | "PrivateVirtualInterface"
    | string;

  /**
   * <p>The error message if the state of an object failed to advance.</p>
   */
  stateChangeError?: string;
}

export type _UnmarshalledDirectConnectGatewayAttachment = _DirectConnectGatewayAttachment;
