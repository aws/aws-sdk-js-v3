// smithy-typescript generated code
import type {
  AggregationType,
  AmplitudeConnectorOperator,
  AuthenticationType,
  CatalogType,
  ConnectionMode,
  ConnectorProvisioningType,
  ConnectorType,
  DatadogConnectorOperator,
  DataPullMode,
  DataTransferApiType,
  DynatraceConnectorOperator,
  ExecutionStatus,
  FileType,
  FlowStatus,
  GoogleAnalyticsConnectorOperator,
  InforNexusConnectorOperator,
  MarketoConnectorOperator,
  OAuth2CustomPropType,
  OAuth2GrantType,
  Operator,
  OperatorPropertiesKeys,
  Operators,
  PardotConnectorOperator,
  PathPrefix,
  PrefixFormat,
  PrefixType,
  PrivateConnectionProvisioningFailureCause,
  PrivateConnectionProvisioningStatus,
  S3ConnectorOperator,
  S3InputFileType,
  SalesforceConnectorOperator,
  SalesforceDataTransferApi,
  SAPODataConnectorOperator,
  ScheduleFrequencyType,
  ServiceNowConnectorOperator,
  SingularConnectorOperator,
  SlackConnectorOperator,
  SupportedDataTransferType,
  TaskType,
  TrendmicroConnectorOperator,
  TriggerType,
  VeevaConnectorOperator,
  WriteOperationType,
  ZendeskConnectorOperator,
} from "./enums";

/**
 * The aggregation settings that you can use to customize the output format of your flow data.
 *
 * @public
 */
export interface AggregationConfig {
  /**
   * Specifies whether Amazon AppFlow aggregates the flow records into a single file, or leave them unaggregated.
   *
   * @public
   */
  aggregationType?: AggregationType | undefined;

  /**
   * The desired file size, in MB, for each output file that Amazon AppFlow writes to the flow destination. For each file, Amazon AppFlow attempts to achieve the size that you specify. The actual file sizes might differ from this target based on the number and size of the records that each file contains.
   *
   * @public
   */
  targetFileSize?: number | undefined;
}

/**
 * The connector-specific credentials required when using Amplitude.
 *
 * @public
 */
export interface AmplitudeConnectorProfileCredentials {
  /**
   * A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
   *
   * @public
   */
  apiKey: string | undefined;

  /**
   * The Secret Access Key portion of the credentials.
   *
   * @public
   */
  secretKey: string | undefined;
}

/**
 * The connector-specific profile properties required when using Amplitude.
 *
 * @public
 */
export interface AmplitudeConnectorProfileProperties {}

/**
 * The connector metadata specific to Amplitude.
 *
 * @public
 */
export interface AmplitudeMetadata {}

/**
 * The properties that are applied when Amplitude is being used as a source.
 *
 * @public
 */
export interface AmplitudeSourceProperties {
  /**
   * The object specified in the Amplitude flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * The API key credentials required for API key authentication.
 *
 * @public
 */
export interface ApiKeyCredentials {
  /**
   * The API key required for API key authentication.
   *
   * @public
   */
  apiKey: string | undefined;

  /**
   * The API secret key required for API key authentication.
   *
   * @public
   */
  apiSecretKey?: string | undefined;
}

/**
 * Information about required authentication parameters.
 *
 * @public
 */
export interface AuthParameter {
  /**
   * The authentication key required to authenticate with the connector.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * Indicates whether this authentication parameter is required.
   *
   * @public
   */
  isRequired?: boolean | undefined;

  /**
   * Label used for authentication parameter.
   *
   * @public
   */
  label?: string | undefined;

  /**
   * A description about the authentication parameter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates whether this authentication parameter is a sensitive field.
   *
   * @public
   */
  isSensitiveField?: boolean | undefined;

  /**
   * Contains default values for this authentication parameter that are supplied by the connector.
   *
   * @public
   */
  connectorSuppliedValues?: string[] | undefined;
}

/**
 * Configuration information required for custom authentication.
 *
 * @public
 */
export interface CustomAuthConfig {
  /**
   * The authentication type that the custom connector uses.
   *
   * @public
   */
  customAuthenticationType?: string | undefined;

  /**
   * Information about authentication parameters required for authentication.
   *
   * @public
   */
  authParameters?: AuthParameter[] | undefined;
}

/**
 * Custom parameter required for OAuth 2.0 authentication.
 *
 * @public
 */
export interface OAuth2CustomParameter {
  /**
   * The key of the custom parameter required for OAuth 2.0 authentication.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * Indicates whether the custom parameter for OAuth 2.0 authentication is required.
   *
   * @public
   */
  isRequired?: boolean | undefined;

  /**
   * The label of the custom parameter used for OAuth 2.0 authentication.
   *
   * @public
   */
  label?: string | undefined;

  /**
   * A description about the custom parameter used for OAuth 2.0 authentication.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates whether this authentication custom parameter is a sensitive field.
   *
   * @public
   */
  isSensitiveField?: boolean | undefined;

  /**
   * Contains default values for this authentication parameter that are supplied by the connector.
   *
   * @public
   */
  connectorSuppliedValues?: string[] | undefined;

  /**
   * Indicates whether custom parameter is used with TokenUrl or AuthUrl.
   *
   * @public
   */
  type?: OAuth2CustomPropType | undefined;
}

/**
 * Contains the default values required for OAuth 2.0 authentication.
 *
 * @public
 */
export interface OAuth2Defaults {
  /**
   * OAuth 2.0 scopes that the connector supports.
   *
   * @public
   */
  oauthScopes?: string[] | undefined;

  /**
   * Token URLs that can be used for OAuth 2.0 authentication.
   *
   * @public
   */
  tokenUrls?: string[] | undefined;

  /**
   * Auth code URLs that can be used for OAuth 2.0 authentication.
   *
   * @public
   */
  authCodeUrls?: string[] | undefined;

  /**
   * OAuth 2.0 grant types supported by the connector.
   *
   * @public
   */
  oauth2GrantTypesSupported?: OAuth2GrantType[] | undefined;

  /**
   * List of custom parameters required for OAuth 2.0 authentication.
   *
   * @public
   */
  oauth2CustomProperties?: OAuth2CustomParameter[] | undefined;
}

/**
 * Contains information about the authentication config that the connector supports.
 *
 * @public
 */
export interface AuthenticationConfig {
  /**
   * Indicates whether basic authentication is supported by the connector.
   *
   * @public
   */
  isBasicAuthSupported?: boolean | undefined;

  /**
   * Indicates whether API key authentication is supported by the connector
   *
   * @public
   */
  isApiKeyAuthSupported?: boolean | undefined;

  /**
   * Indicates whether OAuth 2.0 authentication is supported by the connector.
   *
   * @public
   */
  isOAuth2Supported?: boolean | undefined;

  /**
   * Indicates whether custom authentication is supported by the connector
   *
   * @public
   */
  isCustomAuthSupported?: boolean | undefined;

  /**
   * Contains the default values required for OAuth 2.0 authentication.
   *
   * @public
   */
  oAuth2Defaults?: OAuth2Defaults | undefined;

  /**
   * Contains information required for custom authentication.
   *
   * @public
   */
  customAuthConfigs?: CustomAuthConfig[] | undefined;
}

/**
 * The basic auth credentials required for basic authentication.
 *
 * @public
 */
export interface BasicAuthCredentials {
  /**
   * The username to use to connect to a resource.
   *
   * @public
   */
  username: string | undefined;

  /**
   * The password to use to connect to a resource.
   *
   * @public
   */
  password: string | undefined;
}

/**
 * @public
 */
export interface CancelFlowExecutionsRequest {
  /**
   * The name of a flow with active runs that you want to cancel.
   *
   * @public
   */
  flowName: string | undefined;

  /**
   * The ID of each active run to cancel. These runs must belong to the flow you specify in your request.
   *
   * If you omit this parameter, your request ends all active runs that belong to the flow.
   *
   * @public
   */
  executionIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CancelFlowExecutionsResponse {
  /**
   * The IDs of runs that Amazon AppFlow couldn't cancel. These runs might be ineligible for canceling because they haven't started yet or have already completed.
   *
   * @public
   */
  invalidExecutions?: string[] | undefined;
}

/**
 * The connector metadata specific to Connect Customer Customer Profiles.
 *
 * @public
 */
export interface CustomerProfilesMetadata {}

/**
 * The connector metadata specific to Datadog.
 *
 * @public
 */
export interface DatadogMetadata {}

/**
 * The connector metadata specific to Dynatrace.
 *
 * @public
 */
export interface DynatraceMetadata {}

/**
 * The connector metadata specific to Amazon EventBridge.
 *
 * @public
 */
export interface EventBridgeMetadata {}

/**
 * The connector metadata specific to Google Analytics.
 *
 * @public
 */
export interface GoogleAnalyticsMetadata {
  /**
   * The desired authorization scope for the Google Analytics account.
   *
   * @public
   */
  oAuthScopes?: string[] | undefined;
}

/**
 * The connector metadata specific to Amazon Honeycode.
 *
 * @public
 */
export interface HoneycodeMetadata {
  /**
   * The desired authorization scope for the Amazon Honeycode account.
   *
   * @public
   */
  oAuthScopes?: string[] | undefined;
}

/**
 * The connector metadata specific to Infor Nexus.
 *
 * @public
 */
export interface InforNexusMetadata {}

/**
 * The connector metadata specific to Marketo.
 *
 * @public
 */
export interface MarketoMetadata {}

/**
 * The connector metadata specific to Salesforce Pardot.
 *
 * @public
 */
export interface PardotMetadata {}

/**
 * The connector metadata specific to Amazon Redshift.
 *
 * @public
 */
export interface RedshiftMetadata {}

/**
 * The connector metadata specific to Amazon S3.
 *
 * @public
 */
export interface S3Metadata {}

/**
 * The connector metadata specific to Salesforce.
 *
 * @public
 */
export interface SalesforceMetadata {
  /**
   * The desired authorization scope for the Salesforce account.
   *
   * @public
   */
  oAuthScopes?: string[] | undefined;

  /**
   * The Salesforce APIs that you can have Amazon AppFlow use when your flows transfers data to or from Salesforce.
   *
   * @public
   */
  dataTransferApis?: SalesforceDataTransferApi[] | undefined;

  /**
   * The OAuth 2.0 grant types that Amazon AppFlow can use when it requests an access token from Salesforce. Amazon AppFlow requires an access token each time it attempts to access your Salesforce records.
   *
   * - **AUTHORIZATION_CODE**
   *
   *   Amazon AppFlow passes an authorization code when it requests the access token from Salesforce. Amazon AppFlow receives the authorization code from Salesforce after you log in to your Salesforce account and authorize Amazon AppFlow to access your records.
   *
   * - **JWT_BEARER**
   *
   *   Amazon AppFlow passes a JSON web token (JWT) when it requests the access token from Salesforce. You provide the JWT to Amazon AppFlow when you define the connection to your Salesforce account. When you use this grant type, you don't need to log in to your Salesforce account to authorize Amazon AppFlow to access your records.
   *
   * > **Note:** The CLIENT_CREDENTIALS value is not supported for Salesforce.
   *
   * @public
   */
  oauth2GrantTypesSupported?: OAuth2GrantType[] | undefined;
}

/**
 * The connector metadata specific to SAPOData.
 *
 * @public
 */
export interface SAPODataMetadata {}

/**
 * The connector metadata specific to ServiceNow.
 *
 * @public
 */
export interface ServiceNowMetadata {}

/**
 * The connector metadata specific to Singular.
 *
 * @public
 */
export interface SingularMetadata {}

/**
 * The connector metadata specific to Slack.
 *
 * @public
 */
export interface SlackMetadata {
  /**
   * The desired authorization scope for the Slack account.
   *
   * @public
   */
  oAuthScopes?: string[] | undefined;
}

/**
 * The connector metadata specific to Snowflake.
 *
 * @public
 */
export interface SnowflakeMetadata {
  /**
   * Specifies the supported Amazon Web Services Regions when using Snowflake.
   *
   * @public
   */
  supportedRegions?: string[] | undefined;
}

/**
 * The connector metadata specific to Trend Micro.
 *
 * @public
 */
export interface TrendmicroMetadata {}

/**
 * The connector metadata specific to Upsolver.
 *
 * @public
 */
export interface UpsolverMetadata {}

/**
 * The connector metadata specific to Veeva.
 *
 * @public
 */
export interface VeevaMetadata {}

/**
 * The connector metadata specific to Zendesk.
 *
 * @public
 */
export interface ZendeskMetadata {
  /**
   * The desired authorization scope for the Zendesk account.
   *
   * @public
   */
  oAuthScopes?: string[] | undefined;
}

/**
 * A structure to specify connector-specific metadata such as `oAuthScopes`, `supportedRegions`, `privateLinkServiceUrl`, and so on.
 *
 * @public
 */
export interface ConnectorMetadata {
  /**
   * The connector metadata specific to Amplitude.
   *
   * @public
   */
  Amplitude?: AmplitudeMetadata | undefined;

  /**
   * The connector metadata specific to Datadog.
   *
   * @public
   */
  Datadog?: DatadogMetadata | undefined;

  /**
   * The connector metadata specific to Dynatrace.
   *
   * @public
   */
  Dynatrace?: DynatraceMetadata | undefined;

  /**
   * The connector metadata specific to Google Analytics.
   *
   * @public
   */
  GoogleAnalytics?: GoogleAnalyticsMetadata | undefined;

  /**
   * The connector metadata specific to Infor Nexus.
   *
   * @public
   */
  InforNexus?: InforNexusMetadata | undefined;

  /**
   * The connector metadata specific to Marketo.
   *
   * @public
   */
  Marketo?: MarketoMetadata | undefined;

  /**
   * The connector metadata specific to Amazon Redshift.
   *
   * @public
   */
  Redshift?: RedshiftMetadata | undefined;

  /**
   * The connector metadata specific to Amazon S3.
   *
   * @public
   */
  S3?: S3Metadata | undefined;

