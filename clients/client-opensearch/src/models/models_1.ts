// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  ActionSeverity,
  ActionStatus,
  ActionType,
  AWSServicePrincipal,
  CapabilityStatus,
  DataSourceStatus,
  DomainUseCase,
  DryRunMode,
  EngineMode,
  IndexStatus,
  IPAddressType,
  LogType,
  MaintenanceType,
  PackageScopeOperationEnum,
  ReplicationStatus,
  ScheduleAt,
  ScheduledBy,
} from "./enums";
import type {
  AdvancedSecurityOptionsInput,
  AIConfig,
  AIMLOptionsInput,
  AppConfig,
  AuthorizedPrincipal,
  AutomatedSnapshotPauseRequestOptions,
  AutoTuneOptions,
  ChangeProgressDetails,
  ClusterConfig,
  CognitoOptions,
  DataSource,
  DataSourceType,
  DeploymentStrategyOptions,
  DirectQueryDataSourceType,
  DomainConfig,
  DomainEndpointOptions,
  DomainPackageDetails,
  DryRunProgressStatus,
  DryRunResults,
  EBSOptions,
  EncryptionAtRestOptions,
  IamIdentityCenterOptions,
  IamIdentityCenterOptionsInput,
  IdentityCenterOptionsInput,
  InboundConnection,
  InstanceTypeDetails,
  LogPublishingOption,
  MigrationError,
  MigrationSource,
  NodeToNodeEncryptionOptions,
  OffPeakWindowOptions,
  PackageConfiguration,
  PackageDetails,
  PackageEncryptionOptions,
  PackageSource,
  ServiceOptions,
  ServiceSoftwareOptions,
  SnapshotOptions,
  SoftwareUpdateOptions,
  Tag,
  VpcEndpoint,
  VpcEndpointSummary,
  VPCOptions,
} from "./models_0";

/**
 * @public
 */
