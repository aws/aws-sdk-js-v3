// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AllowFullTableExternalDataAccessEnum,
  AuthenticationType,
  BlueprintRunState,
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
  DataFormat,
  DataOperation,
  DataQualityEncryptionMode,
  ExecutionStatus,
  FieldDataType,
  FieldFilterOperator,
  FilterMode,
  FunctionType,
  GlueResourceType,
  HTTPMethod,
  IcebergNullOrder,
  IcebergSortDirection,
  IcebergStructTypeEnum,
  IntegrationStatus,
  JobBookmarksEncryptionMode,
  Language,
  LastRefreshType,
  MetadataOperation,
  MLUserDataEncryptionModeString,
  PrincipalType,
  PropertyLocation,
  PropertyType,
  RegistryStatus,
  ResourceType,
  S3EncryptionMode,
  ScheduleType,
  SchemaStatus,
  SchemaVersionStatus,
  SessionStatus,
  SessionType,
  SettingSource,
  SubObjectSourceType,
  TableOptimizerType,
  TransformType,
  TriggerType,
  UnnestSpec,
  ViewDialect,
  WorkerType,
} from "./enums";
import type {
  Action,
  AssetFormEntry,
  AssetTypeFormReference,
  AuthConfiguration,
  AuthenticationConfiguration,
  AuthenticationConfigurationInput,
  Blueprint,
  Column,
  ConnectionsList,
  Crawler,
  CrawlerTargets,
  ErrorDetail,
  EventBatchingCondition,
  FederatedCatalog,
  GlueTable,
  LakeFormationConfiguration,
  LineageConfiguration,
  PartitionInput,
  Predicate,
  PrincipalPermissions,
  Property,
  RecrawlPolicy,
  Schedule,
  SchemaChangePolicy,
  SchemaId,
  StorageDescriptor,
  TableOptimizerConfiguration,
  TargetRedshiftCatalog,
} from "./models_0";

/**
 * @public
 */
export interface CreateCatalogResponse {}

/**
 * Specifies a custom CSV classifier for `CreateClassifier` to create.
 *
 * @public
 */
export interface CreateCsvClassifierRequest {
  /**
   * The name of the classifier.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A custom symbol to denote what separates each column entry in the row.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * A custom symbol to denote what combines content into a single column value. Must be different from the column delimiter.
   *
   * @public
   */
  QuoteSymbol?: string | undefined;

  /**
   * Indicates whether the CSV file contains a header.
   *
   * @public
   */
  ContainsHeader?: CsvHeaderOption | undefined;

  /**
   * A list of strings representing column names.
   *
   * @public
   */
  Header?: string[] | undefined;

  /**
   * Specifies not to trim values before identifying the type of column values. The default value is true.
   *
   * @public
   */
  DisableValueTrimming?: boolean | undefined;

  /**
   * Enables the processing of files that contain only one column.
   *
   * @public
   */
  AllowSingleColumn?: boolean | undefined;

  /**
   * Enables the configuration of custom datatypes.
   *
   * @public
   */
  CustomDatatypeConfigured?: boolean | undefined;

  /**
   * Creates a list of supported custom datatypes.
   *
   * @public
   */
  CustomDatatypes?: string[] | undefined;

  /**
   * Sets the SerDe for processing CSV in the classifier, which will be applied in the Data Catalog. Valid values are `OpenCSVSerDe`, `LazySimpleSerDe`, and `None`. You can specify the `None` value when you want the crawler to do the detection.
   *
   * @public
   */
  Serde?: CsvSerdeOption | undefined;
}

/**
 * Specifies a `grok` classifier for `CreateClassifier` to create.
 *
 * @public
 */
export interface CreateGrokClassifierRequest {
  /**
   * An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.
   *
   * @public
   */
  Classification: string | undefined;

  /**
   * The name of the new classifier.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The grok pattern used by this classifier.
   *
   * @public
   */
  GrokPattern: string | undefined;

  /**
   * Optional custom grok patterns used by this classifier.
   *
   * @public
   */
  CustomPatterns?: string | undefined;
}

/**
 * Specifies a JSON classifier for `CreateClassifier` to create.
 *
 * @public
 */
export interface CreateJsonClassifierRequest {
  /**
   * The name of the classifier.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A `JsonPath` string defining the JSON data for the classifier to classify. Glue supports a subset of JsonPath, as described in [Writing JsonPath Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json).
   *
   * @public
   */
  JsonPath: string | undefined;
}

/**
 * Specifies an XML classifier for `CreateClassifier` to create.
 *
 * @public
 */
export interface CreateXMLClassifierRequest {
  /**
   * An identifier of the data format that the classifier matches.
   *
   * @public
   */
  Classification: string | undefined;

  /**
   * The name of the classifier.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The XML tag designating the element that contains each record in an XML document being parsed. This can't identify a self-closing element (closed by `/>`). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, `<row item_a="A" item_b="B"></row>` is okay, but `<row item_a="A" item_b="B" />` is not).
   *
   * @public
   */
  RowTag?: string | undefined;
}

/**
 * @public
 */
export interface CreateClassifierRequest {
  /**
   * A `GrokClassifier` object specifying the classifier to create.
   *
   * @public
   */
  GrokClassifier?: CreateGrokClassifierRequest | undefined;

  /**
   * An `XMLClassifier` object specifying the classifier to create.
   *
   * @public
   */
  XMLClassifier?: CreateXMLClassifierRequest | undefined;

  /**
   * A `JsonClassifier` object specifying the classifier to create.
   *
   * @public
   */
  JsonClassifier?: CreateJsonClassifierRequest | undefined;

  /**
   * A `CsvClassifier` object specifying the classifier to create.
   *
   * @public
   */
  CsvClassifier?: CreateCsvClassifierRequest | undefined;
}

/**
 * @public
 */
export interface CreateClassifierResponse {}

/**
 * @public
 */
export interface CreateColumnStatisticsTaskSettingsRequest {
  /**
   * The name of the database where the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table for which to generate column statistics.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The role used for running the column statistics.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * A schedule for running the column statistics, specified in CRON syntax.
   *
   * @public
   */
  Schedule?: string | undefined;

  /**
   * A list of column names for which to run statistics.
   *
   * @public
   */
  ColumnNameList?: string[] | undefined;

  /**
   * The percentage of data to sample.
   *
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * The ID of the Data Catalog in which the database resides.
   *
   * @public
   */
  CatalogID?: string | undefined;

  /**
   * Name of the security configuration that is used to encrypt CloudWatch logs.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * A map of tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateColumnStatisticsTaskSettingsResponse {}

/**
 * The OAuth client app in GetConnection response.
 *
 * @public
 */
export interface PhysicalConnectionRequirements {
  /**
   * The subnet ID used by the connection.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The security group ID list used by the connection.
   *
   * @public
   */
  SecurityGroupIdList?: string[] | undefined;

  /**
   * The connection's Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * A structure that is used to specify a connection to create or update.
 *
 * @public
 */
export interface ConnectionInput {
  /**
   * The name of the connection.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the connection.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of the connection. Currently, these types are supported:
   *
   * - `JDBC` - Designates a connection to a database through Java Database Connectivity (JDBC).
   *
   *   `JDBC` Connections use the following ConnectionParameters.
   *
   *   - Required: All of (`HOST`, `PORT`, `JDBC_ENGINE`) or `JDBC_CONNECTION_URL`.
   *   - Required: All of (`USERNAME`, `PASSWORD`) or `SECRET_ID`.
   *   - Optional: `JDBC_ENFORCE_SSL`, `CUSTOM_JDBC_CERT`, `CUSTOM_JDBC_CERT_STRING`, `SKIP_CUSTOM_JDBC_CERT_VALIDATION`. These parameters are used to configure SSL with JDBC.
   * - `KAFKA` - Designates a connection to an Apache Kafka streaming platform.
   *
   *   `KAFKA` Connections use the following ConnectionParameters.
   *
   *   - Required: `KAFKA_BOOTSTRAP_SERVERS`.
   *   - Optional: `KAFKA_SSL_ENABLED`, `KAFKA_CUSTOM_CERT`, `KAFKA_SKIP_CUSTOM_CERT_VALIDATION`. These parameters are used to configure SSL with `KAFKA`.
   *   - Optional: `KAFKA_CLIENT_KEYSTORE`, `KAFKA_CLIENT_KEYSTORE_PASSWORD`, `KAFKA_CLIENT_KEY_PASSWORD`, `ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD`, `ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD`. These parameters are used to configure TLS client configuration with SSL in `KAFKA`.
   *   - Optional: `KAFKA_SASL_MECHANISM`. Can be specified as `SCRAM-SHA-512`, `GSSAPI`, or `AWS_MSK_IAM`.
   *   - Optional: `KAFKA_SASL_SCRAM_USERNAME`, `KAFKA_SASL_SCRAM_PASSWORD`, `ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD`. These parameters are used to configure SASL/SCRAM-SHA-512 authentication with `KAFKA`.
   *   - Optional: `KAFKA_SASL_GSSAPI_KEYTAB`, `KAFKA_SASL_GSSAPI_KRB5_CONF`, `KAFKA_SASL_GSSAPI_SERVICE`, `KAFKA_SASL_GSSAPI_PRINCIPAL`. These parameters are used to configure SASL/GSSAPI authentication with `KAFKA`.
   * - `MONGODB` - Designates a connection to a MongoDB document database.
   *
   *   `MONGODB` Connections use the following ConnectionParameters.
   *
   *   - Required: `CONNECTION_URL`.
   *   - Required: All of (`USERNAME`, `PASSWORD`) or `SECRET_ID`.
   * - `VIEW_VALIDATION_REDSHIFT` - Designates a connection used for view validation by Amazon Redshift.
   * - `VIEW_VALIDATION_ATHENA` - Designates a connection used for view validation by Amazon Athena.
   * - `NETWORK` - Designates a network connection to a data source within an Amazon Virtual Private Cloud environment (Amazon VPC).
   *
   *   `NETWORK` Connections do not require ConnectionParameters. Instead, provide a PhysicalConnectionRequirements.
   * - `MARKETPLACE` - Uses configuration settings contained in a connector purchased from Amazon Web Services Marketplace to read from and write to data stores that are not natively supported by Glue.
   *
   *   `MARKETPLACE` Connections use the following ConnectionParameters.
   *
   *   - Required: `CONNECTOR_TYPE`, `CONNECTOR_URL`, `CONNECTOR_CLASS_NAME`, `CONNECTION_URL`.
   *   - Required for `JDBC` `CONNECTOR_TYPE` connections: All of (`USERNAME`, `PASSWORD`) or `SECRET_ID`.
   * - `CUSTOM` - Uses configuration settings contained in a custom connector to read from and write to data stores that are not natively supported by Glue.
   *
   * For more information on the connection parameters needed for a particular connector, see the documentation for the connector in [Adding an Glue connection](https://docs.aws.amazon.com/glue/latest/dg/console-connections.html)in the Glue User Guide.
   *
   * `SFTP` is not supported.
   *
   * For more information about how optional ConnectionProperties are used to configure features in Glue, consult [Glue connection properties](https://docs.aws.amazon.com/glue/latest/dg/connection-defining.html).
   *
   * For more information about how optional ConnectionProperties are used to configure features in Glue Studio, consult [Using connectors and connections](https://docs.aws.amazon.com/glue/latest/ug/connectors-chapter.html).
   *
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * A list of criteria that can be used in selecting this connection.
   *
   * @public
   */
  MatchCriteria?: string[] | undefined;

  /**
   * These key-value pairs define parameters for the connection.
   *
   * @public
   */
  ConnectionProperties: Partial<Record<ConnectionPropertyKey, string>> | undefined;

  /**
   * Connection properties specific to the Spark compute environment.
   *
   * @public
   */
  SparkProperties?: Record<string, string> | undefined;

  /**
   * Connection properties specific to the Athena compute environment.
   *
   * @public
   */
  AthenaProperties?: Record<string, string> | undefined;

  /**
   * Connection properties specific to the Python compute environment.
   *
   * @public
   */
  PythonProperties?: Record<string, string> | undefined;

  /**
   * The physical connection requirements, such as virtual private cloud (VPC) and `SecurityGroup`, that are needed to successfully make this connection.
   *
   * @public
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;

  /**
   * The authentication properties of the connection.
   *
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfigurationInput | undefined;

  /**
   * A flag to validate the credentials during create connection. Default is true.
   *
   * @public
   */
  ValidateCredentials?: boolean | undefined;

  /**
   * The compute environments that the specified connection properties are validated against.
   *
   * @public
   */
  ValidateForComputeEnvironments?: ComputeEnvironment[] | undefined;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * The ID of the Data Catalog in which to create the connection. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A `ConnectionInput` object defining the connection to create.
   *
   * @public
   */
  ConnectionInput: ConnectionInput | undefined;

  /**
   * The tags you assign to the connection.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * The status of the connection creation request. The request can take some time for certain authentication types, for example when creating an OAuth connection with token exchange over VPC.
   *
   * @public
   */
  CreateConnectionStatus?: ConnectionStatus | undefined;
}

/**
 * @public
 */
export interface CreateCrawlerRequest {
  /**
   * Name of the new crawler.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The IAM role or Amazon Resource Name (ARN) of an IAM role used by the new crawler to access customer resources.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * The Glue database where results are written, such as: `arn:aws:daylight:us-east-1::database/sometable/*`.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * A description of the new crawler.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of collection of targets to crawl.
   *
   * @public
   */
  Targets: CrawlerTargets | undefined;

  /**
   * A `cron` expression used to specify the schedule (see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 * * ? *)`.
   *
   * @public
   */
  Schedule?: string | undefined;

  /**
   * A list of custom classifiers that the user has registered. By default, all built-in classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.
   *
   * @public
   */
  Classifiers?: string[] | undefined;

  /**
   * The table prefix used for catalog tables that are created.
   *
   * @public
   */
  TablePrefix?: string | undefined;

  /**
   * The policy for the crawler's update and deletion behavior.
   *
   * @public
   */
  SchemaChangePolicy?: SchemaChangePolicy | undefined;

  /**
   * A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.
   *
   * @public
   */
  RecrawlPolicy?: RecrawlPolicy | undefined;

  /**
   * Specifies data lineage configuration settings for the crawler.
   *
   * @public
   */
  LineageConfiguration?: LineageConfiguration | undefined;

  /**
   * Specifies Lake Formation configuration settings for the crawler.
   *
   * @public
   */
  LakeFormationConfiguration?: LakeFormationConfiguration | undefined;

  /**
   * Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. For more information, see [Setting crawler configuration options](https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html).
   *
   * @public
   */
  Configuration?: string | undefined;

  /**
   * The name of the `SecurityConfiguration` structure to be used by this crawler.
   *
   * @public
   */
  CrawlerSecurityConfiguration?: string | undefined;

  /**
   * The tags to use with this crawler request. You may use tags to limit access to the crawler. For more information about tags in Glue, see [Amazon Web Services Tags in Glue](https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html) in the developer guide.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The ID of the Data Catalog in which to store the crawler's output. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface CreateCrawlerResponse {}

/**
 * @public
 */
export interface CreateCustomEntityTypeRequest {
  /**
   * A name for the custom pattern that allows it to be retrieved or deleted later. This name must be unique per Amazon Web Services account.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A regular expression string that is used for detecting sensitive data in a custom pattern.
   *
   * @public
   */
  RegexString: string | undefined;

  /**
   * A list of context words. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.
   *
   * If no context words are passed only a regular expression is checked.
   *
   * @public
   */
  ContextWords?: string[] | undefined;

  /**
   * A list of tags applied to the custom entity type.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCustomEntityTypeResponse {
  /**
   * The name of the custom pattern you created.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * A database that points to an entity outside the Glue Data Catalog.
 *
 * @public
 */
export interface FederatedDatabase {
  /**
   * A unique identifier for the federated database.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * The name of the connection to the external metastore.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The type of connection used to access the federated database, such as JDBC, ODBC, or other supported connection protocols.
   *
   * @public
   */
  ConnectionType?: string | undefined;
}

/**
 * A structure that describes a target database for resource linking.
 *
 * @public
 */
export interface DatabaseIdentifier {
  /**
   * The ID of the Data Catalog in which the database resides.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Region of the target database.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * The structure used to create or update a database.
 *
 * @public
 */
export interface DatabaseInput {
  /**
   * The name of the database. For Hive compatibility, this is folded to lowercase when it is stored.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the database.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The location of the database (for example, an HDFS path).
   *
   * @public
   */
  LocationUri?: string | undefined;

  /**
   * These key-value pairs define parameters and properties of the database.
   *
   * These key-value pairs define parameters and properties of the database.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * Creates a set of default permissions on the table for principals. Used by Lake Formation. Not used in the normal course of Glue operations.
   *
   * @public
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * A `DatabaseIdentifier` structure that describes a target database for resource linking.
   *
   * @public
   */
  TargetDatabase?: DatabaseIdentifier | undefined;

  /**
   * A `FederatedDatabase` structure that references an entity outside the Glue Data Catalog.
   *
   * @public
   */
  FederatedDatabase?: FederatedDatabase | undefined;
}

/**
 * @public
 */
export interface CreateDatabaseRequest {
  /**
   * The ID of the Data Catalog in which to create the database. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The metadata for the database.
   *
   * @public
   */
  DatabaseInput: DatabaseInput | undefined;

  /**
   * The tags you assign to the database.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDatabaseResponse {}

/**
 * An object representing an Glue table.
 *
 * @public
 */
export interface DataQualityTargetTable {
  /**
   * The name of the Glue table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The name of the database where the Glue table exists.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The catalog id where the Glue table exists.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * A request to create a data quality ruleset.
 *
 * @public
 */
export interface CreateDataQualityRulesetRequest {
  /**
   * A unique name for the data quality ruleset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the data quality ruleset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.
   *
   * @public
   */
  Ruleset: string | undefined;

  /**
   * A list of tags applied to the data quality ruleset.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A target table associated with the data quality ruleset.
   *
   * @public
   */
  TargetTable?: DataQualityTargetTable | undefined;

  /**
   * The name of the security configuration created with the data quality encryption option.
   *
   * @public
   */
  DataQualitySecurityConfiguration?: string | undefined;

  /**
   * Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataQualityRulesetResponse {
  /**
   * A unique name for the data quality ruleset.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateDevEndpointRequest {
  /**
   * The name to be assigned to the new `DevEndpoint`.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The IAM role for the `DevEndpoint`.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Security group IDs for the security groups to be used by the new `DevEndpoint`.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The subnet ID for the new `DevEndpoint` to use.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The public key to be used by this `DevEndpoint` for authentication. This attribute is provided for backward compatibility because the recommended attribute to use is public keys.
   *
   * @public
   */
  PublicKey?: string | undefined;