  /**
   * The connector metadata specific to Salesforce.
   *
   * @public
   */
  Salesforce?: SalesforceMetadata | undefined;

  /**
   * The connector metadata specific to ServiceNow.
   *
   * @public
   */
  ServiceNow?: ServiceNowMetadata | undefined;

  /**
   * The connector metadata specific to Singular.
   *
   * @public
   */
  Singular?: SingularMetadata | undefined;

  /**
   * The connector metadata specific to Slack.
   *
   * @public
   */
  Slack?: SlackMetadata | undefined;

  /**
   * The connector metadata specific to Snowflake.
   *
   * @public
   */
  Snowflake?: SnowflakeMetadata | undefined;

  /**
   * The connector metadata specific to Trend Micro.
   *
   * @public
   */
  Trendmicro?: TrendmicroMetadata | undefined;

  /**
   * The connector metadata specific to Veeva.
   *
   * @public
   */
  Veeva?: VeevaMetadata | undefined;

  /**
   * The connector metadata specific to Zendesk.
   *
   * @public
   */
  Zendesk?: ZendeskMetadata | undefined;

  /**
   * The connector metadata specific to Amazon EventBridge.
   *
   * @public
   */
  EventBridge?: EventBridgeMetadata | undefined;

  /**
   * The connector metadata specific to Upsolver.
   *
   * @public
   */
  Upsolver?: UpsolverMetadata | undefined;

  /**
   * The connector metadata specific to Connect Customer Customer Profiles.
   *
   * @public
   */
  CustomerProfiles?: CustomerProfilesMetadata | undefined;

  /**
   * The connector metadata specific to Amazon Honeycode.
   *
   * @public
   */
  Honeycode?: HoneycodeMetadata | undefined;

  /**
   * The connector metadata specific to SAPOData.
   *
   * @public
   */
  SAPOData?: SAPODataMetadata | undefined;

  /**
   * The connector metadata specific to Salesforce Pardot.
   *
   * @public
   */
  Pardot?: PardotMetadata | undefined;
}

/**
 * Contains information about the configuration of the lambda which is being registered as the connector.
 *
 * @public
 */
export interface LambdaConnectorProvisioningConfig {
  /**
   * Lambda ARN of the connector being registered.
   *
   * @public
   */
  lambdaArn: string | undefined;
}

/**
 * Contains information about the configuration of the connector being registered.
 *
 * @public
 */
export interface ConnectorProvisioningConfig {
  /**
   * Contains information about the configuration of the lambda which is being registered as the connector.
   *
   * @public
   */
  lambda?: LambdaConnectorProvisioningConfig | undefined;
}

/**
 * Contains information about the connector runtime settings that are required for flow execution.
 *
 * @public
 */
export interface ConnectorRuntimeSetting {
  /**
   * Contains value information about the connector runtime setting.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * Data type of the connector runtime setting.
   *
   * @public
   */
  dataType?: string | undefined;

  /**
   * Indicates whether this connector runtime setting is required.
   *
   * @public
   */
  isRequired?: boolean | undefined;

  /**
   * A label used for connector runtime setting.
   *
   * @public
   */
  label?: string | undefined;

  /**
   * A description about the connector runtime setting.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates the scope of the connector runtime setting.
   *
   * @public
   */
  scope?: string | undefined;

  /**
   * Contains default values for the connector runtime setting that are supplied by the connector.
   *
   * @public
   */
  connectorSuppliedValueOptions?: string[] | undefined;
}

/**
 * The API of the connector application that Amazon AppFlow uses to transfer your data.
 *
 * @public
 */
export interface DataTransferApi {
  /**
   * The name of the connector application API.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * You can specify one of the following types:
   *
   * - **AUTOMATIC**
   *
   *   The default. Optimizes a flow for datasets that fluctuate in size from small to large. For each flow run, Amazon AppFlow chooses to use the SYNC or ASYNC API type based on the amount of data that the run transfers.
   *
   * - **SYNC**
   *
   *   A synchronous API. This type of API optimizes a flow for small to medium-sized datasets.
   *
   * - **ASYNC**
   *
   *   An asynchronous API. This type of API optimizes a flow for large datasets.
   *
   * @public
   */
  Type?: DataTransferApiType | undefined;
}

/**
 * The configuration settings related to a given connector.
 *
 * @public
 */
export interface ConnectorConfiguration {
  /**
   * Specifies whether the connector can be used as a source.
   *
   * @public
   */
  canUseAsSource?: boolean | undefined;

  /**
   * Specifies whether the connector can be used as a destination.
   *
   * @public
   */
  canUseAsDestination?: boolean | undefined;

  /**
   * Lists the connectors that are available for use as destinations.
   *
   * @public
   */
  supportedDestinationConnectors?: ConnectorType[] | undefined;

  /**
   * Specifies the supported flow frequency for that connector.
   *
   * @public
   */
  supportedSchedulingFrequencies?: ScheduleFrequencyType[] | undefined;

  /**
   * Specifies if PrivateLink is enabled for that connector.
   *
   * @public
   */
  isPrivateLinkEnabled?: boolean | undefined;

  /**
   * Specifies if a PrivateLink endpoint URL is required.
   *
   * @public
   */
  isPrivateLinkEndpointUrlRequired?: boolean | undefined;

  /**
   * Specifies the supported trigger types for the flow.
   *
   * @public
   */
  supportedTriggerTypes?: TriggerType[] | undefined;

  /**
   * Specifies connector-specific metadata such as `oAuthScopes`, `supportedRegions`, `privateLinkServiceUrl`, and so on.
   *
   * @public
   */
  connectorMetadata?: ConnectorMetadata | undefined;

  /**
   * The connector type.
   *
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * The label used for registering the connector.
   *
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * A description about the connector.
   *
   * @public
   */
  connectorDescription?: string | undefined;

  /**
   * The owner who developed the connector.
   *
   * @public
   */
  connectorOwner?: string | undefined;

  /**
   * The connector name.
   *
   * @public
   */
  connectorName?: string | undefined;

  /**
   * The connector version.
   *
   * @public
   */
  connectorVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the registered connector.
   *
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * The connection modes that the connector supports.
   *
   * @public
   */
  connectorModes?: string[] | undefined;

  /**
   * The authentication config required for the connector.
   *
   * @public
   */
  authenticationConfig?: AuthenticationConfig | undefined;

  /**
   * The required connector runtime settings.
   *
   * @public
   */
  connectorRuntimeSettings?: ConnectorRuntimeSetting[] | undefined;

  /**
   * A list of API versions that are supported by the connector.
   *
   * @public
   */
  supportedApiVersions?: string[] | undefined;

  /**
   * A list of operators supported by the connector.
   *
   * @public
   */
  supportedOperators?: Operators[] | undefined;

  /**
   * A list of write operations supported by the connector.
   *
   * @public
   */
  supportedWriteOperations?: WriteOperationType[] | undefined;

  /**
   * The provisioning type used to register the connector.
   *
   * @public
   */
  connectorProvisioningType?: ConnectorProvisioningType | undefined;

  /**
   * The configuration required for registering the connector.
   *
   * @public
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig | undefined;

  /**
   * Logo URL of the connector.
   *
   * @public
   */
  logoURL?: string | undefined;

  /**
   * The date on which the connector was registered.
   *
   * @public
   */
  registeredAt?: Date | undefined;

  /**
   * Information about who registered the connector.
   *
   * @public
   */
  registeredBy?: string | undefined;

  /**
   * The data transfer types that the connector supports.
   *
   * - **RECORD**
   *
   *   Structured records.
   *
   * - **FILE**
   *
   *   Files or binary data.
   *
   * @public
   */
  supportedDataTransferTypes?: SupportedDataTransferType[] | undefined;

  /**
   * The APIs of the connector application that Amazon AppFlow can use to transfer your data.
   *
   * @public
   */
  supportedDataTransferApis?: DataTransferApi[] | undefined;
}

/**
 * Information about the registered connector.
 *
 * @public
 */
export interface ConnectorDetail {
  /**
   * A description about the registered connector.
   *
   * @public
   */
  connectorDescription?: string | undefined;

  /**
   * The name of the connector.
   *
   * @public
   */
  connectorName?: string | undefined;

  /**
   * The owner of the connector.
   *
   * @public
   */
  connectorOwner?: string | undefined;

  /**
   * The connector version.
   *
   * @public
   */
  connectorVersion?: string | undefined;

  /**
   * The application type of the connector.
   *
   * @public
   */
  applicationType?: string | undefined;

  /**
   * The connector type.
   *
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * A label used for the connector.
   *
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * The time at which the connector was registered.
   *
   * @public
   */
  registeredAt?: Date | undefined;

  /**
   * The user who registered the connector.
   *
   * @public
   */
  registeredBy?: string | undefined;

  /**
   * The provisioning type that the connector uses.
   *
   * @public
   */
  connectorProvisioningType?: ConnectorProvisioningType | undefined;

  /**
   * The connection mode that the connector supports.
   *
   * @public
   */
  connectorModes?: string[] | undefined;

  /**
   * The data transfer types that the connector supports.
   *
   * - **RECORD**
   *
   *   Structured records.
   *
   * - **FILE**
   *
   *   Files or binary data.
   *
   * @public
   */
  supportedDataTransferTypes?: SupportedDataTransferType[] | undefined;
}

/**
 * The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an *Account* or *Opportunity*, whereas a ServiceNow entity might be an *Incident*.
 *
 * @public
 */
export interface ConnectorEntity {
  /**
   * The name of the connector entity.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The label applied to the connector entity.
   *
   * @public
   */
  label?: string | undefined;

  /**
   * Specifies whether the connector entity is a parent or a category and has more entities nested underneath it. If another call is made with `entitiesPath = "the_current_entity_name_with_hasNestedEntities_true"`, then it returns the nested entities underneath it. This provides a way to retrieve all supported entities in a recursive fashion.
   *
   * @public
   */
  hasNestedEntities?: boolean | undefined;
}

/**
 * The properties that can be applied to a field when connector is being used as a destination.
 *
 * @public
 */
export interface DestinationFieldProperties {
  /**
   * Specifies if the destination field can be created by the current user.
   *
   * @public
   */
  isCreatable?: boolean | undefined;

  /**
   * Specifies if the destination field can have a null value.
   *
   * @public
   */
  isNullable?: boolean | undefined;

  /**
   * Specifies if the flow run can either insert new rows in the destination field if they do not already exist, or update them if they do.
   *
   * @public
   */
  isUpsertable?: boolean | undefined;

  /**
   * Specifies whether the field can be updated during an `UPDATE` or `UPSERT` write operation.
   *
   * @public
   */
  isUpdatable?: boolean | undefined;

  /**
   * Specifies whether the field can use the default value during a Create operation.
   *
   * @public
   */
  isDefaultedOnCreate?: boolean | undefined;

  /**
   * A list of supported write operations. For each write operation listed, this field can be used in `idFieldNames` when that write operation is present as a destination option.
   *
   * @public
   */
  supportedWriteOperations?: WriteOperationType[] | undefined;
}

/**
 * The properties that can be applied to a field when the connector is being used as a source.
 *
 * @public
 */
export interface SourceFieldProperties {
  /**
   * Indicates whether the field can be returned in a search result.
   *
   * @public
   */
  isRetrievable?: boolean | undefined;

  /**
   * Indicates if the field can be queried.
   *
   * @public
   */
  isQueryable?: boolean | undefined;

  /**
   * Indicates if this timestamp field can be used for incremental queries.
   *
   * @public
   */
  isTimestampFieldForIncrementalQueries?: boolean | undefined;
}

/**
 * The range of values that the property supports.
 *
 * @public
 */
export interface Range {
  /**
   * Maximum value supported by the field.
   *
   * @public
   */
  maximum?: number | undefined;

  /**
   * Minimum value supported by the field.
   *
   * @public
   */
  minimum?: number | undefined;
}

/**
 * Contains details regarding the supported field type and the operators that can be applied for filtering.
 *
 * @public
 */
export interface FieldTypeDetails {
  /**
   * The type of field, such as string, integer, date, and so on.
   *
   * @public
   */
  fieldType: string | undefined;

  /**
   * The list of operators supported by a field.
   *
   * @public
   */
  filterOperators: Operator[] | undefined;

  /**
   * The list of values that a field can contain. For example, a Boolean `fieldType` can have two values: "true" and "false".
   *
   * @public
   */
  supportedValues?: string[] | undefined;

  /**
   * The regular expression pattern for the field name.
   *
   * @public
   */
  valueRegexPattern?: string | undefined;

  /**
   * The date format that the field supports.
   *
   * @public
   */
  supportedDateFormat?: string | undefined;

  /**
   * The range of values this field can hold.
   *
   * @public
   */
  fieldValueRange?: Range | undefined;

  /**
   * This is the allowable length range for this field's value.
   *
   * @public
   */
  fieldLengthRange?: Range | undefined;
}

/**
 * Contains details regarding all the supported `FieldTypes` and their corresponding `filterOperators` and `supportedValues`.
 *
 * @public
 */
export interface SupportedFieldTypeDetails {
  /**
   * The initial supported version for `fieldType`. If this is later changed to a different version, v2 will be introduced.
   *
   * @public
   */
  v1: FieldTypeDetails | undefined;
}

/**
 * Describes the data model of a connector field. For example, for an *account* entity, the fields would be *account name*, *account ID*, and so on.
 *
 * @public
 */
export interface ConnectorEntityField {
  /**
   * The unique identifier of the connector field.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The parent identifier of the connector field.
   *
   * @public
   */
  parentIdentifier?: string | undefined;

  /**
   * The label applied to a connector entity field.
   *
   * @public
   */
  label?: string | undefined;

  /**
   * Booelan value that indicates whether this field can be used as a primary key.
   *
   * @public
   */
  isPrimaryKey?: boolean | undefined;

  /**
   * Default value that can be assigned to this field.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * Booelan value that indicates whether this field is deprecated or not.
   *
   * @public
   */
  isDeprecated?: boolean | undefined;

