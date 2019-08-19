/**
 * <p>Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.</p>
 */
export interface _PredefinedMetricSpecification {
  /**
   * <p>The metric type.</p>
   */
  PredefinedMetricType:
    | "ASGAverageCPUUtilization"
    | "ASGAverageNetworkIn"
    | "ASGAverageNetworkOut"
    | "ALBRequestCountPerTarget"
    | string;

  /**
   * <p>Identifies the resource associated with the metric type. The following predefined metrics are available:</p> <ul> <li> <p> <code>ASGAverageCPUUtilization</code> - Average CPU utilization of the Auto Scaling group.</p> </li> <li> <p> <code>ASGAverageNetworkIn</code> - Average number of bytes received on all network interfaces by the Auto Scaling group.</p> </li> <li> <p> <code>ASGAverageNetworkOut</code> - Average number of bytes sent out on all network interfaces by the Auto Scaling group.</p> </li> <li> <p> <code>ALBRequestCountPerTarget</code> - Number of requests completed per target in an Application Load Balancer target group.</p> </li> </ul> <p>For predefined metric types <code>ASGAverageCPUUtilization</code>, <code>ASGAverageNetworkIn</code>, and <code>ASGAverageNetworkOut</code>, the parameter must not be specified as the resource associated with the metric type is the Auto Scaling group. For predefined metric type <code>ALBRequestCountPerTarget</code>, the parameter must be specified in the format: <code>app/<i>load-balancer-name</i>/<i>load-balancer-id</i>/targetgroup/<i>target-group-name</i>/<i>target-group-id</i> </code>, where <code>app/<i>load-balancer-name</i>/<i>load-balancer-id</i> </code> is the final portion of the load balancer ARN, and <code>targetgroup/<i>target-group-name</i>/<i>target-group-id</i> </code> is the final portion of the target group ARN. The target group must be attached to the Auto Scaling group.</p>
   */
  ResourceLabel?: string;
}

export type _UnmarshalledPredefinedMetricSpecification = _PredefinedMetricSpecification;
