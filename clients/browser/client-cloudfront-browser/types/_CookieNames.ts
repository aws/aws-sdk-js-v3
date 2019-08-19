/**
 * <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"> Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface _CookieNames {
  /**
   * <p>The number of different cookies that you want CloudFront to forward to the origin for this cache behavior.</p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains one <code>Name</code> element for each cookie that you want CloudFront to forward to the origin for this cache behavior.</p>
   */
  Items?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCookieNames extends _CookieNames {
  /**
   * <p>A complex type that contains one <code>Name</code> element for each cookie that you want CloudFront to forward to the origin for this cache behavior.</p>
   */
  Items?: Array<string>;
}
