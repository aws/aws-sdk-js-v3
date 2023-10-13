// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { MigrationHubStrategyServiceException as __BaseException } from "./MigrationHubStrategyServiceException";

/**
 * @public
 * <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
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
 * @public
 * <p>A combination of existing analysis statuses.</p>
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
   * @public
   * <p>The status of the analysis.</p>
   */
  export interface RuntimeAnalysisStatusMember {
    runtimeAnalysisStatus: RuntimeAnalysisStatus;
    srcCodeOrDbAnalysisStatus?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The status of the source code or database analysis.</p>
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
 * @public
 * <p>The combination of the existing analyzers.</p>
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
   * @public
   * <p>The binary analyzer names.</p>
   */
  export interface BinaryAnalyzerNameMember {
    binaryAnalyzerName: BinaryAnalyzerName;
    runTimeAnalyzerName?: never;
    sourceCodeAnalyzerName?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The assessment analyzer names.</p>
   */
  export interface RunTimeAnalyzerNameMember {
    binaryAnalyzerName?: never;
    runTimeAnalyzerName: RunTimeAnalyzerName;
    sourceCodeAnalyzerName?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The source code analyzer names.</p>
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
 * @public
 * <p> Contains the S3 bucket name and the Amazon S3 key name. </p>
 */
export interface S3Object {
  /**
   * @public
   * <p> The S3 bucket name. </p>
   */
  s3Bucket?: string;

  /**
   * @public
   * <p> The Amazon S3 key name. </p>
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
 * @public
 * <p>The anti-pattern report result.</p>
 */
export interface AntipatternReportResult {
  /**
   * @public
   * <p>The analyzer name.</p>
   */
  analyzerName?: AnalyzerNameUnion;

  /**
   * @public
   * <p> Contains the S3 bucket name and the Amazon S3 key name. </p>
   */
  antiPatternReportS3Object?: S3Object;

  /**
   * @public
   * <p>The status of the anti-pattern report generation.</p>
   */
  antipatternReportStatus?: AntipatternReportStatus;

  /**
   * @public
   * <p>The status message for the anti-pattern.</p>
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
 * @public
 * <p> Contains the summary of anti-patterns and their severity. </p>
 */
export interface AntipatternSeveritySummary {
  /**
   * @public
   * <p> Contains the severity of anti-patterns. </p>
   */
  severity?: Severity;

  /**
   * @public
   * <p> Contains the count of anti-patterns. </p>
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
 * @public
 * <p>Error in the analysis of the application unit.</p>
 */
export interface AppUnitError {
  /**
   * @public
   * <p>The category of the error.</p>
   */
  appUnitErrorCategory?: AppUnitErrorCategory;
}

/**
 * @public
 * <p> Configuration information used for assessing databases. </p>
 */
export interface DatabaseConfigDetail {
  /**
   * @public
   * <p> AWS Secrets Manager key that holds the credentials that you use to connect to a database.
   *     </p>
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
 * @public
 * <p> Information of the transformation tool that can be used to migrate and modernize the
 *       application. </p>
 */
export interface TransformationTool {
  /**
   * @public
   * <p> Name of the tool. </p>
   */
  name?: TransformationToolName;

  /**
   * @public
   * <p> Description of the tool. </p>
   */
  description?: string;

  /**
   * @public
   * <p> URL for installing the tool. </p>
   */
  tranformationToolInstallationLink?: string;
}

/**
 * @public
 * <p> Contains a recommendation set. </p>
 */
export interface RecommendationSet {
  /**
   * @public
   * <p> The target destination for the recommendation set. </p>
   */
  transformationTool?: TransformationTool;

  /**
   * @public
   * <p> The recommended target destination. </p>
   */
  targetDestination?: TargetDestination;

  /**
   * @public
   * <p> The recommended strategy. </p>
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
 * @public
 * <p>The error in server analysis.</p>
 */
export interface Result {
  /**
   * @public
   * <p>The error in server analysis.</p>
   */
  analysisType?: AnalysisType;

  /**
   * @public
   * <p>The error in server analysis.</p>
   */
  analysisStatus?: AnalysisStatusUnion;

  /**
   * @public
   * <p>The error in server analysis.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The error in server analysis.</p>
   */
  antipatternReportResultList?: AntipatternReportResult[];
}

/**
 * @public
 * <p> Object containing source code information that is linked to an application component.
 *     </p>
 */
export interface SourceCodeRepository {
  /**
   * @public
   * <p> The repository name for the source code. </p>
   */
  repository?: string;

  /**
   * @public
   * <p> The branch of the source code. </p>
   */
  branch?: string;

  /**
   * @public
   * <p> The type of repository to use for the source code. </p>
   */
  versionControlType?: string;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  projectName?: string;
}

/**
 * @public
 * <p> Contains detailed information about an application component. </p>
 */
export interface ApplicationComponentDetail {
  /**
   * @public
   * <p> The ID of the application component. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name of application component. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The top recommendation set for the application component. </p>
   */
  recommendationSet?: RecommendationSet;

  /**
   * @public
   * <p> The status of analysis, if the application component has source code or an associated
   *       database. </p>
   */
  analysisStatus?: SrcCodeOrDbAnalysisStatus;

  /**
   * @public
   * <p> A detailed description of the analysis status and any failure message. </p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p> A list of anti-pattern severity summaries. </p>
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];

  /**
   * @public
   * <p> Configuration details for the database associated with the application component. </p>
   */
  databaseConfigDetail?: DatabaseConfigDetail;

  /**
   * @public
   * <p> Details about the source code repository associated with the application component.
   *     </p>
   */
  sourceCodeRepositories?: SourceCodeRepository[];

  /**
   * @public
   * <p> The type of application component. </p>
   */
  appType?: AppType;

  /**
   * @public
   * <p> The application component subtype.</p>
   */
  resourceSubType?: ResourceSubType;

  /**
   * @public
   * <p> Indicates whether the application component has been included for server recommendation
   *       or not. </p>
   */
  inclusionStatus?: InclusionStatus;

  /**
   * @public
   * <p> The S3 bucket name and the Amazon S3 key name for the anti-pattern report. </p>
   */
  antipatternReportS3Object?: S3Object;

  /**
   * @public
   * <p> The status of the anti-pattern report generation.</p>
   */
  antipatternReportStatus?: AntipatternReportStatus;

  /**
   * @public
   * <p> The status message for the anti-pattern. </p>
   */
  antipatternReportStatusMessage?: string;

  /**
   * @public
   * <p> OS version. </p>
   */
  osVersion?: string;

  /**
   * @public
   * <p> OS driver. </p>
   */
  osDriver?: string;

  /**
   * @public
   * <p> The timestamp of when the application component was assessed. </p>
   */
  lastAnalyzedTimestamp?: Date;

  /**
   * @public
   * <p> The ID of the server that the application component is running on. </p>
   */
  associatedServerId?: string;

  /**
   * @public
   * <p> Set to true if the application component is running on multiple servers.</p>
   */
  moreServerAssociationExists?: boolean;

  /**
   * @public
   * <p>The status of the application unit.</p>
   */
  runtimeStatus?: RuntimeAnalysisStatus;

  /**
   * @public
   * <p>The status message for the application unit.</p>
   */
  runtimeStatusMessage?: string;

  /**
   * @public
   * <p>The error in the analysis of the source code or database.</p>
   */
  appUnitError?: AppUnitError;

  /**
   * @public
   * <p>A list of the analysis results.</p>
   */
  resultList?: Result[];
}

/**
 * @public
 * <p>Summary of the analysis status of the application component.</p>
 */
export interface ApplicationComponentStatusSummary {
  /**
   * @public
   * <p>The status of database analysis.</p>
   */
  srcCodeOrDbAnalysisStatus?: SrcCodeOrDbAnalysisStatus;

  /**
   * @public
   * <p>The number of application components successfully analyzed, partially successful or failed
   *       analysis.</p>
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
 * @public
 * <p> Contains information about a strategy recommendation for an application component.
 *     </p>
 */
export interface ApplicationComponentStrategy {
  /**
   * @public
   * <p> Strategy recommendation for the application component. </p>
   */
  recommendation?: RecommendationSet;

  /**
   * @public
   * <p> The recommendation status of a strategy for an application component. </p>
   */
  status?: StrategyRecommendation;

  /**
   * @public
   * <p> Set to true if the recommendation is set as preferred. </p>
   */
  isPreferred?: boolean;
}

/**
 * @public
 * <p> Contains the summary of application components. </p>
 */
export interface ApplicationComponentSummary {
  /**
   * @public
   * <p> Contains the name of application types. </p>
   */
  appType?: AppType;

  /**
   * @public
   * <p> Contains the count of application type. </p>
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
 * @public
 * <p> Object containing the choice of application destination that you specify. </p>
 */
export interface AwsManagedResources {
  /**
   * @public
   * <p> The choice of application destination that you specify. </p>
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
 * @public
 * <p> Object containing the choice of application destination that you specify. </p>
 */
export interface NoManagementPreference {
  /**
   * @public
   * <p> The choice of application destination that you specify. </p>
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
 * @public
 * <p> Self-managed resources. </p>
 */
export interface SelfManageResources {
  /**
   * @public
   * <p> Self-managed resources target destination. </p>
   */
  targetDestination: SelfManageTargetDestination[] | undefined;
}

/**
 * @public
 * <p> Preferences for migrating an application to AWS. </p>
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
   * @public
   * <p> Indicates interest in solutions that are managed by AWS. </p>
   */
  export interface AwsManagedResourcesMember {
    awsManagedResources: AwsManagedResources;
    selfManageResources?: never;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p> Indicates interest in managing your own resources on AWS. </p>
   */
  export interface SelfManageResourcesMember {
    awsManagedResources?: never;
    selfManageResources: SelfManageResources;
    noPreference?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p> No specific preference. </p>
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
 * @public
 * <p> Application preferences that you specify. </p>
 */
export interface ApplicationPreferences {
  /**
   * @public
   * <p> Application preferences that you specify to prefer managed environment. </p>
   */
  managementPreference?: ManagementPreference;
}

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
 * @public
 * <p> Object containing the summary of the strategy recommendations. </p>
 */
export interface StrategySummary {
  /**
   * @public
   * <p> The name of recommended strategy. </p>
   */
  strategy?: Strategy;

  /**
   * @public
   * <p> The count of recommendations per strategy. </p>
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
 * @public
 * <p>The status summary of the server analysis.</p>
 */
export interface ServerStatusSummary {
  /**
   * @public
   * <p>The status of the run time.</p>
   */
  runTimeAssessmentStatus?: RunTimeAssessmentStatus;

  /**
   * @public
   * <p>The number of servers successfully analyzed, partially successful or failed
   *       analysis.</p>
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
 * @public
 * <p> Object containing details about the servers imported by Application Discovery Service </p>
 */
export interface ServerSummary {
  /**
   * @public
   * <p> Type of operating system for the servers. </p>
   */
  ServerOsType?: ServerOsType;

  /**
   * @public
   * <p> Number of servers. </p>
   */
  count?: number;
}

/**
 * @public
 * <p> Contains the summary of the assessment results. </p>
 */
export interface AssessmentSummary {
  /**
   * @public
   * <p> List of ServerStrategySummary. </p>
   */
  listServerStrategySummary?: StrategySummary[];

  /**
   * @public
   * <p> List of ApplicationComponentStrategySummary. </p>
   */
  listApplicationComponentStrategySummary?: StrategySummary[];

  /**
   * @public
   * <p> List of AntipatternSeveritySummary. </p>
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];

  /**
   * @public
   * <p> List of ApplicationComponentSummary. </p>
   */
  listApplicationComponentSummary?: ApplicationComponentSummary[];

  /**
   * @public
   * <p> List of ServerSummary. </p>
   */
  listServerSummary?: ServerSummary[];

  /**
   * @public
   * <p> The Amazon S3 object containing the anti-pattern report. </p>
   */
  antipatternReportS3Object?: S3Object;

  /**
   * @public
   * <p> The status of the anti-pattern report. </p>
   */
  antipatternReportStatus?: AntipatternReportStatus;

  /**
   * @public
   * <p> The status message of the anti-pattern report. </p>
   */
  antipatternReportStatusMessage?: string;

  /**
   * @public
   * <p> The time the assessment was performed. </p>
   */
  lastAnalyzedTimestamp?: Date;

  /**
   * @public
   * <p>List of status summaries of the analyzed application components.</p>
   */
  listApplicationComponentStatusSummary?: ApplicationComponentStatusSummary[];

  /**
   * @public
   * <p>List of status summaries of the analyzed servers.</p>
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
 * @public
 * <p>Defines the criteria of assessment.</p>
 */
export interface AssessmentTarget {
  /**
   * @public
   * <p>Condition of an assessment.</p>
   */
  condition: Condition | undefined;

  /**
   * @public
   * <p>Name of an assessment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Values of an assessment.</p>
   */
  values: string[] | undefined;
}

/**
 * @public
 * <p> Object containing details about applications as defined in Application Discovery Service. </p>
 */
export interface AssociatedApplication {
  /**
   * @public
   * <p> Name of the application as defined in Application Discovery Service. </p>
   */
  name?: string;

  /**
   * @public
   * <p> ID of the application as defined in Application Discovery Service. </p>
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
   * @public
   * <p> The ID of the application component. The ID is unique within an AWS account.</p>
   */
  applicationComponentId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationComponentDetailsResponse {
  /**
   * @public
   * <p> Detailed information about an application component. </p>
   */
  applicationComponentDetail?: ApplicationComponentDetail;

  /**
   * @public
   * <p> The associated application group as defined in AWS Application Discovery Service. </p>
   */
  associatedApplications?: AssociatedApplication[];

  /**
   * @public
   * <p> Set to true if the application component belongs to more than one application group.
   *     </p>
   */
  moreApplicationResource?: boolean;

  /**
   * @public
   * <p> A list of the IDs of the servers on which the application component is running. </p>
   */
  associatedServerIds?: string[];
}

/**
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface GetApplicationComponentStrategiesRequest {
  /**
   * @public
   * <p> The ID of the application component. The ID is unique within an AWS account.</p>
   */
  applicationComponentId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationComponentStrategiesResponse {
  /**
   * @public
   * <p> A list of application component strategy recommendations. </p>
   */
  applicationComponentStrategies?: ApplicationComponentStrategy[];
}

/**
 * @public
 */
export interface GetAssessmentRequest {
  /**
   * @public
   * <p> The <code>assessmentid</code> returned by <a>StartAssessment</a>.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p> Detailed information about an assessment. </p>
 */
export interface DataCollectionDetails {
  /**
   * @public
   * <p> The status of the assessment. </p>
   */
  status?: AssessmentStatus;

  /**
   * @public
   * <p> The total number of servers in the assessment. </p>
   */
  servers?: number;

  /**
   * @public
   * <p> The number of failed servers in the assessment. </p>
   */
  failed?: number;

  /**
   * @public
   * <p> The number of successful servers in the assessment. </p>
   */
  success?: number;

  /**
   * @public
   * <p> The number of servers with the assessment status <code>IN_PROGESS</code>. </p>
   */
  inProgress?: number;

  /**
   * @public
   * <p> The start time of assessment. </p>
   */
  startTime?: Date;

  /**
   * @public
   * <p> The time the assessment completes. </p>
   */
  completionTime?: Date;

  /**
   * @public
   * <p>The status message of the assessment.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface GetAssessmentResponse {
  /**
   * @public
   * <p> The ID for the specific assessment task. </p>
   */
  id?: string;

  /**
   * @public
   * <p> Detailed information about the assessment. </p>
   */
  dataCollectionDetails?: DataCollectionDetails;

  /**
   * @public
   * <p>List of criteria for assessment.</p>
   */
  assessmentTargets?: AssessmentTarget[];
}

/**
 * @public
 */
export interface GetImportFileTaskRequest {
  /**
   * @public
   * <p> The ID of the import file task. This ID is returned in the response of <a>StartImportFileTask</a>. </p>
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
   * @public
   * <p> The import file task <code>id</code> returned in the response of <a>StartImportFileTask</a>. </p>
   */
  id?: string;

  /**
   * @public
   * <p> Status of import file task. </p>
   */
  status?: ImportFileTaskStatus;

  /**
   * @public
   * <p> Start time of the import task. </p>
   */
  startTime?: Date;

  /**
   * @public
   * <p> The S3 bucket where import file is located. </p>
   */
  inputS3Bucket?: string;

  /**
   * @public
   * <p> The Amazon S3 key name of the import file. </p>
   */
  inputS3Key?: string;

  /**
   * @public
   * <p> The S3 bucket name for status report of import task. </p>
   */
  statusReportS3Bucket?: string;

  /**
   * @public
   * <p> The Amazon S3 key name for status report of import task. The report contains details about
   *       whether each record imported successfully or why it did not.</p>
   */
  statusReportS3Key?: string;

  /**
   * @public
   * <p> The time that the import task completed. </p>
   */
  completionTime?: Date;

  /**
   * @public
   * <p> The number of records successfully imported. </p>
   */
  numberOfRecordsSuccess?: number;

  /**
   * @public
   * <p> The number of records that failed to be imported. </p>
   */
  numberOfRecordsFailed?: number;

  /**
   * @public
   * <p> The name of the import task given in <a>StartImportFileTask</a>. </p>
   */
  importName?: string;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface GetLatestAssessmentIdRequest {}

/**
 * @public
 */
export interface GetLatestAssessmentIdResponse {
  /**
   * @public
   * <p>The latest ID for the specific assessment task.</p>
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
 * @public
 * <p> The object containing details about heterogeneous database preferences. </p>
 */
export interface Heterogeneous {
  /**
   * @public
   * <p> The target database engine for heterogeneous database migration preference. </p>
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
 * @public
 * <p> The object containing details about homogeneous database preferences. </p>
 */
export interface Homogeneous {
  /**
   * @public
   * <p> The target database engine for homogeneous database migration preferences. </p>
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
 * @public
 * <p> The object containing details about database migration preferences, when you have no
 *       particular preference. </p>
 */
export interface NoDatabaseMigrationPreference {
  /**
   * @public
   * <p> The target database engine for database migration preference that you specify. </p>
   */
  targetDatabaseEngine: TargetDatabaseEngine[] | undefined;
}

/**
 * @public
 * <p> Preferences for migrating a database to AWS. </p>
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
   * @public
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
   * @public
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
   * @public
   * <p> Indicated that you do not prefer heterogeneous or homogeneous. </p>
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
 * @public
 * <p> Preferences on managing your databases on AWS. </p>
 */
export interface DatabasePreferences {
  /**
   * @public
   * <p> Specifies whether you're interested in self-managed databases or databases managed by
   *       AWS. </p>
   */
  databaseManagementPreference?: DatabaseManagementPreference;

  /**
   * @public
   * <p> Specifies your preferred migration path. </p>
   */
  databaseMigrationPreference?: DatabaseMigrationPreference;
}

/**
 * @public
 * <p> Business goals that you specify. </p>
 */
export interface BusinessGoals {
  /**
   * @public
   * <p> Business goal to achieve migration at a fast pace. </p>
   */
  speedOfMigration?: number;

  /**
   * @public
   * <p> Business goal to reduce the operational overhead on the team by moving into managed
   *       services. </p>
   */
  reduceOperationalOverheadWithManagedServices?: number;

  /**
   * @public
   * <p> Business goal to modernize infrastructure by moving to cloud native technologies. </p>
   */
  modernizeInfrastructureWithCloudNativeTechnologies?: number;

  /**
   * @public
   * <p> Business goal to reduce license costs. </p>
   */
  licenseCostReduction?: number;
}

/**
 * @public
 * <p> Rank of business goals based on priority. </p>
 */
export interface PrioritizeBusinessGoals {
  /**
   * @public
   * <p> Rank of business goals based on priority. </p>
   */
  businessGoals?: BusinessGoals;
}

/**
 * @public
 */
export interface GetPortfolioPreferencesResponse {
  /**
   * @public
   * <p> The rank of business goals based on priority. </p>
   */
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;

  /**
   * @public
   * <p> The transformation preferences for non-database applications. </p>
   */
  applicationPreferences?: ApplicationPreferences;

  /**
   * @public
   * <p> The transformation preferences for database applications. </p>
   */
  databasePreferences?: DatabasePreferences;

  /**
   * @public
   * <p>The classification for application component types.</p>
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
   * @public
   * <p> An assessment summary for the portfolio including the number of servers to rehost and the
   *       overall number of anti-patterns. </p>
   */
  assessmentSummary?: AssessmentSummary;
}

/**
 * @public
 */
export interface GetRecommendationReportDetailsRequest {
  /**
   * @public
   * <p> The recommendation report generation task <code>id</code> returned by <a>StartRecommendationReportGeneration</a>. </p>
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
 * @public
 * <p> Contains detailed information about a recommendation report. </p>
 */
export interface RecommendationReportDetails {
  /**
   * @public
   * <p> The status of the recommendation report generation task. </p>
   */
  status?: RecommendationReportStatus;

  /**
   * @public
   * <p> The status message for recommendation report generation. </p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p> The time that the recommendation report generation task starts. </p>
   */
  startTime?: Date;

  /**
   * @public
   * <p> The time that the recommendation report generation task completes. </p>
   */
  completionTime?: Date;

  /**
   * @public
   * <p> The S3 bucket where the report file is located. </p>
   */
  s3Bucket?: string;

  /**
   * @public
   * <p> The Amazon S3 key name of the report file. </p>
   */
  s3Keys?: string[];
}

/**
 * @public
 */
export interface GetRecommendationReportDetailsResponse {
  /**
   * @public
   * <p> The ID of the recommendation report generation task. See the response of <a>StartRecommendationReportGeneration</a>. </p>
   */
  id?: string;

  /**
   * @public
   * <p> Detailed information about the recommendation report. </p>
   */
  recommendationReportDetails?: RecommendationReportDetails;
}

/**
 * @public
 */
export interface GetServerDetailsRequest {
  /**
   * @public
   * <p> The ID of the server. </p>
   */
  serverId: string | undefined;

  /**
   * @public
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
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
 * @public
 * <p>The error in server analysis.</p>
 */
export interface ServerError {
  /**
   * @public
   * <p>The error category of server analysis.</p>
   */
  serverErrorCategory?: ServerErrorCategory;
}

/**
 * @public
 * <p> Information about the server's network for which the assessment was run. </p>
 */
export interface NetworkInfo {
  /**
   * @public
   * <p> Information about the name of the interface of the server for which the assessment was
   *       run. </p>
   */
  interfaceName: string | undefined;

  /**
   * @public
   * <p> Information about the IP address of the server for which the assessment was run. </p>
   */
  ipAddress: string | undefined;

  /**
   * @public
   * <p> Information about the MAC address of the server for which the assessment was run. </p>
   */
  macAddress: string | undefined;

  /**
   * @public
   * <p> Information about the subnet mask of the server for which the assessment was run. </p>
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
 * @public
 * <p> Information about the operating system. </p>
 */
export interface OSInfo {
  /**
   * @public
   * <p> Information about the type of operating system. </p>
   */
  type?: OSType;

  /**
   * @public
   * <p> Information about the version of operating system. </p>
   */
  version?: string;
}

/**
 * @public
 * <p> Information about the server that hosts application components. </p>
 */
export interface SystemInfo {
  /**
   * @public
   * <p> Operating system corresponding to a server. </p>
   */
  osInfo?: OSInfo;

  /**
   * @public
   * <p> File system type for the server. </p>
   */
  fileSystemType?: string;

  /**
   * @public
   * <p> Networking information related to a server. </p>
   */
  networkInfoList?: NetworkInfo[];

  /**
   * @public
   * <p> CPU architecture type for the server. </p>
   */
  cpuArchitecture?: string;
}

/**
 * @public
 * <p> Detailed information about a server. </p>
 */
export interface ServerDetail {
  /**
   * @public
   * <p> The server ID. </p>
   */
  id?: string;

  /**
   * @public
   * <p> The name of the server. </p>
   */
  name?: string;

  /**
   * @public
   * <p> A set of recommendations. </p>
   */
  recommendationSet?: RecommendationSet;

  /**
   * @public
   * <p> The status of assessment for the server. </p>
   */
  dataCollectionStatus?: RunTimeAssessmentStatus;

  /**
   * @public
   * <p> A message about the status of data collection, which contains detailed descriptions of
   *       any error messages. </p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p> A list of anti-pattern severity summaries. </p>
   */
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];

  /**
   * @public
   * <p> System information about the server. </p>
   */
  systemInfo?: SystemInfo;

  /**
   * @public
   * <p> A list of strategy summaries. </p>
   */
  applicationComponentStrategySummary?: StrategySummary[];

  /**
   * @public
   * <p> The S3 bucket name and Amazon S3 key name for anti-pattern report. </p>
   */
  antipatternReportS3Object?: S3Object;

  /**
   * @public
   * <p> The status of the anti-pattern report generation. </p>
   */
  antipatternReportStatus?: AntipatternReportStatus;

  /**
   * @public
   * <p> A message about the status of the anti-pattern report generation. </p>
   */
  antipatternReportStatusMessage?: string;

  /**
   * @public
   * <p> The type of server. </p>
   */
  serverType?: string;

  /**
   * @public
   * <p> The timestamp of when the server was assessed. </p>
   */
  lastAnalyzedTimestamp?: Date;

  /**
   * @public
   * <p>The error in server analysis.</p>
   */
  serverError?: ServerError;
}

/**
 * @public
 */
export interface GetServerDetailsResponse {
  /**
   * @public
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> Detailed information about the server. </p>
   */
  serverDetail?: ServerDetail;

  /**
   * @public
   * <p> The associated application group the server belongs to, as defined in AWS Application Discovery Service.
   *     </p>
   */
  associatedApplications?: AssociatedApplication[];
}

/**
 * @public
 */
export interface GetServerStrategiesRequest {
  /**
   * @public
   * <p> The ID of the server. </p>
   */
  serverId: string | undefined;
}

/**
 * @public
 * <p> Contains information about a strategy recommendation for a server. </p>
 */
export interface ServerStrategy {
  /**
   * @public
   * <p> Strategy recommendation for the server. </p>
   */
  recommendation?: RecommendationSet;

  /**
   * @public
   * <p> The recommendation status of the strategy for the server. </p>
   */
  status?: StrategyRecommendation;

  /**
   * @public
   * <p> The number of application components with this strategy recommendation running on the
   *       server. </p>
   */
  numberOfApplicationComponents?: number;

  /**
   * @public
   * <p> Set to true if the recommendation is set as preferred. </p>
   */
  isPreferred?: boolean;
}

/**
 * @public
 */
export interface GetServerStrategiesResponse {
  /**
   * @public
   * <p> A list of strategy recommendations for the server. </p>
   */
  serverStrategies?: ServerStrategy[];
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
 * @public
 * <p> The object containing information about distinct imports or groups for Strategy Recommendations. </p>
 */
export interface Group {
  /**
   * @public
   * <p> The key of the specific import group. </p>
   */
  name?: GroupName;

  /**
   * @public
   * <p> The value of the specific import group. </p>
   */
  value?: string;
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
 * @public
 */
export interface ListApplicationComponentsRequest {
  /**
   * @public
   * <p> Criteria for filtering the list of application components. </p>
   */
  applicationComponentCriteria?: ApplicationComponentCriteria;

  /**
   * @public
   * <p> Specify the value based on the application component criteria type. For example, if
   *         <code>applicationComponentCriteria</code> is set to <code>SERVER_ID</code> and
   *         <code>filterValue</code> is set to <code>server1</code>, then <a>ListApplicationComponents</a> returns all the application components running on
   *       server1. </p>
   */
  filterValue?: string;

  /**
   * @public
   * <p> Specifies whether to sort by ascending (<code>ASC</code>) or descending
   *         (<code>DESC</code>) order. </p>
   */
  sort?: SortOrder;

  /**
   * @public
   * <p> The group ID specified in to filter on. </p>
   */
  groupIdFilter?: Group[];

  /**
   * @public
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListApplicationComponentsResponse {
  /**
   * @public
   * <p> The list of application components with detailed information about each component.
   *     </p>
   */
  applicationComponentInfos?: ApplicationComponentDetail[];

  /**
   * @public
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface ListCollectorsRequest {
  /**
   * @public
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
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
 * @public
 * <p>IP address based configurations.</p>
 */
export interface IPAddressBasedRemoteInfo {
  /**
   * @public
   * <p>The time stamp of the configuration.</p>
   */
  ipAddressConfigurationTimeStamp?: string;

  /**
   * @public
   * <p>The type of authorization.</p>
   */
  authType?: AuthType;

  /**
   * @public
   * <p>The type of the operating system.</p>
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
 * @public
 * <p>Detailed information of the pipeline.</p>
 */
export interface PipelineInfo {
  /**
   * @public
   * <p>The type of pipeline.</p>
   */
  pipelineType?: PipelineType;

  /**
   * @public
   * <p>The time when the pipeline info was configured.</p>
   */
  pipelineConfigurationTimeStamp?: string;
}

/**
 * @public
 * <p>Information about the server configured for source code analysis.</p>
 */
export interface RemoteSourceCodeAnalysisServerInfo {
  /**
   * @public
   * <p>The time when the remote source code server was configured.</p>
   */
  remoteSourceCodeAnalysisServerConfigurationTimestamp?: string;
}

/**
 * @public
 * <p>Details about the server in vCenter.</p>
 */
export interface VcenterBasedRemoteInfo {
  /**
   * @public
   * <p>The time when the remote server based on vCenter was last configured.</p>
   */
  vcenterConfigurationTimeStamp?: string;

  /**
   * @public
   * <p>The type of the operating system.</p>
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
 * @public
 * <p>Details about the version control configuration.</p>
 */
export interface VersionControlInfo {
  /**
   * @public
   * <p>The type of version control.</p>
   */
  versionControlType?: VersionControlType;

  /**
   * @public
   * <p>The time when the version control system was last configured.</p>
   */
  versionControlConfigurationTimeStamp?: string;
}

/**
 * @public
 * <p>Summary of the collector configuration.</p>
 */
export interface ConfigurationSummary {
  /**
   * @public
   * <p>The list of vCenter configurations.</p>
   */
  vcenterBasedRemoteInfoList?: VcenterBasedRemoteInfo[];

  /**
   * @public
   * <p>IP address based configurations.</p>
   */
  ipAddressBasedRemoteInfoList?: IPAddressBasedRemoteInfo[];

  /**
   * @public
   * <p>The list of the version control configurations.</p>
   */
  versionControlInfoList?: VersionControlInfo[];

  /**
   * @public
   * <p>The list of pipeline info configurations.</p>
   */
  pipelineInfoList?: PipelineInfo[];

  /**
   * @public
   * <p>Info about the remote server source code configuration.</p>
   */
  remoteSourceCodeAnalysisServerInfo?: RemoteSourceCodeAnalysisServerInfo;
}

/**
 * @public
 * <p> Process data collector that runs in the environment that you specify. </p>
 */
export interface Collector {
  /**
   * @public
   * <p> The ID of the collector. </p>
   */
  collectorId?: string;

  /**
   * @public
   * <p> IP address of the server that is hosting the collector. </p>
   */
  ipAddress?: string;

  /**
   * @public
   * <p> Hostname of the server that is hosting the collector. </p>
   */
  hostName?: string;

  /**
   * @public
   * <p> Indicates the health of a collector. </p>
   */
  collectorHealth?: CollectorHealth;

  /**
   * @public
   * <p> Current version of the collector that is running in the environment that you specify.
   *     </p>
   */
  collectorVersion?: string;

  /**
   * @public
   * <p> Time when the collector registered with the service. </p>
   */
  registeredTimeStamp?: string;

  /**
   * @public
   * <p> Time when the collector last pinged the service. </p>
   */
  lastActivityTimeStamp?: string;

  /**
   * @public
   * <p>Summary of the collector configuration.</p>
   */
  configurationSummary?: ConfigurationSummary;
}

/**
 * @public
 */
export interface ListCollectorsResponse {
  /**
   * @public
   * <p> The list of all the installed collectors. </p>
   */
  Collectors?: Collector[];

  /**
   * @public
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListImportFileTaskRequest {
  /**
   * @public
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The total number of items to return. The maximum value is 100. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p> Information about the import file tasks you request. </p>
 */
export interface ImportFileTaskInformation {
  /**
   * @public
   * <p> The ID of the import file task. </p>
   */
  id?: string;

  /**
   * @public
   * <p> Status of import file task. </p>
   */
  status?: ImportFileTaskStatus;

  /**
   * @public
   * <p> Start time of the import task. </p>
   */
  startTime?: Date;

  /**
   * @public
   * <p> The S3 bucket where the import file is located. </p>
   */
  inputS3Bucket?: string;

  /**
   * @public
   * <p> The Amazon S3 key name of the import file. </p>
   */
  inputS3Key?: string;

  /**
   * @public
   * <p> The S3 bucket name for status report of import task. </p>
   */
  statusReportS3Bucket?: string;

  /**
   * @public
   * <p> The Amazon S3 key name for status report of import task. The report contains details about
   *       whether each record imported successfully or why it did not. </p>
   */
  statusReportS3Key?: string;

  /**
   * @public
   * <p> The time that the import task completes. </p>
   */
  completionTime?: Date;

  /**
   * @public
   * <p> The number of records successfully imported. </p>
   */
  numberOfRecordsSuccess?: number;

  /**
   * @public
   * <p> The number of records that failed to be imported. </p>
   */
  numberOfRecordsFailed?: number;

  /**
   * @public
   * <p> The name of the import task given in <code>StartImportFileTask</code>. </p>
   */
  importName?: string;
}

/**
 * @public
 */
export interface ListImportFileTaskResponse {
  /**
   * @public
   * <p> Lists information about the files you import.</p>
   */
  taskInfos?: ImportFileTaskInformation[];

  /**
   * @public
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
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
   * @public
   * <p> Criteria for filtering servers. </p>
   */
  serverCriteria?: ServerCriteria;

  /**
   * @public
   * <p> Specifies the filter value, which is based on the type of server criteria. For example,
   *       if <code>serverCriteria</code> is <code>OS_NAME</code>, and the <code>filterValue</code> is
   *       equal to <code>WindowsServer</code>, then <code>ListServers</code> returns all of the servers
   *       matching the OS name <code>WindowsServer</code>. </p>
   */
  filterValue?: string;

  /**
   * @public
   * <p> Specifies whether to sort by ascending (<code>ASC</code>) or descending
   *         (<code>DESC</code>) order. </p>
   */
  sort?: SortOrder;

  /**
   * @public
   * <p> Specifies the group ID to filter on. </p>
   */
  groupIdFilter?: Group[];

  /**
   * @public
   * <p> The token from a previous call that you use to retrieve the next set of results. For example,
   * if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along
   *       with a token. You then use the returned token to retrieve the next set of 10. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to include in the response. The maximum value is 100. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListServersResponse {
  /**
   * @public
   * <p> The list of servers with detailed information about each server. </p>
   */
  serverInfos?: ServerDetail[];

  /**
   * @public
   * <p> The token you use to retrieve the next set of results, or null if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface PutPortfolioPreferencesRequest {
  /**
   * @public
   * <p> The rank of the business goals based on priority. </p>
   */
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;

  /**
   * @public
   * <p> The transformation preferences for non-database applications. </p>
   */
  applicationPreferences?: ApplicationPreferences;

  /**
   * @public
   * <p> The transformation preferences for database applications. </p>
   */
  databasePreferences?: DatabasePreferences;

  /**
   * @public
   * <p>The classification for application component types.</p>
   */
  applicationMode?: ApplicationMode;
}

/**
 * @public
 */
export interface PutPortfolioPreferencesResponse {}

/**
 * @public
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

/**
 * @public
 */
export interface StartAssessmentRequest {
  /**
   * @public
   * <p> The S3 bucket used by the collectors to send analysis data to the service. The bucket
   *       name must begin with <code>migrationhub-strategy-</code>. </p>
   */
  s3bucketForAnalysisData?: string;

  /**
   * @public
   * <p> The S3 bucket where all the reports generated by the service are stored. The bucket name
   *       must begin with <code>migrationhub-strategy-</code>. </p>
   */
  s3bucketForReportData?: string;

  /**
   * @public
   * <p>List of criteria for assessment.</p>
   */
  assessmentTargets?: AssessmentTarget[];
}

/**
 * @public
 */
export interface StartAssessmentResponse {
  /**
   * @public
   * <p> The ID of the assessment. </p>
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
   * @public
   * <p> A descriptive name for the request. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The S3 bucket where the import file is located. The bucket name is required to begin with
   *         <code>migrationhub-strategy-</code>.</p>
   */
  S3Bucket: string | undefined;

  /**
   * @public
   * <p> The Amazon S3 key name of the import file. </p>
   */
  s3key: string | undefined;

  /**
   * @public
   * <p>Specifies the source that the servers are coming from. By default, Strategy Recommendations assumes that
   *       the servers specified in the import file are available in AWS Application Discovery Service. </p>
   */
  dataSourceType?: DataSourceType;

  /**
   * @public
   * <p>Groups the resources in the import file together with a unique name. This ID can be as
   *       filter in <code>ListApplicationComponents</code> and <code>ListServers</code>. </p>
   */
  groupId?: Group[];

  /**
   * @public
   * <p> The S3 bucket where Strategy Recommendations uploads import results. The bucket name is required to
   *       begin with migrationhub-strategy-. </p>
   */
  s3bucketForReportData?: string;
}

/**
 * @public
 */
export interface StartImportFileTaskResponse {
  /**
   * @public
   * <p> The ID for a specific import task. The ID is unique within an AWS account. </p>
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
   * @public
   * <p> The output format for the recommendation report file. The default format is Microsoft
   *       Excel. </p>
   */
  outputFormat?: OutputFormat;

  /**
   * @public
   * <p> Groups the resources in the recommendation report with a unique name. </p>
   */
  groupIdFilter?: Group[];
}

/**
 * @public
 */
export interface StartRecommendationReportGenerationResponse {
  /**
   * @public
   * <p> The ID of the recommendation report generation task. </p>
   */
  id?: string;
}

/**
 * @public
 */
export interface StopAssessmentRequest {
  /**
   * @public
   * <p> The <code>assessmentId</code> returned by <a>StartAssessment</a>. </p>
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
 * @public
 * <p> Object containing source code information that is linked to an application component.
 *     </p>
 */
export interface SourceCode {
  /**
   * @public
   * <p> The type of repository to use for the source code. </p>
   */
  versionControl?: VersionControl;

  /**
   * @public
   * <p> The branch of the source code. </p>
   */
  sourceVersion?: string;

  /**
   * @public
   * <p> The repository name for the source code. </p>
   */
  location?: string;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  projectName?: string;
}

/**
 * @public
 * <p> Information about all the available strategy options for migrating and modernizing an
 *       application component. </p>
 */
export interface StrategyOption {
  /**
   * @public
   * <p> Type of transformation. For example, Rehost, Replatform, and so on. </p>
   */
  strategy?: Strategy;

  /**
   * @public
   * <p> The name of the tool that can be used to transform an application component using this
   *       strategy. </p>
   */
  toolName?: TransformationToolName;

  /**
   * @public
   * <p> Destination information about where the application component can migrate to. For
   *       example, <code>EC2</code>, <code>ECS</code>, and so on. </p>
   */
  targetDestination?: TargetDestination;

  /**
   * @public
   * <p> Indicates if a specific strategy is preferred for the application component. </p>
   */
  isPreferred?: boolean;
}

/**
 * @public
 */
export interface UpdateApplicationComponentConfigRequest {
  /**
   * @public
   * <p> The ID of the application component. The ID is unique within an AWS account. </p>
   */
  applicationComponentId: string | undefined;

  /**
   * @public
   * <p> Indicates whether the application component has been included for server recommendation
   *       or not. </p>
   */
  inclusionStatus?: InclusionStatus;

  /**
   * @public
   * <p> The preferred strategy options for the application component. Use values from the <a>GetApplicationComponentStrategies</a> response. </p>
   */
  strategyOption?: StrategyOption;

  /**
   * @public
   * <p> The list of source code configurations to update for the application component. </p>
   */
  sourceCodeList?: SourceCode[];

  /**
   * @public
   * <p> Database credentials. </p>
   */
  secretsManagerKey?: string;

  /**
   * @public
   * <p>Update the configuration request of an application component. If it is set to true, the
   *       source code and/or database credentials are updated. If it is set to false, the source code
   *       and/or database credentials are updated and an analysis is initiated.</p>
   */
  configureOnly?: boolean;

  /**
   * @public
   * <p>The type of known component.</p>
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
   * @public
   * <p> The ID of the server. </p>
   */
  serverId: string | undefined;

  /**
   * @public
   * <p> The preferred strategy options for the application component. See the response from <a>GetServerStrategies</a>.</p>
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
