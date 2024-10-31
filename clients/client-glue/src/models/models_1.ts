// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GlueServiceException as __BaseException } from "./GlueServiceException";

import {
  Action,
  AuthenticationConfiguration,
  AuthenticationConfigurationInput,
  AuthenticationConfigurationInputFilterSensitiveLog,
  Blueprint,
  Column,
  ConnectionsList,
  Crawler,
  CrawlerTargets,
  DataQualityAnalyzerResult,
  DataQualityAnalyzerResultFilterSensitiveLog,
  DataQualityObservation,
  DataQualityObservationFilterSensitiveLog,
  DataQualityRuleResult,
  DataQualityRuleResultFilterSensitiveLog,
  DataSource,
  DevEndpoint,
  ErrorDetail,
  EventBatchingCondition,
  GlueTable,
  InclusionAnnotationValue,
  JobRun,
  LakeFormationConfiguration,
  LineageConfiguration,
  PartitionInput,
  Predicate,
  RecrawlPolicy,
  Schedule,
  SchemaChangePolicy,
  SchemaId,
  StorageDescriptor,
  TableOptimizerConfiguration,
  TableOptimizerType,
  TriggerType,
  WorkerType,
} from "./models_0";

/**
 * @public
 */
export interface CancelDataQualityRulesetEvaluationRunRequest {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface CancelDataQualityRulesetEvaluationRunResponse {}

/**
 * @public
 */
export interface CancelMLTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>A unique identifier for the task run.</p>
   * @public
   */
  TaskRunId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskStatusType = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
  TIMEOUT: "TIMEOUT",
} as const;

/**
 * @public
 */
export type TaskStatusType = (typeof TaskStatusType)[keyof typeof TaskStatusType];

/**
 * @public
 */
export interface CancelMLTaskRunResponse {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId?: string;

  /**
   * <p>The unique identifier for the task run.</p>
   * @public
   */
  TaskRunId?: string;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType;
}

/**
 * @public
 */
export interface CancelStatementRequest {
  /**
   * <p>The Session ID of the statement to be cancelled.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The ID of the statement to be cancelled.</p>
   * @public
   */
  Id: number | undefined;

  /**
   * <p>The origin of the request to cancel the statement.</p>
   * @public
   */
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface CancelStatementResponse {}

/**
 * <p>The session is in an invalid state to perform a requested operation.</p>
 * @public
 */
export class IllegalSessionStateException extends __BaseException {
  readonly name: "IllegalSessionStateException" = "IllegalSessionStateException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalSessionStateException, __BaseException>) {
    super({
      name: "IllegalSessionStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalSessionStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const DataFormat = {
  AVRO: "AVRO",
  JSON: "JSON",
  PROTOBUF: "PROTOBUF",
} as const;

/**
 * @public
 */
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];

/**
 * @public
 */
export interface CheckSchemaVersionValidityInput {
  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat: DataFormat | undefined;

  /**
   * <p>The definition of the schema that has to be validated.</p>
   * @public
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface CheckSchemaVersionValidityResponse {
  /**
   * <p>Return true, if the schema is valid and false otherwise.</p>
   * @public
   */
  Valid?: boolean;

  /**
   * <p>A validation failure error message.</p>
   * @public
   */
  Error?: string;
}

/**
 * @public
 */
export interface CreateBlueprintRequest {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the blueprint.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is published.</p>
   * @public
   */
  BlueprintLocation: string | undefined;

  /**
   * <p>The tags to be applied to this blueprint.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateBlueprintResponse {
  /**
   * <p>Returns the name of the blueprint that was registered.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 * @enum
 */
export const CsvHeaderOption = {
  ABSENT: "ABSENT",
  PRESENT: "PRESENT",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type CsvHeaderOption = (typeof CsvHeaderOption)[keyof typeof CsvHeaderOption];

/**
 * @public
 * @enum
 */
export const CsvSerdeOption = {
  LazySimpleSerDe: "LazySimpleSerDe",
  None: "None",
  OpenCSVSerDe: "OpenCSVSerDe",
} as const;

/**
 * @public
 */
export type CsvSerdeOption = (typeof CsvSerdeOption)[keyof typeof CsvSerdeOption];

/**
 * <p>Specifies a custom CSV classifier for <code>CreateClassifier</code> to create.</p>
 * @public
 */
export interface CreateCsvClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   * @public
   */
  Delimiter?: string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. Must be different from the column delimiter.</p>
   * @public
   */
  QuoteSymbol?: string;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   * @public
   */
  ContainsHeader?: CsvHeaderOption;

  /**
   * <p>A list of strings representing column names.</p>
   * @public
   */
  Header?: string[];

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   * @public
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   * @public
   */
  AllowSingleColumn?: boolean;

  /**
   * <p>Enables the configuration of custom datatypes.</p>
   * @public
   */
  CustomDatatypeConfigured?: boolean;

  /**
   * <p>Creates a list of supported custom datatypes.</p>
   * @public
   */
  CustomDatatypes?: string[];

  /**
   * <p>Sets the SerDe for processing CSV in the classifier, which will be applied in the Data Catalog. Valid values are <code>OpenCSVSerDe</code>, <code>LazySimpleSerDe</code>, and <code>None</code>. You can specify the <code>None</code> value when you want the crawler to do the detection.</p>
   * @public
   */
  Serde?: CsvSerdeOption;
}

/**
 * <p>Specifies a <code>grok</code> classifier for <code>CreateClassifier</code>
 *       to create.</p>
 * @public
 */
export interface CreateGrokClassifierRequest {
  /**
   * <p>An identifier of the data format that the classifier matches,
   *       such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.</p>
   * @public
   */
  Classification: string | undefined;

  /**
   * <p>The name of the new classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The grok pattern used by this classifier.</p>
   * @public
   */
  GrokPattern: string | undefined;

  /**
   * <p>Optional custom grok patterns used by this classifier.</p>
   * @public
   */
  CustomPatterns?: string;
}

/**
 * <p>Specifies a JSON classifier for <code>CreateClassifier</code> to create.</p>
 * @public
 */
export interface CreateJsonClassifierRequest {
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
  JsonPath: string | undefined;
}

/**
 * <p>Specifies an XML classifier for <code>CreateClassifier</code> to create.</p>
 * @public
 */
export interface CreateXMLClassifierRequest {
  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   * @public
   */
  Classification: string | undefined;

  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   * @public
   */
  RowTag?: string;
}

/**
 * @public
 */
export interface CreateClassifierRequest {
  /**
   * <p>A <code>GrokClassifier</code> object specifying the classifier
   *       to create.</p>
   * @public
   */
  GrokClassifier?: CreateGrokClassifierRequest;

  /**
   * <p>An <code>XMLClassifier</code> object specifying the classifier
   *       to create.</p>
   * @public
   */
  XMLClassifier?: CreateXMLClassifierRequest;

  /**
   * <p>A <code>JsonClassifier</code> object specifying the classifier
   *       to create.</p>
   * @public
   */
  JsonClassifier?: CreateJsonClassifierRequest;

