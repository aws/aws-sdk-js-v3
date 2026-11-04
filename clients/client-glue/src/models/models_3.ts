// smithy-typescript generated code
import type {
  AuthenticationType,
  Comparator,
  Compatibility,
  ConnectionPropertyKey,
  ConnectionType,
  ConnectorOAuth2GrantType,
  ContentType,
  CsvHeaderOption,
  CsvSerdeOption,
  ExecutionClass,
  HTTPMethod,
  IcebergUpdateAction,
  IntegrationType,
  JobMode,
  Permission,
  RecommendationMode,
  ResourceAction,
  ResourceShareType,
  ResourceState,
  SchemaVersionStatus,
  SearchFilterOperator,
  SearchSortOrder,
  Sort,
  SourceControlAuthStrategy,
  SourceControlProvider,
  TableOptimizerType,
  ViewUpdateAction,
  WorkerType,
} from "./enums";
import type {
  Action,
  Aggregate,
  AmazonRedshiftSource,
  AmazonRedshiftTarget,
  AthenaConnectorSource,
  AuthenticationConfigurationInput,
  BasicCatalogTarget,
  CatalogDeltaSource,
  CatalogHudiSource,
  CatalogIcebergSource,
  CatalogInput,
  CatalogKafkaSource,
  CatalogKinesisSource,
  CatalogSource,
  Column,
  ConnectionsList,
  ConnectorDataSource,
  ConnectorDataTarget,
  CrawlerTargets,
  CustomCode,
  DataQualityEvaluationRunAdditionalRunOptions,
  DataSource,
  DirectJDBCSource,
  DirectKafkaSource,
  DirectKinesisSource,
  DropDuplicates,
  DropFields,
  DropNullFields,
  DynamicTransform,
  DynamoDBCatalogSource,
  DynamoDBELTConnectorSource,
  ErrorDetail,
  EvaluateDataQuality,
  EvaluateDataQualityMultiFrame,
  EventBatchingCondition,
  ExecutionProperty,
  FillMissingValues,
  Filter,
  GovernedCatalogSource,
  GovernedCatalogTarget,
  JDBCConnectorSource,
  JDBCConnectorTarget,
  JobCommand,
  Join,
  LakeFormationConfiguration,
  LineageConfiguration,
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
  RecrawlPolicy,
  RedshiftSource,
  RedshiftTarget,
  RelationalCatalogSource,
  RenameField,
  Route,
  S3CatalogDeltaSource,
  S3CatalogHudiSource,
  S3CatalogIcebergSource,
  S3CatalogSource,
  S3CatalogTarget,
  S3CsvSource,
  S3DeltaCatalogTarget,
  S3DeltaDirectTarget,
  S3DeltaSource,
  S3DirectTarget,
  S3ExcelSource,
  S3GlueParquetTarget,
  S3HudiCatalogTarget,
  S3HudiDirectTarget,
  S3HudiSource,
  S3HyperDirectTarget,
  S3IcebergCatalogTarget,
  S3IcebergDirectTarget,
  S3JsonSource,
  S3ParquetSource,
  SchemaChangePolicy,
  SchemaId,
  SelectFields,
  SelectFromCollection,
  SnowflakeSource,
  SnowflakeTarget,
  SourceControlDetails,
  SparkConnectorSource,
  SparkConnectorTarget,
  SparkSQL,
  Spigot,
  SplitFields,
  StorageDescriptor,
  TableOptimizerConfiguration,
  Trigger,
  Union,
} from "./models_0";
import type {
  ColumnStatistics,
  ConnectionInput,
  ConnectorProperty,
  DatabaseInput,
  FederatedTable,
  IcebergPartitionSpec,
  IcebergSchema,
  IcebergSortOrder,
  ProfileConfiguration,
  RegistryId,
  RestConfiguration,
  SourceProcessingProperties,
  SourceTableConfig,
  TableIdentifier,
  TableInput,
  TargetProcessingProperties,
  TargetTableConfig,
  TransformParameters,
  UserDefinedFunctionInput,
} from "./models_1";
import type {
  ColumnRowFilter,
  DataQualityRuleRecommendationRunAdditionalRunOptions,
  IcebergTableMetadata,
  JobBookmarkEntry,
  MetadataKeyValuePair,
  RLSProperties,
  SchemaVersionNumber,
  ViewDefinition,
  ViewValidation,
} from "./models_2";

/**
 * @public
 */
export interface PutWorkflowRunPropertiesResponse {}

/**
 * @public
 */
export interface QuerySchemaVersionMetadataInput {
  /**
   * A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).
   *
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;

  /**
   * The unique version ID of the schema version.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * Search key-value pairs for metadata, if they are not provided all the metadata information will be fetched.
   *
   * @public
   */
  MetadataList?: MetadataKeyValuePair[] | undefined;

  /**
   * Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.
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
 * A structure containing other metadata for a schema version belonging to the same metadata key.
 *
 * @public
 */
export interface OtherMetadataValueListItem {
  /**
   * The metadata key’s corresponding value for the other metadata belonging to the same metadata key.
   *
   * @public
   */
  MetadataValue?: string | undefined;

  /**
   * The time at which the entry was created.
   *
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * A structure containing metadata information for a schema version.
 *
 * @public
 */
export interface MetadataInfo {
  /**
   * The metadata key’s corresponding value.
   *
   * @public
   */
  MetadataValue?: string | undefined;

  /**
   * The time at which the entry was created.
   *
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * Other metadata belonging to the same metadata key.
   *
   * @public
   */
  OtherMetadataValueList?: OtherMetadataValueListItem[] | undefined;
}

/**
 * @public
 */
export interface QuerySchemaVersionMetadataResponse {
  /**
   * A map of a metadata key and associated values.
   *
   * @public
   */
  MetadataInfoMap?: Record<string, MetadataInfo> | undefined;

  /**
   * The unique version ID of the schema version.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Configuration that defines the base URL and additional request parameters needed during connection creation.
 *
 * @public
 */
export interface ConnectionPropertiesConfiguration {
  /**
   * The base instance URL for the endpoint that this connection type will connect to.
   *
   * @public
   */
  Url?: ConnectorProperty | undefined;

  /**
   * Key-value pairs of additional request parameters that may be needed during connection creation, such as API versions or service-specific configuration options.
   *
   * @public
   */
  AdditionalRequestParameters?: ConnectorProperty[] | undefined;
}

/**
 * Basic authentication configuration that defines the username and password properties for HTTP Basic authentication.
 *
 * @public
 */
export interface BasicAuthenticationProperties {
  /**
   * The username property name to use for Basic authentication credentials.
   *
   * @public
   */
  Username?: ConnectorProperty | undefined;

  /**
   * The password property name to use for Basic authentication credentials.
   *
   * @public
   */
  Password?: ConnectorProperty | undefined;
}

/**
 * Custom authentication configuration that allows for flexible authentication mechanisms beyond standard Basic and OAuth2 flows.
 *
 * @public
 */
export interface CustomAuthenticationProperties {
  /**
   * A map of custom authentication parameters that define the specific authentication mechanism and required properties.
   *
   * @public
   */
  AuthenticationParameters: ConnectorProperty[] | undefined;
}

/**
 * OAuth2 authorization code configuration that defines the properties needed for the Authorization Code grant type flow.
 *
 * @public
 */
export interface ConnectorAuthorizationCodeProperties {
  /**
   * The authorization endpoint URL where users will be redirected to grant authorization.
   *
   * @public
   */
  AuthorizationCodeUrl?: ConnectorProperty | undefined;

  /**
   * The authorization code received from the authorization server after user consent.
   *
   * @public
   */
  AuthorizationCode?: ConnectorProperty | undefined;

  /**
   * The redirect URI that must match the URI registered with the authorization server.
   *
   * @public
   */
  RedirectUri?: ConnectorProperty | undefined;

  /**
   * The token endpoint URL where the authorization code will be exchanged for an access token.
   *
   * @public
   */
  TokenUrl?: ConnectorProperty | undefined;

  /**
   * The HTTP method to use when making token exchange requests, typically POST.
   *
   * @public
   */
  RequestMethod?: HTTPMethod | undefined;

  /**
   * The content type to use for token exchange requests, such as application/x-www-form-urlencoded or application/json.
   *
   * @public
   */
  ContentType?: ContentType | undefined;

  /**
   * The OAuth2 client identifier provided by the authorization server.
   *
   * @public
   */
  ClientId?: ConnectorProperty | undefined;

  /**
   * The OAuth2 client secret provided by the authorization server.
   *
   * @public
   */
  ClientSecret?: ConnectorProperty | undefined;

  /**
   * The OAuth2 scope that defines the level of access requested for the authorization code flow.
   *
   * @public
   */
  Scope?: ConnectorProperty | undefined;

  /**
   * The OAuth2 prompt parameter that controls the authorization server's behavior during user authentication.
   *
   * @public
   */
  Prompt?: ConnectorProperty | undefined;

  /**
   * Additional parameters to include in token URL requests as key-value pairs.
   *
   * @public
   */
  TokenUrlParameters?: ConnectorProperty[] | undefined;
}

/**
 * OAuth2 client credentials configuration that defines the properties needed for the Client Credentials grant type flow.
 *
 * @public
 */
export interface ClientCredentialsProperties {
  /**
   * The token endpoint URL where the client will request access tokens using client credentials.
   *
   * @public
   */
  TokenUrl?: ConnectorProperty | undefined;

  /**
   * The HTTP method to use when making token requests, typically POST.
   *
   * @public
   */
  RequestMethod?: HTTPMethod | undefined;

  /**
   * The content type to use for token requests, such as application/x-www-form-urlencoded or application/json.
   *
   * @public
   */
  ContentType?: ContentType | undefined;

  /**
   * The OAuth2 client identifier provided by the authorization server.
   *
   * @public
   */
  ClientId?: ConnectorProperty | undefined;

  /**
   * The OAuth2 client secret provided by the authorization server.
   *
   * @public
   */
  ClientSecret?: ConnectorProperty | undefined;

  /**
   * The OAuth2 scope that defines the level of access requested for the client credentials flow.
   *
   * @public
   */
  Scope?: ConnectorProperty | undefined;

  /**
   * Additional parameters to include in token URL requests as key-value pairs.
   *
   * @public
   */
  TokenUrlParameters?: ConnectorProperty[] | undefined;
}

/**
 * JWT bearer token configuration that defines the properties needed for the JWT Bearer grant type flow.
 *
 * @public
 */
export interface JWTBearerProperties {
  /**
   * The token endpoint URL where the JWT bearer token will be exchanged for an access token.
   *
   * @public
   */
  TokenUrl?: ConnectorProperty | undefined;

  /**
   * The HTTP method to use when making JWT bearer token requests, typically POST.
   *
   * @public
   */
  RequestMethod?: HTTPMethod | undefined;

  /**
   * The content type to use for JWT bearer token requests, such as application/x-www-form-urlencoded or application/json.
   *
   * @public
   */
  ContentType?: ContentType | undefined;

