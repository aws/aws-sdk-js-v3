// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DatabaseMigrationServiceServiceException as __BaseException } from "./DatabaseMigrationServiceServiceException";
import {
  ComputeConfig,
  Connection,
  DataProviderDescriptorDefinition,
  EventSubscription,
  InstanceProfile,
  MigrationProject,
  MigrationTypeValue,
  RecommendationSettings,
  RefreshSchemasStatus,
  Replication,
  ReplicationConfig,
  ReplicationInstance,
  ReplicationSubnetGroup,
  ReplicationTask,
  ReplicationTaskAssessmentRun,
  SCApplicationAttributes,
} from "./models_0";

/**
 * @public
 * <p></p>
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * @public
   * <p>The name of the DMS event notification subscription to be modified.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.
   *          The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p> The type of DMS resource that generates the events you want to subscribe to. </p>
   *          <p>Valid values: replication-instance | replication-task</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p> A list of event categories for a source type that you want to subscribe to. Use the
   *             <code>DescribeEventCategories</code> action to see a list of event categories. </p>
   */
  EventCategories?: string[];

  /**
   * @public
   * <p> A Boolean value; set to <b>true</b> to activate the
   *          subscription. </p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyEventSubscriptionResponse {
  /**
   * @public
   * <p>The modified event subscription.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 */
export interface ModifyInstanceProfileMessage {
  /**
   * @public
   * <p>The identifier of the instance profile. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive
   *          hyphens.</p>
   */
  InstanceProfileIdentifier: string | undefined;

  /**
   * @public
   * <p>The Availability Zone where the instance profile runs.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key that is used to encrypt
   *          the connection parameters for the instance profile.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyArn</code> parameter, then
   *          DMS uses your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a
   *          different default encryption key for each Amazon Web Services Region.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>Specifies the accessibility options for the instance profile. A value of
   *          <code>true</code> represents an instance profile with a public IP address. A value of
   *          <code>false</code> represents an instance profile with a private IP address. The default value
   *          is <code>true</code>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>Specifies the network type for the instance profile. A value of <code>IPV4</code>
   *          represents an instance profile with IPv4 network type and only supports IPv4 addressing.
   *          A value of <code>IPV6</code> represents an instance profile with IPv6 network type
   *          and only supports IPv6 addressing. A value of <code>DUAL</code> represents an instance
   *          profile with dual network type that supports IPv4 and IPv6 addressing.</p>
   */
  NetworkType?: string;

  /**
   * @public
   * <p>A user-friendly name for the instance profile.</p>
   */
  InstanceProfileName?: string;

  /**
   * @public
   * <p>A user-friendly description for the instance profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A subnet group to associate with the instance profile.</p>
   */
  SubnetGroupIdentifier?: string;

  /**
   * @public
   * <p>Specifies the VPC security groups to be used with the instance profile.
   *          The VPC security group must work with the VPC containing the instance profile.</p>
   */
  VpcSecurityGroups?: string[];
}

/**
 * @public
 */
export interface ModifyInstanceProfileResponse {
  /**
   * @public
   * <p>The instance profile that was modified.</p>
   */
  InstanceProfile?: InstanceProfile;
}

/**
 * @public
 */
export interface ModifyMigrationProjectMessage {
  /**
   * @public
   * <p>The identifier of the migration project. Identifiers must begin with a letter
   *          and must contain only ASCII letters, digits, and hyphens. They can't end with
   *          a hyphen, or contain two consecutive hyphens.</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A user-friendly name for the migration project.</p>
   */
  MigrationProjectName?: string;

  /**
   * @public
   * <p>Information about the source data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.</p>
   */
  SourceDataProviderDescriptors?: DataProviderDescriptorDefinition[];

