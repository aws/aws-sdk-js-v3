// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { MigrationHubStrategyServiceException as __BaseException } from "./MigrationHubStrategyServiceException";

/**
 * <p> The AWS user account does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this account.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

export enum AntipatternReportStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS",
}

export enum Severity {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p> Contains the summary of anti-patterns and their severity. </p>
 */
export interface AntipatternSeveritySummary {
  /**
   * <p> Contains the severity of anti-patterns. </p>
   */
  severity?: Severity | string;

  /**
   * <p> Contains the count of anti-patterns. </p>
   */
  count?: number;
}

export enum ApplicationComponentCriteria {
  ANALYSIS_STATUS = "ANALYSIS_STATUS",
  APP_NAME = "APP_NAME",
  APP_TYPE = "APP_TYPE",
  DESTINATION = "DESTINATION",
  ERROR_CATEGORY = "ERROR_CATEGORY",
  NOT_DEFINED = "NOT_DEFINED",
  SERVER_ID = "SERVER_ID",
  STRATEGY = "STRATEGY",
}

export enum SrcCodeOrDbAnalysisStatus {
  ANALYSIS_FAILED = "ANALYSIS_FAILED",
  ANALYSIS_PARTIAL_SUCCESS = "ANALYSIS_PARTIAL_SUCCESS",
  ANALYSIS_STARTED = "ANALYSIS_STARTED",
  ANALYSIS_SUCCESS = "ANALYSIS_SUCCESS",
  ANALYSIS_TO_BE_SCHEDULED = "ANALYSIS_TO_BE_SCHEDULED",
  CONFIGURED = "CONFIGURED",
  UNCONFIGURED = "UNCONFIGURED",
}

/**
 * <p> Contains the S3 bucket name and the Amazon S3 key name. </p>
 */
export interface S3Object {
  /**
   * <p> The S3 bucket name. </p>
   */
  s3Bucket?: string;

  /**
   * <p> The Amazon S3 key name. </p>
   */
  s3key?: string;
}

export enum AppType {
  IIS = "IIS",
  cassandra = "Cassandra",
  db2 = "DB2",
  dotNetFramework = "DotNetFramework",
  dotnet = "Dotnet",
  dotnetcore = "DotnetCore",
  java = "Java",
  jboss = "JBoss",
  mariadb = "Maria DB",
  mongodb = "Mongo DB",
  mysql = "MySQL",
  oracle = "Oracle",
  other = "Other",
  postgresqlserver = "PostgreSQLServer",
  spring = "Spring",
  sqlServer = "SQLServer",
  sybase = "Sybase",
  tomcat = "Tomcat",
  unknown = "Unknown",
  visualbasic = "Visual Basic",
  weblogic = "Oracle WebLogic",
  websphere = "IBM WebSphere",
}

export enum AppUnitErrorCategory {
  CONNECTIVITY_ERROR = "CONNECTIVITY_ERROR",
  CREDENTIAL_ERROR = "CREDENTIAL_ERROR",
  OTHER_ERROR = "OTHER_ERROR",
  PERMISSION_ERROR = "PERMISSION_ERROR",
  UNSUPPORTED_ERROR = "UNSUPPORTED_ERROR",
}

/**
 * <p>Error in the analysis of the application unit.</p>
 */
export interface AppUnitError {
  /**
   * <p>The category of the error.</p>
   */
  appUnitErrorCategory?: AppUnitErrorCategory | string;
}

/**
 * <p> Configuration information used for assessing databases. </p>
 */
export interface DatabaseConfigDetail {
  /**
   * <p> AWS Secrets Manager key that holds the credentials that you use to connect to a database.
   *     </p>
   */
  secretName?: string;
}

export enum InclusionStatus {
  EXCLUDE_FROM_RECOMMENDATION = "excludeFromAssessment",
  INCLUDE_IN_RECOMMENDATION = "includeInAssessment",
}

export enum Strategy {
  REFACTOR = "Refactor",
  REHOST = "Rehost",
  RELOCATE = "Relocate",
  REPLATFORM = "Replatform",
  REPURCHASE = "Repurchase",
  RETAIN = "Retain",
  RETIREMENT = "Retirement",
}

export enum TargetDestination {
  AMAZON_DOCUMENTDB = "Amazon DocumentDB",
  AMAZON_DYNAMODB = "Amazon DynamoDB",
  AMAZON_ELASTIC_CLOUD_COMPUTE = "Amazon Elastic Cloud Compute (EC2)",
  AMAZON_ELASTIC_CONTAINER_SERVICE = "Amazon Elastic Container Service (ECS)",
  AMAZON_ELASTIC_KUBERNETES_SERVICE = "Amazon Elastic Kubernetes Service (EKS)",
  AMAZON_RDS = "Amazon Relational Database Service",
  AMAZON_RDS_MYSQL = "Amazon Relational Database Service on MySQL",
  AMAZON_RDS_POSTGRESQL = "Amazon Relational Database Service on PostgreSQL",
  AURORA_MYSQL = "Aurora MySQL",
  AURORA_POSTGRESQL = "Aurora PostgreSQL",
  AWS_ELASTIC_BEANSTALK = "AWS Elastic BeanStalk",
  AWS_FARGATE = "AWS Fargate",
  BABELFISH_AURORA_POSTGRESQL = "Babelfish for Aurora PostgreSQL",
  NONE_SPECIFIED = "None specified",
}

export enum TransformationToolName {
  APP2CONTAINER = "App2Container",
  DMS = "Database Migration Service",
  EMP = "End of Support Migration",
  IN_PLACE_OS_UPGRADE = "In Place Operating System Upgrade",
  MGN = "Application Migration Service",
  NATIVE_SQL = "Native SQL Server Backup/Restore",
  PORTING_ASSISTANT = "Porting Assistant For .NET",
  SCT = "Schema Conversion Tool",
  STRATEGY_RECOMMENDATION_SUPPORT = "Strategy Recommendation Support",
  WWAMA = "Windows Web Application Migration Assistant",
}

/**
 * <p> Information of the transformation tool that can be used to migrate and modernize the
 *       application. </p>
 */
export interface TransformationTool {
  /**
   * <p> Name of the tool. </p>
   */
  name?: TransformationToolName | string;

  /**
   * <p> Description of the tool. </p>
   */
  description?: string;

  /**
   * <p> URL for installing the tool. </p>
   */
  tranformationToolInstallationLink?: string;
}

/**
 * <p> Contains a recommendation set. </p>
 */
export interface RecommendationSet {
  /**
   * <p> The target destination for the recommendation set. </p>
   */
  transformationTool?: TransformationTool;

  /**
   * <p> The recommended target destination. </p>
   */
  targetDestination?: TargetDestination | string;

  /**
   * <p> The recommended strategy. </p>
   */
  strategy?: Strategy | string;
}

export enum ResourceSubType {
  DATABASE = "Database",
  DATABASE_PROCESS = "DatabaseProcess",
  PROCESS = "Process",
}

export enum RuntimeAnalysisStatus {
  ANALYSIS_FAILED = "ANALYSIS_FAILED",
  ANALYSIS_STARTED = "ANALYSIS_STARTED",
  ANALYSIS_SUCCESS = "ANALYSIS_SUCCESS",
  ANALYSIS_TO_BE_SCHEDULED = "ANALYSIS_TO_BE_SCHEDULED",
}

/**
 * <p> Object containing source code information that is linked to an application component.
 *     </p>
 */
export interface SourceCodeRepository {
  /**
   * <p> The repository name for the source code. </p>
   */
  repository?: string;

  /**
   * <p> The branch of the source code. </p>
   */
  branch?: string;

  /**
   * <p> The type of repository to use for the source code. </p>
   */
  versionControlType?: string;

  /**
   * <p>The name of the project.</p>
   */
  projectName?: string;
}

/**
 * <p> Contains detailed information about an application component. </p>
 */
export interface ApplicationComponentDetail {
  /**
   * <p> The ID of the application component. </p>
   */
  id?: string;

