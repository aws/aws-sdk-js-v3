/**
 * <p>Represents a predefined metric that can be used for predictive scaling. </p>
 */
export interface _PredefinedLoadMetricSpecification {
  /**
   * <p>The metric type.</p>
   */
  PredefinedLoadMetricType:
    | "ASGTotalCPUUtilization"
    | "ASGTotalNetworkIn"
    | "ASGTotalNetworkOut"
    | "ALBTargetGroupRequestCount"
    | string;

  /**
   * <p>Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target group for an Application Load Balancer attached to the Auto Scaling group.</p> <p>The format is app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt;/targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt;, where:</p> <ul> <li> <p>app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN.</p> </li> <li> <p>targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.</p> </li> </ul>
   */
  ResourceLabel?: string;
}

export type _UnmarshalledPredefinedLoadMetricSpecification = _PredefinedLoadMetricSpecification;
