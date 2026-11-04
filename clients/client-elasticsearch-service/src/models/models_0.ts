// smithy-typescript generated code
import type {
  AutoTuneDesiredState,
  AutoTuneState,
  AutoTuneType,
  ConfigChangeStatus,
  DeploymentStatus,
  DeploymentStrategy,
  DescribePackagesFilterName,
  DomainEngineMode,
  DomainPackageStatus,
  DomainProcessingStatusType,
  DomainUseCase,
  EngineType,
  ESPartitionInstanceType,
  ESWarmPartitionInstanceType,
  InboundCrossClusterSearchConnectionStatusCode,
  InitiatedBy,
  LogType,
  OptionState,
  OutboundCrossClusterSearchConnectionStatusCode,
  OverallChangeStatus,
  PackageStatus,
  PackageType,
  PauseState,
  PrincipalType,
  PropertyValueType,
  ReservedElasticsearchInstancePaymentOption,
  RollbackOnDisable,
  ScheduledAutoTuneActionType,
  ScheduledAutoTuneSeverityType,
  TimeUnit,
  TLSSecurityPolicy,
  UpgradeStatus,
  UpgradeStep,
  VolumeType,
  VpcEndpointErrorCode,
  VpcEndpointStatus,
} from "./enums";

/**
 * Container for the parameters to the `AcceptInboundCrossClusterSearchConnection` operation.
 *
 * @public
 */
export interface AcceptInboundCrossClusterSearchConnectionRequest {
  /**
   * The id of the inbound connection that you want to accept.
   *
   * @public
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * Specifies the coonection status of an inbound cross-cluster search connection.
 *
 * @public
 */
export interface InboundCrossClusterSearchConnectionStatus {
  /**
   * The state code for inbound connection. This can be one of the following:
   *
   * - PENDING_ACCEPTANCE: Inbound connection is not yet accepted by destination domain owner.
   * - APPROVED: Inbound connection is pending acceptance by destination domain owner.
   * - REJECTING: Inbound connection rejection is in process.
   * - REJECTED: Inbound connection is rejected.
   * - DELETING: Inbound connection deletion is in progress.
   * - DELETED: Inbound connection is deleted and cannot be used further.
   *
   * @public
   */
  StatusCode?: InboundCrossClusterSearchConnectionStatusCode | undefined;

  /**
   * Specifies verbose information for the inbound connection status.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DomainInformation {
  OwnerId?: string | undefined;
  /**
   * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  Region?: string | undefined;
}

/**
 * Specifies details of an inbound connection.
 *
 * @public
 */
export interface InboundCrossClusterSearchConnection {
  /**
   * Specifies the `DomainInformation` for the source Elasticsearch domain.
   *
   * @public
   */
  SourceDomainInfo?: DomainInformation | undefined;

  /**
   * Specifies the `DomainInformation` for the destination Elasticsearch domain.
   *
   * @public
   */
  DestinationDomainInfo?: DomainInformation | undefined;

  /**
   * Specifies the connection id for the inbound cross-cluster search connection.
   *
   * @public
   */
  CrossClusterSearchConnectionId?: string | undefined;

  /**
   * Specifies the `InboundCrossClusterSearchConnectionStatus` for the outbound connection.
   *
   * @public
   */
  ConnectionStatus?: InboundCrossClusterSearchConnectionStatus | undefined;
}

/**
 * The result of a `AcceptInboundCrossClusterSearchConnection` operation. Contains details of accepted inbound connection.
 *
 * @public
 */
export interface AcceptInboundCrossClusterSearchConnectionResponse {
  /**
   * Specifies the `InboundCrossClusterSearchConnection` of accepted inbound connection.
   *
   * @public
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection | undefined;
}

/**
 * Provides the current status of the entity.
 *
 * @public
 */
export interface OptionStatus {
  /**
   * Timestamp which tells the creation date for the entity.
   *
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * Timestamp which tells the last updated time for the entity.
   *
   * @public
   */
  UpdateDate: Date | undefined;

  /**
   * Specifies the latest version for the entity.
   *
   * @public
   */
  UpdateVersion?: number | undefined;

  /**
   * Provides the `OptionState` for the Elasticsearch domain.
   *
   * @public
   */
  State: OptionState | undefined;

  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   *
   * @public
   */
  PendingDeletion?: boolean | undefined;
}

/**
 * The configured access rules for the domain's document and search endpoints, and the current status of those rules.
 *
 * @public
 */
export interface AccessPoliciesStatus {
  /**
   * The access policy configured for the Elasticsearch domain. Access policies may be resource-based, IP-based, or IAM-based. See [Configuring Access Policies](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies)for more information.
   *
   * @public
   */
  Options: string | undefined;

  /**
   * The status of the access policy for the Elasticsearch domain. See `OptionStatus` for the status information that's included.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * List of limits that are specific to a given InstanceType and for each of it's `InstanceRole` .
 *
 * @public
 */
export interface AdditionalLimit {
  /**
   * Name of Additional Limit is specific to a given InstanceType and for each of it's `InstanceRole` etc.
   *
   * Attributes and their details:
   *
   * - MaximumNumberOfDataNodesSupported This attribute will be present in Master node only to specify how much data nodes upto which given `ESPartitionInstanceType` can support as master node.
   * - MaximumNumberOfDataNodesWithoutMasterNode This attribute will be present in Data node only to specify how much data nodes of given `ESPartitionInstanceType` upto which you don't need any master nodes to govern them.
   *
   * @public
   */
  LimitName?: string | undefined;

  /**
   * Value for given `AdditionalLimit$LimitName` .
   *
   * @public
   */
  LimitValues?: string[] | undefined;
}

/**
 * Specifies a key value pair for a resource tag.
 *
 * @public
 */
export interface Tag {
  /**
   * Specifies the `TagKey`, the name of the tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Specifies the `TagValue`, the value assigned to the corresponding tag key. Tag values can be null and do not have to be unique in a tag set. For example, you can have a key value pair in a tag set of `project : Trinity` and `cost-center : Trinity`
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Container for the parameters to the `AddTags` operation. Specify the tags that you want to attach to the Elasticsearch domain.
 *
 * @public
 */
export interface AddTagsRequest {
  /**
   * Specify the `ARN` for which you want to add the tags.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * List of `Tag` that need to be added for the Elasticsearch domain.
   *
   * @public
   */
  TagList: Tag[] | undefined;
}

/**
 * Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:
 *
 * - Option to allow references to indices in an HTTP request body. Must be `false` when configuring access to individual sub-resources. By default, the value is `true`. See [Configuration Advanced Options](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options) for more information.
 * - Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.
 *
 * For more information, see [Configuring Advanced Options](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options).
 *
 * @public
 */
export interface AdvancedOptionsStatus {
  /**
   * Specifies the status of advanced options for the specified Elasticsearch domain.
   *
   * @public
   */
  Options: Record<string, string> | undefined;

  /**
   * Specifies the status of `OptionStatus` for advanced options for the specified Elasticsearch domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Specifies the SAML Identity Provider's information.
 *
 * @public
 */
export interface SAMLIdp {
  /**
   * The Metadata of the SAML application in xml format.
   *
   * @public
   */
  MetadataContent: string | undefined;

  /**
   * The unique Entity ID of the application in SAML Identity Provider.
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
   * Describes the SAML Identity Provider's information.
   *
   * @public
   */
  Idp?: SAMLIdp | undefined;

  /**
   * The key used for matching the SAML Subject attribute.
   *
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * The key used for matching the SAML Roles attribute.
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
 * Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled.
 *
 * @public
 */
export interface AdvancedSecurityOptions {
  /**
   * True if advanced security is enabled.
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
   * Describes the SAML application configured for a domain.
   *
   * @public
   */
  SAMLOptions?: SAMLOptionsOutput | undefined;

  /**
   * Specifies the Anonymous Auth Disable Date when Anonymous Auth is enabled.
   *
   * @public
   */
  AnonymousAuthDisableDate?: Date | undefined;

  /**
   * True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.
   *
   * @public
   */
  AnonymousAuthEnabled?: boolean | undefined;
}

/**
 * Credentials for the master user: username and password, ARN, or both.
 *
 * @public
 */
export interface MasterUserOptions {
  /**
   * ARN for the master user (if IAM is enabled).
   *
   * @public
   */
  MasterUserARN?: string | undefined;

  /**
   * The master user's username, which is stored in the Amazon Elasticsearch Service domain's internal database.
   *
   * @public
   */
  MasterUserName?: string | undefined;

  /**
   * The master user's password, which is stored in the Amazon Elasticsearch Service domain's internal database.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;
}

/**
 * Specifies the SAML application configuration for the domain.
 *
 * @public
 */
export interface SAMLOptionsInput {
  /**
   * True if SAML is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Specifies the SAML Identity Provider's information.
   *
   * @public
   */
  Idp?: SAMLIdp | undefined;

  /**
   * The SAML master username, which is stored in the Amazon Elasticsearch Service domain's internal database.
   *
   * @public
   */
  MasterUserName?: string | undefined;

  /**
   * The backend role to which the SAML master user is mapped to.
   *
   * @public
   */
  MasterBackendRole?: string | undefined;

  /**
   * The key to use for matching the SAML Subject attribute.
   *
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * The key to use for matching the SAML Roles attribute.
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
 * Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).
 *
 * @public
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * True if advanced security is enabled.
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
   * Credentials for the master user: username and password, ARN, or both.
   *
   * @public
   */
  MasterUserOptions?: MasterUserOptions | undefined;

  /**
   * Specifies the SAML application configuration for the domain.
   *
   * @public
   */
  SAMLOptions?: SAMLOptionsInput | undefined;

  /**
   * True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.
   *
   * @public
   */
  AnonymousAuthEnabled?: boolean | undefined;
}

/**
 * Specifies the status of advanced security options for the specified Elasticsearch domain.
 *
 * @public
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * Specifies advanced security options for the specified Elasticsearch domain.
   *
   * @public
   */
  Options: AdvancedSecurityOptions | undefined;

