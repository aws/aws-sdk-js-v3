// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { MigrationHubStrategyServiceException as __BaseException } from "./MigrationHubStrategyServiceException";

/**
 * <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 * @public
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

/**
 * @public
 * @enum
 */
export const RuntimeAnalysisStatus = {
  ANALYSIS_FAILED: "ANALYSIS_FAILED",
  ANALYSIS_STARTED: "ANALYSIS_STARTED",
  ANALYSIS_SUCCESS: "ANALYSIS_SUCCESS",
  ANALYSIS_TO_BE_SCHEDULED: "ANALYSIS_TO_BE_SCHEDULED",
} as const;

/**
 * @public
 */
export type RuntimeAnalysisStatus = (typeof RuntimeAnalysisStatus)[keyof typeof RuntimeAnalysisStatus];

/**
 * @public
 * @enum
 */
export const SrcCodeOrDbAnalysisStatus = {
  ANALYSIS_FAILED: "ANALYSIS_FAILED",
  ANALYSIS_PARTIAL_SUCCESS: "ANALYSIS_PARTIAL_SUCCESS",
  ANALYSIS_STARTED: "ANALYSIS_STARTED",
  ANALYSIS_SUCCESS: "ANALYSIS_SUCCESS",
  ANALYSIS_TO_BE_SCHEDULED: "ANALYSIS_TO_BE_SCHEDULED",
  CONFIGURED: "CONFIGURED",
  UNCONFIGURED: "UNCONFIGURED",
} as const;

/**
 * @public
 */
