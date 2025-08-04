// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeConnectionsServiceException as __BaseException } from "./CodeConnectionsServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const BlockerStatus = {
  ACTIVE: "ACTIVE",
  RESOLVED: "RESOLVED",
} as const;

/**
 * @public
 */
export type BlockerStatus = (typeof BlockerStatus)[keyof typeof BlockerStatus];

/**
 * @public
 * @enum
 */
export const BlockerType = {
  AUTOMATED: "AUTOMATED",
} as const;

/**
 * @public
 */
export type BlockerType = (typeof BlockerType)[keyof typeof BlockerType];

/**
 * @public
 * @enum
 */
export const ProviderType = {
  AZURE_DEV_OPS: "AzureDevOps",
  BITBUCKET: "Bitbucket",
  GITHUB: "GitHub",
  GITHUB_ENTERPRISE_SERVER: "GitHubEnterpriseServer",
  GITLAB: "GitLab",
  GITLAB_SELF_MANAGED: "GitLabSelfManaged",
} as const;

/**
 * @public
 */
export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType];

/**
 * <p>A tag is a key-value pair that is used to manage the resource.</p>
 *          <p>This tag is available for use by Amazon Web Services services that support tags.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionInput {
  /**
   * <p>The name of the external provider where your third-party code repository is
   *       configured.</p>
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * <p>The name of the connection to be created.</p>
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * <p>The key-value pair to use when tagging the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the host associated with the connection to be created.</p>
   * @public
   */
  HostArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the connection to be created. The ARN is used as the
   *       connection reference when the connection is shared between Amazon Web Services services.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * <p>Specifies the tags applied to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Exceeded the maximum limit for connections.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Resource not found. Verify the connection resource ARN and try again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Resource not found. Verify the ARN for the host resource and try again.</p>
 * @public
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The VPC configuration provisioned for the host.</p>
 * @public
 */
export interface VpcConfiguration {
  /**
   * <p>The ID of the Amazon VPC connected to the infrastructure where your provider type is
   *       installed.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The ID of the subnet or subnets associated with the Amazon VPC connected to the
   *       infrastructure where your provider type is installed.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The ID of the security group or security groups associated with the Amazon VPC connected
   *       to the infrastructure where your provider type is installed.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed.</p>
   * @public
   */
  TlsCertificate?: string | undefined;
}

/**
 * @public
 */
export interface CreateHostInput {
  /**
   * <p>The name of the host to be created.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the installed provider to be associated with your connection. The host
   *       resource represents the infrastructure where your provider type is installed. The valid
   *       provider type is GitHub Enterprise Server.</p>
   * @public
   */
  ProviderType: ProviderType | undefined;

  /**
   * <p>The endpoint of the infrastructure to be represented by the host after it is
   *       created.</p>
   * @public
   */
  ProviderEndpoint: string | undefined;

  /**
   * <p>The VPC configuration to be provisioned for the host. A VPC must be configured and the
   *       infrastructure to be represented by the host must already be connected to the VPC.</p>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>Tags for the host to be created.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHostOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the host to be created.</p>
   * @public
   */
  HostArn?: string | undefined;

  /**
   * <p>Tags for the created host.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time. </p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateRepositoryLinkInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the connection to be associated with the repository link.</p>
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * <p>The owner ID for the repository associated with a specific sync configuration, such as
   *       the owner ID in GitHub.</p>
   * @public
   */
  OwnerId: string | undefined;

  /**
   * <p>The name of the repository to be associated with the repository link.</p>
   * @public
   */
  RepositoryName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) encryption key for the repository to be associated with the repository link.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The tags for the repository to be associated with the repository link.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Information about the repository link resource, such as the repository link ARN, the associated connection ARN, encryption key ARN, and owner ID.</p>
 * @public
 */
export interface RepositoryLinkInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the connection associated with the repository link.</p>
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the encryption key for the repository associated with the repository link.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The owner ID for the repository associated with the repository link, such as the owner
   *       ID in GitHub.</p>
   * @public
   */
  OwnerId: string | undefined;

  /**
   * <p>The provider type for the connection, such as GitHub, associated with the repository link.</p>
   * @public
   */
  ProviderType: ProviderType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the repository link.</p>
   * @public
   */
  RepositoryLinkArn: string | undefined;

  /**
   * <p>The ID of the repository link.</p>
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * <p>The name of the repository associated with the repository link.</p>
   * @public
   */
  RepositoryName: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryLinkOutput {
  /**
   * <p>The returned information about the created repository link.</p>
   * @public
   */
  RepositoryLinkInfo: RepositoryLinkInfo | undefined;
}

