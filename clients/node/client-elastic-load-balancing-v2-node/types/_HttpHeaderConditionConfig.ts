/**
 * <p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>
 */
export interface _HttpHeaderConditionConfig {
  /**
   * <p>The name of the HTTP header field. The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.</p> <p>You can't use an HTTP header condition to specify the host header. Use <a>HostHeaderConditionConfig</a> to specify a host header condition.</p>
   */
  HttpHeaderName?: string;

  /**
   * <p>One or more strings to compare against the value of the HTTP header. The maximum size of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).</p> <p>If the same header appears multiple times in the request, we search them in order until a match is found.</p> <p>If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledHttpHeaderConditionConfig
  extends _HttpHeaderConditionConfig {
  /**
   * <p>One or more strings to compare against the value of the HTTP header. The maximum size of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).</p> <p>If the same header appears multiple times in the request, we search them in order until a match is found.</p> <p>If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.</p>
   */
  Values?: Array<string>;
}
