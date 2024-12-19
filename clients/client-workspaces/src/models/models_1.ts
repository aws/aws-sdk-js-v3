// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  AccountLink,
  ActiveDirectoryConfig,
  ApplicationSettingsRequest,
  Capacity,
  ConnectionAliasPermission,
  FailedWorkspaceChangeRequest,
  IpRuleItem,
  MicrosoftEntraConfig,
  Tag,
  Tenancy,
  TimeoutSettings,
  UserIdentityType,
  WorkspaceDirectoryState,
  WorkspacesPool,
  WorkspaceType,
} from "./models_0";

import { WorkSpacesServiceException as __BaseException } from "./WorkSpacesServiceException";

/**
 * @public
 */
export interface RegisterWorkspaceDirectoryRequest {
  /**
   * <p>The identifier of the directory. You cannot register a directory if it does not have a
   *          status of Active. If the directory does not have a status of Active, you will receive an
   *          InvalidResourceStateException error. If you have already registered the maximum number of
   *          directories that you can register with Amazon WorkSpaces, you will receive a
   *          ResourceLimitExceededException error. Deregister directories that you are not using for
   *          WorkSpaces, and try again.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the
   *          subnets are in supported Availability Zones. The subnets must also be in separate
   *          Availability Zones. If these conditions are not met, you will receive an
   *          OperationNotSupportedException error.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>Indicates whether Amazon WorkDocs is enabled or disabled. If you have enabled this
   *          parameter and WorkDocs is not available in the Region, you will receive an
   *          OperationNotSupportedException error. Set <code>EnableWorkDocs</code> to disabled, and try
   *          again.</p>
   * @public
   */
  EnableWorkDocs?: boolean | undefined;

  /**
   * <p>Indicates whether self-service capabilities are enabled or disabled.</p>
   * @public
   */
  EnableSelfService?: boolean | undefined;

  /**
   * <p>Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own
   *          License (BYOL) images, this value must be set to <code>DEDICATED</code> and your Amazon Web Services account must be enabled for BYOL. If your account has not been enabled for
   *          BYOL, you will receive an InvalidParameterValuesException error. For more information about
   *          BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
   *             Desktop Images</a>.</p>
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * <p>The tags associated with the directory.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The name of the directory to register.</p>
   * @public
   */
  WorkspaceDirectoryName?: string | undefined;

  /**
   * <p>Description of the directory to register.</p>
   * @public
   */
  WorkspaceDirectoryDescription?: string | undefined;

  /**
   * <p>The type of identity management the user is using.</p>
   * @public
   */
  UserIdentityType?: UserIdentityType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity center instance.</p>
   * @public
   */
  IdcInstanceArn?: string | undefined;

  /**
   * <p>The details about Microsoft Entra config.</p>
   * @public
   */
  MicrosoftEntraConfig?: MicrosoftEntraConfig | undefined;

  /**
   * <p>Indicates whether the directory's WorkSpace type is personal or pools.</p>
   * @public
   */
  WorkspaceType?: WorkspaceType | undefined;

  /**
   * <p>The active directory config of the directory.</p>
   * @public
   */
  ActiveDirectoryConfig?: ActiveDirectoryConfig | undefined;
}

/**
 * @public
 */
export interface RegisterWorkspaceDirectoryResult {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The registration status of the WorkSpace directory.</p>
   * @public
   */
  State?: WorkspaceDirectoryState | undefined;
}

/**
 * <p>The configuration of this network is not supported for this operation, or your network configuration
 *          conflicts with the Amazon WorkSpaces management network IP range. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
 *             Configure a VPC for Amazon WorkSpaces</a>.</p>
 * @public
 */
export class UnsupportedNetworkConfigurationException extends __BaseException {
  readonly name: "UnsupportedNetworkConfigurationException" = "UnsupportedNetworkConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedNetworkConfigurationException, __BaseException>) {
    super({
      name: "UnsupportedNetworkConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedNetworkConfigurationException.prototype);
  }
}

/**
 * <p>The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you
 *          will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">Creating the workspaces_DefaultRole Role</a>.</p>
 * @public
 */
export class WorkspacesDefaultRoleNotFoundException extends __BaseException {
  readonly name: "WorkspacesDefaultRoleNotFoundException" = "WorkspacesDefaultRoleNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WorkspacesDefaultRoleNotFoundException, __BaseException>) {
    super({
      name: "WorkspacesDefaultRoleNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WorkspacesDefaultRoleNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface RejectAccountLinkInvitationRequest {
  /**
   * <p>The identifier of the account link</p>
   * @public
   */
  LinkId: string | undefined;

  /**
   * <p>The client token of the account link invitation to reject.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectAccountLinkInvitationResult {
  /**
   * <p>Information about the account link.</p>
   * @public
   */
  AccountLink?: AccountLink | undefined;
}

/**
 * @public
 */
export interface RestoreWorkspaceRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface RestoreWorkspaceResult {}

/**
 * @public
 */
export interface RevokeIpRulesRequest {
  /**
   * <p>The identifier of the group.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The rules to remove from the group.</p>
   * @public
   */
  UserRules: string[] | undefined;
}

/**
 * @public
 */
export interface RevokeIpRulesResult {}

/**
 * <p>Information used to start a WorkSpace.</p>
 * @public
 */
export interface StartRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string | undefined;
}

/**
 * @public
 */
export interface StartWorkspacesRequest {
  /**
   * <p>The WorkSpaces to start. You can specify up to 25 WorkSpaces.</p>
   * @public
   */
  StartWorkspaceRequests: StartRequest[] | undefined;
}

/**
 * @public
 */
export interface StartWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be started.</p>
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[] | undefined;
}

/**
 * @public
 */
export interface StartWorkspacesPoolRequest {
  /**
   * <p>The identifier of the pool.</p>
   * @public
   */
  PoolId: string | undefined;
}

/**
 * @public
 */
export interface StartWorkspacesPoolResult {}

/**
 * <p>Describes the information used to stop a WorkSpace.</p>
 * @public
 */
export interface StopRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId?: string | undefined;
}

