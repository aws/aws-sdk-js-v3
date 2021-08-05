import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have access to perform this operation on this resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum AuthenticationType {
  AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS",
  API_KEY = "API_KEY",
  AWS_IAM = "AWS_IAM",
  AWS_LAMBDA = "AWS_LAMBDA",
  OPENID_CONNECT = "OPENID_CONNECT",
}

/**
 * <p>A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using
 *       the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured
 *       at a time.</p>
 */
export interface LambdaAuthorizerConfig {
  /**
   * <p>The number of seconds a response should be cached for. The default is 5 minutes (300 seconds).
   *          The Lambda function can override this by returning a
   *             <code>ttlOverride</code> key in its response. A value of 0 disables caching of
   *          responses.</p>
   */
  authorizerResultTtlInSeconds?: number;

  /**
   * <p>The ARN of the lambda function to be called for authorization. This may be a standard
   *          Lambda ARN, a version ARN (<code>.../v3</code>) or alias ARN. </p>
   *          <p>
   *             <i>Note</i>: This Lambda function must have the following resource-based
   *          policy assigned to it. When configuring Lambda authorizers in the Console, this is done for
   *          you. To do so with the AWS CLI, run the following:</p>
   *          <p>
   *             <code>aws lambda add-permission --function-name "arn:aws:lambda:us-east-2:111122223333:function:my-function" --statement-id "appsync" --principal appsync.amazonaws.com --action lambda:InvokeFunction</code>
   *          </p>
   */
  authorizerUri: string | undefined;

  /**
   * <p>A regular expression for validation of tokens before the Lambda Function is called.</p>
   */
  identityValidationExpression?: string;
}

export namespace LambdaAuthorizerConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaAuthorizerConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an OpenID Connect configuration.</p>
 */
export interface OpenIDConnectConfig {
  /**
   * <p>The issuer for the OpenID Connect configuration. The issuer returned by discovery must
   *          exactly match the value of <code>iss</code> in the ID token.</p>
   */
  issuer: string | undefined;

  /**
   * <p>The client identifier of the Relying party at the OpenID identity provider. This
   *          identifier is typically obtained when the Relying party is registered with the OpenID
   *          identity provider. You can specify a regular expression so the AppSync can validate
   *          against multiple client identifiers at a time.</p>
   */
  clientId?: string;

  /**
   * <p>The number of milliseconds a token is valid after being issued to a user.</p>
   */
  iatTTL?: number;

  /**
   * <p>The number of milliseconds a token is valid after being authenticated.</p>
   */
  authTTL?: number;
}

export namespace OpenIDConnectConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpenIDConnectConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 */
export interface CognitoUserPoolConfig {
  /**
   * <p>The user pool ID.</p>
   */
  userPoolId: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the user pool was created.</p>
   */
  awsRegion: string | undefined;

  /**
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client
   *          ID.</p>
   */
  appIdClientRegex?: string;
}

export namespace CognitoUserPoolConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CognitoUserPoolConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an additional authentication provider.</p>
 */
export interface AdditionalAuthenticationProvider {
  /**
   * <p>The authentication type: API key, Identity and Access Management, OIDC, or Amazon Cognito user pools.</p>
   */
  authenticationType?: AuthenticationType | string;

  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: CognitoUserPoolConfig;

  /**
   * <p>Configuration for AWS Lambda function authorization.</p>
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
}

export namespace AdditionalAuthenticationProvider {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdditionalAuthenticationProvider): any => ({
    ...obj,
  });
}

export enum ApiCachingBehavior {
  FULL_REQUEST_CACHING = "FULL_REQUEST_CACHING",
  PER_RESOLVER_CACHING = "PER_RESOLVER_CACHING",
}

export enum ApiCacheStatus {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  MODIFYING = "MODIFYING",
}

export enum ApiCacheType {
  LARGE = "LARGE",
  LARGE_12X = "LARGE_12X",
  LARGE_2X = "LARGE_2X",
  LARGE_4X = "LARGE_4X",
  LARGE_8X = "LARGE_8X",
  MEDIUM = "MEDIUM",
  R4_2XLARGE = "R4_2XLARGE",
  R4_4XLARGE = "R4_4XLARGE",
  R4_8XLARGE = "R4_8XLARGE",
  R4_LARGE = "R4_LARGE",
  R4_XLARGE = "R4_XLARGE",
  SMALL = "SMALL",
  T2_MEDIUM = "T2_MEDIUM",
  T2_SMALL = "T2_SMALL",
  XLARGE = "XLARGE",
}

/**
 * <p>The <code>ApiCache</code> object.</p>
 */
export interface ApiCache {
  /**
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl?: number;

  /**
   * <p>Caching behavior.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>FULL_REQUEST_CACHING</b>: All requests are fully
   *                cached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PER_RESOLVER_CACHING</b>: Individual resolvers
   *                that you specify are cached.</p>
   *             </li>
   *          </ul>
   */
  apiCachingBehavior?: ApiCachingBehavior | string;

  /**
   * <p>Transit encryption flag when connecting to cache. This setting cannot be updated after
   *          creation.</p>
   */
  transitEncryptionEnabled?: boolean;

  /**
   * <p>At rest encryption flag for cache. This setting cannot be updated after creation.</p>
   */
  atRestEncryptionEnabled?: boolean;

  /**
   * <p>The cache instance type. Valid values are </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SMALL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XLARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_2X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_4X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_8X</code> (not available in all regions)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_12X</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p>
   *          <p>The following legacy instance types are available, but their use is discouraged:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>T2_SMALL</b>: A t2.small instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>T2_MEDIUM</b>: A t2.medium instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_LARGE</b>: A r4.large instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_XLARGE</b>: A r4.xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p>
   *             </li>
   *          </ul>
   */
  type?: ApiCacheType | string;

