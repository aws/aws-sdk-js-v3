import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have access to perform this operation on this resource.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

/**
 * <p>Describes an additional authentication provider.</p>
 */
export interface AdditionalAuthenticationProvider {
  __type?: "AdditionalAuthenticationProvider";
  /**
   * <p>The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools.</p>
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
}

export namespace AdditionalAuthenticationProvider {
  export function isa(o: any): o is AdditionalAuthenticationProvider {
    return __isa(o, "AdditionalAuthenticationProvider");
  }
}

export interface ApiCache {
  __type?: "ApiCache";
  /**
   * <p>Caching behavior.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>PER_RESOLVER_CACHING</b>: Individual resovlers that you specify are cached.</p>
   *             </li>
   *          </ul>
   */
  apiCachingBehavior?: ApiCachingBehavior | string;

  /**
   * <p>At rest encryption flag for cache. This setting cannot be updated after creation.</p>
   */
  atRestEncryptionEnabled?: boolean;

  /**
   * <p>The cache instance status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>AVAILABLE</b>: The instance is available for use.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>CREATING</b>: The instance is currently creating.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b>: The instance is currently deleting.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>MODIFYING</b>: The instance is currently modifying.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b>: The instance has failed creation.</p>
   *            </li>
   *          </ul>
   */
  status?: ApiCacheStatus | string;

  /**
   * <p>Transit encryption flag when connecting to cache. This setting cannot be updated after creation.</p>
   */
  transitEncryptionEnabled?: boolean;

  /**
   * <p>TTL in seconds for cache entries.</p>
   *         <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl?: number;

  /**
   * <p>The cache instance type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>T2_SMALL</b>: A t2.small instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>T2_MEDIUM</b>: A t2.medium instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_LARGE</b>: A r4.large instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_XLARGE</b>: A r4.xlarge instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p>
   *            </li>
   *          </ul>
   */
  type?: ApiCacheType | string;
}

export namespace ApiCache {
  export function isa(o: any): o is ApiCache {
    return __isa(o, "ApiCache");
  }
}

export enum ApiCacheStatus {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  MODIFYING = "MODIFYING"
}

export enum ApiCacheType {
  R4_2XLARGE = "R4_2XLARGE",
  R4_4XLARGE = "R4_4XLARGE",
  R4_8XLARGE = "R4_8XLARGE",
  R4_LARGE = "R4_LARGE",
  R4_XLARGE = "R4_XLARGE",
  T2_MEDIUM = "T2_MEDIUM",
  T2_SMALL = "T2_SMALL"
}

export enum ApiCachingBehavior {
  FULL_REQUEST_CACHING = "FULL_REQUEST_CACHING",
  PER_RESOLVER_CACHING = "PER_RESOLVER_CACHING"
}

/**
 * <p>Describes an API key.</p>
 *          <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There
 *          are two key versions:</p>
 *          <p>
 *             <b>da1</b>:  This version was introduced at launch in November
 *          2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The
 *          keys ceased to be valid after February 21, 2018 and should not be used after that
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
 *                <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where
 *                keys are not automatically deleted because DynamoDB expects the TTL to be stored in
 *                seconds. As a one-time action, we will delete these keys from the table after February 21,
 *                2018.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>da2</b>: This version was introduced in February 2018 when
 *          AppSync added support to extend key expiration.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ListApiKeys</code> returns the expiration time in seconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateApiKey</code> returns the expiration time in seconds and accepts a
 *                user-provided expiration time in seconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a
 *                user-provided expiration time in seconds. Key expiration can only be updated while
 *                the key has not expired.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteApiKey</code> deletes the item from the table.</p>
 *             </li>
 *             <li>
 *                <p>Expiration is stored in Amazon DynamoDB as seconds.</p>
 *             </li>
 *          </ul>
 */
export interface ApiKey {
  __type?: "ApiKey";
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
   * <p>The API key ID.</p>
   */
  id?: string;
}

export namespace ApiKey {
  export function isa(o: any): o is ApiKey {
    return __isa(o, "ApiKey");
  }
}

/**
 * <p>The API key exceeded a limit. Try your request again.</p>
 */
export interface ApiKeyLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApiKeyLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace ApiKeyLimitExceededException {
  export function isa(o: any): o is ApiKeyLimitExceededException {
    return __isa(o, "ApiKeyLimitExceededException");
  }
}

/**
 * <p>The API key expiration must be set to a value between 1 and 365 days from creation (for
 *             <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>
 */
export interface ApiKeyValidityOutOfBoundsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApiKeyValidityOutOfBoundsException";
  $fault: "client";
  message?: string;
}

export namespace ApiKeyValidityOutOfBoundsException {
  export function isa(o: any): o is ApiKeyValidityOutOfBoundsException {
    return __isa(o, "ApiKeyValidityOutOfBoundsException");
  }
}

/**
 * <p>The GraphQL API exceeded a limit. Try your request again.</p>
 */
export interface ApiLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApiLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace ApiLimitExceededException {
  export function isa(o: any): o is ApiLimitExceededException {
    return __isa(o, "ApiLimitExceededException");
  }
}

export enum AuthenticationType {
  AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS",
  API_KEY = "API_KEY",
  AWS_IAM = "AWS_IAM",
  OPENID_CONNECT = "OPENID_CONNECT"
}

/**
 * <p>The authorization config in case the HTTP endpoint requires authorization.</p>
 */
export interface AuthorizationConfig {
  __type?: "AuthorizationConfig";
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
   * <p>The AWS IAM settings.</p>
   */
  awsIamConfig?: AwsIamConfig;
}

export namespace AuthorizationConfig {
  export function isa(o: any): o is AuthorizationConfig {
    return __isa(o, "AuthorizationConfig");
  }
}

export enum AuthorizationType {
  AWS_IAM = "AWS_IAM"
}

/**
 * <p>The AWS IAM configuration.</p>
 */
export interface AwsIamConfig {
  __type?: "AwsIamConfig";
  /**
   * <p>The signing region for AWS IAM authorization.</p>
   */
  signingRegion?: string;

  /**
   * <p>The signing service name for AWS IAM authorization.</p>
   */
  signingServiceName?: string;
}

export namespace AwsIamConfig {
  export function isa(o: any): o is AwsIamConfig {
    return __isa(o, "AwsIamConfig");
  }
}

/**
 * <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again. </p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

/**
 * <p>The caching configuration for a resolver that has caching enabled.</p>
 */
export interface CachingConfig {
  __type?: "CachingConfig";
  /**
   * <p>The caching keys for a resolver that has caching enabled.</p>
   *          <p>Valid values are entries from the <code>$context.identity</code> and <code>$context.arguments</code> maps.</p>
   */
  cachingKeys?: Array<string>;

  /**
   * <p>The TTL in seconds for a resolver that has caching enabled.</p>
   *          <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl?: number;
}

export namespace CachingConfig {
  export function isa(o: any): o is CachingConfig {
    return __isa(o, "CachingConfig");
  }
}

/**
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 */
export interface CognitoUserPoolConfig {
  __type?: "CognitoUserPoolConfig";
  /**
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client
   *          ID.</p>
   */
  appIdClientRegex?: string;