  /**
   * Status of the advanced security options for the specified Elasticsearch domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Container for request parameters to `AssociatePackage` operation.
 *
 * @public
 */
export interface AssociatePackageRequest {
  /**
   * Internal ID of the package that you want to associate with a domain. Use `DescribePackages` to find this value.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * Name of the domain that you want to associate the package with.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface ErrorDetails {
  ErrorType?: string | undefined;
  ErrorMessage?: string | undefined;
}

/**
 * Information on a package that is associated with a domain.
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
   * User specified name of the package.
   *
   * @public
   */
  PackageName?: string | undefined;

  /**
   * Currently supports only TXT-DICTIONARY.
   *
   * @public
   */
  PackageType?: PackageType | undefined;

  /**
   * Timestamp of the most-recent update to the association status.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * Name of the domain you've associated a package with.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * State of the association. Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.
   *
   * @public
   */
  DomainPackageStatus?: DomainPackageStatus | undefined;

  PackageVersion?: string | undefined;
  /**
   * The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.
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
}

/**
 * Container for response returned by `AssociatePackage` operation.
 *
 * @public
 */
export interface AssociatePackageResponse {
  /**
   * `DomainPackageDetails`
   *
   * @public
   */
  DomainPackageDetails?: DomainPackageDetails | undefined;
}

/**
 * Container for request parameters to the `AuthorizeVpcEndpointAccess` operation. Specifies the account to be permitted to manage VPC endpoints against the domain.
 *
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
   * The account ID to grant access to.
   *
   * @public
   */
  Account: string | undefined;
}

/**
 * Information about an account or service that has access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.
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
   * The IAM principal that is allowed access to the domain.
   *
   * @public
   */
  Principal?: string | undefined;
}

/**
 * Container for response parameters to the `AuthorizeVpcEndpointAccess` operation. Contains the account ID and the type of the account being authorized to access the VPC endpoint.
 *
 * @public
 */
export interface AuthorizeVpcEndpointAccessResponse {
  /**
   * Information about the account or service that was provided access to the domain.
   *
   * @public
   */
  AuthorizedPrincipal: AuthorizedPrincipal | undefined;
}

/**
 * Container for parameters of the `CancelDomainConfigChange` operation.
 *
 * @public
 */
export interface CancelDomainConfigChangeRequest {
  /**
   * Name of the OpenSearch Service domain configuration request to cancel.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * When set to **True**, returns the list of change IDs and properties that will be cancelled without actually cancelling the change.
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
 * Contains the details of the cancelled domain config change.
 *
 * @public
 */
export interface CancelDomainConfigChangeResponse {
  /**
   * Whether or not the request was a dry run. If **True**, the changes were not actually cancelled.
   *
   * @public
   */
  DryRun?: boolean | undefined;

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
}

/**
 * Container for the parameters to the `CancelElasticsearchServiceSoftwareUpdate` operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on.
 *
 * @public
 */
export interface CancelElasticsearchServiceSoftwareUpdateRequest {
  /**
   * The name of the domain that you want to stop the latest service software update on.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The current options of an Elasticsearch domain service software options.
 *
 * @public
 */
export interface ServiceSoftwareOptions {
  /**
   * The current service software version that is present on the domain.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * The new service software version if one is available.
   *
   * @public
   */
  NewVersion?: string | undefined;

  /**
   * `True` if you are able to update you service software version. `False` if you are not able to update your service software version.
   *
   * @public
   */
  UpdateAvailable?: boolean | undefined;

  /**
   * `True` if you are able to cancel your service software version update. `False` if you are not able to cancel your service software version.
   *
   * @public
   */
  Cancellable?: boolean | undefined;

  /**
   * The status of your service software update. This field can take the following values: `ELIGIBLE`, `PENDING_UPDATE`, `IN_PROGRESS`, `COMPLETED`, and `NOT_ELIGIBLE`.
   *
   * @public
   */
  UpdateStatus?: DeploymentStatus | undefined;

  /**
   * The description of the `UpdateStatus`.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.
   *
   * @public
   */
  AutomatedUpdateDate?: Date | undefined;

  /**
   * `True` if a service software is never automatically updated. `False` if a service software is automatically updated after `AutomatedUpdateDate`.
   *
   * @public
   */
  OptionalDeployment?: boolean | undefined;
}

/**
 * The result of a `CancelElasticsearchServiceSoftwareUpdate` operation. Contains the status of the update.
 *
 * @public
 */
export interface CancelElasticsearchServiceSoftwareUpdateResponse {
  /**
   * The current status of the Elasticsearch service software update.
   *
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions | undefined;
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
 * Specifies maintenance schedule duration: duration value and duration unit. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
 *
 * @public
 */
export interface Duration {
  /**
   * Integer to specify the value of a maintenance schedule duration. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * Specifies the unit of a maintenance schedule duration. Valid value is HOURS. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
   *
   * @public
   */
  Unit?: TimeUnit | undefined;
}

/**
 * Specifies Auto-Tune maitenance schedule. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
 *
 * @public
 */
export interface AutoTuneMaintenanceSchedule {
  /**
   * Specifies timestamp at which Auto-Tune maintenance schedule start.
   *
   * @public
   */
  StartAt?: Date | undefined;

  /**
   * Specifies maintenance schedule duration: duration value and duration unit. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
   *
   * @public
   */
  Duration?: Duration | undefined;

  /**
   * Specifies cron expression for a recurring maintenance schedule. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
   *
   * @public
   */
  CronExpressionForRecurrence?: string | undefined;
}

/**
 * Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.
 *
 * @public
 */
export interface AutoTuneOptionsInput {
  /**
   * Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED.
   *
   * @public
   */
  DesiredState?: AutoTuneDesiredState | undefined;

  /**
   * Specifies list of maitenance schedules. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
   *
   * @public
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[] | undefined;
}

/**
 * Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see [Amazon Cognito Authentication for Kibana](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html).
 *
 * @public
 */
export interface CognitoOptions {
  /**
   * Specifies the option to enable Cognito for Kibana authentication.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Specifies the Cognito user pool ID for Kibana authentication.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * Specifies the Cognito identity pool ID for Kibana authentication.
   *
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.
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
 * Options to configure endpoint for the Elasticsearch domain.
 *
 * @public
 */
export interface DomainEndpointOptions {
  /**
   * Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.
   *
   * @public
   */
  EnforceHTTPS?: boolean | undefined;

  /**
   * Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   *
   * It can be one of the following values:
   *
   * - **Policy-Min-TLS-1-0-2019-07:** TLS security policy that supports TLS version 1.0 to TLS version 1.2
   * - **Policy-Min-TLS-1-2-2019-07:** TLS security policy that supports only TLS version 1.2
   * - **Policy-Min-TLS-1-2-PFS-2023-10:** TLS security policy that supports TLS version 1.2 to TLS version 1.3 with perfect forward secrecy cipher suites
   * - **Policy-Min-TLS-1-2-RFC9151-FIPS-2024-08:** TLS security policy that supports TLS version 1.3 with FIPS
   *
   * @public
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | undefined;

  /**
   * Specify if custom endpoint should be enabled for the Elasticsearch domain.
   *
   * @public
   */
  CustomEndpointEnabled?: boolean | undefined;

  /**
   * Specify the fully qualified domain for your custom endpoint.
   *
   * @public
   */
  CustomEndpoint?: string | undefined;

  /**
   * Specify ACM certificate ARN for your custom endpoint.
   *
   * @public
   */
  CustomEndpointCertificateArn?: string | undefined;
}

/**
 * Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see [Configuring EBS-based Storage](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs).
 *
 * @public
 */
export interface EBSOptions {
  /**
   * Specifies whether EBS-based storage is enabled.
   *
   * @public
   */
  EBSEnabled?: boolean | undefined;

  /**
   * Specifies the volume type for EBS-based storage.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * Integer to specify the size of an EBS volume.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * Specifies the IOPS for Provisioned IOPS And GP3 EBS volume (SSD).
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Specifies the Throughput for GP3 EBS volume (SSD).
   *
   * @public
   */
  Throughput?: number | undefined;
}

/**
 * Specifies the configuration for cold storage options such as enabled
 *
 * @public
 */
export interface ColdStorageOptions {
  /**
   * Enable cold storage option. Accepted values true or false
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones.
 *
 * @public
 */
export interface ZoneAwarenessConfig {
  /**
   * An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled
   *
   * @public
   */
  AvailabilityZoneCount?: number | undefined;
}

/**
 * Specifies the configuration for the domain cluster, such as the type and number of instances.
 *
 * @public
 */
export interface ElasticsearchClusterConfig {
  /**
   * The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.
   *
   * @public
   */
  InstanceType?: ESPartitionInstanceType | undefined;

  /**
   * The number of instances in the specified domain cluster.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * A boolean value to indicate whether a dedicated master node is enabled. See [About Dedicated Master Nodes](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes) for more information.
   *
   * @public
   */
  DedicatedMasterEnabled?: boolean | undefined;

  /**
   * A boolean value to indicate whether zone awareness is enabled. See [About Zone Awareness](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness) for more information.
   *
   * @public
   */
  ZoneAwarenessEnabled?: boolean | undefined;

  /**
   * Specifies the zone awareness configuration for a domain when zone awareness is enabled.
   *
   * @public
   */
  ZoneAwarenessConfig?: ZoneAwarenessConfig | undefined;

  /**
   * The instance type for a dedicated master node.
   *
   * @public
   */
  DedicatedMasterType?: ESPartitionInstanceType | undefined;

  /**
   * Total number of dedicated master nodes, active and on standby, for the cluster.
   *
   * @public
   */
  DedicatedMasterCount?: number | undefined;

  /**
   * True to enable warm storage.
   *
   * @public
   */
  WarmEnabled?: boolean | undefined;

  /**
   * The instance type for the Elasticsearch cluster's warm nodes.
   *
   * @public
   */
  WarmType?: ESWarmPartitionInstanceType | undefined;

  /**
   * The number of warm nodes in the cluster.
   *
   * @public
   */
  WarmCount?: number | undefined;

