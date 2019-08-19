import { _Matcher } from "./_Matcher";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTargetGroupInput shape
 */
export interface CreateTargetGroupInput {
  /**
   * <p>The name of the target group.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.</p>
   */
  Name: string;

  /**
   * <p>The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, or TCP_UDP. A TCP_UDP listener must be associated with a TCP_UDP target group. If the target is a Lambda function, this parameter does not apply.</p>
   */
  Protocol?: "HTTP" | "HTTPS" | "TCP" | "TLS" | "UDP" | "TCP_UDP" | string;

  /**
   * <p>The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply.</p>
   */
  Port?: number;

  /**
   * <p>The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply.</p>
   */
  VpcId?: string;

  /**
   * <p>The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers, the default is TCP. The TCP protocol is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The TLS, UDP, and TCP_UDP protocols are not supported for health checks.</p>
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
   * <p>The port the load balancer uses when performing health checks on targets. The default is <code>traffic-port</code>, which is the port on which each target receives traffic from the load balancer.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>Indicates whether health checks are enabled. If the target type is <code>lambda</code>, health checks are disabled by default but can be enabled. If the target type is <code>instance</code> or <code>ip</code>, health checks are always enabled and cannot be disabled.</p>
   */
  HealthCheckEnabled?: boolean;

  /**
   * <p>[HTTP/HTTPS health checks] The ping path that is the destination on the targets for health checks. The default is /.</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual target. For HTTP and HTTPS health checks, the range is 5–300 seconds. For TCP health checks, the supported values are 10 and 30 seconds. If the target type is <code>instance</code> or <code>ip</code>, the default is 30 seconds. If the target type is <code>lambda</code>, the default is 35 seconds.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>The amount of time, in seconds, during which no response from a target means a failed health check. For target groups with a protocol of HTTP or HTTPS, the default is 5 seconds. For target groups with a protocol of TCP or TLS, this value must be 6 seconds for HTTP health checks and 10 seconds for TCP and HTTPS health checks. If the target type is <code>lambda</code>, the default is 30 seconds.</p>
   */
  HealthCheckTimeoutSeconds?: number;

  /**
   * <p>The number of consecutive health checks successes required before considering an unhealthy target healthy. For target groups with a protocol of HTTP or HTTPS, the default is 5. For target groups with a protocol of TCP or TLS, the default is 3. If the target type is <code>lambda</code>, the default is 5.</p>
   */
  HealthyThresholdCount?: number;

  /**
   * <p>The number of consecutive health check failures required before considering a target unhealthy. For target groups with a protocol of HTTP or HTTPS, the default is 2. For target groups with a protocol of TCP or TLS, this value must be the same as the healthy threshold count. If the target type is <code>lambda</code>, the default is 2.</p>
   */
  UnhealthyThresholdCount?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful response from a target.</p>
   */
  Matcher?: _Matcher;

  /**
   * <p>The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.</p> <ul> <li> <p> <code>instance</code> - Targets are specified by instance ID. This is the default value. If the target group protocol is UDP or TCP_UDP, the target type must be <code>instance</code>.</p> </li> <li> <p> <code>ip</code> - Targets are specified by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.</p> </li> <li> <p> <code>lambda</code> - The target groups contains a single Lambda function.</p> </li> </ul>
   */
  TargetType?: "instance" | "ip" | "lambda" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
