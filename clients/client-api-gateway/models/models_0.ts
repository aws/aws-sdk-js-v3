import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Access log settings, including the access log format and access log destination ARN.</p>
 */
export interface AccessLogSettings {
  /**
   * <p>A single line format of the access logs of data, as specified by selected <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference">$context variables</a>. The format must include at least <code>$context.requestId</code>.</p>
   */
  format?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with <code>amazon-apigateway-</code>.</p>
   */
  destinationArn?: string;
}

export namespace AccessLogSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessLogSettings): any => ({
    ...obj,
  });
}

/**
 * <p> The API request rate limits.</p>
 */
export interface ThrottleSettings {
  /**
   * <p>The API request burst limit, the maximum rate limit over a time ranging from one to a few seconds, depending upon whether the underlying token bucket is at its full capacity.</p>
   */
  burstLimit?: number;

  /**
   * <p>The API request steady-state rate limit.</p>
   */
  rateLimit?: number;
}

export namespace ThrottleSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottleSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an AWS account that is associated with API Gateway.</p>
 *         <div class="remarks">
 *           <p>To view the account info, call <code>GET</code> on this resource.</p>
 *           <h4>Error Codes</h4>
 *           <p>The following exception may be thrown when the request fails.</p>
 *           <ul>
 *             <li>UnauthorizedException</li>
 *             <li>NotFoundException</li>
 *             <li>TooManyRequestsException</li>
 *           </ul>
 *           <p>For detailed error code information, including the corresponding HTTP Status Codes, see <a href="https://docs.aws.amazon.com/apigateway/api-reference/handling-errors/#api-error-codes">API Gateway Error Codes</a></p>
 *             <h4>Example: Get the information about an account.</h4>
 *             <h5>Request</h5>
 *             <pre><code>GET /account HTTP/1.1
 * Content-Type: application/json
 * Host: apigateway.us-east-1.amazonaws.com
 * X-Amz-Date: 20160531T184618Z
 * Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}
 *             </code></pre>
 *             <h5>Response</h5>
 *             <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p>
 *             <pre><code>{
 *   "_links": {
 *     "curies": {
 *       "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/account-apigateway-{rel}.html",
 *       "name": "account",
 *       "templated": true
 *     },
 *     "self": {
 *       "href": "/account"
 *     },
 *     "account:update": {
 *       "href": "/account"
 *     }
 *   },
 *   "cloudwatchRoleArn": "arn:aws:iam::123456789012:role/apigAwsProxyRole",
 *   "throttleSettings": {
 *     "rateLimit": 500,
 *     "burstLimit": 1000
 *   }
 * }
 *             </code></pre>
 *             <p>In addition to making the REST API call directly, you can use the AWS CLI and an AWS SDK to access this resource.</p>
 *         </div>
 *         <div class="seeAlso">
 *           <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-limits.html">API Gateway Limits</a>
 *             <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html">Developer Guide</a>,
 *             <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-account.html">AWS CLI</a>
 *         </div>
 */
export interface Account {
  /**
   * <p>The ARN of an Amazon CloudWatch role for the current <a>Account</a>. </p>
   */
  cloudwatchRoleArn?: string;

  /**
   * <p>Specifies the API request limits configured for the current <a>Account</a>.</p>
   */
  throttleSettings?: ThrottleSettings;

  /**
   * <p>A list of features supported for the account. When usage plans are enabled, the features list will include an entry of <code>"UsagePlans"</code>.</p>
   */
  features?: string[];

  /**
   * <p>The version of the API keys used for the account.</p>
   */
  apiKeyVersion?: string;
}

export namespace Account {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Account): any => ({
    ...obj,
  });
}

/**
 * <p>A resource that can be distributed to callers for executing <a>Method</a> resources that require an API key. API keys can be mapped to any <a>Stage</a> on any <a>RestApi</a>, which indicates that the callers with the API key can make requests to that stage.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a>
 *       </div>
 */
export interface ApiKey {
  /**
   * <p>The identifier of the API Key.</p>
   */
  id?: string;

  /**
   * <p>The value of the API Key.</p>
   */
  value?: string;

  /**
   * <p>The name of the API Key.</p>
   */
  name?: string;

  /**
   * <p>An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.</p>
   */
  customerId?: string;

  /**
   * <p>The description of the API Key.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether the API Key can be used by callers.</p>
   */
  enabled?: boolean;

  /**
   * <p>The timestamp when the API Key was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The timestamp when the API Key was last updated.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p>
   */
  stageKeys?: string[];

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ApiKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiKey): any => ({
    ...obj,
  });
}

/**
 * <p>The identifier of an <a>ApiKey</a> used in a <a>UsagePlan</a>.</p>
 */
export interface ApiKeyIds {
  /**
   * <p>A list of all the <a>ApiKey</a> identifiers.</p>
   */
  ids?: string[];

  /**
   * <p>A list of warning messages.</p>
   */
  warnings?: string[];
}

export namespace ApiKeyIds {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiKeyIds): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of API keys as represented by an <a>ApiKeys</a> resource.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a>
 *       </div>
 */
export interface ApiKeys {
  /**
   * <p>A list of warning messages logged during the import of API keys when the <code>failOnWarnings</code> option is set to true.</p>
   */
  warnings?: string[];

  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: ApiKey[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace ApiKeys {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiKeys): any => ({
    ...obj,
  });
}

export enum ApiKeysFormat {
  csv = "csv",
}

export enum ApiKeySourceType {
  AUTHORIZER = "AUTHORIZER",
  HEADER = "HEADER",
}

/**
 * <p>API stage name of the associated API stage in a usage plan.</p>
 */
export interface ApiStage {
  /**
   * <p>API Id of the associated API stage in a usage plan.</p>
   */
  apiId?: string;

  /**
   * <p>API stage name of the associated API stage in a usage plan.</p>
   */
  stage?: string;

  /**
   * <p>Map containing method level throttling information for API stage in a usage plan.</p>
   */
  throttle?: { [key: string]: ThrottleSettings };
}

export namespace ApiStage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiStage): any => ({
    ...obj,
  });
}

export enum AuthorizerType {
  COGNITO_USER_POOLS = "COGNITO_USER_POOLS",
  REQUEST = "REQUEST",
  TOKEN = "TOKEN",
}

/**
 * <p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a>
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a>
 *       </div>
 */
export interface Authorizer {
  /**
   * <p>The identifier for the authorizer resource.</p>
   */
  id?: string;

  /**
   * <p>[Required] The name of the authorizer.</p>
   */
  name?: string;

  /**
   * <p>The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.</p>
   */
  type?: AuthorizerType | string;

  /**
   * <p>A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined.</p>
   */
  providerARNs?: string[];

  /**
   * <p>Optional customer-defined field, used in OpenAPI imports and exports without functional impact.</p>
   */
  authType?: string;

  /**
   * <p>Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form  <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.</p>
   */
  authorizerUri?: string;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.</p>
   */
  authorizerCredentials?: string;

  /**
   * <p>The identity source for which authorization is requested. <ul><li>For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is  <code>method.request.header.Auth</code>.</li><li>For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>.  These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</li></ul></p>
   */
  identitySource?: string;

  /**
   * <p>A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.</p>
   */
  identityValidationExpression?: string;

  /**
   * <p>The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.</p>
   */
  authorizerResultTtlInSeconds?: number;
}

export namespace Authorizer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Authorizer): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of <a>Authorizer</a> resources.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a>
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a>
 *       </div>
 */
export interface Authorizers {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: Authorizer[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace Authorizers {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Authorizers): any => ({
    ...obj,
  });
}

/**
 * <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.</p>
 */
export interface StageKey {
  /**
   * <p>The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId?: string;

  /**
   * <p>The stage name associated with the stage key.</p>
   */
  stageName?: string;
}

export namespace StageKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StageKey): any => ({
    ...obj,
  });
}

/**
 * <p>Request to create an <a>ApiKey</a> resource.</p>
 */
export interface CreateApiKeyRequest {
  /**
   * <p>The name of the <a>ApiKey</a>.</p>
   */
  name?: string;

  /**
   * <p>The description of the <a>ApiKey</a>.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether the <a>ApiKey</a> can be used by callers.</p>
   */
  enabled?: boolean;

  /**
   * <p>Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used.</p>
   */
  generateDistinctId?: boolean;

  /**
   * <p>Specifies a value of the API key.</p> <!-- Why is this declared as the input to create an API key? As a form of copying an existing key value into a new API key? -->
   */
  value?: string;

  /**
   * <p>DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.</p>
   */
  stageKeys?: StageKey[];

  /**
   * <p>An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.</p>
   */
  customerId?: string;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateApiKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApiKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  retryAfterSeconds?: string;
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  retryAfterSeconds?: string;
  message?: string;
}

export namespace TooManyRequestsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * <p>The request is denied because the caller has insufficient permissions.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  message?: string;
}

export namespace UnauthorizedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
}

/**
 * <p>Request to add a new <a>Authorizer</a> to an existing <a>RestApi</a> resource.</p>
 */
export interface CreateAuthorizerRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the authorizer.</p>
   */
  name: string | undefined;

  /**
   * <p>[Required] The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.</p>
   */
  type: AuthorizerType | string | undefined;

  /**
   * <p>A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined.</p>
   */
  providerARNs?: string[];

  /**
   * <p>Optional customer-defined field, used in OpenAPI imports and exports without functional impact.</p>
   */
  authType?: string;

  /**
   * <p>Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form  <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.</p>
   */
  authorizerUri?: string;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.</p>
   */
  authorizerCredentials?: string;

  /**
   * <p>The identity source for which authorization is requested. <ul><li>For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is  <code>method.request.header.Auth</code>.</li><li>For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>.  These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</li></ul></p>
   */
  identitySource?: string;

  /**
   * <p>A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.</p>
   */
  identityValidationExpression?: string;

  /**
   * <p>The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.</p>
   */
  authorizerResultTtlInSeconds?: number;
}

export namespace CreateAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuthorizerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the base path that callers of the API must provide as part of the URL after the domain name.</p>
 *         <div class="remarks">A custom domain name plus a <code>BasePathMapping</code> specification identifies a deployed <a>RestApi</a> in a given stage of the owner <a>Account</a>.</div>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a>
 *       </div>
 */
export interface BasePathMapping {
  /**
   * <p>The base path name that callers of the API must provide as part of the URL after the domain name.</p>
   */
  basePath?: string;

  /**
   * <p>The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId?: string;

  /**
   * <p>The name of the associated stage.</p>
   */
  stage?: string;
}

export namespace BasePathMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BasePathMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to create a new <a>BasePathMapping</a> resource.</p>
 */
export interface CreateBasePathMappingRequest {
  /**
   * <p>[Required] The domain name of the <a>BasePathMapping</a> resource to create.</p>
   */
  domainName: string | undefined;

  /**
   * <p>The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name.</p>
   */
  basePath?: string;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the API's stage that you want to use for this mapping. Specify '(none)' if you want callers to explicitly specify the stage name after any base path name.</p>
   */
  stage?: string;
}

export namespace CreateBasePathMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBasePathMappingRequest): any => ({
    ...obj,
  });
}

export enum CacheClusterSize {
  SIZE_0_POINT_5_GB = "0.5",
  SIZE_118_GB = "118",
  SIZE_13_POINT_5_GB = "13.5",
  SIZE_1_POINT_6_GB = "1.6",
  SIZE_237_GB = "237",
  SIZE_28_POINT_4_GB = "28.4",
  SIZE_58_POINT_2_GB = "58.2",
  SIZE_6_POINT_1_GB = "6.1",
}

/**
 * <p>The input configuration for a canary deployment.</p>
 */
export interface DeploymentCanarySettings {
  /**
   * <p>The percentage (0.0-100.0) of traffic routed to the canary deployment.</p>
   */
  percentTraffic?: number;

  /**
   * <p>A stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.</p>
   */
  stageVariableOverrides?: { [key: string]: string };

  /**
   * <p>A Boolean flag to indicate whether the canary release deployment uses the stage cache or not.</p>
   */
  useStageCache?: boolean;
}

export namespace DeploymentCanarySettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentCanarySettings): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to create a <a>Deployment</a> resource.</p>
 */
export interface CreateDeploymentRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the <a>Stage</a> resource for the <a>Deployment</a> resource to create.</p>
   */
  stageName?: string;

  /**
   * <p>The description of the <a>Stage</a> resource for the <a>Deployment</a> resource to create.</p>
   */
  stageDescription?: string;

  /**
   * <p>The description for the <a>Deployment</a> resource to create.</p>
   */
  description?: string;

  /**
   * <p>Enables a cache cluster for the <a>Stage</a> resource specified in the input.</p>
   */
  cacheClusterEnabled?: boolean;

  /**
   * <p>Specifies the cache cluster size for the <a>Stage</a> resource specified in the input, if a cache cluster is enabled.</p>
   */
  cacheClusterSize?: CacheClusterSize | string;

  /**
   * <p>A map that defines the stage variables for the <a>Stage</a> resource that is associated
   *           with the new deployment. Variable names can have alphanumeric and underscore characters, and the values
   *           must match <code>[A-Za-z0-9-._~:/?#&=,]+</code>.</p>
   */
  variables?: { [key: string]: string };

  /**
   * <p>The input configuration for the canary deployment when the deployment is a canary release deployment. </p>
   */
  canarySettings?: DeploymentCanarySettings;

  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>
   */
  tracingEnabled?: boolean;
}

export namespace CreateDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeploymentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a summary of a <a>Method</a> resource, given a particular date and time.</p>
 */
export interface MethodSnapshot {
  /**
   * <p>The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>
   */
  authorizationType?: string;

  /**
   * <p>Specifies whether the method requires a valid <a>ApiKey</a>.</p>
   */
  apiKeyRequired?: boolean;
}

export namespace MethodSnapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MethodSnapshot): any => ({
    ...obj,
  });
}

/**
 * <p>An immutable representation of a <a>RestApi</a> resource that can be called by users using <a>Stages</a>. A deployment must be associated with a <a>Stage</a> for it to be callable over the Internet.</p>
 *         <div class="remarks">To create a deployment, call <code>POST</code> on the <a>Deployments</a> resource of a <a>RestApi</a>.
 *             To view, update, or delete a deployment, call <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> on the specified deployment resource (<code>/restapis/{restapi_id}/deployments/{deployment_id}</code>).</div>
 *         <div class="seeAlso"><a>RestApi</a>, <a>Deployments</a>, <a>Stage</a>,
 *             <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html">AWS CLI</a>,
 *             <a href="https://aws.amazon.com/tools/">AWS SDKs</a>
 *         </div>
 */
export interface Deployment {
  /**
   * <p>The identifier for the deployment resource.</p>
   */
  id?: string;

  /**
   * <p>The description for the deployment resource.</p>
   */
  description?: string;

  /**
   * <p>The date and time that the deployment resource was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>A summary of the <a>RestApi</a> at the date and time that the deployment resource was created.</p>
   */
  apiSummary?: { [key: string]: { [key: string]: MethodSnapshot } };
}

export namespace Deployment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Deployment): any => ({
    ...obj,
  });
}

/**
 * <p>The requested service is not available. For details see the accompanying error message. Retry after the specified time period.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  retryAfterSeconds?: string;
  message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

export enum DocumentationPartType {
  API = "API",
  AUTHORIZER = "AUTHORIZER",
  METHOD = "METHOD",
  MODEL = "MODEL",
  PATH_PARAMETER = "PATH_PARAMETER",
  QUERY_PARAMETER = "QUERY_PARAMETER",
  REQUEST_BODY = "REQUEST_BODY",
  REQUEST_HEADER = "REQUEST_HEADER",
  RESOURCE = "RESOURCE",
  RESPONSE = "RESPONSE",
  RESPONSE_BODY = "RESPONSE_BODY",
  RESPONSE_HEADER = "RESPONSE_HEADER",
}

/**
 * <p>Specifies the target API entity to which the documentation applies.</p>
 */
export interface DocumentationPartLocation {
  /**
   * <p>[Required] The type of API entity to which the documentation content applies. Valid values are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>,  <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Content inheritance does not apply to any entity of the <code>API</code>, <code>AUTHORIZER</code>, <code>METHOD</code>,  <code>MODEL</code>, <code>REQUEST_BODY</code>, or <code>RESOURCE</code> type.</p>
   */
  type: DocumentationPartType | string | undefined;

  /**
   * <p>The URL path of the target. It is a valid field for the API entity types of <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>/</code> for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other <code>location</code> attributes,  the child entity's <code>path</code> attribute must match that of the parent entity as a prefix.</p>
   */
  path?: string;

  /**
   * <p>The HTTP verb of a method. It is a valid field for the API entity types of  <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>,  <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any method.  When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes,  the child entity's <code>method</code> attribute must match that of the parent entity exactly.</p>
   */
  method?: string;

  /**
   * <p>The HTTP status code of a response. It is a valid field for the API entity types of <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any status code. When an applicable child  entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>statusCode</code> attribute must match that of the parent entity exactly.</p>
   */
  statusCode?: string;

  /**
   * <p>The name of the targeted API entity. It is a valid and required field for the API entity types of <code>AUTHORIZER</code>, <code>MODEL</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code> and <code>RESPONSE_HEADER</code>. It is an invalid field for any other entity type.</p>
   */
  name?: string;
}

export namespace DocumentationPartLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentationPartLocation): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new documentation part of a given API.</p>
 */
export interface CreateDocumentationPartRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The location of the targeted API entity of the to-be-created documentation part.</p>
   */
  location: DocumentationPartLocation | undefined;

  /**
   * <p>[Required] The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.</p>
   */
  properties: string | undefined;
}

