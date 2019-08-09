import { _Matcher } from "./_Matcher";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyTargetGroupInput shape
 */
export interface ModifyTargetGroupInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string;

  /**
   * <p>The protocol the load balancer uses when performing health checks on targets. The TCP protocol is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The TLS, UDP, and TCP_UDP protocols are not supported for health checks.</p> <p>If the protocol of the target group is TCP, you can't modify this setting.</p>
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
   * <p>The port the load balancer uses when performing health checks on targets.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>[HTTP/HTTPS health checks] The ping path that is the destination for the health check request.</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>Indicates whether health checks are enabled.</p>
   */
  HealthCheckEnabled?: boolean;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual target. For Application Load Balancers, the range is 5 to 300 seconds. For Network Load Balancers, the supported values are 10 or 30 seconds.</p> <p>If the protocol of the target group is TCP, you can't modify this setting.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means a failed health check.</p> <p>If the protocol of the target group is TCP, you can't modify this setting.</p>
   */
  HealthCheckTimeoutSeconds?: number;

  /**
   * <p>The number of consecutive health checks successes required before considering an unhealthy target healthy.</p>
   */
  HealthyThresholdCount?: number;

  /**
   * <p>The number of consecutive health check failures required before considering the target unhealthy. For Network Load Balancers, this value must be the same as the healthy threshold count.</p>
   */
  UnhealthyThresholdCount?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful response from a target.</p> <p>If the protocol of the target group is TCP, you can't modify this setting.</p>
   */
  Matcher?: _Matcher;

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
