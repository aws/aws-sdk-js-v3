/**
 * <p>Specifies where in a web request to look for <code>TargetString</code>.</p>
 */
export interface _FieldToMatch {
  /**
   * <p>The part of the web request that you want AWS WAF to search for a specified string. Parts of a request that you can search include the following:</p> <ul> <li> <p> <code>HEADER</code>: A specified request header, for example, the value of the <code>User-Agent</code> or <code>Referer</code> header. If you choose <code>HEADER</code> for the type, specify the name of the header in <code>Data</code>.</p> </li> <li> <p> <code>METHOD</code>: The HTTP method, which indicated the type of operation that the request is asking the origin to perform. Amazon CloudFront supports the following methods: <code>DELETE</code>, <code>GET</code>, <code>HEAD</code>, <code>OPTIONS</code>, <code>PATCH</code>, <code>POST</code>, and <code>PUT</code>.</p> </li> <li> <p> <code>QUERY_STRING</code>: A query string, which is the part of a URL that appears after a <code>?</code> character, if any.</p> </li> <li> <p> <code>URI</code>: The part of a web request that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.</p> </li> <li> <p> <code>BODY</code>: The part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. The request body immediately follows the request headers. Note that only the first <code>8192</code> bytes of the request body are forwarded to AWS WAF for inspection. To allow or block requests based on the length of the body, you can create a size constraint set. For more information, see <a>CreateSizeConstraintSet</a>. </p> </li> <li> <p> <code>SINGLE_QUERY_ARG</code>: The parameter in the query string that you will inspect, such as <i>UserName</i> or <i>SalesRegion</i>. The maximum length for <code>SINGLE_QUERY_ARG</code> is 30 characters.</p> </li> <li> <p> <code>ALL_QUERY_ARGS</code>: Similar to <code>SINGLE_QUERY_ARG</code>, but rather than inspecting a single parameter, AWS WAF will inspect all parameters within the query for the value or regex pattern that you specify in <code>TargetString</code>.</p> </li> </ul>
   */
  Type:
    | "URI"
    | "QUERY_STRING"
    | "HEADER"
    | "METHOD"
    | "BODY"
    | "SINGLE_QUERY_ARG"
    | "ALL_QUERY_ARGS"
    | string;

  /**
   * <p>When the value of <code>Type</code> is <code>HEADER</code>, enter the name of the header that you want AWS WAF to search, for example, <code>User-Agent</code> or <code>Referer</code>. The name of the header is not case sensitive.</p> <p>When the value of <code>Type</code> is <code>SINGLE_QUERY_ARG</code>, enter the name of the parameter that you want AWS WAF to search, for example, <code>UserName</code> or <code>SalesRegion</code>. The parameter name is not case sensitive.</p> <p>If the value of <code>Type</code> is any other value, omit <code>Data</code>.</p>
   */
  Data?: string;
}

export type _UnmarshalledFieldToMatch = _FieldToMatch;