/**
 * <p>Received an internal server exception. Try again later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The input is not valid. Verify that the action is typed correctly.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Unable to create resource. Resource already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const PublishDeploymentStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PublishDeploymentStatus = (typeof PublishDeploymentStatus)[keyof typeof PublishDeploymentStatus];

/**
 * @public
 * @enum
 */
export const PullRequestComment = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PullRequestComment = (typeof PullRequestComment)[keyof typeof PullRequestComment];

/**
 * @public
 * @enum
 */
export const SyncConfigurationType = {
  CFN_STACK_SYNC: "CFN_STACK_SYNC",
} as const;

/**
 * @public
 */
export type SyncConfigurationType = (typeof SyncConfigurationType)[keyof typeof SyncConfigurationType];

/**
 * @public
 * @enum
 */
export const TriggerResourceUpdateOn = {
  ANY_CHANGE: "ANY_CHANGE",
  FILE_CHANGE: "FILE_CHANGE",
} as const;

/**
 * @public
 */
export type TriggerResourceUpdateOn = (typeof TriggerResourceUpdateOn)[keyof typeof TriggerResourceUpdateOn];

/**
 * @public
 */
export interface CreateSyncConfigurationInput {
  /**
   * <p>The branch in the repository from which changes will be synced.</p>
   * @public
   */
  Branch: string | undefined;

  /**
   * <p>The file name of the configuration file that manages syncing between the connection and the repository. This configuration file is stored in the repository.</p>
   * @public
   */
  ConfigFile: string | undefined;

  /**
   * <p>The ID of the repository link created for the connection. A repository link allows Git
   *       sync to monitor and sync changes to files in a specified Git repository.</p>
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * <p>The name of the Amazon Web Services resource (for example, a CloudFormation stack in the
   *       case of CFN_STACK_SYNC) that will be synchronized from the linked repository.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The ARN of the IAM role that grants permission for Amazon Web Services to use Git sync to
   *       update a given Amazon Web Services resource on your behalf.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The type of sync configuration.</p>
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * <p>Whether to enable or disable publishing of deployment status to source providers.</p>
   * @public
   */
  PublishDeploymentStatus?: PublishDeploymentStatus | undefined;

  /**
   * <p>When to trigger Git sync to begin the stack update.</p>
   * @public
   */
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn | undefined;

  /**
   * <p>A toggle that specifies whether to enable or disable pull request comments for the sync configuration to be created.</p>
   * @public
   */
  PullRequestComment?: PullRequestComment | undefined;
}

/**
 * <p>Information, such as repository, branch, provider, and resource names for a specific sync configuration.</p>
 * @public
 */
export interface SyncConfiguration {
  /**
   * <p>The branch associated with a specific sync configuration.</p>
   * @public
   */
  Branch: string | undefined;

  /**
   * <p>The file path to the configuration file associated with a specific sync configuration. The path should point to an actual file in the sync configurations linked repository.</p>
   * @public
   */
  ConfigFile?: string | undefined;

  /**
   * <p>The owner ID for the repository associated with a specific sync configuration, such as
   *       the owner ID in GitHub.</p>
   * @public
   */
  OwnerId: string | undefined;

  /**
   * <p>The connection provider type associated with a specific sync configuration, such as
   *       GitHub.</p>
   * @public
   */
  ProviderType: ProviderType | undefined;

  /**
   * <p>The ID of the repository link associated with a specific sync configuration.</p>
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * <p>The name of the repository associated with a specific sync configuration.</p>
   * @public
   */
  RepositoryName: string | undefined;

  /**
   * <p>The name of the connection resource associated with a specific sync configuration.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with a specific sync configuration.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The type of sync for a specific sync configuration.</p>
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * <p>Whether to enable or disable publishing of deployment status to source providers.</p>
   * @public
   */
  PublishDeploymentStatus?: PublishDeploymentStatus | undefined;

  /**
   * <p>When to trigger Git sync to begin the stack update.</p>
   * @public
   */
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn | undefined;

