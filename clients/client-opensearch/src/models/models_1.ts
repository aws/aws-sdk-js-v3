// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  ActionType,
  DataSourceStatus,
  DryRunMode,
  IndexStatus,
  IPAddressType,
  LogType,
  PackageScopeOperationEnum,
  ScheduleAt,
} from "./enums";
import type {
  AdvancedSecurityOptionsInput,
  AIMLOptionsInput,
  AppConfig,
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
  DryRunProgressStatus,
  DryRunResults,
  EBSOptions,
  EncryptionAtRestOptions,
  IamIdentityCenterOptions,
  IdentityCenterOptionsInput,
  LogPublishingOption,
  NodeToNodeEncryptionOptions,
  OffPeakWindowOptions,
  PackageConfiguration,
  PackageDetails,
  PackageEncryptionOptions,
  PackageSource,
  ScheduledAction,
  SnapshotOptions,
  SoftwareUpdateOptions,
  VpcEndpoint,
  VPCOptions,
} from "./models_0";

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>The unique identifier for the OpenSearch application to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The data sources to associate with the OpenSearch application.</p>
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * <p>The configuration settings to modify for the OpenSearch application.</p>
   * @public
   */
  appConfigs?: AppConfig[] | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * <p>The unique identifier of the updated OpenSearch application.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the updated OpenSearch application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in
   *                 <i>Using Amazon Web Services Identity and Access Management</i> for
   *             more information. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The data sources associated with the updated OpenSearch application.</p>
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * <p>The IAM Identity Center configuration for the updated OpenSearch application.</p>
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterOptions | undefined;

  /**
   * <p>The configuration settings for the updated OpenSearch application.</p>
   * @public
   */
  appConfigs?: AppConfig[] | undefined;

  /**
   * <p>The timestamp when the OpenSearch application was originally created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the OpenSearch application was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * <p>Container for the parameters to the <code>UpdateDataSource</code> operation.</p>
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the data source to modify.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of data source.</p>
   * @public
   */
  DataSourceType: DataSourceType | undefined;

  /**
   * <p>A new description of the data source.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the data source update.</p>
   * @public
   */
  Status?: DataSourceStatus | undefined;
}

/**
 * <p>The result of an <code>UpdateDataSource</code> operation.</p>
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * <p>A message associated with the updated data source.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDirectQueryDataSourceRequest {
  /**
   * <p> A unique, user-defined label to identify the data source within your OpenSearch
   *             Service environment. </p>
   * @public
   */
  DataSourceName: string | undefined;

  /**
   * <p> The supported Amazon Web Services service that you want to use as the source for
   *             direct queries in OpenSearch Service. </p>
   * @public
   */
  DataSourceType: DirectQueryDataSourceType | undefined;

  /**
   * <p> An optional text field for providing additional context and details about the data
   *             source. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> An optional list of Amazon Resource Names (ARNs) for the OpenSearch collections that are
   *             associated with the direct query data source. This field is required for CloudWatchLogs
   *             and SecurityLake datasource types. </p>
   * @public
   */
  OpenSearchArns?: string[] | undefined;

  /**
   * <p> An optional IAM access policy document that defines the updated permissions for accessing the direct query data source.
   *             The policy document must be in valid JSON format and follow IAM policy syntax. If not specified, the existing access policy if present remains unchanged. </p>
   * @public
   */
  DataSourceAccessPolicy?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDirectQueryDataSourceResponse {
  /**
   * <p> The unique, system-generated identifier that represents the data source. </p>
   * @public
   */
  DataSourceArn?: string | undefined;
}

/**
 * <p>Container for the request parameters to the <code>UpdateDomain</code>
 *             operation.</p>
 * @public
 */
export interface UpdateDomainConfigRequest {
  /**
   * <p>The name of the domain that you're updating.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Changes that you want to make to the cluster configuration, such as the instance type
   *             and number of EC2 instances.</p>
   * @public
   */
  ClusterConfig?: ClusterConfig | undefined;

  /**
   * <p>The type and size of the EBS volume to attach to instances in the domain.</p>
   * @public
   */
  EBSOptions?: EBSOptions | undefined;

  /**
   * <p>Option to set the time, in UTC format, for the daily automated snapshot. Default value
   *             is <code>0</code> hours. </p>
   * @public
   */
  SnapshotOptions?: SnapshotOptions | undefined;

  /**
   * <p>Options to specify the subnets and security groups for a VPC endpoint. For more
   *             information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon
   *                 OpenSearch Service domains using a VPC</a>.</p>
   * @public
   */
  VPCOptions?: VPCOptions | undefined;

