import {
  _AssociationStatus,
  _UnmarshalledAssociationStatus
} from "./_AssociationStatus";

/**
 * <p>Describes a target network associated with a Client VPN endpoint.</p>
 */
export interface _TargetNetwork {
  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the VPC in which the target network (subnet) is located.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the subnet specified as the target network.</p>
   */
  TargetNetworkId?: string;

  /**
   * <p>The ID of the Client VPN endpoint with which the target network is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: _AssociationStatus;

  /**
   * <p>The IDs of the security groups applied to the target network association.</p>
   */
  SecurityGroups?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTargetNetwork extends _TargetNetwork {
  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: _UnmarshalledAssociationStatus;

  /**
   * <p>The IDs of the security groups applied to the target network association.</p>
   */
  SecurityGroups?: Array<string>;
}
