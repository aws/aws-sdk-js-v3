// smithy-typescript generated code
import {
  OriginTypeValue,
  ReloadOptionValue,
  StartReplicationMigrationTypeValue,
  StartReplicationTaskTypeValue,
} from "./enums";
import {
  type Connection,
  type DataMigration,
  type RecommendationSettings,
  type RefreshSchemasStatus,
  type Replication,
  type ReplicationInstance,
  type ReplicationTask,
  type ReplicationTaskAssessmentRun,
  Tag,
} from "./models_0";

/**
 * @public
 */
export interface RebootReplicationInstanceResponse {
  /**
   * <p>The replication instance that is being rebooted. </p>
   * @public
   */
  ReplicationInstance?: ReplicationInstance | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RefreshSchemasMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RefreshSchemasResponse {
  /**
   * <p>The status of the refreshed schema.</p>
   * @public
   */
  RefreshSchemasStatus?: RefreshSchemasStatus | undefined;
}

/**
 * <p>Provides the name of the schema and table to be reloaded.</p>
 * @public
 */
export interface TableToReload {
  /**
   * <p>The schema name of the table to be reloaded.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * <p>The table name of the table to be reloaded.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ReloadReplicationTablesMessage {
  /**
   * <p>The Amazon Resource Name of the replication config for which to reload tables.</p>
   * @public
   */
  ReplicationConfigArn: string | undefined;

  /**
   * <p>The list of tables to reload.</p>
   * @public
   */
  TablesToReload: TableToReload[] | undefined;

  /**
   * <p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate
   *          it if validation is enabled. Specify <code>validate-only</code> to re-validate the table.
   *          This option applies only when validation is enabled for the replication. </p>
   * @public
   */
  ReloadOption?: ReloadOptionValue | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ReloadReplicationTablesResponse {
  /**
   * <p>The Amazon Resource Name of the replication config for which to reload tables.</p>
   * @public
   */
  ReplicationConfigArn?: string | undefined;
}

/**
 * @public
 */
export interface ReloadTablesMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>The name and schema of the table to be reloaded. </p>
   * @public
   */
  TablesToReload: TableToReload[] | undefined;

  /**
   * <p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate
   *          it if validation is enabled. Specify <code>validate-only</code> to re-validate the table.
   *          This option applies only when validation is enabled for the task. </p>
   *          <p>Valid values: data-reload, validate-only</p>
   *          <p>Default value is data-reload.</p>
   * @public
   */
  ReloadOption?: ReloadOptionValue | undefined;
}

/**
 * @public
 */
export interface ReloadTablesResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   * @public
   */
  ReplicationTaskArn?: string | undefined;
}

/**
 * <p>Removes one or more tags from an DMS resource.</p>
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * <p>An DMS resource from which you want to remove tag(s). The value for this parameter is
   *          an Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RemoveTagsFromResourceResponse {}

/**
 * @public
 */
export interface RunFleetAdvisorLsaAnalysisResponse {
  /**
   * <p>The ID of the LSA analysis run.</p>
   * @public
   */
  LsaAnalysisId?: string | undefined;

  /**
   * <p>The status of the LSA analysis, for example <code>COMPLETED</code>.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface StartDataMigrationMessage {
  /**
   * <p>The identifier (name or ARN) of the data migration to start.</p>
   * @public
   */
  DataMigrationIdentifier: string | undefined;

  /**
   * <p>Specifies the start type for the data migration. Valid values include
   *             <code>start-replication</code>, <code>reload-target</code>, and
   *             <code>resume-processing</code>.</p>
   * @public
   */
  StartType: StartReplicationMigrationTypeValue | undefined;
}

/**
 * @public
 */