  /**
   * <p> The name of application component. </p>
   */
  name?: string;

  /**
   * <p> The top recommendation set for the application component. </p>
   */
  recommendationSet?: RecommendationSet;

  /**
   * <p> The status of analysis, if the application component has source code or an associated
   *       database. </p>
   */
  analysisStatus?: SrcCodeOrDbAnalysisStatus | string;

  /**
   * <p> A detailed description of the analysis status and any failure message. </p>
   */
  statusMessage?: string;

  /**
   * <p> A list of anti-pattern severity summaries. </p>
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];

  /**
   * <p> Configuration details for the database associated with the application component. </p>
   */
  databaseConfigDetail?: DatabaseConfigDetail;

  /**
   * <p> Details about the source code repository associated with the application component.
   *     </p>
   */
  sourceCodeRepositories?: SourceCodeRepository[];

  /**
   * <p> The type of application component. </p>
   */
  appType?: AppType | string;

  /**
   * <p> The application component subtype.</p>
   */
  resourceSubType?: ResourceSubType | string;

  /**
   * <p> Indicates whether the application component has been included for server recommendation
   *       or not. </p>
   */
  inclusionStatus?: InclusionStatus | string;

  /**
   * <p> The S3 bucket name and the Amazon S3 key name for the anti-pattern report. </p>
   */
  antipatternReportS3Object?: S3Object;

  /**
   * <p> The status of the anti-pattern report generation.</p>
   */
  antipatternReportStatus?: AntipatternReportStatus | string;

  /**
   * <p> The status message for the anti-pattern. </p>
   */
  antipatternReportStatusMessage?: string;

  /**
   * <p> OS version. </p>
   */
  osVersion?: string;

  /**
   * <p> OS driver. </p>
   */
  osDriver?: string;

  /**
   * <p> The timestamp of when the application component was assessed. </p>
   */
  lastAnalyzedTimestamp?: Date;

  /**
   * <p> The ID of the server that the application component is running on. </p>
   */
  associatedServerId?: string;

  /**
   * <p> Set to true if the application component is running on multiple servers.</p>
   */
  moreServerAssociationExists?: boolean;

  /**
   * <p>The status of the application unit.</p>
   */
  runtimeStatus?: RuntimeAnalysisStatus | string;

  /**
   * <p>The status message for the application unit.</p>
   */
  runtimeStatusMessage?: string;

  /**
   * <p>The error in the analysis of the source code or database.</p>
   */
  appUnitError?: AppUnitError;
}

/**
 * <p>Summary of the analysis status of the application component.</p>
 */
export interface ApplicationComponentStatusSummary {
  /**
   * <p>The status of database analysis.</p>
   */
  srcCodeOrDbAnalysisStatus?: SrcCodeOrDbAnalysisStatus | string;

  /**
   * <p>The number of application components successfully analyzed, partially successful or failed
   *       analysis.</p>
   */
  count?: number;
}

export enum StrategyRecommendation {
  NOT_RECOMMENDED = "notRecommended",
  POTENTIAL = "potential",
  RECOMMENDED = "recommended",
  VIABLE_OPTION = "viableOption",
}

/**
 * <p> Contains information about a strategy recommendation for an application component.
 *     </p>
 */
export interface ApplicationComponentStrategy {
  /**
   * <p> Strategy recommendation for the application component. </p>
   */
  recommendation?: RecommendationSet;

  /**
   * <p> The recommendation status of a strategy for an application component. </p>
   */
  status?: StrategyRecommendation | string;

  /**
   * <p> Set to true if the recommendation is set as preferred. </p>
   */
  isPreferred?: boolean;
}

/**
 * <p> Contains the summary of application components. </p>
 */
export interface ApplicationComponentSummary {
  /**
   * <p> Contains the name of application types. </p>
   */
  appType?: AppType | string;

  /**
   * <p> Contains the count of application type. </p>
   */
  count?: number;
}

export enum ApplicationMode {
  ALL = "ALL",
  KNOWN = "KNOWN",
  UNKNOWN = "UNKNOWN",
}

export enum AwsManagedTargetDestination {
  AWS_ELASTIC_BEANSTALK = "AWS Elastic BeanStalk",
  AWS_FARGATE = "AWS Fargate",
  NONE_SPECIFIED = "None specified",
}

/**
 * <p> Object containing the choice of application destination that you specify. </p>
 */
export interface AwsManagedResources {
  /**
   * <p> The choice of application destination that you specify. </p>
   */
  targetDestination: (AwsManagedTargetDestination | string)[] | undefined;
}

export enum NoPreferenceTargetDestination {
  AMAZON_ELASTIC_CLOUD_COMPUTE = "Amazon Elastic Cloud Compute (EC2)",
  AMAZON_ELASTIC_CONTAINER_SERVICE = "Amazon Elastic Container Service (ECS)",
  AMAZON_ELASTIC_KUBERNETES_SERVICE = "Amazon Elastic Kubernetes Service (EKS)",
  AWS_ELASTIC_BEANSTALK = "AWS Elastic BeanStalk",
  AWS_FARGATE = "AWS Fargate",
  NONE_SPECIFIED = "None specified",
}

/**
 * <p> Object containing the choice of application destination that you specify. </p>
 */
export interface NoManagementPreference {
  /**
   * <p> The choice of application destination that you specify. </p>
   */
  targetDestination: (NoPreferenceTargetDestination | string)[] | undefined;
}

export enum SelfManageTargetDestination {
  AMAZON_ELASTIC_CLOUD_COMPUTE = "Amazon Elastic Cloud Compute (EC2)",
  AMAZON_ELASTIC_CONTAINER_SERVICE = "Amazon Elastic Container Service (ECS)",
  AMAZON_ELASTIC_KUBERNETES_SERVICE = "Amazon Elastic Kubernetes Service (EKS)",
  NONE_SPECIFIED = "None specified",
}

/**
 * <p> Self-managed resources. </p>
 */
export interface SelfManageResources {
  /**
   * <p> Self-managed resources target destination. </p>
   */
  targetDestination: (SelfManageTargetDestination | string)[] | undefined;
}

/**
 * <p> Preferences for migrating an application to AWS. </p>
 */
export type ManagementPreference =
  | ManagementPreference.AwsManagedResourcesMember
  | ManagementPreference.NoPreferenceMember
  | ManagementPreference.SelfManageResourcesMember
  | ManagementPreference.$UnknownMember;

export namespace ManagementPreference {
  /**
   * <p> Indicates interest in solutions that are managed by AWS. </p>
   */
  export interface AwsManagedResourcesMember {
    awsManagedResources: AwsManagedResources;
    selfManageResources?: never;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * <p> Indicates interest in managing your own resources on AWS. </p>
   */
  export interface SelfManageResourcesMember {
    awsManagedResources?: never;
    selfManageResources: SelfManageResources;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * <p> No specific preference. </p>
   */
  export interface NoPreferenceMember {
    awsManagedResources?: never;
    selfManageResources?: never;
    noPreference: NoManagementPreference;
    $unknown?: never;
  }

