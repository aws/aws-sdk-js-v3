// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AppflowServiceException as __BaseException } from "./AppflowServiceException";

/**
 * <p>AppFlow/Requester has invalid or missing permissions.</p>
 * @public
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
 * <p> The aggregation settings that you can use to customize the output format of your flow
 *       data. </p>
 * @public
 */
export interface AggregationConfig {
  /**
   * <p> Specifies whether Amazon AppFlow aggregates the flow records into a single file, or
   *       leave them unaggregated. </p>
   * @public
   */
  aggregationType?: AggregationType | undefined;

  /**
   * <p>The desired file size, in MB, for each output file that Amazon AppFlow writes to the
   *       flow destination. For each file, Amazon AppFlow attempts to achieve the size that you
   *       specify. The actual file sizes might differ from this target based on the number and size of
   *       the records that each file contains.</p>
   * @public
   */
  targetFileSize?: number | undefined;
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
 * <p> The connector-specific credentials required when using Amplitude. </p>
 * @public
 */
export interface AmplitudeConnectorProfileCredentials {
  /**
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   * @public
   */
  apiKey: string | undefined;

  /**
   * <p> The Secret Access Key portion of the credentials. </p>
   * @public
   */
  secretKey: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Amplitude. </p>
 * @public
 */
export interface AmplitudeConnectorProfileProperties {}

/**
 * <p> The connector metadata specific to Amplitude. </p>
 * @public
 */
export interface AmplitudeMetadata {}

/**
 * <p> The properties that are applied when Amplitude is being used as a source. </p>
 * @public
 */
export interface AmplitudeSourceProperties {
  /**
   * <p> The object specified in the Amplitude flow source. </p>
   * @public
   */
  object: string | undefined;
}

/**
 * <p>The API key credentials required for API key authentication.</p>
 * @public
 */
export interface ApiKeyCredentials {
  /**
   * <p>The API key required for API key authentication.</p>
   * @public
   */
  apiKey: string | undefined;

  /**
   * <p>The API secret key required for API key authentication.</p>
   * @public
   */
  apiSecretKey?: string | undefined;
}

/**
 * <p>Information about required authentication parameters.</p>
 * @public
 */
export interface AuthParameter {
  /**
   * <p>The authentication key required to authenticate with the connector.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>Indicates whether this authentication parameter is required.</p>
   * @public
   */
  isRequired?: boolean | undefined;

  /**
   * <p>Label used for authentication parameter.</p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>A description about the authentication parameter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates whether this authentication parameter is a sensitive field.</p>
   * @public
   */
  isSensitiveField?: boolean | undefined;

  /**
   * <p>Contains default values for this authentication parameter that are supplied by the
   *       connector.</p>
   * @public
   */
  connectorSuppliedValues?: string[] | undefined;
}

/**
 * <p>Configuration information required for custom authentication.</p>
 * @public
 */
export interface CustomAuthConfig {
  /**
   * <p>The authentication type that the custom connector uses.</p>
   * @public
   */
  customAuthenticationType?: string | undefined;

  /**
   * <p>Information about authentication parameters required for authentication.</p>
   * @public
   */
  authParameters?: AuthParameter[] | undefined;
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
 * <p>Custom parameter required for OAuth 2.0 authentication.</p>
 * @public
 */
export interface OAuth2CustomParameter {
  /**
   * <p>The key of the custom parameter required for OAuth 2.0 authentication.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>Indicates whether the custom parameter for OAuth 2.0 authentication is required.</p>
   * @public
   */
  isRequired?: boolean | undefined;

  /**
   * <p>The label of the custom parameter used for OAuth 2.0 authentication.</p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>A description about the custom parameter used for OAuth 2.0 authentication.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates whether this authentication custom parameter is a sensitive field.</p>
   * @public
   */
  isSensitiveField?: boolean | undefined;

  /**
   * <p>Contains default values for this authentication parameter that are supplied by the
   *       connector.</p>
   * @public
   */
  connectorSuppliedValues?: string[] | undefined;

  /**
   * <p>Indicates whether custom parameter is used with TokenUrl or AuthUrl.</p>
   * @public
   */
  type?: OAuth2CustomPropType | undefined;
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
 * <p>Contains the default values required for OAuth 2.0 authentication.</p>
 * @public
 */
export interface OAuth2Defaults {
  /**
   * <p>OAuth 2.0 scopes that the connector supports.</p>
   * @public
   */
  oauthScopes?: string[] | undefined;

  /**
   * <p>Token URLs that can be used for OAuth 2.0 authentication.</p>
   * @public
   */
  tokenUrls?: string[] | undefined;

  /**
   * <p>Auth code URLs that can be used for OAuth 2.0 authentication.</p>
   * @public
   */
  authCodeUrls?: string[] | undefined;

  /**
   * <p>OAuth 2.0 grant types supported by the connector.</p>
   * @public
   */
  oauth2GrantTypesSupported?: OAuth2GrantType[] | undefined;

  /**
   * <p>List of custom parameters required for OAuth 2.0 authentication.</p>
   * @public
   */
  oauth2CustomProperties?: OAuth2CustomParameter[] | undefined;
}

/**
 * <p>Contains information about the authentication config that the connector supports.</p>
 * @public
 */
export interface AuthenticationConfig {
  /**
   * <p>Indicates whether basic authentication is supported by the connector.</p>
   * @public
   */
  isBasicAuthSupported?: boolean | undefined;

  /**
   * <p>Indicates whether API key authentication is supported by the connector</p>
   * @public
   */
  isApiKeyAuthSupported?: boolean | undefined;

  /**
   * <p>Indicates whether OAuth 2.0 authentication is supported by the connector.</p>
   * @public
   */
  isOAuth2Supported?: boolean | undefined;

  /**
   * <p>Indicates whether custom authentication is supported by the connector</p>
   * @public
   */
  isCustomAuthSupported?: boolean | undefined;

  /**
   * <p>Contains the default values required for OAuth 2.0 authentication.</p>
   * @public
   */
  oAuth2Defaults?: OAuth2Defaults | undefined;

  /**
   * <p>Contains information required for custom authentication.</p>
   * @public
   */
  customAuthConfigs?: CustomAuthConfig[] | undefined;
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
 * <p> The basic auth credentials required for basic authentication. </p>
 * @public
 */
export interface BasicAuthCredentials {
  /**
   * <p> The username to use to connect to a resource. </p>
   * @public
   */
  username: string | undefined;

  /**
   * <p> The password to use to connect to a resource.</p>
   * @public
   */
  password: string | undefined;
}

/**
 * @public
 */
export interface CancelFlowExecutionsRequest {
  /**
   * <p>The name of a flow with active runs that you want to cancel.</p>
   * @public
   */
  flowName: string | undefined;

  /**
   * <p>The ID of each active run to cancel. These runs must belong to the flow you specify in
   *       your request.</p>
   *          <p>If you omit this parameter, your request ends all active runs that belong to the
   *       flow.</p>
   * @public
   */
  executionIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CancelFlowExecutionsResponse {
  /**
   * <p>The IDs of runs that Amazon AppFlow couldn't cancel. These runs might be ineligible
   *       for canceling because they haven't started yet or have already completed.</p>
   * @public
   */
  invalidExecutions?: string[] | undefined;
}

/**
 * <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 * @public
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
 * <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 * @public
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
 * <p>API calls have exceeded the maximum allowed API request rate per account and per Region.
 *     </p>
 * @public
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
 * <p> The request has invalid or missing parameters. </p>
 * @public
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
 * <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 * @public
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
 * <p> An error occurred when authenticating with the connector endpoint. </p>
 * @public
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
 * @public
 */
export interface CustomerProfilesMetadata {}

/**
 * <p> The connector metadata specific to Datadog. </p>
 * @public
 */
export interface DatadogMetadata {}

/**
 * <p> The connector metadata specific to Dynatrace. </p>
 * @public
 */
export interface DynatraceMetadata {}

/**
 * <p> The connector metadata specific to Amazon EventBridge. </p>
 * @public
 */
export interface EventBridgeMetadata {}

/**
 * <p> The connector metadata specific to Google Analytics. </p>
 * @public
 */
export interface GoogleAnalyticsMetadata {
  /**
   * <p> The desired authorization scope for the Google Analytics account. </p>
   * @public
   */
  oAuthScopes?: string[] | undefined;
}

/**
 * <p> The connector metadata specific to Amazon Honeycode. </p>
 * @public
 */
export interface HoneycodeMetadata {
  /**
   * <p> The desired authorization scope for the Amazon Honeycode account. </p>
   * @public
   */
  oAuthScopes?: string[] | undefined;
}

/**
 * <p> The connector metadata specific to Infor Nexus. </p>
 * @public
 */
export interface InforNexusMetadata {}

/**
 * <p> The connector metadata specific to Marketo. </p>
 * @public
 */
export interface MarketoMetadata {}

/**
 * <p>The connector metadata specific to Salesforce Pardot.</p>
 * @public
 */
export interface PardotMetadata {}

/**
 * <p> The connector metadata specific to Amazon Redshift. </p>
 * @public
 */
export interface RedshiftMetadata {}

/**
 * <p> The connector metadata specific to Amazon S3. </p>
 * @public
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
 * <p> The connector metadata specific to Salesforce. </p>
 * @public
 */
export interface SalesforceMetadata {
  /**
   * <p> The desired authorization scope for the Salesforce account. </p>
   * @public
   */
  oAuthScopes?: string[] | undefined;

  /**
   * <p>The Salesforce APIs that you can have Amazon AppFlow use when your flows transfers
   *       data to or from Salesforce.</p>
   * @public
   */
  dataTransferApis?: SalesforceDataTransferApi[] | undefined;

  /**
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
   *             <dt>JWT_BEARER</dt>
   *             <dd>
   *                <p>Amazon AppFlow passes a JSON web token (JWT) when it requests the access token
   *             from Salesforce. You provide the JWT to Amazon AppFlow when you define the
   *             connection to your Salesforce account. When you use this grant type, you don't need to
   *             log in to your Salesforce account to authorize Amazon AppFlow to access your
   *             records.</p>
   *             </dd>
   *          </dl>
   *          <note>
   *             <p>The CLIENT_CREDENTIALS value is not supported for Salesforce.</p>
   *          </note>
   * @public
   */
  oauth2GrantTypesSupported?: OAuth2GrantType[] | undefined;
}

/**
 * <p> The connector metadata specific to SAPOData. </p>
 * @public
 */
export interface SAPODataMetadata {}

/**
 * <p> The connector metadata specific to ServiceNow. </p>
 * @public
 */
export interface ServiceNowMetadata {}

/**
 * <p> The connector metadata specific to Singular. </p>
 * @public
 */
export interface SingularMetadata {}

/**
 * <p> The connector metadata specific to Slack. </p>
 * @public
 */
export interface SlackMetadata {
  /**
   * <p> The desired authorization scope for the Slack account. </p>
   * @public
   */
  oAuthScopes?: string[] | undefined;
}

/**
 * <p> The connector metadata specific to Snowflake. </p>
 * @public
 */
export interface SnowflakeMetadata {
  /**
   * <p> Specifies the supported Amazon Web Services Regions when using Snowflake. </p>
   * @public
   */
  supportedRegions?: string[] | undefined;
}

/**
 * <p> The connector metadata specific to Trend Micro. </p>
 * @public
 */
export interface TrendmicroMetadata {}

/**
 * <p> The connector metadata specific to Upsolver. </p>
 * @public
 */
export interface UpsolverMetadata {}

/**
 * <p> The connector metadata specific to Veeva. </p>
 * @public
 */
export interface VeevaMetadata {}

/**
 * <p> The connector metadata specific to Zendesk. </p>
 * @public
 */
export interface ZendeskMetadata {
  /**
   * <p> The desired authorization scope for the Zendesk account. </p>
   * @public
   */
  oAuthScopes?: string[] | undefined;
}

/**
 * <p> A structure to specify connector-specific metadata such as <code>oAuthScopes</code>,
 *         <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. </p>
 * @public
 */
export interface ConnectorMetadata {
  /**
   * <p> The connector metadata specific to Amplitude. </p>
   * @public
   */
  Amplitude?: AmplitudeMetadata | undefined;

  /**
   * <p> The connector metadata specific to Datadog. </p>
   * @public
   */
  Datadog?: DatadogMetadata | undefined;

  /**
   * <p> The connector metadata specific to Dynatrace. </p>
   * @public
   */
  Dynatrace?: DynatraceMetadata | undefined;

  /**
   * <p> The connector metadata specific to Google Analytics. </p>
   * @public
   */
  GoogleAnalytics?: GoogleAnalyticsMetadata | undefined;

  /**
   * <p> The connector metadata specific to Infor Nexus. </p>
   * @public
   */
  InforNexus?: InforNexusMetadata | undefined;

  /**
   * <p> The connector metadata specific to Marketo. </p>
   * @public
   */
  Marketo?: MarketoMetadata | undefined;

  /**
   * <p> The connector metadata specific to Amazon Redshift. </p>
   * @public
   */
  Redshift?: RedshiftMetadata | undefined;

  /**
   * <p> The connector metadata specific to Amazon S3. </p>
   * @public
   */
  S3?: S3Metadata | undefined;

  /**
   * <p> The connector metadata specific to Salesforce. </p>
   * @public
   */
  Salesforce?: SalesforceMetadata | undefined;

  /**
   * <p> The connector metadata specific to ServiceNow. </p>
   * @public
   */
  ServiceNow?: ServiceNowMetadata | undefined;

