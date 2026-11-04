// smithy-typescript generated code
import type {
  ApiCacheStatus,
  ApiCacheType,
  ApiCachingBehavior,
  AssociationStatus,
  AuthenticationType,
  AuthorizationType,
  CacheHealthMetricsConfig,
  ConflictDetectionType,
  ConflictHandlerType,
  DataSourceIntrospectionStatus,
  DataSourceLevelMetricsBehavior,
  DataSourceLevelMetricsConfig,
  DataSourceType,
  DefaultAction,
  EventLogLevel,
  FieldLogLevel,
  GraphQLApiIntrospectionConfig,
  GraphQLApiType,
  GraphQLApiVisibility,
  HandlerBehavior,
  InvokeType,
  MergeType,
  OperationLevelMetricsConfig,
  OutputType,
  Ownership,
  RelationalDatabaseSourceType,
  ResolverKind,
  ResolverLevelMetricsBehavior,
  ResolverLevelMetricsConfig,
  RuntimeName,
  SchemaStatus,
  SourceApiAssociationStatus,
  TypeDefinitionFormat,
} from "./enums";

/**
 * A `LambdaAuthorizerConfig` specifies how to authorize AppSync API access when using the `AWS_LAMBDA` authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.
 *
 * @public
 */
export interface LambdaAuthorizerConfig {
  /**
   * The number of seconds a response should be cached for. The default is 0 seconds, which disables caching. If you don't specify a value for `authorizerResultTtlInSeconds`, the default value is used. The maximum value is one hour (3600 seconds). The Lambda function can override this by returning a `ttlOverride` key in its response.
   *
   * @public
   */
  authorizerResultTtlInSeconds?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function to be called for authorization. This can be a standard Lambda ARN, a version ARN (`.../v3`), or an alias ARN.
   *
   * **Note**: This Lambda function must have the following resource-based policy assigned to it. When configuring Lambda authorizers in the console, this is done for you. To use the Command Line Interface (CLI), run the following:
   *
   * `aws lambda add-permission --function-name "arn:aws:lambda:us-east-2:111122223333:function:my-function" --statement-id "appsync" --principal appsync.amazonaws.com --action lambda:InvokeFunction`
   *
   * @public
   */
  authorizerUri: string | undefined;

  /**
   * A regular expression for validation of tokens before the Lambda function is called.
   *
   * @public
   */
  identityValidationExpression?: string | undefined;
}

/**
 * Describes an OpenID Connect (OIDC) configuration.
 *
 * @public
 */
export interface OpenIDConnectConfig {
  /**
   * The issuer for the OIDC configuration. The issuer returned by discovery must exactly match the value of `iss` in the ID token.
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * The client identifier of the relying party at the OpenID identity provider. This identifier is typically obtained when the relying party is registered with the OpenID identity provider. You can specify a regular expression so that AppSync can validate against multiple client identifiers at a time.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * The number of milliseconds that a token is valid after it's issued to a user.
   *
   * @public
   */
  iatTTL?: number | undefined;

  /**
   * The number of milliseconds that a token is valid after being authenticated.
   *
   * @public
   */
  authTTL?: number | undefined;
}

/**
 * Describes an Amazon Cognito user pool configuration.
 *
 * @public
 */
export interface CognitoUserPoolConfig {
  /**
   * The user pool ID.
   *
   * @public
   */
  userPoolId: string | undefined;

  /**
   * The Amazon Web Services Region in which the user pool was created.
   *
   * @public
   */
  awsRegion: string | undefined;

  /**
   * A regular expression for validating the incoming Amazon Cognito user pool app client ID. If this value isn't set, no filtering is applied.
   *
   * @public
   */
  appIdClientRegex?: string | undefined;
}

/**
 * Describes an additional authentication provider.
 *
 * @public
 */
export interface AdditionalAuthenticationProvider {
  /**
   * The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
   *
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * The OIDC configuration.
   *
   * @public
   */
  openIDConnectConfig?: OpenIDConnectConfig | undefined;

  /**
   * The Amazon Cognito user pool configuration.
   *
   * @public
   */
  userPoolConfig?: CognitoUserPoolConfig | undefined;

  /**
   * Configuration for Lambda function authorization.
   *
   * @public
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig | undefined;
}

/**
 * Describes an Amazon Cognito configuration.
 *
 * @public
 */
export interface CognitoConfig {
  /**
   * The user pool ID.
   *
   * @public
   */
  userPoolId: string | undefined;

  /**
   * The Amazon Web Services Region in which the user pool was created.
   *
   * @public
   */
  awsRegion: string | undefined;

  /**
   * A regular expression for validating the incoming Amazon Cognito user pool app client ID. If this value isn't set, no filtering is applied.
   *
   * @public
   */
  appIdClientRegex?: string | undefined;
}

/**
 * Describes an authorization provider.
 *
 * @public
 */
export interface AuthProvider {
  /**
   * The authorization type.
   *
   * @public
   */
  authType: AuthenticationType | undefined;

  /**
   * Describes an Amazon Cognito user pool configuration.
   *
   * @public
   */
  cognitoConfig?: CognitoConfig | undefined;

  /**
   * Describes an OpenID Connect (OIDC) configuration.
   *
   * @public
   */
  openIDConnectConfig?: OpenIDConnectConfig | undefined;

  /**
   * A `LambdaAuthorizerConfig` specifies how to authorize AppSync API access when using the `AWS_LAMBDA` authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.
   *
   * @public
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig | undefined;
}

/**
 * Describes an authorization configuration. Use `AuthMode` to specify the publishing and subscription authorization configuration for an Event API.
 *
 * @public
 */
export interface AuthMode {
  /**
   * The authorization type.
   *
   * @public
   */
  authType: AuthenticationType | undefined;
}

/**
 * Describes the CloudWatch Logs configuration for the Event API.
 *
 * @public
 */
export interface EventLogConfig {
  /**
   * The type of information to log for the Event API.
   *
   * @public
   */
  logLevel: EventLogLevel | undefined;

  /**
   * The IAM service role that AppSync assumes to publish CloudWatch Logs in your account.
   *
   * @public
   */
  cloudWatchLogsRoleArn: string | undefined;
}

/**
 * Describes the authorization configuration for connections, message publishing, message subscriptions, and logging for an Event API.
 *
 * @public
 */
export interface EventConfig {
  /**
   * A list of authorization providers.
   *
   * @public
   */
  authProviders: AuthProvider[] | undefined;

  /**
   * A list of valid authorization modes for the Event API connections.
   *
   * @public
   */
  connectionAuthModes: AuthMode[] | undefined;

  /**
   * A list of valid authorization modes for the Event API publishing.
   *
   * @public
   */
  defaultPublishAuthModes: AuthMode[] | undefined;

  /**
   * A list of valid authorization modes for the Event API subscriptions.
   *
   * @public
   */
  defaultSubscribeAuthModes: AuthMode[] | undefined;

  /**
   * The CloudWatch Logs configuration for the Event API.
   *
   * @public
   */
  logConfig?: EventLogConfig | undefined;
}

/**
 * Describes an AppSync API. You can use `Api` for an AppSync API with your preferred configuration, such as an Event API that provides real-time message publishing and message subscriptions over WebSockets.
 *
 * @public
 */
export interface Api {
  /**
   * The `Api` ID.
   *
   * @public
   */
  apiId?: string | undefined;

  /**
   * The name of the `Api`.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The owner contact information for the `Api`
   *
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * A map with keys of `TagKey` objects and values of `TagValue` objects.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The DNS records for the API. This will include an HTTP and a real-time endpoint.
   *
   * @public
   */
  dns?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) for the `Api`.
   *
   * @public
   */
  apiArn?: string | undefined;

  /**
   * The date and time that the `Api` was created.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * A flag indicating whether to use X-Ray tracing for this `Api`.
   *
   * @public
   */
  xrayEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the WAF web access control list (web ACL) associated with this `Api`, if one exists.
   *
   * @public
   */
  wafWebAclArn?: string | undefined;

  /**
   * The Event API configuration. This includes the default authorization configuration for connecting, publishing, and subscribing to an Event API.
   *
   * @public
   */
  eventConfig?: EventConfig | undefined;
}

/**
 * Describes an `ApiAssociation` object.
 *
 * @public
 */
export interface ApiAssociation {
  /**
   * The domain name.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The API ID.
   *
   * @public
   */
  apiId?: string | undefined;

  /**
   * Identifies the status of an association.
   *
   * - **PROCESSING**: The API association is being created. You cannot modify association requests during processing.
   * - **SUCCESS**: The API association was successful. You can modify associations after success.
   * - **FAILED**: The API association has failed. You can modify associations after failure.
   *
   * @public
   */
  associationStatus?: AssociationStatus | undefined;

  /**
   * Details about the last deployment status.
   *
   * @public
   */
  deploymentDetail?: string | undefined;
}

/**
 * The `ApiCache` object.
 *
 * @public
 */
export interface ApiCache {
  /**
   * TTL in seconds for cache entries.
   *
   * Valid values are 1–3,600 seconds.
   *
   * @public
   */
  ttl?: number | undefined;

  /**
   * Caching behavior.
   *
   * - **FULL_REQUEST_CACHING**: All requests from the same user are cached. Individual resolvers are automatically cached. All API calls will try to return responses from the cache.
   * - **PER_RESOLVER_CACHING**: Individual resolvers that you specify are cached.
   * - **OPERATION_LEVEL_CACHING**: Full requests are cached together and returned without executing resolvers.
   *
   * @public
   */
  apiCachingBehavior?: ApiCachingBehavior | undefined;

  /**
   * Transit encryption flag when connecting to cache. You cannot update this setting after creation.
   *
   * @public
   */
  transitEncryptionEnabled?: boolean | undefined;

  /**
   * At-rest encryption flag for cache. You cannot update this setting after creation.
   *
   * @public
   */
  atRestEncryptionEnabled?: boolean | undefined;

  /**
   * The cache instance type. Valid values are
   *
   * - `SMALL`
   * - `MEDIUM`
   * - `LARGE`
   * - `XLARGE`
   * - `LARGE_2X`
   * - `LARGE_4X`
   * - `LARGE_8X` (not available in all regions)
   * - `LARGE_12X`
   *
   * Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.
   *
   * The following legacy instance types are available, but their use is discouraged:
   *
   * - **T2_SMALL**: A t2.small instance type.
   * - **T2_MEDIUM**: A t2.medium instance type.
   * - **R4_LARGE**: A r4.large instance type.
   * - **R4_XLARGE**: A r4.xlarge instance type.
   * - **R4_2XLARGE**: A r4.2xlarge instance type.
   * - **R4_4XLARGE**: A r4.4xlarge instance type.
   * - **R4_8XLARGE**: A r4.8xlarge instance type.
   *
   * @public
   */
  type?: ApiCacheType | undefined;

  /**
   * The cache instance status.
   *
   * - **AVAILABLE**: The instance is available for use.
   * - **CREATING**: The instance is currently creating.
   * - **DELETING**: The instance is currently deleting.
   * - **MODIFYING**: The instance is currently modifying.
   * - **FAILED**: The instance has failed creation.
   *
   * @public
   */
  status?: ApiCacheStatus | undefined;

