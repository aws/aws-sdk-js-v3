/**
 * <p>Information about an HTTP request.</p>
 */
export interface _Http {
  /**
   * <p>The request URL.</p>
   */
  HttpURL?: string;

  /**
   * <p>The response status.</p>
   */
  HttpStatus?: number;

  /**
   * <p>The request method.</p>
   */
  HttpMethod?: string;

  /**
   * <p>The request's user agent string.</p>
   */
  UserAgent?: string;

  /**
   * <p>The IP address of the requestor.</p>
   */
  ClientIp?: string;
}

export type _UnmarshalledHttp = _Http;
