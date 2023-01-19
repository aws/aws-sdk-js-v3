// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { AppflowServiceException as __BaseException } from "./AppflowServiceException";

/**
 * <p>AppFlow/Requester has invalid or missing permissions.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

export enum AggregationType {
  NONE = "None",
  SINGLE_FILE = "SingleFile",
}

/**
 * <p> The aggregation settings that you can use to customize the output format of your flow
 *       data. </p>
 */
export interface AggregationConfig {
  /**
   * <p> Specifies whether Amazon AppFlow aggregates the flow records into a single file, or
   *       leave them unaggregated. </p>
   */
  aggregationType?: AggregationType | string;

  /**
   * <p>The desired file size, in MB, for each output file that Amazon AppFlow writes to the
   *       flow destination. For each file, Amazon AppFlow attempts to achieve the size that you
   *       specify. The actual file sizes might differ from this target based on the number and size of
   *       the records that each file contains.</p>
   */
  targetFileSize?: number;
}

export enum AmplitudeConnectorOperator {
  BETWEEN = "BETWEEN",
}

/**
 * <p> The connector-specific credentials required when using Amplitude. </p>
 */
export interface AmplitudeConnectorProfileCredentials {
  /**
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   */
  apiKey: string | undefined;

  /**
   * <p> The Secret Access Key portion of the credentials. </p>
   */
  secretKey: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Amplitude. </p>
 */
export interface AmplitudeConnectorProfileProperties {}

/**
 * <p> The connector metadata specific to Amplitude. </p>
 */
export interface AmplitudeMetadata {}

/**
 * <p> The properties that are applied when Amplitude is being used as a source. </p>
 */
export interface AmplitudeSourceProperties {
  /**
   * <p> The object specified in the Amplitude flow source. </p>
   */
  object: string | undefined;
}

/**
 * <p>The API key credentials required for API key authentication.</p>
 */
export interface ApiKeyCredentials {
  /**
   * <p>The API key required for API key authentication.</p>
   */
  apiKey: string | undefined;

  /**
   * <p>The API secret key required for API key authentication.</p>
   */
  apiSecretKey?: string;
}

/**
 * <p>Information about required authentication parameters.</p>
 */
export interface AuthParameter {
  /**
   * <p>The authentication key required to authenticate with the connector.</p>
   */
  key?: string;

  /**
   * <p>Indicates whether this authentication parameter is required.</p>
   */
  isRequired?: boolean;

  /**
   * <p>Label used for authentication parameter.</p>
   */
  label?: string;

  /**
   * <p>A description about the authentication parameter.</p>
   */
  description?: string;

  /**
   * <p>Indicates whether this authentication parameter is a sensitive field.</p>
   */
  isSensitiveField?: boolean;

  /**
   * <p>Contains default values for this authentication parameter that are supplied by the
   *       connector.</p>
   */
  connectorSuppliedValues?: string[];
}

/**
 * <p>Configuration information required for custom authentication.</p>
 */
export interface CustomAuthConfig {
  /**
   * <p>The authentication type that the custom connector uses.</p>
   */
  customAuthenticationType?: string;

  /**
   * <p>Information about authentication parameters required for authentication.</p>
   */
  authParameters?: AuthParameter[];
}

export enum OAuth2CustomPropType {
  AUTH_URL = "AUTH_URL",
  TOKEN_URL = "TOKEN_URL",
}

/**
 * <p>Custom parameter required for OAuth 2.0 authentication.</p>
 */
export interface OAuth2CustomParameter {
  /**
   * <p>The key of the custom parameter required for OAuth 2.0 authentication.</p>
   */
  key?: string;

  /**
   * <p>Indicates whether the custom parameter for OAuth 2.0 authentication is required.</p>
   */
  isRequired?: boolean;

  /**
   * <p>The label of the custom parameter used for OAuth 2.0 authentication.</p>
   */
  label?: string;

  /**
   * <p>A description about the custom parameter used for OAuth 2.0 authentication.</p>
   */
  description?: string;

  /**
   * <p>Indicates whether this authentication custom parameter is a sensitive field.</p>
   */
  isSensitiveField?: boolean;

  /**
   * <p>Contains default values for this authentication parameter that are supplied by the
   *       connector.</p>
   */
  connectorSuppliedValues?: string[];

  /**
   * <p>Indicates whether custom parameter is used with TokenUrl or AuthUrl.</p>
   */
  type?: OAuth2CustomPropType | string;
}

export enum OAuth2GrantType {
  AUTHORIZATION_CODE = "AUTHORIZATION_CODE",
  CLIENT_CREDENTIALS = "CLIENT_CREDENTIALS",
}

/**
 * <p>Contains the default values required for OAuth 2.0 authentication.</p>
 */
export interface OAuth2Defaults {
  /**
   * <p>OAuth 2.0 scopes that the connector supports.</p>
   */
  oauthScopes?: string[];

  /**
   * <p>Token URLs that can be used for OAuth 2.0 authentication.</p>
   */
  tokenUrls?: string[];

  /**
   * <p>Auth code URLs that can be used for OAuth 2.0 authentication.</p>
   */
  authCodeUrls?: string[];

  /**
   * <p>OAuth 2.0 grant types supported by the connector.</p>
   */
  oauth2GrantTypesSupported?: (OAuth2GrantType | string)[];

  /**
   * <p>List of custom parameters required for OAuth 2.0 authentication.</p>
   */
  oauth2CustomProperties?: OAuth2CustomParameter[];
}

/**
 * <p>Contains information about the authentication config that the connector supports.</p>
 */
export interface AuthenticationConfig {
  /**
   * <p>Indicates whether basic authentication is supported by the connector.</p>
   */
  isBasicAuthSupported?: boolean;

  /**
   * <p>Indicates whether API key authentication is supported by the connector</p>
   */
  isApiKeyAuthSupported?: boolean;

  /**
   * <p>Indicates whether OAuth 2.0 authentication is supported by the connector.</p>
   */
  isOAuth2Supported?: boolean;

  /**
   * <p>Indicates whether custom authentication is supported by the connector</p>
   */
  isCustomAuthSupported?: boolean;

  /**
   * <p>Contains the default values required for OAuth 2.0 authentication.</p>
   */
  oAuth2Defaults?: OAuth2Defaults;

  /**
   * <p>Contains information required for custom authentication.</p>
   */
  customAuthConfigs?: CustomAuthConfig[];
}

export enum AuthenticationType {
  APIKEY = "APIKEY",
  BASIC = "BASIC",
  CUSTOM = "CUSTOM",
  OAUTH2 = "OAUTH2",
}

/**
 * <p> The basic auth credentials required for basic authentication. </p>
 */
export interface BasicAuthCredentials {
  /**
   * <p> The username to use to connect to a resource. </p>
   */
  username: string | undefined;

  /**
   * <p> The password to use to connect to a resource.</p>
   */
  password: string | undefined;
}

export enum CatalogType {
  GLUE = "GLUE",
}

/**
 * <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

export enum ConnectionMode {
  PRIVATE = "Private",
  PUBLIC = "Public",
}

/**
 * <p> An error occurred when authenticating with the connector endpoint. </p>
 */
export class ConnectorAuthenticationException extends __BaseException {
  readonly name: "ConnectorAuthenticationException" = "ConnectorAuthenticationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConnectorAuthenticationException, __BaseException>) {
    super({
      name: "ConnectorAuthenticationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConnectorAuthenticationException.prototype);
  }
}

/**
 * <p> The connector metadata specific to Amazon Connect Customer Profiles. </p>
 */
export interface CustomerProfilesMetadata {}

/**
 * <p> The connector metadata specific to Datadog. </p>
 */
export interface DatadogMetadata {}

/**
 * <p> The connector metadata specific to Dynatrace. </p>
 */
export interface DynatraceMetadata {}

/**
 * <p> The connector metadata specific to Amazon EventBridge. </p>
 */
export interface EventBridgeMetadata {}

/**
 * <p> The connector metadata specific to Google Analytics. </p>
 */
export interface GoogleAnalyticsMetadata {
  /**
   * <p> The desired authorization scope for the Google Analytics account. </p>
   */
  oAuthScopes?: string[];
}

/**
 * <p> The connector metadata specific to Amazon Honeycode. </p>
 */
export interface HoneycodeMetadata {
  /**
   * <p> The desired authorization scope for the Amazon Honeycode account. </p>
   */
  oAuthScopes?: string[];
}

/**
 * <p> The connector metadata specific to Infor Nexus. </p>
 */
export interface InforNexusMetadata {}

/**
 * <p> The connector metadata specific to Marketo. </p>
 */
export interface MarketoMetadata {}

/**
 * <p>The connector metadata specific to Salesforce Pardot.</p>
 */
export interface PardotMetadata {}

/**
 * <p> The connector metadata specific to Amazon Redshift. </p>
 */
export interface RedshiftMetadata {}

/**
 * <p> The connector metadata specific to Amazon S3. </p>
 */
export interface S3Metadata {}

export enum SalesforceDataTransferApi {
  AUTOMATIC = "AUTOMATIC",
  BULKV2 = "BULKV2",
  REST_SYNC = "REST_SYNC",
}

/**
 * <p> The connector metadata specific to Salesforce. </p>
 */
export interface SalesforceMetadata {
  /**
   * <p> The desired authorization scope for the Salesforce account. </p>
   */
  oAuthScopes?: string[];

  /**
   * <p>The Salesforce APIs that you can have Amazon AppFlow use when your flows transfers
   *       data to or from Salesforce.</p>
   */
  dataTransferApis?: (SalesforceDataTransferApi | string)[];
}

/**
 * <p> The connector metadata specific to SAPOData. </p>
 */
export interface SAPODataMetadata {}

/**
 * <p> The connector metadata specific to ServiceNow. </p>
 */
export interface ServiceNowMetadata {}

/**
 * <p> The connector metadata specific to Singular. </p>
 */
export interface SingularMetadata {}

/**
 * <p> The connector metadata specific to Slack. </p>
 */
export interface SlackMetadata {
  /**
   * <p> The desired authorization scope for the Slack account. </p>
   */
  oAuthScopes?: string[];
}

/**
 * <p> The connector metadata specific to Snowflake. </p>
 */
export interface SnowflakeMetadata {
  /**
   * <p> Specifies the supported Amazon Web Services Regions when using Snowflake. </p>
   */
  supportedRegions?: string[];
}

/**
 * <p> The connector metadata specific to Trend Micro. </p>
 */
export interface TrendmicroMetadata {}

/**
 * <p> The connector metadata specific to Upsolver. </p>
 */
export interface UpsolverMetadata {}

/**
 * <p> The connector metadata specific to Veeva. </p>
 */
export interface VeevaMetadata {}

/**
 * <p> The connector metadata specific to Zendesk. </p>
 */
export interface ZendeskMetadata {
  /**
   * <p> The desired authorization scope for the Zendesk account. </p>
   */
  oAuthScopes?: string[];
}

/**
 * <p> A structure to specify connector-specific metadata such as <code>oAuthScopes</code>,
 *         <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. </p>
 */
export interface ConnectorMetadata {
  /**
   * <p> The connector metadata specific to Amplitude. </p>
   */
  Amplitude?: AmplitudeMetadata;

  /**
   * <p> The connector metadata specific to Datadog. </p>
   */
  Datadog?: DatadogMetadata;

  /**
   * <p> The connector metadata specific to Dynatrace. </p>
   */
  Dynatrace?: DynatraceMetadata;

  /**
   * <p> The connector metadata specific to Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsMetadata;

  /**
   * <p> The connector metadata specific to Infor Nexus. </p>
   */
  InforNexus?: InforNexusMetadata;

  /**
   * <p> The connector metadata specific to Marketo. </p>
   */
  Marketo?: MarketoMetadata;

  /**
   * <p> The connector metadata specific to Amazon Redshift. </p>
   */
  Redshift?: RedshiftMetadata;

  /**
   * <p> The connector metadata specific to Amazon S3. </p>
   */
  S3?: S3Metadata;

  /**
   * <p> The connector metadata specific to Salesforce. </p>
   */
  Salesforce?: SalesforceMetadata;

  /**
   * <p> The connector metadata specific to ServiceNow. </p>
   */
  ServiceNow?: ServiceNowMetadata;

  /**
   * <p> The connector metadata specific to Singular. </p>
   */
  Singular?: SingularMetadata;

  /**
   * <p> The connector metadata specific to Slack. </p>
   */
  Slack?: SlackMetadata;

  /**
   * <p> The connector metadata specific to Snowflake. </p>
   */
  Snowflake?: SnowflakeMetadata;

  /**
   * <p> The connector metadata specific to Trend Micro. </p>
   */
  Trendmicro?: TrendmicroMetadata;

  /**
   * <p> The connector metadata specific to Veeva. </p>
   */
  Veeva?: VeevaMetadata;

  /**
   * <p> The connector metadata specific to Zendesk. </p>
   */
  Zendesk?: ZendeskMetadata;

  /**
   * <p> The connector metadata specific to Amazon EventBridge. </p>
   */
  EventBridge?: EventBridgeMetadata;

  /**
   * <p> The connector metadata specific to Upsolver. </p>
   */
  Upsolver?: UpsolverMetadata;

  /**
   * <p> The connector metadata specific to Amazon Connect Customer Profiles. </p>
   */
  CustomerProfiles?: CustomerProfilesMetadata;

  /**
   * <p> The connector metadata specific to Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeMetadata;

  /**
   * <p> The connector metadata specific to SAPOData. </p>
   */
  SAPOData?: SAPODataMetadata;

  /**
   * <p>The connector metadata specific to Salesforce Pardot.</p>
   */
  Pardot?: PardotMetadata;
}

/**
 * <p>Contains information about the configuration of the lambda which is being registered as
 *       the connector.</p>
 */
export interface LambdaConnectorProvisioningConfig {
  /**
   * <p>Lambda ARN of the connector being registered.</p>
   */
  lambdaArn: string | undefined;
}

/**
 * <p>Contains information about the configuration of the connector being registered.</p>
 */
export interface ConnectorProvisioningConfig {
  /**
   * <p>Contains information about the configuration of the lambda which is being registered as
   *       the connector.</p>
   */
  lambda?: LambdaConnectorProvisioningConfig;
}

export enum ConnectorProvisioningType {
  LAMBDA = "LAMBDA",
}

/**
 * <p>Contains information about the connector runtime settings that are required for flow
 *       execution.</p>
 */
export interface ConnectorRuntimeSetting {
  /**
   * <p>Contains value information about the connector runtime setting.</p>
   */
  key?: string;

  /**
   * <p>Data type of the connector runtime setting.</p>
   */
  dataType?: string;

  /**
   * <p>Indicates whether this connector runtime setting is required.</p>
   */
  isRequired?: boolean;

  /**
   * <p>A label used for connector runtime setting.</p>
   */
  label?: string;

  /**
   * <p>A description about the connector runtime setting.</p>
   */
  description?: string;

  /**
   * <p>Indicates the scope of the connector runtime setting.</p>
   */
  scope?: string;