  /**
   * Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include:
   *
   * - NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the throughput exceeded the aggregated bandwidth limit. This is useful for diagnosing bottlenecks in a cache configuration.
   * - EngineCPUUtilization: The CPU utilization (percentage) allocated to the Redis process. This is useful for diagnosing bottlenecks in a cache configuration.
   *
   * Metrics will be recorded by API ID. You can set the value to `ENABLED` or `DISABLED`.
   *
   * @public
   */
  healthMetricsConfig?: CacheHealthMetricsConfig | undefined;
}

/**
 * Describes an API key.
 *
 * Customers invoke AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:
 *
 * **da1**: We introduced this version at launch in November 2017. These keys always expire after 7 days. Amazon DynamoDB TTL manages key expiration. These keys ceased to be valid after February 21, 2018, and they should no longer be used.
 *
 * - `ListApiKeys` returns the expiration time in milliseconds.
 * - `CreateApiKey` returns the expiration time in milliseconds.
 * - `UpdateApiKey` is not available for this key version.
 * - `DeleteApiKey` deletes the item from the table.
 * - Expiration is stored in DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we deleted these keys from the table on February 21, 2018.
 *
 * **da2**: We introduced this version in February 2018 when AppSync added support to extend key expiration.
 *
 * - `ListApiKeys` returns the expiration time and deletion time in seconds.
 * - `CreateApiKey` returns the expiration time and deletion time in seconds and accepts a user-provided expiration time in seconds.
 * - `UpdateApiKey` returns the expiration time and and deletion time in seconds and accepts a user-provided expiration time in seconds. Expired API keys are kept for 60 days after the expiration time. You can update the key expiration time as long as the key isn't deleted.
 * - `DeleteApiKey` deletes the item from the table.
 * - Expiration is stored in DynamoDB as seconds. After the expiration time, using the key to authenticate will fail. However, you can reinstate the key before deletion.
 * - Deletion is stored in DynamoDB as seconds. The key is deleted after deletion time.
 *
 * @public
 */
export interface ApiKey {
  /**
   * The API key ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * A description of the purpose of the API key.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour.
   *
   * @public
   */
  expires?: number | undefined;

  /**
   * The time after which the API key is deleted. The date is represented as seconds since the epoch, rounded down to the nearest hour.
   *
   * @public
   */
  deletes?: number | undefined;
}

/**
 * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
 *
 * @public
 */
export interface AppSyncRuntime {
  /**
   * The `name` of the runtime to use. Currently, the only allowed value is `APPSYNC_JS`.
   *
   * @public
   */
  name: RuntimeName | undefined;

  /**
   * The `version` of the runtime to use. Currently, the only allowed version is `1.0.0`.
   *
   * @public
   */
  runtimeVersion: string | undefined;
}

/**
 * @public
 */
export interface AssociateApiRequest {
  /**
   * The domain name.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The API ID. Private APIs can not be associated with custom domains.
   *
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface AssociateApiResponse {
  /**
   * The `ApiAssociation` object.
   *
   * @public
   */
  apiAssociation?: ApiAssociation | undefined;
}

/**
 * Describes the location of the error in a code sample.
 *
 * @public
 */
export interface CodeErrorLocation {
  /**
   * The line number in the code. Defaults to `0` if unknown.
   *
   * @public
   */
  line?: number | undefined;

  /**
   * The column number in the code. Defaults to `0` if unknown.
   *
   * @public
   */
  column?: number | undefined;

  /**
   * The span/length of the error. Defaults to `-1` if unknown.
   *
   * @public
   */
  span?: number | undefined;
}

/**
 * Describes an AppSync error.
 *
 * @public
 */
export interface CodeError {
  /**
   * The type of code error.
   *
   * Examples include, but aren't limited to: `LINT_ERROR`, `PARSER_ERROR`.
   *
   * @public
   */
  errorType?: string | undefined;

  /**
   * A user presentable error.
   *
   * Examples include, but aren't limited to: `Parsing error: Unterminated string literal`.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The line, column, and span location of the error in the code.
   *
   * @public
   */
  location?: CodeErrorLocation | undefined;
}

/**
 * Provides further details for the reason behind the bad request. For reason type `CODE_ERROR`, the detail will contain a list of code errors.
 *
 * @public
 */
export interface BadRequestDetail {
  /**
   * Contains the list of errors in the request.
   *
   * @public
   */
  codeErrors?: CodeError[] | undefined;
}

/**
 * Describes properties used to specify configurations related to a source API.
 *
 * @public
 */
export interface SourceApiAssociationConfig {
  /**
   * The property that indicates which merging option is enabled in the source API association.
   *
   * Valid merge types are `MANUAL_MERGE` (default) and `AUTO_MERGE`. Manual merges are the default behavior and require the user to trigger any changes from the source APIs to the merged API manually. Auto merges subscribe the merged API to the changes performed on the source APIs so that any change in the source APIs are also made to the merged API. Auto merges use `MergedApiExecutionRoleArn` to perform merge operations.
   *
   * @public
   */
  mergeType?: MergeType | undefined;
}

/**
 * @public
 */
export interface AssociateMergedGraphqlApiRequest {
  /**
   * The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.
   *
   * @public
   */
  sourceApiIdentifier: string | undefined;

  /**
   * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
   *
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * The description field.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The `SourceApiAssociationConfig` object data.
   *
   * @public
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig | undefined;
}

/**
 * Describes the configuration of a source API. A source API is a GraphQL API that is linked to a merged API. There can be multiple source APIs attached to each merged API. When linked to a merged API, the source API's schema, data sources, and resolvers will be combined with other linked source API data to form a new, singular API.
 *
 * Source APIs can originate from your account or from other accounts via Amazon Web Services Resource Access Manager. For more information about sharing resources from other accounts, see [What is Amazon Web Services Resource Access Manager?](https://docs.aws.amazon.com/ram/latest/userguide/what-is.html) in the *Amazon Web Services Resource Access Manager* guide.
 *
 * @public
 */
export interface SourceApiAssociation {
  /**
   * The ID generated by the AppSync service for the source API association.
   *
   * @public
   */
  associationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source API association.
   *
   * @public
   */
  associationArn?: string | undefined;

  /**
   * The ID of the AppSync source API.
   *
   * @public
   */
  sourceApiId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AppSync source API.
   *
   * @public
   */
  sourceApiArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AppSync Merged API.
   *
   * @public
   */
  mergedApiArn?: string | undefined;

  /**
   * The ID of the AppSync Merged API.
   *
   * @public
   */
  mergedApiId?: string | undefined;

  /**
   * The description field.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The `SourceApiAssociationConfig` object data.
   *
   * @public
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig | undefined;

  /**
   * The state of the source API association.
   *
   * @public
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus | undefined;

  /**
   * The detailed message related to the current state of the source API association.
   *
   * @public
   */
  sourceApiAssociationStatusDetail?: string | undefined;

