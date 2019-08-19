/**
 * <p>Network information for accessing a DB cluster or DB instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources.</p>
 */
export interface _Endpoint {
  /**
   * <p>Specifies the DNS address of the DB instance.</p>
   */
  Address?: string;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;
}

export type _UnmarshalledEndpoint = _Endpoint;