  /**
   * <p>The cache instance status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>AVAILABLE</b>: The instance is available for
   *                use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CREATING</b>: The instance is currently
   *                creating.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b>: The instance is currently
   *                deleting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MODIFYING</b>: The instance is currently
   *                modifying.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b>: The instance has failed
   *                creation.</p>
   *             </li>
   *          </ul>
   */
  status?: ApiCacheStatus | string;
}

export namespace ApiCache {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiCache): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an API key.</p>
 *          <p>Customers invoke AppSync GraphQL API operations with API keys as an identity
 *          mechanism. There are two key versions:</p>
 *          <p>
 *             <b>da1</b>: This version was introduced at launch in November
 *          2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB
 *          TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that
 *          date.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ListApiKeys</code> returns the expiration time in milliseconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateApiKey</code> returns the expiration time in
 *                milliseconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateApiKey</code> is not available for this key version.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteApiKey</code> deletes the item from the table.</p>
 *             </li>
 *             <li>
 *                <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug
 *                where keys are not automatically deleted because DynamoDB expects the TTL to be
 *                stored in seconds. As a one-time action, we will delete these keys from the table
 *                after February 21, 2018.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>da2</b>: This version was introduced in February 2018 when
 *          AppSync added support to extend key expiration.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ListApiKeys</code> returns the expiration time and deletion time
 *                in seconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateApiKey</code> returns the expiration time and deletion time
 *                in seconds and accepts a user-provided expiration time in seconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateApiKey</code> returns the expiration time and and deletion time
 *                in seconds and accepts a user-provided expiration time in seconds. Expired API keys
 *                are kept for 60 days after the expiration time. Key expiration time can be updated
 *                while the key is not deleted. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteApiKey</code> deletes the item from the table.</p>
 *             </li>
 *             <li>
 *                <p>Expiration is stored in Amazon DynamoDB as seconds. After the expiration
 *                time, using the key to authenticate will fail. But the key can be reinstated before
 *                deletion.</p>
 *             </li>
 *             <li>
 *                <p>Deletion is stored in Amazon DynamoDB as seconds. The key will be deleted
 *                after deletion time. </p>
 *             </li>
 *          </ul>
 */
export interface ApiKey {
  /**
   * <p>The API key ID.</p>
   */
  id?: string;

  /**
   * <p>A description of the purpose of the API key.</p>
   */
  description?: string;

  /**
   * <p>The time after which the API key expires. The date is represented as seconds since the
   *          epoch, rounded down to the nearest hour.</p>
   */
  expires?: number;

  /**
   * <p>The time after which the API key is deleted. The date is represented as seconds since the
   *          epoch, rounded down to the nearest hour.</p>
   */
  deletes?: number;
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
 * <p>The API key exceeded a limit. Try your request again.</p>
 */
export interface ApiKeyLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ApiKeyLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace ApiKeyLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiKeyLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The API key expiration must be set to a value between 1 and 365 days from creation (for
 *             <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>
 */
export interface ApiKeyValidityOutOfBoundsException extends __SmithyException, $MetadataBearer {
  name: "ApiKeyValidityOutOfBoundsException";
  $fault: "client";
  message?: string;
}

export namespace ApiKeyValidityOutOfBoundsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiKeyValidityOutOfBoundsException): any => ({
    ...obj,
  });
}

/**
 * <p>The GraphQL API exceeded a limit. Try your request again.</p>
 */
export interface ApiLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ApiLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace ApiLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiLimitExceededException): any => ({
    ...obj,
  });
}

export enum AuthorizationType {
  AWS_IAM = "AWS_IAM",
}

/**
 * <p>The Identity and Access Management configuration.</p>
 */
export interface AwsIamConfig {
  /**
   * <p>The signing region for Identity and Access Management authorization.</p>
   */
  signingRegion?: string;

  /**
   * <p>The signing service name for Identity and Access Management authorization.</p>
   */
  signingServiceName?: string;
}

export namespace AwsIamConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The authorization config in case the HTTP endpoint requires authorization.</p>
 */
export interface AuthorizationConfig {
  /**
   * <p>The authorization type required by the HTTP endpoint.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>AWS_IAM</b>: The authorization type is
   *                Sigv4.</p>
   *             </li>
   *          </ul>
   */
  authorizationType: AuthorizationType | string | undefined;

  /**
   * <p>The Identity and Access Management settings.</p>
   */
  awsIamConfig?: AwsIamConfig;
}

export namespace AuthorizationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again. </p>
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
 * <p>Another modification is in progress at this time and it must complete before you can
 *          make your change. </p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentModificationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>CreateApiCache</code> operation.</p>
 */
export interface CreateApiCacheRequest {
  /**
   * <p>The GraphQL API Id.</p>
   */
  apiId: string | undefined;

  /**
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl: number | undefined;

  /**
   * <p>Transit encryption flag when connecting to cache. This setting cannot be updated after
   *          creation.</p>
   */
  transitEncryptionEnabled?: boolean;

  /**
   * <p>At rest encryption flag for cache. This setting cannot be updated after creation.</p>
   */
  atRestEncryptionEnabled?: boolean;

  /**
   * <p>Caching behavior.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>FULL_REQUEST_CACHING</b>: All requests are fully
   *                cached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PER_RESOLVER_CACHING</b>: Individual resolvers
   *                that you specify are cached.</p>
   *             </li>
   *          </ul>
   */
  apiCachingBehavior: ApiCachingBehavior | string | undefined;

  /**
   * <p>The cache instance type. Valid values are </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SMALL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XLARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_2X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_4X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_8X</code> (not available in all regions)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_12X</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p>
   *          <p>The following legacy instance types are available, but their use is discouraged:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>T2_SMALL</b>: A t2.small instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>T2_MEDIUM</b>: A t2.medium instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_LARGE</b>: A r4.large instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_XLARGE</b>: A r4.xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p>
   *             </li>
   *          </ul>
   */
  type: ApiCacheType | string | undefined;
}

export namespace CreateApiCacheRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApiCacheRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>CreateApiCache</code> operation.</p>
 */
export interface CreateApiCacheResponse {
  /**
   * <p>The <code>ApiCache</code> object.</p>
   */
  apiCache?: ApiCache;
}

export namespace CreateApiCacheResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApiCacheResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An internal AppSync error occurred. Try your request again.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message?: string;
}

export namespace InternalFailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
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
 * <p>You are not authorized to perform this operation.</p>
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

export interface CreateApiKeyRequest {
  /**
   * <p>The ID for your GraphQL API.</p>
   */
  apiId: string | undefined;

  /**
   * <p>A description of the purpose of the API key.</p>
   */
  description?: string;

  /**
   * <p>The time from creation time after which the API key expires. The date is represented as
   *          seconds since the epoch, rounded down to the nearest hour. The default value for this
   *          parameter is 7 days from creation time. For more information, see .</p>
   */
  expires?: number;
}

