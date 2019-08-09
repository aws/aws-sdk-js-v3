/**
 * <p>Describes an endpoint for a database.</p>
 */
export interface _RelationalDatabaseEndpoint {
  /**
   * <p>Specifies the port that the database is listening on.</p>
   */
  port?: number;

  /**
   * <p>Specifies the DNS address of the database.</p>
   */
  address?: string;
}

export type _UnmarshalledRelationalDatabaseEndpoint = _RelationalDatabaseEndpoint;