  export interface $UnknownMember {
    awsManagedResources?: never;
    selfManageResources?: never;
    noPreference?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    awsManagedResources: (value: AwsManagedResources) => T;
    selfManageResources: (value: SelfManageResources) => T;
    noPreference: (value: NoManagementPreference) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ManagementPreference, visitor: Visitor<T>): T => {
    if (value.awsManagedResources !== undefined) return visitor.awsManagedResources(value.awsManagedResources);
    if (value.selfManageResources !== undefined) return visitor.selfManageResources(value.selfManageResources);
    if (value.noPreference !== undefined) return visitor.noPreference(value.noPreference);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p> Application preferences that you specify. </p>
 */
export interface ApplicationPreferences {
  /**
   * <p> Application preferences that you specify to prefer managed environment. </p>
   */
  managementPreference?: ManagementPreference;
}

export enum AssessmentStatus {
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  STOPPED = "STOPPED",
}

/**
 * <p> Object containing the summary of the strategy recommendations. </p>
 */
export interface StrategySummary {
  /**
   * <p> The name of recommended strategy. </p>
   */
  strategy?: Strategy | string;

  /**
   * <p> The count of recommendations per strategy. </p>
   */
  count?: number;
}

export enum RunTimeAssessmentStatus {
  DC_FAILED = "dataCollectionTaskFailed",
  DC_PARTIAL_SUCCESS = "dataCollectionTaskPartialSuccess",
  DC_REQ_SENT = "dataCollectionTaskScheduled",
  DC_STARTED = "dataCollectionTaskStarted",
  DC_STOPPED = "dataCollectionTaskStopped",
  DC_SUCCESS = "dataCollectionTaskSuccess",
  DC_TO_BE_SCHEDULED = "dataCollectionTaskToBeScheduled",
}

/**
 * <p>The status summary of the server analysis.</p>
 */
export interface ServerStatusSummary {
  /**
   * <p>The status of the run time.</p>
   */
  runTimeAssessmentStatus?: RunTimeAssessmentStatus | string;

  /**
   * <p>The number of servers successfully analyzed, partially successful or failed
   *       analysis.</p>
   */
  count?: number;
}

export enum ServerOsType {
  amazonLinux = "AmazonLinux",
  endOfSupportWindowsServer = "EndOfSupportWindowsServer",
  other = "Other",
  redhat = "Redhat",
  windowsServer = "WindowsServer",
}

/**
 * <p> Object containing details about the servers imported by Application Discovery Service </p>
 */
export interface ServerSummary {
  /**
   * <p> Type of operating system for the servers. </p>
   */
  ServerOsType?: ServerOsType | string;

  /**
   * <p> Number of servers. </p>
   */
  count?: number;
}

/**
 * <p> Contains the summary of the assessment results. </p>
 */
export interface AssessmentSummary {
  /**
   * <p> List of ServerStrategySummary. </p>
   */
  listServerStrategySummary?: StrategySummary[];

  /**
   * <p> List of ApplicationComponentStrategySummary. </p>
   */
  listApplicationComponentStrategySummary?: StrategySummary[];

  /**
   * <p> List of AntipatternSeveritySummary. </p>
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];

  /**
   * <p> List of ApplicationComponentSummary. </p>
   */
  listApplicationComponentSummary?: ApplicationComponentSummary[];

  /**
   * <p> List of ServerSummary. </p>
   */
  listServerSummary?: ServerSummary[];

  /**
   * <p> The Amazon S3 object containing the anti-pattern report. </p>
   */
  antipatternReportS3Object?: S3Object;

  /**
   * <p> The status of the anti-pattern report. </p>
   */
  antipatternReportStatus?: AntipatternReportStatus | string;

  /**
   * <p> The status message of the anti-pattern report. </p>
   */
  antipatternReportStatusMessage?: string;

  /**
   * <p> The time the assessment was performed. </p>
   */
  lastAnalyzedTimestamp?: Date;

  /**
   * <p>List of status summaries of the analyzed application components.</p>
   */
  listApplicationComponentStatusSummary?: ApplicationComponentStatusSummary[];

  /**
   * <p>List of status summaries of the analyzed servers.</p>
   */
  listServerStatusSummary?: ServerStatusSummary[];
}

export enum Condition {
  CONTAINS = "CONTAINS",
  EQUALS = "EQUALS",
  NOT_CONTAINS = "NOT_CONTAINS",
  NOT_EQUALS = "NOT_EQUALS",
}

/**
 * <p>Defines the criteria of assessment.</p>
 */
export interface AssessmentTarget {
  /**
   * <p>Condition of an assessment.</p>
   */
  condition: Condition | string | undefined;

  /**
   * <p>Name of an assessment.</p>
   */
  name: string | undefined;

  /**
   * <p>Values of an assessment.</p>
   */
  values: string[] | undefined;
}

/**
 * <p> Object containing details about applications as defined in Application Discovery Service. </p>
 */
export interface AssociatedApplication {
  /**
   * <p> Name of the application as defined in Application Discovery Service. </p>
   */
  name?: string;

  /**
   * <p> ID of the application as defined in Application Discovery Service. </p>
   */
  id?: string;
}

export enum AuthType {
  CERT = "CERT",
  NTLM = "NTLM",
  SSH = "SSH",
}

export interface GetApplicationComponentDetailsRequest {
  /**
   * <p> The ID of the application component. The ID is unique within an AWS account.</p>
   */
  applicationComponentId: string | undefined;
}

export interface GetApplicationComponentDetailsResponse {
  /**
   * <p> Detailed information about an application component. </p>
   */
  applicationComponentDetail?: ApplicationComponentDetail;

  /**
   * <p> The associated application group as defined in AWS Application Discovery Service. </p>
   */
  associatedApplications?: AssociatedApplication[];

  /**
   * <p> Set to true if the application component belongs to more than one application group.
   *     </p>
   */
  moreApplicationResource?: boolean;

  /**
   * <p> A list of the IDs of the servers on which the application component is running. </p>
   */
  associatedServerIds?: string[];
}

/**
 * <p> The server experienced an internal error. Try again. </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p> The specified ID in the request is not found. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p> The request was denied due to request throttling. </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

export interface GetApplicationComponentStrategiesRequest {
  /**
   * <p> The ID of the application component. The ID is unique within an AWS account.</p>
   */
  applicationComponentId: string | undefined;
}

export interface GetApplicationComponentStrategiesResponse {
  /**
   * <p> A list of application component strategy recommendations. </p>
   */
  applicationComponentStrategies?: ApplicationComponentStrategy[];
}

export interface GetAssessmentRequest {
  /**
   * <p> The <code>assessmentid</code> returned by <a>StartAssessment</a>.</p>
   */
  id: string | undefined;
}

/**
 * <p> Detailed information about an assessment. </p>
 */
export interface DataCollectionDetails {
  /**
   * <p> The status of the assessment. </p>
   */
  status?: AssessmentStatus | string;

  /**
   * <p> The total number of servers in the assessment. </p>
   */
  servers?: number;

  /**
   * <p> The number of failed servers in the assessment. </p>
   */
  failed?: number;

  /**
   * <p> The number of successful servers in the assessment. </p>
   */
  success?: number;

  /**
   * <p> The number of servers with the assessment status <code>IN_PROGESS</code>. </p>
   */
  inProgress?: number;

  /**
   * <p> The start time of assessment. </p>
   */
  startTime?: Date;

  /**
   * <p> The time the assessment completes. </p>
   */
  completionTime?: Date;

  /**
   * <p>The status message of the assessment.</p>
   */
  statusMessage?: string;
}

export interface GetAssessmentResponse {
  /**
   * <p> The ID for the specific assessment task. </p>
   */
  id?: string;

  /**
   * <p> Detailed information about the assessment. </p>
   */
  dataCollectionDetails?: DataCollectionDetails;

  /**
   * <p>List of criteria for assessment.</p>
   */
  assessmentTargets?: AssessmentTarget[];
}

export interface GetImportFileTaskRequest {
  /**
   * <p> The ID of the import file task. This ID is returned in the response of <a>StartImportFileTask</a>. </p>
   */
  id: string | undefined;
}

export enum ImportFileTaskStatus {
  DELETE_FAILED = "DeleteFailed",
  DELETE_IN_PROGRESS = "DeleteInProgress",
  DELETE_PARTIAL_SUCCESS = "DeletePartialSuccess",
  DELETE_SUCCESS = "DeleteSuccess",
  IMPORT_FAILED = "ImportFailed",
  IMPORT_IN_PROGRESS = "ImportInProgress",
  IMPORT_PARTIAL_SUCCESS = "ImportPartialSuccess",
  IMPORT_SUCCESS = "ImportSuccess",
}

export interface GetImportFileTaskResponse {
  /**
   * <p> The import file task <code>id</code> returned in the response of <a>StartImportFileTask</a>. </p>
   */
  id?: string;