  /**
   * <p>The AWS Region in which the user pool was created.</p>
   */
  awsRegion: string | undefined;

  /**
   * <p>The user pool ID.</p>
   */
  userPoolId: string | undefined;
}

export namespace CognitoUserPoolConfig {
  export function isa(o: any): o is CognitoUserPoolConfig {
    return __isa(o, "CognitoUserPoolConfig");
  }
}

/**
 * <p>Another modification is in progress at this time and it must complete before you can make
 *          your change. </p>
 */
export interface ConcurrentModificationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentModificationException {
  export function isa(o: any): o is ConcurrentModificationException {
    return __isa(o, "ConcurrentModificationException");
  }
}

export enum ConflictDetectionType {
  NONE = "NONE",
  VERSION = "VERSION"
}

export enum ConflictHandlerType {
  AUTOMERGE = "AUTOMERGE",
  LAMBDA = "LAMBDA",
  NONE = "NONE",
  OPTIMISTIC_CONCURRENCY = "OPTIMISTIC_CONCURRENCY"
}

/**
 * <p>Represents the input of a <code>CreateApiCache</code> operation.</p>
 */
export interface CreateApiCacheRequest {
  __type?: "CreateApiCacheRequest";
  /**
   * <p>Caching behavior.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>PER_RESOLVER_CACHING</b>: Individual resovlers that you specify are cached.</p>
   *             </li>
   *          </ul>
   */
  apiCachingBehavior: ApiCachingBehavior | string | undefined;

  /**
   * <p>The GraphQL API Id.</p>
   */
  apiId: string | undefined;

  /**
   * <p>At rest encryption flag for cache. This setting cannot be updated after creation.</p>
   */
  atRestEncryptionEnabled?: boolean;

  /**
   * <p>Transit encryption flag when connecting to cache. This setting cannot be updated after creation.</p>
   */
  transitEncryptionEnabled?: boolean;

  /**
   * <p>TTL in seconds for cache entries.</p>
   *         <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl: number | undefined;

  /**
   * <p>The cache instance type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>T2_SMALL</b>: A t2.small instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>T2_MEDIUM</b>: A t2.medium instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_LARGE</b>: A r4.large instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_XLARGE</b>: A r4.xlarge instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p>
   *            </li>
   *          </ul>
   */
  type: ApiCacheType | string | undefined;
}

export namespace CreateApiCacheRequest {
  export function isa(o: any): o is CreateApiCacheRequest {
    return __isa(o, "CreateApiCacheRequest");
  }
}

/**
 * <p>Represents the output of a <code>CreateApiCache</code> operation.</p>
 */
export interface CreateApiCacheResponse {
  __type?: "CreateApiCacheResponse";
  /**
   * <p>The <code>ApiCache</code> object.</p>
   */
  apiCache?: ApiCache;
}

export namespace CreateApiCacheResponse {
  export function isa(o: any): o is CreateApiCacheResponse {
    return __isa(o, "CreateApiCacheResponse");
  }
}

export interface CreateApiKeyRequest {
  __type?: "CreateApiKeyRequest";
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
  export function isa(o: any): o is CreateApiKeyRequest {
    return __isa(o, "CreateApiKeyRequest");
  }
}

export interface CreateApiKeyResponse {
  __type?: "CreateApiKeyResponse";
  /**
   * <p>The API key.</p>
   */
  apiKey?: ApiKey;
}

export namespace CreateApiKeyResponse {
  export function isa(o: any): o is CreateApiKeyResponse {
    return __isa(o, "CreateApiKeyResponse");
  }
}

export interface CreateDataSourceRequest {
  __type?: "CreateDataSourceRequest";
  /**
   * <p>The API ID for the GraphQL API for the <code>DataSource</code>.</p>
   */
  apiId: string | undefined;

  /**
   * <p>A description of the <code>DataSource</code>.</p>
   */
  description?: string;

  /**
   * <p>Amazon DynamoDB settings.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * <p>Amazon Elasticsearch Service settings.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * <p>HTTP endpoint settings.</p>
   */
  httpConfig?: HttpDataSourceConfig;

  /**
   * <p>AWS Lambda settings.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;

  /**
   * <p>A user-supplied name for the <code>DataSource</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>Relational database settings.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;

  /**
   * <p>The AWS IAM service role ARN for the data source. The system assumes this role when
   *          accessing the data source.</p>
   */
  serviceRoleArn?: string;

  /**
   * <p>The type of the <code>DataSource</code>.</p>
   */
  type: DataSourceType | string | undefined;
}

export namespace CreateDataSourceRequest {
  export function isa(o: any): o is CreateDataSourceRequest {
    return __isa(o, "CreateDataSourceRequest");
  }
}

export interface CreateDataSourceResponse {
  __type?: "CreateDataSourceResponse";
  /**
   * <p>The <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}

export namespace CreateDataSourceResponse {
  export function isa(o: any): o is CreateDataSourceResponse {
    return __isa(o, "CreateDataSourceResponse");
  }
}

export interface CreateFunctionRequest {
  __type?: "CreateFunctionRequest";
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The <code>Function</code>
   *             <code>DataSource</code> name.</p>
   */
  dataSourceName: string | undefined;

  /**
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;

  /**
   * <p>The <code>version</code> of the request mapping template. Currently the supported value is 2018-05-29. </p>
   */
  functionVersion: string | undefined;

  /**
   * <p>The <code>Function</code> name. The function name does not have to be unique.</p>
   */
  name: string | undefined;

  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate: string | undefined;

  /**
   * <p>The <code>Function</code> response mapping template. </p>
   */
  responseMappingTemplate?: string;
}

export namespace CreateFunctionRequest {
  export function isa(o: any): o is CreateFunctionRequest {
    return __isa(o, "CreateFunctionRequest");
  }
}

export interface CreateFunctionResponse {
  __type?: "CreateFunctionResponse";
  /**
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
}

export namespace CreateFunctionResponse {
  export function isa(o: any): o is CreateFunctionResponse {
    return __isa(o, "CreateFunctionResponse");
  }
}

export interface CreateGraphqlApiRequest {
  __type?: "CreateGraphqlApiRequest";
  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code> API.</p>
   */
  additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;

  /**
   * <p>The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools.</p>
   */
  authenticationType: AuthenticationType | string | undefined;

  /**
   * <p>The Amazon CloudWatch Logs configuration.</p>
   */
  logConfig?: LogConfig;

  /**
   * <p>A user-supplied name for the <code>GraphqlApi</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;

  /**
   * <p>A <code>TagMap</code> object.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: UserPoolConfig;
}

export namespace CreateGraphqlApiRequest {
  export function isa(o: any): o is CreateGraphqlApiRequest {
    return __isa(o, "CreateGraphqlApiRequest");
  }
}

export interface CreateGraphqlApiResponse {
  __type?: "CreateGraphqlApiResponse";
  /**
   * <p>The <code>GraphqlApi</code>.</p>
   */
  graphqlApi?: GraphqlApi;
}

export namespace CreateGraphqlApiResponse {
  export function isa(o: any): o is CreateGraphqlApiResponse {
    return __isa(o, "CreateGraphqlApiResponse");
  }
}

export interface CreateResolverRequest {
  __type?: "CreateResolverRequest";
  /**
   * <p>The ID for the GraphQL API for which the resolver is being created.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;

  /**
   * <p>The name of the data source for which the resolver is being created.</p>
   */
  dataSourceName?: string;

