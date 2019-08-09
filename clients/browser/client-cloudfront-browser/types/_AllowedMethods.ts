import { _CachedMethods, _UnmarshalledCachedMethods } from "./_CachedMethods";

/**
 * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>
 */
export interface _AllowedMethods {
  /**
   * <p>The number of HTTP methods that you want CloudFront to forward to your origin. Valid values are 2 (for <code>GET</code> and <code>HEAD</code> requests), 3 (for <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests) and 7 (for <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests).</p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to process and forward to your origin.</p>
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

  /**
   * <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p>
   */
  CachedMethods?: _CachedMethods;
}

export interface _UnmarshalledAllowedMethods extends _AllowedMethods {
  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to process and forward to your origin.</p>
   */
  Items: Array<
    "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "OPTIONS" | "DELETE" | string
  >;

  /**
   * <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p>
   */
  CachedMethods?: _UnmarshalledCachedMethods;
}