  /**
   * <p> Status of import file task. </p>
   */
  status?: ImportFileTaskStatus | string;

  /**
   * <p> Start time of the import task. </p>
   */
  startTime?: Date;

  /**
   * <p> The S3 bucket where import file is located. </p>
   */
  inputS3Bucket?: string;

  /**
   * <p> The Amazon S3 key name of the import file. </p>
   */
  inputS3Key?: string;

  /**
   * <p> The S3 bucket name for status report of import task. </p>
   */
  statusReportS3Bucket?: string;

  /**
   * <p> The Amazon S3 key name for status report of import task. The report contains details about
   *       whether each record imported successfully or why it did not.</p>
   */
  statusReportS3Key?: string;

  /**
   * <p> The time that the import task completed. </p>
   */
  completionTime?: Date;

  /**
   * <p> The number of records successfully imported. </p>
   */
  numberOfRecordsSuccess?: number;

  /**
   * <p> The number of records that failed to be imported. </p>
   */
  numberOfRecordsFailed?: number;

  /**
   * <p> The name of the import task given in <a>StartImportFileTask</a>. </p>
   */
  importName?: string;
}

/**
 * <p> The request body isn't valid. </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>Dependency encountered an error.</p>
 */
export class DependencyException extends __BaseException {
  readonly name: "DependencyException" = "DependencyException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyException, __BaseException>) {
    super({
      name: "DependencyException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyException.prototype);
  }
}

export interface GetLatestAssessmentIdRequest {}

export interface GetLatestAssessmentIdResponse {
  /**
   * <p>The latest ID for the specific assessment task.</p>
   */
  id?: string;
}

export interface GetPortfolioPreferencesRequest {}

export enum DatabaseManagementPreference {
  AWS_MANAGED = "AWS-managed",
  NO_PREFERENCE = "No preference",
  SELF_MANAGE = "Self-manage",
}

export enum HeterogeneousTargetDatabaseEngine {
  AMAZON_AURORA = "Amazon Aurora",
  AWS_POSTGRESQL = "AWS PostgreSQL",
  DB2_LUW = "Db2 LUW",
  MARIA_DB = "MariaDB",
  MICROSOFT_SQL_SERVER = "Microsoft SQL Server",
  MONGO_DB = "MongoDB",
  MYSQL = "MySQL",
  NONE_SPECIFIED = "None specified",
  ORACLE_DATABASE = "Oracle Database",
  SAP = "SAP",
}

/**
 * <p> The object containing details about heterogeneous database preferences. </p>
 */
export interface Heterogeneous {
  /**
   * <p> The target database engine for heterogeneous database migration preference. </p>
   */
  targetDatabaseEngine: (HeterogeneousTargetDatabaseEngine | string)[] | undefined;
}

export enum HomogeneousTargetDatabaseEngine {
  NONE_SPECIFIED = "None specified",
}

/**
 * <p> The object containing details about homogeneous database preferences. </p>
 */
export interface Homogeneous {
  /**
   * <p> The target database engine for homogeneous database migration preferences. </p>
   */
  targetDatabaseEngine?: (HomogeneousTargetDatabaseEngine | string)[];
}

export enum TargetDatabaseEngine {
  AMAZON_AURORA = "Amazon Aurora",
  AWS_POSTGRESQL = "AWS PostgreSQL",
  DB2_LUW = "Db2 LUW",
  MARIA_DB = "MariaDB",
  MICROSOFT_SQL_SERVER = "Microsoft SQL Server",
  MONGO_DB = "MongoDB",
  MYSQL = "MySQL",
  NONE_SPECIFIED = "None specified",
  ORACLE_DATABASE = "Oracle Database",
  SAP = "SAP",
}

/**
 * <p> The object containing details about database migration preferences, when you have no
 *       particular preference. </p>
 */
export interface NoDatabaseMigrationPreference {
  /**
   * <p> The target database engine for database migration preference that you specify. </p>
   */
  targetDatabaseEngine: (TargetDatabaseEngine | string)[] | undefined;
}

/**
 * <p> Preferences for migrating a database to AWS. </p>
 */
export type DatabaseMigrationPreference =
  | DatabaseMigrationPreference.HeterogeneousMember
  | DatabaseMigrationPreference.HomogeneousMember
  | DatabaseMigrationPreference.NoPreferenceMember
  | DatabaseMigrationPreference.$UnknownMember;

export namespace DatabaseMigrationPreference {
  /**
   * <p> Indicates whether you are interested in moving from one type of database to another. For
   *       example, from SQL Server to Amazon Aurora MySQL-Compatible Edition. </p>
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
   */
  export interface HomogeneousMember {
    heterogeneous?: never;
    homogeneous: Homogeneous;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * <p> Indicated that you do not prefer heterogeneous or homogeneous. </p>
   */
  export interface NoPreferenceMember {
    heterogeneous?: never;
    homogeneous?: never;
    noPreference: NoDatabaseMigrationPreference;
    $unknown?: never;
  }

  export interface $UnknownMember {
    heterogeneous?: never;
    homogeneous?: never;
    noPreference?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    heterogeneous: (value: Heterogeneous) => T;
    homogeneous: (value: Homogeneous) => T;
    noPreference: (value: NoDatabaseMigrationPreference) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DatabaseMigrationPreference, visitor: Visitor<T>): T => {
    if (value.heterogeneous !== undefined) return visitor.heterogeneous(value.heterogeneous);
    if (value.homogeneous !== undefined) return visitor.homogeneous(value.homogeneous);
    if (value.noPreference !== undefined) return visitor.noPreference(value.noPreference);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p> Preferences on managing your databases on AWS. </p>
 */
export interface DatabasePreferences {
  /**
   * <p> Specifies whether you're interested in self-managed databases or databases managed by
   *       AWS. </p>
   */
  databaseManagementPreference?: DatabaseManagementPreference | string;

  /**
   * <p> Specifies your preferred migration path. </p>
   */
  databaseMigrationPreference?: DatabaseMigrationPreference;
}

/**
 * <p> Business goals that you specify. </p>
 */
export interface BusinessGoals {
  /**
   * <p> Business goal to achieve migration at a fast pace. </p>
   */
  speedOfMigration?: number;

  /**
   * <p> Business goal to reduce the operational overhead on the team by moving into managed
   *       services. </p>
   */
  reduceOperationalOverheadWithManagedServices?: number;

  /**
   * <p> Business goal to modernize infrastructure by moving to cloud native technologies. </p>
   */
  modernizeInfrastructureWithCloudNativeTechnologies?: number;

  /**
   * <p> Business goal to reduce license costs. </p>
   */
  licenseCostReduction?: number;
}

/**
 * <p> Rank of business goals based on priority. </p>
 */
export interface PrioritizeBusinessGoals {
  /**
   * <p> Rank of business goals based on priority. </p>
   */
  businessGoals?: BusinessGoals;
}

export interface GetPortfolioPreferencesResponse {
  /**
   * <p> The rank of business goals based on priority. </p>
   */
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;

  /**
   * <p> The transformation preferences for non-database applications. </p>
   */
  applicationPreferences?: ApplicationPreferences;

  /**
   * <p> The transformation preferences for database applications. </p>
   */
  databasePreferences?: DatabasePreferences;

  /**
   * <p>The classification for application component types.</p>
   */
  applicationMode?: ApplicationMode | string;
}

export interface GetPortfolioSummaryRequest {}

export interface GetPortfolioSummaryResponse {
  /**
   * <p> An assessment summary for the portfolio including the number of servers to rehost and the
   *       overall number of anti-patterns. </p>
   */
  assessmentSummary?: AssessmentSummary;
}

export interface GetRecommendationReportDetailsRequest {
  /**
   * <p> The recommendation report generation task <code>id</code> returned by <a>StartRecommendationReportGeneration</a>. </p>
   */
  id: string | undefined;
}

export enum RecommendationReportStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS",
}

/**
 * <p> Contains detailed information about a recommendation report. </p>
 */
export interface RecommendationReportDetails {
  /**
   * <p> The status of the recommendation report generation task. </p>
   */
  status?: RecommendationReportStatus | string;