  /**
   * Specifies the `ColdStorageOptions` config for Elasticsearch Domain
   *
   * @public
   */
  ColdStorageOptions?: ColdStorageOptions | undefined;
}

/**
 * Specifies the Encryption At Rest Options.
 *
 * @public
 */
export interface EncryptionAtRestOptions {
  /**
   * Specifies the option to enable Encryption At Rest.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Specifies the KMS Key ID for Encryption At Rest options.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Log Publishing option that is set for given domain.
 *
 * Attributes and their details:
 *
 * - CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.
 * - Enabled: Whether the log publishing for given log type is enabled or not
 *
 * @public
 */
export interface LogPublishingOption {
  /**
   * ARN of the Cloudwatch log group to which log needs to be published.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * Specifies whether given log publishing option is enabled or not.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Specifies the node-to-node encryption options.
 *
 * @public
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * Specify true to enable node-to-node encryption.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is `0` hours.
 *
 * @public
 */
export interface SnapshotOptions {
  /**
   * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is `0` hours.
   *
   * @public
   */
  AutomatedSnapshotStartHour?: number | undefined;
}

/**
 * Options to specify the subnets and security groups for VPC endpoint. For more information, see [VPC Endpoints for Amazon Elasticsearch Service Domains](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html).
 *
 * @public
 */
export interface VPCOptions {
  /**
   * Specifies the subnets for VPC endpoint.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * Specifies the security groups for VPC endpoint.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateElasticsearchDomainRequest {
  /**
   * The name of the Elasticsearch domain that you are creating. Domain names are unique across the domains owned by an account within an AWS region. Domain names must start with a lowercase letter and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information, see [Creating Elasticsearch Domains](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains) in the *Amazon Elasticsearch Service Developer Guide*.
   *
   * @public
   */
  ElasticsearchVersion?: string | undefined;

  /**
   * Configuration options for an Elasticsearch domain. Specifies the instance type and number of instances in the domain cluster.
   *
   * @public
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig | undefined;

  /**
   * Options to enable, disable and specify the type and size of EBS storage volumes.
   *
   * @public
   */
  EBSOptions?: EBSOptions | undefined;

  /**
   * IAM access policy as a JSON-formatted string.
   *
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * Option to set time, in UTC format, of the daily automated snapshot. Default value is 0 hours.
   *
   * @public
   */
  SnapshotOptions?: SnapshotOptions | undefined;

  /**
   * Options to specify the subnets and security groups for VPC endpoint. For more information, see [Creating a VPC](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc) in *VPC Endpoints for Amazon Elasticsearch Service Domains*
   *
   * @public
   */
  VPCOptions?: VPCOptions | undefined;

  /**
   * Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see [Amazon Cognito Authentication for Kibana](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html).
   *
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * Specifies the Encryption At Rest Options.
   *
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * Specifies the NodeToNodeEncryptionOptions.
   *
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

  /**
   * Option to allow references to indices in an HTTP request body. Must be `false` when configuring access to individual sub-resources. By default, the value is `true`. See [Configuration Advanced Options](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options) for more information.
   *
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * Map of `LogType` and `LogPublishingOption`, each containing options to publish a given type of Elasticsearch log.
   *
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * Options to specify configuration that will be applied to the domain endpoint.
   *
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * Specifies advanced security options.
   *
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput | undefined;

  /**
   * Specifies Auto-Tune options.
   *
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsInput | undefined;

  /**
   * A list of `Tag` added during domain creation.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * Specifies the deployment strategy options.
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
   * The engine mode for the domain. For valid values and requirements, see `DomainEngineMode`.
   *
   * @public
   */
  EngineMode?: DomainEngineMode | undefined;
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
 * Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.
 *
 * @public
 */
export interface AutoTuneOptionsOutput {
  /**
   * Specifies the `AutoTuneState` for the Elasticsearch domain.
   *
   * @public
   */
  State?: AutoTuneState | undefined;

  /**
   * Specifies the error message while enabling or disabling the Auto-Tune.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Specifies change details of the domain configuration change.
 *
 * @public
 */
export interface ChangeProgressDetails {
  /**
   * The unique change identifier associated with a specific domain configuration change.
   *
   * @public
   */
  ChangeId?: string | undefined;

  /**
   * Contains an optional message associated with the domain configuration change.
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

  /**
   * The IAM principal who initiated the configuration change.
   *
   * @public
   */
  InitiatedBy?: InitiatedBy | undefined;
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
   * - **PLAIN_TEXT**: Contain direct values such as "1", "True", or "c5.large.search".
   * - **STRINGIFIED_JSON**: Contain content in JSON format, such as \{"Enabled":"True"\}".
   *
   * @public
   */
  ValueType?: PropertyValueType | undefined;
}

/**
 * Options to specify the subnets and security groups for VPC endpoint. For more information, see [VPC Endpoints for Amazon Elasticsearch Service Domains](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html).
 *
 * @public
 */
export interface VPCDerivedInfo {
  /**
   * The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.
   *
   * @public
   */
  VPCId?: string | undefined;

  /**
   * Specifies the subnets for VPC endpoint.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * Specifies the security groups for VPC endpoint.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * The current status of an Elasticsearch domain.
 *
 * @public
 */
export interface ElasticsearchDomainStatus {
  /**
   * The unique identifier for the specified Elasticsearch domain.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The Amazon resource name (ARN) of an Elasticsearch domain. See [Identifiers for IAM Entities](http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html) in *Using AWS Identity and Access Management* for more information.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * The domain creation status. `True` if the creation of an Elasticsearch domain is complete. `False` if domain creation is still in progress.
   *
   * @public
   */
  Created?: boolean | undefined;

  /**
   * The domain deletion status. `True` if a delete request has been received for the domain but resource cleanup is still in progress. `False` if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.
   *
   * @public
   */
  Deleted?: boolean | undefined;

  /**
   * The Elasticsearch domain endpoint that you use to submit index and search requests.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example `key, value`: `'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'`.
   *
   * @public
   */
  Endpoints?: Record<string, string> | undefined;

  /**
   * The status of the Elasticsearch domain configuration. `True` if Amazon Elasticsearch Service is processing configuration changes. `False` if the configuration is active.
   *
   * @public
   */
  Processing?: boolean | undefined;

  /**
   * The status of an Elasticsearch domain version upgrade. `True` if Amazon Elasticsearch Service is undergoing a version upgrade. `False` if the configuration is active.
   *
   * @public
   */
  UpgradeProcessing?: boolean | undefined;

  ElasticsearchVersion?: string | undefined;
  /**
   * The type and number of instances in the domain cluster.
   *
   * @public
   */
  ElasticsearchClusterConfig: ElasticsearchClusterConfig | undefined;

  /**
   * The `EBSOptions` for the specified domain. See [Configuring EBS-based Storage](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs) for more information.
   *
   * @public
   */
  EBSOptions?: EBSOptions | undefined;

  /**
   * IAM access policy as a JSON-formatted string.
   *
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * Specifies the status of the `SnapshotOptions`
   *
   * @public
   */
  SnapshotOptions?: SnapshotOptions | undefined;

  /**
   * The `VPCOptions` for the specified domain. For more information, see [VPC Endpoints for Amazon Elasticsearch Service Domains](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html).
   *
   * @public
   */
  VPCOptions?: VPCDerivedInfo | undefined;

  /**
   * The `CognitoOptions` for the specified domain. For more information, see [Amazon Cognito Authentication for Kibana](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html).
   *
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * Specifies the status of the `EncryptionAtRestOptions`.
   *
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * Specifies the status of the `NodeToNodeEncryptionOptions`.
   *
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

  /**
   * Specifies the status of the `AdvancedOptions`
   *
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * Log publishing options for the given domain.
   *
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * The current status of the Elasticsearch domain's service software.
   *
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions | undefined;

  /**
   * The current status of the Elasticsearch domain's endpoint options.
   *
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * The current status of the Elasticsearch domain's advanced security options.
   *
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptions | undefined;

  /**
   * The current status of the Elasticsearch domain's Auto-Tune options.
   *
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsOutput | undefined;

  /**
   * Specifies change details of the domain configuration change.
   *
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;

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
   * The current status of the Elasticsearch domain's deployment strategy options.
   *
   * @public
   */
  DeploymentStrategyOptions?: DeploymentStrategyOptions | undefined;

  /**
   * The current status of the Elasticsearch domain's automated snapshot pause options.
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
  EngineMode?: DomainEngineMode | undefined;
}

/**
 * The result of a `CreateElasticsearchDomain` operation. Contains the status of the newly created Elasticsearch domain.
 *
 * @public
 */
export interface CreateElasticsearchDomainResponse {
  /**
   * The status of the newly created Elasticsearch domain.
   *
   * @public
   */
  DomainStatus?: ElasticsearchDomainStatus | undefined;
}

/**
 * Container for the parameters to the `CreateOutboundCrossClusterSearchConnection` operation.
 *
 * @public
 */
export interface CreateOutboundCrossClusterSearchConnectionRequest {
  /**
   * Specifies the `DomainInformation` for the source Elasticsearch domain.
   *
   * @public
   */
  SourceDomainInfo: DomainInformation | undefined;

  /**
   * Specifies the `DomainInformation` for the destination Elasticsearch domain.
   *
   * @public
   */
  DestinationDomainInfo: DomainInformation | undefined;

  /**
   * Specifies the connection alias that will be used by the customer for this connection.
   *
   * @public
   */
  ConnectionAlias: string | undefined;
}

/**
 * Specifies the connection status of an outbound cross-cluster search connection.
 *
 * @public
 */
export interface OutboundCrossClusterSearchConnectionStatus {
  /**
   * The state code for outbound connection. This can be one of the following:
   *
   * - VALIDATING: The outbound connection request is being validated.
   * - VALIDATION_FAILED: Validation failed for the connection request.
   * - PENDING_ACCEPTANCE: Outbound connection request is validated and is not yet accepted by destination domain owner.
   * - PROVISIONING: Outbound connection request is in process.
   * - ACTIVE: Outbound connection is active and ready to use.
   * - REJECTED: Outbound connection request is rejected by destination domain owner.
   * - DELETING: Outbound connection deletion is in progress.
   * - DELETED: Outbound connection is deleted and cannot be used further.
   *
   * @public
   */
  StatusCode?: OutboundCrossClusterSearchConnectionStatusCode | undefined;