export interface StartDataMigrationResponse {
  /**
   * <p>The data migration that DMS started.</p>
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * @public
 */
export interface StartExtensionPackAssociationMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartExtensionPackAssociationResponse {
  /**
   * <p>The identifier for the request operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelAssessmentMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A value that specifies the database objects to assess.</p>
   * @public
   */
  SelectionRules: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelAssessmentResponse {
  /**
   * <p>The identifier for the assessment operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelConversionMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A value that specifies the database objects to convert.</p>
   * @public
   */
  SelectionRules: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelConversionResponse {
  /**
   * <p>The identifier for the conversion operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * <p>The properties of the statement for metadata model creation.</p>
 * @public
 */
export interface StatementProperties {
  /**
   * <p>The SQL text of the statement.</p>
   * @public
   */
  Definition: string | undefined;
}

/**
 * <p>The properties of metadata model in JSON format. This object is a Union. Only one member of this object can be specified or returned.</p>
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
   * <p>The properties of the statement.</p>
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
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>The JSON string that specifies the location where the metadata model will be created. Selection rules must specify a single schema. For more information, see Selection Rules in the DMS User Guide.</p>
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * <p>The name of the metadata model.</p>
   * @public
   */
  MetadataModelName: string | undefined;

  /**
   * <p>The properties of metadata model in JSON format. This object is a Union. Only one member of this object can be specified or returned.</p>
   * @public
   */
  Properties: MetadataModelProperties | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelCreationResponse {
  /**
   * <p>The identifier for the metadata model creation operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelExportAsScriptMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A value that specifies the database objects to export.</p>
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * <p>Whether to export the metadata model from the source or the target.</p>
   * @public
   */
  Origin: OriginTypeValue | undefined;

  /**
   * <p>The name of the model file to create in the Amazon S3 bucket.</p>
   * @public
   */
  FileName?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelExportAsScriptResponse {
  /**
   * <p>The identifier for the export operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelExportToTargetMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A value that specifies the database objects to export.</p>
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * <p>Whether to overwrite the migration project extension pack. An extension pack is an add-on module
   *          that emulates functions present in a source database that are required when converting objects
   *          to the target database.</p>
   * @public
   */
  OverwriteExtensionPack?: boolean | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelExportToTargetResponse {
  /**
   * <p>The identifier for the export operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelImportMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A value that specifies the database objects to import.</p>
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * <p>Whether to load metadata to the source or target database.</p>
   * @public
   */
  Origin: OriginTypeValue | undefined;

  /**
   * <p>If <code>true</code>, DMS loads metadata for the specified objects from the source database.</p>
   * @public
   */
  Refresh?: boolean | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelImportResponse {
  /**
   * <p>The identifier for the import operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartRecommendationsRequest {
  /**
   * <p>The identifier of the source database to analyze and provide recommendations
   *             for.</p>
   * @public
   */
  DatabaseId: string | undefined;

  /**
   * <p>The settings in JSON format that Fleet Advisor uses to determine target engine
   *             recommendations. These parameters include target instance sizing and availability and
   *             durability settings. For target instance sizing, Fleet Advisor supports the following
   *             two options: total capacity and resource utilization. For availability and durability,
   *             Fleet Advisor supports the following two options: production (Multi-AZ deployments) and
   *             Dev/Test (Single-AZ deployments).</p>
   * @public
   */
  Settings: RecommendationSettings | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationMessage {
  /**
   * <p>The Amazon Resource Name of the replication for which to start replication.</p>
   * @public
   */
  ReplicationConfigArn: string | undefined;

  /**
   * <p>The replication type.</p>
   *          <p>When the replication type is <code>full-load</code> or <code>full-load-and-cdc</code>,
   *          the only valid value for the first run of the replication is
   *          <code>start-replication</code>. This option will start the replication.</p>
   *          <p>You can also use <a>ReloadTables</a> to reload specific tables that failed
   *          during replication instead of restarting the replication.</p>
   *          <p>The <code>resume-processing</code> option isn't applicable for a full-load replication,
   *          because you can't resume partially loaded tables during the full load phase.</p>
   *          <p>For a <code>full-load-and-cdc</code> replication, DMS migrates table data, and then
   *          applies data changes that occur on the source. To load all the tables again, and start
   *          capturing source changes, use <code>reload-target</code>. Otherwise use
   *             <code>resume-processing</code>, to replicate the changes from the last stop
   *          position.</p>
   * @public
   */
  StartReplicationType: string | undefined;

  /**
   * <p>User-defined settings for the premigration assessment. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ResultLocationFolder</code>: The folder within an Amazon S3 bucket where
   *                you want DMS to store the results of this assessment run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResultEncryptionMode</code>: The supported values are <code>SSE_KMS</code>
   *                and <code>SSE_S3</code>. If these values are not provided, then the files are not
   *                encrypted at rest. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.KMSKeys">Creating
   *                   Amazon Web Services KMS keys to encrypt Amazon S3 target objects</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResultKmsKeyArn</code>: The ARN of a customer KMS encryption key that you
   *                specify when you set <code>ResultEncryptionMode</code> to
   *                <code>SSE_KMS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IncludeOnly</code>: A space-separated list of names for specific individual
   *                assessments that you want to include. These names come from the default list of
   *                individual assessments that Database Migration Service supports for the associated migration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Exclude</code>: A space-separated list of names for specific individual
   *                assessments that you want to exclude. These names come from the default list of
   *                individual assessments that Database Migration Service supports for the associated migration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FailOnAssessmentFailure</code>: A configurable setting you can set to
   *                   <code>true</code> (the default setting) or <code>false</code>. Use this setting to
   *                to stop the replication from starting automatically if the assessment fails. This can
   *                help you evaluate the issue that is preventing the replication from running
   *                successfully.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PremigrationAssessmentSettings?: string | undefined;

  /**
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *             <code>CdcStartTime</code> or <code>CdcStartPosition</code> to specify when you want a
   *          CDC operation to start. Specifying both values results in an error.</p>
   * @public
   */
  CdcStartTime?: Date | undefined;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *             <code>CdcStartPosition</code> or <code>CdcStartTime</code> to specify when you want a
   *          CDC operation to start. Specifying both values results in an error.</p>
   *          <p>The value can be in date, checkpoint, or LSN/SCN format.</p>
   * @public
   */
  CdcStartPosition?: string | undefined;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   * @public
   */
  CdcStopPosition?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationResponse {
  /**
   * <p>The replication that DMS started.</p>
   * @public
   */
  Replication?: Replication | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationTaskMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task to be started.</p>
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>The type of replication task to start.</p>
   *          <p>
   *             <code>start-replication</code> is the only valid action that can be used for the first time a task with the migration type of <code>full-load</code>full-load, <code>full-load-and-cdc</code> or <code>cdc</code> is run. Any other action used for the first time on a given task, such as <code>resume-processing</code> and reload-target will result in data errors.</p>
   *          <p>You can also use <a>ReloadTables</a> to reload specific tables that failed during migration instead of restarting the task.</p>
   *          <p>For a <code>full-load</code> task, the resume-processing option will reload any tables that were partially loaded or not yet loaded during the full load phase.</p>
   *          <p>For a <code>full-load-and-cdc</code> task, DMS migrates table data, and then applies data changes that occur on the source. To load all the tables again, and start capturing source changes, use <code>reload-target</code>. Otherwise use <code>resume-processing</code>, to replicate the changes from the last stop position.</p>
   *          <p>For a <code>cdc</code> only task, to start from a specific position, you must use start-replication and also specify the start position. Check the source endpoint DMS documentation for any limitations. For example, not all sources support starting from a time.</p>
   *          <note>
   *             <p>
   *                <code>resume-processing</code> is only available for previously executed tasks.</p>
   *          </note>
   * @public
   */
  StartReplicationTaskType: StartReplicationTaskTypeValue | undefined;

  /**
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   * @public
   */
  CdcStartTime?: Date | undefined;

  /**
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
   * @public
   */
  CdcStartPosition?: string | undefined;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“</p>
   * @public
   */
  CdcStopPosition?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationTaskResponse {
  /**
   * <p>The replication task started.</p>
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationTaskAssessmentMessage {
  /**
   * <p> The Amazon Resource Name (ARN) of the replication task. </p>
   * @public
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationTaskAssessmentResponse {
  /**
   * <p> The assessed replication task. </p>
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationTaskAssessmentRunMessage {
  /**
   * <p>Amazon Resource Name (ARN) of the migration task associated with the premigration
   *          assessment run that you want to start.</p>
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>ARN of the service role needed to start the assessment run. The role must allow the
   *             <code>iam:PassRole</code> action.</p>
   * @public
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * <p>Amazon S3 bucket where you want DMS to store the results of this assessment
   *          run.</p>
   * @public
   */
  ResultLocationBucket: string | undefined;

  /**
   * <p>Folder within an Amazon S3 bucket where you want DMS to store the results of this
   *          assessment run.</p>
   * @public
   */
  ResultLocationFolder?: string | undefined;

  /**
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
   *                   <code>"SSE_KMS"</code> – Key Management Service (KMS) encryption. This encryption can
   *                use either a custom KMS encryption key that you specify or the default KMS encryption
   *                key that DMS provides.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResultEncryptionMode?: string | undefined;

  /**
   * <p>ARN of a custom KMS encryption key that you specify when you set
   *             <code>ResultEncryptionMode</code> to <code>"SSE_KMS</code>".</p>
   * @public
   */
  ResultKmsKeyArn?: string | undefined;

  /**
   * <p>Unique name to identify the assessment run.</p>
   * @public
   */
  AssessmentRunName: string | undefined;

  /**
   * <p>Space-separated list of names for specific individual assessments that you want to
   *          include. These names come from the default list of individual assessments that DMS
   *          supports for the associated migration task. This task is specified by
   *             <code>ReplicationTaskArn</code>.</p>
   *          <note>
   *             <p>You can't set a value for <code>IncludeOnly</code> if you also set a value for
   *                <code>Exclude</code> in the API operation.
   *             </p>
   *             <p>To identify the names of the default individual assessments that DMS supports for
   *             the associated migration task, run the
   *                <code>DescribeApplicableIndividualAssessments</code> operation using its own
   *                <code>ReplicationTaskArn</code> request parameter.</p>
   *          </note>
   * @public
   */
  IncludeOnly?: string[] | undefined;

  /**
   * <p>Space-separated list of names for specific individual assessments that you want to
   *          exclude. These names come from the default list of individual assessments that DMS
   *          supports for the associated migration task. This task is specified by
   *             <code>ReplicationTaskArn</code>.</p>
   *          <note>
   *             <p>You can't set a value for <code>Exclude</code> if you also set a value for
   *                <code>IncludeOnly</code> in the API operation.</p>
   *             <p>To identify the names of the default individual assessments that DMS supports for
   *             the associated migration task, run the
   *                <code>DescribeApplicableIndividualAssessments</code> operation using its own
   *                <code>ReplicationTaskArn</code> request parameter.</p>
   *          </note>
   * @public
   */
  Exclude?: string[] | undefined;

  /**
   * <p>One or more tags to be assigned to the premigration assessment run that you want to
   *          start.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationTaskAssessmentRunResponse {
  /**
   * <p>The premigration assessment run that was started.</p>
   * @public
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun | undefined;
}

/**
 * @public
 */
export interface StopDataMigrationMessage {
  /**
   * <p>The identifier (name or ARN) of the data migration to stop.</p>
   * @public
   */
  DataMigrationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopDataMigrationResponse {
  /**
   * <p>The data migration that DMS stopped.</p>
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StopReplicationMessage {
  /**
   * <p>The Amazon Resource Name of the replication to stop.</p>
   * @public
   */
  ReplicationConfigArn: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationResponse {
  /**
   * <p>The replication that DMS stopped.</p>
   * @public
   */
  Replication?: Replication | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StopReplicationTaskMessage {
  /**
   * <p>The Amazon Resource Name(ARN) of the replication task to be stopped.</p>
   * @public
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StopReplicationTaskResponse {
  /**
   * <p>The replication task stopped.</p>
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface TestConnectionMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface TestConnectionResponse {
  /**
   * <p>The connection tested.</p>
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface UpdateSubscriptionsToEventBridgeMessage {
  /**
   * <p>When set to true, this operation migrates DMS subscriptions for Amazon
   *          SNS notifications no matter what your replication instance version is. If not set or set to
   *          false, this operation runs only when all your replication instances are from DMS version 3.4.5 or higher. </p>
   * @public
   */
  ForceMove?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface UpdateSubscriptionsToEventBridgeResponse {
  /**
   * <p>A string that indicates how many event subscriptions were migrated and how many remain
   *          to be migrated.</p>
   * @public
   */
  Result?: string | undefined;
}