export interface ListInstanceTypeDetailsResponse {
  /**
   * Lists all supported instance types and features for the given OpenSearch or Elasticsearch version.
   *
   * @public
   */
  InstanceTypeDetails?: InstanceTypeDetails[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMigrationsRequest {
  /**
   * The unique identifier of the OpenSearch application to list migrations for.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * Filters the results by migration status. Valid values are `PENDING`, `IN_PROGRESS`, `SUCCEEDED`, and `FAILED`.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token from a previous call to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a migration job, including its status and progress.
 *
 * @public
 */
export interface MigrationSummary {
  /**
   * The unique identifier of the migration job.
   *
   * @public
   */
  migrationId?: string | undefined;

  /**
   * The current status of the migration job.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The unique identifier of the OpenSearch application associated with the migration.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The source configuration for the migration.
   *
   * @public
   */
  source?: MigrationSource | undefined;

  /**
   * The number of saved objects exported from the source data source.
   *
   * @public
   */
  exportedCount?: number | undefined;

  /**
   * The number of saved objects successfully imported into the target workspace.
   *
   * @public
   */
  importedCount?: number | undefined;

  /**
   * Error details if the migration failed or completed with errors.
   *
   * @public
   */
  error?: MigrationError | undefined;

  /**
   * The date and time when the migration job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the migration job was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListMigrationsResponse {
  /**
   * A list of migration job summaries for the specified application.
   *
   * @public
   */
  migrations?: MigrationSummary[] | undefined;

  /**
   * The pagination token to use in a subsequent call to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Container for the request parameters to the `ListPackagesForDomain` operation.
 *
 * @public
 */
export interface ListPackagesForDomainRequest {
  /**
   * The name of the domain for which you want to list associated packages.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `ListPackagesForDomain` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListPackagesForDomain` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the response parameters to the `ListPackagesForDomain` operation.
 *
 * @public
 */
export interface ListPackagesForDomainResponse {
  /**
   * List of all packages associated with a domain.
   *
   * @public
   */
  DomainPackageDetailsList?: DomainPackageDetails[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScheduledActionsRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `ListScheduledActions` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListScheduledActions` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about a scheduled configuration change for an OpenSearch Service domain. This actions can be a [service software update](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html) or a [blue/green Auto-Tune enhancement](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types).
 *
 * @public
 */
export interface ScheduledAction {
  /**
   * The unique identifier of the scheduled action.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of action that will be taken on the domain.
   *
   * @public
   */
  Type: ActionType | undefined;

  /**
   * The severity of the action.
   *
   * @public
   */
  Severity: ActionSeverity | undefined;

  /**
   * The time when the change is scheduled to happen.
   *
   * @public
   */
  ScheduledTime: number | undefined;

  /**
   * A description of the action to be taken.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the action was scheduled manually (`CUSTOMER`, or by OpenSearch Service automatically (`SYSTEM`).
   *
   * @public
   */
  ScheduledBy?: ScheduledBy | undefined;

  /**
   * The current status of the scheduled action.
   *
   * @public
   */
  Status?: ActionStatus | undefined;

  /**
   * Whether the action is required or optional.
   *
   * @public
   */
  Mandatory?: boolean | undefined;

  /**
   * Whether or not the scheduled action is cancellable.
   *
   * @public
   */
  Cancellable?: boolean | undefined;
}

/**
 * @public
 */
export interface ListScheduledActionsResponse {
  /**
   * A list of actions that are scheduled for the domain.
   *
   * @public
   */
  ScheduledActions?: ScheduledAction[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the parameters to the `ListTags` operation.
 *
 * @public
 */
export interface ListTagsRequest {
  /**
   * Amazon Resource Name (ARN) for the domain, data source, or application to view tags for.
   *
   * @public
   */
  ARN: string | undefined;
}

/**
 * The results of a `ListTags` operation.
 *
 * @public
 */
export interface ListTagsResponse {
  /**
   * List of resource tags associated with the specified domain, data source, or application.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * Container for the request parameters to the `ListVersions` operation.
 *
 * @public
 */
export interface ListVersionsRequest {
  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `ListVersions` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListVersions` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the parameters for response received from the `ListVersions` operation.
 *
 * @public
 */
export interface ListVersionsResponse {
  /**
   * A list of all versions of OpenSearch and Elasticsearch that Amazon OpenSearch Service supports.
   *
   * @public
   */
  Versions?: string[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointAccessRequest {
  /**
   * The name of the OpenSearch Service domain to retrieve access information for.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * If your initial `ListVpcEndpointAccess` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListVpcEndpointAccess` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointAccessResponse {
  /**
   * A list of [IAM principals](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html) that can currently access the domain.
   *
   * @public
   */
  AuthorizedPrincipalList: AuthorizedPrincipal[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken: string | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointsRequest {
  /**
   * If your initial `ListVpcEndpoints` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListVpcEndpoints` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointsResponse {
  /**
   * Information about each endpoint.
   *
   * @public
   */
  VpcEndpointSummaryList: VpcEndpointSummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken: string | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointsForDomainRequest {
  /**
   * The name of the domain to list associated VPC endpoints for.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * If your initial `ListEndpointsForDomain` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListEndpointsForDomain` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointsForDomainResponse {
  /**
   * Information about each endpoint associated with the domain.
   *
   * @public
   */
  VpcEndpointSummaryList: VpcEndpointSummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken: string | undefined;
}

/**
 * Container for request parameters to the `PurchaseReservedInstanceOffering` operation.
 *
 * @public
 */
export interface PurchaseReservedInstanceOfferingRequest {
  /**
   * The ID of the Reserved Instance offering to purchase.
   *
   * @public
   */
  ReservedInstanceOfferingId: string | undefined;

  /**
   * A customer-specified identifier to track this reservation.
   *
   * @public
   */
  ReservationName: string | undefined;

  /**
   * The number of OpenSearch instances to reserve.
   *
   * @public
   */
  InstanceCount?: number | undefined;
}

/**
 * Represents the output of a `PurchaseReservedInstanceOffering` operation.
 *
 * @public
 */
export interface PurchaseReservedInstanceOfferingResponse {
  /**
   * The ID of the Reserved Instance offering that was purchased.
   *
   * @public
   */
  ReservedInstanceId?: string | undefined;

  /**
   * The customer-specified identifier used to track this reservation.
   *
   * @public
   */
  ReservationName?: string | undefined;
}

/**
 * @public
 */
export interface PutDefaultApplicationSettingRequest {
  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  applicationArn: string | undefined;

  /**
   * Set to true to set the specified ARN as the default application. Set to false to clear the default application.
   *
   * @public
   */
  setAsDefault: boolean | undefined;
}

/**
 * @public
 */
export interface PutDefaultApplicationSettingResponse {
  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  applicationArn?: string | undefined;
}

/**
 * The base configuration for registering a capability. Contains capability-specific configuration such as AI settings.
 *
 * @public
 */
export type CapabilityBaseRequestConfig =
  | CapabilityBaseRequestConfig.AiConfigMember
  | CapabilityBaseRequestConfig.$UnknownMember;

/**
 * @public
 */
export namespace CapabilityBaseRequestConfig {
  /**
   * Configuration settings for AI-powered capabilities.
   *
   * @public
   */
  export interface AiConfigMember {
    aiConfig: AIConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    aiConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    aiConfig: (value: AIConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Container for the parameters to the `RegisterCapability` operation.
 *
 * @public
 */
export interface RegisterCapabilityRequest {
  /**
   * The unique identifier of the OpenSearch UI application to register the capability for.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The name of the capability to register. Must be between 3 and 30 characters and contain only alphanumeric characters and hyphens. This identifies the type of capability being enabled for the application. For registering AI Assistant capability, use `ai-capability`
   *
   * @public
   */
  capabilityName: string | undefined;

  /**
   * The configuration settings for the capability being registered. This includes capability-specific settings such as AI configuration.
   *
   * @public
   */
  capabilityConfig: CapabilityBaseRequestConfig | undefined;
}

/**
 * The base configuration returned for a registered capability.
 *
 * @public
 */
export type CapabilityBaseResponseConfig =
  | CapabilityBaseResponseConfig.AiConfigMember
  | CapabilityBaseResponseConfig.$UnknownMember;

/**
 * @public
 */
export namespace CapabilityBaseResponseConfig {
  /**
   * Configuration settings for AI-powered capabilities.
   *
   * @public
   */
  export interface AiConfigMember {
    aiConfig: AIConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    aiConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    aiConfig: (value: AIConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The result of a `RegisterCapability` request. Contains details about the registered capability.
 *
 * @public
 */
export interface RegisterCapabilityResponse {
  /**
   * The name of the registered capability.
   *
   * @public
   */
  capabilityName?: string | undefined;

  /**
   * The unique identifier of the OpenSearch UI application.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The current status of the capability. Possible values: `creating`, `create_failed`, `active`, `updating`, `update_failed`, `deleting`, `delete_failed`.
   *
   * @public
   */
  status?: CapabilityStatus | undefined;

  /**
   * The configuration settings for the registered capability.
   *
   * @public
   */
  capabilityConfig?: CapabilityBaseResponseConfig | undefined;
}

/**
 * Container for the request parameters to the `RejectInboundConnection` operation.
 *
 * @public
 */
export interface RejectInboundConnectionRequest {
  /**
   * The unique identifier of the inbound connection to reject.
   *
   * @public
   */
  ConnectionId: string | undefined;
}

/**
 * Represents the output of a `RejectInboundConnection` operation.
 *
 * @public
 */
export interface RejectInboundConnectionResponse {
  /**
   * Contains details about the rejected inbound connection.
   *
   * @public
   */
  Connection?: InboundConnection | undefined;
}

/**
 * @public
 */
export interface RemoveReplicationPeerRequest {
  /**
   * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the peer to stop replicating with. Both domains are named so that the request identifies exactly one replication relationship.
   *
   * @public
   */
  PeerDomainArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveReplicationPeerResponse {
  /**
   * The Amazon Resource Name (ARN) of the domain that is no longer replicating.
   *
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * The state of the replication relationship. This is `PENDING_REMOVAL` while replication is being stopped.
   *
   * @public
   */
  Status?: ReplicationStatus | undefined;
}

/**
 * Container for the request parameters to the `RemoveTags` operation.
 *
 * @public
 */
export interface RemoveTagsRequest {
  /**
   * The Amazon Resource Name (ARN) of the domain, data source, or application from which you want to delete the specified tags.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * The list of tag keys to remove from the domain, data source, or application.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RevokeVpcEndpointAccessRequest {
  /**
   * The name of the OpenSearch Service domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The account ID to revoke access from.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * The service SP to revoke access from.
   *
   * @public
   */
  Service?: AWSServicePrincipal | undefined;

  /**
   * The options for the service, including the supported Regions for the endpoint access.
   *
   * @public
   */
  ServiceOptions?: ServiceOptions | undefined;
}

/**
 * @public
 */
export interface RevokeVpcEndpointAccessResponse {}

/**
 * Container for the request parameters to the `RollbackServiceSoftwareUpdate` operation.
 *
 * @public
 */
export interface RollbackServiceSoftwareUpdateRequest {
  /**
   * The name of the domain to roll back the service software update on.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Details about the rollback options for a service software update.
 *
 * @public
 */
export interface RollbackServiceSoftwareOptions {
  /**
   * The current service software version on the domain.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * The service software version that the domain will roll back to.
   *
   * @public
   */
  NewVersion?: string | undefined;

  /**
   * Whether a service software rollback is available for the domain.
   *
   * @public
   */
  RollbackAvailable?: boolean | undefined;

  /**
   * A description of the rollback status.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Contains details about the rolled-back service software update.
 *
 * @public
 */
export interface RollbackServiceSoftwareUpdateResponse {
  /**
   * The rollback options for the service software update.
   *
   * @public
   */
  RollbackServiceSoftwareOptions?: RollbackServiceSoftwareOptions | undefined;
}

/**
 * Container for the parameters to the `StartDomainMaintenance` operation.
 *
 * @public
 */
export interface StartDomainMaintenanceRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the action.
   *
   * @public
   */
  Action: MaintenanceType | undefined;

  /**
   * The ID of the data node.
   *
   * @public
   */
  NodeId?: string | undefined;
}

/**
 * The result of a `StartDomainMaintenance` request that information about the requested action.
 *
 * @public
 */
export interface StartDomainMaintenanceResponse {
  /**
   * The request ID of requested action.
   *
   * @public
   */
  MaintenanceId?: string | undefined;
}

/**
 * Identifies a specific saved object by its type and unique identifier.
 *
 * @public
 */
export interface SavedObjectIdentifier {
  /**
   * The type of the saved object, such as `dashboard`, `visualization`, `index-pattern`, `search`, or `query`.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The unique identifier of the saved object.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Options to filter the scope of saved objects to export during a migration.
 *
 * @public
 */
export interface ExportOptions {
  /**
   * A list of saved object types to include in the migration. Valid values include `dashboard`, `visualization`, `index-pattern`, `search`, and `query`.
   *
   * @public
   */
  types?: string[] | undefined;

  /**
   * A list of specific saved objects to include in the migration, identified by type and ID.
   *
   * @public
   */
  objects?: SavedObjectIdentifier[] | undefined;

  /**
   * Specifies whether to include all objects referenced by the exported objects, recursively.
   *
   * @public
   */
  includeReferencesDeep?: boolean | undefined;
}

/**
 * The target workspace configuration for a migration. You can specify an existing workspace by ID or request creation of a new workspace.
 *
 * @public
 */
export interface MigrationWorkspace {
  /**
   * The unique identifier of an existing workspace to use as the migration target. Specify either this parameter or `createWorkspace`.
   *
   * @public
   */
  workspaceId?: string | undefined;

  /**
   * Specifies whether to create a new workspace as the migration target. If `true`, you must also specify `name`.
   *
   * @public
   */
  createWorkspace?: boolean | undefined;

  /**
   * The name of the new workspace to create. Required when `createWorkspace` is `true`.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of the new workspace to create.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * The configuration options for a saved objects migration job.
 *
 * @public
 */
export interface MigrationOptions {
  /**
   * The data source from which to export saved objects.
   *
   * @public
   */
  source: MigrationSource | undefined;

  /**
   * The target workspace configuration for importing saved objects. You can specify an existing workspace or request creation of a new workspace.
   *
   * @public
   */
  workspace: MigrationWorkspace | undefined;

  /**
   * Options to filter the scope of saved objects to export from the source.
   *
   * @public
   */
  exportOptions?: ExportOptions | undefined;

  /**
   * The strategy for resolving conflicts when saved objects already exist in the target workspace. Valid values are `CREATE_NEW_COPIES`, which creates new objects with unique IDs, and `overwrite`, which replaces existing objects.
   *
   * @public
   */
  conflictResolution?: string | undefined;
}

/**
 * @public
 */
export interface StartMigrationRequest {
  /**
   * The unique identifier of the OpenSearch application to migrate saved objects into.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The configuration options for the migration, including the source data source, target workspace, export filters, and conflict resolution strategy.
   *
   * @public
   */
  migrationOptions: MigrationOptions | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon OpenSearch Service ignores the request but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartMigrationResponse {
  /**
   * The unique identifier of the migration job.
   *
   * @public
   */
  migrationId?: string | undefined;

  /**
   * The initial status of the migration job. The status is `PENDING` when a migration is first created.
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * Container for the request parameters to the `StartServiceSoftwareUpdate` operation.
 *
 * @public
 */
export interface StartServiceSoftwareUpdateRequest {
  /**
   * The name of the domain that you want to update to the latest service software.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * When to start the service software update.
   *
   * - `NOW` - Immediately schedules the update to happen in the current hour if there's capacity available.
   * - `TIMESTAMP` - Lets you specify a custom date and time to apply the update. If you specify this value, you must also provide a value for `DesiredStartTime`.
   * - `OFF_PEAK_WINDOW` - Marks the update to be picked up during an upcoming off-peak window. There's no guarantee that the update will happen during the next immediate window. Depending on capacity, it might happen in subsequent days.
   *
   * Default: `NOW` if you don't specify a value for `DesiredStartTime`, and `TIMESTAMP` if you do.
   *
   * @public
   */
  ScheduleAt?: ScheduleAt | undefined;

  /**
   * The Epoch timestamp when you want the service software update to start. You only need to specify this parameter if you set `ScheduleAt` to `TIMESTAMP`.
   *
   * @public
   */
  DesiredStartTime?: number | undefined;
}

/**
 * Represents the output of a `StartServiceSoftwareUpdate` operation. Contains the status of the update.
 *
 * @public
 */
export interface StartServiceSoftwareUpdateResponse {
  /**
   * The current status of the OpenSearch Service software update.
   *
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions | undefined;
}

/**
 * @public
 */
export interface SwitchoverReplicationRequest {
  /**
   * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the relationship's current primary. The request is rejected if this domain is no longer the peer of the domain you are calling.
   *
   * @public
   */
  PeerDomainArn: string | undefined;
}

/**
 * @public
 */
export interface SwitchoverReplicationResponse {
  /**
   * The Amazon Resource Name (ARN) of the domain being promoted.
   *
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * The state of the replication relationship. This is `SWITCHING_OVER` while the promotion is in progress.
   *
   * @public
   */
  Status?: ReplicationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * The unique identifier for the OpenSearch application to be updated.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The data sources to associate with the OpenSearch application.
   *
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * The configuration settings to modify for the OpenSearch application.
   *
   * @public
   */
  appConfigs?: AppConfig[] | undefined;

  /**
   * Configuration settings for integrating IAM Identity Center with the OpenSearch application.
   *
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterOptionsInput | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * The unique identifier of the updated OpenSearch application.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the updated OpenSearch application.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The data sources associated with the updated OpenSearch application.
   *
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * The IAM Identity Center configuration for the updated OpenSearch application.
   *
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterOptions | undefined;

  /**
   * The configuration settings for the updated OpenSearch application.
   *
   * @public
   */
  appConfigs?: AppConfig[] | undefined;

  /**
   * The timestamp when the OpenSearch application was originally created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the OpenSearch application was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * Container for the parameters to the `UpdateDataSource` operation.
 *
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the data source to modify.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of data source.
   *
   * @public
   */
  DataSourceType: DataSourceType | undefined;

  /**
   * A new description of the data source.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the data source update.
   *
   * @public
   */
  Status?: DataSourceStatus | undefined;
}

/**
 * The result of an `UpdateDataSource` operation.
 *
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * A message associated with the updated data source.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDirectQueryDataSourceRequest {
  /**
   * A unique, user-defined label to identify the data source within your OpenSearch Service environment.
   *
   * @public
   */
  DataSourceName: string | undefined;

  /**
   * The supported Amazon Web Services service that you want to use as the source for direct queries in OpenSearch Service.
   *
   * @public
   */
  DataSourceType: DirectQueryDataSourceType | undefined;

  /**
   * An optional text field for providing additional context and details about the data source.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An optional list of Amazon Resource Names (ARNs) for the OpenSearch collections that are associated with the direct query data source. This field is required for CloudWatchLogs and SecurityLake datasource types.
   *
   * @public
   */
  OpenSearchArns?: string[] | undefined;

  /**
   * An optional IAM access policy document that defines the updated permissions for accessing the direct query data source. The policy document must be in valid JSON format and follow IAM policy syntax. If not specified, the existing access policy if present remains unchanged.
   *
   * @public
   */
  DataSourceAccessPolicy?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDirectQueryDataSourceResponse {
  /**
   * The unique, system-generated identifier that represents the data source.
   *
   * @public
   */
  DataSourceArn?: string | undefined;
}

/**
 * Container for the request parameters to the `UpdateDomain` operation.
 *
 * @public
 */
export interface UpdateDomainConfigRequest {
  /**
   * The name of the domain that you're updating.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Changes that you want to make to the cluster configuration, such as the instance type and number of EC2 instances.
   *
   * @public
   */
  ClusterConfig?: ClusterConfig | undefined;

  /**
   * The type and size of the EBS volume to attach to instances in the domain.
   *
   * @public
   */
  EBSOptions?: EBSOptions | undefined;

  /**
   * Option to set the time, in UTC format, for the daily automated snapshot. Default value is `0` hours.
   *
   * @public
   */
  SnapshotOptions?: SnapshotOptions | undefined;

  /**
   * Options to specify the subnets and security groups for a VPC endpoint. For more information, see [Launching your Amazon OpenSearch Service domains using a VPC](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html).
   *
   * @public
   */
  VPCOptions?: VPCOptions | undefined;

  /**
   * Key-value pairs to configure Amazon Cognito authentication for OpenSearch Dashboards.
   *
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * Key-value pairs to specify advanced configuration options. The following key-value pairs are supported:
   *
   * - `"rest.action.multi.allow_explicit_index": "true" | "false"` - Note the use of a string rather than a boolean. Specifies whether explicit references to indexes are allowed inside the body of HTTP requests. If you want to configure access policies for domain sub-resources, such as specific indexes and domain APIs, you must disable this property. Default is true.
   * - `"indices.fielddata.cache.size": "80"` - Note the use of a string rather than a boolean. Specifies the percentage of heap space allocated to field data. Default is unbounded.
   * - `"indices.query.bool.max_clause_count": "1024"` - Note the use of a string rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean query. Default is 1,024. Queries with more than the permitted number of clauses result in a `TooManyClauses` error.
   *
   * For more information, see [Advanced cluster parameters](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options).
   *
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * Identity and Access Management (IAM) access policy as a JSON-formatted string.
   *
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * Specify either dual stack or IPv4 as your IP address type. Dual stack allows you to share domain resources across IPv4 and IPv6 address types, and is the recommended option. If your IP address type is currently set to dual stack, you can't change it.
   *
   * @public
   */
  IPAddressType?: IPAddressType | undefined;

  /**
   * Options to publish OpenSearch logs to Amazon CloudWatch Logs.
   *
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * Encryption at rest options for the domain.
   *
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
   *
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * Node-to-node encryption options for the domain.
   *
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

  /**
   * Options for fine-grained access control.
   *
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput | undefined;

  /**
   * Configuration settings for enabling and managing IAM Identity Center.
   *
   * @public
   */
  IdentityCenterOptions?: IdentityCenterOptionsInput | undefined;

  /**
   * Options for Auto-Tune.
   *
   * @public
   */
  AutoTuneOptions?: AutoTuneOptions | undefined;

  /**
   * This flag, when set to True, specifies whether the `UpdateDomain` request should return the results of a dry run analysis without actually applying the change. A dry run determines what type of deployment the update will cause.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The type of dry run to perform.
   *
   * - `Basic` only returns the type of deployment (blue/green or dynamic) that the update will cause.
   * - `Verbose` runs an additional check to validate the changes you're making. For more information, see [Validating a domain update](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes#validation-check).
   *
   * @public
   */
  DryRunMode?: DryRunMode | undefined;

  /**
   * Off-peak window options for the domain.
   *
   * @public
   */
  OffPeakWindowOptions?: OffPeakWindowOptions | undefined;

  /**
   * Service software update options for the domain.
   *
   * @public
   */
  SoftwareUpdateOptions?: SoftwareUpdateOptions | undefined;

  /**
   * Options for all machine learning features for the specified domain.
   *
   * @public
   */
  AIMLOptions?: AIMLOptionsInput | undefined;

  /**
   * Specifies the deployment strategy options for the domain.
   *
   * @public
   */
  DeploymentStrategyOptions?: DeploymentStrategyOptions | undefined;

  /**
   * Specifies the automated snapshot pause options for the domain.
   *
   * > **Important:** Suspending snapshots reduces data protection. You cannot restore your domain to points in time when snapshots are suspended. Use this feature only for short-term operational needs such as migrations or maintenance windows.
   *
   * Maximum suspension duration: 3 days.
   *
   * @public
   */
  AutomatedSnapshotPauseOptions?: AutomatedSnapshotPauseRequestOptions | undefined;

  /**
   * The primary use case for the domain. For valid values, see `DomainUseCase`.
   *
   * @public
   */
  UseCase?: DomainUseCase | undefined;

  /**
   * The engine mode for the domain. The engine mode can't be changed after the domain is created. For valid values, see `EngineMode`.
   *
   * @public
   */
  EngineMode?: EngineMode | undefined;

  /**
   * A list of advisory warning codes to accept for this configuration change. By default, any advisory warning blocks the change. Include the code of each warning you want to accept so the change can proceed. You can find warning codes in the `ValidationFailures` list returned by `DescribeDomainChangeProgress` and `DescribeDryRunProgress`. Critical validation failures cannot be accepted and always block the change. If you omit this parameter or pass an empty list, all warnings block the change. For more information, see [Validating a domain update](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes#validation-check).
   *
   * @public
   */
  AcceptedWarnings?: string[] | undefined;
}

/**
 * The results of an `UpdateDomain` request. Contains the status of the domain being updated.
 *
 * @public
 */
export interface UpdateDomainConfigResponse {
  /**
   * The status of the updated domain.
   *
   * @public
   */
  DomainConfig: DomainConfig | undefined;

  /**
   * Results of the dry run performed in the update domain request.
   *
   * @public
   */
  DryRunResults?: DryRunResults | undefined;

  /**
   * The status of the dry run being performed on the domain, if any.
   *
   * @public
   */
  DryRunProgressStatus?: DryRunProgressStatus | undefined;
}

/**
 * @public
 */
export interface UpdateIndexRequest {
  /**
   * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the index to update.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The updated JSON schema for the index including any changes to mappings, settings, and semantic enrichment configuration.
   *
   * @public
   */
  IndexSchema: __DocumentType | undefined;
}

/**
 * @public
 */
export interface UpdateIndexResponse {
  /**
   * The status of the index update operation.
   *
   * @public
   */
  Status: IndexStatus | undefined;
}

/**
 * Container for request parameters to the `UpdatePackage` operation.
 *
 * @public
 */
export interface UpdatePackageRequest {
  /**
   * The unique identifier for the package.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * Amazon S3 bucket and key for the package.
   *
   * @public
   */
  PackageSource: PackageSource | undefined;

  /**
   * A new description of the package.
   *
   * @public
   */
  PackageDescription?: string | undefined;

  /**
   * Commit message for the updated file, which is shown as part of `GetPackageVersionHistoryResponse`.
   *
   * @public
   */
  CommitMessage?: string | undefined;

  /**
   * The updated configuration details for a package.
   *
   * @public
   */
  PackageConfiguration?: PackageConfiguration | undefined;

  /**
   * Encryption options for a package.
   *
   * @public
   */
  PackageEncryptionOptions?: PackageEncryptionOptions | undefined;
}

/**
 * Container for the response returned by the `UpdatePackage` operation.
 *
 * @public
 */
export interface UpdatePackageResponse {
  /**
   * Information about a package.
   *
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * @public
 */
export interface UpdatePackageScopeRequest {
  /**
   * ID of the package whose scope is being updated.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * The operation to perform on the package scope (e.g., add/remove/override users).
   *
   * @public
   */
  Operation: PackageScopeOperationEnum | undefined;

  /**
   * List of users to be added or removed from the package scope.
   *
   * @public
   */
  PackageUserList: string[] | undefined;
}

/**
 * @public
 */
export interface UpdatePackageScopeResponse {
  /**
   * ID of the package whose scope was updated.
   *
   * @public
   */
  PackageID?: string | undefined;

  /**
   * The operation that was performed on the package scope.
   *
   * @public
   */
  Operation?: PackageScopeOperationEnum | undefined;

  /**
   * List of users who have access to the package after the scope update.
   *
   * @public
   */
  PackageUserList?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledActionRequest {
  /**
   * The name of the domain to reschedule an action for.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of the action to reschedule. To retrieve this ID, send a [ListScheduledActions](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html) request.
   *
   * @public
   */
  ActionID: string | undefined;

  /**
   * The type of action to reschedule. Can be one of `SERVICE_SOFTWARE_UPDATE`, `JVM_HEAP_SIZE_TUNING`, or `JVM_YOUNG_GEN_TUNING`. To retrieve this value, send a [ListScheduledActions](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html) request.
   *
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * When to schedule the action.
   *
   * - `NOW` - Immediately schedules the update to happen in the current hour if there's capacity available.
   * - `TIMESTAMP` - Lets you specify a custom date and time to apply the update. If you specify this value, you must also provide a value for `DesiredStartTime`.
   * - `OFF_PEAK_WINDOW` - Marks the action to be picked up during an upcoming off-peak window. There's no guarantee that the change will be implemented during the next immediate window. Depending on capacity, it might happen in subsequent days.
   *
   * @public
   */
  ScheduleAt: ScheduleAt | undefined;

  /**
   * The time to implement the change, in Coordinated Universal Time (UTC). Only specify this parameter if you set `ScheduleAt` to `TIMESTAMP`.
   *
   * @public
   */
  DesiredStartTime?: number | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledActionResponse {
  /**
   * Information about the rescheduled action.
   *
   * @public
   */
  ScheduledAction?: ScheduledAction | undefined;
}

/**
 * @public
 */
export interface UpdateVpcEndpointRequest {
  /**
   * The unique identifier of the endpoint.
   *
   * @public
   */
  VpcEndpointId: string | undefined;

  /**
   * The security groups and/or subnets to add, remove, or modify.
   *
   * @public
   */
  VpcOptions: VPCOptions | undefined;
}

/**
 * @public
 */
export interface UpdateVpcEndpointResponse {
  /**
   * The endpoint to be updated.
   *
   * @public
   */
  VpcEndpoint: VpcEndpoint | undefined;
}

/**
 * Container for the request parameters to the `UpgradeDomain` operation.
 *
 * @public
 */
export interface UpgradeDomainRequest {
  /**
   * Name of the OpenSearch Service domain that you want to upgrade.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * OpenSearch or Elasticsearch version to which you want to upgrade, in the format Opensearch_X.Y or Elasticsearch_X.Y.
   *
   * @public
   */
  TargetVersion: string | undefined;

  /**
   * When true, indicates that an upgrade eligibility check needs to be performed. Does not actually perform the upgrade.
   *
   * @public
   */
  PerformCheckOnly?: boolean | undefined;

  /**
   * Only supports the `override_main_response_version` parameter and not other advanced options. You can only include this option when upgrading to an OpenSearch version. Specifies whether the domain reports its version as 7.10 so that it continues to work with Elasticsearch OSS clients and plugins.
   *
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;
}

/**
 * Container for the response returned by `UpgradeDomain` operation.
 *
 * @public
 */
export interface UpgradeDomainResponse {
  /**
   * The unique identifier of the domain upgrade.
   *
   * @public
   */
  UpgradeId?: string | undefined;

  /**
   * The name of the domain that was upgraded.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * OpenSearch or Elasticsearch version that the domain was upgraded to.
   *
   * @public
   */
  TargetVersion?: string | undefined;

  /**
   * When true, indicates that an upgrade eligibility check was performed.
   *
   * @public
   */
  PerformCheckOnly?: boolean | undefined;

  /**
   * The advanced options configuration for the domain.
   *
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * Container for information about a configuration change happening on a domain.
   *
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;
}