  /**
   * Specifies verbose information for the outbound connection status.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The result of a `CreateOutboundCrossClusterSearchConnection` request. Contains the details of the newly created cross-cluster search connection.
 *
 * @public
 */
export interface CreateOutboundCrossClusterSearchConnectionResponse {
  /**
   * Specifies the `DomainInformation` for the source Elasticsearch domain.
   *
   * @public
   */
  SourceDomainInfo?: DomainInformation | undefined;

  /**
   * Specifies the `DomainInformation` for the destination Elasticsearch domain.
   *
   * @public
   */
  DestinationDomainInfo?: DomainInformation | undefined;

  /**
   * Specifies the connection alias provided during the create connection request.
   *
   * @public
   */
  ConnectionAlias?: string | undefined;

  /**
   * Specifies the `OutboundCrossClusterSearchConnectionStatus` for the newly created connection.
   *
   * @public
   */
  ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus | undefined;

  /**
   * Unique id for the created outbound connection, which is used for subsequent operations on connection.
   *
   * @public
   */
  CrossClusterSearchConnectionId?: string | undefined;
}

/**
 * The S3 location for importing the package specified as `S3BucketName` and `S3Key`
 *
 * @public
 */
export interface PackageSource {
  /**
   * Name of the bucket containing the package.
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
 * Container for request parameters to `CreatePackage` operation.
 *
 * @public
 */
export interface CreatePackageRequest {
  /**
   * Unique identifier for the package.
   *
   * @public
   */
  PackageName: string | undefined;

  /**
   * Type of package. Currently supports only TXT-DICTIONARY.
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
   * The customer S3 location `PackageSource` for importing the package.
   *
   * @public
   */
  PackageSource: PackageSource | undefined;
}

/**
 * Basic information about a package.
 *
 * @public
 */
export interface PackageDetails {
  /**
   * Internal ID of the package.
   *
   * @public
   */
  PackageID?: string | undefined;

  /**
   * User specified name of the package.
   *
   * @public
   */
  PackageName?: string | undefined;

  /**
   * Currently supports only TXT-DICTIONARY.
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
   * Current state of the package. Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED
   *
   * @public
   */
  PackageStatus?: PackageStatus | undefined;

  /**
   * Timestamp which tells creation date of the package.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  LastUpdatedAt?: Date | undefined;
  AvailablePackageVersion?: string | undefined;
  /**
   * Additional information if the package is in an error state. Null otherwise.
   *
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;
}

/**
 * Container for response returned by `CreatePackage` operation.
 *
 * @public
 */
export interface CreatePackageResponse {
  /**
   * Information about the package `PackageDetails`.
   *
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * Container for the parameters to the `CreateVpcEndpointRequest` operation.
 *
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the domain to grant access to.
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
 * Container for response parameters to the `CreateVpcEndpoint` operation. Contains the configuration and status of the VPC Endpoint being created.
 *
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
 * Container for the parameters to the `DeleteElasticsearchDomain` operation. Specifies the name of the Elasticsearch domain that you want to delete.
 *
 * @public
 */
export interface DeleteElasticsearchDomainRequest {
  /**
   * The name of the Elasticsearch domain that you want to permanently delete.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The result of a `DeleteElasticsearchDomain` request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.
 *
 * @public
 */
export interface DeleteElasticsearchDomainResponse {
  /**
   * The status of the Elasticsearch domain being deleted.
   *
   * @public
   */
  DomainStatus?: ElasticsearchDomainStatus | undefined;
}

/**
 * Container for the parameters to the `DeleteInboundCrossClusterSearchConnection` operation.
 *
 * @public
 */
export interface DeleteInboundCrossClusterSearchConnectionRequest {
  /**
   * The id of the inbound connection that you want to permanently delete.
   *
   * @public
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * The result of a `DeleteInboundCrossClusterSearchConnection` operation. Contains details of deleted inbound connection.
 *
 * @public
 */
export interface DeleteInboundCrossClusterSearchConnectionResponse {
  /**
   * Specifies the `InboundCrossClusterSearchConnection` of deleted inbound connection.
   *
   * @public
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection | undefined;
}

/**
 * Container for the parameters to the `DeleteOutboundCrossClusterSearchConnection` operation.
 *
 * @public
 */
export interface DeleteOutboundCrossClusterSearchConnectionRequest {
  /**
   * The id of the outbound connection that you want to permanently delete.
   *
   * @public
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * Specifies details of an outbound connection.
 *
 * @public
 */
export interface OutboundCrossClusterSearchConnection {
  /**
   * Specifies the `DomainInformation` for the source Elasticsearch domain.
   *
   * @public
   */
  SourceDomainInfo?: DomainInformation | undefined;

  /**
   * Specifies the `DomainInformation` for the destination Elasticsearch domain.
   *
   * @public
   */
  DestinationDomainInfo?: DomainInformation | undefined;

  /**
   * Specifies the connection id for the outbound cross-cluster search connection.
   *
   * @public
   */
  CrossClusterSearchConnectionId?: string | undefined;

  /**
   * Specifies the connection alias for the outbound cross-cluster search connection.
   *
   * @public
   */
  ConnectionAlias?: string | undefined;

  /**
   * Specifies the `OutboundCrossClusterSearchConnectionStatus` for the outbound connection.
   *
   * @public
   */
  ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus | undefined;
}

/**
 * The result of a `DeleteOutboundCrossClusterSearchConnection` operation. Contains details of deleted outbound connection.
 *
 * @public
 */
export interface DeleteOutboundCrossClusterSearchConnectionResponse {
  /**
   * Specifies the `OutboundCrossClusterSearchConnection` of deleted outbound connection.
   *
   * @public
   */
  CrossClusterSearchConnection?: OutboundCrossClusterSearchConnection | undefined;
}

/**
 * Container for request parameters to `DeletePackage` operation.
 *
 * @public
 */
export interface DeletePackageRequest {
  /**
   * Internal ID of the package that you want to delete. Use `DescribePackages` to find this value.
   *
   * @public
   */
  PackageID: string | undefined;
}

/**
 * Container for response parameters to `DeletePackage` operation.
 *
 * @public
 */
export interface DeletePackageResponse {
  /**
   * `PackageDetails`
   *
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.
 *
 * @public
 */
export interface DeleteVpcEndpointRequest {
  /**
   * The unique identifier of the endpoint to be deleted.
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
 * Container for response parameters to the `DeleteVpcEndpoint` operation. Contains the summarized detail of the VPC Endpoint being deleted.
 *
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
 * Container for the parameters to the `DescribeDomainAutoTunes` operation.
 *
 * @public
 */
export interface DescribeDomainAutoTunesRequest {
  /**
   * Specifies the domain name for which you want Auto-Tune action details.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Set this value to limit the number of results returned. If not specified, defaults to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies details of the scheduled Auto-Tune action. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
 *
 * @public
 */
export interface ScheduledAutoTuneDetails {
  /**
   * Specifies timestamp for the Auto-Tune action scheduled for the domain.
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * Specifies Auto-Tune action type. Valid values are JVM_HEAP_SIZE_TUNING and JVM_YOUNG_GEN_TUNING.
   *
   * @public
   */
  ActionType?: ScheduledAutoTuneActionType | undefined;

  /**
   * Specifies Auto-Tune action description.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * Specifies Auto-Tune action severity. Valid values are LOW, MEDIUM and HIGH.
   *
   * @public
   */
  Severity?: ScheduledAutoTuneSeverityType | undefined;
}

/**
 * Specifies details of the Auto-Tune action. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
 *
 * @public
 */
export interface AutoTuneDetails {
  /**
   * Specifies details of the scheduled Auto-Tune action. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
   *
   * @public
   */
  ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails | undefined;
}

/**
 * Specifies Auto-Tune type and Auto-Tune action details.
 *
 * @public
 */
export interface AutoTune {
  /**
   * Specifies Auto-Tune type. Valid value is SCHEDULED_ACTION.
   *
   * @public
   */
  AutoTuneType?: AutoTuneType | undefined;

  /**
   * Specifies details of the Auto-Tune action. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
   *
   * @public
   */
  AutoTuneDetails?: AutoTuneDetails | undefined;
}

/**
 * The result of `DescribeDomainAutoTunes` request. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
 *
 * @public
 */
export interface DescribeDomainAutoTunesResponse {
  /**
   * Specifies the list of setting adjustments that Auto-Tune has made to the domain. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
   *
   * @public
   */
  AutoTunes?: AutoTune[] | undefined;

  /**
   * Specifies an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the parameters to the `DescribeDomainChangeProgress` operation. Specifies the domain name and optional change specific identity for which you want progress information.
 *
 * @public
 */
export interface DescribeDomainChangeProgressRequest {
  /**
   * The domain you want to get the progress information about.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The specific change ID for which you want to get progress information. This is an optional parameter. If omitted, the service returns information about the most recent configuration change.
   *
   * @public
   */
  ChangeId?: string | undefined;
}

/**
 * A progress stage details of a specific domain configuration change.
 *
 * @public
 */
export interface ChangeProgressStage {
  /**
   * The name of the specific progress stage.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The overall status of a specific progress stage.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The description of the progress stage.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The last updated timestamp of the progress stage.
   *
   * @public
   */
  LastUpdated?: Date | undefined;
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
   * The overall status of the domain configuration change. This field can take the following values: `PENDING`, `PROCESSING`, `COMPLETED` and `FAILED`
   *
   * @public
   */
  Status?: OverallChangeStatus | undefined;

  /**
   * The list of properties involved in the domain configuration change that are still in pending.
   *
   * @public
   */
  PendingProperties?: string[] | undefined;

  /**
   * The list of properties involved in the domain configuration change that are completed.
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
   * The current status of the configuration change.
   *
   * @public
   */
  ConfigChangeStatus?: ConfigChangeStatus | undefined;