  /**
   * <p>A <code>CsvClassifier</code> object specifying the classifier
   *       to create.</p>
   * @public
   */
  CsvClassifier?: CreateCsvClassifierRequest;
}

/**
 * @public
 */
export interface CreateClassifierResponse {}

/**
 * <p>An exception thrown when you try to start another job while running a column stats generation job.</p>
 * @public
 */
export class ColumnStatisticsTaskRunningException extends __BaseException {
  readonly name: "ColumnStatisticsTaskRunningException" = "ColumnStatisticsTaskRunningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ColumnStatisticsTaskRunningException, __BaseException>) {
    super({
      name: "ColumnStatisticsTaskRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ColumnStatisticsTaskRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateColumnStatisticsTaskSettingsRequest {
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
  Role: string | undefined;

  /**
   * <p>A schedule for running the column statistics, specified in CRON syntax.</p>
   * @public
   */
  Schedule?: string;

  /**
   * <p>A list of column names for which to run statistics.</p>
   * @public
   */
  ColumnNameList?: string[];

  /**
   * <p>The percentage of data to sample.</p>
   * @public
   */
  SampleSize?: number;

  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   * @public
   */
  CatalogID?: string;

  /**
   * <p>Name of the security configuration that is used to encrypt CloudWatch logs.</p>
   * @public
   */
  SecurityConfiguration?: string;

  /**
   * <p>A map of tags.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateColumnStatisticsTaskSettingsResponse {}

/**
 * @public
 * @enum
 */
export const ConnectionPropertyKey = {
  CLUSTER_IDENTIFIER: "CLUSTER_IDENTIFIER",
  CONFIG_FILES: "CONFIG_FILES",
  CONNECTION_URL: "CONNECTION_URL",
  CONNECTOR_CLASS_NAME: "CONNECTOR_CLASS_NAME",
  CONNECTOR_TYPE: "CONNECTOR_TYPE",
  CONNECTOR_URL: "CONNECTOR_URL",
  CUSTOM_JDBC_CERT: "CUSTOM_JDBC_CERT",
  CUSTOM_JDBC_CERT_STRING: "CUSTOM_JDBC_CERT_STRING",
  DATABASE: "DATABASE",
  ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD: "ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD",
  ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD: "ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD",
  ENCRYPTED_KAFKA_SASL_PLAIN_PASSWORD: "ENCRYPTED_KAFKA_SASL_PLAIN_PASSWORD",
  ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD: "ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD",
  ENCRYPTED_PASSWORD: "ENCRYPTED_PASSWORD",
  HOST: "HOST",
  INSTANCE_ID: "INSTANCE_ID",
  JDBC_CONNECTION_URL: "JDBC_CONNECTION_URL",
  JDBC_DRIVER_CLASS_NAME: "JDBC_DRIVER_CLASS_NAME",
  JDBC_DRIVER_JAR_URI: "JDBC_DRIVER_JAR_URI",
  JDBC_ENFORCE_SSL: "JDBC_ENFORCE_SSL",
  JDBC_ENGINE: "JDBC_ENGINE",
  JDBC_ENGINE_VERSION: "JDBC_ENGINE_VERSION",
  KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS",
  KAFKA_CLIENT_KEYSTORE: "KAFKA_CLIENT_KEYSTORE",
  KAFKA_CLIENT_KEYSTORE_PASSWORD: "KAFKA_CLIENT_KEYSTORE_PASSWORD",
  KAFKA_CLIENT_KEY_PASSWORD: "KAFKA_CLIENT_KEY_PASSWORD",
  KAFKA_CUSTOM_CERT: "KAFKA_CUSTOM_CERT",
  KAFKA_SASL_GSSAPI_KEYTAB: "KAFKA_SASL_GSSAPI_KEYTAB",
  KAFKA_SASL_GSSAPI_KRB5_CONF: "KAFKA_SASL_GSSAPI_KRB5_CONF",
  KAFKA_SASL_GSSAPI_PRINCIPAL: "KAFKA_SASL_GSSAPI_PRINCIPAL",
  KAFKA_SASL_GSSAPI_SERVICE: "KAFKA_SASL_GSSAPI_SERVICE",
  KAFKA_SASL_MECHANISM: "KAFKA_SASL_MECHANISM",
  KAFKA_SASL_PLAIN_PASSWORD: "KAFKA_SASL_PLAIN_PASSWORD",
  KAFKA_SASL_PLAIN_USERNAME: "KAFKA_SASL_PLAIN_USERNAME",
  KAFKA_SASL_SCRAM_PASSWORD: "KAFKA_SASL_SCRAM_PASSWORD",
  KAFKA_SASL_SCRAM_SECRETS_ARN: "KAFKA_SASL_SCRAM_SECRETS_ARN",
  KAFKA_SASL_SCRAM_USERNAME: "KAFKA_SASL_SCRAM_USERNAME",
  KAFKA_SKIP_CUSTOM_CERT_VALIDATION: "KAFKA_SKIP_CUSTOM_CERT_VALIDATION",
  KAFKA_SSL_ENABLED: "KAFKA_SSL_ENABLED",
  PASSWORD: "PASSWORD",
  PORT: "PORT",
  REGION: "REGION",
  ROLE_ARN: "ROLE_ARN",
  SECRET_ID: "SECRET_ID",
  SKIP_CUSTOM_JDBC_CERT_VALIDATION: "SKIP_CUSTOM_JDBC_CERT_VALIDATION",
  USER_NAME: "USERNAME",
  WORKGROUP_NAME: "WORKGROUP_NAME",
} as const;

/**
 * @public
 */
export type ConnectionPropertyKey = (typeof ConnectionPropertyKey)[keyof typeof ConnectionPropertyKey];

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  CUSTOM: "CUSTOM",
  JDBC: "JDBC",
  KAFKA: "KAFKA",
  MARKETPLACE: "MARKETPLACE",
  MONGODB: "MONGODB",
  NETWORK: "NETWORK",
  SALESFORCE: "SALESFORCE",
  SFTP: "SFTP",
  VIEW_VALIDATION_ATHENA: "VIEW_VALIDATION_ATHENA",
  VIEW_VALIDATION_REDSHIFT: "VIEW_VALIDATION_REDSHIFT",
} as const;

/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * <p>The OAuth client app in GetConnection response.</p>
 * @public
 */
export interface PhysicalConnectionRequirements {
  /**
   * <p>The subnet ID used by the connection.</p>
   * @public
   */
  SubnetId?: string;

  /**
   * <p>The security group ID list used by the connection.</p>
   * @public
   */
  SecurityGroupIdList?: string[];

  /**
   * <p>The connection's Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string;
}

/**
 * <p>A structure that is used to specify a connection to create or update.</p>
 * @public
 */
export interface ConnectionInput {
  /**
   * <p>The name of the connection.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the connection.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The type of the connection. Currently, these types are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>JDBC</code> - Designates a connection to a database through Java Database Connectivity (JDBC).</p>
   *                <p>
   *                   <code>JDBC</code> Connections use the following ConnectionParameters.</p>
   *                <ul>
   *                   <li>
   *                      <p>Required: All of (<code>HOST</code>, <code>PORT</code>, <code>JDBC_ENGINE</code>) or <code>JDBC_CONNECTION_URL</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Required: All of (<code>USERNAME</code>, <code>PASSWORD</code>) or <code>SECRET_ID</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>JDBC_ENFORCE_SSL</code>, <code>CUSTOM_JDBC_CERT</code>, <code>CUSTOM_JDBC_CERT_STRING</code>, <code>SKIP_CUSTOM_JDBC_CERT_VALIDATION</code>.  These parameters are used to configure SSL with JDBC.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA</code> - Designates a connection to an Apache Kafka streaming platform.</p>
   *                <p>
   *                   <code>KAFKA</code> Connections use the following ConnectionParameters.</p>
   *                <ul>
   *                   <li>
   *                      <p>Required: <code>KAFKA_BOOTSTRAP_SERVERS</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>KAFKA_SSL_ENABLED</code>, <code>KAFKA_CUSTOM_CERT</code>, <code>KAFKA_SKIP_CUSTOM_CERT_VALIDATION</code>. These parameters are used to configure SSL with <code>KAFKA</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>KAFKA_CLIENT_KEYSTORE</code>, <code>KAFKA_CLIENT_KEYSTORE_PASSWORD</code>, <code>KAFKA_CLIENT_KEY_PASSWORD</code>, <code>ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD</code>, <code>ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD</code>. These parameters are used to configure TLS client configuration with SSL in <code>KAFKA</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>KAFKA_SASL_MECHANISM</code>. Can be specified as <code>SCRAM-SHA-512</code>, <code>GSSAPI</code>, or <code>AWS_MSK_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>KAFKA_SASL_SCRAM_USERNAME</code>, <code>KAFKA_SASL_SCRAM_PASSWORD</code>, <code>ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD</code>. These parameters are used to configure SASL/SCRAM-SHA-512 authentication with <code>KAFKA</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>KAFKA_SASL_GSSAPI_KEYTAB</code>, <code>KAFKA_SASL_GSSAPI_KRB5_CONF</code>, <code>KAFKA_SASL_GSSAPI_SERVICE</code>, <code>KAFKA_SASL_GSSAPI_PRINCIPAL</code>. These parameters are used to configure SASL/GSSAPI authentication with <code>KAFKA</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MONGODB</code> - Designates a connection to a MongoDB document database.</p>
   *                <p>
   *                   <code>MONGODB</code> Connections use the following ConnectionParameters.</p>
   *                <ul>
   *                   <li>
   *                      <p>Required: <code>CONNECTION_URL</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Required: All of (<code>USERNAME</code>, <code>PASSWORD</code>) or <code>SECRET_ID</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SALESFORCE</code> - Designates a connection to Salesforce using OAuth authencation.</p>
   *                <ul>
   *                   <li>
   *                      <p>Requires the <code>AuthenticationConfiguration</code> member to be configured.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VIEW_VALIDATION_REDSHIFT</code> - Designates a connection used for view validation by Amazon Redshift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VIEW_VALIDATION_ATHENA</code> - Designates a connection used for view validation by Amazon Athena.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK</code> - Designates a network connection to a data source within an Amazon Virtual Private Cloud environment (Amazon VPC).</p>
   *                <p>
   *                   <code>NETWORK</code> Connections do not require ConnectionParameters. Instead, provide a PhysicalConnectionRequirements.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MARKETPLACE</code> - Uses configuration settings contained in a connector purchased from Amazon Web Services Marketplace to read from and write to data stores that are not natively supported by Glue.</p>
   *                <p>
   *                   <code>MARKETPLACE</code> Connections use the following ConnectionParameters.</p>
   *                <ul>
   *                   <li>
   *                      <p>Required: <code>CONNECTOR_TYPE</code>, <code>CONNECTOR_URL</code>, <code>CONNECTOR_CLASS_NAME</code>, <code>CONNECTION_URL</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Required for <code>JDBC</code>
   *                         <code>CONNECTOR_TYPE</code> connections: All of (<code>USERNAME</code>, <code>PASSWORD</code>) or <code>SECRET_ID</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM</code> - Uses configuration settings contained in a custom connector to read from and write to data stores that are not natively supported by Glue.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>SFTP</code> is not supported.</p>
   *          <p>For more information about how optional ConnectionProperties are used to configure features in Glue, consult <a href="https://docs.aws.amazon.com/glue/latest/dg/connection-defining.html">Glue connection properties</a>.</p>
   *          <p>For more information about how optional ConnectionProperties are used to configure features in Glue Studio, consult <a href="https://docs.aws.amazon.com/glue/latest/ug/connectors-chapter.html">Using connectors and connections</a>.</p>
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   * @public
   */
  MatchCriteria?: string[];

  /**
   * <p>These key-value pairs define parameters for the connection.</p>
   * @public
   */
  ConnectionProperties: Partial<Record<ConnectionPropertyKey, string>> | undefined;

  /**
   * <p>This field is not currently used.</p>
   * @public
   */
  AthenaProperties?: Record<string, string>;

  /**
   * <p>The physical connection requirements, such as virtual private cloud (VPC) and <code>SecurityGroup</code>, that are needed to successfully make this connection.</p>
   * @public
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;

  /**
   * <p>The authentication properties of the connection. Used for a Salesforce connection.</p>
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfigurationInput;

  /**
   * <p>A flag to validate the credentials during create connection. Used for a Salesforce connection. Default is true. </p>
   * @public
   */
  ValidateCredentials?: boolean;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the connection. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>A <code>ConnectionInput</code> object defining the connection
   *       to create.</p>
   * @public
   */
  ConnectionInput: ConnectionInput | undefined;

  /**
   * <p>The tags you assign to the connection.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  READY: "READY",
} as const;

/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * <p>The status of the connection creation request. The request can take some time for certain authentication types, for example when creating an OAuth connection with token exchange over VPC.</p>
   * @public
   */
  CreateConnectionStatus?: ConnectionStatus;
}

/**
 * @public
 */
export interface CreateCrawlerRequest {
  /**
   * <p>Name of the new crawler.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role used by the new crawler to
   *       access customer resources.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The Glue database where results are written, such as:
   *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>A description of the new crawler.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A list of collection of targets to crawl.</p>
   * @public
   */
  Targets: CrawlerTargets | undefined;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   * @public
   */
  Schedule?: string;

  /**
   * <p>A list of custom classifiers that the user has registered. By default, all built-in
   *       classifiers are included in a crawl, but these custom classifiers always override the default
   *       classifiers for a given classification.</p>
   * @public
   */
  Classifiers?: string[];

  /**
   * <p>The table prefix used for catalog tables that are created.</p>
   * @public
   */
  TablePrefix?: string;

  /**
   * <p>The policy for the crawler's update and deletion behavior.</p>
   * @public
   */
  SchemaChangePolicy?: SchemaChangePolicy;

  /**
   * <p>A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.</p>
   * @public
   */
  RecrawlPolicy?: RecrawlPolicy;

  /**
   * <p>Specifies data lineage configuration settings for the crawler.</p>
   * @public
   */
  LineageConfiguration?: LineageConfiguration;

  /**
   * <p>Specifies Lake Formation configuration settings for the crawler.</p>
   * @public
   */
  LakeFormationConfiguration?: LakeFormationConfiguration;

  /**
   * <p>Crawler configuration information. This versioned JSON
   *       string allows users to specify aspects of a crawler's behavior.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Setting crawler configuration options</a>.</p>
   * @public
   */
  Configuration?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   * @public
   */
  CrawlerSecurityConfiguration?: string;

  /**
   * <p>The tags to use with this crawler request. You may use tags to limit access to the
   *             crawler. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer
   *             guide.</p>
   * @public
   */
  Tags?: Record<string, string>;
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
   * <p>A name for the custom pattern that allows it to be retrieved or deleted later. This name must be unique per Amazon Web Services account.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A regular expression string that is used for detecting sensitive data in a custom pattern.</p>
   * @public
   */
  RegexString: string | undefined;

  /**
   * <p>A list of context words. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.</p>
   *          <p>If no context words are passed only a regular expression is checked.</p>
   * @public
   */
  ContextWords?: string[];

  /**
   * <p>A list of tags applied to the custom entity type.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateCustomEntityTypeResponse {
  /**
   * <p>The name of the custom pattern you created.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>The same unique identifier was associated with two different records.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name: "IdempotentParameterMismatchException" = "IdempotentParameterMismatchException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Two processes are trying to modify a resource simultaneously.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const Permission = {
  ALL: "ALL",
  ALTER: "ALTER",
  CREATE_DATABASE: "CREATE_DATABASE",
  CREATE_TABLE: "CREATE_TABLE",
  DATA_LOCATION_ACCESS: "DATA_LOCATION_ACCESS",
  DELETE: "DELETE",
  DROP: "DROP",
  INSERT: "INSERT",
  SELECT: "SELECT",
} as const;

/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * <p>The Lake Formation principal.</p>
 * @public
 */
export interface DataLakePrincipal {
  /**
   * <p>An identifier for the Lake Formation principal.</p>
   * @public
   */
  DataLakePrincipalIdentifier?: string;
}

/**
 * <p>Permissions granted to a principal.</p>
 * @public
 */
export interface PrincipalPermissions {
  /**
   * <p>The principal who is granted permissions.</p>
   * @public
   */
  Principal?: DataLakePrincipal;

  /**
   * <p>The permissions that are granted to the principal.</p>
   * @public
   */
  Permissions?: Permission[];
}

/**
 * <p>A database that points to an entity outside the Glue Data Catalog.</p>
 * @public
 */
export interface FederatedDatabase {
  /**
   * <p>A unique identifier for the federated database.</p>
   * @public
   */
  Identifier?: string;

  /**
   * <p>The name of the connection to the external metastore.</p>
   * @public
   */
  ConnectionName?: string;
}

/**
 * <p>A structure that describes a target database for resource linking.</p>
 * @public
 */
export interface DatabaseIdentifier {
  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>Region of the target database.</p>
   * @public
   */
  Region?: string;
}

/**
 * <p>The structure used to create or update a database.</p>
 * @public
 */
export interface DatabaseInput {
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
  Description?: string;

  /**
   * <p>The location of the database (for example, an HDFS path). </p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   *          <p>These key-value pairs define parameters and properties of the database.</p>
   * @public
   */
  Parameters?: Record<string, string>;

  /**
   * <p>Creates a set of default permissions on the table for principals. Used by Lake Formation. Not used in the normal course of Glue operations.</p>
   * @public
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>A <code>DatabaseIdentifier</code> structure that describes a target database for resource linking.</p>
   * @public
   */
  TargetDatabase?: DatabaseIdentifier;

  /**
   * <p>A <code>FederatedDatabase</code> structure that references an entity outside the Glue Data Catalog.</p>
   * @public
   */
  FederatedDatabase?: FederatedDatabase;
}

/**
 * @public
 */
export interface CreateDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the database. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The metadata for the database.</p>
   * @public
   */
  DatabaseInput: DatabaseInput | undefined;

  /**
   * <p>The tags you assign to the database.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDatabaseResponse {}

/**
 * <p>A federated resource already exists.</p>
 * @public
 */
export class FederatedResourceAlreadyExistsException extends __BaseException {
  readonly name: "FederatedResourceAlreadyExistsException" = "FederatedResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message describing the problem.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>The associated Glue resource already exists.</p>
   * @public
   */
  AssociatedGlueResource?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FederatedResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "FederatedResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FederatedResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.AssociatedGlueResource = opts.AssociatedGlueResource;
  }
}

/**
 * <p>An object representing an Glue table.</p>
 * @public
 */
export interface DataQualityTargetTable {
  /**
   * <p>The name of the Glue table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The name of the database where the Glue table exists.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The catalog id where the Glue table exists.</p>
   * @public
   */
  CatalogId?: string;
}

/**
 * @public
 */
export interface CreateDataQualityRulesetRequest {
  /**
   * <p>A unique name for the data quality ruleset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the data quality ruleset.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   * @public
   */
  Ruleset: string | undefined;

  /**
   * <p>A list of tags applied to the data quality ruleset.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>A target table associated with the data quality ruleset.</p>
   * @public
   */
  TargetTable?: DataQualityTargetTable;

  /**
   * <p>The name of the security configuration created with the data quality encryption option.</p>
   * @public
   */
  DataQualitySecurityConfiguration?: string;

  /**
   * <p>Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateDataQualityRulesetResponse {
  /**
   * <p>A unique name for the data quality ruleset.</p>
   * @public
   */
  Name?: string;
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
  SecurityGroupIds?: string[];

  /**
   * <p>The subnet ID for the new <code>DevEndpoint</code> to use.</p>
   * @public
   */
  SubnetId?: string;

  /**
   * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
   *       attribute is provided for backward compatibility because the recommended attribute to use is
   *       public keys.</p>
   * @public
   */
  PublicKey?: string;

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
  PublicKeys?: string[];

  /**
   * <p>The number of Glue Data Processing Units (DPUs) to allocate to this
   *         <code>DevEndpoint</code>.</p>
   * @public
   */
  NumberOfNodes?: number;

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
  WorkerType?: WorkerType;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *          <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   * @public
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   * @public
   */
  NumberOfWorkers?: number;

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
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   * @public
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *         <code>DevEndpoint</code>.</p>
   * @public
   */
  SecurityConfiguration?: string;

  /**
   * <p>The tags to use with this DevEndpoint. You may use tags to limit access to the DevEndpoint. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
   * @public
   */
  Arguments?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDevEndpointResponse {
  /**
   * <p>The name assigned to the new <code>DevEndpoint</code>.</p>
   * @public
   */
  EndpointName?: string;

  /**
   * <p>The current status of the new <code>DevEndpoint</code>.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The security groups assigned to the new <code>DevEndpoint</code>.</p>
   * @public
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The subnet ID assigned to the new <code>DevEndpoint</code>.</p>
   * @public
   */
  SubnetId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role assigned to the new
   *       <code>DevEndpoint</code>.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The address of the YARN endpoint used by this <code>DevEndpoint</code>.</p>
   * @public
   */
  YarnEndpointAddress?: string;

  /**
   * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
   * @public
   */
  ZeppelinRemoteSparkInterpreterPort?: number;

  /**
   * <p>The number of Glue Data Processing Units (DPUs) allocated to this DevEndpoint.</p>
   * @public
   */
  NumberOfNodes?: number;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. May be a value of Standard, G.1X, or G.2X.</p>
   * @public
   */
  WorkerType?: WorkerType;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   * @public
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>The Amazon Web Services Availability Zone where this <code>DevEndpoint</code> is located.</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>The paths to one or more Python libraries in an S3 bucket that will be loaded in your
   *         <code>DevEndpoint</code>.</p>
   * @public
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>Path to one or more Java <code>.jar</code> files in an S3 bucket that will be loaded in
   *       your <code>DevEndpoint</code>.</p>
   * @public
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure being used with this
   *         <code>DevEndpoint</code>.</p>
   * @public
   */
  SecurityConfiguration?: string;

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was created.</p>
   * @public
   */
  CreatedTimestamp?: Date;

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
  Arguments?: Record<string, string>;
}

/**
 * <p>A value could not be validated.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * <p>The unique name that was provided for this job definition.</p>
   * @public
   */
  Name?: string;
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
  PrimaryKeyColumnName?: string;

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
  PrecisionRecallTradeoff?: number;

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
  AccuracyCostTradeoff?: number;

  /**
   * <p>The value to switch on or off to force the output to match the provided labels from users. If the value is <code>True</code>, the <code>find matches</code> transform forces the output to match the provided labels. The results override the normal conflation results. If the value is <code>False</code>, the <code>find matches</code> transform does not ensure all the labels provided are respected, and the results rely on the trained model.</p>
   *          <p>Note that setting this value to true may increase the conflation execution time.</p>
   * @public
   */
  EnforceProvidedLabels?: boolean;
}

/**
 * @public
 * @enum
 */
export const TransformType = {
  FIND_MATCHES: "FIND_MATCHES",
} as const;

/**
 * @public
 */
export type TransformType = (typeof TransformType)[keyof typeof TransformType];

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
  FindMatchesParameters?: FindMatchesParameters;
}

/**
 * @public
 * @enum
 */
export const MLUserDataEncryptionModeString = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
} as const;

/**
 * @public
 */
export type MLUserDataEncryptionModeString =
  (typeof MLUserDataEncryptionModeString)[keyof typeof MLUserDataEncryptionModeString];

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
  KmsKeyId?: string;
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
  MlUserDataEncryption?: MLUserDataEncryption;