export type SrcCodeOrDbAnalysisStatus = (typeof SrcCodeOrDbAnalysisStatus)[keyof typeof SrcCodeOrDbAnalysisStatus];

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

  export interface Visitor<T> {
    runtimeAnalysisStatus: (value: RuntimeAnalysisStatus) => T;
    srcCodeOrDbAnalysisStatus: (value: SrcCodeOrDbAnalysisStatus) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AnalysisStatusUnion, visitor: Visitor<T>): T => {
    if (value.runtimeAnalysisStatus !== undefined) return visitor.runtimeAnalysisStatus(value.runtimeAnalysisStatus);
    if (value.srcCodeOrDbAnalysisStatus !== undefined)
      return visitor.srcCodeOrDbAnalysisStatus(value.srcCodeOrDbAnalysisStatus);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AnalysisType = {
  BINARY_ANALYSIS: "BINARY_ANALYSIS",
  DATABASE_ANALYSIS: "DATABASE_ANALYSIS",
  RUNTIME_ANALYSIS: "RUNTIME_ANALYSIS",
  SOURCE_CODE_ANALYSIS: "SOURCE_CODE_ANALYSIS",
} as const;

/**
 * @public
 */
export type AnalysisType = (typeof AnalysisType)[keyof typeof AnalysisType];

/**
 * Summary information about an analyzable server.
 * @public
 */
export interface AnalyzableServerSummary {
  /**
   * The host name of the analyzable server.
   * @public
   */
  hostname?: string;

  /**
   * The ip address of the analyzable server.
   * @public
   */
  ipAddress?: string;

  /**
   * The data source of the analyzable server.
   * @public
   */
  source?: string;

  /**
   * The virtual machine id of the analyzable server.
   * @public
   */
  vmId?: string;
}

/**
 * @public
 * @enum
 */
export const BinaryAnalyzerName = {
  BYTECODE_ANALYZER: "BYTECODE_ANALYZER",
  DLL_ANALYZER: "DLL_ANALYZER",
} as const;

/**
 * @public
 */
export type BinaryAnalyzerName = (typeof BinaryAnalyzerName)[keyof typeof BinaryAnalyzerName];

/**
 * @public
 * @enum
 */
export const RunTimeAnalyzerName = {
  A2C_ANALYZER: "A2C_ANALYZER",
  DATABASE_ANALYZER: "DATABASE_ANALYZER",
  EMP_PA_ANALYZER: "EMP_PA_ANALYZER",
  REHOST_ANALYZER: "REHOST_ANALYZER",
  SCT_ANALYZER: "SCT_ANALYZER",
} as const;

/**
 * @public
 */
export type RunTimeAnalyzerName = (typeof RunTimeAnalyzerName)[keyof typeof RunTimeAnalyzerName];

/**
 * @public
 * @enum
 */
export const SourceCodeAnalyzerName = {
  BYTECODE_ANALYZER: "BYTECODE_ANALYZER",
  CSHARP_ANALYZER: "CSHARP_ANALYZER",
  JAVA_ANALYZER: "JAVA_ANALYZER",
  PORTING_ASSISTANT: "PORTING_ASSISTANT",
} as const;

/**
 * @public
 */
export type SourceCodeAnalyzerName = (typeof SourceCodeAnalyzerName)[keyof typeof SourceCodeAnalyzerName];

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

  export interface Visitor<T> {
    binaryAnalyzerName: (value: BinaryAnalyzerName) => T;
    runTimeAnalyzerName: (value: RunTimeAnalyzerName) => T;
    sourceCodeAnalyzerName: (value: SourceCodeAnalyzerName) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AnalyzerNameUnion, visitor: Visitor<T>): T => {
    if (value.binaryAnalyzerName !== undefined) return visitor.binaryAnalyzerName(value.binaryAnalyzerName);
    if (value.runTimeAnalyzerName !== undefined) return visitor.runTimeAnalyzerName(value.runTimeAnalyzerName);
    if (value.sourceCodeAnalyzerName !== undefined) return visitor.sourceCodeAnalyzerName(value.sourceCodeAnalyzerName);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
  s3Bucket?: string;

  /**
   * <p> The Amazon S3 key name. </p>
   * @public
   */
  s3key?: string;
}

/**
 * @public
 * @enum
 */
export const AntipatternReportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type AntipatternReportStatus = (typeof AntipatternReportStatus)[keyof typeof AntipatternReportStatus];

/**
 * <p>The anti-pattern report result.</p>
 * @public
 */
export interface AntipatternReportResult {
  /**
   * <p>The analyzer name.</p>
   * @public
   */
  analyzerName?: AnalyzerNameUnion;

  /**
   * <p> Contains the S3 bucket name and the Amazon S3 key name. </p>
   * @public
   */
  antiPatternReportS3Object?: S3Object;

  /**
   * <p>The status of the anti-pattern report generation.</p>
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus;

  /**
   * <p>The status message for the anti-pattern.</p>
   * @public
   */
  antipatternReportStatusMessage?: string;
}

/**
 * @public
 * @enum
 */
export const Severity = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * <p> Contains the summary of anti-patterns and their severity. </p>
 * @public
 */
export interface AntipatternSeveritySummary {
  /**
   * <p> Contains the severity of anti-patterns. </p>
   * @public
   */
  severity?: Severity;

  /**
   * <p> Contains the count of anti-patterns. </p>
   * @public
   */
  count?: number;
}

/**
 * @public
 * @enum
 */
export const ApplicationComponentCriteria = {
  ANALYSIS_STATUS: "ANALYSIS_STATUS",
  APP_NAME: "APP_NAME",
  APP_TYPE: "APP_TYPE",
  DESTINATION: "DESTINATION",
  ERROR_CATEGORY: "ERROR_CATEGORY",
  NOT_DEFINED: "NOT_DEFINED",
  SERVER_ID: "SERVER_ID",
  STRATEGY: "STRATEGY",
} as const;

/**
 * @public
 */
export type ApplicationComponentCriteria =
  (typeof ApplicationComponentCriteria)[keyof typeof ApplicationComponentCriteria];

/**
 * @public
 * @enum
 */
export const AppType = {
  IIS: "IIS",
  cassandra: "Cassandra",
  db2: "DB2",
  dotNetFramework: "DotNetFramework",
  dotnet: "Dotnet",
  dotnetcore: "DotnetCore",
  java: "Java",
  jboss: "JBoss",
  mariadb: "Maria DB",
  mongodb: "Mongo DB",
  mysql: "MySQL",
  oracle: "Oracle",
  other: "Other",
  postgresqlserver: "PostgreSQLServer",
  spring: "Spring",
  sqlServer: "SQLServer",
  sybase: "Sybase",
  tomcat: "Tomcat",
  unknown: "Unknown",
  visualbasic: "Visual Basic",
  weblogic: "Oracle WebLogic",
  websphere: "IBM WebSphere",
} as const;

/**
 * @public
 */
export type AppType = (typeof AppType)[keyof typeof AppType];

/**
 * @public
 * @enum
 */
export const AppUnitErrorCategory = {
  CONNECTIVITY_ERROR: "CONNECTIVITY_ERROR",
  CREDENTIAL_ERROR: "CREDENTIAL_ERROR",
  OTHER_ERROR: "OTHER_ERROR",
  PERMISSION_ERROR: "PERMISSION_ERROR",
  UNSUPPORTED_ERROR: "UNSUPPORTED_ERROR",
} as const;

/**
 * @public
 */
export type AppUnitErrorCategory = (typeof AppUnitErrorCategory)[keyof typeof AppUnitErrorCategory];

/**
 * <p>Error in the analysis of the application unit.</p>
 * @public
 */
export interface AppUnitError {
  /**
   * <p>The category of the error.</p>
   * @public
   */
  appUnitErrorCategory?: AppUnitErrorCategory;
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
  secretName?: string;
}

/**
 * @public
 * @enum
 */
export const InclusionStatus = {
  EXCLUDE_FROM_RECOMMENDATION: "excludeFromAssessment",
  INCLUDE_IN_RECOMMENDATION: "includeInAssessment",
} as const;

/**
 * @public
 */
export type InclusionStatus = (typeof InclusionStatus)[keyof typeof InclusionStatus];

/**
 * @public
 * @enum
 */
export const Strategy = {
  REFACTOR: "Refactor",
  REHOST: "Rehost",
  RELOCATE: "Relocate",
  REPLATFORM: "Replatform",
  REPURCHASE: "Repurchase",
  RETAIN: "Retain",
  RETIREMENT: "Retirement",
} as const;

/**
 * @public
 */
export type Strategy = (typeof Strategy)[keyof typeof Strategy];

/**
 * @public
 * @enum
 */
export const TargetDestination = {
  AMAZON_DOCUMENTDB: "Amazon DocumentDB",
  AMAZON_DYNAMODB: "Amazon DynamoDB",
  AMAZON_ELASTIC_CLOUD_COMPUTE: "Amazon Elastic Cloud Compute (EC2)",
  AMAZON_ELASTIC_CONTAINER_SERVICE: "Amazon Elastic Container Service (ECS)",
  AMAZON_ELASTIC_KUBERNETES_SERVICE: "Amazon Elastic Kubernetes Service (EKS)",
  AMAZON_RDS: "Amazon Relational Database Service",
  AMAZON_RDS_MYSQL: "Amazon Relational Database Service on MySQL",
  AMAZON_RDS_POSTGRESQL: "Amazon Relational Database Service on PostgreSQL",
  AURORA_MYSQL: "Aurora MySQL",
  AURORA_POSTGRESQL: "Aurora PostgreSQL",
  AWS_ELASTIC_BEANSTALK: "AWS Elastic BeanStalk",
  AWS_FARGATE: "AWS Fargate",
  BABELFISH_AURORA_POSTGRESQL: "Babelfish for Aurora PostgreSQL",
  NONE_SPECIFIED: "None specified",
} as const;

/**
 * @public
 */
export type TargetDestination = (typeof TargetDestination)[keyof typeof TargetDestination];

/**
 * @public
 * @enum
 */
export const TransformationToolName = {
  APP2CONTAINER: "App2Container",
  DMS: "Database Migration Service",
  EMP: "End of Support Migration",
  IN_PLACE_OS_UPGRADE: "In Place Operating System Upgrade",
  MGN: "Application Migration Service",
  NATIVE_SQL: "Native SQL Server Backup/Restore",
  PORTING_ASSISTANT: "Porting Assistant For .NET",
  SCT: "Schema Conversion Tool",
  STRATEGY_RECOMMENDATION_SUPPORT: "Strategy Recommendation Support",
  WWAMA: "Windows Web Application Migration Assistant",
} as const;

/**
 * @public
 */
export type TransformationToolName = (typeof TransformationToolName)[keyof typeof TransformationToolName];

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
  name?: TransformationToolName;

  /**
   * <p> Description of the tool. </p>
   * @public
   */
  description?: string;

  /**
   * <p> URL for installing the tool. </p>
   * @public
   */
  tranformationToolInstallationLink?: string;
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
  transformationTool?: TransformationTool;

  /**
   * <p> The recommended target destination. </p>
   * @public
   */
  targetDestination?: TargetDestination;

  /**
   * <p> The recommended strategy. </p>
   * @public
   */
  strategy?: Strategy;
}

/**
 * @public
 * @enum
 */
export const ResourceSubType = {
  DATABASE: "Database",
  DATABASE_PROCESS: "DatabaseProcess",
  PROCESS: "Process",
} as const;

/**
 * @public
 */
export type ResourceSubType = (typeof ResourceSubType)[keyof typeof ResourceSubType];

/**
 * <p>The error in server analysis.</p>
 * @public
 */
export interface Result {
  /**
   * <p>The error in server analysis.</p>
   * @public
   */
  analysisType?: AnalysisType;

  /**
   * <p>The error in server analysis.</p>
   * @public
   */
  analysisStatus?: AnalysisStatusUnion;

  /**
   * <p>The error in server analysis.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The error in server analysis.</p>
   * @public
   */
  antipatternReportResultList?: AntipatternReportResult[];
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
  repository?: string;

