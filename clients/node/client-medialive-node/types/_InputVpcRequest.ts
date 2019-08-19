/**
 * Settings for a private VPC Input.
 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
 * This property requires setting the roleArn property on Input creation.
 * Not compatible with the inputSecurityGroups property.
 *
 */
export interface _InputVpcRequest {
  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.
   * Requires subnetIds. If none are specified then the VPC default security group will be used.
   *
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * A list of 2 VPC subnet IDs from the same VPC.
   * Subnet IDs must be mapped to two unique availability zones (AZ).
   *
   */
  SubnetIds: Array<string> | Iterable<string>;
}

export interface _UnmarshalledInputVpcRequest extends _InputVpcRequest {
  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.
   * Requires subnetIds. If none are specified then the VPC default security group will be used.
   *
   */
  SecurityGroupIds?: Array<string>;

  /**
   * A list of 2 VPC subnet IDs from the same VPC.
   * Subnet IDs must be mapped to two unique availability zones (AZ).
   *
   */
  SubnetIds: Array<string>;
}
