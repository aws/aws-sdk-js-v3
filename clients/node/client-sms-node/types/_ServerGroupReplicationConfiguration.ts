import {
  _ServerReplicationConfiguration,
  _UnmarshalledServerReplicationConfiguration
} from "./_ServerReplicationConfiguration";

/**
 * <p>Replication configuration for a server group.</p>
 */
export interface _ServerGroupReplicationConfiguration {
  /**
   * <p>Identifier of the server group this replication configuration is associated with.</p>
   */
  serverGroupId?: string;

  /**
   * <p>Replication configuration for servers in the server group.</p>
   */
  serverReplicationConfigurations?:
    | Array<_ServerReplicationConfiguration>
    | Iterable<_ServerReplicationConfiguration>;
}

export interface _UnmarshalledServerGroupReplicationConfiguration
  extends _ServerGroupReplicationConfiguration {
  /**
   * <p>Replication configuration for servers in the server group.</p>
   */
  serverReplicationConfigurations?: Array<
    _UnmarshalledServerReplicationConfiguration
  >;
}