  /**
   * Contains details regarding the supported `FieldType`, including the corresponding `filterOperators` and `supportedValues`.
   *
   * @public
   */
  supportedFieldTypeDetails?: SupportedFieldTypeDetails | undefined;

  /**
   * A description of the connector entity field.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The properties that can be applied to a field when the connector is being used as a source.
   *
   * @public
   */
  sourceProperties?: SourceFieldProperties | undefined;

  /**
   * The properties applied to a field when the connector is being used as a destination.
   *
   * @public
   */
  destinationProperties?: DestinationFieldProperties | undefined;

  /**
   * A map that has specific properties related to the ConnectorEntityField.
   *
   * @public
   */
  customProperties?: Record<string, string> | undefined;
}

/**
 * Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
 *
 * @public
 */
export interface ConnectorOAuthRequest {
  /**
   * The code provided by the connector when it has been authenticated via the connected app.
   *
   * @public
   */
  authCode?: string | undefined;

  /**
   * The URL to which the authentication server redirects the browser after authorization has been granted.
   *
   * @public
   */
  redirectUri?: string | undefined;

  /**
   * The code verifier used in the PKCE (Proof Key for Code Exchange) OAuth flow.
   *
   * @public
   */
  codeVerifier?: string | undefined;
}

/**
 * The operation to be performed on the provided source fields.
 *
 * @public
 */
export interface ConnectorOperator {
  /**
   * The operation to be performed on the provided Amplitude source fields.
   *
   * @public
   */
  Amplitude?: AmplitudeConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Datadog source fields.
   *
   * @public
   */
  Datadog?: DatadogConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Dynatrace source fields.
   *
   * @public
   */
  Dynatrace?: DynatraceConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Google Analytics source fields.
   *
   * @public
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Infor Nexus source fields.
   *
   * @public
   */
  InforNexus?: InforNexusConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Marketo source fields.
   *
   * @public
   */
  Marketo?: MarketoConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Amazon S3 source fields.
   *
   * @public
   */
  S3?: S3ConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Salesforce source fields.
   *
   * @public
   */
  Salesforce?: SalesforceConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided ServiceNow source fields.
   *
   * @public
   */
  ServiceNow?: ServiceNowConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Singular source fields.
   *
   * @public
   */
  Singular?: SingularConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Slack source fields.
   *
   * @public
   */
  Slack?: SlackConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Trend Micro source fields.
   *
   * @public
   */
  Trendmicro?: TrendmicroConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Veeva source fields.
   *
   * @public
   */
  Veeva?: VeevaConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided Zendesk source fields.
   *
   * @public
   */
  Zendesk?: ZendeskConnectorOperator | undefined;

  /**
   * The operation to be performed on the provided SAPOData source fields.
   *
   * @public
   */
  SAPOData?: SAPODataConnectorOperator | undefined;

  /**
   * Operators supported by the custom connector.
   *
   * @public
   */
  CustomConnector?: Operator | undefined;

  /**
   * The operation to be performed on the provided Salesforce Pardot source fields.
   *
   * @public
   */
  Pardot?: PardotConnectorOperator | undefined;
}

/**
 * The OAuth 2.0 properties required for OAuth 2.0 authentication.
 *
 * @public
 */
export interface OAuth2Properties {
  /**
   * The token URL required for OAuth 2.0 authentication.
   *
   * @public
   */
  tokenUrl: string | undefined;

  /**
   * The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication.
   *
   * @public
   */
  oAuth2GrantType: OAuth2GrantType | undefined;

  /**
   * Associates your token URL with a map of properties that you define. Use this parameter to provide any additional details that the connector requires to authenticate your request.
   *
   * @public
   */
  tokenUrlCustomProperties?: Record<string, string> | undefined;
}

/**
 * The profile properties required by the custom connector.
 *
 * @public
 */
export interface CustomConnectorProfileProperties {
  /**
   * A map of properties that are required to create a profile for the custom connector.
   *
   * @public
   */
  profileProperties?: Record<string, string> | undefined;

  /**
   * The OAuth 2.0 properties required for OAuth 2.0 authentication.
   *
   * @public
   */
  oAuth2Properties?: OAuth2Properties | undefined;
}

/**
 * The connector-specific profile properties required by Datadog.
 *
 * @public
 */
export interface DatadogConnectorProfileProperties {
  /**
   * The location of the Datadog resource.
   *
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * The connector-specific profile properties required by Dynatrace.
 *
 * @public
 */
export interface DynatraceConnectorProfileProperties {
  /**
   * The location of the Dynatrace resource.
   *
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * The connector-specific profile properties required by Google Analytics.
 *
 * @public
 */
export interface GoogleAnalyticsConnectorProfileProperties {}

/**
 * The connector-specific properties required when using Amazon Honeycode.
 *
 * @public
 */
export interface HoneycodeConnectorProfileProperties {}

/**
 * The connector-specific profile properties required by Infor Nexus.
 *
 * @public
 */
export interface InforNexusConnectorProfileProperties {
  /**
   * The location of the Infor Nexus resource.
   *
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * The connector-specific profile properties required when using Marketo.
 *
 * @public
 */
export interface MarketoConnectorProfileProperties {
  /**
   * The location of the Marketo resource.
   *
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * The connector-specific profile properties required when using Salesforce Pardot.
 *
 * @public
 */
export interface PardotConnectorProfileProperties {
  /**
   * The location of the Salesforce Pardot resource.
   *
   * @public
   */
  instanceUrl?: string | undefined;

  /**
   * Indicates whether the connector profile applies to a sandbox or production environment.
   *
   * @public
   */
  isSandboxEnvironment?: boolean | undefined;

  /**
   * The business unit id of Salesforce Pardot instance.
   *
   * @public
   */
  businessUnitId?: string | undefined;
}

/**
 * The connector-specific profile properties when using Amazon Redshift.
 *
 * @public
 */
export interface RedshiftConnectorProfileProperties {
  /**
   * The JDBC URL of the Amazon Redshift cluster.
   *
   * @public
   */
  databaseUrl?: string | undefined;

  /**
   * A name for the associated Amazon S3 bucket.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The object key for the destination bucket in which Amazon AppFlow places the files.
   *
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of IAM role that grants Amazon Redshift read-only access to Amazon S3. For more information, and for the polices that you attach to this role, see [Allow Amazon Redshift to access your Amazon AppFlow data in Amazon S3](https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#redshift-access-s3).
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that permits Amazon AppFlow to access your Amazon Redshift database through the Data API. For more information, and for the polices that you attach to this role, see [Allow Amazon AppFlow to access Amazon Redshift databases with the Data API](https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#access-redshift).
   *
   * @public
   */
  dataApiRoleArn?: string | undefined;

  /**
   * Indicates whether the connector profile defines a connection to an Amazon Redshift Serverless data warehouse.
   *
   * @public
   */
  isRedshiftServerless?: boolean | undefined;

  /**
   * The unique ID that's assigned to an Amazon Redshift cluster.
   *
   * @public
   */
  clusterIdentifier?: string | undefined;

  /**
   * The name of an Amazon Redshift workgroup.
   *
   * @public
   */
  workgroupName?: string | undefined;

  /**
   * The name of an Amazon Redshift database.
   *
   * @public
   */
  databaseName?: string | undefined;
}

/**
 * The connector-specific profile properties required when using Salesforce.
 *
 * @public
 */
export interface SalesforceConnectorProfileProperties {
  /**
   * The location of the Salesforce resource.
   *
   * @public
   */
  instanceUrl?: string | undefined;

  /**
   * Indicates whether the connector profile applies to a sandbox or production environment.
   *
   * @public
   */
  isSandboxEnvironment?: boolean | undefined;

  /**
   * If the connection mode for the connector profile is private, this parameter sets whether Amazon AppFlow uses the private network to send metadata and authorization calls to Salesforce. Amazon AppFlow sends private calls through Amazon Web Services PrivateLink. These calls travel through Amazon Web Services infrastructure without being exposed to the public internet.
   *
   * Set either of the following values:
   *
   * - **true**
   *
   *   Amazon AppFlow sends all calls to Salesforce over the private network.
   *
   *   These private calls are:
   *
   *   - Calls to get metadata about your Salesforce records. This metadata describes your Salesforce objects and their fields.
   *   - Calls to get or refresh access tokens that allow Amazon AppFlow to access your Salesforce records.
   *   - Calls to transfer your Salesforce records as part of a flow run.
   *
   * - **false**
   *
   *   The default value. Amazon AppFlow sends some calls to Salesforce privately and other calls over the public internet.
   *
   *   The public calls are:
   *
   *   - Calls to get metadata about your Salesforce records.
   *   - Calls to get or refresh access tokens.
   *
   *   The private calls are:
   *
   *   - Calls to transfer your Salesforce records as part of a flow run.
   *
   * @public
   */
  usePrivateLinkForMetadataAndAuthorization?: boolean | undefined;
}

/**
 * The OAuth properties required for OAuth type authentication.
 *
 * @public
 */
export interface OAuthProperties {
  /**
   * The token url required to fetch access/refresh tokens using authorization code and also to refresh expired access token using refresh token.
   *
   * @public
   */
  tokenUrl: string | undefined;

  /**
   * The authorization code url required to redirect to SAP Login Page to fetch authorization code for OAuth type authentication.
   *
   * @public
   */
  authCodeUrl: string | undefined;

  /**
   * The OAuth scopes required for OAuth type authentication.
   *
   * @public
   */
  oAuthScopes: string[] | undefined;
}

/**
 * The connector-specific profile properties required when using SAPOData.
 *
 * @public
 */
export interface SAPODataConnectorProfileProperties {
  /**
   * The location of the SAPOData resource.
   *
   * @public
   */
  applicationHostUrl: string | undefined;

  /**
   * The application path to catalog service.
   *
   * @public
   */
  applicationServicePath: string | undefined;

  /**
   * The port number of the SAPOData instance.
   *
   * @public
   */
  portNumber: number | undefined;

  /**
   * The client number for the client creating the connection.
   *
   * @public
   */
  clientNumber: string | undefined;

  /**
   * The logon language of SAPOData instance.
   *
   * @public
   */
  logonLanguage?: string | undefined;

  /**
   * The SAPOData Private Link service name to be used for private data transfers.
   *
   * @public
   */
  privateLinkServiceName?: string | undefined;

  /**
   * The SAPOData OAuth properties required for OAuth type authentication.
   *
   * @public
   */
  oAuthProperties?: OAuthProperties | undefined;

  /**
   * If you set this parameter to `true`, Amazon AppFlow bypasses the single sign-on (SSO) settings in your SAP account when it accesses your SAP OData instance.
   *
   * Whether you need this option depends on the types of credentials that you applied to your SAP OData connection profile. If your profile uses basic authentication credentials, SAP SSO can prevent Amazon AppFlow from connecting to your account with your username and password. In this case, bypassing SSO makes it possible for Amazon AppFlow to connect successfully. However, if your profile uses OAuth credentials, this parameter has no affect.
   *
   * @public
   */
  disableSSO?: boolean | undefined;
}

/**
 * The connector-specific profile properties required when using ServiceNow.
 *
 * @public
 */
export interface ServiceNowConnectorProfileProperties {
  /**
   * The location of the ServiceNow resource.
   *
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * The connector-specific profile properties required when using Singular.
 *
 * @public
 */
export interface SingularConnectorProfileProperties {}

/**
 * The connector-specific profile properties required when using Slack.
 *
 * @public
 */
export interface SlackConnectorProfileProperties {
  /**
   * The location of the Slack resource.
   *
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * The connector-specific profile properties required when using Snowflake.
 *
 * @public
 */
export interface SnowflakeConnectorProfileProperties {
  /**
   * The name of the Snowflake warehouse.
   *
   * @public
   */
  warehouse: string | undefined;

  /**
   * The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: < Database>< Schema><Stage Name>.
   *
   * @public
   */
  stage: string | undefined;

  /**
   * The name of the Amazon S3 bucket associated with Snowflake.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The bucket path that refers to the Amazon S3 bucket associated with Snowflake.
   *
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * The Snowflake Private Link service name to be used for private data transfers.
   *
   * @public
   */
  privateLinkServiceName?: string | undefined;

  /**
   * The name of the account.
   *
   * @public
   */
  accountName?: string | undefined;

  /**
   * The Amazon Web Services Region of the Snowflake account.
   *
   * @public
   */
  region?: string | undefined;
}

/**
 * The connector-specific profile properties required when using Trend Micro.
 *
 * @public
 */
export interface TrendmicroConnectorProfileProperties {}

/**
 * The connector-specific profile properties required when using Veeva.
 *
 * @public
 */
export interface VeevaConnectorProfileProperties {
  /**
   * The location of the Veeva resource.
   *
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * The connector-specific profile properties required when using Zendesk.
 *
 * @public
 */
export interface ZendeskConnectorProfileProperties {
  /**
   * The location of the Zendesk resource.
   *
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * The connector-specific profile properties required by each connector.
 *
 * @public
 */
export interface ConnectorProfileProperties {
  /**
   * The connector-specific properties required by Amplitude.
   *
   * @public
   */
  Amplitude?: AmplitudeConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Datadog.
   *
   * @public
   */
  Datadog?: DatadogConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Dynatrace.
   *
   * @public
   */
  Dynatrace?: DynatraceConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required Google Analytics.
   *
   * @public
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Amazon Honeycode.
   *
   * @public
   */
  Honeycode?: HoneycodeConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Infor Nexus.
   *
   * @public
   */
  InforNexus?: InforNexusConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Marketo.
   *
   * @public
   */
  Marketo?: MarketoConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Amazon Redshift.
   *
   * @public
   */
  Redshift?: RedshiftConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Salesforce.
   *
   * @public
   */
  Salesforce?: SalesforceConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by serviceNow.
   *
   * @public
   */
  ServiceNow?: ServiceNowConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Singular.
   *
   * @public
   */
  Singular?: SingularConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Slack.
   *
   * @public
   */
  Slack?: SlackConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Snowflake.
   *
   * @public
   */
  Snowflake?: SnowflakeConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Trend Micro.
   *
   * @public
   */
  Trendmicro?: TrendmicroConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Veeva.
   *
   * @public
   */
  Veeva?: VeevaConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Zendesk.
   *
   * @public
   */
  Zendesk?: ZendeskConnectorProfileProperties | undefined;

