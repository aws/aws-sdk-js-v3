// smithy-typescript generated code
import {
  BackfillErrorCode,
  Comparator,
  Compatibility,
  ConnectionPropertyKey,
  ConnectionType,
  CrawlerHistoryState,
  CsvHeaderOption,
  CsvSerdeOption,
  DataFormat,
  EnableHybridValues,
  ExecutionClass,
  ExistCondition,
  FieldName,
  FilterOperator,
  FunctionType,
  IcebergUpdateAction,
  InclusionAnnotationValue,
  IntegrationStatus,
  Language,
  LastRefreshType,
  PartitionIndexStatus,
  Permission,
  PermissionType,
  PrincipalType,
  RegistryStatus,
  ResourceShareType,
  ResourceState,
  SchemaDiffType,
  SchemaStatus,
  SchemaVersionStatus,
  Sort,
  SortDirectionType,
  SourceControlAuthStrategy,
  SourceControlProvider,
  StatementState,
  StatisticEvaluationLevel,
  TableAttributes,
  TableOptimizerType,
  TaskStatusType,
  TransformSortColumnType,
  TransformStatusType,
  TransformType,
  ViewDialect,
  ViewUpdateAction,
  WorkerType,
} from "./enums";

import {
  type AuditContext,
  type AuthenticationConfigurationInput,
  type CatalogInput,
  type ConnectionInput,
  type CrawlerTargets,
  type DatabaseInput,
  type DataQualityTargetTable,
  type ErrorDetail,
  type EventBatchingCondition,
  type LakeFormationConfiguration,
  type LineageConfiguration,
  type NotificationProperty,
  type PartitionInput,
  type Predicate,
  type RecrawlPolicy,
  type SchemaChangePolicy,
  type SchemaId,
  type TableOptimizer,
  type TableOptimizerConfiguration,
  type TimestampedInclusionAnnotation,
  type Workflow,
  Action,
  CustomEntityType,
  DataSource,
  GlueTable,
  Partition,
  PartitionValueList,
  StatisticAnnotation,
  TableOptimizerRun,
  Trigger,
  WorkflowRun,
} from "./models_0";

import {
  type Capabilities,
  type DataCatalogEncryptionSettings,
  type DataQualityEvaluationRunAdditionalRunOptions,
  type EncryptionConfiguration,
  type EvaluationMetrics,
  type IcebergPartitionSpec,
  type IcebergSchema,
  type IcebergSortOrder,
  type IntegrationConfig,
  type JobBookmarkEntry,
  type Location,
  type ProfileConfiguration,
  type RegistryId,
  type SourceProcessingProperties,
  type SourceTableConfig,
  type TableInput,
  type TargetProcessingProperties,
  type TargetTableConfig,
  type TransformEncryption,
  type TransformParameters,
  CatalogEntry,
  ColumnStatistics,
  IntegrationError,
  MappingEntry,
  ResourceUri,
  SchemaColumn,
  Session,
  Tag,
} from "./models_1";

/**
 * <p>The criteria used to filter the machine learning transforms.</p>
 * @public
 */
export interface TransformFilterCriteria {
  /**
   * <p>A unique transform name that is used to filter the machine learning transforms.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of machine learning transform that is used to filter the machine learning
   *       transforms.</p>
   * @public
   */
  TransformType?: TransformType | undefined;

  /**
   * <p>Filters the list of machine learning transforms by the last known status of the transforms (to indicate whether a transform can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   * @public
   */
  Status?: TransformStatusType | undefined;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The time and date before which the transforms were created.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The time and date after which the transforms were created.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>Filter on transforms last modified before this date.</p>
   * @public
   */
  LastModifiedBefore?: Date | undefined;

  /**
   * <p>Filter on transforms last modified after this date.</p>
   * @public
   */
  LastModifiedAfter?: Date | undefined;

  /**
   * <p>Filters on datasets with a specific schema. The <code>Map<Column, Type></code>
   *       object is an array of key-value pairs representing the schema this transform accepts, where
   *         <code>Column</code> is the name of a column, and <code>Type</code> is the type of the data
   *       such as an integer or string. Has an upper bound of 100 columns.</p>
   * @public
   */
  Schema?: SchemaColumn[] | undefined;
}

/**
 * <p>The sorting criteria that are associated with the machine learning transform.</p>
 * @public
 */
export interface TransformSortCriteria {
  /**
   * <p>The column to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   * @public
   */
  Column: TransformSortColumnType | undefined;

  /**
   * <p>The sort direction to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   * @public
   */
  SortDirection: SortDirectionType | undefined;
}

/**
 * @public
 */
export interface GetMLTransformsRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filter transformation criteria.</p>
   * @public
   */
  Filter?: TransformFilterCriteria | undefined;

  /**
   * <p>The sorting criteria.</p>
   * @public
   */
  Sort?: TransformSortCriteria | undefined;
}

/**
 * <p>A structure for a machine learning transform.</p>
 * @public
 */
export interface MLTransform {
  /**
   * <p>The unique transform ID that is generated for the machine learning transform. The ID is
   *       guaranteed to be unique and does not change.</p>
   * @public
   */
  TransformId?: string | undefined;

  /**
   * <p>A user-defined name for the machine learning transform. Names are not guaranteed unique
   *       and can be changed at any time.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A user-defined, long-form description text for the machine learning transform.
   *       Descriptions are not guaranteed to be unique and can be changed at any time.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current status of the machine learning transform.</p>
   * @public
   */
  Status?: TransformStatusType | undefined;

  /**
   * <p>A timestamp. The time and date that this machine learning transform was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>A timestamp. The last point in time when this machine learning transform was modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   * @public
   */
  InputRecordTables?: GlueTable[] | undefined;

  /**
   * <p>A <code>TransformParameters</code> object. You can use parameters to tune (customize) the
   *       behavior of the machine learning transform by specifying what data it learns from and your
   *       preference on various tradeoffs (such as precious vs. recall, or accuracy vs. cost).</p>
   * @public
   */
  Parameters?: TransformParameters | undefined;

  /**
   * <p>An <code>EvaluationMetrics</code> object. Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
   * @public
   */
  EvaluationMetrics?: EvaluationMetrics | undefined;

  /**
   * <p>A count identifier for the labeling files generated by Glue for this transform. As you create a better transform, you can iteratively download, label, and upload the labeling file.</p>
   * @public
   */
  LabelCount?: number | undefined;

  /**
   * <p>A map of key-value pairs representing the columns and data types that this transform can
   *       run against. Has an upper bound of 100 columns.</p>
   * @public
   */
  Schema?: SchemaColumn[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both Glue service role permissions to Glue resources, and Amazon S3 permissions required by the transform. </p>
   *          <ul>
   *             <li>
   *                <p>This role needs Glue service role permissions to allow access to resources in Glue. See <a href="https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html">Attach a Policy to IAM Users That Access Glue</a>.</p>
   *             </li>
   *             <li>
   *                <p>This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.</p>
   *             </li>
   *          </ul>
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
   *       information, see the <a href="http://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *          <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *          <ul>
   *             <li>
   *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
   *             </li>
   *          </ul>
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The type of predefined worker that is allocated when a task of this transform runs. Accepts a value of Standard, G.1X, or G.2X.</p>
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
   *          <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *          <ul>
   *             <li>
   *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a task of the transform runs.</p>
   *          <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The timeout in minutes of the machine learning transform.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>The maximum number of times to retry after an <code>MLTaskRun</code> of the machine
   *       learning transform fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   * @public
   */
  TransformEncryption?: TransformEncryption | undefined;
}

/**
 * @public
 */
export interface GetMLTransformsResponse {
  /**
   * <p>A list of machine learning transforms.</p>
   * @public
   */
  Transforms: MLTransform[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition in question resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the partition resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partition's table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The values that define the partition.</p>
   * @public
   */
  PartitionValues: string[] | undefined;
}

/**
 * @public
 */
export interface GetPartitionResponse {
  /**
   * <p>The requested information, in the form of a <code>Partition</code>
   *       object.</p>
   * @public
   */
  Partition?: Partition | undefined;
}

/**
 * @public
 */
export interface GetPartitionIndexesRequest {
  /**
   * <p>The catalog ID where the table resides.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Specifies the name of a database from which you want to retrieve partition indexes.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>Specifies the name of a table for which you want to retrieve the partition indexes.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A list of errors that can occur when registering partition indexes for an existing table.</p>
 *          <p>These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:</p>
 *          <ul>
 *             <li>
 *                <p>EncryptedPartitionError: The partitions are encrypted.</p>
 *             </li>
 *             <li>
 *                <p>InvalidPartitionTypeDataError: The partition value doesn't match the data type for that partition column.</p>
 *             </li>
 *             <li>
 *                <p>MissingPartitionValueError: The partitions are encrypted.</p>
 *             </li>
 *             <li>
 *                <p>UnsupportedPartitionCharacterError: Characters inside the partition value are not supported. For example: U+0000 , U+0001, U+0002.</p>
 *             </li>
 *             <li>
 *                <p>InternalError: Any error which does not belong to other error codes.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface BackfillError {
  /**
   * <p>The error code for an error that occurred when registering partition indexes for an existing table.</p>
   * @public
   */
  Code?: BackfillErrorCode | undefined;

  /**
   * <p>A list of a limited number of partitions in the response.</p>
   * @public
   */
  Partitions?: PartitionValueList[] | undefined;
}

/**
 * <p>A partition key pair consisting of a name and a type.</p>
 * @public
 */
export interface KeySchemaElement {
  /**
   * <p>The name of a partition key.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of a partition key.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * <p>A descriptor for a partition index in a table.</p>
 * @public
 */
export interface PartitionIndexDescriptor {
  /**
   * <p>The name of the partition index.</p>
   * @public
   */
  IndexName: string | undefined;

  /**
   * <p>A list of one or more keys, as <code>KeySchemaElement</code> structures, for the partition index.</p>
   * @public
   */
  Keys: KeySchemaElement[] | undefined;

  /**
   * <p>The status of the partition index. </p>
   *          <p>The possible statuses are:</p>
   *          <ul>
   *             <li>
   *                <p>CREATING: The index is being created. When an index is in a CREATING state, the index or its table cannot be deleted.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE: The index creation succeeds.</p>
   *             </li>
   *             <li>
   *                <p>FAILED: The index creation fails. </p>
   *             </li>
   *             <li>
   *                <p>DELETING: The index is deleted from the list of indexes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  IndexStatus: PartitionIndexStatus | undefined;

  /**
   * <p>A list of errors that can occur when registering partition indexes for an existing table.</p>
   * @public
   */
  BackfillErrors?: BackfillError[] | undefined;
}

/**
 * @public
 */
export interface GetPartitionIndexesResponse {
  /**
   * <p>A list of index descriptors.</p>
   * @public
   */
  PartitionIndexDescriptorList?: PartitionIndexDescriptor[] | undefined;

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Defines a non-overlapping region of a table's partitions, allowing
 *       multiple requests to be run in parallel.</p>
 * @public
 */
export interface Segment {
  /**
   * <p>The zero-based index number of the segment. For example, if the total number of segments
   *       is 4, <code>SegmentNumber</code> values range from 0 through 3.</p>
   * @public
   */
  SegmentNumber: number | undefined;

