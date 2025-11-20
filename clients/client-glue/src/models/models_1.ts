// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import {
  AllowFullTableExternalDataAccessEnum,
  AuthenticationType,
  BlueprintRunState,
  CatalogEncryptionMode,
  CloudWatchEncryptionMode,
  ColumnStatisticsState,
  ColumnStatisticsType,
  Compatibility,
  ComputationType,
  ComputeEnvironment,
  ConnectionPropertyKey,
  ConnectionStatus,
  ConnectionType,
  CsvHeaderOption,
  CsvSerdeOption,
  DatabaseAttributes,
  DataFormat,
  DataOperation,
  DataQualityEncryptionMode,
  DataQualityModelStatus,
  DQCompositeRuleEvaluationMethod,
  ExecutionStatus,
  FieldDataType,
  FieldFilterOperator,
  FunctionType,
  IcebergNullOrder,
  IcebergSortDirection,
  IcebergStructTypeEnum,
  InclusionAnnotationValue,
  IntegrationStatus,
  JobBookmarksEncryptionMode,
  Language,
  MetadataOperation,
  MLUserDataEncryptionModeString,
  PrincipalType,
  RegistryStatus,
  ResourceShareType,
  ResourceType,
  S3EncryptionMode,
  ScheduleType,
  SchemaStatus,
  SchemaVersionStatus,
  SessionStatus,
  SettingSource,
  SortDirectionType,
  TableOptimizerType,
  TaskRunSortColumnType,
  TaskStatusType,
  TaskType,
  TransformStatusType,
  TransformType,
  TriggerType,
  UnnestSpec,
  ViewDialect,
  WorkerType,
} from "./enums";

import {
  Action,
  AuthConfiguration,
  AuthenticationConfiguration,
  Blueprint,
  Column,
  ConnectionsList,
  Crawler,
  DatabaseIdentifier,
  DataQualityAggregatedMetrics,
  DataQualityAnalyzerResult,
  DataQualityObservation,
  DataQualityRuleResult,
  DataQualityTargetTable,
  DataSource,
  DevEndpoint,
  ErrorDetail,
  EventBatchingCondition,
  FederatedCatalog,
  FederatedDatabase,
  GlueTable,
  JobRun,
  PartitionInput,
  PhysicalConnectionRequirements,
  Predicate,
  PrincipalPermissions,
  Property,
  Schedule,
  SchemaId,
  StorageDescriptor,
  TableOptimizerConfiguration,
  TargetRedshiftCatalog,
} from "./models_0";

/**
 * @public
 */
export interface CreateDataQualityRulesetResponse {
  /**
   * <p>A unique name for the data quality ruleset.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateDevEndpointRequest {
  /**
   * <p>The name to be assigned to the new <code>DevEndpoint</code>.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The IAM role for the <code>DevEndpoint</code>.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Security group IDs for the security groups to be used by the new
   *       <code>DevEndpoint</code>.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The subnet ID for the new <code>DevEndpoint</code> to use.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
   *       attribute is provided for backward compatibility because the recommended attribute to use is
   *       public keys.</p>
   * @public
   */
  PublicKey?: string | undefined;

  /**
   * <p>A list of public keys to be used by the development endpoints for authentication. The use
   *       of this attribute is preferred over a single public key because the public keys allow you to
   *       have a different private key per client.</p>
   *          <note>
   *             <p>If you previously created an endpoint with a public key, you must remove that key to be able
   *         to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API with the public
   *         key content in the <code>deletePublicKeys</code> attribute, and the list of new keys in the
   *           <code>addPublicKeys</code> attribute.</p>
   *          </note>
   * @public
   */
  PublicKeys?: string[] | undefined;

  /**
   * <p>The number of Glue Data Processing Units (DPUs) to allocate to this
   *         <code>DevEndpoint</code>.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *          </ul>
   *          <p>Known issue: when a development endpoint is created with the <code>G.2X</code>
   *             <code>WorkerType</code> configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. </p>
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *          <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in
   *       your <code>DevEndpoint</code>. Multiple values must be complete paths separated by a
   *       comma.</p>
   *          <note>
   *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
   *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
   *         analysis library, are not yet supported.</p>
   *          </note>
   * @public
   */
  ExtraPythonLibsS3Path?: string | undefined;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   * @public
   */
  ExtraJarsS3Path?: string | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *         <code>DevEndpoint</code>.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>The tags to use with this DevEndpoint. You may use tags to limit access to the DevEndpoint. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
   * @public
   */
  Arguments?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDevEndpointResponse {
  /**
   * <p>The name assigned to the new <code>DevEndpoint</code>.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>The current status of the new <code>DevEndpoint</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The security groups assigned to the new <code>DevEndpoint</code>.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The subnet ID assigned to the new <code>DevEndpoint</code>.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role assigned to the new
   *       <code>DevEndpoint</code>.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The address of the YARN endpoint used by this <code>DevEndpoint</code>.</p>
   * @public
   */
  YarnEndpointAddress?: string | undefined;

  /**
   * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
   * @public
   */
  ZeppelinRemoteSparkInterpreterPort?: number | undefined;

  /**
   * <p>The number of Glue Data Processing Units (DPUs) allocated to this DevEndpoint.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. May be a value of Standard, G.1X, or G.2X.</p>
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The Amazon Web Services Availability Zone where this <code>DevEndpoint</code> is located.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The paths to one or more Python libraries in an S3 bucket that will be loaded in your
   *         <code>DevEndpoint</code>.</p>
   * @public
   */
  ExtraPythonLibsS3Path?: string | undefined;

  /**
   * <p>Path to one or more Java <code>.jar</code> files in an S3 bucket that will be loaded in
   *       your <code>DevEndpoint</code>.</p>
   * @public
   */
  ExtraJarsS3Path?: string | undefined;

  /**
   * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure being used with this
   *         <code>DevEndpoint</code>.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The map of arguments used to configure this <code>DevEndpoint</code>.</p>
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
  Arguments?: Record<string, string> | undefined;
}

/**
 * <p>Request to create a new Glue Identity Center configuration.</p>
 * @public
 */
export interface CreateGlueIdentityCenterConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Identity Center instance to be associated with the Glue configuration.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>A list of Identity Center scopes that define the permissions and access levels for the Glue configuration.</p>
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
 * <p>Response from creating a new Glue Identity Center configuration.</p>
 * @public
 */
export interface CreateGlueIdentityCenterConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Identity Center application that was created for the Glue configuration.</p>
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * <p>Properties associated with the integration.</p>
 * @public
 */
export interface IntegrationConfig {
  /**
   * <p>Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur. This parameter provides flexibility to align
   *       the refresh rate with your specific data update patterns, system load considerations, and performance optimization goals. Time increment can be set from
   *     15 minutes to 8640 minutes (six days).</p>
   * @public
   */
  RefreshInterval?: string | undefined;

  /**
   * <p>
   *       A collection of key-value pairs that specify additional properties for the integration source. These properties provide configuration options that
   *       can be used to customize the behavior of the ODB source during data integration operations.
   *     </p>
   * @public
   */
  SourceProperties?: Record<string, string> | undefined;

  /**
   * <p>Enables continuous synchronization for on-demand data extractions from SaaS applications to Amazon Web Services data services like Amazon Redshift
   *       and Amazon S3.</p>
   * @public
   */
  ContinuousSync?: boolean | undefined;
}

/**
 * <p>The <code>Tag</code> object represents a label that you can assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define.</p>
 *          <p>For more information about tags, and controlling access to resources in Glue, see
 *                 <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> and <a href="https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html">Specifying Glue Resource
 *                 ARNs</a> in the developer guide.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key. The key is required when you create a tag on an object. The key is case-sensitive, and must not contain the prefix aws.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The tag value. The value is optional when you create a tag on an object. The value is case-sensitive, and must not contain the prefix aws.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationRequest {
  /**
   * <p>A unique name for an integration in Glue.</p>
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * <p>The ARN of the source resource for the integration.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The ARN of the target resource for the integration.</p>
   * @public
   */
  TargetArn: string | undefined;

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
   * <p>The ARN of a KMS key used for encrypting the channel.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>An optional set of non-secret key–value pairs that contains additional contextual information for encryption. This can only be provided if <code>KMSKeyId</code> is provided.</p>
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>Metadata assigned to the resource consisting of a list of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The configuration settings.</p>
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;
}

/**
 * <p>An error associated with a zero-ETL integration.</p>
 * @public
 */
export interface IntegrationError {
  /**
   * <p>The code associated with this error.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>A message describing the error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationResponse {
  /**
   * <p>The ARN of the source resource for the integration.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The ARN of the target resource for the integration.</p>
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
   * <p>The Amazon Resource Name (ARN) for the created integration.</p>
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
   * <p>The status of the integration being created.</p>
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
   * <p>A list of errors associated with the integration creation.</p>
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * <p>Selects source tables for the integration using Maxwell filter syntax.</p>
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * <p>The configuration settings.</p>
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;
}

/**
 * <p>The resource properties associated with the integration source.</p>
 * @public
 */
export interface SourceProcessingProperties {
  /**
   * <p>The IAM role to access the Glue connection.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * <p>The resource properties associated with the integration target.</p>
 * @public
 */
export interface TargetProcessingProperties {
  /**
   * <p>The IAM role to access the Glue database.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The ARN of the KMS key used for encryption.</p>
   * @public
   */
  KmsArn?: string | undefined;

