/**
 * <p>An endpoint information details.</p>
 */
export interface _Endpoint {
  /**
   * <p>IP address of the endpoint.</p>
   */
  Address: string;

  /**
   * <p>Endpoint cache time to live (TTL) value.</p>
   */
  CachePeriodInMinutes: number;
}

export type _UnmarshalledEndpoint = _Endpoint;
