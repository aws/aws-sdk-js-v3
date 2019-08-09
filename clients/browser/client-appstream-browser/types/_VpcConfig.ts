/**
 * <p>Describes VPC configuration information for fleets and image builders.</p>
 */
export interface _VpcConfig {
  /**
   * <p>The identifiers of the subnets to which a network interface is attached from the fleet instance or image builder instance. Fleet instances use one or more subnets. Image builder instances use one subnet.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>The identifiers of the security groups for the fleet or image builder.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledVpcConfig extends _VpcConfig {
  /**
   * <p>The identifiers of the subnets to which a network interface is attached from the fleet instance or image builder instance. Fleet instances use one or more subnets. Image builder instances use one subnet.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>The identifiers of the security groups for the fleet or image builder.</p>
   */
  SecurityGroupIds?: Array<string>;
}