export namespace CreateDocumentationPartRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDocumentationPartRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A documentation part for a targeted API entity.</p>
 *     <div class="remarks">
 *       <p>A documentation part consists of a content map (<code>properties</code>) and a target (<code>location</code>). The target specifies an API entity to which the documentation content applies. The supported API entity types are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Valid <code>location</code> fields depend on the API entity type. All valid fields are not required.</p>
 *       <p>The content map is a JSON string of API-specific key-value pairs. Although an API can use any shape for the content map, only the OpenAPI-compliant documentation fields will be injected into the associated API entity definition in the exported OpenAPI definition file.</p></div>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationParts</a>
 *     </div>
 */
export interface DocumentationPart {
  /**
   * <p>The <a>DocumentationPart</a> identifier, generated by API Gateway when the <code>DocumentationPart</code> is created.</p>
   */
  id?: string;

  /**
   * <p>The location of the API entity to which the documentation applies. Valid fields depend on the targeted API entity type. All the valid location fields are not required. If not explicitly specified, a valid location field is treated as a wildcard and associated documentation content may be inherited by matching entities, unless overridden.</p>
   */
  location?: DocumentationPartLocation;

  /**
   * <p>A content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., <code>"{ \"description\": \"The API does ...\" }"</code>.  Only OpenAPI-compliant documentation-related fields from the <literal>properties</literal> map are exported and, hence, published as part of the API entity definitions, while the original documentation parts are exported in a OpenAPI extension of <code>x-amazon-apigateway-documentation</code>.</p>
   */
  properties?: string;
}

export namespace DocumentationPart {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentationPart): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new documentation version of a given API.</p>
 */
export interface CreateDocumentationVersionRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The version identifier of the new snapshot.</p>
   */
  documentationVersion: string | undefined;

  /**
   * <p>The stage name to be associated with the new documentation snapshot.</p>
   */
  stageName?: string;

  /**
   * <p>A description about the new documentation snapshot.</p>
   */
  description?: string;
}

export namespace CreateDocumentationVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDocumentationVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A snapshot of the documentation of an API.</p>
 *     <div class="remarks"><p>Publishing API documentation involves creating a documentation version associated with an API stage and exporting the versioned documentation to an external (e.g., OpenAPI) file.</p></div>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersions</a>
 *     </div>
 */
export interface DocumentationVersion {
  /**
   * <p>The version identifier of the API documentation snapshot.</p>
   */
  version?: string;

  /**
   * <p>The date when the API documentation snapshot is created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The description of the API documentation snapshot.</p>
   */
  description?: string;
}

export namespace DocumentationVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentationVersion): any => ({
    ...obj,
  });
}

export type EndpointType = "EDGE" | "PRIVATE" | "REGIONAL";

/**
 * <p>The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. </p>
 */
export interface EndpointConfiguration {
  /**
   * <p>A list of endpoint types of an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>). For an edge-optimized API and its custom domain name, the endpoint type is <code>"EDGE"</code>. For a regional API and its custom domain name, the endpoint type is <code>REGIONAL</code>. For a private API, the endpoint type is <code>PRIVATE</code>.</p>
   */
  types?: (EndpointType | string)[];

  /**
   * <p>A list of VpcEndpointIds of an API (<a>RestApi</a>) against which to create Route53 ALIASes. It is only supported for <code>PRIVATE</code> endpoint type.</p>
   */
  vpcEndpointIds?: string[];
}

export namespace EndpointConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.</p>
 */
export interface MutualTlsAuthenticationInput {
  /**
   * <p>An Amazon S3 resource ARN that specifies the truststore for mutual TLS authentication,
   *             for example,
   *             <code>s3://bucket-name/key-name</code>.
   *             The truststore can contain certificates from public or private certificate authorities.
   *             To update the truststore, upload a new version to S3, and then update your custom domain
   *             name to use the new version. To update the truststore, you must have permissions to
   *             access the S3 object.</p>
   */
  truststoreUri?: string;

  /**
   * <p>The version of the S3 object that contains your truststore. To
   *            specify a version, you must have versioning enabled for the S3 bucket.</p>
   */
  truststoreVersion?: string;
}

export namespace MutualTlsAuthenticationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MutualTlsAuthenticationInput): any => ({
    ...obj,
  });
}

export type SecurityPolicy = "TLS_1_0" | "TLS_1_2";

/**
 * <p>A request to create a new domain name.</p>
 */
export interface CreateDomainNameRequest {
  /**
   * <p>[Required] The name of the <a>DomainName</a> resource.</p>
   */
  domainName: string | undefined;

  /**
   * <p>The user-friendly name of the certificate that will be used by edge-optimized endpoint for this domain name.</p>
   */
  certificateName?: string;

  /**
   * <p>[Deprecated] The body of the server certificate that will be used by edge-optimized endpoint for this domain name provided by your certificate authority.</p>
   */
  certificateBody?: string;

  /**
   * <p>[Deprecated] Your edge-optimized endpoint's domain name certificate's private key.</p>
   */
  certificatePrivateKey?: string;

  /**
   * <p>[Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path.</p>
   */
  certificateChain?: string;

  /**
   * <p>The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  certificateArn?: string;

  /**
   * <p>The user-friendly name of the certificate that will be used by regional endpoint for this domain name.</p>
   */
  regionalCertificateName?: string;

  /**
   * <p>The reference to an AWS-managed certificate that will be used by regional endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  regionalCertificateArn?: string;

  /**
   * <p>The endpoint configuration of this <a>DomainName</a> showing the endpoint types of the domain name.</p>
   */
  endpointConfiguration?: EndpointConfiguration;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Transport Layer Security (TLS) version + cipher suite for this <a>DomainName</a>. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.</p>
   */
  securityPolicy?: SecurityPolicy | string;

  /**
   * <p>If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.</p>
   */
  mutualTlsAuthentication?: MutualTlsAuthenticationInput;

  /**
   * <p>The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn.</p>
   */
  ownershipVerificationCertificateArn?: string;
}

export namespace CreateDomainNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainNameRequest): any => ({
    ...obj,
  });
}

export enum DomainNameStatus {
  AVAILABLE = "AVAILABLE",
  PENDING = "PENDING",
  PENDING_CERTIFICATE_REIMPORT = "PENDING_CERTIFICATE_REIMPORT",
  PENDING_OWNERSHIP_VERIFICATION = "PENDING_OWNERSHIP_VERIFICATION",
  UPDATING = "UPDATING",
}

/**
 * <p>If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.</p>
 */
export interface MutualTlsAuthentication {
  /**
   * <p>An Amazon S3 URL that specifies the truststore for mutual TLS authentication,
   *             for example <code>s3://bucket-name/key-name</code>.
   *             The truststore can contain certificates from public or private certificate authorities.
   *             To update the truststore, upload a new version to S3, and then update your custom domain
   *             name to use the new version. To update the truststore, you must have permissions to
   *             access the S3 object.</p>
   */
  truststoreUri?: string;

  /**
   * <p>The version of the S3 object that contains your truststore. To
   *             specify a version, you must have versioning enabled for the S3 bucket.</p>
   */
  truststoreVersion?: string;

  /**
   * <p>A list of warnings that API Gateway returns while processing your truststore. Invalid
   *             certificates produce warnings. Mutual TLS is still enabled, but some clients might not
   *             be able to access your API. To resolve warnings, upload a new truststore to S3, and then
   *             update you domain name to use the new version.</p>
   */
  truststoreWarnings?: string[];
}

export namespace MutualTlsAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MutualTlsAuthentication): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a custom domain name as a user-friendly host name of an API (<a>RestApi</a>).</p>
 *         <div class="Remarks">
 *             <p>When you deploy an API, API Gateway creates a default host name for the API. This default API host name is of the <code>{restapi-id}.execute-api.{region}.amazonaws.com</code> format. With the default host name, you can access the API's root resource with the URL of <code>https://{restapi-id}.execute-api.{region}.amazonaws.com/{stage}/</code>. When you set up a custom domain name of <code>apis.example.com</code> for this API, you can then access the same resource using the URL of the <code>https://apis.examples.com/myApi</code>, where <code>myApi</code> is the base path mapping (<a>BasePathMapping</a>) of your API under the custom domain name.
 *             </p>
 *         </div>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Set a Custom Host Name for an API</a>
 *       </div>
 */
export interface DomainName {
  /**
   * <p>The custom domain name as an API host name, for example, <code>my-api.example.com</code>.</p>
   */
  domainName?: string;

  /**
   * <p>The name of the certificate that will be used by edge-optimized endpoint for this domain name.</p>
   */
  certificateName?: string;

  /**
   * <p>The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  certificateArn?: string;

  /**
   * <p>The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.</p>
   */
  certificateUploadDate?: Date;

  /**
   * <p>The domain name associated with the regional endpoint for this custom domain name. You set up this association by adding a DNS record that points the custom domain name to this regional domain name. The regional domain name is returned by API Gateway when you create a regional endpoint.</p>
   */
  regionalDomainName?: string;

  /**
   * <p>The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint. For more information, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html">Set up a Regional Custom Domain Name</a> and  <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region">AWS Regions and Endpoints for API Gateway</a>. </p>
   */
  regionalHostedZoneId?: string;

  /**
   * <p>The name of the certificate that will be used for validating the regional domain name.</p>
   */
  regionalCertificateName?: string;

  /**
   * <p>The reference to an AWS-managed certificate that will be used for validating the regional domain name. AWS Certificate Manager is the only supported source.</p>
   */
  regionalCertificateArn?: string;

  /**
   * <p>The domain name of the Amazon CloudFront distribution associated with this custom domain name for an edge-optimized endpoint. You set up this association when adding a DNS record pointing the custom domain name to this distribution name. For more information about CloudFront distributions, see the <a target="_blank" href="https://aws.amazon.com/documentation/cloudfront/">Amazon CloudFront documentation</a>.</p>
   */
  distributionDomainName?: string;

  /**
   * <p>The region-agnostic Amazon Route 53 Hosted Zone ID of the edge-optimized endpoint. The valid value is <code>Z2FDTNDATAQYW2</code> for all the regions. For more information, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html">Set up a Regional Custom Domain Name</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region">AWS Regions and Endpoints for API Gateway</a>. </p>
   */
  distributionHostedZoneId?: string;

  /**
   * <p>The endpoint configuration of this <a>DomainName</a> showing the endpoint types of the domain name.</p>
   */
  endpointConfiguration?: EndpointConfiguration;

  /**
   * <p>The status of the <a>DomainName</a> migration. The valid values are <code>AVAILABLE</code>, <code>UPDATING</code>, <code>PENDING_CERTIFICATE_REIMPORT</code>, and <code>PENDING_OWNERSHIP_VERIFICATION</code>. If the status is <code>UPDATING</code>, the domain cannot be modified further until the existing operation is complete. If it is <code>AVAILABLE</code>, the domain can be updated.</p>
   */
  domainNameStatus?: DomainNameStatus | string;

  /**
   * <p>An optional text message containing detailed information about status of the <a>DomainName</a> migration.</p>
   */
  domainNameStatusMessage?: string;

  /**
   * <p>The Transport Layer Security (TLS) version + cipher suite for this <a>DomainName</a>. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.</p>
   */
  securityPolicy?: SecurityPolicy | string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.</p>
   */
  mutualTlsAuthentication?: MutualTlsAuthentication;

  /**
   * <p>The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn.</p>
   */
  ownershipVerificationCertificateArn?: string;
}

export namespace DomainName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainName): any => ({
    ...obj,
  });
}

/**
 * <p>Request to add a new <a>Model</a> to an existing <a>RestApi</a> resource.</p>
 */
export interface CreateModelRequest {
  /**
   * <p>[Required] The <a>RestApi</a> identifier under which the <a>Model</a> will be created.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the model. Must be alphanumeric.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the model.</p>
   */
  description?: string;

  /**
   * <p>The schema for the model. For <code>application/json</code> models, this should be <a target="_blank" href="https://tools.ietf.org/html/draft-zyp-json-schema-04">JSON schema draft 4</a> model.</p>
   */
  schema?: string;

  /**
   * <p>[Required] The content-type for the model.</p>
   */
  contentType: string | undefined;
}

export namespace CreateModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the data structure of a method's request or response payload.</p>
 *       <div class="remarks">
 *         <p>A request model defines the data structure of the client-supplied request payload. A response model defines the data structure of the response payload returned by the back end. Although not required, models are useful for mapping payloads between the front end and back end.</p>
 *         <p>A model is used for generating an API's SDK, validating the input request body, and creating a skeletal mapping template.</p>
 *       </div>
 *       <div class="seeAlso">
 *         <a>Method</a>, <a>MethodResponse</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a>
 *       </div>
 */
export interface Model {
  /**
   * <p>The identifier for the model resource.</p>
   */
  id?: string;

  /**
   * <p>The name of the model. Must be an alphanumeric string.</p>
   */
  name?: string;

  /**
   * <p>The description of the model.</p>
   */
  description?: string;

  /**
   * <p>The schema for the model. For <code>application/json</code> models, this should be <a target="_blank" href="https://tools.ietf.org/html/draft-zyp-json-schema-04">JSON schema draft 4</a> model. Do not include "\*\/" characters in the description of any properties because such "\*\/" characters may be interpreted as the closing marker for comments in some languages, such as Java or JavaScript, causing the installation of your API's SDK generated by API Gateway to fail.</p>
   */
  schema?: string;

  /**
   * <p>The content-type for the model.</p>
   */
  contentType?: string;
}

export namespace Model {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Model): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 */
export interface CreateRequestValidatorRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the to-be-created <a>RequestValidator</a>.</p>
   */
  name?: string;

  /**
   * <p>A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (<code>true</code>) or not (<code>false</code>).</p>
   */
  validateRequestBody?: boolean;

  /**
   * <p>A Boolean flag to indicate whether to validate request parameters, <code>true</code>, or not <code>false</code>.</p>
   */
  validateRequestParameters?: boolean;
}

export namespace CreateRequestValidatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRequestValidatorRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A set of validation rules for incoming <a>Method</a> requests.</p>
 *         <div class="remarks">
 *           <p>In OpenAPI, a <a>RequestValidator</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.requestValidator.html">x-amazon-apigateway-request-validators.requestValidator</a> object. It the referenced using the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validator">x-amazon-apigateway-request-validator</a> property.</p>
 *         </div>
 *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
 */
export interface RequestValidator {
  /**
   * <p>The identifier of this <a>RequestValidator</a>.</p>
   */
  id?: string;

  /**
   * <p>The name of this <a>RequestValidator</a></p>
   */
  name?: string;

  /**
   * <p>A Boolean flag to indicate whether to validate a request body according to the configured <a>Model</a> schema.</p>
   */
  validateRequestBody?: boolean;

  /**
   * <p>A Boolean flag to indicate whether to validate request parameters (<code>true</code>) or not (<code>false</code>).</p>
   */
  validateRequestParameters?: boolean;
}

export namespace RequestValidator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestValidator): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to create a <a>Resource</a> resource.</p>
 */
export interface CreateResourceRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The parent resource's identifier.</p>
   */
  parentId: string | undefined;

  /**
   * <p>The last path segment for this resource.</p>
   */
  pathPart: string | undefined;
}

export namespace CreateResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceRequest): any => ({
    ...obj,
  });
}

export enum ConnectionType {
  INTERNET = "INTERNET",
  VPC_LINK = "VPC_LINK",
}

export enum ContentHandlingStrategy {
  CONVERT_TO_BINARY = "CONVERT_TO_BINARY",
  CONVERT_TO_TEXT = "CONVERT_TO_TEXT",
}

/**
 * <p>Represents an integration response. The status code must map to an existing <a>MethodResponse</a>, and parameters and templates can be used to transform the back-end response.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a>
 *       </div>
 */
export interface IntegrationResponse {
  /**
   * <p>Specifies the status code that is used to map the integration response to an existing <a>MethodResponse</a>.</p>
   */
  statusCode?: string;

  /**
   * <p>Specifies the regular expression (regex) pattern used to choose an integration response based on the response from the back end. For example, if the success response returns nothing and the error response returns some string, you could use the <code>.+</code> regex to match error response. However, make sure that the error response does not contain any newline (<code>\n</code>) character in such cases. If the back end is an AWS Lambda function, the AWS Lambda function error header is matched. For all other HTTP and AWS back ends, the HTTP status code is matched.</p>
   */
  selectionPattern?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the back end.
   *             The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> is a valid and unique response header name and <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.</p>
   */
  responseParameters?: { [key: string]: string };

  /**
   * <p>Specifies the templates used to transform the integration response body. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</p>
   */
  responseTemplates?: { [key: string]: string };

  /**
   * <p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p>
   *     <ul>
   *       <li><p><code>CONVERT_TO_BINARY</code>: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p></li>
   *       <li><p><code>CONVERT_TO_TEXT</code>: Converts a response payload from a binary blob to a Base64-encoded string.</p></li>
   *     </ul>
   *     <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>
   */
  contentHandling?: ContentHandlingStrategy | string;
}

export namespace IntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntegrationResponse): any => ({
    ...obj,
  });
}

export interface TlsConfig {
  /**
   * <p>Specifies whether or not API Gateway skips verification that the certificate for an integration endpoint is
   *             issued by a <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-supported-certificate-authorities-for-http-endpoints.html">supported certificate authority</a>. This isn’t recommended, but it enables you to
   *             use certificates that are signed by private certificate authorities, or certificates
   *             that are self-signed. If enabled, API Gateway still performs basic certificate
   *             validation, which includes checking the certificate's expiration date, hostname, and
   *             presence of a root certificate authority. Supported only for <code>HTTP</code> and
   *             <code>HTTP_PROXY</code> integrations.</p>
   */
  insecureSkipVerification?: boolean;
}

