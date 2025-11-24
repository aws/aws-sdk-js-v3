// smithy-typescript generated code
import {
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
 * <p>A combination of existing analysis statuses.</p>
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
   * <p>The status of the analysis.</p>
   * @public
   */
  export interface RuntimeAnalysisStatusMember {
    runtimeAnalysisStatus: RuntimeAnalysisStatus;
    srcCodeOrDbAnalysisStatus?: never;
    $unknown?: never;
  }

  /**
   * <p>The status of the source code or database analysis.</p>
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
 * <p>The combination of the existing analyzers.</p>
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
   * <p>The binary analyzer names.</p>
   * @public
   */
  export interface BinaryAnalyzerNameMember {
    binaryAnalyzerName: BinaryAnalyzerName;
    runTimeAnalyzerName?: never;
    sourceCodeAnalyzerName?: never;
    $unknown?: never;
  }

  /**
   * <p>The assessment analyzer names.</p>
   * @public
   */
  export interface RunTimeAnalyzerNameMember {
    binaryAnalyzerName?: never;
    runTimeAnalyzerName: RunTimeAnalyzerName;
    sourceCodeAnalyzerName?: never;
    $unknown?: never;
  }

  /**
   * <p>The source code analyzer names.</p>
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
 * <p> Contains the S3 bucket name and the Amazon S3 key name. </p>
 * @public
 */
export interface S3Object {
  /**
   * <p> The S3 bucket name. </p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p> The Amazon S3 key name. </p>
   * @public
   */
  s3key?: string | undefined;
}

/**
 * <p>The anti-pattern report result.</p>
 * @public
 */
export interface AntipatternReportResult {
  /**
   * <p>The analyzer name.</p>
   * @public
   */
  analyzerName?: AnalyzerNameUnion | undefined;

  /**
   * <p> Contains the S3 bucket name and the Amazon S3 key name. </p>
   * @public
   */
  antiPatternReportS3Object?: S3Object | undefined;

  /**
   * <p>The status of the anti-pattern report generation.</p>
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus | undefined;

  /**
   * <p>The status message for the anti-pattern.</p>
   * @public
   */
  antipatternReportStatusMessage?: string | undefined;
}

/**
 * <p> Contains the summary of anti-patterns and their severity. </p>
 * @public
 */
export interface AntipatternSeveritySummary {
  /**
   * <p> Contains the severity of anti-patterns. </p>
   * @public
   */
  severity?: Severity | undefined;

  /**
   * <p> Contains the count of anti-patterns. </p>
   * @public
   */
  count?: number | undefined;
}

/**
 * <p>Error in the analysis of the application unit.</p>
 * @public
 */
export interface AppUnitError {
  /**
   * <p>The category of the error.</p>
   * @public
   */
  appUnitErrorCategory?: AppUnitErrorCategory | undefined;
}

/**
 * <p> Configuration information used for assessing databases. </p>
 * @public
 */
export interface DatabaseConfigDetail {
  /**
   * <p> AWS Secrets Manager key that holds the credentials that you use to connect to a database.
   *     </p>
   * @public
   */
  secretName?: string | undefined;
}

/**
 * <p> Information of the transformation tool that can be used to migrate and modernize the
 *       application. </p>
 * @public
 */
export interface TransformationTool {
  /**
   * <p> Name of the tool. </p>
   * @public
   */
  name?: TransformationToolName | undefined;

  /**
   * <p> Description of the tool. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> URL for installing the tool. </p>
   * @public
   */
  tranformationToolInstallationLink?: string | undefined;
}

/**
 * <p> Contains a recommendation set. </p>
 * @public
 */
export interface RecommendationSet {
  /**
   * <p> The target destination for the recommendation set. </p>
   * @public
   */
  transformationTool?: TransformationTool | undefined;

  /**
   * <p> The recommended target destination. </p>
   * @public
   */
  targetDestination?: TargetDestination | undefined;

  /**
   * <p> The recommended strategy. </p>
   * @public
   */
  strategy?: Strategy | undefined;
}

/**
 * <p>The error in server analysis.</p>
 * @public
 */
export interface Result {
  /**
   * <p>The error in server analysis.</p>
   * @public
   */
  analysisType?: AnalysisType | undefined;

  /**
   * <p>The error in server analysis.</p>
   * @public
   */
  analysisStatus?: AnalysisStatusUnion | undefined;

  /**
   * <p>The error in server analysis.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The error in server analysis.</p>
   * @public
   */
  antipatternReportResultList?: AntipatternReportResult[] | undefined;
}

/**
 * <p> Object containing source code information that is linked to an application component.
 *     </p>
 * @public
 */
export interface SourceCodeRepository {
  /**
   * <p> The repository name for the source code. </p>
   * @public
   */
  repository?: string | undefined;

  /**
   * <p> The branch of the source code. </p>
   * @public
   */
  branch?: string | undefined;

  /**
   * <p> The type of repository to use for the source code. </p>
   * @public
   */
  versionControlType?: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  projectName?: string | undefined;
}

/**
 * <p> Contains detailed information about an application component. </p>
 * @public
 */
export interface ApplicationComponentDetail {
  /**
   * <p> The ID of the application component. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name of application component. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The top recommendation set for the application component. </p>
   * @public
   */
  recommendationSet?: RecommendationSet | undefined;

  /**
   * <p> The status of analysis, if the application component has source code or an associated
   *       database. </p>
   * @public
   */
  analysisStatus?: SrcCodeOrDbAnalysisStatus | undefined;

  /**
   * <p> A detailed description of the analysis status and any failure message. </p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p> A list of anti-pattern severity summaries. </p>
   * @public
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[] | undefined;

  /**
   * <p> Configuration details for the database associated with the application component. </p>
   * @public
   */
  databaseConfigDetail?: DatabaseConfigDetail | undefined;

  /**
   * <p> Details about the source code repository associated with the application component.
   *     </p>
   * @public
   */
  sourceCodeRepositories?: SourceCodeRepository[] | undefined;

  /**
   * <p> The type of application component. </p>
   * @public
   */
  appType?: AppType | undefined;

  /**
   * <p> The application component subtype.</p>
   * @public
   */
  resourceSubType?: ResourceSubType | undefined;

  /**
   * <p> Indicates whether the application component has been included for server recommendation
   *       or not. </p>
   * @public
   */
  inclusionStatus?: InclusionStatus | undefined;

  /**
   * <p> The S3 bucket name and the Amazon S3 key name for the anti-pattern report. </p>
   * @public
   */
  antipatternReportS3Object?: S3Object | undefined;

  /**
   * <p> The status of the anti-pattern report generation.</p>
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus | undefined;

  /**
   * <p> The status message for the anti-pattern. </p>
   * @public
   */
  antipatternReportStatusMessage?: string | undefined;

  /**
   * <p> OS version. </p>
   * @public
   */
  osVersion?: string | undefined;

  /**
   * <p> OS driver. </p>
   * @public
   */
  osDriver?: string | undefined;

  /**
   * <p> The timestamp of when the application component was assessed. </p>
   * @public
   */
  lastAnalyzedTimestamp?: Date | undefined;

  /**
   * <p> The ID of the server that the application component is running on. </p>
   * @public
   */
  associatedServerId?: string | undefined;

  /**
   * <p> Set to true if the application component is running on multiple servers.</p>
   * @public
   */
  moreServerAssociationExists?: boolean | undefined;

  /**
   * <p>The status of the application unit.</p>
   * @public
   */
  runtimeStatus?: RuntimeAnalysisStatus | undefined;

  /**
   * <p>The status message for the application unit.</p>
   * @public
   */
  runtimeStatusMessage?: string | undefined;

  /**
   * <p>The error in the analysis of the source code or database.</p>
   * @public
   */
  appUnitError?: AppUnitError | undefined;

  /**
   * <p>A list of the analysis results.</p>
   * @public
   */
  resultList?: Result[] | undefined;
}

/**
 * <p>Summary of the analysis status of the application component.</p>
 * @public
 */
export interface ApplicationComponentStatusSummary {
  /**
   * <p>The status of database analysis.</p>
   * @public
   */
  srcCodeOrDbAnalysisStatus?: SrcCodeOrDbAnalysisStatus | undefined;

  /**
   * <p>The number of application components successfully analyzed, partially successful or failed
   *       analysis.</p>
   * @public
   */
  count?: number | undefined;
}

/**
 * <p> Contains information about a strategy recommendation for an application component.
 *     </p>
 * @public
 */
export interface ApplicationComponentStrategy {
  /**
   * <p> Strategy recommendation for the application component. </p>
   * @public
   */
  recommendation?: RecommendationSet | undefined;

  /**
   * <p> The recommendation status of a strategy for an application component. </p>
   * @public
   */
  status?: StrategyRecommendation | undefined;

  /**
   * <p> Set to true if the recommendation is set as preferred. </p>
   * @public
   */
  isPreferred?: boolean | undefined;
}

/**
 * <p> Contains the summary of application components. </p>
 * @public
 */
export interface ApplicationComponentSummary {
  /**
   * <p> Contains the name of application types. </p>
   * @public
   */
  appType?: AppType | undefined;

  /**
   * <p> Contains the count of application type. </p>
   * @public
   */
  count?: number | undefined;
}

/**
 * <p> Object containing the choice of application destination that you specify. </p>
 * @public
 */
export interface AwsManagedResources {
  /**
   * <p> The choice of application destination that you specify. </p>
   * @public
   */
  targetDestination: AwsManagedTargetDestination[] | undefined;
}

/**
 * <p> Object containing the choice of application destination that you specify. </p>
 * @public
 */
export interface NoManagementPreference {
  /**
   * <p> The choice of application destination that you specify. </p>
   * @public
   */
  targetDestination: NoPreferenceTargetDestination[] | undefined;
}

/**
 * <p> Self-managed resources. </p>
 * @public
 */
export interface SelfManageResources {
  /**
   * <p> Self-managed resources target destination. </p>
   * @public
   */
  targetDestination: SelfManageTargetDestination[] | undefined;
}

/**
 * <p> Preferences for migrating an application to AWS. </p>
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
   * <p> Indicates interest in solutions that are managed by AWS. </p>
   * @public
   */
  export interface AwsManagedResourcesMember {
    awsManagedResources: AwsManagedResources;
    selfManageResources?: never;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * <p> Indicates interest in managing your own resources on AWS. </p>
   * @public
   */
  export interface SelfManageResourcesMember {
    awsManagedResources?: never;
    selfManageResources: SelfManageResources;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * <p> No specific preference. </p>
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
 * <p> Application preferences that you specify. </p>
 * @public
 */
export interface ApplicationPreferences {
  /**
   * <p> Application preferences that you specify to prefer managed environment. </p>
   * @public
   */
  managementPreference?: ManagementPreference | undefined;
}

/**
 * <p> Object containing the summary of the strategy recommendations. </p>
 * @public
 */
export interface StrategySummary {
  /**
   * <p> The name of recommended strategy. </p>
   * @public
   */
  strategy?: Strategy | undefined;

  /**
   * <p> The count of recommendations per strategy. </p>
   * @public
   */
  count?: number | undefined;
}

/**
 * <p>The status summary of the server analysis.</p>
 * @public
 */
export interface ServerStatusSummary {
  /**
   * <p>The status of the run time.</p>
   * @public
   */
  runTimeAssessmentStatus?: RunTimeAssessmentStatus | undefined;

  /**
   * <p>The number of servers successfully analyzed, partially successful or failed
   *       analysis.</p>
   * @public
   */
  count?: number | undefined;
}

/**
 * <p> Object containing details about the servers imported by Application Discovery Service </p>
 * @public
 */
export interface ServerSummary {
  /**
   * <p> Type of operating system for the servers. </p>
   * @public
   */
  ServerOsType?: ServerOsType | undefined;

  /**
   * <p> Number of servers. </p>
   * @public
   */
  count?: number | undefined;
}

/**
 * <p> Contains the summary of the assessment results. </p>
 * @public
 */
export interface AssessmentSummary {
  /**
   * <p> List of ServerStrategySummary. </p>
   * @public
   */
  listServerStrategySummary?: StrategySummary[] | undefined;

  /**
   * <p> List of ApplicationComponentStrategySummary. </p>
   * @public
   */
  listApplicationComponentStrategySummary?: StrategySummary[] | undefined;

  /**
   * <p> List of AntipatternSeveritySummary. </p>
   * @public
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[] | undefined;

  /**
   * <p> List of ApplicationComponentSummary. </p>
   * @public
   */
  listApplicationComponentSummary?: ApplicationComponentSummary[] | undefined;

  /**
   * <p> List of ServerSummary. </p>
   * @public
   */
  listServerSummary?: ServerSummary[] | undefined;

  /**
   * <p> The Amazon S3 object containing the anti-pattern report. </p>
   * @public
   */
  antipatternReportS3Object?: S3Object | undefined;

  /**
   * <p> The status of the anti-pattern report. </p>
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus | undefined;

  /**
   * <p> The status message of the anti-pattern report. </p>
   * @public
   */
  antipatternReportStatusMessage?: string | undefined;

  /**
   * <p> The time the assessment was performed. </p>
   * @public
   */
  lastAnalyzedTimestamp?: Date | undefined;

  /**
   * <p>List of status summaries of the analyzed application components.</p>
   * @public
   */
  listApplicationComponentStatusSummary?: ApplicationComponentStatusSummary[] | undefined;

  /**
   * <p>List of status summaries of the analyzed servers.</p>
   * @public
   */
  listServerStatusSummary?: ServerStatusSummary[] | undefined;
}

/**
 * <p>Defines the criteria of assessment.</p>
 * @public
 */
export interface AssessmentTarget {
  /**
   * <p>Condition of an assessment.</p>
   * @public
   */
  condition: Condition | undefined;

  /**
   * <p>Name of an assessment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Values of an assessment.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p> Object containing details about applications as defined in Application Discovery Service. </p>
 * @public
 */
export interface AssociatedApplication {
  /**
   * <p> Name of the application as defined in Application Discovery Service. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> ID of the application as defined in Application Discovery Service. </p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationComponentDetailsRequest {
  /**
   * <p> The ID of the application component. The ID is unique within an AWS account.</p>
   * @public
   */
  applicationComponentId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationComponentDetailsResponse {
  /**
   * <p> Detailed information about an application component. </p>
   * @public
   */
  applicationComponentDetail?: ApplicationComponentDetail | undefined;

  /**
   * <p> The associated application group as defined in AWS Application Discovery Service. </p>
   * @public
   */
  associatedApplications?: AssociatedApplication[] | undefined;

  /**
   * <p> Set to true if the application component belongs to more than one application group.
   *     </p>
   * @public
   */
  moreApplicationResource?: boolean | undefined;

  /**
   * <p> A list of the IDs of the servers on which the application component is running. </p>
   * @public
   */
  associatedServerIds?: string[] | undefined;
}

/**
 * @public
 */
export interface GetApplicationComponentStrategiesRequest {
  /**
   * <p> The ID of the application component. The ID is unique within an AWS account.</p>
   * @public
   */
  applicationComponentId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationComponentStrategiesResponse {
  /**
   * <p> A list of application component strategy recommendations. </p>
   * @public
   */
  applicationComponentStrategies?: ApplicationComponentStrategy[] | undefined;
}

/**
 * @public
 */
export interface GetAssessmentRequest {
  /**
   * <p> The <code>assessmentid</code> returned by <a>StartAssessment</a>.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p> Detailed information about an assessment. </p>
 * @public
 */
export interface DataCollectionDetails {
  /**
   * <p> The status of the assessment. </p>
   * @public
   */
  status?: AssessmentStatus | undefined;

  /**
   * <p> The total number of servers in the assessment. </p>
   * @public
   */
  servers?: number | undefined;

  /**
   * <p> The number of failed servers in the assessment. </p>
   * @public
   */
  failed?: number | undefined;

  /**
   * <p> The number of successful servers in the assessment. </p>
   * @public
   */
  success?: number | undefined;

  /**
   * <p> The number of servers with the assessment status <code>IN_PROGESS</code>. </p>
   * @public
   */
  inProgress?: number | undefined;

  /**
   * <p> The start time of assessment. </p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p> The time the assessment completes. </p>
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * <p>The status message of the assessment.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetAssessmentResponse {
  /**
   * <p> The ID for the specific assessment task. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> Detailed information about the assessment. </p>
   * @public
   */
  dataCollectionDetails?: DataCollectionDetails | undefined;

  /**
   * <p>List of criteria for assessment.</p>
   * @public
   */
  assessmentTargets?: AssessmentTarget[] | undefined;
}

/**
 * @public
 */
export interface GetImportFileTaskRequest {
  /**
   * <p> The ID of the import file task. This ID is returned in the response of <a>StartImportFileTask</a>. </p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetImportFileTaskResponse {
  /**
   * <p> The import file task <code>id</code> returned in the response of <a>StartImportFileTask</a>. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> Status of import file task. </p>
   * @public
   */
  status?: ImportFileTaskStatus | undefined;

  /**
   * <p> Start time of the import task. </p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p> The S3 bucket where import file is located. </p>
   * @public
   */
  inputS3Bucket?: string | undefined;

  /**
   * <p> The Amazon S3 key name of the import file. </p>
   * @public
   */
  inputS3Key?: string | undefined;

  /**
   * <p> The S3 bucket name for status report of import task. </p>
   * @public
   */
  statusReportS3Bucket?: string | undefined;

  /**
   * <p> The Amazon S3 key name for status report of import task. The report contains details about
   *       whether each record imported successfully or why it did not.</p>
   * @public
   */
  statusReportS3Key?: string | undefined;

  /**
   * <p> The time that the import task completed. </p>
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * <p> The number of records successfully imported. </p>
   * @public
   */
  numberOfRecordsSuccess?: number | undefined;

  /**
   * <p> The number of records that failed to be imported. </p>
   * @public
   */
  numberOfRecordsFailed?: number | undefined;

  /**
   * <p> The name of the import task given in <a>StartImportFileTask</a>. </p>
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
   * <p>The latest ID for the specific assessment task.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface GetPortfolioPreferencesRequest {}

/**
 * <p> The object containing details about heterogeneous database preferences. </p>
 * @public
 */
export interface Heterogeneous {
  /**
   * <p> The target database engine for heterogeneous database migration preference. </p>
   * @public
   */
  targetDatabaseEngine: HeterogeneousTargetDatabaseEngine[] | undefined;
}

/**
 * <p> The object containing details about homogeneous database preferences. </p>
 * @public
 */
export interface Homogeneous {
  /**
   * <p> The target database engine for homogeneous database migration preferences. </p>
   * @public
   */
  targetDatabaseEngine?: HomogeneousTargetDatabaseEngine[] | undefined;
}

/**
 * <p> The object containing details about database migration preferences, when you have no
 *       particular preference. </p>
 * @public
 */
export interface NoDatabaseMigrationPreference {
  /**
   * <p> The target database engine for database migration preference that you specify. </p>
   * @public
   */
  targetDatabaseEngine: TargetDatabaseEngine[] | undefined;
}

/**
 * <p> Preferences for migrating a database to AWS. </p>
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
   * <p> Indicates whether you are interested in moving from one type of database to another. For
   *       example, from SQL Server to Amazon Aurora MySQL-Compatible Edition. </p>
   * @public
   */
  export interface HeterogeneousMember {
    heterogeneous: Heterogeneous;
    homogeneous?: never;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * <p> Indicates whether you are interested in moving to the same type of database into AWS.
   *       For example, from SQL Server in your environment to SQL Server on AWS. </p>
   * @public
   */
  export interface HomogeneousMember {
    heterogeneous?: never;
    homogeneous: Homogeneous;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * <p> Indicated that you do not prefer heterogeneous or homogeneous. </p>
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
 * <p> Preferences on managing your databases on AWS. </p>
 * @public
 */
export interface DatabasePreferences {
  /**
   * <p> Specifies whether you're interested in self-managed databases or databases managed by
   *       AWS. </p>
   * @public
   */
  databaseManagementPreference?: DatabaseManagementPreference | undefined;

  /**
   * <p> Specifies your preferred migration path. </p>
   * @public
   */
  databaseMigrationPreference?: DatabaseMigrationPreference | undefined;
}

/**
 * <p> Business goals that you specify. </p>
 * @public
 */
export interface BusinessGoals {
  /**
   * <p> Business goal to achieve migration at a fast pace. </p>
   * @public
   */
  speedOfMigration?: number | undefined;

  /**
   * <p> Business goal to reduce the operational overhead on the team by moving into managed
   *       services. </p>
   * @public
   */
  reduceOperationalOverheadWithManagedServices?: number | undefined;

  /**
   * <p> Business goal to modernize infrastructure by moving to cloud native technologies. </p>
   * @public
   */
  modernizeInfrastructureWithCloudNativeTechnologies?: number | undefined;

  /**
   * <p> Business goal to reduce license costs. </p>
   * @public
   */
  licenseCostReduction?: number | undefined;
}

/**
 * <p> Rank of business goals based on priority. </p>
 * @public
 */
export interface PrioritizeBusinessGoals {
  /**
   * <p> Rank of business goals based on priority. </p>
   * @public
   */
  businessGoals?: BusinessGoals | undefined;
}

/**
 * @public
 */
export interface GetPortfolioPreferencesResponse {
  /**
   * <p> The rank of business goals based on priority. </p>
   * @public
   */
  prioritizeBusinessGoals?: PrioritizeBusinessGoals | undefined;

  /**
   * <p> The transformation preferences for non-database applications. </p>
   * @public
   */
  applicationPreferences?: ApplicationPreferences | undefined;

  /**
   * <p> The transformation preferences for database applications. </p>
   * @public
   */
  databasePreferences?: DatabasePreferences | undefined;

  /**
   * <p>The classification for application component types.</p>
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
   * <p> An assessment summary for the portfolio including the number of servers to rehost and the
   *       overall number of anti-patterns. </p>
   * @public
   */
  assessmentSummary?: AssessmentSummary | undefined;
}

/**
 * @public
 */
export interface GetRecommendationReportDetailsRequest {
  /**
   * <p> The recommendation report generation task <code>id</code> returned by <a>StartRecommendationReportGeneration</a>. </p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p> Contains detailed information about a recommendation report. </p>
 * @public
 */
export interface RecommendationReportDetails {
  /**
   * <p> The status of the recommendation report generation task. </p>
   * @public
   */
  status?: RecommendationReportStatus | undefined;

  /**
   * <p> The status message for recommendation report generation. </p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p> The time that the recommendation report generation task starts. </p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p> The time that the recommendation report generation task completes. </p>
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * <p> The S3 bucket where the report file is located. </p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p> The Amazon S3 key name of the report file. </p>
   * @public
   */
  s3Keys?: string[] | undefined;
}

/**
 * @public
 */
export interface GetRecommendationReportDetailsResponse {
  /**
   * <p> The ID of the recommendation report generation task. See the response of <a>StartRecommendationReportGeneration</a>. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> Detailed information about the recommendation report. </p>
   * @public
   */
  recommendationReportDetails?: RecommendationReportDetails | undefined;
}

/**
 * @public
 */
export interface GetServerDetailsRequest {
  /**
   * <p> The ID of the server. </p>
   * @public
   */
  serverId: string | undefined;

  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The error in server analysis.</p>
 * @public
 */
export interface ServerError {
  /**
   * <p>The error category of server analysis.</p>
   * @public
   */
  serverErrorCategory?: ServerErrorCategory | undefined;
}

/**
 * <p> Information about the server's network for which the assessment was run. </p>
 * @public
 */
export interface NetworkInfo {
  /**
   * <p> Information about the name of the interface of the server for which the assessment was
   *       run. </p>
   * @public
   */
  interfaceName: string | undefined;

  /**
   * <p> Information about the IP address of the server for which the assessment was run. </p>
   * @public
   */
  ipAddress: string | undefined;

  /**
   * <p> Information about the MAC address of the server for which the assessment was run. </p>
   * @public
   */
  macAddress: string | undefined;

  /**
   * <p> Information about the subnet mask of the server for which the assessment was run. </p>
   * @public
   */
  netMask: string | undefined;
}

/**
 * <p> Information about the operating system. </p>
 * @public
 */
export interface OSInfo {
  /**
   * <p> Information about the type of operating system. </p>
   * @public
   */
  type?: OSType | undefined;

  /**
   * <p> Information about the version of operating system. </p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p> Information about the server that hosts application components. </p>
 * @public
 */
export interface SystemInfo {
  /**
   * <p> Operating system corresponding to a server. </p>
   * @public
   */
  osInfo?: OSInfo | undefined;

  /**
   * <p> File system type for the server. </p>
   * @public
   */
  fileSystemType?: string | undefined;

  /**
   * <p> Networking information related to a server. </p>
   * @public
   */
  networkInfoList?: NetworkInfo[] | undefined;

  /**
   * <p> CPU architecture type for the server. </p>
   * @public
   */
  cpuArchitecture?: string | undefined;
}

/**
 * <p> Detailed information about a server. </p>
 * @public
 */
export interface ServerDetail {
  /**
   * <p> The server ID. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> The name of the server. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> A set of recommendations. </p>
   * @public
   */
  recommendationSet?: RecommendationSet | undefined;

  /**
   * <p> The status of assessment for the server. </p>
   * @public
   */
  dataCollectionStatus?: RunTimeAssessmentStatus | undefined;

  /**
   * <p> A message about the status of data collection, which contains detailed descriptions of
   *       any error messages. </p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p> A list of anti-pattern severity summaries. </p>
   * @public
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[] | undefined;

  /**
   * <p> System information about the server. </p>
   * @public
   */
  systemInfo?: SystemInfo | undefined;

  /**
   * <p> A list of strategy summaries. </p>
   * @public
   */
  applicationComponentStrategySummary?: StrategySummary[] | undefined;

  /**
   * <p> The S3 bucket name and Amazon S3 key name for anti-pattern report. </p>
   * @public
   */
  antipatternReportS3Object?: S3Object | undefined;

  /**
   * <p> The status of the anti-pattern report generation. </p>
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus | undefined;

  /**
   * <p> A message about the status of the anti-pattern report generation. </p>
   * @public
   */
  antipatternReportStatusMessage?: string | undefined;

  /**
   * <p> The type of server. </p>
   * @public
   */
  serverType?: string | undefined;

  /**
   * <p> The timestamp of when the server was assessed. </p>
   * @public
   */
  lastAnalyzedTimestamp?: Date | undefined;

  /**
   * <p>The error in server analysis.</p>
   * @public
   */
  serverError?: ServerError | undefined;
}

/**
 * @public
 */
export interface GetServerDetailsResponse {
  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> Detailed information about the server. </p>
   * @public
   */
  serverDetail?: ServerDetail | undefined;

  /**
   * <p> The associated application group the server belongs to, as defined in AWS Application Discovery Service.
   *     </p>
   * @public
   */
  associatedApplications?: AssociatedApplication[] | undefined;
}

/**
 * @public
 */
export interface GetServerStrategiesRequest {
  /**
   * <p> The ID of the server. </p>
   * @public
   */
  serverId: string | undefined;
}

/**
 * <p> Contains information about a strategy recommendation for a server. </p>
 * @public
 */
export interface ServerStrategy {
  /**
   * <p> Strategy recommendation for the server. </p>
   * @public
   */
  recommendation?: RecommendationSet | undefined;

  /**
   * <p> The recommendation status of the strategy for the server. </p>
   * @public
   */
  status?: StrategyRecommendation | undefined;

  /**
   * <p> The number of application components with this strategy recommendation running on the
   *       server. </p>
   * @public
   */
  numberOfApplicationComponents?: number | undefined;

  /**
   * <p> Set to true if the recommendation is set as preferred. </p>
   * @public
   */
  isPreferred?: boolean | undefined;
}

/**
 * @public
 */
export interface GetServerStrategiesResponse {
  /**
   * <p> A list of strategy recommendations for the server. </p>
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
 * <p> The object containing information about distinct imports or groups for Strategy Recommendations. </p>
 * @public
 */
export interface Group {
  /**
   * <p> The key of the specific import group. </p>
   * @public
   */
  name?: GroupName | undefined;

  /**
   * <p> The value of the specific import group. </p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationComponentsRequest {
  /**
   * <p> Criteria for filtering the list of application components. </p>
   * @public
   */
  applicationComponentCriteria?: ApplicationComponentCriteria | undefined;

  /**
   * <p> Specify the value based on the application component criteria type. For example, if
   *         <code>applicationComponentCriteria</code> is set to <code>SERVER_ID</code> and
   *         <code>filterValue</code> is set to <code>server1</code>, then <a>ListApplicationComponents</a> returns all the application components running on
   *       server1. </p>
   * @public
   */
  filterValue?: string | undefined;

  /**
   * <p> Specifies whether to sort by ascending (<code>ASC</code>) or descending
   *         (<code>DESC</code>) order. </p>
   * @public
   */
  sort?: SortOrder | undefined;

  /**
   * <p> The group ID specified in to filter on. </p>
   * @public
   */
  groupIdFilter?: Group[] | undefined;

  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApplicationComponentsResponse {
  /**
   * <p> The list of application components with detailed information about each component.
   *     </p>
   * @public
   */
  applicationComponentInfos?: ApplicationComponentDetail[] | undefined;

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCollectorsRequest {
  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>IP address based configurations.</p>
 * @public
 */
export interface IPAddressBasedRemoteInfo {
  /**
   * <p>The time stamp of the configuration.</p>
   * @public
   */
  ipAddressConfigurationTimeStamp?: string | undefined;

  /**
   * <p>The type of authorization.</p>
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * <p>The type of the operating system.</p>
   * @public
   */
  osType?: OSType | undefined;
}

/**
 * <p>Detailed information of the pipeline.</p>
 * @public
 */
export interface PipelineInfo {
  /**
   * <p>The type of pipeline.</p>
   * @public
   */
  pipelineType?: PipelineType | undefined;

  /**
   * <p>The time when the pipeline info was configured.</p>
   * @public
   */
  pipelineConfigurationTimeStamp?: string | undefined;
}

/**
 * <p>Information about the server configured for source code analysis.</p>
 * @public
 */
export interface RemoteSourceCodeAnalysisServerInfo {
  /**
   * <p>The time when the remote source code server was configured.</p>
   * @public
   */
  remoteSourceCodeAnalysisServerConfigurationTimestamp?: string | undefined;
}

/**
 * <p>Details about the server in vCenter.</p>
 * @public
 */
export interface VcenterBasedRemoteInfo {
  /**
   * <p>The time when the remote server based on vCenter was last configured.</p>
   * @public
   */
  vcenterConfigurationTimeStamp?: string | undefined;

  /**
   * <p>The type of the operating system.</p>
   * @public
   */
  osType?: OSType | undefined;
}

/**
 * <p>Details about the version control configuration.</p>
 * @public
 */
export interface VersionControlInfo {
  /**
   * <p>The type of version control.</p>
   * @public
   */
  versionControlType?: VersionControlType | undefined;

  /**
   * <p>The time when the version control system was last configured.</p>
   * @public
   */
  versionControlConfigurationTimeStamp?: string | undefined;
}

/**
 * <p>Summary of the collector configuration.</p>
 * @public
 */
export interface ConfigurationSummary {
  /**
   * <p>The list of vCenter configurations.</p>
   * @public
   */
  vcenterBasedRemoteInfoList?: VcenterBasedRemoteInfo[] | undefined;

  /**
   * <p>IP address based configurations.</p>
   * @public
   */
  ipAddressBasedRemoteInfoList?: IPAddressBasedRemoteInfo[] | undefined;

  /**
   * <p>The list of the version control configurations.</p>
   * @public
   */
  versionControlInfoList?: VersionControlInfo[] | undefined;

  /**
   * <p>The list of pipeline info configurations.</p>
   * @public
   */
  pipelineInfoList?: PipelineInfo[] | undefined;

  /**
   * <p>Info about the remote server source code configuration.</p>
   * @public
   */
  remoteSourceCodeAnalysisServerInfo?: RemoteSourceCodeAnalysisServerInfo | undefined;
}

/**
 * <p> Process data collector that runs in the environment that you specify. </p>
 * @public
 */
export interface Collector {
  /**
   * <p> The ID of the collector. </p>
   * @public
   */
  collectorId?: string | undefined;

  /**
   * <p> IP address of the server that is hosting the collector. </p>
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * <p> Hostname of the server that is hosting the collector. </p>
   * @public
   */
  hostName?: string | undefined;

  /**
   * <p> Indicates the health of a collector. </p>
   * @public
   */
  collectorHealth?: CollectorHealth | undefined;

  /**
   * <p> Current version of the collector that is running in the environment that you specify.
   *     </p>
   * @public
   */
  collectorVersion?: string | undefined;

  /**
   * <p> Time when the collector registered with the service. </p>
   * @public
   */
  registeredTimeStamp?: string | undefined;

  /**
   * <p> Time when the collector last pinged the service. </p>
   * @public
   */
  lastActivityTimeStamp?: string | undefined;

  /**
   * <p>Summary of the collector configuration.</p>
   * @public
   */
  configurationSummary?: ConfigurationSummary | undefined;
}

/**
 * @public
 */
export interface ListCollectorsResponse {
  /**
   * <p> The list of all the installed collectors. </p>
   * @public
   */
  Collectors?: Collector[] | undefined;

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportFileTaskRequest {
  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The total number of items to return. The maximum value is 100. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p> Information about the import file tasks you request. </p>
 * @public
 */
export interface ImportFileTaskInformation {
  /**
   * <p> The ID of the import file task. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> Status of import file task. </p>
   * @public
   */
  status?: ImportFileTaskStatus | undefined;

  /**
   * <p> Start time of the import task. </p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p> The S3 bucket where the import file is located. </p>
   * @public
   */
  inputS3Bucket?: string | undefined;

  /**
   * <p> The Amazon S3 key name of the import file. </p>
   * @public
   */
  inputS3Key?: string | undefined;

  /**
   * <p> The S3 bucket name for status report of import task. </p>
   * @public
   */
  statusReportS3Bucket?: string | undefined;

  /**
   * <p> The Amazon S3 key name for status report of import task. The report contains details about
   *       whether each record imported successfully or why it did not. </p>
   * @public
   */
  statusReportS3Key?: string | undefined;

  /**
   * <p> The time that the import task completes. </p>
   * @public
   */
  completionTime?: Date | undefined;

  /**
   * <p> The number of records successfully imported. </p>
   * @public
   */
  numberOfRecordsSuccess?: number | undefined;

  /**
   * <p> The number of records that failed to be imported. </p>
   * @public
   */
  numberOfRecordsFailed?: number | undefined;

  /**
   * <p> The name of the import task given in <code>StartImportFileTask</code>. </p>
   * @public
   */
  importName?: string | undefined;
}

/**
 * @public
 */
export interface ListImportFileTaskResponse {
  /**
   * <p> Lists information about the files you import.</p>
   * @public
   */
  taskInfos?: ImportFileTaskInformation[] | undefined;

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServersRequest {
  /**
   * <p> Criteria for filtering servers. </p>
   * @public
   */
  serverCriteria?: ServerCriteria | undefined;

  /**
   * <p> Specifies the filter value, which is based on the type of server criteria. For example,
   *       if <code>serverCriteria</code> is <code>OS_NAME</code>, and the <code>filterValue</code> is
   *       equal to <code>WindowsServer</code>, then <code>ListServers</code> returns all of the servers
   *       matching the OS name <code>WindowsServer</code>. </p>
   * @public
   */
  filterValue?: string | undefined;

  /**
   * <p> Specifies whether to sort by ascending (<code>ASC</code>) or descending
   *         (<code>DESC</code>) order. </p>
   * @public
   */
  sort?: SortOrder | undefined;

  /**
   * <p> Specifies the group ID to filter on. </p>
   * @public
   */
  groupIdFilter?: Group[] | undefined;

  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListServersResponse {
  /**
   * <p> The list of servers with detailed information about each server. </p>
   * @public
   */
  serverInfos?: ServerDetail[] | undefined;

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutPortfolioPreferencesRequest {
  /**
   * <p> The rank of the business goals based on priority. </p>
   * @public
   */
  prioritizeBusinessGoals?: PrioritizeBusinessGoals | undefined;

  /**
   * <p> The transformation preferences for non-database applications. </p>
   * @public
   */
  applicationPreferences?: ApplicationPreferences | undefined;

  /**
   * <p> The transformation preferences for database applications. </p>
   * @public
   */
  databasePreferences?: DatabasePreferences | undefined;

  /**
   * <p>The classification for application component types.</p>
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
   * <p> The S3 bucket used by the collectors to send analysis data to the service. The bucket
   *       name must begin with <code>migrationhub-strategy-</code>. </p>
   * @public
   */
  s3bucketForAnalysisData?: string | undefined;

  /**
   * <p> The S3 bucket where all the reports generated by the service are stored. The bucket name
   *       must begin with <code>migrationhub-strategy-</code>. </p>
   * @public
   */
  s3bucketForReportData?: string | undefined;

  /**
   * <p>List of criteria for assessment.</p>
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
   * <p> The ID of the assessment. </p>
   * @public
   */
  assessmentId?: string | undefined;
}

/**
 * @public
 */
export interface StartImportFileTaskRequest {
  /**
   * <p> A descriptive name for the request. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The S3 bucket where the import file is located. The bucket name is required to begin with
   *         <code>migrationhub-strategy-</code>.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p> The Amazon S3 key name of the import file. </p>
   * @public
   */
  s3key: string | undefined;

  /**
   * <p>Specifies the source that the servers are coming from. By default, Strategy Recommendations assumes that
   *       the servers specified in the import file are available in AWS Application Discovery Service. </p>
   * @public
   */
  dataSourceType?: DataSourceType | undefined;

  /**
   * <p>Groups the resources in the import file together with a unique name. This ID can be as
   *       filter in <code>ListApplicationComponents</code> and <code>ListServers</code>. </p>
   * @public
   */
  groupId?: Group[] | undefined;

  /**
   * <p> The S3 bucket where Strategy Recommendations uploads import results. The bucket name is required to
   *       begin with migrationhub-strategy-. </p>
   * @public
   */
  s3bucketForReportData?: string | undefined;
}

/**
 * @public
 */
export interface StartImportFileTaskResponse {
  /**
   * <p> The ID for a specific import task. The ID is unique within an AWS account. </p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface StartRecommendationReportGenerationRequest {
  /**
   * <p> The output format for the recommendation report file. The default format is Microsoft
   *       Excel. </p>
   * @public
   */
  outputFormat?: OutputFormat | undefined;

  /**
   * <p> Groups the resources in the recommendation report with a unique name. </p>
   * @public
   */
  groupIdFilter?: Group[] | undefined;
}

/**
 * @public
 */
export interface StartRecommendationReportGenerationResponse {
  /**
   * <p> The ID of the recommendation report generation task. </p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface StopAssessmentRequest {
  /**
   * <p> The <code>assessmentId</code> returned by <a>StartAssessment</a>. </p>
   * @public
   */
  assessmentId: string | undefined;
}

/**
 * @public
 */
export interface StopAssessmentResponse {}

/**
 * <p> Object containing source code information that is linked to an application component.
 *     </p>
 * @public
 */
export interface SourceCode {
  /**
   * <p> The type of repository to use for the source code. </p>
   * @public
   */
  versionControl?: VersionControl | undefined;

  /**
   * <p> The branch of the source code. </p>
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * <p> The repository name for the source code. </p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  projectName?: string | undefined;
}

/**
 * <p> Information about all the available strategy options for migrating and modernizing an
 *       application component. </p>
 * @public
 */
export interface StrategyOption {
  /**
   * <p> Type of transformation. For example, Rehost, Replatform, and so on. </p>
   * @public
   */
  strategy?: Strategy | undefined;

  /**
   * <p> The name of the tool that can be used to transform an application component using this
   *       strategy. </p>
   * @public
   */
  toolName?: TransformationToolName | undefined;

  /**
   * <p> Destination information about where the application component can migrate to. For
   *       example, <code>EC2</code>, <code>ECS</code>, and so on. </p>
   * @public
   */
  targetDestination?: TargetDestination | undefined;

  /**
   * <p> Indicates if a specific strategy is preferred for the application component. </p>
   * @public
   */
  isPreferred?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationComponentConfigRequest {
  /**
   * <p> The ID of the application component. The ID is unique within an AWS account. </p>
   * @public
   */
  applicationComponentId: string | undefined;

  /**
   * <p> Indicates whether the application component has been included for server recommendation
   *       or not. </p>
   * @public
   */
  inclusionStatus?: InclusionStatus | undefined;

  /**
   * <p> The preferred strategy options for the application component. Use values from the <a>GetApplicationComponentStrategies</a> response. </p>
   * @public
   */
  strategyOption?: StrategyOption | undefined;

  /**
   * <p> The list of source code configurations to update for the application component. </p>
   * @public
   */
  sourceCodeList?: SourceCode[] | undefined;

  /**
   * <p> Database credentials. </p>
   * @public
   */
  secretsManagerKey?: string | undefined;

  /**
   * <p>Update the configuration request of an application component. If it is set to true, the
   *       source code and/or database credentials are updated. If it is set to false, the source code
   *       and/or database credentials are updated and an analysis is initiated.</p>
   * @public
   */
  configureOnly?: boolean | undefined;

  /**
   * <p>The type of known component.</p>
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
   * <p> The ID of the server. </p>
   * @public
   */
  serverId: string | undefined;

  /**
   * <p> The preferred strategy options for the application component. See the response from <a>GetServerStrategies</a>.</p>
   * @public
   */
  strategyOption?: StrategyOption | undefined;
}

/**
 * @public
 */
export interface UpdateServerConfigResponse {}
