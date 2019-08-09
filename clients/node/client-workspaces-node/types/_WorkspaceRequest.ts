import {
  _WorkspaceProperties,
  _UnmarshalledWorkspaceProperties
} from "./_WorkspaceProperties";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes the information used to create a WorkSpace.</p>
 */
export interface _WorkspaceRequest {
  /**
   * <p>The identifier of the AWS Directory Service directory for the WorkSpace. You can use <a>DescribeWorkspaceDirectories</a> to list the available directories.</p>
   */
  DirectoryId: string;

  /**
   * <p>The username of the user for the WorkSpace. This username must exist in the AWS Directory Service directory for the WorkSpace.</p>
   */
  UserName: string;

  /**
   * <p>The identifier of the bundle for the WorkSpace. You can use <a>DescribeWorkspaceBundles</a> to list the available bundles.</p>
   */
  BundleId: string;

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
   * <p>The WorkSpace properties.</p>
   */
  WorkspaceProperties?: _WorkspaceProperties;

  /**
   * <p>The tags for the WorkSpace.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledWorkspaceRequest extends _WorkspaceRequest {
  /**
   * <p>The WorkSpace properties.</p>
   */
  WorkspaceProperties?: _UnmarshalledWorkspaceProperties;

  /**
   * <p>The tags for the WorkSpace.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
