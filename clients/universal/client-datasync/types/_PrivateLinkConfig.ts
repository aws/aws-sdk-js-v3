/**
 * <p>The VPC endpoint, subnet and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud).</p>
 */
export interface _PrivateLinkConfig {
  /**
   * <p>The ID of the VPC endpoint that is configured for an agent. An agent that is configured with a VPC endpoint will not be accessible over the public Internet.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The private endpoint that is configured for an agent that has access to IP addresses in a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">PrivateLink</a>. An agent that is configured with this endpoint will not be accessible over the public Internet.</p>
   */
  PrivateLinkEndpoint?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the subnets that are configured for an agent activated in a VPC or an agent that has access to a VPC endpoint.</p>
   */
  SubnetArns?: Array<string> | Iterable<string>;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are configured for the EC2 resource that hosts an agent activated in a VPC or an agent that has access to a VPC endpoint.</p>
   */
  SecurityGroupArns?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPrivateLinkConfig extends _PrivateLinkConfig {
  /**
   * <p>The Amazon Resource Names (ARNs) of the subnets that are configured for an agent activated in a VPC or an agent that has access to a VPC endpoint.</p>
   */
  SubnetArns?: Array<string>;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups that are configured for the EC2 resource that hosts an agent activated in a VPC or an agent that has access to a VPC endpoint.</p>
   */
  SecurityGroupArns?: Array<string>;
}
