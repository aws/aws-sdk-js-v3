import { _CookieNames, _UnmarshalledCookieNames } from "./_CookieNames";

/**
 * <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface _CookiePreference {
  /**
   * <p>Specifies which cookies to forward to the origin for this cache behavior: all, none, or the list of cookies specified in the <code>WhitelistedNames</code> complex type.</p> <p>Amazon S3 doesn't process cookies. When the cache behavior is forwarding requests to an Amazon S3 origin, specify none for the <code>Forward</code> element. </p>
   */
  Forward: "none" | "whitelist" | "all" | string;

  /**
   * <p>Required if you specify <code>whitelist</code> for the value of <code>Forward:</code>. A complex type that specifies how many different cookies you want CloudFront to forward to the origin for this cache behavior and, if you want to forward selected cookies, the names of those cookies.</p> <p>If you specify <code>all</code> or none for the value of <code>Forward</code>, omit <code>WhitelistedNames</code>. If you change the value of <code>Forward</code> from <code>whitelist</code> to all or none and you don't delete the <code>WhitelistedNames</code> element and its child elements, CloudFront deletes them automatically.</p> <p>For the current limit on the number of cookie names that you can whitelist for each cache behavior, see <a href="https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront"> CloudFront Limits</a> in the <i>AWS General Reference</i>.</p>
   */
  WhitelistedNames?: _CookieNames;
}

export interface _UnmarshalledCookiePreference extends _CookiePreference {
  /**
   * <p>Required if you specify <code>whitelist</code> for the value of <code>Forward:</code>. A complex type that specifies how many different cookies you want CloudFront to forward to the origin for this cache behavior and, if you want to forward selected cookies, the names of those cookies.</p> <p>If you specify <code>all</code> or none for the value of <code>Forward</code>, omit <code>WhitelistedNames</code>. If you change the value of <code>Forward</code> from <code>whitelist</code> to all or none and you don't delete the <code>WhitelistedNames</code> element and its child elements, CloudFront deletes them automatically.</p> <p>For the current limit on the number of cookie names that you can whitelist for each cache behavior, see <a href="https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront"> CloudFront Limits</a> in the <i>AWS General Reference</i>.</p>
   */
  WhitelistedNames?: _UnmarshalledCookieNames;
}
