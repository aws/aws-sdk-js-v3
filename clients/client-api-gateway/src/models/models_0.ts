// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { APIGatewayServiceException as __BaseException } from "./APIGatewayServiceException";

/**
 * @public
 * @enum
 */
export const AccessAssociationSourceType = {
  VPCE: "VPCE",
} as const;

/**
 * @public
 */
export type AccessAssociationSourceType =
  (typeof AccessAssociationSourceType)[keyof typeof AccessAssociationSourceType];

/**
 * <p>Access log settings, including the access log format and access log destination ARN.</p>
 * @public
 */
export interface AccessLogSettings {
  /**
   * <p>A single line format of the access logs of data, as specified by selected $context variables. The format must include at least <code>$context.requestId</code>.</p>
   * @public
   */
  format?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with <code>amazon-apigateway-</code>.</p>
   * @public
   */
  destinationArn?: string | undefined;
}

/**
 * <p> The API request rate limits.</p>
 * @public
 */
export interface ThrottleSettings {
  /**
   * <p>The API target request burst rate limit. This allows more requests through for a period of time than the target rate limit.</p>
   * @public
   */
  burstLimit?: number | undefined;

  /**
   * <p>The API target request rate limit.</p>
   * @public
   */
  rateLimit?: number | undefined;
}

/**
 * <p>Represents an AWS account that is associated with API Gateway.</p>
 * @public
 */
export interface Account {
  /**
   * <p>The ARN of an Amazon CloudWatch role for the current Account. </p>
   * @public
   */
  cloudwatchRoleArn?: string | undefined;

  /**
   * <p>Specifies the API request limits configured for the current Account.</p>
   * @public
   */
  throttleSettings?: ThrottleSettings | undefined;

  /**
   * <p>A list of features supported for the account. When usage plans are enabled, the features list will include an entry of <code>"UsagePlans"</code>.</p>
   * @public
   */
  features?: string[] | undefined;

  /**
   * <p>The version of the API keys used for the account.</p>
   * @public
   */
  apiKeyVersion?: string | undefined;
}

/**
 * <p>A resource that can be distributed to callers for executing Method resources that require an API key. API keys can be mapped to any Stage on any RestApi, which indicates that the callers with the API key can make requests to that stage.</p>
 * @public
 */
export interface ApiKey {
  /**
   * <p>The identifier of the API Key.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The value of the API Key.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The name of the API Key.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>An Amazon Web Services Marketplace customer identifier, when integrating with the Amazon Web Services SaaS Marketplace.</p>
   * @public
   */
  customerId?: string | undefined;

