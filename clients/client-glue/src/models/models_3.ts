// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  Action,
  Aggregate,
  AmazonRedshiftSource,
  AmazonRedshiftTarget,
  AthenaConnectorSource,
  BasicCatalogTarget,
  CatalogDeltaSource,
  CatalogHudiSource,
  CatalogKafkaSource,
  CatalogKinesisSource,
  CatalogSource,
  Column,
  ConnectionsList,
  ConnectorDataSource,
  ConnectorDataTarget,
  CustomCode,
  DirectJDBCSource,
  DirectKafkaSource,
  DirectKinesisSource,
  DropDuplicates,
  DropFields,
  DropNullFields,
  DynamicTransform,
  DynamoDBCatalogSource,
  ErrorDetail,
  EvaluateDataQuality,
  EvaluateDataQualityMultiFrame,
  EventBatchingCondition,
  ExecutionClass,
  ExecutionProperty,
  FillMissingValues,
  Filter,
  GovernedCatalogSource,
  GovernedCatalogTarget,
  JDBCConnectorSource,
  JDBCConnectorTarget,
  JobCommand,
  JobMode,
  Join,
  Merge,
  MicrosoftSQLServerCatalogSource,
  MicrosoftSQLServerCatalogTarget,
  MySQLCatalogSource,
  MySQLCatalogTarget,
  NotificationProperty,
  OracleSQLCatalogSource,
  OracleSQLCatalogTarget,
  PartitionInput,
  PIIDetection,
  PostgreSQLCatalogSource,
  PostgreSQLCatalogTarget,
  Predicate,
  Recipe,
  RedshiftSource,
  RedshiftTarget,
  RelationalCatalogSource,
  RenameField,
  S3CatalogDeltaSource,
  S3CatalogHudiSource,
  S3CatalogSource,
  S3CatalogTarget,
  S3CsvSource,
  S3DeltaCatalogTarget,
  S3DeltaDirectTarget,
  S3DeltaSource,
  S3DirectTarget,
  S3GlueParquetTarget,
  S3HudiCatalogTarget,
  S3HudiDirectTarget,
  S3HudiSource,
  S3JsonSource,
  S3ParquetSource,
  SchemaId,
  SelectFields,
  SelectFromCollection,
  SnowflakeSource,
  SnowflakeTarget,
  SourceControlAuthStrategy,
  SourceControlDetails,
  SourceControlProvider,
  SparkConnectorSource,
  SparkConnectorTarget,
  SparkSQL,
  Spigot,
  SplitFields,
  StorageDescriptor,
  TableOptimizerConfiguration,
  TableOptimizerType,
  Trigger,
  Union,
  WorkerType,
} from "./models_0";

import {
  Compatibility,
  Permission,
  ProfileConfiguration,
  RegistryId,
  TableIdentifier,
  TableInput,
  TransformParameters,
  UserDefinedFunctionInput,
} from "./models_1";

import {
  ColumnRowFilter,
  DevEndpointCustomLibraries,
  FederatedTable,
  ResourceAction,
  ResourceState,
  SchemaVersionNumber,
  ViewDefinition,
  ViewValidation,
} from "./models_2";

/**
 * @public
 */
export interface UpdateDevEndpointRequest {
  /**
   * <p>The name of the <code>DevEndpoint</code> to be updated.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The public key for the <code>DevEndpoint</code> to use.</p>
   * @public
   */
  PublicKey?: string | undefined;

  /**
   * <p>The list of public keys for the <code>DevEndpoint</code> to use.</p>
   * @public
   */
  AddPublicKeys?: string[] | undefined;

  /**
   * <p>The list of public keys to be deleted from the <code>DevEndpoint</code>.</p>
   * @public
   */
  DeletePublicKeys?: string[] | undefined;

  /**
   * <p>Custom Python or Java libraries to be loaded in the <code>DevEndpoint</code>.</p>
   * @public
   */
  CustomLibraries?: DevEndpointCustomLibraries | undefined;

  /**
   * <p>
   *             <code>True</code> if the list of custom libraries to be loaded in the development endpoint
   *       needs to be updated, or <code>False</code> if otherwise.</p>
   * @public
   */
  UpdateEtlLibraries?: boolean | undefined;

  /**
   * <p>The list of argument keys to be deleted from the map of arguments used to configure the
   *         <code>DevEndpoint</code>.</p>
   * @public
   */
  DeleteArguments?: string[] | undefined;

