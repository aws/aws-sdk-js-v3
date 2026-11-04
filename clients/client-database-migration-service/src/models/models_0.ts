// smithy-typescript generated code
import type {
  AssessmentReportType,
  AuthMechanismValue,
  AuthTypeValue,
  CannedAclForObjectsValue,
  CharLengthSemantics,
  CollectorStatus,
  CompressionTypeValue,
  DatabaseMode,
  DataFormatValue,
  DatePartitionDelimiterValue,
  DatePartitionSequenceValue,
  DmsSslModeValue,
  EncodingTypeValue,
  EncryptionModeValue,
  EndpointSettingTypeValue,
  KafkaSaslMechanism,
  KafkaSecurityProtocol,
  KafkaSslEndpointIdentificationAlgorithm,
  LongVarcharMappingType,
  MessageFormatValue,
  MigrationTypeValue,
  MySQLAuthenticationMethod,
  NestingLevelValue,
  OracleAuthenticationMethod,
  OriginTypeValue,
  ParquetVersionValue,
  PluginNameValue,
  PostgreSQLAuthenticationMethod,
  RedisAuthTypeValue,
  RefreshSchemasStatusTypeValue,
  ReleaseStatusValues,
  ReplicationEndpointTypeValue,
  SafeguardPolicy,
  SourceType,
  SqlServerAuthenticationMethod,
  SslSecurityProtocolValue,
  TablePreparationMode,
  TargetDbType,
  TlogAccessMode,
  VersionStatus,
} from "./enums";

/**
 * Describes a quota for an Amazon Web Services account, for example the number of replication instances allowed.
 *
 * @public
 */
export interface AccountQuota {
  /**
   * The name of the DMS quota for this Amazon Web Services account.
   *
   * @public
   */
  AccountQuotaName?: string | undefined;

  /**
   * The amount currently used toward the quota maximum.
   *
   * @public
   */
  Used?: number | undefined;

  /**
   * The maximum allowed value for the quota.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * A user-defined key-value pair that describes metadata added to an DMS resource and that is used by operations such as the following:
 *
 * - `AddTagsToResource`
 * - `ListTagsForResource`
 * - `RemoveTagsFromResource`
 *
 * @public
 */
export interface Tag {
  /**
   * A key is the required name of the tag. The string value can be 1-128 Unicode characters in length and can't be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regular expressions: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * A value is the optional value of the tag. The string value can be 1-256 Unicode characters in length and can't be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regular expressions: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the resource for which the tag is created.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * Associates a set of tags with an DMS resource.
 *
 * @public
 */
export interface AddTagsToResourceMessage {
  /**
   * Identifies the DMS resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN).
   *
   * For DMS, you can tag a replication instance, an endpoint, or a replication task.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * One or more tags to be assigned to the resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceResponse {}

/**
 * @public
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action applies to.
   *
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * The pending maintenance action to apply to this resource.
   *
   * Valid values: `os-upgrade`, `system-update`, `db-upgrade`, `os-patch`
   *
   * @public
   */
  ApplyAction: string | undefined;

  /**
   * A value that specifies the type of opt-in request, or undoes an opt-in request. You can't undo an opt-in request of type `immediate`.
   *
   * Valid values:
   *
   * - `immediate` - Apply the maintenance action immediately.
   * - `next-maintenance` - Apply the maintenance action during the next maintenance window for the resource.
   * - `undo-opt-in` - Cancel any existing `next-maintenance` opt-in requests.
   *
   * @public
   */
  OptInType: string | undefined;
}

/**
 * Describes a maintenance action pending for an DMS resource, including when and how it will be applied. This data type is a response element to the `DescribePendingMaintenanceActions` operation.
 *
 * @public
 */
export interface PendingMaintenanceAction {
  /**
   * The type of pending maintenance action that is available for the resource.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * The date of the maintenance window when the action is to be applied. The maintenance action is applied to the resource during its first maintenance window after this date. If this date is specified, any `next-maintenance` opt-in requests are ignored.
   *
   * @public
   */
  AutoAppliedAfterDate?: Date | undefined;

  /**
   * The date when the maintenance action will be automatically applied. The maintenance action is applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any `immediate` opt-in requests are ignored.
   *
   * @public
   */
  ForcedApplyDate?: Date | undefined;

  /**
   * The type of opt-in request that has been received for the resource.
   *
   * @public
   */
  OptInStatus?: string | undefined;

  /**
   * The effective date when the pending maintenance action will be applied to the resource. This date takes into account opt-in requests received from the `ApplyPendingMaintenanceAction` API operation, and also the `AutoAppliedAfterDate` and `ForcedApplyDate` parameter values. This value is blank if an opt-in request has not been received and nothing has been specified for `AutoAppliedAfterDate` or `ForcedApplyDate`.
   *
   * @public
   */
  CurrentApplyDate?: Date | undefined;

  /**
   * A description providing more detail about the maintenance action.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Identifies an DMS resource and any pending actions for it.
 *
 * @public
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action applies to. For information about creating an ARN, see [Constructing an Amazon Resource Name (ARN) for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.AWS.ARN.html) in the DMS documentation.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * Detailed information about the pending maintenance action.
   *
   * @public
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[] | undefined;
}

/**
 * @public
 */
export interface ApplyPendingMaintenanceActionResponse {
  /**
   * The DMS resource that the pending maintenance action will be applied to.
   *
   * @public
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions | undefined;
}

/**
 * Provides information about the required target engine settings.
 *
 * @public
 */
export interface RecommendationSettings {
  /**
   * The size of your target instance. Fleet Advisor calculates this value based on your data collection type, such as total capacity and resource utilization. Valid values include `"total-capacity"` and `"utilization"`.
   *
   * @public
   */
  InstanceSizingType: string | undefined;

  /**
   * The deployment option for your target engine. For production databases, Fleet Advisor chooses Multi-AZ deployment. For development or test databases, Fleet Advisor chooses Single-AZ deployment. Valid values include `"development"` and `"production"`.
   *
   * @public
   */
  WorkloadType: string | undefined;
}

/**
 * Provides information about the source database to analyze and provide target recommendations according to the specified requirements.
 *
 * @public
 */
export interface StartRecommendationsRequestEntry {
  /**
   * The identifier of the source database.
   *
   * @public
   */
  DatabaseId: string | undefined;