  /**
   * <p> The connector metadata specific to Singular. </p>
   * @public
   */
  Singular?: SingularMetadata | undefined;

  /**
   * <p> The connector metadata specific to Slack. </p>
   * @public
   */
  Slack?: SlackMetadata | undefined;

  /**
   * <p> The connector metadata specific to Snowflake. </p>
   * @public
   */
  Snowflake?: SnowflakeMetadata | undefined;

  /**
   * <p> The connector metadata specific to Trend Micro. </p>
   * @public
   */
  Trendmicro?: TrendmicroMetadata | undefined;

  /**
   * <p> The connector metadata specific to Veeva. </p>
   * @public
   */
  Veeva?: VeevaMetadata | undefined;

  /**
   * <p> The connector metadata specific to Zendesk. </p>
   * @public
   */
  Zendesk?: ZendeskMetadata | undefined;

  /**
   * <p> The connector metadata specific to Amazon EventBridge. </p>
   * @public
   */
  EventBridge?: EventBridgeMetadata | undefined;

  /**
   * <p> The connector metadata specific to Upsolver. </p>
   * @public
   */
  Upsolver?: UpsolverMetadata | undefined;

  /**
   * <p> The connector metadata specific to Amazon Connect Customer Profiles. </p>
   * @public
   */
  CustomerProfiles?: CustomerProfilesMetadata | undefined;

  /**
   * <p> The connector metadata specific to Amazon Honeycode. </p>
   * @public
   */
  Honeycode?: HoneycodeMetadata | undefined;

  /**
   * <p> The connector metadata specific to SAPOData. </p>
   * @public
   */
  SAPOData?: SAPODataMetadata | undefined;

  /**
   * <p>The connector metadata specific to Salesforce Pardot.</p>
   * @public
   */
  Pardot?: PardotMetadata | undefined;
}

/**
 * <p>Contains information about the configuration of the lambda which is being registered as
 *       the connector.</p>
 * @public
 */
export interface LambdaConnectorProvisioningConfig {
  /**
   * <p>Lambda ARN of the connector being registered.</p>
   * @public
   */
  lambdaArn: string | undefined;
}

/**
 * <p>Contains information about the configuration of the connector being registered.</p>
 * @public
 */
export interface ConnectorProvisioningConfig {
  /**
   * <p>Contains information about the configuration of the lambda which is being registered as
   *       the connector.</p>
   * @public
   */
  lambda?: LambdaConnectorProvisioningConfig | undefined;
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
 * <p>Contains information about the connector runtime settings that are required for flow
 *       execution.</p>
 * @public
 */
export interface ConnectorRuntimeSetting {
  /**
   * <p>Contains value information about the connector runtime setting.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>Data type of the connector runtime setting.</p>
   * @public
   */
  dataType?: string | undefined;

  /**
   * <p>Indicates whether this connector runtime setting is required.</p>
   * @public
   */
  isRequired?: boolean | undefined;

  /**
   * <p>A label used for connector runtime setting.</p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>A description about the connector runtime setting.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates the scope of the connector runtime setting.</p>
   * @public
   */
  scope?: string | undefined;

  /**
   * <p>Contains default values for the connector runtime setting that are supplied by the
   *       connector.</p>
   * @public
   */
  connectorSuppliedValueOptions?: string[] | undefined;
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
 * <p>The API of the connector application that Amazon AppFlow uses to transfer your
 *       data.</p>
 * @public
 */
export interface DataTransferApi {
  /**
   * <p>The name of the connector application API.</p>
   * @public
   */
  Name?: string | undefined;

  /**
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
   * @public
   */
  Type?: DataTransferApiType | undefined;
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
 * <p> The configuration settings related to a given connector. </p>
 * @public
 */
export interface ConnectorConfiguration {
  /**
   * <p> Specifies whether the connector can be used as a source. </p>
   * @public
   */
  canUseAsSource?: boolean | undefined;

  /**
   * <p> Specifies whether the connector can be used as a destination. </p>
   * @public
   */
  canUseAsDestination?: boolean | undefined;

  /**
   * <p> Lists the connectors that are available for use as destinations. </p>
   * @public
   */
  supportedDestinationConnectors?: ConnectorType[] | undefined;

  /**
   * <p> Specifies the supported flow frequency for that connector. </p>
   * @public
   */
  supportedSchedulingFrequencies?: ScheduleFrequencyType[] | undefined;

  /**
   * <p> Specifies if PrivateLink is enabled for that connector. </p>
   * @public
   */
  isPrivateLinkEnabled?: boolean | undefined;

  /**
   * <p> Specifies if a PrivateLink endpoint URL is required. </p>
   * @public
   */
  isPrivateLinkEndpointUrlRequired?: boolean | undefined;

  /**
   * <p> Specifies the supported trigger types for the flow. </p>
   * @public
   */
  supportedTriggerTypes?: TriggerType[] | undefined;

  /**
   * <p> Specifies connector-specific metadata such as <code>oAuthScopes</code>,
   *         <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. </p>
   * @public
   */
  connectorMetadata?: ConnectorMetadata | undefined;

  /**
   * <p>The connector type.</p>
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * <p>The label used for registering the connector.</p>
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * <p>A description about the connector.</p>
   * @public
   */
  connectorDescription?: string | undefined;

  /**
   * <p>The owner who developed the connector.</p>
   * @public
   */
  connectorOwner?: string | undefined;

  /**
   * <p>The connector name.</p>
   * @public
   */
  connectorName?: string | undefined;

  /**
   * <p>The connector version.</p>
   * @public
   */
  connectorVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the registered connector.</p>
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * <p>The connection modes that the connector supports.</p>
   * @public
   */
  connectorModes?: string[] | undefined;

  /**
   * <p>The authentication config required for the connector.</p>
   * @public
   */
  authenticationConfig?: AuthenticationConfig | undefined;

  /**
   * <p>The required connector runtime settings.</p>
   * @public
   */
  connectorRuntimeSettings?: ConnectorRuntimeSetting[] | undefined;

  /**
   * <p>A list of API versions that are supported by the connector.</p>
   * @public
   */
  supportedApiVersions?: string[] | undefined;

  /**
   * <p>A list of operators supported by the connector.</p>
   * @public
   */
  supportedOperators?: Operators[] | undefined;

  /**
   * <p>A list of write operations supported by the connector.</p>
   * @public
   */
  supportedWriteOperations?: WriteOperationType[] | undefined;

  /**
   * <p>The provisioning type used to register the connector.</p>
   * @public
   */
  connectorProvisioningType?: ConnectorProvisioningType | undefined;

  /**
   * <p>The configuration required for registering the connector.</p>
   * @public
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig | undefined;

  /**
   * <p>Logo URL of the connector.</p>
   * @public
   */
  logoURL?: string | undefined;

  /**
   * <p>The date on which the connector was registered.</p>
   * @public
   */
  registeredAt?: Date | undefined;

  /**
   * <p>Information about who registered the connector.</p>
   * @public
   */
  registeredBy?: string | undefined;

  /**
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
   * @public
   */
  supportedDataTransferTypes?: SupportedDataTransferType[] | undefined;

  /**
   * <p>The APIs of the connector application that Amazon AppFlow can use to transfer your
   *       data.</p>
   * @public
   */
  supportedDataTransferApis?: DataTransferApi[] | undefined;
}

/**
 * <p>Information about the registered connector.</p>
 * @public
 */
export interface ConnectorDetail {
  /**
   * <p>A description about the registered connector.</p>
   * @public
   */
  connectorDescription?: string | undefined;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  connectorName?: string | undefined;

  /**
   * <p>The owner of the connector.</p>
   * @public
   */
  connectorOwner?: string | undefined;

  /**
   * <p>The connector version.</p>
   * @public
   */
  connectorVersion?: string | undefined;

  /**
   * <p>The application type of the connector.</p>
   * @public
   */
  applicationType?: string | undefined;

  /**
   * <p>The connector type.</p>
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * <p>A label used for the connector.</p>
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * <p>The time at which the connector was registered.</p>
   * @public
   */
  registeredAt?: Date | undefined;

  /**
   * <p>The user who registered the connector.</p>
   * @public
   */
  registeredBy?: string | undefined;

  /**
   * <p>The provisioning type that the connector uses.</p>
   * @public
   */
  connectorProvisioningType?: ConnectorProvisioningType | undefined;

  /**
   * <p>The connection mode that the connector supports.</p>
   * @public
   */
  connectorModes?: string[] | undefined;

  /**
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
   * @public
   */
  supportedDataTransferTypes?: SupportedDataTransferType[] | undefined;
}

/**
 * <p> The high-level entity that can be queried in Amazon AppFlow. For example, a
 *       Salesforce entity might be an <i>Account</i> or
 *       <i>Opportunity</i>, whereas a ServiceNow entity might be an
 *         <i>Incident</i>. </p>
 * @public
 */
export interface ConnectorEntity {
  /**
   * <p> The name of the connector entity. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The label applied to the connector entity. </p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p> Specifies whether the connector entity is a parent or a category and has more entities
   *       nested underneath it. If another call is made with <code>entitiesPath =
   *         "the_current_entity_name_with_hasNestedEntities_true"</code>, then it returns the nested
   *       entities underneath it. This provides a way to retrieve all supported entities in a recursive
   *       fashion. </p>
   * @public
   */
  hasNestedEntities?: boolean | undefined;
}

/**
 * <p> The properties that can be applied to a field when connector is being used as a
 *       destination. </p>
 * @public
 */
export interface DestinationFieldProperties {
  /**
   * <p> Specifies if the destination field can be created by the current user. </p>
   * @public
   */
  isCreatable?: boolean | undefined;

  /**
   * <p> Specifies if the destination field can have a null value. </p>
   * @public
   */
  isNullable?: boolean | undefined;

  /**
   * <p> Specifies if the flow run can either insert new rows in the destination field if they do
   *       not already exist, or update them if they do. </p>
   * @public
   */
  isUpsertable?: boolean | undefined;

  /**
   * <p> Specifies whether the field can be updated during an <code>UPDATE</code> or
   *         <code>UPSERT</code> write operation. </p>
   * @public
   */
  isUpdatable?: boolean | undefined;

  /**
   * <p>Specifies whether the field can use the default value during a Create operation.</p>
   * @public
   */
  isDefaultedOnCreate?: boolean | undefined;

  /**
   * <p> A list of supported write operations. For each write operation listed, this field can be
   *       used in <code>idFieldNames</code> when that write operation is present as a destination
   *       option. </p>
   * @public
   */
  supportedWriteOperations?: WriteOperationType[] | undefined;
}

/**
 * <p> The properties that can be applied to a field when the connector is being used as a
 *       source. </p>
 * @public
 */
export interface SourceFieldProperties {
  /**
   * <p> Indicates whether the field can be returned in a search result. </p>
   * @public
   */
  isRetrievable?: boolean | undefined;

  /**
   * <p> Indicates if the field can be queried. </p>
   * @public
   */
  isQueryable?: boolean | undefined;

  /**
   * <p>Indicates if this timestamp field can be used for incremental queries.</p>
   * @public
   */
  isTimestampFieldForIncrementalQueries?: boolean | undefined;
}

/**
 * <p>The range of values that the property supports.</p>
 * @public
 */
export interface Range {
  /**
   * <p>Maximum value supported by the field.</p>
   * @public
   */
  maximum?: number | undefined;

  /**
   * <p>Minimum value supported by the field.</p>
   * @public
   */
  minimum?: number | undefined;
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
 * <p> Contains details regarding the supported field type and the operators that can be applied
 *       for filtering. </p>
 * @public
 */
export interface FieldTypeDetails {
  /**
   * <p> The type of field, such as string, integer, date, and so on. </p>
   * @public
   */
  fieldType: string | undefined;

  /**
   * <p> The list of operators supported by a field. </p>
   * @public
   */
  filterOperators: Operator[] | undefined;

  /**
   * <p> The list of values that a field can contain. For example, a Boolean
   *         <code>fieldType</code> can have two values: "true" and "false". </p>
   * @public
   */
  supportedValues?: string[] | undefined;

  /**
   * <p>The regular expression pattern for the field name.</p>
   * @public
   */
  valueRegexPattern?: string | undefined;

  /**
   * <p>The date format that the field supports.</p>
   * @public
   */
  supportedDateFormat?: string | undefined;

  /**
   * <p>The range of values this field can hold.</p>
   * @public
   */
  fieldValueRange?: Range | undefined;

  /**
   * <p>This is the allowable length range for this field's value.</p>
   * @public
   */
  fieldLengthRange?: Range | undefined;
}

/**
 * <p> Contains details regarding all the supported <code>FieldTypes</code> and their
 *       corresponding <code>filterOperators</code> and <code>supportedValues</code>. </p>
 * @public
 */
export interface SupportedFieldTypeDetails {
  /**
   * <p> The initial supported version for <code>fieldType</code>. If this is later changed to a
   *       different version, v2 will be introduced. </p>
   * @public
   */
  v1: FieldTypeDetails | undefined;
}

/**
 * <p> Describes the data model of a connector field. For example, for an
 *         <i>account</i> entity, the fields would be <i>account name</i>,
 *         <i>account ID</i>, and so on. </p>
 * @public
 */
export interface ConnectorEntityField {
  /**
   * <p> The unique identifier of the connector field. </p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The parent identifier of the connector field.</p>
   * @public
   */
  parentIdentifier?: string | undefined;