  /**
   * <p> The branch of the source code. </p>
   * @public
   */
  branch?: string;

  /**
   * <p> The type of repository to use for the source code. </p>
   * @public
   */
  versionControlType?: string;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  projectName?: string;
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
  id?: string;

  /**
   * <p> The name of application component. </p>
   * @public
   */
  name?: string;

  /**
   * <p> The top recommendation set for the application component. </p>
   * @public
   */
  recommendationSet?: RecommendationSet;

  /**
   * <p> The status of analysis, if the application component has source code or an associated
   *       database. </p>
   * @public
   */
  analysisStatus?: SrcCodeOrDbAnalysisStatus;

  /**
   * <p> A detailed description of the analysis status and any failure message. </p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p> A list of anti-pattern severity summaries. </p>
   * @public
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];

  /**
   * <p> Configuration details for the database associated with the application component. </p>
   * @public
   */
  databaseConfigDetail?: DatabaseConfigDetail;

  /**
   * <p> Details about the source code repository associated with the application component.
   *     </p>
   * @public
   */
  sourceCodeRepositories?: SourceCodeRepository[];

  /**
   * <p> The type of application component. </p>
   * @public
   */
  appType?: AppType;

  /**
   * <p> The application component subtype.</p>
   * @public
   */
  resourceSubType?: ResourceSubType;

  /**
   * <p> Indicates whether the application component has been included for server recommendation
   *       or not. </p>
   * @public
   */
  inclusionStatus?: InclusionStatus;

  /**
   * <p> The S3 bucket name and the Amazon S3 key name for the anti-pattern report. </p>
   * @public
   */
  antipatternReportS3Object?: S3Object;

  /**
   * <p> The status of the anti-pattern report generation.</p>
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus;

  /**
   * <p> The status message for the anti-pattern. </p>
   * @public
   */
  antipatternReportStatusMessage?: string;

  /**
   * <p> OS version. </p>
   * @public
   */
  osVersion?: string;

  /**
   * <p> OS driver. </p>
   * @public
   */
  osDriver?: string;

  /**
   * <p> The timestamp of when the application component was assessed. </p>
   * @public
   */
  lastAnalyzedTimestamp?: Date;

  /**
   * <p> The ID of the server that the application component is running on. </p>
   * @public
   */
  associatedServerId?: string;

  /**
   * <p> Set to true if the application component is running on multiple servers.</p>
   * @public
   */
  moreServerAssociationExists?: boolean;

  /**
   * <p>The status of the application unit.</p>
   * @public
   */
  runtimeStatus?: RuntimeAnalysisStatus;

  /**
   * <p>The status message for the application unit.</p>
   * @public
   */
  runtimeStatusMessage?: string;

  /**
   * <p>The error in the analysis of the source code or database.</p>
   * @public
   */
  appUnitError?: AppUnitError;

  /**
   * <p>A list of the analysis results.</p>
   * @public
   */
  resultList?: Result[];
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
  srcCodeOrDbAnalysisStatus?: SrcCodeOrDbAnalysisStatus;

  /**
   * <p>The number of application components successfully analyzed, partially successful or failed
   *       analysis.</p>
   * @public
   */
  count?: number;
}

/**
 * @public
 * @enum
 */
export const StrategyRecommendation = {
  NOT_RECOMMENDED: "notRecommended",
  POTENTIAL: "potential",
  RECOMMENDED: "recommended",
  VIABLE_OPTION: "viableOption",
} as const;

/**
 * @public
 */
export type StrategyRecommendation = (typeof StrategyRecommendation)[keyof typeof StrategyRecommendation];

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
  recommendation?: RecommendationSet;

  /**
   * <p> The recommendation status of a strategy for an application component. </p>
   * @public
   */
  status?: StrategyRecommendation;

  /**
   * <p> Set to true if the recommendation is set as preferred. </p>
   * @public
   */
  isPreferred?: boolean;
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
  appType?: AppType;

  /**
   * <p> Contains the count of application type. </p>
   * @public
   */
  count?: number;
}

/**
 * @public
 * @enum
 */
