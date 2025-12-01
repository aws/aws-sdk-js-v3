// smithy-typescript generated code
import {
  AdditionalOptionKeys,
  AggFunction,
  AllowFullTableExternalDataAccessEnum,
  AuthenticationType,
  BlueprintStatus,
  CompactionStrategy,
  CompressionType,
  ComputeEnvironment,
  ConfigurationSource,
  ConnectionPropertyKey,
  ConnectionStatus,
  ConnectionType,
  CrawlerLineageSettings,
  CrawlerState,
  CrawlState,
  CsvHeaderOption,
  CsvSerdeOption,
  DataFormat,
  DataOperation,
  DataQualityRuleResultStatus,
  DdbExportType,
  DeleteBehavior,
  DeltaTargetCompressionType,
  DQStopJobOnFailureTiming,
  DQTransformOutput,
  ExecutionClass,
  FilterLogicalOperator,
  FilterOperation,
  FilterValueType,
  GlueRecordType,
  HudiTargetCompressionType,
  HyperTargetCompressionType,
  IcebergTargetCompressionType,
  InclusionAnnotationValue,
  JDBCConnectionType,
  JDBCDataType,
  JdbcMetadataEntry,
  JobMode,
  JobRunState,
  JoinType,
  LastCrawlStatus,
  Logical,
  LogicalOperator,
  NodeType,
  OAuth2GrantType,
  ParamType,
  ParquetCompressionType,
  Permission,
  PiiType,
  PropertyType,
  QuoteChar,
  RecrawlBehavior,
  ScheduleState,
  Separator,
  SourceControlAuthStrategy,
  SourceControlProvider,
  StartingPosition,
  TableOptimizerEventType,
  TableOptimizerType,
  TargetFormat,
  TaskStatusType,
  TriggerState,
  TriggerType,
  UnionType,
  UpdateBehavior,
  UpdateCatalogBehavior,
  WorkerType,
  WorkflowRunStatus,
} from "./enums";

/**
 * <p>Specifies configuration properties of a notification.</p>
 * @public
 */
export interface NotificationProperty {
  /**
   * <p>After a job run starts, the number of minutes to wait before
   *       sending a job run delay notification.</p>
   * @public
   */
  NotifyDelayAfter?: number | undefined;
}

/**
 * <p>Defines an action to be initiated by a trigger.</p>
 * @public
 */
export interface Action {
  /**
   * <p>The name of a job to be run.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   * @public
   */
  Arguments?: Record<string, string> | undefined;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. This overrides the timeout value set in the parent job.</p>
   *          <p>Jobs must have timeout values less than 7 days or 10080 minutes. Otherwise, the jobs will throw an exception.</p>
   *          <p>When the value is left blank, the timeout is defaulted to 2880 minutes.</p>
   *          <p>Any existing Glue jobs that had a timeout value greater than 7 days will be defaulted to 7 days. For instance if you have specified a timeout of 20 days for a batch job, it will be stopped on the 7th day.</p>
   *          <p>For streaming jobs, if you have set up a maintenance window, it will be restarted during the maintenance window after 7 days.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       action.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   * @public
   */
  NotificationProperty?: NotificationProperty | undefined;

  /**
   * <p>The name of the crawler to be used with this action.</p>
   * @public
   */
  CrawlerName?: string | undefined;
}

/**
 * <p>Specifies the set of parameters needed to perform aggregation in the aggregate transform.</p>
 * @public
 */
export interface AggregateOperation {
  /**
   * <p>Specifies the column on the data set on which the aggregation function will be applied.</p>
   * @public
   */
  Column: string[] | undefined;

  /**
   * <p>Specifies the aggregation function to apply.</p>
   *          <p>Possible aggregation functions include: avg countDistinct, count, first, last, kurtosis, max, min, skewness,
   *       stddev_samp, stddev_pop, sum, sumDistinct, var_samp, var_pop</p>
   * @public
   */
  AggFunc: AggFunction | undefined;
}

/**
 * <p>Specifies a transform that groups rows by chosen fields and computes the aggregated value by specified function.</p>
 * @public
 */
export interface Aggregate {
  /**
   * <p>The name of the transform node.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the fields and rows to use as inputs for the aggregate transform.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies the fields to group by.</p>
   * @public
   */
  Groups: string[][] | undefined;

  /**
   * <p>Specifies the aggregate functions to be performed on specified fields. </p>
   * @public
   */
  Aggs: AggregateOperation[] | undefined;
}

/**
 * <p>An object representing a value allowed for a property.</p>
 * @public
 */
export interface AllowedValue {
  /**
   * <p>A description of the allowed value.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The value allowed for the property.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Specifies an optional value when connecting to the Redshift cluster.</p>
 * @public
 */
export interface AmazonRedshiftAdvancedOption {
  /**
   * <p>The key for the additional connection option.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value for the additional connection option.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Specifies an option value.</p>
 * @public
 */
export interface Option {
  /**
   * <p>Specifies the value of the option.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Specifies the label of the option.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>Specifies the description of the option.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Specifies an Amazon Redshift node.</p>
 * @public
 */
export interface AmazonRedshiftNodeData {
  /**
   * <p>The access type for the Redshift connection. Can be a direct connection or catalog connections.</p>
   * @public
   */
  AccessType?: string | undefined;

  /**
   * <p>The source type to specify whether a specific table is the source or a custom query.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>The Glue connection to the Redshift cluster.</p>
   * @public
   */
  Connection?: Option | undefined;

  /**
   * <p>The Redshift schema name when working with a direct connection.</p>
   * @public
   */
  Schema?: Option | undefined;

  /**
   * <p>The Redshift table name when working with a direct connection.</p>
   * @public
   */
  Table?: Option | undefined;

  /**
   * <p>The name of the Glue Data Catalog database when working with a data catalog.</p>
   * @public
   */
  CatalogDatabase?: Option | undefined;

  /**
   * <p>The Glue Data Catalog table name when working with a data catalog.</p>
   * @public
   */
  CatalogTable?: Option | undefined;

  /**
   * <p>The Redshift schema name when working with a data catalog.</p>
   * @public
   */
  CatalogRedshiftSchema?: string | undefined;

  /**
   * <p>The database table to read from.</p>
   * @public
   */
  CatalogRedshiftTable?: string | undefined;

  /**
   * <p>The Amazon S3 path where temporary data can be staged when copying out of the database.</p>
   * @public
   */
  TempDir?: string | undefined;

  /**
   * <p>Optional. The role name use when connection to S3. The IAM role ill default to the role on the job when left blank.</p>
   * @public
   */
  IamRole?: Option | undefined;

  /**
   * <p>Optional values when connecting to the Redshift cluster.</p>
   * @public
   */
  AdvancedOptions?: AmazonRedshiftAdvancedOption[] | undefined;

  /**
   * <p>The SQL used to fetch the data from a Redshift sources when the SourceType is 'query'.</p>
   * @public
   */
  SampleQuery?: string | undefined;

  /**
   * <p>The SQL used before a MERGE or APPEND with upsert is run.</p>
   * @public
   */
  PreAction?: string | undefined;

  /**
   * <p>The SQL used before a MERGE or APPEND with upsert is run.</p>
   * @public
   */
  PostAction?: string | undefined;

  /**
   * <p>Specifies how writing to a Redshift cluser will occur.</p>
   * @public
   */
  Action?: string | undefined;

  /**
   * <p>Specifies the prefix to a table.</p>
   * @public
   */
  TablePrefix?: string | undefined;

  /**
   * <p>The action used on Redshift sinks when doing an APPEND.</p>
   * @public
   */
  Upsert?: boolean | undefined;

  /**
   * <p>The action used when to detemine how a MERGE in a Redshift sink will be handled.</p>
   * @public
   */
  MergeAction?: string | undefined;

  /**
   * <p>The action used when to detemine how a MERGE in a Redshift sink will be handled when an existing record matches a new record.</p>
   * @public
   */
  MergeWhenMatched?: string | undefined;

  /**
   * <p>The action used when to detemine how a MERGE in a Redshift sink will be handled when an existing record doesn't match a new record.</p>
   * @public
   */
  MergeWhenNotMatched?: string | undefined;

  /**
   * <p>The SQL used in a custom merge to deal with matching records.</p>
   * @public
   */
  MergeClause?: string | undefined;

  /**
   * <p>Specifies the name of the connection that is associated with the catalog table used.</p>
   * @public
   */
  CrawlerConnection?: string | undefined;

  /**
   * <p>The array of schema output for a given node.</p>
   * @public
   */
  TableSchema?: Option[] | undefined;

  /**
   * <p>The name of the temporary staging table that is used when doing a MERGE or APPEND with upsert.</p>
   * @public
   */
  StagingTable?: string | undefined;

  /**
   * <p>The list of column names used to determine a matching record when doing a MERGE or APPEND with upsert.</p>
   * @public
   */
  SelectedColumns?: Option[] | undefined;
}

/**
 * <p>Specifies an Amazon Redshift source.</p>
 * @public
 */
export interface AmazonRedshiftSource {
  /**
   * <p>The name of the Amazon Redshift source.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies the data of the Amazon Reshift source node.</p>
   * @public
   */
  Data?: AmazonRedshiftNodeData | undefined;
}

/**
 * <p>Specifies an Amazon Redshift target.</p>
 * @public
 */
export interface AmazonRedshiftTarget {
  /**
   * <p>The name of the Amazon Redshift target.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies the data of the Amazon Redshift target node.</p>
   * @public
   */
  Data?: AmazonRedshiftNodeData | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs?: string[] | undefined;
}

/**
 * <p>A failed annotation.</p>
 * @public
 */
export interface AnnotationError {
  /**
   * <p>The Profile ID for the failed annotation.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>The Statistic ID for the failed annotation.</p>
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * <p>The reason why the annotation failed.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * <p>A timestamped inclusion annotation.</p>
 * @public
 */
export interface TimestampedInclusionAnnotation {
  /**
   * <p>The inclusion annotation value.</p>
   * @public
   */
  Value?: InclusionAnnotationValue | undefined;

  /**
   * <p>The timestamp when the inclusion annotation was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;
}

/**
 * <p>A Statistic Annotation.</p>
 * @public
 */
export interface StatisticAnnotation {
  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * <p>The timestamp when the annotated statistic was recorded.</p>
   * @public
   */
  StatisticRecordedOn?: Date | undefined;

  /**
   * <p>The inclusion annotation applied to the statistic.</p>
   * @public
   */
  InclusionAnnotation?: TimestampedInclusionAnnotation | undefined;
}

/**
 * <p>Specifies a single column in a Glue schema definition.</p>
 * @public
 */
export interface GlueStudioSchemaColumn {
  /**
   * <p>The name of the column in the Glue Studio schema.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The hive type for this column in the Glue Studio schema.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The data type of the column as defined in Glue Studio.</p>
   * @public
   */
  GlueStudioType?: string | undefined;
}

/**
 * <p>Specifies a user-defined schema when a schema cannot be determined by Glue.</p>
 * @public
 */
export interface GlueSchema {
  /**
   * <p>Specifies the column definitions that make up a Glue schema.</p>
   * @public
   */
  Columns?: GlueStudioSchemaColumn[] | undefined;
}

/**
 * <p>Specifies a connector to an Amazon Athena data source.</p>
 * @public
 */
export interface AthenaConnectorSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the connection that is associated with the connector.</p>
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * <p>The name of a connector that assists with accessing the data store in Glue Studio.</p>
   * @public
   */
  ConnectorName: string | undefined;

  /**
   * <p>The type of connection, such as marketplace.athena or custom.athena, designating a connection to an Amazon Athena data store.</p>
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * <p>The name of the table in the data source.</p>
   * @public
   */
  ConnectionTable?: string | undefined;

  /**
   * <p>The name of the Cloudwatch log group to read from. For example, <code>/aws-glue/jobs/output</code>.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifies the data schema for the custom Athena source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>A structure containing the Lake Formation audit context.</p>
 * @public
 */
export interface AuditContext {
  /**
   * <p>A string containing the additional audit context information.</p>
   * @public
   */
  AdditionalAuditContext?: string | undefined;

  /**
   * <p>The requested columns for audit.</p>
   * @public
   */
  RequestedColumns?: string[] | undefined;

  /**
   * <p>All columns request for audit.</p>
   * @public
   */
  AllColumnsRequested?: boolean | undefined;
}

/**
 * <p>An object that defines a connection type for a compute environment.</p>
 * @public
 */
export interface Property {
  /**
   * <p>The name of the property.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the property.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Indicates whether the property is required.</p>
   * @public
   */
  Required: boolean | undefined;

  /**
   * <p>The default value for the property.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>Describes the type of property.</p>
   * @public
   */
  PropertyTypes: PropertyType[] | undefined;

  /**
   * <p>A list of <code>AllowedValue</code> objects representing the values allowed for the property.</p>
   * @public
   */
  AllowedValues?: AllowedValue[] | undefined;

  /**
   * <p>Indicates which data operations are applicable to the property.</p>
   * @public
   */
  DataOperationScopes?: DataOperation[] | undefined;
}

/**
 * <p>The authentication configuration for a connection returned by the <code>DescribeConnectionType</code> API.</p>
 * @public
 */
export interface AuthConfiguration {
  /**
   * <p>The type of authentication for a connection.</p>
   * @public
   */
  AuthenticationType: Property | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Secrets Manager.</p>
   * @public
   */
  SecretArn?: Property | undefined;

  /**
   * <p>A map of key-value pairs for the OAuth2 properties. Each value is a a <code>Property</code> object.</p>
   * @public
   */
  OAuth2Properties?: Record<string, Property> | undefined;

  /**
   * <p>A map of key-value pairs for the OAuth2 properties. Each value is a a <code>Property</code> object.</p>
   * @public
   */
  BasicAuthenticationProperties?: Record<string, Property> | undefined;

  /**
   * <p>A map of key-value pairs for the custom authentication properties. Each value is a a <code>Property</code> object.</p>
   * @public
   */
  CustomAuthenticationProperties?: Record<string, Property> | undefined;
}

/**
 * <p>The OAuth2 client app used for the connection.</p>
 * @public
 */
export interface OAuth2ClientApplication {
  /**
   * <p>The client application clientID if the ClientAppType is <code>USER_MANAGED</code>.</p>
   * @public
   */
  UserManagedClientApplicationClientId?: string | undefined;

  /**
   * <p>The reference to the SaaS-side client app that is Amazon Web Services managed.</p>
   * @public
   */
  AWSManagedClientApplicationReference?: string | undefined;
}

/**
 * <p>A structure containing properties for OAuth2 authentication.</p>
 * @public
 */
export interface OAuth2Properties {
  /**
   * <p>The OAuth2 grant type. For example, <code>AUTHORIZATION_CODE</code>, <code>JWT_BEARER</code>, or <code>CLIENT_CREDENTIALS</code>.</p>
   * @public
   */
  OAuth2GrantType?: OAuth2GrantType | undefined;

  /**
   * <p>The client application type. For example, AWS_MANAGED or USER_MANAGED.</p>
   * @public
   */
  OAuth2ClientApplication?: OAuth2ClientApplication | undefined;

  /**
   * <p>The URL of the provider's authentication server, to exchange an authorization code for an access token.</p>
   * @public
   */
  TokenUrl?: string | undefined;

  /**
   * <p>A map of parameters that are added to the token <code>GET</code> request.</p>
   * @public
   */
  TokenUrlParametersMap?: Record<string, string> | undefined;
}

/**
 * <p>A structure containing the authentication configuration.</p>
 * @public
 */
export interface AuthenticationConfiguration {
  /**
   * <p>A structure containing the authentication configuration.</p>
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * <p>The secret manager ARN to store credentials.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive authentication information. This key is used to protect credentials
   *       and other sensitive data stored within the authentication configuration.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The properties for OAuth2 authentication.</p>
   * @public
   */
  OAuth2Properties?: OAuth2Properties | undefined;
}

/**
 * <p>For supplying basic auth credentials when not providing a <code>SecretArn</code> value.</p>
 * @public
 */
export interface BasicAuthenticationCredentials {
  /**
   * <p>The username to connect to the data source.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The password to connect to the data source.</p>
   * @public
   */
  Password?: string | undefined;
}

/**
 * <p>The set of properties required for the the OAuth2 <code>AUTHORIZATION_CODE</code> grant type workflow.</p>
 * @public
 */
export interface AuthorizationCodeProperties {
  /**
   * <p>An authorization code to be used in the third leg of the <code>AUTHORIZATION_CODE</code> grant workflow. This is a single-use code which becomes invalid once exchanged for an access token, thus it is acceptable to have this value as a request parameter.</p>
   * @public
   */
  AuthorizationCode?: string | undefined;

  /**
   * <p>The redirect URI where the user gets redirected to by authorization server when issuing an authorization code. The URI is subsequently used when the authorization code is exchanged for an access token.</p>
   * @public
   */
  RedirectUri?: string | undefined;
}

/**
 * <p>The credentials used when the authentication type is OAuth2 authentication.</p>
 * @public
 */
export interface OAuth2Credentials {
  /**
   * <p>The client application client secret if the client application is user managed.</p>
   * @public
   */
  UserManagedClientApplicationClientSecret?: string | undefined;

  /**
   * <p>The access token used when the authentication type is OAuth2.</p>
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * <p>The refresh token used when the authentication type is OAuth2.</p>
   * @public
   */
  RefreshToken?: string | undefined;

  /**
   * <p>The JSON Web Token (JWT) used when the authentication type is OAuth2.</p>
   * @public
   */
  JwtToken?: string | undefined;
}

/**
 * <p>A structure containing properties for OAuth2 in the CreateConnection request.</p>
 * @public
 */
export interface OAuth2PropertiesInput {
  /**
   * <p>The OAuth2 grant type in the CreateConnection request. For example, <code>AUTHORIZATION_CODE</code>, <code>JWT_BEARER</code>, or <code>CLIENT_CREDENTIALS</code>.</p>
   * @public
   */
  OAuth2GrantType?: OAuth2GrantType | undefined;

  /**
   * <p>The client application type in the CreateConnection request. For example, <code>AWS_MANAGED</code> or <code>USER_MANAGED</code>.</p>
   * @public
   */
  OAuth2ClientApplication?: OAuth2ClientApplication | undefined;

  /**
   * <p>The URL of the provider's authentication server, to exchange an authorization code for an access token.</p>
   * @public
   */
  TokenUrl?: string | undefined;

  /**
   * <p>A map of parameters that are added to the token <code>GET</code> request.</p>
   * @public
   */
  TokenUrlParametersMap?: Record<string, string> | undefined;

  /**
   * <p>The set of properties required for the the OAuth2 <code>AUTHORIZATION_CODE</code> grant type.</p>
   * @public
   */
  AuthorizationCodeProperties?: AuthorizationCodeProperties | undefined;

  /**
   * <p>The credentials used when the authentication type is OAuth2 authentication.</p>
   * @public
   */
  OAuth2Credentials?: OAuth2Credentials | undefined;
}

/**
 * <p>A structure containing the authentication configuration in the CreateConnection request.</p>
 * @public
 */
export interface AuthenticationConfigurationInput {
  /**
   * <p>A structure containing the authentication configuration in the CreateConnection request.</p>
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * <p>The properties for OAuth2 authentication in the CreateConnection request.</p>
   * @public
   */
  OAuth2Properties?: OAuth2PropertiesInput | undefined;

  /**
   * <p>The secret manager ARN to store credentials in the CreateConnection request.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The ARN of the KMS key used to encrypt the connection. Only taken an as input in the request and stored in the Secret Manager.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The credentials used when the authentication type is basic authentication.</p>
   * @public
   */
  BasicAuthenticationCredentials?: BasicAuthenticationCredentials | undefined;

  /**
   * <p>The credentials used when the authentication type is custom authentication.</p>
   * @public
   */
  CustomAuthenticationCredentials?: Record<string, string> | undefined;
}

/**
 * <p>Specifies configuration options for automatic data quality evaluation in Glue jobs. This structure enables automated data quality
 *       checks and monitoring during ETL operations, helping to ensure data integrity and reliability without manual intervention.</p>
 * @public
 */
export interface AutoDataQuality {
  /**
   * <p>Specifies whether automatic data quality evaluation is enabled. When set to <code>true</code>, data quality checks are performed automatically.</p>
   * @public
   */
  IsEnabled?: boolean | undefined;

  /**
   * <p>The evaluation context for the automatic data quality checks. This defines the scope and parameters for the data quality evaluation.</p>
   * @public
   */
  EvaluationContext?: string | undefined;
}

/**
 * <p>A column in a <code>Table</code>.</p>
 * @public
 */
export interface Column {
  /**
   * <p>The name of the <code>Column</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The data type of the <code>Column</code>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>A free-form text comment.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>These key-value pairs define properties associated with the column.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * <p>The unique ID of the schema in the Glue schema registry.</p>
 * @public
 */
export interface SchemaId {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The name of the schema registry that contains the schema.</p>
   * @public
   */
  RegistryName?: string | undefined;
}

/**
 * <p>An object that references a schema stored in the Glue Schema Registry.</p>
 * @public
 */
export interface SchemaReference {
  /**
   * <p>A structure that contains schema identity fields. Either this or the <code>SchemaVersionId</code> has to be provided.</p>
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * <p>The unique ID assigned to a version of the schema. Either this or the <code>SchemaId</code> has to be provided.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: number | undefined;
}

/**
 * <p>Information about a serialization/deserialization program (SerDe) that serves as an
 *       extractor and loader.</p>
 * @public
 */
export interface SerDeInfo {
  /**
   * <p>Name of the SerDe.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Usually the class that implements the SerDe. An example is
   *         <code>org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe</code>.</p>
   * @public
   */
  SerializationLibrary?: string | undefined;

  /**
   * <p>These key-value pairs define initialization parameters for the SerDe.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * <p>Specifies skewed values in a table. Skewed values are those that occur with very high
 *       frequency.</p>
 * @public
 */
export interface SkewedInfo {
  /**
   * <p>A list of names of columns that contain skewed values.</p>
   * @public
   */
  SkewedColumnNames?: string[] | undefined;

  /**
   * <p>A list of values that appear so frequently as to be considered
   *       skewed.</p>
   * @public
   */
  SkewedColumnValues?: string[] | undefined;

