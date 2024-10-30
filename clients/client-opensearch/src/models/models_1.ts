// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  ActionType,
  AdvancedSecurityOptionsInput,
  AdvancedSecurityOptionsInputFilterSensitiveLog,
  AIMLOptionsInput,
  AppConfig,
  AutoTuneOptions,
  AWSServicePrincipal,
  ChangeProgressDetails,
  ClusterConfig,
  CognitoOptions,
  DataSource,
  DataSourceStatus,
  DataSourceType,
  DomainConfig,
  DomainEndpointOptions,
  DryRunProgressStatus,
  DryRunResults,
  EBSOptions,
  EncryptionAtRestOptions,
  IamIdentityCenterOptions,
  IdentityCenterOptionsInput,
  InboundConnection,
  IPAddressType,
  LogPublishingOption,
  LogType,
  MaintenanceType,
  NodeToNodeEncryptionOptions,
  OffPeakWindowOptions,
  PackageDetails,
  PackageSource,
  ScheduledAction,
  ServiceSoftwareOptions,
  SnapshotOptions,
  SoftwareUpdateOptions,
  VpcEndpoint,
  VPCOptions,
} from "./models_0";

import { OpenSearchServiceException as __BaseException } from "./OpenSearchServiceException";

/**
 * <p>Represents the output of a <code>RejectInboundConnection</code> operation.</p>
 * @public
 */
export interface RejectInboundConnectionResponse {
  /**
   * <p>Contains details about the rejected inbound connection.</p>
   * @public
   */
  Connection?: InboundConnection;
}

/**
 * <p>Container for the request parameters to the <code>RemoveTags</code> operation.</p>
 * @public
 */
export interface RemoveTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain from which you want to delete the specified
   *    tags.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>The list of tag keys to remove from the domain.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
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
  Account?: string;

  /**
   * <p>The service SP to revoke access from.</p>
   * @public
   */
  Service?: AWSServicePrincipal;
}

/**
 * @public
 */
export interface RevokeVpcEndpointAccessResponse {}

/**
 * <p>Container for the parameters to the <code>StartDomainMaintenance</code>
 *    operation.</p>
 * @public
 */
export interface StartDomainMaintenanceRequest {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the action.</p>
   * @public
   */
  Action: MaintenanceType | undefined;

  /**
   * <p>The ID of the data node.</p>
   * @public
   */
  NodeId?: string;
}

/**
 * <p>The result of a <code>StartDomainMaintenance</code> request that information about the requested action. </p>
 * @public
 */
export interface StartDomainMaintenanceResponse {
  /**
   * <p>The request ID of requested action.</p>
   * @public
   */
  MaintenanceId?: string;
}

/**
 * @public
 * @enum
 */
export const ScheduleAt = {
  NOW: "NOW",
  OFF_PEAK_WINDOW: "OFF_PEAK_WINDOW",
  TIMESTAMP: "TIMESTAMP",
} as const;

/**
 * @public
 */
export type ScheduleAt = (typeof ScheduleAt)[keyof typeof ScheduleAt];

/**
 * <p>Container for the request parameters to the <code>StartServiceSoftwareUpdate</code>
 *    operation.</p>
 * @public
 */
export interface StartServiceSoftwareUpdateRequest {
  /**
   * <p>The name of the domain that you want to update to the latest service software.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>When to start the service software update.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOW</code> - Immediately schedules the update to happen in the current hour if
   *      there's capacity available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMESTAMP</code> - Lets you specify a custom date and time to apply the update. If
   *      you specify this value, you must also provide a value for <code>DesiredStartTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFF_PEAK_WINDOW</code> - Marks the update to be picked up during an upcoming
   *      off-peak window. There's no guarantee that the update will happen during the next immediate
   *      window. Depending on capacity, it might happen in subsequent days.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>NOW</code> if you don't specify a value for <code>DesiredStartTime</code>,
   *    and <code>TIMESTAMP</code> if you do.</p>
   * @public
   */
  ScheduleAt?: ScheduleAt;

  /**
   * <p>The Epoch timestamp when you want the service software update to start. You only need to
   *    specify this parameter if you set <code>ScheduleAt</code> to <code>TIMESTAMP</code>.</p>
   * @public
   */
  DesiredStartTime?: number;
}

/**
 * <p>Represents the output of a <code>StartServiceSoftwareUpdate</code> operation. Contains the
 *    status of the update.</p>
 * @public
 */
export interface StartServiceSoftwareUpdateResponse {
  /**
   * <p>The current status of the OpenSearch Service software update.</p>
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>Unique identifier of the OpenSearch Application to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Data sources to be associated with the OpenSearch Application.</p>
   * @public
   */
  dataSources?: DataSource[];