  /**
   * <p>The name of the field to attach the resolver to.</p>
   */
  fieldName: string | undefined;

  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type.
   *                    A UNIT resolver is the default resolver type.
   *                    A UNIT resolver enables you to execute a GraphQL query against a single data source.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type.
   *                    A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner.
   *                    You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p>
   *            </li>
   *          </ul>
   */
  kind?: ResolverKind | string;

  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;

  /**
   * <p>The mapping template to be used for requests.</p>
   *          <p>A resolver uses a request mapping template to convert a GraphQL expression into a format
   *          that a data source can understand. Mapping templates are written in Apache Velocity
   *          Template Language (VTL).</p>
   */
  requestMappingTemplate: string | undefined;

  /**
   * <p>The mapping template to be used for responses from the data source.</p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned datasource.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * <p>The name of the <code>Type</code>.</p>
   */
  typeName: string | undefined;
}

export namespace CreateResolverRequest {
  export function isa(o: any): o is CreateResolverRequest {
    return __isa(o, "CreateResolverRequest");
  }
}

export interface CreateResolverResponse {
  __type?: "CreateResolverResponse";
  /**
   * <p>The <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
}

export namespace CreateResolverResponse {
  export function isa(o: any): o is CreateResolverResponse {
    return __isa(o, "CreateResolverResponse");
  }
}

export interface CreateTypeRequest {
  __type?: "CreateTypeRequest";
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
  export function isa(o: any): o is CreateTypeRequest {
    return __isa(o, "CreateTypeRequest");
  }
}

export interface CreateTypeResponse {
  __type?: "CreateTypeResponse";
  /**
   * <p>The <code>Type</code> object.</p>
   */
  type?: Type;
}

export namespace CreateTypeResponse {
  export function isa(o: any): o is CreateTypeResponse {
    return __isa(o, "CreateTypeResponse");
  }
}

/**
 * <p>Describes a data source.</p>
 */
export interface DataSource {
  __type?: "DataSource";
  /**
   * <p>The data source ARN.</p>
   */
  dataSourceArn?: string;

  /**
   * <p>The description of the data source.</p>
   */
  description?: string;

  /**
   * <p>Amazon DynamoDB settings.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * <p>Amazon Elasticsearch Service settings.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * <p>HTTP endpoint settings.</p>
   */
  httpConfig?: HttpDataSourceConfig;

  /**
   * <p>AWS Lambda settings.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;

  /**
   * <p>The name of the data source.</p>
   */
  name?: string;

  /**
   * <p>Relational database settings.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;

  /**
   * <p>The AWS IAM service role ARN for the data source. The system assumes this role when
   *          accessing the data source.</p>
   */
  serviceRoleArn?: string;

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
   *                   <b>AWS_LAMBDA</b>: The data source is an AWS Lambda
   *                function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NONE</b>: There is no data source. This type is
   *                used when you wish to invoke a GraphQL operation without connecting to a data
   *                source, such as performing data transformation with resolvers or triggering a
   *                subscription to be invoked from a mutation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>HTTP</b>: The data source is an HTTP endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>RELATIONAL_DATABASE</b>: The data source is a relational
   *                database.</p>
   *             </li>
   *          </ul>
   */
  type?: DataSourceType | string;
}

export namespace DataSource {
  export function isa(o: any): o is DataSource {
    return __isa(o, "DataSource");
  }
}

export enum DataSourceType {
  AMAZON_DYNAMODB = "AMAZON_DYNAMODB",
  AMAZON_ELASTICSEARCH = "AMAZON_ELASTICSEARCH",
  AWS_LAMBDA = "AWS_LAMBDA",
  HTTP = "HTTP",
  NONE = "NONE",
  RELATIONAL_DATABASE = "RELATIONAL_DATABASE"
}

export enum DefaultAction {
  ALLOW = "ALLOW",
  DENY = "DENY"
}

/**
 * <p>Represents the input of a <code>DeleteApiCache</code> operation.</p>
 */
export interface DeleteApiCacheRequest {
  __type?: "DeleteApiCacheRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

export namespace DeleteApiCacheRequest {
  export function isa(o: any): o is DeleteApiCacheRequest {
    return __isa(o, "DeleteApiCacheRequest");
  }
}

/**
 * <p>Represents the output of a <code>DeleteApiCache</code> operation.</p>
 */
export interface DeleteApiCacheResponse {
  __type?: "DeleteApiCacheResponse";
}

export namespace DeleteApiCacheResponse {
  export function isa(o: any): o is DeleteApiCacheResponse {
    return __isa(o, "DeleteApiCacheResponse");
  }
}

export interface DeleteApiKeyRequest {
  __type?: "DeleteApiKeyRequest";
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
  export function isa(o: any): o is DeleteApiKeyRequest {
    return __isa(o, "DeleteApiKeyRequest");
  }
}

export interface DeleteApiKeyResponse {
  __type?: "DeleteApiKeyResponse";
}

export namespace DeleteApiKeyResponse {
  export function isa(o: any): o is DeleteApiKeyResponse {
    return __isa(o, "DeleteApiKeyResponse");
  }
}

export interface DeleteDataSourceRequest {
  __type?: "DeleteDataSourceRequest";
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
  export function isa(o: any): o is DeleteDataSourceRequest {
    return __isa(o, "DeleteDataSourceRequest");
  }
}

export interface DeleteDataSourceResponse {
  __type?: "DeleteDataSourceResponse";
}

export namespace DeleteDataSourceResponse {
  export function isa(o: any): o is DeleteDataSourceResponse {
    return __isa(o, "DeleteDataSourceResponse");
  }
}

export interface DeleteFunctionRequest {
  __type?: "DeleteFunctionRequest";
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
  export function isa(o: any): o is DeleteFunctionRequest {
    return __isa(o, "DeleteFunctionRequest");
  }
}

export interface DeleteFunctionResponse {
  __type?: "DeleteFunctionResponse";
}

export namespace DeleteFunctionResponse {
  export function isa(o: any): o is DeleteFunctionResponse {
    return __isa(o, "DeleteFunctionResponse");
  }
}

export interface DeleteGraphqlApiRequest {
  __type?: "DeleteGraphqlApiRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

export namespace DeleteGraphqlApiRequest {
  export function isa(o: any): o is DeleteGraphqlApiRequest {
    return __isa(o, "DeleteGraphqlApiRequest");
  }
}

export interface DeleteGraphqlApiResponse {
  __type?: "DeleteGraphqlApiResponse";
}

export namespace DeleteGraphqlApiResponse {
  export function isa(o: any): o is DeleteGraphqlApiResponse {
    return __isa(o, "DeleteGraphqlApiResponse");
  }
}

export interface DeleteResolverRequest {
  __type?: "DeleteResolverRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The resolver field name.</p>
   */
  fieldName: string | undefined;