  /**
   * <p>The total number of segments.</p>
   * @public
   */
  TotalSegments: number | undefined;
}

/**
 * @public
 */
export interface GetPartitionsRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>An expression that filters the partitions to be returned.</p>
   *          <p>The expression uses SQL syntax similar to the SQL <code>WHERE</code> filter clause. The
   *       SQL statement parser <a href="http://jsqlparser.sourceforge.net/home.php">JSQLParser</a> parses the expression. </p>
   *          <p>
   *             <i>Operators</i>: The following are the operators that you can use in the
   *         <code>Expression</code> API call:</p>
   *          <dl>
   *             <dt>=</dt>
   *             <dd>
   *                <p>Checks whether the values of the two operands are equal; if yes, then the condition becomes
   *             true.</p>
   *                <p>Example: Assume 'variable a' holds 10 and 'variable b' holds 20. </p>
   *                <p>(a = b) is not true.</p>
   *             </dd>
   *             <dt>< ></dt>
   *             <dd>
   *                <p>Checks whether the values of two operands are equal; if the values are not equal,
   *             then the condition becomes true.</p>
   *                <p>Example: (a < > b) is true.</p>
   *             </dd>
   *             <dt>></dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a > b) is not true.</p>
   *             </dd>
   *             <dt><</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a < b) is true.</p>
   *             </dd>
   *             <dt>>=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than or equal to the value
   *             of the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a >= b) is not true.</p>
   *             </dd>
   *             <dt><=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than or equal to the value of
   *             the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a <= b) is true.</p>
   *             </dd>
   *             <dt>AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL</dt>
   *             <dd>
   *                <p>Logical operators.</p>
   *             </dd>
   *          </dl>
   *          <p>
   *             <i>Supported Partition Key Types</i>: The following are the supported
   *       partition keys.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>string</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>date</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>timestamp</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>int</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bigint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>long</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tinyint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>smallint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>decimal</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If an type is encountered that is not valid, an exception is thrown. </p>
   *          <p>The following list shows the valid operators on each type. When you define a crawler, the
   *         <code>partitionKey</code> type is created as a <code>STRING</code>, to be compatible with the catalog
   *       partitions. </p>
   *          <p>
   *             <i>Sample API Call</i>: </p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve
   *       these partitions.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The segment of the table's partitions to scan in this request.</p>
   * @public
   */
  Segment?: Segment | undefined;

  /**
   * <p>The maximum number of partitions to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When true, specifies not returning the partition column schema. Useful when you are interested only in other partition attributes such as partition values or location. This approach avoids the problem of a large response by not returning duplicate data.</p>
   * @public
   */
  ExcludeColumnSchema?: boolean | undefined;

  /**
   * <p>The transaction ID at which to read the partition contents.</p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>The time as of when to read the partition contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   * @public
   */
  QueryAsOfTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetPartitionsResponse {
  /**
   * <p>A list of requested partitions.</p>
   * @public
   */
  Partitions?: Partition[] | undefined;

  /**
   * <p>A continuation token, if the returned list of partitions does not include the last
   *       one.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPlanRequest {
  /**
   * <p>The list of mappings from a source table to target tables.</p>
   * @public
   */
  Mapping: MappingEntry[] | undefined;

  /**
   * <p>The source table.</p>
   * @public
   */
  Source: CatalogEntry | undefined;

  /**
   * <p>The target tables.</p>
   * @public
   */
  Sinks?: CatalogEntry[] | undefined;

  /**
   * <p>The parameters for the mapping.</p>
   * @public
   */
  Location?: Location | undefined;

  /**
   * <p>The programming language of the code to perform the mapping.</p>
   * @public
   */
  Language?: Language | undefined;

  /**
   * <p>A map to hold additional optional key-value parameters.</p>
   *          <p>Currently, these key-value pairs are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>inferSchema</code>  —  Specifies whether to set <code>inferSchema</code> to true or false for the default script generated by an Glue job. For example, to set <code>inferSchema</code> to true, pass the following key value pair:</p>
   *                <p>
   *                   <code>--additional-plan-options-map '\{"inferSchema":"true"\}'</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  AdditionalPlanOptionsMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetPlanResponse {
  /**
   * <p>A Python script to perform the mapping.</p>
   * @public
   */
  PythonScript?: string | undefined;

  /**
   * <p>The Scala code to perform the mapping.</p>
   * @public
   */
  ScalaCode?: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   * @public
   */
  RegistryId: RegistryId | undefined;
}

/**
 * @public
 */
export interface GetRegistryResponse {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>A description of the registry.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the registry.</p>
   * @public
   */
  Status?: RegistryStatus | undefined;

  /**
   * <p>The date and time the registry was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>The date and time the registry was updated.</p>
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A structure for returning a resource policy.</p>
 * @public
 */
export interface GluePolicy {
  /**
   * <p>Contains the requested policy document, in JSON format.</p>
   * @public
   */
  PolicyInJson?: string | undefined;

  /**
   * <p>Contains the hash value associated with this policy.</p>
   * @public
   */
  PolicyHash?: string | undefined;

