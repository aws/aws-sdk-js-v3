// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeStarConnectionsServiceException as __BaseException } from "./CodeStarConnectionsServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>A tag is a key-value pair that is used to manage the resource.</p>
 *          <p>This tag is available for use by Amazon Web Services services that support tags.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The tag's key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The tag's value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionInput {
  /**
   * @public
   * <p>The name of the external provider where your third-party code repository is
   *       configured.</p>
   */
  ProviderType?: ProviderType;

  /**
   * @public
   * <p>The name of the connection to be created.</p>
   */
  ConnectionName: string | undefined;

  /**
   * @public
   * <p>The key-value pair to use when tagging the resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the host associated with the connection to be created.</p>
   */
  HostArn?: string;
}

/**
 * @public
 */
export interface CreateConnectionOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connection to be created. The ARN is used as the
   *       connection reference when the connection is shared between Amazon Web Services services.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
   */
  ConnectionArn: string | undefined;

  /**
   * @public
   * <p>Specifies the tags applied to the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Exceeded the maximum limit for connections.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Resource not found. Verify the connection resource ARN and try again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Resource not found. Verify the ARN for the host resource and try again.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The VPC configuration provisioned for the host.</p>
 */
export interface VpcConfiguration {
  /**
   * @public
   * <p>The ID of the Amazon VPC connected to the infrastructure where your provider type is
   *       installed.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The ID of the subnet or subnets associated with the Amazon VPC connected to the
   *       infrastructure where your provider type is installed.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The ID of the security group or security groups associated with the Amazon VPC connected
   *       to the infrastructure where your provider type is installed.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed.</p>
   */
  TlsCertificate?: string;
}

/**
 * @public
 */
export interface CreateHostInput {
  /**
   * @public
   * <p>The name of the host to be created.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the installed provider to be associated with your connection. The host
   *       resource represents the infrastructure where your provider type is installed. The valid
   *       provider type is GitHub Enterprise Server.</p>
   */
  ProviderType: ProviderType | undefined;

  /**
   * @public
   * <p>The endpoint of the infrastructure to be represented by the host after it is
   *       created.</p>
   */
  ProviderEndpoint: string | undefined;

  /**
   * @public
   * <p>The VPC configuration to be provisioned for the host. A VPC must be configured and the
   *       infrastructure to be represented by the host must already be connected to the VPC.</p>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>Tags for the host to be created.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateHostOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the host to be created.</p>
   */
  HostArn?: string;

  /**
   * @public
   * <p>Tags for the created host.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time. </p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the connection to be associated with the repository link.</p>
   */
  ConnectionArn: string | undefined;

  /**
   * @public
   * <p>The owner ID for the repository associated with a specific sync configuration, such as
   *       the owner ID in GitHub.</p>
   */
  OwnerId: string | undefined;

  /**
   * @public
   * <p>The name of the repository to be associated with the repository link.</p>
   */
  RepositoryName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) encryption key for the repository to be associated with the repository link.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
   * <p>The tags for the repository to be associated with the repository link.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Information about the repository link resource, such as the repository link ARN, the associated connection ARN, encryption key ARN, and owner ID.</p>
 */
export interface RepositoryLinkInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connection associated with the repository link.</p>
   */
  ConnectionArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the encryption key for the repository associated with the repository link.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
   * <p>The owner ID for the repository associated with the repository link, such as the owner
   *       ID in GitHub.</p>
   */
  OwnerId: string | undefined;

  /**
   * @public
   * <p>The provider type for the connection, such as GitHub, associated with the repository link.</p>
   */
  ProviderType: ProviderType | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the repository link.</p>
   */
  RepositoryLinkArn: string | undefined;

  /**
   * @public
   * <p>The ID of the repository link.</p>
   */
  RepositoryLinkId: string | undefined;

  /**
   * @public
   * <p>The name of the repository associated with the repository link.</p>
   */
  RepositoryName: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryLinkOutput {
  /**
   * @public
   * <p>The returned information about the created repository link.</p>
   */
  RepositoryLinkInfo: RepositoryLinkInfo | undefined;
}