  /**
   * <p>The name of the resolver type.</p>
   */
  typeName: string | undefined;
}

export namespace DeleteResolverRequest {
  export function isa(o: any): o is DeleteResolverRequest {
    return __isa(o, "DeleteResolverRequest");
  }
}

export interface DeleteResolverResponse {
  __type?: "DeleteResolverResponse";
}

export namespace DeleteResolverResponse {
  export function isa(o: any): o is DeleteResolverResponse {
    return __isa(o, "DeleteResolverResponse");
  }
}

export interface DeleteTypeRequest {
  __type?: "DeleteTypeRequest";
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
  export function isa(o: any): o is DeleteTypeRequest {
    return __isa(o, "DeleteTypeRequest");
  }
}

export interface DeleteTypeResponse {
  __type?: "DeleteTypeResponse";
}

export namespace DeleteTypeResponse {
  export function isa(o: any): o is DeleteTypeResponse {
    return __isa(o, "DeleteTypeResponse");
  }
}

/**
 * <p>Describes a Delta Sync configuration.</p>
 */
export interface DeltaSyncConfig {
  __type?: "DeltaSyncConfig";
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
  export function isa(o: any): o is DeltaSyncConfig {
    return __isa(o, "DeltaSyncConfig");
  }
}

/**
 * <p>Describes an Amazon DynamoDB data source configuration.</p>
 */
export interface DynamodbDataSourceConfig {
  __type?: "DynamodbDataSourceConfig";
  /**
   * <p>The AWS Region.</p>
   */
  awsRegion: string | undefined;

  /**
   * <p>The <code>DeltaSyncConfig</code> for a versioned datasource.</p>
   */
  deltaSyncConfig?: DeltaSyncConfig;

  /**
   * <p>The table name.</p>
   */
  tableName: string | undefined;

  /**
   * <p>Set to TRUE to use Amazon Cognito credentials with this data source.</p>
   */
  useCallerCredentials?: boolean;

  /**
   * <p>Set to TRUE to use Conflict Detection and Resolution with this data source.</p>
   */
  versioned?: boolean;
}

export namespace DynamodbDataSourceConfig {
  export function isa(o: any): o is DynamodbDataSourceConfig {
    return __isa(o, "DynamodbDataSourceConfig");
  }
}

/**
 * <p>Describes an Elasticsearch data source configuration.</p>
 */
export interface ElasticsearchDataSourceConfig {
  __type?: "ElasticsearchDataSourceConfig";
  /**
   * <p>The AWS Region.</p>
   */
  awsRegion: string | undefined;

  /**
   * <p>The endpoint.</p>
   */
  endpoint: string | undefined;
}

export namespace ElasticsearchDataSourceConfig {
  export function isa(o: any): o is ElasticsearchDataSourceConfig {
    return __isa(o, "ElasticsearchDataSourceConfig");
  }
}

export enum FieldLogLevel {
  ALL = "ALL",
  ERROR = "ERROR",
  NONE = "NONE"
}

/**
 * <p>Represents the input of a <code>FlushApiCache</code> operation.</p>
 */
export interface FlushApiCacheRequest {
  __type?: "FlushApiCacheRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

export namespace FlushApiCacheRequest {
  export function isa(o: any): o is FlushApiCacheRequest {
    return __isa(o, "FlushApiCacheRequest");
  }
}

/**
 * <p>Represents the output of a <code>FlushApiCache</code> operation.</p>
 */
export interface FlushApiCacheResponse {
  __type?: "FlushApiCacheResponse";
}

export namespace FlushApiCacheResponse {
  export function isa(o: any): o is FlushApiCacheResponse {
    return __isa(o, "FlushApiCacheResponse");
  }
}

/**
 * <p>A function is a reusable entity. Multiple functions can be used to compose the resolver logic.</p>
 */
export interface FunctionConfiguration {
  __type?: "FunctionConfiguration";
  /**
   * <p>The name of the <code>DataSource</code>.</p>
   */
  dataSourceName?: string;

  /**
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;

  /**
   * <p>The ARN of the <code>Function</code> object.</p>
   */
  functionArn?: string;

  /**
   * <p>A unique ID representing the <code>Function</code> object.</p>
   */
  functionId?: string;

  /**
   * <p>The version of the request mapping template. Currently only the 2018-05-29 version of the template is supported.</p>
   */
  functionVersion?: string;

  /**
   * <p>The name of the <code>Function</code> object.</p>
   */
  name?: string;

  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * <p>The <code>Function</code> response mapping template.</p>
   */
  responseMappingTemplate?: string;
}

export namespace FunctionConfiguration {
  export function isa(o: any): o is FunctionConfiguration {
    return __isa(o, "FunctionConfiguration");
  }
}

/**
 * <p>Represents the input of a <code>GetApiCache</code> operation.</p>
 */
export interface GetApiCacheRequest {
  __type?: "GetApiCacheRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

export namespace GetApiCacheRequest {
  export function isa(o: any): o is GetApiCacheRequest {
    return __isa(o, "GetApiCacheRequest");
  }
}

/**
 * <p>Represents the output of a <code>GetApiCache</code> operation.</p>
 */
export interface GetApiCacheResponse {
  __type?: "GetApiCacheResponse";
  apiCache?: ApiCache;
}

export namespace GetApiCacheResponse {
  export function isa(o: any): o is GetApiCacheResponse {
    return __isa(o, "GetApiCacheResponse");
  }
}

export interface GetDataSourceRequest {
  __type?: "GetDataSourceRequest";
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
  export function isa(o: any): o is GetDataSourceRequest {
    return __isa(o, "GetDataSourceRequest");
  }
}

export interface GetDataSourceResponse {
  __type?: "GetDataSourceResponse";
  /**
   * <p>The <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}

export namespace GetDataSourceResponse {
  export function isa(o: any): o is GetDataSourceResponse {
    return __isa(o, "GetDataSourceResponse");
  }
}

export interface GetFunctionRequest {
  __type?: "GetFunctionRequest";
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
  export function isa(o: any): o is GetFunctionRequest {
    return __isa(o, "GetFunctionRequest");
  }
}

export interface GetFunctionResponse {
  __type?: "GetFunctionResponse";
  /**
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
}

export namespace GetFunctionResponse {
  export function isa(o: any): o is GetFunctionResponse {
    return __isa(o, "GetFunctionResponse");
  }
}

export interface GetGraphqlApiRequest {
  __type?: "GetGraphqlApiRequest";
  /**
   * <p>The API ID for the GraphQL API.</p>
   */
  apiId: string | undefined;
}

export namespace GetGraphqlApiRequest {
  export function isa(o: any): o is GetGraphqlApiRequest {
    return __isa(o, "GetGraphqlApiRequest");
  }
}

export interface GetGraphqlApiResponse {
  __type?: "GetGraphqlApiResponse";
  /**
   * <p>The <code>GraphqlApi</code> object.</p>
   */
  graphqlApi?: GraphqlApi;
}

export namespace GetGraphqlApiResponse {
  export function isa(o: any): o is GetGraphqlApiResponse {
    return __isa(o, "GetGraphqlApiResponse");
  }
}

export interface GetIntrospectionSchemaRequest {
  __type?: "GetIntrospectionSchemaRequest";
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
  export function isa(o: any): o is GetIntrospectionSchemaRequest {
    return __isa(o, "GetIntrospectionSchemaRequest");
  }
}

export interface GetIntrospectionSchemaResponse {
  __type?: "GetIntrospectionSchemaResponse";
  /**
   * <p>The schema, in GraphQL Schema Definition Language (SDL) format.</p>
   *          <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL
   *             documentation</a>.</p>
   */
  schema?: Uint8Array;
}

export namespace GetIntrospectionSchemaResponse {
  export function isa(o: any): o is GetIntrospectionSchemaResponse {
    return __isa(o, "GetIntrospectionSchemaResponse");
  }
}

export interface GetResolverRequest {
  __type?: "GetResolverRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The resolver field name.</p>
   */
  fieldName: string | undefined;