  /**
   * <p>The date and time at which the policy was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   * @public
   */
  UpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesResponse {
  /**
   * <p>A list of the individual resource policies and the account-level resource policy.</p>
   * @public
   */
  GetResourcePoliciesResponseList?: GluePolicy[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the last resource policy available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The ARN of the Glue resource for which to retrieve the resource policy. If not
   *       supplied, the Data Catalog resource policy is returned. Use <code>GetResourcePolicies</code>
   *       to view all existing resource policies. For more information see <a href="https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html">Specifying Glue Resource ARNs</a>.
   *     </p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>Contains the requested policy document, in JSON format.</p>
   * @public
   */
  PolicyInJson?: string | undefined;

  /**
   * <p>Contains the hash value associated with this policy.</p>
   * @public
   */
  PolicyHash?: string | undefined;

  /**
   * <p>The date and time at which the policy was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   * @public
   */
  UpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;
}

/**
 * @public
 */
export interface GetSchemaResponse {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>A description of schema if specified when created</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat?: DataFormat | undefined;

  /**
   * <p>The compatibility mode of the schema.</p>
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * <p>The version number of the checkpoint (the last time the compatibility mode was changed).</p>
   * @public
   */
  SchemaCheckpoint?: number | undefined;

  /**
   * <p>The latest version of the schema associated with the returned schema definition.</p>
   * @public
   */
  LatestSchemaVersion?: number | undefined;

  /**
   * <p>The next version of the schema associated with the returned schema definition.</p>
   * @public
   */
  NextSchemaVersion?: number | undefined;

  /**
   * <p>The status of the schema.</p>
   * @public
   */
  SchemaStatus?: SchemaStatus | undefined;

  /**
   * <p>The date and time the schema was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>The date and time the schema was updated.</p>
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaByDefinitionInput {
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
   * <p>The definition of the schema for which schema details are required.</p>
   * @public
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaByDefinitionResponse {
  /**
   * <p>The schema ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat?: DataFormat | undefined;

  /**
   * <p>The status of the schema version.</p>
   * @public
   */
  Status?: SchemaVersionStatus | undefined;

  /**
   * <p>The date and time the schema was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * <p>A structure containing the schema version information.</p>
 * @public
 */
export interface SchemaVersionNumber {
  /**
   * <p>The latest version available for the schema.</p>
   * @public
   */
  LatestVersion?: boolean | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * <p>The <code>SchemaVersionId</code> of the schema version. This field is required for fetching by schema ID. Either this or the <code>SchemaId</code> wrapper has to be provided.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionResponse {
  /**
   * <p>The <code>SchemaVersionId</code> of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The schema definition for the schema ID.</p>
   * @public
   */
  SchemaDefinition?: string | undefined;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat?: DataFormat | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The status of the schema version. </p>
   * @public
   */
  Status?: SchemaVersionStatus | undefined;

  /**
   * <p>The date and time the schema version was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionsDiffInput {
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
   * <p>The first of the two schema versions to be compared.</p>
   * @public
   */
  FirstSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * <p>The second of the two schema versions to be compared.</p>
   * @public
   */
  SecondSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * <p>Refers to <code>SYNTAX_DIFF</code>, which is the currently supported diff type.</p>
   * @public
   */
  SchemaDiffType: SchemaDiffType | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionsDiffResponse {
  /**
   * <p>The difference between schemas as a string in JsonPatch format.</p>
   * @public
   */
  Diff?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationRequest {
  /**
   * <p>The name of the security configuration to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Specifies a security configuration.</p>
 * @public
 */
export interface SecurityConfiguration {
  /**
   * <p>The name of the security configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time at which this security configuration was created.</p>
   * @public
   */
  CreatedTimeStamp?: Date | undefined;

  /**
   * <p>The encryption configuration associated with this security configuration.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationResponse {
  /**
   * <p>The requested security configuration.</p>
   * @public
   */
  SecurityConfiguration?: SecurityConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationsResponse {
  /**
   * <p>A list of security configurations.</p>
   * @public
   */
  SecurityConfigurations?: SecurityConfiguration[] | undefined;

  /**
   * <p>A continuation token, if there are more security
   *       configurations to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * <p>The ID of the session. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The origin of the request. </p>
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>The session object is returned in the response.</p>
   * @public
   */
  Session?: Session | undefined;
}

/**
 * @public
 */
export interface GetStatementRequest {
  /**
   * <p>The Session ID of the statement.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The Id of the statement.</p>
   * @public
   */
  Id: number | undefined;

  /**
   * <p>The origin of the request.</p>
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * <p>The code execution output in JSON format.</p>
 * @public
 */
export interface StatementOutputData {
  /**
   * <p>The code execution output in text format.</p>
   * @public
   */
  TextPlain?: string | undefined;
}

/**
 * <p>The code execution output in JSON format.</p>
 * @public
 */
export interface StatementOutput {
  /**
   * <p>The code execution output.</p>
   * @public
   */
  Data?: StatementOutputData | undefined;

  /**
   * <p>The execution count of the output.</p>
   * @public
   */
  ExecutionCount?: number | undefined;

  /**
   * <p>The status of the code execution output.</p>
   * @public
   */
  Status?: StatementState | undefined;

  /**
   * <p>The name of the error in the output.</p>
   * @public
   */
  ErrorName?: string | undefined;

  /**
   * <p>The error value of the output.</p>
   * @public
   */
  ErrorValue?: string | undefined;

  /**
   * <p>The traceback of the output.</p>
   * @public
   */
  Traceback?: string[] | undefined;
}

/**
 * <p>The statement or request for a particular action to occur in a session.</p>
 * @public
 */
export interface Statement {
  /**
   * <p>The ID of the statement.</p>
   * @public
   */
  Id?: number | undefined;

  /**
   * <p>The execution code of the statement.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The state while request is actioned.</p>
   * @public
   */
  State?: StatementState | undefined;

  /**
   * <p>The output in JSON.</p>
   * @public
   */
  Output?: StatementOutput | undefined;

  /**
   * <p>The code execution progress.</p>
   * @public
   */
  Progress?: number | undefined;

  /**
   * <p>The unix time and date that the job definition was started.</p>
   * @public
   */
  StartedOn?: number | undefined;

  /**
   * <p>The unix time and date that the job definition was completed.</p>
   * @public
   */
  CompletedOn?: number | undefined;
}

/**
 * @public
 */
export interface GetStatementResponse {
  /**
   * <p>Returns the statement.</p>
   * @public
   */
  Statement?: Statement | undefined;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.
   *       For Hive compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to retrieve the definition. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The transaction ID at which to read the table contents. </p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
   * <p>A structure containing the Lake Formation <a href="https://docs.aws.amazon.com/glue/latest/webapi/API_AuditContext.html">audit context</a>.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.</p>
   * @public
   */
  IncludeStatusDetails?: boolean | undefined;
}

/**
 * <p>A table that points to an entity outside the Glue Data Catalog.</p>
 * @public
 */
export interface FederatedTable {
  /**
   * <p>A unique identifier for the federated table.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>A unique identifier for the federated database.</p>
   * @public
   */
  DatabaseIdentifier?: string | undefined;

  /**
   * <p>The name of the connection to the external metastore.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The type of connection used to access the federated table, specifying the protocol or method for connecting to the external data source.</p>
   * @public
   */
  ConnectionType?: string | undefined;
}

/**
 * <p>A structure that contains information for an analytical engine to validate a view, prior to persisting the view metadata. Used in the case of direct <code>UpdateTable</code> or <code>CreateTable</code> API calls.</p>
 * @public
 */
export interface ViewValidation {
  /**
   * <p>The dialect of the query engine.</p>
   * @public
   */
  Dialect?: ViewDialect | undefined;

  /**
   * <p>The version of the dialect of the query engine. For example, 3.0.0.</p>
   * @public
   */
  DialectVersion?: string | undefined;

  /**
   * <p>The <code>SELECT</code> query that defines the view, as provided by the customer.</p>
   * @public
   */
  ViewValidationText?: string | undefined;

  /**
   * <p>The time of the last update.</p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p>The state of the validation.</p>
   * @public
   */
  State?: ResourceState | undefined;

  /**
   * <p>An error associated with the validation.</p>
   * @public
   */
  Error?: ErrorDetail | undefined;
}

/**
 * <p>A structure that contains the dialect of the view, and the query that defines the view.</p>
 * @public
 */
export interface ViewRepresentation {
  /**
   * <p>The dialect of the query engine.</p>
   * @public
   */
  Dialect?: ViewDialect | undefined;

  /**
   * <p>The version of the dialect of the query engine. For example, 3.0.0.</p>
   * @public
   */
  DialectVersion?: string | undefined;

  /**
   * <p>The <code>SELECT</code> query provided by the customer during <code>CREATE VIEW DDL</code>. This SQL is not used during a query on a view (<code>ViewExpandedText</code> is used instead). <code>ViewOriginalText</code> is used for cases like <code>SHOW CREATE VIEW</code> where users want to see the original DDL command that created the view.</p>
   * @public
   */
  ViewOriginalText?: string | undefined;

  /**
   * <p>The expanded SQL for the view. This SQL is used by engines while processing a query on a view. Engines may perform operations during view creation to transform <code>ViewOriginalText</code> to <code>ViewExpandedText</code>. For example:</p>
   *          <ul>
   *             <li>
   *                <p>Fully qualified identifiers: <code>SELECT * from table1 -> SELECT * from db1.table1</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ViewExpandedText?: string | undefined;

  /**
   * <p>The name of the connection to be used to validate the specific representation of the view.</p>
   * @public
   */
  ValidationConnection?: string | undefined;

  /**
   * <p>Dialects marked as stale are no longer valid and must be updated before they can be queried in their respective query engines.</p>
   * @public
   */
  IsStale?: boolean | undefined;
}

/**
 * <p>A structure containing details for representations.</p>
 * @public
 */
export interface ViewDefinition {
  /**
   * <p>You can set this flag as true to instruct the engine not to push user-provided operations into the logical plan of the view during query planning. However, setting this flag does not guarantee that the engine will comply. Refer to the engine's documentation to understand the guarantees provided, if any.</p>
   * @public
   */
  IsProtected?: boolean | undefined;

  /**
   * <p>The definer of a view in SQL.</p>
   * @public
   */
  Definer?: string | undefined;

  /**
   * <p>The ID value that identifies this view's version. For materialized views, the version ID is the Apache Iceberg table's snapshot ID. </p>
   * @public
   */
  ViewVersionId?: number | undefined;

  /**
   * <p>The version ID of the Apache Iceberg table.</p>
   * @public
   */
  ViewVersionToken?: string | undefined;

  /**
   * <p>Auto refresh interval in seconds for the materialized view. If not specified, the view will
   *       not automatically refresh.</p>
   * @public
   */
  RefreshSeconds?: number | undefined;

  /**
   * <p>Sets the method used for the most recent refresh.</p>
   * @public
   */
  LastRefreshType?: LastRefreshType | undefined;

  /**
   * <p>A list of table Amazon Resource Names (ARNs).</p>
   * @public
   */
  SubObjects?: string[] | undefined;

  /**
   * <p>List of the Apache Iceberg table versions referenced by the materialized view.</p>
   * @public
   */
  SubObjectVersionIds?: number[] | undefined;

  /**
   * <p>A list of representations.</p>
   * @public
   */
  Representations?: ViewRepresentation[] | undefined;
}

/**
 * @public
 */
export interface GetTableOptimizerRequest {
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
   * <p>The type of table optimizer.</p>
   * @public
   */
  Type: TableOptimizerType | undefined;
}

/**
 * @public
 */
export interface GetTableOptimizerResponse {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The optimizer associated with the specified table.</p>
   * @public
   */
  TableOptimizer?: TableOptimizer | undefined;
}

/**
 * @public
 */
export interface GetTablesRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database in the catalog whose tables to list. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>A regular expression pattern. If present, only those tables
   *       whose names match the pattern are returned.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The transaction ID at which to read the table contents.</p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
   * <p>A structure containing the Lake Formation <a href="https://docs.aws.amazon.com/glue/latest/webapi/API_AuditContext.html">audit context</a>.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.</p>
   * @public
   */
  IncludeStatusDetails?: boolean | undefined;

  /**
   * <p> Specifies the table fields returned by the <code>GetTables</code> call. This parameter doesn’t accept an empty list. The request must include <code>NAME</code>.</p>
   *          <p>The following are the valid combinations of values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NAME</code> - Names of all tables in the database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NAME</code>, <code>TABLE_TYPE</code> - Names of all tables and the table types.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributesToGet?: TableAttributes[] | undefined;
}

/**
 * @public
 */
export interface GetTableVersionRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The ID value of the table version to be retrieved. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1. </p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface GetTableVersionsRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A continuation token, if this is not the first call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of table versions to return in one response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to retrieve tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetTagsResponse {
  /**
   * <p>The requested tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTriggerRequest {
  /**
   * <p>The name of the trigger to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetTriggerResponse {
  /**
   * <p>The requested trigger definition.</p>
   * @public
   */
  Trigger?: Trigger | undefined;
}

/**
 * @public
 */
export interface GetTriggersRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The name of the job to retrieve triggers for. The trigger that can start this job is
   *       returned, and if there is no such trigger, all triggers are returned.</p>
   * @public
   */
  DependentJobName?: string | undefined;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetTriggersResponse {
  /**
   * <p>A list of triggers for the specified job.</p>
   * @public
   */
  Triggers?: Trigger[] | undefined;

  /**
   * <p>A continuation token, if not all the requested triggers
   *       have yet been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
 * @public
 */
export interface QuerySessionContext {
  /**
   * <p>A unique identifier generated by the query engine for the query.</p>
   * @public
   */
  QueryId?: string | undefined;

  /**
   * <p>A timestamp provided by the query engine for when the query started.</p>
   * @public
   */
  QueryStartTime?: Date | undefined;

  /**
   * <p>An identifier string for the consumer cluster.</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>A cryptographically generated query identifier generated by Glue or Lake Formation.</p>
   * @public
   */
  QueryAuthorizationId?: string | undefined;

  /**
   * <p>An opaque string-string map passed by the query engine.</p>
   * @public
   */
  AdditionalContext?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionMetadataRequest {
  /**
   * <p>Specified only if the base tables belong to a different Amazon Web Services Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The catalog ID where the partition resides.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>(Required) Specifies the name of a database that contains the partition.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>(Required) Specifies the name of a table that contains the partition.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>(Required) A list of partition key values.</p>
   * @public
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>A structure containing Lake Formation audit context information.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>(Required) A list of supported permission types. </p>
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionMetadataResponse {
  /**
   * <p>A Partition object containing the partition metadata.</p>
   * @public
   */
  Partition?: Partition | undefined;

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
}

/**
 * @public
 */
export interface GetUnfilteredPartitionsMetadataRequest {
  /**
   * <p>Specified only if the base tables belong to a different Amazon Web Services Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *           the AWS account ID is used by default. </p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table that contains the partition.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>An expression that filters the partitions to be returned.</p>
   *          <p>The expression uses SQL syntax similar to the SQL <code>WHERE</code> filter clause. The
   *       SQL statement parser <a href="http://jsqlparser.sourceforge.net/home.php">JSQLParser</a> parses the expression. </p>
   *          <p>
   *             <i>Operators</i>: The following are the operators that you can use in the
   *         <code>Expression</code> API call:</p>
   *          <dl>
   *             <dt>=</dt>
   *             <dd>
   *                <p>Checks whether the values of the two operands are equal; if yes, then the condition becomes
   *             true.</p>
   *                <p>Example: Assume 'variable a' holds 10 and 'variable b' holds 20. </p>
   *                <p>(a = b) is not true.</p>
   *             </dd>
   *             <dt>< ></dt>
   *             <dd>
   *                <p>Checks whether the values of two operands are equal; if the values are not equal,
   *             then the condition becomes true.</p>
   *                <p>Example: (a < > b) is true.</p>
   *             </dd>
   *             <dt>></dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a > b) is not true.</p>
   *             </dd>
   *             <dt><</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a < b) is true.</p>
   *             </dd>
   *             <dt>>=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than or equal to the value
   *             of the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a >= b) is not true.</p>
   *             </dd>
   *             <dt><=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than or equal to the value of
   *             the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a <= b) is true.</p>
   *             </dd>
   *             <dt>AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL</dt>
   *             <dd>
   *                <p>Logical operators.</p>
   *             </dd>
   *          </dl>
   *          <p>
   *             <i>Supported Partition Key Types</i>: The following are the supported
   *       partition keys.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>string</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>date</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>timestamp</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>int</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bigint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>long</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tinyint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>smallint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>decimal</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If an type is encountered that is not valid, an exception is thrown. </p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>A structure containing Lake Formation audit context information.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>A list of supported permission types. </p>
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve
   *       these partitions.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The segment of the table's partitions to scan in this request.</p>
   * @public
   */
  Segment?: Segment | undefined;

  /**
   * <p>The maximum number of partitions to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * <p>A partition that contains unfiltered metadata.</p>
 * @public
 */
export interface UnfilteredPartition {
  /**
   * <p>The partition object.</p>
   * @public
   */
  Partition?: Partition | undefined;

  /**
   * <p>The list of columns the user has permissions to access.</p>
   * @public
   */
  AuthorizedColumns?: string[] | undefined;

  /**
   * <p>A Boolean value indicating that the partition location is registered with Lake Formation.</p>
   * @public
   */
  IsRegisteredWithLakeFormation?: boolean | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionsMetadataResponse {
  /**
   * <p>A list of requested partitions.</p>
   * @public
   */
  UnfilteredPartitions?: UnfilteredPartition[] | undefined;

  /**
   * <p>A continuation token, if the returned list of partitions does not include the last
   *       one.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure specifying the dialect and dialect version used by the query engine.</p>
 * @public
 */
export interface SupportedDialect {
  /**
   * <p>The dialect of the query engine.</p>
   * @public
   */
  Dialect?: ViewDialect | undefined;

  /**
   * <p>The version of the dialect of the query engine. For example, 3.0.0.</p>
   * @public
   */
  DialectVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredTableMetadataRequest {
  /**
   * <p>Specified only if the base tables belong to a different Amazon Web Services Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The catalog ID where the table resides.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>(Required) Specifies the name of a database that contains the table.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>(Required) Specifies the name of a table for which you are requesting metadata.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A structure containing Lake Formation audit context information.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>Indicates the level of filtering a third-party analytical engine is capable of enforcing when calling the <code>GetUnfilteredTableMetadata</code> API operation. Accepted values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COLUMN_PERMISSION</code> - Column permissions ensure that users can access only specific columns in the table. If there are particular columns contain sensitive data, data lake administrators can define column filters that exclude access to specific columns.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CELL_FILTER_PERMISSION</code> - Cell-level filtering combines column filtering (include or exclude columns) and row filter expressions to restrict access to individual elements in the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NESTED_PERMISSION</code> - Nested permissions combines cell-level filtering and nested column filtering to restrict access to columns and/or nested columns in specific rows based on row filter expressions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NESTED_CELL_PERMISSION</code> - Nested cell permissions combines nested permission with nested cell-level filtering. This allows different subsets of nested columns to be restricted based on an array of row filter expressions. </p>
   *             </li>
   *          </ul>
   *          <p>Note: Each of these permission types follows a hierarchical order where each subsequent permission type includes all permission of the previous type.</p>
   *          <p>Important: If you provide a supported permission type that doesn't match the user's level of permissions on the table, then Lake Formation raises an exception. For example, if the third-party engine calling the <code>GetUnfilteredTableMetadata</code> operation can enforce only column-level filtering, and the user has nested cell filtering applied on the table, Lake Formation throws an exception, and will not return unfiltered table metadata and data access credentials.</p>
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * <p>The resource ARN of the view.</p>
   * @public
   */
  ParentResourceArn?: string | undefined;

  /**
   * <p>The resource ARN of the root view in a chain of nested views.</p>
   * @public
   */
  RootResourceArn?: string | undefined;

  /**
   * <p>A structure specifying the dialect and dialect version used by the query engine.</p>
   * @public
   */
  SupportedDialect?: SupportedDialect | undefined;

  /**
   * <p>The Lake Formation data permissions of the caller on the table. Used to authorize the call when no view context is found.</p>
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * <p>A filter that uses both column-level and row-level filtering.</p>
 * @public
 */
export interface ColumnRowFilter {
  /**
   * <p>A string containing the name of the column.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>A string containing the row-level filter expression.</p>
   * @public
   */
  RowFilterExpression?: string | undefined;
}

/**
 * @public
 */
export interface GetUsageProfileRequest {
  /**
   * <p>The name of the usage profile to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetUsageProfileResponse {
  /**
   * <p>The name of the usage profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the usage profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A <code>ProfileConfiguration</code> object specifying the job and session values for the profile.</p>
   * @public
   */
  Configuration?: ProfileConfiguration | undefined;

  /**
   * <p>The date and time when the usage profile was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The date and time when the usage profile was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be retrieved is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the function is located.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function.</p>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * <p>Represents the equivalent of a Hive user-defined function
 *       (<code>UDF</code>) definition.</p>
 * @public
 */
export interface UserDefinedFunction {
  /**
   * <p>The name of the function.</p>
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * <p>The name of the catalog database that contains the function.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The Java class that contains the function code.</p>
   * @public
   */
  ClassName?: string | undefined;

  /**
   * <p>The owner of the function.</p>
   * @public
   */
  OwnerName?: string | undefined;

  /**
   * <p>The type of the function.</p>
   * @public
   */
  FunctionType?: FunctionType | undefined;

  /**
   * <p>The owner type.</p>
   * @public
   */
  OwnerType?: PrincipalType | undefined;

  /**
   * <p>The time at which the function was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The resource URIs for the function.</p>
   * @public
   */
  ResourceUris?: ResourceUri[] | undefined;

  /**
   * <p>The ID of the Data Catalog in which the function resides.</p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionResponse {
  /**
   * <p>The requested function definition.</p>
   * @public
   */
  UserDefinedFunction?: UserDefinedFunction | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionsRequest {
  /**
   * <p>The ID of the Data Catalog where the functions to be retrieved are located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the functions are located. If none is provided, functions from all the
   *       databases across the catalog will be returned.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>An optional function-name pattern string that filters the function
   *       definitions returned.</p>
   * @public
   */
  Pattern: string | undefined;

  /**
   * <p>An optional function-type pattern string that filters the function
   *       definitions returned from Amazon Redshift Federated Permissions Catalog.</p>
   *          <p>Specify a value of <code>REGULAR_FUNCTION</code> or <code>STORED_PROCEDURE</code>.
   *       The <code>STORED_PROCEDURE</code> function type is only compatible with
   *       Amazon Redshift Federated Permissions Catalog.
   *     </p>
   * @public
   */
  FunctionType?: FunctionType | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of functions to return in one response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionsResponse {
  /**
   * <p>A list of requested function definitions.</p>
   * @public
   */
  UserDefinedFunctions?: UserDefinedFunction[] | undefined;

  /**
   * <p>A continuation token, if the list of functions returned does
   *       not include the last requested function.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * <p>The name of the workflow to retrieve.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
   * @public
   */
  IncludeGraph?: boolean | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * <p>The resource metadata for the workflow.</p>
   * @public
   */
  Workflow?: Workflow | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunRequest {
  /**
   * <p>Name of the workflow being run.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   * @public
   */
  IncludeGraph?: boolean | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunResponse {
  /**
   * <p>The requested workflow run metadata.</p>
   * @public
   */
  Run?: WorkflowRun | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunPropertiesRequest {
  /**
   * <p>Name of the workflow which was run.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run whose run properties should be returned.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunPropertiesResponse {
  /**
   * <p>The workflow run properties which were set during the specified run.</p>
   * @public
   */
  RunProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunsRequest {
  /**
   * <p>Name of the workflow whose metadata of runs should be returned.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   * @public
   */
  IncludeGraph?: boolean | undefined;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of workflow runs to be included in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunsResponse {
  /**
   * <p>A list of workflow run metadata objects.</p>
   * @public
   */
  Runs?: WorkflowRun[] | undefined;

  /**
   * <p>A continuation token, if not all requested workflow runs have been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportCatalogToGlueRequest {
  /**
   * <p>The ID of the catalog to import. Currently, this should be the Amazon Web Services account ID.</p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface ImportCatalogToGlueResponse {}

/**
 * @public
 */
export interface ListBlueprintsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the list by an Amazon Web Services resource tag.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListBlueprintsResponse {
  /**
   * <p>List of names of blueprints in the account.</p>
   * @public
   */
  Blueprints?: string[] | undefined;

  /**
   * <p>A continuation token, if not all blueprint names have been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListColumnStatisticsTaskRunsRequest {
  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListColumnStatisticsTaskRunsResponse {
  /**
   * <p>A list of column statistics task run IDs.</p>
   * @public
   */
  ColumnStatisticsTaskRunIds?: string[] | undefined;

  /**
   * <p>A continuation token, if not all task run IDs have yet been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionTypesRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a variant of a connection type in Glue Data Catalog. Connection type variants provide specific configurations and behaviors
 *       for different implementations of the same general connection type.</p>
 * @public
 */
export interface ConnectionTypeVariant {
  /**
   * <p>The unique identifier for the connection type variant. This name is used internally to identify the specific variant of a connection type.
   *     </p>
   * @public
   */
  ConnectionTypeVariantName?: string | undefined;

  /**
   * <p>The human-readable name for the connection type variant that is displayed in the Glue console.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A detailed description of the connection type variant, including its purpose, use cases, and any specific configuration requirements.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The URL of the logo associated with a connection type variant.</p>
   * @public
   */
  LogoUrl?: string | undefined;
}

/**
 * <p>Brief information about a supported connection type returned by the <code>ListConnectionTypes</code> API.</p>
 * @public
 */
export interface ConnectionTypeBrief {
  /**
   * <p>The name of the connection type.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>The human-readable name for the connection type that is displayed in the Glue console.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The name of the vendor or provider that created or maintains this connection type.</p>
   * @public
   */
  Vendor?: string | undefined;

  /**
   * <p>A description of the connection type.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of categories that this connection type belongs to. Categories help users filter and find appropriate connection types based on their
   *       use cases.</p>
   * @public
   */
  Categories?: string[] | undefined;

  /**
   * <p>The supported authentication types, data interface types (compute environments), and data operations of the connector.</p>
   * @public
   */
  Capabilities?: Capabilities | undefined;

  /**
   * <p>The URL of the logo associated with a connection type.</p>
   * @public
   */
  LogoUrl?: string | undefined;

  /**
   * <p>A list of variants available for this connection type. Different variants may provide specialized configurations for specific use cases or
   *       implementations of the same general connection type.</p>
   * @public
   */
  ConnectionTypeVariants?: ConnectionTypeVariant[] | undefined;
}

/**
 * @public
 */
export interface ListConnectionTypesResponse {
  /**
   * <p>A list of <code>ConnectionTypeBrief</code> objects containing brief information about the supported connection types.</p>
   * @public
   */
  ConnectionTypes?: ConnectionTypeBrief[] | undefined;

  /**
   * <p>A continuation token, if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCrawlersRequest {
  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCrawlersResponse {
  /**
   * <p>The names of all crawlers in the account, or the crawlers with the specified tags.</p>
   * @public
   */
  CrawlerNames?: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A list of fields, comparators and value that you can use to filter the crawler runs for a specified crawler.</p>
 * @public
 */
export interface CrawlsFilter {
  /**
   * <p>A key used to filter the crawler runs for a specified crawler. Valid values for each of the field names are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CRAWL_ID</code>: A string representing the UUID identifier for a crawl.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATE</code>: A string representing the state of the crawl.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>START_TIME</code> and <code>END_TIME</code>: The epoch timestamp in milliseconds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DPU_HOUR</code>: The number of data processing unit (DPU) hours used for the crawl.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FieldName?: FieldName | undefined;

  /**
   * <p>A defined comparator that operates on the value. The available operators are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GT</code>: Greater than.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GE</code>: Greater than or equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LT</code>: Less than.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LE</code>: Less than or equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EQ</code>: Equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NE</code>: Not equal to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FilterOperator?: FilterOperator | undefined;

  /**
   * <p>The value provided for comparison on the crawl field. </p>
   * @public
   */
  FieldValue?: string | undefined;
}

/**
 * @public
 */
export interface ListCrawlsRequest {
  /**
   * <p>The name of the crawler whose runs you want to retrieve.</p>
   * @public
   */
  CrawlerName: string | undefined;

  /**
   * <p>The maximum number of results to return. The default is 20, and maximum is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the crawls by the criteria you specify in a list of <code>CrawlsFilter</code> objects.</p>
   * @public
   */
  Filters?: CrawlsFilter[] | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the information for a run of a crawler.</p>
 * @public
 */
export interface CrawlerHistory {
  /**
   * <p>A UUID identifier for each crawl.</p>
   * @public
   */
  CrawlId?: string | undefined;

  /**
   * <p>The state of the crawl.</p>
   * @public
   */
  State?: CrawlerHistoryState | undefined;

  /**
   * <p>The date and time on which the crawl started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time on which the crawl ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>A run summary for the specific crawl in JSON. Contains the catalog tables and partitions that were added, updated, or deleted.</p>
   * @public
   */
  Summary?: string | undefined;

  /**
   * <p>If an error occurred, the error message associated with the crawl.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The log group associated with the crawl.</p>
   * @public
   */
  LogGroup?: string | undefined;

  /**
   * <p>The log stream associated with the crawl.</p>
   * @public
   */
  LogStream?: string | undefined;

  /**
   * <p>The prefix for a CloudWatch message about this crawl.</p>
   * @public
   */
  MessagePrefix?: string | undefined;

  /**
   * <p>The number of data processing units (DPU) used in hours for the crawl.</p>
   * @public
   */
  DPUHour?: number | undefined;
}

/**
 * @public
 */
export interface ListCrawlsResponse {
  /**
   * <p>A list of <code>CrawlerHistory</code> objects representing the crawl runs that meet your criteria.</p>
   * @public
   */
  Crawls?: CrawlerHistory[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomEntityTypesRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A list of key-value pair tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCustomEntityTypesResponse {
  /**
   * <p>A list of <code>CustomEntityType</code> objects representing custom patterns.</p>
   * @public
   */
  CustomEntityTypes?: CustomEntityType[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Criteria used to return data quality results.</p>
 * @public
 */
export interface DataQualityResultFilterCriteria {
  /**
   * <p>Filter results by the specified data source. For example, retrieving all results for an Glue table.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>Filter results by the specified job name.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filter results by the specified job run ID.</p>
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * <p>Filter results by runs that started after this time.</p>
   * @public
   */
  StartedAfter?: Date | undefined;

  /**
   * <p>Filter results by runs that started before this time.</p>
   * @public
   */
  StartedBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityResultsRequest {
  /**
   * <p>The filter criteria.</p>
   * @public
   */
  Filter?: DataQualityResultFilterCriteria | undefined;

  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes a data quality result.</p>
 * @public
 */
export interface DataQualityResultDescription {
  /**
   * <p>The unique result ID for this data quality result.</p>
   * @public
   */
  ResultId?: string | undefined;

  /**
   * <p>The table name associated with the data quality result.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>The job name associated with the data quality result.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The job run ID associated with the data quality result.</p>
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * <p>The time that the run started for this data quality result.</p>
   * @public
   */
  StartedOn?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityResultsResponse {
  /**
   * <p>A list of <code>DataQualityResultDescription</code> objects.</p>
   * @public
   */
  Results: DataQualityResultDescription[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A filter for listing data quality recommendation runs.</p>
 * @public
 */
export interface DataQualityRuleRecommendationRunFilter {
  /**
   * <p>Filter based on a specified data source (Glue table).</p>
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * <p>Filter based on time for results started before provided time.</p>
   * @public
   */
  StartedBefore?: Date | undefined;

  /**
   * <p>Filter based on time for results started after provided time.</p>
   * @public
   */
  StartedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRuleRecommendationRunsRequest {
  /**
   * <p>The filter criteria.</p>
   * @public
   */
  Filter?: DataQualityRuleRecommendationRunFilter | undefined;

  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes the result of a data quality rule recommendation run.</p>
 * @public
 */
export interface DataQualityRuleRecommendationRunDescription {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>The date and time when this run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The data source (Glue table) associated with the recommendation run.</p>
   * @public
   */
  DataSource?: DataSource | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRuleRecommendationRunsResponse {
  /**
   * <p>A list of <code>DataQualityRuleRecommendationRunDescription</code> objects.</p>
   * @public
   */
  Runs?: DataQualityRuleRecommendationRunDescription[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter criteria.</p>
 * @public
 */
export interface DataQualityRulesetEvaluationRunFilter {
  /**
   * <p>Filter based on a data source (an Glue table) associated with the run.</p>
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * <p>Filter results by runs that started before this time.</p>
   * @public
   */
  StartedBefore?: Date | undefined;

  /**
   * <p>Filter results by runs that started after this time.</p>
   * @public
   */
  StartedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetEvaluationRunsRequest {
  /**
   * <p>The filter criteria.</p>
   * @public
   */
  Filter?: DataQualityRulesetEvaluationRunFilter | undefined;

  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes the result of a data quality ruleset evaluation run.</p>
 * @public
 */
export interface DataQualityRulesetEvaluationRunDescription {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>The date and time when the run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The data source (an Glue table) associated with the run.</p>
   * @public
   */
  DataSource?: DataSource | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetEvaluationRunsResponse {
  /**
   * <p>A list of <code>DataQualityRulesetEvaluationRunDescription</code> objects representing data quality ruleset runs.</p>
   * @public
   */
  Runs?: DataQualityRulesetEvaluationRunDescription[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The criteria used to filter data quality rulesets.</p>
 * @public
 */
export interface DataQualityRulesetFilterCriteria {
  /**
   * <p>The name of the ruleset filter criteria.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the ruleset filter criteria.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Filter on rulesets created before this date.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>Filter on rulesets created after this date.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>Filter on rulesets last modified before this date.</p>
   * @public
   */
  LastModifiedBefore?: Date | undefined;

  /**
   * <p>Filter on rulesets last modified after this date.</p>
   * @public
   */
  LastModifiedAfter?: Date | undefined;

  /**
   * <p>The name and database name of the target table.</p>
   * @public
   */
  TargetTable?: DataQualityTargetTable | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetsRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filter criteria. </p>
   * @public
   */
  Filter?: DataQualityRulesetFilterCriteria | undefined;

  /**
   * <p>A list of key-value pair tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Describes a data quality ruleset returned by <code>GetDataQualityRuleset</code>.</p>
 * @public
 */
export interface DataQualityRulesetListDetails {
  /**
   * <p>The name of the data quality ruleset.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the data quality ruleset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time the data quality ruleset was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The date and time the data quality ruleset was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>An object representing an Glue table.</p>
   * @public
   */
  TargetTable?: DataQualityTargetTable | undefined;

  /**
   * <p>When a ruleset was created from a recommendation run, this run ID is generated to link the two together.</p>
   * @public
   */
  RecommendationRunId?: string | undefined;

  /**
   * <p>The number of rules in the ruleset.</p>
   * @public
   */
  RuleCount?: number | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetsResponse {
  /**
   * <p>A paginated list of rulesets for the specified list of Glue tables.</p>
   * @public
   */
  Rulesets?: DataQualityRulesetListDetails[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A timestamp filter.</p>
 * @public
 */
export interface TimestampFilter {
  /**
   * <p>The timestamp before which statistics should be included in the results.</p>
   * @public
   */
  RecordedBefore?: Date | undefined;

  /**
   * <p>The timestamp after which statistics should be included in the results.</p>
   * @public
   */
  RecordedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticAnnotationsRequest {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>A timestamp filter.</p>
   * @public
   */
  TimestampFilter?: TimestampFilter | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticAnnotationsResponse {
  /**
   * <p>A list of <code>StatisticAnnotation</code> applied to the Statistic</p>
   * @public
   */
  Annotations?: StatisticAnnotation[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticsRequest {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>A timestamp filter.</p>
   * @public
   */
  TimestampFilter?: TimestampFilter | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A run identifier.</p>
 * @public
 */
export interface RunIdentifier {
  /**
   * <p>The Run ID.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The Job Run ID.</p>
   * @public
   */
  JobRunId?: string | undefined;
}

/**
 * <p>Summary information about a statistic.</p>
 * @public
 */
export interface StatisticSummary {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>The Run Identifier</p>
   * @public
   */
  RunIdentifier?: RunIdentifier | undefined;

  /**
   * <p>The name of the statistic.</p>
   * @public
   */
  StatisticName?: string | undefined;

  /**
   * <p>The value of the statistic.</p>
   * @public
   */
  DoubleValue?: number | undefined;

  /**
   * <p>The evaluation level of the statistic. Possible values: <code>Dataset</code>, <code>Column</code>, <code>Multicolumn</code>.</p>
   * @public
   */
  EvaluationLevel?: StatisticEvaluationLevel | undefined;

  /**
   * <p>The list of columns referenced by the statistic.</p>
   * @public
   */
  ColumnsReferenced?: string[] | undefined;

  /**
   * <p>The list of datasets referenced by the statistic.</p>
   * @public
   */
  ReferencedDatasets?: string[] | undefined;

  /**
   * <p>A <code>StatisticPropertiesMap</code>, which contains a <code>NameString</code> and <code>DescriptionString</code>
   *          </p>
   * @public
   */
  StatisticProperties?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the statistic was recorded.</p>
   * @public
   */
  RecordedOn?: Date | undefined;

  /**
   * <p>The inclusion annotation for the statistic.</p>
   * @public
   */
  InclusionAnnotation?: TimestampedInclusionAnnotation | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticsResponse {
  /**
   * <p>A <code>StatisticSummaryList</code>.</p>
   * @public
   */
  Statistics?: StatisticSummary[] | undefined;

  /**
   * <p>A pagination token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevEndpointsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDevEndpointsResponse {
  /**
   * <p>The names of all the <code>DevEndpoint</code>s in the account, or the
   *         <code>DevEndpoint</code>s with the specified tags.</p>
   * @public
   */
  DevEndpointNames?: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitiesRequest {
  /**
   * <p>A name for the connection that has required credentials to query any connection type.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The catalog ID of the catalog that contains the connection. This can be null, By default, the Amazon Web Services Account ID is the catalog ID.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Name of the parent entity for which you want to list the children. This parameter takes a fully-qualified path of the entity in order to list the child entities.</p>
   * @public
   */
  ParentEntityName?: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The API version of the SaaS connector.</p>
   * @public
   */
  DataStoreApiVersion?: string | undefined;
}

/**
 * <p>An entity supported by a given <code>ConnectionType</code>.</p>
 * @public
 */
export interface Entity {
  /**
   * <p>The name of the entity.</p>
   * @public
   */
  EntityName?: string | undefined;

  /**
   * <p>Label used for the entity.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>A Boolean value which helps to determine whether there are sub objects that can be listed.</p>
   * @public
   */
  IsParentEntity?: boolean | undefined;

  /**
   * <p>A description of the entity.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of entities that are present in the response. This value depends on the source connection. For example this is <code>SObjects</code> for Salesforce and <code>databases</code> or <code>schemas</code> or <code>tables</code> for sources like Amazon Redshift.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>An optional map of keys which may be returned for an entity by a connector.</p>
   * @public
   */
  CustomProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEntitiesResponse {
  /**
   * <p>A list of <code>Entity</code> objects.</p>
   * @public
   */
  Entities?: Entity[] | undefined;

  /**
   * <p>A continuation token, present if the current segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A filter for integration resource properties.</p>
 * @public
 */
export interface IntegrationResourcePropertyFilter {
  /**
   * <p>The name of the filter. Supported filter keys are <code>SourceArn</code> and <code>TargetArn</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of filter values.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListIntegrationResourcePropertiesRequest {
  /**
   * <p>This is the pagination token for next page, initial value is <code>null</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of filters, supported filter Key is <code>SourceArn</code> and <code>TargetArn</code>.</p>
   * @public
   */
  Filters?: IntegrationResourcePropertyFilter[] | undefined;

  /**
   * <p>This is total number of items to be evaluated.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * <p>A structure representing an integration resource property.</p>
 * @public
 */
export interface IntegrationResourceProperty {
  /**
   * <p>The connection ARN of the source, or the database ARN of the target.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The resource ARN created through this create API. The format is something like arn:aws:glue:<region>:<account_id>:integrationresourceproperty/*</p>
   * @public
   */
  ResourcePropertyArn?: string | undefined;

  /**
   * <p>The resource properties associated with the integration source.</p>
   * @public
   */
  SourceProcessingProperties?: SourceProcessingProperties | undefined;

  /**
   * <p>The resource properties associated with the integration target.</p>
   * @public
   */
  TargetProcessingProperties?: TargetProcessingProperties | undefined;
}

/**
 * @public
 */
export interface ListIntegrationResourcePropertiesResponse {
  /**
   * <p>A list of integration resource property meeting the filter criteria.</p>
   * @public
   */
  IntegrationResourcePropertyList?: IntegrationResourceProperty[] | undefined;

  /**
   * <p>This is the pagination token for the next page.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * <p>The names of all jobs in the account, or the jobs with the specified tags.</p>
   * @public
   */
  JobNames?: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMLTransformsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A <code>TransformFilterCriteria</code> used to filter the machine learning transforms.</p>
   * @public
   */
  Filter?: TransformFilterCriteria | undefined;

  /**
   * <p>A <code>TransformSortCriteria</code> used to sort the machine learning transforms.</p>
   * @public
   */
  Sort?: TransformSortCriteria | undefined;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMLTransformsResponse {
  /**
   * <p>The identifiers of all the machine learning transforms in the account, or the
   *         machine learning transforms with the specified tags.</p>
   * @public
   */
  TransformIds: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistriesInput {
  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure containing the details for a registry.</p>
 * @public
 */
export interface RegistryListItem {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>A description of the registry.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the registry.</p>
   * @public
   */
  Status?: RegistryStatus | undefined;

  /**
   * <p>The data the registry was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>The date the registry was updated.</p>
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * <p>An array of <code>RegistryDetailedListItem</code> objects containing minimal details of each registry.</p>
   * @public
   */
  Registries?: RegistryListItem[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasInput {
  /**
   * <p>A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   * @public
   */
  RegistryId?: RegistryId | undefined;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An object that contains minimal details for a schema.</p>
 * @public
 */
export interface SchemaListItem {
  /**
   * <p>the name of the registry where the schema resides.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>A description for the schema.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the schema.</p>
   * @public
   */
  SchemaStatus?: SchemaStatus | undefined;

  /**
   * <p>The date and time that a schema was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>The date and time that a schema was updated.</p>
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasResponse {
  /**
   * <p>An array of <code>SchemaListItem</code> objects containing details of each schema.</p>
   * @public
   */
  Schemas?: SchemaListItem[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An object containing the details about a schema version.</p>
 * @public
 */
export interface SchemaVersionListItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The unique identifier of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The status of the schema version.</p>
   * @public
   */
  Status?: SchemaVersionStatus | undefined;

  /**
   * <p>The date and time the schema version was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsResponse {
  /**
   * <p>An array of <code>SchemaVersionList</code> objects containing details of each schema version.</p>
   * @public
   */
  Schemas?: SchemaVersionListItem[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more result. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Tags belonging to the session. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The origin of the request. </p>
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * <p>Returns the ID of the session. </p>
   * @public
   */
  Ids?: string[] | undefined;

  /**
   * <p>Returns the session object. </p>
   * @public
   */
  Sessions?: Session[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more result. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStatementsRequest {
  /**
   * <p>The Session ID of the statements.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The origin of the request to list statements.</p>
   * @public
   */
  RequestOrigin?: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStatementsResponse {
  /**
   * <p>Returns the list of statements.</p>
   * @public
   */
  Statements?: Statement[] | undefined;

  /**
   * <p>A continuation token, if not all statements have yet been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTableOptimizerRunsRequest {
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
   * <p>The type of table optimizer.</p>
   * @public
   */
  Type: TableOptimizerType | undefined;

  /**
   * <p>The maximum number of optimizer runs to return on each call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTableOptimizerRunsResponse {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>A continuation token for paginating the returned list of optimizer runs, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of the optimizer runs associated with a table.</p>
   * @public
   */
  TableOptimizerRuns?: TableOptimizerRun[] | undefined;
}

/**
 * @public
 */
export interface ListTriggersRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The name of the job for which to retrieve triggers. The trigger that can start this job
   *       is returned. If there is no such trigger, all triggers are returned.</p>
   * @public
   */
  DependentJobName?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTriggersResponse {
  /**
   * <p>The names of all triggers in the account, or the triggers with the specified tags.</p>
   * @public
   */
  TriggerNames?: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsageProfilesRequest {
  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of usage profiles to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes an Glue usage profile.</p>
 * @public
 */
export interface UsageProfileDefinition {
  /**
   * <p>The name of the usage profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the usage profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time when the usage profile was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The date and time when the usage profile was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;
}

/**
 * @public
 */
export interface ListUsageProfilesResponse {
  /**
   * <p>A list of usage profile (<code>UsageProfileDefinition</code>) objects.</p>
   * @public
   */
  Profiles?: UsageProfileDefinition[] | undefined;

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * <p>List of names of workflows in the account.</p>
   * @public
   */
  Workflows?: string[] | undefined;

  /**
   * <p>A continuation token, if not all workflow names have been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIntegrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the integration.</p>
   * @public
   */
  IntegrationIdentifier: string | undefined;

  /**
   * <p>A description of the integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Selects source tables for the integration using Maxwell filter syntax.</p>
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * <p>The configuration settings for the integration. Currently, only the RefreshInterval can be modified. </p>
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;

  /**
   * <p>A unique name for an integration in Glue.</p>
   * @public
   */
  IntegrationName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIntegrationResponse {
  /**
   * <p>The ARN of the source for the integration.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The ARN of the target for the integration.</p>
   * @public
   */
  TargetArn: string | undefined;

  /**
   * <p>A unique name for an integration in Glue.</p>
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * <p>A description of the integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the integration.</p>
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * <p>The ARN of a KMS key used for encrypting the channel.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>An optional set of non-secret key–value pairs that contains additional contextual information for encryption.</p>
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>Metadata assigned to the resource consisting of a list of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The status of the integration being modified.</p>
   *          <p>The possible statuses are:</p>
   *          <ul>
   *             <li>
   *                <p>CREATING: The integration is being created.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE: The integration creation succeeds.</p>
   *             </li>
   *             <li>
   *                <p>MODIFYING: The integration is being modified.</p>
   *             </li>
   *             <li>
   *                <p>FAILED: The integration creation fails. </p>
   *             </li>
   *             <li>
   *                <p>DELETING: The integration is deleted.</p>
   *             </li>
   *             <li>
   *                <p>SYNCING: The integration is synchronizing.</p>
   *             </li>
   *             <li>
   *                <p>NEEDS_ATTENTION: The integration needs attention, such as synchronization.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: IntegrationStatus | undefined;

  /**
   * <p>The time when the integration was created, in UTC.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>A list of errors associated with the integration modification.</p>
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * <p>Selects source tables for the integration using Maxwell filter syntax.</p>
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * <p>The updated configuration settings for the integration.</p>
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;
}

/**
 * @public
 */
export interface PutDataCatalogEncryptionSettingsRequest {
  /**
   * <p>The ID of the Data Catalog to set the security configuration for. If none is provided, the
   *       Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The security configuration to set.</p>
   * @public
   */
  DataCatalogEncryptionSettings: DataCatalogEncryptionSettings | undefined;
}

/**
 * @public
 */
export interface PutDataCatalogEncryptionSettingsResponse {}

/**
 * @public
 */
export interface PutDataQualityProfileAnnotationRequest {
  /**
   * <p>The ID of the data quality monitoring profile to annotate.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The inclusion annotation value to apply to the profile.</p>
   * @public
   */
  InclusionAnnotation: InclusionAnnotationValue | undefined;
}

/**
 * <p>Left blank.</p>
 * @public
 */
export interface PutDataQualityProfileAnnotationResponse {}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>Contains the policy document to set, in JSON format.</p>
   * @public
   */
  PolicyInJson: string | undefined;

  /**
   * <p>Do not use. For internal use only.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The hash value returned when the previous policy was set using
   *         <code>PutResourcePolicy</code>. Its purpose is to prevent concurrent modifications of a
   *       policy. Do not use this parameter if no previous policy has been set.</p>
   * @public
   */
  PolicyHashCondition?: string | undefined;

  /**
   * <p>A value of <code>MUST_EXIST</code> is used to update a policy. A value of
   *         <code>NOT_EXIST</code> is used to create a new policy. If a value of <code>NONE</code> or a
   *       null value is used, the call does not depend on the existence of a policy.</p>
   * @public
   */
  PolicyExistsCondition?: ExistCondition | undefined;

  /**
   * <p>If <code>'TRUE'</code>, indicates that you are using both methods to grant cross-account
   *       access to Data Catalog resources:</p>
   *          <ul>
   *             <li>
   *                <p>By directly updating the resource policy with <code>PutResourePolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>By using the <b>Grant permissions</b> command on the Amazon Web Services Management Console.</p>
   *             </li>
   *          </ul>
   *          <p>Must be set to <code>'TRUE'</code> if you have already used the Management Console to
   *       grant cross-account access, otherwise the call fails. Default is 'FALSE'.</p>
   * @public
   */
  EnableHybrid?: EnableHybridValues | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>A hash of the policy that has just been set. This must
   *       be included in a subsequent call that overwrites or updates
   *       this policy.</p>
   * @public
   */
  PolicyHash?: string | undefined;
}

/**
 * <p>A structure containing a key value pair for metadata.</p>
 * @public
 */
export interface MetadataKeyValuePair {
  /**
   * <p>A metadata key.</p>
   * @public
   */
  MetadataKey?: string | undefined;

  /**
   * <p>A metadata key’s corresponding value.</p>
   * @public
   */
  MetadataValue?: string | undefined;
}

/**
 * @public
 */
export interface PutSchemaVersionMetadataInput {
  /**
   * <p>The unique ID for the schema.</p>
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The metadata key's corresponding value.</p>
   * @public
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

/**
 * @public
 */
export interface PutSchemaVersionMetadataResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name for the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The name for the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The latest version of the schema.</p>
   * @public
   */
  LatestVersion?: boolean | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The metadata key.</p>
   * @public
   */
  MetadataKey?: string | undefined;

  /**
   * <p>The value of the metadata key.</p>
   * @public
   */
  MetadataValue?: string | undefined;
}

/**
 * @public
 */
export interface PutWorkflowRunPropertiesRequest {
  /**
   * <p>Name of the workflow which was run.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run for which the run properties should be updated.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>The properties to put for the specified run.</p>
   *          <p>Run properties may be logged. Do not pass plaintext secrets as properties. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to use them within the workflow run.</p>
   * @public
   */
  RunProperties: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutWorkflowRunPropertiesResponse {}

/**
 * @public
 */
export interface QuerySchemaVersionMetadataInput {
  /**
   * <p>A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>Search key-value pairs for metadata, if they are not provided all the metadata information will be fetched.</p>
   * @public
   */
  MetadataList?: MetadataKeyValuePair[] | undefined;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure containing other metadata for a schema version belonging to the same metadata key.</p>
 * @public
 */
export interface OtherMetadataValueListItem {
  /**
   * <p>The metadata key’s corresponding value for the other metadata belonging to the same metadata key.</p>
   * @public
   */
  MetadataValue?: string | undefined;

  /**
   * <p>The time at which the entry was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * <p>A structure containing metadata information for a schema version.</p>
 * @public
 */
export interface MetadataInfo {
  /**
   * <p>The metadata key’s corresponding value.</p>
   * @public
   */
  MetadataValue?: string | undefined;

  /**
   * <p>The time at which the entry was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>Other metadata belonging to the same metadata key.</p>
   * @public
   */
  OtherMetadataValueList?: OtherMetadataValueListItem[] | undefined;
}

/**
 * @public
 */
export interface QuerySchemaVersionMetadataResponse {
  /**
   * <p>A map of a metadata key and associated values.</p>
   * @public
   */
  MetadataInfoMap?: Record<string, MetadataInfo> | undefined;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterSchemaVersionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>The schema definition using the <code>DataFormat</code> setting for the <code>SchemaName</code>.</p>
   * @public
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface RegisterSchemaVersionResponse {
  /**
   * <p>The unique ID that represents the version of this schema.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The version of this schema (for sync flow only, in case this is the first version).</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The status of the schema version.</p>
   * @public
   */
  Status?: SchemaVersionStatus | undefined;
}

/**
 * @public
 */
export interface RemoveSchemaVersionMetadataInput {
  /**
   * <p>A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The value of the metadata key.</p>
   * @public
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

/**
 * @public
 */
export interface RemoveSchemaVersionMetadataResponse {
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
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The latest version of the schema.</p>
   * @public
   */
  LatestVersion?: boolean | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The version ID for the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The metadata key.</p>
   * @public
   */
  MetadataKey?: string | undefined;

  /**
   * <p>The value of the metadata key.</p>
   * @public
   */
  MetadataValue?: string | undefined;
}

/**
 * @public
 */
export interface ResetJobBookmarkRequest {
  /**
   * <p>The name of the job in question.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The unique run identifier associated with this job run.</p>
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface ResetJobBookmarkResponse {
  /**
   * <p>The reset bookmark entry.</p>
   * @public
   */
  JobBookmarkEntry?: JobBookmarkEntry | undefined;
}

/**
 * @public
 */
export interface ResumeWorkflowRunRequest {
  /**
   * <p>The name of the workflow to resume.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run to resume.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>A list of the node IDs for the nodes you want to restart. The nodes that are to be restarted must have a run attempt in the original run.</p>
   * @public
   */
  NodeIds: string[] | undefined;
}

/**
 * @public
 */
export interface ResumeWorkflowRunResponse {
  /**
   * <p>The new ID assigned to the resumed workflow run. Each resume of a workflow run will have a new run ID.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>A list of the node IDs for the nodes that were actually restarted.</p>
   * @public
   */
  NodeIds?: string[] | undefined;
}

/**
 * @public
 */
export interface RunStatementRequest {
  /**
   * <p>The Session Id of the statement to be run.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The statement code to be run.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The origin of the request.</p>
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface RunStatementResponse {
  /**
   * <p>Returns the Id of the statement that was run.</p>
   * @public
   */
  Id?: number | undefined;
}

/**
 * <p>Defines a property predicate.</p>
 * @public
 */
export interface PropertyPredicate {
  /**
   * <p>The key of the property.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value of the property.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The comparator used to compare this property to others.</p>
   * @public
   */
  Comparator?: Comparator | undefined;
}

/**
 * <p>Specifies a field to sort by and a sort order.</p>
 * @public
 */
export interface SortCriterion {
  /**
   * <p>The name of the field on which to sort.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>An ascending or descending sort.</p>
   * @public
   */
  Sort?: Sort | undefined;
}

/**
 * @public
 */
export interface SearchTablesRequest {
  /**
   * <p>A unique identifier, consisting of <code>
   *                <i>account_id</i>
   *             </code>.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of key-value pairs, and a comparator used to filter the search results. Returns all entities matching the predicate.</p>
   *          <p>The <code>Comparator</code> member of the <code>PropertyPredicate</code> struct is used only for time fields, and can be omitted for other field types. Also, when comparing string values, such as when <code>Key=Name</code>, a fuzzy match algorithm is used. The <code>Key</code> field (for example, the value of the <code>Name</code> field) is split on certain punctuation characters, for example, -, :, #, etc. into tokens. Then each token is exact-match compared with the <code>Value</code> member of <code>PropertyPredicate</code>. For example, if <code>Key=Name</code> and <code>Value=link</code>, tables named <code>customer-link</code> and <code>xx-link-yy</code> are returned, but <code>xxlinkyy</code> is not returned.</p>
   * @public
   */
  Filters?: PropertyPredicate[] | undefined;

  /**
   * <p>A string used for a text search.</p>
   *          <p>Specifying a value in quotes filters based on an exact match to the value.</p>
   * @public
   */
  SearchText?: string | undefined;

  /**
   * <p>A list of criteria for sorting the results by a field name, in an ascending or descending order.</p>
   * @public
   */
  SortCriteria?: SortCriterion[] | undefined;

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Allows you to specify that you want to search the tables shared with your account. The allowable values are <code>FOREIGN</code> or <code>ALL</code>. </p>
   *          <ul>
   *             <li>
   *                <p>If set to <code>FOREIGN</code>, will search the tables shared with your account. </p>
   *             </li>
   *             <li>
   *                <p>If set to <code>ALL</code>, will search the tables shared with your account, as well as the tables in yor local account. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceShareType?: ResourceShareType | undefined;

  /**
   * <p>Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.</p>
   * @public
   */
  IncludeStatusDetails?: boolean | undefined;
}

/**
 * @public
 */
export interface StartBlueprintRunRequest {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  BlueprintName: string | undefined;

  /**
   * <p>Specifies the parameters as a <code>BlueprintParameters</code> object.</p>
   * @public
   */
  Parameters?: string | undefined;

  /**
   * <p>Specifies the IAM role used to create the workflow.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface StartBlueprintRunResponse {
  /**
   * <p>The run ID for this blueprint run.</p>
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table to generate statistics.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A list of the column names to generate statistics. If none is supplied, all column names for the table will be used by default.</p>
   * @public
   */
  ColumnNameList?: string[] | undefined;

  /**
   * <p>The IAM role that the service assumes to generate statistics.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The percentage of rows used to generate statistics. If none is supplied, the entire table will be used to generate stats.</p>
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * <p>The ID of the Data Catalog where the table reside. If none is supplied, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogID?: string | undefined;

  /**
   * <p>Name of the security configuration that is used to encrypt CloudWatch logs for the column stats task run.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunResponse {
  /**
   * <p>The identifier for the column statistics task run.</p>
   * @public
   */
  ColumnStatisticsTaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunScheduleRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to start a column statistic task run schedule.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunScheduleResponse {}

/**
 * @public
 */
export interface StartCrawlerRequest {
  /**
   * <p>Name of the crawler to start.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartCrawlerResponse {}

/**
 * @public
 */
export interface StartCrawlerScheduleRequest {
  /**
   * <p>Name of the crawler to schedule.</p>
   * @public
   */
  CrawlerName: string | undefined;
}

/**
 * @public
 */
export interface StartCrawlerScheduleResponse {}

/**
 * <p>The request of the Data Quality rule recommendation request.</p>
 * @public
 */
export interface StartDataQualityRuleRecommendationRunRequest {
  /**
   * <p>The data source (Glue table) associated with this run.</p>
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>A name for the ruleset.</p>
   * @public
   */
  CreatedRulesetName?: string | undefined;

  /**
   * <p>The name of the security configuration created with the data quality encryption option.</p>
   * @public
   */
  DataQualitySecurityConfiguration?: string | undefined;

  /**
   * <p>Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDataQualityRuleRecommendationRunResponse {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface StartDataQualityRulesetEvaluationRunRequest {
  /**
   * <p>The data source (Glue table) associated with this run.</p>
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Additional run options you can specify for an evaluation run.</p>
   * @public
   */
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions | undefined;

  /**
   * <p>A list of ruleset names.</p>
   * @public
   */
  RulesetNames: string[] | undefined;

  /**
   * <p>A map of reference strings to additional data sources you can specify for an evaluation run.</p>
   * @public
   */
  AdditionalDataSources?: Record<string, DataSource> | undefined;
}

/**
 * @public
 */
export interface StartDataQualityRulesetEvaluationRunResponse {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface StartExportLabelsTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon S3 path where you export the labels.</p>
   * @public
   */
  OutputS3Path: string | undefined;
}

/**
 * @public
 */
export interface StartExportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   * @public
   */
  TaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartImportLabelsTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you import the
   *       labels.</p>
   * @public
   */
  InputS3Path: string | undefined;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   * @public
   */
  ReplaceAllLabels?: boolean | undefined;
}

/**
 * @public
 */
export interface StartImportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   * @public
   */
  TaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * <p>The name of the job definition to use.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>Specifies whether job run queuing is enabled for the job run.</p>
   *          <p>A value of true means job run queuing is enabled for the job run. If false or not populated, the job run will not be considered for queueing.</p>
   * @public
   */
  JobRunQueuingEnabled?: boolean | undefined;

  /**
   * <p>The ID of a previous <code>JobRun</code> to retry.</p>
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * <p>The job arguments associated with this run. For this job run, they replace the default
   *       arguments set in the job definition itself.</p>
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
  Arguments?: Record<string, string> | undefined;

  /**
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) to allocate to this JobRun.
   *       You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *         pricing page</a>.</p>
   *
   * @deprecated This property is deprecated, use MaxCapacity instead.
   * @public
   */
  AllocatedCapacity?: number | undefined;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. This value overrides the timeout value set in the parent job. </p>
   *          <p>Jobs must have timeout values less than 7 days or 10080 minutes. Otherwise, the jobs will throw an exception.</p>
   *          <p>When the value is left blank, the timeout is defaulted to 2880 minutes.</p>
   *          <p>Any existing Glue jobs that had a timeout value greater than 7 days will be defaulted to 7 days. For instance if you have specified a timeout of 20 days for a batch job, it will be stopped on the 7th day.</p>
   *          <p>For streaming jobs, if you have set up a maintenance window, it will be restarted during the maintenance window after 7 days.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of
   *       Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is
   *       a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB
   *       of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">
   *         Glue pricing page</a>.</p>
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
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   * @public
   */
  NotificationProperty?: NotificationProperty | undefined;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *           G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 94GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 138GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.4X</code> worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.8X</code> worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the <code>G.4X</code> worker type.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk, and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 or later streaming jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk, and provides up to 8 Ray workers based on the autoscaler.</p>
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
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   * @public
   */
  ExecutionClass?: ExecutionClass | undefined;

  /**
   * <p>This inline session policy to the StartJobRun API allows you to dynamically restrict the permissions of the specified
   *       execution role for the scope of the job, without requiring the creation of additional IAM roles.</p>
   * @public
   */
  ExecutionRoleSessionPolicy?: string | undefined;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * <p>The ID assigned to this job run.</p>
   * @public
   */
  JobRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartMLEvaluationTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;
}

/**
 * @public
 */
export interface StartMLEvaluationTaskRunResponse {
  /**
   * <p>The unique identifier associated with this run.</p>
   * @public
   */
  TaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartMLLabelingSetGenerationTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you generate the labeling
   *       set.</p>
   * @public
   */
  OutputS3Path: string | undefined;
}

/**
 * @public
 */
export interface StartMLLabelingSetGenerationTaskRunResponse {
  /**
   * <p>The unique run identifier that is associated with this task run.</p>
   * @public
   */
  TaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartTriggerRequest {
  /**
   * <p>The name of the trigger to start.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartTriggerResponse {
  /**
   * <p>The name of the trigger that was started.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunRequest {
  /**
   * <p>The name of the workflow to start.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The workflow run properties for the new workflow run.</p>
   *          <p>Run properties may be logged. Do not pass plaintext secrets as properties. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to use them within the workflow run.</p>
   * @public
   */
  RunProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunResponse {
  /**
   * <p>An Id for the new run.</p>
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface StopColumnStatisticsTaskRunRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface StopColumnStatisticsTaskRunResponse {}

/**
 * @public
 */
export interface StopColumnStatisticsTaskRunScheduleRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to stop a column statistic task run schedule.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface StopColumnStatisticsTaskRunScheduleResponse {}

/**
 * @public
 */
export interface StopCrawlerRequest {
  /**
   * <p>Name of the crawler to stop.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopCrawlerResponse {}

/**
 * @public
 */
export interface StopCrawlerScheduleRequest {
  /**
   * <p>Name of the crawler whose schedule state to set.</p>
   * @public
   */
  CrawlerName: string | undefined;
}

/**
 * @public
 */
export interface StopCrawlerScheduleResponse {}

/**
 * @public
 */
export interface StopSessionRequest {
  /**
   * <p>The ID of the session to be stopped.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The origin of the request.</p>
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface StopSessionResponse {
  /**
   * <p>Returns the Id of the stopped session.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface StopTriggerRequest {
  /**
   * <p>The name of the trigger to stop.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopTriggerResponse {
  /**
   * <p>The name of the trigger that was stopped.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface StopWorkflowRunRequest {
  /**
   * <p>The name of the workflow to stop.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run to stop.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface StopWorkflowRunResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the Glue resource to which to add the tags. For more
   *       information about Glue resource ARNs, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html#aws-glue-api-regex-aws-glue-arn-id">Glue ARN string pattern</a>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to add to this resource.</p>
   * @public
   */
  TagsToAdd: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>A structure that is used to specify testing a connection to a service.</p>
 * @public
 */
export interface TestConnectionInput {
  /**
   * <p>The type of connection to test. This operation is only available for the <code>JDBC</code> or <code>SALESFORCE</code> connection types.</p>
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * <p>The key-value pairs that define parameters for the connection.</p>
   *          <p>JDBC connections use the following connection properties:</p>
   *          <ul>
   *             <li>
   *                <p>Required: All of (<code>HOST</code>, <code>PORT</code>, <code>JDBC_ENGINE</code>) or <code>JDBC_CONNECTION_URL</code>.</p>
   *             </li>
   *             <li>
   *                <p>Required: All of (<code>USERNAME</code>, <code>PASSWORD</code>) or <code>SECRET_ID</code>.</p>
   *             </li>
   *             <li>
   *                <p>Optional: <code>JDBC_ENFORCE_SSL</code>, <code>CUSTOM_JDBC_CERT</code>, <code>CUSTOM_JDBC_CERT_STRING</code>, <code>SKIP_CUSTOM_JDBC_CERT_VALIDATION</code>. These parameters are used to configure SSL with JDBC.</p>
   *             </li>
   *          </ul>
   *          <p>SALESFORCE connections require the <code>AuthenticationConfiguration</code> member to be configured.</p>
   * @public
   */
  ConnectionProperties: Partial<Record<ConnectionPropertyKey, string>> | undefined;

  /**
   * <p>A structure containing the authentication configuration in the TestConnection request. Required for a connection to Salesforce using OAuth authentication.</p>
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfigurationInput | undefined;
}

/**
 * @public
 */
export interface TestConnectionRequest {
  /**
   * <p>Optional. The name of the connection to test. If only name is provided, the operation will get the connection and use that for testing.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The catalog ID where the connection resides.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A structure that is used to specify testing a connection to a service.</p>
   * @public
   */
  TestConnectionInput?: TestConnectionInput | undefined;
}

/**
 * @public
 */
export interface TestConnectionResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove the tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to remove from this resource.</p>
   * @public
   */
  TagsToRemove: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateBlueprintRequest {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the blueprint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is published.</p>
   * @public
   */
  BlueprintLocation: string | undefined;
}

/**
 * @public
 */
export interface UpdateBlueprintResponse {
  /**
   * <p>Returns the name of the blueprint that was updated.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCatalogRequest {
  /**
   * <p>The ID of the catalog.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>A <code>CatalogInput</code> object specifying the new properties of an existing catalog.</p>
   * @public
   */
  CatalogInput: CatalogInput | undefined;
}

/**
 * @public
 */
export interface UpdateCatalogResponse {}

/**
 * <p>Specifies a custom CSV classifier to be updated.</p>
 * @public
 */
export interface UpdateCsvClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   * @public
   */
  QuoteSymbol?: string | undefined;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   * @public
   */
  ContainsHeader?: CsvHeaderOption | undefined;

  /**
   * <p>A list of strings representing column names.</p>
   * @public
   */
  Header?: string[] | undefined;

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   * @public
   */
  DisableValueTrimming?: boolean | undefined;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   * @public
   */
  AllowSingleColumn?: boolean | undefined;

  /**
   * <p>Specifies the configuration of custom datatypes.</p>
   * @public
   */
  CustomDatatypeConfigured?: boolean | undefined;

  /**
   * <p>Specifies a list of supported custom datatypes.</p>
   * @public
   */
  CustomDatatypes?: string[] | undefined;

  /**
   * <p>Sets the SerDe for processing CSV in the classifier, which will be applied in the Data Catalog. Valid values are <code>OpenCSVSerDe</code>, <code>LazySimpleSerDe</code>, and <code>None</code>. You can specify the <code>None</code> value when you want the crawler to do the detection.</p>
   * @public
   */
  Serde?: CsvSerdeOption | undefined;
}

/**
 * <p>Specifies a grok classifier to update when passed to
 *       <code>UpdateClassifier</code>.</p>
 * @public
 */
export interface UpdateGrokClassifierRequest {
  /**
   * <p>The name of the <code>GrokClassifier</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs,
   *       Amazon CloudWatch Logs, and so on.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>The grok pattern used by this classifier.</p>
   * @public
   */
  GrokPattern?: string | undefined;

  /**
   * <p>Optional custom grok patterns used by this classifier.</p>
   * @public
   */
  CustomPatterns?: string | undefined;
}

/**
 * <p>Specifies a JSON classifier to be updated.</p>
 * @public
 */
export interface UpdateJsonClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   * @public
   */
  JsonPath?: string | undefined;
}

/**
 * <p>Specifies an XML classifier to be updated.</p>
 * @public
 */
export interface UpdateXMLClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This cannot identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   * @public
   */
  RowTag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClassifierRequest {
  /**
   * <p>A <code>GrokClassifier</code> object with updated fields.</p>
   * @public
   */
  GrokClassifier?: UpdateGrokClassifierRequest | undefined;

  /**
   * <p>An <code>XMLClassifier</code> object with updated fields.</p>
   * @public
   */
  XMLClassifier?: UpdateXMLClassifierRequest | undefined;

  /**
   * <p>A <code>JsonClassifier</code> object with updated fields.</p>
   * @public
   */
  JsonClassifier?: UpdateJsonClassifierRequest | undefined;

  /**
   * <p>A <code>CsvClassifier</code> object with updated fields.</p>
   * @public
   */
  CsvClassifier?: UpdateCsvClassifierRequest | undefined;
}

/**
 * @public
 */
export interface UpdateClassifierResponse {}

/**
 * @public
 */
export interface UpdateColumnStatisticsForPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A list of partition values identifying the partition.</p>
   * @public
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>A list of the column statistics.</p>
   * @public
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

/**
 * <p>Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.</p>
 * @public
 */
export interface ColumnStatisticsError {
  /**
   * <p>The <code>ColumnStatistics</code> of the column.</p>
   * @public
   */
  ColumnStatistics?: ColumnStatistics | undefined;

  /**
   * <p>An error message with the reason for the failure of an operation.</p>
   * @public
   */
  Error?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForPartitionResponse {
  /**
   * <p>Error occurred during updating column statistics data.</p>
   * @public
   */
  Errors?: ColumnStatisticsError[] | undefined;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForTableRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A list of the column statistics.</p>
   * @public
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForTableResponse {
  /**
   * <p>List of ColumnStatisticsErrors.</p>
   * @public
   */
  Errors?: ColumnStatisticsError[] | undefined;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsTaskSettingsRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to generate column statistics.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The role used for running the column statistics.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>A schedule for running the column statistics, specified in CRON syntax.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>A list of column names for which to run statistics.</p>
   * @public
   */
  ColumnNameList?: string[] | undefined;

  /**
   * <p>The percentage of data to sample.</p>
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   * @public
   */
  CatalogID?: string | undefined;

  /**
   * <p>Name of the security configuration that is used to encrypt CloudWatch logs.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsTaskSettingsResponse {}

/**
 * @public
 */
export interface UpdateConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the connection definition to update.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A <code>ConnectionInput</code> object that redefines the connection
   *       in question.</p>
   * @public
   */
  ConnectionInput: ConnectionInput | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionResponse {}

/**
 * @public
 */
export interface UpdateCrawlerRequest {
  /**
   * <p>Name of the new crawler.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role that is used by the new crawler
   *       to access customer resources.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The Glue database where results are stored, such as:
   *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>A description of the new crawler.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of targets to crawl.</p>
   * @public
   */
  Targets?: CrawlerTargets | undefined;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>A list of custom classifiers that the user
   *       has registered. By default, all built-in classifiers are included in a crawl,
   *       but these custom classifiers always override the default classifiers
   *       for a given classification.</p>
   * @public
   */
  Classifiers?: string[] | undefined;

  /**
   * <p>The table prefix used for catalog tables that are created.</p>
   * @public
   */
  TablePrefix?: string | undefined;

  /**
   * <p>The policy for the crawler's update and deletion behavior.</p>
   * @public
   */
  SchemaChangePolicy?: SchemaChangePolicy | undefined;

  /**
   * <p>A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.</p>
   * @public
   */
  RecrawlPolicy?: RecrawlPolicy | undefined;

  /**
   * <p>Specifies data lineage configuration settings for the crawler.</p>
   * @public
   */
  LineageConfiguration?: LineageConfiguration | undefined;

  /**
   * <p>Specifies Lake Formation configuration settings for the crawler.</p>
   * @public
   */
  LakeFormationConfiguration?: LakeFormationConfiguration | undefined;

  /**
   * <p>Crawler configuration information. This versioned JSON string allows users
   *         to specify aspects of a crawler's behavior.
   *         For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Setting crawler configuration options</a>.</p>
   * @public
   */
  Configuration?: string | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   * @public
   */
  CrawlerSecurityConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCrawlerResponse {}

/**
 * @public
 */
export interface UpdateCrawlerScheduleRequest {
  /**
   * <p>The name of the crawler whose schedule to update.</p>
   * @public
   */
  CrawlerName: string | undefined;

  /**
   * <p>The updated <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   * @public
   */
  Schedule?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCrawlerScheduleResponse {}

/**
 * @public
 */
export interface UpdateDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which the metadata database resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database to update in the catalog. For Hive
   *       compatibility, this is folded to lowercase.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A <code>DatabaseInput</code> object specifying the new definition
   *       of the metadata database in the catalog.</p>
   * @public
   */
  DatabaseInput: DatabaseInput | undefined;
}

/**
 * @public
 */
export interface UpdateDatabaseResponse {}

/**
 * @public
 */
export interface UpdateDataQualityRulesetRequest {
  /**
   * <p>The name of the data quality ruleset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the ruleset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   * @public
   */
  Ruleset?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataQualityRulesetResponse {
  /**
   * <p>The name of the data quality ruleset.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the ruleset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   * @public
   */
  Ruleset?: string | undefined;
}

/**
 * <p>Custom libraries to be loaded into a development endpoint.</p>
 * @public
 */
export interface DevEndpointCustomLibraries {
  /**
   * <p>The paths to one or more Python libraries in an Amazon Simple Storage Service (Amazon S3)
   *       bucket that should be loaded in your <code>DevEndpoint</code>. Multiple values must be
   *       complete paths separated by a comma.</p>
   *          <note>
   *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
   *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
   *         analysis library, are not currently supported.</p>
   *          </note>
   * @public
   */
  ExtraPythonLibsS3Path?: string | undefined;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   *          <note>
   *             <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p>
   *          </note>
   * @public
   */
  ExtraJarsS3Path?: string | undefined;
}

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
 * <p>Request to update an existing Glue Identity Center configuration.</p>
 * @public
 */
export interface UpdateGlueIdentityCenterConfigurationRequest {
  /**
   * <p>A list of Identity Center scopes that define the updated permissions and access levels for the Glue configuration.</p>
   * @public
   */
  Scopes?: string[] | undefined;

  /**
   * <p>Specifies whether users can run background sessions when using Identity Center authentication with Glue services.</p>
   * @public
   */
  UserBackgroundSessionsEnabled?: boolean | undefined;
}

/**
 * <p>Response from updating an existing Glue Identity Center configuration.</p>
 * @public
 */
export interface UpdateGlueIdentityCenterConfigurationResponse {}

/**
 * @public
 */
export interface UpdateIntegrationResourcePropertyRequest {
  /**
   * <p>The connection ARN of the source, or the database ARN of the target.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The resource properties associated with the integration source.</p>
   * @public
   */
  SourceProcessingProperties?: SourceProcessingProperties | undefined;

  /**
   * <p>The resource properties associated with the integration target.</p>
   * @public
   */
  TargetProcessingProperties?: TargetProcessingProperties | undefined;
}

/**
 * @public
 */
export interface UpdateIntegrationResourcePropertyResponse {
  /**
   * <p>The connection ARN of the source, or the database ARN of the target.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The resource ARN created through this create API. The format is something like arn:aws:glue:<region>:<account_id>:integrationresourceproperty/*</p>
   * @public
   */
  ResourcePropertyArn?: string | undefined;

  /**
   * <p>The resource properties associated with the integration source.</p>
   * @public
   */
  SourceProcessingProperties?: SourceProcessingProperties | undefined;

  /**
   * <p>The resource properties associated with the integration target.</p>
   * @public
   */
  TargetProcessingProperties?: TargetProcessingProperties | undefined;
}

/**
 * @public
 */
export interface UpdateIntegrationTablePropertiesRequest {
  /**
   * <p>The connection ARN of the source, or the database ARN of the target.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The name of the table to be replicated.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A structure for the source table configuration.</p>
   * @public
   */
  SourceTableConfig?: SourceTableConfig | undefined;

  /**
   * <p>A structure for the target table configuration.</p>
   * @public
   */
  TargetTableConfig?: TargetTableConfig | undefined;
}

/**
 * @public
 */
export interface UpdateIntegrationTablePropertiesResponse {}

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
 * <p>Encryption key structure used for Iceberg table encryption. Contains the key ID, encrypted key metadata, optional reference to the encrypting key, and additional properties for the table's encryption scheme.</p>
 * @public
 */
export interface IcebergEncryptedKey {
  /**
   * <p>Unique identifier of the encryption key used for Iceberg table encryption. This ID is used to reference the key in table metadata and track which key was used to encrypt specific data.</p>
   * @public
   */
  KeyId: string | undefined;

  /**
   * <p>Encrypted key and metadata, base64 encoded. The format of encrypted key metadata is determined by the table's encryption scheme and can be a wrapped format specific to the table's KMS provider.</p>
   * @public
   */
  EncryptedKeyMetadata: string | undefined;

  /**
   * <p>Optional ID of the key used to encrypt or wrap the key metadata in Iceberg table encryption. This field references another encryption key that was used to encrypt the current key's metadata.</p>
   * @public
   */
  EncryptedById?: string | undefined;

  /**
   * <p>A string to string map of additional metadata used by the table's encryption scheme. These properties provide additional context and configuration for the encryption key implementation.</p>
   * @public
   */
  Properties?: Record<string, string> | undefined;
}

/**
 * <p>Defines a complete set of updates to be applied to an Iceberg table, including schema changes, partitioning modifications, sort order
 *       adjustments, location updates, and property changes.</p>
 * @public
 */
export interface IcebergTableUpdate {
  /**
   * <p>The updated schema definition for the Iceberg table, specifying any changes to field structure, data types, or schema metadata.</p>
   * @public
   */
  Schema: IcebergSchema | undefined;

  /**
   * <p>The updated partitioning specification that defines how the table data should be reorganized and partitioned.</p>
   * @public
   */
  PartitionSpec?: IcebergPartitionSpec | undefined;

  /**
   * <p>The updated sort order specification that defines how data should be ordered within partitions for optimal query performance.</p>
   * @public
   */
  SortOrder?: IcebergSortOrder | undefined;

  /**
   * <p>The updated S3 location where the Iceberg table data will be stored.</p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>Updated key-value pairs of table properties and configuration settings for the Iceberg table.</p>
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * <p>The type of update action to be performed on the Iceberg table. Defines the specific operation such as adding schema, setting current schema, adding partition spec, or managing encryption keys.</p>
   * @public
   */
  Action?: IcebergUpdateAction | undefined;

  /**
   * <p>Encryption key information associated with an Iceberg table update operation. Used when adding or removing encryption keys from the table metadata during table evolution.</p>
   * @public
   */
  EncryptionKey?: IcebergEncryptedKey | undefined;

  /**
   * <p>Identifier of the encryption key involved in an Iceberg table update operation. References the specific key being added to or removed from the table's encryption configuration.</p>
   * @public
   */
  KeyId?: string | undefined;
}

/**
 * <p>Contains the update operations to be applied to an existing Iceberg table inGlue Data Catalog, defining the new state of the table metadata.
 *     </p>
 * @public
 */
export interface UpdateIcebergTableInput {
  /**
   * <p>The list of table update operations that specify the changes to be made to the Iceberg table, including schema modifications, partition
   *       specifications, and table properties.</p>
   * @public
   */
  Updates: IcebergTableUpdate[] | undefined;
}

/**
 * <p>Input parameters specific to updating Apache Iceberg tables in Glue Data
 *       Catalog, containing the update operations to be applied to an existing Iceberg
 *       table.</p>
 * @public
 */
export interface UpdateIcebergInput {
  /**
   * <p>The specific update operations to be applied to the Iceberg table, containing a
   *       list of updates that define the new state of the table including schema,
   *       partitions, and properties.</p>
   * @public
   */
  UpdateIcebergTableInput: UpdateIcebergTableInput | undefined;
}

/**
 * <p>Input parameters for updating open table format tables in GlueData Catalog,
 *       serving as a wrapper for format-specific update operations such as Apache Iceberg.</p>
 * @public
 */
export interface UpdateOpenTableFormatInput {
  /**
   * <p>Apache Iceberg-specific update parameters that define the table modifications to
   *       be applied, including schema changes, partition specifications, and table
   *       properties.</p>
   * @public
   */
  UpdateIcebergInput?: UpdateIcebergInput | undefined;
}

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
   * <p>The unique identifier for the table within the specified database that will be
   *       created in the Glue Data Catalog.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An updated <code>TableInput</code> object to define the metadata table
   *       in the catalog.</p>
   * @public
   */
  TableInput?: TableInput | undefined;

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

  /**
   * <p>Input parameters for updating open table format tables in GlueData Catalog, serving as a wrapper for format-specific update operations such as Apache Iceberg.</p>
   * @public
   */
  UpdateOpenTableFormatInput?: UpdateOpenTableFormatInput | undefined;
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
   * <p>The type of table optimizer.</p>
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
