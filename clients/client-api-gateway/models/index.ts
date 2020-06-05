import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access log settings, including the access log format and access log destination ARN.</p>
 */
export interface AccessLogSettings {
  __type?: "AccessLogSettings";
  /**
   * <p>The ARN of the CloudWatch Logs log group to receive access logs.</p>
   */
  destinationArn?: string;

  /**
   * <p>A single line format of the access logs of data, as specified by selected <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference">$context variables</a>. The format must include at least <code>$context.requestId</code>.</p>
   */
  format?: string;
}

export namespace AccessLogSettings {
  export const filterSensitiveLog = (obj: AccessLogSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessLogSettings =>
    __isa(o, "AccessLogSettings");
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
  __type?: "Account";
  /**
   * <p>The version of the API keys used for the account.</p>
   */
  apiKeyVersion?: string;

  /**
   * <p>The ARN of an Amazon CloudWatch role for the current <a>Account</a>. </p>
   */
  cloudwatchRoleArn?: string;

  /**
   * <p>A list of features supported for the account. When usage plans are enabled, the features list will include an entry of <code>"UsagePlans"</code>.</p>
   */
  features?: string[];

  /**
   * <p>Specifies the API request limits configured for the current <a>Account</a>.</p>
   */
  throttleSettings?: ThrottleSettings;
}

export namespace Account {
  export const filterSensitiveLog = (obj: Account): any => ({
    ...obj
  });
  export const isa = (o: any): o is Account => __isa(o, "Account");
}

/**
 * <p>A resource that can be distributed to callers for executing <a>Method</a> resources that require an API key. API keys can be mapped to any <a>Stage</a> on any <a>RestApi</a>, which indicates that the callers with the API key can make requests to that stage.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a>
 *       </div>
 */
export interface ApiKey {
  __type?: "ApiKey";
  /**
   * <p>The timestamp when the API Key was created.</p>
   */
  createdDate?: Date;

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
   * <p>The identifier of the API Key.</p>
   */
  id?: string;

  /**
   * <p>The timestamp when the API Key was last updated.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The name of the API Key.</p>
   */
  name?: string;

  /**
   * <p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p>
   */
  stageKeys?: string[];

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The value of the API Key.</p>
   */
  value?: string;
}

export namespace ApiKey {
  export const filterSensitiveLog = (obj: ApiKey): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApiKey => __isa(o, "ApiKey");
}

/**
 * <p>The identifier of an <a>ApiKey</a> used in a <a>UsagePlan</a>.</p>
 */
export interface ApiKeyIds {
  __type?: "ApiKeyIds";
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
  export const filterSensitiveLog = (obj: ApiKeyIds): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApiKeyIds => __isa(o, "ApiKeyIds");
}

/**
 * <p>Represents a collection of API keys as represented by an <a>ApiKeys</a> resource.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a>
 *       </div>
 */
export interface ApiKeys {
  __type?: "ApiKeys";
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: ApiKey[];

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>A list of warning messages logged during the import of API keys when the <code>failOnWarnings</code> option is set to true.</p>
   */
  warnings?: string[];
}

export namespace ApiKeys {
  export const filterSensitiveLog = (obj: ApiKeys): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApiKeys => __isa(o, "ApiKeys");
}

export enum ApiKeysFormat {
  csv = "csv"
}

export enum ApiKeySourceType {
  AUTHORIZER = "AUTHORIZER",
  HEADER = "HEADER"
}

/**
 * <p>API stage name of the associated API stage in a usage plan.</p>
 */
export interface ApiStage {
  __type?: "ApiStage";
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
  export const filterSensitiveLog = (obj: ApiStage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApiStage => __isa(o, "ApiStage");
}

/**
 * <p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a>
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a>
 *       </div>
 */
export interface Authorizer {
  __type?: "Authorizer";
  /**
   * <p>Optional customer-defined field, used in OpenAPI imports and exports without functional impact.</p>
   */
  authType?: string;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.</p>
   */
  authorizerCredentials?: string;

  /**
   * <p>The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.</p>
   */
  authorizerResultTtlInSeconds?: number;

  /**
   * <p>Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form  <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.</p>
   */
  authorizerUri?: string;

  /**
   * <p>The identifier for the authorizer resource.</p>
   */
  id?: string;

  /**
   * <p>The identity source for which authorization is requested. <ul><li>For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is  <code>method.request.header.Auth</code>.</li><li>For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>.  These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</li></ul></p>
   */
  identitySource?: string;

  /**
   * <p>A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.</p>
   */
  identityValidationExpression?: string;

  /**
   * <p>[Required] The name of the authorizer.</p>
   */
  name?: string;

  /**
   * <p>A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. </p>
   */
  providerARNs?: string[];

  /**
   * <p>The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.</p>
   */
  type?: AuthorizerType | string;
}

export namespace Authorizer {
  export const filterSensitiveLog = (obj: Authorizer): any => ({
    ...obj
  });
  export const isa = (o: any): o is Authorizer => __isa(o, "Authorizer");
}

/**
 * <p>Represents a collection of <a>Authorizer</a> resources.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a>
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a>
 *       </div>
 */
export interface Authorizers {
  __type?: "Authorizers";
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
  export const filterSensitiveLog = (obj: Authorizers): any => ({
    ...obj
  });
  export const isa = (o: any): o is Authorizers => __isa(o, "Authorizers");
}

export enum AuthorizerType {
  COGNITO_USER_POOLS = "COGNITO_USER_POOLS",
  REQUEST = "REQUEST",
  TOKEN = "TOKEN"
}

/**
 * <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BadRequestException =>
    __isa(o, "BadRequestException");
}

/**
 * <p>Represents the base path that callers of the API must provide as part of the URL after the domain name.</p>
 *         <div class="remarks">A custom domain name plus a <code>BasePathMapping</code> specification identifies a deployed <a>RestApi</a> in a given stage of the owner <a>Account</a>.</div>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a>
 *       </div>
 */
export interface BasePathMapping {
  __type?: "BasePathMapping";
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
  export const filterSensitiveLog = (obj: BasePathMapping): any => ({
    ...obj
  });
  export const isa = (o: any): o is BasePathMapping =>
    __isa(o, "BasePathMapping");
}

/**
 * <p>Represents a collection of <a>BasePathMapping</a> resources.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a>
 *       </div>
 */
export interface BasePathMappings {
  __type?: "BasePathMappings";
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
  export const filterSensitiveLog = (obj: BasePathMappings): any => ({
    ...obj
  });
  export const isa = (o: any): o is BasePathMappings =>
    __isa(o, "BasePathMappings");
}

export enum CacheClusterSize {
  SIZE_0_POINT_5_GB = "0.5",
  SIZE_118_GB = "118",
  SIZE_13_POINT_5_GB = "13.5",
  SIZE_1_POINT_6_GB = "1.6",
  SIZE_237_GB = "237",
  SIZE_28_POINT_4_GB = "28.4",
  SIZE_58_POINT_2_GB = "58.2",
  SIZE_6_POINT_1_GB = "6.1"
}

export enum CacheClusterStatus {
  AVAILABLE = "AVAILABLE",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  FLUSH_IN_PROGRESS = "FLUSH_IN_PROGRESS",
  NOT_AVAILABLE = "NOT_AVAILABLE"
}

/**
 * <p>Configuration settings of a canary deployment.</p>
 */
export interface CanarySettings {
  __type?: "CanarySettings";
  /**
   * <p>The ID of the canary deployment.</p>
   */
  deploymentId?: string;

  /**
   * <p>The percent (0-100) of traffic diverted to a canary deployment.</p>
   */
  percentTraffic?: number;

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
  export const filterSensitiveLog = (obj: CanarySettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is CanarySettings =>
    __isa(o, "CanarySettings");
}

/**
 * <p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p>
 *         <div class="remarks">Client certificates are used to authenticate an API by the backend server. To authenticate an API client (or user), use IAM roles and policies, a custom <a>Authorizer</a> or an Amazon Cognito user pool.</div>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a>
 *       </div>
 */
export interface ClientCertificate {
  __type?: "ClientCertificate";
  /**
   * <p>The identifier of the client certificate.</p>
   */
  clientCertificateId?: string;

  /**
   * <p>The timestamp when the client certificate was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The description of the client certificate.</p>
   */
  description?: string;

  /**
   * <p>The timestamp when the client certificate will expire.</p>
   */
  expirationDate?: Date;

