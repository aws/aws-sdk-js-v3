// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AppConfigType,
  ApplicationStatus,
  AutoTuneDesiredState,
  AutoTuneState,
  AutoTuneType,
  AWSServicePrincipal,
  CapabilityFailureReason,
  CapabilityStatus,
  ConfigChangeStatus,
  ConnectionMode,
  DataSourceAttachmentStatus,
  DataSourceStatus,
  DeploymentStatus,
  DeploymentStrategy,
  DescribePackagesFilterName,
  DiffFieldPolicy,
  DiffStatus,
  DomainHealth,
  DomainPackageStatus,
  DomainProcessingStatusType,
  DomainState,
  DomainUseCase,
  EncryptionMode,
  EngineMode,
  EngineType,
  InboundConnectionStatusCode,
  IndexStatus,
  InitiatedBy,
  InsightEntityType,
  InsightFeedbackEntityType,
  InsightFeedbackThumbs,
  InsightFieldType,
  InsightPriorityLevel,
  InsightResponseStatus,
  InsightSortOrder,
  InsightStatus,
  InsightType,
  IPAddressType,
  LogType,
  MaintenanceStatus,
  MaintenanceType,
  MasterNodeStatus,
  NaturalLanguageQueryGenerationCurrentState,
  NaturalLanguageQueryGenerationDesiredState,
  NodeOptionsNodeType,
  NodeStatus,
  NodeType,
  OpenSearchPartitionInstanceType,
  OpenSearchWarmPartitionInstanceType,
  OptionState,
  OutboundConnectionStatusCode,
  OverallChangeStatus,
  PackageStatus,
  PackageType,
  PauseState,
  PrincipalType,
  PropertyValueType,
  ReplicationRole,
  ReplicationStatus,
  RequirementLevel,
  ReservedInstancePaymentOption,
  RolesKeyIdCOption,
  RollbackOnDisable,
  ScheduledAutoTuneActionType,
  ScheduledAutoTuneSeverityType,
  SkipUnavailableStatus,
  SubjectKeyIdCOption,
  TimeUnit,
  TLSSecurityPolicy,
  UpgradeStatus,
  UpgradeStep,
  ValidationFailureSeverity,
  VolumeType,
  VpcEndpointErrorCode,
  VpcEndpointStatus,
  ZoneStatus,
} from "./enums";

/**
 * Container for the parameters to the `AcceptInboundConnection` operation.
 *
 * @public
 */
export interface AcceptInboundConnectionRequest {
  /**
   * The ID of the inbound connection to accept.
   *
   * @public
   */
  ConnectionId: string | undefined;
}

/**
 * The status of an inbound cross-cluster connection for OpenSearch Service.
 *
 * @public
 */
export interface InboundConnectionStatus {
  /**
   * The status code for the connection. Can be one of the following:
   *
   * - **PENDING_ACCEPTANCE** - Inbound connection is not yet accepted by the remote domain owner.
   * - **APPROVED**: Inbound connection is pending acceptance by the remote domain owner.
   * - **PROVISIONING**: Inbound connection is being provisioned.
   * - **ACTIVE**: Inbound connection is active and ready to use.
   * - **REJECTING**: Inbound connection rejection is in process.
   * - **REJECTED**: Inbound connection is rejected.
   * - **DELETING**: Inbound connection deletion is in progress.
   * - **DELETED**: Inbound connection is deleted and can no longer be used.
   *
   * @public
   */
  StatusCode?: InboundConnectionStatusCode | undefined;

  /**
   * Information about the connection.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Information about an Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface AWSDomainInformation {
  /**
   * The Amazon Web Services account ID of the domain owner.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The Amazon Web Services Region in which the domain is located.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Container for information about an OpenSearch Service domain.
 *
 * @public
 */
export interface DomainInformationContainer {
  /**
   * Information about an Amazon OpenSearch Service domain.
   *
   * @public
   */
  AWSDomainInformation?: AWSDomainInformation | undefined;
}

/**
 * Describes an inbound cross-cluster connection for Amazon OpenSearch Service. For more information, see [Cross-cluster search for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html).
 *
 * @public
 */
export interface InboundConnection {
  /**
   * Information about the source (local) domain.
   *
   * @public
   */
  LocalDomainInfo?: DomainInformationContainer | undefined;

  /**
   * Information about the destination (remote) domain.
   *
   * @public
   */
  RemoteDomainInfo?: DomainInformationContainer | undefined;

  /**
   * The unique identifier of the connection.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The current status of the connection.
   *
   * @public
   */
  ConnectionStatus?: InboundConnectionStatus | undefined;

  /**
   * The connection mode.
   *
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;
}

/**
 * Contains details about the accepted inbound connection.
 *
 * @public
 */
export interface AcceptInboundConnectionResponse {
  /**
   * Information about the accepted inbound connection.
   *
   * @public
   */
  Connection?: InboundConnection | undefined;
}

/**
 * Provides the current status of an entity.
 *
 * @public
 */
export interface OptionStatus {
  /**
   * The timestamp when the entity was created.
   *
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * The timestamp of the last time the entity was updated.
   *
   * @public
   */
  UpdateDate: Date | undefined;

  /**
   * The latest version of the entity.
   *
   * @public
   */
  UpdateVersion?: number | undefined;

  /**
   * The state of the entity.
   *
   * @public
   */
  State: OptionState | undefined;

  /**
   * Indicates whether the entity is being deleted.
   *
   * @public
   */
  PendingDeletion?: boolean | undefined;
}

/**
 * The configured access rules for the domain's search endpoint, and the current status of those rules.
 *
 * @public
 */
export interface AccessPoliciesStatus {
  /**
   * The access policy configured for the domain. Access policies can be resource-based, IP-based, or IAM-based. For more information, see [Configuring access policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-access-policies).
   *
   * @public
   */
  Options: string | undefined;

