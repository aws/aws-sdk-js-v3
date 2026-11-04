// smithy-typescript generated code
import type {
  BlockerStatus,
  BlockerType,
  ConnectionStatus,
  ProviderType,
  PublishDeploymentStatus,
  RepositorySyncStatus,
  ResourceSyncStatus,
  SyncConfigurationType,
  TriggerResourceUpdateOn,
} from "./enums";

/**
 * A tag is a key-value pair that is used to manage the resource.
 *
 * This tag is available for use by Amazon Web Services services that support tags.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag's key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The tag's value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionInput {
  /**
   * The name of the external provider where your third-party code repository is configured.
   *
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * The name of the connection to be created.
   *
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * The key-value pair to use when tagging the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the host associated with the connection to be created.
   *
   * @public
   */
  HostArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionOutput {
  /**
   * The Amazon Resource Name (ARN) of the connection to be created. The ARN is used as the connection reference when the connection is shared between Amazon Web Services services.
   *
   * > **Note:** The ARN is never reused if the connection is deleted.
   *
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * Specifies the tags applied to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The VPC configuration provisioned for the host.
 *
 * @public
 */
export interface VpcConfiguration {
  /**
   * The ID of the Amazon VPC connected to the infrastructure where your provider type is installed.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The ID of the subnet or subnets associated with the Amazon VPC connected to the infrastructure where your provider type is installed.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The ID of the security group or security groups associated with the Amazon VPC connected to the infrastructure where your provider type is installed.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed.
   *
   * @public
   */
  TlsCertificate?: string | undefined;
}

/**
 * @public
 */
export interface CreateHostInput {
  /**
   * The name of the host to be created.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the installed provider to be associated with your connection. The host resource represents the infrastructure where your provider type is installed. The valid provider type is GitHub Enterprise Server.
   *
   * @public
   */
  ProviderType: ProviderType | undefined;

  /**
   * The endpoint of the infrastructure to be represented by the host after it is created.
   *
   * @public
   */
  ProviderEndpoint: string | undefined;

  /**
   * The VPC configuration to be provisioned for the host. A VPC must be configured and the infrastructure to be represented by the host must already be connected to the VPC.
   *
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * Tags for the host to be created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHostOutput {
  /**
   * The Amazon Resource Name (ARN) of the host to be created.
   *
   * @public
   */
  HostArn?: string | undefined;

  /**
   * Tags for the created host.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryLinkInput {
  /**
   * The Amazon Resource Name (ARN) of the connection to be associated with the repository link.
   *
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * The owner ID for the repository associated with a specific sync configuration, such as the owner ID in GitHub.
   *
   * @public
   */
  OwnerId: string | undefined;

  /**
   * The name of the repository to be associated with the repository link.
   *
   * @public
   */
  RepositoryName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) encryption key for the repository to be associated with the repository link.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The tags for the repository to be associated with the repository link.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Information about the repository link resource, such as the repository link ARN, the associated connection ARN, encryption key ARN, and owner ID.
 *
 * @public
 */
export interface RepositoryLinkInfo {
  /**
   * The Amazon Resource Name (ARN) of the connection associated with the repository link.
   *
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the encryption key for the repository associated with the repository link.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The owner ID for the repository associated with the repository link, such as the owner ID in GitHub.
   *
   * @public
   */
  OwnerId: string | undefined;

  /**
   * The provider type for the connection, such as GitHub, associated with the repository link.
   *
   * @public
   */
  ProviderType: ProviderType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the repository link.
   *
   * @public
   */
  RepositoryLinkArn: string | undefined;

  /**
   * The ID of the repository link.
   *
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * The name of the repository associated with the repository link.
   *
   * @public
   */
  RepositoryName: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryLinkOutput {
  /**
   * The returned information about the created repository link.
   *
   * @public
   */
  RepositoryLinkInfo: RepositoryLinkInfo | undefined;
}

/**
 * @public
 */
export interface CreateSyncConfigurationInput {
  /**
   * The branch in the repository from which changes will be synced.
   *
   * @public
   */
  Branch: string | undefined;

  /**
   * The file name of the configuration file that manages syncing between the connection and the repository. This configuration file is stored in the repository.
   *
   * @public
   */
  ConfigFile: string | undefined;

  /**
   * The ID of the repository link created for the connection. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.
   *
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * The name of the Amazon Web Services resource (for example, a CloudFormation stack in the case of CFN_STACK_SYNC) that will be synchronized from the linked repository.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The ARN of the IAM role that grants permission for Amazon Web Services to use Git sync to update a given Amazon Web Services resource on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The type of sync configuration.
   *
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * Whether to enable or disable publishing of deployment status to source providers.
   *
   * @public
   */
  PublishDeploymentStatus?: PublishDeploymentStatus | undefined;

  /**
   * When to trigger Git sync to begin the stack update.
   *
   * @public
   */
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn | undefined;
}

/**
 * Information, such as repository, branch, provider, and resource names for a specific sync configuration.
 *
 * @public
 */
export interface SyncConfiguration {
  /**
   * The branch associated with a specific sync configuration.
   *
   * @public
   */
  Branch: string | undefined;

  /**
   * The file path to the configuration file associated with a specific sync configuration. The path should point to an actual file in the sync configurations linked repository.
   *
   * @public
   */
  ConfigFile?: string | undefined;

  /**
   * The owner ID for the repository associated with a specific sync configuration, such as the owner ID in GitHub.
   *
   * @public
   */
  OwnerId: string | undefined;

  /**
   * The connection provider type associated with a specific sync configuration, such as GitHub.
   *
   * @public
   */
  ProviderType: ProviderType | undefined;

  /**
   * The ID of the repository link associated with a specific sync configuration.
   *
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * The name of the repository associated with a specific sync configuration.
   *
   * @public
   */
  RepositoryName: string | undefined;

  /**
   * The name of the connection resource associated with a specific sync configuration.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with a specific sync configuration.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The type of sync for a specific sync configuration.
   *
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * Whether to enable or disable publishing of deployment status to source providers.
   *
   * @public
   */
  PublishDeploymentStatus?: PublishDeploymentStatus | undefined;

  /**
   * When to trigger Git sync to begin the stack update.
   *
   * @public
   */
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn | undefined;
}

/**
 * @public
 */
export interface CreateSyncConfigurationOutput {
  /**
   * The created sync configuration for the connection. A sync configuration allows Amazon Web Services to sync content from a Git repository to update a specified Amazon Web Services resource.
   *
   * @public
   */
  SyncConfiguration: SyncConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionInput {
  /**
   * The Amazon Resource Name (ARN) of the connection to be deleted.
   *
   * > **Note:** The ARN is never reused if the connection is deleted.
   *
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
   * The Amazon Resource Name (ARN) of the host to be deleted.
   *
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
   * The ID of the repository link to be deleted.
   *
   * @public
   */
  RepositoryLinkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryLinkOutput {}

/**
 * @public
 */
export interface DeleteSyncConfigurationInput {
  /**
   * The type of sync configuration to be deleted.
   *
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * The name of the Amazon Web Services resource associated with the sync configuration to be deleted.
   *
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
   * The Amazon Resource Name (ARN) of a connection.
   *
   * @public
   */
  ConnectionArn: string | undefined;
}

/**
 * A resource that is used to connect third-party source providers with services like CodePipeline.
 *
 * Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.
 *
 * @public
 */
export interface Connection {
  /**
   * The name of the connection. Connection names must be unique in an Amazon Web Services account.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection reference when the connection is shared between Amazon Web Services services.
   *
   * > **Note:** The ARN is never reused if the connection is deleted.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The name of the external provider where your third-party code repository is configured.
   *
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * The identifier of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The current status of the connection.
   *
   * @public
   */
  ConnectionStatus?: ConnectionStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the host associated with the connection.
   *
   * @public
   */
  HostArn?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionOutput {
  /**
   * The connection details, such as status, owner, and provider type.
   *
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * @public
 */
export interface GetHostInput {
  /**
   * The Amazon Resource Name (ARN) of the requested host.
   *
   * @public
   */
  HostArn: string | undefined;
}

/**
 * @public
 */
export interface GetHostOutput {
  /**
   * The name of the requested host.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the requested host.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The provider type of the requested host, such as GitHub Enterprise Server.
   *
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * The endpoint of the infrastructure represented by the requested host.
   *
   * @public
   */
  ProviderEndpoint?: string | undefined;

  /**
   * The VPC configuration of the requested host.
   *
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;
}

/**
 * @public
 */
export interface GetRepositoryLinkInput {
  /**
   * The ID of the repository link to get.
   *
   * @public
   */
  RepositoryLinkId: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryLinkOutput {
  /**
   * The information returned for a specified repository link.
   *
   * @public
   */
  RepositoryLinkInfo: RepositoryLinkInfo | undefined;
}

/**
 * @public
 */
export interface GetRepositorySyncStatusInput {
  /**
   * The branch of the repository link for the requested repository sync status.
   *
   * @public
   */
  Branch: string | undefined;

  /**
   * The repository link ID for the requested repository sync status.
   *
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * The sync type of the requested sync status.
   *
   * @public
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * Information about a repository sync event.
 *
 * @public
 */
export interface RepositorySyncEvent {
  /**
   * A description of a repository sync event.
   *
   * @public
   */
  Event: string | undefined;

  /**
   * The ID for a repository sync event.
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * The time that a repository sync event occurred.
   *
   * @public
   */
  Time: Date | undefined;

  /**
   * The event type for a repository sync event.
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * Information about a repository sync attempt for a repository with a sync configuration.
 *
 * @public
 */
export interface RepositorySyncAttempt {
  /**
   * The start time of a specific sync attempt.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The status of a specific sync attempt. The following are valid statuses:
   *
   * - INITIATED - A repository sync attempt has been created and will begin soon.
   * - IN_PROGRESS - A repository sync attempt has started and work is being done to reconcile the branch.
   * - SUCCEEDED - The repository sync attempt has completed successfully.
   * - FAILED - The repository sync attempt has failed.
   * - QUEUED - The repository sync attempt didn't execute and was queued.
   *
   * @public
   */
  Status: RepositorySyncStatus | undefined;

  /**
   * The events associated with a specific sync attempt.
   *
   * @public
   */
  Events: RepositorySyncEvent[] | undefined;
}

/**
 * @public
 */
export interface GetRepositorySyncStatusOutput {
  /**
   * The status of the latest sync returned for a specified repository and branch.
   *
   * @public
   */
  LatestSync: RepositorySyncAttempt | undefined;
}

/**
 * @public
 */
export interface GetResourceSyncStatusInput {
  /**
   * The name of the Amazon Web Services resource for the sync status with the Git repository.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The sync type for the sync status with the Git repository.
   *
   * @public
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * Information about the revision for a specific sync event, such as the branch, owner ID, and name of the repository.
 *
 * @public
 */
export interface Revision {
  /**
   * The branch name for a specific revision.
   *
   * @public
   */
  Branch: string | undefined;

  /**
   * The directory, if any, for a specific revision.
   *
   * @public
   */
  Directory: string | undefined;

  /**
   * The owner ID for a specific revision, such as the GitHub owner ID for a GitHub repository.
   *
   * @public
   */
  OwnerId: string | undefined;

  /**
   * The repository name for a specific revision.
   *
   * @public
   */
  RepositoryName: string | undefined;

  /**
   * The provider type for a revision, such as GitHub.
   *
   * @public
   */
  ProviderType: ProviderType | undefined;

  /**
   * The SHA, such as the commit ID, for a specific revision.
   *
   * @public
   */
  Sha: string | undefined;
}

/**
 * Information about a resource sync event for the resource associated with a sync configuration.
 *
 * @public
 */
export interface ResourceSyncEvent {
  /**
   * The event for a resource sync event.
   *
   * @public
   */
  Event: string | undefined;

  /**
   * The ID for a resource sync event.
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * The time that a resource sync event occurred.
   *
   * @public
   */
  Time: Date | undefined;

  /**
   * The type of resource sync event.
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * Information about a resource sync attempt.
 *
 * @public
 */
export interface ResourceSyncAttempt {
  /**
   * The events related to a resource sync attempt.
   *
   * @public
   */
  Events: ResourceSyncEvent[] | undefined;

  /**
   * The current state of the resource as defined in the resource's `config-file` in the linked repository.
   *
   * @public
   */
  InitialRevision: Revision | undefined;

  /**
   * The start time for a resource sync attempt.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The status for a resource sync attempt. The follow are valid statuses:
   *
   * - SYNC-INITIATED - A resource sync attempt has been created and will begin soon.
   * - SYNCING - Syncing has started and work is being done to reconcile state.
   * - SYNCED - Syncing has completed successfully.
   * - SYNC_FAILED - A resource sync attempt has failed.
   *
   * @public
   */
  Status: ResourceSyncStatus | undefined;

  /**
   * The desired state of the resource as defined in the resource's `config-file` in the linked repository. Git sync attempts to update the resource to this state.
   *
   * @public
   */
  TargetRevision: Revision | undefined;

  /**
   * The name of the Amazon Web Services resource that is attempted to be synchronized.
   *
   * @public
   */
  Target: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSyncStatusOutput {
  /**
   * The desired state of the Amazon Web Services resource for the sync status with the Git repository.
   *
   * @public
   */
  DesiredState?: Revision | undefined;

  /**
   * The latest successful sync for the sync status with the Git repository.
   *
   * @public
   */
  LatestSuccessfulSync?: ResourceSyncAttempt | undefined;

  /**
   * The latest sync for the sync status with the Git repository, whether successful or not.
   *
   * @public
   */
  LatestSync: ResourceSyncAttempt | undefined;
}

/**
 * @public
 */
export interface GetSyncBlockerSummaryInput {
  /**
   * The sync type for the sync blocker summary.
   *
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * The name of the Amazon Web Services resource currently blocked from automatically being synced from a Git repository.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * The context for a specific sync blocker.
 *
 * @public
 */
export interface SyncBlockerContext {
  /**
   * The key provided for a context key-value pair for a specific sync blocker.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value provided for a context key-value pair for a specific sync blocker.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Information about a blocker for a sync event.
 *
 * @public
 */
export interface SyncBlocker {
  /**
   * The ID for a specific sync blocker.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The sync blocker type.
   *
   * @public
   */
  Type: BlockerType | undefined;

  /**
   * The status for a specific sync blocker.
   *
   * @public
   */
  Status: BlockerStatus | undefined;

  /**
   * The provided reason for a specific sync blocker.
   *
   * @public
   */
  CreatedReason: string | undefined;

  /**
   * The creation time for a specific sync blocker.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The contexts for a specific sync blocker.
   *
   * @public
   */
  Contexts?: SyncBlockerContext[] | undefined;

  /**
   * The resolved reason for a specific sync blocker.
   *
   * @public
   */
  ResolvedReason?: string | undefined;

  /**
   * The time that a specific sync blocker was resolved.
   *
   * @public
   */
  ResolvedAt?: Date | undefined;
}

/**
 * A summary for sync blockers.
 *
 * @public
 */
export interface SyncBlockerSummary {
  /**
   * The resource name for sync blocker summary.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The parent resource name for a sync blocker summary.
   *
   * @public
   */
  ParentResourceName?: string | undefined;

  /**
   * The latest events for a sync blocker summary.
   *
   * @public
   */
  LatestBlockers?: SyncBlocker[] | undefined;
}

/**
 * @public
 */
export interface GetSyncBlockerSummaryOutput {
  /**
   * The list of sync blockers for a specified resource.
   *
   * @public
   */
  SyncBlockerSummary: SyncBlockerSummary | undefined;
}

/**
 * @public
 */
export interface GetSyncConfigurationInput {
  /**
   * The sync type for the sync configuration for which you want to retrieve information.
   *
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * The name of the Amazon Web Services resource for the sync configuration for which you want to retrieve information.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GetSyncConfigurationOutput {
  /**
   * The details about the sync configuration for which you want to retrieve information.
   *
   * @public
   */
  SyncConfiguration: SyncConfiguration | undefined;
}

/**
 * @public
 */
export interface ListConnectionsInput {
  /**
   * Filters the list of connections to those associated with a specified provider, such as Bitbucket.
   *
   * @public
   */
  ProviderTypeFilter?: ProviderType | undefined;

  /**
   * Filters the list of connections to those associated with a specified host.
   *
   * @public
   */
  HostArnFilter?: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that was returned from the previous `ListConnections` call, which can be used to return the next set of connections in the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionsOutput {
  /**
   * A list of connections and the details for each connection, such as status, owner, and provider type.
   *
   * @public
   */
  Connections?: Connection[] | undefined;

  /**
   * A token that can be used in the next `ListConnections` call. To view all items in the list, continue to call this operation with each subsequent token until no more `nextToken` values are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHostsInput {
  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that was returned from the previous `ListHosts` call, which can be used to return the next set of hosts in the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.
 *
 * > **Note:** A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.
 *
 * @public
 */
export interface Host {
  /**
   * The name of the host.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the host.
   *
   * @public
   */
  HostArn?: string | undefined;

  /**
   * The name of the installed provider to be associated with your connection. The host resource represents the infrastructure where your provider type is installed. The valid provider type is GitHub Enterprise Server.
   *
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * The endpoint of the infrastructure where your provider type is installed.
   *
   * @public
   */
  ProviderEndpoint?: string | undefined;

  /**
   * The VPC configuration provisioned for the host.
   *
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * The status of the host, such as PENDING, AVAILABLE, VPC_CONFIG_DELETING, VPC_CONFIG_INITIALIZING, and VPC_CONFIG_FAILED_INITIALIZATION.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The status description for the host.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListHostsOutput {
  /**
   * A list of hosts and the details for each host, such as status, endpoint, and provider type.
   *
   * @public
   */
  Hosts?: Host[] | undefined;

  /**
   * A token that can be used in the next `ListHosts` call. To view all items in the list, continue to call this operation with each subsequent token until no more `nextToken` values are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoryLinksInput {
  /**
   * A non-zero, non-negative integer used to limit the number of returned results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoryLinksOutput {
  /**
   * Lists the repository links called by the list repository links operation.
   *
   * @public
   */
  RepositoryLinks: RepositoryLinkInfo[] | undefined;

  /**
   * An enumeration token that allows the operation to batch the results of the operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsInput {
  /**
   * The ID of the repository link for the sync definition for which you want to retrieve information.
   *
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * The sync type of the repository link for the the sync definition for which you want to retrieve information.
   *
   * @public
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * The definition for a repository with a sync configuration.
 *
 * @public
 */
export interface RepositorySyncDefinition {
  /**
   * The branch specified for a repository sync definition.
   *
   * @public
   */
  Branch: string | undefined;

  /**
   * The configuration file for a repository sync definition. This value comes from creating or updating the `config-file` field of a `sync-configuration`.
   *
   * @public
   */
  Directory: string | undefined;

  /**
   * The parent resource specified for a repository sync definition.
   *
   * @public
   */
  Parent: string | undefined;

  /**
   * The target resource specified for a repository sync definition. In some cases, such as CFN_STACK_SYNC, the parent and target resource are the same.
   *
   * @public
   */
  Target: string | undefined;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsOutput {
  /**
   * The list of repository sync definitions returned by the request. A `RepositorySyncDefinition` is a mapping from a repository branch to all the Amazon Web Services resources that are being synced from that branch.
   *
   * @public
   */
  RepositorySyncDefinitions: RepositorySyncDefinition[] | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSyncConfigurationsInput {
  /**
   * A non-zero, non-negative integer used to limit the number of returned results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An enumeration token that allows the operation to batch the results of the operation.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the repository link for the requested list of sync configurations.
   *
   * @public
   */
  RepositoryLinkId: string | undefined;

  /**
   * The sync type for the requested list of sync configurations.
   *
   * @public
   */
  SyncType: SyncConfigurationType | undefined;
}

/**
 * @public
 */
export interface ListSyncConfigurationsOutput {
  /**
   * The list of repository sync definitions returned by the request.
   *
   * @public
   */
  SyncConfigurations: SyncConfiguration[] | undefined;

  /**
   * An enumeration token that allows the operation to batch the next results of the operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * A list of tag key and value pairs associated with the specified resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags you want to modify or add to the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource to remove tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of keys for the tags to be removed from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateHostInput {
  /**
   * The Amazon Resource Name (ARN) of the host to be updated.
   *
   * @public
   */
  HostArn: string | undefined;

  /**
   * The URL or endpoint of the host to be updated.
   *
   * @public
   */
  ProviderEndpoint?: string | undefined;

  /**
   * The VPC configuration of the host to be updated. A VPC must be configured and the infrastructure to be represented by the host must already be connected to the VPC.
   *
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateHostOutput {}

/**
 * @public
 */
export interface UpdateRepositoryLinkInput {
  /**
   * The Amazon Resource Name (ARN) of the connection for the repository link to be updated. The updated connection ARN must have the same providerType (such as GitHub) as the original connection ARN for the repo link.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the encryption key for the repository link to be updated.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The ID of the repository link to be updated.
   *
   * @public
   */
  RepositoryLinkId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryLinkOutput {
  /**
   * Information about the repository link to be updated.
   *
   * @public
   */
  RepositoryLinkInfo: RepositoryLinkInfo | undefined;
}

/**
 * @public
 */
export interface UpdateSyncBlockerInput {
  /**
   * The ID of the sync blocker to be updated.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The sync type of the sync blocker to be updated.
   *
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * The name of the resource for the sync blocker to be updated.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The reason for resolving the sync blocker.
   *
   * @public
   */
  ResolvedReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateSyncBlockerOutput {
  /**
   * The resource name for the sync blocker.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The parent resource name for the sync blocker.
   *
   * @public
   */
  ParentResourceName?: string | undefined;

  /**
   * Information about the sync blocker to be updated.
   *
   * @public
   */
  SyncBlocker: SyncBlocker | undefined;
}

/**
 * @public
 */
export interface UpdateSyncConfigurationInput {
  /**
   * The branch for the sync configuration to be updated.
   *
   * @public
   */
  Branch?: string | undefined;

  /**
   * The configuration file for the sync configuration to be updated.
   *
   * @public
   */
  ConfigFile?: string | undefined;

  /**
   * The ID of the repository link for the sync configuration to be updated.
   *
   * @public
   */
  RepositoryLinkId?: string | undefined;

  /**
   * The name of the Amazon Web Services resource for the sync configuration to be updated.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The ARN of the IAM role for the sync configuration to be updated.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The sync type for the sync configuration to be updated.
   *
   * @public
   */
  SyncType: SyncConfigurationType | undefined;

  /**
   * Whether to enable or disable publishing of deployment status to source providers.
   *
   * @public
   */
  PublishDeploymentStatus?: PublishDeploymentStatus | undefined;

  /**
   * When to trigger Git sync to begin the stack update.
   *
   * @public
   */
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn | undefined;
}

/**
 * @public
 */
export interface UpdateSyncConfigurationOutput {
  /**
   * The information returned for the sync configuration to be updated.
   *
   * @public
   */
  SyncConfiguration: SyncConfiguration | undefined;
}
