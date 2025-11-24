// smithy-typescript generated code
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
