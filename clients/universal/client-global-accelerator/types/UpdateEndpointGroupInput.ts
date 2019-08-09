import { _EndpointConfiguration } from "./_EndpointConfiguration";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateEndpointGroupInput shape
 */
export interface UpdateEndpointGroupInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn: string;

  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointConfigurations?:
    | Array<_EndpointConfiguration>
    | Iterable<_EndpointConfiguration>;

  /**
   * <p>The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for this listener. </p> <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p> <p>The default value is 100.</p>
   */
  TrafficDialPercentage?: number;

  /**
   * <p>The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If the listener port is a list of ports, Global Accelerator uses the first port in the list.</p>
   */
  HealthCheckPort?: number;

  /**
   * <p>The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.</p>
   */
  HealthCheckProtocol?: "TCP" | "HTTP" | "HTTPS" | string;

  /**
   * <p>If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (/).</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.</p>
   */
  ThresholdCount?: number;

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