export namespace CreateApiKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApiKeyRequest): any => ({
    ...obj,
  });
}

export interface CreateApiKeyResponse {
  /**
   * <p>The API key.</p>
   */
  apiKey?: ApiKey;
}

export namespace CreateApiKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApiKeyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request exceeded a limit. Try your request again.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
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
 * <p>Describes a Delta Sync configuration.</p>
 */
export interface DeltaSyncConfig {
  /**
   * <p>The number of minutes an Item is stored in the datasource.</p>
   */
  baseTableTTL?: number;

  /**
   * <p>The Delta Sync table name.</p>
   */
  deltaSyncTableName?: string;

  /**
   * <p>The number of minutes a Delta Sync log entry is stored in the Delta Sync table.</p>
   */
  deltaSyncTableTTL?: number;
}

export namespace DeltaSyncConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeltaSyncConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon DynamoDB data source configuration.</p>
 */
export interface DynamodbDataSourceConfig {
  /**
   * <p>The table name.</p>
   */
  tableName: string | undefined;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  awsRegion: string | undefined;

  /**
   * <p>Set to TRUE to use Amazon Cognito credentials with this data source.</p>
   */
  useCallerCredentials?: boolean;

  /**
   * <p>The <code>DeltaSyncConfig</code> for a versioned datasource.</p>
   */
  deltaSyncConfig?: DeltaSyncConfig;

  /**
   * <p>Set to TRUE to use Conflict Detection and Resolution with this data source.</p>
   */
  versioned?: boolean;
}

export namespace DynamodbDataSourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynamodbDataSourceConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Elasticsearch data source configuration.</p>
 */
export interface ElasticsearchDataSourceConfig {
  /**
   * <p>The endpoint.</p>
   */
  endpoint: string | undefined;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  awsRegion: string | undefined;
}

export namespace ElasticsearchDataSourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchDataSourceConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an HTTP data source configuration.</p>
 */
export interface HttpDataSourceConfig {
  /**
   * <p>The HTTP URL endpoint. You can either specify the domain name or IP, and port
   *          combination, and the URL scheme must be HTTP or HTTPS. If the port is not specified, AppSync uses the default port 80 for the HTTP endpoint and port 443 for HTTPS
   *          endpoints.</p>
   */
  endpoint?: string;

  /**
   * <p>The authorization config in case the HTTP endpoint requires authorization.</p>
   */
  authorizationConfig?: AuthorizationConfig;
}

export namespace HttpDataSourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpDataSourceConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Web Services Lambda data source configuration.</p>
 */
export interface LambdaDataSourceConfig {
  /**
   * <p>The ARN for the Lambda function.</p>
   */
  lambdaFunctionArn: string | undefined;
}

export namespace LambdaDataSourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaDataSourceConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon RDS HTTP endpoint configuration.</p>
 */
export interface RdsHttpEndpointConfig {
  /**
   * <p>Amazon Web Services Region for RDS HTTP endpoint.</p>
   */
  awsRegion?: string;

  /**
   * <p>Amazon RDS cluster ARN.</p>
   */
  dbClusterIdentifier?: string;

  /**
   * <p>Logical database name.</p>
   */
  databaseName?: string;

  /**
   * <p>Logical schema name.</p>
   */
  schema?: string;

  /**
   * <p>Amazon Web Services secret store ARN for database credentials.</p>
   */
  awsSecretStoreArn?: string;
}

export namespace RdsHttpEndpointConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RdsHttpEndpointConfig): any => ({
    ...obj,
  });
}

export enum RelationalDatabaseSourceType {
  RDS_HTTP_ENDPOINT = "RDS_HTTP_ENDPOINT",
}

/**
 * <p>Describes a relational database data source configuration.</p>
 */
export interface RelationalDatabaseDataSourceConfig {
  /**
   * <p>Source type for the relational database.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RDS_HTTP_ENDPOINT</b>: The relational database
   *                source type is an Amazon RDS HTTP endpoint.</p>
   *             </li>
   *          </ul>
   */
  relationalDatabaseSourceType?: RelationalDatabaseSourceType | string;

  /**
   * <p>Amazon RDS HTTP endpoint settings.</p>
   */
  rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
}

export namespace RelationalDatabaseDataSourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalDatabaseDataSourceConfig): any => ({
    ...obj,
  });
}

export enum DataSourceType {
  AMAZON_DYNAMODB = "AMAZON_DYNAMODB",
  AMAZON_ELASTICSEARCH = "AMAZON_ELASTICSEARCH",
  AWS_LAMBDA = "AWS_LAMBDA",
  HTTP = "HTTP",
  NONE = "NONE",
  RELATIONAL_DATABASE = "RELATIONAL_DATABASE",
}

export interface CreateDataSourceRequest {
  /**
   * <p>The API ID for the GraphQL API for the <code>DataSource</code>.</p>
   */
  apiId: string | undefined;

  /**
   * <p>A user-supplied name for the <code>DataSource</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the <code>DataSource</code>.</p>
   */
  description?: string;

  /**
   * <p>The type of the <code>DataSource</code>.</p>
   */
  type: DataSourceType | string | undefined;

  /**
   * <p>The Identity and Access Management service role ARN for the data source. The system assumes this role when
   *          accessing the data source.</p>
   */
  serviceRoleArn?: string;

  /**
   * <p>Amazon DynamoDB settings.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * <p>Amazon Web Services Lambda settings.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;

  /**
   * <p>Amazon Elasticsearch Service settings.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * <p>HTTP endpoint settings.</p>
   */
  httpConfig?: HttpDataSourceConfig;

  /**
   * <p>Relational database settings.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
}

export namespace CreateDataSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataSourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a data source.</p>
 */
export interface DataSource {
  /**
   * <p>The data source ARN.</p>
   */
  dataSourceArn?: string;

  /**
   * <p>The name of the data source.</p>
   */
  name?: string;

  /**
   * <p>The description of the data source.</p>
   */
  description?: string;

