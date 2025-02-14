// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DatabaseMigrationServiceServiceException as __BaseException } from "./DatabaseMigrationServiceServiceException";

/**
 * <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 * @public
 */
export class AccessDeniedFault extends __BaseException {
  readonly name: "AccessDeniedFault" = "AccessDeniedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedFault, __BaseException>) {
    super({
      name: "AccessDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedFault.prototype);
  }
}

/**
 * <p>Describes a quota for an Amazon Web Services account, for example the number of replication instances
 *          allowed.</p>
 * @public
 */
export interface AccountQuota {
  /**
   * <p>The name of the DMS quota for this Amazon Web Services account.</p>
   * @public
   */
  AccountQuotaName?: string | undefined;

  /**
   * <p>The amount currently used toward the quota maximum.</p>
   * @public
   */
  Used?: number | undefined;

  /**
   * <p>The maximum allowed value for the quota.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>A user-defined key-value pair that describes metadata added to an DMS resource and
 *          that is used by operations such as the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AddTagsToResource</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTagsForResource</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RemoveTagsFromResource</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Tag {
  /**
   * <p>A key is the required name of the tag. The string value can be 1-128 Unicode characters
   *          in length and can't be prefixed with "aws:" or "dms:". The string can only contain
   *          only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java
   *          regular expressions: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>A value is the optional value of the tag. The string value can be 1-256 Unicode
   *          characters in length and can't be prefixed with "aws:" or "dms:". The string can only
   *          contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-'
   *          (Java regular expressions: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the resource for which
   *          the tag is created.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * <p>Associates a set of tags with an DMS resource.</p>
 * @public
 */
export interface AddTagsToResourceMessage {
  /**
   * <p>Identifies the DMS resource to which tags should be added. The value for this
   *          parameter is an Amazon Resource Name (ARN).</p>
   *          <p>For DMS, you can tag a replication instance, an endpoint, or a replication
   *          task.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags to be assigned to the resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AddTagsToResourceResponse {}

/**
 * <p>The resource is in a state that prevents it from being used for database migration.</p>
 * @public
 */
export class InvalidResourceStateFault extends __BaseException {
  readonly name: "InvalidResourceStateFault" = "InvalidResourceStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateFault, __BaseException>) {
    super({
      name: "InvalidResourceStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateFault.prototype);
  }
}

/**
 * <p>The resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundFault extends __BaseException {
  readonly name: "ResourceNotFoundFault" = "ResourceNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundFault, __BaseException>) {
    super({
      name: "ResourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundFault.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action
   *          applies to.</p>
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   *          <p>Valid values: <code>os-upgrade</code>, <code>system-update</code>,
   *             <code>db-upgrade</code>, <code>os-patch</code>
   *          </p>
   * @public
   */
  ApplyAction: string | undefined;

  /**
   * <p>A value that specifies the type of opt-in request, or undoes an opt-in request. You
   *          can't undo an opt-in request of type <code>immediate</code>.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>immediate</code> - Apply the maintenance action immediately.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>next-maintenance</code> - Apply the maintenance action during the next
   *                maintenance window for the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in
   *                requests.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OptInType: string | undefined;
}

/**
 * <p>Describes a maintenance action pending for an DMS resource, including when and how it
 *          will be applied. This data type is a response element to the
 *             <code>DescribePendingMaintenanceActions</code> operation.</p>
 * @public
 */
export interface PendingMaintenanceAction {
  /**
   * <p>The type of pending maintenance action that is available for the resource.</p>
   * @public
   */
  Action?: string | undefined;

  /**
   * <p>The date of the maintenance window when the action is to be applied. The maintenance
   *          action is applied to the resource during its first maintenance window after this date. If
   *          this date is specified, any <code>next-maintenance</code> opt-in requests are
   *          ignored.</p>
   * @public
   */
  AutoAppliedAfterDate?: Date | undefined;

  /**
   * <p>The date when the maintenance action will be automatically applied. The maintenance
   *          action is applied to the resource on this date regardless of the maintenance window for the
   *          resource. If this date is specified, any <code>immediate</code> opt-in requests are
   *          ignored.</p>
   * @public
   */
  ForcedApplyDate?: Date | undefined;

  /**
   * <p>The type of opt-in request that has been received for the resource.</p>
   * @public
   */
  OptInStatus?: string | undefined;

  /**
   * <p>The effective date when the pending maintenance action will be applied to the resource.
   *          This date takes into account opt-in requests received from the
   *             <code>ApplyPendingMaintenanceAction</code> API operation, and also the
   *             <code>AutoAppliedAfterDate</code> and <code>ForcedApplyDate</code> parameter values.
   *          This value is blank if an opt-in request has not been received and nothing has been
   *          specified for <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.</p>
   * @public
   */
  CurrentApplyDate?: Date | undefined;

  /**
   * <p>A description providing more detail about the maintenance action.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Identifies an DMS resource and any pending actions for it.</p>
 * @public
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * <p>The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action
   *          applies to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.AWS.ARN.html"> Constructing an Amazon
   *             Resource Name (ARN) for DMS</a> in the DMS documentation.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>Detailed information about the pending maintenance action.</p>
   * @public
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ApplyPendingMaintenanceActionResponse {
  /**
   * <p>The DMS resource that the pending maintenance action will be applied to.</p>
   * @public
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions | undefined;
}

/**
 * <p>Provides information about the required target engine settings.</p>
 * @public
 */
export interface RecommendationSettings {
  /**
   * <p>The size of your target instance. Fleet Advisor calculates this value based on your
   *             data collection type, such as total capacity and resource utilization. Valid values
   *             include <code>"total-capacity"</code> and <code>"utilization"</code>.</p>
   * @public
   */
  InstanceSizingType: string | undefined;

  /**
   * <p>The deployment option for your target engine. For production databases, Fleet Advisor
   *             chooses Multi-AZ deployment. For development or test databases, Fleet Advisor chooses
   *             Single-AZ deployment. Valid values include <code>"development"</code> and
   *                 <code>"production"</code>.</p>
   * @public
   */
  WorkloadType: string | undefined;
}

/**
 * <p>Provides information about the source database to analyze and provide target
 *             recommendations according to the specified requirements.</p>
 * @public
 */
export interface StartRecommendationsRequestEntry {
  /**
   * <p>The identifier of the source database.</p>
   * @public
   */
  DatabaseId: string | undefined;