/**
 * @public
 * <p>Received an internal server exception. Try again later.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * @public
 * <p>The input is not valid. Verify that the action is typed correctly.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Unable to create resource. Resource already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The branch in the repository from which changes will be synced.</p>
   */
  Branch: string | undefined;

  /**
   * @public
   * <p>The file name of the configuration file that manages syncing between the connection and the repository. This configuration file is stored in the repository.</p>
   */
  ConfigFile: string | undefined;

  /**
   * @public
   * <p>The ID of the repository link created for the connection. A repository link allows Git
   *       sync to monitor and sync changes to files in a specified Git repository.</p>
   */
  RepositoryLinkId: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon Web Services resource (for example, a CloudFormation stack in the
   *       case of CFN_STACK_SYNC) that will be synchronized from the linked repository.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role that grants permission for Amazon Web Services to use Git sync to
   *       update a given Amazon Web Services resource on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The type of sync configuration.</p>
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * @public
   * <p>Whether to enable or disable publishing of deployment status to source providers.</p>
   */
  PublishDeploymentStatus?: PublishDeploymentStatus;

  /**
   * @public
   * <p>When to trigger Git sync to begin the stack update.</p>
   */
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn;
}

/**
 * @public
 * <p>Information, such as repository, branch, provider, and resource names for a specific sync configuration.</p>
 */
export interface SyncConfiguration {
  /**
   * @public
   * <p>The branch associated with a specific sync configuration.</p>
   */
  Branch: string | undefined;

  /**
   * @public
   * <p>The file path to the configuration file associated with a specific sync configuration. The path should point to an actual file in the sync configurations linked repository.</p>
   */
  ConfigFile?: string;

  /**
   * @public
   * <p>The owner ID for the repository associated with a specific sync configuration, such as
   *       the owner ID in GitHub.</p>
   */
  OwnerId: string | undefined;

  /**
   * @public
   * <p>The connection provider type associated with a specific sync configuration, such as
   *       GitHub.</p>
   */
  ProviderType: ProviderType | undefined;

  /**
   * @public
   * <p>The ID of the repository link associated with a specific sync configuration.</p>
   */
  RepositoryLinkId: string | undefined;

  /**
   * @public
   * <p>The name of the repository associated with a specific sync configuration.</p>
   */
  RepositoryName: string | undefined;

  /**
   * @public
   * <p>The name of the connection resource associated with a specific sync configuration.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with a specific sync configuration.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The type of sync for a specific sync configuration.</p>
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * @public
   * <p>Whether to enable or disable publishing of deployment status to source providers.</p>
   */
  PublishDeploymentStatus?: PublishDeploymentStatus;

  /**
   * @public
   * <p>When to trigger Git sync to begin the stack update.</p>
   */
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn;
}

/**
 * @public
 */
export interface CreateSyncConfigurationOutput {
  /**
   * @public
   * <p>The created sync configuration for the connection. A sync configuration allows Amazon Web Services to sync content from a Git repository to update a specified Amazon Web Services
   *       resource. </p>
   */
  SyncConfiguration: SyncConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connection to be deleted.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the host to be deleted.</p>
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
   * @public
   * <p>The ID of the repository link to be deleted.</p>
   */
  RepositoryLinkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryLinkOutput {}

/**
 * @public
 * <p>Unable to continue. The sync blocker still exists.</p>
 */
export class SyncConfigurationStillExistsException extends __BaseException {
  readonly name: "SyncConfigurationStillExistsException" = "SyncConfigurationStillExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The specified provider type is not supported for connections.</p>
 */
export class UnsupportedProviderTypeException extends __BaseException {
  readonly name: "UnsupportedProviderTypeException" = "UnsupportedProviderTypeException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The type of sync configuration to be deleted.</p>
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * @public
   * <p>The name of the Amazon Web Services resource associated with the sync configuration to be
   *       deleted.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of a connection.</p>
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
 * @public
 * <p>A resource that is used to connect third-party source providers with services like CodePipeline.</p>
 *          <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the
 *       connection in the console.</p>
 */
export interface Connection {
  /**
   * @public
   * <p>The name of the connection. Connection names must be unique in an Amazon Web Services account.</p>
   */
  ConnectionName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection
   *       reference when the connection is shared between Amazon Web Services.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The name of the external provider where your third-party code repository is
   *       configured.</p>
   */
  ProviderType?: ProviderType;

