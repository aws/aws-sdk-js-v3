/**
 * <p>Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy.</p>
 */
export interface _PredefinedScalingMetricSpecification {
  /**
   * <p>The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.</p>
   */
  PredefinedScalingMetricType:
    | "ASGAverageCPUUtilization"
    | "ASGAverageNetworkIn"
    | "ASGAverageNetworkOut"
    | "DynamoDBReadCapacityUtilization"
    | "DynamoDBWriteCapacityUtilization"
    | "ECSServiceAverageCPUUtilization"
    | "ECSServiceAverageMemoryUtilization"
    | "ALBRequestCountPerTarget"
    | "RDSReaderAverageCPUUtilization"
    | "RDSReaderAverageDatabaseConnections"
    | "EC2SpotFleetRequestAverageCPUUtilization"
    | "EC2SpotFleetRequestAverageNetworkIn"
    | "EC2SpotFleetRequestAverageNetworkOut"
    | string;

  /**
   * <p>Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.</p> <p>The format is app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt;/targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt;, where:</p> <ul> <li> <p>app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN.</p> </li> <li> <p>targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.</p> </li> </ul>
   */
  ResourceLabel?: string;
}

export type _UnmarshalledPredefinedScalingMetricSpecification = _PredefinedScalingMetricSpecification;