  /**
   * The last time that the status of the configuration change was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The IAM principal who initiated the configuration change.
   *
   * @public
   */
  InitiatedBy?: InitiatedBy | undefined;
}

/**
 * The result of a `DescribeDomainChangeProgress` request. Contains the progress information of the requested domain change.
 *
 * @public
 */
export interface DescribeDomainChangeProgressResponse {
  /**
   * Progress information for the configuration change that is requested in the `DescribeDomainChangeProgress` request.
   *
   * @public
   */
  ChangeProgressStatus?: ChangeProgressStatusDetails | undefined;
}

/**
 * Container for the parameters to the `DescribeElasticsearchDomain` operation.
 *
 * @public
 */
export interface DescribeElasticsearchDomainRequest {
  /**
   * The name of the Elasticsearch domain for which you want information.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The result of a `DescribeElasticsearchDomain` request. Contains the status of the domain specified in the request.
 *
 * @public
 */
export interface DescribeElasticsearchDomainResponse {
  /**
   * The current status of the Elasticsearch domain.
   *
   * @public
   */
  DomainStatus: ElasticsearchDomainStatus | undefined;
}

/**
 * Container for the parameters to the `DescribeElasticsearchDomainConfig` operation. Specifies the domain name for which you want configuration information.
 *
 * @public
 */
export interface DescribeElasticsearchDomainConfigRequest {
  /**
   * The Elasticsearch domain that you want to get information about.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The status of automated snapshot pause options for the specified Elasticsearch domain.
 *
 * @public
 */
export interface AutomatedSnapshotPauseOptionsStatus {
  /**
   * Automated snapshot pause options for the specified Elasticsearch domain.
   *
   * @public
   */
  Options: AutomatedSnapshotPauseOptions | undefined;

  /**
   * The current status of the automated snapshot pause options for the specified Elasticsearch domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules.
 *
 * @public
 */
export interface AutoTuneOptions {
  /**
   * Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED.
   *
   * @public
   */
  DesiredState?: AutoTuneDesiredState | undefined;

  /**
   * Specifies the rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK, DEFAULT_ROLLBACK.
   *
   * @public
   */
  RollbackOnDisable?: RollbackOnDisable | undefined;

  /**
   * Specifies list of maitenance schedules. See the [Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html) for more information.
   *
   * @public
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[] | undefined;
}

/**
 * Provides the current status of the Auto-Tune options.
 *
 * @public
 */
export interface AutoTuneStatus {
  /**
   * Timestamp which tells Auto-Tune options creation date .
   *
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * Timestamp which tells Auto-Tune options last updated time.
   *
   * @public
   */
  UpdateDate: Date | undefined;

  /**
   * Specifies the Auto-Tune options latest version.
   *
   * @public
   */
  UpdateVersion?: number | undefined;

  /**
   * Specifies the `AutoTuneState` for the Elasticsearch domain.
   *
   * @public
   */
  State: AutoTuneState | undefined;

  /**
   * Specifies the error message while enabling or disabling the Auto-Tune options.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Indicates whether the Elasticsearch domain is being deleted.
   *
   * @public
   */
  PendingDeletion?: boolean | undefined;
}

/**
 * Specifies the status of Auto-Tune options for the specified Elasticsearch domain.
 *
 * @public
 */
export interface AutoTuneOptionsStatus {
  /**
   * Specifies Auto-Tune options for the specified Elasticsearch domain.
   *
   * @public
   */
  Options?: AutoTuneOptions | undefined;

  /**
   * Specifies Status of the Auto-Tune options for the specified Elasticsearch domain.
   *
   * @public
   */
  Status?: AutoTuneStatus | undefined;
}

/**
 * Status of the Cognito options for the specified Elasticsearch domain.
 *
 * @public
 */
export interface CognitoOptionsStatus {
  /**
   * Specifies the Cognito options for the specified Elasticsearch domain.
   *
   * @public
   */
  Options: CognitoOptions | undefined;

  /**
   * Specifies the status of the Cognito options for the specified Elasticsearch domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Specifies the status of deployment strategy options for the specified Elasticsearch domain.
 *
 * @public
 */
export interface DeploymentStrategyOptionsStatus {
  /**
   * Specifies deployment strategy options for the specified Elasticsearch domain.
   *
   * @public
   */
  Options: DeploymentStrategyOptions | undefined;

  /**
   * Specifies the status of the deployment strategy options for the specified Elasticsearch domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The configured endpoint options for the domain and their current status.
 *
 * @public
 */
export interface DomainEndpointOptionsStatus {
  /**
   * Options to configure endpoint for the Elasticsearch domain.
   *
   * @public
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * The status of the endpoint options for the Elasticsearch domain. See `OptionStatus` for the status information that's included.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Status of the EBS options for the specified Elasticsearch domain.
 *
 * @public
 */
export interface EBSOptionsStatus {
  /**
   * Specifies the EBS options for the specified Elasticsearch domain.
   *
   * @public
   */
  Options: EBSOptions | undefined;

  /**
   * Specifies the status of the EBS options for the specified Elasticsearch domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Specifies the configuration status for the specified Elasticsearch domain.
 *
 * @public
 */
export interface ElasticsearchClusterConfigStatus {
  /**
   * Specifies the cluster configuration for the specified Elasticsearch domain.
   *
   * @public
   */
  Options: ElasticsearchClusterConfig | undefined;

  /**
   * Specifies the status of the configuration for the specified Elasticsearch domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Status of the Elasticsearch version options for the specified Elasticsearch domain.
 *
 * @public
 */
export interface ElasticsearchVersionStatus {
  /**
   * Specifies the Elasticsearch version for the specified Elasticsearch domain.
   *
   * @public
   */
  Options: string | undefined;

  /**
   * Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Status of the Encryption At Rest options for the specified Elasticsearch domain.
 *
 * @public
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * Specifies the Encryption At Rest options for the specified Elasticsearch domain.
   *
   * @public
   */
  Options: EncryptionAtRestOptions | undefined;

  /**
   * Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.
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
  Options: DomainEngineMode | undefined;

  /**
   * The current status of the engine mode for the domain.
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
   * The log publishing options configured for the Elasticsearch domain.
   *
   * @public
   */
  Options?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * The status of the log publishing options for the Elasticsearch domain. See `OptionStatus` for the status information that's included.
   *
   * @public
   */
  Status?: OptionStatus | undefined;
}

/**
 * Status of the node-to-node encryption options for the specified Elasticsearch domain.
 *
 * @public
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * Specifies the node-to-node encryption options for the specified Elasticsearch domain.
   *
   * @public
   */
  Options: NodeToNodeEncryptionOptions | undefined;

  /**
   * Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * Status of a daily automated snapshot.
 *
 * @public
 */
export interface SnapshotOptionsStatus {
  /**
   * Specifies the daily snapshot options specified for the Elasticsearch domain.
   *
   * @public
   */
  Options: SnapshotOptions | undefined;

  /**
   * Specifies the status of a daily automated snapshot.
   *
   * @public
   */
  Status: OptionStatus | undefined;
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
 * Status of the VPC options for the specified Elasticsearch domain.
 *
 * @public
 */
export interface VPCDerivedInfoStatus {
  /**
   * Specifies the VPC options for the specified Elasticsearch domain.
   *
   * @public
   */
  Options: VPCDerivedInfo | undefined;

  /**
   * Specifies the status of the VPC options for the specified Elasticsearch domain.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The configuration of an Elasticsearch domain.
 *
 * @public
 */
export interface ElasticsearchDomainConfig {
  /**
   * String of format X.Y to specify version for the Elasticsearch domain.
   *
   * @public
   */
  ElasticsearchVersion?: ElasticsearchVersionStatus | undefined;

  /**
   * Specifies the `ElasticsearchClusterConfig` for the Elasticsearch domain.
   *
   * @public
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus | undefined;

  /**
   * Specifies the `EBSOptions` for the Elasticsearch domain.
   *
   * @public
   */
  EBSOptions?: EBSOptionsStatus | undefined;

  /**
   * IAM access policy as a JSON-formatted string.
   *
   * @public
   */
  AccessPolicies?: AccessPoliciesStatus | undefined;

  /**
   * Specifies the `SnapshotOptions` for the Elasticsearch domain.
   *
   * @public
   */
  SnapshotOptions?: SnapshotOptionsStatus | undefined;

  /**
   * The `VPCOptions` for the specified domain. For more information, see [VPC Endpoints for Amazon Elasticsearch Service Domains](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html).
   *
   * @public
   */
  VPCOptions?: VPCDerivedInfoStatus | undefined;

  /**
   * The `CognitoOptions` for the specified domain. For more information, see [Amazon Cognito Authentication for Kibana](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html).
   *
   * @public
   */
  CognitoOptions?: CognitoOptionsStatus | undefined;

  /**
   * Specifies the `EncryptionAtRestOptions` for the Elasticsearch domain.
   *
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus | undefined;

  /**
   * Specifies the `NodeToNodeEncryptionOptions` for the Elasticsearch domain.
   *
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus | undefined;

  /**
   * Specifies the `AdvancedOptions` for the domain. See [Configuring Advanced Options](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options) for more information.
   *
   * @public
   */
  AdvancedOptions?: AdvancedOptionsStatus | undefined;

  /**
   * Log publishing options for the given domain.
   *
   * @public
   */
  LogPublishingOptions?: LogPublishingOptionsStatus | undefined;

