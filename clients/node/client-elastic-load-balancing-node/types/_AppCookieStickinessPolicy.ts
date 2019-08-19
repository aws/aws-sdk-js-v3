/**
 * <p>Information about a policy for application-controlled session stickiness.</p>
 */
export interface _AppCookieStickinessPolicy {
  /**
   * <p>The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.</p>
   */
  PolicyName?: string;

  /**
   * <p>The name of the application cookie used for stickiness.</p>
   */
  CookieName?: string;
}

export type _UnmarshalledAppCookieStickinessPolicy = _AppCookieStickinessPolicy;