  /**
   * The status of the access policy for the domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Information about the Amazon S3 Glue Data Catalog.
 *
 * @public
 */
export interface S3GlueDataCatalog {
  /**
   * >The Amazon Resource Name (ARN) for the S3 Glue Data Catalog.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * The type of data source.
 *
 * @public
 */
export type DataSourceType =
  | DataSourceType.S3GlueDataCatalogMember
  | DataSourceType.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceType {
  /**
   * An Amazon S3 data source.
   *
   * @public
   */
  export interface S3GlueDataCatalogMember {
    S3GlueDataCatalog: S3GlueDataCatalog;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3GlueDataCatalog?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3GlueDataCatalog: (value: S3GlueDataCatalog) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Container for the parameters to the `AddDataSource` operation.
 *
 * @public
 */
export interface AddDataSourceRequest {
  /**
   * The name of the domain to add the data source to.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A name for the data source.
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
   * A description of the data source.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The result of an `AddDataSource` operation.
 *
 * @public
 */
export interface AddDataSourceResponse {
  /**
   * A message associated with creation of the data source.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Configuration details for a CloudWatch Logs data source that can be used for direct queries.
 *
 * @public
 */
export interface CloudWatchDirectQueryDataSource {
  /**
   * The unique identifier of the IAM role that grants OpenSearch Service permission to access the specified data source.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * Configuration details for a Prometheus data source that can be used for direct queries.
 *
 * @public
 */
export interface PrometheusDirectQueryDataSource {
  /**
   * The unique identifier of the IAM role that grants OpenSearch Service permission to access the specified data source.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The unique identifier of the Amazon Managed Prometheus Workspace that is associated with the specified data source.
   *
   * @public
   */
  WorkspaceArn: string | undefined;
}

/**
 * Configuration details for a Security Lake data source that can be used for direct queries.
 *
 * @public
 */
export interface SecurityLakeDirectQueryDataSource {
  /**
   * The unique identifier of the IAM role that grants OpenSearch Service permission to access the specified data source.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * The type of data source that is used for direct queries. This is a supported Amazon Web Services service, such as CloudWatch Logs or Security Lake.
 *
 * @public
 */
export type DirectQueryDataSourceType =
  | DirectQueryDataSourceType.CloudWatchLogMember
  | DirectQueryDataSourceType.PrometheusMember
  | DirectQueryDataSourceType.SecurityLakeMember
  | DirectQueryDataSourceType.$UnknownMember;

/**
 * @public
 */
export namespace DirectQueryDataSourceType {
  /**
   * Specifies CloudWatch Logs as a type of data source for direct queries.
   *
   * @public
   */
  export interface CloudWatchLogMember {
    CloudWatchLog: CloudWatchDirectQueryDataSource;
    SecurityLake?: never;
    Prometheus?: never;
    $unknown?: never;
  }

  /**
   * Specifies Security Lake as a type of data source for direct queries.
   *
   * @public
   */
  export interface SecurityLakeMember {
    CloudWatchLog?: never;
    SecurityLake: SecurityLakeDirectQueryDataSource;
    Prometheus?: never;
    $unknown?: never;
  }

  /**
   * Specifies Prometheus as a type of data source for direct queries.
   *
   * @public
   */
  export interface PrometheusMember {
    CloudWatchLog?: never;
    SecurityLake?: never;
    Prometheus: PrometheusDirectQueryDataSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CloudWatchLog?: never;
    SecurityLake?: never;
    Prometheus?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    CloudWatchLog: (value: CloudWatchDirectQueryDataSource) => T;
    SecurityLake: (value: SecurityLakeDirectQueryDataSource) => T;
    Prometheus: (value: PrometheusDirectQueryDataSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A tag (key-value pair) for an Amazon OpenSearch Service resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key. Tag keys must be unique for the domain to which they are attached.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key value pair in a tag set of `project : Trinity` and `cost-center : Trinity`
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AddDirectQueryDataSourceRequest {
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
   * An optional IAM access policy document that defines the permissions for accessing the data source. The policy document must be in valid JSON format and follow IAM policy syntax.
   *
   * @public
   */
  DataSourceAccessPolicy?: string | undefined;

  /**
   * A list of tags attached to a domain.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddDirectQueryDataSourceResponse {
  /**
   * The unique, system-generated identifier that represents the data source.
   *
   * @public
   */
  DataSourceArn?: string | undefined;
}

/**
 * List of limits that are specific to a given instance type.
 *
 * @public
 */
export interface AdditionalLimit {
  /**
   * - `MaximumNumberOfDataNodesSupported` - This attribute only applies to master nodes and specifies the maximum number of data nodes of a given instance type a master node can support.
   * - `MaximumNumberOfDataNodesWithoutMasterNode` - This attribute only applies to data nodes and specifies the maximum number of data nodes of a given instance type can exist without a master node governing them.
   *
   * @public
   */
  LimitName?: string | undefined;

  /**
   * The values of the additional instance type limits.
   *
   * @public
   */
  LimitValues?: string[] | undefined;
}

/**
 * @public
 */
export interface AddReplicationPeerRequest {
  /**
   * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain to replicate to. The peer must be in a different Region from the domain you are calling, and in the same AWS account.
   *
   * @public
   */
  PeerDomainArn: string | undefined;

  /**
   * When `true`, validates the request and reports whether replication could be established, without changing either domain.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AddReplicationPeerResponse {
  /**
   * The Amazon Resource Name (ARN) of the domain that is now replicating to the peer.
   *
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * The state of the replication relationship. This is `PENDING_SETUP` immediately after the request is accepted.
   *
   * @public
   */
  Status?: ReplicationStatus | undefined;
}

/**
 * Container for the parameters to the `AddTags` operation. Specifies the tags to attach to the domain, data source, or application.
 *
 * @public
 */
export interface AddTagsRequest {
  /**
   * Amazon Resource Name (ARN) for the OpenSearch Service domain, data source, or application to which you want to attach resource tags.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * List of resource tags.
   *
   * @public
   */
  TagList: Tag[] | undefined;
}

/**
 * Status of the advanced options for the specified domain. The following options are available:
 *
 * - `"rest.action.multi.allow_explicit_index": "true" | "false"` - Note the use of a string rather than a boolean. Specifies whether explicit references to indexes are allowed inside the body of HTTP requests. If you want to configure access policies for domain sub-resources, such as specific indexes and domain APIs, you must disable this property. Default is true.
 * - `"indices.fielddata.cache.size": "80"` - Note the use of a string rather than a boolean. Specifies the percentage of heap space allocated to field data. Default is unbounded.
 * - `"indices.query.bool.max_clause_count": "1024"` - Note the use of a string rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean query. Default is 1,024. Queries with more than the permitted number of clauses result in a `TooManyClauses` error.
 * - `"override_main_response_version": "true" | "false"` - Note the use of a string rather than a boolean. Specifies whether the domain reports its version as 7.10 to allow Elasticsearch OSS clients and plugins to continue working with it. Default is false when creating a domain and true when upgrading a domain.
 *
 * For more information, see [Advanced cluster parameters](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options).
 *
 * @public
 */
export interface AdvancedOptionsStatus {
  /**
   * The status of advanced options for the specified domain.
   *
   * @public
   */
  Options: Record<string, string> | undefined;

  /**
   * The status of advanced options for the specified domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Output parameters showing the current IAM identity federation configuration.
 *
 * @public
 */
export interface IAMFederationOptionsOutput {
  /**
   * Indicates whether IAM identity federation is currently enabled for the domain.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The configured key in the SAML assertion for the user's subject identifier.
   *
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * The configured key in the SAML assertion for the user's role information.
   *
   * @public
   */
  RolesKey?: string | undefined;
}

/**
 * Describes the JWT options configured for the domain.
 *
 * @public
 */
export interface JWTOptionsOutput {
  /**
   * True if JWT use is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The key used for matching the JWT subject attribute.
   *
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * The key used for matching the JWT roles attribute.
   *
   * @public
   */
  RolesKey?: string | undefined;

  /**
   * The configured JWKS URL endpoint from which the cluster retrieves public keys to verify JWT requests.
   *
   * @public
   */
  JwksUrl?: string | undefined;

  /**
   * The key used to verify the signature of incoming JWT requests.
   *
   * @public
   */
  PublicKey?: string | undefined;
}

/**
 * The SAML identity povider information.
 *
 * @public
 */
export interface SAMLIdp {
  /**
   * The metadata of the SAML application, in XML format.
   *
   * @public
   */
  MetadataContent: string | undefined;

  /**
   * The unique entity ID of the application in the SAML identity provider.
   *
   * @public
   */
  EntityId: string | undefined;
}

/**
 * Describes the SAML application configured for the domain.
 *
 * @public
 */
export interface SAMLOptionsOutput {
  /**
   * True if SAML is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Describes the SAML identity provider's information.
   *
   * @public
   */
  Idp?: SAMLIdp | undefined;

  /**
   * The key used for matching the SAML subject attribute.
   *
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * The key used for matching the SAML roles attribute.
   *
   * @public
   */
  RolesKey?: string | undefined;

  /**
   * The duration, in minutes, after which a user session becomes inactive.
   *
   * @public
   */
  SessionTimeoutMinutes?: number | undefined;
}

/**
 * Container for fine-grained access control settings.
 *
 * @public
 */
export interface AdvancedSecurityOptions {
  /**
   * True if fine-grained access control is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * True if the internal user database is enabled.
   *
   * @public
   */
  InternalUserDatabaseEnabled?: boolean | undefined;

  /**
   * Container for information about the SAML configuration for OpenSearch Dashboards.
   *
   * @public
   */
  SAMLOptions?: SAMLOptionsOutput | undefined;

  /**
   * Container for information about the JWT configuration of the Amazon OpenSearch Service.
   *
   * @public
   */
  JWTOptions?: JWTOptionsOutput | undefined;

  /**
   * Configuration options for IAM identity federation in advanced security settings.
   *
   * @public
   */
  IAMFederationOptions?: IAMFederationOptionsOutput | undefined;

  /**
   * Date and time when the migration period will be disabled. Only necessary when [enabling fine-grained access control on an existing domain](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing).
   *
   * @public
   */
  AnonymousAuthDisableDate?: Date | undefined;

  /**
   * True if a 30-day migration period is enabled, during which administrators can create role mappings. Only necessary when [enabling fine-grained access control on an existing domain](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing).
   *
   * @public
   */
  AnonymousAuthEnabled?: boolean | undefined;
}

/**
 * Input parameters for configuring IAM identity federation settings.
 *
 * @public
 */
export interface IAMFederationOptionsInput {
  /**
   * Specifies whether IAM identity federation is enabled for the OpenSearch domain.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The key in the SAML assertion that contains the user's subject identifier.
   *
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * The key in the SAML assertion that contains the user's role information.
   *
   * @public
   */
  RolesKey?: string | undefined;
}

/**
 * The JWT authentication and authorization configuration for an Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface JWTOptionsInput {
  /**
   * True to enable JWT authentication and authorization for a domain.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Element of the JWT assertion to use for the user name.
   *
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * Element of the JWT assertion to use for roles.
   *
   * @public
   */
  RolesKey?: string | undefined;

  /**
   * The URL endpoint that hosts the JSON Web Key Set (JWKS) containing public keys used to verify JWT signatures.
   *
   * @public
   */
  JwksUrl?: string | undefined;

  /**
   * Element of the JWT assertion used by the cluster to verify JWT signatures.
   *
   * @public
   */
  PublicKey?: string | undefined;
}

/**
 * Credentials for the master user for a domain.
 *
 * @public
 */
export interface MasterUserOptions {
  /**
   * Amazon Resource Name (ARN) for the master user. Only specify if `InternalUserDatabaseEnabled` is `false`.
   *
   * @public
   */
  MasterUserARN?: string | undefined;

  /**
   * User name for the master user. Only specify if `InternalUserDatabaseEnabled` is `true`.
   *
   * @public
   */
  MasterUserName?: string | undefined;

  /**
   * Password for the master user. Only specify if `InternalUserDatabaseEnabled` is `true`.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;
}

/**
 * The SAML authentication configuration for an Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface SAMLOptionsInput {
  /**
   * True to enable SAML authentication for a domain.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The SAML Identity Provider's information.
   *
   * @public
   */
  Idp?: SAMLIdp | undefined;

  /**
   * The SAML master user name, which is stored in the domain's internal user database.
   *
   * @public
   */
  MasterUserName?: string | undefined;

  /**
   * The backend role that the SAML master user is mapped to.
   *
   * @public
   */
  MasterBackendRole?: string | undefined;

  /**
   * Element of the SAML assertion to use for the user name. Default is `NameID`.
   *
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * Element of the SAML assertion to use for backend roles. Default is `roles`.
   *
   * @public
   */
  RolesKey?: string | undefined;

  /**
   * The duration, in minutes, after which a user session becomes inactive. Acceptable values are between 1 and 1440, and the default value is 60.
   *
   * @public
   */
  SessionTimeoutMinutes?: number | undefined;
}

/**
 * Options for enabling and configuring fine-grained access control. For more information, see [Fine-grained access control in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html).
 *
 * @public
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * True to enable fine-grained access control.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * True to enable the internal user database.
   *
   * @public
   */
  InternalUserDatabaseEnabled?: boolean | undefined;

  /**
   * Container for information about the master user.
   *
   * @public
   */
  MasterUserOptions?: MasterUserOptions | undefined;

  /**
   * Container for information about the SAML configuration for OpenSearch Dashboards.
   *
   * @public
   */
  SAMLOptions?: SAMLOptionsInput | undefined;

  /**
   * Container for information about the JWT configuration of the Amazon OpenSearch Service.
   *
   * @public
   */
  JWTOptions?: JWTOptionsInput | undefined;

  /**
   * Input configuration for IAM identity federation within advanced security options.
   *
   * @public
   */
  IAMFederationOptions?: IAMFederationOptionsInput | undefined;

  /**
   * True to enable a 30-day migration period during which administrators can create role mappings. Only necessary when [enabling fine-grained access control on an existing domain](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing).
   *
   * @public
   */
  AnonymousAuthEnabled?: boolean | undefined;
}

/**
 * The status of fine-grained access control settings for a domain.
 *
 * @public
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * Container for fine-grained access control settings.
   *
   * @public
   */
  Options: AdvancedSecurityOptions | undefined;

  /**
   * Status of the fine-grained access control settings for a domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Configuration settings for AI-powered capabilities of an OpenSearch UI application.
 *
 * @public
 */
export interface AIConfig {}

/**
 * Container for parameters required to enable the natural language query generation feature.
 *
 * @public
 */
export interface NaturalLanguageQueryGenerationOptionsInput {
  /**
   * The desired state of the natural language query generation feature. Valid values are ENABLED and DISABLED.
   *
   * @public
   */
  DesiredState?: NaturalLanguageQueryGenerationDesiredState | undefined;
}

/**
 * Options for enabling S3 vectors engine features on the specified domain.
 *
 * @public
 */
export interface S3VectorsEngine {
  /**
   * Enables S3 vectors engine features.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Configuration for serverless vector acceleration, which provides [GPU-accelerated](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/gpu-acceleration-vector-index.html) vector search capabilities for improved performance on vector workloads.
 *
 * @public
 */
export interface ServerlessVectorAcceleration {
  /**
   * Specifies whether serverless vector acceleration is enabled for the domain.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Container for parameters required to enable all machine learning features.
 *
 * @public
 */
export interface AIMLOptionsInput {
  /**
   * Container for parameters required for natural language query generation on the specified domain.
   *
   * @public
   */
  NaturalLanguageQueryGenerationOptions?: NaturalLanguageQueryGenerationOptionsInput | undefined;

  /**
   * Container for parameters required to enable S3 vectors engine features on the specified domain.
   *
   * @public
   */
  S3VectorsEngine?: S3VectorsEngine | undefined;

  /**
   * Specifies whether to enable serverless vector acceleration for the domain. When enabled, provides [GPU-accelerated](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/gpu-acceleration-vector-index.html) vector search capabilities for improved performance on vector workloads.
   *
   * @public
   */
  ServerlessVectorAcceleration?: ServerlessVectorAcceleration | undefined;
}

/**
 * Container for parameters representing the state of the natural language query generation feature on the specified domain.
 *
 * @public
 */
export interface NaturalLanguageQueryGenerationOptionsOutput {
  /**
   * The desired state of the natural language query generation feature. Valid values are ENABLED and DISABLED.
   *
   * @public
   */
  DesiredState?: NaturalLanguageQueryGenerationDesiredState | undefined;

  /**
   * The current state of the natural language query generation feature, indicating completion, in progress, or failure.
   *
   * @public
   */
  CurrentState?: NaturalLanguageQueryGenerationCurrentState | undefined;
}

/**
 * Container for parameters representing the state of machine learning features on the specified domain.
 *
 * @public
 */
export interface AIMLOptionsOutput {
  /**
   * Container for parameters required for natural language query generation on the specified domain.
   *
   * @public
   */
  NaturalLanguageQueryGenerationOptions?: NaturalLanguageQueryGenerationOptionsOutput | undefined;

  /**
   * Container for parameters representing the state of S3 vectors engine features on the specified domain.
   *
   * @public
   */
  S3VectorsEngine?: S3VectorsEngine | undefined;

  /**
   * The current serverless vector acceleration configuration for the domain.
   *
   * @public
   */
  ServerlessVectorAcceleration?: ServerlessVectorAcceleration | undefined;
}

/**
 * The status of machine learning options on the specified domain.
 *
 * @public
 */
export interface AIMLOptionsStatus {
  /**
   * Machine learning options on the specified domain.
   *
   * @public
   */
  Options?: AIMLOptionsOutput | undefined;

  /**
   * Provides the current status of an entity.
   *
   * @public
   */
  Status?: OptionStatus | undefined;
}

/**
 * The configuration parameters to enable access to the key store required by the package.
 *
 * @public
 */
export interface KeyStoreAccessOption {
  /**
   * Role ARN to access the KeyStore Key
   *
   * @public
   */
  KeyAccessRoleArn?: string | undefined;

  /**
   * This indicates whether Key Store access is enabled
   *
   * @public
   */
  KeyStoreAccessEnabled: boolean | undefined;
}

/**
 * The configuration for associating a package with a domain.
 *
 * @public
 */
export interface PackageAssociationConfiguration {
  /**
   * The configuration parameters to enable accessing the key store required by the package.
   *
   * @public
   */
  KeyStoreAccessOption?: KeyStoreAccessOption | undefined;
}

/**
 * Container for the request parameters to the `AssociatePackage` operation.
 *
 * @public
 */
export interface AssociatePackageRequest {
  /**
   * Internal ID of the package to associate with a domain. Use `DescribePackages` to find this value.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * Name of the domain to associate the package with.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A list of package IDs that must be associated with the domain before the package specified in the request can be associated.
   *
   * @public
   */
  PrerequisitePackageIDList?: string[] | undefined;

  /**
   * The configuration for associating a package with an Amazon OpenSearch Service domain.
   *
   * @public
   */
  AssociationConfiguration?: PackageAssociationConfiguration | undefined;
}

/**
 * Additional information if the package is in an error state. Null otherwise.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * The type of error that occurred.
   *
   * @public
   */
  ErrorType?: string | undefined;

  /**
   * A message describing the error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Information about a package that is associated with a domain. For more information, see [Custom packages for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html).
 *
 * @public
 */
export interface DomainPackageDetails {
  /**
   * Internal ID of the package.
   *
   * @public
   */
  PackageID?: string | undefined;

  /**
   * User-specified name of the package.
   *
   * @public
   */
  PackageName?: string | undefined;

  /**
   * The type of package.
   *
   * @public
   */
  PackageType?: PackageType | undefined;

  /**
   * Timestamp of the most recent update to the package association status.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * Name of the domain that the package is associated with.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * State of the association.
   *
   * @public
   */
  DomainPackageStatus?: DomainPackageStatus | undefined;

  /**
   * The current version of the package.
   *
   * @public
   */
  PackageVersion?: string | undefined;

  /**
   * A list of package IDs that must be associated with the domain before or with the package can be associated.
   *
   * @public
   */
  PrerequisitePackageIDList?: string[] | undefined;

  /**
   * The relative path of the package on the OpenSearch Service cluster nodes. This is `synonym_path` when the package is for synonym files.
   *
   * @public
   */
  ReferencePath?: string | undefined;

  /**
   * Additional information if the package is in an error state. Null otherwise.
   *
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;

  /**
   * The configuration for associating a package with an Amazon OpenSearch Service domain.
   *
   * @public
   */
  AssociationConfiguration?: PackageAssociationConfiguration | undefined;
}

/**
 * Container for the response returned by the `AssociatePackage` operation.
 *
 * @public
 */
export interface AssociatePackageResponse {
  /**
   * Information about a package that is associated with a domain.
   *
   * @public
   */
  DomainPackageDetails?: DomainPackageDetails | undefined;
}

/**
 * Details of a package that is associated with a domain.
 *
 * @public
 */
export interface PackageDetailsForAssociation {
  /**
   * Internal ID of the package that you want to associate with a domain.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * List of package IDs that must be linked to the domain before or simultaneously with the package association.
   *
   * @public
   */
  PrerequisitePackageIDList?: string[] | undefined;

  /**
   * The configuration parameters for associating the package with a domain.
   *
   * @public
   */
  AssociationConfiguration?: PackageAssociationConfiguration | undefined;
}

/**
 * @public
 */
export interface AssociatePackagesRequest {
  /**
   * A list of packages and their prerequisites to be associated with a domain.
   *
   * @public
   */
  PackageList: PackageDetailsForAssociation[] | undefined;

  /**
   * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface AssociatePackagesResponse {
  /**
   * List of information about packages that are associated with a domain.
   *
   * @public
   */
  DomainPackageDetailsList?: DomainPackageDetails[] | undefined;
}

/**
 * Configuration for creating a new workspace when attaching a data source to an OpenSearch application. The workspace is created after the data source is successfully attached.
 *
 * @public
 */
export interface WorkspaceConfigurationInput {
  /**
   * The name of the workspace to create. Must be between 1 and 40 characters and can contain alphanumeric characters, parentheses, brackets, hyphens, underscores, and spaces.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of workspace to create, which determines the use-case features enabled for the workspace. Valid values are `OBSERVABILITY`, `SECURITY_ANALYTICS`, and `SEARCH`.
   *
   * @public
   */
  workspaceType: string | undefined;
}

/**
 * @public
 */
export interface AttachDataSourceRequest {
  /**
   * The unique identifier or name of the OpenSearch application to attach the data source to. This is the same identifier used with `UpdateApplication`, `GetApplication`, and `DeleteApplication`.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  dataSourceArn: string | undefined;

  /**
   * The identifier of an existing workspace to update with the new data source. Mutually exclusive with `workspaceConfiguration`.
   *
   * @public
   */
  workspaceId?: string | undefined;

  /**
   * Configuration for creating a new workspace during the attachment. If specified, a workspace is created and linked to the data source after the attachment completes. Mutually exclusive with `workspaceId`.
   *
   * @public
   */
  workspaceConfiguration?: WorkspaceConfigurationInput | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. If you retry a request with the same client token and the same parameters, the retry succeeds without performing any further actions.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AttachDataSourceResponse {
  /**
   * The unique identifier assigned to the data source attachment.
   *
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * The unique identifier of the OpenSearch application.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  dataSourceArn?: string | undefined;

  /**
   * The status of the data source attachment. Valid values are `PENDING` (waiting for resources to become active), `ATTACHED` (successfully attached), and `FAILED` (attachment timed out or encountered a non-retryable error).
   *
   * @public
   */
  status?: DataSourceAttachmentStatus | undefined;
}

/**
 * Options for the service, such as the supported Regions.
 *
 * @public
 */
export interface ServiceOptions {
  /**
   * The list of supported Regions for the service.
   *
   * @public
   */
  SupportedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface AuthorizeVpcEndpointAccessRequest {
  /**
   * The name of the OpenSearch Service domain to provide access to.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The Amazon Web Services account ID to grant access to.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * The Amazon Web Services service SP to grant access to.
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
 * Information about an Amazon Web Services account or service that has access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.
 *
 * @public
 */
export interface AuthorizedPrincipal {
  /**
   * The type of principal.
   *
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * The [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html) that is allowed access to the domain.
   *
   * @public
   */
  Principal?: string | undefined;

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
export interface AuthorizeVpcEndpointAccessResponse {
  /**
   * Information about the Amazon Web Services account or service that was provided access to the domain.
   *
   * @public
   */
  AuthorizedPrincipal: AuthorizedPrincipal | undefined;
}

/**
 * @public
 */
export interface CancelDomainConfigChangeRequest {
  /**
   * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * When set to `True`, returns the list of change IDs and properties that will be cancelled without actually cancelling the change.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * A property change that was cancelled for an Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface CancelledChangeProperty {
  /**
   * The name of the property whose change was cancelled.
   *
   * @public
   */
  PropertyName?: string | undefined;

  /**
   * The pending value of the property that was cancelled. This would have been the eventual value of the property if the chance had not been cancelled.
   *
   * @public
   */
  CancelledValue?: string | undefined;

  /**
   * The current value of the property, after the change was cancelled.
   *
   * @public
   */
  ActiveValue?: string | undefined;
}

/**
 * @public
 */
export interface CancelDomainConfigChangeResponse {
  /**
   * The unique identifiers of the changes that were cancelled.
   *
   * @public
   */
  CancelledChangeIds?: string[] | undefined;

  /**
   * The domain change properties that were cancelled.
   *
   * @public
   */
  CancelledChangeProperties?: CancelledChangeProperty[] | undefined;

  /**
   * Whether or not the request was a dry run. If `True`, the changes were not actually cancelled.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Container for the request parameters to cancel a service software update.
 *
 * @public
 */
export interface CancelServiceSoftwareUpdateRequest {
  /**
   * Name of the OpenSearch Service domain that you want to cancel the service software update on.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The current status of the service software for an Amazon OpenSearch Service domain. For more information, see [Service software updates in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html).
 *
 * @public
 */
export interface ServiceSoftwareOptions {
  /**
   * The current service software version present on the domain.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * The new service software version, if one is available.
   *
   * @public
   */
  NewVersion?: string | undefined;

  /**
   * True if you're able to update your service software version. False if you can't update your service software version.
   *
   * @public
   */
  UpdateAvailable?: boolean | undefined;

  /**
   * True if you're able to cancel your service software version update. False if you can't cancel your service software update.
   *
   * @public
   */
  Cancellable?: boolean | undefined;

  /**
   * The status of your service software update.
   *
   * @public
   */
  UpdateStatus?: DeploymentStatus | undefined;

  /**
   * A description of the service software update status.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.
   *
   * @public
   */
  AutomatedUpdateDate?: Date | undefined;

  /**
   * True if a service software is never automatically updated. False if a service software is automatically updated after the automated update date.
   *
   * @public
   */
  OptionalDeployment?: boolean | undefined;
}

/**
 * Container for the response to a `CancelServiceSoftwareUpdate` operation. Contains the status of the update.
 *
 * @public
 */
export interface CancelServiceSoftwareUpdateResponse {
  /**
   * Container for the state of your domain relative to the latest service software.
   *
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions | undefined;
}

/**
 * @public
 */
export interface CompareDomainConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the domain to compare from.
   *
   * @public
   */
  SourceDomainArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain to compare against.
   *
   * @public
   */
  TargetDomainArn: string | undefined;

  /**
   * The metadata categories to compare. At least one is required, and only the categories you name are read and returned.
   *
   * - `aliases`
   * - `alerting_monitors`
   * - `cluster_settings`
   * - `component_templates`
   * - `ingest_pipelines`
   * - `ism_policies` — index state management policies
   * - `security_action_groups`
   * - `security_internal_users`
   * - `security_role_mappings`
   * - `security_roles`
   * - `templates` — index templates
   *
   * The set of categories grows over time, so this list is not fixed. A category the service does not recognise is rejected with the supported categories named in the error message.
   *
   * @public
   */
  Categories: string[] | undefined;
}

/**
 * A single field that differs between the source and target copies of an item.
 *
 * @public
 */
export interface DivergentField {
  /**
   * The location of the field within the item.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The field's value on the source domain.
   *
   * @public
   */
  SourceValue?: string | undefined;

  /**
   * The field's value on the target domain.
   *
   * @public
   */
  TargetValue?: string | undefined;

  /**
   * How the comparison treats this field.
   *
   * @public
   */
  Policy?: DiffFieldPolicy | undefined;
}

/**
 * An item that exists on both domains but whose contents differ.
 *
 * @public
 */
export interface DivergentItem {
  /**
   * The name of the item.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The fields of the item that differ.
   *
   * @public
   */
  Fields?: DivergentField[] | undefined;
}

/**
 * The items that differ within one metadata category.
 *
 * @public
 */
export interface DiffItems {
  /**
   * The names of items that exist only on the source domain.
   *
   * @public
   */
  SourceOnly?: string[] | undefined;

  /**
   * The names of items that exist only on the target domain.
   *
   * @public
   */
  TargetOnly?: string[] | undefined;

  /**
   * The items that exist on both domains but differ, with the diverging fields.
   *
   * @public
   */
  Diverged?: DivergentItem[] | undefined;
}

/**
 * The result of comparing one metadata category between two domains.
 *
 * @public
 */
export interface CategoryDiffResult {
  /**
   * Whether the category was compared successfully. `compared` means the result is complete; `error` means the category could not be read.
   *
   * @public
   */
  Status?: DiffStatus | undefined;

  /**
   * The number of items that are identical on both domains.
   *
   * @public
   */
  InSync?: number | undefined;

  /**
   * The number of items that exist only on the source domain.
   *
   * @public
   */
  SourceOnly?: number | undefined;

  /**
   * The number of items that exist only on the target domain.
   *
   * @public
   */
  TargetOnly?: number | undefined;

  /**
   * The number of items that exist on both domains but differ.
   *
   * @public
   */
  Diverged?: number | undefined;

  /**
   * The names of the items that differ, and for diverging items, the fields that differ.
   *
   * @public
   */
  Items?: DiffItems | undefined;

  /**
   * Whether `Items` omits some differences because the category contained more than the response can carry. The counts remain complete when this is `true`.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * @public
 */
export interface CompareDomainConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the domain that was compared from.
   *
   * @public
   */
  SourceDomainArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain that was compared against.
   *
   * @public
   */
  TargetDomainArn?: string | undefined;

  /**
   * The comparison result for each category you requested, keyed by category name.
   *
   * @public
   */
  Categories?: Record<string, CategoryDiffResult> | undefined;
}

/**
 * Configuration settings for an OpenSearch application. For more information, see [Using the OpenSearch user interface in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/application.html).
 *
 * @public
 */
export interface AppConfig {
  /**
   * The configuration item to set, such as the admin role for the OpenSearch application.
   *
   * @public
   */
  key?: AppConfigType | undefined;

  /**
   * The value assigned to the configuration key, such as an IAM user ARN.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Data sources that are associated with an OpenSearch application.
 *
 * @public
 */
export interface DataSource {
  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  dataSourceArn?: string | undefined;

  /**
   * Detailed description of a data source.
   *
   * @public
   */
  dataSourceDescription?: string | undefined;

  /**
   * The ARN of the IAM role to be used for cross account/region data source association.
   *
   * @public
   */
  iamRoleForDataSourceArn?: string | undefined;
}

/**
 * Configuration settings for enabling and managing IAM Identity Center.
 *
 * @public
 */
export interface IamIdentityCenterOptionsInput {
  /**
   * Specifies whether IAM Identity Center is enabled or disabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  iamIdentityCenterInstanceArn?: string | undefined;

  /**
   * The ARN of the IAM role associated with the IAM Identity Center application.
   *
   * @public
   */
  iamRoleForIdentityCenterApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique name of the OpenSearch application. Names must be unique within an Amazon Web Services Region for each account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data sources to link to the OpenSearch application.
   *
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * Configuration settings for integrating Amazon Web Services IAM Identity Center with the OpenSearch application.
   *
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterOptionsInput | undefined;

  /**
   * Configuration settings for the OpenSearch application, including administrative options.
   *
   * @public
   */
  appConfigs?: AppConfig[] | undefined;

  /**
   * A list of tags attached to a domain.
   *
   * @public
   */
  tagList?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the application's data at rest. If provided, the application uses your customer-managed key for encryption. If omitted, the application uses an AWS-managed key. The KMS key must be in the same region as the application.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Configuration settings for IAM Identity Center in an OpenSearch application.
 *
 * @public
 */
export interface IamIdentityCenterOptions {
  /**
   * Indicates whether IAM Identity Center is enabled for the OpenSearch application.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  iamIdentityCenterInstanceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role assigned to the IAM Identity Center application for the OpenSearch application.
   *
   * @public
   */
  iamRoleForIdentityCenterApplicationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  iamIdentityCenterApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * The unique identifier assigned to the OpenSearch application.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the OpenSearch application.
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
   * The data sources linked to the OpenSearch application.
   *
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * The IAM Identity Center settings configured for the OpenSearch application.
   *
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterOptions | undefined;

  /**
   * Configuration settings for the OpenSearch application, including administrative options.
   *
   * @public
   */
  appConfigs?: AppConfig[] | undefined;

  /**
   * A list of tags attached to a domain.
   *
   * @public
   */
  tagList?: Tag[] | undefined;

  /**
   * The timestamp indicating when the OpenSearch application was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the application's data at rest.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Specifies the automated snapshot pause request options for the domain.
 *
 * > **Important:** Suspending snapshots reduces data protection. You cannot restore your domain to points in time when snapshots are suspended. Use this feature only for short-term operational needs such as migrations or maintenance windows.
 *
 * Maximum suspension duration: 3 days.
 *
 * @public
 */
export interface AutomatedSnapshotPauseRequestOptions {
  /**
   * Whether to enable or disable automated snapshot pause for the domain.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The timestamp at which the automated snapshot pause should begin.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp at which the automated snapshot pause should end. The maximum allowed duration between `StartTime` and `EndTime` is 3 days.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * The duration of a maintenance schedule. For more information, see [Auto-Tune for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html).
 *
 * @public
 */
export interface Duration {
  /**
   * Integer to specify the value of a maintenance schedule duration.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * The unit of measurement for the duration of a maintenance schedule.
   *
   * @public
   */
  Unit?: TimeUnit | undefined;
}

/**
 * > **Note:** This object is deprecated. Use the domain's [off-peak window](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html) to schedule Auto-Tune optimizations. For migration instructions, see [Migrating from Auto-Tune maintenance windows](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html#off-peak-migrate).
 *
 * The Auto-Tune maintenance schedule. For more information, see [Auto-Tune for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html).
 *
 * @public
 */
export interface AutoTuneMaintenanceSchedule {
  /**
   * The Epoch timestamp at which the Auto-Tune maintenance schedule starts.
   *
   * @public
   */
  StartAt?: Date | undefined;

  /**
   * The duration of the maintenance schedule. For example, `"Duration": \{"Value": 2, "Unit": "HOURS"\}`.
   *
   * @public
   */
  Duration?: Duration | undefined;

  /**
   * A cron expression for a recurring maintenance schedule during which Auto-Tune can deploy changes.
   *
   * @public
   */
  CronExpressionForRecurrence?: string | undefined;
}

/**
 * Options for configuring Auto-Tune. For more information, see [Auto-Tune for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html)
 *
 * @public
 */
export interface AutoTuneOptionsInput {
  /**
   * Whether Auto-Tune is enabled or disabled.
   *
   * @public
   */
  DesiredState?: AutoTuneDesiredState | undefined;

  /**
   * A list of maintenance schedules during which Auto-Tune can deploy changes. Maintenance windows are deprecated and have been replaced with [off-peak windows](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html).
   *
   * @public
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[] | undefined;

  /**
   * Whether to schedule Auto-Tune optimizations that require blue/green deployments during the domain's configured daily off-peak window.
   *
   * @public
   */
  UseOffPeakWindow?: boolean | undefined;
}

/**
 * Container for the parameters required to enable cold storage for an OpenSearch Service domain. For more information, see [Cold storage for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cold-storage.html).
 *
 * @public
 */
export interface ColdStorageOptions {
  /**
   * Whether to enable or disable cold storage on the domain. You must enable UltraWarm storage to enable cold storage.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * Configuration options for defining the setup of any node type within the cluster.
 *
 * @public
 */
export interface NodeConfig {
  /**
   * A boolean value indicating whether a specific node type is active or inactive.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The instance type of a particular node within the cluster.
   *
   * @public
   */
  Type?: OpenSearchPartitionInstanceType | undefined;

  /**
   * The number of nodes of a specific type within the cluster.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * Configuration settings for defining the node type within a cluster.
 *
 * @public
 */
export interface NodeOption {
  /**
   * Defines the type of node, such as coordinating nodes.
   *
   * @public
   */
  NodeType?: NodeOptionsNodeType | undefined;

  /**
   * Configuration options for defining the setup of any node type.
   *
   * @public
   */
  NodeConfig?: NodeConfig | undefined;
}

/**
 * The zone awareness configuration for an Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface ZoneAwarenessConfig {
  /**
   * If you enabled multiple Availability Zones, this value is the number of zones that you want the domain to use. Valid values are `2` and `3`. If your domain is provisioned within a VPC, this value be equal to number of subnets.
   *
   * @public
   */
  AvailabilityZoneCount?: number | undefined;
}

/**
 * Container for the cluster configuration of an OpenSearch Service domain. For more information, see [Creating and managing Amazon OpenSearch Service domains](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html).
 *
 * @public
 */
export interface ClusterConfig {
  /**
   * Instance type of data nodes in the cluster.
   *
   * @public
   */
  InstanceType?: OpenSearchPartitionInstanceType | undefined;

  /**
   * Number of data nodes in the cluster. This number must be greater than 1, otherwise you receive a validation exception.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * Indicates whether dedicated master nodes are enabled for the cluster.`True` if the cluster will use a dedicated master node.`False` if the cluster will not.
   *
   * @public
   */
  DedicatedMasterEnabled?: boolean | undefined;

  /**
   * Indicates whether multiple Availability Zones are enabled. For more information, see [Configuring a multi-AZ domain in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html).
   *
   * @public
   */
  ZoneAwarenessEnabled?: boolean | undefined;

  /**
   * Container for zone awareness configuration options. Only required if `ZoneAwarenessEnabled` is `true`.
   *
   * @public
   */
  ZoneAwarenessConfig?: ZoneAwarenessConfig | undefined;

  /**
   * OpenSearch Service instance type of the dedicated master nodes in the cluster.
   *
   * @public
   */
  DedicatedMasterType?: OpenSearchPartitionInstanceType | undefined;

  /**
   * Number of dedicated master nodes in the cluster. This number must be greater than 2 and not 4, otherwise you receive a validation exception.
   *
   * @public
   */
  DedicatedMasterCount?: number | undefined;

  /**
   * Whether to enable warm storage for the cluster.
   *
   * @public
   */
  WarmEnabled?: boolean | undefined;

  /**
   * The instance type for the cluster's warm nodes.
   *
   * @public
   */
  WarmType?: OpenSearchWarmPartitionInstanceType | undefined;

  /**
   * The number of warm nodes in the cluster.
   *
   * @public
   */
  WarmCount?: number | undefined;

  /**
   * Container for cold storage configuration options.
   *
   * @public
   */
  ColdStorageOptions?: ColdStorageOptions | undefined;

  /**
   * A boolean that indicates whether a multi-AZ domain is turned on with a standby AZ. For more information, see [Configuring a multi-AZ domain in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html).
   *
   * @public
   */
  MultiAZWithStandbyEnabled?: boolean | undefined;

  /**
   * List of node options for the domain.
   *
   * @public
   */
  NodeOptions?: NodeOption[] | undefined;
}

/**
 * Container for the parameters required to enable Cognito authentication for an OpenSearch Service domain. For more information, see [Configuring Amazon Cognito authentication for OpenSearch Dashboards](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html).
 *
 * @public
 */
export interface CognitoOptions {
  /**
   * Whether to enable or disable Amazon Cognito authentication for OpenSearch Dashboards.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The Amazon Cognito user pool ID that you want OpenSearch Service to use for OpenSearch Dashboards authentication.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * The Amazon Cognito identity pool ID that you want OpenSearch Service to use for OpenSearch Dashboards authentication.
   *
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * The `AmazonOpenSearchServiceCognitoAccess` role that allows OpenSearch Service to configure your user pool and identity pool.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * Specifies the deployment strategy options for the domain.
 *
 * @public
 */
export interface DeploymentStrategyOptions {
  /**
   * Specifies the deployment strategy for the domain. Valid values are `Default` and `CapacityOptimized`.
   *
   * @public
   */
  DeploymentStrategy: DeploymentStrategy | undefined;
}

/**
 * Options to configure a custom endpoint for an OpenSearch Service domain.
 *
 * @public
 */
export interface DomainEndpointOptions {
  /**
   * True to require that all traffic to the domain arrive over HTTPS.
   *
   * @public
   */
  EnforceHTTPS?: boolean | undefined;

  /**
   * Specify the TLS security policy to apply to the HTTPS endpoint of the domain. The policy can be one of the following values:
   *
   * - **Policy-Min-TLS-1-0-2019-07:** TLS security policy that supports TLS version 1.0 to TLS version 1.2
   * - **Policy-Min-TLS-1-2-2019-07:** TLS security policy that supports only TLS version 1.2
   * - **Policy-Min-TLS-1-2-PFS-2023-10:** TLS security policy that supports TLS version 1.2 to TLS version 1.3 with perfect forward secrecy cipher suites
   * - **Policy-Min-TLS-1-2-RFC9151-FIPS-2024-08:** TLS security policy that supports TLS version 1.3 with FIPS
   * - **Policy-Min-TLS-1-2-FIPS-PQ-2026-10:** TLS security policy that supports TLS version 1.2 to TLS version 1.3 with FIPS and post-quantum cipher suites
   *
   * @public
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | undefined;

  /**
   * Whether to enable a custom endpoint for the domain.
   *
   * @public
   */
  CustomEndpointEnabled?: boolean | undefined;

  /**
   * The fully qualified URL for the custom endpoint.
   *
   * @public
   */
  CustomEndpoint?: string | undefined;

  /**
   * The ARN for your security certificate, managed in Amazon Web Services Certificate Manager (ACM).
   *
   * @public
   */
  CustomEndpointCertificateArn?: string | undefined;
}

/**
 * Container for the parameters required to enable EBS-based storage for an OpenSearch Service domain.
 *
 * @public
 */
export interface EBSOptions {
  /**
   * Indicates whether EBS volumes are attached to data nodes in an OpenSearch Service domain.
   *
   * @public
   */
  EBSEnabled?: boolean | undefined;

  /**
   * Specifies the type of EBS volumes attached to data nodes.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * Specifies the size (in GiB) of EBS volumes attached to data nodes.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * Specifies the baseline input/output (I/O) performance of EBS volumes attached to data nodes. Applicable only for the `gp3` and provisioned IOPS EBS volume types.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Specifies the throughput (in MiB/s) of the EBS volumes attached to data nodes. Applicable only for the `gp3` volume type.
   *
   * @public
   */
  Throughput?: number | undefined;
}

/**
 * Specifies whether the domain should encrypt data at rest, and if so, the Key Management Service (KMS) key to use. Can only be used when creating a new domain or enabling encryption at rest for the first time on an existing domain. You can't modify this parameter after it's already been specified.
 *
 * @public
 */
export interface EncryptionAtRestOptions {
  /**
   * True to enable encryption at rest.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The KMS key ID. Takes the form `1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a`.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The type of encryption at rest applied to the domain's data. Valid values are `DISK` and `NATIVE`. `DISK` is the default and uses volume-level encryption. `NATIVE` uses engine-native, index-level encryption and requires encryption at rest to be enabled and OpenSearch version 3.3 or later. After the mode is set to `NATIVE`, it can't be changed back to `DISK`.
   *
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;
}

/**
 * Configuration settings for enabling and managing IAM Identity Center.
 *
 * @public
 */
export interface IdentityCenterOptionsInput {
  /**
   * Indicates whether IAM Identity Center is enabled for API access in Amazon OpenSearch Service.
   *
   * @public
   */
  EnabledAPIAccess?: boolean | undefined;

  /**
   * The ARN of the IAM Identity Center instance used to create an OpenSearch UI application that uses IAM Identity Center for authentication.
   *
   * @public
   */
  IdentityCenterInstanceARN?: string | undefined;

  /**
   * The Region of the IAM Identity Center instance.
   *
   * @public
   */
  IdentityCenterInstanceRegion?: string | undefined;

  /**
   * Specifies the attribute that contains the subject identifier (such as username, user ID, or email) in IAM Identity Center.
   *
   * @public
   */
  SubjectKey?: SubjectKeyIdCOption | undefined;

  /**
   * Specifies the attribute that contains the backend role identifier (such as group name or group ID) in IAM Identity Center.
   *
   * @public
   */
  RolesKey?: RolesKeyIdCOption | undefined;
}

/**
 * Specifies whether the Amazon OpenSearch Service domain publishes the OpenSearch application and slow logs to Amazon CloudWatch. For more information, see [Monitoring OpenSearch logs with Amazon CloudWatch Logs](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createdomain-configure-slow-logs.html).
 *
 * > **Note:** After you enable log publishing, you still have to enable the collection of slow logs using the OpenSearch REST API.
 *
 * @public
 */
export interface LogPublishingOption {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs group to publish logs to.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * Whether the log should be published.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Enables or disables node-to-node encryption. For more information, see [Node-to-node encryption for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ntn.html).
 *
 * @public
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * True to enable node-to-node encryption.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * The desired start time for an [off-peak maintenance window](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html).
 *
 * @public
 */
export interface WindowStartTime {
  /**
   * The start hour of the window in Coordinated Universal Time (UTC), using 24-hour time. For example, `17` refers to 5:00 P.M. UTC.
   *
   * @public
   */
  Hours: number | undefined;

  /**
   * The start minute of the window, in UTC.
   *
   * @public
   */
  Minutes: number | undefined;
}

/**
 * A custom 10-hour, low-traffic window during which OpenSearch Service can perform mandatory configuration changes on the domain. These actions can include scheduled service software updates and blue/green Auto-Tune enhancements. OpenSearch Service will schedule these actions during the window that you specify.
 *
 * If you don't specify a window start time, it defaults to 10:00 P.M. local time.
 *
 * For more information, see [Defining off-peak maintenance windows for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html).
 *
 * @public
 */
export interface OffPeakWindow {
  /**
   * A custom start time for the off-peak window, in Coordinated Universal Time (UTC). The window length will always be 10 hours, so you can't specify an end time. For example, if you specify 11:00 P.M. UTC as a start time, the end time will automatically be set to 9:00 A.M.
   *
   * @public
   */
  WindowStartTime?: WindowStartTime | undefined;
}

/**
 * Options for a domain's [off-peak window](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html), during which OpenSearch Service can perform mandatory configuration changes on the domain.
 *
 * @public
 */
export interface OffPeakWindowOptions {
  /**
   * Whether to enable an off-peak window.
   *
   * This option is only available when modifying a domain created prior to February 16, 2023, not when creating a new domain. All domains created after this date have the off-peak window enabled by default. You can't disable the off-peak window after it's enabled for a domain.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Off-peak window settings for the domain.
   *
   * @public
   */
  OffPeakWindow?: OffPeakWindow | undefined;
}

/**
 * The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the specified domain. Default is `0` hours.
 *
 * @public
 */
export interface SnapshotOptions {
  /**
   * The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the specified domain. Default is `0` hours.
   *
   * @public
   */
  AutomatedSnapshotStartHour?: number | undefined;
}

/**
 * Options for configuring service software updates for a domain.
 *
 * @public
 */
export interface SoftwareUpdateOptions {
  /**
   * Whether automatic service software updates are enabled for the domain.
   *
   * @public
   */
  AutoSoftwareUpdateEnabled?: boolean | undefined;

  /**
   * Whether the domain should use the latest service software version during a blue/green deployment. If enabled, the domain will automatically use the latest available service software when a blue/green deployment is triggered.
   *
   * @public
   */
  UseLatestServiceSoftwareForBlueGreen?: boolean | undefined;
}

/**
 * Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC endpoint. For more information, see [Launching your Amazon OpenSearch Service domains using a VPC](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html).
 *
 * @public
 */
export interface VPCOptions {
  /**
   * A list of subnet IDs associated with the VPC endpoints for the domain. If your domain uses multiple Availability Zones, you need to provide two subnet IDs, one per zone. Otherwise, provide only one.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The list of security group IDs associated with the VPC endpoints for the domain. If you do not provide a security group ID, OpenSearch Service uses the default security group for the VPC.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Controls whether egress traffic from the domain is routed through the customer VPC. When `true`, outbound traffic flows through the VPC. When `false`, outbound traffic goes through the public internet.
   *
   * @public
   */
  EgressEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * Name of the OpenSearch Service domain to create. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * String of format Elasticsearch_X.Y or OpenSearch_X.Y to specify the engine version for the OpenSearch Service domain. For example, `OpenSearch_1.0` or `Elasticsearch_7.9`. For more information, see [Creating and managing Amazon OpenSearch Service domains](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomains).
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Container for the cluster configuration of a domain.
   *
   * @public
   */
  ClusterConfig?: ClusterConfig | undefined;

  /**
   * Container for the parameters required to enable EBS-based storage for an OpenSearch Service domain.
   *
   * @public
   */
  EBSOptions?: EBSOptions | undefined;

  /**
   * Identity and Access Management (IAM) policy document specifying the access policies for the new domain.
   *
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * Specify either dual stack or IPv4 as your IP address type. Dual stack allows you to share domain resources across IPv4 and IPv6 address types, and is the recommended option. If you set your IP address type to dual stack, you can't change your address type later.
   *
   * @public
   */
  IPAddressType?: IPAddressType | undefined;

  /**
   * DEPRECATED. Container for the parameters required to configure automated snapshots of domain indexes.
   *
   * @public
   */
  SnapshotOptions?: SnapshotOptions | undefined;

  /**
   * Container for the values required to configure VPC access domains. If you don't specify these values, OpenSearch Service creates the domain with a public endpoint. For more information, see [Launching your Amazon OpenSearch Service domains using a VPC](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html).
   *
   * @public
   */
  VPCOptions?: VPCOptions | undefined;

  /**
   * Key-value pairs to configure Amazon Cognito authentication. For more information, see [Configuring Amazon Cognito authentication for OpenSearch Dashboards](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html).
   *
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * Key-value pairs to enable encryption at rest.
   *
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * Enables node-to-node encryption.
   *
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

  /**
   * Key-value pairs to specify advanced configuration options. The following key-value pairs are supported:
   *
   * - `"rest.action.multi.allow_explicit_index": "true" | "false"` - Note the use of a string rather than a boolean. Specifies whether explicit references to indexes are allowed inside the body of HTTP requests. If you want to configure access policies for domain sub-resources, such as specific indexes and domain APIs, you must disable this property. Default is true.
   * - `"indices.fielddata.cache.size": "80"` - Note the use of a string rather than a boolean. Specifies the percentage of heap space allocated to field data. Default is unbounded.
   * - `"indices.query.bool.max_clause_count": "1024"` - Note the use of a string rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean query. Default is 1,024. Queries with more than the permitted number of clauses result in a `TooManyClauses` error.
   * - `"override_main_response_version": "true" | "false"` - Note the use of a string rather than a boolean. Specifies whether the domain reports its version as 7.10 to allow Elasticsearch OSS clients and plugins to continue working with it. Default is false when creating a domain and true when upgrading a domain.
   *
   * For more information, see [Advanced cluster parameters](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options).
   *
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * Key-value pairs to configure log publishing.
   *
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
   *
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * Options for fine-grained access control.
   *
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput | undefined;

  /**
   * Configuration options for enabling and managing IAM Identity Center integration within a domain.
   *
   * @public
   */
  IdentityCenterOptions?: IdentityCenterOptionsInput | undefined;

  /**
   * List of tags to add to the domain upon creation.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * Options for Auto-Tune.
   *
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsInput | undefined;

  /**
   * Specifies a daily 10-hour time block during which OpenSearch Service can perform configuration changes on the domain, including service software updates and Auto-Tune enhancements that require a blue/green deployment. If no options are specified, the default start time of 10:00 P.M. local time (for the Region that the domain is created in) is used.
   *
   * @public
   */
  OffPeakWindowOptions?: OffPeakWindowOptions | undefined;

  /**
   * Software update options for the domain.
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
   * The engine mode for the domain. For valid values and requirements, see `EngineMode`.
   *
   * @public
   */
  EngineMode?: EngineMode | undefined;
}

/**
 * Specifies the automated snapshot pause options for the domain. These options allow you to temporarily pause automated snapshots for a specified time period.
 *
 * @public
 */
export interface AutomatedSnapshotPauseOptions {
  /**
   * Whether automated snapshot pause is enabled for the domain.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The timestamp at which the automated snapshot pause begins.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp at which the automated snapshot pause ends.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The current state of the automated snapshot pause. Valid values are `Active`, `Completed`, `Scheduled`, and `Disabled`.
   *
   * @public
   */
  State?: PauseState | undefined;
}

/**
 * The Auto-Tune settings for a domain, displayed when enabling or disabling Auto-Tune.
 *
 * @public
 */
export interface AutoTuneOptionsOutput {
  /**
   * The current state of Auto-Tune on the domain.
   *
   * @public
   */
  State?: AutoTuneState | undefined;

  /**
   * Any errors that occurred while enabling or disabling Auto-Tune.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Whether the domain's off-peak window will be used to deploy Auto-Tune changes rather than a maintenance schedule.
   *
   * @public
   */
  UseOffPeakWindow?: boolean | undefined;
}

/**
 * Container for information about a configuration change happening on a domain.
 *
 * @public
 */
export interface ChangeProgressDetails {
  /**
   * The ID of the configuration change.
   *
   * @public
   */
  ChangeId?: string | undefined;

  /**
   * A message corresponding to the status of the configuration change.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The current status of the configuration change.
   *
   * @public
   */
  ConfigChangeStatus?: ConfigChangeStatus | undefined;

  /**
   * The IAM principal who initiated the configuration change.
   *
   * @public
   */
  InitiatedBy?: InitiatedBy | undefined;

  /**
   * The time that the configuration change was initiated, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The last time that the configuration change was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * Settings container for integrating IAM Identity Center with OpenSearch UI applications, which enables enabling secure user authentication and access control across multiple data sources. This setup supports single sign-on (SSO) through IAM Identity Center, allowing centralized user management.
 *
 * @public
 */
export interface IdentityCenterOptions {
  /**
   * Indicates whether IAM Identity Center is enabled for the application.
   *
   * @public
   */
  EnabledAPIAccess?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center instance.
   *
   * @public
   */
  IdentityCenterInstanceARN?: string | undefined;

  /**
   * The Region of the IAM Identity Center instance.
   *
   * @public
   */
  IdentityCenterInstanceRegion?: string | undefined;

  /**
   * Specifies the attribute that contains the subject identifier (such as username, user ID, or email) in IAM Identity Center.
   *
   * @public
   */
  SubjectKey?: SubjectKeyIdCOption | undefined;

  /**
   * Specifies the attribute that contains the backend role identifier (such as group name or group ID) in IAM Identity Center.
   *
   * @public
   */
  RolesKey?: RolesKeyIdCOption | undefined;

  /**
   * The ARN of the IAM Identity Center application that integrates with Amazon OpenSearch Service.
   *
   * @public
   */
  IdentityCenterApplicationARN?: string | undefined;

  /**
   * The identifier of the IAM Identity Store.
   *
   * @public
   */
  IdentityStoreId?: string | undefined;
}

/**
 * Information about the domain properties that are currently being modified.
 *
 * @public
 */
export interface ModifyingProperties {
  /**
   * The name of the property that is currently being modified.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current value of the domain property that is being modified.
   *
   * @public
   */
  ActiveValue?: string | undefined;

  /**
   * The value that the property that is currently being modified will eventually have.
   *
   * @public
   */
  PendingValue?: string | undefined;

  /**
   * The type of value that is currently being modified. Properties can have two types:
   *
   * - `PLAIN_TEXT`: Contain direct values such as "1", "True", or "c5.large.search".
   * - `STRINGIFIED_JSON`: Contain content in JSON format, such as \{"Enabled":"True"\}".
   *
   * @public
   */
  ValueType?: PropertyValueType | undefined;
}

/**
 * Information about the subnets and security groups for an Amazon OpenSearch Service domain provisioned within a virtual private cloud (VPC). For more information, see [Launching your Amazon OpenSearch Service domains using a VPC](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html). This information only exists if the domain was created with `VPCOptions`.
 *
 * @public
 */
export interface VPCDerivedInfo {
  /**
   * The ID for your VPC. Amazon VPC generates this value when you create a VPC.
   *
   * @public
   */
  VPCId?: string | undefined;

  /**
   * A list of subnet IDs associated with the VPC endpoints for the domain.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The list of Availability Zones associated with the VPC subnets.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The list of security group IDs associated with the VPC endpoints for the domain.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Indicates whether egress traffic from the domain is routed through the customer VPC. When `true`, outbound traffic flows through the VPC. When `false`, outbound traffic goes through the public internet.
   *
   * @public
   */
  EgressEnabled?: boolean | undefined;
}

/**
 * The current status of an OpenSearch Service domain.
 *
 * @public
 */
export interface DomainStatus {
  /**
   * Unique identifier for the domain.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * Name of the domain. Domain names are unique across all domains owned by the same account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. For more information, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * Creation status of an OpenSearch Service domain. True if domain creation is complete. False if domain creation is still in progress.
   *
   * @public
   */
  Created?: boolean | undefined;

  /**
   * Deletion status of an OpenSearch Service domain. True if domain deletion is complete. False if domain deletion is still in progress. Once deletion is complete, the status of the domain is no longer returned.
   *
   * @public
   */
  Deleted?: boolean | undefined;

  /**
   * Domain-specific endpoint used to submit index, search, and data upload requests to the domain.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * If `IPAddressType` to set to `dualstack`, a version 2 domain endpoint is provisioned. This endpoint functions like a normal endpoint, except that it works with both IPv4 and IPv6 IP addresses. Normal endpoints work only with IPv4 IP addresses.
   *
   * @public
   */
  EndpointV2?: string | undefined;

  /**
   * The key-value pair that exists if the OpenSearch Service domain uses VPC endpoints. For example:
   *
   * - **IPv4 IP addresses** - `'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'`
   * - **Dual stack IP addresses** - `'vpcv2':'vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.aos.us-east-1.on.aws'`
   *
   * @public
   */
  Endpoints?: Record<string, string> | undefined;

  /**
   * The dual stack hosted zone ID for the domain.
   *
   * @public
   */
  DomainEndpointV2HostedZoneId?: string | undefined;

  /**
   * The status of the domain configuration. True if OpenSearch Service is processing configuration changes. False if the configuration is active.
   *
   * @public
   */
  Processing?: boolean | undefined;

  /**
   * The status of a domain version upgrade to a new version of OpenSearch or Elasticsearch. True if OpenSearch Service is in the process of a version upgrade. False if the configuration is active.
   *
   * @public
   */
  UpgradeProcessing?: boolean | undefined;

  /**
   * Version of OpenSearch or Elasticsearch that the domain is running, in the format `Elasticsearch_X.Y` or `OpenSearch_X.Y`.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Container for the cluster configuration of the domain.
   *
   * @public
   */
  ClusterConfig: ClusterConfig | undefined;

  /**
   * Container for EBS-based storage settings for the domain.
   *
   * @public
   */
  EBSOptions?: EBSOptions | undefined;

  /**
   * Identity and Access Management (IAM) policy document specifying the access policies for the domain.
   *
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * The type of IP addresses supported by the endpoint for the domain.
   *
   * @public
   */
  IPAddressType?: IPAddressType | undefined;

  /**
   * DEPRECATED. Container for parameters required to configure automated snapshots of domain indexes.
   *
   * @public
   */
  SnapshotOptions?: SnapshotOptions | undefined;

  /**
   * The VPC configuration for the domain.
   *
   * @public
   */
  VPCOptions?: VPCDerivedInfo | undefined;

  /**
   * Key-value pairs to configure Amazon Cognito authentication for OpenSearch Dashboards.
   *
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * Encryption at rest settings for the domain.
   *
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * Whether node-to-node encryption is enabled or disabled.
   *
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

  /**
   * Key-value pairs that specify advanced configuration options.
   *
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * Log publishing options for the domain.
   *
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * The current status of the domain's service software.
   *
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions | undefined;

  /**
   * Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
   *
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * Settings for fine-grained access control.
   *
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptions | undefined;

  /**
   * Configuration options for controlling IAM Identity Center integration within a domain.
   *
   * @public
   */
  IdentityCenterOptions?: IdentityCenterOptions | undefined;

  /**
   * Auto-Tune settings for the domain.
   *
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsOutput | undefined;

  /**
   * Information about a configuration change happening on the domain.
   *
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;

  /**
   * Options that specify a custom 10-hour window during which OpenSearch Service can perform configuration changes on the domain.
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
   * The status of any changes that are currently in progress for the domain.
   *
   * @public
   */
  DomainProcessingStatus?: DomainProcessingStatusType | undefined;

  /**
   * Information about the domain properties that are currently being modified.
   *
   * @public
   */
  ModifyingProperties?: ModifyingProperties[] | undefined;

  /**
   * Container for parameters required to enable all machine learning features.
   *
   * @public
   */
  AIMLOptions?: AIMLOptionsOutput | undefined;

  /**
   * The current status of the domain's deployment strategy options.
   *
   * @public
   */
  DeploymentStrategyOptions?: DeploymentStrategyOptions | undefined;

  /**
   * The current status of the domain's automated snapshot pause options.
   *
   * @public
   */
  AutomatedSnapshotPauseOptions?: AutomatedSnapshotPauseOptions | undefined;

  /**
   * The primary use case for the domain.
   *
   * @public
   */
  UseCase?: DomainUseCase | undefined;

  /**
   * The engine mode for the domain.
   *
   * @public
   */
  EngineMode?: EngineMode | undefined;
}

/**
 * The result of a `CreateDomain` operation. Contains the status of the newly created domain.
 *
 * @public
 */
export interface CreateDomainResponse {
  /**
   * The status of the newly created domain.
   *
   * @public
   */
  DomainStatus?: DomainStatus | undefined;
}

/**
 * @public
 */
export interface CreateIndexRequest {
  /**
   * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the index to create. Must be between 1 and 255 characters and follow OpenSearch naming conventions.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The JSON schema defining index mappings, settings, and semantic enrichment configuration. The schema specifies which text fields should be automatically enriched for semantic search capabilities and includes OpenSearch index configuration parameters.
   *
   * @public
   */
  IndexSchema: __DocumentType | undefined;
}

/**
 * @public
 */
export interface CreateIndexResponse {
  /**
   * The status of the index creation operation.
   *
   * @public
   */
  Status: IndexStatus | undefined;
}

/**
 * Cross-cluster search specific connection properties.
 *
 * @public
 */
export interface CrossClusterSearchConnectionProperties {
  /**
   * The status of the `SkipUnavailable` setting for the outbound connection. This feature allows you to specify some clusters as optional and ensure that your cross-cluster queries return partial results despite failures on one or more remote clusters.
   *
   * @public
   */
  SkipUnavailable?: SkipUnavailableStatus | undefined;
}

/**
 * The connection properties of an outbound connection.
 *
 * @public
 */
export interface ConnectionProperties {
  /**
   * > **Important:** The Endpoint attribute cannot be modified.
   *
   * The endpoint of the remote domain. Applicable for VPC_ENDPOINT connection mode.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The connection properties for cross cluster search.
   *
   * @public
   */
  CrossClusterSearch?: CrossClusterSearchConnectionProperties | undefined;
}

/**
 * Container for the parameters to the `CreateOutboundConnection` operation.
 *
 * @public
 */
export interface CreateOutboundConnectionRequest {
  /**
   * Name and Region of the source (local) domain.
   *
   * @public
   */
  LocalDomainInfo: DomainInformationContainer | undefined;

  /**
   * Name and Region of the destination (remote) domain.
   *
   * @public
   */
  RemoteDomainInfo: DomainInformationContainer | undefined;

  /**
   * Name of the connection.
   *
   * @public
   */
  ConnectionAlias: string | undefined;

  /**
   * The connection mode.
   *
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;

  /**
   * The `ConnectionProperties` for the outbound connection.
   *
   * @public
   */
  ConnectionProperties?: ConnectionProperties | undefined;
}

/**
 * The status of an outbound cross-cluster connection.
 *
 * @public
 */
export interface OutboundConnectionStatus {
  /**
   * The status code for the outbound connection. Can be one of the following:
   *
   * - **VALIDATING** - The outbound connection request is being validated.
   * - **VALIDATION_FAILED** - Validation failed for the connection request.
   * - **PENDING_ACCEPTANCE**: Outbound connection request is validated and is not yet accepted by the remote domain owner.
   * - **APPROVED** - Outbound connection has been approved by the remote domain owner for getting provisioned.
   * - **PROVISIONING** - Outbound connection request is in process.
   * - **ACTIVE** - Outbound connection is active and ready to use.
   * - **REJECTING** - Outbound connection rejection by remote domain owner is in progress.
   * - **REJECTED** - Outbound connection request is rejected by remote domain owner.
   * - **DELETING** - Outbound connection deletion is in progress.
   * - **DELETED** - Outbound connection is deleted and can no longer be used.
   *
   * @public
   */
  StatusCode?: OutboundConnectionStatusCode | undefined;

  /**
   * Verbose information for the outbound connection.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The result of a `CreateOutboundConnection` request. Contains details about the newly created cross-cluster connection.
 *
 * @public
 */
export interface CreateOutboundConnectionResponse {
  /**
   * Information about the source (local) domain.
   *
   * @public
   */
  LocalDomainInfo?: DomainInformationContainer | undefined;

  /**
   * Information about the destination (remote) domain.
   *
   * @public
   */
  RemoteDomainInfo?: DomainInformationContainer | undefined;

  /**
   * Name of the connection.
   *
   * @public
   */
  ConnectionAlias?: string | undefined;

  /**
   * The status of the connection.
   *
   * @public
   */
  ConnectionStatus?: OutboundConnectionStatus | undefined;

  /**
   * The unique identifier for the created outbound connection, which is used for subsequent operations on the connection.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The connection mode.
   *
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;

  /**
   * The `ConnectionProperties` for the newly created connection.
   *
   * @public
   */
  ConnectionProperties?: ConnectionProperties | undefined;
}

/**
 * The configuration parameters for a package.
 *
 * @public
 */
export interface PackageConfiguration {
  /**
   * The license requirements for the package.
   *
   * @public
   */
  LicenseRequirement: RequirementLevel | undefined;

  /**
   * The relative file path for the license associated with the package.
   *
   * @public
   */
  LicenseFilepath?: string | undefined;

  /**
   * The configuration requirements for the package.
   *
   * @public
   */
  ConfigurationRequirement: RequirementLevel | undefined;

  /**
   * This indicates whether a B/G deployment is required for updating the configuration that the plugin is prerequisite for.
   *
   * @public
   */
  RequiresRestartForConfigurationUpdate?: boolean | undefined;
}

/**
 * Encryption options for a package.
 *
 * @public
 */
export interface PackageEncryptionOptions {
  /**
   * KMS key ID for encrypting the package.
   *
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * Whether encryption is enabled for the package.
   *
   * @public
   */
  EncryptionEnabled: boolean | undefined;
}

/**
 * The Amazon S3 location to import the package from.
 *
 * @public
 */
export interface PackageSource {
  /**
   * The name of the Amazon S3 bucket containing the package.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * Key (file name) of the package.
   *
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * Configuration options for determining whether a package can be made available for use by other users.
 *
 * @public
 */
export interface PackageVendingOptions {
  /**
   * Indicates whether the package vending feature is enabled, allowing the package to be used by other users.
   *
   * @public
   */
  VendingEnabled: boolean | undefined;
}

/**
 * Container for request parameters to the `CreatePackage` operation.
 *
 * @public
 */
export interface CreatePackageRequest {
  /**
   * Unique name for the package.
   *
   * @public
   */
  PackageName: string | undefined;

  /**
   * The type of package.
   *
   * @public
   */
  PackageType: PackageType | undefined;

  /**
   * Description of the package.
   *
   * @public
   */
  PackageDescription?: string | undefined;

  /**
   * The Amazon S3 location from which to import the package.
   *
   * @public
   */
  PackageSource: PackageSource | undefined;

  /**
   * The configuration parameters for the package being created.
   *
   * @public
   */
  PackageConfiguration?: PackageConfiguration | undefined;

  /**
   * The version of the Amazon OpenSearch Service engine for which is compatible with the package. This can only be specified for package type `ZIP-PLUGIN`
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The vending options for the package being created. They determine if the package can be vended to other users.
   *
   * @public
   */
  PackageVendingOptions?: PackageVendingOptions | undefined;

  /**
   * The encryption parameters for the package being created.
   *
   * @public
   */
  PackageEncryptionOptions?: PackageEncryptionOptions | undefined;
}

/**
 * Basic information about the plugin.
 *
 * @public
 */
export interface PluginProperties {
  /**
   * The name of the plugin.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the plugin.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The version of the plugin.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The name of the class to load.
   *
   * @public
   */
  ClassName?: string | undefined;

  /**
   * The uncompressed size of the plugin.
   *
   * @public
   */
  UncompressedSizeInBytes?: number | undefined;
}

/**
 * Basic information about a package.
 *
 * @public
 */
export interface PackageDetails {
  /**
   * The unique identifier of the package.
   *
   * @public
   */
  PackageID?: string | undefined;

  /**
   * The user-specified name of the package.
   *
   * @public
   */
  PackageName?: string | undefined;

  /**
   * The type of package.
   *
   * @public
   */
  PackageType?: PackageType | undefined;

  /**
   * User-specified description of the package.
   *
   * @public
   */
  PackageDescription?: string | undefined;

  /**
   * The current status of the package. The available options are `AVAILABLE`, `COPYING`, `COPY_FAILED`, `VALIDATNG`, `VALIDATION_FAILED`, `DELETING`, and `DELETE_FAILED`.
   *
   * @public
   */
  PackageStatus?: PackageStatus | undefined;

  /**
   * The timestamp when the package was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Date and time when the package was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The package version.
   *
   * @public
   */
  AvailablePackageVersion?: string | undefined;

  /**
   * Additional information if the package is in an error state. Null otherwise.
   *
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;

  /**
   * Version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y. Defaults to the latest version of OpenSearch.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * If the package is a `ZIP-PLUGIN` package, additional information about plugin properties.
   *
   * @public
   */
  AvailablePluginProperties?: PluginProperties | undefined;

  /**
   * This represents the available configuration parameters for the package.
   *
   * @public
   */
  AvailablePackageConfiguration?: PackageConfiguration | undefined;

  /**
   * A list of users who are allowed to view and associate the package. This field is only visible to the owner of a package.
   *
   * @public
   */
  AllowListedUserList?: string[] | undefined;

  /**
   * The owner of the package who is allowed to create and update a package and add users to the package scope.
   *
   * @public
   */
  PackageOwner?: string | undefined;

  /**
   * Package Vending Options for a package.
   *
   * @public
   */
  PackageVendingOptions?: PackageVendingOptions | undefined;

  /**
   * Encryption options for a package.
   *
   * @public
   */
  PackageEncryptionOptions?: PackageEncryptionOptions | undefined;
}

/**
 * Container for the response returned by the `CreatePackage` operation.
 *
 * @public
 */
export interface CreatePackageResponse {
  /**
   * Basic information about an OpenSearch Service package.
   *
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the domain to create the endpoint for.
   *
   * @public
   */
  DomainArn: string | undefined;

  /**
   * Options to specify the subnets and security groups for the endpoint.
   *
   * @public
   */
  VpcOptions: VPCOptions | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * The connection endpoint for connecting to an Amazon OpenSearch Service domain through a proxy.
 *
 * @public
 */
export interface VpcEndpoint {
  /**
   * The unique identifier of the endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The creator of the endpoint.
   *
   * @public
   */
  VpcEndpointOwner?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain associated with the endpoint.
   *
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC endpoint.
   *
   * @public
   */
  VpcOptions?: VPCDerivedInfo | undefined;

  /**
   * The current status of the endpoint.
   *
   * @public
   */
  Status?: VpcEndpointStatus | undefined;

  /**
   * The connection endpoint ID for connecting to the domain.
   *
   * @public
   */
  Endpoint?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointResponse {
  /**
   * Information about the newly created VPC endpoint.
   *
   * @public
   */
  VpcEndpoint: VpcEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * The unique identifier of the OpenSearch application to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * Container for the parameters to the `DeleteDataSource` operation.
 *
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the data source to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The result of a `GetDataSource` operation.
 *
 * @public
 */
export interface DeleteDataSourceResponse {
  /**
   * A message associated with deletion of the data source.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectQueryDataSourceRequest {
  /**
   * A unique, user-defined label to identify the data source within your OpenSearch Service environment.
   *
   * @public
   */
  DataSourceName: string | undefined;
}

/**
 * Container for the parameters to the `DeleteDomain` operation.
 *
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * The name of the domain you want to permanently delete.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The results of a `DeleteDomain` request. Contains the status of the pending deletion, or a "domain not found" error if the domain and all of its resources have been deleted.
 *
 * @public
 */
export interface DeleteDomainResponse {
  /**
   * The status of the domain being deleted.
   *
   * @public
   */
  DomainStatus?: DomainStatus | undefined;
}

/**
 * Container for the parameters to the `DeleteInboundConnection` operation.
 *
 * @public
 */
export interface DeleteInboundConnectionRequest {
  /**
   * The ID of the inbound connection to permanently delete.
   *
   * @public
   */
  ConnectionId: string | undefined;
}

/**
 * The results of a `DeleteInboundConnection` operation. Contains details about the deleted inbound connection.
 *
 * @public
 */
export interface DeleteInboundConnectionResponse {
  /**
   * The deleted inbound connection.
   *
   * @public
   */
  Connection?: InboundConnection | undefined;
}

/**
 * @public
 */
export interface DeleteIndexRequest {
  /**
   * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the index to delete.
   *
   * @public
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexResponse {
  /**
   * The status of the index deletion operation.
   *
   * @public
   */
  Status: IndexStatus | undefined;
}

/**
 * Container for the parameters to the `DeleteOutboundConnection` operation.
 *
 * @public
 */
export interface DeleteOutboundConnectionRequest {
  /**
   * The ID of the outbound connection you want to permanently delete.
   *
   * @public
   */
  ConnectionId: string | undefined;
}

/**
 * Specifies details about an outbound cross-cluster connection.
 *
 * @public
 */
export interface OutboundConnection {
  /**
   * Information about the source (local) domain.
   *
   * @public
   */
  LocalDomainInfo?: DomainInformationContainer | undefined;

  /**
   * Information about the destination (remote) domain.
   *
   * @public
   */
  RemoteDomainInfo?: DomainInformationContainer | undefined;

  /**
   * Unique identifier of the connection.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * Name of the connection.
   *
   * @public
   */
  ConnectionAlias?: string | undefined;

  /**
   * Status of the connection.
   *
   * @public
   */
  ConnectionStatus?: OutboundConnectionStatus | undefined;

  /**
   * The connection mode.
   *
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;

  /**
   * Properties for the outbound connection.
   *
   * @public
   */
  ConnectionProperties?: ConnectionProperties | undefined;
}

/**
 * Details about the deleted outbound connection.
 *
 * @public
 */
export interface DeleteOutboundConnectionResponse {
  /**
   * The deleted inbound connection.
   *
   * @public
   */
  Connection?: OutboundConnection | undefined;
}

/**
 * Deletes a package from OpenSearch Service. The package can't be associated with any OpenSearch Service domain.
 *
 * @public
 */
export interface DeletePackageRequest {
  /**
   * The internal ID of the package you want to delete. Use `DescribePackages` to find this value.
   *
   * @public
   */
  PackageID: string | undefined;
}

/**
 * Container for the response parameters to the `DeletePackage` operation.
 *
 * @public
 */
export interface DeletePackageResponse {
  /**
   * Information about the deleted package.
   *
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointRequest {
  /**
   * The unique identifier of the endpoint.
   *
   * @public
   */
  VpcEndpointId: string | undefined;
}

/**
 * Summary information for an Amazon OpenSearch Service-managed VPC endpoint.
 *
 * @public
 */
export interface VpcEndpointSummary {
  /**
   * The unique identifier of the endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The creator of the endpoint.
   *
   * @public
   */
  VpcEndpointOwner?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain associated with the endpoint.
   *
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * The current status of the endpoint.
   *
   * @public
   */
  Status?: VpcEndpointStatus | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointResponse {
  /**
   * Information about the deleted endpoint, including its current status (`DELETING` or `DELETE_FAILED`).
   *
   * @public
   */
  VpcEndpointSummary: VpcEndpointSummary | undefined;
}

/**
 * Container for the parameters to the `DeregisterCapability` operation.
 *
 * @public
 */
export interface DeregisterCapabilityRequest {
  /**
   * The unique identifier of the OpenSearch UI application to deregister the capability from.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The name of the capability to deregister.
   *
   * @public
   */
  capabilityName: string | undefined;
}

/**
 * The result of a `DeregisterCapability` request.
 *
 * @public
 */
export interface DeregisterCapabilityResponse {
  /**
   * The status of the deregistration operation. Returns `deleting` when the capability is being removed.
   *
   * @public
   */
  status?: CapabilityStatus | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourceAttachmentRequest {
  /**
   * The unique identifier or name of the OpenSearch application.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  dataSourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourceAttachmentResponse {
  /**
   * The unique identifier assigned to the data source attachment.
   *
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * The unique identifier of the OpenSearch application.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  dataSourceArn?: string | undefined;

  /**
   * The status of the data source attachment. Valid values are `PENDING`, `ATTACHED`, and `FAILED`.
   *
   * @public
   */
  status?: DataSourceAttachmentStatus | undefined;
}

/**
 * Container for the parameters to the `DescribeDomain` operation.
 *
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * The name of the domain that you want information about.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Contains the status of the domain specified in the request.
 *
 * @public
 */
export interface DescribeDomainResponse {
  /**
   * List that contains the status of each specified OpenSearch Service domain.
   *
   * @public
   */
  DomainStatus: DomainStatus | undefined;
}

/**
 * Container for the parameters to the `DescribeDomainAutoTunes` operation.
 *
 * @public
 */
export interface DescribeDomainAutoTunesRequest {
  /**
   * Name of the domain that you want Auto-Tune details about.
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
   * If your initial `DescribeDomainAutoTunes` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `DescribeDomainAutoTunes` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies details about a scheduled Auto-Tune action. For more information, see [Auto-Tune for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html).
 *
 * @public
 */
export interface ScheduledAutoTuneDetails {
  /**
   * The date and time when the Auto-Tune action is scheduled for the domain.
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * The type of Auto-Tune action.
   *
   * @public
   */
  ActionType?: ScheduledAutoTuneActionType | undefined;

  /**
   * A description of the Auto-Tune action.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * The severity of the Auto-Tune action. Valid values are `LOW`, `MEDIUM`, and `HIGH`.
   *
   * @public
   */
  Severity?: ScheduledAutoTuneSeverityType | undefined;
}

/**
 * Specifies details about a scheduled Auto-Tune action. For more information, see [Auto-Tune for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html).
 *
 * @public
 */
export interface AutoTuneDetails {
  /**
   * Container for details about a scheduled Auto-Tune action.
   *
   * @public
   */
  ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails | undefined;
}

/**
 * Information about an Auto-Tune action. For more information, see [Auto-Tune for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html).
 *
 * @public
 */
export interface AutoTune {
  /**
   * The type of Auto-Tune action.
   *
   * @public
   */
  AutoTuneType?: AutoTuneType | undefined;

  /**
   * Details about an Auto-Tune action.
   *
   * @public
   */
  AutoTuneDetails?: AutoTuneDetails | undefined;
}

/**
 * The result of a `DescribeDomainAutoTunes` request.
 *
 * @public
 */
export interface DescribeDomainAutoTunesResponse {
  /**
   * The list of setting adjustments that Auto-Tune has made to the domain.
   *
   * @public
   */
  AutoTunes?: AutoTune[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the parameters to the `DescribeDomainChangeProgress` operation.
 *
 * @public
 */
export interface DescribeDomainChangeProgressRequest {
  /**
   * The name of the domain to get progress information for.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The specific change ID for which you want to get progress information. If omitted, the request returns information about the most recent configuration change.
   *
   * @public
   */
  ChangeId?: string | undefined;
}

/**
 * Progress details for each stage of a domain update.
 *
 * @public
 */
export interface ChangeProgressStage {
  /**
   * The name of the stage.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the stage.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The description of the stage.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The most recent updated timestamp of the stage.
   *
   * @public
   */
  LastUpdated?: Date | undefined;
}

/**
 * A validation failure that occurred as the result of a pre-update validation check (verbose dry run) on a domain.
 *
 * @public
 */
export interface ValidationFailure {
  /**
   * The error code of the failure.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A message corresponding to the failure.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The severity of the validation failure.
   *
   * @public
   */
  Severity?: ValidationFailureSeverity | undefined;
}

/**
 * The progress details of a specific domain configuration change.
 *
 * @public
 */
export interface ChangeProgressStatusDetails {
  /**
   * The unique change identifier associated with a specific domain configuration change.
   *
   * @public
   */
  ChangeId?: string | undefined;

  /**
   * The time at which the configuration change is made on the domain.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The overall status of the domain configuration change.
   *
   * @public
   */
  Status?: OverallChangeStatus | undefined;

  /**
   * The list of properties in the domain configuration change that are still pending.
   *
   * @public
   */
  PendingProperties?: string[] | undefined;

  /**
   * The list of properties in the domain configuration change that have completed.
   *
   * @public
   */
  CompletedProperties?: string[] | undefined;

  /**
   * The total number of stages required for the configuration change.
   *
   * @public
   */
  TotalNumberOfStages?: number | undefined;

  /**
   * The specific stages that the domain is going through to perform the configuration change.
   *
   * @public
   */
  ChangeProgressStages?: ChangeProgressStage[] | undefined;

  /**
   * The last time that the status of the configuration change was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The current status of the configuration change.
   *
   * @public
   */
  ConfigChangeStatus?: ConfigChangeStatus | undefined;

  /**
   * The IAM principal who initiated the configuration change.
   *
   * @public
   */
  InitiatedBy?: InitiatedBy | undefined;

  /**
   * The validation failures that occurred as a result of the configuration change.
   *
   * @public
   */
  ValidationFailures?: ValidationFailure[] | undefined;

  /**
   * The list of advisory warning codes that were accepted for the configuration change.
   *
   * @public
   */
  AcceptedWarnings?: string[] | undefined;
}

/**
 * The result of a `DescribeDomainChangeProgress` request. Contains progress information for the requested domain change.
 *
 * @public
 */
export interface DescribeDomainChangeProgressResponse {
  /**
   * Container for information about the stages of a configuration change happening on a domain.
   *
   * @public
   */
  ChangeProgressStatus?: ChangeProgressStatusDetails | undefined;
}

/**
 * Container for the parameters to the `DescribeDomainConfig` operation.
 *
 * @public
 */
export interface DescribeDomainConfigRequest {
  /**
   * Name of the OpenSearch Service domain configuration that you want to describe.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The status of automated snapshot pause options for the domain.
 *
 * @public
 */
export interface AutomatedSnapshotPauseOptionsStatus {
  /**
   * Automated snapshot pause options for the domain.
   *
   * @public
   */
  Options: AutomatedSnapshotPauseOptions | undefined;

  /**
   * The current status of the automated snapshot pause options for the domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Auto-Tune settings when updating a domain. For more information, see [Auto-Tune for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html).
 *
 * @public
 */
export interface AutoTuneOptions {
  /**
   * Whether Auto-Tune is enabled or disabled.
   *
   * @public
   */
  DesiredState?: AutoTuneDesiredState | undefined;

  /**
   * When disabling Auto-Tune, specify `NO_ROLLBACK` to retain all prior Auto-Tune settings or `DEFAULT_ROLLBACK` to revert to the OpenSearch Service defaults. If you specify `DEFAULT_ROLLBACK`, you must include a `MaintenanceSchedule` in the request. Otherwise, OpenSearch Service is unable to perform the rollback.
   *
   * @public
   */
  RollbackOnDisable?: RollbackOnDisable | undefined;

  /**
   * DEPRECATED. Use [off-peak window](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html) instead.
   *
   * A list of maintenance schedules during which Auto-Tune can deploy changes.
   *
   * @public
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[] | undefined;

  /**
   * Whether to use the domain's [off-peak window](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html) to deploy configuration changes on the domain rather than a maintenance schedule.
   *
   * @public
   */
  UseOffPeakWindow?: boolean | undefined;
}

/**
 * The current status of Auto-Tune for the domain. For more information, see [Auto-Tune for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html).
 *
 * @public
 */
export interface AutoTuneStatus {
  /**
   * Date and time when Auto-Tune was enabled for the domain.
   *
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * Date and time when the Auto-Tune options were last updated for the domain.
   *
   * @public
   */
  UpdateDate: Date | undefined;

  /**
   * The latest version of the Auto-Tune options.
   *
   * @public
   */
  UpdateVersion?: number | undefined;

  /**
   * The current state of Auto-Tune on the domain.
   *
   * @public
   */
  State: AutoTuneState | undefined;

  /**
   * Any errors that occurred while enabling or disabling Auto-Tune.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Indicates whether the domain is being deleted.
   *
   * @public
   */
  PendingDeletion?: boolean | undefined;
}

/**
 * The Auto-Tune status for the domain.
 *
 * @public
 */
export interface AutoTuneOptionsStatus {
  /**
   * Auto-Tune settings for updating a domain.
   *
   * @public
   */
  Options?: AutoTuneOptions | undefined;

  /**
   * The current status of Auto-Tune for a domain.
   *
   * @public
   */
  Status?: AutoTuneStatus | undefined;
}

/**
 * The cluster configuration status for a domain.
 *
 * @public
 */
export interface ClusterConfigStatus {
  /**
   * Cluster configuration options for the specified domain.
   *
   * @public
   */
  Options: ClusterConfig | undefined;

  /**
   * The status of cluster configuration options for the specified domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The status of the Cognito options for the specified domain.
 *
 * @public
 */
export interface CognitoOptionsStatus {
  /**
   * Cognito options for the specified domain.
   *
   * @public
   */
  Options: CognitoOptions | undefined;

  /**
   * The status of the Cognito options for the specified domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The status of deployment strategy options for the domain.
 *
 * @public
 */
export interface DeploymentStrategyOptionsStatus {
  /**
   * Deployment strategy options for the domain.
   *
   * @public
   */
  Options: DeploymentStrategyOptions | undefined;

  /**
   * The current status of the deployment strategy options for the domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The configured endpoint options for a domain and their current status.
 *
 * @public
 */
export interface DomainEndpointOptionsStatus {
  /**
   * Options to configure the endpoint for a domain.
   *
   * @public
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * The status of the endpoint options for a domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The status of the EBS options for the specified OpenSearch Service domain.
 *
 * @public
 */
export interface EBSOptionsStatus {
  /**
   * The configured EBS options for the specified domain.
   *
   * @public
   */
  Options: EBSOptions | undefined;

  /**
   * The status of the EBS options for the specified domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Status of the encryption at rest options for the specified OpenSearch Service domain.
 *
 * @public
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * Encryption at rest options for the specified domain.
   *
   * @public
   */
  Options: EncryptionAtRestOptions | undefined;

  /**
   * The status of the encryption at rest options for the specified domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The status of the engine mode for the domain.
 *
 * @public
 */
export interface EngineModeStatus {
  /**
   * The engine mode configured for the domain.
   *
   * @public
   */
  Options: EngineMode | undefined;

  /**
   * The current status of the engine mode for the domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The status of the the OpenSearch or Elasticsearch version options for the specified Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface VersionStatus {
  /**
   * The OpenSearch or Elasticsearch version for the specified domain.
   *
   * @public
   */
  Options: string | undefined;

  /**
   * The status of the version options for the specified domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The status of IAM Identity Center configuration settings for a domain.
 *
 * @public
 */
export interface IdentityCenterOptionsStatus {
  /**
   * Configuration settings for IAM Identity Center integration.
   *
   * @public
   */
  Options: IdentityCenterOptions | undefined;

  /**
   * The status of IAM Identity Center configuration settings for a domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The IP address type status for the domain.
 *
 * @public
 */
export interface IPAddressTypeStatus {
  /**
   * The IP address options for the domain.
   *
   * @public
   */
  Options: IPAddressType | undefined;

  /**
   * Provides the current status of an entity.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The configured log publishing options for the domain and their current status.
 *
 * @public
 */
export interface LogPublishingOptionsStatus {
  /**
   * The log publishing options configured for the domain.
   *
   * @public
   */
  Options?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * The status of the log publishing options for the domain.
   *
   * @public
   */
  Status?: OptionStatus | undefined;
}

/**
 * Status of the node-to-node encryption options for the specified domain.
 *
 * @public
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * The node-to-node encryption options for the specified domain.
   *
   * @public
   */
  Options: NodeToNodeEncryptionOptions | undefined;

  /**
   * The status of the node-to-node encryption options for the specified domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The status of [off-peak window](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html) options for a domain.
 *
 * @public
 */
export interface OffPeakWindowOptionsStatus {
  /**
   * The domain's off-peak window configuration.
   *
   * @public
   */
  Options?: OffPeakWindowOptions | undefined;

  /**
   * The current status of off-peak window options.
   *
   * @public
   */
  Status?: OptionStatus | undefined;
}

/**
 * Container for information about a daily automated snapshot for an OpenSearch Service domain.
 *
 * @public
 */
export interface SnapshotOptionsStatus {
  /**
   * The daily snapshot options specified for the domain.
   *
   * @public
   */
  Options: SnapshotOptions | undefined;

  /**
   * The status of a daily automated snapshot.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The status of the service software options for a domain.
 *
 * @public
 */
export interface SoftwareUpdateOptionsStatus {
  /**
   * The service software update options for a domain.
   *
   * @public
   */
  Options?: SoftwareUpdateOptions | undefined;

  /**
   * The status of service software update options, including creation date and last updated date.
   *
   * @public
   */
  Status?: OptionStatus | undefined;
}

/**
 * The status of the use case for the domain.
 *
 * @public
 */
export interface UseCaseStatus {
  /**
   * The use case configured for the domain.
   *
   * @public
   */
  Options: DomainUseCase | undefined;

  /**
   * The current status of the use case for the domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Status of the VPC options for a specified domain.
 *
 * @public
 */
export interface VPCDerivedInfoStatus {
  /**
   * The VPC options for the specified domain.
   *
   * @public
   */
  Options: VPCDerivedInfo | undefined;

  /**
   * The status of the VPC options for the specified domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Container for the configuration of an OpenSearch Service domain.
 *
 * @public
 */
export interface DomainConfig {
  /**
   * The OpenSearch or Elasticsearch version that the domain is running.
   *
   * @public
   */
  EngineVersion?: VersionStatus | undefined;

  /**
   * Container for the cluster configuration of a the domain.
   *
   * @public
   */
  ClusterConfig?: ClusterConfigStatus | undefined;

  /**
   * Container for EBS options configured for the domain.
   *
   * @public
   */
  EBSOptions?: EBSOptionsStatus | undefined;

  /**
   * Specifies the access policies for the domain.
   *
   * @public
   */
  AccessPolicies?: AccessPoliciesStatus | undefined;

  /**
   * Choose either dual stack or IPv4 as your IP address type. Dual stack allows you to share domain resources across IPv4 and IPv6 address types, and is the recommended option. If you set your IP address type to dual stack, you can't change your address type later.
   *
   * @public
   */
  IPAddressType?: IPAddressTypeStatus | undefined;

  /**
   * DEPRECATED. Container for parameters required to configure automated snapshots of domain indexes.
   *
   * @public
   */
  SnapshotOptions?: SnapshotOptionsStatus | undefined;

  /**
   * The current VPC options for the domain and the status of any updates to their configuration.
   *
   * @public
   */
  VPCOptions?: VPCDerivedInfoStatus | undefined;

  /**
   * Container for Amazon Cognito options for the domain.
   *
   * @public
   */
  CognitoOptions?: CognitoOptionsStatus | undefined;

  /**
   * Key-value pairs to enable encryption at rest.
   *
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus | undefined;

  /**
   * Whether node-to-node encryption is enabled or disabled.
   *
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus | undefined;

  /**
   * Key-value pairs to specify advanced configuration options. For more information, see [Advanced options](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options).
   *
   * @public
   */
  AdvancedOptions?: AdvancedOptionsStatus | undefined;

  /**
   * Key-value pairs to configure log publishing.
   *
   * @public
   */
  LogPublishingOptions?: LogPublishingOptionsStatus | undefined;

  /**
   * Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
   *
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus | undefined;

  /**
   * Container for fine-grained access control settings for the domain.
   *
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus | undefined;

  /**
   * Configuration options for enabling and managing IAM Identity Center integration within a domain.
   *
   * @public
   */
  IdentityCenterOptions?: IdentityCenterOptionsStatus | undefined;

  /**
   * Container for Auto-Tune settings for the domain.
   *
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsStatus | undefined;

  /**
   * Container for information about the progress of an existing configuration change.
   *
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;

  /**
   * Container for off-peak window options for the domain.
   *
   * @public
   */
  OffPeakWindowOptions?: OffPeakWindowOptionsStatus | undefined;

  /**
   * Software update options for the domain.
   *
   * @public
   */
  SoftwareUpdateOptions?: SoftwareUpdateOptionsStatus | undefined;

  /**
   * Information about the domain properties that are currently being modified.
   *
   * @public
   */
  ModifyingProperties?: ModifyingProperties[] | undefined;

  /**
   * Container for parameters required to enable all machine learning features.
   *
   * @public
   */
  AIMLOptions?: AIMLOptionsStatus | undefined;

  /**
   * Specifies `DeploymentStrategyOptions` for the domain.
   *
   * @public
   */
  DeploymentStrategyOptions?: DeploymentStrategyOptionsStatus | undefined;

  /**
   * Specifies `AutomatedSnapshotPauseOptions` for the domain.
   *
   * @public
   */
  AutomatedSnapshotPauseOptions?: AutomatedSnapshotPauseOptionsStatus | undefined;

  /**
   * The use case configured for the domain.
   *
   * @public
   */
  UseCase?: UseCaseStatus | undefined;

  /**
   * The engine mode configured for the domain.
   *
   * @public
   */
  EngineMode?: EngineModeStatus | undefined;
}

/**
 * Contains the configuration information of the requested domain.
 *
 * @public
 */
export interface DescribeDomainConfigResponse {
  /**
   * Container for the configuration of the OpenSearch Service domain.
   *
   * @public
   */
  DomainConfig: DomainConfig | undefined;
}

/**
 * Container for the parameters to the `DescribeDomainHealth` operation.
 *
 * @public
 */
export interface DescribeDomainHealthRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Information about an Availability Zone on a domain.
 *
 * @public
 */
export interface AvailabilityZoneInfo {
  /**
   * The name of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneName?: string | undefined;

  /**
   * The current state of the Availability Zone. Current options are `Active` and `StandBy`.
   *
   * - `Active` - Data nodes in the Availability Zone are in use.
   * - `StandBy` - Data nodes in the Availability Zone are in a standby state.
   * - `NotAvailable` - Unable to retrieve information.
   *
   * @public
   */
  ZoneStatus?: ZoneStatus | undefined;

  /**
   * The total number of data nodes configured in the Availability Zone.
   *
   * @public
   */
  ConfiguredDataNodeCount?: string | undefined;

  /**
   * The number of data nodes active in the Availability Zone.
   *
   * @public
   */
  AvailableDataNodeCount?: string | undefined;

  /**
   * The total number of primary and replica shards in the Availability Zone.
   *
   * @public
   */
  TotalShards?: string | undefined;

  /**
   * The total number of primary and replica shards that aren't allocated to any of the nodes in the Availability Zone.
   *
   * @public
   */
  TotalUnAssignedShards?: string | undefined;
}

/**
 * Information about the active domain environment.
 *
 * @public
 */
export interface EnvironmentInfo {
  /**
   * A list of `AvailabilityZoneInfo` for the domain.
   *
   * @public
   */
  AvailabilityZoneInformation?: AvailabilityZoneInfo[] | undefined;
}

/**
 * The result of a `DescribeDomainHealth` request. Contains health information for the requested domain.
 *
 * @public
 */
export interface DescribeDomainHealthResponse {
  /**
   * The current state of the domain.
   *
   * - `Processing` - The domain has updates in progress.
   * - `Active` - Requested changes have been processed and deployed to the domain.
   *
   * @public
   */
  DomainState?: DomainState | undefined;

  /**
   * The number of Availability Zones configured for the domain. If the service is unable to fetch this information, it will return `NotAvailable`.
   *
   * @public
   */
  AvailabilityZoneCount?: string | undefined;

  /**
   * The number of active Availability Zones configured for the domain. If the service is unable to fetch this information, it will return `NotAvailable`.
   *
   * @public
   */
  ActiveAvailabilityZoneCount?: string | undefined;

  /**
   * The number of standby Availability Zones configured for the domain. If the service is unable to fetch this information, it will return `NotAvailable`.
   *
   * @public
   */
  StandByAvailabilityZoneCount?: string | undefined;

  /**
   * The number of data nodes configured for the domain. If the service is unable to fetch this information, it will return `NotAvailable`.
   *
   * @public
   */
  DataNodeCount?: string | undefined;

  /**
   * A boolean that indicates if dedicated master nodes are activated for the domain.
   *
   * @public
   */
  DedicatedMaster?: boolean | undefined;

  /**
   * The number of nodes that can be elected as a master node. If dedicated master nodes is turned on, this value is the number of dedicated master nodes configured for the domain. If the service is unable to fetch this information, it will return `NotAvailable`.
   *
   * @public
   */
  MasterEligibleNodeCount?: string | undefined;

  /**
   * The number of warm nodes configured for the domain.
   *
   * @public
   */
  WarmNodeCount?: string | undefined;

  /**
   * Indicates whether the domain has an elected master node.
   *
   * - **Available** - The domain has an elected master node.
   * - **UnAvailable** - The master node hasn't yet been elected, and a quorum to elect a new master node hasn't been reached.
   *
   * @public
   */
  MasterNode?: MasterNodeStatus | undefined;

  /**
   * The current health status of your cluster.
   *
   * - `Red` - At least one primary shard is not allocated to any node.
   * - `Yellow` - All primary shards are allocated to nodes, but some replicas aren’t.
   * - `Green` - All primary shards and their replicas are allocated to nodes.
   * - `NotAvailable` - Unable to retrieve cluster health.
   *
   * @public
   */
  ClusterHealth?: DomainHealth | undefined;

  /**
   * The total number of primary and replica shards for the domain.
   *
   * @public
   */
  TotalShards?: string | undefined;

  /**
   * The total number of primary and replica shards not allocated to any of the nodes for the cluster.
   *
   * @public
   */
  TotalUnAssignedShards?: string | undefined;

  /**
   * A list of `EnvironmentInfo` for the domain.
   *
   * @public
   */
  EnvironmentInformation?: EnvironmentInfo[] | undefined;
}

/**
 * Container for the parameters to the `DescribeDomainNodes` operation.
 *
 * @public
 */
export interface DescribeDomainNodesRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Container for information about nodes on the domain.
 *
 * @public
 */
export interface DomainNodesStatus {
  /**
   * The ID of the node.
   *
   * @public
   */
  NodeId?: string | undefined;

  /**
   * Indicates whether the nodes is a data, master, or UltraWarm node.
   *
   * @public
   */
  NodeType?: NodeType | undefined;

  /**
   * The Availability Zone of the node.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The instance type information of the node.
   *
   * @public
   */
  InstanceType?: OpenSearchPartitionInstanceType | undefined;

  /**
   * Indicates if the node is active or in standby.
   *
   * @public
   */
  NodeStatus?: NodeStatus | undefined;

  /**
   * Indicates if the node has EBS or instance storage.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * If the nodes has EBS storage, indicates if the volume type is gp2 or gp3. Only applicable for data nodes.
   *
   * @public
   */
  StorageVolumeType?: VolumeType | undefined;

  /**
   * The storage size of the node, in GiB.
   *
   * @public
   */
  StorageSize?: string | undefined;
}

/**
 * The result of a `DescribeDomainNodes` request. Contains information about the nodes on the requested domain.
 *
 * @public
 */
export interface DescribeDomainNodesResponse {
  /**
   * Contains nodes information list `DomainNodesStatusList` with details about the all nodes on the requested domain.
   *
   * @public
   */
  DomainNodesStatusList?: DomainNodesStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeDomainReplicationRequest {
  /**
   * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * A domain that another domain replicates with, and the state of that relationship.
 *
 * @public
 */
export interface ReplicationPeer {
  /**
   * The Amazon Resource Name (ARN) of the peer domain.
   *
   * @public
   */
  PeerDomainArn?: string | undefined;

  /**
   * The peer's role in the relationship, either `PRIMARY` or `SECONDARY`.
   *
   * @public
   */
  PeerRole?: ReplicationRole | undefined;

  /**
   * The state of the relationship:
   *
   * - `PENDING_SETUP` - replication is being established.
   * - `ACTIVE` - replication is running.
   * - `SWITCHING_OVER` - a planned promotion is in progress.
   * - `FAILING_OVER` - an unplanned promotion is in progress.
   * - `PENDING_REMOVAL` - replication is being stopped.
   * - `DETACHED` - the relationship has ended.
   * - `EJECTED` - a failover promoted the other domain. The former primary keeps the data it had when it was ejected and stays read-only until you remove the peer, or discard that data and pair again.
   * - `FAILED` - setup or teardown could not complete. You can still remove the relationship.
   *
   * A relationship that is removed successfully no longer appears in `Peers`.
   *
   * @public
   */
  Status?: ReplicationStatus | undefined;

  /**
   * An explanation of why the relationship is in its current state, when more detail is available.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainReplicationResponse {
  /**
   * The Amazon Resource Name (ARN) of the domain described.
   *
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * The domain's role in the arrangement, either `PRIMARY` or `SECONDARY`. Absent when the domain is not replicating.
   *
   * @public
   */
  Role?: ReplicationRole | undefined;

  /**
   * The domains that this domain replicates with. Each entry carries the state of that one relationship. Empty when the domain is not replicating.
   *
   * @public
   */
  Peers?: ReplicationPeer[] | undefined;
}

/**
 * Container for the parameters to the `DescribeDomains` operation.
 *
 * @public
 */
export interface DescribeDomainsRequest {
  /**
   * Array of OpenSearch Service domain names that you want information about. You must specify at least one domain name.
   *
   * @public
   */
  DomainNames: string[] | undefined;
}

/**
 * Contains the status of the specified domains or all domains owned by the account.
 *
 * @public
 */
export interface DescribeDomainsResponse {
  /**
   * The status of the requested domains.
   *
   * @public
   */
  DomainStatusList: DomainStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeDryRunProgressRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of the dry run.
   *
   * @public
   */
  DryRunId?: string | undefined;

  /**
   * Whether to include the configuration of the dry run in the response. The configuration specifies the updates that you're planning to make on the domain.
   *
   * @public
   */
  LoadDryRunConfig?: boolean | undefined;
}

/**
 * Information about the progress of a pre-upgrade dry run analysis.
 *
 * @public
 */
export interface DryRunProgressStatus {
  /**
   * The unique identifier of the dry run.
   *
   * @public
   */
  DryRunId: string | undefined;

  /**
   * The current status of the dry run.
   *
   * @public
   */
  DryRunStatus: string | undefined;

  /**
   * The timestamp when the dry run was initiated.
   *
   * @public
   */
  CreationDate: string | undefined;

  /**
   * The timestamp when the dry run was last updated.
   *
   * @public
   */
  UpdateDate: string | undefined;

  /**
   * The validation failures that occurred as a result of the dry run.
   *
   * @public
   */
  ValidationFailures?: ValidationFailure[] | undefined;

  /**
   * The list of advisory warning codes that were accepted for the configuration change.
   *
   * @public
   */
  AcceptedWarnings?: string[] | undefined;
}

/**
 * Results of a dry run performed in an update domain request.
 *
 * @public
 */
export interface DryRunResults {
  /**
   * Specifies the way in which OpenSearch Service will apply an update. Possible values are:
   *
   * - **Blue/Green** - The update requires a blue/green deployment.
   * - **DynamicUpdate** - No blue/green deployment required
   * - **Undetermined** - The domain is in the middle of an update and can't predict the deployment type. Try again after the update is complete.
   * - **None** - The request doesn't include any configuration changes.
   *
   * @public
   */
  DeploymentType?: string | undefined;

  /**
   * A message corresponding to the deployment type.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDryRunProgressResponse {
  /**
   * The current status of the dry run, including any validation errors.
   *
   * @public
   */
  DryRunProgressStatus?: DryRunProgressStatus | undefined;

  /**
   * Details about the changes you're planning to make on the domain.
   *
   * @public
   */
  DryRunConfig?: DomainStatus | undefined;

  /**
   * The results of the dry run.
   *
   * @public
   */
  DryRunResults?: DryRunResults | undefined;
}

/**
 * A filter used to limit results when describing inbound or outbound cross-cluster connections. You can specify multiple values per filter. A cross-cluster connection must match at least one of the specified values for it to be returned from an operation.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * One or more values for the filter.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * Container for the parameters to the `DescribeInboundConnections` operation.
 *
 * @public
 */
export interface DescribeInboundConnectionsRequest {
  /**
   * A list of filters used to match properties for inbound cross-cluster connections.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `DescribeInboundConnections` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `DescribeInboundConnections` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains a list of connections matching the filter criteria.
 *
 * @public
 */
export interface DescribeInboundConnectionsResponse {
  /**
   * List of inbound connections.
   *
   * @public
   */
  Connections?: InboundConnection[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies the entity for which to retrieve insights. An entity can be an Amazon OpenSearch Service domain or an Amazon Web Services account.
 *
 * @public
 */
export interface InsightEntity {
  /**
   * The type of the entity. Possible values are `Account` and `DomainName`.
   *
   * @public
   */
  Type: InsightEntityType | undefined;

  /**
   * The value of the entity. For `DomainName`, this is the domain name. For `Account`, this is the Amazon Web Services account ID.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Container for the parameters to the `DescribeInsightDetails` operation.
 *
 * @public
 */
export interface DescribeInsightDetailsRequest {
  /**
   * The entity for which to retrieve insight details. Specifies the type and value of the entity, such as a domain name or Amazon Web Services account ID.
   *
   * @public
   */
  Entity: InsightEntity | undefined;

  /**
   * The unique identifier of the insight to describe.
   *
   * @public
   */
  InsightId: string | undefined;

  /**
   * Specifies whether to show response with HTML content in response or not.
   *
   * @public
   */
  ShowHtmlContent?: boolean | undefined;
}

/**
 * Represents a field in the detailed view of an insight, returned by the `DescribeInsightDetails` operation.
 *
 * @public
 */
export interface InsightField {
  /**
   * The name of the insight field.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the insight field. Possible values are `text` and `metric`.
   *
   * @public
   */
  Type: InsightFieldType | undefined;

  /**
   * The value of the insight field.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The result of a `DescribeInsightDetails` request. Contains the detailed fields associated with the specified insight.
 *
 * @public
 */
export interface DescribeInsightDetailsResponse {
  /**
   * The list of fields that contain detailed information about the insight.
   *
   * @public
   */
  Fields: InsightField[] | undefined;
}

/**
 * Container for the parameters to the `DescribeInstanceTypeLimits` operation.
 *
 * @public
 */
export interface DescribeInstanceTypeLimitsRequest {
  /**
   * The name of the domain. Only specify if you need the limits for an existing domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The OpenSearch Service instance type for which you need limit information.
   *
   * @public
   */
  InstanceType: OpenSearchPartitionInstanceType | undefined;

  /**
   * Version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y. Defaults to the latest version of OpenSearch.
   *
   * @public
   */
  EngineVersion: string | undefined;
}

/**
 * Limits on the number of instances that can be created in OpenSearch Service for a given instance type.
 *
 * @public
 */
export interface InstanceCountLimits {
  /**
   * The maximum allowed number of instances.
   *
   * @public
   */
  MinimumInstanceCount?: number | undefined;

  /**
   * The minimum allowed number of instances.
   *
   * @public
   */
  MaximumInstanceCount?: number | undefined;
}

/**
 * Instance-related attributes that are available for a given instance type.
 *
 * @public
 */
export interface InstanceLimits {
  /**
   * Limits on the number of instances that can be created for a given instance type.
   *
   * @public
   */
  InstanceCountLimits?: InstanceCountLimits | undefined;
}

/**
 * Limits that are applicable for the given Amazon OpenSearch Service storage type.
 *
 * @public
 */
export interface StorageTypeLimit {
  /**
   * Name of storage limits that are applicable for the given storage type. If `StorageType` is `ebs`, the following options are available:
   *
   * - **MinimumVolumeSize** - Minimum volume size that is available for the given storage type. Can be empty if not applicable.
   * - **MaximumVolumeSize** - Maximum volume size that is available for the given storage type. Can be empty if not applicable.
   * - **MaximumIops** - Maximum amount of IOPS that is available for the given the storage type. Can be empty if not applicable.
   * - **MinimumIops** - Minimum amount of IOPS that is available for the given the storage type. Can be empty if not applicable.
   * - **MaximumThroughput** - Maximum amount of throughput that is available for the given the storage type. Can be empty if not applicable.
   * - **MinimumThroughput** - Minimum amount of throughput that is available for the given the storage type. Can be empty if not applicable.
   *
   * @public
   */
  LimitName?: string | undefined;

  /**
   * The limit values.
   *
   * @public
   */
  LimitValues?: string[] | undefined;
}

/**
 * A list of storage types for an Amazon OpenSearch Service domain that are available for a given intance type.
 *
 * @public
 */
export interface StorageType {
  /**
   * The name of the storage type.
   *
   * @public
   */
  StorageTypeName?: string | undefined;

  /**
   * The storage sub-type, such as `gp3` or `io1`.
   *
   * @public
   */
  StorageSubTypeName?: string | undefined;

  /**
   * Limits that are applicable for the given storage type.
   *
   * @public
   */
  StorageTypeLimits?: StorageTypeLimit[] | undefined;
}

/**
 * Limits for a given instance type and for each of its roles.
 *
 * @public
 */
export interface Limits {
  /**
   * Storage-related attributes that are available for a given instance type.
   *
   * @public
   */
  StorageTypes?: StorageType[] | undefined;

  /**
   * The limits for a given instance type.
   *
   * @public
   */
  InstanceLimits?: InstanceLimits | undefined;

  /**
   * List of additional limits that are specific to a given instance type for each of its instance roles.
   *
   * @public
   */
  AdditionalLimits?: AdditionalLimit[] | undefined;
}

/**
 * Container for the parameters received from the `DescribeInstanceTypeLimits` operation.
 *
 * @public
 */
export interface DescribeInstanceTypeLimitsResponse {
  /**
   * Map that contains all applicable instance type limits.`data` refers to data nodes.`master` refers to dedicated master nodes.
   *
   * @public
   */
  LimitsByRole?: Record<string, Limits> | undefined;
}

/**
 * Container for the parameters to the `DescribeOutboundConnections` operation.
 *
 * @public
 */
export interface DescribeOutboundConnectionsRequest {
  /**
   * List of filter names and values that you can use for requests.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `DescribeOutboundConnections` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `DescribeOutboundConnections` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains a list of connections matching the filter criteria.
 *
 * @public
 */
export interface DescribeOutboundConnectionsResponse {
  /**
   * List of outbound connections that match the filter criteria.
   *
   * @public
   */
  Connections?: OutboundConnection[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter to apply to the `DescribePackage` response.
 *
 * @public
 */
export interface DescribePackagesFilter {
  /**
   * Any field from `PackageDetails`.
   *
   * @public
   */
  Name?: DescribePackagesFilterName | undefined;

  /**
   * A non-empty list of values for the specified filter field.
   *
   * @public
   */
  Value?: string[] | undefined;
}

/**
 * Container for the request parameters to the `DescribePackage` operation.
 *
 * @public
 */
export interface DescribePackagesRequest {
  /**
   * Only returns packages that match the `DescribePackagesFilterList` values.
   *
   * @public
   */
  Filters?: DescribePackagesFilter[] | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `DescribePackageFilters` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `DescribePackageFilters` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the response returned by the `DescribePackages` operation.
 *
 * @public
 */
export interface DescribePackagesResponse {
  /**
   * Basic information about a package.
   *
   * @public
   */
  PackageDetailsList?: PackageDetails[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the request parameters to a `DescribeReservedInstanceOfferings` operation.
 *
 * @public
 */
export interface DescribeReservedInstanceOfferingsRequest {
  /**
   * The Reserved Instance identifier filter value. Use this parameter to show only the available instance types that match the specified reservation identifier.
   *
   * @public
   */
  ReservedInstanceOfferingId?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `DescribeReservedInstanceOfferings` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `DescribeReservedInstanceOfferings` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the specific price and frequency of a recurring charges for an OpenSearch Reserved Instance, or for a Reserved Instance offering.
 *
 * @public
 */
export interface RecurringCharge {
  /**
   * The monetary amount of the recurring charge.
   *
   * @public
   */
  RecurringChargeAmount?: number | undefined;

  /**
   * The frequency of the recurring charge.
   *
   * @public
   */
  RecurringChargeFrequency?: string | undefined;
}

/**
 * Details of an OpenSearch Reserved Instance offering.
 *
 * @public
 */
export interface ReservedInstanceOffering {
  /**
   * The unique identifier of the Reserved Instance offering.
   *
   * @public
   */
  ReservedInstanceOfferingId?: string | undefined;

  /**
   * The OpenSearch instance type offered by the Reserved Instance offering.
   *
   * @public
   */
  InstanceType?: OpenSearchPartitionInstanceType | undefined;

  /**
   * The duration, in seconds, for which the offering will reserve the OpenSearch instance.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The upfront fixed charge you will pay to purchase the specific Reserved Instance offering.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The hourly rate at which you're charged for the domain using this Reserved Instance.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The currency code for the Reserved Instance offering.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * Payment option for the Reserved Instance offering
   *
   * @public
   */
  PaymentOption?: ReservedInstancePaymentOption | undefined;

  /**
   * The recurring charge to your account, regardless of whether you creates any domains using the offering.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * Container for results of a `DescribeReservedInstanceOfferings` request.
 *
 * @public
 */
export interface DescribeReservedInstanceOfferingsResponse {
  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of Reserved Instance offerings.
   *
   * @public
   */
  ReservedInstanceOfferings?: ReservedInstanceOffering[] | undefined;
}

/**
 * Container for the request parameters to the `DescribeReservedInstances` operation.
 *
 * @public
 */
export interface DescribeReservedInstancesRequest {
  /**
   * The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved OpenSearch instance ID.
   *
   * @public
   */
  ReservedInstanceId?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `DescribeReservedInstances` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `DescribeReservedInstances` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details of an OpenSearch Reserved Instance.
 *
 * @public
 */
export interface ReservedInstance {
  /**
   * The customer-specified identifier to track this reservation.
   *
   * @public
   */
  ReservationName?: string | undefined;

  /**
   * The unique identifier for the reservation.
   *
   * @public
   */
  ReservedInstanceId?: string | undefined;

  /**
   * The unique identifier of the billing subscription.
   *
   * @public
   */
  BillingSubscriptionId?: number | undefined;

  /**
   * The unique identifier of the Reserved Instance offering.
   *
   * @public
   */
  ReservedInstanceOfferingId?: string | undefined;

  /**
   * The OpenSearch instance type offered by theReserved Instance offering.
   *
   * @public
   */
  InstanceType?: OpenSearchPartitionInstanceType | undefined;

  /**
   * The date and time when the reservation was purchased.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The duration, in seconds, for which the OpenSearch instance is reserved.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The upfront fixed charge you will paid to purchase the specific Reserved Instance offering.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The hourly rate at which you're charged for the domain using this Reserved Instance.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The currency code for the offering.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The number of OpenSearch instances that have been reserved.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The state of the Reserved Instance.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The payment option as defined in the Reserved Instance offering.
   *
   * @public
   */
  PaymentOption?: ReservedInstancePaymentOption | undefined;

  /**
   * The recurring charge to your account, regardless of whether you create any domains using the Reserved Instance offering.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * Container for results from `DescribeReservedInstances`
 *
 * @public
 */
export interface DescribeReservedInstancesResponse {
  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of Reserved Instances in the current Region.
   *
   * @public
   */
  ReservedInstances?: ReservedInstance[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointsRequest {
  /**
   * The unique identifiers of the endpoints to get information about.
   *
   * @public
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * Error information when attempting to describe an Amazon OpenSearch Service-managed VPC endpoint.
 *
 * @public
 */
export interface VpcEndpointError {
  /**
   * The unique identifier of the endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The code associated with the error.
   *
   * @public
   */
  ErrorCode?: VpcEndpointErrorCode | undefined;

  /**
   * A message describing the error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointsResponse {
  /**
   * Information about each requested VPC endpoint.
   *
   * @public
   */
  VpcEndpoints: VpcEndpoint[] | undefined;

  /**
   * Any errors associated with the request.
   *
   * @public
   */
  VpcEndpointErrors: VpcEndpointError[] | undefined;
}

/**
 * @public
 */
export interface DetachDataSourceRequest {
  /**
   * The unique identifier or name of the OpenSearch application to detach the data source from.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  dataSourceArn: string | undefined;
}

/**
 * @public
 */
export interface DetachDataSourceResponse {
  /**
   * The unique identifier of the OpenSearch application.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  dataSourceArn?: string | undefined;
}

/**
 * Container for the request parameters to the `DissociatePackage` operation.
 *
 * @public
 */
export interface DissociatePackageRequest {
  /**
   * Internal ID of the package to dissociate from the domain. Use `ListPackagesForDomain` to find this value.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * Name of the domain to dissociate the package from.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Container for the response returned by an `DissociatePackage` operation.
 *
 * @public
 */
export interface DissociatePackageResponse {
  /**
   * Information about a package that has been dissociated from the domain.
   *
   * @public
   */
  DomainPackageDetails?: DomainPackageDetails | undefined;
}

/**
 * @public
 */
export interface DissociatePackagesRequest {
  /**
   * A list of package IDs to be dissociated from a domain.
   *
   * @public
   */
  PackageList: string[] | undefined;

  /**
   * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DissociatePackagesResponse {
  /**
   * A list of package details for the packages that were dissociated from the domain.
   *
   * @public
   */
  DomainPackageDetailsList?: DomainPackageDetails[] | undefined;
}

/**
 * @public
 */
export interface FailoverReplicationRequest {
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

  /**
   * Acknowledges that writes which had not yet replicated are lost. You must set this to `true`; the request is rejected otherwise.
   *
   * @public
   */
  AllowDataLoss: boolean | undefined;
}

/**
 * @public
 */
export interface FailoverReplicationResponse {
  /**
   * The Amazon Resource Name (ARN) of the domain being promoted.
   *
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * The state of the replication relationship. This is `FAILING_OVER` while the promotion is in progress.
   *
   * @public
   */
  Status?: ReplicationStatus | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * The unique identifier of the OpenSearch application to retrieve.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * The unique identifier of the OpenSearch application.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the OpenSearch application.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The endpoint URL of the OpenSearch application.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The current status of the OpenSearch application. Possible values: `CREATING`, `UPDATING`, `DELETING`, `FAILED`, `ACTIVE`, and `DELETED`.
   *
   * @public
   */
  status?: ApplicationStatus | undefined;

  /**
   * The IAM Identity Center settings configured for the OpenSearch application.
   *
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterOptions | undefined;

  /**
   * The data sources associated with the OpenSearch application.
   *
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * The configuration settings of the OpenSearch application.
   *
   * @public
   */
  appConfigs?: AppConfig[] | undefined;

  /**
   * The timestamp when the OpenSearch application was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of the last update to the OpenSearch application.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the application's data at rest.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Container for the parameters to the `GetCapability` operation.
 *
 * @public
 */
export interface GetCapabilityRequest {
  /**
   * The unique identifier of the OpenSearch UI application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The name of the capability to retrieve information about.
   *
   * @public
   */
  capabilityName: string | undefined;
}

/**
 * The extended configuration returned for a registered capability, including additional details beyond the base configuration.
 *
 * @public
 */
export type CapabilityExtendedResponseConfig =
  | CapabilityExtendedResponseConfig.AiConfigMember
  | CapabilityExtendedResponseConfig.$UnknownMember;

/**
 * @public
 */
export namespace CapabilityExtendedResponseConfig {
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
 * Information about a capability failure.
 *
 * @public
 */
export interface CapabilityFailure {
  /**
   * The reason for the capability failure. Possible values: `KMS_KEY_INSUFFICIENT_PERMISSION`.
   *
   * @public
   */
  reason?: CapabilityFailureReason | undefined;

  /**
   * Additional details about the capability failure.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * The result of a `GetCapability` request. Contains details about the capability.
 *
 * @public
 */
export interface GetCapabilityResponse {
  /**
   * The name of the capability.
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
   * The configuration settings for the capability, including capability-specific settings such as AI configuration.
   *
   * @public
   */
  capabilityConfig?: CapabilityExtendedResponseConfig | undefined;

  /**
   * A list of failures associated with the capability, if any. Each failure includes a reason and details about what went wrong.
   *
   * @public
   */
  failures?: CapabilityFailure[] | undefined;
}

/**
 * Container for the request parameters to `GetCompatibleVersions` operation.
 *
 * @public
 */
export interface GetCompatibleVersionsRequest {
  /**
   * The name of an existing domain. Provide this parameter to limit the results to a single domain.
   *
   * @public
   */
  DomainName?: string | undefined;
}

/**
 * A map of OpenSearch or Elasticsearch versions and the versions you can upgrade them to.
 *
 * @public
 */
export interface CompatibleVersionsMap {
  /**
   * The current version that the OpenSearch Service domain is running.
   *
   * @public
   */
  SourceVersion?: string | undefined;

  /**
   * The possible versions that you can upgrade the domain to.
   *
   * @public
   */
  TargetVersions?: string[] | undefined;
}

/**
 * Container for the response returned by the `GetCompatibleVersions` operation.
 *
 * @public
 */
export interface GetCompatibleVersionsResponse {
  /**
   * A map of OpenSearch or Elasticsearch versions and the versions you can upgrade them to.
   *
   * @public
   */
  CompatibleVersions?: CompatibleVersionsMap[] | undefined;
}

/**
 * Container for the parameters to the `GetDataSource` operation.
 *
 * @public
 */
export interface GetDataSourceRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the data source to get information about.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The result of a `GetDataSource` operation.
 *
 * @public
 */
export interface GetDataSourceResponse {
  /**
   * The type of data source.
   *
   * @public
   */
  DataSourceType?: DataSourceType | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the data source.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the data source.
   *
   * @public
   */
  Status?: DataSourceStatus | undefined;
}

/**
 * @public
 */
export interface GetDefaultApplicationSettingRequest {}

/**
 * @public
 */
export interface GetDefaultApplicationSettingResponse {
  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  applicationArn?: string | undefined;
}

/**
 * @public
 */
export interface GetDirectQueryDataSourceRequest {
  /**
   * A unique, user-defined label that identifies the data source within your OpenSearch Service environment.
   *
   * @public
   */
  DataSourceName: string | undefined;
}

/**
 * @public
 */
export interface GetDirectQueryDataSourceResponse {
  /**
   * A unique, user-defined label to identify the data source within your OpenSearch Service environment.
   *
   * @public
   */
  DataSourceName?: string | undefined;

  /**
   * The supported Amazon Web Services service that is used as the source for direct queries in OpenSearch Service.
   *
   * @public
   */
  DataSourceType?: DirectQueryDataSourceType | undefined;

  /**
   * A description that provides additional context and details about the data source.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of Amazon Resource Names (ARNs) for the OpenSearch collections that are associated with the direct query data source.
   *
   * @public
   */
  OpenSearchArns?: string[] | undefined;

  /**
   * The IAM access policy document that defines the permissions for accessing the direct query data source. Returns the current policy configuration in JSON format, or null if no custom policy is configured.
   *
   * @public
   */
  DataSourceAccessPolicy?: string | undefined;

  /**
   * The unique, system-generated identifier that represents the data source.
   *
   * @public
   */
  DataSourceArn?: string | undefined;
}

/**
 * Container for the parameters to the `GetDomainMaintenanceStatus` operation.
 *
 * @public
 */
export interface GetDomainMaintenanceStatusRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The request ID of the maintenance action.
   *
   * @public
   */
  MaintenanceId: string | undefined;
}

/**
 * The result of a `GetDomainMaintenanceStatus` request that information about the requested action.
 *
 * @public
 */
export interface GetDomainMaintenanceStatusResponse {
  /**
   * The status of the maintenance action.
   *
   * @public
   */
  Status?: MaintenanceStatus | undefined;

  /**
   * The status message of the maintenance action.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The node ID of the maintenance action.
   *
   * @public
   */
  NodeId?: string | undefined;

  /**
   * The action name.
   *
   * @public
   */
  Action?: MaintenanceType | undefined;

  /**
   * The time at which the action was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the action was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetIndexRequest {
  /**
   * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the index to retrieve information about.
   *
   * @public
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface GetIndexResponse {
  /**
   * The JSON schema of the index including mappings, settings, and semantic enrichment configuration.
   *
   * @public
   */
  IndexSchema: __DocumentType | undefined;
}

/**
 * @public
 */
export interface GetMigrationRequest {
  /**
   * The unique identifier of the migration job to retrieve.
   *
   * @public
   */
  migrationId: string | undefined;
}

/**
 * Contains error details for a migration that failed or completed with errors.
 *
 * @public
 */
export interface MigrationError {
  /**
   * The error code identifying the type of failure.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * A human-readable description of the error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The source configuration for a migration, specifying the data source from which to export saved objects.
 *
 * @public
 */
export interface MigrationSource {
  /**
   * The Amazon Resource Name (ARN) of the data source to migrate saved objects from.
   *
   * @public
   */
  datasourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetMigrationResponse {
  /**
   * The unique identifier of the migration job.
   *
   * @public
   */
  migrationId?: string | undefined;

  /**
   * The current status of the migration job. Valid values are `PENDING`, `IN_PROGRESS`, `SUCCEEDED`, and `FAILED`.
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
   * The source configuration for the migration, including the data source ARN.
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
 * Container for the request parameters to the `GetPackageVersionHistory` operation.
 *
 * @public
 */
export interface GetPackageVersionHistoryRequest {
  /**
   * The unique identifier of the package.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `GetPackageVersionHistory` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `GetPackageVersionHistory` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details about a package version.
 *
 * @public
 */
export interface PackageVersionHistory {
  /**
   * The package version.
   *
   * @public
   */
  PackageVersion?: string | undefined;

  /**
   * A message associated with the package version when it was uploaded.
   *
   * @public
   */
  CommitMessage?: string | undefined;

  /**
   * The date and time when the package was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Additional information about plugin properties if the package is a `ZIP-PLUGIN` package.
   *
   * @public
   */
  PluginProperties?: PluginProperties | undefined;

  /**
   * The configuration details for a specific version of a package.
   *
   * @public
   */
  PackageConfiguration?: PackageConfiguration | undefined;
}

/**
 * Container for response returned by `GetPackageVersionHistory` operation.
 *
 * @public
 */
export interface GetPackageVersionHistoryResponse {
  /**
   * The unique identifier of the package.
   *
   * @public
   */
  PackageID?: string | undefined;

  /**
   * A list of package versions, along with their creation time and commit message.
   *
   * @public
   */
  PackageVersionHistoryList?: PackageVersionHistory[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the request parameters to the `GetUpgradeHistory` operation.
 *
 * @public
 */
export interface GetUpgradeHistoryRequest {
  /**
   * The name of an existing domain.
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
   * If your initial `GetUpgradeHistory` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `GetUpgradeHistory` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a single step of an upgrade or upgrade eligibility check workflow.
 *
 * @public
 */
export interface UpgradeStepItem {
  /**
   * One of three steps that an upgrade or upgrade eligibility check goes through:
   *
   * - PreUpgradeCheck
   * - Snapshot
   * - Upgrade
   *
   * @public
   */
  UpgradeStep?: UpgradeStep | undefined;

  /**
   * The current status of the upgrade. The status can take one of the following values:
   *
   * - In Progress
   * - Succeeded
   * - Succeeded with Issues
   * - Failed
   *
   * @public
   */
  UpgradeStepStatus?: UpgradeStatus | undefined;

  /**
   * A list of strings containing detailed information about the errors encountered in a particular step.
   *
   * @public
   */
  Issues?: string[] | undefined;

  /**
   * The floating point value representing the progress percentage of a particular step.
   *
   * @public
   */
  ProgressPercent?: number | undefined;
}

/**
 * History of the last 10 upgrades and upgrade eligibility checks for an Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface UpgradeHistory {
  /**
   * A string that describes the upgrade.
   *
   * @public
   */
  UpgradeName?: string | undefined;

  /**
   * UTC timestamp at which the upgrade API call was made, in the format `yyyy-MM-ddTHH:mm:ssZ`.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * The current status of the upgrade. The status can take one of the following values:
   *
   * - In Progress
   * - Succeeded
   * - Succeeded with Issues
   * - Failed
   *
   * @public
   */
  UpgradeStatus?: UpgradeStatus | undefined;

  /**
   * A list of each step performed as part of a specific upgrade or upgrade eligibility check.
   *
   * @public
   */
  StepsList?: UpgradeStepItem[] | undefined;
}

/**
 * Container for the response returned by the `GetUpgradeHistory` operation.
 *
 * @public
 */
export interface GetUpgradeHistoryResponse {
  /**
   * A list of objects corresponding to each upgrade or upgrade eligibility check performed on a domain.
   *
   * @public
   */
  UpgradeHistories?: UpgradeHistory[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the request parameters to the `GetUpgradeStatus` operation.
 *
 * @public
 */
export interface GetUpgradeStatusRequest {
  /**
   * The domain of the domain to get upgrade status information for.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Container for the response returned by the `GetUpgradeStatus` operation.
 *
 * @public
 */
export interface GetUpgradeStatusResponse {
  /**
   * One of three steps that an upgrade or upgrade eligibility check goes through.
   *
   * @public
   */
  UpgradeStep?: UpgradeStep | undefined;

  /**
   * The status of the current step that an upgrade is on.
   *
   * @public
   */
  StepStatus?: UpgradeStatus | undefined;

  /**
   * A string that describes the update.
   *
   * @public
   */
  UpgradeName?: string | undefined;
}

/**
 * Specifies the entity for which to submit insight feedback. An entity represents an Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface InsightFeedbackEntity {
  /**
   * The type of the entity. Possible values are `DomainName`.
   *
   * @public
   */
  Type: InsightFeedbackEntityType | undefined;

  /**
   * The value of the entity, such as a domain name.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Container for the parameters to the `InsightFeedback` operation.
 *
 * @public
 */
export interface InsightFeedbackRequest {
  /**
   * The entity for which to submit insight feedback. Specifies the type and value of the entity, such as a domain name.
   *
   * @public
   */
  Entity: InsightFeedbackEntity | undefined;

  /**
   * The unique identifier of the insight for which to submit feedback.
   *
   * @public
   */
  InsightId: string | undefined;

  /**
   * The thumbs up or thumbs down feedback for the insight. Possible values are `Up` and `Down`.
   *
   * @public
   */
  Thumbs: InsightFeedbackThumbs | undefined;

  /**
   * Optional text feedback providing additional details about the insight. Maximum length is 1000 characters.
   *
   * @public
   */
  FeedbackText?: string | undefined;
}

/**
 * The result of an `InsightFeedback` request. Contains the status of the feedback submission.
 *
 * @public
 */
export interface InsightFeedbackResponse {
  /**
   * The status of the feedback submission. Possible values are `SUCCESS` and `ERROR`.
   *
   * @public
   */
  Status?: InsightResponseStatus | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters the list of OpenSearch applications by status. Possible values: `CREATING`, `UPDATING`, `DELETING`, `FAILED`, `ACTIVE`, and `DELETED`.
   *
   * @public
   */
  statuses?: ApplicationStatus[] | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return for a given request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Basic details of an OpenSearch application.
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * The unique identifier of an OpenSearch application.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of an OpenSearch application.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The endpoint URL of an OpenSearch application.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The current status of an OpenSearch application. Possible values: `CREATING`, `UPDATING`, `DELETING`, `FAILED`, `ACTIVE`, and `DELETED`.
   *
   * @public
   */
  status?: ApplicationStatus | undefined;

  /**
   * The timestamp when an OpenSearch application was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of the last update to an OpenSearch application.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * Summarizes OpenSearch applications, including ID, ARN, name, endpoint, status, creation time, and last update time.
   *
   * @public
   */
  ApplicationSummaries?: ApplicationSummary[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataSourceAttachmentsRequest {
  /**
   * The unique identifier or name of the OpenSearch application to list attachments for.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The pagination token from a previous call to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default is 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a data source attachment, including its identifier, data source ARN, and current status.
 *
 * @public
 */
export interface DataSourceAttachmentSummary {
  /**
   * The unique identifier assigned to the data source attachment.
   *
   * @public
   */
  attachmentId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using Amazon Web Services Identity and Access Management* for more information.
   *
   * @public
   */
  dataSourceArn?: string | undefined;

  /**
   * The current status of the data source attachment. Valid values are `PENDING`, `ATTACHED`, and `FAILED`.
   *
   * @public
   */
  status?: DataSourceAttachmentStatus | undefined;
}

/**
 * @public
 */
export interface ListDataSourceAttachmentsResponse {
  /**
   * A list of data source attachment summaries for the specified application.
   *
   * @public
   */
  attachments?: DataSourceAttachmentSummary[] | undefined;

  /**
   * The pagination token to use in a subsequent call to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Container for the parameters to the `ListDataSources` operation.
 *
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Details about a direct-query data source.
 *
 * @public
 */
export interface DataSourceDetails {
  /**
   * The type of data source.
   *
   * @public
   */
  DataSourceType?: DataSourceType | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the data source.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the data source.
   *
   * @public
   */
  Status?: DataSourceStatus | undefined;
}

/**
 * The result of a `ListDataSources` operation.
 *
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * A list of data sources associated with specified domain.
   *
   * @public
   */
  DataSources?: DataSourceDetails[] | undefined;
}

/**
 * @public
 */
export interface ListDirectQueryDataSourcesRequest {
  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The configuration details for a data source that can be directly queried.
 *
 * @public
 */
export interface DirectQueryDataSource {
  /**
   * A unique, user-defined label to identify the data source within your OpenSearch Service environment.
   *
   * @public
   */
  DataSourceName?: string | undefined;

  /**
   * The supported Amazon Web Services service that is used as the source for direct queries in OpenSearch Service.
   *
   * @public
   */
  DataSourceType?: DirectQueryDataSourceType | undefined;

  /**
   * A description that provides additional context and details about the data source.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of Amazon Resource Names (ARNs) for the OpenSearch collections that are associated with the direct query data source.
   *
   * @public
   */
  OpenSearchArns?: string[] | undefined;

  /**
   * The unique, system-generated identifier that represents the data source.
   *
   * @public
   */
  DataSourceArn?: string | undefined;

  /**
   * A list of tags attached to a direct query data source.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListDirectQueryDataSourcesResponse {
  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of the direct query data sources that are returned by the `ListDirectQueryDataSources` API operation.
   *
   * @public
   */
  DirectQueryDataSources?: DirectQueryDataSource[] | undefined;
}

/**
 * Container for the parameters to the `ListDomainMaintenances` operation.
 *
 * @public
 */
export interface ListDomainMaintenancesRequest {
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
  Action?: MaintenanceType | undefined;

  /**
   * The status of the action.
   *
   * @public
   */
  Status?: MaintenanceStatus | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `ListDomainMaintenances` operation returns a `nextToken`, include the returned `nextToken` in subsequent `ListDomainMaintenances` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the domain maintenance details.
 *
 * @public
 */
export interface DomainMaintenanceDetails {
  /**
   * The ID of the requested action.
   *
   * @public
   */
  MaintenanceId?: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The name of the action.
   *
   * @public
   */
  Action?: MaintenanceType | undefined;

  /**
   * The ID of the data node.
   *
   * @public
   */
  NodeId?: string | undefined;

  /**
   * The status of the action.
   *
   * @public
   */
  Status?: MaintenanceStatus | undefined;

  /**
   * The status message for the action.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The time at which the action was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the action was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * The result of a `ListDomainMaintenances` request that contains information about the requested actions.
 *
 * @public
 */
export interface ListDomainMaintenancesResponse {
  /**
   * A list of the submitted maintenance actions.
   *
   * @public
   */
  DomainMaintenances?: DomainMaintenanceDetails[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the parameters to the `ListDomainNames` operation.
 *
 * @public
 */
export interface ListDomainNamesRequest {
  /**
   * Filters the output by domain engine type.
   *
   * @public
   */
  EngineType?: EngineType | undefined;
}

/**
 * Information about an OpenSearch Service domain.
 *
 * @public
 */
export interface DomainInfo {
  /**
   * Name of the domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The type of search engine that the domain is running.`OpenSearch` for an OpenSearch engine, or `Elasticsearch` for a legacy Elasticsearch OSS engine.
   *
   * @public
   */
  EngineType?: EngineType | undefined;
}

/**
 * The results of a `ListDomainNames` operation. Contains the names of all domains owned by this account and their respective engine types.
 *
 * @public
 */
export interface ListDomainNamesResponse {
  /**
   * The names of all OpenSearch Service domains owned by the current user and their respective engine types.
   *
   * @public
   */
  DomainNames?: DomainInfo[] | undefined;
}

/**
 * Container for the request parameters to the `ListDomainsForPackage` operation.
 *
 * @public
 */
export interface ListDomainsForPackageRequest {
  /**
   * The unique identifier of the package for which to list associated domains.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `ListDomainsForPackage` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListDomainsForPackage` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the response parameters to the `ListDomainsForPackage` operation.
 *
 * @public
 */
export interface ListDomainsForPackageResponse {
  /**
   * Information about all domains associated with a package.
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
 * Specifies the time range for filtering insights.
 *
 * @public
 */
export interface InsightTimeRange {
  /**
   * The start of the time range, in epoch milliseconds.
   *
   * @public
   */
  From: number | undefined;

  /**
   * The end of the time range, in epoch milliseconds.
   *
   * @public
   */
  To: number | undefined;
}

/**
 * Container for the parameters to the `ListInsights` operation.
 *
 * @public
 */
export interface ListInsightsRequest {
  /**
   * The entity for which to list insights. Specifies the type and value of the entity, such as a domain name or Amazon Web Services account ID.
   *
   * @public
   */
  Entity: InsightEntity | undefined;

  /**
   * The time range for filtering insights, specified as epoch millisecond timestamps.
   *
   * @public
   */
  TimeRange?: InsightTimeRange | undefined;

  /**
   * The sort order for the results. Possible values are `ASC` (ascending) and `DESC` (descending).
   *
   * @public
   */
  SortOrder?: InsightSortOrder | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `NextToken` to get the next page of results. Valid values are 1 to 500.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `ListInsights` operation returns a `NextToken`, include the returned `NextToken` in subsequent `ListInsights` operations to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents an insight returned by the `ListInsights` operation. An insight is a notification about a domain event or recommendation that helps you optimize your Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface Insight {
  /**
   * The unique identifier of the insight.
   *
   * @public
   */
  InsightId?: string | undefined;

  /**
   * The display name of the insight.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The type of the insight. Possible values are `EVENT` and `RECOMMENDATION`.
   *
   * @public
   */
  Type?: InsightType | undefined;

  /**
   * The priority level of the insight. Possible values are `CRITICAL`, `HIGH`, `MEDIUM`, and `LOW`.
   *
   * @public
   */
  Priority?: InsightPriorityLevel | undefined;

  /**
   * The current status of the insight. Possible values are `ACTIVE`, `RESOLVED`, and `DISMISSED`.
   *
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * The timestamp when the insight was created, in epoch milliseconds.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The timestamp when the insight was last updated, in epoch milliseconds.
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * Indicates whether the insight is experimental.
   *
   * @public
   */
  IsExperimental?: boolean | undefined;
}

/**
 * The result of a `ListInsights` request. Contains the list of insights and a pagination token for retrieving the next page of results.
 *
 * @public
 */
export interface ListInsightsResponse {
  /**
   * The list of insights returned for the specified entity.
   *
   * @public
   */
  Insights?: Insight[] | undefined;

  /**
   * When `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceTypeDetailsRequest {
  /**
   * The version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y. Defaults to the latest version of OpenSearch.
   *
   * @public
   */
  EngineVersion: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `ListInstanceTypeDetails` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListInstanceTypeDetails` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional parameter that specifies the Availability Zones for the domain.
   *
   * @public
   */
  RetrieveAZs?: boolean | undefined;

  /**
   * An optional parameter that lists information for a given instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;
}

/**
 * Lists all instance types and available features for a given OpenSearch or Elasticsearch version.
 *
 * @public
 */
export interface InstanceTypeDetails {
  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: OpenSearchPartitionInstanceType | undefined;

  /**
   * Whether encryption at rest and node-to-node encryption are supported for the instance type.
   *
   * @public
   */
  EncryptionEnabled?: boolean | undefined;

  /**
   * Whether Amazon Cognito access is supported for the instance type.
   *
   * @public
   */
  CognitoEnabled?: boolean | undefined;

  /**
   * Whether logging is supported for the instance type.
   *
   * @public
   */
  AppLogsEnabled?: boolean | undefined;

  /**
   * Whether fine-grained access control is supported for the instance type.
   *
   * @public
   */
  AdvancedSecurityEnabled?: boolean | undefined;

  /**
   * Whether UltraWarm is supported for the instance type.
   *
   * @public
   */
  WarmEnabled?: boolean | undefined;

  /**
   * Whether the instance acts as a data node, a dedicated master node, or an UltraWarm node.
   *
   * @public
   */
  InstanceRole?: string[] | undefined;

  /**
   * The supported Availability Zones for the instance type.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;
}