  /**
   * A list of public keys to be used by the development endpoints for authentication. The use of this attribute is preferred over a single public key because the public keys allow you to have a different private key per client.
   *
   * > **Note:** If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys. Call the `UpdateDevEndpoint` API with the public key content in the `deletePublicKeys` attribute, and the list of new keys in the `addPublicKeys` attribute.
   *
   * @public
   */
  PublicKeys?: string[] | undefined;

  /**
   * The number of Glue Data Processing Units (DPUs) to allocate to this `DevEndpoint`.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.
   *
   * - For the `Standard` worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.
   * - For the `G.1X` worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.
   * - For the `G.2X` worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.
   *
   * Known issue: when a development endpoint is created with the `G.2X` `WorkerType` configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk.
   *
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints.
   *
   * For more information about the available Glue versions and corresponding Spark and Python versions, see [Glue version](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   *
   * Development endpoints that are created without specifying a Glue version default to Glue 0.9.
   *
   * You can specify a version of Python support for development endpoints by using the `Arguments` parameter in the `CreateDevEndpoint` or `UpdateDevEndpoint` APIs. If no arguments are provided, the version defaults to Python 2.
   *
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * The number of workers of a defined `workerType` that are allocated to the development endpoint.
   *
   * The maximum number of workers you can define are 299 for `G.1X`, and 149 for `G.2X`.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in your `DevEndpoint`. Multiple values must be complete paths separated by a comma.
   *
   * > **Note:** You can only use pure Python libraries with a `DevEndpoint`. Libraries that rely on C extensions, such as the [pandas](http://pandas.pydata.org/) Python data analysis library, are not yet supported.
   *
   * @public
   */
  ExtraPythonLibsS3Path?: string | undefined;

  /**
   * The path to one or more Java `.jar` files in an S3 bucket that should be loaded in your `DevEndpoint`.
   *
   * @public
   */
  ExtraJarsS3Path?: string | undefined;

  /**
   * The name of the `SecurityConfiguration` structure to be used with this `DevEndpoint`.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * The tags to use with this DevEndpoint. You may use tags to limit access to the DevEndpoint. For more information about tags in Glue, see [Amazon Web Services Tags in Glue](https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html) in the developer guide.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A map of arguments used to configure the `DevEndpoint`.
   *
   * @public
   */
  Arguments?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDevEndpointResponse {
  /**
   * The name assigned to the new `DevEndpoint`.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * The current status of the new `DevEndpoint`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The security groups assigned to the new `DevEndpoint`.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The subnet ID assigned to the new `DevEndpoint`.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role assigned to the new `DevEndpoint`.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The address of the YARN endpoint used by this `DevEndpoint`.
   *
   * @public
   */
  YarnEndpointAddress?: string | undefined;

  /**
   * The Apache Zeppelin port for the remote Apache Spark interpreter.
   *
   * @public
   */
  ZeppelinRemoteSparkInterpreterPort?: number | undefined;

  /**
   * The number of Glue Data Processing Units (DPUs) allocated to this DevEndpoint.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * The type of predefined worker that is allocated to the development endpoint. May be a value of Standard, G.1X, or G.2X.
   *
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints.
   *
   * For more information about the available Glue versions and corresponding Spark and Python versions, see [Glue version](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   *
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * The number of workers of a defined `workerType` that are allocated to the development endpoint.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The Amazon Web Services Availability Zone where this `DevEndpoint` is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the virtual private cloud (VPC) used by this `DevEndpoint`.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The paths to one or more Python libraries in an S3 bucket that will be loaded in your `DevEndpoint`.
   *
   * @public
   */
  ExtraPythonLibsS3Path?: string | undefined;

  /**
   * Path to one or more Java `.jar` files in an S3 bucket that will be loaded in your `DevEndpoint`.
   *
   * @public
   */
  ExtraJarsS3Path?: string | undefined;

  /**
   * The reason for a current failure in this `DevEndpoint`.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The name of the `SecurityConfiguration` structure being used with this `DevEndpoint`.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * The point in time at which this `DevEndpoint` was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The map of arguments used to configure this `DevEndpoint`.
   *
   * Valid arguments are:
   *
   * - `"--enable-glue-datacatalog": ""`
   *
   * You can specify a version of Python support for development endpoints by using the `Arguments` parameter in the `CreateDevEndpoint` or `UpdateDevEndpoint` APIs. If no arguments are provided, the version defaults to Python 2.
   *
   * @public
   */
  Arguments?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryRequest {
  /**
   * The name of the glossary.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the glossary.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryResponse {
  /**
   * The unique identifier of the glossary.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the glossary.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the glossary.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryTermRequest {
  /**
   * The unique identifier of the glossary in which to create the term.
   *
   * @public
   */
  GlossaryIdentifier: string | undefined;

  /**
   * The name of the glossary term.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A short description of the glossary term.
   *
   * @public
   */
  ShortDescription?: string | undefined;

  /**
   * A long description of the glossary term.
   *
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlossaryTermResponse {
  /**
   * The unique identifier of the glossary term.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The unique identifier of the glossary containing this term.
   *
   * @public
   */
  GlossaryId?: string | undefined;

  /**
   * The name of the glossary term.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The short description of the glossary term.
   *
   * @public
   */
  ShortDescription?: string | undefined;

  /**
   * The long description of the glossary term.
   *
   * @public
   */
  LongDescription?: string | undefined;
}

/**
 * Request to create a new Glue Identity Center configuration.
 *
 * @public
 */
export interface CreateGlueIdentityCenterConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the Identity Center instance to be associated with the Glue configuration.
   *
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * A list of Identity Center scopes that define the permissions and access levels for the Glue configuration.
   *
   * @public
   */
  Scopes?: string[] | undefined;

  /**
   * Specifies whether users can run background sessions when using Identity Center authentication with Glue services.
   *
   * @public
   */
  UserBackgroundSessionsEnabled?: boolean | undefined;
}

/**
 * Response from creating a new Glue Identity Center configuration.
 *
 * @public
 */
export interface CreateGlueIdentityCenterConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the Identity Center application that was created for the Glue configuration.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * Properties associated with the integration.
 *
 * @public
 */
export interface IntegrationConfig {
  /**
   * Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur. This parameter provides flexibility to align the refresh rate with your specific data update patterns, system load considerations, and performance optimization goals. Time increment can be set from 15 minutes to 8640 minutes (six days).
   *
   * @public
   */
  RefreshInterval?: string | undefined;

  /**
   * A collection of key-value pairs that specify additional properties for the integration source. These properties provide configuration options that can be used to customize the behavior of the ODB source during data integration operations.
   *
   * @public
   */
  SourceProperties?: Record<string, string> | undefined;

  /**
   * Enables continuous synchronization for on-demand data extractions from SaaS applications to Amazon Web Services data services like Amazon Redshift and Amazon S3.
   *
   * @public
   */
  ContinuousSync?: boolean | undefined;

  /**
   * An optional custom namespace for the integration's target. Supply this parameter only when the target is an Amazon S3 Tables table bucket; it is not accepted for other target types. The integration replicates data into the namespace you specify, reusing it if it already exists. If you omit this parameter, the target namespace defaults to `zetl_` followed by the integration ID, with hyphens converted to underscores.
   *
   * The value is immutable after the integration is created; `ModifyIntegration` rejects changes to it. It must be a valid Amazon S3 Tables namespace name: 1 to 255 characters using lowercase letters, numbers, and underscores, with no leading or trailing underscore and no reserved `aws` prefix.
   *
   * @public
   */
  TargetNamespace?: string | undefined;
}

/**
 * The `Tag` object represents a label that you can assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define.
 *
 * For more information about tags, and controlling access to resources in Glue, see [Amazon Web Services Tags in Glue](https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html) and [Specifying Glue Resource ARNs](https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html) in the developer guide.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key. The key is required when you create a tag on an object. The key is case-sensitive, and must not contain the prefix aws.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The tag value. The value is optional when you create a tag on an object. The value is case-sensitive, and must not contain the prefix aws.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationRequest {
  /**
   * A unique name for an integration in Glue.
   *
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * The ARN of the source resource for the integration.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The ARN of the target resource for the integration.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * A description of the integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Selects source tables for the integration using Maxwell filter syntax.
   *
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * The ARN of a KMS key used for encrypting the channel.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * An optional set of non-secret key–value pairs that contains additional contextual information for encryption. This can only be provided if `KMSKeyId` is provided.
   *
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * Metadata assigned to the resource consisting of a list of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The configuration settings.
   *
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;
}

/**
 * An error associated with a zero-ETL integration.
 *
 * @public
 */
export interface IntegrationError {
  /**
   * The code associated with this error.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A message describing the error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationResponse {
  /**
   * The ARN of the source resource for the integration.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The ARN of the target resource for the integration.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * A unique name for an integration in Glue.
   *
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * A description of the integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the created integration.
   *
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * The ARN of a KMS key used for encrypting the channel.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * An optional set of non-secret key–value pairs that contains additional contextual information for encryption.
   *
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * Metadata assigned to the resource consisting of a list of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The status of the integration being created.
   *
   * The possible statuses are:
   *
   * - CREATING: The integration is being created.
   * - ACTIVE: The integration creation succeeds.
   * - MODIFYING: The integration is being modified.
   * - FAILED: The integration creation fails.
   * - DELETING: The integration is deleted.
   * - SYNCING: The integration is synchronizing.
   * - NEEDS_ATTENTION: The integration needs attention, such as synchronization.
   *
   * @public
   */
  Status: IntegrationStatus | undefined;

  /**
   * The time when the integration was created, in UTC.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * A list of errors associated with the integration creation.
   *
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * Selects source tables for the integration using Maxwell filter syntax.
   *
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * The configuration settings.
   *
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;
}

/**
 * The resource properties associated with the integration source.
 *
 * @public
 */
export interface SourceProcessingProperties {
  /**
   * The IAM role to access the Glue connection.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * The resource properties associated with the integration target.
 *
 * @public
 */
export interface TargetProcessingProperties {
  /**
   * The IAM role to access the Glue database.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The ARN of the KMS key used for encryption.
   *
   * @public
   */
  KmsArn?: string | undefined;

  /**
   * The Glue network connection to configure the Glue job running in the customer VPC.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The ARN of an Eventbridge event bus to receive the integration status notification.
   *
   * @public
   */
  EventBusArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationResourcePropertyRequest {
  /**
   * The connection ARN of the source, or the database ARN of the target.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The resource properties associated with the integration source.
   *
   * @public
   */
  SourceProcessingProperties?: SourceProcessingProperties | undefined;

  /**
   * The resource properties associated with the integration target.
   *
   * @public
   */
  TargetProcessingProperties?: TargetProcessingProperties | undefined;

  /**
   * Metadata assigned to the resource consisting of a list of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationResourcePropertyResponse {
  /**
   * The connection ARN of the source, or the database ARN of the target.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The resource ARN created through this create API. The format is something like arn:aws:glue:<region>:<account_id>:integrationresourceproperty/*
   *
   * @public
   */
  ResourcePropertyArn?: string | undefined;

  /**
   * The resource properties associated with the integration source.
   *
   * @public
   */
  SourceProcessingProperties?: SourceProcessingProperties | undefined;

  /**
   * The resource properties associated with the integration target.
   *
   * @public
   */
  TargetProcessingProperties?: TargetProcessingProperties | undefined;
}

/**
 * Properties used by the source leg to process data from the source.
 *
 * @public
 */
export interface SourceTableConfig {
  /**
   * A list of fields used for column-level filtering. Currently unsupported.
   *
   * @public
   */
  Fields?: string[] | undefined;

  /**
   * A condition clause used for row-level filtering. Currently unsupported.
   *
   * @public
   */
  FilterPredicate?: string | undefined;

  /**
   * Provide the primary key set for this table. Currently supported specifically for SAP `EntityOf` entities upon request. Contact Amazon Web Services Support to make this feature available.
   *
   * @public
   */
  PrimaryKey?: string[] | undefined;

  /**
   * Incremental pull timestamp-based field. Currently unsupported.
   *
   * @public
   */
  RecordUpdateField?: string | undefined;
}

/**
 * A structure that describes how data is partitioned on the target.
 *
 * @public
 */
export interface IntegrationPartition {
  /**
   * The field name used to partition data on the target. Avoid using columns that have unique values for each row (for example, `LastModifiedTimestamp`, `SystemModTimeStamp`) as the partition column. These columns are not suitable for partitioning because they create a large number of small partitions, which can lead to performance issues.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * Specifies the function used to partition data on the target. The accepted values for this parameter are:
   *
   * - `identity` - Uses source values directly without transformation
   * - `year` - Extracts the year from timestamp values (e.g., 2023)
   * - `month` - Extracts the month from timestamp values (e.g., 2023-01)
   * - `day` - Extracts the day from timestamp values (e.g., 2023-01-15)
   * - `hour` - Extracts the hour from timestamp values (e.g., 2023-01-15-14)
   *
   * @public
   */
  FunctionSpec?: string | undefined;

  /**
   * Specifies the timestamp format of the source data. Valid values are:
   *
   * - `epoch_sec` - Unix epoch timestamp in seconds
   * - `epoch_milli` - Unix epoch timestamp in milliseconds
   * - `iso` - ISO 8601 formatted timestamp
   *
   * > **Note:**
   * >
   * > Only specify `ConversionSpec` when using timestamp-based partition functions (year, month, day, or hour). Glue Zero-ETL uses this parameter to correctly transform source data into timestamp format before partitioning.
   * >
   * > Do not use high-cardinality columns with the `identity` partition function. High-cardinality columns include:
   * >
   * > - Primary keys
   * > - Timestamp fields (such as `LastModifiedTimestamp`, `CreatedDate`)
   * > - System-generated timestamps
   * >
   * > Using high-cardinality columns with identity partitioning creates many small partitions, which can significantly degrade ingestion performance.
   *
   * @public
   */
  ConversionSpec?: string | undefined;
}

/**
 * Properties used by the target leg to partition the data on the target.
 *
 * @public
 */
export interface TargetTableConfig {
  /**
   * Specifies how nested objects are flattened to top-level elements. Valid values are: "TOPLEVEL", "FULL", or "NOUNNEST".
   *
   * @public
   */
  UnnestSpec?: UnnestSpec | undefined;

  /**
   * Determines the file layout on the target.
   *
   * @public
   */
  PartitionSpec?: IntegrationPartition[] | undefined;

  /**
   * The optional name of a target table.
   *
   * @public
   */
  TargetTableName?: string | undefined;

