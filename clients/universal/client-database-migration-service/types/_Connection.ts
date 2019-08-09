/**
 * <p/>
 */
export interface _Connection {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The connection status.</p>
   */
  Status?: string;

  /**
   * <p>The error message when the connection last failed.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>The identifier of the endpoint. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase string.</p>
   */
  ReplicationInstanceIdentifier?: string;
}

export type _UnmarshalledConnection = _Connection;