  /**
   * <p>A mapping of skewed values to the columns that contain them.</p>
   * @public
   */
  SkewedColumnValueLocationMaps?: Record<string, string> | undefined;
}

/**
 * <p>Specifies the sort order of a sorted column.</p>
 * @public
 */
export interface Order {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  Column: string | undefined;

  /**
   * <p>Indicates that the column is sorted in ascending order
   *       (<code>== 1</code>), or in descending order (<code>==0</code>).</p>
   * @public
   */
  SortOrder: number | undefined;
}

/**
 * <p>Describes the physical storage of table data.</p>
 * @public
 */
export interface StorageDescriptor {
  /**
   * <p>A list of the <code>Columns</code> in the table.</p>
   * @public
   */
  Columns?: Column[] | undefined;

  /**
   * <p>The physical location of the table. By default, this takes the form of the warehouse
   *       location, followed by the database location in the warehouse, followed by the table
   *       name.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>A list of locations that point to the path where a Delta table is located.</p>
   * @public
   */
  AdditionalLocations?: string[] | undefined;

  /**
   * <p>The input format: <code>SequenceFileInputFormat</code> (binary),
   *       or <code>TextInputFormat</code>, or a custom format.</p>
   * @public
   */
  InputFormat?: string | undefined;

  /**
   * <p>The output format: <code>SequenceFileOutputFormat</code> (binary),
   *       or <code>IgnoreKeyTextOutputFormat</code>, or a custom format.</p>
   * @public
   */
  OutputFormat?: string | undefined;

  /**
   * <p>
   *             <code>True</code> if the data in the table is compressed, or <code>False</code> if
   *       not.</p>
   * @public
   */
  Compressed?: boolean | undefined;

  /**
   * <p>Must be specified if the table contains any dimension columns.</p>
   * @public
   */
  NumberOfBuckets?: number | undefined;

  /**
   * <p>The serialization/deserialization (SerDe) information.</p>
   * @public
   */
  SerdeInfo?: SerDeInfo | undefined;

  /**
   * <p>A list of reducer grouping columns, clustering columns, and
   *       bucketing columns in the table.</p>
   * @public
   */
  BucketColumns?: string[] | undefined;

  /**
   * <p>A list specifying the sort order of each bucket in the table.</p>
   * @public
   */
  SortColumns?: Order[] | undefined;

  /**
   * <p>The user-supplied properties in key-value form.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>The information about values that appear frequently in a column (skewed values).</p>
   * @public
   */
  SkewedInfo?: SkewedInfo | undefined;

  /**
   * <p>
   *             <code>True</code> if the table data is stored in subdirectories, or <code>False</code> if
   *       not.</p>
   * @public
   */
  StoredAsSubDirectories?: boolean | undefined;

  /**
   * <p>An object that references a schema stored in the Glue Schema Registry.</p>
   *          <p>When creating a table, you can pass an empty list of columns for the schema, and instead use a schema reference.</p>
   * @public
   */
  SchemaReference?: SchemaReference | undefined;
}

/**
 * <p>The structure used to create and update a partition.</p>
 * @public
 */
export interface PartitionInput {
  /**
   * <p>The values of the partition. Although this parameter is not required by the SDK, you must specify this parameter for a valid input.</p>
   *          <p>The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise Glue will add the values to the wrong keys.</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>The last time at which the partition was accessed.</p>
   * @public
   */
  LastAccessTime?: Date | undefined;

  /**
   * <p>Provides information about the physical
   *       location where the partition is stored.</p>
   * @public
   */
  StorageDescriptor?: StorageDescriptor | undefined;

  /**
   * <p>These key-value pairs define partition parameters.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>The last time at which column statistics were computed for this partition.</p>
   * @public
   */
  LastAnalyzedTime?: Date | undefined;
}

/**
 * @public
 */
export interface BatchCreatePartitionRequest {
  /**
   * <p>The ID of the catalog in which the partition is to be created. Currently, this should be
   *       the Amazon Web Services account ID.</p>
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
   * <p>A list of <code>PartitionInput</code> structures that define
   *       the partitions to be created.</p>
   * @public
   */
  PartitionInputList: PartitionInput[] | undefined;
}

/**
 * <p>Contains details about an error.</p>
 * @public
 */
export interface ErrorDetail {
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
 * <p>Contains information about a partition error.</p>
 * @public
 */
export interface PartitionError {
  /**
   * <p>The values that define the partition.</p>
   * @public
   */
  PartitionValues?: string[] | undefined;

