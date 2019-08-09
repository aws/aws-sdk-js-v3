/**
 * <p>VPC configuration associated with your simulation job.</p>
 */
export interface _VPCConfigResponse {
  /**
   * <p>A list of subnet IDs associated with the simulation job.</p>
   */
  subnets?: Array<string> | Iterable<string>;

  /**
   * <p>A list of security group IDs associated with the simulation job.</p>
   */
  securityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>The VPC ID associated with your simulation job.</p>
   */
  vpcId?: string;

  /**
   * <p>A boolean indicating if a public IP was assigned.</p>
   */
  assignPublicIp?: boolean;
}

export interface _UnmarshalledVPCConfigResponse extends _VPCConfigResponse {
  /**
   * <p>A list of subnet IDs associated with the simulation job.</p>
   */
  subnets?: Array<string>;

  /**
   * <p>A list of security group IDs associated with the simulation job.</p>
   */
  securityGroups?: Array<string>;
}
