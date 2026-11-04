// smithy-typescript generated code
import type {
  AnalysisType,
  AntipatternReportStatus,
  ApplicationComponentCriteria,
  ApplicationMode,
  AppType,
  AppUnitErrorCategory,
  AssessmentDataSourceType,
  AssessmentStatus,
  AuthType,
  AwsManagedTargetDestination,
  BinaryAnalyzerName,
  CollectorHealth,
  Condition,
  DatabaseManagementPreference,
  DataSourceType,
  GroupName,
  HeterogeneousTargetDatabaseEngine,
  HomogeneousTargetDatabaseEngine,
  ImportFileTaskStatus,
  InclusionStatus,
  NoPreferenceTargetDestination,
  OSType,
  OutputFormat,
  PipelineType,
  RecommendationReportStatus,
  ResourceSubType,
  RuntimeAnalysisStatus,
  RunTimeAnalyzerName,
  RunTimeAssessmentStatus,
  SelfManageTargetDestination,
  ServerCriteria,
  ServerErrorCategory,
  ServerOsType,
  Severity,
  SortOrder,
  SourceCodeAnalyzerName,
  SrcCodeOrDbAnalysisStatus,
  Strategy,
  StrategyRecommendation,
  TargetDatabaseEngine,
  TargetDestination,
  TransformationToolName,
  VersionControl,
  VersionControlType,
} from "./enums";

/**
 * A combination of existing analysis statuses.
 *
 * @public
 */
