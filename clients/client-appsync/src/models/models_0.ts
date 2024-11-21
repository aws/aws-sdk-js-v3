// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppSyncServiceException as __BaseException } from "./AppSyncServiceException";

/**
 * <p>You don't have access to perform this operation on this resource.</p>
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
export const AuthenticationType = {
  AMAZON_COGNITO_USER_POOLS: "AMAZON_COGNITO_USER_POOLS",
  API_KEY: "API_KEY",
  AWS_IAM: "AWS_IAM",
  AWS_LAMBDA: "AWS_LAMBDA",
  OPENID_CONNECT: "OPENID_CONNECT",
} as const;

/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * <p>A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync
 *          API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a
 *          time.</p>
 * @public
 */
export interface LambdaAuthorizerConfig {
  /**
   * <p>The number of seconds a response should be cached for. The default is 0 seconds, which
   *          disables caching. If you don't specify a value for
   *             <code>authorizerResultTtlInSeconds</code>, the default value is used. The maximum value
   *          is one hour (3600 seconds). The Lambda function can override this by returning
   *          a <code>ttlOverride</code> key in its response.</p>
   * @public
   */
  authorizerResultTtlInSeconds?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function to be called for
   *          authorization. This can be a standard Lambda ARN, a version ARN
   *             (<code>.../v3</code>), or an alias ARN. </p>
   *          <p>
   *             <b>Note</b>: This Lambda function must have the
   *          following resource-based policy assigned to it. When configuring Lambda
   *          authorizers in the console, this is done for you. To use the Command Line Interface
   *             (CLI), run the following:</p>
   *          <p>
   *             <code>aws lambda add-permission --function-name
   *             "arn:aws:lambda:us-east-2:111122223333:function:my-function" --statement-id "appsync"
   *             --principal appsync.amazonaws.com --action lambda:InvokeFunction</code>
   *          </p>
   * @public
   */
  authorizerUri: string | undefined;

  /**
   * <p>A regular expression for validation of tokens before the Lambda function is
   *          called.</p>
   * @public
   */
  identityValidationExpression?: string | undefined;
}

/**
 * <p>Describes an OpenID Connect (OIDC) configuration.</p>
 * @public
 */
export interface OpenIDConnectConfig {
  /**
   * <p>The issuer for the OIDC configuration. The issuer returned by discovery must exactly
   *          match the value of <code>iss</code> in the ID token.</p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>The client identifier of the relying party at the OpenID identity provider. This
   *          identifier is typically obtained when the relying party is registered with the OpenID
   *          identity provider. You can specify a regular expression so that AppSync can
   *          validate against multiple client identifiers at a time.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>The number of milliseconds that a token is valid after it's issued to a user.</p>
   * @public
   */
  iatTTL?: number | undefined;

  /**
   * <p>The number of milliseconds that a token is valid after being authenticated.</p>
   * @public
   */
  authTTL?: number | undefined;
}

/**
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 * @public
 */
export interface CognitoUserPoolConfig {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  userPoolId: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the user pool was created.</p>
   * @public
   */
  awsRegion: string | undefined;

  /**
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client
   *          ID. If this value isn't set, no filtering is applied.</p>
   * @public
   */
  appIdClientRegex?: string | undefined;
}

/**
 * <p>Describes an additional authentication provider.</p>
 * @public
 */
export interface AdditionalAuthenticationProvider {
  /**
   * <p>The authentication type: API key, Identity and Access Management (IAM), OpenID
   *          Connect (OIDC), Amazon Cognito user pools, or Lambda.</p>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>The OIDC configuration.</p>
   * @public
   */
  openIDConnectConfig?: OpenIDConnectConfig | undefined;

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   * @public
   */
  userPoolConfig?: CognitoUserPoolConfig | undefined;

  /**
   * <p>Configuration for Lambda function authorization.</p>
   * @public
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig | undefined;
}

/**
 * <p>Describes an Amazon Cognito configuration.</p>
 * @public
 */
export interface CognitoConfig {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  userPoolId: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the user pool was created.</p>
   * @public
   */
  awsRegion: string | undefined;

  /**
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client
   *          ID. If this value isn't set, no filtering is applied.</p>
   * @public
   */
  appIdClientRegex?: string | undefined;
}

/**
 * <p>Describes an authorization provider.</p>
 * @public
 */
export interface AuthProvider {
  /**
   * <p>The authorization type.</p>
   * @public
   */
  authType: AuthenticationType | undefined;

  /**
   * <p>Describes an Amazon Cognito user pool configuration.</p>
   * @public
   */
  cognitoConfig?: CognitoConfig | undefined;

  /**
   * <p>Describes an OpenID Connect (OIDC) configuration.</p>
   * @public
   */
  openIDConnectConfig?: OpenIDConnectConfig | undefined;

