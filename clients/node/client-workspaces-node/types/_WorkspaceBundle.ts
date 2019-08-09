import { _RootStorage, _UnmarshalledRootStorage } from "./_RootStorage";
import { _UserStorage, _UnmarshalledUserStorage } from "./_UserStorage";
import { _ComputeType, _UnmarshalledComputeType } from "./_ComputeType";

/**
 * <p>Describes a WorkSpace bundle.</p>
 */
export interface _WorkspaceBundle {
  /**
   * <p>The bundle identifier.</p>
   */
  BundleId?: string;

  /**
   * <p>The name of the bundle.</p>
   */
  Name?: string;

  /**
   * <p>The owner of the bundle. This is the account identifier of the owner, or <code>AMAZON</code> if the bundle is provided by AWS.</p>
   */
  Owner?: string;

  /**
   * <p>A description.</p>
   */
  Description?: string;

  /**
   * <p>The size of the root volume.</p>
   */
  RootStorage?: _RootStorage;

  /**
   * <p>The size of the user storage.</p>
   */
  UserStorage?: _UserStorage;

  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
   */
  ComputeType?: _ComputeType;
}

export interface _UnmarshalledWorkspaceBundle extends _WorkspaceBundle {
  /**
   * <p>The size of the root volume.</p>
   */
  RootStorage?: _UnmarshalledRootStorage;

  /**
   * <p>The size of the user storage.</p>
   */
  UserStorage?: _UnmarshalledUserStorage;

  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
   */
  ComputeType?: _UnmarshalledComputeType;
}