  /**
   * The JWT token to be used in the bearer token grant flow for authentication.
   *
   * @public
   */
  JwtToken?: ConnectorProperty | undefined;

  /**
   * Additional parameters to include in token URL requests as key-value pairs.
   *
   * @public
   */
  TokenUrlParameters?: ConnectorProperty[] | undefined;
}

/**
 * OAuth2 configuration container that defines the authentication properties and flow-specific configurations for OAuth2-based connections.
 *
 * @public
 */
export interface ConnectorOAuth2Properties {
  /**
   * The OAuth2 grant type to use for authentication, such as CLIENT_CREDENTIALS, JWT_BEARER, or AUTHORIZATION_CODE.
   *
   * @public
   */
  OAuth2GrantType: ConnectorOAuth2GrantType | undefined;

  /**
   * Configuration properties specific to the OAuth2 Client Credentials grant type flow.
   *
   * @public
   */
  ClientCredentialsProperties?: ClientCredentialsProperties | undefined;

  /**
   * Configuration properties specific to the OAuth2 JWT Bearer grant type flow.
   *
   * @public
   */
  JWTBearerProperties?: JWTBearerProperties | undefined;

  /**
   * Configuration properties specific to the OAuth2 Authorization Code grant type flow.
   *
   * @public
   */
  AuthorizationCodeProperties?: ConnectorAuthorizationCodeProperties | undefined;
}

/**
 * Configuration that defines the supported authentication types and required properties for the connection type.
 *
 * @public
 */
export interface ConnectorAuthenticationConfiguration {
  /**
   * A list of authentication types supported by this connection type, such as Basic, OAuth2, or Custom authentication methods.
   *
   * @public
   */
  AuthenticationTypes: AuthenticationType[] | undefined;

  /**
   * OAuth2 configuration container that defines the authentication properties and flow-specific configurations for OAuth2-based connections.
   *
   * @public
   */
  OAuth2Properties?: ConnectorOAuth2Properties | undefined;

  /**
   * Basic authentication configuration that defines the username and password properties for HTTP Basic authentication.
   *
   * @public
   */
  BasicAuthenticationProperties?: BasicAuthenticationProperties | undefined;

  /**
   * Custom authentication configuration that allows for flexible authentication mechanisms beyond standard Basic and OAuth2 flows.
   *
   * @public
   */
  CustomAuthenticationProperties?: CustomAuthenticationProperties | undefined;
}

/**
 * @public
 */
export interface RegisterConnectionTypeRequest {
  /**
   * The name of the connection type. Must be between 1 and 255 characters and must be prefixed with "REST-" to indicate it is a REST-based connector.
   *
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * The integration type for the connection. Currently only "REST" protocol is supported.
   *
   * @public
   */
  IntegrationType: IntegrationType | undefined;

  /**
   * A description of the connection type. Can be up to 2048 characters and provides details about the purpose and functionality of the connection type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Defines the base URL and additional request parameters needed during connection creation for this connection type.
   *
   * @public
   */
  ConnectionProperties: ConnectionPropertiesConfiguration | undefined;

  /**
   * Defines the supported authentication types and required properties for this connection type, including Basic, OAuth2, and Custom authentication methods.
   *
   * @public
   */
  ConnectorAuthenticationConfiguration: ConnectorAuthenticationConfiguration | undefined;

  /**
   * Defines the HTTP request and response configuration, validation endpoint, and entity configurations for REST API interactions.
   *
   * @public
   */
  RestConfiguration: RestConfiguration | undefined;

  /**
   * The tags you assign to the connection type.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Contains the Amazon Resource Name (ARN) of the newly registered connection type.
 *
 * @public
 */
export interface RegisterConnectionTypeResponse {
  /**
   * The Amazon Resource Name (ARN) of the registered connection type. This unique identifier can be used to reference the connection type in other Glue operations.
   *
   * @public
   */
  ConnectionTypeArn?: string | undefined;
}

/**
 * @public
 */
export interface RegisterSchemaVersionInput {
  /**
   * This is a wrapper structure to contain schema identity fields. The structure contains:
   *
   * - SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either `SchemaArn` or `SchemaName` and `RegistryName` has to be provided.
   * - SchemaId$SchemaName: The name of the schema. Either `SchemaArn` or `SchemaName` and `RegistryName` has to be provided.
   *
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * The schema definition using the `DataFormat` setting for the `SchemaName`.
   *
   * @public
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface RegisterSchemaVersionResponse {
  /**
   * The unique ID that represents the version of this schema.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * The version of this schema (for sync flow only, in case this is the first version).
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The status of the schema version.
   *
   * @public
   */
  Status?: SchemaVersionStatus | undefined;
}

/**
 * @public
 */
export interface RemoveSchemaVersionMetadataInput {
  /**
   * A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).
   *
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;

  /**
   * The unique version ID of the schema version.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * The value of the metadata key.
   *
   * @public
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

/**
 * @public
 */
export interface RemoveSchemaVersionMetadataResponse {
  /**
   * The Amazon Resource Name (ARN) of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * The latest version of the schema.
   *
   * @public
   */
  LatestVersion?: boolean | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The version ID for the schema version.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * The metadata key.
   *
   * @public
   */
  MetadataKey?: string | undefined;

  /**
   * The value of the metadata key.
   *
   * @public
   */
  MetadataValue?: string | undefined;
}

/**
 * @public
 */
export interface ResetJobBookmarkRequest {
  /**
   * The name of the job in question.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The unique run identifier associated with this job run.
   *
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface ResetJobBookmarkResponse {
  /**
   * The reset bookmark entry.
   *
   * @public
   */
  JobBookmarkEntry?: JobBookmarkEntry | undefined;
}

/**
 * @public
 */
export interface ResumeWorkflowRunRequest {
  /**
   * The name of the workflow to resume.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID of the workflow run to resume.
   *
   * @public
   */
  RunId: string | undefined;

  /**
   * A list of the node IDs for the nodes you want to restart. The nodes that are to be restarted must have a run attempt in the original run.
   *
   * @public
   */
  NodeIds: string[] | undefined;
}

/**
 * @public
 */
export interface ResumeWorkflowRunResponse {
  /**
   * The new ID assigned to the resumed workflow run. Each resume of a workflow run will have a new run ID.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * A list of the node IDs for the nodes that were actually restarted.
   *
   * @public
   */
  NodeIds?: string[] | undefined;
}

/**
 * @public
 */
export interface RunStatementRequest {
  /**
   * The Session Id of the statement to be run.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * The statement code to be run.
   *
   * @public
   */
  Code: string | undefined;

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
export interface RunStatementResponse {
  /**
   * Returns the Id of the statement that was run.
   *
   * @public
   */
  Id?: number | undefined;
}

/**
 * A filter value. Exactly one of `stringValue` or `longValue` must be specified.
 *
 * @public
 */
export type SearchFilterValue =
  | SearchFilterValue.LongValueMember
  | SearchFilterValue.StringValueMember
  | SearchFilterValue.$UnknownMember;

/**
 * @public
 */
export namespace SearchFilterValue {
  /**
   * A string filter value.
   *
   * @public
   */
  export interface StringValueMember {
    StringValue: string;
    LongValue?: never;
    $unknown?: never;
  }

  /**
   * A long integer filter value.
   *
   * @public
   */
  export interface LongValueMember {
    StringValue?: never;
    LongValue: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    LongValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringValue: (value: string) => T;
    LongValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A filter that compares an attribute value using an operator.
 *
 * @public
 */
export interface SearchAttributeFilter {
  /**
   * The attribute name to filter on.
   *
   * @public
   */
  Attribute: string | undefined;

  /**
   * The comparison operator. Valid values are `equals`, `greaterThan`, `greaterThanOrEquals`, `lessThan`, `lessThanOrEquals`, and `notExists`.
   *
   * @public
   */
  Operator: SearchFilterOperator | undefined;

  /**
   * The value to compare against.
   *
   * @public
   */
  Value?: SearchFilterValue | undefined;
}

/**
 * A map filter value. Currently supports string comparison only.
 *
 * @public
 */
export type SearchMapFilterValue =
  | SearchMapFilterValue.StringValueMember
  | SearchMapFilterValue.$UnknownMember;

/**
 * @public
 */
export namespace SearchMapFilterValue {
  /**
   * A string filter value.
   *
   * @public
   */
  export interface StringValueMember {
    StringValue: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A filter on a map attribute's key-value pair.
 *
 * @public
 */
export interface SearchMapFilter {
  /**
   * The map attribute name to filter on.
   *
   * @public
   */
  Attribute: string | undefined;

  /**
   * The key within the map attribute to filter on.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value to compare against.
   *
   * @public
   */
  Value: SearchMapFilterValue | undefined;
}

/**
 * The sort criteria for search results.
 *
 * @public
 */
export interface SearchSort {
  /**
   * The attribute to sort by.
   *
   * @public
   */
  Attribute: string | undefined;

  /**
   * The sort order. Valid values are `ASCENDING` and `DESCENDING`.
   *
   * @public
   */
  Order?: SearchSortOrder | undefined;
}

/**
 * A single search result item representing a matched asset.
 *
 * @public
 */
export interface SearchResultItem {
  /**
   * The unique identifier of the matched asset.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the matched asset.
   *
   * @public
   */
  AssetName?: string | undefined;

  /**
   * The description of the matched asset.
   *
   * @public
   */
  AssetDescription?: string | undefined;

  /**
   * The timestamp at which the matched asset was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The identifier of the asset type for the matched asset.
   *
   * @public
   */
  AssetTypeId?: string | undefined;
}

/**
 * The search results returned by the `SearchAssets` operation.
 *
 * @public
 */
export interface SearchAssetsOutput {
  /**
   * The list of assets matching the search criteria.
   *
   * @public
   */
  Items?: SearchResultItem[] | undefined;

  /**
   * A continuation token, present if the current segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Defines a property predicate.
 *
 * @public
 */
export interface PropertyPredicate {
  /**
   * The key of the property.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the property.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The comparator used to compare this property to others.
   *
   * @public
   */
  Comparator?: Comparator | undefined;
}

/**
 * Specifies a field to sort by and a sort order.
 *
 * @public
 */
export interface SortCriterion {
  /**
   * The name of the field on which to sort.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * An ascending or descending sort.
   *
   * @public
   */
  Sort?: Sort | undefined;
}

/**
 * @public
 */
export interface SearchTablesRequest {
  /**
   * A unique identifier, consisting of `account_id`.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A continuation token, included if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of key-value pairs, and a comparator used to filter the search results. Returns all entities matching the predicate.
   *
   * The `Comparator` member of the `PropertyPredicate` struct is used only for time fields, and can be omitted for other field types. Also, when comparing string values, such as when `Key=Name`, a fuzzy match algorithm is used. The `Key` field (for example, the value of the `Name` field) is split on certain punctuation characters, for example, -, :, #, etc. into tokens. Then each token is exact-match compared with the `Value` member of `PropertyPredicate`. For example, if `Key=Name` and `Value=link`, tables named `customer-link` and `xx-link-yy` are returned, but `xxlinkyy` is not returned.
   *
   * @public
   */
  Filters?: PropertyPredicate[] | undefined;