  /**
   * <p> The status message for recommendation report generation. </p>
   */
  statusMessage?: string;

  /**
   * <p> The time that the recommendation report generation task starts. </p>
   */
  startTime?: Date;

  /**
   * <p> The time that the recommendation report generation task completes. </p>
   */
  completionTime?: Date;

  /**
   * <p> The S3 bucket where the report file is located. </p>
   */
  s3Bucket?: string;

  /**
   * <p> The Amazon S3 key name of the report file. </p>
   */
  s3Keys?: string[];
}

export interface GetRecommendationReportDetailsResponse {
  /**
   * <p> The ID of the recommendation report generation task. See the response of <a>StartRecommendationReportGeneration</a>. </p>
   */
  id?: string;

  /**
   * <p> Detailed information about the recommendation report. </p>
   */
  recommendationReportDetails?: RecommendationReportDetails;
}

export interface GetServerDetailsRequest {
  /**
   * <p> The ID of the server. </p>
   */
  serverId: string | undefined;

  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   */
  maxResults?: number;
}

export enum ServerErrorCategory {
  ARCHITECTURE_ERROR = "ARCHITECTURE_ERROR",
  CONNECTIVITY_ERROR = "CONNECTIVITY_ERROR",
  CREDENTIAL_ERROR = "CREDENTIAL_ERROR",
  OTHER_ERROR = "OTHER_ERROR",
  PERMISSION_ERROR = "PERMISSION_ERROR",
}

/**
 * <p>The error in server analysis.</p>
 */
export interface ServerError {
  /**
   * <p>The error category of server analysis.</p>
   */
  serverErrorCategory?: ServerErrorCategory | string;
}

/**
 * <p> Information about the server's network for which the assessment was run. </p>
 */
export interface NetworkInfo {
  /**
   * <p> Information about the name of the interface of the server for which the assessment was
   *       run. </p>
   */
  interfaceName: string | undefined;

  /**
   * <p> Information about the IP address of the server for which the assessment was run. </p>
   */
  ipAddress: string | undefined;

  /**
   * <p> Information about the MAC address of the server for which the assessment was run. </p>
   */
  macAddress: string | undefined;

  /**
   * <p> Information about the subnet mask of the server for which the assessment was run. </p>
   */
  netMask: string | undefined;
}

export enum OSType {
  LINUX = "LINUX",
  WINDOWS = "WINDOWS",
}

/**
 * <p> Information about the operating system. </p>
 */
export interface OSInfo {
  /**
   * <p> Information about the type of operating system. </p>
   */
  type?: OSType | string;

  /**
   * <p> Information about the version of operating system. </p>
   */
  version?: string;
}

/**
 * <p> Information about the server that hosts application components. </p>
 */
export interface SystemInfo {
  /**
   * <p> Operating system corresponding to a server. </p>
   */
  osInfo?: OSInfo;

  /**
   * <p> File system type for the server. </p>
   */
  fileSystemType?: string;

  /**
   * <p> Networking information related to a server. </p>
   */
  networkInfoList?: NetworkInfo[];

  /**
   * <p> CPU architecture type for the server. </p>
   */
  cpuArchitecture?: string;
}

/**
 * <p> Detailed information about a server. </p>
 */
export interface ServerDetail {
  /**
   * <p> The server ID. </p>
   */
  id?: string;

  /**
   * <p> The name of the server. </p>
   */
  name?: string;

  /**
   * <p> A set of recommendations. </p>
   */
  recommendationSet?: RecommendationSet;

  /**
   * <p> The status of assessment for the server. </p>
   */
  dataCollectionStatus?: RunTimeAssessmentStatus | string;

  /**
   * <p> A message about the status of data collection, which contains detailed descriptions of
   *       any error messages. </p>
   */
  statusMessage?: string;

  /**
   * <p> A list of anti-pattern severity summaries. </p>
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];

  /**
   * <p> System information about the server. </p>
   */
  systemInfo?: SystemInfo;

  /**
   * <p> A list of strategy summaries. </p>
   */
  applicationComponentStrategySummary?: StrategySummary[];

  /**
   * <p> The S3 bucket name and Amazon S3 key name for anti-pattern report. </p>
   */
  antipatternReportS3Object?: S3Object;

  /**
   * <p> The status of the anti-pattern report generation. </p>
   */
  antipatternReportStatus?: AntipatternReportStatus | string;

  /**
   * <p> A message about the status of the anti-pattern report generation. </p>
   */
  antipatternReportStatusMessage?: string;

  /**
   * <p> The type of server. </p>
   */
  serverType?: string;

  /**
   * <p> The timestamp of when the server was assessed. </p>
   */
  lastAnalyzedTimestamp?: Date;

  /**
   * <p>The error in server analysis.</p>
   */
  serverError?: ServerError;
}

export interface GetServerDetailsResponse {
  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   */
  nextToken?: string;

  /**
   * <p> Detailed information about the server. </p>
   */
  serverDetail?: ServerDetail;

  /**
   * <p> The associated application group the server belongs to, as defined in AWS Application Discovery Service.
   *     </p>
   */
  associatedApplications?: AssociatedApplication[];
}

export interface GetServerStrategiesRequest {
  /**
   * <p> The ID of the server. </p>
   */
  serverId: string | undefined;
}

/**
 * <p> Contains information about a strategy recommendation for a server. </p>
 */
export interface ServerStrategy {
  /**
   * <p> Strategy recommendation for the server. </p>
   */
  recommendation?: RecommendationSet;

  /**
   * <p> The recommendation status of the strategy for the server. </p>
   */
  status?: StrategyRecommendation | string;

  /**
   * <p> The number of application components with this strategy recommendation running on the
   *       server. </p>
   */
  numberOfApplicationComponents?: number;

  /**
   * <p> Set to true if the recommendation is set as preferred. </p>
   */
  isPreferred?: boolean;
}

export interface GetServerStrategiesResponse {
  /**
   * <p> A list of strategy recommendations for the server. </p>
   */
  serverStrategies?: ServerStrategy[];
}

export enum GroupName {
  EXTERNAL_ID = "ExternalId",
}

/**
 * <p> The object containing information about distinct imports or groups for Strategy Recommendations. </p>
 */
export interface Group {
  /**
   * <p> The key of the specific import group. </p>
   */
  name?: GroupName | string;

  /**
   * <p> The value of the specific import group. </p>
   */
  value?: string;
}

export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface ListApplicationComponentsRequest {
  /**
   * <p> Criteria for filtering the list of application components. </p>
   */
  applicationComponentCriteria?: ApplicationComponentCriteria | string;

  /**
   * <p> Specify the value based on the application component criteria type. For example, if
   *         <code>applicationComponentCriteria</code> is set to <code>SERVER_ID</code> and
   *         <code>filterValue</code> is set to <code>server1</code>, then <a>ListApplicationComponents</a> returns all the application components running on
   *       server1. </p>
   */
  filterValue?: string;

  /**
   * <p> Specifies whether to sort by ascending (<code>ASC</code>) or descending
   *         (<code>DESC</code>) order. </p>
   */
  sort?: SortOrder | string;

  /**
   * <p> The group ID specified in to filter on. </p>
   */
  groupIdFilter?: Group[];

  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   */
  maxResults?: number;
}

export interface ListApplicationComponentsResponse {
  /**
   * <p> The list of application components with detailed information about each component.
   *     </p>
   */
  applicationComponentInfos?: ApplicationComponentDetail[];

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * <p> Exception to indicate that the service-linked role (SLR) is locked. </p>
 */
export class ServiceLinkedRoleLockClientException extends __BaseException {
  readonly name: "ServiceLinkedRoleLockClientException" = "ServiceLinkedRoleLockClientException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLinkedRoleLockClientException, __BaseException>) {
    super({
      name: "ServiceLinkedRoleLockClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLinkedRoleLockClientException.prototype);
  }
}

export interface ListCollectorsRequest {
  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   */
  maxResults?: number;
}

export enum CollectorHealth {
  COLLECTOR_HEALTHY = "COLLECTOR_HEALTHY",
  COLLECTOR_UNHEALTHY = "COLLECTOR_UNHEALTHY",
}

/**
 * <p>IP address based configurations.</p>
 */
export interface IPAddressBasedRemoteInfo {
  /**
   * <p>The time stamp of the configuration.</p>
   */
  ipAddressConfigurationTimeStamp?: string;