  /**
   * <p>Contains default values for the connector runtime setting that are supplied by the
   *       connector.</p>
   */
  connectorSuppliedValueOptions?: string[];
}

export enum ConnectorType {
  AMPLITUDE = "Amplitude",
  CUSTOMCONNECTOR = "CustomConnector",
  CUSTOMERPROFILES = "CustomerProfiles",
  DATADOG = "Datadog",
  DYNATRACE = "Dynatrace",
  EVENTBRIDGE = "EventBridge",
  GOOGLEANALYTICS = "Googleanalytics",
  HONEYCODE = "Honeycode",
  INFORNEXUS = "Infornexus",
  LOOKOUTMETRICS = "LookoutMetrics",
  MARKETO = "Marketo",
  PARDOT = "Pardot",
  REDSHIFT = "Redshift",
  S3 = "S3",
  SALESFORCE = "Salesforce",
  SAPODATA = "SAPOData",
  SERVICENOW = "Servicenow",
  SINGULAR = "Singular",
  SLACK = "Slack",
  SNOWFLAKE = "Snowflake",
  TRENDMICRO = "Trendmicro",
  UPSOLVER = "Upsolver",
  VEEVA = "Veeva",
  ZENDESK = "Zendesk",
}

export enum Operators {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum ScheduleFrequencyType {
  BYMINUTE = "BYMINUTE",
  DAILY = "DAILY",
  HOURLY = "HOURLY",
  MONTHLY = "MONTHLY",
  ONCE = "ONCE",
  WEEKLY = "WEEKLY",
}

export enum TriggerType {
  EVENT = "Event",
  ONDEMAND = "OnDemand",
  SCHEDULED = "Scheduled",
}

export enum WriteOperationType {
  DELETE = "DELETE",
  INSERT = "INSERT",
  UPDATE = "UPDATE",
  UPSERT = "UPSERT",
}

/**
 * <p> The configuration settings related to a given connector. </p>
 */
export interface ConnectorConfiguration {
  /**
   * <p> Specifies whether the connector can be used as a source. </p>
   */
  canUseAsSource?: boolean;

  /**
   * <p> Specifies whether the connector can be used as a destination. </p>
   */
  canUseAsDestination?: boolean;

  /**
   * <p> Lists the connectors that are available for use as destinations. </p>
   */
  supportedDestinationConnectors?: (ConnectorType | string)[];

  /**
   * <p> Specifies the supported flow frequency for that connector. </p>
   */
  supportedSchedulingFrequencies?: (ScheduleFrequencyType | string)[];

  /**
   * <p> Specifies if PrivateLink is enabled for that connector. </p>
   */
  isPrivateLinkEnabled?: boolean;

  /**
   * <p> Specifies if a PrivateLink endpoint URL is required. </p>
   */
  isPrivateLinkEndpointUrlRequired?: boolean;

  /**
   * <p> Specifies the supported trigger types for the flow. </p>
   */
  supportedTriggerTypes?: (TriggerType | string)[];

  /**
   * <p> Specifies connector-specific metadata such as <code>oAuthScopes</code>,
   *         <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. </p>
   */
  connectorMetadata?: ConnectorMetadata;

  /**
   * <p>The connector type.</p>
   */
  connectorType?: ConnectorType | string;

  /**
   * <p>The label used for registering the connector.</p>
   */
  connectorLabel?: string;

  /**
   * <p>A description about the connector.</p>
   */
  connectorDescription?: string;

  /**
   * <p>The owner who developed the connector.</p>
   */
  connectorOwner?: string;

  /**
   * <p>The connector name.</p>
   */
  connectorName?: string;

  /**
   * <p>The connector version.</p>
   */
  connectorVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the registered connector.</p>
   */
  connectorArn?: string;

  /**
   * <p>The connection modes that the connector supports.</p>
   */
  connectorModes?: string[];

  /**
   * <p>The authentication config required for the connector.</p>
   */
  authenticationConfig?: AuthenticationConfig;

  /**
   * <p>The required connector runtime settings.</p>
   */
  connectorRuntimeSettings?: ConnectorRuntimeSetting[];

  /**
   * <p>A list of API versions that are supported by the connector.</p>
   */
  supportedApiVersions?: string[];

  /**
   * <p>A list of operators supported by the connector.</p>
   */
  supportedOperators?: (Operators | string)[];

  /**
   * <p>A list of write operations supported by the connector.</p>
   */
  supportedWriteOperations?: (WriteOperationType | string)[];

  /**
   * <p>The provisioning type used to register the connector.</p>
   */
  connectorProvisioningType?: ConnectorProvisioningType | string;

  /**
   * <p>The configuration required for registering the connector.</p>
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig;

  /**
   * <p>Logo URL of the connector.</p>
   */
  logoURL?: string;

  /**
   * <p>The date on which the connector was registered.</p>
   */
  registeredAt?: Date;

  /**
   * <p>Information about who registered the connector.</p>
   */
  registeredBy?: string;
}

/**
 * <p>Information about the registered connector.</p>
 */
export interface ConnectorDetail {
  /**
   * <p>A description about the registered connector.</p>
   */
  connectorDescription?: string;

  /**
   * <p>The name of the connector.</p>
   */
  connectorName?: string;

  /**
   * <p>The owner of the connector.</p>
   */
  connectorOwner?: string;

  /**
   * <p>The connector version.</p>
   */
  connectorVersion?: string;

  /**
   * <p>The application type of the connector.</p>
   */
  applicationType?: string;

  /**
   * <p>The connector type.</p>
   */
  connectorType?: ConnectorType | string;

  /**
   * <p>A label used for the connector.</p>
   */
  connectorLabel?: string;

  /**
   * <p>The time at which the connector was registered.</p>
   */
  registeredAt?: Date;

  /**
   * <p>The user who registered the connector.</p>
   */
  registeredBy?: string;

  /**
   * <p>The provisioning type that the connector uses.</p>
   */
  connectorProvisioningType?: ConnectorProvisioningType | string;

  /**
   * <p>The connection mode that the connector supports.</p>
   */
  connectorModes?: string[];
}

/**
 * <p> The high-level entity that can be queried in Amazon AppFlow. For example, a
 *       Salesforce entity might be an <i>Account</i> or
 *       <i>Opportunity</i>, whereas a ServiceNow entity might be an
 *         <i>Incident</i>. </p>
 */
export interface ConnectorEntity {
  /**
   * <p> The name of the connector entity. </p>
   */
  name: string | undefined;

  /**
   * <p> The label applied to the connector entity. </p>
   */
  label?: string;

  /**
   * <p> Specifies whether the connector entity is a parent or a category and has more entities
   *       nested underneath it. If another call is made with <code>entitiesPath =
   *         "the_current_entity_name_with_hasNestedEntities_true"</code>, then it returns the nested
   *       entities underneath it. This provides a way to retrieve all supported entities in a recursive
   *       fashion. </p>
   */
  hasNestedEntities?: boolean;
}

/**
 * <p> The properties that can be applied to a field when connector is being used as a
 *       destination. </p>
 */
export interface DestinationFieldProperties {
  /**
   * <p> Specifies if the destination field can be created by the current user. </p>
   */
  isCreatable?: boolean;

  /**
   * <p> Specifies if the destination field can have a null value. </p>
   */
  isNullable?: boolean;

  /**
   * <p> Specifies if the flow run can either insert new rows in the destination field if they do
   *       not already exist, or update them if they do. </p>
   */
  isUpsertable?: boolean;

  /**
   * <p> Specifies whether the field can be updated during an <code>UPDATE</code> or
   *         <code>UPSERT</code> write operation. </p>
   */
  isUpdatable?: boolean;

  /**
   * <p>Specifies whether the field can use the default value during a Create operation.</p>
   */
  isDefaultedOnCreate?: boolean;

  /**
   * <p> A list of supported write operations. For each write operation listed, this field can be
   *       used in <code>idFieldNames</code> when that write operation is present as a destination
   *       option. </p>
   */
  supportedWriteOperations?: (WriteOperationType | string)[];
}

/**
 * <p> The properties that can be applied to a field when the connector is being used as a
 *       source. </p>
 */
export interface SourceFieldProperties {
  /**
   * <p> Indicates whether the field can be returned in a search result. </p>
   */
  isRetrievable?: boolean;

  /**
   * <p> Indicates if the field can be queried. </p>
   */
  isQueryable?: boolean;

  /**
   * <p>Indicates if this timestamp field can be used for incremental queries.</p>
   */
  isTimestampFieldForIncrementalQueries?: boolean;
}

/**
 * <p>The range of values that the property supports.</p>
 */
export interface Range {
  /**
   * <p>Maximum value supported by the field.</p>
   */
  maximum?: number;

  /**
   * <p>Minimum value supported by the field.</p>
   */
  minimum?: number;
}

export enum Operator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

/**
 * <p> Contains details regarding the supported field type and the operators that can be applied
 *       for filtering. </p>
 */
export interface FieldTypeDetails {
  /**
   * <p> The type of field, such as string, integer, date, and so on. </p>
   */
  fieldType: string | undefined;

  /**
   * <p> The list of operators supported by a field. </p>
   */
  filterOperators: (Operator | string)[] | undefined;

  /**
   * <p> The list of values that a field can contain. For example, a Boolean
   *         <code>fieldType</code> can have two values: "true" and "false". </p>
   */
  supportedValues?: string[];

  /**
   * <p>The regular expression pattern for the field name.</p>
   */
  valueRegexPattern?: string;

  /**
   * <p>The date format that the field supports.</p>
   */
  supportedDateFormat?: string;

  /**
   * <p>The range of values this field can hold.</p>
   */
  fieldValueRange?: Range;

  /**
   * <p>This is the allowable length range for this field's value.</p>
   */
  fieldLengthRange?: Range;
}

/**
 * <p> Contains details regarding all the supported <code>FieldTypes</code> and their
 *       corresponding <code>filterOperators</code> and <code>supportedValues</code>. </p>
 */
export interface SupportedFieldTypeDetails {
  /**
   * <p> The initial supported version for <code>fieldType</code>. If this is later changed to a
   *       different version, v2 will be introduced. </p>
   */
  v1: FieldTypeDetails | undefined;
}

/**
 * <p> Describes the data model of a connector field. For example, for an
 *         <i>account</i> entity, the fields would be <i>account name</i>,
 *         <i>account ID</i>, and so on. </p>
 */
export interface ConnectorEntityField {
  /**
   * <p> The unique identifier of the connector field. </p>
   */
  identifier: string | undefined;

  /**
   * <p>The parent identifier of the connector field.</p>
   */
  parentIdentifier?: string;

  /**
   * <p> The label applied to a connector entity field. </p>
   */
  label?: string;

  /**
   * <p>Booelan value that indicates whether this field can be used as a primary key.</p>
   */
  isPrimaryKey?: boolean;

  /**
   * <p>Default value that can be assigned to this field.</p>
   */
  defaultValue?: string;

  /**
   * <p>Booelan value that indicates whether this field is deprecated or not.</p>
   */
  isDeprecated?: boolean;

  /**
   * <p> Contains details regarding the supported <code>FieldType</code>, including the
   *       corresponding <code>filterOperators</code> and <code>supportedValues</code>. </p>
   */
  supportedFieldTypeDetails?: SupportedFieldTypeDetails;

  /**
   * <p> A description of the connector entity field. </p>
   */
  description?: string;

  /**
   * <p> The properties that can be applied to a field when the connector is being used as a
   *       source. </p>
   */
  sourceProperties?: SourceFieldProperties;

  /**
   * <p> The properties applied to a field when the connector is being used as a destination.
   *     </p>
   */
  destinationProperties?: DestinationFieldProperties;

  /**
   * <p>A map that has specific properties related to the ConnectorEntityField.</p>
   */
  customProperties?: Record<string, string>;
}

/**
 * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
 *       Google Analytics, Marketo, Zendesk, and Slack. </p>
 */
export interface ConnectorOAuthRequest {
  /**
   * <p> The code provided by the connector when it has been authenticated via the connected app.
   *     </p>
   */
  authCode?: string;

