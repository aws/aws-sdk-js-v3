// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AppflowServiceException as __BaseException } from "./AppflowServiceException";

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const AggregationType = {
  NONE: "None",
  SINGLE_FILE: "SingleFile",
} as const;

/**
 * @public
 */
export type AggregationType = (typeof AggregationType)[keyof typeof AggregationType];

/**
 * @public
 * <p> The aggregation settings that you can use to customize the output format of your flow
 *       data. </p>
 */
export interface AggregationConfig {
  /**
   * @public
   * <p> Specifies whether Amazon AppFlow aggregates the flow records into a single file, or
   *       leave them unaggregated. </p>
   */
  aggregationType?: AggregationType;

  /**
   * @public
   * <p>The desired file size, in MB, for each output file that Amazon AppFlow writes to the
   *       flow destination. For each file, Amazon AppFlow attempts to achieve the size that you
   *       specify. The actual file sizes might differ from this target based on the number and size of
   *       the records that each file contains.</p>
   */
  targetFileSize?: number;
}

/**
 * @public
 * @enum
 */
export const AmplitudeConnectorOperator = {
  BETWEEN: "BETWEEN",
} as const;

/**
 * @public
 */
export type AmplitudeConnectorOperator = (typeof AmplitudeConnectorOperator)[keyof typeof AmplitudeConnectorOperator];

/**
 * @public
 * <p> The connector-specific credentials required when using Amplitude. </p>
 */
export interface AmplitudeConnectorProfileCredentials {
  /**
   * @public
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   */
  apiKey: string | undefined;

  /**
   * @public
   * <p> The Secret Access Key portion of the credentials. </p>
   */
  secretKey: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile properties required when using Amplitude. </p>
 */
export interface AmplitudeConnectorProfileProperties {}

/**
 * @public
 * <p> The connector metadata specific to Amplitude. </p>
 */
export interface AmplitudeMetadata {}

/**
 * @public
 * <p> The properties that are applied when Amplitude is being used as a source. </p>
 */
export interface AmplitudeSourceProperties {
  /**
   * @public
   * <p> The object specified in the Amplitude flow source. </p>
   */
  object: string | undefined;
}

/**
 * @public
 * <p>The API key credentials required for API key authentication.</p>
 */
export interface ApiKeyCredentials {
  /**
   * @public
   * <p>The API key required for API key authentication.</p>
   */
  apiKey: string | undefined;

  /**
   * @public
   * <p>The API secret key required for API key authentication.</p>
   */
  apiSecretKey?: string;
}

/**
 * @public
 * <p>Information about required authentication parameters.</p>
 */
export interface AuthParameter {
  /**
   * @public
   * <p>The authentication key required to authenticate with the connector.</p>
   */
  key?: string;

  /**
   * @public
   * <p>Indicates whether this authentication parameter is required.</p>
   */
  isRequired?: boolean;

  /**
   * @public
   * <p>Label used for authentication parameter.</p>
   */
  label?: string;

  /**
   * @public
   * <p>A description about the authentication parameter.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Indicates whether this authentication parameter is a sensitive field.</p>
   */
  isSensitiveField?: boolean;

  /**
   * @public
   * <p>Contains default values for this authentication parameter that are supplied by the
   *       connector.</p>
   */
  connectorSuppliedValues?: string[];
}

/**
 * @public
 * <p>Configuration information required for custom authentication.</p>
 */
export interface CustomAuthConfig {
  /**
   * @public
   * <p>The authentication type that the custom connector uses.</p>
   */
  customAuthenticationType?: string;

  /**
   * @public
   * <p>Information about authentication parameters required for authentication.</p>
   */
  authParameters?: AuthParameter[];
}

/**
 * @public
 * @enum
 */
export const OAuth2CustomPropType = {
  AUTH_URL: "AUTH_URL",
  TOKEN_URL: "TOKEN_URL",
} as const;

/**
 * @public
 */
export type OAuth2CustomPropType = (typeof OAuth2CustomPropType)[keyof typeof OAuth2CustomPropType];

/**
 * @public
 * <p>Custom parameter required for OAuth 2.0 authentication.</p>
 */
export interface OAuth2CustomParameter {
  /**
   * @public
   * <p>The key of the custom parameter required for OAuth 2.0 authentication.</p>
   */
  key?: string;

  /**
   * @public
   * <p>Indicates whether the custom parameter for OAuth 2.0 authentication is required.</p>
   */
  isRequired?: boolean;

  /**
   * @public
   * <p>The label of the custom parameter used for OAuth 2.0 authentication.</p>
   */
  label?: string;

  /**
   * @public
   * <p>A description about the custom parameter used for OAuth 2.0 authentication.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Indicates whether this authentication custom parameter is a sensitive field.</p>
   */
  isSensitiveField?: boolean;

  /**
   * @public
   * <p>Contains default values for this authentication parameter that are supplied by the
   *       connector.</p>
   */
  connectorSuppliedValues?: string[];

  /**
   * @public
   * <p>Indicates whether custom parameter is used with TokenUrl or AuthUrl.</p>
   */
  type?: OAuth2CustomPropType;
}

/**
 * @public
 * @enum
 */
export const OAuth2GrantType = {
  AUTHORIZATION_CODE: "AUTHORIZATION_CODE",
  CLIENT_CREDENTIALS: "CLIENT_CREDENTIALS",
  JWT_BEARER: "JWT_BEARER",
} as const;

/**
 * @public
 */
export type OAuth2GrantType = (typeof OAuth2GrantType)[keyof typeof OAuth2GrantType];

/**
 * @public
 * <p>Contains the default values required for OAuth 2.0 authentication.</p>
 */
export interface OAuth2Defaults {
  /**
   * @public
   * <p>OAuth 2.0 scopes that the connector supports.</p>
   */
  oauthScopes?: string[];

  /**
   * @public
   * <p>Token URLs that can be used for OAuth 2.0 authentication.</p>
   */
  tokenUrls?: string[];

  /**
   * @public
   * <p>Auth code URLs that can be used for OAuth 2.0 authentication.</p>
   */
  authCodeUrls?: string[];

  /**
   * @public
   * <p>OAuth 2.0 grant types supported by the connector.</p>
   */
  oauth2GrantTypesSupported?: OAuth2GrantType[];

  /**
   * @public
   * <p>List of custom parameters required for OAuth 2.0 authentication.</p>
   */
  oauth2CustomProperties?: OAuth2CustomParameter[];
}

/**
 * @public
 * <p>Contains information about the authentication config that the connector supports.</p>
 */
export interface AuthenticationConfig {
  /**
   * @public
   * <p>Indicates whether basic authentication is supported by the connector.</p>
   */
  isBasicAuthSupported?: boolean;

  /**
   * @public
   * <p>Indicates whether API key authentication is supported by the connector</p>
   */
  isApiKeyAuthSupported?: boolean;

  /**
   * @public
   * <p>Indicates whether OAuth 2.0 authentication is supported by the connector.</p>
   */
  isOAuth2Supported?: boolean;

  /**
   * @public
   * <p>Indicates whether custom authentication is supported by the connector</p>
   */
  isCustomAuthSupported?: boolean;

  /**
   * @public
   * <p>Contains the default values required for OAuth 2.0 authentication.</p>
   */
  oAuth2Defaults?: OAuth2Defaults;

  /**
   * @public
   * <p>Contains information required for custom authentication.</p>
   */
  customAuthConfigs?: CustomAuthConfig[];
}

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  APIKEY: "APIKEY",
  BASIC: "BASIC",
  CUSTOM: "CUSTOM",
  OAUTH2: "OAUTH2",
} as const;

/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * <p> The basic auth credentials required for basic authentication. </p>
 */
export interface BasicAuthCredentials {
  /**
   * @public
   * <p> The username to use to connect to a resource. </p>
   */
  username: string | undefined;

  /**
   * @public
   * <p> The password to use to connect to a resource.</p>
   */
  password: string | undefined;
}

/**
 * @public
 */
export interface CancelFlowExecutionsRequest {
  /**
   * @public
   * <p>The name of a flow with active runs that you want to cancel.</p>
   */
  flowName: string | undefined;

  /**
   * @public
   * <p>The ID of each active run to cancel. These runs must belong to the flow you specify in
   *       your request.</p>
   *          <p>If you omit this parameter, your request ends all active runs that belong to the
   *       flow.</p>
   */
  executionIds?: string[];
}

/**
 * @public
 */
export interface CancelFlowExecutionsResponse {
  /**
   * @public
   * <p>The IDs of runs that Amazon AppFlow couldn't cancel. These runs might be ineligible
   *       for canceling because they haven't started yet or have already completed.</p>
   */
  invalidExecutions?: string[];
}

/**
 * @public
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
 * @public
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

/**
 * @public
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

/**
 * @public
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
 * @public
 * @enum
 */
export const CatalogType = {
  GLUE: "GLUE",
} as const;

/**
 * @public
 */
export type CatalogType = (typeof CatalogType)[keyof typeof CatalogType];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const ConnectionMode = {
  PRIVATE: "Private",
  PUBLIC: "Public",
} as const;

/**
 * @public
 */
export type ConnectionMode = (typeof ConnectionMode)[keyof typeof ConnectionMode];

/**
 * @public
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
 * @public
 * <p> The connector metadata specific to Amazon Connect Customer Profiles. </p>
 */
export interface CustomerProfilesMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Datadog. </p>
 */
export interface DatadogMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Dynatrace. </p>
 */
export interface DynatraceMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Amazon EventBridge. </p>
 */
export interface EventBridgeMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Google Analytics. </p>
 */
export interface GoogleAnalyticsMetadata {
  /**
   * @public
   * <p> The desired authorization scope for the Google Analytics account. </p>
   */
  oAuthScopes?: string[];
}

/**
 * @public
 * <p> The connector metadata specific to Amazon Honeycode. </p>
 */
export interface HoneycodeMetadata {
  /**
   * @public
   * <p> The desired authorization scope for the Amazon Honeycode account. </p>
   */
  oAuthScopes?: string[];
}

/**
 * @public
 * <p> The connector metadata specific to Infor Nexus. </p>
 */
export interface InforNexusMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Marketo. </p>
 */
export interface MarketoMetadata {}

/**
 * @public
 * <p>The connector metadata specific to Salesforce Pardot.</p>
 */
export interface PardotMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Amazon Redshift. </p>
 */
export interface RedshiftMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Amazon S3. </p>
 */
export interface S3Metadata {}

/**
 * @public
 * @enum
 */
export const SalesforceDataTransferApi = {
  AUTOMATIC: "AUTOMATIC",
  BULKV2: "BULKV2",
  REST_SYNC: "REST_SYNC",
} as const;

/**
 * @public
 */
export type SalesforceDataTransferApi = (typeof SalesforceDataTransferApi)[keyof typeof SalesforceDataTransferApi];

/**
 * @public
 * <p> The connector metadata specific to Salesforce. </p>
 */
export interface SalesforceMetadata {
  /**
   * @public
   * <p> The desired authorization scope for the Salesforce account. </p>
   */
  oAuthScopes?: string[];

  /**
   * @public
   * <p>The Salesforce APIs that you can have Amazon AppFlow use when your flows transfers
   *       data to or from Salesforce.</p>
   */
  dataTransferApis?: SalesforceDataTransferApi[];

  /**
   * @public
   * <p>The OAuth 2.0 grant types that Amazon AppFlow can use when it requests an access
   *       token from Salesforce. Amazon AppFlow requires an access token each time it attempts to
   *       access your Salesforce records.</p>
   *          <dl>
   *             <dt>AUTHORIZATION_CODE</dt>
   *             <dd>
   *                <p>Amazon AppFlow passes an authorization code when it requests the access token
   *             from Salesforce. Amazon AppFlow receives the authorization code from Salesforce
   *             after you log in to your Salesforce account and authorize Amazon AppFlow to access
   *             your records.</p>
   *             </dd>
   *             <dt>CLIENT_CREDENTIALS</dt>
   *             <dd>
   *                <p>Amazon AppFlow passes client credentials (a client ID and client secret) when
   *             it requests the access token from Salesforce. You provide these credentials to Amazon AppFlow when you define the connection to your Salesforce account.</p>
   *             </dd>
   *             <dt>JWT_BEARER</dt>
   *             <dd>
   *                <p>Amazon AppFlow passes a JSON web token (JWT) when it requests the access token
   *             from Salesforce. You provide the JWT to Amazon AppFlow when you define the
   *             connection to your Salesforce account. When you use this grant type, you don't need to
   *             log in to your Salesforce account to authorize Amazon AppFlow to access your
   *             records.</p>
   *             </dd>
   *          </dl>
   */
  oauth2GrantTypesSupported?: OAuth2GrantType[];
}

/**
 * @public
 * <p> The connector metadata specific to SAPOData. </p>
 */
export interface SAPODataMetadata {}

/**
 * @public
 * <p> The connector metadata specific to ServiceNow. </p>
 */
export interface ServiceNowMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Singular. </p>
 */
export interface SingularMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Slack. </p>
 */
export interface SlackMetadata {
  /**
   * @public
   * <p> The desired authorization scope for the Slack account. </p>
   */
  oAuthScopes?: string[];
}

/**
 * @public
 * <p> The connector metadata specific to Snowflake. </p>
 */
export interface SnowflakeMetadata {
  /**
   * @public
   * <p> Specifies the supported Amazon Web Services Regions when using Snowflake. </p>
   */
  supportedRegions?: string[];
}

/**
 * @public
 * <p> The connector metadata specific to Trend Micro. </p>
 */
export interface TrendmicroMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Upsolver. </p>
 */
export interface UpsolverMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Veeva. </p>
 */
export interface VeevaMetadata {}

/**
 * @public
 * <p> The connector metadata specific to Zendesk. </p>
 */
export interface ZendeskMetadata {
  /**
   * @public
   * <p> The desired authorization scope for the Zendesk account. </p>
   */
  oAuthScopes?: string[];
}

/**
 * @public
 * <p> A structure to specify connector-specific metadata such as <code>oAuthScopes</code>,
 *         <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. </p>
 */
export interface ConnectorMetadata {
  /**
   * @public
   * <p> The connector metadata specific to Amplitude. </p>
   */
  Amplitude?: AmplitudeMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Datadog. </p>
   */
  Datadog?: DatadogMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Dynatrace. </p>
   */
  Dynatrace?: DynatraceMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Infor Nexus. </p>
   */
  InforNexus?: InforNexusMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Marketo. </p>
   */
  Marketo?: MarketoMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Amazon Redshift. </p>
   */
  Redshift?: RedshiftMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Amazon S3. </p>
   */
  S3?: S3Metadata;

  /**
   * @public
   * <p> The connector metadata specific to Salesforce. </p>
   */
  Salesforce?: SalesforceMetadata;

  /**
   * @public
   * <p> The connector metadata specific to ServiceNow. </p>
   */
  ServiceNow?: ServiceNowMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Singular. </p>
   */
  Singular?: SingularMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Slack. </p>
   */
  Slack?: SlackMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Snowflake. </p>
   */
  Snowflake?: SnowflakeMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Trend Micro. </p>
   */
  Trendmicro?: TrendmicroMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Veeva. </p>
   */
  Veeva?: VeevaMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Zendesk. </p>
   */
  Zendesk?: ZendeskMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Amazon EventBridge. </p>
   */
  EventBridge?: EventBridgeMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Upsolver. </p>
   */
  Upsolver?: UpsolverMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Amazon Connect Customer Profiles. </p>
   */
  CustomerProfiles?: CustomerProfilesMetadata;

  /**
   * @public
   * <p> The connector metadata specific to Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeMetadata;

  /**
   * @public
   * <p> The connector metadata specific to SAPOData. </p>
   */
  SAPOData?: SAPODataMetadata;

  /**
   * @public
   * <p>The connector metadata specific to Salesforce Pardot.</p>
   */
  Pardot?: PardotMetadata;
}

/**
 * @public
 * <p>Contains information about the configuration of the lambda which is being registered as
 *       the connector.</p>
 */
export interface LambdaConnectorProvisioningConfig {
  /**
   * @public
   * <p>Lambda ARN of the connector being registered.</p>
   */
  lambdaArn: string | undefined;
}

