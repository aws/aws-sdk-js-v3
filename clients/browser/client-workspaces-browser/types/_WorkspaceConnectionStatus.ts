/**
 * <p>Describes the connection status of a WorkSpace.</p>
 */
export interface _WorkspaceConnectionStatus {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The connection state of the WorkSpace. The connection state is unknown if the WorkSpace is stopped.</p>
   */
  ConnectionState?: "CONNECTED" | "DISCONNECTED" | "UNKNOWN" | string;

  /**
   * <p>The timestamp of the connection status check.</p>
   */
  ConnectionStateCheckTimestamp?: Date | string | number;

  /**
   * <p>The timestamp of the last known user connection.</p>
   */
  LastKnownUserConnectionTimestamp?: Date | string | number;
}

export interface _UnmarshalledWorkspaceConnectionStatus
  extends _WorkspaceConnectionStatus {
  /**
   * <p>The timestamp of the connection status check.</p>
   */
  ConnectionStateCheckTimestamp?: Date;

  /**
   * <p>The timestamp of the last known user connection.</p>
   */
  LastKnownUserConnectionTimestamp?: Date;
}