  /**
   * <p> The URL to which the authentication server redirects the browser after authorization has
   *       been granted. </p>
   */
  redirectUri?: string;
}

export enum DatadogConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum DynatraceConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum GoogleAnalyticsConnectorOperator {
  BETWEEN = "BETWEEN",
  PROJECTION = "PROJECTION",
}

export enum InforNexusConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum MarketoConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  GREATER_THAN = "GREATER_THAN",
  LESS_THAN = "LESS_THAN",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum PardotConnectorOperator {
  ADDITION = "ADDITION",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum S3ConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum SalesforceConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum SAPODataConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum ServiceNowConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum SingularConnectorOperator {
  ADDITION = "ADDITION",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum SlackConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum TrendmicroConnectorOperator {
  ADDITION = "ADDITION",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum VeevaConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum ZendeskConnectorOperator {
  ADDITION = "ADDITION",
  DIVISION = "DIVISION",
  GREATER_THAN = "GREATER_THAN",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

/**
 * <p> The operation to be performed on the provided source fields. </p>
 */
export interface ConnectorOperator {
  /**
   * <p> The operation to be performed on the provided Amplitude source fields. </p>
   */
  Amplitude?: AmplitudeConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Datadog source fields. </p>
   */
  Datadog?: DatadogConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Dynatrace source fields. </p>
   */
  Dynatrace?: DynatraceConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Google Analytics source fields. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Infor Nexus source fields. </p>
   */
  InforNexus?: InforNexusConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Marketo source fields. </p>
   */
  Marketo?: MarketoConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Amazon S3 source fields. </p>
   */
  S3?: S3ConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Salesforce source fields. </p>
   */
  Salesforce?: SalesforceConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided ServiceNow source fields. </p>
   */
  ServiceNow?: ServiceNowConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Singular source fields. </p>
   */
  Singular?: SingularConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Slack source fields. </p>
   */
  Slack?: SlackConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Trend Micro source fields. </p>
   */
  Trendmicro?: TrendmicroConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Veeva source fields. </p>
   */
  Veeva?: VeevaConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided Zendesk source fields. </p>
   */
  Zendesk?: ZendeskConnectorOperator | string;

  /**
   * <p> The operation to be performed on the provided SAPOData source fields. </p>
   */
  SAPOData?: SAPODataConnectorOperator | string;

  /**
   * <p>Operators supported by the custom connector.</p>
   */
  CustomConnector?: Operator | string;

  /**
   * <p>The operation to be performed on the provided Salesforce Pardot source fields.</p>
   */
  Pardot?: PardotConnectorOperator | string;
}

/**
 * <p>The OAuth 2.0 properties required for OAuth 2.0 authentication.</p>
 */
export interface OAuth2Properties {
  /**
   * <p>The token URL required for OAuth 2.0 authentication.</p>
   */
  tokenUrl: string | undefined;

  /**
   * <p>The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication.</p>
   */
  oAuth2GrantType: OAuth2GrantType | string | undefined;

  /**
   * <p>Associates your token URL with a map of properties that you define. Use this parameter to
   *       provide any additional details that the connector requires to authenticate your
   *       request.</p>
   */
  tokenUrlCustomProperties?: Record<string, string>;
}

/**
 * <p>The profile properties required by the custom connector.</p>
 */
export interface CustomConnectorProfileProperties {
  /**
   * <p>A map of properties that are required to create a profile for the custom connector.</p>
   */
  profileProperties?: Record<string, string>;

  /**
   * <p>The OAuth 2.0 properties required for OAuth 2.0 authentication.</p>
   */
  oAuth2Properties?: OAuth2Properties;
}

/**
 * <p> The connector-specific profile properties required by Datadog. </p>
 */
export interface DatadogConnectorProfileProperties {
  /**
   * <p> The location of the Datadog resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required by Dynatrace. </p>
 */
export interface DynatraceConnectorProfileProperties {
  /**
   * <p> The location of the Dynatrace resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required by Google Analytics. </p>
 */
export interface GoogleAnalyticsConnectorProfileProperties {}

/**
 * <p> The connector-specific properties required when using Amazon Honeycode. </p>
 */
export interface HoneycodeConnectorProfileProperties {}

/**
 * <p> The connector-specific profile properties required by Infor Nexus. </p>
 */
export interface InforNexusConnectorProfileProperties {
  /**
   * <p> The location of the Infor Nexus resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Marketo. </p>
 */
export interface MarketoConnectorProfileProperties {
  /**
   * <p> The location of the Marketo resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * <p>The connector-specific profile properties required when using Salesforce Pardot.</p>
 */
export interface PardotConnectorProfileProperties {
  /**
   * <p>The location of the Salesforce Pardot resource.</p>
   */
  instanceUrl?: string;

  /**
   * <p>Indicates whether the connector profile applies to a sandbox or production environment.</p>
   */
  isSandboxEnvironment?: boolean;

  /**
   * <p>The business unit id of Salesforce Pardot instance.</p>
   */
  businessUnitId?: string;
}

/**
 * <p> The connector-specific profile properties when using Amazon Redshift. </p>
 */
export interface RedshiftConnectorProfileProperties {
  /**
   * <p> The JDBC URL of the Amazon Redshift cluster. </p>
   */
  databaseUrl?: string;

  /**
   * <p> A name for the associated Amazon S3 bucket. </p>
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of IAM role that grants Amazon Redshift
   *       read-only access to Amazon S3. For more information, and for the polices that you
   *       attach to this role, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#redshift-access-s3">Allow Amazon Redshift to access your Amazon AppFlow data in Amazon S3</a>.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that permits Amazon AppFlow to access your Amazon Redshift database through the Data API. For more
   *       information, and for the polices that you attach to this role, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#access-redshift">Allow Amazon AppFlow to access Amazon Redshift databases with the Data
   *         API</a>.</p>
   */
  dataApiRoleArn?: string;

  /**
   * <p>Indicates whether the connector profile defines a connection to an Amazon Redshift
   *       Serverless data warehouse.</p>
   */
  isRedshiftServerless?: boolean;

  /**
   * <p>The unique ID that's assigned to an Amazon Redshift cluster.</p>
   */
  clusterIdentifier?: string;

  /**
   * <p>The name of an Amazon Redshift workgroup.</p>
   */
  workgroupName?: string;

  /**
   * <p>The name of an Amazon Redshift database.</p>
   */
  databaseName?: string;
}

/**
 * <p> The connector-specific profile properties required when using Salesforce. </p>
 */
export interface SalesforceConnectorProfileProperties {
  /**
   * <p> The location of the Salesforce resource. </p>
   */
  instanceUrl?: string;

  /**
   * <p> Indicates whether the connector profile applies to a sandbox or production environment.
   *     </p>
   */
  isSandboxEnvironment?: boolean;
}

/**
 * <p> The OAuth properties required for OAuth type authentication. </p>
 */
export interface OAuthProperties {
  /**
   * <p> The token url required to fetch access/refresh tokens using authorization code and also
   *       to refresh expired access token using refresh token.</p>
   */
  tokenUrl: string | undefined;

  /**
   * <p> The authorization code url required to redirect to SAP Login Page to fetch authorization
   *       code for OAuth type authentication. </p>
   */
  authCodeUrl: string | undefined;

  /**
   * <p> The OAuth scopes required for OAuth type authentication. </p>
   */
  oAuthScopes: string[] | undefined;
}

/**
 * <p> The connector-specific profile properties required when using SAPOData. </p>
 */
export interface SAPODataConnectorProfileProperties {
  /**
   * <p> The location of the SAPOData resource. </p>
   */
  applicationHostUrl: string | undefined;

  /**
   * <p> The application path to catalog service. </p>
   */
  applicationServicePath: string | undefined;

  /**
   * <p> The port number of the SAPOData instance. </p>
   */
  portNumber: number | undefined;

  /**
   * <p> The client number for the client creating the connection. </p>
   */
  clientNumber: string | undefined;

  /**
   * <p> The logon language of SAPOData instance. </p>
   */
  logonLanguage?: string;

  /**
   * <p> The SAPOData Private Link service name to be used for private data transfers. </p>
   */
  privateLinkServiceName?: string;

  /**
   * <p> The SAPOData OAuth properties required for OAuth type authentication. </p>
   */
  oAuthProperties?: OAuthProperties;
}

/**
 * <p> The connector-specific profile properties required when using ServiceNow. </p>
 */
export interface ServiceNowConnectorProfileProperties {
  /**
   * <p> The location of the ServiceNow resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Singular. </p>
 */
export interface SingularConnectorProfileProperties {}

/**
 * <p> The connector-specific profile properties required when using Slack. </p>
 */
export interface SlackConnectorProfileProperties {
  /**
   * <p> The location of the Slack resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Snowflake. </p>
 */
export interface SnowflakeConnectorProfileProperties {
  /**
   * <p> The name of the Snowflake warehouse. </p>
   */
  warehouse: string | undefined;

  /**
   * <p> The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: <
   *       Database>< Schema><Stage Name>. </p>
   */
  stage: string | undefined;

  /**
   * <p> The name of the Amazon S3 bucket associated with Snowflake. </p>
   */
  bucketName: string | undefined;

  /**
   * <p> The bucket path that refers to the Amazon S3 bucket associated with Snowflake.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The Snowflake Private Link service name to be used for private data transfers. </p>
   */
  privateLinkServiceName?: string;

  /**
   * <p> The name of the account. </p>
   */
  accountName?: string;

  /**
   * <p> The Amazon Web Services Region of the Snowflake account. </p>
   */
  region?: string;
}

/**
 * <p> The connector-specific profile properties required when using Trend Micro. </p>
 */
export interface TrendmicroConnectorProfileProperties {}

/**
 * <p> The connector-specific profile properties required when using Veeva. </p>
 */
export interface VeevaConnectorProfileProperties {
  /**
   * <p> The location of the Veeva resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Zendesk. </p>
 */
export interface ZendeskConnectorProfileProperties {
  /**
   * <p> The location of the Zendesk resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required by each connector. </p>
 */
export interface ConnectorProfileProperties {
  /**
   * <p> The connector-specific properties required by Amplitude. </p>
   */
  Amplitude?: AmplitudeConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Datadog. </p>
   */
  Datadog?: DatadogConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Dynatrace. </p>
   */
  Dynatrace?: DynatraceConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Infor Nexus. </p>
   */
  InforNexus?: InforNexusConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Marketo. </p>
   */
  Marketo?: MarketoConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Amazon Redshift. </p>
   */
  Redshift?: RedshiftConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Salesforce. </p>
   */
  Salesforce?: SalesforceConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by serviceNow. </p>
   */
  ServiceNow?: ServiceNowConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Singular. </p>
   */
  Singular?: SingularConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Slack. </p>
   */
  Slack?: SlackConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Snowflake. </p>
   */
  Snowflake?: SnowflakeConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Trend Micro. </p>
   */
  Trendmicro?: TrendmicroConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Veeva. </p>
   */
  Veeva?: VeevaConnectorProfileProperties;

  /**
   * <p> The connector-specific properties required by Zendesk. </p>
   */
  Zendesk?: ZendeskConnectorProfileProperties;

  /**
   * <p> The connector-specific profile properties required when using SAPOData. </p>
   */
  SAPOData?: SAPODataConnectorProfileProperties;

  /**
   * <p>The properties required by the custom connector.</p>
   */
  CustomConnector?: CustomConnectorProfileProperties;

  /**
   * <p>The connector-specific properties required by Salesforce Pardot.</p>
   */
  Pardot?: PardotConnectorProfileProperties;
}

export enum PrivateConnectionProvisioningFailureCause {
  ACCESS_DENIED = "ACCESS_DENIED",
  CONNECTOR_AUTHENTICATION = "CONNECTOR_AUTHENTICATION",
  CONNECTOR_SERVER = "CONNECTOR_SERVER",
  INTERNAL_SERVER = "INTERNAL_SERVER",
  VALIDATION = "VALIDATION",
}

export enum PrivateConnectionProvisioningStatus {
  CREATED = "CREATED",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

/**
 * <p> Specifies the private connection provisioning state. </p>
 */
export interface PrivateConnectionProvisioningState {
  /**
   * <p> Specifies the private connection provisioning status. </p>
   */
  status?: PrivateConnectionProvisioningStatus | string;

  /**
   * <p> Specifies the private connection provisioning failure reason. </p>
   */
  failureMessage?: string;

  /**
   * <p> Specifies the private connection provisioning failure cause. </p>
   */
  failureCause?: PrivateConnectionProvisioningFailureCause | string;
}

/**
 * <p> Describes an instance of a connector. This includes the provided name, credentials ARN,
 *       connection-mode, and so on. To keep the API intuitive and extensible, the fields that are
 *       common to all types of connector profiles are explicitly specified at the top level. The rest
 *       of the connector-specific properties are available via the
 *         <code>connectorProfileProperties</code> field. </p>
 */
export interface ConnectorProfile {
  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   */
  connectorProfileArn?: string;

  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType | string;

  /**
   * <p>The label for the connector profile being created.</p>
   */
  connectorLabel?: string;

  /**
   * <p> Indicates the connection mode and if it is public or private. </p>
   */
  connectionMode?: ConnectionMode | string;

  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile credentials. </p>
   */
  credentialsArn?: string;

  /**
   * <p> The connector-specific properties of the profile configuration. </p>
   */
  connectorProfileProperties?: ConnectorProfileProperties;

  /**
   * <p> Specifies when the connector profile was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> Specifies when the connector profile was last updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> Specifies the private connection provisioning state. </p>
   */
  privateConnectionProvisioningState?: PrivateConnectionProvisioningState;
}

/**
 * <p>The custom credentials required for custom authentication.</p>
 */
export interface CustomAuthCredentials {
  /**
   * <p>The custom authentication type that the connector uses.</p>
   */
  customAuthenticationType: string | undefined;

  /**
   * <p>A map that holds custom authentication credentials.</p>
   */
  credentialsMap?: Record<string, string>;
}

/**
 * <p>The OAuth 2.0 credentials required for OAuth 2.0 authentication.</p>
 */
export interface OAuth2Credentials {
  /**
   * <p>The identifier for the desired client.</p>
   */
  clientId?: string;

  /**
   * <p>The client secret used by the OAuth client to authenticate to the authorization
   *       server.</p>
   */
  clientSecret?: string;

  /**
   * <p>The access token used to access the connector on your behalf.</p>
   */
  accessToken?: string;

  /**
   * <p>The refresh token used to refresh an expired access token.</p>
   */
  refreshToken?: string;

  /**
   * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
   *       Google Analytics, Marketo, Zendesk, and Slack. </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * <p>The connector-specific profile credentials that are required when using the custom
 *       connector.</p>
 */
export interface CustomConnectorProfileCredentials {
  /**
   * <p>The authentication type that the custom connector uses for authenticating while creating a
   *       connector profile.</p>
   */
  authenticationType: AuthenticationType | string | undefined;

  /**
   * <p>The basic credentials that are required for the authentication of the user.</p>
   */
  basic?: BasicAuthCredentials;

  /**
   * <p>The OAuth 2.0 credentials required for the authentication of the user.</p>
   */
  oauth2?: OAuth2Credentials;

  /**
   * <p>The API keys required for the authentication of the user.</p>
   */
  apiKey?: ApiKeyCredentials;

  /**
   * <p>If the connector uses the custom authentication mechanism, this holds the required
   *       credentials.</p>
   */
  custom?: CustomAuthCredentials;
}

/**
 * <p> The connector-specific credentials required by Datadog. </p>
 */
export interface DatadogConnectorProfileCredentials {
  /**
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   */
  apiKey: string | undefined;

  /**
   * <p> Application keys, in conjunction with your API key, give you full access to Datadog’s
   *       programmatic API. Application keys are associated with the user account that created them. The
   *       application key is used to log all requests made to the API. </p>
   */
  applicationKey: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required by Dynatrace. </p>
 */
export interface DynatraceConnectorProfileCredentials {
  /**
   * <p> The API tokens used by Dynatrace API to authenticate various API calls. </p>
   */
  apiToken: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required by Google Analytics. </p>
 */
export interface GoogleAnalyticsConnectorProfileCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Google Analytics resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The credentials used to acquire new access tokens. This is required only for OAuth2
   *       access tokens, and is not required for OAuth1 access tokens. </p>
   */
  refreshToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * <p> The connector-specific credentials required when using Amazon Honeycode. </p>
 */
export interface HoneycodeConnectorProfileCredentials {
  /**
   * <p> The credentials used to access protected Amazon Honeycode resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The credentials used to acquire new access tokens. </p>
   */
  refreshToken?: string;

  /**
   * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
   *       Google Analytics, Marketo, Zendesk, and Slack. </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * <p> The connector-specific profile credentials required by Infor Nexus. </p>
 */
export interface InforNexusConnectorProfileCredentials {
  /**
   * <p> The Access Key portion of the credentials. </p>
   */
  accessKeyId: string | undefined;

  /**
   * <p> The identifier for the user. </p>
   */
  userId: string | undefined;

  /**
   * <p> The secret key used to sign requests. </p>
   */
  secretAccessKey: string | undefined;

  /**
   * <p> The encryption keys used to encrypt data. </p>
   */
  datakey: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required by Marketo. </p>
 */
export interface MarketoConnectorProfileCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Marketo resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * <p>The connector-specific profile credentials required when using Salesforce Pardot.</p>
 */
export interface PardotConnectorProfileCredentials {
  /**
   * <p>The credentials used to access protected Salesforce Pardot resources.</p>
   */
  accessToken?: string;

  /**
   * <p>The credentials used to acquire new access tokens.</p>
   */
  refreshToken?: string;

  /**
   * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
   *       Google Analytics, Marketo, Zendesk, and Slack. </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;

  /**
   * <p>The secret manager ARN, which contains the client ID and client secret of the connected
   *       app.</p>
   */
  clientCredentialsArn?: string;
}

/**
 * <p> The connector-specific profile credentials required when using Amazon Redshift.
 *     </p>
 */
export interface RedshiftConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   */
  username?: string;

  /**
   * <p> The password that corresponds to the user name. </p>
   */
  password?: string;
}

/**
 * <p> The connector-specific profile credentials required when using Salesforce. </p>
 */
export interface SalesforceConnectorProfileCredentials {
  /**
   * <p> The credentials used to access protected Salesforce resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The credentials used to acquire new access tokens. </p>
   */
  refreshToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;

  /**
   * <p> The secret manager ARN, which contains the client ID and client secret of the connected
   *       app. </p>
   */
  clientCredentialsArn?: string;
}

/**
 * <p> The OAuth credentials required for OAuth type authentication. </p>
 */
export interface OAuthCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * <p> The access token used to access protected SAPOData resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The refresh token used to refresh expired access token. </p>
   */
  refreshToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * <p> The connector-specific profile credentials required when using SAPOData. </p>
 */
export interface SAPODataConnectorProfileCredentials {
  /**
   * <p> The SAPOData basic authentication credentials. </p>
   */
  basicAuthCredentials?: BasicAuthCredentials;

  /**
   * <p> The SAPOData OAuth type authentication credentials. </p>
   */
  oAuthCredentials?: OAuthCredentials;
}

/**
 * <p> The connector-specific profile credentials required when using ServiceNow. </p>
 */
export interface ServiceNowConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   */
  username: string | undefined;

  /**
   * <p> The password that corresponds to the user name. </p>
   */
  password: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Singular. </p>
 */
export interface SingularConnectorProfileCredentials {
  /**
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   */
  apiKey: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Slack. </p>
 */
export interface SlackConnectorProfileCredentials {
  /**
   * <p> The identifier for the client. </p>
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Slack resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * <p> The connector-specific profile credentials required when using Snowflake. </p>
 */
export interface SnowflakeConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   */
  username: string | undefined;

  /**
   * <p> The password that corresponds to the user name. </p>
   */
  password: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Trend Micro. </p>
 */
export interface TrendmicroConnectorProfileCredentials {
  /**
   * <p> The Secret Access Key portion of the credentials. </p>
   */
  apiSecretKey: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Veeva. </p>
 */
export interface VeevaConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   */
  username: string | undefined;

  /**
   * <p> The password that corresponds to the user name. </p>
   */
  password: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Zendesk. </p>
 */
export interface ZendeskConnectorProfileCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Zendesk resources. </p>
   */
  accessToken?: string;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * <p> The connector-specific credentials required by a connector. </p>
 */
export interface ConnectorProfileCredentials {
  /**
   * <p> The connector-specific credentials required when using Amplitude. </p>
   */
  Amplitude?: AmplitudeConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Datadog. </p>
   */
  Datadog?: DatadogConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Dynatrace. </p>
   */
  Dynatrace?: DynatraceConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Infor Nexus. </p>
   */
  InforNexus?: InforNexusConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Marketo. </p>
   */
  Marketo?: MarketoConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Amazon Redshift. </p>
   */
  Redshift?: RedshiftConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Salesforce. </p>
   */
  Salesforce?: SalesforceConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using ServiceNow. </p>
   */
  ServiceNow?: ServiceNowConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Singular. </p>
   */
  Singular?: SingularConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Slack. </p>
   */
  Slack?: SlackConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Snowflake. </p>
   */
  Snowflake?: SnowflakeConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Trend Micro. </p>
   */
  Trendmicro?: TrendmicroConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Veeva. </p>
   */
  Veeva?: VeevaConnectorProfileCredentials;

  /**
   * <p> The connector-specific credentials required when using Zendesk. </p>
   */
  Zendesk?: ZendeskConnectorProfileCredentials;

  /**
   * <p> The connector-specific profile credentials required when using SAPOData. </p>
   */
  SAPOData?: SAPODataConnectorProfileCredentials;

  /**
   * <p>The connector-specific profile credentials that are required when using the custom
   *       connector.</p>
   */
  CustomConnector?: CustomConnectorProfileCredentials;

  /**
   * <p>The connector-specific credentials required when using Salesforce Pardot.</p>
   */
  Pardot?: PardotConnectorProfileCredentials;
}

/**
 * <p> Defines the connector-specific configuration and credentials for the connector profile.
 *     </p>
 */
export interface ConnectorProfileConfig {
  /**
   * <p> The connector-specific properties of the profile configuration. </p>
   */
  connectorProfileProperties: ConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific credentials required by each connector. </p>
   */
  connectorProfileCredentials?: ConnectorProfileCredentials;
}

/**
 * <p> An error occurred when retrieving data from the connector endpoint. </p>
 */
export class ConnectorServerException extends __BaseException {
  readonly name: "ConnectorServerException" = "ConnectorServerException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConnectorServerException, __BaseException>) {
    super({
      name: "ConnectorServerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConnectorServerException.prototype);
  }
}

export interface CreateConnectorProfileRequest {
  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in your Amazon Web Services account. </p>
   */
  connectorProfileName: string | undefined;

  /**
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS
   *       key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. </p>
   */
  kmsArn?: string;

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType: ConnectorType | string | undefined;

  /**
   * <p>The label of the connector. The label is unique for each
   *         <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if
   *       calling for CUSTOMCONNECTOR connector type/.</p>
   */
  connectorLabel?: string;

  /**
   * <p> Indicates the connection mode and specifies whether it is public or private. Private
   *       flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure
   *       without exposing it to the public internet. </p>
   */
  connectionMode: ConnectionMode | string | undefined;

  /**
   * <p> Defines the connector-specific configuration and credentials. </p>
   */
  connectorProfileConfig: ConnectorProfileConfig | undefined;
}

export interface CreateConnectorProfileResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   */
  connectorProfileArn?: string;
}

/**
 * <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p> The request would cause a service quota (such as the number of flows) to be exceeded.
 *     </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p> The request has invalid or missing parameters. </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p> The settings that determine how Amazon AppFlow handles an error when placing data
 *       in the destination. For example, this setting would determine if the flow should fail after
 *       one insertion error, or continue and attempt to insert every record regardless of the initial
 *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
 *     </p>
 */
export interface ErrorHandlingConfig {
  /**
   * <p> Specifies if the flow should fail after the first instance of a failure when attempting
   *       to place data in the destination. </p>
   */
  failOnFirstDestinationError?: boolean;

  /**
   * <p> Specifies the Amazon S3 bucket prefix. </p>
   */
  bucketPrefix?: string;

  /**
   * <p> Specifies the name of the Amazon S3 bucket. </p>
   */
  bucketName?: string;
}

/**
 * <p>The properties that are applied when the custom connector is being used as a
 *       destination.</p>
 */
export interface CustomConnectorDestinationProperties {
  /**
   * <p>The entity specified in the custom connector as a destination in the flow.</p>
   */
  entityName: string | undefined;

  /**
   * <p>The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the custom connector as destination.</p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;

  /**
   * <p>Specifies the type of write operation to be performed in the custom connector when it's
   *       used as destination.</p>
   */
  writeOperationType?: WriteOperationType | string;

  /**
   * <p>The name of the field that Amazon AppFlow uses as an ID when performing a write
   *       operation such as update, delete, or upsert.</p>
   */
  idFieldNames?: string[];

  /**
   * <p>The custom properties that are specific to the connector when it's used as a destination
   *       in the flow.</p>
   */
  customProperties?: Record<string, string>;
}

/**
 * <p> The properties that are applied when Amazon Connect Customer Profiles is used as a
 *       destination. </p>
 */
export interface CustomerProfilesDestinationProperties {
  /**
   * <p> The unique name of the Amazon Connect Customer Profiles domain. </p>
   */
  domainName: string | undefined;

  /**
   * <p> The object specified in the Amazon Connect Customer Profiles flow destination.
   *     </p>
   */
  objectTypeName?: string;
}

/**
 * <p> The properties that are applied when Amazon EventBridge is being used as a
 *       destination. </p>
 */
export interface EventBridgeDestinationProperties {
  /**
   * <p> The object specified in the Amazon EventBridge flow destination. </p>
   */
  object: string | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data
   *       in the destination. For example, this setting would determine if the flow should fail after
   *       one insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

/**
 * <p> The properties that are applied when Amazon Honeycode is used as a destination. </p>
 */
export interface HoneycodeDestinationProperties {
  /**
   * <p> The object specified in the Amazon Honeycode flow destination. </p>
   */
  object: string | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data
   *       in the destination. For example, this setting would determine if the flow should fail after
   *       one insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

/**
 * <p> The properties that are applied when Amazon Lookout for Metrics is used as a destination.
 *     </p>
 */
export interface LookoutMetricsDestinationProperties {}

/**
 * <p>The properties that Amazon AppFlow applies when you use Marketo as a flow
 *       destination.</p>
 */
export interface MarketoDestinationProperties {
  /**
   * <p>The object specified in the Marketo flow destination.</p>
   */
  object: string | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data
   *       in the destination. For example, this setting would determine if the flow should fail after
   *       one insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

/**
 * <p> The properties that are applied when Amazon Redshift is being used as a destination.
 *     </p>
 */
export interface RedshiftDestinationProperties {
  /**
   * <p> The object specified in the Amazon Redshift flow destination. </p>
   */
  object: string | undefined;

  /**
   * <p> The intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift. </p>
   */
  intermediateBucketName: string | undefined;

  /**
   * <p> The object key for the bucket in which Amazon AppFlow places the destination files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data
   *       in the Amazon Redshift destination. For example, this setting would determine if the flow
   *       should fail after one insertion error, or continue and attempt to insert every record
   *       regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the
   *       destination connector details. </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

export enum FileType {
  CSV = "CSV",
  JSON = "JSON",
  PARQUET = "PARQUET",
}

export enum PathPrefix {
  EXECUTION_ID = "EXECUTION_ID",
  SCHEMA_VERSION = "SCHEMA_VERSION",
}

export enum PrefixFormat {
  DAY = "DAY",
  HOUR = "HOUR",
  MINUTE = "MINUTE",
  MONTH = "MONTH",
  YEAR = "YEAR",
}

export enum PrefixType {
  FILENAME = "FILENAME",
  PATH = "PATH",
  PATH_AND_FILENAME = "PATH_AND_FILENAME",
}

/**
 * <p>Specifies elements that Amazon AppFlow includes in the file and folder names in the flow
 *       destination.</p>
 */
export interface PrefixConfig {
  /**
   * <p>Determines the format of the prefix, and whether it applies to the file name, file path,
   *       or both. </p>
   */
  prefixType?: PrefixType | string;

  /**
   * <p>Determines the level of granularity for the date and time that's included in the prefix.
   *     </p>
   */
  prefixFormat?: PrefixFormat | string;

  /**
   * <p>Specifies whether the destination file path includes either or both of the following
   *       elements:</p>
   *          <dl>
   *             <dt>EXECUTION_ID</dt>
   *             <dd>
   *                <p>The ID that Amazon AppFlow assigns to the flow run.</p>
   *             </dd>
   *             <dt>SCHEMA_VERSION</dt>
   *             <dd>
   *                <p>The version number of your data schema. Amazon AppFlow assigns this version
   *             number. The version number increases by one when you change any of the following
   *             settings in your flow configuration:</p>
   *                <ul>
   *                   <li>
   *                      <p>Source-to-destination field mappings</p>
   *                   </li>
   *                   <li>
   *                      <p>Field data types</p>
   *                   </li>
   *                   <li>
   *                      <p>Partition keys</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   */
  pathPrefixHierarchy?: (PathPrefix | string)[];
}

/**
 * <p> The configuration that determines how Amazon AppFlow should format the flow output
 *       data when Amazon S3 is used as the destination. </p>
 */
export interface S3OutputFormatConfig {
  /**
   * <p> Indicates the file type that Amazon AppFlow places in the Amazon S3
   *       bucket. </p>
   */
  fileType?: FileType | string;

  /**
   * <p> Determines the prefix that Amazon AppFlow applies to the folder name in the Amazon S3 bucket. You can name folders according to the flow frequency and date. </p>
   */
  prefixConfig?: PrefixConfig;

  /**
   * <p> The aggregation settings that you can use to customize the output format of your flow
   *       data. </p>
   */
  aggregationConfig?: AggregationConfig;

  /**
   * <p>If your file output format is Parquet, use this parameter to set whether Amazon AppFlow preserves the data types in your source data when it writes the output to Amazon S3. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code>: Amazon AppFlow preserves the data types when it writes to
   *             Amazon S3. For example, an integer or <code>1</code> in your source data is
   *           still an integer in your output.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code>: Amazon AppFlow converts all of the source data into strings
   *           when it writes to Amazon S3. For example, an integer of <code>1</code> in your
   *           source data becomes the string <code>"1"</code> in the output.</p>
   *             </li>
   *          </ul>
   */
  preserveSourceDataTyping?: boolean;
}

/**
 * <p> The properties that are applied when Amazon S3 is used as a destination. </p>
 */
export interface S3DestinationProperties {
  /**
   * <p> The Amazon S3 bucket name in which Amazon AppFlow places the transferred
   *       data. </p>
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The configuration that determines how Amazon AppFlow should format the flow output
   *       data when Amazon S3 is used as the destination. </p>
   */
  s3OutputFormatConfig?: S3OutputFormatConfig;
}

/**
 * <p> The properties that are applied when Salesforce is being used as a destination. </p>
 */
export interface SalesforceDestinationProperties {
  /**
   * <p> The object specified in the Salesforce flow destination. </p>
   */
  object: string | undefined;

  /**
   * <p> The name of the field that Amazon AppFlow uses as an ID when performing a write
   *       operation such as update or delete. </p>
   */
  idFieldNames?: string[];

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data
   *       in the Salesforce destination. For example, this setting would determine if the flow should
   *       fail after one insertion error, or continue and attempt to insert every record regardless of
   *       the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector
   *       details. </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;

  /**
   * <p> This specifies the type of write operation to be performed in Salesforce. When the value
   *       is <code>UPSERT</code>, then <code>idFieldNames</code> is required. </p>
   */
  writeOperationType?: WriteOperationType | string;

  /**
   * <p>Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers
   *       data to Salesforce.</p>
   *          <dl>
   *             <dt>AUTOMATIC</dt>
   *             <dd>
   *                <p>The default. Amazon AppFlow selects which API to use based on the number of
   *             records that your flow transfers to Salesforce. If your flow transfers fewer than 1,000
   *             records, Amazon AppFlow uses Salesforce REST API. If your flow transfers 1,000
   *             records or more, Amazon AppFlow uses Salesforce Bulk API 2.0.</p>
   *                <p>Each of these Salesforce APIs structures data differently. If Amazon AppFlow
   *             selects the API automatically, be aware that, for recurring flows, the data output might
   *             vary from one flow run to the next. For example, if a flow runs daily, it might use REST
   *             API on one day to transfer 900 records, and it might use Bulk API 2.0 on the next day to
   *             transfer 1,100 records. For each of these flow runs, the respective Salesforce API
   *             formats the data differently. Some of the differences include how dates are formatted
   *             and null values are represented. Also, Bulk API 2.0 doesn't transfer Salesforce compound
   *             fields.</p>
   *                <p>By choosing this option, you optimize flow performance for both small and large data
   *             transfers, but the tradeoff is inconsistent formatting in the output.</p>
   *             </dd>
   *             <dt>BULKV2</dt>
   *             <dd>
   *                <p>Amazon AppFlow uses only Salesforce Bulk API 2.0. This API runs asynchronous
   *             data transfers, and it's optimal for large sets of data. By choosing this option, you
   *             ensure that your flow writes consistent output, but you optimize performance only for
   *             large data transfers.</p>
   *                <p>Note that Bulk API 2.0 does not transfer Salesforce compound fields.</p>
   *             </dd>
   *             <dt>REST_SYNC</dt>
   *             <dd>
   *                <p>Amazon AppFlow uses only Salesforce REST API. By choosing this option, you
   *             ensure that your flow writes consistent output, but you decrease performance for large
   *             data transfers that are better suited for Bulk API 2.0. In some cases, if your flow
   *             attempts to transfer a vary large set of data, it might fail with a timed out
   *             error.</p>
   *             </dd>
   *          </dl>
   */
  dataTransferApi?: SalesforceDataTransferApi | string;
}

/**
 * <p>Determines how Amazon AppFlow handles the success response that it gets from the
 *       connector after placing data.</p>
 *          <p>For example, this setting would determine where to write the response from the destination
 *       connector upon a successful insert operation.</p>
 */
export interface SuccessResponseHandlingConfig {
  /**
   * <p>The Amazon S3 bucket prefix.</p>
   */
  bucketPrefix?: string;

  /**
   * <p>The name of the Amazon S3 bucket.</p>
   */
  bucketName?: string;
}

/**
 * <p>The properties that are applied when using SAPOData as a flow destination</p>
 */
export interface SAPODataDestinationProperties {
  /**
   * <p>The object path specified in the SAPOData flow destination.</p>
   */
  objectPath: string | undefined;

  /**
   * <p>Determines how Amazon AppFlow handles the success response that it gets from the
   *       connector after placing data.</p>
   *          <p>For example, this setting would determine where to write the response from a destination
   *       connector upon a successful insert operation.</p>
   */
  successResponseHandlingConfig?: SuccessResponseHandlingConfig;

  /**
   * <p> A list of field names that can be used as an ID field when performing a write operation.
   *     </p>
   */
  idFieldNames?: string[];

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data
   *       in the destination. For example, this setting would determine if the flow should fail after
   *       one insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;

  /**
   * <p> The possible write operations in the destination connector. When this value is not
   *       provided, this defaults to the <code>INSERT</code> operation. </p>
   */
  writeOperationType?: WriteOperationType | string;
}

/**
 * <p> The properties that are applied when Snowflake is being used as a destination. </p>
 */
export interface SnowflakeDestinationProperties {
  /**
   * <p> The object specified in the Snowflake flow destination. </p>
   */
  object: string | undefined;

  /**
   * <p> The intermediate bucket that Amazon AppFlow uses when moving data into Snowflake.
   *     </p>
   */
  intermediateBucketName: string | undefined;

  /**
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data
   *       in the Snowflake destination. For example, this setting would determine if the flow should
   *       fail after one insertion error, or continue and attempt to insert every record regardless of
   *       the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector
   *       details. </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

/**
 * <p> The configuration that determines how Amazon AppFlow formats the flow output data
 *       when Upsolver is used as the destination. </p>
 */
export interface UpsolverS3OutputFormatConfig {
  /**
   * <p> Indicates the file type that Amazon AppFlow places in the Upsolver Amazon S3 bucket. </p>
   */
  fileType?: FileType | string;

  /**
   * <p>Specifies elements that Amazon AppFlow includes in the file and folder names in the flow
   *       destination.</p>
   */
  prefixConfig: PrefixConfig | undefined;

  /**
   * <p> The aggregation settings that you can use to customize the output format of your flow
   *       data. </p>
   */
  aggregationConfig?: AggregationConfig;
}

/**
 * <p> The properties that are applied when Upsolver is used as a destination. </p>
 */
export interface UpsolverDestinationProperties {
  /**
   * <p> The Upsolver Amazon S3 bucket name in which Amazon AppFlow places the
   *       transferred data. </p>
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the destination Upsolver Amazon S3 bucket in which Amazon AppFlow places the files. </p>
   */
  bucketPrefix?: string;

  /**
   * <p> The configuration that determines how data is formatted when Upsolver is used as the flow
   *       destination. </p>
   */
  s3OutputFormatConfig: UpsolverS3OutputFormatConfig | undefined;
}

/**
 * <p>The properties that are applied when Zendesk is used as a destination.</p>
 */
export interface ZendeskDestinationProperties {
  /**
   * <p>The object specified in the Zendesk flow destination.</p>
   */
  object: string | undefined;

  /**
   * <p> A list of field names that can be used as an ID field when performing a write operation.
   *     </p>
   */
  idFieldNames?: string[];

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data
   *       in the destination. For example, this setting would determine if the flow should fail after
   *       one insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;

  /**
   * <p> The possible write operations in the destination connector. When this value is not
   *       provided, this defaults to the <code>INSERT</code> operation. </p>
   */
  writeOperationType?: WriteOperationType | string;
}

/**
 * <p> This stores the information that is required to query a particular connector. </p>
 */
export interface DestinationConnectorProperties {
  /**
   * <p> The properties required to query Amazon Redshift. </p>
   */
  Redshift?: RedshiftDestinationProperties;

  /**
   * <p> The properties required to query Amazon S3. </p>
   */
  S3?: S3DestinationProperties;

  /**
   * <p> The properties required to query Salesforce. </p>
   */
  Salesforce?: SalesforceDestinationProperties;

  /**
   * <p> The properties required to query Snowflake. </p>
   */
  Snowflake?: SnowflakeDestinationProperties;

  /**
   * <p> The properties required to query Amazon EventBridge. </p>
   */
  EventBridge?: EventBridgeDestinationProperties;

  /**
   * <p> The properties required to query Amazon Lookout for Metrics. </p>
   */
  LookoutMetrics?: LookoutMetricsDestinationProperties;

  /**
   * <p> The properties required to query Upsolver. </p>
   */
  Upsolver?: UpsolverDestinationProperties;

  /**
   * <p> The properties required to query Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeDestinationProperties;

  /**
   * <p> The properties required to query Amazon Connect Customer Profiles. </p>
   */
  CustomerProfiles?: CustomerProfilesDestinationProperties;

  /**
   * <p>The properties required to query Zendesk.</p>
   */
  Zendesk?: ZendeskDestinationProperties;

  /**
   * <p>The properties required to query Marketo.</p>
   */
  Marketo?: MarketoDestinationProperties;

  /**
   * <p>The properties that are required to query the custom Connector.</p>
   */
  CustomConnector?: CustomConnectorDestinationProperties;

  /**
   * <p>The properties required to query SAPOData.</p>
   */
  SAPOData?: SAPODataDestinationProperties;
}

/**
 * <p> Contains information about the configuration of destination connectors present in the
 *       flow. </p>
 */
export interface DestinationFlowConfig {
  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType: ConnectorType | string | undefined;

  /**
   * <p>The API version that the destination connector uses.</p>
   */
  apiVersion?: string;

  /**
   * <p> The name of the connector profile. This name must be unique for each connector profile in
   *       the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;

  /**
   * <p> This stores the information that is required to query a particular connector. </p>
   */
  destinationConnectorProperties: DestinationConnectorProperties | undefined;
}

/**
 * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data with
 *       the Glue Data Catalog. When Amazon AppFlow catalogs your data, it stores
 *       metadata in Data Catalog tables. This metadata represents the data that's transferred
 *       by the flow that you configure with these settings.</p>
 *          <note>
 *             <p>You can configure a flow with these settings only when the flow destination is Amazon S3.</p>
 *          </note>
 */
export interface GlueDataCatalogConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants Amazon AppFlow the permissions it needs to create Data Catalog tables, databases, and
   *       partitions.</p>
   *          <p>For an example IAM policy that has the required permissions, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_id-based-policy-examples.html">Identity-based
   *         policy examples for Amazon AppFlow</a>.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the Data Catalog database that stores the metadata tables that
   *         Amazon AppFlow creates in your Amazon Web Services account. These tables contain
   *       metadata for the data that's transferred by the flow that you configure with this
   *       parameter.</p>
   *          <note>
   *             <p>When you configure a new flow with this parameter, you must specify an existing
   *         database.</p>
   *          </note>
   */
  databaseName: string | undefined;

  /**
   * <p>A naming prefix for each Data Catalog table that Amazon AppFlow creates for
   *       the flow that you configure with this setting. Amazon AppFlow adds the prefix to the
   *       beginning of the each table name.</p>
   */
  tablePrefix: string | undefined;
}

/**
 * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data.
 *       When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.</p>
 */
export interface MetadataCatalogConfig {
  /**
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data with
   *       the Glue Data Catalog.</p>
   */
  glueDataCatalog?: GlueDataCatalogConfig;
}

/**
 * <p> Specifies the configuration used when importing incremental records from the source.
 *     </p>
 */
export interface IncrementalPullConfig {
  /**
   * <p> A field that specifies the date time or timestamp field as the criteria to use when
   *       importing incremental records from the source. </p>
   */
  datetimeTypeFieldName?: string;
}

/**
 * <p>The properties that are applied when the custom connector is being used as a
 *       source.</p>
 */
export interface CustomConnectorSourceProperties {
  /**
   * <p>The entity specified in the custom connector as a source in the flow.</p>
   */
  entityName: string | undefined;

  /**
   * <p>Custom properties that are required to use the custom connector as a source.</p>
   */
  customProperties?: Record<string, string>;
}

/**
 * <p> The properties that are applied when Datadog is being used as a source. </p>
 */
export interface DatadogSourceProperties {
  /**
   * <p> The object specified in the Datadog flow source. </p>
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Dynatrace is being used as a source. </p>
 */
export interface DynatraceSourceProperties {
  /**
   * <p> The object specified in the Dynatrace flow source. </p>
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Google Analytics is being used as a source. </p>
 */
export interface GoogleAnalyticsSourceProperties {
  /**
   * <p> The object specified in the Google Analytics flow source. </p>
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Infor Nexus is being used as a source. </p>
 */
export interface InforNexusSourceProperties {
  /**
   * <p> The object specified in the Infor Nexus flow source. </p>
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Marketo is being used as a source. </p>
 */
export interface MarketoSourceProperties {
  /**
   * <p> The object specified in the Marketo flow source. </p>
   */
  object: string | undefined;
}

/**
 * <p>The properties that are applied when Salesforce Pardot is being used as a source.</p>
 */
export interface PardotSourceProperties {
  /**
   * <p>The object specified in the Salesforce Pardot flow source.</p>
   */
  object: string | undefined;
}

export enum S3InputFileType {
  CSV = "CSV",
  JSON = "JSON",
}

/**
 * <p> When you use Amazon S3 as the source, the configuration format that you provide
 *       the flow input data. </p>
 */
export interface S3InputFormatConfig {
  /**
   * <p> The file type that Amazon AppFlow gets from your Amazon S3 bucket. </p>
   */
  s3InputFileType?: S3InputFileType | string;
}

/**
 * <p> The properties that are applied when Amazon S3 is being used as the flow source.
 *     </p>
 */
export interface S3SourceProperties {
  /**
   * <p> The Amazon S3 bucket name where the source files are stored. </p>
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the Amazon S3 bucket in which the source files are stored.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * <p> When you use Amazon S3 as the source, the configuration format that you provide
   *       the flow input data. </p>
   */
  s3InputFormatConfig?: S3InputFormatConfig;
}

/**
 * <p> The properties that are applied when Salesforce is being used as a source. </p>
 */
export interface SalesforceSourceProperties {
  /**
   * <p> The object specified in the Salesforce flow source. </p>
   */
  object: string | undefined;

  /**
   * <p> The flag that enables dynamic fetching of new (recently added) fields in the Salesforce
   *       objects while running a flow. </p>
   */
  enableDynamicFieldUpdate?: boolean;

  /**
   * <p> Indicates whether Amazon AppFlow includes deleted files in the flow run. </p>
   */
  includeDeletedRecords?: boolean;

  /**
   * <p>Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers
   *       data from Salesforce.</p>
   *          <dl>
   *             <dt>AUTOMATIC</dt>
   *             <dd>
   *                <p>The default. Amazon AppFlow selects which API to use based on the number of
   *             records that your flow transfers from Salesforce. If your flow transfers fewer than
   *             1,000,000 records, Amazon AppFlow uses Salesforce REST API. If your flow transfers
   *             1,000,000 records or more, Amazon AppFlow uses Salesforce Bulk API 2.0.</p>
   *                <p>Each of these Salesforce APIs structures data differently. If Amazon AppFlow
   *             selects the API automatically, be aware that, for recurring flows, the data output might
   *             vary from one flow run to the next. For example, if a flow runs daily, it might use REST
   *             API on one day to transfer 900,000 records, and it might use Bulk API 2.0 on the next
   *             day to transfer 1,100,000 records. For each of these flow runs, the respective
   *             Salesforce API formats the data differently. Some of the differences include how dates
   *             are formatted and null values are represented. Also, Bulk API 2.0 doesn't transfer
   *             Salesforce compound fields.</p>
   *                <p>By choosing this option, you optimize flow performance for both small and large data
   *             transfers, but the tradeoff is inconsistent formatting in the output.</p>
   *             </dd>
   *             <dt>BULKV2</dt>
   *             <dd>
   *                <p>Amazon AppFlow uses only Salesforce Bulk API 2.0. This API runs asynchronous
   *             data transfers, and it's optimal for large sets of data. By choosing this option, you
   *             ensure that your flow writes consistent output, but you optimize performance only for
   *             large data transfers.</p>
   *                <p>Note that Bulk API 2.0 does not transfer Salesforce compound fields.</p>
   *             </dd>
   *             <dt>REST_SYNC</dt>
   *             <dd>
   *                <p>Amazon AppFlow uses only Salesforce REST API. By choosing this option, you
   *             ensure that your flow writes consistent output, but you decrease performance for large
   *             data transfers that are better suited for Bulk API 2.0. In some cases, if your flow
   *             attempts to transfer a vary large set of data, it might fail wituh a timed out
   *             error.</p>
   *             </dd>
   *          </dl>
   */
  dataTransferApi?: SalesforceDataTransferApi | string;
}

/**
 * <p> The properties that are applied when using SAPOData as a flow source. </p>
 */
export interface SAPODataSourceProperties {
  /**
   * <p> The object path specified in the SAPOData flow source. </p>
   */
  objectPath?: string;
}

/**
 * <p> The properties that are applied when ServiceNow is being used as a source. </p>
 */
export interface ServiceNowSourceProperties {
  /**
   * <p> The object specified in the ServiceNow flow source. </p>
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Singular is being used as a source. </p>
 */
export interface SingularSourceProperties {
  /**
   * <p> The object specified in the Singular flow source. </p>
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Slack is being used as a source. </p>
 */
export interface SlackSourceProperties {
  /**
   * <p> The object specified in the Slack flow source. </p>
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when using Trend Micro as a flow source. </p>
 */
export interface TrendmicroSourceProperties {
  /**
   * <p> The object specified in the Trend Micro flow source. </p>
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when using Veeva as a flow source. </p>
 */
export interface VeevaSourceProperties {
  /**
   * <p> The object specified in the Veeva flow source. </p>
   */
  object: string | undefined;

  /**
   * <p>The document type specified in the Veeva document extract flow.</p>
   */
  documentType?: string;

  /**
   * <p>Boolean value to include source files in Veeva document extract flow.</p>
   */
  includeSourceFiles?: boolean;

  /**
   * <p>Boolean value to include file renditions in Veeva document extract flow.</p>
   */
  includeRenditions?: boolean;

  /**
   * <p>Boolean value to include All Versions of files in Veeva document extract flow.</p>
   */
  includeAllVersions?: boolean;
}

/**
 * <p> The properties that are applied when using Zendesk as a flow source. </p>
 */
export interface ZendeskSourceProperties {
  /**
   * <p> The object specified in the Zendesk flow source. </p>
   */
  object: string | undefined;
}

/**
 * <p> Specifies the information that is required to query a particular connector. </p>
 */
export interface SourceConnectorProperties {
  /**
   * <p> Specifies the information that is required for querying Amplitude. </p>
   */
  Amplitude?: AmplitudeSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Datadog. </p>
   */
  Datadog?: DatadogSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Dynatrace. </p>
   */
  Dynatrace?: DynatraceSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Infor Nexus. </p>
   */
  InforNexus?: InforNexusSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Marketo. </p>
   */
  Marketo?: MarketoSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Amazon S3. </p>
   */
  S3?: S3SourceProperties;

  /**
   * <p> Specifies the information that is required for querying Salesforce. </p>
   */
  Salesforce?: SalesforceSourceProperties;

  /**
   * <p> Specifies the information that is required for querying ServiceNow. </p>
   */
  ServiceNow?: ServiceNowSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Singular. </p>
   */
  Singular?: SingularSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Slack. </p>
   */
  Slack?: SlackSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Trend Micro. </p>
   */
  Trendmicro?: TrendmicroSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Veeva. </p>
   */
  Veeva?: VeevaSourceProperties;

  /**
   * <p> Specifies the information that is required for querying Zendesk. </p>
   */
  Zendesk?: ZendeskSourceProperties;

  /**
   * <p> The properties that are applied when using SAPOData as a flow source. </p>
   */
  SAPOData?: SAPODataSourceProperties;

  /**
   * <p>The properties that are applied when the custom connector is being used as a
   *       source.</p>
   */
  CustomConnector?: CustomConnectorSourceProperties;

  /**
   * <p>Specifies the information that is required for querying Salesforce Pardot.</p>
   */
  Pardot?: PardotSourceProperties;
}

/**
 * <p> Contains information about the configuration of the source connector used in the flow.
 *     </p>
 */
export interface SourceFlowConfig {
  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType: ConnectorType | string | undefined;

  /**
   * <p>The API version of the connector when it's used as a source in the flow.</p>
   */
  apiVersion?: string;

  /**
   * <p> The name of the connector profile. This name must be unique for each connector profile in
   *       the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;

  /**
   * <p> Specifies the information that is required to query a particular source connector.
   *     </p>
   */
  sourceConnectorProperties: SourceConnectorProperties | undefined;

  /**
   * <p> Defines the configuration for a scheduled incremental data pull. If a valid configuration
   *       is provided, the fields specified in the configuration are used when querying for the
   *       incremental data pull. </p>
   */
  incrementalPullConfig?: IncrementalPullConfig;
}

export enum OperatorPropertiesKeys {
  CONCAT_FORMAT = "CONCAT_FORMAT",
  DATA_TYPE = "DATA_TYPE",
  DESTINATION_DATA_TYPE = "DESTINATION_DATA_TYPE",
  EXCLUDE_SOURCE_FIELDS_LIST = "EXCLUDE_SOURCE_FIELDS_LIST",
  INCLUDE_NEW_FIELDS = "INCLUDE_NEW_FIELDS",
  LOWER_BOUND = "LOWER_BOUND",
  MASK_LENGTH = "MASK_LENGTH",
  MASK_VALUE = "MASK_VALUE",
  MATH_OPERATION_FIELDS_ORDER = "MATH_OPERATION_FIELDS_ORDER",
  ORDERED_PARTITION_KEYS_LIST = "ORDERED_PARTITION_KEYS_LIST",
  SOURCE_DATA_TYPE = "SOURCE_DATA_TYPE",
  SUBFIELD_CATEGORY_MAP = "SUBFIELD_CATEGORY_MAP",
  TRUNCATE_LENGTH = "TRUNCATE_LENGTH",
  UPPER_BOUND = "UPPER_BOUND",
  VALIDATION_ACTION = "VALIDATION_ACTION",
  VALUE = "VALUE",
  VALUES = "VALUES",
}

export enum TaskType {
  ARITHMETIC = "Arithmetic",
  FILTER = "Filter",
  MAP = "Map",
  MAP_ALL = "Map_all",
  MASK = "Mask",
  MERGE = "Merge",
  PARTITION = "Partition",
  PASSTHROUGH = "Passthrough",
  TRUNCATE = "Truncate",
  VALIDATE = "Validate",
}

/**
 * <p> A class for modeling different type of tasks. Task implementation varies based on the
 *         <code>TaskType</code>. </p>
 */
export interface Task {
  /**
   * <p> The source fields to which a particular task is applied. </p>
   */
  sourceFields: string[] | undefined;

  /**
   * <p> The operation to be performed on the provided source fields. </p>
   */
  connectorOperator?: ConnectorOperator;

  /**
   * <p> A field in a destination connector, or a field value against which Amazon AppFlow
   *       validates a source field. </p>
   */
  destinationField?: string;

  /**
   * <p> Specifies the particular task implementation that Amazon AppFlow performs. </p>
   */
  taskType: TaskType | string | undefined;

  /**
   * <p> A map used to store task-related information. The execution service looks for particular
   *       information based on the <code>TaskType</code>. </p>
   */
  taskProperties?: Record<string, string>;
}

export enum DataPullMode {
  COMPLETE = "Complete",
  INCREMENTAL = "Incremental",
}

/**
 * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
 *       Currently, these settings only apply to the <code>Scheduled</code> trigger type. </p>
 */
export interface ScheduledTriggerProperties {
  /**
   * <p> The scheduling expression that determines the rate at which the schedule will run, for
   *       example <code>rate(5minutes)</code>. </p>
   */
  scheduleExpression: string | undefined;

  /**
   * <p> Specifies whether a scheduled flow has an incremental data transfer or a complete data
   *       transfer for each flow run. </p>
   */
  dataPullMode?: DataPullMode | string;

  /**
   * <p>The time at which the scheduled flow starts. The time is formatted as a timestamp that
   *       follows the ISO 8601 standard, such as <code>2022-04-26T13:00:00-07:00</code>.</p>
   */
  scheduleStartTime?: Date;

  /**
   * <p>The time at which the scheduled flow ends. The time is formatted as a timestamp that
   *       follows the ISO 8601 standard, such as <code>2022-04-27T13:00:00-07:00</code>.</p>
   */
  scheduleEndTime?: Date;

  /**
   * <p>Specifies the time zone used when referring to the dates and times of a scheduled flow,
   *       such as <code>America/New_York</code>. This time zone is only a descriptive label. It doesn't
   *       affect how Amazon AppFlow interprets the timestamps that you specify to schedule the
   *       flow.</p>
   *          <p>If you want to schedule a flow by using times in a particular time zone, indicate the time
   *       zone as a UTC offset in your timestamps. For example, the UTC offsets for the
   *         <code>America/New_York</code> timezone are <code>-04:00</code> EDT and <code>-05:00
   *         EST</code>.</p>
   */
  timezone?: string;

  /**
   * <p> Specifies the optional offset that is added to the time interval for a schedule-triggered
   *       flow. </p>
   */
  scheduleOffset?: number;

  /**
   * <p> Specifies the date range for the records to import from the connector in the first flow
   *       run. </p>
   */
  firstExecutionFrom?: Date;

  /**
   * <p>Defines how many times a scheduled flow fails consecutively before Amazon AppFlow
   *       deactivates it.</p>
   */
  flowErrorDeactivationThreshold?: number;
}

/**
 * <p> Specifies the configuration details that control the trigger for a flow. Currently, these
 *       settings only apply to the <code>Scheduled</code> trigger type. </p>
 */
export interface TriggerProperties {
  /**
   * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
   *     </p>
   */
  Scheduled?: ScheduledTriggerProperties;
}

/**
 * <p> The trigger settings that determine how and when Amazon AppFlow runs the specified
 *       flow. </p>
 */
export interface TriggerConfig {
  /**
   * <p> Specifies the type of flow trigger. This can be <code>OnDemand</code>,
   *         <code>Scheduled</code>, or <code>Event</code>. </p>
   */
  triggerType: TriggerType | string | undefined;

  /**
   * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
   *       Currently, these settings only apply to the <code>Scheduled</code> trigger type. </p>
   */
  triggerProperties?: TriggerProperties;
}

export interface CreateFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * <p> A description of the flow you want to create. </p>
   */
  description?: string;

  /**
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS
   *       key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. </p>
   */
  kmsArn?: string;

  /**
   * <p> The trigger settings that determine how and when the flow runs. </p>
   */
  triggerConfig: TriggerConfig | undefined;

  /**
   * <p> The configuration that controls how Amazon AppFlow retrieves data from the source
   *       connector. </p>
   */
  sourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * <p> The configuration that controls how Amazon AppFlow places data in the destination
   *       connector. </p>
   */
  destinationFlowConfigList: DestinationFlowConfig[] | undefined;

  /**
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the
   *       flow run. </p>
   */
  tasks: Task[] | undefined;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs the data
   *       that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a
   *       flow, it stores metadata in a data catalog.</p>
   */
  metadataCatalogConfig?: MetadataCatalogConfig;
}

export enum FlowStatus {
  ACTIVE = "Active",
  DELETED = "Deleted",
  DEPRECATED = "Deprecated",
  DRAFT = "Draft",
  ERRORED = "Errored",
  SUSPENDED = "Suspended",
}

export interface CreateFlowResponse {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;
}

/**
 * <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

export interface DeleteConnectorProfileRequest {
  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in your account. </p>
   */
  connectorProfileName: string | undefined;

  /**
   * <p> Indicates whether Amazon AppFlow should delete the profile, even if it is currently
   *       in use in one or more flows. </p>
   */
  forceDelete?: boolean;
}

export interface DeleteConnectorProfileResponse {}

export interface DeleteFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * <p> Indicates whether Amazon AppFlow should delete the flow, even if it is currently in
   *       use. </p>
   */
  forceDelete?: boolean;
}

export interface DeleteFlowResponse {}

export interface DescribeConnectorRequest {
  /**
   * <p>The connector type, such as CUSTOMCONNECTOR, Saleforce, Marketo. Please choose
   *       CUSTOMCONNECTOR for Lambda based custom connectors.</p>
   */
  connectorType: ConnectorType | string | undefined;

  /**
   * <p>The label of the connector. The label is unique for each
   *         <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if
   *       calling for CUSTOMCONNECTOR connector type/.</p>
   */
  connectorLabel?: string;
}

export interface DescribeConnectorResponse {
  /**
   * <p>Configuration info of all the connectors that the user requested.</p>
   */
  connectorConfiguration?: ConnectorConfiguration;
}

export interface DescribeConnectorEntityRequest {
  /**
   * <p> The entity name for that connector. </p>
   */
  connectorEntityName: string | undefined;

  /**
   * <p> The type of connector application, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType | string;

  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;

  /**
   * <p>The version of the API that's used by the connector.</p>
   */
  apiVersion?: string;
}

export interface DescribeConnectorEntityResponse {
  /**
   * <p> Describes the fields for that connector entity. For example, for an
   *         <i>account</i> entity, the fields would be <i>account name</i>,
   *         <i>account ID</i>, and so on. </p>
   */
  connectorEntityFields: ConnectorEntityField[] | undefined;
}

export interface DescribeConnectorProfilesRequest {
  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   */
  connectorProfileNames?: string[];

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType | string;

  /**
   * <p>The name of the connector. The name is unique for each <code>ConnectorRegistration</code>
   *       in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector
   *       type/.</p>
   */
  connectorLabel?: string;

  /**
   * <p> Specifies the maximum number of items that should be returned in the result set. The
   *       default for <code>maxResults</code> is 20 (for all paginated API operations). </p>
   */
  maxResults?: number;

  /**
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

export interface DescribeConnectorProfilesResponse {
  /**
   * <p> Returns information about the connector profiles associated with the flow. </p>
   */
  connectorProfileDetails?: ConnectorProfile[];

  /**
   * <p> The pagination token for the next page of data. If <code>nextToken=null</code>, this
   *       means that all records have been fetched. </p>
   */
  nextToken?: string;
}

export interface DescribeConnectorsRequest {
  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorTypes?: (ConnectorType | string)[];

  /**
   * <p>The maximum number of items that should be returned in the result set. The default is
   *       20.</p>
   */
  maxResults?: number;

  /**
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

export interface DescribeConnectorsResponse {
  /**
   * <p> The configuration that is applied to the connectors used in the flow. </p>
   */
  connectorConfigurations?: Record<string, ConnectorConfiguration>;

  /**
   * <p>Information about the connectors supported in Amazon AppFlow.</p>
   */
  connectors?: ConnectorDetail[];

  /**
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

export interface DescribeFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;
}

export enum ExecutionStatus {
  ERROR = "Error",
  INPROGRESS = "InProgress",
  SUCCESSFUL = "Successful",
}

/**
 * <p> Describes the details of the flow run, including the timestamp, status, and message.
 *     </p>
 */
export interface ExecutionDetails {
  /**
   * <p> Describes the details of the most recent flow run. </p>
   */
  mostRecentExecutionMessage?: string;

  /**
   * <p> Specifies the time of the most recent flow run. </p>
   */
  mostRecentExecutionTime?: Date;

  /**
   * <p> Specifies the status of the most recent flow run. </p>
   */
  mostRecentExecutionStatus?: ExecutionStatus | string;
}

/**
 * <p>Describes the status of an attempt from Amazon AppFlow to register a
 *       resource.</p>
 *          <p>When you run a flow that you've configured to use a metadata catalog, Amazon AppFlow
 *       registers a metadata table and data partitions with that catalog. This operation provides the
 *       status of that registration attempt. The operation also indicates how many related resources
 *         Amazon AppFlow created or updated.</p>
 */
export interface RegistrationOutput {
  /**
   * <p>Explains the status of the registration attempt from Amazon AppFlow. If the attempt
   *       fails, the message explains why.</p>
   */
  message?: string;

  /**
   * <p>Indicates the number of resources that Amazon AppFlow created or updated. Possible
   *       resources include metadata tables and data partitions.</p>
   */
  result?: string;

  /**
   * <p>Indicates the status of the registration attempt from Amazon AppFlow.</p>
   */
  status?: ExecutionStatus | string;
}

/**
 * <p>Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.</p>
 */
export interface MetadataCatalogDetail {
  /**
   * <p>The type of metadata catalog that Amazon AppFlow used for the associated flow run.
   *       This parameter returns the following value:</p>
   *          <dl>
   *             <dt>GLUE</dt>
   *             <dd>
   *                <p>The metadata catalog is provided by the Glue Data Catalog. Glue includes the Glue Data Catalog as a component.</p>
   *             </dd>
   *          </dl>
   */
  catalogType?: CatalogType | string;

  /**
   * <p>The name of the table that stores the metadata for the associated flow run. The table
   *       stores metadata that represents the data that the flow transferred. Amazon AppFlow
   *       stores the table in the metadata catalog.</p>
   */
  tableName?: string;

  /**
   * <p>Describes the status of the attempt from Amazon AppFlow to register the metadata
   *       table with the metadata catalog. Amazon AppFlow creates or updates this table for the
   *       associated flow run.</p>
   */
  tableRegistrationOutput?: RegistrationOutput;

  /**
   * <p>Describes the status of the attempt from Amazon AppFlow to register the data
   *       partitions with the metadata catalog. The data partitions organize the flow output into a
   *       hierarchical path, such as a folder path in an S3 bucket. Amazon AppFlow creates the
   *       partitions (if they don't already exist) based on your flow configuration.</p>
   */
  partitionRegistrationOutput?: RegistrationOutput;
}

export interface DescribeFlowResponse {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * <p> A description of the flow. </p>
   */
  description?: string;

  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName?: string;

  /**
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS
   *       key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. </p>
   */
  kmsArn?: string;

  /**
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;

  /**
   * <p> Contains an error message if the flow status is in a suspended or error state. This
   *       applies only to scheduled or event-triggered flows. </p>
   */
  flowStatusMessage?: string;

  /**
   * <p> The configuration that controls how Amazon AppFlow retrieves data from the source
   *       connector. </p>
   */
  sourceFlowConfig?: SourceFlowConfig;

  /**
   * <p> The configuration that controls how Amazon AppFlow transfers data to the
   *       destination connector. </p>
   */
  destinationFlowConfigList?: DestinationFlowConfig[];

  /**
   * <p> Describes the details of the most recent flow run. </p>
   */
  lastRunExecutionDetails?: ExecutionDetails;

  /**
   * <p> The trigger settings that determine how and when the flow runs. </p>
   */
  triggerConfig?: TriggerConfig;

  /**
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the
   *       flow run. </p>
   */
  tasks?: Task[];

  /**
   * <p> Specifies when the flow was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> Specifies when the flow was last updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> The ARN of the user who created the flow. </p>
   */
  createdBy?: string;

  /**
   * <p> Specifies the user name of the account that performed the most recent update. </p>
   */
  lastUpdatedBy?: string;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs the data
   *       that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a
   *       flow, it stores metadata in a data catalog.</p>
   */
  metadataCatalogConfig?: MetadataCatalogConfig;

  /**
   * <p>Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.</p>
   */
  lastRunMetadataCatalogDetails?: MetadataCatalogDetail[];

  /**
   * <p>The version number of your data schema. Amazon AppFlow assigns this version number.
   *       The version number increases by one when you change any of the following settings in your flow
   *       configuration:</p>
   *          <ul>
   *             <li>
   *                <p>Source-to-destination field mappings</p>
   *             </li>
   *             <li>
   *                <p>Field data types</p>
   *             </li>
   *             <li>
   *                <p>Partition keys</p>
   *             </li>
   *          </ul>
   */
  schemaVersion?: number;
}

export interface DescribeFlowExecutionRecordsRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * <p> Specifies the maximum number of items that should be returned in the result set. The
   *       default for <code>maxResults</code> is 20 (for all paginated API operations). </p>
   */
  maxResults?: number;

  /**
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

/**
 * <p> Provides details in the event of a failed flow, including the failure count and the
 *       related error messages. </p>
 */
export interface ErrorInfo {
  /**
   * <p> Specifies the failure count for the attempted flow. </p>
   */
  putFailuresCount?: number;

  /**
   * <p> Specifies the error message that appears if a flow fails. </p>
   */
  executionMessage?: string;
}

/**
 * <p> Specifies the end result of the flow run. </p>
 */
export interface ExecutionResult {
  /**
   * <p> Provides any error message information related to the flow run. </p>
   */
  errorInfo?: ErrorInfo;

  /**
   * <p> The total number of bytes processed by the flow run. </p>
   */
  bytesProcessed?: number;

  /**
   * <p> The total number of bytes written as a result of the flow run. </p>
   */
  bytesWritten?: number;

  /**
   * <p> The number of records processed in the flow run. </p>
   */
  recordsProcessed?: number;
}

/**
 * <p> Specifies information about the past flow run instances for a given flow. </p>
 */
export interface ExecutionRecord {
  /**
   * <p> Specifies the identifier of the given flow run. </p>
   */
  executionId?: string;

  /**
   * <p> Specifies the flow run status and whether it is in progress, has completed successfully,
   *       or has failed. </p>
   */
  executionStatus?: ExecutionStatus | string;

  /**
   * <p> Describes the result of the given flow run. </p>
   */
  executionResult?: ExecutionResult;

  /**
   * <p> Specifies the start time of the flow run. </p>
   */
  startedAt?: Date;

  /**
   * <p> Specifies the time of the most recent update. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> The timestamp that determines the first new or updated record to be transferred in the
   *       flow run. </p>
   */
  dataPullStartTime?: Date;

  /**
   * <p> The timestamp that indicates the last new or updated record to be transferred in the flow
   *       run. </p>
   */
  dataPullEndTime?: Date;

  /**
   * <p>Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.</p>
   */
  metadataCatalogDetails?: MetadataCatalogDetail[];
}

export interface DescribeFlowExecutionRecordsResponse {
  /**
   * <p> Returns a list of all instances when this flow was run. </p>
   */
  flowExecutions?: ExecutionRecord[];

  /**
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

/**
 * <p> The properties of the flow, such as its source, destination, trigger type, and so on.
 *     </p>
 */
export interface FlowDefinition {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * <p> A user-entered description of the flow. </p>
   */
  description?: string;

  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName?: string;

  /**
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;

  /**
   * <p> Specifies the source connector type, such as Salesforce, Amazon S3, Amplitude,
   *       and so on. </p>
   */
  sourceConnectorType?: ConnectorType | string;

  /**
   * <p>The label of the source connector in the flow.</p>
   */
  sourceConnectorLabel?: string;

  /**
   * <p> Specifies the destination connector type, such as Salesforce, Amazon S3,
   *       Amplitude, and so on. </p>
   */
  destinationConnectorType?: ConnectorType | string;

  /**
   * <p>The label of the destination connector in the flow.</p>
   */
  destinationConnectorLabel?: string;

  /**
   * <p> Specifies the type of flow trigger. This can be <code>OnDemand</code>,
   *         <code>Scheduled</code>, or <code>Event</code>. </p>
   */
  triggerType?: TriggerType | string;

  /**
   * <p> Specifies when the flow was created. </p>
   */
  createdAt?: Date;

  /**
   * <p> Specifies when the flow was last updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> The ARN of the user who created the flow. </p>
   */
  createdBy?: string;

  /**
   * <p> Specifies the account user name that most recently updated the flow. </p>
   */
  lastUpdatedBy?: string;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: Record<string, string>;

  /**
   * <p> Describes the details of the most recent flow run. </p>
   */
  lastRunExecutionDetails?: ExecutionDetails;
}

export interface ListConnectorEntitiesRequest {
  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account, and is used to query the
   *       downstream connector. </p>
   */
  connectorProfileName?: string;

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType | string;

  /**
   * <p> This optional parameter is specific to connector implementation. Some connectors support
   *       multiple levels or categories of entities. You can find out the list of roots for such
   *       providers by sending a request without the <code>entitiesPath</code> parameter. If the
   *       connector supports entities at different roots, this initial request returns the list of
   *       roots. Otherwise, this request returns all entities supported by the provider. </p>
   */
  entitiesPath?: string;

  /**
   * <p>The version of the API that's used by the connector.</p>
   */
  apiVersion?: string;

  /**
   * <p>The maximum number of items that the operation returns in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>A token that was provided by your prior <code>ListConnectorEntities</code> operation if
   *       the response was too big for the page size. You specify this token to get the next page of
   *       results in paginated response.</p>
   */
  nextToken?: string;
}

export interface ListConnectorEntitiesResponse {
  /**
   * <p> The response of <code>ListConnectorEntities</code> lists entities grouped by category.
   *       This map's key represents the group name, and its value contains the list of entities
   *       belonging to that group. </p>
   */
  connectorEntityMap: Record<string, ConnectorEntity[]> | undefined;

  /**
   * <p>A token that you specify in your next <code>ListConnectorEntities</code> operation to get
   *       the next page of results in paginated response. The <code>ListConnectorEntities</code>
   *       operation provides this token if the response is too big for the page size.</p>
   */
  nextToken?: string;
}

export interface ListConnectorsRequest {
  /**
   * <p>Specifies the maximum number of items that should be returned in the result set. The
   *       default for <code>maxResults</code> is 20 (for all paginated API operations).</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token for the next page of data.</p>
   */
  nextToken?: string;
}

export interface ListConnectorsResponse {
  /**
   * <p>Contains information about the connectors supported by Amazon AppFlow.</p>
   */
  connectors?: ConnectorDetail[];

  /**
   * <p>The pagination token for the next page of data. If nextToken=null, this means that all
   *       records have been fetched.</p>
   */
  nextToken?: string;
}

export interface ListFlowsRequest {
  /**
   * <p> Specifies the maximum number of items that should be returned in the result set. </p>
   */
  maxResults?: number;

  /**
   * <p> The pagination token for next page of data. </p>
   */
  nextToken?: string;
}

export interface ListFlowsResponse {
  /**
   * <p> The list of flows associated with your account. </p>
   */
  flows?: FlowDefinition[];

  /**
   * <p> The pagination token for next page of data. </p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the specified flow. </p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: Record<string, string>;
}

export interface RegisterConnectorRequest {
  /**
   * <p> The name of the connector. The name is unique for each <code>ConnectorRegistration</code>
   *       in your Amazon Web Services account.</p>
   */
  connectorLabel?: string;

  /**
   * <p>A description about the connector that's being registered.</p>
   */
  description?: string;

  /**
   * <p>The provisioning type of the connector. Currently the only supported value is LAMBDA.
   *     </p>
   */
  connectorProvisioningType?: ConnectorProvisioningType | string;

  /**
   * <p>The provisioning type of the connector. Currently the only supported value is
   *       LAMBDA.</p>
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig;
}

export interface RegisterConnectorResponse {
  /**
   * <p>The ARN of the connector being registered.</p>
   */
  connectorArn?: string;
}

/**
 * <p>API calls have exceeded the maximum allowed API request rate per account and per Region.
 *     </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

export interface StartFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;
}

export interface StartFlowResponse {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;

  /**
   * <p> Returns the internal execution ID of an on-demand flow when the flow is started. For
   *       scheduled or event-triggered flows, this value is null. </p>
   */
  executionId?: string;
}

export interface StopFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;
}

export interface StopFlowResponse {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;
}

/**
 * <p> The requested operation is not supported for the current flow. </p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
  }
}

export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to tag. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UnregisterConnectorRequest {
  /**
   * <p>The label of the connector. The label is unique for each
   *         <code>ConnectorRegistration</code> in your Amazon Web Services account.</p>
   */
  connectorLabel: string | undefined;

  /**
   * <p>Indicates whether Amazon AppFlow should unregister the connector, even if it is
   *       currently in use in one or more connector profiles. The default value is false.</p>
   */
  forceDelete?: boolean;
}

export interface UnregisterConnectorResponse {}

export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to untag. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The tag keys associated with the tag that you want to remove from your flow. </p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateConnectorProfileRequest {
  /**
   * <p> The name of the connector profile and is unique for each <code>ConnectorProfile</code> in
   *       the Amazon Web Services account. </p>
   */
  connectorProfileName: string | undefined;

  /**
   * <p> Indicates the connection mode and if it is public or private. </p>
   */
  connectionMode: ConnectionMode | string | undefined;

  /**
   * <p> Defines the connector-specific profile configuration and credentials. </p>
   */
  connectorProfileConfig: ConnectorProfileConfig | undefined;
}

export interface UpdateConnectorProfileResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   */
  connectorProfileArn?: string;
}

export interface UpdateConnectorRegistrationRequest {
  /**
   * <p>The name of the connector. The name is unique for each connector registration in your AWS
   *       account.</p>
   */
  connectorLabel: string | undefined;

  /**
   * <p>A description about the update that you're applying to the connector.</p>
   */
  description?: string;

  /**
   * <p>Contains information about the configuration of the connector being registered.</p>
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig;
}

export interface UpdateConnectorRegistrationResponse {
  /**
   * <p>The ARN of the connector being updated.</p>
   */
  connectorArn?: string;
}

export interface UpdateFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * <p> A description of the flow. </p>
   */
  description?: string;

  /**
   * <p> The trigger settings that determine how and when the flow runs. </p>
   */
  triggerConfig: TriggerConfig | undefined;

  /**
   * <p> Contains information about the configuration of the source connector used in the flow.
   *     </p>
   */
  sourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * <p> The configuration that controls how Amazon AppFlow transfers data to the
   *       destination connector. </p>
   */
  destinationFlowConfigList: DestinationFlowConfig[] | undefined;

  /**
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the
   *       flow run. </p>
   */
  tasks: Task[] | undefined;

  /**
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs the data
   *       that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a
   *       flow, it stores metadata in a data catalog.</p>
   */
  metadataCatalogConfig?: MetadataCatalogConfig;
}

export interface UpdateFlowResponse {
  /**
   * <p>Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus | string;
}

/**
 * @internal
 */
export const AggregationConfigFilterSensitiveLog = (obj: AggregationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AmplitudeConnectorProfileCredentialsFilterSensitiveLog = (
  obj: AmplitudeConnectorProfileCredentials
): any => ({
  ...obj,
  ...(obj.apiKey && { apiKey: SENSITIVE_STRING }),
  ...(obj.secretKey && { secretKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AmplitudeConnectorProfilePropertiesFilterSensitiveLog = (
  obj: AmplitudeConnectorProfileProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AmplitudeMetadataFilterSensitiveLog = (obj: AmplitudeMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AmplitudeSourcePropertiesFilterSensitiveLog = (obj: AmplitudeSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApiKeyCredentialsFilterSensitiveLog = (obj: ApiKeyCredentials): any => ({
  ...obj,
  ...(obj.apiKey && { apiKey: SENSITIVE_STRING }),
  ...(obj.apiSecretKey && { apiSecretKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AuthParameterFilterSensitiveLog = (obj: AuthParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomAuthConfigFilterSensitiveLog = (obj: CustomAuthConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OAuth2CustomParameterFilterSensitiveLog = (obj: OAuth2CustomParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OAuth2DefaultsFilterSensitiveLog = (obj: OAuth2Defaults): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthenticationConfigFilterSensitiveLog = (obj: AuthenticationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BasicAuthCredentialsFilterSensitiveLog = (obj: BasicAuthCredentials): any => ({
  ...obj,
  ...(obj.password && { password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CustomerProfilesMetadataFilterSensitiveLog = (obj: CustomerProfilesMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatadogMetadataFilterSensitiveLog = (obj: DatadogMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DynatraceMetadataFilterSensitiveLog = (obj: DynatraceMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventBridgeMetadataFilterSensitiveLog = (obj: EventBridgeMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GoogleAnalyticsMetadataFilterSensitiveLog = (obj: GoogleAnalyticsMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HoneycodeMetadataFilterSensitiveLog = (obj: HoneycodeMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InforNexusMetadataFilterSensitiveLog = (obj: InforNexusMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MarketoMetadataFilterSensitiveLog = (obj: MarketoMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PardotMetadataFilterSensitiveLog = (obj: PardotMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedshiftMetadataFilterSensitiveLog = (obj: RedshiftMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3MetadataFilterSensitiveLog = (obj: S3Metadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SalesforceMetadataFilterSensitiveLog = (obj: SalesforceMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SAPODataMetadataFilterSensitiveLog = (obj: SAPODataMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceNowMetadataFilterSensitiveLog = (obj: ServiceNowMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SingularMetadataFilterSensitiveLog = (obj: SingularMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlackMetadataFilterSensitiveLog = (obj: SlackMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnowflakeMetadataFilterSensitiveLog = (obj: SnowflakeMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrendmicroMetadataFilterSensitiveLog = (obj: TrendmicroMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpsolverMetadataFilterSensitiveLog = (obj: UpsolverMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VeevaMetadataFilterSensitiveLog = (obj: VeevaMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZendeskMetadataFilterSensitiveLog = (obj: ZendeskMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorMetadataFilterSensitiveLog = (obj: ConnectorMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaConnectorProvisioningConfigFilterSensitiveLog = (obj: LambdaConnectorProvisioningConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorProvisioningConfigFilterSensitiveLog = (obj: ConnectorProvisioningConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorRuntimeSettingFilterSensitiveLog = (obj: ConnectorRuntimeSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorConfigurationFilterSensitiveLog = (obj: ConnectorConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorDetailFilterSensitiveLog = (obj: ConnectorDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorEntityFilterSensitiveLog = (obj: ConnectorEntity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationFieldPropertiesFilterSensitiveLog = (obj: DestinationFieldProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceFieldPropertiesFilterSensitiveLog = (obj: SourceFieldProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RangeFilterSensitiveLog = (obj: Range): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldTypeDetailsFilterSensitiveLog = (obj: FieldTypeDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SupportedFieldTypeDetailsFilterSensitiveLog = (obj: SupportedFieldTypeDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorEntityFieldFilterSensitiveLog = (obj: ConnectorEntityField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorOAuthRequestFilterSensitiveLog = (obj: ConnectorOAuthRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorOperatorFilterSensitiveLog = (obj: ConnectorOperator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OAuth2PropertiesFilterSensitiveLog = (obj: OAuth2Properties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomConnectorProfilePropertiesFilterSensitiveLog = (obj: CustomConnectorProfileProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatadogConnectorProfilePropertiesFilterSensitiveLog = (obj: DatadogConnectorProfileProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DynatraceConnectorProfilePropertiesFilterSensitiveLog = (
  obj: DynatraceConnectorProfileProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GoogleAnalyticsConnectorProfilePropertiesFilterSensitiveLog = (
  obj: GoogleAnalyticsConnectorProfileProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HoneycodeConnectorProfilePropertiesFilterSensitiveLog = (
  obj: HoneycodeConnectorProfileProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InforNexusConnectorProfilePropertiesFilterSensitiveLog = (
  obj: InforNexusConnectorProfileProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MarketoConnectorProfilePropertiesFilterSensitiveLog = (obj: MarketoConnectorProfileProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PardotConnectorProfilePropertiesFilterSensitiveLog = (obj: PardotConnectorProfileProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedshiftConnectorProfilePropertiesFilterSensitiveLog = (obj: RedshiftConnectorProfileProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SalesforceConnectorProfilePropertiesFilterSensitiveLog = (
  obj: SalesforceConnectorProfileProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OAuthPropertiesFilterSensitiveLog = (obj: OAuthProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SAPODataConnectorProfilePropertiesFilterSensitiveLog = (obj: SAPODataConnectorProfileProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceNowConnectorProfilePropertiesFilterSensitiveLog = (
  obj: ServiceNowConnectorProfileProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SingularConnectorProfilePropertiesFilterSensitiveLog = (obj: SingularConnectorProfileProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlackConnectorProfilePropertiesFilterSensitiveLog = (obj: SlackConnectorProfileProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnowflakeConnectorProfilePropertiesFilterSensitiveLog = (
  obj: SnowflakeConnectorProfileProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrendmicroConnectorProfilePropertiesFilterSensitiveLog = (
  obj: TrendmicroConnectorProfileProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VeevaConnectorProfilePropertiesFilterSensitiveLog = (obj: VeevaConnectorProfileProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZendeskConnectorProfilePropertiesFilterSensitiveLog = (obj: ZendeskConnectorProfileProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorProfilePropertiesFilterSensitiveLog = (obj: ConnectorProfileProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrivateConnectionProvisioningStateFilterSensitiveLog = (obj: PrivateConnectionProvisioningState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorProfileFilterSensitiveLog = (obj: ConnectorProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomAuthCredentialsFilterSensitiveLog = (obj: CustomAuthCredentials): any => ({
  ...obj,
  ...(obj.credentialsMap && { credentialsMap: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OAuth2CredentialsFilterSensitiveLog = (obj: OAuth2Credentials): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CustomConnectorProfileCredentialsFilterSensitiveLog = (obj: CustomConnectorProfileCredentials): any => ({
  ...obj,
  ...(obj.basic && { basic: BasicAuthCredentialsFilterSensitiveLog(obj.basic) }),
  ...(obj.oauth2 && { oauth2: OAuth2CredentialsFilterSensitiveLog(obj.oauth2) }),
  ...(obj.apiKey && { apiKey: ApiKeyCredentialsFilterSensitiveLog(obj.apiKey) }),
  ...(obj.custom && { custom: CustomAuthCredentialsFilterSensitiveLog(obj.custom) }),
});

/**
 * @internal
 */
export const DatadogConnectorProfileCredentialsFilterSensitiveLog = (obj: DatadogConnectorProfileCredentials): any => ({
  ...obj,
  ...(obj.apiKey && { apiKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DynatraceConnectorProfileCredentialsFilterSensitiveLog = (
  obj: DynatraceConnectorProfileCredentials
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GoogleAnalyticsConnectorProfileCredentialsFilterSensitiveLog = (
  obj: GoogleAnalyticsConnectorProfileCredentials
): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const HoneycodeConnectorProfileCredentialsFilterSensitiveLog = (
  obj: HoneycodeConnectorProfileCredentials
): any => ({
  ...obj,
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InforNexusConnectorProfileCredentialsFilterSensitiveLog = (
  obj: InforNexusConnectorProfileCredentials
): any => ({
  ...obj,
  ...(obj.accessKeyId && { accessKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MarketoConnectorProfileCredentialsFilterSensitiveLog = (obj: MarketoConnectorProfileCredentials): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PardotConnectorProfileCredentialsFilterSensitiveLog = (obj: PardotConnectorProfileCredentials): any => ({
  ...obj,
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  ...(obj.clientCredentialsArn && { clientCredentialsArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RedshiftConnectorProfileCredentialsFilterSensitiveLog = (
  obj: RedshiftConnectorProfileCredentials
): any => ({
  ...obj,
  ...(obj.password && { password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SalesforceConnectorProfileCredentialsFilterSensitiveLog = (
  obj: SalesforceConnectorProfileCredentials
): any => ({
  ...obj,
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  ...(obj.clientCredentialsArn && { clientCredentialsArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OAuthCredentialsFilterSensitiveLog = (obj: OAuthCredentials): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SAPODataConnectorProfileCredentialsFilterSensitiveLog = (
  obj: SAPODataConnectorProfileCredentials
): any => ({
  ...obj,
  ...(obj.basicAuthCredentials && {
    basicAuthCredentials: BasicAuthCredentialsFilterSensitiveLog(obj.basicAuthCredentials),
  }),
  ...(obj.oAuthCredentials && { oAuthCredentials: OAuthCredentialsFilterSensitiveLog(obj.oAuthCredentials) }),
});

/**
 * @internal
 */
export const ServiceNowConnectorProfileCredentialsFilterSensitiveLog = (
  obj: ServiceNowConnectorProfileCredentials
): any => ({
  ...obj,
  ...(obj.password && { password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SingularConnectorProfileCredentialsFilterSensitiveLog = (
  obj: SingularConnectorProfileCredentials
): any => ({
  ...obj,
  ...(obj.apiKey && { apiKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SlackConnectorProfileCredentialsFilterSensitiveLog = (obj: SlackConnectorProfileCredentials): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SnowflakeConnectorProfileCredentialsFilterSensitiveLog = (
  obj: SnowflakeConnectorProfileCredentials
): any => ({
  ...obj,
  ...(obj.password && { password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TrendmicroConnectorProfileCredentialsFilterSensitiveLog = (
  obj: TrendmicroConnectorProfileCredentials
): any => ({
  ...obj,
  ...(obj.apiSecretKey && { apiSecretKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VeevaConnectorProfileCredentialsFilterSensitiveLog = (obj: VeevaConnectorProfileCredentials): any => ({
  ...obj,
  ...(obj.password && { password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ZendeskConnectorProfileCredentialsFilterSensitiveLog = (obj: ZendeskConnectorProfileCredentials): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectorProfileCredentialsFilterSensitiveLog = (obj: ConnectorProfileCredentials): any => ({
  ...obj,
  ...(obj.Amplitude && { Amplitude: AmplitudeConnectorProfileCredentialsFilterSensitiveLog(obj.Amplitude) }),
  ...(obj.Datadog && { Datadog: DatadogConnectorProfileCredentialsFilterSensitiveLog(obj.Datadog) }),
  ...(obj.GoogleAnalytics && {
    GoogleAnalytics: GoogleAnalyticsConnectorProfileCredentialsFilterSensitiveLog(obj.GoogleAnalytics),
  }),
  ...(obj.Honeycode && { Honeycode: HoneycodeConnectorProfileCredentialsFilterSensitiveLog(obj.Honeycode) }),
  ...(obj.InforNexus && { InforNexus: InforNexusConnectorProfileCredentialsFilterSensitiveLog(obj.InforNexus) }),
  ...(obj.Marketo && { Marketo: MarketoConnectorProfileCredentialsFilterSensitiveLog(obj.Marketo) }),
  ...(obj.Redshift && { Redshift: RedshiftConnectorProfileCredentialsFilterSensitiveLog(obj.Redshift) }),
  ...(obj.Salesforce && { Salesforce: SalesforceConnectorProfileCredentialsFilterSensitiveLog(obj.Salesforce) }),
  ...(obj.ServiceNow && { ServiceNow: ServiceNowConnectorProfileCredentialsFilterSensitiveLog(obj.ServiceNow) }),
  ...(obj.Singular && { Singular: SingularConnectorProfileCredentialsFilterSensitiveLog(obj.Singular) }),
  ...(obj.Slack && { Slack: SlackConnectorProfileCredentialsFilterSensitiveLog(obj.Slack) }),
  ...(obj.Snowflake && { Snowflake: SnowflakeConnectorProfileCredentialsFilterSensitiveLog(obj.Snowflake) }),
  ...(obj.Trendmicro && { Trendmicro: TrendmicroConnectorProfileCredentialsFilterSensitiveLog(obj.Trendmicro) }),
  ...(obj.Veeva && { Veeva: VeevaConnectorProfileCredentialsFilterSensitiveLog(obj.Veeva) }),
  ...(obj.Zendesk && { Zendesk: ZendeskConnectorProfileCredentialsFilterSensitiveLog(obj.Zendesk) }),
  ...(obj.SAPOData && { SAPOData: SAPODataConnectorProfileCredentialsFilterSensitiveLog(obj.SAPOData) }),
  ...(obj.CustomConnector && {
    CustomConnector: CustomConnectorProfileCredentialsFilterSensitiveLog(obj.CustomConnector),
  }),
  ...(obj.Pardot && { Pardot: PardotConnectorProfileCredentialsFilterSensitiveLog(obj.Pardot) }),
});

/**
 * @internal
 */
export const ConnectorProfileConfigFilterSensitiveLog = (obj: ConnectorProfileConfig): any => ({
  ...obj,
  ...(obj.connectorProfileCredentials && {
    connectorProfileCredentials: ConnectorProfileCredentialsFilterSensitiveLog(obj.connectorProfileCredentials),
  }),
});

/**
 * @internal
 */
export const CreateConnectorProfileRequestFilterSensitiveLog = (obj: CreateConnectorProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectorProfileResponseFilterSensitiveLog = (obj: CreateConnectorProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorHandlingConfigFilterSensitiveLog = (obj: ErrorHandlingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomConnectorDestinationPropertiesFilterSensitiveLog = (
  obj: CustomConnectorDestinationProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomerProfilesDestinationPropertiesFilterSensitiveLog = (
  obj: CustomerProfilesDestinationProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventBridgeDestinationPropertiesFilterSensitiveLog = (obj: EventBridgeDestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HoneycodeDestinationPropertiesFilterSensitiveLog = (obj: HoneycodeDestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LookoutMetricsDestinationPropertiesFilterSensitiveLog = (
  obj: LookoutMetricsDestinationProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MarketoDestinationPropertiesFilterSensitiveLog = (obj: MarketoDestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedshiftDestinationPropertiesFilterSensitiveLog = (obj: RedshiftDestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrefixConfigFilterSensitiveLog = (obj: PrefixConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3OutputFormatConfigFilterSensitiveLog = (obj: S3OutputFormatConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DestinationPropertiesFilterSensitiveLog = (obj: S3DestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SalesforceDestinationPropertiesFilterSensitiveLog = (obj: SalesforceDestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuccessResponseHandlingConfigFilterSensitiveLog = (obj: SuccessResponseHandlingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SAPODataDestinationPropertiesFilterSensitiveLog = (obj: SAPODataDestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnowflakeDestinationPropertiesFilterSensitiveLog = (obj: SnowflakeDestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpsolverS3OutputFormatConfigFilterSensitiveLog = (obj: UpsolverS3OutputFormatConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpsolverDestinationPropertiesFilterSensitiveLog = (obj: UpsolverDestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZendeskDestinationPropertiesFilterSensitiveLog = (obj: ZendeskDestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationConnectorPropertiesFilterSensitiveLog = (obj: DestinationConnectorProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationFlowConfigFilterSensitiveLog = (obj: DestinationFlowConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlueDataCatalogConfigFilterSensitiveLog = (obj: GlueDataCatalogConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetadataCatalogConfigFilterSensitiveLog = (obj: MetadataCatalogConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IncrementalPullConfigFilterSensitiveLog = (obj: IncrementalPullConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomConnectorSourcePropertiesFilterSensitiveLog = (obj: CustomConnectorSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatadogSourcePropertiesFilterSensitiveLog = (obj: DatadogSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DynatraceSourcePropertiesFilterSensitiveLog = (obj: DynatraceSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GoogleAnalyticsSourcePropertiesFilterSensitiveLog = (obj: GoogleAnalyticsSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InforNexusSourcePropertiesFilterSensitiveLog = (obj: InforNexusSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MarketoSourcePropertiesFilterSensitiveLog = (obj: MarketoSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PardotSourcePropertiesFilterSensitiveLog = (obj: PardotSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3InputFormatConfigFilterSensitiveLog = (obj: S3InputFormatConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3SourcePropertiesFilterSensitiveLog = (obj: S3SourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SalesforceSourcePropertiesFilterSensitiveLog = (obj: SalesforceSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SAPODataSourcePropertiesFilterSensitiveLog = (obj: SAPODataSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceNowSourcePropertiesFilterSensitiveLog = (obj: ServiceNowSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SingularSourcePropertiesFilterSensitiveLog = (obj: SingularSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlackSourcePropertiesFilterSensitiveLog = (obj: SlackSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrendmicroSourcePropertiesFilterSensitiveLog = (obj: TrendmicroSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VeevaSourcePropertiesFilterSensitiveLog = (obj: VeevaSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZendeskSourcePropertiesFilterSensitiveLog = (obj: ZendeskSourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceConnectorPropertiesFilterSensitiveLog = (obj: SourceConnectorProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceFlowConfigFilterSensitiveLog = (obj: SourceFlowConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskFilterSensitiveLog = (obj: Task): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledTriggerPropertiesFilterSensitiveLog = (obj: ScheduledTriggerProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TriggerPropertiesFilterSensitiveLog = (obj: TriggerProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TriggerConfigFilterSensitiveLog = (obj: TriggerConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFlowRequestFilterSensitiveLog = (obj: CreateFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFlowResponseFilterSensitiveLog = (obj: CreateFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectorProfileRequestFilterSensitiveLog = (obj: DeleteConnectorProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectorProfileResponseFilterSensitiveLog = (obj: DeleteConnectorProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFlowRequestFilterSensitiveLog = (obj: DeleteFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFlowResponseFilterSensitiveLog = (obj: DeleteFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectorRequestFilterSensitiveLog = (obj: DescribeConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectorResponseFilterSensitiveLog = (obj: DescribeConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectorEntityRequestFilterSensitiveLog = (obj: DescribeConnectorEntityRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectorEntityResponseFilterSensitiveLog = (obj: DescribeConnectorEntityResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectorProfilesRequestFilterSensitiveLog = (obj: DescribeConnectorProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectorProfilesResponseFilterSensitiveLog = (obj: DescribeConnectorProfilesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectorsRequestFilterSensitiveLog = (obj: DescribeConnectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectorsResponseFilterSensitiveLog = (obj: DescribeConnectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFlowRequestFilterSensitiveLog = (obj: DescribeFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionDetailsFilterSensitiveLog = (obj: ExecutionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegistrationOutputFilterSensitiveLog = (obj: RegistrationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetadataCatalogDetailFilterSensitiveLog = (obj: MetadataCatalogDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFlowResponseFilterSensitiveLog = (obj: DescribeFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFlowExecutionRecordsRequestFilterSensitiveLog = (
  obj: DescribeFlowExecutionRecordsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorInfoFilterSensitiveLog = (obj: ErrorInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionResultFilterSensitiveLog = (obj: ExecutionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionRecordFilterSensitiveLog = (obj: ExecutionRecord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFlowExecutionRecordsResponseFilterSensitiveLog = (
  obj: DescribeFlowExecutionRecordsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowDefinitionFilterSensitiveLog = (obj: FlowDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectorEntitiesRequestFilterSensitiveLog = (obj: ListConnectorEntitiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectorEntitiesResponseFilterSensitiveLog = (obj: ListConnectorEntitiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectorsRequestFilterSensitiveLog = (obj: ListConnectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectorsResponseFilterSensitiveLog = (obj: ListConnectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFlowsRequestFilterSensitiveLog = (obj: ListFlowsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFlowsResponseFilterSensitiveLog = (obj: ListFlowsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterConnectorRequestFilterSensitiveLog = (obj: RegisterConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterConnectorResponseFilterSensitiveLog = (obj: RegisterConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFlowRequestFilterSensitiveLog = (obj: StartFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFlowResponseFilterSensitiveLog = (obj: StartFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopFlowRequestFilterSensitiveLog = (obj: StopFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopFlowResponseFilterSensitiveLog = (obj: StopFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnregisterConnectorRequestFilterSensitiveLog = (obj: UnregisterConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnregisterConnectorResponseFilterSensitiveLog = (obj: UnregisterConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectorProfileRequestFilterSensitiveLog = (obj: UpdateConnectorProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectorProfileResponseFilterSensitiveLog = (obj: UpdateConnectorProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectorRegistrationRequestFilterSensitiveLog = (obj: UpdateConnectorRegistrationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectorRegistrationResponseFilterSensitiveLog = (
  obj: UpdateConnectorRegistrationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowRequestFilterSensitiveLog = (obj: UpdateFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowResponseFilterSensitiveLog = (obj: UpdateFlowResponse): any => ({
  ...obj,
});
