import {
  _AppCookieStickinessPolicy,
  _UnmarshalledAppCookieStickinessPolicy
} from "./_AppCookieStickinessPolicy";
import {
  _LBCookieStickinessPolicy,
  _UnmarshalledLBCookieStickinessPolicy
} from "./_LBCookieStickinessPolicy";

/**
 * <p>The policies for a load balancer.</p>
 */
export interface _Policies {
  /**
   * <p>The stickiness policies created using <a>CreateAppCookieStickinessPolicy</a>.</p>
   */
  AppCookieStickinessPolicies?:
    | Array<_AppCookieStickinessPolicy>
    | Iterable<_AppCookieStickinessPolicy>;

  /**
   * <p>The stickiness policies created using <a>CreateLBCookieStickinessPolicy</a>.</p>
   */
  LBCookieStickinessPolicies?:
    | Array<_LBCookieStickinessPolicy>
    | Iterable<_LBCookieStickinessPolicy>;

  /**
   * <p>The policies other than the stickiness policies.</p>
   */
  OtherPolicies?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPolicies extends _Policies {
  /**
   * <p>The stickiness policies created using <a>CreateAppCookieStickinessPolicy</a>.</p>
   */
  AppCookieStickinessPolicies?: Array<_UnmarshalledAppCookieStickinessPolicy>;

  /**
   * <p>The stickiness policies created using <a>CreateLBCookieStickinessPolicy</a>.</p>
   */
  LBCookieStickinessPolicies?: Array<_UnmarshalledLBCookieStickinessPolicy>;

  /**
   * <p>The policies other than the stickiness policies.</p>
   */
  OtherPolicies?: Array<string>;
}