  /**
   * The ARN of the integration that owns this target table configuration.
   *
   * @public
   */
  IntegrationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationTablePropertiesRequest {
  /**
   * The Amazon Resource Name (ARN) of the target table for which to create integration table properties. Currently, this API only supports creating integration table properties for target tables, and the provided ARN should be the ARN of the target table in the Glue Data Catalog. Support for creating integration table properties for source connections (using the connection ARN) is not yet implemented and will be added in a future release.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The name of the table to be replicated.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A structure for the source table configuration. See the `SourceTableConfig` structure to see list of supported source properties.
   *
   * @public
   */
  SourceTableConfig?: SourceTableConfig | undefined;

  /**
   * A structure for the target table configuration.
   *
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
   * The unique name that was provided for this job definition.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The parameters to configure the find matches transform.
 *
 * @public
 */
export interface FindMatchesParameters {
  /**
   * The name of a column that uniquely identifies rows in the source table. Used to help identify matching records.
   *
   * @public
   */
  PrimaryKeyColumnName?: string | undefined;

  /**
   * The value selected when tuning your transform for a balance between precision and recall. A value of 0.5 means no preference; a value of 1.0 means a bias purely for precision, and a value of 0.0 means a bias for recall. Because this is a tradeoff, choosing values close to 1.0 means very low recall, and choosing values close to 0.0 results in very low precision.
   *
   * The precision metric indicates how often your model is correct when it predicts a match.
   *
   * The recall metric indicates that for an actual match, how often your model predicts the match.
   *
   * @public
   */
  PrecisionRecallTradeoff?: number | undefined;

  /**
   * The value that is selected when tuning your transform for a balance between accuracy and cost. A value of 0.5 means that the system balances accuracy and cost concerns. A value of 1.0 means a bias purely for accuracy, which typically results in a higher cost, sometimes substantially higher. A value of 0.0 means a bias purely for cost, which results in a less accurate `FindMatches` transform, sometimes with unacceptable accuracy.
   *
   * Accuracy measures how well the transform finds true positives and true negatives. Increasing accuracy requires more machine resources and cost. But it also results in increased recall.
   *
   * Cost measures how many compute resources, and thus money, are consumed to run the transform.
   *
   * @public
   */
  AccuracyCostTradeoff?: number | undefined;

  /**
   * The value to switch on or off to force the output to match the provided labels from users. If the value is `True`, the `find matches` transform forces the output to match the provided labels. The results override the normal conflation results. If the value is `False`, the `find matches` transform does not ensure all the labels provided are respected, and the results rely on the trained model.
   *
   * Note that setting this value to true may increase the conflation execution time.
   *
   * @public
   */
  EnforceProvidedLabels?: boolean | undefined;
}

/**
 * The algorithm-specific parameters that are associated with the machine learning transform.
 *
 * @public
 */
export interface TransformParameters {
  /**
   * The type of machine learning transform.
   *
   * For information about the types of machine learning transforms, see [Creating Machine Learning Transforms](https://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html).
   *
   * @public
   */
  TransformType: TransformType | undefined;

  /**
   * The parameters for the find matches algorithm.
   *
   * @public
   */
  FindMatchesParameters?: FindMatchesParameters | undefined;
}

/**
 * The encryption-at-rest settings of the transform that apply to accessing user data.
 *
 * @public
 */
export interface MLUserDataEncryption {
  /**
   * The encryption mode applied to user data. Valid values are:
   *
   * - DISABLED: encryption is disabled
   * - SSEKMS: use of server-side encryption with Key Management Service (SSE-KMS) for user data stored in Amazon S3.
   *
   * @public
   */
  MlUserDataEncryptionMode: MLUserDataEncryptionModeString | undefined;

  /**
   * The ID for the customer-provided KMS key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.
 *
 * Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.
 *
 * @public
 */
export interface TransformEncryption {
  /**
   * An `MLUserDataEncryption` object containing the encryption mode and customer-provided KMS key ID.
   *
   * @public
   */
  MlUserDataEncryption?: MLUserDataEncryption | undefined;

  /**
   * The name of the security configuration.
   *
   * @public
   */
  TaskRunSecurityConfigurationName?: string | undefined;
}

/**
 * @public
 */
export interface CreateMLTransformRequest {
  /**
   * The unique name that you give the transform when you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the machine learning transform that is being defined. The default is an empty string.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of Glue table definitions used by the transform.
   *
   * @public
   */
  InputRecordTables: GlueTable[] | undefined;

  /**
   * The algorithmic parameters that are specific to the transform type used. Conditionally dependent on the transform type.
   *
   * @public
   */
  Parameters: TransformParameters | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both Glue service role permissions to Glue resources, and Amazon S3 permissions required by the transform.
   *
   * - This role needs Glue service role permissions to allow access to resources in Glue. See [Attach a Policy to IAM Users That Access Glue](https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html).
   * - This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see [Glue Versions](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions) in the developer guide.
   *
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [Glue pricing page](https://aws.amazon.com/glue/pricing/).
   *
   * `MaxCapacity` is a mutually exclusive option with `NumberOfWorkers` and `WorkerType`.
   *
   * - If either `NumberOfWorkers` or `WorkerType` is set, then `MaxCapacity` cannot be set.
   * - If `MaxCapacity` is set then neither `NumberOfWorkers` or `WorkerType` can be set.
   * - If `WorkerType` is set, then `NumberOfWorkers` is required (and vice versa).
   * - `MaxCapacity` and `NumberOfWorkers` must both be at least 1.
   *
   * When the `WorkerType` field is set to a value other than `Standard`, the `MaxCapacity` field is set automatically and becomes read-only.
   *
   * When the `WorkerType` field is set to a value other than `Standard`, the `MaxCapacity` field is set automatically and becomes read-only.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.
   *
   * - For the `Standard` worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.
   * - For the `G.1X` worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.
   * - For the `G.2X` worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.
   *
   * `MaxCapacity` is a mutually exclusive option with `NumberOfWorkers` and `WorkerType`.
   *
   * - If either `NumberOfWorkers` or `WorkerType` is set, then `MaxCapacity` cannot be set.
   * - If `MaxCapacity` is set then neither `NumberOfWorkers` or `WorkerType` can be set.
   * - If `WorkerType` is set, then `NumberOfWorkers` is required (and vice versa).
   * - `MaxCapacity` and `NumberOfWorkers` must both be at least 1.
   *
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * The number of workers of a defined `workerType` that are allocated when this task runs.
   *
   * If `WorkerType` is set, then `NumberOfWorkers` is required (and vice versa).
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The timeout of the task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters `TIMEOUT` status. The default is 2,880 minutes (48 hours).
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The maximum number of times to retry a task for this transform after a task run fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * The tags to use with this machine learning transform. You may use tags to limit access to the machine learning transform. For more information about tags in Glue, see [Amazon Web Services Tags in Glue](https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html) in the developer guide.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.
   *
   * @public
   */
  TransformEncryption?: TransformEncryption | undefined;
}

/**
 * @public
 */
export interface CreateMLTransformResponse {
  /**
   * A unique identifier that is generated for the transform.
   *
   * @public
   */
  TransformId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePartitionRequest {
  /**
   * The Amazon Web Services account ID of the catalog in which the partition is to be created.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the metadata database in which the partition is to be created.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the metadata table in which the partition is to be created.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A `PartitionInput` structure defining the partition to be created.
   *
   * @public
   */
  PartitionInput: PartitionInput | undefined;
}

/**
 * @public
 */
export interface CreatePartitionResponse {}

/**
 * A structure for a partition index.
 *
 * @public
 */
export interface PartitionIndex {
  /**
   * The keys for the partition index.
   *
   * @public
   */
  Keys: string[] | undefined;

  /**
   * The name of the partition index.
   *
   * @public
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface CreatePartitionIndexRequest {
  /**
   * The catalog ID where the table resides.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * Specifies the name of a database in which you want to create a partition index.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * Specifies the name of a table in which you want to create a partition index.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Specifies a `PartitionIndex` structure to create a partition index in an existing table.
   *
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
   * Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark. No whitespace.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * A description of the registry. If description is not provided, there will not be any default value for this.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * The Amazon Resource Name (ARN) of the newly created registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * A description of the registry.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags for the registry.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).
 *
 * @public
 */
export interface RegistryId {
  /**
   * Name of the registry. Used only for lookup. One of `RegistryArn` or `RegistryName` has to be provided.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * Arn of the registry to be updated. One of `RegistryArn` or `RegistryName` has to be provided.
   *
   * @public
   */
  RegistryArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSchemaInput {
  /**
   * This is a wrapper shape to contain the registry identity fields. If this is not provided, the default registry will be used. The ARN format for the same will be: `arn:aws:glue:us-east-2:<customer id>:registry/default-registry:random-5-letter-id`.
   *
   * @public
   */
  RegistryId?: RegistryId | undefined;

  /**
   * Name of the schema to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark. No whitespace.
   *
   * @public
   */
  SchemaName: string | undefined;

  /**
   * The data format of the schema definition. Currently `AVRO`, `JSON` and `PROTOBUF` are supported.
   *
   * @public
   */
  DataFormat: DataFormat | undefined;

  /**
   * The compatibility mode of the schema. The possible values are:
   *
   * - *NONE*: No compatibility mode applies. You can use this choice in development scenarios or if you do not know the compatibility mode that you want to apply to schemas. Any new version added will be accepted without undergoing a compatibility check.
   * - *DISABLED*: This compatibility choice prevents versioning for a particular schema. You can use this choice to prevent future versioning of a schema.
   * - *BACKWARD*: This compatibility choice is recommended as it allows data receivers to read both the current and one previous schema version. This means that for instance, a new schema version cannot drop data fields or change the type of these fields, so they can't be read by readers using the previous version.
   * - *BACKWARD_ALL*: This compatibility choice allows data receivers to read both the current and all previous schema versions. You can use this choice when you need to delete fields or add optional fields, and check compatibility against all previous schema versions.
   * - *FORWARD*: This compatibility choice allows data receivers to read both the current and one next schema version, but not necessarily later versions. You can use this choice when you need to add fields or delete optional fields, but only check compatibility against the last schema version.
   * - *FORWARD_ALL*: This compatibility choice allows data receivers to read written by producers of any new registered schema. You can use this choice when you need to add fields or delete optional fields, and check compatibility against all previous schema versions.
   * - *FULL*: This compatibility choice allows data receivers to read data written by producers using the previous or next version of the schema, but not necessarily earlier or later versions. You can use this choice when you need to add or remove optional fields, but only check compatibility against the last schema version.
   * - *FULL_ALL*: This compatibility choice allows data receivers to read data written by producers using all previous schema versions. You can use this choice when you need to add or remove optional fields, and check compatibility against all previous schema versions.
   *
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * An optional description of the schema. If description is not provided, there will not be any automatic default value for this.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API. If specified, follows the Amazon Web Services tags-on-create pattern.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The schema definition using the `DataFormat` setting for `SchemaName`.
   *
   * @public
   */
  SchemaDefinition?: string | undefined;
}

/**
 * @public
 */
export interface CreateSchemaResponse {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * A description of the schema if specified when created.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The data format of the schema definition. Currently `AVRO`, `JSON` and `PROTOBUF` are supported.
   *
   * @public
   */
  DataFormat?: DataFormat | undefined;

  /**
   * The schema compatibility mode.
   *
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * The version number of the checkpoint (the last time the compatibility mode was changed).
   *
   * @public
   */
  SchemaCheckpoint?: number | undefined;

  /**
   * The latest version of the schema associated with the returned schema definition.
   *
   * @public
   */
  LatestSchemaVersion?: number | undefined;

  /**
   * The next version of the schema associated with the returned schema definition.
   *
   * @public
   */
  NextSchemaVersion?: number | undefined;

  /**
   * The status of the schema.
   *
   * @public
   */
  SchemaStatus?: SchemaStatus | undefined;

  /**
   * The tags for the schema.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The unique identifier of the first schema version.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * The status of the first schema version created.
   *
   * @public
   */
  SchemaVersionStatus?: SchemaVersionStatus | undefined;
}

/**
 * Represents a directional edge in a directed acyclic graph (DAG).
 *
 * @public
 */
export interface CodeGenEdge {
  /**
   * The ID of the node at which the edge starts.
   *
   * @public
   */
  Source: string | undefined;

  /**
   * The ID of the node at which the edge ends.
   *
   * @public
   */
  Target: string | undefined;

  /**
   * The target of the edge.
   *
   * @public
   */
  TargetParameter?: string | undefined;
}

/**
 * An argument or property of a node.
 *
 * @public
 */
export interface CodeGenNodeArg {
  /**
   * The name of the argument or property.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the argument or property.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * True if the value is used as a parameter.
   *
   * @public
   */
  Param?: boolean | undefined;
}

/**
 * Represents a node in a directed acyclic graph (DAG)
 *
 * @public
 */
export interface CodeGenNode {
  /**
   * A node identifier that is unique within the node's graph.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of node that this is.
   *
   * @public
   */
  NodeType: string | undefined;

  /**
   * Properties of the node, in the form of name-value pairs.
   *
   * @public
   */
  Args: CodeGenNodeArg[] | undefined;

  /**
   * The line number of the node.
   *
   * @public
   */
  LineNumber?: number | undefined;
}

/**
 * @public
 */
export interface CreateScriptRequest {
  /**
   * A list of the nodes in the DAG.
   *
   * @public
   */
  DagNodes?: CodeGenNode[] | undefined;

  /**
   * A list of the edges in the DAG.
   *
   * @public
   */
  DagEdges?: CodeGenEdge[] | undefined;

  /**
   * The programming language of the resulting code from the DAG.
   *
   * @public
   */
  Language?: Language | undefined;
}

/**
 * @public
 */
export interface CreateScriptResponse {
  /**
   * The Python script generated from the DAG.
   *
   * @public
   */
  PythonScript?: string | undefined;

  /**
   * The Scala code generated from the DAG.
   *
   * @public
   */
  ScalaCode?: string | undefined;
}

/**
 * Specifies how Amazon CloudWatch data should be encrypted.
 *
 * @public
 */
export interface CloudWatchEncryption {
  /**
   * The encryption mode to use for CloudWatch data.
   *
   * @public
   */
  CloudWatchEncryptionMode?: CloudWatchEncryptionMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * Specifies how Data Quality assets in your account should be encrypted.
 *
 * @public
 */
export interface DataQualityEncryption {
  /**
   * The encryption mode to use for encrypting Data Quality assets. These assets include data quality rulesets, results, statistics, anomaly detection models and observations.
   *
   * Valid values are `SSEKMS` for encryption using a customer-managed KMS key, or `DISABLED`.
   *
   * @public
   */
  DataQualityEncryptionMode?: DataQualityEncryptionMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * Specifies how job bookmark data should be encrypted.
 *
 * @public
 */
export interface JobBookmarksEncryption {
  /**
   * The encryption mode to use for job bookmarks data.
   *
   * @public
   */
  JobBookmarksEncryptionMode?: JobBookmarksEncryptionMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
 *
 * @public
 */
export interface S3Encryption {
  /**
   * The encryption mode to use for Amazon S3 data.
   *
   * @public
   */
  S3EncryptionMode?: S3EncryptionMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * Specifies an encryption configuration.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * The encryption configuration for Amazon Simple Storage Service (Amazon S3) data.
   *
   * @public
   */
  S3Encryption?: S3Encryption[] | undefined;

  /**
   * The encryption configuration for Amazon CloudWatch.
   *
   * @public
   */
  CloudWatchEncryption?: CloudWatchEncryption | undefined;

  /**
   * The encryption configuration for job bookmarks.
   *
   * @public
   */
  JobBookmarksEncryption?: JobBookmarksEncryption | undefined;

  /**
   * The encryption configuration for Glue Data Quality assets.
   *
   * @public
   */
  DataQualityEncryption?: DataQualityEncryption | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationRequest {
  /**
   * The name for the new security configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The encryption configuration for the new security configuration.
   *
   * @public
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationResponse {
  /**
   * The name assigned to the new security configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time at which the new security configuration was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * The `SessionCommand` that runs the job.
 *
 * @public
 */
export interface SessionCommand {
  /**
   * Specifies the name of the SessionCommand. Can be 'glueetl' or 'gluestreaming'.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the Python version. The Python version indicates the version supported for jobs of type Spark.
   *
   * @public
   */
  PythonVersion?: string | undefined;
}

/**
 * Request to create a new session.
 *
 * @public
 */
export interface CreateSessionRequest {
  /**
   * The ID of the session request.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The description of the session.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IAM Role ARN
   *
   * @public
   */
  Role: string | undefined;

  /**
   * The `SessionCommand` that runs the job.
   *
   * @public
   */
  Command: SessionCommand | undefined;

  /**
   * The number of minutes before session times out. Default for Spark ETL jobs is 48 hours (2880 minutes). Consult the documentation for other job types.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The number of minutes when idle before session times out. Default for Spark ETL jobs is value of Timeout. Consult the documentation for other job types.
   *
   * @public
   */
  IdleTimeout?: number | undefined;

  /**
   * A map array of key-value pairs. Max is 75 pairs.
   *
   * @public
   */
  DefaultArguments?: Record<string, string> | undefined;

  /**
   * The number of connections to use for the session.
   *
   * @public
   */
  Connections?: ConnectionsList | undefined;

  /**
   * The number of Glue data processing units (DPUs) that can be allocated when the job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The number of workers of a defined `WorkerType` to use for the session.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The type of predefined worker that is allocated when a job runs. Accepts a value of G.1X, G.2X, G.4X, G.8X, G.12X, G.16X, R.1X, R.2X, R.4X, or R.8X for Spark jobs. Accepts the value Z.2X for Ray notebooks.
   *
   * - For the `G.1X` worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 94GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.
   * - For the `G.2X` worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 138GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.
   * - For the `G.4X` worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in select Amazon Web Services Regions. For the supported Regions, see [Configuring job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   * - For the `G.8X` worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in select Amazon Web Services Regions. For the supported Regions, see [Configuring job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   * - For the `G.12X` worker type, each worker maps to 12 DPU (48 vCPUs, 192 GB of memory) with 768GB disk, and provides 1 executor per worker. We recommend this worker type for jobs with very large workloads. This worker type is available only for Glue version 4.0 or later Spark ETL jobs in select Amazon Web Services Regions. For the supported Regions, see [Configuring job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   * - For the `G.16X` worker type, each worker maps to 16 DPU (64 vCPUs, 256 GB of memory) with 1024GB disk, and provides 1 executor per worker. We recommend this worker type for jobs with very large workloads. This worker type is available only for Glue version 4.0 or later Spark ETL jobs in select Amazon Web Services Regions. For the supported Regions, see [Configuring job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   * - For the `R.1X` worker type, each worker maps to 1 M-DPU (4 vCPUs, 32 GB of memory) with 94GB disk, and provides 1 executor per worker. We recommend this worker type for memory-intensive workloads. This worker type is available only for Glue version 4.0 or later Spark ETL jobs in select Amazon Web Services Regions. For the supported Regions, see [Configuring job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   * - For the `R.2X` worker type, each worker maps to 2 M-DPU (8 vCPUs, 64 GB of memory) with 138GB disk, and provides 1 executor per worker. We recommend this worker type for memory-intensive workloads. This worker type is available only for Glue version 4.0 or later Spark ETL jobs in select Amazon Web Services Regions. For the supported Regions, see [Configuring job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   * - For the `R.4X` worker type, each worker maps to 4 M-DPU (16 vCPUs, 128 GB of memory) with 256GB disk, and provides 1 executor per worker. We recommend this worker type for memory-intensive workloads. This worker type is available only for Glue version 4.0 or later Spark ETL jobs in select Amazon Web Services Regions. For the supported Regions, see [Configuring job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   * - For the `R.8X` worker type, each worker maps to 8 M-DPU (32 vCPUs, 256 GB of memory) with 512GB disk, and provides 1 executor per worker. We recommend this worker type for memory-intensive workloads. This worker type is available only for Glue version 4.0 or later Spark ETL jobs in select Amazon Web Services Regions. For the supported Regions, see [Configuring job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   * - For the `Z.2X` worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk, and provides up to 8 Ray workers based on the autoscaler.
   *
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * The name of the SecurityConfiguration structure to be used with the session
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * The Glue version determines the versions of Apache Spark and Python that Glue supports. The GlueVersion must be greater than 2.0.
   *
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * The map of key value pairs (tags) belonging to the session.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The origin of the request.
   *
   * @public
   */
  RequestOrigin?: string | undefined;

  /**
   * The type of session to create.
   *
   * @public
   */
  SessionType?: SessionType | undefined;
}

/**
 * The period in which a remote Spark runtime environment is running.
 *
 * @public
 */
export interface Session {
  /**
   * The ID of the session.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The time and date when the session was created.
   *
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * The session status.
   *
   * @public
   */
  Status?: SessionStatus | undefined;

  /**
   * The error message displayed during the session.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The description of the session.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role associated with the Session.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The command object.See SessionCommand.
   *
   * @public
   */
  Command?: SessionCommand | undefined;

  /**
   * A map array of key-value pairs. Max is 75 pairs.
   *
   * @public
   */
  DefaultArguments?: Record<string, string> | undefined;

  /**
   * The number of connections used for the session.
   *
   * @public
   */
  Connections?: ConnectionsList | undefined;

  /**
   * The code execution progress of the session.
   *
   * @public
   */
  Progress?: number | undefined;

  /**
   * The number of Glue data processing units (DPUs) that can be allocated when the job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The name of the SecurityConfiguration structure to be used with the session.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * The Glue version determines the versions of Apache Spark and Python that Glue supports. The GlueVersion must be greater than 2.0.
   *
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * The number of workers of a defined `WorkerType` to use for the session.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The type of predefined worker that is allocated when a session runs. Accepts a value of `G.1X`, `G.2X`, `G.4X`, `G.8X`, `G.12X`, `G.16X`, `R.1X`, `R.2X`, `R.4X`, or `R.8X` for Spark sessions. Accepts the value `Z.2X` for Ray sessions.
   *
   * The `G.12X`, `G.16X`, and `R.1X` through `R.8X` worker types are available only for Glue version 4.0 or later Spark ETL jobs in select Amazon Web Services Regions. For the supported Regions, see [Configuring job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   *
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * The date and time that this session is completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The total time the session ran for.
   *
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * The DPUs consumed by the session (formula: ExecutionTime * MaxCapacity).
   *
   * @public
   */
  DPUSeconds?: number | undefined;

  /**
   * The number of minutes when idle before the session times out.
   *
   * @public
   */
  IdleTimeout?: number | undefined;

  /**
   * The name of an Glue usage profile associated with the session.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * The type of the session.
   *
   * @public
   */
  SessionType?: SessionType | undefined;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * Returns the session object in the response.
   *
   * @public
   */
  Session?: Session | undefined;
}

/**
 * Defines a single partition field within an Iceberg partition specification, including the source field, transformation function, partition name, and unique identifier.
 *
 * @public
 */
export interface IcebergPartitionField {
  /**
   * The identifier of the source field from the table schema that this partition field is based on.
   *
   * @public
   */
  SourceId: number | undefined;

  /**
   * The transformation function applied to the source field to create the partition, such as identity, bucket, truncate, year, month, day, or hour.
   *
   * @public
   */
  Transform: string | undefined;

  /**
   * The name of the partition field as it will appear in the partitioned table structure.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier assigned to this partition field within the Iceberg table's partition specification.
   *
   * @public
   */
  FieldId?: number | undefined;
}

/**
 * Defines the partitioning specification for an Iceberg table, determining how table data will be organized and partitioned for optimal query performance.
 *
 * @public
 */
export interface IcebergPartitionSpec {
  /**
   * The list of partition fields that define how the table data should be partitioned, including source fields and their transformations.
   *
   * @public
   */
  Fields: IcebergPartitionField[] | undefined;

  /**
   * The unique identifier for this partition specification within the Iceberg table's metadata history.
   *
   * @public
   */
  SpecId?: number | undefined;
}

/**
 * Defines a single field within an Iceberg table schema, including its identifier, name, data type, nullability, and documentation.
 *
 * @public
 */
export interface IcebergStructField {
  /**
   * The unique identifier assigned to this field within the Iceberg table schema, used for schema evolution and field tracking.
   *
   * @public
   */
  Id: number | undefined;

  /**
   * The name of the field as it appears in the table schema and query operations.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data type definition for this field, specifying the structure and format of the data it contains.
   *
   * @public
   */
  Type: __DocumentType | undefined;

  /**
   * Indicates whether this field is required (non-nullable) or optional (nullable) in the table schema.
   *
   * @public
   */
  Required: boolean | undefined;

  /**
   * Optional documentation or description text that provides additional context about the purpose and usage of this field.
   *
   * @public
   */
  Doc?: string | undefined;

  /**
   * Default value used to populate the field's value for all records that were written before the field was added to the schema. This enables backward compatibility when adding new fields to existing Iceberg tables.
   *
   * @public
   */
  InitialDefault?: __DocumentType | undefined;

  /**
   * Default value used to populate the field's value for any records written after the field was added to the schema, if the writer does not supply the field's value. This can be changed through schema evolution.
   *
   * @public
   */
  WriteDefault?: __DocumentType | undefined;
}

/**
 * Defines the schema structure for an Iceberg table, including field definitions, data types, and schema metadata.
 *
 * @public
 */
export interface IcebergSchema {
  /**
   * The unique identifier for this schema version within the Iceberg table's schema evolution history.
   *
   * @public
   */
  SchemaId?: number | undefined;

  /**
   * The list of field identifiers that uniquely identify records in the table, used for row-level operations and deduplication.
   *
   * @public
   */
  IdentifierFieldIds?: number[] | undefined;

  /**
   * The root type of the schema structure, typically "struct" for Iceberg table schemas.
   *
   * @public
   */
  Type?: IcebergStructTypeEnum | undefined;

  /**
   * The list of field definitions that make up the table schema, including field names, types, and metadata.
   *
   * @public
   */
  Fields: IcebergStructField[] | undefined;
}

/**
 * Defines a single field within an Iceberg sort order specification, including the source field, transformation, sort direction, and null value ordering.
 *
 * @public
 */
export interface IcebergSortField {
  /**
   * The identifier of the source field from the table schema that this sort field is based on.
   *
   * @public
   */
  SourceId: number | undefined;

  /**
   * The transformation function applied to the source field before sorting, such as identity, bucket, or truncate.
   *
   * @public
   */
  Transform: string | undefined;

  /**
   * The sort direction for this field, either ascending or descending.
   *
   * @public
   */
  Direction: IcebergSortDirection | undefined;

  /**
   * The ordering behavior for null values in this field, specifying whether nulls should appear first or last in the sort order.
   *
   * @public
   */
  NullOrder: IcebergNullOrder | undefined;
}

/**
 * Defines the sort order specification for an Iceberg table, determining how data should be ordered within partitions to optimize query performance.
 *
 * @public
 */
export interface IcebergSortOrder {
  /**
   * The unique identifier for this sort order specification within the Iceberg table's metadata.
   *
   * @public
   */
  OrderId: number | undefined;

  /**
   * The list of fields and their sort directions that define the ordering criteria for the Iceberg table data.
   *
   * @public
   */
  Fields: IcebergSortField[] | undefined;
}

/**
 * The configuration parameters required to create a new Iceberg table in the Glue Data Catalog, including table properties and metadata specifications.
 *
 * @public
 */
export interface CreateIcebergTableInput {
  /**
   * The S3 location where the Iceberg table data will be stored.
   *
   * @public
   */
  Location: string | undefined;

  /**
   * The schema definition that specifies the structure, field types, and metadata for the Iceberg table.
   *
   * @public
   */
  Schema: IcebergSchema | undefined;

  /**
   * The partitioning specification that defines how the Iceberg table data will be organized and partitioned for optimal query performance.
   *
   * @public
   */
  PartitionSpec?: IcebergPartitionSpec | undefined;

  /**
   * The sort order specification that defines how data should be ordered within each partition to optimize query performance.
   *
   * @public
   */
  WriteOrder?: IcebergSortOrder | undefined;

  /**
   * Key-value pairs of additional table properties and configuration settings for the Iceberg table.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;
}

/**
 * A structure that defines an Apache Iceberg metadata table to create in the catalog.
 *
 * @public
 */
export interface IcebergInput {
  /**
   * A required metadata operation. Can only be set to `CREATE`.
   *
   * @public
   */
  MetadataOperation: MetadataOperation | undefined;

  /**
   * The table version for the Iceberg table. Defaults to 2.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The configuration parameters required to create a new Iceberg table in the Glue Data Catalog, including table properties and metadata specifications.
   *
   * @public
   */
  CreateIcebergTableInput?: CreateIcebergTableInput | undefined;
}

/**
 * A structure representing an open format table.
 *
 * @public
 */
export interface OpenTableFormatInput {
  /**
   * Specifies an `IcebergInput` structure that defines an Apache Iceberg metadata table.
   *
   * @public
   */
  IcebergInput?: IcebergInput | undefined;
}

/**
 * A table that points to an entity outside the Glue Data Catalog.
 *
 * @public
 */
export interface FederatedTable {
  /**
   * A unique identifier for the federated table.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * A unique identifier for the federated database.
   *
   * @public
   */
  DatabaseIdentifier?: string | undefined;

  /**
   * The name of the connection to the external metastore.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The type of connection used to access the federated table, specifying the protocol or method for connecting to the external data source.
   *
   * @public
   */
  ConnectionType?: string | undefined;
}

/**
 * A structure that describes a target table for resource linking.
 *
 * @public
 */
export interface TableIdentifier {
  /**
   * The ID of the Data Catalog in which the table resides.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database that contains the target table.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the target table.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Region of the target table.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * A structure containing details of a representation to update or create a Lake Formation view.
 *
 * @public
 */
export interface ViewRepresentationInput {
  /**
   * A parameter that specifies the engine type of a specific representation.
   *
   * @public
   */
  Dialect?: ViewDialect | undefined;

  /**
   * A parameter that specifies the version of the engine of a specific representation.
   *
   * @public
   */
  DialectVersion?: string | undefined;

  /**
   * A string that represents the original SQL query that describes the view.
   *
   * @public
   */
  ViewOriginalText?: string | undefined;

  /**
   * The name of the connection to be used to validate the specific representation of the view.
   *
   * @public
   */
  ValidationConnection?: string | undefined;

  /**
   * A string that represents the SQL query that describes the view with expanded resource ARNs
   *
   * @public
   */
  ViewExpandedText?: string | undefined;
}

/**
 * Statistics for one sub-object referenced by a materialized view, recorded when the materialized view was created or last fully refreshed. These values describe what that refresh selected from the sub-object, which can be a subset of the table when the materialized view's definition limits the data it reads. The fields present depend on the sub-object's format.
 *
 * @public
 */
export interface SubObjectStatistics {
  /**
   * The source type of the sub-object (for example, its table format), which identifies the sub-object.
   *
   * @public
   */
  SourceType?: SubObjectSourceType | undefined;

  /**
   * The Glue version ID of the sub-object that the statistics were captured for.
   *
   * @public
   */
  GlueVersionId?: string | undefined;

  /**
   * The number of sub-object partitions selected for that refresh. Not present for unpartitioned sub-objects.
   *
   * @public
   */
  PartitionCount?: number | undefined;

  /**
   * The number of sub-object data files selected for that refresh.
   *
   * @public
   */
  FileCount?: number | undefined;

  /**
   * The total size, in bytes, of the data files counted by `FileCount`.
   *
   * @public
   */
  TotalFileBytes?: number | undefined;
}

/**
 * A structure containing details for creating or updating an Glue view.
 *
 * @public
 */
export interface ViewDefinitionInput {
  /**
   * You can set this flag as true to instruct the engine not to push user-provided operations into the logical plan of the view during query planning. However, setting this flag does not guarantee that the engine will comply. Refer to the engine's documentation to understand the guarantees provided, if any.
   *
   * @public
   */
  IsProtected?: boolean | undefined;

  /**
   * Specifies whether the materialized view is managed by Glue.
   *
   * @public
   */
  IsManaged?: boolean | undefined;

  /**
   * The definer of a view in SQL.
   *
   * @public
   */
  Definer?: string | undefined;

  /**
   * A list of structures that contains the dialect of the view, and the query that defines the view.
   *
   * @public
   */
  Representations?: ViewRepresentationInput[] | undefined;

  /**
   * The ID value that identifies this view's version. For materialized views, the version ID is the Apache Iceberg table's snapshot ID.
   *
   * @public
   */
  ViewVersionId?: number | undefined;

  /**
   * The version ID of the Apache Iceberg table.
   *
   * @public
   */
  ViewVersionToken?: string | undefined;

  /**
   * Auto refresh interval in seconds for the materialized view. If not specified, the view will not automatically refresh.
   *
   * @public
   */
  RefreshSeconds?: number | undefined;

  /**
   * The type of the materialized view's last refresh. Valid values: `Full`, `Incremental`.
   *
   * @public
   */
  LastRefreshType?: LastRefreshType | undefined;

  /**
   * A list of base table ARNs that make up the view.
   *
   * @public
   */
  SubObjects?: string[] | undefined;

  /**
   * List of the Apache Iceberg table versions referenced by the materialized view.
   *
   * @public
   */
  SubObjectVersionIds?: number[] | undefined;

  /**
   * Statistics for each sub-object referenced by the materialized view, such as the source type, Glue version ID, and the partition, file, and byte counts. Each entry describes one sub-object, identified by its source type.
   *
   * @public
   */
  SubObjectsStatistics?: SubObjectStatistics[] | undefined;

  /**
   * A map of key-value pairs containing Spark Declarative Pipelines (SDP) information for the materialized view.
   *
   * @public
   */
  SparkPipelineInfo?: Record<string, string> | undefined;
}

/**
 * A structure used to define a table.
 *
 * @public
 */
export interface TableInput {
  /**
   * The table name. For Hive compatibility, this is folded to lowercase when it is stored.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the table.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The table owner. Included for Apache Hive compatibility. Not used in the normal course of Glue operations.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The last time that the table was accessed.
   *
   * @public
   */
  LastAccessTime?: Date | undefined;

  /**
   * The last time that column statistics were computed for this table.
   *
   * @public
   */
  LastAnalyzedTime?: Date | undefined;

  /**
   * The retention time for this table.
   *
   * @public
   */
  Retention?: number | undefined;

  /**
   * A storage descriptor containing information about the physical storage of this table.
   *
   * @public
   */
  StorageDescriptor?: StorageDescriptor | undefined;

  /**
   * A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
   *
   * When you create a table used by Amazon Athena, and you do not specify any `partitionKeys`, you must at least set the value of `partitionKeys` to an empty list. For example:
   *
   * `"PartitionKeys": []`
   *
   * @public
   */
  PartitionKeys?: Column[] | undefined;

  /**
   * Included for Apache Hive compatibility. Not used in the normal course of Glue operations. If the table is a `VIRTUAL_VIEW`, certain Athena configuration encoded in base64.
   *
   * @public
   */
  ViewOriginalText?: string | undefined;

  /**
   * Included for Apache Hive compatibility. Not used in the normal course of Glue operations.
   *
   * @public
   */
  ViewExpandedText?: string | undefined;

  /**
   * The type of this table. Glue will create tables with the `EXTERNAL_TABLE` type. Other services, such as Athena, may create tables with additional table types.
   *
   * Glue related table types:
   *
   * - **EXTERNAL_TABLE**
   *
   *   Hive compatible attribute - indicates a non-Hive managed table.
   *
   * - **GOVERNED**
   *
   *   Used by Lake Formation. The Glue Data Catalog understands `GOVERNED`.
   *
   * @public
   */
  TableType?: string | undefined;

  /**
   * These key-value pairs define properties associated with the table.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * A `TableIdentifier` structure that describes a target table for resource linking.
   *
   * @public
   */
  TargetTable?: TableIdentifier | undefined;

  /**
   * A `FederatedTable` structure that references an entity outside the Glue Data Catalog. Specify this field to create a federated table, which points to a table in an external metastore instead of describing data managed in the Glue Data Catalog.
   *
   * @public
   */
  FederatedTable?: FederatedTable | undefined;

  /**
   * A structure that contains all the information that defines the view, including the dialect or dialects for the view, and the query.
   *
   * @public
   */
  ViewDefinition?: ViewDefinitionInput | undefined;
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * The ID of the Data Catalog in which to create the `Table`. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The catalog database in which to create the new table. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The unique identifier for the table within the specified database that will be created in the Glue Data Catalog.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The `TableInput` object that defines the metadata table to create in the catalog.
   *
   * @public
   */
  TableInput?: TableInput | undefined;

  /**
   * A list of partition indexes, `PartitionIndex` structures, to create in the table.
   *
   * @public
   */
  PartitionIndexes?: PartitionIndex[] | undefined;

  /**
   * The ID of the transaction.
   *
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * Specifies an `OpenTableFormatInput` structure when creating an open format table.
   *
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
   * The Catalog ID of the table.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * The name of the database in the catalog in which the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The type of table optimizer.
   *
   * @public
   */
  Type: TableOptimizerType | undefined;

  /**
   * A `TableOptimizerConfiguration` object representing the configuration of a table optimizer.
   *
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
   * The name of the trigger.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the workflow associated with the trigger.
   *
   * @public
   */
  WorkflowName?: string | undefined;

  /**
   * The type of the new trigger.
   *
   * @public
   */
  Type: TriggerType | undefined;

  /**
   * A `cron` expression used to specify the schedule (see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 * * ? *)`.
   *
   * This field is required when the trigger type is SCHEDULED.
   *
   * @public
   */
  Schedule?: string | undefined;

  /**
   * A predicate to specify when the new trigger should fire.
   *
   * This field is required when the trigger type is `CONDITIONAL`.
   *
   * @public
   */
  Predicate?: Predicate | undefined;

  /**
   * The actions initiated by this trigger when it fires.
   *
   * @public
   */
  Actions: Action[] | undefined;

  /**
   * A description of the new trigger.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Set to `true` to start `SCHEDULED` and `CONDITIONAL` triggers when created. True is not supported for `ON_DEMAND` triggers.
   *
   * @public
   */
  StartOnCreation?: boolean | undefined;

  /**
   * The tags to use with this trigger. You may use tags to limit access to the trigger. For more information about tags in Glue, see [Amazon Web Services Tags in Glue](https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html) in the developer guide.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
   *
   * @public
   */
  EventBatchingCondition?: EventBatchingCondition | undefined;
}

/**
 * @public
 */
export interface CreateTriggerResponse {
  /**
   * The name of the trigger.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Specifies the values that an admin sets for each job or session parameter configured in a Glue usage profile.
 *
 * @public
 */
export interface ConfigurationObject {
  /**
   * A default value for the parameter.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * A list of allowed values for the parameter.
   *
   * @public
   */
  AllowedValues?: string[] | undefined;

  /**
   * A minimum allowed value for the parameter.
   *
   * @public
   */
  MinValue?: string | undefined;

  /**
   * A maximum allowed value for the parameter.
   *
   * @public
   */
  MaxValue?: string | undefined;
}

/**
 * Specifies the job and session values that an admin configures in an Glue usage profile.
 *
 * @public
 */
export interface ProfileConfiguration {
  /**
   * A key-value map of configuration parameters for Glue sessions.
   *
   * @public
   */
  SessionConfiguration?: Record<string, ConfigurationObject> | undefined;

  /**
   * A key-value map of configuration parameters for Glue jobs.
   *
   * @public
   */
  JobConfiguration?: Record<string, ConfigurationObject> | undefined;
}

/**
 * @public
 */
export interface CreateUsageProfileRequest {
  /**
   * The name of the usage profile.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the usage profile.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A `ProfileConfiguration` object specifying the job and session values for the profile.
   *
   * @public
   */
  Configuration: ProfileConfiguration | undefined;

  /**
   * A list of tags applied to the usage profile.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateUsageProfileResponse {
  /**
   * The name of the usage profile that was created.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The URIs for function resources.
 *
 * @public
 */
export interface ResourceUri {
  /**
   * The type of the resource.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The URI for accessing the resource.
   *
   * @public
   */
  Uri?: string | undefined;
}

/**
 * A structure used to create or update a user-defined function.
 *
 * @public
 */
export interface UserDefinedFunctionInput {
  /**
   * The name of the function.
   *
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * The Java class that contains the function code.
   *
   * @public
   */
  ClassName?: string | undefined;

  /**
   * The owner of the function.
   *
   * @public
   */
  OwnerName?: string | undefined;

  /**
   * The type of the function.
   *
   * @public
   */
  FunctionType?: FunctionType | undefined;

  /**
   * The owner type.
   *
   * @public
   */
  OwnerType?: PrincipalType | undefined;

  /**
   * The resource URIs for the function.
   *
   * @public
   */
  ResourceUris?: ResourceUri[] | undefined;
}

/**
 * @public
 */
export interface CreateUserDefinedFunctionRequest {
  /**
   * The ID of the Data Catalog in which to create the function. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database in which to create the function.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * A `FunctionInput` object that defines the function to create in the Data Catalog.
   *
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
   * The name to be assigned to the workflow. It should be unique within your account.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A collection of properties to be used as part of each execution of the workflow.
   *
   * Run properties may be logged. Do not pass plaintext secrets as properties. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to use them within the workflow run.
   *
   * @public
   */
  DefaultRunProperties?: Record<string, string> | undefined;

  /**
   * The tags to be used with this workflow.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.
   *
   * @public
   */
  MaxConcurrentRuns?: number | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * The name of the workflow which was provided as part of the request.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetRequest {
  /**
   * The unique identifier of the asset to delete.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetResponse {}

/**
 * @public
 */
export interface DeleteAssetTypeRequest {
  /**
   * The identifier of the asset type to delete.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetTypeResponse {}

/**
 * @public
 */
export interface DeleteAttachmentRequest {
  /**
   * The unique identifier of the asset from which to delete the attachment.
   *
   * @public
   */
  AssetIdentifier: string | undefined;

  /**
   * The name of the iterable form. When specified along with `itemIdentifier`, the attachment is deleted from an item within the iterable form rather than from the asset itself.
   *
   * @public
   */
  IterableFormName?: string | undefined;

  /**
   * The identifier of the item within the iterable form. Required when `iterableFormName` is specified.
   *
   * @public
   */
  ItemIdentifier?: string | undefined;

  /**
   * The name of the attachment to delete.
   *
   * @public
   */
  AttachmentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttachmentResponse {
  /**
   * The unique identifier of the asset.
   *
   * @public
   */
  AssetIdentifier?: string | undefined;

  /**
   * The name of the iterable form, if the deletion targets an item.
   *
   * @public
   */
  IterableFormName?: string | undefined;

  /**
   * The identifier of the item within the iterable form, if applicable.
   *
   * @public
   */
  ItemIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBlueprintRequest {
  /**
   * The name of the blueprint to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteBlueprintResponse {
  /**
   * Returns the name of the blueprint that was deleted.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCatalogRequest {
  /**
   * The ID of the catalog.
   *
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
   * Name of the classifier to remove.
   *
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
   * The ID of the Data Catalog where the partitions in question reside. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database where the partitions reside.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the partitions' table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A list of partition values identifying the partition.
   *
   * @public
   */
  PartitionValues: string[] | undefined;

  /**
   * Name of the column.
   *
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
   * The ID of the Data Catalog where the partitions in question reside. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database where the partitions reside.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the partitions' table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The name of the column.
   *
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
   * The name of the database where the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table for which to delete column statistics.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The ID of the Data Catalog where the table resides. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogID?: string | undefined;
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
   * The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the connection to delete.
   *
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
export interface DeleteConnectionTypeRequest {
  /**
   * The name of the connection type to delete. Must reference an existing registered connection type.
   *
   * @public
   */
  ConnectionType: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionTypeResponse {}

/**
 * @public
 */
export interface DeleteCrawlerRequest {
  /**
   * The name of the crawler to remove.
   *
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
   * The name of the custom pattern that you want to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomEntityTypeResponse {
  /**
   * The name of the custom pattern you deleted.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatabaseRequest {
  /**
   * The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the database to delete. For Hive compatibility, this must be all lowercase.
   *
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
   * A name for the data quality ruleset.
   *
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
   * The name of the `DevEndpoint`.
   *
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDevEndpointResponse {}

/**
 * @public
 */
export interface DeleteFormTypeRequest {
  /**
   * The identifier of the form type to delete.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteFormTypeResponse {}

/**
 * @public
 */
export interface DeleteGlossaryRequest {
  /**
   * The unique identifier of the glossary to delete.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlossaryResponse {}

/**
 * @public
 */
export interface DeleteGlossaryTermRequest {
  /**
   * The unique identifier of the glossary term to delete.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlossaryTermResponse {}

/**
 * Request to delete the existing Glue Identity Center configuration.
 *
 * @public
 */
export interface DeleteGlueIdentityCenterConfigurationRequest {}

/**
 * Response from deleting the Glue Identity Center configuration.
 *
 * @public
 */
export interface DeleteGlueIdentityCenterConfigurationResponse {}

/**
 * @public
 */
export interface DeleteIntegrationRequest {
  /**
   * The Amazon Resource Name (ARN) for the integration.
   *
   * @public
   */
  IntegrationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResponse {
  /**
   * The ARN of the source for the integration.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The ARN of the target for the integration.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * A unique name for an integration in Glue.
   *
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * A description of the integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the integration.
   *
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * The ARN of a KMS key used for encrypting the channel.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * An optional set of non-secret key–value pairs that contains additional contextual information for encryption.
   *
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * Metadata assigned to the resource consisting of a list of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The status of the integration being deleted.
   *
   * The possible statuses are:
   *
   * - CREATING: The integration is being created.
   * - ACTIVE: The integration creation succeeds.
   * - MODIFYING: The integration is being modified.
   * - FAILED: The integration creation fails.
   * - DELETING: The integration is deleted.
   * - SYNCING: The integration is synchronizing.
   * - NEEDS_ATTENTION: The integration needs attention, such as synchronization.
   *
   * @public
   */
  Status: IntegrationStatus | undefined;

  /**
   * The time when the integration was created, in UTC.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * A list of errors associated with the integration.
   *
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * Selects source tables for the integration using Maxwell filter syntax.
   *
   * @public
   */
  DataFilter?: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResourcePropertyRequest {
  /**
   * The connection ARN of the source, or the database ARN of the target.
   *
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
   * The connection ARN of the source, or the database ARN of the target.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The name of the table to be replicated.
   *
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
   * The name of the job definition to delete.
   *
   * @public
   */
  JobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobResponse {
  /**
   * The name of the job definition that was deleted.
   *
   * @public
   */
  JobName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteMLTransformRequest {
  /**
   * The unique identifier of the transform to delete.
   *
   * @public
   */
  TransformId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMLTransformResponse {
  /**
   * The unique identifier of the transform that was deleted.
   *
   * @public
   */
  TransformId?: string | undefined;
}

/**
 * @public
 */
export interface DeletePartitionRequest {
  /**
   * The ID of the Data Catalog where the partition to be deleted resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database in which the table in question resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table that contains the partition to be deleted.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The values that define the partition.
   *
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
   * The catalog ID where the table resides.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * Specifies the name of a database from which you want to delete a partition index.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * Specifies the name of a table from which you want to delete a partition index.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The name of the partition index to be deleted.
   *
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
   * This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).
   *
   * @public
   */
  RegistryId: RegistryId | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryResponse {
  /**
   * The name of the registry being deleted.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry being deleted.
   *
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * The status of the registry. A successful operation will return the `Deleting` status.
   *
   * @public
   */
  Status?: RegistryStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The hash value returned when this policy was set.
   *
   * @public
   */
  PolicyHashCondition?: string | undefined;

  /**
   * The ARN of the Glue resource for the resource policy to be deleted.
   *
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
   * This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).
   *
   * @public
   */
  SchemaId: SchemaId | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaResponse {
  /**
   * The Amazon Resource Name (ARN) of the schema being deleted.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name of the schema being deleted.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The status of the schema.
   *
   * @public
   */
  Status?: SchemaStatus | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaVersionsInput {
  /**
   * This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).
   *
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * A version range may be supplied which may be of the format:
   *
   * - a single version number, 5
   * - a range, 5-8 : deletes versions 5, 6, 7, 8
   *
   * @public
   */
  Versions: string | undefined;
}

/**
 * An object containing error details.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * The error code for an error.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message for an error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * An object that contains the error details for an operation on a schema version.
 *
 * @public
 */
export interface SchemaVersionErrorItem {
  /**
   * The version number of the schema.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The details of the error for the schema version.
   *
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaVersionsResponse {
  /**
   * A list of `SchemaVersionErrorItem` objects, each containing an error and schema version.
   *
   * @public
   */
  SchemaVersionErrors?: SchemaVersionErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityConfigurationRequest {
  /**
   * The name of the security configuration to delete.
   *
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
   * The ID of the session to be deleted.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the origin of the delete session request.
   *
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionResponse {
  /**
   * Returns the ID of the deleted session.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableRequest {
  /**
   * The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database in which the table resides. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table to be deleted. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The transaction ID at which to delete the table contents.
   *
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
   * The Catalog ID of the table.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * The name of the database in the catalog in which the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The type of table optimizer.
   *
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
   * The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The ID of the table version to be deleted. A `VersionID` is a string representation of an integer. Each version is incremented by 1.
   *
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
   * The name of the trigger to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteTriggerResponse {
  /**
   * The name of the trigger that was deleted.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteUsageProfileRequest {
  /**
   * The name of the usage profile to delete.
   *
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
   * The ID of the Data Catalog where the function to be deleted is located. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database where the function is located.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the function definition to be deleted.
   *
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
   * Name of the workflow to be deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowResponse {
  /**
   * Name of the workflow specified in input.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionTypeRequest {
  /**
   * The name of the connection type to be described.
   *
   * @public
   */
  ConnectionType: string | undefined;
}

/**
 * Specifies the supported authentication types returned by the `DescribeConnectionType` API.
 *
 * @public
 */
export interface Capabilities {
  /**
   * A list of supported authentication types.
   *
   * @public
   */
  SupportedAuthenticationTypes: AuthenticationType[] | undefined;

  /**
   * A list of supported data operations.
   *
   * @public
   */
  SupportedDataOperations: DataOperation[] | undefined;

  /**
   * A list of supported compute environments.
   *
   * @public
   */
  SupportedComputeEnvironments: ComputeEnvironment[] | undefined;
}

/**
 * An object containing configuration for a compute environment (such as Spark, Python or Athena) returned by the `DescribeConnectionType` API.
 *
 * @public
 */
export interface ComputeEnvironmentConfiguration {
  /**
   * A name for the compute environment configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the compute environment.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The type of compute environment.
   *
   * @public
   */
  ComputeEnvironment: ComputeEnvironment | undefined;

  /**
   * The supported authentication types for the compute environment.
   *
   * @public
   */
  SupportedAuthenticationTypes: AuthenticationType[] | undefined;

  /**
   * The parameters used as connection options for the compute environment.
   *
   * @public
   */
  ConnectionOptions: Record<string, Property> | undefined;

  /**
   * The connection property name overrides for the compute environment.
   *
   * @public
   */
  ConnectionPropertyNameOverrides: Record<string, string> | undefined;

  /**
   * The connection option name overrides for the compute environment.
   *
   * @public
   */
  ConnectionOptionNameOverrides: Record<string, string> | undefined;

  /**
   * The connection properties that are required as overrides for the compute environment.
   *
   * @public
   */
  ConnectionPropertiesRequiredOverrides: string[] | undefined;

  /**
   * Indicates whether `PhysicalConnectionProperties` are required for the compute environment.
   *
   * @public
   */
  PhysicalConnectionPropertiesRequired?: boolean | undefined;
}

/**
 * Configuration that defines how BETWEEN range filter operations are translated into REST API request parameters.
 *
 * @public
 */
export interface BetweenConfiguration {
  /**
   * The parameter name used for the lower bound value in a BETWEEN filter operation.
   *
   * @public
   */
  LowBoundKey?: string | undefined;

  /**
   * The parameter name used for the upper bound value in a BETWEEN filter operation.
   *
   * @public
   */
  HighBoundKey?: string | undefined;

  /**
   * A template string for constructing the BETWEEN filter expression.
   *
   * @public
   */
  Template?: string | undefined;
}

/**
 * Configuration that defines per-field overrides for filter behavior, allowing individual fields to customize how filter operations are applied.
 *
 * @public
 */
export interface FilterOverrides {
  /**
   * An override for the field name to use in filter expressions, if different from the schema field name.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * A map of logical filter operators to their field-specific API representations, overriding the global operator mappings. Supported operator keys are: `EQUAL_TO`, `NOT_EQUAL_TO`, `LESS_THAN`, `GREATER_THAN`, `LESS_THAN_OR_EQUAL_TO`, `GREATER_THAN_OR_EQUAL_TO`, `CONTAINS`, `BETWEEN`, `AND`, and `OR`.
   *
   * @public
   */
  OperatorMappings?: Record<string, string> | undefined;

  /**
   * Field-specific configuration for handling BETWEEN range filter operations.
   *
   * @public
   */
  BetweenConfiguration?: BetweenConfiguration | undefined;

  /**
   * The date and time format for filter expressions on this field, overriding the global `DateTimeFormat`. Accepts Java `DateTimeFormatter` patterns (for example, `EEE, d MMM yyyy HH:mm:ss Z`), `EPOCH_SECONDS` for Unix epoch seconds, or `EPOCH_MILLIS` for Unix epoch milliseconds.
   *
   * @public
   */
  DateTimeFormat?: string | undefined;
}

/**
 * Defines a field in an entity schema for REST connector data sources, specifying the field name and data type.
 *
 * @public
 */
export interface FieldDefinition {
  /**
   * The name of the field in the entity schema.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data type of the field.
   *
   * @public
   */
  FieldDataType: FieldDataType | undefined;

  /**
   * The format pattern for parsing date values from API responses. Required when the API uses a non-ISO-8601 format. Accepts Java `DateTimeFormatter` patterns (for example, `EEE, d MMM yyyy HH:mm:ss Z`), `EPOCH_SECONDS` for Unix epoch seconds, or `EPOCH_MILLIS` for Unix epoch milliseconds.
   *
   * @public
   */
  ResponseDateFormat?: string | undefined;

  /**
   * Indicates whether this field can be used for partitioning queries to the data source.
   *
   * @public
   */
  IsPartitionable?: boolean | undefined;

  /**
   * Indicates whether this field can contain null values.
   *
   * @public
   */
  IsNullable?: boolean | undefined;

  /**
   * Indicates whether this field can be used in filter predicates when querying data.
   *
   * @public
   */
  IsQueryable?: boolean | undefined;

  /**
   * Indicates whether this field can be used for ordering results.
   *
   * @public
   */
  IsOrderable?: boolean | undefined;

  /**
   * Per-field overrides for filter behavior, allowing customization of how filters are applied to this specific field.
   *
   * @public
   */
  FilterOverrides?: FilterOverrides | undefined;
}

/**
 * Configuration for constructing filter expression strings when using the `FILTER_STRING` filter mode.
 *
 * @public
 */
export interface FilterStringConfiguration {
  /**
   * The query parameter name used to send the constructed filter expression string in API requests.
   *
   * @public
   */
  QueryParameterName: string | undefined;

  /**
   * Indicates whether string and date values should be wrapped with a quote character in the filter expression.
   *
   * @public
   */
  QuoteStringValues?: boolean | undefined;

  /**
   * The character used to quote values when `QuoteStringValues` is true. Defaults to double quotes if not specified.
   *
   * @public
   */
  QuoteCharacter?: string | undefined;
}

/**
 * Configuration that defines how filter predicates are applied to REST API requests, supporting both query parameter and filter string strategies.
 *
 * @public
 */
export interface FilterConfiguration {
  /**
   * The strategy for applying filters to requests. Use `QUERY_PARAMS` to pass filters as individual query parameters, or `FILTER_STRING` to construct a single filter expression string.
   *
   * @public
   */
  FilterMode: FilterMode | undefined;

  /**
   * A map of logical filter operators to their API-specific string representations. Supported operator keys are: `EQUAL_TO`, `NOT_EQUAL_TO`, `LESS_THAN`, `GREATER_THAN`, `LESS_THAN_OR_EQUAL_TO`, `GREATER_THAN_OR_EQUAL_TO`, `CONTAINS`, `BETWEEN`, `AND`, and `OR`.
   *
   * @public
   */
  OperatorMappings?: Record<string, string> | undefined;

  /**
   * The global date and time format for filter expressions. Accepts Java `DateTimeFormatter` patterns (for example, `EEE, d MMM yyyy HH:mm:ss Z`), `EPOCH_SECONDS` for Unix epoch seconds, or `EPOCH_MILLIS` for Unix epoch milliseconds. If not specified, values are passed as-is in ISO-8601 format.
   *
   * @public
   */
  DateTimeFormat?: string | undefined;

  /**
   * Indicates whether surrounding double quotes should be stripped from filter values before processing.
   *
   * @public
   */
  StripQuotes?: boolean | undefined;

  /**
   * Configuration for handling BETWEEN range filter operations.
   *
   * @public
   */
  BetweenConfiguration?: BetweenConfiguration | undefined;

  /**
   * Configuration for constructing filter expressions when `FilterMode` is set to `FILTER_STRING`.
   *
   * @public
   */
  FilterStringConfiguration?: FilterStringConfiguration | undefined;
}

/**
 * Configuration that defines how to extract values from HTTP response content or headers for use in subsequent requests or parameter mapping.
 *
 * @public
 */
export interface ResponseExtractionMapping {
  /**
   * A JSON path expression that specifies how to extract a value from the response body content.
   *
   * @public
   */
  ContentPath?: string | undefined;

  /**
   * The name of an HTTP response header from which to extract the value.
   *
   * @public
   */
  HeaderKey?: string | undefined;
}

/**
 * Parameter extraction configuration that defines how to extract and map values from API responses to request parameters.
 *
 * @public
 */
export interface ExtractedParameter {
  /**
   * The parameter key name that will be used in subsequent requests.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The default value to use if the parameter cannot be extracted from the response.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * Specifies where this extracted parameter should be placed in subsequent requests, such as in headers, query parameters, or request body.
   *
   * @public
   */
  PropertyLocation?: PropertyLocation | undefined;

  /**
   * The JSON path or extraction mapping that defines how to extract the parameter value from API responses.
   *
   * @public
   */
  Value?: ResponseExtractionMapping | undefined;
}

/**
 * Cursor-based pagination configuration that defines how to handle pagination using cursor tokens or next page identifiers.
 *
 * @public
 */
export interface CursorConfiguration {
  /**
   * The parameter name or JSON path that contains the cursor or token for retrieving the next page of results.
   *
   * @public
   */
  NextPage: ExtractedParameter | undefined;

  /**
   * The parameter name used to specify the maximum number of results to return per page.
   *
   * @public
   */
  LimitParameter?: ExtractedParameter | undefined;
}

/**
 * Offset-based pagination configuration that defines how to handle pagination using numeric offsets and limits.
 *
 * @public
 */
export interface OffsetConfiguration {
  /**
   * The parameter name used to specify the starting position or offset for retrieving results.
   *
   * @public
   */
  OffsetParameter: ExtractedParameter | undefined;

  /**
   * The parameter name used to specify the maximum number of results to return per page.
   *
   * @public
   */
  LimitParameter: ExtractedParameter | undefined;
}

/**
 * Configuration that defines how to handle paginated responses from REST APIs, supporting different pagination strategies used by various services.
 *
 * @public
 */
export interface PaginationConfiguration {
  /**
   * Configuration for cursor-based pagination, where the API provides a cursor or token to retrieve the next page of results.
   *
   * @public
   */
  CursorConfiguration?: CursorConfiguration | undefined;

  /**
   * Configuration for offset-based pagination, where the API uses numeric offsets and limits to control which results are returned.
   *
   * @public
   */
  OffsetConfiguration?: OffsetConfiguration | undefined;
}

/**
 * Defines a property configuration for connection types, default values, and where the property should be used in requests.
 *
 * @public
 */
export interface ConnectorProperty {
  /**
   * The name of the property.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A key name to use when sending this property in API requests, if different from the display name.
   *
   * @public
   */
  KeyOverride?: string | undefined;

  /**
   * Indicates whether the property is required.
   *
   * @public
   */
  Required: boolean | undefined;

  /**
   * The default value for the property.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * A list of `AllowedValue` objects representing the values allowed for the property.
   *
   * @public
   */
  AllowedValues?: string[] | undefined;

  /**
   * Specifies where this property should be included in REST requests, such as in headers, query parameters, or request body.
   *
   * @public
   */
  PropertyLocation?: PropertyLocation | undefined;

  /**
   * The data type of this property
   *
   * @public
   */
  PropertyType: PropertyType | undefined;

  /**
   * A format template for the property value that defines how the value should be formatted before sending it in API requests. Use `\{value\}` as a placeholder for the actual property value (for example, `SSWS \{value\}`).
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * Configuration that defines how to parse JSON responses from REST API calls, including paths to result data and error information.
 *
 * @public
 */
export interface ResponseConfiguration {
  /**
   * The JSON path expression that identifies where the actual result data is located within the API response.
   *
   * @public
   */
  ResultPath: string | undefined;

  /**
   * The JSON path expression that identifies where error information is located within API responses when requests fail.
   *
   * @public
   */
  ErrorPath?: string | undefined;
}

/**
 * Configuration that defines how to make requests to endpoints, including request methods, paths, parameters, and response handling.
 *
 * @public
 */
export interface SourceConfiguration {
  /**
   * The HTTP method to use for requests to this endpoint, such as GET, POST.
   *
   * @public
   */
  RequestMethod?: HTTPMethod | undefined;

  /**
   * The URL path for the REST endpoint, which may include parameter placeholders that will be replaced with actual values during requests.
   *
   * @public
   */
  RequestPath?: string | undefined;

  /**
   * Configuration for request parameters that should be included in API calls, such as query parameters, headers, or body content.
   *
   * @public
   */
  RequestParameters?: ConnectorProperty[] | undefined;

  /**
   * Configuration that defines how to parse and extract data from API responses, including success and error handling.
   *
   * @public
   */
  ResponseConfiguration?: ResponseConfiguration | undefined;

  /**
   * Configuration for handling paginated responses from the REST API, supporting both cursor-based and offset-based pagination strategies.
   *
   * @public
   */
  PaginationConfiguration?: PaginationConfiguration | undefined;

  /**
   * Configuration for applying filter pushdown to REST API requests, defining how filter predicates are translated into query parameters or filter strings.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;
}

/**
 * Configuration that defines how to interact with a specific data entity through the REST API, including its access patterns and schema definition.
 *
 * @public
 */
export interface EntityConfiguration {
  /**
   * The source configuration that defines how to make requests to access this entity's data through the REST API.
   *
   * @public
   */
  SourceConfiguration?: SourceConfiguration | undefined;

  /**
   * The schema definition for this entity, including field names, types, and other metadata that describes the structure of the data.
   *
   * @public
   */
  Schema?: Record<string, FieldDefinition> | undefined;
}

/**
 * Configuration that defines HTTP request and response handling, validation endpoints, and entity configurations for REST API interactions.
 *
 * @public
 */
export interface RestConfiguration {
  /**
   * Global configuration settings that apply to all REST API requests for this connection type, including common request methods, paths, and parameters.
   *
   * @public
   */
  GlobalSourceConfiguration?: SourceConfiguration | undefined;

  /**
   * Configuration for the endpoint used to validate connection credentials and test connectivity during connection creation.
   *
   * @public
   */
  ValidationEndpointConfiguration?: SourceConfiguration | undefined;

  /**
   * A map of entity configurations that define how to interact with different data entities available through the REST API, including their schemas and access patterns.
   *
   * @public
   */
  EntityConfigurations?: Record<string, EntityConfiguration> | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionTypeResponse {
  /**
   * The name of the connection type.
   *
   * @public
   */
  ConnectionType?: string | undefined;

  /**
   * A description of the connection type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The supported authentication types, data interface types (compute environments), and data operations of the connector.
   *
   * @public
   */
  Capabilities?: Capabilities | undefined;

  /**
   * Connection properties which are common across compute environments.
   *
   * @public
   */
  ConnectionProperties?: Record<string, Property> | undefined;

  /**
   * Returns properties that can be set when creating a connection in the `ConnectionInput.ConnectionProperties`. `ConnectionOptions` defines parameters that can be set in a Spark ETL script in the connection options map passed to a dataframe.
   *
   * @public
   */
  ConnectionOptions?: Record<string, Property> | undefined;

  /**
   * The type of authentication used for the connection.
   *
   * @public
   */
  AuthenticationConfiguration?: AuthConfiguration | undefined;

  /**
   * The compute environments that are supported by the connection.
   *
   * @public
   */
  ComputeEnvironmentConfigurations?: Record<string, ComputeEnvironmentConfiguration> | undefined;

  /**
   * Physical requirements for a connection, such as VPC, Subnet and Security Group specifications.
   *
   * @public
   */
  PhysicalConnectionRequirements?: Record<string, Property> | undefined;

  /**
   * Connection properties specific to the Athena compute environment.
   *
   * @public
   */
  AthenaConnectionProperties?: Record<string, Property> | undefined;

  /**
   * Connection properties specific to the Python compute environment.
   *
   * @public
   */
  PythonConnectionProperties?: Record<string, Property> | undefined;

  /**
   * Connection properties specific to the Spark compute environment.
   *
   * @public
   */
  SparkConnectionProperties?: Record<string, Property> | undefined;

  /**
   * HTTP request and response configuration, validation endpoint, and entity configurations for REST based data source.
   *
   * @public
   */
  RestConfiguration?: RestConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeEntityRequest {
  /**
   * The name of the connection that contains the connection type credentials.
   *
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * The catalog ID of the catalog that contains the connection. This can be null, By default, the Amazon Web Services Account ID is the catalog ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the entity that you want to describe from the connection type.
   *
   * @public
   */
  EntityName: string | undefined;

  /**
   * A continuation token, included if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The version of the API used for the data store.
   *
   * @public
   */
  DataStoreApiVersion?: string | undefined;
}

/**
 * The `Field` object has information about the different properties associated with a field in the connector.
 *
 * @public
 */
export interface Field {
  /**
   * A unique identifier for the field.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * A readable label used for the field.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * A description of the field.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of data in the field.
   *
   * @public
   */
  FieldType?: FieldDataType | undefined;

  /**
   * Indicates whether this field can used as a primary key for the given entity.
   *
   * @public
   */
  IsPrimaryKey?: boolean | undefined;

  /**
   * Indicates whether this field can be nullable or not.
   *
   * @public
   */
  IsNullable?: boolean | undefined;

  /**
   * Indicates whether this field can be added in Select clause of SQL query or whether it is retrievable or not.
   *
   * @public
   */
  IsRetrievable?: boolean | undefined;

  /**
   * Indicates whether this field can used in a filter clause (`WHERE` clause) of a SQL statement when querying data.
   *
   * @public
   */
  IsFilterable?: boolean | undefined;

  /**
   * Indicates whether a given field can be used in partitioning the query made to SaaS.
   *
   * @public
   */
  IsPartitionable?: boolean | undefined;

  /**
   * Indicates whether this field can be created as part of a destination write.
   *
   * @public
   */
  IsCreateable?: boolean | undefined;

  /**
   * Indicates whether this field can be updated as part of a destination write.
   *
   * @public
   */
  IsUpdateable?: boolean | undefined;

  /**
   * Indicates whether this field can be upserted as part of a destination write.
   *
   * @public
   */
  IsUpsertable?: boolean | undefined;

  /**
   * Indicates whether this field is populated automatically when the object is created, such as a created at timestamp.
   *
   * @public
   */
  IsDefaultOnCreate?: boolean | undefined;

  /**
   * A list of supported values for the field.
   *
   * @public
   */
  SupportedValues?: string[] | undefined;

  /**
   * Indicates the support filter operators for this field.
   *
   * @public
   */
  SupportedFilterOperators?: FieldFilterOperator[] | undefined;

  /**
   * A parent field name for a nested field.
   *
   * @public
   */
  ParentField?: string | undefined;

  /**
   * The data type returned by the SaaS API, such as “picklist” or “textarea” from Salesforce.
   *
   * @public
   */
  NativeDataType?: string | undefined;

  /**
   * Optional map of keys which may be returned.
   *
   * @public
   */
  CustomProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeEntityResponse {
  /**
   * Describes the fields for that connector entity. This is the list of `Field` objects. `Field` is very similar to column in a database. The `Field` object has information about different properties associated with fields in the connector.
   *
   * @public
   */
  Fields?: Field[] | undefined;

  /**
   * A continuation token, present if the current segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInboundIntegrationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the integration.
   *
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * A token to specify where to start paginating. This is the marker from a previously truncated response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The total number of items to return in the output.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target resource in the integration.
   *
   * @public
   */
  TargetArn?: string | undefined;
}

/**
 * A structure for an integration that writes data into a resource.
 *
 * @public
 */
export interface InboundIntegration {
  /**
   * The ARN of the source resource for the integration.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The ARN of the target resource for the integration.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * The ARN of the zero-ETL integration.
   *
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * The possible statuses are:
   *
   * - CREATING: The integration is being created.
   * - ACTIVE: The integration creation succeeds.
   * - MODIFYING: The integration is being modified.
   * - FAILED: The integration creation fails.
   * - DELETING: The integration is deleted.
   * - SYNCING: The integration is synchronizing.
   * - NEEDS_ATTENTION: The integration needs attention, such as synchronization.
   *
   * @public
   */
  Status: IntegrationStatus | undefined;

  /**
   * The time that the integration was created, in UTC.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * Properties associated with the integration.
   *
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;

  /**
   * A list of errors associated with the integration.
   *
   * @public
   */
  Errors?: IntegrationError[] | undefined;
}

/**
 * @public
 */
export interface DescribeInboundIntegrationsResponse {
  /**
   * A list of inbound integrations.
   *
   * @public
   */
  InboundIntegrations?: InboundIntegration[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * A filter that can be used when invoking a `DescribeIntegrations` request.
 *
 * @public
 */
export interface IntegrationFilter {
  /**
   * The name of the filter.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of filter values.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIntegrationsRequest {
  /**
   * The Amazon Resource Name (ARN) for the integration.
   *
   * @public
   */
  IntegrationIdentifier?: string | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The total number of items to return in the output.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * A list of key and values, to filter down the results. Supported keys are "Status", "IntegrationName", and "SourceArn". IntegrationName is limited to only one value.
   *
   * @public
   */
  Filters?: IntegrationFilter[] | undefined;
}

/**
 * Describes a zero-ETL integration.
 *
 * @public
 */
export interface Integration {
  /**
   * The ARN for the source of the integration.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The ARN for the target of the integration.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * A description for the integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique name for the integration.
   *
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the integration.
   *
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * The ARN of a KMS key used for encrypting the channel.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * An optional set of non-secret key–value pairs that contains additional contextual information for encryption. This can only be provided if `KMSKeyId` is provided.
   *
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * Metadata assigned to the resource consisting of a list of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The possible statuses are:
   *
   * - CREATING: The integration is being created.
   * - ACTIVE: The integration creation succeeds.
   * - MODIFYING: The integration is being modified.
   * - FAILED: The integration creation fails.
   * - DELETING: The integration is deleted.
   * - SYNCING: The integration is synchronizing.
   * - NEEDS_ATTENTION: The integration needs attention, such as synchronization.
   *
   * @public
   */
  Status: IntegrationStatus | undefined;

  /**
   * The time that the integration was created, in UTC.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * Properties associated with the integration.
   *
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;

  /**
   * A list of errors associated with the integration.
   *
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * Selects source tables for the integration using Maxwell filter syntax.
   *
   * @public
   */
  DataFilter?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIntegrationsResponse {
  /**
   * A list of zero-ETL integrations.
   *
   * @public
   */
  Integrations?: Integration[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGlossaryTermsRequest {
  /**
   * The unique identifier of the asset to disassociate glossary terms from.
   *
   * @public
   */
  AssetIdentifier: string | undefined;

  /**
   * The name of the iterable form. When specified along with `itemIdentifier`, the glossary terms are disassociated from an item within the iterable form rather than the asset itself.
   *
   * @public
   */
  IterableFormName?: string | undefined;

  /**
   * The identifier of the item within the iterable form. Required when `iterableFormName` is specified.
   *
   * @public
   */
  ItemIdentifier?: string | undefined;

  /**
   * The list of glossary term identifiers to disassociate from the asset.
   *
   * @public
   */
  GlossaryTermIdentifiers: string[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGlossaryTermsResponse {
  /**
   * The unique identifier of the asset.
   *
   * @public
   */
  AssetIdentifier?: string | undefined;

  /**
   * The name of the iterable form, if the disassociation targets an item.
   *
   * @public
   */
  IterableFormName?: string | undefined;

  /**
   * The identifier of the item within the iterable form, if applicable.
   *
   * @public
   */
  ItemIdentifier?: string | undefined;

  /**
   * The remaining glossary terms associated with the asset.
   *
   * @public
   */
  GlossaryTerms?: string[] | undefined;
}

/**
 * @public
 */
export interface GetAssetInput {
  /**
   * The unique identifier of the asset to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * An iterable form available on an asset, identified by its form type.
 *
 * @public
 */
export interface IterableFormEntry {
  /**
   * The form type identifier of the iterable form (for example, `columns`), used to retrieve its items via `ListIterableForms` or `BatchGetIterableForms`.
   *
   * @public
   */
  FormTypeId?: string | undefined;
}

/**
 * The asset metadata returned by the `GetAsset` operation.
 *
 * @public
 */
export interface GetAssetOutput {
  /**
   * The unique identifier of the asset.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the asset.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the asset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp at which the asset was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp at which the asset was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The identifier of the asset type for this asset.
   *
   * @public
   */
  AssetTypeId: string | undefined;

  /**
   * The identifiers of the glossary terms associated with the asset.
   *
   * @public
   */
  GlossaryTerms?: string[] | undefined;

  /**
   * The forms on the asset, keyed by form name.
   *
   * @public
   */
  Forms?: Record<string, AssetFormEntry> | undefined;

  /**
   * Additional attachments on the asset for more context, keyed by attachment name.
   *
   * @public
   */
  Attachments?: Record<string, AssetFormEntry> | undefined;

  /**
   * The iterable forms available on the asset, keyed by form name (for example, `columns`). Use the form name with `ListIterableForms` or `BatchGetIterableForms` to retrieve the form's items.
   *
   * @public
   */
  IterableForms?: Record<string, IterableFormEntry> | undefined;
}

/**
 * @public
 */
export interface GetAssetTypeRequest {
  /**
   * The identifier of the asset type to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetAssetTypeResponse {
  /**
   * The identifier of the asset type.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the asset type.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The forms that make up the asset type, keyed by form name.
   *
   * @public
   */
  Forms?: Record<string, AssetTypeFormReference> | undefined;
}

/**
 * @public
 */
export interface GetBlueprintRequest {
  /**
   * The name of the blueprint.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether or not to include the blueprint in the response.
   *
   * @public
   */
  IncludeBlueprint?: boolean | undefined;

  /**
   * Specifies whether or not to include the parameter specification.
   *
   * @public
   */
  IncludeParameterSpec?: boolean | undefined;
}

/**
 * @public
 */
export interface GetBlueprintResponse {
  /**
   * Returns a `Blueprint` object.
   *
   * @public
   */
  Blueprint?: Blueprint | undefined;
}

/**
 * @public
 */
export interface GetBlueprintRunRequest {
  /**
   * The name of the blueprint.
   *
   * @public
   */
  BlueprintName: string | undefined;

  /**
   * The run ID for the blueprint run you want to retrieve.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * The details of a blueprint run.
 *
 * @public
 */
export interface BlueprintRun {
  /**
   * The name of the blueprint.
   *
   * @public
   */
  BlueprintName?: string | undefined;

  /**
   * The run ID for this blueprint run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The name of a workflow that is created as a result of a successful blueprint run. If a blueprint run has an error, there will not be a workflow created.
   *
   * @public
   */
  WorkflowName?: string | undefined;

  /**
   * The state of the blueprint run. Possible values are:
   *
   * - Running — The blueprint run is in progress.
   * - Succeeded — The blueprint run completed successfully.
   * - Failed — The blueprint run failed and rollback is complete.
   * - Rolling Back — The blueprint run failed and rollback is in progress.
   *
   * @public
   */
  State?: BlueprintRunState | undefined;

  /**
   * The date and time that the blueprint run started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The date and time that the blueprint run completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * Indicates any errors that are seen while running the blueprint.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * If there are any errors while creating the entities of a workflow, we try to roll back the created entities until that point and delete them. This attribute indicates the errors seen while trying to delete the entities that are created.
   *
   * @public
   */
  RollbackErrorMessage?: string | undefined;

  /**
   * The blueprint parameters as a string. You will have to provide a value for each key that is required from the parameter spec that is defined in the `Blueprint$ParameterSpec`.
   *
   * @public
   */
  Parameters?: string | undefined;

  /**
   * The role ARN. This role will be assumed by the Glue service and will be used to create the workflow and other entities of a workflow.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetBlueprintRunResponse {
  /**
   * Returns a `BlueprintRun` object.
   *
   * @public
   */
  BlueprintRun?: BlueprintRun | undefined;
}

/**
 * @public
 */
export interface GetBlueprintRunsRequest {
  /**
   * The name of the blueprint.
   *
   * @public
   */
  BlueprintName: string | undefined;

  /**
   * A continuation token, if this is a continuation request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of a list to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetBlueprintRunsResponse {
  /**
   * Returns a list of `BlueprintRun` objects.
   *
   * @public
   */
  BlueprintRuns?: BlueprintRun[] | undefined;

  /**
   * A continuation token, if not all blueprint runs have been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCatalogRequest {
  /**
   * The ID of the parent catalog in which the catalog resides. If none is provided, the Amazon Web Services Account Number is used by default.
   *
   * @public
   */
  CatalogId: string | undefined;
}

/**
 * The output properties of the data lake access configuration for your catalog resource in the Glue Data Catalog.
 *
 * @public
 */
export interface DataLakeAccessPropertiesOutput {
  /**
   * Turns on or off data lake access for Apache Spark applications that access Amazon Redshift databases in the Data Catalog.
   *
   * @public
   */
  DataLakeAccess?: boolean | undefined;

  /**
   * A role that will be assumed by Glue for transferring data into/out of the staging bucket during a query.
   *
   * @public
   */
  DataTransferRole?: string | undefined;

  /**
   * An encryption key that will be used for the staging bucket that will be created along with the catalog.
   *
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * The managed Redshift Serverless compute name that is created for your catalog resource.
   *
   * @public
   */
  ManagedWorkgroupName?: string | undefined;

  /**
   * The managed Redshift Serverless compute status.
   *
   * @public
   */
  ManagedWorkgroupStatus?: string | undefined;

  /**
   * The default Redshift database resource name in the managed compute.
   *
   * @public
   */
  RedshiftDatabaseName?: string | undefined;

  /**
   * A message that gives more detailed information about the managed workgroup status.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Specifies a federated catalog type for the native catalog resource. The currently supported type is `aws:redshift`.
   *
   * @public
   */
  CatalogType?: string | undefined;
}

/**
 * A structure that contains the output properties of Iceberg table optimization configuration for your catalog resource in the Glue Data Catalog.
 *
 * @public
 */
export interface IcebergOptimizationPropertiesOutput {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that is used to perform Iceberg table optimization operations.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A map of key-value pairs that specify configuration parameters for Iceberg table compaction operations, which optimize the layout of data files to improve query performance.
   *
   * @public
   */
  Compaction?: Record<string, string> | undefined;

  /**
   * A map of key-value pairs that specify configuration parameters for Iceberg table retention operations, which manage the lifecycle of table snapshots to control storage costs.
   *
   * @public
   */
  Retention?: Record<string, string> | undefined;

  /**
   * A map of key-value pairs that specify configuration parameters for Iceberg orphan file deletion operations, which identify and remove files that are no longer referenced by the table metadata.
   *
   * @public
   */
  OrphanFileDeletion?: Record<string, string> | undefined;

  /**
   * The timestamp when the Iceberg optimization properties were last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * Property attributes that include configuration properties for the catalog resource.
 *
 * @public
 */
export interface CatalogPropertiesOutput {
  /**
   * A `DataLakeAccessProperties` object with input properties to configure data lake access for your catalog resource in the Glue Data Catalog.
   *
   * @public
   */
  DataLakeAccessProperties?: DataLakeAccessPropertiesOutput | undefined;

  /**
   * An `IcebergOptimizationPropertiesOutput` object that specifies Iceberg table optimization settings for the catalog, including configurations for compaction, retention, and orphan file deletion operations.
   *
   * @public
   */
  IcebergOptimizationProperties?: IcebergOptimizationPropertiesOutput | undefined;

  /**
   * Additional key-value properties for the catalog, such as column statistics optimizations.
   *
   * @public
   */
  CustomProperties?: Record<string, string> | undefined;
}

/**
 * The catalog object represents a logical grouping of databases in the Glue Data Catalog or a federated source. You can now create a Redshift-federated catalog or a catalog containing resource links to Redshift databases in another account or region.
 *
 * @public
 */
export interface Catalog {
  /**
   * The ID of the catalog. To grant access to the default catalog, this field should not be provided.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog. Cannot be the same as the account ID.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) assigned to the catalog resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Description string, not more than 2048 bytes long, matching the URI address multi-line string pattern. A description of the catalog.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A map array of key-value pairs that define parameters and properties of the catalog.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * The time at which the catalog was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The time at which the catalog was last updated.
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * A `TargetRedshiftCatalog` object that describes a target catalog for database resource linking.
   *
   * @public
   */
  TargetRedshiftCatalog?: TargetRedshiftCatalog | undefined;

  /**
   * A `FederatedCatalog` object that points to an entity outside the Glue Data Catalog.
   *
   * @public
   */
  FederatedCatalog?: FederatedCatalog | undefined;

  /**
   * A `CatalogProperties` object that specifies data lake access properties and other custom properties.
   *
   * @public
   */
  CatalogProperties?: CatalogPropertiesOutput | undefined;

  /**
   * An array of `PrincipalPermissions` objects. Creates a set of default permissions on the table(s) for principals. Used by Amazon Web Services Lake Formation. Not used in the normal course of Glue operations.
   *
   * @public
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * An array of `PrincipalPermissions` objects. Creates a set of default permissions on the database(s) for principals. Used by Amazon Web Services Lake Formation. Not used in the normal course of Glue operations.
   *
   * @public
   */
  CreateDatabaseDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.
   *
   * @public
   */
  AllowFullTableExternalDataAccess?: AllowFullTableExternalDataAccessEnum | undefined;
}

/**
 * @public
 */
export interface GetCatalogResponse {
  /**
   * A `Catalog` object. The definition of the specified catalog in the Glue Data Catalog.
   *
   * @public
   */
  Catalog?: Catalog | undefined;
}

/**
 * @public
 */
export interface GetCatalogImportStatusRequest {
  /**
   * The ID of the catalog to migrate. Currently, this should be the Amazon Web Services account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * A structure containing migration status information.
 *
 * @public
 */
export interface CatalogImportStatus {
  /**
   * `True` if the migration has completed, or `False` otherwise.
   *
   * @public
   */
  ImportCompleted?: boolean | undefined;

  /**
   * The time that the migration was started.
   *
   * @public
   */
  ImportTime?: Date | undefined;

  /**
   * The name of the person who initiated the migration.
   *
   * @public
   */
  ImportedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetCatalogImportStatusResponse {
  /**
   * The status of the specified catalog migration.
   *
   * @public
   */
  ImportStatus?: CatalogImportStatus | undefined;
}

/**
 * @public
 */
export interface GetCatalogsRequest {
  /**
   * The ID of the parent catalog in which the catalog resides. If none is provided, the Amazon Web Services Account Number is used by default.
   *
   * @public
   */
  ParentCatalogId?: string | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of catalogs to return in one response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Whether to list all catalogs across the catalog hierarchy, starting from the `ParentCatalogId`. Defaults to `false` . When `true`, all catalog objects in the `ParentCatalogID` hierarchy are enumerated in the response.
   *
   * @public
   */
  Recursive?: boolean | undefined;

  /**
   * Whether to list the default catalog in the account and region in the response. Defaults to `false`. When `true` and `ParentCatalogId = NULL | Amazon Web Services Account ID`, all catalogs and the default catalog are enumerated in the response.
   *
   * When the `ParentCatalogId` is not equal to null, and this attribute is passed as `false` or `true`, an `InvalidInputException` is thrown.
   *
   * @public
   */
  IncludeRoot?: boolean | undefined;

  /**
   * When `true`, the response only includes catalogs that can contain databases. Some catalogs are organizational containers that hold only other catalogs, not databases. When this parameter is set to `true`, those container-only catalogs are excluded, and only catalogs capable of containing databases are returned. Defaults to `false`.
   *
   * @public
   */
  HasDatabases?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCatalogsResponse {
  /**
   * An array of `Catalog` objects. A list of `Catalog` objects from the specified parent catalog.
   *
   * @public
   */
  CatalogList: Catalog[] | undefined;

  /**
   * A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetClassifierRequest {
  /**
   * Name of the classifier to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A classifier for custom `CSV` content.
 *
 * @public
 */
export interface CsvClassifier {
  /**
   * The name of the classifier.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The time that this classifier was registered.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time that this classifier was last updated.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The version of this classifier.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * A custom symbol to denote what separates each column entry in the row.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * A custom symbol to denote what combines content into a single column value. It must be different from the column delimiter.
   *
   * @public
   */
  QuoteSymbol?: string | undefined;

  /**
   * Indicates whether the CSV file contains a header.
   *
   * @public
   */
  ContainsHeader?: CsvHeaderOption | undefined;

  /**
   * A list of strings representing column names.
   *
   * @public
   */
  Header?: string[] | undefined;

  /**
   * Specifies not to trim values before identifying the type of column values. The default value is `true`.
   *
   * @public
   */
  DisableValueTrimming?: boolean | undefined;

  /**
   * Enables the processing of files that contain only one column.
   *
   * @public
   */
  AllowSingleColumn?: boolean | undefined;

  /**
   * Enables the custom datatype to be configured.
   *
   * @public
   */
  CustomDatatypeConfigured?: boolean | undefined;

  /**
   * A list of custom datatypes including "BINARY", "BOOLEAN", "DATE", "DECIMAL", "DOUBLE", "FLOAT", "INT", "LONG", "SHORT", "STRING", "TIMESTAMP".
   *
   * @public
   */
  CustomDatatypes?: string[] | undefined;

  /**
   * Sets the SerDe for processing CSV in the classifier, which will be applied in the Data Catalog. Valid values are `OpenCSVSerDe`, `LazySimpleSerDe`, and `None`. You can specify the `None` value when you want the crawler to do the detection.
   *
   * @public
   */
  Serde?: CsvSerdeOption | undefined;
}

/**
 * A classifier that uses `grok` patterns.
 *
 * @public
 */
export interface GrokClassifier {
  /**
   * The name of the classifier.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.
   *
   * @public
   */
  Classification: string | undefined;

  /**
   * The time that this classifier was registered.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time that this classifier was last updated.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The version of this classifier.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The grok pattern applied to a data store by this classifier. For more information, see built-in patterns in [Writing Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html).
   *
   * @public
   */
  GrokPattern: string | undefined;

  /**
   * Optional custom grok patterns defined by this classifier. For more information, see custom patterns in [Writing Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html).
   *
   * @public
   */
  CustomPatterns?: string | undefined;
}

/**
 * A classifier for `JSON` content.
 *
 * @public
 */
export interface JsonClassifier {
  /**
   * The name of the classifier.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The time that this classifier was registered.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time that this classifier was last updated.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The version of this classifier.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * A `JsonPath` string defining the JSON data for the classifier to classify. Glue supports a subset of JsonPath, as described in [Writing JsonPath Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json).
   *
   * @public
   */
  JsonPath: string | undefined;
}

/**
 * A classifier for `XML` content.
 *
 * @public
 */
export interface XMLClassifier {
  /**
   * The name of the classifier.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An identifier of the data format that the classifier matches.
   *
   * @public
   */
  Classification: string | undefined;

  /**
   * The time that this classifier was registered.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time that this classifier was last updated.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The version of this classifier.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The XML tag designating the element that contains each record in an XML document being parsed. This can't identify a self-closing element (closed by `/>`). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, `<row item_a="A" item_b="B"></row>` is okay, but `<row item_a="A" item_b="B" />` is not).
   *
   * @public
   */
  RowTag?: string | undefined;
}

/**
 * Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a `StructType` object that matches that data format.
 *
 * You can use the standard classifiers that Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a `grok` classifier, an `XML` classifier, a `JSON` classifier, or a custom `CSV` classifier, as specified in one of the fields in the `Classifier` object.
 *
 * @public
 */
export interface Classifier {
  /**
   * A classifier that uses `grok`.
   *
   * @public
   */
  GrokClassifier?: GrokClassifier | undefined;

  /**
   * A classifier for XML content.
   *
   * @public
   */
  XMLClassifier?: XMLClassifier | undefined;

  /**
   * A classifier for JSON content.
   *
   * @public
   */
  JsonClassifier?: JsonClassifier | undefined;

  /**
   * A classifier for comma-separated values (CSV).
   *
   * @public
   */
  CsvClassifier?: CsvClassifier | undefined;
}

/**
 * @public
 */
export interface GetClassifierResponse {
  /**
   * The requested classifier.
   *
   * @public
   */
  Classifier?: Classifier | undefined;
}

/**
 * @public
 */
export interface GetClassifiersRequest {
  /**
   * The size of the list to return (optional).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional continuation token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetClassifiersResponse {
  /**
   * The requested list of classifier objects.
   *
   * @public
   */
  Classifiers?: Classifier[] | undefined;

  /**
   * A continuation token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsForPartitionRequest {
  /**
   * The ID of the Data Catalog where the partitions in question reside. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database where the partitions reside.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the partitions' table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A list of partition values identifying the partition.
   *
   * @public
   */
  PartitionValues: string[] | undefined;

  /**
   * A list of the column names.
   *
   * @public
   */
  ColumnNames: string[] | undefined;
}

/**
 * Defines column statistics supported for bit sequence data values.
 *
 * @public
 */
export interface BinaryColumnStatisticsData {
  /**
   * The size of the longest bit sequence in the column.
   *
   * @public
   */
  MaximumLength: number | undefined;

  /**
   * The average bit sequence length in the column.
   *
   * @public
   */
  AverageLength: number | undefined;

  /**
   * The number of null values in the column.
   *
   * @public
   */
  NumberOfNulls: number | undefined;
}

/**
 * Defines column statistics supported for Boolean data columns.
 *
 * @public
 */
export interface BooleanColumnStatisticsData {
  /**
   * The number of true values in the column.
   *
   * @public
   */
  NumberOfTrues: number | undefined;

  /**
   * The number of false values in the column.
   *
   * @public
   */
  NumberOfFalses: number | undefined;

  /**
   * The number of null values in the column.
   *
   * @public
   */
  NumberOfNulls: number | undefined;
}

/**
 * Defines column statistics supported for timestamp data columns.
 *
 * @public
 */
export interface DateColumnStatisticsData {
  /**
   * The lowest value in the column.
   *
   * @public
   */
  MinimumValue?: Date | undefined;

  /**
   * The highest value in the column.
   *
   * @public
   */
  MaximumValue?: Date | undefined;

  /**
   * The number of null values in the column.
   *
   * @public
   */
  NumberOfNulls: number | undefined;

  /**
   * The number of distinct values in a column.
   *
   * @public
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * Contains a numeric value in decimal format.
 *
 * @public
 */
export interface DecimalNumber {
  /**
   * The unscaled numeric value.
   *
   * @public
   */
  UnscaledValue: Uint8Array | undefined;

  /**
   * The scale that determines where the decimal point falls in the unscaled value.
   *
   * @public
   */
  Scale: number | undefined;
}

/**
 * Defines column statistics supported for fixed-point number data columns.
 *
 * @public
 */
export interface DecimalColumnStatisticsData {
  /**
   * The lowest value in the column.
   *
   * @public
   */
  MinimumValue?: DecimalNumber | undefined;

  /**
   * The highest value in the column.
   *
   * @public
   */
  MaximumValue?: DecimalNumber | undefined;

  /**
   * The number of null values in the column.
   *
   * @public
   */
  NumberOfNulls: number | undefined;

  /**
   * The number of distinct values in a column.
   *
   * @public
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * Defines column statistics supported for floating-point number data columns.
 *
 * @public
 */
export interface DoubleColumnStatisticsData {
  /**
   * The lowest value in the column.
   *
   * @public
   */
  MinimumValue?: number | undefined;

  /**
   * The highest value in the column.
   *
   * @public
   */
  MaximumValue?: number | undefined;

  /**
   * The number of null values in the column.
   *
   * @public
   */
  NumberOfNulls: number | undefined;

  /**
   * The number of distinct values in a column.
   *
   * @public
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * Defines column statistics supported for integer data columns.
 *
 * @public
 */
export interface LongColumnStatisticsData {
  /**
   * The lowest value in the column.
   *
   * @public
   */
  MinimumValue?: number | undefined;

  /**
   * The highest value in the column.
   *
   * @public
   */
  MaximumValue?: number | undefined;

  /**
   * The number of null values in the column.
   *
   * @public
   */
  NumberOfNulls: number | undefined;

  /**
   * The number of distinct values in a column.
   *
   * @public
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * Defines column statistics supported for character sequence data values.
 *
 * @public
 */
export interface StringColumnStatisticsData {
  /**
   * The size of the longest string in the column.
   *
   * @public
   */
  MaximumLength: number | undefined;

  /**
   * The average string length in the column.
   *
   * @public
   */
  AverageLength: number | undefined;

  /**
   * The number of null values in the column.
   *
   * @public
   */
  NumberOfNulls: number | undefined;

  /**
   * The number of distinct values in a column.
   *
   * @public
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * Contains the individual types of column statistics data. Only one data object should be set and indicated by the `Type` attribute.
 *
 * @public
 */
export interface ColumnStatisticsData {
  /**
   * The type of column statistics data.
   *
   * @public
   */
  Type: ColumnStatisticsType | undefined;

  /**
   * Boolean column statistics data.
   *
   * @public
   */
  BooleanColumnStatisticsData?: BooleanColumnStatisticsData | undefined;

  /**
   * Date column statistics data.
   *
   * @public
   */
  DateColumnStatisticsData?: DateColumnStatisticsData | undefined;

  /**
   * Decimal column statistics data. UnscaledValues within are Base64-encoded binary objects storing big-endian, two's complement representations of the decimal's unscaled value.
   *
   * @public
   */
  DecimalColumnStatisticsData?: DecimalColumnStatisticsData | undefined;

  /**
   * Double column statistics data.
   *
   * @public
   */
  DoubleColumnStatisticsData?: DoubleColumnStatisticsData | undefined;

  /**
   * Long column statistics data.
   *
   * @public
   */
  LongColumnStatisticsData?: LongColumnStatisticsData | undefined;

  /**
   * String column statistics data.
   *
   * @public
   */
  StringColumnStatisticsData?: StringColumnStatisticsData | undefined;

  /**
   * Binary column statistics data.
   *
   * @public
   */
  BinaryColumnStatisticsData?: BinaryColumnStatisticsData | undefined;
}

/**
 * Represents the generated column-level statistics for a table or partition.
 *
 * @public
 */
export interface ColumnStatistics {
  /**
   * Name of column which statistics belong to.
   *
   * @public
   */
  ColumnName: string | undefined;

  /**
   * The data type of the column.
   *
   * @public
   */
  ColumnType: string | undefined;

  /**
   * The timestamp of when column statistics were generated.
   *
   * @public
   */
  AnalyzedTime: Date | undefined;

  /**
   * A `ColumnStatisticData` object that contains the statistics data values.
   *
   * @public
   */
  StatisticsData: ColumnStatisticsData | undefined;
}

/**
 * Encapsulates a column name that failed and the reason for failure.
 *
 * @public
 */
export interface ColumnError {
  /**
   * The name of the column that failed.
   *
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * An error message with the reason for the failure of an operation.
   *
   * @public
   */
  Error?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsForPartitionResponse {
  /**
   * List of ColumnStatistics that failed to be retrieved.
   *
   * @public
   */
  ColumnStatisticsList?: ColumnStatistics[] | undefined;

  /**
   * Error occurred during retrieving column statistics data.
   *
   * @public
   */
  Errors?: ColumnError[] | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsForTableRequest {
  /**
   * The ID of the Data Catalog where the partitions in question reside. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database where the partitions reside.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the partitions' table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A list of the column names.
   *
   * @public
   */
  ColumnNames: string[] | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsForTableResponse {
  /**
   * List of ColumnStatistics.
   *
   * @public
   */
  ColumnStatisticsList?: ColumnStatistics[] | undefined;

  /**
   * List of ColumnStatistics that failed to be retrieved.
   *
   * @public
   */
  Errors?: ColumnError[] | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskRunRequest {
  /**
   * The identifier for the particular column statistics task run.
   *
   * @public
   */
  ColumnStatisticsTaskRunId: string | undefined;
}

/**
 * The object that shows the details of the column stats run.
 *
 * @public
 */
export interface ColumnStatisticsTaskRun {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  CustomerId?: string | undefined;

  /**
   * The identifier for the particular column statistics task run.
   *
   * @public
   */
  ColumnStatisticsTaskRunId?: string | undefined;

  /**
   * The database where the table resides.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the table for which column statistics is generated.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * A list of the column names. If none is supplied, all column names for the table will be used by default.
   *
   * @public
   */
  ColumnNameList?: string[] | undefined;

  /**
   * The ID of the Data Catalog where the table resides. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogID?: string | undefined;

  /**
   * The IAM role that the service assumes to generate statistics.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The percentage of rows used to generate statistics. If none is supplied, the entire table will be used to generate stats.
   *
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * Name of the security configuration that is used to encrypt CloudWatch logs for the column stats task run.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * The number of workers used to generate column statistics. The job is preconfigured to autoscale up to 25 instances.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The type of workers being used for generating stats. The default is `g.1x`.
   *
   * @public
   */
  WorkerType?: string | undefined;

  /**
   * The type of column statistics computation.
   *
   * @public
   */
  ComputationType?: ComputationType | undefined;

  /**
   * The status of the task run.
   *
   * @public
   */
  Status?: ColumnStatisticsState | undefined;

  /**
   * The time that this task was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last point in time when this task was modified.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The start time of the task.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the task.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The error message for the job.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The calculated DPU usage in seconds for all autoscaled workers.
   *
   * @public
   */
  DPUSeconds?: number | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskRunResponse {
  /**
   * A `ColumnStatisticsTaskRun` object representing the details of the column stats run.
   *
   * @public
   */
  ColumnStatisticsTaskRun?: ColumnStatisticsTaskRun | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskRunsRequest {
  /**
   * The name of the database where the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The maximum size of the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the Data Catalog where the table resides. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogID?: string | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskRunsResponse {
  /**
   * A list of column statistics task runs.
   *
   * @public
   */
  ColumnStatisticsTaskRuns?: ColumnStatisticsTaskRun[] | undefined;

  /**
   * A continuation token, if not all task runs have yet been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskSettingsRequest {
  /**
   * The name of the database where the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table for which to retrieve column statistics.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The ID of the Data Catalog where the table resides. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogID?: string | undefined;
}

/**
 * A run attempt for a column statistics task run.
 *
 * @public
 */
export interface ExecutionAttempt {
  /**
   * The status of the last column statistics task run.
   *
   * @public
   */
  Status?: ExecutionStatus | undefined;

  /**
   * A task run ID for the last column statistics task run.
   *
   * @public
   */
  ColumnStatisticsTaskRunId?: string | undefined;

  /**
   * A timestamp when the last column statistics task run occurred.
   *
   * @public
   */
  ExecutionTimestamp?: Date | undefined;

  /**
   * An error message associated with the last column statistics task run.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * The settings for a column statistics task.
 *
 * @public
 */
export interface ColumnStatisticsTaskSettings {
  /**
   * The name of the database where the table resides.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the table for which to generate column statistics.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * A schedule for running the column statistics, specified in CRON syntax.
   *
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * A list of column names for which to run statistics.
   *
   * @public
   */
  ColumnNameList?: string[] | undefined;

  /**
   * The ID of the Data Catalog in which the database resides.
   *
   * @public
   */
  CatalogID?: string | undefined;

  /**
   * The role used for running the column statistics.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The percentage of data to sample.
   *
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * Name of the security configuration that is used to encrypt CloudWatch logs.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * The type of schedule for a column statistics task. Possible values may be `CRON` or `AUTO`.
   *
   * @public
   */
  ScheduleType?: ScheduleType | undefined;

  /**
   * The source of setting the column statistics task. Possible values may be `CATALOG` or `TABLE`.
   *
   * @public
   */
  SettingSource?: SettingSource | undefined;

  /**
   * The last `ExecutionAttempt` for the column statistics task run.
   *
   * @public
   */
  LastExecutionAttempt?: ExecutionAttempt | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskSettingsResponse {
  /**
   * A `ColumnStatisticsTaskSettings` object representing the settings for the column statistics task.
   *
   * @public
   */
  ColumnStatisticsTaskSettings?: ColumnStatisticsTaskSettings | undefined;
}

/**
 * @public
 */
export interface GetConnectionRequest {
  /**
   * The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the connection definition to retrieve.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Allows you to retrieve the connection metadata without returning the password. For instance, the Glue console uses this flag to retrieve the connection, and does not display the password. Set this parameter when the caller might not have permission to use the KMS key to decrypt the password, but it does have permission to access the rest of the connection properties.
   *
   * @public
   */
  HidePassword?: boolean | undefined;

  /**
   * For connections that may be used in multiple services, specifies returning properties for the specified compute environment.
   *
   * @public
   */
  ApplyOverrideForComputeEnvironment?: ComputeEnvironment | undefined;
}

/**
 * Defines a connection to a data source.
 *
 * @public
 */
export interface Connection {
  /**
   * The name of the connection definition.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the connection.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of the connection. Currently, SFTP is not supported.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * A list of criteria that can be used in selecting this connection.
   *
   * @public
   */
  MatchCriteria?: string[] | undefined;

  /**
   * These key-value pairs define parameters for the connection when using the version 1 Connection schema:
   *
   * - `HOST` - The host URI: either the fully qualified domain name (FQDN) or the IPv4 address of the database host.
   * - `PORT` - The port number, between 1024 and 65535, of the port on which the database host is listening for database connections.
   * - `USER_NAME` - The name under which to log in to the database. The value string for `USER_NAME` is "`USERNAME`".
   * - `PASSWORD` - A password, if one is used, for the user name.
   * - `ENCRYPTED_PASSWORD` - When you enable connection password protection by setting `ConnectionPasswordEncryption` in the Data Catalog encryption settings, this field stores the encrypted password.
   * - `JDBC_DRIVER_JAR_URI` - The Amazon Simple Storage Service (Amazon S3) path of the JAR file that contains the JDBC driver to use.
   * - `JDBC_DRIVER_CLASS_NAME` - The class name of the JDBC driver to use.
   * - `JDBC_ENGINE` - The name of the JDBC engine to use.
   * - `JDBC_ENGINE_VERSION` - The version of the JDBC engine to use.
   * - `CONFIG_FILES` - (Reserved for future use.)
   * - `INSTANCE_ID` - The instance ID to use.
   * - `JDBC_CONNECTION_URL` - The URL for connecting to a JDBC data source.
   * - `JDBC_ENFORCE_SSL` - A case-insensitive Boolean string (true, false) specifying whether Secure Sockets Layer (SSL) with hostname matching is enforced for the JDBC connection on the client. The default is false.
   * - `CUSTOM_JDBC_CERT` - An Amazon S3 location specifying the customer's root certificate. Glue uses this root certificate to validate the customer’s certificate when connecting to the customer database. Glue only handles X.509 certificates. The certificate provided must be DER-encoded and supplied in Base64 encoding PEM format.
   * - `SKIP_CUSTOM_JDBC_CERT_VALIDATION` - By default, this is `false`. Glue validates the Signature algorithm and Subject Public Key Algorithm for the customer certificate. The only permitted algorithms for the Signature algorithm are SHA256withRSA, SHA384withRSA or SHA512withRSA. For the Subject Public Key Algorithm, the key length must be at least 2048. You can set the value of this property to `true` to skip Glue’s validation of the customer certificate.
   * - `CUSTOM_JDBC_CERT_STRING` - A custom JDBC certificate string which is used for domain match or distinguished name match to prevent a man-in-the-middle attack. In Oracle database, this is used as the `SSL_SERVER_CERT_DN`; in Microsoft SQL Server, this is used as the `hostNameInCertificate`.
   * - `CONNECTION_URL` - The URL for connecting to a general (non-JDBC) data source.
   * - `SECRET_ID` - The secret ID used for the secret manager of credentials.
   * - `CONNECTOR_URL` - The connector URL for a MARKETPLACE or CUSTOM connection.
   * - `CONNECTOR_TYPE` - The connector type for a MARKETPLACE or CUSTOM connection.
   * - `CONNECTOR_CLASS_NAME` - The connector class name for a MARKETPLACE or CUSTOM connection.
   * - `KAFKA_BOOTSTRAP_SERVERS` - A comma-separated list of host and port pairs that are the addresses of the Apache Kafka brokers in a Kafka cluster to which a Kafka client will connect to and bootstrap itself.
   * - `KAFKA_SSL_ENABLED` - Whether to enable or disable SSL on an Apache Kafka connection. Default value is "true".
   * - `KAFKA_CUSTOM_CERT` - The Amazon S3 URL for the private CA cert file (.pem format). The default is an empty string.
   * - `KAFKA_SKIP_CUSTOM_CERT_VALIDATION` - Whether to skip the validation of the CA cert file or not. Glue validates for three algorithms: SHA256withRSA, SHA384withRSA and SHA512withRSA. Default value is "false".
   * - `KAFKA_CLIENT_KEYSTORE` - The Amazon S3 location of the client keystore file for Kafka client side authentication (Optional).
   * - `KAFKA_CLIENT_KEYSTORE_PASSWORD` - The password to access the provided keystore (Optional).
   * - `KAFKA_CLIENT_KEY_PASSWORD` - A keystore can consist of multiple keys, so this is the password to access the client key to be used with the Kafka server side key (Optional).
   * - `ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD` - The encrypted version of the Kafka client keystore password (if the user has the Glue encrypt passwords setting selected).
   * - `ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD` - The encrypted version of the Kafka client key password (if the user has the Glue encrypt passwords setting selected).
   * - `KAFKA_SASL_MECHANISM` - `"SCRAM-SHA-512"`, `"GSSAPI"`, `"AWS_MSK_IAM"`, or `"PLAIN"`. These are the supported [SASL Mechanisms](https://www.iana.org/assignments/sasl-mechanisms/sasl-mechanisms.xhtml).
   * - `KAFKA_SASL_PLAIN_USERNAME` - A plaintext username used to authenticate with the "PLAIN" mechanism.
   * - `KAFKA_SASL_PLAIN_PASSWORD` - A plaintext password used to authenticate with the "PLAIN" mechanism.
   * - `ENCRYPTED_KAFKA_SASL_PLAIN_PASSWORD` - The encrypted version of the Kafka SASL PLAIN password (if the user has the Glue encrypt passwords setting selected).
   * - `KAFKA_SASL_SCRAM_USERNAME` - A plaintext username used to authenticate with the "SCRAM-SHA-512" mechanism.
   * - `KAFKA_SASL_SCRAM_PASSWORD` - A plaintext password used to authenticate with the "SCRAM-SHA-512" mechanism.
   * - `ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD` - The encrypted version of the Kafka SASL SCRAM password (if the user has the Glue encrypt passwords setting selected).
   * - `KAFKA_SASL_SCRAM_SECRETS_ARN` - The Amazon Resource Name of a secret in Amazon Web Services Secrets Manager.
   * - `KAFKA_SASL_GSSAPI_KEYTAB` - The S3 location of a Kerberos `keytab` file. A keytab stores long-term keys for one or more principals. For more information, see [MIT Kerberos Documentation: Keytab](https://web.mit.edu/kerberos/krb5-latest/doc/basic/keytab_def.html).
   * - `KAFKA_SASL_GSSAPI_KRB5_CONF` - The S3 location of a Kerberos `krb5.conf` file. A krb5.conf stores Kerberos configuration information, such as the location of the KDC server. For more information, see [MIT Kerberos Documentation: krb5.conf](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html).
   * - `KAFKA_SASL_GSSAPI_SERVICE` - The Kerberos service name, as set with `sasl.kerberos.service.name` in your [Kafka Configuration](https://kafka.apache.org/documentation/#brokerconfigs_sasl.kerberos.service.name).
   * - `KAFKA_SASL_GSSAPI_PRINCIPAL` - The name of the Kerberos princial used by Glue. For more information, see [Kafka Documentation: Configuring Kafka Brokers](https://kafka.apache.org/documentation/#security_sasl_kerberos_clientconfig).
   * - `ROLE_ARN` - The role to be used for running queries.
   * - `REGION` - The Amazon Web Services Region where queries will be run.
   * - `WORKGROUP_NAME` - The name of an Amazon Redshift serverless workgroup or Amazon Athena workgroup in which queries will run.
   * - `CLUSTER_IDENTIFIER` - The cluster identifier of an Amazon Redshift cluster in which queries will run.
   * - `DATABASE` - The Amazon Redshift database that you are connecting to.
   *
   * @public
   */
  ConnectionProperties?: Partial<Record<ConnectionPropertyKey, string>> | undefined;

  /**
   * Connection properties specific to the Spark compute environment.
   *
   * @public
   */
  SparkProperties?: Record<string, string> | undefined;

  /**
   * Connection properties specific to the Athena compute environment.
   *
   * @public
   */
  AthenaProperties?: Record<string, string> | undefined;

  /**
   * Connection properties specific to the Python compute environment.
   *
   * @public
   */
  PythonProperties?: Record<string, string> | undefined;

  /**
   * The physical connection requirements, such as virtual private cloud (VPC) and `SecurityGroup`, that are needed to make this connection successfully.
   *
   * @public
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;

  /**
   * The timestamp of the time that this connection definition was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The timestamp of the last time the connection definition was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The user, group, or role that last updated this connection definition.
   *
   * @public
   */
  LastUpdatedBy?: string | undefined;

  /**
   * The status of the connection. Can be one of: `READY`, `IN_PROGRESS`, or `FAILED`.
   *
   * @public
   */
  Status?: ConnectionStatus | undefined;

  /**
   * The reason for the connection status.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * A timestamp of the time this connection was last validated.
   *
   * @public
   */
  LastConnectionValidationTime?: Date | undefined;

  /**
   * The authentication properties of the connection.
   *
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfiguration | undefined;

  /**
   * The version of the connection schema for this connection. Version 2 supports properties for specific compute environments.
   *
   * @public
   */
  ConnectionSchemaVersion?: number | undefined;

  /**
   * A list of compute environments compatible with the connection.
   *
   * @public
   */
  CompatibleComputeEnvironments?: ComputeEnvironment[] | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * The requested connection definition.
   *
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * Filters the connection definitions that are returned by the `GetConnections` API operation.
 *
 * @public
 */
export interface GetConnectionsFilter {
  /**
   * A criteria string that must match the criteria recorded in the connection definition for that connection definition to be returned.
   *
   * @public
   */
  MatchCriteria?: string[] | undefined;

  /**
   * The type of connections to return. Currently, SFTP is not supported.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * Denotes if the connection was created with schema version 1 or 2.
   *
   * @public
   */
  ConnectionSchemaVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetConnectionsRequest {
  /**
   * The ID of the Data Catalog in which the connections reside. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A filter that controls which connections are returned.
   *
   * @public
   */
  Filter?: GetConnectionsFilter | undefined;

  /**
   * Allows you to retrieve the connection metadata without returning the password. For instance, the Glue console uses this flag to retrieve the connection, and does not display the password. Set this parameter when the caller might not have permission to use the KMS key to decrypt the password, but it does have permission to access the rest of the connection properties.
   *
   * @public
   */
  HidePassword?: boolean | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of connections to return in one response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetConnectionsResponse {
  /**
   * A list of requested connection definitions.
   *
   * @public
   */
  ConnectionList?: Connection[] | undefined;

  /**
   * A continuation token, if the list of connections returned does not include the last of the filtered connections.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCrawlerRequest {
  /**
   * The name of the crawler to retrieve metadata for.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetCrawlerResponse {
  /**
   * The metadata for the specified crawler.
   *
   * @public
   */
  Crawler?: Crawler | undefined;
}

/**
 * @public
 */
export interface GetCrawlerMetricsRequest {
  /**
   * A list of the names of crawlers about which to retrieve metrics.
   *
   * @public
   */
  CrawlerNameList?: string[] | undefined;

  /**
   * The maximum size of a list to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Metrics for a specified crawler.
 *
 * @public
 */
export interface CrawlerMetrics {
  /**
   * The name of the crawler.
   *
   * @public
   */
  CrawlerName?: string | undefined;

  /**
   * The estimated time left to complete a running crawl.
   *
   * @public
   */
  TimeLeftSeconds?: number | undefined;

  /**
   * True if the crawler is still estimating how long it will take to complete this run.
   *
   * @public
   */
  StillEstimating?: boolean | undefined;

  /**
   * The duration of the crawler's most recent run, in seconds.
   *
   * @public
   */
  LastRuntimeSeconds?: number | undefined;

  /**
   * The median duration of this crawler's runs, in seconds.
   *
   * @public
   */
  MedianRuntimeSeconds?: number | undefined;

  /**
   * The number of tables created by this crawler.
   *
   * @public
   */
  TablesCreated?: number | undefined;

  /**
   * The number of tables updated by this crawler.
   *
   * @public
   */
  TablesUpdated?: number | undefined;

  /**
   * The number of tables deleted by this crawler.
   *
   * @public
   */
  TablesDeleted?: number | undefined;
}

/**
 * @public
 */
export interface GetCrawlerMetricsResponse {
  /**
   * A list of metrics for the specified crawler.
   *
   * @public
   */
  CrawlerMetricsList?: CrawlerMetrics[] | undefined;

  /**
   * A continuation token, if the returned list does not contain the last metric available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCrawlersRequest {
  /**
   * The number of crawlers to return on each call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCrawlersResponse {
  /**
   * A list of crawler metadata.
   *
   * @public
   */
  Crawlers?: Crawler[] | undefined;

  /**
   * A continuation token, if the returned list has not reached the end of those defined in this customer account.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCustomEntityTypeRequest {
  /**
   * The name of the custom pattern that you want to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetCustomEntityTypeResponse {
  /**
   * The name of the custom pattern that you retrieved.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A regular expression string that is used for detecting sensitive data in a custom pattern.
   *
   * @public
   */
  RegexString?: string | undefined;

  /**
   * A list of context words if specified when you created the custom pattern. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.
   *
   * @public
   */
  ContextWords?: string[] | undefined;
}

/**
 * @public
 */
export interface GetDashboardUrlRequest {
  /**
   * The unique identifier of the resource for which to retrieve the dashboard URL.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The type of the resource. Valid values are `SESSION` and `JOB`.
   *
   * @public
   */
  ResourceType: GlueResourceType | undefined;

  /**
   * The origin of the request.
   *
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardUrlResponse {
  /**
   * The URL for the Spark monitoring dashboard.
   *
   * @public
   */
  Url: string | undefined;
}

/**
 * @public
 */
export interface GetDatabaseRequest {
  /**
   * The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the database to retrieve. For Hive compatibility, this should be all lowercase.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The `Database` object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS.
 *
 * @public
 */
export interface Database {
  /**
   * The name of the database. For Hive compatibility, this is folded to lowercase when it is stored.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the database.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The location of the database (for example, an HDFS path).
   *
   * @public
   */
  LocationUri?: string | undefined;

  /**
   * These key-value pairs define parameters and properties of the database.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * The time at which the metadata database was created in the catalog.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * Creates a set of default permissions on the table for principals. Used by Lake Formation. Not used in the normal course of Glue operations.
   *
   * @public
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * A `DatabaseIdentifier` structure that describes a target database for resource linking.
   *
   * @public
   */
  TargetDatabase?: DatabaseIdentifier | undefined;

  /**
   * The ID of the Data Catalog in which the database resides.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A `FederatedDatabase` structure that references an entity outside the Glue Data Catalog.
   *
   * @public
   */
  FederatedDatabase?: FederatedDatabase | undefined;
}

/**
 * @public
 */
export interface GetDatabaseResponse {
  /**
   * The definition of the specified database in the Data Catalog.
   *
   * @public
   */
  Database?: Database | undefined;
}