  /**
   * Specifies the `DomainEndpointOptions` for the Elasticsearch domain.
   *
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus | undefined;

  /**
   * Specifies `AdvancedSecurityOptions` for the domain.
   *
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus | undefined;

  /**
   * Specifies `AutoTuneOptions` for the domain.
   *
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsStatus | undefined;

  /**
   * Specifies change details of the domain configuration change.
   *
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;

  /**
   * Information about the domain properties that are currently being modified.
   *
   * @public
   */
  ModifyingProperties?: ModifyingProperties[] | undefined;

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
 * The result of a `DescribeElasticsearchDomainConfig` request. Contains the configuration information of the requested domain.
 *
 * @public
 */
export interface DescribeElasticsearchDomainConfigResponse {
  /**
   * The configuration information of the domain requested in the `DescribeElasticsearchDomainConfig` request.
   *
   * @public
   */
  DomainConfig: ElasticsearchDomainConfig | undefined;
}

/**
 * Container for the parameters to the `DescribeElasticsearchDomains` operation. By default, the API returns the status of all Elasticsearch domains.
 *
 * @public
 */
export interface DescribeElasticsearchDomainsRequest {
  /**
   * The Elasticsearch domains for which you want information.
   *
   * @public
   */
  DomainNames: string[] | undefined;
}

/**
 * The result of a `DescribeElasticsearchDomains` request. Contains the status of the specified domains or all domains owned by the account.
 *
 * @public
 */
export interface DescribeElasticsearchDomainsResponse {
  /**
   * The status of the domains requested in the `DescribeElasticsearchDomains` request.
   *
   * @public
   */
  DomainStatusList: ElasticsearchDomainStatus[] | undefined;
}

/**
 * Container for the parameters to `DescribeElasticsearchInstanceTypeLimits` operation.
 *
 * @public
 */
export interface DescribeElasticsearchInstanceTypeLimitsRequest {
  /**
   * DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for Elasticsearch `Limits` for existing domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The instance type for an Elasticsearch cluster for which Elasticsearch `Limits` are needed.
   *
   * @public
   */
  InstanceType: ESPartitionInstanceType | undefined;

  /**
   * Version of Elasticsearch for which `Limits` are needed.
   *
   * @public
   */
  ElasticsearchVersion: string | undefined;
}

/**
 * InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType.
 *
 * @public
 */
export interface InstanceCountLimits {
  /**
   * Minimum number of Instances that can be instantiated for given InstanceType.
   *
   * @public
   */
  MinimumInstanceCount?: number | undefined;

  /**
   * Maximum number of Instances that can be instantiated for given InstanceType.
   *
   * @public
   */
  MaximumInstanceCount?: number | undefined;
}

/**
 * InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
 *
 * @public
 */
export interface InstanceLimits {
  /**
   * InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType.
   *
   * @public
   */
  InstanceCountLimits?: InstanceCountLimits | undefined;
}

/**
 * Limits that are applicable for given storage type.
 *
 * @public
 */
export interface StorageTypeLimit {
  /**
   * Name of storage limits that are applicable for given storage type. If `StorageType` is ebs, following storage options are applicable
   *
   * 1. MinimumVolumeSize Minimum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
   * 2. MaximumVolumeSize Maximum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
   * 3. MaximumIops Maximum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.
   * 4. MinimumIops Minimum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.
   * 5. MaximumThroughput Maximum amount of Throughput that is applicable for given storage type.It can be empty if it is not applicable.
   * 6. MinimumThroughput Minimum amount of Throughput that is applicable for given storage type.It can be empty if it is not applicable.
   *
   * @public
   */
  LimitName?: string | undefined;

  /**
   * Values for the `StorageTypeLimit$LimitName` .
   *
   * @public
   */
  LimitValues?: string[] | undefined;
}

/**
 * StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType.
 *
 * @public
 */
export interface StorageType {
  /**
   * Type of the storage. List of available storage options:
   *
   * 1. instance Inbuilt storage available for the given Instance
   * 2. ebs Elastic block storage that would be attached to the given Instance
   *
   * @public
   */
  StorageTypeName?: string | undefined;

  /**
   * SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes
   *
   * 1. standard
   * 2. gp2
   * 3. gp3
   * 4. io1
   *
   * Refer `VolumeType` for more information regarding above EBS storage options.
   *
   * @public
   */
  StorageSubTypeName?: string | undefined;

  /**
   * List of limits that are applicable for given storage type.
   *
   * @public
   */
  StorageTypeLimits?: StorageTypeLimit[] | undefined;
}

/**
 * Limits for given InstanceType and for each of it's role.
 *
 * Limits contains following `StorageTypes,` `InstanceLimits` and `AdditionalLimits`
 *
 * @public
 */
export interface Limits {
  /**
   * StorageType represents the list of storage related types and attributes that are available for given InstanceType.
   *
   * @public
   */
  StorageTypes?: StorageType[] | undefined;

  /**
   * InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
   *
   * @public
   */
  InstanceLimits?: InstanceLimits | undefined;

  /**
   * List of additional limits that are specific to a given InstanceType and for each of it's `InstanceRole` .
   *
   * @public
   */
  AdditionalLimits?: AdditionalLimit[] | undefined;
}

/**
 * Container for the parameters received from `DescribeElasticsearchInstanceTypeLimits` operation.
 *
 * @public
 */
export interface DescribeElasticsearchInstanceTypeLimitsResponse {
  /**
   * Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following:
   *
   * - data: If the given InstanceType is used as data node
   * - master: If the given InstanceType is used as master node
   * - ultra_warm: If the given InstanceType is used as warm node
   *
   * @public
   */
  LimitsByRole?: Record<string, Limits> | undefined;
}

/**
 * A filter used to limit results when describing inbound or outbound cross-cluster search connections. Multiple values can be specified per filter. A cross-cluster search connection must match at least one of the specified values for it to be returned from an operation.
 *
 * @public
 */
export interface Filter {
  /**
   * Specifies the name of the filter.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Contains one or more values for the filter.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * Container for the parameters to the `DescribeInboundCrossClusterSearchConnections` operation.
 *
 * @public
 */
export interface DescribeInboundCrossClusterSearchConnectionsRequest {
  /**
   * A list of filters used to match properties for inbound cross-cluster search connection. Available `Filter` names for this operation are:
   *
   * - cross-cluster-search-connection-id
   * - source-domain-info.domain-name
   * - source-domain-info.owner-id
   * - source-domain-info.region
   * - destination-domain-info.domain-name
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Set this value to limit the number of results returned. If not specified, defaults to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The result of a `DescribeInboundCrossClusterSearchConnections` request. Contains the list of connections matching the filter criteria.
 *
 * @public
 */
export interface DescribeInboundCrossClusterSearchConnectionsResponse {
  /**
   * Consists of list of `InboundCrossClusterSearchConnection` matching the specified filter criteria.
   *
   * @public
   */
  CrossClusterSearchConnections?: InboundCrossClusterSearchConnection[] | undefined;

  /**
   * If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the parameters to the `DescribeOutboundCrossClusterSearchConnections` operation.
 *
 * @public
 */
export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
  /**
   * A list of filters used to match properties for outbound cross-cluster search connection. Available `Filter` names for this operation are:
   *
   * - cross-cluster-search-connection-id
   * - destination-domain-info.domain-name
   * - destination-domain-info.owner-id
   * - destination-domain-info.region
   * - source-domain-info.domain-name
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Set this value to limit the number of results returned. If not specified, defaults to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The result of a `DescribeOutboundCrossClusterSearchConnections` request. Contains the list of connections matching the filter criteria.
 *
 * @public
 */
export interface DescribeOutboundCrossClusterSearchConnectionsResponse {
  /**
   * Consists of list of `OutboundCrossClusterSearchConnection` matching the specified filter criteria.
   *
   * @public
   */
  CrossClusterSearchConnections?: OutboundCrossClusterSearchConnection[] | undefined;

  /**
   * If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filter to apply in `DescribePackage` response.
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
   * A non-empty list of values for the specified field.
   *
   * @public
   */
  Value?: string[] | undefined;
}

/**
 * Container for request parameters to `DescribePackage` operation.
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
   * Limits results to a maximum number of packages.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for response returned by `DescribePackages` operation.
 *
 * @public
 */
export interface DescribePackagesResponse {
  /**
   * List of `PackageDetails` objects.
   *
   * @public
   */
  PackageDetailsList?: PackageDetails[] | undefined;

  NextToken?: string | undefined;
}

/**
 * Container for parameters to `DescribeReservedElasticsearchInstanceOfferings`
 *
 * @public
 */
export interface DescribeReservedElasticsearchInstanceOfferingsRequest {
  /**
   * The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.
   *
   * @public
   */
  ReservedElasticsearchInstanceOfferingId?: string | undefined;

  /**
   * Set this value to limit the number of results returned. If not specified, defaults to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.
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
 * Details of a reserved Elasticsearch instance offering.
 *
 * @public
 */
export interface ReservedElasticsearchInstanceOffering {
  /**
   * The Elasticsearch reserved instance offering identifier.
   *
   * @public
   */
  ReservedElasticsearchInstanceOfferingId?: string | undefined;

  /**
   * The Elasticsearch instance type offered by the reserved instance offering.
   *
   * @public
   */
  ElasticsearchInstanceType?: ESPartitionInstanceType | undefined;

  /**
   * The duration, in seconds, for which the offering will reserve the Elasticsearch instance.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The upfront fixed charge you will pay to purchase the specific reserved Elasticsearch instance offering.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The rate you are charged for each hour the domain that is using the offering is running.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The currency code for the reserved Elasticsearch instance offering.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * Payment option for the reserved Elasticsearch instance offering
   *
   * @public
   */
  PaymentOption?: ReservedElasticsearchInstancePaymentOption | undefined;

  /**
   * The charge to your account regardless of whether you are creating any domains using the instance offering.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * Container for results from `DescribeReservedElasticsearchInstanceOfferings`
 *
 * @public
 */
export interface DescribeReservedElasticsearchInstanceOfferingsResponse {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of reserved Elasticsearch instance offerings
   *
   * @public
   */
  ReservedElasticsearchInstanceOfferings?: ReservedElasticsearchInstanceOffering[] | undefined;
}

/**
 * Container for parameters to `DescribeReservedElasticsearchInstances`
 *
 * @public
 */
export interface DescribeReservedElasticsearchInstancesRequest {
  /**
   * The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.
   *
   * @public
   */
  ReservedElasticsearchInstanceId?: string | undefined;

  /**
   * Set this value to limit the number of results returned. If not specified, defaults to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details of a reserved Elasticsearch instance.
 *
 * @public
 */
export interface ReservedElasticsearchInstance {
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
  ReservedElasticsearchInstanceId?: string | undefined;

  /**
   * The offering identifier.
   *
   * @public
   */
  ReservedElasticsearchInstanceOfferingId?: string | undefined;

  /**
   * The Elasticsearch instance type offered by the reserved instance offering.
   *
   * @public
   */
  ElasticsearchInstanceType?: ESPartitionInstanceType | undefined;