  /**
   * <p> The label applied to a connector entity field. </p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>Booelan value that indicates whether this field can be used as a primary key.</p>
   * @public
   */
  isPrimaryKey?: boolean | undefined;

  /**
   * <p>Default value that can be assigned to this field.</p>
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * <p>Booelan value that indicates whether this field is deprecated or not.</p>
   * @public
   */
  isDeprecated?: boolean | undefined;

  /**
   * <p> Contains details regarding the supported <code>FieldType</code>, including the
   *       corresponding <code>filterOperators</code> and <code>supportedValues</code>. </p>
   * @public
   */
  supportedFieldTypeDetails?: SupportedFieldTypeDetails | undefined;

  /**
   * <p> A description of the connector entity field. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The properties that can be applied to a field when the connector is being used as a
   *       source. </p>
   * @public
   */
  sourceProperties?: SourceFieldProperties | undefined;

  /**
   * <p> The properties applied to a field when the connector is being used as a destination.
   *     </p>
   * @public
   */
  destinationProperties?: DestinationFieldProperties | undefined;

  /**
   * <p>A map that has specific properties related to the ConnectorEntityField.</p>
   * @public
   */
  customProperties?: Record<string, string> | undefined;
}

/**
 * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
 *       Google Analytics, Marketo, Zendesk, and Slack. </p>
 * @public
 */
export interface ConnectorOAuthRequest {
  /**
   * <p> The code provided by the connector when it has been authenticated via the connected app.
   *     </p>
   * @public
   */
  authCode?: string | undefined;

  /**
   * <p> The URL to which the authentication server redirects the browser after authorization has
   *       been granted. </p>
   * @public
   */
  redirectUri?: string | undefined;
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
 * <p> The operation to be performed on the provided source fields. </p>
 * @public
 */
export interface ConnectorOperator {
  /**
   * <p> The operation to be performed on the provided Amplitude source fields. </p>
   * @public
   */
  Amplitude?: AmplitudeConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Datadog source fields. </p>
   * @public
   */
  Datadog?: DatadogConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Dynatrace source fields. </p>
   * @public
   */
  Dynatrace?: DynatraceConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Google Analytics source fields. </p>
   * @public
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Infor Nexus source fields. </p>
   * @public
   */
  InforNexus?: InforNexusConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Marketo source fields. </p>
   * @public
   */
  Marketo?: MarketoConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Amazon S3 source fields. </p>
   * @public
   */
  S3?: S3ConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Salesforce source fields. </p>
   * @public
   */
  Salesforce?: SalesforceConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided ServiceNow source fields. </p>
   * @public
   */
  ServiceNow?: ServiceNowConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Singular source fields. </p>
   * @public
   */
  Singular?: SingularConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Slack source fields. </p>
   * @public
   */
  Slack?: SlackConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Trend Micro source fields. </p>
   * @public
   */
  Trendmicro?: TrendmicroConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Veeva source fields. </p>
   * @public
   */
  Veeva?: VeevaConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided Zendesk source fields. </p>
   * @public
   */
  Zendesk?: ZendeskConnectorOperator | undefined;

  /**
   * <p> The operation to be performed on the provided SAPOData source fields. </p>
   * @public
   */
  SAPOData?: SAPODataConnectorOperator | undefined;

  /**
   * <p>Operators supported by the custom connector.</p>
   * @public
   */
  CustomConnector?: Operator | undefined;

  /**
   * <p>The operation to be performed on the provided Salesforce Pardot source fields.</p>
   * @public
   */
  Pardot?: PardotConnectorOperator | undefined;
}

/**
 * <p>The OAuth 2.0 properties required for OAuth 2.0 authentication.</p>
 * @public
 */
export interface OAuth2Properties {
  /**
   * <p>The token URL required for OAuth 2.0 authentication.</p>
   * @public
   */
  tokenUrl: string | undefined;

  /**
   * <p>The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication.</p>
   * @public
   */
  oAuth2GrantType: OAuth2GrantType | undefined;

  /**
   * <p>Associates your token URL with a map of properties that you define. Use this parameter to
   *       provide any additional details that the connector requires to authenticate your
   *       request.</p>
   * @public
   */
  tokenUrlCustomProperties?: Record<string, string> | undefined;
}

/**
 * <p>The profile properties required by the custom connector.</p>
 * @public
 */
export interface CustomConnectorProfileProperties {
  /**
   * <p>A map of properties that are required to create a profile for the custom connector.</p>
   * @public
   */
  profileProperties?: Record<string, string> | undefined;

  /**
   * <p>The OAuth 2.0 properties required for OAuth 2.0 authentication.</p>
   * @public
   */
  oAuth2Properties?: OAuth2Properties | undefined;
}

/**
 * <p> The connector-specific profile properties required by Datadog. </p>
 * @public
 */
export interface DatadogConnectorProfileProperties {
  /**
   * <p> The location of the Datadog resource. </p>
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required by Dynatrace. </p>
 * @public
 */
export interface DynatraceConnectorProfileProperties {
  /**
   * <p> The location of the Dynatrace resource. </p>
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required by Google Analytics. </p>
 * @public
 */
export interface GoogleAnalyticsConnectorProfileProperties {}

/**
 * <p> The connector-specific properties required when using Amazon Honeycode. </p>
 * @public
 */
export interface HoneycodeConnectorProfileProperties {}

/**
 * <p> The connector-specific profile properties required by Infor Nexus. </p>
 * @public
 */
export interface InforNexusConnectorProfileProperties {
  /**
   * <p> The location of the Infor Nexus resource. </p>
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Marketo. </p>
 * @public
 */
export interface MarketoConnectorProfileProperties {
  /**
   * <p> The location of the Marketo resource. </p>
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * <p>The connector-specific profile properties required when using Salesforce Pardot.</p>
 * @public
 */
export interface PardotConnectorProfileProperties {
  /**
   * <p>The location of the Salesforce Pardot resource.</p>
   * @public
   */
  instanceUrl?: string | undefined;

  /**
   * <p>Indicates whether the connector profile applies to a sandbox or production
   *       environment.</p>
   * @public
   */
  isSandboxEnvironment?: boolean | undefined;

  /**
   * <p>The business unit id of Salesforce Pardot instance.</p>
   * @public
   */
  businessUnitId?: string | undefined;
}

/**
 * <p> The connector-specific profile properties when using Amazon Redshift. </p>
 * @public
 */
export interface RedshiftConnectorProfileProperties {
  /**
   * <p> The JDBC URL of the Amazon Redshift cluster. </p>
   * @public
   */
  databaseUrl?: string | undefined;

  /**
   * <p> A name for the associated Amazon S3 bucket. </p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of IAM role that grants Amazon Redshift
   *       read-only access to Amazon S3. For more information, and for the polices that you
   *       attach to this role, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#redshift-access-s3">Allow Amazon Redshift to access your Amazon AppFlow data in Amazon S3</a>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that permits Amazon AppFlow to access your Amazon Redshift database through the Data API. For more
   *       information, and for the polices that you attach to this role, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#access-redshift">Allow Amazon AppFlow to access Amazon Redshift databases with the Data
   *         API</a>.</p>
   * @public
   */
  dataApiRoleArn?: string | undefined;

  /**
   * <p>Indicates whether the connector profile defines a connection to an Amazon Redshift
   *       Serverless data warehouse.</p>
   * @public
   */
  isRedshiftServerless?: boolean | undefined;

  /**
   * <p>The unique ID that's assigned to an Amazon Redshift cluster.</p>
   * @public
   */
  clusterIdentifier?: string | undefined;

  /**
   * <p>The name of an Amazon Redshift workgroup.</p>
   * @public
   */
  workgroupName?: string | undefined;

  /**
   * <p>The name of an Amazon Redshift database.</p>
   * @public
   */
  databaseName?: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Salesforce. </p>
 * @public
 */
export interface SalesforceConnectorProfileProperties {
  /**
   * <p> The location of the Salesforce resource. </p>
   * @public
   */
  instanceUrl?: string | undefined;

  /**
   * <p> Indicates whether the connector profile applies to a sandbox or production environment.
   *     </p>
   * @public
   */
  isSandboxEnvironment?: boolean | undefined;

  /**
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
   * @public
   */
  usePrivateLinkForMetadataAndAuthorization?: boolean | undefined;
}

/**
 * <p> The OAuth properties required for OAuth type authentication. </p>
 * @public
 */
export interface OAuthProperties {
  /**
   * <p> The token url required to fetch access/refresh tokens using authorization code and also
   *       to refresh expired access token using refresh token.</p>
   * @public
   */
  tokenUrl: string | undefined;

  /**
   * <p> The authorization code url required to redirect to SAP Login Page to fetch authorization
   *       code for OAuth type authentication. </p>
   * @public
   */
  authCodeUrl: string | undefined;

  /**
   * <p> The OAuth scopes required for OAuth type authentication. </p>
   * @public
   */
  oAuthScopes: string[] | undefined;
}

/**
 * <p> The connector-specific profile properties required when using SAPOData. </p>
 * @public
 */
export interface SAPODataConnectorProfileProperties {
  /**
   * <p> The location of the SAPOData resource. </p>
   * @public
   */
  applicationHostUrl: string | undefined;

  /**
   * <p> The application path to catalog service. </p>
   * @public
   */
  applicationServicePath: string | undefined;

  /**
   * <p> The port number of the SAPOData instance. </p>
   * @public
   */
  portNumber: number | undefined;

  /**
   * <p> The client number for the client creating the connection. </p>
   * @public
   */
  clientNumber: string | undefined;

  /**
   * <p> The logon language of SAPOData instance. </p>
   * @public
   */
  logonLanguage?: string | undefined;

  /**
   * <p> The SAPOData Private Link service name to be used for private data transfers. </p>
   * @public
   */
  privateLinkServiceName?: string | undefined;

  /**
   * <p> The SAPOData OAuth properties required for OAuth type authentication. </p>
   * @public
   */
  oAuthProperties?: OAuthProperties | undefined;

  /**
   * <p>If you set this parameter to <code>true</code>, Amazon AppFlow bypasses the single
   *       sign-on (SSO) settings in your SAP account when it accesses your SAP OData instance.</p>
   *          <p>Whether you need this option depends on the types of credentials that you applied to your
   *       SAP OData connection profile. If your profile uses basic authentication credentials, SAP SSO
   *       can prevent Amazon AppFlow from connecting to your account with your username and
   *       password. In this case, bypassing SSO makes it possible for Amazon AppFlow to connect
   *       successfully. However, if your profile uses OAuth credentials, this parameter has no
   *       affect.</p>
   * @public
   */
  disableSSO?: boolean | undefined;
}

/**
 * <p> The connector-specific profile properties required when using ServiceNow. </p>
 * @public
 */
export interface ServiceNowConnectorProfileProperties {
  /**
   * <p> The location of the ServiceNow resource. </p>
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Singular. </p>
 * @public
 */
export interface SingularConnectorProfileProperties {}

/**
 * <p> The connector-specific profile properties required when using Slack. </p>
 * @public
 */
export interface SlackConnectorProfileProperties {
  /**
   * <p> The location of the Slack resource. </p>
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Snowflake. </p>
 * @public
 */
export interface SnowflakeConnectorProfileProperties {
  /**
   * <p> The name of the Snowflake warehouse. </p>
   * @public
   */
  warehouse: string | undefined;

  /**
   * <p> The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: <
   *       Database>< Schema><Stage Name>. </p>
   * @public
   */
  stage: string | undefined;

  /**
   * <p> The name of the Amazon S3 bucket associated with Snowflake. </p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p> The bucket path that refers to the Amazon S3 bucket associated with Snowflake.
   *     </p>
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * <p> The Snowflake Private Link service name to be used for private data transfers. </p>
   * @public
   */
  privateLinkServiceName?: string | undefined;

  /**
   * <p> The name of the account. </p>
   * @public
   */
  accountName?: string | undefined;

  /**
   * <p> The Amazon Web Services Region of the Snowflake account. </p>
   * @public
   */
  region?: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Trend Micro. </p>
 * @public
 */
export interface TrendmicroConnectorProfileProperties {}

/**
 * <p> The connector-specific profile properties required when using Veeva. </p>
 * @public
 */
export interface VeevaConnectorProfileProperties {
  /**
   * <p> The location of the Veeva resource. </p>
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required when using Zendesk. </p>
 * @public
 */
export interface ZendeskConnectorProfileProperties {
  /**
   * <p> The location of the Zendesk resource. </p>
   * @public
   */
  instanceUrl: string | undefined;
}

/**
 * <p> The connector-specific profile properties required by each connector. </p>
 * @public
 */
export interface ConnectorProfileProperties {
  /**
   * <p> The connector-specific properties required by Amplitude. </p>
   * @public
   */
  Amplitude?: AmplitudeConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Datadog. </p>
   * @public
   */
  Datadog?: DatadogConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Dynatrace. </p>
   * @public
   */
  Dynatrace?: DynatraceConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required Google Analytics. </p>
   * @public
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Amazon Honeycode. </p>
   * @public
   */
  Honeycode?: HoneycodeConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Infor Nexus. </p>
   * @public
   */
  InforNexus?: InforNexusConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Marketo. </p>
   * @public
   */
  Marketo?: MarketoConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Amazon Redshift. </p>
   * @public
   */
  Redshift?: RedshiftConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Salesforce. </p>
   * @public
   */
  Salesforce?: SalesforceConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by serviceNow. </p>
   * @public
   */
  ServiceNow?: ServiceNowConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Singular. </p>
   * @public
   */
  Singular?: SingularConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Slack. </p>
   * @public
   */
  Slack?: SlackConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Snowflake. </p>
   * @public
   */
  Snowflake?: SnowflakeConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Trend Micro. </p>
   * @public
   */
  Trendmicro?: TrendmicroConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Veeva. </p>
   * @public
   */
  Veeva?: VeevaConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific properties required by Zendesk. </p>
   * @public
   */
  Zendesk?: ZendeskConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific profile properties required when using SAPOData. </p>
   * @public
   */
  SAPOData?: SAPODataConnectorProfileProperties | undefined;