  /**
   * <p>The PEM-encoded public key of the client certificate, which can be used to configure certificate authentication in the integration endpoint .</p>
   */
  pemEncodedCertificate?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ClientCertificate {
  export const filterSensitiveLog = (obj: ClientCertificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClientCertificate =>
    __isa(o, "ClientCertificate");
}

/**
 * <p>Represents a collection of <a>ClientCertificate</a> resources.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a>
 *       </div>
 */
export interface ClientCertificates {
  __type?: "ClientCertificates";
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
  export const filterSensitiveLog = (obj: ClientCertificates): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClientCertificates =>
    __isa(o, "ClientCertificates");
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
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
}

export enum ConnectionType {
  INTERNET = "INTERNET",
  VPC_LINK = "VPC_LINK"
}

export enum ContentHandlingStrategy {
  CONVERT_TO_BINARY = "CONVERT_TO_BINARY",
  CONVERT_TO_TEXT = "CONVERT_TO_TEXT"
}

/**
 * <p>Request to create an <a>ApiKey</a> resource.</p>
 */
export interface CreateApiKeyRequest {
  __type?: "CreateApiKeyRequest";
  /**
   * <p>An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.</p>
   */
  customerId?: string;

  /**
   * <p>The description of the <a>ApiKey</a>.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether the <a>ApiKey</a> can be used by callers.</p>
   */
  enabled?: boolean;

  /**
   * <p>Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value.</p>
   */
  generateDistinctId?: boolean;

  /**
   * <p>The name of the <a>ApiKey</a>.</p>
   */
  name?: string;

  /**
   * <p>DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.</p>
   */
  stageKeys?: StageKey[];

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>Specifies a value of the API key.</p> <!-- Why is this declared as the input to create an API key? As a form of copying an existing key value into a new API key? -->
   */
  value?: string;
}

export namespace CreateApiKeyRequest {
  export const filterSensitiveLog = (obj: CreateApiKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateApiKeyRequest =>
    __isa(o, "CreateApiKeyRequest");
}

/**
 * <p>Request to add a new <a>Authorizer</a> to an existing <a>RestApi</a> resource.</p>
 */
export interface CreateAuthorizerRequest {
  __type?: "CreateAuthorizerRequest";
  /**
   * <p>Optional customer-defined field, used in OpenAPI imports and exports without functional impact.</p>
   */
  authType?: string;

  /**
   * <p>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.</p>
   */
  authorizerCredentials?: string;

  /**
   * <p>The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.</p>
   */
  authorizerResultTtlInSeconds?: number;

  /**
   * <p>Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form  <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.</p>
   */
  authorizerUri?: string;

  /**
   * <p>The identity source for which authorization is requested. <ul><li>For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is  <code>method.request.header.Auth</code>.</li><li>For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>.  These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</li></ul></p>
   */
  identitySource?: string;

  /**
   * <p>A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.</p>
   */
  identityValidationExpression?: string;

  /**
   * <p>[Required] The name of the authorizer.</p>
   */
  name: string | undefined;

  /**
   * <p>A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. </p>
   */
  providerARNs?: string[];

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.</p>
   */
  type: AuthorizerType | string | undefined;
}

export namespace CreateAuthorizerRequest {
  export const filterSensitiveLog = (obj: CreateAuthorizerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAuthorizerRequest =>
    __isa(o, "CreateAuthorizerRequest");
}

/**
 * <p>Requests API Gateway to create a new <a>BasePathMapping</a> resource.</p>
 */
export interface CreateBasePathMappingRequest {
  __type?: "CreateBasePathMappingRequest";
  /**
   * <p>The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name.</p>
   */
  basePath?: string;

  /**
   * <p>[Required] The domain name of the <a>BasePathMapping</a> resource to create.</p>
   */
  domainName: string | undefined;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the API's stage that you want to use for this mapping. Specify '(none)' if you do not want callers to explicitly specify the stage name after any base path name.</p>
   */
  stage?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace CreateBasePathMappingRequest {
  export const filterSensitiveLog = (
    obj: CreateBasePathMappingRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBasePathMappingRequest =>
    __isa(o, "CreateBasePathMappingRequest");
}

/**
 * <p>Requests API Gateway to create a <a>Deployment</a> resource.</p>
 */
export interface CreateDeploymentRequest {
  __type?: "CreateDeploymentRequest";
  /**
   * <p>Enables a cache cluster for the <a>Stage</a> resource specified in the input.</p>
   */
  cacheClusterEnabled?: boolean;

  /**
   * <p>Specifies the cache cluster size for the <a>Stage</a> resource specified in the input, if a cache cluster is enabled.</p>
   */
  cacheClusterSize?: CacheClusterSize | string;

  /**
   * <p>The input configuration for the canary deployment when the deployment is a canary release deployment. </p>
   */
  canarySettings?: DeploymentCanarySettings;

  /**
   * <p>The description for the <a>Deployment</a> resource to create.</p>
   */
  description?: string;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The description of the <a>Stage</a> resource for the <a>Deployment</a> resource to create.</p>
   */
  stageDescription?: string;

  /**
   * <p>The name of the <a>Stage</a> resource for the <a>Deployment</a> resource to create.</p>
   */
  stageName?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>
   */
  tracingEnabled?: boolean;

  /**
   * <p>A map that defines the stage variables for the <a>Stage</a> resource that is associated
   *           with the new deployment. Variable names can have alphanumeric and underscore characters, and the values
   *           must match <code>[A-Za-z0-9-._~:/?#&=,]+</code>.</p>
   */
  variables?: { [key: string]: string };
}

export namespace CreateDeploymentRequest {
  export const filterSensitiveLog = (obj: CreateDeploymentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDeploymentRequest =>
    __isa(o, "CreateDeploymentRequest");
}

/**
 * <p>Creates a new documentation part of a given API.</p>
 */
export interface CreateDocumentationPartRequest {
  __type?: "CreateDocumentationPartRequest";
  /**
   * <p>[Required] The location of the targeted API entity of the to-be-created documentation part.</p>
   */
  location: DocumentationPartLocation | undefined;

  name?: string;
  /**
   * <p>[Required] The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.</p>
   */
  properties: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace CreateDocumentationPartRequest {
  export const filterSensitiveLog = (
    obj: CreateDocumentationPartRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDocumentationPartRequest =>
    __isa(o, "CreateDocumentationPartRequest");
}

/**
 * <p>Creates a new documentation version of a given API.</p>
 */
export interface CreateDocumentationVersionRequest {
  __type?: "CreateDocumentationVersionRequest";
  /**
   * <p>A description about the new documentation snapshot.</p>
   */
  description?: string;

  /**
   * <p>[Required] The version identifier of the new snapshot.</p>
   */
  documentationVersion: string | undefined;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The stage name to be associated with the new documentation snapshot.</p>
   */
  stageName?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace CreateDocumentationVersionRequest {
  export const filterSensitiveLog = (
    obj: CreateDocumentationVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDocumentationVersionRequest =>
    __isa(o, "CreateDocumentationVersionRequest");
}

/**
 * <p>A request to create a new domain name.</p>
 */
export interface CreateDomainNameRequest {
  __type?: "CreateDomainNameRequest";
  /**
   * <p>The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  certificateArn?: string;

  /**
   * <p>[Deprecated] The body of the server certificate that will be used by edge-optimized endpoint for this domain name provided by your certificate authority.</p>
   */
  certificateBody?: string;

  /**
   * <p>[Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path.</p>
   */
  certificateChain?: string;

  /**
   * <p>The user-friendly name of the certificate that will be used by edge-optimized endpoint for this domain name.</p>
   */
  certificateName?: string;

  /**
   * <p>[Deprecated] Your edge-optimized endpoint's domain name certificate's private key.</p>
   */
  certificatePrivateKey?: string;

  /**
   * <p>[Required] The name of the <a>DomainName</a> resource.</p>
   */
  domainName: string | undefined;

  /**
   * <p>The endpoint configuration of this <a>DomainName</a> showing the endpoint types of the domain name. </p>
   */
  endpointConfiguration?: EndpointConfiguration;

  name?: string;
  /**
   * <p>The reference to an AWS-managed certificate that will be used by regional endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  regionalCertificateArn?: string;

  /**
   * <p>The user-friendly name of the certificate that will be used by regional endpoint for this domain name.</p>
   */
  regionalCertificateName?: string;

  /**
   * <p>The Transport Layer Security (TLS) version + cipher suite for this <a>DomainName</a>. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.</p>
   */
  securityPolicy?: SecurityPolicy | string;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace CreateDomainNameRequest {
  export const filterSensitiveLog = (obj: CreateDomainNameRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDomainNameRequest =>
    __isa(o, "CreateDomainNameRequest");
}

/**
 * <p>Request to add a new <a>Model</a> to an existing <a>RestApi</a> resource.</p>
 */
export interface CreateModelRequest {
  __type?: "CreateModelRequest";
  /**
   * <p>[Required] The content-type for the model.</p>
   */
  contentType: string | undefined;

  /**
   * <p>The description of the model.</p>
   */
  description?: string;

  /**
   * <p>[Required] The name of the model. Must be alphanumeric.</p>
   */
  name: string | undefined;

  /**
   * <p>[Required] The <a>RestApi</a> identifier under which the <a>Model</a> will be created.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The schema for the model. For <code>application/json</code> models, this should be <a target="_blank" href="https://tools.ietf.org/html/draft-zyp-json-schema-04">JSON schema draft 4</a> model.</p>
   */
  schema?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace CreateModelRequest {
  export const filterSensitiveLog = (obj: CreateModelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateModelRequest =>
    __isa(o, "CreateModelRequest");
}

/**
 * <p>Creates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 */
export interface CreateRequestValidatorRequest {
  __type?: "CreateRequestValidatorRequest";
  /**
   * <p>The name of the to-be-created <a>RequestValidator</a>.</p>
   */
  name?: string;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
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
  export const filterSensitiveLog = (
    obj: CreateRequestValidatorRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRequestValidatorRequest =>
    __isa(o, "CreateRequestValidatorRequest");
}

/**
 * <p>Requests API Gateway to create a <a>Resource</a> resource.</p>
 */
export interface CreateResourceRequest {
  __type?: "CreateResourceRequest";
  name?: string;
  /**
   * <p>[Required] The parent resource's identifier.</p>
   */
  parentId: string | undefined;

  /**
   * <p>The last path segment for this resource.</p>
   */
  pathPart: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace CreateResourceRequest {
  export const filterSensitiveLog = (obj: CreateResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateResourceRequest =>
    __isa(o, "CreateResourceRequest");
}

/**
 * <p>The POST Request to add a new <a>RestApi</a> resource to your collection.</p>
 */
export interface CreateRestApiRequest {
  __type?: "CreateRestApiRequest";
  /**
   * <p>The source of the API key for metering requests according to a usage plan. Valid values are: <ul><li><code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. </li><li><code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.</li></ul> </p>
   */
  apiKeySource?: ApiKeySourceType | string;

  /**
   * <p>The list of binary media types supported by the <a>RestApi</a>. By default, the <a>RestApi</a> supports only UTF-8-encoded text payloads.</p>
   */
  binaryMediaTypes?: string[];

  /**
   * <p>The ID of the <a>RestApi</a> that you want to clone from.</p>
   */
  cloneFrom?: string;

  /**
   * <p>The description of the <a>RestApi</a>.</p>
   */
  description?: string;

  /**
   * <p>The endpoint configuration of this <a>RestApi</a> showing the endpoint types of the API. </p>
   */
  endpointConfiguration?: EndpointConfiguration;

  /**
   * <p>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</p>
   */
  minimumCompressionSize?: number;

  /**
   * <p>[Required] The name of the <a>RestApi</a>.</p>
   */
  name: string | undefined;

  /**
   * A stringified JSON policy document that applies to this RestApi regardless of the caller and <a>Method</a> configuration.
   */
  policy?: string;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>A version identifier for the API.</p>
   */
  version?: string;
}

export namespace CreateRestApiRequest {
  export const filterSensitiveLog = (obj: CreateRestApiRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRestApiRequest =>
    __isa(o, "CreateRestApiRequest");
}

/**
 * <p>Requests API Gateway to create a <a>Stage</a> resource.</p>
 */
export interface CreateStageRequest {
  __type?: "CreateStageRequest";
  /**
   * <p>Whether cache clustering is enabled for the stage.</p>
   */
  cacheClusterEnabled?: boolean;

  /**
   * <p>The stage's cache cluster size.</p>
   */
  cacheClusterSize?: CacheClusterSize | string;

  /**
   * <p>The canary deployment settings of this stage.</p>
   */
  canarySettings?: CanarySettings;

  /**
   * <p>[Required] The identifier of the <a>Deployment</a> resource for the <a>Stage</a> resource.</p>
   */
  deploymentId: string | undefined;

  /**
   * <p>The description of the <a>Stage</a> resource.</p>
   */
  description?: string;

  /**
   * <p>The version of the associated API documentation.</p>
   */
  documentationVersion?: string;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name for the <a>Stage</a> resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  stageName: string | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>
   */
  tracingEnabled?: boolean;

  /**
   * <p>A map that defines the stage variables for the new <a>Stage</a> resource. Variable names
   *           can have alphanumeric and underscore characters, and the values must match
   *           <code>[A-Za-z0-9-._~:/?#&=,]+</code>.</p>
   */
  variables?: { [key: string]: string };
}

export namespace CreateStageRequest {
  export const filterSensitiveLog = (obj: CreateStageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStageRequest =>
    __isa(o, "CreateStageRequest");
}

/**
 * <p>The POST request to create a usage plan key for adding an existing API key to a usage plan.</p>
 */
export interface CreateUsagePlanKeyRequest {
  __type?: "CreateUsagePlanKeyRequest";
  /**
   * <p>[Required] The identifier of a <a>UsagePlanKey</a> resource for a plan customer.</p>
   */
  keyId: string | undefined;

  /**
   * <p>[Required] The type of a <a>UsagePlanKey</a> resource for a plan customer.</p>
   */
  keyType: string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-created <a>UsagePlanKey</a> resource representing a plan customer.</p>
   */
  usagePlanId: string | undefined;
}

export namespace CreateUsagePlanKeyRequest {
  export const filterSensitiveLog = (obj: CreateUsagePlanKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUsagePlanKeyRequest =>
    __isa(o, "CreateUsagePlanKeyRequest");
}

/**
 * <p>The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload.</p>
 */
export interface CreateUsagePlanRequest {
  __type?: "CreateUsagePlanRequest";
  /**
   * <p>The associated API stages of the usage plan.</p>
   */
  apiStages?: ApiStage[];

  /**
   * <p>The description of the usage plan.</p>
   */
  description?: string;

  /**
   * <p>[Required] The name of the usage plan.</p>
   */
  name: string | undefined;

  /**
   * <p>The quota of the usage plan.</p>
   */
  quota?: QuotaSettings;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };

  template?: boolean;
  templateSkipList?: string[];
  /**
   * <p>The throttling limits of the usage plan.</p>
   */
  throttle?: ThrottleSettings;

  title?: string;
}

export namespace CreateUsagePlanRequest {
  export const filterSensitiveLog = (obj: CreateUsagePlanRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUsagePlanRequest =>
    __isa(o, "CreateUsagePlanRequest");
}

/**
 * <p>Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.</p>
 */
export interface CreateVpcLinkRequest {
  __type?: "CreateVpcLinkRequest";
  /**
   * <p>The description of the VPC link.</p>
   */
  description?: string;

  /**
   * <p>[Required] The name used to label and identify the VPC link.</p>
   */
  name: string | undefined;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>[Required] The ARNs of network load balancers of the VPC targeted by the VPC link. The network load balancers must be owned by the same AWS account of the API owner.</p>
   */
  targetArns: string[] | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace CreateVpcLinkRequest {
  export const filterSensitiveLog = (obj: CreateVpcLinkRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateVpcLinkRequest =>
    __isa(o, "CreateVpcLinkRequest");
}

/**
 * <p>A request to delete the <a>ApiKey</a> resource.</p>
 */
export interface DeleteApiKeyRequest {
  __type?: "DeleteApiKeyRequest";
  /**
   * <p>[Required] The identifier of the <a>ApiKey</a> resource to be deleted.</p>
   */
  apiKey: string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteApiKeyRequest {
  export const filterSensitiveLog = (obj: DeleteApiKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteApiKeyRequest =>
    __isa(o, "DeleteApiKeyRequest");
}

/**
 * <p>Request to delete an existing <a>Authorizer</a> resource.</p>
 */
export interface DeleteAuthorizerRequest {
  __type?: "DeleteAuthorizerRequest";
  /**
   * <p>[Required] The identifier of the <a>Authorizer</a> resource.</p>
   */
  authorizerId: string | undefined;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteAuthorizerRequest {
  export const filterSensitiveLog = (obj: DeleteAuthorizerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAuthorizerRequest =>
    __isa(o, "DeleteAuthorizerRequest");
}

/**
 * <p>A request to delete the <a>BasePathMapping</a> resource.</p>
 */
export interface DeleteBasePathMappingRequest {
  __type?: "DeleteBasePathMappingRequest";
  /**
   * <p>[Required] The base path name of the <a>BasePathMapping</a> resource to delete.</p>
   *         <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>
   */
  basePath: string | undefined;

  /**
   * <p>[Required] The domain name of the <a>BasePathMapping</a> resource to delete.</p>
   */
  domainName: string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteBasePathMappingRequest {
  export const filterSensitiveLog = (
    obj: DeleteBasePathMappingRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBasePathMappingRequest =>
    __isa(o, "DeleteBasePathMappingRequest");
}

/**
 * <p>A request to delete the <a>ClientCertificate</a> resource.</p>
 */
export interface DeleteClientCertificateRequest {
  __type?: "DeleteClientCertificateRequest";
  /**
   * <p>[Required] The identifier of the <a>ClientCertificate</a> resource to be deleted.</p>
   */
  clientCertificateId: string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteClientCertificateRequest {
  export const filterSensitiveLog = (
    obj: DeleteClientCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteClientCertificateRequest =>
    __isa(o, "DeleteClientCertificateRequest");
}

/**
 * <p>Requests API Gateway to delete a <a>Deployment</a> resource.</p>
 */
export interface DeleteDeploymentRequest {
  __type?: "DeleteDeploymentRequest";
  /**
   * <p>[Required] The identifier of the <a>Deployment</a> resource to delete.</p>
   */
  deploymentId: string | undefined;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteDeploymentRequest {
  export const filterSensitiveLog = (obj: DeleteDeploymentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDeploymentRequest =>
    __isa(o, "DeleteDeploymentRequest");
}

/**
 * <p>Deletes an existing documentation part of an API.</p>
 */
export interface DeleteDocumentationPartRequest {
  __type?: "DeleteDocumentationPartRequest";
  /**
   * <p>[Required] The identifier of the to-be-deleted documentation part.</p>
   */
  documentationPartId: string | undefined;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteDocumentationPartRequest {
  export const filterSensitiveLog = (
    obj: DeleteDocumentationPartRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDocumentationPartRequest =>
    __isa(o, "DeleteDocumentationPartRequest");
}

/**
 * <p>Deletes an existing documentation version of an API.</p>
 */
export interface DeleteDocumentationVersionRequest {
  __type?: "DeleteDocumentationVersionRequest";
  /**
   * <p>[Required] The version identifier of a to-be-deleted documentation snapshot.</p>
   */
  documentationVersion: string | undefined;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteDocumentationVersionRequest {
  export const filterSensitiveLog = (
    obj: DeleteDocumentationVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDocumentationVersionRequest =>
    __isa(o, "DeleteDocumentationVersionRequest");
}

/**
 * <p>A request to delete the <a>DomainName</a> resource.</p>
 */
export interface DeleteDomainNameRequest {
  __type?: "DeleteDomainNameRequest";
  /**
   * <p>[Required] The name of the <a>DomainName</a> resource to be deleted.</p>
   */
  domainName: string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteDomainNameRequest {
  export const filterSensitiveLog = (obj: DeleteDomainNameRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDomainNameRequest =>
    __isa(o, "DeleteDomainNameRequest");
}

/**
 * <p>Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.</p>
 */
export interface DeleteGatewayResponseRequest {
  __type?: "DeleteGatewayResponseRequest";
  name?: string;
  /**
   * <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
   */
  responseType: GatewayResponseType | string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteGatewayResponseRequest {
  export const filterSensitiveLog = (
    obj: DeleteGatewayResponseRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGatewayResponseRequest =>
    __isa(o, "DeleteGatewayResponseRequest");
}

/**
 * <p>Represents a delete integration request.</p>
 */
export interface DeleteIntegrationRequest {
  __type?: "DeleteIntegrationRequest";
  /**
   * <p>[Required] Specifies a delete integration request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>[Required] Specifies a delete integration request's resource identifier.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteIntegrationRequest {
  export const filterSensitiveLog = (obj: DeleteIntegrationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteIntegrationRequest =>
    __isa(o, "DeleteIntegrationRequest");
}

/**
 * <p>Represents a delete integration response request.</p>
 */
export interface DeleteIntegrationResponseRequest {
  __type?: "DeleteIntegrationResponseRequest";
  /**
   * <p>[Required] Specifies a delete integration response request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>[Required] Specifies a delete integration response request's resource identifier.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies a delete integration response request's status code.</p>
   */
  statusCode: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteIntegrationResponseRequest {
  export const filterSensitiveLog = (
    obj: DeleteIntegrationResponseRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteIntegrationResponseRequest =>
    __isa(o, "DeleteIntegrationResponseRequest");
}

/**
 * <p>Request to delete an existing <a>Method</a> resource.</p>
 */
export interface DeleteMethodRequest {
  __type?: "DeleteMethodRequest";
  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteMethodRequest {
  export const filterSensitiveLog = (obj: DeleteMethodRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMethodRequest =>
    __isa(o, "DeleteMethodRequest");
}

/**
 * <p>A request to delete an existing <a>MethodResponse</a> resource.</p>
 */
export interface DeleteMethodResponseRequest {
  __type?: "DeleteMethodResponseRequest";
  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The status code identifier for the <a>MethodResponse</a> resource.</p>
   */
  statusCode: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteMethodResponseRequest {
  export const filterSensitiveLog = (
    obj: DeleteMethodResponseRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMethodResponseRequest =>
    __isa(o, "DeleteMethodResponseRequest");
}

/**
 * <p>Request to delete an existing model in an existing <a>RestApi</a> resource.</p>
 */
export interface DeleteModelRequest {
  __type?: "DeleteModelRequest";
  /**
   * <p>[Required] The name of the model to delete.</p>
   */
  modelName: string | undefined;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteModelRequest {
  export const filterSensitiveLog = (obj: DeleteModelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteModelRequest =>
    __isa(o, "DeleteModelRequest");
}

/**
 * <p>Deletes a specified <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 */
export interface DeleteRequestValidatorRequest {
  __type?: "DeleteRequestValidatorRequest";
  name?: string;
  /**
   * <p>[Required] The identifier of the <a>RequestValidator</a> to be deleted.</p>
   */
  requestValidatorId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteRequestValidatorRequest {
  export const filterSensitiveLog = (
    obj: DeleteRequestValidatorRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRequestValidatorRequest =>
    __isa(o, "DeleteRequestValidatorRequest");
}

/**
 * <p>Request to delete a <a>Resource</a>.</p>
 */
export interface DeleteResourceRequest {
  __type?: "DeleteResourceRequest";
  name?: string;
  /**
   * <p>[Required] The identifier of the <a>Resource</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteResourceRequest {
  export const filterSensitiveLog = (obj: DeleteResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteResourceRequest =>
    __isa(o, "DeleteResourceRequest");
}

/**
 * <p>Request to delete the specified API from your collection.</p>
 */
export interface DeleteRestApiRequest {
  __type?: "DeleteRestApiRequest";
  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteRestApiRequest {
  export const filterSensitiveLog = (obj: DeleteRestApiRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRestApiRequest =>
    __isa(o, "DeleteRestApiRequest");
}

/**
 * <p>Requests API Gateway to delete a <a>Stage</a> resource.</p>
 */
export interface DeleteStageRequest {
  __type?: "DeleteStageRequest";
  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the <a>Stage</a> resource to delete.</p>
   */
  stageName: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace DeleteStageRequest {
  export const filterSensitiveLog = (obj: DeleteStageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteStageRequest =>
    __isa(o, "DeleteStageRequest");
}

/**
 * <p>The DELETE request to delete a usage plan key and remove the underlying API key from the associated usage plan.</p>
 */
export interface DeleteUsagePlanKeyRequest {
  __type?: "DeleteUsagePlanKeyRequest";
  /**
   * <p>[Required] The Id of the <a>UsagePlanKey</a> resource to be deleted.</p>
   */
  keyId: string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-deleted <a>UsagePlanKey</a> resource representing a plan customer.</p>
   */
  usagePlanId: string | undefined;
}

export namespace DeleteUsagePlanKeyRequest {
  export const filterSensitiveLog = (obj: DeleteUsagePlanKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUsagePlanKeyRequest =>
    __isa(o, "DeleteUsagePlanKeyRequest");
}

/**
 * <p>The DELETE request to delete a usage plan of a given plan Id.</p>
 */
export interface DeleteUsagePlanRequest {
  __type?: "DeleteUsagePlanRequest";
  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The Id of the to-be-deleted usage plan.</p>
   */
  usagePlanId: string | undefined;
}

export namespace DeleteUsagePlanRequest {
  export const filterSensitiveLog = (obj: DeleteUsagePlanRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUsagePlanRequest =>
    __isa(o, "DeleteUsagePlanRequest");
}

/**
 * <p>Deletes an existing <a>VpcLink</a> of a specified identifier.</p>
 */
export interface DeleteVpcLinkRequest {
  __type?: "DeleteVpcLinkRequest";
  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The identifier of the  <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>
   */
  vpcLinkId: string | undefined;
}

export namespace DeleteVpcLinkRequest {
  export const filterSensitiveLog = (obj: DeleteVpcLinkRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVpcLinkRequest =>
    __isa(o, "DeleteVpcLinkRequest");
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
  __type?: "Deployment";
  /**
   * <p>A summary of the <a>RestApi</a> at the date and time that the deployment resource was created.</p>
   */
  apiSummary?: { [key: string]: { [key: string]: MethodSnapshot } };

  /**
   * <p>The date and time that the deployment resource was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The description for the deployment resource.</p>
   */
  description?: string;

  /**
   * <p>The identifier for the deployment resource.</p>
   */
  id?: string;
}

export namespace Deployment {
  export const filterSensitiveLog = (obj: Deployment): any => ({
    ...obj
  });
  export const isa = (o: any): o is Deployment => __isa(o, "Deployment");
}

/**
 * <p>The input configuration for a canary deployment.</p>
 */
export interface DeploymentCanarySettings {
  __type?: "DeploymentCanarySettings";
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
  export const filterSensitiveLog = (obj: DeploymentCanarySettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeploymentCanarySettings =>
    __isa(o, "DeploymentCanarySettings");
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
  __type?: "Deployments";
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
  export const filterSensitiveLog = (obj: Deployments): any => ({
    ...obj
  });
  export const isa = (o: any): o is Deployments => __isa(o, "Deployments");
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
  __type?: "DocumentationPart";
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
  export const filterSensitiveLog = (obj: DocumentationPart): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentationPart =>
    __isa(o, "DocumentationPart");
}

/**
 * <p>A collection of the imported  <a>DocumentationPart</a> identifiers.</p>
 *     <div class="remarks">This is used to return the result when documentation parts in an external (e.g., OpenAPI) file are imported into API Gateway</div>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a href="https://docs.aws.amazon.com/apigateway/api-reference/link-relation/documentationpart-import/">documentationpart:import</a>, <a>DocumentationPart</a>
 *     </div>
 */
export interface DocumentationPartIds {
  __type?: "DocumentationPartIds";
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
  export const filterSensitiveLog = (obj: DocumentationPartIds): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentationPartIds =>
    __isa(o, "DocumentationPartIds");
}

/**
 * <p>Specifies the target API entity to which the documentation applies.</p>
 */
export interface DocumentationPartLocation {
  __type?: "DocumentationPartLocation";
  /**
   * <p>The HTTP verb of a method. It is a valid field for the API entity types of  <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>,  <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any method.  When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes,  the child entity's <code>method</code> attribute must match that of the parent entity exactly.</p>
   */
  method?: string;

  /**
   * <p>The name of the targeted API entity. It is a valid and required field for the API entity types of <code>AUTHORIZER</code>, <code>MODEL</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code> and <code>RESPONSE_HEADER</code>. It is an invalid field for any other entity type.</p>
   */
  name?: string;

  /**
   * <p>The URL path of the target. It is a valid field for the API entity types of <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>/</code> for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other <code>location</code> attributes,  the child entity's <code>path</code> attribute must match that of the parent entity as a prefix.</p>
   */
  path?: string;

  /**
   * <p>The HTTP status code of a response. It is a valid field for the API entity types of <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any status code. When an applicable child  entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>statusCode</code> attribute must match that of the parent entity exactly.</p>
   */
  statusCode?: string;

  /**
   * <p>[Required] The type of API entity to which the documentation content applies. Valid values are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>,  <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Content inheritance does not apply to any entity of the <code>API</code>, <code>AUTHORIZER</code>, <code>METHOD</code>,  <code>MODEL</code>, <code>REQUEST_BODY</code>, or <code>RESOURCE</code> type.</p>
   */
  type: DocumentationPartType | string | undefined;
}

export namespace DocumentationPartLocation {
  export const filterSensitiveLog = (obj: DocumentationPartLocation): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentationPartLocation =>
    __isa(o, "DocumentationPartLocation");
}

/**
 * <p>The collection of documentation parts of an API.</p>
 *     <div class="remarks"></div>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>
 *     </div>
 */
export interface DocumentationParts {
  __type?: "DocumentationParts";
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
  export const filterSensitiveLog = (obj: DocumentationParts): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentationParts =>
    __isa(o, "DocumentationParts");
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
  RESPONSE_HEADER = "RESPONSE_HEADER"
}

/**
 * <p>A snapshot of the documentation of an API.</p>
 *     <div class="remarks"><p>Publishing API documentation involves creating a documentation version associated with an API stage and exporting the versioned documentation to an external (e.g., OpenAPI) file.</p></div>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersions</a>
 *     </div>
 */
export interface DocumentationVersion {
  __type?: "DocumentationVersion";
  /**
   * <p>The date when the API documentation snapshot is created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The description of the API documentation snapshot.</p>
   */
  description?: string;

  /**
   * <p>The version identifier of the API documentation snapshot.</p>
   */
  version?: string;
}

export namespace DocumentationVersion {
  export const filterSensitiveLog = (obj: DocumentationVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentationVersion =>
    __isa(o, "DocumentationVersion");
}

/**
 * <p>The collection of documentation snapshots of an API. </p>
 *     <div class="remarks"><p>Use the <a>DocumentationVersions</a> to manage documentation snapshots associated with various API stages.</p></div>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersion</a>
 *     </div>
 */
export interface DocumentationVersions {
  __type?: "DocumentationVersions";
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
  export const filterSensitiveLog = (obj: DocumentationVersions): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentationVersions =>
    __isa(o, "DocumentationVersions");
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
  __type?: "DomainName";
  /**
   * <p>The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  certificateArn?: string;

  /**
   * <p>The name of the certificate that will be used by edge-optimized endpoint for this domain name.</p>
   */
  certificateName?: string;

  /**
   * <p>The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.</p>
   */
  certificateUploadDate?: Date;

  /**
   * <p>The domain name of the Amazon CloudFront distribution associated with this custom domain name for an edge-optimized endpoint. You set up this association when adding a DNS record pointing the custom domain name to this distribution name. For more information about CloudFront distributions, see the <a target="_blank" href="https://aws.amazon.com/documentation/cloudfront/">Amazon CloudFront documentation</a>.</p>
   */
  distributionDomainName?: string;

  /**
   * <p>The region-agnostic Amazon Route 53 Hosted Zone ID of the edge-optimized endpoint. The valid value is <code>Z2FDTNDATAQYW2</code> for all the regions. For more information, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html">Set up a Regional Custom Domain Name</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region">AWS Regions and Endpoints for API Gateway</a>. </p>
   */
  distributionHostedZoneId?: string;

  /**
   * <p>The custom domain name as an API host name, for example, <code>my-api.example.com</code>.</p>
   */
  domainName?: string;

  /**
   * <p>The status of the <a>DomainName</a> migration. The valid values are <code>AVAILABLE</code> and <code>UPDATING</code>. If the status is <code>UPDATING</code>, the domain cannot be modified further until the existing operation is complete. If it is <code>AVAILABLE</code>, the domain can be updated.</p>
   */
  domainNameStatus?: DomainNameStatus | string;

  /**
   * <p>An optional text message containing detailed information about status of the <a>DomainName</a> migration.</p>
   */
  domainNameStatusMessage?: string;

  /**
   * <p>The endpoint configuration of this <a>DomainName</a> showing the endpoint types of the domain name. </p>
   */
  endpointConfiguration?: EndpointConfiguration;

  /**
   * <p>The reference to an AWS-managed certificate that will be used for validating the regional domain name. AWS Certificate Manager is the only supported source.</p>
   */
  regionalCertificateArn?: string;

  /**
   * <p>The name of the certificate that will be used for validating the regional domain name.</p>
   */
  regionalCertificateName?: string;

  /**
   * <p>The domain name associated with the regional endpoint for this custom domain name. You set up this association by adding a DNS record that points the custom domain name to this regional domain name. The regional domain name is returned by API Gateway when you create a regional endpoint.</p>
   */
  regionalDomainName?: string;

  /**
   * <p>The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint. For more information, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html">Set up a Regional Custom Domain Name</a> and  <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region">AWS Regions and Endpoints for API Gateway</a>. </p>
   */
  regionalHostedZoneId?: string;

  /**
   * <p>The Transport Layer Security (TLS) version + cipher suite for this <a>DomainName</a>. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.</p>
   */
  securityPolicy?: SecurityPolicy | string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace DomainName {
  export const filterSensitiveLog = (obj: DomainName): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainName => __isa(o, "DomainName");
}

/**
 * <p>Represents a collection of <a>DomainName</a> resources.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Client-Side Certificate</a>
 *       </div>
 */
export interface DomainNames {
  __type?: "DomainNames";
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
  export const filterSensitiveLog = (obj: DomainNames): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainNames => __isa(o, "DomainNames");
}

export enum DomainNameStatus {
  AVAILABLE = "AVAILABLE",
  PENDING = "PENDING",
  UPDATING = "UPDATING"
}

/**
 * <p>The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. </p>
 */
export interface EndpointConfiguration {
  __type?: "EndpointConfiguration";
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
  export const filterSensitiveLog = (obj: EndpointConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is EndpointConfiguration =>
    __isa(o, "EndpointConfiguration");
}

export type EndpointType = "EDGE" | "PRIVATE" | "REGIONAL";

/**
 * <p>The binary blob response to <a>GetExport</a>, which contains the generated SDK.</p>
 */
export interface ExportResponse {
  __type?: "ExportResponse";
  /**
   * <p>The binary blob response to <a>GetExport</a>, which contains the export.</p>
   */
  body?: Uint8Array;

  /**
   * <p>The content-disposition header value in the HTTP response.</p>
   */
  contentDisposition?: string;

  /**
   * <p>The content-type header value in the HTTP response. This will correspond to a valid 'accept' type in the request.</p>
   */
  contentType?: string;
}

export namespace ExportResponse {
  export const filterSensitiveLog = (obj: ExportResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportResponse =>
    __isa(o, "ExportResponse");
}

/**
 * <p>Request to flush authorizer cache entries on a specified stage.</p>
 */
export interface FlushStageAuthorizersCacheRequest {
  __type?: "FlushStageAuthorizersCacheRequest";
  name?: string;
  /**
   * <p>The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>The name of the stage to flush.</p>
   */
  stageName: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace FlushStageAuthorizersCacheRequest {
  export const filterSensitiveLog = (
    obj: FlushStageAuthorizersCacheRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FlushStageAuthorizersCacheRequest =>
    __isa(o, "FlushStageAuthorizersCacheRequest");
}

/**
 * <p>Requests API Gateway to flush a stage's cache.</p>
 */
export interface FlushStageCacheRequest {
  __type?: "FlushStageCacheRequest";
  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the stage to flush its cache.</p>
   */
  stageName: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace FlushStageCacheRequest {
  export const filterSensitiveLog = (obj: FlushStageCacheRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is FlushStageCacheRequest =>
    __isa(o, "FlushStageCacheRequest");
}

/**
 * <p>A gateway response of a given response type and status code, with optional response parameters and mapping templates.</p>
 *         <div class="remarks">
 *             For more information about valid gateway response types, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html">Gateway Response Types Supported by API Gateway</a>
 *
 *   <div class="example">
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
 *
 *         </div>
 *         <div class="seeAlso">
 *           <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html">Customize Gateway Responses</a>
 *         </div>
 */
export interface GatewayResponse {
  __type?: "GatewayResponse";
  /**
   * <p>A Boolean flag to indicate whether this <a>GatewayResponse</a> is the default gateway response (<code>true</code>) or not (<code>false</code>). A default gateway response is one generated by API Gateway without any customization by an API developer. </p>
   */
  defaultResponse?: boolean;

  /**
   * <p>Response parameters (paths, query strings and headers) of the <a>GatewayResponse</a> as a string-to-string map of key-value  pairs.</p>
   */
  responseParameters?: { [key: string]: string };

  /**
   * <p>Response templates of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p>
   */
  responseTemplates?: { [key: string]: string };

  /**
   * <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p>
   */
  responseType?: GatewayResponseType | string;

  /**
   * <p>The HTTP status code for this <a>GatewayResponse</a>.</p>
   */
  statusCode?: string;
}

export namespace GatewayResponse {
  export const filterSensitiveLog = (obj: GatewayResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GatewayResponse =>
    __isa(o, "GatewayResponse");
}

/**
 * <p>The collection of the <a>GatewayResponse</a> instances of a <a>RestApi</a> as a <code>responseType</code>-to-<a>GatewayResponse</a> object map of key-value pairs. As such, pagination is not supported for querying this collection.</p>
 *         <div class="remarks">
 *             For more information about valid gateway response types, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html">Gateway Response Types Supported by API Gateway</a>
 *
 *   <div class="example">
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
 *
 *         </div>
 *         <div class="seeAlso">
 *           <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html">Customize Gateway Responses</a>
 *         </div>
 */
export interface GatewayResponses {
  __type?: "GatewayResponses";
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
  export const filterSensitiveLog = (obj: GatewayResponses): any => ({
    ...obj
  });
  export const isa = (o: any): o is GatewayResponses =>
    __isa(o, "GatewayResponses");
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
  UNSUPPORTED_MEDIA_TYPE = "UNSUPPORTED_MEDIA_TYPE"
}

/**
 * <p>A request to generate a <a>ClientCertificate</a> resource.</p>
 */
export interface GenerateClientCertificateRequest {
  __type?: "GenerateClientCertificateRequest";
  /**
   * <p>The description of the <a>ClientCertificate</a>.</p>
   */
  description?: string;

  name?: string;
  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string };

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GenerateClientCertificateRequest {
  export const filterSensitiveLog = (
    obj: GenerateClientCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GenerateClientCertificateRequest =>
    __isa(o, "GenerateClientCertificateRequest");
}

/**
 * <p>Requests API Gateway to get information about the current <a>Account</a> resource.</p>
 */
export interface GetAccountRequest {
  __type?: "GetAccountRequest";
  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetAccountRequest {
  export const filterSensitiveLog = (obj: GetAccountRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccountRequest =>
    __isa(o, "GetAccountRequest");
}

/**
 * <p>A request to get information about the current <a>ApiKey</a> resource.</p>
 */
export interface GetApiKeyRequest {
  __type?: "GetApiKeyRequest";
  /**
   * <p>[Required] The identifier of the <a>ApiKey</a> resource.</p>
   */
  apiKey: string | undefined;

  /**
   * <p>A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains the key value.</p>
   */
  includeValue?: boolean;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetApiKeyRequest {
  export const filterSensitiveLog = (obj: GetApiKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetApiKeyRequest =>
    __isa(o, "GetApiKeyRequest");
}

/**
 * <p>A request to get information about the current <a>ApiKeys</a> resource.</p>
 */
export interface GetApiKeysRequest {
  __type?: "GetApiKeysRequest";
  /**
   * <p>The identifier of a customer in AWS Marketplace or an external system, such as a developer portal.</p>
   */
  customerId?: string;

  /**
   * <p>A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains key values.</p>
   */
  includeValues?: boolean;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The name of queried API keys.</p>
   */
  nameQuery?: string;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetApiKeysRequest {
  export const filterSensitiveLog = (obj: GetApiKeysRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetApiKeysRequest =>
    __isa(o, "GetApiKeysRequest");
}

/**
 * <p>Request to describe an existing <a>Authorizer</a> resource.</p>
 */
export interface GetAuthorizerRequest {
  __type?: "GetAuthorizerRequest";
  /**
   * <p>[Required] The identifier of the <a>Authorizer</a> resource.</p>
   */
  authorizerId: string | undefined;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetAuthorizerRequest {
  export const filterSensitiveLog = (obj: GetAuthorizerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAuthorizerRequest =>
    __isa(o, "GetAuthorizerRequest");
}

/**
 * <p>Request to describe an existing <a>Authorizers</a> resource.</p>
 */
export interface GetAuthorizersRequest {
  __type?: "GetAuthorizersRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetAuthorizersRequest {
  export const filterSensitiveLog = (obj: GetAuthorizersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAuthorizersRequest =>
    __isa(o, "GetAuthorizersRequest");
}

/**
 * <p>Request to describe a <a>BasePathMapping</a> resource.</p>
 */
export interface GetBasePathMappingRequest {
  __type?: "GetBasePathMappingRequest";
  /**
   * <p>[Required] The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify any base path name after the domain name.</p>
   */
  basePath: string | undefined;

  /**
   * <p>[Required] The domain name of the <a>BasePathMapping</a> resource to be described.</p>
   */
  domainName: string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetBasePathMappingRequest {
  export const filterSensitiveLog = (obj: GetBasePathMappingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBasePathMappingRequest =>
    __isa(o, "GetBasePathMappingRequest");
}

/**
 * <p>A request to get information about a collection of <a>BasePathMapping</a> resources.</p>
 */
export interface GetBasePathMappingsRequest {
  __type?: "GetBasePathMappingsRequest";
  /**
   * <p>[Required] The domain name of a <a>BasePathMapping</a> resource.</p>
   */
  domainName: string | undefined;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetBasePathMappingsRequest {
  export const filterSensitiveLog = (obj: GetBasePathMappingsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBasePathMappingsRequest =>
    __isa(o, "GetBasePathMappingsRequest");
}

/**
 * <p>A request to get information about the current <a>ClientCertificate</a> resource.</p>
 */
export interface GetClientCertificateRequest {
  __type?: "GetClientCertificateRequest";
  /**
   * <p>[Required] The identifier of the <a>ClientCertificate</a> resource to be described.</p>
   */
  clientCertificateId: string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetClientCertificateRequest {
  export const filterSensitiveLog = (
    obj: GetClientCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetClientCertificateRequest =>
    __isa(o, "GetClientCertificateRequest");
}

/**
 * <p>A request to get information about a collection of <a>ClientCertificate</a> resources.</p>
 */
export interface GetClientCertificatesRequest {
  __type?: "GetClientCertificatesRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetClientCertificatesRequest {
  export const filterSensitiveLog = (
    obj: GetClientCertificatesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetClientCertificatesRequest =>
    __isa(o, "GetClientCertificatesRequest");
}

/**
 * <p>Requests API Gateway to get information about a <a>Deployment</a> resource.</p>
 */
export interface GetDeploymentRequest {
  __type?: "GetDeploymentRequest";
  /**
   * <p>[Required] The identifier of the <a>Deployment</a> resource to get information about.</p>
   */
  deploymentId: string | undefined;

  /**
   * <p>A query parameter to retrieve the specified embedded resources of the returned <a>Deployment</a> resource in the response. In a REST API call, this <code>embed</code> parameter value is a list of comma-separated strings, as in  <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=var1,var2</code>. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the <code>"apisummary"</code> string.  For example, <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=apisummary</code>.</p>
   */
  embed?: string[];

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetDeploymentRequest {
  export const filterSensitiveLog = (obj: GetDeploymentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDeploymentRequest =>
    __isa(o, "GetDeploymentRequest");
}

/**
 * <p>Requests API Gateway to get information about a <a>Deployments</a> collection.</p>
 */
export interface GetDeploymentsRequest {
  __type?: "GetDeploymentsRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetDeploymentsRequest {
  export const filterSensitiveLog = (obj: GetDeploymentsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDeploymentsRequest =>
    __isa(o, "GetDeploymentsRequest");
}

/**
 * <p>Gets a specified documentation part of a given API.</p>
 */
export interface GetDocumentationPartRequest {
  __type?: "GetDocumentationPartRequest";
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  documentationPartId: string | undefined;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetDocumentationPartRequest {
  export const filterSensitiveLog = (
    obj: GetDocumentationPartRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDocumentationPartRequest =>
    __isa(o, "GetDocumentationPartRequest");
}

/**
 * <p>Gets the documentation parts of an API. The result may be filtered by the type, name, or path of API entities (targets).</p>
 */
export interface GetDocumentationPartsRequest {
  __type?: "GetDocumentationPartsRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  /**
   * <p>The status of the API documentation parts to retrieve. Valid values are <code>DOCUMENTED</code> for retrieving <a>DocumentationPart</a> resources with content and <code>UNDOCUMENTED</code> for <a>DocumentationPart</a> resources without content.</p>
   */
  locationStatus?: LocationStatusType | string;

  name?: string;
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
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>The type of API entities of the to-be-retrieved documentation parts. </p>
   */
  type?: DocumentationPartType | string;
}

export namespace GetDocumentationPartsRequest {
  export const filterSensitiveLog = (
    obj: GetDocumentationPartsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDocumentationPartsRequest =>
    __isa(o, "GetDocumentationPartsRequest");
}

/**
 * <p>Gets a documentation snapshot of an API.</p>
 */
export interface GetDocumentationVersionRequest {
  __type?: "GetDocumentationVersionRequest";
  /**
   * <p>[Required] The version identifier of the to-be-retrieved documentation snapshot.</p>
   */
  documentationVersion: string | undefined;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetDocumentationVersionRequest {
  export const filterSensitiveLog = (
    obj: GetDocumentationVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDocumentationVersionRequest =>
    __isa(o, "GetDocumentationVersionRequest");
}

/**
 * <p>Gets the documentation versions of an API.</p>
 */
export interface GetDocumentationVersionsRequest {
  __type?: "GetDocumentationVersionsRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetDocumentationVersionsRequest {
  export const filterSensitiveLog = (
    obj: GetDocumentationVersionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDocumentationVersionsRequest =>
    __isa(o, "GetDocumentationVersionsRequest");
}

/**
 * <p>Request to get the name of a <a>DomainName</a> resource.</p>
 */
export interface GetDomainNameRequest {
  __type?: "GetDomainNameRequest";
  /**
   * <p>[Required] The name of the <a>DomainName</a> resource.</p>
   */
  domainName: string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetDomainNameRequest {
  export const filterSensitiveLog = (obj: GetDomainNameRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDomainNameRequest =>
    __isa(o, "GetDomainNameRequest");
}

/**
 * <p>Request to describe a collection of <a>DomainName</a> resources.</p>
 */
export interface GetDomainNamesRequest {
  __type?: "GetDomainNamesRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetDomainNamesRequest {
  export const filterSensitiveLog = (obj: GetDomainNamesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDomainNamesRequest =>
    __isa(o, "GetDomainNamesRequest");
}

/**
 * <p>Request a new export of a <a>RestApi</a> for a particular <a>Stage</a>.</p>
 */
export interface GetExportRequest {
  __type?: "GetExportRequest";
  /**
   * <p>The content-type of the export, for example <code>application/json</code>. Currently <code>application/json</code> and <code>application/yaml</code> are supported for <code>exportType</code> of<code>oas30</code> and <code>swagger</code>. This should be specified in the <code>Accept</code> header for direct API requests.</p>
   */
  accepts?: string;

  /**
   * <p>[Required] The type of export. Acceptable values are 'oas30' for OpenAPI 3.0.x and 'swagger' for Swagger/OpenAPI 2.0.</p>
   */
  exportType: string | undefined;

  /**
   * <p>A key-value map of query string parameters that specify properties of the export, depending on the requested <code>exportType</code>. For <code>exportType</code> <code>oas30</code> and <code>swagger</code>, any combination of the following parameters are supported: <code>extensions='integrations'</code> or <code>extensions='apigateway'</code> will export the API with x-amazon-apigateway-integration extensions. <code>extensions='authorizers'</code> will export the API with  x-amazon-apigateway-authorizer extensions. <code>postman</code> will export the API with Postman extensions, allowing for import to the Postman tool</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the <a>Stage</a> that will be exported.</p>
   */
  stageName: string | undefined;
}

export namespace GetExportRequest {
  export const filterSensitiveLog = (obj: GetExportRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetExportRequest =>
    __isa(o, "GetExportRequest");
}

/**
 * <p>Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
 */
export interface GetGatewayResponseRequest {
  __type?: "GetGatewayResponseRequest";
  name?: string;
  /**
   * <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
   */
  responseType: GatewayResponseType | string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetGatewayResponseRequest {
  export const filterSensitiveLog = (obj: GetGatewayResponseRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGatewayResponseRequest =>
    __isa(o, "GetGatewayResponseRequest");
}

/**
 * <p>Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.</p>
 */
export interface GetGatewayResponsesRequest {
  __type?: "GetGatewayResponsesRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500. The <a>GatewayResponses</a> collection does not support pagination and the limit does not apply here.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set. The <a>GatewayResponse</a> collection does not support pagination and the position does not apply here.</p>
   */
  position?: string;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetGatewayResponsesRequest {
  export const filterSensitiveLog = (obj: GetGatewayResponsesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGatewayResponsesRequest =>
    __isa(o, "GetGatewayResponsesRequest");
}

/**
 * <p>Represents a request to get the integration configuration.</p>
 */
export interface GetIntegrationRequest {
  __type?: "GetIntegrationRequest";
  /**
   * <p>[Required] Specifies a get integration request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>[Required] Specifies a get integration request's resource identifier</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetIntegrationRequest {
  export const filterSensitiveLog = (obj: GetIntegrationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetIntegrationRequest =>
    __isa(o, "GetIntegrationRequest");
}

/**
 * <p>Represents a get integration response request.</p>
 */
export interface GetIntegrationResponseRequest {
  __type?: "GetIntegrationResponseRequest";
  /**
   * <p>[Required] Specifies a get integration response request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>[Required] Specifies a get integration response request's resource identifier.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies a get integration response request's status code.</p>
   */
  statusCode: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetIntegrationResponseRequest {
  export const filterSensitiveLog = (
    obj: GetIntegrationResponseRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetIntegrationResponseRequest =>
    __isa(o, "GetIntegrationResponseRequest");
}

/**
 * <p>Request to describe an existing <a>Method</a> resource.</p>
 */
export interface GetMethodRequest {
  __type?: "GetMethodRequest";
  /**
   * <p>[Required] Specifies the method request's HTTP method type.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetMethodRequest {
  export const filterSensitiveLog = (obj: GetMethodRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMethodRequest =>
    __isa(o, "GetMethodRequest");
}

/**
 * <p>Request to describe a <a>MethodResponse</a> resource.</p>
 */
export interface GetMethodResponseRequest {
  __type?: "GetMethodResponseRequest";
  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The status code for the <a>MethodResponse</a> resource.</p>
   */
  statusCode: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetMethodResponseRequest {
  export const filterSensitiveLog = (obj: GetMethodResponseRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMethodResponseRequest =>
    __isa(o, "GetMethodResponseRequest");
}

/**
 * <p>Request to list information about a model in an existing <a>RestApi</a> resource.</p>
 */
export interface GetModelRequest {
  __type?: "GetModelRequest";
  /**
   * <p>A query parameter of a Boolean value to resolve (<code>true</code>) all external model references and returns a flattened model schema or not (<code>false</code>) The default is <code>false</code>.</p>
   */
  flatten?: boolean;

  /**
   * <p>[Required] The name of the model as an identifier.</p>
   */
  modelName: string | undefined;

  name?: string;
  /**
   * <p>[Required] The <a>RestApi</a> identifier under which the <a>Model</a> exists.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetModelRequest {
  export const filterSensitiveLog = (obj: GetModelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetModelRequest =>
    __isa(o, "GetModelRequest");
}

/**
 * <p>Request to list existing <a>Models</a> defined for a <a>RestApi</a> resource.</p>
 */
export interface GetModelsRequest {
  __type?: "GetModelsRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetModelsRequest {
  export const filterSensitiveLog = (obj: GetModelsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetModelsRequest =>
    __isa(o, "GetModelsRequest");
}

/**
 * <p>Request to generate a sample mapping template used to transform the payload.</p>
 */
export interface GetModelTemplateRequest {
  __type?: "GetModelTemplateRequest";
  /**
   * <p>[Required] The name of the model for which to generate a template.</p>
   */
  modelName: string | undefined;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetModelTemplateRequest {
  export const filterSensitiveLog = (obj: GetModelTemplateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetModelTemplateRequest =>
    __isa(o, "GetModelTemplateRequest");
}

/**
 * <p>Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 */
export interface GetRequestValidatorRequest {
  __type?: "GetRequestValidatorRequest";
  name?: string;
  /**
   * <p>[Required] The identifier of the <a>RequestValidator</a> to be retrieved.</p>
   */
  requestValidatorId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetRequestValidatorRequest {
  export const filterSensitiveLog = (obj: GetRequestValidatorRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRequestValidatorRequest =>
    __isa(o, "GetRequestValidatorRequest");
}

/**
 * <p>Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.</p>
 */
export interface GetRequestValidatorsRequest {
  __type?: "GetRequestValidatorsRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetRequestValidatorsRequest {
  export const filterSensitiveLog = (
    obj: GetRequestValidatorsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRequestValidatorsRequest =>
    __isa(o, "GetRequestValidatorsRequest");
}

/**
 * <p>Request to list information about a resource.</p>
 */
export interface GetResourceRequest {
  __type?: "GetResourceRequest";
  /**
   * <p>A query parameter to retrieve the specified resources embedded in the returned <a>Resource</a> representation in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded <a>Method</a> resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods</code>.</p>
   */
  embed?: string[];

  name?: string;
  /**
   * <p>[Required] The identifier for the <a>Resource</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetResourceRequest {
  export const filterSensitiveLog = (obj: GetResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetResourceRequest =>
    __isa(o, "GetResourceRequest");
}

/**
 * <p>Request to list information about a collection of resources.</p>
 */
export interface GetResourcesRequest {
  __type?: "GetResourcesRequest";
  /**
   * <p>A query parameter used to retrieve the specified resources embedded in the returned <a>Resources</a> resource in the response.  This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded <a>Method</a> resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources?embed=methods</code>.</p>
   */
  embed?: string[];

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetResourcesRequest {
  export const filterSensitiveLog = (obj: GetResourcesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetResourcesRequest =>
    __isa(o, "GetResourcesRequest");
}

/**
 * <p>The GET request to list an existing <a>RestApi</a> defined for your collection. </p>
 */
export interface GetRestApiRequest {
  __type?: "GetRestApiRequest";
  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetRestApiRequest {
  export const filterSensitiveLog = (obj: GetRestApiRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRestApiRequest =>
    __isa(o, "GetRestApiRequest");
}

/**
 * <p>The GET request to list existing <a>RestApis</a> defined for your collection.</p>
 */
export interface GetRestApisRequest {
  __type?: "GetRestApisRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetRestApisRequest {
  export const filterSensitiveLog = (obj: GetRestApisRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRestApisRequest =>
    __isa(o, "GetRestApisRequest");
}

/**
 * <p>Request a new generated client SDK for a <a>RestApi</a> and <a>Stage</a>.</p>
 */
export interface GetSdkRequest {
  __type?: "GetSdkRequest";
  /**
   * <p>A string-to-string key-value map of query parameters <code>sdkType</code>-dependent properties of the SDK. For <code>sdkType</code> of <code>objectivec</code> or <code>swift</code>,  a parameter named <code>classPrefix</code> is required. For <code>sdkType</code> of <code>android</code>, parameters named <code>groupId</code>, <code>artifactId</code>, <code>artifactVersion</code>, and <code>invokerPackage</code> are required. For <code>sdkType</code> of <code>java</code>, parameters named <code>serviceName</code> and <code>javaPackageName</code> are required. </p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The language for the generated SDK. Currently <code>java</code>, <code>javascript</code>, <code>android</code>, <code>objectivec</code> (for iOS), <code>swift</code> (for iOS), and <code>ruby</code>  are supported.</p>
   */
  sdkType: string | undefined;

  /**
   * <p>[Required] The name of the <a>Stage</a> that the SDK will use.</p>
   */
  stageName: string | undefined;
}

export namespace GetSdkRequest {
  export const filterSensitiveLog = (obj: GetSdkRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSdkRequest => __isa(o, "GetSdkRequest");
}

/**
 * <p>Get an <a>SdkType</a> instance.</p>
 */
export interface GetSdkTypeRequest {
  __type?: "GetSdkTypeRequest";
  /**
   * <p>[Required] The identifier of the queried <a>SdkType</a> instance.</p>
   */
  id: string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetSdkTypeRequest {
  export const filterSensitiveLog = (obj: GetSdkTypeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSdkTypeRequest =>
    __isa(o, "GetSdkTypeRequest");
}

/**
 * <p>Get the <a>SdkTypes</a> collection.</p>
 */
export interface GetSdkTypesRequest {
  __type?: "GetSdkTypesRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetSdkTypesRequest {
  export const filterSensitiveLog = (obj: GetSdkTypesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSdkTypesRequest =>
    __isa(o, "GetSdkTypesRequest");
}

/**
 * <p>Requests API Gateway to get information about a <a>Stage</a> resource.</p>
 */
export interface GetStageRequest {
  __type?: "GetStageRequest";
  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the <a>Stage</a> resource to get information about.</p>
   */
  stageName: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetStageRequest {
  export const filterSensitiveLog = (obj: GetStageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetStageRequest =>
    __isa(o, "GetStageRequest");
}

/**
 * <p>Requests API Gateway to get information about one or more <a>Stage</a> resources.</p>
 */
export interface GetStagesRequest {
  __type?: "GetStagesRequest";
  /**
   * <p>The stages' deployment identifiers.</p>
   */
  deploymentId?: string;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetStagesRequest {
  export const filterSensitiveLog = (obj: GetStagesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetStagesRequest =>
    __isa(o, "GetStagesRequest");
}

/**
 * <p>Gets the <a>Tags</a> collection for a given resource.</p>
 */
export interface GetTagsRequest {
  __type?: "GetTagsRequest";
  /**
   * <p>(Not currently supported) The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>(Not currently supported) The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>[Required] The ARN of a resource that can be tagged. The resource ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetTagsRequest {
  export const filterSensitiveLog = (obj: GetTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTagsRequest =>
    __isa(o, "GetTagsRequest");
}

/**
 * <p>The GET request to get a usage plan key of a given key identifier.</p>
 */
export interface GetUsagePlanKeyRequest {
  __type?: "GetUsagePlanKeyRequest";
  /**
   * <p>[Required] The key Id of the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.</p>
   */
  keyId: string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.</p>
   */
  usagePlanId: string | undefined;
}

export namespace GetUsagePlanKeyRequest {
  export const filterSensitiveLog = (obj: GetUsagePlanKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUsagePlanKeyRequest =>
    __isa(o, "GetUsagePlanKeyRequest");
}

/**
 * <p>The GET request to get all the usage plan keys representing the API keys added to a specified usage plan.</p>
 */
export interface GetUsagePlanKeysRequest {
  __type?: "GetUsagePlanKeysRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>A query parameter specifying the name of the to-be-returned usage plan keys.</p>
   */
  nameQuery?: string;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-retrieved <a>UsagePlanKey</a> resource representing a plan customer.</p>
   */
  usagePlanId: string | undefined;
}

export namespace GetUsagePlanKeysRequest {
  export const filterSensitiveLog = (obj: GetUsagePlanKeysRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUsagePlanKeysRequest =>
    __isa(o, "GetUsagePlanKeysRequest");
}

/**
 * <p>The GET request to get a usage plan of a given plan identifier.</p>
 */
export interface GetUsagePlanRequest {
  __type?: "GetUsagePlanRequest";
  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The identifier of the <a>UsagePlan</a> resource to be retrieved.</p>
   */
  usagePlanId: string | undefined;
}

export namespace GetUsagePlanRequest {
  export const filterSensitiveLog = (obj: GetUsagePlanRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUsagePlanRequest =>
    __isa(o, "GetUsagePlanRequest");
}

/**
 * <p>The GET request to get all the usage plans of the caller's account.</p>
 */
export interface GetUsagePlansRequest {
  __type?: "GetUsagePlansRequest";
  /**
   * <p>The identifier of the API key associated with the usage plans.</p>
   */
  keyId?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetUsagePlansRequest {
  export const filterSensitiveLog = (obj: GetUsagePlansRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUsagePlansRequest =>
    __isa(o, "GetUsagePlansRequest");
}

/**
 * <p>The GET request to get the usage data of a usage plan in a specified time interval.</p>
 */
export interface GetUsageRequest {
  __type?: "GetUsageRequest";
  /**
   * <p>[Required] The ending date (e.g., 2016-12-31) of the usage data.</p>
   */
  endDate: string | undefined;

  /**
   * <p>The Id of the API key associated with the resultant usage data.</p>
   */
  keyId?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>[Required] The starting date (e.g., 2016-01-01) of the usage data.</p>
   */
  startDate: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The Id of the usage plan associated with the usage data.</p>
   */
  usagePlanId: string | undefined;
}

export namespace GetUsageRequest {
  export const filterSensitiveLog = (obj: GetUsageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUsageRequest =>
    __isa(o, "GetUsageRequest");
}

/**
 * <p>Gets a specified VPC link under the caller's account in a region.</p>
 */
export interface GetVpcLinkRequest {
  __type?: "GetVpcLinkRequest";
  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The identifier of the  <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>
   */
  vpcLinkId: string | undefined;
}

export namespace GetVpcLinkRequest {
  export const filterSensitiveLog = (obj: GetVpcLinkRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetVpcLinkRequest =>
    __isa(o, "GetVpcLinkRequest");
}

/**
 * <p>Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.</p>
 */
export interface GetVpcLinksRequest {
  __type?: "GetVpcLinksRequest";
  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  name?: string;
  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace GetVpcLinksRequest {
  export const filterSensitiveLog = (obj: GetVpcLinksRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetVpcLinksRequest =>
    __isa(o, "GetVpcLinksRequest");
}

/**
 * <p>The POST request to import API keys from an external source, such as a CSV-formatted file.</p>
 */
export interface ImportApiKeysRequest {
  __type?: "ImportApiKeysRequest";
  /**
   * <p>A query parameter to indicate whether to rollback <a>ApiKey</a> importation (<code>true</code>) or not (<code>false</code>) when error is encountered.</p>
   */
  failOnWarnings?: boolean;

  /**
   * <p>A query parameter to specify the input format to imported API keys. Currently, only the <code>csv</code> format is supported.</p>
   */
  format: ApiKeysFormat | string | undefined;

  name?: string;
  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace ImportApiKeysRequest {
  export const filterSensitiveLog = (obj: ImportApiKeysRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportApiKeysRequest =>
    __isa(o, "ImportApiKeysRequest");
}

/**
 * <p>Import documentation parts from an external (e.g., OpenAPI) definition file. </p>
 */
export interface ImportDocumentationPartsRequest {
  __type?: "ImportDocumentationPartsRequest";
  /**
   * <p>A query parameter to specify whether to rollback the documentation importation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.</p>
   */
  failOnWarnings?: boolean;

  /**
   * <p>A query parameter to indicate whether to overwrite (<code>OVERWRITE</code>) any existing <a>DocumentationParts</a> definition or to merge (<code>MERGE</code>) the new definition into the existing one. The default value is <code>MERGE</code>.</p>
   */
  mode?: PutMode | string;

  name?: string;
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace ImportDocumentationPartsRequest {
  export const filterSensitiveLog = (
    obj: ImportDocumentationPartsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportDocumentationPartsRequest =>
    __isa(o, "ImportDocumentationPartsRequest");
}

/**
 * <p>A POST request to import an API to API Gateway using an input of an API definition file.</p>
 */
export interface ImportRestApiRequest {
  __type?: "ImportRestApiRequest";
  /**
   * <p>A query parameter to indicate whether to rollback the API creation (<code>true</code>) or not (<code>false</code>)
   *             when a warning is encountered. The default value is <code>false</code>.</p>
   */
  failOnWarnings?: boolean;

  name?: string;
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

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace ImportRestApiRequest {
  export const filterSensitiveLog = (obj: ImportRestApiRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportRestApiRequest =>
    __isa(o, "ImportRestApiRequest");
}

/**
 * <p>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</p>
 *         <div class="remarks">In the API Gateway console, the built-in Lambda integration is an AWS integration.</div>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a>
 *       </div>
 */
export interface Integration {
  __type?: "Integration";
  /**
   * <p>A list of request parameters whose values API Gateway caches. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for <a>Method</a> <code>requestParameters</code>.</p>
   */
  cacheKeyParameters?: string[];

  /**
   * <p>An API-specific tag group of related cached parameters. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for <a>Method</a> <code>requestParameters</code>.</p>
   */
  cacheNamespace?: string;

  /**
   * <p>The (<a href="https://docs.aws.amazon.com/apigateway/api-reference/resource/vpc-link/#id"><code>id</code></a>) of the <a>VpcLink</a> used for the integration when <code>connectionType=VPC_LINK</code> and undefined, otherwise.</p>
   */
  connectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.</p>
   */
  connectionType?: ConnectionType | string;

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
   * <p>Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string <code>arn:aws:iam::\*:user/\*</code>. To use resource-based permissions on supported AWS services, specify null.</p>
   */
  credentials?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  httpMethod?: string;

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
   * <p>A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of  <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.</p>
   */
  requestParameters?: { [key: string]: string };

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.</p>
   */
  requestTemplates?: { [key: string]: string };

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.</p>
   */
  timeoutInMillis?: number;

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
   * <p>Specifies Uniform Resource Identifier (URI) of the integration endpoint.</p>
   * <ul>
   * <li><p> For <code>HTTP</code> or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the <a target="_blank" href="https://en.wikipedia.org/wiki/Uniform_Resource_Identifier">RFC-3986 specification</a>, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. </p>
   * </li>
   * <li><p> For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}</code>. Here, <code>{Region}</code> is the API Gateway region (e.g., <code>us-east-1</code>); <code>{service}</code> is the name of the integrated AWS service (e.g., <code>s3</code>); and <code>{subdomain}</code> is a designated subdomain supported by certain AWS service for fast host-name lookup. <code>action</code> can be used for an AWS service action-based API, using an <code>Action={name}&{p1}={v1}&p2={v2}...</code> query string. The ensuing <code>{service_api}</code> refers to a supported action <code>{name}</code> plus any required input parameters. Alternatively, <code>path</code> can be used for an AWS service path-based API. The ensuing  <code>service_api</code> refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of <code><a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html">GetObject</a></code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket={bucket}&Key={key}</code> or  <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code></p>
   * </li></ul>
   */
  uri?: string;
}

export namespace Integration {
  export const filterSensitiveLog = (obj: Integration): any => ({
    ...obj
  });
  export const isa = (o: any): o is Integration => __isa(o, "Integration");
}

/**
 * <p>Represents an integration response. The status code must map to an existing <a>MethodResponse</a>, and parameters and templates can be used to transform the back-end response.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a>
 *       </div>
 */
export interface IntegrationResponse {
  __type?: "IntegrationResponse";
  /**
   * <p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p>
   *     <ul>
   *       <li><p><code>CONVERT_TO_BINARY</code>: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p></li>
   *       <li><p><code>CONVERT_TO_TEXT</code>: Converts a response payload from a binary blob to a Base64-encoded string.</p></li>
   *     </ul>
   *     <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>
   */
  contentHandling?: ContentHandlingStrategy | string;

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
   * <p>Specifies the regular expression (regex) pattern used to choose an integration response based on the response from the back end. For example, if the success response returns nothing and the error response returns some string, you could use the <code>.+</code> regex to match error response. However, make sure that the error response does not contain any newline (<code>\n</code>) character in such cases. If the back end is an AWS Lambda function, the AWS Lambda function error header is matched. For all other HTTP and AWS back ends, the HTTP status code is matched.</p>
   */
  selectionPattern?: string;

  /**
   * <p>Specifies the status code that is used to map the integration response to an existing <a>MethodResponse</a>.</p>
   */
  statusCode?: string;
}

export namespace IntegrationResponse {
  export const filterSensitiveLog = (obj: IntegrationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is IntegrationResponse =>
    __isa(o, "IntegrationResponse");
}

export enum IntegrationType {
  AWS = "AWS",
  AWS_PROXY = "AWS_PROXY",
  HTTP = "HTTP",
  HTTP_PROXY = "HTTP_PROXY",
  MOCK = "MOCK"
}

/**
 * <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
  retryAfterSeconds?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export enum LocationStatusType {
  DOCUMENTED = "DOCUMENTED",
  UNDOCUMENTED = "UNDOCUMENTED"
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
  __type?: "Method";
  /**
   * <p>A boolean flag specifying whether a valid <a>ApiKey</a> is required to invoke this method.</p>
   */
  apiKeyRequired?: boolean;

  /**
   * <p>A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  authorizationScopes?: string[];

  /**
   * <p>The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>
   */
  authorizationType?: string;

  /**
   * <p>The identifier of an <a>Authorizer</a> to use on this method. The <code>authorizationType</code> must be <code>CUSTOM</code>.</p>
   */
  authorizerId?: string;

  /**
   * <p>The method's HTTP verb.</p>
   */
  httpMethod?: string;

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
   * <p>A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example.</p>
   */
  operationName?: string;

  /**
   * <p>A key-value map specifying data schemas, represented by <a>Model</a> resources, (as the mapped value) of the request payloads of given content types (as the mapping key).</p>
   */
  requestModels?: { [key: string]: string };

  /**
   * <p>A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key is a method request parameter name matching the pattern of  <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>).  The method request parameter names defined here are available in <a>Integration</a> to be mapped to integration request parameters or templates.</p>
   */
  requestParameters?: { [key: string]: boolean };

  /**
   * <p>The identifier of a <a>RequestValidator</a> for request validation.</p>
   */
  requestValidatorId?: string;
}

export namespace Method {
  export const filterSensitiveLog = (obj: Method): any => ({
    ...obj
  });
  export const isa = (o: any): o is Method => __isa(o, "Method");
}

/**
 * <p>Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template. <!-- &ABP; sends back the status code to the caller as the HTTP status code. Parameters and models can be used to transform the response from the method's integration.--></p>
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
  __type?: "MethodResponse";
  /**
   * <p>Specifies the <a>Model</a> resources used for the response's content-type. Response models are represented as a key/value map, with a content-type as the key and a <a>Model</a> name as the value.</p>
   */
  responseModels?: { [key: string]: string };

  /**
   * <p>A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header and the value specifies whether the associated method response header is required or not. The expression of the key must match the pattern <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. API Gateway passes certain integration response data to the method response headers specified here according to the mapping you prescribe in the API's <a>IntegrationResponse</a>. The integration response data that can be mapped include an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)</p>
   */
  responseParameters?: { [key: string]: boolean };

  /**
   * <p>The method response's status code.</p>
   */
  statusCode?: string;
}

export namespace MethodResponse {
  export const filterSensitiveLog = (obj: MethodResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is MethodResponse =>
    __isa(o, "MethodResponse");
}

/**
 * <p>Specifies the method setting properties.</p>
 */
export interface MethodSetting {
  __type?: "MethodSetting";
  /**
   * <p>Specifies whether the cached responses are encrypted. The PATCH path for this setting is <code>/{method_setting_key}/caching/dataEncrypted</code>, and the value is a Boolean.</p>
   */
  cacheDataEncrypted?: boolean;

  /**
   * <p>Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached. The PATCH path for this setting is <code>/{method_setting_key}/caching/ttlInSeconds</code>, and the value is an integer.</p>
   */
  cacheTtlInSeconds?: number;

  /**
   * <p>Specifies whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached. The PATCH path for this setting is <code>/{method_setting_key}/caching/enabled</code>, and the value is a Boolean.</p>
   */
  cachingEnabled?: boolean;

  /**
   * <p>Specifies whether data trace logging is enabled for this method, which affects the log entries pushed to Amazon CloudWatch Logs. The PATCH path for this setting is <code>/{method_setting_key}/logging/dataTrace</code>, and the value is a Boolean.</p>
   */
  dataTraceEnabled?: boolean;

  /**
   * <p>Specifies the logging level for this method, which affects the log entries pushed to Amazon CloudWatch Logs. The PATCH path for this setting is <code>/{method_setting_key}/logging/loglevel</code>, and the available levels are <code>OFF</code>, <code>ERROR</code>, and <code>INFO</code>.</p>
   */
  loggingLevel?: string;

  /**
   * <p>Specifies whether Amazon CloudWatch metrics are enabled for this method. The PATCH path for this setting is <code>/{method_setting_key}/metrics/enabled</code>, and the value is a Boolean.</p>
   */
  metricsEnabled?: boolean;

  /**
   * <p>Specifies whether authorization is required for a cache invalidation request. The PATCH path for this setting is <code>/{method_setting_key}/caching/requireAuthorizationForCacheControl</code>, and the value is a Boolean.</p>
   */
  requireAuthorizationForCacheControl?: boolean;

  /**
   * <p>Specifies the throttling burst limit. The PATCH path for this setting is <code>/{method_setting_key}/throttling/burstLimit</code>, and the value is an integer.</p>
   */
  throttlingBurstLimit?: number;

  /**
   * <p>Specifies the throttling rate limit. The PATCH path for this setting is <code>/{method_setting_key}/throttling/rateLimit</code>, and the value is a double.</p>
   */
  throttlingRateLimit?: number;

  /**
   * <p>Specifies how to handle unauthorized requests for cache invalidation. The PATCH path for this setting is <code>/{method_setting_key}/caching/unauthorizedCacheControlHeaderStrategy</code>, and the available values are <code>FAIL_WITH_403</code>, <code>SUCCEED_WITH_RESPONSE_HEADER</code>, <code>SUCCEED_WITHOUT_RESPONSE_HEADER</code>.</p>
   */
  unauthorizedCacheControlHeaderStrategy?:
    | UnauthorizedCacheControlHeaderStrategy
    | string;
}

export namespace MethodSetting {
  export const filterSensitiveLog = (obj: MethodSetting): any => ({
    ...obj
  });
  export const isa = (o: any): o is MethodSetting => __isa(o, "MethodSetting");
}

/**
 * <p>Represents a summary of a <a>Method</a> resource, given a particular date and time.</p>
 */
export interface MethodSnapshot {
  __type?: "MethodSnapshot";
  /**
   * <p>Specifies whether the method requires a valid <a>ApiKey</a>.</p>
   */
  apiKeyRequired?: boolean;

  /**
   * <p>The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>
   */
  authorizationType?: string;
}

export namespace MethodSnapshot {
  export const filterSensitiveLog = (obj: MethodSnapshot): any => ({
    ...obj
  });
  export const isa = (o: any): o is MethodSnapshot =>
    __isa(o, "MethodSnapshot");
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
  __type?: "Model";
  /**
   * <p>The content-type for the model.</p>
   */
  contentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  description?: string;

  /**
   * <p>The identifier for the model resource.</p>
   */
  id?: string;

  /**
   * <p>The name of the model. Must be an alphanumeric string.</p>
   */
  name?: string;

  /**
   * <p>The schema for the model. For <code>application/json</code> models, this should be <a target="_blank" href="https://tools.ietf.org/html/draft-zyp-json-schema-04">JSON schema draft 4</a> model. Do not include "\*\/" characters in the description of any properties because such "\*\/" characters may be interpreted as the closing marker for comments in some languages, such as Java or JavaScript, causing the installation of your API's SDK generated by API Gateway to fail.</p>
   */
  schema?: string;
}

export namespace Model {
  export const filterSensitiveLog = (obj: Model): any => ({
    ...obj
  });
  export const isa = (o: any): o is Model => __isa(o, "Model");
}

/**
 * <p>Represents a collection of <a>Model</a> resources.</p>
 *       <div class="seeAlso">
 *         <a>Method</a>, <a>MethodResponse</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a>
 *       </div>
 */
export interface Models {
  __type?: "Models";
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
  export const filterSensitiveLog = (obj: Models): any => ({
    ...obj
  });
  export const isa = (o: any): o is Models => __isa(o, "Models");
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
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotFoundException =>
    __isa(o, "NotFoundException");
}

export type Op = "add" | "copy" | "move" | "remove" | "replace" | "test";

/**
 * A single patch operation to apply to the specified resource. Please refer to
 *         http://tools.ietf.org/html/rfc6902#section-4 for an explanation of how each operation is used.
 */
export interface PatchOperation {
  __type?: "PatchOperation";
  /**
   * <p>The <code>copy</code> update operation's source as identified by a <code>JSON-Pointer</code> value referencing the location within the targeted resource to copy the value from. For example, to promote a canary deployment, you copy the canary deployment ID to the affiliated deployment ID by calling a PATCH request on a <a>Stage</a> resource with <code>"op":"copy"</code>, <code>"from":"/canarySettings/deploymentId"</code> and <code>"path":"/deploymentId"</code>.</p>
   */
  from?: string;

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
}

export namespace PatchOperation {
  export const filterSensitiveLog = (obj: PatchOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is PatchOperation =>
    __isa(o, "PatchOperation");
}

/**
 * <p>Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.</p>
 */
export interface PutGatewayResponseRequest {
  __type?: "PutGatewayResponseRequest";
  name?: string;
  /**
   * <p><p>Response parameters (paths, query strings and headers) of the <a>GatewayResponse</a> as a string-to-string map of key-value  pairs.</p></p>
   */
  responseParameters?: { [key: string]: string };

  /**
   * <p><p>Response templates of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p></p>
   */
  responseTemplates?: { [key: string]: string };

  /**
   * <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
   */
  responseType: GatewayResponseType | string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * The HTTP status code of the <a>GatewayResponse</a>.
   */
  statusCode?: string;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace PutGatewayResponseRequest {
  export const filterSensitiveLog = (obj: PutGatewayResponseRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutGatewayResponseRequest =>
    __isa(o, "PutGatewayResponseRequest");
}

/**
 * <p>Sets up a method's integration.</p>
 */
export interface PutIntegrationRequest {
  __type?: "PutIntegrationRequest";
  /**
   * <p>An API-specific tag group of related cached parameters.</p>
   */
  cacheKeyParameters?: string[];

  /**
   * <p>A list of request parameters whose values are to be cached.</p>
   */
  cacheNamespace?: string;

  /**
   * <p>The (<a href="https://docs.aws.amazon.com/apigateway/api-reference/resource/vpc-link/#id"><code>id</code></a>) of the <a>VpcLink</a> used for the integration when <code>connectionType=VPC_LINK</code> and undefined, otherwise.</p>
   */
  connectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.</p>
   */
  connectionType?: ConnectionType | string;

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
   * <p>Specifies whether credentials are required for a put integration.</p>
   */
  credentials?: string;

  /**
   * <p>[Required] Specifies a put integration request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>Specifies a put integration HTTP method. When the integration type is HTTP or AWS, this field is required.</p>
   */
  integrationHttpMethod?: string;

  name?: string;
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
   * <p>A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of  <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.</p>
   */
  requestParameters?: { [key: string]: string };

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.</p>
   */
  requestTemplates?: { [key: string]: string };

  /**
   * <p>[Required] Specifies a put integration request's resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.</p>
   */
  timeoutInMillis?: number;

  title?: string;
  /**
   * <p>[Required] Specifies a put integration input's type.</p>
   */
  type: IntegrationType | string | undefined;

  /**
   * <p>Specifies Uniform Resource Identifier (URI) of the integration endpoint.</p>
   * <ul>
   * <li><p> For <code>HTTP</code> or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the <a target="_blank" href="https://en.wikipedia.org/wiki/Uniform_Resource_Identifier">RFC-3986 specification</a>, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. </p>
   * </li>
   * <li><p> For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}</code>. Here, <code>{Region}</code> is the API Gateway region (e.g., <code>us-east-1</code>); <code>{service}</code> is the name of the integrated AWS service (e.g., <code>s3</code>); and <code>{subdomain}</code> is a designated subdomain supported by certain AWS service for fast host-name lookup. <code>action</code> can be used for an AWS service action-based API, using an <code>Action={name}&{p1}={v1}&p2={v2}...</code> query string. The ensuing <code>{service_api}</code> refers to a supported action <code>{name}</code> plus any required input parameters. Alternatively, <code>path</code> can be used for an AWS service path-based API. The ensuing  <code>service_api</code> refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of <code><a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html">GetObject</a></code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket={bucket}&Key={key}</code> or  <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code></p>
   * </li></ul>
   */
  uri?: string;
}

export namespace PutIntegrationRequest {
  export const filterSensitiveLog = (obj: PutIntegrationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutIntegrationRequest =>
    __isa(o, "PutIntegrationRequest");
}

/**
 * <p>Represents a put integration response request.</p>
 */
export interface PutIntegrationResponseRequest {
  __type?: "PutIntegrationResponseRequest";
  /**
   * <p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p>
   *     <ul>
   *       <li><p><code>CONVERT_TO_BINARY</code>: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p></li>
   *       <li><p><code>CONVERT_TO_TEXT</code>: Converts a response payload from a binary blob to a Base64-encoded string.</p></li>
   *     </ul>
   *     <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>
   */
  contentHandling?: ContentHandlingStrategy | string;

  /**
   * <p>[Required] Specifies a put integration response request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>[Required] Specifies a put integration response request's resource identifier.</p>
   */
  resourceId: string | undefined;

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
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>Specifies the selection pattern of a put integration response.</p>
   */
  selectionPattern?: string;

  /**
   * <p>[Required] Specifies the status code that is used to map the integration response to an existing <a>MethodResponse</a>.</p>
   */
  statusCode: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace PutIntegrationResponseRequest {
  export const filterSensitiveLog = (
    obj: PutIntegrationResponseRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutIntegrationResponseRequest =>
    __isa(o, "PutIntegrationResponseRequest");
}

/**
 * <p>Request to add a method to an existing <a>Resource</a> resource.</p>
 */
export interface PutMethodRequest {
  __type?: "PutMethodRequest";
  /**
   * <p>Specifies whether the method required a valid <a>ApiKey</a>.</p>
   */
  apiKeyRequired?: boolean;

  /**
   * <p>A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</p>
   */
  authorizationScopes?: string[];

  /**
   * <p>[Required] The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.</p>
   */
  authorizationType: string | undefined;

  /**
   * <p>Specifies the identifier of an <a>Authorizer</a> to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer.</p>
   */
  authorizerId?: string;

  /**
   * <p>[Required] Specifies the method request's HTTP method type.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example.</p>
   */
  operationName?: string;

  /**
   * <p>Specifies the <a>Model</a> resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a <a>Model</a> name as the value.</p>
   */
  requestModels?: { [key: string]: string };

  /**
   * <p>A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of  <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>).  The method request parameter names defined here are available in <a>Integration</a> to be mapped to integration request parameters or body-mapping templates.</p>
   */
  requestParameters?: { [key: string]: boolean };

  /**
   * <p>The identifier of a <a>RequestValidator</a> for validating the method request.</p>
   */
  requestValidatorId?: string;

  /**
   * <p>[Required] The <a>Resource</a> identifier for the new <a>Method</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace PutMethodRequest {
  export const filterSensitiveLog = (obj: PutMethodRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutMethodRequest =>
    __isa(o, "PutMethodRequest");
}

/**
 * <p>Request to add a <a>MethodResponse</a> to an existing <a>Method</a> resource.</p>
 */
export interface PutMethodResponseRequest {
  __type?: "PutMethodResponseRequest";
  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>Specifies the <a>Model</a> resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a <a>Model</a> name as the value.</p>
   */
  responseModels?: { [key: string]: string };

  /**
   * <p>A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)</p>
   */
  responseParameters?: { [key: string]: boolean };

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The method response's status code.</p>
   */
  statusCode: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace PutMethodResponseRequest {
  export const filterSensitiveLog = (obj: PutMethodResponseRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutMethodResponseRequest =>
    __isa(o, "PutMethodResponseRequest");
}

export enum PutMode {
  Merge = "merge",
  Overwrite = "overwrite"
}

/**
 * <p>A PUT request to update an existing API, with external API definitions specified as the request body.</p>
 */
export interface PutRestApiRequest {
  __type?: "PutRestApiRequest";
  /**
   * <p>A query parameter to indicate whether to rollback the API update (<code>true</code>) or not (<code>false</code>)
   *             when a warning is encountered. The default value is <code>false</code>.</p>
   */
  failOnWarnings?: boolean;

  /**
   * <p>The <code>mode</code> query parameter to specify the update mode. Valid values are "merge" and "overwrite". By default,
   *         the update mode is "merge".</p>
   */
  mode?: PutMode | string;

  name?: string;
  /**
   * <p>Custom header parameters as part of the request. For example, to exclude <a>DocumentationParts</a> from an imported API, set <code>ignore=documentation</code> as a <code>parameters</code> value, as in the AWS CLI command of <code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code>.</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace PutRestApiRequest {
  export const filterSensitiveLog = (obj: PutRestApiRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutRestApiRequest =>
    __isa(o, "PutRestApiRequest");
}

export enum QuotaPeriodType {
  DAY = "DAY",
  MONTH = "MONTH",
  WEEK = "WEEK"
}

/**
 * <p>Quotas configured for a usage plan.</p>
 */
export interface QuotaSettings {
  __type?: "QuotaSettings";
  /**
   * <p>The maximum number of requests that can be made in a given time period.</p>
   */
  limit?: number;

  /**
   * <p>The number of requests subtracted from the given limit in the initial time period.</p>
   */
  offset?: number;

  /**
   * <p>The time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".</p>
   */
  period?: QuotaPeriodType | string;
}

export namespace QuotaSettings {
  export const filterSensitiveLog = (obj: QuotaSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is QuotaSettings => __isa(o, "QuotaSettings");
}

/**
 * <p>A set of validation rules for incoming <a>Method</a> requests.</p>
 *         <div class="remarks">
 *           <p>In OpenAPI, a <a>RequestValidator</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.requestValidator.html">x-amazon-apigateway-request-validators.requestValidator</a> object. It the referenced using the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validator">x-amazon-apigateway-request-validator</a> property.</p>
 *         </div>
 *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
 */
export interface RequestValidator {
  __type?: "RequestValidator";
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
  export const filterSensitiveLog = (obj: RequestValidator): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestValidator =>
    __isa(o, "RequestValidator");
}

/**
 * <p>A collection of <a>RequestValidator</a> resources of a given <a>RestApi</a>.</p>
 *         <div class="remarks">
 *           <p>In OpenAPI, the <a>RequestValidators</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.html">x-amazon-apigateway-request-validators</a> extension.</p>
 *         </div>
 *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
 */
export interface RequestValidators {
  __type?: "RequestValidators";
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
  export const filterSensitiveLog = (obj: RequestValidators): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestValidators =>
    __isa(o, "RequestValidators");
}

/**
 * <p>Represents an API resource.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a>
 *       </div>
 */
export interface Resource {
  __type?: "Resource";
  /**
   * <p>The resource's identifier.</p>
   */
  id?: string;

  /**
   * <p>The parent resource's identifier.</p>
   */
  parentId?: string;

  /**
   * <p>The full path for this resource.</p>
   */
  path?: string;

  /**
   * <p>The last path segment for this resource.</p>
   */
  pathPart?: string;

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
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj
  });
  export const isa = (o: any): o is Resource => __isa(o, "Resource");
}

/**
 * <p>Represents a collection of <a>Resource</a> resources.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a>
 *       </div>
 */
export interface Resources {
  __type?: "Resources";
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
  export const filterSensitiveLog = (obj: Resources): any => ({
    ...obj
  });
  export const isa = (o: any): o is Resources => __isa(o, "Resources");
}

/**
 * <p>Represents a REST API.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a>
 *       </div>
 */
export interface RestApi {
  __type?: "RestApi";
  /**
   * <p>The source of the API key for metering requests according to a usage plan. Valid values are: <ul><li><code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. </li><li><code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.</li></ul> </p>
   */
  apiKeySource?: ApiKeySourceType | string;

  /**
   * <p>The list of binary media types supported by the <a>RestApi</a>. By default, the <a>RestApi</a> supports only UTF-8-encoded text payloads.</p>
   */
  binaryMediaTypes?: string[];

  /**
   * <p>The timestamp when the API was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The API's description.</p>
   */
  description?: string;

  /**
   * <p>The endpoint configuration of this <a>RestApi</a> showing the endpoint types of the API. </p>
   */
  endpointConfiguration?: EndpointConfiguration;

  /**
   * <p>The API's identifier. This identifier is unique across all of your APIs in API Gateway.</p>
   */
  id?: string;

  /**
   * <p>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</p>
   */
  minimumCompressionSize?: number;

  /**
   * <p>The API's name.</p>
   */
  name?: string;

  /**
   * A stringified JSON policy document that applies to this RestApi regardless of the caller and <a>Method</a> configuration.
   */
  policy?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A version identifier for the API.</p>
   */
  version?: string;

  /**
   * <p>The warning messages reported when <code>failonwarnings</code> is turned on during API import.</p>
   */
  warnings?: string[];
}

export namespace RestApi {
  export const filterSensitiveLog = (obj: RestApi): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestApi => __isa(o, "RestApi");
}

/**
 * <p>Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a>
 *       </div>
 */
export interface RestApis {
  __type?: "RestApis";
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
  export const filterSensitiveLog = (obj: RestApis): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestApis => __isa(o, "RestApis");
}

/**
 * <p>A configuration property of an SDK type.</p>
 */
export interface SdkConfigurationProperty {
  __type?: "SdkConfigurationProperty";
  /**
   * <p>The default value of an <a>SdkType</a> configuration property.</p>
   */
  defaultValue?: string;

  /**
   * <p>The description of an <a>SdkType</a> configuration property.</p>
   */
  description?: string;

  /**
   * <p>The user-friendly name of an <a>SdkType</a> configuration property.</p>
   */
  friendlyName?: string;

  /**
   * <p>The name of a an <a>SdkType</a> configuration property.</p>
   */
  name?: string;

  /**
   * <p>A boolean flag of an <a>SdkType</a> configuration property to indicate if the associated SDK configuration property is required (<code>true</code>) or not (<code>false</code>).</p>
   */
  required?: boolean;
}

export namespace SdkConfigurationProperty {
  export const filterSensitiveLog = (obj: SdkConfigurationProperty): any => ({
    ...obj
  });
  export const isa = (o: any): o is SdkConfigurationProperty =>
    __isa(o, "SdkConfigurationProperty");
}

/**
 * <p>The binary blob response to <a>GetSdk</a>, which contains the generated SDK.</p>
 */
export interface SdkResponse {
  __type?: "SdkResponse";
  /**
   * <p>The binary blob response to <a>GetSdk</a>, which contains the generated SDK.</p>
   */
  body?: Uint8Array;

  /**
   * <p>The content-disposition header value in the HTTP response.</p>
   */
  contentDisposition?: string;

  /**
   * <p>The content-type header value in the HTTP response.</p>
   */
  contentType?: string;
}

export namespace SdkResponse {
  export const filterSensitiveLog = (obj: SdkResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SdkResponse => __isa(o, "SdkResponse");
}

/**
 * <p>A type of SDK that API Gateway can generate.</p>
 */
export interface SdkType {
  __type?: "SdkType";
  /**
   * <p>A list of configuration properties of an <a>SdkType</a>.</p>
   */
  configurationProperties?: SdkConfigurationProperty[];

  /**
   * <p>The description of an <a>SdkType</a>.</p>
   */
  description?: string;

  /**
   * <p>The user-friendly name of an <a>SdkType</a> instance.</p>
   */
  friendlyName?: string;

  /**
   * <p>The identifier of an <a>SdkType</a> instance.</p>
   */
  id?: string;
}

export namespace SdkType {
  export const filterSensitiveLog = (obj: SdkType): any => ({
    ...obj
  });
  export const isa = (o: any): o is SdkType => __isa(o, "SdkType");
}

/**
 * <p>The collection of <a>SdkType</a> instances.</p>
 */
export interface SdkTypes {
  __type?: "SdkTypes";
  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: SdkType[];
}

export namespace SdkTypes {
  export const filterSensitiveLog = (obj: SdkTypes): any => ({
    ...obj
  });
  export const isa = (o: any): o is SdkTypes => __isa(o, "SdkTypes");
}

export type SecurityPolicy = "TLS_1_0" | "TLS_1_2";

/**
 * <p>The requested service is not available. For details see the accompanying error message. Retry after the specified time period.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
  retryAfterSeconds?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (
    obj: ServiceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableException =>
    __isa(o, "ServiceUnavailableException");
}

/**
 * <p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploy an API</a>
 *       </div>
 */
export interface Stage {
  __type?: "Stage";
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  accessLogSettings?: AccessLogSettings;

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
   * <p>Settings for the canary deployment in this stage.</p>
   */
  canarySettings?: CanarySettings;

  /**
   * <p>The identifier of a client certificate for an API stage.</p>
   */
  clientCertificateId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The identifier of the <a>Deployment</a> that the stage points to.</p>
   */
  deploymentId?: string;

  /**
   * <p>The stage's description.</p>
   */
  description?: string;

  /**
   * <p>The version of the associated API documentation.</p>
   */
  documentationVersion?: string;

  /**
   * <p>The timestamp when the stage last updated.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>A map that defines the method settings for a <a>Stage</a> resource. Keys (designated as <code>/{method_setting_key</code> below) are method paths defined as <code>{resource_path}/{http_method}</code> for an individual method override, or <code>/\*\/\*</code> for overriding all methods in the stage.  <!-- Any forward slash ("/") characters in the <code>resource_path</code> part must be encoded as "~1" as in, for example, <code>~1resource~1sub-resource/GET</code>.--></p>
   */
  methodSettings?: { [key: string]: MethodSetting };

  /**
   * <p>The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  stageName?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>
   */
  tracingEnabled?: boolean;

  /**
   * <p>A map that defines the stage variables for a <a>Stage</a> resource. Variable names can
   *           have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&=,]+</code>.</p>
   */
  variables?: { [key: string]: string };

  /**
   * <p>The ARN of the WebAcl associated with the <a>Stage</a>.</p>
   */
  webAclArn?: string;
}

export namespace Stage {
  export const filterSensitiveLog = (obj: Stage): any => ({
    ...obj
  });
  export const isa = (o: any): o is Stage => __isa(o, "Stage");
}

/**
 * <p>A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.</p>
 */
export interface StageKey {
  __type?: "StageKey";
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
  export const filterSensitiveLog = (obj: StageKey): any => ({
    ...obj
  });
  export const isa = (o: any): o is StageKey => __isa(o, "StageKey");
}

/**
 * <p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p>
 *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html">Deploying API in Stages</a></div>
 */
export interface Stages {
  __type?: "Stages";
  /**
   * <p>The current page of elements from this collection.</p>
   */
  item?: Stage[];
}

export namespace Stages {
  export const filterSensitiveLog = (obj: Stages): any => ({
    ...obj
  });
  export const isa = (o: any): o is Stages => __isa(o, "Stages");
}

/**
 * <p>Adds or updates a tag on a given resource.</p>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  name?: string;
  /**
   * <p>[Required] The ARN of a resource that can be tagged. The resource ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>[Required] The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags: { [key: string]: string } | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

/**
 * <p>The collection of tags. Each tag element is associated with a given resource.</p>
 */
export interface Tags {
  __type?: "Tags";
  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace Tags {
  export const filterSensitiveLog = (obj: Tags): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tags => __isa(o, "Tags");
}

/**
 * <p>Represents a mapping template used to transform a payload.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings">Mapping Templates</a>
 *       </div>
 */
export interface Template {
  __type?: "Template";
  /**
   * <p>The Apache <a target="_blank" href="https://velocity.apache.org/engine/devel/vtl-reference-guide.html">Velocity Template Language (VTL)</a> template content used for the template resource.</p>
   */
  value?: string;
}

export namespace Template {
  export const filterSensitiveLog = (obj: Template): any => ({
    ...obj
  });
  export const isa = (o: any): o is Template => __isa(o, "Template");
}

/**
 * <p>Make a request to simulate the execution of an <a>Authorizer</a>.</p>
 */
export interface TestInvokeAuthorizerRequest {
  __type?: "TestInvokeAuthorizerRequest";
  /**
   * <p>[Optional] A key-value map of additional context variables.</p>
   */
  additionalContext?: { [key: string]: string };

  /**
   * <p>[Required] Specifies a test invoke authorizer request's <a>Authorizer</a> ID.</p>
   */
  authorizerId: string | undefined;

  /**
   * <p>[Optional] The simulated request body of an incoming invocation request.</p>
   */
  body?: string;

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
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>A key-value map of stage variables to simulate an invocation on a deployed <a>Stage</a>.</p>
   */
  stageVariables?: { [key: string]: string };
}

export namespace TestInvokeAuthorizerRequest {
  export const filterSensitiveLog = (
    obj: TestInvokeAuthorizerRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestInvokeAuthorizerRequest =>
    __isa(o, "TestInvokeAuthorizerRequest");
}

/**
 * <p>Represents the response of the test invoke request for a custom <a>Authorizer</a></p>
 */
export interface TestInvokeAuthorizerResponse {
  __type?: "TestInvokeAuthorizerResponse";
  authorization?: { [key: string]: string[] };
  /**
   * <p>The <a href="https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims">open identity claims</a>, with any supported custom attributes, returned from the Cognito Your User Pool configured for the API.</p>
   */
  claims?: { [key: string]: string };

  /**
   * <p>The HTTP status code that the client would have received. Value is 0 if the authorizer succeeded.</p>
   */
  clientStatus?: number;

  /**
   * <p>The execution latency of the test authorizer request.</p>
   */
  latency?: number;

  /**
   * <p>The API Gateway execution log for the test authorizer request.</p>
   */
  log?: string;

  /**
   * <p>The JSON policy document returned by the <a>Authorizer</a></p>
   */
  policy?: string;

  /**
   * <p>The principal identity returned by the <a>Authorizer</a></p>
   */
  principalId?: string;
}

export namespace TestInvokeAuthorizerResponse {
  export const filterSensitiveLog = (
    obj: TestInvokeAuthorizerResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestInvokeAuthorizerResponse =>
    __isa(o, "TestInvokeAuthorizerResponse");
}

/**
 * <p>Make a request to simulate the execution of a <a>Method</a>.</p>
 */
export interface TestInvokeMethodRequest {
  __type?: "TestInvokeMethodRequest";
  /**
   * <p>The simulated request body of an incoming invocation request.</p>
   */
  body?: string;

  /**
   * <p>A <a>ClientCertificate</a> identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint.</p>
   */
  clientCertificateId?: string;

  /**
   * <p>A key-value map of headers to simulate an incoming invocation request.</p>
   */
  headers?: { [key: string]: string };

  /**
   * <p>[Required] Specifies a test invoke method request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  /**
   * <p>The headers as a map from string to list of values to simulate an incoming invocation request.</p>
   */
  multiValueHeaders?: { [key: string]: string[] };

  /**
   * <p>The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.</p>
   */
  pathWithQueryString?: string;

  /**
   * <p>[Required] Specifies a test invoke method request's resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>A key-value map of stage variables to simulate an invocation on a deployed <a>Stage</a>.</p>
   */
  stageVariables?: { [key: string]: string };
}

export namespace TestInvokeMethodRequest {
  export const filterSensitiveLog = (obj: TestInvokeMethodRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestInvokeMethodRequest =>
    __isa(o, "TestInvokeMethodRequest");
}

/**
 * <p>Represents the response of the test invoke request in the HTTP method.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-test-method.html#how-to-test-method-console">Test API using the API Gateway console</a>
 *       </div>
 */
export interface TestInvokeMethodResponse {
  __type?: "TestInvokeMethodResponse";
  /**
   * <p>The body of the HTTP response.</p>
   */
  body?: string;

  /**
   * <p>The headers of the HTTP response.</p>
   */
  headers?: { [key: string]: string };

  /**
   * <p>The execution latency of the test invoke request.</p>
   */
  latency?: number;

  /**
   * <p>The API Gateway execution log for the test invoke request.</p>
   */
  log?: string;

  /**
   * <p>The headers of the HTTP response as a map from string to list of values.</p>
   */
  multiValueHeaders?: { [key: string]: string[] };

  /**
   * <p>The HTTP status code.</p>
   */
  status?: number;
}

export namespace TestInvokeMethodResponse {
  export const filterSensitiveLog = (obj: TestInvokeMethodResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestInvokeMethodResponse =>
    __isa(o, "TestInvokeMethodResponse");
}

/**
 * <p> The API request rate limits.</p>
 */
export interface ThrottleSettings {
  __type?: "ThrottleSettings";
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
  export const filterSensitiveLog = (obj: ThrottleSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThrottleSettings =>
    __isa(o, "ThrottleSettings");
}

/**
 * <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  message?: string;
  retryAfterSeconds?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyRequestsException =>
    __isa(o, "TooManyRequestsException");
}

export enum UnauthorizedCacheControlHeaderStrategy {
  FAIL_WITH_403 = "FAIL_WITH_403",
  SUCCEED_WITHOUT_RESPONSE_HEADER = "SUCCEED_WITHOUT_RESPONSE_HEADER",
  SUCCEED_WITH_RESPONSE_HEADER = "SUCCEED_WITH_RESPONSE_HEADER"
}

/**
 * <p>The request is denied because the caller has insufficient permissions.</p>
 */
export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  message?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnauthorizedException =>
    __isa(o, "UnauthorizedException");
}

/**
 * <p>Removes a tag from a given resource.</p>
 */
export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  name?: string;
  /**
   * <p>[Required] The ARN of a resource that can be tagged. The resource ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>[Required] The Tag keys to delete.</p>
   */
  tagKeys: string[] | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

/**
 * <p>Requests API Gateway to change information about the current <a>Account</a> resource.</p>
 */
export interface UpdateAccountRequest {
  __type?: "UpdateAccountRequest";
  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateAccountRequest {
  export const filterSensitiveLog = (obj: UpdateAccountRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAccountRequest =>
    __isa(o, "UpdateAccountRequest");
}

/**
 * <p>A request to change information about an <a>ApiKey</a> resource.</p>
 */
export interface UpdateApiKeyRequest {
  __type?: "UpdateApiKeyRequest";
  /**
   * <p>[Required] The identifier of the <a>ApiKey</a> resource to be updated.</p>
   */
  apiKey: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateApiKeyRequest {
  export const filterSensitiveLog = (obj: UpdateApiKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApiKeyRequest =>
    __isa(o, "UpdateApiKeyRequest");
}

/**
 * <p>Request to update an existing <a>Authorizer</a> resource.</p>
 */
export interface UpdateAuthorizerRequest {
  __type?: "UpdateAuthorizerRequest";
  /**
   * <p>[Required] The identifier of the <a>Authorizer</a> resource.</p>
   */
  authorizerId: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateAuthorizerRequest {
  export const filterSensitiveLog = (obj: UpdateAuthorizerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAuthorizerRequest =>
    __isa(o, "UpdateAuthorizerRequest");
}

/**
 * <p>A request to change information about the <a>BasePathMapping</a> resource.</p>
 */
export interface UpdateBasePathMappingRequest {
  __type?: "UpdateBasePathMappingRequest";
  /**
   * <p>[Required] The base path of the <a>BasePathMapping</a> resource to change.</p>
   *         <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>
   */
  basePath: string | undefined;

  /**
   * <p>[Required] The domain name of the <a>BasePathMapping</a> resource to change.</p>
   */
  domainName: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateBasePathMappingRequest {
  export const filterSensitiveLog = (
    obj: UpdateBasePathMappingRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateBasePathMappingRequest =>
    __isa(o, "UpdateBasePathMappingRequest");
}

/**
 * <p>A request to change information about an <a>ClientCertificate</a> resource.</p>
 */
export interface UpdateClientCertificateRequest {
  __type?: "UpdateClientCertificateRequest";
  /**
   * <p>[Required] The identifier of the <a>ClientCertificate</a> resource to be updated.</p>
   */
  clientCertificateId: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateClientCertificateRequest {
  export const filterSensitiveLog = (
    obj: UpdateClientCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateClientCertificateRequest =>
    __isa(o, "UpdateClientCertificateRequest");
}

/**
 * <p>Requests API Gateway to change information about a <a>Deployment</a> resource.</p>
 */
export interface UpdateDeploymentRequest {
  __type?: "UpdateDeploymentRequest";
  /**
   * <p>The replacement identifier for the <a>Deployment</a> resource to change information about.</p>
   */
  deploymentId: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateDeploymentRequest {
  export const filterSensitiveLog = (obj: UpdateDeploymentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDeploymentRequest =>
    __isa(o, "UpdateDeploymentRequest");
}

/**
 * <p>Updates an existing documentation part of a given API.</p>
 */
export interface UpdateDocumentationPartRequest {
  __type?: "UpdateDocumentationPartRequest";
  /**
   * <p>[Required] The identifier of the to-be-updated documentation part.</p>
   */
  documentationPartId: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateDocumentationPartRequest {
  export const filterSensitiveLog = (
    obj: UpdateDocumentationPartRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDocumentationPartRequest =>
    __isa(o, "UpdateDocumentationPartRequest");
}

/**
 * <p>Updates an existing documentation version of an API.</p>
 */
export interface UpdateDocumentationVersionRequest {
  __type?: "UpdateDocumentationVersionRequest";
  /**
   * <p>[Required] The version identifier of the to-be-updated documentation version.</p>
   */
  documentationVersion: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>..</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateDocumentationVersionRequest {
  export const filterSensitiveLog = (
    obj: UpdateDocumentationVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDocumentationVersionRequest =>
    __isa(o, "UpdateDocumentationVersionRequest");
}

/**
 * <p>A request to change information about the <a>DomainName</a> resource.</p>
 */
export interface UpdateDomainNameRequest {
  __type?: "UpdateDomainNameRequest";
  /**
   * <p>[Required] The name of the <a>DomainName</a> resource to be changed.</p>
   */
  domainName: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateDomainNameRequest {
  export const filterSensitiveLog = (obj: UpdateDomainNameRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainNameRequest =>
    __isa(o, "UpdateDomainNameRequest");
}

/**
 * <p>Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
 */
export interface UpdateGatewayResponseRequest {
  __type?: "UpdateGatewayResponseRequest";
  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
   */
  responseType: GatewayResponseType | string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateGatewayResponseRequest {
  export const filterSensitiveLog = (
    obj: UpdateGatewayResponseRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGatewayResponseRequest =>
    __isa(o, "UpdateGatewayResponseRequest");
}

/**
 * <p>Represents an update integration request.</p>
 */
export interface UpdateIntegrationRequest {
  __type?: "UpdateIntegrationRequest";
  /**
   * <p>[Required] Represents an update integration request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] Represents an update integration request's resource identifier.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateIntegrationRequest {
  export const filterSensitiveLog = (obj: UpdateIntegrationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateIntegrationRequest =>
    __isa(o, "UpdateIntegrationRequest");
}

/**
 * <p>Represents an update integration response request.</p>
 */
export interface UpdateIntegrationResponseRequest {
  __type?: "UpdateIntegrationResponseRequest";
  /**
   * <p>[Required] Specifies an update integration response request's HTTP method.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] Specifies an update integration response request's resource identifier.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] Specifies an update integration response request's status code.</p>
   */
  statusCode: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateIntegrationResponseRequest {
  export const filterSensitiveLog = (
    obj: UpdateIntegrationResponseRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateIntegrationResponseRequest =>
    __isa(o, "UpdateIntegrationResponseRequest");
}

/**
 * <p>Request to update an existing <a>Method</a> resource.</p>
 */
export interface UpdateMethodRequest {
  __type?: "UpdateMethodRequest";
  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>Method</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateMethodRequest {
  export const filterSensitiveLog = (obj: UpdateMethodRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMethodRequest =>
    __isa(o, "UpdateMethodRequest");
}

/**
 * <p>A request to update an existing <a>MethodResponse</a> resource.</p>
 */
export interface UpdateMethodResponseRequest {
  __type?: "UpdateMethodResponseRequest";
  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The status code for the <a>MethodResponse</a> resource.</p>
   */
  statusCode: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateMethodResponseRequest {
  export const filterSensitiveLog = (
    obj: UpdateMethodResponseRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMethodResponseRequest =>
    __isa(o, "UpdateMethodResponseRequest");
}

/**
 * <p>Request to update an existing model in an existing <a>RestApi</a> resource.</p>
 */
export interface UpdateModelRequest {
  __type?: "UpdateModelRequest";
  /**
   * <p>[Required] The name of the model to update.</p>
   */
  modelName: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateModelRequest {
  export const filterSensitiveLog = (obj: UpdateModelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateModelRequest =>
    __isa(o, "UpdateModelRequest");
}

/**
 * <p>Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 */
export interface UpdateRequestValidatorRequest {
  __type?: "UpdateRequestValidatorRequest";
  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] The identifier of <a>RequestValidator</a> to be updated.</p>
   */
  requestValidatorId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateRequestValidatorRequest {
  export const filterSensitiveLog = (
    obj: UpdateRequestValidatorRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRequestValidatorRequest =>
    __isa(o, "UpdateRequestValidatorRequest");
}

/**
 * <p>Request to change information about a <a>Resource</a> resource.</p>
 */
export interface UpdateResourceRequest {
  __type?: "UpdateResourceRequest";
  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] The identifier of the <a>Resource</a> resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateResourceRequest {
  export const filterSensitiveLog = (obj: UpdateResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateResourceRequest =>
    __isa(o, "UpdateResourceRequest");
}

/**
 * <p>Request to update an existing <a>RestApi</a> resource in your collection.</p>
 */
export interface UpdateRestApiRequest {
  __type?: "UpdateRestApiRequest";
  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateRestApiRequest {
  export const filterSensitiveLog = (obj: UpdateRestApiRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRestApiRequest =>
    __isa(o, "UpdateRestApiRequest");
}

/**
 * <p>Requests API Gateway to change information about a <a>Stage</a> resource.</p>
 */
export interface UpdateStageRequest {
  __type?: "UpdateStageRequest";
  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string | undefined;

  /**
   * <p>[Required] The name of the <a>Stage</a> resource to change information about.</p>
   */
  stageName: string | undefined;

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
}

export namespace UpdateStageRequest {
  export const filterSensitiveLog = (obj: UpdateStageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateStageRequest =>
    __isa(o, "UpdateStageRequest");
}

/**
 * <p>The PATCH request to update a usage plan of a given plan Id.</p>
 */
export interface UpdateUsagePlanRequest {
  __type?: "UpdateUsagePlanRequest";
  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The Id of the to-be-updated usage plan.</p>
   */
  usagePlanId: string | undefined;
}

export namespace UpdateUsagePlanRequest {
  export const filterSensitiveLog = (obj: UpdateUsagePlanRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUsagePlanRequest =>
    __isa(o, "UpdateUsagePlanRequest");
}

/**
 * <p>The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key.</p>
 */
export interface UpdateUsageRequest {
  __type?: "UpdateUsageRequest";
  /**
   * <p>[Required] The identifier of the API key associated with the usage plan in which a temporary extension is granted to the remaining quota.</p>
   */
  keyId: string | undefined;

  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The Id of the usage plan associated with the usage data.</p>
   */
  usagePlanId: string | undefined;
}

export namespace UpdateUsageRequest {
  export const filterSensitiveLog = (obj: UpdateUsageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUsageRequest =>
    __isa(o, "UpdateUsageRequest");
}

/**
 * <p>Updates an existing <a>VpcLink</a> of a specified identifier.</p>
 */
export interface UpdateVpcLinkRequest {
  __type?: "UpdateVpcLinkRequest";
  name?: string;
  /**
   * <p>A list of update operations to be applied to the specified resource and in the order specified in this list.</p>
   */
  patchOperations?: PatchOperation[];

  template?: boolean;
  templateSkipList?: string[];
  title?: string;
  /**
   * <p>[Required] The identifier of the  <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>
   */
  vpcLinkId: string | undefined;
}

export namespace UpdateVpcLinkRequest {
  export const filterSensitiveLog = (obj: UpdateVpcLinkRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateVpcLinkRequest =>
    __isa(o, "UpdateVpcLinkRequest");
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
  __type?: "Usage";
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

  /**
   * <p>The starting date of the usage data.</p>
   */
  startDate?: string;

  /**
   * <p>The plan Id associated with this usage data.</p>
   */
  usagePlanId?: string;
}

export namespace Usage {
  export const filterSensitiveLog = (obj: Usage): any => ({
    ...obj
  });
  export const isa = (o: any): o is Usage => __isa(o, "Usage");
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
  __type?: "UsagePlan";
  /**
   * <p>The associated API stages of a usage plan.</p>
   */
  apiStages?: ApiStage[];

  /**
   * <p>The description of a usage plan.</p>
   */
  description?: string;

  /**
   * <p>The identifier of a <a>UsagePlan</a> resource.</p>
   */
  id?: string;

  /**
   * <p>The name of a usage plan.</p>
   */
  name?: string;

  /**
   * <p>The AWS Markeplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.</p>
   */
  productCode?: string;

  /**
   * <p>The maximum number of permitted requests per a given unit time interval.</p>
   */
  quota?: QuotaSettings;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The request throttle limits of a usage plan.</p>
   */
  throttle?: ThrottleSettings;
}

export namespace UsagePlan {
  export const filterSensitiveLog = (obj: UsagePlan): any => ({
    ...obj
  });
  export const isa = (o: any): o is UsagePlan => __isa(o, "UsagePlan");
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
  __type?: "UsagePlanKey";
  /**
   * <p>The Id of a usage plan key.</p>
   */
  id?: string;

  /**
   * <p>The name of a usage plan key.</p>
   */
  name?: string;

  /**
   * <p>The type of a usage plan key. Currently, the valid key type is <code>API_KEY</code>.</p>
   */
  type?: string;

  /**
   * <p>The value of a usage plan key.</p>
   */
  value?: string;
}

export namespace UsagePlanKey {
  export const filterSensitiveLog = (obj: UsagePlanKey): any => ({
    ...obj
  });
  export const isa = (o: any): o is UsagePlanKey => __isa(o, "UsagePlanKey");
}

/**
 * <p>Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.</p>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>
 *     </div>
 */
export interface UsagePlanKeys {
  __type?: "UsagePlanKeys";
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
  export const filterSensitiveLog = (obj: UsagePlanKeys): any => ({
    ...obj
  });
  export const isa = (o: any): o is UsagePlanKeys => __isa(o, "UsagePlanKeys");
}

/**
 * <p>Represents a collection of usage plans for an AWS account.</p>
 *     <div class="seeAlso">
 *       <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>
 *     </div>
 */
export interface UsagePlans {
  __type?: "UsagePlans";
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
  export const filterSensitiveLog = (obj: UsagePlans): any => ({
    ...obj
  });
  export const isa = (o: any): o is UsagePlans => __isa(o, "UsagePlans");
}

/**
 * <p>A API Gateway VPC link for a <a>RestApi</a> to access resources in an Amazon Virtual Private Cloud (VPC).</p>
 *         <div class="remarks">
 *           <p><p>To enable access to a resource in an Amazon Virtual Private Cloud through Amazon API Gateway, you, as an API developer, create a <a>VpcLink</a> resource targeted for one or more network load balancers of the VPC and then integrate an API method with a private integration that uses the <a>VpcLink</a>. The private integration has an integration type of <code>HTTP</code> or <code>HTTP_PROXY</code> and has a connection type of <code>VPC_LINK</code>. The integration uses the <code>connectionId</code> property to identify the <a>VpcLink</a> used.</p>
 *
 * </p>
 *         </div>
 */
export interface VpcLink {
  __type?: "VpcLink";
  /**
   * <p>The description of the VPC link.</p>
   */
  description?: string;

  /**
   * <p>The identifier of the  <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>
   */
  id?: string;

  /**
   * <p>The name used to label and identify the VPC link.</p>
   */
  name?: string;

  /**
   * <p>The status of the VPC link. The valid values are <code>AVAILABLE</code>, <code>PENDING</code>, <code>DELETING</code>, or <code>FAILED</code>. Deploying an API will wait if the status is <code>PENDING</code> and will fail if the status is <code>DELETING</code>.  </p>
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

  /**
   * <p>The ARNs of network load balancers of the VPC targeted by the VPC link. The network load balancers must be owned by the same AWS account of the API owner.</p>
   */
  targetArns?: string[];
}

export namespace VpcLink {
  export const filterSensitiveLog = (obj: VpcLink): any => ({
    ...obj
  });
  export const isa = (o: any): o is VpcLink => __isa(o, "VpcLink");
}

/**
 * <p>The collection of VPC links under the caller's account in a region.</p>
 *         <div class="seeAlso">
 *
 * <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-private-integration.html">Getting Started with Private Integrations</a>,
 * <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html">Set up Private Integrations</a>
 *
 *         </div>
 */
export interface VpcLinks {
  __type?: "VpcLinks";
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
  export const filterSensitiveLog = (obj: VpcLinks): any => ({
    ...obj
  });
  export const isa = (o: any): o is VpcLinks => __isa(o, "VpcLinks");
}

export enum VpcLinkStatus {
  AVAILABLE = "AVAILABLE",
  DELETING = "DELETING",
  FAILED = "FAILED",
  PENDING = "PENDING"
}
