// smithy-typescript generated code
import {
  AutoTuneDesiredState,
  AutoTuneState,
  AutoTuneType,
  ConfigChangeStatus,
  DeploymentStatus,
  DescribePackagesFilterName,
  DomainPackageStatus,
  DomainProcessingStatusType,
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
 * <p>Container for the parameters to the <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation.</p>
 * @public
 */
export interface AcceptInboundCrossClusterSearchConnectionRequest {
  /**
   * <p>The id of the inbound connection that you want to accept.</p>
   * @public
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * <p>Specifies the coonection status of an inbound cross-cluster search connection.</p>
 * @public
 */
export interface InboundCrossClusterSearchConnectionStatus {
  /**
   * <p>The state code for inbound connection. This can be one of the following:</p>
   *     <ul>
   *       <li>PENDING_ACCEPTANCE: Inbound connection is not yet accepted by destination domain owner.</li>
   *       <li>APPROVED: Inbound connection is pending acceptance by destination domain owner.</li>
   *       <li>REJECTING: Inbound connection rejection is in process.</li>
   *       <li>REJECTED: Inbound connection is rejected.</li>
   *       <li>DELETING: Inbound connection deletion is in progress.</li>
   *       <li>DELETED: Inbound connection is deleted and cannot be used further.</li>
   *     </ul>
   * @public
   */
  StatusCode?: InboundCrossClusterSearchConnectionStatusCode | undefined;

  /**
   * <p>Specifies verbose information for the inbound connection status.</p>
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
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  Region?: string | undefined;
}

/**
 * <p>Specifies details of an inbound connection.</p>
 * @public
 */
export interface InboundCrossClusterSearchConnection {
  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   * @public
   */
  SourceDomainInfo?: DomainInformation | undefined;

  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   * @public
   */
  DestinationDomainInfo?: DomainInformation | undefined;

  /**
   * <p>Specifies the connection id for the inbound cross-cluster search connection.</p>
   * @public
   */
  CrossClusterSearchConnectionId?: string | undefined;

  /**
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnectionStatus</a></code> for the outbound connection.</p>
   * @public
   */
  ConnectionStatus?: InboundCrossClusterSearchConnectionStatus | undefined;
}

/**
 * <p>The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection.</p>
 * @public
 */
export interface AcceptInboundCrossClusterSearchConnectionResponse {
  /**
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of accepted inbound connection. </p>
   * @public
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection | undefined;
}

/**
 * <p>Provides the current status of the entity.</p>
 * @public
 */
export interface OptionStatus {
  /**
   * <p>Timestamp which tells the creation date for the entity.</p>
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * <p>Timestamp which tells the last updated time for the entity.</p>
   * @public
   */
  UpdateDate: Date | undefined;

  /**
   * <p>Specifies the latest version for the entity.</p>
   * @public
   */
  UpdateVersion?: number | undefined;

  /**
   * <p>Provides the <code>OptionState</code> for the Elasticsearch domain.</p>
   * @public
   */
  State: OptionState | undefined;

  /**
   * <p>Indicates whether the Elasticsearch domain is being deleted.</p>
   * @public
   */
  PendingDeletion?: boolean | undefined;
}

/**
 * <p>The configured access rules for the domain's document and search endpoints, and the current status of those rules.</p>
 * @public
 */
export interface AccessPoliciesStatus {
  /**
   * <p>The access policy configured for the Elasticsearch domain.  Access policies may be resource-based, IP-based, or IAM-based.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">
   *            Configuring Access Policies</a>for more information.</p>
   * @public
   */
  Options: string | undefined;

  /**
   * <p>The status of the access policy for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>
 *       List of limits that are specific to a given InstanceType and for each of it's
 *       <code>
 *         <a>InstanceRole</a>
 *       </code>
 *       .
 *     </p>
 * @public
 */
export interface AdditionalLimit {
  /**
   * <p>
   *       Name of Additional Limit is specific to a given InstanceType and for each of it's
   *       <code>
   *         <a>InstanceRole</a>
   *       </code>
   *       etc.
   *       <br></br>
   *       Attributes and their details:
   *       <br></br>
   *       <ul>
   *         <li>MaximumNumberOfDataNodesSupported</li>
   *         This attribute will be present in Master node only to specify how
   *         much data nodes upto which given
   *         <code>
   *           <a>ESPartitionInstanceType</a>
   *         </code>
   *         can support as master node.
   *         <li>MaximumNumberOfDataNodesWithoutMasterNode</li>
   *         This attribute will be present in Data node only to specify how much
   *         data nodes of given
   *         <code>
   *           <a>ESPartitionInstanceType</a>
   *         </code>
   *         upto which you don't need any master nodes to govern them.
   *       </ul>
   *     </p>
   * @public
   */
  LimitName?: string | undefined;

  /**
   * <p>
   *     Value for given
   *     <code>
   *       <a>AdditionalLimit$LimitName</a>
   *     </code>
   *     .
   *   </p>
   * @public
   */
  LimitValues?: string[] | undefined;
}

/**
 * <p>Specifies a key value pair for a resource tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>Specifies the <code>TagKey</code>, the name of the tag.  Tag keys must be unique for the Elasticsearch domain to which they are attached.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Specifies the <code>TagValue</code>, the value assigned to the corresponding tag key.  Tag values can be null and do not have to be unique in a tag set.  For example, you can have a key value
   *        pair in a tag set of <code>project : Trinity</code> and <code>cost-center : Trinity</code></p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain.</p>
 * @public
 */
export interface AddTagsRequest {
  /**
   * <p> Specify the <code>ARN</code> for which you want to add the tags.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p> List of <code>Tag</code> that need to be added for the Elasticsearch domain. </p>
   * @public
   */
  TagList: Tag[] | undefined;
}

/**
 * <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p>
 *        <ul>
 *            <li>Option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
 *                See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li>
 *            <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li>
 *        </ul>
 *        <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
 * @public
 */
export interface AdvancedOptionsStatus {
  /**
   * <p> Specifies the status of advanced options for the specified Elasticsearch domain.</p>
   * @public
   */
  Options: Record<string, string> | undefined;

  /**
   * <p> Specifies the status of <code>OptionStatus</code> for advanced options for the specified Elasticsearch domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Specifies the SAML Identity Provider's information.</p>
 * @public
 */
export interface SAMLIdp {
  /**
   * <p>The Metadata of the SAML application in xml format.</p>
   * @public
   */
  MetadataContent: string | undefined;

  /**
   * <p>The unique Entity ID of the application in SAML Identity Provider.</p>
   * @public
   */
  EntityId: string | undefined;
}

/**
 * <p>Describes the SAML application configured for the domain.</p>
 * @public
 */
export interface SAMLOptionsOutput {
  /**
   * <p>True if SAML is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Describes the SAML Identity Provider's information.</p>
   * @public
   */
  Idp?: SAMLIdp | undefined;

  /**
   * <p>The key used for matching the SAML Subject attribute.</p>
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * <p>The key used for matching the SAML Roles attribute.</p>
   * @public
   */
  RolesKey?: string | undefined;

  /**
   * <p>The duration, in minutes, after which a user session becomes inactive.</p>
   * @public
   */
  SessionTimeoutMinutes?: number | undefined;
}

/**
 * <p>Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled.</p>
 * @public
 */
export interface AdvancedSecurityOptions {
  /**
   * <p>True if advanced security is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>True if the internal user database is enabled.</p>
   * @public
   */
  InternalUserDatabaseEnabled?: boolean | undefined;

  /**
   * <p>Describes the SAML application configured for a domain.</p>
   * @public
   */
  SAMLOptions?: SAMLOptionsOutput | undefined;

  /**
   * <p>Specifies the Anonymous Auth Disable Date when Anonymous Auth is enabled.</p>
   * @public
   */
  AnonymousAuthDisableDate?: Date | undefined;

  /**
   * <p>True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.</p>
   * @public
   */
  AnonymousAuthEnabled?: boolean | undefined;
}

/**
 * <p>Credentials for the master user: username and password, ARN, or both.</p>
 * @public
 */
export interface MasterUserOptions {
  /**
   * <p>ARN for the master user (if IAM is enabled).</p>
   * @public
   */
  MasterUserARN?: string | undefined;

  /**
   * <p>The master user's username, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
   * @public
   */
  MasterUserName?: string | undefined;

  /**
   * <p>The master user's password, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;
}

/**
 * <p>Specifies the SAML application configuration for the domain.</p>
 * @public
 */
export interface SAMLOptionsInput {
  /**
   * <p>True if SAML is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Specifies the SAML Identity Provider's information.</p>
   * @public
   */
  Idp?: SAMLIdp | undefined;

  /**
   * <p>The SAML master username, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
   * @public
   */
  MasterUserName?: string | undefined;

  /**
   * <p>The backend role to which the SAML master user is mapped to.</p>
   * @public
   */
  MasterBackendRole?: string | undefined;

  /**
   * <p>The key to use for matching the SAML Subject attribute.</p>
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * <p>The key to use for matching the SAML Roles attribute.</p>
   * @public
   */
  RolesKey?: string | undefined;

  /**
   * <p>The duration, in minutes, after which a user session becomes inactive. Acceptable values are between 1 and 1440, and the default value is 60.</p>
   * @public
   */
  SessionTimeoutMinutes?: number | undefined;
}

/**
 * <p>Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).</p>
 * @public
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * <p>True if advanced security is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>True if the internal user database is enabled.</p>
   * @public
   */
  InternalUserDatabaseEnabled?: boolean | undefined;

  /**
   * <p>Credentials for the master user: username and password, ARN, or both.</p>
   * @public
   */
  MasterUserOptions?: MasterUserOptions | undefined;

  /**
   * <p>Specifies the SAML application configuration for the domain.</p>
   * @public
   */
  SAMLOptions?: SAMLOptionsInput | undefined;

  /**
   * <p>True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.</p>
   * @public
   */
  AnonymousAuthEnabled?: boolean | undefined;
}

/**
 * <p> Specifies the status of advanced security options for the specified Elasticsearch domain.</p>
 * @public
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * <p> Specifies advanced security options for the specified Elasticsearch domain.</p>
   * @public
   */
  Options: AdvancedSecurityOptions | undefined;

  /**
   * <p> Status of the advanced security options for the specified Elasticsearch domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>AssociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface AssociatePackageRequest {
  /**
   * <p>Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.</p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p>Name of the domain that you want to associate the package with.</p>
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
 * <p>Information on a package that is associated with a domain.</p>
 * @public
 */
export interface DomainPackageDetails {
  /**
   * <p>Internal ID of the package.</p>
   * @public
   */
  PackageID?: string | undefined;

  /**
   * <p>User specified name of the package.</p>
   * @public
   */
  PackageName?: string | undefined;

  /**
   * <p>Currently supports only TXT-DICTIONARY.</p>
   * @public
   */
  PackageType?: PackageType | undefined;

  /**
   * <p>Timestamp of the most-recent update to the association status.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>Name of the domain you've associated a package with.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>State of the association. Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.</p>
   * @public
   */
  DomainPackageStatus?: DomainPackageStatus | undefined;

  PackageVersion?: string | undefined;
  /**
   * <p>The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.</p>
   * @public
   */
  ReferencePath?: string | undefined;

  /**
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>AssociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface AssociatePackageResponse {
  /**
   * <p><code>DomainPackageDetails</code></p>
   * @public
   */
  DomainPackageDetails?: DomainPackageDetails | undefined;
}

/**
 * <p>Container for request parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation.
 *           Specifies the account to be permitted to manage VPC endpoints against the domain.</p>
 * @public
 */
export interface AuthorizeVpcEndpointAccessRequest {
  /**
   * <p>The name of the OpenSearch Service domain to provide access to.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The account ID to grant access to.</p>
   * @public
   */
  Account: string | undefined;
}

/**
 * <p>Information about an  account or service that has access to an Amazon
 *    OpenSearch Service domain through the use of an interface VPC endpoint.</p>
 * @public
 */
export interface AuthorizedPrincipal {
  /**
   * <p>The type of principal.</p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * <p>The IAM principal that is allowed access to the domain.</p>
   * @public
   */
  Principal?: string | undefined;
}

/**
 * <p>Container for response parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation.
 *           Contains the account ID and the type of the account being authorized to access the VPC endpoint.</p>
 * @public
 */
export interface AuthorizeVpcEndpointAccessResponse {
  /**
   * <p>Information about the account or service that was provided access to the
   *    domain.</p>
   * @public
   */
  AuthorizedPrincipal: AuthorizedPrincipal | undefined;
}

/**
 * <p>Container for parameters of the <code>CancelDomainConfigChange</code> operation.</p>
 * @public
 */
export interface CancelDomainConfigChangeRequest {
  /**
   * <p>Name of the OpenSearch Service domain configuration request to cancel.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>When set to <b>True</b>, returns the list of change IDs and properties that will be cancelled without actually cancelling the change.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>A property change that was cancelled for an Amazon OpenSearch Service domain.</p>
 * @public
 */
export interface CancelledChangeProperty {
  /**
   * <p>The name of the property whose change was cancelled.</p>
   * @public
   */
  PropertyName?: string | undefined;

  /**
   * <p>The pending value of the property that was cancelled. This would have been the eventual value of the property if the chance had not been cancelled.</p>
   * @public
   */
  CancelledValue?: string | undefined;

  /**
   * <p>The current value of the property, after the change was cancelled.</p>
   * @public
   */
  ActiveValue?: string | undefined;
}

/**
 * <p>Contains the details of the cancelled domain config change.</p>
 * @public
 */
export interface CancelDomainConfigChangeResponse {
  /**
   * <p>Whether or not the request was a dry run. If <b>True</b>, the changes were not actually cancelled.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The unique identifiers of the changes that were cancelled.</p>
   * @public
   */
  CancelledChangeIds?: string[] | undefined;

  /**
   * <p>The domain change properties that were cancelled.</p>
   * @public
   */
  CancelledChangeProperties?: CancelledChangeProperty[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on.</p>
 * @public
 */
export interface CancelElasticsearchServiceSoftwareUpdateRequest {
  /**
   * <p>The name of the domain that you want to stop the latest service software update on.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>The current options of an Elasticsearch domain service software options.</p>
 * @public
 */
export interface ServiceSoftwareOptions {
  /**
   * <p>The current service software version that is present on the domain.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>The new service software version if one is available.</p>
   * @public
   */
  NewVersion?: string | undefined;

  /**
   * <p><code>True</code> if you are able to update you service software version. <code>False</code> if you are not able to update your service software version. </p>
   * @public
   */
  UpdateAvailable?: boolean | undefined;

  /**
   * <p><code>True</code> if you are able to cancel your service software version update. <code>False</code> if you are not able to cancel your service software version. </p>
   * @public
   */
  Cancellable?: boolean | undefined;

  /**
   * <p>The status of your service software update. This field can take the following values: <code>ELIGIBLE</code>, <code>PENDING_UPDATE</code>, <code>IN_PROGRESS</code>, <code>COMPLETED</code>, and <code>NOT_ELIGIBLE</code>.</p>
   * @public
   */
  UpdateStatus?: DeploymentStatus | undefined;

  /**
   * <p>The description of the <code>UpdateStatus</code>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.</p>
   * @public
   */
  AutomatedUpdateDate?: Date | undefined;

  /**
   * <p><code>True</code> if a service software is never automatically updated. <code>False</code> if a service software is automatically updated after <code>AutomatedUpdateDate</code>.  </p>
   * @public
   */
  OptionalDeployment?: boolean | undefined;
}

/**
 * <p>The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.</p>
 * @public
 */
export interface CancelElasticsearchServiceSoftwareUpdateResponse {
  /**
   * <p>The current status of the Elasticsearch service software update.</p>
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions | undefined;
}

/**
 * <p>Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
 * @public
 */
export interface Duration {
  /**
   * <p> Integer to specify the value of a maintenance schedule duration. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   * @public
   */
  Value?: number | undefined;

  /**
   * <p>Specifies the unit of a maintenance schedule duration. Valid value is HOURS. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   * @public
   */
  Unit?: TimeUnit | undefined;
}

/**
 * <p>Specifies Auto-Tune maitenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
 * @public
 */
export interface AutoTuneMaintenanceSchedule {
  /**
   * <p>Specifies timestamp at which Auto-Tune maintenance schedule start. </p>
   * @public
   */
  StartAt?: Date | undefined;

  /**
   * <p>Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   * @public
   */
  Duration?: Duration | undefined;

  /**
   * <p>Specifies cron expression for a recurring maintenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   * @public
   */
  CronExpressionForRecurrence?: string | undefined;
}

/**
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.</p>
 * @public
 */
export interface AutoTuneOptionsInput {
  /**
   * <p>Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. </p>
   * @public
   */
  DesiredState?: AutoTuneDesiredState | undefined;

  /**
   * <p>Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   * @public
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[] | undefined;
}

/**
 * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
 * @public
 */
export interface CognitoOptions {
  /**
   * <p>Specifies the option to enable Cognito for Kibana authentication.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Specifies the Cognito user pool ID for Kibana authentication.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>Specifies the Cognito identity pool ID for Kibana authentication.</p>
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * <p>Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * <p>Options to configure endpoint for the Elasticsearch domain.</p>
 * @public
 */
export interface DomainEndpointOptions {
  /**
   * <p>Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.</p>
   * @public
   */
  EnforceHTTPS?: boolean | undefined;

  /**
   * <p>Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   *         <br></br> It can be one of the following values:
   *         <ul>
   *             <li><b>Policy-Min-TLS-1-0-2019-07: </b> TLS security policy that supports TLS version 1.0 to TLS version 1.2</li>
   *             <li><b>Policy-Min-TLS-1-2-2019-07: </b> TLS security policy that supports only TLS version 1.2</li>
   *             <li><b>Policy-Min-TLS-1-2-PFS-2023-10: </b> TLS security policy that supports TLS version 1.2 to TLS version 1.3 with perfect forward secrecy cipher suites</li>
   *         </ul>
   *     </p>
   * @public
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | undefined;

  /**
   * <p>Specify if custom endpoint should be enabled for the Elasticsearch domain.</p>
   * @public
   */
  CustomEndpointEnabled?: boolean | undefined;

  /**
   * <p>Specify the fully qualified domain for your custom endpoint.</p>
   * @public
   */
  CustomEndpoint?: string | undefined;

  /**
   * <p>Specify ACM certificate ARN for your custom endpoint.</p>
   * @public
   */
  CustomEndpointCertificateArn?: string | undefined;
}

/**
 * <p>Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.</p>
 * @public
 */
export interface EBSOptions {
  /**
   * <p>Specifies whether EBS-based storage is enabled.</p>
   * @public
   */
  EBSEnabled?: boolean | undefined;

  /**
   * <p> Specifies the volume type for EBS-based storage.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p> Integer to specify the size of an EBS volume.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>Specifies the IOPS for Provisioned IOPS And GP3 EBS volume (SSD).</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Specifies the Throughput for GP3 EBS volume (SSD).</p>
   * @public
   */
  Throughput?: number | undefined;
}

/**
 * <p>Specifies the configuration for cold storage options such as enabled</p>
 * @public
 */
export interface ColdStorageOptions {
  /**
   * <p>Enable cold storage option. Accepted values true or false</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones.</p>
 * @public
 */
export interface ZoneAwarenessConfig {
  /**
   * <p>An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled</p>
   * @public
   */
  AvailabilityZoneCount?: number | undefined;
}

/**
 * <p>Specifies the configuration for the domain cluster, such as the type and number of instances.</p>
 * @public
 */
export interface ElasticsearchClusterConfig {
  /**
   * <p>The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.</p>
   * @public
   */
  InstanceType?: ESPartitionInstanceType | undefined;

  /**
   * <p>The number of instances in the specified domain cluster.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>A boolean value to indicate whether a dedicated master node is enabled.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes" target="_blank">About Dedicated Master Nodes</a> for more information.</p>
   * @public
   */
  DedicatedMasterEnabled?: boolean | undefined;

  /**
   * <p>A boolean value to indicate whether zone awareness is enabled.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness" target="_blank">About Zone Awareness</a> for more information.</p>
   * @public
   */
  ZoneAwarenessEnabled?: boolean | undefined;

  /**
   * <p>Specifies the zone awareness configuration for a domain when zone awareness is enabled.</p>
   * @public
   */
  ZoneAwarenessConfig?: ZoneAwarenessConfig | undefined;

  /**
   * <p>The instance type for a dedicated master node.</p>
   * @public
   */
  DedicatedMasterType?: ESPartitionInstanceType | undefined;

  /**
   * <p>Total number of dedicated master nodes, active and on standby, for the cluster.</p>
   * @public
   */
  DedicatedMasterCount?: number | undefined;

  /**
   * <p>True to enable warm storage.</p>
   * @public
   */
  WarmEnabled?: boolean | undefined;

  /**
   * <p>The instance type for the Elasticsearch cluster's warm nodes.</p>
   * @public
   */
  WarmType?: ESWarmPartitionInstanceType | undefined;

  /**
   * <p>The number of warm nodes in the cluster.</p>
   * @public
   */
  WarmCount?: number | undefined;

  /**
   * <p>Specifies the <code>ColdStorageOptions</code> config for Elasticsearch Domain</p>
   * @public
   */
  ColdStorageOptions?: ColdStorageOptions | undefined;
}

/**
 * <p>Specifies the Encryption At Rest Options.</p>
 * @public
 */
export interface EncryptionAtRestOptions {
  /**
   * <p>Specifies the option to enable Encryption At Rest.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p> Specifies the KMS Key ID for Encryption At Rest options.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>Log Publishing option that is set for given domain.
 *        <br></br>Attributes and their details:
 *      <ul>
 *        <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li>
 *        <li>Enabled: Whether the log publishing for given log type is enabled or not</li>
 *      </ul>
 *    </p>
 * @public
 */
export interface LogPublishingOption {
  /**
   * <p>ARN of the Cloudwatch log group to which log needs to be published.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * <p> Specifies whether given log publishing option is enabled or not.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Specifies the node-to-node encryption options.</p>
 * @public
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * <p>Specify true to enable node-to-node encryption.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
 * @public
 */
export interface SnapshotOptions {
  /**
   * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
   * @public
   */
  AutomatedSnapshotStartHour?: number | undefined;
}

/**
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 * @public
 */
export interface VPCOptions {
  /**
   * <p>Specifies the subnets for VPC endpoint.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>Specifies the security groups for VPC endpoint.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateElasticsearchDomainRequest {
  /**
   * <p>The name of the Elasticsearch domain that you are creating. Domain names are unique across the domains owned by an account within an AWS region. Domain names must start with a lowercase letter and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information,
   *           see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
   * @public
   */
  ElasticsearchVersion?: string | undefined;

  /**
   * <p>Configuration options for an Elasticsearch domain. Specifies the instance type and number of instances in the domain cluster. </p>
   * @public
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig | undefined;

  /**
   * <p>Options to enable, disable and specify the type and size of EBS storage volumes. </p>
   * @public
   */
  EBSOptions?: EBSOptions | undefined;

  /**
   * <p> IAM access policy as a JSON-formatted string.</p>
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * <p>Option to set time, in UTC format, of the daily automated snapshot. Default value is 0 hours. </p>
   * @public
   */
  SnapshotOptions?: SnapshotOptions | undefined;

  /**
   * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>
   * @public
   */
  VPCOptions?: VPCOptions | undefined;

  /**
   * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * <p>Specifies the Encryption At Rest Options.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * <p>Specifies the NodeToNodeEncryptionOptions.</p>
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

  /**
   * <p> Option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
   *           See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</p>
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * <p>Options to specify configuration that will be applied to the domain endpoint.</p>
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * <p>Specifies advanced security options.</p>
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput | undefined;

  /**
   * <p>Specifies Auto-Tune options.</p>
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsInput | undefined;

  /**
   * <p>A list of <code>Tag</code> added during domain creation.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.</p>
 * @public
 */
export interface AutoTuneOptionsOutput {
  /**
   * <p>Specifies the <code>AutoTuneState</code> for the Elasticsearch domain.</p>
   * @public
   */
  State?: AutoTuneState | undefined;

  /**
   * <p>Specifies the error message while enabling or disabling the Auto-Tune.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Specifies change details of the domain configuration change.</p>
 * @public
 */
export interface ChangeProgressDetails {
  /**
   * <p>The unique change identifier associated with a specific domain configuration change.</p>
   * @public
   */
  ChangeId?: string | undefined;

  /**
   * <p>Contains an optional message associated with the domain configuration change.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The current status of the configuration change.</p>
   * @public
   */
  ConfigChangeStatus?: ConfigChangeStatus | undefined;

  /**
   * <p>The time that the configuration change was initiated, in Universal Coordinated Time (UTC).</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The last time that the configuration change was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The IAM principal who initiated the configuration change.</p>
   * @public
   */
  InitiatedBy?: InitiatedBy | undefined;
}

/**
 * <p>Information about the domain properties that are currently being modified.</p>
 * @public
 */
export interface ModifyingProperties {
  /**
   * <p>The name of the property that is currently being modified.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current value of the domain property that is being modified.</p>
   * @public
   */
  ActiveValue?: string | undefined;

  /**
   * <p>The value that the property that is currently being modified will eventually have.</p>
   * @public
   */
  PendingValue?: string | undefined;

  /**
   * <p>The type of value that is currently being modified. Properties can have two types:</p>
   *     <ul>
   *       <li><b>PLAIN_TEXT</b>: Contain direct values such as "1", "True", or "c5.large.search".</li>
   *       <li><b>STRINGIFIED_JSON</b>: Contain content in JSON format, such as \{"Enabled":"True"\}".</li>
   *     </ul>
   * @public
   */
  ValueType?: PropertyValueType | undefined;
}

/**
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 * @public
 */
export interface VPCDerivedInfo {
  /**
   * <p>The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
   * @public
   */
  VPCId?: string | undefined;

  /**
   * <p>Specifies the subnets for VPC endpoint.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>Specifies the security groups for VPC endpoint.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * <p>The current status of an Elasticsearch domain.</p>
 * @public
 */
export interface ElasticsearchDomainStatus {
  /**
   * <p>The unique identifier for the specified Elasticsearch domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) of an Elasticsearch domain.  See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>The domain creation status. <code>True</code> if the creation of an Elasticsearch domain is complete. <code>False</code> if domain creation is still in progress.</p>
   * @public
   */
  Created?: boolean | undefined;

  /**
   * <p>The domain deletion status. <code>True</code> if a delete request has been received for the domain but resource cleanup is still in progress. <code>False</code> if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.</p>
   * @public
   */
  Deleted?: boolean | undefined;

  /**
   * <p>The Elasticsearch domain endpoint that you use to submit index and search requests.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example <code>key, value</code>: <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.</p>
   * @public
   */
  Endpoints?: Record<string, string> | undefined;

  /**
   * <p>The status of the Elasticsearch domain configuration. <code>True</code> if Amazon Elasticsearch Service is processing configuration changes. <code>False</code> if the configuration is active.</p>
   * @public
   */
  Processing?: boolean | undefined;

  /**
   * <p>The status of an Elasticsearch domain version upgrade. <code>True</code> if Amazon Elasticsearch Service is undergoing a version upgrade. <code>False</code> if the configuration is active.</p>
   * @public
   */
  UpgradeProcessing?: boolean | undefined;

  ElasticsearchVersion?: string | undefined;
  /**
   * <p>The type and number of instances in the domain cluster.</p>
   * @public
   */
  ElasticsearchClusterConfig: ElasticsearchClusterConfig | undefined;

  /**
   * <p>The <code>EBSOptions</code> for the specified domain.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a> for more information.</p>
   * @public
   */
  EBSOptions?: EBSOptions | undefined;

  /**
   * <p> IAM access policy as a JSON-formatted string.</p>
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * <p>Specifies the status of the <code>SnapshotOptions</code></p>
   * @public
   */
  SnapshotOptions?: SnapshotOptions | undefined;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   * @public
   */
  VPCOptions?: VPCDerivedInfo | undefined;

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * <p> Specifies the status of the <code>EncryptionAtRestOptions</code>.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * <p>Specifies the status of the <code>NodeToNodeEncryptionOptions</code>.</p>
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

  /**
   * <p>Specifies the status of the <code>AdvancedOptions</code></p>
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * <p>Log publishing options for the given domain.</p>
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * <p>The current status of the Elasticsearch domain's service software.</p>
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions | undefined;

  /**
   * <p>The current status of the Elasticsearch domain's endpoint options.</p>
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * <p>The current status of the Elasticsearch domain's advanced security options.</p>
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptions | undefined;

  /**
   * <p>The current status of the Elasticsearch domain's Auto-Tune options.</p>
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsOutput | undefined;

  /**
   * <p>Specifies change details of the domain configuration change.</p>
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;

  /**
   * <p>The status of any changes that are currently in progress for the domain.</p>
   * @public
   */
  DomainProcessingStatus?: DomainProcessingStatusType | undefined;

  /**
   * <p>Information about the domain properties that are currently being modified.</p>
   * @public
   */
  ModifyingProperties?: ModifyingProperties[] | undefined;
}

/**
 * <p>The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain.</p>
 * @public
 */
export interface CreateElasticsearchDomainResponse {
  /**
   * <p>The status of the newly created Elasticsearch domain. </p>
   * @public
   */
  DomainStatus?: ElasticsearchDomainStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation.</p>
 * @public
 */
export interface CreateOutboundCrossClusterSearchConnectionRequest {
  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   * @public
   */
  SourceDomainInfo: DomainInformation | undefined;

  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   * @public
   */
  DestinationDomainInfo: DomainInformation | undefined;

  /**
   * <p>Specifies the connection alias that will be used by the customer for this connection.</p>
   * @public
   */
  ConnectionAlias: string | undefined;
}

/**
 * <p>Specifies the connection status of an outbound cross-cluster search connection.</p>
 * @public
 */
export interface OutboundCrossClusterSearchConnectionStatus {
  /**
   * <p>The state code for outbound connection. This can be one of the following:</p>
   *     <ul>
   *       <li>VALIDATING: The outbound connection request is being validated.</li>
   *       <li>VALIDATION_FAILED: Validation failed for the connection request.</li>
   *       <li>PENDING_ACCEPTANCE: Outbound connection request is validated and is not yet accepted by destination domain owner.</li>
   *       <li>PROVISIONING: Outbound connection request is in process.</li>
   *       <li>ACTIVE: Outbound connection is active and ready to use.</li>
   *       <li>REJECTED: Outbound connection request is rejected by destination domain owner.</li>
   *       <li>DELETING: Outbound connection deletion is in progress.</li>
   *       <li>DELETED: Outbound connection is deleted and cannot be used further.</li>
   *     </ul>
   * @public
   */
  StatusCode?: OutboundCrossClusterSearchConnectionStatusCode | undefined;

  /**
   * <p>Specifies verbose information for the outbound connection status.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection.</p>
 * @public
 */
export interface CreateOutboundCrossClusterSearchConnectionResponse {
  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   * @public
   */
  SourceDomainInfo?: DomainInformation | undefined;

  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   * @public
   */
  DestinationDomainInfo?: DomainInformation | undefined;

  /**
   * <p>Specifies the connection alias provided during the create connection request.</p>
   * @public
   */
  ConnectionAlias?: string | undefined;

  /**
   * <p>Specifies the <code><a>OutboundCrossClusterSearchConnectionStatus</a></code> for the newly created connection.</p>
   * @public
   */
  ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus | undefined;

  /**
   * <p>Unique id for the created outbound connection, which is used for subsequent operations on connection.</p>
   * @public
   */
  CrossClusterSearchConnectionId?: string | undefined;
}

/**
 * <p>The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code></p>
 * @public
 */
export interface PackageSource {
  /**
   * <p>Name of the bucket containing the package.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>Key (file name) of the package.</p>
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>CreatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface CreatePackageRequest {
  /**
   * <p>Unique identifier for the package.</p>
   * @public
   */
  PackageName: string | undefined;

  /**
   * <p>Type of package. Currently supports only TXT-DICTIONARY.</p>
   * @public
   */
  PackageType: PackageType | undefined;

  /**
   * <p>Description of the package.</p>
   * @public
   */
  PackageDescription?: string | undefined;

  /**
   * <p>The customer S3 location <code>PackageSource</code> for importing the package.</p>
   * @public
   */
  PackageSource: PackageSource | undefined;
}

/**
 * <p>Basic information about a package.</p>
 * @public
 */
export interface PackageDetails {
  /**
   * <p>Internal ID of the package.</p>
   * @public
   */
  PackageID?: string | undefined;

  /**
   * <p>User specified name of the package.</p>
   * @public
   */
  PackageName?: string | undefined;

  /**
   * <p>Currently supports only TXT-DICTIONARY.</p>
   * @public
   */
  PackageType?: PackageType | undefined;

  /**
   * <p>User-specified description of the package.</p>
   * @public
   */
  PackageDescription?: string | undefined;

  /**
   * <p>Current state of the package. Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED</p>
   * @public
   */
  PackageStatus?: PackageStatus | undefined;

  /**
   * <p>Timestamp which tells creation date of the package.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  LastUpdatedAt?: Date | undefined;
  AvailablePackageVersion?: string | undefined;
  /**
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>CreatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface CreatePackageResponse {
  /**
   * <p>Information about the package <code>PackageDetails</code>.</p>
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>CreateVpcEndpointRequest</a></code> operation.</p>
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain to grant access to.</p>
   * @public
   */
  DomainArn: string | undefined;

  /**
   * <p>Options to specify the subnets and security groups for the endpoint.</p>
   * @public
   */
  VpcOptions: VPCOptions | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>The connection endpoint for connecting to an Amazon OpenSearch Service domain through a
 *    proxy.</p>
 * @public
 */
export interface VpcEndpoint {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The creator of the endpoint.</p>
   * @public
   */
  VpcEndpointOwner?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain associated with the endpoint.</p>
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * <p>Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC
   *    endpoint.</p>
   * @public
   */
  VpcOptions?: VPCDerivedInfo | undefined;

  /**
   * <p>The current status of the endpoint.</p>
   * @public
   */
  Status?: VpcEndpointStatus | undefined;

  /**
   * <p>The connection endpoint ID for connecting to the domain.</p>
   * @public
   */
  Endpoint?: string | undefined;
}

/**
 * <p>Container for response parameters to the <code><a>CreateVpcEndpoint</a></code> operation. Contains the configuration and status of the VPC Endpoint being created.</p>
 * @public
 */
export interface CreateVpcEndpointResponse {
  /**
   * <p>Information about the newly created VPC endpoint.</p>
   * @public
   */
  VpcEndpoint: VpcEndpoint | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete.</p>
 * @public
 */
export interface DeleteElasticsearchDomainRequest {
  /**
   * <p>The name of the Elasticsearch domain that you want to permanently delete.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.</p>
 * @public
 */
export interface DeleteElasticsearchDomainResponse {
  /**
   * <p>The status of the Elasticsearch domain being deleted.</p>
   * @public
   */
  DomainStatus?: ElasticsearchDomainStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation.</p>
 * @public
 */
export interface DeleteInboundCrossClusterSearchConnectionRequest {
  /**
   * <p>The id of the inbound connection that you want to permanently delete.</p>
   * @public
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * <p>The result of a <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted inbound connection.</p>
 * @public
 */
export interface DeleteInboundCrossClusterSearchConnectionResponse {
  /**
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of deleted inbound connection. </p>
   * @public
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation.</p>
 * @public
 */
export interface DeleteOutboundCrossClusterSearchConnectionRequest {
  /**
   * <p>The id of the outbound connection that you want to permanently delete.</p>
   * @public
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * <p>Specifies details of an outbound connection.</p>
 * @public
 */
export interface OutboundCrossClusterSearchConnection {
  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   * @public
   */
  SourceDomainInfo?: DomainInformation | undefined;

  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   * @public
   */
  DestinationDomainInfo?: DomainInformation | undefined;

  /**
   * <p>Specifies the connection id for the outbound cross-cluster search connection.</p>
   * @public
   */
  CrossClusterSearchConnectionId?: string | undefined;

  /**
   * <p>Specifies the connection alias for the outbound cross-cluster search connection.</p>
   * @public
   */
  ConnectionAlias?: string | undefined;

  /**
   * <p>Specifies the <code><a>OutboundCrossClusterSearchConnectionStatus</a></code> for the outbound connection.</p>
   * @public
   */
  ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus | undefined;
}

/**
 * <p>The result of a <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted outbound connection.</p>
 * @public
 */
export interface DeleteOutboundCrossClusterSearchConnectionResponse {
  /**
   * <p>Specifies the <code><a>OutboundCrossClusterSearchConnection</a></code> of deleted outbound connection. </p>
   * @public
   */
  CrossClusterSearchConnection?: OutboundCrossClusterSearchConnection | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>DeletePackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface DeletePackageRequest {
  /**
   * <p>Internal ID of the package that you want to delete. Use <code>DescribePackages</code> to find this value.</p>
   * @public
   */
  PackageID: string | undefined;
}

/**
 * <p>
 *       Container for response parameters to
 *       <code>
 *         <a>DeletePackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface DeletePackageResponse {
  /**
   * <p><code>PackageDetails</code></p>
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * <p>Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.</p>
 * @public
 */
export interface DeleteVpcEndpointRequest {
  /**
   * <p>The unique identifier of the endpoint to be deleted.</p>
   * @public
   */
  VpcEndpointId: string | undefined;
}

/**
 * <p>Summary information for an Amazon OpenSearch Service-managed VPC endpoint.</p>
 * @public
 */
export interface VpcEndpointSummary {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The creator of the endpoint.</p>
   * @public
   */
  VpcEndpointOwner?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain associated with the endpoint.</p>
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * <p>The current status of the endpoint.</p>
   * @public
   */
  Status?: VpcEndpointStatus | undefined;
}

/**
 * <p>Container for response parameters to the <code><a>DeleteVpcEndpoint</a></code> operation. Contains the summarized detail of the VPC Endpoint being deleted.</p>
 * @public
 */
export interface DeleteVpcEndpointResponse {
  /**
   * <p>Information about the deleted endpoint, including its current status (<code>DELETING</code>
   *    or <code>DELETE_FAILED</code>).</p>
   * @public
   */
  VpcEndpointSummary: VpcEndpointSummary | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation.</p>
 * @public
 */
export interface DescribeDomainAutoTunesRequest {
  /**
   * <p>Specifies the domain name for which you want Auto-Tune action details.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 * @public
 */
export interface ScheduledAutoTuneDetails {
  /**
   * <p>Specifies timestamp for the Auto-Tune action scheduled for the domain. </p>
   * @public
   */
  Date?: Date | undefined;

  /**
   * <p>Specifies Auto-Tune action type. Valid values are JVM_HEAP_SIZE_TUNING and JVM_YOUNG_GEN_TUNING. </p>
   * @public
   */
  ActionType?: ScheduledAutoTuneActionType | undefined;

  /**
   * <p>Specifies Auto-Tune action description. </p>
   * @public
   */
  Action?: string | undefined;

  /**
   * <p>Specifies Auto-Tune action severity. Valid values are LOW, MEDIUM and HIGH. </p>
   * @public
   */
  Severity?: ScheduledAutoTuneSeverityType | undefined;
}

/**
 * <p>Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 * @public
 */
export interface AutoTuneDetails {
  /**
   * <p>Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
   * @public
   */
  ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails | undefined;
}

/**
 * <p>Specifies Auto-Tune type and Auto-Tune action details. </p>
 * @public
 */
export interface AutoTune {
  /**
   * <p>Specifies Auto-Tune type. Valid value is SCHEDULED_ACTION. </p>
   * @public
   */
  AutoTuneType?: AutoTuneType | undefined;

  /**
   * <p>Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
   * @public
   */
  AutoTuneDetails?: AutoTuneDetails | undefined;
}

/**
 * <p>The result of <code>DescribeDomainAutoTunes</code> request. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 * @public
 */
export interface DescribeDomainAutoTunesResponse {
  /**
   * <p>Specifies the list of setting adjustments that Auto-Tune has made to the domain. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   * @public
   */
  AutoTunes?: AutoTune[] | undefined;

  /**
   * <p>Specifies an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainChangeProgress</code> operation. Specifies the
 *         domain name and optional change specific identity for which you want progress information.
 *       </p>
 * @public
 */
export interface DescribeDomainChangeProgressRequest {
  /**
   * <p>The domain you want to get the progress information about.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The specific change ID for which you want to get progress information. This is an optional parameter.
   *         If omitted, the service returns information about the most recent configuration change.
   *       </p>
   * @public
   */
  ChangeId?: string | undefined;
}

/**
 * <p>A progress stage details of a specific domain configuration change.</p>
 * @public
 */
export interface ChangeProgressStage {
  /**
   * <p>The name of the specific progress stage.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The overall status of a specific progress stage.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The description of the progress stage.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The last updated timestamp of the progress stage.</p>
   * @public
   */
  LastUpdated?: Date | undefined;
}

/**
 * <p>The progress details of a specific domain configuration change.</p>
 * @public
 */
export interface ChangeProgressStatusDetails {
  /**
   * <p>The unique change identifier associated with a specific domain configuration change.</p>
   * @public
   */
  ChangeId?: string | undefined;

  /**
   * <p>The time at which the configuration change is made on the domain.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The overall status of the domain configuration change. This field can take the following values: <code>PENDING</code>, <code>PROCESSING</code>, <code>COMPLETED</code> and <code>FAILED</code></p>
   * @public
   */
  Status?: OverallChangeStatus | undefined;

  /**
   * <p>The list of properties involved in the domain configuration change that are still in pending.</p>
   * @public
   */
  PendingProperties?: string[] | undefined;

  /**
   * <p>The list of properties involved in the domain configuration change that are completed.</p>
   * @public
   */
  CompletedProperties?: string[] | undefined;

  /**
   * <p>The total number of stages required for the configuration change.</p>
   * @public
   */
  TotalNumberOfStages?: number | undefined;

  /**
   * <p>The specific stages that the domain is going through to perform the configuration change.</p>
   * @public
   */
  ChangeProgressStages?: ChangeProgressStage[] | undefined;

  /**
   * <p>The current status of the configuration change.</p>
   * @public
   */
  ConfigChangeStatus?: ConfigChangeStatus | undefined;

  /**
   * <p>The last time that the status of the configuration change was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The IAM principal who initiated the configuration change.</p>
   * @public
   */
  InitiatedBy?: InitiatedBy | undefined;
}

/**
 * <p>The result of a <code>DescribeDomainChangeProgress</code> request. Contains the progress information of
 *         the requested domain change.
 *       </p>
 * @public
 */
export interface DescribeDomainChangeProgressResponse {
  /**
   * <p>Progress information for the configuration change that is requested in the <code>DescribeDomainChangeProgress</code> request.
   *       </p>
   * @public
   */
  ChangeProgressStatus?: ChangeProgressStatusDetails | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation.</p>
 * @public
 */
export interface DescribeElasticsearchDomainRequest {
  /**
   * <p>The name of the Elasticsearch domain for which you want information.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request.</p>
 * @public
 */
export interface DescribeElasticsearchDomainResponse {
  /**
   * <p>The current status of the Elasticsearch domain.</p>
   * @public
   */
  DomainStatus: ElasticsearchDomainStatus | undefined;
}

/**
 * <p> Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information.</p>
 * @public
 */
export interface DescribeElasticsearchDomainConfigRequest {
  /**
   * <p>The Elasticsearch domain that you want to get information about.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules.</p>
 * @public
 */
export interface AutoTuneOptions {
  /**
   * <p>Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. </p>
   * @public
   */
  DesiredState?: AutoTuneDesiredState | undefined;

  /**
   * <p>Specifies the rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK, DEFAULT_ROLLBACK. </p>
   * @public
   */
  RollbackOnDisable?: RollbackOnDisable | undefined;

  /**
   * <p>Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   * @public
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[] | undefined;
}

/**
 * <p>Provides the current status of the Auto-Tune options. </p>
 * @public
 */
export interface AutoTuneStatus {
  /**
   * <p>Timestamp which tells Auto-Tune options creation date .</p>
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * <p>Timestamp which tells Auto-Tune options last updated time.</p>
   * @public
   */
  UpdateDate: Date | undefined;

  /**
   * <p>Specifies the Auto-Tune options latest version.</p>
   * @public
   */
  UpdateVersion?: number | undefined;

  /**
   * <p>Specifies the <code>AutoTuneState</code> for the Elasticsearch domain.</p>
   * @public
   */
  State: AutoTuneState | undefined;

  /**
   * <p>Specifies the error message while enabling or disabling the Auto-Tune options.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>Indicates whether the Elasticsearch domain is being deleted.</p>
   * @public
   */
  PendingDeletion?: boolean | undefined;
}

/**
 * <p> Specifies the status of Auto-Tune options for the specified Elasticsearch domain.</p>
 * @public
 */
export interface AutoTuneOptionsStatus {
  /**
   * <p> Specifies Auto-Tune options for the specified Elasticsearch domain.</p>
   * @public
   */
  Options?: AutoTuneOptions | undefined;

  /**
   * <p> Specifies Status of the Auto-Tune options for the specified Elasticsearch domain.</p>
   * @public
   */
  Status?: AutoTuneStatus | undefined;
}

/**
 * <p>Status of the Cognito options for the specified Elasticsearch domain.</p>
 * @public
 */
export interface CognitoOptionsStatus {
  /**
   * <p>Specifies the Cognito options for the specified Elasticsearch domain.</p>
   * @public
   */
  Options: CognitoOptions | undefined;

  /**
   * <p>Specifies the status of the Cognito options for the specified Elasticsearch domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The configured endpoint options for the domain and their current status.</p>
 * @public
 */
export interface DomainEndpointOptionsStatus {
  /**
   * <p>Options to configure endpoint for the Elasticsearch domain.</p>
   * @public
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * <p>The status of the endpoint options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p> Status of the EBS options for the specified Elasticsearch domain.</p>
 * @public
 */
export interface EBSOptionsStatus {
  /**
   * <p> Specifies the EBS options for the specified Elasticsearch domain.</p>
   * @public
   */
  Options: EBSOptions | undefined;

  /**
   * <p> Specifies the status of the EBS options for the specified Elasticsearch domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p> Specifies the configuration status for the specified Elasticsearch domain.</p>
 * @public
 */
export interface ElasticsearchClusterConfigStatus {
  /**
   * <p> Specifies the cluster configuration for the specified Elasticsearch domain.</p>
   * @public
   */
  Options: ElasticsearchClusterConfig | undefined;

  /**
   * <p> Specifies the status of the configuration for the specified Elasticsearch domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p> Status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
 * @public
 */
export interface ElasticsearchVersionStatus {
  /**
   * <p> Specifies the Elasticsearch version for the specified Elasticsearch domain.</p>
   * @public
   */
  Options: string | undefined;

  /**
   * <p> Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p> Status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
 * @public
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * <p> Specifies the Encryption At Rest options for the specified Elasticsearch domain.</p>
   * @public
   */
  Options: EncryptionAtRestOptions | undefined;

  /**
   * <p> Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The configured log publishing options for the domain and their current status.</p>
 * @public
 */
export interface LogPublishingOptionsStatus {
  /**
   * <p>The log publishing options configured for the Elasticsearch domain.</p>
   * @public
   */
  Options?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * <p>The status of the log publishing options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   * @public
   */
  Status?: OptionStatus | undefined;
}

/**
 * <p>Status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
 * @public
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * <p>Specifies the node-to-node encryption options for the specified Elasticsearch domain.</p>
   * @public
   */
  Options: NodeToNodeEncryptionOptions | undefined;

  /**
   * <p>Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Status of a daily automated snapshot.</p>
 * @public
 */
export interface SnapshotOptionsStatus {
  /**
   * <p>Specifies the daily snapshot options specified for the Elasticsearch domain.</p>
   * @public
   */
  Options: SnapshotOptions | undefined;

  /**
   * <p>Specifies the status of a daily automated snapshot.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p> Status of the VPC options for the specified Elasticsearch domain.</p>
 * @public
 */
export interface VPCDerivedInfoStatus {
  /**
   * <p> Specifies the VPC options for the specified Elasticsearch domain.</p>
   * @public
   */
  Options: VPCDerivedInfo | undefined;

  /**
   * <p> Specifies the status of the VPC options for the specified Elasticsearch domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The configuration of an Elasticsearch domain.</p>
 * @public
 */
export interface ElasticsearchDomainConfig {
  /**
   * <p>String of format X.Y to specify version for the Elasticsearch domain.</p>
   * @public
   */
  ElasticsearchVersion?: ElasticsearchVersionStatus | undefined;

  /**
   * <p>Specifies the <code>ElasticsearchClusterConfig</code> for the Elasticsearch domain.</p>
   * @public
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus | undefined;

  /**
   * <p>Specifies the <code>EBSOptions</code> for the Elasticsearch domain.</p>
   * @public
   */
  EBSOptions?: EBSOptionsStatus | undefined;

  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   * @public
   */
  AccessPolicies?: AccessPoliciesStatus | undefined;

  /**
   * <p>Specifies the <code>SnapshotOptions</code> for the Elasticsearch domain.</p>
   * @public
   */
  SnapshotOptions?: SnapshotOptionsStatus | undefined;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   * @public
   */
  VPCOptions?: VPCDerivedInfoStatus | undefined;

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   * @public
   */
  CognitoOptions?: CognitoOptionsStatus | undefined;

  /**
   * <p>Specifies the <code>EncryptionAtRestOptions</code> for the Elasticsearch domain.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus | undefined;

  /**
   * <p>Specifies the <code>NodeToNodeEncryptionOptions</code> for the Elasticsearch domain.</p>
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus | undefined;

  /**
   * <p>Specifies the <code>AdvancedOptions</code> for the domain.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuring Advanced Options</a> for more information.</p>
   * @public
   */
  AdvancedOptions?: AdvancedOptionsStatus | undefined;

  /**
   * <p>Log publishing options for the given domain.</p>
   * @public
   */
  LogPublishingOptions?: LogPublishingOptionsStatus | undefined;

  /**
   * <p>Specifies the <code>DomainEndpointOptions</code> for the Elasticsearch domain.</p>
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus | undefined;

  /**
   * <p>Specifies <code>AdvancedSecurityOptions</code> for the domain. </p>
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus | undefined;

  /**
   * <p>Specifies <code>AutoTuneOptions</code> for the domain. </p>
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsStatus | undefined;

  /**
   * <p>Specifies change details of the domain configuration change.</p>
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;

  /**
   * <p>Information about the domain properties that are currently being modified.</p>
   * @public
   */
  ModifyingProperties?: ModifyingProperties[] | undefined;
}

/**
 * <p>The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain.</p>
 * @public
 */
export interface DescribeElasticsearchDomainConfigResponse {
  /**
   * <p>The configuration information of the domain requested in the <code>DescribeElasticsearchDomainConfig</code> request.</p>
   * @public
   */
  DomainConfig: ElasticsearchDomainConfig | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains.</p>
 * @public
 */
export interface DescribeElasticsearchDomainsRequest {
  /**
   * <p>The Elasticsearch domains for which you want information.</p>
   * @public
   */
  DomainNames: string[] | undefined;
}

/**
 * <p>The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account.</p>
 * @public
 */
export interface DescribeElasticsearchDomainsResponse {
  /**
   * <p>The status of the domains requested in the <code>DescribeElasticsearchDomains</code> request.</p>
   * @public
   */
  DomainStatusList: ElasticsearchDomainStatus[] | undefined;
}

/**
 * <p>
 *       Container for the parameters to
 *       <code>
 *         <a>DescribeElasticsearchInstanceTypeLimits</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface DescribeElasticsearchInstanceTypeLimitsRequest {
  /**
   * <p>
   *       DomainName represents the name of the Domain that we are trying to
   *       modify. This should be present only if we are
   *       querying for Elasticsearch
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       for existing domain.
   *     </p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>
   *       The instance type for an Elasticsearch cluster for which Elasticsearch
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       are needed.
   *     </p>
   * @public
   */
  InstanceType: ESPartitionInstanceType | undefined;

  /**
   * <p>
   *       Version of Elasticsearch for which
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       are needed.
   *     </p>
   * @public
   */
  ElasticsearchVersion: string | undefined;
}

/**
 * <p>
 *       InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for
 *       given InstanceType.
 *     </p>
 * @public
 */
export interface InstanceCountLimits {
  /**
   * <p>
   *       Minimum number of Instances that can be instantiated for given InstanceType.
   *     </p>
   * @public
   */
  MinimumInstanceCount?: number | undefined;

  /**
   * <p>
   *       Maximum number of Instances that can be instantiated for given InstanceType.
   *     </p>
   * @public
   */
  MaximumInstanceCount?: number | undefined;
}

/**
 * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
 *     </p>
 * @public
 */
export interface InstanceLimits {
  /**
   * <p>
   *       InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for
   *       given InstanceType.
   *     </p>
   * @public
   */
  InstanceCountLimits?: InstanceCountLimits | undefined;
}

/**
 * <p>Limits that are applicable for given storage type.
 *     </p>
 * @public
 */
export interface StorageTypeLimit {
  /**
   * <p>
   *     Name of storage limits that are applicable for given storage type.
   *     If
   *     <code>
   *       <a>StorageType</a>
   *     </code>
   *     is ebs, following storage options are applicable
   *     <ol>
   *       <li>MinimumVolumeSize</li>
   *       Minimum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MaximumVolumeSize</li>
   *       Maximum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MaximumIops</li>
   *       Maximum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MinimumIops</li>
   *       Minimum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MaximumThroughput</li>
   *       Maximum amount of Throughput that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MinimumThroughput</li>
   *       Minimum amount of Throughput that is applicable for given storage type.It can be empty if it is not applicable.
   *     </ol>
   *   </p>
   * @public
   */
  LimitName?: string | undefined;

  /**
   * <p>
   *       Values for the
   *       <code>
   *         <a>StorageTypeLimit$LimitName</a>
   *       </code>
   *       .
   *     </p>
   * @public
   */
  LimitValues?: string[] | undefined;
}

/**
 * <p>StorageTypes represents the list of storage related types and their attributes
 *       that are available for given InstanceType.
 *     </p>
 * @public
 */
export interface StorageType {
  /**
   * <p>
   *   Type of the storage.
   *   List of available storage options:
   *   <ol>
   *     <li>instance</li> Inbuilt storage available for the given Instance
   *     <li>ebs</li> Elastic block storage that would be attached to the given Instance
   *   </ol>
   *     </p>
   * @public
   */
  StorageTypeName?: string | undefined;

  /**
   * <p>
   *       SubType of the given storage type.
   *       List of available sub-storage options:
   *       For "instance" storageType we wont have any storageSubType,
   *       in case of "ebs" storageType we will have following valid storageSubTypes
   *       <ol>
   *         <li>standard</li>
   *         <li>gp2</li>
   *         <li>gp3</li>
   *         <li>io1</li>
   *       </ol>
   *       Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options.
   *     </p>
   * @public
   */
  StorageSubTypeName?: string | undefined;

  /**
   * <p>List of limits that are applicable for given storage type.
   *     </p>
   * @public
   */
  StorageTypeLimits?: StorageTypeLimit[] | undefined;
}

/**
 * <p>
 *       Limits for given InstanceType and for each of it's role.
 *       <br></br>
 *       Limits contains following
 *       <code>
 *         <a>StorageTypes,</a>
 *       </code>
 *       <code>
 *         <a>InstanceLimits</a>
 *       </code>
 *       and
 *       <code>
 *         <a>AdditionalLimits</a>
 *       </code>
 *     </p>
 * @public
 */
export interface Limits {
  /**
   * <p>StorageType represents the list of storage related types and attributes
   *       that are available for given InstanceType.
   *     </p>
   * @public
   */
  StorageTypes?: StorageType[] | undefined;

  /**
   * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
   *     </p>
   * @public
   */
  InstanceLimits?: InstanceLimits | undefined;

  /**
   * <p>
   *       List of additional limits that are specific to a given InstanceType and for each of it's
   *       <code>
   *         <a>InstanceRole</a>
   *       </code>
   *       .
   *     </p>
   * @public
   */
  AdditionalLimits?: AdditionalLimit[] | undefined;
}

/**
 * <p>
 *       Container for the parameters received from
 *       <code>
 *         <a>DescribeElasticsearchInstanceTypeLimits</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface DescribeElasticsearchInstanceTypeLimitsResponse {
  /**
   * <p>
   *       Map of Role of the Instance and Limits that are applicable.
   *       Role performed by given Instance in Elasticsearch
   *       can be one of the following:
   *       <ul>
   *         <li>data: If the given InstanceType is used as data node</li>
   *         <li>master: If the given InstanceType is used as master node</li>
   *         <li>ultra_warm: If the given InstanceType is used as warm node</li>
   *       </ul>
   *     </p>
   * @public
   */
  LimitsByRole?: Record<string, Limits> | undefined;
}

/**
 * <p>
 *       A filter used to limit results when describing inbound or outbound cross-cluster search connections.
 *       Multiple values can be specified per filter.
 *       A cross-cluster search connection must match at least one of the specified values for it to be
 *       returned from an operation.
 *     </p>
 * @public
 */
export interface Filter {
  /**
   * <p>
   *       Specifies the name of the filter.
   *     </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *       Contains one or more values for the filter.
   *     </p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation.</p>
 * @public
 */
export interface DescribeInboundCrossClusterSearchConnectionsRequest {
  /**
   * <p>
   *       A list of filters used to match properties for inbound cross-cluster search connection.
   *       Available <code><a>Filter</a></code> names for this operation are:
   *       <ul>
   *         <li>cross-cluster-search-connection-id</li>
   *         <li>source-domain-info.domain-name</li>
   *         <li>source-domain-info.owner-id</li>
   *         <li>source-domain-info.region</li>
   *         <li>destination-domain-info.domain-name</li>
   *       </ul>
   *     </p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.</p>
 * @public
 */
export interface DescribeInboundCrossClusterSearchConnectionsResponse {
  /**
   * <p>Consists of list of <code><a>InboundCrossClusterSearchConnection</a></code> matching the specified filter criteria.</p>
   * @public
   */
  CrossClusterSearchConnections?: InboundCrossClusterSearchConnection[] | undefined;

  /**
   * <p>If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation.</p>
 * @public
 */
export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
  /**
   * <p>
   *       A list of filters used to match properties for outbound cross-cluster search connection.
   *       Available <code><a>Filter</a></code> names for this operation are:
   *       <ul>
   *         <li>cross-cluster-search-connection-id</li>
   *         <li>destination-domain-info.domain-name</li>
   *         <li>destination-domain-info.owner-id</li>
   *         <li>destination-domain-info.region</li>
   *         <li>source-domain-info.domain-name</li>
   *       </ul>
   *     </p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.</p>
 * @public
 */
export interface DescribeOutboundCrossClusterSearchConnectionsResponse {
  /**
   * <p>Consists of list of <code><a>OutboundCrossClusterSearchConnection</a></code> matching the specified filter criteria.</p>
   * @public
   */
  CrossClusterSearchConnections?: OutboundCrossClusterSearchConnection[] | undefined;

  /**
   * <p>If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Filter to apply in <code>DescribePackage</code> response.</p>
 * @public
 */
export interface DescribePackagesFilter {
  /**
   * <p>Any field from <code>PackageDetails</code>.</p>
   * @public
   */
  Name?: DescribePackagesFilterName | undefined;

  /**
   * <p>A non-empty list of values for the specified field.</p>
   * @public
   */
  Value?: string[] | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>DescribePackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface DescribePackagesRequest {
  /**
   * <p>Only returns packages that match the <code>DescribePackagesFilterList</code> values.</p>
   * @public
   */
  Filters?: DescribePackagesFilter[] | undefined;

  /**
   * <p>Limits results to a maximum number of packages.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>DescribePackages</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface DescribePackagesResponse {
  /**
   * <p>List of <code>PackageDetails</code> objects.</p>
   * @public
   */
  PackageDetailsList?: PackageDetails[] | undefined;

  NextToken?: string | undefined;
}

/**
 * <p>Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code></p>
 * @public
 */
export interface DescribeReservedElasticsearchInstanceOfferingsRequest {
  /**
   * <p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p>
   * @public
   */
  ReservedElasticsearchInstanceOfferingId?: string | undefined;

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>NextToken should be sent in case if earlier API call produced result
   * 		containing NextToken. It is used for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.</p>
 * @public
 */
export interface RecurringCharge {
  /**
   * <p>The monetary amount of the recurring charge.</p>
   * @public
   */
  RecurringChargeAmount?: number | undefined;

  /**
   * <p>The frequency of the recurring charge.</p>
   * @public
   */
  RecurringChargeFrequency?: string | undefined;
}

/**
 * <p>Details of a reserved Elasticsearch instance offering.</p>
 * @public
 */
export interface ReservedElasticsearchInstanceOffering {
  /**
   * <p>The Elasticsearch reserved instance offering identifier.</p>
   * @public
   */
  ReservedElasticsearchInstanceOfferingId?: string | undefined;

  /**
   * <p>The Elasticsearch instance type offered by the reserved instance offering.</p>
   * @public
   */
  ElasticsearchInstanceType?: ESPartitionInstanceType | undefined;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the Elasticsearch instance.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific reserved Elasticsearch instance offering. </p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The rate you are charged for each hour the domain that is using the offering is running.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The currency code for the reserved Elasticsearch instance offering.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>Payment option for the reserved Elasticsearch instance offering</p>
   * @public
   */
  PaymentOption?: ReservedElasticsearchInstancePaymentOption | undefined;

  /**
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * <p>Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code></p>
 * @public
 */
export interface DescribeReservedElasticsearchInstanceOfferingsResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List of reserved Elasticsearch instance offerings</p>
   * @public
   */
  ReservedElasticsearchInstanceOfferings?: ReservedElasticsearchInstanceOffering[] | undefined;
}

/**
 * <p>Container for parameters to <code>DescribeReservedElasticsearchInstances</code></p>
 * @public
 */
export interface DescribeReservedElasticsearchInstancesRequest {
  /**
   * <p>The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.</p>
   * @public
   */
  ReservedElasticsearchInstanceId?: string | undefined;

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>NextToken should be sent in case if earlier API call produced result
   * 		containing NextToken. It is used for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details of a reserved Elasticsearch instance.</p>
 * @public
 */
export interface ReservedElasticsearchInstance {
  /**
   * <p>The customer-specified identifier to track this reservation.</p>
   * @public
   */
  ReservationName?: string | undefined;

  /**
   * <p>The unique identifier for the reservation.</p>
   * @public
   */
  ReservedElasticsearchInstanceId?: string | undefined;

  /**
   * <p>The offering identifier.</p>
   * @public
   */
  ReservedElasticsearchInstanceOfferingId?: string | undefined;

  /**
   * <p>The Elasticsearch instance type offered by the reserved instance offering.</p>
   * @public
   */
  ElasticsearchInstanceType?: ESPartitionInstanceType | undefined;

  /**
   * <p>The time the reservation started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The duration, in seconds, for which the Elasticsearch instance is reserved.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The upfront fixed charge you will paid to purchase the specific reserved Elasticsearch instance offering. </p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The rate you are charged for each hour for the domain that is using this reserved instance.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The currency code for the reserved Elasticsearch instance offering.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The number of Elasticsearch instances that have been reserved.</p>
   * @public
   */
  ElasticsearchInstanceCount?: number | undefined;

  /**
   * <p>The state of the reserved Elasticsearch instance.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The payment option as defined in the reserved Elasticsearch instance offering.</p>
   * @public
   */
  PaymentOption?: ReservedElasticsearchInstancePaymentOption | undefined;

  /**
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * <p>Container for results from <code>DescribeReservedElasticsearchInstances</code></p>
 * @public
 */
export interface DescribeReservedElasticsearchInstancesResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List of reserved Elasticsearch instances.</p>
   * @public
   */
  ReservedElasticsearchInstances?: ReservedElasticsearchInstance[] | undefined;
}

/**
 * <p>Container for request parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Specifies the list of VPC endpoints to be described.</p>
 * @public
 */
export interface DescribeVpcEndpointsRequest {
  /**
   * <p>The unique identifiers of the endpoints to get information about.</p>
   * @public
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * <p>Error information when attempting to describe an Amazon OpenSearch Service-managed VPC
 *    endpoint.</p>
 * @public
 */
export interface VpcEndpointError {
  /**
   * <p>The unique identifier of the endpoint. </p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The code associated with the error.</p>
   * @public
   */
  ErrorCode?: VpcEndpointErrorCode | undefined;

  /**
   * <p>A message describing the error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Container for response parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Returns a list containing configuration details and
 *           status of the VPC Endpoints as well as a list containing error responses of the endpoints that could not be described</p>
 * @public
 */
export interface DescribeVpcEndpointsResponse {
  /**
   * <p>Information about each requested VPC endpoint.</p>
   * @public
   */
  VpcEndpoints: VpcEndpoint[] | undefined;

  /**
   * <p>Any errors associated with the request.</p>
   * @public
   */
  VpcEndpointErrors: VpcEndpointError[] | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>DissociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface DissociatePackageRequest {
  /**
   * <p>Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.</p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p>Name of the domain that you want to associate the package with.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>DissociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface DissociatePackageResponse {
  /**
   * <p><code>DomainPackageDetails</code></p>
   * @public
   */
  DomainPackageDetails?: DomainPackageDetails | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetCompatibleElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface GetCompatibleElasticsearchVersionsRequest {
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName?: string | undefined;
}

/**
 * <p>
 *       A map from an
 *       <code>
 *         <a>ElasticsearchVersion</a>
 *       </code>
 *       to a list of compatible
 *       <code>
 *         <a>ElasticsearchVersion</a>
 *       </code>
 *       s to which the domain can be upgraded.
 *     </p>
 * @public
 */
export interface CompatibleVersionsMap {
  /**
   * <p>The current version of Elasticsearch on which a domain is.</p>
   * @public
   */
  SourceVersion?: string | undefined;

  /**
   * <p>List of supported elastic search versions.
   *     </p>
   * @public
   */
  TargetVersions?: string[] | undefined;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetCompatibleElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface GetCompatibleElasticsearchVersionsResponse {
  /**
   * <p>
   *       A map of compatible Elasticsearch versions returned as part of the
   *       <code>
   *         <a>GetCompatibleElasticsearchVersions</a>
   *       </code>
   *       operation.
   *     </p>
   * @public
   */
  CompatibleElasticsearchVersions?: CompatibleVersionsMap[] | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetPackageVersionHistory</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface GetPackageVersionHistoryRequest {
  /**
   * <p>Returns an audit history of versions of the package.</p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p>Limits results to a maximum number of versions.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details of a package version.</p>
 * @public
 */
export interface PackageVersionHistory {
  /**
   * <p>Version of the package.</p>
   * @public
   */
  PackageVersion?: string | undefined;

  /**
   * <p>A message associated with the version.</p>
   * @public
   */
  CommitMessage?: string | undefined;

  /**
   * <p>Timestamp which tells creation time of the package version.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetPackageVersionHistory</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface GetPackageVersionHistoryResponse {
  PackageID?: string | undefined;
  /**
   * <p>List of <code>PackageVersionHistory</code> objects.</p>
   * @public
   */
  PackageVersionHistoryList?: PackageVersionHistory[] | undefined;

  NextToken?: string | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetUpgradeHistory</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface GetUpgradeHistoryRequest {
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>
   *       Set this value to limit the number of results returned.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.</p>
 * @public
 */
export interface UpgradeStepItem {
  /**
   * <p>
   *       Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
   *       <ul>
   *         <li>PreUpgradeCheck</li>
   *         <li>Snapshot</li>
   *         <li>Upgrade</li>
   *       </ul>
   *     </p>
   * @public
   */
  UpgradeStep?: UpgradeStep | undefined;

  /**
   * <p>
   *       The status of a particular step during an upgrade. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   * @public
   */
  UpgradeStepStatus?: UpgradeStatus | undefined;

  /**
   * <p>A list of strings containing detailed information about the errors encountered in a particular step.</p>
   * @public
   */
  Issues?: string[] | undefined;

  /**
   * <p>The Floating point value representing progress percentage of a particular step.</p>
   * @public
   */
  ProgressPercent?: number | undefined;
}

/**
 * <p>History of the last 10 Upgrades and Upgrade Eligibility Checks.</p>
 * @public
 */
export interface UpgradeHistory {
  /**
   * <p>A string that describes the update briefly</p>
   * @public
   */
  UpgradeName?: string | undefined;

  /**
   * <p>UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.</p>
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * <p>
   *       The overall status of the update. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   * @public
   */
  UpgradeStatus?: UpgradeStatus | undefined;

  /**
   * <p>
   *       A list of
   *       <code>
   *         <a>UpgradeStepItem</a>
   *       </code>
   *       s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check.
   *     </p>
   * @public
   */
  StepsList?: UpgradeStepItem[] | undefined;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetUpgradeHistory</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface GetUpgradeHistoryResponse {
  /**
   * <p>
   *       A list of
   *       <code>
   *         <a>UpgradeHistory</a>
   *       </code>
   *       objects corresponding to each Upgrade or Upgrade Eligibility Check performed on a domain returned as part of
   *       <code>
   *         <a>GetUpgradeHistoryResponse</a>
   *       </code>
   *       object.
   *     </p>
   * @public
   */
  UpgradeHistories?: UpgradeHistory[] | undefined;

  /**
   * <p>Pagination token that needs to be supplied to the next call to get the next page of results</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetUpgradeStatus</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface GetUpgradeStatusRequest {
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetUpgradeStatus</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface GetUpgradeStatusResponse {
  /**
   * <p>
   *       Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
   *       <ul>
   *         <li>PreUpgradeCheck</li>
   *         <li>Snapshot</li>
   *         <li>Upgrade</li>
   *       </ul>
   *     </p>
   * @public
   */
  UpgradeStep?: UpgradeStep | undefined;

  /**
   * <p>
   *       One of 4 statuses that a step can go through returned as part of the
   *       <code>
   *         <a>GetUpgradeStatusResponse</a>
   *       </code>
   *       object. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   * @public
   */
  StepStatus?: UpgradeStatus | undefined;

  /**
   * <p>A string that describes the update briefly</p>
   * @public
   */
  UpgradeName?: string | undefined;
}

/**
 * <p> Container for the parameters to the <code><a>ListDomainNames</a></code> operation.</p>
 * @public
 */
export interface ListDomainNamesRequest {
  /**
   * <p> Optional parameter to filter the output by domain engine type. Acceptable values are 'Elasticsearch' and 'OpenSearch'. </p>
   * @public
   */
  EngineType?: EngineType | undefined;
}

/**
 * @public
 */
export interface DomainInfo {
  /**
   * <p> Specifies the <code>DomainName</code>.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p> Specifies the <code>EngineType</code> of the domain.</p>
   * @public
   */
  EngineType?: EngineType | undefined;
}

/**
 * <p>The result of a <code>ListDomainNames</code> operation. Contains the names of all domains owned by this account and their respective engine types.</p>
 * @public
 */
export interface ListDomainNamesResponse {
  /**
   * <p>List of domain names and respective engine types.</p>
   * @public
   */
  DomainNames?: DomainInfo[] | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>ListDomainsForPackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface ListDomainsForPackageRequest {
  /**
   * <p>The package for which to list domains.</p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p>Limits results to a maximum number of domains.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *       Container for response parameters to
 *       <code>
 *         <a>ListDomainsForPackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface ListDomainsForPackageResponse {
  /**
   * <p>List of <code>DomainPackageDetails</code> objects.</p>
   * @public
   */
  DomainPackageDetailsList?: DomainPackageDetails[] | undefined;

  NextToken?: string | undefined;
}

/**
 * <p>
 *       Container for the parameters to the
 *       <code>
 *         <a>ListElasticsearchInstanceTypes</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface ListElasticsearchInstanceTypesRequest {
  /**
   * <p>Version of Elasticsearch for which list of supported elasticsearch
   *       instance types are needed.
   *     </p>
   * @public
   */
  ElasticsearchVersion: string | undefined;

  /**
   * <p>DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are
   *       querying for list of available Elasticsearch instance types when modifying existing domain.
   *     </p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>
   *     Set this value to limit the number of results returned.
   *     Value provided must be greater than 30 else it wont be honored.
   *   </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>NextToken should be sent in case if earlier API call produced result
   *       containing NextToken. It is used for pagination.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *       Container for the parameters returned by
 *       <code>
 *         <a>ListElasticsearchInstanceTypes</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface ListElasticsearchInstanceTypesResponse {
  /**
   * <p>
   *       List of instance types supported by Amazon Elasticsearch service for
   *       given
   *       <code>
   *         <a>ElasticsearchVersion</a>
   *       </code>
   *     </p>
   * @public
   */
  ElasticsearchInstanceTypes?: ESPartitionInstanceType[] | undefined;

  /**
   * <p>In case if there are more results available NextToken would be
   *       present, make further request to the same API with
   *       received NextToken to paginate remaining results.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *       Container for the parameters to the
 *       <code>
 *         <a>ListElasticsearchVersions</a>
 *       </code>
 *       operation.
 *       <p>
 *         Use
 *         <code>
 *           <a>MaxResults</a>
 *         </code>
 *         to control the maximum number of results to retrieve in a single
 *         call.
 *       </p>
 *       <p>
 *         Use
 *         <code>
 *           <a>NextToken</a>
 *         </code>
 *         in response to retrieve more results. If the received response does
 *         not contain a NextToken, then there are no more results to retrieve.
 *       </p>
 *     </p>
 * @public
 */
export interface ListElasticsearchVersionsRequest {
  /**
   * <p>
   *       Set this value to limit the number of results returned.
   *       Value provided must be greater than 10 else it wont be honored.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *       Container for the parameters for response received from
 *       <code>
 *         <a>ListElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface ListElasticsearchVersionsResponse {
  /**
   * <p>List of supported elastic search versions.
   *     </p>
   * @public
   */
  ElasticsearchVersions?: string[] | undefined;

  /**
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>ListPackagesForDomain</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface ListPackagesForDomainRequest {
  /**
   * <p>The name of the domain for which you want to list associated packages.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Limits results to a maximum number of packages.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *       Container for response parameters to
 *       <code>
 *         <a>ListPackagesForDomain</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface ListPackagesForDomainResponse {
  /**
   * <p>List of <code>DomainPackageDetails</code> objects.</p>
   * @public
   */
  DomainPackageDetailsList?: DomainPackageDetails[] | undefined;

  /**
   * <p>Pagination token that needs to be supplied to the next call to get the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached.</p>
 * @public
 */
export interface ListTagsRequest {
  /**
   * <p> Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view.</p>
   * @public
   */
  ARN: string | undefined;
}

/**
 * <p>The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains.</p>
 * @public
 */
export interface ListTagsResponse {
  /**
   * <p> List of <code>Tag</code> for the requested Elasticsearch domain.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * <p>Retrieves information about each principal that is allowed to access a
 *    given Amazon OpenSearch Service domain through the use of an interface VPC endpoint</p>
 * @public
 */
export interface ListVpcEndpointAccessRequest {
  /**
   * <p>The name of the OpenSearch Service domain to retrieve access information for.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for response parameters to the <code><a>ListVpcEndpointAccess</a></code> operation.
 *           Returns a list of accounts id and account type authorized to manage VPC endpoints.</p>
 * @public
 */
export interface ListVpcEndpointAccessResponse {
  /**
   * <p>List of <code>AuthorizedPrincipal</code> describing the details of the permissions to manage VPC endpoints against the specified domain.</p>
   * @public
   */
  AuthorizedPrincipalList: AuthorizedPrincipal[] | undefined;

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken: string | undefined;
}

/**
 * <p>Container for request parameters to the <code><a>ListVpcEndpoints</a></code> operation.</p>
 * @public
 */
export interface ListVpcEndpointsRequest {
  /**
   * <p>Identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for response parameters to the <code><a>ListVpcEndpoints</a></code> operation. Returns a list containing summarized details of the VPC endpoints.</p>
 * @public
 */
export interface ListVpcEndpointsResponse {
  /**
   * <p>Information about each endpoint.</p>
   * @public
   */
  VpcEndpointSummaryList: VpcEndpointSummary[] | undefined;

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken: string | undefined;
}

/**
 * <p>Container for request parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Specifies the domain whose VPC endpoints will be listed.</p>
 * @public
 */
export interface ListVpcEndpointsForDomainRequest {
  /**
   * <p>Name of the ElasticSearch domain whose VPC endpoints are to be listed.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for response parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Returns a list containing summarized details of the VPC endpoints.</p>
 * @public
 */
export interface ListVpcEndpointsForDomainResponse {
  /**
   * <p>Provides list of <code>VpcEndpointSummary</code> summarizing details of the VPC endpoints.</p>
   * @public
   */
  VpcEndpointSummaryList: VpcEndpointSummary[] | undefined;

  /**
   * <p>Information about each endpoint associated with the domain.</p>
   * @public
   */
  NextToken: string | undefined;
}

/**
 * <p>Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code></p>
 * @public
 */
export interface PurchaseReservedElasticsearchInstanceOfferingRequest {
  /**
   * <p>The ID of the reserved Elasticsearch instance offering to purchase.</p>
   * @public
   */
  ReservedElasticsearchInstanceOfferingId: string | undefined;

  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   * @public
   */
  ReservationName: string | undefined;

  /**
   * <p>The number of Elasticsearch instances to reserve.</p>
   * @public
   */
  InstanceCount?: number | undefined;
}

/**
 * <p>Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation.</p>
 * @public
 */
export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
  /**
   * <p>Details of the reserved Elasticsearch instance which was purchased.</p>
   * @public
   */
  ReservedElasticsearchInstanceId?: string | undefined;

  /**
   * <p>The customer-specified identifier used to track this reservation.</p>
   * @public
   */
  ReservationName?: string | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation.</p>
 * @public
 */
export interface RejectInboundCrossClusterSearchConnectionRequest {
  /**
   * <p>The id of the inbound connection that you want to reject.</p>
   * @public
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * <p>The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection.</p>
 * @public
 */
export interface RejectInboundCrossClusterSearchConnectionResponse {
  /**
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of rejected inbound connection. </p>
   * @public
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>.</p>
 * @public
 */
export interface RemoveTagsRequest {
  /**
   * <p>Specifies the <code>ARN</code> for the Elasticsearch domain from which you want to delete the specified tags.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * <p>Revokes access to an Amazon OpenSearch Service domain that was provided through an interface
 *    VPC endpoint.</p>
 * @public
 */
export interface RevokeVpcEndpointAccessRequest {
  /**
   * <p>The name of the OpenSearch Service domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The account ID to revoke access from.</p>
   * @public
   */
  Account: string | undefined;
}

/**
 * <p>Container for response parameters to the <code><a>RevokeVpcEndpointAccess</a></code> operation. The response body for this operation is empty.</p>
 * @public
 */
export interface RevokeVpcEndpointAccessResponse {}

/**
 * <p>Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on.</p>
 * @public
 */
export interface StartElasticsearchServiceSoftwareUpdateRequest {
  /**
   * <p>The name of the domain that you want to update to the latest service software.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.</p>
 * @public
 */
export interface StartElasticsearchServiceSoftwareUpdateResponse {
  /**
   * <p>The current status of the Elasticsearch service software update.</p>
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster.</p>
 * @public
 */
export interface UpdateElasticsearchDomainConfigRequest {
  /**
   * <p>The name of the Elasticsearch domain that you are updating. </p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The type and number of instances to instantiate for the domain cluster.</p>
   * @public
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig | undefined;

  /**
   * <p>Specify the type and size of the EBS volume that you want to use. </p>
   * @public
   */
  EBSOptions?: EBSOptions | undefined;

  /**
   * <p>Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours. </p>
   * @public
   */
  SnapshotOptions?: SnapshotOptions | undefined;

  /**
   * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>
   * @public
   */
  VPCOptions?: VPCOptions | undefined;

  /**
   * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * <p>Modifies the advanced option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
   *        See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</p>
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * <p>Options to specify configuration that will be applied to the domain endpoint.</p>
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * <p>Specifies advanced security options.</p>
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput | undefined;

  /**
   * <p>Specifies the NodeToNodeEncryptionOptions.</p>
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

  /**
   * <p>Specifies the Encryption At Rest Options.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * <p>Specifies Auto-Tune options.</p>
   * @public
   */
  AutoTuneOptions?: AutoTuneOptions | undefined;

  /**
   * <p>
   *            This flag, when set to True, specifies whether the <code>UpdateElasticsearchDomain</code> request should return the results of validation checks without actually applying the change.
   *            This flag, when set to True, specifies the deployment mechanism through which the update shall be applied on the domain.
   *            This will not actually perform the Update.
   *        </p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DryRunResults {
  /**
   * <p>
   *             Specifies the deployment mechanism through which the update shall be applied on the domain.
   *             Possible responses are
   *             <code>Blue/Green</code> (The update will require a blue/green deployment.)
   *             <code>DynamicUpdate</code> (The update can be applied in-place without a Blue/Green deployment required.)
   *             <code>Undetermined</code> (The domain is undergoing an update which needs to complete before the deployment type can be predicted.)
   *             <code>None</code> (The configuration change matches the current configuration and will not result in any update.)
   *         </p>
   * @public
   */
  DeploymentType?: string | undefined;

  /**
   * <p>Contains an optional message associated with the DryRunResults.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated.</p>
 * @public
 */
export interface UpdateElasticsearchDomainConfigResponse {
  /**
   * <p>The status of the updated Elasticsearch domain. </p>
   * @public
   */
  DomainConfig: ElasticsearchDomainConfig | undefined;

  /**
   * <p>Contains result of DryRun. </p>
   * @public
   */
  DryRunResults?: DryRunResults | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>UpdatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface UpdatePackageRequest {
  /**
   * <p>Unique identifier for the package.</p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p>The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code></p>
   * @public
   */
  PackageSource: PackageSource | undefined;

  /**
   * <p>New description of the package.</p>
   * @public
   */
  PackageDescription?: string | undefined;

  /**
   * <p>An info message for the new version which will be shown as part of <code>GetPackageVersionHistoryResponse</code>.</p>
   * @public
   */
  CommitMessage?: string | undefined;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>UpdatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface UpdatePackageResponse {
  /**
   * <p>Information about the package <code>PackageDetails</code>.</p>
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * <p>Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.</p>
 * @public
 */
export interface UpdateVpcEndpointRequest {
  /**
   * <p>Unique identifier of the VPC endpoint to be updated.</p>
   * @public
   */
  VpcEndpointId: string | undefined;

  /**
   * <p>The security groups and/or subnets to add, remove, or modify.</p>
   * @public
   */
  VpcOptions: VPCOptions | undefined;
}

/**
 * <p>Contains the configuration and status of the VPC endpoint being updated.</p>
 * @public
 */
export interface UpdateVpcEndpointResponse {
  /**
   * <p>The endpoint to be updated.</p>
   * @public
   */
  VpcEndpoint: VpcEndpoint | undefined;
}

/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>UpgradeElasticsearchDomain</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface UpgradeElasticsearchDomainRequest {
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
   * @public
   */
  TargetVersion: string | undefined;

  /**
   * <p>
   *       This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
   *       This will not actually perform the Upgrade.
   *     </p>
   * @public
   */
  PerformCheckOnly?: boolean | undefined;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>UpgradeElasticsearchDomain</a>
 *       </code>
 *       operation.
 *     </p>
 * @public
 */
export interface UpgradeElasticsearchDomainResponse {
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
   * @public
   */
  TargetVersion?: string | undefined;

  /**
   * <p>
   *       This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
   *       This will not actually perform the Upgrade.
   *     </p>
   * @public
   */
  PerformCheckOnly?: boolean | undefined;

  /**
   * <p>Specifies change details of the domain configuration change.</p>
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;
}