  /**
   * <p>Configurations to be changed for the OpenSearch Application.</p>
   * @public
   */
  appConfigs?: AppConfig[];
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * <p>Unique identifier of the updated OpenSearch Application.</p>
   * @public
   */
  id?: string;

  /**
   * <p>Name of the updated OpenSearch Application.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities
   *   </a> in <i>Using Amazon Web Services Identity and Access Management</i> for more information.
   *   </p>
   * @public
   */
  arn?: string;

  /**
   * <p>Data sources associated with the updated OpenSearch Application.</p>
   * @public
   */
  dataSources?: DataSource[];

  /**
   * <p>IAM Identity Center settings for the updated OpenSearch Application.</p>
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterOptions;

  /**
   * <p>Configurations for the updated OpenSearch Application.</p>
   * @public
   */
  appConfigs?: AppConfig[];

  /**
   * <p>Timestamp at which the OpenSearch Application was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>Timestamp at which the OpenSearch Application was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date;
}

/**
 * <p>Container for the parameters to the <code>UpdateDataSource</code>
 *    operation.</p>
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
  Description?: string;

  /**
   * <p>The status of the data source update.</p>
   * @public
   */
  Status?: DataSourceStatus;
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
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const DryRunMode = {
  Basic: "Basic",
  Verbose: "Verbose",
} as const;

/**
 * @public
 */
export type DryRunMode = (typeof DryRunMode)[keyof typeof DryRunMode];

/**
 * <p>Container for the request parameters to the <code>UpdateDomain</code> operation.</p>
 * @public
 */
export interface UpdateDomainConfigRequest {
  /**
   * <p>The name of the domain that you're updating.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Changes that you want to make to the cluster configuration, such as the instance type and
   *    number of EC2 instances.</p>
   * @public
   */
  ClusterConfig?: ClusterConfig;

  /**
   * <p>The type and size of the EBS volume to attach to instances in the domain.</p>
   * @public
   */
  EBSOptions?: EBSOptions;

  /**
   * <p>Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours.
   *   </p>
   * @public
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>Options to specify the subnets and security groups for a VPC endpoint. For more information,
   *    see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching
   *     your Amazon OpenSearch Service domains using a VPC</a>.</p>
   * @public
   */
  VPCOptions?: VPCOptions;

  /**
   * <p>Key-value pairs to configure Amazon Cognito authentication for OpenSearch Dashboards.</p>
   * @public
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>Key-value pairs to specify advanced configuration options. The following key-value pairs are
   *    supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"rest.action.multi.allow_explicit_index": "true" | "false"</code> - Note the use of
   *      a string rather than a boolean. Specifies whether explicit references to indexes are allowed
   *      inside the body of HTTP requests. If you want to configure access policies for domain
   *      sub-resources, such as specific indexes and domain APIs, you must disable this property.
   *      Default is true.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"indices.fielddata.cache.size": "80" </code> - Note the use of a string rather than
   *      a boolean. Specifies the percentage of heap space allocated to field data. Default is
   *      unbounded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"indices.query.bool.max_clause_count": "1024"</code> - Note the use of a string
   *      rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean
   *      query. Default is 1,024. Queries with more than the permitted number of clauses result in a
   *      <code>TooManyClauses</code> error.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p>
   * @public
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * <p>Identity and Access Management (IAM) access policy as a JSON-formatted string.</p>
   * @public
   */
  AccessPolicies?: string;

  /**
   * <p>Specify either dual stack or IPv4 as your IP address type. Dual stack allows you to share domain resources across
   *    IPv4 and IPv6 address types, and is the recommended option.
   *    If your IP address type is currently set to dual stack, you can't change it.
   *   </p>
   * @public
   */
  IPAddressType?: IPAddressType;

  /**
   * <p>Options to publish OpenSearch logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>>;

  /**
   * <p>Encryption at rest options for the domain.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>Node-to-node encryption options for the domain.</p>
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p>Options for fine-grained access control.</p>
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;

  /**
   * <p>Container for IAM Identity Center Options settings.</p>
   * @public
   */
  IdentityCenterOptions?: IdentityCenterOptionsInput;

  /**
   * <p>Options for Auto-Tune.</p>
   * @public
   */
  AutoTuneOptions?: AutoTuneOptions;

  /**
   * <p>This flag, when set to True, specifies whether the <code>UpdateDomain</code> request should
   *    return the results of a dry run analysis without actually applying the change. A dry run
   *    determines what type of deployment the update will cause.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The type of dry run to perform.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Basic</code> only returns the type of deployment (blue/green or dynamic) that the update
   *      will cause.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Verbose</code> runs an additional check to validate the changes you're making. For
   *      more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes#validation-check">Validating a domain update</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DryRunMode?: DryRunMode;

  /**
   * <p>Off-peak window options for the domain.</p>
   * @public
   */
  OffPeakWindowOptions?: OffPeakWindowOptions;