  /**
   * The connector-specific profile properties required when using SAPOData.
   *
   * @public
   */
  SAPOData?: SAPODataConnectorProfileProperties | undefined;

  /**
   * The properties required by the custom connector.
   *
   * @public
   */
  CustomConnector?: CustomConnectorProfileProperties | undefined;

  /**
   * The connector-specific properties required by Salesforce Pardot.
   *
   * @public
   */
  Pardot?: PardotConnectorProfileProperties | undefined;
}

/**
 * Specifies the private connection provisioning state.
 *
 * @public
 */
export interface PrivateConnectionProvisioningState {
  /**
   * Specifies the private connection provisioning status.
   *
   * @public
   */
  status?: PrivateConnectionProvisioningStatus | undefined;

  /**
   * Specifies the private connection provisioning failure reason.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * Specifies the private connection provisioning failure cause.
   *
   * @public
   */
  failureCause?: PrivateConnectionProvisioningFailureCause | undefined;
}

/**
 * Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the `connectorProfileProperties` field.
 *
 * @public
 */
export interface ConnectorProfile {
  /**
   * The Amazon Resource Name (ARN) of the connector profile.
   *
   * @public
   */
  connectorProfileArn?: string | undefined;

  /**
   * The name of the connector profile. The name is unique for each `ConnectorProfile` in the Amazon Web Services account.
   *
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * The type of connector, such as Salesforce, Amplitude, and so on.
   *
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * The label for the connector profile being created.
   *
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * Indicates the connection mode and if it is public or private.
   *
   * @public
   */
  connectionMode?: ConnectionMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector profile credentials.
   *
   * @public
   */
  credentialsArn?: string | undefined;

  /**
   * The connector-specific properties of the profile configuration.
   *
   * @public
   */
  connectorProfileProperties?: ConnectorProfileProperties | undefined;

  /**
   * Specifies when the connector profile was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Specifies when the connector profile was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * Specifies the private connection provisioning state.
   *
   * @public
   */
  privateConnectionProvisioningState?: PrivateConnectionProvisioningState | undefined;
}

/**
 * The custom credentials required for custom authentication.
 *
 * @public
 */
export interface CustomAuthCredentials {
  /**
   * The custom authentication type that the connector uses.
   *
   * @public
   */
  customAuthenticationType: string | undefined;

  /**
   * A map that holds custom authentication credentials.
   *
   * @public
   */
  credentialsMap?: Record<string, string> | undefined;
}

/**
 * The OAuth 2.0 credentials required for OAuth 2.0 authentication.
 *
 * @public
 */
export interface OAuth2Credentials {
  /**
   * The identifier for the desired client.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * The access token used to access the connector on your behalf.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The refresh token used to refresh an expired access token.
   *
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   *
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * The connector-specific profile credentials that are required when using the custom connector.
 *
 * @public
 */
export interface CustomConnectorProfileCredentials {
  /**
   * The authentication type that the custom connector uses for authenticating while creating a connector profile.
   *
   * @public
   */
  authenticationType: AuthenticationType | undefined;

  /**
   * The basic credentials that are required for the authentication of the user.
   *
   * @public
   */
  basic?: BasicAuthCredentials | undefined;

  /**
   * The OAuth 2.0 credentials required for the authentication of the user.
   *
   * @public
   */
  oauth2?: OAuth2Credentials | undefined;

  /**
   * The API keys required for the authentication of the user.
   *
   * @public
   */
  apiKey?: ApiKeyCredentials | undefined;

  /**
   * If the connector uses the custom authentication mechanism, this holds the required credentials.
   *
   * @public
   */
  custom?: CustomAuthCredentials | undefined;
}

/**
 * The connector-specific credentials required by Datadog.
 *
 * @public
 */
export interface DatadogConnectorProfileCredentials {
  /**
   * A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
   *
   * @public
   */
  apiKey: string | undefined;

  /**
   * Application keys, in conjunction with your API key, give you full access to Datadog’s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API.
   *
   * @public
   */
  applicationKey: string | undefined;
}

/**
 * The connector-specific profile credentials required by Dynatrace.
 *
 * @public
 */
export interface DynatraceConnectorProfileCredentials {
  /**
   * The API tokens used by Dynatrace API to authenticate various API calls.
   *
   * @public
   */
  apiToken: string | undefined;
}

/**
 * The connector-specific profile credentials required by Google Analytics.
 *
 * @public
 */
export interface GoogleAnalyticsConnectorProfileCredentials {
  /**
   * The identifier for the desired client.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * @public
   */
  clientSecret: string | undefined;

  /**
   * The credentials used to access protected Google Analytics resources.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The credentials used to acquire new access tokens. This is required only for OAuth2 access tokens, and is not required for OAuth1 access tokens.
   *
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * The OAuth requirement needed to request security tokens from the connector endpoint.
   *
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * The connector-specific credentials required when using Amazon Honeycode.
 *
 * @public
 */
export interface HoneycodeConnectorProfileCredentials {
  /**
   * The credentials used to access protected Amazon Honeycode resources.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The credentials used to acquire new access tokens.
   *
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   *
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * The connector-specific profile credentials required by Infor Nexus.
 *
 * @public
 */
export interface InforNexusConnectorProfileCredentials {
  /**
   * The Access Key portion of the credentials.
   *
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * The identifier for the user.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The secret key used to sign requests.
   *
   * @public
   */
  secretAccessKey: string | undefined;

  /**
   * The encryption keys used to encrypt data.
   *
   * @public
   */
  datakey: string | undefined;
}

/**
 * The connector-specific profile credentials required by Marketo.
 *
 * @public
 */
export interface MarketoConnectorProfileCredentials {
  /**
   * The identifier for the desired client.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * @public
   */
  clientSecret: string | undefined;

  /**
   * The credentials used to access protected Marketo resources.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The OAuth requirement needed to request security tokens from the connector endpoint.
   *
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * The connector-specific profile credentials required when using Salesforce Pardot.
 *
 * @public
 */
export interface PardotConnectorProfileCredentials {
  /**
   * The credentials used to access protected Salesforce Pardot resources.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The credentials used to acquire new access tokens.
   *
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   *
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;

  /**
   * The secret manager ARN, which contains the client ID and client secret of the connected app.
   *
   * @public
   */
  clientCredentialsArn?: string | undefined;
}

/**
 * The connector-specific profile credentials required when using Amazon Redshift.
 *
 * @public
 */
export interface RedshiftConnectorProfileCredentials {
  /**
   * The name of the user.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The password that corresponds to the user name.
   *
   * @public
   */
  password?: string | undefined;
}

/**
 * The connector-specific profile credentials required when using Salesforce.
 *
 * @public
 */
export interface SalesforceConnectorProfileCredentials {
  /**
   * The credentials used to access protected Salesforce resources.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The credentials used to acquire new access tokens.
   *
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * The OAuth requirement needed to request security tokens from the connector endpoint.
   *
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;

  /**
   * The secret manager ARN, which contains the client ID and client secret of the connected app.
   *
   * @public
   */
  clientCredentialsArn?: string | undefined;

  /**
   * Specifies the OAuth 2.0 grant type that Amazon AppFlow uses when it requests an access token from Salesforce. Amazon AppFlow requires an access token each time it attempts to access your Salesforce records.
   *
   * You can specify one of the following values:
   *
   * - **AUTHORIZATION_CODE**
   *
   *   Amazon AppFlow passes an authorization code when it requests the access token from Salesforce. Amazon AppFlow receives the authorization code from Salesforce after you log in to your Salesforce account and authorize Amazon AppFlow to access your records.
   *
   * - **JWT_BEARER**
   *
   *   Amazon AppFlow passes a JSON web token (JWT) when it requests the access token from Salesforce. You provide the JWT to Amazon AppFlow when you define the connection to your Salesforce account. When you use this grant type, you don't need to log in to your Salesforce account to authorize Amazon AppFlow to access your records.
   *
   * > **Note:** The CLIENT_CREDENTIALS value is not supported for Salesforce.
   *
   * @public
   */
  oAuth2GrantType?: OAuth2GrantType | undefined;

  /**
   * A JSON web token (JWT) that authorizes Amazon AppFlow to access your Salesforce records.
   *
   * @public
   */
  jwtToken?: string | undefined;
}

/**
 * The OAuth credentials required for OAuth type authentication.
 *
 * @public
 */
export interface OAuthCredentials {
  /**
   * The identifier for the desired client.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * @public
   */
  clientSecret: string | undefined;

  /**
   * The access token used to access protected SAPOData resources.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The refresh token used to refresh expired access token.
   *
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * The OAuth requirement needed to request security tokens from the connector endpoint.
   *
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * The connector-specific profile credentials required when using SAPOData.
 *
 * @public
 */
export interface SAPODataConnectorProfileCredentials {
  /**
   * The SAPOData basic authentication credentials.
   *
   * @public
   */
  basicAuthCredentials?: BasicAuthCredentials | undefined;

  /**
   * The SAPOData OAuth type authentication credentials.
   *
   * @public
   */
  oAuthCredentials?: OAuthCredentials | undefined;
}

/**
 * The connector-specific profile credentials required when using ServiceNow.
 *
 * @public
 */
export interface ServiceNowConnectorProfileCredentials {
  /**
   * The name of the user.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The password that corresponds to the user name.
   *
   * @public
   */
  password?: string | undefined;

  /**
   * The OAuth 2.0 credentials required to authenticate the user.
   *
   * @public
   */
  oAuth2Credentials?: OAuth2Credentials | undefined;
}

/**
 * The connector-specific profile credentials required when using Singular.
 *
 * @public
 */
export interface SingularConnectorProfileCredentials {
  /**
   * A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
   *
   * @public
   */
  apiKey: string | undefined;
}

/**
 * The connector-specific profile credentials required when using Slack.
 *
 * @public
 */
export interface SlackConnectorProfileCredentials {
  /**
   * The identifier for the client.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * @public
   */
  clientSecret: string | undefined;

  /**
   * The credentials used to access protected Slack resources.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The OAuth requirement needed to request security tokens from the connector endpoint.
   *
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * The connector-specific profile credentials required when using Snowflake.
 *
 * @public
 */
export interface SnowflakeConnectorProfileCredentials {
  /**
   * The name of the user.
   *
   * @public
   */
  username: string | undefined;

  /**
   * The password that corresponds to the user name.
   *
   * @public
   */
  password?: string | undefined;

  /**
   * The RSA private key used for key pair authentication with Snowflake. Provide this instead of a password when your Snowflake account uses key pair authentication.
   *
   * @public
   */
  privateKey?: string | undefined;
}

/**
 * The connector-specific profile credentials required when using Trend Micro.
 *
 * @public
 */
export interface TrendmicroConnectorProfileCredentials {
  /**
   * The Secret Access Key portion of the credentials.
   *
   * @public
   */
  apiSecretKey: string | undefined;
}

/**
 * The connector-specific profile credentials required when using Veeva.
 *
 * @public
 */
export interface VeevaConnectorProfileCredentials {
  /**
   * The name of the user.
   *
   * @public
   */
  username: string | undefined;

  /**
   * The password that corresponds to the user name.
   *
   * @public
   */
  password: string | undefined;
}

/**
 * The connector-specific profile credentials required when using Zendesk.
 *
 * @public
 */
export interface ZendeskConnectorProfileCredentials {
  /**
   * The identifier for the desired client.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * @public
   */
  clientSecret: string | undefined;

  /**
   * The credentials used to access protected Zendesk resources.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The OAuth requirement needed to request security tokens from the connector endpoint.
   *
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * The connector-specific credentials required by a connector.
 *
 * @public
 */
export interface ConnectorProfileCredentials {
  /**
   * The connector-specific credentials required when using Amplitude.
   *
   * @public
   */
  Amplitude?: AmplitudeConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Datadog.
   *
   * @public
   */
  Datadog?: DatadogConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Dynatrace.
   *
   * @public
   */
  Dynatrace?: DynatraceConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Google Analytics.
   *
   * @public
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Amazon Honeycode.
   *
   * @public
   */
  Honeycode?: HoneycodeConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Infor Nexus.
   *
   * @public
   */
  InforNexus?: InforNexusConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Marketo.
   *
   * @public
   */
  Marketo?: MarketoConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Amazon Redshift.
   *
   * @public
   */
  Redshift?: RedshiftConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Salesforce.
   *
   * @public
   */
  Salesforce?: SalesforceConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using ServiceNow.
   *
   * @public
   */
  ServiceNow?: ServiceNowConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Singular.
   *
   * @public
   */
  Singular?: SingularConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Slack.
   *
   * @public
   */
  Slack?: SlackConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Snowflake.
   *
   * @public
   */
  Snowflake?: SnowflakeConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Trend Micro.
   *
   * @public
   */
  Trendmicro?: TrendmicroConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Veeva.
   *
   * @public
   */
  Veeva?: VeevaConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Zendesk.
   *
   * @public
   */
  Zendesk?: ZendeskConnectorProfileCredentials | undefined;

  /**
   * The connector-specific profile credentials required when using SAPOData.
   *
   * @public
   */
  SAPOData?: SAPODataConnectorProfileCredentials | undefined;

  /**
   * The connector-specific profile credentials that are required when using the custom connector.
   *
   * @public
   */
  CustomConnector?: CustomConnectorProfileCredentials | undefined;

  /**
   * The connector-specific credentials required when using Salesforce Pardot.
   *
   * @public
   */
  Pardot?: PardotConnectorProfileCredentials | undefined;
}

/**
 * Defines the connector-specific configuration and credentials for the connector profile.
 *
 * @public
 */
export interface ConnectorProfileConfig {
  /**
   * The connector-specific properties of the profile configuration.
   *
   * @public
   */
  connectorProfileProperties: ConnectorProfileProperties | undefined;