  /**
   * @public
   * <p>Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.</p>
   */
  TargetDataProviderDescriptors?: DataProviderDescriptorDefinition[];

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) for the instance profile.</p>
   */
  InstanceProfileIdentifier?: string;

  /**
   * @public
   * <p>The settings in JSON format for migration rules. Migration rules make it possible for you to change
   *          the object names according to the rules that you specify. For example, you can change an object name
   *          to lowercase or uppercase, add or remove a prefix or suffix, or rename objects.</p>
   */
  TransformationRules?: string;

  /**
   * @public
   * <p>A user-friendly description of the migration project.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.</p>
   */
  SchemaConversionApplicationAttributes?: SCApplicationAttributes;
}

/**
 * @public
 */
export interface ModifyMigrationProjectResponse {
  /**
   * @public
   * <p>The migration project that was modified.</p>
   */
  MigrationProject?: MigrationProject;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationConfigMessage {
  /**
   * @public
   * <p>The Amazon Resource Name of the replication to modify.</p>
   */
  ReplicationConfigArn: string | undefined;

  /**
   * @public
   * <p>The new replication config to apply to the replication.</p>
   */
  ReplicationConfigIdentifier?: string;

  /**
   * @public
   * <p>The type of replication.</p>
   */
  ReplicationType?: MigrationTypeValue | string;

  /**
   * @public
   * <p>Table mappings specified in the replication.</p>
   */
  TableMappings?: string;

  /**
   * @public
   * <p>The settings for the replication.</p>
   */
  ReplicationSettings?: string;

  /**
   * @public
   * <p>Additional settings for the replication.</p>
   */
  SupplementalSettings?: string;

  /**
   * @public
   * <p>Configuration parameters for provisioning an DMS Serverless replication.</p>
   */
  ComputeConfig?: ComputeConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source endpoint for
   *          this DMS serverless replication configuration.</p>
   */
  SourceEndpointArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target endpoint for
   *          this DMS serverless replication configuration.</p>
   */
  TargetEndpointArn?: string;
}

/**
 * @public
 */
export interface ModifyReplicationConfigResponse {
  /**
   * @public
   * <p>Information about the serverless replication config that was modified.</p>
   */
  ReplicationConfig?: ReplicationConfig;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationInstanceMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * @public
   * <p>The amount of storage (in gigabytes) to be allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>Indicates whether the changes should be applied immediately or during the next
   *          maintenance window.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * @public
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. For example to specify the instance class dms.c4.large, set this parameter to <code>"dms.c4.large"</code>.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth">
   *             Selecting the right DMS replication instance for your migration</a>.
   *       </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * @public
   * <p> Specifies the VPC security group to be used with the replication instance. The VPC
   *          security group must work with the VPC containing the replication instance. </p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which might
   *          result in an outage. Changing this parameter does not result in an outage, except in the
   *          following situation, and the change is asynchronously applied as soon as possible. If
   *          moving this window to the current time, there must be at least 30 minutes between the
   *          current time and end of the window to ensure pending changes are applied.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Format: ddd:hh24:mi-ddd:hh24:mi</p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Must be at least 30 minutes</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>The engine version number of the replication instance.</p>
   *          <p>When modifying a major engine version of an instance, also set
   *          <code>AllowMajorVersionUpgrade</code> to <code>true</code>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Indicates that major version upgrades are allowed. Changing this parameter does not
   *          result in an outage, and the change is asynchronously applied as soon as possible.</p>
   *          <p>This parameter must be set to <code>true</code> when specifying a value for the
   *             <code>EngineVersion</code> parameter that is a different major version than the
   *          replication instance's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>A value that indicates that minor version upgrades are applied automatically to the
   *          replication instance during the maintenance window. Changing this parameter doesn't result
   *          in an outage, except in the case described following. The change is asynchronously applied
   *          as soon as possible. </p>
   *          <p>An outage does result if these factors apply: </p>
   *          <ul>
   *             <li>
   *                <p>This parameter is set to <code>true</code> during the maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>A newer minor version is available. </p>
   *             </li>
   *             <li>
   *                <p>DMS has enabled automatic patching for the given engine version. </p>
   *             </li>
   *          </ul>
   *          <p>When <code>AutoMinorVersionUpgrade</code> is enabled, DMS uses the current default
   *          engine version when you modify a replication instance. For example, if you set
   *          <code>EngineVersion</code> to a lower version number than the current default version,
   *          DMS uses the default version.</p>
   *          <p>If <code>AutoMinorVersionUpgrade</code>
   *             <i>isn’t</i> enabled when you modify a replication instance, DMS uses the
   *          engine version specified by the <code>EngineVersion</code> parameter.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   */
  ReplicationInstanceIdentifier?: string;

