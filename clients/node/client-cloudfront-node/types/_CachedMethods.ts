/**
 * <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p>
 */
export interface _CachedMethods {
  /**
   * <p>The number of HTTP methods for which you want CloudFront to cache responses. Valid values are <code>2</code> (for caching responses to <code>GET</code> and <code>HEAD</code> requests) and <code>3</code> (for caching responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests).</p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to cache responses to.</p>
   */
  Items:
    | Array<
        | "GET"
        | "HEAD"
        | "POST"
        | "PUT"
        | "PATCH"
        | "OPTIONS"
        | "DELETE"
        | string
      >
    | Iterable<
        | "GET"
        | "HEAD"
        | "POST"
        | "PUT"
        | "PATCH"
        | "OPTIONS"
        | "DELETE"
        | string
      >;
}

export interface _UnmarshalledCachedMethods extends _CachedMethods {
  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to cache responses to.</p>
   */
  Items: Array<
    "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "OPTIONS" | "DELETE" | string
  >;
}