  /**
   * <p>The resolver type name.</p>
   */
  typeName: string | undefined;
}

export namespace GetResolverRequest {
  export function isa(o: any): o is GetResolverRequest {
    return __isa(o, "GetResolverRequest");
  }
}

export interface GetResolverResponse {
  __type?: "GetResolverResponse";
  /**
   * <p>The <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
}

export namespace GetResolverResponse {
  export function isa(o: any): o is GetResolverResponse {
    return __isa(o, "GetResolverResponse");
  }
}

export interface GetSchemaCreationStatusRequest {
  __type?: "GetSchemaCreationStatusRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

export namespace GetSchemaCreationStatusRequest {
  export function isa(o: any): o is GetSchemaCreationStatusRequest {
    return __isa(o, "GetSchemaCreationStatusRequest");
  }
}

export interface GetSchemaCreationStatusResponse {
  __type?: "GetSchemaCreationStatusResponse";
  /**
   * <p>Detailed information about the status of the schema creation operation.</p>
   */
  details?: string;

  /**
   * <p>The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When the schema is in
   *          the ACTIVE state, you can add data.</p>
   */
  status?: SchemaStatus | string;
}

export namespace GetSchemaCreationStatusResponse {
  export function isa(o: any): o is GetSchemaCreationStatusResponse {
    return __isa(o, "GetSchemaCreationStatusResponse");
  }
}

export interface GetTypeRequest {
  __type?: "GetTypeRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | string | undefined;

  /**
   * <p>The type name.</p>
   */
  typeName: string | undefined;
}

export namespace GetTypeRequest {
  export function isa(o: any): o is GetTypeRequest {
    return __isa(o, "GetTypeRequest");
  }
}

export interface GetTypeResponse {
  __type?: "GetTypeResponse";
  /**
   * <p>The <code>Type</code> object.</p>
   */
  type?: Type;
}

export namespace GetTypeResponse {
  export function isa(o: any): o is GetTypeResponse {
    return __isa(o, "GetTypeResponse");
  }
}

/**
 * <p>The GraphQL schema is not valid.</p>
 */
export interface GraphQLSchemaException
  extends __SmithyException,
    $MetadataBearer {
  name: "GraphQLSchemaException";
  $fault: "client";
  message?: string;
}

export namespace GraphQLSchemaException {
  export function isa(o: any): o is GraphQLSchemaException {
    return __isa(o, "GraphQLSchemaException");
  }
}

/**
 * <p>Describes a GraphQL API.</p>
 */
export interface GraphqlApi {
  __type?: "GraphqlApi";
  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code> API.</p>
   */
  additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;

  /**
   * <p>The API ID.</p>
   */
  apiId?: string;

  /**
   * <p>The ARN.</p>
   */
  arn?: string;

  /**
   * <p>The authentication type.</p>
   */
  authenticationType?: AuthenticationType | string;

  /**
   * <p>The Amazon CloudWatch Logs configuration.</p>
   */
  logConfig?: LogConfig;

  /**
   * <p>The API name.</p>
   */
  name?: string;

  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;

  /**
   * <p>The tags.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The URIs.</p>
   */
  uris?: { [key: string]: string };

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: UserPoolConfig;
}

export namespace GraphqlApi {
  export function isa(o: any): o is GraphqlApi {
    return __isa(o, "GraphqlApi");
  }
}

/**
 * <p>Describes an HTTP data source configuration.</p>
 */
export interface HttpDataSourceConfig {
  __type?: "HttpDataSourceConfig";
  /**
   * <p>The authorization config in case the HTTP endpoint requires authorization.</p>
   */
  authorizationConfig?: AuthorizationConfig;

  /**
   * <p>The HTTP URL endpoint. You can either specify the domain name or IP, and port combination, and the URL scheme must be HTTP or HTTPS. If the port is not specified, AWS AppSync uses the default port 80 for the HTTP endpoint and port 443 for HTTPS endpoints.</p>
   */
  endpoint?: string;
}

export namespace HttpDataSourceConfig {
  export function isa(o: any): o is HttpDataSourceConfig {
    return __isa(o, "HttpDataSourceConfig");
  }
}

/**
 * <p>An internal AWS AppSync error occurred. Try your request again.</p>
 */
export interface InternalFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message?: string;
}

export namespace InternalFailureException {
  export function isa(o: any): o is InternalFailureException {
    return __isa(o, "InternalFailureException");
  }
}

export interface LambdaConflictHandlerConfig {
  __type?: "LambdaConflictHandlerConfig";
  /**
   * <p>The Arn for the Lambda function to use as the Conflict Handler.</p>
   */
  lambdaConflictHandlerArn?: string;
}

export namespace LambdaConflictHandlerConfig {
  export function isa(o: any): o is LambdaConflictHandlerConfig {
    return __isa(o, "LambdaConflictHandlerConfig");
  }
}

/**
 * <p>Describes an AWS Lambda data source configuration.</p>
 */
export interface LambdaDataSourceConfig {
  __type?: "LambdaDataSourceConfig";
  /**
   * <p>The ARN for the Lambda function.</p>
   */
  lambdaFunctionArn: string | undefined;
}

export namespace LambdaDataSourceConfig {
  export function isa(o: any): o is LambdaDataSourceConfig {
    return __isa(o, "LambdaDataSourceConfig");
  }
}

/**
 * <p>The request exceeded a limit. Try your request again.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export interface ListApiKeysRequest {
  __type?: "ListApiKeysRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListApiKeysRequest {
  export function isa(o: any): o is ListApiKeysRequest {
    return __isa(o, "ListApiKeysRequest");
  }
}

export interface ListApiKeysResponse {
  __type?: "ListApiKeysResponse";
  /**
   * <p>The <code>ApiKey</code> objects.</p>
   */
  apiKeys?: Array<ApiKey>;

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListApiKeysResponse {
  export function isa(o: any): o is ListApiKeysResponse {
    return __isa(o, "ListApiKeysResponse");
  }
}

export interface ListDataSourcesRequest {
  __type?: "ListDataSourcesRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;
}

export namespace ListDataSourcesRequest {
  export function isa(o: any): o is ListDataSourcesRequest {
    return __isa(o, "ListDataSourcesRequest");
  }
}

export interface ListDataSourcesResponse {
  __type?: "ListDataSourcesResponse";
  /**
   * <p>The <code>DataSource</code> objects.</p>
   */
  dataSources?: Array<DataSource>;

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListDataSourcesResponse {
  export function isa(o: any): o is ListDataSourcesResponse {
    return __isa(o, "ListDataSourcesResponse");
  }
}

export interface ListFunctionsRequest {
  __type?: "ListFunctionsRequest";
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *            used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListFunctionsRequest {
  export function isa(o: any): o is ListFunctionsRequest {
    return __isa(o, "ListFunctionsRequest");
  }
}

export interface ListFunctionsResponse {
  __type?: "ListFunctionsResponse";
  /**
   * <p>A list of <code>Function</code> objects.</p>
   */
  functions?: Array<FunctionConfiguration>;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *            used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListFunctionsResponse {
  export function isa(o: any): o is ListFunctionsResponse {
    return __isa(o, "ListFunctionsResponse");
  }
}

export interface ListGraphqlApisRequest {
  __type?: "ListGraphqlApisRequest";
  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;
}

export namespace ListGraphqlApisRequest {
  export function isa(o: any): o is ListGraphqlApisRequest {
    return __isa(o, "ListGraphqlApisRequest");
  }
}

export interface ListGraphqlApisResponse {
  __type?: "ListGraphqlApisResponse";
  /**
   * <p>The <code>GraphqlApi</code> objects.</p>
   */
  graphqlApis?: Array<GraphqlApi>;

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListGraphqlApisResponse {
  export function isa(o: any): o is ListGraphqlApisResponse {
    return __isa(o, "ListGraphqlApisResponse");
  }
}

export interface ListResolversByFunctionRequest {
  __type?: "ListResolversByFunctionRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The Function ID.</p>
   */
  functionId: string | undefined;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListResolversByFunctionRequest {
  export function isa(o: any): o is ListResolversByFunctionRequest {
    return __isa(o, "ListResolversByFunctionRequest");
  }
}

export interface ListResolversByFunctionResponse {
  __type?: "ListResolversByFunctionResponse";
  /**
   * <p>An identifier that can be used to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of resolvers.</p>
   */
  resolvers?: Array<Resolver>;
}

export namespace ListResolversByFunctionResponse {
  export function isa(o: any): o is ListResolversByFunctionResponse {
    return __isa(o, "ListResolversByFunctionResponse");
  }
}

export interface ListResolversRequest {
  __type?: "ListResolversRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;