  /**
   * <p>The type of the data source.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>AMAZON_DYNAMODB</b>: The data source is an Amazon
   *                DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AMAZON_ELASTICSEARCH</b>: The data source is an
   *                Amazon Elasticsearch Service domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AWS_LAMBDA</b>: The data source is an Amazon Web Services Lambda
   *                function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NONE</b>: There is no data source. This type is
   *                used when you wish to invoke a GraphQL operation without connecting to a data source,
   *                such as performing data transformation with resolvers or triggering a subscription to
   *                be invoked from a mutation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>HTTP</b>: The data source is an HTTP
   *                endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>RELATIONAL_DATABASE</b>: The data source is a
   *                relational database.</p>
   *             </li>
   *          </ul>
   */
  type?: DataSourceType | string;

  /**
   * <p>The Identity and Access Management service role ARN for the data source. The system assumes this role when
   *          accessing the data source.</p>
   */
  serviceRoleArn?: string;

  /**
   * <p>Amazon DynamoDB settings.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * <p>Amazon Web Services Lambda settings.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;

  /**
   * <p>Amazon Elasticsearch Service settings.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * <p>HTTP endpoint settings.</p>
   */
  httpConfig?: HttpDataSourceConfig;

  /**
   * <p>Relational database settings.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
}

export namespace DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSource): any => ({
    ...obj,
  });
}

export interface CreateDataSourceResponse {
  /**
   * <p>The <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}

export namespace CreateDataSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataSourceResponse): any => ({
    ...obj,
  });
}

export enum ConflictDetectionType {
  NONE = "NONE",
  VERSION = "VERSION",
}

export enum ConflictHandlerType {
  AUTOMERGE = "AUTOMERGE",
  LAMBDA = "LAMBDA",
  NONE = "NONE",
  OPTIMISTIC_CONCURRENCY = "OPTIMISTIC_CONCURRENCY",
}

/**
 * <p>The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the
 *          Conflict Handler.</p>
 */
export interface LambdaConflictHandlerConfig {
  /**
   * <p>The Arn for the Lambda function to use as the Conflict Handler.</p>
   */
  lambdaConflictHandlerArn?: string;
}

export namespace LambdaConflictHandlerConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaConflictHandlerConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Sync configuration for a resolver.</p>
 *          <p>Contains information on which Conflict Detection as well as Resolution strategy should
 *          be performed when the resolver is invoked.</p>
 */
export interface SyncConfig {
  /**
   * <p>The Conflict Resolution strategy to perform in the event of a conflict.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>OPTIMISTIC_CONCURRENCY</b>: Resolve conflicts by
   *                rejecting mutations when versions do not match the latest version at the
   *                server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AUTOMERGE</b>: Resolve conflicts with the
   *                Automerge conflict resolution strategy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>LAMBDA</b>: Resolve conflicts with a Lambda
   *                function supplied in the LambdaConflictHandlerConfig.</p>
   *             </li>
   *          </ul>
   */
  conflictHandler?: ConflictHandlerType | string;

  /**
   * <p>The Conflict Detection strategy to use.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>VERSION</b>: Detect conflicts based on object
   *                versions for this resolver.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NONE</b>: Do not detect conflicts when executing
   *                this resolver.</p>
   *             </li>
   *          </ul>
   */
  conflictDetection?: ConflictDetectionType | string;

  /**
   * <p>The <code>LambdaConflictHandlerConfig</code> when configuring LAMBDA as the Conflict
   *          Handler.</p>
   */
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
}

export namespace SyncConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SyncConfig): any => ({
    ...obj,
  });
}

export interface CreateFunctionRequest {
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The <code>Function</code> name. The function name does not have to be unique.</p>
   */
  name: string | undefined;

  /**
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;

  /**
   * <p>The <code>Function</code>
   *             <code>DataSource</code> name.</p>
   */
  dataSourceName: string | undefined;

  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * <p>The <code>Function</code> response mapping template. </p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The <code>version</code> of the request mapping template. Currently the supported value
   *          is 2018-05-29. </p>
   */
  functionVersion: string | undefined;

  /**
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Contains information on which Conflict Detection as well as Resolution strategy should
   *          be performed when the resolver is invoked.</p>
   */
  syncConfig?: SyncConfig;
}

export namespace CreateFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFunctionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A function is a reusable entity. Multiple functions can be used to compose the resolver
 *          logic.</p>
 */
export interface FunctionConfiguration {
  /**
   * <p>A unique ID representing the <code>Function</code> object.</p>
   */
  functionId?: string;

  /**
   * <p>The ARN of the <code>Function</code> object.</p>
   */
  functionArn?: string;

  /**
   * <p>The name of the <code>Function</code> object.</p>
   */
  name?: string;

  /**
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;

  /**
   * <p>The name of the <code>DataSource</code>.</p>
   */
  dataSourceName?: string;

  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * <p>The <code>Function</code> response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The version of the request mapping template. Currently only the 2018-05-29 version of
   *          the template is supported.</p>
   */
  functionVersion?: string;

  /**
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Contains information on which Conflict Detection as well as Resolution strategy should
   *          be performed when the resolver is invoked.</p>
   */
  syncConfig?: SyncConfig;
}

export namespace FunctionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionConfiguration): any => ({
    ...obj,
  });
}

export interface CreateFunctionResponse {
  /**
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
}

export namespace CreateFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFunctionResponse): any => ({
    ...obj,
  });
}

export enum FieldLogLevel {
  ALL = "ALL",
  ERROR = "ERROR",
  NONE = "NONE",
}

/**
 * <p>The CloudWatch Logs configuration.</p>
 */
export interface LogConfig {
  /**
   * <p>The field logging level. Values can be NONE, ERROR, or ALL. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NONE</b>: No field-level logs are
   *                captured.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ERROR</b>: Logs the following information only for
   *                the fields that are in error:</p>
   *                <ul>
   *                   <li>
   *                      <p>The error section in the server response.</p>
   *                   </li>
   *                   <li>
   *                      <p>Field-level errors.</p>
   *                   </li>
   *                   <li>
   *                      <p>The generated request/response functions that got resolved for error
   *                      fields.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ALL</b>: The following information is logged for
   *                all fields in the query:</p>
   *                <ul>
   *                   <li>
   *                      <p>Field-level tracing information.</p>
   *                   </li>
   *                   <li>
   *                      <p>The generated request/response functions that got resolved for each
   *                      field.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  fieldLogLevel: FieldLogLevel | string | undefined;

  /**
   * <p>The service role that AppSync will assume to publish to Amazon CloudWatch logs in
   *          your account. </p>
   */
  cloudWatchLogsRoleArn: string | undefined;