  /**
   * <p>The type of authorization.</p>
   */
  authType?: AuthType | string;

  /**
   * <p>The type of the operating system.</p>
   */
  osType?: OSType | string;
}

export enum PipelineType {
  AZURE_DEVOPS = "AZURE_DEVOPS",
}

/**
 * <p>Detailed information of the pipeline.</p>
 */
export interface PipelineInfo {
  /**
   * <p>The type of pipeline.</p>
   */
  pipelineType?: PipelineType | string;

  /**
   * <p>The time when the pipeline info was configured.</p>
   */
  pipelineConfigurationTimeStamp?: string;
}

/**
 * <p>Information about the server configured for source code analysis.</p>
 */
export interface RemoteSourceCodeAnalysisServerInfo {
  /**
   * <p>The time when the remote source code server was configured.</p>
   */
  remoteSourceCodeAnalysisServerConfigurationTimestamp?: string;
}

/**
 * <p>Details about the server in vCenter.</p>
 */
export interface VcenterBasedRemoteInfo {
  /**
   * <p>The time when the remote server based on vCenter was last configured.</p>
   */
  vcenterConfigurationTimeStamp?: string;

  /**
   * <p>The type of the operating system.</p>
   */
  osType?: OSType | string;
}

export enum VersionControlType {
  AZURE_DEVOPS_GIT = "AZURE_DEVOPS_GIT",
  GITHUB = "GITHUB",
  GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE",
}

/**
 * <p>Details about the version control configuration.</p>
 */
export interface VersionControlInfo {
  /**
   * <p>The type of version control.</p>
   */
  versionControlType?: VersionControlType | string;

  /**
   * <p>The time when the version control system was last configured.</p>
   */
  versionControlConfigurationTimeStamp?: string;
}

/**
 * <p>Summary of the collector configuration.</p>
 */
export interface ConfigurationSummary {
  /**
   * <p>The list of vCenter configurations.</p>
   */
  vcenterBasedRemoteInfoList?: VcenterBasedRemoteInfo[];

  /**
   * <p>IP address based configurations.</p>
   */
  ipAddressBasedRemoteInfoList?: IPAddressBasedRemoteInfo[];

  /**
   * <p>The list of the version control configurations.</p>
   */
  versionControlInfoList?: VersionControlInfo[];

  /**
   * <p>The list of pipeline info configurations.</p>
   */
  pipelineInfoList?: PipelineInfo[];

  /**
   * <p>Info about the remote server source code configuration.</p>
   */
  remoteSourceCodeAnalysisServerInfo?: RemoteSourceCodeAnalysisServerInfo;
}

/**
 * <p> Process data collector that runs in the environment that you specify. </p>
 */
export interface Collector {
  /**
   * <p> The ID of the collector. </p>
   */
  collectorId?: string;

  /**
   * <p> IP address of the server that is hosting the collector. </p>
   */
  ipAddress?: string;

  /**
   * <p> Hostname of the server that is hosting the collector. </p>
   */
  hostName?: string;

  /**
   * <p> Indicates the health of a collector. </p>
   */
  collectorHealth?: CollectorHealth | string;

  /**
   * <p> Current version of the collector that is running in the environment that you specify.
   *     </p>
   */
  collectorVersion?: string;

  /**
   * <p> Time when the collector registered with the service. </p>
   */
  registeredTimeStamp?: string;

  /**
   * <p> Time when the collector last pinged the service. </p>
   */
  lastActivityTimeStamp?: string;

  /**
   * <p>Summary of the collector configuration.</p>
   */
  configurationSummary?: ConfigurationSummary;
}

export interface ListCollectorsResponse {
  /**
   * <p> The list of all the installed collectors. </p>
   */
  Collectors?: Collector[];

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   */
  nextToken?: string;
}

export interface ListImportFileTaskRequest {
  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   */
  nextToken?: string;

  /**
   * <p> The total number of items to return. The maximum value is 100. </p>
   */
  maxResults?: number;
}

/**
 * <p> Information about the import file tasks you request. </p>
 */
export interface ImportFileTaskInformation {
  /**
   * <p> The ID of the import file task. </p>
   */
  id?: string;

  /**
   * <p> Status of import file task. </p>
   */
  status?: ImportFileTaskStatus | string;

  /**
   * <p> Start time of the import task. </p>
   */
  startTime?: Date;

  /**
   * <p> The S3 bucket where the import file is located. </p>
   */
  inputS3Bucket?: string;

  /**
   * <p> The Amazon S3 key name of the import file. </p>
   */
  inputS3Key?: string;

  /**
   * <p> The S3 bucket name for status report of import task. </p>
   */
  statusReportS3Bucket?: string;

  /**
   * <p> The Amazon S3 key name for status report of import task. The report contains details about
   *       whether each record imported successfully or why it did not. </p>
   */
  statusReportS3Key?: string;

  /**
   * <p> The time that the import task completes. </p>
   */
  completionTime?: Date;

  /**
   * <p> The number of records successfully imported. </p>
   */
  numberOfRecordsSuccess?: number;

  /**
   * <p> The number of records that failed to be imported. </p>
   */
  numberOfRecordsFailed?: number;

  /**
   * <p> The name of the import task given in <code>StartImportFileTask</code>. </p>
   */
  importName?: string;
}

export interface ListImportFileTaskResponse {
  /**
   * <p> Lists information about the files you import.</p>
   */
  taskInfos?: ImportFileTaskInformation[];

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   */
  nextToken?: string;
}

export enum ServerCriteria {
  ANALYSIS_STATUS = "ANALYSIS_STATUS",
  DESTINATION = "DESTINATION",
  ERROR_CATEGORY = "ERROR_CATEGORY",
  NOT_DEFINED = "NOT_DEFINED",
  OS_NAME = "OS_NAME",
  SERVER_ID = "SERVER_ID",
  STRATEGY = "STRATEGY",
}

export interface ListServersRequest {
  /**
   * <p> Criteria for filtering servers. </p>
   */
  serverCriteria?: ServerCriteria | string;

  /**
   * <p> Specifies the filter value, which is based on the type of server criteria. For example,
   *       if <code>serverCriteria</code> is <code>OS_NAME</code>, and the <code>filterValue</code> is
   *       equal to <code>WindowsServer</code>, then <code>ListServers</code> returns all of the servers
   *       matching the OS name <code>WindowsServer</code>. </p>
   */
  filterValue?: string;

  /**
   * <p> Specifies whether to sort by ascending (<code>ASC</code>) or descending
   *         (<code>DESC</code>) order. </p>
   */
  sort?: SortOrder | string;

  /**
   * <p> Specifies the group ID to filter on. </p>
   */
  groupIdFilter?: Group[];

  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   */
  maxResults?: number;
}

export interface ListServersResponse {
  /**
   * <p> The list of servers with detailed information about each server. </p>
   */
  serverInfos?: ServerDetail[];

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * <p> Exception to indicate that there is an ongoing task when a new task is created. Return
 *       when once the existing tasks are complete. </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

export interface PutPortfolioPreferencesRequest {
  /**
   * <p> The rank of the business goals based on priority. </p>
   */
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;

  /**
   * <p> The transformation preferences for non-database applications. </p>
   */
  applicationPreferences?: ApplicationPreferences;