/**
 * @public
 * <p>Contains information about the configuration of the connector being registered.</p>
 */
export interface ConnectorProvisioningConfig {
  /**
   * @public
   * <p>Contains information about the configuration of the lambda which is being registered as
   *       the connector.</p>
   */
  lambda?: LambdaConnectorProvisioningConfig;
}

/**
 * @public
 * @enum
 */
export const ConnectorProvisioningType = {
  LAMBDA: "LAMBDA",
} as const;

/**
 * @public
 */
export type ConnectorProvisioningType = (typeof ConnectorProvisioningType)[keyof typeof ConnectorProvisioningType];

/**
 * @public
 * <p>Contains information about the connector runtime settings that are required for flow
 *       execution.</p>
 */
export interface ConnectorRuntimeSetting {
  /**
   * @public
   * <p>Contains value information about the connector runtime setting.</p>
   */
  key?: string;

  /**
   * @public
   * <p>Data type of the connector runtime setting.</p>
   */
  dataType?: string;

  /**
   * @public
   * <p>Indicates whether this connector runtime setting is required.</p>
   */
  isRequired?: boolean;

  /**
   * @public
   * <p>A label used for connector runtime setting.</p>
   */
  label?: string;

  /**
   * @public
   * <p>A description about the connector runtime setting.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Indicates the scope of the connector runtime setting.</p>
   */
  scope?: string;

  /**
   * @public
   * <p>Contains default values for the connector runtime setting that are supplied by the
   *       connector.</p>
   */
  connectorSuppliedValueOptions?: string[];
}

/**
 * @public
 * @enum
 */
export const ConnectorType = {
  AMPLITUDE: "Amplitude",
  CUSTOMCONNECTOR: "CustomConnector",
  CUSTOMERPROFILES: "CustomerProfiles",
  DATADOG: "Datadog",
  DYNATRACE: "Dynatrace",
  EVENTBRIDGE: "EventBridge",
  GOOGLEANALYTICS: "Googleanalytics",
  HONEYCODE: "Honeycode",
  INFORNEXUS: "Infornexus",
  LOOKOUTMETRICS: "LookoutMetrics",
  MARKETO: "Marketo",
  PARDOT: "Pardot",
  REDSHIFT: "Redshift",
  S3: "S3",
  SALESFORCE: "Salesforce",
  SAPODATA: "SAPOData",
  SERVICENOW: "Servicenow",
  SINGULAR: "Singular",
  SLACK: "Slack",
  SNOWFLAKE: "Snowflake",
  TRENDMICRO: "Trendmicro",
  UPSOLVER: "Upsolver",
  VEEVA: "Veeva",
  ZENDESK: "Zendesk",
} as const;

/**
 * @public
 */
export type ConnectorType = (typeof ConnectorType)[keyof typeof ConnectorType];

/**
 * @public
 * @enum
 */
export const DataTransferApiType = {
  ASYNC: "ASYNC",
  AUTOMATIC: "AUTOMATIC",
  SYNC: "SYNC",
} as const;

/**
 * @public
 */
export type DataTransferApiType = (typeof DataTransferApiType)[keyof typeof DataTransferApiType];

/**
 * @public
 * <p>The API of the connector application that Amazon AppFlow uses to transfer your
 *       data.</p>
 */
export interface DataTransferApi {
  /**
   * @public
   * <p>The name of the connector application API.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>You can specify one of the following types:</p>
   *          <dl>
   *             <dt>AUTOMATIC</dt>
   *             <dd>
   *                <p>The default. Optimizes a flow for datasets that fluctuate in size from small to
   *             large. For each flow run, Amazon AppFlow chooses to use the SYNC or ASYNC API type
   *             based on the amount of data that the run transfers.</p>
   *             </dd>
   *             <dt>SYNC</dt>
   *             <dd>
   *                <p>A synchronous API. This type of API optimizes a flow for small to medium-sized
   *             datasets.</p>
   *             </dd>
   *             <dt>ASYNC</dt>
   *             <dd>
   *                <p>An asynchronous API. This type of API optimizes a flow for large datasets.</p>
   *             </dd>
   *          </dl>
   */
  Type?: DataTransferApiType;
}

/**
 * @public
 * @enum
 */
export const SupportedDataTransferType = {
  FILE: "FILE",
  RECORD: "RECORD",
} as const;

/**
 * @public
 */
export type SupportedDataTransferType = (typeof SupportedDataTransferType)[keyof typeof SupportedDataTransferType];

/**
 * @public
 * @enum
 */
export const Operators = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type Operators = (typeof Operators)[keyof typeof Operators];

/**
 * @public
 * @enum
 */
export const ScheduleFrequencyType = {
  BYMINUTE: "BYMINUTE",
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MONTHLY: "MONTHLY",
  ONCE: "ONCE",
  WEEKLY: "WEEKLY",
} as const;

/**
 * @public
 */
export type ScheduleFrequencyType = (typeof ScheduleFrequencyType)[keyof typeof ScheduleFrequencyType];

/**
 * @public
 * @enum
 */
export const TriggerType = {
  EVENT: "Event",
  ONDEMAND: "OnDemand",
  SCHEDULED: "Scheduled",
} as const;

/**
 * @public
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/**
 * @public
 * @enum
 */
export const WriteOperationType = {
  DELETE: "DELETE",
  INSERT: "INSERT",
  UPDATE: "UPDATE",
  UPSERT: "UPSERT",
} as const;

/**
 * @public
 */
export type WriteOperationType = (typeof WriteOperationType)[keyof typeof WriteOperationType];

/**
 * @public
 * <p> The configuration settings related to a given connector. </p>
 */
export interface ConnectorConfiguration {
  /**
   * @public
   * <p> Specifies whether the connector can be used as a source. </p>
   */
  canUseAsSource?: boolean;

  /**
   * @public
   * <p> Specifies whether the connector can be used as a destination. </p>
   */
  canUseAsDestination?: boolean;

  /**
   * @public
   * <p> Lists the connectors that are available for use as destinations. </p>
   */
  supportedDestinationConnectors?: ConnectorType[];

  /**
   * @public
   * <p> Specifies the supported flow frequency for that connector. </p>
   */
  supportedSchedulingFrequencies?: ScheduleFrequencyType[];

  /**
   * @public
   * <p> Specifies if PrivateLink is enabled for that connector. </p>
   */
  isPrivateLinkEnabled?: boolean;

  /**
   * @public
   * <p> Specifies if a PrivateLink endpoint URL is required. </p>
   */
  isPrivateLinkEndpointUrlRequired?: boolean;

  /**
   * @public
   * <p> Specifies the supported trigger types for the flow. </p>
   */
  supportedTriggerTypes?: TriggerType[];

  /**
   * @public
   * <p> Specifies connector-specific metadata such as <code>oAuthScopes</code>,
   *         <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. </p>
   */
  connectorMetadata?: ConnectorMetadata;

  /**
   * @public
   * <p>The connector type.</p>
   */
  connectorType?: ConnectorType;

  /**
   * @public
   * <p>The label used for registering the connector.</p>
   */
  connectorLabel?: string;

  /**
   * @public
   * <p>A description about the connector.</p>
   */
  connectorDescription?: string;

  /**
   * @public
   * <p>The owner who developed the connector.</p>
   */
  connectorOwner?: string;

  /**
   * @public
   * <p>The connector name.</p>
   */
  connectorName?: string;

  /**
   * @public
   * <p>The connector version.</p>
   */
  connectorVersion?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the registered connector.</p>
   */
  connectorArn?: string;

  /**
   * @public
   * <p>The connection modes that the connector supports.</p>
   */
  connectorModes?: string[];

  /**
   * @public
   * <p>The authentication config required for the connector.</p>
   */
  authenticationConfig?: AuthenticationConfig;

  /**
   * @public
   * <p>The required connector runtime settings.</p>
   */
  connectorRuntimeSettings?: ConnectorRuntimeSetting[];

  /**
   * @public
   * <p>A list of API versions that are supported by the connector.</p>
   */
  supportedApiVersions?: string[];

  /**
   * @public
   * <p>A list of operators supported by the connector.</p>
   */
  supportedOperators?: Operators[];

  /**
   * @public
   * <p>A list of write operations supported by the connector.</p>
   */
  supportedWriteOperations?: WriteOperationType[];

  /**
   * @public
   * <p>The provisioning type used to register the connector.</p>
   */
  connectorProvisioningType?: ConnectorProvisioningType;

  /**
   * @public
   * <p>The configuration required for registering the connector.</p>
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig;

  /**
   * @public
   * <p>Logo URL of the connector.</p>
   */
  logoURL?: string;

  /**
   * @public
   * <p>The date on which the connector was registered.</p>
   */
  registeredAt?: Date;

  /**
   * @public
   * <p>Information about who registered the connector.</p>
   */
  registeredBy?: string;

  /**
   * @public
   * <p>The data transfer types that the connector supports.</p>
   *          <dl>
   *             <dt>RECORD</dt>
   *             <dd>
   *                <p>Structured records.</p>
   *             </dd>
   *             <dt>FILE</dt>
   *             <dd>
   *                <p>Files or binary data.</p>
   *             </dd>
   *          </dl>
   */
  supportedDataTransferTypes?: SupportedDataTransferType[];

  /**
   * @public
   * <p>The APIs of the connector application that Amazon AppFlow can use to transfer your
   *       data.</p>
   */
  supportedDataTransferApis?: DataTransferApi[];
}

/**
 * @public
 * <p>Information about the registered connector.</p>
 */
export interface ConnectorDetail {
  /**
   * @public
   * <p>A description about the registered connector.</p>
   */
  connectorDescription?: string;

  /**
   * @public
   * <p>The name of the connector.</p>
   */
  connectorName?: string;

  /**
   * @public
   * <p>The owner of the connector.</p>
   */
  connectorOwner?: string;

  /**
   * @public
   * <p>The connector version.</p>
   */
  connectorVersion?: string;

  /**
   * @public
   * <p>The application type of the connector.</p>
   */
  applicationType?: string;

  /**
   * @public
   * <p>The connector type.</p>
   */
  connectorType?: ConnectorType;

  /**
   * @public
   * <p>A label used for the connector.</p>
   */
  connectorLabel?: string;

  /**
   * @public
   * <p>The time at which the connector was registered.</p>
   */
  registeredAt?: Date;

  /**
   * @public
   * <p>The user who registered the connector.</p>
   */
  registeredBy?: string;

  /**
   * @public
   * <p>The provisioning type that the connector uses.</p>
   */
  connectorProvisioningType?: ConnectorProvisioningType;

  /**
   * @public
   * <p>The connection mode that the connector supports.</p>
   */
  connectorModes?: string[];

  /**
   * @public
   * <p>The data transfer types that the connector supports.</p>
   *          <dl>
   *             <dt>RECORD</dt>
   *             <dd>
   *                <p>Structured records.</p>
   *             </dd>
   *             <dt>FILE</dt>
   *             <dd>
   *                <p>Files or binary data.</p>
   *             </dd>
   *          </dl>
   */
  supportedDataTransferTypes?: SupportedDataTransferType[];
}

/**
 * @public
 * <p> The high-level entity that can be queried in Amazon AppFlow. For example, a
 *       Salesforce entity might be an <i>Account</i> or
 *       <i>Opportunity</i>, whereas a ServiceNow entity might be an
 *         <i>Incident</i>. </p>
 */
export interface ConnectorEntity {
  /**
   * @public
   * <p> The name of the connector entity. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The label applied to the connector entity. </p>
   */
  label?: string;

  /**
   * @public
   * <p> Specifies whether the connector entity is a parent or a category and has more entities
   *       nested underneath it. If another call is made with <code>entitiesPath =
   *         "the_current_entity_name_with_hasNestedEntities_true"</code>, then it returns the nested
   *       entities underneath it. This provides a way to retrieve all supported entities in a recursive
   *       fashion. </p>
   */
  hasNestedEntities?: boolean;
}

/**
 * @public
 * <p> The properties that can be applied to a field when connector is being used as a
 *       destination. </p>
 */
export interface DestinationFieldProperties {
  /**
   * @public
   * <p> Specifies if the destination field can be created by the current user. </p>
   */
  isCreatable?: boolean;

  /**
   * @public
   * <p> Specifies if the destination field can have a null value. </p>
   */
  isNullable?: boolean;

  /**
   * @public
   * <p> Specifies if the flow run can either insert new rows in the destination field if they do
   *       not already exist, or update them if they do. </p>
   */
  isUpsertable?: boolean;

  /**
   * @public
   * <p> Specifies whether the field can be updated during an <code>UPDATE</code> or
   *         <code>UPSERT</code> write operation. </p>
   */
  isUpdatable?: boolean;

  /**
   * @public
   * <p>Specifies whether the field can use the default value during a Create operation.</p>
   */
  isDefaultedOnCreate?: boolean;

  /**
   * @public
   * <p> A list of supported write operations. For each write operation listed, this field can be
   *       used in <code>idFieldNames</code> when that write operation is present as a destination
   *       option. </p>
   */
  supportedWriteOperations?: WriteOperationType[];
}

/**
 * @public
 * <p> The properties that can be applied to a field when the connector is being used as a
 *       source. </p>
 */
export interface SourceFieldProperties {
  /**
   * @public
   * <p> Indicates whether the field can be returned in a search result. </p>
   */
  isRetrievable?: boolean;

  /**
   * @public
   * <p> Indicates if the field can be queried. </p>
   */
  isQueryable?: boolean;

  /**
   * @public
   * <p>Indicates if this timestamp field can be used for incremental queries.</p>
   */
  isTimestampFieldForIncrementalQueries?: boolean;
}

/**
 * @public
 * <p>The range of values that the property supports.</p>
 */
export interface Range {
  /**
   * @public
   * <p>Maximum value supported by the field.</p>
   */
  maximum?: number;

  /**
   * @public
   * <p>Minimum value supported by the field.</p>
   */
  minimum?: number;
}

/**
 * @public
 * @enum
 */
export const Operator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * <p> Contains details regarding the supported field type and the operators that can be applied
 *       for filtering. </p>
 */
export interface FieldTypeDetails {
  /**
   * @public
   * <p> The type of field, such as string, integer, date, and so on. </p>
   */
  fieldType: string | undefined;

  /**
   * @public
   * <p> The list of operators supported by a field. </p>
   */
  filterOperators: Operator[] | undefined;

  /**
   * @public
   * <p> The list of values that a field can contain. For example, a Boolean
   *         <code>fieldType</code> can have two values: "true" and "false". </p>
   */
  supportedValues?: string[];

  /**
   * @public
   * <p>The regular expression pattern for the field name.</p>
   */
  valueRegexPattern?: string;

  /**
   * @public
   * <p>The date format that the field supports.</p>
   */
  supportedDateFormat?: string;

  /**
   * @public
   * <p>The range of values this field can hold.</p>
   */
  fieldValueRange?: Range;

  /**
   * @public
   * <p>This is the allowable length range for this field's value.</p>
   */
  fieldLengthRange?: Range;
}

/**
 * @public
 * <p> Contains details regarding all the supported <code>FieldTypes</code> and their
 *       corresponding <code>filterOperators</code> and <code>supportedValues</code>. </p>
 */
export interface SupportedFieldTypeDetails {
  /**
   * @public
   * <p> The initial supported version for <code>fieldType</code>. If this is later changed to a
   *       different version, v2 will be introduced. </p>
   */
  v1: FieldTypeDetails | undefined;
}

/**
 * @public
 * <p> Describes the data model of a connector field. For example, for an
 *         <i>account</i> entity, the fields would be <i>account name</i>,
 *         <i>account ID</i>, and so on. </p>
 */
export interface ConnectorEntityField {
  /**
   * @public
   * <p> The unique identifier of the connector field. </p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The parent identifier of the connector field.</p>
   */
  parentIdentifier?: string;

  /**
   * @public
   * <p> The label applied to a connector entity field. </p>
   */
  label?: string;

  /**
   * @public
   * <p>Booelan value that indicates whether this field can be used as a primary key.</p>
   */
  isPrimaryKey?: boolean;