export namespace TlsConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TlsConfig): any => ({
    ...obj,
  });
}

export enum IntegrationType {
  AWS = "AWS",
  AWS_PROXY = "AWS_PROXY",
  HTTP = "HTTP",
  HTTP_PROXY = "HTTP_PROXY",
  MOCK = "MOCK",
}

/**
 * <p>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</p>
 *         <div class="remarks">In the API Gateway console, the built-in Lambda integration is an AWS integration.</div>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a>
 *       </div>
 */
export interface Integration {
  /**
   * <p>Specifies an API method integration type. The valid value is one of the following:</p>
   *         <ul>
   *             <li><code>AWS</code>: for integrating the API method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration.</li>
   *             <li><code>AWS_PROXY</code>: for integrating the API method request with the Lambda function-invoking action with the client request passed through as-is. This integration is also referred to as the Lambda proxy integration.</li>
   *             <li><code>HTTP</code>: for integrating the API method request with an HTTP endpoint, including a private HTTP endpoint within a VPC. This integration is also referred to as the HTTP custom integration.</li>
   *             <li><code>HTTP_PROXY</code>: for integrating the API method request with an HTTP endpoint, including a private HTTP endpoint within a VPC, with the client request passed through as-is. This is also referred to as the HTTP proxy integration.</li>
   *             <li><code>MOCK</code>: for integrating the API method request with API Gateway as a "loop-back" endpoint without invoking any backend.</li>
   *         </ul>
   *         <p>For the HTTP and HTTP proxy integrations, each integration can specify a protocol (<code>http/https</code>), port and path. Standard 80 and 443 ports are supported as well as custom ports above 1024. An HTTP or HTTP proxy integration with a <code>connectionType</code> of <code>VPC_LINK</code> is referred to as a private integration and uses a <a>VpcLink</a> to connect API Gateway to a network load balancer of a VPC.</p>
   */
  type?: IntegrationType | string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  httpMethod?: string;

  /**
   * <p>Specifies Uniform Resource Identifier (URI) of the integration endpoint.</p>
   * <ul>
   * <li><p> For <code>HTTP</code> or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the <a target="_blank" href="https://en.wikipedia.org/wiki/Uniform_Resource_Identifier">RFC-3986 specification</a>, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. </p>
   * </li>
   * <li><p> For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}</code>. Here, <code>{Region}</code> is the API Gateway region (e.g., <code>us-east-1</code>); <code>{service}</code> is the name of the integrated AWS service (e.g., <code>s3</code>); and <code>{subdomain}</code> is a designated subdomain supported by certain AWS service for fast host-name lookup. <code>action</code> can be used for an AWS service action-based API, using an <code>Action={name}&{p1}={v1}&p2={v2}...</code> query string. The ensuing <code>{service_api}</code> refers to a supported action <code>{name}</code> plus any required input parameters. Alternatively, <code>path</code> can be used for an AWS service path-based API. The ensuing  <code>service_api</code> refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of <code><a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html">GetObject</a></code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket={bucket}&Key={key}</code> or  <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code></p>
   * </li></ul>
   */
  uri?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.</p>
   */
  connectionType?: ConnectionType | string;

  /**
   * <p>The (<a href="https://docs.aws.amazon.com/apigateway/api-reference/resource/vpc-link/#id"><code>id</code></a>) of the <a>VpcLink</a> used for the integration when <code>connectionType=VPC_LINK</code> and undefined, otherwise.</p>
   */
  connectionId?: string;

  /**
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string <code>arn:aws:iam::\*:user/\*</code>. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  credentials?: string;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of  <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.</p>
   */
  requestParameters?: { [key: string]: string };

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.</p>
   */
  requestTemplates?: { [key: string]: string };

  /**
   * <div>
   *         <p>
   *             Specifies how the method request body of an unmapped content type will be passed through the integration request
   *             to the back end without transformation. A content type is unmapped if no mapping template is defined in the integration
   *             or the content type does not match any of the mapped content types, as specified in <code>requestTemplates</code>.
   *             The valid value is one of the following:
   *         </p>
   *         <ul>
   *           <li>
   *             <code>WHEN_NO_MATCH</code>: passes the method request body through the integration request to the back end without transformation
   *             when the method request content type does not match any content type associated with the mapping templates defined in the integration request.
   *           </li>
   *           <li>
   *             <code>WHEN_NO_TEMPLATES</code>: passes the method request body through the integration request to the back end without transformation
   *             when no mapping template is defined in the integration request. If a template is defined when this option is selected, the method request
   *             of an unmapped content-type will be rejected with an HTTP <code>415 Unsupported Media Type</code> response.
   *           </li>
   *           <li>
   *             <code>NEVER</code>: rejects the method request with an HTTP <code>415 Unsupported Media Type</code> response when either the method
   *             request content type does not match any content type associated with the mapping templates defined in the integration request or
   *             no mapping template is defined in the integration request.
   *           </li>
   *         </ul>
   *       </div>
   */
  passthroughBehavior?: string;

  /**
   * <p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p>
   *       <ul>
   *         <li><p><code>CONVERT_TO_BINARY</code>: Converts a request payload from a Base64-encoded string to the corresponding binary blob.</p></li>
   *         <li><p><code>CONVERT_TO_TEXT</code>: Converts a request payload from a binary blob to a Base64-encoded string.</p></li>
   *       </ul>
   *       <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p>
   */
  contentHandling?: ContentHandlingStrategy | string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.</p>
   */
  timeoutInMillis?: number;

  /**
   * <p>Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the <code>cacheNamespace</code>. You can specify the same <code>cacheNamespace</code> across resources to return the same cached data for requests to different resources.</p>
   */
  cacheNamespace?: string;

  /**
   * <p>A list of request parameters whose values API Gateway caches. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for <a>Method</a> <code>requestParameters</code>.</p>
   */
  cacheKeyParameters?: string[];

  /**
   * <p>Specifies the integration's responses.</p>
   *         <div class="remarks">
   *     <p></p>
   *     <h4>Example: Get integration responses of a method</h4>
   *     <h5>Request</h5>
   *     <p></p>
   *     <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200 HTTP/1.1
   * Content-Type: application/json
   * Host: apigateway.us-east-1.amazonaws.com
   * X-Amz-Date: 20160607T191449Z
   * Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160607/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}
   * </code></pre>
   *     <h5>Response</h5>
   *     <p>The successful response returns <code>200 OK</code> status and a payload as follows:</p>
   *     <pre><code>{
   *   "_links": {
   *     "curies": {
   *       "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html",
   *       "name": "integrationresponse",
   *       "templated": true
   *     },
   *     "self": {
   *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200",
   *       "title": "200"
   *     },
   *     "integrationresponse:delete": {
   *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200"
   *     },
   *     "integrationresponse:update": {
   *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200"
   *     }
   *   },
   *   "responseParameters": {
   *     "method.response.header.Content-Type": "'application/xml'"
   *   },
   *   "responseTemplates": {
   *     "application/json": "$util.urlDecode(\"%3CkinesisStreams%3E#foreach($stream in $input.path('$.StreamNames'))%3Cstream%3E%3Cname%3E$stream%3C/name%3E%3C/stream%3E#end%3C/kinesisStreams%3E\")\n"
   *   },
   *   "statusCode": "200"
   * }</code></pre>
   *     <p></p>
   *         </div>
   *         <div class="seeAlso">
   *           <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a>
   *         </div>
   */
  integrationResponses?: { [key: string]: IntegrationResponse };

  /**
   * <p>Specifies the TLS configuration for an integration.</p>
   */
  tlsConfig?: TlsConfig;
}

export namespace Integration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Integration): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template. <!-- API Gateway sends back the status code to the caller as the HTTP status code. Parameters and models can be used to transform the response from the method's integration.--></p>
 *         <div class="remarks">
 *           <p></p>
 *           <h4>Example: A <b>MethodResponse</b> instance of an API</h4>
 *           <h5>Request</h5>
 *           <p>The example request retrieves a <b>MethodResponse</b> of the 200 status code.</p>
 *           <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200 HTTP/1.1
 * Content-Type: application/json
 * Host: apigateway.us-east-1.amazonaws.com
 * X-Amz-Date: 20160603T222952Z
 * Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160603/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre>
 *           <h5>Response</h5>
 *           <p>The successful response returns <code>200 OK</code> status and a payload as follows:</p>
 *           <pre><code>{
 *   "_links": {
 *     "curies": {
 *       "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html",
 *       "name": "methodresponse",
 *       "templated": true
 *     },
 *     "self": {
 *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200",
 *       "title": "200"
 *     },
 *     "methodresponse:delete": {
 *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200"
 *     },
 *     "methodresponse:update": {
 *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200"
 *     }
 *   },
 *   "responseModels": {
 *     "application/json": "Empty"
 *   },
 *   "responseParameters": {
 *     "method.response.header.Content-Type": false
 *   },
 *   "statusCode": "200"
 * }</code></pre>
 *           <p></p>
 *       </div>
 *       <div class="seeAlso">
 *         <a>Method</a>, <a>IntegrationResponse</a>, <a>Integration</a>
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a>
 *       </div>
 */
export interface MethodResponse {
  /**
   * <p>The method response's status code.</p>
   */
  statusCode?: string;

  /**
   * <p>A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header and the value specifies whether the associated method response header is required or not. The expression of the key must match the pattern <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. API Gateway passes certain integration response data to the method response headers specified here according to the mapping you prescribe in the API's <a>IntegrationResponse</a>. The integration response data that can be mapped include an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)</p>
   */
  responseParameters?: { [key: string]: boolean };

  /**
   * <p>Specifies the <a>Model</a> resources used for the response's content-type. Response models are represented as a key/value map, with a content-type as the key and a <a>Model</a> name as the value.</p>
   */
  responseModels?: { [key: string]: string };
}

export namespace MethodResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MethodResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Represents a client-facing interface by which the client calls the API to access back-end resources. A <b>Method</b> resource is
 *             integrated with an <a>Integration</a> resource. Both consist of a request and one or more responses. The method request takes
 *             the client input that is passed to the back end through the integration request. A method response returns the output from
 *             the back end to the client through an integration response. A method request is embodied in a <b>Method</b> resource, whereas
 *             an integration request is embodied in an <a>Integration</a> resource.  On the other hand, a method response is represented
 *             by a <a>MethodResponse</a> resource, whereas an integration response is represented by an <a>IntegrationResponse</a> resource.
 *         </p>
 *         <div class="remarks">
 *           <p></p>
 *           <h4>Example: Retrive the GET method on a specified resource</h4>
 *           <h5>Request</h5>
 *           <p>The following example request retrieves the information about the GET method on an API resource (<code>3kzxbg5sa2</code>) of an API (<code>fugvjdxtri</code>). </p>
 *           <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET HTTP/1.1
 * Content-Type: application/json
 * Host: apigateway.us-east-1.amazonaws.com
 * X-Amz-Date: 20160603T210259Z
 * Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160603/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre>
 *           <h5>Response</h5>
 *           <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p>
 *           <pre><code>{
 *   "_links": {
 *     "curies": [
 *       {
 *         "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html",
 *         "name": "integration",
 *         "templated": true
 *       },
 *       {
 *         "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html",
 *         "name": "integrationresponse",
 *         "templated": true
 *       },
 *       {
 *         "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-{rel}.html",
 *         "name": "method",
 *         "templated": true
 *       },
 *       {
 *         "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html",
 *         "name": "methodresponse",
 *         "templated": true
 *       }
 *     ],
 *     "self": {
 *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET",
 *       "name": "GET",
 *       "title": "GET"
 *     },
 *     "integration:put": {
 *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration"
 *     },
 *     "method:delete": {
 *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET"
 *     },
 *     "method:integration": {
 *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration"
 *     },
 *     "method:responses": {
 *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200",
 *       "name": "200",
 *       "title": "200"
 *     },
 *     "method:update": {
 *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET"
 *     },
 *     "methodresponse:put": {
 *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/{status_code}",
 *       "templated": true
 *     }
 *   },
 *   "apiKeyRequired": true,
 *   "authorizationType": "NONE",
 *   "httpMethod": "GET",
 *   "_embedded": {
 *     "method:integration": {
 *       "_links": {
 *         "self": {
 *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration"
 *         },
 *         "integration:delete": {
 *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration"
 *         },
 *         "integration:responses": {
 *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200",
 *           "name": "200",
 *           "title": "200"
 *         },
 *         "integration:update": {
 *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration"
 *         },
 *         "integrationresponse:put": {
 *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/{status_code}",
 *           "templated": true
 *         }
 *       },
 *       "cacheKeyParameters": [],
 *       "cacheNamespace": "3kzxbg5sa2",
 *       "credentials": "arn:aws:iam::123456789012:role/apigAwsProxyRole",
 *       "httpMethod": "POST",
 *       "passthroughBehavior": "WHEN_NO_MATCH",
 *       "requestParameters": {
 *         "integration.request.header.Content-Type": "'application/x-amz-json-1.1'"
 *       },
 *       "requestTemplates": {
 *         "application/json": "{\n}"
 *       },
 *       "type": "AWS",
 *       "uri": "arn:aws:apigateway:us-east-1:kinesis:action/ListStreams",
 *       "_embedded": {
 *         "integration:responses": {
 *           "_links": {
 *             "self": {
 *               "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200",
 *               "name": "200",
 *               "title": "200"
 *             },
 *             "integrationresponse:delete": {
 *               "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200"
 *             },
 *             "integrationresponse:update": {
 *               "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200"
 *             }
 *           },
 *           "responseParameters": {
 *             "method.response.header.Content-Type": "'application/xml'"
 *           },
 *           "responseTemplates": {
 *             "application/json": "$util.urlDecode(\"%3CkinesisStreams%3E%23foreach(%24stream%20in%20%24input.path(%27%24.StreamNames%27))%3Cstream%3E%3Cname%3E%24stream%3C%2Fname%3E%3C%2Fstream%3E%23end%3C%2FkinesisStreams%3E\")"
 *           },
 *           "statusCode": "200"
 *         }
 *       }
 *     },
 *     "method:responses": {
 *       "_links": {
 *         "self": {
 *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200",
 *           "name": "200",
 *           "title": "200"
 *         },
 *         "methodresponse:delete": {
 *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200"
 *         },
 *         "methodresponse:update": {
 *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200"
 *         }
 *       },
 *       "responseModels": {
 *         "application/json": "Empty"
 *       },
 *       "responseParameters": {
 *         "method.response.header.Content-Type": false
 *       },
 *       "statusCode": "200"
 *     }
 *   }
 * }</code></pre>
 *           <p>In the example above, the response template for the <code>200 OK</code> response maps the JSON output from the <code>ListStreams</code> action in the back end to an XML output. The mapping template is URL-encoded as <code>%3CkinesisStreams%3E%23foreach(%24stream%20in%20%24input.path(%27%24.StreamNames%27))%3Cstream%3E%3Cname%3E%24stream%3C%2Fname%3E%3C%2Fstream%3E%23end%3C%2FkinesisStreams%3E</code> and the output is decoded using the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#util-templat-reference">$util.urlDecode()</a> helper function.</p>
 *       </div>
 *       <div class="seeAlso">
 *         <a>MethodResponse</a>, <a>Integration</a>, <a>IntegrationResponse</a>, <a>Resource</a>,
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings.html">Set up an API's method</a>
 *       </div>
 */
export interface Method {
  /**
   * <p>The method's HTTP verb.</p>
   */
  httpMethod?: string;

  /**
   * <p>The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>
   */
  authorizationType?: string;

  /**
   * <p>The identifier of an <a>Authorizer</a> to use on this method. The <code>authorizationType</code> must be <code>CUSTOM</code>.</p>
   */
  authorizerId?: string;

  /**
   * <p>A boolean flag specifying whether a valid <a>ApiKey</a> is required to invoke this method.</p>
   */
  apiKeyRequired?: boolean;

  /**
   * <p>The identifier of a <a>RequestValidator</a> for request validation.</p>
   */
  requestValidatorId?: string;

  /**
   * <p>A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example.</p>
   */
  operationName?: string;

  /**
   * <p>A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key is a method request parameter name matching the pattern of  <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>).  The method request parameter names defined here are available in <a>Integration</a> to be mapped to integration request parameters or templates.</p>
   */
  requestParameters?: { [key: string]: boolean };

  /**
   * <p>A key-value map specifying data schemas, represented by <a>Model</a> resources, (as the mapped value) of the request payloads of given content types (as the mapping key).</p>
   */
  requestModels?: { [key: string]: string };