export const ApplicationMode = {
  ALL: "ALL",
  KNOWN: "KNOWN",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type ApplicationMode = (typeof ApplicationMode)[keyof typeof ApplicationMode];

/**
 * @public
 * @enum
 */
export const AwsManagedTargetDestination = {
  AWS_ELASTIC_BEANSTALK: "AWS Elastic BeanStalk",
  AWS_FARGATE: "AWS Fargate",
  NONE_SPECIFIED: "None specified",
} as const;

/**
 * @public
 */
export type AwsManagedTargetDestination =
  (typeof AwsManagedTargetDestination)[keyof typeof AwsManagedTargetDestination];

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
 * @public
 * @enum
 */
export const NoPreferenceTargetDestination = {
  AMAZON_ELASTIC_CLOUD_COMPUTE: "Amazon Elastic Cloud Compute (EC2)",
  AMAZON_ELASTIC_CONTAINER_SERVICE: "Amazon Elastic Container Service (ECS)",
  AMAZON_ELASTIC_KUBERNETES_SERVICE: "Amazon Elastic Kubernetes Service (EKS)",
  AWS_ELASTIC_BEANSTALK: "AWS Elastic BeanStalk",
  AWS_FARGATE: "AWS Fargate",
  NONE_SPECIFIED: "None specified",
} as const;

/**
 * @public
 */
export type NoPreferenceTargetDestination =
  (typeof NoPreferenceTargetDestination)[keyof typeof NoPreferenceTargetDestination];

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
 * @public
 * @enum
 */
export const SelfManageTargetDestination = {
  AMAZON_ELASTIC_CLOUD_COMPUTE: "Amazon Elastic Cloud Compute (EC2)",
  AMAZON_ELASTIC_CONTAINER_SERVICE: "Amazon Elastic Container Service (ECS)",
  AMAZON_ELASTIC_KUBERNETES_SERVICE: "Amazon Elastic Kubernetes Service (EKS)",
  NONE_SPECIFIED: "None specified",
} as const;

/**
 * @public
 */
export type SelfManageTargetDestination =
  (typeof SelfManageTargetDestination)[keyof typeof SelfManageTargetDestination];

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
 * @public
 */
export interface ApplicationPreferences {
  /**
   * <p> Application preferences that you specify to prefer managed environment. </p>
   * @public
   */
  managementPreference?: ManagementPreference;
}

/**
 * @public
 * @enum
 */
export const AssessmentDataSourceType = {
  ADS: "ApplicationDiscoveryService",
  MANUAL_IMPORT: "ManualImport",
  SR_COLLECTOR: "StrategyRecommendationsApplicationDataCollector",
} as const;

/**
 * @public
 */
export type AssessmentDataSourceType = (typeof AssessmentDataSourceType)[keyof typeof AssessmentDataSourceType];

/**
 * @public
 * @enum
 */
export const AssessmentStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type AssessmentStatus = (typeof AssessmentStatus)[keyof typeof AssessmentStatus];

/**
 * <p> Object containing the summary of the strategy recommendations. </p>
 * @public
 */
export interface StrategySummary {
  /**
   * <p> The name of recommended strategy. </p>
   * @public
   */
  strategy?: Strategy;

  /**
   * <p> The count of recommendations per strategy. </p>
   * @public
   */
  count?: number;
}

/**
 * @public
 * @enum
 */
export const RunTimeAssessmentStatus = {
  DC_FAILED: "dataCollectionTaskFailed",
  DC_PARTIAL_SUCCESS: "dataCollectionTaskPartialSuccess",
  DC_REQ_SENT: "dataCollectionTaskScheduled",
  DC_STARTED: "dataCollectionTaskStarted",
  DC_STOPPED: "dataCollectionTaskStopped",
  DC_SUCCESS: "dataCollectionTaskSuccess",
  DC_TO_BE_SCHEDULED: "dataCollectionTaskToBeScheduled",
} as const;

/**
 * @public
 */
export type RunTimeAssessmentStatus = (typeof RunTimeAssessmentStatus)[keyof typeof RunTimeAssessmentStatus];

/**
 * <p>The status summary of the server analysis.</p>
 * @public
 */
export interface ServerStatusSummary {
  /**
   * <p>The status of the run time.</p>
   * @public
   */
  runTimeAssessmentStatus?: RunTimeAssessmentStatus;

  /**
   * <p>The number of servers successfully analyzed, partially successful or failed
   *       analysis.</p>
   * @public
   */
  count?: number;
}

/**
 * @public
 * @enum
 */
export const ServerOsType = {
  amazonLinux: "AmazonLinux",
  endOfSupportWindowsServer: "EndOfSupportWindowsServer",
  other: "Other",
  redhat: "Redhat",
  windowsServer: "WindowsServer",
} as const;

/**
 * @public
 */
export type ServerOsType = (typeof ServerOsType)[keyof typeof ServerOsType];

/**
 * <p> Object containing details about the servers imported by Application Discovery Service </p>
 * @public
 */
export interface ServerSummary {
  /**
   * <p> Type of operating system for the servers. </p>
   * @public
   */
  ServerOsType?: ServerOsType;

  /**
   * <p> Number of servers. </p>
   * @public
   */
  count?: number;
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
  listServerStrategySummary?: StrategySummary[];

  /**
   * <p> List of ApplicationComponentStrategySummary. </p>
   * @public
   */
  listApplicationComponentStrategySummary?: StrategySummary[];

  /**
   * <p> List of AntipatternSeveritySummary. </p>
   * @public
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];

  /**
   * <p> List of ApplicationComponentSummary. </p>
   * @public
   */
  listApplicationComponentSummary?: ApplicationComponentSummary[];

  /**
   * <p> List of ServerSummary. </p>
   * @public
   */
  listServerSummary?: ServerSummary[];

  /**
   * <p> The Amazon S3 object containing the anti-pattern report. </p>
   * @public
   */
  antipatternReportS3Object?: S3Object;

  /**
   * <p> The status of the anti-pattern report. </p>
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus;

  /**
   * <p> The status message of the anti-pattern report. </p>
   * @public
   */
  antipatternReportStatusMessage?: string;

  /**
   * <p> The time the assessment was performed. </p>
   * @public
   */
  lastAnalyzedTimestamp?: Date;

  /**
   * <p>List of status summaries of the analyzed application components.</p>
   * @public
   */
  listApplicationComponentStatusSummary?: ApplicationComponentStatusSummary[];

  /**
   * <p>List of status summaries of the analyzed servers.</p>
   * @public
   */
  listServerStatusSummary?: ServerStatusSummary[];
}

/**
 * @public
 * @enum
 */
export const Condition = {
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  NOT_CONTAINS: "NOT_CONTAINS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;

/**
 * @public
 */
export type Condition = (typeof Condition)[keyof typeof Condition];

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
  name?: string;

  /**
   * <p> ID of the application as defined in Application Discovery Service. </p>
   * @public
   */
  id?: string;
}

/**
 * @public
 * @enum
 */
export const AuthType = {
  CERT: "CERT",
  NTLM: "NTLM",
  SSH: "SSH",
} as const;

/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

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
  applicationComponentDetail?: ApplicationComponentDetail;

  /**
   * <p> The associated application group as defined in AWS Application Discovery Service. </p>
   * @public
   */
  associatedApplications?: AssociatedApplication[];

  /**
   * <p> Set to true if the application component belongs to more than one application group.
   *     </p>
   * @public
   */
  moreApplicationResource?: boolean;

  /**
   * <p> A list of the IDs of the servers on which the application component is running. </p>
   * @public
   */
  associatedServerIds?: string[];
}

/**
 * <p> The server experienced an internal error. Try again. </p>
 * @public
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
 * @public
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
 * @public
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
  applicationComponentStrategies?: ApplicationComponentStrategy[];
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
  status?: AssessmentStatus;

  /**
   * <p> The total number of servers in the assessment. </p>
   * @public
   */
  servers?: number;

  /**
   * <p> The number of failed servers in the assessment. </p>
   * @public
   */
  failed?: number;

  /**
   * <p> The number of successful servers in the assessment. </p>
   * @public
   */
  success?: number;

  /**
   * <p> The number of servers with the assessment status <code>IN_PROGESS</code>. </p>
   * @public
   */
  inProgress?: number;

  /**
   * <p> The start time of assessment. </p>
   * @public
   */
  startTime?: Date;

  /**
   * <p> The time the assessment completes. </p>
   * @public
   */
  completionTime?: Date;

  /**
   * <p>The status message of the assessment.</p>
   * @public
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface GetAssessmentResponse {
  /**
   * <p> The ID for the specific assessment task. </p>
   * @public
   */
  id?: string;

  /**
   * <p> Detailed information about the assessment. </p>
   * @public
   */
  dataCollectionDetails?: DataCollectionDetails;

  /**
   * <p>List of criteria for assessment.</p>
   * @public
   */
  assessmentTargets?: AssessmentTarget[];
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
 * @enum
 */
export const ImportFileTaskStatus = {
  DELETE_FAILED: "DeleteFailed",
  DELETE_IN_PROGRESS: "DeleteInProgress",
  DELETE_PARTIAL_SUCCESS: "DeletePartialSuccess",
  DELETE_SUCCESS: "DeleteSuccess",
  IMPORT_FAILED: "ImportFailed",
  IMPORT_IN_PROGRESS: "ImportInProgress",
  IMPORT_PARTIAL_SUCCESS: "ImportPartialSuccess",
  IMPORT_SUCCESS: "ImportSuccess",
} as const;

