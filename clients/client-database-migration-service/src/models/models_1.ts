// smithy-typescript generated code
import type {
  OriginTypeValue,
  ReloadOptionValue,
  StartReplicationMigrationTypeValue,
  StartReplicationTaskTypeValue,
} from "./enums";
import type {
  Connection,
  DataMigration,
  RecommendationSettings,
  RefreshSchemasStatus,
  Replication,
  ReplicationInstance,
  ReplicationTask,
  ReplicationTaskAssessmentRun,
  Tag,
} from "./models_0";

/**
 * @public
 */
export interface RebootReplicationInstanceResponse {
  /**
   * The replication instance that is being rebooted.
   *
   * @public
   */
  ReplicationInstance?: ReplicationInstance | undefined;
}

/**
 * @public
 */
export interface RefreshSchemasMessage {
  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
   *
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replication instance.
   *
   * @public
   */
  ReplicationInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface RefreshSchemasResponse {
  /**
   * The status of the refreshed schema.
   *
   * @public
   */
  RefreshSchemasStatus?: RefreshSchemasStatus | undefined;
}

/**
 * Provides the name of the schema and table to be reloaded.
 *
 * @public
 */
export interface TableToReload {
  /**
   * The schema name of the table to be reloaded.
   *
   * @public
   */
  SchemaName: string | undefined;

  /**
   * The table name of the table to be reloaded.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface ReloadReplicationTablesMessage {
  /**
   * The Amazon Resource Name of the replication config for which to reload tables.
   *
   * @public
   */
  ReplicationConfigArn: string | undefined;

  /**
   * The list of tables to reload.
   *
   * @public
   */
  TablesToReload: TableToReload[] | undefined;

  /**
   * Options for reload. Specify `data-reload` to reload the data and re-validate it if validation is enabled. Specify `validate-only` to re-validate the table. This option applies only when validation is enabled for the replication.
   *
   * @public
   */
  ReloadOption?: ReloadOptionValue | undefined;
}

/**
 * @public
 */
export interface ReloadReplicationTablesResponse {
  /**
   * The Amazon Resource Name of the replication config for which to reload tables.
   *
   * @public
   */
  ReplicationConfigArn?: string | undefined;
}

/**
 * @public
 */
export interface ReloadTablesMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication task.
   *
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * The name and schema of the table to be reloaded.
   *
   * @public
   */
  TablesToReload: TableToReload[] | undefined;

  /**
   * Options for reload. Specify `data-reload` to reload the data and re-validate it if validation is enabled. Specify `validate-only` to re-validate the table. This option applies only when validation is enabled for the task.
   *
   * Valid values: data-reload, validate-only
   *
   * Default value is data-reload.
   *
   * @public
   */
  ReloadOption?: ReloadOptionValue | undefined;
}

/**
 * @public
 */
export interface ReloadTablesResponse {
  /**
   * The Amazon Resource Name (ARN) of the replication task.
   *
   * @public
   */
  ReplicationTaskArn?: string | undefined;
}

/**
 * Removes one or more tags from an DMS resource.
 *
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * An DMS resource from which you want to remove tag(s). The value for this parameter is an Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag key (name) of the tag to be removed.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceResponse {}

/**
 * @public
 */
export interface RunFleetAdvisorLsaAnalysisResponse {
  /**
   * The ID of the LSA analysis run.
   *
   * @public
   */
  LsaAnalysisId?: string | undefined;

  /**
   * The status of the LSA analysis, for example `COMPLETED`.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface StartDataMigrationMessage {
  /**
   * The identifier (name or ARN) of the data migration to start.
   *
   * @public
   */
  DataMigrationIdentifier: string | undefined;

  /**
   * Specifies the start type for the data migration. Valid values include `start-replication`, `reload-target`, and `resume-processing`.
   *
   * @public
   */
  StartType: StartReplicationMigrationTypeValue | undefined;
}

/**
 * @public
 */
