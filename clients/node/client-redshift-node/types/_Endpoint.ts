/**
 * <p>Describes a connection endpoint.</p>
 */
export interface _Endpoint {
  /**
   * <p>The DNS address of the Cluster.</p>
   */
  Address?: string;

  /**
   * <p>The port that the database engine is listening on.</p>
   */
  Port?: number;
}

export type _UnmarshalledEndpoint = _Endpoint;