  /**
   * <p>The properties required by the custom connector.</p>
   * @public
   */
  CustomConnector?: CustomConnectorProfileProperties | undefined;

  /**
   * <p>The connector-specific properties required by Salesforce Pardot.</p>
   * @public
   */
  Pardot?: PardotConnectorProfileProperties | undefined;
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
 * <p> Specifies the private connection provisioning state. </p>
 * @public
 */
export interface PrivateConnectionProvisioningState {
  /**
   * <p> Specifies the private connection provisioning status. </p>
   * @public
   */
  status?: PrivateConnectionProvisioningStatus | undefined;

  /**
   * <p> Specifies the private connection provisioning failure reason. </p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p> Specifies the private connection provisioning failure cause. </p>
   * @public
   */
  failureCause?: PrivateConnectionProvisioningFailureCause | undefined;
}

/**
 * <p> Describes an instance of a connector. This includes the provided name, credentials ARN,
 *       connection-mode, and so on. To keep the API intuitive and extensible, the fields that are
 *       common to all types of connector profiles are explicitly specified at the top level. The rest
 *       of the connector-specific properties are available via the
 *         <code>connectorProfileProperties</code> field. </p>
 * @public
 */
export interface ConnectorProfile {
  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   * @public
   */
  connectorProfileArn?: string | undefined;

  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * <p>The label for the connector profile being created.</p>
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * <p> Indicates the connection mode and if it is public or private. </p>
   * @public
   */
  connectionMode?: ConnectionMode | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile credentials. </p>
   * @public
   */
  credentialsArn?: string | undefined;

  /**
   * <p> The connector-specific properties of the profile configuration. </p>
   * @public
   */
  connectorProfileProperties?: ConnectorProfileProperties | undefined;

  /**
   * <p> Specifies when the connector profile was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> Specifies when the connector profile was last updated. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p> Specifies the private connection provisioning state. </p>
   * @public
   */
  privateConnectionProvisioningState?: PrivateConnectionProvisioningState | undefined;
}

/**
 * <p>The custom credentials required for custom authentication.</p>
 * @public
 */
export interface CustomAuthCredentials {
  /**
   * <p>The custom authentication type that the connector uses.</p>
   * @public
   */
  customAuthenticationType: string | undefined;

  /**
   * <p>A map that holds custom authentication credentials.</p>
   * @public
   */
  credentialsMap?: Record<string, string> | undefined;
}

/**
 * <p>The OAuth 2.0 credentials required for OAuth 2.0 authentication.</p>
 * @public
 */
export interface OAuth2Credentials {
  /**
   * <p>The identifier for the desired client.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>The client secret used by the OAuth client to authenticate to the authorization
   *       server.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>The access token used to access the connector on your behalf.</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>The refresh token used to refresh an expired access token.</p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
   *       Google Analytics, Marketo, Zendesk, and Slack. </p>
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * <p>The connector-specific profile credentials that are required when using the custom
 *       connector.</p>
 * @public
 */
export interface CustomConnectorProfileCredentials {
  /**
   * <p>The authentication type that the custom connector uses for authenticating while creating a
   *       connector profile.</p>
   * @public
   */
  authenticationType: AuthenticationType | undefined;

  /**
   * <p>The basic credentials that are required for the authentication of the user.</p>
   * @public
   */
  basic?: BasicAuthCredentials | undefined;

  /**
   * <p>The OAuth 2.0 credentials required for the authentication of the user.</p>
   * @public
   */
  oauth2?: OAuth2Credentials | undefined;

  /**
   * <p>The API keys required for the authentication of the user.</p>
   * @public
   */
  apiKey?: ApiKeyCredentials | undefined;

  /**
   * <p>If the connector uses the custom authentication mechanism, this holds the required
   *       credentials.</p>
   * @public
   */
  custom?: CustomAuthCredentials | undefined;
}

/**
 * <p> The connector-specific credentials required by Datadog. </p>
 * @public
 */
export interface DatadogConnectorProfileCredentials {
  /**
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   * @public
   */
  apiKey: string | undefined;

  /**
   * <p> Application keys, in conjunction with your API key, give you full access to Datadog’s
   *       programmatic API. Application keys are associated with the user account that created them. The
   *       application key is used to log all requests made to the API. </p>
   * @public
   */
  applicationKey: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required by Dynatrace. </p>
 * @public
 */
export interface DynatraceConnectorProfileCredentials {
  /**
   * <p> The API tokens used by Dynatrace API to authenticate various API calls. </p>
   * @public
   */
  apiToken: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required by Google Analytics. </p>
 * @public
 */
export interface GoogleAnalyticsConnectorProfileCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   * @public
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Google Analytics resources. </p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p> The credentials used to acquire new access tokens. This is required only for OAuth2
   *       access tokens, and is not required for OAuth1 access tokens. </p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * <p> The connector-specific credentials required when using Amazon Honeycode. </p>
 * @public
 */
export interface HoneycodeConnectorProfileCredentials {
  /**
   * <p> The credentials used to access protected Amazon Honeycode resources. </p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p> The credentials used to acquire new access tokens. </p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
   *       Google Analytics, Marketo, Zendesk, and Slack. </p>
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * <p> The connector-specific profile credentials required by Infor Nexus. </p>
 * @public
 */
export interface InforNexusConnectorProfileCredentials {
  /**
   * <p> The Access Key portion of the credentials. </p>
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * <p> The identifier for the user. </p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p> The secret key used to sign requests. </p>
   * @public
   */
  secretAccessKey: string | undefined;

  /**
   * <p> The encryption keys used to encrypt data. </p>
   * @public
   */
  datakey: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required by Marketo. </p>
 * @public
 */
export interface MarketoConnectorProfileCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   * @public
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Marketo resources. </p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * <p>The connector-specific profile credentials required when using Salesforce Pardot.</p>
 * @public
 */
export interface PardotConnectorProfileCredentials {
  /**
   * <p>The credentials used to access protected Salesforce Pardot resources.</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>The credentials used to acquire new access tokens.</p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p> Used by select connectors for which the OAuth workflow is supported, such as Salesforce,
   *       Google Analytics, Marketo, Zendesk, and Slack. </p>
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;

  /**
   * <p>The secret manager ARN, which contains the client ID and client secret of the connected
   *       app.</p>
   * @public
   */
  clientCredentialsArn?: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Amazon Redshift. </p>
 * @public
 */
export interface RedshiftConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p> The password that corresponds to the user name. </p>
   * @public
   */
  password?: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Salesforce. </p>
 * @public
 */
export interface SalesforceConnectorProfileCredentials {
  /**
   * <p> The credentials used to access protected Salesforce resources. </p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p> The credentials used to acquire new access tokens. </p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;

  /**
   * <p> The secret manager ARN, which contains the client ID and client secret of the connected
   *       app. </p>
   * @public
   */
  clientCredentialsArn?: string | undefined;

  /**
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
   *             <dt>JWT_BEARER</dt>
   *             <dd>
   *                <p>Amazon AppFlow passes a JSON web token (JWT) when it requests the access token
   *             from Salesforce. You provide the JWT to Amazon AppFlow when you define the
   *             connection to your Salesforce account. When you use this grant type, you don't need to
   *             log in to your Salesforce account to authorize Amazon AppFlow to access your
   *             records.</p>
   *             </dd>
   *          </dl>
   *          <note>
   *             <p>The CLIENT_CREDENTIALS value is not supported for Salesforce.</p>
   *          </note>
   * @public
   */
  oAuth2GrantType?: OAuth2GrantType | undefined;

  /**
   * <p>A JSON web token (JWT) that authorizes Amazon AppFlow to access your Salesforce
   *       records.</p>
   * @public
   */
  jwtToken?: string | undefined;
}

/**
 * <p> The OAuth credentials required for OAuth type authentication. </p>
 * @public
 */
export interface OAuthCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   * @public
   */
  clientSecret: string | undefined;

  /**
   * <p> The access token used to access protected SAPOData resources. </p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p> The refresh token used to refresh expired access token. </p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using SAPOData. </p>
 * @public
 */
export interface SAPODataConnectorProfileCredentials {
  /**
   * <p> The SAPOData basic authentication credentials. </p>
   * @public
   */
  basicAuthCredentials?: BasicAuthCredentials | undefined;

  /**
   * <p> The SAPOData OAuth type authentication credentials. </p>
   * @public
   */
  oAuthCredentials?: OAuthCredentials | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using ServiceNow. </p>
 * @public
 */
export interface ServiceNowConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p> The password that corresponds to the user name. </p>
   * @public
   */
  password?: string | undefined;

  /**
   * <p> The OAuth 2.0 credentials required to authenticate the user. </p>
   * @public
   */
  oAuth2Credentials?: OAuth2Credentials | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Singular. </p>
 * @public
 */
export interface SingularConnectorProfileCredentials {
  /**
   * <p> A unique alphanumeric identifier used to authenticate a user, developer, or calling
   *       program to your API. </p>
   * @public
   */
  apiKey: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Slack. </p>
 * @public
 */
export interface SlackConnectorProfileCredentials {
  /**
   * <p> The identifier for the client. </p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   * @public
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Slack resources. </p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Snowflake. </p>
 * @public
 */
export interface SnowflakeConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   * @public
   */
  username: string | undefined;

  /**
   * <p> The password that corresponds to the user name. </p>
   * @public
   */
  password: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Trend Micro. </p>
 * @public
 */
export interface TrendmicroConnectorProfileCredentials {
  /**
   * <p> The Secret Access Key portion of the credentials. </p>
   * @public
   */
  apiSecretKey: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Veeva. </p>
 * @public
 */
export interface VeevaConnectorProfileCredentials {
  /**
   * <p> The name of the user. </p>
   * @public
   */
  username: string | undefined;

  /**
   * <p> The password that corresponds to the user name. </p>
   * @public
   */
  password: string | undefined;
}

/**
 * <p> The connector-specific profile credentials required when using Zendesk. </p>
 * @public
 */
export interface ZendeskConnectorProfileCredentials {
  /**
   * <p> The identifier for the desired client. </p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p> The client secret used by the OAuth client to authenticate to the authorization server.
   *     </p>
   * @public
   */
  clientSecret: string | undefined;

  /**
   * <p> The credentials used to access protected Zendesk resources. </p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p> The OAuth requirement needed to request security tokens from the connector endpoint.
   *     </p>
   * @public
   */
  oAuthRequest?: ConnectorOAuthRequest | undefined;
}

/**
 * <p> The connector-specific credentials required by a connector. </p>
 * @public
 */
export interface ConnectorProfileCredentials {
  /**
   * <p> The connector-specific credentials required when using Amplitude. </p>
   * @public
   */
  Amplitude?: AmplitudeConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Datadog. </p>
   * @public
   */
  Datadog?: DatadogConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Dynatrace. </p>
   * @public
   */
  Dynatrace?: DynatraceConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Google Analytics. </p>
   * @public
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Amazon Honeycode. </p>
   * @public
   */
  Honeycode?: HoneycodeConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Infor Nexus. </p>
   * @public
   */
  InforNexus?: InforNexusConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Marketo. </p>
   * @public
   */
  Marketo?: MarketoConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Amazon Redshift. </p>
   * @public
   */
  Redshift?: RedshiftConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Salesforce. </p>
   * @public
   */
  Salesforce?: SalesforceConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using ServiceNow. </p>
   * @public
   */
  ServiceNow?: ServiceNowConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Singular. </p>
   * @public
   */
  Singular?: SingularConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Slack. </p>
   * @public
   */
  Slack?: SlackConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Snowflake. </p>
   * @public
   */
  Snowflake?: SnowflakeConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Trend Micro. </p>
   * @public
   */
  Trendmicro?: TrendmicroConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Veeva. </p>
   * @public
   */
  Veeva?: VeevaConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific credentials required when using Zendesk. </p>
   * @public
   */
  Zendesk?: ZendeskConnectorProfileCredentials | undefined;

  /**
   * <p> The connector-specific profile credentials required when using SAPOData. </p>
   * @public
   */
  SAPOData?: SAPODataConnectorProfileCredentials | undefined;

  /**
   * <p>The connector-specific profile credentials that are required when using the custom
   *       connector.</p>
   * @public
   */
  CustomConnector?: CustomConnectorProfileCredentials | undefined;

  /**
   * <p>The connector-specific credentials required when using Salesforce Pardot.</p>
   * @public
   */
  Pardot?: PardotConnectorProfileCredentials | undefined;
}

/**
 * <p> Defines the connector-specific configuration and credentials for the connector profile.
 *     </p>
 * @public
 */
export interface ConnectorProfileConfig {
  /**
   * <p> The connector-specific properties of the profile configuration. </p>
   * @public
   */
  connectorProfileProperties: ConnectorProfileProperties | undefined;