  /**
   * @public
   * <p>The identifier of the external provider where your third-party code repository is configured.
   *       For Bitbucket, this is the account ID of the owner of the Bitbucket repository.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>The current status of the connection. </p>
   */
  ConnectionStatus?: ConnectionStatus;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the host associated with the connection.</p>
   */
  HostArn?: string;
}

/**
 * @public
 */
export interface GetConnectionOutput {
  /**
   * @public
   * <p>The connection details, such as status, owner, and provider type.</p>
   */
  Connection?: Connection;
}

/**
 * @public
 */
export interface GetHostInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the requested host.</p>
   */
  HostArn: string | undefined;
}

/**
 * @public
 */
export interface GetHostOutput {
  /**
   * @public
   * <p>The name of the requested host.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of the requested host.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The provider type of the requested host, such as GitHub Enterprise Server.</p>
   */
  ProviderType?: ProviderType;

  /**
   * @public
   * <p>The endpoint of the infrastructure represented by the requested host.</p>
   */
  ProviderEndpoint?: string;

  /**
   * @public
   * <p>The VPC configuration of the requested host.</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

/**
 * @public
 */
export interface GetRepositoryLinkInput {
  /**
   * @public
   * <p>The ID of the repository link to get.</p>
   */
  RepositoryLinkId: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryLinkOutput {
  /**
   * @public
   * <p>The information returned for a specified repository link.</p>
   */
  RepositoryLinkInfo: RepositoryLinkInfo | undefined;
}

/**
 * @public
 */
export interface GetRepositorySyncStatusInput {
  /**
   * @public
   * <p>The branch of the repository link for the requested repository sync status.</p>
   */
  Branch: string | undefined;

  /**
   * @public
   * <p>The repository link ID for the requested repository sync status.</p>
   */
  RepositoryLinkId: string | undefined;

  /**
   * @public
   * <p>The sync type of the requested sync status.</p>
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * @public
 * <p>Information about a repository sync event.</p>
 */
export interface RepositorySyncEvent {
  /**
   * @public
   * <p>A description of a repository sync event.</p>
   */
  Event: string | undefined;

  /**
   * @public
   * <p>The ID for a repository sync event.</p>
   */
  ExternalId?: string;

  /**
   * @public
   * <p>The time that a repository sync event occurred.</p>
   */
  Time: Date | undefined;

  /**
   * @public
   * <p>The event type for a repository sync event.</p>
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
 * @public
 * <p>Information about a repository sync attempt for a repository with a sync configuration.</p>
 */
export interface RepositorySyncAttempt {
  /**
   * @public
   * <p>The start time of a specific sync attempt.</p>
   */
  StartedAt: Date | undefined;

  /**
   * @public
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
   */
  Status: RepositorySyncStatus | undefined;

  /**
   * @public
   * <p>The events associated with a specific sync attempt.</p>
   */
  Events: RepositorySyncEvent[] | undefined;
}

/**
 * @public
 */
export interface GetRepositorySyncStatusOutput {
  /**
   * @public
   * <p>The status of the latest sync returned for a specified repository and branch.</p>
   */
  LatestSync: RepositorySyncAttempt | undefined;
}

/**
 * @public
 */
export interface GetResourceSyncStatusInput {
  /**
   * @public
   * <p>The name of the Amazon Web Services resource for the sync status with the Git
   *       repository.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The sync type for the sync status with the Git repository.</p>
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * @public
 * <p>Information about the revision for a specific sync event, such as the branch, owner ID, and name of the repository.</p>
 */
export interface Revision {
  /**
   * @public
   * <p>The branch name for a specific revision.</p>
   */
  Branch: string | undefined;

  /**
   * @public
   * <p>The directory, if any, for a specific revision.</p>
   */
  Directory: string | undefined;

  /**
   * @public
   * <p>The owner ID for a specific revision, such as the GitHub owner ID for a GitHub repository.</p>
   */
  OwnerId: string | undefined;

  /**
   * @public
   * <p>The repository name for a specific revision.</p>
   */
  RepositoryName: string | undefined;

  /**
   * @public
   * <p>The provider type for a revision, such as GitHub.</p>
   */
  ProviderType: ProviderType | undefined;

  /**
   * @public
   * <p>The SHA, such as the commit ID, for a specific revision.</p>
   */
  Sha: string | undefined;
}

/**
 * @public
 * <p>Information about a resource sync event for the resource associated with a sync configuration.</p>
 */
export interface ResourceSyncEvent {
  /**
   * @public
   * <p>The event for a resource sync event.</p>
   */
  Event: string | undefined;

  /**
   * @public
   * <p>The ID for a resource sync event.</p>
   */
  ExternalId?: string;

