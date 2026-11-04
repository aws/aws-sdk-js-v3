// smithy-typescript generated code
import type {
  AccessAssociationSourceType,
  ApiKeysFormat,
  ApiKeySourceType,
  ApiStatus,
  AuthorizerType,
  CacheClusterSize,
  CacheClusterStatus,
  ConnectionType,
  ContentHandlingStrategy,
  DocumentationPartType,
  DomainNameStatus,
  EndpointAccessMode,
  EndpointType,
  GatewayResponseType,
  IntegrationType,
  IpAddressType,
  LocationStatusType,
  Op,
  PutMode,
  QuotaPeriodType,
  ResourceOwner,
  ResponseTransferMode,
  RoutingMode,
  SecurityPolicy,
  UnauthorizedCacheControlHeaderStrategy,
  VpcLinkStatus,
} from "./enums";

/**
 * Access log settings, including the access log format and access log destination ARN.
 *
 * @public
 */
export interface AccessLogSettings {
  /**
   * A single line format of the access logs of data, as specified by selected $context variables. The format must include at least `$context.requestId`.
   *
   * @public
   */
  format?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with `amazon-apigateway-`.
   *
   * @public
   */
  destinationArn?: string | undefined;
}

/**
 * The API request rate limits.
 *
 * @public
 */
export interface ThrottleSettings {
  /**
   * The API target request burst rate limit. This allows more requests through for a period of time than the target rate limit.
   *
   * @public
   */
  burstLimit?: number | undefined;

  /**
   * The API target request rate limit.
   *
   * @public
   */
  rateLimit?: number | undefined;
}

/**
 * Represents an AWS account that is associated with API Gateway.
 *
 * @public
 */
export interface Account {
  /**
   * The ARN of an Amazon CloudWatch role for the current Account.
   *
   * @public
   */
  cloudwatchRoleArn?: string | undefined;

  /**
   * Specifies the API request limits configured for the current Account.
   *
   * @public
   */
  throttleSettings?: ThrottleSettings | undefined;

  /**
   * A list of features supported for the account. When usage plans are enabled, the features list will include an entry of `"UsagePlans"`.
   *
   * @public
   */
  features?: string[] | undefined;

  /**
   * The version of the API keys used for the account.
   *
   * @public
   */
  apiKeyVersion?: string | undefined;
}

/**
 * A resource that can be distributed to callers for executing Method resources that require an API key. API keys can be mapped to any Stage on any RestApi, which indicates that the callers with the API key can make requests to that stage.
 *
 * @public
 */
export interface ApiKey {
  /**
   * The identifier of the API Key.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The value of the API Key.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The name of the API Key.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * An Amazon Web Services Marketplace customer identifier, when integrating with the Amazon Web Services SaaS Marketplace.
   *
   * @public
   */
  customerId?: string | undefined;

