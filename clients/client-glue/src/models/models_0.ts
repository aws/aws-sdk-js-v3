// smithy-typescript generated code
import type {
  AdditionalOptionKeys,
  AggFunction,
  AllowFullTableExternalDataAccessEnum,
  AuthenticationType,
  BlueprintStatus,
  CompactionStrategy,
  CompressionType,
  ConfigurationSource,
  CrawlerLineageSettings,
  CrawlerState,
  CrawlState,
  DataFormat,
  DataOperation,
  DataQualityRuleResultStatus,
  DdbExportType,
  DeleteBehavior,
  DeltaTargetCompressionType,
  DQCompositeRuleEvaluationMethod,
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
  ObservationConfiguration,
  ObservationMode,
  OverwriteChildResourcePermissionsWithDefaultEnum,
  ParamType,
  ParquetCompressionType,
  Permission,
  PiiType,
  PropertyLocation,
  PropertyType,
  QuoteChar,
  RecrawlBehavior,
  ResultTypeEnum,
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
 * Specifies configuration properties of a notification.
 *
 * @public
 */
export interface NotificationProperty {
  /**
   * After a job run starts, the number of minutes to wait before sending a job run delay notification.
   *
   * @public
   */
  NotifyDelayAfter?: number | undefined;
}

/**
 * Defines an action to be initiated by a trigger.
 *
 * @public
 */
export interface Action {
  /**
   * The name of a job to be run.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.
   *
   * You can specify arguments here that your own job-execution script consumes, as well as arguments that Glue itself consumes.
   *
   * For information about how to specify and consume your own Job arguments, see the [Calling Glue APIs in Python](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) topic in the developer guide.
   *
   * For information about the key-value pairs that Glue consumes to set up your job, see the [Special Parameters Used by Glue](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html) topic in the developer guide.
   *
   * @public
   */
  Arguments?: Record<string, string> | undefined;

  /**
   * The `JobRun` timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters `TIMEOUT` status. This overrides the timeout value set in the parent job.
   *
   * Jobs must have timeout values less than 7 days or 10080 minutes. Otherwise, the jobs will throw an exception.
   *
   * When the value is left blank, the timeout is defaulted to 2,880 minutes for Glue version 4.0 and earlier, or 480 minutes for Glue version 5.0 and later.
   *
   * Any existing Glue jobs that had a timeout value greater than 7 days will be defaulted to 7 days. For instance if you have specified a timeout of 20 days for a batch job, it will be stopped on the 7th day.
   *
   * For streaming jobs, if you have set up a maintenance window, it will be restarted during the maintenance window after 7 days.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The name of the `SecurityConfiguration` structure to be used with this action.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * Specifies configuration properties of a job run notification.
   *
   * @public
   */
  NotificationProperty?: NotificationProperty | undefined;

  /**
   * The name of the crawler to be used with this action.
   *
   * @public
   */
  CrawlerName?: string | undefined;
}

/**
 * Specifies the set of parameters needed to perform aggregation in the aggregate transform.
 *
 * @public
 */
export interface AggregateOperation {
  /**
   * Specifies the column on the data set on which the aggregation function will be applied.
   *
   * @public
   */
  Column: string[] | undefined;

  /**
   * Specifies the aggregation function to apply.
   *
   * Possible aggregation functions include: avg countDistinct, count, first, last, kurtosis, max, min, skewness, stddev_samp, stddev_pop, sum, sumDistinct, var_samp, var_pop
   *
   * @public
   */
  AggFunc: AggFunction | undefined;
}

/**
 * Specifies a transform that groups rows by chosen fields and computes the aggregated value by specified function.
 *
 * @public
 */
export interface Aggregate {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the fields and rows to use as inputs for the aggregate transform.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies the fields to group by.
   *
   * @public
   */
  Groups: string[][] | undefined;

  /**
   * Specifies the aggregate functions to be performed on specified fields.
   *
   * @public
   */
  Aggs: AggregateOperation[] | undefined;
}

/**
 * An object representing a value allowed for a property.
 *
 * @public
 */
export interface AllowedValue {
  /**
   * A description of the allowed value.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The value allowed for the property.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Specifies an optional value when connecting to the Redshift cluster.
 *
 * @public
 */
export interface AmazonRedshiftAdvancedOption {
  /**
   * The key for the additional connection option.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for the additional connection option.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Specifies an option value.
 *
 * @public
 */
export interface Option {
  /**
   * Specifies the value of the option.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Specifies the label of the option.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * Specifies the description of the option.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Specifies an Amazon Redshift node.
 *
 * @public
 */
export interface AmazonRedshiftNodeData {
  /**
   * The access type for the Redshift connection. Can be a direct connection or catalog connections.
   *
   * @public
   */
  AccessType?: string | undefined;

  /**
   * The source type to specify whether a specific table is the source or a custom query.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The Glue connection to the Redshift cluster.
   *
   * @public
   */
  Connection?: Option | undefined;

  /**
   * The Redshift schema name when working with a direct connection.
   *
   * @public
   */
  Schema?: Option | undefined;

  /**
   * The Redshift table name when working with a direct connection.
   *
   * @public
   */
  Table?: Option | undefined;

  /**
   * The name of the Glue Data Catalog database when working with a data catalog.
   *
   * @public
   */
  CatalogDatabase?: Option | undefined;

  /**
   * The Glue Data Catalog table name when working with a data catalog.
   *
   * @public
   */
  CatalogTable?: Option | undefined;

  /**
   * The Redshift schema name when working with a data catalog.
   *
   * @public
   */
  CatalogRedshiftSchema?: string | undefined;

  /**
   * The database table to read from.
   *
   * @public
   */
  CatalogRedshiftTable?: string | undefined;

  /**
   * The Amazon S3 path where temporary data can be staged when copying out of the database.
   *
   * @public
   */
  TempDir?: string | undefined;

  /**
   * Optional. The role name use when connection to S3. The IAM role ill default to the role on the job when left blank.
   *
   * @public
   */
  IamRole?: Option | undefined;

  /**
   * Optional values when connecting to the Redshift cluster.
   *
   * @public
   */
  AdvancedOptions?: AmazonRedshiftAdvancedOption[] | undefined;

  /**
   * The SQL used to fetch the data from a Redshift sources when the SourceType is 'query'.
   *
   * @public
   */
  SampleQuery?: string | undefined;

  /**
   * The SQL used before a MERGE or APPEND with upsert is run.
   *
   * @public
   */
  PreAction?: string | undefined;

  /**
   * The SQL used before a MERGE or APPEND with upsert is run.
   *
   * @public
   */
  PostAction?: string | undefined;

  /**
   * Specifies how writing to a Redshift cluser will occur.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * Specifies the prefix to a table.
   *
   * @public
   */
  TablePrefix?: string | undefined;

  /**
   * The action used on Redshift sinks when doing an APPEND.
   *
   * @public
   */
  Upsert?: boolean | undefined;

  /**
   * The action used when to detemine how a MERGE in a Redshift sink will be handled.
   *
   * @public
   */
  MergeAction?: string | undefined;

  /**
   * The action used when to detemine how a MERGE in a Redshift sink will be handled when an existing record matches a new record.
   *
   * @public
   */
  MergeWhenMatched?: string | undefined;

  /**
   * The action used when to detemine how a MERGE in a Redshift sink will be handled when an existing record doesn't match a new record.
   *
   * @public
   */
  MergeWhenNotMatched?: string | undefined;

  /**
   * The SQL used in a custom merge to deal with matching records.
   *
   * @public
   */
  MergeClause?: string | undefined;

  /**
   * Specifies the name of the connection that is associated with the catalog table used.
   *
   * @public
   */
  CrawlerConnection?: string | undefined;

  /**
   * The array of schema output for a given node.
   *
   * @public
   */
  TableSchema?: Option[] | undefined;

  /**
   * The name of the temporary staging table that is used when doing a MERGE or APPEND with upsert.
   *
   * @public
   */
  StagingTable?: string | undefined;

  /**
   * The list of column names used to determine a matching record when doing a MERGE or APPEND with upsert.
   *
   * @public
   */
  SelectedColumns?: Option[] | undefined;
}

/**
 * Specifies an Amazon Redshift source.
 *
 * @public
 */
export interface AmazonRedshiftSource {
  /**
   * The name of the Amazon Redshift source.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the data of the Amazon Reshift source node.
   *
   * @public
   */
  Data?: AmazonRedshiftNodeData | undefined;
}

/**
 * Specifies an Amazon Redshift target.
 *
 * @public
 */
export interface AmazonRedshiftTarget {
  /**
   * The name of the Amazon Redshift target.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the data of the Amazon Redshift target node.
   *
   * @public
   */
  Data?: AmazonRedshiftNodeData | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs?: string[] | undefined;
}

/**
 * A failed annotation.
 *
 * @public
 */
export interface AnnotationError {
  /**
   * The Profile ID for the failed annotation.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The Statistic ID for the failed annotation.
   *
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * The reason why the annotation failed.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * A timestamped inclusion annotation.
 *
 * @public
 */
export interface TimestampedInclusionAnnotation {
  /**
   * The inclusion annotation value.
   *
   * @public
   */
  Value?: InclusionAnnotationValue | undefined;

  /**
   * The timestamp when the inclusion annotation was last modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;
}

/**
 * A Statistic Annotation.
 *
 * @public
 */
export interface StatisticAnnotation {
  /**
   * The Profile ID.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The Statistic ID.
   *
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * The timestamp when the annotated statistic was recorded.
   *
   * @public
   */
  StatisticRecordedOn?: Date | undefined;

  /**
   * The inclusion annotation applied to the statistic.
   *
   * @public
   */
  InclusionAnnotation?: TimestampedInclusionAnnotation | undefined;
}

/**
 * A form on an asset, consisting of the form type identifier and its JSON content.
 *
 * @public
 */
export interface AssetFormEntry {
  /**
   * The identifier of the form type that defines this form's schema.
   *
   * @public
   */
  FormTypeId?: string | undefined;

  /**
   * The JSON content of the form, conforming to the schema of the specified form type.
   *
   * @public
   */
  Content?: string | undefined;
}

/**
 * A reference to a form type that is included in an asset type.
 *
 * @public
 */
export interface AssetTypeFormReference {
  /**
   * The identifier of the referenced form type.
   *
   * @public
   */
  FormTypeIdentifier: string | undefined;
}

/**
 * A summary of an asset type.
 *
 * @public
 */
export interface AssetTypeItem {
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
}

/**
 * @public
 */
export interface AssociateGlossaryTermsRequest {
  /**
   * The unique identifier of the asset to associate glossary terms with.
   *
   * @public
   */
  AssetIdentifier: string | undefined;

  /**
   * The name of the iterable form. When specified along with `itemIdentifier`, the glossary terms are associated with an item within the iterable form rather than the asset itself.
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
   * The list of glossary term identifiers to associate with the asset.
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
export interface AssociateGlossaryTermsResponse {
  /**
   * The unique identifier of the asset.
   *
   * @public
   */
  AssetIdentifier?: string | undefined;

  /**
   * The name of the iterable form, if the association targets an item.
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
   * The glossary terms now associated with the asset.
   *
   * @public
   */
  GlossaryTerms?: string[] | undefined;
}

/**
 * Specifies a single column in a Glue schema definition.
 *
 * @public
 */
export interface GlueStudioSchemaColumn {
  /**
   * The name of the column in the Glue Studio schema.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The hive type for this column in the Glue Studio schema.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The data type of the column as defined in Glue Studio.
   *
   * @public
   */
  GlueStudioType?: string | undefined;
}

/**
 * Specifies a user-defined schema when a schema cannot be determined by Glue.
 *
 * @public
 */
export interface GlueSchema {
  /**
   * Specifies the column definitions that make up a Glue schema.
   *
   * @public
   */
  Columns?: GlueStudioSchemaColumn[] | undefined;
}

/**
 * Specifies a connector to an Amazon Athena data source.
 *
 * @public
 */
export interface AthenaConnectorSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the connection that is associated with the connector.
   *
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * The name of a connector that assists with accessing the data store in Glue Studio.
   *
   * @public
   */
  ConnectorName: string | undefined;

  /**
   * The type of connection, such as marketplace.athena or custom.athena, designating a connection to an Amazon Athena data store.
   *
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * The name of the table in the data source.
   *
   * @public
   */
  ConnectionTable?: string | undefined;

  /**
   * The name of the Cloudwatch log group to read from. For example, `/aws-glue/jobs/output`.
   *
   * @public
   */
  SchemaName: string | undefined;

  /**
   * Specifies the data schema for the custom Athena source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * A structure containing the Lake Formation audit context.
 *
 * @public
 */
export interface AuditContext {
  /**
   * A string containing the additional audit context information.
   *
   * @public
   */
  AdditionalAuditContext?: string | undefined;

  /**
   * The requested columns for audit.
   *
   * @public
   */
  RequestedColumns?: string[] | undefined;

  /**
   * All columns request for audit.
   *
   * @public
   */
  AllColumnsRequested?: boolean | undefined;
}

/**
 * An object that defines a connection type for a compute environment.
 *
 * @public
 */
export interface Property {
  /**
   * The name of the property.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the property.
   *
   * @public
   */
  Description: string | undefined;

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
   * Describes the type of property.
   *
   * @public
   */
  PropertyTypes: PropertyType[] | undefined;

  /**
   * A list of `AllowedValue` objects representing the values allowed for the property.
   *
   * @public
   */
  AllowedValues?: AllowedValue[] | undefined;

  /**
   * Indicates which data operations are applicable to the property.
   *
   * @public
   */
  DataOperationScopes?: DataOperation[] | undefined;

  /**
   * A key name to use when sending this property in API requests, if different from the display name.
   *
   * @public
   */
  KeyOverride?: string | undefined;

  /**
   * Specifies where this property should be included in REST requests, such as in headers, query parameters, or request body.
   *
   * @public
   */
  PropertyLocation?: PropertyLocation | undefined;
}

/**
 * The authentication configuration for a connection returned by the `DescribeConnectionType` API.
 *
 * @public
 */
export interface AuthConfiguration {
  /**
   * The type of authentication for a connection.
   *
   * @public
   */
  AuthenticationType: Property | undefined;

  /**
   * The Amazon Resource Name (ARN) for the Secrets Manager.
   *
   * @public
   */
  SecretArn?: Property | undefined;

  /**
   * A map of key-value pairs for the OAuth2 properties. Each value is a a `Property` object.
   *
   * @public
   */
  OAuth2Properties?: Record<string, Property> | undefined;

  /**
   * A map of key-value pairs for the OAuth2 properties. Each value is a a `Property` object.
   *
   * @public
   */
  BasicAuthenticationProperties?: Record<string, Property> | undefined;

  /**
   * A map of key-value pairs for the custom authentication properties. Each value is a a `Property` object.
   *
   * @public
   */
  CustomAuthenticationProperties?: Record<string, Property> | undefined;
}

/**
 * The OAuth2 client app used for the connection.
 *
 * @public
 */
export interface OAuth2ClientApplication {
  /**
   * The client application clientID if the ClientAppType is `USER_MANAGED`.
   *
   * @public
   */
  UserManagedClientApplicationClientId?: string | undefined;

  /**
   * The reference to the SaaS-side client app that is Amazon Web Services managed.
   *
   * @public
   */
  AWSManagedClientApplicationReference?: string | undefined;
}

/**
 * A structure containing properties for OAuth2 authentication.
 *
 * @public
 */
export interface OAuth2Properties {
  /**
   * The OAuth2 grant type. For example, `AUTHORIZATION_CODE`, `JWT_BEARER`, `REFRESH_TOKEN`, or `CLIENT_CREDENTIALS`.
   *
   * @public
   */
  OAuth2GrantType?: OAuth2GrantType | undefined;

  /**
   * The client application type. For example, AWS_MANAGED or USER_MANAGED.
   *
   * @public
   */
  OAuth2ClientApplication?: OAuth2ClientApplication | undefined;

  /**
   * The URL of the provider's authentication server, to exchange an authorization code for an access token.
   *
   * @public
   */
  TokenUrl?: string | undefined;

  /**
   * A map of parameters that are added to the token `GET` request.
   *
   * @public
   */
  TokenUrlParametersMap?: Record<string, string> | undefined;
}

/**
 * A structure containing the authentication configuration.
 *
 * @public
 */
export interface AuthenticationConfiguration {
  /**
   * A structure containing the authentication configuration.
   *
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * The secret manager ARN to store credentials.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive authentication information. This key is used to protect credentials and other sensitive data stored within the authentication configuration.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The properties for OAuth2 authentication.
   *
   * @public
   */
  OAuth2Properties?: OAuth2Properties | undefined;
}

/**
 * For supplying basic auth credentials when not providing a `SecretArn` value.
 *
 * @public
 */
export interface BasicAuthenticationCredentials {
  /**
   * The username to connect to the data source.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The password to connect to the data source.
   *
   * @public
   */
  Password?: string | undefined;
}

/**
 * The set of properties required for the the OAuth2 `AUTHORIZATION_CODE` grant type workflow.
 *
 * @public
 */
export interface AuthorizationCodeProperties {
  /**
   * An authorization code to be used in the third leg of the `AUTHORIZATION_CODE` grant workflow. This is a single-use code which becomes invalid once exchanged for an access token, thus it is acceptable to have this value as a request parameter.
   *
   * @public
   */
  AuthorizationCode?: string | undefined;

  /**
   * The redirect URI where the user gets redirected to by authorization server when issuing an authorization code. The URI is subsequently used when the authorization code is exchanged for an access token.
   *
   * @public
   */
  RedirectUri?: string | undefined;
}

/**
 * The credentials used when the authentication type is OAuth2 authentication.
 *
 * @public
 */
export interface OAuth2Credentials {
  /**
   * The client application client secret if the client application is user managed.
   *
   * @public
   */
  UserManagedClientApplicationClientSecret?: string | undefined;

  /**
   * The access token used when the authentication type is OAuth2.
   *
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * The refresh token used when the authentication type is OAuth2.
   *
   * @public
   */
  RefreshToken?: string | undefined;

  /**
   * The JSON Web Token (JWT) used when the authentication type is OAuth2.
   *
   * @public
   */
  JwtToken?: string | undefined;
}

/**
 * A structure containing properties for OAuth2 in the CreateConnection request.
 *
 * @public
 */
export interface OAuth2PropertiesInput {
  /**
   * The OAuth2 grant type in the CreateConnection request. For example, `AUTHORIZATION_CODE`, `JWT_BEARER`, `REFRESH_TOKEN`, or `CLIENT_CREDENTIALS`.
   *
   * @public
   */
  OAuth2GrantType?: OAuth2GrantType | undefined;

  /**
   * The client application type in the CreateConnection request. For example, `AWS_MANAGED` or `USER_MANAGED`.
   *
   * @public
   */
  OAuth2ClientApplication?: OAuth2ClientApplication | undefined;

  /**
   * The URL of the provider's authentication server, to exchange an authorization code for an access token.
   *
   * @public
   */
  TokenUrl?: string | undefined;

  /**
   * A map of parameters that are added to the token `GET` request.
   *
   * @public
   */
  TokenUrlParametersMap?: Record<string, string> | undefined;

  /**
   * The set of properties required for the the OAuth2 `AUTHORIZATION_CODE` grant type.
   *
   * @public
   */
  AuthorizationCodeProperties?: AuthorizationCodeProperties | undefined;

  /**
   * The credentials used when the authentication type is OAuth2 authentication.
   *
   * @public
   */
  OAuth2Credentials?: OAuth2Credentials | undefined;
}

/**
 * A structure containing the authentication configuration in the CreateConnection request.
 *
 * @public
 */
export interface AuthenticationConfigurationInput {
  /**
   * A structure containing the authentication configuration in the CreateConnection request.
   *
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * The properties for OAuth2 authentication in the CreateConnection request.
   *
   * @public
   */
  OAuth2Properties?: OAuth2PropertiesInput | undefined;

  /**
   * The secret manager ARN to store credentials in the CreateConnection request.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The ARN of the KMS key used to encrypt the connection. Only taken an as input in the request and stored in the Secret Manager.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The credentials used when the authentication type is basic authentication.
   *
   * @public
   */
  BasicAuthenticationCredentials?: BasicAuthenticationCredentials | undefined;

  /**
   * The credentials used when the authentication type is custom authentication.
   *
   * @public
   */
  CustomAuthenticationCredentials?: Record<string, string> | undefined;
}

/**
 * Specifies configuration options for automatic data quality evaluation in Glue jobs. This structure enables automated data quality checks and monitoring during ETL operations, helping to ensure data integrity and reliability without manual intervention.
 *
 * @public
 */
export interface AutoDataQuality {
  /**
   * Specifies whether automatic data quality evaluation is enabled. When set to `true`, data quality checks are performed automatically.
   *
   * @public
   */
  IsEnabled?: boolean | undefined;

  /**
   * The evaluation context for the automatic data quality checks. This defines the scope and parameters for the data quality evaluation.
   *
   * @public
   */
  EvaluationContext?: string | undefined;
}

/**
 * A column in a `Table`.
 *
 * @public
 */
export interface Column {
  /**
   * The name of the `Column`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data type of the `Column`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * A free-form text comment.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * These key-value pairs define properties associated with the column.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * The unique ID of the schema in the Glue schema registry.
 *
 * @public
 */
export interface SchemaId {
  /**
   * The Amazon Resource Name (ARN) of the schema. One of `SchemaArn` or `SchemaName` has to be provided.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name of the schema. One of `SchemaArn` or `SchemaName` has to be provided.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The name of the schema registry that contains the schema.
   *
   * @public
   */
  RegistryName?: string | undefined;
}

/**
 * An object that references a schema stored in the Glue Schema Registry.
 *
 * @public
 */
export interface SchemaReference {
  /**
   * A structure that contains schema identity fields. Either this or the `SchemaVersionId` has to be provided.
   *
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * The unique ID assigned to a version of the schema. Either this or the `SchemaId` has to be provided.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  SchemaVersionNumber?: number | undefined;
}

/**
 * Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader.
 *
 * @public
 */
export interface SerDeInfo {
  /**
   * Name of the SerDe.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Usually the class that implements the SerDe. An example is `org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe`.
   *
   * @public
   */
  SerializationLibrary?: string | undefined;

  /**
   * These key-value pairs define initialization parameters for the SerDe.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * Specifies skewed values in a table. Skewed values are those that occur with very high frequency.
 *
 * @public
 */
export interface SkewedInfo {
  /**
   * A list of names of columns that contain skewed values.
   *
   * @public
   */
  SkewedColumnNames?: string[] | undefined;

  /**
   * A list of values that appear so frequently as to be considered skewed.
   *
   * @public
   */
  SkewedColumnValues?: string[] | undefined;

  /**
   * A mapping of skewed values to the columns that contain them.
   *
   * @public
   */
  SkewedColumnValueLocationMaps?: Record<string, string> | undefined;
}

/**
 * Specifies the sort order of a sorted column.
 *
 * @public
 */
export interface Order {
  /**
   * The name of the column.
   *
   * @public
   */
  Column: string | undefined;

  /**
   * Indicates that the column is sorted in ascending order (`== 1`), or in descending order (`==0`).
   *
   * @public
   */
  SortOrder: number | undefined;
}

/**
 * Describes the physical storage of table data.
 *
 * @public
 */
export interface StorageDescriptor {
  /**
   * A list of the `Columns` in the table.
   *
   * @public
   */
  Columns?: Column[] | undefined;

  /**
   * The physical location of the table. By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * A list of locations that point to the path where a Delta table is located.
   *
   * @public
   */
  AdditionalLocations?: string[] | undefined;

  /**
   * The input format: `SequenceFileInputFormat` (binary), or `TextInputFormat`, or a custom format.
   *
   * @public
   */
  InputFormat?: string | undefined;

  /**
   * The output format: `SequenceFileOutputFormat` (binary), or `IgnoreKeyTextOutputFormat`, or a custom format.
   *
   * @public
   */
  OutputFormat?: string | undefined;

  /**
   * `True` if the data in the table is compressed, or `False` if not.
   *
   * @public
   */
  Compressed?: boolean | undefined;

  /**
   * Must be specified if the table contains any dimension columns.
   *
   * @public
   */
  NumberOfBuckets?: number | undefined;

  /**
   * The serialization/deserialization (SerDe) information.
   *
   * @public
   */
  SerdeInfo?: SerDeInfo | undefined;

  /**
   * A list of reducer grouping columns, clustering columns, and bucketing columns in the table.
   *
   * @public
   */
  BucketColumns?: string[] | undefined;

  /**
   * A list specifying the sort order of each bucket in the table.
   *
   * @public
   */
  SortColumns?: Order[] | undefined;

  /**
   * The user-supplied properties in key-value form.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * The information about values that appear frequently in a column (skewed values).
   *
   * @public
   */
  SkewedInfo?: SkewedInfo | undefined;

  /**
   * `True` if the table data is stored in subdirectories, or `False` if not.
   *
   * @public
   */
  StoredAsSubDirectories?: boolean | undefined;

  /**
   * An object that references a schema stored in the Glue Schema Registry.
   *
   * When creating a table, you can pass an empty list of columns for the schema, and instead use a schema reference.
   *
   * @public
   */
  SchemaReference?: SchemaReference | undefined;
}

/**
 * The structure used to create and update a partition.
 *
 * @public
 */
export interface PartitionInput {
  /**
   * The values of the partition. Although this parameter is not required by the SDK, you must specify this parameter for a valid input.
   *
   * The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise Glue will add the values to the wrong keys.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The last time at which the partition was accessed.
   *
   * @public
   */
  LastAccessTime?: Date | undefined;

  /**
   * Provides information about the physical location where the partition is stored.
   *
   * @public
   */
  StorageDescriptor?: StorageDescriptor | undefined;

  /**
   * These key-value pairs define partition parameters.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * The last time at which column statistics were computed for this partition.
   *
   * @public
   */
  LastAnalyzedTime?: Date | undefined;
}

/**
 * @public
 */
export interface BatchCreatePartitionRequest {
  /**
   * The ID of the catalog in which the partition is to be created. Currently, this should be the Amazon Web Services account ID.
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
   * A list of `PartitionInput` structures that define the partitions to be created.
   *
   * @public
   */
  PartitionInputList: PartitionInput[] | undefined;
}

/**
 * Contains details about an error.
 *
 * @public
 */
export interface ErrorDetail {
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
 * Contains information about a partition error.
 *
 * @public
 */
export interface PartitionError {
  /**
   * The values that define the partition.
   *
   * @public
   */
  PartitionValues?: string[] | undefined;

  /**
   * The details about the partition error.
   *
   * @public
   */
  ErrorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface BatchCreatePartitionResponse {
  /**
   * The errors encountered when trying to create the requested partitions.
   *
   * @public
   */
  Errors?: PartitionError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteConnectionRequest {
  /**
   * The ID of the Data Catalog in which the connections reside. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A list of names of the connections to delete.
   *
   * @public
   */
  ConnectionNameList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteConnectionResponse {
  /**
   * A list of names of the connection definitions that were successfully deleted.
   *
   * @public
   */
  Succeeded?: string[] | undefined;

  /**
   * A map of the names of connections that were not successfully deleted to error details.
   *
   * @public
   */
  Errors?: Record<string, ErrorDetail> | undefined;
}

/**
 * Contains a list of values defining partitions.
 *
 * @public
 */
export interface PartitionValueList {
  /**
   * The list of values.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePartitionRequest {
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
   * The name of the table that contains the partitions to be deleted.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A list of `PartitionInput` structures that define the partitions to be deleted.
   *
   * @public
   */
  PartitionsToDelete: PartitionValueList[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePartitionResponse {
  /**
   * The errors encountered when trying to delete the requested partitions.
   *
   * @public
   */
  Errors?: PartitionError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTableRequest {
  /**
   * The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database in which the tables to delete reside. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * A list of the table to delete.
   *
   * @public
   */
  TablesToDelete: string[] | undefined;

  /**
   * The transaction ID at which to delete the table contents.
   *
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * An error record for table operations.
 *
 * @public
 */
export interface TableError {
  /**
   * The name of the table. For Hive compatibility, this must be entirely lowercase.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The details about the error.
   *
   * @public
   */
  ErrorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTableResponse {
  /**
   * A list of errors encountered in attempting to delete the specified tables.
   *
   * @public
   */
  Errors?: TableError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTableVersionRequest {
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
   * A list of the IDs of versions to be deleted. A `VersionId` is a string representation of an integer. Each version is incremented by 1.
   *
   * @public
   */
  VersionIds: string[] | undefined;
}

/**
 * An error record for table-version operations.
 *
 * @public
 */
export interface TableVersionError {
  /**
   * The name of the table in question.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The ID value of the version in question. A `VersionID` is a string representation of an integer. Each version is incremented by 1.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The details about the error.
   *
   * @public
   */
  ErrorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTableVersionResponse {
  /**
   * A list of errors encountered while trying to delete the specified table versions.
   *
   * @public
   */
  Errors?: TableVersionError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetBlueprintsRequest {
  /**
   * A list of blueprint names.
   *
   * @public
   */
  Names: string[] | undefined;

  /**
   * Specifies whether or not to include the blueprint in the response.
   *
   * @public
   */
  IncludeBlueprint?: boolean | undefined;

  /**
   * Specifies whether or not to include the parameters, as a JSON string, for the blueprint in the response.
   *
   * @public
   */
  IncludeParameterSpec?: boolean | undefined;
}

/**
 * When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.
 *
 * @public
 */
export interface LastActiveDefinition {
  /**
   * The description of the blueprint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time the blueprint was last modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * A JSON string specifying the parameters for the blueprint.
   *
   * @public
   */
  ParameterSpec?: string | undefined;

  /**
   * Specifies a path in Amazon S3 where the blueprint is published by the Glue developer.
   *
   * @public
   */
  BlueprintLocation?: string | undefined;

  /**
   * Specifies a path in Amazon S3 where the blueprint is copied when you create or update the blueprint.
   *
   * @public
   */
  BlueprintServiceLocation?: string | undefined;
}

/**
 * The details of a blueprint.
 *
 * @public
 */
export interface Blueprint {
  /**
   * The name of the blueprint.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the blueprint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time the blueprint was registered.
   *
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * The date and time the blueprint was last modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * A JSON string that indicates the list of parameter specifications for the blueprint.
   *
   * @public
   */
  ParameterSpec?: string | undefined;

  /**
   * Specifies the path in Amazon S3 where the blueprint is published.
   *
   * @public
   */
  BlueprintLocation?: string | undefined;

  /**
   * Specifies a path in Amazon S3 where the blueprint is copied when you call `CreateBlueprint/UpdateBlueprint` to register the blueprint in Glue.
   *
   * @public
   */
  BlueprintServiceLocation?: string | undefined;

  /**
   * The status of the blueprint registration.
   *
   * - Creating — The blueprint registration is in progress.
   * - Active — The blueprint has been successfully registered.
   * - Updating — An update to the blueprint registration is in progress.
   * - Failed — The blueprint registration failed.
   *
   * @public
   */
  Status?: BlueprintStatus | undefined;

  /**
   * An error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.
   *
   * @public
   */
  LastActiveDefinition?: LastActiveDefinition | undefined;
}

/**
 * @public
 */
export interface BatchGetBlueprintsResponse {
  /**
   * Returns a list of blueprint as a `Blueprints` object.
   *
   * @public
   */
  Blueprints?: Blueprint[] | undefined;

  /**
   * Returns a list of `BlueprintNames` that were not found.
   *
   * @public
   */
  MissingBlueprints?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCrawlersRequest {
  /**
   * A list of crawler names, which might be the names returned from the `ListCrawlers` operation.
   *
   * @public
   */
  CrawlerNames: string[] | undefined;
}

/**
 * Specifies Lake Formation configuration settings for the crawler.
 *
 * @public
 */
export interface LakeFormationConfiguration {
  /**
   * Specifies whether to use Lake Formation credentials for the crawler instead of the IAM role credentials.
   *
   * @public
   */
  UseLakeFormationCredentials?: boolean | undefined;

  /**
   * Required for cross account crawls. For same account crawls as the target data, this can be left as null.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * Status and error information about the most recent crawl.
 *
 * @public
 */
export interface LastCrawlInfo {
  /**
   * Status of the last crawl.
   *
   * @public
   */
  Status?: LastCrawlStatus | undefined;

  /**
   * If an error occurred, the error information about the last crawl.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The log group for the last crawl.
   *
   * @public
   */
  LogGroup?: string | undefined;

  /**
   * The log stream for the last crawl.
   *
   * @public
   */
  LogStream?: string | undefined;

  /**
   * The prefix for a message about this crawl.
   *
   * @public
   */
  MessagePrefix?: string | undefined;

  /**
   * The time at which the crawl started.
   *
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * Specifies data lineage configuration settings for the crawler.
 *
 * @public
 */
export interface LineageConfiguration {
  /**
   * Specifies whether data lineage is enabled for the crawler. Valid values are:
   *
   * - ENABLE: enables data lineage for the crawler
   * - DISABLE: disables data lineage for the crawler
   *
   * @public
   */
  CrawlerLineageSettings?: CrawlerLineageSettings | undefined;
}

/**
 * When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see [Incremental Crawls in Glue](https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html) in the developer guide.
 *
 * @public
 */
export interface RecrawlPolicy {
  /**
   * Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.
   *
   * A value of `CRAWL_EVERYTHING` specifies crawling the entire dataset again.
   *
   * A value of `CRAWL_NEW_FOLDERS_ONLY` specifies crawling only folders that were added since the last crawler run.
   *
   * A value of `CRAWL_EVENT_MODE` specifies crawling only the changes identified by Amazon S3 events.
   *
   * @public
   */
  RecrawlBehavior?: RecrawlBehavior | undefined;
}

/**
 * A scheduling object using a `cron` statement to schedule an event.
 *
 * @public
 */
export interface Schedule {
  /**
   * A `cron` expression used to specify the schedule (see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 * * ? *)`.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * The state of the schedule.
   *
   * @public
   */
  State?: ScheduleState | undefined;
}

/**
 * A policy that specifies update and deletion behaviors for the crawler.
 *
 * @public
 */
export interface SchemaChangePolicy {
  /**
   * The update behavior when the crawler finds a changed schema.
   *
   * @public
   */
  UpdateBehavior?: UpdateBehavior | undefined;

  /**
   * The deletion behavior when the crawler finds a deleted object.
   *
   * @public
   */
  DeleteBehavior?: DeleteBehavior | undefined;
}

/**
 * Specifies an Glue Data Catalog target.
 *
 * @public
 */
export interface CatalogTarget {
  /**
   * The name of the database to be synchronized.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * A list of the tables to be synchronized.
   *
   * @public
   */
  Tables: string[] | undefined;

  /**
   * The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a `Catalog` connection type paired with a `NETWORK` Connection type.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * A valid Amazon SQS ARN. For example, `arn:aws:sqs:region:account:sqs`.
   *
   * @public
   */
  EventQueueArn?: string | undefined;

  /**
   * A valid Amazon dead-letter SQS ARN. For example, `arn:aws:sqs:region:account:deadLetterQueue`.
   *
   * @public
   */
  DlqEventQueueArn?: string | undefined;
}

/**
 * Specifies a Delta data store to crawl one or more Delta tables.
 *
 * @public
 */
export interface DeltaTarget {
  /**
   * A list of the Amazon S3 paths to the Delta tables.
   *
   * @public
   */
  DeltaTables?: string[] | undefined;

  /**
   * The name of the connection to use to connect to the Delta table target.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * Specifies whether to write the manifest files to the Delta table path.
   *
   * @public
   */
  WriteManifest?: boolean | undefined;

  /**
   * Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.
   *
   * @public
   */
  CreateNativeDeltaTable?: boolean | undefined;
}

/**
 * Specifies an Amazon DynamoDB table to crawl.
 *
 * @public
 */
export interface DynamoDBTarget {
  /**
   * The name of the DynamoDB table to crawl.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table.
   *
   * A value of `true` means to scan all records, while a value of `false` means to sample the records. If no value is specified, the value defaults to `true`.
   *
   * @public
   */
  scanAll?: boolean | undefined;

  /**
   * The percentage of the configured read capacity units to use by the Glue crawler. Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.
   *
   * The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode).
   *
   * @public
   */
  scanRate?: number | undefined;
}

/**
 * Specifies an Apache Hudi data source.
 *
 * @public
 */
export interface HudiTarget {
  /**
   * An array of Amazon S3 location strings for Hudi, each indicating the root folder with which the metadata files for a Hudi table resides. The Hudi folder may be located in a child folder of the root folder.
   *
   * The crawler will scan all folders underneath a path for a Hudi folder.
   *
   * @public
   */
  Paths?: string[] | undefined;

  /**
   * The name of the connection to use to connect to the Hudi target. If your Hudi files are stored in buckets that require VPC authorization, you can set their connection properties here.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * A list of glob patterns used to exclude from the crawl. For more information, see [Catalog Tables with a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html).
   *
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path. Used to limit the crawler run time.
   *
   * @public
   */
  MaximumTraversalDepth?: number | undefined;
}

/**
 * Specifies an Apache Iceberg data source where Iceberg tables are stored in Amazon S3.
 *
 * @public
 */
export interface IcebergTarget {
  /**
   * One or more Amazon S3 paths that contains Iceberg metadata folders as `s3://bucket/prefix`.
   *
   * @public
   */
  Paths?: string[] | undefined;

  /**
   * The name of the connection to use to connect to the Iceberg target.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * A list of glob patterns used to exclude from the crawl. For more information, see [Catalog Tables with a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html).
   *
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. Used to limit the crawler run time.
   *
   * @public
   */
  MaximumTraversalDepth?: number | undefined;
}

/**
 * Specifies a JDBC data store to crawl.
 *
 * @public
 */
export interface JdbcTarget {
  /**
   * The name of the connection to use to connect to the JDBC target.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The path of the JDBC target.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * A list of glob patterns used to exclude from the crawl. For more information, see [Catalog Tables with a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html).
   *
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * Specify a value of `RAWTYPES` or `COMMENTS` to enable additional metadata in table responses. `RAWTYPES` provides the native-level datatype. `COMMENTS` provides comments associated with a column or table in the database.
   *
   * If you do not need additional metadata, keep the field empty.
   *
   * @public
   */
  EnableAdditionalMetadata?: JdbcMetadataEntry[] | undefined;
}

/**
 * Specifies an Amazon DocumentDB or MongoDB data store to crawl.
 *
 * @public
 */
export interface MongoDBTarget {
  /**
   * The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The path of the Amazon DocumentDB or MongoDB target (database/collection).
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table.
   *
   * A value of `true` means to scan all records, while a value of `false` means to sample the records. If no value is specified, the value defaults to `true`.
   *
   * @public
   */
  ScanAll?: boolean | undefined;
}

/**
 * Specifies a data store in Amazon Simple Storage Service (Amazon S3).
 *
 * @public
 */
export interface S3Target {
  /**
   * The path to the Amazon S3 target.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * A list of glob patterns used to exclude from the crawl. For more information, see [Catalog Tables with a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html).
   *
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.
   *
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * A valid Amazon SQS ARN. For example, `arn:aws:sqs:region:account:sqs`.
   *
   * @public
   */
  EventQueueArn?: string | undefined;

  /**
   * A valid Amazon dead-letter SQS ARN. For example, `arn:aws:sqs:region:account:deadLetterQueue`.
   *
   * @public
   */
  DlqEventQueueArn?: string | undefined;
}

/**
 * Specifies data stores to crawl.
 *
 * @public
 */
export interface CrawlerTargets {
  /**
   * Specifies Amazon Simple Storage Service (Amazon S3) targets.
   *
   * @public
   */
  S3Targets?: S3Target[] | undefined;

  /**
   * Specifies JDBC targets.
   *
   * @public
   */
  JdbcTargets?: JdbcTarget[] | undefined;

  /**
   * Specifies Amazon DocumentDB or MongoDB targets.
   *
   * @public
   */
  MongoDBTargets?: MongoDBTarget[] | undefined;

  /**
   * Specifies Amazon DynamoDB targets.
   *
   * @public
   */
  DynamoDBTargets?: DynamoDBTarget[] | undefined;

  /**
   * Specifies Glue Data Catalog targets.
   *
   * @public
   */
  CatalogTargets?: CatalogTarget[] | undefined;

  /**
   * Specifies Delta data store targets.
   *
   * @public
   */
  DeltaTargets?: DeltaTarget[] | undefined;

  /**
   * Specifies Apache Iceberg data store targets.
   *
   * @public
   */
  IcebergTargets?: IcebergTarget[] | undefined;

  /**
   * Specifies Apache Hudi data store targets.
   *
   * @public
   */
  HudiTargets?: HudiTarget[] | undefined;
}

/**
 * Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the Glue Data Catalog.
 *
 * @public
 */
export interface Crawler {
  /**
   * The name of the crawler.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * A collection of targets to crawl.
   *
   * @public
   */
  Targets?: CrawlerTargets | undefined;

  /**
   * The name of the database in which the crawler's output is stored.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * A description of the crawler.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of UTF-8 strings that specify the custom classifiers that are associated with the crawler.
   *
   * @public
   */
  Classifiers?: string[] | undefined;

  /**
   * A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.
   *
   * @public
   */
  RecrawlPolicy?: RecrawlPolicy | undefined;

  /**
   * The policy that specifies update and delete behaviors for the crawler.
   *
   * @public
   */
  SchemaChangePolicy?: SchemaChangePolicy | undefined;

  /**
   * A configuration that specifies whether data lineage is enabled for the crawler.
   *
   * @public
   */
  LineageConfiguration?: LineageConfiguration | undefined;

  /**
   * Indicates whether the crawler is running, or whether a run is pending.
   *
   * @public
   */
  State?: CrawlerState | undefined;

  /**
   * The prefix added to the names of tables that are created.
   *
   * @public
   */
  TablePrefix?: string | undefined;

  /**
   * For scheduled crawlers, the schedule when the crawler runs.
   *
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * If the crawler is running, contains the total time elapsed since the last crawl began.
   *
   * @public
   */
  CrawlElapsedTime?: number | undefined;

  /**
   * The time that the crawler was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time that the crawler was last updated.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The status of the last crawl, and potentially error information if an error occurred.
   *
   * @public
   */
  LastCrawl?: LastCrawlInfo | undefined;

  /**
   * The version of the crawler.
   *
   * @public
   */
  Version?: number | undefined;

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
   * Specifies whether the crawler should use Lake Formation credentials for the crawler instead of the IAM role credentials.
   *
   * @public
   */
  LakeFormationConfiguration?: LakeFormationConfiguration | undefined;

  /**
   * The ID of the Data Catalog in which the crawler's output is stored.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCrawlersResponse {
  /**
   * A list of crawler definitions.
   *
   * @public
   */
  Crawlers?: Crawler[] | undefined;

  /**
   * A list of names of crawlers that were not found.
   *
   * @public
   */
  CrawlersNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCustomEntityTypesRequest {
  /**
   * A list of names of the custom patterns that you want to retrieve.
   *
   * @public
   */
  Names: string[] | undefined;
}

/**
 * An object representing a custom pattern for detecting sensitive data across the columns and rows of your structured data.
 *
 * @public
 */
export interface CustomEntityType {
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
}

/**
 * @public
 */
export interface BatchGetCustomEntityTypesResponse {
  /**
   * A list of `CustomEntityType` objects representing the custom patterns that have been created.
   *
   * @public
   */
  CustomEntityTypes?: CustomEntityType[] | undefined;

  /**
   * A list of the names of custom patterns that were not found.
   *
   * @public
   */
  CustomEntityTypesNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDataQualityResultRequest {
  /**
   * A list of unique result IDs for the data quality results.
   *
   * @public
   */
  ResultIds: string[] | undefined;
}

/**
 * A summary of metrics showing the total counts of processed rows and rules, including their pass/fail statistics based on row-level results.
 *
 * @public
 */
export interface DataQualityAggregatedMetrics {
  /**
   * The total number of rows that were processed during the data quality evaluation.
   *
   * @public
   */
  TotalRowsProcessed?: number | undefined;

  /**
   * The total number of rows that passed all applicable data quality rules.
   *
   * @public
   */
  TotalRowsPassed?: number | undefined;

  /**
   * The total number of rows that failed one or more data quality rules.
   *
   * @public
   */
  TotalRowsFailed?: number | undefined;

  /**
   * The total number of data quality rules that were evaluated.
   *
   * @public
   */
  TotalRulesProcessed?: number | undefined;

  /**
   * The total number of data quality rules that passed their evaluation criteria.
   *
   * @public
   */
  TotalRulesPassed?: number | undefined;

  /**
   * The total number of data quality rules that failed their evaluation criteria.
   *
   * @public
   */
  TotalRulesFailed?: number | undefined;
}

/**
 * The distribution data for a statistic.
 *
 * @public
 */
export interface DistributionData {
  /**
   * The bin edge values for the distribution.
   *
   * @public
   */
  BinEdges?: string[] | undefined;

  /**
   * The frequency count for each bin in the distribution.
   *
   * @public
   */
  Count?: number[] | undefined;

  /**
   * The data type of the column for the distribution.
   *
   * @public
   */
  DataType?: string | undefined;
}

/**
 * Describes the result of the evaluation of a data quality analyzer.
 *
 * @public
 */
export interface DataQualityAnalyzerResult {
  /**
   * The name of the data quality analyzer.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the data quality analyzer.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An evaluation message.
   *
   * @public
   */
  EvaluationMessage?: string | undefined;

  /**
   * A map of metrics associated with the evaluation of the analyzer.
   *
   * @public
   */
  EvaluatedMetrics?: Record<string, number> | undefined;

  /**
   * A map of distribution metrics associated with the evaluation of the analyzer.
   *
   * @public
   */
  EvaluatedDistributions?: Record<string, DistributionData> | undefined;
}

/**
 * The database and table in the Glue Data Catalog that is used for input or output data for Data Quality Operations.
 *
 * @public
 */
export interface DataQualityGlueTable {
  /**
   * A database name in the Glue Data Catalog.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * A table name in the Glue Data Catalog.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A unique identifier for the Glue Data Catalog.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the connection to the Glue Data Catalog.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * Additional options for the table. Currently there are two keys supported:
   *
   * - `pushDownPredicate`: to filter on partitions without having to list and read all the files in your dataset.
   * - `catalogPartitionPredicate`: to use server-side partition pruning using partition indexes in the Glue Data Catalog.
   *
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * SQL Query of SparkSQL format that can be used to pre-process the data for the table in Glue Data Catalog, before running the Data Quality Operation.
   *
   * @public
   */
  PreProcessingQuery?: string | undefined;
}

/**
 * The database and table in the Glue Data Catalog that is used for input or output data.
 *
 * @public
 */
export interface GlueTable {
  /**
   * A database name in the Glue Data Catalog.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * A table name in the Glue Data Catalog.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A unique identifier for the Glue Data Catalog.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the connection to the Glue Data Catalog.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * Additional options for the table. Currently there are two keys supported:
   *
   * - `pushDownPredicate`: to filter on partitions without having to list and read all the files in your dataset.
   * - `catalogPartitionPredicate`: to use server-side partition pruning using partition indexes in the Glue Data Catalog.
   *
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;
}

/**
 * A data source (an Glue table) for which you want data quality results.
 *
 * @public
 */
export interface DataSource {
  /**
   * An Glue table.
   *
   * @public
   */
  GlueTable?: GlueTable | undefined;

  /**
   * An Glue table for Data Quality Operations.
   *
   * @public
   */
  DataQualityGlueTable?: DataQualityGlueTable | undefined;
}

/**
 * Describes the data quality metric value according to the analysis of historical data.
 *
 * @public
 */
export interface DataQualityMetricValues {
  /**
   * The actual value of the data quality metric.
   *
   * @public
   */
  ActualValue?: number | undefined;

  /**
   * The expected value of the data quality metric according to the analysis of historical data.
   *
   * @public
   */
  ExpectedValue?: number | undefined;

  /**
   * The lower limit of the data quality metric value according to the analysis of historical data.
   *
   * @public
   */
  LowerLimit?: number | undefined;

  /**
   * The upper limit of the data quality metric value according to the analysis of historical data.
   *
   * @public
   */
  UpperLimit?: number | undefined;
}

/**
 * Describes the metric based observation generated based on evaluated data quality metrics.
 *
 * @public
 */
export interface MetricBasedObservation {
  /**
   * The name of the data quality metric used for generating the observation.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The Statistic ID.
   *
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * An object of type `DataQualityMetricValues` representing the analysis of the data quality metric value.
   *
   * @public
   */
  MetricValues?: DataQualityMetricValues | undefined;

  /**
   * A list of new data quality rules generated as part of the observation based on the data quality metric value.
   *
   * @public
   */
  NewRules?: string[] | undefined;
}

/**
 * Describes the observation generated after evaluating the rules and analyzers.
 *
 * @public
 */
export interface DataQualityObservation {
  /**
   * A description of the data quality observation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An object of type `MetricBasedObservation` representing the observation that is based on evaluated data quality metrics.
   *
   * @public
   */
  MetricBasedObservation?: MetricBasedObservation | undefined;
}

/**
 * Describes the result of the evaluation of a data quality rule.
 *
 * @public
 */
export interface DataQualityRuleResult {
  /**
   * The name of the data quality rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the data quality rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An evaluation message.
   *
   * @public
   */
  EvaluationMessage?: string | undefined;

  /**
   * A pass or fail status for the rule.
   *
   * @public
   */
  Result?: DataQualityRuleResultStatus | undefined;

  /**
   * A map of metrics associated with the evaluation of the rule.
   *
   * @public
   */
  EvaluatedMetrics?: Record<string, number> | undefined;

  /**
   * The evaluated rule.
   *
   * @public
   */
  EvaluatedRule?: string | undefined;

  /**
   * A map containing metrics associated with the evaluation of the rule based on row-level results.
   *
   * @public
   */
  RuleMetrics?: Record<string, number> | undefined;

  /**
   * A map containing labels assigned to the data quality rule.
   *
   * @public
   */
  Labels?: Record<string, string> | undefined;
}

/**
 * Describes a data quality result.
 *
 * @public
 */
export interface DataQualityResult {
  /**
   * A unique result ID for the data quality result.
   *
   * @public
   */
  ResultId?: string | undefined;

  /**
   * The Profile ID for the data quality result.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * An aggregate data quality score. Represents the ratio of rules that passed to the total number of rules.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The table associated with the data quality result, if any.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * The name of the ruleset associated with the data quality result.
   *
   * @public
   */
  RulesetName?: string | undefined;

  /**
   * In the context of a job in Glue Studio, each node in the canvas is typically assigned some sort of name and data quality nodes will have names. In the case of multiple nodes, the `evaluationContext` can differentiate the nodes.
   *
   * @public
   */
  EvaluationContext?: string | undefined;

  /**
   * The date and time when this data quality run started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The date and time when this data quality run completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The job name associated with the data quality result, if any.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The job run ID associated with the data quality result, if any.
   *
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * The unique run ID for the ruleset evaluation for this data quality result.
   *
   * @public
   */
  RulesetEvaluationRunId?: string | undefined;

  /**
   * A list of `DataQualityRuleResult` objects representing the results for each rule.
   *
   * @public
   */
  RuleResults?: DataQualityRuleResult[] | undefined;

  /**
   * A list of `DataQualityAnalyzerResult` objects representing the results for each analyzer.
   *
   * @public
   */
  AnalyzerResults?: DataQualityAnalyzerResult[] | undefined;

  /**
   * A list of `DataQualityObservation` objects representing the anomaly detection observations generated after evaluating the rules and analyzers.
   *
   * @public
   */
  Observations?: DataQualityObservation[] | undefined;

  /**
   * A summary of `DataQualityAggregatedMetrics` objects showing the total counts of processed rows and rules, including their pass/fail statistics based on row-level results.
   *
   * @public
   */
  AggregatedMetrics?: DataQualityAggregatedMetrics | undefined;
}

/**
 * @public
 */
export interface BatchGetDataQualityResultResponse {
  /**
   * A list of `DataQualityResult` objects representing the data quality results.
   *
   * @public
   */
  Results: DataQualityResult[] | undefined;

  /**
   * A list of result IDs for which results were not found.
   *
   * @public
   */
  ResultsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDataQualityResultV2Request {
  /**
   * A list of unique result IDs for the data quality results.
   *
   * @public
   */
  ResultIds: string[] | undefined;
}

/**
 * Describes a data quality result returned by `BatchGetDataQualityResultV2`.
 *
 * @public
 */
export interface DataQualityResultV2Item {
  /**
   * A unique result ID for the data quality result.
   *
   * @public
   */
  ResultId: string | undefined;

  /**
   * The table associated with the data quality result, if any.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * A map of platform-specific identifiers, such as cluster, application, workgroup, or project IDs, that identify where the data quality evaluation ran.
   *
   * @public
   */
  Dimensions?: Record<string, string> | undefined;

  /**
   * A map of tags associated with the data quality result.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The date and time when this data quality run started.
   *
   * @public
   */
  ExecutionStartedOn?: Date | undefined;

  /**
   * The date and time when this data quality run completed.
   *
   * @public
   */
  ExecutionCompletedOn?: Date | undefined;

  /**
   * The date and time when this data quality result was published.
   *
   * @public
   */
  ResultPublishedOn?: Date | undefined;

  /**
   * An aggregate data quality score. Represents the ratio of rules that passed to the total number of rules.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * A list of `DataQualityRuleResult` objects representing the results for each rule.
   *
   * @public
   */
  RuleResults?: DataQualityRuleResult[] | undefined;

  /**
   * A list of `DataQualityAnalyzerResult` objects representing the results for each analyzer.
   *
   * @public
   */
  AnalyzerResults?: DataQualityAnalyzerResult[] | undefined;

  /**
   * A list of `DataQualityObservation` objects representing the anomaly detection observations generated after evaluating the rules and analyzers.
   *
   * @public
   */
  Observations?: DataQualityObservation[] | undefined;

  /**
   * The evaluation context for the data quality result. This value identifies a specific data quality result, or a series of related results, within a run.
   *
   * @public
   */
  EvaluationContext?: string | undefined;

  /**
   * A map of user-provided descriptors that add contextual metadata and configuration to the data quality result, such as database name, table name, team, or environment.
   *
   * @public
   */
  Descriptors?: Record<string, string> | undefined;

  /**
   * A summary of `DataQualityAggregatedMetrics` objects showing the total counts of processed rows and rules, including their pass/fail statistics based on row-level results.
   *
   * @public
   */
  AggregatedMetrics?: DataQualityAggregatedMetrics | undefined;

  /**
   * The name of the ruleset associated with the data quality result.
   *
   * @public
   */
  RulesetName?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetDataQualityResultV2Response {
  /**
   * A list of `DataQualityResultV2Item` objects representing the data quality results.
   *
   * @public
   */
  Results: DataQualityResultV2Item[] | undefined;

  /**
   * A list of result IDs for which results were not found.
   *
   * @public
   */
  ResultsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDataQualityRulesetEvaluationRunRequest {
  /**
   * A list of unique run identifiers for the evaluation runs to retrieve.
   *
   * @public
   */
  RunIds: string[] | undefined;
}

/**
 * The configuration for a Glue Data Catalog table used to store data quality results.
 *
 * @public
 */
export interface CatalogTableConfigOptions {
  /**
   * The name of the database in the Glue Data Catalog.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the table in the Glue Data Catalog.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The Amazon S3 location for storing the results.
   *
   * @public
   */
  S3Location?: string | undefined;

  /**
   * A unique identifier for the Glue Data Catalog.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * The configuration for writing data quality rule results.
 *
 * @public
 */
export interface DataQualityRuleResultsOptions {
  /**
   * Set to true to write data quality rule results.
   *
   * @public
   */
  WriteDataQualityRuleResultsEnabled?: boolean | undefined;

  /**
   * The Glue Data Catalog table configuration for storing the rule results.
   *
   * @public
   */
  CatalogTableConfig?: CatalogTableConfigOptions | undefined;
}

/**
 * The configuration for writing observation results.
 *
 * @public
 */
export interface ObservationResultsOptions {
  /**
   * Set to true to write observation results.
   *
   * @public
   */
  WriteObservationResultsEnabled?: boolean | undefined;

  /**
   * The Glue Data Catalog table configuration for storing the observation results.
   *
   * @public
   */
  CatalogTableConfig?: CatalogTableConfigOptions | undefined;
}

/**
 * The configuration for writing distribution results.
 *
 * @public
 */
export interface DistributionResultsOptions {
  /**
   * Set to true to write distribution results.
   *
   * @public
   */
  WriteDistributionResultsEnabled?: boolean | undefined;

  /**
   * The Glue Data Catalog table configuration for storing the distribution results.
   *
   * @public
   */
  CatalogTableConfig?: CatalogTableConfigOptions | undefined;
}

/**
 * The configuration for writing profiling results.
 *
 * @public
 */
export interface ProfilingResultsOptions {
  /**
   * Set to true to write profiling results.
   *
   * @public
   */
  WriteProfilingResultsEnabled?: boolean | undefined;

  /**
   * The Glue Data Catalog table configuration for storing the profiling results.
   *
   * @public
   */
  CatalogTableConfig?: CatalogTableConfigOptions | undefined;

  /**
   * The configuration for writing distribution results.
   *
   * @public
   */
  DistributionResults?: DistributionResultsOptions | undefined;
}

/**
 * The configuration for writing row-level evaluation results.
 *
 * @public
 */
export interface RowLevelResultsOptions {
  /**
   * The maximum number of rows to write in the results.
   *
   * @public
   */
  MaxRowsToWrite?: number | undefined;

  /**
   * The result type to include in the row-level results output.
   *
   * @public
   */
  ResultType?: ResultTypeEnum | undefined;

  /**
   * The Glue Data Catalog table configuration for storing the results.
   *
   * @public
   */
  CatalogTableConfig?: CatalogTableConfigOptions | undefined;
}

/**
 * Additional run options you can specify for an evaluation run.
 *
 * @public
 */
export interface DataQualityEvaluationRunAdditionalRunOptions {
  /**
   * Whether or not to enable CloudWatch metrics.
   *
   * @public
   */
  CloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * Prefix for Amazon S3 to store results.
   *
   * @public
   */
  ResultsS3Prefix?: string | undefined;

  /**
   * Set the evaluation method for composite rules in the ruleset to ROW/COLUMN
   *
   * @public
   */
  CompositeRuleEvaluationMethod?: DQCompositeRuleEvaluationMethod | undefined;

  /**
   * A custom prefix for the CloudWatch log group names. When specified, evaluation run logs are written to `<CustomLogGroupPrefix>/error` and `<CustomLogGroupPrefix>/output` instead of the default `/aws-glue/data-quality/error` and `/aws-glue/data-quality/output` log groups.
   *
   * @public
   */
  CustomLogGroupPrefix?: string | undefined;

  /**
   * The configuration for writing row-level evaluation results to a Glue Data Catalog table.
   *
   * @public
   */
  RowLevelResults?: RowLevelResultsOptions | undefined;

  /**
   * The configuration for writing profiling results to a Glue Data Catalog table.
   *
   * @public
   */
  ProfilingResults?: ProfilingResultsOptions | undefined;

  /**
   * The scope of the observation for the evaluation run. Specifies whether anomaly detection is enabled or disabled.
   *
   * @public
   */
  ObservationScope?: ObservationConfiguration | undefined;

  /**
   * The observation mode for the evaluation run. Specifies how anomaly detection bounds are calculated.
   *
   * @public
   */
  ObservationMode?: ObservationMode | undefined;

  /**
   * The configuration for writing rule results to a Glue Data Catalog table.
   *
   * @public
   */
  DataQualityRuleResults?: DataQualityRuleResultsOptions | undefined;

  /**
   * The configuration for writing observation results to a Glue Data Catalog table.
   *
   * @public
   */
  ObservationResults?: ObservationResultsOptions | undefined;
}

/**
 * The details of a data quality ruleset evaluation run.
 *
 * @public
 */
export interface DataQualityRulesetEvaluationRun {
  /**
   * The unique run identifier associated with this run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * A data source (an Glue table) for which you want data quality results.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * An IAM role supplied to encrypt the results of the run.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The number of `G.1X` workers to be used in the run. The default is 5.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters `TIMEOUT` status. The default is 2,880 minutes (48 hours).
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * Additional run options you can specify for an evaluation run.
   *
   * @public
   */
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions | undefined;

  /**
   * The status for this run.
   *
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * The error strings that are associated with the run.
   *
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * The date and time when this run started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * A timestamp. The last point in time when this run was modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * The date and time when this run was completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The amount of time (in seconds) that the run consumed resources.
   *
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * A list of ruleset names for the run.
   *
   * @public
   */
  RulesetNames?: string[] | undefined;

  /**
   * A list of result IDs for the data quality results for the run.
   *
   * @public
   */
  ResultIds?: string[] | undefined;

  /**
   * A map of reference strings to additional data sources you can specify for an evaluation run.
   *
   * @public
   */
  AdditionalDataSources?: Record<string, DataSource> | undefined;
}

/**
 * @public
 */
export interface BatchGetDataQualityRulesetEvaluationRunResponse {
  /**
   * A list of evaluation run details for the requested run IDs.
   *
   * @public
   */
  Runs?: DataQualityRulesetEvaluationRun[] | undefined;

  /**
   * A list of run IDs that were not found.
   *
   * @public
   */
  RunsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDevEndpointsRequest {
  /**
   * The list of `DevEndpoint` names, which might be the names returned from the `ListDevEndpoint` operation.
   *
   * @public
   */
  DevEndpointNames: string[] | undefined;
}

/**
 * A development endpoint where a developer can remotely debug extract, transform, and load (ETL) scripts.
 *
 * @public
 */
export interface DevEndpoint {
  /**
   * The name of the `DevEndpoint`.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used in this `DevEndpoint`.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A list of security group identifiers used in this `DevEndpoint`.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The subnet ID for this `DevEndpoint`.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The YARN endpoint address used by this `DevEndpoint`.
   *
   * @public
   */
  YarnEndpointAddress?: string | undefined;

  /**
   * A private IP address to access the `DevEndpoint` within a VPC if the `DevEndpoint` is created within one. The `PrivateAddress` field is present only when you create the `DevEndpoint` within your VPC.
   *
   * @public
   */
  PrivateAddress?: string | undefined;

  /**
   * The Apache Zeppelin port for the remote Apache Spark interpreter.
   *
   * @public
   */
  ZeppelinRemoteSparkInterpreterPort?: number | undefined;

  /**
   * The public IP address used by this `DevEndpoint`. The `PublicAddress` field is present only when you create a non-virtual private cloud (VPC) `DevEndpoint`.
   *
   * @public
   */
  PublicAddress?: string | undefined;

  /**
   * The current status of this `DevEndpoint`.
   *
   * @public
   */
  Status?: string | undefined;

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
   * The number of Glue Data Processing Units (DPUs) allocated to this `DevEndpoint`.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

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
   * The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in your `DevEndpoint`. Multiple values must be complete paths separated by a comma.
   *
   * > **Note:** You can only use pure Python libraries with a `DevEndpoint`. Libraries that rely on C extensions, such as the [pandas](http://pandas.pydata.org/) Python data analysis library, are not currently supported.
   *
   * @public
   */
  ExtraPythonLibsS3Path?: string | undefined;

  /**
   * The path to one or more Java `.jar` files in an S3 bucket that should be loaded in your `DevEndpoint`.
   *
   * > **Note:** You can only use pure Java/Scala libraries with a `DevEndpoint`.
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
   * The status of the last update.
   *
   * @public
   */
  LastUpdateStatus?: string | undefined;

  /**
   * The point in time at which this DevEndpoint was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The point in time at which this `DevEndpoint` was last modified.
   *
   * @public
   */
  LastModifiedTimestamp?: Date | undefined;

  /**
   * The public key to be used by this `DevEndpoint` for authentication. This attribute is provided for backward compatibility because the recommended attribute to use is public keys.
   *
   * @public
   */
  PublicKey?: string | undefined;

  /**
   * A list of public keys to be used by the `DevEndpoints` for authentication. Using this attribute is preferred over a single public key because the public keys allow you to have a different private key per client.
   *
   * > **Note:** If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys. Call the `UpdateDevEndpoint` API operation with the public key content in the `deletePublicKeys` attribute, and the list of new keys in the `addPublicKeys` attribute.
   *
   * @public
   */
  PublicKeys?: string[] | undefined;

  /**
   * The name of the `SecurityConfiguration` structure to be used with this `DevEndpoint`.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * A map of arguments used to configure the `DevEndpoint`.
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
export interface BatchGetDevEndpointsResponse {
  /**
   * A list of `DevEndpoint` definitions.
   *
   * @public
   */
  DevEndpoints?: DevEndpoint[] | undefined;

  /**
   * A list of `DevEndpoints` not found.
   *
   * @public
   */
  DevEndpointsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetIterableFormsRequest {
  /**
   * The unique identifier of the asset.
   *
   * @public
   */
  AssetIdentifier: string | undefined;

  /**
   * The name of the iterable form to retrieve items from.
   *
   * @public
   */
  IterableFormName: string | undefined;

  /**
   * The list of item identifiers to retrieve. Each identifier can be an item ID or item name.
   *
   * @public
   */
  ItemIdentifiers: string[] | undefined;
}

/**
 * An error that occurred when retrieving an iterable form item.
 *
 * @public
 */
export interface ItemError {
  /**
   * The identifier of the item that caused the error.
   *
   * @public
   */
  ItemIdentifier?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * A full iterable form item with its forms.
 *
 * @public
 */
export interface IterableFormItem {
  /**
   * The unique identifier of the item.
   *
   * @public
   */
  ItemId?: string | undefined;

  /**
   * The name of the item.
   *
   * @public
   */
  ItemName?: string | undefined;

  /**
   * The identifiers of the glossary terms associated with the item.
   *
   * @public
   */
  GlossaryTerms?: string[] | undefined;

  /**
   * The forms on the item, keyed by form name.
   *
   * @public
   */
  Forms?: Record<string, AssetFormEntry> | undefined;

  /**
   * Additional attachments on the item for more context, keyed by attachment name.
   *
   * @public
   */
  Attachments?: Record<string, AssetFormEntry> | undefined;
}

/**
 * @public
 */
export interface BatchGetIterableFormsResponse {
  /**
   * The list of retrieved iterable form items.
   *
   * @public
   */
  Items?: IterableFormItem[] | undefined;

  /**
   * The list of errors for items that could not be retrieved.
   *
   * @public
   */
  Errors?: ItemError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetJobsRequest {
  /**
   * A list of job names, which might be the names returned from the `ListJobs` operation.
   *
   * @public
   */
  JobNames: string[] | undefined;
}

/**
 * Specifies a Delta Lake data source that is registered in the Glue Data Catalog.
 *
 * @public
 */
export interface CatalogDeltaSource {
  /**
   * The name of the Delta Lake data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * Specifies additional connection options.
   *
   * @public
   */
  AdditionalDeltaOptions?: Record<string, string> | undefined;

  /**
   * Specifies the data schema for the Delta Lake source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a Hudi data source that is registered in the Glue Data Catalog.
 *
 * @public
 */
export interface CatalogHudiSource {
  /**
   * The name of the Hudi data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * Specifies additional connection options.
   *
   * @public
   */
  AdditionalHudiOptions?: Record<string, string> | undefined;

  /**
   * Specifies the data schema for the Hudi source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies an Apache Iceberg data source that is registered in the Glue Data Catalog.
 *
 * @public
 */
export interface CatalogIcebergSource {
  /**
   * The name of the Iceberg data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * Specifies additional connection options for the Iceberg data source.
   *
   * @public
   */
  AdditionalIcebergOptions?: Record<string, string> | undefined;

  /**
   * Specifies the data schema for the Iceberg source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies options related to data preview for viewing a sample of your data.
 *
 * @public
 */
export interface StreamingDataPreviewOptions {
  /**
   * The polling time in milliseconds.
   *
   * @public
   */
  PollingTime?: number | undefined;

  /**
   * The limit to the number of records polled.
   *
   * @public
   */
  RecordPollingLimit?: number | undefined;
}

/**
 * Additional options for streaming.
 *
 * @public
 */
export interface KafkaStreamingSourceOptions {
  /**
   * A list of bootstrap server URLs, for example, as `b-1.vpc-test-2.o4q88o.c6.kafka.us-east-1.amazonaws.com:9094`. This option must be specified in the API call or defined in the table metadata in the Data Catalog.
   *
   * @public
   */
  BootstrapServers?: string | undefined;

  /**
   * The protocol used to communicate with brokers. The possible values are `"SSL"` or `"PLAINTEXT"`.
   *
   * @public
   */
  SecurityProtocol?: string | undefined;

  /**
   * The name of the connection.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The topic name as specified in Apache Kafka. You must specify at least one of `"topicName"`, `"assign"` or `"subscribePattern"`.
   *
   * @public
   */
  TopicName?: string | undefined;

  /**
   * The specific `TopicPartitions` to consume. You must specify at least one of `"topicName"`, `"assign"` or `"subscribePattern"`.
   *
   * @public
   */
  Assign?: string | undefined;

  /**
   * A Java regex string that identifies the topic list to subscribe to. You must specify at least one of `"topicName"`, `"assign"` or `"subscribePattern"`.
   *
   * @public
   */
  SubscribePattern?: string | undefined;

  /**
   * An optional classification.
   *
   * @public
   */
  Classification?: string | undefined;

  /**
   * Specifies the delimiter character.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * The starting position in the Kafka topic to read data from. The possible values are `"earliest"` or `"latest"`. The default value is `"latest"`.
   *
   * @public
   */
  StartingOffsets?: string | undefined;

  /**
   * The end point when a batch query is ended. Possible values are either `"latest"` or a JSON string that specifies an ending offset for each `TopicPartition`.
   *
   * @public
   */
  EndingOffsets?: string | undefined;

  /**
   * The timeout in milliseconds to poll data from Kafka in Spark job executors. The default value is `512`.
   *
   * @public
   */
  PollTimeoutMs?: number | undefined;

  /**
   * The number of times to retry before failing to fetch Kafka offsets. The default value is `3`.
   *
   * @public
   */
  NumRetries?: number | undefined;

  /**
   * The time in milliseconds to wait before retrying to fetch Kafka offsets. The default value is `10`.
   *
   * @public
   */
  RetryIntervalMs?: number | undefined;

  /**
   * The rate limit on the maximum number of offsets that are processed per trigger interval. The specified total number of offsets is proportionally split across `topicPartitions` of different volumes. The default value is null, which means that the consumer reads all offsets until the known latest offset.
   *
   * @public
   */
  MaxOffsetsPerTrigger?: number | undefined;

  /**
   * The desired minimum number of partitions to read from Kafka. The default value is null, which means that the number of spark partitions is equal to the number of Kafka partitions.
   *
   * @public
   */
  MinPartitions?: number | undefined;

  /**
   * Whether to include the Kafka headers. When the option is set to "true", the data output will contain an additional column named "glue_streaming_kafka_headers" with type `Array[Struct(key: String, value: String)]`. The default value is "false". This option is available in Glue version 3.0 or later only.
   *
   * @public
   */
  IncludeHeaders?: boolean | undefined;

  /**
   * When this option is set to 'true', the data output will contain an additional column named "__src_timestamp" that indicates the time when the corresponding record received by the topic. The default value is 'false'. This option is supported in Glue version 4.0 or later.
   *
   * @public
   */
  AddRecordTimestamp?: string | undefined;

  /**
   * When this option is set to 'true', for each batch, it will emit the metrics for the duration between the oldest record received by the topic and the time it arrives in Glue to CloudWatch. The metric's name is "glue.driver.streaming.maxConsumerLagInMs". The default value is 'false'. This option is supported in Glue version 4.0 or later.
   *
   * @public
   */
  EmitConsumerLagMetrics?: string | undefined;

  /**
   * The timestamp of the record in the Kafka topic to start reading data from. The possible values are a timestamp string in UTC format of the pattern `yyyy-mm-ddTHH:MM:SSZ` (where Z represents a UTC timezone offset with a +/-. For example: "2023-04-04T08:00:00+08:00").
   *
   * Only one of `StartingTimestamp` or `StartingOffsets` must be set.
   *
   * @public
   */
  StartingTimestamp?: Date | undefined;
}

/**
 * Specifies an Apache Kafka data store in the Data Catalog.
 *
 * @public
 */
export interface CatalogKafkaSource {
  /**
   * The name of the data store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The amount of time to spend processing each micro batch.
   *
   * @public
   */
  WindowSize?: number | undefined;

  /**
   * Whether to automatically determine the schema from the incoming data.
   *
   * @public
   */
  DetectSchema?: boolean | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * Specifies the streaming options.
   *
   * @public
   */
  StreamingOptions?: KafkaStreamingSourceOptions | undefined;

  /**
   * Specifies options related to data preview for viewing a sample of your data.
   *
   * @public
   */
  DataPreviewOptions?: StreamingDataPreviewOptions | undefined;
}

/**
 * Additional options for the Amazon Kinesis streaming data source.
 *
 * @public
 */
export interface KinesisStreamingSourceOptions {
  /**
   * The URL of the Kinesis endpoint.
   *
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * The name of the Kinesis data stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * An optional classification.
   *
   * @public
   */
  Classification?: string | undefined;

  /**
   * Specifies the delimiter character.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * The starting position in the Kinesis data stream to read data from. The possible values are `"latest"`, `"trim_horizon"`, `"earliest"`, or a timestamp string in UTC format in the pattern `yyyy-mm-ddTHH:MM:SSZ` (where `Z` represents a UTC timezone offset with a +/-. For example: "2023-04-04T08:00:00-04:00"). The default value is `"latest"`.
   *
   * Note: Using a value that is a timestamp string in UTC format for "startingPosition" is supported only for Glue version 4.0 or later.
   *
   * @public
   */
  StartingPosition?: StartingPosition | undefined;

  /**
   * The maximum time spent for the job executor to read records for the current batch from the Kinesis data stream, specified in milliseconds (ms). Multiple `GetRecords` API calls may be made within this time. The default value is `1000`.
   *
   * @public
   */
  MaxFetchTimeInMs?: number | undefined;

  /**
   * The maximum number of records to fetch per shard in the Kinesis data stream per microbatch. Note: The client can exceed this limit if the streaming job has already read extra records from Kinesis (in the same get-records call). If `MaxFetchRecordsPerShard` needs to be strict then it needs to be a multiple of `MaxRecordPerRead`. The default value is `100000`.
   *
   * @public
   */
  MaxFetchRecordsPerShard?: number | undefined;

  /**
   * The maximum number of records to fetch from the Kinesis data stream in each getRecords operation. The default value is `10000`.
   *
   * @public
   */
  MaxRecordPerRead?: number | undefined;

  /**
   * Adds a time delay between two consecutive getRecords operations. The default value is `"False"`. This option is only configurable for Glue version 2.0 and above.
   *
   * @public
   */
  AddIdleTimeBetweenReads?: boolean | undefined;

  /**
   * The minimum time delay between two consecutive getRecords operations, specified in ms. The default value is `1000`. This option is only configurable for Glue version 2.0 and above.
   *
   * @public
   */
  IdleTimeBetweenReadsInMs?: number | undefined;

  /**
   * The minimum time interval between two ListShards API calls for your script to consider resharding. The default value is `1s`.
   *
   * @public
   */
  DescribeShardInterval?: number | undefined;

  /**
   * The maximum number of retries for Kinesis Data Streams API requests. The default value is `3`.
   *
   * @public
   */
  NumRetries?: number | undefined;

  /**
   * The cool-off time period (specified in ms) before retrying the Kinesis Data Streams API call. The default value is `1000`.
   *
   * @public
   */
  RetryIntervalMs?: number | undefined;

  /**
   * The maximum cool-off time period (specified in ms) between two retries of a Kinesis Data Streams API call. The default value is `10000`.
   *
   * @public
   */
  MaxRetryIntervalMs?: number | undefined;

  /**
   * Avoids creating an empty microbatch job by checking for unread data in the Kinesis data stream before the batch is started. The default value is `"False"`.
   *
   * @public
   */
  AvoidEmptyBatches?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Kinesis data stream.
   *
   * @public
   */
  StreamArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role to assume using AWS Security Token Service (AWS STS). This role must have permissions for describe or read record operations for the Kinesis data stream. You must use this parameter when accessing a data stream in a different account. Used in conjunction with `"awsSTSSessionName"`.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * An identifier for the session assuming the role using AWS STS. You must use this parameter when accessing a data stream in a different account. Used in conjunction with `"awsSTSRoleARN"`.
   *
   * @public
   */
  RoleSessionName?: string | undefined;

  /**
   * When this option is set to 'true', the data output will contain an additional column named "__src_timestamp" that indicates the time when the corresponding record received by the stream. The default value is 'false'. This option is supported in Glue version 4.0 or later.
   *
   * @public
   */
  AddRecordTimestamp?: string | undefined;

  /**
   * When this option is set to 'true', for each batch, it will emit the metrics for the duration between the oldest record received by the stream and the time it arrives in Glue to CloudWatch. The metric's name is "glue.driver.streaming.maxConsumerLagInMs". The default value is 'false'. This option is supported in Glue version 4.0 or later.
   *
   * @public
   */
  EmitConsumerLagMetrics?: string | undefined;

  /**
   * The timestamp of the record in the Kinesis data stream to start reading data from. The possible values are a timestamp string in UTC format of the pattern `yyyy-mm-ddTHH:MM:SSZ` (where Z represents a UTC timezone offset with a +/-. For example: "2023-04-04T08:00:00+08:00").
   *
   * @public
   */
  StartingTimestamp?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Kinesis Data Streams enhanced fan-out consumer. When specified, enables enhanced fan-out for dedicated throughput and lower latency data consumption.
   *
   * @public
   */
  FanoutConsumerARN?: string | undefined;
}

/**
 * Specifies a Kinesis data source in the Glue Data Catalog.
 *
 * @public
 */
export interface CatalogKinesisSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The amount of time to spend processing each micro batch.
   *
   * @public
   */
  WindowSize?: number | undefined;

  /**
   * Whether to automatically determine the schema from the incoming data.
   *
   * @public
   */
  DetectSchema?: boolean | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * Additional options for the Kinesis streaming data source.
   *
   * @public
   */
  StreamingOptions?: KinesisStreamingSourceOptions | undefined;

  /**
   * Additional options for data preview.
   *
   * @public
   */
  DataPreviewOptions?: StreamingDataPreviewOptions | undefined;
}

/**
 * Specifies a data store in the Glue Data Catalog.
 *
 * @public
 */
export interface CatalogSource {
  /**
   * The name of the data store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * Partitions satisfying this predicate are deleted. Files within the retention period in these partitions are not deleted.
   *
   * @public
   */
  PartitionPredicate?: string | undefined;

  /**
   * Specifies the data schema for the catalog source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a target that uses a Glue Data Catalog table.
 *
 * @public
 */
export interface BasicCatalogTarget {
  /**
   * The name of your data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The partition keys used to distribute data across multiple partitions or shards based on a specific key or set of key.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * The database that contains the table you want to use as the target. This database must already exist in the Data Catalog.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The table that defines the schema of your output data. This table must already exist in the Data Catalog.
   *
   * @public
   */
  Table: string | undefined;
}

/**
 * Specifies a source generated with standard connection options.
 *
 * @public
 */
export interface ConnectorDataSource {
  /**
   * The name of this source node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The `connectionType`, as provided to the underlying Glue library. This node type supports the following connection types:
   *
   * - `opensearch`
   * - `azuresql`
   * - `azurecosmos`
   * - `bigquery`
   * - `saphana`
   * - `teradata`
   * - `vertica`
   *
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * A map specifying connection options for the node. You can find standard connection options for the corresponding connection type in the [Connection parameters](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-connect.html) section of the Glue documentation.
   *
   * @public
   */
  Data: Record<string, string> | undefined;

  /**
   * Specifies the data schema for this source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a target generated with standard connection options.
 *
 * @public
 */
export interface ConnectorDataTarget {
  /**
   * The name of this target node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The `connectionType`, as provided to the underlying Glue library. This node type supports the following connection types:
   *
   * - `opensearch`
   * - `azuresql`
   * - `azurecosmos`
   * - `bigquery`
   * - `saphana`
   * - `teradata`
   * - `vertica`
   *
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * A map specifying connection options for the node. You can find standard connection options for the corresponding connection type in the [Connection parameters](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-connect.html) section of the Glue documentation.
   *
   * @public
   */
  Data: Record<string, string> | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs?: string[] | undefined;
}

/**
 * Specifies a transform that uses custom code you provide to perform the data transformation. The output is a collection of DynamicFrames.
 *
 * @public
 */
export interface CustomCode {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The custom code that is used to perform the data transformation.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * The name defined for the custom code node class.
   *
   * @public
   */
  ClassName: string | undefined;

  /**
   * Specifies the data schema for the custom code transform.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies the direct JDBC source connection.
 *
 * @public
 */
export interface DirectJDBCSource {
  /**
   * The name of the JDBC source connection.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The database of the JDBC source connection.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The table of the JDBC source connection.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * The connection name of the JDBC source.
   *
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * The connection type of the JDBC source.
   *
   * @public
   */
  ConnectionType: JDBCConnectionType | undefined;

  /**
   * The temp directory of the JDBC Redshift source.
   *
   * @public
   */
  RedshiftTmpDir?: string | undefined;

  /**
   * Specifies the data schema for the direct JDBC source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies an Apache Kafka data store.
 *
 * @public
 */
export interface DirectKafkaSource {
  /**
   * The name of the data store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the streaming options.
   *
   * @public
   */
  StreamingOptions?: KafkaStreamingSourceOptions | undefined;

  /**
   * The amount of time to spend processing each micro batch.
   *
   * @public
   */
  WindowSize?: number | undefined;

  /**
   * Whether to automatically determine the schema from the incoming data.
   *
   * @public
   */
  DetectSchema?: boolean | undefined;

  /**
   * Specifies options related to data preview for viewing a sample of your data.
   *
   * @public
   */
  DataPreviewOptions?: StreamingDataPreviewOptions | undefined;
}

/**
 * Specifies a direct Amazon Kinesis data source.
 *
 * @public
 */
export interface DirectKinesisSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The amount of time to spend processing each micro batch.
   *
   * @public
   */
  WindowSize?: number | undefined;

  /**
   * Whether to automatically determine the schema from the incoming data.
   *
   * @public
   */
  DetectSchema?: boolean | undefined;

  /**
   * Additional options for the Kinesis streaming data source.
   *
   * @public
   */
  StreamingOptions?: KinesisStreamingSourceOptions | undefined;

  /**
   * Additional options for data preview.
   *
   * @public
   */
  DataPreviewOptions?: StreamingDataPreviewOptions | undefined;
}

/**
 * Specifies a transform that removes rows of repeating data from a data set.
 *
 * @public
 */
export interface DropDuplicates {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The name of the columns to be merged or removed if repeating.
   *
   * @public
   */
  Columns?: string[][] | undefined;
}

/**
 * Specifies a transform that chooses the data property keys that you want to drop.
 *
 * @public
 */
export interface DropFields {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * A JSON path to a variable in the data structure.
   *
   * @public
   */
  Paths: string[][] | undefined;
}

/**
 * Represents whether certain values are recognized as null values for removal.
 *
 * @public
 */
export interface NullCheckBoxList {
  /**
   * Specifies that an empty string is considered as a null value.
   *
   * @public
   */
  IsEmpty?: boolean | undefined;

  /**
   * Specifies that a value spelling out the word 'null' is considered as a null value.
   *
   * @public
   */
  IsNullString?: boolean | undefined;

  /**
   * Specifies that an integer value of -1 is considered as a null value.
   *
   * @public
   */
  IsNegOne?: boolean | undefined;
}

/**
 * A structure representing the datatype of the value.
 *
 * @public
 */
export interface Datatype {
  /**
   * The datatype of the value.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A label assigned to the datatype.
   *
   * @public
   */
  Label: string | undefined;
}

/**
 * Represents a custom null value such as a zeros or other value being used as a null placeholder unique to the dataset.
 *
 * @public
 */
export interface NullValueField {
  /**
   * The value of the null placeholder.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The datatype of the value.
   *
   * @public
   */
  Datatype: Datatype | undefined;
}

/**
 * Specifies a transform that removes columns from the dataset if all values in the column are 'null'. By default, Glue Studio will recognize null objects, but some values such as empty strings, strings that are "null", -1 integers or other placeholders such as zeros, are not automatically recognized as nulls.
 *
 * @public
 */
export interface DropNullFields {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * A structure that represents whether certain values are recognized as null values for removal.
   *
   * @public
   */
  NullCheckBoxList?: NullCheckBoxList | undefined;

  /**
   * A structure that specifies a list of NullValueField structures that represent a custom null value such as zero or other value being used as a null placeholder unique to the dataset.
   *
   * The `DropNullFields` transform removes custom null values only if both the value of the null placeholder and the datatype match the data.
   *
   * @public
   */
  NullTextList?: NullValueField[] | undefined;
}

/**
 * Specifies the parameters in the config file of the dynamic transform.
 *
 * @public
 */
export interface TransformConfigParameter {
  /**
   * Specifies the name of the parameter in the config file of the dynamic transform.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the parameter type in the config file of the dynamic transform.
   *
   * @public
   */
  Type: ParamType | undefined;

  /**
   * Specifies the validation rule in the config file of the dynamic transform.
   *
   * @public
   */
  ValidationRule?: string | undefined;

  /**
   * Specifies the validation message in the config file of the dynamic transform.
   *
   * @public
   */
  ValidationMessage?: string | undefined;

  /**
   * Specifies the value of the parameter in the config file of the dynamic transform.
   *
   * @public
   */
  Value?: string[] | undefined;

  /**
   * Specifies the list type of the parameter in the config file of the dynamic transform.
   *
   * @public
   */
  ListType?: ParamType | undefined;

  /**
   * Specifies whether the parameter is optional or not in the config file of the dynamic transform.
   *
   * @public
   */
  IsOptional?: boolean | undefined;
}

/**
 * Specifies the set of parameters needed to perform the dynamic transform.
 *
 * @public
 */
export interface DynamicTransform {
  /**
   * Specifies the name of the dynamic transform.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the name of the dynamic transform as it appears in the Glue Studio visual editor.
   *
   * @public
   */
  TransformName: string | undefined;

  /**
   * Specifies the inputs for the dynamic transform that are required.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies the parameters of the dynamic transform.
   *
   * @public
   */
  Parameters?: TransformConfigParameter[] | undefined;

  /**
   * Specifies the name of the function of the dynamic transform.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specifies the path of the dynamic transform source and config files.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * This field is not used and will be deprecated in future release.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * Specifies the data schema for the dynamic transform.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies additional options for DynamoDB ELT catalog operations.
 *
 * @public
 */
export interface DDBELTCatalogAdditionalOptions {
  /**
   * Specifies the DynamoDB export configuration for the ELT operation.
   *
   * @public
   */
  DynamodbExport?: string | undefined;

  /**
   * Specifies whether to unnest DynamoDB JSON format. When set to `true`, nested JSON structures in DynamoDB items are flattened.
   *
   * @public
   */
  DynamodbUnnestDDBJson?: boolean | undefined;
}

/**
 * Specifies a DynamoDB data source in the Glue Data Catalog.
 *
 * @public
 */
export interface DynamoDBCatalogSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * Specifies whether Point-in-Time Recovery (PITR) is enabled for the DynamoDB table. When set to `true`, allows reading from a specific point in time. The default value is `false`.
   *
   * @public
   */
  PitrEnabled?: boolean | undefined;

  /**
   * Specifies additional connection options for the DynamoDB data source.
   *
   * @public
   */
  AdditionalOptions?: DDBELTCatalogAdditionalOptions | undefined;
}

/**
 * Specifies connection options for DynamoDB ELT (Extract, Load, Transform) operations. This structure contains configuration parameters for connecting to and extracting data from DynamoDB tables using the ELT connector.
 *
 * @public
 */
export interface DDBELTConnectionOptions {
  /**
   * Specifies the export type for DynamoDB data extraction. This parameter determines how data is exported from the DynamoDB table during the ELT process.
   *
   * @public
   */
  DynamodbExport?: DdbExportType | undefined;

  /**
   * A boolean value that specifies whether to unnest DynamoDB JSON format during data extraction. When set to `true`, the connector will flatten nested JSON structures from DynamoDB items. When set to `false`, the original DynamoDB JSON structure is preserved.
   *
   * @public
   */
  DynamodbUnnestDDBJson?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DynamoDB table to extract data from. This parameter specifies the source table for the ELT operation.
   *
   * @public
   */
  DynamodbTableArn: string | undefined;

  /**
   * The name of the Amazon S3 bucket used for intermediate storage during the DynamoDB ELT process. This bucket is used to temporarily store exported DynamoDB data before it is processed by the ELT job.
   *
   * @public
   */
  DynamodbS3Bucket?: string | undefined;

  /**
   * The S3 object key prefix for files stored in the intermediate S3 bucket during the DynamoDB ELT process. This prefix helps organize and identify the temporary files created during data extraction.
   *
   * @public
   */
  DynamodbS3Prefix?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the S3 bucket specified in `DynamodbS3Bucket`. This parameter is required when the S3 bucket is owned by a different Amazon Web Services account than the one running the ELT job, enabling cross-account access to the intermediate storage bucket.
   *
   * @public
   */
  DynamodbS3BucketOwner?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Security Token Service (STS) role to assume for accessing DynamoDB and S3 resources during the ELT operation. This role must have the necessary permissions to read from the DynamoDB table and write to the intermediate S3 bucket.
   *
   * @public
   */
  DynamodbStsRoleArn?: string | undefined;
}

/**
 * Specifies a DynamoDB ELT connector source for extracting data from DynamoDB tables.
 *
 * @public
 */
export interface DynamoDBELTConnectorSource {
  /**
   * The name of the DynamoDB ELT connector source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The connection options for the DynamoDB ELT connector source.
   *
   * @public
   */
  ConnectionOptions?: DDBELTConnectionOptions | undefined;

  /**
   * Specifies the data schema for the DynamoDB ELT connector source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Options to configure how your data quality evaluation results are published.
 *
 * @public
 */
export interface DQResultsPublishingOptions {
  /**
   * The context of the evaluation.
   *
   * @public
   */
  EvaluationContext?: string | undefined;

  /**
   * The Amazon S3 prefix prepended to the results.
   *
   * @public
   */
  ResultsS3Prefix?: string | undefined;

  /**
   * Enable metrics for your data quality results.
   *
   * @public
   */
  CloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * Enable publishing for your data quality results.
   *
   * @public
   */
  ResultsPublishingEnabled?: boolean | undefined;
}

/**
 * Options to configure how your job will stop if your data quality evaluation fails.
 *
 * @public
 */
export interface DQStopJobOnFailureOptions {
  /**
   * When to stop job if your data quality evaluation fails. Options are Immediate or AfterDataLoad.
   *
   * @public
   */
  StopJobOnFailureTiming?: DQStopJobOnFailureTiming | undefined;
}

/**
 * Specifies your data quality evaluation criteria.
 *
 * @public
 */
export interface EvaluateDataQuality {
  /**
   * The name of the data quality evaluation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The inputs of your data quality evaluation.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The ruleset for your data quality evaluation.
   *
   * @public
   */
  Ruleset: string | undefined;

  /**
   * The output of your data quality evaluation.
   *
   * @public
   */
  Output?: DQTransformOutput | undefined;

  /**
   * Options to configure how your results are published.
   *
   * @public
   */
  PublishingOptions?: DQResultsPublishingOptions | undefined;

  /**
   * Options to configure how your job will stop if your data quality evaluation fails.
   *
   * @public
   */
  StopJobOnFailureOptions?: DQStopJobOnFailureOptions | undefined;
}

/**
 * Specifies your data quality evaluation criteria.
 *
 * @public
 */
export interface EvaluateDataQualityMultiFrame {
  /**
   * The name of the data quality evaluation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The inputs of your data quality evaluation. The first input in this list is the primary data source.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The aliases of all data sources except primary.
   *
   * @public
   */
  AdditionalDataSources?: Record<string, string> | undefined;

  /**
   * The ruleset for your data quality evaluation.
   *
   * @public
   */
  Ruleset: string | undefined;

  /**
   * Options to configure how your results are published.
   *
   * @public
   */
  PublishingOptions?: DQResultsPublishingOptions | undefined;

  /**
   * Options to configure runtime behavior of the transform.
   *
   * @public
   */
  AdditionalOptions?: Partial<Record<AdditionalOptionKeys, string>> | undefined;

  /**
   * Options to configure how your job will stop if your data quality evaluation fails.
   *
   * @public
   */
  StopJobOnFailureOptions?: DQStopJobOnFailureOptions | undefined;
}

/**
 * Specifies a transform that locates records in the dataset that have missing values and adds a new field with a value determined by imputation. The input data set is used to train the machine learning model that determines what the missing value should be.
 *
 * @public
 */
export interface FillMissingValues {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * A JSON path to a variable in the data structure for the dataset that is imputed.
   *
   * @public
   */
  ImputedPath: string | undefined;

  /**
   * A JSON path to a variable in the data structure for the dataset that is filled.
   *
   * @public
   */
  FilledPath?: string | undefined;
}

/**
 * Represents a single entry in the list of values for a `FilterExpression`.
 *
 * @public
 */
export interface FilterValue {
  /**
   * The type of filter value.
   *
   * @public
   */
  Type: FilterValueType | undefined;

  /**
   * The value to be associated.
   *
   * @public
   */
  Value: string[] | undefined;
}

/**
 * Specifies a filter expression.
 *
 * @public
 */
export interface FilterExpression {
  /**
   * The type of operation to perform in the expression.
   *
   * @public
   */
  Operation: FilterOperation | undefined;

  /**
   * Whether the expression is to be negated.
   *
   * @public
   */
  Negated?: boolean | undefined;

  /**
   * A list of filter values.
   *
   * @public
   */
  Values: FilterValue[] | undefined;
}

/**
 * Specifies a transform that splits a dataset into two, based on a filter condition.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The operator used to filter rows by comparing the key value to a specified value.
   *
   * @public
   */
  LogicalOperator: FilterLogicalOperator | undefined;

  /**
   * Specifies a filter expression.
   *
   * @public
   */
  Filters: FilterExpression[] | undefined;
}

/**
 * Specifies additional connection options for the Amazon S3 data store.
 *
 * @public
 */
export interface S3SourceAdditionalOptions {
  /**
   * Sets the upper limit for the target size of the dataset in bytes that will be processed.
   *
   * @public
   */
  BoundedSize?: number | undefined;

  /**
   * Sets the upper limit for the target number of files that will be processed.
   *
   * @public
   */
  BoundedFiles?: number | undefined;
}

/**
 * Specifies the data store in the governed Glue Data Catalog.
 *
 * @public
 */
export interface GovernedCatalogSource {
  /**
   * The name of the data store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The database table to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * Partitions satisfying this predicate are deleted. Files within the retention period in these partitions are not deleted. Set to `""` – empty by default.
   *
   * @public
   */
  PartitionPredicate?: string | undefined;

  /**
   * Specifies additional connection options.
   *
   * @public
   */
  AdditionalOptions?: S3SourceAdditionalOptions | undefined;
}

/**
 * A policy that specifies update behavior for the crawler.
 *
 * @public
 */
export interface CatalogSchemaChangePolicy {
  /**
   * Whether to use the specified update behavior when the crawler finds a changed schema.
   *
   * @public
   */
  EnableUpdateCatalog?: boolean | undefined;

  /**
   * The update behavior when the crawler finds a changed schema.
   *
   * @public
   */
  UpdateBehavior?: UpdateCatalogBehavior | undefined;
}

/**
 * Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.
 *
 * @public
 */
export interface GovernedCatalogTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies native partitioning using a sequence of keys.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * The name of the table in the database to write to.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * The name of the database to write to.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * A policy that specifies update behavior for the governed catalog.
   *
   * @public
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy | undefined;
}

/**
 * Additional connection options for the connector.
 *
 * @public
 */
export interface JDBCConnectorOptions {
  /**
   * Extra condition clause to filter data from source. For example:
   *
   * `BillingCity='Mountain View'`
   *
   * When using a query instead of a table name, you should validate that the query works with the specified `filterPredicate`.
   *
   * @public
   */
  FilterPredicate?: string | undefined;

  /**
   * The name of an integer column that is used for partitioning. This option works only when it's included with `lowerBound`, `upperBound`, and `numPartitions`. This option works the same way as in the Spark SQL JDBC reader.
   *
   * @public
   */
  PartitionColumn?: string | undefined;

  /**
   * The minimum value of `partitionColumn` that is used to decide partition stride.
   *
   * @public
   */
  LowerBound?: number | undefined;

  /**
   * The maximum value of `partitionColumn` that is used to decide partition stride.
   *
   * @public
   */
  UpperBound?: number | undefined;

  /**
   * The number of partitions. This value, along with `lowerBound` (inclusive) and `upperBound` (exclusive), form partition strides for generated `WHERE` clause expressions that are used to split the `partitionColumn`.
   *
   * @public
   */
  NumPartitions?: number | undefined;

  /**
   * The name of the job bookmark keys on which to sort.
   *
   * @public
   */
  JobBookmarkKeys?: string[] | undefined;

  /**
   * Specifies an ascending or descending sort order.
   *
   * @public
   */
  JobBookmarkKeysSortOrder?: string | undefined;

  /**
   * Custom data type mapping that builds a mapping from a JDBC data type to an Glue data type. For example, the option `"dataTypeMapping":\{"FLOAT":"STRING"\}` maps data fields of JDBC type `FLOAT` into the Java `String` type by calling the `ResultSet.getString()` method of the driver, and uses it to build the Glue record. The `ResultSet` object is implemented by each driver, so the behavior is specific to the driver you use. Refer to the documentation for your JDBC driver to understand how the driver performs the conversions.
   *
   * @public
   */
  DataTypeMapping?: Partial<Record<JDBCDataType, GlueRecordType>> | undefined;
}

/**
 * Specifies a connector to a JDBC data source.
 *
 * @public
 */
export interface JDBCConnectorSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the connection that is associated with the connector.
   *
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * The name of a connector that assists with accessing the data store in Glue Studio.
   *
   * @public
   */
  ConnectorName: string | undefined;

  /**
   * The type of connection, such as marketplace.jdbc or custom.jdbc, designating a connection to a JDBC data store.
   *
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * Additional connection options for the connector.
   *
   * @public
   */
  AdditionalOptions?: JDBCConnectorOptions | undefined;

  /**
   * The name of the table in the data source.
   *
   * @public
   */
  ConnectionTable?: string | undefined;

  /**
   * The table or SQL query to get the data from. You can specify either `ConnectionTable` or `query`, but not both.
   *
   * @public
   */
  Query?: string | undefined;

  /**
   * Specifies the data schema for the custom JDBC source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.
 *
 * @public
 */
export interface JDBCConnectorTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The name of the connection that is associated with the connector.
   *
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * The name of the table in the data target.
   *
   * @public
   */
  ConnectionTable: string | undefined;

  /**
   * The name of a connector that will be used.
   *
   * @public
   */
  ConnectorName: string | undefined;

  /**
   * The type of connection, such as marketplace.jdbc or custom.jdbc, designating a connection to a JDBC data target.
   *
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * Additional connection options for the connector.
   *
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * Specifies the data schema for the JDBC target.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a column to be joined.
 *
 * @public
 */
export interface JoinColumn {
  /**
   * The column to be joined.
   *
   * @public
   */
  From: string | undefined;

  /**
   * The key of the column to be joined.
   *
   * @public
   */
  Keys: string[][] | undefined;
}

/**
 * Specifies a transform that joins two datasets into one dataset using a comparison phrase on the specified data property keys. You can use inner, outer, left, right, left semi, and left anti joins.
 *
 * @public
 */
export interface Join {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies the type of join to be performed on the datasets.
   *
   * @public
   */
  JoinType: JoinType | undefined;

  /**
   * A list of the two columns to be joined.
   *
   * @public
   */
  Columns: JoinColumn[] | undefined;
}

/**
 * Specifies a transform that merges a `DynamicFrame` with a staging `DynamicFrame` based on the specified primary keys to identify records. Duplicate records (records with the same primary keys) are not de-duplicated.
 *
 * @public
 */
export interface Merge {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The source `DynamicFrame` that will be merged with a staging `DynamicFrame`.
   *
   * @public
   */
  Source: string | undefined;

  /**
   * The list of primary key fields to match records from the source and staging dynamic frames.
   *
   * @public
   */
  PrimaryKeys: string[][] | undefined;
}

/**
 * Specifies a Microsoft SQL server data source in the Glue Data Catalog.
 *
 * @public
 */
export interface MicrosoftSQLServerCatalogSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;
}

/**
 * Specifies a target that uses Microsoft SQL.
 *
 * @public
 */
export interface MicrosoftSQLServerCatalogTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The name of the database to write to.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to write to.
   *
   * @public
   */
  Table: string | undefined;
}

/**
 * Specifies a MySQL data source in the Glue Data Catalog.
 *
 * @public
 */
export interface MySQLCatalogSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;
}

/**
 * Specifies a target that uses MySQL.
 *
 * @public
 */
export interface MySQLCatalogTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The name of the database to write to.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to write to.
   *
   * @public
   */
  Table: string | undefined;
}

/**
 * Specifies an Oracle data source in the Glue Data Catalog.
 *
 * @public
 */
export interface OracleSQLCatalogSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;
}

/**
 * Specifies a target that uses Oracle SQL.
 *
 * @public
 */
export interface OracleSQLCatalogTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The name of the database to write to.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to write to.
   *
   * @public
   */
  Table: string | undefined;
}

/**
 * Specifies a transform that identifies, removes or masks PII data.
 *
 * @public
 */
export interface PIIDetection {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The node ID inputs to the transform.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Indicates the type of PIIDetection transform.
   *
   * @public
   */
  PiiType: PiiType | undefined;

  /**
   * Indicates the types of entities the PIIDetection transform will identify as PII data.
   *
   * PII type entities include: PERSON_NAME, DATE, USA_SNN, EMAIL, USA_ITIN, USA_PASSPORT_NUMBER, PHONE_NUMBER, BANK_ACCOUNT, IP_ADDRESS, MAC_ADDRESS, USA_CPT_CODE, USA_HCPCS_CODE, USA_NATIONAL_DRUG_CODE, USA_MEDICARE_BENEFICIARY_IDENTIFIER, USA_HEALTH_INSURANCE_CLAIM_NUMBER,CREDIT_CARD,USA_NATIONAL_PROVIDER_IDENTIFIER,USA_DEA_NUMBER,USA_DRIVING_LICENSE
   *
   * @public
   */
  EntityTypesToDetect: string[] | undefined;

  /**
   * Indicates the output column name that will contain any entity type detected in that row.
   *
   * @public
   */
  OutputColumnName?: string | undefined;

  /**
   * Indicates the fraction of the data to sample when scanning for PII entities.
   *
   * @public
   */
  SampleFraction?: number | undefined;

  /**
   * Indicates the fraction of the data that must be met in order for a column to be identified as PII data.
   *
   * @public
   */
  ThresholdFraction?: number | undefined;

  /**
   * Indicates the value that will replace the detected entity.
   *
   * @public
   */
  MaskValue?: string | undefined;

  /**
   * Specifies whether to redact the detected PII text. When set to `true`, PII content is replaced with redaction characters.
   *
   * @public
   */
  RedactText?: string | undefined;

  /**
   * The character used to replace detected PII content when redaction is enabled. The default redaction character is `*`.
   *
   * @public
   */
  RedactChar?: string | undefined;

  /**
   * A regular expression pattern used to identify additional PII content beyond the standard detection algorithms.
   *
   * @public
   */
  MatchPattern?: string | undefined;

  /**
   * The number of characters to exclude from redaction on the left side of detected PII content. This allows preserving context around the sensitive data.
   *
   * @public
   */
  NumLeftCharsToExclude?: number | undefined;

  /**
   * The number of characters to exclude from redaction on the right side of detected PII content. This allows preserving context around the sensitive data.
   *
   * @public
   */
  NumRightCharsToExclude?: number | undefined;

  /**
   * Additional parameters for configuring PII detection behavior and sensitivity settings.
   *
   * @public
   */
  DetectionParameters?: string | undefined;

  /**
   * The sensitivity level for PII detection. Higher sensitivity levels detect more potential PII but may result in more false positives.
   *
   * @public
   */
  DetectionSensitivity?: string | undefined;
}

/**
 * Specifies a PostgresSQL data source in the Glue Data Catalog.
 *
 * @public
 */
export interface PostgreSQLCatalogSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;
}

/**
 * Specifies a target that uses Postgres SQL.
 *
 * @public
 */
export interface PostgreSQLCatalogTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The name of the database to write to.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to write to.
   *
   * @public
   */
  Table: string | undefined;
}

/**
 * A reference to a Glue DataBrew recipe.
 *
 * @public
 */
export interface RecipeReference {
  /**
   * The ARN of the DataBrew recipe.
   *
   * @public
   */
  RecipeArn: string | undefined;

  /**
   * The RecipeVersion of the DataBrew recipe.
   *
   * @public
   */
  RecipeVersion: string | undefined;
}

/**
 * Actions defined in the Glue Studio data preparation recipe node.
 *
 * @public
 */
export interface RecipeAction {
  /**
   * The operation of the recipe action.
   *
   * @public
   */
  Operation: string | undefined;

  /**
   * The parameters of the recipe action.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * Condition expression defined in the Glue Studio data preparation recipe node.
 *
 * @public
 */
export interface ConditionExpression {
  /**
   * The condition of the condition expression.
   *
   * @public
   */
  Condition: string | undefined;

  /**
   * The value of the condition expression.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The target column of the condition expressions.
   *
   * @public
   */
  TargetColumn: string | undefined;
}

/**
 * A recipe step used in a Glue Studio data preparation recipe node.
 *
 * @public
 */
export interface RecipeStep {
  /**
   * The transformation action of the recipe step.
   *
   * @public
   */
  Action: RecipeAction | undefined;

  /**
   * The condition expressions for the recipe step.
   *
   * @public
   */
  ConditionExpressions?: ConditionExpression[] | undefined;
}

/**
 * A Glue Studio node that uses a Glue DataBrew recipe in Glue jobs.
 *
 * @public
 */
export interface Recipe {
  /**
   * The name of the Glue Studio node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the recipe node, identified by id.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * A reference to the DataBrew recipe used by the node.
   *
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * Transform steps used in the recipe node.
   *
   * @public
   */
  RecipeSteps?: RecipeStep[] | undefined;
}

/**
 * Specifies an Amazon Redshift data store.
 *
 * @public
 */
export interface RedshiftSource {
  /**
   * The name of the Amazon Redshift data store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The database table to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * The Amazon S3 path where temporary data can be staged when copying out of the database.
   *
   * @public
   */
  RedshiftTmpDir?: string | undefined;

  /**
   * The IAM role with permissions.
   *
   * @public
   */
  TmpDirIAMRole?: string | undefined;
}

/**
 * The options to configure an upsert operation when writing to a Redshift target .
 *
 * @public
 */
export interface UpsertRedshiftTargetOptions {
  /**
   * The physical location of the Redshift table.
   *
   * @public
   */
  TableLocation?: string | undefined;

  /**
   * The name of the connection to use to write to Redshift.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The keys used to determine whether to perform an update or insert.
   *
   * @public
   */
  UpsertKeys?: string[] | undefined;
}

/**
 * Specifies a target that uses Amazon Redshift.
 *
 * @public
 */
export interface RedshiftTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The name of the database to write to.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to write to.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * The Amazon S3 path where temporary data can be staged when copying out of the database.
   *
   * @public
   */
  RedshiftTmpDir?: string | undefined;

  /**
   * The IAM role with permissions.
   *
   * @public
   */
  TmpDirIAMRole?: string | undefined;

  /**
   * The set of options to configure an upsert operation when writing to a Redshift target.
   *
   * @public
   */
  UpsertRedshiftOptions?: UpsertRedshiftTargetOptions | undefined;
}

/**
 * Specifies a Relational database data source in the Glue Data Catalog.
 *
 * @public
 */
export interface RelationalCatalogSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;
}

/**
 * Specifies a transform that renames a single data property key.
 *
 * @public
 */
export interface RenameField {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * A JSON path to a variable in the data structure for the source data.
   *
   * @public
   */
  SourcePath: string[] | undefined;

  /**
   * A JSON path to a variable in the data structure for the target data.
   *
   * @public
   */
  TargetPath: string[] | undefined;
}

/**
 * Specifies a group of filters with a logical operator that determines how the filters are combined to evaluate routing conditions.
 *
 * @public
 */
export interface GroupFilters {
  /**
   * The name of the filter group.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * A list of filter expressions that define the conditions for this group.
   *
   * @public
   */
  Filters: FilterExpression[] | undefined;

  /**
   * The logical operator used to combine the filters in this group. Determines whether all filters must match (AND) or any filter can match (OR).
   *
   * @public
   */
  LogicalOperator: FilterLogicalOperator | undefined;
}

/**
 * Specifies a route node that directs data to different output paths based on defined filtering conditions.
 *
 * @public
 */
export interface Route {
  /**
   * The name of the route node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The input connection for the route node.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * A list of group filters that define the routing conditions and criteria for directing data to different output paths.
   *
   * @public
   */
  GroupFiltersList: GroupFilters[] | undefined;
}

/**
 * Specifies a Delta Lake data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3.
 *
 * @public
 */
export interface S3CatalogDeltaSource {
  /**
   * The name of the Delta Lake data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * Specifies additional connection options.
   *
   * @public
   */
  AdditionalDeltaOptions?: Record<string, string> | undefined;

  /**
   * Specifies the data schema for the Delta Lake source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a Hudi data source that is registered in the Glue Data Catalog. The Hudi data source must be stored in Amazon S3.
 *
 * @public
 */
export interface S3CatalogHudiSource {
  /**
   * The name of the Hudi data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * Specifies additional connection options.
   *
   * @public
   */
  AdditionalHudiOptions?: Record<string, string> | undefined;

  /**
   * Specifies the data schema for the Hudi source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies an Apache Iceberg data source that is registered in the Glue Data Catalog. The Iceberg data source must be stored in Amazon S3.
 *
 * @public
 */
export interface S3CatalogIcebergSource {
  /**
   * The name of the Iceberg data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The name of the table in the database to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * Specifies additional connection options for the Iceberg data source.
   *
   * @public
   */
  AdditionalIcebergOptions?: Record<string, string> | undefined;

  /**
   * Specifies the data schema for the Iceberg source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies an Amazon S3 data store in the Glue Data Catalog.
 *
 * @public
 */
export interface S3CatalogSource {
  /**
   * The name of the data store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The database to read from.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The database table to read from.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * Partitions satisfying this predicate are deleted. Files within the retention period in these partitions are not deleted. Set to `""` – empty by default.
   *
   * @public
   */
  PartitionPredicate?: string | undefined;

  /**
   * Specifies additional connection options.
   *
   * @public
   */
  AdditionalOptions?: S3SourceAdditionalOptions | undefined;
}

/**
 * Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.
 *
 * @public
 */
export interface S3CatalogTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies native partitioning using a sequence of keys.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * The name of the table in the database to write to.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * The name of the database to write to.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * A policy that specifies update behavior for the crawler.
   *
   * @public
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy | undefined;

  /**
   * Specifies whether to automatically enable data quality evaluation for the S3 catalog target. When set to `true`, data quality checks are performed automatically during the write operation.
   *
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;
}

/**
 * Specifies additional connection options for the Amazon S3 data store.
 *
 * @public
 */
export interface S3DirectSourceAdditionalOptions {
  /**
   * Sets the upper limit for the target size of the dataset in bytes that will be processed.
   *
   * @public
   */
  BoundedSize?: number | undefined;

  /**
   * Sets the upper limit for the target number of files that will be processed.
   *
   * @public
   */
  BoundedFiles?: number | undefined;

  /**
   * Sets option to enable a sample path.
   *
   * @public
   */
  EnableSamplePath?: boolean | undefined;

  /**
   * If enabled, specifies the sample path.
   *
   * @public
   */
  SamplePath?: string | undefined;
}

/**
 * Specifies a command-separated value (CSV) data store stored in Amazon S3.
 *
 * @public
 */
export interface S3CsvSource {
  /**
   * The name of the data store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of the Amazon S3 paths to read from.
   *
   * @public
   */
  Paths: string[] | undefined;

  /**
   * Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are `"gzip"` and `"bzip"`).
   *
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * A string containing a JSON list of Unix-style glob patterns to exclude. For example, "[\"**.pdf\"]" excludes all PDF files.
   *
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * The target group size in bytes. The default is computed based on the input data size and the size of your cluster. When there are fewer than 50,000 input files, `"groupFiles"` must be set to `"inPartition"` for this to take effect.
   *
   * @public
   */
  GroupSize?: string | undefined;

  /**
   * Grouping files is turned on by default when the input contains more than 50,000 files. To turn on grouping with fewer than 50,000 files, set this parameter to "inPartition". To disable grouping when there are more than 50,000 files, set this parameter to `"none"`.
   *
   * @public
   */
  GroupFiles?: string | undefined;

  /**
   * If set to true, recursively reads files in all subdirectories under the specified paths.
   *
   * @public
   */
  Recurse?: boolean | undefined;

  /**
   * This option controls the duration in milliseconds after which the s3 listing is likely to be consistent. Files with modification timestamps falling within the last maxBand milliseconds are tracked specially when using JobBookmarks to account for Amazon S3 eventual consistency. Most users don't need to set this option. The default is 900000 milliseconds, or 15 minutes.
   *
   * @public
   */
  MaxBand?: number | undefined;

  /**
   * This option specifies the maximum number of files to save from the last maxBand seconds. If this number is exceeded, extra files are skipped and only processed in the next job run.
   *
   * @public
   */
  MaxFilesInBand?: number | undefined;

  /**
   * Specifies additional connection options.
   *
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * Specifies the delimiter character. The default is a comma: ",", but any other character can be specified.
   *
   * @public
   */
  Separator: Separator | undefined;

  /**
   * Specifies a character to use for escaping. This option is used only when reading CSV files. The default value is `none`. If enabled, the character which immediately follows is used as-is, except for a small set of well-known escapes (`\n`, `\r`, `\t`, and `\0`).
   *
   * @public
   */
  Escaper?: string | undefined;

  /**
   * Specifies the character to use for quoting. The default is a double quote: `'"'`. Set this to `-1` to turn off quoting entirely.
   *
   * @public
   */
  QuoteChar: QuoteChar | undefined;

  /**
   * A Boolean value that specifies whether a single record can span multiple lines. This can occur when a field contains a quoted new-line character. You must set this option to True if any record spans multiple lines. The default value is `False`, which allows for more aggressive file-splitting during parsing.
   *
   * @public
   */
  Multiline?: boolean | undefined;

  /**
   * A Boolean value that specifies whether to treat the first line as a header. The default value is `False`.
   *
   * @public
   */
  WithHeader?: boolean | undefined;

  /**
   * A Boolean value that specifies whether to write the header to output. The default value is `True`.
   *
   * @public
   */
  WriteHeader?: boolean | undefined;

  /**
   * A Boolean value that specifies whether to skip the first data line. The default value is `False`.
   *
   * @public
   */
  SkipFirst?: boolean | undefined;

  /**
   * A Boolean value that specifies whether to use the advanced SIMD CSV reader along with Apache Arrow based columnar memory formats. Only available in Glue version 3.0.
   *
   * @public
   */
  OptimizePerformance?: boolean | undefined;

  /**
   * Specifies the data schema for the S3 CSV source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a target that writes to a Delta Lake data source in the Glue Data Catalog.
 *
 * @public
 */
export interface S3DeltaCatalogTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies native partitioning using a sequence of keys.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * The name of the table in the database to write to.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * The name of the database to write to.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * Specifies additional connection options for the connector.
   *
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * A policy that specifies update behavior for the crawler.
   *
   * @public
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy | undefined;

  /**
   * Specifies whether to automatically enable data quality evaluation for the S3 Delta catalog target. When set to `true`, data quality checks are performed automatically during the write operation.
   *
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;

  /**
   * Specifies the data schema for the S3 Delta catalog target.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * A policy that specifies update behavior for the crawler.
 *
 * @public
 */
export interface DirectSchemaChangePolicy {
  /**
   * Whether to use the specified update behavior when the crawler finds a changed schema.
   *
   * @public
   */
  EnableUpdateCatalog?: boolean | undefined;

  /**
   * The update behavior when the crawler finds a changed schema.
   *
   * @public
   */
  UpdateBehavior?: UpdateCatalogBehavior | undefined;

  /**
   * Specifies the table in the database that the schema change policy applies to.
   *
   * @public
   */
  Table?: string | undefined;

  /**
   * Specifies the database that the schema change policy applies to.
   *
   * @public
   */
  Database?: string | undefined;
}

/**
 * Specifies a target that writes to a Delta Lake data source in Amazon S3.
 *
 * @public
 */
export interface S3DeltaDirectTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies native partitioning using a sequence of keys.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * The Amazon S3 path of your Delta Lake data source to write to.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are `"gzip"` and `"bzip"`).
   *
   * @public
   */
  Compression: DeltaTargetCompressionType | undefined;

  /**
   * Specifies the number of target partitions for distributing Delta Lake dataset files across Amazon S3.
   *
   * @public
   */
  NumberTargetPartitions?: string | undefined;

  /**
   * Specifies the data output format for the target.
   *
   * @public
   */
  Format: TargetFormat | undefined;

  /**
   * Specifies additional connection options for the connector.
   *
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * A policy that specifies update behavior for the crawler.
   *
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * Specifies whether to automatically enable data quality evaluation for the S3 Delta direct target. When set to `true`, data quality checks are performed automatically during the write operation.
   *
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;
}

/**
 * Specifies a Delta Lake data source stored in Amazon S3.
 *
 * @public
 */
export interface S3DeltaSource {
  /**
   * The name of the Delta Lake source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of the Amazon S3 paths to read from.
   *
   * @public
   */
  Paths: string[] | undefined;

  /**
   * Specifies additional connection options.
   *
   * @public
   */
  AdditionalDeltaOptions?: Record<string, string> | undefined;

  /**
   * Specifies additional options for the connector.
   *
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * Specifies the data schema for the Delta Lake source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a data target that writes to Amazon S3.
 *
 * @public
 */
export interface S3DirectTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies native partitioning using a sequence of keys.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * A single Amazon S3 path to write to.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are `"gzip"` and `"bzip"`).
   *
   * @public
   */
  Compression?: string | undefined;

  /**
   * Specifies the number of target partitions when writing data directly to Amazon S3.
   *
   * @public
   */
  NumberTargetPartitions?: string | undefined;

  /**
   * Specifies the data output format for the target.
   *
   * @public
   */
  Format: TargetFormat | undefined;

  /**
   * A policy that specifies update behavior for the crawler.
   *
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * Specifies whether to automatically enable data quality evaluation for the S3 direct target. When set to `true`, data quality checks are performed automatically during the write operation.
   *
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;

  /**
   * Specifies the data schema for the S3 direct target.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies an S3 Excel data source.
 *
 * @public
 */
export interface S3ExcelSource {
  /**
   * The name of the S3 Excel data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The S3 paths where the Excel files are located.
   *
   * @public
   */
  Paths: string[] | undefined;

  /**
   * The compression format used for the Excel files.
   *
   * @public
   */
  CompressionType?: ParquetCompressionType | undefined;

  /**
   * Patterns to exclude specific files or paths from processing.
   *
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * Defines the size of file groups for batch processing.
   *
   * @public
   */
  GroupSize?: string | undefined;

  /**
   * Specifies how files should be grouped for processing.
   *
   * @public
   */
  GroupFiles?: string | undefined;

  /**
   * Indicates whether to recursively process subdirectories.
   *
   * @public
   */
  Recurse?: boolean | undefined;

  /**
   * The maximum number of processing bands to use.
   *
   * @public
   */
  MaxBand?: number | undefined;

  /**
   * The maximum number of files to process in each band.
   *
   * @public
   */
  MaxFilesInBand?: number | undefined;

  /**
   * Additional configuration options for S3 direct source processing.
   *
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * The number of rows to process from each Excel file.
   *
   * @public
   */
  NumberRows?: number | undefined;

  /**
   * The number of rows to skip at the end of each Excel file.
   *
   * @public
   */
  SkipFooter?: number | undefined;

  /**
   * The Glue schemas to apply to the processed data.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.
 *
 * @public
 */
export interface S3GlueParquetTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies native partitioning using a sequence of keys.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * A single Amazon S3 path to write to.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are `"gzip"` and `"bzip"`).
   *
   * @public
   */
  Compression?: ParquetCompressionType | undefined;

  /**
   * Specifies the number of target partitions for Parquet files when writing to Amazon S3 using Glue.
   *
   * @public
   */
  NumberTargetPartitions?: string | undefined;

  /**
   * A policy that specifies update behavior for the crawler.
   *
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * Specifies whether to automatically enable data quality evaluation for the S3 Glue Parquet target. When set to `true`, data quality checks are performed automatically during the write operation.
   *
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;
}

/**
 * Specifies a target that writes to a Hudi data source in the Glue Data Catalog.
 *
 * @public
 */
export interface S3HudiCatalogTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies native partitioning using a sequence of keys.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * The name of the table in the database to write to.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * The name of the database to write to.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * Specifies additional connection options for the connector.
   *
   * @public
   */
  AdditionalOptions: Record<string, string> | undefined;

  /**
   * A policy that specifies update behavior for the crawler.
   *
   * @public
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy | undefined;

  /**
   * Specifies whether to automatically enable data quality evaluation for the S3 Hudi catalog target. When set to `true`, data quality checks are performed automatically during the write operation.
   *
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;

  /**
   * Specifies the data schema for the S3 Hudi catalog target.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a target that writes to a Hudi data source in Amazon S3.
 *
 * @public
 */
export interface S3HudiDirectTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The Amazon S3 path of your Hudi data source to write to.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are `"gzip"` and `"bzip"`).
   *
   * @public
   */
  Compression: HudiTargetCompressionType | undefined;

  /**
   * Specifies the number of target partitions for distributing Hudi dataset files across Amazon S3.
   *
   * @public
   */
  NumberTargetPartitions?: string | undefined;

  /**
   * Specifies native partitioning using a sequence of keys.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * Specifies the data output format for the target.
   *
   * @public
   */
  Format: TargetFormat | undefined;

  /**
   * Specifies additional connection options for the connector.
   *
   * @public
   */
  AdditionalOptions: Record<string, string> | undefined;

  /**
   * A policy that specifies update behavior for the crawler.
   *
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * Specifies whether to automatically enable data quality evaluation for the S3 Hudi direct target. When set to `true`, data quality checks are performed automatically during the write operation.
   *
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;
}

/**
 * Specifies a Hudi data source stored in Amazon S3.
 *
 * @public
 */
export interface S3HudiSource {
  /**
   * The name of the Hudi source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of the Amazon S3 paths to read from.
   *
   * @public
   */
  Paths: string[] | undefined;

  /**
   * Specifies additional connection options.
   *
   * @public
   */
  AdditionalHudiOptions?: Record<string, string> | undefined;

  /**
   * Specifies additional options for the connector.
   *
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * Specifies the data schema for the Hudi source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a HyperDirect data target that writes to Amazon S3.
 *
 * @public
 */
export interface S3HyperDirectTarget {
  /**
   * The unique identifier for the HyperDirect target node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the input source for the HyperDirect target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies the data output format for the HyperDirect target.
   *
   * @public
   */
  Format?: TargetFormat | undefined;

  /**
   * Defines the partitioning strategy for the output data.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * The S3 location where the output data will be written.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The compression type to apply to the output data.
   *
   * @public
   */
  Compression?: HyperTargetCompressionType | undefined;

  /**
   * Defines how schema changes are handled during write operations.
   *
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * Specifies whether to automatically enable data quality evaluation for the S3 Hyper direct target. When set to `true`, data quality checks are performed automatically during the write operation.
   *
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;

  /**
   * Specifies the data schema for the S3 Hyper direct target.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies an Apache Iceberg catalog target that writes data to Amazon S3 and registers the table in the Glue Data Catalog.
 *
 * @public
 */
export interface S3IcebergCatalogTarget {
  /**
   * The name of the Iceberg catalog target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The input connection for the Iceberg catalog target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * A list of partition keys for the Iceberg table.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * The name of the table to write to in the catalog.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * The name of the database to write to.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * Specifies additional connection options for the Iceberg catalog target.
   *
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * The policy for handling schema changes in the catalog target.
   *
   * @public
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy | undefined;

  /**
   * Specifies whether to automatically enable data quality evaluation for the S3 Iceberg catalog target. When set to `true`, data quality checks are performed automatically during the write operation.
   *
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;
}

/**
 * Specifies a target that writes to an Iceberg data source in Amazon S3.
 *
 * @public
 */
export interface S3IcebergDirectTarget {
  /**
   * Specifies the unique identifier for the Iceberg target node in your data pipeline.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Defines the single input source that provides data to this Iceberg target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Specifies the columns used to partition the Iceberg table data in S3.
   *
   * @public
   */
  PartitionKeys?: string[][] | undefined;

  /**
   * Defines the S3 location where the Iceberg table data will be stored.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * Specifies the file format used for storing Iceberg table data (e.g., Parquet, ORC).
   *
   * @public
   */
  Format: TargetFormat | undefined;

  /**
   * Provides additional configuration options for customizing the Iceberg table behavior.
   *
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * Defines how schema changes are handled when writing data to the Iceberg table.
   *
   * @public
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy | undefined;

  /**
   * Specifies configuration options for automatic data quality evaluation in Glue jobs. This structure enables automated data quality checks and monitoring during ETL operations, helping to ensure data integrity and reliability without manual intervention.
   *
   * @public
   */
  AutoDataQuality?: AutoDataQuality | undefined;

  /**
   * Specifies the compression codec used for Iceberg table files in S3.
   *
   * @public
   */
  Compression: IcebergTargetCompressionType | undefined;

  /**
   * Sets the number of target partitions for distributing Iceberg table files across S3.
   *
   * @public
   */
  NumberTargetPartitions?: string | undefined;

  /**
   * Specifies the data schema for the S3 Iceberg direct target.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a JSON data store stored in Amazon S3.
 *
 * @public
 */
export interface S3JsonSource {
  /**
   * The name of the data store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of the Amazon S3 paths to read from.
   *
   * @public
   */
  Paths: string[] | undefined;

  /**
   * Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are `"gzip"` and `"bzip"`).
   *
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * A string containing a JSON list of Unix-style glob patterns to exclude. For example, "[\"**.pdf\"]" excludes all PDF files.
   *
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * The target group size in bytes. The default is computed based on the input data size and the size of your cluster. When there are fewer than 50,000 input files, `"groupFiles"` must be set to `"inPartition"` for this to take effect.
   *
   * @public
   */
  GroupSize?: string | undefined;

  /**
   * Grouping files is turned on by default when the input contains more than 50,000 files. To turn on grouping with fewer than 50,000 files, set this parameter to "inPartition". To disable grouping when there are more than 50,000 files, set this parameter to `"none"`.
   *
   * @public
   */
  GroupFiles?: string | undefined;

  /**
   * If set to true, recursively reads files in all subdirectories under the specified paths.
   *
   * @public
   */
  Recurse?: boolean | undefined;

  /**
   * This option controls the duration in milliseconds after which the s3 listing is likely to be consistent. Files with modification timestamps falling within the last maxBand milliseconds are tracked specially when using JobBookmarks to account for Amazon S3 eventual consistency. Most users don't need to set this option. The default is 900000 milliseconds, or 15 minutes.
   *
   * @public
   */
  MaxBand?: number | undefined;

  /**
   * This option specifies the maximum number of files to save from the last maxBand seconds. If this number is exceeded, extra files are skipped and only processed in the next job run.
   *
   * @public
   */
  MaxFilesInBand?: number | undefined;

  /**
   * Specifies additional connection options.
   *
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * A JsonPath string defining the JSON data.
   *
   * @public
   */
  JsonPath?: string | undefined;

  /**
   * A Boolean value that specifies whether a single record can span multiple lines. This can occur when a field contains a quoted new-line character. You must set this option to True if any record spans multiple lines. The default value is `False`, which allows for more aggressive file-splitting during parsing.
   *
   * @public
   */
  Multiline?: boolean | undefined;

  /**
   * Specifies the data schema for the S3 JSON source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies an Apache Parquet data store stored in Amazon S3.
 *
 * @public
 */
export interface S3ParquetSource {
  /**
   * The name of the data store.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of the Amazon S3 paths to read from.
   *
   * @public
   */
  Paths: string[] | undefined;

  /**
   * Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are `"gzip"` and `"bzip"`).
   *
   * @public
   */
  CompressionType?: ParquetCompressionType | undefined;

  /**
   * A string containing a JSON list of Unix-style glob patterns to exclude. For example, "[\"**.pdf\"]" excludes all PDF files.
   *
   * @public
   */
  Exclusions?: string[] | undefined;

  /**
   * The target group size in bytes. The default is computed based on the input data size and the size of your cluster. When there are fewer than 50,000 input files, `"groupFiles"` must be set to `"inPartition"` for this to take effect.
   *
   * @public
   */
  GroupSize?: string | undefined;

  /**
   * Grouping files is turned on by default when the input contains more than 50,000 files. To turn on grouping with fewer than 50,000 files, set this parameter to "inPartition". To disable grouping when there are more than 50,000 files, set this parameter to `"none"`.
   *
   * @public
   */
  GroupFiles?: string | undefined;

  /**
   * If set to true, recursively reads files in all subdirectories under the specified paths.
   *
   * @public
   */
  Recurse?: boolean | undefined;

  /**
   * This option controls the duration in milliseconds after which the s3 listing is likely to be consistent. Files with modification timestamps falling within the last maxBand milliseconds are tracked specially when using JobBookmarks to account for Amazon S3 eventual consistency. Most users don't need to set this option. The default is 900000 milliseconds, or 15 minutes.
   *
   * @public
   */
  MaxBand?: number | undefined;

  /**
   * This option specifies the maximum number of files to save from the last maxBand seconds. If this number is exceeded, extra files are skipped and only processed in the next job run.
   *
   * @public
   */
  MaxFilesInBand?: number | undefined;

  /**
   * Specifies additional connection options.
   *
   * @public
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions | undefined;

  /**
   * Specifies the data schema for the S3 Parquet source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a transform that chooses the data property keys that you want to keep.
 *
 * @public
 */
export interface SelectFields {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * A JSON path to a variable in the data structure.
   *
   * @public
   */
  Paths: string[][] | undefined;
}

/**
 * Specifies a transform that chooses one `DynamicFrame` from a collection of `DynamicFrames`. The output is the selected `DynamicFrame`
 *
 * @public
 */
export interface SelectFromCollection {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The index for the DynamicFrame to be selected.
   *
   * @public
   */
  Index: number | undefined;
}

/**
 * Specifies configuration for Snowflake nodes in Glue Studio.
 *
 * @public
 */
export interface SnowflakeNodeData {
  /**
   * Specifies how retrieved data is specified. Valid values: `"table"`, `"query"`.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * Specifies a Glue Data Catalog Connection to a Snowflake endpoint.
   *
   * @public
   */
  Connection?: Option | undefined;

  /**
   * Specifies a Snowflake database schema for your node to use.
   *
   * @public
   */
  Schema?: string | undefined;

  /**
   * Specifies a Snowflake table for your node to use.
   *
   * @public
   */
  Table?: string | undefined;

  /**
   * Specifies a Snowflake database for your node to use.
   *
   * @public
   */
  Database?: string | undefined;

  /**
   * Not currently used.
   *
   * @public
   */
  TempDir?: string | undefined;

  /**
   * Not currently used.
   *
   * @public
   */
  IamRole?: Option | undefined;

  /**
   * Specifies additional options passed to the Snowflake connector. If options are specified elsewhere in this node, this will take precedence.
   *
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * A SQL string used to retrieve data with the `query` sourcetype.
   *
   * @public
   */
  SampleQuery?: string | undefined;

  /**
   * A SQL string run before the Snowflake connector performs its standard actions.
   *
   * @public
   */
  PreAction?: string | undefined;

  /**
   * A SQL string run after the Snowflake connector performs its standard actions.
   *
   * @public
   */
  PostAction?: string | undefined;

  /**
   * Specifies what action to take when writing to a table with preexisting data. Valid values: `append`, `merge`, `truncate`, `drop`.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * Used when Action is `append`. Specifies the resolution behavior when a row already exists. If true, preexisting rows will be updated. If false, those rows will be inserted.
   *
   * @public
   */
  Upsert?: boolean | undefined;

  /**
   * Specifies a merge action. Valid values: `simple`, `custom`. If simple, merge behavior is defined by `MergeWhenMatched` and `MergeWhenNotMatched`. If custom, defined by `MergeClause`.
   *
   * @public
   */
  MergeAction?: string | undefined;

  /**
   * Specifies how to resolve records that match preexisting data when merging. Valid values: `update`, `delete`.
   *
   * @public
   */
  MergeWhenMatched?: string | undefined;

  /**
   * Specifies how to process records that do not match preexisting data when merging. Valid values: `insert`, `none`.
   *
   * @public
   */
  MergeWhenNotMatched?: string | undefined;

  /**
   * A SQL statement that specifies a custom merge behavior.
   *
   * @public
   */
  MergeClause?: string | undefined;

  /**
   * The name of a staging table used when performing `merge` or upsert `append` actions. Data is written to this table, then moved to `table` by a generated postaction.
   *
   * @public
   */
  StagingTable?: string | undefined;

  /**
   * Specifies the columns combined to identify a record when detecting matches for merges and upserts. A list of structures with `value`, `label` and `description` keys. Each structure describes a column.
   *
   * @public
   */
  SelectedColumns?: Option[] | undefined;

  /**
   * Specifies whether automatic query pushdown is enabled. If pushdown is enabled, then when a query is run on Spark, if part of the query can be "pushed down" to the Snowflake server, it is pushed down. This improves performance of some queries.
   *
   * @public
   */
  AutoPushdown?: boolean | undefined;

  /**
   * Manually defines the target schema for the node. A list of structures with `value` , `label` and `description` keys. Each structure defines a column.
   *
   * @public
   */
  TableSchema?: Option[] | undefined;
}

/**
 * Specifies a Snowflake data source.
 *
 * @public
 */
export interface SnowflakeSource {
  /**
   * The name of the Snowflake data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Configuration for the Snowflake data source.
   *
   * @public
   */
  Data: SnowflakeNodeData | undefined;

  /**
   * Specifies user-defined schemas for your output data.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a Snowflake target.
 *
 * @public
 */
export interface SnowflakeTarget {
  /**
   * The name of the Snowflake target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the data of the Snowflake target node.
   *
   * @public
   */
  Data: SnowflakeNodeData | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs?: string[] | undefined;
}

/**
 * Specifies a connector to an Apache Spark data source.
 *
 * @public
 */
export interface SparkConnectorSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the connection that is associated with the connector.
   *
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * The name of a connector that assists with accessing the data store in Glue Studio.
   *
   * @public
   */
  ConnectorName: string | undefined;

  /**
   * The type of connection, such as marketplace.spark or custom.spark, designating a connection to an Apache Spark data store.
   *
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * Additional connection options for the connector.
   *
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * Specifies data schema for the custom spark source.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a target that uses an Apache Spark connector.
 *
 * @public
 */
export interface SparkConnectorTarget {
  /**
   * The name of the data target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The nodes that are inputs to the data target.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * The name of a connection for an Apache Spark connector.
   *
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * The name of an Apache Spark connector.
   *
   * @public
   */
  ConnectorName: string | undefined;

  /**
   * The type of connection, such as marketplace.spark or custom.spark, designating a connection to an Apache Spark data store.
   *
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * Additional connection options for the connector.
   *
   * @public
   */
  AdditionalOptions?: Record<string, string> | undefined;

  /**
   * Specifies the data schema for the custom spark target.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Represents a single entry in the list of values for `SqlAliases`.
 *
 * @public
 */
export interface SqlAlias {
  /**
   * A table, or a column in a table.
   *
   * @public
   */
  From: string | undefined;

  /**
   * A temporary name given to a table, or a column in a table.
   *
   * @public
   */
  Alias: string | undefined;
}

/**
 * Specifies a transform where you enter a SQL query using Spark SQL syntax to transform the data. The output is a single `DynamicFrame`.
 *
 * @public
 */
export interface SparkSQL {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names. You can associate a table name with each input node to use in the SQL query. The name you choose must meet the Spark SQL naming restrictions.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * A SQL query that must use Spark SQL syntax and return a single data set.
   *
   * @public
   */
  SqlQuery: string | undefined;

  /**
   * A list of aliases. An alias allows you to specify what name to use in the SQL for a given input. For example, you have a datasource named "MyDataSource". If you specify `From` as MyDataSource, and `Alias` as SqlName, then in your SQL you can do:
   *
   * `select * from SqlName`
   *
   * and that gets data from MyDataSource.
   *
   * @public
   */
  SqlAliases: SqlAlias[] | undefined;

  /**
   * Specifies the data schema for the SparkSQL transform.
   *
   * @public
   */
  OutputSchemas?: GlueSchema[] | undefined;
}

/**
 * Specifies a transform that writes samples of the data to an Amazon S3 bucket.
 *
 * @public
 */
export interface Spigot {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * A path in Amazon S3 where the transform will write a subset of records from the dataset to a JSON file in an Amazon S3 bucket.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * Specifies a number of records to write starting from the beginning of the dataset.
   *
   * @public
   */
  Topk?: number | undefined;

  /**
   * The probability (a decimal value with a maximum value of 1) of picking any given record. A value of 1 indicates that each row read from the dataset should be included in the sample output.
   *
   * @public
   */
  Prob?: number | undefined;
}

/**
 * Specifies a transform that splits data property keys into two `DynamicFrames`. The output is a collection of `DynamicFrames`: one with selected data property keys, and one with the remaining data property keys.
 *
 * @public
 */
export interface SplitFields {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data inputs identified by their node names.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * A JSON path to a variable in the data structure.
   *
   * @public
   */
  Paths: string[][] | undefined;
}

/**
 * Specifies a transform that combines the rows from two or more datasets into a single result.
 *
 * @public
 */
export interface Union {
  /**
   * The name of the transform node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The node ID inputs to the transform.
   *
   * @public
   */
  Inputs: string[] | undefined;

  /**
   * Indicates the type of Union transform.
   *
   * Specify `ALL` to join all rows from data sources to the resulting DynamicFrame. The resulting union does not remove duplicate rows.
   *
   * Specify `DISTINCT` to remove duplicate rows in the resulting DynamicFrame.
   *
   * @public
   */
  UnionType: UnionType | undefined;
}

/**
 * Specifies code that runs when a job is run.
 *
 * @public
 */
export interface JobCommand {
  /**
   * The name of the job command. For an Apache Spark ETL job, this must be `glueetl`. For a Python shell job, it must be `pythonshell`. For an Apache Spark streaming ETL job, this must be `gluestreaming`. For a Ray job, this must be `glueray`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that runs a job.
   *
   * @public
   */
  ScriptLocation?: string | undefined;

  /**
   * The Python version being used to run a Python shell job. Allowed values are 2 or 3.
   *
   * @public
   */
  PythonVersion?: string | undefined;

  /**
   * In Ray jobs, Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment. This field is not used in other job types. For supported runtime environment values, see [Supported Ray runtime environments](https://docs.aws.amazon.com/glue/latest/dg/ray-jobs-section.html) in the Glue Developer Guide.
   *
   * @public
   */
  Runtime?: string | undefined;
}

/**
 * Specifies the connections used by a job.
 *
 * @public
 */
export interface ConnectionsList {
  /**
   * A list of connections used by the job.
   *
   * @public
   */
  Connections?: string[] | undefined;
}

/**
 * An execution property of a job.
 *
 * @public
 */
export interface ExecutionProperty {
  /**
   * The maximum number of concurrent runs allowed for the job. The default is 1. An error is returned when this threshold is reached. The maximum value you can specify is controlled by a service limit.
   *
   * @public
   */
  MaxConcurrentRuns?: number | undefined;
}

/**
 * The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.
 *
 * @public
 */
export interface SourceControlDetails {
  /**
   * The provider for the remote repository.
   *
   * @public
   */
  Provider?: SourceControlProvider | undefined;

  /**
   * The name of the remote repository that contains the job artifacts.
   *
   * @public
   */
  Repository?: string | undefined;

  /**
   * The owner of the remote repository that contains the job artifacts.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * An optional branch in the remote repository.
   *
   * @public
   */
  Branch?: string | undefined;

  /**
   * An optional folder in the remote repository.
   *
   * @public
   */
  Folder?: string | undefined;

  /**
   * The last commit ID for a commit in the remote repository.
   *
   * @public
   */
  LastCommitId?: string | undefined;

  /**
   * The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token.
   *
   * @public
   */
  AuthStrategy?: SourceControlAuthStrategy | undefined;

  /**
   * The value of an authorization token.
   *
   * @public
   */
  AuthToken?: string | undefined;
}

/**
 * A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.
 *
 * For more information about how to utilize QuerySessionContext, see [Lake Formation workflow for application integration API operations](https://docs.aws.amazon.com/lake-formation/latest/dg/api-overview.html) in the developer guide.
 *
 * @public
 */
export interface QuerySessionContext {
  /**
   * A unique identifier generated by the query engine for the query.
   *
   * @public
   */
  QueryId?: string | undefined;

  /**
   * A timestamp provided by the query engine for when the query started.
   *
   * @public
   */
  QueryStartTime?: Date | undefined;

  /**
   * An identifier string for the consumer cluster.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * A cryptographically generated query identifier generated by Glue or Lake Formation.
   *
   * @public
   */
  QueryAuthorizationId?: string | undefined;

  /**
   * An opaque string-string map passed by the query engine.
   *
   * @public
   */
  AdditionalContext?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchGetPartitionRequest {
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
   * A list of partition values identifying the partitions to retrieve.
   *
   * @public
   */
  PartitionsToGet: PartitionValueList[] | undefined;

  /**
   * A structure containing the Lake Formation audit context.
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.
   *
   * For more information about how to utilize QuerySessionContext, see [Lake Formation workflow for application integration API operations](https://docs.aws.amazon.com/lake-formation/latest/dg/api-overview.html) in the developer guide.
   *
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * Represents a slice of table data.
 *
 * @public
 */
export interface Partition {
  /**
   * The values of the partition.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The name of the catalog database in which to create the partition.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the database table in which to create the partition.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The time at which the partition was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time at which the partition was accessed.
   *
   * @public
   */
  LastAccessTime?: Date | undefined;

  /**
   * Provides information about the physical location where the partition is stored.
   *
   * @public
   */
  StorageDescriptor?: StorageDescriptor | undefined;

  /**
   * These key-value pairs define partition parameters.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * The last time at which column statistics were computed for this partition.
   *
   * @public
   */
  LastAnalyzedTime?: Date | undefined;

  /**
   * The ID of the Data Catalog in which the partition resides.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetPartitionResponse {
  /**
   * A list of the requested partitions.
   *
   * @public
   */
  Partitions?: Partition[] | undefined;

  /**
   * A list of the partition values in the request for which partitions were not returned.
   *
   * @public
   */
  UnprocessedKeys?: PartitionValueList[] | undefined;
}

/**
 * Represents a table optimizer to retrieve in the `BatchGetTableOptimizer` operation.
 *
 * @public
 */
export interface BatchGetTableOptimizerEntry {
  /**
   * The Catalog ID of the table.
   *
   * @public
   */
  catalogId?: string | undefined;

  /**
   * The name of the database in the catalog in which the table resides.
   *
   * @public
   */
  databaseName?: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  tableName?: string | undefined;

  /**
   * The type of table optimizer.
   *
   * @public
   */
  type?: TableOptimizerType | undefined;
}

/**
 * @public
 */
export interface BatchGetTableOptimizerRequest {
  /**
   * A list of `BatchGetTableOptimizerEntry` objects specifying the table optimizers to retrieve.
   *
   * @public
   */
  Entries: BatchGetTableOptimizerEntry[] | undefined;
}

/**
 * Contains details on one of the errors in the error list returned by the `BatchGetTableOptimizer` operation.
 *
 * @public
 */
export interface BatchGetTableOptimizerError {
  /**
   * An `ErrorDetail` object containing code and message details about the error.
   *
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * The Catalog ID of the table.
   *
   * @public
   */
  catalogId?: string | undefined;

  /**
   * The name of the database in the catalog in which the table resides.
   *
   * @public
   */
  databaseName?: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  tableName?: string | undefined;

  /**
   * The type of table optimizer.
   *
   * @public
   */
  type?: TableOptimizerType | undefined;
}

/**
 * The configuration for an Iceberg compaction optimizer. This configuration defines parameters for optimizing the layout of data files in Iceberg tables.
 *
 * @public
 */
export interface IcebergCompactionConfiguration {
  /**
   * The strategy to use for compaction. Valid values are:
   *
   * - `binpack`: Combines small files into larger files, typically targeting sizes over 100MB, while applying any pending deletes. This is the recommended compaction strategy for most use cases.
   * - `sort`: Organizes data based on specified columns which are sorted hierarchically during compaction, improving query performance for filtered operations. This strategy is recommended when your queries frequently filter on specific columns. To use this strategy, you must first define a sort order in your Iceberg table properties using the `sort_order` table property.
   * - `z-order`: Optimizes data organization by blending multiple attributes into a single scalar value that can be used for sorting, allowing efficient querying across multiple dimensions. This strategy is recommended when you need to query data across multiple dimensions simultaneously. To use this strategy, you must first define a sort order in your Iceberg table properties using the `sort_order` table property.
   *
   * If an input is not provided, the default value 'binpack' will be used.
   *
   * @public
   */
  strategy?: CompactionStrategy | undefined;

  /**
   * The minimum number of data files that must be present in a partition before compaction will actually compact files. This parameter helps control when compaction is triggered, preventing unnecessary compaction operations on partitions with few files. If an input is not provided, the default value 100 will be used.
   *
   * @public
   */
  minInputFiles?: number | undefined;

  /**
   * The minimum number of deletes that must be present in a data file to make it eligible for compaction. This parameter helps optimize compaction by focusing on files that contain a significant number of delete operations, which can improve query performance by removing deleted records. If an input is not provided, the default value 1 will be used.
   *
   * @public
   */
  deleteFileThreshold?: number | undefined;
}

/**
 * The configuration for a compaction optimizer. This configuration defines how data files in your table will be compacted to improve query performance and reduce storage costs.
 *
 * @public
 */
export interface CompactionConfiguration {
  /**
   * The configuration for an Iceberg compaction optimizer.
   *
   * @public
   */
  icebergConfiguration?: IcebergCompactionConfiguration | undefined;
}

/**
 * The configuration for an Iceberg orphan file deletion optimizer.
 *
 * @public
 */
export interface IcebergOrphanFileDeletionConfiguration {
  /**
   * The number of days that orphan files should be retained before file deletion. If an input is not provided, the default value 3 will be used.
   *
   * @public
   */
  orphanFileRetentionPeriodInDays?: number | undefined;

  /**
   * Specifies a directory in which to look for files (defaults to the table's location). You may choose a sub-directory rather than the top-level table location.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The interval in hours between orphan file deletion job runs. This parameter controls how frequently the orphan file deletion optimizer will run to clean up orphan files. The value must be between 3 and 168 hours (7 days). If an input is not provided, the default value 24 will be used.
   *
   * @public
   */
  runRateInHours?: number | undefined;
}

/**
 * The configuration for an orphan file deletion optimizer.
 *
 * @public
 */
export interface OrphanFileDeletionConfiguration {
  /**
   * The configuration for an Iceberg orphan file deletion optimizer.
   *
   * @public
   */
  icebergConfiguration?: IcebergOrphanFileDeletionConfiguration | undefined;
}

/**
 * The configuration for an Iceberg snapshot retention optimizer.
 *
 * @public
 */
export interface IcebergRetentionConfiguration {
  /**
   * The number of days to retain the Iceberg snapshots. If an input is not provided, the corresponding Iceberg table configuration field will be used or if not present, the default value 5 will be used.
   *
   * @public
   */
  snapshotRetentionPeriodInDays?: number | undefined;

  /**
   * The number of Iceberg snapshots to retain within the retention period. If an input is not provided, the corresponding Iceberg table configuration field will be used or if not present, the default value 1 will be used.
   *
   * @public
   */
  numberOfSnapshotsToRetain?: number | undefined;

  /**
   * If set to false, snapshots are only deleted from table metadata, and the underlying data and metadata files are not deleted.
   *
   * @public
   */
  cleanExpiredFiles?: boolean | undefined;

  /**
   * The interval in hours between retention job runs. This parameter controls how frequently the retention optimizer will run to clean up expired snapshots. The value must be between 3 and 168 hours (7 days). If an input is not provided, the default value 24 will be used.
   *
   * @public
   */
  runRateInHours?: number | undefined;
}

/**
 * The configuration for a snapshot retention optimizer.
 *
 * @public
 */
export interface RetentionConfiguration {
  /**
   * The configuration for an Iceberg snapshot retention optimizer.
   *
   * @public
   */
  icebergConfiguration?: IcebergRetentionConfiguration | undefined;
}

/**
 * An object that describes the VPC configuration for a table optimizer.
 *
 * This configuration is necessary to perform optimization on tables that are in a customer VPC.
 *
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
   * The name of the Glue connection used for the VPC for the table optimizer.
   *
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
 * Contains details on the configuration of a table optimizer. You pass this configuration when creating or updating a table optimizer.
 *
 * @public
 */
export interface TableOptimizerConfiguration {
  /**
   * A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Whether table optimization is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * A `TableOptimizerVpcConfiguration` object representing the VPC configuration for a table optimizer.
   *
   * This configuration is necessary to perform optimization on tables that are in a customer VPC.
   *
   * @public
   */
  vpcConfiguration?: TableOptimizerVpcConfiguration | undefined;

  /**
   * The configuration for a compaction optimizer. This configuration defines how data files in your table will be compacted to improve query performance and reduce storage costs.
   *
   * @public
   */
  compactionConfiguration?: CompactionConfiguration | undefined;

  /**
   * The configuration for a snapshot retention optimizer.
   *
   * @public
   */
  retentionConfiguration?: RetentionConfiguration | undefined;

  /**
   * The configuration for an orphan file deletion optimizer.
   *
   * @public
   */
  orphanFileDeletionConfiguration?: OrphanFileDeletionConfiguration | undefined;
}

/**
 * Compaction metrics for Iceberg for the optimizer run.
 *
 * @public
 */
export interface IcebergCompactionMetrics {
  /**
   * The number of bytes removed by the compaction job run.
   *
   * @public
   */
  NumberOfBytesCompacted?: number | undefined;

  /**
   * The number of files removed by the compaction job run.
   *
   * @public
   */
  NumberOfFilesCompacted?: number | undefined;

  /**
   * The number of DPU hours consumed by the job.
   *
   * @public
   */
  DpuHours?: number | undefined;

  /**
   * The number of DPUs consumed by the job, rounded up to the nearest whole number.
   *
   * @public
   */
  NumberOfDpus?: number | undefined;

  /**
   * The duration of the job in hours.
   *
   * @public
   */
  JobDurationInHour?: number | undefined;
}

/**
 * A structure that contains compaction metrics for the optimizer run.
 *
 * @public
 */
export interface CompactionMetrics {
  /**
   * A structure containing the Iceberg compaction metrics for the optimizer run.
   *
   * @public
   */
  IcebergMetrics?: IcebergCompactionMetrics | undefined;
}

/**
 * Metrics for the optimizer run.
 *
 * This structure is deprecated. See the individual metric members for compaction, retention, and orphan file deletion.
 *
 * @public
 */
export interface RunMetrics {
  /**
   * The number of bytes removed by the compaction job run.
   *
   * @public
   */
  NumberOfBytesCompacted?: string | undefined;

  /**
   * The number of files removed by the compaction job run.
   *
   * @public
   */
  NumberOfFilesCompacted?: string | undefined;

  /**
   * The number of DPUs consumed by the job, rounded up to the nearest whole number.
   *
   * @public
   */
  NumberOfDpus?: string | undefined;

  /**
   * The duration of the job in hours.
   *
   * @public
   */
  JobDurationInHour?: string | undefined;
}

/**
 * Orphan file deletion metrics for Iceberg for the optimizer run.
 *
 * @public
 */
export interface IcebergOrphanFileDeletionMetrics {
  /**
   * The number of orphan files deleted by the orphan file deletion job run.
   *
   * @public
   */
  NumberOfOrphanFilesDeleted?: number | undefined;

  /**
   * The number of DPU hours consumed by the job.
   *
   * @public
   */
  DpuHours?: number | undefined;

  /**
   * The number of DPUs consumed by the job, rounded up to the nearest whole number.
   *
   * @public
   */
  NumberOfDpus?: number | undefined;

  /**
   * The duration of the job in hours.
   *
   * @public
   */
  JobDurationInHour?: number | undefined;
}

/**
 * A structure that contains orphan file deletion metrics for the optimizer run.
 *
 * @public
 */
export interface OrphanFileDeletionMetrics {
  /**
   * A structure containing the Iceberg orphan file deletion metrics for the optimizer run.
   *
   * @public
   */
  IcebergMetrics?: IcebergOrphanFileDeletionMetrics | undefined;
}

/**
 * Snapshot retention metrics for Iceberg for the optimizer run.
 *
 * @public
 */
export interface IcebergRetentionMetrics {
  /**
   * The number of data files deleted by the retention job run.
   *
   * @public
   */
  NumberOfDataFilesDeleted?: number | undefined;

  /**
   * The number of manifest files deleted by the retention job run.
   *
   * @public
   */
  NumberOfManifestFilesDeleted?: number | undefined;

  /**
   * The number of manifest lists deleted by the retention job run.
   *
   * @public
   */
  NumberOfManifestListsDeleted?: number | undefined;

  /**
   * The number of DPU hours consumed by the job.
   *
   * @public
   */
  DpuHours?: number | undefined;

  /**
   * The number of DPUs consumed by the job, rounded up to the nearest whole number.
   *
   * @public
   */
  NumberOfDpus?: number | undefined;

  /**
   * The duration of the job in hours.
   *
   * @public
   */
  JobDurationInHour?: number | undefined;
}

/**
 * A structure that contains retention metrics for the optimizer run.
 *
 * @public
 */
export interface RetentionMetrics {
  /**
   * A structure containing the Iceberg retention metrics for the optimizer run.
   *
   * @public
   */
  IcebergMetrics?: IcebergRetentionMetrics | undefined;
}

/**
 * Contains details for a table optimizer run.
 *
 * @public
 */
export interface TableOptimizerRun {
  /**
   * An event type representing the status of the table optimizer run.
   *
   * @public
   */
  eventType?: TableOptimizerEventType | undefined;

  /**
   * Represents the epoch timestamp at which the compaction job was started within Lake Formation.
   *
   * @public
   */
  startTimestamp?: Date | undefined;

  /**
   * Represents the epoch timestamp at which the compaction job ended.
   *
   * @public
   */
  endTimestamp?: Date | undefined;

  /**
   * A `RunMetrics` object containing metrics for the optimizer run.
   *
   * This member is deprecated. See the individual metric members for compaction, retention, and orphan file deletion.
   *
   * @deprecated Metrics has been replaced by optimizer type specific metrics such as IcebergCompactionMetrics.
   * @public
   */
  metrics?: RunMetrics | undefined;

  /**
   * An error that occured during the optimizer run.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A `CompactionMetrics` object containing metrics for the optimizer run.
   *
   * @public
   */
  compactionMetrics?: CompactionMetrics | undefined;

  /**
   * The strategy used for the compaction run. Indicates which algorithm was applied to determine how files were selected and combined during the compaction process. Valid values are:
   *
   * - `binpack`: Combines small files into larger files, typically targeting sizes over 100MB, while applying any pending deletes. This is the recommended compaction strategy for most use cases.
   * - `sort`: Organizes data based on specified columns which are sorted hierarchically during compaction, improving query performance for filtered operations. This strategy is recommended when your queries frequently filter on specific columns. To use this strategy, you must first define a sort order in your Iceberg table properties using the `sort_order` table property.
   * - `z-order`: Optimizes data organization by blending multiple attributes into a single scalar value that can be used for sorting, allowing efficient querying across multiple dimensions. This strategy is recommended when you need to query data across multiple dimensions simultaneously. To use this strategy, you must first define a sort order in your Iceberg table properties using the `sort_order` table property.
   *
   * @public
   */
  compactionStrategy?: CompactionStrategy | undefined;

  /**
   * A `RetentionMetrics` object containing metrics for the optimizer run.
   *
   * @public
   */
  retentionMetrics?: RetentionMetrics | undefined;

  /**
   * An `OrphanFileDeletionMetrics` object containing metrics for the optimizer run.
   *
   * @public
   */
  orphanFileDeletionMetrics?: OrphanFileDeletionMetrics | undefined;
}

/**
 * Contains details about an optimizer associated with a table.
 *
 * @public
 */
export interface TableOptimizer {
  /**
   * The type of table optimizer. The valid values are:
   *
   * - `compaction`: for managing compaction with a table optimizer.
   * - `retention`: for managing the retention of snapshot with a table optimizer.
   * - `orphan_file_deletion`: for managing the deletion of orphan files with a table optimizer.
   *
   * @public
   */
  type?: TableOptimizerType | undefined;

  /**
   * A `TableOptimizerConfiguration` object that was specified when creating or updating a table optimizer.
   *
   * @public
   */
  configuration?: TableOptimizerConfiguration | undefined;

  /**
   * A `TableOptimizerRun` object representing the last run of the table optimizer.
   *
   * @public
   */
  lastRun?: TableOptimizerRun | undefined;

  /**
   * Specifies the source of the optimizer configuration. This indicates how the table optimizer was configured and which entity or service initiated the configuration.
   *
   * @public
   */
  configurationSource?: ConfigurationSource | undefined;
}

/**
 * Contains details for one of the table optimizers returned by the `BatchGetTableOptimizer` operation.
 *
 * @public
 */
export interface BatchTableOptimizer {
  /**
   * The Catalog ID of the table.
   *
   * @public
   */
  catalogId?: string | undefined;

  /**
   * The name of the database in the catalog in which the table resides.
   *
   * @public
   */
  databaseName?: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  tableName?: string | undefined;

  /**
   * A `TableOptimizer` object that contains details on the configuration and last run of a table optimizer.
   *
   * @public
   */
  tableOptimizer?: TableOptimizer | undefined;
}

/**
 * @public
 */
export interface BatchGetTableOptimizerResponse {
  /**
   * A list of `BatchTableOptimizer` objects.
   *
   * @public
   */
  TableOptimizers?: BatchTableOptimizer[] | undefined;

  /**
   * A list of errors from the operation.
   *
   * @public
   */
  Failures?: BatchGetTableOptimizerError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetTriggersRequest {
  /**
   * A list of trigger names, which may be the names returned from the `ListTriggers` operation.
   *
   * @public
   */
  TriggerNames: string[] | undefined;
}

/**
 * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
 *
 * @public
 */
export interface EventBatchingCondition {
  /**
   * Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.
   *
   * @public
   */
  BatchSize: number | undefined;

  /**
   * Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.
   *
   * @public
   */
  BatchWindow?: number | undefined;
}

/**
 * Defines a condition under which a trigger fires.
 *
 * @public
 */
export interface Condition {
  /**
   * A logical operator.
   *
   * @public
   */
  LogicalOperator?: LogicalOperator | undefined;

  /**
   * The name of the job whose `JobRuns` this condition applies to, and on which this trigger waits.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The condition state. Currently, the only job states that a trigger can listen for are `SUCCEEDED`, `STOPPED`, `FAILED`, and `TIMEOUT`. The only crawler states that a trigger can listen for are `SUCCEEDED`, `FAILED`, and `CANCELLED`.
   *
   * @public
   */
  State?: JobRunState | undefined;

  /**
   * The name of the crawler to which this condition applies.
   *
   * @public
   */
  CrawlerName?: string | undefined;

  /**
   * The state of the crawler to which this condition applies.
   *
   * @public
   */
  CrawlState?: CrawlState | undefined;
}

/**
 * Defines the predicate of the trigger, which determines when it fires.
 *
 * @public
 */
export interface Predicate {
  /**
   * An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.
   *
   * @public
   */
  Logical?: Logical | undefined;

  /**
   * A list of the conditions that determine when the trigger will fire.
   *
   * @public
   */
  Conditions?: Condition[] | undefined;
}

/**
 * Information about a specific trigger.
 *
 * @public
 */
export interface Trigger {
  /**
   * The name of the trigger.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name of the workflow associated with the trigger.
   *
   * @public
   */
  WorkflowName?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of trigger that this is.
   *
   * @public
   */
  Type?: TriggerType | undefined;

  /**
   * The current state of the trigger.
   *
   * @public
   */
  State?: TriggerState | undefined;

  /**
   * A description of this trigger.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A `cron` expression used to specify the schedule (see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 * * ? *)`.
   *
   * @public
   */
  Schedule?: string | undefined;

  /**
   * The actions initiated by this trigger.
   *
   * @public
   */
  Actions?: Action[] | undefined;

  /**
   * The predicate of this trigger, which defines when it will fire.
   *
   * @public
   */
  Predicate?: Predicate | undefined;

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
export interface BatchGetTriggersResponse {
  /**
   * A list of trigger definitions.
   *
   * @public
   */
  Triggers?: Trigger[] | undefined;

  /**
   * A list of names of triggers not found.
   *
   * @public
   */
  TriggersNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetWorkflowsRequest {
  /**
   * A list of workflow names, which may be the names returned from the `ListWorkflows` operation.
   *
   * @public
   */
  Names: string[] | undefined;

  /**
   * Specifies whether to include a graph when returning the workflow resource metadata.
   *
   * @public
   */
  IncludeGraph?: boolean | undefined;
}

/**
 * The details of a blueprint.
 *
 * @public
 */
export interface BlueprintDetails {
  /**
   * The name of the blueprint.
   *
   * @public
   */
  BlueprintName?: string | undefined;

  /**
   * The run ID for this blueprint.
   *
   * @public
   */
  RunId?: string | undefined;
}

/**
 * An edge represents a directed connection between two Glue components that are part of the workflow the edge belongs to.
 *
 * @public
 */
export interface Edge {
  /**
   * The unique of the node within the workflow where the edge starts.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The unique of the node within the workflow where the edge ends.
   *
   * @public
   */
  DestinationId?: string | undefined;
}

/**
 * The details of a crawl in the workflow.
 *
 * @public
 */
export interface Crawl {
  /**
   * The state of the crawler.
   *
   * @public
   */
  State?: CrawlState | undefined;

  /**
   * The date and time on which the crawl started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The date and time on which the crawl completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The error message associated with the crawl.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The log group associated with the crawl.
   *
   * @public
   */
  LogGroup?: string | undefined;

  /**
   * The log stream associated with the crawl.
   *
   * @public
   */
  LogStream?: string | undefined;
}

/**
 * The details of a Crawler node present in the workflow.
 *
 * @public
 */
export interface CrawlerNodeDetails {
  /**
   * A list of crawls represented by the crawl node.
   *
   * @public
   */
  Crawls?: Crawl[] | undefined;
}

/**
 * A job run that was used in the predicate of a conditional trigger that triggered this job run.
 *
 * @public
 */
export interface Predecessor {
  /**
   * The name of the job definition used by the predecessor job run.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The job-run ID of the predecessor job run.
   *
   * @public
   */
  RunId?: string | undefined;
}

/**
 * Contains information about a job run.
 *
 * @public
 */
export interface JobRun {
  /**
   * The ID of this job run.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The number of the attempt to run this job.
   *
   * @public
   */
  Attempt?: number | undefined;

  /**
   * The ID of the previous run of this job. For example, the `JobRunId` specified in the `StartJobRun` action.
   *
   * @public
   */
  PreviousRunId?: string | undefined;

  /**
   * The name of the trigger that started this job run.
   *
   * @public
   */
  TriggerName?: string | undefined;

  /**
   * The name of the job definition being used in this run.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * A mode that describes how a job was created. Valid values are:
   *
   * - `SCRIPT` - The job was created using the Glue Studio script editor.
   * - `VISUAL` - The job was created using the Glue Studio visual editor.
   * - `NOTEBOOK` - The job was created using an interactive sessions notebook.
   *
   * When the `JobMode` field is missing or null, `SCRIPT` is assigned as the default value.
   *
   * @public
   */
  JobMode?: JobMode | undefined;

  /**
   * Specifies whether job run queuing is enabled for the job run.
   *
   * A value of true means job run queuing is enabled for the job run. If false or not populated, the job run will not be considered for queueing.
   *
   * @public
   */
  JobRunQueuingEnabled?: boolean | undefined;

  /**
   * The date and time at which this job run was started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The last time that this job run was modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * The date and time that this job run completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The current state of the job run. For more information about the statuses of jobs that have terminated abnormally, see [Glue Job Run Statuses](https://docs.aws.amazon.com/glue/latest/dg/job-run-statuses.html).
   *
   * @public
   */
  JobRunState?: JobRunState | undefined;

  /**
   * The job arguments associated with this run. For this job run, they replace the default arguments set in the job definition itself.
   *
   * You can specify arguments here that your own job-execution script consumes, as well as arguments that Glue itself consumes.
   *
   * Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Secrets Manager or other secret management mechanism if you intend to keep them within the Job.
   *
   * For information about how to specify and consume your own Job arguments, see the [Calling Glue APIs in Python](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) topic in the developer guide.
   *
   * For information about the arguments you can provide to this field when configuring Spark jobs, see the [Special Parameters Used by Glue](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html) topic in the developer guide.
   *
   * For information about the arguments you can provide to this field when configuring Ray jobs, see [Using job parameters in Ray jobs](https://docs.aws.amazon.com/glue/latest/dg/author-job-ray-job-parameters.html) in the developer guide.
   *
   * @public
   */
  Arguments?: Record<string, string> | undefined;

  /**
   * An error message associated with this job run.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * A list of predecessors to this job run.
   *
   * @public
   */
  PredecessorRuns?: Predecessor[] | undefined;

  /**
   * This field is deprecated. Use `MaxCapacity` instead.
   *
   * The number of Glue data processing units (DPUs) allocated to this JobRun. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [Glue pricing page](https://aws.amazon.com/glue/pricing/).
   *
   * @deprecated This property is deprecated, use MaxCapacity instead.
   * @public
   */
  AllocatedCapacity?: number | undefined;

  /**
   * The amount of time (in seconds) that the job run consumed resources.
   *
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * The `JobRun` timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters `TIMEOUT` status. This value overrides the timeout value set in the parent job.
   *
   * Jobs must have timeout values less than 7 days or 10080 minutes. Otherwise, the jobs will throw an exception.
   *
   * When the value is left blank, the timeout is defaulted to 2,880 minutes for Glue version 4.0 and earlier, or 480 minutes for Glue version 5.0 and later.
   *
   * Any existing Glue jobs that had a timeout value greater than 7 days will be defaulted to 7 days. For instance if you have specified a timeout of 20 days for a batch job, it will be stopped on the 7th day.
   *
   * For streaming jobs, if you have set up a maintenance window, it will be restarted during the maintenance window after 7 days.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * For Glue version 1.0 or earlier jobs, using the standard worker type, the number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [Glue pricing page](https://aws.amazon.com/glue/pricing/).
   *
   * For Glue version 2.0+ jobs, you cannot specify a `Maximum capacity`. Instead, you should specify a `Worker type` and the `Number of workers`.
   *
   * Do not set `MaxCapacity` if using `WorkerType` and `NumberOfWorkers`.
   *
   * The value that can be allocated for `MaxCapacity` depends on whether you are running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL job:
   *
   * - When you specify a Python shell job (`JobCommand.Name`="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.
   * - When you specify an Apache Spark ETL job (`JobCommand.Name`="glueetl") or Apache Spark streaming ETL job (`JobCommand.Name`="gluestreaming"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The type of predefined worker that is allocated when a job runs. Accepts a value of G.025X, G.1X, G.2X, G.4X, G.8X, G.12X, G.16X, R.1X, R.2X, R.4X, or R.8X for Spark jobs. Accepts the value Z.2X for Ray jobs.
   *
   * - For the `G.025X` worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk, and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 or later streaming jobs.
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
   * The number of workers of a defined `workerType` that are allocated when a job runs.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The name of the `SecurityConfiguration` structure to be used with this job run.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * The name of the log group for secure logging that can be server-side encrypted in Amazon CloudWatch using KMS. This name can be `/aws-glue/jobs/`, in which case the default encryption is `NONE`. If you add a role name and `SecurityConfiguration` name (in other words, `/aws-glue/jobs-yourRoleName-yourSecurityConfigurationName/`), then that security configuration is used to encrypt the log group.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * Specifies configuration properties of a job run notification.
   *
   * @public
   */
  NotificationProperty?: NotificationProperty | undefined;

  /**
   * In Spark jobs, `GlueVersion` determines the versions of Apache Spark and Python that Glue available in a job. The Python version indicates the version supported for jobs of type Spark.
   *
   * Ray jobs should set `GlueVersion` to `4.0` or greater. However, the versions of Ray, Python and additional libraries available in your Ray job are determined by the `Runtime` parameter of the Job command.
   *
   * For more information about the available Glue versions and corresponding Spark and Python versions, see [Glue version](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   *
   * Jobs that are created without specifying a Glue version default to Glue 5.1.
   *
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * This field can be set for either job runs with execution class `FLEX` or when Auto Scaling is enabled, and represents the total time each executor ran during the lifecycle of a job run in seconds, multiplied by a DPU factor (1 for `G.1X`, 2 for `G.2X`, or 0.25 for `G.025X` workers). This value may be different than the `executionEngineRuntime` * `MaxCapacity` as in the case of Auto Scaling jobs, as the number of executors running at a given time may be less than the `MaxCapacity`. Therefore, it is possible that the value of `DPUSeconds` is less than `executionEngineRuntime` * `MaxCapacity`.
   *
   * @public
   */
  DPUSeconds?: number | undefined;

  /**
   * Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.
   *
   * The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary.
   *
   * Only jobs with Glue version 3.0 and above and command type `glueetl` will be allowed to set `ExecutionClass` to `FLEX`. The flexible execution class is available for Spark jobs.
   *
   * @public
   */
  ExecutionClass?: ExecutionClass | undefined;

  /**
   * This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs.
   *
   * Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT.
   *
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * The name of an Glue usage profile associated with the job run.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * This field holds details that pertain to the state of a job run. The field is nullable.
   *
   * For example, when a job run is in a WAITING state as a result of job run queuing, the field has the reason why the job run is in that state.
   *
   * @public
   */
  StateDetail?: string | undefined;

  /**
   * This inline session policy to the StartJobRun API allows you to dynamically restrict the permissions of the specified execution role for the scope of the job, without requiring the creation of additional IAM roles.
   *
   * @public
   */
  ExecutionRoleSessionPolicy?: string | undefined;
}

/**
 * The details of a Job node present in the workflow.
 *
 * @public
 */
export interface JobNodeDetails {
  /**
   * The information for the job runs represented by the job node.
   *
   * @public
   */
  JobRuns?: JobRun[] | undefined;
}

/**
 * The details of a Trigger node present in the workflow.
 *
 * @public
 */
export interface TriggerNodeDetails {
  /**
   * The information of the trigger represented by the trigger node.
   *
   * @public
   */
  Trigger?: Trigger | undefined;
}

/**
 * A node represents an Glue component (trigger, crawler, or job) on a workflow graph.
 *
 * @public
 */
export interface Node {
  /**
   * The type of Glue component represented by the node.
   *
   * @public
   */
  Type?: NodeType | undefined;

  /**
   * The name of the Glue component represented by the node.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique Id assigned to the node within the workflow.
   *
   * @public
   */
  UniqueId?: string | undefined;

  /**
   * Details of the Trigger when the node represents a Trigger.
   *
   * @public
   */
  TriggerDetails?: TriggerNodeDetails | undefined;

  /**
   * Details of the Job when the node represents a Job.
   *
   * @public
   */
  JobDetails?: JobNodeDetails | undefined;

  /**
   * Details of the crawler when the node represents a crawler.
   *
   * @public
   */
  CrawlerDetails?: CrawlerNodeDetails | undefined;
}

/**
 * A workflow graph represents the complete workflow containing all the Glue components present in the workflow and all the directed connections between them.
 *
 * @public
 */
export interface WorkflowGraph {
  /**
   * A list of the the Glue components belong to the workflow represented as nodes.
   *
   * @public
   */
  Nodes?: Node[] | undefined;

  /**
   * A list of all the directed connections between the nodes belonging to the workflow.
   *
   * @public
   */
  Edges?: Edge[] | undefined;
}

/**
 * The batch condition that started the workflow run. Either the number of events in the batch size arrived, in which case the BatchSize member is non-zero, or the batch window expired, in which case the BatchWindow member is non-zero.
 *
 * @public
 */
export interface StartingEventBatchCondition {
  /**
   * Number of events in the batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * Duration of the batch window in seconds.
   *
   * @public
   */
  BatchWindow?: number | undefined;
}

/**
 * Workflow run statistics provides statistics about the workflow run.
 *
 * @public
 */
export interface WorkflowRunStatistics {
  /**
   * Total number of Actions in the workflow run.
   *
   * @public
   */
  TotalActions?: number | undefined;

  /**
   * Total number of Actions that timed out.
   *
   * @public
   */
  TimeoutActions?: number | undefined;

  /**
   * Total number of Actions that have failed.
   *
   * @public
   */
  FailedActions?: number | undefined;

  /**
   * Total number of Actions that have stopped.
   *
   * @public
   */
  StoppedActions?: number | undefined;

  /**
   * Total number of Actions that have succeeded.
   *
   * @public
   */
  SucceededActions?: number | undefined;

  /**
   * Total number Actions in running state.
   *
   * @public
   */
  RunningActions?: number | undefined;

  /**
   * Indicates the count of job runs in the ERROR state in the workflow run.
   *
   * @public
   */
  ErroredActions?: number | undefined;

  /**
   * Indicates the count of job runs in WAITING state in the workflow run.
   *
   * @public
   */
  WaitingActions?: number | undefined;
}

/**
 * A workflow run is an execution of a workflow providing all the runtime information.
 *
 * @public
 */
export interface WorkflowRun {
  /**
   * Name of the workflow that was run.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of this workflow run.
   *
   * @public
   */
  WorkflowRunId?: string | undefined;

  /**
   * The ID of the previous workflow run.
   *
   * @public
   */
  PreviousRunId?: string | undefined;

  /**
   * The workflow run properties which were set during the run.
   *
   * @public
   */
  WorkflowRunProperties?: Record<string, string> | undefined;

  /**
   * The date and time when the workflow run was started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The date and time when the workflow run completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The status of the workflow run.
   *
   * @public
   */
  Status?: WorkflowRunStatus | undefined;

  /**
   * This error message describes any error that may have occurred in starting the workflow run. Currently the only error message is "Concurrent runs exceeded for workflow: `foo`."
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The statistics of the run.
   *
   * @public
   */
  Statistics?: WorkflowRunStatistics | undefined;

  /**
   * The graph representing all the Glue components that belong to the workflow as nodes and directed connections between them as edges.
   *
   * @public
   */
  Graph?: WorkflowGraph | undefined;

  /**
   * The batch condition that started the workflow run.
   *
   * @public
   */
  StartingEventBatchCondition?: StartingEventBatchCondition | undefined;
}

/**
 * A workflow is a collection of multiple dependent Glue jobs and crawlers that are run to complete a complex ETL task. A workflow manages the execution and monitoring of all its jobs and crawlers.
 *
 * @public
 */
export interface Workflow {
  /**
   * The name of the workflow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A collection of properties to be used as part of each execution of the workflow. The run properties are made available to each job in the workflow. A job can modify the properties for the next jobs in the flow.
   *
   * @public
   */
  DefaultRunProperties?: Record<string, string> | undefined;

  /**
   * The date and time when the workflow was created.
   *
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * The date and time when the workflow was last modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * The information about the last execution of the workflow.
   *
   * @public
   */
  LastRun?: WorkflowRun | undefined;

  /**
   * The graph representing all the Glue components that belong to the workflow as nodes and directed connections between them as edges.
   *
   * @public
   */
  Graph?: WorkflowGraph | undefined;

  /**
   * You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.
   *
   * @public
   */
  MaxConcurrentRuns?: number | undefined;

  /**
   * This structure indicates the details of the blueprint that this particular workflow is created from.
   *
   * @public
   */
  BlueprintDetails?: BlueprintDetails | undefined;
}

/**
 * @public
 */
export interface BatchGetWorkflowsResponse {
  /**
   * A list of workflow resource metadata.
   *
   * @public
   */
  Workflows?: Workflow[] | undefined;

  /**
   * A list of names of workflows not found.
   *
   * @public
   */
  MissingWorkflows?: string[] | undefined;
}

/**
 * An Inclusion Annotation.
 *
 * @public
 */
export interface DatapointInclusionAnnotation {
  /**
   * The ID of the data quality profile the statistic belongs to.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The Statistic ID.
   *
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * The inclusion annotation value to apply to the statistic.
   *
   * @public
   */
  InclusionAnnotation?: InclusionAnnotationValue | undefined;
}

/**
 * @public
 */
export interface BatchPutDataQualityStatisticAnnotationRequest {
  /**
   * A list of `DatapointInclusionAnnotation`'s. The InclusionAnnotations must contain a profileId and statisticId. If there are multiple InclusionAnnotations, the list must refer to a single statisticId across multiple profileIds.
   *
   * @public
   */
  InclusionAnnotations: DatapointInclusionAnnotation[] | undefined;

  /**
   * Client Token.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutDataQualityStatisticAnnotationResponse {
  /**
   * A list of `AnnotationError`'s.
   *
   * @public
   */
  FailedInclusionAnnotations?: AnnotationError[] | undefined;
}

/**
 * @public
 */
export interface BatchStopJobRunRequest {
  /**
   * The name of the job definition for which to stop job runs.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * A list of the `JobRunIds` that should be stopped for that job definition.
   *
   * @public
   */
  JobRunIds: string[] | undefined;
}

/**
 * Records an error that occurred when attempting to stop a specified job run.
 *
 * @public
 */
export interface BatchStopJobRunError {
  /**
   * The name of the job definition that is used in the job run in question.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The `JobRunId` of the job run in question.
   *
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * Specifies details about the error that was encountered.
   *
   * @public
   */
  ErrorDetail?: ErrorDetail | undefined;
}

/**
 * Records a successful request to stop a specified `JobRun`.
 *
 * @public
 */
export interface BatchStopJobRunSuccessfulSubmission {
  /**
   * The name of the job definition used in the job run that was stopped.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The `JobRunId` of the job run that was stopped.
   *
   * @public
   */
  JobRunId?: string | undefined;
}

/**
 * @public
 */
export interface BatchStopJobRunResponse {
  /**
   * A list of the JobRuns that were successfully submitted for stopping.
   *
   * @public
   */
  SuccessfulSubmissions?: BatchStopJobRunSuccessfulSubmission[] | undefined;

  /**
   * A list of the errors that were encountered in trying to stop `JobRuns`, including the `JobRunId` for which each error was encountered and details about the error.
   *
   * @public
   */
  Errors?: BatchStopJobRunError[] | undefined;
}

/**
 * A structure that contains the values and structure used to update a partition.
 *
 * @public
 */
export interface BatchUpdatePartitionRequestEntry {
  /**
   * A list of values defining the partitions.
   *
   * @public
   */
  PartitionValueList: string[] | undefined;

  /**
   * The structure used to update a partition.
   *
   * @public
   */
  PartitionInput: PartitionInput | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePartitionRequest {
  /**
   * The ID of the catalog in which the partition is to be updated. Currently, this should be the Amazon Web Services account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the metadata database in which the partition is to be updated.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the metadata table in which the partition is to be updated.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A list of up to 100 `BatchUpdatePartitionRequestEntry` objects to update.
   *
   * @public
   */
  Entries: BatchUpdatePartitionRequestEntry[] | undefined;
}

/**
 * Contains information about a batch update partition error.
 *
 * @public
 */
export interface BatchUpdatePartitionFailureEntry {
  /**
   * A list of values defining the partitions.
   *
   * @public
   */
  PartitionValueList?: string[] | undefined;

  /**
   * The details about the batch update partition error.
   *
   * @public
   */
  ErrorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePartitionResponse {
  /**
   * The errors encountered when trying to update the requested partitions. A list of `BatchUpdatePartitionFailureEntry` objects.
   *
   * @public
   */
  Errors?: BatchUpdatePartitionFailureEntry[] | undefined;
}

/**
 * @public
 */
export interface CancelDataQualityRuleRecommendationRunRequest {
  /**
   * The unique run identifier associated with this run.
   *
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
   * The unique run identifier associated with this run.
   *
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
   * The unique identifier of the machine learning transform.
   *
   * @public
   */
  TransformId: string | undefined;

  /**
   * A unique identifier for the task run.
   *
   * @public
   */
  TaskRunId: string | undefined;
}

/**
 * @public
 */
export interface CancelMLTaskRunResponse {
  /**
   * The unique identifier of the machine learning transform.
   *
   * @public
   */
  TransformId?: string | undefined;

  /**
   * The unique identifier for the task run.
   *
   * @public
   */
  TaskRunId?: string | undefined;

  /**
   * The status for this run.
   *
   * @public
   */
  Status?: TaskStatusType | undefined;
}

/**
 * @public
 */
export interface CancelStatementRequest {
  /**
   * The Session ID of the statement to be cancelled.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * The ID of the statement to be cancelled.
   *
   * @public
   */
  Id: number | undefined;

  /**
   * The origin of the request to cancel the statement.
   *
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
   * The data format of the schema definition. Currently `AVRO`, `JSON` and `PROTOBUF` are supported.
   *
   * @public
   */
  DataFormat: DataFormat | undefined;

  /**
   * The definition of the schema that has to be validated.
   *
   * @public
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface CheckSchemaVersionValidityResponse {
  /**
   * Return true, if the schema is valid and false otherwise.
   *
   * @public
   */
  Valid?: boolean | undefined;

  /**
   * A validation failure error message.
   *
   * @public
   */
  Error?: string | undefined;
}

/**
 * @public
 */
export interface CreateBlueprintRequest {
  /**
   * The name of the blueprint.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the blueprint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies a path in Amazon S3 where the blueprint is published.
   *
   * @public
   */
  BlueprintLocation: string | undefined;

  /**
   * The tags to be applied to this blueprint.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBlueprintResponse {
  /**
   * Returns the name of the blueprint that was registered.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Input properties to configure data lake access for your catalog resource in the Glue Data Catalog.
 *
 * @public
 */
export interface DataLakeAccessProperties {
  /**
   * Turns on or off data lake access for Apache Spark applications that access Amazon Redshift databases in the Data Catalog from any non-Redshift engine, such as Amazon Athena, Amazon EMR, or Glue ETL.
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
   * Specifies a federated catalog type for the native catalog resource. The currently supported type is `aws:redshift`.
   *
   * @public
   */
  CatalogType?: string | undefined;
}

/**
 * A structure that specifies Iceberg table optimization properties for the catalog, including configurations for compaction, retention, and orphan file deletion operations.
 *
 * @public
 */
export interface IcebergOptimizationProperties {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that will be assumed to perform Iceberg table optimization operations.
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
}

/**
 * A structure that specifies data lake access properties and other custom properties.
 *
 * @public
 */
export interface CatalogProperties {
  /**
   * A `DataLakeAccessProperties` object that specifies properties to configure data lake access for your catalog resource in the Glue Data Catalog.
   *
   * @public
   */
  DataLakeAccessProperties?: DataLakeAccessProperties | undefined;

  /**
   * A structure that specifies Iceberg table optimization properties for the catalog. This includes configuration for compaction, retention, and orphan file deletion operations that can be applied to Iceberg tables in this catalog.
   *
   * @public
   */
  IcebergOptimizationProperties?: IcebergOptimizationProperties | undefined;

  /**
   * Additional key-value properties for the catalog, such as column statistics optimizations.
   *
   * @public
   */
  CustomProperties?: Record<string, string> | undefined;
}

/**
 * The Lake Formation principal.
 *
 * @public
 */
export interface DataLakePrincipal {
  /**
   * An identifier for the Lake Formation principal.
   *
   * @public
   */
  DataLakePrincipalIdentifier?: string | undefined;
}

/**
 * Permissions granted to a principal.
 *
 * @public
 */
export interface PrincipalPermissions {
  /**
   * The principal who is granted permissions.
   *
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * The permissions that are granted to the principal.
   *
   * @public
   */
  Permissions?: Permission[] | undefined;
}

/**
 * A catalog that points to an entity outside the Glue Data Catalog.
 *
 * @public
 */
export interface FederatedCatalog {
  /**
   * A unique identifier for the federated catalog.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * The name of the connection to an external data source, for example a Redshift-federated catalog.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The type of connection used to access the federated catalog, specifying the protocol or method for connection to the external data source.
   *
   * @public
   */
  ConnectionType?: string | undefined;
}

/**
 * A structure that describes a target catalog for resource linking.
 *
 * @public
 */
export interface TargetRedshiftCatalog {
  /**
   * The Amazon Resource Name (ARN) of the catalog resource.
   *
   * @public
   */
  CatalogArn: string | undefined;
}

/**
 * A structure that describes catalog properties.
 *
 * @public
 */
export interface CatalogInput {
  /**
   * Description string, not more than 2048 bytes long, matching the URI address multi-line string pattern. A description of the catalog.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A `FederatedCatalog` object. A `FederatedCatalog` structure that references an entity outside the Glue Data Catalog, for example a Redshift database.
   *
   * @public
   */
  FederatedCatalog?: FederatedCatalog | undefined;

  /**
   * A map array of key-value pairs that define the parameters and properties of the catalog.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * A `TargetRedshiftCatalog` object that describes a target catalog for resource linking.
   *
   * @public
   */
  TargetRedshiftCatalog?: TargetRedshiftCatalog | undefined;

  /**
   * A `CatalogProperties` object that specifies data lake access properties and other custom properties.
   *
   * @public
   */
  CatalogProperties?: CatalogProperties | undefined;

  /**
   * An array of `PrincipalPermissions` objects. Creates a set of default permissions on the table(s) for principals. Used by Amazon Web Services Lake Formation. Typically should be explicitly set as an empty list.
   *
   * @public
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * An array of `PrincipalPermissions` objects. Creates a set of default permissions on the database(s) for principals. Used by Amazon Web Services Lake Formation. Typically should be explicitly set as an empty list.
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

  /**
   * Overwrites existing Amazon Web Services Lake Formation permissions with `CatalogInput$CreateTableDefaultPermissions` and `CatalogInput$CreateDatabaseDefaultPermissions` for all child resources.
   *
   * @public
   */
  OverwriteChildResourcePermissionsWithDefault?: OverwriteChildResourcePermissionsWithDefaultEnum | undefined;
}

/**
 * @public
 */
export interface CreateCatalogRequest {
  /**
   * The name of the catalog to create.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A `CatalogInput` object that defines the metadata for the catalog.
   *
   * @public
   */
  CatalogInput: CatalogInput | undefined;

  /**
   * A map array of key-value pairs, not more than 50 pairs. Each key is a UTF-8 string, not less than 1 or more than 128 bytes long. Each value is a UTF-8 string, not more than 256 bytes long. The tags you assign to the catalog.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}