  /**
   * <p>Service software update options for the domain.</p>
   * @public
   */
  SoftwareUpdateOptions?: SoftwareUpdateOptions;

  /**
   * <p>Options for all machine learning features for the specified domain.</p>
   * @public
   */
  AIMLOptions?: AIMLOptionsInput;
}

/**
 * <p>The results of an <code>UpdateDomain</code> request. Contains the status of the domain being
 *    updated.</p>
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
  DryRunResults?: DryRunResults;

  /**
   * <p>The status of the dry run being performed on the domain, if any.</p>
   * @public
   */
  DryRunProgressStatus?: DryRunProgressStatus;
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
  PackageDescription?: string;

  /**
   * <p>Commit message for the updated file, which is shown as part of
   *     <code>GetPackageVersionHistoryResponse</code>.</p>
   * @public
   */
  CommitMessage?: string;
}

/**
 * <p>Container for the response returned by the <code>UpdatePackage</code> operation.</p>
 * @public
 */
export interface UpdatePackageResponse {
  /**
   * <p>Information about a package.</p>
   * @public
   */
  PackageDetails?: PackageDetails;
}

/**
 * <p>An exception for attempting to schedule a domain action during an unavailable time slot.</p>
 * @public
 */
export class SlotNotAvailableException extends __BaseException {
  readonly name: "SlotNotAvailableException" = "SlotNotAvailableException";
  readonly $fault: "client" = "client";
  /**
   * <p>Alternate time slots during which OpenSearch Service has available capacity to schedule a domain action.</p>
   * @public
   */
  SlotSuggestions?: number[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SlotNotAvailableException, __BaseException>) {
    super({
      name: "SlotNotAvailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SlotNotAvailableException.prototype);
    this.SlotSuggestions = opts.SlotSuggestions;
  }
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
   *    <code>JVM_HEAP_SIZE_TUNING</code>, or <code>JVM_YOUNG_GEN_TUNING</code>. To retrieve this value, send a <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html">ListScheduledActions</a> request.</p>
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * <p>When to schedule the action.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOW</code> - Immediately schedules the update to happen in the current hour if
   *      there's capacity available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMESTAMP</code> - Lets you specify a custom date and time to apply the update. If
   *      you specify this value, you must also provide a value for <code>DesiredStartTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFF_PEAK_WINDOW</code> - Marks the action to be picked up during an upcoming
   *      off-peak window. There's no guarantee that the change will be implemented during the next
   *      immediate window. Depending on capacity, it might happen in subsequent days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScheduleAt: ScheduleAt | undefined;

  /**
   * <p>The time to implement the change, in Coordinated Universal Time (UTC). Only specify this
   *    parameter if you set <code>ScheduleAt</code> to <code>TIMESTAMP</code>.</p>
   * @public
   */
  DesiredStartTime?: number;
}

/**
 * @public
 */
export interface UpdateScheduledActionResponse {
  /**
   * <p>Information about the rescheduled action.</p>
   * @public
   */
  ScheduledAction?: ScheduledAction;
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
 * <p>Container for the request parameters to the <code>UpgradeDomain</code> operation.</p>
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
   *    Opensearch_X.Y or Elasticsearch_X.Y.</p>
   * @public
   */
  TargetVersion: string | undefined;

  /**
   * <p>When true, indicates that an upgrade eligibility check needs to be performed. Does not
   *    actually perform the upgrade.</p>
   * @public
   */
  PerformCheckOnly?: boolean;

  /**
   * <p>Only supports the <code>override_main_response_version</code> parameter and not other
   *    advanced options. You can only include this option when upgrading to an OpenSearch version.
   *    Specifies whether the domain reports its version as 7.10 so that it continues to work with
   *    Elasticsearch OSS clients and plugins.</p>
   * @public
   */
  AdvancedOptions?: Record<string, string>;
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
  UpgradeId?: string;

  /**
   * <p>The name of the domain that was upgraded.</p>
   * @public
   */
  DomainName?: string;

  /**
   * <p>OpenSearch or Elasticsearch version that the domain was upgraded to.</p>
   * @public
   */
  TargetVersion?: string;

  /**
   * <p>When true, indicates that an upgrade eligibility check was performed.</p>
   * @public
   */
  PerformCheckOnly?: boolean;

  /**
   * <p>The advanced options configuration for the domain.</p>
   * @public
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * <p>Container for information about a configuration change happening on a domain.</p>
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails;
}

/**
 * @internal
 */
export const UpdateDomainConfigRequestFilterSensitiveLog = (obj: UpdateDomainConfigRequest): any => ({
  ...obj,
  ...(obj.AdvancedSecurityOptions && {
    AdvancedSecurityOptions: AdvancedSecurityOptionsInputFilterSensitiveLog(obj.AdvancedSecurityOptions),
  }),
});