  /**
   * <p> The connector-specific credentials required by each connector. </p>
   * @public
   */
  connectorProfileCredentials?: ConnectorProfileCredentials | undefined;
}

/**
 * <p> An error occurred when retrieving data from the connector endpoint. </p>
 * @public
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
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in your Amazon Web Services account. </p>
   * @public
   */
  connectorProfileName: string | undefined;

  /**
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS
   *       key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. </p>
   * @public
   */
  kmsArn?: string | undefined;

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   * @public
   */
  connectorType: ConnectorType | undefined;

  /**
   * <p>The label of the connector. The label is unique for each
   *         <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if
   *       calling for CUSTOMCONNECTOR connector type/.</p>
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * <p> Indicates the connection mode and specifies whether it is public or private. Private
   *       flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure
   *       without exposing it to the public internet. </p>
   * @public
   */
  connectionMode: ConnectionMode | undefined;

  /**
   * <p> Defines the connector-specific configuration and credentials. </p>
   * @public
   */
  connectorProfileConfig: ConnectorProfileConfig | undefined;

  /**
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
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorProfileResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   * @public
   */
  connectorProfileArn?: string | undefined;
}

/**
 * <p> The request would cause a service quota (such as the number of flows) to be exceeded.
 *     </p>
 * @public
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
 * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
 *       the destination. For example, this setting would determine if the flow should fail after one
 *       insertion error, or continue and attempt to insert every record regardless of the initial
 *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
 *     </p>
 * @public
 */
export interface ErrorHandlingConfig {
  /**
   * <p> Specifies if the flow should fail after the first instance of a failure when attempting
   *       to place data in the destination. </p>
   * @public
   */
  failOnFirstDestinationError?: boolean | undefined;

  /**
   * <p> Specifies the Amazon S3 bucket prefix. </p>
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * <p> Specifies the name of the Amazon S3 bucket. </p>
   * @public
   */
  bucketName?: string | undefined;
}

/**
 * <p>The properties that are applied when the custom connector is being used as a
 *       destination.</p>
 * @public
 */
export interface CustomConnectorDestinationProperties {
  /**
   * <p>The entity specified in the custom connector as a destination in the flow.</p>
   * @public
   */
  entityName: string | undefined;

  /**
   * <p>The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the custom connector as destination.</p>
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;

  /**
   * <p>Specifies the type of write operation to be performed in the custom connector when it's
   *       used as destination.</p>
   * @public
   */
  writeOperationType?: WriteOperationType | undefined;

  /**
   * <p>The name of the field that Amazon AppFlow uses as an ID when performing a write
   *       operation such as update, delete, or upsert.</p>
   * @public
   */
  idFieldNames?: string[] | undefined;

  /**
   * <p>The custom properties that are specific to the connector when it's used as a destination
   *       in the flow.</p>
   * @public
   */
  customProperties?: Record<string, string> | undefined;
}

/**
 * <p> The properties that are applied when Amazon Connect Customer Profiles is used as a
 *       destination. </p>
 * @public
 */
export interface CustomerProfilesDestinationProperties {
  /**
   * <p> The unique name of the Amazon Connect Customer Profiles domain. </p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p> The object specified in the Amazon Connect Customer Profiles flow destination.
   *     </p>
   * @public
   */
  objectTypeName?: string | undefined;
}

/**
 * <p> The properties that are applied when Amazon EventBridge is being used as a
 *       destination. </p>
 * @public
 */
export interface EventBridgeDestinationProperties {
  /**
   * <p> The object specified in the Amazon EventBridge flow destination. </p>
   * @public
   */
  object: string | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;
}

/**
 * <p> The properties that are applied when Amazon Honeycode is used as a destination. </p>
 * @public
 */
export interface HoneycodeDestinationProperties {
  /**
   * <p> The object specified in the Amazon Honeycode flow destination. </p>
   * @public
   */
  object: string | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;
}

/**
 * <p> The properties that are applied when Amazon Lookout for Metrics is used as a destination.
 *     </p>
 * @public
 */
export interface LookoutMetricsDestinationProperties {}

/**
 * <p>The properties that Amazon AppFlow applies when you use Marketo as a flow
 *       destination.</p>
 * @public
 */
export interface MarketoDestinationProperties {
  /**
   * <p>The object specified in the Marketo flow destination.</p>
   * @public
   */
  object: string | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;
}

/**
 * <p> The properties that are applied when Amazon Redshift is being used as a destination.
 *     </p>
 * @public
 */
export interface RedshiftDestinationProperties {
  /**
   * <p> The object specified in the Amazon Redshift flow destination. </p>
   * @public
   */
  object: string | undefined;

  /**
   * <p> The intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift. </p>
   * @public
   */
  intermediateBucketName: string | undefined;

  /**
   * <p> The object key for the bucket in which Amazon AppFlow places the destination files.
   *     </p>
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the Amazon Redshift destination. For example, this setting would determine if the flow
   *       should fail after one insertion error, or continue and attempt to insert every record
   *       regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the
   *       destination connector details. </p>
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;
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
 * <p>Specifies elements that Amazon AppFlow includes in the file and folder names in the flow
 *       destination.</p>
 * @public
 */
export interface PrefixConfig {
  /**
   * <p>Determines the format of the prefix, and whether it applies to the file name, file path,
   *       or both. </p>
   * @public
   */
  prefixType?: PrefixType | undefined;

  /**
   * <p>Determines the level of granularity for the date and time that's included in the prefix.
   *     </p>
   * @public
   */
  prefixFormat?: PrefixFormat | undefined;

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
   * @public
   */
  pathPrefixHierarchy?: PathPrefix[] | undefined;
}

/**
 * <p> The configuration that determines how Amazon AppFlow should format the flow output
 *       data when Amazon S3 is used as the destination. </p>
 * @public
 */
export interface S3OutputFormatConfig {
  /**
   * <p> Indicates the file type that Amazon AppFlow places in the Amazon S3 bucket.
   *     </p>
   * @public
   */
  fileType?: FileType | undefined;

  /**
   * <p> Determines the prefix that Amazon AppFlow applies to the folder name in the Amazon S3 bucket. You can name folders according to the flow frequency and date. </p>
   * @public
   */
  prefixConfig?: PrefixConfig | undefined;

  /**
   * <p> The aggregation settings that you can use to customize the output format of your flow
   *       data. </p>
   * @public
   */
  aggregationConfig?: AggregationConfig | undefined;

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
   * @public
   */
  preserveSourceDataTyping?: boolean | undefined;
}

/**
 * <p> The properties that are applied when Amazon S3 is used as a destination. </p>
 * @public
 */
export interface S3DestinationProperties {
  /**
   * <p> The Amazon S3 bucket name in which Amazon AppFlow places the transferred
   *       data. </p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * <p> The configuration that determines how Amazon AppFlow should format the flow output
   *       data when Amazon S3 is used as the destination. </p>
   * @public
   */
  s3OutputFormatConfig?: S3OutputFormatConfig | undefined;
}

/**
 * <p> The properties that are applied when Salesforce is being used as a destination. </p>
 * @public
 */
export interface SalesforceDestinationProperties {
  /**
   * <p> The object specified in the Salesforce flow destination. </p>
   * @public
   */
  object: string | undefined;

  /**
   * <p> The name of the field that Amazon AppFlow uses as an ID when performing a write
   *       operation such as update or delete. </p>
   * @public
   */
  idFieldNames?: string[] | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the Salesforce destination. For example, this setting would determine if the flow should fail
   *       after one insertion error, or continue and attempt to insert every record regardless of the
   *       initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector
   *       details. </p>
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;

  /**
   * <p> This specifies the type of write operation to be performed in Salesforce. When the value
   *       is <code>UPSERT</code>, then <code>idFieldNames</code> is required. </p>
   * @public
   */
  writeOperationType?: WriteOperationType | undefined;

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
   * @public
   */
  dataTransferApi?: SalesforceDataTransferApi | undefined;
}

/**
 * <p>Determines how Amazon AppFlow handles the success response that it gets from the
 *       connector after placing data.</p>
 *          <p>For example, this setting would determine where to write the response from the destination
 *       connector upon a successful insert operation.</p>
 * @public
 */
export interface SuccessResponseHandlingConfig {
  /**
   * <p>The Amazon S3 bucket prefix.</p>
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket.</p>
   * @public
   */
  bucketName?: string | undefined;
}

/**
 * <p>The properties that are applied when using SAPOData as a flow destination</p>
 * @public
 */
export interface SAPODataDestinationProperties {
  /**
   * <p>The object path specified in the SAPOData flow destination.</p>
   * @public
   */
  objectPath: string | undefined;

  /**
   * <p>Determines how Amazon AppFlow handles the success response that it gets from the
   *       connector after placing data.</p>
   *          <p>For example, this setting would determine where to write the response from a destination
   *       connector upon a successful insert operation.</p>
   * @public
   */
  successResponseHandlingConfig?: SuccessResponseHandlingConfig | undefined;

  /**
   * <p> A list of field names that can be used as an ID field when performing a write operation.
   *     </p>
   * @public
   */
  idFieldNames?: string[] | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;

  /**
   * <p> The possible write operations in the destination connector. When this value is not
   *       provided, this defaults to the <code>INSERT</code> operation. </p>
   * @public
   */
  writeOperationType?: WriteOperationType | undefined;
}

/**
 * <p> The properties that are applied when Snowflake is being used as a destination. </p>
 * @public
 */
export interface SnowflakeDestinationProperties {
  /**
   * <p> The object specified in the Snowflake flow destination. </p>
   * @public
   */
  object: string | undefined;

  /**
   * <p> The intermediate bucket that Amazon AppFlow uses when moving data into Snowflake.
   *     </p>
   * @public
   */
  intermediateBucketName: string | undefined;

  /**
   * <p> The object key for the destination bucket in which Amazon AppFlow places the files.
   *     </p>
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the Snowflake destination. For example, this setting would determine if the flow should fail
   *       after one insertion error, or continue and attempt to insert every record regardless of the
   *       initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector
   *       details. </p>
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;
}

/**
 * <p> The configuration that determines how Amazon AppFlow formats the flow output data
 *       when Upsolver is used as the destination. </p>
 * @public
 */
export interface UpsolverS3OutputFormatConfig {
  /**
   * <p> Indicates the file type that Amazon AppFlow places in the Upsolver Amazon S3
   *       bucket. </p>
   * @public
   */
  fileType?: FileType | undefined;

  /**
   * <p>Specifies elements that Amazon AppFlow includes in the file and folder names in the flow
   *       destination.</p>
   * @public
   */
  prefixConfig: PrefixConfig | undefined;

  /**
   * <p> The aggregation settings that you can use to customize the output format of your flow
   *       data. </p>
   * @public
   */
  aggregationConfig?: AggregationConfig | undefined;
}

/**
 * <p> The properties that are applied when Upsolver is used as a destination. </p>
 * @public
 */
export interface UpsolverDestinationProperties {
  /**
   * <p> The Upsolver Amazon S3 bucket name in which Amazon AppFlow places the
   *       transferred data. </p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the destination Upsolver Amazon S3 bucket in which Amazon AppFlow places the files. </p>
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * <p> The configuration that determines how data is formatted when Upsolver is used as the flow
   *       destination. </p>
   * @public
   */
  s3OutputFormatConfig: UpsolverS3OutputFormatConfig | undefined;
}

/**
 * <p>The properties that are applied when Zendesk is used as a destination.</p>
 * @public
 */
export interface ZendeskDestinationProperties {
  /**
   * <p>The object specified in the Zendesk flow destination.</p>
   * @public
   */
  object: string | undefined;

  /**
   * <p> A list of field names that can be used as an ID field when performing a write operation.
   *     </p>
   * @public
   */
  idFieldNames?: string[] | undefined;

  /**
   * <p> The settings that determine how Amazon AppFlow handles an error when placing data in
   *       the destination. For example, this setting would determine if the flow should fail after one
   *       insertion error, or continue and attempt to insert every record regardless of the initial
   *       failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
   *     </p>
   * @public
   */
  errorHandlingConfig?: ErrorHandlingConfig | undefined;

  /**
   * <p> The possible write operations in the destination connector. When this value is not
   *       provided, this defaults to the <code>INSERT</code> operation. </p>
   * @public
   */
  writeOperationType?: WriteOperationType | undefined;
}

/**
 * <p> This stores the information that is required to query a particular connector. </p>
 * @public
 */
export interface DestinationConnectorProperties {
  /**
   * <p> The properties required to query Amazon Redshift. </p>
   * @public
   */
  Redshift?: RedshiftDestinationProperties | undefined;

  /**
   * <p> The properties required to query Amazon S3. </p>
   * @public
   */
  S3?: S3DestinationProperties | undefined;

  /**
   * <p> The properties required to query Salesforce. </p>
   * @public
   */
  Salesforce?: SalesforceDestinationProperties | undefined;

  /**
   * <p> The properties required to query Snowflake. </p>
   * @public
   */
  Snowflake?: SnowflakeDestinationProperties | undefined;

  /**
   * <p> The properties required to query Amazon EventBridge. </p>
   * @public
   */
  EventBridge?: EventBridgeDestinationProperties | undefined;

  /**
   * <p> The properties required to query Amazon Lookout for Metrics. </p>
   * @public
   */
  LookoutMetrics?: LookoutMetricsDestinationProperties | undefined;

  /**
   * <p> The properties required to query Upsolver. </p>
   * @public
   */
  Upsolver?: UpsolverDestinationProperties | undefined;

  /**
   * <p> The properties required to query Amazon Honeycode. </p>
   * @public
   */
  Honeycode?: HoneycodeDestinationProperties | undefined;

