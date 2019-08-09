import { _Matcher, _UnmarshalledMatcher } from "./_Matcher";

/**
 * <p>Information about a target group.</p>
 */
export interface _TargetGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn?: string;

  /**
   * <p>The name of the target group.</p>
   */
  TargetGroupName?: string;

  /**
   * <p>The protocol to use for routing traffic to the targets.</p>
   */
  Protocol?: "HTTP" | "HTTPS" | "TCP" | "TLS" | "UDP" | "TCP_UDP" | string;

  /**
   * <p>The port on which the targets are listening.</p>
   */
  Port?: number;

  /**
   * <p>The ID of the VPC for the targets.</p>
   */
  VpcId?: string;

  /**
   * <p>The protocol to use to connect with the target.</p>
   */
  HealthCheckProtocol?:
    | "HTTP"
    | "HTTPS"
    | "TCP"
    | "TLS"
    | "UDP"
    | "TCP_UDP"
    | string;

  /**
   * <p>The port to use to connect with the target.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>Indicates whether health checks are enabled.</p>
   */
  HealthCheckEnabled?: boolean;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual target.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>The amount of time, in seconds, during which no response means a failed health check.</p>
   */
  HealthCheckTimeoutSeconds?: number;

  /**
   * <p>The number of consecutive health checks successes required before considering an unhealthy target healthy.</p>
   */
  HealthyThresholdCount?: number;

  /**
   * <p>The number of consecutive health check failures required before considering the target unhealthy.</p>
   */
  UnhealthyThresholdCount?: number;

  /**
   * <p>The destination for the health check request.</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The HTTP codes to use when checking for a successful response from a target.</p>
   */
  Matcher?: _Matcher;

  /**
   * <p>The Amazon Resource Names (ARN) of the load balancers that route traffic to this target group.</p>
   */
  LoadBalancerArns?: Array<string> | Iterable<string>;

  /**
   * <p>The type of target that you must specify when registering targets with this target group. The possible values are <code>instance</code> (targets are specified by instance ID) or <code>ip</code> (targets are specified by IP address).</p>
   */
  TargetType?: "instance" | "ip" | "lambda" | string;
}

export interface _UnmarshalledTargetGroup extends _TargetGroup {
  /**
   * <p>The HTTP codes to use when checking for a successful response from a target.</p>
   */
  Matcher?: _UnmarshalledMatcher;

  /**
   * <p>The Amazon Resource Names (ARN) of the load balancers that route traffic to this target group.</p>
   */
  LoadBalancerArns?: Array<string>;
}