  /**
   * <p>The name of the security configuration.</p>
   * @public
   */
  TaskRunSecurityConfigurationName?: string;
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
  Description?: string;

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
  GlueVersion?: string;

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
  MaxCapacity?: number;

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
  WorkerType?: WorkerType;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   *          <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout of the task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   * @public
   */
  MaxRetries?: number;

  /**
   * <p>The tags to use with this machine learning transform. You may use tags to limit access to the machine learning transform. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   * @public
   */
  TransformEncryption?: TransformEncryption;
}

/**
 * @public
 */
export interface CreateMLTransformResponse {
  /**
   * <p>A unique identifier that is generated for the transform.</p>
   * @public
   */
  TransformId?: string;
}

/**
 * @public
 */
export interface CreatePartitionRequest {
  /**
   * <p>The Amazon Web Services account ID of the catalog in which the partition is to be created.</p>
   * @public
   */
  CatalogId?: string;

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
  CatalogId?: string;

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
  Description?: string;

  /**
   * <p>Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created registry.</p>
   * @public
   */
  RegistryArn?: string;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string;

  /**
   * <p>A description of the registry.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The tags for the registry.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const Compatibility = {
  BACKWARD: "BACKWARD",
  BACKWARD_ALL: "BACKWARD_ALL",
  DISABLED: "DISABLED",
  FORWARD: "FORWARD",
  FORWARD_ALL: "FORWARD_ALL",
  FULL: "FULL",
  FULL_ALL: "FULL_ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Compatibility = (typeof Compatibility)[keyof typeof Compatibility];

/**
 * <p>A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
 * @public
 */
export interface RegistryId {
  /**
   * <p>Name of the registry. Used only for lookup. One of <code>RegistryArn</code> or <code>RegistryName</code> has to be provided. </p>
   * @public
   */
  RegistryName?: string;

  /**
   * <p>Arn of the registry to be updated. One of <code>RegistryArn</code> or <code>RegistryName</code> has to be provided.</p>
   * @public
   */
  RegistryArn?: string;
}

/**
 * @public
 */
export interface CreateSchemaInput {
  /**
   * <p> This is a wrapper shape to contain the registry identity fields. If this is not provided, the default registry will be used. The ARN format for the same will be: <code>arn:aws:glue:us-east-2:<customer id>:registry/default-registry:random-5-letter-id</code>.</p>
   * @public
   */
  RegistryId?: RegistryId;

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
  Compatibility?: Compatibility;

