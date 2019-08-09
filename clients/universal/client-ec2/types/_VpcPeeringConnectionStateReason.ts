/**
 * <p>Describes the status of a VPC peering connection.</p>
 */
export interface _VpcPeeringConnectionStateReason {
  /**
   * <p>The status of the VPC peering connection.</p>
   */
  Code?:
    | "initiating-request"
    | "pending-acceptance"
    | "active"
    | "deleted"
    | "rejected"
    | "failed"
    | "expired"
    | "provisioning"
    | "deleting"
    | string;

  /**
   * <p>A message that provides more information about the status, if applicable.</p>
   */
  Message?: string;
}

export type _UnmarshalledVpcPeeringConnectionStateReason = _VpcPeeringConnectionStateReason;