  /**
   * <p> The transformation preferences for database applications. </p>
   */
  databasePreferences?: DatabasePreferences;

  /**
   * <p>The classification for application component types.</p>
   */
  applicationMode?: ApplicationMode | string;
}

export interface PutPortfolioPreferencesResponse {}

/**
 * <p> The AWS account has reached its quota of imports. Contact AWS Support to increase the
 *       quota for this account. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

export interface StartAssessmentRequest {
  /**
   * <p> The S3 bucket used by the collectors to send analysis data to the service. The bucket
   *       name must begin with <code>migrationhub-strategy-</code>. </p>
   */
  s3bucketForAnalysisData?: string;

  /**
   * <p> The S3 bucket where all the reports generated by the service are stored. The bucket name
   *       must begin with <code>migrationhub-strategy-</code>. </p>
   */
  s3bucketForReportData?: string;

  /**
   * <p>List of criteria for assessment.</p>
   */
  assessmentTargets?: AssessmentTarget[];
}

export interface StartAssessmentResponse {
  /**
   * <p> The ID of the assessment. </p>
   */
  assessmentId?: string;
}

export enum DataSourceType {
  ADS = "ApplicationDiscoveryService",
  MPA = "MPA",
}

export interface StartImportFileTaskRequest {
  /**
   * <p> A descriptive name for the request. </p>
   */
  name: string | undefined;

  /**
   * <p> The S3 bucket where the import file is located. The bucket name is required to begin with
   *         <code>migrationhub-strategy-</code>.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p> The Amazon S3 key name of the import file. </p>
   */
  s3key: string | undefined;

  /**
   * <p>Specifies the source that the servers are coming from. By default, Strategy Recommendations assumes that
   *       the servers specified in the import file are available in AWS Application Discovery Service. </p>
   */
  dataSourceType?: DataSourceType | string;

  /**
   * <p>Groups the resources in the import file together with a unique name. This ID can be as
   *       filter in <code>ListApplicationComponents</code> and <code>ListServers</code>. </p>
   */
  groupId?: Group[];

  /**
   * <p> The S3 bucket where Strategy Recommendations uploads import results. The bucket name is required to
   *       begin with migrationhub-strategy-. </p>
   */
  s3bucketForReportData?: string;
}

export interface StartImportFileTaskResponse {
  /**
   * <p> The ID for a specific import task. The ID is unique within an AWS account. </p>
   */
  id?: string;
}

export enum OutputFormat {
  Excel = "Excel",
  Json = "Json",
}

export interface StartRecommendationReportGenerationRequest {
  /**
   * <p> The output format for the recommendation report file. The default format is Microsoft
   *       Excel. </p>
   */
  outputFormat?: OutputFormat | string;

  /**
   * <p> Groups the resources in the recommendation report with a unique name. </p>
   */
  groupIdFilter?: Group[];
}

export interface StartRecommendationReportGenerationResponse {
  /**
   * <p> The ID of the recommendation report generation task. </p>
   */
  id?: string;
}

export interface StopAssessmentRequest {
  /**
   * <p> The <code>assessmentId</code> returned by <a>StartAssessment</a>. </p>
   */
  assessmentId: string | undefined;
}

export interface StopAssessmentResponse {}

export enum VersionControl {
  AZURE_DEVOPS_GIT = "AZURE_DEVOPS_GIT",
  GITHUB = "GITHUB",
  GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE",
}

/**
 * <p> Object containing source code information that is linked to an application component.
 *     </p>
 */
export interface SourceCode {
  /**
   * <p> The type of repository to use for the source code. </p>
   */
  versionControl?: VersionControl | string;

  /**
   * <p> The branch of the source code. </p>
   */
  sourceVersion?: string;

  /**
   * <p> The repository name for the source code. </p>
   */
  location?: string;

  /**
   * <p>The name of the project.</p>
   */
  projectName?: string;
}

/**
 * <p> Information about all the available strategy options for migrating and modernizing an
 *       application component. </p>
 */
export interface StrategyOption {
  /**
   * <p> Type of transformation. For example, Rehost, Replatform, and so on. </p>
   */
  strategy?: Strategy | string;

  /**
   * <p> The name of the tool that can be used to transform an application component using this
   *       strategy. </p>
   */
  toolName?: TransformationToolName | string;

  /**
   * <p> Destination information about where the application component can migrate to. For
   *       example, <code>EC2</code>, <code>ECS</code>, and so on. </p>
   */
  targetDestination?: TargetDestination | string;

  /**
   * <p> Indicates if a specific strategy is preferred for the application component. </p>
   */
  isPreferred?: boolean;
}

export interface UpdateApplicationComponentConfigRequest {
  /**
   * <p> The ID of the application component. The ID is unique within an AWS account. </p>
   */
  applicationComponentId: string | undefined;

  /**
   * <p> Indicates whether the application component has been included for server recommendation
   *       or not. </p>
   */
  inclusionStatus?: InclusionStatus | string;

  /**
   * <p> The preferred strategy options for the application component. Use values from the <a>GetApplicationComponentStrategies</a> response. </p>
   */
  strategyOption?: StrategyOption;

  /**
   * <p> The list of source code configurations to update for the application component. </p>
   */
  sourceCodeList?: SourceCode[];

  /**
   * <p> Database credentials. </p>
   */
  secretsManagerKey?: string;

  /**
   * <p>Update the configuration request of an application component. If it is set to true, the
   *       source code and/or database credentials are updated. If it is set to false, the source code
   *       and/or database credentials are updated and an analysis is initiated.</p>
   */
  configureOnly?: boolean;

  /**
   * <p>The type of known component.</p>
   */
  appType?: AppType | string;
}

export interface UpdateApplicationComponentConfigResponse {}

export interface UpdateServerConfigRequest {
  /**
   * <p> The ID of the server. </p>
   */
  serverId: string | undefined;

