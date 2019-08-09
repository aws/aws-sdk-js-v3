/**
 * <p>Information about an Elastic Load Balancing resource limit for your AWS account.</p>
 */
export interface _Limit {
  /**
   * <p>The name of the limit. The possible values are:</p> <ul> <li> <p>classic-listeners</p> </li> <li> <p>classic-load-balancers</p> </li> <li> <p>classic-registered-instances</p> </li> </ul>
   */
  Name?: string;

  /**
   * <p>The maximum value of the limit.</p>
   */
  Max?: string;
}

export type _UnmarshalledLimit = _Limit;
