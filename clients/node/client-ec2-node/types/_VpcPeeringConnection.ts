import {
  _VpcPeeringConnectionVpcInfo,
  _UnmarshalledVpcPeeringConnectionVpcInfo
} from "./_VpcPeeringConnectionVpcInfo";
import {
  _VpcPeeringConnectionStateReason,
  _UnmarshalledVpcPeeringConnectionStateReason
} from "./_VpcPeeringConnectionStateReason";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a VPC peering connection.</p>
 */
export interface _VpcPeeringConnection {
  /**
   * <p>Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   */
  AccepterVpcInfo?: _VpcPeeringConnectionVpcInfo;

  /**
   * <p>The time that an unaccepted VPC peering connection will expire.</p>
   */
  ExpirationTime?: Date | string | number;

  /**
   * <p>Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   */
  RequesterVpcInfo?: _VpcPeeringConnectionVpcInfo;

  /**
   * <p>The status of the VPC peering connection.</p>
   */
  Status?: _VpcPeeringConnectionStateReason;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export interface _UnmarshalledVpcPeeringConnection
  extends _VpcPeeringConnection {
  /**
   * <p>Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   */
  AccepterVpcInfo?: _UnmarshalledVpcPeeringConnectionVpcInfo;

  /**
   * <p>The time that an unaccepted VPC peering connection will expire.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   */
  RequesterVpcInfo?: _UnmarshalledVpcPeeringConnectionVpcInfo;

  /**
   * <p>The status of the VPC peering connection.</p>
   */
  Status?: _UnmarshalledVpcPeeringConnectionStateReason;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