  /**
   * The datetime value of the last successful merge of the source API association. The result will be in UTC format and your local time zone.
   *
   * @public
   */
  lastSuccessfulMergeDate?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateMergedGraphqlApiResponse {
  /**
   * The `SourceApiAssociation` object data.
   *
   * @public
   */
  sourceApiAssociation?: SourceApiAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateSourceGraphqlApiRequest {
  /**
   * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
   *
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.
   *
   * @public
   */
  sourceApiIdentifier: string | undefined;

  /**
   * The description field.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The `SourceApiAssociationConfig` object data.
   *
   * @public
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig | undefined;
}

/**
 * @public
 */
export interface AssociateSourceGraphqlApiResponse {
  /**
   * The `SourceApiAssociation` object data.
   *
   * @public
   */
  sourceApiAssociation?: SourceApiAssociation | undefined;
}

/**
 * The Identity and Access Management (IAM) configuration.
 *
 * @public
 */
export interface AwsIamConfig {
  /**
   * The signing Amazon Web Services Region for IAM authorization.
   *
   * @public
   */
  signingRegion?: string | undefined;

  /**
   * The signing service name for IAM authorization.
   *
   * @public
   */
  signingServiceName?: string | undefined;
}

/**
 * The authorization configuration in case the HTTP endpoint requires authorization.
 *
 * @public
 */
export interface AuthorizationConfig {
  /**
   * The authorization type that the HTTP endpoint requires.
   *
   * - **AWS_IAM**: The authorization type is Signature Version 4 (SigV4).
   *
   * @public
   */
  authorizationType: AuthorizationType | undefined;

  /**
   * The Identity and Access Management (IAM) settings.
   *
   * @public
   */
  awsIamConfig?: AwsIamConfig | undefined;
}

/**
 * @public
 */
export interface CreateApiRequest {
  /**
   * The name for the `Api`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The owner contact information for the `Api`.
   *
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * A map with keys of `TagKey` objects and values of `TagValue` objects.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Event API configuration. This includes the default authorization configuration for connecting, publishing, and subscribing to an Event API.
   *
   * @public
   */
  eventConfig: EventConfig | undefined;
}

/**
 * @public
 */
export interface CreateApiResponse {
  /**
   * The `Api` object.
   *
   * @public
   */
  api?: Api | undefined;
}

/**
 * Represents the input of a `CreateApiCache` operation.
 *
 * @public
 */
export interface CreateApiCacheRequest {
  /**
   * The GraphQL API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * TTL in seconds for cache entries.
   *
   * Valid values are 1–3,600 seconds.
   *
   * @public
   */
  ttl: number | undefined;

  /**
   * Transit encryption flag when connecting to cache. You cannot update this setting after creation.
   *
   * @deprecated (since 5/15/2025) transitEncryptionEnabled attribute is deprecated. Encryption in transit is always enabled.
   * @public
   */
  transitEncryptionEnabled?: boolean | undefined;

  /**
   * At-rest encryption flag for cache. You cannot update this setting after creation.
   *
   * @deprecated (since 5/15/2025) atRestEncryptionEnabled attribute is deprecated. Encryption at rest is always enabled.
   * @public
   */
  atRestEncryptionEnabled?: boolean | undefined;

  /**
   * Caching behavior.
   *
   * - **FULL_REQUEST_CACHING**: All requests from the same user are cached. Individual resolvers are automatically cached. All API calls will try to return responses from the cache.
   * - **PER_RESOLVER_CACHING**: Individual resolvers that you specify are cached.
   * - **OPERATION_LEVEL_CACHING**: Full requests are cached together and returned without executing resolvers.
   *
   * @public
   */
  apiCachingBehavior: ApiCachingBehavior | undefined;

  /**
   * The cache instance type. Valid values are
   *
   * - `SMALL`
   * - `MEDIUM`
   * - `LARGE`
   * - `XLARGE`
   * - `LARGE_2X`
   * - `LARGE_4X`
   * - `LARGE_8X` (not available in all regions)
   * - `LARGE_12X`
   *
   * Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.
   *
   * The following legacy instance types are available, but their use is discouraged:
   *
   * - **T2_SMALL**: A t2.small instance type.
   * - **T2_MEDIUM**: A t2.medium instance type.
   * - **R4_LARGE**: A r4.large instance type.
   * - **R4_XLARGE**: A r4.xlarge instance type.
   * - **R4_2XLARGE**: A r4.2xlarge instance type.
   * - **R4_4XLARGE**: A r4.4xlarge instance type.
   * - **R4_8XLARGE**: A r4.8xlarge instance type.
   *
   * @public
   */
  type: ApiCacheType | undefined;

  /**
   * Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include:
   *
   * - NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the throughput exceeded the aggregated bandwidth limit. This is useful for diagnosing bottlenecks in a cache configuration.
   * - EngineCPUUtilization: The CPU utilization (percentage) allocated to the Redis process. This is useful for diagnosing bottlenecks in a cache configuration.
   *
   * Metrics will be recorded by API ID. You can set the value to `ENABLED` or `DISABLED`.
   *
   * @public
   */
  healthMetricsConfig?: CacheHealthMetricsConfig | undefined;
}

/**
 * Represents the output of a `CreateApiCache` operation.
 *
 * @public
 */
export interface CreateApiCacheResponse {
  /**
   * The `ApiCache` object.
   *
   * @public
   */
  apiCache?: ApiCache | undefined;
}

/**
 * @public
 */
export interface CreateApiKeyRequest {
  /**
   * The ID for your GraphQL API.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * A description of the purpose of the API key.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * From the creation time, the time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see .
   *
   * @public
   */
  expires?: number | undefined;
}

/**
 * @public
 */
export interface CreateApiKeyResponse {
  /**
   * The API key.
   *
   * @public
   */
  apiKey?: ApiKey | undefined;
}

/**
 * The configuration for a Lambda data source.
 *
 * @public
 */
export interface LambdaConfig {
  /**
   * The invocation type for a Lambda data source.
   *
   * @public
   */
  invokeType?: InvokeType | undefined;
}

/**
 * The integration data source configuration for the handler.
 *
 * @public
 */
export interface Integration {
  /**
   * The unique name of the data source that has been configured on the API.
   *
   * @public
   */
  dataSourceName: string | undefined;

  /**
   * The configuration for a Lambda data source.
   *
   * @public
   */
  lambdaConfig?: LambdaConfig | undefined;
}

/**
 * The configuration for a handler.
 *
 * @public
 */
export interface HandlerConfig {
  /**
   * The behavior for the handler.
   *
   * @public
   */
  behavior: HandlerBehavior | undefined;

  /**
   * The integration data source configuration for the handler.
   *
   * @public
   */
  integration: Integration | undefined;
}

/**
 * The configuration for the `OnPublish` and `OnSubscribe` handlers.
 *
 * @public
 */
export interface HandlerConfigs {
  /**
   * The configuration for the `OnPublish` handler.
   *
   * @public
   */
  onPublish?: HandlerConfig | undefined;

  /**
   * The configuration for the `OnSubscribe` handler.
   *
   * @public
   */
  onSubscribe?: HandlerConfig | undefined;
}

/**
 * @public
 */
export interface CreateChannelNamespaceRequest {
  /**
   * The `Api` ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The name of the `ChannelNamespace`. This name must be unique within the `Api`
   *
   * @public
   */
  name: string | undefined;

  /**
   * The authorization mode to use for subscribing to messages on the channel namespace. This configuration overrides the default `Api` authorization configuration.
   *
   * @public
   */
  subscribeAuthModes?: AuthMode[] | undefined;

  /**
   * The authorization mode to use for publishing messages on the channel namespace. This configuration overrides the default `Api` authorization configuration.
   *
   * @public
   */
  publishAuthModes?: AuthMode[] | undefined;

  /**
   * The event handler functions that run custom business logic to process published events and subscribe requests.
   *
   * @public
   */
  codeHandlers?: string | undefined;

  /**
   * A map with keys of `TagKey` objects and values of `TagValue` objects.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration for the `OnPublish` and `OnSubscribe` handlers.
   *
   * @public
   */
  handlerConfigs?: HandlerConfigs | undefined;
}

/**
 * Describes a channel namespace associated with an `Api`. The `ChannelNamespace` contains the definitions for code handlers for the `Api`.
 *
 * @public
 */
export interface ChannelNamespace {
  /**
   * The `Api` ID.
   *
   * @public
   */
  apiId?: string | undefined;

  /**
   * The name of the channel namespace. This name must be unique within the `Api`.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The authorization mode to use for subscribing to messages on the channel namespace. This configuration overrides the default `Api`authorization configuration.
   *
   * @public
   */
  subscribeAuthModes?: AuthMode[] | undefined;

  /**
   * The authorization mode to use for publishing messages on the channel namespace. This configuration overrides the default `Api`authorization configuration.
   *
   * @public
   */
  publishAuthModes?: AuthMode[] | undefined;

  /**
   * The event handler functions that run custom business logic to process published events and subscribe requests.
   *
   * @public
   */
  codeHandlers?: string | undefined;

  /**
   * A map with keys of `TagKey` objects and values of `TagValue` objects.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) for the `ChannelNamespace`.
   *
   * @public
   */
  channelNamespaceArn?: string | undefined;

  /**
   * The date and time that the `ChannelNamespace` was created.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * The date and time that the `ChannelNamespace` was last changed.
   *
   * @public
   */
  lastModified?: Date | undefined;

  /**
   * The configuration for the `OnPublish` and `OnSubscribe` handlers.
   *
   * @public
   */
  handlerConfigs?: HandlerConfigs | undefined;
}

/**
 * @public
 */
export interface CreateChannelNamespaceResponse {
  /**
   * The `ChannelNamespace` object.
   *
   * @public
   */
  channelNamespace?: ChannelNamespace | undefined;
}

/**
 * Describes a Delta Sync configuration.
 *
 * @public
 */
export interface DeltaSyncConfig {
  /**
   * The number of minutes that an Item is stored in the data source.
   *
   * @public
   */
  baseTableTTL?: number | undefined;

  /**
   * The Delta Sync table name.
   *
   * @public
   */
  deltaSyncTableName?: string | undefined;

  /**
   * The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.
   *
   * @public
   */
  deltaSyncTableTTL?: number | undefined;
}

/**
 * Describes an Amazon DynamoDB data source configuration.
 *
 * @public
 */
export interface DynamodbDataSourceConfig {
  /**
   * The table name.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  awsRegion: string | undefined;

  /**
   * Set to TRUE to use Amazon Cognito credentials with this data source.
   *
   * @public
   */
  useCallerCredentials?: boolean | undefined;

  /**
   * The `DeltaSyncConfig` for a versioned data source.
   *
   * @public
   */
  deltaSyncConfig?: DeltaSyncConfig | undefined;

  /**
   * Set to TRUE to use Conflict Detection and Resolution with this data source.
   *
   * @public
   */
  versioned?: boolean | undefined;
}

/**
 * Describes an OpenSearch data source configuration.
 *
 * As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use OpenSearchServiceDataSourceConfig to specify an OpenSearch data source.
 *
 * @public
 */
export interface ElasticsearchDataSourceConfig {
  /**
   * The endpoint.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  awsRegion: string | undefined;
}

/**
 * Describes an Amazon EventBridge bus data source configuration.
 *
 * @public
 */
export interface EventBridgeDataSourceConfig {
  /**
   * The ARN of the event bus. For more information about event buses, see [Amazon EventBridge event buses](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html).
   *
   * @public
   */
  eventBusArn: string | undefined;
}

/**
 * Describes an HTTP data source configuration.
 *
 * @public
 */
export interface HttpDataSourceConfig {
  /**
   * The HTTP URL endpoint. You can specify either the domain name or IP, and port combination, and the URL scheme must be HTTP or HTTPS. If you don't specify the port, AppSync uses the default port 80 for the HTTP endpoint and port 443 for HTTPS endpoints.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The authorization configuration in case the HTTP endpoint requires authorization.
   *
   * @public
   */
  authorizationConfig?: AuthorizationConfig | undefined;
}

/**
 * Describes an Lambda data source configuration.
 *
 * @public
 */
export interface LambdaDataSourceConfig {
  /**
   * The Amazon Resource Name (ARN) for the Lambda function.
   *
   * @public
   */
  lambdaFunctionArn: string | undefined;
}

/**
 * Describes an OpenSearch data source configuration.
 *
 * @public
 */
export interface OpenSearchServiceDataSourceConfig {
  /**
   * The endpoint.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  awsRegion: string | undefined;
}

/**
 * The Amazon Relational Database Service (Amazon RDS) HTTP endpoint configuration.
 *
 * @public
 */
export interface RdsHttpEndpointConfig {
  /**
   * Amazon Web Services Region for Amazon RDS HTTP endpoint.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * Amazon RDS cluster Amazon Resource Name (ARN).
   *
   * @public
   */
  dbClusterIdentifier?: string | undefined;

  /**
   * Logical database name.
   *
   * @public
   */
  databaseName?: string | undefined;

  /**
   * Logical schema name.
   *
   * @public
   */
  schema?: string | undefined;

  /**
   * Amazon Web Services secret store Amazon Resource Name (ARN) for database credentials.
   *
   * @public
   */
  awsSecretStoreArn?: string | undefined;
}

/**
 * Describes a relational database data source configuration.
 *
 * @public
 */
export interface RelationalDatabaseDataSourceConfig {
  /**
   * Source type for the relational database.
   *
   * - **RDS_HTTP_ENDPOINT**: The relational database source type is an Amazon Relational Database Service (Amazon RDS) HTTP endpoint.
   *
   * @public
   */
  relationalDatabaseSourceType?: RelationalDatabaseSourceType | undefined;

  /**
   * Amazon RDS HTTP endpoint settings.
   *
   * @public
   */
  rdsHttpEndpointConfig?: RdsHttpEndpointConfig | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * The API ID for the GraphQL API for the `DataSource`.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * A user-supplied name for the `DataSource`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the `DataSource`.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the `DataSource`.
   *
   * @public
   */
  type: DataSourceType | undefined;

  /**
   * The Identity and Access Management (IAM) service role Amazon Resource Name (ARN) for the data source. The system assumes this role when accessing the data source.
   *
   * @public
   */
  serviceRoleArn?: string | undefined;

  /**
   * Amazon DynamoDB settings.
   *
   * @public
   */
  dynamodbConfig?: DynamodbDataSourceConfig | undefined;

  /**
   * Lambda settings.
   *
   * @public
   */
  lambdaConfig?: LambdaDataSourceConfig | undefined;

  /**
   * Amazon OpenSearch Service settings.
   *
   * As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use CreateDataSourceRequest$openSearchServiceConfig to create an OpenSearch data source.
   *
   * @public
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig | undefined;

  /**
   * Amazon OpenSearch Service settings.
   *
   * @public
   */
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig | undefined;

  /**
   * HTTP endpoint settings.
   *
   * @public
   */
  httpConfig?: HttpDataSourceConfig | undefined;

  /**
   * Relational database settings.
   *
   * @public
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | undefined;

  /**
   * Amazon EventBridge settings.
   *
   * @public
   */
  eventBridgeConfig?: EventBridgeDataSourceConfig | undefined;

  /**
   * Enables or disables enhanced data source metrics for specified data sources. Note that `metricsConfig` won't be used unless the `dataSourceLevelMetricsBehavior` value is set to `PER_DATA_SOURCE_METRICS`. If the `dataSourceLevelMetricsBehavior` is set to `FULL_REQUEST_DATA_SOURCE_METRICS` instead, `metricsConfig` will be ignored. However, you can still set its value.
   *
   * `metricsConfig` can be `ENABLED` or `DISABLED`.
   *
   * @public
   */
  metricsConfig?: DataSourceLevelMetricsConfig | undefined;
}

/**
 * Describes a data source.
 *
 * @public
 */
export interface DataSource {
  /**
   * The data source Amazon Resource Name (ARN).
   *
   * @public
   */
  dataSourceArn?: string | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the data source.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the data source.
   *
   * - **AWS_LAMBDA**: The data source is an Lambda function.
   * - **AMAZON_DYNAMODB**: The data source is an Amazon DynamoDB table.
   * - **AMAZON_ELASTICSEARCH**: The data source is an Amazon OpenSearch Service domain.
   * - **AMAZON_OPENSEARCH_SERVICE**: The data source is an Amazon OpenSearch Service domain.
   * - **AMAZON_EVENTBRIDGE**: The data source is an Amazon EventBridge configuration.
   * - **AMAZON_BEDROCK_RUNTIME**: The data source is the Amazon Bedrock runtime.
   * - **NONE**: There is no data source. Use this type when you want to invoke a GraphQL operation without connecting to a data source, such as when you're performing data transformation with resolvers or invoking a subscription from a mutation.
   * - **HTTP**: The data source is an HTTP endpoint.
   * - **RELATIONAL_DATABASE**: The data source is a relational database.
   *
   * @public
   */
  type?: DataSourceType | undefined;

  /**
   * The Identity and Access Management (IAM) service role Amazon Resource Name (ARN) for the data source. The system assumes this role when accessing the data source.
   *
   * @public
   */
  serviceRoleArn?: string | undefined;

  /**
   * DynamoDB settings.
   *
   * @public
   */
  dynamodbConfig?: DynamodbDataSourceConfig | undefined;

  /**
   * Lambda settings.
   *
   * @public
   */
  lambdaConfig?: LambdaDataSourceConfig | undefined;

  /**
   * Amazon OpenSearch Service settings.
   *
   * @public
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig | undefined;

  /**
   * Amazon OpenSearch Service settings.
   *
   * @public
   */
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig | undefined;

  /**
   * HTTP endpoint settings.
   *
   * @public
   */
  httpConfig?: HttpDataSourceConfig | undefined;

  /**
   * Relational database settings.
   *
   * @public
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | undefined;

  /**
   * Amazon EventBridge settings.
   *
   * @public
   */
  eventBridgeConfig?: EventBridgeDataSourceConfig | undefined;

  /**
   * Enables or disables enhanced data source metrics for specified data sources. Note that `metricsConfig` won't be used unless the `dataSourceLevelMetricsBehavior` value is set to `PER_DATA_SOURCE_METRICS`. If the `dataSourceLevelMetricsBehavior` is set to `FULL_REQUEST_DATA_SOURCE_METRICS` instead, `metricsConfig` will be ignored. However, you can still set its value.
   *
   * `metricsConfig` can be `ENABLED` or `DISABLED`.
   *
   * @public
   */
  metricsConfig?: DataSourceLevelMetricsConfig | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * The `DataSource` object.
   *
   * @public
   */
  dataSource?: DataSource | undefined;
}

/**
 * @public
 */
export interface CreateDomainNameRequest {
  /**
   * The domain name.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate.
   *
   * @public
   */
  certificateArn: string | undefined;

  /**
   * A description of the `DomainName`.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A map with keys of `TagKey` objects and values of `TagValue` objects.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Describes a configuration for a custom domain.
 *
 * @public
 */
export interface DomainNameConfig {
  /**
   * The domain name.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * A description of the `DomainName` configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The domain name that AppSync provides.
   *
   * @public
   */
  appsyncDomainName?: string | undefined;

  /**
   * The ID of your Amazon Route 53 hosted zone.
   *
   * @public
   */
  hostedZoneId?: string | undefined;

  /**
   * A map with keys of `TagKey` objects and values of `TagValue` objects.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain name.
   *
   * @public
   */
  domainNameArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainNameResponse {
  /**
   * The configuration for the `DomainName`.
   *
   * @public
   */
  domainNameConfig?: DomainNameConfig | undefined;
}

/**
 * The `LambdaConflictHandlerConfig` object when configuring `LAMBDA` as the Conflict Handler.
 *
 * @public
 */
export interface LambdaConflictHandlerConfig {
  /**
   * The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.
   *
   * @public
   */
  lambdaConflictHandlerArn?: string | undefined;
}

/**
 * Describes a Sync configuration for a resolver.
 *
 * Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
 *
 * @public
 */
export interface SyncConfig {
  /**
   * The Conflict Resolution strategy to perform in the event of a conflict.
   *
   * - **OPTIMISTIC_CONCURRENCY**: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.
   * - **AUTOMERGE**: Resolve conflicts with the Automerge conflict resolution strategy.
   * - **LAMBDA**: Resolve conflicts with an Lambda function supplied in the `LambdaConflictHandlerConfig`.
   *
   * @public
   */
  conflictHandler?: ConflictHandlerType | undefined;

  /**
   * The Conflict Detection strategy to use.
   *
   * - **VERSION**: Detect conflicts based on object versions for this resolver.
   * - **NONE**: Do not detect conflicts when invoking this resolver.
   *
   * @public
   */
  conflictDetection?: ConflictDetectionType | undefined;

  /**
   * The `LambdaConflictHandlerConfig` when configuring `LAMBDA` as the Conflict Handler.
   *
   * @public
   */
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig | undefined;
}

/**
 * @public
 */
export interface CreateFunctionRequest {
  /**
   * The GraphQL API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The `Function` name. The function name does not have to be unique.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The `Function` description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The `Function` `DataSource` name.
   *
   * @public
   */
  dataSourceName: string | undefined;

  /**
   * The `Function` request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
   *
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * The `Function` response mapping template.
   *
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * The `version` of the request mapping template. Currently, the supported value is 2018-05-29. Note that when using VTL and mapping templates, the `functionVersion` is required.
   *
   * @public
   */
  functionVersion?: string | undefined;

  /**
   * Describes a Sync configuration for a resolver.
   *
   * Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
   *
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * The maximum batching size for a resolver.
   *
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
   *
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * The `function` code that contains the request and response functions. When code is used, the `runtime` is required. The `runtime` value must be `APPSYNC_JS`.
   *
   * @public
   */
  code?: string | undefined;
}

/**
 * A function is a reusable entity. You can use multiple functions to compose the resolver logic.
 *
 * @public
 */
export interface FunctionConfiguration {
  /**
   * A unique ID representing the `Function` object.
   *
   * @public
   */
  functionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the `Function` object.
   *
   * @public
   */
  functionArn?: string | undefined;

  /**
   * The name of the `Function` object.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The `Function` description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the `DataSource`.
   *
   * @public
   */
  dataSourceName?: string | undefined;

  /**
   * The `Function` request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
   *
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * The `Function` response mapping template.
   *
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.
   *
   * @public
   */
  functionVersion?: string | undefined;

  /**
   * Describes a Sync configuration for a resolver.
   *
   * Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
   *
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * The maximum batching size for a resolver.
   *
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
   *
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * The `function` code that contains the request and response functions. When code is used, the `runtime` is required. The `runtime` value must be `APPSYNC_JS`.
   *
   * @public
   */
  code?: string | undefined;
}

/**
 * @public
 */
export interface CreateFunctionResponse {
  /**
   * The `Function` object.
   *
   * @public
   */
  functionConfiguration?: FunctionConfiguration | undefined;
}

/**
 * Enables and controls the enhanced metrics feature. Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.
 *
 * Enhanced metrics can be configured at the resolver, data source, and operation levels. `EnhancedMetricsConfig` contains three required parameters, each controlling one of these categories:
 *
 * 1. `resolverLevelMetricsBehavior`: Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:
 *
 *    - GraphQL errors: The number of GraphQL errors that occurred.
 *    - Requests: The number of invocations that occurred during a request.
 *    - Latency: The time to complete a resolver invocation.
 *    - Cache hits: The number of cache hits during a request.
 *    - Cache misses: The number of cache misses during a request.
 *
 *    These metrics can be emitted to CloudWatch per resolver or for all resolvers in the request. Metrics will be recorded by API ID and resolver name. `resolverLevelMetricsBehavior` accepts one of these values at a time:
 *
 *    - `FULL_REQUEST_RESOLVER_METRICS`: Records and emits metric data for all resolvers in the request.
 *    - `PER_RESOLVER_METRICS`: Records and emits metric data for resolvers that have the `metricsConfig` value set to `ENABLED`.
 * 2. `dataSourceLevelMetricsBehavior`: Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:
 *
 *    - Requests: The number of invocations that occured during a request.
 *    - Latency: The time to complete a data source invocation.
 *    - Errors: The number of errors that occurred during a data source invocation.
 *
 *    These metrics can be emitted to CloudWatch per data source or for all data sources in the request. Metrics will be recorded by API ID and data source name. `dataSourceLevelMetricsBehavior` accepts one of these values at a time:
 *
 *    - `FULL_REQUEST_DATA_SOURCE_METRICS`: Records and emits metric data for all data sources in the request.
 *    - `PER_DATA_SOURCE_METRICS`: Records and emits metric data for data sources that have the `metricsConfig` value set to `ENABLED`.
 * 3. `operationLevelMetricsConfig`: Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:
 *
 *    - Requests: The number of times a specified GraphQL operation was called.
 *    - GraphQL errors: The number of GraphQL errors that occurred during a specified GraphQL operation.
 *
 *    Metrics will be recorded by API ID and operation name. You can set the value to `ENABLED` or `DISABLED`.
 *
 * @public
 */
export interface EnhancedMetricsConfig {
  /**
   * Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:
   *
   * - GraphQL errors: The number of GraphQL errors that occurred.
   * - Requests: The number of invocations that occurred during a request.
   * - Latency: The time to complete a resolver invocation.
   * - Cache hits: The number of cache hits during a request.
   * - Cache misses: The number of cache misses during a request.
   *
   * These metrics can be emitted to CloudWatch per resolver or for all resolvers in the request. Metrics will be recorded by API ID and resolver name. `resolverLevelMetricsBehavior` accepts one of these values at a time:
   *
   * - `FULL_REQUEST_RESOLVER_METRICS`: Records and emits metric data for all resolvers in the request.
   * - `PER_RESOLVER_METRICS`: Records and emits metric data for resolvers that have the `metricsConfig` value set to `ENABLED`.
   *
   * @public
   */
  resolverLevelMetricsBehavior: ResolverLevelMetricsBehavior | undefined;

  /**
   * Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:
   *
   * - Requests: The number of invocations that occured during a request.
   * - Latency: The time to complete a data source invocation.
   * - Errors: The number of errors that occurred during a data source invocation.
   *
   * These metrics can be emitted to CloudWatch per data source or for all data sources in the request. Metrics will be recorded by API ID and data source name. `dataSourceLevelMetricsBehavior` accepts one of these values at a time:
   *
   * - `FULL_REQUEST_DATA_SOURCE_METRICS`: Records and emits metric data for all data sources in the request.
   * - `PER_DATA_SOURCE_METRICS`: Records and emits metric data for data sources that have the `metricsConfig` value set to `ENABLED`.
   *
   * @public
   */
  dataSourceLevelMetricsBehavior: DataSourceLevelMetricsBehavior | undefined;

  /**
   * Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:
   *
   * - Requests: The number of times a specified GraphQL operation was called.
   * - GraphQL errors: The number of GraphQL errors that occurred during a specified GraphQL operation.
   *
   * Metrics will be recorded by API ID and operation name. You can set the value to `ENABLED` or `DISABLED`.
   *
   * @public
   */
  operationLevelMetricsConfig: OperationLevelMetricsConfig | undefined;
}

/**
 * The Amazon CloudWatch Logs configuration.
 *
 * @public
 */
export interface LogConfig {
  /**
   * The field logging level. Values can be NONE, ERROR, or ALL.
   *
   * - **NONE**: No field-level logs are captured.
   * - **ERROR**: Logs the following information only for the fields that are in error:
   *
   *   - The error section in the server response.
   *   - Field-level errors.
   *   - The generated request/response functions that got resolved for error fields.
   * - **ALL**: The following information is logged for all fields in the query:
   *
   *   - Field-level tracing information.
   *   - The generated request/response functions that got resolved for each field.
   *
   * @public
   */
  fieldLogLevel: FieldLogLevel | undefined;

  /**
   * The service role that AppSync assumes to publish to CloudWatch logs in your account.
   *
   * @public
   */
  cloudWatchLogsRoleArn: string | undefined;

  /**
   * Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.
   *
   * @public
   */
  excludeVerboseContent?: boolean | undefined;
}

/**
 * Describes an Amazon Cognito user pool configuration.
 *
 * @public
 */
export interface UserPoolConfig {
  /**
   * The user pool ID.
   *
   * @public
   */
  userPoolId: string | undefined;

  /**
   * The Amazon Web Services Region in which the user pool was created.
   *
   * @public
   */
  awsRegion: string | undefined;

  /**
   * The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.
   *
   * @public
   */
  defaultAction: DefaultAction | undefined;

  /**
   * A regular expression for validating the incoming Amazon Cognito user pool app client ID. If this value isn't set, no filtering is applied.
   *
   * @public
   */
  appIdClientRegex?: string | undefined;
}

/**
 * @public
 */
export interface CreateGraphqlApiRequest {
  /**
   * A user-supplied name for the `GraphqlApi`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon CloudWatch Logs configuration.
   *
   * @public
   */
  logConfig?: LogConfig | undefined;

  /**
   * The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
   *
   * @public
   */
  authenticationType: AuthenticationType | undefined;

  /**
   * The Amazon Cognito user pool configuration.
   *
   * @public
   */
  userPoolConfig?: UserPoolConfig | undefined;

  /**
   * The OIDC configuration.
   *
   * @public
   */
  openIDConnectConfig?: OpenIDConnectConfig | undefined;

  /**
   * A `TagMap` object.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A list of additional authentication providers for the `GraphqlApi` API.
   *
   * @public
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined;

  /**
   * A flag indicating whether to use X-Ray tracing for the `GraphqlApi`.
   *
   * @public
   */
  xrayEnabled?: boolean | undefined;

  /**
   * Configuration for Lambda function authorization.
   *
   * @public
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig | undefined;

  /**
   * The value that indicates whether the GraphQL API is a standard API (`GRAPHQL`) or merged API (`MERGED`).
   *
   * @public
   */
  apiType?: GraphQLApiType | undefined;

  /**
   * The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the `AUTO_MERGE` to update the merged API endpoint with the source API changes automatically.
   *
   * @public
   */
  mergedApiExecutionRoleArn?: string | undefined;

  /**
   * Sets the value of the GraphQL API to public (`GLOBAL`) or private (`PRIVATE`). If no value is provided, the visibility will be set to `GLOBAL` by default. This value cannot be changed once the API has been created.
   *
   * @public
   */
  visibility?: GraphQLApiVisibility | undefined;

  /**
   * The owner contact information for an API resource.
   *
   * This field accepts any string input with a length of 0 - 256 characters.
   *
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * Sets the value of the GraphQL API to enable (`ENABLED`) or disable (`DISABLED`) introspection. If no value is provided, the introspection configuration will be set to `ENABLED` by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.
   *
   * For more information about introspection, see [GraphQL introspection](https://graphql.org/learn/introspection/).
   *
   * @public
   */
  introspectionConfig?: GraphQLApiIntrospectionConfig | undefined;

  /**
   * The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query. The default value is `0` (or unspecified), which indicates there's no depth limit. If you set a limit, it can be between `1` and `75` nested levels. This field will produce a limit error if the operation falls out of bounds.
   *
   * Note that fields can still be set to nullable or non-nullable. If a non-nullable field produces an error, the error will be thrown upwards to the first nullable field available.
   *
   * @public
   */
  queryDepthLimit?: number | undefined;

  /**
   * The maximum number of resolvers that can be invoked in a single request. The default value is `0` (or unspecified), which will set the limit to `10000`. When specified, the limit value can be between `1` and `10000`. This field will produce a limit error if the operation falls out of bounds.
   *
   * @public
   */
  resolverCountLimit?: number | undefined;

  /**
   * The `enhancedMetricsConfig` object.
   *
   * @public
   */
  enhancedMetricsConfig?: EnhancedMetricsConfig | undefined;
}

/**
 * Describes a GraphQL API.
 *
 * @public
 */
export interface GraphqlApi {
  /**
   * The API name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The API ID.
   *
   * @public
   */
  apiId?: string | undefined;

  /**
   * The authentication type.
   *
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * The Amazon CloudWatch Logs configuration.
   *
   * @public
   */
  logConfig?: LogConfig | undefined;

  /**
   * The Amazon Cognito user pool configuration.
   *
   * @public
   */
  userPoolConfig?: UserPoolConfig | undefined;

  /**
   * The OpenID Connect configuration.
   *
   * @public
   */
  openIDConnectConfig?: OpenIDConnectConfig | undefined;

  /**
   * The Amazon Resource Name (ARN).
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The URIs.
   *
   * @public
   */
  uris?: Record<string, string> | undefined;

  /**
   * The tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A list of additional authentication providers for the `GraphqlApi` API.
   *
   * @public
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined;

  /**
   * A flag indicating whether to use X-Ray tracing for this `GraphqlApi`.
   *
   * @public
   */
  xrayEnabled?: boolean | undefined;

  /**
   * The ARN of the WAF access control list (ACL) associated with this `GraphqlApi`, if one exists.
   *
   * @public
   */
  wafWebAclArn?: string | undefined;

  /**
   * Configuration for Lambda function authorization.
   *
   * @public
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig | undefined;

  /**
   * The DNS records for the API.
   *
   * @public
   */
  dns?: Record<string, string> | undefined;

  /**
   * Sets the value of the GraphQL API to public (`GLOBAL`) or private (`PRIVATE`). If no value is provided, the visibility will be set to `GLOBAL` by default. This value cannot be changed once the API has been created.
   *
   * @public
   */
  visibility?: GraphQLApiVisibility | undefined;

  /**
   * The value that indicates whether the GraphQL API is a standard API (`GRAPHQL`) or merged API (`MERGED`).
   *
   * @public
   */
  apiType?: GraphQLApiType | undefined;

  /**
   * The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the `AUTO_MERGE` to update the merged API endpoint with the source API changes automatically.
   *
   * @public
   */
  mergedApiExecutionRoleArn?: string | undefined;

  /**
   * The account owner of the GraphQL API.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The owner contact information for an API resource.
   *
   * This field accepts any string input with a length of 0 - 256 characters.
   *
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * Sets the value of the GraphQL API to enable (`ENABLED`) or disable (`DISABLED`) introspection. If no value is provided, the introspection configuration will be set to `ENABLED` by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.
   *
   * For more information about introspection, see [GraphQL introspection](https://graphql.org/learn/introspection/).
   *
   * @public
   */
  introspectionConfig?: GraphQLApiIntrospectionConfig | undefined;

  /**
   * The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query. The default value is `0` (or unspecified), which indicates there's no depth limit. If you set a limit, it can be between `1` and `75` nested levels. This field will produce a limit error if the operation falls out of bounds.
   *
   * Note that fields can still be set to nullable or non-nullable. If a non-nullable field produces an error, the error will be thrown upwards to the first nullable field available.
   *
   * @public
   */
  queryDepthLimit?: number | undefined;

  /**
   * The maximum number of resolvers that can be invoked in a single request. The default value is `0` (or unspecified), which will set the limit to `10000`. When specified, the limit value can be between `1` and `10000`. This field will produce a limit error if the operation falls out of bounds.
   *
   * @public
   */
  resolverCountLimit?: number | undefined;

  /**
   * The `enhancedMetricsConfig` object.
   *
   * @public
   */
  enhancedMetricsConfig?: EnhancedMetricsConfig | undefined;
}

/**
 * @public
 */
export interface CreateGraphqlApiResponse {
  /**
   * The `GraphqlApi`.
   *
   * @public
   */
  graphqlApi?: GraphqlApi | undefined;
}

/**
 * The caching configuration for a resolver that has caching activated.
 *
 * @public
 */
export interface CachingConfig {
  /**
   * The TTL in seconds for a resolver that has caching activated.
   *
   * Valid values are 1–3,600 seconds.
   *
   * @public
   */
  ttl: number | undefined;

  /**
   * The caching keys for a resolver that has caching activated.
   *
   * Valid values are entries from the `$context.arguments`, `$context.source`, and `$context.identity` maps.
   *
   * @public
   */
  cachingKeys?: string[] | undefined;
}

/**
 * The pipeline configuration for a resolver of kind `PIPELINE`.
 *
 * @public
 */
export interface PipelineConfig {
  /**
   * A list of `Function` objects.
   *
   * @public
   */
  functions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateResolverRequest {
  /**
   * The ID for the GraphQL API for which the resolver is being created.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The name of the `Type`.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The name of the field to attach the resolver to.
   *
   * @public
   */
  fieldName: string | undefined;

  /**
   * The name of the data source for which the resolver is being created.
   *
   * @public
   */
  dataSourceName?: string | undefined;

  /**
   * The mapping template to use for requests.
   *
   * A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).
   *
   * VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL request and response mapping templates are required.
   *
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * The mapping template to use for responses from the data source.
   *
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * The resolver type.
   *
   * - **UNIT**: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.
   * - **PIPELINE**: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of `Function` objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.
   *
   * @public
   */
  kind?: ResolverKind | undefined;

  /**
   * The `PipelineConfig`.
   *
   * @public
   */
  pipelineConfig?: PipelineConfig | undefined;

  /**
   * The `SyncConfig` for a resolver attached to a versioned data source.
   *
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * The caching configuration for the resolver.
   *
   * @public
   */
  cachingConfig?: CachingConfig | undefined;

  /**
   * The maximum batching size for a resolver.
   *
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
   *
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * The `resolver` code that contains the request and response functions. When code is used, the `runtime` is required. The `runtime` value must be `APPSYNC_JS`.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * Enables or disables enhanced resolver metrics for specified resolvers. Note that `metricsConfig` won't be used unless the `resolverLevelMetricsBehavior` value is set to `PER_RESOLVER_METRICS`. If the `resolverLevelMetricsBehavior` is set to `FULL_REQUEST_RESOLVER_METRICS` instead, `metricsConfig` will be ignored. However, you can still set its value.
   *
   * `metricsConfig` can be `ENABLED` or `DISABLED`.
   *
   * @public
   */
  metricsConfig?: ResolverLevelMetricsConfig | undefined;
}

/**
 * Describes a resolver.
 *
 * @public
 */
export interface Resolver {
  /**
   * The resolver type name.
   *
   * @public
   */
  typeName?: string | undefined;

  /**
   * The resolver field name.
   *
   * @public
   */
  fieldName?: string | undefined;

  /**
   * The resolver data source name.
   *
   * @public
   */
  dataSourceName?: string | undefined;

  /**
   * The resolver Amazon Resource Name (ARN).
   *
   * @public
   */
  resolverArn?: string | undefined;

  /**
   * The request mapping template.
   *
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * The response mapping template.
   *
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * The resolver type.
   *
   * - **UNIT**: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.
   * - **PIPELINE**: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of `Function` objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.
   *
   * @public
   */
  kind?: ResolverKind | undefined;

  /**
   * The `PipelineConfig`.
   *
   * @public
   */
  pipelineConfig?: PipelineConfig | undefined;

  /**
   * The `SyncConfig` for a resolver attached to a versioned data source.
   *
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * The caching configuration for the resolver.
   *
   * @public
   */
  cachingConfig?: CachingConfig | undefined;

  /**
   * The maximum batching size for a resolver.
   *
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
   *
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * The `resolver` code that contains the request and response functions. When code is used, the `runtime` is required. The `runtime` value must be `APPSYNC_JS`.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * Enables or disables enhanced resolver metrics for specified resolvers. Note that `metricsConfig` won't be used unless the `resolverLevelMetricsBehavior` value is set to `PER_RESOLVER_METRICS`. If the `resolverLevelMetricsBehavior` is set to `FULL_REQUEST_RESOLVER_METRICS` instead, `metricsConfig` will be ignored. However, you can still set its value.
   *
   * `metricsConfig` can be `ENABLED` or `DISABLED`.
   *
   * @public
   */
  metricsConfig?: ResolverLevelMetricsConfig | undefined;
}

/**
 * @public
 */
export interface CreateResolverResponse {
  /**
   * The `Resolver` object.
   *
   * @public
   */
  resolver?: Resolver | undefined;
}

/**
 * @public
 */
export interface CreateTypeRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The type definition, in GraphQL Schema Definition Language (SDL) format.
   *
   * For more information, see the [GraphQL SDL documentation](http://graphql.org/learn/schema/).
   *
   * @public
   */
  definition: string | undefined;

  /**
   * The type format: SDL or JSON.
   *
   * @public
   */
  format: TypeDefinitionFormat | undefined;
}

/**
 * Describes a type.
 *
 * @public
 */
export interface Type {
  /**
   * The type name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type Amazon Resource Name (ARN).
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The type definition.
   *
   * @public
   */
  definition?: string | undefined;

  /**
   * The type format: SDL or JSON.
   *
   * @public
   */
  format?: TypeDefinitionFormat | undefined;
}

/**
 * @public
 */
export interface CreateTypeResponse {
  /**
   * The `Type` object.
   *
   * @public
   */
  type?: Type | undefined;
}

/**
 * @public
 */
export interface DeleteApiRequest {
  /**
   * The `Api` ID.
   *
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiResponse {}

/**
 * Represents the input of a `DeleteApiCache` operation.
 *
 * @public
 */
export interface DeleteApiCacheRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;
}

/**
 * Represents the output of a `DeleteApiCache` operation.
 *
 * @public
 */
export interface DeleteApiCacheResponse {}

/**
 * @public
 */
export interface DeleteApiKeyRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The ID for the API key.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiKeyResponse {}

/**
 * @public
 */
export interface DeleteChannelNamespaceRequest {
  /**
   * The ID of the `Api` associated with the `ChannelNamespace`.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The name of the `ChannelNamespace`.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelNamespaceResponse {}

/**
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceResponse {}

/**
 * @public
 */
export interface DeleteDomainNameRequest {
  /**
   * The domain name.
   *
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainNameResponse {}

/**
 * @public
 */
export interface DeleteFunctionRequest {
  /**
   * The GraphQL API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The `Function` ID.
   *
   * @public
   */
  functionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionResponse {}

/**
 * @public
 */
export interface DeleteGraphqlApiRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGraphqlApiResponse {}

/**
 * @public
 */
export interface DeleteResolverRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The name of the resolver type.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The resolver field name.
   *
   * @public
   */
  fieldName: string | undefined;
}

/**
 * @public
 */
export interface DeleteResolverResponse {}

/**
 * @public
 */
export interface DeleteTypeRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The type name.
   *
   * @public
   */
  typeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTypeResponse {}

/**
 * @public
 */
export interface DisassociateApiRequest {
  /**
   * The domain name.
   *
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateApiResponse {}

/**
 * @public
 */
export interface DisassociateMergedGraphqlApiRequest {
  /**
   * The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.
   *
   * @public
   */
  sourceApiIdentifier: string | undefined;

  /**
   * The ID generated by the AppSync service for the source API association.
   *
   * @public
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMergedGraphqlApiResponse {
  /**
   * The state of the source API association.
   *
   * @public
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceGraphqlApiRequest {
  /**
   * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
   *
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * The ID generated by the AppSync service for the source API association.
   *
   * @public
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceGraphqlApiResponse {
  /**
   * The state of the source API association.
   *
   * @public
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus | undefined;
}

/**
 * @public
 */
export interface EvaluateCodeRequest {
  /**
   * The runtime to be used when evaluating the code. Currently, only the `APPSYNC_JS` runtime is supported.
   *
   * @public
   */
  runtime: AppSyncRuntime | undefined;

  /**
   * The code definition to be evaluated. Note that `code` and `runtime` are both required for this action. The `runtime` value must be `APPSYNC_JS`.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The map that holds all of the contextual information for your resolver invocation. A `context` is required for this action.
   *
   * @public
   */
  context: string | undefined;

  /**
   * The function within the code to be evaluated. If provided, the valid values are `request` and `response`.
   *
   * @public
   */
  function?: string | undefined;
}

/**
 * Contains the list of errors from a code evaluation response.
 *
 * @public
 */
export interface EvaluateCodeErrorDetail {
  /**
   * The error payload.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Contains the list of `CodeError` objects.
   *
   * @public
   */
  codeErrors?: CodeError[] | undefined;
}

/**
 * @public
 */
export interface EvaluateCodeResponse {
  /**
   * The result of the evaluation operation.
   *
   * @public
   */
  evaluationResult?: string | undefined;

  /**
   * Contains the payload of the response error.
   *
   * @public
   */
  error?: EvaluateCodeErrorDetail | undefined;

  /**
   * A list of logs that were generated by calls to `util.log.info` and `util.log.error` in the evaluated code.
   *
   * @public
   */
  logs?: string[] | undefined;

  /**
   * An object available inside each resolver and function handler. A single `stash` object lives through a single resolver run. Therefore, you can use the stash to pass arbitrary data across request and response handlers and across functions in a pipeline resolver.
   *
   * @public
   */
  stash?: string | undefined;

  /**
   * The list of runtime errors that are added to the GraphQL operation response.
   *
   * @public
   */
  outErrors?: string | undefined;
}

/**
 * @public
 */
export interface EvaluateMappingTemplateRequest {
  /**
   * The mapping template; this can be a request or response template. A `template` is required for this action.
   *
   * @public
   */
  template: string | undefined;

  /**
   * The map that holds all of the contextual information for your resolver invocation. A `context` is required for this action.
   *
   * @public
   */
  context: string | undefined;
}

/**
 * Contains the list of errors generated. When using JavaScript, this will apply to the request or response function evaluation.
 *
 * @public
 */
export interface ErrorDetail {
  /**
   * The error payload.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface EvaluateMappingTemplateResponse {
  /**
   * The mapping template; this can be a request or response template.
   *
   * @public
   */
  evaluationResult?: string | undefined;

  /**
   * The `ErrorDetail` object.
   *
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * A list of logs that were generated by calls to `util.log.info` and `util.log.error` in the evaluated code.
   *
   * @public
   */
  logs?: string[] | undefined;

  /**
   * An object available inside each resolver and function handler. A single `stash` object lives through a single resolver run. Therefore, you can use the stash to pass arbitrary data across request and response handlers and across functions in a pipeline resolver.
   *
   * @public
   */
  stash?: string | undefined;

  /**
   * The list of runtime errors that are added to the GraphQL operation response.
   *
   * @public
   */
  outErrors?: string | undefined;
}

/**
 * Represents the input of a `FlushApiCache` operation.
 *
 * @public
 */
export interface FlushApiCacheRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;
}

/**
 * Represents the output of a `FlushApiCache` operation.
 *
 * @public
 */
export interface FlushApiCacheResponse {}

/**
 * @public
 */
export interface GetApiRequest {
  /**
   * The `Api` ID.
   *
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface GetApiResponse {
  /**
   * The `Api` object.
   *
   * @public
   */
  api?: Api | undefined;
}

/**
 * @public
 */
export interface GetApiAssociationRequest {
  /**
   * The domain name.
   *
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface GetApiAssociationResponse {
  /**
   * The `ApiAssociation` object.
   *
   * @public
   */
  apiAssociation?: ApiAssociation | undefined;
}

/**
 * Represents the input of a `GetApiCache` operation.
 *
 * @public
 */
export interface GetApiCacheRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;
}

/**
 * Represents the output of a `GetApiCache` operation.
 *
 * @public
 */
export interface GetApiCacheResponse {
  /**
   * The `ApiCache` object.
   *
   * @public
   */
  apiCache?: ApiCache | undefined;
}

/**
 * @public
 */
export interface GetChannelNamespaceRequest {
  /**
   * The `Api` ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The name of the `ChannelNamespace`.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetChannelNamespaceResponse {
  /**
   * The `ChannelNamespace` object.
   *
   * @public
   */
  channelNamespace?: ChannelNamespace | undefined;
}

/**
 * @public
 */
export interface GetDataSourceRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceResponse {
  /**
   * The `DataSource` object.
   *
   * @public
   */
  dataSource?: DataSource | undefined;
}

/**
 * @public
 */
export interface GetDataSourceIntrospectionRequest {
  /**
   * The introspection ID. Each introspection contains a unique ID that can be used to reference the instrospection record.
   *
   * @public
   */
  introspectionId: string | undefined;

  /**
   * A boolean flag that determines whether SDL should be generated for introspected types. If set to `true`, each model will contain an `sdl` property that contains the SDL for that type. The SDL only contains the type data and no additional metadata or directives.
   *
   * @public
   */
  includeModelsSDL?: boolean | undefined;

  /**
   * Determines the number of types to be returned in a single response before paginating. This value is typically taken from `nextToken` value from the previous response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of introspected types that will be returned in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The index that was retrieved from the introspected data.
 *
 * @public
 */
export interface DataSourceIntrospectionModelIndex {
  /**
   * The name of the index.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The fields of the index.
   *
   * @public
   */
  fields?: string[] | undefined;
}

/**
 * @public
 */
export interface GetDomainNameRequest {
  /**
   * The domain name.
   *
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface GetDomainNameResponse {
  /**
   * The configuration for the `DomainName`.
   *
   * @public
   */
  domainNameConfig?: DomainNameConfig | undefined;
}

/**
 * @public
 */
export interface GetFunctionRequest {
  /**
   * The GraphQL API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The `Function` ID.
   *
   * @public
   */
  functionId: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionResponse {
  /**
   * The `Function` object.
   *
   * @public
   */
  functionConfiguration?: FunctionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetGraphqlApiRequest {
  /**
   * The API ID for the GraphQL API.
   *
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface GetGraphqlApiResponse {
  /**
   * The `GraphqlApi` object.
   *
   * @public
   */
  graphqlApi?: GraphqlApi | undefined;
}

/**
 * @public
 */
export interface GetGraphqlApiEnvironmentVariablesRequest {
  /**
   * The ID of the API from which the environmental variable list will be retrieved.
   *
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface GetGraphqlApiEnvironmentVariablesResponse {
  /**
   * The payload containing each environmental variable in the `"key" : "value"` format.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetIntrospectionSchemaRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The schema format: SDL or JSON.
   *
   * @public
   */
  format: OutputType | undefined;

  /**
   * A flag that specifies whether the schema introspection should contain directives.
   *
   * @public
   */
  includeDirectives?: boolean | undefined;
}

/**
 * @public
 */
export interface GetIntrospectionSchemaResponse {
  /**
   * The schema, in GraphQL Schema Definition Language (SDL) format.
   *
   * For more information, see the [GraphQL SDL documentation](http://graphql.org/learn/schema/).
   *
   * @public
   */
  schema?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetResolverRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The resolver type name.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The resolver field name.
   *
   * @public
   */
  fieldName: string | undefined;
}

/**
 * @public
 */
export interface GetResolverResponse {
  /**
   * The `Resolver` object.
   *
   * @public
   */
  resolver?: Resolver | undefined;
}

/**
 * @public
 */
export interface GetSchemaCreationStatusRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaCreationStatusResponse {
  /**
   * The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When the schema is in the ACTIVE state, you can add data.
   *
   * @public
   */
  status?: SchemaStatus | undefined;

  /**
   * Detailed information about the status of the schema creation operation.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * @public
 */
export interface GetSourceApiAssociationRequest {
  /**
   * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
   *
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * The ID generated by the AppSync service for the source API association.
   *
   * @public
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface GetSourceApiAssociationResponse {
  /**
   * The `SourceApiAssociation` object data.
   *
   * @public
   */
  sourceApiAssociation?: SourceApiAssociation | undefined;
}

/**
 * @public
 */
export interface GetTypeRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The type name.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The type format: SDL or JSON.
   *
   * @public
   */
  format: TypeDefinitionFormat | undefined;
}

/**
 * @public
 */
export interface GetTypeResponse {
  /**
   * The `Type` object.
   *
   * @public
   */
  type?: Type | undefined;
}

/**
 * @public
 */
export interface ListApiKeysRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApiKeysResponse {
  /**
   * The `ApiKey` objects.
   *
   * @public
   */
  apiKeys?: ApiKey[] | undefined;

  /**
   * An identifier to pass in the next request to this operation to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApisRequest {
  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApisResponse {
  /**
   * The `Api` objects.
   *
   * @public
   */
  apis?: Api[] | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelNamespacesRequest {
  /**
   * The `Api` ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListChannelNamespacesResponse {
  /**
   * The `ChannelNamespace` objects.
   *
   * @public
   */
  channelNamespaces?: ChannelNamespace[] | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * The `DataSource` objects.
   *
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * An identifier to pass in the next request to this operation to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainNamesRequest {
  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDomainNamesResponse {
  /**
   * Lists configurations for multiple domain names.
   *
   * @public
   */
  domainNameConfigs?: DomainNameConfig[] | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionsRequest {
  /**
   * The GraphQL API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFunctionsResponse {
  /**
   * A list of `Function` objects.
   *
   * @public
   */
  functions?: FunctionConfiguration[] | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGraphqlApisRequest {
  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The value that indicates whether the GraphQL API is a standard API (`GRAPHQL`) or merged API (`MERGED`).
   *
   * @public
   */
  apiType?: GraphQLApiType | undefined;

  /**
   * The account owner of the GraphQL API.
   *
   * @public
   */
  owner?: Ownership | undefined;
}

/**
 * @public
 */
export interface ListGraphqlApisResponse {
  /**
   * The `GraphqlApi` objects.
   *
   * @public
   */
  graphqlApis?: GraphqlApi[] | undefined;

  /**
   * An identifier to pass in the next request to this operation to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResolversRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The type name.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListResolversResponse {
  /**
   * The `Resolver` objects.
   *
   * @public
   */
  resolvers?: Resolver[] | undefined;

  /**
   * An identifier to pass in the next request to this operation to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResolversByFunctionRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The function ID.
   *
   * @public
   */
  functionId: string | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListResolversByFunctionResponse {
  /**
   * The list of resolvers.
   *
   * @public
   */
  resolvers?: Resolver[] | undefined;

  /**
   * An identifier that you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceApiAssociationsRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes the ARNs and IDs of associations, Merged APIs, and source APIs.
 *
 * @public
 */
export interface SourceApiAssociationSummary {
  /**
   * The ID generated by the AppSync service for the source API association.
   *
   * @public
   */
  associationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source API association.
   *
   * @public
   */
  associationArn?: string | undefined;

  /**
   * The ID of the AppSync source API.
   *
   * @public
   */
  sourceApiId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AppSync Source API.
   *
   * @public
   */
  sourceApiArn?: string | undefined;

  /**
   * The ID of the AppSync Merged API.
   *
   * @public
   */
  mergedApiId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AppSync Merged API.
   *
   * @public
   */
  mergedApiArn?: string | undefined;

  /**
   * The description field.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceApiAssociationsResponse {
  /**
   * The `SourceApiAssociationSummary` object data.
   *
   * @public
   */
  sourceApiAssociationSummaries?: SourceApiAssociationSummary[] | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
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
   * The `GraphqlApi` Amazon Resource Name (ARN).
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
   * A `TagMap` object.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTypesRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The type format: SDL or JSON.
   *
   * @public
   */
  format: TypeDefinitionFormat | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTypesResponse {
  /**
   * The `Type` objects.
   *
   * @public
   */
  types?: Type[] | undefined;

  /**
   * An identifier to pass in the next request to this operation to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypesByAssociationRequest {
  /**
   * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
   *
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * The ID generated by the AppSync service for the source API association.
   *
   * @public
   */
  associationId: string | undefined;

  /**
   * The format type.
   *
   * @public
   */
  format: TypeDefinitionFormat | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that you want the request to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTypesByAssociationResponse {
  /**
   * The `Type` objects.
   *
   * @public
   */
  types?: Type[] | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutGraphqlApiEnvironmentVariablesRequest {
  /**
   * The ID of the API to which the environmental variable list will be written.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The list of environmental variables to add to the API.
   *
   * When creating an environmental variable key-value pair, it must follow the additional constraints below:
   *
   * - Keys must begin with a letter.
   * - Keys must be at least two characters long.
   * - Keys can only contain letters, numbers, and the underscore character (_).
   * - Values can be up to 512 characters long.
   * - You can configure up to 50 key-value pairs in a GraphQL API.
   *
   * You can create a list of environmental variables by adding it to the `environmentVariables` payload as a list in the format `\{"key1":"value1","key2":"value2", …\}`. Note that each call of the `PutGraphqlApiEnvironmentVariables` action will result in the overwriting of the existing environmental variable list of that API. This means the existing environmental variables will be lost. To avoid this, you must include all existing and new environmental variables in the list each time you call this action.
   *
   * @public
   */
  environmentVariables: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutGraphqlApiEnvironmentVariablesResponse {
  /**
   * The payload containing each environmental variable in the `"key" : "value"` format.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;
}

/**
 * Contains the metadata required to introspect the RDS cluster.
 *
 * @public
 */
export interface RdsDataApiConfig {
  /**
   * The resource ARN of the RDS cluster.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The secret's ARN that was obtained from Secrets Manager. A secret consists of secret information, the secret value, plus metadata about the secret. A secret value can be a string or binary. It typically includes the ARN, secret name and description, policies, tags, encryption key from the Key Management Service, and key rotation data.
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The name of the database in the cluster.
   *
   * @public
   */
  databaseName: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceIntrospectionRequest {
  /**
   * The `rdsDataApiConfig` object data.
   *
   * @public
   */
  rdsDataApiConfig?: RdsDataApiConfig | undefined;
}

/**
 * @public
 */
export interface StartDataSourceIntrospectionResponse {
  /**
   * The introspection ID. Each introspection contains a unique ID that can be used to reference the instrospection record.
   *
   * @public
   */
  introspectionId?: string | undefined;

  /**
   * The status of the introspection during creation. By default, when a new instrospection has been created, the status will be set to `PROCESSING`. Once the operation has been completed, the status will change to `SUCCESS` or `FAILED` depending on how the data was parsed. A `FAILED` operation will return an error and its details as an `introspectionStatusDetail`.
   *
   * @public
   */
  introspectionStatus?: DataSourceIntrospectionStatus | undefined;

  /**
   * The error detail field. When a `FAILED` `introspectionStatus` is returned, the `introspectionStatusDetail` will also return the exact error that was generated during the operation.
   *
   * @public
   */
  introspectionStatusDetail?: string | undefined;
}

/**
 * @public
 */
export interface StartSchemaCreationRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The schema definition, in GraphQL schema language format.
   *
   * @public
   */
  definition: Uint8Array | undefined;
}

/**
 * @public
 */
export interface StartSchemaCreationResponse {
  /**
   * The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When the schema is in the ACTIVE state, you can add data.
   *
   * @public
   */
  status?: SchemaStatus | undefined;
}

/**
 * @public
 */
export interface StartSchemaMergeRequest {
  /**
   * The ID generated by the AppSync service for the source API association.
   *
   * @public
   */
  associationId: string | undefined;

  /**
   * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
   *
   * @public
   */
  mergedApiIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartSchemaMergeResponse {
  /**
   * The state of the source API association.
   *
   * @public
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The `GraphqlApi` Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A `TagMap` object.
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
export interface UntagResourceRequest {
  /**
   * The `GraphqlApi` Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of `TagKey` objects.
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
export interface UpdateApiRequest {
  /**
   * The `Api` ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The name of the Api.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The owner contact information for the `Api`.
   *
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * The new event configuration. This includes the default authorization configuration for connecting, publishing, and subscribing to an Event API.
   *
   * @public
   */
  eventConfig: EventConfig | undefined;
}

/**
 * @public
 */
export interface UpdateApiResponse {
  /**
   * The `Api` object.
   *
   * @public
   */
  api?: Api | undefined;
}

/**
 * Represents the input of a `UpdateApiCache` operation.
 *
 * @public
 */
export interface UpdateApiCacheRequest {
  /**
   * The GraphQL API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * TTL in seconds for cache entries.
   *
   * Valid values are 1–3,600 seconds.
   *
   * @public
   */
  ttl: number | undefined;

  /**
   * Caching behavior.
   *
   * - **FULL_REQUEST_CACHING**: All requests from the same user are cached. Individual resolvers are automatically cached. All API calls will try to return responses from the cache.
   * - **PER_RESOLVER_CACHING**: Individual resolvers that you specify are cached.
   * - **OPERATION_LEVEL_CACHING**: Full requests are cached together and returned without executing resolvers.
   *
   * @public
   */
  apiCachingBehavior: ApiCachingBehavior | undefined;

  /**
   * The cache instance type. Valid values are
   *
   * - `SMALL`
   * - `MEDIUM`
   * - `LARGE`
   * - `XLARGE`
   * - `LARGE_2X`
   * - `LARGE_4X`
   * - `LARGE_8X` (not available in all regions)
   * - `LARGE_12X`
   *
   * Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.
   *
   * The following legacy instance types are available, but their use is discouraged:
   *
   * - **T2_SMALL**: A t2.small instance type.
   * - **T2_MEDIUM**: A t2.medium instance type.
   * - **R4_LARGE**: A r4.large instance type.
   * - **R4_XLARGE**: A r4.xlarge instance type.
   * - **R4_2XLARGE**: A r4.2xlarge instance type.
   * - **R4_4XLARGE**: A r4.4xlarge instance type.
   * - **R4_8XLARGE**: A r4.8xlarge instance type.
   *
   * @public
   */
  type: ApiCacheType | undefined;

  /**
   * Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include:
   *
   * - NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the throughput exceeded the aggregated bandwidth limit. This is useful for diagnosing bottlenecks in a cache configuration.
   * - EngineCPUUtilization: The CPU utilization (percentage) allocated to the Redis process. This is useful for diagnosing bottlenecks in a cache configuration.
   *
   * Metrics will be recorded by API ID. You can set the value to `ENABLED` or `DISABLED`.
   *
   * @public
   */
  healthMetricsConfig?: CacheHealthMetricsConfig | undefined;
}

/**
 * Represents the output of a `UpdateApiCache` operation.
 *
 * @public
 */
export interface UpdateApiCacheResponse {
  /**
   * The `ApiCache` object.
   *
   * @public
   */
  apiCache?: ApiCache | undefined;
}

/**
 * @public
 */
export interface UpdateApiKeyRequest {
  /**
   * The ID for the GraphQL API.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The API key ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A description of the purpose of the API key.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * From the update time, the time after which the API key expires. The date is represented as seconds since the epoch. For more information, see .
   *
   * @public
   */
  expires?: number | undefined;
}

/**
 * @public
 */
export interface UpdateApiKeyResponse {
  /**
   * The API key.
   *
   * @public
   */
  apiKey?: ApiKey | undefined;
}

/**
 * @public
 */
export interface UpdateChannelNamespaceRequest {
  /**
   * The `Api` ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The name of the `ChannelNamespace`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The authorization mode to use for subscribing to messages on the channel namespace. This configuration overrides the default `Api` authorization configuration.
   *
   * @public
   */
  subscribeAuthModes?: AuthMode[] | undefined;

  /**
   * The authorization mode to use for publishing messages on the channel namespace. This configuration overrides the default `Api` authorization configuration.
   *
   * @public
   */
  publishAuthModes?: AuthMode[] | undefined;

  /**
   * The event handler functions that run custom business logic to process published events and subscribe requests.
   *
   * @public
   */
  codeHandlers?: string | undefined;

  /**
   * The configuration for the `OnPublish` and `OnSubscribe` handlers.
   *
   * @public
   */
  handlerConfigs?: HandlerConfigs | undefined;
}

/**
 * @public
 */
export interface UpdateChannelNamespaceResponse {
  /**
   * The `ChannelNamespace` object.
   *
   * @public
   */
  channelNamespace?: ChannelNamespace | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The new name for the data source.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The new description for the data source.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The new data source type.
   *
   * @public
   */
  type: DataSourceType | undefined;

  /**
   * The new service role Amazon Resource Name (ARN) for the data source.
   *
   * @public
   */
  serviceRoleArn?: string | undefined;

  /**
   * The new Amazon DynamoDB configuration.
   *
   * @public
   */
  dynamodbConfig?: DynamodbDataSourceConfig | undefined;

  /**
   * The new Lambda configuration.
   *
   * @public
   */
  lambdaConfig?: LambdaDataSourceConfig | undefined;

  /**
   * The new OpenSearch configuration.
   *
   * As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. Instead, use UpdateDataSourceRequest$openSearchServiceConfig to update an OpenSearch data source.
   *
   * @public
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig | undefined;

  /**
   * The new OpenSearch configuration.
   *
   * @public
   */
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig | undefined;

  /**
   * The new HTTP endpoint configuration.
   *
   * @public
   */
  httpConfig?: HttpDataSourceConfig | undefined;

  /**
   * The new relational database configuration.
   *
   * @public
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | undefined;

  /**
   * The new Amazon EventBridge settings.
   *
   * @public
   */
  eventBridgeConfig?: EventBridgeDataSourceConfig | undefined;

  /**
   * Enables or disables enhanced data source metrics for specified data sources. Note that `metricsConfig` won't be used unless the `dataSourceLevelMetricsBehavior` value is set to `PER_DATA_SOURCE_METRICS`. If the `dataSourceLevelMetricsBehavior` is set to `FULL_REQUEST_DATA_SOURCE_METRICS` instead, `metricsConfig` will be ignored. However, you can still set its value.
   *
   * `metricsConfig` can be `ENABLED` or `DISABLED`.
   *
   * @public
   */
  metricsConfig?: DataSourceLevelMetricsConfig | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * The updated `DataSource` object.
   *
   * @public
   */
  dataSource?: DataSource | undefined;
}

/**
 * @public
 */
export interface UpdateDomainNameRequest {
  /**
   * The domain name.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * A description of the `DomainName`.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainNameResponse {
  /**
   * The configuration for the `DomainName`.
   *
   * @public
   */
  domainNameConfig?: DomainNameConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionRequest {
  /**
   * The GraphQL API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The `Function` name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The `Function` description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The function ID.
   *
   * @public
   */
  functionId: string | undefined;

  /**
   * The `Function` `DataSource` name.
   *
   * @public
   */
  dataSourceName: string | undefined;

  /**
   * The `Function` request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
   *
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * The `Function` request mapping template.
   *
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * The `version` of the request mapping template. Currently, the supported value is 2018-05-29. Note that when using VTL and mapping templates, the `functionVersion` is required.
   *
   * @public
   */
  functionVersion?: string | undefined;

  /**
   * Describes a Sync configuration for a resolver.
   *
   * Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
   *
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * The maximum batching size for a resolver.
   *
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
   *
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * The `function` code that contains the request and response functions. When code is used, the `runtime` is required. The `runtime` value must be `APPSYNC_JS`.
   *
   * @public
   */
  code?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionResponse {
  /**
   * The `Function` object.
   *
   * @public
   */
  functionConfiguration?: FunctionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateGraphqlApiRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The new name for the `GraphqlApi` object.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon CloudWatch Logs configuration for the `GraphqlApi` object.
   *
   * @public
   */
  logConfig?: LogConfig | undefined;

  /**
   * The new authentication type for the `GraphqlApi` object.
   *
   * @public
   */
  authenticationType: AuthenticationType | undefined;

  /**
   * The new Amazon Cognito user pool configuration for the `~GraphqlApi` object.
   *
   * @public
   */
  userPoolConfig?: UserPoolConfig | undefined;

  /**
   * The OpenID Connect configuration for the `GraphqlApi` object.
   *
   * @public
   */
  openIDConnectConfig?: OpenIDConnectConfig | undefined;

  /**
   * A list of additional authentication providers for the `GraphqlApi` API.
   *
   * @public
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined;

  /**
   * A flag indicating whether to use X-Ray tracing for the `GraphqlApi`.
   *
   * @public
   */
  xrayEnabled?: boolean | undefined;

  /**
   * Configuration for Lambda function authorization.
   *
   * @public
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig | undefined;

  /**
   * The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the `AUTO_MERGE` to update the merged API endpoint with the source API changes automatically.
   *
   * @public
   */
  mergedApiExecutionRoleArn?: string | undefined;

  /**
   * The owner contact information for an API resource.
   *
   * This field accepts any string input with a length of 0 - 256 characters.
   *
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * Sets the value of the GraphQL API to enable (`ENABLED`) or disable (`DISABLED`) introspection. If no value is provided, the introspection configuration will be set to `ENABLED` by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.
   *
   * For more information about introspection, see [GraphQL introspection](https://graphql.org/learn/introspection/).
   *
   * @public
   */
  introspectionConfig?: GraphQLApiIntrospectionConfig | undefined;

  /**
   * The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query. The default value is `0` (or unspecified), which indicates there's no depth limit. If you set a limit, it can be between `1` and `75` nested levels. This field will produce a limit error if the operation falls out of bounds.
   *
   * Note that fields can still be set to nullable or non-nullable. If a non-nullable field produces an error, the error will be thrown upwards to the first nullable field available.
   *
   * @public
   */
  queryDepthLimit?: number | undefined;

  /**
   * The maximum number of resolvers that can be invoked in a single request. The default value is `0` (or unspecified), which will set the limit to `10000`. When specified, the limit value can be between `1` and `10000`. This field will produce a limit error if the operation falls out of bounds.
   *
   * @public
   */
  resolverCountLimit?: number | undefined;

  /**
   * The `enhancedMetricsConfig` object.
   *
   * @public
   */
  enhancedMetricsConfig?: EnhancedMetricsConfig | undefined;
}

/**
 * @public
 */
export interface UpdateGraphqlApiResponse {
  /**
   * The updated `GraphqlApi` object.
   *
   * @public
   */
  graphqlApi?: GraphqlApi | undefined;
}

/**
 * @public
 */
export interface UpdateResolverRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The new type name.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The new field name.
   *
   * @public
   */
  fieldName: string | undefined;

  /**
   * The new data source name.
   *
   * @public
   */
  dataSourceName?: string | undefined;

  /**
   * The new request mapping template.
   *
   * A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).
   *
   * VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL request and response mapping templates are required.
   *
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * The new response mapping template.
   *
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * The resolver type.
   *
   * - **UNIT**: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.
   * - **PIPELINE**: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of `Function` objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.
   *
   * @public
   */
  kind?: ResolverKind | undefined;

  /**
   * The `PipelineConfig`.
   *
   * @public
   */
  pipelineConfig?: PipelineConfig | undefined;

  /**
   * The `SyncConfig` for a resolver attached to a versioned data source.
   *
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * The caching configuration for the resolver.
   *
   * @public
   */
  cachingConfig?: CachingConfig | undefined;

  /**
   * The maximum batching size for a resolver.
   *
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
   *
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * The `resolver` code that contains the request and response functions. When code is used, the `runtime` is required. The `runtime` value must be `APPSYNC_JS`.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * Enables or disables enhanced resolver metrics for specified resolvers. Note that `metricsConfig` won't be used unless the `resolverLevelMetricsBehavior` value is set to `PER_RESOLVER_METRICS`. If the `resolverLevelMetricsBehavior` is set to `FULL_REQUEST_RESOLVER_METRICS` instead, `metricsConfig` will be ignored. However, you can still set its value.
   *
   * `metricsConfig` can be `ENABLED` or `DISABLED`.
   *
   * @public
   */
  metricsConfig?: ResolverLevelMetricsConfig | undefined;
}

/**
 * @public
 */
export interface UpdateResolverResponse {
  /**
   * The updated `Resolver` object.
   *
   * @public
   */
  resolver?: Resolver | undefined;
}

/**
 * @public
 */
export interface UpdateSourceApiAssociationRequest {
  /**
   * The ID generated by the AppSync service for the source API association.
   *
   * @public
   */
  associationId: string | undefined;

  /**
   * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
   *
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * The description field.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The `SourceApiAssociationConfig` object data.
   *
   * @public
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig | undefined;
}

/**
 * @public
 */
export interface UpdateSourceApiAssociationResponse {
  /**
   * The `SourceApiAssociation` object data.
   *
   * @public
   */
  sourceApiAssociation?: SourceApiAssociation | undefined;
}

/**
 * @public
 */
export interface UpdateTypeRequest {
  /**
   * The API ID.
   *
   * @public
   */
  apiId: string | undefined;

  /**
   * The new type name.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The new definition.
   *
   * @public
   */
  definition?: string | undefined;

  /**
   * The new type format: SDL or JSON.
   *
   * @public
   */
  format: TypeDefinitionFormat | undefined;
}

/**
 * @public
 */
export interface UpdateTypeResponse {
  /**
   * The updated `Type` object.
   *
   * @public
   */
  type?: Type | undefined;
}

/**
 * Represents the type data for each field retrieved from the introspection.
 *
 * @public
 */
export interface DataSourceIntrospectionModelFieldType {
  /**
   * Specifies the classification of data. For example, this could be set to values like `Scalar` or `NonNull` to indicate a fundamental property of the field.
   *
   * Valid values include:
   *
   * - `Scalar`: Indicates the value is a primitive type (scalar).
   * - `NonNull`: Indicates the field cannot be `null`.
   * - `List`: Indicates the field contains a list.
   *
   * @public
   */
  kind?: string | undefined;

  /**
   * The name of the data type that represents the field. For example, `String` is a valid `name` value.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The `DataSourceIntrospectionModelFieldType` object data. The `type` is only present if `DataSourceIntrospectionModelFieldType.kind` is set to `NonNull` or `List`.
   *
   * The `type` typically contains its own `kind` and `name` fields to represent the actual type data. For instance, `type` could contain a `kind` value of `Scalar` with a `name` value of `String`. The values `Scalar` and `String` will be collectively stored in the `values` field.
   *
   * @public
   */
  type?: DataSourceIntrospectionModelFieldType | undefined;

  /**
   * The values of the `type` field. This field represents the AppSync data type equivalent of the introspected field.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Represents the fields that were retrieved from the introspected data.
 *
 * @public
 */
export interface DataSourceIntrospectionModelField {
  /**
   * The name of the field that was retrieved from the introspected data.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The `DataSourceIntrospectionModelFieldType` object data.
   *
   * @public
   */
  type?: DataSourceIntrospectionModelFieldType | undefined;

  /**
   * The length value of the introspected field.
   *
   * @public
   */
  length?: number | undefined;
}

/**
 * Contains the introspected data that was retrieved from the data source.
 *
 * @public
 */
export interface DataSourceIntrospectionModel {
  /**
   * The name of the model. For example, this could be the name of a single table in a database.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The `DataSourceIntrospectionModelField` object data.
   *
   * @public
   */
  fields?: DataSourceIntrospectionModelField[] | undefined;

  /**
   * The primary key stored as a `DataSourceIntrospectionModelIndex` object.
   *
   * @public
   */
  primaryKey?: DataSourceIntrospectionModelIndex | undefined;

  /**
   * The array of `DataSourceIntrospectionModelIndex` objects.
   *
   * @public
   */
  indexes?: DataSourceIntrospectionModelIndex[] | undefined;

  /**
   * Contains the output of the SDL that was generated from the introspected types. This is controlled by the `includeModelsSDL` parameter of the `GetDataSourceIntrospection` operation.
   *
   * @public
   */
  sdl?: string | undefined;
}

/**
 * Represents the output of a `DataSourceIntrospectionResult`. This is the populated result of a `GetDataSourceIntrospection` operation.
 *
 * @public
 */
export interface DataSourceIntrospectionResult {
  /**
   * The array of `DataSourceIntrospectionModel` objects.
   *
   * @public
   */
  models?: DataSourceIntrospectionModel[] | undefined;

  /**
   * Determines the number of types to be returned in a single response before paginating. This value is typically taken from `nextToken` value from the previous response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceIntrospectionResponse {
  /**
   * The introspection ID. Each introspection contains a unique ID that can be used to reference the instrospection record.
   *
   * @public
   */
  introspectionId?: string | undefined;

  /**
   * The status of the introspection during retrieval. By default, when a new instrospection is being retrieved, the status will be set to `PROCESSING`. Once the operation has been completed, the status will change to `SUCCESS` or `FAILED` depending on how the data was parsed. A `FAILED` operation will return an error and its details as an `introspectionStatusDetail`.
   *
   * @public
   */
  introspectionStatus?: DataSourceIntrospectionStatus | undefined;

  /**
   * The error detail field. When a `FAILED` `introspectionStatus` is returned, the `introspectionStatusDetail` will also return the exact error that was generated during the operation.
   *
   * @public
   */
  introspectionStatusDetail?: string | undefined;

  /**
   * The `DataSourceIntrospectionResult` object data.
   *
   * @public
   */
  introspectionResult?: DataSourceIntrospectionResult | undefined;
}
