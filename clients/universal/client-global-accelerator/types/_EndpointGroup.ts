import {
  _EndpointDescription,
  _UnmarshalledEndpointDescription
} from "./_EndpointDescription";

/**
 * <p>A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. </p>
 */
export interface _EndpointGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint group.</p>
   */
  EndpointGroupArn?: string;

  /**
   * <p>The AWS Region that this endpoint group belongs.</p>
   */
  EndpointGroupRegion?: string;

  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointDescriptions?:
    | Array<_EndpointDescription>
    | Iterable<_EndpointDescription>;

  /**
   * <p>The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for this listener. </p> <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p> <p>The default value is 100.</p>
   */
  TrafficDialPercentage?: number;

  /**
   * <p>The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. </p> <p>The default port is the port for the listener that this endpoint group is associated with. If the listener port is a list, Global Accelerator uses the first specified port in the list of ports.</p>
   */
  HealthCheckPort?: number;

  /**
   * <p>The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default value is TCP.</p>
   */
  HealthCheckProtocol?: "TCP" | "HTTP" | "HTTPS" | string;

  /**
   * <p>If the protocol is HTTP/S, then this value provides the ping path that Global Accelerator uses for the destination on the endpoints for health checks. The default is slash (/).</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The time—10 seconds or 30 seconds—between health checks for each endpoint. The default value is 30.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.</p>
   */
  ThresholdCount?: number;
}

export interface _UnmarshalledEndpointGroup extends _EndpointGroup {
  /**
   * <p>The list of endpoint objects.</p>
   */
  EndpointDescriptions?: Array<_UnmarshalledEndpointDescription>;
}