  /**
   * <p>Set to TRUE to exclude sections that contain information such as headers, context, and
   *          evaluated mapping templates, regardless of logging level.</p>
   */
  excludeVerboseContent?: boolean;
}

export namespace LogConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogConfig): any => ({
    ...obj,
  });
}

export enum DefaultAction {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

/**
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 */
export interface UserPoolConfig {
  /**
   * <p>The user pool ID.</p>
   */
  userPoolId: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the user pool was created.</p>
   */
  awsRegion: string | undefined;

  /**
   * <p>The action that you want your GraphQL API to take when a request that uses Amazon
   *          Cognito user pool authentication doesn't match the Amazon Cognito user pool
   *          configuration.</p>
   */
  defaultAction: DefaultAction | string | undefined;

  /**
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client
   *          ID.</p>
   */
  appIdClientRegex?: string;
}

export namespace UserPoolConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserPoolConfig): any => ({
    ...obj,
  });
}

export interface CreateGraphqlApiRequest {
  /**
   * <p>A user-supplied name for the <code>GraphqlApi</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon CloudWatch Logs configuration.</p>
   */
  logConfig?: LogConfig;

  /**
   * <p>The authentication type: API key, Identity and Access Management, OIDC, or Amazon Cognito user pools.</p>
   */
  authenticationType: AuthenticationType | string | undefined;

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: UserPoolConfig;

  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;

  /**
   * <p>A <code>TagMap</code> object.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];

  /**
   * <p>A flag indicating whether to enable X-Ray tracing for the
   *          <code>GraphqlApi</code>.</p>
   */
  xrayEnabled?: boolean;

  /**
   * <p>Configuration for AWS Lambda function authorization.</p>
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
}

export namespace CreateGraphqlApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGraphqlApiRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a GraphQL API.</p>
 */
export interface GraphqlApi {
  /**
   * <p>The API name.</p>
   */
  name?: string;

  /**
   * <p>The API ID.</p>
   */
  apiId?: string;

  /**
   * <p>The authentication type.</p>
   */
  authenticationType?: AuthenticationType | string;

  /**
   * <p>The Amazon CloudWatch Logs configuration.</p>
   */
  logConfig?: LogConfig;

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: UserPoolConfig;

  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;

  /**
   * <p>The ARN.</p>
   */
  arn?: string;

  /**
   * <p>The URIs.</p>
   */
  uris?: { [key: string]: string };

  /**
   * <p>The tags.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];

  /**
   * <p>A flag representing whether X-Ray tracing is enabled for this
   *          <code>GraphqlApi</code>.</p>
   */
  xrayEnabled?: boolean;

  /**
   * <p>The ARN of the WAF ACL associated with this
   *          <code>GraphqlApi</code>, if one exists.</p>
   */
  wafWebAclArn?: string;

  /**
   * <p></p>
   *          <p>Configuration for AWS Lambda function authorization.</p>
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
}

export namespace GraphqlApi {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GraphqlApi): any => ({
    ...obj,
  });
}

export interface CreateGraphqlApiResponse {
  /**
   * <p>The <code>GraphqlApi</code>.</p>
   */
  graphqlApi?: GraphqlApi;
}

export namespace CreateGraphqlApiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGraphqlApiResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The caching configuration for a resolver that has caching enabled.</p>
 */
export interface CachingConfig {
  /**
   * <p>The TTL in seconds for a resolver that has caching enabled.</p>
   *          <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl?: number;

  /**
   * <p>The caching keys for a resolver that has caching enabled.</p>
   *          <p>Valid values are entries from the <code>$context.arguments</code>,
   *             <code>$context.source</code>, and <code>$context.identity</code> maps.</p>
   */
  cachingKeys?: string[];
}

export namespace CachingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CachingConfig): any => ({
    ...obj,
  });
}

export enum ResolverKind {
  PIPELINE = "PIPELINE",
  UNIT = "UNIT",
}

/**
 * <p>The pipeline configuration for a resolver of kind <code>PIPELINE</code>.</p>
 */
export interface PipelineConfig {
  /**
   * <p>A list of <code>Function</code> objects.</p>
   */
  functions?: string[];
}

export namespace PipelineConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineConfig): any => ({
    ...obj,
  });
}

export interface CreateResolverRequest {
  /**
   * <p>The ID for the GraphQL API for which the resolver is being created.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The name of the <code>Type</code>.</p>
   */
  typeName: string | undefined;

  /**
   * <p>The name of the field to attach the resolver to.</p>
   */
  fieldName: string | undefined;

  /**
   * <p>The name of the data source for which the resolver is being created.</p>
   */
  dataSourceName?: string;

  /**
   * <p>The mapping template to be used for requests.</p>
   *          <p>A resolver uses a request mapping template to convert a GraphQL expression into a format
   *          that a data source can understand. Mapping templates are written in Apache Velocity
   *          Template Language (VTL).</p>
   *          <p>VTL request mapping templates are optional when using a Lambda data source. For all
   *          other data sources, VTL request and response mapping templates are required.</p>
   */
  requestMappingTemplate?: string;

  /**
   * <p>The mapping template to be used for responses from the data source.</p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is
   *                the default resolver type. A UNIT resolver enables you to execute a GraphQL query
   *                against a single data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE
   *                resolver enables you to execute a series of <code>Function</code> in a serial manner.
   *                You can use a pipeline resolver to execute a GraphQL query against multiple data
   *                sources.</p>
   *             </li>
   *          </ul>
   */
  kind?: ResolverKind | string;

  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;

  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned datasource.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;
}

export namespace CreateResolverRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResolverRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resolver.</p>
 */
export interface Resolver {
  /**
   * <p>The resolver type name.</p>
   */
  typeName?: string;

  /**
   * <p>The resolver field name.</p>
   */
  fieldName?: string;

  /**
   * <p>The resolver data source name.</p>
   */
  dataSourceName?: string;

  /**
   * <p>The resolver ARN.</p>
   */
  resolverArn?: string;

  /**
   * <p>The request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * <p>The response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is
   *                the default resolver type. A UNIT resolver enables you to execute a GraphQL query
   *                against a single data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE
   *                resolver enables you to execute a series of <code>Function</code> in a serial manner.
   *                You can use a pipeline resolver to execute a GraphQL query against multiple data
   *                sources.</p>
   *             </li>
   *          </ul>
   */
  kind?: ResolverKind | string;

  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;

  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned datasource.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;
}