  /**
   * <p>The map of arguments to add the map of arguments used to configure the
   *         <code>DevEndpoint</code>.</p>
   *          <p>Valid arguments are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"--enable-glue-datacatalog": ""</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   * @public
   */
  AddArguments?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateDevEndpointResponse {}

/**
 * @public
 */
export interface UpdateJobResponse {
  /**
   * <p>Returns the name of the updated job definition.</p>
   * @public
   */
  JobName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateJobFromSourceControlRequest {
  /**
   * <p>The name of the Glue job to be synchronized to or from the remote repository.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>
   *       The provider for the remote repository. Possible values: GITHUB, AWS_CODE_COMMIT, GITLAB, BITBUCKET.
   *     </p>
   * @public
   */
  Provider?: SourceControlProvider | undefined;

  /**
   * <p>The name of the remote repository that contains the job artifacts.
   *       For BitBucket providers, <code>RepositoryName</code> should include <code>WorkspaceName</code>.
   *       Use the format <code><WorkspaceName>/<RepositoryName></code>.
   *     </p>
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * <p>The owner of the remote repository that contains the job artifacts.</p>
   * @public
   */
  RepositoryOwner?: string | undefined;

  /**
   * <p>An optional branch in the remote repository.</p>
   * @public
   */
  BranchName?: string | undefined;

  /**
   * <p>An optional folder in the remote repository.</p>
   * @public
   */
  Folder?: string | undefined;

  /**
   * <p>A commit ID for a commit in the remote repository.</p>
   * @public
   */
  CommitId?: string | undefined;

  /**
   * <p>The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token.</p>
   * @public
   */
  AuthStrategy?: SourceControlAuthStrategy | undefined;

  /**
   * <p>The value of the authorization token.</p>
   * @public
   */
  AuthToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateJobFromSourceControlResponse {
  /**
   * <p>The name of the Glue job.</p>
   * @public
   */
  JobName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMLTransformRequest {
  /**
   * <p>A unique identifier that was generated when the transform was created.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>The unique name that you gave the transform when you created it.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the transform. The default is an empty string.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration parameters that are specific to the transform type (algorithm) used.
   *       Conditionally dependent on the transform type.</p>
   * @public
   */
  Parameters?: TransformParameters | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;
}

/**
 * @public
 */
export interface UpdateMLTransformResponse {
  /**
   * <p>The unique identifier for the transform that was updated.</p>
   * @public
   */
  TransformId?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition to be updated resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table in which the partition to be updated is located.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>List of partition key values that define the partition to update.</p>
   * @public
   */
  PartitionValueList: string[] | undefined;

  /**
   * <p>The new partition object to update the partition to.</p>
   *          <p>The <code>Values</code> property can't be changed. If you want to change the partition key values for a partition, delete and recreate the partition.</p>
   * @public
   */
  PartitionInput: PartitionInput | undefined;
}

/**
 * @public
 */
export interface UpdatePartitionResponse {}

/**
 * @public
 */
export interface UpdateRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   * @public
   */
  RegistryId: RegistryId | undefined;

  /**
   * <p>A description of the registry. If description is not provided, this field will not be updated.</p>
   * @public
   */
  Description: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * <p>The name of the updated registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The Amazon Resource name (ARN) of the updated registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>Version number required for check pointing. One of <code>VersionNumber</code> or <code>Compatibility</code> has to be provided.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;

  /**
   * <p>The new compatibility setting for the schema.</p>
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * <p>The new description for the schema.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The name of the registry that contains the schema.</p>
   * @public
   */
  RegistryName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSourceControlFromJobRequest {
  /**
   * <p>The name of the Glue job to be synchronized to or from the remote repository.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>
   *       The provider for the remote repository. Possible values: GITHUB, AWS_CODE_COMMIT, GITLAB, BITBUCKET.
   *     </p>
   * @public
   */
  Provider?: SourceControlProvider | undefined;

  /**
   * <p>The name of the remote repository that contains the job artifacts.
   *       For BitBucket providers, <code>RepositoryName</code> should include <code>WorkspaceName</code>.
   *       Use the format <code><WorkspaceName>/<RepositoryName></code>.
   *     </p>
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * <p>The owner of the remote repository that contains the job artifacts.</p>
   * @public
   */
  RepositoryOwner?: string | undefined;

  /**
   * <p>An optional branch in the remote repository.</p>
   * @public
   */
  BranchName?: string | undefined;

  /**
   * <p>An optional folder in the remote repository.</p>
   * @public
   */
  Folder?: string | undefined;

  /**
   * <p>A commit ID for a commit in the remote repository.</p>
   * @public
   */
  CommitId?: string | undefined;

  /**
   * <p>The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token.</p>
   * @public
   */
  AuthStrategy?: SourceControlAuthStrategy | undefined;

  /**
   * <p>The value of the authorization token.</p>
   * @public
   */
  AuthToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSourceControlFromJobResponse {
  /**
   * <p>The name of the Glue job.</p>
   * @public
   */
  JobName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ViewUpdateAction = {
  ADD: "ADD",
  ADD_OR_REPLACE: "ADD_OR_REPLACE",
  DROP: "DROP",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type ViewUpdateAction = (typeof ViewUpdateAction)[keyof typeof ViewUpdateAction];

/**
 * @public
 */
export interface UpdateTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>An updated <code>TableInput</code> object to define the metadata table
   *       in the catalog.</p>
   * @public
   */
  TableInput: TableInput | undefined;

  /**
   * <p>By default, <code>UpdateTable</code> always creates an archived version of the table
   *       before updating it. However, if <code>skipArchive</code> is set to true,
   *         <code>UpdateTable</code> does not create the archived version.</p>
   * @public
   */
  SkipArchive?: boolean | undefined;

  /**
   * <p>The transaction ID at which to update the table contents. </p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>The version ID at which to update the table contents. </p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The operation to be performed when updating the view.</p>
   * @public
   */
  ViewUpdateAction?: ViewUpdateAction | undefined;

  /**
   * <p>A flag that can be set to true to ignore matching storage descriptor and subobject matching requirements.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateTableResponse {}

/**
 * @public
 */
export interface UpdateTableOptimizerRequest {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The type of table optimizer. Currently, the only valid value is <code>compaction</code>.</p>
   * @public
   */
  Type: TableOptimizerType | undefined;

  /**
   * <p>A <code>TableOptimizerConfiguration</code> object representing the configuration of a table optimizer.</p>
   * @public
   */
  TableOptimizerConfiguration: TableOptimizerConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateTableOptimizerResponse {}

/**
 * <p>A structure used to provide information used to update a trigger. This object updates the
 *       previous trigger definition by overwriting it completely.</p>
 * @public
 */
export interface TriggerUpdate {
  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of this trigger.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
   *       Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>The actions initiated by this trigger.</p>
   * @public
   */
  Actions?: Action[] | undefined;

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   * @public
   */
  Predicate?: Predicate | undefined;

  /**
   * <p>Batch condition that must be met (specified number of events received or batch time window expired)
   *       before EventBridge event trigger fires.</p>
   * @public
   */
  EventBatchingCondition?: EventBatchingCondition | undefined;
}

/**
 * @public
 */
export interface UpdateTriggerRequest {
  /**
   * <p>The name of the trigger to update.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The new values with which to update the trigger.</p>
   * @public
   */
  TriggerUpdate: TriggerUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateTriggerResponse {
  /**
   * <p>The resulting trigger definition.</p>
   * @public
   */
  Trigger?: Trigger | undefined;
}

/**
 * @public
 */
export interface UpdateUsageProfileRequest {
  /**
   * <p>The name of the usage profile.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the usage profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A <code>ProfileConfiguration</code> object specifying the job and session values for the profile.</p>
   * @public
   */
  Configuration: ProfileConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateUsageProfileResponse {
  /**
   * <p>The name of the usage profile that was updated.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be updated is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the function to be updated is
   *       located.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>A <code>FunctionInput</code> object that redefines the function in the Data
   *       Catalog.</p>
   * @public
   */
  FunctionInput: UserDefinedFunctionInput | undefined;
}

/**
 * @public
 */
export interface UpdateUserDefinedFunctionResponse {}

/**
 * @public
 */
export interface UpdateWorkflowRequest {
  /**
   * <p>Name of the workflow to be updated.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the workflow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   * @public
   */
  DefaultRunProperties?: Record<string, string> | undefined;

  /**
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   * @public
   */
  MaxConcurrentRuns?: number | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowResponse {
  /**
   * <p>The name of the workflow which was specified in input.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Specifies the mapping of data property keys.</p>
 * @public
 */
export interface Mapping {
  /**
   * <p>After the apply mapping, what the name of the column should be. Can be the same as <code>FromPath</code>.</p>
   * @public
   */
  ToKey?: string | undefined;

  /**
   * <p>The table or column to be modified.</p>
   * @public
   */
  FromPath?: string[] | undefined;

  /**
   * <p>The type of the data to be modified.</p>
   * @public
   */
  FromType?: string | undefined;

  /**
   * <p>The data type that the data is to be modified to.</p>
   * @public
   */
  ToType?: string | undefined;

  /**
   * <p>If true, then the column is removed.</p>
   * @public
   */
  Dropped?: boolean | undefined;

  /**
   * <p>Only applicable to nested data structures. If you want to change the parent structure, but also one of its children, you can fill out this data strucutre. It is also <code>Mapping</code>, but its <code>FromPath</code> will be the parent's <code>FromPath</code> plus the <code>FromPath</code> from this structure.</p>
   *          <p>For the children part, suppose you have the structure:</p>
   *          <p>
   *             <code>\{
   *   "FromPath": "OuterStructure",
   *   "ToKey": "OuterStructure",
   *   "ToType": "Struct",
   *   "Dropped": false,
   *   "Chidlren": [\{
   *        "FromPath": "inner",
   *        "ToKey": "inner",
   *        "ToType": "Double",
   *       "Dropped": false,
   *   \}]
   * \}</code>
   *          </p>
   *          <p>You can specify a <code>Mapping</code> that looks like:</p>
   *          <p>
   *             <code>\{
   *   "FromPath": "OuterStructure",
   *   "ToKey": "OuterStructure",
   *   "ToType": "Struct",
   *   "Dropped": false,
   *   "Chidlren": [\{
   *        "FromPath": "inner",
   *        "ToKey": "inner",
   *        "ToType": "Double",
   *       "Dropped": false,
   *   \}]
   * \}</code>
   *          </p>
   * @public
   */
  Children?: Mapping[] | undefined;
}

/**
 * <p>Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset.</p>
 * @public
 */
export interface ApplyMapping {
  /**
   * <p>The name of the transform node.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies the mapping of data property keys in the data source to data property keys in the data target.</p>
   * @public
   */
  Mapping: Mapping[] | undefined;
}

/**
 * <p>A structure containing information about an asynchronous change to a table.</p>
 * @public
 */
export interface StatusDetails {
  /**
   * <p>A <code>Table</code> object representing the requested changes.</p>
   * @public
   */
  RequestedChange?: Table | undefined;

  /**
   * <p>A list of <code>ViewValidation</code> objects that contain information for an analytical engine to validate a view.</p>
   * @public
   */
  ViewValidations?: ViewValidation[] | undefined;
}

/**
 * <p>Represents a collection of related data organized in columns and rows.</p>
 * @public
 */
export interface Table {
  /**
   * <p>The table name. For Hive compatibility, this must be entirely
   *       lowercase.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database where the table metadata resides.
   *       For Hive compatibility, this must be all lowercase.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>A description of the table.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The owner of the table.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The time when the table definition was created in the Data Catalog.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The last time that the table was updated.</p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p>The last time that the table was accessed. This is usually taken from HDFS, and might not
   *       be reliable.</p>
   * @public
   */
  LastAccessTime?: Date | undefined;

  /**
   * <p>The last time that column statistics were computed for this table.</p>
   * @public
   */
  LastAnalyzedTime?: Date | undefined;

  /**
   * <p>The retention time for this table.</p>
   * @public
   */
  Retention?: number | undefined;

  /**
   * <p>A storage descriptor containing information about the physical storage
   *       of this table.</p>
   * @public
   */
  StorageDescriptor?: StorageDescriptor | undefined;

  /**
   * <p>A list of columns by which the table is partitioned. Only primitive
   *       types are supported as partition keys.</p>
   *          <p>When you create a table used by Amazon Athena, and you do not specify any
   *         <code>partitionKeys</code>, you must at least set the value of <code>partitionKeys</code> to
   *       an empty list. For example:</p>
   *          <p>
   *             <code>"PartitionKeys": []</code>
   *          </p>
   * @public
   */
  PartitionKeys?: Column[] | undefined;

  /**
   * <p>Included for Apache Hive compatibility. Not used in the normal course of Glue operations.
   *     If the table is a <code>VIRTUAL_VIEW</code>, certain Athena configuration encoded in base64.</p>
   * @public
   */
  ViewOriginalText?: string | undefined;

  /**
   * <p>Included for Apache Hive compatibility. Not used in the normal course of Glue operations.</p>
   * @public
   */
  ViewExpandedText?: string | undefined;

  /**
   * <p>The type of this table.
   *       Glue will create tables with the <code>EXTERNAL_TABLE</code> type.
   *       Other services, such as Athena, may create tables with additional table types.
   *     </p>
   *          <p>Glue related table types:</p>
   *          <dl>
   *             <dt>EXTERNAL_TABLE</dt>
   *             <dd>
   *                <p>Hive compatible attribute - indicates a non-Hive managed table.</p>
   *             </dd>
   *             <dt>GOVERNED</dt>
   *             <dd>
   *                <p>Used by Lake Formation.
   *             The Glue Data Catalog understands <code>GOVERNED</code>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  TableType?: string | undefined;

  /**
   * <p>These key-value pairs define properties associated with the table.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>The person or entity who created the table.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>Indicates whether the table has been registered with Lake Formation.</p>
   * @public
   */
  IsRegisteredWithLakeFormation?: boolean | undefined;

  /**
   * <p>A <code>TableIdentifier</code> structure that describes a target table for resource linking.</p>
   * @public
   */
  TargetTable?: TableIdentifier | undefined;

  /**
   * <p>The ID of the Data Catalog in which the table resides.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The ID of the table version.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>A <code>FederatedTable</code> structure that references an entity outside the Glue Data Catalog.</p>
   * @public
   */
  FederatedTable?: FederatedTable | undefined;

  /**
   * <p>A structure that contains all the information that defines the view, including the dialect or dialects for the view, and the query.</p>
   * @public
   */
  ViewDefinition?: ViewDefinition | undefined;

  /**
   * <p>Specifies whether the view supports the SQL dialects of one or more different query engines and can therefore be read by those engines.</p>
   * @public
   */
  IsMultiDialectView?: boolean | undefined;

  /**
   * <p>A structure containing information about the state of an asynchronous change to a table.</p>
   * @public
   */
  Status?: TableStatus | undefined;
}

/**
 * <p>A structure containing information about the state of an asynchronous change to a table.</p>
 * @public
 */
export interface TableStatus {
  /**
   * <p>The ARN of the user who requested the asynchronous change.</p>
   * @public
   */
  RequestedBy?: string | undefined;

  /**
   * <p>The ARN of the user to last manually alter the asynchronous change (requesting cancellation, etc).</p>
   * @public
   */
  UpdatedBy?: string | undefined;

  /**
   * <p>An ISO 8601 formatted date string indicating the time that the change was initiated.</p>
   * @public
   */
  RequestTime?: Date | undefined;

  /**
   * <p>An ISO 8601 formatted date string indicating the time that the state was last updated.</p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p>Indicates which action was called on the table, currently only <code>CREATE</code> or <code>UPDATE</code>.</p>
   * @public
   */
  Action?: ResourceAction | undefined;

  /**
   * <p>A generic status for the change in progress, such as QUEUED, IN_PROGRESS, SUCCESS, or FAILED.</p>
   * @public
   */
  State?: ResourceState | undefined;

  /**
   * <p>An error that will only appear when the state is "FAILED". This is a parent level exception message, there may be different <code>Error</code>s for each dialect.</p>
   * @public
   */
  Error?: ErrorDetail | undefined;

  /**
   * <p>A <code>StatusDetails</code> object with information about the requested change.</p>
   * @public
   */
  Details?: StatusDetails | undefined;
}

/**
 * <p>
 *             <code>CodeGenConfigurationNode</code> enumerates all valid Node types. One and only one of its member variables can be populated.</p>
 * @public
 */
export interface CodeGenConfigurationNode {
  /**
   * <p>Specifies a connector to an Amazon Athena data source.</p>
   * @public
   */
  AthenaConnectorSource?: AthenaConnectorSource | undefined;

  /**
   * <p>Specifies a connector to a JDBC data source.</p>
   * @public
   */
  JDBCConnectorSource?: JDBCConnectorSource | undefined;

  /**
   * <p>Specifies a connector to an Apache Spark data source.</p>
   * @public
   */
  SparkConnectorSource?: SparkConnectorSource | undefined;

  /**
   * <p>Specifies a data store in the Glue Data Catalog.</p>
   * @public
   */
  CatalogSource?: CatalogSource | undefined;

  /**
   * <p>Specifies an Amazon Redshift data store.</p>
   * @public
   */
  RedshiftSource?: RedshiftSource | undefined;

  /**
   * <p>Specifies an Amazon S3 data store in the Glue Data Catalog.</p>
   * @public
   */
  S3CatalogSource?: S3CatalogSource | undefined;

  /**
   * <p>Specifies a command-separated value (CSV) data store stored in Amazon S3.</p>
   * @public
   */
  S3CsvSource?: S3CsvSource | undefined;

  /**
   * <p>Specifies a JSON data store stored in Amazon S3.</p>
   * @public
   */
  S3JsonSource?: S3JsonSource | undefined;

  /**
   * <p>Specifies an Apache Parquet data store stored in Amazon S3.</p>
   * @public
   */
  S3ParquetSource?: S3ParquetSource | undefined;

  /**
   * <p>Specifies a relational catalog data store in the Glue Data Catalog.</p>
   * @public
   */
  RelationalCatalogSource?: RelationalCatalogSource | undefined;

  /**
   * <p>Specifies a DynamoDBC Catalog data store in the Glue Data Catalog.</p>
   * @public
   */
  DynamoDBCatalogSource?: DynamoDBCatalogSource | undefined;

  /**
   * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
   * @public
   */
  JDBCConnectorTarget?: JDBCConnectorTarget | undefined;

  /**
   * <p>Specifies a target that uses an Apache Spark connector.</p>
   * @public
   */
  SparkConnectorTarget?: SparkConnectorTarget | undefined;

  /**
   * <p>Specifies a target that uses a Glue Data Catalog table.</p>
   * @public
   */
  CatalogTarget?: BasicCatalogTarget | undefined;

  /**
   * <p>Specifies a target that uses Amazon Redshift.</p>
   * @public
   */
  RedshiftTarget?: RedshiftTarget | undefined;

  /**
   * <p>Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.</p>
   * @public
   */
  S3CatalogTarget?: S3CatalogTarget | undefined;

  /**
   * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
   * @public
   */
  S3GlueParquetTarget?: S3GlueParquetTarget | undefined;

  /**
   * <p>Specifies a data target that writes to Amazon S3.</p>
   * @public
   */
  S3DirectTarget?: S3DirectTarget | undefined;

  /**
   * <p>Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset.</p>
   * @public
   */
  ApplyMapping?: ApplyMapping | undefined;

  /**
   * <p>Specifies a transform that chooses the data property keys that you want to keep.</p>
   * @public
   */
  SelectFields?: SelectFields | undefined;

  /**
   * <p>Specifies a transform that chooses the data property keys that you want to drop.</p>
   * @public
   */
  DropFields?: DropFields | undefined;

  /**
   * <p>Specifies a transform that renames a single data property key.</p>
   * @public
   */
  RenameField?: RenameField | undefined;

  /**
   * <p>Specifies a transform that writes samples of the data to an Amazon S3 bucket.</p>
   * @public
   */
  Spigot?: Spigot | undefined;

  /**
   * <p>Specifies a transform that joins two datasets into one dataset using a comparison phrase on the specified data property keys. You can use inner, outer, left, right, left semi, and left anti joins.</p>
   * @public
   */
  Join?: Join | undefined;

  /**
   * <p>Specifies a transform that splits data property keys into two <code>DynamicFrames</code>. The output is a collection of <code>DynamicFrames</code>: one with selected data property keys, and one with the remaining data property keys.</p>
   * @public
   */
  SplitFields?: SplitFields | undefined;

  /**
   * <p>Specifies a transform that chooses one <code>DynamicFrame</code> from a collection of <code>DynamicFrames</code>. The output is the selected <code>DynamicFrame</code>
   *          </p>
   * @public
   */
  SelectFromCollection?: SelectFromCollection | undefined;

  /**
   * <p>Specifies a transform that locates records in the dataset that have missing values and adds a new field with a value determined by imputation. The input data set is used to train the machine learning model that determines what the missing value should be.</p>
   * @public
   */
  FillMissingValues?: FillMissingValues | undefined;

  /**
   * <p>Specifies a transform that splits a dataset into two, based on a filter condition.</p>
   * @public
   */
  Filter?: Filter | undefined;

  /**
   * <p>Specifies a transform that uses custom code you provide to perform the data transformation. The output is a collection of DynamicFrames.</p>
   * @public
   */
  CustomCode?: CustomCode | undefined;

  /**
   * <p>Specifies a transform where you enter a SQL query using Spark SQL syntax to transform the data. The output is a single <code>DynamicFrame</code>.</p>
   * @public
   */
  SparkSQL?: SparkSQL | undefined;

  /**
   * <p>Specifies a direct Amazon Kinesis data source.</p>
   * @public
   */
  DirectKinesisSource?: DirectKinesisSource | undefined;

  /**
   * <p>Specifies an Apache Kafka data store.</p>
   * @public
   */
  DirectKafkaSource?: DirectKafkaSource | undefined;

  /**
   * <p>Specifies a Kinesis data source in the Glue Data Catalog.</p>
   * @public
   */
  CatalogKinesisSource?: CatalogKinesisSource | undefined;

  /**
   * <p>Specifies an Apache Kafka data store in the Data Catalog.</p>
   * @public
   */
  CatalogKafkaSource?: CatalogKafkaSource | undefined;

  /**
   * <p>Specifies a transform that removes columns from the dataset if all values in the column are 'null'. By default, Glue Studio will recognize null objects, but some values such as empty strings, strings that are "null", -1 integers or other placeholders such as zeros, are not automatically recognized as nulls.</p>
   * @public
   */
  DropNullFields?: DropNullFields | undefined;

  /**
   * <p>Specifies a transform that merges a <code>DynamicFrame</code> with a staging <code>DynamicFrame</code> based on the specified primary keys to identify records. Duplicate records (records with the same primary keys) are not de-duplicated. </p>
   * @public
   */
  Merge?: Merge | undefined;

  /**
   * <p>Specifies a transform that combines the rows from two or more datasets into a single result.</p>
   * @public
   */
  Union?: Union | undefined;

  /**
   * <p>Specifies a transform that identifies, removes or masks PII data.</p>
   * @public
   */
  PIIDetection?: PIIDetection | undefined;

  /**
   * <p>Specifies a transform that groups rows by chosen fields and computes the aggregated value by specified function.</p>
   * @public
   */
  Aggregate?: Aggregate | undefined;

  /**
   * <p>Specifies a transform that removes rows of repeating data from a data set.</p>
   * @public
   */
  DropDuplicates?: DropDuplicates | undefined;

  /**
   * <p>Specifies a data target that writes to a goverened catalog.</p>
   * @public
   */
  GovernedCatalogTarget?: GovernedCatalogTarget | undefined;

  /**
   * <p>Specifies a data source in a goverened Data Catalog.</p>
   * @public
   */
  GovernedCatalogSource?: GovernedCatalogSource | undefined;

  /**
   * <p>Specifies a Microsoft SQL server data source in the Glue Data Catalog.</p>
   * @public
   */
  MicrosoftSQLServerCatalogSource?: MicrosoftSQLServerCatalogSource | undefined;

  /**
   * <p>Specifies a MySQL data source in the Glue Data Catalog.</p>
   * @public
   */
  MySQLCatalogSource?: MySQLCatalogSource | undefined;

  /**
   * <p>Specifies an Oracle data source in the Glue Data Catalog.</p>
   * @public
   */
  OracleSQLCatalogSource?: OracleSQLCatalogSource | undefined;

  /**
   * <p>Specifies a PostgresSQL data source in the Glue Data Catalog.</p>
   * @public
   */
  PostgreSQLCatalogSource?: PostgreSQLCatalogSource | undefined;

  /**
   * <p>Specifies a target that uses Microsoft SQL.</p>
   * @public
   */
  MicrosoftSQLServerCatalogTarget?: MicrosoftSQLServerCatalogTarget | undefined;

  /**
   * <p>Specifies a target that uses MySQL.</p>
   * @public
   */
  MySQLCatalogTarget?: MySQLCatalogTarget | undefined;

  /**
   * <p>Specifies a target that uses Oracle SQL.</p>
   * @public
   */
  OracleSQLCatalogTarget?: OracleSQLCatalogTarget | undefined;

  /**
   * <p>Specifies a target that uses Postgres SQL.</p>
   * @public
   */
  PostgreSQLCatalogTarget?: PostgreSQLCatalogTarget | undefined;

  /**
   * <p>Specifies a custom visual transform created by a user.</p>
   * @public
   */
  DynamicTransform?: DynamicTransform | undefined;

  /**
   * <p>Specifies your data quality evaluation criteria.</p>
   * @public
   */
  EvaluateDataQuality?: EvaluateDataQuality | undefined;

  /**
   * <p>Specifies a Hudi data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3.</p>
   * @public
   */
  S3CatalogHudiSource?: S3CatalogHudiSource | undefined;

  /**
   * <p>Specifies a Hudi data source that is registered in the Glue Data Catalog.</p>
   * @public
   */
  CatalogHudiSource?: CatalogHudiSource | undefined;

  /**
   * <p>Specifies a Hudi data source stored in Amazon S3.</p>
   * @public
   */
  S3HudiSource?: S3HudiSource | undefined;

  /**
   * <p>Specifies a target that writes to a Hudi data source in the Glue Data Catalog.</p>
   * @public
   */
  S3HudiCatalogTarget?: S3HudiCatalogTarget | undefined;

  /**
   * <p>Specifies a target that writes to a Hudi data source in Amazon S3.</p>
   * @public
   */
  S3HudiDirectTarget?: S3HudiDirectTarget | undefined;

  /**
   * <p>Specifies the direct JDBC source connection.</p>
   * @public
   */
  DirectJDBCSource?: DirectJDBCSource | undefined;

  /**
   * <p>Specifies a Delta Lake data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3.</p>
   * @public
   */
  S3CatalogDeltaSource?: S3CatalogDeltaSource | undefined;

  /**
   * <p>Specifies a Delta Lake data source that is registered in the Glue Data Catalog.</p>
   * @public
   */
  CatalogDeltaSource?: CatalogDeltaSource | undefined;

  /**
   * <p>Specifies a Delta Lake data source stored in Amazon S3.</p>
   * @public
   */
  S3DeltaSource?: S3DeltaSource | undefined;

  /**
   * <p>Specifies a target that writes to a Delta Lake data source in the Glue Data Catalog.</p>
   * @public
   */
  S3DeltaCatalogTarget?: S3DeltaCatalogTarget | undefined;

  /**
   * <p>Specifies a target that writes to a Delta Lake data source in Amazon S3.</p>
   * @public
   */
  S3DeltaDirectTarget?: S3DeltaDirectTarget | undefined;

  /**
   * <p>Specifies a target that writes to a data source in Amazon Redshift.</p>
   * @public
   */
  AmazonRedshiftSource?: AmazonRedshiftSource | undefined;

  /**
   * <p>Specifies a target that writes to a data target in Amazon Redshift.</p>
   * @public
   */
  AmazonRedshiftTarget?: AmazonRedshiftTarget | undefined;

  /**
   * <p>Specifies your data quality evaluation criteria. Allows multiple input data and returns a collection of Dynamic Frames.</p>
   * @public
   */
  EvaluateDataQualityMultiFrame?: EvaluateDataQualityMultiFrame | undefined;

  /**
   * <p>Specifies a Glue DataBrew recipe node.</p>
   * @public
   */
  Recipe?: Recipe | undefined;

  /**
   * <p>Specifies a Snowflake data source.</p>
   * @public
   */
  SnowflakeSource?: SnowflakeSource | undefined;

  /**
   * <p>Specifies a target that writes to a Snowflake data source.</p>
   * @public
   */
  SnowflakeTarget?: SnowflakeTarget | undefined;

  /**
   * <p>Specifies a source generated with standard connection options.</p>
   * @public
   */
  ConnectorDataSource?: ConnectorDataSource | undefined;

  /**
   * <p>Specifies a target generated with standard connection options.</p>
   * @public
   */
  ConnectorDataTarget?: ConnectorDataTarget | undefined;
}

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * <p>The <code>Table</code> object that defines the specified table.</p>
   * @public
   */
  Table?: Table | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredTableMetadataResponse {
  /**
   * <p>A Table object containing the table metadata.</p>
   * @public
   */
  Table?: Table | undefined;

  /**
   * <p>A list of column names that the user has been granted access to.</p>
   * @public
   */
  AuthorizedColumns?: string[] | undefined;

  /**
   * <p>A Boolean value that indicates whether the partition location is registered
   *           with Lake Formation.</p>
   * @public
   */
  IsRegisteredWithLakeFormation?: boolean | undefined;

  /**
   * <p>A list of column row filters.</p>
   * @public
   */
  CellFilters?: ColumnRowFilter[] | undefined;

  /**
   * <p>A cryptographically generated query identifier generated by Glue or Lake Formation.</p>
   * @public
   */
  QueryAuthorizationId?: string | undefined;

  /**
   * <p>Specifies whether the view supports the SQL dialects of one or more different query engines and can therefore be read by those engines.</p>
   * @public
   */
  IsMultiDialectView?: boolean | undefined;

  /**
   * <p>The resource ARN of the parent resource extracted from the request.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>A flag that instructs the engine not to push user-provided operations into the logical plan of the view during query planning. However, if set this flag does not guarantee that the engine will comply. Refer to the engine's documentation to understand the guarantees provided, if any.</p>
   * @public
   */
  IsProtected?: boolean | undefined;

  /**
   * <p>The Lake Formation data permissions of the caller on the table. Used to authorize the call when no view context is found.</p>
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * <p>The filter that applies to the table. For example when applying the filter in SQL, it would go in the <code>WHERE</code> clause and can be evaluated by using an <code>AND</code> operator with any other predicates applied by the user querying the table.</p>
   * @public
   */
  RowFilter?: string | undefined;
}

/**
 * <p>Specifies a version of a table.</p>
 * @public
 */
export interface TableVersion {
  /**
   * <p>The table in question.</p>
   * @public
   */
  Table?: Table | undefined;

  /**
   * <p>The ID value that identifies this table version. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface GetTablesResponse {
  /**
   * <p>A list of the requested <code>Table</code> objects.</p>
   * @public
   */
  TableList?: Table[] | undefined;

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTableVersionResponse {
  /**
   * <p>The requested table version.</p>
   * @public
   */
  TableVersion?: TableVersion | undefined;
}

/**
 * @public
 */
export interface SearchTablesResponse {
  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of the requested <code>Table</code> objects. The <code>SearchTables</code> response returns only the tables that you have access to.</p>
   * @public
   */
  TableList?: Table[] | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * <p>The name you assign to this job definition. It must be unique in your account.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A mode that describes how a job was created. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SCRIPT</code> - The job was created using the Glue Studio script editor.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VISUAL</code> - The job was created using the Glue Studio visual editor.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTEBOOK</code> - The job was created using an interactive sessions notebook.</p>
   *             </li>
   *          </ul>
   *          <p>When the <code>JobMode</code> field is missing or null, <code>SCRIPT</code> is assigned as the default value.</p>
   * @public
   */
  JobMode?: JobMode | undefined;

  /**
   * <p>Specifies whether job run queuing is enabled for the job runs for this job.</p>
   *          <p>A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing.</p>
   *          <p>If this field does not match the value set in the job run, then the value from the job run field will be used.</p>
   * @public
   */
  JobRunQueuingEnabled?: boolean | undefined;

  /**
   * <p>Description of the job being defined.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>This field is reserved for future use.</p>
   * @public
   */
  LogUri?: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   * @public
   */
  ExecutionProperty?: ExecutionProperty | undefined;

  /**
   * <p>The <code>JobCommand</code> that runs this job.</p>
   * @public
   */
  Command: JobCommand | undefined;

  /**
   * <p>The default arguments for every run of this job, specified as name-value pairs.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets
   *       from a Glue Connection, Secrets Manager or other secret management
   *       mechanism if you intend to keep them within the Job. </p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Spark jobs,
   *      see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Ray
   *       jobs, see <a href="https://docs.aws.amazon.com/glue/latest/dg/author-job-ray-job-parameters.html">Using
   *       job parameters in Ray jobs</a> in the developer guide.</p>
   * @public
   */
  DefaultArguments?: Record<string, string> | undefined;

  /**
   * <p>Arguments for this job that are not overridden when providing job arguments
   *       in a job run, specified as name-value pairs.</p>
   * @public
   */
  NonOverridableArguments?: Record<string, string> | undefined;

  /**
   * <p>The connections used for this job.</p>
   * @public
   */
  Connections?: ConnectionsList | undefined;

  /**
   * <p>The maximum number of times to retry this job if it fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * @deprecated
   *
   * <p>This parameter is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) to allocate to this Job. You can
   *       allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *       page</a>.</p>
   * @public
   */
  AllocatedCapacity?: number | undefined;

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours) for batch jobs.</p>
   *          <p>Streaming jobs must have timeout values less than 7 days or 10080 minutes. When the value is left blank, the job will be restarted after 7 days based if you have not setup a maintenance window. If you have setup maintenance window, it will be restarted during the maintenance window after 7 days.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of
   *       Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is
   *       a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB
   *       of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">
   *       Glue pricing page</a>.</p>
   *          <p>For Glue version 2.0+ jobs, you cannot specify a <code>Maximum capacity</code>.
   *       Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   *          <p>Do not set <code>MaxCapacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *         Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *         The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>The tags to use with this job. You may use tags to limit access to the job. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies configuration properties of a job notification.</p>
   * @public
   */
  NotificationProperty?: NotificationProperty | undefined;

  /**
   * <p>In Spark jobs, <code>GlueVersion</code> determines the versions of Apache Spark and Python
   *       that Glue available in a job. The Python version indicates the version
   *       supported for jobs of type Spark. </p>
   *          <p>Ray jobs should set <code>GlueVersion</code> to <code>4.0</code> or greater. However,
   *     the versions of Ray, Python and additional libraries available in your Ray job are determined
   *     by the <code>Runtime</code> parameter of the Job command.</p>
   *          <p>For more information about the available Glue versions and corresponding
   *       Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer
   *       guide.</p>
   *          <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *       G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 128GB disk (approximately 77GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.4X</code> worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk (approximately 235GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.8X</code> worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk (approximately 487GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the <code>G.4X</code> worker type.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   * @public
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode> | undefined;

  /**
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   * @public
   */
  ExecutionClass?: ExecutionClass | undefined;

  /**
   * <p>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</p>
   * @public
   */
  SourceControlDetails?: SourceControlDetails | undefined;

  /**
   * <p>This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs.</p>
   *          <p>Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT.</p>
   * @public
   */
  MaintenanceWindow?: string | undefined;
}

/**
 * @public
 */
export interface GetTableVersionsResponse {
  /**
   * <p>A list of strings identifying available versions of the
   *       specified table.</p>
   * @public
   */
  TableVersions?: TableVersion[] | undefined;

  /**
   * <p>A continuation token, if the list of available versions does
   *       not include the last one.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies a job definition.</p>
 * @public
 */
export interface Job {
  /**
   * <p>The name you assign to this job definition.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A mode that describes how a job was created. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SCRIPT</code> - The job was created using the Glue Studio script editor.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VISUAL</code> - The job was created using the Glue Studio visual editor.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTEBOOK</code> - The job was created using an interactive sessions notebook.</p>
   *             </li>
   *          </ul>
   *          <p>When the <code>JobMode</code> field is missing or null, <code>SCRIPT</code> is assigned as the default value.</p>
   * @public
   */
  JobMode?: JobMode | undefined;

  /**
   * <p>Specifies whether job run queuing is enabled for the job runs for this job.</p>
   *          <p>A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing.</p>
   *          <p>If this field does not match the value set in the job run, then the value from the job run field will be used.</p>
   * @public
   */
  JobRunQueuingEnabled?: boolean | undefined;

  /**
   * <p>A description of the job.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>This field is reserved for future use.</p>
   * @public
   */
  LogUri?: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The time and date that this job definition was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The last point in time when this job definition was modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   * @public
   */
  ExecutionProperty?: ExecutionProperty | undefined;

  /**
   * <p>The <code>JobCommand</code> that runs this job.</p>
   * @public
   */
  Command?: JobCommand | undefined;

  /**
   * <p>The default arguments for every run of this job, specified as name-value pairs.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets
   *       from a Glue Connection, Secrets Manager or other secret management
   *       mechanism if you intend to keep them within the Job. </p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Spark jobs,
   *      see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Ray
   *       jobs, see <a href="https://docs.aws.amazon.com/glue/latest/dg/author-job-ray-job-parameters.html">Using
   *       job parameters in Ray jobs</a> in the developer guide.</p>
   * @public
   */
  DefaultArguments?: Record<string, string> | undefined;

  /**
   * <p>Arguments for this job that are not overridden when providing job arguments
   *       in a job run, specified as name-value pairs.</p>
   * @public
   */
  NonOverridableArguments?: Record<string, string> | undefined;

  /**
   * <p>The connections used for this job.</p>
   * @public
   */
  Connections?: ConnectionsList | undefined;

  /**
   * <p>The maximum number of times to retry this job after a JobRun fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) allocated to runs of this job. You can
   *       allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *       page</a>.</p>
   *          <p></p>
   * @public
   */
  AllocatedCapacity?: number | undefined;

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours) for batch jobs.</p>
   *          <p>Streaming jobs must have timeout values less than 7 days or 10080 minutes. When the value is left blank, the job will be restarted after 7 days based if you have not setup a maintenance window. If you have setup maintenance window, it will be restarted during the maintenance window after 7 days.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of
   *       Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is
   *       a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB
   *       of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">
   *         Glue pricing page</a>.</p>
   *          <p>For Glue version 2.0 or later jobs, you cannot specify a <code>Maximum capacity</code>.
   *       Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   *          <p>Do not set <code>MaxCapacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *             Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *             The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *       G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 128GB disk (approximately 77GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.4X</code> worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk (approximately 235GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.8X</code> worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk (approximately 487GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the <code>G.4X</code> worker type.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>Specifies configuration properties of a job notification.</p>
   * @public
   */
  NotificationProperty?: NotificationProperty | undefined;

  /**
   * <p>In Spark jobs, <code>GlueVersion</code> determines the versions of Apache Spark and Python
   *       that Glue available in a job. The Python version indicates the version
   *       supported for jobs of type Spark. </p>
   *          <p>Ray jobs should set <code>GlueVersion</code> to <code>4.0</code> or greater. However,
   *     the versions of Ray, Python and additional libraries available in your Ray job are determined
   *     by the <code>Runtime</code> parameter of the Job command.</p>
   *          <p>For more information about the available Glue versions and corresponding
   *       Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer
   *       guide.</p>
   *          <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   * @public
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode> | undefined;

  /**
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   * @public
   */
  ExecutionClass?: ExecutionClass | undefined;

  /**
   * <p>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</p>
   * @public
   */
  SourceControlDetails?: SourceControlDetails | undefined;

  /**
   * <p>This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs.</p>
   *          <p>Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT.</p>
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * <p>The name of an Glue usage profile associated with the job.</p>
   * @public
   */
  ProfileName?: string | undefined;
}

/**
 * <p>Specifies information used to update an existing job definition. The previous job
 *       definition is completely overwritten by this information.</p>
 * @public
 */
export interface JobUpdate {
  /**
   * <p>A mode that describes how a job was created. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SCRIPT</code> - The job was created using the Glue Studio script editor.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VISUAL</code> - The job was created using the Glue Studio visual editor.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTEBOOK</code> - The job was created using an interactive sessions notebook.</p>
   *             </li>
   *          </ul>
   *          <p>When the <code>JobMode</code> field is missing or null, <code>SCRIPT</code> is assigned as the default value.</p>
   * @public
   */
  JobMode?: JobMode | undefined;

  /**
   * <p>Specifies whether job run queuing is enabled for the job runs for this job.</p>
   *          <p>A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing.</p>
   *          <p>If this field does not match the value set in the job run, then the value from the job run field will be used.</p>
   * @public
   */
  JobRunQueuingEnabled?: boolean | undefined;

  /**
   * <p>Description of the job being defined.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>This field is reserved for future use.</p>
   * @public
   */
  LogUri?: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job
   *       (required).</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   * @public
   */
  ExecutionProperty?: ExecutionProperty | undefined;

  /**
   * <p>The <code>JobCommand</code> that runs this job (required).</p>
   * @public
   */
  Command?: JobCommand | undefined;

  /**
   * <p>The default arguments for every run of this job, specified as name-value pairs.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets
   *       from a Glue Connection, Secrets Manager or other secret management
   *       mechanism if you intend to keep them within the Job. </p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Spark jobs,
   *      see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Ray
   *       jobs, see <a href="https://docs.aws.amazon.com/glue/latest/dg/author-job-ray-job-parameters.html">Using
   *       job parameters in Ray jobs</a> in the developer guide.</p>
   * @public
   */
  DefaultArguments?: Record<string, string> | undefined;

  /**
   * <p>Arguments for this job that are not overridden when providing job arguments
   *       in a job run, specified as name-value pairs.</p>
   * @public
   */
  NonOverridableArguments?: Record<string, string> | undefined;

  /**
   * <p>The connections used for this job.</p>
   * @public
   */
  Connections?: ConnectionsList | undefined;

  /**
   * <p>The maximum number of times to retry this job if it fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) to allocate to this job. You can
   *       allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *       page</a>.</p>
   * @public
   */
  AllocatedCapacity?: number | undefined;

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours) for batch jobs.</p>
   *          <p>Streaming jobs must have timeout values less than 7 days or 10080 minutes. When the value is left blank, the job will be restarted after 7 days based if you have not setup a maintenance window. If you have setup maintenance window, it will be restarted during the maintenance window after 7 days.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of
   *       Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is
   *       a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB
   *       of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">
   *       Glue pricing page</a>.</p>
   *          <p>For Glue version 2.0+ jobs, you cannot specify a <code>Maximum capacity</code>.
   *       Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   *          <p>Do not set <code>MaxCapacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *         Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *         The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *       G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 128GB disk (approximately 77GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.4X</code> worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk (approximately 235GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.8X</code> worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk (approximately 487GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the <code>G.4X</code> worker type.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>Specifies the configuration properties of a job notification.</p>
   * @public
   */
  NotificationProperty?: NotificationProperty | undefined;

  /**
   * <p>In Spark jobs, <code>GlueVersion</code> determines the versions of Apache Spark and Python
   *       that Glue available in a job. The Python version indicates the version
   *       supported for jobs of type Spark. </p>
   *          <p>Ray jobs should set <code>GlueVersion</code> to <code>4.0</code> or greater. However,
   *     the versions of Ray, Python and additional libraries available in your Ray job are determined
   *     by the <code>Runtime</code> parameter of the Job command.</p>
   *          <p>For more information about the available Glue versions and corresponding
   *       Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer
   *       guide.</p>
   *          <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   * @public
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode> | undefined;

  /**
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   * @public
   */
  ExecutionClass?: ExecutionClass | undefined;

  /**
   * <p>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</p>
   * @public
   */
  SourceControlDetails?: SourceControlDetails | undefined;

  /**
   * <p>This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs.</p>
   *          <p>Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT.</p>
   * @public
   */
  MaintenanceWindow?: string | undefined;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * <p>The requested job definition.</p>
   * @public
   */
  Job?: Job | undefined;
}

/**
 * @public
 */
export interface UpdateJobRequest {
  /**
   * <p>The name of the job definition to update.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>Specifies the values with which to update the job definition. Unspecified configuration is removed or reset to default values.</p>
   * @public
   */
  JobUpdate: JobUpdate | undefined;
}

/**
 * @public
 */
export interface BatchGetJobsResponse {
  /**
   * <p>A list of job definitions.</p>
   * @public
   */
  Jobs?: Job[] | undefined;

  /**
   * <p>A list of names of jobs not found.</p>
   * @public
   */
  JobsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface GetJobsResponse {
  /**
   * <p>A list of job definitions.</p>
   * @public
   */
  Jobs?: Job[] | undefined;

  /**
   * <p>A continuation token, if not all job definitions have yet been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @internal
 */
export const CreateJobRequestFilterSensitiveLog = (obj: CreateJobRequest): any => ({
  ...obj,
  ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobFilterSensitiveLog = (obj: Job): any => ({
  ...obj,
  ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobUpdateFilterSensitiveLog = (obj: JobUpdate): any => ({
  ...obj,
  ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetJobResponseFilterSensitiveLog = (obj: GetJobResponse): any => ({
  ...obj,
  ...(obj.Job && { Job: JobFilterSensitiveLog(obj.Job) }),
});

/**
 * @internal
 */
export const UpdateJobRequestFilterSensitiveLog = (obj: UpdateJobRequest): any => ({
  ...obj,
  ...(obj.JobUpdate && { JobUpdate: JobUpdateFilterSensitiveLog(obj.JobUpdate) }),
});

/**
 * @internal
 */
export const BatchGetJobsResponseFilterSensitiveLog = (obj: BatchGetJobsResponse): any => ({
  ...obj,
  ...(obj.Jobs && { Jobs: obj.Jobs.map((item) => JobFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetJobsResponseFilterSensitiveLog = (obj: GetJobsResponse): any => ({
  ...obj,
  ...(obj.Jobs && { Jobs: obj.Jobs.map((item) => JobFilterSensitiveLog(item)) }),
});
