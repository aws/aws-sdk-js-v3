/**
 * <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p>
 */
export interface _PredefinedMetricSpecification {
  /**
   * <p>The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to Spot fleet requests and ECS services.</p>
   */
  PredefinedMetricType:
    | "DynamoDBReadCapacityUtilization"
    | "DynamoDBWriteCapacityUtilization"
    | "ALBRequestCountPerTarget"
    | "RDSReaderAverageCPUUtilization"
    | "RDSReaderAverageDatabaseConnections"
    | "EC2SpotFleetRequestAverageCPUUtilization"
    | "EC2SpotFleetRequestAverageNetworkIn"
    | "EC2SpotFleetRequestAverageNetworkOut"
    | "SageMakerVariantInvocationsPerInstance"
    | "ECSServiceAverageCPUUtilization"
    | "ECSServiceAverageMemoryUtilization"
    | string;

  /**
   * <p>Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target group attached to the Spot fleet request or ECS service.</p> <p>The format is app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt;/targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt;, where:</p> <ul> <li> <p>app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN</p> </li> <li> <p>targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.</p> </li> </ul>
   */
  ResourceLabel?: string;
}

export type _UnmarshalledPredefinedMetricSpecification = _PredefinedMetricSpecification;
