import {
  _ServerLaunchConfiguration,
  _UnmarshalledServerLaunchConfiguration
} from "./_ServerLaunchConfiguration";

/**
 * <p>Launch configuration for a server group.</p>
 */
export interface _ServerGroupLaunchConfiguration {
  /**
   * <p>Identifier of the server group the launch configuration is associated with.</p>
   */
  serverGroupId?: string;

  /**
   * <p>Launch order of servers in the server group.</p>
   */
  launchOrder?: number;

  /**
   * <p>Launch configuration for servers in the server group.</p>
   */
  serverLaunchConfigurations?:
    | Array<_ServerLaunchConfiguration>
    | Iterable<_ServerLaunchConfiguration>;
}

export interface _UnmarshalledServerGroupLaunchConfiguration
  extends _ServerGroupLaunchConfiguration {
  /**
   * <p>Launch configuration for servers in the server group.</p>
   */
  serverLaunchConfigurations?: Array<_UnmarshalledServerLaunchConfiguration>;
}
