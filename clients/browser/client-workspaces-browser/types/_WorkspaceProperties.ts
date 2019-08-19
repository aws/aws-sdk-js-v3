/**
 * <p>Describes a WorkSpace.</p>
 */
export interface _WorkspaceProperties {
  /**
   * <p>The running mode. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html">Manage the WorkSpace Running Mode</a>.</p>
   */
  RunningMode?: "AUTO_STOP" | "ALWAYS_ON" | string;

  /**
   * <p>The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60 minute intervals.</p>
   */
  RunningModeAutoStopTimeoutInMinutes?: number;

  /**
   * <p>The size of the root volume.</p>
   */
  RootVolumeSizeGib?: number;

  /**
   * <p>The size of the user storage.</p>
   */
  UserVolumeSizeGib?: number;

  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
   */
  ComputeTypeName?:
    | "VALUE"
    | "STANDARD"
    | "PERFORMANCE"
    | "POWER"
    | "GRAPHICS"
    | "POWERPRO"
    | "GRAPHICSPRO"
    | string;
}

export type _UnmarshalledWorkspaceProperties = _WorkspaceProperties;
