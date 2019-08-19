/**
 * <p>If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.</p>
 */
export interface _VPCConfig {
  /**
   * <p>A list of one or more subnet IDs in your VPC.</p>
   */
  subnets: Array<string> | Iterable<string>;

  /**
   * <p>A list of one or more security groups IDs in your VPC.</p>
   */
  securityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>A boolean indicating whether to assign a public IP address.</p>
   */
  assignPublicIp?: boolean;
}

export interface _UnmarshalledVPCConfig extends _VPCConfig {
  /**
   * <p>A list of one or more subnet IDs in your VPC.</p>
   */
  subnets: Array<string>;

  /**
   * <p>A list of one or more security groups IDs in your VPC.</p>
   */
  securityGroups?: Array<string>;
}
