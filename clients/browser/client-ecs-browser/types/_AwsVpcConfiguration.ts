/**
 * <p>An object representing the networking details for a task or service.</p>
 */
export interface _AwsVpcConfiguration {
  /**
   * <p>The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per <code>AwsVpcConfiguration</code>.</p> <note> <p>All specified subnets must be from the same VPC.</p> </note>
   */
  subnets: Array<string> | Iterable<string>;

  /**
   * <p>The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per <code>AwsVpcConfiguration</code>.</p> <note> <p>All specified security groups must be from the same VPC.</p> </note>
   */
  securityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>Whether the task's elastic network interface receives a public IP address. The default value is <code>DISABLED</code>.</p>
   */
  assignPublicIp?: "ENABLED" | "DISABLED" | string;
}

export interface _UnmarshalledAwsVpcConfiguration extends _AwsVpcConfiguration {
  /**
   * <p>The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per <code>AwsVpcConfiguration</code>.</p> <note> <p>All specified subnets must be from the same VPC.</p> </note>
   */
  subnets: Array<string>;

  /**
   * <p>The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per <code>AwsVpcConfiguration</code>.</p> <note> <p>All specified security groups must be from the same VPC.</p> </note>
   */
  securityGroups?: Array<string>;
}