  /**
   * <p>The required target engine settings.</p>
   * @public
   */
  Settings: RecommendationSettings | undefined;
}

/**
 * @public
 */
export interface BatchStartRecommendationsRequest {
  /**
   * <p>Provides information about source databases to analyze. After this analysis, Fleet
   *             Advisor recommends target engines for each source database.</p>
   * @public
   */
  Data?: StartRecommendationsRequestEntry[] | undefined;
}

/**
 * <p>Provides information about the errors that occurred during the analysis of the source
 *             database.</p>
 * @public
 */
export interface BatchStartRecommendationsErrorEntry {
  /**
   * <p>The identifier of the source database.</p>
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * <p>The information about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The code of an error that occurred during the analysis of the source database.</p>
   * @public
   */
  Code?: string | undefined;
}

/**
 * @public
 */
export interface BatchStartRecommendationsResponse {
  /**
   * <p>A list with error details about the analysis of each source database.</p>
   * @public
   */
  ErrorEntries?: BatchStartRecommendationsErrorEntry[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CancelReplicationTaskAssessmentRunMessage {
  /**
   * <p>Amazon Resource Name (ARN) of the premigration assessment run to be canceled.</p>
   * @public
   */
  ReplicationTaskAssessmentRunArn: string | undefined;
}

/**
 * <p>The progress values reported by the <code>AssessmentProgress</code> response
 *          element.</p>
 * @public
 */
export interface ReplicationTaskAssessmentRunProgress {
  /**
   * <p>The number of individual assessments that are specified to run.</p>
   * @public
   */
  IndividualAssessmentCount?: number | undefined;

  /**
   * <p>The number of individual assessments that have completed, successfully or not.</p>
   * @public
   */
  IndividualAssessmentCompletedCount?: number | undefined;
}

/**
 * <p>The object containing the result statistics for a completed assessment run.</p>
 * @public
 */
export interface ReplicationTaskAssessmentRunResultStatistic {
  /**
   * <p>The number of individual assessments that successfully passed all checks in the assessment run.</p>
   * @public
   */
  Passed?: number | undefined;

  /**
   * <p>The number of individual assessments that failed to meet the criteria defined in the assessment run.</p>
   * @public
   */
  Failed?: number | undefined;

  /**
   * <p>The number of individual assessments that encountered a critical error and could not complete properly.</p>
   * @public
   */
  Error?: number | undefined;

  /**
   * <p>Indicates that the recent completed AssessmentRun triggered a warning.</p>
   * @public
   */
  Warning?: number | undefined;

  /**
   * <p>
   *          The number of individual assessments that were cancelled during the assessment run.
   *       </p>
   * @public
   */
  Cancelled?: number | undefined;
}

/**
 * <p>Provides information that describes a premigration assessment run that you have started
 *          using the <code>StartReplicationTaskAssessmentRun</code> operation.</p>
 *          <p>Some of the information appears based on other operations that can return the
 *             <code>ReplicationTaskAssessmentRun</code> object.</p>
 * @public
 */
export interface ReplicationTaskAssessmentRun {
  /**
   * <p>Amazon Resource Name (ARN) of this assessment run.</p>
   * @public
   */
  ReplicationTaskAssessmentRunArn?: string | undefined;

  /**
   * <p>ARN of the migration task associated with this premigration assessment run.</p>
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * <p>Assessment run status. </p>
   *          <p>This status can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"cancelling"</code> – The assessment run was canceled by the
   *                   <code>CancelReplicationTaskAssessmentRun</code> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"deleting"</code> – The assessment run was deleted by the
   *                   <code>DeleteReplicationTaskAssessmentRun</code> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"failed"</code> – At least one individual assessment completed with a
   *                   <code>failed</code> status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"error-provisioning"</code> – An internal error occurred while
   *                resources were provisioned (during <code>provisioning</code> status).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"error-executing"</code> – An internal error occurred while
   *                individual assessments ran (during <code>running</code> status).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"invalid state"</code> – The assessment run is in an unknown
   *                state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"passed"</code> – All individual assessments have completed, and none
   *                has a <code>failed</code> status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"provisioning"</code> – Resources required to run individual
   *                assessments are being provisioned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"running"</code> – Individual assessments are being run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"starting"</code> – The assessment run is starting, but resources are
   *                not yet being provisioned for individual assessments.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"warning"</code> – At least one individual assessment completed with
   *                a <code>warning</code> status.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Date on which the assessment run was created using the
   *             <code>StartReplicationTaskAssessmentRun</code> operation.</p>
   * @public
   */
  ReplicationTaskAssessmentRunCreationDate?: Date | undefined;

  /**
   * <p>Indication of the completion progress for the individual assessments specified to
   *          run.</p>
   * @public
   */
  AssessmentProgress?: ReplicationTaskAssessmentRunProgress | undefined;

  /**
   * <p>Last message generated by an individual assessment failure.</p>
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * <p>ARN of the service role used to start the assessment run using the
   *             <code>StartReplicationTaskAssessmentRun</code> operation. The role must allow the
   *             <code>iam:PassRole</code> action.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p>Amazon S3 bucket where DMS stores the results of this assessment run.</p>
   * @public
   */
  ResultLocationBucket?: string | undefined;

  /**
   * <p>Folder in an Amazon S3 bucket where DMS stores the results of this assessment
   *          run.</p>
   * @public
   */
  ResultLocationFolder?: string | undefined;

  /**
   * <p>Encryption mode used to encrypt the assessment run results.</p>
   * @public
   */
  ResultEncryptionMode?: string | undefined;

  /**
   * <p>ARN of the KMS encryption key used to encrypt the assessment run results.</p>
   * @public
   */
  ResultKmsKeyArn?: string | undefined;

  /**
   * <p>Unique name of the assessment run.</p>
   * @public
   */
  AssessmentRunName?: string | undefined;

  /**
   * <p>Indicates that the following PreflightAssessmentRun is the latest for the ReplicationTask. The status is either true or false.</p>
   * @public
   */
  IsLatestTaskAssessmentRun?: boolean | undefined;

  /**
   * <p>
   *          Result statistics for a completed assessment run, showing aggregated statistics of IndividualAssessments for how many assessments were passed, failed, or encountered issues such as errors or warnings.
   *       </p>
   * @public
   */
  ResultStatistic?: ReplicationTaskAssessmentRunResultStatistic | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CancelReplicationTaskAssessmentRunResponse {
  /**
   * <p>The <code>ReplicationTaskAssessmentRun</code> object for the canceled assessment
   *          run.</p>
   * @public
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun | undefined;
}

/**
 * @public
 * @enum
 */
export const MigrationTypeValue = {
  CDC: "cdc",
  FULL_LOAD: "full-load",
  FULL_LOAD_AND_CDC: "full-load-and-cdc",
} as const;

/**
 * @public
 */
export type MigrationTypeValue = (typeof MigrationTypeValue)[keyof typeof MigrationTypeValue];

/**
 * <p>Defines settings for a source data provider for a data migration.</p>
 * @public
 */
export interface SourceDataSetting {
  /**
   * <p>The change data capture (CDC) start position for the source data provider.</p>
   * @public
   */
  CDCStartPosition?: string | undefined;

  /**
   * <p>The change data capture (CDC) start time for the source data provider.</p>
   * @public
   */
  CDCStartTime?: Date | undefined;

  /**
   * <p>The change data capture (CDC) stop time for the source data provider.</p>
   * @public
   */
  CDCStopTime?: Date | undefined;

  /**
   * <p>The name of the replication slot on the source data provider. This attribute is only
   *          valid for a PostgreSQL or Aurora PostgreSQL source.</p>
   * @public
   */
  SlotName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TablePreparationMode = {
  DO_NOTHING: "do-nothing",
  DROP_TABLES_ON_TARGET: "drop-tables-on-target",
  TRUNCATE: "truncate",
} as const;

/**
 * @public
 */
export type TablePreparationMode = (typeof TablePreparationMode)[keyof typeof TablePreparationMode];

/**
 * <p>Defines settings for a target data provider for a data migration.</p>
 * @public
 */
export interface TargetDataSetting {
  /**
   * <p>This setting determines how DMS handles the target tables before starting a data
   *          migration, either by leaving them untouched, dropping and recreating them, or truncating
   *          the existing data in the target tables.</p>
   * @public
   */
  TablePreparationMode?: TablePreparationMode | undefined;
}

/**
 * @public
 */
export interface CreateDataMigrationMessage {
  /**
   * <p>A user-friendly name for the data migration. Data migration names have the following
   *          constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must begin with a letter, and can only contain ASCII letters, digits, and hyphens.
   *             </p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Length must be from 1 to 255 characters.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DataMigrationName?: string | undefined;

  /**
   * <p>An identifier for the migration project.</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>Specifies if the data migration is full-load only, change data capture (CDC) only, or
   *          full-load and CDC.</p>
   * @public
   */
  DataMigrationType: MigrationTypeValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the service access role that you want to use to
   *          create the data migration.</p>
   * @public
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * <p>Specifies whether to enable CloudWatch logs for the data migration.</p>
   * @public
   */
  EnableCloudwatchLogs?: boolean | undefined;

  /**
   * <p>Specifies information about the source data provider.</p>
   * @public
   */
  SourceDataSettings?: SourceDataSetting[] | undefined;

  /**
   * <p>Specifies information about the target data provider.</p>
   * @public
   */
  TargetDataSettings?: TargetDataSetting[] | undefined;

  /**
   * <p>The number of parallel jobs that trigger parallel threads to unload the tables from the
   *          source, and then load them to the target.</p>
   * @public
   */
  NumberOfJobs?: number | undefined;

  /**
   * <p>One or more tags to be assigned to the data migration.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>An optional JSON string specifying what tables, views, and schemas to include or exclude
   *          from the migration.</p>
   * @public
   */
  SelectionRules?: string | undefined;
}

/**
 * <p>Options for configuring a data migration, including whether to enable CloudWatch logs,
 *          and the selection rules to use to include or exclude database objects from the
 *          migration.</p>
 * @public
 */
export interface DataMigrationSettings {
  /**
   * <p>The number of parallel jobs that trigger parallel threads to unload the tables from the
   *          source, and then load them to the target.</p>
   * @public
   */
  NumberOfJobs?: number | undefined;

  /**
   * <p>Whether to enable CloudWatch logging for the data migration.</p>
   * @public
   */
  CloudwatchLogsEnabled?: boolean | undefined;

  /**
   * <p>A JSON-formatted string that defines what objects to include and exclude from the
   *          migration.</p>
   * @public
   */
  SelectionRules?: string | undefined;
}

/**
 * <p>Information about the data migration run, including start and stop time, latency, and
 *          migration progress.</p>
 * @public
 */
export interface DataMigrationStatistics {
  /**
   * <p>The number of tables loaded in the current data migration run.</p>
   * @public
   */
  TablesLoaded?: number | undefined;

  /**
   * <p>The elapsed duration of the data migration run.</p>
   * @public
   */
  ElapsedTimeMillis?: number | undefined;

  /**
   * <p>The data migration's table loading progress.</p>
   * @public
   */
  TablesLoading?: number | undefined;

  /**
   * <p>The data migration's progress in the full-load migration phase.</p>
   * @public
   */
  FullLoadPercentage?: number | undefined;

  /**
   * <p>The current latency of the change data capture (CDC) operation.</p>
   * @public
   */
  CDCLatency?: number | undefined;

  /**
   * <p>The number of tables that are waiting for processing.</p>
   * @public
   */
  TablesQueued?: number | undefined;

  /**
   * <p>The number of tables that DMS failed to process.</p>
   * @public
   */
  TablesErrored?: number | undefined;

  /**
   * <p>The time when the migration started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time when the migration stopped or failed.</p>
   * @public
   */
  StopTime?: Date | undefined;
}

/**
 * <p>This object provides information about a DMS data migration.</p>
 * @public
 */
export interface DataMigration {
  /**
   * <p>The user-friendly name for the data migration.</p>
   * @public
   */
  DataMigrationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies this replication.</p>
   * @public
   */
  DataMigrationArn?: string | undefined;

  /**
   * <p>The UTC time when DMS created the data migration.</p>
   * @public
   */
  DataMigrationCreateTime?: Date | undefined;

  /**
   * <p>The UTC time when DMS started the data migration.</p>
   * @public
   */
  DataMigrationStartTime?: Date | undefined;

  /**
   * <p>The UTC time when data migration ended.</p>
   * @public
   */
  DataMigrationEndTime?: Date | undefined;

  /**
   * <p>The IAM role that the data migration uses to access Amazon Web Services resources.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data migration's associated migration
   *          project.</p>
   * @public
   */
  MigrationProjectArn?: string | undefined;

  /**
   * <p>Specifies whether the data migration is full-load only, change data capture (CDC) only,
   *          or full-load and CDC.</p>
   * @public
   */
  DataMigrationType?: MigrationTypeValue | undefined;

  /**
   * <p>Specifies CloudWatch settings and selection rules for the data migration.</p>
   * @public
   */
  DataMigrationSettings?: DataMigrationSettings | undefined;

  /**
   * <p>Specifies information about the data migration's source data provider.</p>
   * @public
   */
  SourceDataSettings?: SourceDataSetting[] | undefined;

  /**
   * <p>Specifies information about the data migration's target data provider.</p>
   * @public
   */
  TargetDataSettings?: TargetDataSetting[] | undefined;

  /**
   * <p>Provides information about the data migration's run, including start and stop time,
   *          latency, and data migration progress.</p>
   * @public
   */
  DataMigrationStatistics?: DataMigrationStatistics | undefined;

  /**
   * <p>The current status of the data migration. </p>
   * @public
   */
  DataMigrationStatus?: string | undefined;

  /**
   * <p>The IP addresses of the endpoints for the data migration.</p>
   * @public
   */
  PublicIpAddresses?: string[] | undefined;

  /**
   * <p>The CIDR blocks of the endpoints for the data migration.</p>
   * @public
   */
  DataMigrationCidrBlocks?: string[] | undefined;

  /**
   * <p>Information about the data migration's most recent error or failure.</p>
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * <p>The reason the data migration last stopped.</p>
   * @public
   */
  StopReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataMigrationResponse {
  /**
   * <p>Information about the created data migration.</p>
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * <p>A dependency threw an exception.</p>
 * @public
 */
export class FailedDependencyFault extends __BaseException {
  readonly name: "FailedDependencyFault" = "FailedDependencyFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FailedDependencyFault, __BaseException>) {
    super({
      name: "FailedDependencyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FailedDependencyFault.prototype);
  }
}

/**
 * <p>The action or operation requested isn't valid.</p>
 * @public
 */
export class InvalidOperationFault extends __BaseException {
  readonly name: "InvalidOperationFault" = "InvalidOperationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationFault, __BaseException>) {
    super({
      name: "InvalidOperationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationFault.prototype);
  }
}

/**
 * <p>The resource you are attempting to create already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsFault extends __BaseException {
  readonly name: "ResourceAlreadyExistsFault" = "ResourceAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * <p></p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsFault, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsFault.prototype);
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * <p>The quota for this resource quota has been exceeded.</p>
 * @public
 */
export class ResourceQuotaExceededFault extends __BaseException {
  readonly name: "ResourceQuotaExceededFault" = "ResourceQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceQuotaExceededFault, __BaseException>) {
    super({
      name: "ResourceQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceQuotaExceededFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const DmsSslModeValue = {
  NONE: "none",
  REQUIRE: "require",
  VERIFY_CA: "verify-ca",
  VERIFY_FULL: "verify-full",
} as const;

/**
 * @public
 */
export type DmsSslModeValue = (typeof DmsSslModeValue)[keyof typeof DmsSslModeValue];

/**
 * <p>Provides information that defines a DocumentDB data provider.</p>
 * @public
 */
export interface DocDbDataProviderSettings {
  /**
   * <p>The name of the source DocumentDB server.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port value for the DocumentDB data provider.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The database name on the DocumentDB data provider.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The SSL mode used to connect to the DocumentDB data provider.
   *          The default value is <code>none</code>.</p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * <p>Provides information about an IBM DB2 LUW data provider.</p>
 * @public
 */
export interface IbmDb2LuwDataProviderSettings {
  /**
   * <p>The name of the DB2 LUW server.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port value for the DB2 LUW data provider.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The database name on the DB2 LUW data provider.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The SSL mode used to connect to the DB2 LUW data provider.
   *          The default value is <code>none</code>. Valid Values: <code>none</code> and <code>verify-ca</code>.</p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * <p>Provides information about an IBM DB2 for z/OS data provider.</p>
 * @public
 */
export interface IbmDb2zOsDataProviderSettings {
  /**
   * <p>The name of the DB2 for z/OS server.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port value for the DB2 for z/OS data provider.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The database name on the DB2 for z/OS data provider.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The SSL mode used to connect to the DB2 for z/OS data provider.
   *          The default value is <code>none</code>. Valid Values: <code>none</code> and <code>verify-ca</code>.</p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * <p>Provides information that defines a MariaDB data provider.</p>
 * @public
 */
export interface MariaDbDataProviderSettings {
  /**
   * <p>The name of the MariaDB server.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port value for the MariaDB data provider</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The SSL mode used to connect to the MariaDB data provider.
   *          The default value is <code>none</code>.</p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * <p>Provides information that defines a Microsoft SQL Server data provider.</p>
 * @public
 */
export interface MicrosoftSqlServerDataProviderSettings {
  /**
   * <p>The name of the Microsoft SQL Server server.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port value for the Microsoft SQL Server data provider.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The database name on the Microsoft SQL Server data provider.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The SSL mode used to connect to the Microsoft SQL Server data provider.
   *          The default value is <code>none</code>.</p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthMechanismValue = {
  DEFAULT: "default",
  MONGODB_CR: "mongodb_cr",
  SCRAM_SHA_1: "scram_sha_1",
} as const;

/**
 * @public
 */
export type AuthMechanismValue = (typeof AuthMechanismValue)[keyof typeof AuthMechanismValue];

/**
 * @public
 * @enum
 */
export const AuthTypeValue = {
  NO: "no",
  PASSWORD: "password",
} as const;

/**
 * @public
 */
export type AuthTypeValue = (typeof AuthTypeValue)[keyof typeof AuthTypeValue];

/**
 * <p>Provides information that defines a MongoDB data provider.</p>
 * @public
 */
export interface MongoDbDataProviderSettings {
  /**
   * <p>The name of the MongoDB server.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port value for the MongoDB data provider.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The database name on the MongoDB data provider.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The SSL mode used to connect to the MongoDB data provider.
   *          The default value is <code>none</code>.</p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The authentication type for the database connection. Valid values are PASSWORD or NO.</p>
   * @public
   */
  AuthType?: AuthTypeValue | undefined;

  /**
   * <p> The MongoDB database name. This setting isn't used when <code>AuthType</code> is
   *          set to <code>"no"</code>. </p>
   *          <p>The default is <code>"admin"</code>.</p>
   * @public
   */
  AuthSource?: string | undefined;

  /**
   * <p>The authentication method for connecting to the data provider. Valid values are DEFAULT, MONGODB_CR, or SCRAM_SHA_1.</p>
   * @public
   */
  AuthMechanism?: AuthMechanismValue | undefined;
}

/**
 * <p>Provides information that defines a MySQL data provider.</p>
 * @public
 */
export interface MySqlDataProviderSettings {
  /**
   * <p>The name of the MySQL server.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port value for the MySQL data provider.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The SSL mode used to connect to the MySQL data provider.
   *          The default value is <code>none</code>.</p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * <p>Provides information that defines an Oracle data provider.</p>
 * @public
 */
export interface OracleDataProviderSettings {
  /**
   * <p>The name of the Oracle server.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port value for the Oracle data provider.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The database name on the Oracle data provider.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The SSL mode used to connect to the Oracle data provider.
   *          The default value is <code>none</code>.</p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The address of your Oracle Automatic Storage Management (ASM) server. You can set
   *          this value from the <code>asm_server</code> value. You set <code>asm_server</code> as part
   *          of the extra connection attribute string to access an Oracle server with Binary Reader that
   *          uses ASM. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source database</a>.</p>
   * @public
   */
  AsmServer?: string | undefined;

  /**
   * <p>The identifier of the secret in Secrets Manager that contains the Oracle ASM connection details.</p>
   *          <p>Required only if your data provider uses the Oracle ASM server.</p>
   * @public
   */
  SecretsManagerOracleAsmSecretId?: string | undefined;

  /**
   * <p>The ARN of the IAM role that provides access to the secret in Secrets Manager
   *          that contains the Oracle ASM connection details.</p>
   * @public
   */
  SecretsManagerOracleAsmAccessRoleArn?: string | undefined;

  /**
   * <p>The identifier of the secret in Secrets Manager that contains the transparent data encryption (TDE)
   *          password. DMS requires this password to access Oracle redo logs encrypted by TDE
   *          using Binary Reader.</p>
   * @public
   */
  SecretsManagerSecurityDbEncryptionSecretId?: string | undefined;

  /**
   * <p>The ARN of the IAM role that provides access to the secret in Secrets Manager
   *          that contains the TDE password.</p>
   * @public
   */
  SecretsManagerSecurityDbEncryptionAccessRoleArn?: string | undefined;
}

/**
 * <p>Provides information that defines a PostgreSQL data provider.</p>
 * @public
 */
export interface PostgreSqlDataProviderSettings {
  /**
   * <p>The name of the PostgreSQL server.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port value for the PostgreSQL data provider.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The database name on the PostgreSQL data provider.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The SSL mode used to connect to the PostgreSQL data provider.
   *          The default value is <code>none</code>.</p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * <p>Provides information that defines an Amazon Redshift data provider.</p>
 * @public
 */
export interface RedshiftDataProviderSettings {
  /**
   * <p>The name of the Amazon Redshift server.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port value for the Amazon Redshift data provider.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The database name on the Amazon Redshift data provider.</p>
   * @public
   */
  DatabaseName?: string | undefined;
}

/**
 * <p>Provides information that defines a data provider.</p>
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
  | DataProviderSettings.$UnknownMember;

/**
 * @public
 */
export namespace DataProviderSettings {
  /**
   * <p>Provides information that defines an Amazon Redshift data provider.</p>
   * @public
   */
  export interface RedshiftSettingsMember {
    RedshiftSettings: RedshiftDataProviderSettings;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information that defines a PostgreSQL data provider.</p>
   * @public
   */
  export interface PostgreSqlSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings: PostgreSqlDataProviderSettings;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information that defines a MySQL data provider.</p>
   * @public
   */
  export interface MySqlSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings: MySqlDataProviderSettings;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information that defines an Oracle data provider.</p>
   * @public
   */
  export interface OracleSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings: OracleDataProviderSettings;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information that defines a Microsoft SQL Server data provider.</p>
   * @public
   */
  export interface MicrosoftSqlServerSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings: MicrosoftSqlServerDataProviderSettings;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information that defines a DocumentDB data provider.</p>
   * @public
   */
  export interface DocDbSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings: DocDbDataProviderSettings;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information that defines a MariaDB data provider.</p>
   * @public
   */
  export interface MariaDbSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings: MariaDbDataProviderSettings;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information that defines an IBM DB2 LUW data provider.</p>
   * @public
   */
  export interface IbmDb2LuwSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings: IbmDb2LuwDataProviderSettings;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information that defines an IBM DB2 for z/OS data provider.</p>
   * @public
   */
  export interface IbmDb2zOsSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings: IbmDb2zOsDataProviderSettings;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information that defines a MongoDB data provider.</p>
   * @public
   */
  export interface MongoDbSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
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
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    IbmDb2LuwSettings?: never;
    IbmDb2zOsSettings?: never;
    MongoDbSettings?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    RedshiftSettings: (value: RedshiftDataProviderSettings) => T;
    PostgreSqlSettings: (value: PostgreSqlDataProviderSettings) => T;
    MySqlSettings: (value: MySqlDataProviderSettings) => T;
    OracleSettings: (value: OracleDataProviderSettings) => T;
    MicrosoftSqlServerSettings: (value: MicrosoftSqlServerDataProviderSettings) => T;
    DocDbSettings: (value: DocDbDataProviderSettings) => T;
    MariaDbSettings: (value: MariaDbDataProviderSettings) => T;
    IbmDb2LuwSettings: (value: IbmDb2LuwDataProviderSettings) => T;
    IbmDb2zOsSettings: (value: IbmDb2zOsDataProviderSettings) => T;
    MongoDbSettings: (value: MongoDbDataProviderSettings) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataProviderSettings, visitor: Visitor<T>): T => {
    if (value.RedshiftSettings !== undefined) return visitor.RedshiftSettings(value.RedshiftSettings);
    if (value.PostgreSqlSettings !== undefined) return visitor.PostgreSqlSettings(value.PostgreSqlSettings);
    if (value.MySqlSettings !== undefined) return visitor.MySqlSettings(value.MySqlSettings);
    if (value.OracleSettings !== undefined) return visitor.OracleSettings(value.OracleSettings);
    if (value.MicrosoftSqlServerSettings !== undefined)
      return visitor.MicrosoftSqlServerSettings(value.MicrosoftSqlServerSettings);
    if (value.DocDbSettings !== undefined) return visitor.DocDbSettings(value.DocDbSettings);
    if (value.MariaDbSettings !== undefined) return visitor.MariaDbSettings(value.MariaDbSettings);
    if (value.IbmDb2LuwSettings !== undefined) return visitor.IbmDb2LuwSettings(value.IbmDb2LuwSettings);
    if (value.IbmDb2zOsSettings !== undefined) return visitor.IbmDb2zOsSettings(value.IbmDb2zOsSettings);
    if (value.MongoDbSettings !== undefined) return visitor.MongoDbSettings(value.MongoDbSettings);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateDataProviderMessage {
  /**
   * <p>A user-friendly name for the data provider.</p>
   * @public
   */
  DataProviderName?: string | undefined;

  /**
   * <p>A user-friendly description of the data provider.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of database engine for the data provider. Valid values include <code>"aurora"</code>,
   *          <code>"aurora-postgresql"</code>, <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          <code>"sqlserver"</code>, <code>redshift</code>, <code>mariadb</code>, <code>mongodb</code>, <code>db2</code>, <code>db2-zos</code> and <code>docdb</code>. A value of <code>"aurora"</code> represents Amazon Aurora MySQL-Compatible Edition.</p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The settings in JSON format for a data provider.</p>
   * @public
   */
  Settings: DataProviderSettings | undefined;

  /**
   * <p>One or more tags to be assigned to the data provider.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Provides information that defines a data provider.</p>
 * @public
 */
export interface DataProvider {
  /**
   * <p>The name of the data provider.</p>
   * @public
   */
  DataProviderName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the data provider.</p>
   * @public
   */
  DataProviderArn?: string | undefined;

  /**
   * <p>The time the data provider was created.</p>
   * @public
   */
  DataProviderCreationTime?: Date | undefined;

  /**
   * <p>A description of the data provider. Descriptions can have up to 31 characters.
   *          A description can contain only ASCII letters, digits, and hyphens ('-'). Also, it can't
   *          end with a hyphen or contain two consecutive hyphens, and can only begin with a letter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of database engine for the data provider. Valid values include <code>"aurora"</code>,
   *          <code>"aurora-postgresql"</code>, <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          <code>"sqlserver"</code>, <code>redshift</code>, <code>mariadb</code>, <code>mongodb</code>, <code>db2</code>, <code>db2-zos</code> and <code>docdb</code>. A value of <code>"aurora"</code> represents Amazon Aurora MySQL-Compatible Edition.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The settings in JSON format for a data provider.</p>
   * @public
   */
  Settings?: DataProviderSettings | undefined;
}

/**
 * @public
 */
export interface CreateDataProviderResponse {
  /**
   * <p>The data provider that was created.</p>
   * @public
   */
  DataProvider?: DataProvider | undefined;
}

/**
 * <p> The settings in JSON format for the DMS Transfer type source endpoint. </p>
 * @public
 */
export interface DmsTransferSettings {
  /**
   * <p>The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow
   *          the <code>iam:PassRole</code> action.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p> The name of the S3 bucket to use. </p>
   * @public
   */
  BucketName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NestingLevelValue = {
  NONE: "none",
  ONE: "one",
} as const;

/**
 * @public
 */
export type NestingLevelValue = (typeof NestingLevelValue)[keyof typeof NestingLevelValue];

/**
 * <p>Provides information that defines a DocumentDB endpoint.</p>
 * @public
 */
export interface DocDbSettings {
  /**
   * <p>The user name you use to access the DocumentDB source endpoint. </p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p> The password for the user account you use to access the DocumentDB source endpoint.
   *       </p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p> The name of the server on the DocumentDB source endpoint. </p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p> The port value for the DocumentDB source endpoint. </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p> The database name on the DocumentDB source endpoint. </p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p> Specifies either document or table mode. </p>
   *          <p>Default value is <code>"none"</code>. Specify <code>"none"</code> to use document mode.
   *          Specify <code>"one"</code> to use table mode.</p>
   * @public
   */
  NestingLevel?: NestingLevelValue | undefined;

  /**
   * <p> Specifies the document ID. Use this setting when <code>NestingLevel</code> is set to
   *             <code>"none"</code>. </p>
   *          <p>Default value is <code>"false"</code>. </p>
   * @public
   */
  ExtractDocId?: boolean | undefined;

  /**
   * <p> Indicates the number of documents to preview to determine the document organization.
   *          Use this setting when <code>NestingLevel</code> is set to <code>"one"</code>. </p>
   *          <p>Must be a positive value greater than <code>0</code>. Default value is
   *          <code>1000</code>.</p>
   * @public
   */
  DocsToInvestigate?: number | undefined;

  /**
   * <p>The KMS key identifier that is used to encrypt the content on the replication
   *          instance. If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS
   *          uses your default encryption key. KMS creates the default encryption key for your
   *          Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each
   *          Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted
   *          entity and grants the required permissions to access the value in
   *             <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code>
   *          action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that
   *          allows access to the DocumentDB endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the
   *                <i>Database Migration Service User Guide</i>.</p>
   *          </note>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the DocumentDB endpoint connection details.</p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * <p>If <code>true</code>, DMS retrieves the entire document from the DocumentDB source during migration.
   *          This may cause a migration failure if the server response exceeds bandwidth limits. To fetch only updates
   *          and deletes during migration, set this parameter to <code>false</code>.</p>
   * @public
   */
  UseUpdateLookUp?: boolean | undefined;

  /**
   * <p>If <code>true</code>, DMS replicates data to shard collections. DMS only uses this
   *          setting if the target endpoint is a DocumentDB elastic cluster.</p>
   *          <p>When this setting is <code>true</code>, note the following:</p>
   *          <ul>
   *             <li>
   *                <p>You must set <code>TargetTablePrepMode</code> to <code>nothing</code>.</p>
   *             </li>
   *             <li>
   *                <p>DMS automatically sets <code>useUpdateLookup</code> to
   *                <code>false</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ReplicateShardCollections?: boolean | undefined;
}

/**
 * <p>Provides the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to define an
 *          Amazon DynamoDB target endpoint.</p>
 * @public
 */
export interface DynamoDbSettings {
  /**
   * <p> The Amazon Resource Name (ARN) used by the service to access the IAM role. The role
   *          must allow the <code>iam:PassRole</code> action.</p>
   * @public
   */
  ServiceAccessRoleArn: string | undefined;
}

/**
 * <p>Provides information that defines an OpenSearch endpoint.</p>
 * @public
 */
export interface ElasticsearchSettings {
  /**
   * <p>The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must
   *          allow the <code>iam:PassRole</code> action.</p>
   * @public
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * <p>The endpoint for the OpenSearch cluster. DMS uses HTTPS if a transport
   *          protocol (http/https) is not specified.</p>
   * @public
   */
  EndpointUri: string | undefined;

  /**
   * <p>The maximum percentage of records that can fail to be written before a full load
   *          operation stops.</p>
   *          <p>To avoid early failure, this counter is only effective after 1000 records are
   *          transferred. OpenSearch also has the concept of error monitoring during the
   *          last 10 minutes of an Observation Window. If transfer of all records fail in the last 10
   *          minutes, the full load operation stops. </p>
   * @public
   */
  FullLoadErrorPercentage?: number | undefined;

  /**
   * <p>The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.</p>
   * @public
   */
  ErrorRetryDuration?: number | undefined;

  /**
   * <p>Set this option to <code>true</code> for DMS to migrate documentation using the
   *          documentation type <code>_doc</code>. OpenSearch and an Elasticsearch cluster only support
   *          the _doc documentation type in versions 7. x and later. The default value is
   *             <code>false</code>.</p>
   * @public
   */
  UseNewMappingType?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicationEndpointTypeValue = {
  SOURCE: "source",
  TARGET: "target",
} as const;

/**
 * @public
 */
export type ReplicationEndpointTypeValue =
  (typeof ReplicationEndpointTypeValue)[keyof typeof ReplicationEndpointTypeValue];

/**
 * @public
 * @enum
 */
export const TargetDbType = {
  MULTIPLE_DATABASES: "multiple-databases",
  SPECIFIC_DATABASE: "specific-database",
} as const;

/**
 * @public
 */
export type TargetDbType = (typeof TargetDbType)[keyof typeof TargetDbType];

/**
 * <p>Settings in JSON format for the source GCP MySQL endpoint.</p>
 * @public
 */
export interface GcpMySQLSettings {
  /**
   * <p>Specifies a script to run immediately after DMS connects to the endpoint.
   *          The migration task continues running regardless if the SQL statement succeeds or
   *          fails.</p>
   *          <p>For this parameter, provide the code of the script itself, not the name of a file
   *          containing the script. </p>
   * @public
   */
  AfterConnectScript?: string | undefined;

  /**
   * <p>Cleans and recreates table metadata information on the replication instance when a
   *          mismatch occurs. For example, in a situation where running an alter DDL on the table could
   *          result in different information about the table cached in the replication instance. </p>
   * @public
   */
  CleanSourceMetadataOnMismatch?: boolean | undefined;

  /**
   * <p>Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly
   *          specify the database using the <code>DatabaseName</code> request parameter on either the
   *             <code>CreateEndpoint</code> or <code>ModifyEndpoint</code> API call. Specifying
   *             <code>DatabaseName</code> when you create or modify a MySQL endpoint replicates all the
   *          task tables to this single database. For MySQL endpoints, you specify the database only
   *          when you specify the schema in the table-mapping rules of the DMS task.
   *       </p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Specifies how often to check the binary log for new changes/events when the database is
   *          idle. The default is five seconds.</p>
   *          <p>Example: <code>eventsPollInterval=5;</code>
   *          </p>
   *          <p>In the example, DMS checks for changes in the binary logs every five
   *          seconds. </p>
   * @public
   */
  EventsPollInterval?: number | undefined;

  /**
   * <p>Specifies where to migrate source tables on the target, either to a single database or
   *          multiple databases.</p>
   *          <p>Example: <code>targetDbType=MULTIPLE_DATABASES</code>
   *          </p>
   * @public
   */
  TargetDbType?: TargetDbType | undefined;

  /**
   * <p>Specifies the maximum size (in KB) of any .csv file used to transfer data to a
   *          MySQL-compatible database.</p>
   *          <p>Example: <code>maxFileSize=512</code>
   *          </p>
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * <p>Improves performance when loading data into the MySQL-compatible target database.
   *          Specifies how many threads to use to load the data into the MySQL-compatible target
   *          database. Setting a large number of threads can have an adverse effect on database
   *          performance, because a separate connection is required for each thread. The default is
   *          one.</p>
   *          <p>Example: <code>parallelLoadThreads=1</code>
   *          </p>
   * @public
   */
  ParallelLoadThreads?: number | undefined;

  /**
   * <p>Endpoint connection password.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>Endpoint TCP port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The MySQL host name.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>Specifies the time zone for the source MySQL database.</p>
   *          <p>Example: <code>serverTimezone=US/Pacific;</code>
   *          </p>
   *          <p>Note: Do not enclose time zones in single quotes.</p>
   * @public
   */
  ServerTimezone?: string | undefined;

  /**
   * <p>Endpoint connection user name.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as
   *          the trusted entity and grants the required permissions to access the value in
   *             <code>SecretsManagerSecret.</code> The role must allow the <code>iam:PassRole</code>
   *          action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets
   *          Manager secret that allows access to the MySQL endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a>
   *             in the Database Migration Service User Guide. </p>
   *          </note>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the MySQL endpoint connection details. </p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;
}

/**
 * <p>Provides information that defines an IBM Db2 LUW endpoint.</p>
 * @public
 */
export interface IBMDb2Settings {
  /**
   * <p>Database name for the endpoint.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Endpoint connection password.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>Endpoint TCP port. The default value is 50000.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Fully qualified domain name of the endpoint.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>Enables ongoing replication (CDC) as a BOOLEAN value. The default is true.</p>
   * @public
   */
  SetDataCaptureChanges?: boolean | undefined;

  /**
   * <p>For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN)
   *          where you want the replication to start.</p>
   * @public
   */
  CurrentLsn?: string | undefined;

  /**
   * <p>Maximum number of bytes per read, as a NUMBER value. The default is 64 KB.</p>
   * @public
   */
  MaxKBytesPerRead?: number | undefined;

  /**
   * <p>Endpoint connection user name.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted
   *          entity and grants the required permissions to access the value in
   *             <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code>
   *          action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that
   *          allows access to the Db2 LUW endpoint. </p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the
   *                <i>Database Migration Service User Guide</i>.</p>
   *          </note>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the Db2 LUW endpoint connection details.</p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * <p>The amount of time (in milliseconds) before DMS times out operations performed by DMS
   *          on the Db2 target. The default value is 1200 (20 minutes).</p>
   * @public
   */
  LoadTimeout?: number | undefined;

  /**
   * <p>The size (in KB) of the in-memory file write buffer used when generating .csv files on
   *          the local disk on the DMS replication instance. The default value is 1024 (1 MB).</p>
   * @public
   */
  WriteBufferSize?: number | undefined;

  /**
   * <p>Specifies the maximum size (in KB) of .csv files used to transfer data to Db2
   *          LUW.</p>
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * <p>If true, DMS saves any .csv files to the Db2 LUW target that were used to replicate
   *          data. DMS uses these files for analysis and troubleshooting.</p>
   *          <p>The default value is false. </p>
   * @public
   */
  KeepCsvFiles?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const MessageFormatValue = {
  JSON: "json",
  JSON_UNFORMATTED: "json-unformatted",
} as const;

/**
 * @public
 */
export type MessageFormatValue = (typeof MessageFormatValue)[keyof typeof MessageFormatValue];

/**
 * @public
 * @enum
 */
export const KafkaSaslMechanism = {
  PLAIN: "plain",
  SCRAM_SHA_512: "scram-sha-512",
} as const;

/**
 * @public
 */
export type KafkaSaslMechanism = (typeof KafkaSaslMechanism)[keyof typeof KafkaSaslMechanism];

/**
 * @public
 * @enum
 */
export const KafkaSecurityProtocol = {
  PLAINTEXT: "plaintext",
  SASL_SSL: "sasl-ssl",
  SSL_AUTHENTICATION: "ssl-authentication",
  SSL_ENCRYPTION: "ssl-encryption",
} as const;

/**
 * @public
 */
export type KafkaSecurityProtocol = (typeof KafkaSecurityProtocol)[keyof typeof KafkaSecurityProtocol];

/**
 * @public
 * @enum
 */
export const KafkaSslEndpointIdentificationAlgorithm = {
  HTTPS: "https",
  NONE: "none",
} as const;

/**
 * @public
 */
export type KafkaSslEndpointIdentificationAlgorithm =
  (typeof KafkaSslEndpointIdentificationAlgorithm)[keyof typeof KafkaSslEndpointIdentificationAlgorithm];

/**
 * <p>Provides information that describes an Apache Kafka endpoint. This information includes
 *          the output format of records applied to the endpoint and details of transaction and control
 *          table data information.</p>
 * @public
 */
export interface KafkaSettings {
  /**
   * <p>A comma-separated list of one or more broker locations in your Kafka cluster that host
   *          your Kafka instance. Specify each broker location in the form
   *                <code>
   *                <i>broker-hostname-or-ip</i>:<i>port</i>
   *             </code>.
   *          For example, <code>"ec2-12-345-678-901.compute-1.amazonaws.com:2345"</code>. For more
   *          information and examples of specifying a list of broker locations, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html">Using Apache
   *             Kafka as a target for Database Migration Service</a> in the <i>Database Migration Service User
   *          Guide</i>. </p>
   * @public
   */
  Broker?: string | undefined;

  /**
   * <p>The topic to which you migrate the data. If you don't specify a topic, DMS
   *          specifies <code>"kafka-default-topic"</code> as the migration topic.</p>
   * @public
   */
  Topic?: string | undefined;

  /**
   * <p>The output format for the records created on the endpoint. The message format is
   *             <code>JSON</code> (default) or <code>JSON_UNFORMATTED</code> (a single line with no
   *          tab).</p>
   * @public
   */
  MessageFormat?: MessageFormatValue | undefined;

  /**
   * <p>Provides detailed transaction information from the source database. This information
   *          includes a commit timestamp, a log position, and values for <code>transaction_id</code>,
   *          previous <code>transaction_id</code>, and <code>transaction_record_id</code> (the record
   *          offset within a transaction). The default is <code>false</code>.</p>
   * @public
   */
  IncludeTransactionDetails?: boolean | undefined;

  /**
   * <p>Shows the partition value within the Kafka message output unless the partition type is
   *             <code>schema-table-type</code>. The default is <code>false</code>.</p>
   * @public
   */
  IncludePartitionValue?: boolean | undefined;

  /**
   * <p>Prefixes schema and table names to partition values, when the partition type is
   *             <code>primary-key-type</code>. Doing this increases data distribution among Kafka
   *          partitions. For example, suppose that a SysBench schema has thousands of tables and each
   *          table has only limited range for a primary key. In this case, the same primary key is sent
   *          from thousands of tables to the same partition, which causes throttling. The default is
   *             <code>false</code>.</p>
   * @public
   */
  PartitionIncludeSchemaTable?: boolean | undefined;

  /**
   * <p>Includes any data definition language (DDL) operations that change the table in the
   *          control data, such as <code>rename-table</code>, <code>drop-table</code>,
   *             <code>add-column</code>, <code>drop-column</code>, and <code>rename-column</code>. The
   *          default is <code>false</code>.</p>
   * @public
   */
  IncludeTableAlterOperations?: boolean | undefined;

  /**
   * <p>Shows detailed control information for table definition, column definition, and table
   *          and column changes in the Kafka message output. The default is <code>false</code>.</p>
   * @public
   */
  IncludeControlDetails?: boolean | undefined;

  /**
   * <p>The maximum size in bytes for records created on the endpoint The default is
   *          1,000,000.</p>
   * @public
   */
  MessageMaxBytes?: number | undefined;

  /**
   * <p>Include NULL and empty columns for records migrated to the endpoint. The default is
   *             <code>false</code>.</p>
   * @public
   */
  IncludeNullAndEmpty?: boolean | undefined;

  /**
   * <p>Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS).
   *          Options include <code>ssl-encryption</code>, <code>ssl-authentication</code>, and
   *             <code>sasl-ssl</code>. <code>sasl-ssl</code> requires <code>SaslUsername</code> and
   *             <code>SaslPassword</code>.</p>
   * @public
   */
  SecurityProtocol?: KafkaSecurityProtocol | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the client certificate used to securely connect to a
   *          Kafka target endpoint.</p>
   * @public
   */
  SslClientCertificateArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the client private key used to securely connect to a
   *          Kafka target endpoint.</p>
   * @public
   */
  SslClientKeyArn?: string | undefined;

  /**
   * <p> The password for the client private key used to securely connect to a Kafka target
   *          endpoint.</p>
   * @public
   */
  SslClientKeyPassword?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that
   *          DMS uses to securely connect to your Kafka target endpoint.</p>
   * @public
   */
  SslCaCertificateArn?: string | undefined;

  /**
   * <p> The secure user name you created when you first set up your MSK cluster to validate a
   *          client identity and make an encrypted connection between server and client using SASL-SSL
   *          authentication.</p>
   * @public
   */
  SaslUsername?: string | undefined;

  /**
   * <p>The secure password you created when you first set up your MSK cluster to validate a
   *          client identity and make an encrypted connection between server and client using SASL-SSL
   *          authentication.</p>
   * @public
   */
  SaslPassword?: string | undefined;

  /**
   * <p>Set this optional parameter to <code>true</code> to avoid adding a '0x' prefix
   *          to raw data in hexadecimal format. For example, by default, DMS adds a '0x'
   *          prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka
   *          target. Use the <code>NoHexPrefix</code> endpoint setting to enable migration of RAW data
   *          type columns without adding the '0x' prefix.</p>
   * @public
   */
  NoHexPrefix?: boolean | undefined;

  /**
   * <p>For SASL/SSL authentication, DMS supports the <code>SCRAM-SHA-512</code> mechanism by
   *          default. DMS versions 3.5.0 and later also support the <code>PLAIN</code> mechanism. To
   *          use the <code>PLAIN</code> mechanism, set this parameter to <code>PLAIN.</code>
   *          </p>
   * @public
   */
  SaslMechanism?: KafkaSaslMechanism | undefined;

  /**
   * <p>Sets hostname verification for the certificate. This setting is supported in DMS
   *          version 3.5.1 and later. </p>
   * @public
   */
  SslEndpointIdentificationAlgorithm?: KafkaSslEndpointIdentificationAlgorithm | undefined;

  /**
   * <p>Specifies using the large integer value with Kafka.</p>
   * @public
   */
  UseLargeIntegerValue?: boolean | undefined;
}

/**
 * <p>Provides information that describes an Amazon Kinesis Data Stream endpoint. This
 *          information includes the output format of records applied to the endpoint and details of
 *          transaction and control table data information.</p>
 * @public
 */
export interface KinesisSettings {
  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.</p>
   * @public
   */
  StreamArn?: string | undefined;

  /**
   * <p>The output format for the records created on the endpoint. The message format is
   *             <code>JSON</code> (default) or <code>JSON_UNFORMATTED</code> (a single line with no
   *          tab).</p>
   * @public
   */
  MessageFormat?: MessageFormatValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that DMS uses to write to the Kinesis
   *          data stream. The role must allow the <code>iam:PassRole</code> action.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p>Provides detailed transaction information from the source database. This information
   *          includes a commit timestamp, a log position, and values for <code>transaction_id</code>,
   *          previous <code>transaction_id</code>, and <code>transaction_record_id</code> (the record
   *          offset within a transaction). The default is <code>false</code>.</p>
   * @public
   */
  IncludeTransactionDetails?: boolean | undefined;

  /**
   * <p>Shows the partition value within the Kinesis message output, unless the partition type
   *          is <code>schema-table-type</code>. The default is <code>false</code>.</p>
   * @public
   */
  IncludePartitionValue?: boolean | undefined;

  /**
   * <p>Prefixes schema and table names to partition values, when the partition type is
   *             <code>primary-key-type</code>. Doing this increases data distribution among Kinesis
   *          shards. For example, suppose that a SysBench schema has thousands of tables and each table
   *          has only limited range for a primary key. In this case, the same primary key is sent from
   *          thousands of tables to the same shard, which causes throttling. The default is
   *             <code>false</code>.</p>
   * @public
   */
  PartitionIncludeSchemaTable?: boolean | undefined;

  /**
   * <p>Includes any data definition language (DDL) operations that change the table in the
   *          control data, such as <code>rename-table</code>, <code>drop-table</code>,
   *             <code>add-column</code>, <code>drop-column</code>, and <code>rename-column</code>. The
   *          default is <code>false</code>.</p>
   * @public
   */
  IncludeTableAlterOperations?: boolean | undefined;

  /**
   * <p>Shows detailed control information for table definition, column definition, and table
   *          and column changes in the Kinesis message output. The default is <code>false</code>.</p>
   * @public
   */
  IncludeControlDetails?: boolean | undefined;

  /**
   * <p>Include NULL and empty columns for records migrated to the endpoint. The default is
   *             <code>false</code>.</p>
   * @public
   */
  IncludeNullAndEmpty?: boolean | undefined;

  /**
   * <p>Set this optional parameter to <code>true</code> to avoid adding a '0x' prefix
   *          to raw data in hexadecimal format. For example, by default, DMS adds a '0x'
   *          prefix to the LOB column type in hexadecimal format moving from an Oracle source to an
   *          Amazon Kinesis target. Use the <code>NoHexPrefix</code> endpoint setting to enable
   *          migration of RAW data type columns without adding the '0x' prefix.</p>
   * @public
   */
  NoHexPrefix?: boolean | undefined;

  /**
   * <p>Specifies using the large integer value with Kinesis.</p>
   * @public
   */
  UseLargeIntegerValue?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const SqlServerAuthenticationMethod = {
  Kerberos: "kerberos",
  Password: "password",
} as const;

/**
 * @public
 */
export type SqlServerAuthenticationMethod =
  (typeof SqlServerAuthenticationMethod)[keyof typeof SqlServerAuthenticationMethod];

/**
 * @public
 * @enum
 */
export const SafeguardPolicy = {
  EXCLUSIVE_AUTOMATIC_TRUNCATION: "exclusive-automatic-truncation",
  RELY_ON_SQL_SERVER_REPLICATION_AGENT: "rely-on-sql-server-replication-agent",
  SHARED_AUTOMATIC_TRUNCATION: "shared-automatic-truncation",
} as const;

/**
 * @public
 */
export type SafeguardPolicy = (typeof SafeguardPolicy)[keyof typeof SafeguardPolicy];

/**
 * @public
 * @enum
 */
export const TlogAccessMode = {
  BackupOnly: "BackupOnly",
  PreferBackup: "PreferBackup",
  PreferTlog: "PreferTlog",
  TlogOnly: "TlogOnly",
} as const;

/**
 * @public
 */
export type TlogAccessMode = (typeof TlogAccessMode)[keyof typeof TlogAccessMode];

/**
 * <p>Provides information that defines a Microsoft SQL Server endpoint.</p>
 * @public
 */
export interface MicrosoftSQLServerSettings {
  /**
   * <p>Endpoint TCP port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The maximum size of the packets (in bytes) used to transfer data using BCP.</p>
   * @public
   */
  BcpPacketSize?: number | undefined;

  /**
   * <p>Database name for the endpoint.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Specifies a file group for the DMS internal tables. When the replication task starts,
   *          all the internal DMS control tables (awsdms_ apply_exception, awsdms_apply,
   *          awsdms_changes) are created for the specified file group.</p>
   * @public
   */
  ControlTablesFileGroup?: string | undefined;

  /**
   * <p>Endpoint connection password.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>Cleans and recreates table metadata information on the replication instance when a
   *          mismatch occurs. An example is a situation where running an alter DDL statement on a table
   *          might result in different information about the table cached in the replication
   *          instance.</p>
   * @public
   */
  QuerySingleAlwaysOnNode?: boolean | undefined;

  /**
   * <p>When this attribute is set to <code>Y</code>, DMS only reads changes from transaction
   *          log backups and doesn't read from the active transaction log file during ongoing
   *          replication. Setting this parameter to <code>Y</code> enables you to control active
   *          transaction log file growth during full load and ongoing replication tasks. However, it can
   *          add some source latency to ongoing replication.</p>
   * @public
   */
  ReadBackupOnly?: boolean | undefined;

  /**
   * <p>Use this attribute to minimize the need to access the backup log and enable DMS to
   *          prevent truncation using one of the following two methods.</p>
   *          <p>
   *             <i>Start transactions in the database:</i> This is the default method.
   *          When this method is used, DMS prevents TLOG truncation by mimicking a transaction in the
   *          database. As long as such a transaction is open, changes that appear after the transaction
   *          started aren't truncated. If you need Microsoft Replication to be enabled in your database,
   *          then you must choose this method.</p>
   *          <p>
   *             <i>Exclusively use sp_repldone within a single task</i>: When this method
   *          is used, DMS reads the changes and then uses sp_repldone to mark the TLOG transactions as
   *          ready for truncation. Although this method doesn't involve any transactional activities, it
   *          can only be used when Microsoft Replication isn't running. Also, when using this method,
   *          only one DMS task can access the database at any given time. Therefore, if you need to
   *          run parallel DMS tasks against the same database, use the default method.</p>
   * @public
   */
  SafeguardPolicy?: SafeguardPolicy | undefined;

  /**
   * <p>Fully qualified domain name of the endpoint. For an Amazon RDS SQL Server instance, this is
   *          the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>, in the <code>
   *                <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>Endpoint connection user name.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>Use this to attribute to transfer data for full-load operations using BCP. When the
   *          target table contains an identity column that does not exist in the source table, you must
   *          disable the use BCP for loading table option.</p>
   * @public
   */
  UseBcpFullLoad?: boolean | undefined;

  /**
   * <p>When this attribute is set to <code>Y</code>, DMS processes third-party transaction log
   *          backups if they are created in native format.</p>
   * @public
   */
  UseThirdPartyBackupDevice?: boolean | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted
   *          entity and grants the required permissions to access the value in
   *             <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code>
   *          action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that
   *          allows access to the SQL Server endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the
   *                <i>Database Migration Service User Guide</i>.</p>
   *          </note>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the SQL Server endpoint connection details.</p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * <p>Use the <code>TrimSpaceInChar</code> source endpoint setting to right-trim data on CHAR
   *          and NCHAR data types during migration. Setting <code>TrimSpaceInChar</code> does not
   *          left-trim data. The default value is <code>true</code>.</p>
   * @public
   */
  TrimSpaceInChar?: boolean | undefined;

  /**
   * <p>Indicates the mode used to fetch CDC data.</p>
   * @public
   */
  TlogAccessMode?: TlogAccessMode | undefined;

  /**
   * <p>Forces LOB lookup on inline LOB.</p>
   * @public
   */
  ForceLobLookup?: boolean | undefined;

  /**
   * <p>Specifies the authentication method to be used with Microsoft SQL Server.</p>
   * @public
   */
  AuthenticationMethod?: SqlServerAuthenticationMethod | undefined;
}

/**
 * <p>Provides information that defines a MongoDB endpoint.</p>
 * @public
 */
export interface MongoDbSettings {
  /**
   * <p>The user name you use to access the MongoDB source endpoint. </p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p> The password for the user account you use to access the MongoDB source endpoint.
   *       </p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p> The name of the server on the MongoDB source endpoint. For MongoDB Atlas, provide the
   *          server name for any of the servers in the replication set.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p> The port value for the MongoDB source endpoint. </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p> The database name on the MongoDB source endpoint. </p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p> The authentication type you use to access the MongoDB source endpoint.</p>
   *          <p>When when set to <code>"no"</code>, user name and password parameters are not used and
   *          can be empty. </p>
   * @public
   */
  AuthType?: AuthTypeValue | undefined;

  /**
   * <p> The authentication mechanism you use to access the MongoDB source endpoint.</p>
   *          <p>For the default value, in MongoDB version 2.x, <code>"default"</code> is
   *             <code>"mongodb_cr"</code>. For MongoDB version 3.x or later, <code>"default"</code> is
   *             <code>"scram_sha_1"</code>. This setting isn't used when <code>AuthType</code> is
   *          set to <code>"no"</code>.</p>
   * @public
   */
  AuthMechanism?: AuthMechanismValue | undefined;

  /**
   * <p> Specifies either document or table mode. </p>
   *          <p>Default value is <code>"none"</code>. Specify <code>"none"</code> to use document mode.
   *          Specify <code>"one"</code> to use table mode.</p>
   * @public
   */
  NestingLevel?: NestingLevelValue | undefined;

  /**
   * <p> Specifies the document ID. Use this setting when <code>NestingLevel</code> is set to
   *             <code>"none"</code>. </p>
   *          <p>Default value is <code>"false"</code>. </p>
   * @public
   */
  ExtractDocId?: string | undefined;

  /**
   * <p> Indicates the number of documents to preview to determine the document organization.
   *          Use this setting when <code>NestingLevel</code> is set to <code>"one"</code>. </p>
   *          <p>Must be a positive value greater than <code>0</code>. Default value is
   *          <code>1000</code>.</p>
   * @public
   */
  DocsToInvestigate?: string | undefined;

  /**
   * <p> The MongoDB database name. This setting isn't used when <code>AuthType</code> is
   *          set to <code>"no"</code>. </p>
   *          <p>The default is <code>"admin"</code>.</p>
   * @public
   */
  AuthSource?: string | undefined;

  /**
   * <p>The KMS key identifier that is used to encrypt the content on the replication
   *          instance. If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS
   *          uses your default encryption key. KMS creates the default encryption key for your
   *          Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each
   *          Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted
   *          entity and grants the required permissions to access the value in
   *             <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code>
   *          action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that
   *          allows access to the MongoDB endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the
   *                <i>Database Migration Service User Guide</i>.</p>
   *          </note>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the MongoDB endpoint connection details.</p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * <p>If <code>true</code>, DMS retrieves the entire document from the MongoDB source during migration.
   *          This may cause a migration failure if the server response exceeds bandwidth limits. To fetch only updates
   *          and deletes during migration, set this parameter to <code>false</code>.</p>
   * @public
   */
  UseUpdateLookUp?: boolean | undefined;

  /**
   * <p>If <code>true</code>, DMS replicates data to shard collections. DMS only uses this
   *          setting if the target endpoint is a DocumentDB elastic cluster.</p>
   *          <p>When this setting is <code>true</code>, note the following:</p>
   *          <ul>
   *             <li>
   *                <p>You must set <code>TargetTablePrepMode</code> to <code>nothing</code>.</p>
   *             </li>
   *             <li>
   *                <p>DMS automatically sets <code>useUpdateLookup</code> to
   *                <code>false</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ReplicateShardCollections?: boolean | undefined;
}

/**
 * <p>Provides information that defines a MySQL endpoint.</p>
 * @public
 */
export interface MySQLSettings {
  /**
   * <p>Specifies a script to run immediately after DMS connects to the endpoint. The
   *          migration task continues running regardless if the SQL statement succeeds or fails.</p>
   *          <p>For this parameter, provide the code of the script itself, not the name of a file
   *          containing the script.</p>
   * @public
   */
  AfterConnectScript?: string | undefined;

  /**
   * <p>Cleans and recreates table metadata information on the replication instance when a
   *          mismatch occurs. For example, in a situation where running an alter DDL on the table could
   *          result in different information about the table cached in the replication instance. </p>
   * @public
   */
  CleanSourceMetadataOnMismatch?: boolean | undefined;

  /**
   * <p>Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly
   *          specify the database using the <code>DatabaseName</code> request parameter on either the
   *             <code>CreateEndpoint</code> or <code>ModifyEndpoint</code> API call. Specifying
   *             <code>DatabaseName</code> when you create or modify a MySQL endpoint replicates all the
   *          task tables to this single database. For MySQL endpoints, you specify the database only
   *          when you specify the schema in the table-mapping rules of the DMS task.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Specifies how often to check the binary log for new changes/events when the database is
   *          idle. The default is five seconds.</p>
   *          <p>Example: <code>eventsPollInterval=5;</code>
   *          </p>
   *          <p>In the example, DMS checks for changes in the binary logs every five seconds.</p>
   * @public
   */
  EventsPollInterval?: number | undefined;

  /**
   * <p>Specifies where to migrate source tables on the target, either to a single database or
   *          multiple databases. If you specify <code>SPECIFIC_DATABASE</code>, specify the database
   *          name using the <code>DatabaseName</code> parameter of the <code>Endpoint</code>
   *          object.</p>
   *          <p>Example: <code>targetDbType=MULTIPLE_DATABASES</code>
   *          </p>
   * @public
   */
  TargetDbType?: TargetDbType | undefined;

  /**
   * <p>Specifies the maximum size (in KB) of any .csv file used to transfer data to a
   *          MySQL-compatible database.</p>
   *          <p>Example: <code>maxFileSize=512</code>
   *          </p>
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * <p>Improves performance when loading data into the MySQL-compatible target database.
   *          Specifies how many threads to use to load the data into the MySQL-compatible target
   *          database. Setting a large number of threads can have an adverse effect on database
   *          performance, because a separate connection is required for each thread. The default is
   *          one.</p>
   *          <p>Example: <code>parallelLoadThreads=1</code>
   *          </p>
   * @public
   */
  ParallelLoadThreads?: number | undefined;

  /**
   * <p>Endpoint connection password.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>Endpoint TCP port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The host name of the endpoint database. </p>
   *          <p>For an Amazon RDS MySQL instance, this is the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>, in the <code>
   *                <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.</p>
   *          <p>For an Aurora MySQL instance, this is the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html">DescribeDBClusters</a>, in the <code>Endpoint</code> field.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>Specifies the time zone for the source MySQL database.</p>
   *          <p>Example: <code>serverTimezone=US/Pacific;</code>
   *          </p>
   *          <p>Note: Do not enclose time zones in single quotes.</p>
   * @public
   */
  ServerTimezone?: string | undefined;

  /**
   * <p>Endpoint connection user name.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted
   *          entity and grants the required permissions to access the value in
   *             <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code>
   *          action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that
   *          allows access to the MySQL endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the
   *                <i>Database Migration Service User Guide</i>.</p>
   *          </note>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the MySQL endpoint connection details.</p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * <p>Sets the client statement timeout (in seconds) for a MySQL source endpoint.</p>
   * @public
   */
  ExecuteTimeout?: number | undefined;
}

/**
 * <p>Provides information that defines an Amazon Neptune endpoint.</p>
 * @public
 */
export interface NeptuneSettings {
  /**
   * <p>The Amazon Resource Name (ARN) of the service role that you created for the Neptune
   *          target endpoint. The role must allow the <code>iam:PassRole</code> action. For more
   *          information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.ServiceRole">Creating an IAM Service Role for Accessing Amazon Neptune as a
   *             Target</a> in the <i>Database Migration Service User Guide. </i>
   *          </p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where DMS can temporarily store migrated graph data
   *          in .csv files before bulk-loading it to the Neptune target database. DMS maps the SQL
   *          source data to graph data before storing it in these .csv files.</p>
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * <p>A folder path where you want DMS to store migrated graph data in the S3 bucket
   *          specified by <code>S3BucketName</code>
   *          </p>
   * @public
   */
  S3BucketFolder: string | undefined;

  /**
   * <p>The number of milliseconds for DMS to wait to retry a bulk-load of migrated graph data
   *          to the Neptune target database before raising an error. The default is 250.</p>
   * @public
   */
  ErrorRetryDuration?: number | undefined;

  /**
   * <p>The maximum size in kilobytes of migrated graph data stored in a .csv file before DMS
   *          bulk-loads the data to the Neptune target database. The default is 1,048,576 KB. If the
   *          bulk load is successful, DMS clears the bucket, ready to store the next batch of migrated
   *          graph data.</p>
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * <p>The number of times for DMS to retry a bulk load of migrated graph data to the Neptune
   *          target database before raising an error. The default is 5.</p>
   * @public
   */
  MaxRetryCount?: number | undefined;

  /**
   * <p>If you want Identity and Access Management (IAM) authorization enabled for this endpoint, set this parameter
   *          to <code>true</code>. Then attach the appropriate IAM policy document to your service role
   *          specified by <code>ServiceAccessRoleArn</code>. The default is <code>false</code>.</p>
   * @public
   */
  IamAuthEnabled?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const OracleAuthenticationMethod = {
  Kerberos: "kerberos",
  Password: "password",
} as const;

/**
 * @public
 */
export type OracleAuthenticationMethod = (typeof OracleAuthenticationMethod)[keyof typeof OracleAuthenticationMethod];

/**
 * @public
 * @enum
 */
export const CharLengthSemantics = {
  BYTE: "byte",
  CHAR: "char",
  DEFAULT: "default",
} as const;

/**
 * @public
 */
export type CharLengthSemantics = (typeof CharLengthSemantics)[keyof typeof CharLengthSemantics];

/**
 * <p>Provides information that defines an Oracle endpoint.</p>
 * @public
 */
export interface OracleSettings {
  /**
   * <p>Set this attribute to set up table-level supplemental logging for the Oracle database.
   *          This attribute enables PRIMARY KEY supplemental logging on all tables selected for a
   *          migration task.</p>
   *          <p>If you use this option, you still need to enable database-level supplemental
   *          logging.</p>
   * @public
   */
  AddSupplementalLogging?: boolean | undefined;

  /**
   * <p>Specifies the ID of the destination for the archived redo logs. This value should be the
   *          same as a number in the dest_id column of the v$archived_log view. If you work with an
   *          additional redo log destination, use the <code>AdditionalArchivedLogDestId</code> option to
   *          specify the additional destination ID. Doing this improves performance by ensuring that the
   *          correct logs are accessed from the outset.</p>
   * @public
   */
  ArchivedLogDestId?: number | undefined;

  /**
   * <p>Set this attribute with <code>ArchivedLogDestId</code> in a primary/ standby setup. This
   *          attribute is useful in the case of a switchover. In this case, DMS needs to know which
   *          destination to get archive redo logs from to read changes. This need arises because the
   *          previous primary instance is now a standby instance after switchover.</p>
   *          <p>Although DMS supports the use of the Oracle <code>RESETLOGS</code> option to open the
   *          database, never use <code>RESETLOGS</code> unless necessary. For additional information
   *          about <code>RESETLOGS</code>, see <a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B">RMAN Data Repair Concepts</a> in the <i>Oracle Database Backup and Recovery
   *             User's Guide</i>.</p>
   * @public
   */
  AdditionalArchivedLogDestId?: number | undefined;

  /**
   * <p>Specifies the IDs of one more destinations for one or more archived redo logs. These IDs
   *          are the values of the <code>dest_id</code> column in the <code>v$archived_log</code> view.
   *          Use this setting with the <code>archivedLogDestId</code> extra connection attribute in a
   *          primary-to-single setup or a primary-to-multiple-standby setup. </p>
   *          <p>This setting is useful in a switchover when you use an Oracle Data Guard database as a
   *          source. In this case, DMS needs information about what destination to get archive redo
   *          logs from to read changes. DMS needs this because after the switchover the previous
   *          primary is a standby instance. For example, in a primary-to-single standby setup you might
   *          apply the following settings. </p>
   *          <p>
   *             <code>archivedLogDestId=1; ExtraArchivedLogDestIds=[2]</code>
   *          </p>
   *          <p>In a primary-to-multiple-standby setup, you might apply the following settings.</p>
   *          <p>
   *             <code>archivedLogDestId=1; ExtraArchivedLogDestIds=[2,3,4]</code>
   *          </p>
   *          <p>Although DMS supports the use of the Oracle <code>RESETLOGS</code> option to open the
   *          database, never use <code>RESETLOGS</code> unless it's necessary. For more information
   *          about <code>RESETLOGS</code>, see <a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B"> RMAN Data Repair Concepts</a> in the <i>Oracle Database Backup and Recovery
   *             User's Guide</i>.</p>
   * @public
   */
  ExtraArchivedLogDestIds?: number[] | undefined;

  /**
   * <p>Set this attribute to <code>true</code> to enable replication of Oracle tables
   *          containing columns that are nested tables or defined types.</p>
   * @public
   */
  AllowSelectNestedTables?: boolean | undefined;

  /**
   * <p>Set this attribute to change the number of threads that DMS configures to perform a
   *          change data capture (CDC) load using Oracle Automatic Storage Management (ASM). You can
   *          specify an integer value between 2 (the default) and 8 (the maximum). Use this attribute
   *          together with the <code>readAheadBlocks</code> attribute.</p>
   * @public
   */
  ParallelAsmReadThreads?: number | undefined;

  /**
   * <p>Set this attribute to change the number of read-ahead blocks that DMS configures to
   *          perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).
   *          You can specify an integer value between 1000 (the default) and 200,000 (the
   *          maximum).</p>
   * @public
   */
  ReadAheadBlocks?: number | undefined;

  /**
   * <p>Set this attribute to <code>false</code> in order to use the Binary Reader to capture
   *          change data for an Amazon RDS for Oracle as the source. This tells the DMS instance to not
   *          access redo logs through any specified path prefix replacement using direct file
   *          access.</p>
   * @public
   */
  AccessAlternateDirectly?: boolean | undefined;

  /**
   * <p>Set this attribute to <code>true</code> in order to use the Binary Reader to capture
   *          change data for an Amazon RDS for Oracle as the source. This tells the DMS instance to use any
   *          specified prefix replacement to access all online redo logs.</p>
   * @public
   */
  UseAlternateFolderForOnline?: boolean | undefined;

  /**
   * <p>Set this string attribute to the required value in order to use the Binary Reader to
   *          capture change data for an Amazon RDS for Oracle as the source. This value specifies the
   *          default Oracle root used to access the redo logs.</p>
   * @public
   */
  OraclePathPrefix?: string | undefined;

  /**
   * <p>Set this string attribute to the required value in order to use the Binary Reader to
   *          capture change data for an Amazon RDS for Oracle as the source. This value specifies the
   *          path prefix used to replace the default Oracle root to access the redo logs.</p>
   * @public
   */
  UsePathPrefix?: string | undefined;

  /**
   * <p>Set this attribute to true in order to use the Binary Reader to capture change data for
   *          an Amazon RDS for Oracle as the source. This setting tells DMS instance to replace the default
   *          Oracle root with the specified <code>usePathPrefix</code> setting to access the redo
   *          logs.</p>
   * @public
   */
  ReplacePathPrefix?: boolean | undefined;

  /**
   * <p>Set this attribute to enable homogenous tablespace replication and create existing
   *          tables or indexes under the same tablespace on the target.</p>
   * @public
   */
  EnableHomogenousTablespace?: boolean | undefined;

  /**
   * <p>When set to <code>true</code>, this attribute helps to increase the commit rate on the
   *          Oracle target database by writing directly to tables and not writing a trail to database
   *          logs.</p>
   * @public
   */
  DirectPathNoLog?: boolean | undefined;

  /**
   * <p>When this field is set to <code>True</code>, DMS only accesses the archived redo logs.
   *          If the archived redo logs are stored on Automatic Storage Management (ASM) only, the DMS
   *          user account needs to be granted ASM privileges.</p>
   * @public
   */
  ArchivedLogsOnly?: boolean | undefined;

  /**
   * <p>For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password.
   *          You can set this value from the <code>
   *                <i>asm_user_password</i>
   *             </code> value.
   *          You set this value as part of the comma-separated value that you set to the
   *             <code>Password</code> request parameter when you create the endpoint to access
   *          transaction logs using Binary Reader. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source
   *             database</a>.</p>
   * @public
   */
  AsmPassword?: string | undefined;

  /**
   * <p>For an Oracle source endpoint, your ASM server address. You can set this value from the
   *             <code>asm_server</code> value. You set <code>asm_server</code> as part of the extra
   *          connection attribute string to access an Oracle server with Binary Reader that uses ASM.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source
   *             database</a>.</p>
   * @public
   */
  AsmServer?: string | undefined;

  /**
   * <p>For an Oracle source endpoint, your ASM user name. You can set this value from the
   *             <code>asm_user</code> value. You set <code>asm_user</code> as part of the extra
   *          connection attribute string to access an Oracle server with Binary Reader that uses ASM.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source
   *             database</a>.</p>
   * @public
   */
  AsmUser?: string | undefined;

  /**
   * <p>Specifies whether the length of a character column is in bytes or in characters. To
   *          indicate that the character column length is in characters, set this attribute to
   *             <code>CHAR</code>. Otherwise, the character column length is in bytes.</p>
   *          <p>Example: <code>charLengthSemantics=CHAR;</code>
   *          </p>
   * @public
   */
  CharLengthSemantics?: CharLengthSemantics | undefined;

  /**
   * <p>Database name for the endpoint.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>When set to <code>true</code>, this attribute specifies a parallel load when
   *             <code>useDirectPathFullLoad</code> is set to <code>Y</code>. This attribute also only
   *          applies when you use the DMS parallel load feature. Note that the target table cannot
   *          have any constraints or indexes.</p>
   * @public
   */
  DirectPathParallelLoad?: boolean | undefined;

  /**
   * <p>When set to <code>true</code>, this attribute causes a task to fail if the actual size
   *          of an LOB column is greater than the specified <code>LobMaxSize</code>.</p>
   *          <p>If a task is set to limited LOB mode and this option is set to <code>true</code>, the
   *          task fails instead of truncating the LOB data.</p>
   * @public
   */
  FailTasksOnLobTruncation?: boolean | undefined;

  /**
   * <p>Specifies the number scale. You can select a scale up to 38, or you can select FLOAT. By
   *          default, the NUMBER data type is converted to precision 38, scale 10.</p>
   *          <p>Example: <code>numberDataTypeScale=12</code>
   *          </p>
   * @public
   */
  NumberDatatypeScale?: number | undefined;

  /**
   * <p>Endpoint connection password.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>Endpoint TCP port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>When set to <code>true</code>, this attribute supports tablespace replication.</p>
   * @public
   */
  ReadTableSpaceName?: boolean | undefined;

  /**
   * <p>Specifies the number of seconds that the system waits before resending a query.</p>
   *          <p>Example: <code>retryInterval=6;</code>
   *          </p>
   * @public
   */
  RetryInterval?: number | undefined;

  /**
   * <p>For an Oracle source endpoint, the transparent data encryption (TDE) password required
   *          by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader. It is also the
   *                <code>
   *                <i>TDE_Password</i>
   *             </code> part of the comma-separated value you
   *          set to the <code>Password</code> request parameter when you create the endpoint. The
   *             <code>SecurityDbEncryptian</code> setting is related to this
   *             <code>SecurityDbEncryptionName</code> setting. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption"> Supported encryption methods for using Oracle as a source for
   *             DMS </a> in the <i>Database Migration Service User Guide</i>. </p>
   * @public
   */
  SecurityDbEncryption?: string | undefined;

  /**
   * <p>For an Oracle source endpoint, the name of a key used for the transparent data
   *          encryption (TDE) of the columns and tablespaces in an Oracle source database that is
   *          encrypted using TDE. The key value is the value of the <code>SecurityDbEncryption</code>
   *          setting. For more information on setting the key name value of
   *             <code>SecurityDbEncryptionName</code>, see the information and example for setting the
   *             <code>securityDbEncryptionName</code> extra connection attribute in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption"> Supported encryption methods for using Oracle as a source for
   *             DMS </a> in the <i>Database Migration Service User Guide</i>.</p>
   * @public
   */
  SecurityDbEncryptionName?: string | undefined;

  /**
   * <p>Fully qualified domain name of the endpoint.</p>
   *          <p>For an Amazon RDS Oracle instance, this is the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>, in the <code>
   *                <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>Use this attribute to convert <code>SDO_GEOMETRY</code> to <code>GEOJSON</code> format.
   *          By default, DMS calls the <code>SDO2GEOJSON</code> custom function if present and
   *          accessible. Or you can create your own custom function that mimics the operation of
   *             <code>SDOGEOJSON</code> and set <code>SpatialDataOptionToGeoJsonFunctionName</code> to
   *          call it instead. </p>
   * @public
   */
  SpatialDataOptionToGeoJsonFunctionName?: string | undefined;

  /**
   * <p>Use this attribute to specify a time in minutes for the delay in standby sync. If the
   *          source is an Oracle Active Data Guard standby database, use this attribute to specify the
   *          time lag between primary and standby databases.</p>
   *          <p>In DMS, you can create an Oracle CDC task that uses an Active Data Guard standby
   *          instance as a source for replicating ongoing changes. Doing this eliminates the need to
   *          connect to an active database that might be in production.</p>
   * @public
   */
  StandbyDelayTime?: number | undefined;

  /**
   * <p>Endpoint connection user name.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>Set this attribute to True to capture change data using the Binary Reader utility. Set
   *             <code>UseLogminerReader</code> to False to set this attribute to True. To use Binary
   *          Reader with Amazon RDS for Oracle as the source, you set additional attributes. For more
   *          information about using this setting with Oracle Automatic Storage Management (ASM), see
   *             <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC"> Using Oracle LogMiner or DMS Binary Reader for
   *          CDC</a>.</p>
   * @public
   */
  UseBFile?: boolean | undefined;

  /**
   * <p>Set this attribute to True to have DMS use a direct path full load. Specify this value
   *          to use the direct path protocol in the Oracle Call Interface (OCI). By using this OCI
   *          protocol, you can bulk-load Oracle target tables during a full load.</p>
   * @public
   */
  UseDirectPathFullLoad?: boolean | undefined;

  /**
   * <p>Set this attribute to True to capture change data using the Oracle LogMiner utility (the
   *          default). Set this attribute to False if you want to access the redo logs as a binary file.
   *          When you set <code>UseLogminerReader</code> to False, also set <code>UseBfile</code> to
   *          True. For more information on this setting and using Oracle ASM, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC"> Using Oracle LogMiner or DMS Binary Reader for CDC</a> in
   *          the <i>DMS User Guide</i>.</p>
   * @public
   */
  UseLogminerReader?: boolean | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted
   *          entity and grants the required permissions to access the value in
   *             <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code>
   *          action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that
   *          allows access to the Oracle endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the
   *                <i>Database Migration Service User Guide</i>.</p>
   *          </note>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the Oracle endpoint connection details.</p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * <p>Required only if your Oracle endpoint uses Automatic Storage Management (ASM). The full
   *          ARN of the IAM role that specifies DMS as the trusted entity and grants the required
   *          permissions to access the <code>SecretsManagerOracleAsmSecret</code>. This
   *             <code>SecretsManagerOracleAsmSecret</code> has the secret value that allows access to
   *          the Oracle ASM of the endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerOracleAsmSecretId</code>. Or you can
   *             specify clear-text values for <code>AsmUser</code>, <code>AsmPassword</code>, and
   *                <code>AsmServerName</code>. You can't specify both. For more information on
   *             creating this <code>SecretsManagerOracleAsmSecret</code> and the
   *                <code>SecretsManagerOracleAsmAccessRoleArn</code> and
   *                <code>SecretsManagerOracleAsmSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the
   *                <i>Database Migration Service User Guide</i>.</p>
   *          </note>
   * @public
   */
  SecretsManagerOracleAsmAccessRoleArn?: string | undefined;

  /**
   * <p>Required only if your Oracle endpoint uses Automatic Storage Management (ASM). The full
   *          ARN, partial ARN, or friendly name of the <code>SecretsManagerOracleAsmSecret</code> that
   *          contains the Oracle ASM connection details for the Oracle endpoint.</p>
   * @public
   */
  SecretsManagerOracleAsmSecretId?: string | undefined;

  /**
   * <p>Use the <code>TrimSpaceInChar</code> source endpoint setting to trim data on CHAR and
   *          NCHAR data types during migration. The default value is <code>true</code>.</p>
   * @public
   */
  TrimSpaceInChar?: boolean | undefined;

  /**
   * <p>When true, converts timestamps with the <code>timezone</code> datatype to their UTC
   *          value.</p>
   * @public
   */
  ConvertTimestampWithZoneToUTC?: boolean | undefined;

  /**
   * <p>The timeframe in minutes to check for open transactions for a CDC-only task.</p>
   *          <p>You can specify an integer value between 0 (the default) and 240 (the maximum). </p>
   *          <note>
   *             <p>This parameter is only valid in DMS version 3.5.0 and later.</p>
   *          </note>
   * @public
   */
  OpenTransactionWindow?: number | undefined;

  /**
   * <p>Specifies the authentication method to be used with Oracle.</p>
   * @public
   */
  AuthenticationMethod?: OracleAuthenticationMethod | undefined;
}

/**
 * @public
 * @enum
 */
export const DatabaseMode = {
  BABELFISH: "babelfish",
  DEFAULT: "default",
} as const;

/**
 * @public
 */
export type DatabaseMode = (typeof DatabaseMode)[keyof typeof DatabaseMode];

/**
 * @public
 * @enum
 */
export const LongVarcharMappingType = {
  CLOB: "clob",
  NCLOB: "nclob",
  WSTRING: "wstring",
} as const;

/**
 * @public
 */
export type LongVarcharMappingType = (typeof LongVarcharMappingType)[keyof typeof LongVarcharMappingType];

/**
 * @public
 * @enum
 */
export const PluginNameValue = {
  NO_PREFERENCE: "no-preference",
  PGLOGICAL: "pglogical",
  TEST_DECODING: "test-decoding",
} as const;

/**
 * @public
 */
export type PluginNameValue = (typeof PluginNameValue)[keyof typeof PluginNameValue];

/**
 * <p>Provides information that defines a PostgreSQL endpoint.</p>
 * @public
 */
export interface PostgreSQLSettings {
  /**
   * <p>For use with change data capture (CDC) only, this attribute has DMS bypass foreign
   *          keys and user triggers to reduce the time it takes to bulk load data.</p>
   *          <p>Example: <code>afterConnectScript=SET session_replication_role='replica'</code>
   *          </p>
   * @public
   */
  AfterConnectScript?: string | undefined;

  /**
   * <p>To capture DDL events, DMS creates various artifacts in the PostgreSQL database when
   *          the task starts. You can later remove these artifacts.</p>
   *          <p>The default value is <code>true</code>.</p>
   *          <p>If this value is set to <code>N</code>, you don't have to create tables or triggers on
   *          the source database.</p>
   * @public
   */
  CaptureDdls?: boolean | undefined;

  /**
   * <p>Specifies the maximum size (in KB) of any .csv file used to transfer data to
   *          PostgreSQL.</p>
   *          <p>The default value is 32,768 KB (32 MB).</p>
   *          <p>Example: <code>maxFileSize=512</code>
   *          </p>
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * <p>Database name for the endpoint.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The schema in which the operational DDL database artifacts are created.</p>
   *          <p>The default value is <code>public</code>.</p>
   *          <p>Example: <code>ddlArtifactsSchema=xyzddlschema;</code>
   *          </p>
   * @public
   */
  DdlArtifactsSchema?: string | undefined;

  /**
   * <p>Sets the client statement timeout for the PostgreSQL instance, in seconds. The default
   *          value is 60 seconds.</p>
   *          <p>Example: <code>executeTimeout=100;</code>
   *          </p>
   * @public
   */
  ExecuteTimeout?: number | undefined;

  /**
   * <p>When set to <code>true</code>, this value causes a task to fail if the actual size of a
   *          LOB column is greater than the specified <code>LobMaxSize</code>.</p>
   *          <p>The default value is <code>false</code>.</p>
   *          <p>If task is set to Limited LOB mode and this option is set to true, the task fails
   *          instead of truncating the LOB data.</p>
   * @public
   */
  FailTasksOnLobTruncation?: boolean | undefined;

  /**
   * <p>The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. By doing this,
   *          it prevents idle logical replication slots from holding onto old WAL logs, which can result
   *          in storage full situations on the source. This heartbeat keeps <code>restart_lsn</code>
   *          moving and prevents storage full scenarios.</p>
   *          <p>The default value is <code>false</code>.</p>
   * @public
   */
  HeartbeatEnable?: boolean | undefined;

  /**
   * <p>Sets the schema in which the heartbeat artifacts are created.</p>
   *          <p>The default value is <code>public</code>.</p>
   * @public
   */
  HeartbeatSchema?: string | undefined;

  /**
   * <p>Sets the WAL heartbeat frequency (in minutes).</p>
   *          <p>The default value is 5 minutes.</p>
   * @public
   */
  HeartbeatFrequency?: number | undefined;

  /**
   * <p>Endpoint connection password.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>Endpoint TCP port. The default is 5432.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The host name of the endpoint database. </p>
   *          <p>For an Amazon RDS PostgreSQL instance, this is the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>, in the <code>
   *                <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.</p>
   *          <p>For an Aurora PostgreSQL instance, this is the output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html">DescribeDBClusters</a>, in the <code>Endpoint</code> field.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>Endpoint connection user name.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>Sets the name of a previously created logical replication slot for a change data capture
   *          (CDC) load of the PostgreSQL source instance. </p>
   *          <p>When used with the <code>CdcStartPosition</code> request parameter for the DMS API ,
   *          this attribute also makes it possible to use native CDC start points. DMS verifies that the
   *          specified logical replication slot exists before starting the CDC load task. It also
   *          verifies that the task was created with a valid setting of <code>CdcStartPosition</code>.
   *          If the specified slot doesn't exist or the task doesn't have a valid
   *             <code>CdcStartPosition</code> setting, DMS raises an error.</p>
   *          <p>For more information about setting the <code>CdcStartPosition</code> request parameter,
   *          see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native">Determining a CDC native start point</a> in the <i>Database Migration Service User
   *             Guide</i>. For more information about using <code>CdcStartPosition</code>, see
   *             <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html">CreateReplicationTask</a>, <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html">StartReplicationTask</a>, and <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html">ModifyReplicationTask</a>.</p>
   * @public
   */
  SlotName?: string | undefined;

  /**
   * <p>Specifies the plugin to use to create a replication slot.</p>
   *          <p>The default value is <code>pglogical</code>.</p>
   * @public
   */
  PluginName?: PluginNameValue | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted
   *          entity and grants the required permissions to access the value in
   *             <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code>
   *          action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that
   *          allows access to the PostgreSQL endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the
   *                <i>Database Migration Service User Guide</i>.</p>
   *          </note>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the PostgreSQL endpoint connection details.</p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * <p>Use the <code>TrimSpaceInChar</code> source endpoint setting to trim data on CHAR and
   *          NCHAR data types during migration. The default value is <code>true</code>.</p>
   * @public
   */
  TrimSpaceInChar?: boolean | undefined;

  /**
   * <p>When true, lets PostgreSQL migrate the boolean type as boolean. By default, PostgreSQL
   *          migrates booleans as <code>varchar(5)</code>. You must set this setting on both the source
   *          and target endpoints for it to take effect.</p>
   *          <p>The default value is <code>false</code>.</p>
   * @public
   */
  MapBooleanAsBoolean?: boolean | undefined;

  /**
   * <p>When true, DMS migrates JSONB values as CLOB.</p>
   *          <p>The default value is <code>false</code>.</p>
   * @public
   */
  MapJsonbAsClob?: boolean | undefined;

  /**
   * <p>Sets what datatype to map LONG values as.</p>
   *          <p>The default value is <code>wstring</code>.</p>
   * @public
   */
  MapLongVarcharAs?: LongVarcharMappingType | undefined;

  /**
   * <p>Specifies the default behavior of the replication's handling of PostgreSQL- compatible
   *          endpoints that require some additional configuration, such as Babelfish endpoints.</p>
   * @public
   */
  DatabaseMode?: DatabaseMode | undefined;

  /**
   * <p>The Babelfish for Aurora PostgreSQL database name for the endpoint.</p>
   * @public
   */
  BabelfishDatabaseName?: string | undefined;

  /**
   * <p>Disables the Unicode source filter with PostgreSQL, for values passed into the Selection
   *          rule filter on Source Endpoint column values. By default DMS performs source filter
   *          comparisons using a Unicode string which can cause look ups to ignore the indexes in the
   *          text columns and slow down migrations.</p>
   *          <p>Unicode support should only be disabled when using a selection rule filter is on a text
   *          column in the Source database that is indexed.</p>
   * @public
   */
  DisableUnicodeSourceFilter?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const RedisAuthTypeValue = {
  AUTH_ROLE: "auth-role",
  AUTH_TOKEN: "auth-token",
  NONE: "none",
} as const;

/**
 * @public
 */
export type RedisAuthTypeValue = (typeof RedisAuthTypeValue)[keyof typeof RedisAuthTypeValue];

/**
 * @public
 * @enum
 */
export const SslSecurityProtocolValue = {
  PLAINTEXT: "plaintext",
  SSL_ENCRYPTION: "ssl-encryption",
} as const;

/**
 * @public
 */
export type SslSecurityProtocolValue = (typeof SslSecurityProtocolValue)[keyof typeof SslSecurityProtocolValue];

/**
 * <p>Provides information that defines a Redis target endpoint.</p>
 * @public
 */
export interface RedisSettings {
  /**
   * <p>Fully qualified domain name of the endpoint.</p>
   * @public
   */
  ServerName: string | undefined;

  /**
   * <p>Transmission Control Protocol (TCP) port for the endpoint.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid
   *          values include <code>plaintext</code> and <code>ssl-encryption</code>. The default is
   *             <code>ssl-encryption</code>. The <code>ssl-encryption</code> option makes an encrypted
   *          connection. Optionally, you can identify an Amazon Resource Name (ARN) for an SSL
   *          certificate authority (CA) using the <code>SslCaCertificateArn </code>setting. If an ARN
   *          isn't given for a CA, DMS uses the Amazon root CA.</p>
   *          <p>The <code>plaintext</code> option doesn't provide Transport Layer Security (TLS)
   *          encryption for traffic between endpoint and database.</p>
   * @public
   */
  SslSecurityProtocol?: SslSecurityProtocolValue | undefined;

  /**
   * <p>The type of authentication to perform when connecting to a Redis target. Options include
   *             <code>none</code>, <code>auth-token</code>, and <code>auth-role</code>. The
   *             <code>auth-token</code> option requires an <code>AuthPassword</code> value to be
   *          provided. The <code>auth-role</code> option requires <code>AuthUserName</code> and
   *             <code>AuthPassword</code> values to be provided.</p>
   * @public
   */
  AuthType?: RedisAuthTypeValue | undefined;

  /**
   * <p>The user name provided with the <code>auth-role</code> option of the
   *             <code>AuthType</code> setting for a Redis target endpoint.</p>
   * @public
   */
  AuthUserName?: string | undefined;

  /**
   * <p>The password provided with the <code>auth-role</code> and <code>auth-token</code>
   *          options of the <code>AuthType</code> setting for a Redis target endpoint.</p>
   * @public
   */
  AuthPassword?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to
   *          connect to your Redis target endpoint.</p>
   * @public
   */
  SslCaCertificateArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionModeValue = {
  SSE_KMS: "sse-kms",
  SSE_S3: "sse-s3",
} as const;

/**
 * @public
 */
export type EncryptionModeValue = (typeof EncryptionModeValue)[keyof typeof EncryptionModeValue];

/**
 * <p>Provides information that defines an Amazon Redshift endpoint.</p>
 * @public
 */
export interface RedshiftSettings {
  /**
   * <p>A value that indicates to allow any date format, including invalid formats such as
   *          00/00/00 00:00:00, to be loaded without generating an error. You can choose
   *             <code>true</code> or <code>false</code> (the default).</p>
   *          <p>This parameter applies only to TIMESTAMP and DATE columns. Always use ACCEPTANYDATE with
   *          the DATEFORMAT parameter. If the date format for the data doesn't match the DATEFORMAT
   *          specification, Amazon Redshift inserts a NULL value into that field. </p>
   * @public
   */
  AcceptAnyDate?: boolean | undefined;

  /**
   * <p>Code to run after connecting. This parameter should contain the code itself, not the
   *          name of a file containing the code.</p>
   * @public
   */
  AfterConnectScript?: string | undefined;

  /**
   * <p>An S3 folder where the comma-separated-value (.csv) files are stored before being
   *          uploaded to the target Redshift cluster. </p>
   *          <p>For full load mode, DMS converts source records into .csv files and loads them to the
   *             <i>BucketFolder/TableID</i> path. DMS uses the Redshift
   *             <code>COPY</code> command to upload the .csv files to the target table. The files are
   *          deleted once the <code>COPY</code> operation has finished. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html">COPY</a> in the
   *             <i>Amazon Redshift Database Developer Guide</i>.</p>
   *          <p>For change-data-capture (CDC) mode, DMS creates a <i>NetChanges</i>
   *          table, and loads the .csv files to this <i>BucketFolder/NetChangesTableID</i>
   *          path.</p>
   * @public
   */
  BucketFolder?: string | undefined;

  /**
   * <p>The name of the intermediate S3 bucket used to store .csv files before uploading data to
   *          Redshift.</p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>If Amazon Redshift is configured to support case sensitive schema names, set
   *             <code>CaseSensitiveNames</code> to <code>true</code>. The default is
   *          <code>false</code>.</p>
   * @public
   */
  CaseSensitiveNames?: boolean | undefined;

  /**
   * <p>If you set <code>CompUpdate</code> to <code>true</code> Amazon Redshift applies
   *          automatic compression if the table is empty. This applies even if the table columns already
   *          have encodings other than <code>RAW</code>. If you set <code>CompUpdate</code> to
   *             <code>false</code>, automatic compression is disabled and existing column encodings
   *          aren't changed. The default is <code>true</code>.</p>
   * @public
   */
  CompUpdate?: boolean | undefined;

  /**
   * <p>A value that sets the amount of time to wait (in milliseconds) before timing out,
   *          beginning from when you initially establish a connection.</p>
   * @public
   */
  ConnectionTimeout?: number | undefined;

  /**
   * <p>The name of the Amazon Redshift data warehouse (service) that you are working
   *          with.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The date format that you are using. Valid values are <code>auto</code> (case-sensitive),
   *          your date format string enclosed in quotes, or NULL. If this parameter is left unset
   *          (NULL), it defaults to a format of 'YYYY-MM-DD'. Using <code>auto</code> recognizes most
   *          strings, even some that aren't supported when you use a date format string. </p>
   *          <p>If your date and time values use formats different from each other, set this to
   *             <code>auto</code>. </p>
   * @public
   */
  DateFormat?: string | undefined;

  /**
   * <p>A value that specifies whether DMS should migrate empty CHAR and VARCHAR fields as
   *          NULL. A value of <code>true</code> sets empty CHAR and VARCHAR fields to null. The default
   *          is <code>false</code>.</p>
   * @public
   */
  EmptyAsNull?: boolean | undefined;

  /**
   * <p>The type of server-side encryption that you want to use for your data. This encryption
   *          type is part of the endpoint settings or the extra connections attributes for Amazon S3.
   *          You can choose either <code>SSE_S3</code> (the default) or <code>SSE_KMS</code>. </p>
   *          <note>
   *             <p>For the <code>ModifyEndpoint</code> operation, you can change the existing value of
   *             the <code>EncryptionMode</code> parameter from <code>SSE_KMS</code> to
   *                <code>SSE_S3</code>. But you can’t change the existing value from <code>SSE_S3</code>
   *             to <code>SSE_KMS</code>.</p>
   *          </note>
   *          <p>To use <code>SSE_S3</code>, create an Identity and Access Management (IAM) role with a policy that allows
   *             <code>"arn:aws:s3:::*"</code> to use the following actions: <code>"s3:PutObject",
   *             "s3:ListBucket"</code>
   *          </p>
   * @public
   */
  EncryptionMode?: EncryptionModeValue | undefined;

  /**
   * <p>This setting is only valid for a full-load migration task. Set <code>ExplicitIds</code>
   *          to <code>true</code> to have tables with <code>IDENTITY</code> columns override their
   *          auto-generated values with explicit values loaded from the source data files used to
   *          populate the tables. The default is <code>false</code>.</p>
   * @public
   */
  ExplicitIds?: boolean | undefined;

  /**
   * <p>The number of threads used to upload a single file. This parameter accepts a value from
   *          1 through 64. It defaults to 10.</p>
   *          <p>The number of parallel streams used to upload a single .csv file to an S3 bucket using
   *          S3 Multipart Upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html">Multipart upload
   *             overview</a>. </p>
   *          <p>
   *             <code>FileTransferUploadStreams</code> accepts a value from 1 through 64. It defaults to
   *          10.</p>
   * @public
   */
  FileTransferUploadStreams?: number | undefined;

  /**
   * <p>The amount of time to wait (in milliseconds) before timing out of operations performed
   *          by DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.</p>
   * @public
   */
  LoadTimeout?: number | undefined;

  /**
   * <p>The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer
   *          data to Amazon Redshift. It defaults to 1048576KB (1 GB).</p>
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * <p>The password for the user named in the <code>username</code> property.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The port number for Amazon Redshift. The default value is 5439.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>A value that specifies to remove surrounding quotation marks from strings in the
   *          incoming data. All characters within the quotation marks, including delimiters, are
   *          retained. Choose <code>true</code> to remove quotation marks. The default is
   *             <code>false</code>.</p>
   * @public
   */
  RemoveQuotes?: boolean | undefined;

  /**
   * <p>A list of characters that you want to replace. Use with
   *          <code>ReplaceChars</code>.</p>
   * @public
   */
  ReplaceInvalidChars?: string | undefined;

  /**
   * <p>A value that specifies to replaces the invalid characters specified in
   *             <code>ReplaceInvalidChars</code>, substituting the specified characters instead. The
   *          default is <code>"?"</code>.</p>
   * @public
   */
  ReplaceChars?: string | undefined;

  /**
   * <p>The name of the Amazon Redshift cluster you are using.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift
   *          service. The role must allow the <code>iam:PassRole</code> action.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p>The KMS key ID. If you are using <code>SSE_KMS</code> for the
   *             <code>EncryptionMode</code>, provide this key ID. The key that you use needs an attached
   *          policy that enables IAM user permissions and allows use of the key.</p>
   * @public
   */
  ServerSideEncryptionKmsKeyId?: string | undefined;

  /**
   * <p>The time format that you want to use. Valid values are <code>auto</code>
   *          (case-sensitive), <code>'timeformat_string'</code>, <code>'epochsecs'</code>, or
   *             <code>'epochmillisecs'</code>. It defaults to 10. Using <code>auto</code> recognizes
   *          most strings, even some that aren't supported when you use a time format string. </p>
   *          <p>If your date and time values use formats different from each other, set this parameter
   *          to <code>auto</code>. </p>
   * @public
   */
  TimeFormat?: string | undefined;

  /**
   * <p>A value that specifies to remove the trailing white space characters from a VARCHAR
   *          string. This parameter applies only to columns with a VARCHAR data type. Choose
   *             <code>true</code> to remove unneeded white space. The default is
   *          <code>false</code>.</p>
   * @public
   */
  TrimBlanks?: boolean | undefined;

  /**
   * <p>A value that specifies to truncate data in columns to the appropriate number of
   *          characters, so that the data fits in the column. This parameter applies only to columns
   *          with a VARCHAR or CHAR data type, and rows with a size of 4 MB or less. Choose
   *             <code>true</code> to truncate data. The default is <code>false</code>.</p>
   * @public
   */
  TruncateColumns?: boolean | undefined;

  /**
   * <p>An Amazon Redshift user name for a registered user.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The size (in KB) of the in-memory file write buffer used when generating .csv files on
   *          the local disk at the DMS replication instance. The default value is 1000 (buffer size is
   *          1000KB).</p>
   * @public
   */
  WriteBufferSize?: number | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted
   *          entity and grants the required permissions to access the value in
   *             <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code>
   *          action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that
   *          allows access to the Amazon Redshift endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the
   *                <i>Database Migration Service User Guide</i>.</p>
   *          </note>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the Amazon Redshift endpoint connection details.</p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * <p>When true, lets Redshift migrate the boolean type as boolean. By default, Redshift
   *          migrates booleans as <code>varchar(1)</code>. You must set this setting on both the source
   *          and target endpoints for it to take effect.</p>
   * @public
   */
  MapBooleanAsBoolean?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const CannedAclForObjectsValue = {
  AUTHENTICATED_READ: "authenticated-read",
  AWS_EXEC_READ: "aws-exec-read",
  BUCKET_OWNER_FULL_CONTROL: "bucket-owner-full-control",
  BUCKET_OWNER_READ: "bucket-owner-read",
  NONE: "none",
  PRIVATE: "private",
  PUBLIC_READ: "public-read",
  PUBLIC_READ_WRITE: "public-read-write",
} as const;

/**
 * @public
 */
export type CannedAclForObjectsValue = (typeof CannedAclForObjectsValue)[keyof typeof CannedAclForObjectsValue];

/**
 * @public
 * @enum
 */
export const CompressionTypeValue = {
  GZIP: "gzip",
  NONE: "none",
} as const;

/**
 * @public
 */
export type CompressionTypeValue = (typeof CompressionTypeValue)[keyof typeof CompressionTypeValue];

/**
 * @public
 * @enum
 */
export const DataFormatValue = {
  CSV: "csv",
  PARQUET: "parquet",
} as const;

/**
 * @public
 */
export type DataFormatValue = (typeof DataFormatValue)[keyof typeof DataFormatValue];

/**
 * @public
 * @enum
 */
export const DatePartitionDelimiterValue = {
  DASH: "DASH",
  NONE: "NONE",
  SLASH: "SLASH",
  UNDERSCORE: "UNDERSCORE",
} as const;

/**
 * @public
 */
export type DatePartitionDelimiterValue =
  (typeof DatePartitionDelimiterValue)[keyof typeof DatePartitionDelimiterValue];

/**
 * @public
 * @enum
 */
export const DatePartitionSequenceValue = {
  DDMMYYYY: "DDMMYYYY",
  MMYYYYDD: "MMYYYYDD",
  YYYYMM: "YYYYMM",
  YYYYMMDD: "YYYYMMDD",
  YYYYMMDDHH: "YYYYMMDDHH",
} as const;

/**
 * @public
 */
export type DatePartitionSequenceValue = (typeof DatePartitionSequenceValue)[keyof typeof DatePartitionSequenceValue];

/**
 * @public
 * @enum
 */
export const EncodingTypeValue = {
  PLAIN: "plain",
  PLAIN_DICTIONARY: "plain-dictionary",
  RLE_DICTIONARY: "rle-dictionary",
} as const;

/**
 * @public
 */
export type EncodingTypeValue = (typeof EncodingTypeValue)[keyof typeof EncodingTypeValue];

/**
 * @public
 * @enum
 */
export const ParquetVersionValue = {
  PARQUET_1_0: "parquet-1-0",
  PARQUET_2_0: "parquet-2-0",
} as const;

/**
 * @public
 */
export type ParquetVersionValue = (typeof ParquetVersionValue)[keyof typeof ParquetVersionValue];

/**
 * <p>Settings for exporting data to Amazon S3. </p>
 * @public
 */
export interface S3Settings {
  /**
   * <p> The Amazon Resource Name (ARN) used by the service to access the IAM role. The role
   *          must allow the <code>iam:PassRole</code> action. It is a required parameter that enables
   *          DMS to write and read objects from an S3 bucket.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p> Specifies how tables are defined in the S3 source files only. </p>
   * @public
   */
  ExternalTableDefinition?: string | undefined;

  /**
   * <p> The delimiter used to separate rows in the .csv file for both source and target. The
   *          default is a carriage return (<code>\n</code>). </p>
   * @public
   */
  CsvRowDelimiter?: string | undefined;

  /**
   * <p> The delimiter used to separate columns in the .csv file for both source and target. The
   *          default is a comma. </p>
   * @public
   */
  CsvDelimiter?: string | undefined;

  /**
   * <p> An optional parameter to set a folder name in the S3 bucket. If provided, tables are
   *          created in the path
   *                <code>
   *                <i>bucketFolder</i>/<i>schema_name</i>/<i>table_name</i>/</code>.
   *          If this parameter isn't specified, then the path used is
   *                <code>
   *                <i>schema_name</i>/<i>table_name</i>/</code>.
   *       </p>
   * @public
   */
  BucketFolder?: string | undefined;

  /**
   * <p> The name of the S3 bucket. </p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>An optional parameter to use GZIP to compress the target files. Set to GZIP to compress
   *          the target files. Either set this parameter to NONE (the default) or don't use it to
   *          leave the files uncompressed. This parameter applies to both .csv and .parquet file
   *          formats. </p>
   * @public
   */
  CompressionType?: CompressionTypeValue | undefined;

  /**
   * <p>The type of server-side encryption that you want to use for your data. This encryption
   *          type is part of the endpoint settings or the extra connections attributes for Amazon S3.
   *          You can choose either <code>SSE_S3</code> (the default) or <code>SSE_KMS</code>. </p>
   *          <note>
   *             <p>For the <code>ModifyEndpoint</code> operation, you can change the existing value of
   *             the <code>EncryptionMode</code> parameter from <code>SSE_KMS</code> to
   *                <code>SSE_S3</code>. But you can’t change the existing value from <code>SSE_S3</code>
   *             to <code>SSE_KMS</code>.</p>
   *          </note>
   *          <p>To use <code>SSE_S3</code>, you need an Identity and Access Management (IAM) role with permission to allow
   *             <code>"arn:aws:s3:::dms-*"</code> to use the following actions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>s3:CreateBucket</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:ListBucket</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:DeleteBucket</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:GetBucketLocation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:GetObject</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:PutObject</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:DeleteObject</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:GetObjectVersion</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:GetBucketPolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:PutBucketPolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:DeleteBucketPolicy</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionMode?: EncryptionModeValue | undefined;

  /**
   * <p>If you are using <code>SSE_KMS</code> for the <code>EncryptionMode</code>, provide the
   *          KMS key ID. The key that you use needs an attached policy that enables Identity and Access Management (IAM)
   *          user permissions and allows use of the key.</p>
   *          <p>Here is a CLI example: <code>aws dms create-endpoint --endpoint-identifier
   *                <i>value</i> --endpoint-type target --engine-name s3 --s3-settings
   *                ServiceAccessRoleArn=<i>value</i>,BucketFolder=<i>value</i>,BucketName=<i>value</i>,EncryptionMode=SSE_KMS,ServerSideEncryptionKmsKeyId=<i>value</i>
   *             </code>
   *          </p>
   * @public
   */
  ServerSideEncryptionKmsKeyId?: string | undefined;

  /**
   * <p>The format of the data that you want to use for output. You can choose one of the
   *          following: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>csv</code> : This is a row-based file format with comma-separated values
   *                (.csv). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parquet</code> : Apache Parquet (.parquet) is a columnar storage file format
   *                that features efficient compression and provides faster query response. </p>
   *             </li>
   *          </ul>
   * @public
   */
  DataFormat?: DataFormatValue | undefined;

  /**
   * <p>The type of encoding you are using: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RLE_DICTIONARY</code> uses a combination of bit-packing and run-length
   *                encoding to store repeated values more efficiently. This is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLAIN</code> doesn't use encoding at all. Values are stored as they
   *                are.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLAIN_DICTIONARY</code> builds a dictionary of the values encountered in a
   *                given column. The dictionary is stored in a dictionary page for each column
   *                chunk.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncodingType?: EncodingTypeValue | undefined;

  /**
   * <p>The maximum size of an encoded dictionary page of a column. If the dictionary page
   *          exceeds this, this column is stored using an encoding type of <code>PLAIN</code>. This
   *          parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page
   *          before it reverts to <code>PLAIN</code> encoding. This size is used for .parquet file
   *          format only. </p>
   * @public
   */
  DictPageSizeLimit?: number | undefined;

  /**
   * <p>The number of rows in a row group. A smaller row group size provides faster reads. But
   *          as the number of row groups grows, the slower writes become. This parameter defaults to
   *          10,000 rows. This number is used for .parquet file format only. </p>
   *          <p>If you choose a value larger than the maximum, <code>RowGroupLength</code> is set to the
   *          max row group length in bytes (64 * 1024 * 1024). </p>
   * @public
   */
  RowGroupLength?: number | undefined;

  /**
   * <p>The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1
   *          MiB). This number is used for .parquet file format only. </p>
   * @public
   */
  DataPageSize?: number | undefined;

  /**
   * <p>The version of the Apache Parquet format that you want to use: <code>parquet_1_0</code>
   *          (the default) or <code>parquet_2_0</code>.</p>
   * @public
   */
  ParquetVersion?: ParquetVersionValue | undefined;

  /**
   * <p>A value that enables statistics for Parquet pages and row groups. Choose
   *             <code>true</code> to enable statistics, <code>false</code> to disable. Statistics
   *          include <code>NULL</code>, <code>DISTINCT</code>, <code>MAX</code>, and <code>MIN</code>
   *          values. This parameter defaults to <code>true</code>. This value is used for .parquet file
   *          format only.</p>
   * @public
   */
  EnableStatistics?: boolean | undefined;

  /**
   * <p>A value that enables a full load to write INSERT operations to the comma-separated value
   *          (.csv) or .parquet output files only to indicate how the rows were added to the source
   *          database.</p>
   *          <note>
   *             <p>DMS supports the <code>IncludeOpForFullLoad</code> parameter in versions 3.1.4 and
   *             later.</p>
   *             <p>DMS supports the use of the .parquet files with the
   *                <code>IncludeOpForFullLoad</code> parameter in versions 3.4.7 and later.</p>
   *          </note>
   *          <p>For full load, records can only be inserted. By default (the <code>false</code>
   *          setting), no information is recorded in these output files for a full load to indicate that
   *          the rows were inserted at the source database. If <code>IncludeOpForFullLoad</code> is set
   *          to <code>true</code> or <code>y</code>, the INSERT is recorded as an I annotation in the
   *          first field of the .csv file. This allows the format of your target records from a full
   *          load to be consistent with the target records from a CDC load.</p>
   *          <note>
   *             <p>This setting works together with the <code>CdcInsertsOnly</code> and the
   *                <code>CdcInsertsAndUpdates</code> parameters for output to .csv files only. For more
   *             information about how these settings work together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the
   *                <i>Database Migration Service User Guide.</i>.</p>
   *          </note>
   * @public
   */
  IncludeOpForFullLoad?: boolean | undefined;

  /**
   * <p>A value that enables a change data capture (CDC) load to write only INSERT operations to
   *          .csv or columnar storage (.parquet) output files. By default (the <code>false</code>
   *          setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U
   *          (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or
   *          deleted at the source database for a CDC load to the target.</p>
   *          <p>If <code>CdcInsertsOnly</code> is set to <code>true</code> or <code>y</code>, only
   *          INSERTs from the source database are migrated to the .csv or .parquet file. For .csv format
   *          only, how these INSERTs are recorded depends on the value of
   *             <code>IncludeOpForFullLoad</code>. If <code>IncludeOpForFullLoad</code> is set to
   *             <code>true</code>, the first field of every CDC record is set to I to indicate the
   *          INSERT operation at the source. If <code>IncludeOpForFullLoad</code> is set to
   *             <code>false</code>, every CDC record is written without a first field to indicate the
   *          INSERT operation at the source. For more information about how these settings work
   *          together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>Database Migration Service
   *             User Guide.</i>.</p>
   *          <note>
   *             <p>DMS supports the interaction described preceding between the
   *                <code>CdcInsertsOnly</code> and <code>IncludeOpForFullLoad</code> parameters in
   *             versions 3.1.4 and later. </p>
   *             <p>
   *                <code>CdcInsertsOnly</code> and <code>CdcInsertsAndUpdates</code> can't both be
   *             set to <code>true</code> for the same endpoint. Set either <code>CdcInsertsOnly</code>
   *             or <code>CdcInsertsAndUpdates</code> to <code>true</code> for the same endpoint, but not
   *             both.</p>
   *          </note>
   * @public
   */
  CdcInsertsOnly?: boolean | undefined;

  /**
   * <p>A value that when nonblank causes DMS to add a column with timestamp information to
   *          the endpoint data for an Amazon S3 target.</p>
   *          <note>
   *             <p>DMS supports the <code>TimestampColumnName</code> parameter in versions 3.1.4 and
   *             later.</p>
   *          </note>
   *          <p>DMS includes an additional <code>STRING</code> column in the .csv or .parquet object
   *          files of your migrated data when you set <code>TimestampColumnName</code> to a nonblank
   *          value.</p>
   *          <p>For a full load, each row of this timestamp column contains a timestamp for when the
   *          data was transferred from the source to the target by DMS. </p>
   *          <p>For a change data capture (CDC) load, each row of the timestamp column contains the
   *          timestamp for the commit of that row in the source database.</p>
   *          <p>The string format for this timestamp column value is <code>yyyy-MM-dd
   *             HH:mm:ss.SSSSSS</code>. By default, the precision of this value is in microseconds. For
   *          a CDC load, the rounding of the precision depends on the commit timestamp supported by DMS
   *          for the source database.</p>
   *          <p>When the <code>AddColumnName</code> parameter is set to <code>true</code>, DMS also
   *          includes a name for the timestamp column that you set with
   *          <code>TimestampColumnName</code>.</p>
   * @public
   */
  TimestampColumnName?: string | undefined;

  /**
   * <p>A value that specifies the precision of any <code>TIMESTAMP</code> column values that
   *          are written to an Amazon S3 object file in .parquet format.</p>
   *          <note>
   *             <p>DMS supports the <code>ParquetTimestampInMillisecond</code> parameter in versions
   *             3.1.4 and later.</p>
   *          </note>
   *          <p>When <code>ParquetTimestampInMillisecond</code> is set to <code>true</code> or
   *             <code>y</code>, DMS writes all <code>TIMESTAMP</code> columns in a .parquet formatted
   *          file with millisecond precision. Otherwise, DMS writes them with microsecond
   *          precision.</p>
   *          <p>Currently, Amazon Athena and Glue can handle only millisecond precision for
   *             <code>TIMESTAMP</code> values. Set this parameter to <code>true</code> for S3 endpoint
   *          object files that are .parquet formatted only if you plan to query or process the data with
   *          Athena or Glue.</p>
   *          <note>
   *             <p>DMS writes any <code>TIMESTAMP</code> column values written to an S3 file in .csv
   *             format with microsecond precision.</p>
   *             <p>Setting <code>ParquetTimestampInMillisecond</code> has no effect on the string format
   *             of the timestamp column value that is inserted by setting the
   *                <code>TimestampColumnName</code> parameter.</p>
   *          </note>
   * @public
   */
  ParquetTimestampInMillisecond?: boolean | undefined;

  /**
   * <p>A value that enables a change data capture (CDC) load to write INSERT and UPDATE
   *          operations to .csv or .parquet (columnar storage) output files. The default setting is
   *             <code>false</code>, but when <code>CdcInsertsAndUpdates</code> is set to
   *             <code>true</code> or <code>y</code>, only INSERTs and UPDATEs from the source database
   *          are migrated to the .csv or .parquet file.</p>
   *          <important>
   *             <p>DMS supports the use of the .parquet files in versions 3.4.7 and later.</p>
   *          </important>
   *          <p>How these INSERTs and UPDATEs are recorded depends on the value of the
   *             <code>IncludeOpForFullLoad</code> parameter. If <code>IncludeOpForFullLoad</code> is set
   *          to <code>true</code>, the first field of every CDC record is set to either <code>I</code>
   *          or <code>U</code> to indicate INSERT and UPDATE operations at the source. But if
   *             <code>IncludeOpForFullLoad</code> is set to <code>false</code>, CDC records are written
   *          without an indication of INSERT or UPDATE operations at the source. For more information
   *          about how these settings work together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>Database Migration Service
   *             User Guide.</i>.</p>
   *          <note>
   *             <p>DMS supports the use of the <code>CdcInsertsAndUpdates</code> parameter in versions
   *             3.3.1 and later.</p>
   *             <p>
   *                <code>CdcInsertsOnly</code> and <code>CdcInsertsAndUpdates</code> can't both be
   *             set to <code>true</code> for the same endpoint. Set either <code>CdcInsertsOnly</code>
   *             or <code>CdcInsertsAndUpdates</code> to <code>true</code> for the same endpoint, but not
   *             both.</p>
   *          </note>
   * @public
   */
  CdcInsertsAndUpdates?: boolean | undefined;

  /**
   * <p>When set to <code>true</code>, this parameter partitions S3 bucket folders based on
   *          transaction commit dates. The default value is <code>false</code>. For more information
   *          about date-based folder partitioning, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.DatePartitioning">Using date-based folder partitioning</a>.</p>
   * @public
   */
  DatePartitionEnabled?: boolean | undefined;

  /**
   * <p>Identifies the sequence of the date format to use during folder partitioning. The
   *          default value is <code>YYYYMMDD</code>. Use this parameter when
   *             <code>DatePartitionedEnabled</code> is set to <code>true</code>.</p>
   * @public
   */
  DatePartitionSequence?: DatePartitionSequenceValue | undefined;

  /**
   * <p>Specifies a date separating delimiter to use during folder partitioning. The default
   *          value is <code>SLASH</code>. Use this parameter when <code>DatePartitionedEnabled</code> is
   *          set to <code>true</code>.</p>
   * @public
   */
  DatePartitionDelimiter?: DatePartitionDelimiterValue | undefined;

  /**
   * <p>This setting applies if the S3 output files during a change data capture (CDC) load are
   *          written in .csv format. If set to <code>true</code> for columns not included in the
   *          supplemental log, DMS uses the value specified by <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CsvNoSupValue">
   *                <code>CsvNoSupValue</code>
   *             </a>. If not set or set to
   *             <code>false</code>, DMS uses the null value for these columns.</p>
   *          <note>
   *             <p>This setting is supported in DMS versions 3.4.1 and later.</p>
   *          </note>
   * @public
   */
  UseCsvNoSupValue?: boolean | undefined;

  /**
   * <p>This setting only applies if your Amazon S3 output files during a change data capture
   *          (CDC) load are written in .csv format. If <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-UseCsvNoSupValue">
   *                <code>UseCsvNoSupValue</code>
   *             </a> is set to true, specify a
   *          string value that you want DMS to use for all columns not included in the supplemental
   *          log. If you do not specify a string value, DMS uses the null value for these columns
   *          regardless of the <code>UseCsvNoSupValue</code> setting.</p>
   *          <note>
   *             <p>This setting is supported in DMS versions 3.4.1 and later.</p>
   *          </note>
   * @public
   */
  CsvNoSupValue?: string | undefined;

  /**
   * <p>If set to <code>true</code>, DMS saves the transaction order for a change data capture
   *          (CDC) load on the Amazon S3 target specified by <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CdcPath">
   *                <code>CdcPath</code>
   *             </a>. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath">Capturing data changes (CDC) including transaction order on the S3
   *             target</a>.</p>
   *          <note>
   *             <p>This setting is supported in DMS versions 3.4.2 and later.</p>
   *          </note>
   * @public
   */
  PreserveTransactions?: boolean | undefined;

  /**
   * <p>Specifies the folder path of CDC files. For an S3 source, this setting is required if a
   *          task captures change data; otherwise, it's optional. If <code>CdcPath</code> is set, DMS
   *          reads CDC files from this path and replicates the data changes to the target endpoint. For
   *          an S3 target if you set <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-PreserveTransactions">
   *                <code>PreserveTransactions</code>
   *             </a> to <code>true</code>,
   *          DMS verifies that you have set this parameter to a folder path on your S3 target where
   *          DMS can save the transaction order for the CDC load. DMS creates this CDC folder path
   *          in either your S3 target working directory or the S3 target location specified by <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketFolder">
   *                <code>BucketFolder</code>
   *             </a> and <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketName">
   *                <code>BucketName</code>
   *             </a>.</p>
   *          <p>For example, if you specify <code>CdcPath</code> as <code>MyChangedData</code>, and you
   *          specify <code>BucketName</code> as <code>MyTargetBucket</code> but do not specify
   *             <code>BucketFolder</code>, DMS creates the CDC folder path following:
   *             <code>MyTargetBucket/MyChangedData</code>.</p>
   *          <p>If you specify the same <code>CdcPath</code>, and you specify <code>BucketName</code> as
   *             <code>MyTargetBucket</code> and <code>BucketFolder</code> as <code>MyTargetData</code>,
   *          DMS creates the CDC folder path following:
   *             <code>MyTargetBucket/MyTargetData/MyChangedData</code>.</p>
   *          <p>For more information on CDC including transaction order on an S3 target, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath">Capturing data changes (CDC) including transaction order on the S3
   *             target</a>.</p>
   *          <note>
   *             <p>This setting is supported in DMS versions 3.4.2 and later.</p>
   *          </note>
   * @public
   */
  CdcPath?: string | undefined;

  /**
   * <p>When set to true, this parameter uses the task start time as the timestamp column value
   *          instead of the time data is written to target. For full load, when
   *             <code>useTaskStartTimeForFullLoadTimestamp</code> is set to <code>true</code>, each row
   *          of the timestamp column contains the task start time. For CDC loads, each row of the
   *          timestamp column contains the transaction commit time.</p>
   *          <p>When <code>useTaskStartTimeForFullLoadTimestamp</code> is set to <code>false</code>, the
   *          full load timestamp in the timestamp column increments with the time data arrives at the
   *          target. </p>
   * @public
   */
  UseTaskStartTimeForFullLoadTimestamp?: boolean | undefined;

  /**
   * <p>A value that enables DMS to specify a predefined (canned) access control list for
   *          objects created in an Amazon S3 bucket as .csv or .parquet files. For more information
   *          about Amazon S3 canned ACLs, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">Canned
   *             ACL</a> in the <i>Amazon S3 Developer Guide.</i>
   *          </p>
   *          <p>The default value is NONE. Valid values include NONE, PRIVATE, PUBLIC_READ,
   *          PUBLIC_READ_WRITE, AUTHENTICATED_READ, AWS_EXEC_READ, BUCKET_OWNER_READ, and
   *          BUCKET_OWNER_FULL_CONTROL.</p>
   * @public
   */
  CannedAclForObjects?: CannedAclForObjectsValue | undefined;

  /**
   * <p>An optional parameter that, when set to <code>true</code> or <code>y</code>, you can use
   *          to add column name information to the .csv output file.</p>
   *          <p>The default value is <code>false</code>. Valid values are <code>true</code>,
   *             <code>false</code>, <code>y</code>, and <code>n</code>.</p>
   * @public
   */
  AddColumnName?: boolean | undefined;

  /**
   * <p>Maximum length of the interval, defined in seconds, after which to output a file to
   *          Amazon S3.</p>
   *          <p>When <code>CdcMaxBatchInterval</code> and <code>CdcMinFileSize</code> are both
   *          specified, the file write is triggered by whichever parameter condition is met first within
   *          an DMS CloudFormation template.</p>
   *          <p>The default value is 60 seconds.</p>
   * @public
   */
  CdcMaxBatchInterval?: number | undefined;

  /**
   * <p>Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.</p>
   *          <p>When <code>CdcMinFileSize</code> and <code>CdcMaxBatchInterval</code> are both
   *          specified, the file write is triggered by whichever parameter condition is met first within
   *          an DMS CloudFormation template.</p>
   *          <p>The default value is 32 MB.</p>
   * @public
   */
  CdcMinFileSize?: number | undefined;

  /**
   * <p>An optional parameter that specifies how DMS treats null values. While handling the
   *          null value, you can use this parameter to pass a user-defined string as null when writing
   *          to the target. For example, when target columns are nullable, you can use this option to
   *          differentiate between the empty string value and the null value. So, if you set this
   *          parameter value to the empty string ("" or ''), DMS treats the empty string as the null
   *          value instead of <code>NULL</code>.</p>
   *          <p>The default value is <code>NULL</code>. Valid values include any valid string.</p>
   * @public
   */
  CsvNullValue?: string | undefined;

  /**
   * <p>When this value is set to 1, DMS ignores the first row header in a .csv file. A value
   *          of 1 turns on the feature; a value of 0 turns off the feature.</p>
   *          <p>The default is 0.</p>
   * @public
   */
  IgnoreHeaderRows?: number | undefined;

  /**
   * <p>A value that specifies the maximum size (in KB) of any .csv file to be created while
   *          migrating to an S3 target during full load.</p>
   *          <p>The default value is 1,048,576 KB (1 GB). Valid values include 1 to 1,048,576.</p>
   * @public
   */
  MaxFileSize?: number | undefined;

  /**
   * <p>For an S3 source, when this value is set to <code>true</code> or <code>y</code>, each
   *          leading double quotation mark has to be followed by an ending double quotation mark. This
   *          formatting complies with RFC 4180. When this value is set to <code>false</code> or
   *             <code>n</code>, string literals are copied to the target as is. In this case, a
   *          delimiter (row or column) signals the end of the field. Thus, you can't use a
   *          delimiter as part of the string, because it signals the end of the value.</p>
   *          <p>For an S3 target, an optional parameter used to set behavior to comply with RFC 4180 for
   *          data migrated to Amazon S3 using .csv file format only. When this value is set to
   *             <code>true</code> or <code>y</code> using Amazon S3 as a target, if the data has
   *          quotation marks or newline characters in it, DMS encloses the entire column with an
   *          additional pair of double quotation marks ("). Every quotation mark within the data is
   *          repeated twice.</p>
   *          <p>The default value is <code>true</code>. Valid values include <code>true</code>,
   *             <code>false</code>, <code>y</code>, and <code>n</code>.</p>
   * @public
   */
  Rfc4180?: boolean | undefined;

  /**
   * <p>When creating an S3 target endpoint, set <code>DatePartitionTimezone</code> to convert
   *          the current UTC time into a specified time zone. The conversion occurs when a date
   *          partition folder is created and a CDC filename is generated. The time zone format is
   *          Area/Location. Use this parameter when <code>DatePartitionedEnabled</code> is set to
   *             <code>true</code>, as shown in the following example.</p>
   *          <p>
   *             <code>s3-settings='\{"DatePartitionEnabled": true, "DatePartitionSequence": "YYYYMMDDHH",
   *             "DatePartitionDelimiter": "SLASH",
   *                "DatePartitionTimezone":"<i>Asia/Seoul</i>", "BucketName":
   *             "dms-nattarat-test"\}'</code>
   *          </p>
   * @public
   */
  DatePartitionTimezone?: string | undefined;

  /**
   * <p>Use the S3 target endpoint setting <code>AddTrailingPaddingCharacter</code> to add
   *          padding on string data. The default value is <code>false</code>.</p>
   * @public
   */
  AddTrailingPaddingCharacter?: boolean | undefined;

  /**
   * <p>To specify a bucket owner and prevent sniping, you can use the
   *             <code>ExpectedBucketOwner</code> endpoint setting. </p>
   *          <p>Example: <code>--s3-settings='\{"ExpectedBucketOwner":
   *                "<i>AWS_Account_ID</i>"\}'</code>
   *          </p>
   *          <p>When you make a request to test a connection or perform a migration, S3 checks the
   *          account ID of the bucket owner against the specified parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>When true, allows Glue to catalog your S3 bucket. Creating an Glue catalog lets you
   *          use Athena to query your data.</p>
   * @public
   */
  GlueCatalogGeneration?: boolean | undefined;
}

/**
 * <p>Provides information that defines a SAP ASE endpoint.</p>
 * @public
 */
export interface SybaseSettings {
  /**
   * <p>Database name for the endpoint.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Endpoint connection password.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>Endpoint TCP port. The default is 5000.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Fully qualified domain name of the endpoint.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>Endpoint connection user name.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted
   *          entity and grants the required permissions to access the value in
   *             <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code>
   *          action. <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that
   *          allows access to the SAP ASE endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the
   *                <i>Database Migration Service User Guide</i>.</p>
   *          </note>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the SAP SAE endpoint connection details.</p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;
}

/**
 * <p>Provides information that defines an Amazon Timestream endpoint.</p>
 * @public
 */
export interface TimestreamSettings {
  /**
   * <p>Database name for the endpoint.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>Set this attribute to specify the length of time to store all of the tables in memory
   *          that are migrated into Amazon Timestream from the source database. Time is measured in
   *          units of hours. When Timestream data comes in, it first resides in memory for the specified
   *          duration, which allows quick access to it.</p>
   * @public
   */
  MemoryDuration: number | undefined;

  /**
   * <p>Set this attribute to specify the default magnetic duration applied to the Amazon
   *          Timestream tables in days. This is the number of days that records remain in magnetic store
   *          before being discarded. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html">Storage</a> in the <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/">Amazon Timestream Developer
   *             Guide</a>.</p>
   * @public
   */
  MagneticDuration: number | undefined;

  /**
   * <p>Set this attribute to <code>true</code> to specify that DMS only applies inserts and
   *          updates, and not deletes. Amazon Timestream does not allow deleting records, so if this
   *          value is <code>false</code>, DMS nulls out the corresponding record in the Timestream
   *          database rather than deleting it.</p>
   * @public
   */
  CdcInsertsAndUpdates?: boolean | undefined;

  /**
   * <p>Set this attribute to <code>true</code> to enable memory store writes. When this value
   *          is <code>false</code>, DMS does not write records that are older in days than the value
   *          specified in <code>MagneticDuration</code>, because Amazon Timestream does not allow memory
   *          writes by default. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html">Storage</a> in the <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/">Amazon Timestream Developer
   *             Guide</a>.</p>
   * @public
   */
  EnableMagneticStoreWrites?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateEndpointMessage {
  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two
   *          consecutive hyphens.</p>
   * @public
   */
  EndpointIdentifier: string | undefined;

  /**
   * <p>The type of endpoint. Valid values are <code>source</code> and
   *          <code>target</code>.</p>
   * @public
   */
  EndpointType: ReplicationEndpointTypeValue | undefined;

  /**
   * <p>The type of engine for the endpoint. Valid values, depending on the
   *             <code>EndpointType</code> value, include <code>"mysql"</code>, <code>"oracle"</code>,
   *             <code>"postgres"</code>, <code>"mariadb"</code>, <code>"aurora"</code>,
   *             <code>"aurora-postgresql"</code>, <code>"opensearch"</code>, <code>"redshift"</code>,
   *             <code>"s3"</code>, <code>"db2"</code>, <code>"db2-zos"</code>, <code>"azuredb"</code>,
   *             <code>"sybase"</code>, <code>"dynamodb"</code>, <code>"mongodb"</code>,
   *             <code>"kinesis"</code>, <code>"kafka"</code>, <code>"elasticsearch"</code>,
   *             <code>"docdb"</code>, <code>"sqlserver"</code>, <code>"neptune"</code>,
   *             <code>"babelfish"</code>, <code>redshift-serverless</code>,
   *             <code>aurora-serverless</code>, <code>aurora-postgresql-serverless</code>,
   *             <code>gcp-mysql</code>, <code>azure-sql-managed-instance</code>, <code>redis</code>,
   *             <code>dms-transfer</code>.</p>
   * @public
   */
  EngineName: string | undefined;

  /**
   * <p>The user name to be used to log in to the endpoint database.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The password to be used to log in to the endpoint database.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The name of the server where the endpoint database resides.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port used by the endpoint database.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The name of the endpoint database. For a MySQL source or target endpoint, do not specify
   *          DatabaseName. To migrate to a specific database, use this setting and
   *             <code>targetDbType</code>.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Additional attributes associated with the connection. Each attribute is specified as a
   *          name-value pair associated by an equal sign (=). Multiple attributes are separated by a
   *          semicolon (;) with no additional white space. For information on the attributes available
   *          for connecting your source or target endpoint, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Endpoints.html">Working with DMS Endpoints</a> in
   *          the <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  ExtraConnectionAttributes?: string | undefined;

  /**
   * <p>An KMS key identifier that is used to encrypt the connection parameters for the
   *          endpoint.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS uses
   *          your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has
   *          a different default encryption key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>One or more tags to be assigned to the endpoint.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is
   *             <code>none</code>
   *          </p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for the service access role that you want to use to
   *          create the endpoint. The role must allow the <code>iam:PassRole</code> action.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p>The external table definition. </p>
   * @public
   */
  ExternalTableDefinition?: string | undefined;

  /**
   * <p>Settings in JSON format for the target Amazon DynamoDB endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping">Using Object Mapping to Migrate Data to DynamoDB</a> in the <i>Database Migration Service
   *             User Guide.</i>
   *          </p>
   * @public
   */
  DynamoDbSettings?: DynamoDbSettings | undefined;

  /**
   * <p>Settings in JSON format for the target Amazon S3 endpoint. For more information about
   *          the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring">Extra
   *             Connection Attributes When Using Amazon S3 as a Target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  S3Settings?: S3Settings | undefined;

  /**
   * <p>The settings in JSON format for the DMS transfer type of source endpoint. </p>
   *          <p>Possible settings include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ServiceAccessRoleArn</code> - The Amazon Resource Name (ARN) used by the
   *                service access IAM role. The role must allow the <code>iam:PassRole</code>
   *                action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BucketName</code> - The name of the S3 bucket to use.</p>
   *             </li>
   *          </ul>
   *          <p>Shorthand syntax for these settings is as follows:
   *             <code>ServiceAccessRoleArn=string,BucketName=string</code>
   *          </p>
   *          <p>JSON syntax for these settings is as follows: <code>\{ "ServiceAccessRoleArn": "string",
   *             "BucketName": "string", \} </code>
   *          </p>
   * @public
   */
  DmsTransferSettings?: DmsTransferSettings | undefined;

  /**
   * <p>Settings in JSON format for the source MongoDB endpoint. For more information about the
   *          available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration">Endpoint configuration settings when using MongoDB as a source for Database Migration Service</a> in
   *          the <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  MongoDbSettings?: MongoDbSettings | undefined;

  /**
   * <p>Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For
   *          more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping">Using object mapping to migrate data to a Kinesis data stream</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  KinesisSettings?: KinesisSettings | undefined;

  /**
   * <p>Settings in JSON format for the target Apache Kafka endpoint. For more information about
   *          the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping">Using
   *             object mapping to migrate data to a Kafka topic</a> in the <i>Database Migration Service User
   *             Guide.</i>
   *          </p>
   * @public
   */
  KafkaSettings?: KafkaSettings | undefined;

  /**
   * <p>Settings in JSON format for the target OpenSearch endpoint. For more
   *          information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration">Extra Connection Attributes When Using OpenSearch as a Target for
   *             DMS</a> in the <i>Database Migration Service User Guide</i>.</p>
   * @public
   */
  ElasticsearchSettings?: ElasticsearchSettings | undefined;

  /**
   * <p>Settings in JSON format for the target Amazon Neptune endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings">Specifying graph-mapping rules using Gremlin and R2RML for Amazon
   *             Neptune as a target</a> in the <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  NeptuneSettings?: NeptuneSettings | undefined;

  /**
   * <p>Provides information that defines an Amazon Redshift endpoint.</p>
   * @public
   */
  RedshiftSettings?: RedshiftSettings | undefined;

  /**
   * <p>Settings in JSON format for the source and target PostgreSQL endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra connection attributes when using PostgreSQL as a source for DMS</a> and
   *             <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib"> Extra connection attributes when using PostgreSQL as a target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  PostgreSQLSettings?: PostgreSQLSettings | undefined;

  /**
   * <p>Settings in JSON format for the source and target MySQL endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib">Extra connection attributes when using MySQL as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib">Extra connection attributes when using a MySQL-compatible database as a target for
   *             DMS</a> in the <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  MySQLSettings?: MySQLSettings | undefined;

  /**
   * <p>Settings in JSON format for the source and target Oracle endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib">Extra connection attributes when using Oracle as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib">
   *             Extra connection attributes when using Oracle as a target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  OracleSettings?: OracleSettings | undefined;

  /**
   * <p>Settings in JSON format for the source and target SAP ASE endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib">Extra
   *             connection attributes when using SAP ASE as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib">Extra
   *             connection attributes when using SAP ASE as a target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  SybaseSettings?: SybaseSettings | undefined;

  /**
   * <p>Settings in JSON format for the source and target Microsoft SQL Server endpoint. For
   *          information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib">Extra connection attributes when using SQL Server as a source for DMS</a> and
   *             <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib"> Extra connection attributes when using SQL Server as a target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings | undefined;

  /**
   * <p>Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other
   *          available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib">Extra
   *             connection attributes when using Db2 LUW as a source for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  IBMDb2Settings?: IBMDb2Settings | undefined;

  /**
   * <p>A friendly name for the resource identifier at the end of the <code>EndpointArn</code>
   *          response parameter that is returned in the created <code>Endpoint</code> object. The value
   *          for this parameter can have up to 31 characters. It can contain only ASCII letters, digits,
   *          and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens,
   *          and can only begin with a letter, such as <code>Example-App-ARN1</code>. For example, this
   *          value might result in the <code>EndpointArn</code> value
   *             <code>arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1</code>. If you don't
   *          specify a <code>ResourceIdentifier</code> value, DMS generates a default identifier value
   *          for the end of <code>EndpointArn</code>.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>Provides information that defines a DocumentDB endpoint.</p>
   * @public
   */
  DocDbSettings?: DocDbSettings | undefined;

  /**
   * <p>Settings in JSON format for the target Redis endpoint.</p>
   * @public
   */
  RedisSettings?: RedisSettings | undefined;

  /**
   * <p>Settings in JSON format for the source GCP MySQL endpoint.</p>
   * @public
   */
  GcpMySQLSettings?: GcpMySQLSettings | undefined;

  /**
   * <p>Settings in JSON format for the target Amazon Timestream endpoint.</p>
   * @public
   */
  TimestreamSettings?: TimestreamSettings | undefined;
}

/**
 * <p>Describes an endpoint of a database instance in response to operations such as the
 *          following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ModifyEndpoint</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two
   *          consecutive hyphens.</p>
   * @public
   */
  EndpointIdentifier?: string | undefined;

  /**
   * <p>The type of endpoint. Valid values are <code>source</code> and
   *          <code>target</code>.</p>
   * @public
   */
  EndpointType?: ReplicationEndpointTypeValue | undefined;

  /**
   * <p>The database engine name. Valid values, depending on the EndpointType, include
   *             <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *             <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>,
   *             <code>"redshift"</code>, <code>"redshift-serverless"</code>, <code>"s3"</code>,
   *             <code>"db2"</code>, <code>"db2-zos"</code>, <code>"azuredb"</code>,
   *             <code>"sybase"</code>, <code>"dynamodb"</code>, <code>"mongodb"</code>,
   *             <code>"kinesis"</code>, <code>"kafka"</code>, <code>"elasticsearch"</code>,
   *             <code>"documentdb"</code>, <code>"sqlserver"</code>, <code>"neptune"</code>, and
   *             <code>"babelfish"</code>.</p>
   * @public
   */
  EngineName?: string | undefined;

  /**
   * <p>The expanded name for the engine name. For example, if the <code>EngineName</code>
   *          parameter is "aurora", this value would be "Amazon Aurora MySQL".</p>
   * @public
   */
  EngineDisplayName?: string | undefined;

  /**
   * <p>The user name used to connect to the endpoint.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The name of the server at the endpoint.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port value used to access the endpoint.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The name of the database at the endpoint.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Additional connection attributes used to connect to the endpoint.</p>
   * @public
   */
  ExtraConnectionAttributes?: string | undefined;

  /**
   * <p>The status of the endpoint.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>An KMS key identifier that is used to encrypt the connection parameters for the
   *          endpoint.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS uses
   *          your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has
   *          a different default encryption key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used for SSL connection to the endpoint.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The SSL mode used to connect to the endpoint. The default value is
   *          <code>none</code>.</p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must
   *          allow the <code>iam:PassRole</code> action.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p>The external table definition.</p>
   * @public
   */
  ExternalTableDefinition?: string | undefined;

  /**
   * <p> Value returned by a call to CreateEndpoint that can be used for cross-account
   *          validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a
   *          cross-account. </p>
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * <p>The settings for the DynamoDB target endpoint. For more information, see the
   *             <code>DynamoDBSettings</code> structure.</p>
   * @public
   */
  DynamoDbSettings?: DynamoDbSettings | undefined;

  /**
   * <p>The settings for the S3 target endpoint. For more information, see the
   *             <code>S3Settings</code> structure.</p>
   * @public
   */
  S3Settings?: S3Settings | undefined;

  /**
   * <p>The settings for the DMS Transfer type source. For more information, see
   *          the DmsTransferSettings structure. </p>
   * @public
   */
  DmsTransferSettings?: DmsTransferSettings | undefined;

  /**
   * <p>The settings for the MongoDB source endpoint. For more information, see the
   *             <code>MongoDbSettings</code> structure.</p>
   * @public
   */
  MongoDbSettings?: MongoDbSettings | undefined;

  /**
   * <p>The settings for the Amazon Kinesis target endpoint. For more information, see the
   *             <code>KinesisSettings</code> structure.</p>
   * @public
   */
  KinesisSettings?: KinesisSettings | undefined;

  /**
   * <p>The settings for the Apache Kafka target endpoint. For more information, see the
   *             <code>KafkaSettings</code> structure.</p>
   * @public
   */
  KafkaSettings?: KafkaSettings | undefined;

  /**
   * <p>The settings for the OpenSearch source endpoint. For more information, see
   *          the <code>ElasticsearchSettings</code> structure.</p>
   * @public
   */
  ElasticsearchSettings?: ElasticsearchSettings | undefined;

  /**
   * <p>The settings for the Amazon Neptune target endpoint. For more information, see the
   *             <code>NeptuneSettings</code> structure.</p>
   * @public
   */
  NeptuneSettings?: NeptuneSettings | undefined;

  /**
   * <p>Settings for the Amazon Redshift endpoint.</p>
   * @public
   */
  RedshiftSettings?: RedshiftSettings | undefined;

  /**
   * <p>The settings for the PostgreSQL source and target endpoint. For more information, see
   *          the <code>PostgreSQLSettings</code> structure.</p>
   * @public
   */
  PostgreSQLSettings?: PostgreSQLSettings | undefined;

  /**
   * <p>The settings for the MySQL source and target endpoint. For more information, see the
   *             <code>MySQLSettings</code> structure.</p>
   * @public
   */
  MySQLSettings?: MySQLSettings | undefined;

  /**
   * <p>The settings for the Oracle source and target endpoint. For more information, see the
   *             <code>OracleSettings</code> structure.</p>
   * @public
   */
  OracleSettings?: OracleSettings | undefined;

  /**
   * <p>The settings for the SAP ASE source and target endpoint. For more information, see the
   *             <code>SybaseSettings</code> structure.</p>
   * @public
   */
  SybaseSettings?: SybaseSettings | undefined;

  /**
   * <p>The settings for the Microsoft SQL Server source and target endpoint. For more
   *          information, see the <code>MicrosoftSQLServerSettings</code> structure.</p>
   * @public
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings | undefined;

  /**
   * <p>The settings for the IBM Db2 LUW source endpoint. For more information, see the
   *             <code>IBMDb2Settings</code> structure.
   *          </p>
   * @public
   */
  IBMDb2Settings?: IBMDb2Settings | undefined;

  /**
   * <p>Provides information that defines a DocumentDB endpoint.</p>
   * @public
   */
  DocDbSettings?: DocDbSettings | undefined;

  /**
   * <p>The settings for the Redis target endpoint. For more information, see the
   *             <code>RedisSettings</code> structure.</p>
   * @public
   */
  RedisSettings?: RedisSettings | undefined;

  /**
   * <p>Settings in JSON format for the source GCP MySQL endpoint.</p>
   * @public
   */
  GcpMySQLSettings?: GcpMySQLSettings | undefined;

  /**
   * <p>The settings for the Amazon Timestream target endpoint. For more information, see the
   *             <code>TimestreamSettings</code> structure.</p>
   * @public
   */
  TimestreamSettings?: TimestreamSettings | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateEndpointResponse {
  /**
   * <p>The endpoint that was created.</p>
   * @public
   */
  Endpoint?: Endpoint | undefined;
}

/**
 * <p>DMS cannot access the KMS key.</p>
 * @public
 */
export class KMSKeyNotAccessibleFault extends __BaseException {
  readonly name: "KMSKeyNotAccessibleFault" = "KMSKeyNotAccessibleFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSKeyNotAccessibleFault, __BaseException>) {
    super({
      name: "KMSKeyNotAccessibleFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSKeyNotAccessibleFault.prototype);
  }
}

/**
 * <p>Insufficient privileges are preventing access to an Amazon S3 object.</p>
 * @public
 */
export class S3AccessDeniedFault extends __BaseException {
  readonly name: "S3AccessDeniedFault" = "S3AccessDeniedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3AccessDeniedFault, __BaseException>) {
    super({
      name: "S3AccessDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3AccessDeniedFault.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export interface CreateEventSubscriptionMessage {
  /**
   * <p>The name of the DMS event notification subscription. This name must be less than 255
   *          characters.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.
   *          The ARN is created by Amazon SNS when you create a topic and subscribe to it. </p>
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * <p> The type of DMS resource that generates the events. For example, if you want to be
   *          notified of events generated by a replication instance, you set this parameter to
   *             <code>replication-instance</code>. If this value isn't specified, all events are
   *          returned. </p>
   *          <p>Valid values: <code>replication-instance</code> | <code>replication-task</code>
   *          </p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A list of event categories for a source type that you want to subscribe to. For more
   *          information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User
   *             Guide.</i>
   *          </p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>A list of identifiers for which DMS provides notification events.</p>
   *          <p>If you don't specify a value, notifications are provided for all sources.</p>
   *          <p>If you specify multiple values, they must be of the same type. For example, if you
   *          specify a database instance ID, then all of the other values must be database instance
   *          IDs.</p>
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * <p> A Boolean value; set to <code>true</code> to activate the subscription, or set to
   *             <code>false</code> to create the subscription but not activate it. </p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>One or more tags to be assigned to the event subscription.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes an event notification subscription created by the
 *             <code>CreateEventSubscription</code> operation.</p>
 * @public
 */
export interface EventSubscription {
  /**
   * <p>The Amazon Web Services customer account associated with the DMS event notification
   *          subscription.</p>
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * <p>The DMS event notification subscription Id.</p>
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * <p>The topic ARN of the DMS event notification subscription.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The status of the DMS event notification subscription.</p>
   *          <p>Constraints:</p>
   *          <p>Can be one of the following: creating | modifying | deleting | active | no-permission |
   *          topic-not-exist</p>
   *          <p>The status "no-permission" indicates that DMS no longer has permission to post to the
   *          SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the
   *          subscription was created.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The time the DMS event notification subscription was created.</p>
   * @public
   */
  SubscriptionCreationTime?: string | undefined;

  /**
   * <p> The type of DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-server | security-group |
   *          replication-task</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A list of source Ids for the event subscription.</p>
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * <p>A lists of event categories.</p>
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * <p>Boolean value that indicates if the event subscription is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateEventSubscriptionResponse {
  /**
   * <p>The event subscription that was created.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.</p>
 * @public
 */
export class KMSAccessDeniedFault extends __BaseException {
  readonly name: "KMSAccessDeniedFault" = "KMSAccessDeniedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSAccessDeniedFault, __BaseException>) {
    super({
      name: "KMSAccessDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSAccessDeniedFault.prototype);
  }
}

/**
 * <p>The specified KMS key isn't enabled.</p>
 * @public
 */
export class KMSDisabledFault extends __BaseException {
  readonly name: "KMSDisabledFault" = "KMSDisabledFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSDisabledFault, __BaseException>) {
    super({
      name: "KMSDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSDisabledFault.prototype);
  }
}

/**
 * <p>The state of the specified KMS resource isn't valid for this request.</p>
 * @public
 */
export class KMSInvalidStateFault extends __BaseException {
  readonly name: "KMSInvalidStateFault" = "KMSInvalidStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidStateFault, __BaseException>) {
    super({
      name: "KMSInvalidStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidStateFault.prototype);
  }
}

/**
 * <p>The specified KMS entity or resource can't be found.</p>
 * @public
 */
export class KMSNotFoundFault extends __BaseException {
  readonly name: "KMSNotFoundFault" = "KMSNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSNotFoundFault, __BaseException>) {
    super({
      name: "KMSNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSNotFoundFault.prototype);
  }
}

/**
 * <p>This request triggered KMS request throttling.</p>
 * @public
 */
export class KMSThrottlingFault extends __BaseException {
  readonly name: "KMSThrottlingFault" = "KMSThrottlingFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSThrottlingFault, __BaseException>) {
    super({
      name: "KMSThrottlingFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSThrottlingFault.prototype);
  }
}

/**
 * <p>The SNS topic is invalid.</p>
 * @public
 */
export class SNSInvalidTopicFault extends __BaseException {
  readonly name: "SNSInvalidTopicFault" = "SNSInvalidTopicFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSInvalidTopicFault, __BaseException>) {
    super({
      name: "SNSInvalidTopicFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSInvalidTopicFault.prototype);
  }
}

/**
 * <p>You are not authorized for the SNS subscription.</p>
 * @public
 */
export class SNSNoAuthorizationFault extends __BaseException {
  readonly name: "SNSNoAuthorizationFault" = "SNSNoAuthorizationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSNoAuthorizationFault, __BaseException>) {
    super({
      name: "SNSNoAuthorizationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSNoAuthorizationFault.prototype);
  }
}

/**
 * @public
 */
export interface CreateFleetAdvisorCollectorRequest {
  /**
   * <p>The name of your Fleet Advisor collector (for example, <code>sample-collector</code>).</p>
   * @public
   */
  CollectorName: string | undefined;

  /**
   * <p>A summary description of your Fleet Advisor collector.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The IAM role that grants permissions to access the specified Amazon S3 bucket.</p>
   * @public
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * <p>The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata.</p>
   * @public
   */
  S3BucketName: string | undefined;
}

/**
 * @public
 */
export interface CreateFleetAdvisorCollectorResponse {
  /**
   * <p>The unique ID of the new Fleet Advisor collector, for example:
   *                 <code>22fda70c-40d5-4acf-b233-a495bd8eb7f5</code>
   *          </p>
   * @public
   */
  CollectorReferencedId?: string | undefined;

  /**
   * <p>The name of the new Fleet Advisor collector.</p>
   * @public
   */
  CollectorName?: string | undefined;

  /**
   * <p>A summary description of the Fleet Advisor collector.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The IAM role that grants permissions to access the specified Amazon S3 bucket.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p>The Amazon S3 bucket that the collector uses to store inventory metadata.</p>
   * @public
   */
  S3BucketName?: string | undefined;
}

/**
 * <p>A specified Amazon S3 bucket, bucket folder, or other object can't be
 *             found.</p>
 * @public
 */
export class S3ResourceNotFoundFault extends __BaseException {
  readonly name: "S3ResourceNotFoundFault" = "S3ResourceNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3ResourceNotFoundFault, __BaseException>) {
    super({
      name: "S3ResourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3ResourceNotFoundFault.prototype);
  }
}

/**
 * @public
 */
export interface CreateInstanceProfileMessage {
  /**
   * <p>The Availability Zone where the instance profile will be created. The default
   *          value is a random, system-chosen Availability Zone in the Amazon Web Services Region where your
   *          data provider is created, for examplem <code>us-east-1d</code>.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that is used to encrypt
   *          the connection parameters for the instance profile.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyArn</code> parameter, then
   *          DMS uses your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a
   *          different default encryption key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>Specifies the accessibility options for the instance profile. A value of
   *          <code>true</code> represents an instance profile with a public IP address. A value of
   *          <code>false</code> represents an instance profile with a private IP address. The default value
   *          is <code>true</code>.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>One or more tags to be assigned to the instance profile.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the network type for the instance profile. A value of <code>IPV4</code>
   *          represents an instance profile with IPv4 network type and only supports IPv4 addressing.
   *          A value of <code>IPV6</code> represents an instance profile with IPv6 network type
   *          and only supports IPv6 addressing. A value of <code>DUAL</code> represents an instance
   *          profile with dual network type that supports IPv4 and IPv6 addressing.</p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>A user-friendly name for the instance profile.</p>
   * @public
   */
  InstanceProfileName?: string | undefined;

  /**
   * <p>A user-friendly description of the instance profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A subnet group to associate with the instance profile.</p>
   * @public
   */
  SubnetGroupIdentifier?: string | undefined;

  /**
   * <p>Specifies the VPC security group names to be used with the instance profile.
   *          The VPC security group must work with the VPC containing the instance profile.</p>
   * @public
   */
  VpcSecurityGroups?: string[] | undefined;
}

/**
 * <p>Provides information that defines an instance profile.</p>
 * @public
 */
export interface InstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the instance profile.</p>
   * @public
   */
  InstanceProfileArn?: string | undefined;

  /**
   * <p>The Availability Zone where the instance profile runs.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that is used to encrypt
   *          the connection parameters for the instance profile.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyArn</code> parameter, then
   *          DMS uses your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account
   *          has a different default encryption key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>Specifies the accessibility options for the instance profile. A value of
   *          <code>true</code> represents an instance profile with a public IP address. A value of
   *          <code>false</code> represents an instance profile with a private IP address. The default value
   *          is <code>true</code>.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>Specifies the network type for the instance profile. A value of <code>IPV4</code>
   *          represents an instance profile with IPv4 network type and only supports IPv4 addressing.
   *          A value of <code>IPV6</code> represents an instance profile with IPv6 network type
   *          and only supports IPv6 addressing. A value of <code>DUAL</code> represents an instance
   *          profile with dual network type that supports IPv4 and IPv6 addressing.</p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>The user-friendly name for the instance profile.</p>
   * @public
   */
  InstanceProfileName?: string | undefined;

  /**
   * <p>A description of the instance profile. Descriptions can have up to 31 characters.
   *          A description can contain only ASCII letters, digits, and hyphens ('-'). Also, it can't
   *          end with a hyphen or contain two consecutive hyphens, and can only begin with a letter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The time the instance profile was created.</p>
   * @public
   */
  InstanceProfileCreationTime?: Date | undefined;

  /**
   * <p>The identifier of the subnet group that is associated with the instance profile.</p>
   * @public
   */
  SubnetGroupIdentifier?: string | undefined;

  /**
   * <p>The VPC security groups that are used with the instance profile.
   *          The VPC security group must work with the VPC containing the instance profile.</p>
   * @public
   */
  VpcSecurityGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceProfileResponse {
  /**
   * <p>The instance profile that was created.</p>
   * @public
   */
  InstanceProfile?: InstanceProfile | undefined;
}

/**
 * <p>Provides information that defines a schema conversion application.</p>
 * @public
 */
export interface SCApplicationAttributes {
  /**
   * <p>The path for the Amazon S3 bucket that the application uses for exporting assessment reports.</p>
   * @public
   */
  S3BucketPath?: string | undefined;

  /**
   * <p>The ARN for the role the application uses to access its Amazon S3 bucket.</p>
   * @public
   */
  S3BucketRoleArn?: string | undefined;
}

/**
 * <p>Information about a data provider.</p>
 * @public
 */
export interface DataProviderDescriptorDefinition {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the data provider.</p>
   * @public
   */
  DataProviderIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services Secrets Manager Secret used to store access credentials for the data provider.</p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * <p>The ARN of the role used to access Amazon Web Services Secrets Manager.</p>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMigrationProjectMessage {
  /**
   * <p>A user-friendly name for the migration project.</p>
   * @public
   */
  MigrationProjectName?: string | undefined;

  /**
   * <p>Information about the source data provider, including the name, ARN, and Secrets Manager parameters.</p>
   * @public
   */
  SourceDataProviderDescriptors: DataProviderDescriptorDefinition[] | undefined;

  /**
   * <p>Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.</p>
   * @public
   */
  TargetDataProviderDescriptors: DataProviderDescriptorDefinition[] | undefined;

  /**
   * <p>The identifier of the associated instance profile. Identifiers must begin with a letter
   *          and must contain only ASCII letters, digits, and hyphens. They can't end with
   *          a hyphen, or contain two consecutive hyphens.</p>
   * @public
   */
  InstanceProfileIdentifier: string | undefined;

  /**
   * <p>The settings in JSON format for migration rules. Migration rules make it possible for you to change
   *          the object names according to the rules that you specify. For example, you can change an object name
   *          to lowercase or uppercase, add or remove a prefix or suffix, or rename objects.</p>
   * @public
   */
  TransformationRules?: string | undefined;

  /**
   * <p>A user-friendly description of the migration project.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>One or more tags to be assigned to the migration project.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.</p>
   * @public
   */
  SchemaConversionApplicationAttributes?: SCApplicationAttributes | undefined;
}

/**
 * <p>Information about a data provider.</p>
 * @public
 */
export interface DataProviderDescriptor {
  /**
   * <p>The identifier of the Amazon Web Services Secrets Manager Secret used to store access credentials for the data provider.</p>
   * @public
   */
  SecretsManagerSecretId?: string | undefined;

  /**
   * <p>The ARN of the role used to access Amazon Web Services Secrets Manager.</p>
   * @public
   */
  SecretsManagerAccessRoleArn?: string | undefined;

  /**
   * <p>The user-friendly name of the data provider.</p>
   * @public
   */
  DataProviderName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data provider.</p>
   * @public
   */
  DataProviderArn?: string | undefined;
}

/**
 * <p>Provides information that defines a migration project.</p>
 * @public
 */
export interface MigrationProject {
  /**
   * <p>The name of the migration project.</p>
   * @public
   */
  MigrationProjectName?: string | undefined;

  /**
   * <p>The ARN string that uniquely identifies the migration project.</p>
   * @public
   */
  MigrationProjectArn?: string | undefined;

  /**
   * <p>The time when the migration project was created.</p>
   * @public
   */
  MigrationProjectCreationTime?: Date | undefined;

  /**
   * <p>Information about the source data provider, including the name or ARN, and Secrets Manager parameters.</p>
   * @public
   */
  SourceDataProviderDescriptors?: DataProviderDescriptor[] | undefined;

  /**
   * <p>Information about the target data provider, including the name or ARN, and Secrets Manager parameters.</p>
   * @public
   */
  TargetDataProviderDescriptors?: DataProviderDescriptor[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile for your migration project.</p>
   * @public
   */
  InstanceProfileArn?: string | undefined;

  /**
   * <p>The name of the associated instance profile.</p>
   * @public
   */
  InstanceProfileName?: string | undefined;

  /**
   * <p>The settings in JSON format for migration rules. Migration rules make it possible for you to change
   *          the object names according to the rules that you specify. For example, you can change an object name
   *          to lowercase or uppercase, add or remove a prefix or suffix, or rename objects.</p>
   * @public
   */
  TransformationRules?: string | undefined;

  /**
   * <p>A user-friendly description of the migration project.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.</p>
   * @public
   */
  SchemaConversionApplicationAttributes?: SCApplicationAttributes | undefined;
}

/**
 * @public
 */
export interface CreateMigrationProjectResponse {
  /**
   * <p>The migration project that was created.</p>
   * @public
   */
  MigrationProject?: MigrationProject | undefined;
}

/**
 * <p>Configuration parameters for provisioning an DMS Serverless replication.</p>
 * @public
 */
export interface ComputeConfig {
  /**
   * <p>The Availability Zone where the DMS Serverless replication using this configuration
   *          will run. The default value is a random, system-chosen Availability Zone in the
   *          configuration's Amazon Web Services Region, for example, <code>"us-west-2"</code>. You can't set this
   *          parameter if the <code>MultiAZ</code> parameter is set to <code>true</code>.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>A list of custom DNS name servers supported for the DMS Serverless replication to
   *          access your source or target database. This list overrides the default name servers
   *          supported by the DMS Serverless replication. You can specify a comma-separated list of
   *          internet addresses for up to four DNS name servers. For example:
   *             <code>"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"</code>
   *          </p>
   * @public
   */
  DnsNameServers?: string | undefined;

  /**
   * <p>An Key Management Service (KMS) key Amazon Resource Name (ARN) that is used to encrypt the data
   *          during DMS Serverless replication.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, DMS uses your
   *          default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account
   *          has a different default encryption key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies the maximum value of the DMS capacity units (DCUs) for which a given DMS
   *          Serverless replication can be provisioned. A single DCU is 2GB of RAM, with 1 DCU as the
   *          minimum value allowed. The list of valid DCU values includes 1, 2, 4, 8, 16, 32, 64, 128,
   *          192, 256, and 384. So, the maximum value that you can specify for DMS Serverless is 384.
   *          The <code>MaxCapacityUnits</code> parameter is the only DCU parameter you are required to
   *          specify.</p>
   * @public
   */
  MaxCapacityUnits?: number | undefined;

  /**
   * <p>Specifies the minimum value of the DMS capacity units (DCUs) for which a given DMS
   *          Serverless replication can be provisioned. A single DCU is 2GB of RAM, with 1 DCU as the
   *          minimum value allowed. The list of valid DCU values includes 1, 2, 4, 8, 16, 32, 64, 128,
   *          192, 256, and 384. So, the minimum DCU value that you can specify for DMS Serverless is
   *          1. If you don't set this value, DMS sets this parameter to the minimum DCU value allowed,
   *          1. If there is no current source activity, DMS scales down your replication until it
   *          reaches the value specified in <code>MinCapacityUnits</code>.</p>
   * @public
   */
  MinCapacityUnits?: number | undefined;

  /**
   * <p>Specifies whether the DMS Serverless replication is a Multi-AZ deployment. You can't
   *          set the <code>AvailabilityZone</code> parameter if the <code>MultiAZ</code> parameter is
   *          set to <code>true</code>.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur for the DMS Serverless
   *          replication, in Universal Coordinated Time (UTC). The format is
   *             <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time per
   *          Amazon Web Services Region. This maintenance occurs on a random day of the week. Valid values for days of
   *          the week include <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thu</code>,
   *             <code>Fri</code>, <code>Sat</code>, and <code>Sun</code>.</p>
   *          <p>Constraints include a minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Specifies a subnet group identifier to associate with the DMS Serverless
   *          replication.</p>
   * @public
   */
  ReplicationSubnetGroupId?: string | undefined;

  /**
   * <p>Specifies the virtual private cloud (VPC) security group to use with the DMS
   *          Serverless replication. The VPC security group must work with the VPC containing the
   *          replication.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateReplicationConfigMessage {
  /**
   * <p>A unique identifier that you want to use to create a <code>ReplicationConfigArn</code>
   *          that is returned as part of the output from this action. You can then pass this output
   *             <code>ReplicationConfigArn</code> as the value of the <code>ReplicationConfigArn</code>
   *          option for other actions to identify both DMS Serverless replications and replication
   *          configurations that you want those actions to operate on. For some actions, you can also
   *          use either this unique identifier or a corresponding ARN in action filters to identify the
   *          specific replication and replication configuration to operate on.</p>
   * @public
   */
  ReplicationConfigIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint for this DMS Serverless
   *          replication configuration.</p>
   * @public
   */
  SourceEndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target endpoint for this DMS serverless
   *          replication configuration.</p>
   * @public
   */
  TargetEndpointArn: string | undefined;

  /**
   * <p>Configuration parameters for provisioning an DMS Serverless replication.</p>
   * @public
   */
  ComputeConfig: ComputeConfig | undefined;

  /**
   * <p>The type of DMS Serverless replication to provision using this replication
   *          configuration.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"full-load"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"cdc"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"full-load-and-cdc"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ReplicationType: MigrationTypeValue | undefined;

  /**
   * <p>JSON table mappings for DMS Serverless replications that are provisioned using this
   *          replication configuration. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.html"> Specifying table selection and transformations rules using
   *             JSON</a>.</p>
   * @public
   */
  TableMappings: string | undefined;

  /**
   * <p>Optional JSON settings for DMS Serverless replications that are provisioned using this
   *          replication configuration. For example, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html"> Change processing tuning settings</a>.</p>
   * @public
   */
  ReplicationSettings?: string | undefined;

  /**
   * <p>Optional JSON settings for specifying supplemental data. For more information, see
   *             <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">
   *             Specifying supplemental data for task settings</a>.</p>
   * @public
   */
  SupplementalSettings?: string | undefined;

  /**
   * <p>Optional unique value or name that you set for a given resource that can be used to
   *          construct an Amazon Resource Name (ARN) for that resource. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.FineGrainedAccess"> Fine-grained access control using resource names and
   *          tags</a>.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>One or more optional tags associated with resources used by the DMS Serverless
   *          replication. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tagging.html"> Tagging resources in Database Migration Service</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>This object provides configuration information about a serverless replication.</p>
 * @public
 */
export interface ReplicationConfig {
  /**
   * <p>The identifier for the <code>ReplicationConfig</code> associated with the
   *          replication.</p>
   * @public
   */
  ReplicationConfigIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of this DMS Serverless replication
   *          configuration.</p>
   * @public
   */
  ReplicationConfigArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint for this DMS serverless
   *          replication configuration.</p>
   * @public
   */
  SourceEndpointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target endpoint for this DMS serverless
   *          replication configuration.</p>
   * @public
   */
  TargetEndpointArn?: string | undefined;

  /**
   * <p>The type of the replication.</p>
   * @public
   */
  ReplicationType?: MigrationTypeValue | undefined;

  /**
   * <p>Configuration parameters for provisioning an DMS serverless replication.</p>
   * @public
   */
  ComputeConfig?: ComputeConfig | undefined;

  /**
   * <p>Configuration parameters for an DMS serverless replication.</p>
   * @public
   */
  ReplicationSettings?: string | undefined;

  /**
   * <p>Additional parameters for an DMS serverless replication.</p>
   * @public
   */
  SupplementalSettings?: string | undefined;

  /**
   * <p>Table mappings specified in the replication.</p>
   * @public
   */
  TableMappings?: string | undefined;

  /**
   * <p>The time the serverless replication config was created.</p>
   * @public
   */
  ReplicationConfigCreateTime?: Date | undefined;

  /**
   * <p>The time the serverless replication config was updated.</p>
   * @public
   */
  ReplicationConfigUpdateTime?: Date | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateReplicationConfigResponse {
  /**
   * <p>Configuration parameters returned from the DMS Serverless replication after it is
   *          created.</p>
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;
}

/**
 * <p>The subnet provided isn't valid.</p>
 * @public
 */
export class InvalidSubnet extends __BaseException {
  readonly name: "InvalidSubnet" = "InvalidSubnet";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubnet, __BaseException>) {
    super({
      name: "InvalidSubnet",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubnet.prototype);
  }
}

/**
 * <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 * @public
 */
export class ReplicationSubnetGroupDoesNotCoverEnoughAZs extends __BaseException {
  readonly name: "ReplicationSubnetGroupDoesNotCoverEnoughAZs" = "ReplicationSubnetGroupDoesNotCoverEnoughAZs";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationSubnetGroupDoesNotCoverEnoughAZs, __BaseException>) {
    super({
      name: "ReplicationSubnetGroupDoesNotCoverEnoughAZs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationSubnetGroupDoesNotCoverEnoughAZs.prototype);
  }
}

/**
 * <p>Specifies the settings required for kerberos authentication when creating the
 *          replication instance.</p>
 * @public
 */
export interface KerberosAuthenticationSettings {
  /**
   * <p>Specifies the ID of the secret that stores the key cache file required for kerberos
   *          authentication.</p>
   * @public
   */
  KeyCacheSecretId?: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the IAM role that grants Amazon Web Services
   *          DMS access to the secret containing key cache file for the kerberos authentication.</p>
   * @public
   */
  KeyCacheSecretIamArn?: string | undefined;

  /**
   * <p>Specifies the contents of krb5 configuration file required for kerberos
   *          authentication.</p>
   * @public
   */
  Krb5FileContents?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateReplicationInstanceMessage {
  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1-63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>myrepinstance</code>
   *          </p>
   * @public
   */
  ReplicationInstanceIdentifier: string | undefined;

  /**
   * <p>The amount of storage (in gigabytes) to be initially allocated for the replication
   *          instance.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. For example to specify the instance class dms.c4.large, set
   *          this parameter to <code>"dms.c4.large"</code>.</p>
   *          <p>For more information on the settings and capacities for the available replication
   *          instance classes, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.Types.html ">
   *             Choosing the right DMS replication instance</a>; and, <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.SizingReplicationInstance.html">Selecting the best size for a replication instance</a>. </p>
   * @public
   */
  ReplicationInstanceClass: string | undefined;

  /**
   * <p> Specifies the VPC security group to be used with the replication instance. The VPC
   *          security group must work with the VPC containing the replication instance. </p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The Availability Zone where the replication instance will be created. The default value
   *          is a random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region, for example:
   *             <code>us-east-1d</code>.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>A subnet group to associate with the replication instance.</p>
   * @public
   */
  ReplicationSubnetGroupIdentifier?: string | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>Default: A 30-minute window selected at random from an 8-hour block of time per
   *          Amazon Web Services Region, occurring on a random day of the week.</p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set
   *          the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The engine version number of the replication instance.</p>
   *          <p>If an engine version number is not specified when a replication instance is created, the
   *          default is the latest engine version available.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the
   *          replication instance during the maintenance window. This parameter defaults to
   *             <code>true</code>.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>One or more tags to be assigned to the replication instance.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>An KMS key identifier that is used to encrypt the data on the replication
   *          instance.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS uses
   *          your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has
   *          a different default encryption key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p> Specifies the accessibility options for the replication instance. A value of
   *             <code>true</code> represents an instance with a public IP address. A value of
   *             <code>false</code> represents an instance with a private IP address. The default value
   *          is <code>true</code>. </p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>A list of custom DNS name servers supported for the replication instance to access your
   *          on-premise source or target database. This list overrides the default name servers
   *          supported by the replication instance. You can specify a comma-separated list of internet
   *          addresses for up to four on-premise DNS name servers. For example:
   *             <code>"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"</code>
   *          </p>
   * @public
   */
  DnsNameServers?: string | undefined;

  /**
   * <p>A friendly name for the resource identifier at the end of the <code>EndpointArn</code>
   *          response parameter that is returned in the created <code>Endpoint</code> object. The value
   *          for this parameter can have up to 31 characters. It can contain only ASCII letters, digits,
   *          and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens,
   *          and can only begin with a letter, such as <code>Example-App-ARN1</code>. For example, this
   *          value might result in the <code>EndpointArn</code> value
   *             <code>arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1</code>. If you don't
   *          specify a <code>ResourceIdentifier</code> value, DMS generates a default identifier value
   *          for the end of <code>EndpointArn</code>.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>The type of IP address protocol used by a replication instance, such as IPv4 only or
   *          Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet
   *          supported.</p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>Specifies the settings required for kerberos authentication when creating the
   *          replication instance.</p>
   * @public
   */
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings | undefined;
}

/**
 * <p>Provides information about the values of pending modifications to a replication
 *          instance. This data type is an object of the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html">
 *                <code>ReplicationInstance</code>
 *             </a> user-defined data type. </p>
 * @public
 */
export interface ReplicationPendingModifiedValues {
  /**
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class.</p>
   *          <p>For more information on the settings and capacities for the available replication
   *          instance classes, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth"> Selecting the right DMS replication instance for your
   *             migration</a>. </p>
   * @public
   */
  ReplicationInstanceClass?: string | undefined;

  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set
   *          the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The engine version number of the replication instance.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The type of IP address protocol used by a replication instance, such as IPv4 only or
   *          Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet
   *          supported.</p>
   * @public
   */
  NetworkType?: string | undefined;
}

/**
 * <p>The name of an Availability Zone for use during database migration.
 *             <code>AvailabilityZone</code> is an optional parameter to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html">
 *                <code>CreateReplicationInstance</code>
 *             </a> operation, and it’s value relates to
 *          the Amazon Web Services Region of an endpoint. For example, the availability zone of an endpoint in the
 *          us-east-1 region might be us-east-1a, us-east-1b, us-east-1c, or us-east-1d.</p>
 * @public
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation,
 *          this object identifies a subnet by its given Availability Zone, subnet identifier, and
 *          status.</p>
 * @public
 */
export interface Subnet {
  /**
   * <p>The subnet identifier.</p>
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * <p>The Availability Zone of the subnet.</p>
   * @public
   */
  SubnetAvailabilityZone?: AvailabilityZone | undefined;

  /**
   * <p>The status of the subnet.</p>
   * @public
   */
  SubnetStatus?: string | undefined;
}

/**
 * <p>Describes a subnet group in response to a request by the
 *             <code>DescribeReplicationSubnetGroups</code> operation.</p>
 * @public
 */
export interface ReplicationSubnetGroup {
  /**
   * <p>The identifier of the replication instance subnet group.</p>
   * @public
   */
  ReplicationSubnetGroupIdentifier?: string | undefined;

  /**
   * <p>A description for the replication subnet group.</p>
   * @public
   */
  ReplicationSubnetGroupDescription?: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The status of the subnet group.</p>
   * @public
   */
  SubnetGroupStatus?: string | undefined;

  /**
   * <p>The subnets that are in the subnet group.</p>
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * <p>The IP addressing protocol supported by the subnet group. This is used by a replication
   *          instance with values such as IPv4 only or Dual-stack that supports both IPv4 and IPv6
   *          addressing. IPv6 only is not yet supported.</p>
   * @public
   */
  SupportedNetworkTypes?: string[] | undefined;
}

/**
 * <p>Describes the status of a security group associated with the virtual private cloud (VPC)
 *          hosting your replication and DB instances.</p>
 * @public
 */
export interface VpcSecurityGroupMembership {
  /**
   * <p>The VPC security group ID.</p>
   * @public
   */
  VpcSecurityGroupId?: string | undefined;

  /**
   * <p>The status of the VPC security group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Provides information that defines a replication instance.</p>
 * @public
 */
export interface ReplicationInstance {
  /**
   * <p>The replication instance identifier is a required parameter. This parameter is stored as
   *          a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1-63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>myrepinstance</code>
   *          </p>
   * @public
   */
  ReplicationInstanceIdentifier?: string | undefined;

  /**
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. It is a required parameter, although a default value is
   *          pre-selected in the DMS console.</p>
   *          <p>For more information on the settings and capacities for the available replication
   *          instance classes, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth"> Selecting the right DMS replication instance for your
   *             migration</a>. </p>
   * @public
   */
  ReplicationInstanceClass?: string | undefined;

  /**
   * <p>The status of the replication instance. The possible return values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"available"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"creating"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"deleted"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"deleting"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"failed"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"modifying"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"upgrading"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"rebooting"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"resetting-master-credentials"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"storage-full"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"incompatible-credentials"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"incompatible-network"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"maintenance"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ReplicationInstanceStatus?: string | undefined;

  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The time the replication instance was created.</p>
   * @public
   */
  InstanceCreateTime?: Date | undefined;

  /**
   * <p>The VPC security group for the instance.</p>
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * <p>The Availability Zone for the instance.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The subnet group for the replication instance.</p>
   * @public
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup | undefined;

  /**
   * <p>The maintenance window times for the replication instance. Any pending upgrades to the
   *          replication instance are performed during this time.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The pending modification values.</p>
   * @public
   */
  PendingModifiedValues?: ReplicationPendingModifiedValues | undefined;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set
   *          the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The engine version number of the replication instance.</p>
   *          <p>If an engine version number is not specified when a replication instance is created, the
   *          default is the latest engine version available.</p>
   *          <p>When modifying a major engine version of an instance, also set
   *             <code>AllowMajorVersionUpgrade</code> to <code>true</code>.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Boolean value indicating if minor version upgrades will be automatically applied to the
   *          instance.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>An KMS key identifier that is used to encrypt the data on the replication
   *          instance.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS uses
   *          your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has
   *          a different default encryption key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * <p>The public IP address of the replication instance.</p>
   *
   * @deprecated
   * @public
   */
  ReplicationInstancePublicIpAddress?: string | undefined;

  /**
   * <p>The private IP address of the replication instance.</p>
   *
   * @deprecated
   * @public
   */
  ReplicationInstancePrivateIpAddress?: string | undefined;

  /**
   * <p>One or more public IP addresses for the replication instance.</p>
   * @public
   */
  ReplicationInstancePublicIpAddresses?: string[] | undefined;

  /**
   * <p>One or more private IP addresses for the replication instance.</p>
   * @public
   */
  ReplicationInstancePrivateIpAddresses?: string[] | undefined;

  /**
   * <p>One or more IPv6 addresses for the replication instance.</p>
   * @public
   */
  ReplicationInstanceIpv6Addresses?: string[] | undefined;

  /**
   * <p> Specifies the accessibility options for the replication instance. A value of
   *             <code>true</code> represents an instance with a public IP address. A value of
   *             <code>false</code> represents an instance with a private IP address. The default value
   *          is <code>true</code>. </p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The Availability Zone of the standby replication instance in a Multi-AZ
   *          deployment.</p>
   * @public
   */
  SecondaryAvailabilityZone?: string | undefined;

  /**
   * <p> The expiration date of the free replication instance that is part of the Free DMS
   *          program. </p>
   * @public
   */
  FreeUntil?: Date | undefined;

  /**
   * <p>The DNS name servers supported for the replication instance to access your on-premise
   *          source or target database.</p>
   * @public
   */
  DnsNameServers?: string | undefined;

  /**
   * <p>The type of IP address protocol used by a replication instance, such as IPv4 only or
   *          Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet
   *          supported.</p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>Specifies the settings required for kerberos authentication when replicating an
   *          instance.</p>
   * @public
   */
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateReplicationInstanceResponse {
  /**
   * <p>The replication instance that was created.</p>
   * @public
   */
  ReplicationInstance?: ReplicationInstance | undefined;
}

/**
 * <p>There are not enough resources allocated to the database migration.</p>
 * @public
 */
export class InsufficientResourceCapacityFault extends __BaseException {
  readonly name: "InsufficientResourceCapacityFault" = "InsufficientResourceCapacityFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientResourceCapacityFault, __BaseException>) {
    super({
      name: "InsufficientResourceCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientResourceCapacityFault.prototype);
  }
}

/**
 * <p>The storage quota has been exceeded.</p>
 * @public
 */
export class StorageQuotaExceededFault extends __BaseException {
  readonly name: "StorageQuotaExceededFault" = "StorageQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageQuotaExceededFault, __BaseException>) {
    super({
      name: "StorageQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageQuotaExceededFault.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export interface CreateReplicationSubnetGroupMessage {
  /**
   * <p>The name for the replication subnet group. This value is stored as a lowercase
   *          string.</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters, periods,
   *          underscores, or hyphens. Must not be "default".</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  ReplicationSubnetGroupIdentifier: string | undefined;

  /**
   * <p>The description for the subnet group.</p>
   * @public
   */
  ReplicationSubnetGroupDescription: string | undefined;

  /**
   * <p>Two or more subnet IDs to be assigned to the subnet group.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>One or more tags to be assigned to the subnet group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateReplicationSubnetGroupResponse {
  /**
   * <p>The replication subnet group that was created.</p>
   * @public
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateReplicationTaskMessage {
  /**
   * <p>An identifier for the replication task.</p>
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
   * @public
   */
  ReplicationTaskIdentifier: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.</p>
   * @public
   */
  SourceEndpointArn: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.</p>
   * @public
   */
  TargetEndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a replication instance.</p>
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>The migration type. Valid values: <code>full-load</code> | <code>cdc</code> |
   *             <code>full-load-and-cdc</code>
   *          </p>
   * @public
   */
  MigrationType: MigrationTypeValue | undefined;

  /**
   * <p>The table mappings for the task, in JSON format. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html">Using Table
   *             Mapping to Specify Task Settings</a> in the <i>Database Migration Service User
   *             Guide.</i>
   *          </p>
   * @public
   */
  TableMappings: string | undefined;

  /**
   * <p>Overall settings for the task, in JSON format. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html">Specifying Task
   *             Settings for Database Migration Service Tasks</a> in the <i>Database Migration Service User
   *          Guide.</i>
   *          </p>
   * @public
   */
  ReplicationTaskSettings?: string | undefined;

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

  /**
   * <p>One or more tags to be assigned to the replication task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Supplemental information that the task requires to migrate the data for certain source
   *          and target endpoints. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for
   *             Task Settings</a> in the <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  TaskData?: string | undefined;

  /**
   * <p>A friendly name for the resource identifier at the end of the <code>EndpointArn</code>
   *          response parameter that is returned in the created <code>Endpoint</code> object. The value
   *          for this parameter can have up to 31 characters. It can contain only ASCII letters, digits,
   *          and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens,
   *          and can only begin with a letter, such as <code>Example-App-ARN1</code>. For example, this
   *          value might result in the <code>EndpointArn</code> value
   *             <code>arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1</code>. If you don't
   *          specify a <code>ResourceIdentifier</code> value, DMS generates a default identifier value
   *          for the end of <code>EndpointArn</code>.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;
}

/**
 * <p>In response to a request by the <code>DescribeReplicationTasks</code> operation, this
 *          object provides a collection of statistics about a replication task.</p>
 * @public
 */
export interface ReplicationTaskStats {
  /**
   * <p>The percent complete for the full load migration task.</p>
   * @public
   */
  FullLoadProgressPercent?: number | undefined;

  /**
   * <p>The elapsed time of the task, in milliseconds.</p>
   * @public
   */
  ElapsedTimeMillis?: number | undefined;

  /**
   * <p>The number of tables loaded for this task.</p>
   * @public
   */
  TablesLoaded?: number | undefined;

  /**
   * <p>The number of tables currently loading for this task.</p>
   * @public
   */
  TablesLoading?: number | undefined;

  /**
   * <p>The number of tables queued for this task.</p>
   * @public
   */
  TablesQueued?: number | undefined;

  /**
   * <p>The number of errors that have occurred during this task.</p>
   * @public
   */
  TablesErrored?: number | undefined;

  /**
   * <p>The date the replication task was started either with a fresh start or a target
   *          reload.</p>
   * @public
   */
  FreshStartDate?: Date | undefined;

  /**
   * <p>The date the replication task was started either with a fresh start or a resume. For
   *          more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html#DMS-StartReplicationTask-request-StartReplicationTaskType">StartReplicationTaskType</a>.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date the replication task was stopped.</p>
   * @public
   */
  StopDate?: Date | undefined;

  /**
   * <p>The date the replication task full load was started.</p>
   * @public
   */
  FullLoadStartDate?: Date | undefined;

  /**
   * <p>The date the replication task full load was completed.</p>
   * @public
   */
  FullLoadFinishDate?: Date | undefined;
}

/**
 * <p>Provides information that describes a replication task created by the
 *             <code>CreateReplicationTask</code> operation.</p>
 * @public
 */
export interface ReplicationTask {
  /**
   * <p>The user-assigned replication task identifier or name.</p>
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
   * @public
   */
  ReplicationTaskIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the endpoint.</p>
   * @public
   */
  SourceEndpointArn?: string | undefined;

  /**
   * <p>The ARN that uniquely identifies the endpoint.</p>
   * @public
   */
  TargetEndpointArn?: string | undefined;

  /**
   * <p>The ARN of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * <p>The type of migration.</p>
   * @public
   */
  MigrationType?: MigrationTypeValue | undefined;

  /**
   * <p>Table mappings specified in the task.</p>
   * @public
   */
  TableMappings?: string | undefined;

  /**
   * <p>The settings for the replication task.</p>
   * @public
   */
  ReplicationTaskSettings?: string | undefined;

  /**
   * <p>The status of the replication task. This response parameter can return one of the
   *          following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"moving"</code> – The task is being moved in response to
   *                running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html">
   *                      <code>MoveReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"creating"</code> – The task is being created in response
   *                to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html">
   *                      <code>CreateReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"deleting"</code> – The task is being deleted in response
   *                to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html">
   *                      <code>DeleteReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"failed"</code> – The task failed to successfully complete
   *                the database migration in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html">
   *                      <code>StartReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"failed-move"</code> – The task failed to move in response
   *                to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html">
   *                      <code>MoveReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"modifying"</code> – The task definition is being modified
   *                in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html">
   *                      <code>ModifyReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"ready"</code> – The task is in a <code>ready</code> state
   *                where it can respond to other task operations, such as <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html">
   *                      <code>StartReplicationTask</code>
   *                   </a> or <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html">
   *                      <code>DeleteReplicationTask</code>
   *                   </a>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"running"</code> – The task is performing a database
   *                migration in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html">
   *                      <code>StartReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"starting"</code> – The task is preparing to perform a
   *                database migration in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html">
   *                      <code>StartReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"stopped"</code> – The task has stopped in response to
   *                running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html">
   *                      <code>StopReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"stopping"</code> – The task is preparing to stop in
   *                response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html">
   *                      <code>StopReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"testing"</code> – The database migration specified for
   *                this task is being tested in response to running either the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html">
   *                      <code>StartReplicationTaskAssessmentRun</code>
   *                   </a> or the
   *                   <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html">
   *                      <code>StartReplicationTaskAssessment</code>
   *                   </a>
   *                operation.</p>
   *                <note>
   *                   <p>
   *                      <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html">
   *                         <code>StartReplicationTaskAssessmentRun</code>
   *                      </a> is
   *                   an improved premigration task assessment operation. The <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html">
   *                         <code>StartReplicationTaskAssessment</code>
   *                      </a>
   *                   operation assesses data type compatibility only between the source and target
   *                   database of a given migration task. In contrast, <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html">
   *                         <code>StartReplicationTaskAssessmentRun</code>
   *                      </a>
   *                   enables you to specify a variety of premigration task assessments in addition to
   *                   data type compatibility. These assessments include ones for the validity of
   *                   primary key definitions and likely issues with database migration performance,
   *                   among others.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The last error (failure) message generated for the replication task.</p>
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * <p>The reason the replication task was stopped. This response parameter can return one of
   *          the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason NORMAL"</code> – The task completed
   *                successfully with no additional information returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECOVERABLE_ERROR"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason FATAL_ERROR"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason FULL_LOAD_ONLY_FINISHED"</code> – The task
   *                completed the full load phase. DMS applied cached changes if you set
   *                   <code>StopTaskCachedChangesApplied</code> to <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_FULL_LOAD"</code> – Full load
   *                completed, with cached changes not applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_CACHED_EVENTS"</code> – Full
   *                load completed, with cached changes applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason EXPRESS_LICENSE_LIMITS_REACHED"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_DDL_APPLY"</code> – User-defined
   *                stop task after DDL applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_DUE_TO_LOW_MEMORY"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_DUE_TO_LOW_DISK"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AT_SERVER_TIME"</code> – User-defined
   *                server time for stopping task</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AT_COMMIT_TIME"</code> – User-defined
   *                commit time for stopping task</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECONFIGURATION_RESTART"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECYCLE_TASK"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  StopReason?: string | undefined;

  /**
   * <p>The date the replication task was created.</p>
   * @public
   */
  ReplicationTaskCreationDate?: Date | undefined;

  /**
   * <p>The date the replication task is scheduled to start.</p>
   * @public
   */
  ReplicationTaskStartDate?: Date | undefined;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *             <code>CdcStartPosition</code> or <code>CdcStartTime</code> to specify when you want the
   *          CDC operation to start. Specifying both values results in an error.</p>
   *          <p>The value can be in date, checkpoint, or LSN/SCN format.</p>
   *          <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p>
   *          <p>Checkpoint Example: --cdc-start-position
   *          "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p>
   *          <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>
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

  /**
   * <p>Indicates the last checkpoint that occurred during a change data capture (CDC)
   *          operation. You can provide this value to the <code>CdcStartPosition</code> parameter to
   *          start a CDC operation that begins at that checkpoint.</p>
   * @public
   */
  RecoveryCheckpoint?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * <p>The statistics for the task, including elapsed time, tables loaded, and table
   *          errors.</p>
   * @public
   */
  ReplicationTaskStats?: ReplicationTaskStats | undefined;

  /**
   * <p>Supplemental information that the task requires to migrate the data for certain source
   *          and target endpoints. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for
   *             Task Settings</a> in the <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  TaskData?: string | undefined;

  /**
   * <p>The ARN of the replication instance to which this task is moved in response to running
   *          the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html">
   *                <code>MoveReplicationTask</code>
   *             </a> operation. Otherwise, this response
   *          parameter isn't a member of the <code>ReplicationTask</code> object.</p>
   * @public
   */
  TargetReplicationInstanceArn?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateReplicationTaskResponse {
  /**
   * <p>The replication task that was created.</p>
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * <p>The SSL certificate that can be used to encrypt connections between the endpoints and
 *          the replication instance.</p>
 * @public
 */
export interface Certificate {
  /**
   * <p>A customer-assigned name for the certificate. Identifiers must begin with a letter and
   *          must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or
   *          contain two consecutive hyphens.</p>
   * @public
   */
  CertificateIdentifier?: string | undefined;

  /**
   * <p>The date that the certificate was created.</p>
   * @public
   */
  CertificateCreationDate?: Date | undefined;

  /**
   * <p>The contents of a <code>.pem</code> file, which contains an X.509 certificate.</p>
   * @public
   */
  CertificatePem?: string | undefined;

  /**
   * <p>The location of an imported Oracle Wallet certificate for use with SSL. Example:
   *             <code>filebase64("$\{path.root\}/rds-ca-2019-root.sso")</code>
   *          </p>
   * @public
   */
  CertificateWallet?: Uint8Array | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The owner of the certificate.</p>
   * @public
   */
  CertificateOwner?: string | undefined;

  /**
   * <p>The beginning date that the certificate is valid.</p>
   * @public
   */
  ValidFromDate?: Date | undefined;

  /**
   * <p>The final date that the certificate is valid.</p>
   * @public
   */
  ValidToDate?: Date | undefined;

  /**
   * <p>The signing algorithm for the certificate.</p>
   * @public
   */
  SigningAlgorithm?: string | undefined;

  /**
   * <p>The key length of the cryptographic algorithm being used.</p>
   * @public
   */
  KeyLength?: number | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateResponse {
  /**
   * <p>The Secure Sockets Layer (SSL) certificate.</p>
   * @public
   */
  Certificate?: Certificate | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteConnectionMessage {
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
 * <p>Status of the connection between an endpoint and a replication instance, including
 *          Amazon Resource Names (ARNs) and the last error message issued.</p>
 * @public
 */
export interface Connection {
  /**
   * <p>The ARN of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * <p>The ARN string that uniquely identifies the endpoint.</p>
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * <p>The connection status. This parameter can return one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"successful"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"testing"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"failed"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"deleting"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The error message when the connection last failed.</p>
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * <p>The identifier of the endpoint. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two
   *          consecutive hyphens.</p>
   * @public
   */
  EndpointIdentifier?: string | undefined;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   * @public
   */
  ReplicationInstanceIdentifier?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * <p>The connection that is being deleted.</p>
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * @public
 */
export interface DeleteDataMigrationMessage {
  /**
   * <p>The identifier (name or ARN) of the data migration to delete.</p>
   * @public
   */
  DataMigrationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataMigrationResponse {
  /**
   * <p>The deleted data migration.</p>
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * @public
 */
export interface DeleteDataProviderMessage {
  /**
   * <p>The identifier of the data provider to delete.</p>
   * @public
   */
  DataProviderIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataProviderResponse {
  /**
   * <p>The data provider that was deleted.</p>
   * @public
   */
  DataProvider?: DataProvider | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteEndpointMessage {
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
export interface DeleteEndpointResponse {
  /**
   * <p>The endpoint that was deleted.</p>
   * @public
   */
  Endpoint?: Endpoint | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * <p>The name of the DMS event notification subscription to be deleted.</p>
   * @public
   */
  SubscriptionName: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteEventSubscriptionResponse {
  /**
   * <p>The event subscription that was deleted.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>The specified collector doesn't exist.</p>
 * @public
 */
export class CollectorNotFoundFault extends __BaseException {
  readonly name: "CollectorNotFoundFault" = "CollectorNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CollectorNotFoundFault, __BaseException>) {
    super({
      name: "CollectorNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CollectorNotFoundFault.prototype);
  }
}

/**
 * @public
 */
export interface DeleteCollectorRequest {
  /**
   * <p>The reference ID of the Fleet Advisor collector to delete.</p>
   * @public
   */
  CollectorReferencedId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetAdvisorDatabasesRequest {
  /**
   * <p>The IDs of the Fleet Advisor collector databases to delete.</p>
   * @public
   */
  DatabaseIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteFleetAdvisorDatabasesResponse {
  /**
   * <p>The IDs of the databases that the operation deleted.</p>
   * @public
   */
  DatabaseIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceProfileMessage {
  /**
   * <p>The identifier of the instance profile to delete.</p>
   * @public
   */
  InstanceProfileIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceProfileResponse {
  /**
   * <p>The instance profile that was deleted.</p>
   * @public
   */
  InstanceProfile?: InstanceProfile | undefined;
}

/**
 * @public
 */
export interface DeleteMigrationProjectMessage {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the migration project to delete.</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMigrationProjectResponse {
  /**
   * <p>The migration project that was deleted.</p>
   * @public
   */
  MigrationProject?: MigrationProject | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteReplicationConfigMessage {
  /**
   * <p>The replication config to delete.</p>
   * @public
   */
  ReplicationConfigArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteReplicationConfigResponse {
  /**
   * <p>Configuration parameters returned for the DMS Serverless replication after it is
   *          deleted.</p>
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteReplicationInstanceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance to be deleted.</p>
   * @public
   */
  ReplicationInstanceArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteReplicationInstanceResponse {
  /**
   * <p>The replication instance that was deleted.</p>
   * @public
   */
  ReplicationInstance?: ReplicationInstance | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteReplicationSubnetGroupMessage {
  /**
   * <p>The subnet group name of the replication instance.</p>
   * @public
   */
  ReplicationSubnetGroupIdentifier: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteReplicationSubnetGroupResponse {}

/**
 * <p></p>
 * @public
 */
export interface DeleteReplicationTaskMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task to be deleted.</p>
   * @public
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteReplicationTaskResponse {
  /**
   * <p>The deleted replication task.</p>
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteReplicationTaskAssessmentRunMessage {
  /**
   * <p>Amazon Resource Name (ARN) of the premigration assessment run to be deleted.</p>
   * @public
   */
  ReplicationTaskAssessmentRunArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteReplicationTaskAssessmentRunResponse {
  /**
   * <p>The <code>ReplicationTaskAssessmentRun</code> object for the deleted assessment
   *          run.</p>
   * @public
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeAccountAttributesMessage {}

/**
 * <p></p>
 * @public
 */
export interface DescribeAccountAttributesResponse {
  /**
   * <p>Account quota information.</p>
   * @public
   */
  AccountQuotas?: AccountQuota[] | undefined;

  /**
   * <p>A unique DMS identifier for an account in a particular Amazon Web Services Region. The value of this
   *          identifier has the following format: <code>c99999999999</code>. DMS uses this identifier to
   *          name artifacts. For example, DMS uses this identifier to name the default Amazon S3 bucket
   *          for storing task assessment reports in a given Amazon Web Services Region. The format of this S3 bucket
   *          name is the following:
   *                <code>dms-<i>AccountNumber</i>-<i>UniqueAccountIdentifier</i>.</code>
   *          Here is an example name for this default S3 bucket:
   *             <code>dms-111122223333-c44445555666</code>.</p>
   *          <note>
   *             <p>DMS supports the <code>UniqueAccountIdentifier</code> parameter in versions 3.1.4
   *             and later.</p>
   *          </note>
   * @public
   */
  UniqueAccountIdentifier?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeApplicableIndividualAssessmentsMessage {
  /**
   * <p>Amazon Resource Name (ARN) of a migration task on which you want to base the default
   *          list of individual assessments.</p>
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * <p>ARN of a replication instance on which you want to base the default list of individual
   *          assessments.</p>
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * <p>Name of a database engine that the specified replication instance supports as a
   *          source.</p>
   * @public
   */
  SourceEngineName?: string | undefined;

  /**
   * <p>Name of a database engine that the specified replication instance supports as a
   *          target.</p>
   * @public
   */
  TargetEngineName?: string | undefined;

  /**
   * <p>Name of the migration type that each provided individual assessment must support.</p>
   * @public
   */
  MigrationType?: MigrationTypeValue | undefined;

  /**
   * <p>Maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>Optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeApplicableIndividualAssessmentsResponse {
  /**
   * <p>List of names for the individual assessments supported by the premigration assessment
   *          run that you start based on the specified request parameters. For more information on the
   *          available individual assessments, including compatibility with different migration task
   *          configurations, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Working with premigration assessment runs</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  IndividualAssessmentNames?: string[] | undefined;

  /**
   * <p>Pagination token returned for you to pass to a subsequent request. If you pass this
   *          token as the <code>Marker</code> value in a subsequent request, the response includes only
   *          records beyond the marker, up to the value specified in the request by
   *             <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Identifies the name and value of a filter object. This filter is used to limit the
 *          number and type of DMS objects that are returned for a particular <code>Describe*</code>
 *          call or similar operation. Filters are used as an optional parameter for certain API
 *          operations.
 *          </p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter as specified for a <code>Describe*</code> or similar
   *          operation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The filter value, which can specify one or more values used to narrow the returned
   *          results.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeCertificatesMessage {
  /**
   * <p>Filters applied to the certificates described in the form of key-value pairs. Valid
   *          values are <code>certificate-arn</code> and <code>certificate-id</code>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 10</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificatesResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The Secure Sockets Layer (SSL) certificates associated with the replication
   *          instance.</p>
   * @public
   */
  Certificates?: Certificate[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeConnectionsMessage {
  /**
   * <p>The filters applied to the connection.</p>
   *          <p>Valid filter names: endpoint-arn | replication-instance-arn</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeConnectionsResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A description of the connections.</p>
   * @public
   */
  Connections?: Connection[] | undefined;
}

/**
 * @public
 */
export interface DescribeConversionConfigurationMessage {
  /**
   * <p>The name or Amazon Resource Name (ARN) for the schema conversion project to describe.</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DescribeConversionConfigurationResponse {
  /**
   * <p>The name or Amazon Resource Name (ARN) for the schema conversion project.</p>
   * @public
   */
  MigrationProjectIdentifier?: string | undefined;

  /**
   * <p>The configuration parameters for the schema conversion project.</p>
   * @public
   */
  ConversionConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataMigrationsMessage {
  /**
   * <p>Filters applied to the data migrations.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>An option to set to avoid returning information about settings. Use this to reduce
   *          overhead when setting information is too large. To use this option, choose
   *             <code>true</code>; otherwise, choose <code>false</code> (the default).</p>
   * @public
   */
  WithoutSettings?: boolean | undefined;

  /**
   * <p>An option to set to avoid returning information about statistics. Use this to reduce
   *          overhead when statistics information is too large. To use this option, choose
   *             <code>true</code>; otherwise, choose <code>false</code> (the default).</p>
   * @public
   */
  WithoutStatistics?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeDataMigrationsResponse {
  /**
   * <p>Returns information about the data migrations used in the project.</p>
   * @public
   */
  DataMigrations?: DataMigration[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataProvidersMessage {
  /**
   * <p>Filters applied to the data providers described in the form of key-value pairs.</p>
   *          <p>Valid filter names and values: data-provider-identifier, data provider arn or name</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataProvidersResponse {
  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A description of data providers.</p>
   * @public
   */
  DataProviders?: DataProvider[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEndpointsMessage {
  /**
   * <p>Filters applied to the endpoints.</p>
   *          <p>Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEndpointsResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Endpoint description.</p>
   * @public
   */
  Endpoints?: Endpoint[] | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointSettingsMessage {
  /**
   * <p>The database engine used for your source or target endpoint.</p>
   * @public
   */
  EngineName: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointSettingTypeValue = {
  BOOLEAN: "boolean",
  ENUM: "enum",
  INTEGER: "integer",
  STRING: "string",
} as const;

/**
 * @public
 */
export type EndpointSettingTypeValue = (typeof EndpointSettingTypeValue)[keyof typeof EndpointSettingTypeValue];

/**
 * <p>Endpoint settings.</p>
 * @public
 */
export interface EndpointSetting {
  /**
   * <p>The name that you want to give the endpoint settings.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of endpoint. Valid values are <code>source</code> and
   *          <code>target</code>.</p>
   * @public
   */
  Type?: EndpointSettingTypeValue | undefined;

  /**
   * <p>Enumerated values to use for this endpoint.</p>
   * @public
   */
  EnumValues?: string[] | undefined;

  /**
   * <p>A value that marks this endpoint setting as sensitive.</p>
   * @public
   */
  Sensitive?: boolean | undefined;

  /**
   * <p>The unit of measure for this endpoint setting.</p>
   * @public
   */
  Units?: string | undefined;

  /**
   * <p>The relevance or validity of an endpoint setting for an engine name and its endpoint
   *          type.</p>
   * @public
   */
  Applicability?: string | undefined;

  /**
   * <p>The minimum value of an endpoint setting that is of type <code>int</code>.</p>
   * @public
   */
  IntValueMin?: number | undefined;

  /**
   * <p>The maximum value of an endpoint setting that is of type <code>int</code>.</p>
   * @public
   */
  IntValueMax?: number | undefined;

  /**
   * <p>The default value of the endpoint setting if no value is specified using
   *             <code>CreateEndpoint</code> or <code>ModifyEndpoint</code>.</p>
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointSettingsResponse {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Descriptions of the endpoint settings available for your source or target database
   *          engine.</p>
   * @public
   */
  EndpointSettings?: EndpointSetting[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEndpointTypesMessage {
  /**
   * <p>Filters applied to the endpoint types.</p>
   *          <p>Valid filter names: engine-name | endpoint-type</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Provides information about types of supported endpoints in response to a request by the
 *             <code>DescribeEndpointTypes</code> operation. This information includes the type of
 *          endpoint, the database engine name, and whether change data capture (CDC) is
 *          supported.</p>
 * @public
 */
export interface SupportedEndpointType {
  /**
   * <p>The database engine name. Valid values, depending on the EndpointType, include
   *             <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *             <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>,
   *             <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"db2-zos"</code>,
   *             <code>"azuredb"</code>, <code>"sybase"</code>, <code>"dynamodb"</code>,
   *             <code>"mongodb"</code>, <code>"kinesis"</code>, <code>"kafka"</code>,
   *             <code>"elasticsearch"</code>, <code>"documentdb"</code>, <code>"sqlserver"</code>,
   *             <code>"neptune"</code>, and <code>"babelfish"</code>.</p>
   * @public
   */
  EngineName?: string | undefined;

  /**
   * <p>Indicates if change data capture (CDC) is supported.</p>
   * @public
   */
  SupportsCDC?: boolean | undefined;

  /**
   * <p>The type of endpoint. Valid values are <code>source</code> and
   *          <code>target</code>.</p>
   * @public
   */
  EndpointType?: ReplicationEndpointTypeValue | undefined;

  /**
   * <p>The earliest DMS engine version that supports this endpoint engine. Note that endpoint
   *          engines released with DMS versions earlier than 3.1.1 do not return a value for this
   *          parameter.</p>
   * @public
   */
  ReplicationInstanceEngineMinimumVersion?: string | undefined;

  /**
   * <p>The expanded name for the engine name. For example, if the <code>EngineName</code>
   *          parameter is "aurora", this value would be "Amazon Aurora MySQL".</p>
   * @public
   */
  EngineDisplayName?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEndpointTypesResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The types of endpoints that are supported.</p>
   * @public
   */
  SupportedEndpointTypes?: SupportedEndpointType[] | undefined;
}

/**
 * @public
 */
export interface DescribeEngineVersionsMessage {
  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReleaseStatusValues = {
  BETA: "beta",
  PROD: "prod",
} as const;

/**
 * @public
 */
export type ReleaseStatusValues = (typeof ReleaseStatusValues)[keyof typeof ReleaseStatusValues];

/**
 * <p>Provides information about a replication instance version.</p>
 * @public
 */
export interface EngineVersion {
  /**
   * <p>The version number of the replication instance.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The lifecycle status of the replication instance version. Valid values are
   *             <code>DEPRECATED</code>, <code>DEFAULT_VERSION</code>, and <code>ACTIVE</code>.</p>
   * @public
   */
  Lifecycle?: string | undefined;

  /**
   * <p>The release status of the replication instance version.</p>
   * @public
   */
  ReleaseStatus?: ReleaseStatusValues | undefined;

  /**
   * <p>The date when the replication instance version became publicly available.</p>
   * @public
   */
  LaunchDate?: Date | undefined;

  /**
   * <p>The date when the replication instance will be automatically upgraded. This setting only
   *          applies if the <code>auto-minor-version</code> setting is enabled.</p>
   * @public
   */
  AutoUpgradeDate?: Date | undefined;

  /**
   * <p>The date when the replication instance version will be deprecated and can no longer be
   *          requested.</p>
   * @public
   */
  DeprecationDate?: Date | undefined;

  /**
   * <p>The date when the replication instance will have a version upgrade forced.</p>
   * @public
   */
  ForceUpgradeDate?: Date | undefined;

  /**
   * <p>The list of valid replication instance versions that you can upgrade to.</p>
   * @public
   */
  AvailableUpgrades?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeEngineVersionsResponse {
  /**
   * <p>Returned <code>EngineVersion</code> objects that describe the replication instance
   *          engine versions used in the project.</p>
   * @public
   */
  EngineVersions?: EngineVersion[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEventCategoriesMessage {
  /**
   * <p> The type of DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-task</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>Filters applied to the event categories.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Lists categories of events subscribed to, and generated by, the applicable DMS
 *          resource type. This data type appears in response to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_EventCategoryGroup.html">
 *                <code>DescribeEventCategories</code>
 *             </a> action.</p>
 * @public
 */
export interface EventCategoryGroup {
  /**
   * <p> The type of DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-server | security-group |
   *          replication-task</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p> A list of event categories from a source type that you've chosen.</p>
   * @public
   */
  EventCategories?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEventCategoriesResponse {
  /**
   * <p>A list of event categories.</p>
   * @public
   */
  EventCategoryGroupList?: EventCategoryGroup[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  replication_instance: "replication-instance",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * <p></p>
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * <p> The identifier of an event source.</p>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p>The type of DMS resource that generates events.</p>
   *          <p>Valid values: replication-instance | replication-task</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The start time for the events to be listed.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time for the events to be listed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The duration of the events to be listed.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>A list of event categories for the source type that you've chosen.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>Filters applied to events. The only valid filter is
   *          <code>replication-instance-id</code>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes an identifiable significant activity that affects a replication instance or
 *          task. This object can provide the message, the available event categories, the date and
 *          source of the event, and the DMS resource type.</p>
 * @public
 */
export interface Event {
  /**
   * <p> The identifier of an event source.</p>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p> The type of DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | endpoint | replication-task</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The event message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The event categories available for the specified source type.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>The date of the event.</p>
   * @public
   */
  Date?: Date | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEventsResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The events described.</p>
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * <p>The name of the DMS event subscription to be described.</p>
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * <p>Filters applied to event subscriptions.</p>
   *          <p>Valid filter names: event-subscription-arn | event-subscription-id </p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEventSubscriptionsResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of event subscriptions.</p>
   * @public
   */
  EventSubscriptionsList?: EventSubscription[] | undefined;
}

/**
 * @public
 */
export interface DescribeExtensionPackAssociationsMessage {
  /**
   * <p>The name or Amazon Resource Name (ARN) for the migration project.</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>Filters applied to the extension pack associations described in the form of key-value pairs.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * <p>Provides error information about a schema conversion operation.</p>
 * @public
 */
export interface DefaultErrorDetails {
  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Provides error information about a project.</p>
 * @public
 */
export type ErrorDetails = ErrorDetails.DefaultErrorDetailsMember | ErrorDetails.$UnknownMember;

/**
 * @public
 */
export namespace ErrorDetails {
  /**
   * <p>Error information about a project.</p>
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

  export interface Visitor<T> {
    defaultErrorDetails: (value: DefaultErrorDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ErrorDetails, visitor: Visitor<T>): T => {
    if (value.defaultErrorDetails !== undefined) return visitor.defaultErrorDetails(value.defaultErrorDetails);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Provides information about a metadata model assessment exported to SQL.</p>
 * @public
 */
export interface ExportSqlDetails {
  /**
   * <p>The Amazon S3 object key for the object containing the exported metadata model assessment.</p>
   * @public
   */
  S3ObjectKey?: string | undefined;

  /**
   * <p>The URL for the object containing the exported metadata model assessment.</p>
   * @public
   */
  ObjectURL?: string | undefined;
}

/**
 * <p>Provides information about a schema conversion action.</p>
 * @public
 */
export interface SchemaConversionRequest {
  /**
   * <p>The schema conversion action status.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The identifier for the schema conversion action.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;

  /**
   * <p>The migration project ARN.</p>
   * @public
   */
  MigrationProjectArn?: string | undefined;

  /**
   * <p>Provides error information about a project.</p>
   * @public
   */
  Error?: ErrorDetails | undefined;

  /**
   * <p>Provides information about a metadata model assessment exported to SQL.</p>
   * @public
   */
  ExportSqlDetails?: ExportSqlDetails | undefined;
}

/**
 * @public
 */
export interface DescribeExtensionPackAssociationsResponse {
  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A paginated list of extension pack associations for the specified migration project.</p>
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorCollectorsRequest {
  /**
   * <p> If you specify any of the following filters, the output includes information for only
   *             those collectors that meet the filter criteria:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>collector-referenced-id</code> – The ID of the collector agent,
   *                     for example <code>d4610ac5-e323-4ad9-bc50-eaf7249dfe9d</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>collector-name</code> – The name of the collector agent.</p>
   *             </li>
   *          </ul>
   *          <p>An example is: <code>describe-fleet-advisor-collectors --filter
   *                 Name="collector-referenced-id",Values="d4610ac5-e323-4ad9-bc50-eaf7249dfe9d"</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Sets the maximum number of records returned in the response.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CollectorStatus = {
  ACTIVE: "ACTIVE",
  UNREGISTERED: "UNREGISTERED",
} as const;

/**
 * @public
 */
export type CollectorStatus = (typeof CollectorStatus)[keyof typeof CollectorStatus];

/**
 * <p>Describes the last Fleet Advisor collector health check.</p>
 * @public
 */
export interface CollectorHealthCheck {
  /**
   * <p>The status of the Fleet Advisor collector.</p>
   * @public
   */
  CollectorStatus?: CollectorStatus | undefined;

  /**
   * <p>Whether the local collector can access its Amazon S3 bucket.</p>
   * @public
   */
  LocalCollectorS3Access?: boolean | undefined;

  /**
   * <p>Whether the web collector can access its Amazon S3 bucket.</p>
   * @public
   */
  WebCollectorS3Access?: boolean | undefined;

  /**
   * <p>Whether the role that you provided when creating the Fleet Advisor collector has sufficient permissions
   *             to access the Fleet Advisor web collector.</p>
   * @public
   */
  WebCollectorGrantedRoleBasedAccess?: boolean | undefined;
}

/**
 * <p>Describes a Fleet Advisor collector inventory.</p>
 * @public
 */
export interface InventoryData {
  /**
   * <p>The number of databases in the Fleet Advisor collector inventory.</p>
   * @public
   */
  NumberOfDatabases?: number | undefined;

  /**
   * <p>The number of schemas in the Fleet Advisor collector inventory.</p>
   * @public
   */
  NumberOfSchemas?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const VersionStatus = {
  OUTDATED: "OUTDATED",
  UNSUPPORTED: "UNSUPPORTED",
  UP_TO_DATE: "UP_TO_DATE",
} as const;

/**
 * @public
 */
export type VersionStatus = (typeof VersionStatus)[keyof typeof VersionStatus];

/**
 * <p>Describes a Fleet Advisor collector.</p>
 * @public
 */
export interface CollectorResponse {
  /**
   * <p>The reference ID of the Fleet Advisor collector.</p>
   * @public
   */
  CollectorReferencedId?: string | undefined;

  /**
   * <p>The name of the Fleet Advisor collector .</p>
   * @public
   */
  CollectorName?: string | undefined;

  /**
   * <p>The version of your Fleet Advisor collector, in semantic versioning format, for example
   *                 <code>1.0.2</code>
   *          </p>
   * @public
   */
  CollectorVersion?: string | undefined;

  /**
   * <p>Whether the collector version is up to date.</p>
   * @public
   */
  VersionStatus?: VersionStatus | undefined;

  /**
   * <p>A summary description of the Fleet Advisor collector.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>The IAM role that grants permissions to access the specified Amazon S3 bucket.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p>Describes the last Fleet Advisor collector health check.</p>
   * @public
   */
  CollectorHealthCheck?: CollectorHealthCheck | undefined;

  /**
   * <p>The timestamp of the last time the collector received data, in the following format:
   *                 <code>2022-01-24T19:04:02.596113Z</code>
   *          </p>
   * @public
   */
  LastDataReceived?: string | undefined;

  /**
   * <p>The timestamp when DMS registered the collector, in the following format:
   *                 <code>2022-01-24T19:04:02.596113Z</code>
   *          </p>
   * @public
   */
  RegisteredDate?: string | undefined;

  /**
   * <p>The timestamp when you created the collector, in the following format:
   *                 <code>2022-01-24T19:04:02.596113Z</code>
   *          </p>
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * <p>The timestamp when DMS last modified the collector, in the following format:
   *                 <code>2022-01-24T19:04:02.596113Z</code>
   *          </p>
   * @public
   */
  ModifiedDate?: string | undefined;

  /**
   * <p>Describes a Fleet Advisor collector inventory.</p>
   * @public
   */
  InventoryData?: InventoryData | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorCollectorsResponse {
  /**
   * <p>Provides descriptions of the Fleet Advisor collectors, including the collectors' name
   *             and ID, and the latest inventory data. </p>
   * @public
   */
  Collectors?: CollectorResponse[] | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *                 <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorDatabasesRequest {
  /**
   * <p> If you specify any of the following filters, the output includes information for only
   *             those databases that meet the filter criteria: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>database-id</code> – The ID of the database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-name</code> – The name of the database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-engine</code> – The name of the database engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>server-ip-address</code> – The IP address of the database
   *                     server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-ip-address</code> – The IP address of the
   *                     database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>collector-name</code> – The name of the associated Fleet Advisor collector.</p>
   *             </li>
   *          </ul>
   *          <p>An example is: <code>describe-fleet-advisor-databases --filter
   *                 Name="database-id",Values="45"</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Sets the maximum number of records returned in the response.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Briefly describes a Fleet Advisor collector.</p>
 * @public
 */
export interface CollectorShortInfoResponse {
  /**
   * <p>The reference ID of the Fleet Advisor collector.</p>
   * @public
   */
  CollectorReferencedId?: string | undefined;

  /**
   * <p>The name of the Fleet Advisor collector.</p>
   * @public
   */
  CollectorName?: string | undefined;
}

/**
 * <p>Describes a server in a Fleet Advisor collector inventory.</p>
 * @public
 */
export interface ServerShortInfoResponse {
  /**
   * <p>The ID of a server in a Fleet Advisor collector inventory.</p>
   * @public
   */
  ServerId?: string | undefined;

  /**
   * <p>The IP address of a server in a Fleet Advisor collector inventory.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The name address of a server in a Fleet Advisor collector inventory.</p>
   * @public
   */
  ServerName?: string | undefined;
}

/**
 * <p>Describes an inventory database instance for a Fleet Advisor collector.</p>
 * @public
 */
export interface DatabaseInstanceSoftwareDetailsResponse {
  /**
   * <p>The database engine of a database in a Fleet Advisor collector inventory, for example <code>Microsoft
   *                 SQL Server</code>.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The database engine version of a database in a Fleet Advisor collector inventory, for example
   *                 <code>2019</code>.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The database engine edition of a database in a Fleet Advisor collector inventory, for example
   *                 <code>Express</code>.</p>
   * @public
   */
  EngineEdition?: string | undefined;

  /**
   * <p>The service pack level of the database.</p>
   * @public
   */
  ServicePack?: string | undefined;

  /**
   * <p>The support level of the database, for example <code>Mainstream support</code>.</p>
   * @public
   */
  SupportLevel?: string | undefined;

  /**
   * <p>The operating system architecture of the database.</p>
   * @public
   */
  OsArchitecture?: number | undefined;

  /**
   * <p>Information about the database engine software, for example <code>Mainstream support
   *                 ends on November 14th, 2024</code>.</p>
   * @public
   */
  Tooltip?: string | undefined;
}

/**
 * <p>Describes a database in a Fleet Advisor collector inventory.</p>
 * @public
 */
export interface DatabaseResponse {
  /**
   * <p>The ID of a database in a Fleet Advisor collector inventory.</p>
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * <p>The name of a database in a Fleet Advisor collector inventory. </p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The IP address of a database in a Fleet Advisor collector inventory. </p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The number of schemas in a Fleet Advisor collector inventory database. </p>
   * @public
   */
  NumberOfSchemas?: number | undefined;

  /**
   * <p>The server name of a database in a Fleet Advisor collector inventory. </p>
   * @public
   */
  Server?: ServerShortInfoResponse | undefined;

  /**
   * <p>The software details of a database in a Fleet Advisor collector inventory, such as database engine and
   *             version.</p>
   * @public
   */
  SoftwareDetails?: DatabaseInstanceSoftwareDetailsResponse | undefined;

  /**
   * <p>A list of collectors associated with the database.</p>
   * @public
   */
  Collectors?: CollectorShortInfoResponse[] | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorDatabasesResponse {
  /**
   * <p>Provides descriptions of the Fleet Advisor collector databases, including the database's collector, ID,
   *             and name.</p>
   * @public
   */
  Databases?: DatabaseResponse[] | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *                 <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorLsaAnalysisRequest {
  /**
   * <p>Sets the maximum number of records returned in the response.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a large-scale assessment (LSA) analysis run by a Fleet Advisor collector.</p>
 * @public
 */
export interface FleetAdvisorLsaAnalysisResponse {
  /**
   * <p>The ID of an LSA analysis run by a Fleet Advisor collector.</p>
   * @public
   */
  LsaAnalysisId?: string | undefined;

  /**
   * <p>The status of an LSA analysis run by a Fleet Advisor collector.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorLsaAnalysisResponse {
  /**
   * <p>A list of <code>FleetAdvisorLsaAnalysisResponse</code> objects.</p>
   * @public
   */
  Analysis?: FleetAdvisorLsaAnalysisResponse[] | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *                 <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemaObjectSummaryRequest {
  /**
   * <p> If you specify any of the following filters, the output includes information for only
   *             those schema objects that meet the filter criteria:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>schema-id</code> – The ID of the schema, for example
   *                         <code>d4610ac5-e323-4ad9-bc50-eaf7249dfe9d</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>describe-fleet-advisor-schema-object-summary --filter
   *                 Name="schema-id",Values="50"</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Sets the maximum number of records returned in the response.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a schema object in a Fleet Advisor collector inventory.</p>
 * @public
 */
export interface FleetAdvisorSchemaObjectResponse {
  /**
   * <p>The ID of a schema object in a Fleet Advisor collector inventory.</p>
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * <p>The type of the schema object, as reported by the database engine. Examples include
   *             the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>function</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>trigger</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SYSTEM_TABLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUEUE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ObjectType?: string | undefined;

  /**
   * <p>The number of objects in a schema object in a Fleet Advisor collector inventory.</p>
   * @public
   */
  NumberOfObjects?: number | undefined;

  /**
   * <p>The number of lines of code in a schema object in a Fleet Advisor collector inventory.</p>
   * @public
   */
  CodeLineCount?: number | undefined;

  /**
   * <p>The size level of the code in a schema object in a Fleet Advisor collector inventory.</p>
   * @public
   */
  CodeSize?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemaObjectSummaryResponse {
  /**
   * <p>A collection of <code>FleetAdvisorSchemaObjectResponse</code> objects.</p>
   * @public
   */
  FleetAdvisorSchemaObjects?: FleetAdvisorSchemaObjectResponse[] | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *                 <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemasRequest {
  /**
   * <p> If you specify any of the following filters, the output includes information for only
   *             those schemas that meet the filter criteria:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>complexity</code> – The schema's complexity, for example
   *                         <code>Simple</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-id</code> – The ID of the schema's database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-ip-address</code> – The IP address of the schema's
   *                     database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-name</code> – The name of the schema's database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-engine</code> – The name of the schema database's
   *                     engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>original-schema-name</code> – The name of the schema's database's
   *                     main schema.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>schema-id</code> – The ID of the schema, for example
   *                         <code>15</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>schema-name</code> – The name of the schema.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>server-ip-address</code> – The IP address of the schema
   *                     database's server.</p>
   *             </li>
   *          </ul>
   *          <p>An example is: <code>describe-fleet-advisor-schemas --filter
   *                 Name="schema-id",Values="50"</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Sets the maximum number of records returned in the response.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a database in a Fleet Advisor collector inventory.</p>
 * @public
 */
export interface DatabaseShortInfoResponse {
  /**
   * <p>The ID of a database in a Fleet Advisor collector inventory.</p>
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * <p>The name of a database in a Fleet Advisor collector inventory.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The IP address of a database in a Fleet Advisor collector inventory.</p>
   * @public
   */
  DatabaseIpAddress?: string | undefined;

  /**
   * <p>The database engine of a database in a Fleet Advisor collector inventory, for example
   *                 <code>PostgreSQL</code>.</p>
   * @public
   */
  DatabaseEngine?: string | undefined;
}

/**
 * <p>Describes a schema in a Fleet Advisor collector inventory.</p>
 * @public
 */
export interface SchemaShortInfoResponse {
  /**
   * <p>The ID of a schema in a Fleet Advisor collector inventory.</p>
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * <p>The name of a schema in a Fleet Advisor collector inventory.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The ID of a database in a Fleet Advisor collector inventory.</p>
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * <p>The name of a database in a Fleet Advisor collector inventory.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The IP address of a database in a Fleet Advisor collector inventory.</p>
   * @public
   */
  DatabaseIpAddress?: string | undefined;
}

/**
 * <p>Describes a schema in a Fleet Advisor collector inventory.</p>
 * @public
 */
export interface SchemaResponse {
  /**
   * <p>The number of lines of code in a schema in a Fleet Advisor collector inventory.</p>
   * @public
   */
  CodeLineCount?: number | undefined;

  /**
   * <p>The size level of the code in a schema in a Fleet Advisor collector inventory.</p>
   * @public
   */
  CodeSize?: number | undefined;

  /**
   * <p>The complexity level of the code in a schema in a Fleet Advisor collector inventory.</p>
   * @public
   */
  Complexity?: string | undefined;

  /**
   * <p>The database server for a schema in a Fleet Advisor collector inventory.</p>
   * @public
   */
  Server?: ServerShortInfoResponse | undefined;

  /**
   * <p>The database for a schema in a Fleet Advisor collector inventory.</p>
   * @public
   */
  DatabaseInstance?: DatabaseShortInfoResponse | undefined;

  /**
   * <p>The ID of a schema in a Fleet Advisor collector inventory.</p>
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * <p>The name of a schema in a Fleet Advisor collector inventory.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>Describes a schema in a Fleet Advisor collector inventory.</p>
   * @public
   */
  OriginalSchema?: SchemaShortInfoResponse | undefined;

  /**
   * <p>The similarity value for a schema in a Fleet Advisor collector inventory. A higher similarity value
   *             indicates that a schema is likely to be a duplicate.</p>
   * @public
   */
  Similarity?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemasResponse {
  /**
   * <p>A collection of <code>SchemaResponse</code> objects.</p>
   * @public
   */
  FleetAdvisorSchemas?: SchemaResponse[] | undefined;

  /**
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *                 <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceProfilesMessage {
  /**
   * <p>Filters applied to the instance profiles described in the form of key-value pairs.</p>
   *          <p>Valid filter names and values: instance-profile-identifier, instance profile arn or name</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceProfilesResponse {
  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A description of instance profiles.</p>
   * @public
   */
  InstanceProfiles?: InstanceProfile[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelAssessmentsMessage {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the migration project.</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>Filters applied to the metadata model assessments described in the form of key-value pairs.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *             The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *             make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelAssessmentsResponse {
  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A paginated list of metadata model assessments for the specified migration project.</p>
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelConversionsMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>Filters applied to the metadata model conversions described in the form of key-value pairs.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelConversionsResponse {
  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A paginated list of metadata model conversions.</p>
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsAsScriptMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>Filters applied to the metadata model exports described in the form of key-value pairs.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsAsScriptResponse {
  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A paginated list of metadata model exports.</p>
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsToTargetMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>Filters applied to the metadata model exports described in the form of key-value pairs.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsToTargetResponse {
  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A paginated list of metadata model exports.</p>
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelImportsMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>Filters applied to the metadata model imports described in the form of key-value pairs.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A paginated list of metadata model imports.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMetadataModelImportsResponse {
  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A paginated list of metadata model imports.</p>
   * @public
   */
  Requests?: SchemaConversionRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeMigrationProjectsMessage {
  /**
   * <p>Filters applied to the migration projects described in the form of key-value pairs.</p>
   *          <p>Valid filter names and values:</p>
   *          <ul>
   *             <li>
   *                <p>instance-profile-identifier, instance profile arn or name</p>
   *             </li>
   *             <li>
   *                <p>data-provider-identifier, data provider arn or name</p>
   *             </li>
   *             <li>
   *                <p>migration-project-identifier, migration project arn or name</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMigrationProjectsResponse {
  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A description of migration projects.</p>
   * @public
   */
  MigrationProjects?: MigrationProject[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeOrderableReplicationInstancesMessage {
  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>In response to the <code>DescribeOrderableReplicationInstances</code> operation, this
 *          object describes an available replication instance. This description includes the
 *          replication instance's type, engine version, and allocated storage.</p>
 * @public
 */
export interface OrderableReplicationInstance {
  /**
   * <p>The version of the replication engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. For example to specify the instance class dms.c4.large, set
   *          this parameter to <code>"dms.c4.large"</code>.</p>
   *          <p>For more information on the settings and capacities for the available replication
   *          instance classes, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth"> Selecting the right DMS replication instance for your
   *             migration</a>. </p>
   * @public
   */
  ReplicationInstanceClass?: string | undefined;

  /**
   * <p>The type of storage used by the replication instance.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The minimum amount of storage (in gigabytes) that can be allocated for the replication
   *          instance.</p>
   * @public
   */
  MinAllocatedStorage?: number | undefined;

  /**
   * <p>The minimum amount of storage (in gigabytes) that can be allocated for the replication
   *          instance.</p>
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * <p>The default amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   * @public
   */
  DefaultAllocatedStorage?: number | undefined;

  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   * @public
   */
  IncludedAllocatedStorage?: number | undefined;

  /**
   * <p>List of Availability Zones for this replication instance.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The value returned when the specified <code>EngineVersion</code> of the replication
   *          instance is in Beta or test mode. This indicates some features might not work as
   *          expected.</p>
   *          <note>
   *             <p>DMS supports the <code>ReleaseStatus</code> parameter in versions 3.1.4 and
   *             later.</p>
   *          </note>
   * @public
   */
  ReleaseStatus?: ReleaseStatusValues | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeOrderableReplicationInstancesResponse {
  /**
   * <p>The order-able replication instances available.</p>
   * @public
   */
  OrderableReplicationInstances?: OrderableReplicationInstance[] | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribePendingMaintenanceActionsResponse {
  /**
   * <p>The pending maintenance action.</p>
   * @public
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[] | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationLimitationsRequest {
  /**
   * <p>Filters applied to the limitations described in the form of key-value pairs.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, Fleet Advisor includes a pagination token
   *             in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page
   *             of results. If this parameter is specified, the response includes only records beyond
   *             the marker, up to the value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information about the limitations of target Amazon Web Services engines.</p>
 *          <p>Your source database might include features that the target Amazon Web Services engine doesn't
 *             support. Fleet Advisor lists these features as limitations. You should consider these
 *             limitations during database migration. For each limitation, Fleet Advisor recommends an
 *             action that you can take to address or avoid this limitation.</p>
 * @public
 */
export interface Limitation {
  /**
   * <p>The identifier of the source database.</p>
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * <p>The name of the target engine that Fleet Advisor should use in the target engine
   *             recommendation. Valid values include <code>"rds-aurora-mysql"</code>,
   *                 <code>"rds-aurora-postgresql"</code>, <code>"rds-mysql"</code>,
   *                 <code>"rds-oracle"</code>, <code>"rds-sql-server"</code>, and
   *                 <code>"rds-postgresql"</code>.</p>
   * @public
   */
  EngineName?: string | undefined;

  /**
   * <p>The name of the limitation. Describes unsupported database features, migration action
   *             items, and other limitations.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the limitation. Provides additional information about the limitation,
   *             and includes recommended actions that you can take to address or avoid this
   *             limitation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The impact of the limitation. You can use this parameter to prioritize limitations
   *             that you want to address. Valid values include <code>"Blocker"</code>,
   *                 <code>"High"</code>, <code>"Medium"</code>, and <code>"Low"</code>.</p>
   * @public
   */
  Impact?: string | undefined;

  /**
   * <p>The type of the limitation, such as action required, upgrade required, and limited
   *             feature.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationLimitationsResponse {
  /**
   * <p>The unique pagination token returned for you to pass to a subsequent request. Fleet
   *             Advisor returns this token when the number of records in the response is greater than
   *             the <code>MaxRecords</code> value. To retrieve the next page, make the call again using
   *             the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of limitations for recommendations of target Amazon Web Services engines.</p>
   * @public
   */
  Limitations?: Limitation[] | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationsRequest {
  /**
   * <p>Filters applied to the target engine recommendations described in the form of
   *             key-value pairs.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, Fleet Advisor includes a pagination token
   *             in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>Specifies the unique pagination token that makes it possible to display the next page
   *             of results. If this parameter is specified, the response includes only records beyond
   *             the marker, up to the value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides information that describes the requirements to the target engine on
 *             Amazon RDS.</p>
 * @public
 */
export interface RdsRequirements {
  /**
   * <p>The required target Amazon RDS engine edition.</p>
   * @public
   */
  EngineEdition?: string | undefined;

  /**
   * <p>The required number of virtual CPUs (vCPU) on the Amazon RDS DB instance.</p>
   * @public
   */
  InstanceVcpu?: number | undefined;

  /**
   * <p>The required memory on the Amazon RDS DB instance.</p>
   * @public
   */
  InstanceMemory?: number | undefined;

  /**
   * <p>The required Amazon RDS DB instance storage size.</p>
   * @public
   */
  StorageSize?: number | undefined;

  /**
   * <p>The required number of I/O operations completed each second (IOPS) on your Amazon RDS DB
   *             instance.</p>
   * @public
   */
  StorageIops?: number | undefined;

  /**
   * <p>The required deployment option for the Amazon RDS DB instance. Valid values include
   *                 <code>"MULTI_AZ"</code> for Multi-AZ deployments and <code>"SINGLE_AZ"</code> for
   *             Single-AZ deployments.</p>
   * @public
   */
  DeploymentOption?: string | undefined;

  /**
   * <p>The required target Amazon RDS engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;
}

/**
 * <p>Provides information that describes the configuration of the recommended target engine
 *             on Amazon RDS.</p>
 * @public
 */
export interface RdsConfiguration {
  /**
   * <p>Describes the recommended target Amazon RDS engine edition.</p>
   * @public
   */
  EngineEdition?: string | undefined;

  /**
   * <p>Describes the recommended target Amazon RDS instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>Describes the number of virtual CPUs (vCPU) on the recommended Amazon RDS DB instance that
   *             meets your requirements.</p>
   * @public
   */
  InstanceVcpu?: number | undefined;

  /**
   * <p>Describes the memory on the recommended Amazon RDS DB instance that meets your
   *             requirements.</p>
   * @public
   */
  InstanceMemory?: number | undefined;

  /**
   * <p>Describes the storage type of the recommended Amazon RDS DB instance that meets your
   *             requirements.</p>
   *          <p>Amazon RDS provides three storage types: General Purpose SSD (also known as gp2 and gp3),
   *             Provisioned IOPS SSD (also known as io1), and magnetic (also known as standard).</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>Describes the storage size of the recommended Amazon RDS DB instance that meets your
   *             requirements.</p>
   * @public
   */
  StorageSize?: number | undefined;

  /**
   * <p>Describes the number of I/O operations completed each second (IOPS) on the recommended
   *             Amazon RDS DB instance that meets your requirements.</p>
   * @public
   */
  StorageIops?: number | undefined;

  /**
   * <p>Describes the deployment option for the recommended Amazon RDS DB instance. The deployment
   *             options include Multi-AZ and Single-AZ deployments. Valid values include
   *                 <code>"MULTI_AZ"</code> and <code>"SINGLE_AZ"</code>.</p>
   * @public
   */
  DeploymentOption?: string | undefined;

  /**
   * <p>Describes the recommended target Amazon RDS engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;
}

/**
 * <p>Provides information that describes a recommendation of a target engine on
 *             Amazon RDS.</p>
 * @public
 */
export interface RdsRecommendation {
  /**
   * <p>Supplemental information about the requirements to the recommended target database on
   *             Amazon RDS.</p>
   * @public
   */
  RequirementsToTarget?: RdsRequirements | undefined;

  /**
   * <p>Supplemental information about the configuration of the recommended target database on
   *             Amazon RDS.</p>
   * @public
   */
  TargetConfiguration?: RdsConfiguration | undefined;
}

/**
 * <p>Provides information about the target engine for the specified source database.</p>
 * @public
 */
export interface RecommendationData {
  /**
   * <p>The recommendation of a target Amazon RDS database engine.</p>
   * @public
   */
  RdsEngine?: RdsRecommendation | undefined;
}

/**
 * <p>Provides information that describes a recommendation of a target engine.</p>
 *          <p>A <i>recommendation</i> is a set of possible Amazon Web Services target engines that
 *             you can choose to migrate your source on-premises database. In this set, Fleet Advisor
 *             suggests a single target engine as the right sized migration destination. To determine
 *             this rightsized migration destination, Fleet Advisor uses the inventory metadata and
 *             metrics from data collector. You can use recommendations before the start of migration
 *             to save costs and reduce risks.</p>
 *          <p>With recommendations, you can explore different target options and compare metrics, so
 *             you can make an informed decision when you choose the migration target.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>The identifier of the source database for which Fleet Advisor provided this
   *             recommendation.</p>
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * <p>The name of the target engine. Valid values include <code>"rds-aurora-mysql"</code>,
   *                 <code>"rds-aurora-postgresql"</code>, <code>"rds-mysql"</code>,
   *                 <code>"rds-oracle"</code>, <code>"rds-sql-server"</code>, and
   *                 <code>"rds-postgresql"</code>.</p>
   * @public
   */
  EngineName?: string | undefined;

  /**
   * <p>The date when Fleet Advisor created the target engine recommendation.</p>
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * <p>The status of the target engine recommendation. Valid values include
   *                 <code>"alternate"</code>, <code>"in-progress"</code>, <code>"not-viable"</code>, and
   *                 <code>"recommended"</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Indicates that this target is the rightsized migration destination.</p>
   * @public
   */
  Preferred?: boolean | undefined;

  /**
   * <p>The settings in JSON format for the preferred target engine parameters. These
   *             parameters include capacity, resource utilization, and the usage type (production,
   *             development, or testing).</p>
   * @public
   */
  Settings?: RecommendationSettings | undefined;

  /**
   * <p>The recommendation of a target engine for the specified source database.</p>
   * @public
   */
  Data?: RecommendationData | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationsResponse {
  /**
   * <p>The unique pagination token returned for you to pass to a subsequent request. Fleet
   *             Advisor returns this token when the number of records in the response is greater than
   *             the <code>MaxRecords</code> value. To retrieve the next page, make the call again using
   *             the returned token and keeping all other arguments unchanged.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of recommendations of target engines that Fleet Advisor created for the
   *             source database.</p>
   * @public
   */
  Recommendations?: Recommendation[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeRefreshSchemasStatusMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RefreshSchemasStatusTypeValue = {
  FAILED: "failed",
  REFRESHING: "refreshing",
  SUCCESSFUL: "successful",
} as const;

/**
 * @public
 */
export type RefreshSchemasStatusTypeValue =
  (typeof RefreshSchemasStatusTypeValue)[keyof typeof RefreshSchemasStatusTypeValue];

/**
 * <p>Provides information that describes status of a schema at an endpoint specified by the
 *             <code>DescribeRefreshSchemaStatus</code> operation.</p>
 * @public
 */
export interface RefreshSchemasStatus {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * <p>The status of the schema.</p>
   * @public
   */
  Status?: RefreshSchemasStatusTypeValue | undefined;

  /**
   * <p>The date the schema was last refreshed.</p>
   * @public
   */
  LastRefreshDate?: Date | undefined;

  /**
   * <p>The last failure message for the schema.</p>
   * @public
   */
  LastFailureMessage?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeRefreshSchemasStatusResponse {
  /**
   * <p>The status of the schema.</p>
   * @public
   */
  RefreshSchemasStatus?: RefreshSchemasStatus | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationConfigsMessage {
  /**
   * <p>Filters applied to the replication configs.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationConfigsResponse {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Returned configuration parameters that describe each provisioned DMS Serverless
   *          replication.</p>
   * @public
   */
  ReplicationConfigs?: ReplicationConfig[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationInstancesMessage {
  /**
   * <p>Filters applied to replication instances.</p>
   *          <p>Valid filter names: replication-instance-arn | replication-instance-id |
   *          replication-instance-class | engine-version</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationInstancesResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The replication instances described.</p>
   * @public
   */
  ReplicationInstances?: ReplicationInstance[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationInstanceTaskLogsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Contains metadata for a replication instance task log.</p>
 * @public
 */
export interface ReplicationInstanceTaskLog {
  /**
   * <p>The name of the replication task.</p>
   * @public
   */
  ReplicationTaskName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * <p>The size, in bytes, of the replication task log.</p>
   * @public
   */
  ReplicationInstanceTaskLogSize?: number | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationInstanceTaskLogsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * <p>An array of replication task log metadata. Each member of the array contains the
   *          replication task name, ARN, and task log size (in bytes). </p>
   * @public
   */
  ReplicationInstanceTaskLogs?: ReplicationInstanceTaskLog[] | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationsMessage {
  /**
   * <p>Filters applied to the replications.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>The results returned in <code>describe-replications</code> to display the results of the
 *          premigration assessment from the replication configuration.</p>
 * @public
 */
export interface PremigrationAssessmentStatus {
  /**
   * <p>The Amazon Resource Name (ARN) of this assessment run.</p>
   * @public
   */
  PremigrationAssessmentRunArn?: string | undefined;

  /**
   * <p>A configurable setting you can set to <code>true</code> (the defualt setting) or
   *             <code>false</code>. Use this setting to to stop the replication from starting
   *          automatically if the assessment fails. This can help you evaluate the issue that is
   *          preventing the replication from running successfully.</p>
   * @public
   */
  FailOnAssessmentFailure?: boolean | undefined;

  /**
   * <p>This describes the assessment run status. The status can be one of the following
   *          values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>cancelling</code>: The assessment run was canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The assessment run was deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code>: At least one individual assessment completed with a failed
   *                status. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error-provisioning</code>: An internal error occurred while resources were
   *                provisioned (during the <code>provisioning</code> status).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error-executing</code> An internal error occurred while individual
   *                assessments ran (during the <code>running</code> status).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>invalid state</code>: The assessment run is in an unknown state. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>passed</code>: All individual assessments have completed and none have a
   *                failed status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisioning</code>: The resources required to run individual assessments
   *                are being provisioned. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>running</code>: Individual assessments are being run. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>starting</code>: The assessment run is starting, but resources are not yet
   *                being provisioned for individual assessments. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>warning</code>: At least one individual assessment completed with a warning
   *                status. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The date which the assessment run was created.</p>
   * @public
   */
  PremigrationAssessmentRunCreationDate?: Date | undefined;

  /**
   * <p>The progress values reported by the <code>AssessmentProgress</code> response
   *          element.</p>
   * @public
   */
  AssessmentProgress?: ReplicationTaskAssessmentRunProgress | undefined;

  /**
   * <p>The last message generated by an individual assessment failure.</p>
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * <p>The Amazon S3 bucket that Database Migration Service Serverless created to store the results of this
   *          assessment run.</p>
   * @public
   */
  ResultLocationBucket?: string | undefined;

  /**
   * <p>The folder within an Amazon S3 bucket where you want Database Migration Service to store the results of
   *          this assessment run.</p>
   * @public
   */
  ResultLocationFolder?: string | undefined;

  /**
   * <p>The supported values are <code>SSE_KMS</code> and <code>SSE_S3</code>. If these values
   *          are not provided, then the files are not encrypted at rest. For more information, see
   *             <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.KMSKeys">Creating Amazon Web Services KMS
   *             keys to encrypt Amazon S3 target objects</a>.</p>
   * @public
   */
  ResultEncryptionMode?: string | undefined;

  /**
   * <p>The ARN of a custom KMS encryption key that you specify when you set
   *             <code>ResultEncryptionMode</code> to <code>SSE_KMS</code>.</p>
   * @public
   */
  ResultKmsKeyArn?: string | undefined;

  /**
   * <p>The object containing the result statistics for a completed assessment run.</p>
   * @public
   */
  ResultStatistic?: ReplicationTaskAssessmentRunResultStatistic | undefined;
}

/**
 * <p>Information about provisioning resources for an DMS serverless replication.</p>
 * @public
 */
export interface ProvisionData {
  /**
   * <p>The current provisioning state </p>
   * @public
   */
  ProvisionState?: string | undefined;

  /**
   * <p>The number of capacity units the replication is using.</p>
   * @public
   */
  ProvisionedCapacityUnits?: number | undefined;

  /**
   * <p>The timestamp when DMS provisioned replication resources.</p>
   * @public
   */
  DateProvisioned?: Date | undefined;

  /**
   * <p>Whether the new provisioning is available to the replication.</p>
   * @public
   */
  IsNewProvisioningAvailable?: boolean | undefined;

  /**
   * <p>The timestamp when provisioning became available.</p>
   * @public
   */
  DateNewProvisioningDataAvailable?: Date | undefined;

  /**
   * <p>A message describing the reason that DMS provisioned new resources for the serverless
   *          replication.</p>
   * @public
   */
  ReasonForNewProvisioningData?: string | undefined;
}

/**
 * <p>This object provides a collection of statistics about a serverless replication.</p>
 * @public
 */
export interface ReplicationStats {
  /**
   * <p>The percent complete for the full load serverless replication.</p>
   * @public
   */
  FullLoadProgressPercent?: number | undefined;

  /**
   * <p>The elapsed time of the replication, in milliseconds.</p>
   * @public
   */
  ElapsedTimeMillis?: number | undefined;

  /**
   * <p>The number of tables loaded for this replication.</p>
   * @public
   */
  TablesLoaded?: number | undefined;

  /**
   * <p>The number of tables currently loading for this replication.</p>
   * @public
   */
  TablesLoading?: number | undefined;

  /**
   * <p>The number of tables queued for this replication.</p>
   * @public
   */
  TablesQueued?: number | undefined;

  /**
   * <p>The number of errors that have occured for this replication.</p>
   * @public
   */
  TablesErrored?: number | undefined;

  /**
   * <p>The date the replication was started either with a fresh start or a target
   *          reload.</p>
   * @public
   */
  FreshStartDate?: Date | undefined;

  /**
   * <p>The date the replication is scheduled to start.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date the replication was stopped.</p>
   * @public
   */
  StopDate?: Date | undefined;

  /**
   * <p>The date the replication full load was started.</p>
   * @public
   */
  FullLoadStartDate?: Date | undefined;

  /**
   * <p>The date the replication full load was finished.</p>
   * @public
   */
  FullLoadFinishDate?: Date | undefined;
}

/**
 * <p>Provides information that describes a serverless replication created by the
 *             <code>CreateReplication</code> operation.</p>
 * @public
 */
export interface Replication {
  /**
   * <p>The identifier for the <code>ReplicationConfig</code> associated with the
   *          replication.</p>
   * @public
   */
  ReplicationConfigIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name for the <code>ReplicationConfig</code> associated with the
   *          replication.</p>
   * @public
   */
  ReplicationConfigArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name for an existing <code>Endpoint</code> the serverless
   *          replication uses for its data source.</p>
   * @public
   */
  SourceEndpointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name for an existing <code>Endpoint</code> the serverless
   *          replication uses for its data target.</p>
   * @public
   */
  TargetEndpointArn?: string | undefined;

  /**
   * <p>The type of the serverless replication.</p>
   * @public
   */
  ReplicationType?: MigrationTypeValue | undefined;

  /**
   * <p>The current status of the serverless replication.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Information about provisioning resources for an DMS serverless replication.</p>
   * @public
   */
  ProvisionData?: ProvisionData | undefined;

  /**
   * <p>The status output of premigration assessment in describe-replications.</p>
   * @public
   */
  PremigrationAssessmentStatuses?: PremigrationAssessmentStatus[] | undefined;

  /**
   * <p>The reason the replication task was stopped. This response parameter can return one of
   *          the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason NORMAL"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECOVERABLE_ERROR"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason FATAL_ERROR"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason FULL_LOAD_ONLY_FINISHED"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_FULL_LOAD"</code> – Full load
   *                completed, with cached changes not applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_CACHED_EVENTS"</code> – Full
   *                load completed, with cached changes applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason EXPRESS_LICENSE_LIMITS_REACHED"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_DDL_APPLY"</code> – User-defined
   *                stop task after DDL applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_DUE_TO_LOW_MEMORY"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_DUE_TO_LOW_DISK"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AT_SERVER_TIME"</code> – User-defined
   *                server time for stopping task</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AT_COMMIT_TIME"</code> – User-defined
   *                commit time for stopping task</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECONFIGURATION_RESTART"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECYCLE_TASK"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  StopReason?: string | undefined;

  /**
   * <p>Error and other information about why a serverless replication failed.</p>
   * @public
   */
  FailureMessages?: string[] | undefined;

  /**
   * <p>This object provides a collection of statistics about a serverless replication.</p>
   * @public
   */
  ReplicationStats?: ReplicationStats | undefined;

  /**
   * <p>The type of replication to start.</p>
   * @public
   */
  StartReplicationType?: string | undefined;

  /**
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *             <code>CdcStartTime</code> or <code>CdcStartPosition</code> to specify when you want a
   *          CDC operation to start. Specifying both values results in an error.</p>
   * @public
   */
  CdcStartTime?: Date | undefined;

  /**
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *             <code>CdcStartTime</code> or <code>CdcStartPosition</code> to specify when you want a
   *          CDC operation to start. Specifying both values results in an error.</p>
   * @public
   */
  CdcStartPosition?: string | undefined;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   * @public
   */
  CdcStopPosition?: string | undefined;

  /**
   * <p>Indicates the last checkpoint that occurred during a change data capture (CDC)
   *          operation. You can provide this value to the <code>CdcStartPosition</code> parameter to
   *          start a CDC operation that begins at that checkpoint.</p>
   * @public
   */
  RecoveryCheckpoint?: string | undefined;

  /**
   * <p>The time the serverless replication was created.</p>
   * @public
   */
  ReplicationCreateTime?: Date | undefined;

  /**
   * <p>The time the serverless replication was updated.</p>
   * @public
   */
  ReplicationUpdateTime?: Date | undefined;

  /**
   * <p>The timestamp when replication was last stopped.</p>
   * @public
   */
  ReplicationLastStopTime?: Date | undefined;

  /**
   * <p>The timestamp when DMS will deprovision the replication.</p>
   * @public
   */
  ReplicationDeprovisionTime?: Date | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationsResponse {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The replication descriptions.</p>
   * @public
   */
  Replications?: Replication[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationSubnetGroupsMessage {
  /**
   * <p>Filters applied to replication subnet groups.</p>
   *          <p>Valid filter names: replication-subnet-group-id</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationSubnetGroupsResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A description of the replication subnet groups.</p>
   * @public
   */
  ReplicationSubnetGroups?: ReplicationSubnetGroup[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationTableStatisticsMessage {
  /**
   * <p>The replication config to describe.</p>
   * @public
   */
  ReplicationConfigArn: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Filters applied to the replication table statistics.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a collection of table statistics in response to a request by the
 *             <code>DescribeTableStatistics</code> operation.</p>
 * @public
 */
export interface TableStatistics {
  /**
   * <p>The schema name.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The number of insert actions performed on a table.</p>
   * @public
   */
  Inserts?: number | undefined;

  /**
   * <p>The number of delete actions performed on a table.</p>
   * @public
   */
  Deletes?: number | undefined;

  /**
   * <p>The number of update actions performed on a table.</p>
   * @public
   */
  Updates?: number | undefined;

  /**
   * <p>The data definition language (DDL) used to build and modify the structure of your
   *          tables.</p>
   * @public
   */
  Ddls?: number | undefined;

  /**
   * <p>The number of insert actions applied on a target table.</p>
   * @public
   */
  AppliedInserts?: number | undefined;

  /**
   * <p>The number of delete actions applied on a target table.</p>
   * @public
   */
  AppliedDeletes?: number | undefined;

  /**
   * <p>The number of update actions applied on a target table.</p>
   * @public
   */
  AppliedUpdates?: number | undefined;

  /**
   * <p>The number of data definition language (DDL) statements used to build and modify the
   *          structure of your tables applied on the target.</p>
   * @public
   */
  AppliedDdls?: number | undefined;

  /**
   * <p>The number of rows added during the full load operation.</p>
   * @public
   */
  FullLoadRows?: number | undefined;

  /**
   * <p>The number of rows that failed conditional checks during the full load operation (valid
   *          only for migrations where DynamoDB is the target).</p>
   * @public
   */
  FullLoadCondtnlChkFailedRows?: number | undefined;

  /**
   * <p>The number of rows that failed to load during the full load operation (valid only for
   *          migrations where DynamoDB is the target).</p>
   * @public
   */
  FullLoadErrorRows?: number | undefined;

  /**
   * <p>The time when the full load operation started.</p>
   * @public
   */
  FullLoadStartTime?: Date | undefined;

  /**
   * <p>The time when the full load operation completed.</p>
   * @public
   */
  FullLoadEndTime?: Date | undefined;

  /**
   * <p>A value that indicates if the table was reloaded (<code>true</code>) or loaded as part
   *          of a new full load operation (<code>false</code>).</p>
   * @public
   */
  FullLoadReloaded?: boolean | undefined;

  /**
   * <p>The last time a table was updated.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>The state of the tables described.</p>
   *          <p>Valid states: Table does not exist | Before load | Full load | Table completed | Table
   *          cancelled | Table error | Table is being reloaded</p>
   * @public
   */
  TableState?: string | undefined;

  /**
   * <p>The number of records that have yet to be validated.</p>
   * @public
   */
  ValidationPendingRecords?: number | undefined;

  /**
   * <p>The number of records that failed validation.</p>
   * @public
   */
  ValidationFailedRecords?: number | undefined;

  /**
   * <p>The number of records that couldn't be validated.</p>
   * @public
   */
  ValidationSuspendedRecords?: number | undefined;

  /**
   * <p>The validation state of the table.</p>
   *          <p>This parameter can have the following values:</p>
   *          <ul>
   *             <li>
   *                <p>Not enabled – Validation isn't enabled for the table in the migration
   *                task.</p>
   *             </li>
   *             <li>
   *                <p>Pending records – Some records in the table are waiting for
   *                validation.</p>
   *             </li>
   *             <li>
   *                <p>Mismatched records – Some records in the table don't match between the
   *                source and target.</p>
   *             </li>
   *             <li>
   *                <p>Suspended records – Some records in the table couldn't be
   *                validated.</p>
   *             </li>
   *             <li>
   *                <p>No primary key –The table couldn't be validated because it has no
   *                primary key.</p>
   *             </li>
   *             <li>
   *                <p>Table error – The table wasn't validated because it's in an error
   *                state and some data wasn't migrated.</p>
   *             </li>
   *             <li>
   *                <p>Validated – All rows in the table are validated. If the table is updated,
   *                the status can change from Validated.</p>
   *             </li>
   *             <li>
   *                <p>Error – The table couldn't be validated because of an unexpected
   *                error.</p>
   *             </li>
   *             <li>
   *                <p>Pending validation – The table is waiting validation.</p>
   *             </li>
   *             <li>
   *                <p>Preparing table – Preparing the table enabled in the migration task for
   *                validation.</p>
   *             </li>
   *             <li>
   *                <p>Pending revalidation – All rows in the table are pending validation after
   *                the table was updated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidationState?: string | undefined;

  /**
   * <p>Additional details about the state of validation.</p>
   * @public
   */
  ValidationStateDetails?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationTableStatisticsResponse {
  /**
   * <p>The Amazon Resource Name of the replication config.</p>
   * @public
   */
  ReplicationConfigArn?: string | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Returns table statistics on the replication, including table name, rows inserted, rows
   *          updated, and rows deleted.</p>
   * @public
   */
  ReplicationTableStatistics?: TableStatistics[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationTaskAssessmentResultsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the task. When this input
   *          parameter is specified, the API returns only one result and ignore the values of the
   *             <code>MaxRecords</code> and <code>Marker</code> parameters. </p>
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p> The task assessment report in JSON format. </p>
 * @public
 */
export interface ReplicationTaskAssessmentResult {
  /**
   * <p> The replication task identifier of the task on which the task assessment was run.
   *       </p>
   * @public
   */
  ReplicationTaskIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * <p>The date the task assessment was completed. </p>
   * @public
   */
  ReplicationTaskLastAssessmentDate?: Date | undefined;

  /**
   * <p> The status of the task assessment. </p>
   * @public
   */
  AssessmentStatus?: string | undefined;

  /**
   * <p> The file containing the results of the task assessment. </p>
   * @public
   */
  AssessmentResultsFile?: string | undefined;

  /**
   * <p> The task assessment results in JSON format. </p>
   *          <p>The response object only contains this field if you provide <a>DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn</a> in the
   *          request.</p>
   * @public
   */
  AssessmentResults?: string | undefined;

  /**
   * <p> The URL of the S3 object containing the task assessment results. </p>
   *          <p>The response object only contains this field if you provide <a>DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn</a> in the
   *          request.</p>
   * @public
   */
  S3ObjectUrl?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationTaskAssessmentResultsResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>- The Amazon S3 bucket where the task assessment report is located. </p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p> The task assessment report. </p>
   * @public
   */
  ReplicationTaskAssessmentResults?: ReplicationTaskAssessmentResult[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationTaskAssessmentRunsMessage {
  /**
   * <p>Filters applied to the premigration assessment runs described in the form of key-value
   *          pairs.</p>
   *          <p>Valid filter names: <code>replication-task-assessment-run-arn</code>,
   *             <code>replication-task-arn</code>, <code>replication-instance-arn</code>,
   *             <code>status</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReplicationTaskAssessmentRunsResponse {
  /**
   * <p>A pagination token returned for you to pass to a subsequent request. If you pass this
   *          token as the <code>Marker</code> value in a subsequent request, the response includes only
   *          records beyond the marker, up to the value specified in the request by
   *             <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>One or more premigration assessment runs as specified by <code>Filters</code>.</p>
   * @public
   */
  ReplicationTaskAssessmentRuns?: ReplicationTaskAssessmentRun[] | undefined;
}

/**
 * @internal
 */
export const CreateDataMigrationMessageFilterSensitiveLog = (obj: CreateDataMigrationMessage): any => ({
  ...obj,
  ...(obj.SelectionRules && { SelectionRules: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataMigrationSettingsFilterSensitiveLog = (obj: DataMigrationSettings): any => ({
  ...obj,
  ...(obj.SelectionRules && { SelectionRules: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataMigrationFilterSensitiveLog = (obj: DataMigration): any => ({
  ...obj,
  ...(obj.DataMigrationSettings && {
    DataMigrationSettings: DataMigrationSettingsFilterSensitiveLog(obj.DataMigrationSettings),
  }),
  ...(obj.PublicIpAddresses && { PublicIpAddresses: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDataMigrationResponseFilterSensitiveLog = (obj: CreateDataMigrationResponse): any => ({
  ...obj,
  ...(obj.DataMigration && { DataMigration: DataMigrationFilterSensitiveLog(obj.DataMigration) }),
});

/**
 * @internal
 */
export const DocDbSettingsFilterSensitiveLog = (obj: DocDbSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GcpMySQLSettingsFilterSensitiveLog = (obj: GcpMySQLSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IBMDb2SettingsFilterSensitiveLog = (obj: IBMDb2Settings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const KafkaSettingsFilterSensitiveLog = (obj: KafkaSettings): any => ({
  ...obj,
  ...(obj.SslClientKeyPassword && { SslClientKeyPassword: SENSITIVE_STRING }),
  ...(obj.SaslPassword && { SaslPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MicrosoftSQLServerSettingsFilterSensitiveLog = (obj: MicrosoftSQLServerSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MongoDbSettingsFilterSensitiveLog = (obj: MongoDbSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MySQLSettingsFilterSensitiveLog = (obj: MySQLSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OracleSettingsFilterSensitiveLog = (obj: OracleSettings): any => ({
  ...obj,
  ...(obj.AsmPassword && { AsmPassword: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
  ...(obj.SecurityDbEncryption && { SecurityDbEncryption: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostgreSQLSettingsFilterSensitiveLog = (obj: PostgreSQLSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RedisSettingsFilterSensitiveLog = (obj: RedisSettings): any => ({
  ...obj,
  ...(obj.AuthPassword && { AuthPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RedshiftSettingsFilterSensitiveLog = (obj: RedshiftSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SybaseSettingsFilterSensitiveLog = (obj: SybaseSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEndpointMessageFilterSensitiveLog = (obj: CreateEndpointMessage): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
  ...(obj.MongoDbSettings && { MongoDbSettings: MongoDbSettingsFilterSensitiveLog(obj.MongoDbSettings) }),
  ...(obj.KafkaSettings && { KafkaSettings: KafkaSettingsFilterSensitiveLog(obj.KafkaSettings) }),
  ...(obj.RedshiftSettings && { RedshiftSettings: RedshiftSettingsFilterSensitiveLog(obj.RedshiftSettings) }),
  ...(obj.PostgreSQLSettings && { PostgreSQLSettings: PostgreSQLSettingsFilterSensitiveLog(obj.PostgreSQLSettings) }),
  ...(obj.MySQLSettings && { MySQLSettings: MySQLSettingsFilterSensitiveLog(obj.MySQLSettings) }),
  ...(obj.OracleSettings && { OracleSettings: OracleSettingsFilterSensitiveLog(obj.OracleSettings) }),
  ...(obj.SybaseSettings && { SybaseSettings: SybaseSettingsFilterSensitiveLog(obj.SybaseSettings) }),
  ...(obj.MicrosoftSQLServerSettings && {
    MicrosoftSQLServerSettings: MicrosoftSQLServerSettingsFilterSensitiveLog(obj.MicrosoftSQLServerSettings),
  }),
  ...(obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2SettingsFilterSensitiveLog(obj.IBMDb2Settings) }),
  ...(obj.DocDbSettings && { DocDbSettings: DocDbSettingsFilterSensitiveLog(obj.DocDbSettings) }),
  ...(obj.RedisSettings && { RedisSettings: RedisSettingsFilterSensitiveLog(obj.RedisSettings) }),
  ...(obj.GcpMySQLSettings && { GcpMySQLSettings: GcpMySQLSettingsFilterSensitiveLog(obj.GcpMySQLSettings) }),
});

/**
 * @internal
 */
export const EndpointFilterSensitiveLog = (obj: Endpoint): any => ({
  ...obj,
  ...(obj.MongoDbSettings && { MongoDbSettings: MongoDbSettingsFilterSensitiveLog(obj.MongoDbSettings) }),
  ...(obj.KafkaSettings && { KafkaSettings: KafkaSettingsFilterSensitiveLog(obj.KafkaSettings) }),
  ...(obj.RedshiftSettings && { RedshiftSettings: RedshiftSettingsFilterSensitiveLog(obj.RedshiftSettings) }),
  ...(obj.PostgreSQLSettings && { PostgreSQLSettings: PostgreSQLSettingsFilterSensitiveLog(obj.PostgreSQLSettings) }),
  ...(obj.MySQLSettings && { MySQLSettings: MySQLSettingsFilterSensitiveLog(obj.MySQLSettings) }),
  ...(obj.OracleSettings && { OracleSettings: OracleSettingsFilterSensitiveLog(obj.OracleSettings) }),
  ...(obj.SybaseSettings && { SybaseSettings: SybaseSettingsFilterSensitiveLog(obj.SybaseSettings) }),
  ...(obj.MicrosoftSQLServerSettings && {
    MicrosoftSQLServerSettings: MicrosoftSQLServerSettingsFilterSensitiveLog(obj.MicrosoftSQLServerSettings),
  }),
  ...(obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2SettingsFilterSensitiveLog(obj.IBMDb2Settings) }),
  ...(obj.DocDbSettings && { DocDbSettings: DocDbSettingsFilterSensitiveLog(obj.DocDbSettings) }),
  ...(obj.RedisSettings && { RedisSettings: RedisSettingsFilterSensitiveLog(obj.RedisSettings) }),
  ...(obj.GcpMySQLSettings && { GcpMySQLSettings: GcpMySQLSettingsFilterSensitiveLog(obj.GcpMySQLSettings) }),
});

/**
 * @internal
 */
export const CreateEndpointResponseFilterSensitiveLog = (obj: CreateEndpointResponse): any => ({
  ...obj,
  ...(obj.Endpoint && { Endpoint: EndpointFilterSensitiveLog(obj.Endpoint) }),
});

/**
 * @internal
 */
export const DeleteDataMigrationResponseFilterSensitiveLog = (obj: DeleteDataMigrationResponse): any => ({
  ...obj,
  ...(obj.DataMigration && { DataMigration: DataMigrationFilterSensitiveLog(obj.DataMigration) }),
});

/**
 * @internal
 */
export const DeleteEndpointResponseFilterSensitiveLog = (obj: DeleteEndpointResponse): any => ({
  ...obj,
  ...(obj.Endpoint && { Endpoint: EndpointFilterSensitiveLog(obj.Endpoint) }),
});

/**
 * @internal
 */
export const DescribeDataMigrationsResponseFilterSensitiveLog = (obj: DescribeDataMigrationsResponse): any => ({
  ...obj,
  ...(obj.DataMigrations && {
    DataMigrations: obj.DataMigrations.map((item) => DataMigrationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeEndpointsResponseFilterSensitiveLog = (obj: DescribeEndpointsResponse): any => ({
  ...obj,
  ...(obj.Endpoints && { Endpoints: obj.Endpoints.map((item) => EndpointFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ReplicationTaskAssessmentResultFilterSensitiveLog = (obj: ReplicationTaskAssessmentResult): any => ({
  ...obj,
  ...(obj.S3ObjectUrl && { S3ObjectUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeReplicationTaskAssessmentResultsResponseFilterSensitiveLog = (
  obj: DescribeReplicationTaskAssessmentResultsResponse
): any => ({
  ...obj,
  ...(obj.ReplicationTaskAssessmentResults && {
    ReplicationTaskAssessmentResults: obj.ReplicationTaskAssessmentResults.map((item) =>
      ReplicationTaskAssessmentResultFilterSensitiveLog(item)
    ),
  }),
});
