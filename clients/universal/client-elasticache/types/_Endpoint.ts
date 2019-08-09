/**
 * <p>Represents the information required for client programs to connect to a cache node.</p>
 */
export interface _Endpoint {
  /**
   * <p>The DNS hostname of the cache node.</p>
   */
  Address?: string;

  /**
   * <p>The port number that the cache engine is listening on.</p>
   */
  Port?: number;
}

export type _UnmarshalledEndpoint = _Endpoint;