  /**
   * The connector-specific credentials required by each connector.
   *
   * @public
   */
  connectorProfileCredentials?: ConnectorProfileCredentials | undefined;
}

/**
 * @public
 */
export interface CreateConnectorProfileRequest {
  /**
   * The name of the connector profile. The name is unique for each `ConnectorProfile` in your Amazon Web Services account.
   *
   * @public
   */
  connectorProfileName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
   *
   * @public
   */
  kmsArn?: string | undefined;

  /**
   * The type of connector, such as Salesforce, Amplitude, and so on.
   *
   * @public
   */
  connectorType: ConnectorType | undefined;

  /**
   * The label of the connector. The label is unique for each `ConnectorRegistration` in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.
   *
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * Indicates the connection mode and specifies whether it is public or private. Private flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure without exposing it to the public internet.
   *
   * @public
   */
  connectionMode: ConnectionMode | undefined;

  /**
   * Defines the connector-specific configuration and credentials.
   *
   * @public
   */
  connectorProfileConfig: ConnectorProfileConfig | undefined;

  /**
   * The `clientToken` parameter is an idempotency token. It ensures that your `CreateConnectorProfile` request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same `clientToken` parameter value.
   *
   * If you omit a `clientToken` value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.
   *
   * If you specify input parameters that differ from your first request, an error occurs. If you use a different value for `clientToken`, Amazon AppFlow considers it a new call to `CreateConnectorProfile`. The token is active for 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorProfileResponse {
  /**
   * The Amazon Resource Name (ARN) of the connector profile.
   *
   * @public
   */
  connectorProfileArn?: string | undefined;
}

/**
 * The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
 *
 * @public
 */
export interface ErrorHandlingConfig {
  /**
   * Specifies if the flow should fail after the first instance of a failure when attempting to place data in the destination.
   *
   * @public
   */
  failOnFirstDestinationError?: boolean | undefined;

  /**
   * Specifies the Amazon S3 bucket prefix.
   *
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * Specifies the name of the Amazon S3 bucket.
   *
   * @public
   */
  bucketName?: string | undefined;
}

/**
 * The properties that are applied when the custom connector is being used as a destination.
 *
 * @public
 */
export interface CustomConnectorDestinationProperties {
  /**
   * The entity specified in the custom connector as a destination in the flow.
   *
   * @public
   */
  entityName: string | undefined;

  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination.
   *
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;

  /**
   * Specifies the type of write operation to be performed in the custom connector when it's used as destination.
   *
   * @public
   */
  writeOperationType?: WriteOperationType | undefined;

  /**
   * The name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update, delete, or upsert.
   *
   * @public
   */
  idFieldNames?: string[] | undefined;

  /**
   * The custom properties that are specific to the connector when it's used as a destination in the flow.
   *
   * @public
   */
  customProperties?: Record<string, string> | undefined;
}

/**
 * The properties that are applied when Connect Customer Customer Profiles is used as a destination.
 *
 * @public
 */
export interface CustomerProfilesDestinationProperties {
  /**
   * The unique name of the Connect Customer Customer Profiles domain.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The object specified in the Connect Customer Customer Profiles flow destination.
   *
   * @public
   */
  objectTypeName?: string | undefined;
}

/**
 * The properties that are applied when Amazon EventBridge is being used as a destination.
 *
 * @public
 */
export interface EventBridgeDestinationProperties {
  /**
   * The object specified in the Amazon EventBridge flow destination.
   *
   * @public
   */
  object: string | undefined;

  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;
}

/**
 * The properties that are applied when Amazon Honeycode is used as a destination.
 *
 * @public
 */
export interface HoneycodeDestinationProperties {
  /**
   * The object specified in the Amazon Honeycode flow destination.
   *
   * @public
   */
  object: string | undefined;

  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;
}

/**
 * The properties that are applied when Amazon Lookout for Metrics is used as a destination.
 *
 * @public
 */
export interface LookoutMetricsDestinationProperties {}

/**
 * The properties that Amazon AppFlow applies when you use Marketo as a flow destination.
 *
 * @public
 */
export interface MarketoDestinationProperties {
  /**
   * The object specified in the Marketo flow destination.
   *
   * @public
   */
  object: string | undefined;

  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;
}

/**
 * The properties that are applied when Amazon Redshift is being used as a destination.
 *
 * @public
 */
export interface RedshiftDestinationProperties {
  /**
   * The object specified in the Amazon Redshift flow destination.
   *
   * @public
   */
  object: string | undefined;

  /**
   * The intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift.
   *
   * @public
   */
  intermediateBucketName: string | undefined;

  /**
   * The object key for the bucket in which Amazon AppFlow places the destination files.
   *
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the Amazon Redshift destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;
}

/**
 * Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.
 *
 * @public
 */
export interface PrefixConfig {
  /**
   * Determines the format of the prefix, and whether it applies to the file name, file path, or both.
   *
   * @public
   */
  prefixType?: PrefixType | undefined;

  /**
   * Determines the level of granularity for the date and time that's included in the prefix.
   *
   * @public
   */
  prefixFormat?: PrefixFormat | undefined;

  /**
   * Specifies whether the destination file path includes either or both of the following elements:
   *
   * - **EXECUTION_ID**
   *
   *   The ID that Amazon AppFlow assigns to the flow run.
   *
   * - **SCHEMA_VERSION**
   *
   *   The version number of your data schema. Amazon AppFlow assigns this version number. The version number increases by one when you change any of the following settings in your flow configuration:
   *
   *   - Source-to-destination field mappings
   *   - Field data types
   *   - Partition keys
   *
   * @public
   */
  pathPrefixHierarchy?: PathPrefix[] | undefined;
}

/**
 * The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination.
 *
 * @public
 */
export interface S3OutputFormatConfig {
  /**
   * Indicates the file type that Amazon AppFlow places in the Amazon S3 bucket.
   *
   * @public
   */
  fileType?: FileType | undefined;

  /**
   * Determines the prefix that Amazon AppFlow applies to the folder name in the Amazon S3 bucket. You can name folders according to the flow frequency and date.
   *
   * @public
   */
  prefixConfig?: PrefixConfig | undefined;

  /**
   * The aggregation settings that you can use to customize the output format of your flow data.
   *
   * @public
   */
  aggregationConfig?: AggregationConfig | undefined;

  /**
   * If your file output format is Parquet, use this parameter to set whether Amazon AppFlow preserves the data types in your source data when it writes the output to Amazon S3.
   *
   * - `true`: Amazon AppFlow preserves the data types when it writes to Amazon S3. For example, an integer or `1` in your source data is still an integer in your output.
   * - `false`: Amazon AppFlow converts all of the source data into strings when it writes to Amazon S3. For example, an integer of `1` in your source data becomes the string `"1"` in the output.
   *
   * @public
   */
  preserveSourceDataTyping?: boolean | undefined;
}

/**
 * The properties that are applied when Amazon S3 is used as a destination.
 *
 * @public
 */
export interface S3DestinationProperties {
  /**
   * The Amazon S3 bucket name in which Amazon AppFlow places the transferred data.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The object key for the destination bucket in which Amazon AppFlow places the files.
   *
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination.
   *
   * @public
   */
  s3OutputFormatConfig?: S3OutputFormatConfig | undefined;
}

/**
 * The properties that are applied when Salesforce is being used as a destination.
 *
 * @public
 */
export interface SalesforceDestinationProperties {
  /**
   * The object specified in the Salesforce flow destination.
   *
   * @public
   */
  object: string | undefined;

  /**
   * The name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update or delete.
   *
   * @public
   */
  idFieldNames?: string[] | undefined;

  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the Salesforce destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;

  /**
   * This specifies the type of write operation to be performed in Salesforce. When the value is `UPSERT`, then `idFieldNames` is required.
   *
   * @public
   */
  writeOperationType?: WriteOperationType | undefined;

  /**
   * Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data to Salesforce.
   *
   * - **AUTOMATIC**
   *
   *   The default. Amazon AppFlow selects which API to use based on the number of records that your flow transfers to Salesforce. If your flow transfers fewer than 1,000 records, Amazon AppFlow uses Salesforce REST API. If your flow transfers 1,000 records or more, Amazon AppFlow uses Salesforce Bulk API 2.0.
   *
   *   Each of these Salesforce APIs structures data differently. If Amazon AppFlow selects the API automatically, be aware that, for recurring flows, the data output might vary from one flow run to the next. For example, if a flow runs daily, it might use REST API on one day to transfer 900 records, and it might use Bulk API 2.0 on the next day to transfer 1,100 records. For each of these flow runs, the respective Salesforce API formats the data differently. Some of the differences include how dates are formatted and null values are represented. Also, Bulk API 2.0 doesn't transfer Salesforce compound fields.
   *
   *   By choosing this option, you optimize flow performance for both small and large data transfers, but the tradeoff is inconsistent formatting in the output.
   *
   * - **BULKV2**
   *
   *   Amazon AppFlow uses only Salesforce Bulk API 2.0. This API runs asynchronous data transfers, and it's optimal for large sets of data. By choosing this option, you ensure that your flow writes consistent output, but you optimize performance only for large data transfers.
   *
   *   Note that Bulk API 2.0 does not transfer Salesforce compound fields.
   *
   * - **REST_SYNC**
   *
   *   Amazon AppFlow uses only Salesforce REST API. By choosing this option, you ensure that your flow writes consistent output, but you decrease performance for large data transfers that are better suited for Bulk API 2.0. In some cases, if your flow attempts to transfer a vary large set of data, it might fail with a timed out error.
   *
   * @public
   */
  dataTransferApi?: SalesforceDataTransferApi | undefined;
}

/**
 * Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.
 *
 * For example, this setting would determine where to write the response from the destination connector upon a successful insert operation.
 *
 * @public
 */
export interface SuccessResponseHandlingConfig {
  /**
   * The Amazon S3 bucket prefix.
   *
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * The name of the Amazon S3 bucket.
   *
   * @public
   */
  bucketName?: string | undefined;
}

/**
 * The properties that are applied when using SAPOData as a flow destination
 *
 * @public
 */
export interface SAPODataDestinationProperties {
  /**
   * The object path specified in the SAPOData flow destination.
   *
   * @public
   */
  objectPath: string | undefined;

  /**
   * Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.
   *
   * For example, this setting would determine where to write the response from a destination connector upon a successful insert operation.
   *
   * @public
   */
  successResponseHandlingConfig?: SuccessResponseHandlingConfig | undefined;

  /**
   * A list of field names that can be used as an ID field when performing a write operation.
   *
   * @public
   */
  idFieldNames?: string[] | undefined;

  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;

  /**
   * The possible write operations in the destination connector. When this value is not provided, this defaults to the `INSERT` operation.
   *
   * @public
   */
  writeOperationType?: WriteOperationType | undefined;
}

/**
 * The properties that are applied when Snowflake is being used as a destination.
 *
 * @public
 */
export interface SnowflakeDestinationProperties {
  /**
   * The object specified in the Snowflake flow destination.
   *
   * @public
   */
  object: string | undefined;

  /**
   * The intermediate bucket that Amazon AppFlow uses when moving data into Snowflake.
   *
   * @public
   */
  intermediateBucketName: string | undefined;

  /**
   * The object key for the destination bucket in which Amazon AppFlow places the files.
   *
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the Snowflake destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;
}

/**
 * The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination.
 *
 * @public
 */
export interface UpsolverS3OutputFormatConfig {
  /**
   * Indicates the file type that Amazon AppFlow places in the Upsolver Amazon S3 bucket.
   *
   * @public
   */
  fileType?: FileType | undefined;

  /**
   * Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.
   *
   * @public
   */
  prefixConfig: PrefixConfig | undefined;

  /**
   * The aggregation settings that you can use to customize the output format of your flow data.
   *
   * @public
   */
  aggregationConfig?: AggregationConfig | undefined;
}

/**
 * The properties that are applied when Upsolver is used as a destination.
 *
 * @public
 */
export interface UpsolverDestinationProperties {
  /**
   * The Upsolver Amazon S3 bucket name in which Amazon AppFlow places the transferred data.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The object key for the destination Upsolver Amazon S3 bucket in which Amazon AppFlow places the files.
   *
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * The configuration that determines how data is formatted when Upsolver is used as the flow destination.
   *
   * @public
   */
  s3OutputFormatConfig: UpsolverS3OutputFormatConfig | undefined;
}

/**
 * The properties that are applied when Zendesk is used as a destination.
 *
 * @public
 */
export interface ZendeskDestinationProperties {
  /**
   * The object specified in the Zendesk flow destination.
   *
   * @public
   */
  object: string | undefined;

  /**
   * A list of field names that can be used as an ID field when performing a write operation.
   *
   * @public
   */
  idFieldNames?: string[] | undefined;

  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;

  /**
   * The possible write operations in the destination connector. When this value is not provided, this defaults to the `INSERT` operation.
   *
   * @public
   */
  writeOperationType?: WriteOperationType | undefined;
}

/**
 * This stores the information that is required to query a particular connector.
 *
 * @public
 */
export interface DestinationConnectorProperties {
  /**
   * The properties required to query Amazon Redshift.
   *
   * @public
   */
  Redshift?: RedshiftDestinationProperties | undefined;

  /**
   * The properties required to query Amazon S3.
   *
   * @public
   */
  S3?: S3DestinationProperties | undefined;

  /**
   * The properties required to query Salesforce.
   *
   * @public
   */
  Salesforce?: SalesforceDestinationProperties | undefined;

  /**
   * The properties required to query Snowflake.
   *
   * @public
   */
  Snowflake?: SnowflakeDestinationProperties | undefined;

  /**
   * The properties required to query Amazon EventBridge.
   *
   * @public
   */
  EventBridge?: EventBridgeDestinationProperties | undefined;