  /**
   * <p>An optional description of the schema. If description is not provided, there will not be any automatic default value for this.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API. If specified, follows the Amazon Web Services tags-on-create pattern.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The schema definition using the <code>DataFormat</code> setting for <code>SchemaName</code>.</p>
   * @public
   */
  SchemaDefinition?: string;
}

/**
 * @public
 * @enum
 */
export const SchemaStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type SchemaStatus = (typeof SchemaStatus)[keyof typeof SchemaStatus];

/**
 * @public
 * @enum
 */
export const SchemaVersionStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  FAILURE: "FAILURE",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type SchemaVersionStatus = (typeof SchemaVersionStatus)[keyof typeof SchemaVersionStatus];

/**
 * @public
 */
export interface CreateSchemaResponse {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  RegistryArn?: string;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string;

  /**
   * <p>A description of the schema if specified when created.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat?: DataFormat;

  /**
   * <p>The schema compatibility mode.</p>
   * @public
   */
  Compatibility?: Compatibility;

  /**
   * <p>The version number of the checkpoint (the last time the compatibility mode was changed).</p>
   * @public
   */
  SchemaCheckpoint?: number;

  /**
   * <p>The latest version of the schema associated with the returned schema definition.</p>
   * @public
   */
  LatestSchemaVersion?: number;

  /**
   * <p>The next version of the schema associated with the returned schema definition.</p>
   * @public
   */
  NextSchemaVersion?: number;

  /**
   * <p>The status of the schema. </p>
   * @public
   */
  SchemaStatus?: SchemaStatus;

  /**
   * <p>The tags for the schema.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The unique identifier of the first schema version.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>The status of the first schema version created.</p>
   * @public
   */
  SchemaVersionStatus?: SchemaVersionStatus;
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
  TargetParameter?: string;
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
  Param?: boolean;
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
  LineNumber?: number;
}

/**
 * @public
 * @enum
 */
export const Language = {
  PYTHON: "PYTHON",
  SCALA: "SCALA",
} as const;

/**
 * @public
 */
export type Language = (typeof Language)[keyof typeof Language];

/**
 * @public
 */
export interface CreateScriptRequest {
  /**
   * <p>A list of the nodes in the DAG.</p>
   * @public
   */
  DagNodes?: CodeGenNode[];

  /**
   * <p>A list of the edges in the DAG.</p>
   * @public
   */
  DagEdges?: CodeGenEdge[];

  /**
   * <p>The programming language of the resulting code from the DAG.</p>
   * @public
   */
  Language?: Language;
}

/**
 * @public
 */
export interface CreateScriptResponse {
  /**
   * <p>The Python script generated from the DAG.</p>
   * @public
   */
  PythonScript?: string;

  /**
   * <p>The Scala code generated from the DAG.</p>
   * @public
   */
  ScalaCode?: string;
}

/**
 * @public
 * @enum
 */
export const CloudWatchEncryptionMode = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
} as const;

/**
 * @public
 */
export type CloudWatchEncryptionMode = (typeof CloudWatchEncryptionMode)[keyof typeof CloudWatchEncryptionMode];

/**
 * <p>Specifies how Amazon CloudWatch data should be encrypted.</p>
 * @public
 */
export interface CloudWatchEncryption {
  /**
   * <p>The encryption mode to use for CloudWatch data.</p>
   * @public
   */
  CloudWatchEncryptionMode?: CloudWatchEncryptionMode;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   * @public
   */
  KmsKeyArn?: string;
}

/**
 * @public
 * @enum
 */
export const JobBookmarksEncryptionMode = {
  CSEKMS: "CSE-KMS",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type JobBookmarksEncryptionMode = (typeof JobBookmarksEncryptionMode)[keyof typeof JobBookmarksEncryptionMode];

/**
 * <p>Specifies how job bookmark data should be encrypted.</p>
 * @public
 */
export interface JobBookmarksEncryption {
  /**
   * <p>The encryption mode to use for job bookmarks data.</p>
   * @public
   */
  JobBookmarksEncryptionMode?: JobBookmarksEncryptionMode;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   * @public
   */
  KmsKeyArn?: string;
}

/**
 * @public
 * @enum
 */
export const S3EncryptionMode = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
  SSES3: "SSE-S3",
} as const;

/**
 * @public
 */
export type S3EncryptionMode = (typeof S3EncryptionMode)[keyof typeof S3EncryptionMode];

/**
 * <p>Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.</p>
 * @public
 */
export interface S3Encryption {
  /**
   * <p>The encryption mode to use for Amazon S3 data.</p>
   * @public
   */
  S3EncryptionMode?: S3EncryptionMode;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   * @public
   */
  KmsKeyArn?: string;
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
  S3Encryption?: S3Encryption[];

  /**
   * <p>The encryption configuration for Amazon CloudWatch.</p>
   * @public
   */
  CloudWatchEncryption?: CloudWatchEncryption;

  /**
   * <p>The encryption configuration for job bookmarks.</p>
   * @public
   */
  JobBookmarksEncryption?: JobBookmarksEncryption;
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
  Name?: string;

  /**
   * <p>The time at which the new security configuration was created.</p>
   * @public
   */
  CreatedTimestamp?: Date;
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
  Name?: string;

  /**
   * <p>Specifies the Python version. The Python version indicates the version supported for jobs of type Spark.</p>
   * @public
   */
  PythonVersion?: string;
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
  Description?: string;

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
   *         jobs is 48 hours (2880 minutes), the maximum session lifetime for this job type.
   *         Consult the documentation for other job types.
   *     </p>
   * @public
   */
  Timeout?: number;

  /**
   * <p>
   *         The number of minutes when idle before session times out. Default for
   *         Spark ETL jobs is value of Timeout. Consult the documentation
   *         for other job types.
   *     </p>
   * @public
   */
  IdleTimeout?: number;

  /**
   * <p>A map array of key-value pairs. Max is 75 pairs. </p>
   * @public
   */
  DefaultArguments?: Record<string, string>;

  /**
   * <p>The number of connections to use for the session. </p>
   * @public
   */
  Connections?: ConnectionsList;

  /**
   * <p>The number of Glue data processing units (DPUs) that can be allocated when the job runs.
   *       A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory. </p>
   * @public
   */
  MaxCapacity?: number;

  /**
   * <p>The number of workers of a defined <code>WorkerType</code> to use for the session. </p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *       G.1X, G.2X, G.4X, or G.8X for Spark jobs. Accepts the value Z.2X for Ray notebooks.</p>
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
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkerType?: WorkerType;

  /**
   * <p>The name of the SecurityConfiguration structure to be used with the session </p>
   * @public
   */
  SecurityConfiguration?: string;

  /**
   * <p>The Glue version determines the versions of Apache Spark and Python that Glue supports.
   *       The GlueVersion must be greater than 2.0. </p>
   * @public
   */
  GlueVersion?: string;

  /**
   * <p>The map of key value pairs (tags) belonging to the session.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The origin of the request. </p>
   * @public
   */
  RequestOrigin?: string;
}

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  FAILED: "FAILED",
  PROVISIONING: "PROVISIONING",
  READY: "READY",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TIMEOUT: "TIMEOUT",
} as const;

/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

/**
 * <p>The period in which a remote Spark runtime environment is running.</p>
 * @public
 */
export interface Session {
  /**
   * <p>The ID of the session.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The time and date when the session was created.</p>
   * @public
   */
  CreatedOn?: Date;

  /**
   * <p>The session status. </p>
   * @public
   */
  Status?: SessionStatus;

  /**
   * <p>The error message displayed during the session.</p>
   * @public
   */
  ErrorMessage?: string;

  /**
   * <p>The description of the session.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with the Session.</p>
   * @public
   */
  Role?: string;

  /**
   * <p>The command object.See SessionCommand.</p>
   * @public
   */
  Command?: SessionCommand;

  /**
   * <p>A map array of key-value pairs. Max is 75 pairs. </p>
   * @public
   */
  DefaultArguments?: Record<string, string>;

  /**
   * <p>The number of connections used for the session.</p>
   * @public
   */
  Connections?: ConnectionsList;

  /**
   * <p>The code execution progress of the session.</p>
   * @public
   */
  Progress?: number;

  /**
   * <p>The number of Glue data processing units (DPUs) that can be allocated when the job runs.
   *       A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory. </p>
   * @public
   */
  MaxCapacity?: number;

  /**
   * <p>The name of the SecurityConfiguration structure to be used with the session.</p>
   * @public
   */
  SecurityConfiguration?: string;

  /**
   * <p>The Glue version determines the versions of Apache Spark and Python that Glue supports.
   *       The GlueVersion must be greater than 2.0.</p>
   * @public
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>WorkerType</code> to use for the session.</p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>The type of predefined worker that is allocated when a session runs. Accepts a value of <code>G.1X</code>, <code>G.2X</code>, <code>G.4X</code>, or <code>G.8X</code> for Spark sessions. Accepts the value <code>Z.2X</code> for Ray sessions.</p>
   * @public
   */
  WorkerType?: WorkerType;

  /**
   * <p>The date and time that this session is completed.</p>
   * @public
   */
  CompletedOn?: Date;

  /**
   * <p>The total time the session ran for.</p>
   * @public
   */
  ExecutionTime?: number;

  /**
   * <p>The DPUs consumed by the session (formula: ExecutionTime * MaxCapacity).</p>
   * @public
   */
  DPUSeconds?: number;

  /**
   * <p>The number of minutes when idle before the session times out.</p>
   * @public
   */
  IdleTimeout?: number;

  /**
   * <p>The name of an Glue usage profile associated with the session.</p>
   * @public
   */
  ProfileName?: string;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * <p>Returns the session object in the response.</p>
   * @public
   */
  Session?: Session;
}

/**
 * @public
 * @enum
 */
export const MetadataOperation = {
  CREATE: "CREATE",
} as const;

/**
 * @public
 */
export type MetadataOperation = (typeof MetadataOperation)[keyof typeof MetadataOperation];

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
  Version?: string;
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
  IcebergInput?: IcebergInput;
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
  CatalogId?: string;

  /**
   * <p>The name of the catalog database that contains the target table.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>The name of the target table.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Region of the target table.</p>
   * @public
   */
  Region?: string;
}

/**
 * @public
 * @enum
 */
export const ViewDialect = {
  ATHENA: "ATHENA",
  REDSHIFT: "REDSHIFT",
  SPARK: "SPARK",
} as const;

/**
 * @public
 */
export type ViewDialect = (typeof ViewDialect)[keyof typeof ViewDialect];

/**
 * <p>A structure containing details of a representation to update or create a Lake Formation view.</p>
 * @public
 */
export interface ViewRepresentationInput {
  /**
   * <p>A parameter that specifies the engine type of a specific representation.</p>
   * @public
   */
  Dialect?: ViewDialect;

  /**
   * <p>A parameter that specifies the version of the engine of a specific representation.</p>
   * @public
   */
  DialectVersion?: string;

  /**
   * <p>A string that represents the original SQL query that describes the view.</p>
   * @public
   */
  ViewOriginalText?: string;