  /**
   * The description of the API Key.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether the API Key can be used by callers.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The timestamp when the API Key was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The timestamp when the API Key was last updated.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * A list of Stage resources that are associated with the ApiKey resource.
   *
   * @public
   */
  stageKeys?: string[] | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The identifier of an ApiKey used in a UsagePlan.
 *
 * @public
 */
export interface ApiKeyIds {
  /**
   * A list of all the ApiKey identifiers.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * A list of warning messages.
   *
   * @public
   */
  warnings?: string[] | undefined;
}

/**
 * Represents a collection of API keys as represented by an ApiKeys resource.
 *
 * @public
 */
export interface ApiKeys {
  /**
   * A list of warning messages logged during the import of API keys when the `failOnWarnings` option is set to true.
   *
   * @public
   */
  warnings?: string[] | undefined;

  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: ApiKey[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * API stage name of the associated API stage in a usage plan.
 *
 * @public
 */
export interface ApiStage {
  /**
   * API Id of the associated API stage in a usage plan.
   *
   * @public
   */
  apiId?: string | undefined;

  /**
   * API stage name of the associated API stage in a usage plan.
   *
   * @public
   */
  stage?: string | undefined;

  /**
   * Map containing method level throttling information for API stage in a usage plan.
   *
   * @public
   */
  throttle?: Record<string, ThrottleSettings> | undefined;
}

/**
 * Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.
 *
 * @public
 */
export interface Authorizer {
  /**
   * The identifier for the authorizer resource.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the authorizer.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The authorizer type. Valid values are `TOKEN` for a Lambda function using a single authorization token submitted in a custom header, `REQUEST` for a Lambda function using incoming request parameters, and `COGNITO_USER_POOLS` for using an Amazon Cognito user pool.
   *
   * @public
   */
  type?: AuthorizerType | undefined;

  /**
   * A list of the Amazon Cognito user pool ARNs for the `COGNITO_USER_POOLS` authorizer. Each element is of this format: `arn:aws:cognito-idp:\{region\}:\{account_id\}:userpool/\{user_pool_id\}`. For a `TOKEN` or `REQUEST` authorizer, this is not defined.
   *
   * @public
   */
  providerARNs?: string[] | undefined;

  /**
   * Optional customer-defined field, used in OpenAPI imports and exports without functional impact.
   *
   * @public
   */
  authType?: string | undefined;

  /**
   * Specifies the authorizer's Uniform Resource Identifier (URI). For `TOKEN` or `REQUEST` authorizers, this must be a well-formed Lambda function URI, for example, `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:\{account_id\}:function:\{lambda_function_name\}/invocations`. In general, the URI has this form `arn:aws:apigateway:\{region\}:lambda:path/\{service_api\}`, where `\{region\}` is the same as the region hosting the Lambda function, `path` indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial `/`. For Lambda functions, this is usually of the form `/2015-03-31/functions/[FunctionARN]/invocations`.
   *
   * @public
   */
  authorizerUri?: string | undefined;

  /**
   * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.
   *
   * @public
   */
  authorizerCredentials?: string | undefined;

  /**
   * The identity source for which authorization is requested. For a `TOKEN` or `COGNITO_USER_POOLS` authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is `Auth`, the header mapping expression is `method.request.header.Auth`. For the `REQUEST` authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an `Auth` header, a `Name` query string parameter are defined as identity sources, this value is `method.request.header.Auth`, `method.request.querystring.Name`. These parameters will be used to derive the authorization caching key and to perform runtime validation of the `REQUEST` authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.
   *
   * @public
   */
  identitySource?: string | undefined;

  /**
   * A validation expression for the incoming identity token. For `TOKEN` authorizers, this value is a regular expression. For `COGNITO_USER_POOLS` authorizers, API Gateway will match the `aud` field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the `REQUEST` authorizer.
   *
   * @public
   */
  identityValidationExpression?: string | undefined;

  /**
   * The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.
   *
   * @public
   */
  authorizerResultTtlInSeconds?: number | undefined;
}

/**
 * Represents a collection of Authorizer resources.
 *
 * @public
 */
export interface Authorizers {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: Authorizer[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * A reference to a unique stage identified in the format `\{restApiId\}/\{stage\}`.
 *
 * @public
 */
export interface StageKey {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId?: string | undefined;

  /**
   * The stage name associated with the stage key.
   *
   * @public
   */
  stageName?: string | undefined;
}

/**
 * Request to create an ApiKey resource.
 *
 * @public
 */
export interface CreateApiKeyRequest {
  /**
   * The name of the ApiKey.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the ApiKey.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether the ApiKey can be used by callers.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * Specifies whether (`true`) or not (`false`) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used.
   *
   * @public
   */
  generateDistinctId?: boolean | undefined;

  /**
   * Specifies a value of the API key.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.
   *
   * @public
   */
  stageKeys?: StageKey[] | undefined;

  /**
   * An Amazon Web Services Marketplace customer identifier, when integrating with the Amazon Web Services SaaS Marketplace.
   *
   * @public
   */
  customerId?: string | undefined;

  /**
   * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:`. The tag value can be up to 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Request to add a new Authorizer to an existing RestApi resource.
 *
 * @public
 */
export interface CreateAuthorizerRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the authorizer.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The authorizer type. Valid values are `TOKEN` for a Lambda function using a single authorization token submitted in a custom header, `REQUEST` for a Lambda function using incoming request parameters, and `COGNITO_USER_POOLS` for using an Amazon Cognito user pool.
   *
   * @public
   */
  type: AuthorizerType | undefined;

  /**
   * A list of the Amazon Cognito user pool ARNs for the `COGNITO_USER_POOLS` authorizer. Each element is of this format: `arn:aws:cognito-idp:\{region\}:\{account_id\}:userpool/\{user_pool_id\}`. For a `TOKEN` or `REQUEST` authorizer, this is not defined.
   *
   * @public
   */
  providerARNs?: string[] | undefined;

  /**
   * Optional customer-defined field, used in OpenAPI imports and exports without functional impact.
   *
   * @public
   */
  authType?: string | undefined;

  /**
   * Specifies the authorizer's Uniform Resource Identifier (URI). For `TOKEN` or `REQUEST` authorizers, this must be a well-formed Lambda function URI, for example, `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:\{account_id\}:function:\{lambda_function_name\}/invocations`. In general, the URI has this form `arn:aws:apigateway:\{region\}:lambda:path/\{service_api\}`, where `\{region\}` is the same as the region hosting the Lambda function, `path` indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial `/`. For Lambda functions, this is usually of the form `/2015-03-31/functions/[FunctionARN]/invocations`.
   *
   * @public
   */
  authorizerUri?: string | undefined;

  /**
   * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.
   *
   * @public
   */
  authorizerCredentials?: string | undefined;

  /**
   * The identity source for which authorization is requested. For a `TOKEN` or `COGNITO_USER_POOLS` authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is `Auth`, the header mapping expression is `method.request.header.Auth`. For the `REQUEST` authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an `Auth` header, a `Name` query string parameter are defined as identity sources, this value is `method.request.header.Auth, method.request.querystring.Name`. These parameters will be used to derive the authorization caching key and to perform runtime validation of the `REQUEST` authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.
   *
   * @public
   */
  identitySource?: string | undefined;

  /**
   * A validation expression for the incoming identity token. For `TOKEN` authorizers, this value is a regular expression. For `COGNITO_USER_POOLS` authorizers, API Gateway will match the `aud` field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the `REQUEST` authorizer.
   *
   * @public
   */
  identityValidationExpression?: string | undefined;

  /**
   * The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.
   *
   * @public
   */
  authorizerResultTtlInSeconds?: number | undefined;
}

/**
 * Represents the base path that callers of the API must provide as part of the URL after the domain name.
 *
 * @public
 */
export interface BasePathMapping {
  /**
   * The base path name that callers of the API must provide as part of the URL after the domain name.
   *
   * @public
   */
  basePath?: string | undefined;

  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId?: string | undefined;

  /**
   * The name of the associated stage.
   *
   * @public
   */
  stage?: string | undefined;
}

/**
 * Requests API Gateway to create a new BasePathMapping resource.
 *
 * @public
 */
export interface CreateBasePathMappingRequest {
  /**
   * The domain name of the BasePathMapping resource to create.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The identifier for the domain name resource. Required for private custom domain names.
   *
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name.
   *
   * @public
   */
  basePath?: string | undefined;

  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the API's stage that you want to use for this mapping. Specify '(none)' if you want callers to explicitly specify the stage name after any base path name.
   *
   * @public
   */
  stage?: string | undefined;
}

/**
 * The input configuration for a canary deployment.
 *
 * @public
 */
export interface DeploymentCanarySettings {
  /**
   * The percentage (0.0-100.0) of traffic routed to the canary deployment.
   *
   * @public
   */
  percentTraffic?: number | undefined;

  /**
   * A stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.
   *
   * @public
   */
  stageVariableOverrides?: Record<string, string> | undefined;

  /**
   * A Boolean flag to indicate whether the canary release deployment uses the stage cache or not.
   *
   * @public
   */
  useStageCache?: boolean | undefined;
}

/**
 * Requests API Gateway to create a Deployment resource.
 *
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the Stage resource for the Deployment resource to create.
   *
   * @public
   */
  stageName?: string | undefined;

  /**
   * The description of the Stage resource for the Deployment resource to create.
   *
   * @public
   */
  stageDescription?: string | undefined;

  /**
   * The description for the Deployment resource to create.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Enables a cache cluster for the Stage resource specified in the input.
   *
   * @public
   */
  cacheClusterEnabled?: boolean | undefined;

  /**
   * The stage's cache capacity in GB. For more information about choosing a cache size, see [Enabling API caching to enhance responsiveness](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html).
   *
   * @public
   */
  cacheClusterSize?: CacheClusterSize | undefined;

  /**
   * A map that defines the stage variables for the Stage resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match `[A-Za-z0-9-._~:/?#&=,]+`.
   *
   * @public
   */
  variables?: Record<string, string> | undefined;

  /**
   * The input configuration for the canary deployment when the deployment is a canary release deployment.
   *
   * @public
   */
  canarySettings?: DeploymentCanarySettings | undefined;

  /**
   * Specifies whether active tracing with X-ray is enabled for the Stage.
   *
   * @public
   */
  tracingEnabled?: boolean | undefined;
}

/**
 * Represents a summary of a Method resource, given a particular date and time.
 *
 * @public
 */
export interface MethodSnapshot {
  /**
   * The method's authorization type. Valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, `CUSTOM` for using a custom authorizer, or `COGNITO_USER_POOLS` for using a Cognito user pool.
   *
   * @public
   */
  authorizationType?: string | undefined;

  /**
   * Specifies whether the method requires a valid ApiKey.
   *
   * @public
   */
  apiKeyRequired?: boolean | undefined;
}

/**
 * An immutable representation of a RestApi resource that can be called by users using Stages. A deployment must be associated with a Stage for it to be callable over the Internet.
 *
 * @public
 */
export interface Deployment {
  /**
   * The identifier for the deployment resource.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The description for the deployment resource.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date and time that the deployment resource was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * A summary of the RestApi at the date and time that the deployment resource was created.
   *
   * @public
   */
  apiSummary?: Record<string, Record<string, MethodSnapshot>> | undefined;
}

/**
 * Specifies the target API entity to which the documentation applies.
 *
 * @public
 */
export interface DocumentationPartLocation {
  /**
   * The type of API entity to which the documentation content applies. Valid values are `API`, `AUTHORIZER`, `MODEL`, `RESOURCE`, `METHOD`, `PATH_PARAMETER`, `QUERY_PARAMETER`, `REQUEST_HEADER`, `REQUEST_BODY`, `RESPONSE`, `RESPONSE_HEADER`, and `RESPONSE_BODY`. Content inheritance does not apply to any entity of the `API`, `AUTHORIZER`, `METHOD`, `MODEL`, `REQUEST_BODY`, or `RESOURCE` type.
   *
   * @public
   */
  type: DocumentationPartType | undefined;

  /**
   * The URL path of the target. It is a valid field for the API entity types of `RESOURCE`, `METHOD`, `PATH_PARAMETER`, `QUERY_PARAMETER`, `REQUEST_HEADER`, `REQUEST_BODY`, `RESPONSE`, `RESPONSE_HEADER`, and `RESPONSE_BODY`. The default value is `/` for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other `location` attributes, the child entity's `path` attribute must match that of the parent entity as a prefix.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The HTTP verb of a method. It is a valid field for the API entity types of `METHOD`, `PATH_PARAMETER`, `QUERY_PARAMETER`, `REQUEST_HEADER`, `REQUEST_BODY`, `RESPONSE`, `RESPONSE_HEADER`, and `RESPONSE_BODY`. The default value is `*` for any method. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other `location` attributes, the child entity's `method` attribute must match that of the parent entity exactly.
   *
   * @public
   */
  method?: string | undefined;

  /**
   * The HTTP status code of a response. It is a valid field for the API entity types of `RESPONSE`, `RESPONSE_HEADER`, and `RESPONSE_BODY`. The default value is `*` for any status code. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other `location` attributes, the child entity's `statusCode` attribute must match that of the parent entity exactly.
   *
   * @public
   */
  statusCode?: string | undefined;

  /**
   * The name of the targeted API entity. It is a valid and required field for the API entity types of `AUTHORIZER`, `MODEL`, `PATH_PARAMETER`, `QUERY_PARAMETER`, `REQUEST_HEADER`, `REQUEST_BODY` and `RESPONSE_HEADER`. It is an invalid field for any other entity type.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Creates a new documentation part of a given API.
 *
 * @public
 */
export interface CreateDocumentationPartRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The location of the targeted API entity of the to-be-created documentation part.
   *
   * @public
   */
  location: DocumentationPartLocation | undefined;

  /**
   * The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.
   *
   * @public
   */
  properties: string | undefined;
}

/**
 * A documentation part for a targeted API entity.
 *
 * @public
 */
export interface DocumentationPart {
  /**
   * The DocumentationPart identifier, generated by API Gateway when the `DocumentationPart` is created.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The location of the API entity to which the documentation applies. Valid fields depend on the targeted API entity type. All the valid location fields are not required. If not explicitly specified, a valid location field is treated as a wildcard and associated documentation content may be inherited by matching entities, unless overridden.
   *
   * @public
   */
  location?: DocumentationPartLocation | undefined;

  /**
   * A content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., `"\{ \"description\": \"The API does ...\" \}"`. Only OpenAPI-compliant documentation-related fields from the properties map are exported and, hence, published as part of the API entity definitions, while the original documentation parts are exported in a OpenAPI extension of `x-amazon-apigateway-documentation`.
   *
   * @public
   */
  properties?: string | undefined;
}

/**
 * Creates a new documentation version of a given API.
 *
 * @public
 */
export interface CreateDocumentationVersionRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The version identifier of the new snapshot.
   *
   * @public
   */
  documentationVersion: string | undefined;

  /**
   * The stage name to be associated with the new documentation snapshot.
   *
   * @public
   */
  stageName?: string | undefined;

  /**
   * A description about the new documentation snapshot.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * A snapshot of the documentation of an API.
 *
 * @public
 */
export interface DocumentationVersion {
  /**
   * The version identifier of the API documentation snapshot.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The date when the API documentation snapshot is created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The description of the API documentation snapshot.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has and the IP address types that can invoke it.
 *
 * @public
 */
export interface EndpointConfiguration {
  /**
   * A list of endpoint types of an API (RestApi) or its custom domain name (DomainName). For an edge-optimized API and its custom domain name, the endpoint type is `"EDGE"`. For a regional API and its custom domain name, the endpoint type is `REGIONAL`. For a private API, the endpoint type is `PRIVATE`.
   *
   * @public
   */
  types?: EndpointType[] | undefined;

  /**
   * The IP address types that can invoke an API (RestApi) or a DomainName. Use `ipv4` to allow only IPv4 addresses to invoke an API or DomainName, or use `dualstack` to allow both IPv4 and IPv6 addresses to invoke an API or a DomainName. For the `PRIVATE` endpoint type, only `dualstack` is supported.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * A list of VpcEndpointIds of an API (RestApi) against which to create Route53 ALIASes. It is only supported for `PRIVATE` endpoint type.
   *
   * @public
   */
  vpcEndpointIds?: string[] | undefined;
}

/**
 * The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
 *
 * @public
 */
export interface MutualTlsAuthenticationInput {
  /**
   * An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example `s3://bucket-name/key-name`. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
   *
   * @public
   */
  truststoreUri?: string | undefined;

  /**
   * The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket
   *
   * @public
   */
  truststoreVersion?: string | undefined;
}

/**
 * A request to create a new domain name.
 *
 * @public
 */
export interface CreateDomainNameRequest {
  /**
   * The name of the DomainName resource.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The user-friendly name of the certificate that will be used by edge-optimized endpoint or private endpoint for this domain name.
   *
   * @public
   */
  certificateName?: string | undefined;

  /**
   * [Deprecated] The body of the server certificate that will be used by edge-optimized endpoint or private endpoint for this domain name provided by your certificate authority.
   *
   * @public
   */
  certificateBody?: string | undefined;

  /**
   * [Deprecated] Your edge-optimized endpoint's domain name certificate's private key.
   *
   * @public
   */
  certificatePrivateKey?: string | undefined;

  /**
   * [Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path.
   *
   * @public
   */
  certificateChain?: string | undefined;

  /**
   * The reference to an Amazon Web Services-managed certificate that will be used by edge-optimized endpoint or private endpoint for this domain name. Certificate Manager is the only supported source.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The user-friendly name of the certificate that will be used by regional endpoint for this domain name.
   *
   * @public
   */
  regionalCertificateName?: string | undefined;

  /**
   * The reference to an Amazon Web Services-managed certificate that will be used by regional endpoint for this domain name. Certificate Manager is the only supported source.
   *
   * @public
   */
  regionalCertificateArn?: string | undefined;

  /**
   * The endpoint configuration of this DomainName showing the endpoint types and IP address types of the domain name.
   *
   * @public
   */
  endpointConfiguration?: EndpointConfiguration | undefined;

  /**
   * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:`. The tag value can be up to 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Transport Layer Security (TLS) version + cipher suite for this DomainName.
   *
   * @public
   */
  securityPolicy?: SecurityPolicy | undefined;

  /**
   * The endpoint access mode of the DomainName. Only available for DomainNames that use security policies that start with `SecurityPolicy_`.
   *
   * @public
   */
  endpointAccessMode?: EndpointAccessMode | undefined;

  /**
   * The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
   *
   * @public
   */
  mutualTlsAuthentication?: MutualTlsAuthenticationInput | undefined;

  /**
   * The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn.
   *
   * @public
   */
  ownershipVerificationCertificateArn?: string | undefined;

  /**
   * A stringified JSON policy document that applies to the `execute-api` service for this DomainName regardless of the caller and Method configuration. Supported only for private custom domain names.
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * The routing mode for this domain name. The routing mode determines how API Gateway sends traffic from your custom domain name to your private APIs.
   *
   * @public
   */
  routingMode?: RoutingMode | undefined;
}

/**
 * The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
 *
 * @public
 */
export interface MutualTlsAuthentication {
  /**
   * An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example `s3://bucket-name/key-name`. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
   *
   * @public
   */
  truststoreUri?: string | undefined;

  /**
   * The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.
   *
   * @public
   */
  truststoreVersion?: string | undefined;

  /**
   * A list of warnings that API Gateway returns while processing your truststore. Invalid certificates produce warnings. Mutual TLS is still enabled, but some clients might not be able to access your API. To resolve warnings, upload a new truststore to S3, and then update you domain name to use the new version.
   *
   * @public
   */
  truststoreWarnings?: string[] | undefined;
}

/**
 * Represents a custom domain name as a user-friendly host name of an API (RestApi).
 *
 * @public
 */
export interface DomainName {
  /**
   * The custom domain name as an API host name, for example, `my-api.example.com`.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The identifier for the domain name resource. Supported only for private custom domain names.
   *
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * The ARN of the domain name.
   *
   * @public
   */
  domainNameArn?: string | undefined;

  /**
   * The name of the certificate that will be used by edge-optimized endpoint or private endpoint for this domain name.
   *
   * @public
   */
  certificateName?: string | undefined;

  /**
   * The reference to an Amazon Web Services-managed certificate that will be used by edge-optimized endpoint or private endpoint for this domain name. Certificate Manager is the only supported source.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The timestamp when the certificate that was used by edge-optimized endpoint or private endpoint for this domain name was uploaded.
   *
   * @public
   */
  certificateUploadDate?: Date | undefined;

  /**
   * The domain name associated with the regional endpoint for this custom domain name. You set up this association by adding a DNS record that points the custom domain name to this regional domain name. The regional domain name is returned by API Gateway when you create a regional endpoint.
   *
   * @public
   */
  regionalDomainName?: string | undefined;

  /**
   * The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint. For more information, see Set up a Regional Custom Domain Name and AWS Regions and Endpoints for API Gateway.
   *
   * @public
   */
  regionalHostedZoneId?: string | undefined;

  /**
   * The name of the certificate that will be used for validating the regional domain name.
   *
   * @public
   */
  regionalCertificateName?: string | undefined;

  /**
   * The reference to an Amazon Web Services-managed certificate that will be used for validating the regional domain name. Certificate Manager is the only supported source.
   *
   * @public
   */
  regionalCertificateArn?: string | undefined;

  /**
   * The domain name of the Amazon CloudFront distribution associated with this custom domain name for an edge-optimized endpoint. You set up this association when adding a DNS record pointing the custom domain name to this distribution name. For more information about CloudFront distributions, see the Amazon CloudFront documentation.
   *
   * @public
   */
  distributionDomainName?: string | undefined;

  /**
   * The region-agnostic Amazon Route 53 Hosted Zone ID of the edge-optimized endpoint. The valid value is `Z2FDTNDATAQYW2` for all the regions. For more information, see Set up a Regional Custom Domain Name and AWS Regions and Endpoints for API Gateway.
   *
   * @public
   */
  distributionHostedZoneId?: string | undefined;

  /**
   * The endpoint configuration of this DomainName showing the endpoint types and IP address types of the domain name.
   *
   * @public
   */
  endpointConfiguration?: EndpointConfiguration | undefined;

  /**
   * The status of the DomainName migration. The valid values are `AVAILABLE` and `UPDATING`. If the status is `UPDATING`, the domain cannot be modified further until the existing operation is complete. If it is `AVAILABLE`, the domain can be updated.
   *
   * @public
   */
  domainNameStatus?: DomainNameStatus | undefined;

  /**
   * An optional text message containing detailed information about status of the DomainName migration.
   *
   * @public
   */
  domainNameStatusMessage?: string | undefined;

  /**
   * The Transport Layer Security (TLS) version + cipher suite for this DomainName.
   *
   * @public
   */
  securityPolicy?: SecurityPolicy | undefined;

  /**
   * The endpoint access mode of the DomainName.
   *
   * @public
   */
  endpointAccessMode?: EndpointAccessMode | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
   *
   * @public
   */
  mutualTlsAuthentication?: MutualTlsAuthentication | undefined;

  /**
   * The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn.
   *
   * @public
   */
  ownershipVerificationCertificateArn?: string | undefined;

  /**
   * A stringified JSON policy document that applies to the API Gateway Management service for this DomainName. This policy document controls access for access association sources to create domain name access associations with this DomainName. Supported only for private custom domain names.
   *
   * @public
   */
  managementPolicy?: string | undefined;

  /**
   * A stringified JSON policy document that applies to the `execute-api` service for this DomainName regardless of the caller and Method configuration. Supported only for private custom domain names.
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * The routing mode for this domain name. The routing mode determines how API Gateway sends traffic from your custom domain name to your private APIs.
   *
   * @public
   */
  routingMode?: RoutingMode | undefined;
}

/**
 * @public
 */
export interface CreateDomainNameAccessAssociationRequest {
  /**
   * The ARN of the domain name.
   *
   * @public
   */
  domainNameArn: string | undefined;

  /**
   * The type of the domain name access association source.
   *
   * @public
   */
  accessAssociationSourceType: AccessAssociationSourceType | undefined;

  /**
   * The identifier of the domain name access association source. For a VPCE, the value is the VPC endpoint ID.
   *
   * @public
   */
  accessAssociationSource: string | undefined;

  /**
   * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:`. The tag value can be up to 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Represents a domain name access association between an access association source and a private custom domain name. With a domain name access association, an access association source can invoke a private custom domain name while isolated from the public internet.
 *
 * @public
 */
export interface DomainNameAccessAssociation {
  /**
   * The ARN of the domain name access association resource.
   *
   * @public
   */
  domainNameAccessAssociationArn?: string | undefined;

  /**
   * The ARN of the domain name.
   *
   * @public
   */
  domainNameArn?: string | undefined;

  /**
   * The type of the domain name access association source.
   *
   * @public
   */
  accessAssociationSourceType?: AccessAssociationSourceType | undefined;

  /**
   * The ARN of the domain name access association source. For a VPCE, the ARN must be a VPC endpoint.
   *
   * @public
   */
  accessAssociationSource?: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Request to add a new Model to an existing RestApi resource.
 *
 * @public
 */
export interface CreateModelRequest {
  /**
   * The RestApi identifier under which the Model will be created.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the model. Must be alphanumeric.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The schema for the model. For `application/json` models, this should be JSON schema draft 4 model. The maximum size of the model is 400 KB.
   *
   * @public
   */
  schema?: string | undefined;

  /**
   * The content-type for the model.
   *
   * @public
   */
  contentType: string | undefined;
}

/**
 * Represents the data structure of a method's request or response payload.
 *
 * @public
 */
export interface Model {
  /**
   * The identifier for the model resource.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the model. Must be an alphanumeric string.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The schema for the model. For `application/json` models, this should be JSON schema draft 4 model. Do not include "\*\/" characters in the description of any properties because such "\*\/" characters may be interpreted as the closing marker for comments in some languages, such as Java or JavaScript, causing the installation of your API's SDK generated by API Gateway to fail.
   *
   * @public
   */
  schema?: string | undefined;

  /**
   * The content-type for the model.
   *
   * @public
   */
  contentType?: string | undefined;
}

/**
 * Creates a RequestValidator of a given RestApi.
 *
 * @public
 */
export interface CreateRequestValidatorRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the to-be-created RequestValidator.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (`true`) or not (`false`).
   *
   * @public
   */
  validateRequestBody?: boolean | undefined;

  /**
   * A Boolean flag to indicate whether to validate request parameters, `true`, or not `false`.
   *
   * @public
   */
  validateRequestParameters?: boolean | undefined;
}

/**
 * A set of validation rules for incoming Method requests.
 *
 * @public
 */
export interface RequestValidator {
  /**
   * The identifier of this RequestValidator.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of this RequestValidator
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A Boolean flag to indicate whether to validate a request body according to the configured Model schema.
   *
   * @public
   */
  validateRequestBody?: boolean | undefined;

  /**
   * A Boolean flag to indicate whether to validate request parameters (`true`) or not (`false`).
   *
   * @public
   */
  validateRequestParameters?: boolean | undefined;
}

/**
 * Requests API Gateway to create a Resource resource.
 *
 * @public
 */
export interface CreateResourceRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The parent resource's identifier.
   *
   * @public
   */
  parentId: string | undefined;

  /**
   * The last path segment for this resource.
   *
   * @public
   */
  pathPart: string | undefined;
}

/**
 * Represents an integration response. The status code must map to an existing MethodResponse, and parameters and templates can be used to transform the back-end response.
 *
 * @public
 */
export interface IntegrationResponse {
  /**
   * Specifies the status code that is used to map the integration response to an existing MethodResponse.
   *
   * @public
   */
  statusCode?: string | undefined;

  /**
   * Specifies the regular expression (regex) pattern used to choose an integration response based on the response from the back end. For example, if the success response returns nothing and the error response returns some string, you could use the `.+` regex to match error response. However, make sure that the error response does not contain any newline (`\n`) character in such cases. If the back end is an Lambda function, the Lambda function error header is matched. For all other HTTP and Amazon Web Services back ends, the HTTP status code is matched.
   *
   * @public
   */
  selectionPattern?: string | undefined;

  /**
   * A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of `method.response.header.\{name\}`, where `name` is a valid and unique header name. The mapped non-static value must match the pattern of `integration.response.header.\{name\}` or `integration.response.body.\{JSON-expression\}`, where `name` is a valid and unique response header name and `JSON-expression` is a valid JSON expression without the `$` prefix.
   *
   * @public
   */
  responseParameters?: Record<string, string> | undefined;

  /**
   * Specifies the templates used to transform the integration response body. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
   *
   * @public
   */
  responseTemplates?: Record<string, string> | undefined;

  /**
   * Specifies how to handle response payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`, with the following behaviors:
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.
   *
   * @public
   */
  contentHandling?: ContentHandlingStrategy | undefined;
}

/**
 * Specifies the TLS configuration for an integration.
 *
 * @public
 */
export interface TlsConfig {
  /**
   * Specifies whether or not API Gateway skips verification that the certificate for an integration endpoint is issued by a supported certificate authority. This isn’t recommended, but it enables you to use certificates that are signed by private certificate authorities, or certificates that are self-signed. If enabled, API Gateway still performs basic certificate validation, which includes checking the certificate's expiration date, hostname, and presence of a root certificate authority. Supported only for `HTTP` and `HTTP_PROXY` integrations.
   *
   * > **Important:** Enabling `insecureSkipVerification` isn't recommended, especially for integrations with public HTTPS endpoints. If you enable `insecureSkipVerification`, you increase the risk of man-in-the-middle attacks.
   *
   * @public
   */
  insecureSkipVerification?: boolean | undefined;
}

/**
 * Represents an `HTTP`, `HTTP_PROXY`, `AWS`, `AWS_PROXY`, or Mock integration.
 *
 * @public
 */
export interface Integration {
  /**
   * Specifies an API method integration type. The valid value is one of the following:
   *
   * For the HTTP and HTTP proxy integrations, each integration can specify a protocol (`http/https`), port and path. Standard 80 and 443 ports are supported as well as custom ports above 1024. An HTTP or HTTP proxy integration with a `connectionType` of `VPC_LINK` is referred to as a private integration and uses a VpcLink to connect API Gateway to a network load balancer of a VPC.
   *
   * @public
   */
  type?: IntegrationType | undefined;

  /**
   * Specifies the integration's HTTP method type. For the Type property, if you specify `MOCK`, this property is optional. For Lambda integrations, you must set the integration method to `POST`. For all other types, you must specify this property.
   *
   * @public
   */
  httpMethod?: string | undefined;

  /**
   * Specifies Uniform Resource Identifier (URI) of the integration endpoint.
   *
   * For `HTTP` or `HTTP_PROXY` integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification for standard integrations. If `connectionType` is `VPC_LINK` specify the Network Load Balancer DNS name. For `AWS` or `AWS_PROXY` integrations, the URI is of the form `arn:aws:apigateway:\{region\}:\{subdomain.service|service\}:path|action/\{service_api\}`. Here, \{Region\} is the API Gateway region (e.g., us-east-1); \{service\} is the name of the integrated Amazon Web Services service (e.g., s3); and \{subdomain\} is a designated subdomain supported by certain Amazon Web Services service for fast host-name lookup. action can be used for an Amazon Web Services service action-based API, using an Action=\{name\}&\{p1\}=\{v1\}&p2=\{v2\}... query string. The ensuing \{service_api\} refers to a supported action \{name\} plus any required input parameters. Alternatively, path can be used for an Amazon Web Services service path-based API. The ensuing service_api refers to the path to an Amazon Web Services service resource, including the region of the integrated Amazon Web Services service, if applicable. For example, for integration with the S3 API of GetObject, the uri can be either `arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket=\{bucket\}&Key=\{key\}` or `arn:aws:apigateway:us-west-2:s3:path/\{bucket\}/\{key\}`
   *
   * @public
   */
  uri?: string | undefined;

  /**
   * The type of the network connection to the integration endpoint. The valid value is `INTERNET` for connections through the public routable internet or `VPC_LINK` for private connections between API Gateway and a network load balancer in a VPC. The default value is `INTERNET`.
   *
   * @public
   */
  connectionType?: ConnectionType | undefined;

  /**
   * The ID of the VpcLink used for the integration when `connectionType=VPC_LINK` and undefined, otherwise.
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string `arn:aws:iam::\*:user/\*`. To use resource-based permissions on supported Amazon Web Services services, specify null.
   *
   * @public
   */
  credentials?: string | undefined;

  /**
   * A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of `method.request.\{location\}.\{name\}`, where `location` is `querystring`, `path`, or `header` and `name` must be a valid and unique method request parameter name.
   *
   * @public
   */
  requestParameters?: Record<string, string> | undefined;

  /**
   * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.
   *
   * @public
   */
  requestTemplates?: Record<string, string> | undefined;

  /**
   * Specifies how the method request body of an unmapped content type will be passed through the integration request to the back end without transformation. A content type is unmapped if no mapping template is defined in the integration or the content type does not match any of the mapped content types, as specified in `requestTemplates`. The valid value is one of the following: `WHEN_NO_MATCH`: passes the method request body through the integration request to the back end without transformation when the method request content type does not match any content type associated with the mapping templates defined in the integration request. `WHEN_NO_TEMPLATES`: passes the method request body through the integration request to the back end without transformation when no mapping template is defined in the integration request. If a template is defined when this option is selected, the method request of an unmapped content-type will be rejected with an HTTP 415 Unsupported Media Type response. `NEVER`: rejects the method request with an HTTP 415 Unsupported Media Type response when either the method request content type does not match any content type associated with the mapping templates defined in the integration request or no mapping template is defined in the integration request.
   *
   * @public
   */
  passthroughBehavior?: string | undefined;

  /**
   * Specifies how to handle request payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`, with the following behaviors:
   *
   * If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the `passthroughBehavior` is configured to support payload pass-through.
   *
   * @public
   */
  contentHandling?: ContentHandlingStrategy | undefined;

  /**
   * Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds. You can increase the default value to longer than 29 seconds for Regional or private APIs only.
   *
   * @public
   */
  timeoutInMillis?: number | undefined;

  /**
   * Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the `cacheNamespace`. You can specify the same `cacheNamespace` across resources to return the same cached data for requests to different resources.
   *
   * @public
   */
  cacheNamespace?: string | undefined;

  /**
   * A list of request parameters whose values API Gateway caches. To be valid values for `cacheKeyParameters`, these parameters must also be specified for Method `requestParameters`.
   *
   * @public
   */
  cacheKeyParameters?: string[] | undefined;

  /**
   * Specifies the integration's responses.
   *
   * @public
   */
  integrationResponses?: Record<string, IntegrationResponse> | undefined;

  /**
   * Specifies the TLS configuration for an integration.
   *
   * @public
   */
  tlsConfig?: TlsConfig | undefined;

  /**
   * The response transfer mode of the integration.
   *
   * @public
   */
  responseTransferMode?: ResponseTransferMode | undefined;

  /**
   * The ALB or NLB listener to send the request to.
   *
   * @public
   */
  integrationTarget?: string | undefined;
}

/**
 * Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template.
 *
 * @public
 */
export interface MethodResponse {
  /**
   * The method response's status code.
   *
   * @public
   */
  statusCode?: string | undefined;

  /**
   * A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header and the value specifies whether the associated method response header is required or not. The expression of the key must match the pattern `method.response.header.\{name\}`, where `name` is a valid and unique header name. API Gateway passes certain integration response data to the method response headers specified here according to the mapping you prescribe in the API's IntegrationResponse. The integration response data that can be mapped include an integration response header expressed in `integration.response.header.\{name\}`, a static value enclosed within a pair of single quotes (e.g., `'application/json'`), or a JSON expression from the back-end response payload in the form of `integration.response.body.\{JSON-expression\}`, where `JSON-expression` is a valid JSON expression without the `$` prefix.)
   *
   * @public
   */
  responseParameters?: Record<string, boolean> | undefined;

  /**
   * Specifies the Model resources used for the response's content-type. Response models are represented as a key/value map, with a content-type as the key and a Model name as the value.
   *
   * @public
   */
  responseModels?: Record<string, string> | undefined;
}

/**
 * Represents a client-facing interface by which the client calls the API to access back-end resources. A Method resource is integrated with an Integration resource. Both consist of a request and one or more responses. The method request takes the client input that is passed to the back end through the integration request. A method response returns the output from the back end to the client through an integration response. A method request is embodied in a Method resource, whereas an integration request is embodied in an Integration resource. On the other hand, a method response is represented by a MethodResponse resource, whereas an integration response is represented by an IntegrationResponse resource.
 *
 * @public
 */
export interface Method {
  /**
   * The method's HTTP verb.
   *
   * @public
   */
  httpMethod?: string | undefined;

  /**
   * The method's authorization type. Valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, `CUSTOM` for using a custom authorizer, or `COGNITO_USER_POOLS` for using a Cognito user pool.
   *
   * @public
   */
  authorizationType?: string | undefined;

  /**
   * The identifier of an Authorizer to use on this method. The `authorizationType` must be `CUSTOM`.
   *
   * @public
   */
  authorizerId?: string | undefined;

  /**
   * A boolean flag specifying whether a valid ApiKey is required to invoke this method.
   *
   * @public
   */
  apiKeyRequired?: boolean | undefined;

  /**
   * The identifier of a RequestValidator for request validation.
   *
   * @public
   */
  requestValidatorId?: string | undefined;

  /**
   * A human-friendly operation identifier for the method. For example, you can assign the `operationName` of `ListPets` for the `GET /pets` method in the `PetStore` example.
   *
   * @public
   */
  operationName?: string | undefined;

  /**
   * A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key is a method request parameter name matching the pattern of `method.request.\{location\}.\{name\}`, where `location` is `querystring`, `path`, or `header` and `name` is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (`true`) or optional (`false`). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or templates.
   *
   * @public
   */
  requestParameters?: Record<string, boolean> | undefined;

  /**
   * A key-value map specifying data schemas, represented by Model resources, (as the mapped value) of the request payloads of given content types (as the mapping key).
   *
   * @public
   */
  requestModels?: Record<string, string> | undefined;

  /**
   * Gets a method response associated with a given HTTP status code.
   *
   * @public
   */
  methodResponses?: Record<string, MethodResponse> | undefined;

  /**
   * Gets the method's integration responsible for passing the client-submitted request to the back end and performing necessary transformations to make the request compliant with the back end.
   *
   * @public
   */
  methodIntegration?: Integration | undefined;

  /**
   * A list of authorization scopes configured on the method. The scopes are used with a `COGNITO_USER_POOLS` authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
   *
   * @public
   */
  authorizationScopes?: string[] | undefined;
}

/**
 * Represents an API resource.
 *
 * @public
 */
export interface Resource {
  /**
   * The resource's identifier.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The parent resource's identifier.
   *
   * @public
   */
  parentId?: string | undefined;

  /**
   * The last path segment for this resource.
   *
   * @public
   */
  pathPart?: string | undefined;

  /**
   * The full path for this resource.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * Gets an API resource's method of a given HTTP verb.
   *
   * @public
   */
  resourceMethods?: Record<string, Method> | undefined;
}

/**
 * The POST Request to add a new RestApi resource to your collection.
 *
 * @public
 */
export interface CreateRestApiRequest {
  /**
   * The name of the RestApi.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the RestApi.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A version identifier for the API.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The ID of the RestApi that you want to clone from.
   *
   * @public
   */
  cloneFrom?: string | undefined;

  /**
   * The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.
   *
   * @public
   */
  binaryMediaTypes?: string[] | undefined;

  /**
   * A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.
   *
   * @public
   */
  minimumCompressionSize?: number | undefined;

  /**
   * The source of the API key for metering requests according to a usage plan. Valid values are: `HEADER` to read the API key from the `X-API-Key` header of a request. `AUTHORIZER` to read the API key from the `UsageIdentifierKey` from a custom authorizer.
   *
   * @public
   */
  apiKeySource?: ApiKeySourceType | undefined;

  /**
   * The endpoint configuration of this RestApi showing the endpoint types and IP address types of the API.
   *
   * @public
   */
  endpointConfiguration?: EndpointConfiguration | undefined;

  /**
   * A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration.
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:`. The tag value can be up to 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies whether clients can invoke your API by using the default `execute-api` endpoint. By default, clients can invoke your API with the default `https://\{api_id\}.execute-api.\{region\}.amazonaws.com` endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint
   *
   * @public
   */
  disableExecuteApiEndpoint?: boolean | undefined;

  /**
   * The Transport Layer Security (TLS) version + cipher suite for this RestApi.
   *
   * @public
   */
  securityPolicy?: SecurityPolicy | undefined;

  /**
   * The endpoint access mode of the RestApi. Only available for RestApis that use security policies that start with `SecurityPolicy_`.
   *
   * @public
   */
  endpointAccessMode?: EndpointAccessMode | undefined;
}

/**
 * Represents a REST API.
 *
 * @public
 */
export interface RestApi {
  /**
   * The API's identifier. This identifier is unique across all of your APIs in API Gateway.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The API's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The API's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the API was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * A version identifier for the API.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The warning messages reported when `failonwarnings` is turned on during API import.
   *
   * @public
   */
  warnings?: string[] | undefined;

  /**
   * The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.
   *
   * @public
   */
  binaryMediaTypes?: string[] | undefined;

  /**
   * A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.
   *
   * @public
   */
  minimumCompressionSize?: number | undefined;

  /**
   * The source of the API key for metering requests according to a usage plan. Valid values are: >`HEADER` to read the API key from the `X-API-Key` header of a request. `AUTHORIZER` to read the API key from the `UsageIdentifierKey` from a custom authorizer.
   *
   * @public
   */
  apiKeySource?: ApiKeySourceType | undefined;

  /**
   * The endpoint configuration of this RestApi showing the endpoint types and IP address types of the API.
   *
   * @public
   */
  endpointConfiguration?: EndpointConfiguration | undefined;

  /**
   * A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration.
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies whether clients can invoke your API by using the default `execute-api` endpoint. By default, clients can invoke your API with the default `https://\{api_id\}.execute-api.\{region\}.amazonaws.com` endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
   *
   * @public
   */
  disableExecuteApiEndpoint?: boolean | undefined;

  /**
   * The API's root resource ID.
   *
   * @public
   */
  rootResourceId?: string | undefined;

  /**
   * The Transport Layer Security (TLS) version + cipher suite for this RestApi.
   *
   * @public
   */
  securityPolicy?: SecurityPolicy | undefined;

  /**
   * The endpoint access mode of the RestApi.
   *
   * @public
   */
  endpointAccessMode?: EndpointAccessMode | undefined;

  /**
   * The ApiStatus of the RestApi.
   *
   * @public
   */
  apiStatus?: ApiStatus | undefined;

  /**
   * The status message of the RestApi. When the status message is `UPDATING` you can still invoke it.
   *
   * @public
   */
  apiStatusMessage?: string | undefined;
}

/**
 * Configuration settings of a canary deployment.
 *
 * @public
 */
export interface CanarySettings {
  /**
   * The percent (0-100) of traffic diverted to a canary deployment.
   *
   * @public
   */
  percentTraffic?: number | undefined;

  /**
   * The ID of the canary deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary. These stage variables are represented as a string-to-string map between stage variable names and their values.
   *
   * @public
   */
  stageVariableOverrides?: Record<string, string> | undefined;

  /**
   * A Boolean flag to indicate whether the canary deployment uses the stage cache or not.
   *
   * @public
   */
  useStageCache?: boolean | undefined;
}

/**
 * Requests API Gateway to create a Stage resource.
 *
 * @public
 */
export interface CreateStageRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name for the Stage resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
   *
   * @public
   */
  stageName: string | undefined;

  /**
   * The identifier of the Deployment resource for the Stage resource.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The description of the Stage resource.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether cache clustering is enabled for the stage.
   *
   * @public
   */
  cacheClusterEnabled?: boolean | undefined;

  /**
   * The stage's cache capacity in GB. For more information about choosing a cache size, see [Enabling API caching to enhance responsiveness](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html).
   *
   * @public
   */
  cacheClusterSize?: CacheClusterSize | undefined;

  /**
   * A map that defines the stage variables for the new Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match `[A-Za-z0-9-._~:/?#&=,]+`.
   *
   * @public
   */
  variables?: Record<string, string> | undefined;

  /**
   * The version of the associated API documentation.
   *
   * @public
   */
  documentationVersion?: string | undefined;

  /**
   * The canary deployment settings of this stage.
   *
   * @public
   */
  canarySettings?: CanarySettings | undefined;

  /**
   * Specifies whether active tracing with X-ray is enabled for the Stage.
   *
   * @public
   */
  tracingEnabled?: boolean | undefined;

  /**
   * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:`. The tag value can be up to 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Specifies the method setting properties.
 *
 * @public
 */
export interface MethodSetting {
  /**
   * Specifies whether Amazon CloudWatch metrics are enabled for this method.
   *
   * @public
   */
  metricsEnabled?: boolean | undefined;

  /**
   * Specifies the logging level for this method, which affects the log entries pushed to Amazon CloudWatch Logs. Valid values are `OFF`, `ERROR`, and `INFO`. Choose `ERROR` to write only error-level entries to CloudWatch Logs, or choose `INFO` to include all `ERROR` events as well as extra informational events.
   *
   * @public
   */
  loggingLevel?: string | undefined;

  /**
   * Specifies whether data trace logging is enabled for this method, which affects the log entries pushed to Amazon CloudWatch Logs. This can be useful to troubleshoot APIs, but can result in logging sensitive data. We recommend that you don't enable this option for production APIs.
   *
   * @public
   */
  dataTraceEnabled?: boolean | undefined;

  /**
   * Specifies the throttling burst limit.
   *
   * @public
   */
  throttlingBurstLimit?: number | undefined;

  /**
   * Specifies the throttling rate limit.
   *
   * @public
   */
  throttlingRateLimit?: number | undefined;

  /**
   * Specifies whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached.
   *
   * @public
   */
  cachingEnabled?: boolean | undefined;

  /**
   * Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached.
   *
   * @public
   */
  cacheTtlInSeconds?: number | undefined;

  /**
   * Specifies whether the cached responses are encrypted.
   *
   * @public
   */
  cacheDataEncrypted?: boolean | undefined;

  /**
   * Specifies whether authorization is required for a cache invalidation request.
   *
   * @public
   */
  requireAuthorizationForCacheControl?: boolean | undefined;

  /**
   * Specifies how to handle unauthorized requests for cache invalidation.
   *
   * @public
   */
  unauthorizedCacheControlHeaderStrategy?: UnauthorizedCacheControlHeaderStrategy | undefined;
}

/**
 * Represents a unique identifier for a version of a deployed RestApi that is callable by users.
 *
 * @public
 */
export interface Stage {
  /**
   * The identifier of the Deployment that the stage points to.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The identifier of a client certificate for an API stage.
   *
   * @public
   */
  clientCertificateId?: string | undefined;

  /**
   * The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
   *
   * @public
   */
  stageName?: string | undefined;

  /**
   * The stage's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether a cache cluster is enabled for the stage. To activate a method-level cache, set `CachingEnabled` to `true` for a method.
   *
   * @public
   */
  cacheClusterEnabled?: boolean | undefined;

  /**
   * The stage's cache capacity in GB. For more information about choosing a cache size, see [Enabling API caching to enhance responsiveness](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html).
   *
   * @public
   */
  cacheClusterSize?: CacheClusterSize | undefined;

  /**
   * The status of the cache cluster for the stage, if enabled.
   *
   * @public
   */
  cacheClusterStatus?: CacheClusterStatus | undefined;

  /**
   * A map that defines the method settings for a Stage resource. Keys (designated as `/\{method_setting_key` below) are method paths defined as `\{resource_path\}/\{http_method\}` for an individual method override, or `/\*\/\*` for overriding all methods in the stage.
   *
   * @public
   */
  methodSettings?: Record<string, MethodSetting> | undefined;

  /**
   * A map that defines the stage variables for a Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match `[A-Za-z0-9-._~:/?#&=,]+`.
   *
   * @public
   */
  variables?: Record<string, string> | undefined;

  /**
   * The version of the associated API documentation.
   *
   * @public
   */
  documentationVersion?: string | undefined;

  /**
   * Settings for logging access in this stage.
   *
   * @public
   */
  accessLogSettings?: AccessLogSettings | undefined;

  /**
   * Settings for the canary deployment in this stage.
   *
   * @public
   */
  canarySettings?: CanarySettings | undefined;

  /**
   * Specifies whether active tracing with X-ray is enabled for the Stage.
   *
   * @public
   */
  tracingEnabled?: boolean | undefined;

  /**
   * The ARN of the WebAcl associated with the Stage.
   *
   * @public
   */
  webAclArn?: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The timestamp when the stage was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The timestamp when the stage last updated.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;
}

/**
 * Quotas configured for a usage plan.
 *
 * @public
 */
export interface QuotaSettings {
  /**
   * The target maximum number of requests that can be made in a given time period.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The number of requests subtracted from the given limit in the initial time period.
   *
   * @public
   */
  offset?: number | undefined;

  /**
   * The time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".
   *
   * @public
   */
  period?: QuotaPeriodType | undefined;
}

/**
 * The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload.
 *
 * @public
 */
export interface CreateUsagePlanRequest {
  /**
   * The name of the usage plan.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the usage plan.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The associated API stages of the usage plan.
   *
   * @public
   */
  apiStages?: ApiStage[] | undefined;

  /**
   * The throttling limits of the usage plan.
   *
   * @public
   */
  throttle?: ThrottleSettings | undefined;

  /**
   * The quota of the usage plan.
   *
   * @public
   */
  quota?: QuotaSettings | undefined;

  /**
   * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:`. The tag value can be up to 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Represents a usage plan used to specify who can assess associated API stages. Optionally, target request rate and quota limits can be set. In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [Amazon Web Services Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
 *
 * @public
 */
export interface UsagePlan {
  /**
   * The identifier of a UsagePlan resource.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of a usage plan.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of a usage plan.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The associated API stages of a usage plan.
   *
   * @public
   */
  apiStages?: ApiStage[] | undefined;

  /**
   * A map containing method level throttling information for API stage in a usage plan.
   *
   * @public
   */
  throttle?: ThrottleSettings | undefined;

  /**
   * The target maximum number of permitted requests per a given unit time interval.
   *
   * @public
   */
  quota?: QuotaSettings | undefined;

  /**
   * The Amazon Web Services Marketplace product identifier to associate with the usage plan as a SaaS product on the Amazon Web Services Marketplace.
   *
   * @public
   */
  productCode?: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The POST request to create a usage plan key for adding an existing API key to a usage plan.
 *
 * @public
 */
export interface CreateUsagePlanKeyRequest {
  /**
   * The Id of the UsagePlan resource representing the usage plan containing the to-be-created UsagePlanKey resource representing a plan customer.
   *
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * The identifier of a UsagePlanKey resource for a plan customer.
   *
   * @public
   */
  keyId: string | undefined;

  /**
   * The type of a UsagePlanKey resource for a plan customer.
   *
   * @public
   */
  keyType: string | undefined;
}

/**
 * Represents a usage plan key to identify a plan customer.
 *
 * @public
 */
export interface UsagePlanKey {
  /**
   * The Id of a usage plan key.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of a usage plan key. Currently, the valid key type is `API_KEY`.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The value of a usage plan key.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The name of a usage plan key.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.
 *
 * @public
 */
export interface CreateVpcLinkRequest {
  /**
   * The name used to label and identify the VPC link.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the VPC link.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same Amazon Web Services account of the API owner.
   *
   * @public
   */
  targetArns: string[] | undefined;

  /**
   * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:`. The tag value can be up to 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * An API Gateway VPC link for a RestApi to access resources in an Amazon Virtual Private Cloud (VPC).
 *
 * @public
 */
export interface VpcLink {
  /**
   * The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name used to label and identify the VPC link.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the VPC link.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same Amazon Web Services account of the API owner.
   *
   * @public
   */
  targetArns?: string[] | undefined;

  /**
   * The status of the VPC link. The valid values are `AVAILABLE`, `PENDING`, `DELETING`, or `FAILED`. Deploying an API will wait if the status is `PENDING` and will fail if the status is `DELETING`.
   *
   * @public
   */
  status?: VpcLinkStatus | undefined;

  /**
   * A description about the VPC link status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A request to delete the ApiKey resource.
 *
 * @public
 */
export interface DeleteApiKeyRequest {
  /**
   * The identifier of the ApiKey resource to be deleted.
   *
   * @public
   */
  apiKey: string | undefined;
}

/**
 * Request to delete an existing Authorizer resource.
 *
 * @public
 */
export interface DeleteAuthorizerRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of the Authorizer resource.
   *
   * @public
   */
  authorizerId: string | undefined;
}

/**
 * A request to delete the BasePathMapping resource.
 *
 * @public
 */
export interface DeleteBasePathMappingRequest {
  /**
   * The domain name of the BasePathMapping resource to delete.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The identifier for the domain name resource. Supported only for private custom domain names.
   *
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * The base path name of the BasePathMapping resource to delete.
   *
   * To specify an empty base path, set this parameter to `'(none)'`.
   *
   * @public
   */
  basePath: string | undefined;
}

/**
 * A request to delete the ClientCertificate resource.
 *
 * @public
 */
export interface DeleteClientCertificateRequest {
  /**
   * The identifier of the ClientCertificate resource to be deleted.
   *
   * @public
   */
  clientCertificateId: string | undefined;
}

/**
 * Requests API Gateway to delete a Deployment resource.
 *
 * @public
 */
export interface DeleteDeploymentRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of the Deployment resource to delete.
   *
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * Deletes an existing documentation part of an API.
 *
 * @public
 */
export interface DeleteDocumentationPartRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of the to-be-deleted documentation part.
   *
   * @public
   */
  documentationPartId: string | undefined;
}

/**
 * Deletes an existing documentation version of an API.
 *
 * @public
 */
export interface DeleteDocumentationVersionRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The version identifier of a to-be-deleted documentation snapshot.
   *
   * @public
   */
  documentationVersion: string | undefined;
}

/**
 * A request to delete the DomainName resource.
 *
 * @public
 */
export interface DeleteDomainNameRequest {
  /**
   * The name of the DomainName resource to be deleted.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The identifier for the domain name resource. Supported only for private custom domain names.
   *
   * @public
   */
  domainNameId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainNameAccessAssociationRequest {
  /**
   * The ARN of the domain name access association resource.
   *
   * @public
   */
  domainNameAccessAssociationArn: string | undefined;
}

/**
 * Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings.
 *
 * @public
 */
export interface DeleteGatewayResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The response type of the associated GatewayResponse.
   *
   * @public
   */
  responseType: GatewayResponseType | undefined;
}

/**
 * Represents a delete integration request.
 *
 * @public
 */
export interface DeleteIntegrationRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * Specifies a delete integration request's resource identifier.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Specifies a delete integration request's HTTP method.
   *
   * @public
   */
  httpMethod: string | undefined;
}

/**
 * Represents a delete integration response request.
 *
 * @public
 */
export interface DeleteIntegrationResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * Specifies a delete integration response request's resource identifier.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Specifies a delete integration response request's HTTP method.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * Specifies a delete integration response request's status code.
   *
   * @public
   */
  statusCode: string | undefined;
}

/**
 * Request to delete an existing Method resource.
 *
 * @public
 */
export interface DeleteMethodRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The Resource identifier for the Method resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The HTTP verb of the Method resource.
   *
   * @public
   */
  httpMethod: string | undefined;
}

/**
 * A request to delete an existing MethodResponse resource.
 *
 * @public
 */
export interface DeleteMethodResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The Resource identifier for the MethodResponse resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The HTTP verb of the Method resource.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * The status code identifier for the MethodResponse resource.
   *
   * @public
   */
  statusCode: string | undefined;
}

/**
 * Request to delete an existing model in an existing RestApi resource.
 *
 * @public
 */
export interface DeleteModelRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the model to delete.
   *
   * @public
   */
  modelName: string | undefined;
}

/**
 * Deletes a specified RequestValidator of a given RestApi.
 *
 * @public
 */
export interface DeleteRequestValidatorRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of the RequestValidator to be deleted.
   *
   * @public
   */
  requestValidatorId: string | undefined;
}

/**
 * Request to delete a Resource.
 *
 * @public
 */
export interface DeleteResourceRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of the Resource resource.
   *
   * @public
   */
  resourceId: string | undefined;
}