  /**
   * The properties required to query Amazon Lookout for Metrics.
   *
   * @public
   */
  LookoutMetrics?: LookoutMetricsDestinationProperties | undefined;

  /**
   * The properties required to query Upsolver.
   *
   * @public
   */
  Upsolver?: UpsolverDestinationProperties | undefined;

  /**
   * The properties required to query Amazon Honeycode.
   *
   * @public
   */
  Honeycode?: HoneycodeDestinationProperties | undefined;

  /**
   * The properties required to query Connect Customer Customer Profiles.
   *
   * @public
   */
  CustomerProfiles?: CustomerProfilesDestinationProperties | undefined;

  /**
   * The properties required to query Zendesk.
   *
   * @public
   */
  Zendesk?: ZendeskDestinationProperties | undefined;

  /**
   * The properties required to query Marketo.
   *
   * @public
   */
  Marketo?: MarketoDestinationProperties | undefined;

  /**
   * The properties that are required to query the custom Connector.
   *
   * @public
   */
  CustomConnector?: CustomConnectorDestinationProperties | undefined;

  /**
   * The properties required to query SAPOData.
   *
   * @public
   */
  SAPOData?: SAPODataDestinationProperties | undefined;
}

/**
 * Contains information about the configuration of destination connectors present in the flow.
 *
 * @public
 */
export interface DestinationFlowConfig {
  /**
   * The type of connector, such as Salesforce, Amplitude, and so on.
   *
   * @public
   */
  connectorType: ConnectorType | undefined;

  /**
   * The API version that the destination connector uses.
   *
   * @public
   */
  apiVersion?: string | undefined;

  /**
   * The name of the connector profile. This name must be unique for each connector profile in the Amazon Web Services account.
   *
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * This stores the information that is required to query a particular connector.
   *
   * @public
   */
  destinationConnectorProperties: DestinationConnectorProperties | undefined;
}

/**
 * Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog. When Amazon AppFlow catalogs your data, it stores metadata in Data Catalog tables. This metadata represents the data that's transferred by the flow that you configure with these settings.
 *
 * > **Note:** You can configure a flow with these settings only when the flow destination is Amazon S3.
 *
 * @public
 */
export interface GlueDataCatalogConfig {
  /**
   * The Amazon Resource Name (ARN) of an IAM role that grants Amazon AppFlow the permissions it needs to create Data Catalog tables, databases, and partitions.
   *
   * For an example IAM policy that has the required permissions, see [Identity-based policy examples for Amazon AppFlow](https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_id-based-policy-examples.html).
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The name of the Data Catalog database that stores the metadata tables that Amazon AppFlow creates in your Amazon Web Services account. These tables contain metadata for the data that's transferred by the flow that you configure with this parameter.
   *
   * > **Note:** When you configure a new flow with this parameter, you must specify an existing database.
   *
   * @public
   */
  databaseName: string | undefined;

  /**
   * A naming prefix for each Data Catalog table that Amazon AppFlow creates for the flow that you configure with this setting. Amazon AppFlow adds the prefix to the beginning of the each table name.
   *
   * @public
   */
  tablePrefix: string | undefined;
}

/**
 * Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.
 *
 * @public
 */
export interface MetadataCatalogConfig {
  /**
   * Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog.
   *
   * @public
   */
  glueDataCatalog?: GlueDataCatalogConfig | undefined;
}

/**
 * Specifies the configuration used when importing incremental records from the source.
 *
 * @public
 */
export interface IncrementalPullConfig {
  /**
   * A field that specifies the date time or timestamp field as the criteria to use when importing incremental records from the source.
   *
   * @public
   */
  datetimeTypeFieldName?: string | undefined;
}

/**
 * The properties that are applied when the custom connector is being used as a source.
 *
 * @public
 */
export interface CustomConnectorSourceProperties {
  /**
   * The entity specified in the custom connector as a source in the flow.
   *
   * @public
   */
  entityName: string | undefined;

  /**
   * Custom properties that are required to use the custom connector as a source.
   *
   * @public
   */
  customProperties?: Record<string, string> | undefined;

  /**
   * The API of the connector application that Amazon AppFlow uses to transfer your data.
   *
   * @public
   */
  dataTransferApi?: DataTransferApi | undefined;
}

/**
 * The properties that are applied when Datadog is being used as a source.
 *
 * @public
 */
export interface DatadogSourceProperties {
  /**
   * The object specified in the Datadog flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * The properties that are applied when Dynatrace is being used as a source.
 *
 * @public
 */
export interface DynatraceSourceProperties {
  /**
   * The object specified in the Dynatrace flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * The properties that are applied when Google Analytics is being used as a source.
 *
 * @public
 */
export interface GoogleAnalyticsSourceProperties {
  /**
   * The object specified in the Google Analytics flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * The properties that are applied when Infor Nexus is being used as a source.
 *
 * @public
 */
export interface InforNexusSourceProperties {
  /**
   * The object specified in the Infor Nexus flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * The properties that are applied when Marketo is being used as a source.
 *
 * @public
 */
export interface MarketoSourceProperties {
  /**
   * The object specified in the Marketo flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * The properties that are applied when Salesforce Pardot is being used as a source.
 *
 * @public
 */
export interface PardotSourceProperties {
  /**
   * The object specified in the Salesforce Pardot flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * When you use Amazon S3 as the source, the configuration format that you provide the flow input data.
 *
 * @public
 */
export interface S3InputFormatConfig {
  /**
   * The file type that Amazon AppFlow gets from your Amazon S3 bucket.
   *
   * @public
   */
  s3InputFileType?: S3InputFileType | undefined;
}

/**
 * The properties that are applied when Amazon S3 is being used as the flow source.
 *
 * @public
 */
export interface S3SourceProperties {
  /**
   * The Amazon S3 bucket name where the source files are stored.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The object key for the Amazon S3 bucket in which the source files are stored.
   *
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * When you use Amazon S3 as the source, the configuration format that you provide the flow input data.
   *
   * @public
   */
  s3InputFormatConfig?: S3InputFormatConfig | undefined;
}

/**
 * The properties that are applied when Salesforce is being used as a source.
 *
 * @public
 */
export interface SalesforceSourceProperties {
  /**
   * The object specified in the Salesforce flow source.
   *
   * @public
   */
  object: string | undefined;

  /**
   * The flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow.
   *
   * @public
   */
  enableDynamicFieldUpdate?: boolean | undefined;

  /**
   * Indicates whether Amazon AppFlow includes deleted files in the flow run.
   *
   * @public
   */
  includeDeletedRecords?: boolean | undefined;

  /**
   * Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data from Salesforce.
   *
   * - **AUTOMATIC**
   *
   *   The default. Amazon AppFlow selects which API to use based on the number of records that your flow transfers from Salesforce. If your flow transfers fewer than 1,000,000 records, Amazon AppFlow uses Salesforce REST API. If your flow transfers 1,000,000 records or more, Amazon AppFlow uses Salesforce Bulk API 2.0.
   *
   *   Each of these Salesforce APIs structures data differently. If Amazon AppFlow selects the API automatically, be aware that, for recurring flows, the data output might vary from one flow run to the next. For example, if a flow runs daily, it might use REST API on one day to transfer 900,000 records, and it might use Bulk API 2.0 on the next day to transfer 1,100,000 records. For each of these flow runs, the respective Salesforce API formats the data differently. Some of the differences include how dates are formatted and null values are represented. Also, Bulk API 2.0 doesn't transfer Salesforce compound fields.
   *
   *   By choosing this option, you optimize flow performance for both small and large data transfers, but the tradeoff is inconsistent formatting in the output.
   *
   * - **BULKV2**
   *
   *   Amazon AppFlow uses only Salesforce Bulk API 2.0. This API runs asynchronous data transfers, and it's optimal for large sets of data. By choosing this option, you ensure that your flow writes consistent output, but you optimize performance only for large data transfers.
   *
   *   Note that Bulk API 2.0 does not transfer Salesforce compound fields.
   *
   * - **REST_SYNC**
   *
   *   Amazon AppFlow uses only Salesforce REST API. By choosing this option, you ensure that your flow writes consistent output, but you decrease performance for large data transfers that are better suited for Bulk API 2.0. In some cases, if your flow attempts to transfer a vary large set of data, it might fail wituh a timed out error.
   *
   * @public
   */
  dataTransferApi?: SalesforceDataTransferApi | undefined;
}

/**
 * Sets the page size for each *concurrent process* that transfers OData records from your SAP instance. A concurrent process is query that retrieves a batch of records as part of a flow run. Amazon AppFlow can run multiple concurrent processes in parallel to transfer data faster.
 *
 * @public
 */
export interface SAPODataPaginationConfig {
  /**
   * The maximum number of records that Amazon AppFlow receives in each page of the response from your SAP application. For transfers of OData records, the maximum page size is 3,000. For transfers of data that comes from an ODP provider, the maximum page size is 10,000.
   *
   * @public
   */
  maxPageSize: number | undefined;
}

/**
 * Sets the number of *concurrent processes* that transfer OData records from your SAP instance. A concurrent process is query that retrieves a batch of records as part of a flow run. Amazon AppFlow can run multiple concurrent processes in parallel to transfer data faster.
 *
 * @public
 */
export interface SAPODataParallelismConfig {
  /**
   * The maximum number of processes that Amazon AppFlow runs at the same time when it retrieves your data from your SAP application.
   *
   * @public
   */
  maxParallelism: number | undefined;
}

/**
 * The properties that are applied when using SAPOData as a flow source.
 *
 * @public
 */
export interface SAPODataSourceProperties {
  /**
   * The object path specified in the SAPOData flow source.
   *
   * @public
   */
  objectPath?: string | undefined;

  /**
   * Sets the number of concurrent processes that transfers OData records from your SAP instance.
   *
   * @public
   */
  parallelismConfig?: SAPODataParallelismConfig | undefined;

  /**
   * Sets the page size for each concurrent process that transfers OData records from your SAP instance.
   *
   * @public
   */
  paginationConfig?: SAPODataPaginationConfig | undefined;
}

/**
 * The properties that are applied when ServiceNow is being used as a source.
 *
 * @public
 */
export interface ServiceNowSourceProperties {
  /**
   * The object specified in the ServiceNow flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * The properties that are applied when Singular is being used as a source.
 *
 * @public
 */
export interface SingularSourceProperties {
  /**
   * The object specified in the Singular flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * The properties that are applied when Slack is being used as a source.
 *
 * @public
 */
export interface SlackSourceProperties {
  /**
   * The object specified in the Slack flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * The properties that are applied when using Trend Micro as a flow source.
 *
 * @public
 */
export interface TrendmicroSourceProperties {
  /**
   * The object specified in the Trend Micro flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * The properties that are applied when using Veeva as a flow source.
 *
 * @public
 */
export interface VeevaSourceProperties {
  /**
   * The object specified in the Veeva flow source.
   *
   * @public
   */
  object: string | undefined;

  /**
   * The document type specified in the Veeva document extract flow.
   *
   * @public
   */
  documentType?: string | undefined;

  /**
   * Boolean value to include source files in Veeva document extract flow.
   *
   * @public
   */
  includeSourceFiles?: boolean | undefined;

  /**
   * Boolean value to include file renditions in Veeva document extract flow.
   *
   * @public
   */
  includeRenditions?: boolean | undefined;

  /**
   * Boolean value to include All Versions of files in Veeva document extract flow.
   *
   * @public
   */
  includeAllVersions?: boolean | undefined;
}

/**
 * The properties that are applied when using Zendesk as a flow source.
 *
 * @public
 */
export interface ZendeskSourceProperties {
  /**
   * The object specified in the Zendesk flow source.
   *
   * @public
   */
  object: string | undefined;
}

/**
 * Specifies the information that is required to query a particular connector.
 *
 * @public
 */
export interface SourceConnectorProperties {
  /**
   * Specifies the information that is required for querying Amplitude.
   *
   * @public
   */
  Amplitude?: AmplitudeSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Datadog.
   *
   * @public
   */
  Datadog?: DatadogSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Dynatrace.
   *
   * @public
   */
  Dynatrace?: DynatraceSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Google Analytics.
   *
   * @public
   */
  GoogleAnalytics?: GoogleAnalyticsSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Infor Nexus.
   *
   * @public
   */
  InforNexus?: InforNexusSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Marketo.
   *
   * @public
   */
  Marketo?: MarketoSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Amazon S3.
   *
   * @public
   */
  S3?: S3SourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Salesforce.
   *
   * @public
   */
  Salesforce?: SalesforceSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying ServiceNow.
   *
   * @public
   */
  ServiceNow?: ServiceNowSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Singular.
   *
   * @public
   */
  Singular?: SingularSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Slack.
   *
   * @public
   */
  Slack?: SlackSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Trend Micro.
   *
   * @public
   */
  Trendmicro?: TrendmicroSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Veeva.
   *
   * @public
   */
  Veeva?: VeevaSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Zendesk.
   *
   * @public
   */
  Zendesk?: ZendeskSourceProperties | undefined;

  /**
   * The properties that are applied when using SAPOData as a flow source.
   *
   * @public
   */
  SAPOData?: SAPODataSourceProperties | undefined;

  /**
   * The properties that are applied when the custom connector is being used as a source.
   *
   * @public
   */
  CustomConnector?: CustomConnectorSourceProperties | undefined;

  /**
   * Specifies the information that is required for querying Salesforce Pardot.
   *
   * @public
   */
  Pardot?: PardotSourceProperties | undefined;
}

/**
 * Contains information about the configuration of the source connector used in the flow.
 *
 * @public
 */
export interface SourceFlowConfig {
  /**
   * The type of connector, such as Salesforce, Amplitude, and so on.
   *
   * @public
   */
  connectorType: ConnectorType | undefined;

  /**
   * The API version of the connector when it's used as a source in the flow.
   *
   * @public
   */
  apiVersion?: string | undefined;

  /**
   * The name of the connector profile. This name must be unique for each connector profile in the Amazon Web Services account.
   *
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * Specifies the information that is required to query a particular source connector.
   *
   * @public
   */
  sourceConnectorProperties: SourceConnectorProperties | undefined;