/**
 * @public
 */
export type ImportFileTaskStatus = (typeof ImportFileTaskStatus)[keyof typeof ImportFileTaskStatus];

/**
 * @public
 */
export interface GetImportFileTaskResponse {
  /**
   * <p> The import file task <code>id</code> returned in the response of <a>StartImportFileTask</a>. </p>
   * @public
   */
  id?: string;

  /**
   * <p> Status of import file task. </p>
   * @public
   */
  status?: ImportFileTaskStatus;

  /**
   * <p> Start time of the import task. </p>
   * @public
   */
  startTime?: Date;

  /**
   * <p> The S3 bucket where import file is located. </p>
   * @public
   */
  inputS3Bucket?: string;

  /**
   * <p> The Amazon S3 key name of the import file. </p>
   * @public
   */
  inputS3Key?: string;

  /**
   * <p> The S3 bucket name for status report of import task. </p>
   * @public
   */
  statusReportS3Bucket?: string;

  /**
   * <p> The Amazon S3 key name for status report of import task. The report contains details about
   *       whether each record imported successfully or why it did not.</p>
   * @public
   */
  statusReportS3Key?: string;

  /**
   * <p> The time that the import task completed. </p>
   * @public
   */
  completionTime?: Date;

  /**
   * <p> The number of records successfully imported. </p>
   * @public
   */
  numberOfRecordsSuccess?: number;

  /**
   * <p> The number of records that failed to be imported. </p>
   * @public
   */
  numberOfRecordsFailed?: number;

  /**
   * <p> The name of the import task given in <a>StartImportFileTask</a>. </p>
   * @public
   */
  importName?: string;
}

/**
 * <p> The request body isn't valid. </p>
 * @public
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
 * @public
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
  id?: string;
}

/**
 * @public
 */
export interface GetPortfolioPreferencesRequest {}

/**
 * @public
 * @enum
 */
export const DatabaseManagementPreference = {
  AWS_MANAGED: "AWS-managed",
  NO_PREFERENCE: "No preference",
  SELF_MANAGE: "Self-manage",
} as const;

/**
 * @public
 */
export type DatabaseManagementPreference =
  (typeof DatabaseManagementPreference)[keyof typeof DatabaseManagementPreference];

/**
 * @public
 * @enum
 */
export const HeterogeneousTargetDatabaseEngine = {
  AMAZON_AURORA: "Amazon Aurora",
  AWS_POSTGRESQL: "AWS PostgreSQL",
  DB2_LUW: "Db2 LUW",
  MARIA_DB: "MariaDB",
  MICROSOFT_SQL_SERVER: "Microsoft SQL Server",
  MONGO_DB: "MongoDB",
  MYSQL: "MySQL",
  NONE_SPECIFIED: "None specified",
  ORACLE_DATABASE: "Oracle Database",
  SAP: "SAP",
} as const;

/**
 * @public
 */
export type HeterogeneousTargetDatabaseEngine =
  (typeof HeterogeneousTargetDatabaseEngine)[keyof typeof HeterogeneousTargetDatabaseEngine];

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
 * @public
 * @enum
 */
export const HomogeneousTargetDatabaseEngine = {
  NONE_SPECIFIED: "None specified",
} as const;

/**
 * @public
 */
export type HomogeneousTargetDatabaseEngine =
  (typeof HomogeneousTargetDatabaseEngine)[keyof typeof HomogeneousTargetDatabaseEngine];

/**
 * <p> The object containing details about homogeneous database preferences. </p>
 * @public
 */
export interface Homogeneous {
  /**
   * <p> The target database engine for homogeneous database migration preferences. </p>
   * @public
   */
  targetDatabaseEngine?: HomogeneousTargetDatabaseEngine[];
}

/**
 * @public
 * @enum
 */
export const TargetDatabaseEngine = {
  AMAZON_AURORA: "Amazon Aurora",
  AWS_POSTGRESQL: "AWS PostgreSQL",
  DB2_LUW: "Db2 LUW",
  MARIA_DB: "MariaDB",
  MICROSOFT_SQL_SERVER: "Microsoft SQL Server",
  MONGO_DB: "MongoDB",
  MYSQL: "MySQL",
  NONE_SPECIFIED: "None specified",
  ORACLE_DATABASE: "Oracle Database",
  SAP: "SAP",
} as const;

/**
 * @public
 */
export type TargetDatabaseEngine = (typeof TargetDatabaseEngine)[keyof typeof TargetDatabaseEngine];

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
 * @public
 */
export interface DatabasePreferences {
  /**
   * <p> Specifies whether you're interested in self-managed databases or databases managed by
   *       AWS. </p>
   * @public
   */
  databaseManagementPreference?: DatabaseManagementPreference;

  /**
   * <p> Specifies your preferred migration path. </p>
   * @public
   */
  databaseMigrationPreference?: DatabaseMigrationPreference;
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
  speedOfMigration?: number;

  /**
   * <p> Business goal to reduce the operational overhead on the team by moving into managed
   *       services. </p>
   * @public
   */
  reduceOperationalOverheadWithManagedServices?: number;

  /**
   * <p> Business goal to modernize infrastructure by moving to cloud native technologies. </p>
   * @public
   */
  modernizeInfrastructureWithCloudNativeTechnologies?: number;

  /**
   * <p> Business goal to reduce license costs. </p>
   * @public
   */
  licenseCostReduction?: number;
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
  businessGoals?: BusinessGoals;
}

/**
 * @public
 */
export interface GetPortfolioPreferencesResponse {
  /**
   * <p> The rank of business goals based on priority. </p>
   * @public
   */
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;

  /**
   * <p> The transformation preferences for non-database applications. </p>
   * @public
   */
  applicationPreferences?: ApplicationPreferences;

  /**
   * <p> The transformation preferences for database applications. </p>
   * @public
   */
  databasePreferences?: DatabasePreferences;

  /**
   * <p>The classification for application component types.</p>
   * @public
   */
  applicationMode?: ApplicationMode;
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
  assessmentSummary?: AssessmentSummary;
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
 * @public
 * @enum
 */
export const RecommendationReportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type RecommendationReportStatus = (typeof RecommendationReportStatus)[keyof typeof RecommendationReportStatus];

/**
 * <p> Contains detailed information about a recommendation report. </p>
 * @public
 */
export interface RecommendationReportDetails {
  /**
   * <p> The status of the recommendation report generation task. </p>
   * @public
   */
  status?: RecommendationReportStatus;

  /**
   * <p> The status message for recommendation report generation. </p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p> The time that the recommendation report generation task starts. </p>
   * @public
   */
  startTime?: Date;

  /**
   * <p> The time that the recommendation report generation task completes. </p>
   * @public
   */
  completionTime?: Date;

  /**
   * <p> The S3 bucket where the report file is located. </p>
   * @public
   */
  s3Bucket?: string;

