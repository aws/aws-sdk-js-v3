import { _Listener, _UnmarshalledListener } from "./_Listener";

/**
 * <p>Describes the details of a LoadBalancer.</p>
 */
export interface _LoadBalancerDescription {
  /**
   * <p>The name of the LoadBalancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The domain name of the LoadBalancer.</p>
   */
  Domain?: string;

  /**
   * <p>A list of Listeners used by the LoadBalancer.</p>
   */
  Listeners?: Array<_Listener> | Iterable<_Listener>;
}

export interface _UnmarshalledLoadBalancerDescription
  extends _LoadBalancerDescription {
  /**
   * <p>A list of Listeners used by the LoadBalancer.</p>
   */
  Listeners?: Array<_UnmarshalledListener>;
}
