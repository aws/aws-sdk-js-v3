import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a Traffic Mirror target.</p>
 */
export interface _TrafficMirrorTarget {
  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The network interface ID that is attached to the target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer.</p>
   */
  NetworkLoadBalancerArn?: string;

  /**
   * <p>The type of Traffic Mirror target.</p>
   */
  Type?: "network-interface" | "network-load-balancer" | string;

  /**
   * <p>Information about the Traffic Mirror target.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the account that owns the Traffic Mirror target.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror target.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTrafficMirrorTarget extends _TrafficMirrorTarget {
  /**
   * <p>The tags assigned to the Traffic Mirror target.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