  /**
   * <p>The type name.</p>
   */
  typeName: string | undefined;
}

export namespace ListResolversRequest {
  export function isa(o: any): o is ListResolversRequest {
    return __isa(o, "ListResolversRequest");
  }
}

export interface ListResolversResponse {
  __type?: "ListResolversResponse";
  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>The <code>Resolver</code> objects.</p>
   */
  resolvers?: Array<Resolver>;
}

export namespace ListResolversResponse {
  export function isa(o: any): o is ListResolversResponse {
    return __isa(o, "ListResolversResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The <code>GraphqlApi</code> ARN.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>A <code>TagMap</code> object.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export interface ListTypesRequest {
  __type?: "ListTypesRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | string | undefined;

  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;
}

export namespace ListTypesRequest {
  export function isa(o: any): o is ListTypesRequest {
    return __isa(o, "ListTypesRequest");
  }
}

export interface ListTypesResponse {
  __type?: "ListTypesResponse";
  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>The <code>Type</code> objects.</p>
   */
  types?: Array<Type>;
}

export namespace ListTypesResponse {
  export function isa(o: any): o is ListTypesResponse {
    return __isa(o, "ListTypesResponse");
  }
}

/**
 * <p>The CloudWatch Logs configuration.</p>
 */
export interface LogConfig {
  __type?: "LogConfig";
  /**
   * <p>The service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account. </p>
   */
  cloudWatchLogsRoleArn: string | undefined;

  /**
   * <p>Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.</p>
   */
  excludeVerboseContent?: boolean;

  /**
   * <p>The field logging level. Values can be NONE, ERROR, or ALL. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>NONE</b>: No field-level logs are captured.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>ERROR</b>: Logs the following information only for the fields that are in error:</p>
   *                 <ul>
   *                   <li>
   *                         <p>The error section in the server response.</p>
   *                     </li>
   *                   <li>
   *                           <p>Field-level errors.</p>
   *                     </li>
   *                   <li>
   *                         <p>The generated request/response functions that got resolved for error fields.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>ALL</b>: The following information is logged for all fields in the query:</p>
   *                 <ul>
   *                   <li>
   *                           <p>Field-level tracing information.</p>
   *                       </li>
   *                   <li>
   *                           <p>The generated request/response functions that got resolved for each field.</p>
   *                       </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  fieldLogLevel: FieldLogLevel | string | undefined;
}

export namespace LogConfig {
  export function isa(o: any): o is LogConfig {
    return __isa(o, "LogConfig");
  }
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
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

/**
 * <p>Describes an OpenID Connect configuration.</p>
 */
export interface OpenIDConnectConfig {
  __type?: "OpenIDConnectConfig";
  /**
   * <p>The number of milliseconds a token is valid after being authenticated.</p>
   */
  authTTL?: number;

  /**
   * <p>The client identifier of the Relying party at the OpenID identity provider.
   *             This identifier is typically obtained when the Relying party is registered with the OpenID identity provider.
   *             You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers
   *             at a time.</p>
   */
  clientId?: string;

  /**
   * <p>The number of milliseconds a token is valid after being issued to a user.</p>
   */
  iatTTL?: number;

  /**
   * <p>The issuer for the OpenID Connect configuration. The issuer returned by discovery must exactly match the value of <code>iss</code> in the ID token.</p>
   */
  issuer: string | undefined;
}

export namespace OpenIDConnectConfig {
  export function isa(o: any): o is OpenIDConnectConfig {
    return __isa(o, "OpenIDConnectConfig");
  }
}

export enum OutputType {
  JSON = "JSON",
  SDL = "SDL"
}

/**
 * <p>The pipeline configuration for a resolver of kind <code>PIPELINE</code>.</p>
 */
export interface PipelineConfig {
  __type?: "PipelineConfig";
  /**
   * <p>A list of <code>Function</code> objects.</p>
   */
  functions?: Array<string>;
}

export namespace PipelineConfig {
  export function isa(o: any): o is PipelineConfig {
    return __isa(o, "PipelineConfig");
  }
}

/**
 * <p>The Amazon RDS HTTP endpoint configuration.</p>
 */
export interface RdsHttpEndpointConfig {
  __type?: "RdsHttpEndpointConfig";
  /**
   * <p>AWS Region for RDS HTTP endpoint.</p>
   */
  awsRegion?: string;

  /**
   * <p>AWS secret store ARN for database credentials.</p>
   */
  awsSecretStoreArn?: string;

  /**
   * <p>Logical database name.</p>
   */
  databaseName?: string;

  /**
   * <p>Amazon RDS cluster identifier.</p>
   */
  dbClusterIdentifier?: string;

  /**
   * <p>Logical schema name.</p>
   */
  schema?: string;
}

export namespace RdsHttpEndpointConfig {
  export function isa(o: any): o is RdsHttpEndpointConfig {
    return __isa(o, "RdsHttpEndpointConfig");
  }
}

/**
 * <p>Describes a relational database data source configuration.</p>
 */
export interface RelationalDatabaseDataSourceConfig {
  __type?: "RelationalDatabaseDataSourceConfig";
  /**
   * <p>Amazon RDS HTTP endpoint settings.</p>
   */
  rdsHttpEndpointConfig?: RdsHttpEndpointConfig;

  /**
   * <p>Source type for the relational database.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RDS_HTTP_ENDPOINT</b>: The relational database source type
   *                is an Amazon RDS HTTP endpoint.</p>
   *             </li>
   *          </ul>
   */
  relationalDatabaseSourceType?: RelationalDatabaseSourceType | string;
}

export namespace RelationalDatabaseDataSourceConfig {
  export function isa(o: any): o is RelationalDatabaseDataSourceConfig {
    return __isa(o, "RelationalDatabaseDataSourceConfig");
  }
}

export enum RelationalDatabaseSourceType {
  RDS_HTTP_ENDPOINT = "RDS_HTTP_ENDPOINT"
}

/**
 * <p>Describes a resolver.</p>
 */
export interface Resolver {
  __type?: "Resolver";
  /**
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;

  /**
   * <p>The resolver data source name.</p>
   */
  dataSourceName?: string;

  /**
   * <p>The resolver field name.</p>
   */
  fieldName?: string;

  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type.
   *                    A UNIT resolver is the default resolver type.
   *                    A UNIT resolver enables you to execute a GraphQL query against a single data source.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type.
   *               A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner.
   *          You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p>
   *             </li>
   *          </ul>
   */
  kind?: ResolverKind | string;

  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;

  /**
   * <p>The request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * <p>The resolver ARN.</p>
   */
  resolverArn?: string;

  /**
   * <p>The response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned datasource.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * <p>The resolver type name.</p>
   */
  typeName?: string;
}

export namespace Resolver {
  export function isa(o: any): o is Resolver {
    return __isa(o, "Resolver");
  }
}

export enum ResolverKind {
  PIPELINE = "PIPELINE",
  UNIT = "UNIT"
}

export enum SchemaStatus {
  Active = "ACTIVE",
  Deleting = "DELETING",
  Failed = "FAILED",
  NotApplicable = "NOT_APPLICABLE",
  Processing = "PROCESSING",
  Success = "SUCCESS"
}

export interface StartSchemaCreationRequest {
  __type?: "StartSchemaCreationRequest";
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
  export function isa(o: any): o is StartSchemaCreationRequest {
    return __isa(o, "StartSchemaCreationRequest");
  }
}

export interface StartSchemaCreationResponse {
  __type?: "StartSchemaCreationResponse";
  /**
   * <p>The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When the schema is in
   *          the ACTIVE state, you can add data.</p>
   */
  status?: SchemaStatus | string;
}

export namespace StartSchemaCreationResponse {
  export function isa(o: any): o is StartSchemaCreationResponse {
    return __isa(o, "StartSchemaCreationResponse");
  }
}

/**
 * <p>Describes a Sync configuration for a resolver.</p>
 *          <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
 */
export interface SyncConfig {
  __type?: "SyncConfig";
  /**
   * <p>The Conflict Detection strategy to use.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>VERSION</b>: Detect conflicts based on object versions for this resolver.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>NONE</b>: Do not detect conflicts when executing this resolver.</p>
   *            </li>
   *          </ul>
   */
  conflictDetection?: ConflictDetectionType | string;

  /**
   * <p>The Conflict Resolution strategy to perform in the event of a conflict.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>OPTIMISTIC_CONCURRENCY</b>: Resolve conflicts by rejecting mutations when versions do not match the latest version at the server.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>AUTOMERGE</b>: Resolve conflicts with the Automerge conflict resolution strategy.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>LAMBDA</b>: Resolve conflicts with a Lambda function supplied in the LambdaConflictHandlerConfig.</p>
   *            </li>
   *          </ul>
   */
  conflictHandler?: ConflictHandlerType | string;

  /**
   * <p>The <code>LambdaConflictHandlerConfig</code> when configuring LAMBDA as the Conflict Handler.</p>
   */
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
}

export namespace SyncConfig {
  export function isa(o: any): o is SyncConfig {
    return __isa(o, "SyncConfig");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>Describes a type.</p>
 */
export interface Type {
  __type?: "Type";
  /**
   * <p>The type ARN.</p>
   */
  arn?: string;

  /**
   * <p>The type definition.</p>
   */
  definition?: string;

  /**
   * <p>The type description.</p>
   */
  description?: string;

  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format?: TypeDefinitionFormat | string;

  /**
   * <p>The type name.</p>
   */
  name?: string;
}

export namespace Type {
  export function isa(o: any): o is Type {
    return __isa(o, "Type");
  }
}

export enum TypeDefinitionFormat {
  JSON = "JSON",
  SDL = "SDL"
}

/**
 * <p>You are not authorized to perform this operation.</p>
 */
export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  message?: string;
}

export namespace UnauthorizedException {
  export function isa(o: any): o is UnauthorizedException {
    return __isa(o, "UnauthorizedException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The <code>GraphqlApi</code> ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of <code>TagKey</code> objects.</p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

/**
 * <p>Represents the input of a <code>UpdateApiCache</code> operation.</p>
 */
export interface UpdateApiCacheRequest {
  __type?: "UpdateApiCacheRequest";
  /**
   * <p>Caching behavior.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>PER_RESOLVER_CACHING</b>: Individual resovlers that you specify are cached.</p>
   *             </li>
   *          </ul>
   */
  apiCachingBehavior: ApiCachingBehavior | string | undefined;

  /**
   * <p>The GraphQL API Id.</p>
   */
  apiId: string | undefined;

  /**
   * <p>TTL in seconds for cache entries.</p>
   *         <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl: number | undefined;

  /**
   * <p>The cache instance type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>T2_SMALL</b>: A t2.small instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>T2_MEDIUM</b>: A t2.medium instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_LARGE</b>: A r4.large instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_XLARGE</b>: A r4.xlarge instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p>
   *            </li>
   *          </ul>
   */
  type: ApiCacheType | string | undefined;
}

export namespace UpdateApiCacheRequest {
  export function isa(o: any): o is UpdateApiCacheRequest {
    return __isa(o, "UpdateApiCacheRequest");
  }
}

/**
 * <p>Represents the output of a <code>UpdateApiCache</code> operation.</p>
 */
export interface UpdateApiCacheResponse {
  __type?: "UpdateApiCacheResponse";
  /**
   * <p>The <code>ApiCache</code> object.</p>
   */
  apiCache?: ApiCache;
}

export namespace UpdateApiCacheResponse {
  export function isa(o: any): o is UpdateApiCacheResponse {
    return __isa(o, "UpdateApiCacheResponse");
  }
}

export interface UpdateApiKeyRequest {
  __type?: "UpdateApiKeyRequest";
  /**
   * <p>The ID for the GraphQL API.</p>
   */
  apiId: string | undefined;

  /**
   * <p>A description of the purpose of the API key.</p>
   */
  description?: string;

  /**
   * <p>The time from update time after which the API key expires. The date is represented as
   *          seconds since the epoch. For more information, see .</p>
   */
  expires?: number;

  /**
   * <p>The API key ID.</p>
   */
  id: string | undefined;
}

export namespace UpdateApiKeyRequest {
  export function isa(o: any): o is UpdateApiKeyRequest {
    return __isa(o, "UpdateApiKeyRequest");
  }
}

export interface UpdateApiKeyResponse {
  __type?: "UpdateApiKeyResponse";
  /**
   * <p>The API key.</p>
   */
  apiKey?: ApiKey;
}

export namespace UpdateApiKeyResponse {
  export function isa(o: any): o is UpdateApiKeyResponse {
    return __isa(o, "UpdateApiKeyResponse");
  }
}

export interface UpdateDataSourceRequest {
  __type?: "UpdateDataSourceRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The new description for the data source.</p>
   */
  description?: string;

  /**
   * <p>The new Amazon DynamoDB configuration.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * <p>The new Elasticsearch Service configuration.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * <p>The new HTTP endpoint configuration.</p>
   */
  httpConfig?: HttpDataSourceConfig;

  /**
   * <p>The new AWS Lambda configuration.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;

  /**
   * <p>The new name for the data source.</p>
   */
  name: string | undefined;

  /**
   * <p>The new relational database configuration.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;

  /**
   * <p>The new service role ARN for the data source.</p>
   */
  serviceRoleArn?: string;

  /**
   * <p>The new data source type.</p>
   */
  type: DataSourceType | string | undefined;
}

export namespace UpdateDataSourceRequest {
  export function isa(o: any): o is UpdateDataSourceRequest {
    return __isa(o, "UpdateDataSourceRequest");
  }
}

export interface UpdateDataSourceResponse {
  __type?: "UpdateDataSourceResponse";
  /**
   * <p>The updated <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}

export namespace UpdateDataSourceResponse {
  export function isa(o: any): o is UpdateDataSourceResponse {
    return __isa(o, "UpdateDataSourceResponse");
  }
}

export interface UpdateFunctionRequest {
  __type?: "UpdateFunctionRequest";
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The <code>Function</code>
   *             <code>DataSource</code> name.</p>
   */
  dataSourceName: string | undefined;

  /**
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;

  /**
   * <p>The function ID.</p>
   */
  functionId: string | undefined;

  /**
   * <p>The <code>version</code> of the request mapping template. Currently the supported value is 2018-05-29. </p>
   */
  functionVersion: string | undefined;

  /**
   * <p>The <code>Function</code> name.</p>
   */
  name: string | undefined;

  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate: string | undefined;

  /**
   * <p>The <code>Function</code> request mapping template. </p>
   */
  responseMappingTemplate?: string;
}

export namespace UpdateFunctionRequest {
  export function isa(o: any): o is UpdateFunctionRequest {
    return __isa(o, "UpdateFunctionRequest");
  }
}

export interface UpdateFunctionResponse {
  __type?: "UpdateFunctionResponse";
  /**
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
}

export namespace UpdateFunctionResponse {
  export function isa(o: any): o is UpdateFunctionResponse {
    return __isa(o, "UpdateFunctionResponse");
  }
}

export interface UpdateGraphqlApiRequest {
  __type?: "UpdateGraphqlApiRequest";
  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code> API.</p>
   */
  additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;

  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The new authentication type for the <code>GraphqlApi</code> object.</p>
   */
  authenticationType?: AuthenticationType | string;

  /**
   * <p>The Amazon CloudWatch Logs configuration for the <code>GraphqlApi</code>
   *             object.</p>
   */
  logConfig?: LogConfig;

  /**
   * <p>The new name for the <code>GraphqlApi</code> object.</p>
   */
  name: string | undefined;

  /**
   * <p>The OpenID Connect configuration for the <code>GraphqlApi</code>
   *             object.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;

  /**
   * <p>The new Amazon Cognito user pool configuration for the <code>GraphqlApi</code>
   *          object.</p>
   */
  userPoolConfig?: UserPoolConfig;
}

export namespace UpdateGraphqlApiRequest {
  export function isa(o: any): o is UpdateGraphqlApiRequest {
    return __isa(o, "UpdateGraphqlApiRequest");
  }
}

export interface UpdateGraphqlApiResponse {
  __type?: "UpdateGraphqlApiResponse";
  /**
   * <p>The updated <code>GraphqlApi</code> object.</p>
   */
  graphqlApi?: GraphqlApi;
}

export namespace UpdateGraphqlApiResponse {
  export function isa(o: any): o is UpdateGraphqlApiResponse {
    return __isa(o, "UpdateGraphqlApiResponse");
  }
}

export interface UpdateResolverRequest {
  __type?: "UpdateResolverRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;

  /**
   * <p>The new data source name.</p>
   */
  dataSourceName?: string;

  /**
   * <p>The new field name.</p>
   */
  fieldName: string | undefined;

  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type.
   *                  A UNIT resolver is the default resolver type.
   *                  A UNIT resolver enables you to execute a GraphQL query against a single data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type.
   *                  A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner.
   *                  You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p>
   *             </li>
   *          </ul>
   */
  kind?: ResolverKind | string;

  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;

  /**
   * <p>The new request mapping template.</p>
   */
  requestMappingTemplate: string | undefined;

  /**
   * <p>The new response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned datasource.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * <p>The new type name.</p>
   */
  typeName: string | undefined;
}

export namespace UpdateResolverRequest {
  export function isa(o: any): o is UpdateResolverRequest {
    return __isa(o, "UpdateResolverRequest");
  }
}

export interface UpdateResolverResponse {
  __type?: "UpdateResolverResponse";
  /**
   * <p>The updated <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
}

export namespace UpdateResolverResponse {
  export function isa(o: any): o is UpdateResolverResponse {
    return __isa(o, "UpdateResolverResponse");
  }
}

export interface UpdateTypeRequest {
  __type?: "UpdateTypeRequest";
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * <p>The new definition.</p>
   */
  definition?: string;

  /**
   * <p>The new type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | string | undefined;

  /**
   * <p>The new type name.</p>
   */
  typeName: string | undefined;
}

export namespace UpdateTypeRequest {
  export function isa(o: any): o is UpdateTypeRequest {
    return __isa(o, "UpdateTypeRequest");
  }
}

export interface UpdateTypeResponse {
  __type?: "UpdateTypeResponse";
  /**
   * <p>The updated <code>Type</code> object.</p>
   */
  type?: Type;
}

export namespace UpdateTypeResponse {
  export function isa(o: any): o is UpdateTypeResponse {
    return __isa(o, "UpdateTypeResponse");
  }
}

/**
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 */
export interface UserPoolConfig {
  __type?: "UserPoolConfig";
  /**
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client
   *          ID.</p>
   */
  appIdClientRegex?: string;

  /**
   * <p>The AWS Region in which the user pool was created.</p>
   */
  awsRegion: string | undefined;

  /**
   * <p>The action that you want your GraphQL API to take when a request that uses Amazon
   *          Cognito user pool authentication doesn't match the Amazon Cognito user pool
   *          configuration.</p>
   */
  defaultAction: DefaultAction | string | undefined;

  /**
   * <p>The user pool ID.</p>
   */
  userPoolId: string | undefined;
}

export namespace UserPoolConfig {
  export function isa(o: any): o is UserPoolConfig {
    return __isa(o, "UserPoolConfig");
  }
}