  /**
   * <p>The description of the API Key.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether the API Key can be used by callers.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The timestamp when the API Key was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The timestamp when the API Key was last updated.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>A list of Stage resources that are associated with the ApiKey resource.</p>
   * @public
   */
  stageKeys?: string[] | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The identifier of an ApiKey used in a UsagePlan.</p>
 * @public
 */
export interface ApiKeyIds {
  /**
   * <p>A list of all the ApiKey identifiers.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>A list of warning messages.</p>
   * @public
   */
  warnings?: string[] | undefined;
}

/**
 * <p>Represents a collection of API keys as represented by an ApiKeys resource.</p>
 * @public
 */
export interface ApiKeys {
  /**
   * <p>A list of warning messages logged during the import of API keys when the <code>failOnWarnings</code> option is set to true.</p>
   * @public
   */
  warnings?: string[] | undefined;

  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: ApiKey[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ApiKeysFormat = {
  csv: "csv",
} as const;

/**
 * @public
 */
export type ApiKeysFormat = (typeof ApiKeysFormat)[keyof typeof ApiKeysFormat];

/**
 * @public
 * @enum
 */
export const ApiKeySourceType = {
  AUTHORIZER: "AUTHORIZER",
  HEADER: "HEADER",
} as const;

/**
 * @public
 */
export type ApiKeySourceType = (typeof ApiKeySourceType)[keyof typeof ApiKeySourceType];

/**
 * <p>API stage name of the associated API stage in a usage plan.</p>
 * @public
 */
export interface ApiStage {
  /**
   * <p>API Id of the associated API stage in a usage plan.</p>
   * @public
   */
  apiId?: string | undefined;

  /**
   * <p>API stage name of the associated API stage in a usage plan.</p>
   * @public
   */
  stage?: string | undefined;

  /**
   * <p>Map containing method level throttling information for API stage in a usage plan.</p>
   * @public
   */
  throttle?: Record<string, ThrottleSettings> | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthorizerType = {
  COGNITO_USER_POOLS: "COGNITO_USER_POOLS",
  REQUEST: "REQUEST",
  TOKEN: "TOKEN",
} as const;

/**
 * @public
 */
export type AuthorizerType = (typeof AuthorizerType)[keyof typeof AuthorizerType];

/**
 * <p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p>
 * @public
 */
export interface Authorizer {
  /**
   * <p>The identifier for the authorizer resource.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the authorizer.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.</p>
   * @public
   */
  type?: AuthorizerType | undefined;

  /**
   * <p>A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:\{region\}:\{account_id\}:userpool/\{user_pool_id\}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. </p>
   * @public
   */
  providerARNs?: string[] | undefined;

  /**
   * <p>Optional customer-defined field, used in OpenAPI imports and exports without functional impact.</p>
   * @public
   */
  authType?: string | undefined;

  /**
   * <p>Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:\{account_id\}:function:\{lambda_function_name\}/invocations</code>. In general, the URI has this form  <code>arn:aws:apigateway:\{region\}:lambda:path/\{service_api\}</code>, where <code>\{region\}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.</p>
   * @public
   */
  authorizerUri?: string | undefined;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.</p>
   * @public
   */
  authorizerCredentials?: string | undefined;

  /**
   * <p>The identity source for which authorization is requested. For a <code>TOKEN</code> or
   *         <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request
   *       header mapping expression for the custom header holding the authorization token submitted by
   *       the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is
   *       <code>method.request.header.Auth</code>. For the <code>REQUEST</code> authorizer, this is required when authorization
   *       caching is enabled. The value is a comma-separated string of one or more mapping expressions
   *       of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string
   *       parameter are defined as identity sources, this value is <code>method.request.header.Auth</code>,
   *       <code>method.request.querystring.Name</code>. These parameters will be used to derive the authorization
   *       caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of
   *       the identity-related request parameters are present, not null and non-empty. Only when this is
   *       true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401
   *       Unauthorized response without calling the Lambda function. The valid value is a string of
   *       comma-separated mapping expressions of the specified request parameters. When the
   *       authorization caching is not enabled, this property is optional. </p>
   * @public
   */
  identitySource?: string | undefined;

  /**
   * <p>A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.</p>
   * @public
   */
  identityValidationExpression?: string | undefined;

  /**
   * <p>The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.</p>
   * @public
   */
  authorizerResultTtlInSeconds?: number | undefined;
}

/**
 * <p>Represents a collection of Authorizer resources.</p>
 * @public
 */
export interface Authorizers {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: Authorizer[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
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
 * <p>A reference to a unique stage identified in the format <code>\{restApiId\}/\{stage\}</code>.</p>
 * @public
 */
export interface StageKey {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId?: string | undefined;

  /**
   * <p>The stage name associated with the stage key.</p>
   * @public
   */
  stageName?: string | undefined;
}

/**
 * <p>Request to create an ApiKey resource.</p>
 * @public
 */
export interface CreateApiKeyRequest {
  /**
   * <p>The name of the ApiKey.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the ApiKey.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether the ApiKey can be used by callers.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used.</p>
   * @public
   */
  generateDistinctId?: boolean | undefined;

  /**
   * <p>Specifies a value of the API key.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.</p>
   * @public
   */
  stageKeys?: StageKey[] | undefined;

  /**
   * <p>An Amazon Web Services Marketplace customer identifier, when integrating with the Amazon Web Services SaaS Marketplace.</p>
   * @public
   */
  customerId?: string | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  retryAfterSeconds?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  retryAfterSeconds?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The request is denied because the caller has insufficient permissions.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>Request to add a new Authorizer to an existing RestApi resource.</p>
 * @public
 */
export interface CreateAuthorizerRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the authorizer.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.</p>
   * @public
   */
  type: AuthorizerType | undefined;

  /**
   * <p>A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:\{region\}:\{account_id\}:userpool/\{user_pool_id\}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. </p>
   * @public
   */
  providerARNs?: string[] | undefined;

  /**
   * <p>Optional customer-defined field, used in OpenAPI imports and exports without functional impact.</p>
   * @public
   */
  authType?: string | undefined;

  /**
   * <p>Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:\{account_id\}:function:\{lambda_function_name\}/invocations</code>. In general, the URI has this form  <code>arn:aws:apigateway:\{region\}:lambda:path/\{service_api\}</code>, where <code>\{region\}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.</p>
   * @public
   */
  authorizerUri?: string | undefined;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.</p>
   * @public
   */
  authorizerCredentials?: string | undefined;

  /**
   * <p>The identity source for which authorization is requested. For a <code>TOKEN</code> or
   *         <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request
   *       header mapping expression for the custom header holding the authorization token submitted by
   *       the client. For example, if the token header name is <code>Auth</code>, the header mapping
   *       expression is <code>method.request.header.Auth</code>. For the <code>REQUEST</code>
   *       authorizer, this is required when authorization caching is enabled. The value is a
   *       comma-separated string of one or more mapping expressions of the specified request parameters.
   *       For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are
   *       defined as identity sources, this value is <code>method.request.header.Auth,
   *         method.request.querystring.Name</code>. These parameters will be used to derive the
   *       authorization caching key and to perform runtime validation of the <code>REQUEST</code>
   *       authorizer by verifying all of the identity-related request parameters are present, not null
   *       and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda
   *       function, otherwise, it returns a 401 Unauthorized response without calling the Lambda
   *       function. The valid value is a string of comma-separated mapping expressions of the specified
   *       request parameters. When the authorization caching is not enabled, this property is
   *       optional.</p>
   * @public
   */
  identitySource?: string | undefined;

  /**
   * <p>A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.</p>
   * @public
   */
  identityValidationExpression?: string | undefined;

  /**
   * <p>The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.</p>
   * @public
   */
  authorizerResultTtlInSeconds?: number | undefined;
}

/**
 * <p>Represents the base path that callers of the API must provide as part of the URL after the domain name.</p>
 * @public
 */
export interface BasePathMapping {
  /**
   * <p>The base path name that callers of the API must provide as part of the URL after the domain name.</p>
   * @public
   */
  basePath?: string | undefined;

  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId?: string | undefined;

  /**
   * <p>The name of the associated stage.</p>
   * @public
   */
  stage?: string | undefined;
}

/**
 * <p>Requests API Gateway to create a new BasePathMapping resource.</p>
 * @public
 */
export interface CreateBasePathMappingRequest {
  /**
   * <p>The domain name of the BasePathMapping resource to create.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The identifier for the domain name resource. Required for private custom domain names.</p>
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * <p>The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name.</p>
   * @public
   */
  basePath?: string | undefined;

  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the API's stage that you want to use for this mapping. Specify '(none)' if you want callers to explicitly specify the stage name after any base path name.</p>
   * @public
   */
  stage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CacheClusterSize = {
  SIZE_0_POINT_5_GB: "0.5",
  SIZE_118_GB: "118",
  SIZE_13_POINT_5_GB: "13.5",
  SIZE_1_POINT_6_GB: "1.6",
  SIZE_237_GB: "237",
  SIZE_28_POINT_4_GB: "28.4",
  SIZE_58_POINT_2_GB: "58.2",
  SIZE_6_POINT_1_GB: "6.1",
} as const;

/**
 * @public
 */
export type CacheClusterSize = (typeof CacheClusterSize)[keyof typeof CacheClusterSize];

/**
 * <p>The input configuration for a canary deployment.</p>
 * @public
 */
export interface DeploymentCanarySettings {
  /**
   * <p>The percentage (0.0-100.0) of traffic routed to the canary deployment.</p>
   * @public
   */
  percentTraffic?: number | undefined;

  /**
   * <p>A stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.</p>
   * @public
   */
  stageVariableOverrides?: Record<string, string> | undefined;

  /**
   * <p>A Boolean flag to indicate whether the canary release deployment uses the stage cache or not.</p>
   * @public
   */
  useStageCache?: boolean | undefined;
}

/**
 * <p>Requests API Gateway to create a Deployment resource.</p>
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the Stage resource for the Deployment resource to create.</p>
   * @public
   */
  stageName?: string | undefined;

  /**
   * <p>The description of the Stage resource for the Deployment resource to create.</p>
   * @public
   */
  stageDescription?: string | undefined;

  /**
   * <p>The description for the Deployment resource to create.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Enables a cache cluster for the Stage resource specified in the input.</p>
   * @public
   */
  cacheClusterEnabled?: boolean | undefined;

  /**
   * <p>The stage's cache capacity in GB. For more information about choosing a cache size, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html">Enabling API caching to enhance responsiveness</a>.</p>
   * @public
   */
  cacheClusterSize?: CacheClusterSize | undefined;

  /**
   * <p>A map that defines the stage variables for the Stage resource that is associated
   *           with the new deployment. Variable names can have alphanumeric and underscore characters, and the values
   *           must match <code>[A-Za-z0-9-._~:/?#&=,]+</code>.</p>
   * @public
   */
  variables?: Record<string, string> | undefined;

  /**
   * <p>The input configuration for the canary deployment when the deployment is a canary release deployment. </p>
   * @public
   */
  canarySettings?: DeploymentCanarySettings | undefined;

  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the Stage.</p>
   * @public
   */
  tracingEnabled?: boolean | undefined;
}

/**
 * <p>Represents a summary of a Method resource, given a particular date and time.</p>
 * @public
 */
export interface MethodSnapshot {
  /**
   * <p>The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>
   * @public
   */
  authorizationType?: string | undefined;

  /**
   * <p>Specifies whether the method requires a valid ApiKey.</p>
   * @public
   */
  apiKeyRequired?: boolean | undefined;
}

/**
 * <p>An immutable representation of a RestApi resource that can be called by users using Stages. A deployment must be associated with a Stage for it to be callable over the Internet.</p>
 * @public
 */
export interface Deployment {
  /**
   * <p>The identifier for the deployment resource.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The description for the deployment resource.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time that the deployment resource was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>A summary of the RestApi at the date and time that the deployment resource was created.</p>
   * @public
   */
  apiSummary?: Record<string, Record<string, MethodSnapshot>> | undefined;
}

/**
 * <p>The requested service is not available. For details see the accompanying error message. Retry after the specified time period.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  retryAfterSeconds?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * @enum
 */
export const DocumentationPartType = {
  API: "API",
  AUTHORIZER: "AUTHORIZER",
  METHOD: "METHOD",
  MODEL: "MODEL",
  PATH_PARAMETER: "PATH_PARAMETER",
  QUERY_PARAMETER: "QUERY_PARAMETER",
  REQUEST_BODY: "REQUEST_BODY",
  REQUEST_HEADER: "REQUEST_HEADER",
  RESOURCE: "RESOURCE",
  RESPONSE: "RESPONSE",
  RESPONSE_BODY: "RESPONSE_BODY",
  RESPONSE_HEADER: "RESPONSE_HEADER",
} as const;

/**
 * @public
 */
export type DocumentationPartType = (typeof DocumentationPartType)[keyof typeof DocumentationPartType];

/**
 * <p>Specifies the target API entity to which the documentation applies.</p>
 * @public
 */
export interface DocumentationPartLocation {
  /**
   * <p>The type of API entity to which the documentation content applies. Valid values are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>,  <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Content inheritance does not apply to any entity of the <code>API</code>, <code>AUTHORIZER</code>, <code>METHOD</code>,  <code>MODEL</code>, <code>REQUEST_BODY</code>, or <code>RESOURCE</code> type.</p>
   * @public
   */
  type: DocumentationPartType | undefined;

  /**
   * <p>The URL path of the target. It is a valid field for the API entity types of <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>/</code> for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other <code>location</code> attributes,  the child entity's <code>path</code> attribute must match that of the parent entity as a prefix.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>The HTTP verb of a method. It is a valid field for the API entity types of  <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>,  <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any method.  When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes,  the child entity's <code>method</code> attribute must match that of the parent entity exactly.</p>
   * @public
   */
  method?: string | undefined;

  /**
   * <p>The HTTP status code of a response. It is a valid field for the API entity types of <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any status code. When an applicable child  entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>statusCode</code> attribute must match that of the parent entity exactly.</p>
   * @public
   */
  statusCode?: string | undefined;

  /**
   * <p>The name of the targeted API entity. It is a valid and required field for the API entity types of <code>AUTHORIZER</code>, <code>MODEL</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code> and <code>RESPONSE_HEADER</code>. It is an invalid field for any other entity type.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Creates a new documentation part of a given API.</p>
 * @public
 */
export interface CreateDocumentationPartRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The location of the targeted API entity of the to-be-created documentation part.</p>
   * @public
   */
  location: DocumentationPartLocation | undefined;

  /**
   * <p>The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.</p>
   * @public
   */
  properties: string | undefined;
}

/**
 * <p>A documentation part for a targeted API entity.</p>
 * @public
 */
export interface DocumentationPart {
  /**
   * <p>The DocumentationPart identifier, generated by API Gateway when the <code>DocumentationPart</code> is created.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The location of the API entity to which the documentation applies. Valid fields depend on the targeted API entity type. All the valid location fields are not required. If not explicitly specified, a valid location field is treated as a wildcard and associated documentation content may be inherited by matching entities, unless overridden.</p>
   * @public
   */
  location?: DocumentationPartLocation | undefined;

  /**
   * <p>A content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., <code>"\{ \"description\": \"The API does ...\" \}"</code>.  Only OpenAPI-compliant documentation-related fields from the properties map are exported and, hence, published as part of the API entity definitions, while the original documentation parts are exported in a OpenAPI extension of <code>x-amazon-apigateway-documentation</code>.</p>
   * @public
   */
  properties?: string | undefined;
}

/**
 * <p>Creates a new documentation version of a given API.</p>
 * @public
 */
export interface CreateDocumentationVersionRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The version identifier of the new snapshot.</p>
   * @public
   */
  documentationVersion: string | undefined;

  /**
   * <p>The stage name to be associated with the new documentation snapshot.</p>
   * @public
   */
  stageName?: string | undefined;

  /**
   * <p>A description about the new documentation snapshot.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>A snapshot of the documentation of an API.</p>
 * @public
 */
export interface DocumentationVersion {
  /**
   * <p>The version identifier of the API documentation snapshot.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The date when the API documentation snapshot is created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The description of the API documentation snapshot.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  dualstack: "dualstack",
  ipv4: "ipv4",
} as const;

/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const EndpointType = {
  EDGE: "EDGE",
  PRIVATE: "PRIVATE",
  REGIONAL: "REGIONAL",
} as const;

/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * <p>The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has and the IP address types that can invoke it. </p>
 * @public
 */
export interface EndpointConfiguration {
  /**
   * <p>A list of endpoint types of an API (RestApi) or its custom domain name (DomainName). For an edge-optimized API and its custom domain name, the endpoint type is <code>"EDGE"</code>. For a regional API and its custom domain name, the endpoint type is <code>REGIONAL</code>. For a private API, the endpoint type is <code>PRIVATE</code>.</p>
   * @public
   */
  types?: EndpointType[] | undefined;

  /**
   * <p>The IP address types that can invoke an API (RestApi) or a DomainName. Use <code>ipv4</code> to allow only IPv4 addresses to
   *     invoke an API or DomainName, or use <code>dualstack</code> to allow both IPv4 and IPv6 addresses to invoke an API or a DomainName. For the
   *       <code>PRIVATE</code> endpoint type, only <code>dualstack</code> is supported.</p>
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * <p>A list of VpcEndpointIds of an API (RestApi) against which to create Route53 ALIASes. It is only supported for <code>PRIVATE</code> endpoint type.</p>
   * @public
   */
  vpcEndpointIds?: string[] | undefined;
}

/**
 * <p>The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway
 *       performs two-way authentication between the client and the server. Clients must present a
 *       trusted certificate to access your API.</p>
 * @public
 */
export interface MutualTlsAuthenticationInput {
  /**
   * <p>An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example
   *       <code>s3://bucket-name/key-name</code>. The truststore can contain certificates from public or private
   *       certificate authorities. To update the truststore, upload a new version to S3, and then update
   *       your custom domain name to use the new version. To update the truststore, you must have
   *       permissions to access the S3 object.</p>
   * @public
   */
  truststoreUri?: string | undefined;

  /**
   * <p>The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket</p>
   * @public
   */
  truststoreVersion?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SecurityPolicy = {
  TLS_1_0: "TLS_1_0",
  TLS_1_2: "TLS_1_2",
} as const;

/**
 * @public
 */
export type SecurityPolicy = (typeof SecurityPolicy)[keyof typeof SecurityPolicy];

/**
 * <p>A request to create a new domain name.</p>
 * @public
 */
export interface CreateDomainNameRequest {
  /**
   * <p>The name of the DomainName resource.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The user-friendly name of the certificate that will be used by edge-optimized endpoint or private endpoint for this domain name.</p>
   * @public
   */
  certificateName?: string | undefined;

  /**
   * <p>[Deprecated] The body of the server certificate that will be used by edge-optimized endpoint or private endpoint for this domain name provided by your certificate authority.</p>
   * @public
   */
  certificateBody?: string | undefined;

  /**
   * <p>[Deprecated] Your edge-optimized endpoint's domain name certificate's private key.</p>
   * @public
   */
  certificatePrivateKey?: string | undefined;

  /**
   * <p>[Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path.</p>
   * @public
   */
  certificateChain?: string | undefined;

  /**
   * <p>The reference to an Amazon Web Services-managed certificate that will be used by edge-optimized endpoint or private endpoint for this domain name. Certificate Manager is the only supported source.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The user-friendly name of the certificate that will be used by regional endpoint for this domain name.</p>
   * @public
   */
  regionalCertificateName?: string | undefined;

  /**
   * <p>The reference to an Amazon Web Services-managed certificate that will be used by regional endpoint for this domain name. Certificate Manager is the only supported source.</p>
   * @public
   */
  regionalCertificateArn?: string | undefined;

  /**
   * <p>The endpoint configuration of this DomainName showing the endpoint types and IP address types of the domain name. </p>
   * @public
   */
  endpointConfiguration?: EndpointConfiguration | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Transport Layer Security (TLS) version + cipher suite for this DomainName. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.</p>
   * @public
   */
  securityPolicy?: SecurityPolicy | undefined;

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway
   *       performs two-way authentication between the client and the server. Clients must present a
   *       trusted certificate to access your API.</p>
   * @public
   */
  mutualTlsAuthentication?: MutualTlsAuthenticationInput | undefined;

  /**
   * <p>The ARN of the public certificate issued by ACM to validate ownership of your custom
   *       domain. Only required when configuring mutual TLS and using an ACM imported or private CA
   *       certificate ARN as the regionalCertificateArn.</p>
   * @public
   */
  ownershipVerificationCertificateArn?: string | undefined;

  /**
   * <p>A stringified JSON policy document that applies to the <code>execute-api</code> service for this DomainName regardless of the caller and Method
   *       configuration. Supported only for private custom
   *       domain names.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainNameStatus = {
  AVAILABLE: "AVAILABLE",
  PENDING: "PENDING",
  PENDING_CERTIFICATE_REIMPORT: "PENDING_CERTIFICATE_REIMPORT",
  PENDING_OWNERSHIP_VERIFICATION: "PENDING_OWNERSHIP_VERIFICATION",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DomainNameStatus = (typeof DomainNameStatus)[keyof typeof DomainNameStatus];

/**
 * <p>The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway
 *       performs two-way authentication between the client and the server. Clients must present a
 *       trusted certificate to access your API.</p>
 * @public
 */
export interface MutualTlsAuthentication {
  /**
   * <p>An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example
   *       <code>s3://bucket-name/key-name</code>. The truststore can contain certificates from public or private
   *       certificate authorities. To update the truststore, upload a new version to S3, and then update
   *       your custom domain name to use the new version. To update the truststore, you must have
   *       permissions to access the S3 object.</p>
   * @public
   */
  truststoreUri?: string | undefined;

  /**
   * <p>The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.</p>
   * @public
   */
  truststoreVersion?: string | undefined;

  /**
   * <p>A list of warnings that API Gateway returns while processing your truststore. Invalid
   *       certificates produce warnings. Mutual TLS is still enabled, but some clients might not be able
   *       to access your API. To resolve warnings, upload a new truststore to S3, and then update you
   *       domain name to use the new version.</p>
   * @public
   */
  truststoreWarnings?: string[] | undefined;
}

/**
 * <p>Represents a custom domain name as a user-friendly host name of an API (RestApi).</p>
 * @public
 */
export interface DomainName {
  /**
   * <p>The custom domain name as an API host name, for example, <code>my-api.example.com</code>.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The identifier for the domain name resource. Supported only for private custom domain names.</p>
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * <p>The ARN of the domain name. Supported only for private custom domain names.
   * </p>
   * @public
   */
  domainNameArn?: string | undefined;

  /**
   * <p>The name of the certificate that will be used by edge-optimized endpoint or private endpoint for this domain name.</p>
   * @public
   */
  certificateName?: string | undefined;

  /**
   * <p>The reference to an Amazon Web Services-managed certificate that will be used by edge-optimized endpoint or private endpoint for this domain name. Certificate Manager is the only supported source.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The timestamp when the certificate that was used by edge-optimized endpoint or private endpoint for this domain name was uploaded.</p>
   * @public
   */
  certificateUploadDate?: Date | undefined;

  /**
   * <p>The domain name associated with the regional endpoint for this custom domain name. You set up this association by adding a DNS record that points the custom domain name to this regional domain name. The regional domain name is returned by API Gateway when you create a regional endpoint.</p>
   * @public
   */
  regionalDomainName?: string | undefined;

  /**
   * <p>The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint. For more information, see Set up a Regional Custom Domain Name and AWS Regions and Endpoints for API Gateway. </p>
   * @public
   */
  regionalHostedZoneId?: string | undefined;

  /**
   * <p>The name of the certificate that will be used for validating the regional domain name.</p>
   * @public
   */
  regionalCertificateName?: string | undefined;

  /**
   * <p>The reference to an Amazon Web Services-managed certificate that will be used for validating the regional domain name. Certificate Manager is the only supported source.</p>
   * @public
   */
  regionalCertificateArn?: string | undefined;

  /**
   * <p>The domain name of the Amazon CloudFront distribution associated with this custom domain name for an edge-optimized endpoint. You set up this association when adding a DNS record pointing the custom domain name to this distribution name. For more information about CloudFront distributions, see the Amazon CloudFront documentation.</p>
   * @public
   */
  distributionDomainName?: string | undefined;

  /**
   * <p>The region-agnostic Amazon Route 53 Hosted Zone ID of the edge-optimized endpoint. The valid value is <code>Z2FDTNDATAQYW2</code> for all the regions. For more information, see Set up a Regional Custom Domain Name and AWS Regions and Endpoints for API Gateway. </p>
   * @public
   */
  distributionHostedZoneId?: string | undefined;

  /**
   * <p>The endpoint configuration of this DomainName showing the endpoint types and IP address types of the domain name. </p>
   * @public
   */
  endpointConfiguration?: EndpointConfiguration | undefined;

  /**
   * <p>The status of the DomainName migration. The valid values are <code>AVAILABLE</code> and <code>UPDATING</code>. If the status is <code>UPDATING</code>, the domain cannot be modified further until the existing operation is complete. If it is <code>AVAILABLE</code>, the domain can be updated.</p>
   * @public
   */
  domainNameStatus?: DomainNameStatus | undefined;

  /**
   * <p>An optional text message containing detailed information about status of the DomainName migration.</p>
   * @public
   */
  domainNameStatusMessage?: string | undefined;

  /**
   * <p>The Transport Layer Security (TLS) version + cipher suite for this DomainName. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.</p>
   * @public
   */
  securityPolicy?: SecurityPolicy | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway
   *       performs two-way authentication between the client and the server. Clients must present a
   *       trusted certificate to access your API.</p>
   * @public
   */
  mutualTlsAuthentication?: MutualTlsAuthentication | undefined;

  /**
   * <p>The ARN of the public certificate issued by ACM to validate ownership of your custom
   *       domain. Only required when configuring mutual TLS and using an ACM imported or private CA
   *       certificate ARN as the regionalCertificateArn.</p>
   * @public
   */
  ownershipVerificationCertificateArn?: string | undefined;

  /**
   * <p>A stringified JSON policy document that applies to the API Gateway Management service for this DomainName. This policy document controls access for access association sources to create domain name access associations with this DomainName. Supported only for private custom domain names.</p>
   * @public
   */
  managementPolicy?: string | undefined;

  /**
   * <p>A stringified JSON policy document that applies to the <code>execute-api</code> service for this DomainName regardless of the caller and Method
   *       configuration. Supported only for private custom
   *       domain names.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainNameAccessAssociationRequest {
  /**
   * <p>
   *   The ARN of the domain name.
   * </p>
   * @public
   */
  domainNameArn: string | undefined;

  /**
   * <p>
   * The type of the domain name access association source.
   * </p>
   * @public
   */
  accessAssociationSourceType: AccessAssociationSourceType | undefined;

  /**
   * <p>
   * The identifier of the domain name access association source. For a VPCE, the value is the VPC endpoint ID.
   * </p>
   * @public
   */
  accessAssociationSource: string | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents a domain name access association between an access association source and a private custom domain name. With a domain name access association, an access association source can invoke a private custom domain name while isolated from the public internet.</p>
 * @public
 */
export interface DomainNameAccessAssociation {
  /**
   * <p>The ARN of the domain name access association resource.
   * </p>
   * @public
   */
  domainNameAccessAssociationArn?: string | undefined;

  /**
   * <p>The ARN of the domain name.
   * </p>
   * @public
   */
  domainNameArn?: string | undefined;

  /**
   * <p>
   *   The type of the domain name access association source.
   * </p>
   * @public
   */
  accessAssociationSourceType?: AccessAssociationSourceType | undefined;

  /**
   * <p>
   *   The ARN of the domain name access association source. For a VPCE, the ARN must be a VPC endpoint.
   * </p>
   * @public
   */
  accessAssociationSource?: string | undefined;

  /**
   * <p>
   * The collection of tags. Each tag element is associated with a given resource.
   * </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Request to add a new Model to an existing RestApi resource.</p>
 * @public
 */
export interface CreateModelRequest {
  /**
   * <p>The RestApi identifier under which the Model will be created.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The schema for the model. For <code>application/json</code> models, this should be JSON schema draft 4 model. The maximum size of the model is 400 KB.</p>
   * @public
   */
  schema?: string | undefined;

  /**
   * <p>The content-type for the model.</p>
   * @public
   */
  contentType: string | undefined;
}

/**
 * <p>Represents the data structure of a method's request or response payload.</p>
 * @public
 */
export interface Model {
  /**
   * <p>The identifier for the model resource.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the model. Must be an alphanumeric string.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The schema for the model. For <code>application/json</code> models, this should be JSON schema draft 4 model. Do not include "\*\/" characters in the description of any properties because such "\*\/" characters may be interpreted as the closing marker for comments in some languages, such as Java or JavaScript, causing the installation of your API's SDK generated by API Gateway to fail.</p>
   * @public
   */
  schema?: string | undefined;

  /**
   * <p>The content-type for the model.</p>
   * @public
   */
  contentType?: string | undefined;
}

/**
 * <p>Creates a RequestValidator of a given RestApi.</p>
 * @public
 */
export interface CreateRequestValidatorRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the to-be-created RequestValidator.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (<code>true</code>) or not (<code>false</code>).</p>
   * @public
   */
  validateRequestBody?: boolean | undefined;

  /**
   * <p>A Boolean flag to indicate whether to validate request parameters, <code>true</code>, or not <code>false</code>.</p>
   * @public
   */
  validateRequestParameters?: boolean | undefined;
}

/**
 * <p>A set of validation rules for incoming Method requests.</p>
 * @public
 */
export interface RequestValidator {
  /**
   * <p>The identifier of this RequestValidator.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of this RequestValidator</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A Boolean flag to indicate whether to validate a request body according to the configured Model schema.</p>
   * @public
   */
  validateRequestBody?: boolean | undefined;

  /**
   * <p>A Boolean flag to indicate whether to validate request parameters (<code>true</code>) or not (<code>false</code>).</p>
   * @public
   */
  validateRequestParameters?: boolean | undefined;
}

/**
 * <p>Requests API Gateway to create a Resource resource.</p>
 * @public
 */
export interface CreateResourceRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The parent resource's identifier.</p>
   * @public
   */
  parentId: string | undefined;

  /**
   * <p>The last path segment for this resource.</p>
   * @public
   */
  pathPart: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  INTERNET: "INTERNET",
  VPC_LINK: "VPC_LINK",
} as const;

/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const ContentHandlingStrategy = {
  CONVERT_TO_BINARY: "CONVERT_TO_BINARY",
  CONVERT_TO_TEXT: "CONVERT_TO_TEXT",
} as const;

/**
 * @public
 */
export type ContentHandlingStrategy = (typeof ContentHandlingStrategy)[keyof typeof ContentHandlingStrategy];

/**
 * <p>Represents an integration response. The status code must map to an existing MethodResponse, and parameters and templates can be used to transform the back-end response.</p>
 * @public
 */
export interface IntegrationResponse {
  /**
   * <p>Specifies the status code that is used to map the integration response to an existing MethodResponse.</p>
   * @public
   */
  statusCode?: string | undefined;

  /**
   * <p>Specifies the regular expression (regex) pattern used to choose an integration response based on the response from the back end. For example, if the success response returns nothing and the error response returns some string, you could use the <code>.+</code> regex to match error response. However, make sure that the error response does not contain any newline (<code>\n</code>) character in such cases. If the back end is an Lambda function, the Lambda function error header is matched. For all other HTTP and Amazon Web Services back ends, the HTTP status code is matched.</p>
   * @public
   */
  selectionPattern?: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the back end.
   *             The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.\{name\}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.\{name\}</code> or <code>integration.response.body.\{JSON-expression\}</code>, where <code>name</code> is a valid and unique response header name and <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.</p>
   * @public
   */
  responseParameters?: Record<string, string> | undefined;

  /**
   * <p>Specifies the templates used to transform the integration response body. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   * @public
   */
  responseTemplates?: Record<string, string> | undefined;

  /**
   * <p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p>
   *          <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>
   * @public
   */
  contentHandling?: ContentHandlingStrategy | undefined;
}

/**
 * <p>Specifies the TLS configuration for an integration.</p>
 * @public
 */
export interface TlsConfig {
  /**
   * <p>Specifies whether or not API Gateway skips verification that the certificate for an integration endpoint is
   *             issued by a supported certificate authority. This isn’t recommended, but it enables you to
   *             use certificates that are signed by private certificate authorities, or certificates
   *             that are self-signed. If enabled, API Gateway still performs basic certificate
   *             validation, which includes checking the certificate's expiration date, hostname, and
   *             presence of a root certificate authority. Supported only for <code>HTTP</code> and
   *             <code>HTTP_PROXY</code> integrations.</p>
   *          <important>
   *             <p>Enabling <code>insecureSkipVerification</code> isn't recommended, especially for integrations with public
   *           HTTPS endpoints. If you enable <code>insecureSkipVerification</code>, you increase the risk of man-in-the-middle attacks.</p>
   *          </important>
   * @public
   */
  insecureSkipVerification?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  AWS: "AWS",
  AWS_PROXY: "AWS_PROXY",
  HTTP: "HTTP",
  HTTP_PROXY: "HTTP_PROXY",
  MOCK: "MOCK",
} as const;

/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * <p>Represents an <code>HTTP</code>, <code>HTTP_PROXY</code>, <code>AWS</code>, <code>AWS_PROXY</code>, or Mock integration.</p>
 * @public
 */
export interface Integration {
  /**
   * <p>Specifies an API method integration type. The valid value is one of the following:</p>
   *          <p>For the HTTP and HTTP proxy integrations, each integration can specify a protocol (<code>http/https</code>), port and path. Standard 80 and 443 ports are supported as well as custom ports above 1024. An HTTP or HTTP proxy integration with a <code>connectionType</code> of <code>VPC_LINK</code> is referred to as a private integration and uses a VpcLink to connect API Gateway to a network load balancer of a VPC.</p>
   * @public
   */
  type?: IntegrationType | undefined;

  /**
   * <p>Specifies the integration's HTTP method type. For the Type property, if you specify <code>MOCK</code>, this property is optional. For Lambda integrations, you must set the integration method to <code>POST</code>. For all other types, you must specify this property.</p>
   * @public
   */
  httpMethod?: string | undefined;

  /**
   * <p>Specifies Uniform Resource Identifier (URI) of the integration endpoint.</p>
   *          <p>For <code>HTTP</code> or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL
   * 	    according to the RFC-3986 specification for standard integrations. If <code>connectionType</code> is <code>VPC_LINK</code> specify the Network Load Balancer DNS name.
   *       For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of
   *       the form <code>arn:aws:apigateway:\{region\}:\{subdomain.service|service\}:path|action/\{service_api\}</code>.
   *       Here, \{Region\} is the API Gateway region (e.g., us-east-1); \{service\} is the name of the
   *       integrated Amazon Web Services service (e.g., s3); and \{subdomain\} is a designated subdomain supported by
   *       certain Amazon Web Services  service for fast host-name lookup. action can be used for an Amazon Web Services  service
   *       action-based API, using an Action=\{name\}&\{p1\}=\{v1\}&p2=\{v2\}... query string. The ensuing
   *       \{service_api\} refers to a supported action \{name\} plus any required input parameters.
   *       Alternatively, path can be used for an Amazon Web Services service path-based API. The ensuing service_api
   *       refers to the path to an Amazon Web Services  service resource, including the region of the integrated Amazon Web Services
   *       service, if applicable. For example, for integration with the S3 API of GetObject, the uri can
   *       be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket=\{bucket\}&Key=\{key\}</code> or
   *       <code>arn:aws:apigateway:us-west-2:s3:path/\{bucket\}/\{key\}</code>
   *          </p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.</p>
   * @public
   */
  connectionType?: ConnectionType | undefined;

  /**
   * <p>The ID of the VpcLink used for the integration when <code>connectionType=VPC_LINK</code> and undefined, otherwise.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string <code>arn:aws:iam::\*:user/\*</code>. To use resource-based permissions on supported Amazon Web Services services, specify null.</p>
   * @public
   */
  credentials?: string | undefined;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of  <code>method.request.\{location\}.\{name\}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.</p>
   * @public
   */
  requestParameters?: Record<string, string> | undefined;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.</p>
   * @public
   */
  requestTemplates?: Record<string, string> | undefined;

  /**
   * <p>Specifies how the method request body of an unmapped content type will be passed through
   *       the integration request to the back end without transformation. A content type is unmapped if
   *       no mapping template is defined in the integration or the content type does not match any of
   *       the mapped content types, as specified in <code>requestTemplates</code>. The valid value is one of the
   *       following: <code>WHEN_NO_MATCH</code>: passes the method request body through the integration request to
   *       the back end without transformation when the method request content type does not match any
   *       content type associated with the mapping templates defined in the integration request.
   *       <code>WHEN_NO_TEMPLATES</code>: passes the method request body through the integration request to the back
   *       end without transformation when no mapping template is defined in the integration request. If
   *       a template is defined when this option is selected, the method request of an unmapped
   *       content-type will be rejected with an HTTP 415 Unsupported Media Type response. <code>NEVER</code>: rejects
   *       the method request with an HTTP 415 Unsupported Media Type response when either the method
   *       request content type does not match any content type associated with the mapping templates
   *       defined in the integration request or no mapping template is defined in the integration
   *       request.</p>
   * @public
   */
  passthroughBehavior?: string | undefined;

  /**
   * <p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p>
   *          <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p>
   * @public
   */
  contentHandling?: ContentHandlingStrategy | undefined;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.</p>
   * @public
   */
  timeoutInMillis?: number | undefined;

  /**
   * <p>Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the <code>cacheNamespace</code>. You can specify the same <code>cacheNamespace</code> across resources to return the same cached data for requests to different resources.</p>
   * @public
   */
  cacheNamespace?: string | undefined;

  /**
   * <p>A list of request parameters whose values API Gateway caches. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for Method <code>requestParameters</code>.</p>
   * @public
   */
  cacheKeyParameters?: string[] | undefined;

  /**
   * <p>Specifies the integration's responses.</p>
   * @public
   */
  integrationResponses?: Record<string, IntegrationResponse> | undefined;

  /**
   * <p>Specifies the TLS configuration for an integration.</p>
   * @public
   */
  tlsConfig?: TlsConfig | undefined;
}

/**
 * <p>Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template. </p>
 * @public
 */
export interface MethodResponse {
  /**
   * <p>The method response's status code.</p>
   * @public
   */
  statusCode?: string | undefined;

  /**
   * <p>A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header and the value specifies whether the associated method response header is required or not. The expression of the key must match the pattern <code>method.response.header.\{name\}</code>, where <code>name</code> is a valid and unique header name. API Gateway passes certain integration response data to the method response headers specified here according to the mapping you prescribe in the API's IntegrationResponse. The integration response data that can be mapped include an integration response header expressed in <code>integration.response.header.\{name\}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.\{JSON-expression\}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)</p>
   * @public
   */
  responseParameters?: Record<string, boolean> | undefined;

  /**
   * <p>Specifies the Model resources used for the response's content-type. Response models are represented as a key/value map, with a content-type as the key and a Model name as the value.</p>
   * @public
   */
  responseModels?: Record<string, string> | undefined;
}

/**
 * <p>
 *             Represents a client-facing interface by which the client calls the API to access back-end resources. A Method resource is
 *             integrated with an Integration resource. Both consist of a request and one or more responses. The method request takes
 *             the client input that is passed to the back end through the integration request. A method response returns the output from
 *             the back end to the client through an integration response. A method request is embodied in a Method resource, whereas
 *             an integration request is embodied in an Integration resource.  On the other hand, a method response is represented
 *             by a MethodResponse resource, whereas an integration response is represented by an IntegrationResponse resource.
 *         </p>
 * @public
 */
export interface Method {
  /**
   * <p>The method's HTTP verb.</p>
   * @public
   */
  httpMethod?: string | undefined;

  /**
   * <p>The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>
   * @public
   */
  authorizationType?: string | undefined;

  /**
   * <p>The identifier of an Authorizer to use on this method. The <code>authorizationType</code> must be <code>CUSTOM</code>.</p>
   * @public
   */
  authorizerId?: string | undefined;

  /**
   * <p>A boolean flag specifying whether a valid ApiKey is required to invoke this method.</p>
   * @public
   */
  apiKeyRequired?: boolean | undefined;

  /**
   * <p>The identifier of a RequestValidator for request validation.</p>
   * @public
   */
  requestValidatorId?: string | undefined;

  /**
   * <p>A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example.</p>
   * @public
   */
  operationName?: string | undefined;

  /**
   * <p>A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key is a method request parameter name matching the pattern of  <code>method.request.\{location\}.\{name\}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>).  The method request parameter names defined here are available in Integration to be mapped to integration request parameters or templates.</p>
   * @public
   */
  requestParameters?: Record<string, boolean> | undefined;

  /**
   * <p>A key-value map specifying data schemas, represented by Model resources, (as the mapped value) of the request payloads of given content types (as the mapping key).</p>
   * @public
   */
  requestModels?: Record<string, string> | undefined;

  /**
   * <p>Gets a method response associated with a given HTTP status code. </p>
   * @public
   */
  methodResponses?: Record<string, MethodResponse> | undefined;

  /**
   * <p>Gets the method's integration responsible for passing the client-submitted request to the back end and performing necessary transformations to make the request compliant with the back end.</p>
   * @public
   */
  methodIntegration?: Integration | undefined;

  /**
   * <p>A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   * @public
   */
  authorizationScopes?: string[] | undefined;
}

/**
 * <p>Represents an API resource.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The resource's identifier.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The parent resource's identifier.</p>
   * @public
   */
  parentId?: string | undefined;

  /**
   * <p>The last path segment for this resource.</p>
   * @public
   */
  pathPart?: string | undefined;

  /**
   * <p>The full path for this resource.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>Gets an API resource's method of a given HTTP verb.</p>
   * @public
   */
  resourceMethods?: Record<string, Method> | undefined;
}

/**
 * <p>The POST Request to add a new RestApi resource to your collection.</p>
 * @public
 */
export interface CreateRestApiRequest {
  /**
   * <p>The name of the RestApi.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the RestApi.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A version identifier for the API.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The ID of the RestApi that you want to clone from.</p>
   * @public
   */
  cloneFrom?: string | undefined;

  /**
   * <p>The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.</p>
   * @public
   */
  binaryMediaTypes?: string[] | undefined;

  /**
   * <p>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</p>
   * @public
   */
  minimumCompressionSize?: number | undefined;

  /**
   * <p>The source of the API key for metering requests according to a usage plan. Valid values
   *       are: <code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a
   *       request. <code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code>
   *       from a custom authorizer.</p>
   * @public
   */
  apiKeySource?: ApiKeySourceType | undefined;

  /**
   * <p>The endpoint configuration of this RestApi showing the endpoint types and IP address types of the API. </p>
   * @public
   */
  endpointConfiguration?: EndpointConfiguration | undefined;

  /**
   * <p>A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration.</p>
   * @public
   */
  policy?: string | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint.
   *       By default, clients can invoke your API with the default
   *       <code>https://\{api_id\}.execute-api.\{region\}.amazonaws.com</code> endpoint. To require that clients use a
   *       custom domain name to invoke your API, disable the default endpoint</p>
   * @public
   */
  disableExecuteApiEndpoint?: boolean | undefined;
}

/**
 * <p>Represents a REST API.</p>
 * @public
 */
export interface RestApi {
  /**
   * <p>The API's identifier. This identifier is unique across all of your APIs in API Gateway.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The API's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The API's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the API was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>A version identifier for the API.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The warning messages reported when <code>failonwarnings</code> is turned on during API import.</p>
   * @public
   */
  warnings?: string[] | undefined;

  /**
   * <p>The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.</p>
   * @public
   */
  binaryMediaTypes?: string[] | undefined;

  /**
   * <p>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</p>
   * @public
   */
  minimumCompressionSize?: number | undefined;

  /**
   * <p>The source of the API key for metering requests according to a usage plan. Valid values
   *       are: ><code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a
   *       request. <code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code>
   *       from a custom authorizer.</p>
   * @public
   */
  apiKeySource?: ApiKeySourceType | undefined;

  /**
   * <p>The endpoint configuration of this RestApi showing the endpoint types and IP address types of the API. </p>
   * @public
   */
  endpointConfiguration?: EndpointConfiguration | undefined;

  /**
   * <p>A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration.</p>
   * @public
   */
  policy?: string | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint.
   *       By default, clients can invoke your API with the default
   *       <code>https://\{api_id\}.execute-api.\{region\}.amazonaws.com</code> endpoint. To require that clients use a
   *       custom domain name to invoke your API, disable the default endpoint.</p>
   * @public
   */
  disableExecuteApiEndpoint?: boolean | undefined;

  /**
   * <p>The API's root resource ID.</p>
   * @public
   */
  rootResourceId?: string | undefined;
}

/**
 * <p>Configuration settings of a canary deployment.</p>
 * @public
 */
export interface CanarySettings {
  /**
   * <p>The percent (0-100) of traffic diverted to a canary deployment.</p>
   * @public
   */
  percentTraffic?: number | undefined;

  /**
   * <p>The ID of the canary deployment.</p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p>Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary. These stage variables are represented as a string-to-string map between stage variable names and their values.</p>
   * @public
   */
  stageVariableOverrides?: Record<string, string> | undefined;

  /**
   * <p>A Boolean flag to indicate whether the canary deployment uses the stage cache or not.</p>
   * @public
   */
  useStageCache?: boolean | undefined;
}

/**
 * <p>Requests API Gateway to create a Stage resource.</p>
 * @public
 */
export interface CreateStageRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name for the Stage resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   * @public
   */
  stageName: string | undefined;

  /**
   * <p>The identifier of the Deployment resource for the Stage resource.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>The description of the Stage resource.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether cache clustering is enabled for the stage.</p>
   * @public
   */
  cacheClusterEnabled?: boolean | undefined;

  /**
   * <p>The stage's cache capacity in GB. For more information about choosing a cache size, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html">Enabling API caching to enhance responsiveness</a>.</p>
   * @public
   */
  cacheClusterSize?: CacheClusterSize | undefined;

  /**
   * <p>A map that defines the stage variables for the new Stage resource. Variable names
   *           can have alphanumeric and underscore characters, and the values must match
   *           <code>[A-Za-z0-9-._~:/?#&=,]+</code>.</p>
   * @public
   */
  variables?: Record<string, string> | undefined;

  /**
   * <p>The version of the associated API documentation.</p>
   * @public
   */
  documentationVersion?: string | undefined;

  /**
   * <p>The canary deployment settings of this stage.</p>
   * @public
   */
  canarySettings?: CanarySettings | undefined;

  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the Stage.</p>
   * @public
   */
  tracingEnabled?: boolean | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const CacheClusterStatus = {
  AVAILABLE: "AVAILABLE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FLUSH_IN_PROGRESS: "FLUSH_IN_PROGRESS",
  NOT_AVAILABLE: "NOT_AVAILABLE",
} as const;

/**
 * @public
 */
export type CacheClusterStatus = (typeof CacheClusterStatus)[keyof typeof CacheClusterStatus];

/**
 * @public
 * @enum
 */
export const UnauthorizedCacheControlHeaderStrategy = {
  FAIL_WITH_403: "FAIL_WITH_403",
  SUCCEED_WITHOUT_RESPONSE_HEADER: "SUCCEED_WITHOUT_RESPONSE_HEADER",
  SUCCEED_WITH_RESPONSE_HEADER: "SUCCEED_WITH_RESPONSE_HEADER",
} as const;

/**
 * @public
 */
export type UnauthorizedCacheControlHeaderStrategy =
  (typeof UnauthorizedCacheControlHeaderStrategy)[keyof typeof UnauthorizedCacheControlHeaderStrategy];

/**
 * <p>Specifies the method setting properties.</p>
 * @public
 */
export interface MethodSetting {
  /**
   * <p>Specifies whether Amazon CloudWatch metrics are enabled for this method.</p>
   * @public
   */
  metricsEnabled?: boolean | undefined;

  /**
   * <p>Specifies the logging level for this method, which affects the log entries pushed to Amazon CloudWatch Logs. Valid values are <code>OFF</code>, <code>ERROR</code>, and <code>INFO</code>. Choose <code>ERROR</code> to write only error-level entries to CloudWatch Logs, or choose <code>INFO</code> to include all <code>ERROR</code> events as well as extra informational events.</p>
   * @public
   */
  loggingLevel?: string | undefined;

  /**
   * <p>Specifies whether data trace logging is enabled for this method, which affects the log entries pushed to Amazon CloudWatch Logs. This can be useful to troubleshoot APIs, but can result in logging sensitive data. We recommend that you don't enable this option for production APIs.</p>
   * @public
   */
  dataTraceEnabled?: boolean | undefined;

  /**
   * <p>Specifies the throttling burst limit.</p>
   * @public
   */
  throttlingBurstLimit?: number | undefined;

  /**
   * <p>Specifies the throttling rate limit.</p>
   * @public
   */
  throttlingRateLimit?: number | undefined;

  /**
   * <p>Specifies whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached.</p>
   * @public
   */
  cachingEnabled?: boolean | undefined;

  /**
   * <p>Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached.</p>
   * @public
   */
  cacheTtlInSeconds?: number | undefined;

  /**
   * <p>Specifies whether the cached responses are encrypted.</p>
   * @public
   */
  cacheDataEncrypted?: boolean | undefined;

  /**
   * <p>Specifies whether authorization is required for a cache invalidation request.</p>
   * @public
   */
  requireAuthorizationForCacheControl?: boolean | undefined;

  /**
   * <p>Specifies how to handle unauthorized requests for cache invalidation.</p>
   * @public
   */
  unauthorizedCacheControlHeaderStrategy?: UnauthorizedCacheControlHeaderStrategy | undefined;
}

/**
 * <p>Represents a unique identifier for a version of a deployed RestApi that is callable by users.</p>
 * @public
 */
export interface Stage {
  /**
   * <p>The identifier of the Deployment that the stage points to.</p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p>The identifier of a client certificate for an API stage.</p>
   * @public
   */
  clientCertificateId?: string | undefined;

  /**
   * <p>The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   * @public
   */
  stageName?: string | undefined;

  /**
   * <p>The stage's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether a cache cluster is enabled for the stage. To activate a method-level cache, set <code>CachingEnabled</code> to <code>true</code> for a method. </p>
   * @public
   */
  cacheClusterEnabled?: boolean | undefined;

  /**
   * <p>The stage's cache capacity in GB. For more information about choosing a cache size, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html">Enabling API caching to enhance responsiveness</a>.</p>
   * @public
   */
  cacheClusterSize?: CacheClusterSize | undefined;

  /**
   * <p>The status of the cache cluster for the stage, if enabled.</p>
   * @public
   */
  cacheClusterStatus?: CacheClusterStatus | undefined;

  /**
   * <p>A map that defines the method settings for a Stage resource. Keys (designated as <code>/\{method_setting_key</code> below) are method paths defined as <code>\{resource_path\}/\{http_method\}</code> for an individual method override, or <code>/\*\/\*</code> for overriding all methods in the stage.  </p>
   * @public
   */
  methodSettings?: Record<string, MethodSetting> | undefined;

  /**
   * <p>A map that defines the stage variables for a Stage resource. Variable names can
   *           have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&=,]+</code>.</p>
   * @public
   */
  variables?: Record<string, string> | undefined;

  /**
   * <p>The version of the associated API documentation.</p>
   * @public
   */
  documentationVersion?: string | undefined;

  /**
   * <p>Settings for logging access in this stage.</p>
   * @public
   */
  accessLogSettings?: AccessLogSettings | undefined;

  /**
   * <p>Settings for the canary deployment in this stage.</p>
   * @public
   */
  canarySettings?: CanarySettings | undefined;

  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the Stage.</p>
   * @public
   */
  tracingEnabled?: boolean | undefined;

  /**
   * <p>The ARN of the WebAcl associated with the Stage.</p>
   * @public
   */
  webAclArn?: string | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the stage was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The timestamp when the stage last updated.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const QuotaPeriodType = {
  DAY: "DAY",
  MONTH: "MONTH",
  WEEK: "WEEK",
} as const;

/**
 * @public
 */
export type QuotaPeriodType = (typeof QuotaPeriodType)[keyof typeof QuotaPeriodType];

/**
 * <p>Quotas configured for a usage plan.</p>
 * @public
 */
export interface QuotaSettings {
  /**
   * <p>The target maximum number of requests that can be made in a given time period.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The number of requests subtracted from the given limit in the initial time period.</p>
   * @public
   */
  offset?: number | undefined;

  /**
   * <p>The time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".</p>
   * @public
   */
  period?: QuotaPeriodType | undefined;
}

/**
 * <p>The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload.</p>
 * @public
 */
export interface CreateUsagePlanRequest {
  /**
   * <p>The name of the usage plan.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the usage plan.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The associated API stages of the usage plan.</p>
   * @public
   */
  apiStages?: ApiStage[] | undefined;

  /**
   * <p>The throttling limits of the usage plan.</p>
   * @public
   */
  throttle?: ThrottleSettings | undefined;

  /**
   * <p>The quota of the usage plan.</p>
   * @public
   */
  quota?: QuotaSettings | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents a usage plan used to specify who can assess associated API stages. Optionally, target request rate and quota limits can be set.
 *         In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs.
 *         Consider using <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html">Amazon Web Services Budgets</a> to monitor costs
 *         and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF</a> to manage API requests.</p>
 * @public
 */
export interface UsagePlan {
  /**
   * <p>The identifier of a UsagePlan resource.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of a usage plan.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of a usage plan.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The associated API stages of a usage plan.</p>
   * @public
   */
  apiStages?: ApiStage[] | undefined;

  /**
   * <p>A map containing method level throttling information for API stage in a usage plan.</p>
   * @public
   */
  throttle?: ThrottleSettings | undefined;

  /**
   * <p>The target maximum number of permitted requests per a given unit time interval.</p>
   * @public
   */
  quota?: QuotaSettings | undefined;

  /**
   * <p>The Amazon Web Services Marketplace product identifier to associate with the usage plan as a SaaS product on the Amazon Web Services Marketplace.</p>
   * @public
   */
  productCode?: string | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The POST request to create a usage plan key for adding an existing API key to a usage plan.</p>
 * @public
 */
export interface CreateUsagePlanKeyRequest {
  /**
   * <p>The Id of the UsagePlan resource representing the usage plan containing the to-be-created UsagePlanKey resource representing a plan customer.</p>
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * <p>The identifier of a UsagePlanKey resource for a plan customer.</p>
   * @public
   */
  keyId: string | undefined;

  /**
   * <p>The type of a UsagePlanKey resource for a plan customer.</p>
   * @public
   */
  keyType: string | undefined;
}

/**
 * <p>Represents a usage plan key to identify a plan customer.</p>
 * @public
 */
export interface UsagePlanKey {
  /**
   * <p>The Id of a usage plan key.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The type of a usage plan key. Currently, the valid key type is <code>API_KEY</code>.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The value of a usage plan key.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The name of a usage plan key.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.</p>
 * @public
 */
export interface CreateVpcLinkRequest {
  /**
   * <p>The name used to label and identify the VPC link.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the VPC link.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same Amazon Web Services account of the API owner.</p>
   * @public
   */
  targetArns: string[] | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const VpcLinkStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type VpcLinkStatus = (typeof VpcLinkStatus)[keyof typeof VpcLinkStatus];

/**
 * <p>An API Gateway VPC link for a RestApi to access resources in an Amazon Virtual Private Cloud (VPC).</p>
 * @public
 */
export interface VpcLink {
  /**
   * <p>The identifier of the  VpcLink. It is used in an Integration to reference this VpcLink.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name used to label and identify the VPC link.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the VPC link.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same Amazon Web Services account of the API owner.</p>
   * @public
   */
  targetArns?: string[] | undefined;

  /**
   * <p>The status of the VPC link. The valid values are <code>AVAILABLE</code>, <code>PENDING</code>, <code>DELETING</code>, or <code>FAILED</code>. Deploying an API will wait if the status is <code>PENDING</code> and will fail if the status is <code>DELETING</code>.  </p>
   * @public
   */
  status?: VpcLinkStatus | undefined;

  /**
   * <p>A description about the VPC link status.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>A request to delete the ApiKey resource.</p>
 * @public
 */
export interface DeleteApiKeyRequest {
  /**
   * <p>The identifier of the ApiKey resource to be deleted.</p>
   * @public
   */
  apiKey: string | undefined;
}

/**
 * <p>Request to delete an existing Authorizer resource.</p>
 * @public
 */
export interface DeleteAuthorizerRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of the Authorizer resource.</p>
   * @public
   */
  authorizerId: string | undefined;
}

/**
 * <p>A request to delete the BasePathMapping resource.</p>
 * @public
 */
export interface DeleteBasePathMappingRequest {
  /**
   * <p>The domain name of the BasePathMapping resource to delete.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>
   *   The identifier for the domain name resource. Supported only for private custom domain names.
   * </p>
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * <p>The base path name of the BasePathMapping resource to delete.</p>
   *          <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>
   * @public
   */
  basePath: string | undefined;
}

/**
 * <p>A request to delete the ClientCertificate resource.</p>
 * @public
 */
export interface DeleteClientCertificateRequest {
  /**
   * <p>The identifier of the ClientCertificate resource to be deleted.</p>
   * @public
   */
  clientCertificateId: string | undefined;
}

/**
 * <p>Requests API Gateway to delete a Deployment resource.</p>
 * @public
 */
export interface DeleteDeploymentRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of the Deployment resource to delete.</p>
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * <p>Deletes an existing documentation part of an API.</p>
 * @public
 */
export interface DeleteDocumentationPartRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of the to-be-deleted documentation part.</p>
   * @public
   */
  documentationPartId: string | undefined;
}

/**
 * <p>Deletes an existing documentation version of an API.</p>
 * @public
 */
export interface DeleteDocumentationVersionRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The version identifier of a to-be-deleted documentation snapshot.</p>
   * @public
   */
  documentationVersion: string | undefined;
}

/**
 * <p>A request to delete the DomainName resource.</p>
 * @public
 */
export interface DeleteDomainNameRequest {
  /**
   * <p>The name of the DomainName resource to be deleted.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>
   *   The identifier for the domain name resource. Supported only for private custom domain names.
   * </p>
   * @public
   */
  domainNameId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainNameAccessAssociationRequest {
  /**
   * <p>
   *   The ARN of the domain name access association resource.</p>
   * @public
   */
  domainNameAccessAssociationArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GatewayResponseType = {
  ACCESS_DENIED: "ACCESS_DENIED",
  API_CONFIGURATION_ERROR: "API_CONFIGURATION_ERROR",
  AUTHORIZER_CONFIGURATION_ERROR: "AUTHORIZER_CONFIGURATION_ERROR",
  AUTHORIZER_FAILURE: "AUTHORIZER_FAILURE",
  BAD_REQUEST_BODY: "BAD_REQUEST_BODY",
  BAD_REQUEST_PARAMETERS: "BAD_REQUEST_PARAMETERS",
  DEFAULT_4XX: "DEFAULT_4XX",
  DEFAULT_5XX: "DEFAULT_5XX",
  EXPIRED_TOKEN: "EXPIRED_TOKEN",
  INTEGRATION_FAILURE: "INTEGRATION_FAILURE",
  INTEGRATION_TIMEOUT: "INTEGRATION_TIMEOUT",
  INVALID_API_KEY: "INVALID_API_KEY",
  INVALID_SIGNATURE: "INVALID_SIGNATURE",
  MISSING_AUTHENTICATION_TOKEN: "MISSING_AUTHENTICATION_TOKEN",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
  REQUEST_TOO_LARGE: "REQUEST_TOO_LARGE",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  THROTTLED: "THROTTLED",
  UNAUTHORIZED: "UNAUTHORIZED",
  UNSUPPORTED_MEDIA_TYPE: "UNSUPPORTED_MEDIA_TYPE",
  WAF_FILTERED: "WAF_FILTERED",
} as const;

/**
 * @public
 */
export type GatewayResponseType = (typeof GatewayResponseType)[keyof typeof GatewayResponseType];

/**
 * <p>Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings.</p>
 * @public
 */
export interface DeleteGatewayResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The response type of the associated GatewayResponse.</p>
   * @public
   */
  responseType: GatewayResponseType | undefined;
}

/**
 * <p>Represents a delete integration request.</p>
 * @public
 */
export interface DeleteIntegrationRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>Specifies a delete integration request's resource identifier.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies a delete integration request's HTTP method.</p>
   * @public
   */
  httpMethod: string | undefined;
}

/**
 * <p>Represents a delete integration response request.</p>
 * @public
 */
export interface DeleteIntegrationResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>Specifies a delete integration response request's resource identifier.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies a delete integration response request's HTTP method.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>Specifies a delete integration response request's status code.</p>
   * @public
   */
  statusCode: string | undefined;
}

/**
 * <p>Request to delete an existing Method resource.</p>
 * @public
 */
export interface DeleteMethodRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The Resource identifier for the Method resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The HTTP verb of the Method resource.</p>
   * @public
   */
  httpMethod: string | undefined;
}

/**
 * <p>A request to delete an existing MethodResponse resource.</p>
 * @public
 */
export interface DeleteMethodResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The Resource identifier for the MethodResponse resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The HTTP verb of the Method resource.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>The status code identifier for the MethodResponse resource.</p>
   * @public
   */
  statusCode: string | undefined;
}

/**
 * <p>Request to delete an existing model in an existing RestApi resource.</p>
 * @public
 */
export interface DeleteModelRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the model to delete.</p>
   * @public
   */
  modelName: string | undefined;
}

/**
 * <p>Deletes a specified RequestValidator of a given RestApi.</p>
 * @public
 */
export interface DeleteRequestValidatorRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of the RequestValidator to be deleted.</p>
   * @public
   */
  requestValidatorId: string | undefined;
}

/**
 * <p>Request to delete a Resource.</p>
 * @public
 */
export interface DeleteResourceRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of the Resource resource.</p>
   * @public
   */
  resourceId: string | undefined;
}

/**
 * <p>Request to delete the specified API from your collection.</p>
 * @public
 */
export interface DeleteRestApiRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;
}

/**
 * <p>Requests API Gateway to delete a Stage resource.</p>
 * @public
 */
export interface DeleteStageRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the Stage resource to delete.</p>
   * @public
   */
  stageName: string | undefined;
}

/**
 * <p>The DELETE request to delete a usage plan of a given plan Id.</p>
 * @public
 */
export interface DeleteUsagePlanRequest {
  /**
   * <p>The Id of the to-be-deleted usage plan.</p>
   * @public
   */
  usagePlanId: string | undefined;
}

/**
 * <p>The DELETE request to delete a usage plan key and remove the underlying API key from the associated usage plan.</p>
 * @public
 */
export interface DeleteUsagePlanKeyRequest {
  /**
   * <p>The Id of the UsagePlan resource representing the usage plan containing the to-be-deleted UsagePlanKey resource representing a plan customer.</p>
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * <p>The Id of the UsagePlanKey resource to be deleted.</p>
   * @public
   */
  keyId: string | undefined;
}

/**
 * <p>Deletes an existing VpcLink of a specified identifier.</p>
 * @public
 */
export interface DeleteVpcLinkRequest {
  /**
   * <p>The identifier of the  VpcLink. It is used in an Integration to reference this VpcLink.</p>
   * @public
   */
  vpcLinkId: string | undefined;
}

/**
 * <p>Request to flush authorizer cache entries on a specified stage.</p>
 * @public
 */
export interface FlushStageAuthorizersCacheRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the stage to flush.</p>
   * @public
   */
  stageName: string | undefined;
}

/**
 * <p>Requests API Gateway to flush a stage's cache.</p>
 * @public
 */
export interface FlushStageCacheRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the stage to flush its cache.</p>
   * @public
   */
  stageName: string | undefined;
}

/**
 * <p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p>
 * @public
 */
export interface ClientCertificate {
  /**
   * <p>The identifier of the client certificate.</p>
   * @public
   */
  clientCertificateId?: string | undefined;