/**
 * Request to delete the specified API from your collection.
 *
 * @public
 */
export interface DeleteRestApiRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;
}

/**
 * Requests API Gateway to delete a Stage resource.
 *
 * @public
 */
export interface DeleteStageRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the Stage resource to delete.
   *
   * @public
   */
  stageName: string | undefined;
}

/**
 * The DELETE request to delete a usage plan of a given plan Id.
 *
 * @public
 */
export interface DeleteUsagePlanRequest {
  /**
   * The Id of the to-be-deleted usage plan.
   *
   * @public
   */
  usagePlanId: string | undefined;
}

/**
 * The DELETE request to delete a usage plan key and remove the underlying API key from the associated usage plan.
 *
 * @public
 */
export interface DeleteUsagePlanKeyRequest {
  /**
   * The Id of the UsagePlan resource representing the usage plan containing the to-be-deleted UsagePlanKey resource representing a plan customer.
   *
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * The Id of the UsagePlanKey resource to be deleted.
   *
   * @public
   */
  keyId: string | undefined;
}

/**
 * Deletes an existing VpcLink of a specified identifier.
 *
 * @public
 */
export interface DeleteVpcLinkRequest {
  /**
   * The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.
   *
   * @public
   */
  vpcLinkId: string | undefined;
}

/**
 * Request to flush authorizer cache entries on a specified stage.
 *
 * @public
 */
export interface FlushStageAuthorizersCacheRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the stage to flush.
   *
   * @public
   */
  stageName: string | undefined;
}

/**
 * Requests API Gateway to flush a stage's cache.
 *
 * @public
 */
export interface FlushStageCacheRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the stage to flush its cache.
   *
   * @public
   */
  stageName: string | undefined;
}

/**
 * Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.
 *
 * @public
 */
export interface ClientCertificate {
  /**
   * The identifier of the client certificate.
   *
   * @public
   */
  clientCertificateId?: string | undefined;

  /**
   * The description of the client certificate.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The PEM-encoded public key of the client certificate, which can be used to configure certificate authentication in the integration endpoint .
   *
   * @public
   */
  pemEncodedCertificate?: string | undefined;

  /**
   * The timestamp when the client certificate was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The timestamp when the client certificate will expire.
   *
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A request to generate a ClientCertificate resource.
 *
 * @public
 */
export interface GenerateClientCertificateRequest {
  /**
   * The description of the ClientCertificate.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:`. The tag value can be up to 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Requests API Gateway to get information about the current Account resource.
 *
 * @public
 */
export interface GetAccountRequest {}

/**
 * A request to get information about the current ApiKey resource.
 *
 * @public
 */
export interface GetApiKeyRequest {
  /**
   * The identifier of the ApiKey resource.
   *
   * @public
   */
  apiKey: string | undefined;

