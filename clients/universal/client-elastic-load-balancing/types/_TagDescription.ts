import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The tags associated with a load balancer.</p>
 */
export interface _TagDescription {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTagDescription extends _TagDescription {
  /**
   * <p>The tags.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