  /**
   * A string used for a text search.
   *
   * Specifying a value in quotes filters based on an exact match to the value.
   *
   * @public
   */
  SearchText?: string | undefined;

  /**
   * A list of criteria for sorting the results by a field name, in an ascending or descending order.
   *
   * @public
   */
  SortCriteria?: SortCriterion[] | undefined;

  /**
   * The maximum number of tables to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Allows you to specify that you want to search the tables shared with your account. The allowable values are `FOREIGN` or `ALL`.
   *
   * - If set to `FOREIGN`, will search the tables shared with your account.
   * - If set to `ALL`, will search the tables shared with your account, as well as the tables in yor local account.
   *
   * @public
   */
  ResourceShareType?: ResourceShareType | undefined;

  /**
   * Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.
   *
   * @public
   */
  IncludeStatusDetails?: boolean | undefined;
}

/**
 * @public
 */
export interface StartBlueprintRunRequest {
  /**
   * The name of the blueprint.
   *
   * @public
   */
  BlueprintName: string | undefined;

  /**
   * Specifies the parameters as a `BlueprintParameters` object.
   *
   * @public
   */
  Parameters?: string | undefined;

  /**
   * Specifies the IAM role used to create the workflow.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface StartBlueprintRunResponse {
  /**
   * The run ID for this blueprint run.
   *
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunRequest {
  /**
   * The name of the database where the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table to generate statistics.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A list of the column names to generate statistics. If none is supplied, all column names for the table will be used by default.
   *
   * @public
   */
  ColumnNameList?: string[] | undefined;