export namespace Resolver {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resolver): any => ({
    ...obj,
  });
}

export interface CreateResolverResponse {
  /**
   * <p>The <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
}

export namespace CreateResolverResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResolverResponse): any => ({
    ...obj,
  });
}

export enum TypeDefinitionFormat {
  JSON = "JSON",
  SDL = "SDL",
}

export interface CreateTypeRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p>
   *          <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL
   *             documentation</a>.</p>
   */
  definition: string | undefined;

  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | string | undefined;
}

export namespace CreateTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTypeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a type.</p>
 */
export interface Type {
  /**
   * <p>The type name.</p>
   */
  name?: string;

  /**
   * <p>The type description.</p>
   */
  description?: string;

  /**
   * <p>The type ARN.</p>
   */
  arn?: string;

  /**
   * <p>The type definition.</p>
   */
  definition?: string;

  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format?: TypeDefinitionFormat | string;
}

export namespace Type {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Type): any => ({
    ...obj,
  });
}

export interface CreateTypeResponse {
  /**
   * <p>The <code>Type</code> object.</p>
   */
  type?: Type;
}

export namespace CreateTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTypeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>DeleteApiCache</code> operation.</p>
 */
export interface DeleteApiCacheRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

export namespace DeleteApiCacheRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApiCacheRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>DeleteApiCache</code> operation.</p>
 */
export interface DeleteApiCacheResponse {}

export namespace DeleteApiCacheResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApiCacheResponse): any => ({
    ...obj,
  });
}

export interface DeleteApiKeyRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The ID for the API key.</p>
   */
  id: string | undefined;
}

export namespace DeleteApiKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApiKeyRequest): any => ({
    ...obj,
  });
}

export interface DeleteApiKeyResponse {}

export namespace DeleteApiKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApiKeyResponse): any => ({
    ...obj,
  });
}

export interface DeleteDataSourceRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The name of the data source.</p>
   */
  name: string | undefined;
}

export namespace DeleteDataSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDataSourceRequest): any => ({
    ...obj,
  });
}

export interface DeleteDataSourceResponse {}

export namespace DeleteDataSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDataSourceResponse): any => ({
    ...obj,
  });
}

export interface DeleteFunctionRequest {
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The <code>Function</code> ID.</p>
   */
  functionId: string | undefined;
}

export namespace DeleteFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFunctionRequest): any => ({
    ...obj,
  });
}

export interface DeleteFunctionResponse {}

export namespace DeleteFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFunctionResponse): any => ({
    ...obj,
  });
}

export interface DeleteGraphqlApiRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

export namespace DeleteGraphqlApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGraphqlApiRequest): any => ({
    ...obj,
  });
}

export interface DeleteGraphqlApiResponse {}

export namespace DeleteGraphqlApiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGraphqlApiResponse): any => ({
    ...obj,
  });
}

export interface DeleteResolverRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The name of the resolver type.</p>
   */
  typeName: string | undefined;

  /**
   * <p>The resolver field name.</p>
   */
  fieldName: string | undefined;
}

export namespace DeleteResolverRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResolverRequest): any => ({
    ...obj,
  });
}

export interface DeleteResolverResponse {}

export namespace DeleteResolverResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResolverResponse): any => ({
    ...obj,
  });
}

export interface DeleteTypeRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The type name.</p>
   */
  typeName: string | undefined;
}

export namespace DeleteTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTypeRequest): any => ({
    ...obj,
  });
}

export interface DeleteTypeResponse {}

export namespace DeleteTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTypeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>FlushApiCache</code> operation.</p>
 */
export interface FlushApiCacheRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

export namespace FlushApiCacheRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlushApiCacheRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>FlushApiCache</code> operation.</p>
 */
export interface FlushApiCacheResponse {}

export namespace FlushApiCacheResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlushApiCacheResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>GetApiCache</code> operation.</p>
 */
export interface GetApiCacheRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

export namespace GetApiCacheRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApiCacheRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>GetApiCache</code> operation.</p>
 */
export interface GetApiCacheResponse {
  /**
   * <p>The <code>ApiCache</code> object.</p>
   */
  apiCache?: ApiCache;
}

export namespace GetApiCacheResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApiCacheResponse): any => ({
    ...obj,
  });
}

export interface GetDataSourceRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The name of the data source.</p>
   */
  name: string | undefined;
}

export namespace GetDataSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataSourceRequest): any => ({
    ...obj,
  });
}

export interface GetDataSourceResponse {
  /**
   * <p>The <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}

export namespace GetDataSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataSourceResponse): any => ({
    ...obj,
  });
}

export interface GetFunctionRequest {
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The <code>Function</code> ID.</p>
   */
  functionId: string | undefined;
}

export namespace GetFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionRequest): any => ({
    ...obj,
  });
}

export interface GetFunctionResponse {
  /**
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
}

export namespace GetFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionResponse): any => ({
    ...obj,
  });
}

export interface GetGraphqlApiRequest {
  /**
   * <p>The API ID for the GraphQL API.</p>
   */
  apiId: string | undefined;
}

export namespace GetGraphqlApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGraphqlApiRequest): any => ({
    ...obj,
  });
}

export interface GetGraphqlApiResponse {
  /**
   * <p>The <code>GraphqlApi</code> object.</p>
   */
  graphqlApi?: GraphqlApi;
}

export namespace GetGraphqlApiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGraphqlApiResponse): any => ({
    ...obj,
  });
}

export enum OutputType {
  JSON = "JSON",
  SDL = "SDL",
}

export interface GetIntrospectionSchemaRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The schema format: SDL or JSON.</p>
   */
  format: OutputType | string | undefined;

  /**
   * <p>A flag that specifies whether the schema introspection should contain directives.</p>
   */
  includeDirectives?: boolean;
}

export namespace GetIntrospectionSchemaRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntrospectionSchemaRequest): any => ({
    ...obj,
  });
}

export interface GetIntrospectionSchemaResponse {
  /**
   * <p>The schema, in GraphQL Schema Definition Language (SDL) format.</p>
   *          <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL
   *             documentation</a>.</p>
   */
  schema?: Uint8Array;
}