  /**
   * A boolean flag to specify whether (`true`) or not (`false`) the result contains the key value.
   *
   * @public
   */
  includeValue?: boolean | undefined;
}

/**
 * A request to get information about the current ApiKeys resource.
 *
 * @public
 */
export interface GetApiKeysRequest {
  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The name of queried API keys.
   *
   * @public
   */
  nameQuery?: string | undefined;

  /**
   * The identifier of a customer in Amazon Web Services Marketplace or an external system, such as a developer portal.
   *
   * @public
   */
  customerId?: string | undefined;

  /**
   * A boolean flag to specify whether (`true`) or not (`false`) the result contains key values.
   *
   * @public
   */
  includeValues?: boolean | undefined;
}

/**
 * Request to describe an existing Authorizer resource.
 *
 * @public
 */
export interface GetAuthorizerRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of the Authorizer resource.
   *
   * @public
   */
  authorizerId: string | undefined;
}

/**
 * Request to describe an existing Authorizers resource.
 *
 * @public
 */
export interface GetAuthorizersRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Request to describe a BasePathMapping resource.
 *
 * @public
 */
export interface GetBasePathMappingRequest {
  /**
   * The domain name of the BasePathMapping resource to be described.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The identifier for the domain name resource. Supported only for private custom domain names.
   *
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify any base path name after the domain name.
   *
   * @public
   */
  basePath: string | undefined;
}

/**
 * Represents a collection of BasePathMapping resources.
 *
 * @public
 */
export interface BasePathMappings {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: BasePathMapping[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * A request to get information about a collection of BasePathMapping resources.
 *
 * @public
 */
export interface GetBasePathMappingsRequest {
  /**
   * The domain name of a BasePathMapping resource.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The identifier for the domain name resource. Supported only for private custom domain names.
   *
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * A request to get information about the current ClientCertificate resource.
 *
 * @public
 */
export interface GetClientCertificateRequest {
  /**
   * The identifier of the ClientCertificate resource to be described.
   *
   * @public
   */
  clientCertificateId: string | undefined;
}

/**
 * Represents a collection of ClientCertificate resources.
 *
 * @public
 */
export interface ClientCertificates {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: ClientCertificate[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * A request to get information about a collection of ClientCertificate resources.
 *
 * @public
 */
export interface GetClientCertificatesRequest {
  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Requests API Gateway to get information about a Deployment resource.
 *
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of the Deployment resource to get information about.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * A query parameter to retrieve the specified embedded resources of the returned Deployment resource in the response. In a REST API call, this `embed` parameter value is a list of comma-separated strings, as in `GET /restapis/\{restapi_id\}/deployments/\{deployment_id\}?embed=var1,var2`. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the `"apisummary"` string. For example, `GET /restapis/\{restapi_id\}/deployments/\{deployment_id\}?embed=apisummary`.
   *
   * @public
   */
  embed?: string[] | undefined;
}

/**
 * Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments.
 *
 * @public
 */
export interface Deployments {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: Deployment[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * Requests API Gateway to get information about a Deployments collection.
 *
 * @public
 */
export interface GetDeploymentsRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Gets a specified documentation part of a given API.
 *
 * @public
 */
export interface GetDocumentationPartRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  documentationPartId: string | undefined;
}

/**
 * The collection of documentation parts of an API.
 *
 * @public
 */
export interface DocumentationParts {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: DocumentationPart[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * Gets the documentation parts of an API. The result may be filtered by the type, name, or path of API entities (targets).
 *
 * @public
 */
export interface GetDocumentationPartsRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The type of API entities of the to-be-retrieved documentation parts.
   *
   * @public
   */
  type?: DocumentationPartType | undefined;

  /**
   * The name of API entities of the to-be-retrieved documentation parts.
   *
   * @public
   */
  nameQuery?: string | undefined;

  /**
   * The path of API entities of the to-be-retrieved documentation parts.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The status of the API documentation parts to retrieve. Valid values are `DOCUMENTED` for retrieving DocumentationPart resources with content and `UNDOCUMENTED` for DocumentationPart resources without content.
   *
   * @public
   */
  locationStatus?: LocationStatusType | undefined;
}

/**
 * Gets a documentation snapshot of an API.
 *
 * @public
 */
export interface GetDocumentationVersionRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The version identifier of the to-be-retrieved documentation snapshot.
   *
   * @public
   */
  documentationVersion: string | undefined;
}

/**
 * The collection of documentation snapshots of an API.
 *
 * @public
 */
export interface DocumentationVersions {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: DocumentationVersion[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * Gets the documentation versions of an API.
 *
 * @public
 */
export interface GetDocumentationVersionsRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Request to get the name of a DomainName resource.
 *
 * @public
 */
export interface GetDomainNameRequest {
  /**
   * The name of the DomainName resource.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The identifier for the domain name resource. Required for private custom domain names.
   *
   * @public
   */
  domainNameId?: string | undefined;
}

/**
 * @public
 */
export interface DomainNameAccessAssociations {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: DomainNameAccessAssociation[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainNameAccessAssociationsRequest {
  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The owner of the domain name access association. Use `SELF` to only list the domain name access associations owned by your own account. Use `OTHER_ACCOUNTS` to list the domain name access associations with your private custom domain names that are owned by other AWS accounts.
   *
   * @public
   */
  resourceOwner?: ResourceOwner | undefined;
}

/**
 * Represents a collection of DomainName resources.
 *
 * @public
 */
export interface DomainNames {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: DomainName[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * Request to describe a collection of DomainName resources.
 *
 * @public
 */
export interface GetDomainNamesRequest {
  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The owner of the domain name access association.
   *
   * @public
   */
  resourceOwner?: ResourceOwner | undefined;
}

/**
 * The binary blob response to GetExport, which contains the generated SDK.
 *
 * @public
 */
export interface ExportResponse {
  /**
   * The content-type header value in the HTTP response. This will correspond to a valid 'accept' type in the request.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The content-disposition header value in the HTTP response.
   *
   * @public
   */
  contentDisposition?: string | undefined;

  /**
   * The binary blob response to GetExport, which contains the export.
   *
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * Request a new export of a RestApi for a particular Stage.
 *
 * @public
 */
export interface GetExportRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the Stage that will be exported.
   *
   * @public
   */
  stageName: string | undefined;

  /**
   * The type of export. Acceptable values are 'oas30' for OpenAPI 3.0.x and 'swagger' for Swagger/OpenAPI 2.0.
   *
   * @public
   */
  exportType: string | undefined;

  /**
   * A key-value map of query string parameters that specify properties of the export, depending on the requested `exportType`. For `exportType` `oas30` and `swagger`, any combination of the following parameters are supported: `extensions='integrations'` or `extensions='apigateway'` will export the API with x-amazon-apigateway-integration extensions. `extensions='authorizers'` will export the API with x-amazon-apigateway-authorizer extensions. `postman` will export the API with Postman extensions, allowing for import to the Postman tool
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The content-type of the export, for example `application/json`. Currently `application/json` and `application/yaml` are supported for `exportType` of`oas30` and `swagger`. This should be specified in the `Accept` header for direct API requests.
   *
   * @public
   */
  accepts?: string | undefined;
}

/**
 * A gateway response of a given response type and status code, with optional response parameters and mapping templates.
 *
 * @public
 */
export interface GatewayResponse {
  /**
   * The response type of the associated GatewayResponse.
   *
   * @public
   */
  responseType?: GatewayResponseType | undefined;

  /**
   * The HTTP status code for this GatewayResponse.
   *
   * @public
   */
  statusCode?: string | undefined;

  /**
   * Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.
   *
   * @public
   */
  responseParameters?: Record<string, string> | undefined;

  /**
   * Response templates of the GatewayResponse as a string-to-string map of key-value pairs.
   *
   * @public
   */
  responseTemplates?: Record<string, string> | undefined;

  /**
   * A Boolean flag to indicate whether this GatewayResponse is the default gateway response (`true`) or not (`false`). A default gateway response is one generated by API Gateway without any customization by an API developer.
   *
   * @public
   */
  defaultResponse?: boolean | undefined;
}

/**
 * Gets a GatewayResponse of a specified response type on the given RestApi.
 *
 * @public
 */
export interface GetGatewayResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The response type of the associated GatewayResponse.
   *
   * @public
   */
  responseType: GatewayResponseType | undefined;
}

/**
 * The collection of the GatewayResponse instances of a RestApi as a `responseType`-to-GatewayResponse object map of key-value pairs. As such, pagination is not supported for querying this collection.
 *
 * @public
 */
export interface GatewayResponses {
  /**
   * Returns the entire collection, because of no pagination support.
   *
   * @public
   */
  items?: GatewayResponse[] | undefined;

  /**
   * The current pagination position in the paged result set. The GatewayResponse collection does not support pagination and the position does not apply here.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.
 *
 * @public
 */
export interface GetGatewayResponsesRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The current pagination position in the paged result set. The GatewayResponse collection does not support pagination and the position does not apply here.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500. The GatewayResponses collection does not support pagination and the limit does not apply here.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Represents a request to get the integration configuration.
 *
 * @public
 */
export interface GetIntegrationRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * Specifies a get integration request's resource identifier
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Specifies a get integration request's HTTP method.
   *
   * @public
   */
  httpMethod: string | undefined;
}

/**
 * Represents a get integration response request.
 *
 * @public
 */
export interface GetIntegrationResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * Specifies a get integration response request's resource identifier.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Specifies a get integration response request's HTTP method.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * Specifies a get integration response request's status code.
   *
   * @public
   */
  statusCode: string | undefined;
}

/**
 * Request to describe an existing Method resource.
 *
 * @public
 */
export interface GetMethodRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The Resource identifier for the Method resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Specifies the method request's HTTP method type.
   *
   * @public
   */
  httpMethod: string | undefined;
}

/**
 * Request to describe a MethodResponse resource.
 *
 * @public
 */
export interface GetMethodResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The Resource identifier for the MethodResponse resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The HTTP verb of the Method resource.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * The status code for the MethodResponse resource.
   *
   * @public
   */
  statusCode: string | undefined;
}

/**
 * Request to list information about a model in an existing RestApi resource.
 *
 * @public
 */
export interface GetModelRequest {
  /**
   * The RestApi identifier under which the Model exists.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the model as an identifier.
   *
   * @public
   */
  modelName: string | undefined;

  /**
   * A query parameter of a Boolean value to resolve (`true`) all external model references and returns a flattened model schema or not (`false`) The default is `false`.
   *
   * @public
   */
  flatten?: boolean | undefined;
}

/**
 * Request to list existing Models defined for a RestApi resource.
 *
 * @public
 */
export interface GetModelsRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Represents a collection of Model resources.
 *
 * @public
 */
export interface Models {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: Model[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * Request to generate a sample mapping template used to transform the payload.
 *
 * @public
 */
export interface GetModelTemplateRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the model for which to generate a template.
   *
   * @public
   */
  modelName: string | undefined;
}

/**
 * Represents a mapping template used to transform a payload.
 *
 * @public
 */
export interface Template {
  /**
   * The Apache Velocity Template Language (VTL) template content used for the template resource.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Gets a RequestValidator of a given RestApi.
 *
 * @public
 */
export interface GetRequestValidatorRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of the RequestValidator to be retrieved.
   *
   * @public
   */
  requestValidatorId: string | undefined;
}

/**
 * Gets the RequestValidators collection of a given RestApi.
 *
 * @public
 */
export interface GetRequestValidatorsRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * A collection of RequestValidator resources of a given RestApi.
 *
 * @public
 */
export interface RequestValidators {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: RequestValidator[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * Request to list information about a resource.
 *
 * @public
 */
export interface GetResourceRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier for the Resource resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * A query parameter to retrieve the specified resources embedded in the returned Resource representation in the response. This `embed` parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the `"methods"` string. For example, `GET /restapis/\{restapi_id\}/resources/\{resource_id\}?embed=methods`.
   *
   * @public
   */
  embed?: string[] | undefined;
}

/**
 * Request to list information about a collection of resources.
 *
 * @public
 */
export interface GetResourcesRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * A query parameter used to retrieve the specified resources embedded in the returned Resources resource in the response. This `embed` parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the `"methods"` string. For example, `GET /restapis/\{restapi_id\}/resources?embed=methods`.
   *
   * @public
   */
  embed?: string[] | undefined;
}

/**
 * Represents a collection of Resource resources.
 *
 * @public
 */
export interface Resources {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: Resource[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * The GET request to list an existing RestApi defined for your collection.
 *
 * @public
 */
export interface GetRestApiRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;
}

/**
 * The GET request to list existing RestApis defined for your collection.
 *
 * @public
 */
export interface GetRestApisRequest {
  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.
 *
 * @public
 */
export interface RestApis {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: RestApi[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * Request a new generated client SDK for a RestApi and Stage.
 *
 * @public
 */
export interface GetSdkRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the Stage that the SDK will use.
   *
   * @public
   */
  stageName: string | undefined;

  /**
   * The language for the generated SDK. Currently `java`, `javascript`, `android`, `objectivec` (for iOS), `swift` (for iOS), and `ruby` are supported.
   *
   * @public
   */
  sdkType: string | undefined;

  /**
   * A string-to-string key-value map of query parameters `sdkType`-dependent properties of the SDK. For `sdkType` of `objectivec` or `swift`, a parameter named `classPrefix` is required. For `sdkType` of `android`, parameters named `groupId`, `artifactId`, `artifactVersion`, and `invokerPackage` are required. For `sdkType` of `java`, parameters named `serviceName` and `javaPackageName` are required.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * The binary blob response to GetSdk, which contains the generated SDK.
 *
 * @public
 */
export interface SdkResponse {
  /**
   * The content-type header value in the HTTP response.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The content-disposition header value in the HTTP response.
   *
   * @public
   */
  contentDisposition?: string | undefined;

  /**
   * The binary blob response to GetSdk, which contains the generated SDK.
   *
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * Get an SdkType instance.
 *
 * @public
 */
export interface GetSdkTypeRequest {
  /**
   * The identifier of the queried SdkType instance.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * A configuration property of an SDK type.
 *
 * @public
 */
export interface SdkConfigurationProperty {
  /**
   * The name of a an SdkType configuration property.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The user-friendly name of an SdkType configuration property.
   *
   * @public
   */
  friendlyName?: string | undefined;

  /**
   * The description of an SdkType configuration property.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A boolean flag of an SdkType configuration property to indicate if the associated SDK configuration property is required (`true`) or not (`false`).
   *
   * @public
   */
  required?: boolean | undefined;

  /**
   * The default value of an SdkType configuration property.
   *
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * A type of SDK that API Gateway can generate.
 *
 * @public
 */
export interface SdkType {
  /**
   * The identifier of an SdkType instance.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The user-friendly name of an SdkType instance.
   *
   * @public
   */
  friendlyName?: string | undefined;

  /**
   * The description of an SdkType.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of configuration properties of an SdkType.
   *
   * @public
   */
  configurationProperties?: SdkConfigurationProperty[] | undefined;
}

/**
 * Get the SdkTypes collection.
 *
 * @public
 */
export interface GetSdkTypesRequest {
  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * The collection of SdkType instances.
 *
 * @public
 */
export interface SdkTypes {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: SdkType[] | undefined;
}

/**
 * Requests API Gateway to get information about a Stage resource.
 *
 * @public
 */
export interface GetStageRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the Stage resource to get information about.
   *
   * @public
   */
  stageName: string | undefined;
}

/**
 * Requests API Gateway to get information about one or more Stage resources.
 *
 * @public
 */
export interface GetStagesRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The stages' deployment identifiers.
   *
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * A list of Stage resources that are associated with the ApiKey resource.
 *
 * @public
 */
export interface Stages {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  item?: Stage[] | undefined;
}

/**
 * Gets the Tags collection for a given resource.
 *
 * @public
 */
export interface GetTagsRequest {
  /**
   * The ARN of a resource that can be tagged.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * (Not currently supported) The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * (Not currently supported) The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * The collection of tags. Each tag element is associated with a given resource.
 *
 * @public
 */
export interface Tags {
  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The GET request to get the usage data of a usage plan in a specified time interval.
 *
 * @public
 */
export interface GetUsageRequest {
  /**
   * The Id of the usage plan associated with the usage data.
   *
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * The Id of the API key associated with the resultant usage data.
   *
   * @public
   */
  keyId?: string | undefined;

  /**
   * The starting date (e.g., 2016-01-01) of the usage data.
   *
   * @public
   */
  startDate: string | undefined;

  /**
   * The ending date (e.g., 2016-12-31) of the usage data.
   *
   * @public
   */
  endDate: string | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Represents the usage data of a usage plan.
 *
 * @public
 */
export interface Usage {
  /**
   * The plan Id associated with this usage data.
   *
   * @public
   */
  usagePlanId?: string | undefined;

  /**
   * The starting date of the usage data.
   *
   * @public
   */
  startDate?: string | undefined;

  /**
   * The ending date of the usage data.
   *
   * @public
   */
  endDate?: string | undefined;

  /**
   * The usage data, as daily logs of used and remaining quotas, over the specified time interval indexed over the API keys in a usage plan. For example, `\{..., "values" : \{ "\{api_key\}" : [ [0, 100], [10, 90], [100, 10]]\}`, where `\{api_key\}` stands for an API key value and the daily log entry is of the format `[used quota, remaining quota]`.
   *
   * @public
   */
  items?: Record<string, number[][]> | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * The GET request to get a usage plan of a given plan identifier.
 *
 * @public
 */
export interface GetUsagePlanRequest {
  /**
   * The identifier of the UsagePlan resource to be retrieved.
   *
   * @public
   */
  usagePlanId: string | undefined;
}

/**
 * The GET request to get a usage plan key of a given key identifier.
 *
 * @public
 */
export interface GetUsagePlanKeyRequest {
  /**
   * The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.
   *
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * The key Id of the to-be-retrieved UsagePlanKey resource representing a plan customer.
   *
   * @public
   */
  keyId: string | undefined;
}

/**
 * The GET request to get all the usage plan keys representing the API keys added to a specified usage plan.
 *
 * @public
 */
export interface GetUsagePlanKeysRequest {
  /**
   * The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.
   *
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * A query parameter specifying the name of the to-be-returned usage plan keys.
   *
   * @public
   */
  nameQuery?: string | undefined;
}

/**
 * Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.
 *
 * @public
 */
export interface UsagePlanKeys {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: UsagePlanKey[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * The GET request to get all the usage plans of the caller's account.
 *
 * @public
 */
export interface GetUsagePlansRequest {
  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The identifier of the API key associated with the usage plans.
   *
   * @public
   */
  keyId?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Represents a collection of usage plans for an AWS account.
 *
 * @public
 */
export interface UsagePlans {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: UsagePlan[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * Gets a specified VPC link under the caller's account in a region.
 *
 * @public
 */
export interface GetVpcLinkRequest {
  /**
   * The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.
   *
   * @public
   */
  vpcLinkId: string | undefined;
}

/**
 * Gets the VpcLinks collection under the caller's account in a selected region.
 *
 * @public
 */
export interface GetVpcLinksRequest {
  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;

  /**
   * The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * The collection of VPC links under the caller's account in a region.
 *
 * @public
 */
export interface VpcLinks {
  /**
   * The current page of elements from this collection.
   *
   * @public
   */
  items?: VpcLink[] | undefined;

  /**
   * The current pagination position in the paged result set.
   *
   * @public
   */
  position?: string | undefined;
}

/**
 * The POST request to import API keys from an external source, such as a CSV-formatted file.
 *
 * @public
 */
export interface ImportApiKeysRequest {
  /**
   * The payload of the POST request to import API keys. For the payload format, see API Key File Format.
   *
   * @public
   */
  body: Uint8Array | undefined;

  /**
   * A query parameter to specify the input format to imported API keys. Currently, only the `csv` format is supported.
   *
   * @public
   */
  format: ApiKeysFormat | undefined;

  /**
   * A query parameter to indicate whether to rollback ApiKey importation (`true`) or not (`false`) when error is encountered.
   *
   * @public
   */
  failOnWarnings?: boolean | undefined;
}

/**
 * A collection of the imported DocumentationPart identifiers.
 *
 * @public
 */
export interface DocumentationPartIds {
  /**
   * A list of the returned documentation part identifiers.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * A list of warning messages reported during import of documentation parts.
   *
   * @public
   */
  warnings?: string[] | undefined;
}

/**
 * Import documentation parts from an external (e.g., OpenAPI) definition file.
 *
 * @public
 */
export interface ImportDocumentationPartsRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * A query parameter to indicate whether to overwrite (`overwrite`) any existing DocumentationParts definition or to merge (`merge`) the new definition into the existing one. The default value is `merge`.
   *
   * @public
   */
  mode?: PutMode | undefined;

  /**
   * A query parameter to specify whether to rollback the documentation importation (`true`) or not (`false`) when a warning is encountered. The default value is `false`.
   *
   * @public
   */
  failOnWarnings?: boolean | undefined;

  /**
   * Raw byte array representing the to-be-imported documentation parts. To import from an OpenAPI file, this is a JSON object.
   *
   * @public
   */
  body: Uint8Array | undefined;
}

/**
 * A POST request to import an API to API Gateway using an input of an API definition file.
 *
 * @public
 */
export interface ImportRestApiRequest {
  /**
   * A query parameter to indicate whether to rollback the API creation (`true`) or not (`false`) when a warning is encountered. The default value is `false`.
   *
   * @public
   */
  failOnWarnings?: boolean | undefined;

  /**
   * A key-value map of context-specific query string parameters specifying the behavior of different API importing operations. The following shows operation-specific parameters and their supported values.
   *
   * To exclude DocumentationParts from the import, set `parameters` as `ignore=documentation`.
   *
   * To configure the endpoint type, set `parameters` as `endpointConfigurationTypes=EDGE`, `endpointConfigurationTypes=REGIONAL`, or `endpointConfigurationTypes=PRIVATE`. The default endpoint type is `EDGE`.
   *
   * To handle imported `basepath`, set `parameters` as `basepath=ignore`, `basepath=prepend` or `basepath=split`.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.
   *
   * @public
   */
  body: Uint8Array | undefined;
}

/**
 * Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.
 *
 * @public
 */
export interface PutGatewayResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The response type of the associated GatewayResponse
   *
   * @public
   */
  responseType: GatewayResponseType | undefined;

  /**
   * The HTTP status code of the GatewayResponse.
   *
   * @public
   */
  statusCode?: string | undefined;

  /**
   * Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.
   *
   * @public
   */
  responseParameters?: Record<string, string> | undefined;

  /**
   * Response templates of the GatewayResponse as a string-to-string map of key-value pairs.
   *
   * @public
   */
  responseTemplates?: Record<string, string> | undefined;
}

/**
 * Sets up a method's integration.
 *
 * @public
 */
export interface PutIntegrationRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * Specifies a put integration request's resource ID.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Specifies the HTTP method for the integration.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * Specifies a put integration input's type.
   *
   * @public
   */
  type: IntegrationType | undefined;

  /**
   * The HTTP method for the integration.
   *
   * @public
   */
  integrationHttpMethod?: string | undefined;

  /**
   * Specifies Uniform Resource Identifier (URI) of the integration endpoint. For HTTP or `HTTP_PROXY` integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification, for either standard integration, where `connectionType` is not `VPC_LINK`, or private integration, where `connectionType` is `VPC_LINK`. For a private HTTP integration, the URI is not used for routing. For `AWS` or `AWS_PROXY` integrations, the URI is of the form `arn:aws:apigateway:\{region\}:\{subdomain.service|service\}:path|action/\{service_api`\}. Here, \{Region\} is the API Gateway region (e.g., us-east-1); \{service\} is the name of the integrated Amazon Web Services service (e.g., s3); and \{subdomain\} is a designated subdomain supported by certain Amazon Web Services service for fast host-name lookup. action can be used for an Amazon Web Services service action-based API, using an Action=\{name\}&\{p1\}=\{v1\}&p2=\{v2\}... query string. The ensuing \{service_api\} refers to a supported action \{name\} plus any required input parameters. Alternatively, path can be used for an Amazon Web Services service path-based API. The ensuing service_api refers to the path to an Amazon Web Services service resource, including the region of the integrated Amazon Web Services service, if applicable. For example, for integration with the S3 API of `GetObject`, the `uri` can be either `arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket=\{bucket\}&Key=\{key\}` or `arn:aws:apigateway:us-west-2:s3:path/\{bucket\}/\{key\}`.
   *
   * @public
   */
  uri?: string | undefined;

  /**
   * The type of the network connection to the integration endpoint. The valid value is `INTERNET` for connections through the public routable internet or `VPC_LINK` for private connections between API Gateway and a network load balancer in a VPC. The default value is `INTERNET`.
   *
   * @public
   */
  connectionType?: ConnectionType | undefined;

  /**
   * The ID of the VpcLink used for the integration. Specify this value only if you specify `VPC_LINK` as the connection type.
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * Specifies whether credentials are required for a put integration.
   *
   * @public
   */
  credentials?: string | undefined;

  /**
   * A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of `method.request.\{location\}.\{name\}`, where `location` is `querystring`, `path`, or `header` and `name` must be a valid and unique method request parameter name.
   *
   * @public
   */
  requestParameters?: Record<string, string> | undefined;

  /**
   * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.
   *
   * @public
   */
  requestTemplates?: Record<string, string> | undefined;

  /**
   * Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the `requestTemplates` property on the Integration resource. There are three valid values: `WHEN_NO_MATCH`, `WHEN_NO_TEMPLATES`, and `NEVER`.
   *
   * @public
   */
  passthroughBehavior?: string | undefined;

  /**
   * Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the `cacheNamespace`. You can specify the same `cacheNamespace` across resources to return the same cached data for requests to different resources.
   *
   * @public
   */
  cacheNamespace?: string | undefined;

  /**
   * A list of request parameters whose values API Gateway caches. To be valid values for `cacheKeyParameters`, these parameters must also be specified for Method `requestParameters`.
   *
   * @public
   */
  cacheKeyParameters?: string[] | undefined;

  /**
   * Specifies how to handle request payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`, with the following behaviors:
   *
   * If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the `passthroughBehavior` is configured to support payload pass-through.
   *
   * @public
   */
  contentHandling?: ContentHandlingStrategy | undefined;

  /**
   * Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds. You can increase the default value to longer than 29 seconds for Regional or private APIs only.
   *
   * @public
   */
  timeoutInMillis?: number | undefined;

  /**
   * Specifies the TLS configuration for an integration.
   *
   * @public
   */
  tlsConfig?: TlsConfig | undefined;

  /**
   * The response transfer mode of the integration.
   *
   * @public
   */
  responseTransferMode?: ResponseTransferMode | undefined;

  /**
   * The ALB or NLB listener to send the request to.
   *
   * @public
   */
  integrationTarget?: string | undefined;
}

/**
 * Represents a put integration response request.
 *
 * @public
 */
export interface PutIntegrationResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * Specifies a put integration response request's resource identifier.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Specifies a put integration response request's HTTP method.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * Specifies the status code that is used to map the integration response to an existing MethodResponse.
   *
   * @public
   */
  statusCode: string | undefined;

  /**
   * Specifies the selection pattern of a put integration response.
   *
   * @public
   */
  selectionPattern?: string | undefined;

  /**
   * A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of `method.response.header.\{name\}`, where `name` is a valid and unique header name. The mapped non-static value must match the pattern of `integration.response.header.\{name\}` or `integration.response.body.\{JSON-expression\}`, where `name` must be a valid and unique response header name and `JSON-expression` a valid JSON expression without the `$` prefix.
   *
   * @public
   */
  responseParameters?: Record<string, string> | undefined;

  /**
   * Specifies a put integration response's templates.
   *
   * @public
   */
  responseTemplates?: Record<string, string> | undefined;

  /**
   * Specifies how to handle response payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`, with the following behaviors:
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.
   *
   * @public
   */
  contentHandling?: ContentHandlingStrategy | undefined;
}

/**
 * Request to add a method to an existing Resource resource.
 *
 * @public
 */
export interface PutMethodRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The Resource identifier for the new Method resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Specifies the method request's HTTP method type.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * The method's authorization type. Valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, `CUSTOM` for using a custom authorizer, or `COGNITO_USER_POOLS` for using a Cognito user pool.
   *
   * @public
   */
  authorizationType: string | undefined;

  /**
   * Specifies the identifier of an Authorizer to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer.
   *
   * @public
   */
  authorizerId?: string | undefined;

  /**
   * Specifies whether the method required a valid ApiKey.
   *
   * @public
   */
  apiKeyRequired?: boolean | undefined;

  /**
   * A human-friendly operation identifier for the method. For example, you can assign the `operationName` of `ListPets` for the `GET /pets` method in the `PetStore` example.
   *
   * @public
   */
  operationName?: string | undefined;

  /**
   * A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of `method.request.\{location\}.\{name\}`, where `location` is `querystring`, `path`, or `header` and `name` is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (`true`) or optional (`false`). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or body-mapping templates.
   *
   * @public
   */
  requestParameters?: Record<string, boolean> | undefined;

  /**
   * Specifies the Model resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a Model name as the value.
   *
   * @public
   */
  requestModels?: Record<string, string> | undefined;

  /**
   * The identifier of a RequestValidator for validating the method request.
   *
   * @public
   */
  requestValidatorId?: string | undefined;

  /**
   * A list of authorization scopes configured on the method. The scopes are used with a `COGNITO_USER_POOLS` authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
   *
   * @public
   */
  authorizationScopes?: string[] | undefined;
}

/**
 * Request to add a MethodResponse to an existing Method resource.
 *
 * @public
 */
export interface PutMethodResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The Resource identifier for the Method resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The HTTP verb of the Method resource.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * The method response's status code.
   *
   * @public
   */
  statusCode: string | undefined;

  /**
   * A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of `method.response.header.\{name\}`, where `name` is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in `integration.response.header.\{name\}`, a static value enclosed within a pair of single quotes (e.g., `'application/json'`), or a JSON expression from the back-end response payload in the form of `integration.response.body.\{JSON-expression\}`, where `JSON-expression` is a valid JSON expression without the `$` prefix.)
   *
   * @public
   */
  responseParameters?: Record<string, boolean> | undefined;

  /**
   * Specifies the Model resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a Model name as the value.
   *
   * @public
   */
  responseModels?: Record<string, string> | undefined;
}

/**
 * A PUT request to update an existing API, with external API definitions specified as the request body.
 *
 * @public
 */
export interface PutRestApiRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The `mode` query parameter to specify the update mode. Valid values are "merge" and "overwrite". By default, the update mode is "merge".
   *
   * @public
   */
  mode?: PutMode | undefined;

  /**
   * A query parameter to indicate whether to rollback the API update (`true`) or not (`false`) when a warning is encountered. The default value is `false`.
   *
   * @public
   */
  failOnWarnings?: boolean | undefined;

  /**
   * Custom header parameters as part of the request. For example, to exclude DocumentationParts from an imported API, set `ignore=documentation` as a `parameters` value, as in the AWS CLI command of `aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'`.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The PUT request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.
   *
   * @public
   */
  body: Uint8Array | undefined;
}

/**
 * @public
 */
export interface RejectDomainNameAccessAssociationRequest {
  /**
   * The ARN of the domain name access association resource.
   *
   * @public
   */
  domainNameAccessAssociationArn: string | undefined;

  /**
   * The ARN of the domain name.
   *
   * @public
   */
  domainNameArn: string | undefined;
}

/**
 * Adds or updates a tag on a given resource.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of a resource that can be tagged.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:`. The tag value can be up to 256 characters.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * Make a request to simulate the invocation of an Authorizer.
 *
 * @public
 */
export interface TestInvokeAuthorizerRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * Specifies a test invoke authorizer request's Authorizer ID.
   *
   * @public
   */
  authorizerId: string | undefined;

  /**
   * A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified.
   *
   * @public
   */
  headers?: Record<string, string> | undefined;

  /**
   * The headers as a map from string to list of values to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, may be specified.
   *
   * @public
   */
  multiValueHeaders?: Record<string, string[]> | undefined;

  /**
   * The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.
   *
   * @public
   */
  pathWithQueryString?: string | undefined;

  /**
   * The simulated request body of an incoming invocation request.
   *
   * @public
   */
  body?: string | undefined;

  /**
   * A key-value map of stage variables to simulate an invocation on a deployed Stage.
   *
   * @public
   */
  stageVariables?: Record<string, string> | undefined;

  /**
   * A key-value map of additional context variables.
   *
   * @public
   */
  additionalContext?: Record<string, string> | undefined;
}

/**
 * Represents the response of the test invoke request for a custom Authorizer
 *
 * @public
 */
export interface TestInvokeAuthorizerResponse {
  /**
   * The HTTP status code that the client would have received. Value is 0 if the authorizer succeeded.
   *
   * @public
   */
  clientStatus?: number | undefined;

  /**
   * The API Gateway execution log for the test authorizer request.
   *
   * @public
   */
  log?: string | undefined;

  /**
   * The execution latency, in ms, of the test authorizer request.
   *
   * @public
   */
  latency?: number | undefined;

  /**
   * The principal identity returned by the Authorizer
   *
   * @public
   */
  principalId?: string | undefined;

  /**
   * The JSON policy document returned by the Authorizer
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * The authorization response.
   *
   * @public
   */
  authorization?: Record<string, string[]> | undefined;

  /**
   * The open identity claims, with any supported custom attributes, returned from the Cognito Your User Pool configured for the API.
   *
   * @public
   */
  claims?: Record<string, string> | undefined;
}

/**
 * Make a request to simulate the invocation of a Method.
 *
 * @public
 */
export interface TestInvokeMethodRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * Specifies a test invoke method request's resource ID.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Specifies a test invoke method request's HTTP method.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.
   *
   * @public
   */
  pathWithQueryString?: string | undefined;

  /**
   * The simulated request body of an incoming invocation request.
   *
   * @public
   */
  body?: string | undefined;

  /**
   * A key-value map of headers to simulate an incoming invocation request.
   *
   * @public
   */
  headers?: Record<string, string> | undefined;

  /**
   * The headers as a map from string to list of values to simulate an incoming invocation request.
   *
   * @public
   */
  multiValueHeaders?: Record<string, string[]> | undefined;

  /**
   * A ClientCertificate identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint.
   *
   * @public
   */
  clientCertificateId?: string | undefined;

  /**
   * A key-value map of stage variables to simulate an invocation on a deployed Stage.
   *
   * @public
   */
  stageVariables?: Record<string, string> | undefined;
}

/**
 * Represents the response of the test invoke request in the HTTP method.
 *
 * @public
 */
export interface TestInvokeMethodResponse {
  /**
   * The HTTP status code.
   *
   * @public
   */
  status?: number | undefined;

  /**
   * The body of the HTTP response.
   *
   * @public
   */
  body?: string | undefined;

  /**
   * The headers of the HTTP response.
   *
   * @public
   */
  headers?: Record<string, string> | undefined;

  /**
   * The headers of the HTTP response as a map from string to list of values.
   *
   * @public
   */
  multiValueHeaders?: Record<string, string[]> | undefined;

  /**
   * The API Gateway execution log for the test invoke request.
   *
   * @public
   */
  log?: string | undefined;

  /**
   * The execution latency, in ms, of the test invoke request.
   *
   * @public
   */
  latency?: number | undefined;
}

/**
 * Removes a tag from a given resource.
 *
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of a resource that can be tagged.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The Tag keys to delete.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
 *
 * @public
 */
export interface PatchOperation {
  /**
   * An update operation to be performed with this PATCH request. The valid value can be add, remove, replace or copy. Not all valid operations are supported for a given resource. Support of the operations depends on specific operational contexts. Attempts to apply an unsupported operation on a resource will return an error message..
   *
   * @public
   */
  op?: Op | undefined;

  /**
   * The op operation's target, as identified by a JSON Pointer value that references a location within the targeted resource. For example, if the target resource has an updateable property of \{"name":"value"\}, the path for this property is /name. If the name property value is a JSON object (e.g., \{"name": \{"child/name": "child-value"\}\}), the path for the child/name property will be /name/child~1name. Any slash ("/") character appearing in path names must be escaped with "~1", as shown in the example above. Each op operation can have only one path associated with it.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The new target value of the update operation. It is applicable for the add or replace operation. When using AWS CLI to update a property of a JSON value, enclose the JSON object with a pair of single quotes in a Linux shell, e.g., '\{"a": ...\}'.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The copy update operation's source as identified by a JSON-Pointer value referencing the location within the targeted resource to copy the value from. For example, to promote a canary deployment, you copy the canary deployment ID to the affiliated deployment ID by calling a PATCH request on a Stage resource with "op":"copy", "from":"/canarySettings/deploymentId" and "path":"/deploymentId".
   *
   * @public
   */
  from?: string | undefined;
}

/**
 * Requests API Gateway to change information about the current Account resource.
 *
 * @public
 */
export interface UpdateAccountRequest {
  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * A request to change information about an ApiKey resource.
 *
 * @public
 */
export interface UpdateApiKeyRequest {
  /**
   * The identifier of the ApiKey resource to be updated.
   *
   * @public
   */
  apiKey: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Request to update an existing Authorizer resource.
 *
 * @public
 */
export interface UpdateAuthorizerRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of the Authorizer resource.
   *
   * @public
   */
  authorizerId: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * A request to change information about the BasePathMapping resource.
 *
 * @public
 */
export interface UpdateBasePathMappingRequest {
  /**
   * The domain name of the BasePathMapping resource to change.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The identifier for the domain name resource. Supported only for private custom domain names.
   *
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * The base path of the BasePathMapping resource to change.
   *
   * To specify an empty base path, set this parameter to `'(none)'`.
   *
   * @public
   */
  basePath: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * A request to change information about an ClientCertificate resource.
 *
 * @public
 */
export interface UpdateClientCertificateRequest {
  /**
   * The identifier of the ClientCertificate resource to be updated.
   *
   * @public
   */
  clientCertificateId: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Requests API Gateway to change information about a Deployment resource.
 *
 * @public
 */
export interface UpdateDeploymentRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The replacement identifier for the Deployment resource to change information about.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Updates an existing documentation part of a given API.
 *
 * @public
 */
export interface UpdateDocumentationPartRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of the to-be-updated documentation part.
   *
   * @public
   */
  documentationPartId: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Updates an existing documentation version of an API.
 *
 * @public
 */
export interface UpdateDocumentationVersionRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The version identifier of the to-be-updated documentation version.
   *
   * @public
   */
  documentationVersion: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * A request to change information about the DomainName resource.
 *
 * @public
 */
export interface UpdateDomainNameRequest {
  /**
   * The name of the DomainName resource to be changed.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The identifier for the domain name resource. Supported only for private custom domain names.
   *
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Updates a GatewayResponse of a specified response type on the given RestApi.
 *
 * @public
 */
export interface UpdateGatewayResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The response type of the associated GatewayResponse.
   *
   * @public
   */
  responseType: GatewayResponseType | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Represents an update integration request.
 *
 * @public
 */
export interface UpdateIntegrationRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * Represents an update integration request's resource identifier.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Represents an update integration request's HTTP method.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Represents an update integration response request.
 *
 * @public
 */
export interface UpdateIntegrationResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * Specifies an update integration response request's resource identifier.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * Specifies an update integration response request's HTTP method.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * Specifies an update integration response request's status code.
   *
   * @public
   */
  statusCode: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Request to update an existing Method resource.
 *
 * @public
 */
export interface UpdateMethodRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The Resource identifier for the Method resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The HTTP verb of the Method resource.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * A request to update an existing MethodResponse resource.
 *
 * @public
 */
export interface UpdateMethodResponseRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The Resource identifier for the MethodResponse resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The HTTP verb of the Method resource.
   *
   * @public
   */
  httpMethod: string | undefined;

  /**
   * The status code for the MethodResponse resource.
   *
   * @public
   */
  statusCode: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Request to update an existing model in an existing RestApi resource.
 *
 * @public
 */
export interface UpdateModelRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the model to update.
   *
   * @public
   */
  modelName: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Updates a RequestValidator of a given RestApi.
 *
 * @public
 */
export interface UpdateRequestValidatorRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of RequestValidator to be updated.
   *
   * @public
   */
  requestValidatorId: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Request to change information about a Resource resource.
 *
 * @public
 */
export interface UpdateResourceRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The identifier of the Resource resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Request to update an existing RestApi resource in your collection.
 *
 * @public
 */
export interface UpdateRestApiRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Requests API Gateway to change information about a Stage resource.
 *
 * @public
 */
export interface UpdateStageRequest {
  /**
   * The string identifier of the associated RestApi.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The name of the Stage resource to change information about.
   *
   * @public
   */
  stageName: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key.
 *
 * @public
 */
export interface UpdateUsageRequest {
  /**
   * The Id of the usage plan associated with the usage data.
   *
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * The identifier of the API key associated with the usage plan in which a temporary extension is granted to the remaining quota.
   *
   * @public
   */
  keyId: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * The PATCH request to update a usage plan of a given plan Id.
 *
 * @public
 */
export interface UpdateUsagePlanRequest {
  /**
   * The Id of the to-be-updated usage plan.
   *
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * Updates an existing VpcLink of a specified identifier.
 *
 * @public
 */
export interface UpdateVpcLinkRequest {
  /**
   * The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.
   *
   * @public
   */
  vpcLinkId: string | undefined;

  /**
   * For more information about supported patch operations, see [Patch Operations](https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html).
   *
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}
