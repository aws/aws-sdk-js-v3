/**
 * <p>Information about a policy for duration-based session stickiness.</p>
 */
export interface _LBCookieStickinessPolicy {
  /**
   * <p>The name of the policy. This name must be unique within the set of policies for this load balancer.</p>
   */
  PolicyName?: string;

  /**
   * <p>The time period, in seconds, after which the cookie should be considered stale. If this parameter is not specified, the stickiness session lasts for the duration of the browser session.</p>
   */
  CookieExpirationPeriod?: number;
}

export type _UnmarshalledLBCookieStickinessPolicy = _LBCookieStickinessPolicy;