  /**
   * <p>The Glue network connection to configure the Glue job running in the customer VPC.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The ARN of an Eventbridge event bus to receive the integration status notification.</p>
   * @public
   */
  EventBusArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationResourcePropertyRequest {
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

  /**
   * <p>Metadata assigned to the resource consisting of a list of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationResourcePropertyResponse {
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
 * <p>Properties used by the source leg to process data from the source.</p>
 * @public
 */
export interface SourceTableConfig {
  /**
   * <p>A list of fields used for column-level filtering. Currently unsupported.</p>
   * @public
   */
  Fields?: string[] | undefined;

  /**
   * <p>A condition clause used for row-level filtering. Currently unsupported.</p>
   * @public
   */
  FilterPredicate?: string | undefined;

  /**
   * <p>Provide the primary key set for this table. Currently supported specifically for SAP <code>EntityOf</code> entities upon request. Contact
   *       Amazon Web Services Support to make this feature available.</p>
   * @public
   */
  PrimaryKey?: string[] | undefined;

  /**
   * <p>Incremental pull timestamp-based field. Currently unsupported.</p>
   * @public
   */
  RecordUpdateField?: string | undefined;
}

/**
 * <p>A structure that describes how data is partitioned on the target.</p>
 * @public
 */
export interface IntegrationPartition {
  /**
   * <p>The field name used to partition data on the target. Avoid using columns that have unique values for each row (for example, `LastModifiedTimestamp`,
   *       `SystemModTimeStamp`) as the partition column. These columns are not suitable for partitioning because they create a large number of small partitions,
   *       which can lead to performance issues.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>Specifies the function used to partition data on the target. The accepted values for this parameter are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>identity</code> - Uses source values directly without transformation</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>year</code> - Extracts the year from timestamp values (e.g., 2023)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>month</code> - Extracts the month from timestamp values (e.g., 2023-01)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>day</code> - Extracts the day from timestamp values (e.g., 2023-01-15)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hour</code> - Extracts the hour from timestamp values (e.g., 2023-01-15-14)</p>
   *             </li>
   *          </ul>
   * @public
   */
  FunctionSpec?: string | undefined;

  /**
   * <p>Specifies the timestamp format of the source data. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>epoch_sec</code> - Unix epoch timestamp in seconds</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>epoch_milli</code> - Unix epoch timestamp in milliseconds</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iso</code> - ISO 8601 formatted timestamp</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *         Only specify <code>ConversionSpec</code> when using timestamp-based partition functions (year, month, day, or hour).
   *         Glue Zero-ETL uses this parameter to correctly transform source data into timestamp format before partitioning.
   *       </p>
   *             <p>
   *         Do not use high-cardinality columns with the <code>identity</code> partition function. High-cardinality columns include:
   *       </p>
   *             <ul>
   *                <li>
   *                   <p>Primary keys</p>
   *                </li>
   *                <li>
   *                   <p>Timestamp fields (such as <code>LastModifiedTimestamp</code>, <code>CreatedDate</code>)</p>
   *                </li>
   *                <li>
   *                   <p>System-generated timestamps</p>
   *                </li>
   *             </ul>
   *             <p>
   *         Using high-cardinality columns with identity partitioning creates many small partitions, which can significantly degrade ingestion performance.
   *       </p>
   *          </note>
   * @public
   */
  ConversionSpec?: string | undefined;
}

/**
 * <p>Properties used by the target leg to partition the data on the target.</p>
 * @public
 */
export interface TargetTableConfig {
  /**
   * <p>Specifies how nested objects are flattened to top-level elements. Valid values are: "TOPLEVEL", "FULL", or "NOUNNEST".</p>
   * @public
   */
  UnnestSpec?: UnnestSpec | undefined;

  /**
   * <p>Determines the file layout on the target.</p>
   * @public
   */
  PartitionSpec?: IntegrationPartition[] | undefined;

  /**
   * <p>The optional name of a target table.</p>
   * @public
   */
  TargetTableName?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationTablePropertiesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the target table for which to create integration table properties. Currently, this API only supports creating
   *       integration table properties for target tables, and the provided ARN should be the ARN of the target table in the Glue Data Catalog. Support for
   *       creating integration table properties for source connections (using the connection ARN) is not yet implemented and will be added in a future release.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The name of the table to be replicated.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A structure for the source table configuration. See the <code>SourceTableConfig</code> structure to see list of supported source properties.</p>
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
export interface CreateIntegrationTablePropertiesResponse {}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * <p>The unique name that was provided for this job definition.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The parameters to configure the find matches transform.</p>
 * @public
 */
export interface FindMatchesParameters {
  /**
   * <p>The name of a column that uniquely identifies rows in the source table. Used to help identify matching records.</p>
   * @public
   */
  PrimaryKeyColumnName?: string | undefined;

  /**
   * <p>The value selected when tuning your transform for a balance between precision and recall.
   *       A value of 0.5 means no preference; a value of 1.0 means a bias purely for precision, and a
   *       value of 0.0 means a bias for recall. Because this is a tradeoff, choosing values close to 1.0
   *       means very low recall, and choosing values close to 0.0 results in very low precision.</p>
   *          <p>The precision metric indicates how often your model is correct when it predicts a match. </p>
   *          <p>The recall metric indicates that for an actual match, how often your model predicts the
   *       match.</p>
   * @public
   */
  PrecisionRecallTradeoff?: number | undefined;

  /**
   * <p>The value that is selected when tuning your transform for a balance between accuracy and
   *       cost. A value of 0.5 means that the system balances accuracy and cost concerns. A value of 1.0
   *       means a bias purely for accuracy, which typically results in a higher cost, sometimes
   *       substantially higher. A value of 0.0 means a bias purely for cost, which results in a less
   *       accurate <code>FindMatches</code> transform, sometimes with unacceptable accuracy.</p>
   *          <p>Accuracy measures how well the transform finds true positives and true negatives. Increasing accuracy requires more machine resources and cost. But it also results in increased recall. </p>
   *          <p>Cost measures how many compute resources, and thus money, are consumed to run the
   *       transform.</p>
   * @public
   */
  AccuracyCostTradeoff?: number | undefined;

  /**
   * <p>The value to switch on or off to force the output to match the provided labels from users. If the value is <code>True</code>, the <code>find matches</code> transform forces the output to match the provided labels. The results override the normal conflation results. If the value is <code>False</code>, the <code>find matches</code> transform does not ensure all the labels provided are respected, and the results rely on the trained model.</p>
   *          <p>Note that setting this value to true may increase the conflation execution time.</p>
   * @public
   */
  EnforceProvidedLabels?: boolean | undefined;
}

/**
 * <p>The algorithm-specific parameters that are associated with the machine learning
 *       transform.</p>
 * @public
 */
export interface TransformParameters {
  /**
   * <p>The type of machine learning transform.</p>
   *          <p>For information about the types of machine learning transforms, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html">Creating Machine Learning Transforms</a>.</p>
   * @public
   */
  TransformType: TransformType | undefined;

  /**
   * <p>The parameters for the find matches algorithm.</p>
   * @public
   */
  FindMatchesParameters?: FindMatchesParameters | undefined;
}

/**
 * <p>The encryption-at-rest settings of the transform that apply to accessing user data.</p>
 * @public
 */
export interface MLUserDataEncryption {
  /**
   * <p>The encryption mode applied to user data. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>DISABLED: encryption is disabled</p>
   *             </li>
   *             <li>
   *                <p>SSEKMS: use of server-side encryption with Key Management Service (SSE-KMS) for user data stored in Amazon S3.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MlUserDataEncryptionMode: MLUserDataEncryptionModeString | undefined;

  /**
   * <p>The ID for the customer-provided KMS key.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
 *          <p>Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.</p>
 * @public
 */
export interface TransformEncryption {
  /**
   * <p>An <code>MLUserDataEncryption</code> object containing the encryption mode and customer-provided KMS key ID.</p>
   * @public
   */
  MlUserDataEncryption?: MLUserDataEncryption | undefined;

  /**
   * <p>The name of the security configuration.</p>
   * @public
   */
  TaskRunSecurityConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface CreateMLTransformRequest {
  /**
   * <p>The unique name that you give the transform when you create it.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the machine learning transform that is being defined. The default is an
   *       empty string.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   * @public
   */
  InputRecordTables: GlueTable[] | undefined;

  /**
   * <p>The algorithmic parameters that are specific to the transform type used. Conditionally
   *       dependent on the transform type.</p>
   * @public
   */
  Parameters: TransformParameters | undefined;

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
  Role: string | undefined;

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
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   *          <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The timeout of the task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * <p>The tags to use with this machine learning transform. You may use tags to limit access to the machine learning transform. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   * @public
   */
  TransformEncryption?: TransformEncryption | undefined;
}

/**
 * @public
 */
export interface CreateMLTransformResponse {
  /**
   * <p>A unique identifier that is generated for the transform.</p>
   * @public
   */
  TransformId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePartitionRequest {
  /**
   * <p>The Amazon Web Services account ID of the catalog in which the partition is to be created.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the metadata database in which the partition is
   *       to be created.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the metadata table in which the partition is to be created.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A <code>PartitionInput</code> structure defining the partition
   *       to be created.</p>
   * @public
   */
  PartitionInput: PartitionInput | undefined;
}

/**
 * @public
 */
export interface CreatePartitionResponse {}

/**
 * <p>A structure for a partition index.</p>
 * @public
 */
export interface PartitionIndex {
  /**
   * <p>The keys for the partition index.</p>
   * @public
   */
  Keys: string[] | undefined;

  /**
   * <p>The name of the partition index.</p>
   * @public
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface CreatePartitionIndexRequest {
  /**
   * <p>The catalog ID where the table resides.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Specifies the name of a database in which you want to create a partition index.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>Specifies the name of a table in which you want to create a partition index.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>Specifies a <code>PartitionIndex</code> structure to create a partition index in an existing table.</p>
   * @public
   */
  PartitionIndex: PartitionIndex | undefined;
}

/**
 * @public
 */
export interface CreatePartitionIndexResponse {}

/**
 * @public
 */
export interface CreateRegistryInput {
  /**
   * <p>Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.  No whitespace.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>A description of the registry. If description is not provided, there will not be any default value for this.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>A description of the registry.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags for the registry.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
 * @public
 */
export interface RegistryId {
  /**
   * <p>Name of the registry. Used only for lookup. One of <code>RegistryArn</code> or <code>RegistryName</code> has to be provided. </p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>Arn of the registry to be updated. One of <code>RegistryArn</code> or <code>RegistryName</code> has to be provided.</p>
   * @public
   */
  RegistryArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSchemaInput {
  /**
   * <p> This is a wrapper shape to contain the registry identity fields. If this is not provided, the default registry will be used. The ARN format for the same will be: <code>arn:aws:glue:us-east-2:<customer id>:registry/default-registry:random-5-letter-id</code>.</p>
   * @public
   */
  RegistryId?: RegistryId | undefined;

  /**
   * <p>Name of the schema to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark. No whitespace.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat: DataFormat | undefined;

  /**
   * <p>The compatibility mode of the schema. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>NONE</i>: No compatibility mode applies. You can use this choice in development scenarios or if you do not know the compatibility mode that you want to apply to schemas. Any new version added will be accepted without undergoing a compatibility check.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>DISABLED</i>: This compatibility choice prevents versioning for a particular schema. You can use this choice to prevent future versioning of a schema.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>BACKWARD</i>: This compatibility choice is recommended as it allows data receivers to read both the current and one previous schema version. This means that for instance, a new schema version cannot drop data fields or change the type of these fields, so they can't be read by readers using the previous version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>BACKWARD_ALL</i>: This compatibility choice allows data receivers to read both the current and all previous schema versions. You can use this choice when you need to delete fields or add optional fields, and check compatibility against all previous schema versions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FORWARD</i>: This compatibility choice allows data receivers to read both the current and one next schema version, but not necessarily later versions. You can use this choice when you need to add fields or delete optional fields, but only check compatibility against the last schema version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FORWARD_ALL</i>: This compatibility choice allows data receivers to read written by producers of any new registered schema. You can use this choice when you need to add fields or delete optional fields, and check compatibility against all previous schema versions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FULL</i>: This compatibility choice allows data receivers to read data written by producers using the previous or next version of the schema, but not necessarily earlier or later versions. You can use this choice when you need to add or remove optional fields, but only check compatibility against the last schema version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FULL_ALL</i>: This compatibility choice allows data receivers to read data written by producers using all previous schema versions. You can use this choice when you need to add or remove optional fields, and check compatibility against all previous schema versions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * <p>An optional description of the schema. If description is not provided, there will not be any automatic default value for this.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API. If specified, follows the Amazon Web Services tags-on-create pattern.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The schema definition using the <code>DataFormat</code> setting for <code>SchemaName</code>.</p>
   * @public
   */
  SchemaDefinition?: string | undefined;
}

/**
 * @public
 */
export interface CreateSchemaResponse {
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
   * <p>A description of the schema if specified when created.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat?: DataFormat | undefined;

  /**
   * <p>The schema compatibility mode.</p>
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
   * <p>The status of the schema. </p>
   * @public
   */
  SchemaStatus?: SchemaStatus | undefined;

  /**
   * <p>The tags for the schema.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The unique identifier of the first schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The status of the first schema version created.</p>
   * @public
   */
  SchemaVersionStatus?: SchemaVersionStatus | undefined;
}

/**
 * <p>Represents a directional edge in a directed acyclic graph (DAG).</p>
 * @public
 */
export interface CodeGenEdge {
  /**
   * <p>The ID of the node at which the edge starts.</p>
   * @public
   */
  Source: string | undefined;

  /**
   * <p>The ID of the node at which the edge ends.</p>
   * @public
   */
  Target: string | undefined;

  /**
   * <p>The target of the edge.</p>
   * @public
   */
  TargetParameter?: string | undefined;
}

/**
 * <p>An argument or property of a node.</p>
 * @public
 */
export interface CodeGenNodeArg {
  /**
   * <p>The name of the argument or property.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value of the argument or property.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>True if the value is used as a parameter.</p>
   * @public
   */
  Param?: boolean | undefined;
}

/**
 * <p>Represents a node in a directed acyclic graph (DAG)</p>
 * @public
 */
export interface CodeGenNode {
  /**
   * <p>A node identifier that is unique within the node's graph.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The type of node that this is.</p>
   * @public
   */
  NodeType: string | undefined;

  /**
   * <p>Properties of the node, in the form of name-value pairs.</p>
   * @public
   */
  Args: CodeGenNodeArg[] | undefined;

  /**
   * <p>The line number of the node.</p>
   * @public
   */
  LineNumber?: number | undefined;
}

/**
 * @public
 */
export interface CreateScriptRequest {
  /**
   * <p>A list of the nodes in the DAG.</p>
   * @public
   */
  DagNodes?: CodeGenNode[] | undefined;

  /**
   * <p>A list of the edges in the DAG.</p>
   * @public
   */
  DagEdges?: CodeGenEdge[] | undefined;

  /**
   * <p>The programming language of the resulting code from the DAG.</p>
   * @public
   */
  Language?: Language | undefined;
}

/**
 * @public
 */
export interface CreateScriptResponse {
  /**
   * <p>The Python script generated from the DAG.</p>
   * @public
   */
  PythonScript?: string | undefined;

  /**
   * <p>The Scala code generated from the DAG.</p>
   * @public
   */
  ScalaCode?: string | undefined;
}

/**
 * <p>Specifies how Amazon CloudWatch data should be encrypted.</p>
 * @public
 */
export interface CloudWatchEncryption {
  /**
   * <p>The encryption mode to use for CloudWatch data.</p>
   * @public
   */
  CloudWatchEncryptionMode?: CloudWatchEncryptionMode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p>Specifies how Data Quality assets in your account should be encrypted.</p>
 * @public
 */
export interface DataQualityEncryption {
  /**
   * <p>The encryption mode to use for encrypting Data Quality assets. These assets include data quality rulesets, results, statistics, anomaly detection models and observations.</p>
   *          <p>Valid values are <code>SSEKMS</code> for encryption using a customer-managed KMS key, or <code>DISABLED</code>.</p>
   * @public
   */
  DataQualityEncryptionMode?: DataQualityEncryptionMode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p>Specifies how job bookmark data should be encrypted.</p>
 * @public
 */
export interface JobBookmarksEncryption {
  /**
   * <p>The encryption mode to use for job bookmarks data.</p>
   * @public
   */
  JobBookmarksEncryptionMode?: JobBookmarksEncryptionMode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p>Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.</p>
 * @public
 */
export interface S3Encryption {
  /**
   * <p>The encryption mode to use for Amazon S3 data.</p>
   * @public
   */
  S3EncryptionMode?: S3EncryptionMode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p>Specifies an encryption configuration.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>The encryption configuration for Amazon Simple Storage Service (Amazon S3) data.</p>
   * @public
   */
  S3Encryption?: S3Encryption[] | undefined;

  /**
   * <p>The encryption configuration for Amazon CloudWatch.</p>
   * @public
   */
  CloudWatchEncryption?: CloudWatchEncryption | undefined;

  /**
   * <p>The encryption configuration for job bookmarks.</p>
   * @public
   */
  JobBookmarksEncryption?: JobBookmarksEncryption | undefined;

  /**
   * <p>The encryption configuration for Glue Data Quality assets.</p>
   * @public
   */
  DataQualityEncryption?: DataQualityEncryption | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationRequest {
  /**
   * <p>The name for the new security configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The encryption configuration for the new security configuration.</p>
   * @public
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationResponse {
  /**
   * <p>The name assigned to the new security configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time at which the new security configuration was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * <p>The <code>SessionCommand</code> that runs the job.</p>
 * @public
 */
export interface SessionCommand {
  /**
   * <p>Specifies the name of the SessionCommand. Can be 'glueetl' or 'gluestreaming'.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies the Python version. The Python version indicates the version supported for jobs of type Spark.</p>
   * @public
   */
  PythonVersion?: string | undefined;
}

/**
 * <p>Request to create a new session.</p>
 * @public
 */
export interface CreateSessionRequest {
  /**
   * <p>The ID of the session request. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The description of the session. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The IAM Role ARN </p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The <code>SessionCommand</code> that runs the job. </p>
   * @public
   */
  Command: SessionCommand | undefined;

  /**
   * <p>
   *         The number of minutes before session times out. Default for Spark ETL
   *         jobs is 48 hours (2880 minutes).
   *         Consult the documentation for other job types.
   *     </p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>
   *         The number of minutes when idle before session times out. Default for
   *         Spark ETL jobs is value of Timeout. Consult the documentation
   *         for other job types.
   *     </p>
   * @public
   */
  IdleTimeout?: number | undefined;

  /**
   * <p>A map array of key-value pairs. Max is 75 pairs. </p>
   * @public
   */
  DefaultArguments?: Record<string, string> | undefined;

  /**
   * <p>The number of connections to use for the session. </p>
   * @public
   */
  Connections?: ConnectionsList | undefined;

  /**
   * <p>The number of Glue data processing units (DPUs) that can be allocated when the job runs.
   *       A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory. </p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The number of workers of a defined <code>WorkerType</code> to use for the session. </p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *       G.1X, G.2X, G.4X, or G.8X for Spark jobs. Accepts the value Z.2X for Ray notebooks.</p>
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
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk, and provides up to 8 Ray workers based on the autoscaler.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * <p>The name of the SecurityConfiguration structure to be used with the session </p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>The Glue version determines the versions of Apache Spark and Python that Glue supports.
   *       The GlueVersion must be greater than 2.0. </p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The map of key value pairs (tags) belonging to the session.</p>
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
 * <p>The period in which a remote Spark runtime environment is running.</p>
 * @public
 */
export interface Session {
  /**
   * <p>The ID of the session.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The time and date when the session was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The session status. </p>
   * @public
   */
  Status?: SessionStatus | undefined;

  /**
   * <p>The error message displayed during the session.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The description of the session.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with the Session.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The command object.See SessionCommand.</p>
   * @public
   */
  Command?: SessionCommand | undefined;

  /**
   * <p>A map array of key-value pairs. Max is 75 pairs. </p>
   * @public
   */
  DefaultArguments?: Record<string, string> | undefined;

  /**
   * <p>The number of connections used for the session.</p>
   * @public
   */
  Connections?: ConnectionsList | undefined;

  /**
   * <p>The code execution progress of the session.</p>
   * @public
   */
  Progress?: number | undefined;

  /**
   * <p>The number of Glue data processing units (DPUs) that can be allocated when the job runs.
   *       A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory. </p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The name of the SecurityConfiguration structure to be used with the session.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>The Glue version determines the versions of Apache Spark and Python that Glue supports.
   *       The GlueVersion must be greater than 2.0.</p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The number of workers of a defined <code>WorkerType</code> to use for the session.</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The type of predefined worker that is allocated when a session runs. Accepts a value of <code>G.1X</code>, <code>G.2X</code>, <code>G.4X</code>, or <code>G.8X</code> for Spark sessions. Accepts the value <code>Z.2X</code> for Ray sessions.</p>
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * <p>The date and time that this session is completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The total time the session ran for.</p>
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * <p>The DPUs consumed by the session (formula: ExecutionTime * MaxCapacity).</p>
   * @public
   */
  DPUSeconds?: number | undefined;

  /**
   * <p>The number of minutes when idle before the session times out.</p>
   * @public
   */
  IdleTimeout?: number | undefined;

  /**
   * <p>The name of an Glue usage profile associated with the session.</p>
   * @public
   */
  ProfileName?: string | undefined;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * <p>Returns the session object in the response.</p>
   * @public
   */
  Session?: Session | undefined;
}

/**
 * <p>Defines a single partition field within an Iceberg partition specification, including the source field, transformation function, partition name,
 *       and unique identifier.</p>
 * @public
 */
export interface IcebergPartitionField {
  /**
   * <p>The identifier of the source field from the table schema that this partition field is based on.</p>
   * @public
   */
  SourceId: number | undefined;

  /**
   * <p>The transformation function applied to the source field to create the partition, such as identity, bucket, truncate, year, month, day, or hour.</p>
   * @public
   */
  Transform: string | undefined;

  /**
   * <p>The name of the partition field as it will appear in the partitioned table structure.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier assigned to this partition field within the Iceberg table's partition specification.</p>
   * @public
   */
  FieldId?: number | undefined;
}

/**
 * <p>Defines the partitioning specification for an Iceberg table, determining how table data will be organized and partitioned for optimal query performance.</p>
 * @public
 */
export interface IcebergPartitionSpec {
  /**
   * <p>The list of partition fields that define how the table data should be partitioned, including source fields and their transformations.</p>
   * @public
   */
  Fields: IcebergPartitionField[] | undefined;

  /**
   * <p>The unique identifier for this partition specification within the Iceberg table's metadata history.</p>
   * @public
   */
  SpecId?: number | undefined;
}

/**
 * <p>Defines a single field within an Iceberg table schema, including its identifier, name, data type, nullability, and documentation.</p>
 * @public
 */
export interface IcebergStructField {
  /**
   * <p>The unique identifier assigned to this field within the Iceberg table schema, used for schema evolution and field tracking.</p>
   * @public
   */
  Id: number | undefined;

  /**
   * <p>The name of the field as it appears in the table schema and query operations.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The data type definition for this field, specifying the structure and format of the data it contains.</p>
   * @public
   */
  Type: __DocumentType | undefined;

  /**
   * <p>Indicates whether this field is required (non-nullable) or optional (nullable) in the table schema.</p>
   * @public
   */
  Required: boolean | undefined;

  /**
   * <p>Optional documentation or description text that provides additional context about the purpose and usage of this field.</p>
   * @public
   */
  Doc?: string | undefined;
}

/**
 * <p>Defines the schema structure for an Iceberg table, including field definitions, data types, and schema metadata.</p>
 * @public
 */
export interface IcebergSchema {
  /**
   * <p>The unique identifier for this schema version within the Iceberg table's schema evolution history.</p>
   * @public
   */
  SchemaId?: number | undefined;

  /**
   * <p>The list of field identifiers that uniquely identify records in the table, used for row-level operations and deduplication.</p>
   * @public
   */
  IdentifierFieldIds?: number[] | undefined;

  /**
   * <p>The root type of the schema structure, typically "struct" for Iceberg table schemas.</p>
   * @public
   */
  Type?: IcebergStructTypeEnum | undefined;

  /**
   * <p>The list of field definitions that make up the table schema, including field names, types, and metadata.</p>
   * @public
   */
  Fields: IcebergStructField[] | undefined;
}

/**
 * <p>Defines a single field within an Iceberg sort order specification, including the source field, transformation, sort direction, and null value ordering.</p>
 * @public
 */
export interface IcebergSortField {
  /**
   * <p>The identifier of the source field from the table schema that this sort field is based on.</p>
   * @public
   */
  SourceId: number | undefined;

  /**
   * <p>The transformation function applied to the source field before sorting, such as identity, bucket, or truncate.</p>
   * @public
   */
  Transform: string | undefined;

  /**
   * <p>The sort direction for this field, either ascending or descending.</p>
   * @public
   */
  Direction: IcebergSortDirection | undefined;

  /**
   * <p>The ordering behavior for null values in this field, specifying whether nulls should appear first or last in the sort order.</p>
   * @public
   */
  NullOrder: IcebergNullOrder | undefined;
}

/**
 * <p>Defines the sort order specification for an Iceberg table, determining how data should be ordered within partitions to
 *       optimize query performance.</p>
 * @public
 */
export interface IcebergSortOrder {
  /**
   * <p>The unique identifier for this sort order specification within the Iceberg table's metadata.</p>
   * @public
   */
  OrderId: number | undefined;

  /**
   * <p>The list of fields and their sort directions that define the ordering criteria for the Iceberg table data.</p>
   * @public
   */
  Fields: IcebergSortField[] | undefined;
}

/**
 * <p>The configuration parameters required to create a new Iceberg table in the Glue Data Catalog,
 *       including table properties and metadata specifications.</p>
 * @public
 */
export interface CreateIcebergTableInput {
  /**
   * <p>The S3 location where the Iceberg table data will be stored.</p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>The schema definition that specifies the structure, field types, and metadata for the Iceberg table.</p>
   * @public
   */
  Schema: IcebergSchema | undefined;

  /**
   * <p>The partitioning specification that defines how the Iceberg table data will be organized and partitioned for optimal query performance.</p>
   * @public
   */
  PartitionSpec?: IcebergPartitionSpec | undefined;

  /**
   * <p>The sort order specification that defines how data should be ordered within each partition to optimize query performance.</p>
   * @public
   */
  WriteOrder?: IcebergSortOrder | undefined;

  /**
   * <p>Key-value pairs of additional table properties and configuration settings for the Iceberg table.</p>
   * @public
   */
  Properties?: Record<string, string> | undefined;
}

/**
 * <p>A structure that defines an Apache Iceberg metadata table to create in the catalog.</p>
 * @public
 */
export interface IcebergInput {
  /**
   * <p>A required metadata operation. Can only be set to <code>CREATE</code>.</p>
   * @public
   */
  MetadataOperation: MetadataOperation | undefined;

  /**
   * <p>The table version for the Iceberg table. Defaults to 2.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The configuration parameters required to create a new Iceberg table in the Glue Data Catalog, including table properties
   *       and metadata specifications.</p>
   * @public
   */
  CreateIcebergTableInput?: CreateIcebergTableInput | undefined;
}

/**
 * <p>A structure representing an open format table.</p>
 * @public
 */
export interface OpenTableFormatInput {
  /**
   * <p>Specifies an <code>IcebergInput</code> structure that defines an Apache Iceberg metadata table.</p>
   * @public
   */
  IcebergInput?: IcebergInput | undefined;
}

/**
 * <p>A structure that describes a target table for resource linking.</p>
 * @public
 */
export interface TableIdentifier {
  /**
   * <p>The ID of the Data Catalog in which the table resides.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database that contains the target table.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the target table.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Region of the target table.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>A structure containing details of a representation to update or create a Lake Formation view.</p>
 * @public
 */
export interface ViewRepresentationInput {
  /**
   * <p>A parameter that specifies the engine type of a specific representation.</p>
   * @public
   */
  Dialect?: ViewDialect | undefined;

  /**
   * <p>A parameter that specifies the version of the engine of a specific representation.</p>
   * @public
   */
  DialectVersion?: string | undefined;

  /**
   * <p>A string that represents the original SQL query that describes the view.</p>
   * @public
   */
  ViewOriginalText?: string | undefined;

  /**
   * <p>The name of the connection to be used to validate the specific representation of the view.</p>
   * @public
   */
  ValidationConnection?: string | undefined;

  /**
   * <p>A string that represents the SQL query that describes the view with expanded resource ARNs</p>
   * @public
   */
  ViewExpandedText?: string | undefined;
}

/**
 * <p>A structure containing details for creating or updating an Glue view.</p>
 * @public
 */
export interface ViewDefinitionInput {
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
   * <p>A list of structures that contains the dialect of the view, and the query that defines the view.</p>
   * @public
   */
  Representations?: ViewRepresentationInput[] | undefined;

  /**
   * <p>A list of base table ARNs that make up the view.</p>
   * @public
   */
  SubObjects?: string[] | undefined;
}

/**
 * <p>A structure used to define a table.</p>
 * @public
 */
export interface TableInput {
  /**
   * <p>The table name. For Hive compatibility, this is folded to
   *       lowercase when it is stored.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the table.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The table owner. Included for Apache Hive compatibility. Not used in the normal course of Glue operations.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The last time that the table was accessed.</p>
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
   * <p>A <code>TableIdentifier</code> structure that describes a target table for resource linking.</p>
   * @public
   */
  TargetTable?: TableIdentifier | undefined;

  /**
   * <p>A structure that contains all the information that defines the view, including the dialect or dialects for the view, and the query.</p>
   * @public
   */
  ViewDefinition?: ViewDefinitionInput | undefined;
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the <code>Table</code>.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The catalog database in which to create the new table. For Hive
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
   * <p>The <code>TableInput</code> object that defines the metadata table
   *       to create in the catalog.</p>
   * @public
   */
  TableInput?: TableInput | undefined;

  /**
   * <p>A list of partition indexes, <code>PartitionIndex</code> structures, to create in the table.</p>
   * @public
   */
  PartitionIndexes?: PartitionIndex[] | undefined;

  /**
   * <p>The ID of the transaction.</p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>Specifies an <code>OpenTableFormatInput</code> structure when creating an open format table.</p>
   * @public
   */
  OpenTableFormatInput?: OpenTableFormatInput | undefined;
}

/**
 * @public
 */
export interface CreateTableResponse {}

/**
 * @public
 */
export interface CreateTableOptimizerRequest {
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
export interface CreateTableOptimizerResponse {}

/**
 * @public
 */
export interface CreateTriggerRequest {
  /**
   * <p>The name of the trigger.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the workflow associated with the trigger.</p>
   * @public
   */
  WorkflowName?: string | undefined;

  /**
   * <p>The type of the new trigger.</p>
   * @public
   */
  Type: TriggerType | undefined;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   *          <p>This field is required when the trigger type is SCHEDULED.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>A predicate to specify when the new trigger should fire.</p>
   *          <p>This field is required when the trigger type is <code>CONDITIONAL</code>.</p>
   * @public
   */
  Predicate?: Predicate | undefined;

  /**
   * <p>The actions initiated by this trigger when it fires.</p>
   * @public
   */
  Actions: Action[] | undefined;

  /**
   * <p>A description of the new trigger.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Set to <code>true</code> to start <code>SCHEDULED</code> and <code>CONDITIONAL</code>
   *       triggers when created. True is not supported for <code>ON_DEMAND</code> triggers.</p>
   * @public
   */
  StartOnCreation?: boolean | undefined;

  /**
   * <p>The tags to use with this trigger. You may use tags to limit access to the trigger.
   *       For more information about tags in Glue, see
   *       <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

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
export interface CreateTriggerResponse {
  /**
   * <p>The name of the trigger.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Specifies the values that an admin sets for each job or session parameter configured in a Glue usage profile.</p>
 * @public
 */
export interface ConfigurationObject {
  /**
   * <p>A default value for the parameter.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>A list of allowed values for the parameter.</p>
   * @public
   */
  AllowedValues?: string[] | undefined;

  /**
   * <p>A minimum allowed value for the parameter.</p>
   * @public
   */
  MinValue?: string | undefined;

  /**
   * <p>A maximum allowed value for the parameter.</p>
   * @public
   */
  MaxValue?: string | undefined;
}

/**
 * <p>Specifies the job and session values that an admin configures in an Glue usage profile.</p>
 * @public
 */
export interface ProfileConfiguration {
  /**
   * <p>A key-value map of configuration parameters for Glue sessions. </p>
   * @public
   */
  SessionConfiguration?: Record<string, ConfigurationObject> | undefined;

  /**
   * <p>A key-value map of configuration parameters for Glue jobs. </p>
   * @public
   */
  JobConfiguration?: Record<string, ConfigurationObject> | undefined;
}

/**
 * @public
 */
export interface CreateUsageProfileRequest {
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

  /**
   * <p>A list of tags applied to the usage profile.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateUsageProfileResponse {
  /**
   * <p>The name of the usage profile that was created.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The URIs for function resources.</p>
 * @public
 */
export interface ResourceUri {
  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The URI for accessing the resource.</p>
   * @public
   */
  Uri?: string | undefined;
}

/**
 * <p>A structure used to create or update a user-defined function.</p>
 * @public
 */
export interface UserDefinedFunctionInput {
  /**
   * <p>The name of the function.</p>
   * @public
   */
  FunctionName?: string | undefined;

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
   * <p>The resource URIs for the function.</p>
   * @public
   */
  ResourceUris?: ResourceUri[] | undefined;
}

/**
 * @public
 */
export interface CreateUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the function. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database in which to create the function.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>A <code>FunctionInput</code> object that defines the function
   *       to create in the Data Catalog.</p>
   * @public
   */
  FunctionInput: UserDefinedFunctionInput | undefined;
}

/**
 * @public
 */
export interface CreateUserDefinedFunctionResponse {}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * <p>The name to be assigned to the workflow. It should be unique within your account.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   *          <p>Run properties may be logged. Do not pass plaintext secrets as properties. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to use them within the workflow run.</p>
   * @public
   */
  DefaultRunProperties?: Record<string, string> | undefined;

  /**
   * <p>The tags to be used with this workflow.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   * @public
   */
  MaxConcurrentRuns?: number | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * <p>The name of the workflow which was provided as part of the request.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBlueprintRequest {
  /**
   * <p>The name of the blueprint to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteBlueprintResponse {
  /**
   * <p>Returns the name of the blueprint that was deleted.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCatalogRequest {
  /**
   * <p>The ID of the catalog.</p>
   * @public
   */
  CatalogId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCatalogResponse {}

/**
 * @public
 */
export interface DeleteClassifierRequest {
  /**
   * <p>Name of the classifier to remove.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteClassifierResponse {}

/**
 * @public
 */
export interface DeleteColumnStatisticsForPartitionRequest {
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
   * <p>Name of the column.</p>
   * @public
   */
  ColumnName: string | undefined;
}

/**
 * @public
 */
export interface DeleteColumnStatisticsForPartitionResponse {}

/**
 * @public
 */
export interface DeleteColumnStatisticsForTableRequest {
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
   * <p>The name of the column.</p>
   * @public
   */
  ColumnName: string | undefined;
}

/**
 * @public
 */
export interface DeleteColumnStatisticsForTableResponse {}

/**
 * @public
 */
export interface DeleteColumnStatisticsTaskSettingsRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to delete column statistics.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface DeleteColumnStatisticsTaskSettingsResponse {}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the connection to delete.</p>
   * @public
   */
  ConnectionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {}

/**
 * @public
 */
export interface DeleteCrawlerRequest {
  /**
   * <p>The name of the crawler to remove.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteCrawlerResponse {}

/**
 * @public
 */
export interface DeleteCustomEntityTypeRequest {
  /**
   * <p>The name of the custom pattern that you want to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomEntityTypeResponse {
  /**
   * <p>The name of the custom pattern you deleted.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database to delete. For Hive compatibility, this must be all
   *       lowercase.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatabaseResponse {}

/**
 * @public
 */
export interface DeleteDataQualityRulesetRequest {
  /**
   * <p>A name for the data quality ruleset.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataQualityRulesetResponse {}

/**
 * @public
 */
export interface DeleteDevEndpointRequest {
  /**
   * <p>The name of the <code>DevEndpoint</code>.</p>
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDevEndpointResponse {}

/**
 * <p>Request to delete the existing Glue Identity Center configuration.</p>
 * @public
 */
export interface DeleteGlueIdentityCenterConfigurationRequest {}

/**
 * <p>Response from deleting the Glue Identity Center configuration.</p>
 * @public
 */
export interface DeleteGlueIdentityCenterConfigurationResponse {}

/**
 * @public
 */
export interface DeleteIntegrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the integration.</p>
   * @public
   */
  IntegrationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResponse {
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
   * <p>The status of the integration being deleted.</p>
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
   * <p>A list of errors associated with the integration.</p>
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * <p>Selects source tables for the integration using Maxwell filter syntax.</p>
   * @public
   */
  DataFilter?: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResourcePropertyRequest {
  /**
   * <p>The connection ARN of the source, or the database ARN of the target.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResourcePropertyResponse {}

/**
 * @public
 */
export interface DeleteIntegrationTablePropertiesRequest {
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
}

/**
 * @public
 */
export interface DeleteIntegrationTablePropertiesResponse {}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * <p>The name of the job definition to delete.</p>
   * @public
   */
  JobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobResponse {
  /**
   * <p>The name of the job definition that was deleted.</p>
   * @public
   */
  JobName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteMLTransformRequest {
  /**
   * <p>The unique identifier of the transform to delete.</p>
   * @public
   */
  TransformId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMLTransformResponse {
  /**
   * <p>The unique identifier of the transform that was deleted.</p>
   * @public
   */
  TransformId?: string | undefined;
}

/**
 * @public
 */
export interface DeletePartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
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
   * <p>The name of the table that contains the partition to be deleted.</p>
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
export interface DeletePartitionResponse {}

/**
 * @public
 */
export interface DeletePartitionIndexRequest {
  /**
   * <p>The catalog ID where the table resides.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Specifies the name of a database from which you want to delete a partition index.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>Specifies the name of a table from which you want to delete a partition index.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The name of the partition index to be deleted.</p>
   * @public
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface DeletePartitionIndexResponse {}

/**
 * @public
 */
export interface DeleteRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   * @public
   */
  RegistryId: RegistryId | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryResponse {
  /**
   * <p>The name of the registry being deleted.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry being deleted.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>The status of the registry. A successful operation will return the <code>Deleting</code> status.</p>
   * @public
   */
  Status?: RegistryStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The hash value returned when this policy was set.</p>
   * @public
   */
  PolicyHashCondition?: string | undefined;

  /**
   * <p>The ARN of the Glue resource for the resource policy to be deleted.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DeleteSchemaInput {
  /**
   * <p>This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   * @public
   */
  SchemaId: SchemaId | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema being deleted.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name of the schema being deleted.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The status of the schema.</p>
   * @public
   */
  Status?: SchemaStatus | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaVersionsInput {
  /**
   * <p>This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>A version range may be supplied which may be of the format:</p>
   *          <ul>
   *             <li>
   *                <p>a single version number, 5</p>
   *             </li>
   *             <li>
   *                <p>a range, 5-8 : deletes versions 5, 6, 7, 8</p>
   *             </li>
   *          </ul>
   * @public
   */
  Versions: string | undefined;
}

/**
 * <p>An object containing error details.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>The error code for an error.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message for an error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>An object that contains the error details for an operation on a schema version.</p>
 * @public
 */
export interface SchemaVersionErrorItem {
  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The details of the error for the schema version.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaVersionsResponse {
  /**
   * <p>A list of <code>SchemaVersionErrorItem</code> objects, each containing an error and schema version.</p>
   * @public
   */
  SchemaVersionErrors?: SchemaVersionErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityConfigurationRequest {
  /**
   * <p>The name of the security configuration to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityConfigurationResponse {}

/**
 * @public
 */
export interface DeleteSessionRequest {
  /**
   * <p>The ID of the session to be deleted.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the origin of the delete session request.</p>
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionResponse {
  /**
   * <p>Returns the ID of the deleted session.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableRequest {
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
   * <p>The name of the table to be deleted. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The transaction ID at which to delete the table contents.</p>
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableResponse {}

/**
 * @public
 */
export interface DeleteTableOptimizerRequest {
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
export interface DeleteTableOptimizerResponse {}

/**
 * @public
 */
export interface DeleteTableVersionRequest {
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
   * <p>The ID of the table version to be deleted. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
   * @public
   */
  VersionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableVersionResponse {}

/**
 * @public
 */
export interface DeleteTriggerRequest {
  /**
   * <p>The name of the trigger to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteTriggerResponse {
  /**
   * <p>The name of the trigger that was deleted.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteUsageProfileRequest {
  /**
   * <p>The name of the usage profile to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteUsageProfileResponse {}

/**
 * @public
 */
export interface DeleteUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be deleted is
   *       located. If none is supplied, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the function is located.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function definition to be deleted.</p>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserDefinedFunctionResponse {}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * <p>Name of the workflow to be deleted.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowResponse {
  /**
   * <p>Name of the workflow specified in input.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionTypeRequest {
  /**
   * <p>The name of the connection type to be described.</p>
   * @public
   */
  ConnectionType: string | undefined;
}

/**
 * <p>Specifies the supported authentication types returned by the <code>DescribeConnectionType</code> API.</p>
 * @public
 */
export interface Capabilities {
  /**
   * <p>A list of supported authentication types.</p>
   * @public
   */
  SupportedAuthenticationTypes: AuthenticationType[] | undefined;

  /**
   * <p>A list of supported data operations.</p>
   * @public
   */
  SupportedDataOperations: DataOperation[] | undefined;

  /**
   * <p>A list of supported compute environments.</p>
   * @public
   */
  SupportedComputeEnvironments: ComputeEnvironment[] | undefined;
}

/**
 * <p>An object containing configuration for a compute environment (such as Spark, Python or Athena) returned by the <code>DescribeConnectionType</code> API.</p>
 * @public
 */
export interface ComputeEnvironmentConfiguration {
  /**
   * <p>A name for the compute environment configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the compute environment.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The type of compute environment.</p>
   * @public
   */
  ComputeEnvironment: ComputeEnvironment | undefined;

  /**
   * <p>The supported authentication types for the compute environment.</p>
   * @public
   */
  SupportedAuthenticationTypes: AuthenticationType[] | undefined;

  /**
   * <p>The parameters used as connection options for the compute environment.</p>
   * @public
   */
  ConnectionOptions: Record<string, Property> | undefined;

  /**
   * <p>The connection property name overrides for the compute environment.</p>
   * @public
   */
  ConnectionPropertyNameOverrides: Record<string, string> | undefined;

  /**
   * <p>The connection option name overrides for the compute environment.</p>
   * @public
   */
  ConnectionOptionNameOverrides: Record<string, string> | undefined;

  /**
   * <p>The connection properties that are required as overrides for the compute environment.</p>
   * @public
   */
  ConnectionPropertiesRequiredOverrides: string[] | undefined;

  /**
   * <p>Indicates whether <code>PhysicalConnectionProperties</code> are required for the compute environment.</p>
   * @public
   */
  PhysicalConnectionPropertiesRequired?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionTypeResponse {
  /**
   * <p>The name of the connection type.</p>
   * @public
   */
  ConnectionType?: string | undefined;

  /**
   * <p>A description of the connection type.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The supported authentication types, data interface types (compute environments), and data operations of the connector.</p>
   * @public
   */
  Capabilities?: Capabilities | undefined;

  /**
   * <p>Connection properties which are common across compute environments.</p>
   * @public
   */
  ConnectionProperties?: Record<string, Property> | undefined;

  /**
   * <p>Returns properties that can be set when creating a connection in the <code>ConnectionInput.ConnectionProperties</code>. <code>ConnectionOptions</code> defines parameters that can be set in a Spark ETL script in the connection options map passed to a dataframe.</p>
   * @public
   */
  ConnectionOptions?: Record<string, Property> | undefined;

  /**
   * <p>The type of authentication used for the connection.</p>
   * @public
   */
  AuthenticationConfiguration?: AuthConfiguration | undefined;

  /**
   * <p>The compute environments that are supported by the connection.</p>
   * @public
   */
  ComputeEnvironmentConfigurations?: Record<string, ComputeEnvironmentConfiguration> | undefined;

  /**
   * <p>Physical requirements for a connection, such as VPC, Subnet and Security Group specifications.</p>
   * @public
   */
  PhysicalConnectionRequirements?: Record<string, Property> | undefined;

  /**
   * <p>Connection properties specific to the Athena compute environment.</p>
   * @public
   */
  AthenaConnectionProperties?: Record<string, Property> | undefined;

  /**
   * <p>Connection properties specific to the Python compute environment.</p>
   * @public
   */
  PythonConnectionProperties?: Record<string, Property> | undefined;

  /**
   * <p>Connection properties specific to the Spark compute environment.</p>
   * @public
   */
  SparkConnectionProperties?: Record<string, Property> | undefined;
}

/**
 * @public
 */
export interface DescribeEntityRequest {
  /**
   * <p>The name of the connection that contains the connection type credentials.</p>
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * <p>The catalog ID of the catalog that contains the connection. This can be null, By default, the Amazon Web Services Account ID is the catalog ID.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the entity that you want to describe from the connection type.</p>
   * @public
   */
  EntityName: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The version of the API used for the data store.</p>
   * @public
   */
  DataStoreApiVersion?: string | undefined;
}

/**
 * <p>The <code>Field</code> object has information about the different properties associated with a field in the connector.</p>
 * @public
 */
export interface Field {
  /**
   * <p>A unique identifier for the field.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>A readable label used for the field.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>A description of the field.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of data in the field.</p>
   * @public
   */
  FieldType?: FieldDataType | undefined;

  /**
   * <p>Indicates whether this field can used as a primary key for the given entity.</p>
   * @public
   */
  IsPrimaryKey?: boolean | undefined;

  /**
   * <p>Indicates whether this field can be nullable or not.</p>
   * @public
   */
  IsNullable?: boolean | undefined;

  /**
   * <p>Indicates whether this field can be added in Select clause of SQL query or whether it is retrievable or not.</p>
   * @public
   */
  IsRetrievable?: boolean | undefined;

  /**
   * <p> Indicates whether this field can used in a filter clause (<code>WHERE</code> clause) of a SQL statement when querying data. </p>
   * @public
   */
  IsFilterable?: boolean | undefined;

  /**
   * <p>Indicates whether a given field can be used in partitioning the query made to SaaS.</p>
   * @public
   */
  IsPartitionable?: boolean | undefined;

  /**
   * <p>Indicates whether this field can be created as part of a destination write.</p>
   * @public
   */
  IsCreateable?: boolean | undefined;

  /**
   * <p>Indicates whether this field can be updated as part of a destination write.</p>
   * @public
   */
  IsUpdateable?: boolean | undefined;

  /**
   * <p>Indicates whether this field can be upserted as part of a destination write.</p>
   * @public
   */
  IsUpsertable?: boolean | undefined;

  /**
   * <p>Indicates whether this field is populated automatically when the object is created, such as a created at timestamp.</p>
   * @public
   */
  IsDefaultOnCreate?: boolean | undefined;

  /**
   * <p>A list of supported values for the field.</p>
   * @public
   */
  SupportedValues?: string[] | undefined;

  /**
   * <p>Indicates the support filter operators for this field.</p>
   * @public
   */
  SupportedFilterOperators?: FieldFilterOperator[] | undefined;

  /**
   * <p>A parent field name for a nested field.</p>
   * @public
   */
  ParentField?: string | undefined;

  /**
   * <p>The data type returned by the SaaS API, such as “picklist” or “textarea” from Salesforce.</p>
   * @public
   */
  NativeDataType?: string | undefined;

  /**
   * <p>Optional map of keys which may be returned.</p>
   * @public
   */
  CustomProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeEntityResponse {
  /**
   * <p>Describes the fields for that connector entity. This is the list of <code>Field</code> objects. <code>Field</code> is very similar to column in a database. The <code>Field</code> object has information about different properties associated with fields in the connector.</p>
   * @public
   */
  Fields?: Field[] | undefined;

  /**
   * <p>A continuation token, present if the current segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInboundIntegrationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the integration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the marker from a previously truncated response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The total number of items to return in the output.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target resource in the integration.</p>
   * @public
   */
  TargetArn?: string | undefined;
}

/**
 * <p>A structure for an integration that writes data into a resource.</p>
 * @public
 */
export interface InboundIntegration {
  /**
   * <p>The ARN of the source resource for the integration.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The ARN of the target resource for the integration.</p>
   * @public
   */
  TargetArn: string | undefined;

  /**
   * <p>The ARN of the zero-ETL integration.</p>
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * <p>The possible statuses are:</p>
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
   * <p>The time that the integration was created, in UTC.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>Properties associated with the integration.</p>
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;

  /**
   * <p>A list of errors associated with the integration.</p>
   * @public
   */
  Errors?: IntegrationError[] | undefined;
}

/**
 * @public
 */
export interface DescribeInboundIntegrationsResponse {
  /**
   * <p>A list of inbound integrations.</p>
   * @public
   */
  InboundIntegrations?: InboundIntegration[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>A filter that can be used when invoking a <code>DescribeIntegrations</code> request.</p>
 * @public
 */
export interface IntegrationFilter {
  /**
   * <p>The name of the filter.</p>
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
export interface DescribeIntegrationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the integration.</p>
   * @public
   */
  IntegrationIdentifier?: string | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The total number of items to return in the output.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>A list of key and values, to filter down the results. Supported keys are "Status", "IntegrationName", and "SourceArn". IntegrationName is limited to only one value.</p>
   * @public
   */
  Filters?: IntegrationFilter[] | undefined;
}

/**
 * <p>Describes a zero-ETL integration.</p>
 * @public
 */
export interface Integration {
  /**
   * <p>The ARN for the source of the integration.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The ARN for the target of the integration.</p>
   * @public
   */
  TargetArn: string | undefined;

  /**
   * <p>A description for the integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A unique name for the integration.</p>
   * @public
   */
  IntegrationName: string | undefined;

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
   * <p>An optional set of non-secret key–value pairs that contains additional contextual information for encryption. This can only be provided if <code>KMSKeyId</code> is provided.</p>
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>Metadata assigned to the resource consisting of a list of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The possible statuses are:</p>
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
   * <p>The time that the integration was created, in UTC.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>Properties associated with the integration.</p>
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;

  /**
   * <p>A list of errors associated with the integration.</p>
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * <p>Selects source tables for the integration using Maxwell filter syntax.</p>
   * @public
   */
  DataFilter?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIntegrationsResponse {
  /**
   * <p>A list of zero-ETL integrations.</p>
   * @public
   */
  Integrations?: Integration[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetBlueprintRequest {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether or not to include the blueprint in the response.</p>
   * @public
   */
  IncludeBlueprint?: boolean | undefined;

  /**
   * <p>Specifies whether or not to include the parameter specification.</p>
   * @public
   */
  IncludeParameterSpec?: boolean | undefined;
}

/**
 * @public
 */
export interface GetBlueprintResponse {
  /**
   * <p>Returns a <code>Blueprint</code> object.</p>
   * @public
   */
  Blueprint?: Blueprint | undefined;
}

/**
 * @public
 */
export interface GetBlueprintRunRequest {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  BlueprintName: string | undefined;

  /**
   * <p>The run ID for the blueprint run you want to retrieve.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * <p>The details of a blueprint run.</p>
 * @public
 */
export interface BlueprintRun {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  BlueprintName?: string | undefined;

  /**
   * <p>The run ID for this blueprint run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The name of a workflow that is created as a result of a successful blueprint run. If a blueprint run has an error, there will not be a workflow created.</p>
   * @public
   */
  WorkflowName?: string | undefined;

  /**
   * <p>The state of the blueprint run. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>Running — The blueprint run is in progress.</p>
   *             </li>
   *             <li>
   *                <p>Succeeded — The blueprint run completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>Failed — The blueprint run failed and rollback is complete.</p>
   *             </li>
   *             <li>
   *                <p>Rolling Back — The blueprint run failed and rollback is in progress.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: BlueprintRunState | undefined;

  /**
   * <p>The date and time that the blueprint run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The date and time that the blueprint run completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>Indicates any errors that are seen while running the blueprint.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>If there are any errors while creating the entities of a workflow, we try to roll back the created entities until that point and delete them. This attribute indicates the errors seen while trying to delete the entities that are created.</p>
   * @public
   */
  RollbackErrorMessage?: string | undefined;

  /**
   * <p>The blueprint parameters as a string. You will have to provide a value for each key that is required from the parameter spec that is defined in the <code>Blueprint$ParameterSpec</code>.</p>
   * @public
   */
  Parameters?: string | undefined;

  /**
   * <p>The role ARN. This role will be assumed by the Glue service and will be used to create the workflow and other entities of a workflow.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetBlueprintRunResponse {
  /**
   * <p>Returns a <code>BlueprintRun</code> object.</p>
   * @public
   */
  BlueprintRun?: BlueprintRun | undefined;
}

/**
 * @public
 */
export interface GetBlueprintRunsRequest {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  BlueprintName: string | undefined;

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
export interface GetBlueprintRunsResponse {
  /**
   * <p>Returns a list of <code>BlueprintRun</code> objects.</p>
   * @public
   */
  BlueprintRuns?: BlueprintRun[] | undefined;

  /**
   * <p>A continuation token, if not all blueprint runs have been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCatalogRequest {
  /**
   * <p>The ID of the parent catalog in which the catalog resides. If none is provided, the Amazon Web Services Account Number is used by default.</p>
   * @public
   */
  CatalogId: string | undefined;
}

/**
 * <p>The output properties of the data lake access configuration for your catalog resource in the Glue Data Catalog.</p>
 * @public
 */
export interface DataLakeAccessPropertiesOutput {
  /**
   * <p>Turns on or off data lake access for Apache Spark applications that access Amazon Redshift databases in the Data Catalog.</p>
   * @public
   */
  DataLakeAccess?: boolean | undefined;

  /**
   * <p>A role that will be assumed by Glue for transferring data into/out of the staging bucket during a query.</p>
   * @public
   */
  DataTransferRole?: string | undefined;

  /**
   * <p>An encryption key that will be used for the staging bucket that will be created along with the catalog.</p>
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * <p>The managed Redshift Serverless compute name that is created for your catalog resource.</p>
   * @public
   */
  ManagedWorkgroupName?: string | undefined;

  /**
   * <p>The managed Redshift Serverless compute status.</p>
   * @public
   */
  ManagedWorkgroupStatus?: string | undefined;

  /**
   * <p>The default Redshift database resource name in the managed compute.</p>
   * @public
   */
  RedshiftDatabaseName?: string | undefined;

  /**
   * <p>A message that gives more detailed information about the managed workgroup status.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Specifies a federated catalog type for the native catalog resource. The currently supported type is <code>aws:redshift</code>.</p>
   * @public
   */
  CatalogType?: string | undefined;
}

/**
 * <p>A structure that contains the output properties of Iceberg table optimization configuration for your catalog resource in the Glue
 *       Data Catalog.</p>
 * @public
 */
export interface IcebergOptimizationPropertiesOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is used to perform Iceberg table optimization operations.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A map of key-value pairs that specify configuration parameters for Iceberg table compaction operations, which optimize the layout of data files to improve query performance.</p>
   * @public
   */
  Compaction?: Record<string, string> | undefined;

  /**
   * <p>A map of key-value pairs that specify configuration parameters for Iceberg table retention operations, which manage the lifecycle of table snapshots to control storage costs.</p>
   * @public
   */
  Retention?: Record<string, string> | undefined;

  /**
   * <p>A map of key-value pairs that specify configuration parameters for Iceberg orphan file deletion operations, which identify and remove files that are no longer referenced by the table metadata.</p>
   * @public
   */
  OrphanFileDeletion?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the Iceberg optimization properties were last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * <p>Property attributes that include configuration properties for the catalog resource.</p>
 * @public
 */
export interface CatalogPropertiesOutput {
  /**
   * <p>A <code>DataLakeAccessProperties</code> object with input properties to configure data lake access for your catalog resource in the Glue Data Catalog.</p>
   * @public
   */
  DataLakeAccessProperties?: DataLakeAccessPropertiesOutput | undefined;

  /**
   * <p>An <code>IcebergOptimizationPropertiesOutput</code> object that specifies Iceberg table optimization settings for the catalog, including
   *       configurations for compaction, retention, and orphan file deletion operations.</p>
   * @public
   */
  IcebergOptimizationProperties?: IcebergOptimizationPropertiesOutput | undefined;

  /**
   * <p>Additional key-value properties for the catalog, such as column statistics optimizations.</p>
   * @public
   */
  CustomProperties?: Record<string, string> | undefined;
}

/**
 * <p>The catalog object represents a logical grouping of databases in the Glue Data Catalog or a federated source. You can now create a Redshift-federated catalog or a catalog containing resource links to Redshift databases in another account or region.</p>
 * @public
 */
export interface Catalog {
  /**
   * <p>The ID of the catalog. To grant access to the default catalog, this field should not be provided.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog. Cannot be the same as the account ID.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the catalog resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>Description string, not more than 2048 bytes long, matching the URI address multi-line string pattern. A description of the catalog.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> A map array of key-value pairs that define parameters and properties of the catalog.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>The time at which the catalog was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The time at which the catalog was last updated.</p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p>A <code>TargetRedshiftCatalog</code> object that describes a target catalog for database resource linking.</p>
   * @public
   */
  TargetRedshiftCatalog?: TargetRedshiftCatalog | undefined;

  /**
   * <p>A <code>FederatedCatalog</code> object that points to an entity outside the Glue Data Catalog.</p>
   * @public
   */
  FederatedCatalog?: FederatedCatalog | undefined;

  /**
   * <p>A <code>CatalogProperties</code> object that specifies data lake access properties and other custom properties.</p>
   * @public
   */
  CatalogProperties?: CatalogPropertiesOutput | undefined;

  /**
   * <p>An array of <code>PrincipalPermissions</code> objects. Creates a set of default permissions on the table(s) for principals. Used by Amazon Web Services Lake Formation. Not used in the normal course of Glue operations.</p>
   * @public
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * <p>An array of <code>PrincipalPermissions</code> objects. Creates a set of default permissions on the database(s) for principals. Used by Amazon Web Services Lake Formation. Not used in the normal course of Glue operations.</p>
   * @public
   */
  CreateDatabaseDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * <p>
   *       Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.
   *     </p>
   * @public
   */
  AllowFullTableExternalDataAccess?: AllowFullTableExternalDataAccessEnum | undefined;
}

/**
 * @public
 */
export interface GetCatalogResponse {
  /**
   * <p>A <code>Catalog</code> object. The definition of the specified catalog in the Glue Data Catalog.</p>
   * @public
   */
  Catalog?: Catalog | undefined;
}

/**
 * @public
 */
export interface GetCatalogImportStatusRequest {
  /**
   * <p>The ID of the catalog to migrate. Currently, this should be the Amazon Web Services account ID.</p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * <p>A structure containing migration status information.</p>
 * @public
 */
export interface CatalogImportStatus {
  /**
   * <p>
   *             <code>True</code> if the migration has completed, or <code>False</code> otherwise.</p>
   * @public
   */
  ImportCompleted?: boolean | undefined;

  /**
   * <p>The time that the migration was started.</p>
   * @public
   */
  ImportTime?: Date | undefined;

  /**
   * <p>The name of the person who initiated the migration.</p>
   * @public
   */
  ImportedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetCatalogImportStatusResponse {
  /**
   * <p>The status of the specified catalog migration.</p>
   * @public
   */
  ImportStatus?: CatalogImportStatus | undefined;
}

/**
 * @public
 */
export interface GetCatalogsRequest {
  /**
   * <p>The ID of the parent catalog in which the catalog resides. If none is provided, the Amazon Web Services Account Number is used by default.</p>
   * @public
   */
  ParentCatalogId?: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of catalogs to return in one response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Whether to list all catalogs across the catalog hierarchy, starting from the <code>ParentCatalogId</code>. Defaults to <code>false</code> . When <code>true</code>, all catalog objects in the <code>ParentCatalogID</code> hierarchy are enumerated in the response.</p>
   * @public
   */
  Recursive?: boolean | undefined;

  /**
   * <p>Whether to list the default catalog in the account and region in the response. Defaults to <code>false</code>. When <code>true</code> and <code>ParentCatalogId = NULL | Amazon Web Services Account ID</code>, all catalogs and the default catalog are enumerated in the response.</p>
   *          <p>When the <code>ParentCatalogId</code> is not equal to null, and this attribute is passed as <code>false</code> or <code>true</code>, an <code>InvalidInputException</code> is thrown.</p>
   * @public
   */
  IncludeRoot?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCatalogsResponse {
  /**
   * <p>An array of <code>Catalog</code> objects. A list of <code>Catalog</code> objects from the specified parent catalog.</p>
   * @public
   */
  CatalogList: Catalog[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetClassifierRequest {
  /**
   * <p>Name of the classifier to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>A classifier for custom <code>CSV</code> content.</p>
 * @public
 */
export interface CsvClassifier {
  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time that this classifier was last updated.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The version of this classifier.</p>
   * @public
   */
  Version?: number | undefined;

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
   * <p>Specifies not to trim values before identifying the type of column values. The default
   *       value is <code>true</code>.</p>
   * @public
   */
  DisableValueTrimming?: boolean | undefined;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   * @public
   */
  AllowSingleColumn?: boolean | undefined;

  /**
   * <p>Enables the custom datatype to be configured.</p>
   * @public
   */
  CustomDatatypeConfigured?: boolean | undefined;

  /**
   * <p>A list of custom datatypes including "BINARY", "BOOLEAN", "DATE", "DECIMAL", "DOUBLE", "FLOAT", "INT", "LONG", "SHORT", "STRING", "TIMESTAMP".</p>
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
 * <p>A classifier that uses <code>grok</code> patterns.</p>
 * @public
 */
export interface GrokClassifier {
  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and
   *       so on.</p>
   * @public
   */
  Classification: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time that this classifier was last updated.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The version of this classifier.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The grok pattern applied to a data store by this classifier.
   *        For more information, see built-in patterns in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   * @public
   */
  GrokPattern: string | undefined;

  /**
   * <p>Optional custom grok patterns defined by this classifier.
   *       For more information, see custom patterns in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   * @public
   */
  CustomPatterns?: string | undefined;
}

/**
 * <p>A classifier for <code>JSON</code> content.</p>
 * @public
 */
export interface JsonClassifier {
  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time that this classifier was last updated.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The version of this classifier.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   * @public
   */
  JsonPath: string | undefined;
}

/**
 * <p>A classifier for <code>XML</code> content.</p>
 * @public
 */
export interface XMLClassifier {
  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   * @public
   */
  Classification: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time that this classifier was last updated.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The version of this classifier.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   * @public
   */
  RowTag?: string | undefined;
}

/**
 * <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is
 *       in a format it can handle. If it is, the classifier creates a schema in the form of a
 *         <code>StructType</code> object that matches that data format.</p>
 *          <p>You can use the standard classifiers that Glue provides, or you can write your own
 *       classifiers to best categorize your data sources and specify the appropriate schemas to use
 *       for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier,
 *       a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one
 *       of the fields in the <code>Classifier</code> object.</p>
 * @public
 */
export interface Classifier {
  /**
   * <p>A classifier that uses <code>grok</code>.</p>
   * @public
   */
  GrokClassifier?: GrokClassifier | undefined;

  /**
   * <p>A classifier for XML content.</p>
   * @public
   */
  XMLClassifier?: XMLClassifier | undefined;

  /**
   * <p>A classifier for JSON content.</p>
   * @public
   */
  JsonClassifier?: JsonClassifier | undefined;

  /**
   * <p>A classifier for comma-separated values (CSV).</p>
   * @public
   */
  CsvClassifier?: CsvClassifier | undefined;
}

/**
 * @public
 */
export interface GetClassifierResponse {
  /**
   * <p>The requested classifier.</p>
   * @public
   */
  Classifier?: Classifier | undefined;
}

/**
 * @public
 */
export interface GetClassifiersRequest {
  /**
   * <p>The size of the list to return (optional).</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional continuation token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetClassifiersResponse {
  /**
   * <p>The requested list of classifier
   *       objects.</p>
   * @public
   */
  Classifiers?: Classifier[] | undefined;

  /**
   * <p>A continuation token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsForPartitionRequest {
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
   * <p>A list of the column names.</p>
   * @public
   */
  ColumnNames: string[] | undefined;
}

/**
 * <p>Defines column statistics supported for bit sequence data values.</p>
 * @public
 */
export interface BinaryColumnStatisticsData {
  /**
   * <p>The size of the longest bit sequence in the column.</p>
   * @public
   */
  MaximumLength: number | undefined;

  /**
   * <p>The average bit sequence length in the column.</p>
   * @public
   */
  AverageLength: number | undefined;

  /**
   * <p>The number of null values in the column.</p>
   * @public
   */
  NumberOfNulls: number | undefined;
}

/**
 * <p>Defines column statistics supported for Boolean data columns.</p>
 * @public
 */
export interface BooleanColumnStatisticsData {
  /**
   * <p>The number of true values in the column.</p>
   * @public
   */
  NumberOfTrues: number | undefined;

  /**
   * <p>The number of false values in the column.</p>
   * @public
   */
  NumberOfFalses: number | undefined;

  /**
   * <p>The number of null values in the column.</p>
   * @public
   */
  NumberOfNulls: number | undefined;
}

/**
 * <p>Defines column statistics supported for timestamp data columns.</p>
 * @public
 */
export interface DateColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   * @public
   */
  MinimumValue?: Date | undefined;

  /**
   * <p>The highest value in the column.</p>
   * @public
   */
  MaximumValue?: Date | undefined;

  /**
   * <p>The number of null values in the column.</p>
   * @public
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   * @public
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * <p>Contains a numeric value in decimal format.</p>
 * @public
 */
export interface DecimalNumber {
  /**
   * <p>The unscaled numeric value.</p>
   * @public
   */
  UnscaledValue: Uint8Array | undefined;

  /**
   * <p>The scale that determines where the decimal point falls in the
   *       unscaled value.</p>
   * @public
   */
  Scale: number | undefined;
}

/**
 * <p>Defines column statistics supported for fixed-point number data columns.</p>
 * @public
 */
export interface DecimalColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   * @public
   */
  MinimumValue?: DecimalNumber | undefined;

  /**
   * <p>The highest value in the column.</p>
   * @public
   */
  MaximumValue?: DecimalNumber | undefined;

  /**
   * <p>The number of null values in the column.</p>
   * @public
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   * @public
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * <p>Defines column statistics supported for floating-point number data columns.</p>
 * @public
 */
export interface DoubleColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   * @public
   */
  MinimumValue?: number | undefined;

  /**
   * <p>The highest value in the column.</p>
   * @public
   */
  MaximumValue?: number | undefined;

  /**
   * <p>The number of null values in the column.</p>
   * @public
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   * @public
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * <p>Defines column statistics supported for integer data columns.</p>
 * @public
 */
export interface LongColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   * @public
   */
  MinimumValue?: number | undefined;

  /**
   * <p>The highest value in the column.</p>
   * @public
   */
  MaximumValue?: number | undefined;

  /**
   * <p>The number of null values in the column.</p>
   * @public
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   * @public
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * <p>Defines column statistics supported for character sequence data values.</p>
 * @public
 */
export interface StringColumnStatisticsData {
  /**
   * <p>The size of the longest string in the column.</p>
   * @public
   */
  MaximumLength: number | undefined;

  /**
   * <p>The average string length in the column.</p>
   * @public
   */
  AverageLength: number | undefined;

  /**
   * <p>The number of null values in the column.</p>
   * @public
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   * @public
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * <p>Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.</p>
 * @public
 */
export interface ColumnStatisticsData {
  /**
   * <p>The type of column statistics data.</p>
   * @public
   */
  Type: ColumnStatisticsType | undefined;

  /**
   * <p>Boolean column statistics data.</p>
   * @public
   */
  BooleanColumnStatisticsData?: BooleanColumnStatisticsData | undefined;

  /**
   * <p>Date column statistics data.</p>
   * @public
   */
  DateColumnStatisticsData?: DateColumnStatisticsData | undefined;

  /**
   * <p>
   *         Decimal column statistics data. UnscaledValues within are Base64-encoded
   *         binary objects storing big-endian, two's complement representations of
   *         the decimal's unscaled value.
   *     </p>
   * @public
   */
  DecimalColumnStatisticsData?: DecimalColumnStatisticsData | undefined;

  /**
   * <p>Double column statistics data.</p>
   * @public
   */
  DoubleColumnStatisticsData?: DoubleColumnStatisticsData | undefined;

  /**
   * <p>Long column statistics data.</p>
   * @public
   */
  LongColumnStatisticsData?: LongColumnStatisticsData | undefined;

  /**
   * <p>String column statistics data.</p>
   * @public
   */
  StringColumnStatisticsData?: StringColumnStatisticsData | undefined;

  /**
   * <p>Binary column statistics data.</p>
   * @public
   */
  BinaryColumnStatisticsData?: BinaryColumnStatisticsData | undefined;
}

/**
 * <p>Represents the generated column-level statistics for a table or partition.</p>
 * @public
 */
export interface ColumnStatistics {
  /**
   * <p>Name of column which statistics belong to.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>The data type of the column.</p>
   * @public
   */
  ColumnType: string | undefined;

  /**
   * <p>The timestamp of when column statistics were generated.</p>
   * @public
   */
  AnalyzedTime: Date | undefined;

  /**
   * <p>A <code>ColumnStatisticData</code> object that contains the statistics data values.</p>
   * @public
   */
  StatisticsData: ColumnStatisticsData | undefined;
}

/**
 * <p>Encapsulates a column name that failed and the reason for failure.</p>
 * @public
 */
export interface ColumnError {
  /**
   * <p>The name of the column that failed.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>An error message with the reason for the failure of an operation.</p>
   * @public
   */
  Error?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsForPartitionResponse {
  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   * @public
   */
  ColumnStatisticsList?: ColumnStatistics[] | undefined;

  /**
   * <p>Error occurred during retrieving column statistics data.</p>
   * @public
   */
  Errors?: ColumnError[] | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsForTableRequest {
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
   * <p>A list of the column names.</p>
   * @public
   */
  ColumnNames: string[] | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsForTableResponse {
  /**
   * <p>List of ColumnStatistics.</p>
   * @public
   */
  ColumnStatisticsList?: ColumnStatistics[] | undefined;

  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   * @public
   */
  Errors?: ColumnError[] | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskRunRequest {
  /**
   * <p>The identifier for the particular column statistics task run.</p>
   * @public
   */
  ColumnStatisticsTaskRunId: string | undefined;
}

/**
 * <p>The object that shows the details of the column stats run.</p>
 * @public
 */
export interface ColumnStatisticsTaskRun {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  CustomerId?: string | undefined;

  /**
   * <p>The identifier for the particular column statistics task run.</p>
   * @public
   */
  ColumnStatisticsTaskRunId?: string | undefined;

  /**
   * <p>The database where the table resides.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the table for which column statistics is generated.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>A list of the column names. If none is supplied, all column names for the table will be used by default.</p>
   * @public
   */
  ColumnNameList?: string[] | undefined;

  /**
   * <p>The ID of the Data Catalog where the table resides. If none is supplied, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogID?: string | undefined;

  /**
   * <p>The IAM role that the service assumes to generate statistics.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The percentage of rows used to generate statistics. If none is supplied, the entire table will be used to generate stats.</p>
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * <p>Name of the security configuration that is used to encrypt CloudWatch logs for the column stats task run.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>The number of workers used to generate column statistics. The job is preconfigured to autoscale up to 25 instances.</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The type of workers being used for generating stats. The default is <code>g.1x</code>.</p>
   * @public
   */
  WorkerType?: string | undefined;

  /**
   * <p>The type of column statistics computation.</p>
   * @public
   */
  ComputationType?: ComputationType | undefined;

  /**
   * <p>The status of the task run.</p>
   * @public
   */
  Status?: ColumnStatisticsState | undefined;

  /**
   * <p>The time that this task was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last point in time when this task was modified.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The start time of the task.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the task.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The error message for the job.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The calculated DPU usage in seconds for all autoscaled workers.</p>
   * @public
   */
  DPUSeconds?: number | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskRunResponse {
  /**
   * <p>A <code>ColumnStatisticsTaskRun</code> object representing the details of the column stats run.</p>
   * @public
   */
  ColumnStatisticsTaskRun?: ColumnStatisticsTaskRun | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskRunsRequest {
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
export interface GetColumnStatisticsTaskRunsResponse {
  /**
   * <p>A list of column statistics task runs.</p>
   * @public
   */
  ColumnStatisticsTaskRuns?: ColumnStatisticsTaskRun[] | undefined;

  /**
   * <p>A continuation token, if not all task runs have yet been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskSettingsRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to retrieve column statistics.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * <p>A run attempt for a column statistics task run.</p>
 * @public
 */
export interface ExecutionAttempt {
  /**
   * <p>The status of the last column statistics task run.</p>
   * @public
   */
  Status?: ExecutionStatus | undefined;

  /**
   * <p>A task run ID for the last column statistics task run.</p>
   * @public
   */
  ColumnStatisticsTaskRunId?: string | undefined;

  /**
   * <p>A timestamp when the last column statistics task run occurred.</p>
   * @public
   */
  ExecutionTimestamp?: Date | undefined;

  /**
   * <p>An error message associated with the last column statistics task run.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>The settings for a column statistics task.</p>
 * @public
 */
export interface ColumnStatisticsTaskSettings {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the table for which to generate column statistics.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>A schedule for running the column statistics, specified in CRON syntax.</p>
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * <p>A list of column names for which to run statistics.</p>
   * @public
   */
  ColumnNameList?: string[] | undefined;

  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   * @public
   */
  CatalogID?: string | undefined;

  /**
   * <p>The role used for running the column statistics.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The percentage of data to sample.</p>
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * <p>Name of the security configuration that is used to encrypt CloudWatch logs.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>The type of schedule for a column statistics task. Possible values may be <code>CRON</code> or <code>AUTO</code>.</p>
   * @public
   */
  ScheduleType?: ScheduleType | undefined;

  /**
   * <p>The source of setting the column statistics task. Possible values may be <code>CATALOG</code> or <code>TABLE</code>.</p>
   * @public
   */
  SettingSource?: SettingSource | undefined;

  /**
   * <p>The last <code>ExecutionAttempt</code> for the column statistics task run.</p>
   * @public
   */
  LastExecutionAttempt?: ExecutionAttempt | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskSettingsResponse {
  /**
   * <p>A <code>ColumnStatisticsTaskSettings</code> object representing the settings for the column statistics task.</p>
   * @public
   */
  ColumnStatisticsTaskSettings?: ColumnStatisticsTaskSettings | undefined;
}

/**
 * @public
 */
export interface GetConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the connection definition to retrieve.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   * @public
   */
  HidePassword?: boolean | undefined;

  /**
   * <p>For connections that may be used in multiple services, specifies returning properties for the specified compute environment.</p>
   * @public
   */
  ApplyOverrideForComputeEnvironment?: ComputeEnvironment | undefined;
}

/**
 * <p>Defines a connection to a data source.</p>
 * @public
 */
export interface Connection {
  /**
   * <p>The name of the connection definition.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the connection.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of the connection. Currently, SFTP is not supported.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   * @public
   */
  MatchCriteria?: string[] | undefined;

  /**
   * <p>These key-value pairs define parameters for the connection when using the version 1 Connection schema:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HOST</code> - The host URI: either the
   *         fully qualified domain name (FQDN) or the IPv4 address of
   *         the database host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PORT</code> - The port number, between
   *         1024 and 65535, of the port on which the database host is
   *         listening for database connections.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_NAME</code> -  The name under which
   *         to log in to the database. The value string for <code>USER_NAME</code> is "<code>USERNAME</code>".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD</code> - A password,
   *         if one is used, for the user name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_PASSWORD</code> - When you enable connection password protection by setting <code>ConnectionPasswordEncryption</code> in the Data Catalog encryption settings, this field stores the encrypted password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_DRIVER_JAR_URI</code> - The Amazon Simple Storage Service (Amazon S3) path of the
   *           JAR file that contains the JDBC driver to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_DRIVER_CLASS_NAME</code> - The class name of the JDBC driver to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_ENGINE</code> - The name of the JDBC engine to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_ENGINE_VERSION</code> - The version of the JDBC engine to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONFIG_FILES</code> - (Reserved for future use.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_ID</code> - The instance ID to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_CONNECTION_URL</code> - The URL for connecting to a JDBC data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_ENFORCE_SSL</code> - A case-insensitive Boolean string (true, false) specifying whether Secure
   *           Sockets Layer (SSL) with hostname matching is enforced for the JDBC connection on the
   *           client. The default is false.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_JDBC_CERT</code> - An Amazon S3 location specifying the customer's root certificate. Glue uses this root certificate to validate the customer’s certificate when connecting to the customer database. Glue only handles X.509 certificates. The certificate provided must be DER-encoded and supplied in Base64 encoding PEM format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIP_CUSTOM_JDBC_CERT_VALIDATION</code> - By default, this is <code>false</code>. Glue validates the Signature algorithm and Subject Public Key Algorithm for the customer certificate. The only permitted algorithms for the Signature algorithm are SHA256withRSA, SHA384withRSA or SHA512withRSA. For the Subject Public Key Algorithm, the key length must be at least 2048. You can set the value of this property to <code>true</code> to skip Glue’s validation of the customer certificate.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_JDBC_CERT_STRING</code> - A custom JDBC certificate string which is used for domain match or distinguished name match to prevent a man-in-the-middle attack. In Oracle database, this is used as the <code>SSL_SERVER_CERT_DN</code>; in Microsoft SQL Server, this is used as the <code>hostNameInCertificate</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTION_URL</code> - The URL for connecting to a general (non-JDBC) data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SECRET_ID</code> - The secret ID used for the secret manager of credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTOR_URL</code> - The connector URL for a MARKETPLACE or CUSTOM connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTOR_TYPE</code> - The connector type for a MARKETPLACE or CUSTOM connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTOR_CLASS_NAME</code> - The connector class name for a MARKETPLACE or CUSTOM connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_BOOTSTRAP_SERVERS</code> - A comma-separated list of host and port pairs that are the addresses of the Apache Kafka brokers in a Kafka cluster to which a Kafka client will connect to and bootstrap itself.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SSL_ENABLED</code> - Whether to enable or disable SSL on an Apache Kafka connection. Default value is "true".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CUSTOM_CERT</code> - The Amazon S3 URL for the private CA cert file (.pem format). The default is an empty string.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SKIP_CUSTOM_CERT_VALIDATION</code> - Whether to skip the validation of the CA cert file or not. Glue validates for three algorithms: SHA256withRSA, SHA384withRSA and SHA512withRSA. Default value is "false".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CLIENT_KEYSTORE</code> - The Amazon S3 location of the client keystore file for Kafka client side authentication (Optional).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CLIENT_KEYSTORE_PASSWORD</code> - The password to access the provided keystore (Optional).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CLIENT_KEY_PASSWORD</code> - A keystore can consist of multiple keys, so this is the password to access the client key to be used with the Kafka server side key (Optional).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD</code> - The encrypted version of the Kafka client keystore password (if the user has the Glue encrypt passwords setting selected).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD</code> - The encrypted version of the Kafka client key password (if the user has the Glue encrypt passwords setting selected).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_MECHANISM</code> - <code>"SCRAM-SHA-512"</code>, <code>"GSSAPI"</code>, <code>"AWS_MSK_IAM"</code>, or <code>"PLAIN"</code>. These are the supported <a href="https://www.iana.org/assignments/sasl-mechanisms/sasl-mechanisms.xhtml">SASL Mechanisms</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_PLAIN_USERNAME</code> - A plaintext username used to authenticate with the "PLAIN" mechanism.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_PLAIN_PASSWORD</code> - A plaintext password used to authenticate with the "PLAIN" mechanism.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_KAFKA_SASL_PLAIN_PASSWORD</code> - The encrypted version of the Kafka SASL PLAIN password (if the user has the Glue encrypt passwords setting selected).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_SCRAM_USERNAME</code> - A plaintext username used to authenticate with the "SCRAM-SHA-512" mechanism.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_SCRAM_PASSWORD</code> - A plaintext password used to authenticate with the "SCRAM-SHA-512" mechanism.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD</code> - The encrypted version of the Kafka SASL SCRAM password (if the user has the Glue encrypt passwords setting selected).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_SCRAM_SECRETS_ARN</code> - The Amazon Resource Name of a secret in Amazon Web Services Secrets Manager.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_GSSAPI_KEYTAB</code> - The S3 location of a Kerberos <code>keytab</code> file. A keytab stores long-term keys for one or more principals. For more information, see <a href="https://web.mit.edu/kerberos/krb5-latest/doc/basic/keytab_def.html">MIT Kerberos Documentation: Keytab</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_GSSAPI_KRB5_CONF</code> - The S3 location of a Kerberos <code>krb5.conf</code> file. A krb5.conf stores Kerberos configuration information, such as the location of the KDC server. For more information, see <a href="https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html">MIT Kerberos Documentation: krb5.conf</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_GSSAPI_SERVICE</code> - The Kerberos service name, as set with <code>sasl.kerberos.service.name</code> in your <a href="https://kafka.apache.org/documentation/#brokerconfigs_sasl.kerberos.service.name">Kafka Configuration</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_GSSAPI_PRINCIPAL</code> - The name of the Kerberos princial used by Glue. For more information, see <a href="https://kafka.apache.org/documentation/#security_sasl_kerberos_clientconfig">Kafka Documentation: Configuring Kafka Brokers</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROLE_ARN</code> - The role to be used for running queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGION</code> - The Amazon Web Services Region where queries will be run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WORKGROUP_NAME</code> - The name of an Amazon Redshift serverless workgroup or Amazon Athena workgroup in which queries will run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLUSTER_IDENTIFIER</code> - The cluster identifier of an Amazon Redshift cluster in which queries will run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DATABASE</code> - The Amazon Redshift database that you are connecting to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ConnectionProperties?: Partial<Record<ConnectionPropertyKey, string>> | undefined;

  /**
   * <p>Connection properties specific to the Spark compute environment.</p>
   * @public
   */
  SparkProperties?: Record<string, string> | undefined;

  /**
   * <p>Connection properties specific to the Athena compute environment.</p>
   * @public
   */
  AthenaProperties?: Record<string, string> | undefined;

  /**
   * <p>Connection properties specific to the Python compute environment.</p>
   * @public
   */
  PythonProperties?: Record<string, string> | undefined;

  /**
   * <p>The physical connection requirements, such as virtual private cloud (VPC) and <code>SecurityGroup</code>, that are needed to make this connection successfully.</p>
   * @public
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;

  /**
   * <p>The timestamp of the time that this connection definition was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The timestamp of the last time the connection definition was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The user, group, or role that last updated this connection definition.</p>
   * @public
   */
  LastUpdatedBy?: string | undefined;

  /**
   * <p>The status of the connection. Can be one of: <code>READY</code>, <code>IN_PROGRESS</code>, or <code>FAILED</code>.</p>
   * @public
   */
  Status?: ConnectionStatus | undefined;

  /**
   * <p>The reason for the connection status.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>A timestamp of the time this connection was last validated.</p>
   * @public
   */
  LastConnectionValidationTime?: Date | undefined;

  /**
   * <p>The authentication properties of the connection.</p>
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfiguration | undefined;

  /**
   * <p>The version of the connection schema for this connection. Version 2 supports properties for specific compute environments.</p>
   * @public
   */
  ConnectionSchemaVersion?: number | undefined;

  /**
   * <p>A list of compute environments compatible with the connection.</p>
   * @public
   */
  CompatibleComputeEnvironments?: ComputeEnvironment[] | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * <p>The requested connection definition.</p>
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * <p>Filters the connection definitions that are returned by the <code>GetConnections</code>
 *       API operation.</p>
 * @public
 */
export interface GetConnectionsFilter {
  /**
   * <p>A criteria string that must match the criteria recorded in the
   *        connection definition for that connection definition to be returned.</p>
   * @public
   */
  MatchCriteria?: string[] | undefined;

  /**
   * <p>The type of connections to return. Currently, SFTP is not supported.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>Denotes if the connection was created with schema version 1 or 2.</p>
   * @public
   */
  ConnectionSchemaVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetConnectionsRequest {
  /**
   * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A filter that controls which connections are returned.</p>
   * @public
   */
  Filter?: GetConnectionsFilter | undefined;

  /**
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   * @public
   */
  HidePassword?: boolean | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of connections to return in one response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetConnectionsResponse {
  /**
   * <p>A list of requested connection definitions.</p>
   * @public
   */
  ConnectionList?: Connection[] | undefined;

  /**
   * <p>A continuation token, if the list of connections returned does not
   *       include the last of the filtered connections.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCrawlerRequest {
  /**
   * <p>The name of the crawler to retrieve metadata for.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetCrawlerResponse {
  /**
   * <p>The metadata for the specified crawler.</p>
   * @public
   */
  Crawler?: Crawler | undefined;
}

/**
 * @public
 */
export interface GetCrawlerMetricsRequest {
  /**
   * <p>A list of the names of crawlers about which to retrieve metrics.</p>
   * @public
   */
  CrawlerNameList?: string[] | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
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
 * <p>Metrics for a specified crawler.</p>
 * @public
 */
export interface CrawlerMetrics {
  /**
   * <p>The name of the crawler.</p>
   * @public
   */
  CrawlerName?: string | undefined;

  /**
   * <p>The estimated time left to complete a running crawl.</p>
   * @public
   */
  TimeLeftSeconds?: number | undefined;

  /**
   * <p>True if the crawler is still estimating how long it will take to complete this run.</p>
   * @public
   */
  StillEstimating?: boolean | undefined;

  /**
   * <p>The duration of the crawler's most recent run, in seconds.</p>
   * @public
   */
  LastRuntimeSeconds?: number | undefined;

  /**
   * <p>The median duration of this crawler's runs, in seconds.</p>
   * @public
   */
  MedianRuntimeSeconds?: number | undefined;

  /**
   * <p>The number of tables created by this crawler.</p>
   * @public
   */
  TablesCreated?: number | undefined;

  /**
   * <p>The number of tables updated by this crawler.</p>
   * @public
   */
  TablesUpdated?: number | undefined;

  /**
   * <p>The number of tables deleted by this crawler.</p>
   * @public
   */
  TablesDeleted?: number | undefined;
}

/**
 * @public
 */
export interface GetCrawlerMetricsResponse {
  /**
   * <p>A list of metrics for the specified crawler.</p>
   * @public
   */
  CrawlerMetricsList?: CrawlerMetrics[] | undefined;

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
export interface GetCrawlersRequest {
  /**
   * <p>The number of crawlers to return on each call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCrawlersResponse {
  /**
   * <p>A list of crawler metadata.</p>
   * @public
   */
  Crawlers?: Crawler[] | undefined;

  /**
   * <p>A continuation token, if the returned list has not reached the end
   *       of those defined in this customer account.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCustomEntityTypeRequest {
  /**
   * <p>The name of the custom pattern that you want to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetCustomEntityTypeResponse {
  /**
   * <p>The name of the custom pattern that you retrieved.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A regular expression string that is used for detecting sensitive data in a custom pattern.</p>
   * @public
   */
  RegexString?: string | undefined;

  /**
   * <p>A list of context words if specified when you created the custom pattern. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.</p>
   * @public
   */
  ContextWords?: string[] | undefined;
}

/**
 * @public
 */
export interface GetDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database to retrieve. For Hive compatibility, this
   *       should be all lowercase.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>The <code>Database</code> object represents a logical grouping of tables that might reside
 *       in a Hive metastore or an RDBMS.</p>
 * @public
 */
export interface Database {
  /**
   * <p>The name of the database. For Hive compatibility, this is folded to lowercase when it is
   *       stored.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the database.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The location of the database (for example, an HDFS path).</p>
   * @public
   */
  LocationUri?: string | undefined;

  /**
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>The time at which the metadata database was created in the catalog.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>Creates a set of default permissions on the table for principals. Used by Lake Formation. Not used in the normal course of Glue operations.</p>
   * @public
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * <p>A <code>DatabaseIdentifier</code> structure that describes a target database for resource linking.</p>
   * @public
   */
  TargetDatabase?: DatabaseIdentifier | undefined;

  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A <code>FederatedDatabase</code> structure that references an entity outside the Glue Data Catalog.</p>
   * @public
   */
  FederatedDatabase?: FederatedDatabase | undefined;
}

/**
 * @public
 */
export interface GetDatabaseResponse {
  /**
   * <p>The definition of the specified database in the Data Catalog.</p>
   * @public
   */
  Database?: Database | undefined;
}

/**
 * @public
 */
export interface GetDatabasesRequest {
  /**
   * <p>The ID of the Data Catalog from which to retrieve <code>Databases</code>. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of databases to return in one response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Allows you to specify that you want to list the databases shared with your account. The allowable values are <code>FEDERATED</code>, <code>FOREIGN</code> or <code>ALL</code>. </p>
   *          <ul>
   *             <li>
   *                <p>If set to <code>FEDERATED</code>, will list the federated databases (referencing an external entity) shared with your account.</p>
   *             </li>
   *             <li>
   *                <p>If set to <code>FOREIGN</code>, will list the databases shared with your account. </p>
   *             </li>
   *             <li>
   *                <p>If set to <code>ALL</code>, will list the databases shared with your account, as well as the databases in yor local account. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceShareType?: ResourceShareType | undefined;

  /**
   * <p>Specifies the database fields returned by the <code>GetDatabases</code> call. This parameter doesn’t accept an empty list. The request must include the <code>NAME</code>.</p>
   * @public
   */
  AttributesToGet?: DatabaseAttributes[] | undefined;
}

/**
 * @public
 */
export interface GetDatabasesResponse {
  /**
   * <p>A list of <code>Database</code> objects from the specified catalog.</p>
   * @public
   */
  DatabaseList: Database[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens,
   *       returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDataCatalogEncryptionSettingsRequest {
  /**
   * <p>The ID of the Data Catalog to retrieve the security configuration for. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * <p>The data structure used by the Data Catalog to encrypt the password as part of
 *         <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the
 *         <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog
 *       encryption or only password encryption.</p>
 *          <p>When a <code>CreationConnection</code> request arrives containing a password, the Data
 *       Catalog first encrypts the password using your KMS key. It then encrypts the whole
 *       connection object again if catalog encryption is also enabled.</p>
 *          <p>This encryption requires that you set KMS key permissions to enable or restrict access
 *       on the password key according to your security requirements. For example, you might want only
 *       administrators to have decrypt permission on the password key.</p>
 * @public
 */
export interface ConnectionPasswordEncryption {
  /**
   * <p>When the <code>ReturnConnectionPasswordEncrypted</code> flag is set to "true", passwords remain encrypted in the responses of <code>GetConnection</code> and <code>GetConnections</code>. This encryption takes effect independently from catalog encryption. </p>
   * @public
   */
  ReturnConnectionPasswordEncrypted: boolean | undefined;

  /**
   * <p>An KMS key that is used to encrypt the connection password. </p>
   *          <p>If connection password protection is enabled, the caller of <code>CreateConnection</code>
   *       and <code>UpdateConnection</code> needs at least <code>kms:Encrypt</code> permission on the
   *       specified KMS key, to encrypt passwords before storing them in the Data Catalog. </p>
   *          <p>You can set the decrypt permission to enable or restrict access on the password key according to your security requirements.</p>
   * @public
   */
  AwsKmsKeyId?: string | undefined;
}

/**
 * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
 * @public
 */
export interface EncryptionAtRest {
  /**
   * <p>The encryption-at-rest mode for encrypting Data Catalog data.</p>
   * @public
   */
  CatalogEncryptionMode: CatalogEncryptionMode | undefined;

  /**
   * <p>The ID of the KMS key to use for encryption at rest.</p>
   * @public
   */
  SseAwsKmsKeyId?: string | undefined;

  /**
   * <p>The role that Glue assumes to encrypt and decrypt the Data Catalog objects on the caller's behalf.</p>
   * @public
   */
  CatalogEncryptionServiceRole?: string | undefined;
}

/**
 * <p>Contains configuration information for maintaining Data Catalog security.</p>
 * @public
 */
export interface DataCatalogEncryptionSettings {
  /**
   * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
   * @public
   */
  EncryptionAtRest?: EncryptionAtRest | undefined;

  /**
   * <p>When connection password protection is enabled, the Data Catalog uses a customer-provided
   *       key to encrypt the password as part of <code>CreateConnection</code> or
   *         <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in
   *       the connection properties. You can enable catalog encryption or only password
   *       encryption.</p>
   * @public
   */
  ConnectionPasswordEncryption?: ConnectionPasswordEncryption | undefined;
}

/**
 * @public
 */
export interface GetDataCatalogEncryptionSettingsResponse {
  /**
   * <p>The requested security configuration.</p>
   * @public
   */
  DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings | undefined;
}

/**
 * @public
 */
export interface GetDataflowGraphRequest {
  /**
   * <p>The Python script to transform.</p>
   * @public
   */
  PythonScript?: string | undefined;
}

/**
 * @public
 */
export interface GetDataflowGraphResponse {
  /**
   * <p>A list of the nodes in the resulting DAG.</p>
   * @public
   */
  DagNodes?: CodeGenNode[] | undefined;

  /**
   * <p>A list of the edges in the resulting DAG.</p>
   * @public
   */
  DagEdges?: CodeGenEdge[] | undefined;
}

/**
 * @public
 */
export interface GetDataQualityModelRequest {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityModelResponse {
  /**
   * <p>The training status of the data quality model.</p>
   * @public
   */
  Status?: DataQualityModelStatus | undefined;

  /**
   * <p>The timestamp when the data quality model training started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The timestamp when the data quality model training completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The training failure reason.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityModelResultRequest {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId: string | undefined;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * <p>The statistic model result.</p>
 * @public
 */
export interface StatisticModelResult {
  /**
   * <p>The lower bound.</p>
   * @public
   */
  LowerBound?: number | undefined;

  /**
   * <p>The upper bound.</p>
   * @public
   */
  UpperBound?: number | undefined;

  /**
   * <p>The predicted value.</p>
   * @public
   */
  PredictedValue?: number | undefined;

  /**
   * <p>The actual value.</p>
   * @public
   */
  ActualValue?: number | undefined;

  /**
   * <p>The date.</p>
   * @public
   */
  Date?: Date | undefined;

  /**
   * <p>The inclusion annotation.</p>
   * @public
   */
  InclusionAnnotation?: InclusionAnnotationValue | undefined;
}

/**
 * @public
 */
export interface GetDataQualityModelResultResponse {
  /**
   * <p>The timestamp when the data quality model training completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>A list of <code>StatisticModelResult</code>
   *          </p>
   * @public
   */
  Model?: StatisticModelResult[] | undefined;
}

/**
 * @public
 */
export interface GetDataQualityResultRequest {
  /**
   * <p>A unique result ID for the data quality result.</p>
   * @public
   */
  ResultId: string | undefined;
}

/**
 * <p>The response for the data quality result.</p>
 * @public
 */
export interface GetDataQualityResultResponse {
  /**
   * <p>A unique result ID for the data quality result.</p>
   * @public
   */
  ResultId?: string | undefined;

  /**
   * <p>The Profile ID for the data quality result.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>An aggregate data quality score. Represents the ratio of rules that passed to the total number of rules.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>The table associated with the data quality result, if any.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>The name of the ruleset associated with the data quality result.</p>
   * @public
   */
  RulesetName?: string | undefined;

  /**
   * <p>In the context of a job in Glue Studio, each node in the canvas is typically assigned some sort of name and data quality nodes will have names. In the case of multiple nodes, the <code>evaluationContext</code> can differentiate the nodes.</p>
   * @public
   */
  EvaluationContext?: string | undefined;

  /**
   * <p>The date and time when the run for this data quality result started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The date and time when the run for this data quality result was completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The job name associated with the data quality result, if any.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The job run ID associated with the data quality result, if any.</p>
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * <p>The unique run ID associated with the ruleset evaluation.</p>
   * @public
   */
  RulesetEvaluationRunId?: string | undefined;

  /**
   * <p>A list of <code>DataQualityRuleResult</code> objects representing the results for each rule. </p>
   * @public
   */
  RuleResults?: DataQualityRuleResult[] | undefined;

  /**
   * <p>A list of <code>DataQualityAnalyzerResult</code> objects representing the results for each analyzer. </p>
   * @public
   */
  AnalyzerResults?: DataQualityAnalyzerResult[] | undefined;

  /**
   * <p>A list of <code>DataQualityObservation</code> objects representing the observations generated after evaluating the rules and analyzers. </p>
   * @public
   */
  Observations?: DataQualityObservation[] | undefined;

  /**
   * <p> A summary of <code>DataQualityAggregatedMetrics</code> objects showing the total counts of processed rows and rules, including their pass/fail statistics based on row-level results. </p>
   * @public
   */
  AggregatedMetrics?: DataQualityAggregatedMetrics | undefined;
}

/**
 * @public
 */
export interface GetDataQualityRuleRecommendationRunRequest {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * <p>The response for the Data Quality rule recommendation run.</p>
 * @public
 */
export interface GetDataQualityRuleRecommendationRunResponse {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The data source (an Glue table) associated with this run.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   * @public
   */
  Role?: string | undefined;

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
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>The error strings that are associated with the run.</p>
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * <p>The date and time when this run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>A timestamp. The last point in time when this data quality rule recommendation run was modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>The date and time when this run was completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The amount of time (in seconds) that the run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * <p>When a start rule recommendation run completes, it creates a recommended ruleset (a set of rules). This member has those rules in Data Quality Definition Language (DQDL) format.</p>
   * @public
   */
  RecommendedRuleset?: string | undefined;

  /**
   * <p>The name of the ruleset that was created by the run.</p>
   * @public
   */
  CreatedRulesetName?: string | undefined;

  /**
   * <p>The name of the security configuration created with the data quality encryption option.</p>
   * @public
   */
  DataQualitySecurityConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityRulesetRequest {
  /**
   * <p>The name of the ruleset.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Returns the data quality ruleset response.</p>
 * @public
 */
export interface GetDataQualityRulesetResponse {
  /**
   * <p>The name of the ruleset.</p>
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

  /**
   * <p>The name and database name of the target table.</p>
   * @public
   */
  TargetTable?: DataQualityTargetTable | undefined;

  /**
   * <p>A timestamp. The time and date that this data quality ruleset was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>A timestamp. The last point in time when this data quality ruleset was modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>When a ruleset was created from a recommendation run, this run ID is generated to link the two together.</p>
   * @public
   */
  RecommendationRunId?: string | undefined;

  /**
   * <p>The name of the security configuration created with the data quality encryption option.</p>
   * @public
   */
  DataQualitySecurityConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityRulesetEvaluationRunRequest {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * <p>Additional run options you can specify for an evaluation run.</p>
 * @public
 */
export interface DataQualityEvaluationRunAdditionalRunOptions {
  /**
   * <p>Whether or not to enable CloudWatch metrics.</p>
   * @public
   */
  CloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * <p>Prefix for Amazon S3 to store results.</p>
   * @public
   */
  ResultsS3Prefix?: string | undefined;

  /**
   * <p>Set the evaluation method for composite rules in the ruleset to ROW/COLUMN</p>
   * @public
   */
  CompositeRuleEvaluationMethod?: DQCompositeRuleEvaluationMethod | undefined;
}

/**
 * @public
 */
export interface GetDataQualityRulesetEvaluationRunResponse {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The data source (an Glue table) associated with this evaluation run.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   * @public
   */
  Role?: string | undefined;

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
   * <p>Additional run options you can specify for an evaluation run.</p>
   * @public
   */
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions | undefined;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>The error strings that are associated with the run.</p>
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * <p>The date and time when this run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>A timestamp. The last point in time when this data quality rule recommendation run was modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>The date and time when this run was completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The amount of time (in seconds) that the run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * <p>A list of ruleset names for the run. Currently, this parameter takes only one Ruleset name.</p>
   * @public
   */
  RulesetNames?: string[] | undefined;

  /**
   * <p>A list of result IDs for the data quality results for the run.</p>
   * @public
   */
  ResultIds?: string[] | undefined;

  /**
   * <p>A map of reference strings to additional data sources you can specify for an evaluation run.</p>
   * @public
   */
  AdditionalDataSources?: Record<string, DataSource> | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointRequest {
  /**
   * <p>Name of the <code>DevEndpoint</code> to retrieve information for.</p>
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointResponse {
  /**
   * <p>A <code>DevEndpoint</code> definition.</p>
   * @public
   */
  DevEndpoint?: DevEndpoint | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointsRequest {
  /**
   * <p>The maximum size of information to return.</p>
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
export interface GetDevEndpointsResponse {
  /**
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   * @public
   */
  DevEndpoints?: DevEndpoint[] | undefined;

  /**
   * <p>A continuation token, if not all <code>DevEndpoint</code> definitions have yet been
   *       returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEntityRecordsRequest {
  /**
   * <p>The name of the connection that contains the connection type credentials.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The catalog ID of the catalog that contains the connection. This can be null, By default, the Amazon Web Services Account ID is the catalog ID.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Name of the entity that we want to query the preview data from the given connection type.</p>
   * @public
   */
  EntityName: string | undefined;

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

  /**
   * <p>Connector options that are required to query the data.</p>
   * @public
   */
  ConnectionOptions?: Record<string, string> | undefined;

  /**
   * <p>A filter predicate that you can apply in the query request.</p>
   * @public
   */
  FilterPredicate?: string | undefined;

  /**
   * <p>Limits the number of records fetched with the request.</p>
   * @public
   */
  Limit: number | undefined;

  /**
   * <p>A parameter that orders the response preview data.</p>
   * @public
   */
  OrderBy?: string | undefined;

  /**
   * <p> List of fields that we want to fetch as part of preview data.</p>
   * @public
   */
  SelectedFields?: string[] | undefined;
}

/**
 * @public
 */
export interface GetEntityRecordsResponse {
  /**
   * <p>A list of the requested objects.</p>
   * @public
   */
  Records?: __DocumentType[] | undefined;

  /**
   * <p>A continuation token, present if the current segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Request to retrieve the Glue Identity Center configuration.</p>
 * @public
 */
export interface GetGlueIdentityCenterConfigurationRequest {}

/**
 * <p>Response containing the Glue Identity Center configuration details.</p>
 * @public
 */
export interface GetGlueIdentityCenterConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Identity Center application associated with the Glue configuration.</p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity Center instance associated with the Glue configuration.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>A list of Identity Center scopes that define the permissions and access levels for the Glue configuration.</p>
   * @public
   */
  Scopes?: string[] | undefined;

  /**
   * <p>Indicates whether users can run background sessions when using Identity Center authentication with Glue services.</p>
   * @public
   */
  UserBackgroundSessionsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResourcePropertyRequest {
  /**
   * <p>The connection ARN of the source, or the database ARN of the target.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResourcePropertyResponse {
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
export interface GetIntegrationTablePropertiesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the target table for which to retrieve integration table properties. Currently, this API only supports retrieving
   *       properties for target tables, and the provided ARN should be the ARN of the target table in the Glue Data Catalog. Support for retrieving integration
   *       table properties for source connections (using the connection ARN) is not yet implemented and will be added in a future release.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The name of the table to be replicated.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationTablePropertiesResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the target table for which to retrieve integration table properties. Currently, this API only supports retrieving
   *       properties for target tables, and the provided ARN should be the ARN of the target table in the Glue Data Catalog. Support for retrieving integration
   *       table properties for source connections (using the connection ARN) is not yet implemented and will be added in a future release.
   *     </p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The name of the table to be replicated.</p>
   * @public
   */
  TableName?: string | undefined;

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
export interface GetJobRequest {
  /**
   * <p>The name of the job definition to retrieve.</p>
   * @public
   */
  JobName: string | undefined;
}

/**
 * @public
 */
export interface GetJobBookmarkRequest {
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
 * <p>Defines a point that a job can resume processing.</p>
 * @public
 */
export interface JobBookmarkEntry {
  /**
   * <p>The name of the job in question.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The version of the job.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The run ID number.</p>
   * @public
   */
  Run?: number | undefined;

  /**
   * <p>The attempt ID number.</p>
   * @public
   */
  Attempt?: number | undefined;

  /**
   * <p>The unique run identifier associated with the previous job run.</p>
   * @public
   */
  PreviousRunId?: string | undefined;

  /**
   * <p>The run ID number.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The bookmark itself.</p>
   * @public
   */
  JobBookmark?: string | undefined;
}

/**
 * @public
 */
export interface GetJobBookmarkResponse {
  /**
   * <p>A structure that defines a point that a job can resume processing.</p>
   * @public
   */
  JobBookmarkEntry?: JobBookmarkEntry | undefined;
}

/**
 * @public
 */
export interface GetJobRunRequest {
  /**
   * <p>Name of the job definition being run.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>True if a list of predecessor runs should be returned.</p>
   * @public
   */
  PredecessorsIncluded?: boolean | undefined;
}

/**
 * @public
 */
export interface GetJobRunResponse {
  /**
   * <p>The requested job-run metadata.</p>
   * @public
   */
  JobRun?: JobRun | undefined;
}

/**
 * @public
 */
export interface GetJobRunsRequest {
  /**
   * <p>The name of the job definition for which to retrieve all job runs.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetJobRunsResponse {
  /**
   * <p>A list of job-run metadata objects.</p>
   * @public
   */
  JobRuns?: JobRun[] | undefined;

  /**
   * <p>A continuation token, if not all requested job runs have been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetJobsRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The location of resources.</p>
 * @public
 */
export interface Location {
  /**
   * <p>A JDBC location.</p>
   * @public
   */
  Jdbc?: CodeGenNodeArg[] | undefined;

  /**
   * <p>An Amazon Simple Storage Service (Amazon S3) location.</p>
   * @public
   */
  S3?: CodeGenNodeArg[] | undefined;

  /**
   * <p>An Amazon DynamoDB table location.</p>
   * @public
   */
  DynamoDB?: CodeGenNodeArg[] | undefined;
}

/**
 * <p>Specifies a table definition in the Glue Data Catalog.</p>
 * @public
 */
export interface CatalogEntry {
  /**
   * <p>The database in which the table metadata resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table in question.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface GetMappingRequest {
  /**
   * <p>Specifies the source table.</p>
   * @public
   */
  Source: CatalogEntry | undefined;

  /**
   * <p>A list of target tables.</p>
   * @public
   */
  Sinks?: CatalogEntry[] | undefined;

  /**
   * <p>Parameters for the mapping.</p>
   * @public
   */
  Location?: Location | undefined;
}

/**
 * <p>Defines a mapping.</p>
 * @public
 */
export interface MappingEntry {
  /**
   * <p>The name of the source table.</p>
   * @public
   */
  SourceTable?: string | undefined;

  /**
   * <p>The source path.</p>
   * @public
   */
  SourcePath?: string | undefined;

  /**
   * <p>The source type.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>The target table.</p>
   * @public
   */
  TargetTable?: string | undefined;

  /**
   * <p>The target path.</p>
   * @public
   */
  TargetPath?: string | undefined;

  /**
   * <p>The target type.</p>
   * @public
   */
  TargetType?: string | undefined;
}

/**
 * @public
 */
export interface GetMappingResponse {
  /**
   * <p>A list of mappings to the specified targets.</p>
   * @public
   */
  Mapping: MappingEntry[] | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>The unique identifier of the task run.</p>
   * @public
   */
  TaskRunId: string | undefined;
}

/**
 * <p>Specifies configuration properties for an exporting labels task run.</p>
 * @public
 */
export interface ExportLabelsTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will export the
   *       labels.</p>
   * @public
   */
  OutputS3Path?: string | undefined;
}

/**
 * <p>Specifies configuration properties for a Find Matches task run.</p>
 * @public
 */
export interface FindMatchesTaskRunProperties {
  /**
   * <p>The job ID for the Find Matches task run.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The name assigned to the job for the Find Matches task run.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The job run ID for the Find Matches task run.</p>
   * @public
   */
  JobRunId?: string | undefined;
}

/**
 * <p>Specifies configuration properties for an importing labels task run.</p>
 * @public
 */
export interface ImportLabelsTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you will import the
   *       labels.</p>
   * @public
   */
  InputS3Path?: string | undefined;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   * @public
   */
  Replace?: boolean | undefined;
}

/**
 * <p>Specifies configuration properties for a labeling set generation task run.</p>
 * @public
 */
export interface LabelingSetGenerationTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will generate the labeling
   *       set.</p>
   * @public
   */
  OutputS3Path?: string | undefined;
}

/**
 * <p>The configuration properties for the task run.</p>
 * @public
 */
export interface TaskRunProperties {
  /**
   * <p>The type of task run.</p>
   * @public
   */
  TaskType?: TaskType | undefined;

  /**
   * <p>The configuration properties for an importing labels task run.</p>
   * @public
   */
  ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties | undefined;

  /**
   * <p>The configuration properties for an exporting labels task run.</p>
   * @public
   */
  ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties | undefined;

  /**
   * <p>The configuration properties for a labeling set generation task run.</p>
   * @public
   */
  LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties | undefined;

  /**
   * <p>The configuration properties for a find matches task run.</p>
   * @public
   */
  FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunResponse {
  /**
   * <p>The unique identifier of the task run.</p>
   * @public
   */
  TransformId?: string | undefined;

  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  TaskRunId?: string | undefined;

  /**
   * <p>The status for this task run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>The names of the log groups that are associated with the task run.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>The list of properties that are associated with the task run.</p>
   * @public
   */
  Properties?: TaskRunProperties | undefined;

  /**
   * <p>The error strings that are associated with the task run.</p>
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * <p>The date and time when this task run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The date and time when this task run was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>The date and time when this task run was completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number | undefined;
}

/**
 * <p>The criteria that are used to filter the task runs for the machine learning
 *       transform.</p>
 * @public
 */
export interface TaskRunFilterCriteria {
  /**
   * <p>The type of task run.</p>
   * @public
   */
  TaskRunType?: TaskType | undefined;

  /**
   * <p>The current status of the task run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>Filter on task runs started before this date.</p>
   * @public
   */
  StartedBefore?: Date | undefined;

  /**
   * <p>Filter on task runs started after this date.</p>
   * @public
   */
  StartedAfter?: Date | undefined;
}

/**
 * <p>The sorting criteria that are used to sort the list of task runs for the machine learning
 *       transform.</p>
 * @public
 */
export interface TaskRunSortCriteria {
  /**
   * <p>The column to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   * @public
   */
  Column: TaskRunSortColumnType | undefined;

  /**
   * <p>The sort direction to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   * @public
   */
  SortDirection: SortDirectionType | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunsRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>A token for pagination of the results. The default is empty.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filter criteria, in the <code>TaskRunFilterCriteria</code> structure, for the task run.</p>
   * @public
   */
  Filter?: TaskRunFilterCriteria | undefined;

  /**
   * <p>The sorting criteria, in the <code>TaskRunSortCriteria</code> structure, for the task run.</p>
   * @public
   */
  Sort?: TaskRunSortCriteria | undefined;
}

/**
 * <p>The sampling parameters that are associated with the machine learning transform.</p>
 * @public
 */
export interface TaskRun {
  /**
   * <p>The unique identifier for the transform.</p>
   * @public
   */
  TransformId?: string | undefined;

  /**
   * <p>The unique identifier for this task run.</p>
   * @public
   */
  TaskRunId?: string | undefined;

  /**
   * <p>The current status of the requested task run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>The names of the log group for secure logging, associated with this task run.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>Specifies configuration properties associated with this task run.</p>
   * @public
   */
  Properties?: TaskRunProperties | undefined;

  /**
   * <p>The list of error strings associated with this task run.</p>
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * <p>The date and time that this task run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The last point in time that the requested task run was updated.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>The last point in time that the requested task run was completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunsResponse {
  /**
   * <p>A list of task runs that are associated with the transform.</p>
   * @public
   */
  TaskRuns?: TaskRun[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMLTransformRequest {
  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   * @public
   */
  TransformId: string | undefined;
}

/**
 * <p>A structure containing the column name and column importance score for a column. </p>
 *          <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p>
 * @public
 */
export interface ColumnImportance {
  /**
   * <p>The name of a column.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>The column importance score for the column, as a decimal.</p>
   * @public
   */
  Importance?: number | undefined;
}

/**
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
 *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
 * @public
 */
export interface ConfusionMatrix {
  /**
   * <p>The number of matches in the data that the transform correctly found, in the confusion matrix for your transform.</p>
   * @public
   */
  NumTruePositives?: number | undefined;

  /**
   * <p>The number of nonmatches in the data that the transform incorrectly classified as a match,
   *       in the confusion matrix for your transform.</p>
   * @public
   */
  NumFalsePositives?: number | undefined;

  /**
   * <p>The number of nonmatches in the data that the transform correctly rejected, in the
   *       confusion matrix for your transform.</p>
   * @public
   */
  NumTrueNegatives?: number | undefined;

  /**
   * <p>The number of matches in the data that the transform didn't find, in the confusion matrix for your transform.</p>
   * @public
   */
  NumFalseNegatives?: number | undefined;
}

/**
 * <p>The evaluation metrics for the find matches algorithm. The quality of your machine
 *       learning transform is measured by getting your transform to predict some matches and comparing
 *       the results to known matches from the same dataset. The quality metrics are based on a subset
 *       of your data, so they are not precise.</p>
 * @public
 */
export interface FindMatchesMetrics {
  /**
   * <p>The area under the precision/recall curve (AUPRC) is a single number measuring the overall
   *       quality of the transform, that is independent of the choice made for precision vs. recall.
   *       Higher values indicate that you have a more attractive precision vs. recall tradeoff.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   * @public
   */
  AreaUnderPRCurve?: number | undefined;

  /**
   * <p>The precision metric indicates when often your transform is correct when it predicts a match. Specifically, it measures how well the transform finds true positives from the total true positives possible.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   * @public
   */
  Precision?: number | undefined;

  /**
   * <p>The recall metric indicates that for an actual match, how often your transform predicts
   *       the match. Specifically, it measures how well the transform finds true positives from the
   *       total records in the source data.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   * @public
   */
  Recall?: number | undefined;

  /**
   * <p>The maximum F1 metric indicates the transform's accuracy between 0 and 1, where 1 is the best accuracy.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/F1_score">F1 score</a> in Wikipedia.</p>
   * @public
   */
  F1?: number | undefined;

  /**
   * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
   * @public
   */
  ConfusionMatrix?: ConfusionMatrix | undefined;

  /**
   * <p>A list of <code>ColumnImportance</code> structures containing column importance metrics, sorted in order of descending importance.</p>
   * @public
   */
  ColumnImportances?: ColumnImportance[] | undefined;
}

/**
 * <p>Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
 * @public
 */
export interface EvaluationMetrics {
  /**
   * <p>The type of machine learning transform.</p>
   * @public
   */
  TransformType: TransformType | undefined;

  /**
   * <p>The evaluation metrics for the find matches algorithm.</p>
   * @public
   */
  FindMatchesMetrics?: FindMatchesMetrics | undefined;
}

/**
 * <p>A key-value pair representing a column and data type that this transform can
 *       run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.</p>
 * @public
 */
export interface SchemaColumn {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of data in the column.</p>
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface GetMLTransformResponse {
  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   * @public
   */
  TransformId?: string | undefined;

  /**
   * <p>The unique name given to the transform when it was created.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the transform.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   * @public
   */
  Status?: TransformStatusType | undefined;

  /**
   * <p>The date and time when the transform was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The date and time when the transform was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   * @public
   */
  InputRecordTables?: GlueTable[] | undefined;

  /**
   * <p>The configuration parameters that are specific to the algorithm used.</p>
   * @public
   */
  Parameters?: TransformParameters | undefined;

  /**
   * <p>The latest evaluation metrics.</p>
   * @public
   */
  EvaluationMetrics?: EvaluationMetrics | undefined;

  /**
   * <p>The number of labels available for this transform.</p>
   * @public
   */
  LabelCount?: number | undefined;

  /**
   * <p>The <code>Map<Column, Type></code> object that represents the schema that this
   *       transform accepts. Has an upper bound of 100 columns.</p>
   * @public
   */
  Schema?: SchemaColumn[] | undefined;

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

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   * @public
   */
  TransformEncryption?: TransformEncryption | undefined;
}