  /**
   * <p> The properties required to query Amazon Connect Customer Profiles. </p>
   * @public
   */
  CustomerProfiles?: CustomerProfilesDestinationProperties | undefined;

  /**
   * <p>The properties required to query Zendesk.</p>
   * @public
   */
  Zendesk?: ZendeskDestinationProperties | undefined;

  /**
   * <p>The properties required to query Marketo.</p>
   * @public
   */
  Marketo?: MarketoDestinationProperties | undefined;

  /**
   * <p>The properties that are required to query the custom Connector.</p>
   * @public
   */
  CustomConnector?: CustomConnectorDestinationProperties | undefined;

  /**
   * <p>The properties required to query SAPOData.</p>
   * @public
   */
  SAPOData?: SAPODataDestinationProperties | undefined;
}

/**
 * <p> Contains information about the configuration of destination connectors present in the
 *       flow. </p>
 * @public
 */
export interface DestinationFlowConfig {
  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   * @public
   */
  connectorType: ConnectorType | undefined;

  /**
   * <p>The API version that the destination connector uses.</p>
   * @public
   */
  apiVersion?: string | undefined;

  /**
   * <p> The name of the connector profile. This name must be unique for each connector profile in
   *       the Amazon Web Services account. </p>
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * <p> This stores the information that is required to query a particular connector. </p>
   * @public
   */
  destinationConnectorProperties: DestinationConnectorProperties | undefined;
}

/**
 * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data with
 *       the Glue Data Catalog. When Amazon AppFlow catalogs your data, it stores metadata
 *       in Data Catalog tables. This metadata represents the data that's transferred by the
 *       flow that you configure with these settings.</p>
 *          <note>
 *             <p>You can configure a flow with these settings only when the flow destination is Amazon S3.</p>
 *          </note>
 * @public
 */
export interface GlueDataCatalogConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants Amazon AppFlow the permissions it needs to create Data Catalog tables, databases, and
   *       partitions.</p>
   *          <p>For an example IAM policy that has the required permissions, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_id-based-policy-examples.html">Identity-based
   *         policy examples for Amazon AppFlow</a>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the Data Catalog database that stores the metadata tables that Amazon AppFlow creates in your Amazon Web Services account. These tables contain metadata for
   *       the data that's transferred by the flow that you configure with this parameter.</p>
   *          <note>
   *             <p>When you configure a new flow with this parameter, you must specify an existing
   *         database.</p>
   *          </note>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>A naming prefix for each Data Catalog table that Amazon AppFlow creates for
   *       the flow that you configure with this setting. Amazon AppFlow adds the prefix to the
   *       beginning of the each table name.</p>
   * @public
   */
  tablePrefix: string | undefined;
}

/**
 * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When
 *         Amazon AppFlow catalogs your data, it stores metadata in a data catalog.</p>
 * @public
 */
export interface MetadataCatalogConfig {
  /**
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data with
   *       the Glue Data Catalog.</p>
   * @public
   */
  glueDataCatalog?: GlueDataCatalogConfig | undefined;
}

/**
 * <p> Specifies the configuration used when importing incremental records from the source.
 *     </p>
 * @public
 */
export interface IncrementalPullConfig {
  /**
   * <p> A field that specifies the date time or timestamp field as the criteria to use when
   *       importing incremental records from the source. </p>
   * @public
   */
  datetimeTypeFieldName?: string | undefined;
}

/**
 * <p>The properties that are applied when the custom connector is being used as a
 *       source.</p>
 * @public
 */
export interface CustomConnectorSourceProperties {
  /**
   * <p>The entity specified in the custom connector as a source in the flow.</p>
   * @public
   */
  entityName: string | undefined;

  /**
   * <p>Custom properties that are required to use the custom connector as a source.</p>
   * @public
   */
  customProperties?: Record<string, string> | undefined;

  /**
   * <p>The API of the connector application that Amazon AppFlow uses to transfer your
   *       data.</p>
   * @public
   */
  dataTransferApi?: DataTransferApi | undefined;
}

/**
 * <p> The properties that are applied when Datadog is being used as a source. </p>
 * @public
 */
export interface DatadogSourceProperties {
  /**
   * <p> The object specified in the Datadog flow source. </p>
   * @public
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Dynatrace is being used as a source. </p>
 * @public
 */
export interface DynatraceSourceProperties {
  /**
   * <p> The object specified in the Dynatrace flow source. </p>
   * @public
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Google Analytics is being used as a source. </p>
 * @public
 */
export interface GoogleAnalyticsSourceProperties {
  /**
   * <p> The object specified in the Google Analytics flow source. </p>
   * @public
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Infor Nexus is being used as a source. </p>
 * @public
 */
export interface InforNexusSourceProperties {
  /**
   * <p> The object specified in the Infor Nexus flow source. </p>
   * @public
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Marketo is being used as a source. </p>
 * @public
 */
export interface MarketoSourceProperties {
  /**
   * <p> The object specified in the Marketo flow source. </p>
   * @public
   */
  object: string | undefined;
}

/**
 * <p>The properties that are applied when Salesforce Pardot is being used as a source.</p>
 * @public
 */
export interface PardotSourceProperties {
  /**
   * <p>The object specified in the Salesforce Pardot flow source.</p>
   * @public
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
 * <p> When you use Amazon S3 as the source, the configuration format that you provide
 *       the flow input data. </p>
 * @public
 */
export interface S3InputFormatConfig {
  /**
   * <p> The file type that Amazon AppFlow gets from your Amazon S3 bucket. </p>
   * @public
   */
  s3InputFileType?: S3InputFileType | undefined;
}

/**
 * <p> The properties that are applied when Amazon S3 is being used as the flow source.
 *     </p>
 * @public
 */
export interface S3SourceProperties {
  /**
   * <p> The Amazon S3 bucket name where the source files are stored. </p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p> The object key for the Amazon S3 bucket in which the source files are stored.
   *     </p>
   * @public
   */
  bucketPrefix?: string | undefined;

  /**
   * <p> When you use Amazon S3 as the source, the configuration format that you provide
   *       the flow input data. </p>
   * @public
   */
  s3InputFormatConfig?: S3InputFormatConfig | undefined;
}

/**
 * <p> The properties that are applied when Salesforce is being used as a source. </p>
 * @public
 */
export interface SalesforceSourceProperties {
  /**
   * <p> The object specified in the Salesforce flow source. </p>
   * @public
   */
  object: string | undefined;

  /**
   * <p> The flag that enables dynamic fetching of new (recently added) fields in the Salesforce
   *       objects while running a flow. </p>
   * @public
   */
  enableDynamicFieldUpdate?: boolean | undefined;

  /**
   * <p> Indicates whether Amazon AppFlow includes deleted files in the flow run. </p>
   * @public
   */
  includeDeletedRecords?: boolean | undefined;

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
   * @public
   */
  dataTransferApi?: SalesforceDataTransferApi | undefined;
}

/**
 * <p>Sets the page size for each <i>concurrent process</i> that transfers OData
 *       records from your SAP instance. A concurrent process is query that retrieves a batch of
 *       records as part of a flow run. Amazon AppFlow can run multiple concurrent processes in
 *       parallel to transfer data faster.</p>
 * @public
 */
export interface SAPODataPaginationConfig {
  /**
   * <p>The maximum number of records that Amazon AppFlow receives in each page of the
   *       response from your SAP application. For transfers of OData records, the maximum page size is
   *       3,000. For transfers of data that comes from an ODP provider, the maximum page size
   *       is 10,000.</p>
   * @public
   */
  maxPageSize: number | undefined;
}

/**
 * <p>Sets the number of <i>concurrent processes</i> that transfer OData records
 *       from your SAP instance. A concurrent process is query that retrieves a batch of records as
 *       part of a flow run. Amazon AppFlow can run multiple concurrent processes in parallel to
 *       transfer data faster.</p>
 * @public
 */
export interface SAPODataParallelismConfig {
  /**
   * <p>The maximum number of processes that Amazon AppFlow runs at the same time when it
   *       retrieves your data from your SAP application.</p>
   * @public
   */
  maxParallelism: number | undefined;
}

/**
 * <p> The properties that are applied when using SAPOData as a flow source. </p>
 * @public
 */
export interface SAPODataSourceProperties {
  /**
   * <p> The object path specified in the SAPOData flow source. </p>
   * @public
   */
  objectPath?: string | undefined;

  /**
   * <p>Sets the number of concurrent processes that transfers OData records from your SAP
   *       instance.</p>
   * @public
   */
  parallelismConfig?: SAPODataParallelismConfig | undefined;

  /**
   * <p>Sets the page size for each concurrent process that transfers OData records from your SAP
   *       instance.</p>
   * @public
   */
  paginationConfig?: SAPODataPaginationConfig | undefined;
}

/**
 * <p> The properties that are applied when ServiceNow is being used as a source. </p>
 * @public
 */
export interface ServiceNowSourceProperties {
  /**
   * <p> The object specified in the ServiceNow flow source. </p>
   * @public
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Singular is being used as a source. </p>
 * @public
 */
export interface SingularSourceProperties {
  /**
   * <p> The object specified in the Singular flow source. </p>
   * @public
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when Slack is being used as a source. </p>
 * @public
 */
export interface SlackSourceProperties {
  /**
   * <p> The object specified in the Slack flow source. </p>
   * @public
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when using Trend Micro as a flow source. </p>
 * @public
 */
export interface TrendmicroSourceProperties {
  /**
   * <p> The object specified in the Trend Micro flow source. </p>
   * @public
   */
  object: string | undefined;
}

/**
 * <p> The properties that are applied when using Veeva as a flow source. </p>
 * @public
 */
export interface VeevaSourceProperties {
  /**
   * <p> The object specified in the Veeva flow source. </p>
   * @public
   */
  object: string | undefined;

  /**
   * <p>The document type specified in the Veeva document extract flow.</p>
   * @public
   */
  documentType?: string | undefined;

  /**
   * <p>Boolean value to include source files in Veeva document extract flow.</p>
   * @public
   */
  includeSourceFiles?: boolean | undefined;

  /**
   * <p>Boolean value to include file renditions in Veeva document extract flow.</p>
   * @public
   */
  includeRenditions?: boolean | undefined;

  /**
   * <p>Boolean value to include All Versions of files in Veeva document extract flow.</p>
   * @public
   */
  includeAllVersions?: boolean | undefined;
}

/**
 * <p> The properties that are applied when using Zendesk as a flow source. </p>
 * @public
 */
export interface ZendeskSourceProperties {
  /**
   * <p> The object specified in the Zendesk flow source. </p>
   * @public
   */
  object: string | undefined;
}

/**
 * <p> Specifies the information that is required to query a particular connector. </p>
 * @public
 */
export interface SourceConnectorProperties {
  /**
   * <p> Specifies the information that is required for querying Amplitude. </p>
   * @public
   */
  Amplitude?: AmplitudeSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Datadog. </p>
   * @public
   */
  Datadog?: DatadogSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Dynatrace. </p>
   * @public
   */
  Dynatrace?: DynatraceSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Google Analytics. </p>
   * @public
   */
  GoogleAnalytics?: GoogleAnalyticsSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Infor Nexus. </p>
   * @public
   */
  InforNexus?: InforNexusSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Marketo. </p>
   * @public
   */
  Marketo?: MarketoSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Amazon S3. </p>
   * @public
   */
  S3?: S3SourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Salesforce. </p>
   * @public
   */
  Salesforce?: SalesforceSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying ServiceNow. </p>
   * @public
   */
  ServiceNow?: ServiceNowSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Singular. </p>
   * @public
   */
  Singular?: SingularSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Slack. </p>
   * @public
   */
  Slack?: SlackSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Trend Micro. </p>
   * @public
   */
  Trendmicro?: TrendmicroSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Veeva. </p>
   * @public
   */
  Veeva?: VeevaSourceProperties | undefined;

  /**
   * <p> Specifies the information that is required for querying Zendesk. </p>
   * @public
   */
  Zendesk?: ZendeskSourceProperties | undefined;

  /**
   * <p> The properties that are applied when using SAPOData as a flow source. </p>
   * @public
   */
  SAPOData?: SAPODataSourceProperties | undefined;

  /**
   * <p>The properties that are applied when the custom connector is being used as a
   *       source.</p>
   * @public
   */
  CustomConnector?: CustomConnectorSourceProperties | undefined;

  /**
   * <p>Specifies the information that is required for querying Salesforce Pardot.</p>
   * @public
   */
  Pardot?: PardotSourceProperties | undefined;
}

/**
 * <p> Contains information about the configuration of the source connector used in the flow.
 *     </p>
 * @public
 */
export interface SourceFlowConfig {
  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   * @public
   */
  connectorType: ConnectorType | undefined;

  /**
   * <p>The API version of the connector when it's used as a source in the flow.</p>
   * @public
   */
  apiVersion?: string | undefined;

  /**
   * <p> The name of the connector profile. This name must be unique for each connector profile in
   *       the Amazon Web Services account. </p>
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * <p> Specifies the information that is required to query a particular source connector.
   *     </p>
   * @public
   */
  sourceConnectorProperties: SourceConnectorProperties | undefined;