export namespace GetIntrospectionSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntrospectionSchemaResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The GraphQL schema is not valid.</p>
 */
export interface GraphQLSchemaException extends __SmithyException, $MetadataBearer {
  name: "GraphQLSchemaException";
  $fault: "client";
  message?: string;
}

export namespace GraphQLSchemaException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GraphQLSchemaException): any => ({
    ...obj,
  });
}

export interface GetResolverRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The resolver type name.</p>
   */
  typeName: string | undefined;

  /**
   * <p>The resolver field name.</p>
   */
  fieldName: string | undefined;
}

export namespace GetResolverRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResolverRequest): any => ({
    ...obj,
  });
}

export interface GetResolverResponse {
  /**
   * <p>The <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
}

export namespace GetResolverResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResolverResponse): any => ({
    ...obj,
  });
}

export interface GetSchemaCreationStatusRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

export namespace GetSchemaCreationStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaCreationStatusRequest): any => ({
    ...obj,
  });
}

export enum SchemaStatus {
  Active = "ACTIVE",
  Deleting = "DELETING",
  Failed = "FAILED",
  NotApplicable = "NOT_APPLICABLE",
  Processing = "PROCESSING",
  Success = "SUCCESS",
}

export interface GetSchemaCreationStatusResponse {
  /**
   * <p>The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When
   *          the schema is in the ACTIVE state, you can add data.</p>
   */
  status?: SchemaStatus | string;

  /**
   * <p>Detailed information about the status of the schema creation operation.</p>
   */
  details?: string;
}

export namespace GetSchemaCreationStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaCreationStatusResponse): any => ({
    ...obj,
  });
}

export interface GetTypeRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The type name.</p>
   */
  typeName: string | undefined;

  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | string | undefined;
}

export namespace GetTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTypeRequest): any => ({
    ...obj,
  });
}

export interface GetTypeResponse {
  /**
   * <p>The <code>Type</code> object.</p>
   */
  type?: Type;
}

export namespace GetTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTypeResponse): any => ({
    ...obj,
  });
}

export interface ListApiKeysRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}

export namespace ListApiKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApiKeysRequest): any => ({
    ...obj,
  });
}

export interface ListApiKeysResponse {
  /**
   * <p>The <code>ApiKey</code> objects.</p>
   */
  apiKeys?: ApiKey[];

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListApiKeysResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApiKeysResponse): any => ({
    ...obj,
  });
}

export interface ListDataSourcesRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}

export namespace ListDataSourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataSourcesRequest): any => ({
    ...obj,
  });
}

export interface ListDataSourcesResponse {
  /**
   * <p>The <code>DataSource</code> objects.</p>
   */
  dataSources?: DataSource[];

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListDataSourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataSourcesResponse): any => ({
    ...obj,
  });
}

export interface ListFunctionsRequest {
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}

export namespace ListFunctionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFunctionsRequest): any => ({
    ...obj,
  });
}

export interface ListFunctionsResponse {
  /**
   * <p>A list of <code>Function</code> objects.</p>
   */
  functions?: FunctionConfiguration[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListFunctionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFunctionsResponse): any => ({
    ...obj,
  });
}

export interface ListGraphqlApisRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}

export namespace ListGraphqlApisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGraphqlApisRequest): any => ({
    ...obj,
  });
}

export interface ListGraphqlApisResponse {
  /**
   * <p>The <code>GraphqlApi</code> objects.</p>
   */
  graphqlApis?: GraphqlApi[];

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListGraphqlApisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGraphqlApisResponse): any => ({
    ...obj,
  });
}

export interface ListResolversRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The type name.</p>
   */
  typeName: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}

export namespace ListResolversRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResolversRequest): any => ({
    ...obj,
  });
}

export interface ListResolversResponse {
  /**
   * <p>The <code>Resolver</code> objects.</p>
   */
  resolvers?: Resolver[];

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListResolversResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResolversResponse): any => ({
    ...obj,
  });
}

export interface ListResolversByFunctionRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The Function ID.</p>
   */
  functionId: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}

export namespace ListResolversByFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResolversByFunctionRequest): any => ({
    ...obj,
  });
}

export interface ListResolversByFunctionResponse {
  /**
   * <p>The list of resolvers.</p>
   */
  resolvers?: Resolver[];

  /**
   * <p>An identifier that can be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListResolversByFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResolversByFunctionResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The <code>GraphqlApi</code> ARN.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A <code>TagMap</code> object.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTypesRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}

export namespace ListTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTypesRequest): any => ({
    ...obj,
  });
}

export interface ListTypesResponse {
  /**
   * <p>The <code>Type</code> objects.</p>
   */
  types?: Type[];

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTypesResponse): any => ({
    ...obj,
  });
}

export interface StartSchemaCreationRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The schema definition, in GraphQL schema language format.</p>
   */
  definition: Uint8Array | undefined;
}

export namespace StartSchemaCreationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSchemaCreationRequest): any => ({
    ...obj,
  });
}

export interface StartSchemaCreationResponse {
  /**
   * <p>The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When
   *          the schema is in the ACTIVE state, you can add data.</p>
   */
  status?: SchemaStatus | string;
}

export namespace StartSchemaCreationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSchemaCreationResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The <code>GraphqlApi</code> ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A <code>TagMap</code> object.</p>
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

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The <code>GraphqlApi</code> ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of <code>TagKey</code> objects.</p>
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

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>UpdateApiCache</code> operation.</p>
 */
export interface UpdateApiCacheRequest {
  /**
   * <p>The GraphQL API Id.</p>
   */
  apiId: string | undefined;

  /**
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl: number | undefined;

  /**
   * <p>Caching behavior.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>FULL_REQUEST_CACHING</b>: All requests are fully
   *                cached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PER_RESOLVER_CACHING</b>: Individual resolvers
   *                that you specify are cached.</p>
   *             </li>
   *          </ul>
   */
  apiCachingBehavior: ApiCachingBehavior | string | undefined;

  /**
   * <p>The cache instance type. Valid values are </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SMALL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XLARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_2X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_4X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_8X</code> (not available in all regions)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_12X</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p>
   *          <p>The following legacy instance types are available, but their use is discouraged:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>T2_SMALL</b>: A t2.small instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>T2_MEDIUM</b>: A t2.medium instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_LARGE</b>: A r4.large instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_XLARGE</b>: A r4.xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p>
   *             </li>
   *          </ul>
   */
  type: ApiCacheType | string | undefined;
}