/**
 * @public
 */
export interface StopWorkspacesRequest {
  /**
   * <p>The WorkSpaces to stop. You can specify up to 25 WorkSpaces.</p>
   * @public
   */
  StopWorkspaceRequests: StopRequest[] | undefined;
}

/**
 * @public
 */
export interface StopWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be stopped.</p>
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[] | undefined;
}

/**
 * @public
 */
export interface StopWorkspacesPoolRequest {
  /**
   * <p>The identifier of the pool.</p>
   * @public
   */
  PoolId: string | undefined;
}

/**
 * @public
 */
export interface StopWorkspacesPoolResult {}

/**
 * <p>Describes the information used to terminate a WorkSpace.</p>
 * @public
 */
export interface TerminateRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesRequest {
  /**
   * <p>The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.</p>
   * @public
   */
  TerminateWorkspaceRequests: TerminateRequest[] | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be terminated.</p>
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[] | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesPoolRequest {
  /**
   * <p>The identifier of the pool.</p>
   * @public
   */
  PoolId: string | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesPoolResult {}

/**
 * @public
 */
export interface TerminateWorkspacesPoolSessionRequest {
  /**
   * <p>The identifier of the pool session.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesPoolSessionResult {}

/**
 * @public
 */
export interface UpdateConnectClientAddInRequest {
  /**
   * <p>The identifier of the client add-in to update.</p>
   * @public
   */
  AddInId: string | undefined;

  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The name of the client add-in.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The endpoint URL of the Amazon Connect client add-in.</p>
   * @public
   */
  URL?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectClientAddInResult {}

/**
 * @public
 */
export interface UpdateConnectionAliasPermissionRequest {
  /**
   * <p>The identifier of the connection alias that you want to update permissions for.</p>
   * @public
   */
  AliasId: string | undefined;

  /**
   * <p>Indicates whether to share or unshare the connection alias with the specified Amazon Web Services account.</p>
   * @public
   */
  ConnectionAliasPermission: ConnectionAliasPermission | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionAliasPermissionResult {}

/**
 * @public
 */
export interface UpdateRulesOfIpGroupRequest {
  /**
   * <p>The identifier of the group.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>One or more rules.</p>
   * @public
   */
  UserRules: IpRuleItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateRulesOfIpGroupResult {}

/**
 * @public
 */
export interface UpdateWorkspaceBundleRequest {
  /**
   * <p>The identifier of the bundle.</p>
   * @public
   */
  BundleId?: string | undefined;

  /**
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceBundleResult {}

/**
 * @public
 */
export interface UpdateWorkspaceImagePermissionRequest {
  /**
   * <p>The identifier of the image.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The permission to copy the image. This permission can be revoked only after an image has
   *          been shared.</p>
   * @public
   */
  AllowCopyImage: boolean | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account to share or unshare the image
   *          with.</p>
   *          <important>
   *             <p>Before sharing the image, confirm that you are sharing to the correct Amazon Web Services account ID.</p>
   *          </important>
   * @public
   */
  SharedAccountId: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceImagePermissionResult {}

/**
 * @public
 */
export interface UpdateWorkspacesPoolRequest {
  /**
   * <p>The identifier of the specified pool to update.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>Describes the specified pool to update.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the bundle.</p>
   * @public
   */
  BundleId?: string | undefined;

  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The desired capacity for the pool.</p>
   * @public
   */
  Capacity?: Capacity | undefined;

  /**
   * <p>The persistent application settings for users in the pool.</p>
   * @public
   */
  ApplicationSettings?: ApplicationSettingsRequest | undefined;

  /**
   * <p>Indicates the timeout settings of the specified pool.</p>
   * @public
   */
  TimeoutSettings?: TimeoutSettings | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspacesPoolResult {
  /**
   * <p>Describes the specified pool.</p>
   * @public
   */
  WorkspacesPool?: WorkspacesPool | undefined;
}