  /**
   * Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull.
   *
   * @public
   */
  incrementalPullConfig?: IncrementalPullConfig | undefined;
}

/**
 * A class for modeling different type of tasks. Task implementation varies based on the `TaskType`.
 *
 * @public
 */
export interface Task {
  /**
   * The source fields to which a particular task is applied.
   *
   * @public
   */
  sourceFields: string[] | undefined;

  /**
   * The operation to be performed on the provided source fields.
   *
   * @public
   */
  connectorOperator?: ConnectorOperator | undefined;

  /**
   * A field in a destination connector, or a field value against which Amazon AppFlow validates a source field.
   *
   * @public
   */
  destinationField?: string | undefined;

  /**
   * Specifies the particular task implementation that Amazon AppFlow performs.
   *
   * @public
   */
  taskType: TaskType | undefined;

  /**
   * A map used to store task-related information. The execution service looks for particular information based on the `TaskType`.
   *
   * @public
   */
  taskProperties?: Partial<Record<OperatorPropertiesKeys, string>> | undefined;
}

/**
 * Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the `Scheduled` trigger type.
 *
 * @public
 */
export interface ScheduledTriggerProperties {
  /**
   * The scheduling expression that determines the rate at which the schedule will run, for example `rate(5minutes)`.
   *
   * @public
   */
  scheduleExpression: string | undefined;

  /**
   * Specifies whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run.
   *
   * @public
   */
  dataPullMode?: DataPullMode | undefined;

  /**
   * The time at which the scheduled flow starts. The time is formatted as a timestamp that follows the ISO 8601 standard, such as `2022-04-26T13:00:00-07:00`.
   *
   * @public
   */
  scheduleStartTime?: Date | undefined;

  /**
   * The time at which the scheduled flow ends. The time is formatted as a timestamp that follows the ISO 8601 standard, such as `2022-04-27T13:00:00-07:00`.
   *
   * @public
   */
  scheduleEndTime?: Date | undefined;

  /**
   * Specifies the time zone used when referring to the dates and times of a scheduled flow, such as `America/New_York`. This time zone is only a descriptive label. It doesn't affect how Amazon AppFlow interprets the timestamps that you specify to schedule the flow.
   *
   * If you want to schedule a flow by using times in a particular time zone, indicate the time zone as a UTC offset in your timestamps. For example, the UTC offsets for the `America/New_York` timezone are `-04:00` EDT and `-05:00 EST`.
   *
   * @public
   */
  timezone?: string | undefined;

  /**
   * Specifies the optional offset that is added to the time interval for a schedule-triggered flow.
   *
   * @public
   */
  scheduleOffset?: number | undefined;

  /**
   * Specifies the date range for the records to import from the connector in the first flow run.
   *
   * @public
   */
  firstExecutionFrom?: Date | undefined;

  /**
   * Defines how many times a scheduled flow fails consecutively before Amazon AppFlow deactivates it.
   *
   * @public
   */
  flowErrorDeactivationThreshold?: number | undefined;
}

/**
 * Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the `Scheduled` trigger type.
 *
 * @public
 */
export interface TriggerProperties {
  /**
   * Specifies the configuration details of a schedule-triggered flow as defined by the user.
   *
   * @public
   */
  Scheduled?: ScheduledTriggerProperties | undefined;
}

/**
 * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
 *
 * @public
 */
export interface TriggerConfig {
  /**
   * Specifies the type of flow trigger. This can be `OnDemand`, `Scheduled`, or `Event`.
   *
   * @public
   */
  triggerType: TriggerType | undefined;

  /**
   * Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the `Scheduled` trigger type.
   *
   * @public
   */
  triggerProperties?: TriggerProperties | undefined;
}

/**
 * @public
 */
export interface CreateFlowRequest {
  /**
   * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
   *
   * @public
   */
  flowName: string | undefined;

  /**
   * A description of the flow you want to create.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
   *
   * @public
   */
  kmsArn?: string | undefined;

  /**
   * The trigger settings that determine how and when the flow runs.
   *
   * @public
   */
  triggerConfig: TriggerConfig | undefined;

  /**
   * The configuration that controls how Amazon AppFlow retrieves data from the source connector.
   *
   * @public
   */
  sourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * The configuration that controls how Amazon AppFlow places data in the destination connector.
   *
   * @public
   */
  destinationFlowConfigList: DestinationFlowConfig[] | undefined;

  /**
   * A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
   *
   * @public
   */
  tasks: Task[] | undefined;

  /**
   * The tags used to organize, track, or control access for your flow.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.
   *
   * @public
   */
  metadataCatalogConfig?: MetadataCatalogConfig | undefined;

  /**
   * The `clientToken` parameter is an idempotency token. It ensures that your `CreateFlow` request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same `clientToken` parameter value.
   *
   * If you omit a `clientToken` value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.
   *
   * If you specify input parameters that differ from your first request, an error occurs. If you use a different value for `clientToken`, Amazon AppFlow considers it a new call to `CreateFlow`. The token is active for 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateFlowResponse {
  /**
   * The flow's Amazon Resource Name (ARN).
   *
   * @public
   */
  flowArn?: string | undefined;

