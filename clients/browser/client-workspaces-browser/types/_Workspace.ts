import {
  _WorkspaceProperties,
  _UnmarshalledWorkspaceProperties
} from "./_WorkspaceProperties";
import {
  _ModificationState,
  _UnmarshalledModificationState
} from "./_ModificationState";

/**
 * <p>Describes a WorkSpace.</p>
 */
export interface _Workspace {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The identifier of the AWS Directory Service directory for the WorkSpace.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The user for the WorkSpace.</p>
   */
  UserName?: string;

  /**
   * <p>The IP address of the WorkSpace.</p>
   */
  IpAddress?: string;

  /**
   * <p>The operational state of the WorkSpace.</p>
   */
  State?:
    | "PENDING"
    | "AVAILABLE"
    | "IMPAIRED"
    | "UNHEALTHY"
    | "REBOOTING"
    | "STARTING"
    | "REBUILDING"
    | "MAINTENANCE"
    | "ADMIN_MAINTENANCE"
    | "TERMINATING"
    | "TERMINATED"
    | "SUSPENDED"
    | "UPDATING"
    | "STOPPING"
    | "STOPPED"
    | "ERROR"
    | string;

  /**
   * <p>The identifier of the bundle used to create the WorkSpace.</p>
   */
  BundleId?: string;

  /**
   * <p>The identifier of the subnet for the WorkSpace.</p>
   */
  SubnetId?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The name of the WorkSpace, as seen by the operating system.</p>
   */
  ComputerName?: string;

  /**
   * <p>The KMS key used to encrypt data stored on your WorkSpace.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The properties of the WorkSpace.</p>
   */
  WorkspaceProperties?: _WorkspaceProperties;

  /**
   * <p>The modification states of the WorkSpace.</p>
   */
  ModificationStates?: Array<_ModificationState> | Iterable<_ModificationState>;
}

export interface _UnmarshalledWorkspace extends _Workspace {
  /**
   * <p>The properties of the WorkSpace.</p>
   */
  WorkspaceProperties?: _UnmarshalledWorkspaceProperties;

  /**
   * <p>The modification states of the WorkSpace.</p>
   */
  ModificationStates?: Array<_UnmarshalledModificationState>;
}