  /**
   * <p>Gets a method response associated with a given HTTP status code. </p>
   *       <div class="remarks">
   *         <p>The collection of method responses are encapsulated in a key-value map, where the key is a response's HTTP status code and the value is a <a>MethodResponse</a> resource that specifies the response returned to the caller from the back end through the integration response.</p>
   *         <h4>Example: Get a 200 OK response of a GET method</h4>
   *         <h5>Request</h5>
   *         <p></p>
   *         <pre><code>GET /restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200 HTTP/1.1
   * Content-Type: application/json
   * Host: apigateway.us-east-1.amazonaws.com
   * Content-Length: 117
   * X-Amz-Date: 20160613T215008Z
   * Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160613/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre>
   *         <h5>Response</h5>
   *         <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p>
   *         <pre><code>{
   *   "_links": {
   *     "curies": {
   *       "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html",
   *       "name": "methodresponse",
   *       "templated": true
   *     },
   *     "self": {
   *       "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200",
   *       "title": "200"
   *     },
   *     "methodresponse:delete": {
   *       "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200"
   *     },
   *     "methodresponse:update": {
   *       "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200"
   *     }
   *   },
   *   "responseModels": {
   *     "application/json": "Empty"
   *   },
   *   "responseParameters": {
   *     "method.response.header.operator": false,
   *     "method.response.header.operand_2": false,
   *     "method.response.header.operand_1": false
   *   },
   *   "statusCode": "200"
   * }</code></pre>
   *         <p></p>
   *       </div>
   *       <div class="seeAlso">
   *         <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-method-response.html">AWS CLI</a>
   *       </div>
   */
  methodResponses?: { [key: string]: MethodResponse };

  /**
   * <p>Gets the method's integration responsible for passing the client-submitted request to the back end and performing necessary transformations to make the request compliant with the back end.</p>
   *       <div class="remarks">
   *         <p></p>
   *         <h4>Example: </h4>
   *         <h5>Request</h5>
   *         <p></p>
   *         <pre><code>GET /restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration HTTP/1.1
   * Content-Type: application/json
   * Host: apigateway.us-east-1.amazonaws.com
   * Content-Length: 117
   * X-Amz-Date: 20160613T213210Z
   * Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160613/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre>
   *         <h5>Response</h5>
   *         <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p>
   *         <pre><code>{
   *   "_links": {
   *     "curies": [
   *       {
   *         "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html",
   *         "name": "integration",
   *         "templated": true
   *       },
   *       {
   *         "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html",
   *         "name": "integrationresponse",
   *         "templated": true
   *       }
   *     ],
   *     "self": {
   *       "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration"
   *     },
   *     "integration:delete": {
   *       "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration"
   *     },
   *     "integration:responses": {
   *       "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200",
   *       "name": "200",
   *       "title": "200"
   *     },
   *     "integration:update": {
   *       "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration"
   *     },
   *     "integrationresponse:put": {
   *       "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/{status_code}",
   *       "templated": true
   *     }
   *   },
   *   "cacheKeyParameters": [],
   *   "cacheNamespace": "0cjtch",
   *   "credentials": "arn:aws:iam::123456789012:role/apigAwsProxyRole",
   *   "httpMethod": "POST",
   *   "passthroughBehavior": "WHEN_NO_MATCH",
   *   "requestTemplates": {
   *     "application/json": "{\n    \"a\":  \"$input.params('operand1')\",\n    \"b\":  \"$input.params('operand2')\", \n    \"op\": \"$input.params('operator')\"   \n}"
   *   },
   *   "type": "AWS",
   *   "uri": "arn:aws:apigateway:us-west-2:lambda:path//2015-03-31/functions/arn:aws:lambda:us-west-2:123456789012:function:Calc/invocations",
   *   "_embedded": {
   *     "integration:responses": {
   *       "_links": {
   *         "self": {
   *           "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200",
   *           "name": "200",
   *           "title": "200"
   *         },
   *         "integrationresponse:delete": {
   *           "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200"
   *         },
   *         "integrationresponse:update": {
   *           "href": "/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200"
   *         }
   *       },
   *       "responseParameters": {
   *         "method.response.header.operator": "integration.response.body.op",
   *         "method.response.header.operand_2": "integration.response.body.b",
   *         "method.response.header.operand_1": "integration.response.body.a"
   *       },
   *       "responseTemplates": {
   *         "application/json": "#set($res = $input.path('$'))\n{\n    \"result\": \"$res.a, $res.b, $res.op => $res.c\",\n  \"a\" : \"$res.a\",\n  \"b\" : \"$res.b\",\n  \"op\" : \"$res.op\",\n  \"c\" : \"$res.c\"\n}"
   *       },
   *       "selectionPattern": "",
   *       "statusCode": "200"
   *     }
   *   }
   * }</code></pre>
   *         <p></p>
   *       </div>
   *       <div class="seeAlso">
   *         <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-integration.html">AWS CLI</a>
   *       </div>
   */
  methodIntegration?: Integration;

  /**
   * <p>A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  authorizationScopes?: string[];
}

export namespace Method {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Method): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an API resource.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a>
 *       </div>
 */
export interface Resource {
  /**
   * <p>The resource's identifier.</p>
   */
  id?: string;

  /**
   * <p>The parent resource's identifier.</p>
   */
  parentId?: string;

  /**
   * <p>The last path segment for this resource.</p>
   */
  pathPart?: string;

  /**
   * <p>The full path for this resource.</p>
   */
  path?: string;

  /**
   * <p>Gets an API resource's method of a given HTTP verb.</p>
   *       <div class="remarks">
   *         <p>The resource methods are a map of methods indexed by methods' HTTP verbs enabled on the resource. This method map is included in the <code>200 OK</code> response of the <code>GET /restapis/{restapi_id}/resources/{resource_id}</code> or <code>GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods</code> request.</p>
   *         <h4>Example: Get the GET method of an API resource</h4>
   *         <h5>Request</h5>
   *         <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET HTTP/1.1
   * Content-Type: application/json
   * Host: apigateway.us-east-1.amazonaws.com
   * X-Amz-Date: 20170223T031827Z
   * Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20170223/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre>
   *         <h5>Response</h5>
   *         <pre><code>{
   *   "_links": {
   *     "curies": [
   *       {
   *         "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html",
   *         "name": "integration",
   *         "templated": true
   *       },
   *       {
   *         "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html",
   *         "name": "integrationresponse",
   *         "templated": true
   *       },
   *       {
   *         "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-{rel}.html",
   *         "name": "method",
   *         "templated": true
   *       },
   *       {
   *         "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html",
   *         "name": "methodresponse",
   *         "templated": true
   *       }
   *     ],
   *     "self": {
   *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET",
   *       "name": "GET",
   *       "title": "GET"
   *     },
   *     "integration:put": {
   *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration"
   *     },
   *     "method:delete": {
   *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET"
   *     },
   *     "method:integration": {
   *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration"
   *     },
   *     "method:responses": {
   *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200",
   *       "name": "200",
   *       "title": "200"
   *     },
   *     "method:update": {
   *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET"
   *     },
   *     "methodresponse:put": {
   *       "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/{status_code}",
   *       "templated": true
   *     }
   *   },
   *   "apiKeyRequired": false,
   *   "authorizationType": "NONE",
   *   "httpMethod": "GET",
   *   "_embedded": {
   *     "method:integration": {
   *       "_links": {
   *         "self": {
   *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration"
   *         },
   *         "integration:delete": {
   *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration"
   *         },
   *         "integration:responses": {
   *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200",
   *           "name": "200",
   *           "title": "200"
   *         },
   *         "integration:update": {
   *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration"
   *         },
   *         "integrationresponse:put": {
   *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/{status_code}",
   *           "templated": true
   *         }
   *       },
   *       "cacheKeyParameters": [],
   *       "cacheNamespace": "3kzxbg5sa2",
   *       "credentials": "arn:aws:iam::123456789012:role/apigAwsProxyRole",
   *       "httpMethod": "POST",
   *       "passthroughBehavior": "WHEN_NO_MATCH",
   *       "requestParameters": {
   *         "integration.request.header.Content-Type": "'application/x-amz-json-1.1'"
   *       },
   *       "requestTemplates": {
   *         "application/json": "{\n}"
   *       },
   *       "type": "AWS",
   *       "uri": "arn:aws:apigateway:us-east-1:kinesis:action/ListStreams",
   *       "_embedded": {
   *         "integration:responses": {
   *           "_links": {
   *             "self": {
   *               "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200",
   *               "name": "200",
   *               "title": "200"
   *             },
   *             "integrationresponse:delete": {
   *               "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200"
   *             },
   *             "integrationresponse:update": {
   *               "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200"
   *             }
   *           },
   *           "responseParameters": {
   *             "method.response.header.Content-Type": "'application/xml'"
   *           },
   *           "responseTemplates": {
   *             "application/json": "$util.urlDecode(\"%3CkinesisStreams%3E#foreach($stream in $input.path('$.StreamNames'))%3Cstream%3E%3Cname%3E$stream%3C/name%3E%3C/stream%3E#end%3C/kinesisStreams%3E\")\n"
   *           },
   *           "statusCode": "200"
   *         }
   *       }
   *     },
   *     "method:responses": {
   *       "_links": {
   *         "self": {
   *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200",
   *           "name": "200",
   *           "title": "200"
   *         },
   *         "methodresponse:delete": {
   *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200"
   *         },
   *         "methodresponse:update": {
   *           "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200"
   *         }
   *       },
   *       "responseModels": {
   *         "application/json": "Empty"
   *       },
   *       "responseParameters": {
   *         "method.response.header.Content-Type": false
   *       },
   *       "statusCode": "200"
   *     }
   *   }
   * }</code></pre>
   *         <p>If the <code>OPTIONS</code> is enabled on the resource, you can follow the example here to get that method. Just replace the <code>GET</code> of the last path segment in the request URL with <code>OPTIONS</code>.</p>
   *       </div>
   *       <div class="seeAlso">
   *       </div>
   */
  resourceMethods?: { [key: string]: Method };
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

/**
 * <p>The POST Request to add a new <a>RestApi</a> resource to your collection.</p>
 */
export interface CreateRestApiRequest {
  /**
   * <p>[Required] The name of the <a>RestApi</a>.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the <a>RestApi</a>.</p>
   */
  description?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  version?: string;

  /**
   * <p>The ID of the <a>RestApi</a> that you want to clone from.</p>
   */
  cloneFrom?: string;

  /**
   * <p>The list of binary media types supported by the <a>RestApi</a>. By default, the <a>RestApi</a> supports only UTF-8-encoded text payloads.</p>
   */
  binaryMediaTypes?: string[];

  /**
   * <p>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</p>
   */
  minimumCompressionSize?: number;

  /**
   * <p>The source of the API key for metering requests according to a usage plan. Valid values are: <ul><li><code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. </li><li><code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.</li></ul></p>
   */
  apiKeySource?: ApiKeySourceType | string;

  /**
   * <p>The endpoint configuration of this <a>RestApi</a> showing the endpoint types of the API.</p>
   */
  endpointConfiguration?: EndpointConfiguration;

  /**
   * A stringified JSON policy document that applies to this RestApi regardless of the caller and <a>Method</a> configuration.
   */
  policy?: string;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  disableExecuteApiEndpoint?: boolean;
}

export namespace CreateRestApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRestApiRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a REST API.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a>
 *       </div>
 */
export interface RestApi {
  /**
   * <p>The API's identifier. This identifier is unique across all of your APIs in API Gateway.</p>
   */
  id?: string;

  /**
   * <p>The API's name.</p>
   */
  name?: string;

  /**
   * <p>The API's description.</p>
   */
  description?: string;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>A version identifier for the API.</p>
   */
  version?: string;

  /**
   * <p>The warning messages reported when <code>failonwarnings</code> is turned on during API import.</p>
   */
  warnings?: string[];

  /**
   * <p>The list of binary media types supported by the <a>RestApi</a>. By default, the <a>RestApi</a> supports only UTF-8-encoded text payloads.</p>
   */
  binaryMediaTypes?: string[];

  /**
   * <p>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</p>
   */
  minimumCompressionSize?: number;

  /**
   * <p>The source of the API key for metering requests according to a usage plan. Valid values are: <ul><li><code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. </li><li><code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.</li></ul></p>
   */
  apiKeySource?: ApiKeySourceType | string;

  /**
   * <p>The endpoint configuration of this <a>RestApi</a> showing the endpoint types of the API.</p>
   */
  endpointConfiguration?: EndpointConfiguration;

  /**
   * <p>A stringified JSON policy document that applies to this RestApi regardless of the caller and <a>Method</a> configuration.</p>
   */
  policy?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</p>
   */
  disableExecuteApiEndpoint?: boolean;
}

export namespace RestApi {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestApi): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration settings of a canary deployment.</p>
 */
export interface CanarySettings {
  /**
   * <p>The percent (0-100) of traffic diverted to a canary deployment.</p>
   */
  percentTraffic?: number;

  /**
   * <p>The ID of the canary deployment.</p>
   */
  deploymentId?: string;

  /**
   * <p>Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary. These stage variables are represented as a string-to-string map between stage variable names and their values.</p>
   */
  stageVariableOverrides?: { [key: string]: string };

  /**
   * <p>A Boolean flag to indicate whether the canary deployment uses the stage cache or not.</p>
   */
  useStageCache?: boolean;
}

export namespace CanarySettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CanarySettings): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to create a <a>Stage</a> resource.</p>
 */
export interface CreateStageRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name for the <a>Stage</a> resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  stageName: string | undefined;

  /**
   * <p>[Required] The identifier of the <a>Deployment</a> resource for the <a>Stage</a> resource.</p>
   */
  deploymentId: string | undefined;

  /**
   * <p>The description of the <a>Stage</a> resource.</p>
   */
  description?: string;

  /**
   * <p>Whether cache clustering is enabled for the stage.</p>
   */
  cacheClusterEnabled?: boolean;

  /**
   * <p>The stage's cache cluster size.</p>
   */
  cacheClusterSize?: CacheClusterSize | string;

  /**
   * <p>A map that defines the stage variables for the new <a>Stage</a> resource. Variable names
   *           can have alphanumeric and underscore characters, and the values must match
   *           <code>[A-Za-z0-9-._~:/?#&=,]+</code>.</p>
   */
  variables?: { [key: string]: string };

  /**
   * <p>The version of the associated API documentation.</p>
   */
  documentationVersion?: string;

  /**
   * <p>The canary deployment settings of this stage.</p>
   */
  canarySettings?: CanarySettings;

  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>
   */
  tracingEnabled?: boolean;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateStageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStageRequest): any => ({
    ...obj,
  });
}

export enum CacheClusterStatus {
  AVAILABLE = "AVAILABLE",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  FLUSH_IN_PROGRESS = "FLUSH_IN_PROGRESS",
  NOT_AVAILABLE = "NOT_AVAILABLE",
}

export enum UnauthorizedCacheControlHeaderStrategy {
  FAIL_WITH_403 = "FAIL_WITH_403",
  SUCCEED_WITHOUT_RESPONSE_HEADER = "SUCCEED_WITHOUT_RESPONSE_HEADER",
  SUCCEED_WITH_RESPONSE_HEADER = "SUCCEED_WITH_RESPONSE_HEADER",
}

/**
 * <p>Specifies the method setting properties.</p>
 */
export interface MethodSetting {
  /**
   * <p>Specifies whether Amazon CloudWatch metrics are enabled for this method. The PATCH path for this setting is <code>/{method_setting_key}/metrics/enabled</code>, and the value is a Boolean.</p>
   */
  metricsEnabled?: boolean;

  /**
   * <p>Specifies the logging level for this method, which affects the log entries pushed to Amazon CloudWatch Logs. The PATCH path for this setting is <code>/{method_setting_key}/logging/loglevel</code>, and the available levels are <code>OFF</code>, <code>ERROR</code>, and <code>INFO</code>. Choose <code>ERROR</code> to write only error-level entries to CloudWatch Logs, or choose <code>INFO</code> to include all <code>ERROR</code> events as well as extra informational events.</p>
   */
  loggingLevel?: string;

  /**
   * <p>Specifies whether data trace logging is enabled for this method, which affects the log entries pushed to Amazon CloudWatch Logs. The PATCH path for this setting is <code>/{method_setting_key}/logging/dataTrace</code>, and the value is a Boolean.</p>
   */
  dataTraceEnabled?: boolean;

  /**
   * <p>Specifies the throttling burst limit. The PATCH path for this setting is <code>/{method_setting_key}/throttling/burstLimit</code>, and the value is an integer.</p>
   */
  throttlingBurstLimit?: number;

  /**
   * <p>Specifies the throttling rate limit. The PATCH path for this setting is <code>/{method_setting_key}/throttling/rateLimit</code>, and the value is a double.</p>
   */
  throttlingRateLimit?: number;

  /**
   * <p>Specifies whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached. The PATCH path for this setting is <code>/{method_setting_key}/caching/enabled</code>, and the value is a Boolean.</p>
   */
  cachingEnabled?: boolean;

  /**
   * <p>Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached. The PATCH path for this setting is <code>/{method_setting_key}/caching/ttlInSeconds</code>, and the value is an integer.</p>
   */
  cacheTtlInSeconds?: number;

  /**
   * <p>Specifies whether the cached responses are encrypted. The PATCH path for this setting is <code>/{method_setting_key}/caching/dataEncrypted</code>, and the value is a Boolean.</p>
   */
  cacheDataEncrypted?: boolean;

  /**
   * <p>Specifies whether authorization is required for a cache invalidation request. The PATCH path for this setting is <code>/{method_setting_key}/caching/requireAuthorizationForCacheControl</code>, and the value is a Boolean.</p>
   */
  requireAuthorizationForCacheControl?: boolean;

  /**
   * <p>Specifies how to handle unauthorized requests for cache invalidation. The PATCH path for this setting is <code>/{method_setting_key}/caching/unauthorizedCacheControlHeaderStrategy</code>, and the available values are <code>FAIL_WITH_403</code>, <code>SUCCEED_WITH_RESPONSE_HEADER</code>, <code>SUCCEED_WITHOUT_RESPONSE_HEADER</code>.</p>
   */
  unauthorizedCacheControlHeaderStrategy?: UnauthorizedCacheControlHeaderStrategy | string;
}