  /**
   * <p>A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync
   *          API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a
   *          time.</p>
   * @public
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig | undefined;
}

/**
 * <p>Describes an authorization configuration. Use <code>AuthMode</code> to specify the
 *          publishing and subscription authorization configuration for an Event API.</p>
 * @public
 */
export interface AuthMode {
  /**
   * <p>The authorization type.</p>
   * @public
   */
  authType: AuthenticationType | undefined;
}

/**
 * @public
 * @enum
 */
export const EventLogLevel = {
  ALL: "ALL",
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type EventLogLevel = (typeof EventLogLevel)[keyof typeof EventLogLevel];

/**
 * <p>Describes the CloudWatch Logs configuration for the Event API.</p>
 * @public
 */
export interface EventLogConfig {
  /**
   * <p>The type of information to log for the Event API. </p>
   * @public
   */
  logLevel: EventLogLevel | undefined;

  /**
   * <p>The IAM service role that AppSync assumes to publish CloudWatch Logs in your account.</p>
   * @public
   */
  cloudWatchLogsRoleArn: string | undefined;
}

/**
 * <p>Describes the authorization configuration for connections, message publishing, message
 *          subscriptions, and logging for an Event API.</p>
 * @public
 */
export interface EventConfig {
  /**
   * <p>A list of authorization providers.</p>
   * @public
   */
  authProviders: AuthProvider[] | undefined;

  /**
   * <p>A list of valid authorization modes for the Event API connections.</p>
   * @public
   */
  connectionAuthModes: AuthMode[] | undefined;

  /**
   * <p>A list of valid authorization modes for the Event API publishing.</p>
   * @public
   */
  defaultPublishAuthModes: AuthMode[] | undefined;

  /**
   * <p>A list of valid authorization modes for the Event API subscriptions.</p>
   * @public
   */
  defaultSubscribeAuthModes: AuthMode[] | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the Event API.</p>
   * @public
   */
  logConfig?: EventLogConfig | undefined;
}

/**
 * <p>Describes an AppSync API. You can use <code>Api</code> for an AppSync
 *          API with your preferred configuration, such as an Event API that provides real-time message
 *          publishing and message subscriptions over WebSockets.</p>
 * @public
 */
export interface Api {
  /**
   * <p>The <code>Api</code> ID.</p>
   * @public
   */
  apiId?: string | undefined;

  /**
   * <p>The name of the <code>Api</code>.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The owner contact information for the <code>Api</code>
   *          </p>
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * <p>A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code>
   *          objects.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The DNS records for the API. This will include an HTTP and a real-time endpoint.</p>
   * @public
   */
  dns?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the <code>Api</code>.</p>
   * @public
   */
  apiArn?: string | undefined;

  /**
   * <p>The date and time that the <code>Api</code> was created.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>A flag indicating whether to use X-Ray tracing for this
   *             <code>Api</code>.</p>
   * @public
   */
  xrayEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the WAF web access control list (web
   *          ACL) associated with this <code>Api</code>, if one exists.</p>
   * @public
   */
  wafWebAclArn?: string | undefined;

  /**
   * <p>The Event API configuration. This includes the default authorization configuration for
   *          connecting, publishing, and subscribing to an Event API.</p>
   * @public
   */
  eventConfig?: EventConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const AssociationStatus = {
  Failed: "FAILED",
  Processing: "PROCESSING",
  Success: "SUCCESS",
} as const;

/**
 * @public
 */
export type AssociationStatus = (typeof AssociationStatus)[keyof typeof AssociationStatus];

/**
 * <p>Describes an <code>ApiAssociation</code> object.</p>
 * @public
 */
export interface ApiAssociation {
  /**
   * <p>The domain name.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId?: string | undefined;

  /**
   * <p>Identifies the status of an association.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PROCESSING</b>: The API association is being
   *                created. You cannot modify association requests during processing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SUCCESS</b>: The API association was successful.
   *                You can modify associations after success.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b>: The API association has failed. You
   *                can modify associations after failure.</p>
   *             </li>
   *          </ul>
   * @public
   */
  associationStatus?: AssociationStatus | undefined;

  /**
   * <p>Details about the last deployment status.</p>
   * @public
   */
  deploymentDetail?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ApiCachingBehavior = {
  FULL_REQUEST_CACHING: "FULL_REQUEST_CACHING",
  PER_RESOLVER_CACHING: "PER_RESOLVER_CACHING",
} as const;

/**
 * @public
 */
export type ApiCachingBehavior = (typeof ApiCachingBehavior)[keyof typeof ApiCachingBehavior];

/**
 * @public
 * @enum
 */
export const CacheHealthMetricsConfig = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CacheHealthMetricsConfig = (typeof CacheHealthMetricsConfig)[keyof typeof CacheHealthMetricsConfig];

/**
 * @public
 * @enum
 */
export const ApiCacheStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  MODIFYING: "MODIFYING",
} as const;

/**
 * @public
 */
export type ApiCacheStatus = (typeof ApiCacheStatus)[keyof typeof ApiCacheStatus];

/**
 * @public
 * @enum
 */
export const ApiCacheType = {
  LARGE: "LARGE",
  LARGE_12X: "LARGE_12X",
  LARGE_2X: "LARGE_2X",
  LARGE_4X: "LARGE_4X",
  LARGE_8X: "LARGE_8X",
  MEDIUM: "MEDIUM",
  R4_2XLARGE: "R4_2XLARGE",
  R4_4XLARGE: "R4_4XLARGE",
  R4_8XLARGE: "R4_8XLARGE",
  R4_LARGE: "R4_LARGE",
  R4_XLARGE: "R4_XLARGE",
  SMALL: "SMALL",
  T2_MEDIUM: "T2_MEDIUM",
  T2_SMALL: "T2_SMALL",
  XLARGE: "XLARGE",
} as const;

/**
 * @public
 */
export type ApiCacheType = (typeof ApiCacheType)[keyof typeof ApiCacheType];

/**
 * <p>The <code>ApiCache</code> object.</p>
 * @public
 */
export interface ApiCache {
  /**
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are 1–3,600 seconds.</p>
   * @public
   */
  ttl?: number | undefined;

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
   * @public
   */
  apiCachingBehavior?: ApiCachingBehavior | undefined;

  /**
   * <p>Transit encryption flag when connecting to cache. You cannot update this setting after
   *          creation.</p>
   * @public
   */
  transitEncryptionEnabled?: boolean | undefined;

  /**
   * <p>At-rest encryption flag for cache. You cannot update this setting after creation.</p>
   * @public
   */
  atRestEncryptionEnabled?: boolean | undefined;

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
   * @public
   */
  type?: ApiCacheType | undefined;

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
   * @public
   */
  status?: ApiCacheStatus | undefined;

  /**
   * <p>Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics
   *          include:</p>
   *          <ul>
   *             <li>
   *                <p>NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the
   *                throughput exceeded the aggregated bandwidth limit. This is useful for diagnosing
   *                bottlenecks in a cache configuration.</p>
   *             </li>
   *             <li>
   *                <p>EngineCPUUtilization: The CPU utilization (percentage) allocated to the Redis
   *                process. This is useful for diagnosing bottlenecks in a cache
   *                configuration.</p>
   *             </li>
   *          </ul>
   *          <p>Metrics will be recorded by API ID. You can set the value to <code>ENABLED</code> or
   *             <code>DISABLED</code>.</p>
   * @public
   */
  healthMetricsConfig?: CacheHealthMetricsConfig | undefined;
}

/**
 * <p>Describes an API key.</p>
 *          <p>Customers invoke AppSync GraphQL API operations with API keys as an
 *          identity mechanism. There are two key versions:</p>
 *          <p>
 *             <b>da1</b>: We introduced this version at launch in November
 *          2017. These keys always expire after 7 days. Amazon DynamoDB TTL manages key
 *          expiration. These keys ceased to be valid after February 21, 2018, and they should no
 *          longer be used.</p>
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
 *                <p>Expiration is stored in DynamoDB as milliseconds. This results in a
 *                bug where keys are not automatically deleted because DynamoDB expects the
 *                TTL to be stored in seconds. As a one-time action, we deleted these keys from the
 *                table on February 21, 2018.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>da2</b>: We introduced this version in February 2018 when
 *             AppSync added support to extend key expiration.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ListApiKeys</code> returns the expiration time and deletion time in
 *                seconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateApiKey</code> returns the expiration time and deletion time in
 *                seconds and accepts a user-provided expiration time in seconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateApiKey</code> returns the expiration time and and deletion time in
 *                seconds and accepts a user-provided expiration time in seconds. Expired API keys are
 *                kept for 60 days after the expiration time. You can update the key expiration time as
 *                long as the key isn't deleted.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteApiKey</code> deletes the item from the table.</p>
 *             </li>
 *             <li>
 *                <p>Expiration is stored in DynamoDB as seconds. After the expiration
 *                time, using the key to authenticate will fail. However, you can reinstate the key
 *                before deletion.</p>
 *             </li>
 *             <li>
 *                <p>Deletion is stored in DynamoDB as seconds. The key is deleted after
 *                deletion time.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ApiKey {
  /**
   * <p>The API key ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>A description of the purpose of the API key.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time after which the API key expires. The date is represented as seconds since the
   *          epoch, rounded down to the nearest hour.</p>
   * @public
   */
  expires?: number | undefined;

  /**
   * <p>The time after which the API key is deleted. The date is represented as seconds since
   *          the epoch, rounded down to the nearest hour.</p>
   * @public
   */
  deletes?: number | undefined;
}

/**
 * <p>The API key exceeded a limit. Try your request again.</p>
 * @public
 */
export class ApiKeyLimitExceededException extends __BaseException {
  readonly name: "ApiKeyLimitExceededException" = "ApiKeyLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApiKeyLimitExceededException, __BaseException>) {
    super({
      name: "ApiKeyLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApiKeyLimitExceededException.prototype);
  }
}

/**
 * <p>The API key expiration must be set to a value between 1 and 365 days from creation (for
 *             <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>
 * @public
 */
export class ApiKeyValidityOutOfBoundsException extends __BaseException {
  readonly name: "ApiKeyValidityOutOfBoundsException" = "ApiKeyValidityOutOfBoundsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApiKeyValidityOutOfBoundsException, __BaseException>) {
    super({
      name: "ApiKeyValidityOutOfBoundsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApiKeyValidityOutOfBoundsException.prototype);
  }
}

/**
 * <p>The GraphQL API exceeded a limit. Try your request again.</p>
 * @public
 */
export class ApiLimitExceededException extends __BaseException {
  readonly name: "ApiLimitExceededException" = "ApiLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApiLimitExceededException, __BaseException>) {
    super({
      name: "ApiLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApiLimitExceededException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const RuntimeName = {
  APPSYNC_JS: "APPSYNC_JS",
} as const;

/**
 * @public
 */
export type RuntimeName = (typeof RuntimeName)[keyof typeof RuntimeName];

/**
 * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
 *          that if a runtime is specified, code must also be specified.</p>
 * @public
 */
export interface AppSyncRuntime {
  /**
   * <p>The <code>name</code> of the runtime to use. Currently, the only allowed value is
   *             <code>APPSYNC_JS</code>.</p>
   * @public
   */
  name: RuntimeName | undefined;

  /**
   * <p>The <code>version</code> of the runtime to use. Currently, the only allowed version is
   *             <code>1.0.0</code>.</p>
   * @public
   */
  runtimeVersion: string | undefined;
}

/**
 * @public
 */
export interface AssociateApiRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The API ID. Private APIs can not be associated with custom domains.</p>
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface AssociateApiResponse {
  /**
   * <p>The <code>ApiAssociation</code> object.</p>
   * @public
   */
  apiAssociation?: ApiAssociation | undefined;
}

/**
 * <p>Describes the location of the error in a code sample.</p>
 * @public
 */
export interface CodeErrorLocation {
  /**
   * <p>The line number in the code. Defaults to <code>0</code> if unknown.</p>
   * @public
   */
  line?: number | undefined;

  /**
   * <p>The column number in the code. Defaults to <code>0</code> if unknown.</p>
   * @public
   */
  column?: number | undefined;

  /**
   * <p>The span/length of the error. Defaults to <code>-1</code> if unknown.</p>
   * @public
   */
  span?: number | undefined;
}

/**
 * <p>Describes an AppSync error.</p>
 * @public
 */
export interface CodeError {
  /**
   * <p>The type of code error. </p>
   *          <p>Examples include, but aren't limited to: <code>LINT_ERROR</code>,
   *             <code>PARSER_ERROR</code>.</p>
   * @public
   */
  errorType?: string | undefined;

  /**
   * <p>A user presentable error.</p>
   *          <p>Examples include, but aren't limited to: <code>Parsing error: Unterminated string
   *             literal</code>.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The line, column, and span location of the error in the code.</p>
   * @public
   */
  location?: CodeErrorLocation | undefined;
}

/**
 * <p>Provides further details for the reason behind the bad request. For reason type
 *             <code>CODE_ERROR</code>, the detail will contain a list of code errors.</p>
 * @public
 */
export interface BadRequestDetail {
  /**
   * <p>Contains the list of errors in the request.</p>
   * @public
   */
  codeErrors?: CodeError[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BadRequestReason = {
  CODE_ERROR: "CODE_ERROR",
} as const;

/**
 * @public
 */
export type BadRequestReason = (typeof BadRequestReason)[keyof typeof BadRequestReason];

/**
 * <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>Provides context for the cause of the bad request. The only supported value is
   *             <code>CODE_ERROR</code>.</p>
   * @public
   */
  reason?: BadRequestReason | undefined;

  /**
   * <p>Provides further details for the reason behind the bad request. For reason type
   *             <code>CODE_ERROR</code>, the detail will contain a list of code errors.</p>
   * @public
   */
  detail?: BadRequestDetail | undefined;

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
    this.reason = opts.reason;
    this.detail = opts.detail;
  }
}

/**
 * <p>An internal AppSync error occurred. Try your request again.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
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
 * @public
 * @enum
 */
export const MergeType = {
  AUTO_MERGE: "AUTO_MERGE",
  MANUAL_MERGE: "MANUAL_MERGE",
} as const;

/**
 * @public
 */
export type MergeType = (typeof MergeType)[keyof typeof MergeType];

/**
 * <p>Describes properties used to specify configurations related to a source API.</p>
 * @public
 */
export interface SourceApiAssociationConfig {
  /**
   * <p>The property that indicates which merging option is enabled in the source API
   *          association.</p>
   *          <p>Valid merge types are <code>MANUAL_MERGE</code> (default) and <code>AUTO_MERGE</code>.
   *          Manual merges are the default behavior and require the user to trigger any changes from the
   *          source APIs to the merged API manually. Auto merges subscribe the merged API to the changes
   *          performed on the source APIs so that any change in the source APIs are also made to the
   *          merged API. Auto merges use <code>MergedApiExecutionRoleArn</code> to perform merge
   *          operations.</p>
   * @public
   */
  mergeType?: MergeType | undefined;
}

/**
 * @public
 */
export interface AssociateMergedGraphqlApiRequest {
  /**
   * <p>The identifier of the AppSync Source API. This is generated by the AppSync service. In
   *          most cases, source APIs (especially in your account) only require the API ID value or ARN
   *          of the source API. However, source APIs from other accounts (cross-account use cases)
   *          strictly require the full resource ARN of the source API.</p>
   * @public
   */
  sourceApiIdentifier: string | undefined;

  /**
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In
   *          most cases, Merged APIs (especially in your account) only require the API ID value or ARN
   *          of the merged API. However, Merged APIs in other accounts (cross-account use cases)
   *          strictly require the full resource ARN of the merged API.</p>
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * <p>The description field.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The <code>SourceApiAssociationConfig</code> object data.</p>
   * @public
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceApiAssociationStatus = {
  AUTO_MERGE_SCHEDULE_FAILED: "AUTO_MERGE_SCHEDULE_FAILED",
  DELETION_FAILED: "DELETION_FAILED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  DELETION_SCHEDULED: "DELETION_SCHEDULED",
  MERGE_FAILED: "MERGE_FAILED",
  MERGE_IN_PROGRESS: "MERGE_IN_PROGRESS",
  MERGE_SCHEDULED: "MERGE_SCHEDULED",
  MERGE_SUCCESS: "MERGE_SUCCESS",
} as const;

/**
 * @public
 */
export type SourceApiAssociationStatus = (typeof SourceApiAssociationStatus)[keyof typeof SourceApiAssociationStatus];

/**
 * <p>Describes the configuration of a source API. A source API is a GraphQL API that is
 *          linked to a merged API. There can be multiple source APIs attached to each merged API. When
 *          linked to a merged API, the source API's schema, data sources, and resolvers will be
 *          combined with other linked source API data to form a new, singular API. </p>
 *          <p>Source APIs can originate from your account or from other accounts via Amazon Web Services Resource Access Manager. For more information about sharing resources from other
 *          accounts, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">What is Amazon Web Services Resource Access Manager?</a> in the <i>Amazon Web Services Resource Access Manager</i> guide.</p>
 * @public
 */
export interface SourceApiAssociation {
  /**
   * <p>The ID generated by the AppSync service for the source API association.</p>
   * @public
   */
  associationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source API association.</p>
   * @public
   */
  associationArn?: string | undefined;

  /**
   * <p>The ID of the AppSync source API.</p>
   * @public
   */
  sourceApiId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AppSync source API.</p>
   * @public
   */
  sourceApiArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AppSync Merged API.</p>
   * @public
   */
  mergedApiArn?: string | undefined;

  /**
   * <p>The ID of the AppSync Merged API.</p>
   * @public
   */
  mergedApiId?: string | undefined;

  /**
   * <p>The description field.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The <code>SourceApiAssociationConfig</code> object data.</p>
   * @public
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig | undefined;

  /**
   * <p>The state of the source API association.</p>
   * @public
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus | undefined;

  /**
   * <p>The detailed message related to the current state of the source API association.</p>
   * @public
   */
  sourceApiAssociationStatusDetail?: string | undefined;

  /**
   * <p>The datetime value of the last successful merge of the source API association. The
   *          result will be in UTC format and your local time zone.</p>
   * @public
   */
  lastSuccessfulMergeDate?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateMergedGraphqlApiResponse {
  /**
   * <p>The <code>SourceApiAssociation</code> object data.</p>
   * @public
   */
  sourceApiAssociation?: SourceApiAssociation | undefined;
}

/**
 * <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>The request exceeded a limit. Try your request again.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>You aren't authorized to perform this operation.</p>
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
 * @public
 */
export interface AssociateSourceGraphqlApiRequest {
  /**
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In
   *          most cases, Merged APIs (especially in your account) only require the API ID value or ARN
   *          of the merged API. However, Merged APIs in other accounts (cross-account use cases)
   *          strictly require the full resource ARN of the merged API.</p>
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * <p>The identifier of the AppSync Source API. This is generated by the AppSync service. In
   *          most cases, source APIs (especially in your account) only require the API ID value or ARN
   *          of the source API. However, source APIs from other accounts (cross-account use cases)
   *          strictly require the full resource ARN of the source API.</p>
   * @public
   */
  sourceApiIdentifier: string | undefined;

  /**
   * <p>The description field.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The <code>SourceApiAssociationConfig</code> object data.</p>
   * @public
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig | undefined;
}

/**
 * @public
 */
export interface AssociateSourceGraphqlApiResponse {
  /**
   * <p>The <code>SourceApiAssociation</code> object data.</p>
   * @public
   */
  sourceApiAssociation?: SourceApiAssociation | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthorizationType = {
  AWS_IAM: "AWS_IAM",
} as const;

/**
 * @public
 */
export type AuthorizationType = (typeof AuthorizationType)[keyof typeof AuthorizationType];

/**
 * <p>The Identity and Access Management (IAM) configuration.</p>
 * @public
 */
export interface AwsIamConfig {
  /**
   * <p>The signing Amazon Web Services Region for IAM authorization.</p>
   * @public
   */
  signingRegion?: string | undefined;

  /**
   * <p>The signing service name for IAM authorization.</p>
   * @public
   */
  signingServiceName?: string | undefined;
}

/**
 * <p>The authorization configuration in case the HTTP endpoint requires authorization.</p>
 * @public
 */
export interface AuthorizationConfig {
  /**
   * <p>The authorization type that the HTTP endpoint requires.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>AWS_IAM</b>: The authorization type is Signature
   *                Version 4 (SigV4).</p>
   *             </li>
   *          </ul>
   * @public
   */
  authorizationType: AuthorizationType | undefined;

  /**
   * <p>The Identity and Access Management (IAM) settings.</p>
   * @public
   */
  awsIamConfig?: AwsIamConfig | undefined;
}

/**
 * @public
 */
export interface CreateApiRequest {
  /**
   * <p>The name for the <code>Api</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The owner contact information for the <code>Api</code>.</p>
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * <p>A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code>
   *          objects.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Event API configuration. This includes the default authorization configuration for
   *          connecting, publishing, and subscribing to an Event API.</p>
   * @public
   */
  eventConfig?: EventConfig | undefined;
}

/**
 * @public
 */
export interface CreateApiResponse {
  /**
   * <p>The <code>Api</code> object.</p>
   * @public
   */
  api?: Api | undefined;
}

/**
 * <p>The operation exceeded the service quota for this resource.</p>
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
 * <p>Represents the input of a <code>CreateApiCache</code> operation.</p>
 * @public
 */
export interface CreateApiCacheRequest {
  /**
   * <p>The GraphQL API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are 1–3,600 seconds.</p>
   * @public
   */
  ttl: number | undefined;

  /**
   * <p>Transit encryption flag when connecting to cache. You cannot update this setting after
   *          creation.</p>
   * @public
   */
  transitEncryptionEnabled?: boolean | undefined;

  /**
   * <p>At-rest encryption flag for cache. You cannot update this setting after creation.</p>
   * @public
   */
  atRestEncryptionEnabled?: boolean | undefined;

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
   * @public
   */
  apiCachingBehavior: ApiCachingBehavior | undefined;

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
   * @public
   */
  type: ApiCacheType | undefined;

  /**
   * <p>Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics
   *          include:</p>
   *          <ul>
   *             <li>
   *                <p>NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the
   *                throughput exceeded the aggregated bandwidth limit. This is useful for diagnosing
   *                bottlenecks in a cache configuration.</p>
   *             </li>
   *             <li>
   *                <p>EngineCPUUtilization: The CPU utilization (percentage) allocated to the Redis
   *                process. This is useful for diagnosing bottlenecks in a cache
   *                configuration.</p>
   *             </li>
   *          </ul>
   *          <p>Metrics will be recorded by API ID. You can set the value to <code>ENABLED</code> or
   *             <code>DISABLED</code>.</p>
   * @public
   */
  healthMetricsConfig?: CacheHealthMetricsConfig | undefined;
}

/**
 * <p>Represents the output of a <code>CreateApiCache</code> operation.</p>
 * @public
 */
export interface CreateApiCacheResponse {
  /**
   * <p>The <code>ApiCache</code> object.</p>
   * @public
   */
  apiCache?: ApiCache | undefined;
}

/**
 * @public
 */
export interface CreateApiKeyRequest {
  /**
   * <p>The ID for your GraphQL API.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>A description of the purpose of the API key.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>From the creation time, the time after which the API key expires. The date is
   *          represented as seconds since the epoch, rounded down to the nearest hour. The default value
   *          for this parameter is 7 days from creation time. For more information, see .</p>
   * @public
   */
  expires?: number | undefined;
}

/**
 * @public
 */
export interface CreateApiKeyResponse {
  /**
   * <p>The API key.</p>
   * @public
   */
  apiKey?: ApiKey | undefined;
}

/**
 * <p>A conflict with a previous successful update is detected. This typically
 *          occurs when the previous update did not have time to propagate before the next update was
 *          made. A retry (with appropriate backoff logic) is the recommended response to this
 *          exception.</p>
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
 */
export interface CreateChannelNamespaceRequest {
  /**
   * <p>The <code>Api</code> ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The name of the <code>ChannelNamespace</code>. This name must be unique within the
   *             <code>Api</code>
   *          </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The authorization mode to use for subscribing to messages on the channel namespace. This
   *          configuration overrides the default <code>Api</code> authorization configuration.</p>
   * @public
   */
  subscribeAuthModes?: AuthMode[] | undefined;

  /**
   * <p>The authorization mode to use for publishing messages on the channel namespace. This
   *          configuration overrides the default <code>Api</code> authorization configuration.</p>
   * @public
   */
  publishAuthModes?: AuthMode[] | undefined;

  /**
   * <p>The event handler functions that run custom business logic to process published events
   *          and subscribe requests.</p>
   * @public
   */
  codeHandlers?: string | undefined;

  /**
   * <p>A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code>
   *          objects.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Describes a channel namespace associated with an <code>Api</code>. The <code>ChannelNamespace</code> contains the definitions for code handlers for the <code>Api</code>.</p>
 * @public
 */
export interface ChannelNamespace {
  /**
   * <p>The <code>Api</code> ID.</p>
   * @public
   */
  apiId?: string | undefined;

  /**
   * <p>The name of the channel namespace. This name must be unique within the
   *          <code>Api</code>.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The authorization mode to use for subscribing to messages on the channel namespace. This
   *          configuration overrides the default <code>Api</code>authorization configuration.</p>
   * @public
   */
  subscribeAuthModes?: AuthMode[] | undefined;

  /**
   * <p>The authorization mode to use for publishing messages on the channel namespace. This
   *          configuration overrides the default <code>Api</code>authorization configuration.</p>
   * @public
   */
  publishAuthModes?: AuthMode[] | undefined;

  /**
   * <p>The event handler functions that run custom business logic to process published events
   *          and subscribe requests.</p>
   * @public
   */
  codeHandlers?: string | undefined;

  /**
   * <p>A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code>
   *          objects.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the <code>ChannelNamespace</code>.</p>
   * @public
   */
  channelNamespaceArn?: string | undefined;

  /**
   * <p>The date and time that the <code>ChannelNamespace</code> was created.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The date and time that the <code>ChannelNamespace</code> was last changed.</p>
   * @public
   */
  lastModified?: Date | undefined;
}

/**
 * @public
 */
export interface CreateChannelNamespaceResponse {
  /**
   * <p>The <code>ChannelNamespace</code> object.</p>
   * @public
   */
  channelNamespace?: ChannelNamespace | undefined;
}

/**
 * <p>Describes a Delta Sync configuration.</p>
 * @public
 */
export interface DeltaSyncConfig {
  /**
   * <p>The number of minutes that an Item is stored in the data source.</p>
   * @public
   */
  baseTableTTL?: number | undefined;

  /**
   * <p>The Delta Sync table name.</p>
   * @public
   */
  deltaSyncTableName?: string | undefined;

  /**
   * <p>The number of minutes that a Delta Sync log entry is stored in the Delta Sync
   *          table.</p>
   * @public
   */
  deltaSyncTableTTL?: number | undefined;
}

/**
 * <p>Describes an Amazon DynamoDB data source configuration.</p>
 * @public
 */
export interface DynamodbDataSourceConfig {
  /**
   * <p>The table name.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  awsRegion: string | undefined;

  /**
   * <p>Set to TRUE to use Amazon Cognito credentials with this data source.</p>
   * @public
   */
  useCallerCredentials?: boolean | undefined;

  /**
   * <p>The <code>DeltaSyncConfig</code> for a versioned data source.</p>
   * @public
   */
  deltaSyncConfig?: DeltaSyncConfig | undefined;

  /**
   * <p>Set to TRUE to use Conflict Detection and Resolution with this data source.</p>
   * @public
   */
  versioned?: boolean | undefined;
}

/**
 * <p>Describes an OpenSearch data source configuration.</p>
 *          <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This
 *          configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data
 *          source.</p>
 * @public
 */
export interface ElasticsearchDataSourceConfig {
  /**
   * <p>The endpoint.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  awsRegion: string | undefined;
}

/**
 * <p>Describes an Amazon EventBridge bus data source configuration.</p>
 * @public
 */
export interface EventBridgeDataSourceConfig {
  /**
   * <p>The ARN of the event bus. For more information about event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html">Amazon
   *             EventBridge event buses</a>.</p>
   * @public
   */
  eventBusArn: string | undefined;
}

/**
 * <p>Describes an HTTP data source configuration.</p>
 * @public
 */
export interface HttpDataSourceConfig {
  /**
   * <p>The HTTP URL endpoint. You can specify either the domain name or IP, and port
   *          combination, and the URL scheme must be HTTP or HTTPS. If you don't specify the port,
   *             AppSync uses the default port 80 for the HTTP endpoint and port 443 for
   *          HTTPS endpoints.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The authorization configuration in case the HTTP endpoint requires authorization.</p>
   * @public
   */
  authorizationConfig?: AuthorizationConfig | undefined;
}

/**
 * <p>Describes an Lambda data source configuration.</p>
 * @public
 */
export interface LambdaDataSourceConfig {
  /**
   * <p>The Amazon Resource Name (ARN) for the Lambda function.</p>
   * @public
   */
  lambdaFunctionArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceLevelMetricsConfig = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DataSourceLevelMetricsConfig =
  (typeof DataSourceLevelMetricsConfig)[keyof typeof DataSourceLevelMetricsConfig];

/**
 * <p>Describes an OpenSearch data source configuration.</p>
 * @public
 */
export interface OpenSearchServiceDataSourceConfig {
  /**
   * <p>The endpoint.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  awsRegion: string | undefined;
}

/**
 * <p>The Amazon Relational Database Service (Amazon RDS) HTTP endpoint configuration.</p>
 * @public
 */
export interface RdsHttpEndpointConfig {
  /**
   * <p>Amazon Web Services Region for Amazon RDS HTTP endpoint.</p>
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * <p>Amazon RDS cluster Amazon Resource Name (ARN).</p>
   * @public
   */
  dbClusterIdentifier?: string | undefined;

  /**
   * <p>Logical database name.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>Logical schema name.</p>
   * @public
   */
  schema?: string | undefined;

  /**
   * <p>Amazon Web Services secret store Amazon Resource Name (ARN) for database
   *          credentials.</p>
   * @public
   */
  awsSecretStoreArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RelationalDatabaseSourceType = {
  RDS_HTTP_ENDPOINT: "RDS_HTTP_ENDPOINT",
} as const;

/**
 * @public
 */
export type RelationalDatabaseSourceType =
  (typeof RelationalDatabaseSourceType)[keyof typeof RelationalDatabaseSourceType];

/**
 * <p>Describes a relational database data source configuration.</p>
 * @public
 */
export interface RelationalDatabaseDataSourceConfig {
  /**
   * <p>Source type for the relational database.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RDS_HTTP_ENDPOINT</b>: The relational database
   *                source type is an Amazon Relational Database Service (Amazon RDS) HTTP
   *                endpoint.</p>
   *             </li>
   *          </ul>
   * @public
   */
  relationalDatabaseSourceType?: RelationalDatabaseSourceType | undefined;

  /**
   * <p>Amazon RDS HTTP endpoint settings.</p>
   * @public
   */
  rdsHttpEndpointConfig?: RdsHttpEndpointConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  AMAZON_BEDROCK_RUNTIME: "AMAZON_BEDROCK_RUNTIME",
  AMAZON_DYNAMODB: "AMAZON_DYNAMODB",
  AMAZON_ELASTICSEARCH: "AMAZON_ELASTICSEARCH",
  AMAZON_EVENTBRIDGE: "AMAZON_EVENTBRIDGE",
  AMAZON_OPENSEARCH_SERVICE: "AMAZON_OPENSEARCH_SERVICE",
  AWS_LAMBDA: "AWS_LAMBDA",
  HTTP: "HTTP",
  NONE: "NONE",
  RELATIONAL_DATABASE: "RELATIONAL_DATABASE",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * <p>The API ID for the GraphQL API for the <code>DataSource</code>.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>A user-supplied name for the <code>DataSource</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the <code>DataSource</code>.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the <code>DataSource</code>.</p>
   * @public
   */
  type: DataSourceType | undefined;

  /**
   * <p>The Identity and Access Management (IAM) service role Amazon Resource Name (ARN)
   *          for the data source. The system assumes this role when accessing the data source.</p>
   * @public
   */
  serviceRoleArn?: string | undefined;

  /**
   * <p>Amazon DynamoDB settings.</p>
   * @public
   */
  dynamodbConfig?: DynamodbDataSourceConfig | undefined;

  /**
   * <p>Lambda settings.</p>
   * @public
   */
  lambdaConfig?: LambdaDataSourceConfig | undefined;

  /**
   * <p>Amazon OpenSearch Service settings.</p>
   *          <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This
   *          configuration is deprecated. For new data sources, use <a>CreateDataSourceRequest$openSearchServiceConfig</a> to create an OpenSearch data source.</p>
   * @public
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig | undefined;

  /**
   * <p>Amazon OpenSearch Service settings.</p>
   * @public
   */
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig | undefined;

  /**
   * <p>HTTP endpoint settings.</p>
   * @public
   */
  httpConfig?: HttpDataSourceConfig | undefined;

  /**
   * <p>Relational database settings.</p>
   * @public
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | undefined;

  /**
   * <p>Amazon EventBridge settings.</p>
   * @public
   */
  eventBridgeConfig?: EventBridgeDataSourceConfig | undefined;

  /**
   * <p>Enables or disables enhanced data source metrics for specified data sources. Note that
   *             <code>metricsConfig</code> won't be used unless the
   *             <code>dataSourceLevelMetricsBehavior</code> value is set to
   *             <code>PER_DATA_SOURCE_METRICS</code>. If the <code>dataSourceLevelMetricsBehavior</code>
   *          is set to <code>FULL_REQUEST_DATA_SOURCE_METRICS</code> instead, <code>metricsConfig</code>
   *          will be ignored. However, you can still set its value.</p>
   *          <p>
   *             <code>metricsConfig</code> can be <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  metricsConfig?: DataSourceLevelMetricsConfig | undefined;
}

/**
 * <p>Describes a data source.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>The data source Amazon Resource Name (ARN).</p>
   * @public
   */
  dataSourceArn?: string | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the data source.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the data source.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>AWS_LAMBDA</b>: The data source is an Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AMAZON_DYNAMODB</b>: The data source is an Amazon DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AMAZON_ELASTICSEARCH</b>: The data source is an
   *                   Amazon OpenSearch Service domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AMAZON_OPENSEARCH_SERVICE</b>: The data source is
   *                an Amazon OpenSearch Service domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AMAZON_EVENTBRIDGE</b>: The data source is an
   *                   Amazon EventBridge configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NONE</b>: There is no data source. Use this type
   *                when you want to invoke a GraphQL operation without connecting to a data source, such
   *                as when you're performing data transformation with resolvers or invoking a
   *                subscription from a mutation.</p>
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
   * @public
   */
  type?: DataSourceType | undefined;

  /**
   * <p>The Identity and Access Management (IAM) service role Amazon Resource Name (ARN)
   *          for the data source. The system assumes this role when accessing the data source.</p>
   * @public
   */
  serviceRoleArn?: string | undefined;

  /**
   * <p>DynamoDB settings.</p>
   * @public
   */
  dynamodbConfig?: DynamodbDataSourceConfig | undefined;

  /**
   * <p>Lambda settings.</p>
   * @public
   */
  lambdaConfig?: LambdaDataSourceConfig | undefined;

  /**
   * <p>Amazon OpenSearch Service settings.</p>
   * @public
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig | undefined;

  /**
   * <p>Amazon OpenSearch Service settings.</p>
   * @public
   */
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig | undefined;

  /**
   * <p>HTTP endpoint settings.</p>
   * @public
   */
  httpConfig?: HttpDataSourceConfig | undefined;

  /**
   * <p>Relational database settings.</p>
   * @public
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | undefined;

  /**
   * <p>Amazon EventBridge settings.</p>
   * @public
   */
  eventBridgeConfig?: EventBridgeDataSourceConfig | undefined;

  /**
   * <p>Enables or disables enhanced data source metrics for specified data sources. Note that
   *             <code>metricsConfig</code> won't be used unless the
   *             <code>dataSourceLevelMetricsBehavior</code> value is set to
   *             <code>PER_DATA_SOURCE_METRICS</code>. If the <code>dataSourceLevelMetricsBehavior</code>
   *          is set to <code>FULL_REQUEST_DATA_SOURCE_METRICS</code> instead, <code>metricsConfig</code>
   *          will be ignored. However, you can still set its value.</p>
   *          <p>
   *             <code>metricsConfig</code> can be <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  metricsConfig?: DataSourceLevelMetricsConfig | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * <p>The <code>DataSource</code> object.</p>
   * @public
   */
  dataSource?: DataSource | undefined;
}

/**
 * @public
 */
export interface CreateDomainNameRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager
   *             (ACM) certificate or an Identity and Access Management (IAM)
   *          server certificate.</p>
   * @public
   */
  certificateArn: string | undefined;

  /**
   * <p>A description of the <code>DomainName</code>.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Describes a configuration for a custom domain.</p>
 * @public
 */
export interface DomainNameConfig {
  /**
   * <p>The domain name.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>A description of the <code>DomainName</code> configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager
   *             (ACM) certificate or an Identity and Access Management (IAM)
   *          server certificate.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The domain name that AppSync provides.</p>
   * @public
   */
  appsyncDomainName?: string | undefined;

  /**
   * <p>The ID of your Amazon Route 53 hosted zone.</p>
   * @public
   */
  hostedZoneId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainNameResponse {
  /**
   * <p>The configuration for the <code>DomainName</code>.</p>
   * @public
   */
  domainNameConfig?: DomainNameConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const ConflictDetectionType = {
  NONE: "NONE",
  VERSION: "VERSION",
} as const;

/**
 * @public
 */
export type ConflictDetectionType = (typeof ConflictDetectionType)[keyof typeof ConflictDetectionType];

/**
 * @public
 * @enum
 */
export const ConflictHandlerType = {
  AUTOMERGE: "AUTOMERGE",
  LAMBDA: "LAMBDA",
  NONE: "NONE",
  OPTIMISTIC_CONCURRENCY: "OPTIMISTIC_CONCURRENCY",
} as const;

/**
 * @public
 */
export type ConflictHandlerType = (typeof ConflictHandlerType)[keyof typeof ConflictHandlerType];

/**
 * <p>The <code>LambdaConflictHandlerConfig</code> object when configuring <code>LAMBDA</code>
 *          as the Conflict Handler.</p>
 * @public
 */
export interface LambdaConflictHandlerConfig {
  /**
   * <p>The Amazon Resource Name (ARN) for the Lambda function to use as the
   *          Conflict Handler.</p>
   * @public
   */
  lambdaConflictHandlerArn?: string | undefined;
}

/**
 * <p>Describes a Sync configuration for a resolver.</p>
 *          <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the
 *          resolver is invoked.</p>
 * @public
 */
export interface SyncConfig {
  /**
   * <p>The Conflict Resolution strategy to perform in the event of a conflict.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>OPTIMISTIC_CONCURRENCY</b>: Resolve conflicts by
   *                rejecting mutations when versions don't match the latest version at the
   *                server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AUTOMERGE</b>: Resolve conflicts with the
   *                Automerge conflict resolution strategy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>LAMBDA</b>: Resolve conflicts with an Lambda function supplied in the
   *                <code>LambdaConflictHandlerConfig</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  conflictHandler?: ConflictHandlerType | undefined;

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
   *                   <b>NONE</b>: Do not detect conflicts when invoking
   *                this resolver.</p>
   *             </li>
   *          </ul>
   * @public
   */
  conflictDetection?: ConflictDetectionType | undefined;

  /**
   * <p>The <code>LambdaConflictHandlerConfig</code> when configuring <code>LAMBDA</code> as the
   *          Conflict Handler.</p>
   * @public
   */
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig | undefined;
}

/**
 * @public
 */
export interface CreateFunctionRequest {
  /**
   * <p>The GraphQL API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The <code>Function</code> name. The function name does not have to be unique.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The <code>Function</code> description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The <code>Function</code>
   *             <code>DataSource</code> name.</p>
   * @public
   */
  dataSourceName: string | undefined;

  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * <p>The <code>Function</code> response mapping template.</p>
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * <p>The <code>version</code> of the request mapping template. Currently, the supported value
   *          is 2018-05-29. Note that when using VTL and mapping templates, the
   *             <code>functionVersion</code> is required.</p>
   * @public
   */
  functionVersion?: string | undefined;

  /**
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the
   *          resolver is invoked.</p>
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * <p>The maximum batching size for a resolver.</p>
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * <p>The <code>function</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   * @public
   */
  code?: string | undefined;
}

/**
 * <p>A function is a reusable entity. You can use multiple functions to compose the resolver
 *          logic.</p>
 * @public
 */
export interface FunctionConfiguration {
  /**
   * <p>A unique ID representing the <code>Function</code> object.</p>
   * @public
   */
  functionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <code>Function</code> object.</p>
   * @public
   */
  functionArn?: string | undefined;

  /**
   * <p>The name of the <code>Function</code> object.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The <code>Function</code> description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the <code>DataSource</code>.</p>
   * @public
   */
  dataSourceName?: string | undefined;

  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * <p>The <code>Function</code> response mapping template.</p>
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * <p>The version of the request mapping template. Currently, only the 2018-05-29 version of
   *          the template is supported.</p>
   * @public
   */
  functionVersion?: string | undefined;

  /**
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the
   *          resolver is invoked.</p>
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * <p>The maximum batching size for a resolver.</p>
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * <p>The <code>function</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   * @public
   */
  code?: string | undefined;
}

/**
 * @public
 */
export interface CreateFunctionResponse {
  /**
   * <p>The <code>Function</code> object.</p>
   * @public
   */
  functionConfiguration?: FunctionConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const GraphQLApiType = {
  GRAPHQL: "GRAPHQL",
  MERGED: "MERGED",
} as const;

/**
 * @public
 */
export type GraphQLApiType = (typeof GraphQLApiType)[keyof typeof GraphQLApiType];

/**
 * @public
 * @enum
 */
export const DataSourceLevelMetricsBehavior = {
  FULL_REQUEST_DATA_SOURCE_METRICS: "FULL_REQUEST_DATA_SOURCE_METRICS",
  PER_DATA_SOURCE_METRICS: "PER_DATA_SOURCE_METRICS",
} as const;

/**
 * @public
 */
export type DataSourceLevelMetricsBehavior =
  (typeof DataSourceLevelMetricsBehavior)[keyof typeof DataSourceLevelMetricsBehavior];

/**
 * @public
 * @enum
 */
export const OperationLevelMetricsConfig = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type OperationLevelMetricsConfig =
  (typeof OperationLevelMetricsConfig)[keyof typeof OperationLevelMetricsConfig];

/**
 * @public
 * @enum
 */
export const ResolverLevelMetricsBehavior = {
  FULL_REQUEST_RESOLVER_METRICS: "FULL_REQUEST_RESOLVER_METRICS",
  PER_RESOLVER_METRICS: "PER_RESOLVER_METRICS",
} as const;

/**
 * @public
 */
export type ResolverLevelMetricsBehavior =
  (typeof ResolverLevelMetricsBehavior)[keyof typeof ResolverLevelMetricsBehavior];

/**
 * <p>Enables and controls the enhanced metrics feature. Enhanced metrics emit granular data
 *          on API usage and performance such as AppSync request and error counts, latency, and cache
 *          hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can
 *          configure the types of data that will be sent. </p>
 *          <p>Enhanced metrics can be configured at the resolver, data source, and operation levels.
 *             <code>EnhancedMetricsConfig</code> contains three required parameters, each controlling
 *          one of these categories:</p>
 *          <ol>
 *             <li>
 *                <p>
 *                   <code>resolverLevelMetricsBehavior</code>: Controls how resolver metrics will
 *                be emitted to CloudWatch. Resolver metrics include:</p>
 *                <ul>
 *                   <li>
 *                      <p>GraphQL errors: The number of GraphQL errors that occurred.</p>
 *                   </li>
 *                   <li>
 *                      <p>Requests: The number of invocations that occurred during a request.
 *                   </p>
 *                   </li>
 *                   <li>
 *                      <p>Latency: The time to complete a resolver invocation.</p>
 *                   </li>
 *                   <li>
 *                      <p>Cache hits: The number of cache hits during a request.</p>
 *                   </li>
 *                   <li>
 *                      <p>Cache misses: The number of cache misses during a request.</p>
 *                   </li>
 *                </ul>
 *                <p>These metrics can be emitted to CloudWatch per resolver or for all resolvers in
 *                the request. Metrics will be recorded by API ID and resolver name.
 *                   <code>resolverLevelMetricsBehavior</code> accepts one of these values at a
 *                time:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>FULL_REQUEST_RESOLVER_METRICS</code>: Records and emits metric data
 *                      for all resolvers in the request.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>PER_RESOLVER_METRICS</code>: Records and emits metric data for
 *                      resolvers that have the <code>metricsConfig</code> value set to
 *                         <code>ENABLED</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>dataSourceLevelMetricsBehavior</code>: Controls how data source metrics
 *                will be emitted to CloudWatch. Data source metrics include:</p>
 *                <ul>
 *                   <li>
 *                      <p>Requests: The number of invocations that occured during a
 *                      request.</p>
 *                   </li>
 *                   <li>
 *                      <p>Latency: The time to complete a data source invocation.</p>
 *                   </li>
 *                   <li>
 *                      <p>Errors: The number of errors that occurred during a data source
 *                      invocation.</p>
 *                   </li>
 *                </ul>
 *                <p>These metrics can be emitted to CloudWatch per data source or for all data sources
 *                in the request. Metrics will be recorded by API ID and data source name.
 *                   <code>dataSourceLevelMetricsBehavior</code> accepts one of these values at a
 *                time:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>FULL_REQUEST_DATA_SOURCE_METRICS</code>: Records and emits metric
 *                      data for all data sources in the request.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>PER_DATA_SOURCE_METRICS</code>: Records and emits metric data for
 *                      data sources that have the <code>metricsConfig</code> value set to
 *                         <code>ENABLED</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>operationLevelMetricsConfig</code>: Controls how operation metrics will
 *                be emitted to CloudWatch. Operation metrics include:</p>
 *                <ul>
 *                   <li>
 *                      <p>Requests: The number of times a specified GraphQL operation was
 *                      called.</p>
 *                   </li>
 *                   <li>
 *                      <p>GraphQL errors: The number of GraphQL errors that occurred during a
 *                      specified GraphQL operation.</p>
 *                   </li>
 *                </ul>
 *                <p>Metrics will be recorded by API ID and operation name. You can set the value to
 *                   <code>ENABLED</code> or <code>DISABLED</code>.</p>
 *             </li>
 *          </ol>
 * @public
 */
export interface EnhancedMetricsConfig {
  /**
   * <p>Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics
   *          include:</p>
   *          <ul>
   *             <li>
   *                <p>GraphQL errors: The number of GraphQL errors that occurred.</p>
   *             </li>
   *             <li>
   *                <p>Requests: The number of invocations that occurred during a request. </p>
   *             </li>
   *             <li>
   *                <p>Latency: The time to complete a resolver invocation.</p>
   *             </li>
   *             <li>
   *                <p>Cache hits: The number of cache hits during a request.</p>
   *             </li>
   *             <li>
   *                <p>Cache misses: The number of cache misses during a request.</p>
   *             </li>
   *          </ul>
   *          <p>These metrics can be emitted to CloudWatch per resolver or for all resolvers in the
   *          request. Metrics will be recorded by API ID and resolver name.
   *             <code>resolverLevelMetricsBehavior</code> accepts one of these values at a time:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULL_REQUEST_RESOLVER_METRICS</code>: Records and emits metric data for
   *                all resolvers in the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PER_RESOLVER_METRICS</code>: Records and emits metric data for resolvers
   *                that have the <code>metricsConfig</code> value set to <code>ENABLED</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  resolverLevelMetricsBehavior: ResolverLevelMetricsBehavior | undefined;

  /**
   * <p>Controls how data source metrics will be emitted to CloudWatch. Data source metrics
   *          include:</p>
   *          <ul>
   *             <li>
   *                <p>Requests: The number of invocations that occured during a request.</p>
   *             </li>
   *             <li>
   *                <p>Latency: The time to complete a data source invocation.</p>
   *             </li>
   *             <li>
   *                <p>Errors: The number of errors that occurred during a data source
   *                invocation.</p>
   *             </li>
   *          </ul>
   *          <p>These metrics can be emitted to CloudWatch per data source or for all data sources in
   *          the request. Metrics will be recorded by API ID and data source name.
   *             <code>dataSourceLevelMetricsBehavior</code> accepts one of these values at a
   *          time:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULL_REQUEST_DATA_SOURCE_METRICS</code>: Records and emits metric data
   *                for all data sources in the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PER_DATA_SOURCE_METRICS</code>: Records and emits metric data for data
   *                sources that have the <code>metricsConfig</code> value set to
   *                <code>ENABLED</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  dataSourceLevelMetricsBehavior: DataSourceLevelMetricsBehavior | undefined;

  /**
   * <p> Controls how operation metrics will be emitted to CloudWatch. Operation metrics
   *          include:</p>
   *          <ul>
   *             <li>
   *                <p>Requests: The number of times a specified GraphQL operation was
   *                called.</p>
   *             </li>
   *             <li>
   *                <p>GraphQL errors: The number of GraphQL errors that occurred during a specified
   *                GraphQL operation.</p>
   *             </li>
   *          </ul>
   *          <p>Metrics will be recorded by API ID and operation name. You can set the value to
   *             <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  operationLevelMetricsConfig: OperationLevelMetricsConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const GraphQLApiIntrospectionConfig = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type GraphQLApiIntrospectionConfig =
  (typeof GraphQLApiIntrospectionConfig)[keyof typeof GraphQLApiIntrospectionConfig];

/**
 * @public
 * @enum
 */
export const FieldLogLevel = {
  ALL: "ALL",
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type FieldLogLevel = (typeof FieldLogLevel)[keyof typeof FieldLogLevel];

/**
 * <p>The Amazon CloudWatch Logs configuration.</p>
 * @public
 */
export interface LogConfig {
  /**
   * <p>The field logging level. Values can be NONE, ERROR, or ALL.</p>
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
   * @public
   */
  fieldLogLevel: FieldLogLevel | undefined;

  /**
   * <p>The service role that AppSync assumes to publish to CloudWatch
   *          logs in your account.</p>
   * @public
   */
  cloudWatchLogsRoleArn: string | undefined;

  /**
   * <p>Set to TRUE to exclude sections that contain information such as headers, context, and
   *          evaluated mapping templates, regardless of logging level.</p>
   * @public
   */
  excludeVerboseContent?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const DefaultAction = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

/**
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 * @public
 */
export interface UserPoolConfig {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  userPoolId: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the user pool was created.</p>
   * @public
   */
  awsRegion: string | undefined;

  /**
   * <p>The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool
   *          configuration.</p>
   * @public
   */
  defaultAction: DefaultAction | undefined;

  /**
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client
   *          ID. If this value isn't set, no filtering is applied.</p>
   * @public
   */
  appIdClientRegex?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GraphQLApiVisibility = {
  GLOBAL: "GLOBAL",
  PRIVATE: "PRIVATE",
} as const;

/**
 * @public
 */
export type GraphQLApiVisibility = (typeof GraphQLApiVisibility)[keyof typeof GraphQLApiVisibility];

/**
 * @public
 */
export interface CreateGraphqlApiRequest {
  /**
   * <p>A user-supplied name for the <code>GraphqlApi</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon CloudWatch Logs configuration.</p>
   * @public
   */
  logConfig?: LogConfig | undefined;

  /**
   * <p>The authentication type: API key, Identity and Access Management (IAM), OpenID
   *          Connect (OIDC), Amazon Cognito user pools, or Lambda.</p>
   * @public
   */
  authenticationType: AuthenticationType | undefined;

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   * @public
   */
  userPoolConfig?: UserPoolConfig | undefined;

  /**
   * <p>The OIDC configuration.</p>
   * @public
   */
  openIDConnectConfig?: OpenIDConnectConfig | undefined;

  /**
   * <p>A <code>TagMap</code> object.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   * @public
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined;

  /**
   * <p>A flag indicating whether to use X-Ray tracing for the
   *             <code>GraphqlApi</code>.</p>
   * @public
   */
  xrayEnabled?: boolean | undefined;

  /**
   * <p>Configuration for Lambda function authorization.</p>
   * @public
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig | undefined;

  /**
   * <p>The value that indicates whether the GraphQL API is a standard API
   *          (<code>GRAPHQL</code>) or merged API (<code>MERGED</code>).</p>
   * @public
   */
  apiType?: GraphQLApiType | undefined;

  /**
   * <p>The Identity and Access Management service role ARN for a merged API. The AppSync
   *          service assumes this role on behalf of the Merged API to validate access to source APIs at
   *          runtime and to prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with
   *          the source API changes automatically.</p>
   * @public
   */
  mergedApiExecutionRoleArn?: string | undefined;

  /**
   * <p>Sets the value of the GraphQL API to public (<code>GLOBAL</code>) or private
   *             (<code>PRIVATE</code>). If no value is provided, the visibility will be set to
   *             <code>GLOBAL</code> by default. This value cannot be changed once the API has been
   *          created.</p>
   * @public
   */
  visibility?: GraphQLApiVisibility | undefined;

  /**
   * <p>The owner contact information for an API resource.</p>
   *          <p>This field accepts any string input with a length of 0 - 256 characters.</p>
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * <p>Sets the value of the GraphQL API to enable (<code>ENABLED</code>) or disable
   *             (<code>DISABLED</code>) introspection. If no value is provided, the introspection
   *          configuration will be set to <code>ENABLED</code> by default. This field will produce an
   *          error if the operation attempts to use the introspection feature while this field is
   *          disabled.</p>
   *          <p>For more information about introspection, see <a href="https://graphql.org/learn/introspection/">GraphQL introspection</a>.</p>
   * @public
   */
  introspectionConfig?: GraphQLApiIntrospectionConfig | undefined;

  /**
   * <p>The maximum depth a query can have in a single request. Depth refers to the amount of
   *          nested levels allowed in the body of query. The default value is <code>0</code> (or
   *          unspecified), which indicates there's no depth limit. If you set a limit, it can be between
   *             <code>1</code> and <code>75</code> nested levels. This field will produce a limit error
   *          if the operation falls out of bounds.</p>
   *          <p>Note that fields can still be set to nullable or non-nullable. If a non-nullable field
   *          produces an error, the error will be thrown upwards to the first nullable field
   *          available.</p>
   * @public
   */
  queryDepthLimit?: number | undefined;

  /**
   * <p>The maximum number of resolvers that can be invoked in a single request. The default
   *          value is <code>0</code> (or unspecified), which will set the limit to <code>10000</code>.
   *          When specified, the limit value can be between <code>1</code> and <code>10000</code>. This
   *          field will produce a limit error if the operation falls out of bounds.</p>
   * @public
   */
  resolverCountLimit?: number | undefined;

  /**
   * <p>The <code>enhancedMetricsConfig</code> object.</p>
   * @public
   */
  enhancedMetricsConfig?: EnhancedMetricsConfig | undefined;
}

/**
 * <p>Describes a GraphQL API.</p>
 * @public
 */
export interface GraphqlApi {
  /**
   * <p>The API name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId?: string | undefined;

  /**
   * <p>The authentication type.</p>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>The Amazon CloudWatch Logs configuration.</p>
   * @public
   */
  logConfig?: LogConfig | undefined;

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   * @public
   */
  userPoolConfig?: UserPoolConfig | undefined;

  /**
   * <p>The OpenID Connect configuration.</p>
   * @public
   */
  openIDConnectConfig?: OpenIDConnectConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN).</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The URIs.</p>
   * @public
   */
  uris?: Record<string, string> | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   * @public
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined;

  /**
   * <p>A flag indicating whether to use X-Ray tracing for this
   *             <code>GraphqlApi</code>.</p>
   * @public
   */
  xrayEnabled?: boolean | undefined;

  /**
   * <p>The ARN of the WAF access control list (ACL) associated with this
   *             <code>GraphqlApi</code>, if one exists.</p>
   * @public
   */
  wafWebAclArn?: string | undefined;

  /**
   * <p>Configuration for Lambda function authorization.</p>
   * @public
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig | undefined;

  /**
   * <p>The DNS records for the API.</p>
   * @public
   */
  dns?: Record<string, string> | undefined;

  /**
   * <p>Sets the value of the GraphQL API to public (<code>GLOBAL</code>) or private
   *             (<code>PRIVATE</code>). If no value is provided, the visibility will be set to
   *             <code>GLOBAL</code> by default. This value cannot be changed once the API has been
   *          created.</p>
   * @public
   */
  visibility?: GraphQLApiVisibility | undefined;

  /**
   * <p>The value that indicates whether the GraphQL API is a standard API
   *          (<code>GRAPHQL</code>) or merged API (<code>MERGED</code>).</p>
   * @public
   */
  apiType?: GraphQLApiType | undefined;

  /**
   * <p>The Identity and Access Management service role ARN for a merged API. The AppSync
   *          service assumes this role on behalf of the Merged API to validate access to source APIs at
   *          runtime and to prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with
   *          the source API changes automatically.</p>
   * @public
   */
  mergedApiExecutionRoleArn?: string | undefined;

  /**
   * <p>The account owner of the GraphQL API.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The owner contact information for an API resource.</p>
   *          <p>This field accepts any string input with a length of 0 - 256 characters.</p>
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * <p>Sets the value of the GraphQL API to enable (<code>ENABLED</code>) or disable
   *             (<code>DISABLED</code>) introspection. If no value is provided, the introspection
   *          configuration will be set to <code>ENABLED</code> by default. This field will produce an
   *          error if the operation attempts to use the introspection feature while this field is
   *          disabled.</p>
   *          <p>For more information about introspection, see <a href="https://graphql.org/learn/introspection/">GraphQL introspection</a>.</p>
   * @public
   */
  introspectionConfig?: GraphQLApiIntrospectionConfig | undefined;

  /**
   * <p>The maximum depth a query can have in a single request. Depth refers to the amount of
   *          nested levels allowed in the body of query. The default value is <code>0</code> (or
   *          unspecified), which indicates there's no depth limit. If you set a limit, it can be between
   *             <code>1</code> and <code>75</code> nested levels. This field will produce a limit error
   *          if the operation falls out of bounds.</p>
   *          <p>Note that fields can still be set to nullable or non-nullable. If a non-nullable field
   *          produces an error, the error will be thrown upwards to the first nullable field
   *          available.</p>
   * @public
   */
  queryDepthLimit?: number | undefined;

  /**
   * <p>The maximum number of resolvers that can be invoked in a single request. The default
   *          value is <code>0</code> (or unspecified), which will set the limit to <code>10000</code>.
   *          When specified, the limit value can be between <code>1</code> and <code>10000</code>. This
   *          field will produce a limit error if the operation falls out of bounds.</p>
   * @public
   */
  resolverCountLimit?: number | undefined;

  /**
   * <p>The <code>enhancedMetricsConfig</code> object.</p>
   * @public
   */
  enhancedMetricsConfig?: EnhancedMetricsConfig | undefined;
}

/**
 * @public
 */
export interface CreateGraphqlApiResponse {
  /**
   * <p>The <code>GraphqlApi</code>.</p>
   * @public
   */
  graphqlApi?: GraphqlApi | undefined;
}

/**
 * <p>The caching configuration for a resolver that has caching activated.</p>
 * @public
 */
export interface CachingConfig {
  /**
   * <p>The TTL in seconds for a resolver that has caching activated.</p>
   *          <p>Valid values are 1–3,600 seconds.</p>
   * @public
   */
  ttl: number | undefined;

  /**
   * <p>The caching keys for a resolver that has caching activated.</p>
   *          <p>Valid values are entries from the <code>$context.arguments</code>,
   *             <code>$context.source</code>, and <code>$context.identity</code> maps.</p>
   * @public
   */
  cachingKeys?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ResolverKind = {
  PIPELINE: "PIPELINE",
  UNIT: "UNIT",
} as const;

/**
 * @public
 */
export type ResolverKind = (typeof ResolverKind)[keyof typeof ResolverKind];

/**
 * @public
 * @enum
 */
export const ResolverLevelMetricsConfig = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ResolverLevelMetricsConfig = (typeof ResolverLevelMetricsConfig)[keyof typeof ResolverLevelMetricsConfig];

/**
 * <p>The pipeline configuration for a resolver of kind <code>PIPELINE</code>.</p>
 * @public
 */
export interface PipelineConfig {
  /**
   * <p>A list of <code>Function</code> objects.</p>
   * @public
   */
  functions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateResolverRequest {
  /**
   * <p>The ID for the GraphQL API for which the resolver is being created.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The name of the <code>Type</code>.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The name of the field to attach the resolver to.</p>
   * @public
   */
  fieldName: string | undefined;

  /**
   * <p>The name of the data source for which the resolver is being created.</p>
   * @public
   */
  dataSourceName?: string | undefined;

  /**
   * <p>The mapping template to use for requests.</p>
   *          <p>A resolver uses a request mapping template to convert a GraphQL expression into a format
   *          that a data source can understand. Mapping templates are written in Apache Velocity
   *          Template Language (VTL).</p>
   *          <p>VTL request mapping templates are optional when using an Lambda data
   *          source. For all other data sources, VTL request and response mapping templates are
   *          required.</p>
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * <p>The mapping template to use for responses from the data source.</p>
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is
   *                the default resolver type. You can use a UNIT resolver to run a GraphQL query against
   *                a single data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type. You can
   *                use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a
   *                serial manner. You can use a pipeline resolver to run a GraphQL query against
   *                multiple data sources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  kind?: ResolverKind | undefined;

  /**
   * <p>The <code>PipelineConfig</code>.</p>
   * @public
   */
  pipelineConfig?: PipelineConfig | undefined;

  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned data source.</p>
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * <p>The caching configuration for the resolver.</p>
   * @public
   */
  cachingConfig?: CachingConfig | undefined;

  /**
   * <p>The maximum batching size for a resolver.</p>
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * <p>The <code>resolver</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>Enables or disables enhanced resolver metrics for specified resolvers. Note that
   *             <code>metricsConfig</code> won't be used unless the
   *             <code>resolverLevelMetricsBehavior</code> value is set to
   *             <code>PER_RESOLVER_METRICS</code>. If the <code>resolverLevelMetricsBehavior</code> is
   *          set to <code>FULL_REQUEST_RESOLVER_METRICS</code> instead, <code>metricsConfig</code> will
   *          be ignored. However, you can still set its value.</p>
   *          <p>
   *             <code>metricsConfig</code> can be <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  metricsConfig?: ResolverLevelMetricsConfig | undefined;
}

/**
 * <p>Describes a resolver.</p>
 * @public
 */
export interface Resolver {
  /**
   * <p>The resolver type name.</p>
   * @public
   */
  typeName?: string | undefined;

  /**
   * <p>The resolver field name.</p>
   * @public
   */
  fieldName?: string | undefined;

  /**
   * <p>The resolver data source name.</p>
   * @public
   */
  dataSourceName?: string | undefined;

  /**
   * <p>The resolver Amazon Resource Name (ARN).</p>
   * @public
   */
  resolverArn?: string | undefined;

  /**
   * <p>The request mapping template.</p>
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * <p>The response mapping template.</p>
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is
   *                the default resolver type. You can use a UNIT resolver to run a GraphQL query against
   *                a single data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type. You can
   *                use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a
   *                serial manner. You can use a pipeline resolver to run a GraphQL query against
   *                multiple data sources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  kind?: ResolverKind | undefined;

  /**
   * <p>The <code>PipelineConfig</code>.</p>
   * @public
   */
  pipelineConfig?: PipelineConfig | undefined;

  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned data source.</p>
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * <p>The caching configuration for the resolver.</p>
   * @public
   */
  cachingConfig?: CachingConfig | undefined;

  /**
   * <p>The maximum batching size for a resolver.</p>
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * <p>The <code>resolver</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>Enables or disables enhanced resolver metrics for specified resolvers. Note that
   *             <code>metricsConfig</code> won't be used unless the
   *             <code>resolverLevelMetricsBehavior</code> value is set to
   *             <code>PER_RESOLVER_METRICS</code>. If the <code>resolverLevelMetricsBehavior</code> is
   *          set to <code>FULL_REQUEST_RESOLVER_METRICS</code> instead, <code>metricsConfig</code> will
   *          be ignored. However, you can still set its value.</p>
   *          <p>
   *             <code>metricsConfig</code> can be <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  metricsConfig?: ResolverLevelMetricsConfig | undefined;
}

/**
 * @public
 */
export interface CreateResolverResponse {
  /**
   * <p>The <code>Resolver</code> object.</p>
   * @public
   */
  resolver?: Resolver | undefined;
}

/**
 * @public
 * @enum
 */
export const TypeDefinitionFormat = {
  JSON: "JSON",
  SDL: "SDL",
} as const;

/**
 * @public
 */
export type TypeDefinitionFormat = (typeof TypeDefinitionFormat)[keyof typeof TypeDefinitionFormat];

/**
 * @public
 */
export interface CreateTypeRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p>
   *          <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL
   *             documentation</a>.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>The type format: SDL or JSON.</p>
   * @public
   */
  format: TypeDefinitionFormat | undefined;
}

/**
 * <p>Describes a type.</p>
 * @public
 */
export interface Type {
  /**
   * <p>The type name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type Amazon Resource Name (ARN).</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The type definition.</p>
   * @public
   */
  definition?: string | undefined;

  /**
   * <p>The type format: SDL or JSON.</p>
   * @public
   */
  format?: TypeDefinitionFormat | undefined;
}

/**
 * @public
 */
export interface CreateTypeResponse {
  /**
   * <p>The <code>Type</code> object.</p>
   * @public
   */
  type?: Type | undefined;
}

/**
 * @public
 */
export interface DeleteApiRequest {
  /**
   * <p>The <code>Api</code> ID.</p>
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiResponse {}

/**
 * <p>Represents the input of a <code>DeleteApiCache</code> operation.</p>
 * @public
 */
export interface DeleteApiCacheRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;
}

/**
 * <p>Represents the output of a <code>DeleteApiCache</code> operation.</p>
 * @public
 */
export interface DeleteApiCacheResponse {}

/**
 * @public
 */
export interface DeleteApiKeyRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The ID for the API key.</p>
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
   * <p>The ID of the <code>Api</code> associated with the <code>ChannelNamespace</code>.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The name of the <code>ChannelNamespace</code>.</p>
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
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The name of the data source.</p>
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
   * <p>The domain name.</p>
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
   * <p>The GraphQL API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The <code>Function</code> ID.</p>
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
   * <p>The API ID.</p>
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
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The name of the resolver type.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The resolver field name.</p>
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
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The type name.</p>
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
   * <p>The domain name.</p>
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
   * <p>The identifier of the AppSync Source API. This is generated by the AppSync service. In
   *          most cases, source APIs (especially in your account) only require the API ID value or ARN
   *          of the source API. However, source APIs from other accounts (cross-account use cases)
   *          strictly require the full resource ARN of the source API.</p>
   * @public
   */
  sourceApiIdentifier: string | undefined;

  /**
   * <p>The ID generated by the AppSync service for the source API association.</p>
   * @public
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMergedGraphqlApiResponse {
  /**
   * <p>The state of the source API association.</p>
   * @public
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceGraphqlApiRequest {
  /**
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In
   *          most cases, Merged APIs (especially in your account) only require the API ID value or ARN
   *          of the merged API. However, Merged APIs in other accounts (cross-account use cases)
   *          strictly require the full resource ARN of the merged API.</p>
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * <p>The ID generated by the AppSync service for the source API association.</p>
   * @public
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceGraphqlApiResponse {
  /**
   * <p>The state of the source API association.</p>
   * @public
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus | undefined;
}

/**
 * @public
 */
export interface EvaluateCodeRequest {
  /**
   * <p>The runtime to be used when evaluating the code. Currently, only the
   *             <code>APPSYNC_JS</code> runtime is supported.</p>
   * @public
   */
  runtime: AppSyncRuntime | undefined;

  /**
   * <p>The code definition to be evaluated. Note that <code>code</code> and
   *             <code>runtime</code> are both required for this action. The <code>runtime</code> value
   *          must be <code>APPSYNC_JS</code>.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>The map that holds all of the contextual information for your resolver invocation. A
   *             <code>context</code> is required for this action.</p>
   * @public
   */
  context: string | undefined;

  /**
   * <p>The function within the code to be evaluated. If provided, the valid values are
   *             <code>request</code> and <code>response</code>.</p>
   * @public
   */
  function?: string | undefined;
}

/**
 * <p>Contains the list of errors from a code evaluation response.</p>
 * @public
 */
export interface EvaluateCodeErrorDetail {
  /**
   * <p>The error payload.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Contains the list of <code>CodeError</code> objects.</p>
   * @public
   */
  codeErrors?: CodeError[] | undefined;
}

/**
 * @public
 */
export interface EvaluateCodeResponse {
  /**
   * <p>The result of the evaluation operation.</p>
   * @public
   */
  evaluationResult?: string | undefined;

  /**
   * <p>Contains the payload of the response error.</p>
   * @public
   */
  error?: EvaluateCodeErrorDetail | undefined;

  /**
   * <p>A list of logs that were generated by calls to <code>util.log.info</code> and
   *             <code>util.log.error</code> in the evaluated code.</p>
   * @public
   */
  logs?: string[] | undefined;
}

/**
 * @public
 */
export interface EvaluateMappingTemplateRequest {
  /**
   * <p>The mapping template; this can be a request or response template. A
   *             <code>template</code> is required for this action.</p>
   * @public
   */
  template: string | undefined;

  /**
   * <p>The map that holds all of the contextual information for your resolver invocation. A
   *             <code>context</code> is required for this action.</p>
   * @public
   */
  context: string | undefined;
}

/**
 * <p>Contains the list of errors generated. When using JavaScript, this will apply to the
 *          request or response function evaluation.</p>
 * @public
 */
export interface ErrorDetail {
  /**
   * <p>The error payload.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface EvaluateMappingTemplateResponse {
  /**
   * <p>The mapping template; this can be a request or response template.</p>
   * @public
   */
  evaluationResult?: string | undefined;

  /**
   * <p>The <code>ErrorDetail</code> object.</p>
   * @public
   */
  error?: ErrorDetail | undefined;

  /**
   * <p>A list of logs that were generated by calls to <code>util.log.info</code> and
   *             <code>util.log.error</code> in the evaluated code.</p>
   * @public
   */
  logs?: string[] | undefined;
}

/**
 * <p>Represents the input of a <code>FlushApiCache</code> operation.</p>
 * @public
 */
export interface FlushApiCacheRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;
}

/**
 * <p>Represents the output of a <code>FlushApiCache</code> operation.</p>
 * @public
 */
export interface FlushApiCacheResponse {}

/**
 * @public
 */
export interface GetApiRequest {
  /**
   * <p>The <code>Api</code> ID.</p>
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface GetApiResponse {
  /**
   * <p>The <code>Api</code> object.</p>
   * @public
   */
  api?: Api | undefined;
}

/**
 * @public
 */
export interface GetApiAssociationRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface GetApiAssociationResponse {
  /**
   * <p>The <code>ApiAssociation</code> object.</p>
   * @public
   */
  apiAssociation?: ApiAssociation | undefined;
}

/**
 * <p>Represents the input of a <code>GetApiCache</code> operation.</p>
 * @public
 */
export interface GetApiCacheRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;
}

/**
 * <p>Represents the output of a <code>GetApiCache</code> operation.</p>
 * @public
 */
export interface GetApiCacheResponse {
  /**
   * <p>The <code>ApiCache</code> object.</p>
   * @public
   */
  apiCache?: ApiCache | undefined;
}

/**
 * @public
 */
export interface GetChannelNamespaceRequest {
  /**
   * <p>The <code>Api</code> ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The name of the <code>ChannelNamespace</code>.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetChannelNamespaceResponse {
  /**
   * <p>The <code>ChannelNamespace</code> object.</p>
   * @public
   */
  channelNamespace?: ChannelNamespace | undefined;
}

/**
 * @public
 */
export interface GetDataSourceRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceResponse {
  /**
   * <p>The <code>DataSource</code> object.</p>
   * @public
   */
  dataSource?: DataSource | undefined;
}

/**
 * @public
 */
export interface GetDataSourceIntrospectionRequest {
  /**
   * <p>The introspection ID. Each introspection contains a unique ID that can be used to
   *          reference the instrospection record.</p>
   * @public
   */
  introspectionId: string | undefined;

  /**
   * <p>A boolean flag that determines whether SDL should be generated for introspected types.
   *          If set to <code>true</code>, each model will contain an <code>sdl</code> property that
   *          contains the SDL for that type. The SDL only contains the type data and no additional
   *          metadata or directives. </p>
   * @public
   */
  includeModelsSDL?: boolean | undefined;

  /**
   * <p>Determines the number of types to be returned in a single response before paginating.
   *          This value is typically taken from <code>nextToken</code> value from the previous
   *          response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of introspected types that will be returned in a single
   *          response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The index that was retrieved from the introspected data.</p>
 * @public
 */
export interface DataSourceIntrospectionModelIndex {
  /**
   * <p>The name of the index.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The fields of the index.</p>
   * @public
   */
  fields?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceIntrospectionStatus = {
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type DataSourceIntrospectionStatus =
  (typeof DataSourceIntrospectionStatus)[keyof typeof DataSourceIntrospectionStatus];

/**
 * @public
 */
export interface GetDomainNameRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface GetDomainNameResponse {
  /**
   * <p>The configuration for the <code>DomainName</code>.</p>
   * @public
   */
  domainNameConfig?: DomainNameConfig | undefined;
}

/**
 * @public
 */
export interface GetFunctionRequest {
  /**
   * <p>The GraphQL API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The <code>Function</code> ID.</p>
   * @public
   */
  functionId: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionResponse {
  /**
   * <p>The <code>Function</code> object.</p>
   * @public
   */
  functionConfiguration?: FunctionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetGraphqlApiRequest {
  /**
   * <p>The API ID for the GraphQL API.</p>
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface GetGraphqlApiResponse {
  /**
   * <p>The <code>GraphqlApi</code> object.</p>
   * @public
   */
  graphqlApi?: GraphqlApi | undefined;
}

/**
 * @public
 */
export interface GetGraphqlApiEnvironmentVariablesRequest {
  /**
   * <p>The ID of the API from which the environmental variable list will be retrieved.</p>
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface GetGraphqlApiEnvironmentVariablesResponse {
  /**
   * <p>The payload containing each environmental variable in the <code>"key" : "value"</code>
   *          format.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const OutputType = {
  JSON: "JSON",
  SDL: "SDL",
} as const;

/**
 * @public
 */
export type OutputType = (typeof OutputType)[keyof typeof OutputType];

/**
 * @public
 */
export interface GetIntrospectionSchemaRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The schema format: SDL or JSON.</p>
   * @public
   */
  format: OutputType | undefined;

  /**
   * <p>A flag that specifies whether the schema introspection should contain directives.</p>
   * @public
   */
  includeDirectives?: boolean | undefined;
}

/**
 * @public
 */
export interface GetIntrospectionSchemaResponse {
  /**
   * <p>The schema, in GraphQL Schema Definition Language (SDL) format.</p>
   *          <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL
   *             documentation</a>.</p>
   * @public
   */
  schema?: Uint8Array | undefined;
}

/**
 * <p>The GraphQL schema is not valid.</p>
 * @public
 */
export class GraphQLSchemaException extends __BaseException {
  readonly name: "GraphQLSchemaException" = "GraphQLSchemaException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GraphQLSchemaException, __BaseException>) {
    super({
      name: "GraphQLSchemaException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GraphQLSchemaException.prototype);
  }
}

/**
 * @public
 */
export interface GetResolverRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The resolver type name.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The resolver field name.</p>
   * @public
   */
  fieldName: string | undefined;
}

/**
 * @public
 */
export interface GetResolverResponse {
  /**
   * <p>The <code>Resolver</code> object.</p>
   * @public
   */
  resolver?: Resolver | undefined;
}

/**
 * @public
 */
export interface GetSchemaCreationStatusRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaStatus = {
  Active: "ACTIVE",
  Deleting: "DELETING",
  Failed: "FAILED",
  NotApplicable: "NOT_APPLICABLE",
  Processing: "PROCESSING",
  Success: "SUCCESS",
} as const;

/**
 * @public
 */
export type SchemaStatus = (typeof SchemaStatus)[keyof typeof SchemaStatus];

/**
 * @public
 */
export interface GetSchemaCreationStatusResponse {
  /**
   * <p>The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When
   *          the schema is in the ACTIVE state, you can add data.</p>
   * @public
   */
  status?: SchemaStatus | undefined;

  /**
   * <p>Detailed information about the status of the schema creation operation.</p>
   * @public
   */
  details?: string | undefined;
}

/**
 * @public
 */
export interface GetSourceApiAssociationRequest {
  /**
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In
   *          most cases, Merged APIs (especially in your account) only require the API ID value or ARN
   *          of the merged API. However, Merged APIs in other accounts (cross-account use cases)
   *          strictly require the full resource ARN of the merged API.</p>
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * <p>The ID generated by the AppSync service for the source API association.</p>
   * @public
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface GetSourceApiAssociationResponse {
  /**
   * <p>The <code>SourceApiAssociation</code> object data.</p>
   * @public
   */
  sourceApiAssociation?: SourceApiAssociation | undefined;
}

/**
 * @public
 */
export interface GetTypeRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The type name.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The type format: SDL or JSON.</p>
   * @public
   */
  format: TypeDefinitionFormat | undefined;
}

/**
 * @public
 */
export interface GetTypeResponse {
  /**
   * <p>The <code>Type</code> object.</p>
   * @public
   */
  type?: Type | undefined;
}

/**
 * @public
 */
export interface ListApiKeysRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApiKeysResponse {
  /**
   * <p>The <code>ApiKey</code> objects.</p>
   * @public
   */
  apiKeys?: ApiKey[] | undefined;

  /**
   * <p>An identifier to pass in the next request to this operation to return the next set of
   *          items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApisRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApisResponse {
  /**
   * <p>The <code>Api</code> objects.</p>
   * @public
   */
  apis?: Api[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelNamespacesRequest {
  /**
   * <p>The <code>Api</code> ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListChannelNamespacesResponse {
  /**
   * <p>The <code>ChannelNamespace</code> objects.</p>
   * @public
   */
  channelNamespaces?: ChannelNamespace[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * <p>The <code>DataSource</code> objects.</p>
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * <p>An identifier to pass in the next request to this operation to return the next set of
   *          items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainNamesRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDomainNamesResponse {
  /**
   * <p>Lists configurations for multiple domain names.</p>
   * @public
   */
  domainNameConfigs?: DomainNameConfig[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionsRequest {
  /**
   * <p>The GraphQL API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFunctionsResponse {
  /**
   * <p>A list of <code>Function</code> objects.</p>
   * @public
   */
  functions?: FunctionConfiguration[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Ownership = {
  CURRENT_ACCOUNT: "CURRENT_ACCOUNT",
  OTHER_ACCOUNTS: "OTHER_ACCOUNTS",
} as const;

/**
 * @public
 */
export type Ownership = (typeof Ownership)[keyof typeof Ownership];

/**
 * @public
 */
export interface ListGraphqlApisRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The value that indicates whether the GraphQL API is a standard API
   *          (<code>GRAPHQL</code>) or merged API (<code>MERGED</code>).</p>
   * @public
   */
  apiType?: GraphQLApiType | undefined;

  /**
   * <p>The account owner of the GraphQL API.</p>
   * @public
   */
  owner?: Ownership | undefined;
}

/**
 * @public
 */
export interface ListGraphqlApisResponse {
  /**
   * <p>The <code>GraphqlApi</code> objects.</p>
   * @public
   */
  graphqlApis?: GraphqlApi[] | undefined;

  /**
   * <p>An identifier to pass in the next request to this operation to return the next set of
   *          items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResolversRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The type name.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListResolversResponse {
  /**
   * <p>The <code>Resolver</code> objects.</p>
   * @public
   */
  resolvers?: Resolver[] | undefined;

  /**
   * <p>An identifier to pass in the next request to this operation to return the next set of
   *          items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResolversByFunctionRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The function ID.</p>
   * @public
   */
  functionId: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListResolversByFunctionResponse {
  /**
   * <p>The list of resolvers.</p>
   * @public
   */
  resolvers?: Resolver[] | undefined;

  /**
   * <p>An identifier that you can use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceApiAssociationsRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Describes the ARNs and IDs of associations, Merged APIs, and source APIs.</p>
 * @public
 */
export interface SourceApiAssociationSummary {
  /**
   * <p>The ID generated by the AppSync service for the source API association.</p>
   * @public
   */
  associationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source API association.</p>
   * @public
   */
  associationArn?: string | undefined;

  /**
   * <p>The ID of the AppSync source API.</p>
   * @public
   */
  sourceApiId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AppSync Source API.</p>
   * @public
   */
  sourceApiArn?: string | undefined;

  /**
   * <p>The ID of the AppSync Merged API.</p>
   * @public
   */
  mergedApiId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AppSync Merged API.</p>
   * @public
   */
  mergedApiArn?: string | undefined;

  /**
   * <p>The description field.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceApiAssociationsResponse {
  /**
   * <p>The <code>SourceApiAssociationSummary</code> object data.</p>
   * @public
   */
  sourceApiAssociationSummaries?: SourceApiAssociationSummary[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The <code>GraphqlApi</code> Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A <code>TagMap</code> object.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTypesRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The type format: SDL or JSON.</p>
   * @public
   */
  format: TypeDefinitionFormat | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTypesResponse {
  /**
   * <p>The <code>Type</code> objects.</p>
   * @public
   */
  types?: Type[] | undefined;

  /**
   * <p>An identifier to pass in the next request to this operation to return the next set of
   *          items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypesByAssociationRequest {
  /**
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In
   *          most cases, Merged APIs (especially in your account) only require the API ID value or ARN
   *          of the merged API. However, Merged APIs in other accounts (cross-account use cases)
   *          strictly require the full resource ARN of the merged API.</p>
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * <p>The ID generated by the AppSync service for the source API association.</p>
   * @public
   */
  associationId: string | undefined;

  /**
   * <p>The format type.</p>
   * @public
   */
  format: TypeDefinitionFormat | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want the request to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTypesByAssociationResponse {
  /**
   * <p>The <code>Type</code> objects.</p>
   * @public
   */
  types?: Type[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutGraphqlApiEnvironmentVariablesRequest {
  /**
   * <p>The ID of the API to which the environmental variable list will be written.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The list of environmental variables to add to the API.</p>
   *          <p>When creating an environmental variable key-value pair, it must follow the additional
   *          constraints below:</p>
   *          <ul>
   *             <li>
   *                <p>Keys must begin with a letter.</p>
   *             </li>
   *             <li>
   *                <p>Keys must be at least two characters long.</p>
   *             </li>
   *             <li>
   *                <p>Keys can only contain letters, numbers, and the underscore character
   *                (_).</p>
   *             </li>
   *             <li>
   *                <p>Values can be up to 512 characters long.</p>
   *             </li>
   *             <li>
   *                <p>You can configure up to 50 key-value pairs in a GraphQL API.</p>
   *             </li>
   *          </ul>
   *          <p>You can create a list of environmental variables by adding it to the
   *             <code>environmentVariables</code> payload as a list in the format
   *             <code>\{"key1":"value1","key2":"value2", …\}</code>. Note that each call of the
   *             <code>PutGraphqlApiEnvironmentVariables</code> action will result in the overwriting of
   *          the existing environmental variable list of that API. This means the existing environmental
   *          variables will be lost. To avoid this, you must include all existing and new environmental
   *          variables in the list each time you call this action.</p>
   * @public
   */
  environmentVariables: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutGraphqlApiEnvironmentVariablesResponse {
  /**
   * <p>The payload containing each environmental variable in the <code>"key" : "value"</code>
   *          format.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;
}

/**
 * <p>Contains the metadata required to introspect the RDS cluster.</p>
 * @public
 */
export interface RdsDataApiConfig {
  /**
   * <p>The resource ARN of the RDS cluster.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The secret's ARN that was obtained from Secrets Manager. A secret consists of secret
   *          information, the secret value, plus metadata about the secret. A secret value can be a
   *          string or binary. It typically includes the ARN, secret name and description, policies,
   *          tags, encryption key from the Key Management Service, and key rotation data.</p>
   * @public
   */
  secretArn: string | undefined;

  /**
   * <p>The name of the database in the cluster.</p>
   * @public
   */
  databaseName: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceIntrospectionRequest {
  /**
   * <p>The <code>rdsDataApiConfig</code> object data.</p>
   * @public
   */
  rdsDataApiConfig?: RdsDataApiConfig | undefined;
}

/**
 * @public
 */
export interface StartDataSourceIntrospectionResponse {
  /**
   * <p>The introspection ID. Each introspection contains a unique ID that can be used to
   *          reference the instrospection record.</p>
   * @public
   */
  introspectionId?: string | undefined;

  /**
   * <p>The status of the introspection during creation. By default, when a new instrospection
   *          has been created, the status will be set to <code>PROCESSING</code>. Once the operation has
   *          been completed, the status will change to <code>SUCCESS</code> or <code>FAILED</code>
   *          depending on how the data was parsed. A <code>FAILED</code> operation will return an error
   *          and its details as an <code>introspectionStatusDetail</code>.</p>
   * @public
   */
  introspectionStatus?: DataSourceIntrospectionStatus | undefined;

  /**
   * <p>The error detail field. When a <code>FAILED</code>
   *             <code>introspectionStatus</code> is returned, the <code>introspectionStatusDetail</code>
   *          will also return the exact error that was generated during the operation.</p>
   * @public
   */
  introspectionStatusDetail?: string | undefined;
}

/**
 * @public
 */
export interface StartSchemaCreationRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The schema definition, in GraphQL schema language format.</p>
   * @public
   */
  definition: Uint8Array | undefined;
}

/**
 * @public
 */
export interface StartSchemaCreationResponse {
  /**
   * <p>The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When
   *          the schema is in the ACTIVE state, you can add data.</p>
   * @public
   */
  status?: SchemaStatus | undefined;
}

/**
 * @public
 */
export interface StartSchemaMergeRequest {
  /**
   * <p>The ID generated by the AppSync service for the source API association.</p>
   * @public
   */
  associationId: string | undefined;

  /**
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In
   *          most cases, Merged APIs (especially in your account) only require the API ID value or ARN
   *          of the merged API. However, Merged APIs in other accounts (cross-account use cases)
   *          strictly require the full resource ARN of the merged API.</p>
   * @public
   */
  mergedApiIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartSchemaMergeResponse {
  /**
   * <p>The state of the source API association.</p>
   * @public
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The <code>GraphqlApi</code> Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A <code>TagMap</code> object.</p>
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
   * <p>The <code>GraphqlApi</code> Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of <code>TagKey</code> objects.</p>
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
   * <p>The <code>Api</code> ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The name of the Api.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The owner contact information for the <code>Api</code>.</p>
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * <p>The new event configuration. This includes the default authorization configuration for
   *          connecting, publishing, and subscribing to an Event API.</p>
   * @public
   */
  eventConfig?: EventConfig | undefined;
}

/**
 * @public
 */
export interface UpdateApiResponse {
  /**
   * <p>The <code>Api</code> object.</p>
   * @public
   */
  api?: Api | undefined;
}

/**
 * <p>Represents the input of a <code>UpdateApiCache</code> operation.</p>
 * @public
 */
export interface UpdateApiCacheRequest {
  /**
   * <p>The GraphQL API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are 1–3,600 seconds.</p>
   * @public
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
   * @public
   */
  apiCachingBehavior: ApiCachingBehavior | undefined;

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
   * @public
   */
  type: ApiCacheType | undefined;

  /**
   * <p>Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics
   *          include:</p>
   *          <ul>
   *             <li>
   *                <p>NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the
   *                throughput exceeded the aggregated bandwidth limit. This is useful for diagnosing
   *                bottlenecks in a cache configuration.</p>
   *             </li>
   *             <li>
   *                <p>EngineCPUUtilization: The CPU utilization (percentage) allocated to the Redis
   *                process. This is useful for diagnosing bottlenecks in a cache
   *                configuration.</p>
   *             </li>
   *          </ul>
   *          <p>Metrics will be recorded by API ID. You can set the value to <code>ENABLED</code> or
   *             <code>DISABLED</code>.</p>
   * @public
   */
  healthMetricsConfig?: CacheHealthMetricsConfig | undefined;
}

/**
 * <p>Represents the output of a <code>UpdateApiCache</code> operation.</p>
 * @public
 */
export interface UpdateApiCacheResponse {
  /**
   * <p>The <code>ApiCache</code> object.</p>
   * @public
   */
  apiCache?: ApiCache | undefined;
}

/**
 * @public
 */
export interface UpdateApiKeyRequest {
  /**
   * <p>The ID for the GraphQL API.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The API key ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A description of the purpose of the API key.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>From the update time, the time after which the API key expires. The date is represented
   *          as seconds since the epoch. For more information, see .</p>
   * @public
   */
  expires?: number | undefined;
}

/**
 * @public
 */
export interface UpdateApiKeyResponse {
  /**
   * <p>The API key.</p>
   * @public
   */
  apiKey?: ApiKey | undefined;
}

/**
 * @public
 */
export interface UpdateChannelNamespaceRequest {
  /**
   * <p>The <code>Api</code> ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The name of the <code>ChannelNamespace</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The authorization mode to use for subscribing to messages on the channel namespace. This
   *          configuration overrides the default <code>Api</code> authorization configuration.</p>
   * @public
   */
  subscribeAuthModes?: AuthMode[] | undefined;

  /**
   * <p>The authorization mode to use for publishing messages on the channel namespace. This
   *          configuration overrides the default <code>Api</code> authorization configuration.</p>
   * @public
   */
  publishAuthModes?: AuthMode[] | undefined;

  /**
   * <p>The event handler functions that run custom business logic to process published events
   *          and subscribe requests.</p>
   * @public
   */
  codeHandlers?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelNamespaceResponse {
  /**
   * <p>The <code>ChannelNamespace</code> object.</p>
   * @public
   */
  channelNamespace?: ChannelNamespace | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The new name for the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new description for the data source.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The new data source type.</p>
   * @public
   */
  type: DataSourceType | undefined;

  /**
   * <p>The new service role Amazon Resource Name (ARN) for the data source.</p>
   * @public
   */
  serviceRoleArn?: string | undefined;

  /**
   * <p>The new Amazon DynamoDB configuration.</p>
   * @public
   */
  dynamodbConfig?: DynamodbDataSourceConfig | undefined;

  /**
   * <p>The new Lambda configuration.</p>
   * @public
   */
  lambdaConfig?: LambdaDataSourceConfig | undefined;

  /**
   * <p>The new OpenSearch configuration.</p>
   *          <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This
   *          configuration is deprecated. Instead, use <a>UpdateDataSourceRequest$openSearchServiceConfig</a> to update an OpenSearch data source.</p>
   * @public
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig | undefined;

  /**
   * <p>The new OpenSearch configuration.</p>
   * @public
   */
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig | undefined;

  /**
   * <p>The new HTTP endpoint configuration.</p>
   * @public
   */
  httpConfig?: HttpDataSourceConfig | undefined;

  /**
   * <p>The new relational database configuration.</p>
   * @public
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | undefined;

  /**
   * <p>The new Amazon EventBridge settings.</p>
   * @public
   */
  eventBridgeConfig?: EventBridgeDataSourceConfig | undefined;

  /**
   * <p>Enables or disables enhanced data source metrics for specified data sources. Note that
   *             <code>metricsConfig</code> won't be used unless the
   *             <code>dataSourceLevelMetricsBehavior</code> value is set to
   *             <code>PER_DATA_SOURCE_METRICS</code>. If the <code>dataSourceLevelMetricsBehavior</code>
   *          is set to <code>FULL_REQUEST_DATA_SOURCE_METRICS</code> instead, <code>metricsConfig</code>
   *          will be ignored. However, you can still set its value.</p>
   *          <p>
   *             <code>metricsConfig</code> can be <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  metricsConfig?: DataSourceLevelMetricsConfig | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * <p>The updated <code>DataSource</code> object.</p>
   * @public
   */
  dataSource?: DataSource | undefined;
}

/**
 * @public
 */
export interface UpdateDomainNameRequest {
  /**
   * <p>The domain name.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>A description of the <code>DomainName</code>.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainNameResponse {
  /**
   * <p>The configuration for the <code>DomainName</code>.</p>
   * @public
   */
  domainNameConfig?: DomainNameConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionRequest {
  /**
   * <p>The GraphQL API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The <code>Function</code> name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The <code>Function</code> description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The function ID.</p>
   * @public
   */
  functionId: string | undefined;

  /**
   * <p>The <code>Function</code>
   *             <code>DataSource</code> name.</p>
   * @public
   */
  dataSourceName: string | undefined;

  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * <p>The <code>Function</code> request mapping template.</p>
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * <p>The <code>version</code> of the request mapping template. Currently, the supported value
   *          is 2018-05-29. Note that when using VTL and mapping templates, the
   *             <code>functionVersion</code> is required.</p>
   * @public
   */
  functionVersion?: string | undefined;

  /**
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the
   *          resolver is invoked.</p>
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * <p>The maximum batching size for a resolver.</p>
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * <p>The <code>function</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   * @public
   */
  code?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionResponse {
  /**
   * <p>The <code>Function</code> object.</p>
   * @public
   */
  functionConfiguration?: FunctionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateGraphqlApiRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The new name for the <code>GraphqlApi</code> object.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon CloudWatch Logs configuration for the <code>GraphqlApi</code> object.</p>
   * @public
   */
  logConfig?: LogConfig | undefined;

  /**
   * <p>The new authentication type for the <code>GraphqlApi</code> object.</p>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>The new Amazon Cognito user pool configuration for the <code>~GraphqlApi</code>
   *          object.</p>
   * @public
   */
  userPoolConfig?: UserPoolConfig | undefined;

  /**
   * <p>The OpenID Connect configuration for the <code>GraphqlApi</code> object.</p>
   * @public
   */
  openIDConnectConfig?: OpenIDConnectConfig | undefined;

  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   * @public
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined;

  /**
   * <p>A flag indicating whether to use X-Ray tracing for the
   *             <code>GraphqlApi</code>.</p>
   * @public
   */
  xrayEnabled?: boolean | undefined;

  /**
   * <p>Configuration for Lambda function authorization.</p>
   * @public
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig | undefined;

  /**
   * <p>The Identity and Access Management service role ARN for a merged API. The AppSync
   *          service assumes this role on behalf of the Merged API to validate access to source APIs at
   *          runtime and to prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with
   *          the source API changes automatically.</p>
   * @public
   */
  mergedApiExecutionRoleArn?: string | undefined;

  /**
   * <p>The owner contact information for an API resource.</p>
   *          <p>This field accepts any string input with a length of 0 - 256 characters.</p>
   * @public
   */
  ownerContact?: string | undefined;

  /**
   * <p>Sets the value of the GraphQL API to enable (<code>ENABLED</code>) or disable
   *             (<code>DISABLED</code>) introspection. If no value is provided, the introspection
   *          configuration will be set to <code>ENABLED</code> by default. This field will produce an
   *          error if the operation attempts to use the introspection feature while this field is
   *          disabled.</p>
   *          <p>For more information about introspection, see <a href="https://graphql.org/learn/introspection/">GraphQL introspection</a>.</p>
   * @public
   */
  introspectionConfig?: GraphQLApiIntrospectionConfig | undefined;

  /**
   * <p>The maximum depth a query can have in a single request. Depth refers to the amount of
   *          nested levels allowed in the body of query. The default value is <code>0</code> (or
   *          unspecified), which indicates there's no depth limit. If you set a limit, it can be between
   *             <code>1</code> and <code>75</code> nested levels. This field will produce a limit error
   *          if the operation falls out of bounds.</p>
   *          <p>Note that fields can still be set to nullable or non-nullable. If a non-nullable field
   *          produces an error, the error will be thrown upwards to the first nullable field
   *          available.</p>
   * @public
   */
  queryDepthLimit?: number | undefined;

  /**
   * <p>The maximum number of resolvers that can be invoked in a single request. The default
   *          value is <code>0</code> (or unspecified), which will set the limit to <code>10000</code>.
   *          When specified, the limit value can be between <code>1</code> and <code>10000</code>. This
   *          field will produce a limit error if the operation falls out of bounds.</p>
   * @public
   */
  resolverCountLimit?: number | undefined;

  /**
   * <p>The <code>enhancedMetricsConfig</code> object.</p>
   * @public
   */
  enhancedMetricsConfig?: EnhancedMetricsConfig | undefined;
}

/**
 * @public
 */
export interface UpdateGraphqlApiResponse {
  /**
   * <p>The updated <code>GraphqlApi</code> object.</p>
   * @public
   */
  graphqlApi?: GraphqlApi | undefined;
}

/**
 * @public
 */
export interface UpdateResolverRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The new type name.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The new field name.</p>
   * @public
   */
  fieldName: string | undefined;

  /**
   * <p>The new data source name.</p>
   * @public
   */
  dataSourceName?: string | undefined;

  /**
   * <p>The new request mapping template.</p>
   *          <p>A resolver uses a request mapping template to convert a GraphQL expression into a format
   *          that a data source can understand. Mapping templates are written in Apache Velocity
   *          Template Language (VTL).</p>
   *          <p>VTL request mapping templates are optional when using an Lambda data
   *          source. For all other data sources, VTL request and response mapping templates are
   *          required.</p>
   * @public
   */
  requestMappingTemplate?: string | undefined;

  /**
   * <p>The new response mapping template.</p>
   * @public
   */
  responseMappingTemplate?: string | undefined;

  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is
   *                the default resolver type. You can use a UNIT resolver to run a GraphQL query against
   *                a single data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type. You can
   *                use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a
   *                serial manner. You can use a pipeline resolver to run a GraphQL query against
   *                multiple data sources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  kind?: ResolverKind | undefined;

  /**
   * <p>The <code>PipelineConfig</code>.</p>
   * @public
   */
  pipelineConfig?: PipelineConfig | undefined;

  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned data source.</p>
   * @public
   */
  syncConfig?: SyncConfig | undefined;

  /**
   * <p>The caching configuration for the resolver.</p>
   * @public
   */
  cachingConfig?: CachingConfig | undefined;

  /**
   * <p>The maximum batching size for a resolver.</p>
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   * @public
   */
  runtime?: AppSyncRuntime | undefined;

  /**
   * <p>The <code>resolver</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>Enables or disables enhanced resolver metrics for specified resolvers. Note that
   *             <code>metricsConfig</code> won't be used unless the
   *             <code>resolverLevelMetricsBehavior</code> value is set to
   *             <code>PER_RESOLVER_METRICS</code>. If the <code>resolverLevelMetricsBehavior</code> is
   *          set to <code>FULL_REQUEST_RESOLVER_METRICS</code> instead, <code>metricsConfig</code> will
   *          be ignored. However, you can still set its value.</p>
   *          <p>
   *             <code>metricsConfig</code> can be <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  metricsConfig?: ResolverLevelMetricsConfig | undefined;
}

/**
 * @public
 */
export interface UpdateResolverResponse {
  /**
   * <p>The updated <code>Resolver</code> object.</p>
   * @public
   */
  resolver?: Resolver | undefined;
}

/**
 * @public
 */
export interface UpdateSourceApiAssociationRequest {
  /**
   * <p>The ID generated by the AppSync service for the source API association.</p>
   * @public
   */
  associationId: string | undefined;

  /**
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In
   *          most cases, Merged APIs (especially in your account) only require the API ID value or ARN
   *          of the merged API. However, Merged APIs in other accounts (cross-account use cases)
   *          strictly require the full resource ARN of the merged API.</p>
   * @public
   */
  mergedApiIdentifier: string | undefined;

  /**
   * <p>The description field.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The <code>SourceApiAssociationConfig</code> object data.</p>
   * @public
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig | undefined;
}

/**
 * @public
 */
export interface UpdateSourceApiAssociationResponse {
  /**
   * <p>The <code>SourceApiAssociation</code> object data.</p>
   * @public
   */
  sourceApiAssociation?: SourceApiAssociation | undefined;
}

/**
 * @public
 */
export interface UpdateTypeRequest {
  /**
   * <p>The API ID.</p>
   * @public
   */
  apiId: string | undefined;

  /**
   * <p>The new type name.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The new definition.</p>
   * @public
   */
  definition?: string | undefined;

  /**
   * <p>The new type format: SDL or JSON.</p>
   * @public
   */
  format: TypeDefinitionFormat | undefined;
}

/**
 * @public
 */
export interface UpdateTypeResponse {
  /**
   * <p>The updated <code>Type</code> object.</p>
   * @public
   */
  type?: Type | undefined;
}

/**
 * <p>Represents the type data for each field retrieved from the introspection.</p>
 * @public
 */
export interface DataSourceIntrospectionModelFieldType {
  /**
   * <p>Specifies the classification of data. For example, this could be set to values like
   *             <code>Scalar</code> or <code>NonNull</code> to indicate a fundamental property of the
   *          field.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Scalar</code>: Indicates the value is a primitive type
   *                (scalar).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NonNull</code>: Indicates the field cannot be
   *                <code>null</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>List</code>: Indicates the field contains a list.</p>
   *             </li>
   *          </ul>
   * @public
   */
  kind?: string | undefined;

  /**
   * <p>The name of the data type that represents the field. For example, <code>String</code> is
   *          a valid <code>name</code> value.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The <code>DataSourceIntrospectionModelFieldType</code> object data. The
   *             <code>type</code> is only present if
   *             <code>DataSourceIntrospectionModelFieldType.kind</code> is set to <code>NonNull</code>
   *          or <code>List</code>. </p>
   *          <p>The <code>type</code> typically contains its own <code>kind</code> and <code>name</code>
   *          fields to represent the actual type data. For instance, <code>type</code> could contain a
   *             <code>kind</code> value of <code>Scalar</code> with a <code>name</code> value of
   *             <code>String</code>. The values <code>Scalar</code> and <code>String</code> will be
   *          collectively stored in the <code>values</code> field.</p>
   * @public
   */
  type?: DataSourceIntrospectionModelFieldType | undefined;

  /**
   * <p>The values of the <code>type</code> field. This field represents the AppSync data type
   *          equivalent of the introspected field.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>Represents the fields that were retrieved from the introspected data.</p>
 * @public
 */
export interface DataSourceIntrospectionModelField {
  /**
   * <p>The name of the field that was retrieved from the introspected data.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The <code>DataSourceIntrospectionModelFieldType</code> object data.</p>
   * @public
   */
  type?: DataSourceIntrospectionModelFieldType | undefined;

  /**
   * <p>The length value of the introspected field.</p>
   * @public
   */
  length?: number | undefined;
}

/**
 * <p>Contains the introspected data that was retrieved from the data source.</p>
 * @public
 */
export interface DataSourceIntrospectionModel {
  /**
   * <p>The name of the model. For example, this could be the name of a single table in a
   *          database.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The <code>DataSourceIntrospectionModelField</code> object data.</p>
   * @public
   */
  fields?: DataSourceIntrospectionModelField[] | undefined;

  /**
   * <p>The primary key stored as a <code>DataSourceIntrospectionModelIndex</code>
   *          object.</p>
   * @public
   */
  primaryKey?: DataSourceIntrospectionModelIndex | undefined;

  /**
   * <p>The array of <code>DataSourceIntrospectionModelIndex</code> objects.</p>
   * @public
   */
  indexes?: DataSourceIntrospectionModelIndex[] | undefined;

  /**
   * <p>Contains the output of the SDL that was generated from the introspected types. This is
   *          controlled by the <code>includeModelsSDL</code> parameter of the
   *             <code>GetDataSourceIntrospection</code> operation.</p>
   * @public
   */
  sdl?: string | undefined;
}

/**
 * <p>Represents the output of a <code>DataSourceIntrospectionResult</code>. This is the
 *          populated result of a <code>GetDataSourceIntrospection</code> operation.</p>
 * @public
 */
export interface DataSourceIntrospectionResult {
  /**
   * <p>The array of <code>DataSourceIntrospectionModel</code> objects.</p>
   * @public
   */
  models?: DataSourceIntrospectionModel[] | undefined;

  /**
   * <p>Determines the number of types to be returned in a single response before paginating.
   *          This value is typically taken from <code>nextToken</code> value from the previous
   *          response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceIntrospectionResponse {
  /**
   * <p>The introspection ID. Each introspection contains a unique ID that can be used to
   *          reference the instrospection record.</p>
   * @public
   */
  introspectionId?: string | undefined;

  /**
   * <p>The status of the introspection during retrieval. By default, when a new instrospection
   *          is being retrieved, the status will be set to <code>PROCESSING</code>. Once the operation
   *          has been completed, the status will change to <code>SUCCESS</code> or <code>FAILED</code>
   *          depending on how the data was parsed. A <code>FAILED</code> operation will return an error
   *          and its details as an <code>introspectionStatusDetail</code>.</p>
   * @public
   */
  introspectionStatus?: DataSourceIntrospectionStatus | undefined;

  /**
   * <p>The error detail field. When a <code>FAILED</code>
   *             <code>introspectionStatus</code> is returned, the <code>introspectionStatusDetail</code>
   *          will also return the exact error that was generated during the operation.</p>
   * @public
   */
  introspectionStatusDetail?: string | undefined;

  /**
   * <p>The <code>DataSourceIntrospectionResult</code> object data.</p>
   * @public
   */
  introspectionResult?: DataSourceIntrospectionResult | undefined;
}