  /**
   * <p> Defines the configuration for a scheduled incremental data pull. If a valid configuration
   *       is provided, the fields specified in the configuration are used when querying for the
   *       incremental data pull. </p>
   * @public
   */
  incrementalPullConfig?: IncrementalPullConfig | undefined;
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
 * <p> A class for modeling different type of tasks. Task implementation varies based on the
 *         <code>TaskType</code>. </p>
 * @public
 */
export interface Task {
  /**
   * <p> The source fields to which a particular task is applied. </p>
   * @public
   */
  sourceFields: string[] | undefined;

  /**
   * <p> The operation to be performed on the provided source fields. </p>
   * @public
   */
  connectorOperator?: ConnectorOperator | undefined;

  /**
   * <p> A field in a destination connector, or a field value against which Amazon AppFlow
   *       validates a source field. </p>
   * @public
   */
  destinationField?: string | undefined;

  /**
   * <p> Specifies the particular task implementation that Amazon AppFlow performs. </p>
   * @public
   */
  taskType: TaskType | undefined;

  /**
   * <p> A map used to store task-related information. The execution service looks for particular
   *       information based on the <code>TaskType</code>. </p>
   * @public
   */
  taskProperties?: Partial<Record<OperatorPropertiesKeys, string>> | undefined;
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
 * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
 *       Currently, these settings only apply to the <code>Scheduled</code> trigger type. </p>
 * @public
 */
export interface ScheduledTriggerProperties {
  /**
   * <p> The scheduling expression that determines the rate at which the schedule will run, for
   *       example <code>rate(5minutes)</code>. </p>
   * @public
   */
  scheduleExpression: string | undefined;

  /**
   * <p> Specifies whether a scheduled flow has an incremental data transfer or a complete data
   *       transfer for each flow run. </p>
   * @public
   */
  dataPullMode?: DataPullMode | undefined;

  /**
   * <p>The time at which the scheduled flow starts. The time is formatted as a timestamp that
   *       follows the ISO 8601 standard, such as <code>2022-04-26T13:00:00-07:00</code>.</p>
   * @public
   */
  scheduleStartTime?: Date | undefined;

  /**
   * <p>The time at which the scheduled flow ends. The time is formatted as a timestamp that
   *       follows the ISO 8601 standard, such as <code>2022-04-27T13:00:00-07:00</code>.</p>
   * @public
   */
  scheduleEndTime?: Date | undefined;

  /**
   * <p>Specifies the time zone used when referring to the dates and times of a scheduled flow,
   *       such as <code>America/New_York</code>. This time zone is only a descriptive label. It doesn't
   *       affect how Amazon AppFlow interprets the timestamps that you specify to schedule the
   *       flow.</p>
   *          <p>If you want to schedule a flow by using times in a particular time zone, indicate the time
   *       zone as a UTC offset in your timestamps. For example, the UTC offsets for the
   *         <code>America/New_York</code> timezone are <code>-04:00</code> EDT and <code>-05:00
   *         EST</code>.</p>
   * @public
   */
  timezone?: string | undefined;

  /**
   * <p> Specifies the optional offset that is added to the time interval for a schedule-triggered
   *       flow. </p>
   * @public
   */
  scheduleOffset?: number | undefined;

  /**
   * <p> Specifies the date range for the records to import from the connector in the first flow
   *       run. </p>
   * @public
   */
  firstExecutionFrom?: Date | undefined;

  /**
   * <p>Defines how many times a scheduled flow fails consecutively before Amazon AppFlow
   *       deactivates it.</p>
   * @public
   */
  flowErrorDeactivationThreshold?: number | undefined;
}

/**
 * <p> Specifies the configuration details that control the trigger for a flow. Currently, these
 *       settings only apply to the <code>Scheduled</code> trigger type. </p>
 * @public
 */
export interface TriggerProperties {
  /**
   * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
   *     </p>
   * @public
   */
  Scheduled?: ScheduledTriggerProperties | undefined;
}

/**
 * <p> The trigger settings that determine how and when Amazon AppFlow runs the specified
 *       flow. </p>
 * @public
 */
export interface TriggerConfig {
  /**
   * <p> Specifies the type of flow trigger. This can be <code>OnDemand</code>,
   *         <code>Scheduled</code>, or <code>Event</code>. </p>
   * @public
   */
  triggerType: TriggerType | undefined;

  /**
   * <p> Specifies the configuration details of a schedule-triggered flow as defined by the user.
   *       Currently, these settings only apply to the <code>Scheduled</code> trigger type. </p>
   * @public
   */
  triggerProperties?: TriggerProperties | undefined;
}

/**
 * @public
 */
export interface CreateFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   * @public
   */
  flowName: string | undefined;

  /**
   * <p> A description of the flow you want to create. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS
   *       key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. </p>
   * @public
   */
  kmsArn?: string | undefined;

  /**
   * <p> The trigger settings that determine how and when the flow runs. </p>
   * @public
   */
  triggerConfig: TriggerConfig | undefined;

  /**
   * <p> The configuration that controls how Amazon AppFlow retrieves data from the source
   *       connector. </p>
   * @public
   */
  sourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * <p> The configuration that controls how Amazon AppFlow places data in the destination
   *       connector. </p>
   * @public
   */
  destinationFlowConfigList: DestinationFlowConfig[] | undefined;

  /**
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the flow
   *       run. </p>
   * @public
   */
  tasks: Task[] | undefined;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's
   *       transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it
   *       stores metadata in a data catalog.</p>
   * @public
   */
  metadataCatalogConfig?: MetadataCatalogConfig | undefined;

  /**
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
   * @public
   */
  clientToken?: string | undefined;
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
   * <p> The flow's Amazon Resource Name (ARN). </p>
   * @public
   */
  flowArn?: string | undefined;

