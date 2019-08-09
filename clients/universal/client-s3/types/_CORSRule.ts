/**
 * <p>Specifies a cross-origin access rule for an Amazon S3 bucket.</p>
 */
export interface _CORSRule {
  /**
   * <p>Headers that are specified in the <code>Access-Control-Request-Headers</code> header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed.</p>
   */
  AllowedHeaders?: Array<string> | Iterable<string>;

  /**
   * <p>An HTTP method that you allow the origin to execute. Valid values are <code>GET</code>, <code>PUT</code>, <code>HEAD</code>, <code>POST</code>, and <code>DELETE</code>.</p>
   */
  AllowedMethods: Array<string> | Iterable<string>;

  /**
   * <p>One or more origins you want customers to be able to access the bucket from.</p>
   */
  AllowedOrigins: Array<string> | Iterable<string>;

  /**
   * <p>One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript <code>XMLHttpRequest</code> object).</p>
   */
  ExposeHeaders?: Array<string> | Iterable<string>;

  /**
   * <p>The time in seconds that your browser is to cache the preflight response for the specified resource.</p>
   */
  MaxAgeSeconds?: number;
}

export interface _UnmarshalledCORSRule extends _CORSRule {
  /**
   * <p>Headers that are specified in the <code>Access-Control-Request-Headers</code> header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed.</p>
   */
  AllowedHeaders?: Array<string>;

  /**
   * <p>An HTTP method that you allow the origin to execute. Valid values are <code>GET</code>, <code>PUT</code>, <code>HEAD</code>, <code>POST</code>, and <code>DELETE</code>.</p>
   */
  AllowedMethods: Array<string>;

  /**
   * <p>One or more origins you want customers to be able to access the bucket from.</p>
   */
  AllowedOrigins: Array<string>;

  /**
   * <p>One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript <code>XMLHttpRequest</code> object).</p>
   */
  ExposeHeaders?: Array<string>;
}
