/**
 * <p>Information about an Elastic Load Balancing resource limit for your AWS account.</p>
 */
export interface _Limit {
  /**
   * <p>The name of the limit. The possible values are:</p> <ul> <li> <p>application-load-balancers</p> </li> <li> <p>listeners-per-application-load-balancer</p> </li> <li> <p>listeners-per-network-load-balancer</p> </li> <li> <p>network-load-balancers</p> </li> <li> <p>rules-per-application-load-balancer</p> </li> <li> <p>target-groups</p> </li> <li> <p>targets-per-application-load-balancer</p> </li> <li> <p>targets-per-availability-zone-per-network-load-balancer</p> </li> <li> <p>targets-per-network-load-balancer</p> </li> </ul>
   */
  Name?: string;

  /**
   * <p>The maximum value of the limit.</p>
   */
  Max?: string;
}

export type _UnmarshalledLimit = _Limit;