  /**
   * The time the reservation started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The duration, in seconds, for which the Elasticsearch instance is reserved.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The upfront fixed charge you will paid to purchase the specific reserved Elasticsearch instance offering.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The rate you are charged for each hour for the domain that is using this reserved instance.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The currency code for the reserved Elasticsearch instance offering.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The number of Elasticsearch instances that have been reserved.
   *
   * @public
   */
  ElasticsearchInstanceCount?: number | undefined;

  /**
   * The state of the reserved Elasticsearch instance.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The payment option as defined in the reserved Elasticsearch instance offering.
   *
   * @public
   */
  PaymentOption?: ReservedElasticsearchInstancePaymentOption | undefined;

  /**
   * The charge to your account regardless of whether you are creating any domains using the instance offering.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * Container for results from `DescribeReservedElasticsearchInstances`
 *
 * @public
 */
export interface DescribeReservedElasticsearchInstancesResponse {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of reserved Elasticsearch instances.
   *
   * @public
   */
  ReservedElasticsearchInstances?: ReservedElasticsearchInstance[] | undefined;
}

/**
 * Container for request parameters to the `DescribeVpcEndpoints` operation. Specifies the list of VPC endpoints to be described.
 *
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
 * Container for response parameters to the `DescribeVpcEndpoints` operation. Returns a list containing configuration details and status of the VPC Endpoints as well as a list containing error responses of the endpoints that could not be described
 *
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
 * Container for request parameters to `DissociatePackage` operation.
 *
 * @public
 */
export interface DissociatePackageRequest {
  /**
   * Internal ID of the package that you want to associate with a domain. Use `DescribePackages` to find this value.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * Name of the domain that you want to associate the package with.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Container for response returned by `DissociatePackage` operation.
 *
 * @public
 */
export interface DissociatePackageResponse {
  /**
   * `DomainPackageDetails`
   *
   * @public
   */
  DomainPackageDetails?: DomainPackageDetails | undefined;
}

/**
 * Container for request parameters to `GetCompatibleElasticsearchVersions` operation.
 *
 * @public
 */
export interface GetCompatibleElasticsearchVersionsRequest {
  /**
   * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName?: string | undefined;
}

/**
 * A map from an `ElasticsearchVersion` to a list of compatible `ElasticsearchVersion` s to which the domain can be upgraded.
 *
 * @public
 */
export interface CompatibleVersionsMap {
  /**
   * The current version of Elasticsearch on which a domain is.
   *
   * @public
   */
  SourceVersion?: string | undefined;

  /**
   * List of supported elastic search versions.
   *
   * @public
   */
  TargetVersions?: string[] | undefined;
}

/**
 * Container for response returned by `GetCompatibleElasticsearchVersions` operation.
 *
 * @public
 */
export interface GetCompatibleElasticsearchVersionsResponse {
  /**
   * A map of compatible Elasticsearch versions returned as part of the `GetCompatibleElasticsearchVersions` operation.
   *
   * @public
   */
  CompatibleElasticsearchVersions?: CompatibleVersionsMap[] | undefined;
}

/**
 * Container for request parameters to `GetPackageVersionHistory` operation.
 *
 * @public
 */
export interface GetPackageVersionHistoryRequest {
  /**
   * Returns an audit history of versions of the package.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * Limits results to a maximum number of versions.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details of a package version.
 *
 * @public
 */
export interface PackageVersionHistory {
  /**
   * Version of the package.
   *
   * @public
   */
  PackageVersion?: string | undefined;

  /**
   * A message associated with the version.
   *
   * @public
   */
  CommitMessage?: string | undefined;

  /**
   * Timestamp which tells creation time of the package version.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * Container for response returned by `GetPackageVersionHistory` operation.
 *
 * @public
 */
export interface GetPackageVersionHistoryResponse {
  PackageID?: string | undefined;
  /**
   * List of `PackageVersionHistory` objects.
   *
   * @public
   */
  PackageVersionHistoryList?: PackageVersionHistory[] | undefined;

  NextToken?: string | undefined;
}

/**
 * Container for request parameters to `GetUpgradeHistory` operation.
 *
 * @public
 */
export interface GetUpgradeHistoryRequest {
  /**
   * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Set this value to limit the number of results returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.
 *
 * @public
 */
export interface UpgradeStepItem {
  /**
   * Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
   *
   * - PreUpgradeCheck
   * - Snapshot
   * - Upgrade
   *
   * @public
   */
  UpgradeStep?: UpgradeStep | undefined;

  /**
   * The status of a particular step during an upgrade. The status can take one of the following values:
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
   * The Floating point value representing progress percentage of a particular step.
   *
   * @public
   */
  ProgressPercent?: number | undefined;
}

/**
 * History of the last 10 Upgrades and Upgrade Eligibility Checks.
 *
 * @public
 */
export interface UpgradeHistory {
  /**
   * A string that describes the update briefly
   *
   * @public
   */
  UpgradeName?: string | undefined;

  /**
   * UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * The overall status of the update. The status can take one of the following values:
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
   * A list of `UpgradeStepItem` s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check.
   *
   * @public
   */
  StepsList?: UpgradeStepItem[] | undefined;
}

/**
 * Container for response returned by `GetUpgradeHistory` operation.
 *
 * @public
 */
export interface GetUpgradeHistoryResponse {
  /**
   * A list of `UpgradeHistory` objects corresponding to each Upgrade or Upgrade Eligibility Check performed on a domain returned as part of `GetUpgradeHistoryResponse` object.
   *
   * @public
   */
  UpgradeHistories?: UpgradeHistory[] | undefined;

  /**
   * Pagination token that needs to be supplied to the next call to get the next page of results
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for request parameters to `GetUpgradeStatus` operation.
 *
 * @public
 */
export interface GetUpgradeStatusRequest {
  /**
   * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Container for response returned by `GetUpgradeStatus` operation.
 *
 * @public
 */
export interface GetUpgradeStatusResponse {
  /**
   * Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
   *
   * - PreUpgradeCheck
   * - Snapshot
   * - Upgrade
   *
   * @public
   */
  UpgradeStep?: UpgradeStep | undefined;

  /**
   * One of 4 statuses that a step can go through returned as part of the `GetUpgradeStatusResponse` object. The status can take one of the following values:
   *
   * - In Progress
   * - Succeeded
   * - Succeeded with Issues
   * - Failed
   *
   * @public
   */
  StepStatus?: UpgradeStatus | undefined;

  /**
   * A string that describes the update briefly
   *
   * @public
   */
  UpgradeName?: string | undefined;
}

/**
 * Container for the parameters to the `ListDomainNames` operation.
 *
 * @public
 */
export interface ListDomainNamesRequest {
  /**
   * Optional parameter to filter the output by domain engine type. Acceptable values are 'Elasticsearch' and 'OpenSearch'.
   *
   * @public
   */
  EngineType?: EngineType | undefined;
}

/**
 * @public
 */
export interface DomainInfo {
  /**
   * Specifies the `DomainName`.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Specifies the `EngineType` of the domain.
   *
   * @public
   */
  EngineType?: EngineType | undefined;
}

/**
 * The result of a `ListDomainNames` operation. Contains the names of all domains owned by this account and their respective engine types.
 *
 * @public
 */
export interface ListDomainNamesResponse {
  /**
   * List of domain names and respective engine types.
   *
   * @public
   */
  DomainNames?: DomainInfo[] | undefined;
}

/**
 * Container for request parameters to `ListDomainsForPackage` operation.
 *
 * @public
 */
export interface ListDomainsForPackageRequest {
  /**
   * The package for which to list domains.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * Limits results to a maximum number of domains.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for response parameters to `ListDomainsForPackage` operation.
 *
 * @public
 */
export interface ListDomainsForPackageResponse {
  /**
   * List of `DomainPackageDetails` objects.
   *
   * @public
   */
  DomainPackageDetailsList?: DomainPackageDetails[] | undefined;

  NextToken?: string | undefined;
}

/**
 * Container for the parameters to the `ListElasticsearchInstanceTypes` operation.
 *
 * @public
 */
export interface ListElasticsearchInstanceTypesRequest {
  /**
   * Version of Elasticsearch for which list of supported elasticsearch instance types are needed.
   *
   * @public
   */
  ElasticsearchVersion: string | undefined;

  /**
   * DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for list of available Elasticsearch instance types when modifying existing domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Set this value to limit the number of results returned. Value provided must be greater than 30 else it wont be honored.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the parameters returned by `ListElasticsearchInstanceTypes` operation.
 *
 * @public
 */
export interface ListElasticsearchInstanceTypesResponse {
  /**
   * List of instance types supported by Amazon Elasticsearch service for given `ElasticsearchVersion`
   *
   * @public
   */
  ElasticsearchInstanceTypes?: ESPartitionInstanceType[] | undefined;

  /**
   * In case if there are more results available NextToken would be present, make further request to the same API with received NextToken to paginate remaining results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the parameters to the `ListElasticsearchVersions` operation.
 *
 * Use `MaxResults` to control the maximum number of results to retrieve in a single call.
 *
 * Use `NextToken` in response to retrieve more results. If the received response does not contain a NextToken, then there are no more results to retrieve.
 *
 * @public
 */
export interface ListElasticsearchVersionsRequest {
  /**
   * Set this value to limit the number of results returned. Value provided must be greater than 10 else it wont be honored.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the parameters for response received from `ListElasticsearchVersions` operation.
 *
 * @public
 */
export interface ListElasticsearchVersionsResponse {
  /**
   * List of supported elastic search versions.
   *
   * @public
   */
  ElasticsearchVersions?: string[] | undefined;

  /**
   * Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for request parameters to `ListPackagesForDomain` operation.
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
   * Limits results to a maximum number of packages.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for response parameters to `ListPackagesForDomain` operation.
 *
 * @public
 */
export interface ListPackagesForDomainResponse {
  /**
   * List of `DomainPackageDetails` objects.
   *
   * @public
   */
  DomainPackageDetailsList?: DomainPackageDetails[] | undefined;