  /**
   * <p>The name of the connection to be used to validate the specific representation of the view.</p>
   * @public
   */
  ValidationConnection?: string;

  /**
   * <p>A string that represents the SQL query that describes the view with expanded resource ARNs</p>
   * @public
   */
  ViewExpandedText?: string;
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
  IsProtected?: boolean;

  /**
   * <p>The definer of a view in SQL.</p>
   * @public
   */
  Definer?: string;

  /**
   * <p>A list of structures that contains the dialect of the view, and the query that defines the view.</p>
   * @public
   */
  Representations?: ViewRepresentationInput[];

  /**
   * <p>A list of base table ARNs that make up the view.</p>
   * @public
   */
  SubObjects?: string[];
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
  Description?: string;

  /**
   * <p>The table owner. Included for Apache Hive compatibility. Not used in the normal course of Glue operations.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The last time that the table was accessed.</p>
   * @public
   */
  LastAccessTime?: Date;

  /**
   * <p>The last time that column statistics were computed for this table.</p>
   * @public
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>The retention time for this table.</p>
   * @public
   */
  Retention?: number;

  /**
   * <p>A storage descriptor containing information about the physical storage
   *       of this table.</p>
   * @public
   */
  StorageDescriptor?: StorageDescriptor;

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
  PartitionKeys?: Column[];

  /**
   * <p>Included for Apache Hive compatibility. Not used in the normal course of Glue operations.
   *     If the table is a <code>VIRTUAL_VIEW</code>, certain Athena configuration encoded in base64.</p>
   * @public
   */
  ViewOriginalText?: string;

  /**
   * <p>Included for Apache Hive compatibility. Not used in the normal course of Glue operations.</p>
   * @public
   */
  ViewExpandedText?: string;

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
  TableType?: string;

  /**
   * <p>These key-value pairs define properties associated with the table.</p>
   * @public
   */
  Parameters?: Record<string, string>;

  /**
   * <p>A <code>TableIdentifier</code> structure that describes a target table for resource linking.</p>
   * @public
   */
  TargetTable?: TableIdentifier;

  /**
   * <p>A structure that contains all the information that defines the view, including the dialect or dialects for the view, and the query.</p>
   * @public
   */
  ViewDefinition?: ViewDefinitionInput;
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
  CatalogId?: string;

  /**
   * <p>The catalog database in which to create the new table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The <code>TableInput</code> object that defines the metadata table
   *       to create in the catalog.</p>
   * @public
   */
  TableInput: TableInput | undefined;

  /**
   * <p>A list of partition indexes, <code>PartitionIndex</code> structures, to create in the table.</p>
   * @public
   */
  PartitionIndexes?: PartitionIndex[];

  /**
   * <p>The ID of the transaction.</p>
   * @public
   */
  TransactionId?: string;

  /**
   * <p>Specifies an <code>OpenTableFormatInput</code> structure when creating an open format table.</p>
   * @public
   */
  OpenTableFormatInput?: OpenTableFormatInput;
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
  WorkflowName?: string;

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
  Schedule?: string;

  /**
   * <p>A predicate to specify when the new trigger should fire.</p>
   *          <p>This field is required when the trigger type is <code>CONDITIONAL</code>.</p>
   * @public
   */
  Predicate?: Predicate;

  /**
   * <p>The actions initiated by this trigger when it fires.</p>
   * @public
   */
  Actions: Action[] | undefined;

  /**
   * <p>A description of the new trigger.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Set to <code>true</code> to start <code>SCHEDULED</code> and <code>CONDITIONAL</code>
   *       triggers when created. True is not supported for <code>ON_DEMAND</code> triggers.</p>
   * @public
   */
  StartOnCreation?: boolean;

  /**
   * <p>The tags to use with this trigger. You may use tags to limit access to the trigger.
   *       For more information about tags in Glue, see
   *       <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide. </p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>Batch condition that must be met (specified number of events received or batch time window expired)
   *       before EventBridge event trigger fires.</p>
   * @public
   */
  EventBatchingCondition?: EventBatchingCondition;
}

/**
 * @public
 */
export interface CreateTriggerResponse {
  /**
   * <p>The name of the trigger.</p>
   * @public
   */
  Name?: string;
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
  DefaultValue?: string;

  /**
   * <p>A list of allowed values for the parameter.</p>
   * @public
   */
  AllowedValues?: string[];

  /**
   * <p>A minimum allowed value for the parameter.</p>
   * @public
   */
  MinValue?: string;

  /**
   * <p>A maximum allowed value for the parameter.</p>
   * @public
   */
  MaxValue?: string;
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
  SessionConfiguration?: Record<string, ConfigurationObject>;

  /**
   * <p>A key-value map of configuration parameters for Glue jobs. </p>
   * @public
   */
  JobConfiguration?: Record<string, ConfigurationObject>;
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
  Description?: string;

  /**
   * <p>A <code>ProfileConfiguration</code> object specifying the job and session values for the profile.</p>
   * @public
   */
  Configuration: ProfileConfiguration | undefined;

  /**
   * <p>A list of tags applied to the usage profile.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateUsageProfileResponse {
  /**
   * <p>The name of the usage profile that was created.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>The operation is not available in the region.</p>
 * @public
 */
export class OperationNotSupportedException extends __BaseException {
  readonly name: "OperationNotSupportedException" = "OperationNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotSupportedException, __BaseException>) {
    super({
      name: "OperationNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotSupportedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  GROUP: "GROUP",
  ROLE: "ROLE",
  USER: "USER",
} as const;

/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ARCHIVE: "ARCHIVE",
  FILE: "FILE",
  JAR: "JAR",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>The URIs for function resources.</p>
 * @public
 */
export interface ResourceUri {
  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType?: ResourceType;

  /**
   * <p>The URI for accessing the resource.</p>
   * @public
   */
  Uri?: string;
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
  FunctionName?: string;

  /**
   * <p>The Java class that contains the function code.</p>
   * @public
   */
  ClassName?: string;

  /**
   * <p>The owner of the function.</p>
   * @public
   */
  OwnerName?: string;

  /**
   * <p>The owner type.</p>
   * @public
   */
  OwnerType?: PrincipalType;

  /**
   * <p>The resource URIs for the function.</p>
   * @public
   */
  ResourceUris?: ResourceUri[];
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
  CatalogId?: string;

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
  Description?: string;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   * @public
   */
  DefaultRunProperties?: Record<string, string>;

  /**
   * <p>The tags to be used with this workflow.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   * @public
   */
  MaxConcurrentRuns?: number;
}

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * <p>The name of the workflow which was provided as part of the request.</p>
   * @public
   */
  Name?: string;
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
  Name?: string;
}

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
  CatalogId?: string;

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
  CatalogId?: string;

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
  CatalogId?: string;

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
 * <p>The operation cannot be performed because the crawler is already running.</p>
 * @public
 */
export class CrawlerRunningException extends __BaseException {
  readonly name: "CrawlerRunningException" = "CrawlerRunningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerRunningException, __BaseException>) {
    super({
      name: "CrawlerRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerRunningException.prototype);
    this.Message = opts.Message;
  }
}

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
 * <p>The specified scheduler is transitioning.</p>
 * @public
 */
export class SchedulerTransitioningException extends __BaseException {
  readonly name: "SchedulerTransitioningException" = "SchedulerTransitioningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerTransitioningException, __BaseException>) {
    super({
      name: "SchedulerTransitioningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerTransitioningException.prototype);
    this.Message = opts.Message;
  }
}

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
  Name?: string;
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
  CatalogId?: string;

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
  JobName?: string;
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
  TransformId?: string;
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
  CatalogId?: string;

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
 * <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
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
  }
}

/**
 * @public
 */
export interface DeletePartitionIndexRequest {
  /**
   * <p>The catalog ID where the table resides.</p>
   * @public
   */
  CatalogId?: string;

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
 * @enum
 */
export const RegistryStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type RegistryStatus = (typeof RegistryStatus)[keyof typeof RegistryStatus];

/**
 * @public
 */
export interface DeleteRegistryResponse {
  /**
   * <p>The name of the registry being deleted.</p>
   * @public
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry being deleted.</p>
   * @public
   */
  RegistryArn?: string;