  /**
   * <p> The preferred strategy options for the application component. See the response from <a>GetServerStrategies</a>.</p>
   */
  strategyOption?: StrategyOption;
}

export interface UpdateServerConfigResponse {}

/**
 * @internal
 */
export const AntipatternSeveritySummaryFilterSensitiveLog = (obj: AntipatternSeveritySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ObjectFilterSensitiveLog = (obj: S3Object): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppUnitErrorFilterSensitiveLog = (obj: AppUnitError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatabaseConfigDetailFilterSensitiveLog = (obj: DatabaseConfigDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformationToolFilterSensitiveLog = (obj: TransformationTool): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationSetFilterSensitiveLog = (obj: RecommendationSet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceCodeRepositoryFilterSensitiveLog = (obj: SourceCodeRepository): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationComponentDetailFilterSensitiveLog = (obj: ApplicationComponentDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationComponentStatusSummaryFilterSensitiveLog = (obj: ApplicationComponentStatusSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationComponentStrategyFilterSensitiveLog = (obj: ApplicationComponentStrategy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationComponentSummaryFilterSensitiveLog = (obj: ApplicationComponentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsManagedResourcesFilterSensitiveLog = (obj: AwsManagedResources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NoManagementPreferenceFilterSensitiveLog = (obj: NoManagementPreference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelfManageResourcesFilterSensitiveLog = (obj: SelfManageResources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManagementPreferenceFilterSensitiveLog = (obj: ManagementPreference): any => {
  if (obj.awsManagedResources !== undefined)
    return { awsManagedResources: AwsManagedResourcesFilterSensitiveLog(obj.awsManagedResources) };
  if (obj.selfManageResources !== undefined)
    return { selfManageResources: SelfManageResourcesFilterSensitiveLog(obj.selfManageResources) };
  if (obj.noPreference !== undefined)
    return { noPreference: NoManagementPreferenceFilterSensitiveLog(obj.noPreference) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ApplicationPreferencesFilterSensitiveLog = (obj: ApplicationPreferences): any => ({
  ...obj,
  ...(obj.managementPreference && {
    managementPreference: ManagementPreferenceFilterSensitiveLog(obj.managementPreference),
  }),
});

/**
 * @internal
 */
export const StrategySummaryFilterSensitiveLog = (obj: StrategySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerStatusSummaryFilterSensitiveLog = (obj: ServerStatusSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerSummaryFilterSensitiveLog = (obj: ServerSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentSummaryFilterSensitiveLog = (obj: AssessmentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssessmentTargetFilterSensitiveLog = (obj: AssessmentTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatedApplicationFilterSensitiveLog = (obj: AssociatedApplication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationComponentDetailsRequestFilterSensitiveLog = (
  obj: GetApplicationComponentDetailsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationComponentDetailsResponseFilterSensitiveLog = (
  obj: GetApplicationComponentDetailsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationComponentStrategiesRequestFilterSensitiveLog = (
  obj: GetApplicationComponentStrategiesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationComponentStrategiesResponseFilterSensitiveLog = (
  obj: GetApplicationComponentStrategiesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssessmentRequestFilterSensitiveLog = (obj: GetAssessmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataCollectionDetailsFilterSensitiveLog = (obj: DataCollectionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssessmentResponseFilterSensitiveLog = (obj: GetAssessmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImportFileTaskRequestFilterSensitiveLog = (obj: GetImportFileTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImportFileTaskResponseFilterSensitiveLog = (obj: GetImportFileTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLatestAssessmentIdRequestFilterSensitiveLog = (obj: GetLatestAssessmentIdRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLatestAssessmentIdResponseFilterSensitiveLog = (obj: GetLatestAssessmentIdResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPortfolioPreferencesRequestFilterSensitiveLog = (obj: GetPortfolioPreferencesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HeterogeneousFilterSensitiveLog = (obj: Heterogeneous): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HomogeneousFilterSensitiveLog = (obj: Homogeneous): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NoDatabaseMigrationPreferenceFilterSensitiveLog = (obj: NoDatabaseMigrationPreference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatabaseMigrationPreferenceFilterSensitiveLog = (obj: DatabaseMigrationPreference): any => {
  if (obj.heterogeneous !== undefined) return { heterogeneous: HeterogeneousFilterSensitiveLog(obj.heterogeneous) };
  if (obj.homogeneous !== undefined) return { homogeneous: HomogeneousFilterSensitiveLog(obj.homogeneous) };
  if (obj.noPreference !== undefined)
    return { noPreference: NoDatabaseMigrationPreferenceFilterSensitiveLog(obj.noPreference) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const DatabasePreferencesFilterSensitiveLog = (obj: DatabasePreferences): any => ({
  ...obj,
  ...(obj.databaseMigrationPreference && {
    databaseMigrationPreference: DatabaseMigrationPreferenceFilterSensitiveLog(obj.databaseMigrationPreference),
  }),
});

/**
 * @internal
 */
export const BusinessGoalsFilterSensitiveLog = (obj: BusinessGoals): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrioritizeBusinessGoalsFilterSensitiveLog = (obj: PrioritizeBusinessGoals): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPortfolioPreferencesResponseFilterSensitiveLog = (obj: GetPortfolioPreferencesResponse): any => ({
  ...obj,
  ...(obj.applicationPreferences && {
    applicationPreferences: ApplicationPreferencesFilterSensitiveLog(obj.applicationPreferences),
  }),
  ...(obj.databasePreferences && {
    databasePreferences: DatabasePreferencesFilterSensitiveLog(obj.databasePreferences),
  }),
});

/**
 * @internal
 */
export const GetPortfolioSummaryRequestFilterSensitiveLog = (obj: GetPortfolioSummaryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPortfolioSummaryResponseFilterSensitiveLog = (obj: GetPortfolioSummaryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRecommendationReportDetailsRequestFilterSensitiveLog = (
  obj: GetRecommendationReportDetailsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationReportDetailsFilterSensitiveLog = (obj: RecommendationReportDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRecommendationReportDetailsResponseFilterSensitiveLog = (
  obj: GetRecommendationReportDetailsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServerDetailsRequestFilterSensitiveLog = (obj: GetServerDetailsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerErrorFilterSensitiveLog = (obj: ServerError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInfoFilterSensitiveLog = (obj: NetworkInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OSInfoFilterSensitiveLog = (obj: OSInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SystemInfoFilterSensitiveLog = (obj: SystemInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerDetailFilterSensitiveLog = (obj: ServerDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServerDetailsResponseFilterSensitiveLog = (obj: GetServerDetailsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServerStrategiesRequestFilterSensitiveLog = (obj: GetServerStrategiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerStrategyFilterSensitiveLog = (obj: ServerStrategy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServerStrategiesResponseFilterSensitiveLog = (obj: GetServerStrategiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupFilterSensitiveLog = (obj: Group): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationComponentsRequestFilterSensitiveLog = (obj: ListApplicationComponentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationComponentsResponseFilterSensitiveLog = (obj: ListApplicationComponentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCollectorsRequestFilterSensitiveLog = (obj: ListCollectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IPAddressBasedRemoteInfoFilterSensitiveLog = (obj: IPAddressBasedRemoteInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineInfoFilterSensitiveLog = (obj: PipelineInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoteSourceCodeAnalysisServerInfoFilterSensitiveLog = (obj: RemoteSourceCodeAnalysisServerInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VcenterBasedRemoteInfoFilterSensitiveLog = (obj: VcenterBasedRemoteInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VersionControlInfoFilterSensitiveLog = (obj: VersionControlInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationSummaryFilterSensitiveLog = (obj: ConfigurationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CollectorFilterSensitiveLog = (obj: Collector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCollectorsResponseFilterSensitiveLog = (obj: ListCollectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImportFileTaskRequestFilterSensitiveLog = (obj: ListImportFileTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportFileTaskInformationFilterSensitiveLog = (obj: ImportFileTaskInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImportFileTaskResponseFilterSensitiveLog = (obj: ListImportFileTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServersRequestFilterSensitiveLog = (obj: ListServersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServersResponseFilterSensitiveLog = (obj: ListServersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPortfolioPreferencesRequestFilterSensitiveLog = (obj: PutPortfolioPreferencesRequest): any => ({
  ...obj,
  ...(obj.applicationPreferences && {
    applicationPreferences: ApplicationPreferencesFilterSensitiveLog(obj.applicationPreferences),
  }),
  ...(obj.databasePreferences && {
    databasePreferences: DatabasePreferencesFilterSensitiveLog(obj.databasePreferences),
  }),
});

/**
 * @internal
 */
export const PutPortfolioPreferencesResponseFilterSensitiveLog = (obj: PutPortfolioPreferencesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAssessmentRequestFilterSensitiveLog = (obj: StartAssessmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAssessmentResponseFilterSensitiveLog = (obj: StartAssessmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartImportFileTaskRequestFilterSensitiveLog = (obj: StartImportFileTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartImportFileTaskResponseFilterSensitiveLog = (obj: StartImportFileTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRecommendationReportGenerationRequestFilterSensitiveLog = (
  obj: StartRecommendationReportGenerationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRecommendationReportGenerationResponseFilterSensitiveLog = (
  obj: StartRecommendationReportGenerationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopAssessmentRequestFilterSensitiveLog = (obj: StopAssessmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopAssessmentResponseFilterSensitiveLog = (obj: StopAssessmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceCodeFilterSensitiveLog = (obj: SourceCode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StrategyOptionFilterSensitiveLog = (obj: StrategyOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationComponentConfigRequestFilterSensitiveLog = (
  obj: UpdateApplicationComponentConfigRequest
): any => ({
  ...obj,
  ...(obj.secretsManagerKey && { secretsManagerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateApplicationComponentConfigResponseFilterSensitiveLog = (
  obj: UpdateApplicationComponentConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateServerConfigRequestFilterSensitiveLog = (obj: UpdateServerConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateServerConfigResponseFilterSensitiveLog = (obj: UpdateServerConfigResponse): any => ({
  ...obj,
});