export namespace MethodSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MethodSetting): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploy an API</a>
 *       </div>
 */
export interface Stage {
  /**
   * <p>The identifier of the <a>Deployment</a> that the stage points to.</p>
   */
  deploymentId?: string;

  /**
   * <p>The identifier of a client certificate for an API stage.</p>
   */
  clientCertificateId?: string;

  /**
   * <p>The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  stageName?: string;

  /**
   * <p>The stage's description.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether a cache cluster is enabled for the stage.</p>
   */
  cacheClusterEnabled?: boolean;

  /**
   * <p>The size of the cache cluster for the stage, if enabled.</p>
   */
  cacheClusterSize?: CacheClusterSize | string;

  /**
   * <p>The status of the cache cluster for the stage, if enabled.</p>
   */
  cacheClusterStatus?: CacheClusterStatus | string;

  /**
   * <p>A map that defines the method settings for a <a>Stage</a> resource. Keys (designated as <code>/{method_setting_key</code> below) are method paths defined as <code>{resource_path}/{http_method}</code> for an individual method override, or <code>/\*\/\*</code> for overriding all methods in the stage.  <!-- Any forward slash ("/") characters in the <code>resource_path</code> part must be encoded as "~1" as in, for example, <code>~1resource~1sub-resource/GET</code>.--></p>
   */
  methodSettings?: { [key: string]: MethodSetting };

  /**
   * <p>A map that defines the stage variables for a <a>Stage</a> resource. Variable names can
   *           have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&=,]+</code>.</p>
   */
  variables?: { [key: string]: string };

  /**
   * <p>The version of the associated API documentation.</p>
   */
  documentationVersion?: string;

  /**
   * <p>Settings for logging access in this stage.</p>
   */
  accessLogSettings?: AccessLogSettings;

  /**
   * <p>Settings for the canary deployment in this stage.</p>
   */
  canarySettings?: CanarySettings;

  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>
   */
  tracingEnabled?: boolean;

  /**
   * <p>The ARN of the WebAcl associated with the <a>Stage</a>.</p>
   */
  webAclArn?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The timestamp when the stage last updated.</p>
   */
  lastUpdatedDate?: Date;
}

export namespace Stage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Stage): any => ({
    ...obj,
  });
}

export enum QuotaPeriodType {
  DAY = "DAY",
  MONTH = "MONTH",
  WEEK = "WEEK",
}

/**
 * <p>Quotas configured for a usage plan.</p>
 */
export interface QuotaSettings {
  /**
   * <p>The maximum number of requests that can be made in a given time period.</p>
   */
  limit?: number;

  /**
   * <p>The day that a time period starts. For example, with a time period of <code>WEEK</code>, an offset of <code>0</code> starts on Sunday, and an offset of <code>1</code> starts on Monday.</p>
   */
  offset?: number;

  /**
   * <p>The time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".</p>
   */
  period?: QuotaPeriodType | string;
}

export namespace QuotaSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QuotaSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload.</p>
 */
export interface CreateUsagePlanRequest {
  /**
   * <p>[Required] The name of the usage plan.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the usage plan.</p>
   */
  description?: string;

  /**
   * <p>The associated API stages of the usage plan.</p>
   */
  apiStages?: ApiStage[];

  /**
   * <p>The throttling limits of the usage plan.</p>
   */
  throttle?: ThrottleSettings;

  /**
   * <p>The quota of the usage plan.</p>
   */
  quota?: QuotaSettings;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateUsagePlanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUsagePlanRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a usage plan than can specify who can assess associated API stages with specified request limits and quotas.</p>
 *       <div class="remarks">
 *         <p>In a usage plan, you associate an API by specifying the API's Id and a stage name of the specified API. You add plan customers by adding API keys to the plan. </p>
 *       </div>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>
 *       </div>
 */
export interface UsagePlan {
  /**
   * <p>The identifier of a <a>UsagePlan</a> resource.</p>
   */
  id?: string;

  /**
   * <p>The name of a usage plan.</p>
   */
  name?: string;

  /**
   * <p>The description of a usage plan.</p>
   */
  description?: string;

  /**
   * <p>The associated API stages of a usage plan.</p>
   */
  apiStages?: ApiStage[];

  /**
   * <p>The request throttle limits of a usage plan.</p>
   */
  throttle?: ThrottleSettings;

  /**
   * <p>The maximum number of permitted requests per a given unit time interval.</p>
   */
  quota?: QuotaSettings;

  /**
   * <p>The AWS Markeplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.</p>
   */
  productCode?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace UsagePlan {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsagePlan): any => ({
    ...obj,
  });
}

/**
 * <p>The POST request to create a usage plan key for adding an existing API key to a usage plan.</p>
 */
export interface CreateUsagePlanKeyRequest {
  /**
   * <p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-created <a>UsagePlanKey</a> resource representing a plan customer.</p>
   */
  usagePlanId: string | undefined;

  /**
   * <p>[Required] The identifier of a <a>UsagePlanKey</a> resource for a plan customer.</p>
   */
  keyId: string | undefined;

  /**
   * <p>[Required] The type of a <a>UsagePlanKey</a> resource for a plan customer.</p>
   */
  keyType: string | undefined;
}

export namespace CreateUsagePlanKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUsagePlanKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a usage plan key to identify a plan customer.</p>
 *     <div class="remarks">
 *       <p>To associate an API stage with a selected API key in a usage plan, you must create a UsagePlanKey resource to represent the selected <a>ApiKey</a>.</p>
 *     </div>"
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>
 *     </div>
 */
export interface UsagePlanKey {
  /**
   * <p>The Id of a usage plan key.</p>
   */
  id?: string;

  /**
   * <p>The type of a usage plan key. Currently, the valid key type is <code>API_KEY</code>.</p>
   */
  type?: string;

  /**
   * <p>The value of a usage plan key.</p>
   */
  value?: string;

  /**
   * <p>The name of a usage plan key.</p>
   */
  name?: string;
}

export namespace UsagePlanKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsagePlanKey): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.</p>
 */
export interface CreateVpcLinkRequest {
  /**
   * <p>[Required] The name used to label and identify the VPC link.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the VPC link.</p>
   */
  description?: string;

  /**
   * <p>[Required] The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS account of the API owner.</p>
   */
  targetArns: string[] | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateVpcLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcLinkRequest): any => ({
    ...obj,
  });
}

export enum VpcLinkStatus {
  AVAILABLE = "AVAILABLE",
  DELETING = "DELETING",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

/**
 * <p>An API Gateway VPC link for a <a>RestApi</a> to access resources in an Amazon Virtual Private Cloud (VPC).</p>
 *         <div class="remarks">
 *           <p><p>To enable access to a resource in an Amazon Virtual Private Cloud through Amazon API Gateway, you, as an API developer, create a <a>VpcLink</a> resource targeted for one or more network load balancers of the VPC and then integrate an API method with a private integration that uses the <a>VpcLink</a>. The private integration has an integration type of <code>HTTP</code> or <code>HTTP_PROXY</code> and has a connection type of <code>VPC_LINK</code>. The integration uses the <code>connectionId</code> property to identify the <a>VpcLink</a> used.</p></p>
 *         </div>
 */
export interface VpcLink {
  /**
   * <p>The identifier of the  <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>
   */
  id?: string;

  /**
   * <p>The name used to label and identify the VPC link.</p>
   */
  name?: string;

  /**
   * <p>The description of the VPC link.</p>
   */
  description?: string;

  /**
   * <p>The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS account of the API owner.</p>
   */
  targetArns?: string[];

  /**
   * <p>The status of the VPC link. The valid values are <code>AVAILABLE</code>, <code>PENDING</code>, <code>DELETING</code>, or <code>FAILED</code>. Deploying an API will wait if the status is <code>PENDING</code> and will fail if the status is <code>DELETING</code>.</p>
   */
  status?: VpcLinkStatus | string;

  /**
   * <p>A description about the VPC link status.</p>
   */
  statusMessage?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace VpcLink {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcLink): any => ({
    ...obj,
  });
}

/**
 * <p>A request to delete the <a>ApiKey</a> resource.</p>
 */
export interface DeleteApiKeyRequest {
  /**
   * <p>[Required] The identifier of the <a>ApiKey</a> resource to be deleted.</p>
   */
  apiKey: string | undefined;
}

export namespace DeleteApiKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApiKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to delete an existing <a>Authorizer</a> resource.</p>
 */
export interface DeleteAuthorizerRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of the <a>Authorizer</a> resource.</p>
   */
  authorizerId: string | undefined;
}

export namespace DeleteAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuthorizerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to delete the <a>BasePathMapping</a> resource.</p>
 */
export interface DeleteBasePathMappingRequest {
  /**
   * <p>[Required] The domain name of the <a>BasePathMapping</a> resource to delete.</p>
   */
  domainName: string | undefined;

  /**
   * <p>[Required] The base path name of the <a>BasePathMapping</a> resource to delete.</p>
   *         <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>
   */
  basePath: string | undefined;
}

export namespace DeleteBasePathMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBasePathMappingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to delete the <a>ClientCertificate</a> resource.</p>
 */
export interface DeleteClientCertificateRequest {
  /**
   * <p>[Required] The identifier of the <a>ClientCertificate</a> resource to be deleted.</p>
   */
  clientCertificateId: string | undefined;
}

export namespace DeleteClientCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClientCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to delete a <a>Deployment</a> resource.</p>
 */
export interface DeleteDeploymentRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of the <a>Deployment</a> resource to delete.</p>
   */
  deploymentId: string | undefined;
}

export namespace DeleteDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeploymentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Deletes an existing documentation part of an API.</p>
 */
export interface DeleteDocumentationPartRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of the to-be-deleted documentation part.</p>
   */
  documentationPartId: string | undefined;
}

export namespace DeleteDocumentationPartRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDocumentationPartRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Deletes an existing documentation version of an API.</p>
 */
export interface DeleteDocumentationVersionRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The version identifier of a to-be-deleted documentation snapshot.</p>
   */
  documentationVersion: string | undefined;
}

export namespace DeleteDocumentationVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDocumentationVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to delete the <a>DomainName</a> resource.</p>
 */
export interface DeleteDomainNameRequest {
  /**
   * <p>[Required] The name of the <a>DomainName</a> resource to be deleted.</p>
   */
  domainName: string | undefined;
}

export namespace DeleteDomainNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainNameRequest): any => ({
    ...obj,
  });
}

export enum GatewayResponseType {
  ACCESS_DENIED = "ACCESS_DENIED",
  API_CONFIGURATION_ERROR = "API_CONFIGURATION_ERROR",
  AUTHORIZER_CONFIGURATION_ERROR = "AUTHORIZER_CONFIGURATION_ERROR",
  AUTHORIZER_FAILURE = "AUTHORIZER_FAILURE",
  BAD_REQUEST_BODY = "BAD_REQUEST_BODY",
  BAD_REQUEST_PARAMETERS = "BAD_REQUEST_PARAMETERS",
  DEFAULT_4XX = "DEFAULT_4XX",
  DEFAULT_5XX = "DEFAULT_5XX",
  EXPIRED_TOKEN = "EXPIRED_TOKEN",
  INTEGRATION_FAILURE = "INTEGRATION_FAILURE",
  INTEGRATION_TIMEOUT = "INTEGRATION_TIMEOUT",
  INVALID_API_KEY = "INVALID_API_KEY",
  INVALID_SIGNATURE = "INVALID_SIGNATURE",
  MISSING_AUTHENTICATION_TOKEN = "MISSING_AUTHENTICATION_TOKEN",
  QUOTA_EXCEEDED = "QUOTA_EXCEEDED",
  REQUEST_TOO_LARGE = "REQUEST_TOO_LARGE",
  RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",
  THROTTLED = "THROTTLED",
  UNAUTHORIZED = "UNAUTHORIZED",
  UNSUPPORTED_MEDIA_TYPE = "UNSUPPORTED_MEDIA_TYPE",
}

/**
 * <p>Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.</p>
 */
export interface DeleteGatewayResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
   */
  responseType: GatewayResponseType | string | undefined;
}

export namespace DeleteGatewayResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGatewayResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a delete integration request.</p>
 */
export interface DeleteIntegrationRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies a delete integration request's resource identifier.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] Specifies a delete integration request's HTTP method.</p>
   */
  httpMethod: string | undefined;
}

export namespace DeleteIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIntegrationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a delete integration response request.</p>
 */
export interface DeleteIntegrationResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies a delete integration response request's resource identifier.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] Specifies a delete integration response request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>[Required] Specifies a delete integration response request's status code.</p>
   */
  statusCode: string | undefined;
}

export namespace DeleteIntegrationResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIntegrationResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to delete an existing <a>Method</a> resource.</p>
 */
export interface DeleteMethodRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;
}

export namespace DeleteMethodRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMethodRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to delete an existing <a>MethodResponse</a> resource.</p>
 */
export interface DeleteMethodResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>[Required] The status code identifier for the <a>MethodResponse</a> resource.</p>
   */
  statusCode: string | undefined;
}

export namespace DeleteMethodResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMethodResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to delete an existing model in an existing <a>RestApi</a> resource.</p>
 */
export interface DeleteModelRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the model to delete.</p>
   */
  modelName: string | undefined;
}

export namespace DeleteModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Deletes a specified <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 */
export interface DeleteRequestValidatorRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of the <a>RequestValidator</a> to be deleted.</p>
   */
  requestValidatorId: string | undefined;
}

export namespace DeleteRequestValidatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRequestValidatorRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to delete a <a>Resource</a>.</p>
 */
export interface DeleteResourceRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of the <a>Resource</a> resource.</p>
   */
  resourceId: string | undefined;
}

export namespace DeleteResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to delete the specified API from your collection.</p>
 */
export interface DeleteRestApiRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;
}

export namespace DeleteRestApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRestApiRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to delete a <a>Stage</a> resource.</p>
 */
export interface DeleteStageRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the <a>Stage</a> resource to delete.</p>
   */
  stageName: string | undefined;
}

export namespace DeleteStageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The DELETE request to delete a usage plan of a given plan Id.</p>
 */
export interface DeleteUsagePlanRequest {
  /**
   * <p>[Required] The Id of the to-be-deleted usage plan.</p>
   */
  usagePlanId: string | undefined;
}

export namespace DeleteUsagePlanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUsagePlanRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The DELETE request to delete a usage plan key and remove the underlying API key from the associated usage plan.</p>
 */
export interface DeleteUsagePlanKeyRequest {
  /**
   * <p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-deleted <a>UsagePlanKey</a> resource representing a plan customer.</p>
   */
  usagePlanId: string | undefined;

  /**
   * <p>[Required] The Id of the <a>UsagePlanKey</a> resource to be deleted.</p>
   */
  keyId: string | undefined;
}

export namespace DeleteUsagePlanKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUsagePlanKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Deletes an existing <a>VpcLink</a> of a specified identifier.</p>
 */
export interface DeleteVpcLinkRequest {
  /**
   * <p>[Required] The identifier of the  <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>
   */
  vpcLinkId: string | undefined;
}

export namespace DeleteVpcLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcLinkRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to flush authorizer cache entries on a specified stage.</p>
 */
export interface FlushStageAuthorizersCacheRequest {
  /**
   * <p>The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the stage to flush.</p>
   */
  stageName: string | undefined;
}

export namespace FlushStageAuthorizersCacheRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlushStageAuthorizersCacheRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to flush a stage's cache.</p>
 */
export interface FlushStageCacheRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the stage to flush its cache.</p>
   */
  stageName: string | undefined;
}

export namespace FlushStageCacheRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlushStageCacheRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p>
 *         <div class="remarks">Client certificates are used to authenticate an API by the backend server. To authenticate an API client (or user), use IAM roles and policies, a custom <a>Authorizer</a> or an Amazon Cognito user pool.</div>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a>
 *       </div>
 */
export interface ClientCertificate {
  /**
   * <p>The identifier of the client certificate.</p>
   */
  clientCertificateId?: string;

  /**
   * <p>The description of the client certificate.</p>
   */
  description?: string;

  /**
   * <p>The PEM-encoded public key of the client certificate, which can be used to configure certificate authentication in the integration endpoint .</p>
   */
  pemEncodedCertificate?: string;

  /**
   * <p>The timestamp when the client certificate was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The timestamp when the client certificate will expire.</p>
   */
  expirationDate?: Date;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ClientCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>A request to generate a <a>ClientCertificate</a> resource.</p>
 */
export interface GenerateClientCertificateRequest {
  /**
   * <p>The description of the <a>ClientCertificate</a>.</p>
   */
  description?: string;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GenerateClientCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GenerateClientCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to get information about the current <a>Account</a> resource.</p>
 */
export interface GetAccountRequest {}

export namespace GetAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get information about the current <a>ApiKey</a> resource.</p>
 */
export interface GetApiKeyRequest {
  /**
   * <p>[Required] The identifier of the <a>ApiKey</a> resource.</p>
   */
  apiKey: string | undefined;

  /**
   * <p>A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains the key value.</p>
   */
  includeValue?: boolean;
}

export namespace GetApiKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApiKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get information about the current <a>ApiKeys</a> resource.</p>
 */
export interface GetApiKeysRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  /**
   * <p>The name of queried API keys.</p>
   */
  nameQuery?: string;

  /**
   * <p>The identifier of a customer in AWS Marketplace or an external system, such as a developer portal.</p>
   */
  customerId?: string;

  /**
   * <p>A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains key values.</p>
   */
  includeValues?: boolean;
}

export namespace GetApiKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApiKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to describe an existing <a>Authorizer</a> resource.</p>
 */
export interface GetAuthorizerRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of the <a>Authorizer</a> resource.</p>
   */
  authorizerId: string | undefined;
}