  /**
   * <p>The details about the partition error.</p>
   * @public
   */
  ErrorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface BatchCreatePartitionResponse {
  /**
   * <p>The errors encountered when trying to create the requested partitions.</p>
   * @public
   */
  Errors?: PartitionError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A list of names of the connections to delete.</p>
   * @public
   */
  ConnectionNameList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteConnectionResponse {
  /**
   * <p>A list of names of the connection definitions that were
   *        successfully deleted.</p>
   * @public
   */
  Succeeded?: string[] | undefined;

  /**
   * <p>A map of the names of connections that were not successfully
   *        deleted to error details.</p>
   * @public
   */
  Errors?: Record<string, ErrorDetail> | undefined;
}

/**
 * <p>Contains a list of values defining partitions.</p>
 * @public
 */
export interface PartitionValueList {
  /**
   * <p>The list of values.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePartitionRequest {
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
   * <p>The name of the table that contains the partitions to be deleted.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A list of <code>PartitionInput</code> structures that define
   *       the partitions to be deleted.</p>
   * @public
   */
  PartitionsToDelete: PartitionValueList[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePartitionResponse {
  /**
   * <p>The errors encountered when trying to delete the requested partitions.</p>
   * @public
   */
  Errors?: PartitionError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database in which the tables to delete reside. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of the table to delete.</p>
   * @public
   */
  TablesToDelete: string[] | undefined;

  /**
   * <p>The transaction ID at which to delete the table contents.</p>
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * <p>An error record for table operations.</p>
 * @public
 */
export interface TableError {
  /**
   * <p>The name of the table. For Hive compatibility, this must be entirely lowercase.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The details about the error.</p>
   * @public
   */
  ErrorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTableResponse {
  /**
   * <p>A list of errors encountered in attempting to delete the specified tables.</p>
   * @public
   */
  Errors?: TableError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTableVersionRequest {
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
   * <p>A list of the IDs of versions to be deleted. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
   * @public
   */
  VersionIds: string[] | undefined;
}

/**
 * <p>An error record for table-version operations.</p>
 * @public
 */
export interface TableVersionError {
  /**
   * <p>The name of the table in question.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The ID value of the version in question. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The details about the error.</p>
   * @public
   */
  ErrorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTableVersionResponse {
  /**
   * <p>A list of errors encountered while trying to delete
   *       the specified table versions.</p>
   * @public
   */
  Errors?: TableVersionError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetBlueprintsRequest {
  /**
   * <p>A list of blueprint names.</p>
   * @public
   */
  Names: string[] | undefined;

  /**
   * <p>Specifies whether or not to include the blueprint in the response.</p>
   * @public
   */
  IncludeBlueprint?: boolean | undefined;

  /**
   * <p>Specifies whether or not to include the parameters, as a JSON string, for the blueprint in the response.</p>
   * @public
   */
  IncludeParameterSpec?: boolean | undefined;
}

/**
 * <p>When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.</p>
 * @public
 */
export interface LastActiveDefinition {
  /**
   * <p>The description of the blueprint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time the blueprint was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>A JSON string specifying the parameters for the blueprint.</p>
   * @public
   */
  ParameterSpec?: string | undefined;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is published by the Glue developer.</p>
   * @public
   */
  BlueprintLocation?: string | undefined;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is copied when you create or update the blueprint.</p>
   * @public
   */
  BlueprintServiceLocation?: string | undefined;
}

/**
 * <p>The details of a blueprint.</p>
 * @public
 */
export interface Blueprint {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the blueprint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time the blueprint was registered.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The date and time the blueprint was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>A JSON string that indicates the list of parameter specifications for the blueprint.</p>
   * @public
   */
  ParameterSpec?: string | undefined;

  /**
   * <p>Specifies the path in Amazon S3 where the blueprint is published.</p>
   * @public
   */
  BlueprintLocation?: string | undefined;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is copied when you call <code>CreateBlueprint/UpdateBlueprint</code> to register the blueprint in Glue.</p>
   * @public
   */
  BlueprintServiceLocation?: string | undefined;

  /**
   * <p>The status of the blueprint registration.</p>
   *          <ul>
   *             <li>
   *                <p>Creating — The blueprint registration is in progress.</p>
   *             </li>
   *             <li>
   *                <p>Active — The blueprint has been successfully registered.</p>
   *             </li>
   *             <li>
   *                <p>Updating — An update to the blueprint registration is in progress.</p>
   *             </li>
   *             <li>
   *                <p>Failed — The blueprint registration failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: BlueprintStatus | undefined;

  /**
   * <p>An error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.</p>
   * @public
   */
  LastActiveDefinition?: LastActiveDefinition | undefined;
}

/**
 * @public
 */
export interface BatchGetBlueprintsResponse {
  /**
   * <p>Returns a list of blueprint as a <code>Blueprints</code> object.</p>
   * @public
   */
  Blueprints?: Blueprint[] | undefined;

  /**
   * <p>Returns a list of <code>BlueprintNames</code> that were not found.</p>
   * @public
   */
  MissingBlueprints?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCrawlersRequest {
  /**
   * <p>A list of crawler names, which might be the names returned from the
   *         <code>ListCrawlers</code> operation.</p>
   * @public
   */
  CrawlerNames: string[] | undefined;
}

/**
 * <p>Specifies Lake Formation configuration settings for the crawler.</p>
 * @public
 */
export interface LakeFormationConfiguration {
  /**
   * <p>Specifies whether to use Lake Formation credentials for the crawler instead of the IAM role credentials.</p>
   * @public
   */
  UseLakeFormationCredentials?: boolean | undefined;

  /**
   * <p>Required for cross account crawls. For same account crawls as the target data, this can be left as null.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p>Status and error information about the most recent crawl.</p>
 * @public
 */
export interface LastCrawlInfo {
  /**
   * <p>Status of the last crawl.</p>
   * @public
   */
  Status?: LastCrawlStatus | undefined;

  /**
   * <p>If an error occurred, the error information about the last crawl.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The log group for the last crawl.</p>
   * @public
   */
  LogGroup?: string | undefined;

  /**
   * <p>The log stream for the last crawl.</p>
   * @public
   */
  LogStream?: string | undefined;

  /**
   * <p>The prefix for a message about this crawl.</p>
   * @public
   */
  MessagePrefix?: string | undefined;

  /**
   * <p>The time at which the crawl started.</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * <p>Specifies data lineage configuration settings for the crawler.</p>
 * @public
 */
export interface LineageConfiguration {
  /**
   * <p>Specifies whether data lineage is enabled for the crawler. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>ENABLE: enables data lineage for the crawler</p>
   *             </li>
   *             <li>
   *                <p>DISABLE: disables data lineage for the crawler</p>
   *             </li>
   *          </ul>
   * @public
   */
  CrawlerLineageSettings?: CrawlerLineageSettings | undefined;
}

/**
 * <p>When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html">Incremental Crawls in Glue</a> in the developer guide.</p>
 * @public
 */
export interface RecrawlPolicy {
  /**
   * <p>Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.</p>
   *          <p>A value of <code>CRAWL_EVERYTHING</code> specifies crawling the entire dataset again.</p>
   *          <p>A value of <code>CRAWL_NEW_FOLDERS_ONLY</code> specifies crawling only folders that were added since the last crawler run.</p>
   *          <p>A value of <code>CRAWL_EVENT_MODE</code> specifies crawling only the changes identified by Amazon S3 events.</p>
   * @public
   */
  RecrawlBehavior?: RecrawlBehavior | undefined;
}

/**
 * <p>A scheduling object using a <code>cron</code> statement to schedule an event.</p>
 * @public
 */
export interface Schedule {
  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>The state of the schedule.</p>
   * @public
   */
  State?: ScheduleState | undefined;
}

/**
 * <p>A policy that specifies update and deletion behaviors for the crawler.</p>
 * @public
 */
export interface SchemaChangePolicy {
  /**
   * <p>The update behavior when the crawler finds a changed schema.</p>
   * @public
   */
  UpdateBehavior?: UpdateBehavior | undefined;

  /**
   * <p>The deletion behavior when the crawler finds a deleted object.</p>
   * @public
   */
  DeleteBehavior?: DeleteBehavior | undefined;
}

/**
 * <p>Specifies an Glue Data Catalog target.</p>
 * @public
 */
export interface CatalogTarget {
  /**
   * <p>The name of the database to be synchronized.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of the tables to be synchronized.</p>
   * @public
   */
  Tables: string[] | undefined;

  /**
   * <p>The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a <code>Catalog</code> connection type paired with a <code>NETWORK</code> Connection type.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>A valid Amazon SQS ARN. For example, <code>arn:aws:sqs:region:account:sqs</code>.</p>
   * @public
   */
  EventQueueArn?: string | undefined;

  /**
   * <p>A valid Amazon dead-letter SQS ARN. For example, <code>arn:aws:sqs:region:account:deadLetterQueue</code>.</p>
   * @public
   */
  DlqEventQueueArn?: string | undefined;
}

/**
 * <p>Specifies a Delta data store to crawl one or more Delta tables.</p>
 * @public
 */
export interface DeltaTarget {
  /**
   * <p>A list of the Amazon S3 paths to the Delta tables.</p>
   * @public
   */
  DeltaTables?: string[] | undefined;

  /**
   * <p>The name of the connection to use to connect to the Delta table target.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>Specifies whether to write the manifest files to the Delta table path.</p>
   * @public
   */
  WriteManifest?: boolean | undefined;

  /**
   * <p>Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.</p>
   * @public
   */
  CreateNativeDeltaTable?: boolean | undefined;
}

/**
 * <p>Specifies an Amazon DynamoDB table to crawl.</p>
 * @public
 */
export interface DynamoDBTarget {
  /**
   * <p>The name of the DynamoDB table to crawl.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table.</p>
   *          <p>A value of <code>true</code> means to scan all records, while a value of <code>false</code> means to sample the records. If no value is specified, the value defaults to <code>true</code>.</p>
   * @public
   */
  scanAll?: boolean | undefined;

  /**
   * <p>The percentage of the configured read capacity units to use by the Glue crawler. Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.</p>
   *          <p>The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode).</p>
   * @public
   */
  scanRate?: number | undefined;
}

/**
 * <p>Specifies an Apache Hudi data source.</p>
 * @public
 */
export interface HudiTarget {
  /**
   * <p>An array of Amazon S3 location strings for Hudi, each indicating the root folder with which the metadata files for a Hudi table resides. The Hudi folder may be located in a child folder of the root folder.</p>
   *          <p>The crawler will scan all folders underneath a path for a Hudi folder.</p>
   * @public
   */
  Paths?: string[] | undefined;

  /**
   * <p>The name of the connection to use to connect to the Hudi target. If your Hudi files are stored in buckets that require VPC authorization, you can set their connection properties here.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>A list of glob patterns used to exclude from the crawl.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * <p>The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path. Used to limit the crawler run time.</p>
   * @public
   */
  MaximumTraversalDepth?: number | undefined;
}

/**
 * <p>Specifies an Apache Iceberg data source where Iceberg tables are stored in Amazon S3.</p>
 * @public
 */
export interface IcebergTarget {
  /**
   * <p>One or more Amazon S3 paths that contains Iceberg metadata folders as <code>s3://bucket/prefix</code>.</p>
   * @public
   */
  Paths?: string[] | undefined;

  /**
   * <p>The name of the connection to use to connect to the Iceberg target.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>A list of glob patterns used to exclude from the crawl.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * <p>The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. Used to limit the crawler run time.</p>
   * @public
   */
  MaximumTraversalDepth?: number | undefined;
}

/**
 * <p>Specifies a JDBC data store to crawl.</p>
 * @public
 */
export interface JdbcTarget {
  /**
   * <p>The name of the connection to use to connect to the JDBC target.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The path of the JDBC target.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>A list of glob patterns used to exclude from the crawl.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * <p>Specify a value of <code>RAWTYPES</code> or <code>COMMENTS</code> to enable additional metadata in table responses. <code>RAWTYPES</code> provides the native-level datatype. <code>COMMENTS</code> provides comments associated with a column or table in the database.</p>
   *          <p>If you do not need additional metadata, keep the field empty.</p>
   * @public
   */
  EnableAdditionalMetadata?: JdbcMetadataEntry[] | undefined;
}

/**
 * <p>Specifies an Amazon DocumentDB or MongoDB data store to crawl.</p>
 * @public
 */
export interface MongoDBTarget {
  /**
   * <p>The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The path of the Amazon DocumentDB or MongoDB target (database/collection).</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table.</p>
   *          <p>A value of <code>true</code> means to scan all records, while a value of <code>false</code> means to sample the records. If no value is specified, the value defaults to <code>true</code>.</p>
   * @public
   */
  ScanAll?: boolean | undefined;
}

/**
 * <p>Specifies a data store in Amazon Simple Storage Service (Amazon S3).</p>
 * @public
 */
export interface S3Target {
  /**
   * <p>The path to the Amazon S3 target.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>A list of glob patterns used to exclude from the crawl.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * <p>The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.</p>
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * <p>A valid Amazon SQS ARN. For example, <code>arn:aws:sqs:region:account:sqs</code>.</p>
   * @public
   */
  EventQueueArn?: string | undefined;

  /**
   * <p>A valid Amazon dead-letter SQS ARN. For example, <code>arn:aws:sqs:region:account:deadLetterQueue</code>.</p>
   * @public
   */
  DlqEventQueueArn?: string | undefined;
}

/**
 * <p>Specifies data stores to crawl.</p>
 * @public
 */
export interface CrawlerTargets {
  /**
   * <p>Specifies Amazon Simple Storage Service (Amazon S3) targets.</p>
   * @public
   */
  S3Targets?: S3Target[] | undefined;

  /**
   * <p>Specifies JDBC targets.</p>
   * @public
   */
  JdbcTargets?: JdbcTarget[] | undefined;

  /**
   * <p>Specifies Amazon DocumentDB or MongoDB targets.</p>
   * @public
   */
  MongoDBTargets?: MongoDBTarget[] | undefined;

  /**
   * <p>Specifies Amazon DynamoDB targets.</p>
   * @public
   */
  DynamoDBTargets?: DynamoDBTarget[] | undefined;

  /**
   * <p>Specifies Glue Data Catalog targets.</p>
   * @public
   */
  CatalogTargets?: CatalogTarget[] | undefined;

  /**
   * <p>Specifies Delta data store targets.</p>
   * @public
   */
  DeltaTargets?: DeltaTarget[] | undefined;

  /**
   * <p>Specifies Apache Iceberg data store targets.</p>
   * @public
   */
  IcebergTargets?: IcebergTarget[] | undefined;

  /**
   * <p>Specifies Apache Hudi data store targets.</p>
   * @public
   */
  HudiTargets?: HudiTarget[] | undefined;
}

/**
 * <p>Specifies a crawler program that examines a data source and uses classifiers to try to
 *       determine its schema. If successful, the crawler records metadata concerning the data source
 *       in the Glue Data Catalog.</p>
 * @public
 */
export interface Crawler {
  /**
   * <p>The name of the crawler.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources,
   *       such as Amazon Simple Storage Service (Amazon S3) data.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>A collection of targets to crawl.</p>
   * @public
   */
  Targets?: CrawlerTargets | undefined;

  /**
   * <p>The name of the database in which the crawler's output is stored.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>A description of the crawler.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of UTF-8 strings that specify the custom classifiers that are associated
   *      with the crawler.</p>
   * @public
   */
  Classifiers?: string[] | undefined;

  /**
   * <p>A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.</p>
   * @public
   */
  RecrawlPolicy?: RecrawlPolicy | undefined;

  /**
   * <p>The policy that specifies update and delete behaviors for the crawler.</p>
   * @public
   */
  SchemaChangePolicy?: SchemaChangePolicy | undefined;

  /**
   * <p>A configuration that specifies whether data lineage is enabled for the crawler.</p>
   * @public
   */
  LineageConfiguration?: LineageConfiguration | undefined;

  /**
   * <p>Indicates whether the crawler is running, or whether a run is pending.</p>
   * @public
   */
  State?: CrawlerState | undefined;

  /**
   * <p>The prefix added to the names of tables that are created.</p>
   * @public
   */
  TablePrefix?: string | undefined;

  /**
   * <p>For scheduled crawlers, the schedule when the crawler runs.</p>
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * <p>If the crawler is running, contains the total time elapsed since the last crawl
   *       began.</p>
   * @public
   */
  CrawlElapsedTime?: number | undefined;

  /**
   * <p>The time that the crawler was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time that the crawler was last updated.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The status of the last crawl, and potentially error information if
   *       an error occurred.</p>
   * @public
   */
  LastCrawl?: LastCrawlInfo | undefined;

  /**
   * <p>The version of the crawler.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>Crawler configuration information. This versioned JSON string allows users to specify
   *       aspects of a crawler's behavior. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Setting crawler configuration options</a>.</p>
   * @public
   */
  Configuration?: string | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   * @public
   */
  CrawlerSecurityConfiguration?: string | undefined;

  /**
   * <p>Specifies whether the crawler should use Lake Formation credentials for the crawler instead of the IAM role credentials.</p>
   * @public
   */
  LakeFormationConfiguration?: LakeFormationConfiguration | undefined;
}

/**
 * @public
 */
export interface BatchGetCrawlersResponse {
  /**
   * <p>A list of crawler definitions.</p>
   * @public
   */
  Crawlers?: Crawler[] | undefined;

  /**
   * <p>A list of names of crawlers that were not found.</p>
   * @public
   */
  CrawlersNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCustomEntityTypesRequest {
  /**
   * <p>A list of names of the custom patterns that you want to retrieve.</p>
   * @public
   */
  Names: string[] | undefined;
}

/**
 * <p>An object representing a custom pattern for detecting sensitive data across the columns and rows of your structured data.</p>
 * @public
 */
export interface CustomEntityType {
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
  ContextWords?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCustomEntityTypesResponse {
  /**
   * <p>A list of <code>CustomEntityType</code> objects representing the custom patterns that have been created.</p>
   * @public
   */
  CustomEntityTypes?: CustomEntityType[] | undefined;

  /**
   * <p>A list of the names of custom patterns that were not found.</p>
   * @public
   */
  CustomEntityTypesNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDataQualityResultRequest {
  /**
   * <p>A list of unique result IDs for the data quality results.</p>
   * @public
   */
  ResultIds: string[] | undefined;
}

/**
 * <p>A summary of metrics showing the total counts of processed rows and rules, including their pass/fail statistics based on row-level results.</p>
 * @public
 */
export interface DataQualityAggregatedMetrics {
  /**
   * <p>The total number of rows that were processed during the data quality evaluation.</p>
   * @public
   */
  TotalRowsProcessed?: number | undefined;

  /**
   * <p>The total number of rows that passed all applicable data quality rules.</p>
   * @public
   */
  TotalRowsPassed?: number | undefined;

  /**
   * <p>The total number of rows that failed one or more data quality rules.</p>
   * @public
   */
  TotalRowsFailed?: number | undefined;

  /**
   * <p>The total number of data quality rules that were evaluated.</p>
   * @public
   */
  TotalRulesProcessed?: number | undefined;

  /**
   * <p>The total number of data quality rules that passed their evaluation criteria.</p>
   * @public
   */
  TotalRulesPassed?: number | undefined;

  /**
   * <p>The total number of data quality rules that failed their evaluation criteria.</p>
   * @public
   */
  TotalRulesFailed?: number | undefined;
}

/**
 * <p>Describes the result of the evaluation of a data quality analyzer.</p>
 * @public
 */
export interface DataQualityAnalyzerResult {
  /**
   * <p>The name of the data quality analyzer.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the data quality analyzer.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>An evaluation message.</p>
   * @public
   */
  EvaluationMessage?: string | undefined;

  /**
   * <p>A map of metrics associated with the evaluation of the analyzer.</p>
   * @public
   */
  EvaluatedMetrics?: Record<string, number> | undefined;
}

/**
 * <p>The database and table in the Glue Data Catalog that is used for input or output data
 *             for Data Quality Operations.</p>
 * @public
 */
export interface DataQualityGlueTable {
  /**
   * <p>A database name in the Glue Data Catalog.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>A table name in the Glue Data Catalog.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A unique identifier for the Glue Data Catalog.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the connection to the Glue Data Catalog.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>Additional options for the table. Currently there are two keys supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pushDownPredicate</code>: to filter on partitions without having to list and read all the files in your dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>catalogPartitionPredicate</code>: to use server-side partition pruning using partition indexes in the Glue Data Catalog.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * <p>SQL Query of SparkSQL format that can be used to pre-process the data for the table in Glue Data Catalog,
   *             before running the Data Quality Operation.</p>
   * @public
   */
  PreProcessingQuery?: string | undefined;
}

/**
 * <p>The database and table in the Glue Data Catalog that is used for input or output data.</p>
 * @public
 */
export interface GlueTable {
  /**
   * <p>A database name in the Glue Data Catalog.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>A table name in the Glue Data Catalog.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A unique identifier for the Glue Data Catalog.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the connection to the Glue Data Catalog.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>Additional options for the table. Currently there are two keys supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pushDownPredicate</code>: to filter on partitions without having to list and read all the files in your dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>catalogPartitionPredicate</code>: to use server-side partition pruning using partition indexes in the Glue Data Catalog.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;
}

/**
 * <p>A data source (an Glue table) for which you want data quality results.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>An Glue table.</p>
   * @public
   */
  GlueTable?: GlueTable | undefined;

  /**
   * <p>An Glue table for Data Quality Operations.</p>
   * @public
   */
  DataQualityGlueTable?: DataQualityGlueTable | undefined;
}

/**
 * <p>Describes the data quality metric value according to the analysis of historical data.</p>
 * @public
 */
export interface DataQualityMetricValues {
  /**
   * <p>The actual value of the data quality metric.</p>
   * @public
   */
  ActualValue?: number | undefined;

  /**
   * <p>The expected value of the data quality metric according to the analysis of historical data.</p>
   * @public
   */
  ExpectedValue?: number | undefined;

  /**
   * <p>The lower limit of the data quality metric value according to the analysis of historical data.</p>
   * @public
   */
  LowerLimit?: number | undefined;

  /**
   * <p>The upper limit of the data quality metric value according to the analysis of historical data.</p>
   * @public
   */
  UpperLimit?: number | undefined;
}

/**
 * <p>Describes the metric based observation generated based on evaluated data quality metrics.</p>
 * @public
 */
export interface MetricBasedObservation {
  /**
   * <p>The name of the data quality metric used for generating the observation.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * <p>An object of type <code>DataQualityMetricValues</code> representing the analysis of the data quality metric value.</p>
   * @public
   */
  MetricValues?: DataQualityMetricValues | undefined;

  /**
   * <p>A list of new data quality rules generated as part of the observation based on the data quality metric value.</p>
   * @public
   */
  NewRules?: string[] | undefined;
}

/**
 * <p>Describes the observation generated after evaluating the rules and analyzers.</p>
 * @public
 */
export interface DataQualityObservation {
  /**
   * <p>A description of the data quality observation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>An object of type <code>MetricBasedObservation</code> representing the observation that is based on evaluated data quality metrics.</p>
   * @public
   */
  MetricBasedObservation?: MetricBasedObservation | undefined;
}

/**
 * <p>Describes the result of the evaluation of a data quality rule.</p>
 * @public
 */
export interface DataQualityRuleResult {
  /**
   * <p>The name of the data quality rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the data quality rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>An evaluation message.</p>
   * @public
   */
  EvaluationMessage?: string | undefined;

  /**
   * <p>A pass or fail status for the rule.</p>
   * @public
   */
  Result?: DataQualityRuleResultStatus | undefined;

  /**
   * <p>A map of metrics associated with the evaluation of the rule.</p>
   * @public
   */
  EvaluatedMetrics?: Record<string, number> | undefined;

  /**
   * <p>The evaluated rule.</p>
   * @public
   */
  EvaluatedRule?: string | undefined;

  /**
   * <p>A map containing metrics associated with the evaluation of the rule based on row-level results. </p>
   * @public
   */
  RuleMetrics?: Record<string, number> | undefined;

  /**
   * <p>A map containing labels assigned to the data quality rule. </p>
   * @public
   */
  Labels?: Record<string, string> | undefined;
}

/**
 * <p>Describes a data quality result.</p>
 * @public
 */
export interface DataQualityResult {
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
   * <p>The date and time when this data quality run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The date and time when this data quality run completed.</p>
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
   * <p>The unique run ID for the ruleset evaluation for this data quality result.</p>
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
export interface BatchGetDataQualityResultResponse {
  /**
   * <p>A list of <code>DataQualityResult</code> objects representing the data quality results.</p>
   * @public
   */
  Results: DataQualityResult[] | undefined;

  /**
   * <p>A list of result IDs for which results were not found.</p>
   * @public
   */
  ResultsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDevEndpointsRequest {
  /**
   * <p>The list of <code>DevEndpoint</code> names, which might be the names returned from the
   *         <code>ListDevEndpoint</code> operation.</p>
   * @public
   */
  DevEndpointNames: string[] | undefined;
}

/**
 * <p>A development endpoint where a developer can remotely debug extract, transform, and load
 *       (ETL) scripts.</p>
 * @public
 */
export interface DevEndpoint {
  /**
   * <p>The name of the <code>DevEndpoint</code>.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used in this
   *       <code>DevEndpoint</code>.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A list of security group identifiers used in this <code>DevEndpoint</code>.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The subnet ID for this <code>DevEndpoint</code>.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The YARN endpoint address used by this <code>DevEndpoint</code>.</p>
   * @public
   */
  YarnEndpointAddress?: string | undefined;

  /**
   * <p>A private IP address to access the <code>DevEndpoint</code> within a VPC if the
   *         <code>DevEndpoint</code> is created within one. The <code>PrivateAddress</code> field is
   *       present only when you create the <code>DevEndpoint</code> within your VPC.</p>
   * @public
   */
  PrivateAddress?: string | undefined;

  /**
   * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
   * @public
   */
  ZeppelinRemoteSparkInterpreterPort?: number | undefined;

  /**
   * <p>The public IP address used by this <code>DevEndpoint</code>. The
   *         <code>PublicAddress</code> field is present only when you create a non-virtual private cloud
   *       (VPC) <code>DevEndpoint</code>.</p>
   * @public
   */
  PublicAddress?: string | undefined;

  /**
   * <p>The current status of this <code>DevEndpoint</code>.</p>
   * @public
   */
  Status?: string | undefined;

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
   * <p>The number of Glue Data Processing Units (DPUs) allocated to this
   *         <code>DevEndpoint</code>.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

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
   * <p>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in
   *       your <code>DevEndpoint</code>. Multiple values must be complete paths separated by a
   *       comma.</p>
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

  /**
   * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The status of the last update.</p>
   * @public
   */
  LastUpdateStatus?: string | undefined;

  /**
   * <p>The point in time at which this DevEndpoint was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was last modified.</p>
   * @public
   */
  LastModifiedTimestamp?: Date | undefined;

  /**
   * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
   *       attribute is provided for backward compatibility because the recommended attribute to use is
   *       public keys.</p>
   * @public
   */
  PublicKey?: string | undefined;

  /**
   * <p>A list of public keys to be used by the <code>DevEndpoints</code> for authentication.
   *       Using this attribute is preferred over a single public key because the public keys allow you
   *       to have a different private key per client.</p>
   *          <note>
   *             <p>If you previously created an endpoint with a public key, you must remove that key to be
   *         able to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API operation
   *         with the public key content in the <code>deletePublicKeys</code> attribute, and the list of
   *         new keys in the <code>addPublicKeys</code> attribute.</p>
   *          </note>
   * @public
   */
  PublicKeys?: string[] | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *         <code>DevEndpoint</code>.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
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
 * @public
 */
export interface BatchGetDevEndpointsResponse {
  /**
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   * @public
   */
  DevEndpoints?: DevEndpoint[] | undefined;

  /**
   * <p>A list of <code>DevEndpoints</code> not found.</p>
   * @public
   */
  DevEndpointsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetJobsRequest {
  /**
   * <p>A list of job names, which might be the names returned from the <code>ListJobs</code>
   *       operation.</p>
   * @public
   */
  JobNames: string[] | undefined;
}

/**
 * <p>Specifies a Delta Lake data source that is registered in the Glue Data Catalog.</p>
 * @public
 */
export interface CatalogDeltaSource {
  /**
   * <p>The name of the Delta Lake data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   * @public
   */
  AdditionalDeltaOptions?: Record<string, string> | undefined;

  /**
   * <p>Specifies the data schema for the Delta Lake source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a Hudi data source that is registered in the Glue Data Catalog.</p>
 * @public
 */
export interface CatalogHudiSource {
  /**
   * <p>The name of the Hudi data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   * @public
   */
  AdditionalHudiOptions?: Record<string, string> | undefined;

  /**
   * <p>Specifies the data schema for the Hudi source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies an Apache Iceberg data source that is registered in the Glue Data Catalog.</p>
 * @public
 */
export interface CatalogIcebergSource {
  /**
   * <p>The name of the Iceberg data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>Specifies additional connection options for the Iceberg data source.</p>
   * @public
   */
  AdditionalIcebergOptions?: Record<string, string> | undefined;

  /**
   * <p>Specifies the data schema for the Iceberg source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies options related to data preview for viewing a sample of your data.</p>
 * @public
 */
export interface StreamingDataPreviewOptions {
  /**
   * <p>The polling time in milliseconds.</p>
   * @public
   */
  PollingTime?: number | undefined;

  /**
   * <p>The limit to the number of records polled.</p>
   * @public
   */
  RecordPollingLimit?: number | undefined;
}

/**
 * <p>Additional options for streaming.</p>
 * @public
 */
export interface KafkaStreamingSourceOptions {
  /**
   * <p>A list of bootstrap server URLs, for example, as <code>b-1.vpc-test-2.o4q88o.c6.kafka.us-east-1.amazonaws.com:9094</code>. This option must be specified in the API call or defined in the table metadata in the Data Catalog.</p>
   * @public
   */
  BootstrapServers?: string | undefined;

  /**
   * <p>The protocol used to communicate with brokers. The possible values are <code>"SSL"</code> or <code>"PLAINTEXT"</code>.</p>
   * @public
   */
  SecurityProtocol?: string | undefined;

  /**
   * <p>The name of the connection.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The topic name as specified in Apache Kafka. You must specify at least one of <code>"topicName"</code>, <code>"assign"</code> or <code>"subscribePattern"</code>.</p>
   * @public
   */
  TopicName?: string | undefined;

  /**
   * <p>The specific <code>TopicPartitions</code> to consume. You must specify at least one of <code>"topicName"</code>, <code>"assign"</code> or <code>"subscribePattern"</code>.</p>
   * @public
   */
  Assign?: string | undefined;

  /**
   * <p>A Java regex string that identifies the topic list to subscribe to. You must specify at least one of <code>"topicName"</code>, <code>"assign"</code> or <code>"subscribePattern"</code>.</p>
   * @public
   */
  SubscribePattern?: string | undefined;

  /**
   * <p>An optional classification.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>Specifies the delimiter character.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>The starting position in the Kafka topic to read data from. The possible values are <code>"earliest"</code> or <code>"latest"</code>. The default value is <code>"latest"</code>.</p>
   * @public
   */
  StartingOffsets?: string | undefined;

  /**
   * <p>The end point when a batch query is ended. Possible values are either <code>"latest"</code> or a JSON string that specifies an ending offset for each <code>TopicPartition</code>.</p>
   * @public
   */
  EndingOffsets?: string | undefined;

  /**
   * <p>The timeout in milliseconds to poll data from Kafka in Spark job executors. The default value is <code>512</code>.</p>
   * @public
   */
  PollTimeoutMs?: number | undefined;

  /**
   * <p>The number of times to retry before failing to fetch Kafka offsets. The default value is <code>3</code>.</p>
   * @public
   */
  NumRetries?: number | undefined;

  /**
   * <p>The time in milliseconds to wait before retrying to fetch Kafka offsets. The default value is <code>10</code>.</p>
   * @public
   */
  RetryIntervalMs?: number | undefined;

  /**
   * <p>The rate limit on the maximum number of offsets that are processed per trigger interval. The specified total number of offsets is proportionally split across <code>topicPartitions</code> of different volumes. The default value is null, which means that the consumer reads all offsets until the known latest offset.</p>
   * @public
   */
  MaxOffsetsPerTrigger?: number | undefined;

  /**
   * <p>The desired minimum number of partitions to read from Kafka. The default value is null, which means that the number of spark partitions is equal to the number of Kafka partitions.</p>
   * @public
   */
  MinPartitions?: number | undefined;

  /**
   * <p>Whether to include the Kafka headers. When the option is set to "true", the data output will contain an additional column named "glue_streaming_kafka_headers"
   *           with type <code>Array[Struct(key: String, value: String)]</code>. The default value is "false".
   *       This option is available in Glue version 3.0 or later only.</p>
   * @public
   */
  IncludeHeaders?: boolean | undefined;

  /**
   * <p>When this option is set to 'true', the data output will contain an additional column named "__src_timestamp" that indicates the time when the corresponding record received by the topic. The default value is 'false'. This option is supported in Glue  version 4.0 or later.</p>
   * @public
   */
  AddRecordTimestamp?: string | undefined;

  /**
   * <p>When this option is set to 'true', for each batch, it will emit the metrics for the duration between the oldest record received by the topic and the time it arrives in Glue to CloudWatch. The metric's name is "glue.driver.streaming.maxConsumerLagInMs". The default value is 'false'. This option is supported in Glue version 4.0 or later.</p>
   * @public
   */
  EmitConsumerLagMetrics?: string | undefined;

  /**
   * <p>The timestamp of the record in the Kafka topic to start reading data from. The possible values are a timestamp string in UTC format of the pattern <code>yyyy-mm-ddTHH:MM:SSZ</code> (where Z represents a UTC timezone offset with a +/-. For example: "2023-04-04T08:00:00+08:00"). </p>
   *          <p>Only one of <code>StartingTimestamp</code> or <code>StartingOffsets</code> must be set.</p>
   * @public
   */
  StartingTimestamp?: Date | undefined;
}

/**
 * <p>Specifies an Apache Kafka data store in the Data Catalog.</p>
 * @public
 */
export interface CatalogKafkaSource {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The amount of time to spend processing each micro batch.</p>
   * @public
   */
  WindowSize?: number | undefined;

  /**
   * <p>Whether to automatically determine the schema from the incoming data.</p>
   * @public
   */
  DetectSchema?: boolean | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>Specifies the streaming options.</p>
   * @public
   */
  StreamingOptions?: KafkaStreamingSourceOptions | undefined;

  /**
   * <p>Specifies options related to data preview for viewing a sample of your data.</p>
   * @public
   */
  DataPreviewOptions?: StreamingDataPreviewOptions | undefined;
}

/**
 * <p>Additional options for the Amazon Kinesis streaming data source.</p>
 * @public
 */
export interface KinesisStreamingSourceOptions {
  /**
   * <p>The URL of the Kinesis endpoint.</p>
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * <p>The name of the Kinesis data stream.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>An optional classification.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>Specifies the delimiter character.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>The starting position in the Kinesis data stream to read data from. The possible values are <code>"latest"</code>, <code>"trim_horizon"</code>, <code>"earliest"</code>, or a timestamp string in UTC format in the pattern <code>yyyy-mm-ddTHH:MM:SSZ</code> (where <code>Z</code> represents a UTC timezone offset with a +/-. For example: "2023-04-04T08:00:00-04:00"). The default value is <code>"latest"</code>.</p>
   *          <p>Note: Using a value that is a timestamp string in UTC format for "startingPosition" is supported only for Glue version 4.0 or later.</p>
   * @public
   */
  StartingPosition?: StartingPosition | undefined;

  /**
   * <p>The maximum time spent for the job executor to read records for the current batch from the Kinesis data stream, specified in milliseconds (ms). Multiple <code>GetRecords</code> API calls may be made within this time. The default value is <code>1000</code>.</p>
   * @public
   */
  MaxFetchTimeInMs?: number | undefined;

  /**
   * <p>The maximum number of records to fetch per shard in the Kinesis data stream per microbatch. Note: The client can exceed this limit if the streaming job has already read extra records from Kinesis (in the same get-records call). If <code>MaxFetchRecordsPerShard</code> needs to be strict then it needs to be a multiple of <code>MaxRecordPerRead</code>. The default value is <code>100000</code>.</p>
   * @public
   */
  MaxFetchRecordsPerShard?: number | undefined;

  /**
   * <p>The maximum number of records to fetch from the Kinesis data stream in each getRecords operation. The default value is <code>10000</code>.</p>
   * @public
   */
  MaxRecordPerRead?: number | undefined;

  /**
   * <p>Adds a time delay between two consecutive getRecords operations. The default value is <code>"False"</code>. This option is only configurable for Glue version 2.0 and above.</p>
   * @public
   */
  AddIdleTimeBetweenReads?: boolean | undefined;

  /**
   * <p>The minimum time delay between two consecutive getRecords operations, specified in ms. The default value is <code>1000</code>. This option is only configurable for Glue version 2.0 and above.</p>
   * @public
   */
  IdleTimeBetweenReadsInMs?: number | undefined;

  /**
   * <p>The minimum time interval between two ListShards API calls for your script to consider resharding. The default value is <code>1s</code>.</p>
   * @public
   */
  DescribeShardInterval?: number | undefined;

  /**
   * <p>The maximum number of retries for Kinesis Data Streams API requests. The default value is <code>3</code>.</p>
   * @public
   */
  NumRetries?: number | undefined;

  /**
   * <p>The cool-off time period (specified in ms) before retrying the Kinesis Data Streams API call. The default value is <code>1000</code>.</p>
   * @public
   */
  RetryIntervalMs?: number | undefined;

  /**
   * <p>The maximum cool-off time period (specified in ms) between two retries of a Kinesis Data Streams API call. The default value is <code>10000</code>.</p>
   * @public
   */
  MaxRetryIntervalMs?: number | undefined;

  /**
   * <p>Avoids creating an empty microbatch job by checking for unread data in the Kinesis data stream before the batch is started. The default value is <code>"False"</code>.</p>
   * @public
   */
  AvoidEmptyBatches?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.</p>
   * @public
   */
  StreamArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role to assume using AWS Security Token Service (AWS STS). This role must have permissions for describe or read record operations for the Kinesis data stream. You must use this parameter when accessing a data stream in a different account. Used in conjunction with <code>"awsSTSSessionName"</code>.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>An identifier for the session assuming the role using AWS STS. You must use this parameter when accessing a data stream in a different account. Used in conjunction with <code>"awsSTSRoleARN"</code>.</p>
   * @public
   */
  RoleSessionName?: string | undefined;

  /**
   * <p>When this option is set to 'true', the data output will contain an additional column named "__src_timestamp" that indicates the time when the corresponding record received by the stream. The default value is 'false'. This option is supported in Glue version 4.0 or later.</p>
   * @public
   */
  AddRecordTimestamp?: string | undefined;

  /**
   * <p>When this option is set to 'true', for each batch, it will emit the metrics for the duration between the oldest record received by the stream and the time it arrives in Glue  to CloudWatch. The metric's name is "glue.driver.streaming.maxConsumerLagInMs". The default value is 'false'. This option is supported in Glue version 4.0 or later.</p>
   * @public
   */
  EmitConsumerLagMetrics?: string | undefined;

  /**
   * <p>The timestamp of the record in the Kinesis data stream to start reading data from. The possible values are a timestamp string in UTC format of the pattern <code>yyyy-mm-ddTHH:MM:SSZ</code> (where Z represents a UTC timezone offset with a +/-. For example: "2023-04-04T08:00:00+08:00"). </p>
   * @public
   */
  StartingTimestamp?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis Data Streams enhanced fan-out consumer. When specified, enables enhanced fan-out for
   *       dedicated throughput and lower latency data consumption.</p>
   * @public
   */
  FanoutConsumerARN?: string | undefined;
}

/**
 * <p>Specifies a Kinesis data source in the Glue Data Catalog.</p>
 * @public
 */
export interface CatalogKinesisSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The amount of time to spend processing each micro batch.</p>
   * @public
   */
  WindowSize?: number | undefined;

  /**
   * <p>Whether to automatically determine the schema from the incoming data.</p>
   * @public
   */
  DetectSchema?: boolean | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>Additional options for the Kinesis streaming data source.</p>
   * @public
   */
  StreamingOptions?: KinesisStreamingSourceOptions | undefined;

  /**
   * <p>Additional options for data preview.</p>
   * @public
   */
  DataPreviewOptions?: StreamingDataPreviewOptions | undefined;
}

/**
 * <p>Specifies a data store in the Glue Data Catalog.</p>
 * @public
 */
export interface CatalogSource {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>
   *       Partitions satisfying this predicate are deleted. Files within the retention period in these partitions are not deleted.
   *     </p>
   * @public
   */
  PartitionPredicate?: string | undefined;

  /**
   * <p>Specifies the data schema for the catalog source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a target that uses a Glue Data Catalog table.</p>
 * @public
 */
export interface BasicCatalogTarget {
  /**
   * <p>The name of your data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>The partition keys used to distribute data across multiple partitions or shards based on a specific key or set of key.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>The database that contains the table you want to use as the target. This database must already exist in the Data Catalog.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The table that defines the schema of your output data. This table must already exist in the Data Catalog.</p>
   * @public
   */
  Table: string | undefined;
}

/**
 * <p>Specifies a source generated with standard connection options.</p>
 * @public
 */
export interface ConnectorDataSource {
  /**
   * <p>The name of this source node.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The <code>connectionType</code>, as provided to the underlying Glue library. This node type supports
   * the following connection types: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>opensearch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>azuresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>azurecosmos</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bigquery</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>saphana</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>teradata</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vertica</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * <p>A map specifying connection options for the node. You can find standard connection options for the
   *     corresponding connection type in the
   *     <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-connect.html">
   *     Connection parameters</a> section of the Glue documentation.</p>
   * @public
   */
  Data: Record<string, string> | undefined;

  /**
   * <p>Specifies the data schema for this source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a target generated with standard connection options.</p>
 * @public
 */
export interface ConnectorDataTarget {
  /**
   * <p>The name of this target node.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The <code>connectionType</code>, as provided to the underlying Glue library. This node type supports
   * the following connection types: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>opensearch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>azuresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>azurecosmos</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bigquery</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>saphana</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>teradata</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vertica</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * <p>A map specifying connection options for the node. You can find standard connection options for the
   *     corresponding connection type in the
   *     <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-connect.html">
   *     Connection parameters</a> section of the Glue documentation.</p>
   * @public
   */
  Data: Record<string, string> | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs?: string[] | undefined;
}

/**
 * <p>Specifies a transform that uses custom code you provide to perform the data transformation. The output is a collection of DynamicFrames.</p>
 * @public
 */
export interface CustomCode {
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
   * <p>The custom code that is used to perform the data transformation.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The name defined for the custom code node class.</p>
   * @public
   */
  ClassName: string | undefined;

  /**
   * <p>Specifies the data schema for the custom code transform.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies the direct JDBC source connection.</p>
 * @public
 */
export interface DirectJDBCSource {
  /**
   * <p>The name of the JDBC source connection.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The database of the JDBC source connection.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The table of the JDBC source connection.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>The connection name of the JDBC source.</p>
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * <p>The connection type of the JDBC source.</p>
   * @public
   */
  ConnectionType: JDBCConnectionType | undefined;

  /**
   * <p>The temp directory of the JDBC Redshift source.</p>
   * @public
   */
  RedshiftTmpDir?: string | undefined;

  /**
   * <p>Specifies the data schema for the direct JDBC source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies an Apache Kafka data store.</p>
 * @public
 */
export interface DirectKafkaSource {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the streaming options.</p>
   * @public
   */
  StreamingOptions?: KafkaStreamingSourceOptions | undefined;

  /**
   * <p>The amount of time to spend processing each micro batch.</p>
   * @public
   */
  WindowSize?: number | undefined;

  /**
   * <p>Whether to automatically determine the schema from the incoming data.</p>
   * @public
   */
  DetectSchema?: boolean | undefined;

  /**
   * <p>Specifies options related to data preview for viewing a sample of your data.</p>
   * @public
   */
  DataPreviewOptions?: StreamingDataPreviewOptions | undefined;
}

/**
 * <p>Specifies a direct Amazon Kinesis data source.</p>
 * @public
 */
export interface DirectKinesisSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The amount of time to spend processing each micro batch.</p>
   * @public
   */
  WindowSize?: number | undefined;

  /**
   * <p>Whether to automatically determine the schema from the incoming data.</p>
   * @public
   */
  DetectSchema?: boolean | undefined;

  /**
   * <p>Additional options for the Kinesis streaming data source.</p>
   * @public
   */
  StreamingOptions?: KinesisStreamingSourceOptions | undefined;

  /**
   * <p>Additional options for data preview.</p>
   * @public
   */
  DataPreviewOptions?: StreamingDataPreviewOptions | undefined;
}

/**
 * <p>Specifies a transform that removes rows of repeating data from a data set. </p>
 * @public
 */
export interface DropDuplicates {
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
   * <p>The name of the columns to be merged or removed if repeating.</p>
   * @public
   */
  Columns?: string[][] | undefined;
}

/**
 * <p>Specifies a transform that chooses the data property keys that you want to drop.</p>
 * @public
 */
export interface DropFields {
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
   * <p>A JSON path to a variable in the data structure.</p>
   * @public
   */
  Paths: string[][] | undefined;
}

/**
 * <p>Represents whether certain values are recognized as null values for removal.</p>
 * @public
 */
export interface NullCheckBoxList {
  /**
   * <p>Specifies that an empty string is considered as a null value.</p>
   * @public
   */
  IsEmpty?: boolean | undefined;

  /**
   * <p>Specifies that a value spelling out the word 'null' is considered as a null value.</p>
   * @public
   */
  IsNullString?: boolean | undefined;

  /**
   * <p>Specifies that an integer value of -1 is considered as a null value.</p>
   * @public
   */
  IsNegOne?: boolean | undefined;
}

/**
 * <p>A structure representing the datatype of the value.</p>
 * @public
 */
export interface Datatype {
  /**
   * <p>The datatype of the value.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A label assigned to the datatype.</p>
   * @public
   */
  Label: string | undefined;
}

/**
 * <p>Represents a custom null value such as a zeros or other value being used as a null placeholder unique to the dataset.</p>
 * @public
 */
export interface NullValueField {
  /**
   * <p>The value of the null placeholder.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The datatype of the value.</p>
   * @public
   */
  Datatype: Datatype | undefined;
}

/**
 * <p>Specifies a transform that removes columns from the dataset if all values in the column are 'null'. By default, Glue Studio will recognize null objects, but some values such as empty strings, strings that are "null", -1 integers or other placeholders such as zeros, are not automatically recognized as nulls.</p>
 * @public
 */
export interface DropNullFields {
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
   * <p>A structure that represents whether certain values are recognized as null values for removal.</p>
   * @public
   */
  NullCheckBoxList?: NullCheckBoxList | undefined;

  /**
   * <p>A structure that specifies a list of NullValueField structures that represent a custom null value such as zero or other value being used as a null placeholder unique to the dataset.</p>
   *          <p>The <code>DropNullFields</code> transform removes custom null values only if both the value of the null placeholder and the datatype match the data.</p>
   * @public
   */
  NullTextList?: NullValueField[] | undefined;
}

/**
 * <p>Specifies the parameters in the config file of the dynamic transform.</p>
 * @public
 */
export interface TransformConfigParameter {
  /**
   * <p>Specifies the name of the parameter in the config file of the dynamic transform.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the parameter type in the config file of the dynamic transform.</p>
   * @public
   */
  Type: ParamType | undefined;

  /**
   * <p>Specifies the validation rule in the config file of the dynamic transform.</p>
   * @public
   */
  ValidationRule?: string | undefined;

  /**
   * <p>Specifies the validation message in the config file of the dynamic transform.</p>
   * @public
   */
  ValidationMessage?: string | undefined;

  /**
   * <p>Specifies the value of the parameter in the config file of the dynamic transform.</p>
   * @public
   */
  Value?: string[] | undefined;

  /**
   * <p>Specifies the list type of the parameter in the config file of the dynamic transform.</p>
   * @public
   */
  ListType?: ParamType | undefined;

  /**
   * <p>Specifies whether the parameter is optional or not in the config file of the dynamic transform.</p>
   * @public
   */
  IsOptional?: boolean | undefined;
}

/**
 * <p>Specifies the set of parameters needed to perform the dynamic transform.</p>
 * @public
 */
export interface DynamicTransform {
  /**
   * <p>Specifies the name of the dynamic transform.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the name of the dynamic transform as it appears in the Glue Studio visual editor.</p>
   * @public
   */
  TransformName: string | undefined;

  /**
   * <p>Specifies the inputs for the dynamic transform that are required.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies the parameters of the dynamic transform.</p>
   * @public
   */
  Parameters?: TransformConfigParameter[] | undefined;

  /**
   * <p>Specifies the name of the function of the dynamic transform.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specifies the path of the dynamic transform source and config files.</p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>This field is not used and will be deprecated in future release.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>Specifies the data schema for the dynamic transform.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies additional options for DynamoDB ELT catalog operations.</p>
 * @public
 */
export interface DDBELTCatalogAdditionalOptions {
  /**
   * <p>Specifies the DynamoDB export configuration for the ELT operation.</p>
   * @public
   */
  DynamodbExport?: string | undefined;

  /**
   * <p>Specifies whether to unnest DynamoDB JSON format. When set to <code>true</code>, nested JSON structures in DynamoDB items are flattened.</p>
   * @public
   */
  DynamodbUnnestDDBJson?: boolean | undefined;
}

/**
 * <p>Specifies a DynamoDB data source in the Glue Data Catalog.</p>
 * @public
 */
export interface DynamoDBCatalogSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>Specifies whether Point-in-Time Recovery (PITR) is enabled for the DynamoDB table. When set to <code>true</code>,
   *       allows reading from a specific point in time. The default value is <code>false</code>.</p>
   * @public
   */
  PitrEnabled?: boolean | undefined;

  /**
   * <p>Specifies additional connection options for the DynamoDB data source.</p>
   * @public
   */
  AdditionalOptions?: DDBELTCatalogAdditionalOptions | undefined;
}

/**
 * <p>Specifies connection options for DynamoDB ELT (Extract, Load, Transform) operations. This structure contains configuration parameters for connecting
 *       to and extracting data from DynamoDB tables using the ELT connector.</p>
 * @public
 */
export interface DDBELTConnectionOptions {
  /**
   * <p>Specifies the export type for DynamoDB data extraction. This parameter determines how data is exported from the DynamoDB table during the ELT process.</p>
   * @public
   */
  DynamodbExport?: DdbExportType | undefined;

  /**
   * <p>A boolean value that specifies whether to unnest DynamoDB JSON format during data extraction. When set to <code>true</code>, the connector will
   *       flatten nested JSON structures from DynamoDB items. When set to <code>false</code>, the original DynamoDB JSON structure is preserved.</p>
   * @public
   */
  DynamodbUnnestDDBJson?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DynamoDB table to extract data from. This parameter specifies the source table for the ELT operation.
   *       </p>
   * @public
   */
  DynamodbTableArn: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket used for intermediate storage during the DynamoDB ELT process. This bucket is used to temporarily store exported
   *       DynamoDB data before it is processed by the ELT job.</p>
   * @public
   */
  DynamodbS3Bucket?: string | undefined;

  /**
   * <p>The S3 object key prefix for files stored in the intermediate S3 bucket during the DynamoDB ELT process. This prefix helps organize and identify the
   *       temporary files created during data extraction.</p>
   * @public
   */
  DynamodbS3Prefix?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the S3 bucket specified in <code>DynamodbS3Bucket</code>. This parameter is required when the S3 bucket is owned by
   *       a different Amazon Web Services account than the one running the ELT job, enabling cross-account access to the intermediate storage bucket.</p>
   * @public
   */
  DynamodbS3BucketOwner?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Security Token Service (STS) role to assume for accessing DynamoDB and S3 resources during
   *       the ELT operation.
   *       This role must have the necessary permissions to read from the DynamoDB table and write to the intermediate S3 bucket. </p>
   * @public
   */
  DynamodbStsRoleArn?: string | undefined;
}

/**
 * <p>Specifies a DynamoDB ELT connector source for extracting data from DynamoDB tables.</p>
 * @public
 */
export interface DynamoDBELTConnectorSource {
  /**
   * <p>The name of the DynamoDB ELT connector source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The connection options for the DynamoDB ELT connector source.</p>
   * @public
   */
  ConnectionOptions?: DDBELTConnectionOptions | undefined;

  /**
   * <p>Specifies the data schema for the DynamoDB ELT connector source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Options to configure how your data quality evaluation results are published.</p>
 * @public
 */
export interface DQResultsPublishingOptions {
  /**
   * <p>The context of the evaluation.</p>
   * @public
   */
  EvaluationContext?: string | undefined;

  /**
   * <p>The Amazon S3 prefix prepended to the results.</p>
   * @public
   */
  ResultsS3Prefix?: string | undefined;

  /**
   * <p>Enable metrics for your data quality results.</p>
   * @public
   */
  CloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * <p>Enable publishing for your data quality results.</p>
   * @public
   */
  ResultsPublishingEnabled?: boolean | undefined;
}

/**
 * <p>Options to configure how your job will stop if your data quality evaluation fails.</p>
 * @public
 */
export interface DQStopJobOnFailureOptions {
  /**
   * <p>When to stop job if your data quality evaluation fails. Options are Immediate or AfterDataLoad.</p>
   * @public
   */
  StopJobOnFailureTiming?: DQStopJobOnFailureTiming | undefined;
}

/**
 * <p>Specifies your data quality evaluation criteria.</p>
 * @public
 */
export interface EvaluateDataQuality {
  /**
   * <p>The name of the data quality evaluation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The inputs of your data quality evaluation.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>The ruleset for your data quality evaluation.</p>
   * @public
   */
  Ruleset: string | undefined;

  /**
   * <p>The output of your data quality evaluation.</p>
   * @public
   */
  Output?: DQTransformOutput | undefined;

  /**
   * <p>Options to configure how your results are published.</p>
   * @public
   */
  PublishingOptions?: DQResultsPublishingOptions | undefined;

  /**
   * <p>Options to configure how your job will stop if your data quality evaluation fails.</p>
   * @public
   */
  StopJobOnFailureOptions?: DQStopJobOnFailureOptions | undefined;
}

/**
 * <p>Specifies your data quality evaluation criteria.</p>
 * @public
 */
export interface EvaluateDataQualityMultiFrame {
  /**
   * <p>The name of the data quality evaluation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The inputs of your data quality evaluation. The first input in this list is the primary data source.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>The aliases of all data sources except primary.</p>
   * @public
   */
  AdditionalDataSources?: Record<string, string> | undefined;

  /**
   * <p>The ruleset for your data quality evaluation.</p>
   * @public
   */
  Ruleset: string | undefined;

  /**
   * <p>Options to configure how your results are published.</p>
   * @public
   */
  PublishingOptions?: DQResultsPublishingOptions | undefined;

  /**
   * <p>Options to configure runtime behavior of the transform.</p>
   * @public
   */
  AdditionalOptions?: Partial<Record<AdditionalOptionKeys, string>> | undefined;

  /**
   * <p>Options to configure how your job will stop if your data quality evaluation fails.</p>
   * @public
   */
  StopJobOnFailureOptions?: DQStopJobOnFailureOptions | undefined;
}

/**
 * <p>Specifies a transform that locates records in the dataset that have missing values and adds a new field with a value determined by imputation. The input data set is used to train the machine learning model that determines what the missing value should be.</p>
 * @public
 */
export interface FillMissingValues {
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
   * <p>A JSON path to a variable in the data structure for the dataset that is imputed.</p>
   * @public
   */
  ImputedPath: string | undefined;

  /**
   * <p>A JSON path to a variable in the data structure for the dataset that is filled.</p>
   * @public
   */
  FilledPath?: string | undefined;
}

/**
 * <p>Represents a single entry in the list of values for a <code>FilterExpression</code>. </p>
 * @public
 */
export interface FilterValue {
  /**
   * <p>The type of filter value.</p>
   * @public
   */
  Type: FilterValueType | undefined;

  /**
   * <p>The value to be associated.</p>
   * @public
   */
  Value: string[] | undefined;
}

/**
 * <p>Specifies a filter expression.</p>
 * @public
 */
export interface FilterExpression {
  /**
   * <p>The type of operation to perform in the expression.</p>
   * @public
   */
  Operation: FilterOperation | undefined;

  /**
   * <p>Whether the expression is to be negated.</p>
   * @public
   */
  Negated?: boolean | undefined;

  /**
   * <p>A list of filter values.</p>
   * @public
   */
  Values: FilterValue[] | undefined;
}

/**
 * <p>Specifies a transform that splits a dataset into two, based on a filter condition.</p>
 * @public
 */
export interface Filter {
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
   * <p>The operator used to filter rows by comparing the key value to a specified value.</p>
   * @public
   */
  LogicalOperator: FilterLogicalOperator | undefined;

  /**
   * <p>Specifies a filter expression.</p>
   * @public
   */
  Filters: FilterExpression[] | undefined;
}

/**
 * <p>Specifies additional connection options for the Amazon S3 data store.</p>
 * @public
 */
export interface S3SourceAdditionalOptions {
  /**
   * <p>Sets the upper limit for the target size of the dataset in bytes that will be processed.</p>
   * @public
   */
  BoundedSize?: number | undefined;

  /**
   * <p>Sets the upper limit for the target number of files that will be processed.</p>
   * @public
   */
  BoundedFiles?: number | undefined;
}

/**
 * <p>Specifies the data store in the governed Glue Data Catalog.</p>
 * @public
 */
export interface GovernedCatalogSource {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The database table to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>Partitions satisfying this predicate are deleted. Files within the retention period in these partitions are not deleted. Set to <code>""</code> – empty by default.</p>
   * @public
   */
  PartitionPredicate?: string | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   * @public
   */
  AdditionalOptions?: S3SourceAdditionalOptions | undefined;
}

/**
 * <p>A policy that specifies update behavior for the crawler.</p>
 * @public
 */
export interface CatalogSchemaChangePolicy {
  /**
   * <p>Whether to use the specified update behavior when the crawler finds a changed schema.</p>
   * @public
   */
  EnableUpdateCatalog?: boolean | undefined;

  /**
   * <p>The update behavior when the crawler finds a changed schema.</p>
   * @public
   */
  UpdateBehavior?: UpdateCatalogBehavior | undefined;
}

/**
 * <p>Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.</p>
 * @public
 */
export interface GovernedCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>The name of the database to write to.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>A policy that specifies update behavior for the governed catalog.</p>
   * @public
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy | undefined;
}

/**
 * <p>Additional connection options for the connector.</p>
 * @public
 */
export interface JDBCConnectorOptions {
  /**
   * <p>Extra condition clause to filter data from source. For example:</p>
   *          <p>
   *             <code>BillingCity='Mountain View'</code>
   *          </p>
   *          <p>When using a query instead of a table name, you should validate that the query works with the specified <code>filterPredicate</code>.</p>
   * @public
   */
  FilterPredicate?: string | undefined;

  /**
   * <p>The name of an integer column that is used for partitioning. This option works only when it's included with <code>lowerBound</code>, <code>upperBound</code>, and <code>numPartitions</code>. This option works the same way as in the Spark SQL JDBC reader.</p>
   * @public
   */
  PartitionColumn?: string | undefined;

  /**
   * <p>The minimum value of <code>partitionColumn</code> that is used to decide partition stride.</p>
   * @public
   */
  LowerBound?: number | undefined;

  /**
   * <p>The maximum value of <code>partitionColumn</code> that is used to decide partition stride.</p>
   * @public
   */
  UpperBound?: number | undefined;

  /**
   * <p>The number of partitions. This value, along with <code>lowerBound</code> (inclusive) and <code>upperBound</code> (exclusive), form partition strides for generated <code>WHERE</code> clause expressions that are used to split the <code>partitionColumn</code>.</p>
   * @public
   */
  NumPartitions?: number | undefined;

  /**
   * <p>The name of the job bookmark keys on which to sort.</p>
   * @public
   */
  JobBookmarkKeys?: string[] | undefined;

  /**
   * <p>Specifies an ascending or descending sort order.</p>
   * @public
   */
  JobBookmarkKeysSortOrder?: string | undefined;

  /**
   * <p>Custom data type mapping that builds a mapping from a JDBC data type to an Glue data type. For example, the option <code>"dataTypeMapping":\{"FLOAT":"STRING"\}</code> maps data fields of JDBC type <code>FLOAT</code> into the Java <code>String</code> type by calling the <code>ResultSet.getString()</code> method of the driver, and uses it to build the Glue record. The <code>ResultSet</code> object is implemented by each driver, so the behavior is specific to the driver you use. Refer to the documentation for your JDBC driver to understand how the driver performs the conversions.</p>
   * @public
   */
  DataTypeMapping?: Partial<Record<JDBCDataType, GlueRecordType>> | undefined;
}

/**
 * <p>Specifies a connector to a JDBC data source.</p>
 * @public
 */
export interface JDBCConnectorSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the connection that is associated with the connector.</p>
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * <p>The name of a connector that assists with accessing the data store in Glue Studio.</p>
   * @public
   */
  ConnectorName: string | undefined;

  /**
   * <p>The type of connection, such as marketplace.jdbc or custom.jdbc, designating a connection to a JDBC data store.</p>
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * <p>Additional connection options for the connector.</p>
   * @public
   */
  AdditionalOptions?: JDBCConnectorOptions | undefined;

  /**
   * <p>The name of the table in the data source.</p>
   * @public
   */
  ConnectionTable?: string | undefined;

  /**
   * <p>The table or SQL query to get the data from. You can specify either <code>ConnectionTable</code> or <code>query</code>, but not both.</p>
   * @public
   */
  Query?: string | undefined;

  /**
   * <p>Specifies the data schema for the custom JDBC source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
 * @public
 */
export interface JDBCConnectorTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the connection that is associated with the connector.</p>
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * <p>The name of the table in the data target.</p>
   * @public
   */
  ConnectionTable: string | undefined;

  /**
   * <p>The name of a connector that will be used.</p>
   * @public
   */
  ConnectorName: string | undefined;

  /**
   * <p>The type of connection, such as marketplace.jdbc or custom.jdbc, designating a connection to a JDBC data target.</p>
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * <p>Additional connection options for the connector.</p>
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * <p>Specifies the data schema for the JDBC target.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a column to be joined.</p>
 * @public
 */
export interface JoinColumn {
  /**
   * <p>The column to be joined.</p>
   * @public
   */
  From: string | undefined;

  /**
   * <p>The key of the column to be joined.</p>
   * @public
   */
  Keys: string[][] | undefined;
}

/**
 * <p>Specifies a transform that joins two datasets into one dataset using a comparison phrase on the specified data property keys. You can use inner, outer, left, right, left semi, and left anti joins.</p>
 * @public
 */
export interface Join {
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
   * <p>Specifies the type of join to be performed on the datasets.</p>
   * @public
   */
  JoinType: JoinType | undefined;

  /**
   * <p>A list of the two columns to be joined.</p>
   * @public
   */
  Columns: JoinColumn[] | undefined;
}

/**
 * <p>Specifies a transform that merges a <code>DynamicFrame</code> with a staging <code>DynamicFrame</code> based on the specified primary keys to identify records. Duplicate records (records with the same primary keys) are not de-duplicated. </p>
 * @public
 */
export interface Merge {
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
   * <p>The source <code>DynamicFrame</code> that will be merged with a staging <code>DynamicFrame</code>.</p>
   * @public
   */
  Source: string | undefined;

  /**
   * <p>The list of primary key fields to match records from the source and staging dynamic frames.</p>
   * @public
   */
  PrimaryKeys: string[][] | undefined;
}

/**
 * <p>Specifies a Microsoft SQL server data source in the Glue Data Catalog.</p>
 * @public
 */
export interface MicrosoftSQLServerCatalogSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;
}

/**
 * <p>Specifies a target that uses Microsoft SQL.</p>
 * @public
 */
export interface MicrosoftSQLServerCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the database to write to.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   * @public
   */
  Table: string | undefined;
}

/**
 * <p>Specifies a MySQL data source in the Glue Data Catalog.</p>
 * @public
 */
export interface MySQLCatalogSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;
}

/**
 * <p>Specifies a target that uses MySQL.</p>
 * @public
 */
export interface MySQLCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the database to write to.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   * @public
   */
  Table: string | undefined;
}

/**
 * <p>Specifies an Oracle data source in the Glue Data Catalog.</p>
 * @public
 */
export interface OracleSQLCatalogSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;
}

/**
 * <p>Specifies a target that uses Oracle SQL.</p>
 * @public
 */
export interface OracleSQLCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the database to write to.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   * @public
   */
  Table: string | undefined;
}

/**
 * <p>Specifies a transform that identifies, removes or masks PII data.</p>
 * @public
 */
export interface PIIDetection {
  /**
   * <p>The name of the transform node.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The node ID inputs to the transform.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Indicates the type of PIIDetection transform. </p>
   * @public
   */
  PiiType: PiiType | undefined;

  /**
   * <p>Indicates the types of entities the PIIDetection transform will identify as PII data. </p>
   *          <p>
   *        PII type entities include: PERSON_NAME, DATE, USA_SNN, EMAIL, USA_ITIN, USA_PASSPORT_NUMBER, PHONE_NUMBER, BANK_ACCOUNT,
   *        IP_ADDRESS, MAC_ADDRESS, USA_CPT_CODE, USA_HCPCS_CODE, USA_NATIONAL_DRUG_CODE, USA_MEDICARE_BENEFICIARY_IDENTIFIER,
   *        USA_HEALTH_INSURANCE_CLAIM_NUMBER,CREDIT_CARD,USA_NATIONAL_PROVIDER_IDENTIFIER,USA_DEA_NUMBER,USA_DRIVING_LICENSE
   *     </p>
   * @public
   */
  EntityTypesToDetect: string[] | undefined;

  /**
   * <p>Indicates the output column name that will contain any entity type detected in that row. </p>
   * @public
   */
  OutputColumnName?: string | undefined;

  /**
   * <p>Indicates the fraction of the data to sample when scanning for PII entities. </p>
   * @public
   */
  SampleFraction?: number | undefined;

  /**
   * <p>Indicates the fraction of the data that must be met in order for a column to be identified as PII data. </p>
   * @public
   */
  ThresholdFraction?: number | undefined;

  /**
   * <p>Indicates the value that will replace the detected entity. </p>
   * @public
   */
  MaskValue?: string | undefined;

  /**
   * <p>Specifies whether to redact the detected PII text. When set to <code>true</code>, PII content is replaced with redaction characters.</p>
   * @public
   */
  RedactText?: string | undefined;

  /**
   * <p>The character used to replace detected PII content when redaction is enabled. The default redaction character is <code>*</code>.</p>
   * @public
   */
  RedactChar?: string | undefined;

  /**
   * <p>A regular expression pattern used to identify additional PII content beyond the standard detection algorithms.</p>
   * @public
   */
  MatchPattern?: string | undefined;

  /**
   * <p>The number of characters to exclude from redaction on the left side of detected PII content. This allows preserving context around the sensitive data.</p>
   * @public
   */
  NumLeftCharsToExclude?: number | undefined;

  /**
   * <p>The number of characters to exclude from redaction on the right side of detected PII content. This allows preserving context around the sensitive data.</p>
   * @public
   */
  NumRightCharsToExclude?: number | undefined;

  /**
   * <p>Additional parameters for configuring PII detection behavior and sensitivity settings.</p>
   * @public
   */
  DetectionParameters?: string | undefined;

  /**
   * <p>The sensitivity level for PII detection. Higher sensitivity levels detect more potential PII but may result in more false positives.</p>
   * @public
   */
  DetectionSensitivity?: string | undefined;
}

/**
 * <p>Specifies a PostgresSQL data source in the Glue Data Catalog.</p>
 * @public
 */
export interface PostgreSQLCatalogSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;
}

/**
 * <p>Specifies a target that uses Postgres SQL.</p>
 * @public
 */
export interface PostgreSQLCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the database to write to.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   * @public
   */
  Table: string | undefined;
}

/**
 * <p>A reference to a Glue DataBrew recipe.</p>
 * @public
 */
export interface RecipeReference {
  /**
   * <p>The ARN of the DataBrew recipe.</p>
   * @public
   */
  RecipeArn: string | undefined;

  /**
   * <p>The RecipeVersion of the DataBrew recipe.</p>
   * @public
   */
  RecipeVersion: string | undefined;
}

/**
 * <p>Actions defined in the Glue Studio data preparation recipe node.</p>
 * @public
 */
export interface RecipeAction {
  /**
   * <p>The operation of the recipe action.</p>
   * @public
   */
  Operation: string | undefined;

  /**
   * <p>The parameters of the recipe action.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * <p>Condition expression defined in the Glue Studio data preparation recipe node.</p>
 * @public
 */
export interface ConditionExpression {
  /**
   * <p>The condition of the condition expression.</p>
   * @public
   */
  Condition: string | undefined;

  /**
   * <p>The value of the condition expression.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The target column of the condition expressions.</p>
   * @public
   */
  TargetColumn: string | undefined;
}

/**
 * <p>A recipe step used in a Glue Studio data preparation recipe node.</p>
 * @public
 */
export interface RecipeStep {
  /**
   * <p>The transformation action of the recipe step.</p>
   * @public
   */
  Action: RecipeAction | undefined;

  /**
   * <p>The condition expressions for the recipe step.</p>
   * @public
   */
  ConditionExpressions?: ConditionExpression[] | undefined;
}

/**
 * <p>A Glue Studio node that uses a Glue DataBrew recipe in Glue jobs.</p>
 * @public
 */
export interface Recipe {
  /**
   * <p>The name of the Glue Studio node.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the recipe node, identified by id.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>A reference to the DataBrew recipe used by the node.</p>
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * <p>Transform steps used in the recipe node.</p>
   * @public
   */
  RecipeSteps?: RecipeStep[] | undefined;
}

/**
 * <p>Specifies an Amazon Redshift data store.</p>
 * @public
 */
export interface RedshiftSource {
  /**
   * <p>The name of the Amazon Redshift data store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The database table to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>The Amazon S3 path where temporary data can be staged when copying out of the database.</p>
   * @public
   */
  RedshiftTmpDir?: string | undefined;

  /**
   * <p>The IAM role with permissions.</p>
   * @public
   */
  TmpDirIAMRole?: string | undefined;
}

/**
 * <p>The options to configure an upsert operation when writing to a Redshift target .</p>
 * @public
 */
export interface UpsertRedshiftTargetOptions {
  /**
   * <p>The physical location of the Redshift table.</p>
   * @public
   */
  TableLocation?: string | undefined;

  /**
   * <p>The name of the connection to use to write to Redshift.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The keys used to determine whether to perform an update or insert.</p>
   * @public
   */
  UpsertKeys?: string[] | undefined;
}

/**
 * <p>Specifies a target that uses Amazon Redshift.</p>
 * @public
 */
export interface RedshiftTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the database to write to.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>The Amazon S3 path where temporary data can be staged when copying out of the database.</p>
   * @public
   */
  RedshiftTmpDir?: string | undefined;

  /**
   * <p>The IAM role with permissions.</p>
   * @public
   */
  TmpDirIAMRole?: string | undefined;

  /**
   * <p>The set of options to configure an upsert operation when writing to a Redshift target.</p>
   * @public
   */
  UpsertRedshiftOptions?: UpsertRedshiftTargetOptions | undefined;
}

/**
 * <p>Specifies a Relational database data source in the Glue Data Catalog.</p>
 * @public
 */
export interface RelationalCatalogSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;
}

/**
 * <p>Specifies a transform that renames a single data property key.</p>
 * @public
 */
export interface RenameField {
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
   * <p>A JSON path to a variable in the data structure for the source data.</p>
   * @public
   */
  SourcePath: string[] | undefined;

  /**
   * <p>A JSON path to a variable in the data structure for the target data.</p>
   * @public
   */
  TargetPath: string[] | undefined;
}

/**
 * <p>Specifies a group of filters with a logical operator that determines how the filters are combined to evaluate routing conditions.</p>
 * @public
 */
export interface GroupFilters {
  /**
   * <p>The name of the filter group.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>A list of filter expressions that define the conditions for this group.</p>
   * @public
   */
  Filters: FilterExpression[] | undefined;

  /**
   * <p>The logical operator used to combine the filters in this group. Determines whether all filters must match (AND) or any filter can match (OR).</p>
   * @public
   */
  LogicalOperator: FilterLogicalOperator | undefined;
}

/**
 * <p>Specifies a route node that directs data to different output paths based on defined filtering conditions.</p>
 * @public
 */
export interface Route {
  /**
   * <p>The name of the route node.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The input connection for the route node.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>A list of group filters that define the routing conditions and criteria for directing data to different output paths.</p>
   * @public
   */
  GroupFiltersList: GroupFilters[] | undefined;
}

/**
 * <p>Specifies a Delta Lake data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3.</p>
 * @public
 */
export interface S3CatalogDeltaSource {
  /**
   * <p>The name of the Delta Lake data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   * @public
   */
  AdditionalDeltaOptions?: Record<string, string> | undefined;

  /**
   * <p>Specifies the data schema for the Delta Lake source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a Hudi data source that is registered in the Glue Data Catalog. The Hudi data source must be stored in Amazon S3.</p>
 * @public
 */
export interface S3CatalogHudiSource {
  /**
   * <p>The name of the Hudi data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   * @public
   */
  AdditionalHudiOptions?: Record<string, string> | undefined;

  /**
   * <p>Specifies the data schema for the Hudi source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies an Apache Iceberg data source that is registered in the Glue Data Catalog. The Iceberg data source must be stored in Amazon S3.</p>
 * @public
 */
export interface S3CatalogIcebergSource {
  /**
   * <p>The name of the Iceberg data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>Specifies additional connection options for the Iceberg data source.</p>
   * @public
   */
  AdditionalIcebergOptions?: Record<string, string> | undefined;

  /**
   * <p>Specifies the data schema for the Iceberg source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies an Amazon S3 data store in the Glue Data Catalog.</p>
 * @public
 */
export interface S3CatalogSource {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The database to read from.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The database table to read from.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>Partitions satisfying this predicate are deleted. Files within the retention period in these partitions are not deleted. Set to <code>""</code> – empty by default.</p>
   * @public
   */
  PartitionPredicate?: string | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   * @public
   */
  AdditionalOptions?: S3SourceAdditionalOptions | undefined;
}

/**
 * <p>Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.</p>
 * @public
 */
export interface S3CatalogTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>The name of the database to write to.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   * @public
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy | undefined;

  /**
   * <p>Specifies whether to automatically enable data quality evaluation for the S3 catalog target.
   *       When set to <code>true</code>, data quality checks are performed automatically during the write operation.</p>
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;
}

/**
 * <p>Specifies additional connection options for the Amazon S3 data store.</p>
 * @public
 */
export interface S3DirectSourceAdditionalOptions {
  /**
   * <p>Sets the upper limit for the target size of the dataset in bytes that will be processed.</p>
   * @public
   */
  BoundedSize?: number | undefined;

  /**
   * <p>Sets the upper limit for the target number of files that will be processed.</p>
   * @public
   */
  BoundedFiles?: number | undefined;

  /**
   * <p>Sets option to enable a sample path.</p>
   * @public
   */
  EnableSamplePath?: boolean | undefined;

  /**
   * <p>If enabled, specifies the sample path.</p>
   * @public
   */
  SamplePath?: string | undefined;
}

/**
 * <p>Specifies a command-separated value (CSV) data store stored in Amazon S3.</p>
 * @public
 */
export interface S3CsvSource {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of the Amazon S3 paths to read from.</p>
   * @public
   */
  Paths: string[] | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * <p>A string containing a JSON list of Unix-style glob patterns to exclude. For example, "[\"**.pdf\"]" excludes all PDF files. </p>
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * <p>The target group size in bytes. The default is computed based on the input data size and the size of your cluster. When there are fewer than 50,000 input files, <code>"groupFiles"</code> must be set to <code>"inPartition"</code> for this to take effect.</p>
   * @public
   */
  GroupSize?: string | undefined;

  /**
   * <p>Grouping files is turned on by default when the input contains more than 50,000 files. To turn on grouping with fewer than 50,000 files, set this parameter to "inPartition". To disable grouping when there are more than 50,000 files, set this parameter to <code>"none"</code>.</p>
   * @public
   */
  GroupFiles?: string | undefined;

  /**
   * <p>If set to true, recursively reads files in all subdirectories under the specified paths.</p>
   * @public
   */
  Recurse?: boolean | undefined;

  /**
   * <p>This option controls the duration in milliseconds after which the s3 listing is likely to be consistent. Files with modification timestamps falling within the last maxBand milliseconds are tracked specially when using JobBookmarks to account for Amazon S3 eventual consistency. Most users don't need to set this option. The default is 900000 milliseconds, or 15 minutes.</p>
   * @public
   */
  MaxBand?: number | undefined;

  /**
   * <p>This option specifies the maximum number of files to save from the last maxBand seconds. If this number is exceeded, extra files are skipped and only processed in the next job run.</p>
   * @public
   */
  MaxFilesInBand?: number | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * <p>Specifies the delimiter character. The default is a comma: ",", but any other character can be specified.</p>
   * @public
   */
  Separator: Separator | undefined;

  /**
   * <p>Specifies a character to use for escaping. This option is used only when reading CSV files. The default value is <code>none</code>. If enabled, the character which immediately follows is used as-is, except for a small set of well-known escapes (<code>\n</code>, <code>\r</code>, <code>\t</code>, and <code>\0</code>).</p>
   * @public
   */
  Escaper?: string | undefined;

  /**
   * <p>Specifies the character to use for quoting. The default is a double quote: <code>'"'</code>. Set this to <code>-1</code> to turn off quoting entirely.</p>
   * @public
   */
  QuoteChar: QuoteChar | undefined;

  /**
   * <p>A Boolean value that specifies whether a single record can span multiple lines. This can occur when a field contains a quoted new-line character. You must set this option to True if any record spans multiple lines. The default value is <code>False</code>, which allows for more aggressive file-splitting during parsing.</p>
   * @public
   */
  Multiline?: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether to treat the first line as a header. The default value is <code>False</code>.</p>
   * @public
   */
  WithHeader?: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether to write the header to output. The default value is <code>True</code>. </p>
   * @public
   */
  WriteHeader?: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether to skip the first data line. The default value is <code>False</code>.</p>
   * @public
   */
  SkipFirst?: boolean | undefined;

  /**
   * <p>A Boolean value that specifies whether to use the advanced SIMD CSV reader along with Apache Arrow based columnar memory formats. Only available in Glue version 3.0.</p>
   * @public
   */
  OptimizePerformance?: boolean | undefined;

  /**
   * <p>Specifies the data schema for the S3 CSV source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a target that writes to a Delta Lake data source in the Glue Data Catalog.</p>
 * @public
 */
export interface S3DeltaCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>The name of the database to write to.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>Specifies additional connection options for the connector.</p>
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   * @public
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy | undefined;

  /**
   * <p>Specifies whether to automatically enable data quality evaluation for the S3 Delta catalog target. When set to <code>true</code>,
   *       data quality checks are performed automatically during the write operation.</p>
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;

  /**
   * <p>Specifies the data schema for the S3 Delta catalog target.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>A policy that specifies update behavior for the crawler.</p>
 * @public
 */
export interface DirectSchemaChangePolicy {
  /**
   * <p>Whether to use the specified update behavior when the crawler finds a changed schema.</p>
   * @public
   */
  EnableUpdateCatalog?: boolean | undefined;

  /**
   * <p>The update behavior when the crawler finds a changed schema.</p>
   * @public
   */
  UpdateBehavior?: UpdateCatalogBehavior | undefined;

  /**
   * <p>Specifies the table in the database that the schema change policy applies to.</p>
   * @public
   */
  Table?: string | undefined;

  /**
   * <p>Specifies the database that the schema change policy applies to.</p>
   * @public
   */
  Database?: string | undefined;
}

/**
 * <p>Specifies a target that writes to a Delta Lake data source in Amazon S3.</p>
 * @public
 */
export interface S3DeltaDirectTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>The Amazon S3 path of your Delta Lake data source to write to.</p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   * @public
   */
  Compression: DeltaTargetCompressionType | undefined;

  /**
   * <p>Specifies the number of target partitions for distributing Delta Lake dataset files across Amazon S3.</p>
   * @public
   */
  NumberTargetPartitions?: string | undefined;

  /**
   * <p>Specifies the data output format for the target.</p>
   * @public
   */
  Format: TargetFormat | undefined;

  /**
   * <p>Specifies additional connection options for the connector.</p>
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * <p>Specifies whether to automatically enable data quality evaluation for the S3 Delta direct target. When set to <code>true</code>,
   *       data quality checks are performed automatically during the write operation.</p>
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;
}

/**
 * <p>Specifies a Delta Lake data source stored in Amazon S3.</p>
 * @public
 */
export interface S3DeltaSource {
  /**
   * <p>The name of the Delta Lake source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of the Amazon S3 paths to read from.</p>
   * @public
   */
  Paths: string[] | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   * @public
   */
  AdditionalDeltaOptions?: Record<string, string> | undefined;

  /**
   * <p>Specifies additional options for the connector.</p>
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * <p>Specifies the data schema for the Delta Lake source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a data target that writes to Amazon S3.</p>
 * @public
 */
export interface S3DirectTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>A single Amazon S3 path to write to.</p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   * @public
   */
  Compression?: string | undefined;

  /**
   * <p>Specifies the number of target partitions when writing data directly to Amazon S3.</p>
   * @public
   */
  NumberTargetPartitions?: string | undefined;

  /**
   * <p>Specifies the data output format for the target.</p>
   * @public
   */
  Format: TargetFormat | undefined;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * <p>Specifies whether to automatically enable data quality evaluation for the S3 direct target. When set to <code>true</code>,
   *       data quality checks are performed automatically during the write operation.</p>
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;

  /**
   * <p>Specifies the data schema for the S3 direct target.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies an S3 Excel data source.</p>
 * @public
 */
export interface S3ExcelSource {
  /**
   * <p>The name of the S3 Excel data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The S3 paths where the Excel files are located.</p>
   * @public
   */
  Paths: string[] | undefined;

  /**
   * <p>The compression format used for the Excel files.</p>
   * @public
   */
  CompressionType?: ParquetCompressionType | undefined;

  /**
   * <p>Patterns to exclude specific files or paths from processing.</p>
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * <p>Defines the size of file groups for batch processing.</p>
   * @public
   */
  GroupSize?: string | undefined;

  /**
   * <p>Specifies how files should be grouped for processing.</p>
   * @public
   */
  GroupFiles?: string | undefined;

  /**
   * <p>Indicates whether to recursively process subdirectories.</p>
   * @public
   */
  Recurse?: boolean | undefined;

  /**
   * <p>The maximum number of processing bands to use.</p>
   * @public
   */
  MaxBand?: number | undefined;

  /**
   * <p>The maximum number of files to process in each band.</p>
   * @public
   */
  MaxFilesInBand?: number | undefined;

  /**
   * <p>Additional configuration options for S3 direct source processing.</p>
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * <p>The number of rows to process from each Excel file.</p>
   * @public
   */
  NumberRows?: number | undefined;

  /**
   * <p>The number of rows to skip at the end of each Excel file.</p>
   * @public
   */
  SkipFooter?: number | undefined;

  /**
   * <p>The Glue schemas to apply to the processed data.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
 * @public
 */
export interface S3GlueParquetTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>A single Amazon S3 path to write to.</p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   * @public
   */
  Compression?: ParquetCompressionType | undefined;

  /**
   * <p>Specifies the number of target partitions for Parquet files when writing to Amazon S3 using Glue.</p>
   * @public
   */
  NumberTargetPartitions?: string | undefined;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * <p>Specifies whether to automatically enable data quality evaluation for the S3 Glue Parquet target. When set to <code>true</code>,
   *       data quality checks are performed automatically during the write operation.</p>
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;
}

/**
 * <p>Specifies a target that writes to a Hudi data source in the Glue Data Catalog.</p>
 * @public
 */
export interface S3HudiCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>The name of the database to write to.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>Specifies additional connection options for the connector.</p>
   * @public
   */
  AdditionalOptions: Record<string, string> | undefined;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   * @public
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy | undefined;

  /**
   * <p>Specifies whether to automatically enable data quality evaluation for the S3 Hudi catalog target. When set to <code>true</code>,
   *       data quality checks are performed automatically during the write operation.</p>
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;

  /**
   * <p>Specifies the data schema for the S3 Hudi catalog target.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a target that writes to a Hudi data source in Amazon S3.</p>
 * @public
 */
export interface S3HudiDirectTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>The Amazon S3 path of your Hudi data source to write to.</p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   * @public
   */
  Compression: HudiTargetCompressionType | undefined;

  /**
   * <p>Specifies the number of target partitions for distributing Hudi dataset files across Amazon S3.</p>
   * @public
   */
  NumberTargetPartitions?: string | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>Specifies the data output format for the target.</p>
   * @public
   */
  Format: TargetFormat | undefined;

  /**
   * <p>Specifies additional connection options for the connector.</p>
   * @public
   */
  AdditionalOptions: Record<string, string> | undefined;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * <p>Specifies whether to automatically enable data quality evaluation for the S3 Hudi direct target. When set to <code>true</code>,
   *       data quality checks are performed automatically during the write operation.</p>
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;
}

/**
 * <p>Specifies a Hudi data source stored in Amazon S3.</p>
 * @public
 */
export interface S3HudiSource {
  /**
   * <p>The name of the Hudi source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of the Amazon S3 paths to read from.</p>
   * @public
   */
  Paths: string[] | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   * @public
   */
  AdditionalHudiOptions?: Record<string, string> | undefined;

  /**
   * <p>Specifies additional options for the connector.</p>
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * <p>Specifies the data schema for the Hudi source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a HyperDirect data target that writes to Amazon S3.</p>
 * @public
 */
export interface S3HyperDirectTarget {
  /**
   * <p>The unique identifier for the HyperDirect target node.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the input source for the HyperDirect target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies the data output format for the HyperDirect target.</p>
   * @public
   */
  Format?: TargetFormat | undefined;

  /**
   * <p>Defines the partitioning strategy for the output data.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>The S3 location where the output data will be written.</p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>The compression type to apply to the output data.</p>
   * @public
   */
  Compression?: HyperTargetCompressionType | undefined;

  /**
   * <p>Defines how schema changes are handled during write operations.</p>
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * <p>Specifies whether to automatically enable data quality evaluation for the S3 Hyper direct target. When set to <code>true</code>, data quality checks are performed automatically during the write operation.</p>
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;

  /**
   * <p>Specifies the data schema for the S3 Hyper direct target.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies an Apache Iceberg catalog target that writes data to Amazon S3 and registers the table in the Glue Data Catalog.</p>
 * @public
 */
export interface S3IcebergCatalogTarget {
  /**
   * <p>The name of the Iceberg catalog target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The input connection for the Iceberg catalog target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>A list of partition keys for the Iceberg table.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>The name of the table to write to in the catalog.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>The name of the database to write to.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>Specifies additional connection options for the Iceberg catalog target.</p>
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * <p>The policy for handling schema changes in the catalog target.</p>
   * @public
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy | undefined;

  /**
   * <p>Specifies whether to automatically enable data quality evaluation for the S3 Iceberg catalog target. When set to <code>true</code>, data quality checks are performed automatically during the write operation.</p>
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;
}

/**
 * <p>Specifies a target that writes to an Iceberg data source in Amazon S3.</p>
 * @public
 */
export interface S3IcebergDirectTarget {
  /**
   * <p>Specifies the unique identifier for the Iceberg target node in your data pipeline.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Defines the single input source that provides data to this Iceberg target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies the columns used to partition the Iceberg table data in S3.</p>
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * <p>Defines the S3 location where the Iceberg table data will be stored.</p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>Specifies the file format used for storing Iceberg table data (e.g., Parquet, ORC).</p>
   * @public
   */
  Format: TargetFormat | undefined;

  /**
   * <p>Provides additional configuration options for customizing the Iceberg table behavior.</p>
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * <p>Defines how schema changes are handled when writing data to the Iceberg table.</p>
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * <p>Specifies configuration options for automatic data quality evaluation in Glue jobs. This structure enables automated data quality
   *       checks and monitoring during ETL operations, helping to ensure data integrity and reliability without manual intervention.</p>
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;

  /**
   * <p>Specifies the compression codec used for Iceberg table files in S3.</p>
   * @public
   */
  Compression: IcebergTargetCompressionType | undefined;

  /**
   * <p>Sets the number of target partitions for distributing Iceberg table files across S3.</p>
   * @public
   */
  NumberTargetPartitions?: string | undefined;

  /**
   * <p>Specifies the data schema for the S3 Iceberg direct target.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a JSON data store stored in Amazon S3.</p>
 * @public
 */
export interface S3JsonSource {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of the Amazon S3 paths to read from.</p>
   * @public
   */
  Paths: string[] | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * <p>A string containing a JSON list of Unix-style glob patterns to exclude. For example, "[\"**.pdf\"]" excludes all PDF files. </p>
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * <p>The target group size in bytes. The default is computed based on the input data size and the size of your cluster. When there are fewer than 50,000 input files, <code>"groupFiles"</code> must be set to <code>"inPartition"</code> for this to take effect.</p>
   * @public
   */
  GroupSize?: string | undefined;

  /**
   * <p>Grouping files is turned on by default when the input contains more than 50,000 files. To turn on grouping with fewer than 50,000 files, set this parameter to "inPartition". To disable grouping when there are more than 50,000 files, set this parameter to <code>"none"</code>.</p>
   * @public
   */
  GroupFiles?: string | undefined;

  /**
   * <p>If set to true, recursively reads files in all subdirectories under the specified paths.</p>
   * @public
   */
  Recurse?: boolean | undefined;

  /**
   * <p>This option controls the duration in milliseconds after which the s3 listing is likely to be consistent. Files with modification timestamps falling within the last maxBand milliseconds are tracked specially when using JobBookmarks to account for Amazon S3 eventual consistency. Most users don't need to set this option. The default is 900000 milliseconds, or 15 minutes.</p>
   * @public
   */
  MaxBand?: number | undefined;

  /**
   * <p>This option specifies the maximum number of files to save from the last maxBand seconds. If this number is exceeded, extra files are skipped and only processed in the next job run.</p>
   * @public
   */
  MaxFilesInBand?: number | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * <p>A JsonPath string defining the JSON data.</p>
   * @public
   */
  JsonPath?: string | undefined;

  /**
   * <p>A Boolean value that specifies whether a single record can span multiple lines. This can occur when a field contains a quoted new-line character. You must set this option to True if any record spans multiple lines. The default value is <code>False</code>, which allows for more aggressive file-splitting during parsing.</p>
   * @public
   */
  Multiline?: boolean | undefined;

  /**
   * <p>Specifies the data schema for the S3 JSON source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies an Apache Parquet data store stored in Amazon S3.</p>
 * @public
 */
export interface S3ParquetSource {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of the Amazon S3 paths to read from.</p>
   * @public
   */
  Paths: string[] | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   * @public
   */
  CompressionType?: ParquetCompressionType | undefined;

  /**
   * <p>A string containing a JSON list of Unix-style glob patterns to exclude. For example, "[\"**.pdf\"]" excludes all PDF files. </p>
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * <p>The target group size in bytes. The default is computed based on the input data size and the size of your cluster. When there are fewer than 50,000 input files, <code>"groupFiles"</code> must be set to <code>"inPartition"</code> for this to take effect.</p>
   * @public
   */
  GroupSize?: string | undefined;

  /**
   * <p>Grouping files is turned on by default when the input contains more than 50,000 files. To turn on grouping with fewer than 50,000 files, set this parameter to "inPartition". To disable grouping when there are more than 50,000 files, set this parameter to <code>"none"</code>.</p>
   * @public
   */
  GroupFiles?: string | undefined;

  /**
   * <p>If set to true, recursively reads files in all subdirectories under the specified paths.</p>
   * @public
   */
  Recurse?: boolean | undefined;

  /**
   * <p>This option controls the duration in milliseconds after which the s3 listing is likely to be consistent. Files with modification timestamps falling within the last maxBand milliseconds are tracked specially when using JobBookmarks to account for Amazon S3 eventual consistency. Most users don't need to set this option. The default is 900000 milliseconds, or 15 minutes.</p>
   * @public
   */
  MaxBand?: number | undefined;

  /**
   * <p>This option specifies the maximum number of files to save from the last maxBand seconds. If this number is exceeded, extra files are skipped and only processed in the next job run.</p>
   * @public
   */
  MaxFilesInBand?: number | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * <p>Specifies the data schema for the S3 Parquet source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a transform that chooses the data property keys that you want to keep.</p>
 * @public
 */
export interface SelectFields {
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
   * <p>A JSON path to a variable in the data structure.</p>
   * @public
   */
  Paths: string[][] | undefined;
}

/**
 * <p>Specifies a transform that chooses one <code>DynamicFrame</code> from a collection of <code>DynamicFrames</code>. The output is the selected <code>DynamicFrame</code>
 *          </p>
 * @public
 */
export interface SelectFromCollection {
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
   * <p>The index for the DynamicFrame to be selected.</p>
   * @public
   */
  Index: number | undefined;
}

/**
 * <p>Specifies configuration for Snowflake nodes in Glue Studio.</p>
 * @public
 */
export interface SnowflakeNodeData {
  /**
   * <p>Specifies how retrieved data is specified. Valid values: <code>"table"</code>, <code>
   *       "query"</code>.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>Specifies a Glue Data Catalog Connection to a Snowflake endpoint.</p>
   * @public
   */
  Connection?: Option | undefined;

  /**
   * <p>Specifies a Snowflake database schema for your node to use.</p>
   * @public
   */
  Schema?: string | undefined;

  /**
   * <p>Specifies a Snowflake table for your node to use.</p>
   * @public
   */
  Table?: string | undefined;

  /**
   * <p>Specifies a Snowflake database for your node to use.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>Not currently used.</p>
   * @public
   */
  TempDir?: string | undefined;

  /**
   * <p>Not currently used.</p>
   * @public
   */
  IamRole?: Option | undefined;

  /**
   * <p>Specifies additional options passed to the Snowflake connector. If options are specified
   *       elsewhere in this node, this will take precedence.</p>
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * <p>A SQL string used to retrieve data with the <code>query</code> sourcetype.</p>
   * @public
   */
  SampleQuery?: string | undefined;

  /**
   * <p>A SQL string run before the Snowflake connector performs its standard actions.</p>
   * @public
   */
  PreAction?: string | undefined;

  /**
   * <p>A SQL string run after the Snowflake connector performs its standard actions.</p>
   * @public
   */
  PostAction?: string | undefined;

  /**
   * <p>Specifies what action to take when writing to a table with preexisting data. Valid values: <code>
   *       append</code>, <code>merge</code>, <code>truncate</code>, <code>drop</code>.</p>
   * @public
   */
  Action?: string | undefined;

  /**
   * <p>Used when Action is <code>append</code>. Specifies the resolution behavior when a row
   *       already exists. If true, preexisting rows will be updated. If false, those rows will be inserted.</p>
   * @public
   */
  Upsert?: boolean | undefined;

  /**
   * <p>Specifies a merge action. Valid values: <code>simple</code>, <code>custom</code>. If
   *       simple, merge behavior is defined by <code>MergeWhenMatched</code> and <code>
   *       MergeWhenNotMatched</code>. If custom, defined by <code>MergeClause</code>.</p>
   * @public
   */
  MergeAction?: string | undefined;

  /**
   * <p>Specifies how to resolve records that match preexisting data when merging. Valid values: <code>
   *       update</code>, <code>delete</code>.</p>
   * @public
   */
  MergeWhenMatched?: string | undefined;

  /**
   * <p>Specifies how to process records that do not match preexisting data when merging. Valid
   *       values: <code>insert</code>, <code>none</code>.</p>
   * @public
   */
  MergeWhenNotMatched?: string | undefined;

  /**
   * <p>A SQL statement that specifies a custom merge behavior.</p>
   * @public
   */
  MergeClause?: string | undefined;

  /**
   * <p>The name of a staging table used when performing <code>merge</code> or upsert <code>append</code>
   *       actions. Data is written to this table, then moved to <code>table</code> by a generated
   *       postaction.</p>
   * @public
   */
  StagingTable?: string | undefined;

  /**
   * <p>Specifies the columns combined to identify a record when detecting matches for merges and
   *       upserts. A list of structures with <code>value</code>, <code>label</code> and <code>
   *       description</code> keys. Each structure describes a column.</p>
   * @public
   */
  SelectedColumns?: Option[] | undefined;

  /**
   * <p>Specifies whether automatic query pushdown is enabled. If pushdown
   *       is enabled, then when a query is run on Spark, if part of the query can be "pushed down" to
   *       the
   *       Snowflake server, it is pushed down. This improves performance of some queries.</p>
   * @public
   */
  AutoPushdown?: boolean | undefined;

  /**
   * <p>Manually defines the target schema for the node. A list of structures with <code>value</code>
   *       , <code>label</code> and <code>description</code> keys. Each structure defines a column.</p>
   * @public
   */
  TableSchema?: Option[] | undefined;
}

/**
 * <p>Specifies a Snowflake data source.</p>
 * @public
 */
export interface SnowflakeSource {
  /**
   * <p>The name of the Snowflake data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Configuration for the Snowflake data source.</p>
   * @public
   */
  Data: SnowflakeNodeData | undefined;

  /**
   * <p>Specifies user-defined schemas for your output data.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a Snowflake target.</p>
 * @public
 */
export interface SnowflakeTarget {
  /**
   * <p>The name of the Snowflake target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the data of the Snowflake target node.</p>
   * @public
   */
  Data: SnowflakeNodeData | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs?: string[] | undefined;
}

/**
 * <p>Specifies a connector to an Apache Spark data source.</p>
 * @public
 */
export interface SparkConnectorSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the connection that is associated with the connector.</p>
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * <p>The name of a connector that assists with accessing the data store in Glue Studio.</p>
   * @public
   */
  ConnectorName: string | undefined;

  /**
   * <p>The type of connection, such as marketplace.spark or custom.spark, designating a connection to an Apache Spark data store.</p>
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * <p>Additional connection options for the connector.</p>
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * <p>Specifies data schema for the custom spark source.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a target that uses an Apache Spark connector.</p>
 * @public
 */
export interface SparkConnectorTarget {
  /**
   * <p>The name of the data target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of a connection for an Apache Spark connector.</p>
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * <p>The name of an Apache Spark connector.</p>
   * @public
   */
  ConnectorName: string | undefined;

  /**
   * <p>The type of connection, such as marketplace.spark or custom.spark, designating a connection to an Apache Spark data store.</p>
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * <p>Additional connection options for the connector.</p>
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * <p>Specifies the data schema for the custom spark target.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Represents a single entry in the list of values for <code>SqlAliases</code>. </p>
 * @public
 */
export interface SqlAlias {
  /**
   * <p>A table, or a column in a table.</p>
   * @public
   */
  From: string | undefined;

  /**
   * <p>A temporary name given to a table, or a column in a table.</p>
   * @public
   */
  Alias: string | undefined;
}

/**
 * <p>Specifies a transform where you enter a SQL query using Spark SQL syntax to transform the data. The output is a single <code>DynamicFrame</code>.</p>
 * @public
 */
export interface SparkSQL {
  /**
   * <p>The name of the transform node.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names. You can associate a table name with each input node to use in the SQL query. The name you choose must meet the Spark SQL naming restrictions.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>A SQL query that must use Spark SQL syntax and return a single data set.</p>
   * @public
   */
  SqlQuery: string | undefined;

  /**
   * <p>A list of aliases. An alias allows you to specify what name to use in the SQL for a given input. For example, you have a datasource named "MyDataSource". If you specify <code>From</code> as MyDataSource, and <code>Alias</code> as SqlName, then in your SQL you can do:</p>
   *          <p>
   *             <code>select *
   * from SqlName</code>
   *          </p>
   *          <p>and that gets data from MyDataSource.</p>
   * @public
   */
  SqlAliases: SqlAlias[] | undefined;

  /**
   * <p>Specifies the data schema for the SparkSQL transform.</p>
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * <p>Specifies a transform that writes samples of the data to an Amazon S3 bucket.</p>
 * @public
 */
export interface Spigot {
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
   * <p>A path in Amazon S3 where the transform will write a subset of records from the dataset to a JSON file in an Amazon S3 bucket.</p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>Specifies a number of records to write starting from the beginning of the dataset.</p>
   * @public
   */
  Topk?: number | undefined;

  /**
   * <p>The probability (a decimal value with a maximum value of 1) of picking any given record. A value of 1 indicates that each row read from the dataset should be included in the sample output.</p>
   * @public
   */
  Prob?: number | undefined;
}

/**
 * <p>Specifies a transform that splits data property keys into two <code>DynamicFrames</code>. The output is a collection of <code>DynamicFrames</code>: one with selected data property keys, and one with the remaining data property keys.</p>
 * @public
 */
export interface SplitFields {
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
   * <p>A JSON path to a variable in the data structure.</p>
   * @public
   */
  Paths: string[][] | undefined;
}

/**
 * <p>Specifies a transform that combines the rows from two or more datasets into a single result.</p>
 * @public
 */
export interface Union {
  /**
   * <p>The name of the transform node.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The node ID inputs to the transform.</p>
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * <p>Indicates the type of Union transform. </p>
   *          <p>Specify <code>ALL</code> to join all rows from data sources to the resulting DynamicFrame. The resulting union does not remove duplicate rows.</p>
   *          <p>Specify <code>DISTINCT</code> to remove duplicate rows in the resulting DynamicFrame.</p>
   * @public
   */
  UnionType: UnionType | undefined;
}

/**
 * <p>Specifies code that runs when a job is run.</p>
 * @public
 */
export interface JobCommand {
  /**
   * <p>The name of the job command. For an Apache Spark ETL job, this must be
   *       <code>glueetl</code>. For a Python shell job, it must be <code>pythonshell</code>.
   *       For an Apache Spark streaming ETL job, this must be <code>gluestreaming</code>. For a Ray job,
   *       this must be <code>glueray</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that runs a
   *       job.</p>
   * @public
   */
  ScriptLocation?: string | undefined;

  /**
   * <p>The Python version being used to run a Python shell job. Allowed values are 2 or 3.</p>
   * @public
   */
  PythonVersion?: string | undefined;

  /**
   * <p>In Ray jobs, Runtime is used to specify the versions of Ray, Python and additional
   *       libraries available in your environment. This field is not used in other job types. For
   *       supported runtime environment values, see <a href="https://docs.aws.amazon.com/glue/latest/dg/ray-jobs-section.html">Supported Ray runtime environments</a>
   *       in the Glue Developer Guide.</p>
   * @public
   */
  Runtime?: string | undefined;
}

/**
 * <p>Specifies the connections used by a job.</p>
 * @public
 */
export interface ConnectionsList {
  /**
   * <p>A list of connections used by the job.</p>
   * @public
   */
  Connections?: string[] | undefined;
}

/**
 * <p>An execution property of a job.</p>
 * @public
 */
export interface ExecutionProperty {
  /**
   * <p>The maximum number of concurrent runs allowed for the job.
   *       The default is 1. An error is returned when this threshold is reached.
   *       The maximum value you can specify is controlled by a service limit.</p>
   * @public
   */
  MaxConcurrentRuns?: number | undefined;
}

/**
 * <p>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</p>
 * @public
 */
export interface SourceControlDetails {
  /**
   * <p>The provider for the remote repository.</p>
   * @public
   */
  Provider?: SourceControlProvider | undefined;

  /**
   * <p>The name of the remote repository that contains the job artifacts.</p>
   * @public
   */
  Repository?: string | undefined;

  /**
   * <p>The owner of the remote repository that contains the job artifacts.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>An optional branch in the remote repository.</p>
   * @public
   */
  Branch?: string | undefined;

  /**
   * <p>An optional folder in the remote repository.</p>
   * @public
   */
  Folder?: string | undefined;

  /**
   * <p>The last commit ID for a commit in the remote repository.</p>
   * @public
   */
  LastCommitId?: string | undefined;

  /**
   * <p>The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token.</p>
   * @public
   */
  AuthStrategy?: SourceControlAuthStrategy | undefined;

  /**
   * <p>The value of an authorization token.</p>
   * @public
   */
  AuthToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetPartitionRequest {
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
   * <p>A list of partition values identifying the partitions to retrieve.</p>
   * @public
   */
  PartitionsToGet: PartitionValueList[] | undefined;
}

/**
 * <p>Represents a slice of table data.</p>
 * @public
 */
export interface Partition {
  /**
   * <p>The values of the partition.</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>The name of the catalog database in which to create the partition.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the database table in which to create the partition.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The time at which the partition was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time at which the partition was accessed.</p>
   * @public
   */
  LastAccessTime?: Date | undefined;

  /**
   * <p>Provides information about the physical
   *       location where the partition is stored.</p>
   * @public
   */
  StorageDescriptor?: StorageDescriptor | undefined;

  /**
   * <p>These key-value pairs define partition parameters.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>The last time at which column statistics were computed for this
   *       partition.</p>
   * @public
   */
  LastAnalyzedTime?: Date | undefined;

  /**
   * <p>The ID of the Data Catalog in which the partition resides.</p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetPartitionResponse {
  /**
   * <p>A list of the requested partitions.</p>
   * @public
   */
  Partitions?: Partition[] | undefined;

  /**
   * <p>A list of the partition values in the request for which partitions were not
   *       returned.</p>
   * @public
   */
  UnprocessedKeys?: PartitionValueList[] | undefined;
}

/**
 * <p>Represents a table optimizer to retrieve in the <code>BatchGetTableOptimizer</code> operation.</p>
 * @public
 */
export interface BatchGetTableOptimizerEntry {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  catalogId?: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  tableName?: string | undefined;

  /**
   * <p>The type of table optimizer.</p>
   * @public
   */
  type?: TableOptimizerType | undefined;
}

/**
 * @public
 */
export interface BatchGetTableOptimizerRequest {
  /**
   * <p>A list of <code>BatchGetTableOptimizerEntry</code> objects specifying the table optimizers to retrieve.</p>
   * @public
   */
  Entries: BatchGetTableOptimizerEntry[] | undefined;
}

/**
 * <p>Contains details on one of the errors in the error list returned by the <code>BatchGetTableOptimizer</code> operation.</p>
 * @public
 */
export interface BatchGetTableOptimizerError {
  /**
   * <p>An <code>ErrorDetail</code> object containing code and message details about the error.</p>
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  catalogId?: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  tableName?: string | undefined;

  /**
   * <p>The type of table optimizer.</p>
   * @public
   */
  type?: TableOptimizerType | undefined;
}

/**
 * <p>The configuration for an Iceberg compaction optimizer. This configuration defines parameters for optimizing the layout of data files in Iceberg tables.</p>
 * @public
 */
export interface IcebergCompactionConfiguration {
  /**
   * <p>The strategy to use for compaction. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>binpack</code>: Combines small files into larger files, typically targeting sizes over 100MB, while applying any pending deletes.
   *           This is the recommended compaction strategy for most use cases.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sort</code>: Organizes data based on specified columns which are sorted hierarchically during compaction, improving query
   *         performance for filtered operations. This strategy is recommended when your queries frequently filter on specific columns. To use this strategy,
   *         you must first define a sort order in your Iceberg table properties using the <code>sort_order</code> table property.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>z-order</code>: Optimizes data organization by blending multiple attributes into a single scalar value that can be used for sorting,
   *           allowing efficient querying across multiple dimensions. This strategy is recommended when you need to query data across multiple dimensions
   *           simultaneously. To use this strategy, you must first define a sort order in your Iceberg table properties using the
   *           <code>sort_order</code> table property.
   *         </p>
   *             </li>
   *          </ul>
   *          <p>If an input is not provided, the default value 'binpack' will be used.</p>
   * @public
   */
  strategy?: CompactionStrategy | undefined;

  /**
   * <p>The minimum number of data files that must be present in a partition before compaction will actually compact files. This parameter helps control when compaction is triggered, preventing unnecessary compaction operations on partitions with few files. If an input is not provided, the default value 100 will be used.</p>
   * @public
   */
  minInputFiles?: number | undefined;

  /**
   * <p>The minimum number of deletes that must be present in a data file to make it eligible for compaction. This parameter helps optimize compaction by focusing on files that contain a significant number of delete operations, which can improve query performance by removing deleted records. If an input is not provided, the default value 1 will be used.</p>
   * @public
   */
  deleteFileThreshold?: number | undefined;
}

/**
 * <p>The configuration for a compaction optimizer. This configuration defines how data files in your table will be compacted to improve
 *       query performance and reduce storage costs.</p>
 * @public
 */
export interface CompactionConfiguration {
  /**
   * <p>The configuration for an Iceberg compaction optimizer.</p>
   * @public
   */
  icebergConfiguration?: IcebergCompactionConfiguration | undefined;
}

/**
 * <p>The configuration for an Iceberg orphan file deletion optimizer.</p>
 * @public
 */
export interface IcebergOrphanFileDeletionConfiguration {
  /**
   * <p>The number of days that orphan files should be retained before file deletion. If an input is not provided, the default value 3 will be used.</p>
   * @public
   */
  orphanFileRetentionPeriodInDays?: number | undefined;

  /**
   * <p>Specifies a directory in which to look for files (defaults to the table's location). You may choose a sub-directory rather than the top-level table location.</p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The interval in hours between orphan file deletion job runs. This parameter controls how frequently the orphan file deletion optimizer will run to clean up orphan files. The value must be between 3 and 168 hours (7 days). If an input is not provided, the default value 24 will be used.</p>
   * @public
   */
  runRateInHours?: number | undefined;
}

/**
 * <p>The configuration for an orphan file deletion optimizer.</p>
 * @public
 */
export interface OrphanFileDeletionConfiguration {
  /**
   * <p>The configuration for an Iceberg orphan file deletion optimizer.</p>
   * @public
   */
  icebergConfiguration?: IcebergOrphanFileDeletionConfiguration | undefined;
}

/**
 * <p>The configuration for an Iceberg snapshot retention optimizer.</p>
 * @public
 */
export interface IcebergRetentionConfiguration {
  /**
   * <p>The number of days to retain the Iceberg snapshots. If an input is not provided, the corresponding Iceberg table configuration field will be used or if not present, the default value 5 will be used.</p>
   * @public
   */
  snapshotRetentionPeriodInDays?: number | undefined;

  /**
   * <p>The number of Iceberg snapshots to retain within the retention period. If an input is not provided, the corresponding Iceberg table configuration field will be used or if not present, the default value 1 will be used.</p>
   * @public
   */
  numberOfSnapshotsToRetain?: number | undefined;

  /**
   * <p>If set to false, snapshots are only deleted from table metadata, and the underlying data and metadata files are not deleted.</p>
   * @public
   */
  cleanExpiredFiles?: boolean | undefined;

  /**
   * <p>The interval in hours between retention job runs. This parameter controls how frequently the retention optimizer will run to clean up expired snapshots. The value must be between 3 and 168 hours (7 days). If an input is not provided, the default value 24 will be used.</p>
   * @public
   */
  runRateInHours?: number | undefined;
}

/**
 * <p>The configuration for a snapshot retention optimizer.</p>
 * @public
 */
export interface RetentionConfiguration {
  /**
   * <p>The configuration for an Iceberg snapshot retention optimizer.</p>
   * @public
   */
  icebergConfiguration?: IcebergRetentionConfiguration | undefined;
}

/**
 * <p>An object that describes the VPC configuration for a table optimizer.</p>
 *          <p>This configuration is necessary to perform optimization on tables that are in a customer VPC.</p>
 * @public
 */
export type TableOptimizerVpcConfiguration =
  | TableOptimizerVpcConfiguration.GlueConnectionNameMember
  | TableOptimizerVpcConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace TableOptimizerVpcConfiguration {
  /**
   * <p>The name of the Glue connection used for the VPC for the table optimizer.</p>
   * @public
   */
  export interface GlueConnectionNameMember {
    glueConnectionName: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueConnectionName?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    glueConnectionName: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains details on the configuration of a table optimizer. You pass this configuration when creating or updating a table optimizer.</p>
 * @public
 */
export interface TableOptimizerConfiguration {
  /**
   * <p>A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Whether table optimization is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>A <code>TableOptimizerVpcConfiguration</code> object representing the VPC configuration for a table optimizer.</p>
   *          <p>This configuration is necessary to perform optimization on tables that are in a customer VPC.</p>
   * @public
   */
  vpcConfiguration?: TableOptimizerVpcConfiguration | undefined;

  /**
   * <p>The configuration for a compaction optimizer. This configuration defines how data files in your table will be compacted to
   *       improve query performance and reduce storage costs.</p>
   * @public
   */
  compactionConfiguration?: CompactionConfiguration | undefined;

  /**
   * <p>The configuration for a snapshot retention optimizer.</p>
   * @public
   */
  retentionConfiguration?: RetentionConfiguration | undefined;

  /**
   * <p>The configuration for an orphan file deletion optimizer.</p>
   * @public
   */
  orphanFileDeletionConfiguration?: OrphanFileDeletionConfiguration | undefined;
}

/**
 * <p>Compaction metrics for Iceberg for the optimizer run.</p>
 * @public
 */
export interface IcebergCompactionMetrics {
  /**
   * <p>The number of bytes removed by the compaction job run.</p>
   * @public
   */
  NumberOfBytesCompacted?: number | undefined;

  /**
   * <p>The number of files removed by the compaction job run.</p>
   * @public
   */
  NumberOfFilesCompacted?: number | undefined;

  /**
   * <p>The number of DPU hours consumed by the job.</p>
   * @public
   */
  DpuHours?: number | undefined;

  /**
   * <p>The number of DPUs consumed by the job, rounded up to the nearest whole number.</p>
   * @public
   */
  NumberOfDpus?: number | undefined;

  /**
   * <p>The duration of the job in hours.</p>
   * @public
   */
  JobDurationInHour?: number | undefined;
}

/**
 * <p>A structure that contains compaction metrics for the optimizer run.</p>
 * @public
 */
export interface CompactionMetrics {
  /**
   * <p>A structure containing the Iceberg compaction metrics for the optimizer run.</p>
   * @public
   */
  IcebergMetrics?: IcebergCompactionMetrics | undefined;
}

/**
 * <p>Metrics for the optimizer run.</p>
 *          <p>This structure is deprecated. See the individual metric members for compaction, retention, and orphan file deletion.</p>
 * @public
 */
export interface RunMetrics {
  /**
   * <p>The number of bytes removed by the compaction job run.</p>
   * @public
   */
  NumberOfBytesCompacted?: string | undefined;

  /**
   * <p>The number of files removed by the compaction job run.</p>
   * @public
   */
  NumberOfFilesCompacted?: string | undefined;

  /**
   * <p>The number of DPUs consumed by the job, rounded up to the nearest whole number.</p>
   * @public
   */
  NumberOfDpus?: string | undefined;

  /**
   * <p>The duration of the job in hours.</p>
   * @public
   */
  JobDurationInHour?: string | undefined;
}

/**
 * <p>Orphan file deletion metrics for Iceberg for the optimizer run.</p>
 * @public
 */
export interface IcebergOrphanFileDeletionMetrics {
  /**
   * <p>The number of orphan files deleted by the orphan file deletion job run.</p>
   * @public
   */
  NumberOfOrphanFilesDeleted?: number | undefined;

  /**
   * <p>The number of DPU hours consumed by the job.</p>
   * @public
   */
  DpuHours?: number | undefined;

  /**
   * <p>The number of DPUs consumed by the job, rounded up to the nearest whole number.</p>
   * @public
   */
  NumberOfDpus?: number | undefined;

  /**
   * <p>The duration of the job in hours.</p>
   * @public
   */
  JobDurationInHour?: number | undefined;
}

/**
 * <p>A structure that contains orphan file deletion metrics for the optimizer run.</p>
 * @public
 */
export interface OrphanFileDeletionMetrics {
  /**
   * <p>A structure containing the Iceberg orphan file deletion metrics for the optimizer run.</p>
   * @public
   */
  IcebergMetrics?: IcebergOrphanFileDeletionMetrics | undefined;
}

/**
 * <p>Snapshot retention metrics for Iceberg for the optimizer run.</p>
 * @public
 */
export interface IcebergRetentionMetrics {
  /**
   * <p>The number of data files deleted by the retention job run.</p>
   * @public
   */
  NumberOfDataFilesDeleted?: number | undefined;

  /**
   * <p>The number of manifest files deleted by the retention job run.</p>
   * @public
   */
  NumberOfManifestFilesDeleted?: number | undefined;

  /**
   * <p>The number of manifest lists deleted by the retention job run.</p>
   * @public
   */
  NumberOfManifestListsDeleted?: number | undefined;

  /**
   * <p>The number of DPU hours consumed by the job.</p>
   * @public
   */
  DpuHours?: number | undefined;

  /**
   * <p>The number of DPUs consumed by the job, rounded up to the nearest whole number.</p>
   * @public
   */
  NumberOfDpus?: number | undefined;

  /**
   * <p>The duration of the job in hours.</p>
   * @public
   */
  JobDurationInHour?: number | undefined;
}

/**
 * <p>A structure that contains retention metrics for the optimizer run.</p>
 * @public
 */
export interface RetentionMetrics {
  /**
   * <p>A structure containing the Iceberg retention metrics for the optimizer run.</p>
   * @public
   */
  IcebergMetrics?: IcebergRetentionMetrics | undefined;
}

/**
 * <p>Contains details for a table optimizer run.</p>
 * @public
 */
export interface TableOptimizerRun {
  /**
   * <p>An event type representing the status of the table optimizer run.</p>
   * @public
   */
  eventType?: TableOptimizerEventType | undefined;

  /**
   * <p>Represents the epoch timestamp at which the compaction job was started within Lake Formation.</p>
   * @public
   */
  startTimestamp?: Date | undefined;

  /**
   * <p>Represents the epoch timestamp at which the compaction job ended.</p>
   * @public
   */
  endTimestamp?: Date | undefined;

  /**
   * <p>A <code>RunMetrics</code> object containing metrics for the optimizer run.</p>
   *          <p>This member is deprecated. See the individual metric members for compaction, retention, and orphan file deletion.</p>
   *
   * @deprecated Metrics has been replaced by optimizer type specific metrics such as IcebergCompactionMetrics
   * @public
   */
  metrics?: RunMetrics | undefined;

  /**
   * <p>An error that occured during the optimizer run.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>A <code>CompactionMetrics</code> object containing metrics for the optimizer run.</p>
   * @public
   */
  compactionMetrics?: CompactionMetrics | undefined;

  /**
   * <p>The strategy used for the compaction run. Indicates which algorithm was applied to determine how files were selected and combined during the
   *       compaction process. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>binpack</code>: Combines small files into larger files, typically targeting sizes over 100MB, while applying any pending deletes.
   *           This is the recommended compaction strategy for most use cases.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sort</code>: Organizes data based on specified columns which are sorted hierarchically during compaction, improving query
   *           performance for filtered operations. This strategy is recommended when your queries frequently filter on specific columns. To use this strategy,
   *           you must first define a sort order in your Iceberg table properties using the <code>sort_order</code> table property.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>z-order</code>: Optimizes data organization by blending multiple attributes into a single scalar value that can be used for sorting,
   *           allowing efficient querying across multiple dimensions. This strategy is recommended when you need to query data across multiple dimensions
   *           simultaneously. To use this strategy, you must first define a sort order in your Iceberg table properties using the
   *           <code>sort_order</code> table property.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  compactionStrategy?: CompactionStrategy | undefined;

  /**
   * <p>A <code>RetentionMetrics</code> object containing metrics for the optimizer run.</p>
   * @public
   */
  retentionMetrics?: RetentionMetrics | undefined;

  /**
   * <p>An <code>OrphanFileDeletionMetrics</code> object containing metrics for the optimizer run.</p>
   * @public
   */
  orphanFileDeletionMetrics?: OrphanFileDeletionMetrics | undefined;
}

/**
 * <p>Contains details about an optimizer associated with a table.</p>
 * @public
 */
export interface TableOptimizer {
  /**
   * <p>The type of table optimizer. The valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>compaction</code>: for managing compaction with a table optimizer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>retention</code>: for managing the retention of snapshot with a table optimizer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>orphan_file_deletion</code>: for managing the deletion of orphan files with a table optimizer.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: TableOptimizerType | undefined;

  /**
   * <p>A <code>TableOptimizerConfiguration</code> object that was specified when creating or updating a table optimizer.</p>
   * @public
   */
  configuration?: TableOptimizerConfiguration | undefined;

  /**
   * <p>A <code>TableOptimizerRun</code> object representing the last run of the table optimizer.</p>
   * @public
   */
  lastRun?: TableOptimizerRun | undefined;

  /**
   * <p>
   *       Specifies the source of the optimizer configuration. This indicates how the table optimizer was configured and which entity or service
   *       initiated the configuration.
   *     </p>
   * @public
   */
  configurationSource?: ConfigurationSource | undefined;
}

/**
 * <p>Contains details for one of the table optimizers returned by the <code>BatchGetTableOptimizer</code> operation.</p>
 * @public
 */
export interface BatchTableOptimizer {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  catalogId?: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  tableName?: string | undefined;

  /**
   * <p>A <code>TableOptimizer</code> object that contains details on the configuration and last run of a table optimizer.</p>
   * @public
   */
  tableOptimizer?: TableOptimizer | undefined;
}

/**
 * @public
 */
export interface BatchGetTableOptimizerResponse {
  /**
   * <p>A list of <code>BatchTableOptimizer</code> objects.</p>
   * @public
   */
  TableOptimizers?: BatchTableOptimizer[] | undefined;

  /**
   * <p>A list of errors from the operation.</p>
   * @public
   */
  Failures?: BatchGetTableOptimizerError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetTriggersRequest {
  /**
   * <p>A list of trigger names, which may be the names returned from the <code>ListTriggers</code> operation.</p>
   * @public
   */
  TriggerNames: string[] | undefined;
}

/**
 * <p>Batch condition that must be met (specified number of events received or batch time window expired)
 *       before EventBridge event trigger fires.</p>
 * @public
 */
export interface EventBatchingCondition {
  /**
   * <p>Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.</p>
   * @public
   */
  BatchSize: number | undefined;

  /**
   * <p>Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.</p>
   * @public
   */
  BatchWindow?: number | undefined;
}

/**
 * <p>Defines a condition under which a trigger fires.</p>
 * @public
 */
export interface Condition {
  /**
   * <p>A logical operator.</p>
   * @public
   */
  LogicalOperator?: LogicalOperator | undefined;

  /**
   * <p>The name of the job whose <code>JobRuns</code> this condition applies to, and on which
   *       this trigger waits.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The condition state. Currently, the only job states that a trigger can listen for are <code>SUCCEEDED</code>, <code>STOPPED</code>, <code>FAILED</code>, and <code>TIMEOUT</code>. The only crawler states that a trigger can listen for are <code>SUCCEEDED</code>, <code>FAILED</code>, and <code>CANCELLED</code>.</p>
   * @public
   */
  State?: JobRunState | undefined;

  /**
   * <p>The name of the crawler to which this condition applies.</p>
   * @public
   */
  CrawlerName?: string | undefined;

  /**
   * <p>The state of the crawler to which this condition applies.</p>
   * @public
   */
  CrawlState?: CrawlState | undefined;
}

/**
 * <p>Defines the predicate of the trigger, which determines when it fires.</p>
 * @public
 */
export interface Predicate {
  /**
   * <p>An optional field if only one condition is listed. If multiple conditions are listed, then
   *       this field is required.</p>
   * @public
   */
  Logical?: Logical | undefined;

  /**
   * <p>A list of the conditions that determine when the trigger will fire.</p>
   * @public
   */
  Conditions?: Condition[] | undefined;
}

/**
 * <p>Information about a specific trigger.</p>
 * @public
 */
export interface Trigger {
  /**
   * <p>The name of the trigger.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the workflow associated with the trigger.</p>
   * @public
   */
  WorkflowName?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of trigger that this is.</p>
   * @public
   */
  Type?: TriggerType | undefined;

  /**
   * <p>The current state of the trigger.</p>
   * @public
   */
  State?: TriggerState | undefined;

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
export interface BatchGetTriggersResponse {
  /**
   * <p>A list of trigger definitions.</p>
   * @public
   */
  Triggers?: Trigger[] | undefined;

  /**
   * <p>A list of names of triggers not found.</p>
   * @public
   */
  TriggersNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetWorkflowsRequest {
  /**
   * <p>A list of workflow names, which may be the names returned from the <code>ListWorkflows</code> operation.</p>
   * @public
   */
  Names: string[] | undefined;

  /**
   * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
   * @public
   */
  IncludeGraph?: boolean | undefined;
}

/**
 * <p>The details of a blueprint.</p>
 * @public
 */
export interface BlueprintDetails {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  BlueprintName?: string | undefined;

  /**
   * <p>The run ID for this blueprint.</p>
   * @public
   */
  RunId?: string | undefined;
}

/**
 * <p>An edge represents a directed connection between two Glue components that are part of the workflow the
 *       edge belongs to.</p>
 * @public
 */
export interface Edge {
  /**
   * <p>The unique of the node within the workflow where the edge starts.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The unique of the node within the workflow where the edge ends.</p>
   * @public
   */
  DestinationId?: string | undefined;
}

/**
 * <p>The details of a crawl in the workflow.</p>
 * @public
 */
export interface Crawl {
  /**
   * <p>The state of the crawler.</p>
   * @public
   */
  State?: CrawlState | undefined;

  /**
   * <p>The date and time on which the crawl started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The date and time on which the crawl completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The error message associated with the crawl.</p>
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
}

/**
 * <p>The details of a Crawler node present in the workflow.</p>
 * @public
 */
export interface CrawlerNodeDetails {
  /**
   * <p>A list of crawls represented by the crawl node.</p>
   * @public
   */
  Crawls?: Crawl[] | undefined;
}

/**
 * <p>A job run that was used in the predicate of a conditional trigger
 *       that triggered this job run.</p>
 * @public
 */
export interface Predecessor {
  /**
   * <p>The name of the job definition used by the predecessor job run.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The job-run ID of the predecessor job run.</p>
   * @public
   */
  RunId?: string | undefined;
}

/**
 * <p>Contains information about a job run.</p>
 * @public
 */
export interface JobRun {
  /**
   * <p>The ID of this job run.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The number of the attempt to run this job.</p>
   * @public
   */
  Attempt?: number | undefined;

  /**
   * <p>The ID of the previous run of this job. For example, the <code>JobRunId</code> specified
   *       in the <code>StartJobRun</code> action.</p>
   * @public
   */
  PreviousRunId?: string | undefined;

  /**
   * <p>The name of the trigger that started this job run.</p>
   * @public
   */
  TriggerName?: string | undefined;

  /**
   * <p>The name of the job definition being used in this run.</p>
   * @public
   */
  JobName?: string | undefined;

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
   * <p>Specifies whether job run queuing is enabled for the job run.</p>
   *          <p>A value of true means job run queuing is enabled for the job run. If false or not populated, the job run will not be considered for queueing.</p>
   * @public
   */
  JobRunQueuingEnabled?: boolean | undefined;

  /**
   * <p>The date and time at which this job run was started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The last time that this job run was modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>The date and time that this job run completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The current state of the job run. For more information about the statuses of jobs that have terminated abnormally, see <a href="https://docs.aws.amazon.com/glue/latest/dg/job-run-statuses.html">Glue Job Run Statuses</a>.</p>
   * @public
   */
  JobRunState?: JobRunState | undefined;

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
   * <p>An error message associated with this job run.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>A list of predecessors to this job run.</p>
   * @public
   */
  PredecessorRuns?: Predecessor[] | undefined;

  /**
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) allocated to this JobRun.
   *       From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *         pricing page</a>.</p>
   *
   * @deprecated This property is deprecated, use MaxCapacity instead.
   * @public
   */
  AllocatedCapacity?: number | undefined;

  /**
   * <p>The amount of time (in seconds) that the job run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. This value overrides the timeout value set in the parent job.</p>
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
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * <p>The name of the log group for secure logging that can be server-side encrypted in Amazon
   *       CloudWatch using KMS. This name can be <code>/aws-glue/jobs/</code>, in which case the
   *       default encryption is <code>NONE</code>. If you add a role name and
   *       <code>SecurityConfiguration</code> name (in other words,
   *       <code>/aws-glue/jobs-yourRoleName-yourSecurityConfigurationName/</code>), then that security
   *       configuration is used to encrypt the log group.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
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
   * <p>This field can be set for either job runs with execution class <code>FLEX</code> or when Auto Scaling is enabled, and represents the total time each executor ran during the lifecycle of a job run in seconds, multiplied by a DPU factor (1 for <code>G.1X</code>, 2 for <code>G.2X</code>, or 0.25 for <code>G.025X</code> workers). This value may be different than the <code>executionEngineRuntime</code> * <code>MaxCapacity</code> as in the case of Auto Scaling jobs, as the number of executors running at a given time may be less than the <code>MaxCapacity</code>. Therefore, it is possible that the value of <code>DPUSeconds</code> is less than <code>executionEngineRuntime</code> * <code>MaxCapacity</code>.</p>
   * @public
   */
  DPUSeconds?: number | undefined;

  /**
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   * @public
   */
  ExecutionClass?: ExecutionClass | undefined;

  /**
   * <p>This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs.</p>
   *          <p>Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT.</p>
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * <p>The name of an Glue usage profile associated with the job run.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>This field holds details that pertain to the state of a job run. The field is nullable.</p>
   *          <p>For example, when a job run is in a WAITING state as a result of job run queuing, the field has the reason why the job run is in that state.</p>
   * @public
   */
  StateDetail?: string | undefined;

  /**
   * <p>This inline session policy to the StartJobRun API allows you to dynamically restrict the permissions of the specified
   *       execution role for the scope of the job, without requiring the creation of additional IAM roles.</p>
   * @public
   */
  ExecutionRoleSessionPolicy?: string | undefined;
}

/**
 * <p>The details of a Job node present in the workflow.</p>
 * @public
 */
export interface JobNodeDetails {
  /**
   * <p>The information for the job runs represented by the job node.</p>
   * @public
   */
  JobRuns?: JobRun[] | undefined;
}

/**
 * <p>The details of a Trigger node present in the workflow.</p>
 * @public
 */
export interface TriggerNodeDetails {
  /**
   * <p>The information of the trigger represented by the trigger node.</p>
   * @public
   */
  Trigger?: Trigger | undefined;
}

/**
 * <p>A node represents an Glue component (trigger, crawler, or job) on a workflow graph.</p>
 * @public
 */
export interface Node {
  /**
   * <p>The type of Glue component represented by the node.</p>
   * @public
   */
  Type?: NodeType | undefined;

  /**
   * <p>The name of the Glue component represented by the node.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The unique Id assigned to the node within the workflow.</p>
   * @public
   */
  UniqueId?: string | undefined;

  /**
   * <p>Details of the Trigger when the node represents a Trigger.</p>
   * @public
   */
  TriggerDetails?: TriggerNodeDetails | undefined;

  /**
   * <p>Details of the Job when the node represents a Job.</p>
   * @public
   */
  JobDetails?: JobNodeDetails | undefined;

  /**
   * <p>Details of the crawler when the node represents a crawler.</p>
   * @public
   */
  CrawlerDetails?: CrawlerNodeDetails | undefined;
}

/**
 * <p>A workflow graph represents the complete workflow containing all the Glue components present in the
 *       workflow and all the directed connections between them.</p>
 * @public
 */
export interface WorkflowGraph {
  /**
   * <p>A list of the the Glue components belong to the workflow represented as nodes.</p>
   * @public
   */
  Nodes?: Node[] | undefined;

  /**
   * <p>A list of all the directed connections between the nodes belonging to the workflow.</p>
   * @public
   */
  Edges?: Edge[] | undefined;
}

/**
 * <p>The batch condition that started the workflow run. Either the number of events in the batch size arrived,
 *       in which case the BatchSize member is non-zero, or the batch window expired, in which case the BatchWindow
 *       member is non-zero.</p>
 * @public
 */
export interface StartingEventBatchCondition {
  /**
   * <p>Number of events in the batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>Duration of the batch window in seconds.</p>
   * @public
   */
  BatchWindow?: number | undefined;
}

/**
 * <p>Workflow run statistics provides statistics about the workflow run.</p>
 * @public
 */
export interface WorkflowRunStatistics {
  /**
   * <p>Total number of Actions in the workflow run.</p>
   * @public
   */
  TotalActions?: number | undefined;

  /**
   * <p>Total number of Actions that timed out.</p>
   * @public
   */
  TimeoutActions?: number | undefined;

  /**
   * <p>Total number of Actions that have failed.</p>
   * @public
   */
  FailedActions?: number | undefined;

  /**
   * <p>Total number of Actions that have stopped.</p>
   * @public
   */
  StoppedActions?: number | undefined;

  /**
   * <p>Total number of Actions that have succeeded.</p>
   * @public
   */
  SucceededActions?: number | undefined;

  /**
   * <p>Total number Actions in running state.</p>
   * @public
   */
  RunningActions?: number | undefined;

  /**
   * <p>Indicates the count of job runs in the ERROR state in the workflow run.</p>
   * @public
   */
  ErroredActions?: number | undefined;

  /**
   * <p>Indicates the count of job runs in WAITING state in the workflow run.</p>
   * @public
   */
  WaitingActions?: number | undefined;
}

/**
 * <p>A workflow run is an execution of a workflow providing all the runtime information.</p>
 * @public
 */
export interface WorkflowRun {
  /**
   * <p>Name of the workflow that was run.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of this workflow run.</p>
   * @public
   */
  WorkflowRunId?: string | undefined;

  /**
   * <p>The ID of the previous workflow run.</p>
   * @public
   */
  PreviousRunId?: string | undefined;

  /**
   * <p>The workflow run properties which were set during the run.</p>
   * @public
   */
  WorkflowRunProperties?: Record<string, string> | undefined;

  /**
   * <p>The date and time when the workflow run was started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The date and time when the workflow run completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The status of the workflow run.</p>
   * @public
   */
  Status?: WorkflowRunStatus | undefined;

  /**
   * <p>This error message describes any error that may have occurred in starting the workflow run. Currently the only error message is "Concurrent runs exceeded for workflow: <code>foo</code>."</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The statistics of the run.</p>
   * @public
   */
  Statistics?: WorkflowRunStatistics | undefined;

  /**
   * <p>The graph representing all the Glue components that belong to the workflow as nodes and directed
   *       connections between them as edges.</p>
   * @public
   */
  Graph?: WorkflowGraph | undefined;

  /**
   * <p>The batch condition that started the workflow run.</p>
   * @public
   */
  StartingEventBatchCondition?: StartingEventBatchCondition | undefined;
}

/**
 * <p>A workflow is a collection of multiple dependent Glue
 *       jobs and crawlers that are run to complete a complex ETL task. A
 *       workflow manages the execution and monitoring of all its jobs and crawlers.</p>
 * @public
 */
export interface Workflow {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.
   *     The run properties are made available to each job in the workflow. A job can modify
   *     the properties for the next jobs in the flow.</p>
   * @public
   */
  DefaultRunProperties?: Record<string, string> | undefined;

  /**
   * <p>The date and time when the workflow was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The date and time when the workflow was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>The information about the last execution of the workflow.</p>
   * @public
   */
  LastRun?: WorkflowRun | undefined;

  /**
   * <p>The graph representing all the Glue components that belong to the workflow as nodes and directed
   *       connections between them as edges.</p>
   * @public
   */
  Graph?: WorkflowGraph | undefined;

  /**
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   * @public
   */
  MaxConcurrentRuns?: number | undefined;

  /**
   * <p>This structure indicates the details of the blueprint that this particular workflow is created from.</p>
   * @public
   */
  BlueprintDetails?: BlueprintDetails | undefined;
}

/**
 * @public
 */
export interface BatchGetWorkflowsResponse {
  /**
   * <p>A list of workflow resource metadata.</p>
   * @public
   */
  Workflows?: Workflow[] | undefined;

  /**
   * <p>A list of names of workflows not found.</p>
   * @public
   */
  MissingWorkflows?: string[] | undefined;
}

/**
 * <p>An Inclusion Annotation.</p>
 * @public
 */
export interface DatapointInclusionAnnotation {
  /**
   * <p>The ID of the data quality profile the statistic belongs to.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * <p>The inclusion annotation value to apply to the statistic.</p>
   * @public
   */
  InclusionAnnotation?: InclusionAnnotationValue | undefined;
}

/**
 * @public
 */
export interface BatchPutDataQualityStatisticAnnotationRequest {
  /**
   * <p>A list of <code>DatapointInclusionAnnotation</code>'s. The InclusionAnnotations must contain a profileId and statisticId.
   *         If there are multiple InclusionAnnotations, the list must refer to a single statisticId across multiple profileIds.</p>
   * @public
   */
  InclusionAnnotations: DatapointInclusionAnnotation[] | undefined;

  /**
   * <p>Client Token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutDataQualityStatisticAnnotationResponse {
  /**
   * <p>A list of <code>AnnotationError</code>'s.</p>
   * @public
   */
  FailedInclusionAnnotations?: AnnotationError[] | undefined;
}

/**
 * @public
 */
export interface BatchStopJobRunRequest {
  /**
   * <p>The name of the job definition for which to stop job runs.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>A list of the <code>JobRunIds</code> that should be stopped for that job
   *       definition.</p>
   * @public
   */
  JobRunIds: string[] | undefined;
}

/**
 * <p>Records an error that occurred when attempting to stop a
 *       specified job run.</p>
 * @public
 */
export interface BatchStopJobRunError {
  /**
   * <p>The name of the job definition that is used in the job run in question.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The <code>JobRunId</code> of the job run in question.</p>
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * <p>Specifies details about the error that was encountered.</p>
   * @public
   */
  ErrorDetail?: ErrorDetail | undefined;
}

/**
 * <p>Records a successful request to stop a specified <code>JobRun</code>.</p>
 * @public
 */
export interface BatchStopJobRunSuccessfulSubmission {
  /**
   * <p>The name of the job definition used in the job run that was stopped.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The <code>JobRunId</code> of the job run that was stopped.</p>
   * @public
   */
  JobRunId?: string | undefined;
}

/**
 * @public
 */
export interface BatchStopJobRunResponse {
  /**
   * <p>A list of the JobRuns that were successfully submitted for stopping.</p>
   * @public
   */
  SuccessfulSubmissions?: BatchStopJobRunSuccessfulSubmission[] | undefined;

  /**
   * <p>A list of the errors that were encountered in trying to stop <code>JobRuns</code>,
   *       including the <code>JobRunId</code> for which each error was encountered and details about the
   *       error.</p>
   * @public
   */
  Errors?: BatchStopJobRunError[] | undefined;
}

/**
 * <p>A structure that contains the values and structure used to update a partition.</p>
 * @public
 */
export interface BatchUpdatePartitionRequestEntry {
  /**
   * <p>A list of values defining the partitions.</p>
   * @public
   */
  PartitionValueList: string[] | undefined;

  /**
   * <p>The structure used to update a partition.</p>
   * @public
   */
  PartitionInput: PartitionInput | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePartitionRequest {
  /**
   * <p>The ID of the catalog in which the partition is to be updated. Currently, this should be
   *       the Amazon Web Services account ID.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the metadata database in which the partition is
   *       to be updated.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the metadata table in which the partition is to be updated.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A list of up to 100 <code>BatchUpdatePartitionRequestEntry</code> objects to update.</p>
   * @public
   */
  Entries: BatchUpdatePartitionRequestEntry[] | undefined;
}

/**
 * <p>Contains information about a batch update partition error.</p>
 * @public
 */
export interface BatchUpdatePartitionFailureEntry {
  /**
   * <p>A list of values defining the partitions.</p>
   * @public
   */
  PartitionValueList?: string[] | undefined;

  /**
   * <p>The details about the batch update partition error.</p>
   * @public
   */
  ErrorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePartitionResponse {
  /**
   * <p>The errors encountered when trying to update the requested partitions. A list of <code>BatchUpdatePartitionFailureEntry</code> objects.</p>
   * @public
   */
  Errors?: BatchUpdatePartitionFailureEntry[] | undefined;
}

/**
 * @public
 */
export interface CancelDataQualityRuleRecommendationRunRequest {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface CancelDataQualityRuleRecommendationRunResponse {}

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
 */
export interface CancelMLTaskRunResponse {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId?: string | undefined;

  /**
   * <p>The unique identifier for the task run.</p>
   * @public
   */
  TaskRunId?: string | undefined;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;
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
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface CancelStatementResponse {}

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
  Valid?: boolean | undefined;

  /**
   * <p>A validation failure error message.</p>
   * @public
   */
  Error?: string | undefined;
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
  Description?: string | undefined;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is published.</p>
   * @public
   */
  BlueprintLocation: string | undefined;

  /**
   * <p>The tags to be applied to this blueprint.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBlueprintResponse {
  /**
   * <p>Returns the name of the blueprint that was registered.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Input properties to configure data lake access for your catalog resource in the Glue Data Catalog.</p>
 * @public
 */
export interface DataLakeAccessProperties {
  /**
   * <p>Turns on or off data lake access for Apache Spark applications that access Amazon Redshift databases in the Data Catalog from any non-Redshift engine, such as Amazon Athena, Amazon EMR, or Glue ETL.</p>
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
   * <p>Specifies a federated catalog type for the native catalog resource. The currently supported type is <code>aws:redshift</code>.</p>
   * @public
   */
  CatalogType?: string | undefined;
}

/**
 * <p>A structure that specifies Iceberg table optimization properties for the catalog, including configurations for compaction, retention, and orphan file deletion operations.</p>
 * @public
 */
export interface IcebergOptimizationProperties {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that will be assumed to perform Iceberg table optimization operations.</p>
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
}

/**
 * <p>A structure that specifies data lake access properties and other custom properties.</p>
 * @public
 */
export interface CatalogProperties {
  /**
   * <p>A <code>DataLakeAccessProperties</code> object that specifies properties to configure data lake access for your catalog resource in the Glue Data Catalog.</p>
   * @public
   */
  DataLakeAccessProperties?: DataLakeAccessProperties | undefined;

  /**
   * <p>A structure that specifies Iceberg table optimization properties for the catalog. This includes configuration for compaction, retention, and
   *       orphan file deletion operations that can be applied to Iceberg tables in this catalog.</p>
   * @public
   */
  IcebergOptimizationProperties?: IcebergOptimizationProperties | undefined;

  /**
   * <p>Additional key-value properties for the catalog, such as column statistics optimizations.</p>
   * @public
   */
  CustomProperties?: Record<string, string> | undefined;
}

/**
 * <p>The Lake Formation principal.</p>
 * @public
 */
export interface DataLakePrincipal {
  /**
   * <p>An identifier for the Lake Formation principal.</p>
   * @public
   */
  DataLakePrincipalIdentifier?: string | undefined;
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
  Principal?: DataLakePrincipal | undefined;

  /**
   * <p>The permissions that are granted to the principal.</p>
   * @public
   */
  Permissions?: Permission[] | undefined;
}

/**
 * <p>A catalog that points to an entity outside the Glue Data Catalog.</p>
 * @public
 */
export interface FederatedCatalog {
  /**
   * <p>A unique identifier for the federated catalog.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>The name of the connection to an external data source, for example a Redshift-federated catalog.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The type of connection used to access the federated catalog, specifying the protocol or method for connection to the
   *     external data source.</p>
   * @public
   */
  ConnectionType?: string | undefined;
}

/**
 * <p>A structure that describes a target catalog for resource linking.</p>
 * @public
 */
export interface TargetRedshiftCatalog {
  /**
   * <p>The Amazon Resource Name (ARN) of the catalog resource.</p>
   * @public
   */
  CatalogArn: string | undefined;
}

/**
 * <p>A structure that describes catalog properties.</p>
 * @public
 */
export interface CatalogInput {
  /**
   * <p>Description string, not more than 2048 bytes long, matching the URI address multi-line string pattern. A description of the catalog.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A <code>FederatedCatalog</code> object. A <code>FederatedCatalog</code> structure that references an entity outside the Glue Data Catalog, for example a Redshift database.</p>
   * @public
   */
  FederatedCatalog?: FederatedCatalog | undefined;

  /**
   * <p>A map array of key-value pairs that define the parameters and properties of the catalog.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>A <code>TargetRedshiftCatalog</code> object that describes a target catalog for resource linking.</p>
   * @public
   */
  TargetRedshiftCatalog?: TargetRedshiftCatalog | undefined;

  /**
   * <p>A <code>CatalogProperties</code> object that specifies data lake access properties and other custom properties.</p>
   * @public
   */
  CatalogProperties?: CatalogProperties | undefined;

  /**
   * <p>An array of <code>PrincipalPermissions</code> objects. Creates a set of default permissions on the table(s) for principals. Used by Amazon Web Services Lake Formation. Typically should be explicitly set as an empty list.</p>
   * @public
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * <p>An array of <code>PrincipalPermissions</code> objects. Creates a set of default permissions on the database(s) for principals. Used by Amazon Web Services Lake Formation. Typically should be explicitly set as an empty list.</p>
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
export interface CreateCatalogRequest {
  /**
   * <p>The name of the catalog to create.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A <code>CatalogInput</code> object that defines the metadata for the catalog.</p>
   * @public
   */
  CatalogInput: CatalogInput | undefined;

  /**
   * <p>A map array of key-value pairs, not more than 50 pairs. Each key is a UTF-8 string, not less than 1 or more than 128 bytes long. Each value is a UTF-8 string, not more than 256 bytes long. The tags you assign to the catalog.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCatalogResponse {}

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
  Delimiter?: string | undefined;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. Must be different from the column delimiter.</p>
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
   * <p>Enables the configuration of custom datatypes.</p>
   * @public
   */
  CustomDatatypeConfigured?: boolean | undefined;

  /**
   * <p>Creates a list of supported custom datatypes.</p>
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
  CustomPatterns?: string | undefined;
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
  RowTag?: string | undefined;
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
  GrokClassifier?: CreateGrokClassifierRequest | undefined;

  /**
   * <p>An <code>XMLClassifier</code> object specifying the classifier
   *       to create.</p>
   * @public
   */
  XMLClassifier?: CreateXMLClassifierRequest | undefined;

  /**
   * <p>A <code>JsonClassifier</code> object specifying the classifier
   *       to create.</p>
   * @public
   */
  JsonClassifier?: CreateJsonClassifierRequest | undefined;

  /**
   * <p>A <code>CsvClassifier</code> object specifying the classifier
   *       to create.</p>
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

  /**
   * <p>A map of tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateColumnStatisticsTaskSettingsResponse {}

/**
 * <p>The OAuth client app in GetConnection response.</p>
 * @public
 */
export interface PhysicalConnectionRequirements {
  /**
   * <p>The subnet ID used by the connection.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The security group ID list used by the connection.</p>
   * @public
   */
  SecurityGroupIdList?: string[] | undefined;

  /**
   * <p>The connection's Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;
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
  Description?: string | undefined;

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
   *          <p>For more information on the connection parameters needed for a particular connector, see the documentation for the connector in <a href="https://docs.aws.amazon.com/glue/latest/dg/console-connections.html">Adding an Glue connection</a>in the Glue User Guide.</p>
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
  MatchCriteria?: string[] | undefined;

  /**
   * <p>These key-value pairs define parameters for the connection.</p>
   * @public
   */
  ConnectionProperties: Partial<Record<ConnectionPropertyKey, string>> | undefined;

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
   * <p>The physical connection requirements, such as virtual private cloud (VPC) and <code>SecurityGroup</code>, that are needed to successfully make this connection.</p>
   * @public
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;

  /**
   * <p>The authentication properties of the connection.</p>
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfigurationInput | undefined;

  /**
   * <p>A flag to validate the credentials during create connection. Default is true. </p>
   * @public
   */
  ValidateCredentials?: boolean | undefined;

  /**
   * <p>The compute environments that the specified connection properties are validated against.</p>
   * @public
   */
  ValidateForComputeEnvironments?: ComputeEnvironment[] | undefined;
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
  CatalogId?: string | undefined;

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
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * <p>The status of the connection creation request. The request can take some time for certain authentication types, for example when creating an OAuth connection with token exchange over VPC.</p>
   * @public
   */
  CreateConnectionStatus?: ConnectionStatus | undefined;
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
  DatabaseName?: string | undefined;

  /**
   * <p>A description of the new crawler.</p>
   * @public
   */
  Description?: string | undefined;

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
  Schedule?: string | undefined;

  /**
   * <p>A list of custom classifiers that the user has registered. By default, all built-in
   *       classifiers are included in a crawl, but these custom classifiers always override the default
   *       classifiers for a given classification.</p>
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
   * <p>Crawler configuration information. This versioned JSON
   *       string allows users to specify aspects of a crawler's behavior.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Setting crawler configuration options</a>.</p>
   * @public
   */
  Configuration?: string | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   * @public
   */
  CrawlerSecurityConfiguration?: string | undefined;

  /**
   * <p>The tags to use with this crawler request. You may use tags to limit access to the
   *             crawler. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer
   *             guide.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  ContextWords?: string[] | undefined;

  /**
   * <p>A list of tags applied to the custom entity type.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCustomEntityTypeResponse {
  /**
   * <p>The name of the custom pattern you created.</p>
   * @public
   */
  Name?: string | undefined;
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
  Identifier?: string | undefined;

  /**
   * <p>The name of the connection to the external metastore.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The type of connection used to access the federated database, such as JDBC, ODBC, or other supported connection protocols.</p>
   * @public
   */
  ConnectionType?: string | undefined;
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
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Region of the target database.</p>
   * @public
   */
  Region?: string | undefined;
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
  Description?: string | undefined;

  /**
   * <p>The location of the database (for example, an HDFS path). </p>
   * @public
   */
  LocationUri?: string | undefined;

  /**
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   *          <p>These key-value pairs define parameters and properties of the database.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

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
   * <p>A <code>FederatedDatabase</code> structure that references an entity outside the Glue Data Catalog.</p>
   * @public
   */
  FederatedDatabase?: FederatedDatabase | undefined;
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
  CatalogId?: string | undefined;

  /**
   * <p>The metadata for the database.</p>
   * @public
   */
  DatabaseInput: DatabaseInput | undefined;

  /**
   * <p>The tags you assign to the database.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDatabaseResponse {}

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
  CatalogId?: string | undefined;
}

/**
 * <p>A request to create a data quality ruleset.</p>
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
  Description?: string | undefined;

  /**
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   * @public
   */
  Ruleset: string | undefined;

  /**
   * <p>A list of tags applied to the data quality ruleset.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A target table associated with the data quality ruleset.</p>
   * @public
   */
  TargetTable?: DataQualityTargetTable | undefined;

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