  /**
   * The required target engine settings.
   *
   * @public
   */
  Settings: RecommendationSettings | undefined;
}

/**
 * @public
 */
export interface BatchStartRecommendationsRequest {
  /**
   * Provides information about source databases to analyze. After this analysis, Fleet Advisor recommends target engines for each source database.
   *
   * @public
   */
  Data?: StartRecommendationsRequestEntry[] | undefined;
}

/**
 * Provides information about the errors that occurred during the analysis of the source database.
 *
 * @public
 */
export interface BatchStartRecommendationsErrorEntry {
  /**
   * The identifier of the source database.
   *
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * The information about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The code of an error that occurred during the analysis of the source database.
   *
   * @public
   */
  Code?: string | undefined;
}

/**
 * @public
 */
export interface BatchStartRecommendationsResponse {
  /**
   * A list with error details about the analysis of each source database.
   *
   * @public
   */
  ErrorEntries?: BatchStartRecommendationsErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface CancelMetadataModelConversionMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * The identifier for the metadata model conversion operation to cancel. This operation was initiated by StartMetadataModelConversion.
   *
   * @public
   */
  RequestIdentifier: string | undefined;
}

/**
 * Provides error information about a schema conversion operation.
 *
 * @public
 */
export interface DefaultErrorDetails {
  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Provides error information about a project.
 *
 * @public
 */
export type ErrorDetails =
  | ErrorDetails.DefaultErrorDetailsMember
  | ErrorDetails.$UnknownMember;

/**
 * @public
 */
export namespace ErrorDetails {
  /**
   * Error information about a project.
   *
   * @public
   */
  export interface DefaultErrorDetailsMember {
    defaultErrorDetails: DefaultErrorDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    defaultErrorDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    defaultErrorDetails: (value: DefaultErrorDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The Amazon S3 location of the ZIP archive that contains the exported data definition language (DDL) scripts.
 *
 * @public
 */
export interface ExportSqlDetails {
  /**
   * The Amazon S3 URI of the object that contains the ZIP archive with exported DDL scripts.
   *
   * @public
   */
  S3ObjectKey?: string | undefined;

  /**
   * The URL of the Amazon S3 object that contains the ZIP archive with exported DDL scripts.
   *
   * @public
   */
  ObjectURL?: string | undefined;
}

/**
 * The database object that the schema conversion operation currently uses.
 *
 * @public
 */
export interface ProcessedObject {
  /**
   * The name of the database object.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the database object. For example, a table, view, procedure, and so on.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The type of the data provider. This parameter can store one of the following values: `"SOURCE"` or `"TARGET"`.
   *
   * @public
   */
  EndpointType?: string | undefined;
}

/**
 * Provides information about the progress of the schema conversion operation.
 *
 * @public
 */
export interface Progress {
  /**
   * The percent complete for the current step of the schema conversion operation.
   *
   * @public
   */
  ProgressPercent?: number | undefined;

  /**
   * The number of objects in this schema conversion operation.
   *
   * @public
   */
  TotalObjects?: number | undefined;

  /**
   * The step of the schema conversion operation. This parameter can store one of the following values:
   *
   * - `IN_PROGRESS` – The operation is running.
   * - `LOADING_METADATA` – Loads metadata from the source database.
   * - `COUNTING_OBJECTS` – Determines the number of objects involved in the operation.
   * - `ANALYZING` – Analyzes the source database objects.
   * - `CONVERTING` – Converts the source database objects to a format compatible with the target database.
   * - `APPLYING` – Applies the converted code to the target database.
   * - `FINISHED` – The operation completed successfully.
   *
   * @public
   */
  ProgressStep?: string | undefined;

  /**
   * The name of the database object that the schema conversion operation currently uses.
   *
   * @public
   */
  ProcessedObject?: ProcessedObject | undefined;
}

/**
 * Provides information about a schema conversion action.
 *
 * @public
 */
export interface SchemaConversionRequest {
  /**
   * The schema conversion operation status. Possible values:
   *
   * - `RECEIVED` – The operation is received but not yet queued for processing.
   * - `IN_PROGRESS` – The operation is queued or actively running.
   * - `SUCCESS` – The operation completed successfully.
   * - `FAILED` – The operation did not complete.
   * - `CANCELING` – The operation is being canceled. The operation might still succeed or fail before cancellation takes effect.
   * - `CANCELED` – The operation was canceled before completion.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The identifier for the schema conversion action.
   *
   * @public
   */
  RequestIdentifier?: string | undefined;

  /**
   * The migration project ARN.
   *
   * @public
   */
  MigrationProjectArn?: string | undefined;

  /**
   * Provides error information about a project.
   *
   * @public
   */
  Error?: ErrorDetails | undefined;

  /**
   * The Amazon S3 location of the ZIP archive that contains the exported data definition language (DDL) scripts.
   *
   * > **Note:** DMS populates this field only for the `DescribeMetadataModelExportsAsScript` operation.
   *
   * @public
   */
  ExportSqlDetails?: ExportSqlDetails | undefined;

  /**
   * Provides information about the progress of the schema conversion operation.
   *
   * @public
   */
  Progress?: Progress | undefined;
}

/**
 * @public
 */
export interface CancelMetadataModelConversionResponse {
  /**
   * The metadata model conversion request.
   *
   * > **Note:** DMS never populates the `ExportSqlDetails` field for this operation.
   *
   * @public
   */
  Request?: SchemaConversionRequest | undefined;
}

/**
 * @public
 */
export interface CancelMetadataModelCreationMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * The identifier for the metadata model creation operation to cancel. This operation was initiated by `StartMetadataModelCreation`.
   *
   * @public
   */
  RequestIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CancelMetadataModelCreationResponse {
  /**
   * The metadata model creation request.
   *
   * > **Note:** DMS never populates the `ExportSqlDetails` field for this operation.
   *
   * @public
   */
  Request?: SchemaConversionRequest | undefined;
}

/**
 * @public
 */
export interface CancelReplicationTaskAssessmentRunMessage {
  /**
   * Amazon Resource Name (ARN) of the premigration assessment run to be canceled.
   *
   * @public
   */
  ReplicationTaskAssessmentRunArn: string | undefined;
}

/**
 * The progress values reported by the `AssessmentProgress` response element.
 *
 * @public
 */
export interface ReplicationTaskAssessmentRunProgress {
  /**
   * The number of individual assessments that are specified to run.
   *
   * @public
   */
  IndividualAssessmentCount?: number | undefined;

  /**
   * The number of individual assessments that have completed, successfully or not.
   *
   * @public
   */
  IndividualAssessmentCompletedCount?: number | undefined;
}

/**
 * The object containing the result statistics for a completed assessment run.
 *
 * @public
 */
export interface ReplicationTaskAssessmentRunResultStatistic {
  /**
   * The number of individual assessments that successfully passed all checks in the assessment run.
   *
   * @public
   */
  Passed?: number | undefined;

  /**
   * The number of individual assessments that failed to meet the criteria defined in the assessment run.
   *
   * @public
   */
  Failed?: number | undefined;

  /**
   * The number of individual assessments that encountered a critical error and could not complete properly.
   *
   * @public
   */
  Error?: number | undefined;

  /**
   * Indicates that the recent completed AssessmentRun triggered a warning.
   *
   * @public
   */
  Warning?: number | undefined;

  /**
   * The number of individual assessments that were cancelled during the assessment run.
   *
   * @public
   */
  Cancelled?: number | undefined;

  /**
   * The number of individual assessments that were skipped during the assessment run.
   *
   * @public
   */
  Skipped?: number | undefined;
}

/**
 * Provides information that describes a premigration assessment run that you have started using the `StartReplicationTaskAssessmentRun` operation.
 *
 * Some of the information appears based on other operations that can return the `ReplicationTaskAssessmentRun` object.
 *
 * @public
 */
export interface ReplicationTaskAssessmentRun {
  /**
   * Amazon Resource Name (ARN) of this assessment run.
   *
   * @public
   */
  ReplicationTaskAssessmentRunArn?: string | undefined;

  /**
   * ARN of the migration task associated with this premigration assessment run.
   *
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * Assessment run status.
   *
   * This status can have one of the following values:
   *
   * - `"cancelling"` – The assessment run was canceled by the `CancelReplicationTaskAssessmentRun` operation.
   * - `"deleting"` – The assessment run was deleted by the `DeleteReplicationTaskAssessmentRun` operation.
   * - `"failed"` – At least one individual assessment completed with a `failed` status.
   * - `"error-provisioning"` – An internal error occurred while resources were provisioned (during `provisioning` status).
   * - `"error-executing"` – An internal error occurred while individual assessments ran (during `running` status).
   * - `"invalid state"` – The assessment run is in an unknown state.
   * - `"passed"` – All individual assessments have completed, and none has a `failed` status.
   * - `"provisioning"` – Resources required to run individual assessments are being provisioned.
   * - `"running"` – Individual assessments are being run.
   * - `"starting"` – The assessment run is starting, but resources are not yet being provisioned for individual assessments.
   * - `"warning"` – At least one individual assessment completed with a `warning` status or all individual assessments were skipped (completed with a `skipped` status).
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Date on which the assessment run was created using the `StartReplicationTaskAssessmentRun` operation.
   *
   * @public
   */
  ReplicationTaskAssessmentRunCreationDate?: Date | undefined;

  /**
   * Indication of the completion progress for the individual assessments specified to run.
   *
   * @public
   */
  AssessmentProgress?: ReplicationTaskAssessmentRunProgress | undefined;

  /**
   * Last message generated by an individual assessment failure.
   *
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * ARN of the service role used to start the assessment run using the `StartReplicationTaskAssessmentRun` operation. The role must allow the `iam:PassRole` action.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * Amazon S3 bucket where DMS stores the results of this assessment run.
   *
   * @public
   */
  ResultLocationBucket?: string | undefined;

  /**
   * Folder in an Amazon S3 bucket where DMS stores the results of this assessment run.
   *
   * @public
   */
  ResultLocationFolder?: string | undefined;

  /**
   * Encryption mode used to encrypt the assessment run results.
   *
   * @public
   */
  ResultEncryptionMode?: string | undefined;

  /**
   * ARN of the KMS encryption key used to encrypt the assessment run results.
   *
   * @public
   */
  ResultKmsKeyArn?: string | undefined;

  /**
   * Unique name of the assessment run.
   *
   * @public
   */
  AssessmentRunName?: string | undefined;

  /**
   * Indicates that the following PreflightAssessmentRun is the latest for the ReplicationTask. The status is either true or false.
   *
   * @public
   */
  IsLatestTaskAssessmentRun?: boolean | undefined;

  /**
   * Result statistics for a completed assessment run, showing aggregated statistics of IndividualAssessments for how many assessments were passed, failed, or encountered issues such as errors or warnings.
   *
   * @public
   */
  ResultStatistic?: ReplicationTaskAssessmentRunResultStatistic | undefined;
}

/**
 * @public
 */
export interface CancelReplicationTaskAssessmentRunResponse {
  /**
   * The `ReplicationTaskAssessmentRun` object for the canceled assessment run.
   *
   * @public
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun | undefined;
}

/**
 * Defines settings for a source data provider for a data migration.
 *
 * @public
 */
export interface SourceDataSetting {
  /**
   * The change data capture (CDC) start position for the source data provider.
   *
   * @public
   */
  CDCStartPosition?: string | undefined;

  /**
   * The change data capture (CDC) start time for the source data provider.
   *
   * @public
   */
  CDCStartTime?: Date | undefined;

  /**
   * The change data capture (CDC) stop time for the source data provider.
   *
   * @public
   */
  CDCStopTime?: Date | undefined;

  /**
   * The name of the replication slot on the source data provider. This attribute is only valid for a PostgreSQL or Aurora PostgreSQL source.
   *
   * @public
   */
  SlotName?: string | undefined;
}

/**
 * Defines settings for a target data provider for a data migration.
 *
 * @public
 */
export interface TargetDataSetting {
  /**
   * This setting determines how DMS handles the target tables before starting a data migration, either by leaving them untouched, dropping and recreating them, or truncating the existing data in the target tables.
   *
   * @public
   */
  TablePreparationMode?: TablePreparationMode | undefined;
}

/**
 * @public
 */
export interface CreateDataMigrationMessage {
  /**
   * A user-friendly name for the data migration. Data migration names have the following constraints:
   *
   * - Must begin with a letter, and can only contain ASCII letters, digits, and hyphens.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   * - Length must be from 1 to 255 characters.
   *
   * @public
   */
  DataMigrationName?: string | undefined;

  /**
   * An identifier for the migration project.
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * Specifies if the data migration is full-load only, change data capture (CDC) only, or full-load and CDC.
   *
   * @public
   */
  DataMigrationType: MigrationTypeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) for the service access role that you want to use to create the data migration.
   *
   * @public
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * Specifies whether to enable CloudWatch logs for the data migration.
   *
   * @public
   */
  EnableCloudwatchLogs?: boolean | undefined;

  /**
   * Specifies information about the source data provider.
   *
   * @public
   */
  SourceDataSettings?: SourceDataSetting[] | undefined;

  /**
   * Specifies information about the target data provider.
   *
   * @public
   */
  TargetDataSettings?: TargetDataSetting[] | undefined;

  /**
   * The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.
   *
   * @public
   */
  NumberOfJobs?: number | undefined;

  /**
   * One or more tags to be assigned to the data migration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * An optional JSON string specifying what tables, views, and schemas to include or exclude from the migration.
   *
   * @public
   */
  SelectionRules?: string | undefined;
}

/**
 * Options for configuring a data migration, including whether to enable CloudWatch logs, and the selection rules to use to include or exclude database objects from the migration.
 *
 * @public
 */
export interface DataMigrationSettings {
  /**
   * The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.
   *
   * @public
   */
  NumberOfJobs?: number | undefined;

  /**
   * Whether to enable CloudWatch logging for the data migration.
   *
   * @public
   */
  CloudwatchLogsEnabled?: boolean | undefined;

  /**
   * A JSON-formatted string that defines what objects to include and exclude from the migration.
   *
   * @public
   */
  SelectionRules?: string | undefined;
}

/**
 * Information about the data migration run, including start and stop time, latency, and migration progress.
 *
 * @public
 */
export interface DataMigrationStatistics {
  /**
   * The number of tables loaded in the current data migration run.
   *
   * @public
   */
  TablesLoaded?: number | undefined;

  /**
   * The elapsed duration of the data migration run.
   *
   * @public
   */
  ElapsedTimeMillis?: number | undefined;

  /**
   * The data migration's table loading progress.
   *
   * @public
   */
  TablesLoading?: number | undefined;

  /**
   * The data migration's progress in the full-load migration phase.
   *
   * @public
   */
  FullLoadPercentage?: number | undefined;

  /**
   * The current latency of the change data capture (CDC) operation.
   *
   * @public
   */
  CDCLatency?: number | undefined;

  /**
   * The number of tables that are waiting for processing.
   *
   * @public
   */
  TablesQueued?: number | undefined;

  /**
   * The number of tables that DMS failed to process.
   *
   * @public
   */
  TablesErrored?: number | undefined;

  /**
   * The time when the migration started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time when the migration stopped or failed.
   *
   * @public
   */
  StopTime?: Date | undefined;
}

/**
 * This object provides information about a DMS data migration.
 *
 * @public
 */
export interface DataMigration {
  /**
   * The user-friendly name for the data migration.
   *
   * @public
   */
  DataMigrationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies this replication.
   *
   * @public
   */
  DataMigrationArn?: string | undefined;

  /**
   * The UTC time when DMS created the data migration.
   *
   * @public
   */
  DataMigrationCreateTime?: Date | undefined;

  /**
   * The UTC time when DMS started the data migration.
   *
   * @public
   */
  DataMigrationStartTime?: Date | undefined;

  /**
   * The UTC time when data migration ended.
   *
   * @public
   */
  DataMigrationEndTime?: Date | undefined;

  /**
   * The IAM role that the data migration uses to access Amazon Web Services resources.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data migration's associated migration project.
   *
   * @public
   */
  MigrationProjectArn?: string | undefined;

  /**
   * Specifies whether the data migration is full-load only, change data capture (CDC) only, or full-load and CDC.
   *
   * @public
   */
  DataMigrationType?: MigrationTypeValue | undefined;

  /**
   * Specifies CloudWatch settings and selection rules for the data migration.
   *
   * @public
   */
  DataMigrationSettings?: DataMigrationSettings | undefined;

  /**
   * Specifies information about the data migration's source data provider.
   *
   * @public
   */
  SourceDataSettings?: SourceDataSetting[] | undefined;

  /**
   * Specifies information about the data migration's target data provider.
   *
   * @public
   */
  TargetDataSettings?: TargetDataSetting[] | undefined;

  /**
   * Provides information about the data migration's run, including start and stop time, latency, and data migration progress.
   *
   * @public
   */
  DataMigrationStatistics?: DataMigrationStatistics | undefined;

  /**
   * The current status of the data migration.
   *
   * @public
   */
  DataMigrationStatus?: string | undefined;

  /**
   * The IP addresses of the endpoints for the data migration.
   *
   * @public
   */
  PublicIpAddresses?: string[] | undefined;

  /**
   * The CIDR blocks of the endpoints for the data migration.
   *
   * @public
   */
  DataMigrationCidrBlocks?: string[] | undefined;

  /**
   * Information about the data migration's most recent error or failure.
   *
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * The reason the data migration last stopped.
   *
   * @public
   */
  StopReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataMigrationResponse {
  /**
   * Information about the created data migration.
   *
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * Provides information that defines a DocumentDB data provider.
 *
 * @public
 */
export interface DocDbDataProviderSettings {
  /**
   * The name of the source DocumentDB server.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the DocumentDB data provider.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The database name on the DocumentDB data provider.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The SSL mode used to connect to the DocumentDB data provider. The default value is `none`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
   *
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * Provides information about an IBM DB2 LUW data provider.
 *
 * @public
 */
export interface IbmDb2LuwDataProviderSettings {
  /**
   * The name of the DB2 LUW server.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the DB2 LUW data provider.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The database name on the DB2 LUW data provider.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The SSL mode used to connect to the DB2 LUW data provider. The default value is `none`. Valid Values: `none` and `verify-ca`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The encryption algorithm used for securing the connection to the IBM DB2 LUW database server. You can provide an integer value corresponding to a specific encryption algorithm, or leave this parameter empty to use the default behavior.
   *
   * @public
   */
  EncryptionAlgorithm?: number | undefined;

  /**
   * The security mechanism used for authenticating the connection to the IBM DB2 LUW database server. You can provide an integer value corresponding to a specific security mechanism, or leave this parameter empty to use the default behavior.
   *
   * @public
   */
  SecurityMechanism?: number | undefined;

  /**
   * The path for the Amazon S3 bucket that the application uses for accessing the user-defined schema.
   *
   * @public
   */
  S3Path?: string | undefined;

  /**
   * The ARN for the role the application uses to access its Amazon S3 bucket.
   *
   * @public
   */
  S3AccessRoleArn?: string | undefined;
}

/**
 * Provides information about an IBM DB2 for z/OS data provider.
 *
 * @public
 */
export interface IbmDb2zOsDataProviderSettings {
  /**
   * The name of the DB2 for z/OS server.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the DB2 for z/OS data provider.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The database name on the DB2 for z/OS data provider.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The SSL mode used to connect to the DB2 for z/OS data provider. The default value is `none`. Valid Values: `none` and `verify-ca`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The path for the Amazon S3 bucket that the application uses for accessing the user-defined schema.
   *
   * @public
   */
  S3Path?: string | undefined;

  /**
   * The ARN for the role the application uses to access its Amazon S3 bucket.
   *
   * @public
   */
  S3AccessRoleArn?: string | undefined;
}

/**
 * Provides information that defines a MariaDB data provider.
 *
 * @public
 */
export interface MariaDbDataProviderSettings {
  /**
   * The name of the MariaDB server.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the MariaDB data provider
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The SSL mode used to connect to the MariaDB data provider. The default value is `none`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The path for the Amazon S3 bucket that the application uses for accessing the user-defined schema.
   *
   * @public
   */
  S3Path?: string | undefined;

  /**
   * The ARN for the role the application uses to access its Amazon S3 bucket.
   *
   * @public
   */
  S3AccessRoleArn?: string | undefined;
}

/**
 * Provides information that defines a Microsoft SQL Server data provider.
 *
 * @public
 */
export interface MicrosoftSqlServerDataProviderSettings {
  /**
   * The name of the Microsoft SQL Server server.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the Microsoft SQL Server data provider.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The database name on the Microsoft SQL Server data provider.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The SSL mode used to connect to the Microsoft SQL Server data provider. The default value is `none`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The path for the Amazon S3 bucket that the application uses for accessing the user-defined schema.
   *
   * @public
   */
  S3Path?: string | undefined;

  /**
   * The ARN for the role the application uses to access its Amazon S3 bucket.
   *
   * @public
   */
  S3AccessRoleArn?: string | undefined;
}

/**
 * Provides information that defines a MongoDB data provider.
 *
 * @public
 */
export interface MongoDbDataProviderSettings {
  /**
   * The name of the MongoDB server.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the MongoDB data provider.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The database name on the MongoDB data provider.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The SSL mode used to connect to the MongoDB data provider. The default value is `none`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The authentication type for the database connection. Valid values are PASSWORD or NO.
   *
   * @public
   */
  AuthType?: AuthTypeValue | undefined;

  /**
   * The MongoDB database name. This setting isn't used when `AuthType` is set to `"no"`.
   *
   * The default is `"admin"`.
   *
   * @public
   */
  AuthSource?: string | undefined;

  /**
   * The authentication method for connecting to the data provider. Valid values are DEFAULT, MONGODB_CR, or SCRAM_SHA_1.
   *
   * @public
   */
  AuthMechanism?: AuthMechanismValue | undefined;
}

/**
 * Provides information that defines a MySQL data provider.
 *
 * @public
 */
export interface MySqlDataProviderSettings {
  /**
   * The name of the MySQL server.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the MySQL data provider.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The SSL mode used to connect to the MySQL data provider. The default value is `none`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The path for the Amazon S3 bucket that the application uses for accessing the user-defined schema.
   *
   * @public
   */
  S3Path?: string | undefined;

  /**
   * The ARN for the role the application uses to access its Amazon S3 bucket.
   *
   * @public
   */
  S3AccessRoleArn?: string | undefined;
}

/**
 * Provides information that defines an Oracle data provider.
 *
 * @public
 */
export interface OracleDataProviderSettings {
  /**
   * The name of the Oracle server.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the Oracle data provider.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The database name on the Oracle data provider.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The SSL mode used to connect to the Oracle data provider. The default value is `none`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The address of your Oracle Automatic Storage Management (ASM) server. You can set this value from the `asm_server` value. You set `asm_server` as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see [Configuration for change data capture (CDC) on an Oracle source database](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration).
   *
   * @public
   */
  AsmServer?: string | undefined;

  /**
   * The identifier of the secret in Secrets Manager that contains the Oracle ASM connection details.
   *
   * Required only if your data provider uses the Oracle ASM server.
   *
   * @public
   */
  SecretsManagerOracleAsmSecretId?: string | undefined;

  /**
   * The ARN of the IAM role that provides access to the secret in Secrets Manager that contains the Oracle ASM connection details.
   *
   * @public
   */
  SecretsManagerOracleAsmAccessRoleArn?: string | undefined;

  /**
   * The identifier of the secret in Secrets Manager that contains the transparent data encryption (TDE) password. DMS requires this password to access Oracle redo logs encrypted by TDE using Binary Reader.
   *
   * @public
   */
  SecretsManagerSecurityDbEncryptionSecretId?: string | undefined;

  /**
   * The ARN of the IAM role that provides access to the secret in Secrets Manager that contains the TDE password.
   *
   * @public
   */
  SecretsManagerSecurityDbEncryptionAccessRoleArn?: string | undefined;

  /**
   * The path for the Amazon S3 bucket that the application uses for accessing the user-defined schema.
   *
   * @public
   */
  S3Path?: string | undefined;

  /**
   * The ARN for the role the application uses to access its Amazon S3 bucket.
   *
   * @public
   */
  S3AccessRoleArn?: string | undefined;
}

/**
 * Provides information that defines a PostgreSQL data provider.
 *
 * @public
 */
export interface PostgreSqlDataProviderSettings {
  /**
   * The name of the PostgreSQL server.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the PostgreSQL data provider.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The database name on the PostgreSQL data provider.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The SSL mode used to connect to the PostgreSQL data provider. The default value is `none`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The path for the Amazon S3 bucket that the application uses for accessing the user-defined schema.
   *
   * @public
   */
  S3Path?: string | undefined;

  /**
   * The ARN for the role the application uses to access its Amazon S3 bucket.
   *
   * @public
   */
  S3AccessRoleArn?: string | undefined;
}

/**
 * Provides information that defines an Amazon Redshift data provider.
 *
 * @public
 */
export interface RedshiftDataProviderSettings {
  /**
   * The name of the Amazon Redshift server.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the Amazon Redshift data provider.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The database name on the Amazon Redshift data provider.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The path for the Amazon S3 bucket that the application uses for accessing the user-defined schema.
   *
   * @public
   */
  S3Path?: string | undefined;

  /**
   * The ARN for the role the application uses to access its Amazon S3 bucket.
   *
   * @public
   */
  S3AccessRoleArn?: string | undefined;
}

/**
 * Provides information that defines an SAP ASE data provider.
 *
 * @public
 */
export interface SybaseAseDataProviderSettings {
  /**
   * The name of the SAP ASE server.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the SAP ASE data provider.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The database name on the SAP ASE data provider.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The SSL mode used to connect to the SAP ASE data provider. The default value is `none`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * Specifies whether to encrypt the password when connecting to the Sybase ASE database. When set to true, the connection password is encrypted during transmission. Default is true.
   *
   * @public
   */
  EncryptPassword?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
   *
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * Provides information that defines a data provider.
 *
 * @public
 */
export type DataProviderSettings =
  | DataProviderSettings.DocDbSettingsMember
  | DataProviderSettings.IbmDb2LuwSettingsMember
  | DataProviderSettings.IbmDb2zOsSettingsMember
  | DataProviderSettings.MariaDbSettingsMember
  | DataProviderSettings.MicrosoftSqlServerSettingsMember
  | DataProviderSettings.MongoDbSettingsMember
  | DataProviderSettings.MySqlSettingsMember
  | DataProviderSettings.OracleSettingsMember
  | DataProviderSettings.PostgreSqlSettingsMember
  | DataProviderSettings.RedshiftSettingsMember
  | DataProviderSettings.SybaseAseSettingsMember
  | DataProviderSettings.$UnknownMember;

/**
 * @public
 */
export namespace DataProviderSettings {
  /**
   * Provides information that defines an Amazon Redshift data provider.
   *
   * @public
   */
  export interface RedshiftSettingsMember {
    RedshiftSettings: RedshiftDataProviderSettings;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    SybaseAseSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * Provides information that defines a PostgreSQL data provider.
   *
   * @public
   */
  export interface PostgreSqlSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings: PostgreSqlDataProviderSettings;
    MySqlSettings?: never;
    OracleSettings?: never;
    SybaseAseSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * Provides information that defines a MySQL data provider.
   *
   * @public
   */
  export interface MySqlSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings: MySqlDataProviderSettings;
    OracleSettings?: never;
    SybaseAseSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * Provides information that defines an Oracle data provider.
   *
   * @public
   */
  export interface OracleSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings: OracleDataProviderSettings;
    SybaseAseSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * Provides information that defines an SAP ASE data provider.
   *
   * @public
   */
  export interface SybaseAseSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    SybaseAseSettings: SybaseAseDataProviderSettings;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * Provides information that defines a Microsoft SQL Server data provider.
   *
   * @public
   */
  export interface MicrosoftSqlServerSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    SybaseAseSettings?: never;
    MicrosoftSqlServerSettings: MicrosoftSqlServerDataProviderSettings;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * Provides information that defines a DocumentDB data provider.
   *
   * @public
   */
  export interface DocDbSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    SybaseAseSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings: DocDbDataProviderSettings;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * Provides information that defines a MariaDB data provider.
   *
   * @public
   */
  export interface MariaDbSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    SybaseAseSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings: MariaDbDataProviderSettings;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * Provides information that defines an IBM DB2 LUW data provider.
   *
   * @public
   */
  export interface IbmDb2LuwSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    SybaseAseSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings: IbmDb2LuwDataProviderSettings;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * Provides information that defines an IBM DB2 for z/OS data provider.
   *
   * @public
   */
  export interface IbmDb2zOsSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    SybaseAseSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings: IbmDb2zOsDataProviderSettings;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * Provides information that defines a MongoDB data provider.
   *
   * @public
   */
  export interface MongoDbSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    SybaseAseSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings: MongoDbDataProviderSettings;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    SybaseAseSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RedshiftSettings: (value: RedshiftDataProviderSettings) => T;
    PostgreSqlSettings: (value: PostgreSqlDataProviderSettings) => T;
    MySqlSettings: (value: MySqlDataProviderSettings) => T;
    OracleSettings: (value: OracleDataProviderSettings) => T;
    SybaseAseSettings: (value: SybaseAseDataProviderSettings) => T;
    MicrosoftSqlServerSettings: (value: MicrosoftSqlServerDataProviderSettings) => T;
    DocDbSettings: (value: DocDbDataProviderSettings) => T;
    MariaDbSettings: (value: MariaDbDataProviderSettings) => T;
    IbmDb2LuwSettings: (value: IbmDb2LuwDataProviderSettings) => T;
    IbmDb2zOsSettings: (value: IbmDb2zOsDataProviderSettings) => T;
    MongoDbSettings: (value: MongoDbDataProviderSettings) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateDataProviderMessage {
  /**
   * A user-friendly name for the data provider.
   *
   * @public
   */
  DataProviderName?: string | undefined;

  /**
   * A user-friendly description of the data provider.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of database engine for the data provider.
   *
   * Valid values: `aurora`, `aurora-postgresql`, `db2`, `db2-zos`, `docdb`, `mariadb`, `mongodb`, `mysql`, `oracle`, `postgres`, `redshift`, `sqlserver`, and `sybase`. A value of `aurora` represents Amazon Aurora MySQL-Compatible Edition.
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * Indicates whether the data provider is virtual.
   *
   * @public
   */
  Virtual?: boolean | undefined;

  /**
   * The settings in JSON format for a data provider.
   *
   * @public
   */
  Settings: DataProviderSettings | undefined;

  /**
   * One or more tags to be assigned to the data provider.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Provides information that defines a data provider.
 *
 * @public
 */
export interface DataProvider {
  /**
   * The name of the data provider.
   *
   * @public
   */
  DataProviderName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the data provider.
   *
   * @public
   */
  DataProviderArn?: string | undefined;

  /**
   * The time the data provider was created.
   *
   * @public
   */
  DataProviderCreationTime?: Date | undefined;

  /**
   * A description of the data provider. Descriptions can have up to 31 characters. A description can contain only ASCII letters, digits, and hyphens ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of database engine for the data provider.
   *
   * Valid values: `aurora`, `aurora-postgresql`, `db2`, `db2-zos`, `docdb`, `mariadb`, `mongodb`, `mysql`, `oracle`, `postgres`, `redshift`, `sqlserver`, and `sybase`. A value of `aurora` represents Amazon Aurora MySQL-Compatible Edition.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Indicates whether the data provider is virtual.
   *
   * @public
   */
  Virtual?: boolean | undefined;

  /**
   * The settings in JSON format for a data provider.
   *
   * @public
   */
  Settings?: DataProviderSettings | undefined;
}

/**
 * @public
 */
export interface CreateDataProviderResponse {
  /**
   * The data provider that was created.
   *
   * @public
   */
  DataProvider?: DataProvider | undefined;
}

/**
 * The settings in JSON format for the DMS Transfer type source endpoint.
 *
 * @public
 */
export interface DmsTransferSettings {
  /**
   * The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the `iam:PassRole` action.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * The name of the S3 bucket to use.
   *
   * @public
   */
  BucketName?: string | undefined;
}

/**
 * Provides information that defines a DocumentDB endpoint.
 *
 * @public
 */
export interface DocDbSettings {
  /**
   * The user name you use to access the DocumentDB source endpoint.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The password for the user account you use to access the DocumentDB source endpoint.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The name of the server on the DocumentDB source endpoint.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the DocumentDB source endpoint.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The database name on the DocumentDB source endpoint.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Specifies either document or table mode.
   *
   * Default value is `"none"`. Specify `"none"` to use document mode. Specify `"one"` to use table mode.
   *
   * @public
   */
  NestingLevel?: NestingLevelValue | undefined;

  /**
   * Specifies whether the document ID is added to the target table. Use this setting when `NestingLevel` is set to `"none"`.
   *
   * Set `ExtractDocId` to `true` when using [multi-document transactions](https://www.mongodb.com/docs/manual/reference/method/Session.startTransaction/#mongodb-method-Session.startTransaction) with CDC.
   *
   * Default value is `false`.
   *
   * @public
   */
  ExtractDocId?: boolean | undefined;

  /**
   * Indicates the number of documents to preview to determine the document organization. Use this setting when `NestingLevel` is set to `"one"`.
   *
   * Must be a positive value greater than `0`. Default value is `1000`.
   *
   * @public
   */
  DocsToInvestigate?: number | undefined;

  /**
   * The KMS key identifier that is used to encrypt the content on the replication instance. If you don't specify a value for the `KmsKeyId` parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the Amazon Web Services Secrets Manager secret that allows access to the DocumentDB endpoint.
   *
   * > **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both. For more information on creating this `SecretsManagerSecret` and the `SecretsManagerAccessRoleArn` and `SecretsManagerSecretId` required to access it, see [Using secrets to access Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * The full ARN, partial ARN, or friendly name of the `SecretsManagerSecret` that contains the DocumentDB endpoint connection details.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * If `true`, DMS retrieves the entire document from the DocumentDB source during migration. This may cause a migration failure if the server response exceeds bandwidth limits. To fetch only updates and deletes during migration, set this parameter to `false`.
   *
   * @public
   */
  UseUpdateLookUp?: boolean | undefined;

  /**
   * If `true`, DMS replicates data to shard collections. DMS only uses this setting if the target endpoint is a DocumentDB elastic cluster.
   *
   * When this setting is `true`, note the following:
   *
   * - You must set `TargetTablePrepMode` to `nothing`.
   * - DMS automatically sets `useUpdateLookup` to `false`.
   *
   * @public
   */
  ReplicateShardCollections?: boolean | undefined;
}

/**
 * Provides the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint.
 *
 * @public
 */
export interface DynamoDbSettings {
  /**
   * The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the `iam:PassRole` action.
   *
   * @public
   */
  ServiceAccessRoleArn: string | undefined;
}

/**
 * Provides information that defines an OpenSearch endpoint.
 *
 * @public
 */
export interface ElasticsearchSettings {
  /**
   * The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the `iam:PassRole` action.
   *
   * @public
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * The endpoint for the OpenSearch cluster. DMS uses HTTPS if a transport protocol (http/https) is not specified.
   *
   * @public
   */
  EndpointUri: string | undefined;

  /**
   * The maximum percentage of records that can fail to be written before a full load operation stops.
   *
   * To avoid early failure, this counter is only effective after 1000 records are transferred. OpenSearch also has the concept of error monitoring during the last 10 minutes of an Observation Window. If transfer of all records fail in the last 10 minutes, the full load operation stops.
   *
   * @public
   */
  FullLoadErrorPercentage?: number | undefined;

  /**
   * The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.
   *
   * @public
   */
  ErrorRetryDuration?: number | undefined;

  /**
   * Set this option to `true` for DMS to migrate documentation using the documentation type `_doc`. OpenSearch and an Elasticsearch cluster only support the _doc documentation type in versions 7. x and later. The default value is `false`.
   *
   * @public
   */
  UseNewMappingType?: boolean | undefined;
}

/**
 * Settings in JSON format for the source GCP MySQL endpoint.
 *
 * @public
 */
export interface GcpMySQLSettings {
  /**
   * Specifies a script to run immediately after DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails.
   *
   * For this parameter, provide the code of the script itself, not the name of a file containing the script.
   *
   * @public
   */
  AfterConnectScript?: string | undefined;

  /**
   * Cleans and recreates table metadata information on the replication instance when a mismatch occurs. For example, in a situation where running an alter DDL on the table could result in different information about the table cached in the replication instance.
   *
   * @public
   */
  CleanSourceMetadataOnMismatch?: boolean | undefined;

  /**
   * Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the `DatabaseName` request parameter on either the `CreateEndpoint` or `ModifyEndpoint` API call. Specifying `DatabaseName` when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds.
   *
   * Example: `eventsPollInterval=5;`
   *
   * In the example, DMS checks for changes in the binary logs every five seconds.
   *
   * @public
   */
  EventsPollInterval?: number | undefined;

  /**
   * Specifies where to migrate source tables on the target, either to a single database or multiple databases.
   *
   * Example: `targetDbType=MULTIPLE_DATABASES`
   *
   * @public
   */
  TargetDbType?: TargetDbType | undefined;

  /**
   * Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.
   *
   * Example: `maxFileSize=512`
   *
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.
   *
   * Example: `parallelLoadThreads=1`
   *
   * @public
   */
  ParallelLoadThreads?: number | undefined;

  /**
   * Endpoint connection password.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * Endpoint TCP port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The MySQL host name.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * Specifies the time zone for the source MySQL database.
   *
   * Example: `serverTimezone=US/Pacific;`
   *
   * Note: Do not enclose time zones in single quotes.
   *
   * @public
   */
  ServerTimezone?: string | undefined;

  /**
   * Endpoint connection user name.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret.` The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the Amazon Web Services Secrets Manager secret that allows access to the MySQL endpoint.
   *
   * > **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both. For more information on creating this `SecretsManagerSecret` and the `SecretsManagerAccessRoleArn` and `SecretsManagerSecretId` required to access it, see [Using secrets to access Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the Database Migration Service User Guide.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * The full ARN, partial ARN, or friendly name of the `SecretsManagerSecret` that contains the MySQL endpoint connection details.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;
}

/**
 * Provides information that defines an IBM Db2 LUW endpoint.
 *
 * @public
 */
export interface IBMDb2Settings {
  /**
   * Database name for the endpoint.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Endpoint connection password.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * Endpoint TCP port. The default value is 50000.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Fully qualified domain name of the endpoint.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * Enables ongoing replication (CDC) as a BOOLEAN value. The default is true.
   *
   * @public
   */
  SetDataCaptureChanges?: boolean | undefined;

  /**
   * For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start.
   *
   * @public
   */
  CurrentLsn?: string | undefined;

  /**
   * Maximum number of bytes per read, as a NUMBER value. The default is 64 KB.
   *
   * @public
   */
  MaxKBytesPerRead?: number | undefined;

  /**
   * Endpoint connection user name.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the Amazon Web Services Secrets Manager secret that allows access to the Db2 LUW endpoint.
   *
   * > **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both. For more information on creating this `SecretsManagerSecret` and the `SecretsManagerAccessRoleArn` and `SecretsManagerSecretId` required to access it, see [Using secrets to access Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * The full ARN, partial ARN, or friendly name of the `SecretsManagerSecret` that contains the Db2 LUW endpoint connection details.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * The amount of time (in milliseconds) before DMS times out operations performed by DMS on the Db2 target. The default value is 1200 (20 minutes).
   *
   * @public
   */
  LoadTimeout?: number | undefined;

  /**
   * The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB).
   *
   * @public
   */
  WriteBufferSize?: number | undefined;

  /**
   * Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW.
   *
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * If true, DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting.
   *
   * The default value is false.
   *
   * @public
   */
  KeepCsvFiles?: boolean | undefined;
}

/**
 * Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
 *
 * @public
 */
export interface KafkaSettings {
  /**
   * A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance. Specify each broker location in the form `broker-hostname-or-ip:port`. For example, `"ec2-12-345-678-901.compute-1.amazonaws.com:2345"`. For more information and examples of specifying a list of broker locations, see [Using Apache Kafka as a target for Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  Broker?: string | undefined;

  /**
   * The topic to which you migrate the data. If you don't specify a topic, DMS specifies `"kafka-default-topic"` as the migration topic.
   *
   * @public
   */
  Topic?: string | undefined;

  /**
   * The output format for the records created on the endpoint. The message format is `JSON` (default) or `JSON_UNFORMATTED` (a single line with no tab).
   *
   * @public
   */
  MessageFormat?: MessageFormatValue | undefined;

  /**
   * Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for `transaction_id`, previous `transaction_id`, and `transaction_record_id` (the record offset within a transaction). The default is `false`.
   *
   * @public
   */
  IncludeTransactionDetails?: boolean | undefined;

  /**
   * Shows the partition value within the Kafka message output unless the partition type is `schema-table-type`. The default is `false`.
   *
   * @public
   */
  IncludePartitionValue?: boolean | undefined;

  /**
   * Prefixes schema and table names to partition values, when the partition type is `primary-key-type`. Doing this increases data distribution among Kafka partitions. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same partition, which causes throttling. The default is `false`.
   *
   * @public
   */
  PartitionIncludeSchemaTable?: boolean | undefined;

  /**
   * Includes any data definition language (DDL) operations that change the table in the control data, such as `rename-table`, `drop-table`, `add-column`, `drop-column`, and `rename-column`. The default is `false`.
   *
   * @public
   */
  IncludeTableAlterOperations?: boolean | undefined;

  /**
   * Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. The default is `false`.
   *
   * @public
   */
  IncludeControlDetails?: boolean | undefined;

  /**
   * The maximum size in bytes for records created on the endpoint The default is 1,000,000.
   *
   * @public
   */
  MessageMaxBytes?: number | undefined;

  /**
   * Include NULL and empty columns for records migrated to the endpoint. The default is `false`.
   *
   * @public
   */
  IncludeNullAndEmpty?: boolean | undefined;

  /**
   * Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). Options include `ssl-encryption`, `ssl-authentication`, and `sasl-ssl`. `sasl-ssl` requires `SaslUsername` and `SaslPassword`.
   *
   * @public
   */
  SecurityProtocol?: KafkaSecurityProtocol | undefined;

  /**
   * The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.
   *
   * @public
   */
  SslClientCertificateArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.
   *
   * @public
   */
  SslClientKeyArn?: string | undefined;

  /**
   * The password for the client private key used to securely connect to a Kafka target endpoint.
   *
   * @public
   */
  SslClientKeyPassword?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that DMS uses to securely connect to your Kafka target endpoint.
   *
   * @public
   */
  SslCaCertificateArn?: string | undefined;

  /**
   * The secure user name you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
   *
   * @public
   */
  SaslUsername?: string | undefined;

  /**
   * The secure password you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
   *
   * @public
   */
  SaslPassword?: string | undefined;

  /**
   * Set this optional parameter to `true` to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the `NoHexPrefix` endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.
   *
   * @public
   */
  NoHexPrefix?: boolean | undefined;

  /**
   * For SASL/SSL authentication, DMS supports the `SCRAM-SHA-512` mechanism by default. DMS versions 3.5.0 and later also support the `PLAIN` mechanism. To use the `PLAIN` mechanism, set this parameter to `PLAIN.`
   *
   * @public
   */
  SaslMechanism?: KafkaSaslMechanism | undefined;

  /**
   * Sets hostname verification for the certificate. This setting is supported in DMS version 3.5.1 and later.
   *
   * @public
   */
  SslEndpointIdentificationAlgorithm?: KafkaSslEndpointIdentificationAlgorithm | undefined;

  /**
   * Specifies using the large integer value with Kafka.
   *
   * @public
   */
  UseLargeIntegerValue?: boolean | undefined;
}

/**
 * Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
 *
 * @public
 */
export interface KinesisSettings {
  /**
   * The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.
   *
   * @public
   */
  StreamArn?: string | undefined;

  /**
   * The output format for the records created on the endpoint. The message format is `JSON` (default) or `JSON_UNFORMATTED` (a single line with no tab).
   *
   * @public
   */
  MessageFormat?: MessageFormatValue | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role that DMS uses to write to the Kinesis data stream. The role must allow the `iam:PassRole` action.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for `transaction_id`, previous `transaction_id`, and `transaction_record_id` (the record offset within a transaction). The default is `false`.
   *
   * @public
   */
  IncludeTransactionDetails?: boolean | undefined;

  /**
   * Shows the partition value within the Kinesis message output, unless the partition type is `schema-table-type`. The default is `false`.
   *
   * @public
   */
  IncludePartitionValue?: boolean | undefined;

  /**
   * Prefixes schema and table names to partition values, when the partition type is `primary-key-type`. Doing this increases data distribution among Kinesis shards. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same shard, which causes throttling. The default is `false`.
   *
   * @public
   */
  PartitionIncludeSchemaTable?: boolean | undefined;

  /**
   * Includes any data definition language (DDL) operations that change the table in the control data, such as `rename-table`, `drop-table`, `add-column`, `drop-column`, and `rename-column`. The default is `false`.
   *
   * @public
   */
  IncludeTableAlterOperations?: boolean | undefined;

  /**
   * Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. The default is `false`.
   *
   * @public
   */
  IncludeControlDetails?: boolean | undefined;

  /**
   * Include NULL and empty columns for records migrated to the endpoint. The default is `false`.
   *
   * @public
   */
  IncludeNullAndEmpty?: boolean | undefined;

  /**
   * Set this optional parameter to `true` to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to an Amazon Kinesis target. Use the `NoHexPrefix` endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.
   *
   * @public
   */
  NoHexPrefix?: boolean | undefined;

  /**
   * Specifies using the large integer value with Kinesis.
   *
   * @public
   */
  UseLargeIntegerValue?: boolean | undefined;
}

/**
 * Provides information that defines a Microsoft SQL Server endpoint.
 *
 * @public
 */
export interface MicrosoftSQLServerSettings {
  /**
   * Endpoint TCP port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The maximum size of the packets (in bytes) used to transfer data using BCP.
   *
   * @public
   */
  BcpPacketSize?: number | undefined;

  /**
   * Database name for the endpoint.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Specifies a file group for the DMS internal tables. When the replication task starts, all the internal DMS control tables (awsdms_ apply_exception, awsdms_apply, awsdms_changes) are created for the specified file group.
   *
   * @public
   */
  ControlTablesFileGroup?: string | undefined;

  /**
   * Endpoint connection password.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * Cleans and recreates table metadata information on the replication instance when a mismatch occurs. An example is a situation where running an alter DDL statement on a table might result in different information about the table cached in the replication instance.
   *
   * @public
   */
  QuerySingleAlwaysOnNode?: boolean | undefined;

  /**
   * When this attribute is set to `Y`, DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication. Setting this parameter to `Y` enables you to control active transaction log file growth during full load and ongoing replication tasks. However, it can add some source latency to ongoing replication.
   *
   * @public
   */
  ReadBackupOnly?: boolean | undefined;

  /**
   * Use this attribute to minimize the need to access the backup log and enable DMS to prevent truncation using one of the following two methods.
   *
   * *Start transactions in the database:* This is the default method. When this method is used, DMS prevents TLOG truncation by mimicking a transaction in the database. As long as such a transaction is open, changes that appear after the transaction started aren't truncated. If you need Microsoft Replication to be enabled in your database, then you must choose this method.
   *
   * *Exclusively use sp_repldone within a single task*: When this method is used, DMS reads the changes and then uses sp_repldone to mark the TLOG transactions as ready for truncation. Although this method doesn't involve any transactional activities, it can only be used when Microsoft Replication isn't running. Also, when using this method, only one DMS task can access the database at any given time. Therefore, if you need to run parallel DMS tasks against the same database, use the default method.
   *
   * @public
   */
  SafeguardPolicy?: SafeguardPolicy | undefined;

  /**
   * Fully qualified domain name of the endpoint. For an Amazon RDS SQL Server instance, this is the output of [DescribeDBInstances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html), in the `Endpoint.Address` field.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * Endpoint connection user name.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * Use this to attribute to transfer data for full-load operations using BCP. When the target table contains an identity column that does not exist in the source table, you must disable the use BCP for loading table option.
   *
   * @public
   */
  UseBcpFullLoad?: boolean | undefined;

  /**
   * When this attribute is set to `Y`, DMS processes third-party transaction log backups if they are created in native format.
   *
   * @public
   */
  UseThirdPartyBackupDevice?: boolean | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the Amazon Web Services Secrets Manager secret that allows access to the SQL Server endpoint.
   *
   * > **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both. For more information on creating this `SecretsManagerSecret` and the `SecretsManagerAccessRoleArn` and `SecretsManagerSecretId` required to access it, see [Using secrets to access Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * The full ARN, partial ARN, or friendly name of the `SecretsManagerSecret` that contains the SQL Server endpoint connection details.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * Use the `TrimSpaceInChar` source endpoint setting to right-trim data on CHAR and NCHAR data types during migration. Setting `TrimSpaceInChar` does not left-trim data. The default value is `true`.
   *
   * @public
   */
  TrimSpaceInChar?: boolean | undefined;

  /**
   * Indicates the mode used to fetch CDC data.
   *
   * @public
   */
  TlogAccessMode?: TlogAccessMode | undefined;

  /**
   * Forces LOB lookup on inline LOB.
   *
   * @public
   */
  ForceLobLookup?: boolean | undefined;

  /**
   * Specifies the authentication method to be used with Microsoft SQL Server.
   *
   * @public
   */
  AuthenticationMethod?: SqlServerAuthenticationMethod | undefined;
}

/**
 * Provides information that defines a MongoDB endpoint.
 *
 * @public
 */
export interface MongoDbSettings {
  /**
   * The user name you use to access the MongoDB source endpoint.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The password for the user account you use to access the MongoDB source endpoint.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The name of the server on the MongoDB source endpoint. For MongoDB Atlas, provide the server name for any of the servers in the replication set.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value for the MongoDB source endpoint.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The database name on the MongoDB source endpoint.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The authentication type you use to access the MongoDB source endpoint.
   *
   * When when set to `"no"`, user name and password parameters are not used and can be empty.
   *
   * @public
   */
  AuthType?: AuthTypeValue | undefined;

  /**
   * The authentication mechanism you use to access the MongoDB source endpoint.
   *
   * For the default value, in MongoDB version 2.x, `"default"` is `"mongodb_cr"`. For MongoDB version 3.x or later, `"default"` is `"scram_sha_1"`. This setting isn't used when `AuthType` is set to `"no"`.
   *
   * @public
   */
  AuthMechanism?: AuthMechanismValue | undefined;

  /**
   * Specifies either document or table mode.
   *
   * Default value is `"none"`. Specify `"none"` to use document mode. Specify `"one"` to use table mode.
   *
   * @public
   */
  NestingLevel?: NestingLevelValue | undefined;

  /**
   * Specifies whether the document ID is added to the target table. Use this setting when `NestingLevel` is set to `"none"`.
   *
   * Set `ExtractDocId` to `"true"` when using [multi-document transactions](https://www.mongodb.com/docs/manual/reference/method/Session.startTransaction/#mongodb-method-Session.startTransaction) with CDC.
   *
   * Default value is `"false"`.
   *
   * @public
   */
  ExtractDocId?: string | undefined;

  /**
   * Indicates the number of documents to preview to determine the document organization. Use this setting when `NestingLevel` is set to `"one"`.
   *
   * Must be a positive value greater than `0`. Default value is `1000`.
   *
   * @public
   */
  DocsToInvestigate?: string | undefined;

  /**
   * The MongoDB database name. This setting isn't used when `AuthType` is set to `"no"`.
   *
   * The default is `"admin"`.
   *
   * @public
   */
  AuthSource?: string | undefined;

  /**
   * The KMS key identifier that is used to encrypt the content on the replication instance. If you don't specify a value for the `KmsKeyId` parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the Amazon Web Services Secrets Manager secret that allows access to the MongoDB endpoint.
   *
   * > **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both. For more information on creating this `SecretsManagerSecret` and the `SecretsManagerAccessRoleArn` and `SecretsManagerSecretId` required to access it, see [Using secrets to access Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * The full ARN, partial ARN, or friendly name of the `SecretsManagerSecret` that contains the MongoDB endpoint connection details.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * If `true`, DMS retrieves the entire document from the MongoDB source during migration. This may cause a migration failure if the server response exceeds bandwidth limits. To fetch only updates and deletes during migration, set this parameter to `false`.
   *
   * @public
   */
  UseUpdateLookUp?: boolean | undefined;

  /**
   * If `true`, DMS replicates data to shard collections. DMS only uses this setting if the target endpoint is a DocumentDB elastic cluster.
   *
   * When this setting is `true`, note the following:
   *
   * - You must set `TargetTablePrepMode` to `nothing`.
   * - DMS automatically sets `useUpdateLookup` to `false`.
   *
   * @public
   */
  ReplicateShardCollections?: boolean | undefined;
}

/**
 * Provides information that defines a MySQL endpoint.
 *
 * @public
 */
export interface MySQLSettings {
  /**
   * Specifies a script to run immediately after DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails.
   *
   * For this parameter, provide the code of the script itself, not the name of a file containing the script.
   *
   * @public
   */
  AfterConnectScript?: string | undefined;

  /**
   * Cleans and recreates table metadata information on the replication instance when a mismatch occurs. For example, in a situation where running an alter DDL on the table could result in different information about the table cached in the replication instance.
   *
   * @public
   */
  CleanSourceMetadataOnMismatch?: boolean | undefined;

  /**
   * Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the `DatabaseName` request parameter on either the `CreateEndpoint` or `ModifyEndpoint` API call. Specifying `DatabaseName` when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds.
   *
   * Example: `eventsPollInterval=5;`
   *
   * In the example, DMS checks for changes in the binary logs every five seconds.
   *
   * @public
   */
  EventsPollInterval?: number | undefined;

  /**
   * Specifies where to migrate source tables on the target, either to a single database or multiple databases. If you specify `SPECIFIC_DATABASE`, specify the database name using the `DatabaseName` parameter of the `Endpoint` object.
   *
   * Example: `targetDbType=MULTIPLE_DATABASES`
   *
   * @public
   */
  TargetDbType?: TargetDbType | undefined;

  /**
   * Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.
   *
   * Example: `maxFileSize=512`
   *
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.
   *
   * Example: `parallelLoadThreads=1`
   *
   * @public
   */
  ParallelLoadThreads?: number | undefined;

  /**
   * Endpoint connection password.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * Endpoint TCP port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The host name of the endpoint database.
   *
   * For an Amazon RDS MySQL instance, this is the output of [DescribeDBInstances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html), in the `Endpoint.Address` field.
   *
   * For an Aurora MySQL instance, this is the output of [DescribeDBClusters](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html), in the `Endpoint` field.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * Specifies the time zone for the source MySQL database.
   *
   * Example: `serverTimezone=US/Pacific;`
   *
   * Note: Do not enclose time zones in single quotes.
   *
   * @public
   */
  ServerTimezone?: string | undefined;

  /**
   * Endpoint connection user name.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the Amazon Web Services Secrets Manager secret that allows access to the MySQL endpoint.
   *
   * > **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both. For more information on creating this `SecretsManagerSecret` and the `SecretsManagerAccessRoleArn` and `SecretsManagerSecretId` required to access it, see [Using secrets to access Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * The full ARN, partial ARN, or friendly name of the `SecretsManagerSecret` that contains the MySQL endpoint connection details.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * Sets the client statement timeout (in seconds) for a MySQL source endpoint.
   *
   * @public
   */
  ExecuteTimeout?: number | undefined;

  /**
   * The IAM role you can use to authenticate when connecting to your endpoint. Ensure to include `iam:PassRole` and `rds-db:connect` actions in permission policy.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * This attribute allows you to specify the authentication method as "iam auth".
   *
   * @public
   */
  AuthenticationMethod?: MySQLAuthenticationMethod | undefined;
}

/**
 * Provides information that defines an Amazon Neptune endpoint.
 *
 * @public
 */
export interface NeptuneSettings {
  /**
   * The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint. The role must allow the `iam:PassRole` action. For more information, see [Creating an IAM Service Role for Accessing Amazon Neptune as a Target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.ServiceRole) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * The name of the Amazon S3 bucket where DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database. DMS maps the SQL source data to graph data before storing it in these .csv files.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * A folder path where you want DMS to store migrated graph data in the S3 bucket specified by `S3BucketName`
   *
   * @public
   */
  S3BucketFolder: string | undefined;

  /**
   * The number of milliseconds for DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error. The default is 250.
   *
   * @public
   */
  ErrorRetryDuration?: number | undefined;

  /**
   * The maximum size in kilobytes of migrated graph data stored in a .csv file before DMS bulk-loads the data to the Neptune target database. The default is 1,048,576 KB. If the bulk load is successful, DMS clears the bucket, ready to store the next batch of migrated graph data.
   *
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * The number of times for DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error. The default is 5.
   *
   * @public
   */
  MaxRetryCount?: number | undefined;

  /**
   * If you want Identity and Access Management (IAM) authorization enabled for this endpoint, set this parameter to `true`. Then attach the appropriate IAM policy document to your service role specified by `ServiceAccessRoleArn`. The default is `false`.
   *
   * @public
   */
  IamAuthEnabled?: boolean | undefined;
}

/**
 * Provides information that defines an Oracle endpoint.
 *
 * @public
 */
export interface OracleSettings {
  /**
   * Set this attribute to set up table-level supplemental logging for the Oracle database. This attribute enables PRIMARY KEY supplemental logging on all tables selected for a migration task.
   *
   * If you use this option, you still need to enable database-level supplemental logging.
   *
   * @public
   */
  AddSupplementalLogging?: boolean | undefined;

  /**
   * Specifies the ID of the destination for the archived redo logs. This value should be the same as a number in the dest_id column of the v$archived_log view. If you work with an additional redo log destination, use the `AdditionalArchivedLogDestId` option to specify the additional destination ID. Doing this improves performance by ensuring that the correct logs are accessed from the outset.
   *
   * @public
   */
  ArchivedLogDestId?: number | undefined;

  /**
   * Set this attribute with `ArchivedLogDestId` in a primary/ standby setup. This attribute is useful in the case of a switchover. In this case, DMS needs to know which destination to get archive redo logs from to read changes. This need arises because the previous primary instance is now a standby instance after switchover.
   *
   * Although DMS supports the use of the Oracle `RESETLOGS` option to open the database, never use `RESETLOGS` unless necessary. For additional information about `RESETLOGS`, see [RMAN Data Repair Concepts](https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B) in the *Oracle Database Backup and Recovery User's Guide*.
   *
   * @public
   */
  AdditionalArchivedLogDestId?: number | undefined;

  /**
   * Specifies the IDs of one more destinations for one or more archived redo logs. These IDs are the values of the `dest_id` column in the `v$archived_log` view. Use this setting with the `archivedLogDestId` extra connection attribute in a primary-to-single setup or a primary-to-multiple-standby setup.
   *
   * This setting is useful in a switchover when you use an Oracle Data Guard database as a source. In this case, DMS needs information about what destination to get archive redo logs from to read changes. DMS needs this because after the switchover the previous primary is a standby instance. For example, in a primary-to-single standby setup you might apply the following settings.
   *
   * `archivedLogDestId=1; ExtraArchivedLogDestIds=[2]`
   *
   * In a primary-to-multiple-standby setup, you might apply the following settings.
   *
   * `archivedLogDestId=1; ExtraArchivedLogDestIds=[2,3,4]`
   *
   * Although DMS supports the use of the Oracle `RESETLOGS` option to open the database, never use `RESETLOGS` unless it's necessary. For more information about `RESETLOGS`, see [RMAN Data Repair Concepts](https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B) in the *Oracle Database Backup and Recovery User's Guide*.
   *
   * @public
   */
  ExtraArchivedLogDestIds?: number[] | undefined;

  /**
   * Set this attribute to `true` to enable replication of Oracle tables containing columns that are nested tables or defined types.
   *
   * @public
   */
  AllowSelectNestedTables?: boolean | undefined;

  /**
   * Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). You can specify an integer value between 2 (the default) and 8 (the maximum). Use this attribute together with the `readAheadBlocks` attribute.
   *
   * @public
   */
  ParallelAsmReadThreads?: number | undefined;

  /**
   * Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). You can specify an integer value between 1000 (the default) and 200,000 (the maximum).
   *
   * @public
   */
  ReadAheadBlocks?: number | undefined;

  /**
   * Set this attribute to `false` in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This tells the DMS instance to not access redo logs through any specified path prefix replacement using direct file access.
   *
   * @public
   */
  AccessAlternateDirectly?: boolean | undefined;

  /**
   * Set this attribute to `true` in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This tells the DMS instance to use any specified prefix replacement to access all online redo logs.
   *
   * @public
   */
  UseAlternateFolderForOnline?: boolean | undefined;

  /**
   * Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This value specifies the default Oracle root used to access the redo logs.
   *
   * @public
   */
  OraclePathPrefix?: string | undefined;

  /**
   * Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This value specifies the path prefix used to replace the default Oracle root to access the redo logs.
   *
   * @public
   */
  UsePathPrefix?: string | undefined;

  /**
   * Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This setting tells DMS instance to replace the default Oracle root with the specified `usePathPrefix` setting to access the redo logs.
   *
   * @public
   */
  ReplacePathPrefix?: boolean | undefined;

  /**
   * Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target.
   *
   * @public
   */
  EnableHomogenousTablespace?: boolean | undefined;

  /**
   * When set to `true`, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs.
   *
   * @public
   */
  DirectPathNoLog?: boolean | undefined;

  /**
   * When this field is set to `True`, DMS only accesses the archived redo logs. If the archived redo logs are stored on Automatic Storage Management (ASM) only, the DMS user account needs to be granted ASM privileges.
   *
   * @public
   */
  ArchivedLogsOnly?: boolean | undefined;

  /**
   * For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password. You can set this value from the `asm_user_password` value. You set this value as part of the comma-separated value that you set to the `Password` request parameter when you create the endpoint to access transaction logs using Binary Reader. For more information, see [Configuration for change data capture (CDC) on an Oracle source database](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration).
   *
   * @public
   */
  AsmPassword?: string | undefined;

  /**
   * For an Oracle source endpoint, your ASM server address. You can set this value from the `asm_server` value. You set `asm_server` as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see [Configuration for change data capture (CDC) on an Oracle source database](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration).
   *
   * @public
   */
  AsmServer?: string | undefined;

  /**
   * For an Oracle source endpoint, your ASM user name. You can set this value from the `asm_user` value. You set `asm_user` as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see [Configuration for change data capture (CDC) on an Oracle source database](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration).
   *
   * @public
   */
  AsmUser?: string | undefined;

  /**
   * Specifies whether the length of a character column is in bytes or in characters. To indicate that the character column length is in characters, set this attribute to `CHAR`. Otherwise, the character column length is in bytes.
   *
   * Example: `charLengthSemantics=CHAR;`
   *
   * @public
   */
  CharLengthSemantics?: CharLengthSemantics | undefined;

  /**
   * Database name for the endpoint.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * When set to `true`, this attribute specifies a parallel load when `useDirectPathFullLoad` is set to `Y`. This attribute also only applies when you use the DMS parallel load feature. Note that the target table cannot have any constraints or indexes.
   *
   * @public
   */
  DirectPathParallelLoad?: boolean | undefined;

  /**
   * When set to `true`, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified `LobMaxSize`.
   *
   * If a task is set to limited LOB mode and this option is set to `true`, the task fails instead of truncating the LOB data.
   *
   * @public
   */
  FailTasksOnLobTruncation?: boolean | undefined;

  /**
   * Specifies the number scale. You can select a scale up to 38, or you can select FLOAT. By default, the NUMBER data type is converted to precision 38, scale 10.
   *
   * Example: `numberDataTypeScale=12`
   *
   * @public
   */
  NumberDatatypeScale?: number | undefined;

  /**
   * Endpoint connection password.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * Endpoint TCP port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * When set to `true`, this attribute supports tablespace replication.
   *
   * @public
   */
  ReadTableSpaceName?: boolean | undefined;

  /**
   * Specifies the number of seconds that the system waits before resending a query.
   *
   * Example: `retryInterval=6;`
   *
   * @public
   */
  RetryInterval?: number | undefined;

  /**
   * For an Oracle source endpoint, the transparent data encryption (TDE) password required by DMS to access Oracle redo logs encrypted by TDE using Binary Reader. It is also the `TDE_Password` part of the comma-separated value you set to the `Password` request parameter when you create the endpoint. The `SecurityDbEncryption` setting is related to this `SecurityDbEncryptionName` setting. For more information, see [Supported encryption methods for using Oracle as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecurityDbEncryption?: string | undefined;

  /**
   * For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE. The key value is the value of the `SecurityDbEncryption` setting. For more information on setting the key name value of `SecurityDbEncryptionName`, see the information and example for setting the `securityDbEncryptionName` extra connection attribute in [Supported encryption methods for using Oracle as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecurityDbEncryptionName?: string | undefined;

  /**
   * Fully qualified domain name of the endpoint.
   *
   * For an Amazon RDS Oracle instance, this is the output of [DescribeDBInstances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html), in the `Endpoint.Address` field.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * Use this attribute to convert `SDO_GEOMETRY` to `GEOJSON` format. By default, DMS calls the `SDO2GEOJSON` custom function if present and accessible. Or you can create your own custom function that mimics the operation of `SDOGEOJSON` and set `SpatialDataOptionToGeoJsonFunctionName` to call it instead.
   *
   * @public
   */
  SpatialDataOptionToGeoJsonFunctionName?: string | undefined;

  /**
   * Use this attribute to specify a time in minutes for the delay in standby sync. If the source is an Oracle Active Data Guard standby database, use this attribute to specify the time lag between primary and standby databases.
   *
   * In DMS, you can create an Oracle CDC task that uses an Active Data Guard standby instance as a source for replicating ongoing changes. Doing this eliminates the need to connect to an active database that might be in production.
   *
   * @public
   */
  StandbyDelayTime?: number | undefined;

  /**
   * Endpoint connection user name.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * Set this attribute to True to capture change data using the Binary Reader utility. Set `UseLogminerReader` to False to set this attribute to True. To use Binary Reader with Amazon RDS for Oracle as the source, you set additional attributes. For more information about using this setting with Oracle Automatic Storage Management (ASM), see [Using Oracle LogMiner or DMS Binary Reader for CDC](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC).
   *
   * @public
   */
  UseBFile?: boolean | undefined;

  /**
   * Set this attribute to True to have DMS use a direct path full load. Specify this value to use the direct path protocol in the Oracle Call Interface (OCI). By using this OCI protocol, you can bulk-load Oracle target tables during a full load.
   *
   * @public
   */
  UseDirectPathFullLoad?: boolean | undefined;

  /**
   * Set this attribute to True to capture change data using the Oracle LogMiner utility (the default). Set this attribute to False if you want to access the redo logs as a binary file. When you set `UseLogminerReader` to False, also set `UseBfile` to True. For more information on this setting and using Oracle ASM, see [Using Oracle LogMiner or DMS Binary Reader for CDC](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC) in the *DMS User Guide*.
   *
   * @public
   */
  UseLogminerReader?: boolean | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the Amazon Web Services Secrets Manager secret that allows access to the Oracle endpoint.
   *
   * > **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both. For more information on creating this `SecretsManagerSecret` and the `SecretsManagerAccessRoleArn` and `SecretsManagerSecretId` required to access it, see [Using secrets to access Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * The full ARN, partial ARN, or friendly name of the `SecretsManagerSecret` that contains the Oracle endpoint connection details.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * Required only if your Oracle endpoint uses Automatic Storage Management (ASM). The full ARN of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the `SecretsManagerOracleAsmSecret`. This `SecretsManagerOracleAsmSecret` has the secret value that allows access to the Oracle ASM of the endpoint.
   *
   * > **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerOracleAsmSecretId`. Or you can specify clear-text values for `AsmUser`, `AsmPassword`, and `AsmServerName`. You can't specify both. For more information on creating this `SecretsManagerOracleAsmSecret` and the `SecretsManagerOracleAsmAccessRoleArn` and `SecretsManagerOracleAsmSecretId` required to access it, see [Using secrets to access Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecretsManagerOracleAsmAccessRoleArn?: string | undefined;

  /**
   * Required only if your Oracle endpoint uses Automatic Storage Management (ASM). The full ARN, partial ARN, or friendly name of the `SecretsManagerOracleAsmSecret` that contains the Oracle ASM connection details for the Oracle endpoint.
   *
   * @public
   */
  SecretsManagerOracleAsmSecretId?: string | undefined;

  /**
   * Use the `TrimSpaceInChar` source endpoint setting to trim data on CHAR and NCHAR data types during migration. The default value is `true`.
   *
   * @public
   */
  TrimSpaceInChar?: boolean | undefined;

  /**
   * When true, converts timestamps with the `timezone` datatype to their UTC value.
   *
   * @public
   */
  ConvertTimestampWithZoneToUTC?: boolean | undefined;

  /**
   * The timeframe in minutes to check for open transactions for a CDC-only task.
   *
   * You can specify an integer value between 0 (the default) and 240 (the maximum).
   *
   * > **Note:** This parameter is only valid in DMS version 3.5.0 and later.
   *
   * @public
   */
  OpenTransactionWindow?: number | undefined;

  /**
   * Specifies the authentication method to be used with Oracle.
   *
   * @public
   */
  AuthenticationMethod?: OracleAuthenticationMethod | undefined;
}

/**
 * Provides information that defines a PostgreSQL endpoint.
 *
 * @public
 */
export interface PostgreSQLSettings {
  /**
   * For use with change data capture (CDC) only, this attribute has DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.
   *
   * Example: `afterConnectScript=SET session_replication_role='replica'`
   *
   * @public
   */
  AfterConnectScript?: string | undefined;

  /**
   * To capture DDL events, DMS creates various artifacts in the PostgreSQL database when the task starts. You can later remove these artifacts.
   *
   * The default value is `true`.
   *
   * If this value is set to `N`, you don't have to create tables or triggers on the source database.
   *
   * @public
   */
  CaptureDdls?: boolean | undefined;

  /**
   * Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL.
   *
   * The default value is 32,768 KB (32 MB).
   *
   * Example: `maxFileSize=512`
   *
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * Database name for the endpoint.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The schema in which the operational DDL database artifacts are created.
   *
   * The default value is `public`.
   *
   * Example: `ddlArtifactsSchema=xyzddlschema;`
   *
   * @public
   */
  DdlArtifactsSchema?: string | undefined;

  /**
   * Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.
   *
   * Example: `executeTimeout=100;`
   *
   * @public
   */
  ExecuteTimeout?: number | undefined;

  /**
   * When set to `true`, this value causes a task to fail if the actual size of a LOB column is greater than the specified `LobMaxSize`.
   *
   * The default value is `false`.
   *
   * If task is set to Limited LOB mode and this option is set to true, the task fails instead of truncating the LOB data.
   *
   * @public
   */
  FailTasksOnLobTruncation?: boolean | undefined;

  /**
   * The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. By doing this, it prevents idle logical replication slots from holding onto old WAL logs, which can result in storage full situations on the source. This heartbeat keeps `restart_lsn` moving and prevents storage full scenarios.
   *
   * The default value is `false`.
   *
   * @public
   */
  HeartbeatEnable?: boolean | undefined;

  /**
   * Sets the schema in which the heartbeat artifacts are created.
   *
   * The default value is `public`.
   *
   * @public
   */
  HeartbeatSchema?: string | undefined;

  /**
   * Sets the WAL heartbeat frequency (in minutes).
   *
   * The default value is 5 minutes.
   *
   * @public
   */
  HeartbeatFrequency?: number | undefined;

  /**
   * Endpoint connection password.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * Endpoint TCP port. The default is 5432.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The host name of the endpoint database.
   *
   * For an Amazon RDS PostgreSQL instance, this is the output of [DescribeDBInstances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html), in the `Endpoint.Address` field.
   *
   * For an Aurora PostgreSQL instance, this is the output of [DescribeDBClusters](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html), in the `Endpoint` field.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * Endpoint connection user name.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.
   *
   * When used with the `CdcStartPosition` request parameter for the DMS API , this attribute also makes it possible to use native CDC start points. DMS verifies that the specified logical replication slot exists before starting the CDC load task. It also verifies that the task was created with a valid setting of `CdcStartPosition`. If the specified slot doesn't exist or the task doesn't have a valid `CdcStartPosition` setting, DMS raises an error.
   *
   * For more information about setting the `CdcStartPosition` request parameter, see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native) in the *Database Migration Service User Guide*. For more information about using `CdcStartPosition`, see [CreateReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html), [StartReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html), and [ModifyReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html).
   *
   * @public
   */
  SlotName?: string | undefined;

  /**
   * Specifies the plugin to use to create a replication slot.
   *
   * The default value is `pglogical`.
   *
   * @public
   */
  PluginName?: PluginNameValue | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the Amazon Web Services Secrets Manager secret that allows access to the PostgreSQL endpoint.
   *
   * > **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both. For more information on creating this `SecretsManagerSecret` and the `SecretsManagerAccessRoleArn` and `SecretsManagerSecretId` required to access it, see [Using secrets to access Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * The full ARN, partial ARN, or friendly name of the `SecretsManagerSecret` that contains the PostgreSQL endpoint connection details.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * Use the `TrimSpaceInChar` source endpoint setting to trim data on CHAR and NCHAR data types during migration. The default value is `true`.
   *
   * @public
   */
  TrimSpaceInChar?: boolean | undefined;

  /**
   * When true, lets PostgreSQL migrate the boolean type as boolean. By default, PostgreSQL migrates booleans as `varchar(5)`. You must set this setting on both the source and target endpoints for it to take effect.
   *
   * The default value is `false`.
   *
   * @public
   */
  MapBooleanAsBoolean?: boolean | undefined;

  /**
   * When true, DMS migrates JSONB values as CLOB.
   *
   * The default value is `false`.
   *
   * @public
   */
  MapJsonbAsClob?: boolean | undefined;

  /**
   * Sets what datatype to map LONG values as.
   *
   * The default value is `wstring`.
   *
   * @public
   */
  MapLongVarcharAs?: LongVarcharMappingType | undefined;

  /**
   * Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.
   *
   * @public
   */
  DatabaseMode?: DatabaseMode | undefined;

  /**
   * The Babelfish for Aurora PostgreSQL database name for the endpoint.
   *
   * @public
   */
  BabelfishDatabaseName?: string | undefined;

  /**
   * Disables the Unicode source filter with PostgreSQL, for values passed into the Selection rule filter on Source Endpoint column values. By default DMS performs source filter comparisons using a Unicode string which can cause look ups to ignore the indexes in the text columns and slow down migrations.
   *
   * Unicode support should only be disabled when using a selection rule filter is on a text column in the Source database that is indexed.
   *
   * @public
   */
  DisableUnicodeSourceFilter?: boolean | undefined;

  /**
   * The IAM role arn you can use to authenticate the connection to your endpoint. Ensure to include `iam:PassRole` and `rds-db:connect` actions in permission policy.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * This attribute allows you to specify the authentication method as "iam auth".
   *
   * @public
   */
  AuthenticationMethod?: PostgreSQLAuthenticationMethod | undefined;
}

/**
 * Provides information that defines a Redis target endpoint.
 *
 * @public
 */
export interface RedisSettings {
  /**
   * Fully qualified domain name of the endpoint.
   *
   * @public
   */
  ServerName: string | undefined;

  /**
   * Transmission Control Protocol (TCP) port for the endpoint.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include `plaintext` and `ssl-encryption`. The default is `ssl-encryption`. The `ssl-encryption` option makes an encrypted connection. Optionally, you can identify an Amazon Resource Name (ARN) for an SSL certificate authority (CA) using the `SslCaCertificateArn`setting. If an ARN isn't given for a CA, DMS uses the Amazon root CA.
   *
   * The `plaintext` option doesn't provide Transport Layer Security (TLS) encryption for traffic between endpoint and database.
   *
   * @public
   */
  SslSecurityProtocol?: SslSecurityProtocolValue | undefined;

  /**
   * The type of authentication to perform when connecting to a Redis target. Options include `none`, `auth-token`, and `auth-role`. The `auth-token` option requires an `AuthPassword` value to be provided. The `auth-role` option requires `AuthUserName` and `AuthPassword` values to be provided.
   *
   * @public
   */
  AuthType?: RedisAuthTypeValue | undefined;

  /**
   * The user name provided with the `auth-role` option of the `AuthType` setting for a Redis target endpoint.
   *
   * @public
   */
  AuthUserName?: string | undefined;

  /**
   * The password provided with the `auth-role` and `auth-token` options of the `AuthType` setting for a Redis target endpoint.
   *
   * @public
   */
  AuthPassword?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.
   *
   * @public
   */
  SslCaCertificateArn?: string | undefined;
}

/**
 * Provides information that defines an Amazon Redshift endpoint.
 *
 * @public
 */
export interface RedshiftSettings {
  /**
   * A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. You can choose `true` or `false` (the default).
   *
   * This parameter applies only to TIMESTAMP and DATE columns. Always use ACCEPTANYDATE with the DATEFORMAT parameter. If the date format for the data doesn't match the DATEFORMAT specification, Amazon Redshift inserts a NULL value into that field.
   *
   * @public
   */
  AcceptAnyDate?: boolean | undefined;

  /**
   * Code to run after connecting. This parameter should contain the code itself, not the name of a file containing the code.
   *
   * @public
   */
  AfterConnectScript?: string | undefined;

  /**
   * An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster.
   *
   * For full load mode, DMS converts source records into .csv files and loads them to the *BucketFolder/TableID* path. DMS uses the Redshift `COPY` command to upload the .csv files to the target table. The files are deleted once the `COPY` operation has finished. For more information, see [COPY](https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html) in the *Amazon Redshift Database Developer Guide*.
   *
   * For change-data-capture (CDC) mode, DMS creates a *NetChanges* table, and loads the .csv files to this *BucketFolder/NetChangesTableID* path.
   *
   * @public
   */
  BucketFolder?: string | undefined;

  /**
   * The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * If Amazon Redshift is configured to support case sensitive schema names, set `CaseSensitiveNames` to `true`. The default is `false`.
   *
   * @public
   */
  CaseSensitiveNames?: boolean | undefined;

  /**
   * If you set `CompUpdate` to `true` Amazon Redshift applies automatic compression if the table is empty. This applies even if the table columns already have encodings other than `RAW`. If you set `CompUpdate` to `false`, automatic compression is disabled and existing column encodings aren't changed. The default is `true`.
   *
   * @public
   */
  CompUpdate?: boolean | undefined;

  /**
   * A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.
   *
   * @public
   */
  ConnectionTimeout?: number | undefined;

  /**
   * The name of the Amazon Redshift data warehouse (service) that you are working with.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The date format that you are using. Valid values are `auto` (case-sensitive), your date format string enclosed in quotes, or NULL. If this parameter is left unset (NULL), it defaults to a format of 'YYYY-MM-DD'. Using `auto` recognizes most strings, even some that aren't supported when you use a date format string.
   *
   * If your date and time values use formats different from each other, set this to `auto`.
   *
   * @public
   */
  DateFormat?: string | undefined;

  /**
   * A value that specifies whether DMS should migrate empty CHAR and VARCHAR fields as NULL. A value of `true` sets empty CHAR and VARCHAR fields to null. The default is `false`.
   *
   * @public
   */
  EmptyAsNull?: boolean | undefined;

  /**
   * The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either `SSE_S3` (the default) or `SSE_KMS`.
   *
   * > **Note:** For the `ModifyEndpoint` operation, you can change the existing value of the `EncryptionMode` parameter from `SSE_KMS` to `SSE_S3`. But you can’t change the existing value from `SSE_S3` to `SSE_KMS`.
   *
   * To use `SSE_S3`, create an Identity and Access Management (IAM) role with a policy that allows `"arn:aws:s3:::*"` to use the following actions: `"s3:PutObject", "s3:ListBucket"`
   *
   * @public
   */
  EncryptionMode?: EncryptionModeValue | undefined;

  /**
   * This setting is only valid for a full-load migration task. Set `ExplicitIds` to `true` to have tables with `IDENTITY` columns override their auto-generated values with explicit values loaded from the source data files used to populate the tables. The default is `false`.
   *
   * @public
   */
  ExplicitIds?: boolean | undefined;

  /**
   * The number of threads used to upload a single file. This parameter accepts a value from 1 through 64. It defaults to 10.
   *
   * The number of parallel streams used to upload a single .csv file to an S3 bucket using S3 Multipart Upload. For more information, see [Multipart upload overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html).
   *
   * `FileTransferUploadStreams` accepts a value from 1 through 64. It defaults to 10.
   *
   * @public
   */
  FileTransferUploadStreams?: number | undefined;

  /**
   * The amount of time to wait (in seconds) before timing out of operations performed by DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.
   *
   * @public
   */
  LoadTimeout?: number | undefined;

  /**
   * The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB).
   *
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * The password for the user named in the `username` property.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The port number for Amazon Redshift. The default value is 5439.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * A value that specifies to remove surrounding quotation marks from strings in the incoming data. All characters within the quotation marks, including delimiters, are retained. Choose `true` to remove quotation marks. The default is `false`.
   *
   * @public
   */
  RemoveQuotes?: boolean | undefined;

  /**
   * A list of characters that you want to replace. Use with `ReplaceChars`.
   *
   * @public
   */
  ReplaceInvalidChars?: string | undefined;

  /**
   * A value that specifies to replaces the invalid characters specified in `ReplaceInvalidChars`, substituting the specified characters instead. The default is `"?"`.
   *
   * @public
   */
  ReplaceChars?: string | undefined;

  /**
   * The name of the Amazon Redshift cluster you are using.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service. The role must allow the `iam:PassRole` action.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * The KMS key ID. If you are using `SSE_KMS` for the `EncryptionMode`, provide this key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.
   *
   * @public
   */
  ServerSideEncryptionKmsKeyId?: string | undefined;

  /**
   * The time format that you want to use. Valid values are `auto` (case-sensitive), `'timeformat_string'`, `'epochsecs'`, or `'epochmillisecs'`. It defaults to 10. Using `auto` recognizes most strings, even some that aren't supported when you use a time format string.
   *
   * If your date and time values use formats different from each other, set this parameter to `auto`.
   *
   * @public
   */
  TimeFormat?: string | undefined;

  /**
   * A value that specifies to remove the trailing white space characters from a VARCHAR string. This parameter applies only to columns with a VARCHAR data type. Choose `true` to remove unneeded white space. The default is `false`.
   *
   * @public
   */
  TrimBlanks?: boolean | undefined;

  /**
   * A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column. This parameter applies only to columns with a VARCHAR or CHAR data type, and rows with a size of 4 MB or less. Choose `true` to truncate data. The default is `false`.
   *
   * @public
   */
  TruncateColumns?: boolean | undefined;

  /**
   * An Amazon Redshift user name for a registered user.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB).
   *
   * @public
   */
  WriteBufferSize?: number | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the Amazon Web Services Secrets Manager secret that allows access to the Amazon Redshift endpoint.
   *
   * > **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both. For more information on creating this `SecretsManagerSecret` and the `SecretsManagerAccessRoleArn` and `SecretsManagerSecretId` required to access it, see [Using secrets to access Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * The full ARN, partial ARN, or friendly name of the `SecretsManagerSecret` that contains the Amazon Redshift endpoint connection details.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * When true, lets Redshift migrate the boolean type as boolean. By default, Redshift migrates booleans as `varchar(1)`. You must set this setting on both the source and target endpoints for it to take effect.
   *
   * @public
   */
  MapBooleanAsBoolean?: boolean | undefined;
}

/**
 * Settings for exporting data to Amazon S3.
 *
 * @public
 */
export interface S3Settings {
  /**
   * The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the `iam:PassRole` action. It is a required parameter that enables DMS to write and read objects from an S3 bucket.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * Specifies how tables are defined in the S3 source files only.
   *
   * @public
   */
  ExternalTableDefinition?: string | undefined;

  /**
   * The delimiter used to separate rows in the .csv file for both source and target. The default is a carriage return (`\n`).
   *
   * @public
   */
  CsvRowDelimiter?: string | undefined;

  /**
   * The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.
   *
   * @public
   */
  CsvDelimiter?: string | undefined;

  /**
   * An optional parameter to set a folder name in the S3 bucket. If provided, tables are created in the path `bucketFolder/schema_name/table_name/`. If this parameter isn't specified, then the path used is `schema_name/table_name/`.
   *
   * @public
   */
  BucketFolder?: string | undefined;

  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * An optional parameter to use GZIP to compress the target files. Set to GZIP to compress the target files. Either set this parameter to NONE (the default) or don't use it to leave the files uncompressed. This parameter applies to both .csv and .parquet file formats.
   *
   * @public
   */
  CompressionType?: CompressionTypeValue | undefined;

  /**
   * The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either `SSE_S3` (the default) or `SSE_KMS`.
   *
   * > **Note:** For the `ModifyEndpoint` operation, you can change the existing value of the `EncryptionMode` parameter from `SSE_KMS` to `SSE_S3`. But you can’t change the existing value from `SSE_S3` to `SSE_KMS`.
   *
   * To use `SSE_S3`, you need an Identity and Access Management (IAM) role with permission to allow `"arn:aws:s3:::dms-*"` to use the following actions:
   *
   * - `s3:CreateBucket`
   * - `s3:ListBucket`
   * - `s3:DeleteBucket`
   * - `s3:GetBucketLocation`
   * - `s3:GetObject`
   * - `s3:PutObject`
   * - `s3:DeleteObject`
   * - `s3:GetObjectVersion`
   * - `s3:GetBucketPolicy`
   * - `s3:PutBucketPolicy`
   * - `s3:DeleteBucketPolicy`
   *
   * @public
   */
  EncryptionMode?: EncryptionModeValue | undefined;

  /**
   * If you are using `SSE_KMS` for the `EncryptionMode`, provide the KMS key ID. The key that you use needs an attached policy that enables Identity and Access Management (IAM) user permissions and allows use of the key.
   *
   * Here is a CLI example: `aws dms create-endpoint --endpoint-identifier value --endpoint-type target --engine-name s3 --s3-settings ServiceAccessRoleArn=value,BucketFolder=value,BucketName=value,EncryptionMode=SSE_KMS,ServerSideEncryptionKmsKeyId=value`
   *
   * @public
   */
  ServerSideEncryptionKmsKeyId?: string | undefined;

  /**
   * The format of the data that you want to use for output. You can choose one of the following:
   *
   * - `csv` : This is a row-based file format with comma-separated values (.csv).
   * - `parquet` : Apache Parquet (.parquet) is a columnar storage file format that features efficient compression and provides faster query response.
   *
   * @public
   */
  DataFormat?: DataFormatValue | undefined;

  /**
   * The type of encoding you are using:
   *
   * - `RLE_DICTIONARY` uses a combination of bit-packing and run-length encoding to store repeated values more efficiently. This is the default.
   * - `PLAIN` doesn't use encoding at all. Values are stored as they are.
   * - `PLAIN_DICTIONARY` builds a dictionary of the values encountered in a given column. The dictionary is stored in a dictionary page for each column chunk.
   *
   * @public
   */
  EncodingType?: EncodingTypeValue | undefined;

  /**
   * The maximum size of an encoded dictionary page of a column. If the dictionary page exceeds this, this column is stored using an encoding type of `PLAIN`. This parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page before it reverts to `PLAIN` encoding. This size is used for .parquet file format only.
   *
   * @public
   */
  DictPageSizeLimit?: number | undefined;

  /**
   * The number of rows in a row group. A smaller row group size provides faster reads. But as the number of row groups grows, the slower writes become. This parameter defaults to 10,000 rows. This number is used for .parquet file format only.
   *
   * If you choose a value larger than the maximum, `RowGroupLength` is set to the max row group length in bytes (64 * 1024 * 1024).
   *
   * @public
   */
  RowGroupLength?: number | undefined;

  /**
   * The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only.
   *
   * @public
   */
  DataPageSize?: number | undefined;

  /**
   * The version of the Apache Parquet format that you want to use: `parquet_1_0` (the default) or `parquet_2_0`.
   *
   * @public
   */
  ParquetVersion?: ParquetVersionValue | undefined;

  /**
   * A value that enables statistics for Parquet pages and row groups. Choose `true` to enable statistics, `false` to disable. Statistics include `NULL`, `DISTINCT`, `MAX`, and `MIN` values. This parameter defaults to `true`. This value is used for .parquet file format only.
   *
   * @public
   */
  EnableStatistics?: boolean | undefined;

  /**
   * A value that enables a full load to write INSERT operations to the comma-separated value (.csv) or .parquet output files only to indicate how the rows were added to the source database.
   *
   * > **Note:**
   * >
   * > DMS supports the `IncludeOpForFullLoad` parameter in versions 3.1.4 and later.
   * >
   * > DMS supports the use of the .parquet files with the `IncludeOpForFullLoad` parameter in versions 3.4.7 and later.
   *
   * For full load, records can only be inserted. By default (the `false` setting), no information is recorded in these output files for a full load to indicate that the rows were inserted at the source database. If `IncludeOpForFullLoad` is set to `true` or `y`, the INSERT is recorded as an I annotation in the first field of the .csv file. This allows the format of your target records from a full load to be consistent with the target records from a CDC load.
   *
   * > **Note:** This setting works together with the `CdcInsertsOnly` and the `CdcInsertsAndUpdates` parameters for output to .csv files only. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *Database Migration Service User Guide.*.
   *
   * @public
   */
  IncludeOpForFullLoad?: boolean | undefined;

  /**
   * A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the `false` setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.
   *
   * If `CdcInsertsOnly` is set to `true` or `y`, only INSERTs from the source database are migrated to the .csv or .parquet file. For .csv format only, how these INSERTs are recorded depends on the value of `IncludeOpForFullLoad`. If `IncludeOpForFullLoad` is set to `true`, the first field of every CDC record is set to I to indicate the INSERT operation at the source. If `IncludeOpForFullLoad` is set to `false`, every CDC record is written without a first field to indicate the INSERT operation at the source. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *Database Migration Service User Guide.*.
   *
   * > **Note:**
   * >
   * > DMS supports the interaction described preceding between the `CdcInsertsOnly` and `IncludeOpForFullLoad` parameters in versions 3.1.4 and later.
   * >
   * > `CdcInsertsOnly` and `CdcInsertsAndUpdates` can't both be set to `true` for the same endpoint. Set either `CdcInsertsOnly` or `CdcInsertsAndUpdates` to `true` for the same endpoint, but not both.
   *
   * @public
   */
  CdcInsertsOnly?: boolean | undefined;

  /**
   * A value that when nonblank causes DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.
   *
   * > **Note:** DMS supports the `TimestampColumnName` parameter in versions 3.1.4 and later.
   *
   * DMS includes an additional `STRING` column in the .csv or .parquet object files of your migrated data when you set `TimestampColumnName` to a nonblank value.
   *
   * For a full load, each row of this timestamp column contains a timestamp for when the data was transferred from the source to the target by DMS.
   *
   * For a change data capture (CDC) load, each row of the timestamp column contains the timestamp for the commit of that row in the source database.
   *
   * The string format for this timestamp column value is `yyyy-MM-dd HH:mm:ss.SSSSSS`. By default, the precision of this value is in microseconds. For a CDC load, the rounding of the precision depends on the commit timestamp supported by DMS for the source database.
   *
   * When the `AddColumnName` parameter is set to `true`, DMS also includes a name for the timestamp column that you set with `TimestampColumnName`.
   *
   * @public
   */
  TimestampColumnName?: string | undefined;

  /**
   * A value that specifies the precision of any `TIMESTAMP` column values that are written to an Amazon S3 object file in .parquet format.
   *
   * > **Note:** DMS supports the `ParquetTimestampInMillisecond` parameter in versions 3.1.4 and later.
   *
   * When `ParquetTimestampInMillisecond` is set to `true` or `y`, DMS writes all `TIMESTAMP` columns in a .parquet formatted file with millisecond precision. Otherwise, DMS writes them with microsecond precision.
   *
   * Currently, Amazon Athena and Glue can handle only millisecond precision for `TIMESTAMP` values. Set this parameter to `true` for S3 endpoint object files that are .parquet formatted only if you plan to query or process the data with Athena or Glue.
   *
   * > **Note:**
   * >
   * > DMS writes any `TIMESTAMP` column values written to an S3 file in .csv format with microsecond precision.
   * >
   * > Setting `ParquetTimestampInMillisecond` has no effect on the string format of the timestamp column value that is inserted by setting the `TimestampColumnName` parameter.
   *
   * @public
   */
  ParquetTimestampInMillisecond?: boolean | undefined;

  /**
   * A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. The default setting is `false`, but when `CdcInsertsAndUpdates` is set to `true` or `y`, only INSERTs and UPDATEs from the source database are migrated to the .csv or .parquet file.
   *
   * > **Important:** DMS supports the use of the .parquet files in versions 3.4.7 and later.
   *
   * How these INSERTs and UPDATEs are recorded depends on the value of the `IncludeOpForFullLoad` parameter. If `IncludeOpForFullLoad` is set to `true`, the first field of every CDC record is set to either `I` or `U` to indicate INSERT and UPDATE operations at the source. But if `IncludeOpForFullLoad` is set to `false`, CDC records are written without an indication of INSERT or UPDATE operations at the source. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *Database Migration Service User Guide.*.
   *
   * > **Note:**
   * >
   * > DMS supports the use of the `CdcInsertsAndUpdates` parameter in versions 3.3.1 and later.
   * >
   * > `CdcInsertsOnly` and `CdcInsertsAndUpdates` can't both be set to `true` for the same endpoint. Set either `CdcInsertsOnly` or `CdcInsertsAndUpdates` to `true` for the same endpoint, but not both.
   *
   * @public
   */
  CdcInsertsAndUpdates?: boolean | undefined;

  /**
   * When set to `true`, this parameter partitions S3 bucket folders based on transaction commit dates. The default value is `false`. For more information about date-based folder partitioning, see [Using date-based folder partitioning](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.DatePartitioning).
   *
   * @public
   */
  DatePartitionEnabled?: boolean | undefined;

  /**
   * Identifies the sequence of the date format to use during folder partitioning. The default value is `YYYYMMDD`. Use this parameter when `DatePartitionedEnabled` is set to `true`.
   *
   * @public
   */
  DatePartitionSequence?: DatePartitionSequenceValue | undefined;

  /**
   * Specifies a date separating delimiter to use during folder partitioning. The default value is `SLASH`. Use this parameter when `DatePartitionedEnabled` is set to `true`.
   *
   * @public
   */
  DatePartitionDelimiter?: DatePartitionDelimiterValue | undefined;

  /**
   * This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If set to `true` for columns not included in the supplemental log, DMS uses the value specified by [`CsvNoSupValue`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CsvNoSupValue). If not set or set to `false`, DMS uses the null value for these columns.
   *
   * > **Note:** This setting is supported in DMS versions 3.4.1 and later.
   *
   * @public
   */
  UseCsvNoSupValue?: boolean | undefined;

  /**
   * This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format. If [`UseCsvNoSupValue`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-UseCsvNoSupValue) is set to true, specify a string value that you want DMS to use for all columns not included in the supplemental log. If you do not specify a string value, DMS uses the null value for these columns regardless of the `UseCsvNoSupValue` setting.
   *
   * > **Note:** This setting is supported in DMS versions 3.4.1 and later.
   *
   * @public
   */
  CsvNoSupValue?: string | undefined;

  /**
   * If set to `true`, DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by [`CdcPath`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CdcPath). For more information, see [Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath).
   *
   * > **Note:** This setting is supported in DMS versions 3.4.2 and later.
   *
   * @public
   */
  PreserveTransactions?: boolean | undefined;

  /**
   * Specifies the folder path of CDC files. For an S3 source, this setting is required if a task captures change data; otherwise, it's optional. If `CdcPath` is set, DMS reads CDC files from this path and replicates the data changes to the target endpoint. For an S3 target if you set [`PreserveTransactions`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-PreserveTransactions) to `true`, DMS verifies that you have set this parameter to a folder path on your S3 target where DMS can save the transaction order for the CDC load. DMS creates this CDC folder path in either your S3 target working directory or the S3 target location specified by [`BucketFolder`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketFolder) and [`BucketName`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketName).
   *
   * For example, if you specify `CdcPath` as `MyChangedData`, and you specify `BucketName` as `MyTargetBucket` but do not specify `BucketFolder`, DMS creates the CDC folder path following: `MyTargetBucket/MyChangedData`.
   *
   * If you specify the same `CdcPath`, and you specify `BucketName` as `MyTargetBucket` and `BucketFolder` as `MyTargetData`, DMS creates the CDC folder path following: `MyTargetBucket/MyTargetData/MyChangedData`.
   *
   * For more information on CDC including transaction order on an S3 target, see [Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath).
   *
   * > **Note:** This setting is supported in DMS versions 3.4.2 and later.
   *
   * @public
   */
  CdcPath?: string | undefined;

  /**
   * When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target. For full load, when `useTaskStartTimeForFullLoadTimestamp` is set to `true`, each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time.
   *
   * When `useTaskStartTimeForFullLoadTimestamp` is set to `false`, the full load timestamp in the timestamp column increments with the time data arrives at the target.
   *
   * @public
   */
  UseTaskStartTimeForFullLoadTimestamp?: boolean | undefined;

  /**
   * A value that enables DMS to specify a predefined (canned) access control list for objects created in an Amazon S3 bucket as .csv or .parquet files. For more information about Amazon S3 canned ACLs, see [Canned ACL](http://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 Developer Guide.*
   *
   * The default value is NONE. Valid values include NONE, PRIVATE, PUBLIC_READ, PUBLIC_READ_WRITE, AUTHENTICATED_READ, AWS_EXEC_READ, BUCKET_OWNER_READ, and BUCKET_OWNER_FULL_CONTROL.
   *
   * @public
   */
  CannedAclForObjects?: CannedAclForObjectsValue | undefined;

  /**
   * An optional parameter that, when set to `true` or `y`, you can use to add column name information to the .csv output file.
   *
   * The default value is `false`. Valid values are `true`, `false`, `y`, and `n`.
   *
   * @public
   */
  AddColumnName?: boolean | undefined;

  /**
   * Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.
   *
   * When `CdcMaxBatchInterval` and `CdcMinFileSize` are both specified, the file write is triggered by whichever parameter condition is met first within an DMS CloudFormation template.
   *
   * The default value is 60 seconds.
   *
   * @public
   */
  CdcMaxBatchInterval?: number | undefined;

  /**
   * Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.
   *
   * When `CdcMinFileSize` and `CdcMaxBatchInterval` are both specified, the file write is triggered by whichever parameter condition is met first within an DMS CloudFormation template.
   *
   * The default value is 32 MB.
   *
   * @public
   */
  CdcMinFileSize?: number | undefined;

  /**
   * An optional parameter that specifies how DMS treats null values. While handling the null value, you can use this parameter to pass a user-defined string as null when writing to the target. For example, when target columns are nullable, you can use this option to differentiate between the empty string value and the null value. So, if you set this parameter value to the empty string ("" or ''), DMS treats the empty string as the null value instead of `NULL`.
   *
   * The default value is `NULL`. Valid values include any valid string.
   *
   * @public
   */
  CsvNullValue?: string | undefined;

  /**
   * When this value is set to 1, DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.
   *
   * The default is 0.
   *
   * @public
   */
  IgnoreHeaderRows?: number | undefined;

  /**
   * A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.
   *
   * The default value is 1,048,576 KB (1 GB). Valid values include 1 to 1,048,576.
   *
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * For an S3 source, when this value is set to `true` or `y`, each leading double quotation mark has to be followed by an ending double quotation mark. This formatting complies with RFC 4180. When this value is set to `false` or `n`, string literals are copied to the target as is. In this case, a delimiter (row or column) signals the end of the field. Thus, you can't use a delimiter as part of the string, because it signals the end of the value.
   *
   * For an S3 target, an optional parameter used to set behavior to comply with RFC 4180 for data migrated to Amazon S3 using .csv file format only. When this value is set to `true` or `y` using Amazon S3 as a target, if the data has quotation marks or newline characters in it, DMS encloses the entire column with an additional pair of double quotation marks ("). Every quotation mark within the data is repeated twice.
   *
   * The default value is `true`. Valid values include `true`, `false`, `y`, and `n`.
   *
   * @public
   */
  Rfc4180?: boolean | undefined;

  /**
   * When creating an S3 target endpoint, set `DatePartitionTimezone` to convert the current UTC time into a specified time zone. The conversion occurs when a date partition folder is created and a CDC filename is generated. The time zone format is Area/Location. Use this parameter when `DatePartitionedEnabled` is set to true, as shown in the following example:
   *
   * `s3-settings='\{"DatePartitionEnabled": true, "DatePartitionSequence": "YYYYMMDDHH", "DatePartitionDelimiter": "SLASH", "DatePartitionTimezone":"Asia/Seoul", "BucketName": "dms-nattarat-test"\}'`
   *
   * @public
   */
  DatePartitionTimezone?: string | undefined;

  /**
   * Use the S3 target endpoint setting `AddTrailingPaddingCharacter` to add padding on string data. The default value is `false`.
   *
   * @public
   */
  AddTrailingPaddingCharacter?: boolean | undefined;

  /**
   * To specify a bucket owner and prevent sniping, you can use the `ExpectedBucketOwner` endpoint setting.
   *
   * Example: `--s3-settings='\{"ExpectedBucketOwner": "AWS_Account_ID"\}'`
   *
   * When you make a request to test a connection or perform a migration, S3 checks the account ID of the bucket owner against the specified parameter.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * When true, allows Glue to catalog your S3 bucket. Creating an Glue catalog lets you use Athena to query your data.
   *
   * @public
   */
  GlueCatalogGeneration?: boolean | undefined;
}

/**
 * Provides information that defines a SAP ASE endpoint.
 *
 * @public
 */
export interface SybaseSettings {
  /**
   * Database name for the endpoint.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Endpoint connection password.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * Endpoint TCP port. The default is 5000.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Fully qualified domain name of the endpoint.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * Endpoint connection user name.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the Amazon Web Services Secrets Manager secret that allows access to the SAP ASE endpoint.
   *
   * > **Note:** You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both. For more information on creating this `SecretsManagerSecret` and the `SecretsManagerAccessRoleArn` and `SecretsManagerSecretId` required to access it, see [Using secrets to access Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * The full ARN, partial ARN, or friendly name of the `SecretsManagerSecret` that contains the SAP SAE endpoint connection details.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;
}

/**
 * Provides information that defines an Amazon Timestream endpoint.
 *
 * @public
 */
export interface TimestreamSettings {
  /**
   * Database name for the endpoint.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * Set this attribute to specify the length of time to store all of the tables in memory that are migrated into Amazon Timestream from the source database. Time is measured in units of hours. When Timestream data comes in, it first resides in memory for the specified duration, which allows quick access to it.
   *
   * @public
   */
  MemoryDuration: number | undefined;

  /**
   * Set this attribute to specify the default magnetic duration applied to the Amazon Timestream tables in days. This is the number of days that records remain in magnetic store before being discarded. For more information, see [Storage](https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html) in the [Amazon Timestream Developer Guide](https://docs.aws.amazon.com/timestream/latest/developerguide/).
   *
   * @public
   */
  MagneticDuration: number | undefined;

  /**
   * Set this attribute to `true` to specify that DMS only applies inserts and updates, and not deletes. Amazon Timestream does not allow deleting records, so if this value is `false`, DMS nulls out the corresponding record in the Timestream database rather than deleting it.
   *
   * @public
   */
  CdcInsertsAndUpdates?: boolean | undefined;

  /**
   * Set this attribute to `true` to enable memory store writes. When this value is `false`, DMS does not write records that are older in days than the value specified in `MagneticDuration`, because Amazon Timestream does not allow memory writes by default. For more information, see [Storage](https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html) in the [Amazon Timestream Developer Guide](https://docs.aws.amazon.com/timestream/latest/developerguide/).
   *
   * @public
   */
  EnableMagneticStoreWrites?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateEndpointMessage {
  /**
   * The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
   *
   * @public
   */
  EndpointIdentifier: string | undefined;

  /**
   * The type of endpoint. Valid values are `source` and `target`.
   *
   * @public
   */
  EndpointType: ReplicationEndpointTypeValue | undefined;

  /**
   * The type of engine for the endpoint. Valid values, depending on the `EndpointType` value, include `"mysql"`, `"oracle"`, `"postgres"`, `"mariadb"`, `"aurora"`, `"aurora-postgresql"`, `"opensearch"`, `"redshift"`, `"s3"`, `"db2"`, `"db2-zos"`, `"azuredb"`, `"sybase"`, `"dynamodb"`, `"mongodb"`, `"kinesis"`, `"kafka"`, `"elasticsearch"`, `"docdb"`, `"sqlserver"`, `"neptune"`, `"babelfish"`, `redshift-serverless`, `aurora-serverless`, `aurora-postgresql-serverless`, `gcp-mysql`, `azure-sql-managed-instance`, `redis`, `dms-transfer`.
   *
   * @public
   */
  EngineName: string | undefined;

  /**
   * The user name to be used to log in to the endpoint database.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The password to be used to log in to the endpoint database.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The name of the server where the endpoint database resides.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port used by the endpoint database.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName. To migrate to a specific database, use this setting and `targetDbType`.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Additional attributes associated with the connection. Each attribute is specified as a name-value pair associated by an equal sign (=). Multiple attributes are separated by a semicolon (;) with no additional white space. For information on the attributes available for connecting your source or target endpoint, see [Working with DMS Endpoints](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Endpoints.html) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  ExtraConnectionAttributes?: string | undefined;

  /**
   * An KMS key identifier that is used to encrypt the connection parameters for the endpoint.
   *
   * If you don't specify a value for the `KmsKeyId` parameter, then DMS uses your default encryption key.
   *
   * KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * One or more tags to be assigned to the endpoint.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is `none`
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) for the service access role that you want to use to create the endpoint. The role must allow the `iam:PassRole` action.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * The external table definition.
   *
   * @public
   */
  ExternalTableDefinition?: string | undefined;

  /**
   * Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see [Using Object Mapping to Migrate Data to DynamoDB](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  DynamoDbSettings?: DynamoDbSettings | undefined;

  /**
   * Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see [Extra Connection Attributes When Using Amazon S3 as a Target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  S3Settings?: S3Settings | undefined;

  /**
   * The settings in JSON format for the DMS transfer type of source endpoint.
   *
   * Possible settings include the following:
   *
   * - `ServiceAccessRoleArn` - The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the `iam:PassRole` action.
   * - `BucketName` - The name of the S3 bucket to use.
   *
   * Shorthand syntax for these settings is as follows: `ServiceAccessRoleArn=string,BucketName=string`
   *
   * JSON syntax for these settings is as follows: `\{ "ServiceAccessRoleArn": "string", "BucketName": "string", \}`
   *
   * @public
   */
  DmsTransferSettings?: DmsTransferSettings | undefined;

  /**
   * Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see [Endpoint configuration settings when using MongoDB as a source for Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  MongoDbSettings?: MongoDbSettings | undefined;

  /**
   * Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see [Using object mapping to migrate data to a Kinesis data stream](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  KinesisSettings?: KinesisSettings | undefined;

  /**
   * Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see [Using object mapping to migrate data to a Kafka topic](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  KafkaSettings?: KafkaSettings | undefined;

  /**
   * Settings in JSON format for the target OpenSearch endpoint. For more information about the available settings, see [Extra Connection Attributes When Using OpenSearch as a Target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration) in the *Database Migration Service User Guide*.
   *
   * @public
   */
  ElasticsearchSettings?: ElasticsearchSettings | undefined;

  /**
   * Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see [Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  NeptuneSettings?: NeptuneSettings | undefined;

  /**
   * Provides information that defines an Amazon Redshift endpoint.
   *
   * @public
   */
  RedshiftSettings?: RedshiftSettings | undefined;

  /**
   * Settings in JSON format for the source and target PostgreSQL endpoint. For information about other available settings, see [Extra connection attributes when using PostgreSQL as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib) and [Extra connection attributes when using PostgreSQL as a target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  PostgreSQLSettings?: PostgreSQLSettings | undefined;

  /**
   * Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see [Extra connection attributes when using MySQL as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib) and [Extra connection attributes when using a MySQL-compatible database as a target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  MySQLSettings?: MySQLSettings | undefined;

  /**
   * Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see [Extra connection attributes when using Oracle as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib) and [Extra connection attributes when using Oracle as a target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  OracleSettings?: OracleSettings | undefined;

  /**
   * Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see [Extra connection attributes when using SAP ASE as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib) and [Extra connection attributes when using SAP ASE as a target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  SybaseSettings?: SybaseSettings | undefined;

  /**
   * Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see [Extra connection attributes when using SQL Server as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib) and [Extra connection attributes when using SQL Server as a target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings | undefined;

  /**
   * Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see [Extra connection attributes when using Db2 LUW as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  IBMDb2Settings?: IBMDb2Settings | undefined;

  /**
   * A friendly name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1`. For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1`. If you don't specify a `ResourceIdentifier` value, DMS generates a default identifier value for the end of `EndpointArn`.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * Provides information that defines a DocumentDB endpoint.
   *
   * @public
   */
  DocDbSettings?: DocDbSettings | undefined;

  /**
   * Settings in JSON format for the target Redis endpoint.
   *
   * @public
   */
  RedisSettings?: RedisSettings | undefined;

  /**
   * Settings in JSON format for the source GCP MySQL endpoint.
   *
   * @public
   */
  GcpMySQLSettings?: GcpMySQLSettings | undefined;

  /**
   * Settings in JSON format for the target Amazon Timestream endpoint.
   *
   * @public
   */
  TimestreamSettings?: TimestreamSettings | undefined;
}

/**
 * Provides information that defines a Lakehouse endpoint. This endpoint type is used for zero-ETL integrations with Lakehouse data warehouses.
 *
 * @public
 */
export interface LakehouseSettings {
  /**
   * The Amazon Resource Name (ARN) of the Lakehouse resource that serves as the target for this endpoint.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * Describes an endpoint of a database instance in response to operations such as the following:
 *
 * - `CreateEndpoint`
 * - `DescribeEndpoint`
 * - `ModifyEndpoint`
 *
 * @public
 */
export interface Endpoint {
  /**
   * The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  EndpointIdentifier?: string | undefined;

  /**
   * The type of endpoint. Valid values are `source` and `target`.
   *
   * @public
   */
  EndpointType?: ReplicationEndpointTypeValue | undefined;

  /**
   * The database engine name. Valid values, depending on the EndpointType, include `"mysql"`, `"oracle"`, `"postgres"`, `"mariadb"`, `"aurora"`, `"aurora-postgresql"`, `"redshift"`, `"redshift-serverless"`, `"s3"`, `"db2"`, `"db2-zos"`, `"azuredb"`, `"sybase"`, `"dynamodb"`, `"mongodb"`, `"kinesis"`, `"kafka"`, `"elasticsearch"`, `"documentdb"`, `"sqlserver"`, `"neptune"`, and `"babelfish"`.
   *
   * @public
   */
  EngineName?: string | undefined;

  /**
   * The expanded name for the engine name. For example, if the `EngineName` parameter is "aurora", this value would be "Amazon Aurora MySQL".
   *
   * @public
   */
  EngineDisplayName?: string | undefined;

  /**
   * The user name used to connect to the endpoint.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The name of the server at the endpoint.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port value used to access the endpoint.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the database at the endpoint.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Additional connection attributes used to connect to the endpoint.
   *
   * @public
   */
  ExtraConnectionAttributes?: string | undefined;

  /**
   * The status of the endpoint.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * An KMS key identifier that is used to encrypt the connection parameters for the endpoint.
   *
   * If you don't specify a value for the `KmsKeyId` parameter, then DMS uses your default encryption key.
   *
   * KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
   *
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) used for SSL connection to the endpoint.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The SSL mode used to connect to the endpoint. The default value is `none`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the `iam:PassRole` action.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * The external table definition.
   *
   * @public
   */
  ExternalTableDefinition?: string | undefined;

  /**
   * Value returned by a call to CreateEndpoint that can be used for cross-account validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a cross-account.
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * Indicates whether the endpoint is read-only. When set to `true`, this endpoint is managed by DMS as part of a zero-ETL integration and cannot be modified or deleted directly. You can only modify or delete read-only endpoints through their associated zero-ETL integration.
   *
   * @public
   */
  IsReadOnly?: boolean | undefined;

  /**
   * The settings for the DynamoDB target endpoint. For more information, see the `DynamoDBSettings` structure.
   *
   * @public
   */
  DynamoDbSettings?: DynamoDbSettings | undefined;

  /**
   * The settings for the S3 target endpoint. For more information, see the `S3Settings` structure.
   *
   * @public
   */
  S3Settings?: S3Settings | undefined;

  /**
   * The settings for the DMS Transfer type source. For more information, see the DmsTransferSettings structure.
   *
   * @public
   */
  DmsTransferSettings?: DmsTransferSettings | undefined;

  /**
   * The settings for the MongoDB source endpoint. For more information, see the `MongoDbSettings` structure.
   *
   * @public
   */
  MongoDbSettings?: MongoDbSettings | undefined;

  /**
   * The settings for the Amazon Kinesis target endpoint. For more information, see the `KinesisSettings` structure.
   *
   * @public
   */
  KinesisSettings?: KinesisSettings | undefined;

  /**
   * The settings for the Apache Kafka target endpoint. For more information, see the `KafkaSettings` structure.
   *
   * @public
   */
  KafkaSettings?: KafkaSettings | undefined;

  /**
   * The settings for the OpenSearch source endpoint. For more information, see the `ElasticsearchSettings` structure.
   *
   * @public
   */
  ElasticsearchSettings?: ElasticsearchSettings | undefined;

  /**
   * The settings for the Amazon Neptune target endpoint. For more information, see the `NeptuneSettings` structure.
   *
   * @public
   */
  NeptuneSettings?: NeptuneSettings | undefined;

  /**
   * Settings for the Amazon Redshift endpoint.
   *
   * @public
   */
  RedshiftSettings?: RedshiftSettings | undefined;

  /**
   * The settings for the PostgreSQL source and target endpoint. For more information, see the `PostgreSQLSettings` structure.
   *
   * @public
   */
  PostgreSQLSettings?: PostgreSQLSettings | undefined;

  /**
   * The settings for the MySQL source and target endpoint. For more information, see the `MySQLSettings` structure.
   *
   * @public
   */
  MySQLSettings?: MySQLSettings | undefined;

  /**
   * The settings for the Oracle source and target endpoint. For more information, see the `OracleSettings` structure.
   *
   * @public
   */
  OracleSettings?: OracleSettings | undefined;

  /**
   * The settings for the SAP ASE source and target endpoint. For more information, see the `SybaseSettings` structure.
   *
   * @public
   */
  SybaseSettings?: SybaseSettings | undefined;

  /**
   * The settings for the Microsoft SQL Server source and target endpoint. For more information, see the `MicrosoftSQLServerSettings` structure.
   *
   * @public
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings | undefined;

  /**
   * The settings for the IBM Db2 LUW source endpoint. For more information, see the `IBMDb2Settings` structure.
   *
   * @public
   */
  IBMDb2Settings?: IBMDb2Settings | undefined;

  /**
   * Provides information that defines a DocumentDB endpoint.
   *
   * @public
   */
  DocDbSettings?: DocDbSettings | undefined;

  /**
   * The settings for the Redis target endpoint. For more information, see the `RedisSettings` structure.
   *
   * @public
   */
  RedisSettings?: RedisSettings | undefined;

  /**
   * Settings in JSON format for the source GCP MySQL endpoint.
   *
   * @public
   */
  GcpMySQLSettings?: GcpMySQLSettings | undefined;

  /**
   * The settings for the Amazon Timestream target endpoint. For more information, see the `TimestreamSettings` structure.
   *
   * @public
   */
  TimestreamSettings?: TimestreamSettings | undefined;

  /**
   * Settings in JSON format for the target Lakehouse endpoint. This parameter applies to endpoints that are automatically created by DMS for a Lakehouse data warehouse as part of a zero-ETL integration.
   *
   * @public
   */
  LakehouseSettings?: LakehouseSettings | undefined;
}

/**
 * @public
 */
export interface CreateEndpointResponse {
  /**
   * The endpoint that was created.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;
}

/**
 * @public
 */
export interface CreateEventSubscriptionMessage {
  /**
   * The name of the DMS event notification subscription. This name must be less than 255 characters.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
   *
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * The type of DMS resource that generates the events. For example, if you want to be notified of events generated by a replication instance, you set this parameter to `replication-instance`. If this value isn't specified, all events are returned.
   *
   * Valid values: `replication-instance` | `replication-task`
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of event categories for a source type that you want to subscribe to. For more information, see [Working with Events and Notifications](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * A list of identifiers for which DMS provides notification events.
   *
   * If you don't specify a value, notifications are provided for all sources.
   *
   * If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.
   *
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * A Boolean value; set to `true` to activate the subscription, or set to `false` to create the subscription but not activate it.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * One or more tags to be assigned to the event subscription.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes an event notification subscription created by the `CreateEventSubscription` operation.
 *
 * @public
 */
export interface EventSubscription {
  /**
   * The Amazon Web Services customer account associated with the DMS event notification subscription.
   *
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * The DMS event notification subscription Id.
   *
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * The topic ARN of the DMS event notification subscription.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The status of the DMS event notification subscription.
   *
   * Constraints:
   *
   * Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist
   *
   * The status "no-permission" indicates that DMS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The time the DMS event notification subscription was created.
   *
   * @public
   */
  SubscriptionCreationTime?: string | undefined;

  /**
   * The type of DMS resource that generates events.
   *
   * Valid values: replication-instance | replication-server | security-group | replication-task
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of source Ids for the event subscription.
   *
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * A lists of event categories.
   *
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * Boolean value that indicates if the event subscription is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateEventSubscriptionResponse {
  /**
   * The event subscription that was created.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface CreateFleetAdvisorCollectorRequest {
  /**
   * The name of your Fleet Advisor collector (for example, `sample-collector`).
   *
   * @public
   */
  CollectorName: string | undefined;

  /**
   * A summary description of your Fleet Advisor collector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IAM role that grants permissions to access the specified Amazon S3 bucket.
   *
   * @public
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata.
   *
   * @public
   */
  S3BucketName: string | undefined;
}

/**
 * @public
 */
export interface CreateFleetAdvisorCollectorResponse {
  /**
   * The unique ID of the new Fleet Advisor collector, for example: `22fda70c-40d5-4acf-b233-a495bd8eb7f5`
   *
   * @public
   */
  CollectorReferencedId?: string | undefined;

  /**
   * The name of the new Fleet Advisor collector.
   *
   * @public
   */
  CollectorName?: string | undefined;

  /**
   * A summary description of the Fleet Advisor collector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IAM role that grants permissions to access the specified Amazon S3 bucket.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * The Amazon S3 bucket that the collector uses to store inventory metadata.
   *
   * @public
   */
  S3BucketName?: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceProfileMessage {
  /**
   * The Availability Zone where the instance profile will be created. The default value is a random, system-chosen Availability Zone in the Amazon Web Services Region where your data provider is created, for examplem `us-east-1d`.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that is used to encrypt the connection parameters for the instance profile.
   *
   * If you don't specify a value for the `KmsKeyArn` parameter, then DMS uses an Amazon Web Services owned encryption key to encrypt your resources.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * Specifies the accessibility options for the instance profile. A value of `true` represents an instance profile with a public IP address. A value of `false` represents an instance profile with a private IP address. The default value is `true`.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * One or more tags to be assigned to the instance profile.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the network type for the instance profile. A value of `IPV4` represents an instance profile with IPv4 network type and only supports IPv4 addressing. A value of `IPV6` represents an instance profile with IPv6 network type and only supports IPv6 addressing. A value of `DUAL` represents an instance profile with dual network type that supports IPv4 and IPv6 addressing.
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * A user-friendly name for the instance profile.
   *
   * @public
   */
  InstanceProfileName?: string | undefined;

  /**
   * A user-friendly description of the instance profile.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A subnet group to associate with the instance profile.
   *
   * @public
   */
  SubnetGroupIdentifier?: string | undefined;

  /**
   * Specifies the VPC security group names to be used with the instance profile. The VPC security group must work with the VPC containing the instance profile.
   *
   * @public
   */
  VpcSecurityGroups?: string[] | undefined;
}

/**
 * Provides information that defines an instance profile.
 *
 * @public
 */
export interface InstanceProfile {
  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the instance profile.
   *
   * @public
   */
  InstanceProfileArn?: string | undefined;

  /**
   * The Availability Zone where the instance profile runs.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that is used to encrypt the connection parameters for the instance profile.
   *
   * If you don't specify a value for the `KmsKeyArn` parameter, then DMS uses an Amazon Web Services owned encryption key to encrypt your resources.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * Specifies the accessibility options for the instance profile. A value of `true` represents an instance profile with a public IP address. A value of `false` represents an instance profile with a private IP address. The default value is `true`.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * Specifies the network type for the instance profile. A value of `IPV4` represents an instance profile with IPv4 network type and only supports IPv4 addressing. A value of `IPV6` represents an instance profile with IPv6 network type and only supports IPv6 addressing. A value of `DUAL` represents an instance profile with dual network type that supports IPv4 and IPv6 addressing.
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * The user-friendly name for the instance profile.
   *
   * @public
   */
  InstanceProfileName?: string | undefined;

  /**
   * A description of the instance profile. Descriptions can have up to 31 characters. A description can contain only ASCII letters, digits, and hyphens ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The time the instance profile was created.
   *
   * @public
   */
  InstanceProfileCreationTime?: Date | undefined;

  /**
   * The identifier of the subnet group that is associated with the instance profile.
   *
   * @public
   */
  SubnetGroupIdentifier?: string | undefined;

  /**
   * The VPC security groups that are used with the instance profile. The VPC security group must work with the VPC containing the instance profile.
   *
   * @public
   */
  VpcSecurityGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceProfileResponse {
  /**
   * The instance profile that was created.
   *
   * @public
   */
  InstanceProfile?: InstanceProfile | undefined;
}

/**
 * Provides information that defines a schema conversion application.
 *
 * @public
 */
export interface SCApplicationAttributes {
  /**
   * The path for the Amazon S3 bucket that the application uses for exporting assessment reports.
   *
   * @public
   */
  S3BucketPath?: string | undefined;

  /**
   * The ARN for the role the application uses to access its Amazon S3 bucket.
   *
   * @public
   */
  S3BucketRoleArn?: string | undefined;
}

/**
 * Information about a data provider.
 *
 * @public
 */
export interface DataProviderDescriptorDefinition {
  /**
   * The name or Amazon Resource Name (ARN) of the data provider.
   *
   * @public
   */
  DataProviderIdentifier: string | undefined;

  /**
   * The identifier of the Amazon Web Services Secrets Manager Secret used to store access credentials for the data provider.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * The ARN of the role used to access Amazon Web Services Secrets Manager.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMigrationProjectMessage {
  /**
   * A user-friendly name for the migration project.
   *
   * @public
   */
  MigrationProjectName?: string | undefined;

  /**
   * Information about the source data provider, including the name, ARN, and Secrets Manager parameters.
   *
   * @public
   */
  SourceDataProviderDescriptors: DataProviderDescriptorDefinition[] | undefined;

  /**
   * Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.
   *
   * @public
   */
  TargetDataProviderDescriptors: DataProviderDescriptorDefinition[] | undefined;

  /**
   * The identifier of the associated instance profile. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
   *
   * @public
   */
  InstanceProfileIdentifier: string | undefined;

  /**
   * A JSON string that specifies the transformation rules for the migration project. Transformation rules let you customize how DMS Schema Conversion converts your source database objects, including renaming, adding prefixes or suffixes, and changing data types. For the transformation rule format and examples, see [Transformation rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-transformation-rules.html).
   *
   * > **Note:** Homogeneous data migrations do not support transformation rules.
   *
   * @public
   */
  TransformationRules?: string | undefined;

  /**
   * A user-friendly description of the migration project.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * One or more tags to be assigned to the migration project.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.
   *
   * @public
   */
  SchemaConversionApplicationAttributes?: SCApplicationAttributes | undefined;
}

/**
 * Information about a data provider.
 *
 * @public
 */
export interface DataProviderDescriptor {
  /**
   * The identifier of the Amazon Web Services Secrets Manager Secret used to store access credentials for the data provider.
   *
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * The ARN of the role used to access Amazon Web Services Secrets Manager.
   *
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * The user-friendly name of the data provider.
   *
   * @public
   */
  DataProviderName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data provider.
   *
   * @public
   */
  DataProviderArn?: string | undefined;
}

/**
 * Provides information that defines a migration project.
 *
 * @public
 */
export interface MigrationProject {
  /**
   * The name of the migration project.
   *
   * @public
   */
  MigrationProjectName?: string | undefined;

  /**
   * The ARN string that uniquely identifies the migration project.
   *
   * @public
   */
  MigrationProjectArn?: string | undefined;

  /**
   * The time when the migration project was created.
   *
   * @public
   */
  MigrationProjectCreationTime?: Date | undefined;

  /**
   * Information about the source data provider, including the name or ARN, and Secrets Manager parameters.
   *
   * @public
   */
  SourceDataProviderDescriptors?: DataProviderDescriptor[] | undefined;

  /**
   * Information about the target data provider, including the name or ARN, and Secrets Manager parameters.
   *
   * @public
   */
  TargetDataProviderDescriptors?: DataProviderDescriptor[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance profile for your migration project.
   *
   * @public
   */
  InstanceProfileArn?: string | undefined;

  /**
   * The name of the associated instance profile.
   *
   * @public
   */
  InstanceProfileName?: string | undefined;

  /**
   * The transformation rules for the migration project in JSON format. Transformation rules let you customize how DMS Schema Conversion converts your source database objects, including renaming, adding prefixes or suffixes, and changing data types. For the transformation rule format and examples, see [Transformation rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-transformation-rules.html).
   *
   * > **Note:** Homogeneous data migrations do not support transformation rules.
   *
   * @public
   */
  TransformationRules?: string | undefined;

  /**
   * A user-friendly description of the migration project.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.
   *
   * @public
   */
  SchemaConversionApplicationAttributes?: SCApplicationAttributes | undefined;
}

/**
 * @public
 */
export interface CreateMigrationProjectResponse {
  /**
   * The migration project that was created.
   *
   * @public
   */
  MigrationProject?: MigrationProject | undefined;
}

/**
 * Configuration parameters for provisioning an DMS Serverless replication.
 *
 * @public
 */
export interface ComputeConfig {
  /**
   * The Availability Zone where the DMS Serverless replication using this configuration will run. The default value is a random, system-chosen Availability Zone in the configuration's Amazon Web Services Region, for example, `"us-west-2"`. You can't set this parameter if the `MultiAZ` parameter is set to `true`.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * A list of custom DNS name servers supported for the DMS Serverless replication to access your source or target database. This list overrides the default name servers supported by the DMS Serverless replication. You can specify a comma-separated list of internet addresses for up to four DNS name servers. For example: `"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"`
   *
   * @public
   */
  DnsNameServers?: string | undefined;

  /**
   * An Key Management Service (KMS) key Amazon Resource Name (ARN) that is used to encrypt the data during DMS Serverless replication.
   *
   * If you don't specify a value for the `KmsKeyId` parameter, DMS uses your default encryption key.
   *
   * KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies the maximum value of the DMS capacity units (DCUs) for which a given DMS Serverless replication can be provisioned. A single DCU is 2GB of RAM, with 1 DCU as the minimum value allowed. The list of valid DCU values includes 1, 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. So, the maximum value that you can specify for DMS Serverless is 384. The `MaxCapacityUnits` parameter is the only DCU parameter you are required to specify.
   *
   * @public
   */
  MaxCapacityUnits?: number | undefined;

  /**
   * Specifies the minimum value of the DMS capacity units (DCUs) for which a given DMS Serverless replication can be provisioned. A single DCU is 2GB of RAM, with 1 DCU as the minimum value allowed. The list of valid DCU values includes 1, 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. So, the minimum DCU value that you can specify for DMS Serverless is 1. If you don't set this value, DMS sets this parameter to the minimum DCU value allowed, 1. If there is no current source activity, DMS scales down your replication until it reaches the value specified in `MinCapacityUnits`.
   *
   * @public
   */
  MinCapacityUnits?: number | undefined;

  /**
   * Specifies whether the DMS Serverless replication is a Multi-AZ deployment. You can't set the `AvailabilityZone` parameter if the `MultiAZ` parameter is set to `true`.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The weekly time range during which system maintenance can occur for the DMS Serverless replication, in Universal Coordinated Time (UTC). The format is `ddd:hh24:mi-ddd:hh24:mi`.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time per Amazon Web Services Region. This maintenance occurs on a random day of the week. Valid values for days of the week include `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, and `Sun`.
   *
   * Constraints include a minimum 30-minute window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Specifies a subnet group identifier to associate with the DMS Serverless replication.
   *
   * @public
   */
  ReplicationSubnetGroupId?: string | undefined;

  /**
   * Specifies the virtual private cloud (VPC) security group to use with the DMS Serverless replication. The VPC security group must work with the VPC containing the replication.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateReplicationConfigMessage {
  /**
   * A unique identifier that you want to use to create a `ReplicationConfigArn` that is returned as part of the output from this action. You can then pass this output `ReplicationConfigArn` as the value of the `ReplicationConfigArn` option for other actions to identify both DMS Serverless replications and replication configurations that you want those actions to operate on. For some actions, you can also use either this unique identifier or a corresponding ARN in action filters to identify the specific replication and replication configuration to operate on.
   *
   * @public
   */
  ReplicationConfigIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source endpoint for this DMS Serverless replication configuration.
   *
   * @public
   */
  SourceEndpointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target endpoint for this DMS serverless replication configuration.
   *
   * @public
   */
  TargetEndpointArn: string | undefined;

  /**
   * Configuration parameters for provisioning an DMS Serverless replication.
   *
   * @public
   */
  ComputeConfig: ComputeConfig | undefined;

  /**
   * The type of DMS Serverless replication to provision using this replication configuration.
   *
   * Possible values:
   *
   * - `"full-load"`
   * - `"cdc"`
   * - `"full-load-and-cdc"`
   *
   * @public
   */
  ReplicationType: MigrationTypeValue | undefined;

  /**
   * JSON table mappings for DMS Serverless replications that are provisioned using this replication configuration. For more information, see [Specifying table selection and transformations rules using JSON](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.html).
   *
   * @public
   */
  TableMappings: string | undefined;

  /**
   * Optional JSON settings for DMS Serverless replications that are provisioned using this replication configuration. For example, see [Change processing tuning settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html).
   *
   * @public
   */
  ReplicationSettings?: string | undefined;

  /**
   * Optional JSON settings for specifying supplemental data. For more information, see [Specifying supplemental data for task settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html).
   *
   * @public
   */
  SupplementalSettings?: string | undefined;

  /**
   * Optional unique value or name that you set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource. For more information, see [Fine-grained access control using resource names and tags](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.FineGrainedAccess).
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * One or more optional tags associated with resources used by the DMS Serverless replication. For more information, see [Tagging resources in Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * This object provides configuration information about a serverless replication.
 *
 * @public
 */
export interface ReplicationConfig {
  /**
   * The identifier for the `ReplicationConfig` associated with the replication.
   *
   * @public
   */
  ReplicationConfigIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this DMS Serverless replication configuration.
   *
   * @public
   */
  ReplicationConfigArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source endpoint for this DMS serverless replication configuration.
   *
   * @public
   */
  SourceEndpointArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target endpoint for this DMS serverless replication configuration.
   *
   * @public
   */
  TargetEndpointArn?: string | undefined;

  /**
   * The type of the replication.
   *
   * @public
   */
  ReplicationType?: MigrationTypeValue | undefined;

  /**
   * Configuration parameters for provisioning an DMS serverless replication.
   *
   * @public
   */
  ComputeConfig?: ComputeConfig | undefined;

  /**
   * Configuration parameters for an DMS serverless replication.
   *
   * @public
   */
  ReplicationSettings?: string | undefined;

  /**
   * Additional parameters for an DMS serverless replication.
   *
   * @public
   */
  SupplementalSettings?: string | undefined;

  /**
   * Table mappings specified in the replication.
   *
   * @public
   */
  TableMappings?: string | undefined;

  /**
   * The time the serverless replication config was created.
   *
   * @public
   */
  ReplicationConfigCreateTime?: Date | undefined;

  /**
   * The time the serverless replication config was updated.
   *
   * @public
   */
  ReplicationConfigUpdateTime?: Date | undefined;

  /**
   * Indicates whether the replication configuration is read-only. When set to `true`, this replication configuration is managed by DMS as part of a zero-ETL integration and cannot be modified or deleted directly. You can only modify or delete read-only replication configurations through their associated zero-ETL integration.
   *
   * @public
   */
  IsReadOnly?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateReplicationConfigResponse {
  /**
   * Configuration parameters returned from the DMS Serverless replication after it is created.
   *
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;
}

/**
 * Specifies the settings required for kerberos authentication when creating the replication instance.
 *
 * @public
 */
export interface KerberosAuthenticationSettings {
  /**
   * Specifies the ID of the secret that stores the key cache file required for kerberos authentication.
   *
   * @public
   */
  KeyCacheSecretId?: string | undefined;

  /**
   * Specifies the Amazon Resource Name (ARN) of the IAM role that grants Amazon Web Services DMS access to the secret containing key cache file for the kerberos authentication.
   *
   * @public
   */
  KeyCacheSecretIamArn?: string | undefined;

  /**
   * Specifies the contents of krb5 configuration file required for kerberos authentication.
   *
   * @public
   */
  Krb5FileContents?: string | undefined;
}

/**
 * @public
 */
export interface CreateReplicationInstanceMessage {
  /**
   * The replication instance identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain 1-63 alphanumeric characters or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `myrepinstance`
   *
   * @public
   */
  ReplicationInstanceIdentifier: string | undefined;

  /**
   * The amount of storage (in gigabytes) to be initially allocated for the replication instance.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to `"dms.c4.large"`.
   *
   * For more information on the settings and capacities for the available replication instance classes, see [Choosing the right DMS replication instance](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.Types.html); and, [Selecting the best size for a replication instance](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.SizingReplicationInstance.html).
   *
   * @public
   */
  ReplicationInstanceClass: string | undefined;

  /**
   * Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The Availability Zone where the replication instance will be created. The default value is a random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region, for example: `us-east-1d`.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * A subnet group to associate with the replication instance.
   *
   * @public
   */
  ReplicationSubnetGroupIdentifier?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * Default: A 30-minute window selected at random from an 8-hour block of time per Amazon Web Services Region, occurring on a random day of the week.
   *
   * Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun
   *
   * Constraints: Minimum 30-minute window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Specifies whether the replication instance is a Multi-AZ deployment. You can't set the `AvailabilityZone` parameter if the Multi-AZ parameter is set to `true`.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The engine version number of the replication instance.
   *
   * If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. This parameter defaults to `true`.
   *
   * Default: `true`
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * One or more tags to be assigned to the replication instance.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * An KMS key identifier that is used to encrypt the data on the replication instance.
   *
   * If you don't specify a value for the `KmsKeyId` parameter, then DMS uses your default encryption key.
   *
   * KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies the accessibility options for the replication instance. A value of `true` represents an instance with a public IP address. A value of `false` represents an instance with a private IP address. The default value is `true`.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: `"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"`
   *
   * @public
   */
  DnsNameServers?: string | undefined;

  /**
   * A friendly name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1`. For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1`. If you don't specify a `ResourceIdentifier` value, DMS generates a default identifier value for the end of `EndpointArn`.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Specifies the settings required for kerberos authentication when creating the replication instance.
   *
   * @public
   */
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings | undefined;
}

/**
 * Provides information about the values of pending modifications to a replication instance. This data type is an object of the [`ReplicationInstance`](https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html) user-defined data type.
 *
 * @public
 */
export interface ReplicationPendingModifiedValues {
  /**
   * The compute and memory capacity of the replication instance as defined for the specified replication instance class.
   *
   * For more information on the settings and capacities for the available replication instance classes, see [Selecting the right DMS replication instance for your migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth).
   *
   * @public
   */
  ReplicationInstanceClass?: string | undefined;

  /**
   * The amount of storage (in gigabytes) that is allocated for the replication instance.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * Specifies whether the replication instance is a Multi-AZ deployment. You can't set the `AvailabilityZone` parameter if the Multi-AZ parameter is set to `true`.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The engine version number of the replication instance.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
   *
   * @public
   */
  NetworkType?: string | undefined;
}

/**
 * The name of an Availability Zone for use during database migration. `AvailabilityZone` is an optional parameter to the [`CreateReplicationInstance`](https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html) operation, and it’s value relates to the Amazon Web Services Region of an endpoint. For example, the availability zone of an endpoint in the us-east-1 region might be us-east-1a, us-east-1b, us-east-1c, or us-east-1d.
 *
 * @public
 */
export interface AvailabilityZone {
  /**
   * The name of the Availability Zone.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * In response to a request by the `DescribeReplicationSubnetGroups` operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status.
 *
 * @public
 */
export interface Subnet {
  /**
   * The subnet identifier.
   *
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * The Availability Zone of the subnet.
   *
   * @public
   */
  SubnetAvailabilityZone?: AvailabilityZone | undefined;

  /**
   * The status of the subnet.
   *
   * @public
   */
  SubnetStatus?: string | undefined;
}

/**
 * Describes a subnet group in response to a request by the `DescribeReplicationSubnetGroups` operation.
 *
 * @public
 */
export interface ReplicationSubnetGroup {
  /**
   * The identifier of the replication instance subnet group.
   *
   * @public
   */
  ReplicationSubnetGroupIdentifier?: string | undefined;

  /**
   * A description for the replication subnet group.
   *
   * @public
   */
  ReplicationSubnetGroupDescription?: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The status of the subnet group.
   *
   * @public
   */
  SubnetGroupStatus?: string | undefined;

  /**
   * The subnets that are in the subnet group.
   *
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * The IP addressing protocol supported by the subnet group. This is used by a replication instance with values such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
   *
   * @public
   */
  SupportedNetworkTypes?: string[] | undefined;

  /**
   * Indicates whether the replication subnet group is read-only. When set to `true`, this subnet group is managed by DMS as part of a zero-ETL integration and cannot be modified or deleted directly. You can only modify or delete read-only subnet groups through their associated zero-ETL integration.
   *
   * @public
   */
  IsReadOnly?: boolean | undefined;
}

/**
 * Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances.
 *
 * @public
 */
export interface VpcSecurityGroupMembership {
  /**
   * The VPC security group ID.
   *
   * @public
   */
  VpcSecurityGroupId?: string | undefined;

  /**
   * The status of the VPC security group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Provides information that defines a replication instance.
 *
 * @public
 */
export interface ReplicationInstance {
  /**
   * The replication instance identifier is a required parameter. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain 1-63 alphanumeric characters or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `myrepinstance`
   *
   * @public
   */
  ReplicationInstanceIdentifier?: string | undefined;

  /**
   * The compute and memory capacity of the replication instance as defined for the specified replication instance class. It is a required parameter, although a default value is pre-selected in the DMS console.
   *
   * For more information on the settings and capacities for the available replication instance classes, see [Selecting the right DMS replication instance for your migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth).
   *
   * @public
   */
  ReplicationInstanceClass?: string | undefined;

  /**
   * The status of the replication instance. The possible return values include:
   *
   * - `"available"`
   * - `"creating"`
   * - `"deleted"`
   * - `"deleting"`
   * - `"failed"`
   * - `"modifying"`
   * - `"upgrading"`
   * - `"rebooting"`
   * - `"resetting-master-credentials"`
   * - `"storage-full"`
   * - `"incompatible-credentials"`
   * - `"incompatible-network"`
   * - `"maintenance"`
   *
   * @public
   */
  ReplicationInstanceStatus?: string | undefined;

  /**
   * The amount of storage (in gigabytes) that is allocated for the replication instance.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The time the replication instance was created.
   *
   * @public
   */
  InstanceCreateTime?: Date | undefined;

  /**
   * The VPC security group for the instance.
   *
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * The Availability Zone for the instance.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The subnet group for the replication instance.
   *
   * @public
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup | undefined;

  /**
   * The maintenance window times for the replication instance. Any pending upgrades to the replication instance are performed during this time.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The pending modification values.
   *
   * @public
   */
  PendingModifiedValues?: ReplicationPendingModifiedValues | undefined;

  /**
   * Specifies whether the replication instance is a Multi-AZ deployment. You can't set the `AvailabilityZone` parameter if the Multi-AZ parameter is set to `true`.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The engine version number of the replication instance.
   *
   * If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.
   *
   * When modifying a major engine version of an instance, also set `AllowMajorVersionUpgrade` to `true`.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Boolean value indicating if minor version upgrades will be automatically applied to the instance.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * An KMS key identifier that is used to encrypt the data on the replication instance.
   *
   * If you don't specify a value for the `KmsKeyId` parameter, then DMS uses your default encryption key.
   *
   * KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replication instance.
   *
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * The public IP address of the replication instance.
   *
   * @deprecated deprecated.
   * @public
   */
  ReplicationInstancePublicIpAddress?: string | undefined;

  /**
   * The private IP address of the replication instance.
   *
   * @deprecated deprecated.
   * @public
   */
  ReplicationInstancePrivateIpAddress?: string | undefined;

  /**
   * One or more public IP addresses for the replication instance.
   *
   * @public
   */
  ReplicationInstancePublicIpAddresses?: string[] | undefined;

  /**
   * One or more private IP addresses for the replication instance.
   *
   * @public
   */
  ReplicationInstancePrivateIpAddresses?: string[] | undefined;

  /**
   * One or more IPv6 addresses for the replication instance.
   *
   * @public
   */
  ReplicationInstanceIpv6Addresses?: string[] | undefined;

  /**
   * Specifies the accessibility options for the replication instance. A value of `true` represents an instance with a public IP address. A value of `false` represents an instance with a private IP address. The default value is `true`.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The Availability Zone of the standby replication instance in a Multi-AZ deployment.
   *
   * @public
   */
  SecondaryAvailabilityZone?: string | undefined;

  /**
   * The expiration date of the free replication instance that is part of the Free DMS program.
   *
   * @public
   */
  FreeUntil?: Date | undefined;

  /**
   * The DNS name servers supported for the replication instance to access your on-premise source or target database.
   *
   * @public
   */
  DnsNameServers?: string | undefined;

  /**
   * The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Specifies the settings required for kerberos authentication when replicating an instance.
   *
   * @public
   */
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings | undefined;
}

/**
 * @public
 */
export interface CreateReplicationInstanceResponse {
  /**
   * The replication instance that was created.
   *
   * @public
   */
  ReplicationInstance?: ReplicationInstance | undefined;
}

/**
 * @public
 */
export interface CreateReplicationSubnetGroupMessage {
  /**
   * The name for the replication subnet group. This value is stored as a lowercase string.
   *
   * Constraints: Must contain no more than 255 alphanumeric characters, periods, underscores, or hyphens. Must not be "default".
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  ReplicationSubnetGroupIdentifier: string | undefined;

  /**
   * The description for the subnet group.
   *
   * Constraints: This parameter Must not contain non-printable control characters.
   *
   * @public
   */
  ReplicationSubnetGroupDescription: string | undefined;

  /**
   * Two or more subnet IDs to be assigned to the subnet group.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * One or more tags to be assigned to the subnet group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateReplicationSubnetGroupResponse {
  /**
   * The replication subnet group that was created.
   *
   * @public
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup | undefined;
}

/**
 * @public
 */
export interface CreateReplicationTaskMessage {
  /**
   * An identifier for the replication task.
   *
   * Constraints:
   *
   * - Must contain 1-255 alphanumeric characters or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  ReplicationTaskIdentifier: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.
   *
   * @public
   */
  SourceEndpointArn: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.
   *
   * @public
   */
  TargetEndpointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a replication instance.
   *
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * The migration type. Valid values: `full-load` | `cdc` | `full-load-and-cdc`
   *
   * @public
   */
  MigrationType: MigrationTypeValue | undefined;

  /**
   * The table mappings for the task, in JSON format. For more information, see [Using Table Mapping to Specify Task Settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  TableMappings: string | undefined;

  /**
   * Overall settings for the task, in JSON format. For more information, see [Specifying Task Settings for Database Migration Service Tasks](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  ReplicationTaskSettings?: string | undefined;

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

  /**
   * One or more tags to be assigned to the replication task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see [Specifying Supplemental Data for Task Settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  TaskData?: string | undefined;

  /**
   * A friendly name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1`. For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1`. If you don't specify a `ResourceIdentifier` value, DMS generates a default identifier value for the end of `EndpointArn`.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;
}

/**
 * In response to a request by the `DescribeReplicationTasks` operation, this object provides a collection of statistics about a replication task.
 *
 * @public
 */
export interface ReplicationTaskStats {
  /**
   * The percent complete for the full load migration task.
   *
   * @public
   */
  FullLoadProgressPercent?: number | undefined;

  /**
   * The elapsed time of the task, in milliseconds.
   *
   * @public
   */
  ElapsedTimeMillis?: number | undefined;

  /**
   * The number of tables loaded for this task.
   *
   * @public
   */
  TablesLoaded?: number | undefined;

  /**
   * The number of tables currently loading for this task.
   *
   * @public
   */
  TablesLoading?: number | undefined;

  /**
   * The number of tables queued for this task.
   *
   * @public
   */
  TablesQueued?: number | undefined;

  /**
   * The number of errors that have occurred during this task.
   *
   * @public
   */
  TablesErrored?: number | undefined;

  /**
   * The date the replication task was started either with a fresh start or a target reload.
   *
   * @public
   */
  FreshStartDate?: Date | undefined;

  /**
   * The date the replication task was started either with a fresh start or a resume. For more information, see [StartReplicationTaskType](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html#DMS-StartReplicationTask-request-StartReplicationTaskType).
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date the replication task was stopped.
   *
   * @public
   */
  StopDate?: Date | undefined;

  /**
   * The date the replication task full load was started.
   *
   * @public
   */
  FullLoadStartDate?: Date | undefined;

  /**
   * The date the replication task full load was completed.
   *
   * @public
   */
  FullLoadFinishDate?: Date | undefined;
}

/**
 * Provides information that describes a replication task created by the `CreateReplicationTask` operation.
 *
 * @public
 */
export interface ReplicationTask {
  /**
   * The user-assigned replication task identifier or name.
   *
   * Constraints:
   *
   * - Must contain 1-255 alphanumeric characters or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  ReplicationTaskIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the endpoint.
   *
   * @public
   */
  SourceEndpointArn?: string | undefined;

  /**
   * The ARN that uniquely identifies the endpoint.
   *
   * @public
   */
  TargetEndpointArn?: string | undefined;

  /**
   * The ARN of the replication instance.
   *
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * The type of migration.
   *
   * @public
   */
  MigrationType?: MigrationTypeValue | undefined;

  /**
   * Table mappings specified in the task.
   *
   * @public
   */
  TableMappings?: string | undefined;

  /**
   * The settings for the replication task.
   *
   * @public
   */
  ReplicationTaskSettings?: string | undefined;

  /**
   * The status of the replication task. This response parameter can return one of the following values:
   *
   * - `"moving"` – The task is being moved in response to running the [`MoveReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html) operation.
   * - `"creating"` – The task is being created in response to running the [`CreateReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html) operation.
   * - `"deleting"` – The task is being deleted in response to running the [`DeleteReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html) operation.
   * - `"failed"` – The task failed to successfully complete the database migration in response to running the [`StartReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html) operation.
   * - `"failed-move"` – The task failed to move in response to running the [`MoveReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html) operation.
   * - `"modifying"` – The task definition is being modified in response to running the [`ModifyReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html) operation.
   * - `"ready"` – The task is in a `ready` state where it can respond to other task operations, such as [`StartReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html) or [`DeleteReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html).
   * - `"running"` – The task is performing a database migration in response to running the [`StartReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html) operation.
   * - `"starting"` – The task is preparing to perform a database migration in response to running the [`StartReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html) operation.
   * - `"stopped"` – The task has stopped in response to running the [`StopReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html) operation.
   * - `"stopping"` – The task is preparing to stop in response to running the [`StopReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html) operation.
   * - `"testing"` – The database migration specified for this task is being tested in response to running either the [`StartReplicationTaskAssessmentRun`](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html) or the [`StartReplicationTaskAssessment`](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html) operation.
   *
   *   > **Note:** [`StartReplicationTaskAssessmentRun`](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html) is an improved premigration task assessment operation. The [`StartReplicationTaskAssessment`](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html) operation assesses data type compatibility only between the source and target database of a given migration task. In contrast, [`StartReplicationTaskAssessmentRun`](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html) enables you to specify a variety of premigration task assessments in addition to data type compatibility. These assessments include ones for the validity of primary key definitions and likely issues with database migration performance, among others.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The last error (failure) message generated for the replication task.
   *
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * The reason the replication task was stopped. This response parameter can return one of the following values:
   *
   * - `"Stop Reason NORMAL"` – The task completed successfully with no additional information returned.
   * - `"Stop Reason RECOVERABLE_ERROR"`
   * - `"Stop Reason FATAL_ERROR"`
   * - `"Stop Reason FULL_LOAD_ONLY_FINISHED"` – The task completed the full load phase. DMS applied cached changes if you set `StopTaskCachedChangesApplied` to `true`.
   * - `"Stop Reason STOPPED_AFTER_FULL_LOAD"` – Full load completed, with cached changes not applied
   * - `"Stop Reason STOPPED_AFTER_CACHED_EVENTS"` – Full load completed, with cached changes applied
   * - `"Stop Reason EXPRESS_LICENSE_LIMITS_REACHED"`
   * - `"Stop Reason STOPPED_AFTER_DDL_APPLY"` – User-defined stop task after DDL applied
   * - `"Stop Reason STOPPED_DUE_TO_LOW_MEMORY"`
   * - `"Stop Reason STOPPED_DUE_TO_LOW_DISK"`
   * - `"Stop Reason STOPPED_AT_SERVER_TIME"` – User-defined server time for stopping task
   * - `"Stop Reason STOPPED_AT_COMMIT_TIME"` – User-defined commit time for stopping task
   * - `"Stop Reason RECONFIGURATION_RESTART"`
   * - `"Stop Reason RECYCLE_TASK"`
   *
   * @public
   */
  StopReason?: string | undefined;

  /**
   * The date the replication task was created.
   *
   * @public
   */
  ReplicationTaskCreationDate?: Date | undefined;

  /**
   * The date the replication task is scheduled to start.
   *
   * @public
   */
  ReplicationTaskStartDate?: Date | undefined;

  /**
   * Indicates when you want a change data capture (CDC) operation to start. Use either `CdcStartPosition` or `CdcStartTime` to specify when you want the CDC operation to start. Specifying both values results in an error.
   *
   * The value can be in date, checkpoint, or LSN/SCN format.
   *
   * Date Example: --cdc-start-position “2018-03-08T12:12:12”
   *
   * Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"
   *
   * LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”
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

  /**
   * Indicates the last checkpoint that occurred during a change data capture (CDC) operation. You can provide this value to the `CdcStartPosition` parameter to start a CDC operation that begins at that checkpoint.
   *
   * @public
   */
  RecoveryCheckpoint?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replication task.
   *
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * The statistics for the task, including elapsed time, tables loaded, and table errors.
   *
   * @public
   */
  ReplicationTaskStats?: ReplicationTaskStats | undefined;

  /**
   * Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see [Specifying Supplemental Data for Task Settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  TaskData?: string | undefined;

  /**
   * The ARN of the replication instance to which this task is moved in response to running the [`MoveReplicationTask`](https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html) operation. Otherwise, this response parameter isn't a member of the `ReplicationTask` object.
   *
   * @public
   */
  TargetReplicationInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateReplicationTaskResponse {
  /**
   * The replication task that was created.
   *
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateMessage {
  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.
 *
 * @public
 */
export interface Certificate {
  /**
   * A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  CertificateIdentifier?: string | undefined;

  /**
   * The date that the certificate was created.
   *
   * @public
   */
  CertificateCreationDate?: Date | undefined;

  /**
   * The contents of a `.pem` file, which contains an X.509 certificate.
   *
   * @public
   */
  CertificatePem?: string | undefined;

  /**
   * The location of an imported Oracle Wallet certificate for use with SSL. Example: `filebase64("$\{path.root\}/rds-ca-2019-root.sso")`
   *
   * @public
   */
  CertificateWallet?: Uint8Array | undefined;

  /**
   * The Amazon Resource Name (ARN) for the certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The owner of the certificate.
   *
   * @public
   */
  CertificateOwner?: string | undefined;

  /**
   * The beginning date that the certificate is valid.
   *
   * @public
   */
  ValidFromDate?: Date | undefined;

  /**
   * The final date that the certificate is valid.
   *
   * @public
   */
  ValidToDate?: Date | undefined;

  /**
   * The signing algorithm for the certificate.
   *
   * @public
   */
  SigningAlgorithm?: string | undefined;

  /**
   * The key length of the cryptographic algorithm being used.
   *
   * @public
   */
  KeyLength?: number | undefined;

  /**
   * An KMS key identifier that is used to encrypt the certificate.
   *
   * If you don't specify a value for the `KmsKeyId` parameter, then DMS uses your default encryption key.
   *
   * KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateResponse {
  /**
   * The Secure Sockets Layer (SSL) certificate.
   *
   * @public
   */
  Certificate?: Certificate | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionMessage {
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
 * Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued.
 *
 * @public
 */
export interface Connection {
  /**
   * The ARN of the replication instance.
   *
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * The ARN string that uniquely identifies the endpoint.
   *
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * The connection status. This parameter can return one of the following values:
   *
   * - `"successful"`
   * - `"testing"`
   * - `"failed"`
   * - `"deleting"`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The error message when the connection last failed.
   *
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * The identifier of the endpoint. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  EndpointIdentifier?: string | undefined;

  /**
   * The replication instance identifier. This parameter is stored as a lowercase string.
   *
   * @public
   */
  ReplicationInstanceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * The connection that is being deleted.
   *
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * @public
 */
export interface DeleteDataMigrationMessage {
  /**
   * The identifier (name or ARN) of the data migration to delete.
   *
   * @public
   */
  DataMigrationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataMigrationResponse {
  /**
   * The deleted data migration.
   *
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * @public
 */
export interface DeleteDataProviderMessage {
  /**
   * The identifier of the data provider to delete.
   *
   * @public
   */
  DataProviderIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataProviderResponse {
  /**
   * The data provider that was deleted.
   *
   * @public
   */
  DataProvider?: DataProvider | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointMessage {
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
export interface DeleteEndpointResponse {
  /**
   * The endpoint that was deleted.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;
}

/**
 * @public
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * The name of the DMS event notification subscription to be deleted.
   *
   * @public
   */
  SubscriptionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventSubscriptionResponse {
  /**
   * The event subscription that was deleted.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface DeleteCollectorRequest {
  /**
   * The reference ID of the Fleet Advisor collector to delete.
   *
   * @public
   */
  CollectorReferencedId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetAdvisorDatabasesRequest {
  /**
   * The IDs of the Fleet Advisor collector databases to delete.
   *
   * @public
   */
  DatabaseIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteFleetAdvisorDatabasesResponse {
  /**
   * The IDs of the databases that the operation deleted.
   *
   * @public
   */
  DatabaseIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceProfileMessage {
  /**
   * The identifier of the instance profile to delete.
   *
   * @public
   */
  InstanceProfileIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceProfileResponse {
  /**
   * The instance profile that was deleted.
   *
   * @public
   */
  InstanceProfile?: InstanceProfile | undefined;
}

/**
 * @public
 */
export interface DeleteMigrationProjectMessage {
  /**
   * The name or Amazon Resource Name (ARN) of the migration project to delete.
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMigrationProjectResponse {
  /**
   * The migration project that was deleted.
   *
   * @public
   */
  MigrationProject?: MigrationProject | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigMessage {
  /**
   * The replication config to delete.
   *
   * @public
   */
  ReplicationConfigArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigResponse {
  /**
   * Configuration parameters returned for the DMS Serverless replication after it is deleted.
   *
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationInstanceMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication instance to be deleted.
   *
   * @public
   */
  ReplicationInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationInstanceResponse {
  /**
   * The replication instance that was deleted.
   *
   * @public
   */
  ReplicationInstance?: ReplicationInstance | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationSubnetGroupMessage {
  /**
   * The subnet group name of the replication instance.
   *
   * @public
   */
  ReplicationSubnetGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationSubnetGroupResponse {}

/**
 * @public
 */
export interface DeleteReplicationTaskMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication task to be deleted.
   *
   * @public
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationTaskResponse {
  /**
   * The deleted replication task.
   *
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationTaskAssessmentRunMessage {
  /**
   * Amazon Resource Name (ARN) of the premigration assessment run to be deleted.
   *
   * @public
   */
  ReplicationTaskAssessmentRunArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationTaskAssessmentRunResponse {
  /**
   * The `ReplicationTaskAssessmentRun` object for the deleted assessment run.
   *
   * @public
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesMessage {}

/**
 * @public
 */
export interface DescribeAccountAttributesResponse {
  /**
   * Account quota information.
   *
   * @public
   */
  AccountQuotas?: AccountQuota[] | undefined;

  /**
   * A unique DMS identifier for an account in a particular Amazon Web Services Region. The value of this identifier has the following format: `c99999999999`. DMS uses this identifier to name artifacts. For example, DMS uses this identifier to name the default Amazon S3 bucket for storing task assessment reports in a given Amazon Web Services Region. The format of this S3 bucket name is the following: `dms-AccountNumber-UniqueAccountIdentifier.` Here is an example name for this default S3 bucket: `dms-111122223333-c44445555666`.
   *
   * > **Note:** DMS supports the `UniqueAccountIdentifier` parameter in versions 3.1.4 and later.
   *
   * @public
   */
  UniqueAccountIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicableIndividualAssessmentsMessage {
  /**
   * Amazon Resource Name (ARN) of a migration task on which you want to base the default list of individual assessments.
   *
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * ARN of a replication instance on which you want to base the default list of individual assessments.
   *
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of a serverless replication on which you want to base the default list of individual assessments.
   *
   * @public
   */
  ReplicationConfigArn?: string | undefined;

  /**
   * Name of a database engine that the specified replication instance supports as a source.
   *
   * @public
   */
  SourceEngineName?: string | undefined;

  /**
   * Name of a database engine that the specified replication instance supports as a target.
   *
   * @public
   */
  TargetEngineName?: string | undefined;

  /**
   * Name of the migration type that each provided individual assessment must support.
   *
   * @public
   */
  MigrationType?: MigrationTypeValue | undefined;

  /**
   * Maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * Optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicableIndividualAssessmentsResponse {
  /**
   * List of names for the individual assessments supported by the premigration assessment run that you start based on the specified request parameters. For more information on the available individual assessments, including compatibility with different migration task configurations, see [Working with premigration assessment runs](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  IndividualAssessmentNames?: string[] | undefined;

  /**
   * Pagination token returned for you to pass to a subsequent request. If you pass this token as the `Marker` value in a subsequent request, the response includes only records beyond the marker, up to the value specified in the request by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular `Describe*` call or similar operation. Filters are used as an optional parameter for certain API operations.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter as specified for a `Describe*` or similar operation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The filter value, which can specify one or more values used to narrow the returned results.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeCertificatesMessage {
  /**
   * Filters applied to the certificates described in the form of key-value pairs. Valid values are `certificate-arn` and `certificate-id`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 10
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificatesResponse {
  /**
   * The pagination token.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The Secure Sockets Layer (SSL) certificates associated with the replication instance.
   *
   * @public
   */
  Certificates?: Certificate[] | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionsMessage {
  /**
   * The filters applied to the connection.
   *
   * Valid filter names: endpoint-arn | replication-instance-arn
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionsResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A description of the connections.
   *
   * @public
   */
  Connections?: Connection[] | undefined;
}

/**
 * @public
 */
export interface DescribeConversionConfigurationMessage {
  /**
   * The name or Amazon Resource Name (ARN) for the schema conversion project to describe.
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DescribeConversionConfigurationResponse {
  /**
   * The name or Amazon Resource Name (ARN) for the schema conversion project.
   *
   * @public
   */
  MigrationProjectIdentifier?: string | undefined;

  /**
   * A JSON string that contains the schema conversion settings for the migration project. For the format and available settings, see [Specifying schema conversion settings for migration projects](https://docs.aws.amazon.com/dms/latest/userguide/schema-conversion-settings.html).
   *
   * @public
   */
  ConversionConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataMigrationsMessage {
  /**
   * Filters applied to the data migrations.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose `true`; otherwise, choose `false` (the default).
   *
   * @public
   */
  WithoutSettings?: boolean | undefined;

  /**
   * An option to set to avoid returning information about statistics. Use this to reduce overhead when statistics information is too large. To use this option, choose `true`; otherwise, choose `false` (the default).
   *
   * @public
   */
  WithoutStatistics?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeDataMigrationsResponse {
  /**
   * Returns information about the data migrations used in the project.
   *
   * @public
   */
  DataMigrations?: DataMigration[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataProvidersMessage {
  /**
   * The filters to apply to the data providers.
   *
   * The following filter names are supported:
   *
   * - `data-provider-identifier` – The data provider name or ARN.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataProvidersResponse {
  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A description of data providers.
   *
   * @public
   */
  DataProviders?: DataProvider[] | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointsMessage {
  /**
   * Filters applied to the endpoints.
   *
   * Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointsResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Endpoint description.
   *
   * @public
   */
  Endpoints?: Endpoint[] | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointSettingsMessage {
  /**
   * The database engine used for your source or target endpoint.
   *
   * @public
   */
  EngineName: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Endpoint settings.
 *
 * @public
 */
export interface EndpointSetting {
  /**
   * The name that you want to give the endpoint settings.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of endpoint. Valid values are `source` and `target`.
   *
   * @public
   */
  Type?: EndpointSettingTypeValue | undefined;

  /**
   * Enumerated values to use for this endpoint.
   *
   * @public
   */
  EnumValues?: string[] | undefined;

  /**
   * A value that marks this endpoint setting as sensitive.
   *
   * @public
   */
  Sensitive?: boolean | undefined;

  /**
   * The unit of measure for this endpoint setting.
   *
   * @public
   */
  Units?: string | undefined;

  /**
   * The relevance or validity of an endpoint setting for an engine name and its endpoint type.
   *
   * @public
   */
  Applicability?: string | undefined;

  /**
   * The minimum value of an endpoint setting that is of type `int`.
   *
   * @public
   */
  IntValueMin?: number | undefined;

  /**
   * The maximum value of an endpoint setting that is of type `int`.
   *
   * @public
   */
  IntValueMax?: number | undefined;

  /**
   * The default value of the endpoint setting if no value is specified using `CreateEndpoint` or `ModifyEndpoint`.
   *
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointSettingsResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Descriptions of the endpoint settings available for your source or target database engine.
   *
   * @public
   */
  EndpointSettings?: EndpointSetting[] | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointTypesMessage {
  /**
   * Filters applied to the endpoint types.
   *
   * Valid filter names: engine-name | endpoint-type
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Provides information about types of supported endpoints in response to a request by the `DescribeEndpointTypes` operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported.
 *
 * @public
 */
export interface SupportedEndpointType {
  /**
   * The database engine name. Valid values, depending on the EndpointType, include `"mysql"`, `"oracle"`, `"postgres"`, `"mariadb"`, `"aurora"`, `"aurora-postgresql"`, `"redshift"`, `"s3"`, `"db2"`, `"db2-zos"`, `"azuredb"`, `"sybase"`, `"dynamodb"`, `"mongodb"`, `"kinesis"`, `"kafka"`, `"elasticsearch"`, `"documentdb"`, `"sqlserver"`, `"neptune"`, and `"babelfish"`.
   *
   * @public
   */
  EngineName?: string | undefined;

  /**
   * Indicates if change data capture (CDC) is supported.
   *
   * @public
   */
  SupportsCDC?: boolean | undefined;

  /**
   * The type of endpoint. Valid values are `source` and `target`.
   *
   * @public
   */
  EndpointType?: ReplicationEndpointTypeValue | undefined;

  /**
   * The earliest DMS engine version that supports this endpoint engine. Note that endpoint engines released with DMS versions earlier than 3.1.1 do not return a value for this parameter.
   *
   * @public
   */
  ReplicationInstanceEngineMinimumVersion?: string | undefined;

  /**
   * The expanded name for the engine name. For example, if the `EngineName` parameter is "aurora", this value would be "Amazon Aurora MySQL".
   *
   * @public
   */
  EngineDisplayName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointTypesResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The types of endpoints that are supported.
   *
   * @public
   */
  SupportedEndpointTypes?: SupportedEndpointType[] | undefined;
}

/**
 * @public
 */
export interface DescribeEngineVersionsMessage {
  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Provides information about a replication instance version.
 *
 * @public
 */
export interface EngineVersion {
  /**
   * The version number of the replication instance.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The lifecycle status of the replication instance version. Valid values are `DEPRECATED`, `DEFAULT_VERSION`, and `ACTIVE`.
   *
   * @public
   */
  Lifecycle?: string | undefined;

  /**
   * The release status of the replication instance version.
   *
   * @public
   */
  ReleaseStatus?: ReleaseStatusValues | undefined;

  /**
   * The date when the replication instance version became publicly available.
   *
   * @public
   */
  LaunchDate?: Date | undefined;

  /**
   * The date when the replication instance will be automatically upgraded. This setting only applies if the `auto-minor-version` setting is enabled.
   *
   * @public
   */
  AutoUpgradeDate?: Date | undefined;

  /**
   * The date when the replication instance version will be deprecated and can no longer be requested.
   *
   * @public
   */
  DeprecationDate?: Date | undefined;

  /**
   * The date when the replication instance will have a version upgrade forced.
   *
   * @public
   */
  ForceUpgradeDate?: Date | undefined;

  /**
   * The list of valid replication instance versions that you can upgrade to.
   *
   * @public
   */
  AvailableUpgrades?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeEngineVersionsResponse {
  /**
   * Returned `EngineVersion` objects that describe the replication instance engine versions used in the project.
   *
   * @public
   */
  EngineVersions?: EngineVersion[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventCategoriesMessage {
  /**
   * The type of DMS resource that generates events.
   *
   * Valid values: replication-instance | replication-task
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * Filters applied to the event categories.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Lists categories of events subscribed to, and generated by, the applicable DMS resource type. This data type appears in response to the [`DescribeEventCategories`](https://docs.aws.amazon.com/dms/latest/APIReference/API_EventCategoryGroup.html) action.
 *
 * @public
 */
export interface EventCategoryGroup {
  /**
   * The type of DMS resource that generates events.
   *
   * Valid values: replication-instance | replication-server | security-group | replication-task
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of event categories from a source type that you've chosen.
   *
   * @public
   */
  EventCategories?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventCategoriesResponse {
  /**
   * A list of event categories.
   *
   * @public
   */
  EventCategoryGroupList?: EventCategoryGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * The identifier of an event source.
   *
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * The type of DMS resource that generates events.
   *
   * Valid values: replication-instance | replication-task
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The start time for the events to be listed.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time for the events to be listed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The duration of the events to be listed.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * A list of event categories for the source type that you've chosen.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * Filters applied to events. The only valid filter is `replication-instance-id`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the DMS resource type.
 *
 * @public
 */
export interface Event {
  /**
   * The identifier of an event source.
   *
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * The type of DMS resource that generates events.
   *
   * Valid values: replication-instance | endpoint | replication-task
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The event message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The event categories available for the specified source type.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * The date of the event.
   *
   * @public
   */
  Date?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEventsResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The events described.
   *
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * The name of the DMS event subscription to be described.
   *
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * Filters applied to event subscriptions.
   *
   * Valid filter names: `event-subscription-arn` | `event-subscription-id`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventSubscriptionsResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of event subscriptions.
   *
   * @public
   */
  EventSubscriptionsList?: EventSubscription[] | undefined;
}

/**
 * @public
 */
export interface DescribeExtensionPackAssociationsMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * The filters to apply to the extension pack installation requests.
   *
   * The following filter names are supported:
   *
   * - `request-id` – The request identifier.
   * - `status` – The request status. Valid values: `RECEIVED`, `IN_PROGRESS`, `SUCCESS`, `FAILED`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeExtensionPackAssociationsResponse {
  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A paginated list of extension pack installation requests.
   *
   * > **Note:** DMS never populates the `ExportSqlDetails` field for this operation.
   *
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorCollectorsRequest {
  /**
   * If you specify any of the following filters, the output includes information for only those collectors that meet the filter criteria:
   *
   * - `collector-referenced-id` – The ID of the collector agent, for example `d4610ac5-e323-4ad9-bc50-eaf7249dfe9d`.
   * - `collector-name` – The name of the collector agent.
   *
   * An example is: `describe-fleet-advisor-collectors --filter Name="collector-referenced-id",Values="d4610ac5-e323-4ad9-bc50-eaf7249dfe9d"`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Sets the maximum number of records returned in the response.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * If `NextToken` is returned by a previous response, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the last Fleet Advisor collector health check.
 *
 * @public
 */
export interface CollectorHealthCheck {
  /**
   * The status of the Fleet Advisor collector.
   *
   * @public
   */
  CollectorStatus?: CollectorStatus | undefined;

  /**
   * Whether the local collector can access its Amazon S3 bucket.
   *
   * @public
   */
  LocalCollectorS3Access?: boolean | undefined;

  /**
   * Whether the web collector can access its Amazon S3 bucket.
   *
   * @public
   */
  WebCollectorS3Access?: boolean | undefined;

  /**
   * Whether the role that you provided when creating the Fleet Advisor collector has sufficient permissions to access the Fleet Advisor web collector.
   *
   * @public
   */
  WebCollectorGrantedRoleBasedAccess?: boolean | undefined;
}

/**
 * Describes a Fleet Advisor collector inventory.
 *
 * @public
 */
export interface InventoryData {
  /**
   * The number of databases in the Fleet Advisor collector inventory.
   *
   * @public
   */
  NumberOfDatabases?: number | undefined;

  /**
   * The number of schemas in the Fleet Advisor collector inventory.
   *
   * @public
   */
  NumberOfSchemas?: number | undefined;
}

/**
 * Describes a Fleet Advisor collector.
 *
 * @public
 */
export interface CollectorResponse {
  /**
   * The reference ID of the Fleet Advisor collector.
   *
   * @public
   */
  CollectorReferencedId?: string | undefined;

  /**
   * The name of the Fleet Advisor collector .
   *
   * @public
   */
  CollectorName?: string | undefined;

  /**
   * The version of your Fleet Advisor collector, in semantic versioning format, for example `1.0.2`
   *
   * @public
   */
  CollectorVersion?: string | undefined;

  /**
   * Whether the collector version is up to date.
   *
   * @public
   */
  VersionStatus?: VersionStatus | undefined;

  /**
   * A summary description of the Fleet Advisor collector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * The IAM role that grants permissions to access the specified Amazon S3 bucket.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * Describes the last Fleet Advisor collector health check.
   *
   * @public
   */
  CollectorHealthCheck?: CollectorHealthCheck | undefined;

  /**
   * The timestamp of the last time the collector received data, in the following format: `2022-01-24T19:04:02.596113Z`
   *
   * @public
   */
  LastDataReceived?: string | undefined;

  /**
   * The timestamp when DMS registered the collector, in the following format: `2022-01-24T19:04:02.596113Z`
   *
   * @public
   */
  RegisteredDate?: string | undefined;

  /**
   * The timestamp when you created the collector, in the following format: `2022-01-24T19:04:02.596113Z`
   *
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * The timestamp when DMS last modified the collector, in the following format: `2022-01-24T19:04:02.596113Z`
   *
   * @public
   */
  ModifiedDate?: string | undefined;

  /**
   * Describes a Fleet Advisor collector inventory.
   *
   * @public
   */
  InventoryData?: InventoryData | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorCollectorsResponse {
  /**
   * Provides descriptions of the Fleet Advisor collectors, including the collectors' name and ID, and the latest inventory data.
   *
   * @public
   */
  Collectors?: CollectorResponse[] | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorDatabasesRequest {
  /**
   * If you specify any of the following filters, the output includes information for only those databases that meet the filter criteria:
   *
   * - `database-id` – The ID of the database.
   * - `database-name` – The name of the database.
   * - `database-engine` – The name of the database engine.
   * - `server-ip-address` – The IP address of the database server.
   * - `database-ip-address` – The IP address of the database.
   * - `collector-name` – The name of the associated Fleet Advisor collector.
   *
   * An example is: `describe-fleet-advisor-databases --filter Name="database-id",Values="45"`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Sets the maximum number of records returned in the response.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * If `NextToken` is returned by a previous response, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Briefly describes a Fleet Advisor collector.
 *
 * @public
 */
export interface CollectorShortInfoResponse {
  /**
   * The reference ID of the Fleet Advisor collector.
   *
   * @public
   */
  CollectorReferencedId?: string | undefined;

  /**
   * The name of the Fleet Advisor collector.
   *
   * @public
   */
  CollectorName?: string | undefined;
}

/**
 * Describes a server in a Fleet Advisor collector inventory.
 *
 * @public
 */
export interface ServerShortInfoResponse {
  /**
   * The ID of a server in a Fleet Advisor collector inventory.
   *
   * @public
   */
  ServerId?: string | undefined;

  /**
   * The IP address of a server in a Fleet Advisor collector inventory.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The name address of a server in a Fleet Advisor collector inventory.
   *
   * @public
   */
  ServerName?: string | undefined;
}

/**
 * Describes an inventory database instance for a Fleet Advisor collector.
 *
 * @public
 */
export interface DatabaseInstanceSoftwareDetailsResponse {
  /**
   * The database engine of a database in a Fleet Advisor collector inventory, for example `Microsoft SQL Server`.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The database engine version of a database in a Fleet Advisor collector inventory, for example `2019`.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The database engine edition of a database in a Fleet Advisor collector inventory, for example `Express`.
   *
   * @public
   */
  EngineEdition?: string | undefined;

  /**
   * The service pack level of the database.
   *
   * @public
   */
  ServicePack?: string | undefined;

  /**
   * The support level of the database, for example `Mainstream support`.
   *
   * @public
   */
  SupportLevel?: string | undefined;

  /**
   * The operating system architecture of the database.
   *
   * @public
   */
  OsArchitecture?: number | undefined;

  /**
   * Information about the database engine software, for example `Mainstream support ends on November 14th, 2024`.
   *
   * @public
   */
  Tooltip?: string | undefined;
}

/**
 * Describes a database in a Fleet Advisor collector inventory.
 *
 * @public
 */
export interface DatabaseResponse {
  /**
   * The ID of a database in a Fleet Advisor collector inventory.
   *
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * The name of a database in a Fleet Advisor collector inventory.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The IP address of a database in a Fleet Advisor collector inventory.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The number of schemas in a Fleet Advisor collector inventory database.
   *
   * @public
   */
  NumberOfSchemas?: number | undefined;

  /**
   * The server name of a database in a Fleet Advisor collector inventory.
   *
   * @public
   */
  Server?: ServerShortInfoResponse | undefined;

  /**
   * The software details of a database in a Fleet Advisor collector inventory, such as database engine and version.
   *
   * @public
   */
  SoftwareDetails?: DatabaseInstanceSoftwareDetailsResponse | undefined;

  /**
   * A list of collectors associated with the database.
   *
   * @public
   */
  Collectors?: CollectorShortInfoResponse[] | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorDatabasesResponse {
  /**
   * Provides descriptions of the Fleet Advisor collector databases, including the database's collector, ID, and name.
   *
   * @public
   */
  Databases?: DatabaseResponse[] | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorLsaAnalysisRequest {
  /**
   * Sets the maximum number of records returned in the response.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * If `NextToken` is returned by a previous response, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a large-scale assessment (LSA) analysis run by a Fleet Advisor collector.
 *
 * @public
 */
export interface FleetAdvisorLsaAnalysisResponse {
  /**
   * The ID of an LSA analysis run by a Fleet Advisor collector.
   *
   * @public
   */
  LsaAnalysisId?: string | undefined;

  /**
   * The status of an LSA analysis run by a Fleet Advisor collector.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorLsaAnalysisResponse {
  /**
   * A list of `FleetAdvisorLsaAnalysisResponse` objects.
   *
   * @public
   */
  Analysis?: FleetAdvisorLsaAnalysisResponse[] | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemaObjectSummaryRequest {
  /**
   * If you specify any of the following filters, the output includes information for only those schema objects that meet the filter criteria:
   *
   * - `schema-id` – The ID of the schema, for example `d4610ac5-e323-4ad9-bc50-eaf7249dfe9d`.
   *
   * Example: `describe-fleet-advisor-schema-object-summary --filter Name="schema-id",Values="50"`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * > **Important:** End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see [Amazon Web Services DMS Fleet Advisor end of support](https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html).
   *
   * Sets the maximum number of records returned in the response.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * If `NextToken` is returned by a previous response, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a schema object in a Fleet Advisor collector inventory.
 *
 * @public
 */
export interface FleetAdvisorSchemaObjectResponse {
  /**
   * The ID of a schema object in a Fleet Advisor collector inventory.
   *
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * The type of the schema object, as reported by the database engine. Examples include the following:
   *
   * - `function`
   * - `trigger`
   * - `SYSTEM_TABLE`
   * - `QUEUE`
   *
   * @public
   */
  ObjectType?: string | undefined;

  /**
   * The number of objects in a schema object in a Fleet Advisor collector inventory.
   *
   * @public
   */
  NumberOfObjects?: number | undefined;

  /**
   * The number of lines of code in a schema object in a Fleet Advisor collector inventory.
   *
   * @public
   */
  CodeLineCount?: number | undefined;

  /**
   * The size level of the code in a schema object in a Fleet Advisor collector inventory.
   *
   * @public
   */
  CodeSize?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemaObjectSummaryResponse {
  /**
   * A collection of `FleetAdvisorSchemaObjectResponse` objects.
   *
   * @public
   */
  FleetAdvisorSchemaObjects?: FleetAdvisorSchemaObjectResponse[] | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemasRequest {
  /**
   * If you specify any of the following filters, the output includes information for only those schemas that meet the filter criteria:
   *
   * - `complexity` – The schema's complexity, for example `Simple`.
   * - `database-id` – The ID of the schema's database.
   * - `database-ip-address` – The IP address of the schema's database.
   * - `database-name` – The name of the schema's database.
   * - `database-engine` – The name of the schema database's engine.
   * - `original-schema-name` – The name of the schema's database's main schema.
   * - `schema-id` – The ID of the schema, for example `15`.
   * - `schema-name` – The name of the schema.
   * - `server-ip-address` – The IP address of the schema database's server.
   *
   * An example is: `describe-fleet-advisor-schemas --filter Name="schema-id",Values="50"`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Sets the maximum number of records returned in the response.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * If `NextToken` is returned by a previous response, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a database in a Fleet Advisor collector inventory.
 *
 * @public
 */
export interface DatabaseShortInfoResponse {
  /**
   * The ID of a database in a Fleet Advisor collector inventory.
   *
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * The name of a database in a Fleet Advisor collector inventory.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The IP address of a database in a Fleet Advisor collector inventory.
   *
   * @public
   */
  DatabaseIpAddress?: string | undefined;

  /**
   * The database engine of a database in a Fleet Advisor collector inventory, for example `PostgreSQL`.
   *
   * @public
   */
  DatabaseEngine?: string | undefined;
}

/**
 * Describes a schema in a Fleet Advisor collector inventory.
 *
 * @public
 */
export interface SchemaShortInfoResponse {
  /**
   * The ID of a schema in a Fleet Advisor collector inventory.
   *
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * The name of a schema in a Fleet Advisor collector inventory.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The ID of a database in a Fleet Advisor collector inventory.
   *
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * The name of a database in a Fleet Advisor collector inventory.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The IP address of a database in a Fleet Advisor collector inventory.
   *
   * @public
   */
  DatabaseIpAddress?: string | undefined;
}

/**
 * Describes a schema in a Fleet Advisor collector inventory.
 *
 * @public
 */
export interface SchemaResponse {
  /**
   * The number of lines of code in a schema in a Fleet Advisor collector inventory.
   *
   * @public
   */
  CodeLineCount?: number | undefined;

  /**
   * The size level of the code in a schema in a Fleet Advisor collector inventory.
   *
   * @public
   */
  CodeSize?: number | undefined;

  /**
   * The complexity level of the code in a schema in a Fleet Advisor collector inventory.
   *
   * @public
   */
  Complexity?: string | undefined;

  /**
   * The database server for a schema in a Fleet Advisor collector inventory.
   *
   * @public
   */
  Server?: ServerShortInfoResponse | undefined;

  /**
   * The database for a schema in a Fleet Advisor collector inventory.
   *
   * @public
   */
  DatabaseInstance?: DatabaseShortInfoResponse | undefined;

  /**
   * The ID of a schema in a Fleet Advisor collector inventory.
   *
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * The name of a schema in a Fleet Advisor collector inventory.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * Describes a schema in a Fleet Advisor collector inventory.
   *
   * @public
   */
  OriginalSchema?: SchemaShortInfoResponse | undefined;

  /**
   * The similarity value for a schema in a Fleet Advisor collector inventory. A higher similarity value indicates that a schema is likely to be a duplicate.
   *
   * @public
   */
  Similarity?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemasResponse {
  /**
   * A collection of `SchemaResponse` objects.
   *
   * @public
   */
  FleetAdvisorSchemas?: SchemaResponse[] | undefined;

  /**
   * If `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceProfilesMessage {
  /**
   * The filters to apply to the instance profiles.
   *
   * The following filter names are supported:
   *
   * - `instance-profile-identifier` – The instance profile name or ARN.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceProfilesResponse {
  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A description of instance profiles.
   *
   * @public
   */
  InstanceProfiles?: InstanceProfile[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelMessage {
  /**
   * A JSON string that identifies the metadata model to retrieve. For the selection rule format and examples, see [Selection rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-selection-rules.html).
   *
   * Usage:
   *
   * - Accepts source or target selection rules depending on the `Origin` parameter. The `server-name` in the object locator must match the corresponding data provider.
   * - Supports only `explicit` rule actions.
   * - Exactly one rule is allowed.
   *
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * Specifies whether to retrieve metadata from the source or target tree. Valid values: SOURCE | TARGET
   *
   * @public
   */
  Origin: OriginTypeValue | undefined;
}

/**
 * A reference to a metadata model, including its name and selection rules for location identification.
 *
 * @public
 */
export interface MetadataModelReference {
  /**
   * The name of the metadata model.
   *
   * @public
   */
  MetadataModelName?: string | undefined;

  /**
   * A JSON string that identifies this metadata model in the metadata tree. For the selection rule format, see [Selection rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-selection-rules.html).
   *
   * Usage:
   *
   * - You can pass this value as the `SelectionRules` parameter to any operation that accepts selection rules, such as `DescribeMetadataModel`, `StartMetadataModelConversion`, and others.
   *
   * @public
   */
  SelectionRules?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelResponse {
  /**
   * The name of the metadata model.
   *
   * @public
   */
  MetadataModelName?: string | undefined;

  /**
   * The type of the metadata model.
   *
   * @public
   */
  MetadataModelType?: string | undefined;

  /**
   * A list of counterpart metadata models in the target. This field is populated only when Origin is SOURCE and after the object has been converted by DMS Schema Conversion.
   *
   * @public
   */
  TargetMetadataModels?: MetadataModelReference[] | undefined;

  /**
   * The SQL text of the metadata model. This field might not be populated for some metadata models.
   *
   * @public
   */
  Definition?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelAssessmentsMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * The filters to apply to the metadata model assessment requests.
   *
   * The following filter names are supported:
   *
   * - `request-id` – The request identifier.
   * - `status` – The request status. Valid values: `RECEIVED`, `IN_PROGRESS`, `SUCCESS`, `FAILED`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelAssessmentsResponse {
  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A paginated list of metadata model assessment requests.
   *
   * > **Note:** DMS never populates the `ExportSqlDetails` field for this operation.
   *
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelChildrenMessage {
  /**
   * A JSON string that identifies the metadata model whose children to retrieve. For the selection rule format and examples, see [Selection rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-selection-rules.html).
   *
   * Usage:
   *
   * - Accepts source or target selection rules depending on the `Origin` parameter. The `server-name` in the object locator must match the corresponding data provider.
   * - Supports only `explicit` rule actions.
   * - Exactly one rule is allowed.
   *
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * Specifies whether to retrieve metadata from the source or target tree. Valid values: SOURCE | TARGET
   *
   * @public
   */
  Origin: OriginTypeValue | undefined;

  /**
   * Specifies the unique pagination token that indicates where the next page should start. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of metadata model children to include in the response. If more items exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelChildrenResponse {
  /**
   * Specifies the unique pagination token that makes it possible to display the next page of metadata model children. If a marker is returned, there are more metadata model children available.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of child metadata models.
   *
   * @public
   */
  MetadataModelChildren?: MetadataModelReference[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelConversionsMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * The filters to apply to the metadata model conversion requests.
   *
   * The following filter names are supported:
   *
   * - `request-id` – The request identifier.
   * - `status` – The request status. Valid values: `RECEIVED`, `IN_PROGRESS`, `SUCCESS`, `FAILED`, `CANCELING`, `CANCELED`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelConversionsResponse {
  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A paginated list of metadata model conversion requests.
   *
   * > **Note:** DMS never populates the `ExportSqlDetails` field for this operation.
   *
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelCreationsMessage {
  /**
   * The filters to apply to the metadata model creation requests.
   *
   * The following filter names are supported:
   *
   * - `request-id` – The request identifier.
   * - `status` – The request status. Valid values: `RECEIVED`, `IN_PROGRESS`, `SUCCESS`, `FAILED`, `CANCELING`, `CANCELED`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;

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
export interface DescribeMetadataModelCreationsResponse {
  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A paginated list of metadata model creation requests.
   *
   * > **Note:** DMS never populates the `ExportSqlDetails` field for this operation.
   *
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsAsScriptMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * The filters to apply to the metadata model export requests.
   *
   * The following filter names are supported:
   *
   * - `request-id` – The request identifier.
   * - `status` – The request status. Valid values: `RECEIVED`, `IN_PROGRESS`, `SUCCESS`, `FAILED`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsAsScriptResponse {
  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A paginated list of metadata model export requests.
   *
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsToTargetMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * The filters to apply to the metadata model export requests.
   *
   * The following filter names are supported:
   *
   * - `request-id` – The request identifier.
   * - `status` – The request status. Valid values: `RECEIVED`, `IN_PROGRESS`, `SUCCESS`, `FAILED`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsToTargetResponse {
  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A paginated list of metadata model export requests.
   *
   * > **Note:** DMS never populates the `ExportSqlDetails` field for this operation.
   *
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelImportsMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * The filters to apply to the metadata model import requests.
   *
   * The following filter names are supported:
   *
   * - `request-id` – The request identifier.
   * - `status` – The request status. Valid values: `RECEIVED`, `IN_PROGRESS`, `SUCCESS`, `FAILED`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelImportsResponse {
  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A paginated list of metadata model import requests.
   *
   * > **Note:** DMS never populates the `ExportSqlDetails` field for this operation.
   *
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeMigrationProjectsMessage {
  /**
   * The filters to apply to the migration projects.
   *
   * The following filter names are supported:
   *
   * - `migration-project-identifier` – The migration project name or ARN.
   * - `instance-profile-identifier` – The instance profile name or ARN.
   * - `data-provider-identifier` – The source or target data provider name or ARN.
   * - `source-data-provider-identifier` – The source data provider name or ARN.
   * - `target-data-provider-identifier` – The target data provider name or ARN.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMigrationProjectsResponse {
  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `Marker` is returned by a previous response, there are more results available. The value of `Marker` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A description of migration projects.
   *
   * @public
   */
  MigrationProjects?: MigrationProject[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrderableReplicationInstancesMessage {
  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * In response to the `DescribeOrderableReplicationInstances` operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage.
 *
 * @public
 */
export interface OrderableReplicationInstance {
  /**
   * The version of the replication engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to `"dms.c4.large"`.
   *
   * For more information on the settings and capacities for the available replication instance classes, see [Selecting the right DMS replication instance for your migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth).
   *
   * @public
   */
  ReplicationInstanceClass?: string | undefined;

  /**
   * The type of storage used by the replication instance.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.
   *
   * @public
   */
  MinAllocatedStorage?: number | undefined;

  /**
   * The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.
   *
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * The default amount of storage (in gigabytes) that is allocated for the replication instance.
   *
   * @public
   */
  DefaultAllocatedStorage?: number | undefined;

  /**
   * The amount of storage (in gigabytes) that is allocated for the replication instance.
   *
   * @public
   */
  IncludedAllocatedStorage?: number | undefined;

  /**
   * List of Availability Zones for this replication instance.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The value returned when the specified `EngineVersion` of the replication instance is in Beta or test mode. This indicates some features might not work as expected.
   *
   * > **Note:** DMS supports the `ReleaseStatus` parameter in versions 3.1.4 and later.
   *
   * @public
   */
  ReleaseStatus?: ReleaseStatusValues | undefined;
}

/**
 * @public
 */
export interface DescribeOrderableReplicationInstancesResponse {
  /**
   * The order-able replication instances available.
   *
   * @public
   */
  OrderableReplicationInstances?: OrderableReplicationInstance[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication instance.
   *
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribePendingMaintenanceActionsResponse {
  /**
   * The pending maintenance action.
   *
   * @public
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationLimitationsRequest {
  /**
   * Filters applied to the limitations described in the form of key-value pairs.
   *
   * Valid filter names: `database-id` | `engine-name`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, Fleet Advisor includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `NextToken` is returned by a previous response, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information about the limitations of target Amazon Web Services engines.
 *
 * Your source database might include features that the target Amazon Web Services engine doesn't support. Fleet Advisor lists these features as limitations. You should consider these limitations during database migration. For each limitation, Fleet Advisor recommends an action that you can take to address or avoid this limitation.
 *
 * @public
 */
export interface Limitation {
  /**
   * The identifier of the source database.
   *
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * The name of the target engine that Fleet Advisor should use in the target engine recommendation. Valid values include `"rds-aurora-mysql"`, `"rds-aurora-postgresql"`, `"rds-mysql"`, `"rds-oracle"`, `"rds-sql-server"`, and `"rds-postgresql"`.
   *
   * @public
   */
  EngineName?: string | undefined;

  /**
   * The name of the limitation. Describes unsupported database features, migration action items, and other limitations.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the limitation. Provides additional information about the limitation, and includes recommended actions that you can take to address or avoid this limitation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The impact of the limitation. You can use this parameter to prioritize limitations that you want to address. Valid values include `"Blocker"`, `"High"`, `"Medium"`, and `"Low"`.
   *
   * @public
   */
  Impact?: string | undefined;

  /**
   * The type of the limitation, such as action required, upgrade required, and limited feature.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationLimitationsResponse {
  /**
   * The unique pagination token returned for you to pass to a subsequent request. Fleet Advisor returns this token when the number of records in the response is greater than the `MaxRecords` value. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of limitations for recommendations of target Amazon Web Services engines.
   *
   * @public
   */
  Limitations?: Limitation[] | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationsRequest {
  /**
   * Filters applied to the target engine recommendations described in the form of key-value pairs.
   *
   * Valid filter names: `database-id` | `engine-name`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, Fleet Advisor includes a pagination token in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * If `NextToken` is returned by a previous response, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides information that describes the requirements to the target engine on Amazon RDS.
 *
 * @public
 */
export interface RdsRequirements {
  /**
   * The required target Amazon RDS engine edition.
   *
   * @public
   */
  EngineEdition?: string | undefined;

  /**
   * The required number of virtual CPUs (vCPU) on the Amazon RDS DB instance.
   *
   * @public
   */
  InstanceVcpu?: number | undefined;

  /**
   * The required memory on the Amazon RDS DB instance.
   *
   * @public
   */
  InstanceMemory?: number | undefined;

  /**
   * The required Amazon RDS DB instance storage size.
   *
   * @public
   */
  StorageSize?: number | undefined;

  /**
   * The required number of I/O operations completed each second (IOPS) on your Amazon RDS DB instance.
   *
   * @public
   */
  StorageIops?: number | undefined;

  /**
   * The required deployment option for the Amazon RDS DB instance. Valid values include `"MULTI_AZ"` for Multi-AZ deployments and `"SINGLE_AZ"` for Single-AZ deployments.
   *
   * @public
   */
  DeploymentOption?: string | undefined;

  /**
   * The required target Amazon RDS engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;
}

/**
 * Provides information that describes the configuration of the recommended target engine on Amazon RDS.
 *
 * @public
 */
export interface RdsConfiguration {
  /**
   * Describes the recommended target Amazon RDS engine edition.
   *
   * @public
   */
  EngineEdition?: string | undefined;

  /**
   * Describes the recommended target Amazon RDS instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * Describes the number of virtual CPUs (vCPU) on the recommended Amazon RDS DB instance that meets your requirements.
   *
   * @public
   */
  InstanceVcpu?: number | undefined;

  /**
   * Describes the memory on the recommended Amazon RDS DB instance that meets your requirements.
   *
   * @public
   */
  InstanceMemory?: number | undefined;

  /**
   * Describes the storage type of the recommended Amazon RDS DB instance that meets your requirements.
   *
   * Amazon RDS provides three storage types: General Purpose SSD (also known as gp2 and gp3), Provisioned IOPS SSD (also known as io1), and magnetic (also known as standard).
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * Describes the storage size of the recommended Amazon RDS DB instance that meets your requirements.
   *
   * @public
   */
  StorageSize?: number | undefined;

  /**
   * Describes the number of I/O operations completed each second (IOPS) on the recommended Amazon RDS DB instance that meets your requirements.
   *
   * @public
   */
  StorageIops?: number | undefined;

  /**
   * Describes the deployment option for the recommended Amazon RDS DB instance. The deployment options include Multi-AZ and Single-AZ deployments. Valid values include `"MULTI_AZ"` and `"SINGLE_AZ"`.
   *
   * @public
   */
  DeploymentOption?: string | undefined;

  /**
   * Describes the recommended target Amazon RDS engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;
}

/**
 * Provides information that describes a recommendation of a target engine on Amazon RDS.
 *
 * @public
 */
export interface RdsRecommendation {
  /**
   * Supplemental information about the requirements to the recommended target database on Amazon RDS.
   *
   * @public
   */
  RequirementsToTarget?: RdsRequirements | undefined;

  /**
   * Supplemental information about the configuration of the recommended target database on Amazon RDS.
   *
   * @public
   */
  TargetConfiguration?: RdsConfiguration | undefined;
}

/**
 * Provides information about the target engine for the specified source database.
 *
 * @public
 */
export interface RecommendationData {
  /**
   * The recommendation of a target Amazon RDS database engine.
   *
   * @public
   */
  RdsEngine?: RdsRecommendation | undefined;
}

/**
 * Provides information that describes a recommendation of a target engine.
 *
 * A *recommendation* is a set of possible Amazon Web Services target engines that you can choose to migrate your source on-premises database. In this set, Fleet Advisor suggests a single target engine as the right sized migration destination. To determine this rightsized migration destination, Fleet Advisor uses the inventory metadata and metrics from data collector. You can use recommendations before the start of migration to save costs and reduce risks.
 *
 * With recommendations, you can explore different target options and compare metrics, so you can make an informed decision when you choose the migration target.
 *
 * @public
 */
export interface Recommendation {
  /**
   * The identifier of the source database for which Fleet Advisor provided this recommendation.
   *
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * The name of the target engine. Valid values include `"rds-aurora-mysql"`, `"rds-aurora-postgresql"`, `"rds-mysql"`, `"rds-oracle"`, `"rds-sql-server"`, and `"rds-postgresql"`.
   *
   * @public
   */
  EngineName?: string | undefined;

  /**
   * The date when Fleet Advisor created the target engine recommendation.
   *
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * The status of the target engine recommendation. Valid values include `"alternate"`, `"in-progress"`, `"not-viable"`, and `"recommended"`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Indicates that this target is the rightsized migration destination.
   *
   * @public
   */
  Preferred?: boolean | undefined;

  /**
   * The settings in JSON format for the preferred target engine parameters. These parameters include capacity, resource utilization, and the usage type (production, development, or testing).
   *
   * @public
   */
  Settings?: RecommendationSettings | undefined;

  /**
   * The recommendation of a target engine for the specified source database.
   *
   * @public
   */
  Data?: RecommendationData | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationsResponse {
  /**
   * The unique pagination token returned for you to pass to a subsequent request. Fleet Advisor returns this token when the number of records in the response is greater than the `MaxRecords` value. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of recommendations of target engines that Fleet Advisor created for the source database.
   *
   * @public
   */
  Recommendations?: Recommendation[] | undefined;
}

/**
 * @public
 */
export interface DescribeRefreshSchemasStatusMessage {
  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
   *
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * Provides information that describes status of a schema at an endpoint specified by the `DescribeRefreshSchemaStatus` operation.
 *
 * @public
 */
export interface RefreshSchemasStatus {
  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
   *
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replication instance.
   *
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * The status of the schema.
   *
   * @public
   */
  Status?: RefreshSchemasStatusTypeValue | undefined;

  /**
   * The date the schema was last refreshed.
   *
   * @public
   */
  LastRefreshDate?: Date | undefined;

  /**
   * The last failure message for the schema.
   *
   * @public
   */
  LastFailureMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRefreshSchemasStatusResponse {
  /**
   * The status of the schema.
   *
   * @public
   */
  RefreshSchemasStatus?: RefreshSchemasStatus | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationConfigsMessage {
  /**
   * Filters applied to the replication configs.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationConfigsResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Returned configuration parameters that describe each provisioned DMS Serverless replication.
   *
   * @public
   */
  ReplicationConfigs?: ReplicationConfig[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationInstancesMessage {
  /**
   * Filters applied to replication instances.
   *
   * Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationInstancesResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The replication instances described.
   *
   * @public
   */
  ReplicationInstances?: ReplicationInstance[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationInstanceTaskLogsMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication instance.
   *
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains metadata for a replication instance task log.
 *
 * @public
 */
export interface ReplicationInstanceTaskLog {
  /**
   * The name of the replication task.
   *
   * @public
   */
  ReplicationTaskName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replication task.
   *
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * The size, in bytes, of the replication task log.
   *
   * @public
   */
  ReplicationInstanceTaskLogSize?: number | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationInstanceTaskLogsResponse {
  /**
   * The Amazon Resource Name (ARN) of the replication instance.
   *
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * An array of replication task log metadata. Each member of the array contains the replication task name, ARN, and task log size (in bytes).
   *
   * @public
   */
  ReplicationInstanceTaskLogs?: ReplicationInstanceTaskLog[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationsMessage {
  /**
   * Filters applied to the replications.
   *
   * Valid filter names: `replication-config-arn` | `replication-config-id`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * The results returned in `describe-replications` to display the results of the premigration assessment from the replication configuration.
 *
 * @public
 */
export interface PremigrationAssessmentStatus {
  /**
   * The Amazon Resource Name (ARN) of this assessment run.
   *
   * @public
   */
  PremigrationAssessmentRunArn?: string | undefined;

  /**
   * A configurable setting you can set to `true` (the defualt setting) or `false`. Use this setting to to stop the replication from starting automatically if the assessment fails. This can help you evaluate the issue that is preventing the replication from running successfully.
   *
   * @public
   */
  FailOnAssessmentFailure?: boolean | undefined;

  /**
   * This describes the assessment run status. The status can be one of the following values:
   *
   * - `cancelling`: The assessment run was canceled.
   * - `deleting`: The assessment run was deleted.
   * - `failed`: At least one individual assessment completed with a failed status.
   * - `error-provisioning`: An internal error occurred while resources were provisioned (during the `provisioning` status).
   * - `error-executing` An internal error occurred while individual assessments ran (during the `running` status).
   * - `invalid state`: The assessment run is in an unknown state.
   * - `passed`: All individual assessments have completed and none have a failed status.
   * - `provisioning`: The resources required to run individual assessments are being provisioned.
   * - `running`: Individual assessments are being run.
   * - `starting`: The assessment run is starting, but resources are not yet being provisioned for individual assessments.
   * - `warning`: At least one individual assessment completed with a warning status.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The date which the assessment run was created.
   *
   * @public
   */
  PremigrationAssessmentRunCreationDate?: Date | undefined;

  /**
   * The progress values reported by the `AssessmentProgress` response element.
   *
   * @public
   */
  AssessmentProgress?: ReplicationTaskAssessmentRunProgress | undefined;

  /**
   * The last message generated by an individual assessment failure.
   *
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * The Amazon S3 bucket that Database Migration Service Serverless created to store the results of this assessment run.
   *
   * @public
   */
  ResultLocationBucket?: string | undefined;

  /**
   * The folder within an Amazon S3 bucket where you want Database Migration Service to store the results of this assessment run.
   *
   * @public
   */
  ResultLocationFolder?: string | undefined;

  /**
   * The supported values are `SSE_KMS` and `SSE_S3`. If these values are not provided, then the files are not encrypted at rest. For more information, see [Creating Amazon Web Services KMS keys to encrypt Amazon S3 target objects](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.KMSKeys).
   *
   * @public
   */
  ResultEncryptionMode?: string | undefined;

  /**
   * The ARN of a custom KMS encryption key that you specify when you set `ResultEncryptionMode` to `SSE_KMS`.
   *
   * @public
   */
  ResultKmsKeyArn?: string | undefined;

  /**
   * The object containing the result statistics for a completed assessment run.
   *
   * @public
   */
  ResultStatistic?: ReplicationTaskAssessmentRunResultStatistic | undefined;
}

/**
 * Information about provisioning resources for an DMS serverless replication.
 *
 * @public
 */
export interface ProvisionData {
  /**
   * The current provisioning state
   *
   * @public
   */
  ProvisionState?: string | undefined;

  /**
   * The number of capacity units the replication is using.
   *
   * @public
   */
  ProvisionedCapacityUnits?: number | undefined;

  /**
   * The timestamp when DMS provisioned replication resources.
   *
   * @public
   */
  DateProvisioned?: Date | undefined;

  /**
   * Whether the new provisioning is available to the replication.
   *
   * @public
   */
  IsNewProvisioningAvailable?: boolean | undefined;

  /**
   * The timestamp when provisioning became available.
   *
   * @public
   */
  DateNewProvisioningDataAvailable?: Date | undefined;

  /**
   * A message describing the reason that DMS provisioned new resources for the serverless replication.
   *
   * @public
   */
  ReasonForNewProvisioningData?: string | undefined;
}

/**
 * This object provides a collection of statistics about a serverless replication.
 *
 * @public
 */
export interface ReplicationStats {
  /**
   * The percent complete for the full load serverless replication.
   *
   * @public
   */
  FullLoadProgressPercent?: number | undefined;

  /**
   * The elapsed time of the replication, in milliseconds.
   *
   * @public
   */
  ElapsedTimeMillis?: number | undefined;

  /**
   * The number of tables loaded for this replication.
   *
   * @public
   */
  TablesLoaded?: number | undefined;

  /**
   * The number of tables currently loading for this replication.
   *
   * @public
   */
  TablesLoading?: number | undefined;

  /**
   * The number of tables queued for this replication.
   *
   * @public
   */
  TablesQueued?: number | undefined;

  /**
   * The number of errors that have occured for this replication.
   *
   * @public
   */
  TablesErrored?: number | undefined;

  /**
   * The date the replication was started either with a fresh start or a target reload.
   *
   * @public
   */
  FreshStartDate?: Date | undefined;

  /**
   * The date the replication is scheduled to start.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date the replication was stopped.
   *
   * @public
   */
  StopDate?: Date | undefined;

  /**
   * The date the replication full load was started.
   *
   * @public
   */
  FullLoadStartDate?: Date | undefined;

  /**
   * The date the replication full load was finished.
   *
   * @public
   */
  FullLoadFinishDate?: Date | undefined;
}

/**
 * Provides information that describes a serverless replication created by the `CreateReplication` operation.
 *
 * @public
 */
export interface Replication {
  /**
   * The identifier for the `ReplicationConfig` associated with the replication.
   *
   * @public
   */
  ReplicationConfigIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name for the `ReplicationConfig` associated with the replication.
   *
   * @public
   */
  ReplicationConfigArn?: string | undefined;

  /**
   * The Amazon Resource Name for an existing `Endpoint` the serverless replication uses for its data source.
   *
   * @public
   */
  SourceEndpointArn?: string | undefined;

  /**
   * The Amazon Resource Name for an existing `Endpoint` the serverless replication uses for its data target.
   *
   * @public
   */
  TargetEndpointArn?: string | undefined;

  /**
   * The type of the serverless replication.
   *
   * @public
   */
  ReplicationType?: MigrationTypeValue | undefined;

  /**
   * The current status of the serverless replication.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Information about provisioning resources for an DMS serverless replication.
   *
   * @public
   */
  ProvisionData?: ProvisionData | undefined;

  /**
   * The status output of premigration assessment in describe-replications.
   *
   * @public
   */
  PremigrationAssessmentStatuses?: PremigrationAssessmentStatus[] | undefined;

  /**
   * The reason the replication task was stopped. This response parameter can return one of the following values:
   *
   * - `"Stop Reason NORMAL"`
   * - `"Stop Reason RECOVERABLE_ERROR"`
   * - `"Stop Reason FATAL_ERROR"`
   * - `"Stop Reason FULL_LOAD_ONLY_FINISHED"`
   * - `"Stop Reason STOPPED_AFTER_FULL_LOAD"` – Full load completed, with cached changes not applied
   * - `"Stop Reason STOPPED_AFTER_CACHED_EVENTS"` – Full load completed, with cached changes applied
   * - `"Stop Reason EXPRESS_LICENSE_LIMITS_REACHED"`
   * - `"Stop Reason STOPPED_AFTER_DDL_APPLY"` – User-defined stop task after DDL applied
   * - `"Stop Reason STOPPED_DUE_TO_LOW_MEMORY"`
   * - `"Stop Reason STOPPED_DUE_TO_LOW_DISK"`
   * - `"Stop Reason STOPPED_AT_SERVER_TIME"` – User-defined server time for stopping task
   * - `"Stop Reason STOPPED_AT_COMMIT_TIME"` – User-defined commit time for stopping task
   * - `"Stop Reason RECONFIGURATION_RESTART"`
   * - `"Stop Reason RECYCLE_TASK"`
   *
   * @public
   */
  StopReason?: string | undefined;

  /**
   * Error and other information about why a serverless replication failed.
   *
   * @public
   */
  FailureMessages?: string[] | undefined;

  /**
   * This object provides a collection of statistics about a serverless replication.
   *
   * @public
   */
  ReplicationStats?: ReplicationStats | undefined;

  /**
   * The type of replication to start.
   *
   * @public
   */
  StartReplicationType?: string | undefined;

  /**
   * Indicates the start time for a change data capture (CDC) operation. Use either `CdcStartTime` or `CdcStartPosition` to specify when you want a CDC operation to start. Specifying both values results in an error.
   *
   * @public
   */
  CdcStartTime?: Date | undefined;

  /**
   * Indicates the start time for a change data capture (CDC) operation. Use either `CdcStartTime` or `CdcStartPosition` to specify when you want a CDC operation to start. Specifying both values results in an error.
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

  /**
   * Indicates the last checkpoint that occurred during a change data capture (CDC) operation. You can provide this value to the `CdcStartPosition` parameter to start a CDC operation that begins at that checkpoint.
   *
   * @public
   */
  RecoveryCheckpoint?: string | undefined;

  /**
   * The time the serverless replication was created.
   *
   * @public
   */
  ReplicationCreateTime?: Date | undefined;

  /**
   * The time the serverless replication was updated.
   *
   * @public
   */
  ReplicationUpdateTime?: Date | undefined;

  /**
   * The timestamp when replication was last stopped.
   *
   * @public
   */
  ReplicationLastStopTime?: Date | undefined;

  /**
   * The timestamp when DMS will deprovision the replication.
   *
   * @public
   */
  ReplicationDeprovisionTime?: Date | undefined;

  /**
   * Indicates whether the serverless replication is read-only. When set to `true`, this replication is managed by DMS as part of a zero-ETL integration and cannot be modified or deleted directly. You can only modify or delete read-only replications through their associated zero-ETL integration.
   *
   * @public
   */
  IsReadOnly?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationsResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The replication descriptions.
   *
   * @public
   */
  Replications?: Replication[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationSubnetGroupsMessage {
  /**
   * Filters applied to replication subnet groups.
   *
   * Valid filter names: replication-subnet-group-id
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationSubnetGroupsResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A description of the replication subnet groups.
   *
   * @public
   */
  ReplicationSubnetGroups?: ReplicationSubnetGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationTableStatisticsMessage {
  /**
   * The replication config to describe.
   *
   * @public
   */
  ReplicationConfigArn: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Filters applied to the replication table statistics.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a collection of table statistics in response to a request by the `DescribeTableStatistics` operation.
 *
 * @public
 */
export interface TableStatistics {
  /**
   * The schema name.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The number of insert actions performed on a table.
   *
   * @public
   */
  Inserts?: number | undefined;

  /**
   * The number of delete actions performed on a table.
   *
   * @public
   */
  Deletes?: number | undefined;

  /**
   * The number of update actions performed on a table.
   *
   * @public
   */
  Updates?: number | undefined;

  /**
   * The data definition language (DDL) used to build and modify the structure of your tables.
   *
   * @public
   */
  Ddls?: number | undefined;

  /**
   * The number of insert actions applied on a target table.
   *
   * @public
   */
  AppliedInserts?: number | undefined;

  /**
   * The number of delete actions applied on a target table.
   *
   * @public
   */
  AppliedDeletes?: number | undefined;

  /**
   * The number of update actions applied on a target table.
   *
   * @public
   */
  AppliedUpdates?: number | undefined;

  /**
   * The number of data definition language (DDL) statements used to build and modify the structure of your tables applied on the target.
   *
   * @public
   */
  AppliedDdls?: number | undefined;

  /**
   * The number of rows added during the full load operation.
   *
   * @public
   */
  FullLoadRows?: number | undefined;

  /**
   * The number of rows that failed conditional checks during the full load operation (valid only for migrations where DynamoDB is the target).
   *
   * @public
   */
  FullLoadCondtnlChkFailedRows?: number | undefined;

  /**
   * The number of rows that failed to load during the full load operation (valid only for migrations where DynamoDB is the target).
   *
   * @public
   */
  FullLoadErrorRows?: number | undefined;

  /**
   * The time when the full load operation started.
   *
   * @public
   */
  FullLoadStartTime?: Date | undefined;

  /**
   * The time when the full load operation completed.
   *
   * @public
   */
  FullLoadEndTime?: Date | undefined;

  /**
   * A value that indicates if the table was reloaded (`true`) or loaded as part of a new full load operation (`false`).
   *
   * @public
   */
  FullLoadReloaded?: boolean | undefined;

  /**
   * The last time a table was updated.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * The state of the tables described.
   *
   * Valid states: Table does not exist | Before load | Full load | Table completed | Table cancelled | Table error | Table is being reloaded
   *
   * @public
   */
  TableState?: string | undefined;

  /**
   * The number of records that have yet to be validated.
   *
   * @public
   */
  ValidationPendingRecords?: number | undefined;

  /**
   * The number of records that failed validation.
   *
   * @public
   */
  ValidationFailedRecords?: number | undefined;

  /**
   * The number of records that couldn't be validated.
   *
   * @public
   */
  ValidationSuspendedRecords?: number | undefined;

  /**
   * The validation state of the table.
   *
   * This parameter can have the following values:
   *
   * - Not enabled – Validation isn't enabled for the table in the migration task.
   * - Pending records – Some records in the table are waiting for validation.
   * - Mismatched records – Some records in the table don't match between the source and target.
   * - Suspended records – Some records in the table couldn't be validated.
   * - No primary key –The table couldn't be validated because it has no primary key.
   * - Table error – The table wasn't validated because it's in an error state and some data wasn't migrated.
   * - Validated – All rows in the table are validated. If the table is updated, the status can change from Validated.
   * - Error – The table couldn't be validated because of an unexpected error.
   * - Pending validation – The table is waiting validation.
   * - Preparing table – Preparing the table enabled in the migration task for validation.
   * - Pending revalidation – All rows in the table are pending validation after the table was updated.
   *
   * @public
   */
  ValidationState?: string | undefined;

  /**
   * Additional details about the state of validation.
   *
   * @public
   */
  ValidationStateDetails?: string | undefined;

  /**
   * Records the current state of table resynchronization in the migration task.
   *
   * This parameter can have the following values:
   *
   * - Not enabled – Resync is not enabled for the table in the migration task.
   * - Pending – The tables are waiting for resync.
   * - In progress – Resync in progress for some records in the table.
   * - No primary key – The table could not be resynced because it has no primary key.
   * - Last resync at: `date/time` – Resync session is finished at time. Time provided in UTC format.
   *
   * @public
   */
  ResyncState?: string | undefined;

  /**
   * Records the total number of mismatched data rows where the system attempted to apply fixes in the target database.
   *
   * @public
   */
  ResyncRowsAttempted?: number | undefined;

  /**
   * Records the total number of mismatched data rows where fixes were successfully applied in the target database.
   *
   * @public
   */
  ResyncRowsSucceeded?: number | undefined;

  /**
   * Records the total number of mismatched data rows where fix attempts failed in the target database.
   *
   * @public
   */
  ResyncRowsFailed?: number | undefined;

  /**
   * Calculates the percentage of failed validations that were successfully resynced to the system.
   *
   * @public
   */
  ResyncProgress?: number | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationTableStatisticsResponse {
  /**
   * The Amazon Resource Name of the replication config.
   *
   * @public
   */
  ReplicationConfigArn?: string | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Returns table statistics on the replication, including table name, rows inserted, rows updated, and rows deleted.
   *
   * @public
   */
  ReplicationTableStatistics?: TableStatistics[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationTaskAssessmentResultsMessage {
  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the task. When this input parameter is specified, the API returns only one result and ignore the values of the `MaxRecords` and `Marker` parameters.
   *
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * The task assessment report in JSON format.
 *
 * @public
 */
export interface ReplicationTaskAssessmentResult {
  /**
   * The replication task identifier of the task on which the task assessment was run.
   *
   * @public
   */
  ReplicationTaskIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replication task.
   *
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * The date the task assessment was completed.
   *
   * @public
   */
  ReplicationTaskLastAssessmentDate?: Date | undefined;

  /**
   * The status of the task assessment.
   *
   * @public
   */
  AssessmentStatus?: string | undefined;

  /**
   * The file containing the results of the task assessment.
   *
   * @public
   */
  AssessmentResultsFile?: string | undefined;

  /**
   * The task assessment results in JSON format.
   *
   * The response object only contains this field if you provide DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn in the request.
   *
   * @public
   */
  AssessmentResults?: string | undefined;

  /**
   * The URL of the S3 object containing the task assessment results.
   *
   * The response object only contains this field if you provide DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn in the request.
   *
   * @public
   */
  S3ObjectUrl?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationTaskAssessmentResultsResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * - The Amazon S3 bucket where the task assessment report is located.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The task assessment report.
   *
   * @public
   */
  ReplicationTaskAssessmentResults?: ReplicationTaskAssessmentResult[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationTaskAssessmentRunsMessage {
  /**
   * Filters applied to the premigration assessment runs described in the form of key-value pairs.
   *
   * Valid filter names: `replication-task-assessment-run-arn`, `replication-task-arn`, `replication-instance-arn`, `status`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationTaskAssessmentRunsResponse {
  /**
   * A pagination token returned for you to pass to a subsequent request. If you pass this token as the `Marker` value in a subsequent request, the response includes only records beyond the marker, up to the value specified in the request by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * One or more premigration assessment runs as specified by `Filters`.
   *
   * @public
   */
  ReplicationTaskAssessmentRuns?: ReplicationTaskAssessmentRun[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationTaskIndividualAssessmentsMessage {
  /**
   * Filters applied to the individual assessments described in the form of key-value pairs.
   *
   * Valid filter names: `replication-task-assessment-run-arn`, `replication-task-arn`, `status`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Provides information that describes an individual assessment from a premigration assessment run.
 *
 * @public
 */
export interface ReplicationTaskIndividualAssessment {
  /**
   * Amazon Resource Name (ARN) of this individual assessment.
   *
   * @public
   */
  ReplicationTaskIndividualAssessmentArn?: string | undefined;

  /**
   * ARN of the premigration assessment run that is created to run this individual assessment.
   *
   * @public
   */
  ReplicationTaskAssessmentRunArn?: string | undefined;

  /**
   * Name of this individual assessment.
   *
   * @public
   */
  IndividualAssessmentName?: string | undefined;

  /**
   * Individual assessment status.
   *
   * This status can have one of the following values:
   *
   * - `"cancelled"`
   * - `"error"`
   * - `"failed"`
   * - `"passed"`
   * - `"pending"`
   * - `"skipped"`
   * - `"running"`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Date when this individual assessment was started as part of running the `StartReplicationTaskAssessmentRun` operation.
   *
   * @public
   */
  ReplicationTaskIndividualAssessmentStartDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationTaskIndividualAssessmentsResponse {
  /**
   * A pagination token returned for you to pass to a subsequent request. If you pass this token as the `Marker` value in a subsequent request, the response includes only records beyond the marker, up to the value specified in the request by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * One or more individual assessments as specified by `Filters`.
   *
   * @public
   */
  ReplicationTaskIndividualAssessments?: ReplicationTaskIndividualAssessment[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationTasksMessage {
  /**
   * Filters applied to replication tasks.
   *
   * Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose `true`; otherwise, choose `false` (the default).
   *
   * @public
   */
  WithoutSettings?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationTasksResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A description of the replication tasks.
   *
   * @public
   */
  ReplicationTasks?: ReplicationTask[] | undefined;
}

/**
 * @public
 */
export interface DescribeSchemasMessage {
  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
   *
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSchemasResponse {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The described schema.
   *
   * @public
   */
  Schemas?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeTableStatisticsMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication task.
   *
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 500.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Filters applied to table statistics.
   *
   * Valid filter names: schema-name | table-name | table-state
   *
   * A combination of filters creates an AND condition where each record matches all specified filters.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeTableStatisticsResponse {
  /**
   * The Amazon Resource Name (ARN) of the replication task.
   *
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * The table statistics.
   *
   * @public
   */
  TableStatistics?: TableStatistics[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ExportMetadataModelAssessmentMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * A JSON string that identifies the metadata models to export a conversion assessment report for. For the selection rule format and examples, see [Selection rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-selection-rules.html).
   *
   * Usage:
   *
   * - Accepts only source selection rules, where `server-name` in the object locator matches the source data provider.
   * - Supports only `explicit` rule actions.
   *
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * The name of the assessment file to create in your Amazon S3 bucket.
   *
   * @public
   */
  FileName?: string | undefined;

  /**
   * The file format of the assessment file.
   *
   * @public
   */
  AssessmentReportTypes?: AssessmentReportType[] | undefined;
}

/**
 * Provides information about an exported metadata model assessment.
 *
 * @public
 */
export interface ExportMetadataModelAssessmentResultEntry {
  /**
   * The object key for the object containing the exported metadata model assessment.
   *
   * @public
   */
  S3ObjectKey?: string | undefined;

  /**
   * The URL for the object containing the exported metadata model assessment.
   *
   * @public
   */
  ObjectURL?: string | undefined;
}

/**
 * @public
 */
export interface ExportMetadataModelAssessmentResponse {
  /**
   * The Amazon S3 details for an assessment exported in PDF format.
   *
   * @public
   */
  PdfReport?: ExportMetadataModelAssessmentResultEntry | undefined;

  /**
   * The Amazon S3 details for an assessment exported in CSV format.
   *
   * @public
   */
  CsvReport?: ExportMetadataModelAssessmentResultEntry | undefined;
}

/**
 * @public
 */
export interface GetTargetSelectionRulesMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * A JSON string that contains the source selection rules to convert into their target counterparts. For the selection rule format and examples, see [Selection rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-selection-rules.html).
   *
   * Usage:
   *
   * - Accepts only source selection rules, where `server-name` in the object locator matches the source data provider.
   * - Supports only `explicit` rule actions.
   * - Does not support `category-name` in the object locator.
   * - Up to 10 rules are allowed.
   *
   * @public
   */
  SelectionRules: string | undefined;
}

/**
 * @public
 */
export interface GetTargetSelectionRulesResponse {
  /**
   * The JSON string representing the counterpart selection rules in the target.
   *
   * @public
   */
  TargetSelectionRules?: string | undefined;
}

/**
 * @public
 */
export interface ImportCertificateMessage {
  /**
   * A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  CertificateIdentifier: string | undefined;

  /**
   * The contents of a `.pem` file, which contains an X.509 certificate.
   *
   * @public
   */
  CertificatePem?: string | undefined;

  /**
   * The location of an imported Oracle Wallet certificate for use with SSL. Provide the name of a `.sso` file using the `fileb://` prefix. You can't provide the certificate inline.
   *
   * Example: `filebase64("$\{path.root\}/rds-ca-2019-root.sso")`
   *
   * @public
   */
  CertificateWallet?: Uint8Array | undefined;

  /**
   * The tags associated with the certificate.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * An KMS key identifier that is used to encrypt the certificate.
   *
   * If you don't specify a value for the `KmsKeyId` parameter, then DMS uses your default encryption key.
   *
   * KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ImportCertificateResponse {
  /**
   * The certificate to be uploaded.
   *
   * @public
   */
  Certificate?: Certificate | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the DMS resource to list tags for. This returns a list of keys (names of tags) created for the resource and their associated tag values.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * List of ARNs that identify multiple DMS resources that you want to list tags for. This returns a list of keys (tag names) and their associated tag values. It also returns each tag's associated `ResourceArn` value, which is the ARN of the resource for which each listed tag is created.
   *
   * @public
   */
  ResourceArnList?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags for the resource.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ModifyConversionConfigurationMessage {
  /**
   * The migration project name or Amazon Resource Name (ARN).
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * A JSON string that contains the schema conversion settings to update. For the format and available settings, see [Specifying schema conversion settings for migration projects](https://docs.aws.amazon.com/dms/latest/userguide/schema-conversion-settings.html).
   *
   * Usage:
   *
   * - Include only the sections and keys to change. The operation merges supplied values with the existing configuration.
   *
   * @public
   */
  ConversionConfiguration: string | undefined;
}

/**
 * @public
 */
export interface ModifyConversionConfigurationResponse {
  /**
   * The name or Amazon Resource Name (ARN) of the modified configuration.
   *
   * @public
   */
  MigrationProjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDataMigrationMessage {
  /**
   * The identifier (name or ARN) of the data migration to modify.
   *
   * @public
   */
  DataMigrationIdentifier: string | undefined;

  /**
   * The new name for the data migration.
   *
   * @public
   */
  DataMigrationName?: string | undefined;

  /**
   * Whether to enable Cloudwatch logs for the data migration.
   *
   * @public
   */
  EnableCloudwatchLogs?: boolean | undefined;

  /**
   * The new service access role ARN for the data migration.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * The new migration type for the data migration.
   *
   * @public
   */
  DataMigrationType?: MigrationTypeValue | undefined;

  /**
   * The new information about the source data provider for the data migration.
   *
   * @public
   */
  SourceDataSettings?: SourceDataSetting[] | undefined;

  /**
   * The new information about the target data provider for the data migration.
   *
   * @public
   */
  TargetDataSettings?: TargetDataSetting[] | undefined;

  /**
   * The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.
   *
   * @public
   */
  NumberOfJobs?: number | undefined;

  /**
   * A JSON-formatted string that defines what objects to include and exclude from the migration.
   *
   * @public
   */
  SelectionRules?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDataMigrationResponse {
  /**
   * Information about the modified data migration.
   *
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * @public
 */
export interface ModifyDataProviderMessage {
  /**
   * The identifier of the data provider. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
   *
   * @public
   */
  DataProviderIdentifier: string | undefined;

  /**
   * The name of the data provider.
   *
   * @public
   */
  DataProviderName?: string | undefined;

  /**
   * A user-friendly description of the data provider.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of database engine for the data provider.
   *
   * Valid values: `aurora`, `aurora-postgresql`, `db2`, `db2-zos`, `docdb`, `mariadb`, `mongodb`, `mysql`, `oracle`, `postgres`, `redshift`, `sqlserver`, and `sybase`. A value of `aurora` represents Amazon Aurora MySQL-Compatible Edition.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Indicates whether the data provider is virtual.
   *
   * @public
   */
  Virtual?: boolean | undefined;

  /**
   * If this attribute is Y, the current call to `ModifyDataProvider` replaces all existing data provider settings with the exact settings that you specify in this call. If this attribute is N, the current call to `ModifyDataProvider` does two things:
   *
   * - It replaces any data provider settings that already exist with new values, for settings with the same names.
   * - It creates new data provider settings that you specify in the call, for settings with different names.
   *
   * @public
   */
  ExactSettings?: boolean | undefined;

  /**
   * The settings in JSON format for a data provider.
   *
   * @public
   */
  Settings?: DataProviderSettings | undefined;
}

/**
 * @public
 */
export interface ModifyDataProviderResponse {
  /**
   * The data provider that was modified.
   *
   * @public
   */
  DataProvider?: DataProvider | undefined;
}

/**
 * @public
 */
export interface ModifyEndpointMessage {
  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
   *
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  EndpointIdentifier?: string | undefined;

  /**
   * The type of endpoint. Valid values are `source` and `target`.
   *
   * @public
   */
  EndpointType?: ReplicationEndpointTypeValue | undefined;

  /**
   * The database engine name. Valid values, depending on the EndpointType, include `"mysql"`, `"oracle"`, `"postgres"`, `"mariadb"`, `"aurora"`, `"aurora-postgresql"`, `"redshift"`, `"s3"`, `"db2"`, `"db2-zos"`, `"azuredb"`, `"sybase"`, `"dynamodb"`, `"mongodb"`, `"kinesis"`, `"kafka"`, `"elasticsearch"`, `"documentdb"`, `"sqlserver"`, `"neptune"`, and `"babelfish"`.
   *
   * @public
   */
  EngineName?: string | undefined;

  /**
   * The user name to be used to login to the endpoint database.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The password to be used to login to the endpoint database.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The name of the server where the endpoint database resides.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The port used by the endpoint database.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Additional attributes associated with the connection. To reset this parameter, pass the empty string ("") as an argument.
   *
   * @public
   */
  ExtraConnectionAttributes?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The SSL mode used to connect to the endpoint. The default value is `none`.
   *
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role you want to use to modify the endpoint. The role must allow the `iam:PassRole` action.
   *
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * The external table definition.
   *
   * @public
   */
  ExternalTableDefinition?: string | undefined;

  /**
   * Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see [Using Object Mapping to Migrate Data to DynamoDB](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  DynamoDbSettings?: DynamoDbSettings | undefined;

  /**
   * Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see [Extra Connection Attributes When Using Amazon S3 as a Target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  S3Settings?: S3Settings | undefined;

  /**
   * The settings in JSON format for the DMS transfer type of source endpoint.
   *
   * Attributes include the following:
   *
   * - serviceAccessRoleArn - The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the `iam:PassRole` action.
   * - BucketName - The name of the S3 bucket to use.
   *
   * Shorthand syntax for these settings is as follows: `ServiceAccessRoleArn=string ,BucketName=string`
   *
   * JSON syntax for these settings is as follows: `\{ "ServiceAccessRoleArn": "string", "BucketName": "string"\}`
   *
   * @public
   */
  DmsTransferSettings?: DmsTransferSettings | undefined;

  /**
   * Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see the configuration properties section in [Endpoint configuration settings when using MongoDB as a source for Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  MongoDbSettings?: MongoDbSettings | undefined;

  /**
   * Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see [Using object mapping to migrate data to a Kinesis data stream](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  KinesisSettings?: KinesisSettings | undefined;

  /**
   * Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see [Using object mapping to migrate data to a Kafka topic](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  KafkaSettings?: KafkaSettings | undefined;

  /**
   * Settings in JSON format for the target OpenSearch endpoint. For more information about the available settings, see [Extra Connection Attributes When Using OpenSearch as a Target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  ElasticsearchSettings?: ElasticsearchSettings | undefined;

  /**
   * Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see [Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  NeptuneSettings?: NeptuneSettings | undefined;

  /**
   * Provides information that defines an Amazon Redshift endpoint.
   *
   * @public
   */
  RedshiftSettings?: RedshiftSettings | undefined;

  /**
   * Settings in JSON format for the source and target PostgreSQL endpoint. For information about other available settings, see [Extra connection attributes when using PostgreSQL as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib) and [Extra connection attributes when using PostgreSQL as a target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  PostgreSQLSettings?: PostgreSQLSettings | undefined;

  /**
   * Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see [Extra connection attributes when using MySQL as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib) and [Extra connection attributes when using a MySQL-compatible database as a target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  MySQLSettings?: MySQLSettings | undefined;

  /**
   * Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see [Extra connection attributes when using Oracle as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib) and [Extra connection attributes when using Oracle as a target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  OracleSettings?: OracleSettings | undefined;

  /**
   * Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see [Extra connection attributes when using SAP ASE as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib) and [Extra connection attributes when using SAP ASE as a target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  SybaseSettings?: SybaseSettings | undefined;

  /**
   * Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see [Extra connection attributes when using SQL Server as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib) and [Extra connection attributes when using SQL Server as a target for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings | undefined;

  /**
   * Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see [Extra connection attributes when using Db2 LUW as a source for DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  IBMDb2Settings?: IBMDb2Settings | undefined;

  /**
   * Settings in JSON format for the source DocumentDB endpoint. For more information about the available settings, see the configuration properties section in [Using DocumentDB as a Target for Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DocumentDB.html) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  DocDbSettings?: DocDbSettings | undefined;

  /**
   * Settings in JSON format for the Redis target endpoint.
   *
   * @public
   */
  RedisSettings?: RedisSettings | undefined;

  /**
   * If this attribute is Y, the current call to `ModifyEndpoint` replaces all existing endpoint settings with the exact settings that you specify in this call. If this attribute is N, the current call to `ModifyEndpoint` does two things:
   *
   * - It replaces any endpoint settings that already exist with new values, for settings with the same names.
   * - It creates new endpoint settings that you specify in the call, for settings with different names.
   *
   * For example, if you call `create-endpoint ... --endpoint-settings '\{"a":1\}' ...`, the endpoint has the following endpoint settings: `'\{"a":1\}'`. If you then call `modify-endpoint ... --endpoint-settings '\{"b":2\}' ...` for the same endpoint, the endpoint has the following settings: `'\{"a":1,"b":2\}'`.
   *
   * However, suppose that you follow this with a call to `modify-endpoint ... --endpoint-settings '\{"b":2\}' --exact-settings ...` for that same endpoint again. Then the endpoint has the following settings: `'\{"b":2\}'`. All existing settings are replaced with the exact settings that you specify.
   *
   * @public
   */
  ExactSettings?: boolean | undefined;

  /**
   * Settings in JSON format for the source GCP MySQL endpoint.
   *
   * @public
   */
  GcpMySQLSettings?: GcpMySQLSettings | undefined;

  /**
   * Settings in JSON format for the target Amazon Timestream endpoint.
   *
   * @public
   */
  TimestreamSettings?: TimestreamSettings | undefined;
}

/**
 * @public
 */
export interface ModifyEndpointResponse {
  /**
   * The modified endpoint.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * The name of the DMS event notification subscription to be modified.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The type of DMS resource that generates the events you want to subscribe to.
   *
   * Valid values: replication-instance | replication-task
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of event categories for a source type that you want to subscribe to. Use the `DescribeEventCategories` action to see a list of event categories.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * A Boolean value; set to **true** to activate the subscription.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionResponse {
  /**
   * The modified event subscription.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceProfileMessage {
  /**
   * The identifier of the instance profile. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
   *
   * @public
   */
  InstanceProfileIdentifier: string | undefined;

  /**
   * The Availability Zone where the instance profile runs.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that is used to encrypt the connection parameters for the instance profile.
   *
   * If you don't specify a value for the `KmsKeyArn` parameter, then DMS uses an Amazon Web Services owned encryption key to encrypt your resources.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * Specifies the accessibility options for the instance profile. A value of `true` represents an instance profile with a public IP address. A value of `false` represents an instance profile with a private IP address. The default value is `true`.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * Specifies the network type for the instance profile. A value of `IPV4` represents an instance profile with IPv4 network type and only supports IPv4 addressing. A value of `IPV6` represents an instance profile with IPv6 network type and only supports IPv6 addressing. A value of `DUAL` represents an instance profile with dual network type that supports IPv4 and IPv6 addressing.
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * A user-friendly name for the instance profile.
   *
   * @public
   */
  InstanceProfileName?: string | undefined;

  /**
   * A user-friendly description for the instance profile.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A subnet group to associate with the instance profile.
   *
   * @public
   */
  SubnetGroupIdentifier?: string | undefined;

  /**
   * Specifies the VPC security groups to be used with the instance profile. The VPC security group must work with the VPC containing the instance profile.
   *
   * @public
   */
  VpcSecurityGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceProfileResponse {
  /**
   * The instance profile that was modified.
   *
   * @public
   */
  InstanceProfile?: InstanceProfile | undefined;
}

/**
 * @public
 */
export interface ModifyMigrationProjectMessage {
  /**
   * The identifier of the migration project. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
   *
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * A user-friendly name for the migration project.
   *
   * @public
   */
  MigrationProjectName?: string | undefined;

  /**
   * Information about the source data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.
   *
   * @public
   */
  SourceDataProviderDescriptors?: DataProviderDescriptorDefinition[] | undefined;

  /**
   * Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.
   *
   * @public
   */
  TargetDataProviderDescriptors?: DataProviderDescriptorDefinition[] | undefined;

  /**
   * The name or Amazon Resource Name (ARN) for the instance profile.
   *
   * @public
   */
  InstanceProfileIdentifier?: string | undefined;

  /**
   * A JSON string that specifies the transformation rules for the migration project. Transformation rules let you customize how DMS Schema Conversion converts your source database objects, including renaming, adding prefixes or suffixes, and changing data types. For the transformation rule format and examples, see [Transformation rules in DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/sc-transformation-rules.html).
   *
   * > **Note:** Homogeneous data migrations do not support transformation rules.
   *
   * @public
   */
  TransformationRules?: string | undefined;

  /**
   * A user-friendly description of the migration project.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.
   *
   * @public
   */
  SchemaConversionApplicationAttributes?: SCApplicationAttributes | undefined;
}

/**
 * @public
 */
export interface ModifyMigrationProjectResponse {
  /**
   * The migration project that was modified.
   *
   * @public
   */
  MigrationProject?: MigrationProject | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationConfigMessage {
  /**
   * The Amazon Resource Name of the replication to modify.
   *
   * @public
   */
  ReplicationConfigArn: string | undefined;

  /**
   * The new replication config to apply to the replication.
   *
   * @public
   */
  ReplicationConfigIdentifier?: string | undefined;

  /**
   * The type of replication.
   *
   * @public
   */
  ReplicationType?: MigrationTypeValue | undefined;

  /**
   * Table mappings specified in the replication.
   *
   * @public
   */
  TableMappings?: string | undefined;

  /**
   * The settings for the replication.
   *
   * @public
   */
  ReplicationSettings?: string | undefined;

  /**
   * Additional settings for the replication.
   *
   * @public
   */
  SupplementalSettings?: string | undefined;

  /**
   * Configuration parameters for provisioning an DMS Serverless replication.
   *
   * @public
   */
  ComputeConfig?: ComputeConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source endpoint for this DMS serverless replication configuration.
   *
   * @public
   */
  SourceEndpointArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target endpoint for this DMS serverless replication configuration.
   *
   * @public
   */
  TargetEndpointArn?: string | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationConfigResponse {
  /**
   * Information about the serverless replication config that was modified.
   *
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationInstanceMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication instance.
   *
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * The amount of storage (in gigabytes) to be allocated for the replication instance.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * Indicates whether the changes should be applied immediately or during the next maintenance window.
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to `"dms.c4.large"`.
   *
   * For more information on the settings and capacities for the available replication instance classes, see [Selecting the right DMS replication instance for your migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth).
   *
   * @public
   */
  ReplicationInstanceClass?: string | undefined;

  /**
   * Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter does not result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.
   *
   * Default: Uses existing setting
   *
   * Format: ddd:hh24:mi-ddd:hh24:mi
   *
   * Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun
   *
   * Constraints: Must be at least 30 minutes
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Specifies whether the replication instance is a Multi-AZ deployment. You can't set the `AvailabilityZone` parameter if the Multi-AZ parameter is set to `true`.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The engine version number of the replication instance.
   *
   * When modifying a major engine version of an instance, also set `AllowMajorVersionUpgrade` to `true`.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible.
   *
   * This parameter must be set to `true` when specifying a value for the `EngineVersion` parameter that is a different major version than the replication instance's current version.
   *
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
   * A value that indicates that minor version upgrades are applied automatically to the replication instance during the maintenance window. Changing this parameter doesn't result in an outage, except in the case described following. The change is asynchronously applied as soon as possible.
   *
   * An outage does result if these factors apply:
   *
   * - This parameter is set to `true` during the maintenance window.
   * - A newer minor version is available.
   * - DMS has enabled automatic patching for the given engine version.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The replication instance identifier. This parameter is stored as a lowercase string.
   *
   * @public
   */
  ReplicationInstanceIdentifier?: string | undefined;

  /**
   * The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Specifies the settings required for kerberos authentication when modifying a replication instance.
   *
   * @public
   */
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationInstanceResponse {
  /**
   * The modified replication instance.
   *
   * @public
   */
  ReplicationInstance?: ReplicationInstance | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationSubnetGroupMessage {
  /**
   * The name of the replication instance subnet group.
   *
   * @public
   */
  ReplicationSubnetGroupIdentifier: string | undefined;

  /**
   * A description for the replication instance subnet group.
   *
   * @public
   */
  ReplicationSubnetGroupDescription?: string | undefined;

  /**
   * A list of subnet IDs.
   *
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationSubnetGroupResponse {
  /**
   * The modified replication subnet group.
   *
   * @public
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationTaskMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication task.
   *
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * The replication task identifier.
   *
   * Constraints:
   *
   * - Must contain 1-255 alphanumeric characters or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  ReplicationTaskIdentifier?: string | undefined;

  /**
   * The migration type. Valid values: `full-load` | `cdc` | `full-load-and-cdc`
   *
   * @public
   */
  MigrationType?: MigrationTypeValue | undefined;

  /**
   * When using the CLI or boto3, provide the path of the JSON file that contains the table mappings. Precede the path with `file://`. For example, `--table-mappings file://mappingfile.json`. When working with the DMS API, provide the JSON as the parameter value.
   *
   * @public
   */
  TableMappings?: string | undefined;

  /**
   * JSON file that contains settings for the task, such as task metadata settings.
   *
   * @public
   */
  ReplicationTaskSettings?: string | undefined;

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

  /**
   * Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see [Specifying Supplemental Data for Task Settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html) in the *Database Migration Service User Guide.*
   *
   * @public
   */
  TaskData?: string | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationTaskResponse {
  /**
   * The replication task that was modified.
   *
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * @public
 */
export interface MoveReplicationTaskMessage {
  /**
   * The Amazon Resource Name (ARN) of the task that you want to move.
   *
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * The ARN of the replication instance where you want to move the task to.
   *
   * @public
   */
  TargetReplicationInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface MoveReplicationTaskResponse {
  /**
   * The replication task that was moved.
   *
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * @public
 */
export interface RebootReplicationInstanceMessage {
  /**
   * The Amazon Resource Name (ARN) of the replication instance.
   *
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * If this parameter is `true`, the reboot is conducted through a Multi-AZ failover. If the instance isn't configured for Multi-AZ, then you can't specify `true`. ( `--force-planned-failover` and `--force-failover` can't both be set to `true`.)
   *
   * @public
   */
  ForceFailover?: boolean | undefined;

  /**
   * If this parameter is `true`, the reboot is conducted through a planned Multi-AZ failover where resources are released and cleaned up prior to conducting the failover. If the instance isn''t configured for Multi-AZ, then you can't specify `true`. ( `--force-planned-failover` and `--force-failover` can't both be set to `true`.)
   *
   * @public
   */
  ForcePlannedFailover?: boolean | undefined;
}