export namespace GetAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAuthorizerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to describe an existing <a>Authorizers</a> resource.</p>
 */
export interface GetAuthorizersRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetAuthorizersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAuthorizersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to describe a <a>BasePathMapping</a> resource.</p>
 */
export interface GetBasePathMappingRequest {
  /**
   * <p>[Required] The domain name of the <a>BasePathMapping</a> resource to be described.</p>
   */
  domainName: string | undefined;

  /**
   * <p>[Required] The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify any base path name after the domain name.</p>
   */
  basePath: string | undefined;
}

export namespace GetBasePathMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBasePathMappingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of <a>BasePathMapping</a> resources.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a>
 *       </div>
 */
export interface BasePathMappings {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: BasePathMapping[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace BasePathMappings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BasePathMappings): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get information about a collection of <a>BasePathMapping</a> resources.</p>
 */
export interface GetBasePathMappingsRequest {
  /**
   * <p>[Required] The domain name of a <a>BasePathMapping</a> resource.</p>
   */
  domainName: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetBasePathMappingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBasePathMappingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get information about the current <a>ClientCertificate</a> resource.</p>
 */
export interface GetClientCertificateRequest {
  /**
   * <p>[Required] The identifier of the <a>ClientCertificate</a> resource to be described.</p>
   */
  clientCertificateId: string | undefined;
}

export namespace GetClientCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClientCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of <a>ClientCertificate</a> resources.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a>
 *       </div>
 */
export interface ClientCertificates {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: ClientCertificate[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace ClientCertificates {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientCertificates): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get information about a collection of <a>ClientCertificate</a> resources.</p>
 */
export interface GetClientCertificatesRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetClientCertificatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClientCertificatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to get information about a <a>Deployment</a> resource.</p>
 */
export interface GetDeploymentRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of the <a>Deployment</a> resource to get information about.</p>
   */
  deploymentId: string | undefined;

  /**
   * <p>A query parameter to retrieve the specified embedded resources of the returned <a>Deployment</a> resource in the response. In a REST API call, this <code>embed</code> parameter value is a list of comma-separated strings, as in  <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=var1,var2</code>. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the <code>"apisummary"</code> string.  For example, <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=apisummary</code>.</p>
   */
  embed?: string[];
}

export namespace GetDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeploymentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments.</p>
 *         <div class="remarks">To create a new deployment of a <a>RestApi</a>, make a <code>POST</code> request against this resource. To view, update, or delete an existing
 *         deployment, make a <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> request, respectively, on a specified <a>Deployment</a> resource.</div>
 *         <div class="seeAlso">
 *             <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploying an API</a>,
 *             <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html">AWS CLI</a>,
 *             <a href="https://aws.amazon.com/tools/">AWS SDKs</a>
 *         </div>
 */
export interface Deployments {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: Deployment[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace Deployments {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Deployments): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to get information about a <a>Deployments</a> collection.</p>
 */
export interface GetDeploymentsRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetDeploymentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeploymentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Gets a specified documentation part of a given API.</p>
 */
export interface GetDocumentationPartRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  documentationPartId: string | undefined;
}

export namespace GetDocumentationPartRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDocumentationPartRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The collection of documentation parts of an API.</p>
 *     <div class="remarks"></div>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>
 *     </div>
 */
export interface DocumentationParts {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: DocumentationPart[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace DocumentationParts {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentationParts): any => ({
    ...obj,
  });
}

export enum LocationStatusType {
  DOCUMENTED = "DOCUMENTED",
  UNDOCUMENTED = "UNDOCUMENTED",
}

/**
 * <p>Gets the documentation parts of an API. The result may be filtered by the type, name, or path of API entities (targets).</p>
 */
export interface GetDocumentationPartsRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The type of API entities of the to-be-retrieved documentation parts. </p>
   */
  type?: DocumentationPartType | string;

  /**
   * <p>The name of API entities of the to-be-retrieved documentation parts.</p>
   */
  nameQuery?: string;

  /**
   * <p>The path of API entities of the to-be-retrieved documentation parts.</p>
   */
  path?: string;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  /**
   * <p>The status of the API documentation parts to retrieve. Valid values are <code>DOCUMENTED</code> for retrieving <a>DocumentationPart</a> resources with content and <code>UNDOCUMENTED</code> for <a>DocumentationPart</a> resources without content.</p>
   */
  locationStatus?: LocationStatusType | string;
}

export namespace GetDocumentationPartsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDocumentationPartsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Gets a documentation snapshot of an API.</p>
 */
export interface GetDocumentationVersionRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The version identifier of the to-be-retrieved documentation snapshot.</p>
   */
  documentationVersion: string | undefined;
}

export namespace GetDocumentationVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDocumentationVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The collection of documentation snapshots of an API. </p>
 *     <div class="remarks"><p>Use the <a>DocumentationVersions</a> to manage documentation snapshots associated with various API stages.</p></div>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersion</a>
 *     </div>
 */
export interface DocumentationVersions {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: DocumentationVersion[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace DocumentationVersions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentationVersions): any => ({
    ...obj,
  });
}

/**
 * <p>Gets the documentation versions of an API.</p>
 */
export interface GetDocumentationVersionsRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetDocumentationVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDocumentationVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to get the name of a <a>DomainName</a> resource.</p>
 */
export interface GetDomainNameRequest {
  /**
   * <p>[Required] The name of the <a>DomainName</a> resource.</p>
   */
  domainName: string | undefined;
}

export namespace GetDomainNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainNameRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of <a>DomainName</a> resources.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Client-Side Certificate</a>
 *       </div>
 */
export interface DomainNames {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: DomainName[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace DomainNames {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainNames): any => ({
    ...obj,
  });
}

/**
 * <p>Request to describe a collection of <a>DomainName</a> resources.</p>
 */
export interface GetDomainNamesRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetDomainNamesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainNamesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The binary blob response to <a>GetExport</a>, which contains the generated SDK.</p>
 */
export interface ExportResponse {
  /**
   * <p>The content-type header value in the HTTP response. This will correspond to a valid 'accept' type in the request.</p>
   */
  contentType?: string;

  /**
   * <p>The content-disposition header value in the HTTP response.</p>
   */
  contentDisposition?: string;

  /**
   * <p>The binary blob response to <a>GetExport</a>, which contains the export.</p>
   */
  body?: Uint8Array;
}

export namespace ExportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Request a new export of a <a>RestApi</a> for a particular <a>Stage</a>.</p>
 */
export interface GetExportRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the <a>Stage</a> that will be exported.</p>
   */
  stageName: string | undefined;

  /**
   * <p>[Required] The type of export. Acceptable values are 'oas30' for OpenAPI 3.0.x and 'swagger' for Swagger/OpenAPI 2.0.</p>
   */
  exportType: string | undefined;

  /**
   * <p>A key-value map of query string parameters that specify properties of the export, depending on the requested <code>exportType</code>. For <code>exportType</code> <code>oas30</code> and <code>swagger</code>, any combination of the following parameters are supported: <code>extensions='integrations'</code> or <code>extensions='apigateway'</code> will export the API with x-amazon-apigateway-integration extensions. <code>extensions='authorizers'</code> will export the API with  x-amazon-apigateway-authorizer extensions. <code>postman</code> will export the API with Postman extensions, allowing for import to the Postman tool</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>The content-type of the export, for example <code>application/json</code>. Currently <code>application/json</code> and <code>application/yaml</code> are supported for <code>exportType</code> of<code>oas30</code> and <code>swagger</code>. This should be specified in the <code>Accept</code> header for direct API requests.</p>
   */
  accepts?: string;
}

export namespace GetExportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExportRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A gateway response of a given response type and status code, with optional response parameters and mapping templates.</p>
 *         <div class="remarks">
 *             For more information about valid gateway response types, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html">Gateway Response Types Supported by API Gateway</a>
 *             <div class="example">
 *     <h4>Example: Get a Gateway Response of a given response type</h4>
 *     <h5>Request</h5>
 *     <p>This example shows how to get a gateway response of the <code>MISSING_AUTHENTICATION_TOKEN</code> type.</p>
 *     <pre><code>GET /restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN HTTP/1.1
 * Host: beta-apigateway.us-east-1.amazonaws.com
 * Content-Type: application/json
 * X-Amz-Date: 20170503T202516Z
 * Authorization: AWS4-HMAC-SHA256 Credential={access-key-id}/20170503/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=1b52460e3159c1a26cff29093855d50ea141c1c5b937528fecaf60f51129697a
 * Cache-Control: no-cache
 * Postman-Token: 3b2a1ce9-c848-2e26-2e2f-9c2caefbed45
 * </code></pre>
 *     <p>The response type is specified as a URL path.</p>
 *     <h5>Response</h5>
 *     <p>The successful operation returns the <code>200 OK</code> status code and a payload similar to the following:</p>
 *     <pre><code>{
 *   "_links": {
 *     "curies": {
 *       "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-gatewayresponse-{rel}.html",
 *       "name": "gatewayresponse",
 *       "templated": true
 *     },
 *     "self": {
 *       "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN"
 *     },
 *     "gatewayresponse:delete": {
 *       "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN"
 *     },
 *     "gatewayresponse:put": {
 *       "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *       "templated": true
 *     },
 *     "gatewayresponse:update": {
 *       "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN"
 *     }
 *   },
 *   "defaultResponse": false,
 *   "responseParameters": {
 *     "gatewayresponse.header.x-request-path": "method.request.path.petId",
 *     "gatewayresponse.header.Access-Control-Allow-Origin": "'a.b.c'",
 *     "gatewayresponse.header.x-request-query": "method.request.querystring.q",
 *     "gatewayresponse.header.x-request-header": "method.request.header.Accept"
 *   },
 *   "responseTemplates": {
 *     "application/json": "{\n     \"message\": $context.error.messageString,\n     \"type\":  \"$context.error.responseType\",\n     \"stage\":  \"$context.stage\",\n     \"resourcePath\":  \"$context.resourcePath\",\n     \"stageVariables.a\":  \"$stageVariables.a\",\n     \"statusCode\": \"'404'\"\n}"
 *   },
 *   "responseType": "MISSING_AUTHENTICATION_TOKEN",
 *   "statusCode": "404"
 * }</code></pre>
 *     <p></p>
 *   </div>
 *         </div>
 *         <div class="seeAlso">
 *           <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html">Customize Gateway Responses</a>
 *         </div>
 */
export interface GatewayResponse {
  /**
   * <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p>
   */
  responseType?: GatewayResponseType | string;

  /**
   * <p>The HTTP status code for this <a>GatewayResponse</a>.</p>
   */
  statusCode?: string;

  /**
   * <p>Response parameters (paths, query strings and headers) of the <a>GatewayResponse</a> as a string-to-string map of key-value  pairs.</p>
   */
  responseParameters?: { [key: string]: string };

  /**
   * <p>Response templates of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p>
   */
  responseTemplates?: { [key: string]: string };

  /**
   * <p>A Boolean flag to indicate whether this <a>GatewayResponse</a> is the default gateway response (<code>true</code>) or not (<code>false</code>). A default gateway response is one generated by API Gateway without any customization by an API developer. </p>
   */
  defaultResponse?: boolean;
}

export namespace GatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
 */
export interface GetGatewayResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
   */
  responseType: GatewayResponseType | string | undefined;
}

export namespace GetGatewayResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGatewayResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The collection of the <a>GatewayResponse</a> instances of a <a>RestApi</a> as a <code>responseType</code>-to-<a>GatewayResponse</a> object map of key-value pairs. As such, pagination is not supported for querying this collection.</p>
 *         <div class="remarks">
 *             For more information about valid gateway response types, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html">Gateway Response Types Supported by API Gateway</a>
 *             <div class="example">
 *     <h4>Example: Get the collection of gateway responses of an API</h4>
 *     <h5>Request</h5>
 *     <p>This example request shows how to retrieve the <a>GatewayResponses</a> collection from an API.</p>
 *     <pre><code>GET /restapis/o81lxisefl/gatewayresponses HTTP/1.1
 * Host: beta-apigateway.us-east-1.amazonaws.com
 * Content-Type: application/json
 * X-Amz-Date: 20170503T220604Z
 * Authorization: AWS4-HMAC-SHA256 Credential={access-key-id}/20170503/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=59b42fe54a76a5de8adf2c67baa6d39206f8e9ad49a1d77ccc6a5da3103a398a
 * Cache-Control: no-cache
 * Postman-Token: 5637af27-dc29-fc5c-9dfe-0645d52cb515
 * </code></pre>
 *     <p></p>
 *     <h5>Response</h5>
 *     <p>The successful operation returns the <code>200 OK</code> status code and a payload similar to the following:</p>
 *     <pre><code>{
 *   "_links": {
 *     "curies": {
 *       "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-gatewayresponse-{rel}.html",
 *       "name": "gatewayresponse",
 *       "templated": true
 *     },
 *     "self": {
 *       "href": "/restapis/o81lxisefl/gatewayresponses"
 *     },
 *     "first": {
 *       "href": "/restapis/o81lxisefl/gatewayresponses"
 *     },
 *     "gatewayresponse:by-type": {
 *       "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *       "templated": true
 *     },
 *     "item": [
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE"
 *       },
 *       {
 *         "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE"
 *       }
 *     ]
 *   },
 *   "_embedded": {
 *     "item": [
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "INTEGRATION_FAILURE",
 *         "statusCode": "504"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "RESOURCE_NOT_FOUND",
 *         "statusCode": "404"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "REQUEST_TOO_LARGE",
 *         "statusCode": "413"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "THROTTLED",
 *         "statusCode": "429"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "UNSUPPORTED_MEDIA_TYPE",
 *         "statusCode": "415"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "AUTHORIZER_CONFIGURATION_ERROR",
 *         "statusCode": "500"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "DEFAULT_5XX"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "DEFAULT_4XX"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "BAD_REQUEST_PARAMETERS",
 *         "statusCode": "400"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "BAD_REQUEST_BODY",
 *         "statusCode": "400"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "EXPIRED_TOKEN",
 *         "statusCode": "403"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "ACCESS_DENIED",
 *         "statusCode": "403"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "INVALID_API_KEY",
 *         "statusCode": "403"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "UNAUTHORIZED",
 *         "statusCode": "401"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "API_CONFIGURATION_ERROR",
 *         "statusCode": "500"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "QUOTA_EXCEEDED",
 *         "statusCode": "429"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "INTEGRATION_TIMEOUT",
 *         "statusCode": "504"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "MISSING_AUTHENTICATION_TOKEN",
 *         "statusCode": "403"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "INVALID_SIGNATURE",
 *         "statusCode": "403"
 *       },
 *       {
 *         "_links": {
 *           "self": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE"
 *           },
 *           "gatewayresponse:put": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}",
 *             "templated": true
 *           },
 *           "gatewayresponse:update": {
 *             "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE"
 *           }
 *         },
 *         "defaultResponse": true,
 *         "responseParameters": {},
 *         "responseTemplates": {
 *           "application/json": "{\"message\":$context.error.messageString}"
 *         },
 *         "responseType": "AUTHORIZER_FAILURE",
 *         "statusCode": "500"
 *       }
 *     ]
 *   }
 * }</code></pre>
 *     <p></p>
 *   </div>
 *         </div>
 *         <div class="seeAlso">
 *           <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html">Customize Gateway Responses</a>
 *         </div>
 */
export interface GatewayResponses {
  /**
   * <p>Returns the entire collection, because of no pagination support.</p>
   */
  items?: GatewayResponse[];

  /**
   * <p>The current pagination position in the paged result set. The <a>GatewayResponse</a> collection does not support pagination and the position does not apply here.</p>
   */
  position?: string;
}

export namespace GatewayResponses {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayResponses): any => ({
    ...obj,
  });
}

/**
 * <p>Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.</p>
 */
export interface GetGatewayResponsesRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set. The <a>GatewayResponse</a> collection does not support pagination and the position does not apply here.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500. The <a>GatewayResponses</a> collection does not support pagination and the limit does not apply here.</p>
   */
  limit?: number;
}

export namespace GetGatewayResponsesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGatewayResponsesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to get the integration configuration.</p>
 */
export interface GetIntegrationRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies a get integration request's resource identifier</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] Specifies a get integration request's HTTP method.</p>
   */
  httpMethod: string | undefined;
}

export namespace GetIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a get integration response request.</p>
 */
export interface GetIntegrationResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies a get integration response request's resource identifier.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] Specifies a get integration response request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>[Required] Specifies a get integration response request's status code.</p>
   */
  statusCode: string | undefined;
}

export namespace GetIntegrationResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to describe an existing <a>Method</a> resource.</p>
 */
export interface GetMethodRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] Specifies the method request's HTTP method type.</p>
   */
  httpMethod: string | undefined;
}

export namespace GetMethodRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMethodRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to describe a <a>MethodResponse</a> resource.</p>
 */
export interface GetMethodResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>[Required] The status code for the <a>MethodResponse</a> resource.</p>
   */
  statusCode: string | undefined;
}

export namespace GetMethodResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMethodResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to list information about a model in an existing <a>RestApi</a> resource.</p>
 */
export interface GetModelRequest {
  /**
   * <p>[Required] The <a>RestApi</a> identifier under which the <a>Model</a> exists.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the model as an identifier.</p>
   */
  modelName: string | undefined;

  /**
   * <p>A query parameter of a Boolean value to resolve (<code>true</code>) all external model references and returns a flattened model schema or not (<code>false</code>) The default is <code>false</code>.</p>
   */
  flatten?: boolean;
}