export interface StartDataMigrationResponse {
  /**
   * The data migration that DMS started.
   *
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * @public
 */
export interface StartExtensionPackAssociationMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartExtensionPackAssociationResponse {
  /**
   * The identifier for the installation request.
   *
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelAssessmentMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * A JSON string that identifies the metadata models to assess. For the selection rule format and examples, see [Selection rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-selection-rules.html).
   *
   * Usage:
   *
   * - Accepts only source selection rules, where `server-name` in the object locator matches the source data provider.
   * - Supports `explicit`, `include`, and `exclude` rule actions.
   *
   * @public
   */
  SelectionRules: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelAssessmentResponse {
  /**
   * The identifier for the assessment request.
   *
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelConversionMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * A JSON string that identifies the metadata models to convert. For the selection rule format and examples, see [Selection rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-selection-rules.html).
   *
   * Usage:
   *
   * - Accepts only source selection rules, where `server-name` in the object locator matches the source data provider.
   * - Supports `explicit`, `include`, and `exclude` rule actions.
   *
   * @public
   */
  SelectionRules: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelConversionResponse {
  /**
   * The identifier for the conversion request.
   *
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * The properties of the SQL statement.
 *
 * @public
 */
export interface StatementProperties {
  /**
   * The SQL text of the statement.
   *
   * @public
   */
  Definition: string | undefined;
}

/**
 * The properties of the metadata model.
 *
 * @public
 */
export type MetadataModelProperties =
  | MetadataModelProperties.StatementPropertiesMember
  | MetadataModelProperties.$UnknownMember;

/**
 * @public
 */
export namespace MetadataModelProperties {
  /**
   * The properties of the SQL statement.
   *
   * @public
   */
  export interface StatementPropertiesMember {
    StatementProperties: StatementProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StatementProperties?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StatementProperties: (value: StatementProperties) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartMetadataModelCreationMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * A JSON string that identifies the source schema for the metadata model. For the selection rule format and examples, see [Selection rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-selection-rules.html).
   *
   * Usage:
   *
   * - Accepts only source selection rules, where `server-name` in the object locator matches the source data provider.
   * - Supports only `explicit` rule actions.
   * - Exactly one rule is allowed.
   *
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * The name for the metadata model to use in subsequent operations.
   *
   * @public
   */
  MetadataModelName: string | undefined;

  /**
   * The properties of the metadata model.
   *
   * @public
   */
  Properties: MetadataModelProperties | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelCreationResponse {
  /**
   * The identifier for the creation request.
   *
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelExportAsScriptMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * A JSON string that identifies the metadata models to export as a SQL script. For the selection rule format and examples, see [Selection rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-selection-rules.html).
   *
   * Usage:
   *
   * - Accepts source or target selection rules depending on the `Origin` parameter. The `server-name` in the object locator must match the corresponding data provider.
   * - Supports `explicit`, `include`, and `exclude` rule actions.
   *
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * Specifies the metadata tree to export from.
   *
   * @public
   */
  Origin: OriginTypeValue | undefined;

  /**
   * The name for the exported file. When you omit this parameter, the service generates a name from the data provider engine name and an export timestamp.
   *
   * @public
   */
  FileName?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelExportAsScriptResponse {
  /**
   * The identifier for the export request.
   *
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelExportToTargetMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * A JSON string that identifies the metadata models to export to the target database. For the selection rule format and examples, see [Selection rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-selection-rules.html).
   *
   * Usage:
   *
   * - Accepts only target selection rules, where `server-name` in the object locator matches the target data provider.
   * - Supports `explicit`, `include`, and `exclude` rule actions.
   *
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * Specifies whether to overwrite the extension pack if one already exists on the target database. The default value is `true`.
   *
   * @public
   */
  OverwriteExtensionPack?: boolean | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelExportToTargetResponse {
  /**
   * The identifier for the export request.
   *
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelImportMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * A JSON string that identifies the metadata models to import from the data provider. For the selection rule format and examples, see [Selection rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-selection-rules.html).
   *
   * Usage:
   *
   * - Accepts source or target selection rules depending on the `Origin` parameter. The `server-name` in the object locator must match the corresponding data provider.
   * - Supports `explicit`, `include`, and `exclude` rule actions.
   *
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * Specifies the metadata tree to import into.
   *
   * > **Note:** You cannot import from a virtual target data provider.
   *
   * @public
   */
  Origin: OriginTypeValue | undefined;

  /**
   * Specifies whether to refresh the selected metadata models from the data provider.
   *
   * When `true`, the import reloads the selected metadata models with current definitions and removes their existing subtree.
   *
   * When `false` (default), the import loads the full subtree that has not yet been loaded into the metadata tree.
   *
   * @public
   */
  Refresh?: boolean | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelImportResponse {
  /**
   * The identifier for the import request.
   *
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartRecommendationsRequest {
  /**
   * The identifier of the source database to analyze and provide recommendations for.
   *
   * @public
   */
  DatabaseId: string | undefined;

  /**
   * The settings in JSON format that Fleet Advisor uses to determine target engine recommendations. These parameters include target instance sizing and availability and durability settings. For target instance sizing, Fleet Advisor supports the following two options: total capacity and resource utilization. For availability and durability, Fleet Advisor supports the following two options: production (Multi-AZ deployments) and Dev/Test (Single-AZ deployments).
   *
   * @public
   */
  Settings: RecommendationSettings | undefined;
}

/**
 * @public
 */
export interface StartReplicationMessage {
  /**
   * The Amazon Resource Name of the replication for which to start replication.
   *
   * @public
   */
  ReplicationConfigArn: string | undefined;

  /**
   * The replication type.
   *
   * When the replication type is `full-load` or `full-load-and-cdc`, the only valid value for the first run of the replication is `start-replication`. This option will start the replication.
   *
   * You can also use ReloadTables to reload specific tables that failed during replication instead of restarting the replication.
   *
   * The `resume-processing` option isn't applicable for a full-load replication, because you can't resume partially loaded tables during the full load phase.
   *
   * For a `full-load-and-cdc` replication, DMS migrates table data, and then applies data changes that occur on the source. To load all the tables again, and start capturing source changes, use `reload-target`. Otherwise use `resume-processing`, to replicate the changes from the last stop position.
   *
   * @public
   */
  StartReplicationType: string | undefined;

  /**
   * User-defined settings for the premigration assessment. The possible values are:
   *
   * - `ResultLocationFolder`: The folder within an Amazon S3 bucket where you want DMS to store the results of this assessment run.
   * - `ResultEncryptionMode`: The supported values are `SSE_KMS` and `SSE_S3`. If these values are not provided, then the files are not encrypted at rest. For more information, see [Creating Amazon Web Services KMS keys to encrypt Amazon S3 target objects](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.KMSKeys).
   * - `ResultKmsKeyArn`: The ARN of a customer KMS encryption key that you specify when you set `ResultEncryptionMode` to `SSE_KMS`.
   * - `IncludeOnly`: A space-separated list of names for specific individual assessments that you want to include. These names come from the default list of individual assessments that Database Migration Service supports for the associated migration.
   * - `Exclude`: A space-separated list of names for specific individual assessments that you want to exclude. These names come from the default list of individual assessments that Database Migration Service supports for the associated migration.
   * - `FailOnAssessmentFailure`: A configurable setting you can set to `true` (the default setting) or `false`. Use this setting to to stop the replication from starting automatically if the assessment fails. This can help you evaluate the issue that is preventing the replication from running successfully.
   *
   * @public
   */
  PremigrationAssessmentSettings?: string | undefined;

  /**
   * Indicates the start time for a change data capture (CDC) operation. Use either `CdcStartTime` or `CdcStartPosition` to specify when you want a CDC operation to start. Specifying both values results in an error.
   *
   * @public
   */
  CdcStartTime?: Date | undefined;

  /**
   * Indicates when you want a change data capture (CDC) operation to start. Use either `CdcStartPosition` or `CdcStartTime` to specify when you want a CDC operation to start. Specifying both values results in an error.
   *
   * The value can be in date, checkpoint, or LSN/SCN format.
   *
   * @public
   */
  CdcStartPosition?: string | undefined;

  /**
   * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.
   *
   * @public
   */
  CdcStopPosition?: string | undefined;
}

/**
 * @public
 */
export interface StartReplicationResponse {
  /**
   * The replication that DMS started.
   *
   * @public
   */
  Replication?: Replication | undefined;
}

/**
 * @public
 */
export interface StartReplicationTaskMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication task to be started.
   *
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * The type of replication task to start.
   *
   * `start-replication` is the only valid action that can be used for the first time a task with the migration type of `full-load`full-load, `full-load-and-cdc` or `cdc` is run. Any other action used for the first time on a given task, such as `resume-processing` and reload-target will result in data errors.
   *
   * You can also use ReloadTables to reload specific tables that failed during migration instead of restarting the task.
   *
   * For a `full-load` task, the resume-processing option will reload any tables that were partially loaded or not yet loaded during the full load phase.
   *
   * For a `full-load-and-cdc` task, DMS migrates table data, and then applies data changes that occur on the source. To load all the tables again, and start capturing source changes, use `reload-target`. Otherwise use `resume-processing`, to replicate the changes from the last stop position.
   *
   * For a `cdc` only task, to start from a specific position, you must use start-replication and also specify the start position. Check the source endpoint DMS documentation for any limitations. For example, not all sources support starting from a time.
   *
   * > **Note:** `resume-processing` is only available for previously executed tasks.
   *
   * @public
   */
  StartReplicationTaskType: StartReplicationTaskTypeValue | undefined;

  /**
   * Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.
   *
   * Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”
   *
   * @public
   */
  CdcStartTime?: Date | undefined;

  /**
   * Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.
   *
   * The value can be in date, checkpoint, or LSN/SCN format.
   *
   * Date Example: --cdc-start-position “2018-03-08T12:12:12”
   *
   * Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"
   *
   * LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”
   *
   * > **Note:** When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the `slotName` extra connection attribute to the name of this logical replication slot. For more information, see [Extra Connection Attributes When Using PostgreSQL as a Source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib).
   *
   * @public
   */
  CdcStartPosition?: string | undefined;

  /**
   * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.
   *
   * Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”
   *
   * Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“
   *
   * @public
   */
  CdcStopPosition?: string | undefined;
}

/**
 * @public
 */
export interface StartReplicationTaskResponse {
  /**
   * The replication task started.
   *
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * @public
 */
export interface StartReplicationTaskAssessmentMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication task.
   *
   * @public
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * @public
 */
export interface StartReplicationTaskAssessmentResponse {
  /**
   * The assessed replication task.
   *
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * @public
 */
export interface StartReplicationTaskAssessmentRunMessage {
  /**
   * Amazon Resource Name (ARN) of the migration task associated with the premigration assessment run that you want to start.
   *
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * ARN of the service role needed to start the assessment run. The role must allow the `iam:PassRole` action.
   *
   * @public
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * Amazon S3 bucket where you want DMS to store the results of this assessment run.
   *
   * @public
   */
  ResultLocationBucket: string | undefined;

  /**
   * Folder within an Amazon S3 bucket where you want DMS to store the results of this assessment run.
   *
   * @public
   */
  ResultLocationFolder?: string | undefined;

  /**
   * Encryption mode that you can specify to encrypt the results of this assessment run. If you don't specify this request parameter, DMS stores the assessment run results without encryption. You can specify one of the options following:
   *
   * - `"SSE_S3"` – The server-side encryption provided as a default by Amazon S3.
   * - `"SSE_KMS"` – Key Management Service (KMS) encryption. This encryption can use either a custom KMS encryption key that you specify or the default KMS encryption key that DMS provides.
   *
   * @public
   */
  ResultEncryptionMode?: string | undefined;

  /**
   * ARN of a custom KMS encryption key that you specify when you set `ResultEncryptionMode` to `"SSE_KMS`".
   *
   * @public
   */
  ResultKmsKeyArn?: string | undefined;

  /**
   * Unique name to identify the assessment run.
   *
   * @public
   */
  AssessmentRunName: string | undefined;

  /**
   * Space-separated list of names for specific individual assessments that you want to include. These names come from the default list of individual assessments that DMS supports for the associated migration task. This task is specified by `ReplicationTaskArn`.
   *
   * > **Note:**
   * >
   * > You can't set a value for `IncludeOnly` if you also set a value for `Exclude` in the API operation.
   * >
   * > To identify the names of the default individual assessments that DMS supports for the associated migration task, run the `DescribeApplicableIndividualAssessments` operation using its own `ReplicationTaskArn` request parameter.
   *
   * @public
   */
  IncludeOnly?: string[] | undefined;

  /**
   * Space-separated list of names for specific individual assessments that you want to exclude. These names come from the default list of individual assessments that DMS supports for the associated migration task. This task is specified by `ReplicationTaskArn`.
   *
   * > **Note:**
   * >
   * > You can't set a value for `Exclude` if you also set a value for `IncludeOnly` in the API operation.
   * >
   * > To identify the names of the default individual assessments that DMS supports for the associated migration task, run the `DescribeApplicableIndividualAssessments` operation using its own `ReplicationTaskArn` request parameter.
   *
   * @public
   */
  Exclude?: string[] | undefined;

  /**
   * One or more tags to be assigned to the premigration assessment run that you want to start.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartReplicationTaskAssessmentRunResponse {
  /**
   * The premigration assessment run that was started.
   *
   * @public
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun | undefined;
}

/**
 * @public
 */
export interface StopDataMigrationMessage {
  /**
   * The identifier (name or ARN) of the data migration to stop.
   *
   * @public
   */
  DataMigrationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopDataMigrationResponse {
  /**
   * The data migration that DMS stopped.
   *
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * @public
 */
export interface StopReplicationMessage {
  /**
   * The Amazon Resource Name of the replication to stop.
   *
   * @public
   */
  ReplicationConfigArn: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationResponse {
  /**
   * The replication that DMS stopped.
   *
   * @public
   */
  Replication?: Replication | undefined;
}

/**
 * @public
 */
export interface StopReplicationTaskMessage {
  /**
   * The Amazon Resource Name(ARN) of the replication task to be stopped.
   *
   * @public
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationTaskResponse {
  /**
   * The replication task stopped.
   *
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * @public
 */
export interface TestConnectionMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication instance.
   *
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
   *
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export interface TestConnectionResponse {
  /**
   * The connection tested.
   *
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionsToEventBridgeMessage {
  /**
   * When set to true, this operation migrates DMS subscriptions for Amazon SNS notifications no matter what your replication instance version is. If not set or set to false, this operation runs only when all your replication instances are from DMS version 3.4.5 or higher.
   *
   * @public
   */
  ForceMove?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionsToEventBridgeResponse {
  /**
   * A string that indicates how many event subscriptions were migrated and how many remain to be migrated.
   *
   * @public
   */
  Result?: string | undefined;
}