  /**
   * @public
   * <p>The type of IP address protocol used by a replication instance,
   *          such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.
   *          IPv6 only is not yet supported.</p>
   */
  NetworkType?: string;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationInstanceResponse {
  /**
   * @public
   * <p>The modified replication instance.</p>
   */
  ReplicationInstance?: ReplicationInstance;
}

/**
 * @public
 * <p>An upgrade dependency is preventing the database migration.</p>
 */
export class UpgradeDependencyFailureFault extends __BaseException {
  readonly name: "UpgradeDependencyFailureFault" = "UpgradeDependencyFailureFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UpgradeDependencyFailureFault, __BaseException>) {
    super({
      name: "UpgradeDependencyFailureFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UpgradeDependencyFailureFault.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationSubnetGroupMessage {
  /**
   * @public
   * <p>The name of the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>A description for the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupDescription?: string;

  /**
   * @public
   * <p>A list of subnet IDs.</p>
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationSubnetGroupResponse {
  /**
   * @public
   * <p>The modified replication subnet group.</p>
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}

/**
 * @public
 * <p>The specified subnet is already in use.</p>
 */
export class SubnetAlreadyInUse extends __BaseException {
  readonly name: "SubnetAlreadyInUse" = "SubnetAlreadyInUse";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetAlreadyInUse, __BaseException>) {
    super({
      name: "SubnetAlreadyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetAlreadyInUse.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationTaskMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * @public
   * <p>The replication task identifier.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1-255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ReplicationTaskIdentifier?: string;

  /**
   * @public
   * <p>The migration type. Valid values: <code>full-load</code> | <code>cdc</code> | <code>full-load-and-cdc</code>
   *          </p>
   */
  MigrationType?: MigrationTypeValue | string;

  /**
   * @public
   * <p>When using the CLI or boto3, provide the path of the JSON file that contains the
   *          table mappings. Precede the path with <code>file://</code>.  For example,
   *          <code>--table-mappings file://mappingfile.json</code>. When working with the DMS  API,
   *          provide the JSON as the parameter value.
   *     </p>
   */
  TableMappings?: string;

  /**
   * @public
   * <p>JSON file that contains settings for the task, such as task metadata settings.</p>
   */
  ReplicationTaskSettings?: string;

  /**
   * @public
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *          CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p> The value can be in date, checkpoint, or LSN/SCN format.</p>
   *          <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p>
   *          <p>Checkpoint Example: --cdc-start-position
   *          "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p>
   *          <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>
   *          <note>
   *             <p>When you use this task setting with a source PostgreSQL database, a logical
   *             replication slot should already be created and associated with the source endpoint. You
   *             can verify this by setting the <code>slotName</code> extra connection attribute to the
   *             name of this logical replication slot. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra Connection Attributes When Using PostgreSQL as a Source
   *                for DMS</a>.</p>
   *          </note>
   */
  CdcStartPosition?: string;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time: 2018-02-09T12:12:12“</p>
   */
  CdcStopPosition?: string;

  /**
   * @public
   * <p>Supplemental information that the task requires to migrate the data for certain source and target endpoints.
   *             For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for Task Settings</a> in the
   *          <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  TaskData?: string;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationTaskResponse {
  /**
   * @public
   * <p>The replication task that was modified.</p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 * <p></p>
 */
export interface MoveReplicationTaskMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the task that you want to move.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the replication instance where you want to move the task to.</p>
   */
  TargetReplicationInstanceArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface MoveReplicationTaskResponse {
  /**
   * @public
   * <p>The replication task that was moved.</p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 */
export interface RebootReplicationInstanceMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * @public
   * <p>If this parameter is <code>true</code>, the reboot is conducted through a Multi-AZ
   *          failover. If the instance isn't configured for Multi-AZ, then you can't specify
   *          <code>true</code>.  ( <code>--force-planned-failover</code> and <code>--force-failover</code> can't both be set to <code>true</code>.)</p>
   */
  ForceFailover?: boolean;

  /**
   * @public
   * <p>If this parameter is <code>true</code>, the reboot is conducted through a planned Multi-AZ failover
   *          where resources are released and cleaned up prior to conducting the failover.
   *          If the instance isn''t configured for Multi-AZ, then you can't specify <code>true</code>.
   *          ( <code>--force-planned-failover</code> and <code>--force-failover</code> can't both be set to <code>true</code>.)</p>
   */
  ForcePlannedFailover?: boolean;
}

/**
 * @public
 */
export interface RebootReplicationInstanceResponse {
  /**
   * @public
   * <p>The replication instance that is being rebooted. </p>
   */
  ReplicationInstance?: ReplicationInstance;
}

/**
 * @public
 * <p></p>
 */
export interface RefreshSchemasMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface RefreshSchemasResponse {
  /**
   * @public
   * <p>The status of the refreshed schema.</p>
   */
  RefreshSchemasStatus?: RefreshSchemasStatus;
}

/**
 * @public
 * @enum
 */
export const ReloadOptionValue = {
  DATA_RELOAD: "data-reload",
  VALIDATE_ONLY: "validate-only",
} as const;

/**
 * @public
 */
export type ReloadOptionValue = (typeof ReloadOptionValue)[keyof typeof ReloadOptionValue];

/**
 * @public
 * <p>Provides the name of the schema and table to be reloaded.</p>
 */
export interface TableToReload {
  /**
   * @public
   * <p>The schema name of the table to be reloaded.</p>
   */
  SchemaName: string | undefined;

  /**
   * @public
   * <p>The table name of the table to be reloaded.</p>
   */
  TableName: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface ReloadReplicationTablesMessage {
  /**
   * @public
   * <p>The Amazon Resource Name of the replication config for which to reload tables.</p>
   */
  ReplicationConfigArn: string | undefined;

  /**
   * @public
   * <p>The list of tables to reload.</p>
   */
  TablesToReload: TableToReload[] | undefined;

  /**
   * @public
   * <p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate
   *          it if validation is enabled. Specify <code>validate-only</code> to re-validate the table.
   *          This option applies only when validation is enabled for the replication. </p>
   */
  ReloadOption?: ReloadOptionValue | string;
}

/**
 * @public
 * <p></p>
 */
export interface ReloadReplicationTablesResponse {
  /**
   * @public
   * <p>The Amazon Resource Name of the replication config for which to reload tables.</p>
   */
  ReplicationConfigArn?: string;
}

/**
 * @public
 */
export interface ReloadTablesMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * @public
   * <p>The name and schema of the table to be reloaded. </p>
   */
  TablesToReload: TableToReload[] | undefined;

  /**
   * @public
   * <p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate
   *          it if validation is enabled. Specify <code>validate-only</code> to re-validate the table.
   *          This option applies only when validation is enabled for the task. </p>
   *          <p>Valid values: data-reload, validate-only</p>
   *          <p>Default value is data-reload.</p>
   */
  ReloadOption?: ReloadOptionValue | string;
}

/**
 * @public
 */
export interface ReloadTablesResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn?: string;
}

/**
 * @public
 * <p>Removes one or more tags from an DMS resource.</p>
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * @public
   * <p>An DMS resource from which you want to remove tag(s). The value for this parameter is an Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface RemoveTagsFromResourceResponse {}

/**
 * @public
 */
export interface RunFleetAdvisorLsaAnalysisResponse {
  /**
   * @public
   * <p>The ID of the LSA analysis run.</p>
   */
  LsaAnalysisId?: string;

  /**
   * @public
   * <p>The status of the LSA analysis, for example <code>COMPLETED</code>.</p>
   */
  Status?: string;
}

/**
 * @public
 */
export interface StartExtensionPackAssociationMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartExtensionPackAssociationResponse {
  /**
   * @public
   * <p>The identifier for the request operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 */
export interface StartMetadataModelAssessmentMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that specifies the database objects to assess.</p>
   */
  SelectionRules: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelAssessmentResponse {
  /**
   * @public
   * <p>The identifier for the assessment operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 */
export interface StartMetadataModelConversionMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that specifies the database objects to convert.</p>
   */
  SelectionRules: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelConversionResponse {
  /**
   * @public
   * <p>The identifier for the conversion operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 * @enum
 */
export const OriginTypeValue = {
  SOURCE: "SOURCE",
  TARGET: "TARGET",
} as const;

/**
 * @public
 */
export type OriginTypeValue = (typeof OriginTypeValue)[keyof typeof OriginTypeValue];

/**
 * @public
 */
export interface StartMetadataModelExportAsScriptMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that specifies the database objects to export.</p>
   */
  SelectionRules: string | undefined;

  /**
   * @public
   * <p>Whether to export the metadata model from the source or the target.</p>
   */
  Origin: OriginTypeValue | string | undefined;

  /**
   * @public
   * <p>The name of the model file to create in the Amazon S3 bucket.</p>
   */
  FileName?: string;
}

/**
 * @public
 */
export interface StartMetadataModelExportAsScriptResponse {
  /**
   * @public
   * <p>The identifier for the export operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 */
export interface StartMetadataModelExportToTargetMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that specifies the database objects to export.</p>
   */
  SelectionRules: string | undefined;

  /**
   * @public
   * <p>Whether to overwrite the migration project extension pack. An extension pack is an add-on module
   *          that emulates functions present in a source database that are required when converting objects
   *          to the target database.</p>
   */
  OverwriteExtensionPack?: boolean;
}

/**
 * @public
 */
export interface StartMetadataModelExportToTargetResponse {
  /**
   * @public
   * <p>The identifier for the export operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 */
export interface StartMetadataModelImportMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that specifies the database objects to import.</p>
   */
  SelectionRules: string | undefined;

  /**
   * @public
   * <p>Whether to load metadata to the source or target database.</p>
   */
  Origin: OriginTypeValue | string | undefined;

  /**
   * @public
   * <p>If <code>true</code>, DMS loads metadata for the specified objects from the source database.</p>
   */
  Refresh?: boolean;
}

/**
 * @public
 */
export interface StartMetadataModelImportResponse {
  /**
   * @public
   * <p>The identifier for the import operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 */
export interface StartRecommendationsRequest {
  /**
   * @public
   * <p>The identifier of the source database to analyze and provide recommendations
   *             for.</p>
   */
  DatabaseId: string | undefined;

  /**
   * @public
   * <p>The settings in JSON format that Fleet Advisor uses to determine target engine
   *             recommendations. These parameters include target instance sizing and availability and
   *             durability settings. For target instance sizing, Fleet Advisor supports the following
   *             two options: total capacity and resource utilization. For availability and durability,
   *             Fleet Advisor supports the following two options: production (Multi-AZ deployments) and
   *             Dev/Test (Single-AZ deployments).</p>
   */
  Settings: RecommendationSettings | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationMessage {
  /**
   * @public
   * <p>The Amazon Resource Name of the replication for which to start replication.</p>
   */
  ReplicationConfigArn: string | undefined;

  /**
   * @public
   * <p>The replication type.</p>
   */
  StartReplicationType: string | undefined;

  /**
   * @public
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either <code>CdcStartTime</code>
   *          or <code>CdcStartPosition</code> to specify when you want a CDC operation to start. Specifying both values results in an error.</p>
   */
  CdcStartTime?: Date;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *          <code>CdcStartPosition</code> or <code>CdcStartTime</code> to specify when you want a
   *          CDC operation to start. Specifying both values results in an error.</p>
   *          <p>The value can be in date, checkpoint, or LSN/SCN format.</p>
   */
  CdcStartPosition?: string;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   */
  CdcStopPosition?: string;
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationResponse {
  /**
   * @public
   * <p>The replication that DMS started.</p>
   */
  Replication?: Replication;
}

/**
 * @public
 * @enum
 */
export const StartReplicationTaskTypeValue = {
  RELOAD_TARGET: "reload-target",
  RESUME_PROCESSING: "resume-processing",
  START_REPLICATION: "start-replication",
} as const;

/**
 * @public
 */
export type StartReplicationTaskTypeValue =
  (typeof StartReplicationTaskTypeValue)[keyof typeof StartReplicationTaskTypeValue];

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task to be started.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * @public
   * <p>The type of replication task to start.</p>
   *          <p>When the migration type is <code>full-load</code> or <code>full-load-and-cdc</code>, the only valid value
   *            for the first run of the task is <code>start-replication</code>. This option will start the migration.</p>
   *          <p>You can also use <a>ReloadTables</a> to reload specific tables that failed during migration instead
   *          of restarting the task.</p>
   *          <p>The <code>resume-processing</code> option isn't applicable for a full-load task,
   *          because you can't resume partially loaded tables during the full load phase.</p>
   *          <p>For a <code>full-load-and-cdc</code> task, DMS migrates table data, and then applies data changes
   *          that occur on the source. To load all the tables again, and start capturing source changes,
   *          use <code>reload-target</code>. Otherwise use <code>resume-processing</code>, to replicate the
   *          changes from the last stop position.</p>
   */
  StartReplicationTaskType: StartReplicationTaskTypeValue | string | undefined;

  /**
   * @public
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *          CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p> The value can be in date, checkpoint, or LSN/SCN format.</p>
   *          <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p>
   *          <p>Checkpoint Example: --cdc-start-position
   *          "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p>
   *          <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>
   *          <note>
   *             <p>When you use this task setting with a source PostgreSQL database, a logical
   *             replication slot should already be created and associated with the source endpoint. You
   *             can verify this by setting the <code>slotName</code> extra connection attribute to the
   *             name of this logical replication slot. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra Connection Attributes When Using PostgreSQL as a Source
   *                for DMS</a>.</p>
   *          </note>
   */
  CdcStartPosition?: string;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time: 2018-02-09T12:12:12“</p>
   */
  CdcStopPosition?: string;
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskResponse {
  /**
   * @public
   * <p>The replication task started.</p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskAssessmentMessage {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskAssessmentResponse {
  /**
   * @public
   * <p> The assessed replication task. </p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 * <p>An Key Management Service (KMS) error is preventing access to KMS.</p>
 */
export class KMSFault extends __BaseException {
  readonly name: "KMSFault" = "KMSFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSFault, __BaseException>) {
    super({
      name: "KMSFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSFault.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskAssessmentRunMessage {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the migration task associated with the premigration
   *          assessment run that you want to start.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * @public
   * <p>ARN of the service role needed to start the assessment run. The role must allow the <code>iam:PassRole</code> action.</p>
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>Amazon S3 bucket where you want DMS to store the results of this assessment
   *          run.</p>
   */
  ResultLocationBucket: string | undefined;

  /**
   * @public
   * <p>Folder within an Amazon S3 bucket where you want DMS to store the results of this assessment
   *          run.</p>
   */
  ResultLocationFolder?: string;

  /**
   * @public
   * <p>Encryption mode that you can specify to encrypt the results of this assessment run. If
   *          you don't specify this request parameter, DMS stores the assessment run results
   *          without encryption. You can specify one of the options following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"SSE_S3"</code> – The server-side encryption provided as a default by
   *                Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"SSE_KMS"</code> – Key Management Service (KMS) encryption.
   *                This encryption can use either a custom KMS encryption key that you specify or the
   *                default KMS encryption key that DMS provides.</p>
   *             </li>
   *          </ul>
   */
  ResultEncryptionMode?: string;

  /**
   * @public
   * <p>ARN of a custom KMS encryption key that you specify when you set
   *             <code>ResultEncryptionMode</code> to <code>"SSE_KMS</code>".</p>
   */
  ResultKmsKeyArn?: string;

  /**
   * @public
   * <p>Unique name to identify the assessment run.</p>
   */
  AssessmentRunName: string | undefined;

  /**
   * @public
   * <p>Space-separated list of names for specific individual assessments that you want to
   *          include. These names come from the default list of individual assessments that DMS
   *          supports for the associated migration task. This task is specified by
   *             <code>ReplicationTaskArn</code>.</p>
   *          <note>
   *             <p>You can't set a value for <code>IncludeOnly</code> if you also set a value for
   *             <code>Exclude</code> in the API operation. </p>
   *             <p>To identify the names of the default individual assessments that DMS
   *             supports for the associated migration task, run the
   *             <code>DescribeApplicableIndividualAssessments</code> operation using its own
   *             <code>ReplicationTaskArn</code> request parameter.</p>
   *          </note>
   */
  IncludeOnly?: string[];

  /**
   * @public
   * <p>Space-separated list of names for specific individual assessments that you want to
   *          exclude. These names come from the default list of individual assessments that DMS
   *          supports for the associated migration task. This task is specified by
   *             <code>ReplicationTaskArn</code>.</p>
   *          <note>
   *             <p>You can't set a value for <code>Exclude</code> if you also set a value for
   *             <code>IncludeOnly</code> in the API operation.</p>
   *             <p>To identify the names of the default individual assessments that DMS
   *             supports for the associated migration task, run the
   *             <code>DescribeApplicableIndividualAssessments</code> operation using its own
   *             <code>ReplicationTaskArn</code> request parameter.</p>
   *          </note>
   */
  Exclude?: string[];
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskAssessmentRunResponse {
  /**
   * @public
   * <p>The premigration assessment run that was started.</p>
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}

/**
 * @public
 * <p></p>
 */
export interface StopReplicationMessage {
  /**
   * @public
   * <p>The Amazon Resource Name of the replication to stop.</p>
   */
  ReplicationConfigArn: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationResponse {
  /**
   * @public
   * <p>The replication that DMS stopped.</p>
   */
  Replication?: Replication;
}

/**
 * @public
 * <p></p>
 */
export interface StopReplicationTaskMessage {
  /**
   * @public
   * <p>The Amazon Resource Name(ARN) of the replication task to be stopped.</p>
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface StopReplicationTaskResponse {
  /**
   * @public
   * <p>The replication task stopped.</p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 * <p></p>
 */
export interface TestConnectionMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface TestConnectionResponse {
  /**
   * @public
   * <p>The connection tested.</p>
   */
  Connection?: Connection;
}

/**
 * @public
 * <p></p>
 */
export interface UpdateSubscriptionsToEventBridgeMessage {
  /**
   * @public
   * <p>When set to true, this operation migrates DMS subscriptions for Amazon SNS
   *          notifications no matter what your replication instance version is. If not set or set to
   *          false, this operation runs only when all your replication instances are from DMS
   *          version 3.4.6 or higher.
   *       </p>
   */
  ForceMove?: boolean;
}

/**
 * @public
 * <p></p>
 */
export interface UpdateSubscriptionsToEventBridgeResponse {
  /**
   * @public
   * <p>A string that indicates how many event subscriptions were migrated and how many remain to be migrated.</p>
   */
  Result?: string;
}