export namespace GetModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to list existing <a>Models</a> defined for a <a>RestApi</a> resource.</p>
 */
export interface GetModelsRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetModelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of <a>Model</a> resources.</p>
 *       <div class="seeAlso">
 *         <a>Method</a>, <a>MethodResponse</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a>
 *       </div>
 */
export interface Models {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: Model[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace Models {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Models): any => ({
    ...obj,
  });
}

/**
 * <p>Request to generate a sample mapping template used to transform the payload.</p>
 */
export interface GetModelTemplateRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the model for which to generate a template.</p>
   */
  modelName: string | undefined;
}

export namespace GetModelTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelTemplateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a mapping template used to transform a payload.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings">Mapping Templates</a>
 *       </div>
 */
export interface Template {
  /**
   * <p>The Apache <a target="_blank" href="https://velocity.apache.org/engine/devel/vtl-reference.html">Velocity Template Language (VTL)</a> template content used for the template resource.</p>
   */
  value?: string;
}

export namespace Template {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Template): any => ({
    ...obj,
  });
}

/**
 * <p>Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 */
export interface GetRequestValidatorRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of the <a>RequestValidator</a> to be retrieved.</p>
   */
  requestValidatorId: string | undefined;
}

export namespace GetRequestValidatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRequestValidatorRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.</p>
 */
export interface GetRequestValidatorsRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetRequestValidatorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRequestValidatorsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of <a>RequestValidator</a> resources of a given <a>RestApi</a>.</p>
 *         <div class="remarks">
 *           <p>In OpenAPI, the <a>RequestValidators</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.html">x-amazon-apigateway-request-validators</a> extension.</p>
 *         </div>
 *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
 */
export interface RequestValidators {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: RequestValidator[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace RequestValidators {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestValidators): any => ({
    ...obj,
  });
}

/**
 * <p>Request to list information about a resource.</p>
 */
export interface GetResourceRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier for the <a>Resource</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>A query parameter to retrieve the specified resources embedded in the returned <a>Resource</a> representation in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded <a>Method</a> resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods</code>.</p>
   */
  embed?: string[];
}

export namespace GetResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to list information about a collection of resources.</p>
 */
export interface GetResourcesRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  /**
   * <p>A query parameter used to retrieve the specified resources embedded in the returned <a>Resources</a> resource in the response.  This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded <a>Method</a> resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources?embed=methods</code>.</p>
   */
  embed?: string[];
}

export namespace GetResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of <a>Resource</a> resources.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a>
 *       </div>
 */
export interface Resources {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: Resource[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace Resources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resources): any => ({
    ...obj,
  });
}

/**
 * <p>The GET request to list an existing <a>RestApi</a> defined for your collection. </p>
 */
export interface GetRestApiRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;
}

export namespace GetRestApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRestApiRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The GET request to list existing <a>RestApis</a> defined for your collection.</p>
 */
export interface GetRestApisRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetRestApisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRestApisRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a>
 *       </div>
 */
export interface RestApis {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: RestApi[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace RestApis {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestApis): any => ({
    ...obj,
  });
}

/**
 * <p>Request a new generated client SDK for a <a>RestApi</a> and <a>Stage</a>.</p>
 */
export interface GetSdkRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the <a>Stage</a> that the SDK will use.</p>
   */
  stageName: string | undefined;

  /**
   * <p>[Required] The language for the generated SDK. Currently <code>java</code>, <code>javascript</code>, <code>android</code>, <code>objectivec</code> (for iOS), <code>swift</code> (for iOS), and <code>ruby</code>  are supported.</p>
   */
  sdkType: string | undefined;

  /**
   * <p>A string-to-string key-value map of query parameters <code>sdkType</code>-dependent properties of the SDK. For <code>sdkType</code> of <code>objectivec</code> or <code>swift</code>,  a parameter named <code>classPrefix</code> is required. For <code>sdkType</code> of <code>android</code>, parameters named <code>groupId</code>, <code>artifactId</code>, <code>artifactVersion</code>, and <code>invokerPackage</code> are required. For <code>sdkType</code> of <code>java</code>, parameters named <code>serviceName</code> and <code>javaPackageName</code> are required. </p>
   */
  parameters?: { [key: string]: string };
}

export namespace GetSdkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSdkRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The binary blob response to <a>GetSdk</a>, which contains the generated SDK.</p>
 */
export interface SdkResponse {
  /**
   * <p>The content-type header value in the HTTP response.</p>
   */
  contentType?: string;

  /**
   * <p>The content-disposition header value in the HTTP response.</p>
   */
  contentDisposition?: string;

  /**
   * <p>The binary blob response to <a>GetSdk</a>, which contains the generated SDK.</p>
   */
  body?: Uint8Array;
}

export namespace SdkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SdkResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Get an <a>SdkType</a> instance.</p>
 */
export interface GetSdkTypeRequest {
  /**
   * <p>[Required] The identifier of the queried <a>SdkType</a> instance.</p>
   */
  id: string | undefined;
}

export namespace GetSdkTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSdkTypeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration property of an SDK type.</p>
 */
export interface SdkConfigurationProperty {
  /**
   * <p>The name of a an <a>SdkType</a> configuration property.</p>
   */
  name?: string;

  /**
   * <p>The user-friendly name of an <a>SdkType</a> configuration property.</p>
   */
  friendlyName?: string;

  /**
   * <p>The description of an <a>SdkType</a> configuration property.</p>
   */
  description?: string;

  /**
   * <p>A boolean flag of an <a>SdkType</a> configuration property to indicate if the associated SDK configuration property is required (<code>true</code>) or not (<code>false</code>).</p>
   */
  required?: boolean;

  /**
   * <p>The default value of an <a>SdkType</a> configuration property.</p>
   */
  defaultValue?: string;
}

export namespace SdkConfigurationProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SdkConfigurationProperty): any => ({
    ...obj,
  });
}

/**
 * <p>A type of SDK that API Gateway can generate.</p>
 */
export interface SdkType {
  /**
   * <p>The identifier of an <a>SdkType</a> instance.</p>
   */
  id?: string;

  /**
   * <p>The user-friendly name of an <a>SdkType</a> instance.</p>
   */
  friendlyName?: string;

  /**
   * <p>The description of an <a>SdkType</a>.</p>
   */
  description?: string;

  /**
   * <p>A list of configuration properties of an <a>SdkType</a>.</p>
   */
  configurationProperties?: SdkConfigurationProperty[];
}

export namespace SdkType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SdkType): any => ({
    ...obj,
  });
}

/**
 * <p>Get the <a>SdkTypes</a> collection.</p>
 */
export interface GetSdkTypesRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetSdkTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSdkTypesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The collection of <a>SdkType</a> instances.</p>
 */
export interface SdkTypes {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: SdkType[];
}

export namespace SdkTypes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SdkTypes): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to get information about a <a>Stage</a> resource.</p>
 */
export interface GetStageRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the <a>Stage</a> resource to get information about.</p>
   */
  stageName: string | undefined;
}

export namespace GetStageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to get information about one or more <a>Stage</a> resources.</p>
 */
export interface GetStagesRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The stages' deployment identifiers.</p>
   */
  deploymentId?: string;
}

export namespace GetStagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStagesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p>
 *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html">Deploying API in Stages</a></div>
 */
export interface Stages {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  item?: Stage[];
}

export namespace Stages {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Stages): any => ({
    ...obj,
  });
}

/**
 * <p>Gets the <a>Tags</a> collection for a given resource.</p>
 */
export interface GetTagsRequest {
  /**
   * <p>[Required] The ARN of a resource that can be tagged.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>(Not currently supported) The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>(Not currently supported) The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The collection of tags. Each tag element is associated with a given resource.</p>
 */
export interface Tags {
  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace Tags {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tags): any => ({
    ...obj,
  });
}

/**
 * <p>The GET request to get the usage data of a usage plan in a specified time interval.</p>
 */
export interface GetUsageRequest {
  /**
   * <p>[Required] The Id of the usage plan associated with the usage data.</p>
   */
  usagePlanId: string | undefined;

  /**
   * <p>The Id of the API key associated with the resultant usage data.</p>
   */
  keyId?: string;

  /**
   * <p>[Required] The starting date (e.g., 2016-01-01) of the usage data.</p>
   */
  startDate: string | undefined;

  /**
   * <p>[Required] The ending date (e.g., 2016-12-31) of the usage data.</p>
   */
  endDate: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetUsageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUsageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the usage data of a usage plan.</p>
 *     <div class="remarks"></div>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>,
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-manage-usage">Manage Usage in a Usage Plan</a>
 *     </div>
 */
export interface Usage {
  /**
   * <p>The plan Id associated with this usage data.</p>
   */
  usagePlanId?: string;

  /**
   * <p>The starting date of the usage data.</p>
   */
  startDate?: string;

  /**
   * <p>The ending date of the usage data.</p>
   */
  endDate?: string;

  /**
   * <p>The usage data, as daily logs of used and remaining quotas, over the specified time interval indexed over the API keys in a usage plan. For example, <code>{..., "values" : { "{api_key}" : [ [0, 100], [10, 90], [100, 10]]}</code>, where <code>{api_key}</code> stands for an API key value and the daily log entry is of the format <code>[used quota, remaining quota]</code>.</p>
   */
  items?: { [key: string]: number[][] };

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace Usage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Usage): any => ({
    ...obj,
  });
}

/**
 * <p>The GET request to get a usage plan of a given plan identifier.</p>
 */
export interface GetUsagePlanRequest {
  /**
   * <p>[Required] The identifier of the <a>UsagePlan</a> resource to be retrieved.</p>
   */
  usagePlanId: string | undefined;
}

export namespace GetUsagePlanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUsagePlanRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The GET request to get a usage plan key of a given key identifier.</p>
 */
export interface GetUsagePlanKeyRequest {
  /**
   * <p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.</p>
   */
  usagePlanId: string | undefined;

  /**
   * <p>[Required] The key Id of the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.</p>
   */
  keyId: string | undefined;
}

export namespace GetUsagePlanKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUsagePlanKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The GET request to get all the usage plan keys representing the API keys added to a specified usage plan.</p>
 */
export interface GetUsagePlanKeysRequest {
  /**
   * <p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.</p>
   */
  usagePlanId: string | undefined;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  /**
   * <p>A query parameter specifying the name of the to-be-returned usage plan keys.</p>
   */
  nameQuery?: string;
}

export namespace GetUsagePlanKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUsagePlanKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.</p>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>
 *     </div>
 */
export interface UsagePlanKeys {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: UsagePlanKey[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace UsagePlanKeys {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsagePlanKeys): any => ({
    ...obj,
  });
}

/**
 * <p>The GET request to get all the usage plans of the caller's account.</p>
 */
export interface GetUsagePlansRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The identifier of the API key associated with the usage plans.</p>
   */
  keyId?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetUsagePlansRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUsagePlansRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of usage plans for an AWS account.</p>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>
 *     </div>
 */
export interface UsagePlans {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: UsagePlan[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace UsagePlans {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsagePlans): any => ({
    ...obj,
  });
}

/**
 * <p>Gets a specified VPC link under the caller's account in a region.</p>
 */
export interface GetVpcLinkRequest {
  /**
   * <p>[Required] The identifier of the  <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>
   */
  vpcLinkId: string | undefined;
}

export namespace GetVpcLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVpcLinkRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.</p>
 */
export interface GetVpcLinksRequest {
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;
}

export namespace GetVpcLinksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVpcLinksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The collection of VPC links under the caller's account in a region.</p>
 *         <div class="seeAlso">
 *             <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-private-integration.html">Getting Started with Private Integrations</a>,
 * <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html">Set up Private Integrations</a>
 *         </div>
 */
export interface VpcLinks {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: VpcLink[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;
}

export namespace VpcLinks {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcLinks): any => ({
    ...obj,
  });
}

/**
 * <p>The POST request to import API keys from an external source, such as a CSV-formatted file.</p>
 */
export interface ImportApiKeysRequest {
  /**
   * <p>The payload of the POST request to import API keys. For the payload format, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-key-file-format.html">API Key File Format</a>.</p>
   */
  body: Uint8Array | undefined;

  /**
   * <p>A query parameter to specify the input format to imported API keys. Currently, only the <code>csv</code> format is supported.</p>
   */
  format: ApiKeysFormat | string | undefined;

  /**
   * <p>A query parameter to indicate whether to rollback <a>ApiKey</a> importation (<code>true</code>) or not (<code>false</code>) when error is encountered.</p>
   */
  failOnWarnings?: boolean;
}

export namespace ImportApiKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportApiKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of the imported  <a>DocumentationPart</a> identifiers.</p>
 *     <div class="remarks">This is used to return the result when documentation parts in an external (e.g., OpenAPI) file are imported into API Gateway</div>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a href="https://docs.aws.amazon.com/apigateway/api-reference/link-relation/documentationpart-import/">documentationpart:import</a>, <a>DocumentationPart</a>
 *     </div>
 */
export interface DocumentationPartIds {
  /**
   * <p>A list of the returned documentation part identifiers.</p>
   */
  ids?: string[];

  /**
   * <p>A list of warning messages reported during import of documentation parts.</p>
   */
  warnings?: string[];
}

export namespace DocumentationPartIds {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentationPartIds): any => ({
    ...obj,
  });
}

export enum PutMode {
  Merge = "merge",
  Overwrite = "overwrite",
}

/**
 * <p>Import documentation parts from an external (e.g., OpenAPI) definition file. </p>
 */
export interface ImportDocumentationPartsRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>A query parameter to indicate whether to overwrite (<code>OVERWRITE</code>) any existing <a>DocumentationParts</a> definition or to merge (<code>MERGE</code>) the new definition into the existing one. The default value is <code>MERGE</code>.</p>
   */
  mode?: PutMode | string;

  /**
   * <p>A query parameter to specify whether to rollback the documentation importation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.</p>
   */
  failOnWarnings?: boolean;

  /**
   * <p>[Required] Raw byte array representing the to-be-imported documentation parts. To import from an OpenAPI file, this is a JSON object.</p>
   */
  body: Uint8Array | undefined;
}

export namespace ImportDocumentationPartsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportDocumentationPartsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A POST request to import an API to API Gateway using an input of an API definition file.</p>
 */
export interface ImportRestApiRequest {
  /**
   * <p>A query parameter to indicate whether to rollback the API creation (<code>true</code>) or not (<code>false</code>)
   *             when a warning is encountered. The default value is <code>false</code>.</p>
   */
  failOnWarnings?: boolean;

  /**
   * <p>A key-value map of context-specific query string parameters specifying the behavior of different API importing operations. The following shows operation-specific parameters and their supported values.</p>
   *         <p> To exclude <a>DocumentationParts</a> from the import, set <code>parameters</code> as <code>ignore=documentation</code>.</p>
   *       <p> To configure the endpoint type, set <code>parameters</code> as <code>endpointConfigurationTypes=EDGE</code>, <code>endpointConfigurationTypes=REGIONAL</code>, or <code>endpointConfigurationTypes=PRIVATE</code>. The default endpoint type is <code>EDGE</code>.</p>
   *         <p> To handle imported <code>basepath</code>, set <code>parameters</code> as <code>basepath=ignore</code>, <code>basepath=prepend</code> or <code>basepath=split</code>.</p>
   *         <p>For example, the AWS CLI command to exclude documentation from the imported API is:</p>
   *         <pre><code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code></pre>
   *         <p>The AWS CLI command to set the regional endpoint on the imported API is:</p>
   *         <pre><code>aws apigateway import-rest-api --parameters endpointConfigurationTypes=REGIONAL --body 'file:///path/to/imported-api-body.json'</code></pre>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>[Required] The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.</p>
   */
  body: Uint8Array | undefined;
}

export namespace ImportRestApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportRestApiRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.</p>
 */
export interface PutGatewayResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
   */
  responseType: GatewayResponseType | string | undefined;

  /**
   * The HTTP status code of the <a>GatewayResponse</a>.
   */
  statusCode?: string;

  /**
   * <p><p>Response parameters (paths, query strings and headers) of the <a>GatewayResponse</a> as a string-to-string map of key-value  pairs.</p></p>
   */
  responseParameters?: { [key: string]: string };

  /**
   * <p><p>Response templates of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p></p>
   */
  responseTemplates?: { [key: string]: string };
}

export namespace PutGatewayResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutGatewayResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Sets up a method's integration.</p>
 */
