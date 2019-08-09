/**
 * <p>Describes an Elastic Load Balancing instance.</p>
 */
export interface _ElasticLoadBalancer {
  /**
   * <p>The Elastic Load Balancing instance's name.</p>
   */
  ElasticLoadBalancerName?: string;

  /**
   * <p>The instance's AWS region.</p>
   */
  Region?: string;

  /**
   * <p>The instance's public DNS name.</p>
   */
  DnsName?: string;

  /**
   * <p>The ID of the stack that the instance is associated with.</p>
   */
  StackId?: string;

  /**
   * <p>The ID of the layer that the instance is attached to.</p>
   */
  LayerId?: string;

  /**
   * <p>The VPC ID.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of Availability Zones.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>A list of subnet IDs, if the stack is running in a VPC.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>A list of the EC2 instances that the Elastic Load Balancing instance is managing traffic for.</p>
   */
  Ec2InstanceIds?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledElasticLoadBalancer extends _ElasticLoadBalancer {
  /**
   * <p>A list of Availability Zones.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>A list of subnet IDs, if the stack is running in a VPC.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>A list of the EC2 instances that the Elastic Load Balancing instance is managing traffic for.</p>
   */
  Ec2InstanceIds?: Array<string>;
}
