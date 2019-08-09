/**
 * <p>Information about a target.</p>
 */
export interface _TargetDescription {
  /**
   * <p>The ID of the target. If the target type of the target group is <code>instance</code>, specify an instance ID. If the target type is <code>ip</code>, specify an IP address. If the target type is <code>lambda</code>, specify the ARN of the Lambda function.</p>
   */
  Id: string;

  /**
   * <p>The port on which the target is listening.</p>
   */
  Port?: number;

  /**
   * <p>An Availability Zone or <code>all</code>. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.</p> <p>This parameter is not supported if the target type of the target group is <code>instance</code>.</p> <p>If the target type is <code>ip</code> and the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required.</p> <p>With an Application Load Balancer, if the target type is <code>ip</code> and the IP address is outside the VPC for the target group, the only supported value is <code>all</code>.</p> <p>If the target type is <code>lambda</code>, this parameter is optional and the only supported value is <code>all</code>.</p>
   */
  AvailabilityZone?: string;
}

export type _UnmarshalledTargetDescription = _TargetDescription;