  /**
   * @public
   * <p>Default value that can be assigned to this field.</p>
   */
  defaultValue?: string;

  /**
   * @public
   * <p>Booelan value that indicates whether this field is deprecated or not.</p>
   */
  isDeprecated?: boolean;

  /**
   * @public
   * <p> Contains details regarding the supported <code>FieldType</code>, including the
   *       corresponding <code>filterOperators</code> and <code>supportedValues</code>. </p>
   */
  supportedFieldTypeDetails?: SupportedFieldTypeDetails;

  /**
   * @public
   * <p> A description of the connector entity field. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The properties that can be applied to a field when the connector is being used as a
   *       source. </p>
   */
  sourceProperties?: SourceFieldProperties;

  /**
   * @public
   * <p> The properties applied to a field when the connector is being used as a destination.
   *     </p>
   */
  destinationProperties?: DestinationFieldProperties;

  /**
   * @public
   * <p>A map that has specific properties related to the ConnectorEntityField.</p>
   */
  customProperties?: Record<string, string>;
}

/**
 * @public
 * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
 *       Google Analytics, Marketo, Zendesk, and Slack. </p>
 */
export interface ConnectorOAuthRequest {
  /**
   * @public
   * <p> The code provided by the connector when it has been authenticated via the connected app.
   *     </p>
   */
  authCode?: string;

  /**
   * @public
   * <p> The URL to which the authentication server redirects the browser after authorization has
   *       been granted. </p>
   */
  redirectUri?: string;
}

/**
 * @public
 * @enum
 */
export const DatadogConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type DatadogConnectorOperator = (typeof DatadogConnectorOperator)[keyof typeof DatadogConnectorOperator];

/**
 * @public
 * @enum
 */
export const DynatraceConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type DynatraceConnectorOperator = (typeof DynatraceConnectorOperator)[keyof typeof DynatraceConnectorOperator];

/**
 * @public
 * @enum
 */
export const GoogleAnalyticsConnectorOperator = {
  BETWEEN: "BETWEEN",
  PROJECTION: "PROJECTION",
} as const;

/**
 * @public
 */
export type GoogleAnalyticsConnectorOperator =
  (typeof GoogleAnalyticsConnectorOperator)[keyof typeof GoogleAnalyticsConnectorOperator];

/**
 * @public
 * @enum
 */
export const InforNexusConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type InforNexusConnectorOperator =
  (typeof InforNexusConnectorOperator)[keyof typeof InforNexusConnectorOperator];

/**
 * @public
 * @enum
 */
export const MarketoConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  GREATER_THAN: "GREATER_THAN",
  LESS_THAN: "LESS_THAN",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type MarketoConnectorOperator = (typeof MarketoConnectorOperator)[keyof typeof MarketoConnectorOperator];

/**
 * @public
 * @enum
 */
