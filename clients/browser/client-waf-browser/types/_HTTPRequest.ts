import { _HTTPHeader, _UnmarshalledHTTPHeader } from "./_HTTPHeader";

/**
 * <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. </p>
 */
export interface _HTTPRequest {
  /**
   * <p>The IP address that the request originated from. If the <code>WebACL</code> is associated with a CloudFront distribution, this is the value of one of the following fields in CloudFront access logs:</p> <ul> <li> <p> <code>c-ip</code>, if the viewer did not use an HTTP proxy or a load balancer to send the request</p> </li> <li> <p> <code>x-forwarded-for</code>, if the viewer did use an HTTP proxy or a load balancer to send the request</p> </li> </ul>
   */
  ClientIP?: string;

  /**
   * <p>The two-letter country code for the country that the request originated from. For a current list of country codes, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a>.</p>
   */
  Country?: string;

  /**
   * <p>The part of a web request that identifies the resource, for example, <code>/images/daily-ad.jpg</code>.</p>
   */
  URI?: string;

  /**
   * <p>The HTTP method specified in the sampled web request. CloudFront supports the following methods: <code>DELETE</code>, <code>GET</code>, <code>HEAD</code>, <code>OPTIONS</code>, <code>PATCH</code>, <code>POST</code>, and <code>PUT</code>. </p>
   */
  Method?: string;

  /**
   * <p>The HTTP version specified in the sampled web request, for example, <code>HTTP/1.1</code>.</p>
   */
  HTTPVersion?: string;

  /**
   * <p>A complex type that contains two values for each header in the sampled web request: the name of the header and the value of the header.</p>
   */
  Headers?: Array<_HTTPHeader> | Iterable<_HTTPHeader>;
}

export interface _UnmarshalledHTTPRequest extends _HTTPRequest {
  /**
   * <p>A complex type that contains two values for each header in the sampled web request: the name of the header and the value of the header.</p>
   */
  Headers?: Array<_UnmarshalledHTTPHeader>;
}
