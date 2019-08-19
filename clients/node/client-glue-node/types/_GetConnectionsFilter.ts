/**
 * <p>Filters the connection definitions that are returned by the <code>GetConnections</code> API operation.</p>
 */
export interface _GetConnectionsFilter {
  /**
   * <p>A criteria string that must match the criteria recorded in the connection definition for that connection definition to be returned.</p>
   */
  MatchCriteria?: Array<string> | Iterable<string>;

  /**
   * <p>The type of connections to return. Currently, only JDBC is supported; SFTP is not supported.</p>
   */
  ConnectionType?: "JDBC" | "SFTP" | string;
}

export interface _UnmarshalledGetConnectionsFilter
  extends _GetConnectionsFilter {
  /**
   * <p>A criteria string that must match the criteria recorded in the connection definition for that connection definition to be returned.</p>
   */
  MatchCriteria?: Array<string>;
}