  /**
   * <p>The status of the registry. A successful operation will return the <code>Deleting</code> status.</p>
   * @public
   */
  Status?: RegistryStatus;
}

/**
 * <p>A specified condition was not satisfied.</p>
 * @public
 */
export class ConditionCheckFailureException extends __BaseException {
  readonly name: "ConditionCheckFailureException" = "ConditionCheckFailureException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionCheckFailureException, __BaseException>) {
    super({
      name: "ConditionCheckFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionCheckFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The hash value returned when this policy was set.</p>
   * @public
   */
  PolicyHashCondition?: string;

  /**
   * <p>The ARN of the Glue resource for the resource policy to be deleted.</p>
   * @public
   */
  ResourceArn?: string;
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
  SchemaArn?: string;

  /**
   * <p>The name of the schema being deleted.</p>
   * @public
   */
  SchemaName?: string;

  /**
   * <p>The status of the schema.</p>
   * @public
   */
  Status?: SchemaStatus;
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
  ErrorCode?: string;

  /**
   * <p>The error message for an error.</p>
   * @public
   */
  ErrorMessage?: string;
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
  VersionNumber?: number;

  /**
   * <p>The details of the error for the schema version.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails;
}

/**
 * @public
 */
export interface DeleteSchemaVersionsResponse {
  /**
   * <p>A list of <code>SchemaVersionErrorItem</code> objects, each containing an error and schema version.</p>
   * @public
   */
  SchemaVersionErrors?: SchemaVersionErrorItem[];
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
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface DeleteSessionResponse {
  /**
   * <p>Returns the ID of the deleted session.</p>
   * @public
   */
  Id?: string;
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
  CatalogId?: string;

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
  TransactionId?: string;
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
  CatalogId?: string;

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
  Name?: string;
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
  CatalogId?: string;

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
  Name?: string;
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
  IncludeBlueprint?: boolean;

  /**
   * <p>Specifies whether or not to include the parameter specification.</p>
   * @public
   */
  IncludeParameterSpec?: boolean;
}

/**
 * @public
 */
export interface GetBlueprintResponse {
  /**
   * <p>Returns a <code>Blueprint</code> object.</p>
   * @public
   */
  Blueprint?: Blueprint;
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
 * @public
 * @enum
 */
export const BlueprintRunState = {
  FAILED: "FAILED",
  ROLLING_BACK: "ROLLING_BACK",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type BlueprintRunState = (typeof BlueprintRunState)[keyof typeof BlueprintRunState];

/**
 * <p>The details of a blueprint run.</p>
 * @public
 */
export interface BlueprintRun {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  BlueprintName?: string;

  /**
   * <p>The run ID for this blueprint run.</p>
   * @public
   */
  RunId?: string;

  /**
   * <p>The name of a workflow that is created as a result of a successful blueprint run. If a blueprint run has an error, there will not be a workflow created.</p>
   * @public
   */
  WorkflowName?: string;

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
  State?: BlueprintRunState;

  /**
   * <p>The date and time that the blueprint run started.</p>
   * @public
   */
  StartedOn?: Date;

  /**
   * <p>The date and time that the blueprint run completed.</p>
   * @public
   */
  CompletedOn?: Date;

  /**
   * <p>Indicates any errors that are seen while running the blueprint.</p>
   * @public
   */
  ErrorMessage?: string;

  /**
   * <p>If there are any errors while creating the entities of a workflow, we try to roll back the created entities until that point and delete them. This attribute indicates the errors seen while trying to delete the entities that are created.</p>
   * @public
   */
  RollbackErrorMessage?: string;

  /**
   * <p>The blueprint parameters as a string. You will have to provide a value for each key that is required from the parameter spec that is defined in the <code>Blueprint$ParameterSpec</code>.</p>
   * @public
   */
  Parameters?: string;

  /**
   * <p>The role ARN. This role will be assumed by the Glue service and will be used to create the workflow and other entities of a workflow.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface GetBlueprintRunResponse {
  /**
   * <p>Returns a <code>BlueprintRun</code> object.</p>
   * @public
   */
  BlueprintRun?: BlueprintRun;
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
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetBlueprintRunsResponse {
  /**
   * <p>Returns a list of <code>BlueprintRun</code> objects.</p>
   * @public
   */
  BlueprintRuns?: BlueprintRun[];

  /**
   * <p>A continuation token, if not all blueprint runs have been returned.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCatalogImportStatusRequest {
  /**
   * <p>The ID of the catalog to migrate. Currently, this should be the Amazon Web Services account ID.</p>
   * @public
   */
  CatalogId?: string;
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
  ImportCompleted?: boolean;

  /**
   * <p>The time that the migration was started.</p>
   * @public
   */
  ImportTime?: Date;

  /**
   * <p>The name of the person who initiated the migration.</p>
   * @public
   */
  ImportedBy?: string;
}

/**
 * @public
 */
export interface GetCatalogImportStatusResponse {
  /**
   * <p>The status of the specified catalog migration.</p>
   * @public
   */
  ImportStatus?: CatalogImportStatus;
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
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   * @public
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   * @public
   */
  Version?: number;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   * @public
   */
  Delimiter?: string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   * @public
   */
  QuoteSymbol?: string;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   * @public
   */
  ContainsHeader?: CsvHeaderOption;

  /**
   * <p>A list of strings representing column names.</p>
   * @public
   */
  Header?: string[];

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default
   *       value is <code>true</code>.</p>
   * @public
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   * @public
   */
  AllowSingleColumn?: boolean;

  /**
   * <p>Enables the custom datatype to be configured.</p>
   * @public
   */
  CustomDatatypeConfigured?: boolean;

  /**
   * <p>A list of custom datatypes including "BINARY", "BOOLEAN", "DATE", "DECIMAL", "DOUBLE", "FLOAT", "INT", "LONG", "SHORT", "STRING", "TIMESTAMP".</p>
   * @public
   */
  CustomDatatypes?: string[];

  /**
   * <p>Sets the SerDe for processing CSV in the classifier, which will be applied in the Data Catalog. Valid values are <code>OpenCSVSerDe</code>, <code>LazySimpleSerDe</code>, and <code>None</code>. You can specify the <code>None</code> value when you want the crawler to do the detection.</p>
   * @public
   */
  Serde?: CsvSerdeOption;
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
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   * @public
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   * @public
   */
  Version?: number;

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
  CustomPatterns?: string;
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
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   * @public
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   * @public
   */
  Version?: number;

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
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   * @public
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   * @public
   */
  Version?: number;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   * @public
   */
  RowTag?: string;
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
  GrokClassifier?: GrokClassifier;

  /**
   * <p>A classifier for XML content.</p>
   * @public
   */
  XMLClassifier?: XMLClassifier;

  /**
   * <p>A classifier for JSON content.</p>
   * @public
   */
  JsonClassifier?: JsonClassifier;

  /**
   * <p>A classifier for comma-separated values (CSV).</p>
   * @public
   */
  CsvClassifier?: CsvClassifier;
}

/**
 * @public
 */
export interface GetClassifierResponse {
  /**
   * <p>The requested classifier.</p>
   * @public
   */
  Classifier?: Classifier;
}

/**
 * @public
 */
export interface GetClassifiersRequest {
  /**
   * <p>The size of the list to return (optional).</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional continuation token.</p>
   * @public
   */
  NextToken?: string;
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
  Classifiers?: Classifier[];

  /**
   * <p>A continuation token.</p>
   * @public
   */
  NextToken?: string;
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
  CatalogId?: string;

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
  MinimumValue?: Date;

  /**
   * <p>The highest value in the column.</p>
   * @public
   */
  MaximumValue?: Date;

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
  MinimumValue?: DecimalNumber;

  /**
   * <p>The highest value in the column.</p>
   * @public
   */
  MaximumValue?: DecimalNumber;

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
  MinimumValue?: number;

  /**
   * <p>The highest value in the column.</p>
   * @public
   */
  MaximumValue?: number;

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
  MinimumValue?: number;

  /**
   * <p>The highest value in the column.</p>
   * @public
   */
  MaximumValue?: number;

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
 * @public
 * @enum
 */
export const ColumnStatisticsType = {
  BINARY: "BINARY",
  BOOLEAN: "BOOLEAN",
  DATE: "DATE",
  DECIMAL: "DECIMAL",
  DOUBLE: "DOUBLE",
  LONG: "LONG",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type ColumnStatisticsType = (typeof ColumnStatisticsType)[keyof typeof ColumnStatisticsType];

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
  BooleanColumnStatisticsData?: BooleanColumnStatisticsData;

  /**
   * <p>Date column statistics data.</p>
   * @public
   */
  DateColumnStatisticsData?: DateColumnStatisticsData;

  /**
   * <p>
   *         Decimal column statistics data. UnscaledValues within are Base64-encoded
   *         binary objects storing big-endian, two's complement representations of
   *         the decimal's unscaled value.
   *     </p>
   * @public
   */
  DecimalColumnStatisticsData?: DecimalColumnStatisticsData;

  /**
   * <p>Double column statistics data.</p>
   * @public
   */
  DoubleColumnStatisticsData?: DoubleColumnStatisticsData;

  /**
   * <p>Long column statistics data.</p>
   * @public
   */
  LongColumnStatisticsData?: LongColumnStatisticsData;

  /**
   * <p>String column statistics data.</p>
   * @public
   */
  StringColumnStatisticsData?: StringColumnStatisticsData;

  /**
   * <p>Binary column statistics data.</p>
   * @public
   */
  BinaryColumnStatisticsData?: BinaryColumnStatisticsData;
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
  ColumnName?: string;

  /**
   * <p>An error message with the reason for the failure of an operation.</p>
   * @public
   */
  Error?: ErrorDetail;
}

/**
 * @public
 */
export interface GetColumnStatisticsForPartitionResponse {
  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   * @public
   */
  ColumnStatisticsList?: ColumnStatistics[];

  /**
   * <p>Error occurred during retrieving column statistics data.</p>
   * @public
   */
  Errors?: ColumnError[];
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
  CatalogId?: string;

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
  ColumnStatisticsList?: ColumnStatistics[];

  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   * @public
   */
  Errors?: ColumnError[];
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
 * @public
 * @enum
 */
export const ComputationType = {
  FULL: "FULL",
  INCREMENTAL: "INCREMENTAL",
} as const;

/**
 * @public
 */
export type ComputationType = (typeof ComputationType)[keyof typeof ComputationType];

/**
 * @public
 * @enum
 */
export const ColumnStatisticsState = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ColumnStatisticsState = (typeof ColumnStatisticsState)[keyof typeof ColumnStatisticsState];

/**
 * <p>The object that shows the details of the column stats run.</p>
 * @public
 */
export interface ColumnStatisticsTaskRun {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  CustomerId?: string;

  /**
   * <p>The identifier for the particular column statistics task run.</p>
   * @public
   */
  ColumnStatisticsTaskRunId?: string;

  /**
   * <p>The database where the table resides.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>The name of the table for which column statistics is generated.</p>
   * @public
   */
  TableName?: string;

  /**
   * <p>A list of the column names. If none is supplied, all column names for the table will be used by default.</p>
   * @public
   */
  ColumnNameList?: string[];

  /**
   * <p>The ID of the Data Catalog where the table resides. If none is supplied, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogID?: string;

  /**
   * <p>The IAM role that the service assumes to generate statistics.</p>
   * @public
   */
  Role?: string;

  /**
   * <p>The percentage of rows used to generate statistics. If none is supplied, the entire table will be used to generate stats.</p>
   * @public
   */
  SampleSize?: number;

  /**
   * <p>Name of the security configuration that is used to encrypt CloudWatch logs for the column stats task run.</p>
   * @public
   */
  SecurityConfiguration?: string;

  /**
   * <p>The number of workers used to generate column statistics. The job is preconfigured to autoscale up to 25 instances.</p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>The type of workers being used for generating stats. The default is <code>g.1x</code>.</p>
   * @public
   */
  WorkerType?: string;

  /**
   * <p>The type of column statistics computation.</p>
   * @public
   */
  ComputationType?: ComputationType;

  /**
   * <p>The status of the task run.</p>
   * @public
   */
  Status?: ColumnStatisticsState;

  /**
   * <p>The time that this task was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The last point in time when this task was modified.</p>
   * @public
   */
  LastUpdated?: Date;

  /**
   * <p>The start time of the task.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The end time of the task.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The error message for the job.</p>
   * @public
   */
  ErrorMessage?: string;

  /**
   * <p>The calculated DPU usage in seconds for all autoscaled workers.</p>
   * @public
   */
  DPUSeconds?: number;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskRunResponse {
  /**
   * <p>A <code>ColumnStatisticsTaskRun</code> object representing the details of the column stats run.</p>
   * @public
   */
  ColumnStatisticsTaskRun?: ColumnStatisticsTaskRun;
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
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskRunsResponse {
  /**
   * <p>A list of column statistics task runs.</p>
   * @public
   */
  ColumnStatisticsTaskRuns?: ColumnStatisticsTaskRun[];

  /**
   * <p>A continuation token, if not all task runs have yet been returned.</p>
   * @public
   */
  NextToken?: string;
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
 * <p>The settings for a column statistics task.</p>
 * @public
 */
export interface ColumnStatisticsTaskSettings {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>The name of the table for which to generate column statistics.</p>
   * @public
   */
  TableName?: string;

  /**
   * <p>A schedule for running the column statistics, specified in CRON syntax.</p>
   * @public
   */
  Schedule?: Schedule;

  /**
   * <p>A list of column names for which to run statistics.</p>
   * @public
   */
  ColumnNameList?: string[];

  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   * @public
   */
  CatalogID?: string;

  /**
   * <p>The role used for running the column statistics.</p>
   * @public
   */
  Role?: string;

  /**
   * <p>The percentage of data to sample.</p>
   * @public
   */
  SampleSize?: number;

  /**
   * <p>Name of the security configuration that is used to encrypt CloudWatch logs.</p>
   * @public
   */
  SecurityConfiguration?: string;
}

/**
 * @public
 */
export interface GetColumnStatisticsTaskSettingsResponse {
  /**
   * <p>A <code>ColumnStatisticsTaskSettings</code> object representing the settings for the column statistics task.</p>
   * @public
   */
  ColumnStatisticsTaskSettings?: ColumnStatisticsTaskSettings;
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
  CatalogId?: string;

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
  HidePassword?: boolean;
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
  Name?: string;

  /**
   * <p>The description of the connection.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The type of the connection. Currently, SFTP is not supported.</p>
   * @public
   */
  ConnectionType?: ConnectionType;

  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   * @public
   */
  MatchCriteria?: string[];

  /**
   * <p>These key-value pairs define parameters for the connection:</p>
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
   *                   <code>JDBC_ENFORCE_SSL</code> - A Boolean string (true, false) specifying whether Secure
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
  ConnectionProperties?: Partial<Record<ConnectionPropertyKey, string>>;

  /**
   * <p>This field is not currently used.</p>
   * @public
   */
  AthenaProperties?: Record<string, string>;

  /**
   * <p>The physical connection requirements, such as virtual private cloud (VPC) and <code>SecurityGroup</code>, that are needed to make this connection successfully.</p>
   * @public
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;

  /**
   * <p>The timestamp of the time that this connection definition was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The timestamp of the last time the connection definition was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The user, group, or role that last updated this connection definition.</p>
   * @public
   */
  LastUpdatedBy?: string;

  /**
   * <p>The status of the connection. Can be one of: <code>READY</code>, <code>IN_PROGRESS</code>, or <code>FAILED</code>.</p>
   * @public
   */
  Status?: ConnectionStatus;

  /**
   * <p>The reason for the connection status.</p>
   * @public
   */
  StatusReason?: string;

  /**
   * <p>A timestamp of the time this connection was last validated.</p>
   * @public
   */
  LastConnectionValidationTime?: Date;

  /**
   * <p>The authentication properties of the connection.</p>
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfiguration;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * <p>The requested connection definition.</p>
   * @public
   */
  Connection?: Connection;
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
  MatchCriteria?: string[];

  /**
   * <p>The type of connections to return. Currently, SFTP is not supported.</p>
   * @public
   */
  ConnectionType?: ConnectionType;
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
  CatalogId?: string;

  /**
   * <p>A filter that controls which connections are returned.</p>
   * @public
   */
  Filter?: GetConnectionsFilter;

  /**
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   * @public
   */
  HidePassword?: boolean;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of connections to return in one response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetConnectionsResponse {
  /**
   * <p>A list of requested connection definitions.</p>
   * @public
   */
  ConnectionList?: Connection[];

  /**
   * <p>A continuation token, if the list of connections returned does not
   *       include the last of the filtered connections.</p>
   * @public
   */
  NextToken?: string;
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
  Crawler?: Crawler;
}

/**
 * @public
 */
export interface GetCrawlerMetricsRequest {
  /**
   * <p>A list of the names of crawlers about which to retrieve metrics.</p>
   * @public
   */
  CrawlerNameList?: string[];

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
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
  CrawlerName?: string;

  /**
   * <p>The estimated time left to complete a running crawl.</p>
   * @public
   */
  TimeLeftSeconds?: number;

  /**
   * <p>True if the crawler is still estimating how long it will take to complete this run.</p>
   * @public
   */
  StillEstimating?: boolean;

  /**
   * <p>The duration of the crawler's most recent run, in seconds.</p>
   * @public
   */
  LastRuntimeSeconds?: number;

  /**
   * <p>The median duration of this crawler's runs, in seconds.</p>
   * @public
   */
  MedianRuntimeSeconds?: number;

  /**
   * <p>The number of tables created by this crawler.</p>
   * @public
   */
  TablesCreated?: number;

  /**
   * <p>The number of tables updated by this crawler.</p>
   * @public
   */
  TablesUpdated?: number;

  /**
   * <p>The number of tables deleted by this crawler.</p>
   * @public
   */
  TablesDeleted?: number;
}

/**
 * @public
 */
export interface GetCrawlerMetricsResponse {
  /**
   * <p>A list of metrics for the specified crawler.</p>
   * @public
   */
  CrawlerMetricsList?: CrawlerMetrics[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCrawlersRequest {
  /**
   * <p>The number of crawlers to return on each call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCrawlersResponse {
  /**
   * <p>A list of crawler metadata.</p>
   * @public
   */
  Crawlers?: Crawler[];

  /**
   * <p>A continuation token, if the returned list has not reached the end
   *       of those defined in this customer account.</p>
   * @public
   */
  NextToken?: string;
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
  Name?: string;

  /**
   * <p>A regular expression string that is used for detecting sensitive data in a custom pattern.</p>
   * @public
   */
  RegexString?: string;

  /**
   * <p>A list of context words if specified when you created the custom pattern. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.</p>
   * @public
   */
  ContextWords?: string[];
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
  CatalogId?: string;

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
  Description?: string;

  /**
   * <p>The location of the database (for example, an HDFS path).</p>
   * @public
   */
  LocationUri?: string;

  /**
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   * @public
   */
  Parameters?: Record<string, string>;

  /**
   * <p>The time at which the metadata database was created in the catalog.</p>
   * @public
   */
  CreateTime?: Date;

  /**
   * <p>Creates a set of default permissions on the table for principals. Used by Lake Formation. Not used in the normal course of Glue operations.</p>
   * @public
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>A <code>DatabaseIdentifier</code> structure that describes a target database for resource linking.</p>
   * @public
   */
  TargetDatabase?: DatabaseIdentifier;

  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>A <code>FederatedDatabase</code> structure that references an entity outside the Glue Data Catalog.</p>
   * @public
   */
  FederatedDatabase?: FederatedDatabase;
}

/**
 * @public
 */
export interface GetDatabaseResponse {
  /**
   * <p>The definition of the specified database in the Data Catalog.</p>
   * @public
   */
  Database?: Database;
}

/**
 * @public
 * @enum
 */
export const DatabaseAttributes = {
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type DatabaseAttributes = (typeof DatabaseAttributes)[keyof typeof DatabaseAttributes];

/**
 * @public
 * @enum
 */
export const ResourceShareType = {
  ALL: "ALL",
  FEDERATED: "FEDERATED",
  FOREIGN: "FOREIGN",
} as const;

/**
 * @public
 */
export type ResourceShareType = (typeof ResourceShareType)[keyof typeof ResourceShareType];

/**
 * @public
 */
export interface GetDatabasesRequest {
  /**
   * <p>The ID of the Data Catalog from which to retrieve <code>Databases</code>. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of databases to return in one response.</p>
   * @public
   */
  MaxResults?: number;

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
  ResourceShareType?: ResourceShareType;

  /**
   * <p>Specifies the database fields returned by the <code>GetDatabases</code> call. This parameter doesn’t accept an empty list. The request must include the <code>NAME</code>.</p>
   * @public
   */
  AttributesToGet?: DatabaseAttributes[];
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
  NextToken?: string;
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
  CatalogId?: string;
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
  AwsKmsKeyId?: string;
}

/**
 * @public
 * @enum
 */
export const CatalogEncryptionMode = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
  SSEKMSWITHSERVICEROLE: "SSE-KMS-WITH-SERVICE-ROLE",
} as const;

/**
 * @public
 */
export type CatalogEncryptionMode = (typeof CatalogEncryptionMode)[keyof typeof CatalogEncryptionMode];

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
  SseAwsKmsKeyId?: string;

  /**
   * <p>The role that Glue assumes to encrypt and decrypt the Data Catalog objects on the caller's behalf.</p>
   * @public
   */
  CatalogEncryptionServiceRole?: string;
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
  EncryptionAtRest?: EncryptionAtRest;

  /**
   * <p>When connection password protection is enabled, the Data Catalog uses a customer-provided
   *       key to encrypt the password as part of <code>CreateConnection</code> or
   *         <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in
   *       the connection properties. You can enable catalog encryption or only password
   *       encryption.</p>
   * @public
   */
  ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
}

/**
 * @public
 */
export interface GetDataCatalogEncryptionSettingsResponse {
  /**
   * <p>The requested security configuration.</p>
   * @public
   */
  DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
}

/**
 * @public
 */
export interface GetDataflowGraphRequest {
  /**
   * <p>The Python script to transform.</p>
   * @public
   */
  PythonScript?: string;
}

/**
 * @public
 */
export interface GetDataflowGraphResponse {
  /**
   * <p>A list of the nodes in the resulting DAG.</p>
   * @public
   */
  DagNodes?: CodeGenNode[];

  /**
   * <p>A list of the edges in the resulting DAG.</p>
   * @public
   */
  DagEdges?: CodeGenEdge[];
}

/**
 * @public
 */
export interface GetDataQualityModelRequest {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataQualityModelStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type DataQualityModelStatus = (typeof DataQualityModelStatus)[keyof typeof DataQualityModelStatus];

/**
 * @public
 */
export interface GetDataQualityModelResponse {
  /**
   * <p>The training status of the data quality model.</p>
   * @public
   */
  Status?: DataQualityModelStatus;

  /**
   * <p>The timestamp when the data quality model training started.</p>
   * @public
   */
  StartedOn?: Date;

  /**
   * <p>The timestamp when the data quality model training completed.</p>
   * @public
   */
  CompletedOn?: Date;

  /**
   * <p>The training failure reason.</p>
   * @public
   */
  FailureReason?: string;
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
  LowerBound?: number;

  /**
   * <p>The upper bound.</p>
   * @public
   */
  UpperBound?: number;

  /**
   * <p>The predicted value.</p>
   * @public
   */
  PredictedValue?: number;

  /**
   * <p>The actual value.</p>
   * @public
   */
  ActualValue?: number;

  /**
   * <p>The date.</p>
   * @public
   */
  Date?: Date;

  /**
   * <p>The inclusion annotation.</p>
   * @public
   */
  InclusionAnnotation?: InclusionAnnotationValue;
}

/**
 * @public
 */
export interface GetDataQualityModelResultResponse {
  /**
   * <p>The timestamp when the data quality model training completed.</p>
   * @public
   */
  CompletedOn?: Date;

  /**
   * <p>A list of <code>StatisticModelResult</code>
   *          </p>
   * @public
   */
  Model?: StatisticModelResult[];
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
 * @public
 */
export interface GetDataQualityResultResponse {
  /**
   * <p>A unique result ID for the data quality result.</p>
   * @public
   */
  ResultId?: string;

  /**
   * <p>The Profile ID for the data quality result.</p>
   * @public
   */
  ProfileId?: string;

  /**
   * <p>An aggregate data quality score. Represents the ratio of rules that passed to the total number of rules.</p>
   * @public
   */
  Score?: number;

  /**
   * <p>The table associated with the data quality result, if any.</p>
   * @public
   */
  DataSource?: DataSource;

  /**
   * <p>The name of the ruleset associated with the data quality result.</p>
   * @public
   */
  RulesetName?: string;

  /**
   * <p>In the context of a job in Glue Studio, each node in the canvas is typically assigned some sort of name and data quality nodes will have names. In the case of multiple nodes, the <code>evaluationContext</code> can differentiate the nodes.</p>
   * @public
   */
  EvaluationContext?: string;

  /**
   * <p>The date and time when the run for this data quality result started.</p>
   * @public
   */
  StartedOn?: Date;

  /**
   * <p>The date and time when the run for this data quality result was completed.</p>
   * @public
   */
  CompletedOn?: Date;

  /**
   * <p>The job name associated with the data quality result, if any.</p>
   * @public
   */
  JobName?: string;

  /**
   * <p>The job run ID associated with the data quality result, if any.</p>
   * @public
   */
  JobRunId?: string;

  /**
   * <p>The unique run ID associated with the ruleset evaluation.</p>
   * @public
   */
  RulesetEvaluationRunId?: string;

  /**
   * <p>A list of <code>DataQualityRuleResult</code> objects representing the results for each rule. </p>
   * @public
   */
  RuleResults?: DataQualityRuleResult[];

  /**
   * <p>A list of <code>DataQualityAnalyzerResult</code> objects representing the results for each analyzer. </p>
   * @public
   */
  AnalyzerResults?: DataQualityAnalyzerResult[];

  /**
   * <p>A list of <code>DataQualityObservation</code> objects representing the observations generated after evaluating the rules and analyzers. </p>
   * @public
   */
  Observations?: DataQualityObservation[];
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
 * @public
 */
export interface GetDataQualityRuleRecommendationRunResponse {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string;

  /**
   * <p>The data source (an Glue table) associated with this run.</p>
   * @public
   */
  DataSource?: DataSource;

  /**
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   * @public
   */
  Role?: string;

  /**
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType;

  /**
   * <p>The error strings that are associated with the run.</p>
   * @public
   */
  ErrorString?: string;

  /**
   * <p>The date and time when this run started.</p>
   * @public
   */
  StartedOn?: Date;

  /**
   * <p>A timestamp. The last point in time when this data quality rule recommendation run was modified.</p>
   * @public
   */
  LastModifiedOn?: Date;

  /**
   * <p>The date and time when this run was completed.</p>
   * @public
   */
  CompletedOn?: Date;

  /**
   * <p>The amount of time (in seconds) that the run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number;

  /**
   * <p>When a start rule recommendation run completes, it creates a recommended ruleset (a set of rules). This member has those rules in Data Quality Definition Language (DQDL) format.</p>
   * @public
   */
  RecommendedRuleset?: string;

  /**
   * <p>The name of the ruleset that was created by the run.</p>
   * @public
   */
  CreatedRulesetName?: string;

  /**
   * <p>The name of the security configuration created with the data quality encryption option.</p>
   * @public
   */
  DataQualitySecurityConfiguration?: string;
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
 * @public
 */
export interface GetDataQualityRulesetResponse {
  /**
   * <p>The name of the ruleset.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A description of the ruleset.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   * @public
   */
  Ruleset?: string;

  /**
   * <p>The name and database name of the target table.</p>
   * @public
   */
  TargetTable?: DataQualityTargetTable;

  /**
   * <p>A timestamp. The time and date that this data quality ruleset was created.</p>
   * @public
   */
  CreatedOn?: Date;

  /**
   * <p>A timestamp. The last point in time when this data quality ruleset was modified.</p>
   * @public
   */
  LastModifiedOn?: Date;

  /**
   * <p>When a ruleset was created from a recommendation run, this run ID is generated to link the two together.</p>
   * @public
   */
  RecommendationRunId?: string;

  /**
   * <p>The name of the security configuration created with the data quality encryption option.</p>
   * @public
   */
  DataQualitySecurityConfiguration?: string;
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
 * @public
 * @enum
 */
export const DQCompositeRuleEvaluationMethod = {
  COLUMN: "COLUMN",
  ROW: "ROW",
} as const;

/**
 * @public
 */
export type DQCompositeRuleEvaluationMethod =
  (typeof DQCompositeRuleEvaluationMethod)[keyof typeof DQCompositeRuleEvaluationMethod];

/**
 * <p>Additional run options you can specify for an evaluation run.</p>
 * @public
 */
export interface DataQualityEvaluationRunAdditionalRunOptions {
  /**
   * <p>Whether or not to enable CloudWatch metrics.</p>
   * @public
   */
  CloudWatchMetricsEnabled?: boolean;

  /**
   * <p>Prefix for Amazon S3 to store results.</p>
   * @public
   */
  ResultsS3Prefix?: string;

  /**
   * <p>Set the evaluation method for composite rules in the ruleset to ROW/COLUMN</p>
   * @public
   */
  CompositeRuleEvaluationMethod?: DQCompositeRuleEvaluationMethod;
}

/**
 * @public
 */
export interface GetDataQualityRulesetEvaluationRunResponse {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string;

  /**
   * <p>The data source (an Glue table) associated with this evaluation run.</p>
   * @public
   */
  DataSource?: DataSource;

  /**
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   * @public
   */
  Role?: string;

  /**
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number;

  /**
   * <p>Additional run options you can specify for an evaluation run.</p>
   * @public
   */
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType;

  /**
   * <p>The error strings that are associated with the run.</p>
   * @public
   */
  ErrorString?: string;

  /**
   * <p>The date and time when this run started.</p>
   * @public
   */
  StartedOn?: Date;

  /**
   * <p>A timestamp. The last point in time when this data quality rule recommendation run was modified.</p>
   * @public
   */
  LastModifiedOn?: Date;

  /**
   * <p>The date and time when this run was completed.</p>
   * @public
   */
  CompletedOn?: Date;

  /**
   * <p>The amount of time (in seconds) that the run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number;

  /**
   * <p>A list of ruleset names for the run. Currently, this parameter takes only one Ruleset name.</p>
   * @public
   */
  RulesetNames?: string[];

  /**
   * <p>A list of result IDs for the data quality results for the run.</p>
   * @public
   */
  ResultIds?: string[];

  /**
   * <p>A map of reference strings to additional data sources you can specify for an evaluation run.</p>
   * @public
   */
  AdditionalDataSources?: Record<string, DataSource>;
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
  DevEndpoint?: DevEndpoint;
}

/**
 * @public
 */
export interface GetDevEndpointsRequest {
  /**
   * <p>The maximum size of information to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDevEndpointsResponse {
  /**
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   * @public
   */
  DevEndpoints?: DevEndpoint[];

  /**
   * <p>A continuation token, if not all <code>DevEndpoint</code> definitions have yet been
   *       returned.</p>
   * @public
   */
  NextToken?: string;
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
  RunId?: string;
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
  JobName?: string;

  /**
   * <p>The version of the job.</p>
   * @public
   */
  Version?: number;

  /**
   * <p>The run ID number.</p>
   * @public
   */
  Run?: number;

  /**
   * <p>The attempt ID number.</p>
   * @public
   */
  Attempt?: number;

  /**
   * <p>The unique run identifier associated with the previous job run.</p>
   * @public
   */
  PreviousRunId?: string;

  /**
   * <p>The run ID number.</p>
   * @public
   */
  RunId?: string;

  /**
   * <p>The bookmark itself.</p>
   * @public
   */
  JobBookmark?: string;
}

/**
 * @public
 */
export interface GetJobBookmarkResponse {
  /**
   * <p>A structure that defines a point that a job can resume processing.</p>
   * @public
   */
  JobBookmarkEntry?: JobBookmarkEntry;
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
  PredecessorsIncluded?: boolean;
}

/**
 * @public
 */
export interface GetJobRunResponse {
  /**
   * <p>The requested job-run metadata.</p>
   * @public
   */
  JobRun?: JobRun;
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
  NextToken?: string;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetJobRunsResponse {
  /**
   * <p>A list of job-run metadata objects.</p>
   * @public
   */
  JobRuns?: JobRun[];

  /**
   * <p>A continuation token, if not all requested job runs have been returned.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetJobsRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number;
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
  Jdbc?: CodeGenNodeArg[];

  /**
   * <p>An Amazon Simple Storage Service (Amazon S3) location.</p>
   * @public
   */
  S3?: CodeGenNodeArg[];

  /**
   * <p>An Amazon DynamoDB table location.</p>
   * @public
   */
  DynamoDB?: CodeGenNodeArg[];
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
  Sinks?: CatalogEntry[];

  /**
   * <p>Parameters for the mapping.</p>
   * @public
   */
  Location?: Location;
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
  SourceTable?: string;

  /**
   * <p>The source path.</p>
   * @public
   */
  SourcePath?: string;

  /**
   * <p>The source type.</p>
   * @public
   */
  SourceType?: string;

  /**
   * <p>The target table.</p>
   * @public
   */
  TargetTable?: string;

  /**
   * <p>The target path.</p>
   * @public
   */
  TargetPath?: string;

  /**
   * <p>The target type.</p>
   * @public
   */
  TargetType?: string;
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
  OutputS3Path?: string;
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
  JobId?: string;

  /**
   * <p>The name assigned to the job for the Find Matches task run.</p>
   * @public
   */
  JobName?: string;

  /**
   * <p>The job run ID for the Find Matches task run.</p>
   * @public
   */
  JobRunId?: string;
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
  InputS3Path?: string;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   * @public
   */
  Replace?: boolean;
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
  OutputS3Path?: string;
}

/**
 * @public
 * @enum
 */
export const TaskType = {
  EVALUATION: "EVALUATION",
  EXPORT_LABELS: "EXPORT_LABELS",
  FIND_MATCHES: "FIND_MATCHES",
  IMPORT_LABELS: "IMPORT_LABELS",
  LABELING_SET_GENERATION: "LABELING_SET_GENERATION",
} as const;

/**
 * @public
 */
export type TaskType = (typeof TaskType)[keyof typeof TaskType];

/**
 * @internal
 */
export const ConnectionInputFilterSensitiveLog = (obj: ConnectionInput): any => ({
  ...obj,
  ...(obj.AuthenticationConfiguration && {
    AuthenticationConfiguration: AuthenticationConfigurationInputFilterSensitiveLog(obj.AuthenticationConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateConnectionRequestFilterSensitiveLog = (obj: CreateConnectionRequest): any => ({
  ...obj,
  ...(obj.ConnectionInput && { ConnectionInput: ConnectionInputFilterSensitiveLog(obj.ConnectionInput) }),
});

/**
 * @internal
 */
export const GetDataQualityResultResponseFilterSensitiveLog = (obj: GetDataQualityResultResponse): any => ({
  ...obj,
  ...(obj.RuleResults && { RuleResults: obj.RuleResults.map((item) => DataQualityRuleResultFilterSensitiveLog(item)) }),
  ...(obj.AnalyzerResults && {
    AnalyzerResults: obj.AnalyzerResults.map((item) => DataQualityAnalyzerResultFilterSensitiveLog(item)),
  }),
  ...(obj.Observations && {
    Observations: obj.Observations.map((item) => DataQualityObservationFilterSensitiveLog(item)),
  }),
});
