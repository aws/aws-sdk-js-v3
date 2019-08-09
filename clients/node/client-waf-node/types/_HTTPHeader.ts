/**
 * <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPHeader</code> complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests that were returned by <code>GetSampledRequests</code>. </p>
 */
export interface _HTTPHeader {
  /**
   * <p>The name of one of the headers in the sampled web request.</p>
   */
  Name?: string;

  /**
   * <p>The value of one of the headers in the sampled web request.</p>
   */
  Value?: string;
}

export type _UnmarshalledHTTPHeader = _HTTPHeader;