  /**
   * @public
   * <p>The time that a resource sync event occurred.</p>
   */
  Time: Date | undefined;

  /**
   * @public
   * <p>The type of resource sync event.</p>
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
 * @public
 * <p>Information about a resource sync attempt.</p>
 */
export interface ResourceSyncAttempt {
  /**
   * @public
   * <p>The events related to a resource sync attempt.</p>
   */
  Events: ResourceSyncEvent[] | undefined;

  /**
   * @public
   * <p>The current state of the resource as defined in the resource's <code>config-file</code>
   *       in the linked repository.</p>
   */
  InitialRevision: Revision | undefined;

  /**
   * @public
   * <p>The start time for a resource sync attempt.</p>
   */
  StartedAt: Date | undefined;

  /**
   * @public
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
   */
  Status: ResourceSyncStatus | undefined;

  /**
   * @public
   * <p>The desired state of the resource as defined in the resource's <code>config-file</code>
   *       in the linked repository. Git sync attempts to update the resource to this state.</p>
   */
  TargetRevision: Revision | undefined;

  /**
   * @public
   * <p>The name of the Amazon Web Services resource that is attempted to be synchronized.</p>
   */
  Target: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSyncStatusOutput {
  /**
   * @public
   * <p>The desired state of the Amazon Web Services resource for the sync status with the Git
   *       repository.</p>
   */
  DesiredState?: Revision;

  /**
   * @public
   * <p>The latest successful sync for the sync status with the Git repository.</p>
   */
  LatestSuccessfulSync?: ResourceSyncAttempt;

  /**
   * @public
   * <p>The latest sync for the sync status with the Git repository, whether successful or not.</p>
   */
  LatestSync: ResourceSyncAttempt | undefined;
}

/**
 * @public
 */
export interface GetSyncBlockerSummaryInput {
  /**
   * @public
   * <p>The sync type for the sync blocker summary.</p>
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * @public
   * <p>The name of the Amazon Web Services resource currently blocked from automatically being synced from a Git repository.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 * <p>The context for a specific sync blocker.</p>
 */
export interface SyncBlockerContext {
  /**
   * @public
   * <p>The key provided for a context key-value pair for a specific sync blocker.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value provided for a context key-value pair for a specific sync blocker.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Information about a blocker for a sync event.</p>
 */
export interface SyncBlocker {
  /**
   * @public
   * <p>The ID for a specific sync blocker.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The sync blocker type.</p>
   */
  Type: BlockerType | undefined;

  /**
   * @public
   * <p>The status for a specific sync blocker.</p>
   */
  Status: BlockerStatus | undefined;

  /**
   * @public
   * <p>The provided reason for a specific sync blocker.</p>
   */
  CreatedReason: string | undefined;

  /**
   * @public
   * <p>The creation time for a specific sync blocker.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>The contexts for a specific sync blocker.</p>
   */
  Contexts?: SyncBlockerContext[];

  /**
   * @public
   * <p>The resolved reason for a specific sync blocker.</p>
   */
  ResolvedReason?: string;

  /**
   * @public
   * <p>The time that a specific sync blocker was resolved.</p>
   */
  ResolvedAt?: Date;
}

/**
 * @public
 * <p>A summary for sync blockers.</p>
 */
export interface SyncBlockerSummary {
  /**
   * @public
   * <p>The resource name for sync blocker summary.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The parent resource name for a sync blocker summary.</p>
   */
  ParentResourceName?: string;

  /**
   * @public
   * <p>The latest events for a sync blocker summary.</p>
   */
  LatestBlockers?: SyncBlocker[];
}

/**
 * @public
 */
export interface GetSyncBlockerSummaryOutput {
  /**
   * @public
   * <p>The list of sync blockers for a specified resource.</p>
   */
  SyncBlockerSummary: SyncBlockerSummary | undefined;
}

/**
 * @public
 */
export interface GetSyncConfigurationInput {
  /**
   * @public
   * <p>The sync type for the sync configuration for which you want to retrieve information.</p>
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * @public
   * <p>The name of the Amazon Web Services resource for the sync configuration for which you
   *       want to retrieve information.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GetSyncConfigurationOutput {
  /**
   * @public
   * <p>The details about the sync configuration for which you want to retrieve information.</p>
   */
  SyncConfiguration: SyncConfiguration | undefined;
}

/**
 * @public
 */
export interface ListConnectionsInput {
  /**
   * @public
   * <p>Filters the list of connections to those associated with a specified provider, such as
   *       Bitbucket.</p>
   */
  ProviderTypeFilter?: ProviderType;