export type AnalysisStatusUnion =
  | AnalysisStatusUnion.RuntimeAnalysisStatusMember
  | AnalysisStatusUnion.SrcCodeOrDbAnalysisStatusMember
  | AnalysisStatusUnion.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisStatusUnion {
  /**
   * The status of the analysis.
   *
   * @public
   */
  export interface RuntimeAnalysisStatusMember {
    runtimeAnalysisStatus: RuntimeAnalysisStatus;
    srcCodeOrDbAnalysisStatus?: never;
    $unknown?: never;
  }

  /**
   * The status of the source code or database analysis.
   *
   * @public
   */
  export interface SrcCodeOrDbAnalysisStatusMember {
    runtimeAnalysisStatus?: never;
    srcCodeOrDbAnalysisStatus: SrcCodeOrDbAnalysisStatus;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    runtimeAnalysisStatus?: never;
    srcCodeOrDbAnalysisStatus?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    runtimeAnalysisStatus: (value: RuntimeAnalysisStatus) => T;
    srcCodeOrDbAnalysisStatus: (value: SrcCodeOrDbAnalysisStatus) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Summary information about an analyzable server.
 * @public
 */
export interface AnalyzableServerSummary {
  /**
   * The host name of the analyzable server.
   * @public
   */
  hostname?: string | undefined;

  /**
   * The ip address of the analyzable server.
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * The data source of the analyzable server.
   * @public
   */
  source?: string | undefined;

  /**
   * The virtual machine id of the analyzable server.
   * @public
   */
  vmId?: string | undefined;
}

/**
 * The combination of the existing analyzers.
 *
 * @public
 */
export type AnalyzerNameUnion =
  | AnalyzerNameUnion.BinaryAnalyzerNameMember
  | AnalyzerNameUnion.RunTimeAnalyzerNameMember
  | AnalyzerNameUnion.SourceCodeAnalyzerNameMember
  | AnalyzerNameUnion.$UnknownMember;

/**
 * @public
 */
export namespace AnalyzerNameUnion {
  /**
   * The binary analyzer names.
   *
   * @public
   */
  export interface BinaryAnalyzerNameMember {
    binaryAnalyzerName: BinaryAnalyzerName;
    runTimeAnalyzerName?: never;
    sourceCodeAnalyzerName?: never;
    $unknown?: never;
  }

  /**
   * The assessment analyzer names.
   *
   * @public
   */
  export interface RunTimeAnalyzerNameMember {
    binaryAnalyzerName?: never;
    runTimeAnalyzerName: RunTimeAnalyzerName;
    sourceCodeAnalyzerName?: never;
    $unknown?: never;
  }

  /**
   * The source code analyzer names.
   *
   * @public
   */
  export interface SourceCodeAnalyzerNameMember {
    binaryAnalyzerName?: never;
    runTimeAnalyzerName?: never;
    sourceCodeAnalyzerName: SourceCodeAnalyzerName;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    binaryAnalyzerName?: never;
    runTimeAnalyzerName?: never;
    sourceCodeAnalyzerName?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    binaryAnalyzerName: (value: BinaryAnalyzerName) => T;
    runTimeAnalyzerName: (value: RunTimeAnalyzerName) => T;
    sourceCodeAnalyzerName: (value: SourceCodeAnalyzerName) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the S3 bucket name and the Amazon S3 key name.
 *
 * @public
 */
export interface S3Object {
  /**
   * The S3 bucket name.
   *
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * The Amazon S3 key name.
   *
   * @public
   */
  s3key?: string | undefined;
}

/**
 * The anti-pattern report result.
 *
 * @public
 */
export interface AntipatternReportResult {
  /**
   * The analyzer name.
   *
   * @public
   */
  analyzerName?: AnalyzerNameUnion | undefined;

  /**
   * Contains the S3 bucket name and the Amazon S3 key name.
   *
   * @public
   */
  antiPatternReportS3Object?: S3Object | undefined;

  /**
   * The status of the anti-pattern report generation.
   *
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus | undefined;

  /**
   * The status message for the anti-pattern.
   *
   * @public
   */
  antipatternReportStatusMessage?: string | undefined;
}

/**
 * Contains the summary of anti-patterns and their severity.
 *
 * @public
 */
export interface AntipatternSeveritySummary {
  /**
   * Contains the severity of anti-patterns.
   *
   * @public
   */
  severity?: Severity | undefined;

  /**
   * Contains the count of anti-patterns.
   *
   * @public
   */
  count?: number | undefined;
}

/**
 * Error in the analysis of the application unit.
 *
 * @public
 */
export interface AppUnitError {
  /**
   * The category of the error.
   *
   * @public
   */
  appUnitErrorCategory?: AppUnitErrorCategory | undefined;
}

/**
 * Configuration information used for assessing databases.
 *
 * @public
 */
export interface DatabaseConfigDetail {
  /**
   * AWS Secrets Manager key that holds the credentials that you use to connect to a database.
   *
   * @public
   */
  secretName?: string | undefined;
}

/**
 * Information of the transformation tool that can be used to migrate and modernize the application.
 *
 * @public
 */
export interface TransformationTool {
  /**
   * Name of the tool.
   *
   * @public
   */
  name?: TransformationToolName | undefined;

  /**
   * Description of the tool.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * URL for installing the tool.
   *
   * @public
   */
  tranformationToolInstallationLink?: string | undefined;
}

/**
 * Contains a recommendation set.
 *
 * @public
 */
export interface RecommendationSet {
  /**
   * The target destination for the recommendation set.
   *
   * @public
   */
  transformationTool?: TransformationTool | undefined;

  /**
   * The recommended target destination.
   *
   * @public
   */
  targetDestination?: TargetDestination | undefined;

  /**
   * The recommended strategy.
   *
   * @public
   */
  strategy?: Strategy | undefined;
}

/**
 * The error in server analysis.
 *
 * @public
 */
export interface Result {
  /**
   * The error in server analysis.
   *
   * @public
   */
  analysisType?: AnalysisType | undefined;

  /**
   * The error in server analysis.
   *
   * @public
   */
  analysisStatus?: AnalysisStatusUnion | undefined;

  /**
   * The error in server analysis.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The error in server analysis.
   *
   * @public
   */
  antipatternReportResultList?: AntipatternReportResult[] | undefined;
}

/**
 * Object containing source code information that is linked to an application component.
 *
 * @public
 */
export interface SourceCodeRepository {
  /**
   * The repository name for the source code.
   *
   * @public
   */
  repository?: string | undefined;

  /**
   * The branch of the source code.
   *
   * @public
   */
  branch?: string | undefined;

  /**
   * The type of repository to use for the source code.
   *
   * @public
   */
  versionControlType?: string | undefined;

  /**
   * The name of the project.
   *
   * @public
   */
  projectName?: string | undefined;
}

/**
 * Contains detailed information about an application component.
 *
 * @public
 */
export interface ApplicationComponentDetail {
  /**
   * The ID of the application component.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of application component.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The top recommendation set for the application component.
   *
   * @public
   */
  recommendationSet?: RecommendationSet | undefined;

  /**
   * The status of analysis, if the application component has source code or an associated database.
   *
   * @public
   */
  analysisStatus?: SrcCodeOrDbAnalysisStatus | undefined;

  /**
   * A detailed description of the analysis status and any failure message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * A list of anti-pattern severity summaries.
   *
   * @public
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[] | undefined;

  /**
   * Configuration details for the database associated with the application component.
   *
   * @public
   */
  databaseConfigDetail?: DatabaseConfigDetail | undefined;

  /**
   * Details about the source code repository associated with the application component.
   *
   * @public
   */
  sourceCodeRepositories?: SourceCodeRepository[] | undefined;

  /**
   * The type of application component.
   *
   * @public
   */
  appType?: AppType | undefined;

  /**
   * The application component subtype.
   *
   * @public
   */
  resourceSubType?: ResourceSubType | undefined;

  /**
   * Indicates whether the application component has been included for server recommendation or not.
   *
   * @public
   */
  inclusionStatus?: InclusionStatus | undefined;

  /**
   * The S3 bucket name and the Amazon S3 key name for the anti-pattern report.
   *
   * @public
   */
  antipatternReportS3Object?: S3Object | undefined;

  /**
   * The status of the anti-pattern report generation.
   *
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus | undefined;

  /**
   * The status message for the anti-pattern.
   *
   * @public
   */
  antipatternReportStatusMessage?: string | undefined;

  /**
   * OS version.
   *
   * @public
   */
  osVersion?: string | undefined;

  /**
   * OS driver.
   *
   * @public
   */
  osDriver?: string | undefined;

  /**
   * The timestamp of when the application component was assessed.
   *
   * @public
   */
  lastAnalyzedTimestamp?: Date | undefined;

  /**
   * The ID of the server that the application component is running on.
   *
   * @public
   */
  associatedServerId?: string | undefined;

  /**
   * Set to true if the application component is running on multiple servers.
   *
   * @public
   */
  moreServerAssociationExists?: boolean | undefined;

  /**
   * The status of the application unit.
   *
   * @public
   */
  runtimeStatus?: RuntimeAnalysisStatus | undefined;

  /**
   * The status message for the application unit.
   *
   * @public
   */
  runtimeStatusMessage?: string | undefined;

  /**
   * The error in the analysis of the source code or database.
   *
   * @public
   */
  appUnitError?: AppUnitError | undefined;

  /**
   * A list of the analysis results.
   *
   * @public
   */
  resultList?: Result[] | undefined;
}

/**
 * Summary of the analysis status of the application component.
 *
 * @public
 */
export interface ApplicationComponentStatusSummary {
  /**
   * The status of database analysis.
   *
   * @public
   */
  srcCodeOrDbAnalysisStatus?: SrcCodeOrDbAnalysisStatus | undefined;

  /**
   * The number of application components successfully analyzed, partially successful or failed analysis.
   *
   * @public
   */
  count?: number | undefined;
}

/**
 * Contains information about a strategy recommendation for an application component.
 *
 * @public
 */
export interface ApplicationComponentStrategy {
  /**
   * Strategy recommendation for the application component.
   *
   * @public
   */
  recommendation?: RecommendationSet | undefined;

  /**
   * The recommendation status of a strategy for an application component.
   *
   * @public
   */
  status?: StrategyRecommendation | undefined;

  /**
   * Set to true if the recommendation is set as preferred.
   *
   * @public
   */
  isPreferred?: boolean | undefined;
}

/**
 * Contains the summary of application components.
 *
 * @public
 */
export interface ApplicationComponentSummary {
  /**
   * Contains the name of application types.
   *
   * @public
   */
  appType?: AppType | undefined;

  /**
   * Contains the count of application type.
   *
   * @public
   */
  count?: number | undefined;
}

/**
 * Object containing the choice of application destination that you specify.
 *
 * @public
 */
export interface AwsManagedResources {
  /**
   * The choice of application destination that you specify.
   *
   * @public
   */
  targetDestination: AwsManagedTargetDestination[] | undefined;
}

/**
 * Object containing the choice of application destination that you specify.
 *
 * @public
 */
export interface NoManagementPreference {
  /**
   * The choice of application destination that you specify.
   *
   * @public
   */
  targetDestination: NoPreferenceTargetDestination[] | undefined;
}

/**
 * Self-managed resources.
 *
 * @public
 */
export interface SelfManageResources {
  /**
   * Self-managed resources target destination.
   *
   * @public
   */
  targetDestination: SelfManageTargetDestination[] | undefined;
}

/**
 * Preferences for migrating an application to AWS.
 *
 * @public
 */
export type ManagementPreference =
  | ManagementPreference.AwsManagedResourcesMember
  | ManagementPreference.NoPreferenceMember
  | ManagementPreference.SelfManageResourcesMember
  | ManagementPreference.$UnknownMember;

/**
 * @public
 */
export namespace ManagementPreference {
  /**
   * Indicates interest in solutions that are managed by AWS.
   *
   * @public
   */
  export interface AwsManagedResourcesMember {
    awsManagedResources: AwsManagedResources;
    selfManageResources?: never;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * Indicates interest in managing your own resources on AWS.
   *
   * @public
   */
  export interface SelfManageResourcesMember {
    awsManagedResources?: never;
    selfManageResources: SelfManageResources;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * No specific preference.
   *
   * @public
   */
  export interface NoPreferenceMember {
    awsManagedResources?: never;
    selfManageResources?: never;
    noPreference: NoManagementPreference;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    awsManagedResources?: never;
    selfManageResources?: never;
    noPreference?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    awsManagedResources: (value: AwsManagedResources) => T;
    selfManageResources: (value: SelfManageResources) => T;
    noPreference: (value: NoManagementPreference) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Application preferences that you specify.
 *
 * @public
 */
export interface ApplicationPreferences {
  /**
   * Application preferences that you specify to prefer managed environment.
   *
   * @public
   */
  managementPreference?: ManagementPreference | undefined;
}

/**
 * Object containing the summary of the strategy recommendations.
 *
 * @public
 */
export interface StrategySummary {
  /**
   * The name of recommended strategy.
   *
   * @public
   */
  strategy?: Strategy | undefined;

  /**
   * The count of recommendations per strategy.
   *
   * @public
   */
  count?: number | undefined;
}

/**
 * The status summary of the server analysis.
 *
 * @public
 */
export interface ServerStatusSummary {
  /**
   * The status of the run time.
   *
   * @public
   */
  runTimeAssessmentStatus?: RunTimeAssessmentStatus | undefined;

  /**
   * The number of servers successfully analyzed, partially successful or failed analysis.
   *
   * @public
   */
  count?: number | undefined;
}

/**
 * Object containing details about the servers imported by Application Discovery Service
 *
 * @public
 */
export interface ServerSummary {
  /**
   * Type of operating system for the servers.
   *
   * @public
   */
  ServerOsType?: ServerOsType | undefined;

  /**
   * Number of servers.
   *
   * @public
   */
  count?: number | undefined;
}

/**
 * Contains the summary of the assessment results.
 *
 * @public
 */
export interface AssessmentSummary {
  /**
   * List of ServerStrategySummary.
   *
   * @public
   */
  listServerStrategySummary?: StrategySummary[] | undefined;

  /**
   * List of ApplicationComponentStrategySummary.
   *
   * @public
   */
  listApplicationComponentStrategySummary?: StrategySummary[] | undefined;

  /**
   * List of AntipatternSeveritySummary.
   *
   * @public
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[] | undefined;

  /**
   * List of ApplicationComponentSummary.
   *
   * @public
   */
  listApplicationComponentSummary?: ApplicationComponentSummary[] | undefined;

  /**
   * List of ServerSummary.
   *
   * @public
   */
  listServerSummary?: ServerSummary[] | undefined;

  /**
   * The Amazon S3 object containing the anti-pattern report.
   *
   * @public
   */
  antipatternReportS3Object?: S3Object | undefined;

  /**
   * The status of the anti-pattern report.
   *
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus | undefined;

  /**
   * The status message of the anti-pattern report.
   *
   * @public
   */
  antipatternReportStatusMessage?: string | undefined;

  /**
   * The time the assessment was performed.
   *
   * @public
   */
  lastAnalyzedTimestamp?: Date | undefined;

  /**
   * List of status summaries of the analyzed application components.
   *
   * @public
   */
  listApplicationComponentStatusSummary?: ApplicationComponentStatusSummary[] | undefined;

  /**
   * List of status summaries of the analyzed servers.
   *
   * @public
   */
  listServerStatusSummary?: ServerStatusSummary[] | undefined;
}

/**
 * Defines the criteria of assessment.
 *
 * @public
 */
export interface AssessmentTarget {
  /**
   * Condition of an assessment.
   *
   * @public
   */
  condition: Condition | undefined;

  /**
   * Name of an assessment.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Values of an assessment.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Object containing details about applications as defined in Application Discovery Service.
 *
 * @public
 */
export interface AssociatedApplication {
  /**
   * Name of the application as defined in Application Discovery Service.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * ID of the application as defined in Application Discovery Service.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationComponentDetailsRequest {
  /**
   * The ID of the application component. The ID is unique within an AWS account.
   *
   * @public
   */
  applicationComponentId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationComponentDetailsResponse {
  /**
   * Detailed information about an application component.
   *
   * @public
   */
  applicationComponentDetail?: ApplicationComponentDetail | undefined;

  /**
   * The associated application group as defined in AWS Application Discovery Service.
   *
   * @public
   */
  associatedApplications?: AssociatedApplication[] | undefined;

  /**
   * Set to true if the application component belongs to more than one application group.
   *
   * @public
   */
  moreApplicationResource?: boolean | undefined;

  /**
   * A list of the IDs of the servers on which the application component is running.
   *
   * @public
   */
  associatedServerIds?: string[] | undefined;
}

/**
 * @public
 */
export interface GetApplicationComponentStrategiesRequest {
  /**
   * The ID of the application component. The ID is unique within an AWS account.
   *
   * @public
   */
  applicationComponentId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationComponentStrategiesResponse {
  /**
   * A list of application component strategy recommendations.
   *
   * @public
   */
  applicationComponentStrategies?: ApplicationComponentStrategy[] | undefined;
}

/**
 * @public
 */
export interface GetAssessmentRequest {
  /**
   * The `assessmentid` returned by StartAssessment.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Detailed information about an assessment.
 *
 * @public
 */
export interface DataCollectionDetails {
  /**
   * The status of the assessment.
   *
   * @public
   */
  status?: AssessmentStatus | undefined;

  /**
   * The total number of servers in the assessment.
   *
   * @public
   */
  servers?: number | undefined;

  /**
   * The number of failed servers in the assessment.
   *
   * @public
   */
  failed?: number | undefined;

  /**
   * The number of successful servers in the assessment.
   *
   * @public
   */
  success?: number | undefined;

  /**
   * The number of servers with the assessment status `IN_PROGESS`.
   *
   * @public
   */
  inProgress?: number | undefined;

  /**
   * The start time of assessment.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time the assessment completes.
   *
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * The status message of the assessment.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetAssessmentResponse {
  /**
   * The ID for the specific assessment task.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Detailed information about the assessment.
   *
   * @public
   */
  dataCollectionDetails?: DataCollectionDetails | undefined;

  /**
   * List of criteria for assessment.
   *
   * @public
   */
  assessmentTargets?: AssessmentTarget[] | undefined;
}

/**
 * @public
 */
export interface GetImportFileTaskRequest {
  /**
   * The ID of the import file task. This ID is returned in the response of StartImportFileTask.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetImportFileTaskResponse {
  /**
   * The import file task `id` returned in the response of StartImportFileTask.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Status of import file task.
   *
   * @public
   */
  status?: ImportFileTaskStatus | undefined;

  /**
   * Start time of the import task.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The S3 bucket where import file is located.
   *
   * @public
   */
  inputS3Bucket?: string | undefined;

  /**
   * The Amazon S3 key name of the import file.
   *
   * @public
   */
  inputS3Key?: string | undefined;

  /**
   * The S3 bucket name for status report of import task.
   *
   * @public
   */
  statusReportS3Bucket?: string | undefined;

  /**
   * The Amazon S3 key name for status report of import task. The report contains details about whether each record imported successfully or why it did not.
   *
   * @public
   */
  statusReportS3Key?: string | undefined;

  /**
   * The time that the import task completed.
   *
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * The number of records successfully imported.
   *
   * @public
   */
  numberOfRecordsSuccess?: number | undefined;

  /**
   * The number of records that failed to be imported.
   *
   * @public
   */
  numberOfRecordsFailed?: number | undefined;

  /**
   * The name of the import task given in StartImportFileTask.
   *
   * @public
   */
  importName?: string | undefined;
}

/**
 * @public
 */
export interface GetLatestAssessmentIdRequest {}

/**
 * @public
 */
export interface GetLatestAssessmentIdResponse {
  /**
   * The latest ID for the specific assessment task.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface GetPortfolioPreferencesRequest {}

/**
 * The object containing details about heterogeneous database preferences.
 *
 * @public
 */
export interface Heterogeneous {
  /**
   * The target database engine for heterogeneous database migration preference.
   *
   * @public
   */
  targetDatabaseEngine: HeterogeneousTargetDatabaseEngine[] | undefined;
}

/**
 * The object containing details about homogeneous database preferences.
 *
 * @public
 */
export interface Homogeneous {
  /**
   * The target database engine for homogeneous database migration preferences.
   *
   * @public
   */
  targetDatabaseEngine?: HomogeneousTargetDatabaseEngine[] | undefined;
}

/**
 * The object containing details about database migration preferences, when you have no particular preference.
 *
 * @public
 */
export interface NoDatabaseMigrationPreference {
  /**
   * The target database engine for database migration preference that you specify.
   *
   * @public
   */
  targetDatabaseEngine: TargetDatabaseEngine[] | undefined;
}

/**
 * Preferences for migrating a database to AWS.
 *
 * @public
 */
export type DatabaseMigrationPreference =
  | DatabaseMigrationPreference.HeterogeneousMember
  | DatabaseMigrationPreference.HomogeneousMember
  | DatabaseMigrationPreference.NoPreferenceMember
  | DatabaseMigrationPreference.$UnknownMember;

/**
 * @public
 */
export namespace DatabaseMigrationPreference {
  /**
   * Indicates whether you are interested in moving from one type of database to another. For example, from SQL Server to Amazon Aurora MySQL-Compatible Edition.
   *
   * @public
   */
  export interface HeterogeneousMember {
    heterogeneous: Heterogeneous;
    homogeneous?: never;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * Indicates whether you are interested in moving to the same type of database into AWS. For example, from SQL Server in your environment to SQL Server on AWS.
   *
   * @public
   */
  export interface HomogeneousMember {
    heterogeneous?: never;
    homogeneous: Homogeneous;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * Indicated that you do not prefer heterogeneous or homogeneous.
   *
   * @public
   */
  export interface NoPreferenceMember {
    heterogeneous?: never;
    homogeneous?: never;
    noPreference: NoDatabaseMigrationPreference;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    heterogeneous?: never;
    homogeneous?: never;
    noPreference?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    heterogeneous: (value: Heterogeneous) => T;
    homogeneous: (value: Homogeneous) => T;
    noPreference: (value: NoDatabaseMigrationPreference) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Preferences on managing your databases on AWS.
 *
 * @public
 */
export interface DatabasePreferences {
  /**
   * Specifies whether you're interested in self-managed databases or databases managed by AWS.
   *
   * @public
   */
  databaseManagementPreference?: DatabaseManagementPreference | undefined;

  /**
   * Specifies your preferred migration path.
   *
   * @public
   */
  databaseMigrationPreference?: DatabaseMigrationPreference | undefined;
}

/**
 * Business goals that you specify.
 *
 * @public
 */
export interface BusinessGoals {
  /**
   * Business goal to achieve migration at a fast pace.
   *
   * @public
   */
  speedOfMigration?: number | undefined;

  /**
   * Business goal to reduce the operational overhead on the team by moving into managed services.
   *
   * @public
   */
  reduceOperationalOverheadWithManagedServices?: number | undefined;

  /**
   * Business goal to modernize infrastructure by moving to cloud native technologies.
   *
   * @public
   */
  modernizeInfrastructureWithCloudNativeTechnologies?: number | undefined;

  /**
   * Business goal to reduce license costs.
   *
   * @public
   */
  licenseCostReduction?: number | undefined;
}

/**
 * Rank of business goals based on priority.
 *
 * @public
 */
export interface PrioritizeBusinessGoals {
  /**
   * Rank of business goals based on priority.
   *
   * @public
   */
  businessGoals?: BusinessGoals | undefined;
}

/**
 * @public
 */
export interface GetPortfolioPreferencesResponse {
  /**
   * The rank of business goals based on priority.
   *
   * @public
   */
  prioritizeBusinessGoals?: PrioritizeBusinessGoals | undefined;

  /**
   * The transformation preferences for non-database applications.
   *
   * @public
   */
  applicationPreferences?: ApplicationPreferences | undefined;

  /**
   * The transformation preferences for database applications.
   *
   * @public
   */
  databasePreferences?: DatabasePreferences | undefined;

  /**
   * The classification for application component types.
   *
   * @public
   */
  applicationMode?: ApplicationMode | undefined;
}

/**
 * @public
 */
export interface GetPortfolioSummaryRequest {}

/**
 * @public
 */
export interface GetPortfolioSummaryResponse {
  /**
   * An assessment summary for the portfolio including the number of servers to rehost and the overall number of anti-patterns.
   *
   * @public
   */
  assessmentSummary?: AssessmentSummary | undefined;
}

/**
 * @public
 */
export interface GetRecommendationReportDetailsRequest {
  /**
   * The recommendation report generation task `id` returned by StartRecommendationReportGeneration.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Contains detailed information about a recommendation report.
 *
 * @public
 */
export interface RecommendationReportDetails {
  /**
   * The status of the recommendation report generation task.
   *
   * @public
   */
  status?: RecommendationReportStatus | undefined;

  /**
   * The status message for recommendation report generation.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The time that the recommendation report generation task starts.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time that the recommendation report generation task completes.
   *
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * The S3 bucket where the report file is located.
   *
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * The Amazon S3 key name of the report file.
   *
   * @public
   */
  s3Keys?: string[] | undefined;
}

/**
 * @public
 */
export interface GetRecommendationReportDetailsResponse {
  /**
   * The ID of the recommendation report generation task. See the response of StartRecommendationReportGeneration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Detailed information about the recommendation report.
   *
   * @public
   */
  recommendationReportDetails?: RecommendationReportDetails | undefined;
}

/**
 * @public
 */
export interface GetServerDetailsRequest {
  /**
   * The ID of the server.
   *
   * @public
   */
  serverId: string | undefined;

  /**
   * The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set `maxResults` to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to include in the response. The maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The error in server analysis.
 *
 * @public
 */
export interface ServerError {
  /**
   * The error category of server analysis.
   *
   * @public
   */
  serverErrorCategory?: ServerErrorCategory | undefined;
}

/**
 * Information about the server's network for which the assessment was run.
 *
 * @public
 */
export interface NetworkInfo {
  /**
   * Information about the name of the interface of the server for which the assessment was run.
   *
   * @public
   */
  interfaceName: string | undefined;

  /**
   * Information about the IP address of the server for which the assessment was run.
   *
   * @public
   */
  ipAddress: string | undefined;

  /**
   * Information about the MAC address of the server for which the assessment was run.
   *
   * @public
   */
  macAddress: string | undefined;

  /**
   * Information about the subnet mask of the server for which the assessment was run.
   *
   * @public
   */
  netMask: string | undefined;
}

/**
 * Information about the operating system.
 *
 * @public
 */
export interface OSInfo {
  /**
   * Information about the type of operating system.
   *
   * @public
   */
  type?: OSType | undefined;

  /**
   * Information about the version of operating system.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Information about the server that hosts application components.
 *
 * @public
 */
export interface SystemInfo {
  /**
   * Operating system corresponding to a server.
   *
   * @public
   */
  osInfo?: OSInfo | undefined;

  /**
   * File system type for the server.
   *
   * @public
   */
  fileSystemType?: string | undefined;

  /**
   * Networking information related to a server.
   *
   * @public
   */
  networkInfoList?: NetworkInfo[] | undefined;

  /**
   * CPU architecture type for the server.
   *
   * @public
   */
  cpuArchitecture?: string | undefined;
}

/**
 * Detailed information about a server.
 *
 * @public
 */
export interface ServerDetail {
  /**
   * The server ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the server.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A set of recommendations.
   *
   * @public
   */
  recommendationSet?: RecommendationSet | undefined;

  /**
   * The status of assessment for the server.
   *
   * @public
   */
  dataCollectionStatus?: RunTimeAssessmentStatus | undefined;

  /**
   * A message about the status of data collection, which contains detailed descriptions of any error messages.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * A list of anti-pattern severity summaries.
   *
   * @public
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[] | undefined;

  /**
   * System information about the server.
   *
   * @public
   */
  systemInfo?: SystemInfo | undefined;

  /**
   * A list of strategy summaries.
   *
   * @public
   */
  applicationComponentStrategySummary?: StrategySummary[] | undefined;

  /**
   * The S3 bucket name and Amazon S3 key name for anti-pattern report.
   *
   * @public
   */
  antipatternReportS3Object?: S3Object | undefined;

  /**
   * The status of the anti-pattern report generation.
   *
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus | undefined;

  /**
   * A message about the status of the anti-pattern report generation.
   *
   * @public
   */
  antipatternReportStatusMessage?: string | undefined;

  /**
   * The type of server.
   *
   * @public
   */
  serverType?: string | undefined;

  /**
   * The timestamp of when the server was assessed.
   *
   * @public
   */
  lastAnalyzedTimestamp?: Date | undefined;

  /**
   * The error in server analysis.
   *
   * @public
   */
  serverError?: ServerError | undefined;
}

/**
 * @public
 */
export interface GetServerDetailsResponse {
  /**
   * The token you use to retrieve the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Detailed information about the server.
   *
   * @public
   */
  serverDetail?: ServerDetail | undefined;

  /**
   * The associated application group the server belongs to, as defined in AWS Application Discovery Service.
   *
   * @public
   */
  associatedApplications?: AssociatedApplication[] | undefined;
}

/**
 * @public
 */
export interface GetServerStrategiesRequest {
  /**
   * The ID of the server.
   *
   * @public
   */
  serverId: string | undefined;
}

/**
 * Contains information about a strategy recommendation for a server.
 *
 * @public
 */
export interface ServerStrategy {
  /**
   * Strategy recommendation for the server.
   *
   * @public
   */
  recommendation?: RecommendationSet | undefined;

  /**
   * The recommendation status of the strategy for the server.
   *
   * @public
   */
  status?: StrategyRecommendation | undefined;

  /**
   * The number of application components with this strategy recommendation running on the server.
   *
   * @public
   */
  numberOfApplicationComponents?: number | undefined;

  /**
   * Set to true if the recommendation is set as preferred.
   *
   * @public
   */
  isPreferred?: boolean | undefined;
}

/**
 * @public
 */
export interface GetServerStrategiesResponse {
  /**
   * A list of strategy recommendations for the server.
   *
   * @public
   */
  serverStrategies?: ServerStrategy[] | undefined;
}

/**
 * Represents input for ListAnalyzableServers operation.
 * @public
 */
export interface ListAnalyzableServersRequest {
  /**
   * Specifies whether to sort by ascending (ASC) or descending (DESC) order.
   * @public
   */
  sort?: SortOrder | undefined;

  /**
   * The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set maxResults to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to include in the response. The maximum value is 100.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Represents output for ListAnalyzableServers operation.
 * @public
 */
export interface ListAnalyzableServersResponse {
  /**
   * The list of analyzable servers with summary information about each server.
   * @public
   */
  analyzableServers?: AnalyzableServerSummary[] | undefined;

  /**
   * The token you use to retrieve the next set of results, or null if there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The object containing information about distinct imports or groups for Strategy Recommendations.
 *
 * @public
 */
export interface Group {
  /**
   * The key of the specific import group.
   *
   * @public
   */
  name?: GroupName | undefined;

  /**
   * The value of the specific import group.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationComponentsRequest {
  /**
   * Criteria for filtering the list of application components.
   *
   * @public
   */
  applicationComponentCriteria?: ApplicationComponentCriteria | undefined;

  /**
   * Specify the value based on the application component criteria type. For example, if `applicationComponentCriteria` is set to `SERVER_ID` and `filterValue` is set to `server1`, then ListApplicationComponents returns all the application components running on server1.
   *
   * @public
   */
  filterValue?: string | undefined;

  /**
   * Specifies whether to sort by ascending (`ASC`) or descending (`DESC`) order.
   *
   * @public
   */
  sort?: SortOrder | undefined;

  /**
   * The group ID specified in to filter on.
   *
   * @public
   */
  groupIdFilter?: Group[] | undefined;

  /**
   * The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set `maxResults` to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to include in the response. The maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApplicationComponentsResponse {
  /**
   * The list of application components with detailed information about each component.
   *
   * @public
   */
  applicationComponentInfos?: ApplicationComponentDetail[] | undefined;

  /**
   * The token you use to retrieve the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCollectorsRequest {
  /**
   * The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set `maxResults` to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to include in the response. The maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * IP address based configurations.
 *
 * @public
 */
export interface IPAddressBasedRemoteInfo {
  /**
   * The time stamp of the configuration.
   *
   * @public
   */
  ipAddressConfigurationTimeStamp?: string | undefined;

  /**
   * The type of authorization.
   *
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * The type of the operating system.
   *
   * @public
   */
  osType?: OSType | undefined;
}

/**
 * Detailed information of the pipeline.
 *
 * @public
 */
export interface PipelineInfo {
  /**
   * The type of pipeline.
   *
   * @public
   */
  pipelineType?: PipelineType | undefined;

  /**
   * The time when the pipeline info was configured.
   *
   * @public
   */
  pipelineConfigurationTimeStamp?: string | undefined;
}

/**
 * Information about the server configured for source code analysis.
 *
 * @public
 */
export interface RemoteSourceCodeAnalysisServerInfo {
  /**
   * The time when the remote source code server was configured.
   *
   * @public
   */
  remoteSourceCodeAnalysisServerConfigurationTimestamp?: string | undefined;
}

/**
 * Details about the server in vCenter.
 *
 * @public
 */
export interface VcenterBasedRemoteInfo {
  /**
   * The time when the remote server based on vCenter was last configured.
   *
   * @public
   */
  vcenterConfigurationTimeStamp?: string | undefined;

  /**
   * The type of the operating system.
   *
   * @public
   */
  osType?: OSType | undefined;
}

/**
 * Details about the version control configuration.
 *
 * @public
 */
export interface VersionControlInfo {
  /**
   * The type of version control.
   *
   * @public
   */
  versionControlType?: VersionControlType | undefined;

  /**
   * The time when the version control system was last configured.
   *
   * @public
   */
  versionControlConfigurationTimeStamp?: string | undefined;
}

/**
 * Summary of the collector configuration.
 *
 * @public
 */
export interface ConfigurationSummary {
  /**
   * The list of vCenter configurations.
   *
   * @public
   */
  vcenterBasedRemoteInfoList?: VcenterBasedRemoteInfo[] | undefined;

  /**
   * IP address based configurations.
   *
   * @public
   */
  ipAddressBasedRemoteInfoList?: IPAddressBasedRemoteInfo[] | undefined;

  /**
   * The list of the version control configurations.
   *
   * @public
   */
  versionControlInfoList?: VersionControlInfo[] | undefined;

  /**
   * The list of pipeline info configurations.
   *
   * @public
   */
  pipelineInfoList?: PipelineInfo[] | undefined;

  /**
   * Info about the remote server source code configuration.
   *
   * @public
   */
  remoteSourceCodeAnalysisServerInfo?: RemoteSourceCodeAnalysisServerInfo | undefined;
}

/**
 * Process data collector that runs in the environment that you specify.
 *
 * @public
 */
export interface Collector {
  /**
   * The ID of the collector.
   *
   * @public
   */
  collectorId?: string | undefined;

  /**
   * IP address of the server that is hosting the collector.
   *
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * Hostname of the server that is hosting the collector.
   *
   * @public
   */
  hostName?: string | undefined;

  /**
   * Indicates the health of a collector.
   *
   * @public
   */
  collectorHealth?: CollectorHealth | undefined;

  /**
   * Current version of the collector that is running in the environment that you specify.
   *
   * @public
   */
  collectorVersion?: string | undefined;

  /**
   * Time when the collector registered with the service.
   *
   * @public
   */
  registeredTimeStamp?: string | undefined;

  /**
   * Time when the collector last pinged the service.
   *
   * @public
   */
  lastActivityTimeStamp?: string | undefined;

  /**
   * Summary of the collector configuration.
   *
   * @public
   */
  configurationSummary?: ConfigurationSummary | undefined;
}

/**
 * @public
 */
export interface ListCollectorsResponse {
  /**
   * The list of all the installed collectors.
   *
   * @public
   */
  Collectors?: Collector[] | undefined;

  /**
   * The token you use to retrieve the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportFileTaskRequest {
  /**
   * The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set `maxResults` to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The total number of items to return. The maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about the import file tasks you request.
 *
 * @public
 */
export interface ImportFileTaskInformation {
  /**
   * The ID of the import file task.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Status of import file task.
   *
   * @public
   */
  status?: ImportFileTaskStatus | undefined;

  /**
   * Start time of the import task.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The S3 bucket where the import file is located.
   *
   * @public
   */
  inputS3Bucket?: string | undefined;

  /**
   * The Amazon S3 key name of the import file.
   *
   * @public
   */
  inputS3Key?: string | undefined;

  /**
   * The S3 bucket name for status report of import task.
   *
   * @public
   */
  statusReportS3Bucket?: string | undefined;

  /**
   * The Amazon S3 key name for status report of import task. The report contains details about whether each record imported successfully or why it did not.
   *
   * @public
   */
  statusReportS3Key?: string | undefined;

  /**
   * The time that the import task completes.
   *
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * The number of records successfully imported.
   *
   * @public
   */
  numberOfRecordsSuccess?: number | undefined;

  /**
   * The number of records that failed to be imported.
   *
   * @public
   */
  numberOfRecordsFailed?: number | undefined;

  /**
   * The name of the import task given in `StartImportFileTask`.
   *
   * @public
   */
  importName?: string | undefined;
}

/**
 * @public
 */
export interface ListImportFileTaskResponse {
  /**
   * Lists information about the files you import.
   *
   * @public
   */
  taskInfos?: ImportFileTaskInformation[] | undefined;

  /**
   * The token you use to retrieve the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServersRequest {
  /**
   * Criteria for filtering servers.
   *
   * @public
   */
  serverCriteria?: ServerCriteria | undefined;

  /**
   * Specifies the filter value, which is based on the type of server criteria. For example, if `serverCriteria` is `OS_NAME`, and the `filterValue` is equal to `WindowsServer`, then `ListServers` returns all of the servers matching the OS name `WindowsServer`.
   *
   * @public
   */
  filterValue?: string | undefined;

  /**
   * Specifies whether to sort by ascending (`ASC`) or descending (`DESC`) order.
   *
   * @public
   */
  sort?: SortOrder | undefined;

  /**
   * Specifies the group ID to filter on.
   *
   * @public
   */
  groupIdFilter?: Group[] | undefined;

  /**
   * The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set `maxResults` to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to include in the response. The maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListServersResponse {
  /**
   * The list of servers with detailed information about each server.
   *
   * @public
   */
  serverInfos?: ServerDetail[] | undefined;

  /**
   * The token you use to retrieve the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutPortfolioPreferencesRequest {
  /**
   * The rank of the business goals based on priority.
   *
   * @public
   */
  prioritizeBusinessGoals?: PrioritizeBusinessGoals | undefined;

  /**
   * The transformation preferences for non-database applications.
   *
   * @public
   */
  applicationPreferences?: ApplicationPreferences | undefined;

  /**
   * The transformation preferences for database applications.
   *
   * @public
   */
  databasePreferences?: DatabasePreferences | undefined;

  /**
   * The classification for application component types.
   *
   * @public
   */
  applicationMode?: ApplicationMode | undefined;
}

/**
 * @public
 */
export interface PutPortfolioPreferencesResponse {}

/**
 * @public
 */
export interface StartAssessmentRequest {
  /**
   * The S3 bucket used by the collectors to send analysis data to the service. The bucket name must begin with `migrationhub-strategy-`.
   *
   * @public
   */
  s3bucketForAnalysisData?: string | undefined;

  /**
   * The S3 bucket where all the reports generated by the service are stored. The bucket name must begin with `migrationhub-strategy-`.
   *
   * @public
   */
  s3bucketForReportData?: string | undefined;

  /**
   * List of criteria for assessment.
   *
   * @public
   */
  assessmentTargets?: AssessmentTarget[] | undefined;

  /**
   * The data source type of an assessment to be started.
   * @public
   */
  assessmentDataSourceType?: AssessmentDataSourceType | undefined;
}

/**
 * @public
 */
export interface StartAssessmentResponse {
  /**
   * The ID of the assessment.
   *
   * @public
   */
  assessmentId?: string | undefined;
}

/**
 * @public
 */
export interface StartImportFileTaskRequest {
  /**
   * A descriptive name for the request.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The S3 bucket where the import file is located. The bucket name is required to begin with `migrationhub-strategy-`.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The Amazon S3 key name of the import file.
   *
   * @public
   */
  s3key: string | undefined;

  /**
   * Specifies the source that the servers are coming from. By default, Strategy Recommendations assumes that the servers specified in the import file are available in AWS Application Discovery Service.
   *
   * @public
   */
  dataSourceType?: DataSourceType | undefined;

  /**
   * Groups the resources in the import file together with a unique name. This ID can be as filter in `ListApplicationComponents` and `ListServers`.
   *
   * @public
   */
  groupId?: Group[] | undefined;

  /**
   * The S3 bucket where Strategy Recommendations uploads import results. The bucket name is required to begin with migrationhub-strategy-.
   *
   * @public
   */
  s3bucketForReportData?: string | undefined;
}

/**
 * @public
 */
export interface StartImportFileTaskResponse {
  /**
   * The ID for a specific import task. The ID is unique within an AWS account.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface StartRecommendationReportGenerationRequest {
  /**
   * The output format for the recommendation report file. The default format is Microsoft Excel.
   *
   * @public
   */
  outputFormat?: OutputFormat | undefined;

  /**
   * Groups the resources in the recommendation report with a unique name.
   *
   * @public
   */
  groupIdFilter?: Group[] | undefined;
}

/**
 * @public
 */
export interface StartRecommendationReportGenerationResponse {
  /**
   * The ID of the recommendation report generation task.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface StopAssessmentRequest {
  /**
   * The `assessmentId` returned by StartAssessment.
   *
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * @public
 */
export interface StopAssessmentResponse {}

/**
 * Object containing source code information that is linked to an application component.
 *
 * @public
 */
export interface SourceCode {
  /**
   * The type of repository to use for the source code.
   *
   * @public
   */
  versionControl?: VersionControl | undefined;

  /**
   * The branch of the source code.
   *
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * The repository name for the source code.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The name of the project.
   *
   * @public
   */
  projectName?: string | undefined;
}

/**
 * Information about all the available strategy options for migrating and modernizing an application component.
 *
 * @public
 */
export interface StrategyOption {
  /**
   * Type of transformation. For example, Rehost, Replatform, and so on.
   *
   * @public
   */
  strategy?: Strategy | undefined;

  /**
   * The name of the tool that can be used to transform an application component using this strategy.
   *
   * @public
   */
  toolName?: TransformationToolName | undefined;

  /**
   * Destination information about where the application component can migrate to. For example, `EC2`, `ECS`, and so on.
   *
   * @public
   */
  targetDestination?: TargetDestination | undefined;

  /**
   * Indicates if a specific strategy is preferred for the application component.
   *
   * @public
   */
  isPreferred?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationComponentConfigRequest {
  /**
   * The ID of the application component. The ID is unique within an AWS account.
   *
   * @public
   */
  applicationComponentId: string | undefined;

  /**
   * Indicates whether the application component has been included for server recommendation or not.
   *
   * @public
   */
  inclusionStatus?: InclusionStatus | undefined;

  /**
   * The preferred strategy options for the application component. Use values from the GetApplicationComponentStrategies response.
   *
   * @public
   */
  strategyOption?: StrategyOption | undefined;

  /**
   * The list of source code configurations to update for the application component.
   *
   * @public
   */
  sourceCodeList?: SourceCode[] | undefined;

  /**
   * Database credentials.
   *
   * @public
   */
  secretsManagerKey?: string | undefined;

  /**
   * Update the configuration request of an application component. If it is set to true, the source code and/or database credentials are updated. If it is set to false, the source code and/or database credentials are updated and an analysis is initiated.
   *
   * @public
   */
  configureOnly?: boolean | undefined;

  /**
   * The type of known component.
   *
   * @public
   */
  appType?: AppType | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationComponentConfigResponse {}

/**
 * @public
 */
export interface UpdateServerConfigRequest {
  /**
   * The ID of the server.
   *
   * @public
   */
  serverId: string | undefined;

  /**
   * The preferred strategy options for the application component. See the response from GetServerStrategies.
   *
   * @public
   */
  strategyOption?: StrategyOption | undefined;
}

/**
 * @public
 */
export interface UpdateServerConfigResponse {}
