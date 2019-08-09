/**
 * <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior. </p>
 */
export interface _QueryStringCacheKeys {
  /**
   * <p>The number of <code>whitelisted</code> query string parameters for a cache behavior.</p>
   */
  Quantity: number;

  /**
   * <p>A list that contains the query string parameters that you want CloudFront to use as a basis for caching for a cache behavior. If <code>Quantity</code> is 0, you can omit <code>Items</code>. </p>
   */
  Items?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledQueryStringCacheKeys
  extends _QueryStringCacheKeys {
  /**
   * <p>A list that contains the query string parameters that you want CloudFront to use as a basis for caching for a cache behavior. If <code>Quantity</code> is 0, you can omit <code>Items</code>. </p>
   */
  Items?: Array<string>;
}