  /**
   * <p> The Amazon S3 key name of the report file. </p>
   * @public
   */
  s3Keys?: string[];
}

/**
 * @public
 */
export interface GetRecommendationReportDetailsResponse {
  /**
   * <p> The ID of the recommendation report generation task. See the response of <a>StartRecommendationReportGeneration</a>. </p>
   * @public
   */
  id?: string;

  /**
   * <p> Detailed information about the recommendation report. </p>
   * @public
   */
  recommendationReportDetails?: RecommendationReportDetails;
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
  nextToken?: string;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const ServerErrorCategory = {
  ARCHITECTURE_ERROR: "ARCHITECTURE_ERROR",
  CONNECTIVITY_ERROR: "CONNECTIVITY_ERROR",
  CREDENTIAL_ERROR: "CREDENTIAL_ERROR",
  OTHER_ERROR: "OTHER_ERROR",
  PERMISSION_ERROR: "PERMISSION_ERROR",
} as const;

/**
 * @public
 */
export type ServerErrorCategory = (typeof ServerErrorCategory)[keyof typeof ServerErrorCategory];

/**
 * <p>The error in server analysis.</p>
 * @public
 */
export interface ServerError {
  /**
   * <p>The error category of server analysis.</p>
   * @public
   */
  serverErrorCategory?: ServerErrorCategory;
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
 * @public
 * @enum
 */
export const OSType = {
  LINUX: "LINUX",
  WINDOWS: "WINDOWS",
} as const;

/**
 * @public
 */
export type OSType = (typeof OSType)[keyof typeof OSType];

/**
 * <p> Information about the operating system. </p>
 * @public
 */
export interface OSInfo {
  /**
   * <p> Information about the type of operating system. </p>
   * @public
   */
  type?: OSType;

  /**
   * <p> Information about the version of operating system. </p>
   * @public
   */
  version?: string;
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
  osInfo?: OSInfo;

  /**
   * <p> File system type for the server. </p>
   * @public
   */
  fileSystemType?: string;

  /**
   * <p> Networking information related to a server. </p>
   * @public
   */
  networkInfoList?: NetworkInfo[];

  /**
   * <p> CPU architecture type for the server. </p>
   * @public
   */
  cpuArchitecture?: string;
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
  id?: string;

  /**
   * <p> The name of the server. </p>
   * @public
   */
  name?: string;

  /**
   * <p> A set of recommendations. </p>
   * @public
   */
  recommendationSet?: RecommendationSet;

  /**
   * <p> The status of assessment for the server. </p>
   * @public
   */
  dataCollectionStatus?: RunTimeAssessmentStatus;

  /**
   * <p> A message about the status of data collection, which contains detailed descriptions of
   *       any error messages. </p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p> A list of anti-pattern severity summaries. </p>
   * @public
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];

  /**
   * <p> System information about the server. </p>
   * @public
   */
  systemInfo?: SystemInfo;

  /**
   * <p> A list of strategy summaries. </p>
   * @public
   */
  applicationComponentStrategySummary?: StrategySummary[];

  /**
   * <p> The S3 bucket name and Amazon S3 key name for anti-pattern report. </p>
   * @public
   */
  antipatternReportS3Object?: S3Object;

  /**
   * <p> The status of the anti-pattern report generation. </p>
   * @public
   */
  antipatternReportStatus?: AntipatternReportStatus;

  /**
   * <p> A message about the status of the anti-pattern report generation. </p>
   * @public
   */
  antipatternReportStatusMessage?: string;

  /**
   * <p> The type of server. </p>
   * @public
   */
  serverType?: string;

  /**
   * <p> The timestamp of when the server was assessed. </p>
   * @public
   */
  lastAnalyzedTimestamp?: Date;

  /**
   * <p>The error in server analysis.</p>
   * @public
   */
  serverError?: ServerError;
}

/**
 * @public
 */
export interface GetServerDetailsResponse {
  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p> Detailed information about the server. </p>
   * @public
   */
  serverDetail?: ServerDetail;

  /**
   * <p> The associated application group the server belongs to, as defined in AWS Application Discovery Service.
   *     </p>
   * @public
   */
  associatedApplications?: AssociatedApplication[];
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
  recommendation?: RecommendationSet;

  /**
   * <p> The recommendation status of the strategy for the server. </p>
   * @public
   */
  status?: StrategyRecommendation;

  /**
   * <p> The number of application components with this strategy recommendation running on the
   *       server. </p>
   * @public
   */
  numberOfApplicationComponents?: number;

  /**
   * <p> Set to true if the recommendation is set as preferred. </p>
   * @public
   */
  isPreferred?: boolean;
}

/**
 * @public
 */
export interface GetServerStrategiesResponse {
  /**
   * <p> A list of strategy recommendations for the server. </p>
   * @public
   */
  serverStrategies?: ServerStrategy[];
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * Represents input for ListAnalyzableServers operation.
 * @public
 */
export interface ListAnalyzableServersRequest {
  /**
   * Specifies whether to sort by ascending (ASC) or descending (DESC) order.
   * @public
   */
  sort?: SortOrder;

  /**
   * The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set maxResults to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
   * @public
   */
  nextToken?: string;

  /**
   * The maximum number of items to include in the response. The maximum value is 100.
   * @public
   */
  maxResults?: number;
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
  analyzableServers?: AnalyzableServerSummary[];

  /**
   * The token you use to retrieve the next set of results, or null if there are no more results.
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const GroupName = {
  EXTERNAL_ID: "ExternalId",
  EXTERNAL_SOURCE_TYPE: "ExternalSourceType",
} as const;

/**
 * @public
 */
export type GroupName = (typeof GroupName)[keyof typeof GroupName];

/**
 * <p> The object containing information about distinct imports or groups for Strategy Recommendations. </p>
 * @public
 */
export interface Group {
  /**
   * <p> The key of the specific import group. </p>
   * @public
   */
  name?: GroupName;

  /**
   * <p> The value of the specific import group. </p>
   * @public
   */
  value?: string;
}

/**
 * @public
 */
export interface ListApplicationComponentsRequest {
  /**
   * <p> Criteria for filtering the list of application components. </p>
   * @public
   */
  applicationComponentCriteria?: ApplicationComponentCriteria;

  /**
   * <p> Specify the value based on the application component criteria type. For example, if
   *         <code>applicationComponentCriteria</code> is set to <code>SERVER_ID</code> and
   *         <code>filterValue</code> is set to <code>server1</code>, then <a>ListApplicationComponents</a> returns all the application components running on
   *       server1. </p>
   * @public
   */
  filterValue?: string;

  /**
   * <p> Specifies whether to sort by ascending (<code>ASC</code>) or descending
   *         (<code>DESC</code>) order. </p>
   * @public
   */
  sort?: SortOrder;

