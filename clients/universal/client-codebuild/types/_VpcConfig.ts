/**
 * <p>Information about the VPC configuration that AWS CodeBuild accesses.</p>
 */
export interface _VpcConfig {
  /**
   * <p>The ID of the Amazon VPC.</p>
   */
  vpcId?: string;

  /**
   * <p>A list of one or more subnet IDs in your Amazon VPC.</p>
   */
  subnets?: Array<string> | Iterable<string>;

  /**
   * <p>A list of one or more security groups IDs in your Amazon VPC.</p>
   */
  securityGroupIds?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledVpcConfig extends _VpcConfig {
  /**
   * <p>A list of one or more subnet IDs in your Amazon VPC.</p>
   */
  subnets?: Array<string>;

  /**
   * <p>A list of one or more security groups IDs in your Amazon VPC.</p>
   */
  securityGroupIds?: Array<string>;
}
