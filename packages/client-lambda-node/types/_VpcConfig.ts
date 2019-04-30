/**
 * <p>The VPC security groups and subnets attached to a Lambda function.</p>
 */
export interface _VpcConfig {
  /**
   * <p>A list of VPC subnet IDs.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>A list of VPC security groups IDs.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledVpcConfig extends _VpcConfig {
  /**
   * <p>A list of VPC subnet IDs.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>A list of VPC security groups IDs.</p>
   */
  SecurityGroupIds?: Array<string>;
}