  /**
   * <p> The group ID specified in to filter on. </p>
   * @public
   */
  groupIdFilter?: Group[];

  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   * @public
   */
  maxResults?: number;
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
  applicationComponentInfos?: ApplicationComponentDetail[];

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p> Exception to indicate that the service-linked role (SLR) is locked. </p>
 * @public
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
  nextToken?: string;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const CollectorHealth = {
  COLLECTOR_HEALTHY: "COLLECTOR_HEALTHY",
  COLLECTOR_UNHEALTHY: "COLLECTOR_UNHEALTHY",
} as const;

/**
 * @public
 */
export type CollectorHealth = (typeof CollectorHealth)[keyof typeof CollectorHealth];

/**
 * <p>IP address based configurations.</p>
 * @public
 */
export interface IPAddressBasedRemoteInfo {
  /**
   * <p>The time stamp of the configuration.</p>
   * @public
   */
  ipAddressConfigurationTimeStamp?: string;

  /**
   * <p>The type of authorization.</p>
   * @public
   */
  authType?: AuthType;

  /**
   * <p>The type of the operating system.</p>
   * @public
   */
  osType?: OSType;
}

/**
 * @public
 * @enum
 */
export const PipelineType = {
  AZURE_DEVOPS: "AZURE_DEVOPS",
} as const;

/**
 * @public
 */
export type PipelineType = (typeof PipelineType)[keyof typeof PipelineType];

/**
 * <p>Detailed information of the pipeline.</p>
 * @public
 */
export interface PipelineInfo {
  /**
   * <p>The type of pipeline.</p>
   * @public
   */
  pipelineType?: PipelineType;

  /**
   * <p>The time when the pipeline info was configured.</p>
   * @public
   */
  pipelineConfigurationTimeStamp?: string;
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
  remoteSourceCodeAnalysisServerConfigurationTimestamp?: string;
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
  vcenterConfigurationTimeStamp?: string;

  /**
   * <p>The type of the operating system.</p>
   * @public
   */
  osType?: OSType;
}

/**
 * @public
 * @enum
 */
export const VersionControlType = {
  AZURE_DEVOPS_GIT: "AZURE_DEVOPS_GIT",
  GITHUB: "GITHUB",
  GITHUB_ENTERPRISE: "GITHUB_ENTERPRISE",
} as const;

/**
 * @public
 */
export type VersionControlType = (typeof VersionControlType)[keyof typeof VersionControlType];

/**
 * <p>Details about the version control configuration.</p>
 * @public
 */
export interface VersionControlInfo {
  /**
   * <p>The type of version control.</p>
   * @public
   */
  versionControlType?: VersionControlType;

  /**
   * <p>The time when the version control system was last configured.</p>
   * @public
   */
  versionControlConfigurationTimeStamp?: string;
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
  vcenterBasedRemoteInfoList?: VcenterBasedRemoteInfo[];

  /**
   * <p>IP address based configurations.</p>
   * @public
   */
  ipAddressBasedRemoteInfoList?: IPAddressBasedRemoteInfo[];

  /**
   * <p>The list of the version control configurations.</p>
   * @public
   */
  versionControlInfoList?: VersionControlInfo[];

  /**
   * <p>The list of pipeline info configurations.</p>
   * @public
   */
  pipelineInfoList?: PipelineInfo[];

  /**
   * <p>Info about the remote server source code configuration.</p>
   * @public
   */
  remoteSourceCodeAnalysisServerInfo?: RemoteSourceCodeAnalysisServerInfo;
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
  collectorId?: string;

  /**
   * <p> IP address of the server that is hosting the collector. </p>
   * @public
   */
  ipAddress?: string;

  /**
   * <p> Hostname of the server that is hosting the collector. </p>
   * @public
   */
  hostName?: string;

  /**
   * <p> Indicates the health of a collector. </p>
   * @public
   */
  collectorHealth?: CollectorHealth;

  /**
   * <p> Current version of the collector that is running in the environment that you specify.
   *     </p>
   * @public
   */
  collectorVersion?: string;

  /**
   * <p> Time when the collector registered with the service. </p>
   * @public
   */
  registeredTimeStamp?: string;

  /**
   * <p> Time when the collector last pinged the service. </p>
   * @public
   */
  lastActivityTimeStamp?: string;

  /**
   * <p>Summary of the collector configuration.</p>
   * @public
   */
  configurationSummary?: ConfigurationSummary;
}

/**
 * @public
 */
export interface ListCollectorsResponse {
  /**
   * <p> The list of all the installed collectors. </p>
   * @public
   */
  Collectors?: Collector[];

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   * @public
   */
  nextToken?: string;
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
  nextToken?: string;

  /**
   * <p> The total number of items to return. The maximum value is 100. </p>
   * @public
   */
  maxResults?: number;
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
  id?: string;

  /**
   * <p> Status of import file task. </p>
   * @public
   */
  status?: ImportFileTaskStatus;

  /**
   * <p> Start time of the import task. </p>
   * @public
   */
  startTime?: Date;

  /**
   * <p> The S3 bucket where the import file is located. </p>
   * @public
   */
  inputS3Bucket?: string;

  /**
   * <p> The Amazon S3 key name of the import file. </p>
   * @public
   */
  inputS3Key?: string;

  /**
   * <p> The S3 bucket name for status report of import task. </p>
   * @public
   */
  statusReportS3Bucket?: string;

  /**
   * <p> The Amazon S3 key name for status report of import task. The report contains details about
   *       whether each record imported successfully or why it did not. </p>
   * @public
   */
  statusReportS3Key?: string;

  /**
   * <p> The time that the import task completes. </p>
   * @public
   */
  completionTime?: Date;

  /**
   * <p> The number of records successfully imported. </p>
   * @public
   */
  numberOfRecordsSuccess?: number;

  /**
   * <p> The number of records that failed to be imported. </p>
   * @public
   */
  numberOfRecordsFailed?: number;

  /**
   * <p> The name of the import task given in <code>StartImportFileTask</code>. </p>
   * @public
   */
  importName?: string;
}

/**
 * @public
 */
export interface ListImportFileTaskResponse {
  /**
   * <p> Lists information about the files you import.</p>
   * @public
   */
  taskInfos?: ImportFileTaskInformation[];

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ServerCriteria = {
  ANALYSIS_STATUS: "ANALYSIS_STATUS",
  DESTINATION: "DESTINATION",
  ERROR_CATEGORY: "ERROR_CATEGORY",
  NOT_DEFINED: "NOT_DEFINED",
  OS_NAME: "OS_NAME",
  SERVER_ID: "SERVER_ID",
  STRATEGY: "STRATEGY",
} as const;

/**
 * @public
 */
export type ServerCriteria = (typeof ServerCriteria)[keyof typeof ServerCriteria];

/**
 * @public
 */
export interface ListServersRequest {
  /**
   * <p> Criteria for filtering servers. </p>
   * @public
   */
  serverCriteria?: ServerCriteria;

