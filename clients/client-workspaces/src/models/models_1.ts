// smithy-typescript generated code
import {
  ApplicationSettingsRequest,
  Capacity,
  ConnectionAliasPermission,
  FailedWorkspaceChangeRequest,
  IpRuleItem,
  TimeoutSettings,
  WorkspacesPool,
} from "./models_0";

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
