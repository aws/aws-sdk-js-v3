/**
 * <p>The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified. </p>
 */
export interface _Ec2Config {
  /**
   * <p>The ARN of the subnet and the security group that DataSync uses to access the target EFS file system.</p>
   */
  SubnetArn: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are configured for the Amazon EC2 resource.</p>
   */
  SecurityGroupArns: Array<string> | Iterable<string>;
}

export interface _UnmarshalledEc2Config extends _Ec2Config {
  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are configured for the Amazon EC2 resource.</p>
   */
  SecurityGroupArns: Array<string>;
}
