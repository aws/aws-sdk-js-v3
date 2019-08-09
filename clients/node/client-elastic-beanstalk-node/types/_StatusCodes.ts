/**
 * <p>Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>.</p>
 */
export interface _StatusCodes {
  /**
   * <p>The percentage of requests over the last 10 seconds that resulted in a 2xx (200, 201, etc.) status code.</p>
   */
  Status2xx?: number;

  /**
   * <p>The percentage of requests over the last 10 seconds that resulted in a 3xx (300, 301, etc.) status code.</p>
   */
  Status3xx?: number;

  /**
   * <p>The percentage of requests over the last 10 seconds that resulted in a 4xx (400, 401, etc.) status code.</p>
   */
  Status4xx?: number;

  /**
   * <p>The percentage of requests over the last 10 seconds that resulted in a 5xx (500, 501, etc.) status code.</p>
   */
  Status5xx?: number;
}

export type _UnmarshalledStatusCodes = _StatusCodes;
