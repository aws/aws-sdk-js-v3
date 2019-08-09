/**
 * <p>A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p>
 */
export interface _CorsRule {
  /**
   * <p>One or more response headers that you want users to be able to access from their applications (for example, from a JavaScript <code>XMLHttpRequest</code> object).</p> <p>Each CORS rule must have at least one <code>AllowedOrigins</code> element. The string value can include only one wildcard character (*), for example, http://*.example.com. Additionally, you can specify only one wildcard character to allow cross-origin access for all origins.</p>
   */
  AllowedOrigins: Array<string> | Iterable<string>;

  /**
   * <p>Identifies an HTTP method that the origin that is specified in the rule is allowed to execute.</p> <p>Each CORS rule must contain at least one <code>AllowedMethods</code> and one <code>AllowedOrigins</code> element.</p>
   */
  AllowedMethods?:
    | Array<"PUT" | "GET" | "DELETE" | "HEAD" | string>
    | Iterable<"PUT" | "GET" | "DELETE" | "HEAD" | string>;

  /**
   * <p>Specifies which headers are allowed in a preflight <code>OPTIONS</code> request through the <code>Access-Control-Request-Headers</code> header. Each header name that is specified in <code>Access-Control-Request-Headers</code> must have a corresponding entry in the rule. Only the headers that were requested are sent back. </p> <p>This element can contain only one wildcard character (*).</p>
   */
  AllowedHeaders: Array<string> | Iterable<string>;

  /**
   * <p>The time in seconds that your browser caches the preflight response for the specified resource.</p> <p>A CORS rule can have only one <code>MaxAgeSeconds</code> element.</p>
   */
  MaxAgeSeconds?: number;

  /**
   * <p>One or more headers in the response that you want users to be able to access from their applications (for example, from a JavaScript <code>XMLHttpRequest</code> object).</p> <p>This element is optional for each rule.</p>
   */
  ExposeHeaders?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCorsRule extends _CorsRule {
  /**
   * <p>One or more response headers that you want users to be able to access from their applications (for example, from a JavaScript <code>XMLHttpRequest</code> object).</p> <p>Each CORS rule must have at least one <code>AllowedOrigins</code> element. The string value can include only one wildcard character (*), for example, http://*.example.com. Additionally, you can specify only one wildcard character to allow cross-origin access for all origins.</p>
   */
  AllowedOrigins: Array<string>;

  /**
   * <p>Identifies an HTTP method that the origin that is specified in the rule is allowed to execute.</p> <p>Each CORS rule must contain at least one <code>AllowedMethods</code> and one <code>AllowedOrigins</code> element.</p>
   */
  AllowedMethods?: Array<"PUT" | "GET" | "DELETE" | "HEAD" | string>;

  /**
   * <p>Specifies which headers are allowed in a preflight <code>OPTIONS</code> request through the <code>Access-Control-Request-Headers</code> header. Each header name that is specified in <code>Access-Control-Request-Headers</code> must have a corresponding entry in the rule. Only the headers that were requested are sent back. </p> <p>This element can contain only one wildcard character (*).</p>
   */
  AllowedHeaders: Array<string>;

  /**
   * <p>One or more headers in the response that you want users to be able to access from their applications (for example, from a JavaScript <code>XMLHttpRequest</code> object).</p> <p>This element is optional for each rule.</p>
   */
  ExposeHeaders?: Array<string>;
}