  /**
   * <p>Key-value pairs to configure Amazon Cognito authentication for OpenSearch
   *             Dashboards.</p>
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * <p>Key-value pairs to specify advanced configuration options. The following key-value
   *             pairs are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"rest.action.multi.allow_explicit_index": "true" | "false"</code> - Note
   *                     the use of a string rather than a boolean. Specifies whether explicit references
   *                     to indexes are allowed inside the body of HTTP requests. If you want to
   *                     configure access policies for domain sub-resources, such as specific indexes and
   *                     domain APIs, you must disable this property. Default is true.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"indices.fielddata.cache.size": "80" </code> - Note the use of a string
   *                     rather than a boolean. Specifies the percentage of heap space allocated to field
   *                     data. Default is unbounded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"indices.query.bool.max_clause_count": "1024"</code> - Note the use of a
   *                     string rather than a boolean. Specifies the maximum number of clauses allowed in
   *                     a Lucene boolean query. Default is 1,024. Queries with more than the permitted
   *                     number of clauses result in a <code>TooManyClauses</code> error.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p>
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * <p>Identity and Access Management (IAM) access policy as a JSON-formatted string.</p>
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * <p>Specify either dual stack or IPv4 as your IP address type. Dual stack allows you to
   *             share domain resources across IPv4 and IPv6 address types, and is the recommended
   *             option. If your IP address type is currently set to dual stack, you can't change it.
   *         </p>
   * @public
   */
  IPAddressType?: IPAddressType | undefined;

  /**
   * <p>Options to publish OpenSearch logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * <p>Encryption at rest options for the domain.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *             traffic.</p>
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * <p>Node-to-node encryption options for the domain.</p>
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

  /**
   * <p>Options for fine-grained access control.</p>
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput | undefined;

  /**
   * <p>Configuration settings for enabling and managing IAM Identity Center.</p>
   * @public
   */
  IdentityCenterOptions?: IdentityCenterOptionsInput | undefined;

  /**
   * <p>Options for Auto-Tune.</p>
   * @public
   */
  AutoTuneOptions?: AutoTuneOptions | undefined;

  /**
   * <p>This flag, when set to True, specifies whether the <code>UpdateDomain</code> request
   *             should return the results of a dry run analysis without actually applying the change. A
   *             dry run determines what type of deployment the update will cause.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The type of dry run to perform.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Basic</code> only returns the type of deployment (blue/green or dynamic)
   *                     that the update will cause.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Verbose</code> runs an additional check to validate the changes you're
   *                     making. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes#validation-check">Validating a domain update</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DryRunMode?: DryRunMode | undefined;

  /**
   * <p>Off-peak window options for the domain.</p>
   * @public
   */
  OffPeakWindowOptions?: OffPeakWindowOptions | undefined;

  /**
   * <p>Service software update options for the domain.</p>
   * @public
   */
  SoftwareUpdateOptions?: SoftwareUpdateOptions | undefined;

  /**
   * <p>Options for all machine learning features for the specified domain.</p>
   * @public
   */
  AIMLOptions?: AIMLOptionsInput | undefined;

  /**
   * <p>Specifies the deployment strategy options for the domain.</p>
   * @public
   */
  DeploymentStrategyOptions?: DeploymentStrategyOptions | undefined;
}

/**
 * <p>The results of an <code>UpdateDomain</code> request. Contains the status of the domain
 *             being updated.</p>
 * @public
 */
export interface UpdateDomainConfigResponse {
  /**
   * <p>The status of the updated domain.</p>
   * @public
   */
  DomainConfig: DomainConfig | undefined;

  /**
   * <p>Results of the dry run performed in the update domain request.</p>
   * @public
   */
  DryRunResults?: DryRunResults | undefined;

  /**
   * <p>The status of the dry run being performed on the domain, if any.</p>
   * @public
   */
  DryRunProgressStatus?: DryRunProgressStatus | undefined;
}

/**
 * @public
 */
export interface UpdateIndexRequest {
  /**
   * <p>The name of an OpenSearch Service domain. Domain names are unique across the domains
   *             owned by an account within an Amazon Web Services Region.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the index to update.</p>
   * @public
   */
  IndexName: string | undefined;

  /**
   * <p>The updated JSON schema for the index including any changes to mappings, settings, and semantic enrichment configuration.</p>
   * @public
   */
  IndexSchema: __DocumentType | undefined;
}

/**
 * @public
 */
export interface UpdateIndexResponse {
  /**
   * <p>The status of the index update operation.</p>
   * @public
   */
  Status: IndexStatus | undefined;
}

/**
 * <p>Container for request parameters to the <code>UpdatePackage</code> operation.</p>
 * @public
 */
export interface UpdatePackageRequest {
  /**
   * <p>The unique identifier for the package.</p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p>Amazon S3 bucket and key for the package.</p>
   * @public
   */
  PackageSource: PackageSource | undefined;

  /**
   * <p>A new description of the package.</p>
   * @public
   */
  PackageDescription?: string | undefined;

  /**
   * <p>Commit message for the updated file, which is shown as part of
   *                 <code>GetPackageVersionHistoryResponse</code>.</p>
   * @public
   */
  CommitMessage?: string | undefined;