  /**
   * Indicates the current status of the flow.
   *
   * @public
   */
  flowStatus?: FlowStatus | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorProfileRequest {
  /**
   * The name of the connector profile. The name is unique for each `ConnectorProfile` in your account.
   *
   * @public
   */
  connectorProfileName: string | undefined;

  /**
   * Indicates whether Amazon AppFlow should delete the profile, even if it is currently in use in one or more flows.
   *
   * @public
   */
  forceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorProfileResponse {}

/**
 * @public
 */
export interface DeleteFlowRequest {
  /**
   * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
   *
   * @public
   */
  flowName: string | undefined;

  /**
   * Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use.
   *
   * @public
   */
  forceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFlowResponse {}

/**
 * @public
 */
export interface DescribeConnectorRequest {
  /**
   * The connector type, such as CUSTOMCONNECTOR, Saleforce, Marketo. Please choose CUSTOMCONNECTOR for Lambda based custom connectors.
   *
   * @public
   */
  connectorType: ConnectorType | undefined;

  /**
   * The label of the connector. The label is unique for each `ConnectorRegistration` in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.
   *
   * @public
   */
  connectorLabel?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorResponse {
  /**
   * Configuration info of all the connectors that the user requested.
   *
   * @public
   */
  connectorConfiguration?: ConnectorConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorEntityRequest {
  /**
   * The entity name for that connector.
   *
   * @public
   */
  connectorEntityName: string | undefined;

  /**
   * The type of connector application, such as Salesforce, Amplitude, and so on.
   *
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * The name of the connector profile. The name is unique for each `ConnectorProfile` in the Amazon Web Services account.
   *
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * The version of the API that's used by the connector.
   *
   * @public
   */
  apiVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorEntityResponse {
  /**
   * Describes the fields for that connector entity. For example, for an *account* entity, the fields would be *account name*, *account ID*, and so on.
   *
   * @public
   */
  connectorEntityFields: ConnectorEntityField[] | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorProfilesRequest {
  /**
   * The name of the connector profile. The name is unique for each `ConnectorProfile` in the Amazon Web Services account.
   *
   * @public
   */
  connectorProfileNames?: string[] | undefined;

  /**
   * The type of connector, such as Salesforce, Amplitude, and so on.
   *
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * The name of the connector. The name is unique for each `ConnectorRegistration` in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.
   *
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * Specifies the maximum number of items that should be returned in the result set. The default for `maxResults` is 20 (for all paginated API operations).
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next page of data.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorProfilesResponse {
  /**
   * Returns information about the connector profiles associated with the flow.
   *
   * @public
   */
  connectorProfileDetails?: ConnectorProfile[] | undefined;

  /**
   * The pagination token for the next page of data. If `nextToken=null`, this means that all records have been fetched.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorsRequest {
  /**
   * The type of connector, such as Salesforce, Amplitude, and so on.
   *
   * @public
   */
  connectorTypes?: ConnectorType[] | undefined;

  /**
   * The maximum number of items that should be returned in the result set. The default is 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next page of data.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorsResponse {
  /**
   * The configuration that is applied to the connectors used in the flow.
   *
   * @public
   */
  connectorConfigurations?: Partial<Record<ConnectorType, ConnectorConfiguration>> | undefined;

  /**
   * Information about the connectors supported in Amazon AppFlow.
   *
   * @public
   */
  connectors?: ConnectorDetail[] | undefined;

  /**
   * The pagination token for the next page of data.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlowRequest {
  /**
   * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
   *
   * @public
   */
  flowName: string | undefined;
}

/**
 * Describes the details of the flow run, including the timestamp, status, and message.
 *
 * @public
 */
export interface ExecutionDetails {
  /**
   * Describes the details of the most recent flow run.
   *
   * @public
   */
  mostRecentExecutionMessage?: string | undefined;

  /**
   * Specifies the time of the most recent flow run.
   *
   * @public
   */
  mostRecentExecutionTime?: Date | undefined;

  /**
   * Specifies the status of the most recent flow run.
   *
   * @public
   */
  mostRecentExecutionStatus?: ExecutionStatus | undefined;
}

/**
 * Describes the status of an attempt from Amazon AppFlow to register a resource.
 *
 * When you run a flow that you've configured to use a metadata catalog, Amazon AppFlow registers a metadata table and data partitions with that catalog. This operation provides the status of that registration attempt. The operation also indicates how many related resources Amazon AppFlow created or updated.
 *
 * @public
 */
export interface RegistrationOutput {
  /**
   * Explains the status of the registration attempt from Amazon AppFlow. If the attempt fails, the message explains why.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Indicates the number of resources that Amazon AppFlow created or updated. Possible resources include metadata tables and data partitions.
   *
   * @public
   */
  result?: string | undefined;

  /**
   * Indicates the status of the registration attempt from Amazon AppFlow.
   *
   * @public
   */
  status?: ExecutionStatus | undefined;
}

/**
 * Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.
 *
 * @public
 */
export interface MetadataCatalogDetail {
  /**
   * The type of metadata catalog that Amazon AppFlow used for the associated flow run. This parameter returns the following value:
   *
   * - **GLUE**
   *
   *   The metadata catalog is provided by the Glue Data Catalog. Glue includes the Glue Data Catalog as a component.
   *
   * @public
   */
  catalogType?: CatalogType | undefined;

  /**
   * The name of the table that stores the metadata for the associated flow run. The table stores metadata that represents the data that the flow transferred. Amazon AppFlow stores the table in the metadata catalog.
   *
   * @public
   */
  tableName?: string | undefined;

  /**
   * Describes the status of the attempt from Amazon AppFlow to register the metadata table with the metadata catalog. Amazon AppFlow creates or updates this table for the associated flow run.
   *
   * @public
   */
  tableRegistrationOutput?: RegistrationOutput | undefined;

  /**
   * Describes the status of the attempt from Amazon AppFlow to register the data partitions with the metadata catalog. The data partitions organize the flow output into a hierarchical path, such as a folder path in an S3 bucket. Amazon AppFlow creates the partitions (if they don't already exist) based on your flow configuration.
   *
   * @public
   */
  partitionRegistrationOutput?: RegistrationOutput | undefined;
}

/**
 * @public
 */
export interface DescribeFlowResponse {
  /**
   * The flow's Amazon Resource Name (ARN).
   *
   * @public
   */
  flowArn?: string | undefined;

  /**
   * A description of the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
   *
   * @public
   */
  flowName?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
   *
   * @public
   */
  kmsArn?: string | undefined;

  /**
   * Indicates the current status of the flow.
   *
   * @public
   */
  flowStatus?: FlowStatus | undefined;

  /**
   * Contains an error message if the flow status is in a suspended or error state. This applies only to scheduled or event-triggered flows.
   *
   * @public
   */
  flowStatusMessage?: string | undefined;

  /**
   * The configuration that controls how Amazon AppFlow retrieves data from the source connector.
   *
   * @public
   */
  sourceFlowConfig?: SourceFlowConfig | undefined;

  /**
   * The configuration that controls how Amazon AppFlow transfers data to the destination connector.
   *
   * @public
   */
  destinationFlowConfigList?: DestinationFlowConfig[] | undefined;

  /**
   * Describes the details of the most recent flow run.
   *
   * @public
   */
  lastRunExecutionDetails?: ExecutionDetails | undefined;

  /**
   * The trigger settings that determine how and when the flow runs.
   *
   * @public
   */
  triggerConfig?: TriggerConfig | undefined;

  /**
   * A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
   *
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * Specifies when the flow was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Specifies when the flow was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The ARN of the user who created the flow.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * Specifies the user name of the account that performed the most recent update.
   *
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * The tags used to organize, track, or control access for your flow.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.
   *
   * @public
   */
  metadataCatalogConfig?: MetadataCatalogConfig | undefined;

  /**
   * Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.
   *
   * @public
   */
  lastRunMetadataCatalogDetails?: MetadataCatalogDetail[] | undefined;

  /**
   * The version number of your data schema. Amazon AppFlow assigns this version number. The version number increases by one when you change any of the following settings in your flow configuration:
   *
   * - Source-to-destination field mappings
   * - Field data types
   * - Partition keys
   *
   * @public
   */
  schemaVersion?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFlowExecutionRecordsRequest {
  /**
   * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
   *
   * @public
   */
  flowName: string | undefined;

  /**
   * Specifies the maximum number of items that should be returned in the result set. The default for `maxResults` is 20 (for all paginated API operations).
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next page of data.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Provides details in the event of a failed flow, including the failure count and the related error messages.
 *
 * @public
 */
export interface ErrorInfo {
  /**
   * Specifies the failure count for the attempted flow.
   *
   * @public
   */
  putFailuresCount?: number | undefined;

  /**
   * Specifies the error message that appears if a flow fails.
   *
   * @public
   */
  executionMessage?: string | undefined;
}

/**
 * Specifies the end result of the flow run.
 *
 * @public
 */
export interface ExecutionResult {
  /**
   * Provides any error message information related to the flow run.
   *
   * @public
   */
  errorInfo?: ErrorInfo | undefined;

  /**
   * The total number of bytes processed by the flow run.
   *
   * @public
   */
  bytesProcessed?: number | undefined;

  /**
   * The total number of bytes written as a result of the flow run.
   *
   * @public
   */
  bytesWritten?: number | undefined;

  /**
   * The number of records processed in the flow run.
   *
   * @public
   */
  recordsProcessed?: number | undefined;

  /**
   * The number of processes that Amazon AppFlow ran at the same time when it retrieved your data.
   *
   * @public
   */
  numParallelProcesses?: number | undefined;

  /**
   * The maximum number of records that Amazon AppFlow receives in each page of the response from your SAP application.
   *
   * @public
   */
  maxPageSize?: number | undefined;
}

/**
 * Specifies information about the past flow run instances for a given flow.
 *
 * @public
 */
export interface ExecutionRecord {
  /**
   * Specifies the identifier of the given flow run.
   *
   * @public
   */
  executionId?: string | undefined;

  /**
   * Specifies the flow run status and whether it is in progress, has completed successfully, or has failed.
   *
   * @public
   */
  executionStatus?: ExecutionStatus | undefined;

  /**
   * Describes the result of the given flow run.
   *
   * @public
   */
  executionResult?: ExecutionResult | undefined;

  /**
   * Specifies the start time of the flow run.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * Specifies the time of the most recent update.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The timestamp that determines the first new or updated record to be transferred in the flow run.
   *
   * @public
   */
  dataPullStartTime?: Date | undefined;

  /**
   * The timestamp that indicates the last new or updated record to be transferred in the flow run.
   *
   * @public
   */
  dataPullEndTime?: Date | undefined;

  /**
   * Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.
   *
   * @public
   */
  metadataCatalogDetails?: MetadataCatalogDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowExecutionRecordsResponse {
  /**
   * Returns a list of all instances when this flow was run.
   *
   * @public
   */
  flowExecutions?: ExecutionRecord[] | undefined;

  /**
   * The pagination token for the next page of data.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The properties of the flow, such as its source, destination, trigger type, and so on.
 *
 * @public
 */
export interface FlowDefinition {
  /**
   * The flow's Amazon Resource Name (ARN).
   *
   * @public
   */
  flowArn?: string | undefined;

  /**
   * A user-entered description of the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
   *
   * @public
   */
  flowName?: string | undefined;

  /**
   * Indicates the current status of the flow.
   *
   * @public
   */
  flowStatus?: FlowStatus | undefined;

  /**
   * Specifies the source connector type, such as Salesforce, Amazon S3, Amplitude, and so on.
   *
   * @public
   */
  sourceConnectorType?: ConnectorType | undefined;

  /**
   * The label of the source connector in the flow.
   *
   * @public
   */
  sourceConnectorLabel?: string | undefined;

  /**
   * Specifies the destination connector type, such as Salesforce, Amazon S3, Amplitude, and so on.
   *
   * @public
   */
  destinationConnectorType?: ConnectorType | undefined;

  /**
   * The label of the destination connector in the flow.
   *
   * @public
   */
  destinationConnectorLabel?: string | undefined;

  /**
   * Specifies the type of flow trigger. This can be `OnDemand`, `Scheduled`, or `Event`.
   *
   * @public
   */
  triggerType?: TriggerType | undefined;

  /**
   * Specifies when the flow was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Specifies when the flow was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The ARN of the user who created the flow.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * Specifies the account user name that most recently updated the flow.
   *
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * The tags used to organize, track, or control access for your flow.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Describes the details of the most recent flow run.
   *
   * @public
   */
  lastRunExecutionDetails?: ExecutionDetails | undefined;
}

/**
 * @public
 */
export interface ListConnectorEntitiesRequest {
  /**
   * The name of the connector profile. The name is unique for each `ConnectorProfile` in the Amazon Web Services account, and is used to query the downstream connector.
   *
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * The type of connector, such as Salesforce, Amplitude, and so on.
   *
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * This optional parameter is specific to connector implementation. Some connectors support multiple levels or categories of entities. You can find out the list of roots for such providers by sending a request without the `entitiesPath` parameter. If the connector supports entities at different roots, this initial request returns the list of roots. Otherwise, this request returns all entities supported by the provider.
   *
   * @public
   */
  entitiesPath?: string | undefined;

  /**
   * The version of the API that's used by the connector.
   *
   * @public
   */
  apiVersion?: string | undefined;

  /**
   * The maximum number of items that the operation returns in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token that was provided by your prior `ListConnectorEntities` operation if the response was too big for the page size. You specify this token to get the next page of results in paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorEntitiesResponse {
  /**
   * The response of `ListConnectorEntities` lists entities grouped by category. This map's key represents the group name, and its value contains the list of entities belonging to that group.
   *
   * @public
   */
  connectorEntityMap: Record<string, ConnectorEntity[]> | undefined;

  /**
   * A token that you specify in your next `ListConnectorEntities` operation to get the next page of results in paginated response. The `ListConnectorEntities` operation provides this token if the response is too big for the page size.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * Specifies the maximum number of items that should be returned in the result set. The default for `maxResults` is 20 (for all paginated API operations).
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next page of data.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * Contains information about the connectors supported by Amazon AppFlow.
   *
   * @public
   */
  connectors?: ConnectorDetail[] | undefined;

  /**
   * The pagination token for the next page of data. If nextToken=null, this means that all records have been fetched.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsRequest {
  /**
   * Specifies the maximum number of items that should be returned in the result set.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for next page of data.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsResponse {
  /**
   * The list of flows associated with your account.
   *
   * @public
   */
  flows?: FlowDefinition[] | undefined;

  /**
   * The pagination token for next page of data.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the specified flow.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags used to organize, track, or control access for your flow.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterConnectorRequest {
  /**
   * The name of the connector. The name is unique for each `ConnectorRegistration` in your Amazon Web Services account.
   *
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * A description about the connector that's being registered.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The provisioning type of the connector. Currently the only supported value is LAMBDA.
   *
   * @public
   */
  connectorProvisioningType?: ConnectorProvisioningType | undefined;

  /**
   * The provisioning type of the connector. Currently the only supported value is LAMBDA.
   *
   * @public
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig | undefined;

  /**
   * The `clientToken` parameter is an idempotency token. It ensures that your `RegisterConnector` request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same `clientToken` parameter value.
   *
   * If you omit a `clientToken` value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.
   *
   * If you specify input parameters that differ from your first request, an error occurs. If you use a different value for `clientToken`, Amazon AppFlow considers it a new call to `RegisterConnector`. The token is active for 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterConnectorResponse {
  /**
   * The ARN of the connector being registered.
   *
   * @public
   */
  connectorArn?: string | undefined;
}

/**
 * @public
 */
export interface ResetConnectorMetadataCacheRequest {
  /**
   * The name of the connector profile that you want to reset cached metadata for.
   *
   * You can omit this parameter if you're resetting the cache for any of the following connectors: Connect Customer, Amazon EventBridge, Amazon Lookout for Metrics, Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you must include this parameter in your request.
   *
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * The type of connector to reset cached metadata for.
   *
   * You must include this parameter in your request if you're resetting the cache for any of the following connectors: Connect Customer, Amazon EventBridge, Amazon Lookout for Metrics, Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you can omit this parameter from your request.
   *
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * Use this parameter if you want to reset cached metadata about the details for an individual entity.
   *
   * If you don't include this parameter in your request, Amazon AppFlow only resets cached metadata about entity names, not entity details.
   *
   * @public
   */
  connectorEntityName?: string | undefined;

  /**
   * Use this parameter only if you’re resetting the cached metadata about a nested entity. Only some connectors support nested entities. A nested entity is one that has another entity as a parent. To use this parameter, specify the name of the parent entity.
   *
   * To look up the parent-child relationship of entities, you can send a ListConnectorEntities request that omits the entitiesPath parameter. Amazon AppFlow will return a list of top-level entities. For each one, it indicates whether the entity has nested entities. Then, in a subsequent ListConnectorEntities request, you can specify a parent entity name for the entitiesPath parameter. Amazon AppFlow will return a list of the child entities for that parent.
   *
   * @public
   */
  entitiesPath?: string | undefined;

  /**
   * The API version that you specified in the connector profile that you’re resetting cached metadata for. You must use this parameter only if the connector supports multiple API versions or if the connector type is CustomConnector.
   *
   * To look up how many versions a connector supports, use the DescribeConnectors action. In the response, find the value that Amazon AppFlow returns for the connectorVersion parameter.
   *
   * To look up the connector type, use the DescribeConnectorProfiles action. In the response, find the value that Amazon AppFlow returns for the connectorType parameter.
   *
   * To look up the API version that you specified in a connector profile, use the DescribeConnectorProfiles action.
   *
   * @public
   */
  apiVersion?: string | undefined;
}

/**
 * @public
 */
export interface ResetConnectorMetadataCacheResponse {}

/**
 * @public
 */
export interface StartFlowRequest {
  /**
   * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
   *
   * @public
   */
  flowName: string | undefined;

  /**
   * The `clientToken` parameter is an idempotency token. It ensures that your `StartFlow` request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same `clientToken` parameter value.
   *
   * If you omit a `clientToken` value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.
   *
   * If you specify input parameters that differ from your first request, an error occurs for flows that run on a schedule or based on an event. However, the error doesn't occur for flows that run on demand. You set the conditions that initiate your flow for the `triggerConfig` parameter.
   *
   * If you use a different value for `clientToken`, Amazon AppFlow considers it a new call to `StartFlow`. The token is active for 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFlowResponse {
  /**
   * The flow's Amazon Resource Name (ARN).
   *
   * @public
   */
  flowArn?: string | undefined;

  /**
   * Indicates the current status of the flow.
   *
   * @public
   */
  flowStatus?: FlowStatus | undefined;

  /**
   * Returns the internal execution ID of an on-demand flow when the flow is started. For scheduled or event-triggered flows, this value is null.
   *
   * @public
   */
  executionId?: string | undefined;
}

/**
 * @public
 */
export interface StopFlowRequest {
  /**
   * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
   *
   * @public
   */
  flowName: string | undefined;
}

/**
 * @public
 */
export interface StopFlowResponse {
  /**
   * The flow's Amazon Resource Name (ARN).
   *
   * @public
   */
  flowArn?: string | undefined;

  /**
   * Indicates the current status of the flow.
   *
   * @public
   */
  flowStatus?: FlowStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for your flow.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UnregisterConnectorRequest {
  /**
   * The label of the connector. The label is unique for each `ConnectorRegistration` in your Amazon Web Services account.
   *
   * @public
   */
  connectorLabel: string | undefined;

  /**
   * Indicates whether Amazon AppFlow should unregister the connector, even if it is currently in use in one or more connector profiles. The default value is false.
   *
   * @public
   */
  forceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface UnregisterConnectorResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to untag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys associated with the tag that you want to remove from your flow.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateConnectorProfileRequest {
  /**
   * The name of the connector profile and is unique for each `ConnectorProfile` in the Amazon Web Services account.
   *
   * @public
   */
  connectorProfileName: string | undefined;

  /**
   * Indicates the connection mode and if it is public or private.
   *
   * @public
   */
  connectionMode: ConnectionMode | undefined;

  /**
   * Defines the connector-specific profile configuration and credentials.
   *
   * @public
   */
  connectorProfileConfig: ConnectorProfileConfig | undefined;

  /**
   * The `clientToken` parameter is an idempotency token. It ensures that your `UpdateConnectorProfile` request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same `clientToken` parameter value.
   *
   * If you omit a `clientToken` value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.
   *
   * If you specify input parameters that differ from your first request, an error occurs. If you use a different value for `clientToken`, Amazon AppFlow considers it a new call to `UpdateConnectorProfile`. The token is active for 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorProfileResponse {
  /**
   * The Amazon Resource Name (ARN) of the connector profile.
   *
   * @public
   */
  connectorProfileArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorRegistrationRequest {
  /**
   * The name of the connector. The name is unique for each connector registration in your AWS account.
   *
   * @public
   */
  connectorLabel: string | undefined;

  /**
   * A description about the update that you're applying to the connector.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Contains information about the configuration of the connector being registered.
   *
   * @public
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig | undefined;

  /**
   * The `clientToken` parameter is an idempotency token. It ensures that your `UpdateConnectorRegistration` request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same `clientToken` parameter value.
   *
   * If you omit a `clientToken` value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.
   *
   * If you specify input parameters that differ from your first request, an error occurs. If you use a different value for `clientToken`, Amazon AppFlow considers it a new call to `UpdateConnectorRegistration`. The token is active for 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorRegistrationResponse {
  /**
   * The ARN of the connector being updated.
   *
   * @public
   */
  connectorArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowRequest {
  /**
   * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
   *
   * @public
   */
  flowName: string | undefined;

  /**
   * A description of the flow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The trigger settings that determine how and when the flow runs.
   *
   * @public
   */
  triggerConfig: TriggerConfig | undefined;

  /**
   * Contains information about the configuration of the source connector used in the flow.
   *
   * @public
   */
  sourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * The configuration that controls how Amazon AppFlow transfers data to the destination connector.
   *
   * @public
   */
  destinationFlowConfigList: DestinationFlowConfig[] | undefined;

  /**
   * A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
   *
   * @public
   */
  tasks: Task[] | undefined;

  /**
   * Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.
   *
   * @public
   */
  metadataCatalogConfig?: MetadataCatalogConfig | undefined;

  /**
   * The `clientToken` parameter is an idempotency token. It ensures that your `UpdateFlow` request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same `clientToken` parameter value.
   *
   * If you omit a `clientToken` value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.
   *
   * If you specify input parameters that differ from your first request, an error occurs. If you use a different value for `clientToken`, Amazon AppFlow considers it a new call to `UpdateFlow`. The token is active for 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
  /**
   * Indicates the current status of the flow.
   *
   * @public
   */
  flowStatus?: FlowStatus | undefined;
}