  /**
   * @public
   * <p>Filters the list of connections to those associated with a specified host.</p>
   */
  HostArnFilter?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that was returned from the previous <code>ListConnections</code> call, which
   *       can be used to return the next set of connections in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectionsOutput {
  /**
   * @public
   * <p>A list of connections and the details for each connection, such as status, owner, and
   *       provider type.</p>
   */
  Connections?: Connection[];

  /**
   * @public
   * <p>A token that can be used in the next <code>ListConnections</code> call. To view all
   *       items in the list, continue to call this operation with each subsequent token until no more
   *       <code>nextToken</code> values are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHostsInput {
  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that was returned from the previous <code>ListHosts</code> call, which can be
   *       used to return the next set of hosts in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A resource that represents the infrastructure where a third-party provider is installed.
 *       The host is used when you create connections to an installed third-party provider type, such
 *       as GitHub Enterprise Server. You create one host for all connections to that provider.</p>
 *          <note>
 *             <p>A host created through the CLI or the SDK is in `PENDING` status by
 *         default. You can make its status `AVAILABLE` by setting up the host in the console.</p>
 *          </note>
 */
export interface Host {
  /**
   * @public
   * <p>The name of the host.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the host.</p>
   */
  HostArn?: string;

  /**
   * @public
   * <p>The name of the installed provider to be associated with your connection. The host
   *       resource represents the infrastructure where your provider type is installed. The valid
   *       provider type is GitHub Enterprise Server.</p>
   */
  ProviderType?: ProviderType;

  /**
   * @public
   * <p>The endpoint of the infrastructure where your provider type is installed.</p>
   */
  ProviderEndpoint?: string;

  /**
   * @public
   * <p>The VPC configuration provisioned for the host.</p>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>The status of the host, such as PENDING, AVAILABLE, VPC_CONFIG_DELETING, VPC_CONFIG_INITIALIZING, and VPC_CONFIG_FAILED_INITIALIZATION.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The status description for the host.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface ListHostsOutput {
  /**
   * @public
   * <p>A list of hosts and the details for each host, such as status, endpoint, and provider
   *       type.</p>
   */
  Hosts?: Host[];

  /**
   * @public
   * <p>A token that can be used in the next <code>ListHosts</code> call. To view all items in the
   *       list, continue to call this operation with each subsequent token until no more
   *       <code>nextToken</code> values are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRepositoryLinksInput {
  /**
   * @public
   * <p>
   * A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>
   * An enumeration token that, when provided in a request, returns the next batch of the results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRepositoryLinksOutput {
  /**
   * @public
   * <p>Lists the repository links called by the list repository links operation.</p>
   */
  RepositoryLinks: RepositoryLinkInfo[] | undefined;

  /**
   * @public
   * <p>An enumeration token that allows the operation to batch the results of the operation. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsInput {
  /**
   * @public
   * <p>The ID of the repository link for the sync definition for which you want to retrieve information.</p>
   */
  RepositoryLinkId: string | undefined;

  /**
   * @public
   * <p>The sync type of the repository link for the the sync definition for which you want to retrieve information.</p>
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * @public
 * <p>The definition for a repository with a sync configuration.</p>
 */
export interface RepositorySyncDefinition {
  /**
   * @public
   * <p>The branch specified for a repository sync definition.</p>
   */
  Branch: string | undefined;

  /**
   * @public
   * <p>The configuration file for a repository sync definition. This value comes from creating
   *       or updating the <code>config-file</code> field of a <code>sync-configuration</code>.</p>
   */
  Directory: string | undefined;

  /**
   * @public
   * <p>The parent resource specified for a repository sync definition.</p>
   */
  Parent: string | undefined;

  /**
   * @public
   * <p>The target resource specified for a repository sync definition. In some cases, such as CFN_STACK_SYNC, the parent and target resource are the same.</p>
   */
  Target: string | undefined;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsOutput {
  /**
   * @public
   * <p>The list of repository sync definitions returned by the request. A
   *         <code>RepositorySyncDefinition</code> is a mapping from a repository branch to all the
   *         Amazon Web Services resources that are being synced from that branch.</p>
   */
  RepositorySyncDefinitions: RepositorySyncDefinition[] | undefined;

  /**
   * @public
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *       results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSyncConfigurationsInput {
  /**
   * @public
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An enumeration token that allows the operation to batch the results of the operation.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the repository link for the requested list of sync configurations.</p>
   */
  RepositoryLinkId: string | undefined;

  /**
   * @public
   * <p>The sync type for the requested list of sync configurations.</p>
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * @public
 */
export interface ListSyncConfigurationsOutput {
  /**
   * @public
   * <p>The list of repository sync definitions returned by the request.</p>
   */
  SyncConfigurations: SyncConfiguration[] | undefined;

  /**
   * @public
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags you want to modify or add to the resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The list of keys for the tags to be removed from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 * <p>Two conflicting operations have been made on the same resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The operation is not supported. Check the connection status and try again.</p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the host to be updated.</p>
   */
  HostArn: string | undefined;

  /**
   * @public
   * <p>The URL or endpoint of the host to be updated.</p>
   */
  ProviderEndpoint?: string;

  /**
   * @public
   * <p>The VPC configuration of the host to be updated. A VPC must be configured and the
   *       infrastructure to be represented by the host must already be connected to the VPC.</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

/**
 * @public
 */
export interface UpdateHostOutput {}

/**
 * @public
 * <p>The conditional check failed. Try again later.</p>
 */
export class ConditionalCheckFailedException extends __BaseException {
  readonly name: "ConditionalCheckFailedException" = "ConditionalCheckFailedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The update is out of sync. Try syncing again.</p>
 */
export class UpdateOutOfSyncException extends __BaseException {
  readonly name: "UpdateOutOfSyncException" = "UpdateOutOfSyncException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the connection for the repository link to be updated. The updated connection ARN must have the same providerType (such as GitHub) as the original connection ARN for the repo link.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the encryption key for the repository link to be updated.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
   * <p>The ID of the repository link to be updated.</p>
   */
  RepositoryLinkId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryLinkOutput {
  /**
   * @public
   * <p>Information about the repository link to be updated.</p>
   */
  RepositoryLinkInfo: RepositoryLinkInfo | undefined;
}

/**
 * @public
 * <p>Retrying the latest commit failed. Try again later.</p>
 */
export class RetryLatestCommitFailedException extends __BaseException {
  readonly name: "RetryLatestCommitFailedException" = "RetryLatestCommitFailedException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * @public
 * <p>Unable to continue. The sync blocker does not exist.</p>
 */
export class SyncBlockerDoesNotExistException extends __BaseException {
  readonly name: "SyncBlockerDoesNotExistException" = "SyncBlockerDoesNotExistException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The ID of the sync blocker to be updated.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The sync type of the sync blocker to be updated.</p>
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * @public
   * <p>The name of the resource for the sync blocker to be updated.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The reason for resolving the sync blocker.</p>
   */
  ResolvedReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateSyncBlockerOutput {
  /**
   * @public
   * <p>The resource name for the sync blocker.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The parent resource name for the sync blocker.</p>
   */
  ParentResourceName?: string;

  /**
   * @public
   * <p>Information about the sync blocker to be updated.</p>
   */
  SyncBlocker: SyncBlocker | undefined;
}

/**
 * @public
 */
export interface UpdateSyncConfigurationInput {
  /**
   * @public
   * <p>The branch for the sync configuration to be updated.</p>
   */
  Branch?: string;

  /**
   * @public
   * <p>The configuration file for the sync configuration to be updated.</p>
   */
  ConfigFile?: string;

  /**
   * @public
   * <p>The ID of the repository link for the sync configuration to be updated.</p>
   */
  RepositoryLinkId?: string;

  /**
   * @public
   * <p>The name of the Amazon Web Services resource for the sync configuration to be
   *       updated.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role for the sync configuration to be updated.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The sync type for the sync configuration to be updated.</p>
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * @public
   * <p>Whether to enable or disable publishing of deployment status to source providers.</p>
   */
  PublishDeploymentStatus?: PublishDeploymentStatus;

  /**
   * @public
   * <p>When to trigger Git sync to begin the stack update.</p>
   */
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn;
}

/**
 * @public
 */
export interface UpdateSyncConfigurationOutput {
  /**
   * @public
   * <p>The information returned for the sync configuration to be updated.</p>
   */
  SyncConfiguration: SyncConfiguration | undefined;
}