export namespace UpdateApiCacheRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApiCacheRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>UpdateApiCache</code> operation.</p>
 */
export interface UpdateApiCacheResponse {
  /**
   * <p>The <code>ApiCache</code> object.</p>
   */
  apiCache?: ApiCache;
}

export namespace UpdateApiCacheResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApiCacheResponse): any => ({
    ...obj,
  });
}

export interface UpdateApiKeyRequest {
  /**
   * <p>The ID for the GraphQL API.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The API key ID.</p>
   */
  id: string | undefined;

  /**
   * <p>A description of the purpose of the API key.</p>
   */
  description?: string;

  /**
   * <p>The time from update time after which the API key expires. The date is represented as
   *          seconds since the epoch. For more information, see .</p>
   */
  expires?: number;
}

export namespace UpdateApiKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApiKeyRequest): any => ({
    ...obj,
  });
}

export interface UpdateApiKeyResponse {
  /**
   * <p>The API key.</p>
   */
  apiKey?: ApiKey;
}

export namespace UpdateApiKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApiKeyResponse): any => ({
    ...obj,
  });
}

export interface UpdateDataSourceRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The new name for the data source.</p>
   */
  name: string | undefined;

  /**
   * <p>The new description for the data source.</p>
   */
  description?: string;

  /**
   * <p>The new data source type.</p>
   */
  type: DataSourceType | string | undefined;

  /**
   * <p>The new service role ARN for the data source.</p>
   */
  serviceRoleArn?: string;

  /**
   * <p>The new Amazon DynamoDB configuration.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * <p>The new Amazon Web Services Lambda configuration.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;

  /**
   * <p>The new Elasticsearch Service configuration.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * <p>The new HTTP endpoint configuration.</p>
   */
  httpConfig?: HttpDataSourceConfig;

  /**
   * <p>The new relational database configuration.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
}

export namespace UpdateDataSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDataSourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateDataSourceResponse {
  /**
   * <p>The updated <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}

export namespace UpdateDataSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDataSourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateFunctionRequest {
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The <code>Function</code> name.</p>
   */
  name: string | undefined;

  /**
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;

  /**
   * <p>The function ID.</p>
   */
  functionId: string | undefined;

  /**
   * <p>The <code>Function</code>
   *             <code>DataSource</code> name.</p>
   */
  dataSourceName: string | undefined;

  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * <p>The <code>Function</code> request mapping template. </p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The <code>version</code> of the request mapping template. Currently the supported value
   *          is 2018-05-29. </p>
   */
  functionVersion: string | undefined;

  /**
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Contains information on which Conflict Detection as well as Resolution strategy should
   *          be performed when the resolver is invoked.</p>
   */
  syncConfig?: SyncConfig;
}

export namespace UpdateFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFunctionRequest): any => ({
    ...obj,
  });
}

export interface UpdateFunctionResponse {
  /**
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
}

export namespace UpdateFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFunctionResponse): any => ({
    ...obj,
  });
}

export interface UpdateGraphqlApiRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The new name for the <code>GraphqlApi</code> object.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon CloudWatch Logs configuration for the <code>GraphqlApi</code> object.</p>
   */
  logConfig?: LogConfig;

  /**
   * <p>The new authentication type for the <code>GraphqlApi</code> object.</p>
   */
  authenticationType?: AuthenticationType | string;

  /**
   * <p>The new Amazon Cognito user pool configuration for the <code>GraphqlApi</code>
   *          object.</p>
   */
  userPoolConfig?: UserPoolConfig;

  /**
   * <p>The OpenID Connect configuration for the <code>GraphqlApi</code> object.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;

  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];

  /**
   * <p>A flag indicating whether to enable X-Ray tracing for the
   *          <code>GraphqlApi</code>.</p>
   */
  xrayEnabled?: boolean;

  /**
   * <p>Configuration for AWS Lambda function authorization.</p>
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
}

export namespace UpdateGraphqlApiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGraphqlApiRequest): any => ({
    ...obj,
  });
}

export interface UpdateGraphqlApiResponse {
  /**
   * <p>The updated <code>GraphqlApi</code> object.</p>
   */
  graphqlApi?: GraphqlApi;
}

export namespace UpdateGraphqlApiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGraphqlApiResponse): any => ({
    ...obj,
  });
}

export interface UpdateResolverRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The new type name.</p>
   */
  typeName: string | undefined;

  /**
   * <p>The new field name.</p>
   */
  fieldName: string | undefined;

  /**
   * <p>The new data source name.</p>
   */
  dataSourceName?: string;

  /**
   * <p>The new request mapping template.</p>
   *          <p>A resolver uses a request mapping template to convert a GraphQL expression into a format
   *          that a data source can understand. Mapping templates are written in Apache Velocity
   *          Template Language (VTL).</p>
   *          <p>VTL request mapping templates are optional when using a Lambda data source. For all
   *          other data sources, VTL request and response mapping templates are required.</p>
   */
  requestMappingTemplate?: string;

  /**
   * <p>The new response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is
   *                the default resolver type. A UNIT resolver enables you to execute a GraphQL query
   *                against a single data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE
   *                resolver enables you to execute a series of <code>Function</code> in a serial manner.
   *                You can use a pipeline resolver to execute a GraphQL query against multiple data
   *                sources.</p>
   *             </li>
   *          </ul>
   */
  kind?: ResolverKind | string;

  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;

  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned datasource.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;
}

export namespace UpdateResolverRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResolverRequest): any => ({
    ...obj,
  });
}

export interface UpdateResolverResponse {
  /**
   * <p>The updated <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
}

export namespace UpdateResolverResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResolverResponse): any => ({
    ...obj,
  });
}

export interface UpdateTypeRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The new type name.</p>
   */
  typeName: string | undefined;

  /**
   * <p>The new definition.</p>
   */
  definition?: string;

  /**
   * <p>The new type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | string | undefined;
}

export namespace UpdateTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTypeRequest): any => ({
    ...obj,
  });
}

export interface UpdateTypeResponse {
  /**
   * <p>The updated <code>Type</code> object.</p>
   */
  type?: Type;
}

export namespace UpdateTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTypeResponse): any => ({
    ...obj,
  });
}