  /**
   * <p>The updated configuration details for a package.</p>
   * @public
   */
  PackageConfiguration?: PackageConfiguration | undefined;

  /**
   * <p>Encryption options for a package.</p>
   * @public
   */
  PackageEncryptionOptions?: PackageEncryptionOptions | undefined;
}

/**
 * <p>Container for the response returned by the <code>UpdatePackage</code>
 *             operation.</p>
 * @public
 */
export interface UpdatePackageResponse {
  /**
   * <p>Information about a package.</p>
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * @public
 */
export interface UpdatePackageScopeRequest {
  /**
   * <p>ID of the package whose scope is being updated.</p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p> The operation to perform on the package scope (e.g., add/remove/override
   *             users).</p>
   * @public
   */
  Operation: PackageScopeOperationEnum | undefined;

  /**
   * <p> List of users to be added or removed from the package scope.</p>
   * @public
   */
  PackageUserList: string[] | undefined;
}

/**
 * @public
 */
export interface UpdatePackageScopeResponse {
  /**
   * <p> ID of the package whose scope was updated.</p>
   * @public
   */
  PackageID?: string | undefined;

  /**
   * <p>The operation that was performed on the package scope.</p>
   * @public
   */
  Operation?: PackageScopeOperationEnum | undefined;

  /**
   * <p> List of users who have access to the package after the scope update.</p>
   * @public
   */
  PackageUserList?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledActionRequest {
  /**
   * <p>The name of the domain to reschedule an action for.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of the action to reschedule. To retrieve this ID, send a <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html">ListScheduledActions</a> request.</p>
   * @public
   */
  ActionID: string | undefined;

  /**
   * <p>The type of action to reschedule. Can be one of <code>SERVICE_SOFTWARE_UPDATE</code>,
   *                 <code>JVM_HEAP_SIZE_TUNING</code>, or <code>JVM_YOUNG_GEN_TUNING</code>. To retrieve
   *             this value, send a <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html">ListScheduledActions</a> request.</p>
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * <p>When to schedule the action.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOW</code> - Immediately schedules the update to happen in the current
   *                     hour if there's capacity available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMESTAMP</code> - Lets you specify a custom date and time to apply the
   *                     update. If you specify this value, you must also provide a value for
   *                         <code>DesiredStartTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFF_PEAK_WINDOW</code> - Marks the action to be picked up during an
   *                     upcoming off-peak window. There's no guarantee that the change will be
   *                     implemented during the next immediate window. Depending on capacity, it might
   *                     happen in subsequent days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScheduleAt: ScheduleAt | undefined;

  /**
   * <p>The time to implement the change, in Coordinated Universal Time (UTC). Only specify
   *             this parameter if you set <code>ScheduleAt</code> to <code>TIMESTAMP</code>.</p>
   * @public
   */
  DesiredStartTime?: number | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledActionResponse {
  /**
   * <p>Information about the rescheduled action.</p>
   * @public
   */
  ScheduledAction?: ScheduledAction | undefined;
}

/**
 * @public
 */
export interface UpdateVpcEndpointRequest {
  /**
   * <p>The unique identifier of the endpoint.</p>
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
 * <p>Container for the request parameters to the <code>UpgradeDomain</code>
 *             operation.</p>
 * @public
 */
export interface UpgradeDomainRequest {
  /**
   * <p>Name of the OpenSearch Service domain that you want to upgrade.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>OpenSearch or Elasticsearch version to which you want to upgrade, in the format
   *             Opensearch_X.Y or Elasticsearch_X.Y.</p>
   * @public
   */
  TargetVersion: string | undefined;

  /**
   * <p>When true, indicates that an upgrade eligibility check needs to be performed. Does not
   *             actually perform the upgrade.</p>
   * @public
   */
  PerformCheckOnly?: boolean | undefined;

  /**
   * <p>Only supports the <code>override_main_response_version</code> parameter and not other
   *             advanced options. You can only include this option when upgrading to an OpenSearch
   *             version. Specifies whether the domain reports its version as 7.10 so that it continues
   *             to work with Elasticsearch OSS clients and plugins.</p>
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;
}

/**
 * <p>Container for the response returned by <code>UpgradeDomain</code> operation.</p>
 * @public
 */
export interface UpgradeDomainResponse {
  /**
   * <p>The unique identifier of the domain upgrade.</p>
   * @public
   */
  UpgradeId?: string | undefined;

  /**
   * <p>The name of the domain that was upgraded.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>OpenSearch or Elasticsearch version that the domain was upgraded to.</p>
   * @public
   */
  TargetVersion?: string | undefined;

  /**
   * <p>When true, indicates that an upgrade eligibility check was performed.</p>
   * @public
   */
  PerformCheckOnly?: boolean | undefined;

  /**
   * <p>The advanced options configuration for the domain.</p>
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * <p>Container for information about a configuration change happening on a domain.</p>
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;
}
