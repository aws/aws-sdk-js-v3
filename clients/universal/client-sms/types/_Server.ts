import { _VmServer, _UnmarshalledVmServer } from "./_VmServer";

/**
 * <p>Represents a server.</p>
 */
export interface _Server {
  /**
   * <p>The identifier of the server.</p>
   */
  serverId?: string;

  /**
   * <p>The type of server.</p>
   */
  serverType?: "VIRTUAL_MACHINE" | string;

  /**
   * <p>Information about the VM server.</p>
   */
  vmServer?: _VmServer;

  /**
   * <p>The identifier of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * <p>Indicates whether the replication job is deleted or failed.</p>
   */
  replicationJobTerminated?: boolean;
}

export interface _UnmarshalledServer extends _Server {
  /**
   * <p>Information about the VM server.</p>
   */
  vmServer?: _UnmarshalledVmServer;
}