export const PardotConnectorOperator = {
  ADDITION: "ADDITION",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type PardotConnectorOperator = (typeof PardotConnectorOperator)[keyof typeof PardotConnectorOperator];

/**
 * @public
 * @enum
 */
export const S3ConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type S3ConnectorOperator = (typeof S3ConnectorOperator)[keyof typeof S3ConnectorOperator];

/**
 * @public
 * @enum
 */
export const SalesforceConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type SalesforceConnectorOperator =
  (typeof SalesforceConnectorOperator)[keyof typeof SalesforceConnectorOperator];

/**
 * @public
 * @enum
 */
export const SAPODataConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type SAPODataConnectorOperator = (typeof SAPODataConnectorOperator)[keyof typeof SAPODataConnectorOperator];

/**
 * @public
 * @enum
 */
export const ServiceNowConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type ServiceNowConnectorOperator =
  (typeof ServiceNowConnectorOperator)[keyof typeof ServiceNowConnectorOperator];

/**
 * @public
 * @enum
 */
export const SingularConnectorOperator = {
  ADDITION: "ADDITION",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type SingularConnectorOperator = (typeof SingularConnectorOperator)[keyof typeof SingularConnectorOperator];

/**
 * @public
 * @enum
 */
export const SlackConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type SlackConnectorOperator = (typeof SlackConnectorOperator)[keyof typeof SlackConnectorOperator];

/**
 * @public
 * @enum
 */
export const TrendmicroConnectorOperator = {
  ADDITION: "ADDITION",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type TrendmicroConnectorOperator =
  (typeof TrendmicroConnectorOperator)[keyof typeof TrendmicroConnectorOperator];

/**
 * @public
 * @enum
 */
export const VeevaConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type VeevaConnectorOperator = (typeof VeevaConnectorOperator)[keyof typeof VeevaConnectorOperator];

/**
 * @public
 * @enum
 */
export const ZendeskConnectorOperator = {
  ADDITION: "ADDITION",
  DIVISION: "DIVISION",
  GREATER_THAN: "GREATER_THAN",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;

/**
 * @public
 */
export type ZendeskConnectorOperator = (typeof ZendeskConnectorOperator)[keyof typeof ZendeskConnectorOperator];

/**
 * @public
 * <p> The operation to be performed on the provided source fields. </p>
 */
export interface ConnectorOperator {
  /**
   * @public
   * <p> The operation to be performed on the provided Amplitude source fields. </p>
   */
  Amplitude?: AmplitudeConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Datadog source fields. </p>
   */
  Datadog?: DatadogConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Dynatrace source fields. </p>
   */
  Dynatrace?: DynatraceConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Google Analytics source fields. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Infor Nexus source fields. </p>
   */
  InforNexus?: InforNexusConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Marketo source fields. </p>
   */
  Marketo?: MarketoConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Amazon S3 source fields. </p>
   */
  S3?: S3ConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Salesforce source fields. </p>
   */
  Salesforce?: SalesforceConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided ServiceNow source fields. </p>
   */
  ServiceNow?: ServiceNowConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Singular source fields. </p>
   */
  Singular?: SingularConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Slack source fields. </p>
   */
  Slack?: SlackConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Trend Micro source fields. </p>
   */
  Trendmicro?: TrendmicroConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Veeva source fields. </p>
   */
  Veeva?: VeevaConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided Zendesk source fields. </p>
   */
  Zendesk?: ZendeskConnectorOperator;

  /**
   * @public
   * <p> The operation to be performed on the provided SAPOData source fields. </p>
   */
  SAPOData?: SAPODataConnectorOperator;

  /**
   * @public
   * <p>Operators supported by the custom connector.</p>
   */
  CustomConnector?: Operator;

  /**
   * @public
   * <p>The operation to be performed on the provided Salesforce Pardot source fields.</p>
   */
  Pardot?: PardotConnectorOperator;
}

/**
 * @public
 * <p>The OAuth 2.0 properties required for OAuth 2.0 authentication.</p>
 */
export interface OAuth2Properties {
  /**
   * @public
   * <p>The token URL required for OAuth 2.0 authentication.</p>
   */
  tokenUrl: string | undefined;

  /**
   * @public
   * <p>The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication.</p>
   */
  oAuth2GrantType: OAuth2GrantType | undefined;

  /**
   * @public
   * <p>Associates your token URL with a map of properties that you define. Use this parameter to
   *       provide any additional details that the connector requires to authenticate your
   *       request.</p>
   */
  tokenUrlCustomProperties?: Record<string, string>;
}

/**
 * @public
 * <p>The profile properties required by the custom connector.</p>
 */
export interface CustomConnectorProfileProperties {
  /**
   * @public
   * <p>A map of properties that are required to create a profile for the custom connector.</p>
   */
  profileProperties?: Record<string, string>;

  /**
   * @public
   * <p>The OAuth 2.0 properties required for OAuth 2.0 authentication.</p>
   */
  oAuth2Properties?: OAuth2Properties;
}

/**
 * @public
 * <p> The connector-specific profile properties required by Datadog. </p>
 */
export interface DatadogConnectorProfileProperties {
  /**
   * @public
   * <p> The location of the Datadog resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile properties required by Dynatrace. </p>
 */
export interface DynatraceConnectorProfileProperties {
  /**
   * @public
   * <p> The location of the Dynatrace resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile properties required by Google Analytics. </p>
 */
export interface GoogleAnalyticsConnectorProfileProperties {}

/**
 * @public
 * <p> The connector-specific properties required when using Amazon Honeycode. </p>
 */
export interface HoneycodeConnectorProfileProperties {}

/**
 * @public
 * <p> The connector-specific profile properties required by Infor Nexus. </p>
 */
export interface InforNexusConnectorProfileProperties {
  /**
   * @public
   * <p> The location of the Infor Nexus resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile properties required when using Marketo. </p>
 */
export interface MarketoConnectorProfileProperties {
  /**
   * @public
   * <p> The location of the Marketo resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * @public
 * <p>The connector-specific profile properties required when using Salesforce Pardot.</p>
 */
export interface PardotConnectorProfileProperties {
  /**
   * @public
   * <p>The location of the Salesforce Pardot resource.</p>
   */
  instanceUrl?: string;

  /**
   * @public
   * <p>Indicates whether the connector profile applies to a sandbox or production
   *       environment.</p>
   */
  isSandboxEnvironment?: boolean;

  /**
   * @public
   * <p>The business unit id of Salesforce Pardot instance.</p>
   */
  businessUnitId?: string;
}

/**
 * @public
 * <p> The connector-specific profile properties when using Amazon Redshift. </p>
 */
export interface RedshiftConnectorProfileProperties {
  /**
   * @public
   * <p> The JDBC URL of the Amazon Redshift cluster. </p>
   */
  databaseUrl?: string;

  /**
   * @public
   * <p> A name for the associated Amazon S3 bucket. </p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of IAM role that grants Amazon Redshift
   *       read-only access to Amazon S3. For more information, and for the polices that you
   *       attach to this role, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#redshift-access-s3">Allow Amazon Redshift to access your Amazon AppFlow data in Amazon S3</a>.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that permits Amazon AppFlow to access your Amazon Redshift database through the Data API. For more
   *       information, and for the polices that you attach to this role, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#access-redshift">Allow Amazon AppFlow to access Amazon Redshift databases with the Data
   *         API</a>.</p>
   */
  dataApiRoleArn?: string;

  /**
   * @public
   * <p>Indicates whether the connector profile defines a connection to an Amazon Redshift
   *       Serverless data warehouse.</p>
   */
  isRedshiftServerless?: boolean;

  /**
   * @public
   * <p>The unique ID that's assigned to an Amazon Redshift cluster.</p>
   */
  clusterIdentifier?: string;

  /**
   * @public
   * <p>The name of an Amazon Redshift workgroup.</p>
   */
  workgroupName?: string;

  /**
   * @public
   * <p>The name of an Amazon Redshift database.</p>
   */
  databaseName?: string;
}

/**
 * @public
 * <p> The connector-specific profile properties required when using Salesforce. </p>
 */
export interface SalesforceConnectorProfileProperties {
  /**
   * @public
   * <p> The location of the Salesforce resource. </p>
   */
  instanceUrl?: string;

  /**
   * @public
   * <p> Indicates whether the connector profile applies to a sandbox or production environment.
   *     </p>
   */
  isSandboxEnvironment?: boolean;

  /**
   * @public
   * <p>If the connection mode for the connector profile is private, this parameter sets whether
   *         Amazon AppFlow uses the private network to send metadata and authorization calls to
   *       Salesforce. Amazon AppFlow sends private calls through Amazon Web Services PrivateLink. These
   *       calls travel through Amazon Web Services infrastructure without being exposed to the public
   *       internet.</p>
   *          <p>Set either of the following values:</p>
   *          <dl>
   *             <dt>true</dt>
   *             <dd>
   *                <p>Amazon AppFlow sends all calls to Salesforce over the private network.</p>
   *                <p>These private calls are:</p>
   *                <ul>
   *                   <li>
   *                      <p>Calls to get metadata about your Salesforce records. This metadata describes
   *                 your Salesforce objects and their fields.</p>
   *                   </li>
   *                   <li>
   *                      <p>Calls to get or refresh access tokens that allow Amazon AppFlow to access
   *                 your Salesforce records.</p>
   *                   </li>
   *                   <li>
   *                      <p>Calls to transfer your Salesforce records as part of a flow run.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>false</dt>
   *             <dd>
   *                <p>The default value. Amazon AppFlow sends some calls to Salesforce privately and
   *             other calls over the public internet.</p>
   *                <p>The public calls are: </p>
   *                <ul>
   *                   <li>
   *                      <p>Calls to get metadata about your Salesforce records.</p>
   *                   </li>
   *                   <li>
   *                      <p>Calls to get or refresh access tokens.</p>
   *                   </li>
   *                </ul>
   *                <p>The private calls are:</p>
   *                <ul>
   *                   <li>
   *                      <p>Calls to transfer your Salesforce records as part of a flow run.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   */
  usePrivateLinkForMetadataAndAuthorization?: boolean;
}

/**
 * @public
 * <p> The OAuth properties required for OAuth type authentication. </p>
 */
export interface OAuthProperties {
  /**
   * @public
   * <p> The token url required to fetch access/refresh tokens using authorization code and also
   *       to refresh expired access token using refresh token.</p>
   */
  tokenUrl: string | undefined;

  /**
   * @public
   * <p> The authorization code url required to redirect to SAP Login Page to fetch authorization
   *       code for OAuth type authentication. </p>
   */
  authCodeUrl: string | undefined;

  /**
   * @public
   * <p> The OAuth scopes required for OAuth type authentication. </p>
   */
  oAuthScopes: string[] | undefined;
}

/**
 * @public
 * <p> The connector-specific profile properties required when using SAPOData. </p>
 */
export interface SAPODataConnectorProfileProperties {
  /**
   * @public
   * <p> The location of the SAPOData resource. </p>
   */
  applicationHostUrl: string | undefined;

  /**
   * @public
   * <p> The application path to catalog service. </p>
   */
  applicationServicePath: string | undefined;

  /**
   * @public
   * <p> The port number of the SAPOData instance. </p>
   */
  portNumber: number | undefined;

  /**
   * @public
   * <p> The client number for the client creating the connection. </p>
   */
  clientNumber: string | undefined;

  /**
   * @public
   * <p> The logon language of SAPOData instance. </p>
   */
  logonLanguage?: string;

  /**
   * @public
   * <p> The SAPOData Private Link service name to be used for private data transfers. </p>
   */
  privateLinkServiceName?: string;

  /**
   * @public
   * <p> The SAPOData OAuth properties required for OAuth type authentication. </p>
   */
  oAuthProperties?: OAuthProperties;

  /**
   * @public
   * <p>If you set this parameter to <code>true</code>, Amazon AppFlow bypasses the single
   *       sign-on (SSO) settings in your SAP account when it accesses your SAP OData instance.</p>
   *          <p>Whether you need this option depends on the types of credentials that you applied to your
   *       SAP OData connection profile. If your profile uses basic authentication credentials, SAP SSO
   *       can prevent Amazon AppFlow from connecting to your account with your username and
   *       password. In this case, bypassing SSO makes it possible for Amazon AppFlow to connect
   *       successfully. However, if your profile uses OAuth credentials, this parameter has no
   *       affect.</p>
   */
  disableSSO?: boolean;
}

/**
 * @public
 * <p> The connector-specific profile properties required when using ServiceNow. </p>
 */
export interface ServiceNowConnectorProfileProperties {
  /**
   * @public
   * <p> The location of the ServiceNow resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile properties required when using Singular. </p>
 */
export interface SingularConnectorProfileProperties {}

/**
 * @public
 * <p> The connector-specific profile properties required when using Slack. </p>
 */
export interface SlackConnectorProfileProperties {
  /**
   * @public
   * <p> The location of the Slack resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile properties required when using Snowflake. </p>
 */
export interface SnowflakeConnectorProfileProperties {
  /**
   * @public
   * <p> The name of the Snowflake warehouse. </p>
   */
  warehouse: string | undefined;

  /**
   * @public
   * <p> The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: <
   *       Database>< Schema><Stage Name>. </p>
   */
  stage: string | undefined;

  /**
   * @public
   * <p> The name of the Amazon S3 bucket associated with Snowflake. </p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p> The bucket path that refers to the Amazon S3 bucket associated with Snowflake.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * @public
   * <p> The Snowflake Private Link service name to be used for private data transfers. </p>
   */
  privateLinkServiceName?: string;

  /**
   * @public
   * <p> The name of the account. </p>
   */
  accountName?: string;

  /**
   * @public
   * <p> The Amazon Web Services Region of the Snowflake account. </p>
   */
  region?: string;
}

/**
 * @public
 * <p> The connector-specific profile properties required when using Trend Micro. </p>
 */
export interface TrendmicroConnectorProfileProperties {}

/**
 * @public
 * <p> The connector-specific profile properties required when using Veeva. </p>
 */
export interface VeevaConnectorProfileProperties {
  /**
   * @public
   * <p> The location of the Veeva resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile properties required when using Zendesk. </p>
 */
export interface ZendeskConnectorProfileProperties {
  /**
   * @public
   * <p> The location of the Zendesk resource. </p>
   */
  instanceUrl: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile properties required by each connector. </p>
 */
export interface ConnectorProfileProperties {
  /**
   * @public
   * <p> The connector-specific properties required by Amplitude. </p>
   */
  Amplitude?: AmplitudeConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Datadog. </p>
   */
  Datadog?: DatadogConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Dynatrace. </p>
   */
  Dynatrace?: DynatraceConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Infor Nexus. </p>
   */
  InforNexus?: InforNexusConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Marketo. </p>
   */
  Marketo?: MarketoConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Amazon Redshift. </p>
   */
  Redshift?: RedshiftConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Salesforce. </p>
   */
  Salesforce?: SalesforceConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by serviceNow. </p>
   */
  ServiceNow?: ServiceNowConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Singular. </p>
   */
  Singular?: SingularConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Slack. </p>
   */
  Slack?: SlackConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Snowflake. </p>
   */
  Snowflake?: SnowflakeConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Trend Micro. </p>
   */
  Trendmicro?: TrendmicroConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Veeva. </p>
   */
  Veeva?: VeevaConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific properties required by Zendesk. </p>
   */
  Zendesk?: ZendeskConnectorProfileProperties;

  /**
   * @public
   * <p> The connector-specific profile properties required when using SAPOData. </p>
   */
  SAPOData?: SAPODataConnectorProfileProperties;

  /**
   * @public
   * <p>The properties required by the custom connector.</p>
   */
  CustomConnector?: CustomConnectorProfileProperties;

  /**
   * @public
   * <p>The connector-specific properties required by Salesforce Pardot.</p>
   */
  Pardot?: PardotConnectorProfileProperties;
}

/**
 * @public
 * @enum
 */
export const PrivateConnectionProvisioningFailureCause = {
  ACCESS_DENIED: "ACCESS_DENIED",
  CONNECTOR_AUTHENTICATION: "CONNECTOR_AUTHENTICATION",
  CONNECTOR_SERVER: "CONNECTOR_SERVER",
  INTERNAL_SERVER: "INTERNAL_SERVER",
  VALIDATION: "VALIDATION",
} as const;

/**
 * @public
 */
export type PrivateConnectionProvisioningFailureCause =
  (typeof PrivateConnectionProvisioningFailureCause)[keyof typeof PrivateConnectionProvisioningFailureCause];

/**
 * @public
 * @enum
 */
export const PrivateConnectionProvisioningStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type PrivateConnectionProvisioningStatus =
  (typeof PrivateConnectionProvisioningStatus)[keyof typeof PrivateConnectionProvisioningStatus];

/**
 * @public
 * <p> Specifies the private connection provisioning state. </p>
 */
export interface PrivateConnectionProvisioningState {
  /**
   * @public
   * <p> Specifies the private connection provisioning status. </p>
   */
  status?: PrivateConnectionProvisioningStatus;

  /**
   * @public
   * <p> Specifies the private connection provisioning failure reason. </p>
   */
  failureMessage?: string;

  /**
   * @public
   * <p> Specifies the private connection provisioning failure cause. </p>
   */
  failureCause?: PrivateConnectionProvisioningFailureCause;
}

/**
 * @public
 * <p> Describes an instance of a connector. This includes the provided name, credentials ARN,
 *       connection-mode, and so on. To keep the API intuitive and extensible, the fields that are
 *       common to all types of connector profiles are explicitly specified at the top level. The rest
 *       of the connector-specific properties are available via the
 *         <code>connectorProfileProperties</code> field. </p>
 */
export interface ConnectorProfile {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   */
  connectorProfileArn?: string;

  /**
   * @public
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;

  /**
   * @public
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType;

  /**
   * @public
   * <p>The label for the connector profile being created.</p>
   */
  connectorLabel?: string;

  /**
   * @public
   * <p> Indicates the connection mode and if it is public or private. </p>
   */
  connectionMode?: ConnectionMode;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the connector profile credentials. </p>
   */
  credentialsArn?: string;

  /**
   * @public
   * <p> The connector-specific properties of the profile configuration. </p>
   */
  connectorProfileProperties?: ConnectorProfileProperties;

  /**
   * @public
   * <p> Specifies when the connector profile was created. </p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p> Specifies when the connector profile was last updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p> Specifies the private connection provisioning state. </p>
   */
  privateConnectionProvisioningState?: PrivateConnectionProvisioningState;
}

/**
 * @public
 * <p>The custom credentials required for custom authentication.</p>
 */
export interface CustomAuthCredentials {
  /**
   * @public
   * <p>The custom authentication type that the connector uses.</p>
   */
  customAuthenticationType: string | undefined;

  /**
   * @public
   * <p>A map that holds custom authentication credentials.</p>
   */
  credentialsMap?: Record<string, string>;
}

/**
 * @public
 * <p>The OAuth 2.0 credentials required for OAuth 2.0 authentication.</p>
 */
export interface OAuth2Credentials {
  /**
   * @public
   * <p>The identifier for the desired client.</p>
   */
  clientId?: string;

  /**
   * @public
   * <p>The client secret used by the OAuth client to authenticate to the authorization
   *       server.</p>
   */
  clientSecret?: string;

  /**
   * @public
   * <p>The access token used to access the connector on your behalf.</p>
   */
  accessToken?: string;

  /**
   * @public
   * <p>The refresh token used to refresh an expired access token.</p>
   */
  refreshToken?: string;

  /**
   * @public
   * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
   *       Google Analytics, Marketo, Zendesk, and Slack. </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * @public
 * <p>The connector-specific profile credentials that are required when using the custom
 *       connector.</p>
 */
export interface CustomConnectorProfileCredentials {
  /**
   * @public
   * <p>The authentication type that the custom connector uses for authenticating while creating a
   *       connector profile.</p>
   */
  authenticationType: AuthenticationType | undefined;

  /**
   * @public
   * <p>The basic credentials that are required for the authentication of the user.</p>
   */
  basic?: BasicAuthCredentials;

  /**
   * @public
   * <p>The OAuth 2.0 credentials required for the authentication of the user.</p>
   */
  oauth2?: OAuth2Credentials;

  /**
   * @public
   * <p>The API keys required for the authentication of the user.</p>
   */
  apiKey?: ApiKeyCredentials;

  /**
   * @public
   * <p>If the connector uses the custom authentication mechanism, this holds the required
   *       credentials.</p>
   */
  custom?: CustomAuthCredentials;
}

/**
 * @public
 * <p> The connector-specific credentials required by Datadog. </p>
 */
export interface DatadogConnectorProfileCredentials {
  /**
   * @public
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   */
  apiKey: string | undefined;

  /**
   * @public
   * <p> Application keys, in conjunction with your API key, give you full access to Datadog’s
   *       programmatic API. Application keys are associated with the user account that created them. The
   *       application key is used to log all requests made to the API. </p>
   */
  applicationKey: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile credentials required by Dynatrace. </p>
 */
export interface DynatraceConnectorProfileCredentials {
  /**
   * @public
   * <p> The API tokens used by Dynatrace API to authenticate various API calls. </p>
   */
  apiToken: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile credentials required by Google Analytics. </p>
 */
export interface GoogleAnalyticsConnectorProfileCredentials {
  /**
   * @public
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * @public
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * @public
   * <p> The credentials used to access protected Google Analytics resources. </p>
   */
  accessToken?: string;

  /**
   * @public
   * <p> The credentials used to acquire new access tokens. This is required only for OAuth2
   *       access tokens, and is not required for OAuth1 access tokens. </p>
   */
  refreshToken?: string;

  /**
   * @public
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * @public
 * <p> The connector-specific credentials required when using Amazon Honeycode. </p>
 */
export interface HoneycodeConnectorProfileCredentials {
  /**
   * @public
   * <p> The credentials used to access protected Amazon Honeycode resources. </p>
   */
  accessToken?: string;

  /**
   * @public
   * <p> The credentials used to acquire new access tokens. </p>
   */
  refreshToken?: string;

  /**
   * @public
   * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
   *       Google Analytics, Marketo, Zendesk, and Slack. </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * @public
 * <p> The connector-specific profile credentials required by Infor Nexus. </p>
 */
export interface InforNexusConnectorProfileCredentials {
  /**
   * @public
   * <p> The Access Key portion of the credentials. </p>
   */
  accessKeyId: string | undefined;

  /**
   * @public
   * <p> The identifier for the user. </p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p> The secret key used to sign requests. </p>
   */
  secretAccessKey: string | undefined;

  /**
   * @public
   * <p> The encryption keys used to encrypt data. </p>
   */
  datakey: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile credentials required by Marketo. </p>
 */
export interface MarketoConnectorProfileCredentials {
  /**
   * @public
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * @public
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * @public
   * <p> The credentials used to access protected Marketo resources. </p>
   */
  accessToken?: string;

  /**
   * @public
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * @public
 * <p>The connector-specific profile credentials required when using Salesforce Pardot.</p>
 */
export interface PardotConnectorProfileCredentials {
  /**
   * @public
   * <p>The credentials used to access protected Salesforce Pardot resources.</p>
   */
  accessToken?: string;

  /**
   * @public
   * <p>The credentials used to acquire new access tokens.</p>
   */
  refreshToken?: string;

  /**
   * @public
   * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
   *       Google Analytics, Marketo, Zendesk, and Slack. </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;

  /**
   * @public
   * <p>The secret manager ARN, which contains the client ID and client secret of the connected
   *       app.</p>
   */
  clientCredentialsArn?: string;
}

/**
 * @public
 * <p> The connector-specific profile credentials required when using Amazon Redshift. </p>
 */
export interface RedshiftConnectorProfileCredentials {
  /**
   * @public
   * <p> The name of the user. </p>
   */
  username?: string;

  /**
   * @public
   * <p> The password that corresponds to the user name. </p>
   */
  password?: string;
}

/**
 * @public
 * <p> The connector-specific profile credentials required when using Salesforce. </p>
 */
export interface SalesforceConnectorProfileCredentials {
  /**
   * @public
   * <p> The credentials used to access protected Salesforce resources. </p>
   */
  accessToken?: string;

  /**
   * @public
   * <p> The credentials used to acquire new access tokens. </p>
   */
  refreshToken?: string;

  /**
   * @public
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;

  /**
   * @public
   * <p> The secret manager ARN, which contains the client ID and client secret of the connected
   *       app. </p>
   */
  clientCredentialsArn?: string;

  /**
   * @public
   * <p>Specifies the OAuth 2.0 grant type that Amazon AppFlow uses when it requests an
   *       access token from Salesforce. Amazon AppFlow requires an access token each time it
   *       attempts to access your Salesforce records.</p>
   *          <p>You can specify one of the following values:</p>
   *          <dl>
   *             <dt>AUTHORIZATION_CODE</dt>
   *             <dd>
   *                <p>Amazon AppFlow passes an authorization code when it requests the access token
   *             from Salesforce. Amazon AppFlow receives the authorization code from Salesforce
   *             after you log in to your Salesforce account and authorize Amazon AppFlow to access
   *             your records.</p>
   *             </dd>
   *             <dt>CLIENT_CREDENTIALS</dt>
   *             <dd>
   *                <p>Amazon AppFlow passes client credentials (a client ID and client secret) when
   *             it requests the access token from Salesforce. You provide these credentials to Amazon AppFlow when you define the connection to your Salesforce account.</p>
   *             </dd>
   *             <dt>JWT_BEARER</dt>
   *             <dd>
   *                <p>Amazon AppFlow passes a JSON web token (JWT) when it requests the access token
   *             from Salesforce. You provide the JWT to Amazon AppFlow when you define the
   *             connection to your Salesforce account. When you use this grant type, you don't need to
   *             log in to your Salesforce account to authorize Amazon AppFlow to access your
   *             records.</p>
   *             </dd>
   *          </dl>
   */
  oAuth2GrantType?: OAuth2GrantType;

  /**
   * @public
   * <p>A JSON web token (JWT) that authorizes Amazon AppFlow to access your Salesforce
   *       records.</p>
   */
  jwtToken?: string;
}

/**
 * @public
 * <p> The OAuth credentials required for OAuth type authentication. </p>
 */
export interface OAuthCredentials {
  /**
   * @public
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * @public
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * @public
   * <p> The access token used to access protected SAPOData resources. </p>
   */
  accessToken?: string;

  /**
   * @public
   * <p> The refresh token used to refresh expired access token. </p>
   */
  refreshToken?: string;

  /**
   * @public
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * @public
 * <p> The connector-specific profile credentials required when using SAPOData. </p>
 */
export interface SAPODataConnectorProfileCredentials {
  /**
   * @public
   * <p> The SAPOData basic authentication credentials. </p>
   */
  basicAuthCredentials?: BasicAuthCredentials;

  /**
   * @public
   * <p> The SAPOData OAuth type authentication credentials. </p>
   */
  oAuthCredentials?: OAuthCredentials;
}

/**
 * @public
 * <p> The connector-specific profile credentials required when using ServiceNow. </p>
 */
export interface ServiceNowConnectorProfileCredentials {
  /**
   * @public
   * <p> The name of the user. </p>
   */
  username?: string;

  /**
   * @public
   * <p> The password that corresponds to the user name. </p>
   */
  password?: string;

  /**
   * @public
   * <p> The OAuth 2.0 credentials required to authenticate the user. </p>
   */
  oAuth2Credentials?: OAuth2Credentials;
}

/**
 * @public
 * <p> The connector-specific profile credentials required when using Singular. </p>
 */
export interface SingularConnectorProfileCredentials {
  /**
   * @public
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   */
  apiKey: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile credentials required when using Slack. </p>
 */
export interface SlackConnectorProfileCredentials {
  /**
   * @public
   * <p> The identifier for the client. </p>
   */
  clientId: string | undefined;

  /**
   * @public
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * @public
   * <p> The credentials used to access protected Slack resources. </p>
   */
  accessToken?: string;

  /**
   * @public
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * @public
 * <p> The connector-specific profile credentials required when using Snowflake. </p>
 */
export interface SnowflakeConnectorProfileCredentials {
  /**
   * @public
   * <p> The name of the user. </p>
   */
  username: string | undefined;

  /**
   * @public
   * <p> The password that corresponds to the user name. </p>
   */
  password: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile credentials required when using Trend Micro. </p>
 */
export interface TrendmicroConnectorProfileCredentials {
  /**
   * @public
   * <p> The Secret Access Key portion of the credentials. </p>
   */
  apiSecretKey: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile credentials required when using Veeva. </p>
 */
export interface VeevaConnectorProfileCredentials {
  /**
   * @public
   * <p> The name of the user. </p>
   */
  username: string | undefined;

  /**
   * @public
   * <p> The password that corresponds to the user name. </p>
   */
  password: string | undefined;
}

/**
 * @public
 * <p> The connector-specific profile credentials required when using Zendesk. </p>
 */
export interface ZendeskConnectorProfileCredentials {
  /**
   * @public
   * <p> The identifier for the desired client. </p>
   */
  clientId: string | undefined;

  /**
   * @public
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   */
  clientSecret: string | undefined;

  /**
   * @public
   * <p> The credentials used to access protected Zendesk resources. </p>
   */
  accessToken?: string;

  /**
   * @public
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   */
  oAuthRequest?: ConnectorOAuthRequest;
}

/**
 * @public
 * <p> The connector-specific credentials required by a connector. </p>
 */
export interface ConnectorProfileCredentials {
  /**
   * @public
   * <p> The connector-specific credentials required when using Amplitude. </p>
   */
  Amplitude?: AmplitudeConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Datadog. </p>
   */
  Datadog?: DatadogConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Dynatrace. </p>
   */
  Dynatrace?: DynatraceConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Infor Nexus. </p>
   */
  InforNexus?: InforNexusConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Marketo. </p>
   */
  Marketo?: MarketoConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Amazon Redshift. </p>
   */
  Redshift?: RedshiftConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Salesforce. </p>
   */
  Salesforce?: SalesforceConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using ServiceNow. </p>
   */
  ServiceNow?: ServiceNowConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Singular. </p>
   */
  Singular?: SingularConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Slack. </p>
   */
  Slack?: SlackConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Snowflake. </p>
   */
  Snowflake?: SnowflakeConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Trend Micro. </p>
   */
  Trendmicro?: TrendmicroConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Veeva. </p>
   */
  Veeva?: VeevaConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific credentials required when using Zendesk. </p>
   */
  Zendesk?: ZendeskConnectorProfileCredentials;

  /**
   * @public
   * <p> The connector-specific profile credentials required when using SAPOData. </p>
   */
  SAPOData?: SAPODataConnectorProfileCredentials;

  /**
   * @public
   * <p>The connector-specific profile credentials that are required when using the custom
   *       connector.</p>
   */
  CustomConnector?: CustomConnectorProfileCredentials;

  /**
   * @public
   * <p>The connector-specific credentials required when using Salesforce Pardot.</p>
   */
  Pardot?: PardotConnectorProfileCredentials;
}

/**
 * @public
 * <p> Defines the connector-specific configuration and credentials for the connector profile.
 *     </p>
 */
export interface ConnectorProfileConfig {
  /**
   * @public
   * <p> The connector-specific properties of the profile configuration. </p>
   */
  connectorProfileProperties: ConnectorProfileProperties | undefined;

  /**
   * @public
   * <p> The connector-specific credentials required by each connector. </p>
   */
  connectorProfileCredentials?: ConnectorProfileCredentials;
}

/**
 * @public
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

/**
 * @public
 */
export interface CreateConnectorProfileRequest {
  /**
   * @public
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in your Amazon Web Services account. </p>
   */
  connectorProfileName: string | undefined;

  /**
   * @public
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS
   *       key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. </p>
   */
  kmsArn?: string;

  /**
   * @public
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType: ConnectorType | undefined;

  /**
   * @public
   * <p>The label of the connector. The label is unique for each
   *         <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if
   *       calling for CUSTOMCONNECTOR connector type/.</p>
   */
  connectorLabel?: string;

  /**
   * @public
   * <p> Indicates the connection mode and specifies whether it is public or private. Private
   *       flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure
   *       without exposing it to the public internet. </p>
   */
  connectionMode: ConnectionMode | undefined;

  /**
   * @public
   * <p> Defines the connector-specific configuration and credentials. </p>
   */
  connectorProfileConfig: ConnectorProfileConfig | undefined;

  /**
   * @public
   * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your
   *         <code>CreateConnectorProfile</code> request completes only once. You choose the value to
   *       pass. For example, if you don't receive a response from your request, you can safely retry the
   *       request with the same <code>clientToken</code> parameter value.</p>
   *          <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are
   *       using inserts a value for you. This way, the SDK can safely retry requests multiple times
   *       after a network error. You must provide your own value for other use cases.</p>
   *          <p>If you specify input parameters that differ from your first request, an error occurs. If
   *       you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new
   *       call to <code>CreateConnectorProfile</code>. The token is active for 8 hours.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateConnectorProfileResponse {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   */
  connectorProfileArn?: string;
}

/**
 * @public
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
 * @public
 * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
 *       the destination. For example, this setting would determine if the flow should fail after one
 *       insertion error, or continue and attempt to insert every record regardless of the initial
 *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
 *     </p>
 */
export interface ErrorHandlingConfig {
  /**
   * @public
   * <p> Specifies if the flow should fail after the first instance of a failure when attempting
   *       to place data in the destination. </p>
   */
  failOnFirstDestinationError?: boolean;

  /**
   * @public
   * <p> Specifies the Amazon S3 bucket prefix. </p>
   */
  bucketPrefix?: string;

  /**
   * @public
   * <p> Specifies the name of the Amazon S3 bucket. </p>
   */
  bucketName?: string;
}

/**
 * @public
 * <p>The properties that are applied when the custom connector is being used as a
 *       destination.</p>
 */
export interface CustomConnectorDestinationProperties {
  /**
   * @public
   * <p>The entity specified in the custom connector as a destination in the flow.</p>
   */
  entityName: string | undefined;

  /**
   * @public
   * <p>The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the custom connector as destination.</p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;

  /**
   * @public
   * <p>Specifies the type of write operation to be performed in the custom connector when it's
   *       used as destination.</p>
   */
  writeOperationType?: WriteOperationType;

  /**
   * @public
   * <p>The name of the field that Amazon AppFlow uses as an ID when performing a write
   *       operation such as update, delete, or upsert.</p>
   */
  idFieldNames?: string[];

  /**
   * @public
   * <p>The custom properties that are specific to the connector when it's used as a destination
   *       in the flow.</p>
   */
  customProperties?: Record<string, string>;
}

/**
 * @public
 * <p> The properties that are applied when Amazon Connect Customer Profiles is used as a
 *       destination. </p>
 */
export interface CustomerProfilesDestinationProperties {
  /**
   * @public
   * <p> The unique name of the Amazon Connect Customer Profiles domain. </p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p> The object specified in the Amazon Connect Customer Profiles flow destination.
   *     </p>
   */
  objectTypeName?: string;
}

/**
 * @public
 * <p> The properties that are applied when Amazon EventBridge is being used as a
 *       destination. </p>
 */
export interface EventBridgeDestinationProperties {
  /**
   * @public
   * <p> The object specified in the Amazon EventBridge flow destination. </p>
   */
  object: string | undefined;

  /**
   * @public
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

/**
 * @public
 * <p> The properties that are applied when Amazon Honeycode is used as a destination. </p>
 */
export interface HoneycodeDestinationProperties {
  /**
   * @public
   * <p> The object specified in the Amazon Honeycode flow destination. </p>
   */
  object: string | undefined;

  /**
   * @public
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

/**
 * @public
 * <p> The properties that are applied when Amazon Lookout for Metrics is used as a destination.
 *     </p>
 */
export interface LookoutMetricsDestinationProperties {}

/**
 * @public
 * <p>The properties that Amazon AppFlow applies when you use Marketo as a flow
 *       destination.</p>
 */
export interface MarketoDestinationProperties {
  /**
   * @public
   * <p>The object specified in the Marketo flow destination.</p>
   */
  object: string | undefined;

  /**
   * @public
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

/**
 * @public
 * <p> The properties that are applied when Amazon Redshift is being used as a destination.
 *     </p>
 */
export interface RedshiftDestinationProperties {
  /**
   * @public
   * <p> The object specified in the Amazon Redshift flow destination. </p>
   */
  object: string | undefined;

  /**
   * @public
   * <p> The intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift. </p>
   */
  intermediateBucketName: string | undefined;

  /**
   * @public
   * <p> The object key for the bucket in which Amazon AppFlow places the destination files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * @public
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the Amazon Redshift destination. For example, this setting would determine if the flow
   *       should fail after one insertion error, or continue and attempt to insert every record
   *       regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the
   *       destination connector details. </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

/**
 * @public
 * @enum
 */
export const FileType = {
  CSV: "CSV",
  JSON: "JSON",
  PARQUET: "PARQUET",
} as const;

/**
 * @public
 */
export type FileType = (typeof FileType)[keyof typeof FileType];

/**
 * @public
 * @enum
 */
export const PathPrefix = {
  EXECUTION_ID: "EXECUTION_ID",
  SCHEMA_VERSION: "SCHEMA_VERSION",
} as const;

/**
 * @public
 */
export type PathPrefix = (typeof PathPrefix)[keyof typeof PathPrefix];

/**
 * @public
 * @enum
 */
export const PrefixFormat = {
  DAY: "DAY",
  HOUR: "HOUR",
  MINUTE: "MINUTE",
  MONTH: "MONTH",
  YEAR: "YEAR",
} as const;

/**
 * @public
 */
export type PrefixFormat = (typeof PrefixFormat)[keyof typeof PrefixFormat];

/**
 * @public
 * @enum
 */
export const PrefixType = {
  FILENAME: "FILENAME",
  PATH: "PATH",
  PATH_AND_FILENAME: "PATH_AND_FILENAME",
} as const;

/**
 * @public
 */
export type PrefixType = (typeof PrefixType)[keyof typeof PrefixType];

/**
 * @public
 * <p>Specifies elements that Amazon AppFlow includes in the file and folder names in the flow
 *       destination.</p>
 */
export interface PrefixConfig {
  /**
   * @public
   * <p>Determines the format of the prefix, and whether it applies to the file name, file path,
   *       or both. </p>
   */
  prefixType?: PrefixType;

  /**
   * @public
   * <p>Determines the level of granularity for the date and time that's included in the prefix.
   *     </p>
   */
  prefixFormat?: PrefixFormat;

  /**
   * @public
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
  pathPrefixHierarchy?: PathPrefix[];
}

/**
 * @public
 * <p> The configuration that determines how Amazon AppFlow should format the flow output
 *       data when Amazon S3 is used as the destination. </p>
 */
export interface S3OutputFormatConfig {
  /**
   * @public
   * <p> Indicates the file type that Amazon AppFlow places in the Amazon S3 bucket.
   *     </p>
   */
  fileType?: FileType;

  /**
   * @public
   * <p> Determines the prefix that Amazon AppFlow applies to the folder name in the Amazon S3 bucket. You can name folders according to the flow frequency and date. </p>
   */
  prefixConfig?: PrefixConfig;

  /**
   * @public
   * <p> The aggregation settings that you can use to customize the output format of your flow
   *       data. </p>
   */
  aggregationConfig?: AggregationConfig;

  /**
   * @public
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
 * @public
 * <p> The properties that are applied when Amazon S3 is used as a destination. </p>
 */
export interface S3DestinationProperties {
  /**
   * @public
   * <p> The Amazon S3 bucket name in which Amazon AppFlow places the transferred
   *       data. </p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * @public
   * <p> The configuration that determines how Amazon AppFlow should format the flow output
   *       data when Amazon S3 is used as the destination. </p>
   */
  s3OutputFormatConfig?: S3OutputFormatConfig;
}

/**
 * @public
 * <p> The properties that are applied when Salesforce is being used as a destination. </p>
 */
export interface SalesforceDestinationProperties {
  /**
   * @public
   * <p> The object specified in the Salesforce flow destination. </p>
   */
  object: string | undefined;

  /**
   * @public
   * <p> The name of the field that Amazon AppFlow uses as an ID when performing a write
   *       operation such as update or delete. </p>
   */
  idFieldNames?: string[];

  /**
   * @public
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the Salesforce destination. For example, this setting would determine if the flow should fail
   *       after one insertion error, or continue and attempt to insert every record regardless of the
   *       initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector
   *       details. </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;

  /**
   * @public
   * <p> This specifies the type of write operation to be performed in Salesforce. When the value
   *       is <code>UPSERT</code>, then <code>idFieldNames</code> is required. </p>
   */
  writeOperationType?: WriteOperationType;

  /**
   * @public
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
  dataTransferApi?: SalesforceDataTransferApi;
}

/**
 * @public
 * <p>Determines how Amazon AppFlow handles the success response that it gets from the
 *       connector after placing data.</p>
 *          <p>For example, this setting would determine where to write the response from the destination
 *       connector upon a successful insert operation.</p>
 */
export interface SuccessResponseHandlingConfig {
  /**
   * @public
   * <p>The Amazon S3 bucket prefix.</p>
   */
  bucketPrefix?: string;

  /**
   * @public
   * <p>The name of the Amazon S3 bucket.</p>
   */
  bucketName?: string;
}

/**
 * @public
 * <p>The properties that are applied when using SAPOData as a flow destination</p>
 */
export interface SAPODataDestinationProperties {
  /**
   * @public
   * <p>The object path specified in the SAPOData flow destination.</p>
   */
  objectPath: string | undefined;

  /**
   * @public
   * <p>Determines how Amazon AppFlow handles the success response that it gets from the
   *       connector after placing data.</p>
   *          <p>For example, this setting would determine where to write the response from a destination
   *       connector upon a successful insert operation.</p>
   */
  successResponseHandlingConfig?: SuccessResponseHandlingConfig;

  /**
   * @public
   * <p> A list of field names that can be used as an ID field when performing a write operation.
   *     </p>
   */
  idFieldNames?: string[];

  /**
   * @public
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;

  /**
   * @public
   * <p> The possible write operations in the destination connector. When this value is not
   *       provided, this defaults to the <code>INSERT</code> operation. </p>
   */
  writeOperationType?: WriteOperationType;
}

/**
 * @public
 * <p> The properties that are applied when Snowflake is being used as a destination. </p>
 */
export interface SnowflakeDestinationProperties {
  /**
   * @public
   * <p> The object specified in the Snowflake flow destination. </p>
   */
  object: string | undefined;

  /**
   * @public
   * <p> The intermediate bucket that Amazon AppFlow uses when moving data into Snowflake.
   *     </p>
   */
  intermediateBucketName: string | undefined;

  /**
   * @public
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * @public
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the Snowflake destination. For example, this setting would determine if the flow should fail
   *       after one insertion error, or continue and attempt to insert every record regardless of the
   *       initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector
   *       details. </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;
}

/**
 * @public
 * <p> The configuration that determines how Amazon AppFlow formats the flow output data
 *       when Upsolver is used as the destination. </p>
 */
export interface UpsolverS3OutputFormatConfig {
  /**
   * @public
   * <p> Indicates the file type that Amazon AppFlow places in the Upsolver Amazon S3
   *       bucket. </p>
   */
  fileType?: FileType;

  /**
   * @public
   * <p>Specifies elements that Amazon AppFlow includes in the file and folder names in the flow
   *       destination.</p>
   */
  prefixConfig: PrefixConfig | undefined;

  /**
   * @public
   * <p> The aggregation settings that you can use to customize the output format of your flow
   *       data. </p>
   */
  aggregationConfig?: AggregationConfig;
}

/**
 * @public
 * <p> The properties that are applied when Upsolver is used as a destination. </p>
 */
export interface UpsolverDestinationProperties {
  /**
   * @public
   * <p> The Upsolver Amazon S3 bucket name in which Amazon AppFlow places the
   *       transferred data. </p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p> The object key for the destination Upsolver Amazon S3 bucket in which Amazon AppFlow places the files. </p>
   */
  bucketPrefix?: string;

  /**
   * @public
   * <p> The configuration that determines how data is formatted when Upsolver is used as the flow
   *       destination. </p>
   */
  s3OutputFormatConfig: UpsolverS3OutputFormatConfig | undefined;
}

/**
 * @public
 * <p>The properties that are applied when Zendesk is used as a destination.</p>
 */
export interface ZendeskDestinationProperties {
  /**
   * @public
   * <p>The object specified in the Zendesk flow destination.</p>
   */
  object: string | undefined;

  /**
   * @public
   * <p> A list of field names that can be used as an ID field when performing a write operation.
   *     </p>
   */
  idFieldNames?: string[];

  /**
   * @public
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   */
  errorHandlingConfig?: ErrorHandlingConfig;

  /**
   * @public
   * <p> The possible write operations in the destination connector. When this value is not
   *       provided, this defaults to the <code>INSERT</code> operation. </p>
   */
  writeOperationType?: WriteOperationType;
}

/**
 * @public
 * <p> This stores the information that is required to query a particular connector. </p>
 */
export interface DestinationConnectorProperties {
  /**
   * @public
   * <p> The properties required to query Amazon Redshift. </p>
   */
  Redshift?: RedshiftDestinationProperties;

  /**
   * @public
   * <p> The properties required to query Amazon S3. </p>
   */
  S3?: S3DestinationProperties;

  /**
   * @public
   * <p> The properties required to query Salesforce. </p>
   */
  Salesforce?: SalesforceDestinationProperties;

  /**
   * @public
   * <p> The properties required to query Snowflake. </p>
   */
  Snowflake?: SnowflakeDestinationProperties;

  /**
   * @public
   * <p> The properties required to query Amazon EventBridge. </p>
   */
  EventBridge?: EventBridgeDestinationProperties;

  /**
   * @public
   * <p> The properties required to query Amazon Lookout for Metrics. </p>
   */
  LookoutMetrics?: LookoutMetricsDestinationProperties;

  /**
   * @public
   * <p> The properties required to query Upsolver. </p>
   */
  Upsolver?: UpsolverDestinationProperties;

  /**
   * @public
   * <p> The properties required to query Amazon Honeycode. </p>
   */
  Honeycode?: HoneycodeDestinationProperties;

  /**
   * @public
   * <p> The properties required to query Amazon Connect Customer Profiles. </p>
   */
  CustomerProfiles?: CustomerProfilesDestinationProperties;

  /**
   * @public
   * <p>The properties required to query Zendesk.</p>
   */
  Zendesk?: ZendeskDestinationProperties;

  /**
   * @public
   * <p>The properties required to query Marketo.</p>
   */
  Marketo?: MarketoDestinationProperties;

  /**
   * @public
   * <p>The properties that are required to query the custom Connector.</p>
   */
  CustomConnector?: CustomConnectorDestinationProperties;

  /**
   * @public
   * <p>The properties required to query SAPOData.</p>
   */
  SAPOData?: SAPODataDestinationProperties;
}

/**
 * @public
 * <p> Contains information about the configuration of destination connectors present in the
 *       flow. </p>
 */
export interface DestinationFlowConfig {
  /**
   * @public
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType: ConnectorType | undefined;

  /**
   * @public
   * <p>The API version that the destination connector uses.</p>
   */
  apiVersion?: string;

  /**
   * @public
   * <p> The name of the connector profile. This name must be unique for each connector profile in
   *       the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;

  /**
   * @public
   * <p> This stores the information that is required to query a particular connector. </p>
   */
  destinationConnectorProperties: DestinationConnectorProperties | undefined;
}

/**
 * @public
 * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data with
 *       the Glue Data Catalog. When Amazon AppFlow catalogs your data, it stores metadata
 *       in Data Catalog tables. This metadata represents the data that's transferred by the
 *       flow that you configure with these settings.</p>
 *          <note>
 *             <p>You can configure a flow with these settings only when the flow destination is Amazon S3.</p>
 *          </note>
 */
export interface GlueDataCatalogConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants Amazon AppFlow the permissions it needs to create Data Catalog tables, databases, and
   *       partitions.</p>
   *          <p>For an example IAM policy that has the required permissions, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_id-based-policy-examples.html">Identity-based
   *         policy examples for Amazon AppFlow</a>.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The name of the Data Catalog database that stores the metadata tables that Amazon AppFlow creates in your Amazon Web Services account. These tables contain metadata for
   *       the data that's transferred by the flow that you configure with this parameter.</p>
   *          <note>
   *             <p>When you configure a new flow with this parameter, you must specify an existing
   *         database.</p>
   *          </note>
   */
  databaseName: string | undefined;

  /**
   * @public
   * <p>A naming prefix for each Data Catalog table that Amazon AppFlow creates for
   *       the flow that you configure with this setting. Amazon AppFlow adds the prefix to the
   *       beginning of the each table name.</p>
   */
  tablePrefix: string | undefined;
}

/**
 * @public
 * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When
 *         Amazon AppFlow catalogs your data, it stores metadata in a data catalog.</p>
 */
export interface MetadataCatalogConfig {
  /**
   * @public
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data with
   *       the Glue Data Catalog.</p>
   */
  glueDataCatalog?: GlueDataCatalogConfig;
}

/**
 * @public
 * <p> Specifies the configuration used when importing incremental records from the source.
 *     </p>
 */
export interface IncrementalPullConfig {
  /**
   * @public
   * <p> A field that specifies the date time or timestamp field as the criteria to use when
   *       importing incremental records from the source. </p>
   */
  datetimeTypeFieldName?: string;
}

/**
 * @public
 * <p>The properties that are applied when the custom connector is being used as a
 *       source.</p>
 */
export interface CustomConnectorSourceProperties {
  /**
   * @public
   * <p>The entity specified in the custom connector as a source in the flow.</p>
   */
  entityName: string | undefined;

  /**
   * @public
   * <p>Custom properties that are required to use the custom connector as a source.</p>
   */
  customProperties?: Record<string, string>;

  /**
   * @public
   * <p>The API of the connector application that Amazon AppFlow uses to transfer your
   *       data.</p>
   */
  dataTransferApi?: DataTransferApi;
}

/**
 * @public
 * <p> The properties that are applied when Datadog is being used as a source. </p>
 */
export interface DatadogSourceProperties {
  /**
   * @public
   * <p> The object specified in the Datadog flow source. </p>
   */
  object: string | undefined;
}

/**
 * @public
 * <p> The properties that are applied when Dynatrace is being used as a source. </p>
 */
export interface DynatraceSourceProperties {
  /**
   * @public
   * <p> The object specified in the Dynatrace flow source. </p>
   */
  object: string | undefined;
}

/**
 * @public
 * <p> The properties that are applied when Google Analytics is being used as a source. </p>
 */
export interface GoogleAnalyticsSourceProperties {
  /**
   * @public
   * <p> The object specified in the Google Analytics flow source. </p>
   */
  object: string | undefined;
}

/**
 * @public
 * <p> The properties that are applied when Infor Nexus is being used as a source. </p>
 */
export interface InforNexusSourceProperties {
  /**
   * @public
   * <p> The object specified in the Infor Nexus flow source. </p>
   */
  object: string | undefined;
}

/**
 * @public
 * <p> The properties that are applied when Marketo is being used as a source. </p>
 */
export interface MarketoSourceProperties {
  /**
   * @public
   * <p> The object specified in the Marketo flow source. </p>
   */
  object: string | undefined;
}

/**
 * @public
 * <p>The properties that are applied when Salesforce Pardot is being used as a source.</p>
 */
export interface PardotSourceProperties {
  /**
   * @public
   * <p>The object specified in the Salesforce Pardot flow source.</p>
   */
  object: string | undefined;
}

/**
 * @public
 * @enum
 */
export const S3InputFileType = {
  CSV: "CSV",
  JSON: "JSON",
} as const;

/**
 * @public
 */
export type S3InputFileType = (typeof S3InputFileType)[keyof typeof S3InputFileType];

/**
 * @public
 * <p> When you use Amazon S3 as the source, the configuration format that you provide
 *       the flow input data. </p>
 */
export interface S3InputFormatConfig {
  /**
   * @public
   * <p> The file type that Amazon AppFlow gets from your Amazon S3 bucket. </p>
   */
  s3InputFileType?: S3InputFileType;
}

/**
 * @public
 * <p> The properties that are applied when Amazon S3 is being used as the flow source.
 *     </p>
 */
export interface S3SourceProperties {
  /**
   * @public
   * <p> The Amazon S3 bucket name where the source files are stored. </p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p> The object key for the Amazon S3 bucket in which the source files are stored.
   *     </p>
   */
  bucketPrefix?: string;

  /**
   * @public
   * <p> When you use Amazon S3 as the source, the configuration format that you provide
   *       the flow input data. </p>
   */
  s3InputFormatConfig?: S3InputFormatConfig;
}

/**
 * @public
 * <p> The properties that are applied when Salesforce is being used as a source. </p>
 */
export interface SalesforceSourceProperties {
  /**
   * @public
   * <p> The object specified in the Salesforce flow source. </p>
   */
  object: string | undefined;

  /**
   * @public
   * <p> The flag that enables dynamic fetching of new (recently added) fields in the Salesforce
   *       objects while running a flow. </p>
   */
  enableDynamicFieldUpdate?: boolean;

  /**
   * @public
   * <p> Indicates whether Amazon AppFlow includes deleted files in the flow run. </p>
   */
  includeDeletedRecords?: boolean;

  /**
   * @public
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
  dataTransferApi?: SalesforceDataTransferApi;
}

/**
 * @public
 * <p>Sets the page size for each <i>concurrent process</i> that transfers OData
 *       records from your SAP instance. A concurrent process is query that retrieves a batch of
 *       records as part of a flow run. Amazon AppFlow can run multiple concurrent processes in
 *       parallel to transfer data faster.</p>
 */
export interface SAPODataPaginationConfig {
  /**
   * @public
   * <p>The maximum number of records that Amazon AppFlow receives in each page of the
   *       response from your SAP application. For transfers of OData records, the maximum page size is
   *       3,000. For transfers of data that comes from an ODP provider, the maximum page size
   *       is 10,000.</p>
   */
  maxPageSize: number | undefined;
}

/**
 * @public
 * <p>Sets the number of <i>concurrent processes</i> that transfer OData records
 *       from your SAP instance. A concurrent process is query that retrieves a batch of records as
 *       part of a flow run. Amazon AppFlow can run multiple concurrent processes in parallel to
 *       transfer data faster.</p>
 */
export interface SAPODataParallelismConfig {
  /**
   * @public
   * <p>The maximum number of processes that Amazon AppFlow runs at the same time when it
   *       retrieves your data from your SAP application.</p>
   */
  maxParallelism: number | undefined;
}

/**
 * @public
 * <p> The properties that are applied when using SAPOData as a flow source. </p>
 */
export interface SAPODataSourceProperties {
  /**
   * @public
   * <p> The object path specified in the SAPOData flow source. </p>
   */
  objectPath?: string;

  /**
   * @public
   * <p>Sets the number of concurrent processes that transfers OData records from your SAP
   *       instance.</p>
   */
  parallelismConfig?: SAPODataParallelismConfig;

  /**
   * @public
   * <p>Sets the page size for each concurrent process that transfers OData records from your SAP
   *       instance.</p>
   */
  paginationConfig?: SAPODataPaginationConfig;
}

/**
 * @public
 * <p> The properties that are applied when ServiceNow is being used as a source. </p>
 */
export interface ServiceNowSourceProperties {
  /**
   * @public
   * <p> The object specified in the ServiceNow flow source. </p>
   */
  object: string | undefined;
}

/**
 * @public
 * <p> The properties that are applied when Singular is being used as a source. </p>
 */
export interface SingularSourceProperties {
  /**
   * @public
   * <p> The object specified in the Singular flow source. </p>
   */
  object: string | undefined;
}

/**
 * @public
 * <p> The properties that are applied when Slack is being used as a source. </p>
 */
export interface SlackSourceProperties {
  /**
   * @public
   * <p> The object specified in the Slack flow source. </p>
   */
  object: string | undefined;
}

/**
 * @public
 * <p> The properties that are applied when using Trend Micro as a flow source. </p>
 */
export interface TrendmicroSourceProperties {
  /**
   * @public
   * <p> The object specified in the Trend Micro flow source. </p>
   */
  object: string | undefined;
}

/**
 * @public
 * <p> The properties that are applied when using Veeva as a flow source. </p>
 */
export interface VeevaSourceProperties {
  /**
   * @public
   * <p> The object specified in the Veeva flow source. </p>
   */
  object: string | undefined;

  /**
   * @public
   * <p>The document type specified in the Veeva document extract flow.</p>
   */
  documentType?: string;

  /**
   * @public
   * <p>Boolean value to include source files in Veeva document extract flow.</p>
   */
  includeSourceFiles?: boolean;

  /**
   * @public
   * <p>Boolean value to include file renditions in Veeva document extract flow.</p>
   */
  includeRenditions?: boolean;

  /**
   * @public
   * <p>Boolean value to include All Versions of files in Veeva document extract flow.</p>
   */
  includeAllVersions?: boolean;
}

/**
 * @public
 * <p> The properties that are applied when using Zendesk as a flow source. </p>
 */
export interface ZendeskSourceProperties {
  /**
   * @public
   * <p> The object specified in the Zendesk flow source. </p>
   */
  object: string | undefined;
}

/**
 * @public
 * <p> Specifies the information that is required to query a particular connector. </p>
 */
export interface SourceConnectorProperties {
  /**
   * @public
   * <p> Specifies the information that is required for querying Amplitude. </p>
   */
  Amplitude?: AmplitudeSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Datadog. </p>
   */
  Datadog?: DatadogSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Dynatrace. </p>
   */
  Dynatrace?: DynatraceSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Google Analytics. </p>
   */
  GoogleAnalytics?: GoogleAnalyticsSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Infor Nexus. </p>
   */
  InforNexus?: InforNexusSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Marketo. </p>
   */
  Marketo?: MarketoSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Amazon S3. </p>
   */
  S3?: S3SourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Salesforce. </p>
   */
  Salesforce?: SalesforceSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying ServiceNow. </p>
   */
  ServiceNow?: ServiceNowSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Singular. </p>
   */
  Singular?: SingularSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Slack. </p>
   */
  Slack?: SlackSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Trend Micro. </p>
   */
  Trendmicro?: TrendmicroSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Veeva. </p>
   */
  Veeva?: VeevaSourceProperties;

  /**
   * @public
   * <p> Specifies the information that is required for querying Zendesk. </p>
   */
  Zendesk?: ZendeskSourceProperties;

  /**
   * @public
   * <p> The properties that are applied when using SAPOData as a flow source. </p>
   */
  SAPOData?: SAPODataSourceProperties;

  /**
   * @public
   * <p>The properties that are applied when the custom connector is being used as a
   *       source.</p>
   */
  CustomConnector?: CustomConnectorSourceProperties;

  /**
   * @public
   * <p>Specifies the information that is required for querying Salesforce Pardot.</p>
   */
  Pardot?: PardotSourceProperties;
}

/**
 * @public
 * <p> Contains information about the configuration of the source connector used in the flow.
 *     </p>
 */
export interface SourceFlowConfig {
  /**
   * @public
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType: ConnectorType | undefined;

  /**
   * @public
   * <p>The API version of the connector when it's used as a source in the flow.</p>
   */
  apiVersion?: string;

  /**
   * @public
   * <p> The name of the connector profile. This name must be unique for each connector profile in
   *       the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;

  /**
   * @public
   * <p> Specifies the information that is required to query a particular source connector.
   *     </p>
   */
  sourceConnectorProperties: SourceConnectorProperties | undefined;

  /**
   * @public
   * <p> Defines the configuration for a scheduled incremental data pull. If a valid configuration
   *       is provided, the fields specified in the configuration are used when querying for the
   *       incremental data pull. </p>
   */
  incrementalPullConfig?: IncrementalPullConfig;
}

/**
 * @public
 * @enum
 */
export const OperatorPropertiesKeys = {
  CONCAT_FORMAT: "CONCAT_FORMAT",
  DATA_TYPE: "DATA_TYPE",
  DESTINATION_DATA_TYPE: "DESTINATION_DATA_TYPE",
  EXCLUDE_SOURCE_FIELDS_LIST: "EXCLUDE_SOURCE_FIELDS_LIST",
  INCLUDE_NEW_FIELDS: "INCLUDE_NEW_FIELDS",
  LOWER_BOUND: "LOWER_BOUND",
  MASK_LENGTH: "MASK_LENGTH",
  MASK_VALUE: "MASK_VALUE",
  MATH_OPERATION_FIELDS_ORDER: "MATH_OPERATION_FIELDS_ORDER",
  ORDERED_PARTITION_KEYS_LIST: "ORDERED_PARTITION_KEYS_LIST",
  SOURCE_DATA_TYPE: "SOURCE_DATA_TYPE",
  SUBFIELD_CATEGORY_MAP: "SUBFIELD_CATEGORY_MAP",
  TRUNCATE_LENGTH: "TRUNCATE_LENGTH",
  UPPER_BOUND: "UPPER_BOUND",
  VALIDATION_ACTION: "VALIDATION_ACTION",
  VALUE: "VALUE",
  VALUES: "VALUES",
} as const;

/**
 * @public
 */
export type OperatorPropertiesKeys = (typeof OperatorPropertiesKeys)[keyof typeof OperatorPropertiesKeys];

/**
 * @public
 * @enum
 */
export const TaskType = {
  ARITHMETIC: "Arithmetic",
  FILTER: "Filter",
  MAP: "Map",
  MAP_ALL: "Map_all",
  MASK: "Mask",
  MERGE: "Merge",
  PARTITION: "Partition",
  PASSTHROUGH: "Passthrough",
  TRUNCATE: "Truncate",
  VALIDATE: "Validate",
} as const;

/**
 * @public
 */
export type TaskType = (typeof TaskType)[keyof typeof TaskType];

/**
 * @public
 * <p> A class for modeling different type of tasks. Task implementation varies based on the
 *         <code>TaskType</code>. </p>
 */
export interface Task {
  /**
   * @public
   * <p> The source fields to which a particular task is applied. </p>
   */
  sourceFields: string[] | undefined;

  /**
   * @public
   * <p> The operation to be performed on the provided source fields. </p>
   */
  connectorOperator?: ConnectorOperator;

  /**
   * @public
   * <p> A field in a destination connector, or a field value against which Amazon AppFlow
   *       validates a source field. </p>
   */
  destinationField?: string;

  /**
   * @public
   * <p> Specifies the particular task implementation that Amazon AppFlow performs. </p>
   */
  taskType: TaskType | undefined;

  /**
   * @public
   * <p> A map used to store task-related information. The execution service looks for particular
   *       information based on the <code>TaskType</code>. </p>
   */
  taskProperties?: Record<OperatorPropertiesKeys, string>;
}

/**
 * @public
 * @enum
 */
export const DataPullMode = {
  COMPLETE: "Complete",
  INCREMENTAL: "Incremental",
} as const;

/**
 * @public
 */
export type DataPullMode = (typeof DataPullMode)[keyof typeof DataPullMode];

/**
 * @public
 * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
 *       Currently, these settings only apply to the <code>Scheduled</code> trigger type. </p>
 */
export interface ScheduledTriggerProperties {
  /**
   * @public
   * <p> The scheduling expression that determines the rate at which the schedule will run, for
   *       example <code>rate(5minutes)</code>. </p>
   */
  scheduleExpression: string | undefined;

  /**
   * @public
   * <p> Specifies whether a scheduled flow has an incremental data transfer or a complete data
   *       transfer for each flow run. </p>
   */
  dataPullMode?: DataPullMode;

  /**
   * @public
   * <p>The time at which the scheduled flow starts. The time is formatted as a timestamp that
   *       follows the ISO 8601 standard, such as <code>2022-04-26T13:00:00-07:00</code>.</p>
   */
  scheduleStartTime?: Date;

  /**
   * @public
   * <p>The time at which the scheduled flow ends. The time is formatted as a timestamp that
   *       follows the ISO 8601 standard, such as <code>2022-04-27T13:00:00-07:00</code>.</p>
   */
  scheduleEndTime?: Date;

  /**
   * @public
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
   * @public
   * <p> Specifies the optional offset that is added to the time interval for a schedule-triggered
   *       flow. </p>
   */
  scheduleOffset?: number;

  /**
   * @public
   * <p> Specifies the date range for the records to import from the connector in the first flow
   *       run. </p>
   */
  firstExecutionFrom?: Date;

  /**
   * @public
   * <p>Defines how many times a scheduled flow fails consecutively before Amazon AppFlow
   *       deactivates it.</p>
   */
  flowErrorDeactivationThreshold?: number;
}

/**
 * @public
 * <p> Specifies the configuration details that control the trigger for a flow. Currently, these
 *       settings only apply to the <code>Scheduled</code> trigger type. </p>
 */
export interface TriggerProperties {
  /**
   * @public
   * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
   *     </p>
   */
  Scheduled?: ScheduledTriggerProperties;
}

/**
 * @public
 * <p> The trigger settings that determine how and when Amazon AppFlow runs the specified
 *       flow. </p>
 */
export interface TriggerConfig {
  /**
   * @public
   * <p> Specifies the type of flow trigger. This can be <code>OnDemand</code>,
   *         <code>Scheduled</code>, or <code>Event</code>. </p>
   */
  triggerType: TriggerType | undefined;

  /**
   * @public
   * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
   *       Currently, these settings only apply to the <code>Scheduled</code> trigger type. </p>
   */
  triggerProperties?: TriggerProperties;
}

/**
 * @public
 */
export interface CreateFlowRequest {
  /**
   * @public
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * @public
   * <p> A description of the flow you want to create. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS
   *       key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. </p>
   */
  kmsArn?: string;

  /**
   * @public
   * <p> The trigger settings that determine how and when the flow runs. </p>
   */
  triggerConfig: TriggerConfig | undefined;

  /**
   * @public
   * <p> The configuration that controls how Amazon AppFlow retrieves data from the source
   *       connector. </p>
   */
  sourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * @public
   * <p> The configuration that controls how Amazon AppFlow places data in the destination
   *       connector. </p>
   */
  destinationFlowConfigList: DestinationFlowConfig[] | undefined;

  /**
   * @public
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the flow
   *       run. </p>
   */
  tasks: Task[] | undefined;

  /**
   * @public
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's
   *       transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it
   *       stores metadata in a data catalog.</p>
   */
  metadataCatalogConfig?: MetadataCatalogConfig;

  /**
   * @public
   * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your
   *         <code>CreateFlow</code> request completes only once. You choose the value to pass. For
   *       example, if you don't receive a response from your request, you can safely retry the request
   *       with the same <code>clientToken</code> parameter value.</p>
   *          <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are
   *       using inserts a value for you. This way, the SDK can safely retry requests multiple times
   *       after a network error. You must provide your own value for other use cases.</p>
   *          <p>If you specify input parameters that differ from your first request, an error occurs. If
   *       you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new
   *       call to <code>CreateFlow</code>. The token is active for 8 hours.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const FlowStatus = {
  ACTIVE: "Active",
  DELETED: "Deleted",
  DEPRECATED: "Deprecated",
  DRAFT: "Draft",
  ERRORED: "Errored",
  SUSPENDED: "Suspended",
} as const;

/**
 * @public
 */
export type FlowStatus = (typeof FlowStatus)[keyof typeof FlowStatus];

/**
 * @public
 */
export interface CreateFlowResponse {
  /**
   * @public
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * @public
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus;
}

/**
 * @public
 */
export interface DeleteConnectorProfileRequest {
  /**
   * @public
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in your account. </p>
   */
  connectorProfileName: string | undefined;

  /**
   * @public
   * <p> Indicates whether Amazon AppFlow should delete the profile, even if it is currently
   *       in use in one or more flows. </p>
   */
  forceDelete?: boolean;
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
   * @public
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * @public
   * <p> Indicates whether Amazon AppFlow should delete the flow, even if it is currently in
   *       use. </p>
   */
  forceDelete?: boolean;
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
   * @public
   * <p>The connector type, such as CUSTOMCONNECTOR, Saleforce, Marketo. Please choose
   *       CUSTOMCONNECTOR for Lambda based custom connectors.</p>
   */
  connectorType: ConnectorType | undefined;

  /**
   * @public
   * <p>The label of the connector. The label is unique for each
   *         <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if
   *       calling for CUSTOMCONNECTOR connector type/.</p>
   */
  connectorLabel?: string;
}

/**
 * @public
 */
export interface DescribeConnectorResponse {
  /**
   * @public
   * <p>Configuration info of all the connectors that the user requested.</p>
   */
  connectorConfiguration?: ConnectorConfiguration;
}

/**
 * @public
 */
export interface DescribeConnectorEntityRequest {
  /**
   * @public
   * <p> The entity name for that connector. </p>
   */
  connectorEntityName: string | undefined;

  /**
   * @public
   * <p> The type of connector application, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType;

  /**
   * @public
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   */
  connectorProfileName?: string;

  /**
   * @public
   * <p>The version of the API that's used by the connector.</p>
   */
  apiVersion?: string;
}

/**
 * @public
 */
export interface DescribeConnectorEntityResponse {
  /**
   * @public
   * <p> Describes the fields for that connector entity. For example, for an
   *         <i>account</i> entity, the fields would be <i>account name</i>,
   *         <i>account ID</i>, and so on. </p>
   */
  connectorEntityFields: ConnectorEntityField[] | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorProfilesRequest {
  /**
   * @public
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   */
  connectorProfileNames?: string[];

  /**
   * @public
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType;

  /**
   * @public
   * <p>The name of the connector. The name is unique for each <code>ConnectorRegistration</code>
   *       in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector
   *       type/.</p>
   */
  connectorLabel?: string;

  /**
   * @public
   * <p> Specifies the maximum number of items that should be returned in the result set. The
   *       default for <code>maxResults</code> is 20 (for all paginated API operations). </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeConnectorProfilesResponse {
  /**
   * @public
   * <p> Returns information about the connector profiles associated with the flow. </p>
   */
  connectorProfileDetails?: ConnectorProfile[];

  /**
   * @public
   * <p> The pagination token for the next page of data. If <code>nextToken=null</code>, this
   *       means that all records have been fetched. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeConnectorsRequest {
  /**
   * @public
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorTypes?: ConnectorType[];

  /**
   * @public
   * <p>The maximum number of items that should be returned in the result set. The default is
   *       20.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeConnectorsResponse {
  /**
   * @public
   * <p> The configuration that is applied to the connectors used in the flow. </p>
   */
  connectorConfigurations?: Record<ConnectorType, ConnectorConfiguration>;

  /**
   * @public
   * <p>Information about the connectors supported in Amazon AppFlow.</p>
   */
  connectors?: ConnectorDetail[];

  /**
   * @public
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeFlowRequest {
  /**
   * @public
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  CANCELED: "Canceled",
  CANCELSTARTED: "CancelStarted",
  ERROR: "Error",
  INPROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;

/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * <p> Describes the details of the flow run, including the timestamp, status, and message.
 *     </p>
 */
export interface ExecutionDetails {
  /**
   * @public
   * <p> Describes the details of the most recent flow run. </p>
   */
  mostRecentExecutionMessage?: string;

  /**
   * @public
   * <p> Specifies the time of the most recent flow run. </p>
   */
  mostRecentExecutionTime?: Date;

  /**
   * @public
   * <p> Specifies the status of the most recent flow run. </p>
   */
  mostRecentExecutionStatus?: ExecutionStatus;
}

/**
 * @public
 * <p>Describes the status of an attempt from Amazon AppFlow to register a resource.</p>
 *          <p>When you run a flow that you've configured to use a metadata catalog, Amazon AppFlow
 *       registers a metadata table and data partitions with that catalog. This operation provides the
 *       status of that registration attempt. The operation also indicates how many related resources
 *         Amazon AppFlow created or updated.</p>
 */
export interface RegistrationOutput {
  /**
   * @public
   * <p>Explains the status of the registration attempt from Amazon AppFlow. If the attempt
   *       fails, the message explains why.</p>
   */
  message?: string;

  /**
   * @public
   * <p>Indicates the number of resources that Amazon AppFlow created or updated. Possible
   *       resources include metadata tables and data partitions.</p>
   */
  result?: string;

  /**
   * @public
   * <p>Indicates the status of the registration attempt from Amazon AppFlow.</p>
   */
  status?: ExecutionStatus;
}

/**
 * @public
 * <p>Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.</p>
 */
export interface MetadataCatalogDetail {
  /**
   * @public
   * <p>The type of metadata catalog that Amazon AppFlow used for the associated flow run.
   *       This parameter returns the following value:</p>
   *          <dl>
   *             <dt>GLUE</dt>
   *             <dd>
   *                <p>The metadata catalog is provided by the Glue Data Catalog. Glue
   *             includes the Glue Data Catalog as a component.</p>
   *             </dd>
   *          </dl>
   */
  catalogType?: CatalogType;

  /**
   * @public
   * <p>The name of the table that stores the metadata for the associated flow run. The table
   *       stores metadata that represents the data that the flow transferred. Amazon AppFlow stores
   *       the table in the metadata catalog.</p>
   */
  tableName?: string;

  /**
   * @public
   * <p>Describes the status of the attempt from Amazon AppFlow to register the metadata
   *       table with the metadata catalog. Amazon AppFlow creates or updates this table for the
   *       associated flow run.</p>
   */
  tableRegistrationOutput?: RegistrationOutput;

  /**
   * @public
   * <p>Describes the status of the attempt from Amazon AppFlow to register the data
   *       partitions with the metadata catalog. The data partitions organize the flow output into a
   *       hierarchical path, such as a folder path in an S3 bucket. Amazon AppFlow creates the
   *       partitions (if they don't already exist) based on your flow configuration.</p>
   */
  partitionRegistrationOutput?: RegistrationOutput;
}

/**
 * @public
 */
export interface DescribeFlowResponse {
  /**
   * @public
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * @public
   * <p> A description of the flow. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName?: string;

  /**
   * @public
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS
   *       key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. </p>
   */
  kmsArn?: string;

  /**
   * @public
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus;

  /**
   * @public
   * <p> Contains an error message if the flow status is in a suspended or error state. This
   *       applies only to scheduled or event-triggered flows. </p>
   */
  flowStatusMessage?: string;

  /**
   * @public
   * <p> The configuration that controls how Amazon AppFlow retrieves data from the source
   *       connector. </p>
   */
  sourceFlowConfig?: SourceFlowConfig;

  /**
   * @public
   * <p> The configuration that controls how Amazon AppFlow transfers data to the destination
   *       connector. </p>
   */
  destinationFlowConfigList?: DestinationFlowConfig[];

  /**
   * @public
   * <p> Describes the details of the most recent flow run. </p>
   */
  lastRunExecutionDetails?: ExecutionDetails;

  /**
   * @public
   * <p> The trigger settings that determine how and when the flow runs. </p>
   */
  triggerConfig?: TriggerConfig;

  /**
   * @public
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the flow
   *       run. </p>
   */
  tasks?: Task[];

  /**
   * @public
   * <p> Specifies when the flow was created. </p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p> Specifies when the flow was last updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p> The ARN of the user who created the flow. </p>
   */
  createdBy?: string;

  /**
   * @public
   * <p> Specifies the user name of the account that performed the most recent update. </p>
   */
  lastUpdatedBy?: string;

  /**
   * @public
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's
   *       transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it
   *       stores metadata in a data catalog.</p>
   */
  metadataCatalogConfig?: MetadataCatalogConfig;

  /**
   * @public
   * <p>Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.</p>
   */
  lastRunMetadataCatalogDetails?: MetadataCatalogDetail[];

  /**
   * @public
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

/**
 * @public
 */
export interface DescribeFlowExecutionRecordsRequest {
  /**
   * @public
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * @public
   * <p> Specifies the maximum number of items that should be returned in the result set. The
   *       default for <code>maxResults</code> is 20 (for all paginated API operations). </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p> Provides details in the event of a failed flow, including the failure count and the
 *       related error messages. </p>
 */
export interface ErrorInfo {
  /**
   * @public
   * <p> Specifies the failure count for the attempted flow. </p>
   */
  putFailuresCount?: number;

  /**
   * @public
   * <p> Specifies the error message that appears if a flow fails. </p>
   */
  executionMessage?: string;
}

/**
 * @public
 * <p> Specifies the end result of the flow run. </p>
 */
export interface ExecutionResult {
  /**
   * @public
   * <p> Provides any error message information related to the flow run. </p>
   */
  errorInfo?: ErrorInfo;

  /**
   * @public
   * <p> The total number of bytes processed by the flow run. </p>
   */
  bytesProcessed?: number;

  /**
   * @public
   * <p> The total number of bytes written as a result of the flow run. </p>
   */
  bytesWritten?: number;

  /**
   * @public
   * <p> The number of records processed in the flow run. </p>
   */
  recordsProcessed?: number;

  /**
   * @public
   * <p>The number of processes that Amazon AppFlow ran at the same time when it retrieved
   *       your data.</p>
   */
  numParallelProcesses?: number;

  /**
   * @public
   * <p>The maximum number of records that Amazon AppFlow receives in each page of the
   *       response from your SAP application.</p>
   */
  maxPageSize?: number;
}

/**
 * @public
 * <p> Specifies information about the past flow run instances for a given flow. </p>
 */
export interface ExecutionRecord {
  /**
   * @public
   * <p> Specifies the identifier of the given flow run. </p>
   */
  executionId?: string;

  /**
   * @public
   * <p> Specifies the flow run status and whether it is in progress, has completed successfully,
   *       or has failed. </p>
   */
  executionStatus?: ExecutionStatus;

  /**
   * @public
   * <p> Describes the result of the given flow run. </p>
   */
  executionResult?: ExecutionResult;

  /**
   * @public
   * <p> Specifies the start time of the flow run. </p>
   */
  startedAt?: Date;

  /**
   * @public
   * <p> Specifies the time of the most recent update. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p> The timestamp that determines the first new or updated record to be transferred in the
   *       flow run. </p>
   */
  dataPullStartTime?: Date;

  /**
   * @public
   * <p> The timestamp that indicates the last new or updated record to be transferred in the flow
   *       run. </p>
   */
  dataPullEndTime?: Date;

  /**
   * @public
   * <p>Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.</p>
   */
  metadataCatalogDetails?: MetadataCatalogDetail[];
}

/**
 * @public
 */
export interface DescribeFlowExecutionRecordsResponse {
  /**
   * @public
   * <p> Returns a list of all instances when this flow was run. </p>
   */
  flowExecutions?: ExecutionRecord[];

  /**
   * @public
   * <p> The pagination token for the next page of data. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p> The properties of the flow, such as its source, destination, trigger type, and so on.
 *     </p>
 */
export interface FlowDefinition {
  /**
   * @public
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * @public
   * <p> A user-entered description of the flow. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName?: string;

  /**
   * @public
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus;

  /**
   * @public
   * <p> Specifies the source connector type, such as Salesforce, Amazon S3, Amplitude,
   *       and so on. </p>
   */
  sourceConnectorType?: ConnectorType;

  /**
   * @public
   * <p>The label of the source connector in the flow.</p>
   */
  sourceConnectorLabel?: string;

  /**
   * @public
   * <p> Specifies the destination connector type, such as Salesforce, Amazon S3,
   *       Amplitude, and so on. </p>
   */
  destinationConnectorType?: ConnectorType;

  /**
   * @public
   * <p>The label of the destination connector in the flow.</p>
   */
  destinationConnectorLabel?: string;

  /**
   * @public
   * <p> Specifies the type of flow trigger. This can be <code>OnDemand</code>,
   *         <code>Scheduled</code>, or <code>Event</code>. </p>
   */
  triggerType?: TriggerType;

  /**
   * @public
   * <p> Specifies when the flow was created. </p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p> Specifies when the flow was last updated. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p> The ARN of the user who created the flow. </p>
   */
  createdBy?: string;

  /**
   * @public
   * <p> Specifies the account user name that most recently updated the flow. </p>
   */
  lastUpdatedBy?: string;

  /**
   * @public
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p> Describes the details of the most recent flow run. </p>
   */
  lastRunExecutionDetails?: ExecutionDetails;
}

/**
 * @public
 */
export interface ListConnectorEntitiesRequest {
  /**
   * @public
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account, and is used to query the
   *       downstream connector. </p>
   */
  connectorProfileName?: string;

  /**
   * @public
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   */
  connectorType?: ConnectorType;

  /**
   * @public
   * <p> This optional parameter is specific to connector implementation. Some connectors support
   *       multiple levels or categories of entities. You can find out the list of roots for such
   *       providers by sending a request without the <code>entitiesPath</code> parameter. If the
   *       connector supports entities at different roots, this initial request returns the list of
   *       roots. Otherwise, this request returns all entities supported by the provider. </p>
   */
  entitiesPath?: string;

  /**
   * @public
   * <p>The version of the API that's used by the connector.</p>
   */
  apiVersion?: string;

  /**
   * @public
   * <p>The maximum number of items that the operation returns in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token that was provided by your prior <code>ListConnectorEntities</code> operation if
   *       the response was too big for the page size. You specify this token to get the next page of
   *       results in paginated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorEntitiesResponse {
  /**
   * @public
   * <p> The response of <code>ListConnectorEntities</code> lists entities grouped by category.
   *       This map's key represents the group name, and its value contains the list of entities
   *       belonging to that group. </p>
   */
  connectorEntityMap: Record<string, ConnectorEntity[]> | undefined;

  /**
   * @public
   * <p>A token that you specify in your next <code>ListConnectorEntities</code> operation to get
   *       the next page of results in paginated response. The <code>ListConnectorEntities</code>
   *       operation provides this token if the response is too big for the page size.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * @public
   * <p>Specifies the maximum number of items that should be returned in the result set. The
   *       default for <code>maxResults</code> is 20 (for all paginated API operations).</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The pagination token for the next page of data.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * @public
   * <p>Contains information about the connectors supported by Amazon AppFlow.</p>
   */
  connectors?: ConnectorDetail[];

  /**
   * @public
   * <p>The pagination token for the next page of data. If nextToken=null, this means that all
   *       records have been fetched.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListFlowsRequest {
  /**
   * @public
   * <p> Specifies the maximum number of items that should be returned in the result set. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p> The pagination token for next page of data. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListFlowsResponse {
  /**
   * @public
   * <p> The list of flows associated with your account. </p>
   */
  flows?: FlowDefinition[];

  /**
   * @public
   * <p> The pagination token for next page of data. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the specified flow. </p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p> The tags used to organize, track, or control access for your flow. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface RegisterConnectorRequest {
  /**
   * @public
   * <p> The name of the connector. The name is unique for each <code>ConnectorRegistration</code>
   *       in your Amazon Web Services account.</p>
   */
  connectorLabel?: string;

  /**
   * @public
   * <p>A description about the connector that's being registered.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The provisioning type of the connector. Currently the only supported value is LAMBDA.
   *     </p>
   */
  connectorProvisioningType?: ConnectorProvisioningType;

  /**
   * @public
   * <p>The provisioning type of the connector. Currently the only supported value is
   *       LAMBDA.</p>
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig;

  /**
   * @public
   * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your
   *         <code>RegisterConnector</code> request completes only once. You choose the value to pass.
   *       For example, if you don't receive a response from your request, you can safely retry the
   *       request with the same <code>clientToken</code> parameter value.</p>
   *          <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are
   *       using inserts a value for you. This way, the SDK can safely retry requests multiple times
   *       after a network error. You must provide your own value for other use cases.</p>
   *          <p>If you specify input parameters that differ from your first request, an error occurs. If
   *       you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new
   *       call to <code>RegisterConnector</code>. The token is active for 8 hours.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface RegisterConnectorResponse {
  /**
   * @public
   * <p>The ARN of the connector being registered.</p>
   */
  connectorArn?: string;
}

/**
 * @public
 */
export interface ResetConnectorMetadataCacheRequest {
  /**
   * @public
   * <p>The name of the connector profile that you want to reset cached metadata for.</p>
   *          <p>You can omit this parameter if you're resetting the cache for any of the following
   *       connectors: Amazon Connect, Amazon EventBridge, Amazon Lookout for Metrics, Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you must include this
   *       parameter in your request.</p>
   */
  connectorProfileName?: string;

  /**
   * @public
   * <p>The type of connector to reset cached metadata for.</p>
   *          <p>You must include this parameter in your request if you're resetting the cache for any of
   *       the following connectors: Amazon Connect, Amazon EventBridge, Amazon Lookout for Metrics,
   *         Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you
   *       can omit this parameter from your request. </p>
   */
  connectorType?: ConnectorType;

  /**
   * @public
   * <p>Use this parameter if you want to reset cached metadata about the details for an
   *       individual entity.</p>
   *          <p>If you don't include this parameter in your request, Amazon AppFlow only resets
   *       cached metadata about entity names, not entity details.</p>
   */
  connectorEntityName?: string;

  /**
   * @public
   * <p>Use this parameter only if you’re resetting the cached metadata about a nested entity.
   *       Only some connectors support nested entities. A nested entity is one that has another entity
   *       as a parent. To use this parameter, specify the name of the parent entity.</p>
   *          <p>To look up the parent-child relationship of entities, you can send a ListConnectorEntities
   *       request that omits the entitiesPath parameter. Amazon AppFlow will return a list of
   *       top-level entities. For each one, it indicates whether the entity has nested entities. Then,
   *       in a subsequent ListConnectorEntities request, you can specify a parent entity name for the
   *       entitiesPath parameter. Amazon AppFlow will return a list of the child entities for that
   *       parent.</p>
   */
  entitiesPath?: string;

  /**
   * @public
   * <p>The API version that you specified in the connector profile that you’re resetting cached
   *       metadata for. You must use this parameter only if the connector supports multiple API versions
   *       or if the connector type is CustomConnector.</p>
   *          <p>To look up how many versions a connector supports, use the DescribeConnectors action. In
   *       the response, find the value that Amazon AppFlow returns for the connectorVersion
   *       parameter.</p>
   *          <p>To look up the connector type, use the DescribeConnectorProfiles action. In the response,
   *       find the value that Amazon AppFlow returns for the connectorType parameter.</p>
   *          <p>To look up the API version that you specified in a connector profile, use the
   *       DescribeConnectorProfiles action.</p>
   */
  apiVersion?: string;
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
   * @public
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * @public
   * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your
   *         <code>StartFlow</code> request completes only once. You choose the value to pass. For
   *       example, if you don't receive a response from your request, you can safely retry the request
   *       with the same <code>clientToken</code> parameter value.</p>
   *          <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are
   *       using inserts a value for you. This way, the SDK can safely retry requests multiple times
   *       after a network error. You must provide your own value for other use cases.</p>
   *          <p>If you specify input parameters that differ from your first request, an error occurs for
   *       flows that run on a schedule or based on an event. However, the error doesn't occur for flows
   *       that run on demand. You set the conditions that initiate your flow for the
   *         <code>triggerConfig</code> parameter.</p>
   *          <p>If you use a different value for <code>clientToken</code>, Amazon AppFlow considers
   *       it a new call to <code>StartFlow</code>. The token is active for 8 hours.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface StartFlowResponse {
  /**
   * @public
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * @public
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus;

  /**
   * @public
   * <p> Returns the internal execution ID of an on-demand flow when the flow is started. For
   *       scheduled or event-triggered flows, this value is null. </p>
   */
  executionId?: string;
}

/**
 * @public
 */
export interface StopFlowRequest {
  /**
   * @public
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;
}

/**
 * @public
 */
export interface StopFlowResponse {
  /**
   * @public
   * <p> The flow's Amazon Resource Name (ARN). </p>
   */
  flowArn?: string;

  /**
   * @public
   * <p> Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus;
}

/**
 * @public
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

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the flow that you want to tag. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p> The tags used to organize, track, or control access for your flow. </p>
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
   * @public
   * <p>The label of the connector. The label is unique for each
   *         <code>ConnectorRegistration</code> in your Amazon Web Services account.</p>
   */
  connectorLabel: string | undefined;

  /**
   * @public
   * <p>Indicates whether Amazon AppFlow should unregister the connector, even if it is
   *       currently in use in one or more connector profiles. The default value is false.</p>
   */
  forceDelete?: boolean;
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
   * @public
   * <p> The Amazon Resource Name (ARN) of the flow that you want to untag. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p> The tag keys associated with the tag that you want to remove from your flow. </p>
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
   * @public
   * <p> The name of the connector profile and is unique for each <code>ConnectorProfile</code> in
   *       the Amazon Web Services account. </p>
   */
  connectorProfileName: string | undefined;

  /**
   * @public
   * <p> Indicates the connection mode and if it is public or private. </p>
   */
  connectionMode: ConnectionMode | undefined;

  /**
   * @public
   * <p> Defines the connector-specific profile configuration and credentials. </p>
   */
  connectorProfileConfig: ConnectorProfileConfig | undefined;

  /**
   * @public
   * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your
   *         <code>UpdateConnectorProfile</code> request completes only once. You choose the value to
   *       pass. For example, if you don't receive a response from your request, you can safely retry the
   *       request with the same <code>clientToken</code> parameter value.</p>
   *          <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are
   *       using inserts a value for you. This way, the SDK can safely retry requests multiple times
   *       after a network error. You must provide your own value for other use cases.</p>
   *          <p>If you specify input parameters that differ from your first request, an error occurs. If
   *       you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new
   *       call to <code>UpdateConnectorProfile</code>. The token is active for 8 hours.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateConnectorProfileResponse {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   */
  connectorProfileArn?: string;
}

/**
 * @public
 */
export interface UpdateConnectorRegistrationRequest {
  /**
   * @public
   * <p>The name of the connector. The name is unique for each connector registration in your AWS
   *       account.</p>
   */
  connectorLabel: string | undefined;

  /**
   * @public
   * <p>A description about the update that you're applying to the connector.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Contains information about the configuration of the connector being registered.</p>
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig;

  /**
   * @public
   * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your
   *         <code>UpdateConnectorRegistration</code> request completes only once. You choose the value
   *       to pass. For example, if you don't receive a response from your request, you can safely retry
   *       the request with the same <code>clientToken</code> parameter value.</p>
   *          <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are
   *       using inserts a value for you. This way, the SDK can safely retry requests multiple times
   *       after a network error. You must provide your own value for other use cases.</p>
   *          <p>If you specify input parameters that differ from your first request, an error occurs. If
   *       you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new
   *       call to <code>UpdateConnectorRegistration</code>. The token is active for 8 hours.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateConnectorRegistrationResponse {
  /**
   * @public
   * <p>The ARN of the connector being updated.</p>
   */
  connectorArn?: string;
}

/**
 * @public
 */
export interface UpdateFlowRequest {
  /**
   * @public
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   */
  flowName: string | undefined;

  /**
   * @public
   * <p> A description of the flow. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The trigger settings that determine how and when the flow runs. </p>
   */
  triggerConfig: TriggerConfig | undefined;

  /**
   * @public
   * <p> Contains information about the configuration of the source connector used in the flow.
   *     </p>
   */
  sourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * @public
   * <p> The configuration that controls how Amazon AppFlow transfers data to the destination
   *       connector. </p>
   */
  destinationFlowConfigList: DestinationFlowConfig[] | undefined;

  /**
   * @public
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the flow
   *       run. </p>
   */
  tasks: Task[] | undefined;

  /**
   * @public
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's
   *       transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it
   *       stores metadata in a data catalog.</p>
   */
  metadataCatalogConfig?: MetadataCatalogConfig;

  /**
   * @public
   * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your
   *         <code>UpdateFlow</code> request completes only once. You choose the value to pass. For
   *       example, if you don't receive a response from your request, you can safely retry the request
   *       with the same <code>clientToken</code> parameter value.</p>
   *          <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are
   *       using inserts a value for you. This way, the SDK can safely retry requests multiple times
   *       after a network error. You must provide your own value for other use cases.</p>
   *          <p>If you specify input parameters that differ from your first request, an error occurs. If
   *       you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new
   *       call to <code>UpdateFlow</code>. The token is active for 8 hours.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
  /**
   * @public
   * <p>Indicates the current status of the flow. </p>
   */
  flowStatus?: FlowStatus;
}

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
export const ApiKeyCredentialsFilterSensitiveLog = (obj: ApiKeyCredentials): any => ({
  ...obj,
  ...(obj.apiKey && { apiKey: SENSITIVE_STRING }),
  ...(obj.apiSecretKey && { apiSecretKey: SENSITIVE_STRING }),
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
  ...(obj.jwtToken && { jwtToken: SENSITIVE_STRING }),
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
  ...(obj.oAuth2Credentials && { oAuth2Credentials: OAuth2CredentialsFilterSensitiveLog(obj.oAuth2Credentials) }),
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
export const UpdateConnectorProfileRequestFilterSensitiveLog = (obj: UpdateConnectorProfileRequest): any => ({
  ...obj,
});