export interface PutIntegrationRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies a put integration request's resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] Specifies a put integration request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>[Required] Specifies a put integration input's type.</p>
   */
  type: IntegrationType | string | undefined;

  /**
   * <p>Specifies a put integration HTTP method. When the integration type is HTTP or AWS, this field is required.</p>
   */
  integrationHttpMethod?: string;

  /**
   * <p>Specifies Uniform Resource Identifier (URI) of the integration endpoint.</p>
   * <ul>
   * <li><p> For <code>HTTP</code> or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the <a target="_blank" href="https://en.wikipedia.org/wiki/Uniform_Resource_Identifier">RFC-3986 specification</a>, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. </p>
   * </li>
   * <li><p> For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}</code>. Here, <code>{Region}</code> is the API Gateway region (e.g., <code>us-east-1</code>); <code>{service}</code> is the name of the integrated AWS service (e.g., <code>s3</code>); and <code>{subdomain}</code> is a designated subdomain supported by certain AWS service for fast host-name lookup. <code>action</code> can be used for an AWS service action-based API, using an <code>Action={name}&{p1}={v1}&p2={v2}...</code> query string. The ensuing <code>{service_api}</code> refers to a supported action <code>{name}</code> plus any required input parameters. Alternatively, <code>path</code> can be used for an AWS service path-based API. The ensuing  <code>service_api</code> refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of <code><a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html">GetObject</a></code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket={bucket}&Key={key}</code> or  <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code></p>
   * </li></ul>
   */
  uri?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.</p>
   */
  connectionType?: ConnectionType | string;

  /**
   * <p>The (<a href="https://docs.aws.amazon.com/apigateway/api-reference/resource/vpc-link/#id"><code>id</code></a>) of the <a>VpcLink</a> used for the integration when <code>connectionType=VPC_LINK</code> and undefined, otherwise.</p>
   */
  connectionId?: string;

  /**
   * <p>Specifies whether credentials are required for a put integration.</p>
   */
  credentials?: string;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of  <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.</p>
   */
  requestParameters?: { [key: string]: string };

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.</p>
   */
  requestTemplates?: { [key: string]: string };

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the <code>requestTemplates</code> property on the Integration resource. There are three valid values:  <code>WHEN_NO_MATCH</code>, <code>WHEN_NO_TEMPLATES</code>, and <code>NEVER</code>.
   *         </p>
   *         <ul>
   *            <li><p><code>WHEN_NO_MATCH</code> passes the request body for unmapped content types through to the integration back end without transformation.</p></li>
   *            <li><p><code>NEVER</code> rejects unmapped content types with an HTTP 415 'Unsupported Media Type' response.</p></li>
   *            <li><p><code>WHEN_NO_TEMPLATES</code> allows pass-through when the integration has NO content types mapped to templates. However if there is at least one content type defined, unmapped content types will be rejected with the same 415 response.</p></li>
   *         </ul>
   */
  passthroughBehavior?: string;

  /**
   * <p>Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the <code>cacheNamespace</code>. You can specify the same <code>cacheNamespace</code> across resources to return the same cached data for requests to different resources.</p>
   */
  cacheNamespace?: string;

  /**
   * <p>A list of request parameters whose values API Gateway caches. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for <a>Method</a> <code>requestParameters</code>.</p>
   */
  cacheKeyParameters?: string[];

  /**
   * <p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p>
   *   <ul>
   *     <li><p><code>CONVERT_TO_BINARY</code>: Converts a request payload from a Base64-encoded string to the corresponding binary blob.</p></li>
   *     <li><p><code>CONVERT_TO_TEXT</code>: Converts a request payload from a binary blob to a Base64-encoded string.</p></li>
   *   </ul>
   *   <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p>
   */
  contentHandling?: ContentHandlingStrategy | string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.</p>
   */
  timeoutInMillis?: number;

  tlsConfig?: TlsConfig;
}

export namespace PutIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutIntegrationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a put integration response request.</p>
 */
export interface PutIntegrationResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies a put integration response request's resource identifier.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] Specifies a put integration response request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>[Required] Specifies the status code that is used to map the integration response to an existing <a>MethodResponse</a>.</p>
   */
  statusCode: string | undefined;

  /**
   * <p>Specifies the selection pattern of a put integration response.</p>
   */
  selectionPattern?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method response from the back end.
   *             The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> must be a valid and unique response header name and <code>JSON-expression</code> a valid JSON expression without the <code>$</code> prefix.</p>
   */
  responseParameters?: { [key: string]: string };

  /**
   * <p>Specifies a put integration response's templates.</p>
   */
  responseTemplates?: { [key: string]: string };

  /**
   * <p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p>
   *     <ul>
   *       <li><p><code>CONVERT_TO_BINARY</code>: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p></li>
   *       <li><p><code>CONVERT_TO_TEXT</code>: Converts a response payload from a binary blob to a Base64-encoded string.</p></li>
   *     </ul>
   *     <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>
   */
  contentHandling?: ContentHandlingStrategy | string;
}

export namespace PutIntegrationResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutIntegrationResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to add a method to an existing <a>Resource</a> resource.</p>
 */
export interface PutMethodRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The <a>Resource</a> identifier for the new <a>Method</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] Specifies the method request's HTTP method type.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>[Required] The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>
   */
  authorizationType: string | undefined;

  /**
   * <p>Specifies the identifier of an <a>Authorizer</a> to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  authorizerId?: string;

  /**
   * <p>Specifies whether the method required a valid <a>ApiKey</a>.</p>
   */
  apiKeyRequired?: boolean;

  /**
   * <p>A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example.</p>
   */
  operationName?: string;

  /**
   * <p>A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of  <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>).  The method request parameter names defined here are available in <a>Integration</a> to be mapped to integration request parameters or body-mapping templates.</p>
   */
  requestParameters?: { [key: string]: boolean };

  /**
   * <p>Specifies the <a>Model</a> resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a <a>Model</a> name as the value.</p>
   */
  requestModels?: { [key: string]: string };

  /**
   * <p>The identifier of a <a>RequestValidator</a> for validating the method request.</p>
   */
  requestValidatorId?: string;

  /**
   * <p>A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  authorizationScopes?: string[];
}

export namespace PutMethodRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutMethodRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to add a <a>MethodResponse</a> to an existing <a>Method</a> resource.</p>
 */
export interface PutMethodResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>[Required] The method response's status code.</p>
   */
  statusCode: string | undefined;

  /**
   * <p>A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)</p>
   */
  responseParameters?: { [key: string]: boolean };

  /**
   * <p>Specifies the <a>Model</a> resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a <a>Model</a> name as the value.</p>
   */
  responseModels?: { [key: string]: string };
}

export namespace PutMethodResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutMethodResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A PUT request to update an existing API, with external API definitions specified as the request body.</p>
 */
export interface PutRestApiRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The <code>mode</code> query parameter to specify the update mode. Valid values are "merge" and "overwrite". By default,
   *         the update mode is "merge".</p>
   */
  mode?: PutMode | string;

  /**
   * <p>A query parameter to indicate whether to rollback the API update (<code>true</code>) or not (<code>false</code>)
   *             when a warning is encountered. The default value is <code>false</code>.</p>
   */
  failOnWarnings?: boolean;

  /**
   * <p>Custom header parameters as part of the request. For example, to exclude <a>DocumentationParts</a> from an imported API, set <code>ignore=documentation</code> as a <code>parameters</code> value, as in the AWS CLI command of <code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code>.</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>[Required] The PUT request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.</p>
   */
  body: Uint8Array | undefined;
}

export namespace PutRestApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRestApiRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Adds or updates a tag on a given resource.</p>
 */
export interface TagResourceRequest {
  /**
   * <p>[Required] The ARN of a resource that can be tagged.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>[Required] The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Make a request to simulate the execution of an <a>Authorizer</a>.</p>
 */
export interface TestInvokeAuthorizerRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies a test invoke authorizer request's <a>Authorizer</a> ID.</p>
   */
  authorizerId: string | undefined;

  /**
   * <p>[Required] A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified.</p>
   */
  headers?: { [key: string]: string };

  /**
   * <p>[Optional] The headers as a map from string to list of values to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, may be specified.</p>
   */
  multiValueHeaders?: { [key: string]: string[] };

  /**
   * <p>[Optional] The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.</p>
   */
  pathWithQueryString?: string;

  /**
   * <p>[Optional] The simulated request body of an incoming invocation request.</p>
   */
  body?: string;

  /**
   * <p>A key-value map of stage variables to simulate an invocation on a deployed <a>Stage</a>.</p>
   */
  stageVariables?: { [key: string]: string };

  /**
   * <p>[Optional] A key-value map of additional context variables.</p>
   */
  additionalContext?: { [key: string]: string };
}

export namespace TestInvokeAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestInvokeAuthorizerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the response of the test invoke request for a custom <a>Authorizer</a></p>
 */
export interface TestInvokeAuthorizerResponse {
  /**
   * <p>The HTTP status code that the client would have received. Value is 0 if the authorizer succeeded.</p>
   */
  clientStatus?: number;

  /**
   * <p>The API Gateway execution log for the test authorizer request.</p>
   */
  log?: string;

  /**
   * <p>The execution latency of the test authorizer request.</p>
   */
  latency?: number;

  /**
   * <p>The principal identity returned by the <a>Authorizer</a></p>
   */
  principalId?: string;

  /**
   * <p>The JSON policy document returned by the <a>Authorizer</a></p>
   */
  policy?: string;

  authorization?: { [key: string]: string[] };
  /**
   * <p>The <a href="https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims">open identity claims</a>, with any supported custom attributes, returned from the Cognito Your User Pool configured for the API.</p>
   */
  claims?: { [key: string]: string };
}

export namespace TestInvokeAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestInvokeAuthorizerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Make a request to simulate the execution of a <a>Method</a>.</p>
 */
export interface TestInvokeMethodRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies a test invoke method request's resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] Specifies a test invoke method request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.</p>
   */
  pathWithQueryString?: string;

  /**
   * <p>The simulated request body of an incoming invocation request.</p>
   */
  body?: string;

  /**
   * <p>A key-value map of headers to simulate an incoming invocation request.</p>
   */
  headers?: { [key: string]: string };

  /**
   * <p>The headers as a map from string to list of values to simulate an incoming invocation request.</p>
   */
  multiValueHeaders?: { [key: string]: string[] };

  /**
   * <p>A <a>ClientCertificate</a> identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint.</p>
   */
  clientCertificateId?: string;

  /**
   * <p>A key-value map of stage variables to simulate an invocation on a deployed <a>Stage</a>.</p>
   */
  stageVariables?: { [key: string]: string };
}

export namespace TestInvokeMethodRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestInvokeMethodRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the response of the test invoke request in the HTTP method.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-test-method.html#how-to-test-method-console">Test API using the API Gateway console</a>
 *       </div>
 */
export interface TestInvokeMethodResponse {
  /**
   * <p>The HTTP status code.</p>
   */
  status?: number;

  /**
   * <p>The body of the HTTP response.</p>
   */
  body?: string;

  /**
   * <p>The headers of the HTTP response.</p>
   */
  headers?: { [key: string]: string };

  /**
   * <p>The headers of the HTTP response as a map from string to list of values.</p>
   */
  multiValueHeaders?: { [key: string]: string[] };

  /**
   * <p>The API Gateway execution log for the test invoke request.</p>
   */
  log?: string;

  /**
   * <p>The execution latency of the test invoke request.</p>
   */
  latency?: number;
}

export namespace TestInvokeMethodResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestInvokeMethodResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Removes a tag from a given resource.</p>
 */
export interface UntagResourceRequest {
  /**
   * <p>[Required] The ARN of a resource that can be tagged.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>[Required] The Tag keys to delete.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export type Op = "add" | "copy" | "move" | "remove" | "replace" | "test";

/**
 * A single patch operation to apply to the specified resource. Please refer to
 *         http://tools.ietf.org/html/rfc6902#section-4 for an explanation of how each operation is used.
 */
export interface PatchOperation {
  /**
   * <p> An update operation to be performed with this PATCH request. The valid value can be <code>add</code>, <code>remove</code>,  <code>replace</code> or <code>copy</code>. Not all valid operations are supported for a given resource. Support of the operations depends on specific operational contexts. Attempts to apply an unsupported operation on a resource will return an error message.</p>
   */
  op?: Op | string;

  /**
   * <p>The <code>op</code> operation's target, as identified by a <a href="https://tools.ietf.org/html/draft-ietf-appsawg-json-pointer-08">JSON Pointer</a> value that references a location within the targeted resource. For example, if the target resource has an updateable property of <code>{"name":"value"}</code>, the path for this property is <code>/name</code>. If the <code>name</code> property value is a JSON object (e.g., <code>{"name": {"child/name": "child-value"}}</code>), the path for the <code>child/name</code> property will be <code>/name/child~1name</code>. Any slash ("/") character appearing in path names must be escaped with "~1", as shown in the example above. Each <code>op</code> operation can have only one <code>path</code> associated with it.</p>
   */
  path?: string;

  /**
   * <p>The new target value of the update operation. It is applicable for the <code>add</code> or <code>replace</code> operation. When using AWS CLI to update a property of a JSON value, enclose the JSON object with a pair of single quotes in a Linux shell, e.g., '{"a": ...}'. In a Windows shell, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json">Using JSON for Parameters</a>.</p>
   */
  value?: string;

  /**
   * <p>The <code>copy</code> update operation's source as identified by a <code>JSON-Pointer</code> value referencing the location within the targeted resource to copy the value from. For example, to promote a canary deployment, you copy the canary deployment ID to the affiliated deployment ID by calling a PATCH request on a <a>Stage</a> resource with <code>"op":"copy"</code>, <code>"from":"/canarySettings/deploymentId"</code> and <code>"path":"/deploymentId"</code>.</p>
   */
  from?: string;
}

export namespace PatchOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchOperation): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to change information about the current <a>Account</a> resource.</p>
 */
export interface UpdateAccountRequest {
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to change information about an <a>ApiKey</a> resource.</p>
 */
export interface UpdateApiKeyRequest {
  /**
   * <p>[Required] The identifier of the <a>ApiKey</a> resource to be updated.</p>
   */
  apiKey: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateApiKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApiKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to update an existing <a>Authorizer</a> resource.</p>
 */
export interface UpdateAuthorizerRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of the <a>Authorizer</a> resource.</p>
   */
  authorizerId: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAuthorizerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to change information about the <a>BasePathMapping</a> resource.</p>
 */
export interface UpdateBasePathMappingRequest {
  /**
   * <p>[Required] The domain name of the <a>BasePathMapping</a> resource to change.</p>
   */
  domainName: string | undefined;

  /**
   * <p>[Required] The base path of the <a>BasePathMapping</a> resource to change.</p>
   *         <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>
   */
  basePath: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateBasePathMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBasePathMappingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to change information about an <a>ClientCertificate</a> resource.</p>
 */
export interface UpdateClientCertificateRequest {
  /**
   * <p>[Required] The identifier of the <a>ClientCertificate</a> resource to be updated.</p>
   */
  clientCertificateId: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateClientCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClientCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to change information about a <a>Deployment</a> resource.</p>
 */
export interface UpdateDeploymentRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The replacement identifier for the <a>Deployment</a> resource to change information about.</p>
   */
  deploymentId: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeploymentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Updates an existing documentation part of a given API.</p>
 */
export interface UpdateDocumentationPartRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of the to-be-updated documentation part.</p>
   */
  documentationPartId: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateDocumentationPartRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDocumentationPartRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Updates an existing documentation version of an API.</p>
 */
export interface UpdateDocumentationVersionRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>..</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The version identifier of the to-be-updated documentation version.</p>
   */
  documentationVersion: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateDocumentationVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDocumentationVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to change information about the <a>DomainName</a> resource.</p>
 */
export interface UpdateDomainNameRequest {
  /**
   * <p>[Required] The name of the <a>DomainName</a> resource to be changed.</p>
   */
  domainName: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateDomainNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainNameRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
 */
export interface UpdateGatewayResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
   */
  responseType: GatewayResponseType | string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateGatewayResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGatewayResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an update integration request.</p>
 */
export interface UpdateIntegrationRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Represents an update integration request's resource identifier.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] Represents an update integration request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIntegrationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an update integration response request.</p>
 */
export interface UpdateIntegrationResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies an update integration response request's resource identifier.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] Specifies an update integration response request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>[Required] Specifies an update integration response request's status code.</p>
   */
  statusCode: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateIntegrationResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIntegrationResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to update an existing <a>Method</a> resource.</p>
 */
export interface UpdateMethodRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateMethodRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMethodRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A request to update an existing <a>MethodResponse</a> resource.</p>
 */
export interface UpdateMethodResponseRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>[Required] The status code for the <a>MethodResponse</a> resource.</p>
   */
  statusCode: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateMethodResponseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMethodResponseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to update an existing model in an existing <a>RestApi</a> resource.</p>
 */
export interface UpdateModelRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the model to update.</p>
   */
  modelName: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 */
export interface UpdateRequestValidatorRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of <a>RequestValidator</a> to be updated.</p>
   */
  requestValidatorId: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateRequestValidatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRequestValidatorRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to change information about a <a>Resource</a> resource.</p>
 */
export interface UpdateResourceRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The identifier of the <a>Resource</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Request to update an existing <a>RestApi</a> resource in your collection.</p>
 */
export interface UpdateRestApiRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateRestApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRestApiRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Requests API Gateway to change information about a <a>Stage</a> resource.</p>
 */
export interface UpdateStageRequest {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the <a>Stage</a> resource to change information about.</p>
   */
  stageName: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateStageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key.</p>
 */
export interface UpdateUsageRequest {
  /**
   * <p>[Required] The Id of the usage plan associated with the usage data.</p>
   */
  usagePlanId: string | undefined;

  /**
   * <p>[Required] The identifier of the API key associated with the usage plan in which a temporary extension is granted to the remaining quota.</p>
   */
  keyId: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateUsageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUsageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The PATCH request to update a usage plan of a given plan Id.</p>
 */
export interface UpdateUsagePlanRequest {
  /**
   * <p>[Required] The Id of the to-be-updated usage plan.</p>
   */
  usagePlanId: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateUsagePlanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUsagePlanRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Updates an existing <a>VpcLink</a> of a specified identifier.</p>
 */
export interface UpdateVpcLinkRequest {
  /**
   * <p>[Required] The identifier of the  <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>
   */
  vpcLinkId: string | undefined;

  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];
}

export namespace UpdateVpcLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVpcLinkRequest): any => ({
    ...obj,
  });
}