  /**
   * Pagination token that needs to be supplied to the next call to get the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for the parameters to the `ListTags` operation. Specify the `ARN` for the Elasticsearch domain to which the tags are attached that you want to view are attached.
 *
 * @public
 */
export interface ListTagsRequest {
  /**
   * Specify the `ARN` for the Elasticsearch domain to which the tags are attached that you want to view.
   *
   * @public
   */
  ARN: string | undefined;
}

/**
 * The result of a `ListTags` operation. Contains tags for all requested Elasticsearch domains.
 *
 * @public
 */
export interface ListTagsResponse {
  /**
   * List of `Tag` for the requested Elasticsearch domain.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * Retrieves information about each principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint
 *
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
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for response parameters to the `ListVpcEndpointAccess` operation. Returns a list of accounts id and account type authorized to manage VPC endpoints.
 *
 * @public
 */
export interface ListVpcEndpointAccessResponse {
  /**
   * List of `AuthorizedPrincipal` describing the details of the permissions to manage VPC endpoints against the specified domain.
   *
   * @public
   */
  AuthorizedPrincipalList: AuthorizedPrincipal[] | undefined;

  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken: string | undefined;
}

/**
 * Container for request parameters to the `ListVpcEndpoints` operation.
 *
 * @public
 */
export interface ListVpcEndpointsRequest {
  /**
   * Identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for response parameters to the `ListVpcEndpoints` operation. Returns a list containing summarized details of the VPC endpoints.
 *
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
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken: string | undefined;
}

/**
 * Container for request parameters to the `ListVpcEndpointsForDomain` operation. Specifies the domain whose VPC endpoints will be listed.
 *
 * @public
 */
export interface ListVpcEndpointsForDomainRequest {
  /**
   * Name of the ElasticSearch domain whose VPC endpoints are to be listed.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Container for response parameters to the `ListVpcEndpointsForDomain` operation. Returns a list containing summarized details of the VPC endpoints.
 *
 * @public
 */
export interface ListVpcEndpointsForDomainResponse {
  /**
   * Provides list of `VpcEndpointSummary` summarizing details of the VPC endpoints.
   *
   * @public
   */
  VpcEndpointSummaryList: VpcEndpointSummary[] | undefined;

  /**
   * Information about each endpoint associated with the domain.
   *
   * @public
   */
  NextToken: string | undefined;
}

/**
 * Container for parameters to `PurchaseReservedElasticsearchInstanceOffering`
 *
 * @public
 */
export interface PurchaseReservedElasticsearchInstanceOfferingRequest {
  /**
   * The ID of the reserved Elasticsearch instance offering to purchase.
   *
   * @public
   */
  ReservedElasticsearchInstanceOfferingId: string | undefined;

  /**
   * A customer-specified identifier to track this reservation.
   *
   * @public
   */
  ReservationName: string | undefined;

  /**
   * The number of Elasticsearch instances to reserve.
   *
   * @public
   */
  InstanceCount?: number | undefined;
}

/**
 * Represents the output of a `PurchaseReservedElasticsearchInstanceOffering` operation.
 *
 * @public
 */
export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
  /**
   * Details of the reserved Elasticsearch instance which was purchased.
   *
   * @public
   */
  ReservedElasticsearchInstanceId?: string | undefined;

  /**
   * The customer-specified identifier used to track this reservation.
   *
   * @public
   */
  ReservationName?: string | undefined;
}

/**
 * Container for the parameters to the `RejectInboundCrossClusterSearchConnection` operation.
 *
 * @public
 */
export interface RejectInboundCrossClusterSearchConnectionRequest {
  /**
   * The id of the inbound connection that you want to reject.
   *
   * @public
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * The result of a `RejectInboundCrossClusterSearchConnection` operation. Contains details of rejected inbound connection.
 *
 * @public
 */
export interface RejectInboundCrossClusterSearchConnectionResponse {
  /**
   * Specifies the `InboundCrossClusterSearchConnection` of rejected inbound connection.
   *
   * @public
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection | undefined;
}

/**
 * Container for the parameters to the `RemoveTags` operation. Specify the `ARN` for the Elasticsearch domain from which you want to remove the specified `TagKey`.
 *
 * @public
 */
export interface RemoveTagsRequest {
  /**
   * Specifies the `ARN` for the Elasticsearch domain from which you want to delete the specified tags.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * Specifies the `TagKey` list which you want to remove from the Elasticsearch domain.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint.
 *
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
  Account: string | undefined;
}

/**
 * Container for response parameters to the `RevokeVpcEndpointAccess` operation. The response body for this operation is empty.
 *
 * @public
 */
export interface RevokeVpcEndpointAccessResponse {}

/**
 * Container for the parameters to the `StartElasticsearchServiceSoftwareUpdate` operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on.
 *
 * @public
 */
export interface StartElasticsearchServiceSoftwareUpdateRequest {
  /**
   * The name of the domain that you want to update to the latest service software.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The result of a `StartElasticsearchServiceSoftwareUpdate` operation. Contains the status of the update.
 *
 * @public
 */
export interface StartElasticsearchServiceSoftwareUpdateResponse {
  /**
   * The current status of the Elasticsearch service software update.
   *
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions | undefined;
}

/**
 * Container for the parameters to the `UpdateElasticsearchDomain` operation. Specifies the type and number of instances in the domain cluster.
 *
 * @public
 */
export interface UpdateElasticsearchDomainConfigRequest {
  /**
   * The name of the Elasticsearch domain that you are updating.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The type and number of instances to instantiate for the domain cluster.
   *
   * @public
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig | undefined;

  /**
   * Specify the type and size of the EBS volume that you want to use.
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
   * Options to specify the subnets and security groups for VPC endpoint. For more information, see [Creating a VPC](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc) in *VPC Endpoints for Amazon Elasticsearch Service Domains*
   *
   * @public
   */
  VPCOptions?: VPCOptions | undefined;

  /**
   * Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see [Amazon Cognito Authentication for Kibana](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html).
   *
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * Modifies the advanced option to allow references to indices in an HTTP request body. Must be `false` when configuring access to individual sub-resources. By default, the value is `true`. See [Configuration Advanced Options](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options) for more information.
   *
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * IAM access policy as a JSON-formatted string.
   *
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * Map of `LogType` and `LogPublishingOption`, each containing options to publish a given type of Elasticsearch log.
   *
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * Options to specify configuration that will be applied to the domain endpoint.
   *
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * Specifies advanced security options.
   *
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput | undefined;

  /**
   * Specifies the NodeToNodeEncryptionOptions.
   *
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

  /**
   * Specifies the Encryption At Rest Options.
   *
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * Specifies Auto-Tune options.
   *
   * @public
   */
  AutoTuneOptions?: AutoTuneOptions | undefined;

  /**
   * This flag, when set to True, specifies whether the `UpdateElasticsearchDomain` request should return the results of validation checks without actually applying the change. This flag, when set to True, specifies the deployment mechanism through which the update shall be applied on the domain. This will not actually perform the Update.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specifies the deployment strategy options.
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
   * The engine mode for the domain. For valid values and requirements, see `DomainEngineMode`.
   *
   * @public
   */
  EngineMode?: DomainEngineMode | undefined;
}

/**
 * @public
 */
export interface DryRunResults {
  /**
   * Specifies the deployment mechanism through which the update shall be applied on the domain. Possible responses are `Blue/Green` (The update will require a blue/green deployment.) `DynamicUpdate` (The update can be applied in-place without a Blue/Green deployment required.) `Undetermined` (The domain is undergoing an update which needs to complete before the deployment type can be predicted.) `None` (The configuration change matches the current configuration and will not result in any update.)
   *
   * @public
   */
  DeploymentType?: string | undefined;

  /**
   * Contains an optional message associated with the DryRunResults.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The result of an `UpdateElasticsearchDomain` request. Contains the status of the Elasticsearch domain being updated.
 *
 * @public
 */
export interface UpdateElasticsearchDomainConfigResponse {
  /**
   * The status of the updated Elasticsearch domain.
   *
   * @public
   */
  DomainConfig: ElasticsearchDomainConfig | undefined;

  /**
   * Contains result of DryRun.
   *
   * @public
   */
  DryRunResults?: DryRunResults | undefined;
}

/**
 * Container for request parameters to `UpdatePackage` operation.
 *
 * @public
 */
export interface UpdatePackageRequest {
  /**
   * Unique identifier for the package.
   *
   * @public
   */
  PackageID: string | undefined;

  /**
   * The S3 location for importing the package specified as `S3BucketName` and `S3Key`
   *
   * @public
   */
  PackageSource: PackageSource | undefined;

  /**
   * New description of the package.
   *
   * @public
   */
  PackageDescription?: string | undefined;

  /**
   * An info message for the new version which will be shown as part of `GetPackageVersionHistoryResponse`.
   *
   * @public
   */
  CommitMessage?: string | undefined;
}

/**
 * Container for response returned by `UpdatePackage` operation.
 *
 * @public
 */
export interface UpdatePackageResponse {
  /**
   * Information about the package `PackageDetails`.
   *
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.
 *
 * @public
 */
export interface UpdateVpcEndpointRequest {
  /**
   * Unique identifier of the VPC endpoint to be updated.
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
 * Contains the configuration and status of the VPC endpoint being updated.
 *
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
 * Container for request parameters to `UpgradeElasticsearchDomain` operation.
 *
 * @public
 */
export interface UpgradeElasticsearchDomainRequest {
  /**
   * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The version of Elasticsearch that you intend to upgrade the domain to.
   *
   * @public
   */
  TargetVersion: string | undefined;

  /**
   * This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade.
   *
   * @public
   */
  PerformCheckOnly?: boolean | undefined;
}

/**
 * Container for response returned by `UpgradeElasticsearchDomain` operation.
 *
 * @public
 */
export interface UpgradeElasticsearchDomainResponse {
  /**
   * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The version of Elasticsearch that you intend to upgrade the domain to.
   *
   * @public
   */
  TargetVersion?: string | undefined;

  /**
   * This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade.
   *
   * @public
   */
  PerformCheckOnly?: boolean | undefined;

  /**
   * Specifies change details of the domain configuration change.
   *
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;
}