  /**
   * <p>The description of the client certificate.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The PEM-encoded public key of the client certificate, which can be used to configure certificate authentication in the integration endpoint .</p>
   * @public
   */
  pemEncodedCertificate?: string | undefined;

  /**
   * <p>The timestamp when the client certificate was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The timestamp when the client certificate will expire.</p>
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>A request to generate a ClientCertificate resource.</p>
 * @public
 */
export interface GenerateClientCertificateRequest {
  /**
   * <p>The description of the ClientCertificate.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Requests API Gateway to get information about the current Account resource.</p>
 * @public
 */
export interface GetAccountRequest {}

/**
 * <p>A request to get information about the current ApiKey resource.</p>
 * @public
 */
export interface GetApiKeyRequest {
  /**
   * <p>The identifier of the ApiKey resource.</p>
   * @public
   */
  apiKey: string | undefined;

  /**
   * <p>A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains the key value.</p>
   * @public
   */
  includeValue?: boolean | undefined;
}

/**
 * <p>A request to get information about the current ApiKeys resource.</p>
 * @public
 */
export interface GetApiKeysRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The name of queried API keys.</p>
   * @public
   */
  nameQuery?: string | undefined;

  /**
   * <p>The identifier of a customer in Amazon Web Services Marketplace or an external system, such as a developer portal.</p>
   * @public
   */
  customerId?: string | undefined;

