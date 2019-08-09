/**
 * <p>Represents the information required for client programs to connect to the configuration endpoint for a DAX cluster, or to an individual node within the cluster.</p>
 */
export interface _Endpoint {
  /**
   * <p>The DNS hostname of the endpoint.</p>
   */
  Address?: string;

  /**
   * <p>The port number that applications should use to connect to the endpoint.</p>
   */
  Port?: number;
}

export type _UnmarshalledEndpoint = _Endpoint;