  /**
   * The IAM role that the service assumes to generate statistics.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * The percentage of rows used to generate statistics. If none is supplied, the entire table will be used to generate stats.
   *
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * The ID of the Data Catalog where the table reside. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogID?: string | undefined;

  /**
   * Name of the security configuration that is used to encrypt CloudWatch logs for the column stats task run.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunResponse {
  /**
   * The identifier for the column statistics task run.
   *
   * @public
   */
  ColumnStatisticsTaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunScheduleRequest {
  /**
   * The name of the database where the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table for which to start a column statistic task run schedule.
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
export interface StartColumnStatisticsTaskRunScheduleResponse {}

/**
 * @public
 */
export interface StartCrawlerRequest {
  /**
   * Name of the crawler to start.
   *
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
   * Name of the crawler to schedule.
   *
   * @public
   */
  CrawlerName: string | undefined;
}

/**
 * @public
 */
export interface StartCrawlerScheduleResponse {}

/**
 * The request of the Data Quality rule recommendation request.
 *
 * @public
 */
export interface StartDataQualityRuleRecommendationRunRequest {
  /**
   * The data source (Glue table) associated with this run.
   *
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * The IAM role that Glue assumes to access resources for the run.
   *
   * For more information, see [Configure IAM permissions for Glue Data Quality](https://docs.aws.amazon.com/glue/latest/dg/data-quality-authorization.html).
   *
   * @public
   */
  Role: string | undefined;

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
   * A name for the ruleset.
   *
   * @public
   */
  CreatedRulesetName?: string | undefined;

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

  /**
   * Additional run options you can specify for a recommendation run.
   *
   * @public
   */
  AdditionalRunOptions?: DataQualityRuleRecommendationRunAdditionalRunOptions | undefined;

  /**
   * The mode that Glue Data Quality uses to recommend rules.
   *
   * The default is `BASIC`.
   *
   * @public
   */
  RecommendationMode?: RecommendationMode | undefined;
}

/**
 * @public
 */
export interface StartDataQualityRuleRecommendationRunResponse {
  /**
   * The unique run identifier associated with this run.
   *
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface StartDataQualityRulesetEvaluationRunRequest {
  /**
   * The data source (Glue table) associated with this run.
   *
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * An IAM role supplied to encrypt the results of the run.
   *
   * @public
   */
  Role: string | undefined;

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
   * Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Additional run options you can specify for an evaluation run.
   *
   * @public
   */
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions | undefined;

  /**
   * A list of ruleset names.
   *
   * @public
   */
  RulesetNames: string[] | undefined;

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
export interface StartDataQualityRulesetEvaluationRunResponse {
  /**
   * The unique run identifier associated with this run.
   *
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface StartExportLabelsTaskRunRequest {
  /**
   * The unique identifier of the machine learning transform.
   *
   * @public
   */
  TransformId: string | undefined;

  /**
   * The Amazon S3 path where you export the labels.
   *
   * @public
   */
  OutputS3Path: string | undefined;
}

/**
 * @public
 */
export interface StartExportLabelsTaskRunResponse {
  /**
   * The unique identifier for the task run.
   *
   * @public
   */
  TaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartImportLabelsTaskRunRequest {
  /**
   * The unique identifier of the machine learning transform.
   *
   * @public
   */
  TransformId: string | undefined;

  /**
   * The Amazon Simple Storage Service (Amazon S3) path from where you import the labels.
   *
   * @public
   */
  InputS3Path: string | undefined;

  /**
   * Indicates whether to overwrite your existing labels.
   *
   * @public
   */
  ReplaceAllLabels?: boolean | undefined;
}

/**
 * @public
 */
export interface StartImportLabelsTaskRunResponse {
  /**
   * The unique identifier for the task run.
   *
   * @public
   */
  TaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * The name of the job definition to use.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * Specifies whether job run queuing is enabled for the job run.
   *
   * A value of true means job run queuing is enabled for the job run. If false or not populated, the job run will not be considered for queueing.
   *
   * @public
   */
  JobRunQueuingEnabled?: boolean | undefined;

  /**
   * The ID of a previous `JobRun` to retry.
   *
   * @public
   */
  JobRunId?: string | undefined;

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
   * This field is deprecated. Use `MaxCapacity` instead.
   *
   * The number of Glue data processing units (DPUs) to allocate to this JobRun. You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [Glue pricing page](https://aws.amazon.com/glue/pricing/).
   *
   * @deprecated This property is deprecated, use MaxCapacity instead.
   * @public
   */
  AllocatedCapacity?: number | undefined;

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
   * The name of the `SecurityConfiguration` structure to be used with this job run.
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
   * This inline session policy to the StartJobRun API allows you to dynamically restrict the permissions of the specified execution role for the scope of the job, without requiring the creation of additional IAM roles.
   *
   * @public
   */
  ExecutionRoleSessionPolicy?: string | undefined;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * The ID assigned to this job run.
   *
   * @public
   */
  JobRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartMaterializedViewRefreshTaskRunRequest {
  /**
   * The ID of the Data Catalog where the table reside. If none is supplied, the account ID is used by default.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * The name of the database where the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the materialized view to run the refresh task for.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Specifies whether this is a full refresh of the task run.
   *
   * @public
   */
  FullRefresh?: boolean | undefined;
}

/**
 * @public
 */
export interface StartMaterializedViewRefreshTaskRunResponse {
  /**
   * The identifier for the materialized view refresh task run.
   *
   * @public
   */
  MaterializedViewRefreshTaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartMLEvaluationTaskRunRequest {
  /**
   * The unique identifier of the machine learning transform.
   *
   * @public
   */
  TransformId: string | undefined;
}

/**
 * @public
 */
export interface StartMLEvaluationTaskRunResponse {
  /**
   * The unique identifier associated with this run.
   *
   * @public
   */
  TaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartMLLabelingSetGenerationTaskRunRequest {
  /**
   * The unique identifier of the machine learning transform.
   *
   * @public
   */
  TransformId: string | undefined;

  /**
   * The Amazon Simple Storage Service (Amazon S3) path where you generate the labeling set.
   *
   * @public
   */
  OutputS3Path: string | undefined;
}

/**
 * @public
 */
export interface StartMLLabelingSetGenerationTaskRunResponse {
  /**
   * The unique run identifier that is associated with this task run.
   *
   * @public
   */
  TaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartTriggerRequest {
  /**
   * The name of the trigger to start.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartTriggerResponse {
  /**
   * The name of the trigger that was started.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunRequest {
  /**
   * The name of the workflow to start.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The workflow run properties for the new workflow run.
   *
   * Run properties may be logged. Do not pass plaintext secrets as properties. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to use them within the workflow run.
   *
   * @public
   */
  RunProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunResponse {
  /**
   * An Id for the new run.
   *
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface StopColumnStatisticsTaskRunRequest {
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
   * The ID of the Data Catalog where the table resides. If none is supplied, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogID?: string | undefined;
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
   * The name of the database where the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table for which to stop a column statistic task run schedule.
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
export interface StopColumnStatisticsTaskRunScheduleResponse {}

/**
 * @public
 */
export interface StopCrawlerRequest {
  /**
   * Name of the crawler to stop.
   *
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
   * Name of the crawler whose schedule state to set.
   *
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
export interface StopMaterializedViewRefreshTaskRunRequest {
  /**
   * The ID of the Data Catalog where the table reside. If none is supplied, the account ID is used by default.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * The name of the database where the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the materialized view.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface StopMaterializedViewRefreshTaskRunResponse {}

/**
 * @public
 */
export interface StopSessionRequest {
  /**
   * The ID of the session to be stopped.
   *
   * @public
   */
  Id: string | undefined;

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
export interface StopSessionResponse {
  /**
   * Returns the Id of the stopped session.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface StopTriggerRequest {
  /**
   * The name of the trigger to stop.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopTriggerResponse {
  /**
   * The name of the trigger that was stopped.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface StopWorkflowRunRequest {
  /**
   * The name of the workflow to stop.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID of the workflow run to stop.
   *
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
   * The ARN of the Glue resource to which to add the tags. For more information about Glue resource ARNs, see the [Glue ARN string pattern](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html#aws-glue-api-regex-aws-glue-arn-id).
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Tags to add to this resource.
   *
   * @public
   */
  TagsToAdd: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * A structure that is used to specify testing a connection to a service.
 *
 * @public
 */
export interface TestConnectionInput {
  /**
   * The type of connection to test. This operation is only available for the `JDBC` or `SALESFORCE` connection types.
   *
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * The key-value pairs that define parameters for the connection.
   *
   * JDBC connections use the following connection properties:
   *
   * - Required: All of (`HOST`, `PORT`, `JDBC_ENGINE`) or `JDBC_CONNECTION_URL`.
   * - Required: All of (`USERNAME`, `PASSWORD`) or `SECRET_ID`.
   * - Optional: `JDBC_ENFORCE_SSL`, `CUSTOM_JDBC_CERT`, `CUSTOM_JDBC_CERT_STRING`, `SKIP_CUSTOM_JDBC_CERT_VALIDATION`. These parameters are used to configure SSL with JDBC.
   *
   * SALESFORCE connections require the `AuthenticationConfiguration` member to be configured.
   *
   * @public
   */
  ConnectionProperties: Partial<Record<ConnectionPropertyKey, string>> | undefined;

  /**
   * A structure containing the authentication configuration in the TestConnection request. Required for a connection to Salesforce using OAuth authentication.
   *
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfigurationInput | undefined;
}

/**
 * @public
 */
export interface TestConnectionRequest {
  /**
   * Optional. The name of the connection to test. If only name is provided, the operation will get the connection and use that for testing.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The catalog ID where the connection resides.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A structure that is used to specify testing a connection to a service.
   *
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
   * The Amazon Resource Name (ARN) of the resource from which to remove the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Tags to remove from this resource.
   *
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
export interface UpdateAssetRequest {
  /**
   * The unique identifier of the asset to update.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The new name of the asset.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The new description of the asset.
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
export interface UpdateAssetResponse {
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
   * The timestamp at which the asset was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateBlueprintRequest {
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
}

/**
 * @public
 */
export interface UpdateBlueprintResponse {
  /**
   * Returns the name of the blueprint that was updated.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCatalogRequest {
  /**
   * The ID of the catalog.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * A `CatalogInput` object specifying the new properties of an existing catalog.
   *
   * @public
   */
  CatalogInput: CatalogInput | undefined;
}

/**
 * @public
 */
export interface UpdateCatalogResponse {}

/**
 * Specifies a custom CSV classifier to be updated.
 *
 * @public
 */
export interface UpdateCsvClassifierRequest {
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
   * Specifies the configuration of custom datatypes.
   *
   * @public
   */
  CustomDatatypeConfigured?: boolean | undefined;

  /**
   * Specifies a list of supported custom datatypes.
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
 * Specifies a grok classifier to update when passed to `UpdateClassifier`.
 *
 * @public
 */
export interface UpdateGrokClassifierRequest {
  /**
   * The name of the `GrokClassifier`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.
   *
   * @public
   */
  Classification?: string | undefined;

  /**
   * The grok pattern used by this classifier.
   *
   * @public
   */
  GrokPattern?: string | undefined;

  /**
   * Optional custom grok patterns used by this classifier.
   *
   * @public
   */
  CustomPatterns?: string | undefined;
}

/**
 * Specifies a JSON classifier to be updated.
 *
 * @public
 */
export interface UpdateJsonClassifierRequest {
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
  JsonPath?: string | undefined;
}

/**
 * Specifies an XML classifier to be updated.
 *
 * @public
 */
export interface UpdateXMLClassifierRequest {
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
  Classification?: string | undefined;

  /**
   * The XML tag designating the element that contains each record in an XML document being parsed. This cannot identify a self-closing element (closed by `/>`). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, `<row item_a="A" item_b="B"></row>` is okay, but `<row item_a="A" item_b="B" />` is not).
   *
   * @public
   */
  RowTag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClassifierRequest {
  /**
   * A `GrokClassifier` object with updated fields.
   *
   * @public
   */
  GrokClassifier?: UpdateGrokClassifierRequest | undefined;

  /**
   * An `XMLClassifier` object with updated fields.
   *
   * @public
   */
  XMLClassifier?: UpdateXMLClassifierRequest | undefined;

  /**
   * A `JsonClassifier` object with updated fields.
   *
   * @public
   */
  JsonClassifier?: UpdateJsonClassifierRequest | undefined;

  /**
   * A `CsvClassifier` object with updated fields.
   *
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
   * A list of the column statistics.
   *
   * @public
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

/**
 * Encapsulates a `ColumnStatistics` object that failed and the reason for failure.
 *
 * @public
 */
export interface ColumnStatisticsError {
  /**
   * The `ColumnStatistics` of the column.
   *
   * @public
   */
  ColumnStatistics?: ColumnStatistics | undefined;

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
export interface UpdateColumnStatisticsForPartitionResponse {
  /**
   * Error occurred during updating column statistics data.
   *
   * @public
   */
  Errors?: ColumnStatisticsError[] | undefined;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForTableRequest {
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
   * A list of the column statistics.
   *
   * @public
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForTableResponse {
  /**
   * List of ColumnStatisticsErrors.
   *
   * @public
   */
  Errors?: ColumnStatisticsError[] | undefined;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsTaskSettingsRequest {
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
  Role?: string | undefined;

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
   * The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the connection definition to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A `ConnectionInput` object that redefines the connection in question.
   *
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
   * Name of the new crawler.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The IAM role or Amazon Resource Name (ARN) of an IAM role that is used by the new crawler to access customer resources.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The Glue database where results are stored, such as: `arn:aws:daylight:us-east-1::database/sometable/*`.
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
   * A list of targets to crawl.
   *
   * @public
   */
  Targets?: CrawlerTargets | undefined;

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
   * The ID of the Data Catalog in which to store the crawler's output. If you omit this value, the existing value on the crawler is preserved.
   *
   * @public
   */
  CatalogId?: string | undefined;
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
   * The name of the crawler whose schedule to update.
   *
   * @public
   */
  CrawlerName: string | undefined;

  /**
   * The updated `cron` expression used to specify the schedule (see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 * * ? *)`.
   *
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
   * The ID of the Data Catalog in which the metadata database resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the database to update in the catalog. For Hive compatibility, this is folded to lowercase.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A `DatabaseInput` object specifying the new definition of the metadata database in the catalog.
   *
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
   * The name of the data quality ruleset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the ruleset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.
   *
   * @public
   */
  Ruleset?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataQualityRulesetResponse {
  /**
   * The name of the data quality ruleset.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the ruleset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.
   *
   * @public
   */
  Ruleset?: string | undefined;
}

/**
 * Custom libraries to be loaded into a development endpoint.
 *
 * @public
 */
export interface DevEndpointCustomLibraries {
  /**
   * The paths to one or more Python libraries in an Amazon Simple Storage Service (Amazon S3) bucket that should be loaded in your `DevEndpoint`. Multiple values must be complete paths separated by a comma.
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
}

/**
 * @public
 */
export interface UpdateDevEndpointRequest {
  /**
   * The name of the `DevEndpoint` to be updated.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The public key for the `DevEndpoint` to use.
   *
   * @public
   */
  PublicKey?: string | undefined;

  /**
   * The list of public keys for the `DevEndpoint` to use.
   *
   * @public
   */
  AddPublicKeys?: string[] | undefined;

  /**
   * The list of public keys to be deleted from the `DevEndpoint`.
   *
   * @public
   */
  DeletePublicKeys?: string[] | undefined;

  /**
   * Custom Python or Java libraries to be loaded in the `DevEndpoint`.
   *
   * @public
   */
  CustomLibraries?: DevEndpointCustomLibraries | undefined;

  /**
   * `True` if the list of custom libraries to be loaded in the development endpoint needs to be updated, or `False` if otherwise.
   *
   * @public
   */
  UpdateEtlLibraries?: boolean | undefined;

  /**
   * The list of argument keys to be deleted from the map of arguments used to configure the `DevEndpoint`.
   *
   * @public
   */
  DeleteArguments?: string[] | undefined;

  /**
   * The map of arguments to add the map of arguments used to configure the `DevEndpoint`.
   *
   * Valid arguments are:
   *
   * - `"--enable-glue-datacatalog": ""`
   *
   * You can specify a version of Python support for development endpoints by using the `Arguments` parameter in the `CreateDevEndpoint` or `UpdateDevEndpoint` APIs. If no arguments are provided, the version defaults to Python 2.
   *
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
export interface UpdateGlossaryRequest {
  /**
   * The unique identifier of the glossary to update.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The updated name of the glossary.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated description of the glossary.
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
export interface UpdateGlossaryResponse {
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
export interface UpdateGlossaryTermRequest {
  /**
   * The unique identifier of the glossary term to update.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The updated name of the glossary term.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated short description of the glossary term.
   *
   * @public
   */
  ShortDescription?: string | undefined;

  /**
   * The updated long description of the glossary term.
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
export interface UpdateGlossaryTermResponse {
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
 * Request to update an existing Glue Identity Center configuration.
 *
 * @public
 */
export interface UpdateGlueIdentityCenterConfigurationRequest {
  /**
   * A list of Identity Center scopes that define the updated permissions and access levels for the Glue configuration.
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
 * Response from updating an existing Glue Identity Center configuration.
 *
 * @public
 */
export interface UpdateGlueIdentityCenterConfigurationResponse {}

/**
 * @public
 */
export interface UpdateIntegrationResourcePropertyRequest {
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
}

/**
 * @public
 */
export interface UpdateIntegrationResourcePropertyResponse {
  /**
   * The connection ARN of the source, or the database ARN of the target.
   *
   * @public
   */
  ResourceArn?: string | undefined;

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
 * @public
 */
export interface UpdateIntegrationTablePropertiesRequest {
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

  /**
   * A structure for the source table configuration.
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
export interface UpdateIntegrationTablePropertiesResponse {}

/**
 * @public
 */
export interface UpdateJobResponse {
  /**
   * Returns the name of the updated job definition.
   *
   * @public
   */
  JobName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateJobFromSourceControlRequest {
  /**
   * The name of the Glue job to be synchronized to or from the remote repository.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The provider for the remote repository. Possible values: GITHUB, AWS_CODE_COMMIT, GITLAB, BITBUCKET.
   *
   * @public
   */
  Provider?: SourceControlProvider | undefined;

  /**
   * The name of the remote repository that contains the job artifacts. For BitBucket providers, `RepositoryName` should include `WorkspaceName`. Use the format `<WorkspaceName>/<RepositoryName>`.
   *
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * The owner of the remote repository that contains the job artifacts.
   *
   * @public
   */
  RepositoryOwner?: string | undefined;

  /**
   * An optional branch in the remote repository.
   *
   * @public
   */
  BranchName?: string | undefined;

  /**
   * An optional folder in the remote repository.
   *
   * @public
   */
  Folder?: string | undefined;

  /**
   * A commit ID for a commit in the remote repository.
   *
   * @public
   */
  CommitId?: string | undefined;

  /**
   * The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token.
   *
   * @public
   */
  AuthStrategy?: SourceControlAuthStrategy | undefined;

  /**
   * The value of the authorization token.
   *
   * @public
   */
  AuthToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateJobFromSourceControlResponse {
  /**
   * The name of the Glue job.
   *
   * @public
   */
  JobName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMLTransformRequest {
  /**
   * A unique identifier that was generated when the transform was created.
   *
   * @public
   */
  TransformId: string | undefined;

  /**
   * The unique name that you gave the transform when you created it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the transform. The default is an empty string.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration parameters that are specific to the transform type (algorithm) used. Conditionally dependent on the transform type.
   *
   * @public
   */
  Parameters?: TransformParameters | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role with the required permissions.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see [Glue Versions](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions) in the developer guide.
   *
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [Glue pricing page](https://aws.amazon.com/glue/pricing/).
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
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * The number of workers of a defined `workerType` that are allocated when this task runs.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters `TIMEOUT` status. The default is 2,880 minutes (48 hours).
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
}

/**
 * @public
 */
export interface UpdateMLTransformResponse {
  /**
   * The unique identifier for the transform that was updated.
   *
   * @public
   */
  TransformId?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePartitionRequest {
  /**
   * The ID of the Data Catalog where the partition to be updated resides. If none is provided, the Amazon Web Services account ID is used by default.
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
   * The name of the table in which the partition to be updated is located.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * List of partition key values that define the partition to update.
   *
   * @public
   */
  PartitionValueList: string[] | undefined;

  /**
   * The new partition object to update the partition to.
   *
   * The `Values` property can't be changed. If you want to change the partition key values for a partition, delete and recreate the partition.
   *
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
   * This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).
   *
   * @public
   */
  RegistryId: RegistryId | undefined;

  /**
   * A description of the registry. If description is not provided, this field will not be updated.
   *
   * @public
   */
  Description: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * The name of the updated registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * The Amazon Resource name (ARN) of the updated registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaInput {
  /**
   * This is a wrapper structure to contain schema identity fields. The structure contains:
   *
   * - SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of `SchemaArn` or `SchemaName` has to be provided.
   * - SchemaId$SchemaName: The name of the schema. One of `SchemaArn` or `SchemaName` has to be provided.
   *
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * Version number required for check pointing. One of `VersionNumber` or `Compatibility` has to be provided.
   *
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;

  /**
   * The new compatibility setting for the schema.
   *
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * The new description for the schema.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaResponse {
  /**
   * The Amazon Resource Name (ARN) of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The name of the registry that contains the schema.
   *
   * @public
   */
  RegistryName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSourceControlFromJobRequest {
  /**
   * The name of the Glue job to be synchronized to or from the remote repository.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The provider for the remote repository. Possible values: GITHUB, AWS_CODE_COMMIT, GITLAB, BITBUCKET.
   *
   * @public
   */
  Provider?: SourceControlProvider | undefined;

  /**
   * The name of the remote repository that contains the job artifacts. For BitBucket providers, `RepositoryName` should include `WorkspaceName`. Use the format `<WorkspaceName>/<RepositoryName>`.
   *
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * The owner of the remote repository that contains the job artifacts.
   *
   * @public
   */
  RepositoryOwner?: string | undefined;

  /**
   * An optional branch in the remote repository.
   *
   * @public
   */
  BranchName?: string | undefined;

  /**
   * An optional folder in the remote repository.
   *
   * @public
   */
  Folder?: string | undefined;

  /**
   * A commit ID for a commit in the remote repository.
   *
   * @public
   */
  CommitId?: string | undefined;

  /**
   * The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token.
   *
   * @public
   */
  AuthStrategy?: SourceControlAuthStrategy | undefined;

  /**
   * The value of the authorization token.
   *
   * @public
   */
  AuthToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSourceControlFromJobResponse {
  /**
   * The name of the Glue job.
   *
   * @public
   */
  JobName?: string | undefined;
}

/**
 * Encryption key structure used for Iceberg table encryption. Contains the key ID, encrypted key metadata, optional reference to the encrypting key, and additional properties for the table's encryption scheme.
 *
 * @public
 */
export interface IcebergEncryptedKey {
  /**
   * Unique identifier of the encryption key used for Iceberg table encryption. This ID is used to reference the key in table metadata and track which key was used to encrypt specific data.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Encrypted key and metadata, base64 encoded. The format of encrypted key metadata is determined by the table's encryption scheme and can be a wrapped format specific to the table's KMS provider.
   *
   * @public
   */
  EncryptedKeyMetadata: string | undefined;

  /**
   * Optional ID of the key used to encrypt or wrap the key metadata in Iceberg table encryption. This field references another encryption key that was used to encrypt the current key's metadata.
   *
   * @public
   */
  EncryptedById?: string | undefined;

  /**
   * A string to string map of additional metadata used by the table's encryption scheme. These properties provide additional context and configuration for the encryption key implementation.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;
}

/**
 * Defines a complete set of updates to be applied to an Iceberg table, including schema changes, partitioning modifications, sort order adjustments, location updates, and property changes.
 *
 * @public
 */
export interface IcebergTableUpdate {
  /**
   * The updated schema definition for the Iceberg table, specifying any changes to field structure, data types, or schema metadata.
   *
   * @public
   */
  Schema: IcebergSchema | undefined;

  /**
   * The updated partitioning specification that defines how the table data should be reorganized and partitioned.
   *
   * @public
   */
  PartitionSpec?: IcebergPartitionSpec | undefined;

  /**
   * The updated sort order specification that defines how data should be ordered within partitions for optimal query performance.
   *
   * @public
   */
  SortOrder?: IcebergSortOrder | undefined;

  /**
   * The updated S3 location where the Iceberg table data will be stored.
   *
   * @public
   */
  Location: string | undefined;

  /**
   * Updated key-value pairs of table properties and configuration settings for the Iceberg table.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * The type of update action to be performed on the Iceberg table. Defines the specific operation such as adding schema, setting current schema, adding partition spec, or managing encryption keys.
   *
   * @public
   */
  Action?: IcebergUpdateAction | undefined;

  /**
   * Encryption key information associated with an Iceberg table update operation. Used when adding or removing encryption keys from the table metadata during table evolution.
   *
   * @public
   */
  EncryptionKey?: IcebergEncryptedKey | undefined;

  /**
   * Identifier of the encryption key involved in an Iceberg table update operation. References the specific key being added to or removed from the table's encryption configuration.
   *
   * @public
   */
  KeyId?: string | undefined;
}

/**
 * Contains the update operations to be applied to an existing Iceberg table inGlue Data Catalog, defining the new state of the table metadata.
 *
 * @public
 */
export interface UpdateIcebergTableInput {
  /**
   * The list of table update operations that specify the changes to be made to the Iceberg table, including schema modifications, partition specifications, and table properties.
   *
   * @public
   */
  Updates: IcebergTableUpdate[] | undefined;
}

/**
 * Input parameters specific to updating Apache Iceberg tables in Glue Data Catalog, containing the update operations to be applied to an existing Iceberg table.
 *
 * @public
 */
export interface UpdateIcebergInput {
  /**
   * The specific update operations to be applied to the Iceberg table, containing a list of updates that define the new state of the table including schema, partitions, and properties.
   *
   * @public
   */
  UpdateIcebergTableInput: UpdateIcebergTableInput | undefined;
}

/**
 * Input parameters for updating open table format tables in GlueData Catalog, serving as a wrapper for format-specific update operations such as Apache Iceberg.
 *
 * @public
 */
export interface UpdateOpenTableFormatInput {
  /**
   * Apache Iceberg-specific update parameters that define the table modifications to be applied, including schema changes, partition specifications, and table properties.
   *
   * @public
   */
  UpdateIcebergInput?: UpdateIcebergInput | undefined;
}

/**
 * @public
 */
export interface UpdateTableRequest {
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
   * The unique identifier for the table within the specified database that will be created in the Glue Data Catalog.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An updated `TableInput` object to define the metadata table in the catalog.
   *
   * @public
   */
  TableInput?: TableInput | undefined;

  /**
   * By default, `UpdateTable` always creates an archived version of the table before updating it. However, if `skipArchive` is set to true, `UpdateTable` does not create the archived version.
   *
   * @public
   */
  SkipArchive?: boolean | undefined;

  /**
   * The transaction ID at which to update the table contents.
   *
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * The version ID at which to update the table contents.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The operation to be performed when updating the view.
   *
   * @public
   */
  ViewUpdateAction?: ViewUpdateAction | undefined;

  /**
   * A flag that can be set to true to ignore matching storage descriptor and subobject matching requirements.
   *
   * @public
   */
  Force?: boolean | undefined;

  /**
   * Input parameters for updating open table format tables in GlueData Catalog, serving as a wrapper for format-specific update operations such as Apache Iceberg.
   *
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
export interface UpdateTableOptimizerResponse {}

/**
 * A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely.
 *
 * @public
 */
export interface TriggerUpdate {
  /**
   * Reserved for future use.
   *
   * @public
   */
  Name?: string | undefined;

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
export interface UpdateTriggerRequest {
  /**
   * The name of the trigger to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The new values with which to update the trigger.
   *
   * @public
   */
  TriggerUpdate: TriggerUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateTriggerResponse {
  /**
   * The resulting trigger definition.
   *
   * @public
   */
  Trigger?: Trigger | undefined;
}

/**
 * @public
 */
export interface UpdateUsageProfileRequest {
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
}

/**
 * @public
 */
export interface UpdateUsageProfileResponse {
  /**
   * The name of the usage profile that was updated.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserDefinedFunctionRequest {
  /**
   * The ID of the Data Catalog where the function to be updated is located. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database where the function to be updated is located.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the function.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * A `FunctionInput` object that redefines the function in the Data Catalog.
   *
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
   * Name of the workflow to be updated.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the workflow.
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
   * You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.
   *
   * @public
   */
  MaxConcurrentRuns?: number | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowResponse {
  /**
   * The name of the workflow which was specified in input.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Specifies the mapping of data property keys.
 *
 * @public
 */
export interface Mapping {
  /**
   * After the apply mapping, what the name of the column should be. Can be the same as `FromPath`.
   *
   * @public
   */
  ToKey?: string | undefined;

  /**
   * The table or column to be modified.
   *
   * @public
   */
  FromPath?: string[] | undefined;

  /**
   * The type of the data to be modified.
   *
   * @public
   */
  FromType?: string | undefined;

  /**
   * The data type that the data is to be modified to.
   *
   * @public
   */
  ToType?: string | undefined;

  /**
   * If true, then the column is removed.
   *
   * @public
   */
  Dropped?: boolean | undefined;

  /**
   * Only applicable to nested data structures. If you want to change the parent structure, but also one of its children, you can fill out this data strucutre. It is also `Mapping`, but its `FromPath` will be the parent's `FromPath` plus the `FromPath` from this structure.
   *
   * For the children part, suppose you have the structure:
   *
   * `\{ "FromPath": "OuterStructure", "ToKey": "OuterStructure", "ToType": "Struct", "Dropped": false, "Chidlren": [\{ "FromPath": "inner", "ToKey": "inner", "ToType": "Double", "Dropped": false, \}] \}`
   *
   * You can specify a `Mapping` that looks like:
   *
   * `\{ "FromPath": "OuterStructure", "ToKey": "OuterStructure", "ToType": "Struct", "Dropped": false, "Chidlren": [\{ "FromPath": "inner", "ToKey": "inner", "ToType": "Double", "Dropped": false, \}] \}`
   *
   * @public
   */
  Children?: Mapping[] | undefined;
}

/**
 * Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset.
 *
 * @public
 */
export interface ApplyMapping {
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
   * Specifies the mapping of data property keys in the data source to data property keys in the data target.
   *
   * @public
   */
  Mapping: Mapping[] | undefined;
}

/**
 * A structure containing information about an asynchronous change to a table.
 *
 * @public
 */
export interface StatusDetails {
  /**
   * A `Table` object representing the requested changes.
   *
   * @public
   */
  RequestedChange?: Table | undefined;

  /**
   * A list of `ViewValidation` objects that contain information for an analytical engine to validate a view.
   *
   * @public
   */
  ViewValidations?: ViewValidation[] | undefined;
}

/**
 * Represents a collection of related data organized in columns and rows.
 *
 * @public
 */
export interface Table {
  /**
   * The table name. For Hive compatibility, this must be entirely lowercase.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * A description of the table.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The owner of the table.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The time when the table definition was created in the Data Catalog.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The last time that the table was updated.
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * The last time that the table was accessed. This is usually taken from HDFS, and might not be reliable.
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
   * The person or entity who created the table.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * Indicates whether the table has been registered with Lake Formation.
   *
   * @public
   */
  IsRegisteredWithLakeFormation?: boolean | undefined;

  /**
   * A `TableIdentifier` structure that describes a target table for resource linking.
   *
   * @public
   */
  TargetTable?: TableIdentifier | undefined;

  /**
   * The ID of the Data Catalog in which the table resides.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The ID of the table version.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * A `FederatedTable` structure that references an entity outside the Glue Data Catalog.
   *
   * @public
   */
  FederatedTable?: FederatedTable | undefined;

  /**
   * A structure that contains all the information that defines the view, including the dialect or dialects for the view, and the query.
   *
   * @public
   */
  ViewDefinition?: ViewDefinition | undefined;

  /**
   * Specifies whether the view supports the SQL dialects of one or more different query engines and can therefore be read by those engines.
   *
   * @public
   */
  IsMultiDialectView?: boolean | undefined;

  /**
   * Indicates a table is a `MaterializedView`.
   *
   * @public
   */
  IsMaterializedView?: boolean | undefined;

  /**
   * The latest Apache Iceberg table metadata for the table, including format version, schemas, partition specifications, and sort orders. This field is populated for Iceberg tables and reflects the current state of the table's Iceberg metadata.
   *
   * @public
   */
  IcebergTableMetadata?: IcebergTableMetadata | undefined;

  /**
   * Indicates the the state of an asynchronous change to a table.
   *
   * @public
   */
  Status?: TableStatus | undefined;

  /**
   * A `RLSProperties` structure that describes the default row-level security policy of the table.
   *
   * @public
   */
  RLSProperties?: RLSProperties | undefined;
}

/**
 * A structure containing information about the state of an asynchronous change to a table.
 *
 * @public
 */
export interface TableStatus {
  /**
   * The ARN of the user who requested the asynchronous change.
   *
   * @public
   */
  RequestedBy?: string | undefined;

  /**
   * The ARN of the user to last manually alter the asynchronous change (requesting cancellation, etc).
   *
   * @public
   */
  UpdatedBy?: string | undefined;

  /**
   * An ISO 8601 formatted date string indicating the time that the change was initiated.
   *
   * @public
   */
  RequestTime?: Date | undefined;

  /**
   * An ISO 8601 formatted date string indicating the time that the state was last updated.
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * Indicates which action was called on the table, currently only `CREATE` or `UPDATE`.
   *
   * @public
   */
  Action?: ResourceAction | undefined;

  /**
   * A generic status for the change in progress, such as QUEUED, IN_PROGRESS, SUCCESS, or FAILED.
   *
   * @public
   */
  State?: ResourceState | undefined;

  /**
   * An error that will only appear when the state is "FAILED". This is a parent level exception message, there may be different `Error`s for each dialect.
   *
   * @public
   */
  Error?: ErrorDetail | undefined;

  /**
   * A `StatusDetails` object with information about the requested change.
   *
   * @public
   */
  Details?: StatusDetails | undefined;
}

/**
 * `CodeGenConfigurationNode` enumerates all valid Node types. One and only one of its member variables can be populated.
 *
 * @public
 */
export interface CodeGenConfigurationNode {
  /**
   * Specifies a connector to an Amazon Athena data source.
   *
   * @public
   */
  AthenaConnectorSource?: AthenaConnectorSource | undefined;

  /**
   * Specifies a connector to a JDBC data source.
   *
   * @public
   */
  JDBCConnectorSource?: JDBCConnectorSource | undefined;

  /**
   * Specifies a connector to an Apache Spark data source.
   *
   * @public
   */
  SparkConnectorSource?: SparkConnectorSource | undefined;

  /**
   * Specifies a data store in the Glue Data Catalog.
   *
   * @public
   */
  CatalogSource?: CatalogSource | undefined;

  /**
   * Specifies an Amazon Redshift data store.
   *
   * @public
   */
  RedshiftSource?: RedshiftSource | undefined;

  /**
   * Specifies an Amazon S3 data store in the Glue Data Catalog.
   *
   * @public
   */
  S3CatalogSource?: S3CatalogSource | undefined;

  /**
   * Specifies a command-separated value (CSV) data store stored in Amazon S3.
   *
   * @public
   */
  S3CsvSource?: S3CsvSource | undefined;

  /**
   * Specifies a JSON data store stored in Amazon S3.
   *
   * @public
   */
  S3JsonSource?: S3JsonSource | undefined;

  /**
   * Specifies an Apache Parquet data store stored in Amazon S3.
   *
   * @public
   */
  S3ParquetSource?: S3ParquetSource | undefined;

  /**
   * Specifies a relational catalog data store in the Glue Data Catalog.
   *
   * @public
   */
  RelationalCatalogSource?: RelationalCatalogSource | undefined;

  /**
   * Specifies a DynamoDBC Catalog data store in the Glue Data Catalog.
   *
   * @public
   */
  DynamoDBCatalogSource?: DynamoDBCatalogSource | undefined;

  /**
   * Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.
   *
   * @public
   */
  JDBCConnectorTarget?: JDBCConnectorTarget | undefined;

  /**
   * Specifies a target that uses an Apache Spark connector.
   *
   * @public
   */
  SparkConnectorTarget?: SparkConnectorTarget | undefined;

  /**
   * Specifies a target that uses a Glue Data Catalog table.
   *
   * @public
   */
  CatalogTarget?: BasicCatalogTarget | undefined;

  /**
   * Specifies a target that uses Amazon Redshift.
   *
   * @public
   */
  RedshiftTarget?: RedshiftTarget | undefined;

  /**
   * Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.
   *
   * @public
   */
  S3CatalogTarget?: S3CatalogTarget | undefined;

  /**
   * Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.
   *
   * @public
   */
  S3GlueParquetTarget?: S3GlueParquetTarget | undefined;

  /**
   * Specifies a data target that writes to Amazon S3.
   *
   * @public
   */
  S3DirectTarget?: S3DirectTarget | undefined;

  /**
   * Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset.
   *
   * @public
   */
  ApplyMapping?: ApplyMapping | undefined;

  /**
   * Specifies a transform that chooses the data property keys that you want to keep.
   *
   * @public
   */
  SelectFields?: SelectFields | undefined;

  /**
   * Specifies a transform that chooses the data property keys that you want to drop.
   *
   * @public
   */
  DropFields?: DropFields | undefined;

  /**
   * Specifies a transform that renames a single data property key.
   *
   * @public
   */
  RenameField?: RenameField | undefined;

  /**
   * Specifies a transform that writes samples of the data to an Amazon S3 bucket.
   *
   * @public
   */
  Spigot?: Spigot | undefined;

  /**
   * Specifies a transform that joins two datasets into one dataset using a comparison phrase on the specified data property keys. You can use inner, outer, left, right, left semi, and left anti joins.
   *
   * @public
   */
  Join?: Join | undefined;

  /**
   * Specifies a transform that splits data property keys into two `DynamicFrames`. The output is a collection of `DynamicFrames`: one with selected data property keys, and one with the remaining data property keys.
   *
   * @public
   */
  SplitFields?: SplitFields | undefined;

  /**
   * Specifies a transform that chooses one `DynamicFrame` from a collection of `DynamicFrames`. The output is the selected `DynamicFrame`
   *
   * @public
   */
  SelectFromCollection?: SelectFromCollection | undefined;

  /**
   * Specifies a transform that locates records in the dataset that have missing values and adds a new field with a value determined by imputation. The input data set is used to train the machine learning model that determines what the missing value should be.
   *
   * @public
   */
  FillMissingValues?: FillMissingValues | undefined;

  /**
   * Specifies a transform that splits a dataset into two, based on a filter condition.
   *
   * @public
   */
  Filter?: Filter | undefined;

  /**
   * Specifies a transform that uses custom code you provide to perform the data transformation. The output is a collection of DynamicFrames.
   *
   * @public
   */
  CustomCode?: CustomCode | undefined;

  /**
   * Specifies a transform where you enter a SQL query using Spark SQL syntax to transform the data. The output is a single `DynamicFrame`.
   *
   * @public
   */
  SparkSQL?: SparkSQL | undefined;

  /**
   * Specifies a direct Amazon Kinesis data source.
   *
   * @public
   */
  DirectKinesisSource?: DirectKinesisSource | undefined;

  /**
   * Specifies an Apache Kafka data store.
   *
   * @public
   */
  DirectKafkaSource?: DirectKafkaSource | undefined;

  /**
   * Specifies a Kinesis data source in the Glue Data Catalog.
   *
   * @public
   */
  CatalogKinesisSource?: CatalogKinesisSource | undefined;

  /**
   * Specifies an Apache Kafka data store in the Data Catalog.
   *
   * @public
   */
  CatalogKafkaSource?: CatalogKafkaSource | undefined;

  /**
   * Specifies a transform that removes columns from the dataset if all values in the column are 'null'. By default, Glue Studio will recognize null objects, but some values such as empty strings, strings that are "null", -1 integers or other placeholders such as zeros, are not automatically recognized as nulls.
   *
   * @public
   */
  DropNullFields?: DropNullFields | undefined;

  /**
   * Specifies a transform that merges a `DynamicFrame` with a staging `DynamicFrame` based on the specified primary keys to identify records. Duplicate records (records with the same primary keys) are not de-duplicated.
   *
   * @public
   */
  Merge?: Merge | undefined;

  /**
   * Specifies a transform that combines the rows from two or more datasets into a single result.
   *
   * @public
   */
  Union?: Union | undefined;

  /**
   * Specifies a transform that identifies, removes or masks PII data.
   *
   * @public
   */
  PIIDetection?: PIIDetection | undefined;

  /**
   * Specifies a transform that groups rows by chosen fields and computes the aggregated value by specified function.
   *
   * @public
   */
  Aggregate?: Aggregate | undefined;

  /**
   * Specifies a transform that removes rows of repeating data from a data set.
   *
   * @public
   */
  DropDuplicates?: DropDuplicates | undefined;

  /**
   * Specifies a data target that writes to a goverened catalog.
   *
   * @public
   */
  GovernedCatalogTarget?: GovernedCatalogTarget | undefined;

  /**
   * Specifies a data source in a goverened Data Catalog.
   *
   * @public
   */
  GovernedCatalogSource?: GovernedCatalogSource | undefined;

  /**
   * Specifies a Microsoft SQL server data source in the Glue Data Catalog.
   *
   * @public
   */
  MicrosoftSQLServerCatalogSource?: MicrosoftSQLServerCatalogSource | undefined;

  /**
   * Specifies a MySQL data source in the Glue Data Catalog.
   *
   * @public
   */
  MySQLCatalogSource?: MySQLCatalogSource | undefined;

  /**
   * Specifies an Oracle data source in the Glue Data Catalog.
   *
   * @public
   */
  OracleSQLCatalogSource?: OracleSQLCatalogSource | undefined;

  /**
   * Specifies a PostgresSQL data source in the Glue Data Catalog.
   *
   * @public
   */
  PostgreSQLCatalogSource?: PostgreSQLCatalogSource | undefined;

  /**
   * Specifies a target that uses Microsoft SQL.
   *
   * @public
   */
  MicrosoftSQLServerCatalogTarget?: MicrosoftSQLServerCatalogTarget | undefined;

  /**
   * Specifies a target that uses MySQL.
   *
   * @public
   */
  MySQLCatalogTarget?: MySQLCatalogTarget | undefined;

  /**
   * Specifies a target that uses Oracle SQL.
   *
   * @public
   */
  OracleSQLCatalogTarget?: OracleSQLCatalogTarget | undefined;

  /**
   * Specifies a target that uses Postgres SQL.
   *
   * @public
   */
  PostgreSQLCatalogTarget?: PostgreSQLCatalogTarget | undefined;

  /**
   * Specifies a route node that directs data to different output paths based on defined filtering conditions.
   *
   * @public
   */
  Route?: Route | undefined;

  /**
   * Specifies a custom visual transform created by a user.
   *
   * @public
   */
  DynamicTransform?: DynamicTransform | undefined;

  /**
   * Specifies your data quality evaluation criteria.
   *
   * @public
   */
  EvaluateDataQuality?: EvaluateDataQuality | undefined;

  /**
   * Specifies a Hudi data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3.
   *
   * @public
   */
  S3CatalogHudiSource?: S3CatalogHudiSource | undefined;

  /**
   * Specifies a Hudi data source that is registered in the Glue Data Catalog.
   *
   * @public
   */
  CatalogHudiSource?: CatalogHudiSource | undefined;

  /**
   * Specifies a Hudi data source stored in Amazon S3.
   *
   * @public
   */
  S3HudiSource?: S3HudiSource | undefined;

  /**
   * Specifies a target that writes to a Hudi data source in the Glue Data Catalog.
   *
   * @public
   */
  S3HudiCatalogTarget?: S3HudiCatalogTarget | undefined;

  /**
   * Specifies a target that writes to a Hudi data source in Amazon S3.
   *
   * @public
   */
  S3HudiDirectTarget?: S3HudiDirectTarget | undefined;

  /**
   * Specifies the direct JDBC source connection.
   *
   * @public
   */
  DirectJDBCSource?: DirectJDBCSource | undefined;

  /**
   * Specifies a Delta Lake data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3.
   *
   * @public
   */
  S3CatalogDeltaSource?: S3CatalogDeltaSource | undefined;

  /**
   * Specifies a Delta Lake data source that is registered in the Glue Data Catalog.
   *
   * @public
   */
  CatalogDeltaSource?: CatalogDeltaSource | undefined;

  /**
   * Specifies a Delta Lake data source stored in Amazon S3.
   *
   * @public
   */
  S3DeltaSource?: S3DeltaSource | undefined;

  /**
   * Specifies a target that writes to a Delta Lake data source in the Glue Data Catalog.
   *
   * @public
   */
  S3DeltaCatalogTarget?: S3DeltaCatalogTarget | undefined;

  /**
   * Specifies a target that writes to a Delta Lake data source in Amazon S3.
   *
   * @public
   */
  S3DeltaDirectTarget?: S3DeltaDirectTarget | undefined;

  /**
   * Specifies a target that writes to a data source in Amazon Redshift.
   *
   * @public
   */
  AmazonRedshiftSource?: AmazonRedshiftSource | undefined;

  /**
   * Specifies a target that writes to a data target in Amazon Redshift.
   *
   * @public
   */
  AmazonRedshiftTarget?: AmazonRedshiftTarget | undefined;

  /**
   * Specifies your data quality evaluation criteria. Allows multiple input data and returns a collection of Dynamic Frames.
   *
   * @public
   */
  EvaluateDataQualityMultiFrame?: EvaluateDataQualityMultiFrame | undefined;

  /**
   * Specifies a Glue DataBrew recipe node.
   *
   * @public
   */
  Recipe?: Recipe | undefined;

  /**
   * Specifies a Snowflake data source.
   *
   * @public
   */
  SnowflakeSource?: SnowflakeSource | undefined;

  /**
   * Specifies a target that writes to a Snowflake data source.
   *
   * @public
   */
  SnowflakeTarget?: SnowflakeTarget | undefined;

  /**
   * Specifies a source generated with standard connection options.
   *
   * @public
   */
  ConnectorDataSource?: ConnectorDataSource | undefined;

  /**
   * Specifies a target generated with standard connection options.
   *
   * @public
   */
  ConnectorDataTarget?: ConnectorDataTarget | undefined;

  /**
   * Specifies an Apache Iceberg data source that is registered in the Glue Data Catalog. The Iceberg data source must be stored in Amazon S3.
   *
   * @public
   */
  S3CatalogIcebergSource?: S3CatalogIcebergSource | undefined;

  /**
   * Specifies an Apache Iceberg data source that is registered in the Glue Data Catalog.
   *
   * @public
   */
  CatalogIcebergSource?: CatalogIcebergSource | undefined;

  /**
   * Specifies an Apache Iceberg catalog target that writes data to Amazon S3 and registers the table in the Glue Data Catalog.
   *
   * @public
   */
  S3IcebergCatalogTarget?: S3IcebergCatalogTarget | undefined;

  /**
   * Defines configuration parameters for writing data to Amazon S3 as an Apache Iceberg table.
   *
   * @public
   */
  S3IcebergDirectTarget?: S3IcebergDirectTarget | undefined;

  /**
   * Defines configuration parameters for reading Excel files from Amazon S3.
   *
   * @public
   */
  S3ExcelSource?: S3ExcelSource | undefined;

  /**
   * Defines configuration parameters for writing data to Amazon S3 using HyperDirect optimization.
   *
   * @public
   */
  S3HyperDirectTarget?: S3HyperDirectTarget | undefined;

  /**
   * Specifies a DynamoDB ELT connector source for extracting data from DynamoDB tables.
   *
   * @public
   */
  DynamoDBELTConnectorSource?: DynamoDBELTConnectorSource | undefined;
}

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * The `Table` object that defines the specified table.
   *
   * @public
   */
  Table?: Table | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredTableMetadataResponse {
  /**
   * A Table object containing the table metadata.
   *
   * @public
   */
  Table?: Table | undefined;

  /**
   * A list of column names that the user has been granted access to.
   *
   * @public
   */
  AuthorizedColumns?: string[] | undefined;

  /**
   * A Boolean value that indicates whether the partition location is registered with Lake Formation.
   *
   * @public
   */
  IsRegisteredWithLakeFormation?: boolean | undefined;

  /**
   * A list of column row filters.
   *
   * @public
   */
  CellFilters?: ColumnRowFilter[] | undefined;

  /**
   * A cryptographically generated query identifier generated by Glue or Lake Formation.
   *
   * @public
   */
  QueryAuthorizationId?: string | undefined;

  /**
   * Specifies whether the view supports the SQL dialects of one or more different query engines and can therefore be read by those engines.
   *
   * @public
   */
  IsMultiDialectView?: boolean | undefined;

  /**
   * Indicates if a table is a materialized view.
   *
   * @public
   */
  IsMaterializedView?: boolean | undefined;

  /**
   * The resource ARN of the parent resource extracted from the request.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * A flag that instructs the engine not to push user-provided operations into the logical plan of the view during query planning. However, if set this flag does not guarantee that the engine will comply. Refer to the engine's documentation to understand the guarantees provided, if any.
   *
   * @public
   */
  IsProtected?: boolean | undefined;

  /**
   * The Lake Formation data permissions of the caller on the table. Used to authorize the call when no view context is found.
   *
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * The filter that applies to the table. For example when applying the filter in SQL, it would go in the `WHERE` clause and can be evaluated by using an `AND` operator with any other predicates applied by the user querying the table.
   *
   * @public
   */
  RowFilter?: string | undefined;
}

/**
 * A filter clause that supports nested boolean logic. Exactly one of `andAllFilters`, `orAnyFilters`, `attributeFilter`, or `mapFilter` must be specified.
 *
 * @public
 */
export type SearchFilterClause =
  | SearchFilterClause.AndAllFiltersMember
  | SearchFilterClause.AttributeFilterMember
  | SearchFilterClause.MapFilterMember
  | SearchFilterClause.OrAnyFiltersMember
  | SearchFilterClause.$UnknownMember;

/**
 * @public
 */
export namespace SearchFilterClause {
  /**
   * A list of filter clauses that must all match (logical AND).
   *
   * @public
   */
  export interface AndAllFiltersMember {
    AndAllFilters: SearchFilterClause[];
    OrAnyFilters?: never;
    AttributeFilter?: never;
    MapFilter?: never;
    $unknown?: never;
  }

  /**
   * A list of filter clauses where at least one must match (logical OR).
   *
   * @public
   */
  export interface OrAnyFiltersMember {
    AndAllFilters?: never;
    OrAnyFilters: SearchFilterClause[];
    AttributeFilter?: never;
    MapFilter?: never;
    $unknown?: never;
  }

  /**
   * A filter on a single attribute value.
   *
   * @public
   */
  export interface AttributeFilterMember {
    AndAllFilters?: never;
    OrAnyFilters?: never;
    AttributeFilter: SearchAttributeFilter;
    MapFilter?: never;
    $unknown?: never;
  }

  /**
   * A filter on a map attribute's key-value pair.
   *
   * @public
   */
  export interface MapFilterMember {
    AndAllFilters?: never;
    OrAnyFilters?: never;
    AttributeFilter?: never;
    MapFilter: SearchMapFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AndAllFilters?: never;
    OrAnyFilters?: never;
    AttributeFilter?: never;
    MapFilter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AndAllFilters: (value: SearchFilterClause[]) => T;
    OrAnyFilters: (value: SearchFilterClause[]) => T;
    AttributeFilter: (value: SearchAttributeFilter) => T;
    MapFilter: (value: SearchMapFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies a version of a table.
 *
 * @public
 */
export interface TableVersion {
  /**
   * The table in question.
   *
   * @public
   */
  Table?: Table | undefined;

  /**
   * The ID value that identifies this table version. A `VersionId` is a string representation of an integer. Each version is incremented by 1.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface GetTablesResponse {
  /**
   * A list of the requested `Table` objects.
   *
   * @public
   */
  TableList?: Table[] | undefined;

  /**
   * A continuation token, present if the current list segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTableVersionResponse {
  /**
   * The requested table version.
   *
   * @public
   */
  TableVersion?: TableVersion | undefined;
}

/**
 * @public
 */
export interface SearchTablesResponse {
  /**
   * A continuation token, present if the current list segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of the requested `Table` objects. The `SearchTables` response returns only the tables that you have access to.
   *
   * @public
   */
  TableList?: Table[] | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * The name you assign to this job definition. It must be unique in your account.
   *
   * @public
   */
  Name: string | undefined;

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
   * Specifies whether job run queuing is enabled for the job runs for this job.
   *
   * A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing.
   *
   * If this field does not match the value set in the job run, then the value from the job run field will be used.
   *
   * @public
   */
  JobRunQueuingEnabled?: boolean | undefined;

  /**
   * Description of the job being defined.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * This field is reserved for future use.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role associated with this job.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * An `ExecutionProperty` specifying the maximum number of concurrent runs allowed for this job.
   *
   * @public
   */
  ExecutionProperty?: ExecutionProperty | undefined;

  /**
   * The `JobCommand` that runs this job.
   *
   * @public
   */
  Command: JobCommand | undefined;

  /**
   * The default arguments for every run of this job, specified as name-value pairs.
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
  DefaultArguments?: Record<string, string> | undefined;

  /**
   * Arguments for this job that are not overridden when providing job arguments in a job run, specified as name-value pairs.
   *
   * @public
   */
  NonOverridableArguments?: Record<string, string> | undefined;

  /**
   * The connections used for this job.
   *
   * @public
   */
  Connections?: ConnectionsList | undefined;

  /**
   * The maximum number of times to retry this job if it fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * This parameter is deprecated. Use `MaxCapacity` instead.
   *
   * The number of Glue data processing units (DPUs) to allocate to this Job. You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [Glue pricing page](https://aws.amazon.com/glue/pricing/).
   *
   * @deprecated This property is deprecated, use MaxCapacity instead.
   * @public
   */
  AllocatedCapacity?: number | undefined;

  /**
   * The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters `TIMEOUT` status.
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
   * The name of the `SecurityConfiguration` structure to be used with this job.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * The tags to use with this job. You may use tags to limit access to the job. For more information about tags in Glue, see [Amazon Web Services Tags in Glue](https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html) in the developer guide.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Specifies configuration properties of a job notification.
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
   * The number of workers of a defined `workerType` that are allocated when a job runs.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

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
   * The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.
   *
   * @public
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode> | undefined;

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
   * The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.
   *
   * @public
   */
  SourceControlDetails?: SourceControlDetails | undefined;

  /**
   * This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs.
   *
   * Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT.
   *
   * @public
   */
  MaintenanceWindow?: string | undefined;
}

/**
 * @public
 */
export interface GetTableVersionsResponse {
  /**
   * A list of strings identifying available versions of the specified table.
   *
   * @public
   */
  TableVersions?: TableVersion[] | undefined;

  /**
   * A continuation token, if the list of available versions does not include the last one.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies a job definition.
 *
 * @public
 */
export interface Job {
  /**
   * The name you assign to this job definition.
   *
   * @public
   */
  Name?: string | undefined;

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
   * Specifies whether job run queuing is enabled for the job runs for this job.
   *
   * A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing.
   *
   * If this field does not match the value set in the job run, then the value from the job run field will be used.
   *
   * @public
   */
  JobRunQueuingEnabled?: boolean | undefined;

  /**
   * A description of the job.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * This field is reserved for future use.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role associated with this job.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The time and date that this job definition was created.
   *
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * The last point in time when this job definition was modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * An `ExecutionProperty` specifying the maximum number of concurrent runs allowed for this job.
   *
   * @public
   */
  ExecutionProperty?: ExecutionProperty | undefined;

  /**
   * The `JobCommand` that runs this job.
   *
   * @public
   */
  Command?: JobCommand | undefined;

  /**
   * The default arguments for every run of this job, specified as name-value pairs.
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
  DefaultArguments?: Record<string, string> | undefined;

  /**
   * Arguments for this job that are not overridden when providing job arguments in a job run, specified as name-value pairs.
   *
   * @public
   */
  NonOverridableArguments?: Record<string, string> | undefined;

  /**
   * The connections used for this job.
   *
   * @public
   */
  Connections?: ConnectionsList | undefined;

  /**
   * The maximum number of times to retry this job after a JobRun fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * This field is deprecated. Use `MaxCapacity` instead.
   *
   * The number of Glue data processing units (DPUs) allocated to runs of this job. You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [Glue pricing page](https://aws.amazon.com/glue/pricing/).
   *
   * @deprecated This property is deprecated, use MaxCapacity instead.
   * @public
   */
  AllocatedCapacity?: number | undefined;

  /**
   * The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters `TIMEOUT` status.
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
   * For Glue version 2.0 or later jobs, you cannot specify a `Maximum capacity`. Instead, you should specify a `Worker type` and the `Number of workers`.
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
   * The type of predefined worker that is allocated when a job runs.
   *
   * Glue provides multiple worker types to accommodate different workload requirements:
   *
   * G Worker Types (General-purpose compute workers):
   *
   * - G.1X: 1 DPU (4 vCPUs, 16 GB memory, 94GB disk)
   * - G.2X: 2 DPU (8 vCPUs, 32 GB memory, 138GB disk)
   * - G.4X: 4 DPU (16 vCPUs, 64 GB memory, 256GB disk)
   * - G.8X: 8 DPU (32 vCPUs, 128 GB memory, 512GB disk)
   * - G.12X: 12 DPU (48 vCPUs, 192 GB memory, 768GB disk)
   * - G.16X: 16 DPU (64 vCPUs, 256 GB memory, 1024GB disk)
   *
   * R Worker Types (Memory-optimized workers):
   *
   * - R.1X: 1 M-DPU (4 vCPUs, 32 GB memory, 94GB disk)
   * - R.2X: 2 M-DPU (8 vCPUs, 64 GB memory, 138GB disk)
   * - R.4X: 4 M-DPU (16 vCPUs, 128 GB memory, 256GB disk)
   * - R.8X: 8 M-DPU (32 vCPUs, 256 GB memory, 512GB disk)
   *
   * The `G.12X`, `G.16X`, and `R.1X` through `R.8X` worker types are available only for Glue version 4.0 or later Spark ETL jobs in select Amazon Web Services Regions. For the supported Regions, see [Configuring job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
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
   * The name of the `SecurityConfiguration` structure to be used with this job.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * Specifies configuration properties of a job notification.
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
   * The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.
   *
   * @public
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode> | undefined;

  /**
   * Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.
   *
   * The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary.
   *
   * Only jobs with Glue version 3.0 and above and command type `glueetl` will be allowed to set `ExecutionClass` to `FLEX`. The flexible execution class is available for Spark jobs.
   *
   * @public
   */
  ExecutionClass?: ExecutionClass | undefined;

  /**
   * The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.
   *
   * @public
   */
  SourceControlDetails?: SourceControlDetails | undefined;

  /**
   * This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs.
   *
   * Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT.
   *
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * The name of an Glue usage profile associated with the job.
   *
   * @public
   */
  ProfileName?: string | undefined;
}

/**
 * Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information.
 *
 * @public
 */
export interface JobUpdate {
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
   * Specifies whether job run queuing is enabled for the job runs for this job.
   *
   * A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing.
   *
   * If this field does not match the value set in the job run, then the value from the job run field will be used.
   *
   * @public
   */
  JobRunQueuingEnabled?: boolean | undefined;

  /**
   * Description of the job being defined.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * This field is reserved for future use.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role associated with this job (required).
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * An `ExecutionProperty` specifying the maximum number of concurrent runs allowed for this job.
   *
   * @public
   */
  ExecutionProperty?: ExecutionProperty | undefined;

  /**
   * The `JobCommand` that runs this job (required).
   *
   * @public
   */
  Command?: JobCommand | undefined;

  /**
   * The default arguments for every run of this job, specified as name-value pairs.
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
  DefaultArguments?: Record<string, string> | undefined;

  /**
   * Arguments for this job that are not overridden when providing job arguments in a job run, specified as name-value pairs.
   *
   * @public
   */
  NonOverridableArguments?: Record<string, string> | undefined;

  /**
   * The connections used for this job.
   *
   * @public
   */
  Connections?: ConnectionsList | undefined;

  /**
   * The maximum number of times to retry this job if it fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * This field is deprecated. Use `MaxCapacity` instead.
   *
   * The number of Glue data processing units (DPUs) to allocate to this job. You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [Glue pricing page](https://aws.amazon.com/glue/pricing/).
   *
   * @deprecated This property is deprecated, use MaxCapacity instead.
   * @public
   */
  AllocatedCapacity?: number | undefined;

  /**
   * The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters `TIMEOUT` status.
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
   * The type of predefined worker that is allocated when a job runs. Accepts a value of G.025X, G.1X, G.2X, G.4X, G.8X, G.12X, G.16X, R.1X, R.2X, R.4X, or R.8X for Spark jobs. Accepts the value Z.2X for Ray jobs. For more information, see [Defining job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html#create-job)
   *
   * The `G.12X`, `G.16X`, and `R.1X` through `R.8X` worker types are available only for Glue version 4.0 or later Spark ETL jobs in select Amazon Web Services Regions. For the supported Regions, see [Configuring job properties for Spark jobs](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
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
   * The name of the `SecurityConfiguration` structure to be used with this job.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * Specifies the configuration properties of a job notification.
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
   * If not provided in the update request, the Glue version retains the value from the existing job definition.
   *
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.
   *
   * @public
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode> | undefined;

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
   * The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.
   *
   * @public
   */
  SourceControlDetails?: SourceControlDetails | undefined;

  /**
   * This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs.
   *
   * Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT.
   *
   * @public
   */
  MaintenanceWindow?: string | undefined;
}

/**
 * @public
 */
export interface SearchAssetsInput {
  /**
   * The text to search for. At least one of `searchText` or `filterClause` must be provided.
   *
   * @public
   */
  SearchText?: string | undefined;

  /**
   * The maximum number of results to return in the response.
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
   * The sort criteria for the search results.
   *
   * @public
   */
  Sort?: SearchSort | undefined;

  /**
   * The filter clause to apply to the search. Supports nested AND/OR logic with attribute-level and map-level filters.
   *
   * @public
   */
  FilterClause?: SearchFilterClause | undefined;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * The requested job definition.
   *
   * @public
   */
  Job?: Job | undefined;
}

/**
 * @public
 */
export interface UpdateJobRequest {
  /**
   * The name of the job definition to update.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * Specifies the values with which to update the job definition. Unspecified configuration is removed or reset to default values.
   *
   * @public
   */
  JobUpdate: JobUpdate | undefined;
}

/**
 * @public
 */
export interface BatchGetJobsResponse {
  /**
   * A list of job definitions.
   *
   * @public
   */
  Jobs?: Job[] | undefined;

  /**
   * A list of names of jobs not found.
   *
   * @public
   */
  JobsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface GetJobsResponse {
  /**
   * A list of job definitions.
   *
   * @public
   */
  Jobs?: Job[] | undefined;

  /**
   * A continuation token, if not all job definitions have yet been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}