  /**
   * <p>A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains key values.</p>
   * @public
   */
  includeValues?: boolean | undefined;
}

/**
 * <p>Request to describe an existing Authorizer resource.</p>
 * @public
 */
export interface GetAuthorizerRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of the Authorizer resource.</p>
   * @public
   */
  authorizerId: string | undefined;
}

/**
 * <p>Request to describe an existing Authorizers resource.</p>
 * @public
 */
export interface GetAuthorizersRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Request to describe a BasePathMapping resource.</p>
 * @public
 */
export interface GetBasePathMappingRequest {
  /**
   * <p>The domain name of the BasePathMapping resource to be described.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The identifier for the domain name resource. Supported only for private custom domain names.
   * </p>
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * <p>The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify any base path name after the domain name.</p>
   * @public
   */
  basePath: string | undefined;
}

/**
 * <p>Represents a collection of BasePathMapping resources.</p>
 * @public
 */
export interface BasePathMappings {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: BasePathMapping[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>A request to get information about a collection of BasePathMapping resources.</p>
 * @public
 */
export interface GetBasePathMappingsRequest {
  /**
   * <p>The domain name of a BasePathMapping resource.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>
   *   The identifier for the domain name resource. Supported only for private custom domain names.
   * </p>
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>A request to get information about the current ClientCertificate resource.</p>
 * @public
 */
export interface GetClientCertificateRequest {
  /**
   * <p>The identifier of the ClientCertificate resource to be described.</p>
   * @public
   */
  clientCertificateId: string | undefined;
}

/**
 * <p>Represents a collection of ClientCertificate resources.</p>
 * @public
 */
export interface ClientCertificates {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: ClientCertificate[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>A request to get information about a collection of ClientCertificate resources.</p>
 * @public
 */
export interface GetClientCertificatesRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Requests API Gateway to get information about a Deployment resource.</p>
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of the Deployment resource to get information about.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>A query parameter to retrieve the specified embedded resources of the returned Deployment resource in the response. In a REST API call, this <code>embed</code> parameter value is a list of comma-separated strings, as in  <code>GET /restapis/\{restapi_id\}/deployments/\{deployment_id\}?embed=var1,var2</code>. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the <code>"apisummary"</code> string.  For example, <code>GET /restapis/\{restapi_id\}/deployments/\{deployment_id\}?embed=apisummary</code>.</p>
   * @public
   */
  embed?: string[] | undefined;
}

/**
 * <p>Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments.</p>
 * @public
 */
export interface Deployments {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: Deployment[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>Requests API Gateway to get information about a Deployments collection.</p>
 * @public
 */
export interface GetDeploymentsRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Gets a specified documentation part of a given API.</p>
 * @public
 */
export interface GetDocumentationPartRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  documentationPartId: string | undefined;
}

/**
 * <p>The collection of documentation parts of an API.</p>
 * @public
 */
export interface DocumentationParts {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: DocumentationPart[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LocationStatusType = {
  DOCUMENTED: "DOCUMENTED",
  UNDOCUMENTED: "UNDOCUMENTED",
} as const;

/**
 * @public
 */
export type LocationStatusType = (typeof LocationStatusType)[keyof typeof LocationStatusType];

/**
 * <p>Gets the documentation parts of an API. The result may be filtered by the type, name, or path of API entities (targets).</p>
 * @public
 */
export interface GetDocumentationPartsRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The type of API entities of the to-be-retrieved documentation parts. </p>
   * @public
   */
  type?: DocumentationPartType | undefined;

  /**
   * <p>The name of API entities of the to-be-retrieved documentation parts.</p>
   * @public
   */
  nameQuery?: string | undefined;

  /**
   * <p>The path of API entities of the to-be-retrieved documentation parts.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The status of the API documentation parts to retrieve. Valid values are <code>DOCUMENTED</code> for retrieving DocumentationPart resources with content and <code>UNDOCUMENTED</code> for DocumentationPart resources without content.</p>
   * @public
   */
  locationStatus?: LocationStatusType | undefined;
}

/**
 * <p>Gets a documentation snapshot of an API.</p>
 * @public
 */
export interface GetDocumentationVersionRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The version identifier of the to-be-retrieved documentation snapshot.</p>
   * @public
   */
  documentationVersion: string | undefined;
}

/**
 * <p>The collection of documentation snapshots of an API. </p>
 * @public
 */
export interface DocumentationVersions {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: DocumentationVersion[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>Gets the documentation versions of an API.</p>
 * @public
 */
export interface GetDocumentationVersionsRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Request to get the name of a DomainName resource.</p>
 * @public
 */
export interface GetDomainNameRequest {
  /**
   * <p>The name of the DomainName resource.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>
   *   The identifier for the domain name resource. Required for private custom domain names.
   * </p>
   * @public
   */
  domainNameId?: string | undefined;
}

/**
 * @public
 */
export interface DomainNameAccessAssociations {
  /**
   * <p>
   * The current page of elements from this collection.
   * </p>
   * @public
   */
  items?: DomainNameAccessAssociation[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.
   * </p>
   * @public
   */
  position?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceOwner = {
  OTHER_ACCOUNTS: "OTHER_ACCOUNTS",
  SELF: "SELF",
} as const;

/**
 * @public
 */
export type ResourceOwner = (typeof ResourceOwner)[keyof typeof ResourceOwner];

/**
 * @public
 */
export interface GetDomainNameAccessAssociationsRequest {
  /**
   * <p>The current pagination position in the paged result set.
   * </p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
   * </p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p> The owner of the domain name access association. Use <code>SELF</code> to only list the domain name access associations owned by your own account.
   *       Use <code>OTHER_ACCOUNTS</code> to list the domain name access associations with your private custom domain names that are owned by other AWS
   *       accounts.</p>
   * @public
   */
  resourceOwner?: ResourceOwner | undefined;
}

/**
 * <p>Represents a collection of DomainName resources.</p>
 * @public
 */
export interface DomainNames {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: DomainName[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>Request to describe a collection of DomainName resources.</p>
 * @public
 */
export interface GetDomainNamesRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The owner of the domain name access association.
   * </p>
   * @public
   */
  resourceOwner?: ResourceOwner | undefined;
}

/**
 * <p>The binary blob response to GetExport, which contains the generated SDK.</p>
 * @public
 */
export interface ExportResponse {
  /**
   * <p>The content-type header value in the HTTP response. This will correspond to a valid 'accept' type in the request.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The content-disposition header value in the HTTP response.</p>
   * @public
   */
  contentDisposition?: string | undefined;

  /**
   * <p>The binary blob response to GetExport, which contains the export.</p>
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * <p>Request a new export of a RestApi for a particular Stage.</p>
 * @public
 */
export interface GetExportRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the Stage that will be exported.</p>
   * @public
   */
  stageName: string | undefined;

  /**
   * <p>The type of export. Acceptable values are 'oas30' for OpenAPI 3.0.x and 'swagger' for Swagger/OpenAPI 2.0.</p>
   * @public
   */
  exportType: string | undefined;

  /**
   * <p>A key-value map of query string parameters that specify properties of the export, depending on the requested <code>exportType</code>. For <code>exportType</code>
   *             <code>oas30</code> and <code>swagger</code>, any combination of the following parameters are supported: <code>extensions='integrations'</code> or <code>extensions='apigateway'</code> will export the API with x-amazon-apigateway-integration extensions. <code>extensions='authorizers'</code> will export the API with  x-amazon-apigateway-authorizer extensions. <code>postman</code> will export the API with Postman extensions, allowing for import to the Postman tool</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>The content-type of the export, for example <code>application/json</code>. Currently <code>application/json</code> and <code>application/yaml</code> are supported for <code>exportType</code> of<code>oas30</code> and <code>swagger</code>. This should be specified in the <code>Accept</code> header for direct API requests.</p>
   * @public
   */
  accepts?: string | undefined;
}

/**
 * <p>A gateway response of a given response type and status code, with optional response parameters and mapping templates.</p>
 * @public
 */
export interface GatewayResponse {
  /**
   * <p>The response type of the associated GatewayResponse.</p>
   * @public
   */
  responseType?: GatewayResponseType | undefined;

  /**
   * <p>The HTTP status code for this GatewayResponse.</p>
   * @public
   */
  statusCode?: string | undefined;

  /**
   * <p>Response parameters (paths, query strings and headers) of the GatewayResponse as a
   *       string-to-string map of key-value pairs.</p>
   * @public
   */
  responseParameters?: Record<string, string> | undefined;

  /**
   * <p>Response templates of the GatewayResponse as a string-to-string map of key-value pairs.</p>
   * @public
   */
  responseTemplates?: Record<string, string> | undefined;

  /**
   * <p>A Boolean flag to indicate whether this GatewayResponse is the default gateway response (<code>true</code>) or not (<code>false</code>). A default gateway response is one generated by API Gateway without any customization by an API developer. </p>
   * @public
   */
  defaultResponse?: boolean | undefined;
}

/**
 * <p>Gets a GatewayResponse of a specified response type on the given RestApi.</p>
 * @public
 */
export interface GetGatewayResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The response type of the associated GatewayResponse.</p>
   * @public
   */
  responseType: GatewayResponseType | undefined;
}

/**
 * <p>The collection of the GatewayResponse instances of a RestApi as a <code>responseType</code>-to-GatewayResponse object map of key-value pairs. As such, pagination is not supported for querying this collection.</p>
 * @public
 */
export interface GatewayResponses {
  /**
   * <p>Returns the entire collection, because of no pagination support.</p>
   * @public
   */
  items?: GatewayResponse[] | undefined;

  /**
   * <p>The current pagination position in the paged result set. The GatewayResponse collection does not support pagination and the position does not apply here.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.</p>
 * @public
 */
export interface GetGatewayResponsesRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set. The GatewayResponse collection does not support pagination and the position does not apply here.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500. The GatewayResponses collection does not support pagination and the limit does not apply here.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Represents a request to get the integration configuration.</p>
 * @public
 */
export interface GetIntegrationRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>Specifies a get integration request's resource identifier</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies a get integration request's HTTP method.</p>
   * @public
   */
  httpMethod: string | undefined;
}

/**
 * <p>Represents a get integration response request.</p>
 * @public
 */
export interface GetIntegrationResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>Specifies a get integration response request's resource identifier.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies a get integration response request's HTTP method.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>Specifies a get integration response request's status code.</p>
   * @public
   */
  statusCode: string | undefined;
}

/**
 * <p>Request to describe an existing Method resource.</p>
 * @public
 */
export interface GetMethodRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The Resource identifier for the Method resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies the method request's HTTP method type.</p>
   * @public
   */
  httpMethod: string | undefined;
}

/**
 * <p>Request to describe a MethodResponse resource.</p>
 * @public
 */
export interface GetMethodResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The Resource identifier for the MethodResponse resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The HTTP verb of the Method resource.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>The status code for the MethodResponse resource.</p>
   * @public
   */
  statusCode: string | undefined;
}

/**
 * <p>Request to list information about a model in an existing RestApi resource.</p>
 * @public
 */
export interface GetModelRequest {
  /**
   * <p>The RestApi identifier under which the Model exists.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the model as an identifier.</p>
   * @public
   */
  modelName: string | undefined;

  /**
   * <p>A query parameter of a Boolean value to resolve (<code>true</code>) all external model references and returns a flattened model schema or not (<code>false</code>) The default is <code>false</code>.</p>
   * @public
   */
  flatten?: boolean | undefined;
}

/**
 * <p>Request to list existing Models defined for a RestApi resource.</p>
 * @public
 */
export interface GetModelsRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Represents a collection of Model resources.</p>
 * @public
 */
export interface Models {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: Model[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>Request to generate a sample mapping template used to transform the payload.</p>
 * @public
 */
export interface GetModelTemplateRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the model for which to generate a template.</p>
   * @public
   */
  modelName: string | undefined;
}

/**
 * <p>Represents a mapping template used to transform a payload.</p>
 * @public
 */
export interface Template {
  /**
   * <p>The Apache Velocity Template Language (VTL) template content used for the template resource.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Gets a RequestValidator of a given RestApi.</p>
 * @public
 */
export interface GetRequestValidatorRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of the RequestValidator to be retrieved.</p>
   * @public
   */
  requestValidatorId: string | undefined;
}

/**
 * <p>Gets the RequestValidators collection of a given RestApi.</p>
 * @public
 */
export interface GetRequestValidatorsRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>A collection of RequestValidator resources of a given RestApi.</p>
 * @public
 */
export interface RequestValidators {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: RequestValidator[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>Request to list information about a resource.</p>
 * @public
 */
export interface GetResourceRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier for the Resource resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>A query parameter to retrieve the specified resources embedded in the returned Resource representation in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/\{restapi_id\}/resources/\{resource_id\}?embed=methods</code>.</p>
   * @public
   */
  embed?: string[] | undefined;
}

/**
 * <p>Request to list information about a collection of resources.</p>
 * @public
 */
export interface GetResourcesRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>A query parameter used to retrieve the specified resources embedded in the returned Resources resource in the response.  This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/\{restapi_id\}/resources?embed=methods</code>.</p>
   * @public
   */
  embed?: string[] | undefined;
}

/**
 * <p>Represents a collection of Resource resources.</p>
 * @public
 */
export interface Resources {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: Resource[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>The GET request to list an existing RestApi defined for your collection. </p>
 * @public
 */
export interface GetRestApiRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;
}

/**
 * <p>The GET request to list existing RestApis defined for your collection.</p>
 * @public
 */
export interface GetRestApisRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.</p>
 * @public
 */
export interface RestApis {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: RestApi[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>Request a new generated client SDK for a RestApi and Stage.</p>
 * @public
 */
export interface GetSdkRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the Stage that the SDK will use.</p>
   * @public
   */
  stageName: string | undefined;

  /**
   * <p>The language for the generated SDK. Currently <code>java</code>, <code>javascript</code>, <code>android</code>, <code>objectivec</code> (for iOS), <code>swift</code> (for iOS), and <code>ruby</code>  are supported.</p>
   * @public
   */
  sdkType: string | undefined;

  /**
   * <p>A string-to-string key-value map of query parameters <code>sdkType</code>-dependent properties of the SDK. For <code>sdkType</code> of <code>objectivec</code> or <code>swift</code>,  a parameter named <code>classPrefix</code> is required. For <code>sdkType</code> of <code>android</code>, parameters named <code>groupId</code>, <code>artifactId</code>, <code>artifactVersion</code>, and <code>invokerPackage</code> are required. For <code>sdkType</code> of <code>java</code>, parameters named <code>serviceName</code> and <code>javaPackageName</code> are required. </p>
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * <p>The binary blob response to GetSdk, which contains the generated SDK.</p>
 * @public
 */
export interface SdkResponse {
  /**
   * <p>The content-type header value in the HTTP response.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The content-disposition header value in the HTTP response.</p>
   * @public
   */
  contentDisposition?: string | undefined;

  /**
   * <p>The binary blob response to GetSdk, which contains the generated SDK.</p>
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * <p>Get an SdkType instance.</p>
 * @public
 */
export interface GetSdkTypeRequest {
  /**
   * <p>The identifier of the queried SdkType instance.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>A configuration property of an SDK type.</p>
 * @public
 */
export interface SdkConfigurationProperty {
  /**
   * <p>The name of a an SdkType configuration property.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The user-friendly name of an SdkType configuration property.</p>
   * @public
   */
  friendlyName?: string | undefined;

  /**
   * <p>The description of an SdkType configuration property.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A boolean flag of an SdkType configuration property to indicate if the associated SDK configuration property is required (<code>true</code>) or not (<code>false</code>).</p>
   * @public
   */
  required?: boolean | undefined;

  /**
   * <p>The default value of an SdkType configuration property.</p>
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * <p>A type of SDK that API Gateway can generate.</p>
 * @public
 */
export interface SdkType {
  /**
   * <p>The identifier of an SdkType instance.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The user-friendly name of an SdkType instance.</p>
   * @public
   */
  friendlyName?: string | undefined;

  /**
   * <p>The description of an SdkType.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of configuration properties of an SdkType.</p>
   * @public
   */
  configurationProperties?: SdkConfigurationProperty[] | undefined;
}

/**
 * <p>Get the SdkTypes collection.</p>
 * @public
 */
export interface GetSdkTypesRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>The collection of SdkType instances.</p>
 * @public
 */
export interface SdkTypes {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: SdkType[] | undefined;
}

/**
 * <p>Requests API Gateway to get information about a Stage resource.</p>
 * @public
 */
export interface GetStageRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the Stage resource to get information about.</p>
   * @public
   */
  stageName: string | undefined;
}

/**
 * <p>Requests API Gateway to get information about one or more Stage resources.</p>
 * @public
 */
export interface GetStagesRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The stages' deployment identifiers.</p>
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * <p>A list of Stage resources that are associated with the ApiKey resource.</p>
 * @public
 */
export interface Stages {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  item?: Stage[] | undefined;
}

/**
 * <p>Gets the Tags collection for a given resource.</p>
 * @public
 */
export interface GetTagsRequest {
  /**
   * <p>The ARN of a resource that can be tagged.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>(Not currently supported) The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>(Not currently supported) The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>The collection of tags. Each tag element is associated with a given resource.</p>
 * @public
 */
export interface Tags {
  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The GET request to get the usage data of a usage plan in a specified time interval.</p>
 * @public
 */
export interface GetUsageRequest {
  /**
   * <p>The Id of the usage plan associated with the usage data.</p>
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * <p>The Id of the API key associated with the resultant usage data.</p>
   * @public
   */
  keyId?: string | undefined;

  /**
   * <p>The starting date (e.g., 2016-01-01) of the usage data.</p>
   * @public
   */
  startDate: string | undefined;

  /**
   * <p>The ending date (e.g., 2016-12-31) of the usage data.</p>
   * @public
   */
  endDate: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Represents the usage data of a usage plan.</p>
 * @public
 */
export interface Usage {
  /**
   * <p>The plan Id associated with this usage data.</p>
   * @public
   */
  usagePlanId?: string | undefined;

  /**
   * <p>The starting date of the usage data.</p>
   * @public
   */
  startDate?: string | undefined;

  /**
   * <p>The ending date of the usage data.</p>
   * @public
   */
  endDate?: string | undefined;

  /**
   * <p>The usage data, as daily logs of used and remaining quotas, over the specified time interval indexed over the API keys in a usage plan. For example, <code>\{..., "values" : \{ "\{api_key\}" : [ [0, 100], [10, 90], [100, 10]]\}</code>, where <code>\{api_key\}</code> stands for an API key value and the daily log entry is of the format <code>[used quota, remaining quota]</code>.</p>
   * @public
   */
  items?: Record<string, number[][]> | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>The GET request to get a usage plan of a given plan identifier.</p>
 * @public
 */
export interface GetUsagePlanRequest {
  /**
   * <p>The identifier of the UsagePlan resource to be retrieved.</p>
   * @public
   */
  usagePlanId: string | undefined;
}

/**
 * <p>The GET request to get a usage plan key of a given key identifier.</p>
 * @public
 */
export interface GetUsagePlanKeyRequest {
  /**
   * <p>The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.</p>
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * <p>The key Id of the to-be-retrieved UsagePlanKey resource representing a plan customer.</p>
   * @public
   */
  keyId: string | undefined;
}

/**
 * <p>The GET request to get all the usage plan keys representing the API keys added to a specified usage plan.</p>
 * @public
 */
export interface GetUsagePlanKeysRequest {
  /**
   * <p>The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.</p>
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>A query parameter specifying the name of the to-be-returned usage plan keys.</p>
   * @public
   */
  nameQuery?: string | undefined;
}

/**
 * <p>Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.</p>
 * @public
 */
export interface UsagePlanKeys {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: UsagePlanKey[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>The GET request to get all the usage plans of the caller's account.</p>
 * @public
 */
export interface GetUsagePlansRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The identifier of the API key associated with the usage plans.</p>
   * @public
   */
  keyId?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Represents a collection of usage plans for an AWS account.</p>
 * @public
 */
export interface UsagePlans {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: UsagePlan[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>Gets a specified VPC link under the caller's account in a region.</p>
 * @public
 */
export interface GetVpcLinkRequest {
  /**
   * <p>The identifier of the  VpcLink. It is used in an Integration to reference this VpcLink.</p>
   * @public
   */
  vpcLinkId: string | undefined;
}

/**
 * <p>Gets the VpcLinks collection under the caller's account in a selected region.</p>
 * @public
 */
export interface GetVpcLinksRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>The collection of VPC links under the caller's account in a region.</p>
 * @public
 */
export interface VpcLinks {
  /**
   * <p>The current page of elements from this collection.</p>
   * @public
   */
  items?: VpcLink[] | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   * @public
   */
  position?: string | undefined;
}

/**
 * <p>The POST request to import API keys from an external source, such as a CSV-formatted file.</p>
 * @public
 */
export interface ImportApiKeysRequest {
  /**
   * <p>The payload of the POST request to import API keys. For the payload format, see API Key File Format.</p>
   * @public
   */
  body: Uint8Array | undefined;

  /**
   * <p>A query parameter to specify the input format to imported API keys. Currently, only the <code>csv</code> format is supported.</p>
   * @public
   */
  format: ApiKeysFormat | undefined;

  /**
   * <p>A query parameter to indicate whether to rollback ApiKey importation (<code>true</code>) or not (<code>false</code>) when error is encountered.</p>
   * @public
   */
  failOnWarnings?: boolean | undefined;
}

/**
 * <p>A collection of the imported  DocumentationPart identifiers.</p>
 * @public
 */
export interface DocumentationPartIds {
  /**
   * <p>A list of the returned documentation part identifiers.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>A list of warning messages reported during import of documentation parts.</p>
   * @public
   */
  warnings?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PutMode = {
  Merge: "merge",
  Overwrite: "overwrite",
} as const;

/**
 * @public
 */
export type PutMode = (typeof PutMode)[keyof typeof PutMode];

/**
 * <p>Import documentation parts from an external (e.g., OpenAPI) definition file. </p>
 * @public
 */
export interface ImportDocumentationPartsRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>A query parameter to indicate whether to overwrite (<code>overwrite</code>) any existing DocumentationParts definition or to merge (<code>merge</code>) the new definition into the existing one. The default value is <code>merge</code>.</p>
   * @public
   */
  mode?: PutMode | undefined;

  /**
   * <p>A query parameter to specify whether to rollback the documentation importation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.</p>
   * @public
   */
  failOnWarnings?: boolean | undefined;

  /**
   * <p>Raw byte array representing the to-be-imported documentation parts. To import from an OpenAPI file, this is a JSON object.</p>
   * @public
   */
  body: Uint8Array | undefined;
}

/**
 * <p>A POST request to import an API to API Gateway using an input of an API definition file.</p>
 * @public
 */
export interface ImportRestApiRequest {
  /**
   * <p>A query parameter to indicate whether to rollback the API creation (<code>true</code>) or not (<code>false</code>)
   *             when a warning is encountered. The default value is <code>false</code>.</p>
   * @public
   */
  failOnWarnings?: boolean | undefined;

  /**
   * <p>A key-value map of context-specific query string parameters specifying the behavior of different API importing operations. The following shows operation-specific parameters and their supported values.</p>
   *          <p> To exclude DocumentationParts from the import, set <code>parameters</code> as <code>ignore=documentation</code>.</p>
   *          <p> To configure the endpoint type, set <code>parameters</code> as <code>endpointConfigurationTypes=EDGE</code>, <code>endpointConfigurationTypes=REGIONAL</code>, or <code>endpointConfigurationTypes=PRIVATE</code>. The default endpoint type is <code>EDGE</code>.</p>
   *          <p> To handle imported <code>basepath</code>, set <code>parameters</code> as <code>basepath=ignore</code>, <code>basepath=prepend</code> or <code>basepath=split</code>.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.</p>
   * @public
   */
  body: Uint8Array | undefined;
}

/**
 * <p>Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.</p>
 * @public
 */
export interface PutGatewayResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The response type of the associated GatewayResponse</p>
   * @public
   */
  responseType: GatewayResponseType | undefined;

  /**
   * <p>The HTTP status code of the GatewayResponse.</p>
   * @public
   */
  statusCode?: string | undefined;

  /**
   * <p>Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value  pairs.</p>
   * @public
   */
  responseParameters?: Record<string, string> | undefined;

  /**
   * <p>Response templates of the GatewayResponse as a string-to-string map of key-value pairs.</p>
   * @public
   */
  responseTemplates?: Record<string, string> | undefined;
}

/**
 * <p>Sets up a method's integration.</p>
 * @public
 */
export interface PutIntegrationRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>Specifies a put integration request's resource ID.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies the HTTP method for the integration.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>Specifies a put integration input's type.</p>
   * @public
   */
  type: IntegrationType | undefined;

  /**
   * <p>The HTTP method for the integration.</p>
   * @public
   */
  integrationHttpMethod?: string | undefined;

  /**
   * <p>Specifies Uniform Resource Identifier (URI) of the integration endpoint. For HTTP or
   *       <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the
   *       RFC-3986 specification, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>,
   *       or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the
   *       URI is not used for routing. For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form
   *       <code>arn:aws:apigateway:\{region\}:\{subdomain.service|service\}:path|action/\{service_api</code>\}. Here,
   *       \{Region\} is the API Gateway region (e.g., us-east-1); \{service\} is the name of the integrated
   *       Amazon Web Services service (e.g., s3); and \{subdomain\} is a designated subdomain supported by certain Amazon Web Services
   *       service for fast host-name lookup. action can be used for an Amazon Web Services service action-based API,
   *       using an Action=\{name\}&\{p1\}=\{v1\}&p2=\{v2\}... query string. The ensuing \{service_api\} refers to
   *       a supported action \{name\} plus any required input parameters. Alternatively, path can be used
   *       for an Amazon Web Services service path-based API. The ensuing service_api refers to the path to an Amazon Web Services
   *       service resource, including the region of the integrated Amazon Web Services service, if applicable. For
   *       example, for integration with the S3 API of <code>GetObject</code>, the <code>uri</code> can be either
   *       <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket=\{bucket\}&Key=\{key\}</code> or
   *       <code>arn:aws:apigateway:us-west-2:s3:path/\{bucket\}/\{key\}</code>.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.</p>
   * @public
   */
  connectionType?: ConnectionType | undefined;

  /**
   * <p>The ID of the VpcLink used for the integration. Specify this value only if you specify <code>VPC_LINK</code> as the connection type.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>Specifies whether credentials are required for a put integration.</p>
   * @public
   */
  credentials?: string | undefined;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of  <code>method.request.\{location\}.\{name\}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.</p>
   * @public
   */
  requestParameters?: Record<string, string> | undefined;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.</p>
   * @public
   */
  requestTemplates?: Record<string, string> | undefined;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the <code>requestTemplates</code> property on the Integration resource. There are three valid values:  <code>WHEN_NO_MATCH</code>, <code>WHEN_NO_TEMPLATES</code>, and <code>NEVER</code>.
   *         </p>
   * @public
   */
  passthroughBehavior?: string | undefined;

  /**
   * <p>Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the <code>cacheNamespace</code>. You can specify the same <code>cacheNamespace</code> across resources to return the same cached data for requests to different resources.</p>
   * @public
   */
  cacheNamespace?: string | undefined;

  /**
   * <p>A list of request parameters whose values API Gateway caches. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for Method <code>requestParameters</code>.</p>
   * @public
   */
  cacheKeyParameters?: string[] | undefined;

  /**
   * <p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p>
   *          <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p>
   * @public
   */
  contentHandling?: ContentHandlingStrategy | undefined;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.</p>
   * @public
   */
  timeoutInMillis?: number | undefined;

  /**
   * <p>Specifies the TLS configuration for an integration.</p>
   * @public
   */
  tlsConfig?: TlsConfig | undefined;
}

/**
 * <p>Represents a put integration response request.</p>
 * @public
 */
export interface PutIntegrationResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>Specifies a put integration response request's resource identifier.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies a put integration response request's HTTP method.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>Specifies the status code that is used to map the integration response to an existing MethodResponse.</p>
   * @public
   */
  statusCode: string | undefined;

  /**
   * <p>Specifies the selection pattern of a put integration response.</p>
   * @public
   */
  selectionPattern?: string | undefined;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the back end.
   *             The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.\{name\}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.\{name\}</code> or <code>integration.response.body.\{JSON-expression\}</code>, where <code>name</code> must be a valid and unique response header name and <code>JSON-expression</code> a valid JSON expression without the <code>$</code> prefix.</p>
   * @public
   */
  responseParameters?: Record<string, string> | undefined;

  /**
   * <p>Specifies a put integration response's templates.</p>
   * @public
   */
  responseTemplates?: Record<string, string> | undefined;

  /**
   * <p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p>
   *          <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>
   * @public
   */
  contentHandling?: ContentHandlingStrategy | undefined;
}

/**
 * <p>Request to add a method to an existing Resource resource.</p>
 * @public
 */
export interface PutMethodRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The Resource identifier for the new Method resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies the method request's HTTP method type.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>
   * @public
   */
  authorizationType: string | undefined;

  /**
   * <p>Specifies the identifier of an Authorizer to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   * @public
   */
  authorizerId?: string | undefined;

  /**
   * <p>Specifies whether the method required a valid ApiKey.</p>
   * @public
   */
  apiKeyRequired?: boolean | undefined;

  /**
   * <p>A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example.</p>
   * @public
   */
  operationName?: string | undefined;

  /**
   * <p>A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of  <code>method.request.\{location\}.\{name\}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>).  The method request parameter names defined here are available in Integration to be mapped to integration request parameters or body-mapping templates.</p>
   * @public
   */
  requestParameters?: Record<string, boolean> | undefined;

  /**
   * <p>Specifies the Model resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a Model name as the value.</p>
   * @public
   */
  requestModels?: Record<string, string> | undefined;

  /**
   * <p>The identifier of a RequestValidator for validating the method request.</p>
   * @public
   */
  requestValidatorId?: string | undefined;

  /**
   * <p>A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   * @public
   */
  authorizationScopes?: string[] | undefined;
}

/**
 * <p>Request to add a MethodResponse to an existing Method resource.</p>
 * @public
 */
export interface PutMethodResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The Resource identifier for the Method resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The HTTP verb of the Method resource.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>The method response's status code.</p>
   * @public
   */
  statusCode: string | undefined;

  /**
   * <p>A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of <code>method.response.header.\{name\}</code>, where <code>name</code> is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in <code>integration.response.header.\{name\}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.\{JSON-expression\}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)</p>
   * @public
   */
  responseParameters?: Record<string, boolean> | undefined;

  /**
   * <p>Specifies the Model resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a Model name as the value.</p>
   * @public
   */
  responseModels?: Record<string, string> | undefined;
}

/**
 * <p>A PUT request to update an existing API, with external API definitions specified as the request body.</p>
 * @public
 */
export interface PutRestApiRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The <code>mode</code> query parameter to specify the update mode. Valid values are "merge" and "overwrite". By default,
   *         the update mode is "merge".</p>
   * @public
   */
  mode?: PutMode | undefined;

  /**
   * <p>A query parameter to indicate whether to rollback the API update (<code>true</code>) or not (<code>false</code>)
   *             when a warning is encountered. The default value is <code>false</code>.</p>
   * @public
   */
  failOnWarnings?: boolean | undefined;

  /**
   * <p>Custom header parameters as part of the request. For example, to exclude DocumentationParts from an imported API, set <code>ignore=documentation</code> as a <code>parameters</code> value, as in the AWS CLI command of <code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code>.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>The PUT request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.</p>
   * @public
   */
  body: Uint8Array | undefined;
}

/**
 * @public
 */
export interface RejectDomainNameAccessAssociationRequest {
  /**
   * <p>The ARN of the domain name access association resource.
   * </p>
   * @public
   */
  domainNameAccessAssociationArn: string | undefined;

  /**
   * <p>
   * The ARN of the domain name.
   * </p>
   * @public
   */
  domainNameArn: string | undefined;
}

/**
 * <p>Adds or updates a tag on a given resource.</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of a resource that can be tagged.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>Make a request to simulate the invocation of an Authorizer.</p>
 * @public
 */
export interface TestInvokeAuthorizerRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>Specifies a test invoke authorizer request's Authorizer ID.</p>
   * @public
   */
  authorizerId: string | undefined;

  /**
   * <p>A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified.</p>
   * @public
   */
  headers?: Record<string, string> | undefined;

  /**
   * <p>The headers as a map from string to list of values to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, may be specified.</p>
   * @public
   */
  multiValueHeaders?: Record<string, string[]> | undefined;

  /**
   * <p>The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.</p>
   * @public
   */
  pathWithQueryString?: string | undefined;

  /**
   * <p>The simulated request body of an incoming invocation request.</p>
   * @public
   */
  body?: string | undefined;

  /**
   * <p>A key-value map of stage variables to simulate an invocation on a deployed Stage.</p>
   * @public
   */
  stageVariables?: Record<string, string> | undefined;

  /**
   * <p>A key-value map of additional context variables.</p>
   * @public
   */
  additionalContext?: Record<string, string> | undefined;
}

/**
 * <p>Represents the response of the test invoke request for a custom Authorizer</p>
 * @public
 */
export interface TestInvokeAuthorizerResponse {
  /**
   * <p>The HTTP status code that the client would have received. Value is 0 if the authorizer succeeded.</p>
   * @public
   */
  clientStatus?: number | undefined;

  /**
   * <p>The API Gateway execution log for the test authorizer request.</p>
   * @public
   */
  log?: string | undefined;

  /**
   * <p>The execution latency, in ms, of the test authorizer request.</p>
   * @public
   */
  latency?: number | undefined;

  /**
   * <p>The principal identity returned by the Authorizer</p>
   * @public
   */
  principalId?: string | undefined;

  /**
   * <p>The JSON policy document returned by the Authorizer</p>
   * @public
   */
  policy?: string | undefined;

  /**
   * <p>The authorization response.</p>
   * @public
   */
  authorization?: Record<string, string[]> | undefined;

  /**
   * <p>The open identity claims, with any supported custom attributes, returned from the Cognito Your User Pool configured for the API.</p>
   * @public
   */
  claims?: Record<string, string> | undefined;
}

/**
 * <p>Make a request to simulate the invocation of a Method.</p>
 * @public
 */
export interface TestInvokeMethodRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>Specifies a test invoke method request's resource ID.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies a test invoke method request's HTTP method.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.</p>
   * @public
   */
  pathWithQueryString?: string | undefined;

  /**
   * <p>The simulated request body of an incoming invocation request.</p>
   * @public
   */
  body?: string | undefined;

  /**
   * <p>A key-value map of headers to simulate an incoming invocation request.</p>
   * @public
   */
  headers?: Record<string, string> | undefined;

  /**
   * <p>The headers as a map from string to list of values to simulate an incoming invocation request.</p>
   * @public
   */
  multiValueHeaders?: Record<string, string[]> | undefined;

  /**
   * <p>A ClientCertificate identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint.</p>
   * @public
   */
  clientCertificateId?: string | undefined;

  /**
   * <p>A key-value map of stage variables to simulate an invocation on a deployed Stage.</p>
   * @public
   */
  stageVariables?: Record<string, string> | undefined;
}

/**
 * <p>Represents the response of the test invoke request in the HTTP method.</p>
 * @public
 */
export interface TestInvokeMethodResponse {
  /**
   * <p>The HTTP status code.</p>
   * @public
   */
  status?: number | undefined;

  /**
   * <p>The body of the HTTP response.</p>
   * @public
   */
  body?: string | undefined;

  /**
   * <p>The headers of the HTTP response.</p>
   * @public
   */
  headers?: Record<string, string> | undefined;

  /**
   * <p>The headers of the HTTP response as a map from string to list of values.</p>
   * @public
   */
  multiValueHeaders?: Record<string, string[]> | undefined;

  /**
   * <p>The API Gateway execution log for the test invoke request.</p>
   * @public
   */
  log?: string | undefined;

  /**
   * <p>The execution latency, in ms, of the test invoke request.</p>
   * @public
   */
  latency?: number | undefined;
}

/**
 * <p>Removes a tag from a given resource.</p>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of a resource that can be tagged.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The Tag keys to delete.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Op = {
  add: "add",
  copy: "copy",
  move: "move",
  remove: "remove",
  replace: "replace",
  test: "test",
} as const;

/**
 * @public
 */
export type Op = (typeof Op)[keyof typeof Op];

/**
 * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
 * @public
 */
export interface PatchOperation {
  /**
   * <p>An update operation to be performed with this PATCH request. The valid value can be
   *             add, remove, replace or copy. Not all valid operations are supported for a given
   *             resource. Support of the operations depends on specific operational contexts. Attempts
   *             to apply an unsupported operation on a resource will return an error message..</p>
   * @public
   */
  op?: Op | undefined;

  /**
   * <p>The op operation's target, as identified by a JSON Pointer value that references a
   *             location within the targeted resource. For example, if the target resource has an
   *             updateable property of \{"name":"value"\}, the path for this property is /name. If the
   *             name property value is a JSON object (e.g., \{"name": \{"child/name": "child-value"\}\}),
   *             the path for the child/name property will be /name/child~1name. Any slash ("/")
   *             character appearing in path names must be escaped with "~1", as shown in the example
   *             above. Each op operation can have only one path associated with it.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>The new target value of the update operation. It is applicable for the add or replace
   *             operation. When using AWS CLI to update a property of a JSON value, enclose the JSON
   *             object with a pair of single quotes in a Linux shell, e.g., '\{"a": ...\}'.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The copy update operation's source as identified by a JSON-Pointer value referencing
   *             the location within the targeted resource to copy the value from. For example, to
   *             promote a canary deployment, you copy the canary deployment ID to the affiliated
   *             deployment ID by calling a PATCH request on a Stage resource with "op":"copy",
   *             "from":"/canarySettings/deploymentId" and "path":"/deploymentId".</p>
   * @public
   */
  from?: string | undefined;
}

/**
 * <p>Requests API Gateway to change information about the current Account resource.</p>
 * @public
 */
export interface UpdateAccountRequest {
  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>A request to change information about an ApiKey resource.</p>
 * @public
 */
export interface UpdateApiKeyRequest {
  /**
   * <p>The identifier of the ApiKey resource to be updated.</p>
   * @public
   */
  apiKey: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Request to update an existing Authorizer resource.</p>
 * @public
 */
export interface UpdateAuthorizerRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of the Authorizer resource.</p>
   * @public
   */
  authorizerId: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>A request to change information about the BasePathMapping resource.</p>
 * @public
 */
export interface UpdateBasePathMappingRequest {
  /**
   * <p>The domain name of the BasePathMapping resource to change.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>
   *   The identifier for the domain name resource. Supported only for private custom domain names.
   * </p>
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * <p>The base path of the BasePathMapping resource to change.</p>
   *          <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>
   * @public
   */
  basePath: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>A request to change information about an ClientCertificate resource.</p>
 * @public
 */
export interface UpdateClientCertificateRequest {
  /**
   * <p>The identifier of the ClientCertificate resource to be updated.</p>
   * @public
   */
  clientCertificateId: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Requests API Gateway to change information about a Deployment resource.</p>
 * @public
 */
export interface UpdateDeploymentRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The replacement identifier for the Deployment resource to change information about.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Updates an existing documentation part of a given API.</p>
 * @public
 */
export interface UpdateDocumentationPartRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of the to-be-updated documentation part.</p>
   * @public
   */
  documentationPartId: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Updates an existing documentation version of an API.</p>
 * @public
 */
export interface UpdateDocumentationVersionRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The version identifier of the to-be-updated documentation version.</p>
   * @public
   */
  documentationVersion: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>A request to change information about the DomainName resource.</p>
 * @public
 */
export interface UpdateDomainNameRequest {
  /**
   * <p>The name of the DomainName resource to be changed.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>
   *   The identifier for the domain name resource. Supported only for private custom domain names.
   * </p>
   * @public
   */
  domainNameId?: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Updates a GatewayResponse of a specified response type on the given RestApi.</p>
 * @public
 */
export interface UpdateGatewayResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The response type of the associated GatewayResponse.</p>
   * @public
   */
  responseType: GatewayResponseType | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Represents an update integration request.</p>
 * @public
 */
export interface UpdateIntegrationRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>Represents an update integration request's resource identifier.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Represents an update integration request's HTTP method.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Represents an update integration response request.</p>
 * @public
 */
export interface UpdateIntegrationResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>Specifies an update integration response request's resource identifier.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies an update integration response request's HTTP method.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>Specifies an update integration response request's status code.</p>
   * @public
   */
  statusCode: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Request to update an existing Method resource.</p>
 * @public
 */
export interface UpdateMethodRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The Resource identifier for the Method resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The HTTP verb of the Method resource.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>A request to update an existing MethodResponse resource.</p>
 * @public
 */
export interface UpdateMethodResponseRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The Resource identifier for the MethodResponse resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The HTTP verb of the Method resource.</p>
   * @public
   */
  httpMethod: string | undefined;

  /**
   * <p>The status code for the MethodResponse resource.</p>
   * @public
   */
  statusCode: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Request to update an existing model in an existing RestApi resource.</p>
 * @public
 */
export interface UpdateModelRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the model to update.</p>
   * @public
   */
  modelName: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Updates a RequestValidator of a given RestApi.</p>
 * @public
 */
export interface UpdateRequestValidatorRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of RequestValidator to be updated.</p>
   * @public
   */
  requestValidatorId: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Request to change information about a Resource resource.</p>
 * @public
 */
export interface UpdateResourceRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The identifier of the Resource resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Request to update an existing RestApi resource in your collection.</p>
 * @public
 */
export interface UpdateRestApiRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Requests API Gateway to change information about a Stage resource.</p>
 * @public
 */
export interface UpdateStageRequest {
  /**
   * <p>The string identifier of the associated RestApi.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the Stage resource to change information about.</p>
   * @public
   */
  stageName: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key.</p>
 * @public
 */
export interface UpdateUsageRequest {
  /**
   * <p>The Id of the usage plan associated with the usage data.</p>
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * <p>The identifier of the API key associated with the usage plan in which a temporary extension is granted to the remaining quota.</p>
   * @public
   */
  keyId: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>The PATCH request to update a usage plan of a given plan Id.</p>
 * @public
 */
export interface UpdateUsagePlanRequest {
  /**
   * <p>The Id of the to-be-updated usage plan.</p>
   * @public
   */
  usagePlanId: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}

/**
 * <p>Updates an existing VpcLink of a specified identifier.</p>
 * @public
 */
export interface UpdateVpcLinkRequest {
  /**
   * <p>The identifier of the  VpcLink. It is used in an Integration to reference this VpcLink.</p>
   * @public
   */
  vpcLinkId: string | undefined;

  /**
   * <p>For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.</p>
   * @public
   */
  patchOperations?: PatchOperation[] | undefined;
}
