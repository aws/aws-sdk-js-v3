// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccountCustomization,
  AdHocFilteringOption,
  AmazonElasticsearchParameters,
  AmazonOpenSearchParameters,
  AnalysisDefaults,
  CalculatedField,
  CalculatedFieldFilterSensitiveLog,
  ColumnConfiguration,
  ColumnConfigurationFilterSensitiveLog,
  DashboardBehavior,
  DataSetIdentifierDeclaration,
  Edition,
  Entity,
  FilterGroup,
  NumberScale,
  ParameterDeclaration,
  ParameterDeclarationFilterSensitiveLog,
  ResourceStatus,
  Sheet,
  TimeGranularity,
} from "./models_0";
import {
  AnalysisDefinition,
  AnalysisSourceEntity,
  AssetBundleExportJobAnalysisOverrideProperties,
  AssetBundleExportJobDashboardOverrideProperties,
  AssetBundleExportJobDataSetPropertyToOverride,
  DataSetReference,
  FilterOperator,
  SheetDefinition,
} from "./models_1";
import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * @public
 * <p>Controls how a specific <code>DataSet</code> resource is parameterized in the returned CloudFormation template.</p>
 */
export interface AssetBundleExportJobDataSetOverrideProperties {
  /**
   * @public
   * <p>The ARN of the specific <code>DataSet</code> resource whose override properties are configured in this structure.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A list of <code>DataSet</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   */
  Properties: (AssetBundleExportJobDataSetPropertyToOverride | string)[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobDataSourcePropertyToOverride = {
  CATALOG: "Catalog",
  CLUSTER_ID: "ClusterId",
  DATABASE: "Database",
  DATA_SET_NAME: "DataSetName",
  DISABLE_SSL: "DisableSsl",
  DOMAIN: "Domain",
  HOST: "Host",
  INSTANCE_ID: "InstanceId",
  MANIFEST_FILE_LOCATION: "ManifestFileLocation",
  NAME: "Name",
  PASSWORD: "Password",
  PORT: "Port",
  ROLE_ARN: "RoleArn",
  SECRET_ARN: "SecretArn",
  USERNAME: "Username",
  WAREHOUSE: "Warehouse",
  WORK_GROUP: "WorkGroup",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobDataSourcePropertyToOverride =
  (typeof AssetBundleExportJobDataSourcePropertyToOverride)[keyof typeof AssetBundleExportJobDataSourcePropertyToOverride];

/**
 * @public
 * <p>Controls how a specific <code>DataSource</code> resource is parameterized in the returned CloudFormation template.</p>
 */
export interface AssetBundleExportJobDataSourceOverrideProperties {
  /**
   * @public
   * <p>The ARN of the specific <code>DataSource</code> resource whose override properties are configured in this structure.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A list of <code>DataSource</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   */
  Properties: (AssetBundleExportJobDataSourcePropertyToOverride | string)[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobRefreshSchedulePropertyToOverride = {
  START_AFTER_DATE_TIME: "StartAfterDateTime",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobRefreshSchedulePropertyToOverride =
  (typeof AssetBundleExportJobRefreshSchedulePropertyToOverride)[keyof typeof AssetBundleExportJobRefreshSchedulePropertyToOverride];

/**
 * @public
 * <p>Controls how a specific <code>RefreshSchedule</code> resource is parameterized in the returned CloudFormation template.</p>
 */
export interface AssetBundleExportJobRefreshScheduleOverrideProperties {
  /**
   * @public
   * <p>The ARN of the specific <code>RefreshSchedule</code> resource whose override properties are configured in this structure.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A list of <code>RefreshSchedule</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   */
  Properties: (AssetBundleExportJobRefreshSchedulePropertyToOverride | string)[] | undefined;
}

/**
 * @public
 * <p>An optional structure that configures resource ID overrides for the export job.</p>
 */
export interface AssetBundleExportJobResourceIdOverrideConfiguration {
  /**
   * @public
   * <p>An option to request a CloudFormation variable for a prefix to be prepended to each resource's ID before import. The prefix is only added to the asset IDs and does not change the name of the asset.</p>
   */
  PrefixForAllResources?: boolean;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobThemePropertyToOverride = {
  NAME: "Name",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobThemePropertyToOverride =
  (typeof AssetBundleExportJobThemePropertyToOverride)[keyof typeof AssetBundleExportJobThemePropertyToOverride];

/**
 * @public
 * <p>Controls how a specific <code>Theme</code> resource is parameterized in the returned CloudFormation template.</p>
 */
export interface AssetBundleExportJobThemeOverrideProperties {
  /**
   * @public
   * <p>The ARN of the specific <code>Theme</code> resource whose override properties are configured in this structure.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A list of <code>Theme</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   */
  Properties: (AssetBundleExportJobThemePropertyToOverride | string)[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobVPCConnectionPropertyToOverride = {
  DNS_RESOLVERS: "DnsResolvers",
  NAME: "Name",
  ROLE_ARN: "RoleArn",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobVPCConnectionPropertyToOverride =
  (typeof AssetBundleExportJobVPCConnectionPropertyToOverride)[keyof typeof AssetBundleExportJobVPCConnectionPropertyToOverride];

/**
 * @public
 * <p>Controls how a specific <code>VPCConnection</code> resource is parameterized in the outputted CloudFormation template.</p>
 */
export interface AssetBundleExportJobVPCConnectionOverrideProperties {
  /**
   * @public
   * <p>The ARN of the specific <code>VPCConnection</code> resource whose override properties are configured in this structure.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A list of <code>VPCConnection</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   */
  Properties: (AssetBundleExportJobVPCConnectionPropertyToOverride | string)[] | undefined;
}

/**
 * @public
 * <p>An optional collection of CloudFormation property configurations that control how the export job is generated.</p>
 */
export interface AssetBundleCloudFormationOverridePropertyConfiguration {
  /**
   * @public
   * <p>An optional list of structures that control how resource IDs are parameterized in the returned CloudFormation template.</p>
   */
  ResourceIdOverrideConfiguration?: AssetBundleExportJobResourceIdOverrideConfiguration;

  /**
   * @public
   * <p>An optional list of structures that control how <code>VPCConnection</code> resources are parameterized in the returned CloudFormation template.</p>
   */
  VPCConnections?: AssetBundleExportJobVPCConnectionOverrideProperties[];

  /**
   * @public
   * <p>An optional list of structures that control how <code>RefreshSchedule</code> resources are parameterized in the returned CloudFormation template.</p>
   */
  RefreshSchedules?: AssetBundleExportJobRefreshScheduleOverrideProperties[];

  /**
   * @public
   * <p>An optional list of structures that control how <code>DataSource</code> resources are parameterized in the returned CloudFormation template.</p>
   */
  DataSources?: AssetBundleExportJobDataSourceOverrideProperties[];

  /**
   * @public
   * <p>An optional list of structures that control how <code>DataSet</code> resources are parameterized in the returned CloudFormation template.</p>
   */
  DataSets?: AssetBundleExportJobDataSetOverrideProperties[];

  /**
   * @public
   * <p>An optional list of structures that control how <code>Theme</code> resources are parameterized in the returned CloudFormation template.</p>
   */
  Themes?: AssetBundleExportJobThemeOverrideProperties[];

  /**
   * @public
   * <p>An optional list of structures that control how <code>Analysis</code> resources are parameterized in the returned CloudFormation template.</p>
   */
  Analyses?: AssetBundleExportJobAnalysisOverrideProperties[];

  /**
   * @public
   * <p>An optional list of structures that control how <code>Dashboard</code> resources are parameterized in the returned CloudFormation template.</p>
   */
  Dashboards?: AssetBundleExportJobDashboardOverrideProperties[];
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportFormat = {
  CLOUDFORMATION_JSON: "CLOUDFORMATION_JSON",
  QUICKSIGHT_JSON: "QUICKSIGHT_JSON",
} as const;

/**
 * @public
 */
export type AssetBundleExportFormat = (typeof AssetBundleExportFormat)[keyof typeof AssetBundleExportFormat];

/**
 * @public
 * <p>Describes an error that occurred during an Asset Bundle export job.</p>
 */
export interface AssetBundleExportJobError {
  /**
   * @public
   * <p>The ARN of the resource whose processing caused an error.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The specific error type of the error that occurred.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>A description of the error.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const AssetBundleExportJobStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED_FOR_IMMEDIATE_EXECUTION: "QUEUED_FOR_IMMEDIATE_EXECUTION",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type AssetBundleExportJobStatus = (typeof AssetBundleExportJobStatus)[keyof typeof AssetBundleExportJobStatus];

/**
 * @public
 * <p>A summary of the export job that includes details of the job's configuration and its current status.</p>
 */
export interface AssetBundleExportJobSummary {
  /**
   * @public
   * <p>The current status of the export job.</p>
   */
  JobStatus?: AssetBundleExportJobStatus | string;

  /**
   * @public
   * <p>The ARN of the export job.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time that the export job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The ID of the export job.</p>
   */
  AssetBundleExportJobId?: string;

  /**
   * @public
   * <p>The flag that determines the inclusion of resource dependencies in the returned asset bundle.</p>
   */
  IncludeAllDependencies?: boolean;

  /**
   * @public
   * <p>The format for the export job.</p>
   */
  ExportFormat?: AssetBundleExportFormat | string;
}

/**
 * @public
 * @enum
 */
export const AssetBundleImportFailureAction = {
  DO_NOTHING: "DO_NOTHING",
  ROLLBACK: "ROLLBACK",
} as const;

/**
 * @public
 */
export type AssetBundleImportFailureAction =
  (typeof AssetBundleImportFailureAction)[keyof typeof AssetBundleImportFailureAction];

/**
 * @public
 * <p>The override parameters for a single analysis that is being imported.</p>
 */
export interface AssetBundleImportJobAnalysisOverrideParameters {
  /**
   * @public
   * <p>The ID of the analysis that you ant to apply overrides to.</p>
   */
  AnalysisId: string | undefined;

  /**
   * @public
   * <p>A new name for the analysis.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>The override parameters for a single dashboard that is being imported.</p>
 */
export interface AssetBundleImportJobDashboardOverrideParameters {
  /**
   * @public
   * <p>The ID of the dashboard that you want to apply overrides to.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>A new name for the dashboard.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>The override parameters for a single dataset that is being imported.</p>
 */
export interface AssetBundleImportJobDataSetOverrideParameters {
  /**
   * @public
   * <p>The ID of the dataset to apply overrides to.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>A new name for the dataset.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>A username and password credential pair to use to import a data source resource.</p>
 */
export interface AssetBundleImportJobDataSourceCredentialPair {
  /**
   * @public
   * <p>The username for the data source connection.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>The password for the data source connection.</p>
   */
  Password: string | undefined;
}

/**
 * @public
 * <p>The login credentials to use to import a data source resource.</p>
 */
export interface AssetBundleImportJobDataSourceCredentials {
  /**
   * @public
   * <p>A username and password credential pair to be used to create the imported data source. Keep this field blank if you are using a Secrets Manager secret to provide credentials.</p>
   */
  CredentialPair?: AssetBundleImportJobDataSourceCredentialPair;

  /**
   * @public
   * <p>The ARN of the Secrets Manager secret that's used to create the imported data source. Keep this field blank, unless you are using a secret in place of a credential pair.</p>
   */
  SecretArn?: string;
}

/**
 * @public
 * <p>Parameters for Amazon Athena.</p>
 */
export interface AthenaParameters {
  /**
   * @public
   * <p>The workgroup that Amazon Athena uses.</p>
   */
  WorkGroup?: string;

  /**
   * @public
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 * <p>Parameters for Amazon Aurora.</p>
 */
export interface AuroraParameters {
  /**
   * @public
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>Database.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
 */
export interface AuroraPostgreSqlParameters {
  /**
   * @public
   * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * <p>The parameters for IoT Analytics.</p>
 */
export interface AwsIotAnalyticsParameters {
  /**
   * @public
   * <p>Dataset name.</p>
   */
  DataSetName: string | undefined;
}

/**
 * @public
 * <p>The required parameters that are needed to connect to a Databricks data source.</p>
 */
export interface DatabricksParameters {
  /**
   * @public
   * <p>The host name of the Databricks data source.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>The port for the Databricks data source.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>The HTTP path of the Databricks data source.</p>
   */
  SqlEndpointPath: string | undefined;
}

/**
 * @public
 * <p>The required parameters for connecting to an Exasol data source.</p>
 */
export interface ExasolParameters {
  /**
   * @public
   * <p>The hostname or IP address of the Exasol data source.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>The port for the Exasol data source.</p>
   */
  Port: number | undefined;
}

/**
 * @public
 * <p>The parameters for Jira.</p>
 */
export interface JiraParameters {
  /**
   * @public
   * <p>The base URL of the Jira site.</p>
   */
  SiteBaseUrl: string | undefined;
}

/**
 * @public
 * <p>The parameters for MariaDB.</p>
 */
export interface MariaDbParameters {
  /**
   * @public
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>Database.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * <p>The parameters for MySQL.</p>
 */
export interface MySqlParameters {
  /**
   * @public
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>Database.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * <p>The parameters for Oracle.</p>
 */
export interface OracleParameters {
  /**
   * @public
   * <p>An Oracle host.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>The port.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>The database.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * <p>The parameters for PostgreSQL.</p>
 */
export interface PostgreSqlParameters {
  /**
   * @public
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>Database.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * <p>The parameters for Presto.</p>
 */
export interface PrestoParameters {
  /**
   * @public
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>Catalog.</p>
   */
  Catalog: string | undefined;
}

/**
 * @public
 * <p>The parameters for Amazon RDS.</p>
 */
export interface RdsParameters {
  /**
   * @public
   * <p>Instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Database.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
 *             <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and
 *             <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
 */
export interface RedshiftParameters {
  /**
   * @public
   * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
   */
  Host?: string;

  /**
   * @public
   * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * @public
   * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
   *             provided.</p>
   */
  ClusterId?: string;
}

/**
 * @public
 * <p>Amazon S3 manifest file location.</p>
 */
export interface ManifestFileLocation {
  /**
   * @public
   * <p>Amazon S3 bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Amazon S3 key that identifies an object.</p>
   */
  Key: string | undefined;
}

/**
 * @public
 * <p>The parameters for S3.</p>
 */
export interface S3Parameters {
  /**
   * @public
   * <p>Location of the Amazon S3 manifest file. This is NULL if the manifest file was
   *             uploaded into Amazon QuickSight.</p>
   */
  ManifestFileLocation: ManifestFileLocation | undefined;

  /**
   * @public
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 * <p>The parameters for ServiceNow.</p>
 */
export interface ServiceNowParameters {
  /**
   * @public
   * <p>URL of the base site.</p>
   */
  SiteBaseUrl: string | undefined;
}

/**
 * @public
 * <p>The parameters for Snowflake.</p>
 */
export interface SnowflakeParameters {
  /**
   * @public
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * @public
   * <p>Warehouse.</p>
   */
  Warehouse: string | undefined;
}

/**
 * @public
 * <p>The parameters for Spark.</p>
 */
export interface SparkParameters {
  /**
   * @public
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>Port.</p>
   */
  Port: number | undefined;
}

/**
 * @public
 * <p>The parameters for SQL Server.</p>
 */
export interface SqlServerParameters {
  /**
   * @public
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>Database.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * <p>The parameters for Teradata.</p>
 */
export interface TeradataParameters {
  /**
   * @public
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>Database.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * <p>The parameters for Twitter.</p>
 */
export interface TwitterParameters {
  /**
   * @public
   * <p>Twitter query string.</p>
   */
  Query: string | undefined;

  /**
   * @public
   * <p>Maximum number of rows to query Twitter.</p>
   */
  MaxRows: number | undefined;
}

/**
 * @public
 * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
 *             This is a variant type structure. For this structure to be valid, only one of the
 *             attributes can be non-null.</p>
 */
export type DataSourceParameters =
  | DataSourceParameters.AmazonElasticsearchParametersMember
  | DataSourceParameters.AmazonOpenSearchParametersMember
  | DataSourceParameters.AthenaParametersMember
  | DataSourceParameters.AuroraParametersMember
  | DataSourceParameters.AuroraPostgreSqlParametersMember
  | DataSourceParameters.AwsIotAnalyticsParametersMember
  | DataSourceParameters.DatabricksParametersMember
  | DataSourceParameters.ExasolParametersMember
  | DataSourceParameters.JiraParametersMember
  | DataSourceParameters.MariaDbParametersMember
  | DataSourceParameters.MySqlParametersMember
  | DataSourceParameters.OracleParametersMember
  | DataSourceParameters.PostgreSqlParametersMember
  | DataSourceParameters.PrestoParametersMember
  | DataSourceParameters.RdsParametersMember
  | DataSourceParameters.RedshiftParametersMember
  | DataSourceParameters.S3ParametersMember
  | DataSourceParameters.ServiceNowParametersMember
  | DataSourceParameters.SnowflakeParametersMember
  | DataSourceParameters.SparkParametersMember
  | DataSourceParameters.SqlServerParametersMember
  | DataSourceParameters.TeradataParametersMember
  | DataSourceParameters.TwitterParametersMember
  | DataSourceParameters.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceParameters {
  /**
   * @public
   * <p>The parameters for OpenSearch.</p>
   */
  export interface AmazonElasticsearchParametersMember {
    AmazonElasticsearchParameters: AmazonElasticsearchParameters;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Amazon Athena.</p>
   */
  export interface AthenaParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters: AthenaParameters;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Amazon Aurora MySQL.</p>
   */
  export interface AuroraParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters: AuroraParameters;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Amazon Aurora.</p>
   */
  export interface AuroraPostgreSqlParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters: AuroraPostgreSqlParameters;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for IoT Analytics.</p>
   */
  export interface AwsIotAnalyticsParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters: AwsIotAnalyticsParameters;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Jira.</p>
   */
  export interface JiraParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters: JiraParameters;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for MariaDB.</p>
   */
  export interface MariaDbParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters: MariaDbParameters;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for MySQL.</p>
   */
  export interface MySqlParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters: MySqlParameters;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Oracle.</p>
   */
  export interface OracleParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters: OracleParameters;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for PostgreSQL.</p>
   */
  export interface PostgreSqlParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters: PostgreSqlParameters;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Presto.</p>
   */
  export interface PrestoParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters: PrestoParameters;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Amazon RDS.</p>
   */
  export interface RdsParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters: RdsParameters;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Amazon Redshift.</p>
   */
  export interface RedshiftParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters: RedshiftParameters;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for S3.</p>
   */
  export interface S3ParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters: S3Parameters;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for ServiceNow.</p>
   */
  export interface ServiceNowParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters: ServiceNowParameters;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Snowflake.</p>
   */
  export interface SnowflakeParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters: SnowflakeParameters;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Spark.</p>
   */
  export interface SparkParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters: SparkParameters;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for SQL Server.</p>
   */
  export interface SqlServerParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters: SqlServerParameters;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Teradata.</p>
   */
  export interface TeradataParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters: TeradataParameters;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Twitter.</p>
   */
  export interface TwitterParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters: TwitterParameters;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for OpenSearch.</p>
   */
  export interface AmazonOpenSearchParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters: AmazonOpenSearchParameters;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The parameters for Exasol.</p>
   */
  export interface ExasolParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters: ExasolParameters;
    DatabricksParameters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The required parameters that are needed to connect to a Databricks data source.</p>
   */
  export interface DatabricksParametersMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters: DatabricksParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AmazonElasticsearchParameters?: never;
    AthenaParameters?: never;
    AuroraParameters?: never;
    AuroraPostgreSqlParameters?: never;
    AwsIotAnalyticsParameters?: never;
    JiraParameters?: never;
    MariaDbParameters?: never;
    MySqlParameters?: never;
    OracleParameters?: never;
    PostgreSqlParameters?: never;
    PrestoParameters?: never;
    RdsParameters?: never;
    RedshiftParameters?: never;
    S3Parameters?: never;
    ServiceNowParameters?: never;
    SnowflakeParameters?: never;
    SparkParameters?: never;
    SqlServerParameters?: never;
    TeradataParameters?: never;
    TwitterParameters?: never;
    AmazonOpenSearchParameters?: never;
    ExasolParameters?: never;
    DatabricksParameters?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    AmazonElasticsearchParameters: (value: AmazonElasticsearchParameters) => T;
    AthenaParameters: (value: AthenaParameters) => T;
    AuroraParameters: (value: AuroraParameters) => T;
    AuroraPostgreSqlParameters: (value: AuroraPostgreSqlParameters) => T;
    AwsIotAnalyticsParameters: (value: AwsIotAnalyticsParameters) => T;
    JiraParameters: (value: JiraParameters) => T;
    MariaDbParameters: (value: MariaDbParameters) => T;
    MySqlParameters: (value: MySqlParameters) => T;
    OracleParameters: (value: OracleParameters) => T;
    PostgreSqlParameters: (value: PostgreSqlParameters) => T;
    PrestoParameters: (value: PrestoParameters) => T;
    RdsParameters: (value: RdsParameters) => T;
    RedshiftParameters: (value: RedshiftParameters) => T;
    S3Parameters: (value: S3Parameters) => T;
    ServiceNowParameters: (value: ServiceNowParameters) => T;
    SnowflakeParameters: (value: SnowflakeParameters) => T;
    SparkParameters: (value: SparkParameters) => T;
    SqlServerParameters: (value: SqlServerParameters) => T;
    TeradataParameters: (value: TeradataParameters) => T;
    TwitterParameters: (value: TwitterParameters) => T;
    AmazonOpenSearchParameters: (value: AmazonOpenSearchParameters) => T;
    ExasolParameters: (value: ExasolParameters) => T;
    DatabricksParameters: (value: DatabricksParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataSourceParameters, visitor: Visitor<T>): T => {
    if (value.AmazonElasticsearchParameters !== undefined)
      return visitor.AmazonElasticsearchParameters(value.AmazonElasticsearchParameters);
    if (value.AthenaParameters !== undefined) return visitor.AthenaParameters(value.AthenaParameters);
    if (value.AuroraParameters !== undefined) return visitor.AuroraParameters(value.AuroraParameters);
    if (value.AuroraPostgreSqlParameters !== undefined)
      return visitor.AuroraPostgreSqlParameters(value.AuroraPostgreSqlParameters);
    if (value.AwsIotAnalyticsParameters !== undefined)
      return visitor.AwsIotAnalyticsParameters(value.AwsIotAnalyticsParameters);
    if (value.JiraParameters !== undefined) return visitor.JiraParameters(value.JiraParameters);
    if (value.MariaDbParameters !== undefined) return visitor.MariaDbParameters(value.MariaDbParameters);
    if (value.MySqlParameters !== undefined) return visitor.MySqlParameters(value.MySqlParameters);
    if (value.OracleParameters !== undefined) return visitor.OracleParameters(value.OracleParameters);
    if (value.PostgreSqlParameters !== undefined) return visitor.PostgreSqlParameters(value.PostgreSqlParameters);
    if (value.PrestoParameters !== undefined) return visitor.PrestoParameters(value.PrestoParameters);
    if (value.RdsParameters !== undefined) return visitor.RdsParameters(value.RdsParameters);
    if (value.RedshiftParameters !== undefined) return visitor.RedshiftParameters(value.RedshiftParameters);
    if (value.S3Parameters !== undefined) return visitor.S3Parameters(value.S3Parameters);
    if (value.ServiceNowParameters !== undefined) return visitor.ServiceNowParameters(value.ServiceNowParameters);
    if (value.SnowflakeParameters !== undefined) return visitor.SnowflakeParameters(value.SnowflakeParameters);
    if (value.SparkParameters !== undefined) return visitor.SparkParameters(value.SparkParameters);
    if (value.SqlServerParameters !== undefined) return visitor.SqlServerParameters(value.SqlServerParameters);
    if (value.TeradataParameters !== undefined) return visitor.TeradataParameters(value.TeradataParameters);
    if (value.TwitterParameters !== undefined) return visitor.TwitterParameters(value.TwitterParameters);
    if (value.AmazonOpenSearchParameters !== undefined)
      return visitor.AmazonOpenSearchParameters(value.AmazonOpenSearchParameters);
    if (value.ExasolParameters !== undefined) return visitor.ExasolParameters(value.ExasolParameters);
    if (value.DatabricksParameters !== undefined) return visitor.DatabricksParameters(value.DatabricksParameters);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
 *             underlying data source.</p>
 */
export interface SslProperties {
  /**
   * @public
   * <p>A Boolean option to control whether SSL should be disabled.</p>
   */
  DisableSsl?: boolean;
}

/**
 * @public
 * <p>VPC connection properties.</p>
 */
export interface VpcConnectionProperties {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
   */
  VpcConnectionArn: string | undefined;
}

/**
 * @public
 * <p>The override parameters for a single data source that is being imported.</p>
 */
export interface AssetBundleImportJobDataSourceOverrideParameters {
  /**
   * @public
   * <p>The ID of the data source to apply overrides to.</p>
   */
  DataSourceId: string | undefined;

  /**
   * @public
   * <p>A new name for the data source.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
   *             This is a variant type structure. For this structure to be valid, only one of the
   *             attributes can be non-null.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * @public
   * <p>VPC connection properties.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * @public
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
   *             underlying data source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * @public
   * <p>An optional structure that provides the credentials to be used to create the imported data source.</p>
   */
  Credentials?: AssetBundleImportJobDataSourceCredentials;
}

/**
 * @public
 * <p>Describes an error that occurred within an Asset Bundle import execution.</p>
 */
export interface AssetBundleImportJobError {
  /**
   * @public
   * <p>The ARN of the resource whose processing caused an error.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The specific error type or the error that occurred.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>A description of the error.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>A list of overrides for a specific <code>RefreshsSchedule</code> resource that is present in the asset bundle that is imported.</p>
 */
export interface AssetBundleImportJobRefreshScheduleOverrideParameters {
  /**
   * @public
   * <p>A partial identifier for the specific <code>RefreshSchedule</code> resource that is being overridden. This structure is used together with the <code>ScheduleID</code> structure.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>A partial identifier for the specific <code>RefreshSchedule</code> resource being overridden. This structure is used together with the <code>DataSetId</code> structure.</p>
   */
  ScheduleId: string | undefined;

  /**
   * @public
   * <p>An override for the <code>StartAfterDateTime</code> of a <code>RefreshSchedule</code>. Make
   *          sure that the <code>StartAfterDateTime</code> is set to a time that takes
   *          place in the future.</p>
   */
  StartAfterDateTime?: Date;
}

/**
 * @public
 * <p>An optional structure that configures resource ID overrides for the import job.</p>
 */
export interface AssetBundleImportJobResourceIdOverrideConfiguration {
  /**
   * @public
   * <p>An option to request a CloudFormation variable for a prefix to be prepended to each resource's ID before import. The prefix is only added to the asset IDs and does not change the name of the asset.</p>
   */
  PrefixForAllResources?: string;
}

/**
 * @public
 * <p>The override parameters for a single theme that is imported.</p>
 */
export interface AssetBundleImportJobThemeOverrideParameters {
  /**
   * @public
   * <p>The ID of the theme to apply overrides to.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>A new name for the theme.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>The override parameters for a single VPC connection that is imported.</p>
 */
export interface AssetBundleImportJobVPCConnectionOverrideParameters {
  /**
   * @public
   * <p>The ID of the VPC Connection to apply overrides to.</p>
   */
  VPCConnectionId: string | undefined;

  /**
   * @public
   * <p>A new name for the VPC connection.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A list of new subnet IDs for the VPC connection you are importing. This field is
   *          required if you are importing the VPC connection from another Amazon Web Services account or Region.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>A new security group ID for the VPC connection you are importing. This field is required
   *          if you are importing the VPC connection from another Amazon Web Services account or Region.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>An optional override of DNS resolvers to be used by the VPC connection.</p>
   */
  DnsResolvers?: string[];

  /**
   * @public
   * <p>An optional override of the role ARN to be used by the VPC connection.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 * <p>A list of overrides that modify the asset bundle resource configuration before the resource is imported.</p>
 */
export interface AssetBundleImportJobOverrideParameters {
  /**
   * @public
   * <p>An optional structure that configures resource ID overrides to be applied within the import job.</p>
   */
  ResourceIdOverrideConfiguration?: AssetBundleImportJobResourceIdOverrideConfiguration;

  /**
   * @public
   * <p>A list of overrides for any <code>VPCConnection</code> resources that are present in the asset bundle that is imported.</p>
   */
  VPCConnections?: AssetBundleImportJobVPCConnectionOverrideParameters[];

  /**
   * @public
   * <p>A list of overrides for any <code>RefreshSchedule</code> resources that are present in the asset bundle that is imported.</p>
   */
  RefreshSchedules?: AssetBundleImportJobRefreshScheduleOverrideParameters[];

  /**
   * @public
   * <p> A list of overrides for any <code>DataSource</code> resources that are present in the asset bundle that is imported.</p>
   */
  DataSources?: AssetBundleImportJobDataSourceOverrideParameters[];

  /**
   * @public
   * <p>A list of overrides for any <code>DataSet</code> resources that are present in the asset bundle that is imported.</p>
   */
  DataSets?: AssetBundleImportJobDataSetOverrideParameters[];

  /**
   * @public
   * <p>A list of overrides for any <code>Theme</code> resources that are present in the asset bundle that is imported.</p>
   */
  Themes?: AssetBundleImportJobThemeOverrideParameters[];

  /**
   * @public
   * <p>A list of overrides for any <code>Analysis</code> resources that are present in the asset bundle that is imported.</p>
   */
  Analyses?: AssetBundleImportJobAnalysisOverrideParameters[];

  /**
   * @public
   * <p>A list of overrides for any <code>Dashboard</code> resources that are present in the asset bundle that is imported.</p>
   */
  Dashboards?: AssetBundleImportJobDashboardOverrideParameters[];
}

/**
 * @public
 * @enum
 */
export const AssetBundleImportJobStatus = {
  FAILED: "FAILED",
  FAILED_ROLLBACK_COMPLETED: "FAILED_ROLLBACK_COMPLETED",
  FAILED_ROLLBACK_ERROR: "FAILED_ROLLBACK_ERROR",
  FAILED_ROLLBACK_IN_PROGRESS: "FAILED_ROLLBACK_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED_FOR_IMMEDIATE_EXECUTION: "QUEUED_FOR_IMMEDIATE_EXECUTION",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type AssetBundleImportJobStatus = (typeof AssetBundleImportJobStatus)[keyof typeof AssetBundleImportJobStatus];

/**
 * @public
 * <p>A summary of the import job that includes details of the requested job's configuration and its current status.</p>
 */
export interface AssetBundleImportJobSummary {
  /**
   * @public
   * <p>The current status of the import job.</p>
   */
  JobStatus?: AssetBundleImportJobStatus | string;

  /**
   * @public
   * <p>The ARN of the import job.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time that the import job was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.</p>
   */
  AssetBundleImportJobId?: string;

  /**
   * @public
   * <p>The failure action for the import job.</p>
   */
  FailureAction?: AssetBundleImportFailureAction | string;
}

/**
 * @public
 * <p>The source of the asset bundle zip file that contains the data that you want to import. The file must be in <code>QUICKSIGHT_JSON</code> format.</p>
 */
export interface AssetBundleImportSource {
  /**
   * @public
   * <p>The bytes of the base64 encoded asset bundle import zip file. This file can't exceed 20 MB.</p>
   *          <p>If you are calling the API operations from the Amazon Web Services SDK for Java, JavaScript, Python, or
   *          PHP, the SDK encodes base64 automatically to allow the direct setting of the zip file's bytes. If you are using
   *          an SDK for a different language or receiving related errors, try to base64 encode your data.</p>
   */
  Body?: Uint8Array;

  /**
   * @public
   * <p>The Amazon S3 URI for an asset bundle import file that exists in an Amazon S3 bucket that the caller
   *          has read access to. The file must be a zip format file and can't exceed 20 MB.</p>
   */
  S3Uri?: string;
}

/**
 * @public
 * <p>A description of the import source that you provide at the start of an import job. This value is set to either <code>Body</code> or <code>S3Uri</code>, depending on how the <code>StartAssetBundleImportJobRequest</code> is configured.</p>
 */
export interface AssetBundleImportSourceDescription {
  /**
   * @public
   * <p>An HTTPS download URL for the provided asset bundle that you optionally provided at the start of the import job. This URL is valid for five minutes after issuance. Call <code>DescribeAssetBundleExportJob</code> again for a fresh URL if needed. The downloaded asset bundle is a <code>.qs</code> zip file.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The Amazon S3 URI that you provided at the start of the import job.</p>
   */
  S3Uri?: string;
}

/**
 * @public
 * @enum
 */
export const AssignmentStatus = {
  DISABLED: "DISABLED",
  DRAFT: "DRAFT",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus];

/**
 * @public
 * @enum
 */
export const AuthenticationMethodOption = {
  ACTIVE_DIRECTORY: "ACTIVE_DIRECTORY",
  IAM_AND_QUICKSIGHT: "IAM_AND_QUICKSIGHT",
  IAM_IDENTITY_CENTER: "IAM_IDENTITY_CENTER",
  IAM_ONLY: "IAM_ONLY",
} as const;

/**
 * @public
 */
export type AuthenticationMethodOption = (typeof AuthenticationMethodOption)[keyof typeof AuthenticationMethodOption];

/**
 * @public
 * @enum
 */
export const AuthorSpecifiedAggregation = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  PERCENTILE: "PERCENTILE",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type AuthorSpecifiedAggregation = (typeof AuthorSpecifiedAggregation)[keyof typeof AuthorSpecifiedAggregation];

/**
 * @public
 * <p>The bookmarks configuration of an embedded dashboard.</p>
 */
export interface BookmarksConfigurations {
  /**
   * @public
   * <p>A Boolean value that determines whether a user
   *             can bookmark an embedded dashboard.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>The display options for tile borders for visuals.</p>
 */
export interface BorderStyle {
  /**
   * @public
   * <p>The option to enable display of borders for visuals.</p>
   */
  Show?: boolean;
}

/**
 * @public
 * <p>A calculated column for a dataset.</p>
 */
export interface CalculatedColumn {
  /**
   * @public
   * <p>Column name.</p>
   */
  ColumnName: string | undefined;

  /**
   * @public
   * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
   *             of a calculated column matches that of an existing calculated column, Amazon QuickSight
   *             preserves the existing calculated column.</p>
   */
  ColumnId: string | undefined;

  /**
   * @public
   * <p>An expression that defines the calculated column.</p>
   */
  Expression: string | undefined;
}

/**
 * @public
 */
export interface CancelIngestionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>An ID for the ingestion.</p>
   */
  IngestionId: string | undefined;
}

/**
 * @public
 */
export interface CancelIngestionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>An ID for the ingestion.</p>
   */
  IngestionId?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * <p>An internal failure occurred.</p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>One or more parameters has a value that isn't valid.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * @enum
 */
export const ExceptionResourceType = {
  ACCOUNT_SETTINGS: "ACCOUNT_SETTINGS",
  DATA_SET: "DATA_SET",
  DATA_SOURCE: "DATA_SOURCE",
  GROUP: "GROUP",
  IAMPOLICY_ASSIGNMENT: "IAMPOLICY_ASSIGNMENT",
  INGESTION: "INGESTION",
  NAMESPACE: "NAMESPACE",
  USER: "USER",
  VPC_CONNECTION: "VPC_CONNECTION",
} as const;

/**
 * @public
 */
export type ExceptionResourceType = (typeof ExceptionResourceType)[keyof typeof ExceptionResourceType];

/**
 * @public
 * <p>The resource specified already exists. </p>
 */
export class ResourceExistsException extends __BaseException {
  readonly name: "ResourceExistsException" = "ResourceExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceExistsException, __BaseException>) {
    super({
      name: "ResourceExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceExistsException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>One or more resources can't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>Access is throttled.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * @enum
 */
export const ColumnDataType = {
  DATETIME: "DATETIME",
  DECIMAL: "DECIMAL",
  INTEGER: "INTEGER",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type ColumnDataType = (typeof ColumnDataType)[keyof typeof ColumnDataType];

/**
 * @public
 * <p>A transform operation that casts a column to a different type.</p>
 */
export interface CastColumnTypeOperation {
  /**
   * @public
   * <p>Column name.</p>
   */
  ColumnName: string | undefined;

  /**
   * @public
   * <p>New column data type.</p>
   */
  NewColumnType: ColumnDataType | string | undefined;

  /**
   * @public
   * <p>When casting a column from string to datetime type, you can supply a string in a
   *             format supported by Amazon QuickSight to denote the source data format.</p>
   */
  Format?: string;
}

/**
 * @public
 * @enum
 */
export const CategoryFilterFunction = {
  CONTAINS: "CONTAINS",
  EXACT: "EXACT",
} as const;

/**
 * @public
 */
export type CategoryFilterFunction = (typeof CategoryFilterFunction)[keyof typeof CategoryFilterFunction];

/**
 * @public
 * @enum
 */
export const CategoryFilterType = {
  CUSTOM_FILTER: "CUSTOM_FILTER",
  CUSTOM_FILTER_LIST: "CUSTOM_FILTER_LIST",
  FILTER_LIST: "FILTER_LIST",
} as const;

/**
 * @public
 */
export type CategoryFilterType = (typeof CategoryFilterType)[keyof typeof CategoryFilterType];

/**
 * @public
 * <p>A structure that represents the cell value synonym.</p>
 */
export interface CellValueSynonym {
  /**
   * @public
   * <p>The cell value.</p>
   */
  CellValue?: string;

  /**
   * @public
   * <p>Other names or aliases for the cell value.</p>
   */
  Synonyms?: string[];
}

/**
 * @public
 * <p>A structure that represents a collective constant.</p>
 */
export interface CollectiveConstant {
  /**
   * @public
   * <p>A list of values for the collective constant.</p>
   */
  ValueList?: string[];
}

/**
 * @public
 * @enum
 */
export const ColumnDataRole = {
  DIMENSION: "DIMENSION",
  MEASURE: "MEASURE",
} as const;

/**
 * @public
 */
export type ColumnDataRole = (typeof ColumnDataRole)[keyof typeof ColumnDataRole];

/**
 * @public
 * <p>Metadata that contains a description for a column.</p>
 */
export interface ColumnDescription {
  /**
   * @public
   * <p>The text of a description for a column.</p>
   */
  Text?: string;
}

/**
 * @public
 * @enum
 */
export const GeoSpatialCountryCode = {
  US: "US",
} as const;

/**
 * @public
 */
export type GeoSpatialCountryCode = (typeof GeoSpatialCountryCode)[keyof typeof GeoSpatialCountryCode];

/**
 * @public
 * <p>Geospatial column group that denotes a hierarchy.</p>
 */
export interface GeoSpatialColumnGroup {
  /**
   * @public
   * <p>A display name for the hierarchy.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Country code.</p>
   */
  CountryCode?: GeoSpatialCountryCode | string;

  /**
   * @public
   * <p>Columns in this hierarchy.</p>
   */
  Columns: string[] | undefined;
}

/**
 * @public
 * <p>Groupings of columns that work together in certain Amazon QuickSight features. This is
 *             a variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 */
export interface ColumnGroup {
  /**
   * @public
   * <p>Geospatial column group that denotes a hierarchy.</p>
   */
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
}

/**
 * @public
 * <p>A structure describing the name, data type, and geographic role of the columns.</p>
 */
export interface ColumnGroupColumnSchema {
  /**
   * @public
   * <p>The name of the column group's column schema.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>The column group schema.</p>
 */
export interface ColumnGroupSchema {
  /**
   * @public
   * <p>The name of the column group schema.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A structure containing the list of schemas for column group columns.</p>
   */
  ColumnGroupColumnSchemaList?: ColumnGroupColumnSchema[];
}

/**
 * @public
 * <p>A rule defined to grant access on one or more restricted columns.
 *             Each dataset can have multiple rules.
 *             To create a restricted column, you add it to one or more rules.
 *             Each rule must contain at least one column and at least one user or group.
 *             To be able to see a restricted column, a user or group needs to be added
 *             to a rule for that column.</p>
 */
export interface ColumnLevelPermissionRule {
  /**
   * @public
   * <p>An array of Amazon Resource Names (ARNs) for Amazon QuickSight users or groups.</p>
   */
  Principals?: string[];

  /**
   * @public
   * <p>An array of column names.</p>
   */
  ColumnNames?: string[];
}

/**
 * @public
 * @enum
 */
export const ColumnOrderingType = {
  GREATER_IS_BETTER: "GREATER_IS_BETTER",
  LESSER_IS_BETTER: "LESSER_IS_BETTER",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type ColumnOrderingType = (typeof ColumnOrderingType)[keyof typeof ColumnOrderingType];

/**
 * @public
 * <p>The column schema.</p>
 */
export interface ColumnSchema {
  /**
   * @public
   * <p>The name of the column schema.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The data type of the column schema.</p>
   */
  DataType?: string;

  /**
   * @public
   * <p>The geographic role of the column schema.</p>
   */
  GeographicRole?: string;
}

/**
 * @public
 * @enum
 */
export const GeoSpatialDataRole = {
  CITY: "CITY",
  COUNTRY: "COUNTRY",
  COUNTY: "COUNTY",
  LATITUDE: "LATITUDE",
  LONGITUDE: "LONGITUDE",
  POSTCODE: "POSTCODE",
  STATE: "STATE",
} as const;

/**
 * @public
 */
export type GeoSpatialDataRole = (typeof GeoSpatialDataRole)[keyof typeof GeoSpatialDataRole];

/**
 * @public
 * <p>A tag for a column in a
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagColumnOperation.html">TagColumnOperation</a>
 *             </code>
 *             structure. This is a
 *             variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 */
export interface ColumnTag {
  /**
   * @public
   * <p>A geospatial role for a column.</p>
   */
  ColumnGeographicRole?: GeoSpatialDataRole | string;

  /**
   * @public
   * <p>A description for a column.</p>
   */
  ColumnDescription?: ColumnDescription;
}

/**
 * @public
 * @enum
 */
export const ColumnTagName = {
  COLUMN_DESCRIPTION: "COLUMN_DESCRIPTION",
  COLUMN_GEOGRAPHIC_ROLE: "COLUMN_GEOGRAPHIC_ROLE",
} as const;

/**
 * @public
 */
export type ColumnTagName = (typeof ColumnTagName)[keyof typeof ColumnTagName];

/**
 * @public
 * @enum
 */
export const UndefinedSpecifiedValueType = {
  LEAST: "LEAST",
  MOST: "MOST",
} as const;

/**
 * @public
 */
export type UndefinedSpecifiedValueType =
  (typeof UndefinedSpecifiedValueType)[keyof typeof UndefinedSpecifiedValueType];

/**
 * @public
 * <p>A structure that represents a comparative order.</p>
 */
export interface ComparativeOrder {
  /**
   * @public
   * <p>The ordering type for a column. Valid values for this structure are <code>GREATER_IS_BETTER</code>, <code>LESSER_IS_BETTER</code> and <code>SPECIFIED</code>.</p>
   */
  UseOrdering?: ColumnOrderingType | string;

  /**
   * @public
   * <p>The list of columns to be used in the ordering.</p>
   */
  SpecifedOrder?: string[];

  /**
   * @public
   * <p>The treat of undefined specified values. Valid values for this structure are <code>LEAST</code> and <code>MOST</code>.</p>
   */
  TreatUndefinedSpecifiedValues?: UndefinedSpecifiedValueType | string;
}

/**
 * @public
 * <p>A resource is already in a state that indicates an operation is happening that must complete
 * 			before a new update can be applied.</p>
 */
export class ConcurrentUpdatingException extends __BaseException {
  readonly name: "ConcurrentUpdatingException" = "ConcurrentUpdatingException";
  readonly $fault: "server" = "server";
  Message?: string;
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentUpdatingException, __BaseException>) {
    super({
      name: "ConcurrentUpdatingException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentUpdatingException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * @enum
 */
export const ConstantType = {
  COLLECTIVE: "COLLECTIVE",
  RANGE: "RANGE",
  SINGULAR: "SINGULAR",
} as const;

/**
 * @public
 */
export type ConstantType = (typeof ConstantType)[keyof typeof ConstantType];

/**
 * @public
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
 *             resource.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>Tag key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Tag value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountCustomizationRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to customize Amazon QuickSight for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The Amazon QuickSight namespace that you want to add customizations to.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The Amazon QuickSight customizations you're adding in the current Amazon Web Services Region. You can add
   *             these to an Amazon Web Services account and a QuickSight namespace. </p>
   *          <p>For example, you can add a default theme by setting <code>AccountCustomization</code>
   *             to the midnight theme: <code>"AccountCustomization": \{ "DefaultTheme":
   *                 "arn:aws:quicksight::aws:theme/MIDNIGHT" \}</code>. Or, you can add a custom theme by
   *             specifying <code>"AccountCustomization": \{ "DefaultTheme":
   *                 "arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639"
   *                 \}</code>. </p>
   */
  AccountCustomization: AccountCustomization | undefined;

  /**
   * @public
   * <p>A list of the tags that you want to attach to this resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAccountCustomizationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the customization that you created for this Amazon Web Services account.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to customize Amazon QuickSight for.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The namespace associated with the customization you're creating. </p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The Amazon QuickSight customizations you're adding in the current Amazon Web Services Region. </p>
   */
  AccountCustomization?: AccountCustomization;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * <p>This resource is currently unavailable.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @public
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface CreateAccountSubscriptionRequest {
  /**
   * @public
   * <p>The edition of Amazon QuickSight that you want your account to have. Currently, you can
   *             choose from <code>ENTERPRISE</code> or
   *                 <code>ENTERPRISE_AND_Q</code>.</p>
   *          <p>If you choose <code>ENTERPRISE_AND_Q</code>, the following parameters are
   *             required:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FirstName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EmailAddress</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ContactNumber</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Edition: Edition | string | undefined;

  /**
   * @public
   * <p>The method that you want to use to authenticate your Amazon QuickSight account. Currently, the valid values for this parameter are <code>IAM_AND_QUICKSIGHT</code>, <code>IAM_ONLY</code>, and <code>ACTIVE_DIRECTORY</code>.</p>
   *          <p>If you choose <code>ACTIVE_DIRECTORY</code>, provide an <code>ActiveDirectoryName</code>
   *             and an <code>AdminGroup</code> associated with your Active Directory.</p>
   */
  AuthenticationMethod: AuthenticationMethodOption | string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the account that you're using to create your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name of your Amazon QuickSight account. This name is unique over all of Amazon Web Services, and it appears only when users sign in. You can't change
   *                 <code>AccountName</code> value after the Amazon QuickSight account is
   *             created.</p>
   */
  AccountName: string | undefined;

  /**
   * @public
   * <p>The email address that you want Amazon QuickSight to send notifications to regarding your Amazon QuickSight account or Amazon QuickSight subscription.</p>
   */
  NotificationEmail: string | undefined;

  /**
   * @public
   * <p>The name of your Active Directory. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Amazon QuickSight account.</p>
   */
  ActiveDirectoryName?: string;

  /**
   * @public
   * <p>The realm of the Active Directory that is associated with your Amazon QuickSight account. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Amazon QuickSight account.</p>
   */
  Realm?: string;

  /**
   * @public
   * <p>The ID of the Active Directory that is associated with your Amazon QuickSight account.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The admin group associated with your Active Directory. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Amazon QuickSight account. For more information about using
   *             Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with
   *                     Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight
   *                 User Guide.</p>
   */
  AdminGroup?: string[];

  /**
   * @public
   * <p>The author group associated with your Active Directory. For more information about using
   *             Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with
   *                     Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight
   *                 User Guide.</p>
   */
  AuthorGroup?: string[];

  /**
   * @public
   * <p>The reader group associated with your Active Direcrtory. For more information about
   *             using Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with
   *                     Amazon QuickSight Enterprise Edition</a> in the <i>Amazon QuickSight
   *                 User Guide</i>.</p>
   */
  ReaderGroup?: string[];

  /**
   * @public
   * <p>The first name of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   */
  FirstName?: string;

  /**
   * @public
   * <p>The last name of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   */
  LastName?: string;

  /**
   * @public
   * <p>The email address of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   */
  EmailAddress?: string;

  /**
   * @public
   * <p>A 10-digit phone number for the author of the Amazon QuickSight account to use for
   *             future communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the
   *             selected edition of the new Amazon QuickSight account.</p>
   */
  ContactNumber?: string;
}

/**
 * @public
 * <p>A <code>SignupResponse</code> object that contains a summary of a newly created account.</p>
 */
export interface SignupResponse {
  /**
   * @public
   * <p>A Boolean that is <code>TRUE</code> if the Amazon QuickSight uses IAM as an
   *             authentication method.</p>
   */
  IAMUser?: boolean;

  /**
   * @public
   * <p>The user login name for your Amazon QuickSight account.</p>
   */
  userLoginName?: string;

  /**
   * @public
   * <p>The name of your Amazon QuickSight account.</p>
   */
  accountName?: string;

  /**
   * @public
   * <p>The type of Active Directory that is being used to authenticate the Amazon QuickSight
   *             account. Valid values are <code>SIMPLE_AD</code>, <code>AD_CONNECTOR</code>, and
   *                 <code>MICROSOFT_AD</code>.</p>
   */
  directoryType?: string;
}

/**
 * @public
 */
export interface CreateAccountSubscriptionResponse {
  /**
   * @public
   * <p>A <code>SignupResponse</code> object that returns information about a newly created Amazon QuickSight account.</p>
   */
  SignupResponse?: SignupResponse;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 * <p>One or more preconditions aren't met.</p>
 */
export class PreconditionNotMetException extends __BaseException {
  readonly name: "PreconditionNotMetException" = "PreconditionNotMetException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionNotMetException, __BaseException>) {
    super({
      name: "PreconditionNotMetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionNotMetException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>A date-time parameter.</p>
 */
export interface DateTimeParameter {
  /**
   * @public
   * <p>A display name for the date-time parameter.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The values for the date-time parameter.</p>
   */
  Values: Date[] | undefined;
}

/**
 * @public
 * <p>A decimal parameter.</p>
 */
export interface DecimalParameter {
  /**
   * @public
   * <p>A display name for the decimal parameter.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The values for the decimal parameter.</p>
   */
  Values: number[] | undefined;
}

/**
 * @public
 * <p>An integer parameter.</p>
 */
export interface IntegerParameter {
  /**
   * @public
   * <p>The name of the integer parameter.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The values for the integer parameter.</p>
   */
  Values: number[] | undefined;
}

/**
 * @public
 * <p>A string parameter.</p>
 */
export interface StringParameter {
  /**
   * @public
   * <p>A display name for a string parameter.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The values of a string parameter.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * <p>A list of Amazon QuickSight parameters and the list's override values.</p>
 */
export interface _Parameters {
  /**
   * @public
   * <p>The parameters that have a data type of string.</p>
   */
  StringParameters?: StringParameter[];

  /**
   * @public
   * <p>The parameters that have a data type of integer.</p>
   */
  IntegerParameters?: IntegerParameter[];

  /**
   * @public
   * <p>The parameters that have a data type of decimal.</p>
   */
  DecimalParameters?: DecimalParameter[];

  /**
   * @public
   * <p>The parameters that have a data type of date-time.</p>
   */
  DateTimeParameters?: DateTimeParameter[];
}

/**
 * @public
 * <p>Permission for the resource.</p>
 */
export interface ResourcePermission {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
   *             </li>
   *             <li>
   *                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
   *             </li>
   *             <li>
   *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
   *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
   *                     (This is less common.) </p>
   *             </li>
   *          </ul>
   */
  Principal: string | undefined;

  /**
   * @public
   * <p>The IAM action to grant or revoke permissions on.</p>
   */
  Actions: string[] | undefined;
}

/**
 * @public
 */
export interface CreateAnalysisRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account where you are creating an analysis.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the analysis that you're creating. This ID displays in the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;

  /**
   * @public
   * <p>A descriptive name for the analysis that you're creating. This name displays for the
   *             analysis in the Amazon QuickSight console. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The parameter names and override values that you want to use. An analysis can have
   *             any parameter type, and some parameters might accept multiple values. </p>
   */
  Parameters?: _Parameters;

  /**
   * @public
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis. You can use the <code>Permissions</code> structure to grant permissions by
   *             providing a list of Identity and Access Management (IAM) action information for each
   *             principal listed by Amazon Resource Name (ARN). </p>
   *          <p>To specify no permissions, omit <code>Permissions</code>.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>A source entity to use for the analysis that you're creating. This metadata structure
   *             contains details that describe a source template and one or more datasets.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   */
  SourceEntity?: AnalysisSourceEntity;

  /**
   * @public
   * <p>The ARN for the theme to apply to the analysis that you're creating. To see the theme
   *             in the Amazon QuickSight console, make sure that you have access to it.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             analysis.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The definition of an analysis.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   */
  Definition?: AnalysisDefinition;
}

/**
 * @public
 */
export interface CreateAnalysisResponse {
  /**
   * @public
   * <p>The ARN for the analysis.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the analysis.</p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>The status of the creation of the analysis. </p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 * <p>A limit is exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>Limit exceeded.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 */
export class UnsupportedUserEditionException extends __BaseException {
  readonly name: "UnsupportedUserEditionException" = "UnsupportedUserEditionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedUserEditionException, __BaseException>) {
    super({
      name: "UnsupportedUserEditionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedUserEditionException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>A transform operation that creates calculated columns. Columns created in one such
 *             operation form a lexical closure.</p>
 */
export interface CreateColumnsOperation {
  /**
   * @public
   * <p>Calculated columns to create.</p>
   */
  Columns: CalculatedColumn[] | undefined;
}

/**
 * @public
 * <p>The drill down options for data points in a dashbaord.</p>
 */
export interface DataPointDrillUpDownOption {
  /**
   * @public
   * <p>The status of the drill down options of data points.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

/**
 * @public
 * <p>The data point menu options of a dashboard.</p>
 */
export interface DataPointMenuLabelOption {
  /**
   * @public
   * <p>The status of the data point menu options.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

/**
 * @public
 * <p>The data point tooltip options.</p>
 */
export interface DataPointTooltipOption {
  /**
   * @public
   * <p>The status of the data point tool tip options.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

/**
 * @public
 * <p>Export to .csv option.</p>
 */
export interface ExportToCSVOption {
  /**
   * @public
   * <p>Availability status.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

/**
 * @public
 * <p>Determines whether or not hidden fields are visible on exported dashbaords.</p>
 */
export interface ExportWithHiddenFieldsOption {
  /**
   * @public
   * <p>The status of the export with hidden fields options.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

/**
 * @public
 * @enum
 */
export const DashboardUIState = {
  COLLAPSED: "COLLAPSED",
  EXPANDED: "EXPANDED",
} as const;

/**
 * @public
 */
export type DashboardUIState = (typeof DashboardUIState)[keyof typeof DashboardUIState];

/**
 * @public
 * <p>Sheet controls option.</p>
 */
export interface SheetControlsOption {
  /**
   * @public
   * <p>Visibility state.</p>
   */
  VisibilityState?: DashboardUIState | string;
}

/**
 * @public
 * <p>The sheet layout maximization options of a dashbaord.</p>
 */
export interface SheetLayoutElementMaximizationOption {
  /**
   * @public
   * <p>The status of the sheet layout maximization options of a dashbaord.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

/**
 * @public
 * <p>The axis sort options for a visual.</p>
 */
export interface VisualAxisSortOption {
  /**
   * @public
   * <p>The availaiblity status of a visual's axis sort options.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

/**
 * @public
 * <p>The menu options for a visual.</p>
 */
export interface VisualMenuOption {
  /**
   * @public
   * <p>The availaiblity status of a visual's menu options.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

/**
 * @public
 * <p>Determines if hidden fields are included in an exported dashboard.</p>
 */
export interface ExportHiddenFieldsOption {
  /**
   * @public
   * <p>The status of the export hidden fields options of a dashbaord.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

/**
 * @public
 * <p>The visual publish options of a visual in a dashboard</p>
 */
export interface DashboardVisualPublishOptions {
  /**
   * @public
   * <p>Determines if hidden fields are included in an exported dashboard.</p>
   */
  ExportHiddenFieldsOption?: ExportHiddenFieldsOption;
}

/**
 * @public
 * <p>Dashboard publish options.</p>
 */
export interface DashboardPublishOptions {
  /**
   * @public
   * <p>Ad hoc (one-time) filtering option.</p>
   */
  AdHocFilteringOption?: AdHocFilteringOption;

  /**
   * @public
   * <p>Export to .csv option.</p>
   */
  ExportToCSVOption?: ExportToCSVOption;

  /**
   * @public
   * <p>Sheet controls option.</p>
   */
  SheetControlsOption?: SheetControlsOption;

  /**
   * @public
   * @deprecated
   *
   * <p>The visual publish options of a visual in a dashboard.</p>
   */
  VisualPublishOptions?: DashboardVisualPublishOptions;

  /**
   * @public
   * <p>The sheet layout maximization options of a dashbaord.</p>
   */
  SheetLayoutElementMaximizationOption?: SheetLayoutElementMaximizationOption;

  /**
   * @public
   * <p>The menu options of a visual in a dashboard.</p>
   */
  VisualMenuOption?: VisualMenuOption;

  /**
   * @public
   * <p>The axis sort options of a dashboard.</p>
   */
  VisualAxisSortOption?: VisualAxisSortOption;

  /**
   * @public
   * <p>Determines if hidden fields are exported with a dashboard.</p>
   */
  ExportWithHiddenFieldsOption?: ExportWithHiddenFieldsOption;

  /**
   * @public
   * <p>The drill-down options of data points in a dashboard.</p>
   */
  DataPointDrillUpDownOption?: DataPointDrillUpDownOption;

  /**
   * @public
   * <p>The data point menu label options of a dashboard.</p>
   */
  DataPointMenuLabelOption?: DataPointMenuLabelOption;

  /**
   * @public
   * <p>The data point tool tip options of a dashboard.</p>
   */
  DataPointTooltipOption?: DataPointTooltipOption;
}

/**
 * @public
 * <p>The contents of a dashboard.</p>
 */
export interface DashboardVersionDefinition {
  /**
   * @public
   * <p>An array of dataset identifier declarations. With
   *             this mapping,you can use dataset identifiers instead of dataset Amazon Resource Names (ARNs) throughout the dashboard's sub-structures.</p>
   */
  DataSetIdentifierDeclarations: DataSetIdentifierDeclaration[] | undefined;

  /**
   * @public
   * <p>An array of sheet definitions for a dashboard.</p>
   */
  Sheets?: SheetDefinition[];

  /**
   * @public
   * <p>An array of calculated field definitions for the dashboard.</p>
   */
  CalculatedFields?: CalculatedField[];

  /**
   * @public
   * <p>The parameter declarations for a dashboard. Parameters are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  ParameterDeclarations?: ParameterDeclaration[];

  /**
   * @public
   * <p>The filter definitions for a dashboard.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html">Filtering Data in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  FilterGroups?: FilterGroup[];

  /**
   * @public
   * <p>An array of dashboard-level column configurations. Column configurations
   *             are used to set the default formatting for a column that
   *             is used throughout a dashboard. </p>
   */
  ColumnConfigurations?: ColumnConfiguration[];

  /**
   * @public
   * <p>The configuration for default analysis settings.</p>
   */
  AnalysisDefaults?: AnalysisDefaults;
}

/**
 * @public
 * <p>Dashboard source template.</p>
 */
export interface DashboardSourceTemplate {
  /**
   * @public
   * <p>Dataset references.</p>
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 * <p>Dashboard source entity.</p>
 */
export interface DashboardSourceEntity {
  /**
   * @public
   * <p>Source template.</p>
   */
  SourceTemplate?: DashboardSourceTemplate;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account where you want to create the dashboard.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The display name of the dashboard.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The parameters for the creation of the dashboard, which you want to use to override
   *             the default settings. A dashboard can have any type of parameters, and some parameters
   *             might accept multiple values. </p>
   */
  Parameters?: _Parameters;

  /**
   * @public
   * <p>A structure that contains the permissions of the dashboard. You can use this structure
   *             for granting permissions by providing a list of IAM action information for each
   *             principal ARN. </p>
   *          <p>To specify no permissions, omit the permissions list.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The entity that you are using as a source when you create the dashboard. In
   *             <code>SourceEntity</code>, you specify the type of object you're using as source. You
   *             can only create a dashboard from a template, so you use a <code>SourceTemplate</code>
   *             entity. If you need to create a dashboard from an analysis, first convert the analysis
   *             to a template by using the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>
   *             </code>
   *             API operation. For
   *             <code>SourceTemplate</code>, specify the Amazon Resource Name (ARN) of the source
   *             template. The <code>SourceTemplate</code>ARN can contain any Amazon Web Services account and any
   *             Amazon QuickSight-supported Amazon Web Services Region. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> to
   *             list the replacement datasets for the placeholders listed in the original. The schema in
   *             each dataset must match its placeholder. </p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   */
  SourceEntity?: DashboardSourceEntity;

  /**
   * @public
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             dashboard.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A description for the first version of the dashboard being created.</p>
   */
  VersionDescription?: string;

  /**
   * @public
   * <p>Options for publishing the dashboard when you create it:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>AdHocFilteringOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. When this is
   *                     set to <code>DISABLED</code>, Amazon QuickSight disables the left filter pane on the
   *                     published dashboard, which can be used for ad hoc (one-time) filtering. This
   *                     option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. The visual
   *                     option to export data to .CSV format isn't enabled when this is set to
   *                     <code>DISABLED</code>. This option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This
   *                     visibility state can be either <code>COLLAPSED</code> or <code>EXPANDED</code>.
   *                     This option is <code>COLLAPSED</code> by default. </p>
   *             </li>
   *          </ul>
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
   *             you add a value for this field, it overrides the value that is used in the source
   *             entity. The theme ARN must exist in the same Amazon Web Services account where you create the
   *             dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>The definition of a dashboard.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   *             order for the request to be valid.</p>
   */
  Definition?: DashboardVersionDefinition;
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * @public
   * <p>The ARN of the dashboard.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ARN of the dashboard, including the version number of the first version that is
   *             created.</p>
   */
  VersionArn?: string;

  /**
   * @public
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>The status of the dashboard creation request.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 * <p>The default values of a date time parameter.</p>
 */
export interface DateTimeDatasetParameterDefaultValues {
  /**
   * @public
   * <p>A list of static default values for a given date time parameter.</p>
   */
  StaticValues?: Date[];
}

/**
 * @public
 * @enum
 */
export const DatasetParameterValueType = {
  MULTI_VALUED: "MULTI_VALUED",
  SINGLE_VALUED: "SINGLE_VALUED",
} as const;

/**
 * @public
 */
export type DatasetParameterValueType = (typeof DatasetParameterValueType)[keyof typeof DatasetParameterValueType];

/**
 * @public
 * <p>A date time parameter for a dataset.</p>
 */
export interface DateTimeDatasetParameter {
  /**
   * @public
   * <p>An identifier for the parameter that is created in the dataset.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The name of the date time parameter that is created in the dataset.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   */
  ValueType: DatasetParameterValueType | string | undefined;

  /**
   * @public
   * <p>The time granularity of the date time parameter.</p>
   */
  TimeGranularity?: TimeGranularity | string;

  /**
   * @public
   * <p>A list of default values for a given date time parameter. This structure only accepts static values.</p>
   */
  DefaultValues?: DateTimeDatasetParameterDefaultValues;
}

/**
 * @public
 * <p>The default values of a decimal parameter.</p>
 */
export interface DecimalDatasetParameterDefaultValues {
  /**
   * @public
   * <p>A list of static default values for a given decimal parameter.</p>
   */
  StaticValues?: number[];
}

/**
 * @public
 * <p>A decimal parameter for a dataset.</p>
 */
export interface DecimalDatasetParameter {
  /**
   * @public
   * <p>An identifier for the decimal parameter created in the dataset.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The name of the decimal parameter that is created in the dataset.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   */
  ValueType: DatasetParameterValueType | string | undefined;

  /**
   * @public
   * <p>A list of default values for a given decimal parameter. This structure only accepts static values.</p>
   */
  DefaultValues?: DecimalDatasetParameterDefaultValues;
}

/**
 * @public
 * <p>The default values of an integer parameter.</p>
 */
export interface IntegerDatasetParameterDefaultValues {
  /**
   * @public
   * <p>A list of static default values for a given integer parameter.</p>
   */
  StaticValues?: number[];
}

/**
 * @public
 * <p>An integer parameter for a dataset.</p>
 */
export interface IntegerDatasetParameter {
  /**
   * @public
   * <p>An identifier for the integer parameter created in the dataset.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The name of the integer parameter that is created in the dataset.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   */
  ValueType: DatasetParameterValueType | string | undefined;

  /**
   * @public
   * <p>A list of default values for a given integer parameter. This structure only accepts static values.</p>
   */
  DefaultValues?: IntegerDatasetParameterDefaultValues;
}

/**
 * @public
 * <p>The default values of a string parameter.</p>
 */
export interface StringDatasetParameterDefaultValues {
  /**
   * @public
   * <p>A list of static default values for a given string parameter.</p>
   */
  StaticValues?: string[];
}

/**
 * @public
 * <p>A string parameter for a dataset.</p>
 */
export interface StringDatasetParameter {
  /**
   * @public
   * <p>An identifier for the string parameter that is created in the dataset.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The name of the string parameter that is created in the dataset.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value type of the dataset parameter. Valid values are <code>single value</code> or <code>multi value</code>.</p>
   */
  ValueType: DatasetParameterValueType | string | undefined;

  /**
   * @public
   * <p>A list of default values for a given string dataset parameter type. This structure only accepts static values.</p>
   */
  DefaultValues?: StringDatasetParameterDefaultValues;
}

/**
 * @public
 * <p>A dataset parameter.</p>
 */
export interface DatasetParameter {
  /**
   * @public
   * <p>A string parameter that is created in the dataset.</p>
   */
  StringDatasetParameter?: StringDatasetParameter;

  /**
   * @public
   * <p>A decimal parameter that is created in the dataset.</p>
   */
  DecimalDatasetParameter?: DecimalDatasetParameter;

  /**
   * @public
   * <p>An integer parameter that is created in the dataset.</p>
   */
  IntegerDatasetParameter?: IntegerDatasetParameter;

  /**
   * @public
   * <p>A date time parameter that is created in the dataset.</p>
   */
  DateTimeDatasetParameter?: DateTimeDatasetParameter;
}

/**
 * @public
 * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
 */
export interface DataSetUsageConfiguration {
  /**
   * @public
   * <p>An option that controls whether a child dataset of a direct query can use this dataset as a source.</p>
   */
  DisableUseAsDirectQuerySource?: boolean;

  /**
   * @public
   * <p>An option that controls whether a child dataset that's stored in QuickSight can use this dataset as a source.</p>
   */
  DisableUseAsImportedSource?: boolean;
}

/**
 * @public
 * <p>A FieldFolder element is a folder that contains fields and nested subfolders.</p>
 */
export interface FieldFolder {
  /**
   * @public
   * <p>The description for a field folder.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A folder has a list of columns. A column can only be in one folder.</p>
   */
  columns?: string[];
}

/**
 * @public
 * @enum
 */
export const DataSetImportMode = {
  DIRECT_QUERY: "DIRECT_QUERY",
  SPICE: "SPICE",
} as const;

/**
 * @public
 */
export type DataSetImportMode = (typeof DataSetImportMode)[keyof typeof DataSetImportMode];

/**
 * @public
 * <p>A transform operation that filters rows based on a condition.</p>
 */
export interface FilterOperation {
  /**
   * @public
   * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
   *             evaluates to true are kept in the dataset.</p>
   */
  ConditionExpression: string | undefined;
}

/**
 * @public
 * <p>The configuration that overrides the existing default values for a dataset parameter that is inherited from another dataset.</p>
 */
export interface NewDefaultValues {
  /**
   * @public
   * <p>A list of static default values for a given string parameter.</p>
   */
  StringStaticValues?: string[];

  /**
   * @public
   * <p>A list of static default values for a given decimal parameter.</p>
   */
  DecimalStaticValues?: number[];

  /**
   * @public
   * <p>A list of static default values for a given date time parameter.</p>
   */
  DateTimeStaticValues?: Date[];

  /**
   * @public
   * <p>A list of static default values for a given integer parameter.</p>
   */
  IntegerStaticValues?: number[];
}

/**
 * @public
 * <p>A transform operation that overrides the dataset parameter values that are defined in another dataset.</p>
 */
export interface OverrideDatasetParameterOperation {
  /**
   * @public
   * <p>The name of the parameter to be overridden with different values.</p>
   */
  ParameterName: string | undefined;

  /**
   * @public
   * <p>The new name for the parameter.</p>
   */
  NewParameterName?: string;

  /**
   * @public
   * <p>The new default values for the parameter.</p>
   */
  NewDefaultValues?: NewDefaultValues;
}

/**
 * @public
 * <p>A transform operation that projects columns. Operations that come after a projection
 *             can only refer to projected columns.</p>
 */
export interface ProjectOperation {
  /**
   * @public
   * <p>Projected columns.</p>
   */
  ProjectedColumns: string[] | undefined;
}

/**
 * @public
 * <p>A transform operation that renames a column.</p>
 */
export interface RenameColumnOperation {
  /**
   * @public
   * <p>The name of the column to be renamed.</p>
   */
  ColumnName: string | undefined;

  /**
   * @public
   * <p>The new name for the column.</p>
   */
  NewColumnName: string | undefined;
}

/**
 * @public
 * <p>A transform operation that tags a column with additional information.</p>
 */
export interface TagColumnOperation {
  /**
   * @public
   * <p>The column that this operation acts on.</p>
   */
  ColumnName: string | undefined;

  /**
   * @public
   * <p>The dataset column tag, currently only used for geospatial type tagging.</p>
   *          <note>
   *             <p>This is not tags for the Amazon Web Services tagging feature.</p>
   *          </note>
   */
  Tags: ColumnTag[] | undefined;
}

/**
 * @public
 * <p>A transform operation that removes tags associated with a column.</p>
 */
export interface UntagColumnOperation {
  /**
   * @public
   * <p>The column that this operation acts on.</p>
   */
  ColumnName: string | undefined;

  /**
   * @public
   * <p>The column tags to remove from this column.</p>
   */
  TagNames: (ColumnTagName | string)[] | undefined;
}

/**
 * @public
 * <p>A data transformation on a logical table. This is a variant type structure. For this
 *             structure to be valid, only one of the attributes can be non-null.</p>
 */
export type TransformOperation =
  | TransformOperation.CastColumnTypeOperationMember
  | TransformOperation.CreateColumnsOperationMember
  | TransformOperation.FilterOperationMember
  | TransformOperation.OverrideDatasetParameterOperationMember
  | TransformOperation.ProjectOperationMember
  | TransformOperation.RenameColumnOperationMember
  | TransformOperation.TagColumnOperationMember
  | TransformOperation.UntagColumnOperationMember
  | TransformOperation.$UnknownMember;

/**
 * @public
 */
export namespace TransformOperation {
  /**
   * @public
   * <p>An operation that projects columns. Operations that come after a projection can only
   *             refer to projected columns.</p>
   */
  export interface ProjectOperationMember {
    ProjectOperation: ProjectOperation;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An operation that filters rows based on some condition.</p>
   */
  export interface FilterOperationMember {
    ProjectOperation?: never;
    FilterOperation: FilterOperation;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An operation that creates calculated columns. Columns created in one such operation
   *             form a lexical closure.</p>
   */
  export interface CreateColumnsOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation: CreateColumnsOperation;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An operation that renames a column.</p>
   */
  export interface RenameColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation: RenameColumnOperation;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A transform operation that casts a column to a different type.</p>
   */
  export interface CastColumnTypeOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation: CastColumnTypeOperation;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An operation that tags a column with additional information.</p>
   */
  export interface TagColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation: TagColumnOperation;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A transform operation that removes tags associated with a column.</p>
   */
  export interface UntagColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation: UntagColumnOperation;
    OverrideDatasetParameterOperation?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A transform operation that overrides the dataset parameter values that are defined in another dataset.</p>
   */
  export interface OverrideDatasetParameterOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation: OverrideDatasetParameterOperation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    OverrideDatasetParameterOperation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ProjectOperation: (value: ProjectOperation) => T;
    FilterOperation: (value: FilterOperation) => T;
    CreateColumnsOperation: (value: CreateColumnsOperation) => T;
    RenameColumnOperation: (value: RenameColumnOperation) => T;
    CastColumnTypeOperation: (value: CastColumnTypeOperation) => T;
    TagColumnOperation: (value: TagColumnOperation) => T;
    UntagColumnOperation: (value: UntagColumnOperation) => T;
    OverrideDatasetParameterOperation: (value: OverrideDatasetParameterOperation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TransformOperation, visitor: Visitor<T>): T => {
    if (value.ProjectOperation !== undefined) return visitor.ProjectOperation(value.ProjectOperation);
    if (value.FilterOperation !== undefined) return visitor.FilterOperation(value.FilterOperation);
    if (value.CreateColumnsOperation !== undefined) return visitor.CreateColumnsOperation(value.CreateColumnsOperation);
    if (value.RenameColumnOperation !== undefined) return visitor.RenameColumnOperation(value.RenameColumnOperation);
    if (value.CastColumnTypeOperation !== undefined)
      return visitor.CastColumnTypeOperation(value.CastColumnTypeOperation);
    if (value.TagColumnOperation !== undefined) return visitor.TagColumnOperation(value.TagColumnOperation);
    if (value.UntagColumnOperation !== undefined) return visitor.UntagColumnOperation(value.UntagColumnOperation);
    if (value.OverrideDatasetParameterOperation !== undefined)
      return visitor.OverrideDatasetParameterOperation(value.OverrideDatasetParameterOperation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Properties associated with the columns participating in a join.</p>
 */
export interface JoinKeyProperties {
  /**
   * @public
   * <p>A value that indicates that a row in a table is uniquely identified by the columns in
   *             a join key. This is used by Amazon QuickSight to optimize query performance.</p>
   */
  UniqueKey?: boolean;
}

/**
 * @public
 * @enum
 */
export const JoinType = {
  INNER: "INNER",
  LEFT: "LEFT",
  OUTER: "OUTER",
  RIGHT: "RIGHT",
} as const;

/**
 * @public
 */
export type JoinType = (typeof JoinType)[keyof typeof JoinType];

/**
 * @public
 * <p>The instructions associated with a join. </p>
 */
export interface JoinInstruction {
  /**
   * @public
   * <p>The operand on the left side of a join.</p>
   */
  LeftOperand: string | undefined;

  /**
   * @public
   * <p>The operand on the right side of a join.</p>
   */
  RightOperand: string | undefined;

  /**
   * @public
   * <p>Join key properties of the left operand.</p>
   */
  LeftJoinKeyProperties?: JoinKeyProperties;

  /**
   * @public
   * <p>Join key properties of the right operand.</p>
   */
  RightJoinKeyProperties?: JoinKeyProperties;

  /**
   * @public
   * <p>The type of join that it is.</p>
   */
  Type: JoinType | string | undefined;

  /**
   * @public
   * <p>The join instructions provided in the <code>ON</code> clause of a join.</p>
   */
  OnClause: string | undefined;
}

/**
 * @public
 * <p>Information about the source of a logical table. This is a variant type structure. For
 *             this structure to be valid, only one of the attributes can be non-null.</p>
 */
export interface LogicalTableSource {
  /**
   * @public
   * <p>Specifies the result of a join of two logical tables.</p>
   */
  JoinInstruction?: JoinInstruction;

  /**
   * @public
   * <p>Physical table ID.</p>
   */
  PhysicalTableId?: string;

  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the parent dataset.</p>
   */
  DataSetArn?: string;
}

/**
 * @public
 * <p>A <i>logical table</i> is a unit that joins and that data
 *             transformations operate on. A logical table has a source, which can be either a physical
 *             table or result of a join. When a logical table points to a physical table, the logical
 *             table acts as a mutable copy of that physical table through transform operations.</p>
 */
export interface LogicalTable {
  /**
   * @public
   * <p>A display name for the logical table.</p>
   */
  Alias: string | undefined;

  /**
   * @public
   * <p>Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null. </p>
   */
  DataTransforms?: TransformOperation[];

  /**
   * @public
   * <p>Source of this logical table.</p>
   */
  Source: LogicalTableSource | undefined;
}

/**
 * @public
 * @enum
 */
export const InputColumnDataType = {
  BIT: "BIT",
  BOOLEAN: "BOOLEAN",
  DATETIME: "DATETIME",
  DECIMAL: "DECIMAL",
  INTEGER: "INTEGER",
  JSON: "JSON",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type InputColumnDataType = (typeof InputColumnDataType)[keyof typeof InputColumnDataType];

/**
 * @public
 * <p>Metadata for a column that is used as the input of a transform operation.</p>
 */
export interface InputColumn {
  /**
   * @public
   * <p>The name of this column in the underlying data source.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The data type of the column.</p>
   */
  Type: InputColumnDataType | string | undefined;
}

/**
 * @public
 * <p>A physical table type built from the results of the custom SQL query.</p>
 */
export interface CustomSql {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * @public
   * <p>A display name for the SQL query result.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The SQL query.</p>
   */
  SqlQuery: string | undefined;

  /**
   * @public
   * <p>The column schema from the SQL query result set.</p>
   */
  Columns?: InputColumn[];
}

/**
 * @public
 * <p>A physical table type for relational data sources.</p>
 */
export interface RelationalTable {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * @public
   * <p>The catalog associated with a table.</p>
   */
  Catalog?: string;

  /**
   * @public
   * <p>The schema name. This name applies to certain relational database engines.</p>
   */
  Schema?: string;

  /**
   * @public
   * <p>The name of the relational table.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The column schema of the table.</p>
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FileFormat = {
  CLF: "CLF",
  CSV: "CSV",
  ELF: "ELF",
  JSON: "JSON",
  TSV: "TSV",
  XLSX: "XLSX",
} as const;

/**
 * @public
 */
export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat];

/**
 * @public
 * @enum
 */
export const TextQualifier = {
  DOUBLE_QUOTE: "DOUBLE_QUOTE",
  SINGLE_QUOTE: "SINGLE_QUOTE",
} as const;

/**
 * @public
 */
export type TextQualifier = (typeof TextQualifier)[keyof typeof TextQualifier];

/**
 * @public
 * <p>Information about the format for a source file or files.</p>
 */
export interface UploadSettings {
  /**
   * @public
   * <p>File format.</p>
   */
  Format?: FileFormat | string;

  /**
   * @public
   * <p>A row number to start reading data from.</p>
   */
  StartFromRow?: number;

  /**
   * @public
   * <p>Whether the file has a header row, or the files each have a header row.</p>
   */
  ContainsHeader?: boolean;

  /**
   * @public
   * <p>Text qualifier.</p>
   */
  TextQualifier?: TextQualifier | string;

  /**
   * @public
   * <p>The delimiter between values in the file.</p>
   */
  Delimiter?: string;
}

/**
 * @public
 * <p>A physical table type for an S3 data source.</p>
 */
export interface S3Source {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * @public
   * <p>Information about the format for the S3 source file or files.</p>
   */
  UploadSettings?: UploadSettings;

  /**
   * @public
   * <p>A physical table type for an S3 data source.</p>
   *          <note>
   *             <p>For files that aren't JSON, only <code>STRING</code> data types are supported in input columns.</p>
   *          </note>
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * @public
 * <p>A view of a data source that contains information about the shape of the data in the
 *             underlying source. This is a variant type structure. For this structure to be valid,
 *             only one of the attributes can be non-null.</p>
 */
export type PhysicalTable =
  | PhysicalTable.CustomSqlMember
  | PhysicalTable.RelationalTableMember
  | PhysicalTable.S3SourceMember
  | PhysicalTable.$UnknownMember;

/**
 * @public
 */
export namespace PhysicalTable {
  /**
   * @public
   * <p>A physical table type for relational data sources.</p>
   */
  export interface RelationalTableMember {
    RelationalTable: RelationalTable;
    CustomSql?: never;
    S3Source?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A physical table type built from the results of the custom SQL query.</p>
   */
  export interface CustomSqlMember {
    RelationalTable?: never;
    CustomSql: CustomSql;
    S3Source?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A physical table type for as S3 data source.</p>
   */
  export interface S3SourceMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source: S3Source;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    RelationalTable: (value: RelationalTable) => T;
    CustomSql: (value: CustomSql) => T;
    S3Source: (value: S3Source) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PhysicalTable, visitor: Visitor<T>): T => {
    if (value.RelationalTable !== undefined) return visitor.RelationalTable(value.RelationalTable);
    if (value.CustomSql !== undefined) return visitor.CustomSql(value.CustomSql);
    if (value.S3Source !== undefined) return visitor.S3Source(value.S3Source);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RowLevelPermissionFormatVersion = {
  VERSION_1: "VERSION_1",
  VERSION_2: "VERSION_2",
} as const;

/**
 * @public
 */
export type RowLevelPermissionFormatVersion =
  (typeof RowLevelPermissionFormatVersion)[keyof typeof RowLevelPermissionFormatVersion];

/**
 * @public
 * @enum
 */
export const RowLevelPermissionPolicy = {
  DENY_ACCESS: "DENY_ACCESS",
  GRANT_ACCESS: "GRANT_ACCESS",
} as const;

/**
 * @public
 */
export type RowLevelPermissionPolicy = (typeof RowLevelPermissionPolicy)[keyof typeof RowLevelPermissionPolicy];

/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * <p>Information about a dataset that contains permissions for row-level security (RLS).
 *             The permissions dataset maps fields to users or groups. For more information, see
 *             <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Amazon QuickSight User
 *                 Guide</i>.</p>
 *          <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
 *             not supported for new RLS datasets.</p>
 */
export interface RowLevelPermissionDataSet {
  /**
   * @public
   * <p>The namespace associated with the dataset that contains permissions for RLS.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The type of permissions to use when interpreting the permissions for RLS. <code>DENY_ACCESS</code>
   *         is included for backward compatibility only.</p>
   */
  PermissionPolicy: RowLevelPermissionPolicy | string | undefined;

  /**
   * @public
   * <p>The user or group rules associated with the dataset that contains permissions for RLS.</p>
   *          <p>By default, <code>FormatVersion</code> is <code>VERSION_1</code>. When <code>FormatVersion</code> is <code>VERSION_1</code>, <code>UserName</code> and <code>GroupName</code> are required. When <code>FormatVersion</code> is <code>VERSION_2</code>, <code>UserARN</code> and <code>GroupARN</code> are required, and <code>Namespace</code> must not exist.</p>
   */
  FormatVersion?: RowLevelPermissionFormatVersion | string;

  /**
   * @public
   * <p>The status of the row-level security permission dataset. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   */
  Status?: Status | string;
}

/**
 * @public
 * <p>A set of rules associated with a tag.</p>
 */
export interface RowLevelPermissionTagRule {
  /**
   * @public
   * <p>The unique key for a tag.</p>
   */
  TagKey: string | undefined;

  /**
   * @public
   * <p>The column name that a tag key is assigned to.</p>
   */
  ColumnName: string | undefined;

  /**
   * @public
   * <p>A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.</p>
   */
  TagMultiValueDelimiter?: string;

  /**
   * @public
   * <p>A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>
   */
  MatchAllValue?: string;
}

/**
 * @public
 * <p>The configuration of tags on a dataset to set row-level security. </p>
 */
export interface RowLevelPermissionTagConfiguration {
  /**
   * @public
   * <p>The status of row-level security tags. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   */
  Status?: Status | string;

  /**
   * @public
   * <p>A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.</p>
   */
  TagRules: RowLevelPermissionTagRule[] | undefined;

  /**
   * @public
   * <p>A list of tag configuration rules to apply to a dataset. All tag configurations have the OR condition. Tags within each tile will be joined (AND). At least one rule in this structure must have all tag values assigned to it to apply Row-level security (RLS) to the dataset.</p>
   */
  TagRuleConfigurations?: string[][];
}

/**
 * @public
 */
export interface CreateDataSetRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>An ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap: Record<string, PhysicalTable> | undefined;

  /**
   * @public
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   */
  LogicalTableMap?: Record<string, LogicalTable>;

  /**
   * @public
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode: DataSetImportMode | string | undefined;

  /**
   * @public
   * <p>Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * @public
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   */
  FieldFolders?: Record<string, FieldFolder>;

  /**
   * @public
   * <p>A list of resource permissions on the dataset.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The row-level security configuration for the data that you want to create.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * @public
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only.</p>
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;

  /**
   * @public
   * <p>A set of one or more definitions of a <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
   *             </code>.</p>
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];

  /**
   * @public
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration;

  /**
   * @public
   * <p>The parameter declarations of the dataset.</p>
   */
  DatasetParameters?: DatasetParameter[];
}

/**
 * @public
 */
export interface CreateDataSetResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionArn?: string;

  /**
   * @public
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionId?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * <p>The combination of user name and password that are used as credentials.</p>
 */
export interface CredentialPair {
  /**
   * @public
   * <p>User name.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>Password.</p>
   */
  Password: string | undefined;

  /**
   * @public
   * <p>A set of alternate data source parameters that you want to share for these
   *             credentials. The credentials are applied in tandem with the data source parameters when
   *             you copy a data source by using a create or update request. The API operation compares
   *             the <code>DataSourceParameters</code> structure that's in the request with the
   *             structures in the <code>AlternateDataSourceParameters</code> allow list. If the
   *             structures are an exact match, the request is allowed to use the new data source with
   *             the existing credentials. If the <code>AlternateDataSourceParameters</code> list is
   *             null, the <code>DataSourceParameters</code> originally used with these
   *                 <code>Credentials</code> is automatically allowed.</p>
   */
  AlternateDataSourceParameters?: DataSourceParameters[];
}

/**
 * @public
 * <p>Data source credentials. This is a variant type structure. For this structure to be
 *             valid, only one of the attributes can be non-null.</p>
 */
export interface DataSourceCredentials {
  /**
   * @public
   * <p>Credential pair. For more information, see
   *             <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CredentialPair.html">CredentialPair</a>
   *             </code>.</p>
   */
  CredentialPair?: CredentialPair;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
   *             want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
   *             data source in the ARN is used as the credentials for the
   *             <code>DataSourceCredentials</code> structure.</p>
   */
  CopySourceArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
   */
  SecretArn?: string;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  ADOBE_ANALYTICS: "ADOBE_ANALYTICS",
  AMAZON_ELASTICSEARCH: "AMAZON_ELASTICSEARCH",
  AMAZON_OPENSEARCH: "AMAZON_OPENSEARCH",
  ATHENA: "ATHENA",
  AURORA: "AURORA",
  AURORA_POSTGRESQL: "AURORA_POSTGRESQL",
  AWS_IOT_ANALYTICS: "AWS_IOT_ANALYTICS",
  DATABRICKS: "DATABRICKS",
  EXASOL: "EXASOL",
  GITHUB: "GITHUB",
  JIRA: "JIRA",
  MARIADB: "MARIADB",
  MYSQL: "MYSQL",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  PRESTO: "PRESTO",
  REDSHIFT: "REDSHIFT",
  S3: "S3",
  SALESFORCE: "SALESFORCE",
  SERVICENOW: "SERVICENOW",
  SNOWFLAKE: "SNOWFLAKE",
  SPARK: "SPARK",
  SQLSERVER: "SQLSERVER",
  TERADATA: "TERADATA",
  TIMESTREAM: "TIMESTREAM",
  TWITTER: "TWITTER",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>An ID for the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * @public
   * <p>A display name for the data source.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of the data source. To return a
   * 			list of all data sources, use <code>ListDataSources</code>.</p>
   *          <p>Use <code>AMAZON_ELASTICSEARCH</code> for Amazon OpenSearch Service.</p>
   */
  Type: DataSourceType | string | undefined;

  /**
   * @public
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * @public
   * <p>The credentials Amazon QuickSight that uses to connect to your underlying source. Currently, only
   * 			credentials based on user name and password are supported.</p>
   */
  Credentials?: DataSourceCredentials;

  /**
   * @public
   * <p>A list of resource permissions on the data source.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * @public
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * @public
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * @public
   * <p>The status of creating the data source.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * @enum
 */
export const FolderType = {
  SHARED: "SHARED",
} as const;

/**
 * @public
 */
export type FolderType = (typeof FolderType)[keyof typeof FolderType];

/**
 * @public
 * @enum
 */
export const SharingModel = {
  ACCOUNT: "ACCOUNT",
  NAMESPACE: "NAMESPACE",
} as const;

/**
 * @public
 */
export type SharingModel = (typeof SharingModel)[keyof typeof SharingModel];

/**
 * @public
 */
export interface CreateFolderRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account where you want to create the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * @public
   * <p>The name of the folder.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of folder. By default, <code>folderType</code> is <code>SHARED</code>.</p>
   */
  FolderType?: FolderType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the parent folder.</p>
   *          <p>
   *             <code>ParentFolderArn</code> can be null. An empty <code>parentFolderArn</code> creates a root-level folder.</p>
   */
  ParentFolderArn?: string;

  /**
   * @public
   * <p>A structure that describes the principals and the resource-level permissions of a folder.</p>
   *          <p>To specify no permissions, omit <code>Permissions</code>.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>Tags for the folder.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>An optional parameter that determines the sharing scope of the folder. The default value for this parameter is <code>ACCOUNT</code>.</p>
   */
  SharingModel?: SharingModel | string;
}

/**
 * @public
 */
export interface CreateFolderResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the newly created folder.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The folder ID for the newly created folder.</p>
   */
  FolderId?: string;

  /**
   * @public
   * <p>The request ID for the newly created folder.</p>
   */
  RequestId?: string;
}

/**
 * @public
 * @enum
 */
export const MemberType = {
  ANALYSIS: "ANALYSIS",
  DASHBOARD: "DASHBOARD",
  DATASET: "DATASET",
} as const;

/**
 * @public
 */
export type MemberType = (typeof MemberType)[keyof typeof MemberType];

/**
 * @public
 */
export interface CreateFolderMembershipRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset that you want to add to the folder.</p>
   */
  MemberId: string | undefined;

  /**
   * @public
   * <p>The member type of the asset that you want to add to a folder.</p>
   */
  MemberType: MemberType | string | undefined;
}

/**
 * @public
 * <p>An asset in a Amazon QuickSight folder, such as a dashboard, analysis, or dataset.</p>
 */
export interface FolderMember {
  /**
   * @public
   * <p>The ID of an asset in the folder.</p>
   */
  MemberId?: string;

  /**
   * @public
   * <p>The type of asset that it is.</p>
   */
  MemberType?: MemberType | string;
}

/**
 * @public
 */
export interface CreateFolderMembershipResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>Information about the member in the folder.</p>
   */
  FolderMember?: FolderMember;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 * <p>The request object for this operation. </p>
 */
export interface CreateGroupRequest {
  /**
   * @public
   * <p>A name for the group that you want to create.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>A description for the group that you want to create.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that you want the group to be a part of.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 * <p>A <i>group</i> in Amazon QuickSight consists of a set of users. You can
 *             use groups to make it easier to manage access and security. </p>
 */
export interface Group {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The group description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The principal ID of the group.</p>
   */
  PrincipalId?: string;
}

/**
 * @public
 * <p>The response object for this operation.</p>
 */
export interface CreateGroupResponse {
  /**
   * @public
   * <p>The name of the group.</p>
   */
  Group?: Group;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface CreateGroupMembershipRequest {
  /**
   * @public
   * <p>The name of the user that you want to add to the group membership.</p>
   */
  MemberName: string | undefined;

  /**
   * @public
   * <p>The name of the group that you want to add the user to.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The namespace that you want the user to be a part of.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
 *             can't be members of another group. .</p>
 */
export interface GroupMember {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the group member (user).</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the group member (user).</p>
   */
  MemberName?: string;
}

/**
 * @public
 */
export interface CreateGroupMembershipResponse {
  /**
   * @public
   * <p>The group member.</p>
   */
  GroupMember?: GroupMember;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface CreateIAMPolicyAssignmentRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account where you want to assign an IAM policy to Amazon QuickSight users or groups.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name of the assignment, also called a rule.
   * 			The
   * 			name
   * 			must be unique within the
   * 			Amazon Web Services account.</p>
   */
  AssignmentName: string | undefined;

  /**
   * @public
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when
   * 					creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data
   * 					source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used
   * 					when creating the data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus: AssignmentStatus | string | undefined;

  /**
   * @public
   * <p>The ARN for the IAM policy to apply to the Amazon QuickSight users and
   * 			groups specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * @public
   * <p>The Amazon QuickSight users, groups, or both that you want to assign the policy
   * 			to.</p>
   */
  Identities?: Record<string, string[]>;

  /**
   * @public
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface CreateIAMPolicyAssignmentResponse {
  /**
   * @public
   * <p>The name of the assignment.
   * 			The
   * 			name must be unique within the Amazon Web Services account.</p>
   */
  AssignmentName?: string;

  /**
   * @public
   * <p>The ID for the assignment.</p>
   */
  AssignmentId?: string;

  /**
   * @public
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when
   * 					creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data
   * 					source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used
   * 					when creating the data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * @public
   * <p>The ARN for the IAM policy that is applied to the Amazon QuickSight
   * 			users and groups specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * @public
   * <p>The Amazon QuickSight users, groups, or both that the IAM policy is
   * 			assigned to.</p>
   */
  Identities?: Record<string, string[]>;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * @enum
 */
export const IngestionType = {
  FULL_REFRESH: "FULL_REFRESH",
  INCREMENTAL_REFRESH: "INCREMENTAL_REFRESH",
} as const;

/**
 * @public
 */
export type IngestionType = (typeof IngestionType)[keyof typeof IngestionType];

/**
 * @public
 */
export interface CreateIngestionRequest {
  /**
   * @public
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>An ID for the ingestion.</p>
   */
  IngestionId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The type of ingestion that you want to create.</p>
   */
  IngestionType?: IngestionType | string;
}

/**
 * @public
 * @enum
 */
export const IngestionStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type IngestionStatus = (typeof IngestionStatus)[keyof typeof IngestionStatus];

/**
 * @public
 */
export interface CreateIngestionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>An ID for the ingestion.</p>
   */
  IngestionId?: string;

  /**
   * @public
   * <p>The ingestion status.</p>
   */
  IngestionStatus?: IngestionStatus | string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * @enum
 */
export const IdentityStore = {
  QUICKSIGHT: "QUICKSIGHT",
} as const;

/**
 * @public
 */
export type IdentityStore = (typeof IdentityStore)[keyof typeof IdentityStore];

/**
 * @public
 */
export interface CreateNamespaceRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that you want to create the Amazon QuickSight namespace in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The name that you want to use to describe the new namespace.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  IdentityStore: IdentityStore | string | undefined;

  /**
   * @public
   * <p>The tags that you want to associate with the namespace that you're creating.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const NamespaceStatus = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  NON_RETRYABLE_FAILURE: "NON_RETRYABLE_FAILURE",
  RETRYABLE_FAILURE: "RETRYABLE_FAILURE",
} as const;

/**
 * @public
 */
export type NamespaceStatus = (typeof NamespaceStatus)[keyof typeof NamespaceStatus];

/**
 * @public
 */
export interface CreateNamespaceResponse {
  /**
   * @public
   * <p>The ARN of the Amazon QuickSight namespace you created. </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the new namespace that you created.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region; that you want to use for the free SPICE capacity for the new namespace.
   *             This is set to the region that you run CreateNamespace in. </p>
   */
  CapacityRegion?: string;

  /**
   * @public
   * <p>The status of the creation of the namespace. This is an asynchronous process. A status
   *             of <code>CREATED</code> means that your namespace is ready to use. If an error occurs,
   *             it indicates if the process is <code>retryable</code> or <code>non-retryable</code>. In
   *             the case of a non-retryable error, refer to the error message for follow-up
   *             tasks.</p>
   */
  CreationStatus?: NamespaceStatus | string;

  /**
   * @public
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  IdentityStore?: IdentityStore | string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * @enum
 */
export const RefreshInterval = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MINUTE15: "MINUTE15",
  MINUTE30: "MINUTE30",
  MONTHLY: "MONTHLY",
  WEEKLY: "WEEKLY",
} as const;

/**
 * @public
 */
export type RefreshInterval = (typeof RefreshInterval)[keyof typeof RefreshInterval];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;

/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * <p>The refresh on entity for weekly or monthly schedules.</p>
 */
export interface ScheduleRefreshOnEntity {
  /**
   * @public
   * <p>The day of the week that you want to schedule a refresh on.</p>
   */
  DayOfWeek?: DayOfWeek | string;

  /**
   * @public
   * <p>The day of the month that you want to schedule refresh on.</p>
   */
  DayOfMonth?: string;
}

/**
 * @public
 * <p>Specifies the interval between each scheduled refresh of a dataset.</p>
 */
export interface RefreshFrequency {
  /**
   * @public
   * <p>The interval between scheduled refreshes. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MINUTE15</code>: The dataset refreshes every 15 minutes. This value is only supported for incremental refreshes. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MINUTE30</code>:The dataset refreshes every 30 minutes. This value is only supported for incremental refreshes. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOURLY</code>: The dataset refreshes every hour. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DAILY</code>: The dataset refreshes every day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WEEKLY</code>: The dataset refreshes every week.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MONTHLY</code>: The dataset refreshes every month.</p>
   *             </li>
   *          </ul>
   */
  Interval: RefreshInterval | string | undefined;

  /**
   * @public
   * <p>The day of the week that you want to schedule the refresh on. This value is required for weekly and monthly refresh intervals.</p>
   */
  RefreshOnDay?: ScheduleRefreshOnEntity;

  /**
   * @public
   * <p>The timezone that you want the refresh schedule to use. The timezone ID must match a corresponding ID found on <code>java.util.time.getAvailableIDs()</code>.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>The time of day that you want the datset to refresh. This value is expressed in HH:MM format. This field is not required for schedules that refresh hourly.</p>
   */
  TimeOfTheDay?: string;
}

/**
 * @public
 * <p>The refresh schedule of a dataset.</p>
 */
export interface RefreshSchedule {
  /**
   * @public
   * <p>An identifier for the refresh schedule.</p>
   */
  ScheduleId: string | undefined;

  /**
   * @public
   * <p>The frequency for the refresh schedule.</p>
   */
  ScheduleFrequency: RefreshFrequency | undefined;

  /**
   * @public
   * <p>Time after which the refresh schedule can be started, expressed in <code>YYYY-MM-DDTHH:MM:SS</code> format.</p>
   */
  StartAfterDateTime?: Date;

  /**
   * @public
   * <p>The type of refresh that a datset undergoes. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULL_REFRESH</code>: A complete refresh of a dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCREMENTAL_REFRESH</code>: A partial refresh of some rows of a dataset, based on the time window specified.</p>
   *             </li>
   *          </ul>
   *          <p>For more information on full and incremental refreshes, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/refreshing-imported-data.html">Refreshing SPICE data</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  RefreshType: IngestionType | string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface CreateRefreshScheduleRequest {
  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The refresh schedule.</p>
   */
  Schedule: RefreshSchedule | undefined;
}

/**
 * @public
 */
export interface CreateRefreshScheduleResponse {
  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The ID of the refresh schedule.</p>
   */
  ScheduleId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Dataset schema.</p>
 */
export interface DataSetSchema {
  /**
   * @public
   * <p>A structure containing the list of column schemas.</p>
   */
  ColumnSchemaList?: ColumnSchema[];
}

/**
 * @public
 * <p>Dataset configuration.</p>
 */
export interface DataSetConfiguration {
  /**
   * @public
   * <p>Placeholder.</p>
   */
  Placeholder?: string;

  /**
   * @public
   * <p>Dataset schema.</p>
   */
  DataSetSchema?: DataSetSchema;

  /**
   * @public
   * <p>A structure containing the list of column group schemas.</p>
   */
  ColumnGroupSchemaList?: ColumnGroupSchema[];
}

/**
 * @public
 * <p>The detailed definition of a template.</p>
 */
export interface TemplateVersionDefinition {
  /**
   * @public
   * <p>An array of dataset configurations. These configurations define the required columns for each dataset used within a template.</p>
   */
  DataSetConfigurations: DataSetConfiguration[] | undefined;

  /**
   * @public
   * <p>An array of sheet definitions for a template.</p>
   */
  Sheets?: SheetDefinition[];

  /**
   * @public
   * <p>An array of calculated field definitions for the template.</p>
   */
  CalculatedFields?: CalculatedField[];

  /**
   * @public
   * <p>An array of parameter declarations for a template.</p>
   *          <p>
   *             <i>Parameters</i> are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the
   *             <i>Amazon QuickSight User Guide</i>.
   *         </p>
   */
  ParameterDeclarations?: ParameterDeclaration[];

  /**
   * @public
   * <p>Filter definitions for a template.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filtering-visual-data.html">Filtering Data</a> in the <i>Amazon QuickSight User Guide</i>.
   *         </p>
   */
  FilterGroups?: FilterGroup[];

  /**
   * @public
   * <p> An array of template-level column
   *             configurations. Column configurations are used to set default formatting for a column that's used throughout a template. </p>
   */
  ColumnConfigurations?: ColumnConfiguration[];

  /**
   * @public
   * <p>The configuration for default analysis settings.</p>
   */
  AnalysisDefaults?: AnalysisDefaults;
}

/**
 * @public
 * <p>The source analysis of the template.</p>
 */
export interface TemplateSourceAnalysis {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>A structure containing information about the dataset references used as placeholders
   *             in the template.</p>
   */
  DataSetReferences: DataSetReference[] | undefined;
}

/**
 * @public
 * <p>The source template of the template.</p>
 */
export interface TemplateSourceTemplate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 * <p>The source entity of the template.</p>
 */
export interface TemplateSourceEntity {
  /**
   * @public
   * <p>The source analysis, if it is based on an analysis.</p>
   */
  SourceAnalysis?: TemplateSourceAnalysis;

  /**
   * @public
   * <p>The source template, if it is based on an template.</p>
   */
  SourceTemplate?: TemplateSourceTemplate;
}

/**
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * @public
   * <p>The ID for the Amazon Web Services account that the group is in. You use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>An ID for the template that you want to create. This template is unique per Amazon Web Services Region; in
   * 			each Amazon Web Services account.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>A display name for the template.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A list of resource permissions to be set on the template. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>The entity that you are using as a source when you create the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   * 			order for the request to be valid.</p>
   */
  SourceEntity?: TemplateSourceEntity;

  /**
   * @public
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A description of the current template version being created. This API operation creates the
   * 			first version of the template. Every time <code>UpdateTemplate</code> is called, a new
   * 			version is created. Each version of the template maintains a description of the version
   * 			in the <code>VersionDescription</code> field.</p>
   */
  VersionDescription?: string;

  /**
   * @public
   * <p>The definition of a template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   * 			order for the request to be valid.</p>
   */
  Definition?: TemplateVersionDefinition;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * @public
   * <p>The ARN for the template.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ARN for the template, including the version information of
   * 			the first version.</p>
   */
  VersionArn?: string;

  /**
   * @public
   * <p>The ID of the template.</p>
   */
  TemplateId?: string;

  /**
   * @public
   * <p>The template creation status.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface CreateTemplateAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the template that you creating an alias for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>An ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * @public
   * <p>The name that you want to give to the template alias that you're creating. Don't start the
   * 			alias name with the <code>$</code> character. Alias names that start with <code>$</code>
   * 			are reserved by Amazon QuickSight. </p>
   */
  AliasName: string | undefined;

  /**
   * @public
   * <p>The version number of the template.</p>
   */
  TemplateVersionNumber: number | undefined;
}

/**
 * @public
 * <p>The template alias.</p>
 */
export interface TemplateAlias {
  /**
   * @public
   * <p>The display name of the template alias.</p>
   */
  AliasName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the template alias.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The version number of the template alias.</p>
   */
  TemplateVersionNumber?: number;
}

/**
 * @public
 */
export interface CreateTemplateAliasResponse {
  /**
   * @public
   * <p>Information about the template alias.</p>
   */
  TemplateAlias?: TemplateAlias;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 * <p>The theme colors that are used for data colors in charts. The colors description is a
 *             hexadecimal color code that consists of six alphanumerical characters, prefixed with
 *                 <code>#</code>, for example #37BFF5. </p>
 */
export interface DataColorPalette {
  /**
   * @public
   * <p>The hexadecimal codes for the colors.</p>
   */
  Colors?: string[];

  /**
   * @public
   * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
   */
  MinMaxGradient?: string[];

  /**
   * @public
   * <p>The hexadecimal code of a color that applies to charts where a lack of data is
   *             highlighted.</p>
   */
  EmptyFillColor?: string;
}

/**
 * @public
 * <p>Display options related to tiles on a sheet.</p>
 */
export interface TileStyle {
  /**
   * @public
   * <p>The border around a tile.</p>
   */
  Border?: BorderStyle;
}

/**
 * @public
 * <p>The display options for gutter spacing between tiles on a sheet.</p>
 */
export interface GutterStyle {
  /**
   * @public
   * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
   *         </p>
   */
  Show?: boolean;
}

/**
 * @public
 * <p>The display options for margins around the outside edge of sheets.</p>
 */
export interface MarginStyle {
  /**
   * @public
   * <p>This Boolean value controls whether to display sheet margins.</p>
   */
  Show?: boolean;
}

/**
 * @public
 * <p>The display options for the layout of tiles on a sheet.</p>
 */
export interface TileLayoutStyle {
  /**
   * @public
   * <p>The gutter settings that apply between tiles. </p>
   */
  Gutter?: GutterStyle;

  /**
   * @public
   * <p>The margin settings that apply around the outside edge of sheets.</p>
   */
  Margin?: MarginStyle;
}

/**
 * @public
 * <p>The theme display options for sheets. </p>
 */
export interface SheetStyle {
  /**
   * @public
   * <p>The display options for tiles.</p>
   */
  Tile?: TileStyle;

  /**
   * @public
   * <p>The layout options for tiles.</p>
   */
  TileLayout?: TileLayoutStyle;
}

/**
 * @public
 * <p>Determines the font settings.</p>
 */
export interface Font {
  /**
   * @public
   * <p>Determines the font family settings.</p>
   */
  FontFamily?: string;
}

/**
 * @public
 * <p>Determines the typography options.</p>
 */
export interface Typography {
  /**
   * @public
   * <p>Determines the list of font families.</p>
   */
  FontFamilies?: Font[];
}

/**
 * @public
 * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
 *             description is a hexadecimal color code that consists of six alphanumerical characters,
 *             prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
 *                 Guide.</i>
 *          </p>
 */
export interface UIColorPalette {
  /**
   * @public
   * <p>The color of text and other foreground elements that appear over the primary
   *             background regions, such as grid lines, borders, table banding, icons, and so on.</p>
   */
  PrimaryForeground?: string;

  /**
   * @public
   * <p>The background color that applies to visuals and other high emphasis UI.</p>
   */
  PrimaryBackground?: string;

  /**
   * @public
   * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
   *             appears over the secondary background.</p>
   */
  SecondaryForeground?: string;

  /**
   * @public
   * <p>The background color that applies to the sheet background and sheet controls.</p>
   */
  SecondaryBackground?: string;

  /**
   * @public
   * <p>This color is that applies to selected states and buttons.</p>
   */
  Accent?: string;

  /**
   * @public
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             accent color.</p>
   */
  AccentForeground?: string;

  /**
   * @public
   * <p>The color that applies to error messages.</p>
   */
  Danger?: string;

  /**
   * @public
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             error color.</p>
   */
  DangerForeground?: string;

  /**
   * @public
   * <p>This color that applies to warning and informational messages.</p>
   */
  Warning?: string;

  /**
   * @public
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             warning color.</p>
   */
  WarningForeground?: string;

  /**
   * @public
   * <p>The color that applies to success messages, for example the check mark for a
   *             successful download.</p>
   */
  Success?: string;

  /**
   * @public
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             success color.</p>
   */
  SuccessForeground?: string;

  /**
   * @public
   * <p>The color that applies to the names of fields that are identified as
   *             dimensions.</p>
   */
  Dimension?: string;

  /**
   * @public
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             dimension color.</p>
   */
  DimensionForeground?: string;

  /**
   * @public
   * <p>The color that applies to the names of fields that are identified as measures.</p>
   */
  Measure?: string;

  /**
   * @public
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             measure color.</p>
   */
  MeasureForeground?: string;
}

/**
 * @public
 * <p>The theme configuration. This configuration contains all of the display properties for
 *             a theme.</p>
 */
export interface ThemeConfiguration {
  /**
   * @public
   * <p>Color properties that apply to chart data colors.</p>
   */
  DataColorPalette?: DataColorPalette;

  /**
   * @public
   * <p>Color properties that apply to the UI and to charts, excluding the colors that apply
   *             to data. </p>
   */
  UIColorPalette?: UIColorPalette;

  /**
   * @public
   * <p>Display options related to sheets.</p>
   */
  Sheet?: SheetStyle;

  /**
   * @public
   * <p>Determines the typography options.</p>
   */
  Typography?: Typography;
}

/**
 * @public
 */
export interface CreateThemeRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account where you want to store the new theme. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>An ID for the theme that you want to create. The theme ID is unique per Amazon Web Services Region in
   * 			each Amazon Web Services account.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>A display name for the theme.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The ID of the theme that a custom theme will inherit from. All themes inherit from one of
   * 			the starting themes defined by Amazon QuickSight. For a list of the starting themes, use
   * 				<code>ListThemes</code> or choose <b>Themes</b> from
   * 			within an analysis. </p>
   */
  BaseThemeId: string | undefined;

  /**
   * @public
   * <p>A description of the first version of the theme that you're creating. Every time
   * 				<code>UpdateTheme</code> is called, a new version is created. Each version of the
   * 			theme has a description of the version in the <code>VersionDescription</code>
   * 			field.</p>
   */
  VersionDescription?: string;

  /**
   * @public
   * <p>The theme configuration, which contains the theme display properties.</p>
   */
  Configuration: ThemeConfiguration | undefined;

  /**
   * @public
   * <p>A valid grouping of resource permissions to apply to the new theme.
   * 			</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * @public
   * <p>A map of the key-value pairs for the resource tag or tags that you want to add to the
   * 			resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateThemeResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the new theme.</p>
   */
  VersionArn?: string;

  /**
   * @public
   * <p>The ID of the theme.</p>
   */
  ThemeId?: string;

  /**
   * @public
   * <p>The theme creation status.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface CreateThemeAliasRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the theme for the new theme alias.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>An ID for the theme alias.</p>
   */
  ThemeId: string | undefined;

  /**
   * @public
   * <p>The name that you want to give to the theme alias that you are creating. The
   * 			alias name can't begin with a <code>$</code>. Alias names that start with <code>$</code>
   * 			are reserved by Amazon QuickSight. </p>
   */
  AliasName: string | undefined;

  /**
   * @public
   * <p>The version number of the theme.</p>
   */
  ThemeVersionNumber: number | undefined;
}

/**
 * @public
 * <p>An alias for a theme.</p>
 */
export interface ThemeAlias {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the theme alias.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The display name of the theme alias.</p>
   */
  AliasName?: string;

  /**
   * @public
   * <p>The version number of the theme alias.</p>
   */
  ThemeVersionNumber?: number;
}

/**
 * @public
 */
export interface CreateThemeAliasResponse {
  /**
   * @public
   * <p>Information about the theme alias.</p>
   */
  ThemeAlias?: ThemeAlias;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 * @enum
 */
export const DefaultAggregation = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type DefaultAggregation = (typeof DefaultAggregation)[keyof typeof DefaultAggregation];

/**
 * @public
 * @enum
 */
export const DisplayFormat = {
  AUTO: "AUTO",
  CURRENCY: "CURRENCY",
  DATE: "DATE",
  NUMBER: "NUMBER",
  PERCENT: "PERCENT",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type DisplayFormat = (typeof DisplayFormat)[keyof typeof DisplayFormat];

/**
 * @public
 * @enum
 */
export const TopicNumericSeparatorSymbol = {
  COMMA: "COMMA",
  DOT: "DOT",
} as const;

/**
 * @public
 */
export type TopicNumericSeparatorSymbol =
  (typeof TopicNumericSeparatorSymbol)[keyof typeof TopicNumericSeparatorSymbol];

/**
 * @public
 * <p>A structure that represents a negative format.</p>
 */
export interface NegativeFormat {
  /**
   * @public
   * <p>The prefix for a negative format.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The suffix for a negative format.</p>
   */
  Suffix?: string;
}

/**
 * @public
 * <p>A structure that represents additional options for display formatting.</p>
 */
export interface DisplayFormatOptions {
  /**
   * @public
   * <p>A Boolean value that indicates whether to use blank cell format.</p>
   */
  UseBlankCellFormat?: boolean;

  /**
   * @public
   * <p>Determines the blank cell format.</p>
   */
  BlankCellFormat?: string;

  /**
   * @public
   * <p>Determines the <code>DateTime</code> format.</p>
   */
  DateFormat?: string;

  /**
   * @public
   * <p>Determines the decimal separator.</p>
   */
  DecimalSeparator?: TopicNumericSeparatorSymbol | string;

  /**
   * @public
   * <p>Determines the grouping separator.</p>
   */
  GroupingSeparator?: string;

  /**
   * @public
   * <p>A Boolean value that indicates whether to use grouping.</p>
   */
  UseGrouping?: boolean;

  /**
   * @public
   * <p>Determines the number of fraction digits.</p>
   */
  FractionDigits?: number;

  /**
   * @public
   * <p>The prefix value for a display format.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The suffix value for a display format.</p>
   */
  Suffix?: string;

  /**
   * @public
   * <p>The unit scaler. Valid values for this structure are: <code>NONE</code>,
   *             <code>AUTO</code>, <code>THOUSANDS</code>, <code>MILLIONS</code>,
   *          <code>BILLIONS</code>,
   *          and <code>TRILLIONS</code>.</p>
   */
  UnitScaler?: NumberScale | string;

  /**
   * @public
   * <p>The negative format.</p>
   */
  NegativeFormat?: NegativeFormat;

  /**
   * @public
   * <p>The currency symbol, such as <code>USD</code>.</p>
   */
  CurrencySymbol?: string;
}

/**
 * @public
 * <p>A structure that represents a default formatting definition.</p>
 */
export interface DefaultFormatting {
  /**
   * @public
   * <p>The display format. Valid values for this structure are <code>AUTO</code>,
   *             <code>PERCENT</code>, <code>CURRENCY</code>, <code>NUMBER</code>, <code>DATE</code>, and
   *             <code>STRING</code>.</p>
   */
  DisplayFormat?: DisplayFormat | string;

  /**
   * @public
   * <p>The additional options for display formatting.</p>
   */
  DisplayFormatOptions?: DisplayFormatOptions;
}

/**
 * @public
 * <p>A structure that represents a semantic type.</p>
 */
export interface SemanticType {
  /**
   * @public
   * <p>The semantic type name.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The semantic type sub type name.</p>
   */
  SubTypeName?: string;

  /**
   * @public
   * <p>The semantic type parameters.</p>
   */
  TypeParameters?: Record<string, string>;

  /**
   * @public
   * <p>The semantic type truthy cell value.</p>
   */
  TruthyCellValue?: string;

  /**
   * @public
   * <p>The other names or aliases for the true cell value.</p>
   */
  TruthyCellValueSynonyms?: string[];

  /**
   * @public
   * <p>The semantic type falsey cell value.</p>
   */
  FalseyCellValue?: string;

  /**
   * @public
   * <p>The other names or aliases for the false cell value.</p>
   */
  FalseyCellValueSynonyms?: string[];
}

/**
 * @public
 * @enum
 */
export const TopicTimeGranularity = {
  DAY: "DAY",
  HOUR: "HOUR",
  MINUTE: "MINUTE",
  MONTH: "MONTH",
  QUARTER: "QUARTER",
  SECOND: "SECOND",
  WEEK: "WEEK",
  YEAR: "YEAR",
} as const;

/**
 * @public
 */
export type TopicTimeGranularity = (typeof TopicTimeGranularity)[keyof typeof TopicTimeGranularity];

/**
 * @public
 * <p>A structure that represents a calculated field.</p>
 */
export interface TopicCalculatedField {
  /**
   * @public
   * <p>The calculated field name.</p>
   */
  CalculatedFieldName: string | undefined;

  /**
   * @public
   * <p>The calculated field description.</p>
   */
  CalculatedFieldDescription?: string;

  /**
   * @public
   * <p>The calculated field expression.</p>
   */
  Expression: string | undefined;

  /**
   * @public
   * <p>The other names or aliases for the calculated field.</p>
   */
  CalculatedFieldSynonyms?: string[];

  /**
   * @public
   * <p>A boolean value that indicates if a calculated field is included in the topic.</p>
   */
  IsIncludedInTopic?: boolean;

  /**
   * @public
   * <p>A Boolean value that indicates if a calculated field is visible in the autocomplete.</p>
   */
  DisableIndexing?: boolean;

  /**
   * @public
   * <p>The column data role for a calculated field. Valid values for this structure are <code>DIMENSION</code> and <code>MEASURE</code>.</p>
   */
  ColumnDataRole?: ColumnDataRole | string;

  /**
   * @public
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TopicTimeGranularity | string;

  /**
   * @public
   * <p>The default formatting definition.</p>
   */
  DefaultFormatting?: DefaultFormatting;

  /**
   * @public
   * <p>The default aggregation. Valid values for this structure are <code>SUM</code>,
   *             <code>MAX</code>, <code>MIN</code>, <code>COUNT</code>,
   *          <code>DISTINCT_COUNT</code>,
   *          and <code>AVERAGE</code>.</p>
   */
  Aggregation?: DefaultAggregation | string;

  /**
   * @public
   * <p>The order in which data is displayed for the calculated field when
   *          it's used in a comparative context.</p>
   */
  ComparativeOrder?: ComparativeOrder;

  /**
   * @public
   * <p>The semantic type.</p>
   */
  SemanticType?: SemanticType;

  /**
   * @public
   * <p>The list of aggregation types that are allowed for the calculated field. Valid values
   *          for this structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MIN</code>,
   *             <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>, <code>AVERAGE</code>,
   *             <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *          <code>VARP</code>, and <code>PERCENTILE</code>.</p>
   */
  AllowedAggregations?: (AuthorSpecifiedAggregation | string)[];

  /**
   * @public
   * <p>The list of aggregation types that are not allowed for the calculated field. Valid
   *          values for this structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>,
   *             <code>MIN</code>, <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>,
   *             <code>AVERAGE</code>, <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *             <code>VARP</code>, and <code>PERCENTILE</code>.</p>
   */
  NotAllowedAggregations?: (AuthorSpecifiedAggregation | string)[];

  /**
   * @public
   * <p>A Boolean value that indicates whether to never aggregate calculated field in filters.</p>
   */
  NeverAggregateInFilter?: boolean;

  /**
   * @public
   * <p>The other
   *          names or aliases for the calculated field cell value.</p>
   */
  CellValueSynonyms?: CellValueSynonym[];

  /**
   * @public
   * <p>The non additive for the table style target.</p>
   */
  NonAdditive?: boolean;
}

/**
 * @public
 * <p>Represents a column in a dataset.</p>
 */
export interface TopicColumn {
  /**
   * @public
   * <p>The name of the column.</p>
   */
  ColumnName: string | undefined;

  /**
   * @public
   * <p>A user-friendly name for the column.</p>
   */
  ColumnFriendlyName?: string;

  /**
   * @public
   * <p>A description of the column and its contents.</p>
   */
  ColumnDescription?: string;

  /**
   * @public
   * <p>The other names or aliases for the column.</p>
   */
  ColumnSynonyms?: string[];

  /**
   * @public
   * <p>The role of the column in the data. Valid values are <code>DIMENSION</code> and <code>MEASURE</code>.</p>
   */
  ColumnDataRole?: ColumnDataRole | string;

  /**
   * @public
   * <p>The type of aggregation that is performed on the column data when
   *          it's queried.</p>
   */
  Aggregation?: DefaultAggregation | string;

  /**
   * @public
   * <p>A Boolean value that indicates whether the column is included in the query results.</p>
   */
  IsIncludedInTopic?: boolean;

  /**
   * @public
   * <p>A Boolean value that indicates whether the column shows in the autocomplete functionality.</p>
   */
  DisableIndexing?: boolean;

  /**
   * @public
   * <p>The order in which data is displayed for the column when
   *          it's used in a comparative context.</p>
   */
  ComparativeOrder?: ComparativeOrder;

  /**
   * @public
   * <p>The semantic type of data contained in the column.</p>
   */
  SemanticType?: SemanticType;

  /**
   * @public
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TopicTimeGranularity | string;

  /**
   * @public
   * <p>The list of aggregation types that are allowed for the column. Valid values for this
   *          structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MIN</code>,
   *             <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>, <code>AVERAGE</code>,
   *             <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *          <code>VARP</code>,
   *          and <code>PERCENTILE</code>.</p>
   */
  AllowedAggregations?: (AuthorSpecifiedAggregation | string)[];

  /**
   * @public
   * <p>The list of aggregation types that are not allowed for the column. Valid values for this
   *          structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MIN</code>,
   *             <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>, <code>AVERAGE</code>,
   *             <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *          <code>VARP</code>,
   *          and <code>PERCENTILE</code>.</p>
   */
  NotAllowedAggregations?: (AuthorSpecifiedAggregation | string)[];

  /**
   * @public
   * <p>The default formatting used for values in the column.</p>
   */
  DefaultFormatting?: DefaultFormatting;

  /**
   * @public
   * <p>A Boolean
   *          value that indicates whether to aggregate the column data when
   *          it's used in a filter context.</p>
   */
  NeverAggregateInFilter?: boolean;

  /**
   * @public
   * <p>The other names or aliases for the column cell value.</p>
   */
  CellValueSynonyms?: CellValueSynonym[];

  /**
   * @public
   * <p>The non additive value for the column.</p>
   */
  NonAdditive?: boolean;
}

/**
 * @public
 * <p>A structure that represents a data aggregation.</p>
 */
export interface DataAggregation {
  /**
   * @public
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  DatasetRowDateGranularity?: TopicTimeGranularity | string;

  /**
   * @public
   * <p>The column name for the default date.</p>
   */
  DefaultDateColumnName?: string;
}

/**
 * @public
 * <p>A constant used in a category filter.</p>
 */
export interface TopicCategoryFilterConstant {
  /**
   * @public
   * <p>The type of category filter constant. This element is used to specify whether a constant is a singular or collective. Valid values are <code>SINGULAR</code> and <code>COLLECTIVE</code>.</p>
   */
  ConstantType?: ConstantType | string;

  /**
   * @public
   * <p>A singular constant used in a category filter. This element is used to specify a single value for the constant.</p>
   */
  SingularConstant?: string;

  /**
   * @public
   * <p>A collective constant used in a category filter. This element is used to specify a list of values for the constant.</p>
   */
  CollectiveConstant?: CollectiveConstant;
}

/**
 * @public
 * <p>A structure that represents a category filter.</p>
 */
export interface TopicCategoryFilter {
  /**
   * @public
   * <p>The category filter function. Valid values for this structure are <code>EXACT</code> and <code>CONTAINS</code>.</p>
   */
  CategoryFilterFunction?: CategoryFilterFunction | string;

  /**
   * @public
   * <p>The category filter type. This element is used to specify whether a filter is a simple category filter or an inverse category filter.</p>
   */
  CategoryFilterType?: CategoryFilterType | string;

  /**
   * @public
   * <p>The constant used in a category filter.</p>
   */
  Constant?: TopicCategoryFilterConstant;

  /**
   * @public
   * <p>A Boolean value that indicates if the filter is inverse.</p>
   */
  Inverse?: boolean;
}

/**
 * @public
 * <p>A structure that represents a range constant.</p>
 */
export interface RangeConstant {
  /**
   * @public
   * <p>The minimum value for a range constant.</p>
   */
  Minimum?: string;

  /**
   * @public
   * <p>The maximum value for a range constant.</p>
   */
  Maximum?: string;
}

/**
 * @public
 * <p>A constant value that is used in a range filter to specify the endpoints of the range.</p>
 */
export interface TopicRangeFilterConstant {
  /**
   * @public
   * <p>The data type of the constant value that is used in a range filter. Valid values for this structure are <code>RANGE</code>.</p>
   */
  ConstantType?: ConstantType | string;

  /**
   * @public
   * <p>The value of the constant that is used to specify the endpoints of a range filter.</p>
   */
  RangeConstant?: RangeConstant;
}

/**
 * @public
 * <p>A filter used to restrict data based on a range of dates or times.</p>
 */
export interface TopicDateRangeFilter {
  /**
   * @public
   * <p>A Boolean value that indicates whether the date range filter should include the boundary values. If
   *          set to true, the filter includes the start and end dates. If set to false, the filter
   *          excludes them.</p>
   */
  Inclusive?: boolean;

  /**
   * @public
   * <p>The constant used in a date range filter.</p>
   */
  Constant?: TopicRangeFilterConstant;
}

/**
 * @public
 * @enum
 */
export const FilterClass = {
  CONDITIONAL_VALUE_FILTER: "CONDITIONAL_VALUE_FILTER",
  ENFORCED_VALUE_FILTER: "ENFORCED_VALUE_FILTER",
  NAMED_VALUE_FILTER: "NAMED_VALUE_FILTER",
} as const;

/**
 * @public
 */
export type FilterClass = (typeof FilterClass)[keyof typeof FilterClass];

/**
 * @public
 * @enum
 */
export const NamedFilterType = {
  CATEGORY_FILTER: "CATEGORY_FILTER",
  DATE_RANGE_FILTER: "DATE_RANGE_FILTER",
  NUMERIC_EQUALITY_FILTER: "NUMERIC_EQUALITY_FILTER",
  NUMERIC_RANGE_FILTER: "NUMERIC_RANGE_FILTER",
  RELATIVE_DATE_FILTER: "RELATIVE_DATE_FILTER",
} as const;

/**
 * @public
 */
export type NamedFilterType = (typeof NamedFilterType)[keyof typeof NamedFilterType];

/**
 * @public
 * @enum
 */
export const NamedFilterAggType = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  NO_AGGREGATION: "NO_AGGREGATION",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type NamedFilterAggType = (typeof NamedFilterAggType)[keyof typeof NamedFilterAggType];

/**
 * @public
 * <p>A structure that represents a singular filter constant, used in filters to specify a single value to match against.</p>
 */
export interface TopicSingularFilterConstant {
  /**
   * @public
   * <p>The type of the singular filter constant. Valid values for this structure are <code>SINGULAR</code>.</p>
   */
  ConstantType?: ConstantType | string;

  /**
   * @public
   * <p>The value of the singular filter constant.</p>
   */
  SingularConstant?: string;
}

/**
 * @public
 * <p>A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value matches the specified value.</p>
 */
export interface TopicNumericEqualityFilter {
  /**
   * @public
   * <p>The constant used in a numeric equality filter.</p>
   */
  Constant?: TopicSingularFilterConstant;

  /**
   * @public
   * <p>An aggregation function that specifies how to calculate the value of a numeric field for
   *          a topic. Valid values for this structure are <code>NO_AGGREGATION</code>, <code>SUM</code>,
   *             <code>AVERAGE</code>, <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MAX</code>,
   *             <code>MEDIAN</code>, <code>MIN</code>, <code>STDEV</code>, <code>STDEVP</code>,
   *             <code>VAR</code>,
   *          and <code>VARP</code>.</p>
   */
  Aggregation?: NamedFilterAggType | string;
}

/**
 * @public
 * <p>A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value falls within the specified range.</p>
 */
export interface TopicNumericRangeFilter {
  /**
   * @public
   * <p>A Boolean value that indicates whether the endpoints of the numeric range are included in the filter.
   *          If set to true, topics whose numeric field value is equal to the endpoint values will be
   *          included in the filter. If set to false, topics whose numeric field value is equal to the
   *          endpoint values will be excluded from the filter.</p>
   */
  Inclusive?: boolean;

  /**
   * @public
   * <p>The constant used in a
   *          numeric range filter.</p>
   */
  Constant?: TopicRangeFilterConstant;

  /**
   * @public
   * <p>An aggregation function that specifies how to calculate the value of a numeric field for
   *          a topic, Valid values for this structure are <code>NO_AGGREGATION</code>, <code>SUM</code>,
   *             <code>AVERAGE</code>, <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MAX</code>,
   *             <code>MEDIAN</code>, <code>MIN</code>, <code>STDEV</code>, <code>STDEVP</code>,
   *             <code>VAR</code>,
   *          and <code>VARP</code>.</p>
   */
  Aggregation?: NamedFilterAggType | string;
}

/**
 * @public
 * @enum
 */
export const TopicRelativeDateFilterFunction = {
  LAST: "LAST",
  NEXT: "NEXT",
  NOW: "NOW",
  PREVIOUS: "PREVIOUS",
  THIS: "THIS",
} as const;

/**
 * @public
 */
export type TopicRelativeDateFilterFunction =
  (typeof TopicRelativeDateFilterFunction)[keyof typeof TopicRelativeDateFilterFunction];

/**
 * @public
 * <p>A structure that represents a relative date filter.</p>
 */
export interface TopicRelativeDateFilter {
  /**
   * @public
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   */
  TimeGranularity?: TopicTimeGranularity | string;

  /**
   * @public
   * <p>The function to be used in a relative date filter to determine the range of dates to include in the results. Valid values for this structure are <code>BEFORE</code>, <code>AFTER</code>, and <code>BETWEEN</code>.</p>
   */
  RelativeDateFilterFunction?: TopicRelativeDateFilterFunction | string;

  /**
   * @public
   * <p>The constant used in a
   *          relative date filter.</p>
   */
  Constant?: TopicSingularFilterConstant;
}

/**
 * @public
 * <p>A structure that represents a filter used to select items for a topic.</p>
 */
export interface TopicFilter {
  /**
   * @public
   * <p>A description of the filter used to select items for a topic.</p>
   */
  FilterDescription?: string;

  /**
   * @public
   * <p>The class of the filter. Valid values for this structure are
   *             <code>ENFORCED_VALUE_FILTER</code>,
   *          <code>CONDITIONAL_VALUE_FILTER</code>,
   *          and <code>NAMED_VALUE_FILTER</code>.</p>
   */
  FilterClass?: FilterClass | string;

  /**
   * @public
   * <p>The name of the filter.</p>
   */
  FilterName: string | undefined;

  /**
   * @public
   * <p>The other names or aliases for the filter.</p>
   */
  FilterSynonyms?: string[];

  /**
   * @public
   * <p>The name of the field that the filter operates on.</p>
   */
  OperandFieldName: string | undefined;

  /**
   * @public
   * <p>The type of the filter. Valid values for this structure are
   *          <code>CATEGORY_FILTER</code>, <code>NUMERIC_EQUALITY_FILTER</code>,
   *             <code>NUMERIC_RANGE_FILTER</code>,
   *          <code>DATE_RANGE_FILTER</code>,
   *          and <code>RELATIVE_DATE_FILTER</code>.</p>
   */
  FilterType?: NamedFilterType | string;

  /**
   * @public
   * <p>The category filter that is associated with this filter.</p>
   */
  CategoryFilter?: TopicCategoryFilter;

  /**
   * @public
   * <p>The numeric equality filter.</p>
   */
  NumericEqualityFilter?: TopicNumericEqualityFilter;

  /**
   * @public
   * <p>The numeric range filter.</p>
   */
  NumericRangeFilter?: TopicNumericRangeFilter;

  /**
   * @public
   * <p>The date range filter.</p>
   */
  DateRangeFilter?: TopicDateRangeFilter;

  /**
   * @public
   * <p>The relative date filter.</p>
   */
  RelativeDateFilter?: TopicRelativeDateFilter;
}

/**
 * @public
 * @enum
 */
export const NamedEntityAggType = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  CUSTOM: "CUSTOM",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  PERCENTILE: "PERCENTILE",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type NamedEntityAggType = (typeof NamedEntityAggType)[keyof typeof NamedEntityAggType];

/**
 * @public
 * <p>A structure that represents a metric.</p>
 */
export interface NamedEntityDefinitionMetric {
  /**
   * @public
   * <p>The aggregation of a named entity. Valid values for this structure are <code>SUM</code>,
   *             <code>MIN</code>, <code>MAX</code>, <code>COUNT</code>, <code>AVERAGE</code>,
   *             <code>DISTINCT_COUNT</code>, <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *             <code>VARP</code>, <code>PERCENTILE</code>,
   *          <code>MEDIAN</code>,
   *          and <code>CUSTOM</code>.</p>
   */
  Aggregation?: NamedEntityAggType | string;

  /**
   * @public
   * <p>The additional parameters for an aggregation function.</p>
   */
  AggregationFunctionParameters?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const PropertyRole = {
  ID: "ID",
  PRIMARY: "PRIMARY",
} as const;

/**
 * @public
 */
export type PropertyRole = (typeof PropertyRole)[keyof typeof PropertyRole];

/**
 * @public
 * @enum
 */
export const PropertyUsage = {
  DIMENSION: "DIMENSION",
  INHERIT: "INHERIT",
  MEASURE: "MEASURE",
} as const;

/**
 * @public
 */
export type PropertyUsage = (typeof PropertyUsage)[keyof typeof PropertyUsage];

/**
 * @public
 * <p>A structure that represents a named entity.</p>
 */
export interface NamedEntityDefinition {
  /**
   * @public
   * <p>The name of the entity.</p>
   */
  FieldName?: string;

  /**
   * @public
   * <p>The property name to be used for the named entity.</p>
   */
  PropertyName?: string;

  /**
   * @public
   * <p>The property role. Valid values for this structure are <code>PRIMARY</code> and <code>ID</code>.</p>
   */
  PropertyRole?: PropertyRole | string;

  /**
   * @public
   * <p>The property usage. Valid values for this structure are <code>INHERIT</code>,
   *             <code>DIMENSION</code>,
   *          and <code>MEASURE</code>.</p>
   */
  PropertyUsage?: PropertyUsage | string;

  /**
   * @public
   * <p>The definition of a metric.</p>
   */
  Metric?: NamedEntityDefinitionMetric;
}

/**
 * @public
 * <p>A structure that represents a semantic entity type.</p>
 */
export interface SemanticEntityType {
  /**
   * @public
   * <p>The semantic entity type name.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The semantic entity sub type name.</p>
   */
  SubTypeName?: string;

  /**
   * @public
   * <p>The semantic entity type parameters.</p>
   */
  TypeParameters?: Record<string, string>;
}

/**
 * @public
 * <p>A structure that represents a named entity.</p>
 */
export interface TopicNamedEntity {
  /**
   * @public
   * <p>The name of the named entity.</p>
   */
  EntityName: string | undefined;

  /**
   * @public
   * <p>The description of the named entity.</p>
   */
  EntityDescription?: string;

  /**
   * @public
   * <p>The other
   *          names or aliases for the named entity.</p>
   */
  EntitySynonyms?: string[];

  /**
   * @public
   * <p>The type of named entity that a topic represents.</p>
   */
  SemanticEntityType?: SemanticEntityType;

  /**
   * @public
   * <p>The definition of a named entity.</p>
   */
  Definition?: NamedEntityDefinition[];
}

/**
 * @public
 * <p>A structure that represents a dataset.</p>
 */
export interface DatasetMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn: string | undefined;

  /**
   * @public
   * <p>The name of the dataset.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The description of the dataset.</p>
   */
  DatasetDescription?: string;

  /**
   * @public
   * <p>The definition of a data aggregation.</p>
   */
  DataAggregation?: DataAggregation;

  /**
   * @public
   * <p>The list of filter definitions.</p>
   */
  Filters?: TopicFilter[];

  /**
   * @public
   * <p>The list of column definitions.</p>
   */
  Columns?: TopicColumn[];

  /**
   * @public
   * <p>The list of calculated field definitions.</p>
   */
  CalculatedFields?: TopicCalculatedField[];

  /**
   * @public
   * <p>The list of named entities definitions.</p>
   */
  NamedEntities?: TopicNamedEntity[];
}

/**
 * @public
 * <p>A structure that describes the details of a topic, such as its name, description, and associated data sets.</p>
 */
export interface TopicDetails {
  /**
   * @public
   * <p>The name of the topic.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the topic.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The data sets that the topic is associated with.</p>
   */
  DataSets?: DatasetMetadata[];
}

/**
 * @public
 */
export interface CreateTopicRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that you want to create a topic in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;

  /**
   * @public
   * <p>The definition of a topic to create.</p>
   */
  Topic: TopicDetails | undefined;

  /**
   * @public
   * <p>Contains a map of the key-value pairs for the resource tag or tags that are assigned to
   *          the dataset.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTopicResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region
   *          for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic refresh.</p>
   */
  RefreshArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * @enum
 */
export const TopicScheduleType = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MONTHLY: "MONTHLY",
  WEEKLY: "WEEKLY",
} as const;

/**
 * @public
 */
export type TopicScheduleType = (typeof TopicScheduleType)[keyof typeof TopicScheduleType];

/**
 * @public
 * <p>A structure that represents a topic refresh schedule.</p>
 */
export interface TopicRefreshSchedule {
  /**
   * @public
   * <p>A Boolean value that controls whether to schedule is enabled.</p>
   */
  IsEnabled: boolean | undefined;

  /**
   * @public
   * <p>A Boolean value that controls whether to schedule runs at the same schedule that is specified in
   *          SPICE dataset.</p>
   */
  BasedOnSpiceSchedule: boolean | undefined;

  /**
   * @public
   * <p>The starting date and time for the refresh schedule.</p>
   */
  StartingAt?: Date;

  /**
   * @public
   * <p>The timezone that you want the refresh schedule to use.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>The time of day when the refresh should run, for
   *          example, Monday-Sunday.</p>
   */
  RepeatAt?: string;

  /**
   * @public
   * <p>The type of refresh schedule. Valid values for this structure are <code>HOURLY</code>,
   *             <code>DAILY</code>,
   *          <code>WEEKLY</code>,
   *          and <code>MONTHLY</code>.</p>
   */
  TopicScheduleType?: TopicScheduleType | string;
}

/**
 * @public
 */
export interface CreateTopicRefreshScheduleRequest {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that contains the topic
   *          you're creating a refresh schedule for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn: string | undefined;

  /**
   * @public
   * <p>The name of the dataset.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The definition of a refresh schedule.</p>
   */
  RefreshSchedule: TopicRefreshSchedule | undefined;
}

/**
 * @public
 */
export interface CreateTopicRefreshScheduleResponse {
  /**
   * @public
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TopicId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   */
  TopicArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface CreateVPCConnectionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the account where you want to create a new VPC
   * 			connection.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC connection that
   * 			you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   */
  VPCConnectionId: string | undefined;

  /**
   * @public
   * <p>The display name for the VPC connection.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A list of subnet IDs for the VPC connection.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>A list of security group IDs for the VPC connection.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>A list of IP addresses of DNS resolver endpoints for the VPC connection.</p>
   */
  DnsResolvers?: string[];

  /**
   * @public
   * <p>The IAM role to associate with the VPC connection.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A map of the key-value pairs for the resource tag or tags assigned to the VPC
   * 			connection.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const VPCConnectionAvailabilityStatus = {
  AVAILABLE: "AVAILABLE",
  PARTIALLY_AVAILABLE: "PARTIALLY_AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type VPCConnectionAvailabilityStatus =
  (typeof VPCConnectionAvailabilityStatus)[keyof typeof VPCConnectionAvailabilityStatus];

/**
 * @public
 * @enum
 */
export const VPCConnectionResourceStatus = {
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  CREATION_SUCCESSFUL: "CREATION_SUCCESSFUL",
  DELETED: "DELETED",
  DELETION_FAILED: "DELETION_FAILED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL: "UPDATE_SUCCESSFUL",
} as const;

/**
 * @public
 */
export type VPCConnectionResourceStatus =
  (typeof VPCConnectionResourceStatus)[keyof typeof VPCConnectionResourceStatus];

/**
 * @public
 */
export interface CreateVPCConnectionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID for the VPC connection that
   * 			you're creating. This ID is unique per Amazon Web Services Region for each Amazon Web Services
   * 			account.</p>
   */
  VPCConnectionId?: string;

  /**
   * @public
   * <p>The status of the creation of the VPC connection.</p>
   */
  CreationStatus?: VPCConnectionResourceStatus | string;

  /**
   * @public
   * <p>The availability status of the VPC connection.</p>
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | string;

  /**
   * @public
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * @enum
 */
export const DashboardErrorType = {
  ACCESS_DENIED: "ACCESS_DENIED",
  COLUMN_GEOGRAPHIC_ROLE_MISMATCH: "COLUMN_GEOGRAPHIC_ROLE_MISMATCH",
  COLUMN_REPLACEMENT_MISSING: "COLUMN_REPLACEMENT_MISSING",
  COLUMN_TYPE_MISMATCH: "COLUMN_TYPE_MISMATCH",
  DATA_SET_NOT_FOUND: "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  PARAMETER_NOT_FOUND: "PARAMETER_NOT_FOUND",
  PARAMETER_TYPE_INVALID: "PARAMETER_TYPE_INVALID",
  PARAMETER_VALUE_INCOMPATIBLE: "PARAMETER_VALUE_INCOMPATIBLE",
  SOURCE_NOT_FOUND: "SOURCE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type DashboardErrorType = (typeof DashboardErrorType)[keyof typeof DashboardErrorType];

/**
 * @public
 * <p>Dashboard error.</p>
 */
export interface DashboardError {
  /**
   * @public
   * <p>Type.</p>
   */
  Type?: DashboardErrorType | string;

  /**
   * @public
   * <p>Message.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>Lists the violated entities that caused the dashboard error.</p>
   */
  ViolatedEntities?: Entity[];
}

/**
 * @public
 * <p>Dashboard version.</p>
 */
export interface DashboardVersion {
  /**
   * @public
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>Errors associated with this dashboard version.</p>
   */
  Errors?: DashboardError[];

  /**
   * @public
   * <p>Version number for this version of the dashboard.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Source entity ARN.</p>
   */
  SourceEntityArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Numbers (ARNs) for the datasets that are associated with this
   *             version of the dashboard.</p>
   */
  DataSetArns?: string[];

  /**
   * @public
   * <p>Description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the theme associated with a version of the dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * @public
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   */
  Sheets?: Sheet[];
}

/**
 * @public
 * <p>Dashboard.</p>
 */
export interface Dashboard {
  /**
   * @public
   * <p>Dashboard ID.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A display name for the dashboard.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Version.</p>
   */
  Version?: DashboardVersion;

  /**
   * @public
   * <p>The time that this dashboard was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last time that this dashboard was published.</p>
   */
  LastPublishedTime?: Date;

  /**
   * @public
   * <p>The last time that this dashboard was updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 * @enum
 */
export const DashboardFilterAttribute = {
  DASHBOARD_NAME: "DASHBOARD_NAME",
  DIRECT_QUICKSIGHT_OWNER: "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER: "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  QUICKSIGHT_OWNER: "QUICKSIGHT_OWNER",
  QUICKSIGHT_USER: "QUICKSIGHT_USER",
  QUICKSIGHT_VIEWER_OR_OWNER: "QUICKSIGHT_VIEWER_OR_OWNER",
} as const;

/**
 * @public
 */
export type DashboardFilterAttribute = (typeof DashboardFilterAttribute)[keyof typeof DashboardFilterAttribute];

/**
 * @public
 * <p>A filter that you apply when searching for dashboards. </p>
 */
export interface DashboardSearchFilter {
  /**
   * @public
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"DASHBOARD_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DASHBOARD_NAME</code>.</p>
   */
  Operator: FilterOperator | string | undefined;

  /**
   * @public
   * <p>The name of the value that you want to use as a filter, for example, <code>"Name":
   *             "QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the dashboards's owners or viewers are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners of the dashboards are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as the only owner of the dashboard are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners of the dashboards are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners or viewers of the dashboards are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DASHBOARD_NAME</code>: Any dashboards whose names have a substring match to this value will be returned.</p>
   *             </li>
   *          </ul>
   */
  Name?: DashboardFilterAttribute | string;

  /**
   * @public
   * <p>The value of the named item, in this case <code>QUICKSIGHT_USER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>. </p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Dashboard summary.</p>
 */
export interface DashboardSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Dashboard ID.</p>
   */
  DashboardId?: string;

  /**
   * @public
   * <p>A display name for the dashboard.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time that this dashboard was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last time that this dashboard was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>Published version number.</p>
   */
  PublishedVersionNumber?: number;

  /**
   * @public
   * <p>The last time that this dashboard was published.</p>
   */
  LastPublishedTime?: Date;
}

/**
 * @public
 * <p>Dashboard version summary.</p>
 */
export interface DashboardVersionSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>Version number.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * @public
   * <p>Source entity ARN.</p>
   */
  SourceEntityArn?: string;

  /**
   * @public
   * <p>Description.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Output column.</p>
 */
export interface OutputColumn {
  /**
   * @public
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description for a column.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type.</p>
   */
  Type?: ColumnDataType | string;
}

/**
 * @public
 * <p>Dataset.</p>
 */
export interface DataSet {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap?: Record<string, PhysicalTable>;

  /**
   * @public
   * <p>Configures the combination and transformation of the data from the physical
   *             tables.</p>
   */
  LogicalTableMap?: Record<string, LogicalTable>;

  /**
   * @public
   * <p>The list of columns after all transforms. These columns are available in templates,
   *             analyses, and dashboards.</p>
   */
  OutputColumns?: OutputColumn[];

  /**
   * @public
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode | string;

  /**
   * @public
   * <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
   *             imported into SPICE.</p>
   */
  ConsumedSpiceCapacityInBytes?: number;

  /**
   * @public
   * <p>Groupings of columns that work together in certain Amazon QuickSight features.
   *             Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * @public
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   */
  FieldFolders?: Record<string, FieldFolder>;

  /**
   * @public
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * @public
   * <p>The element you can use to define tags for row-level security.</p>
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;

  /**
   * @public
   * <p>A set of one or more definitions of a <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
   *             </code>.</p>
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];

  /**
   * @public
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration;

  /**
   * @public
   * <p>The parameters that are declared in a dataset.</p>
   */
  DatasetParameters?: DatasetParameter[];
}

/**
 * @public
 * @enum
 */
export const DataSetFilterAttribute = {
  DATASET_NAME: "DATASET_NAME",
  DIRECT_QUICKSIGHT_OWNER: "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER: "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  QUICKSIGHT_OWNER: "QUICKSIGHT_OWNER",
  QUICKSIGHT_VIEWER_OR_OWNER: "QUICKSIGHT_VIEWER_OR_OWNER",
} as const;

/**
 * @public
 */
export type DataSetFilterAttribute = (typeof DataSetFilterAttribute)[keyof typeof DataSetFilterAttribute];

/**
 * @public
 * @enum
 */
export const LookbackWindowSizeUnit = {
  DAY: "DAY",
  HOUR: "HOUR",
  WEEK: "WEEK",
} as const;

/**
 * @public
 */
export type LookbackWindowSizeUnit = (typeof LookbackWindowSizeUnit)[keyof typeof LookbackWindowSizeUnit];

/**
 * @public
 * <p>The lookback window setup of an incremental refresh configuration.</p>
 */
export interface LookbackWindow {
  /**
   * @public
   * <p>The name of the lookback window column.</p>
   */
  ColumnName: string | undefined;

  /**
   * @public
   * <p>The lookback window column size.</p>
   */
  Size: number | undefined;

  /**
   * @public
   * <p>The size unit that is used for the lookback window column. Valid values for this structure are <code>HOUR</code>, <code>DAY</code>, and <code>WEEK</code>.</p>
   */
  SizeUnit: LookbackWindowSizeUnit | string | undefined;
}

/**
 * @public
 * <p>The incremental refresh configuration for a dataset.</p>
 */
export interface IncrementalRefresh {
  /**
   * @public
   * <p>The lookback window setup for an incremental refresh configuration.</p>
   */
  LookbackWindow: LookbackWindow | undefined;
}

/**
 * @public
 * <p>The refresh configuration of a dataset.</p>
 */
export interface RefreshConfiguration {
  /**
   * @public
   * <p>The incremental refresh for the dataset.</p>
   */
  IncrementalRefresh: IncrementalRefresh | undefined;
}

/**
 * @public
 * <p>The refresh properties of a dataset.</p>
 */
export interface DataSetRefreshProperties {
  /**
   * @public
   * <p>The refresh configuration for a dataset.</p>
   */
  RefreshConfiguration: RefreshConfiguration | undefined;
}

/**
 * @public
 * <p>A filter that you apply when searching for datasets.</p>
 */
export interface DataSetSearchFilter {
  /**
   * @public
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose datasets you want to search in the <code>"Value"</code> field. For example, <code>"Name":"QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east- 1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the datasets you are searching for. For example, <code>"Name":"DATASET_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DATASET_NAME</code>.</p>
   */
  Operator: FilterOperator | string | undefined;

  /**
   * @public
   * <p>The name of the value that you want to use as a filter, for example, <code>"Name":
   *             "QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the dataset owners or viewers are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners of the dataset are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as the only owner of the dataset are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners if the dataset are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners or viewers of the dataset are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DATASET_NAME</code>: Any datasets whose names have a substring match to this value will be returned.</p>
   *             </li>
   *          </ul>
   */
  Name: DataSetFilterAttribute | string | undefined;

  /**
   * @public
   * <p>The value of the named item, in this case <code>QUICKSIGHT_OWNER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Dataset summary.</p>
 */
export interface DataSetSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode | string;

  /**
   * @public
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * @public
   * <p>Whether or not the row level permission tags are applied.</p>
   */
  RowLevelPermissionTagConfigurationApplied?: boolean;

  /**
   * @public
   * <p>A value that indicates if the dataset has column level permission configured.</p>
   */
  ColumnLevelPermissionRulesApplied?: boolean;
}

/**
 * @public
 * @enum
 */
export const DataSourceErrorInfoType = {
  ACCESS_DENIED: "ACCESS_DENIED",
  CONFLICT: "CONFLICT",
  COPY_SOURCE_NOT_FOUND: "COPY_SOURCE_NOT_FOUND",
  ENGINE_VERSION_NOT_SUPPORTED: "ENGINE_VERSION_NOT_SUPPORTED",
  GENERIC_SQL_FAILURE: "GENERIC_SQL_FAILURE",
  TIMEOUT: "TIMEOUT",
  UNKNOWN: "UNKNOWN",
  UNKNOWN_HOST: "UNKNOWN_HOST",
} as const;

/**
 * @public
 */
export type DataSourceErrorInfoType = (typeof DataSourceErrorInfoType)[keyof typeof DataSourceErrorInfoType];

/**
 * @internal
 */
export const AssetBundleImportJobDataSourceCredentialPairFilterSensitiveLog = (
  obj: AssetBundleImportJobDataSourceCredentialPair
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetBundleImportJobDataSourceCredentialsFilterSensitiveLog = (
  obj: AssetBundleImportJobDataSourceCredentials
): any => ({
  ...obj,
  ...(obj.CredentialPair && { CredentialPair: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssetBundleImportJobDataSourceOverrideParametersFilterSensitiveLog = (
  obj: AssetBundleImportJobDataSourceOverrideParameters
): any => ({
  ...obj,
  ...(obj.DataSourceParameters && { DataSourceParameters: obj.DataSourceParameters }),
  ...(obj.Credentials && { Credentials: AssetBundleImportJobDataSourceCredentialsFilterSensitiveLog(obj.Credentials) }),
});

/**
 * @internal
 */
export const AssetBundleImportJobOverrideParametersFilterSensitiveLog = (
  obj: AssetBundleImportJobOverrideParameters
): any => ({
  ...obj,
  ...(obj.DataSources && {
    DataSources: obj.DataSources.map((item) =>
      AssetBundleImportJobDataSourceOverrideParametersFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const AssetBundleImportSourceFilterSensitiveLog = (obj: AssetBundleImportSource): any => ({
  ...obj,
  ...(obj.Body && { Body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CalculatedColumnFilterSensitiveLog = (obj: CalculatedColumn): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DateTimeParameterFilterSensitiveLog = (obj: DateTimeParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DecimalParameterFilterSensitiveLog = (obj: DecimalParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IntegerParameterFilterSensitiveLog = (obj: IntegerParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StringParameterFilterSensitiveLog = (obj: StringParameter): any => ({
  ...obj,
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const _ParametersFilterSensitiveLog = (obj: _Parameters): any => ({
  ...obj,
  ...(obj.StringParameters && {
    StringParameters: obj.StringParameters.map((item) => StringParameterFilterSensitiveLog(item)),
  }),
  ...(obj.IntegerParameters && {
    IntegerParameters: obj.IntegerParameters.map((item) => IntegerParameterFilterSensitiveLog(item)),
  }),
  ...(obj.DecimalParameters && {
    DecimalParameters: obj.DecimalParameters.map((item) => DecimalParameterFilterSensitiveLog(item)),
  }),
  ...(obj.DateTimeParameters && {
    DateTimeParameters: obj.DateTimeParameters.map((item) => DateTimeParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateAnalysisRequestFilterSensitiveLog = (obj: CreateAnalysisRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const CreateColumnsOperationFilterSensitiveLog = (obj: CreateColumnsOperation): any => ({
  ...obj,
  ...(obj.Columns && { Columns: obj.Columns.map((item) => CalculatedColumnFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DashboardVersionDefinitionFilterSensitiveLog = (obj: DashboardVersionDefinition): any => ({
  ...obj,
  ...(obj.CalculatedFields && {
    CalculatedFields: obj.CalculatedFields.map((item) => CalculatedFieldFilterSensitiveLog(item)),
  }),
  ...(obj.ParameterDeclarations && {
    ParameterDeclarations: obj.ParameterDeclarations.map((item) => ParameterDeclarationFilterSensitiveLog(item)),
  }),
  ...(obj.ColumnConfigurations && {
    ColumnConfigurations: obj.ColumnConfigurations.map((item) => ColumnConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateDashboardRequestFilterSensitiveLog = (obj: CreateDashboardRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const FilterOperationFilterSensitiveLog = (obj: FilterOperation): any => ({
  ...obj,
  ...(obj.ConditionExpression && { ConditionExpression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TransformOperationFilterSensitiveLog = (obj: TransformOperation): any => {
  if (obj.ProjectOperation !== undefined) return { ProjectOperation: obj.ProjectOperation };
  if (obj.FilterOperation !== undefined)
    return { FilterOperation: FilterOperationFilterSensitiveLog(obj.FilterOperation) };
  if (obj.CreateColumnsOperation !== undefined)
    return { CreateColumnsOperation: CreateColumnsOperationFilterSensitiveLog(obj.CreateColumnsOperation) };
  if (obj.RenameColumnOperation !== undefined) return { RenameColumnOperation: obj.RenameColumnOperation };
  if (obj.CastColumnTypeOperation !== undefined) return { CastColumnTypeOperation: obj.CastColumnTypeOperation };
  if (obj.TagColumnOperation !== undefined) return { TagColumnOperation: obj.TagColumnOperation };
  if (obj.UntagColumnOperation !== undefined) return { UntagColumnOperation: obj.UntagColumnOperation };
  if (obj.OverrideDatasetParameterOperation !== undefined)
    return { OverrideDatasetParameterOperation: obj.OverrideDatasetParameterOperation };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const LogicalTableFilterSensitiveLog = (obj: LogicalTable): any => ({
  ...obj,
  ...(obj.DataTransforms && {
    DataTransforms: obj.DataTransforms.map((item) => TransformOperationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RowLevelPermissionTagRuleFilterSensitiveLog = (obj: RowLevelPermissionTagRule): any => ({
  ...obj,
  ...(obj.MatchAllValue && { MatchAllValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RowLevelPermissionTagConfigurationFilterSensitiveLog = (obj: RowLevelPermissionTagConfiguration): any => ({
  ...obj,
  ...(obj.TagRules && { TagRules: obj.TagRules.map((item) => RowLevelPermissionTagRuleFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateDataSetRequestFilterSensitiveLog = (obj: CreateDataSetRequest): any => ({
  ...obj,
  ...(obj.PhysicalTableMap && {
    PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
      (acc: any, [key, value]: [string, PhysicalTable]) => ((acc[key] = value), acc),
      {}
    ),
  }),
  ...(obj.LogicalTableMap && {
    LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce(
      (acc: any, [key, value]: [string, LogicalTable]) => ((acc[key] = LogicalTableFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.RowLevelPermissionTagConfiguration && {
    RowLevelPermissionTagConfiguration: RowLevelPermissionTagConfigurationFilterSensitiveLog(
      obj.RowLevelPermissionTagConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const DataSourceCredentialsFilterSensitiveLog = (obj: DataSourceCredentials): any => ({
  ...obj,
  ...(obj.CredentialPair && { CredentialPair: obj.CredentialPair }),
});

/**
 * @internal
 */
export const CreateDataSourceRequestFilterSensitiveLog = (obj: CreateDataSourceRequest): any => ({
  ...obj,
  ...(obj.DataSourceParameters && { DataSourceParameters: obj.DataSourceParameters }),
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TemplateVersionDefinitionFilterSensitiveLog = (obj: TemplateVersionDefinition): any => ({
  ...obj,
  ...(obj.CalculatedFields && {
    CalculatedFields: obj.CalculatedFields.map((item) => CalculatedFieldFilterSensitiveLog(item)),
  }),
  ...(obj.ParameterDeclarations && {
    ParameterDeclarations: obj.ParameterDeclarations.map((item) => ParameterDeclarationFilterSensitiveLog(item)),
  }),
  ...(obj.ColumnConfigurations && {
    ColumnConfigurations: obj.ColumnConfigurations.map((item) => ColumnConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateTemplateRequestFilterSensitiveLog = (obj: CreateTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SemanticTypeFilterSensitiveLog = (obj: SemanticType): any => ({
  ...obj,
  ...(obj.TruthyCellValue && { TruthyCellValue: SENSITIVE_STRING }),
  ...(obj.TruthyCellValueSynonyms && { TruthyCellValueSynonyms: SENSITIVE_STRING }),
  ...(obj.FalseyCellValue && { FalseyCellValue: SENSITIVE_STRING }),
  ...(obj.FalseyCellValueSynonyms && { FalseyCellValueSynonyms: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicCalculatedFieldFilterSensitiveLog = (obj: TopicCalculatedField): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
  ...(obj.SemanticType && { SemanticType: SemanticTypeFilterSensitiveLog(obj.SemanticType) }),
});

/**
 * @internal
 */
export const TopicColumnFilterSensitiveLog = (obj: TopicColumn): any => ({
  ...obj,
  ...(obj.SemanticType && { SemanticType: SemanticTypeFilterSensitiveLog(obj.SemanticType) }),
});

/**
 * @internal
 */
export const TopicCategoryFilterConstantFilterSensitiveLog = (obj: TopicCategoryFilterConstant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicCategoryFilterFilterSensitiveLog = (obj: TopicCategoryFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicRangeFilterConstantFilterSensitiveLog = (obj: TopicRangeFilterConstant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicDateRangeFilterFilterSensitiveLog = (obj: TopicDateRangeFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicSingularFilterConstantFilterSensitiveLog = (obj: TopicSingularFilterConstant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicNumericEqualityFilterFilterSensitiveLog = (obj: TopicNumericEqualityFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicNumericRangeFilterFilterSensitiveLog = (obj: TopicNumericRangeFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicRelativeDateFilterFilterSensitiveLog = (obj: TopicRelativeDateFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicFilterFilterSensitiveLog = (obj: TopicFilter): any => ({
  ...obj,
  ...(obj.CategoryFilter && { CategoryFilter: TopicCategoryFilterFilterSensitiveLog(obj.CategoryFilter) }),
  ...(obj.NumericEqualityFilter && {
    NumericEqualityFilter: TopicNumericEqualityFilterFilterSensitiveLog(obj.NumericEqualityFilter),
  }),
  ...(obj.NumericRangeFilter && {
    NumericRangeFilter: TopicNumericRangeFilterFilterSensitiveLog(obj.NumericRangeFilter),
  }),
  ...(obj.DateRangeFilter && { DateRangeFilter: TopicDateRangeFilterFilterSensitiveLog(obj.DateRangeFilter) }),
  ...(obj.RelativeDateFilter && {
    RelativeDateFilter: TopicRelativeDateFilterFilterSensitiveLog(obj.RelativeDateFilter),
  }),
});

/**
 * @internal
 */
export const DatasetMetadataFilterSensitiveLog = (obj: DatasetMetadata): any => ({
  ...obj,
  ...(obj.Filters && { Filters: obj.Filters.map((item) => TopicFilterFilterSensitiveLog(item)) }),
  ...(obj.Columns && { Columns: obj.Columns.map((item) => TopicColumnFilterSensitiveLog(item)) }),
  ...(obj.CalculatedFields && {
    CalculatedFields: obj.CalculatedFields.map((item) => TopicCalculatedFieldFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const TopicDetailsFilterSensitiveLog = (obj: TopicDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTopicRequestFilterSensitiveLog = (obj: CreateTopicRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSetFilterSensitiveLog = (obj: DataSet): any => ({
  ...obj,
  ...(obj.PhysicalTableMap && {
    PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
      (acc: any, [key, value]: [string, PhysicalTable]) => ((acc[key] = value), acc),
      {}
    ),
  }),
  ...(obj.LogicalTableMap && {
    LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce(
      (acc: any, [key, value]: [string, LogicalTable]) => ((acc[key] = LogicalTableFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.RowLevelPermissionTagConfiguration && {
    RowLevelPermissionTagConfiguration: RowLevelPermissionTagConfigurationFilterSensitiveLog(
      obj.RowLevelPermissionTagConfiguration
    ),
  }),
});