  /**
   * <p> Specifies the filter value, which is based on the type of server criteria. For example,
   *       if <code>serverCriteria</code> is <code>OS_NAME</code>, and the <code>filterValue</code> is
   *       equal to <code>WindowsServer</code>, then <code>ListServers</code> returns all of the servers
   *       matching the OS name <code>WindowsServer</code>. </p>
   * @public
   */
  filterValue?: string;

  /**
   * <p> Specifies whether to sort by ascending (<code>ASC</code>) or descending
   *         (<code>DESC</code>) order. </p>
   * @public
   */
  sort?: SortOrder;

  /**
   * <p> Specifies the group ID to filter on. </p>
   * @public
   */
  groupIdFilter?: Group[];

  /**
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListServersResponse {
  /**
   * <p> The list of servers with detailed information about each server. </p>
   * @public
   */
  serverInfos?: ServerDetail[];

  /**
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p> Exception to indicate that there is an ongoing task when a new task is created. Return
 *       when once the existing tasks are complete. </p>
 * @public
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

/**
 * @public
 */
export interface PutPortfolioPreferencesRequest {
  /**
   * <p> The rank of the business goals based on priority. </p>
   * @public
   */
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;

  /**
   * <p> The transformation preferences for non-database applications. </p>
   * @public
   */
  applicationPreferences?: ApplicationPreferences;

  /**
   * <p> The transformation preferences for database applications. </p>
   * @public
   */
  databasePreferences?: DatabasePreferences;

  /**
   * <p>The classification for application component types.</p>
   * @public
   */
  applicationMode?: ApplicationMode;
}

/**
 * @public
 */
export interface PutPortfolioPreferencesResponse {}

/**
 * <p> The AWS account has reached its quota of imports. Contact AWS Support to increase the
 *       quota for this account. </p>
 * @public
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

/**
 * @public
 */
export interface StartAssessmentRequest {
  /**
   * <p> The S3 bucket used by the collectors to send analysis data to the service. The bucket
   *       name must begin with <code>migrationhub-strategy-</code>. </p>
   * @public
   */
  s3bucketForAnalysisData?: string;

  /**
   * <p> The S3 bucket where all the reports generated by the service are stored. The bucket name
   *       must begin with <code>migrationhub-strategy-</code>. </p>
   * @public
   */
  s3bucketForReportData?: string;

  /**
   * <p>List of criteria for assessment.</p>
   * @public
   */
  assessmentTargets?: AssessmentTarget[];

  /**
   * The data source type of an assessment to be started.
   * @public
   */
  assessmentDataSourceType?: AssessmentDataSourceType;
}

/**
 * @public
 */
export interface StartAssessmentResponse {
  /**
   * <p> The ID of the assessment. </p>
   * @public
   */
  assessmentId?: string;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  ADS: "ApplicationDiscoveryService",
  IMPORT: "Import",
  MHSR_COLLECTOR: "StrategyRecommendationsApplicationDataCollector",
  MPA: "MPA",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

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
  dataSourceType?: DataSourceType;

  /**
   * <p>Groups the resources in the import file together with a unique name. This ID can be as
   *       filter in <code>ListApplicationComponents</code> and <code>ListServers</code>. </p>
   * @public
   */
  groupId?: Group[];

  /**
   * <p> The S3 bucket where Strategy Recommendations uploads import results. The bucket name is required to
   *       begin with migrationhub-strategy-. </p>
   * @public
   */
  s3bucketForReportData?: string;
}

/**
 * @public
 */
export interface StartImportFileTaskResponse {
  /**
   * <p> The ID for a specific import task. The ID is unique within an AWS account. </p>
   * @public
   */
  id?: string;
}

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  Excel: "Excel",
  Json: "Json",
} as const;

/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 */
export interface StartRecommendationReportGenerationRequest {
  /**
   * <p> The output format for the recommendation report file. The default format is Microsoft
   *       Excel. </p>
   * @public
   */
  outputFormat?: OutputFormat;

  /**
   * <p> Groups the resources in the recommendation report with a unique name. </p>
   * @public
   */
  groupIdFilter?: Group[];
}

/**
 * @public
 */
export interface StartRecommendationReportGenerationResponse {
  /**
   * <p> The ID of the recommendation report generation task. </p>
   * @public
   */
  id?: string;
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
 * @public
 * @enum
 */
export const VersionControl = {
  AZURE_DEVOPS_GIT: "AZURE_DEVOPS_GIT",
  GITHUB: "GITHUB",
  GITHUB_ENTERPRISE: "GITHUB_ENTERPRISE",
} as const;

/**
 * @public
 */
export type VersionControl = (typeof VersionControl)[keyof typeof VersionControl];

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
  versionControl?: VersionControl;

  /**
   * <p> The branch of the source code. </p>
   * @public
   */
  sourceVersion?: string;

  /**
   * <p> The repository name for the source code. </p>
   * @public
   */
  location?: string;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  projectName?: string;
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
  strategy?: Strategy;

  /**
   * <p> The name of the tool that can be used to transform an application component using this
   *       strategy. </p>
   * @public
   */
  toolName?: TransformationToolName;

  /**
   * <p> Destination information about where the application component can migrate to. For
   *       example, <code>EC2</code>, <code>ECS</code>, and so on. </p>
   * @public
   */
  targetDestination?: TargetDestination;

  /**
   * <p> Indicates if a specific strategy is preferred for the application component. </p>
   * @public
   */
  isPreferred?: boolean;
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
  inclusionStatus?: InclusionStatus;

  /**
   * <p> The preferred strategy options for the application component. Use values from the <a>GetApplicationComponentStrategies</a> response. </p>
   * @public
   */
  strategyOption?: StrategyOption;

  /**
   * <p> The list of source code configurations to update for the application component. </p>
   * @public
   */
  sourceCodeList?: SourceCode[];

  /**
   * <p> Database credentials. </p>
   * @public
   */
  secretsManagerKey?: string;

  /**
   * <p>Update the configuration request of an application component. If it is set to true, the
   *       source code and/or database credentials are updated. If it is set to false, the source code
   *       and/or database credentials are updated and an analysis is initiated.</p>
   * @public
   */
  configureOnly?: boolean;

  /**
   * <p>The type of known component.</p>
   * @public
   */
  appType?: AppType;
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
  strategyOption?: StrategyOption;
}

/**
 * @public
 */
export interface UpdateServerConfigResponse {}

/**
 * @internal
 */
export const UpdateApplicationComponentConfigRequestFilterSensitiveLog = (
  obj: UpdateApplicationComponentConfigRequest
): any => ({
  ...obj,
  ...(obj.secretsManagerKey && { secretsManagerKey: SENSITIVE_STRING }),
});
