import { _Server, _UnmarshalledServer } from "./_Server";
import {
  _ServerReplicationParameters,
  _UnmarshalledServerReplicationParameters
} from "./_ServerReplicationParameters";

/**
 * <p>Replication configuration of a server.</p>
 */
export interface _ServerReplicationConfiguration {
  /**
   * <p>Identifier of the server this replication configuration is associated with.</p>
   */
  server?: _Server;

  /**
   * <p>Parameters for replicating the server.</p>
   */
  serverReplicationParameters?: _ServerReplicationParameters;
}

export interface _UnmarshalledServerReplicationConfiguration
  extends _ServerReplicationConfiguration {
  /**
   * <p>Identifier of the server this replication configuration is associated with.</p>
   */
  server?: _UnmarshalledServer;

  /**
   * <p>Parameters for replicating the server.</p>
   */
  serverReplicationParameters?: _UnmarshalledServerReplicationParameters;
}