  /**
   * <p>A toggle that specifies whether to enable or disable pull request comments for the sync configuration to be created.</p>
   * @public
   */
  PullRequestComment?: PullRequestComment | undefined;
}

/**
 * @public
 */
export interface CreateSyncConfigurationOutput {
  /**
   * <p>The created sync configuration for the connection. A sync configuration allows Amazon Web Services to sync content from a Git repository to update a specified Amazon Web Services
   *       resource. </p>
   * @public
   */
  SyncConfiguration: SyncConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the connection to be deleted.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
   * @public
   */
  ConnectionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionOutput {}

/**
 * @public
 */
export interface DeleteHostInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the host to be deleted.</p>
   * @public
   */
  HostArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteHostOutput {}

/**
 * @public
 */
export interface DeleteRepositoryLinkInput {
  /**
   * <p>The ID of the repository link to be deleted.</p>
   * @public
   */
  RepositoryLinkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryLinkOutput {}

/**
 * <p>Unable to continue. The sync blocker still exists.</p>
 * @public
 */
export class SyncConfigurationStillExistsException extends __BaseException {
  readonly name: "SyncConfigurationStillExistsException" = "SyncConfigurationStillExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SyncConfigurationStillExistsException, __BaseException>) {
    super({
      name: "SyncConfigurationStillExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SyncConfigurationStillExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified provider type is not supported for connections.</p>
 * @public
 */
export class UnsupportedProviderTypeException extends __BaseException {
  readonly name: "UnsupportedProviderTypeException" = "UnsupportedProviderTypeException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedProviderTypeException, __BaseException>) {
    super({
      name: "UnsupportedProviderTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedProviderTypeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteSyncConfigurationInput {
  /**
   * <p>The type of sync configuration to be deleted.</p>
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * <p>The name of the Amazon Web Services resource associated with the sync configuration to be
   *       deleted.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSyncConfigurationOutput {}

/**
 * @public
 */
export interface GetConnectionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of a connection.</p>
   * @public
   */
  ConnectionArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * <p>A resource that is used to connect third-party source providers with services like CodePipeline.</p>
 *          <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the
 *       connection in the console.</p>
 * @public
 */
export interface Connection {
  /**
   * <p>The name of the connection. Connection names must be unique in an Amazon Web Services account.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection
   *       reference when the connection is shared between Amazon Web Services services.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The name of the external provider where your third-party code repository is
   *       configured.</p>
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * <p>The identifier of the external provider where your third-party code repository is configured.
   *       For Bitbucket, this is the account ID of the owner of the Bitbucket repository.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The current status of the connection. </p>
   * @public
   */
  ConnectionStatus?: ConnectionStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the host associated with the connection.</p>
   * @public
   */
  HostArn?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionOutput {
  /**
   * <p>The connection details, such as status, owner, and provider type.</p>
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * @public
 */
export interface GetHostInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the requested host.</p>
   * @public
   */
  HostArn: string | undefined;
}

/**
 * @public
 */
export interface GetHostOutput {
  /**
   * <p>The name of the requested host.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the requested host.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The provider type of the requested host, such as GitHub Enterprise Server.</p>
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * <p>The endpoint of the infrastructure represented by the requested host.</p>
   * @public
   */
  ProviderEndpoint?: string | undefined;

  /**
   * <p>The VPC configuration of the requested host.</p>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;
}

/**
 * @public
 */
export interface GetRepositoryLinkInput {
  /**
   * <p>The ID of the repository link to get.</p>
   * @public
   */
  RepositoryLinkId: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryLinkOutput {
  /**
   * <p>The information returned for a specified repository link.</p>
   * @public
   */
  RepositoryLinkInfo: RepositoryLinkInfo | undefined;
}

/**
 * @public
 */
export interface GetRepositorySyncStatusInput {
  /**
   * <p>The branch of the repository link for the requested repository sync status.</p>
   * @public
   */
  Branch: string | undefined;

  /**
   * <p>The repository link ID for the requested repository sync status.</p>
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * <p>The sync type of the requested sync status.</p>
   * @public
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * <p>Information about a repository sync event.</p>
 * @public
 */
export interface RepositorySyncEvent {
  /**
   * <p>A description of a repository sync event.</p>
   * @public
   */
  Event: string | undefined;

  /**
   * <p>The ID for a repository sync event.</p>
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * <p>The time that a repository sync event occurred.</p>
   * @public
   */
  Time: Date | undefined;

  /**
   * <p>The event type for a repository sync event.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RepositorySyncStatus = {
  FAILED: "FAILED",
  INITIATED: "INITIATED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type RepositorySyncStatus = (typeof RepositorySyncStatus)[keyof typeof RepositorySyncStatus];

/**
 * <p>Information about a repository sync attempt for a repository with a sync configuration.</p>
 * @public
 */
export interface RepositorySyncAttempt {
  /**
   * <p>The start time of a specific sync attempt.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The status of a specific sync attempt. The following are valid statuses:</p>
   *          <ul>
   *             <li>
   *                <p>INITIATED - A repository sync attempt has been created and will begin soon.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - A repository sync attempt has started and work is being done to
   *           reconcile the branch.</p>
   *             </li>
   *             <li>
   *                <p>SUCCEEDED - The repository sync attempt has completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The repository sync attempt has failed.</p>
   *             </li>
   *             <li>
   *                <p>QUEUED - The repository sync attempt didn't execute and was queued.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: RepositorySyncStatus | undefined;

  /**
   * <p>The events associated with a specific sync attempt.</p>
   * @public
   */
  Events: RepositorySyncEvent[] | undefined;
}

/**
 * @public
 */
export interface GetRepositorySyncStatusOutput {
  /**
   * <p>The status of the latest sync returned for a specified repository and branch.</p>
   * @public
   */
  LatestSync: RepositorySyncAttempt | undefined;
}

/**
 * @public
 */
export interface GetResourceSyncStatusInput {
  /**
   * <p>The name of the Amazon Web Services resource for the sync status with the Git
   *       repository.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The sync type for the sync status with the Git repository.</p>
   * @public
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * <p>Information about the revision for a specific sync event, such as the branch, owner ID, and name of the repository.</p>
 * @public
 */
export interface Revision {
  /**
   * <p>The branch name for a specific revision.</p>
   * @public
   */
  Branch: string | undefined;

  /**
   * <p>The directory, if any, for a specific revision.</p>
   * @public
   */
  Directory: string | undefined;

  /**
   * <p>The owner ID for a specific revision, such as the GitHub owner ID for a GitHub repository.</p>
   * @public
   */
  OwnerId: string | undefined;

  /**
   * <p>The repository name for a specific revision.</p>
   * @public
   */
  RepositoryName: string | undefined;

  /**
   * <p>The provider type for a revision, such as GitHub.</p>
   * @public
   */
  ProviderType: ProviderType | undefined;

  /**
   * <p>The SHA, such as the commit ID, for a specific revision.</p>
   * @public
   */
  Sha: string | undefined;
}

/**
 * <p>Information about a resource sync event for the resource associated with a sync configuration.</p>
 * @public
 */
export interface ResourceSyncEvent {
  /**
   * <p>The event for a resource sync event.</p>
   * @public
   */
  Event: string | undefined;

  /**
   * <p>The ID for a resource sync event.</p>
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * <p>The time that a resource sync event occurred.</p>
   * @public
   */
  Time: Date | undefined;

  /**
   * <p>The type of resource sync event.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceSyncStatus = {
  FAILED: "FAILED",
  INITIATED: "INITIATED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ResourceSyncStatus = (typeof ResourceSyncStatus)[keyof typeof ResourceSyncStatus];

/**
 * <p>Information about a resource sync attempt.</p>
 * @public
 */
export interface ResourceSyncAttempt {
  /**
   * <p>The events related to a resource sync attempt.</p>
   * @public
   */
  Events: ResourceSyncEvent[] | undefined;

  /**
   * <p>The current state of the resource as defined in the resource's <code>config-file</code>
   *       in the linked repository.</p>
   * @public
   */
  InitialRevision: Revision | undefined;

  /**
   * <p>The start time for a resource sync attempt.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The status for a resource sync attempt. The follow are valid statuses:</p>
   *          <ul>
   *             <li>
   *                <p>SYNC-INITIATED - A resource sync attempt has been created and will begin soon.</p>
   *             </li>
   *             <li>
   *                <p>SYNCING - Syncing has started and work is being done to reconcile state.</p>
   *             </li>
   *             <li>
   *                <p>SYNCED - Syncing has completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>SYNC_FAILED - A resource sync attempt has failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: ResourceSyncStatus | undefined;

  /**
   * <p>The desired state of the resource as defined in the resource's <code>config-file</code>
   *       in the linked repository. Git sync attempts to update the resource to this state.</p>
   * @public
   */
  TargetRevision: Revision | undefined;

  /**
   * <p>The name of the Amazon Web Services resource that is attempted to be synchronized.</p>
   * @public
   */
  Target: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSyncStatusOutput {
  /**
   * <p>The desired state of the Amazon Web Services resource for the sync status with the Git
   *       repository.</p>
   * @public
   */
  DesiredState?: Revision | undefined;

  /**
   * <p>The latest successful sync for the sync status with the Git repository.</p>
   * @public
   */
  LatestSuccessfulSync?: ResourceSyncAttempt | undefined;

  /**
   * <p>The latest sync for the sync status with the Git repository, whether successful or not.</p>
   * @public
   */
  LatestSync: ResourceSyncAttempt | undefined;
}

/**
 * @public
 */
export interface GetSyncBlockerSummaryInput {
  /**
   * <p>The sync type for the sync blocker summary.</p>
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * <p>The name of the Amazon Web Services resource currently blocked from automatically being synced from a Git repository.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * <p>The context for a specific sync blocker.</p>
 * @public
 */
export interface SyncBlockerContext {
  /**
   * <p>The key provided for a context key-value pair for a specific sync blocker.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value provided for a context key-value pair for a specific sync blocker.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Information about a blocker for a sync event.</p>
 * @public
 */
export interface SyncBlocker {
  /**
   * <p>The ID for a specific sync blocker.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The sync blocker type.</p>
   * @public
   */
  Type: BlockerType | undefined;

  /**
   * <p>The status for a specific sync blocker.</p>
   * @public
   */
  Status: BlockerStatus | undefined;

  /**
   * <p>The provided reason for a specific sync blocker.</p>
   * @public
   */
  CreatedReason: string | undefined;

  /**
   * <p>The creation time for a specific sync blocker.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The contexts for a specific sync blocker.</p>
   * @public
   */
  Contexts?: SyncBlockerContext[] | undefined;

  /**
   * <p>The resolved reason for a specific sync blocker.</p>
   * @public
   */
  ResolvedReason?: string | undefined;

  /**
   * <p>The time that a specific sync blocker was resolved.</p>
   * @public
   */
  ResolvedAt?: Date | undefined;
}

/**
 * <p>A summary for sync blockers.</p>
 * @public
 */
export interface SyncBlockerSummary {
  /**
   * <p>The resource name for sync blocker summary.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The parent resource name for a sync blocker summary.</p>
   * @public
   */
  ParentResourceName?: string | undefined;

  /**
   * <p>The latest events for a sync blocker summary.</p>
   * @public
   */
  LatestBlockers?: SyncBlocker[] | undefined;
}

/**
 * @public
 */
export interface GetSyncBlockerSummaryOutput {
  /**
   * <p>The list of sync blockers for a specified resource.</p>
   * @public
   */
  SyncBlockerSummary: SyncBlockerSummary | undefined;
}

/**
 * @public
 */
export interface GetSyncConfigurationInput {
  /**
   * <p>The sync type for the sync configuration for which you want to retrieve information.</p>
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * <p>The name of the Amazon Web Services resource for the sync configuration for which you
   *       want to retrieve information.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GetSyncConfigurationOutput {
  /**
   * <p>The details about the sync configuration for which you want to retrieve information.</p>
   * @public
   */
  SyncConfiguration: SyncConfiguration | undefined;
}

/**
 * @public
 */
export interface ListConnectionsInput {
  /**
   * <p>Filters the list of connections to those associated with a specified provider, such as
   *       Bitbucket.</p>
   * @public
   */
  ProviderTypeFilter?: ProviderType | undefined;

  /**
   * <p>Filters the list of connections to those associated with a specified host.</p>
   * @public
   */
  HostArnFilter?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that was returned from the previous <code>ListConnections</code> call, which
   *       can be used to return the next set of connections in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionsOutput {
  /**
   * <p>A list of connections and the details for each connection, such as status, owner, and
   *       provider type.</p>
   * @public
   */
  Connections?: Connection[] | undefined;

  /**
   * <p>A token that can be used in the next <code>ListConnections</code> call. To view all
   *       items in the list, continue to call this operation with each subsequent token until no more
   *       <code>nextToken</code> values are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHostsInput {
  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that was returned from the previous <code>ListHosts</code> call, which can be
   *       used to return the next set of hosts in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A resource that represents the infrastructure where a third-party provider is installed.
 *       The host is used when you create connections to an installed third-party provider type, such
 *       as GitHub Enterprise Server. You create one host for all connections to that provider.</p>
 *          <note>
 *             <p>A host created through the CLI or the SDK is in `PENDING` status by
 *         default. You can make its status `AVAILABLE` by setting up the host in the console.</p>
 *          </note>
 * @public
 */
export interface Host {
  /**
   * <p>The name of the host.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the host.</p>
   * @public
   */
  HostArn?: string | undefined;

  /**
   * <p>The name of the installed provider to be associated with your connection. The host
   *       resource represents the infrastructure where your provider type is installed. The valid
   *       provider type is GitHub Enterprise Server.</p>
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * <p>The endpoint of the infrastructure where your provider type is installed.</p>
   * @public
   */
  ProviderEndpoint?: string | undefined;

  /**
   * <p>The VPC configuration provisioned for the host.</p>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>The status of the host, such as PENDING, AVAILABLE, VPC_CONFIG_DELETING, VPC_CONFIG_INITIALIZING, and VPC_CONFIG_FAILED_INITIALIZATION.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The status description for the host.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListHostsOutput {
  /**
   * <p>A list of hosts and the details for each host, such as status, endpoint, and provider
   *       type.</p>
   * @public
   */
  Hosts?: Host[] | undefined;

  /**
   * <p>A token that can be used in the next <code>ListHosts</code> call. To view all items in the
   *       list, continue to call this operation with each subsequent token until no more
   *       <code>nextToken</code> values are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoryLinksInput {
  /**
   * <p>
   * A non-zero, non-negative integer used to limit the number of returned results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   * An enumeration token that, when provided in a request, returns the next batch of the results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoryLinksOutput {
  /**
   * <p>Lists the repository links called by the list repository links operation.</p>
   * @public
   */
  RepositoryLinks: RepositoryLinkInfo[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the results of the operation. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsInput {
  /**
   * <p>The ID of the repository link for the sync definition for which you want to retrieve information.</p>
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * <p>The sync type of the repository link for the the sync definition for which you want to retrieve information.</p>
   * @public
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * <p>The definition for a repository with a sync configuration.</p>
 * @public
 */
export interface RepositorySyncDefinition {
  /**
   * <p>The branch specified for a repository sync definition.</p>
   * @public
   */
  Branch: string | undefined;

  /**
   * <p>The configuration file for a repository sync definition. This value comes from creating
   *       or updating the <code>config-file</code> field of a <code>sync-configuration</code>.</p>
   * @public
   */
  Directory: string | undefined;

  /**
   * <p>The parent resource specified for a repository sync definition.</p>
   * @public
   */
  Parent: string | undefined;

  /**
   * <p>The target resource specified for a repository sync definition. In some cases, such as CFN_STACK_SYNC, the parent and target resource are the same.</p>
   * @public
   */
  Target: string | undefined;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsOutput {
  /**
   * <p>The list of repository sync definitions returned by the request. A
   *         <code>RepositorySyncDefinition</code> is a mapping from a repository branch to all the
   *         Amazon Web Services resources that are being synced from that branch.</p>
   * @public
   */
  RepositorySyncDefinitions: RepositorySyncDefinition[] | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *       results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSyncConfigurationsInput {
  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the results of the operation.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the repository link for the requested list of sync configurations.</p>
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * <p>The sync type for the requested list of sync configurations.</p>
   * @public
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * @public
 */
export interface ListSyncConfigurationsOutput {
  /**
   * <p>The list of repository sync definitions returned by the request.</p>
   * @public
   */
  SyncConfigurations: SyncConfiguration[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags you want to modify or add to the resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of keys for the tags to be removed from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * <p>Two conflicting operations have been made on the same resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation is not supported. Check the connection status and try again.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateHostInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the host to be updated.</p>
   * @public
   */
  HostArn: string | undefined;

  /**
   * <p>The URL or endpoint of the host to be updated.</p>
   * @public
   */
  ProviderEndpoint?: string | undefined;

  /**
   * <p>The VPC configuration of the host to be updated. A VPC must be configured and the
   *       infrastructure to be represented by the host must already be connected to the VPC.</p>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateHostOutput {}

/**
 * <p>The conditional check failed. Try again later.</p>
 * @public
 */
export class ConditionalCheckFailedException extends __BaseException {
  readonly name: "ConditionalCheckFailedException" = "ConditionalCheckFailedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionalCheckFailedException, __BaseException>) {
    super({
      name: "ConditionalCheckFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionalCheckFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The update is out of sync. Try syncing again.</p>
 * @public
 */
export class UpdateOutOfSyncException extends __BaseException {
  readonly name: "UpdateOutOfSyncException" = "UpdateOutOfSyncException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UpdateOutOfSyncException, __BaseException>) {
    super({
      name: "UpdateOutOfSyncException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UpdateOutOfSyncException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateRepositoryLinkInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the connection for the repository link to be updated. The updated connection ARN must have the same providerType (such as GitHub) as the original connection ARN for the repo link.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the encryption key for the repository link to be updated.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The ID of the repository link to be updated.</p>
   * @public
   */
  RepositoryLinkId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryLinkOutput {
  /**
   * <p>Information about the repository link to be updated.</p>
   * @public
   */
  RepositoryLinkInfo: RepositoryLinkInfo | undefined;
}

/**
 * <p>Retrying the latest commit failed. Try again later.</p>
 * @public
 */
export class RetryLatestCommitFailedException extends __BaseException {
  readonly name: "RetryLatestCommitFailedException" = "RetryLatestCommitFailedException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RetryLatestCommitFailedException, __BaseException>) {
    super({
      name: "RetryLatestCommitFailedException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, RetryLatestCommitFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Unable to continue. The sync blocker does not exist.</p>
 * @public
 */
export class SyncBlockerDoesNotExistException extends __BaseException {
  readonly name: "SyncBlockerDoesNotExistException" = "SyncBlockerDoesNotExistException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SyncBlockerDoesNotExistException, __BaseException>) {
    super({
      name: "SyncBlockerDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SyncBlockerDoesNotExistException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateSyncBlockerInput {
  /**
   * <p>The ID of the sync blocker to be updated.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The sync type of the sync blocker to be updated.</p>
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * <p>The name of the resource for the sync blocker to be updated.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The reason for resolving the sync blocker.</p>
   * @public
   */
  ResolvedReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateSyncBlockerOutput {
  /**
   * <p>The resource name for the sync blocker.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The parent resource name for the sync blocker.</p>
   * @public
   */
  ParentResourceName?: string | undefined;

  /**
   * <p>Information about the sync blocker to be updated.</p>
   * @public
   */
  SyncBlocker: SyncBlocker | undefined;
}

/**
 * @public
 */
export interface UpdateSyncConfigurationInput {
  /**
   * <p>The branch for the sync configuration to be updated.</p>
   * @public
   */
  Branch?: string | undefined;

  /**
   * <p>The configuration file for the sync configuration to be updated.</p>
   * @public
   */
  ConfigFile?: string | undefined;

  /**
   * <p>The ID of the repository link for the sync configuration to be updated.</p>
   * @public
   */
  RepositoryLinkId?: string | undefined;

  /**
   * <p>The name of the Amazon Web Services resource for the sync configuration to be
   *       updated.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The ARN of the IAM role for the sync configuration to be updated.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The sync type for the sync configuration to be updated.</p>
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * <p>Whether to enable or disable publishing of deployment status to source providers.</p>
   * @public
   */
  PublishDeploymentStatus?: PublishDeploymentStatus | undefined;

  /**
   * <p>When to trigger Git sync to begin the stack update.</p>
   * @public
   */
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn | undefined;

  /**
   * <p>TA toggle that specifies whether to enable or disable pull request comments for the sync configuration to be updated.</p>
   * @public
   */
  PullRequestComment?: PullRequestComment | undefined;
}

/**
 * @public
 */
export interface UpdateSyncConfigurationOutput {
  /**
   * <p>The information returned for the sync configuration to be updated.</p>
   * @public
   */
  SyncConfiguration: SyncConfiguration | undefined;
}
