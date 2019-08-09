/**
 * <p>This structure specifies the VPC subnets and security groups for the task and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.</p>
 */
export interface _AwsVpcConfiguration {
  /**
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.</p>
   */
  Subnets: Array<string> | Iterable<string>;

  /**
   * <p>Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you don't specify a security group, the default security group for the VPC is used.</p>
   */
  SecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies whether the task's elastic network interface receives a public IP address. You can specify <code>ENABLED</code> only when <code>LaunchType</code> in <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   */
  AssignPublicIp?: "ENABLED" | "DISABLED" | string;
}

export interface _UnmarshalledAwsVpcConfiguration extends _AwsVpcConfiguration {
  /**
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.</p>
   */
  Subnets: Array<string>;

  /**
   * <p>Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you don't specify a security group, the default security group for the VPC is used.</p>
   */
  SecurityGroups?: Array<string>;
}