  /**
   * <p> Indicates the current status of the flow. </p>
   * @public
   */
  flowStatus?: FlowStatus | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorProfileRequest {
  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in your account. </p>
   * @public
   */
  connectorProfileName: string | undefined;

  /**
   * <p> Indicates whether Amazon AppFlow should delete the profile, even if it is currently
   *       in use in one or more flows. </p>
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
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   * @public
   */
  flowName: string | undefined;

  /**
   * <p> Indicates whether Amazon AppFlow should delete the flow, even if it is currently in
   *       use. </p>
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
   * <p>The connector type, such as CUSTOMCONNECTOR, Saleforce, Marketo. Please choose
   *       CUSTOMCONNECTOR for Lambda based custom connectors.</p>
   * @public
   */
  connectorType: ConnectorType | undefined;

  /**
   * <p>The label of the connector. The label is unique for each
   *         <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if
   *       calling for CUSTOMCONNECTOR connector type/.</p>
   * @public
   */
  connectorLabel?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorResponse {
  /**
   * <p>Configuration info of all the connectors that the user requested.</p>
   * @public
   */
  connectorConfiguration?: ConnectorConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorEntityRequest {
  /**
   * <p> The entity name for that connector. </p>
   * @public
   */
  connectorEntityName: string | undefined;

  /**
   * <p> The type of connector application, such as Salesforce, Amplitude, and so on. </p>
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * <p>The version of the API that's used by the connector.</p>
   * @public
   */
  apiVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorEntityResponse {
  /**
   * <p> Describes the fields for that connector entity. For example, for an
   *         <i>account</i> entity, the fields would be <i>account name</i>,
   *         <i>account ID</i>, and so on. </p>
   * @public
   */
  connectorEntityFields: ConnectorEntityField[] | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorProfilesRequest {
  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account. </p>
   * @public
   */
  connectorProfileNames?: string[] | undefined;

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * <p>The name of the connector. The name is unique for each <code>ConnectorRegistration</code>
   *       in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector
   *       type/.</p>
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * <p> Specifies the maximum number of items that should be returned in the result set. The
   *       default for <code>maxResults</code> is 20 (for all paginated API operations). </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The pagination token for the next page of data. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorProfilesResponse {
  /**
   * <p> Returns information about the connector profiles associated with the flow. </p>
   * @public
   */
  connectorProfileDetails?: ConnectorProfile[] | undefined;

  /**
   * <p> The pagination token for the next page of data. If <code>nextToken=null</code>, this
   *       means that all records have been fetched. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorsRequest {
  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   * @public
   */
  connectorTypes?: ConnectorType[] | undefined;

  /**
   * <p>The maximum number of items that should be returned in the result set. The default is
   *       20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The pagination token for the next page of data. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorsResponse {
  /**
   * <p> The configuration that is applied to the connectors used in the flow. </p>
   * @public
   */
  connectorConfigurations?: Partial<Record<ConnectorType, ConnectorConfiguration>> | undefined;

  /**
   * <p>Information about the connectors supported in Amazon AppFlow.</p>
   * @public
   */
  connectors?: ConnectorDetail[] | undefined;

  /**
   * <p> The pagination token for the next page of data. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   * @public
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
 * <p> Describes the details of the flow run, including the timestamp, status, and message.
 *     </p>
 * @public
 */
export interface ExecutionDetails {
  /**
   * <p> Describes the details of the most recent flow run. </p>
   * @public
   */
  mostRecentExecutionMessage?: string | undefined;

  /**
   * <p> Specifies the time of the most recent flow run. </p>
   * @public
   */
  mostRecentExecutionTime?: Date | undefined;

  /**
   * <p> Specifies the status of the most recent flow run. </p>
   * @public
   */
  mostRecentExecutionStatus?: ExecutionStatus | undefined;
}

/**
 * <p>Describes the status of an attempt from Amazon AppFlow to register a resource.</p>
 *          <p>When you run a flow that you've configured to use a metadata catalog, Amazon AppFlow
 *       registers a metadata table and data partitions with that catalog. This operation provides the
 *       status of that registration attempt. The operation also indicates how many related resources
 *         Amazon AppFlow created or updated.</p>
 * @public
 */
export interface RegistrationOutput {
  /**
   * <p>Explains the status of the registration attempt from Amazon AppFlow. If the attempt
   *       fails, the message explains why.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Indicates the number of resources that Amazon AppFlow created or updated. Possible
   *       resources include metadata tables and data partitions.</p>
   * @public
   */
  result?: string | undefined;

  /**
   * <p>Indicates the status of the registration attempt from Amazon AppFlow.</p>
   * @public
   */
  status?: ExecutionStatus | undefined;
}

/**
 * <p>Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.</p>
 * @public
 */
export interface MetadataCatalogDetail {
  /**
   * <p>The type of metadata catalog that Amazon AppFlow used for the associated flow run.
   *       This parameter returns the following value:</p>
   *          <dl>
   *             <dt>GLUE</dt>
   *             <dd>
   *                <p>The metadata catalog is provided by the Glue Data Catalog. Glue
   *             includes the Glue Data Catalog as a component.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  catalogType?: CatalogType | undefined;

  /**
   * <p>The name of the table that stores the metadata for the associated flow run. The table
   *       stores metadata that represents the data that the flow transferred. Amazon AppFlow stores
   *       the table in the metadata catalog.</p>
   * @public
   */
  tableName?: string | undefined;

  /**
   * <p>Describes the status of the attempt from Amazon AppFlow to register the metadata
   *       table with the metadata catalog. Amazon AppFlow creates or updates this table for the
   *       associated flow run.</p>
   * @public
   */
  tableRegistrationOutput?: RegistrationOutput | undefined;

  /**
   * <p>Describes the status of the attempt from Amazon AppFlow to register the data
   *       partitions with the metadata catalog. The data partitions organize the flow output into a
   *       hierarchical path, such as a folder path in an S3 bucket. Amazon AppFlow creates the
   *       partitions (if they don't already exist) based on your flow configuration.</p>
   * @public
   */
  partitionRegistrationOutput?: RegistrationOutput | undefined;
}

/**
 * @public
 */
export interface DescribeFlowResponse {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   * @public
   */
  flowArn?: string | undefined;

  /**
   * <p> A description of the flow. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   * @public
   */
  flowName?: string | undefined;

  /**
   * <p> The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for
   *       encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS
   *       key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. </p>
   * @public
   */
  kmsArn?: string | undefined;

  /**
   * <p> Indicates the current status of the flow. </p>
   * @public
   */
  flowStatus?: FlowStatus | undefined;

  /**
   * <p> Contains an error message if the flow status is in a suspended or error state. This
   *       applies only to scheduled or event-triggered flows. </p>
   * @public
   */
  flowStatusMessage?: string | undefined;

  /**
   * <p> The configuration that controls how Amazon AppFlow retrieves data from the source
   *       connector. </p>
   * @public
   */
  sourceFlowConfig?: SourceFlowConfig | undefined;

  /**
   * <p> The configuration that controls how Amazon AppFlow transfers data to the destination
   *       connector. </p>
   * @public
   */
  destinationFlowConfigList?: DestinationFlowConfig[] | undefined;

  /**
   * <p> Describes the details of the most recent flow run. </p>
   * @public
   */
  lastRunExecutionDetails?: ExecutionDetails | undefined;

  /**
   * <p> The trigger settings that determine how and when the flow runs. </p>
   * @public
   */
  triggerConfig?: TriggerConfig | undefined;

  /**
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the flow
   *       run. </p>
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * <p> Specifies when the flow was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> Specifies when the flow was last updated. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p> The ARN of the user who created the flow. </p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p> Specifies the user name of the account that performed the most recent update. </p>
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's
   *       transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it
   *       stores metadata in a data catalog.</p>
   * @public
   */
  metadataCatalogConfig?: MetadataCatalogConfig | undefined;

  /**
   * <p>Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.</p>
   * @public
   */
  lastRunMetadataCatalogDetails?: MetadataCatalogDetail[] | undefined;

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
   * @public
   */
  schemaVersion?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFlowExecutionRecordsRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   * @public
   */
  flowName: string | undefined;

  /**
   * <p> Specifies the maximum number of items that should be returned in the result set. The
   *       default for <code>maxResults</code> is 20 (for all paginated API operations). </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The pagination token for the next page of data. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p> Provides details in the event of a failed flow, including the failure count and the
 *       related error messages. </p>
 * @public
 */
export interface ErrorInfo {
  /**
   * <p> Specifies the failure count for the attempted flow. </p>
   * @public
   */
  putFailuresCount?: number | undefined;

  /**
   * <p> Specifies the error message that appears if a flow fails. </p>
   * @public
   */
  executionMessage?: string | undefined;
}

/**
 * <p> Specifies the end result of the flow run. </p>
 * @public
 */
export interface ExecutionResult {
  /**
   * <p> Provides any error message information related to the flow run. </p>
   * @public
   */
  errorInfo?: ErrorInfo | undefined;

  /**
   * <p> The total number of bytes processed by the flow run. </p>
   * @public
   */
  bytesProcessed?: number | undefined;

  /**
   * <p> The total number of bytes written as a result of the flow run. </p>
   * @public
   */
  bytesWritten?: number | undefined;

  /**
   * <p> The number of records processed in the flow run. </p>
   * @public
   */
  recordsProcessed?: number | undefined;

  /**
   * <p>The number of processes that Amazon AppFlow ran at the same time when it retrieved
   *       your data.</p>
   * @public
   */
  numParallelProcesses?: number | undefined;

  /**
   * <p>The maximum number of records that Amazon AppFlow receives in each page of the
   *       response from your SAP application.</p>
   * @public
   */
  maxPageSize?: number | undefined;
}

/**
 * <p> Specifies information about the past flow run instances for a given flow. </p>
 * @public
 */
export interface ExecutionRecord {
  /**
   * <p> Specifies the identifier of the given flow run. </p>
   * @public
   */
  executionId?: string | undefined;

  /**
   * <p> Specifies the flow run status and whether it is in progress, has completed successfully,
   *       or has failed. </p>
   * @public
   */
  executionStatus?: ExecutionStatus | undefined;

  /**
   * <p> Describes the result of the given flow run. </p>
   * @public
   */
  executionResult?: ExecutionResult | undefined;

  /**
   * <p> Specifies the start time of the flow run. </p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p> Specifies the time of the most recent update. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p> The timestamp that determines the first new or updated record to be transferred in the
   *       flow run. </p>
   * @public
   */
  dataPullStartTime?: Date | undefined;

  /**
   * <p> The timestamp that indicates the last new or updated record to be transferred in the flow
   *       run. </p>
   * @public
   */
  dataPullEndTime?: Date | undefined;

  /**
   * <p>Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.</p>
   * @public
   */
  metadataCatalogDetails?: MetadataCatalogDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowExecutionRecordsResponse {
  /**
   * <p> Returns a list of all instances when this flow was run. </p>
   * @public
   */
  flowExecutions?: ExecutionRecord[] | undefined;

  /**
   * <p> The pagination token for the next page of data. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p> The properties of the flow, such as its source, destination, trigger type, and so on.
 *     </p>
 * @public
 */
export interface FlowDefinition {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   * @public
   */
  flowArn?: string | undefined;

  /**
   * <p> A user-entered description of the flow. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   * @public
   */
  flowName?: string | undefined;

  /**
   * <p> Indicates the current status of the flow. </p>
   * @public
   */
  flowStatus?: FlowStatus | undefined;

  /**
   * <p> Specifies the source connector type, such as Salesforce, Amazon S3, Amplitude,
   *       and so on. </p>
   * @public
   */
  sourceConnectorType?: ConnectorType | undefined;

  /**
   * <p>The label of the source connector in the flow.</p>
   * @public
   */
  sourceConnectorLabel?: string | undefined;

  /**
   * <p> Specifies the destination connector type, such as Salesforce, Amazon S3,
   *       Amplitude, and so on. </p>
   * @public
   */
  destinationConnectorType?: ConnectorType | undefined;

  /**
   * <p>The label of the destination connector in the flow.</p>
   * @public
   */
  destinationConnectorLabel?: string | undefined;

  /**
   * <p> Specifies the type of flow trigger. This can be <code>OnDemand</code>,
   *         <code>Scheduled</code>, or <code>Event</code>. </p>
   * @public
   */
  triggerType?: TriggerType | undefined;

  /**
   * <p> Specifies when the flow was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> Specifies when the flow was last updated. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p> The ARN of the user who created the flow. </p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p> Specifies the account user name that most recently updated the flow. </p>
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p> Describes the details of the most recent flow run. </p>
   * @public
   */
  lastRunExecutionDetails?: ExecutionDetails | undefined;
}

/**
 * @public
 */
export interface ListConnectorEntitiesRequest {
  /**
   * <p> The name of the connector profile. The name is unique for each
   *         <code>ConnectorProfile</code> in the Amazon Web Services account, and is used to query the
   *       downstream connector. </p>
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * <p> The type of connector, such as Salesforce, Amplitude, and so on. </p>
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * <p> This optional parameter is specific to connector implementation. Some connectors support
   *       multiple levels or categories of entities. You can find out the list of roots for such
   *       providers by sending a request without the <code>entitiesPath</code> parameter. If the
   *       connector supports entities at different roots, this initial request returns the list of
   *       roots. Otherwise, this request returns all entities supported by the provider. </p>
   * @public
   */
  entitiesPath?: string | undefined;

  /**
   * <p>The version of the API that's used by the connector.</p>
   * @public
   */
  apiVersion?: string | undefined;

  /**
   * <p>The maximum number of items that the operation returns in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token that was provided by your prior <code>ListConnectorEntities</code> operation if
   *       the response was too big for the page size. You specify this token to get the next page of
   *       results in paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorEntitiesResponse {
  /**
   * <p> The response of <code>ListConnectorEntities</code> lists entities grouped by category.
   *       This map's key represents the group name, and its value contains the list of entities
   *       belonging to that group. </p>
   * @public
   */
  connectorEntityMap: Record<string, ConnectorEntity[]> | undefined;

  /**
   * <p>A token that you specify in your next <code>ListConnectorEntities</code> operation to get
   *       the next page of results in paginated response. The <code>ListConnectorEntities</code>
   *       operation provides this token if the response is too big for the page size.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * <p>Specifies the maximum number of items that should be returned in the result set. The
   *       default for <code>maxResults</code> is 20 (for all paginated API operations).</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token for the next page of data.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * <p>Contains information about the connectors supported by Amazon AppFlow.</p>
   * @public
   */
  connectors?: ConnectorDetail[] | undefined;

  /**
   * <p>The pagination token for the next page of data. If nextToken=null, this means that all
   *       records have been fetched.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsRequest {
  /**
   * <p> Specifies the maximum number of items that should be returned in the result set. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The pagination token for next page of data. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsResponse {
  /**
   * <p> The list of flows associated with your account. </p>
   * @public
   */
  flows?: FlowDefinition[] | undefined;

  /**
   * <p> The pagination token for next page of data. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the specified flow. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterConnectorRequest {
  /**
   * <p> The name of the connector. The name is unique for each <code>ConnectorRegistration</code>
   *       in your Amazon Web Services account.</p>
   * @public
   */
  connectorLabel?: string | undefined;

  /**
   * <p>A description about the connector that's being registered.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The provisioning type of the connector. Currently the only supported value is LAMBDA.
   *     </p>
   * @public
   */
  connectorProvisioningType?: ConnectorProvisioningType | undefined;

  /**
   * <p>The provisioning type of the connector. Currently the only supported value is
   *       LAMBDA.</p>
   * @public
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig | undefined;

  /**
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
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterConnectorResponse {
  /**
   * <p>The ARN of the connector being registered.</p>
   * @public
   */
  connectorArn?: string | undefined;
}

/**
 * @public
 */
export interface ResetConnectorMetadataCacheRequest {
  /**
   * <p>The name of the connector profile that you want to reset cached metadata for.</p>
   *          <p>You can omit this parameter if you're resetting the cache for any of the following
   *       connectors: Amazon Connect, Amazon EventBridge, Amazon Lookout for Metrics, Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you must include this
   *       parameter in your request.</p>
   * @public
   */
  connectorProfileName?: string | undefined;

  /**
   * <p>The type of connector to reset cached metadata for.</p>
   *          <p>You must include this parameter in your request if you're resetting the cache for any of
   *       the following connectors: Amazon Connect, Amazon EventBridge, Amazon Lookout for Metrics,
   *         Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you
   *       can omit this parameter from your request. </p>
   * @public
   */
  connectorType?: ConnectorType | undefined;

  /**
   * <p>Use this parameter if you want to reset cached metadata about the details for an
   *       individual entity.</p>
   *          <p>If you don't include this parameter in your request, Amazon AppFlow only resets
   *       cached metadata about entity names, not entity details.</p>
   * @public
   */
  connectorEntityName?: string | undefined;

  /**
   * <p>Use this parameter only if you’re resetting the cached metadata about a nested entity.
   *       Only some connectors support nested entities. A nested entity is one that has another entity
   *       as a parent. To use this parameter, specify the name of the parent entity.</p>
   *          <p>To look up the parent-child relationship of entities, you can send a ListConnectorEntities
   *       request that omits the entitiesPath parameter. Amazon AppFlow will return a list of
   *       top-level entities. For each one, it indicates whether the entity has nested entities. Then,
   *       in a subsequent ListConnectorEntities request, you can specify a parent entity name for the
   *       entitiesPath parameter. Amazon AppFlow will return a list of the child entities for that
   *       parent.</p>
   * @public
   */
  entitiesPath?: string | undefined;

  /**
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
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   * @public
   */
  flowName: string | undefined;

  /**
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
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFlowResponse {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   * @public
   */
  flowArn?: string | undefined;

  /**
   * <p> Indicates the current status of the flow. </p>
   * @public
   */
  flowStatus?: FlowStatus | undefined;

  /**
   * <p> Returns the internal execution ID of an on-demand flow when the flow is started. For
   *       scheduled or event-triggered flows, this value is null. </p>
   * @public
   */
  executionId?: string | undefined;
}

/**
 * @public
 */
export interface StopFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   * @public
   */
  flowName: string | undefined;
}

/**
 * @public
 */
export interface StopFlowResponse {
  /**
   * <p> The flow's Amazon Resource Name (ARN). </p>
   * @public
   */
  flowArn?: string | undefined;

  /**
   * <p> Indicates the current status of the flow. </p>
   * @public
   */
  flowStatus?: FlowStatus | undefined;
}

/**
 * <p> The requested operation is not supported for the current flow. </p>
 * @public
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
   * <p> The Amazon Resource Name (ARN) of the flow that you want to tag. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p> The tags used to organize, track, or control access for your flow. </p>
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
   * <p>The label of the connector. The label is unique for each
   *         <code>ConnectorRegistration</code> in your Amazon Web Services account.</p>
   * @public
   */
  connectorLabel: string | undefined;

  /**
   * <p>Indicates whether Amazon AppFlow should unregister the connector, even if it is
   *       currently in use in one or more connector profiles. The default value is false.</p>
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
   * <p> The Amazon Resource Name (ARN) of the flow that you want to untag. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p> The tag keys associated with the tag that you want to remove from your flow. </p>
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
   * <p> The name of the connector profile and is unique for each <code>ConnectorProfile</code> in
   *       the Amazon Web Services account. </p>
   * @public
   */
  connectorProfileName: string | undefined;

  /**
   * <p> Indicates the connection mode and if it is public or private. </p>
   * @public
   */
  connectionMode: ConnectionMode | undefined;

  /**
   * <p> Defines the connector-specific profile configuration and credentials. </p>
   * @public
   */
  connectorProfileConfig: ConnectorProfileConfig | undefined;

  /**
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
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorProfileResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the connector profile. </p>
   * @public
   */
  connectorProfileArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorRegistrationRequest {
  /**
   * <p>The name of the connector. The name is unique for each connector registration in your AWS
   *       account.</p>
   * @public
   */
  connectorLabel: string | undefined;

  /**
   * <p>A description about the update that you're applying to the connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Contains information about the configuration of the connector being registered.</p>
   * @public
   */
  connectorProvisioningConfig?: ConnectorProvisioningConfig | undefined;

  /**
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
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorRegistrationResponse {
  /**
   * <p>The ARN of the connector being updated.</p>
   * @public
   */
  connectorArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowRequest {
  /**
   * <p> The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens
   *       (-) only. </p>
   * @public
   */
  flowName: string | undefined;

  /**
   * <p> A description of the flow. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The trigger settings that determine how and when the flow runs. </p>
   * @public
   */
  triggerConfig: TriggerConfig | undefined;

  /**
   * <p> Contains information about the configuration of the source connector used in the flow.
   *     </p>
   * @public
   */
  sourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * <p> The configuration that controls how Amazon AppFlow transfers data to the destination
   *       connector. </p>
   * @public
   */
  destinationFlowConfigList: DestinationFlowConfig[] | undefined;

  /**
   * <p> A list of tasks that Amazon AppFlow performs while transferring the data in the flow
   *       run. </p>
   * @public
   */
  tasks: Task[] | undefined;

  /**
   * <p>Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's
   *       transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it
   *       stores metadata in a data catalog.</p>
   * @public
   */
  metadataCatalogConfig?: MetadataCatalogConfig | undefined;

  /**
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
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
  /**
   * <p>Indicates the current status of the flow. </p>
   * @public
   */
  flowStatus?: FlowStatus | undefined;
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
