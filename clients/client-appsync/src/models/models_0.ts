// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppSyncServiceException as __BaseException } from "./AppSyncServiceException";

/**
 * @public
 * <p>You don't have access to perform this operation on this resource.</p>
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
 * @public
 * <p>A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync
 *          API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a
 *          time.</p>
 */
export interface LambdaAuthorizerConfig {
  /**
   * @public
   * <p>The number of seconds a response should be cached for. The default is 0 seconds, which
   *          disables caching. If you don't specify a value for
   *             <code>authorizerResultTtlInSeconds</code>, the default value is used. The maximum value
   *          is one hour (3600 seconds). The Lambda function can override this by returning
   *          a <code>ttlOverride</code> key in its response.</p>
   */
  authorizerResultTtlInSeconds?: number;

  /**
   * @public
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
   */
  authorizerUri: string | undefined;

  /**
   * @public
   * <p>A regular expression for validation of tokens before the Lambda function is
   *          called.</p>
   */
  identityValidationExpression?: string;
}

/**
 * @public
 * <p>Describes an OpenID Connect (OIDC) configuration.</p>
 */
export interface OpenIDConnectConfig {
  /**
   * @public
   * <p>The issuer for the OIDC configuration. The issuer returned by discovery must exactly
   *          match the value of <code>iss</code> in the ID token.</p>
   */
  issuer: string | undefined;

  /**
   * @public
   * <p>The client identifier of the relying party at the OpenID identity provider. This
   *          identifier is typically obtained when the relying party is registered with the OpenID
   *          identity provider. You can specify a regular expression so that AppSync can
   *          validate against multiple client identifiers at a time.</p>
   */
  clientId?: string;

  /**
   * @public
   * <p>The number of milliseconds that a token is valid after it's issued to a user.</p>
   */
  iatTTL?: number;

  /**
   * @public
   * <p>The number of milliseconds that a token is valid after being authenticated.</p>
   */
  authTTL?: number;
}

/**
 * @public
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 */
export interface CognitoUserPoolConfig {
  /**
   * @public
   * <p>The user pool ID.</p>
   */
  userPoolId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region in which the user pool was created.</p>
   */
  awsRegion: string | undefined;

  /**
   * @public
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client
   *          ID. If this value isn't set, no filtering is applied.</p>
   */
  appIdClientRegex?: string;
}

/**
 * @public
 * <p>Describes an additional authentication provider.</p>
 */
export interface AdditionalAuthenticationProvider {
  /**
   * @public
   * <p>The authentication type: API key, Identity and Access Management (IAM), OpenID
   *          Connect (OIDC), Amazon Cognito user pools, or Lambda.</p>
   */
  authenticationType?: AuthenticationType;

  /**
   * @public
   * <p>The OIDC configuration.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;

  /**
   * @public
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: CognitoUserPoolConfig;

  /**
   * @public
   * <p>Configuration for Lambda function authorization.</p>
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
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
 * @public
 * <p>Describes an <code>ApiAssociation</code> object.</p>
 */
export interface ApiAssociation {
  /**
   * @public
   * <p>The domain name.</p>
   */
  domainName?: string;

  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId?: string;

  /**
   * @public
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
   */
  associationStatus?: AssociationStatus;

  /**
   * @public
   * <p>Details about the last deployment status.</p>
   */
  deploymentDetail?: string;
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
 * @public
 * <p>The <code>ApiCache</code> object.</p>
 */
export interface ApiCache {
  /**
   * @public
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are 1–3,600 seconds.</p>
   */
  ttl?: number;

  /**
   * @public
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
  apiCachingBehavior?: ApiCachingBehavior;

  /**
   * @public
   * <p>Transit encryption flag when connecting to cache. You cannot update this setting after
   *          creation.</p>
   */
  transitEncryptionEnabled?: boolean;

  /**
   * @public
   * <p>At-rest encryption flag for cache. You cannot update this setting after creation.</p>
   */
  atRestEncryptionEnabled?: boolean;

  /**
   * @public
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
  type?: ApiCacheType;

  /**
   * @public
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
  status?: ApiCacheStatus;
}

/**
 * @public
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
 */
export interface ApiKey {
  /**
   * @public
   * <p>The API key ID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>A description of the purpose of the API key.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The time after which the API key expires. The date is represented as seconds since the
   *          epoch, rounded down to the nearest hour.</p>
   */
  expires?: number;

  /**
   * @public
   * <p>The time after which the API key is deleted. The date is represented as seconds since
   *          the epoch, rounded down to the nearest hour.</p>
   */
  deletes?: number;
}

/**
 * @public
 * <p>The API key exceeded a limit. Try your request again.</p>
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
 * @public
 * <p>The API key expiration must be set to a value between 1 and 365 days from creation (for
 *             <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>
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
 * @public
 * <p>The GraphQL API exceeded a limit. Try your request again.</p>
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
 * @public
 * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
 *          that if a runtime is specified, code must also be specified.</p>
 */
export interface AppSyncRuntime {
  /**
   * @public
   * <p>The <code>name</code> of the runtime to use. Currently, the only allowed value is
   *             <code>APPSYNC_JS</code>.</p>
   */
  name: RuntimeName | undefined;

  /**
   * @public
   * <p>The <code>version</code> of the runtime to use. Currently, the only allowed version is
   *             <code>1.0.0</code>.</p>
   */
  runtimeVersion: string | undefined;
}

/**
 * @public
 */
export interface AssociateApiRequest {
  /**
   * @public
   * <p>The domain name.</p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p>The API ID. Private APIs can not be associated with custom domains.</p>
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface AssociateApiResponse {
  /**
   * @public
   * <p>The <code>ApiAssociation</code> object.</p>
   */
  apiAssociation?: ApiAssociation;
}

/**
 * @public
 * <p>Describes the location of the error in a code sample.</p>
 */
export interface CodeErrorLocation {
  /**
   * @public
   * <p>The line number in the code. Defaults to <code>0</code> if unknown.</p>
   */
  line?: number;

  /**
   * @public
   * <p>The column number in the code. Defaults to <code>0</code> if unknown.</p>
   */
  column?: number;

  /**
   * @public
   * <p>The span/length of the error. Defaults to <code>-1</code> if unknown.</p>
   */
  span?: number;
}

/**
 * @public
 * <p>Describes an AppSync error.</p>
 */
export interface CodeError {
  /**
   * @public
   * <p>The type of code error. </p>
   *          <p>Examples include, but aren't limited to: <code>LINT_ERROR</code>,
   *             <code>PARSER_ERROR</code>.</p>
   */
  errorType?: string;

  /**
   * @public
   * <p>A user presentable error.</p>
   *          <p>Examples include, but aren't limited to: <code>Parsing error: Unterminated string
   *             literal</code>.</p>
   */
  value?: string;

  /**
   * @public
   * <p>The line, column, and span location of the error in the code.</p>
   */
  location?: CodeErrorLocation;
}

/**
 * @public
 * <p>Provides further details for the reason behind the bad request. For reason type
 *             <code>CODE_ERROR</code>, the detail will contain a list of code errors.</p>
 */
export interface BadRequestDetail {
  /**
   * @public
   * <p>Contains the list of errors in the request.</p>
   */
  codeErrors?: CodeError[];
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
 * @public
 * <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Provides context for the cause of the bad request. The only supported value is
   *             <code>CODE_ERROR</code>.</p>
   */
  reason?: BadRequestReason;

  /**
   * @public
   * <p>Provides further details for the reason behind the bad request. For reason type
   *             <code>CODE_ERROR</code>, the detail will contain a list of code errors.</p>
   */
  detail?: BadRequestDetail;

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
 * @public
 * <p>An internal AppSync error occurred. Try your request again.</p>
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
 * @public
 * <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
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
 * @public
 * <p>Describes properties used to specify configurations related to a source API.</p>
 */
export interface SourceApiAssociationConfig {
  /**
   * @public
   * <p>The property that indicates which merging option is enabled in the source API association.</p>
   *          <p>Valid merge types are <code>MANUAL_MERGE</code> (default) and <code>AUTO_MERGE</code>. Manual merges are the
   *          default behavior and require the user to trigger any changes from the source APIs to the merged API manually.
   *          Auto merges subscribe the merged API to the changes performed on the source APIs so that any change in the
   *          source APIs are also made to the merged API. Auto merges use <code>MergedApiExecutionRoleArn</code> to perform
   *          merge operations.</p>
   */
  mergeType?: MergeType;
}

/**
 * @public
 */
export interface AssociateMergedGraphqlApiRequest {
  /**
   * @public
   * <p>The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source
   *          APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs
   *          from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.</p>
   */
  sourceApiIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.</p>
   */
  mergedApiIdentifier: string | undefined;

  /**
   * @public
   * <p>The description field.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The <code>SourceApiAssociationConfig</code> object data.</p>
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig;
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
 * @public
 * <p>Describes the configuration of a source API. A source API is a GraphQL API that is linked to a merged API.
 *          There can be multiple source APIs attached to each merged API.
 *          When linked to a merged API, the source API's schema, data sources, and resolvers will be combined with other linked source API data to form a new, singular API.
 *          </p>
 *          <p>Source APIs can originate from your account or from other accounts via Amazon Web Services Resource Access Manager. For more
 *          information about sharing resources from other accounts, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">What is Amazon Web Services Resource Access
 *             Manager?</a> in the <i>Amazon Web Services Resource Access Manager</i> guide.</p>
 */
export interface SourceApiAssociation {
  /**
   * @public
   * <p>The ID generated by the AppSync service for the source API association.</p>
   */
  associationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source API association.</p>
   */
  associationArn?: string;

  /**
   * @public
   * <p>The ID of the AppSync source API.</p>
   */
  sourceApiId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AppSync source API.</p>
   */
  sourceApiArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AppSync Merged API.</p>
   */
  mergedApiArn?: string;

  /**
   * @public
   * <p>The ID of the AppSync Merged API.</p>
   */
  mergedApiId?: string;

  /**
   * @public
   * <p>The description field.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The <code>SourceApiAssociationConfig</code> object data.</p>
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig;

  /**
   * @public
   * <p>The state of the source API association.</p>
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus;

  /**
   * @public
   * <p>The detailed message related to the current state of the source API association.</p>
   */
  sourceApiAssociationStatusDetail?: string;

  /**
   * @public
   * <p>The datetime value of the last successful merge of the source API association. The result will be in UTC
   *          format and your local time zone.</p>
   */
  lastSuccessfulMergeDate?: Date;
}

/**
 * @public
 */
export interface AssociateMergedGraphqlApiResponse {
  /**
   * @public
   * <p>The <code>SourceApiAssociation</code> object data.</p>
   */
  sourceApiAssociation?: SourceApiAssociation;
}

/**
 * @public
 * <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
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
 * @public
 * <p>The request exceeded a limit. Try your request again.</p>
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
 * @public
 * <p>You aren't authorized to perform this operation.</p>
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
   * @public
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.</p>
   */
  mergedApiIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source
   *          APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs
   *          from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.</p>
   */
  sourceApiIdentifier: string | undefined;

  /**
   * @public
   * <p>The description field.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The <code>SourceApiAssociationConfig</code> object data.</p>
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig;
}

/**
 * @public
 */
export interface AssociateSourceGraphqlApiResponse {
  /**
   * @public
   * <p>The <code>SourceApiAssociation</code> object data.</p>
   */
  sourceApiAssociation?: SourceApiAssociation;
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
 * @public
 * <p>The Identity and Access Management (IAM) configuration.</p>
 */
export interface AwsIamConfig {
  /**
   * @public
   * <p>The signing Amazon Web Services Region for IAM authorization.</p>
   */
  signingRegion?: string;

  /**
   * @public
   * <p>The signing service name for IAM authorization.</p>
   */
  signingServiceName?: string;
}

/**
 * @public
 * <p>The authorization configuration in case the HTTP endpoint requires authorization.</p>
 */
export interface AuthorizationConfig {
  /**
   * @public
   * <p>The authorization type that the HTTP endpoint requires.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>AWS_IAM</b>: The authorization type is Signature
   *                Version 4 (SigV4).</p>
   *             </li>
   *          </ul>
   */
  authorizationType: AuthorizationType | undefined;

  /**
   * @public
   * <p>The Identity and Access Management (IAM) settings.</p>
   */
  awsIamConfig?: AwsIamConfig;
}

/**
 * @public
 * <p>Represents the input of a <code>CreateApiCache</code> operation.</p>
 */
export interface CreateApiCacheRequest {
  /**
   * @public
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are 1–3,600 seconds.</p>
   */
  ttl: number | undefined;

  /**
   * @public
   * <p>Transit encryption flag when connecting to cache. You cannot update this setting after
   *          creation.</p>
   */
  transitEncryptionEnabled?: boolean;

  /**
   * @public
   * <p>At-rest encryption flag for cache. You cannot update this setting after creation.</p>
   */
  atRestEncryptionEnabled?: boolean;

  /**
   * @public
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
  apiCachingBehavior: ApiCachingBehavior | undefined;

  /**
   * @public
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
  type: ApiCacheType | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>CreateApiCache</code> operation.</p>
 */
export interface CreateApiCacheResponse {
  /**
   * @public
   * <p>The <code>ApiCache</code> object.</p>
   */
  apiCache?: ApiCache;
}

/**
 * @public
 */
export interface CreateApiKeyRequest {
  /**
   * @public
   * <p>The ID for your GraphQL API.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>A description of the purpose of the API key.</p>
   */
  description?: string;

  /**
   * @public
   * <p>From the creation time, the time after which the API key expires. The date is
   *          represented as seconds since the epoch, rounded down to the nearest hour. The default value
   *          for this parameter is 7 days from creation time. For more information, see .</p>
   */
  expires?: number;
}

/**
 * @public
 */
export interface CreateApiKeyResponse {
  /**
   * @public
   * <p>The API key.</p>
   */
  apiKey?: ApiKey;
}

/**
 * @public
 * <p>Describes a Delta Sync configuration.</p>
 */
export interface DeltaSyncConfig {
  /**
   * @public
   * <p>The number of minutes that an Item is stored in the data source.</p>
   */
  baseTableTTL?: number;

  /**
   * @public
   * <p>The Delta Sync table name.</p>
   */
  deltaSyncTableName?: string;

  /**
   * @public
   * <p>The number of minutes that a Delta Sync log entry is stored in the Delta Sync
   *          table.</p>
   */
  deltaSyncTableTTL?: number;
}

/**
 * @public
 * <p>Describes an Amazon DynamoDB data source configuration.</p>
 */
export interface DynamodbDataSourceConfig {
  /**
   * @public
   * <p>The table name.</p>
   */
  tableName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region.</p>
   */
  awsRegion: string | undefined;

  /**
   * @public
   * <p>Set to TRUE to use Amazon Cognito credentials with this data source.</p>
   */
  useCallerCredentials?: boolean;

  /**
   * @public
   * <p>The <code>DeltaSyncConfig</code> for a versioned data source.</p>
   */
  deltaSyncConfig?: DeltaSyncConfig;

  /**
   * @public
   * <p>Set to TRUE to use Conflict Detection and Resolution with this data source.</p>
   */
  versioned?: boolean;
}

/**
 * @public
 * <p>Describes an OpenSearch data source configuration.</p>
 *          <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This
 *          configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data
 *          source.</p>
 */
export interface ElasticsearchDataSourceConfig {
  /**
   * @public
   * <p>The endpoint.</p>
   */
  endpoint: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region.</p>
   */
  awsRegion: string | undefined;
}

/**
 * @public
 * <p>Describes an Amazon EventBridge bus data source configuration.</p>
 */
export interface EventBridgeDataSourceConfig {
  /**
   * @public
   * <p>The ARN of the event bus. For more information about event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html">Amazon
   *             EventBridge event buses</a>.</p>
   */
  eventBusArn: string | undefined;
}

/**
 * @public
 * <p>Describes an HTTP data source configuration.</p>
 */
export interface HttpDataSourceConfig {
  /**
   * @public
   * <p>The HTTP URL endpoint. You can specify either the domain name or IP, and port
   *          combination, and the URL scheme must be HTTP or HTTPS. If you don't specify the port,
   *             AppSync uses the default port 80 for the HTTP endpoint and port 443 for
   *          HTTPS endpoints.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>The authorization configuration in case the HTTP endpoint requires authorization.</p>
   */
  authorizationConfig?: AuthorizationConfig;
}

/**
 * @public
 * <p>Describes an Lambda data source configuration.</p>
 */
export interface LambdaDataSourceConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Lambda function.</p>
   */
  lambdaFunctionArn: string | undefined;
}

/**
 * @public
 * <p>Describes an OpenSearch data source configuration.</p>
 */
export interface OpenSearchServiceDataSourceConfig {
  /**
   * @public
   * <p>The endpoint.</p>
   */
  endpoint: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region.</p>
   */
  awsRegion: string | undefined;
}

/**
 * @public
 * <p>The Amazon Relational Database Service (Amazon RDS) HTTP endpoint configuration.</p>
 */
export interface RdsHttpEndpointConfig {
  /**
   * @public
   * <p>Amazon Web Services Region for Amazon RDS HTTP endpoint.</p>
   */
  awsRegion?: string;

  /**
   * @public
   * <p>Amazon RDS cluster Amazon Resource Name (ARN).</p>
   */
  dbClusterIdentifier?: string;

  /**
   * @public
   * <p>Logical database name.</p>
   */
  databaseName?: string;

  /**
   * @public
   * <p>Logical schema name.</p>
   */
  schema?: string;

  /**
   * @public
   * <p>Amazon Web Services secret store Amazon Resource Name (ARN) for database
   *          credentials.</p>
   */
  awsSecretStoreArn?: string;
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
 * @public
 * <p>Describes a relational database data source configuration.</p>
 */
export interface RelationalDatabaseDataSourceConfig {
  /**
   * @public
   * <p>Source type for the relational database.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RDS_HTTP_ENDPOINT</b>: The relational database
   *                source type is an Amazon Relational Database Service (Amazon RDS) HTTP
   *                endpoint.</p>
   *             </li>
   *          </ul>
   */
  relationalDatabaseSourceType?: RelationalDatabaseSourceType;

  /**
   * @public
   * <p>Amazon RDS HTTP endpoint settings.</p>
   */
  rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
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
   * @public
   * <p>The API ID for the GraphQL API for the <code>DataSource</code>.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>A user-supplied name for the <code>DataSource</code>.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the <code>DataSource</code>.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The type of the <code>DataSource</code>.</p>
   */
  type: DataSourceType | undefined;

  /**
   * @public
   * <p>The Identity and Access Management (IAM) service role Amazon Resource Name (ARN)
   *          for the data source. The system assumes this role when accessing the data source.</p>
   */
  serviceRoleArn?: string;

  /**
   * @public
   * <p>Amazon DynamoDB settings.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * @public
   * <p>Lambda settings.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;

  /**
   * @public
   * <p>Amazon OpenSearch Service settings.</p>
   *          <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This
   *          configuration is deprecated. For new data sources, use <a>CreateDataSourceRequest$openSearchServiceConfig</a> to create an OpenSearch data source.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * @public
   * <p>Amazon OpenSearch Service settings.</p>
   */
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig;

  /**
   * @public
   * <p>HTTP endpoint settings.</p>
   */
  httpConfig?: HttpDataSourceConfig;

  /**
   * @public
   * <p>Relational database settings.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;

  /**
   * @public
   * <p>Amazon EventBridge settings.</p>
   */
  eventBridgeConfig?: EventBridgeDataSourceConfig;
}

/**
 * @public
 * <p>Describes a data source.</p>
 */
export interface DataSource {
  /**
   * @public
   * <p>The data source Amazon Resource Name (ARN).</p>
   */
  dataSourceArn?: string;

  /**
   * @public
   * <p>The name of the data source.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the data source.</p>
   */
  description?: string;

  /**
   * @public
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
   */
  type?: DataSourceType;

  /**
   * @public
   * <p>The Identity and Access Management (IAM) service role Amazon Resource Name (ARN)
   *          for the data source. The system assumes this role when accessing the data source.</p>
   */
  serviceRoleArn?: string;

  /**
   * @public
   * <p>DynamoDB settings.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * @public
   * <p>Lambda settings.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;

  /**
   * @public
   * <p>Amazon OpenSearch Service settings.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * @public
   * <p>Amazon OpenSearch Service settings.</p>
   */
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig;

  /**
   * @public
   * <p>HTTP endpoint settings.</p>
   */
  httpConfig?: HttpDataSourceConfig;

  /**
   * @public
   * <p>Relational database settings.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;

  /**
   * @public
   * <p>Amazon EventBridge settings.</p>
   */
  eventBridgeConfig?: EventBridgeDataSourceConfig;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * @public
   * <p>The <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}

/**
 * @public
 */
export interface CreateDomainNameRequest {
  /**
   * @public
   * <p>The domain name.</p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager
   *             (ACM) certificate or an Identity and Access Management (IAM)
   *          server certificate.</p>
   */
  certificateArn: string | undefined;

  /**
   * @public
   * <p>A description of the <code>DomainName</code>.</p>
   */
  description?: string;
}

/**
 * @public
 * <p>Describes a configuration for a custom domain.</p>
 */
export interface DomainNameConfig {
  /**
   * @public
   * <p>The domain name.</p>
   */
  domainName?: string;

  /**
   * @public
   * <p>A description of the <code>DomainName</code> configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager
   *             (ACM) certificate or an Identity and Access Management (IAM)
   *          server certificate.</p>
   */
  certificateArn?: string;

  /**
   * @public
   * <p>The domain name that AppSync provides.</p>
   */
  appsyncDomainName?: string;

  /**
   * @public
   * <p>The ID of your Amazon Route 53 hosted zone.</p>
   */
  hostedZoneId?: string;
}

/**
 * @public
 */
export interface CreateDomainNameResponse {
  /**
   * @public
   * <p>The configuration for the <code>DomainName</code>.</p>
   */
  domainNameConfig?: DomainNameConfig;
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
 * @public
 * <p>The <code>LambdaConflictHandlerConfig</code> object when configuring <code>LAMBDA</code>
 *          as the Conflict Handler.</p>
 */
export interface LambdaConflictHandlerConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Lambda function to use as the
   *          Conflict Handler.</p>
   */
  lambdaConflictHandlerArn?: string;
}

/**
 * @public
 * <p>Describes a Sync configuration for a resolver.</p>
 *          <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the
 *          resolver is invoked.</p>
 */
export interface SyncConfig {
  /**
   * @public
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
   */
  conflictHandler?: ConflictHandlerType;

  /**
   * @public
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
   */
  conflictDetection?: ConflictDetectionType;

  /**
   * @public
   * <p>The <code>LambdaConflictHandlerConfig</code> when configuring <code>LAMBDA</code> as the
   *          Conflict Handler.</p>
   */
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
}

/**
 * @public
 */
export interface CreateFunctionRequest {
  /**
   * @public
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The <code>Function</code> name. The function name does not have to be unique.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The <code>Function</code>
   *             <code>DataSource</code> name.</p>
   */
  dataSourceName: string | undefined;

  /**
   * @public
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * @public
   * <p>The <code>Function</code> response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * @public
   * <p>The <code>version</code> of the request mapping template. Currently, the supported value
   *          is 2018-05-29. Note that when using VTL and mapping templates, the
   *             <code>functionVersion</code> is required.</p>
   */
  functionVersion?: string;

  /**
   * @public
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the
   *          resolver is invoked.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * @public
   * <p>The maximum batching size for a resolver.</p>
   */
  maxBatchSize?: number;

  /**
   * @public
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   */
  runtime?: AppSyncRuntime;

  /**
   * @public
   * <p>The <code>function</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   */
  code?: string;
}

/**
 * @public
 * <p>A function is a reusable entity. You can use multiple functions to compose the resolver
 *          logic.</p>
 */
export interface FunctionConfiguration {
  /**
   * @public
   * <p>A unique ID representing the <code>Function</code> object.</p>
   */
  functionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <code>Function</code> object.</p>
   */
  functionArn?: string;

  /**
   * @public
   * <p>The name of the <code>Function</code> object.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name of the <code>DataSource</code>.</p>
   */
  dataSourceName?: string;

  /**
   * @public
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * @public
   * <p>The <code>Function</code> response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * @public
   * <p>The version of the request mapping template. Currently, only the 2018-05-29 version of
   *          the template is supported.</p>
   */
  functionVersion?: string;

  /**
   * @public
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the
   *          resolver is invoked.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * @public
   * <p>The maximum batching size for a resolver.</p>
   */
  maxBatchSize?: number;

  /**
   * @public
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   */
  runtime?: AppSyncRuntime;

  /**
   * @public
   * <p>The <code>function</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   */
  code?: string;
}

/**
 * @public
 */
export interface CreateFunctionResponse {
  /**
   * @public
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
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
export const FieldLogLevel = {
  ALL: "ALL",
  ERROR: "ERROR",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type FieldLogLevel = (typeof FieldLogLevel)[keyof typeof FieldLogLevel];

/**
 * @public
 * <p>The Amazon CloudWatch Logs configuration.</p>
 */
export interface LogConfig {
  /**
   * @public
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
   */
  fieldLogLevel: FieldLogLevel | undefined;

  /**
   * @public
   * <p>The service role that AppSync assumes to publish to CloudWatch
   *          logs in your account.</p>
   */
  cloudWatchLogsRoleArn: string | undefined;

  /**
   * @public
   * <p>Set to TRUE to exclude sections that contain information such as headers, context, and
   *          evaluated mapping templates, regardless of logging level.</p>
   */
  excludeVerboseContent?: boolean;
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
 * @public
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 */
export interface UserPoolConfig {
  /**
   * @public
   * <p>The user pool ID.</p>
   */
  userPoolId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region in which the user pool was created.</p>
   */
  awsRegion: string | undefined;

  /**
   * @public
   * <p>The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool
   *          configuration.</p>
   */
  defaultAction: DefaultAction | undefined;

  /**
   * @public
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client
   *          ID. If this value isn't set, no filtering is applied.</p>
   */
  appIdClientRegex?: string;
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
   * @public
   * <p>A user-supplied name for the <code>GraphqlApi</code>.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon CloudWatch Logs configuration.</p>
   */
  logConfig?: LogConfig;

  /**
   * @public
   * <p>The authentication type: API key, Identity and Access Management (IAM), OpenID
   *          Connect (OIDC), Amazon Cognito user pools, or Lambda.</p>
   */
  authenticationType: AuthenticationType | undefined;

  /**
   * @public
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: UserPoolConfig;

  /**
   * @public
   * <p>The OIDC configuration.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;

  /**
   * @public
   * <p>A <code>TagMap</code> object.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];

  /**
   * @public
   * <p>A flag indicating whether to use X-Ray tracing for the
   *             <code>GraphqlApi</code>.</p>
   */
  xrayEnabled?: boolean;

  /**
   * @public
   * <p>Configuration for Lambda function authorization.</p>
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;

  /**
   * @public
   * <p>Sets the value of the GraphQL API to public (<code>GLOBAL</code>) or private (<code>PRIVATE</code>). If no
   *          value is provided, the visibility will be set to <code>GLOBAL</code> by default. This value cannot be changed
   *          once the API has been created.</p>
   */
  visibility?: GraphQLApiVisibility;

  /**
   * @public
   * <p>The value that indicates whether the GraphQL API is a standard API (<code>GRAPHQL</code>) or merged API
   *          (<code>MERGED</code>).</p>
   */
  apiType?: GraphQLApiType;

  /**
   * @public
   * <p>The Identity and Access Management service role ARN for a merged API. The AppSync
   *          service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to
   *          prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with the source API changes
   *          automatically.</p>
   */
  mergedApiExecutionRoleArn?: string;

  /**
   * @public
   * <p>The owner contact information for an API resource.</p>
   *          <p>This field accepts any string input with a length of 0 - 256 characters.</p>
   */
  ownerContact?: string;
}

/**
 * @public
 * <p>Describes a GraphQL API.</p>
 */
export interface GraphqlApi {
  /**
   * @public
   * <p>The API name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId?: string;

  /**
   * @public
   * <p>The authentication type.</p>
   */
  authenticationType?: AuthenticationType;

  /**
   * @public
   * <p>The Amazon CloudWatch Logs configuration.</p>
   */
  logConfig?: LogConfig;

  /**
   * @public
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: UserPoolConfig;

  /**
   * @public
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN).</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The URIs.</p>
   */
  uris?: Record<string, string>;

  /**
   * @public
   * <p>The tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];

  /**
   * @public
   * <p>A flag indicating whether to use X-Ray tracing for this
   *             <code>GraphqlApi</code>.</p>
   */
  xrayEnabled?: boolean;

  /**
   * @public
   * <p>The ARN of the WAF access control list (ACL) associated with this
   *             <code>GraphqlApi</code>, if one exists.</p>
   */
  wafWebAclArn?: string;

  /**
   * @public
   * <p>Configuration for Lambda function authorization.</p>
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;

  /**
   * @public
   * <p>The DNS records for the API.</p>
   */
  dns?: Record<string, string>;

  /**
   * @public
   * <p>Sets the value of the GraphQL API to public (<code>GLOBAL</code>) or private (<code>PRIVATE</code>). If no
   *          value is provided, the visibility will be set to <code>GLOBAL</code> by default. This value cannot be changed
   *          once the API has been created.</p>
   */
  visibility?: GraphQLApiVisibility;

  /**
   * @public
   * <p>The value that indicates whether the GraphQL API is a standard API (<code>GRAPHQL</code>) or merged API
   *          (<code>MERGED</code>).</p>
   */
  apiType?: GraphQLApiType;

  /**
   * @public
   * <p>The Identity and Access Management service role ARN for a merged API. The AppSync
   *          service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to
   *          prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with the source API changes
   *          automatically.</p>
   */
  mergedApiExecutionRoleArn?: string;

  /**
   * @public
   * <p>The account owner of the GraphQL API.</p>
   */
  owner?: string;

  /**
   * @public
   * <p>The owner contact information for an API resource.</p>
   *          <p>This field accepts any string input with a length of 0 - 256 characters.</p>
   */
  ownerContact?: string;
}

/**
 * @public
 */
export interface CreateGraphqlApiResponse {
  /**
   * @public
   * <p>The <code>GraphqlApi</code>.</p>
   */
  graphqlApi?: GraphqlApi;
}

/**
 * @public
 * <p>The caching configuration for a resolver that has caching activated.</p>
 */
export interface CachingConfig {
  /**
   * @public
   * <p>The TTL in seconds for a resolver that has caching activated.</p>
   *          <p>Valid values are 1–3,600 seconds.</p>
   */
  ttl: number | undefined;

  /**
   * @public
   * <p>The caching keys for a resolver that has caching activated.</p>
   *          <p>Valid values are entries from the <code>$context.arguments</code>,
   *             <code>$context.source</code>, and <code>$context.identity</code> maps.</p>
   */
  cachingKeys?: string[];
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
 * <p>The pipeline configuration for a resolver of kind <code>PIPELINE</code>.</p>
 */
export interface PipelineConfig {
  /**
   * @public
   * <p>A list of <code>Function</code> objects.</p>
   */
  functions?: string[];
}

/**
 * @public
 */
export interface CreateResolverRequest {
  /**
   * @public
   * <p>The ID for the GraphQL API for which the resolver is being created.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The name of the <code>Type</code>.</p>
   */
  typeName: string | undefined;

  /**
   * @public
   * <p>The name of the field to attach the resolver to.</p>
   */
  fieldName: string | undefined;

  /**
   * @public
   * <p>The name of the data source for which the resolver is being created.</p>
   */
  dataSourceName?: string;

  /**
   * @public
   * <p>The mapping template to use for requests.</p>
   *          <p>A resolver uses a request mapping template to convert a GraphQL expression into a format
   *          that a data source can understand. Mapping templates are written in Apache Velocity
   *          Template Language (VTL).</p>
   *          <p>VTL request mapping templates are optional when using an Lambda data
   *          source. For all other data sources, VTL request and response mapping templates are
   *          required.</p>
   */
  requestMappingTemplate?: string;

  /**
   * @public
   * <p>The mapping template to use for responses from the data source.</p>
   */
  responseMappingTemplate?: string;

  /**
   * @public
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
   */
  kind?: ResolverKind;

  /**
   * @public
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;

  /**
   * @public
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned data source.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * @public
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;

  /**
   * @public
   * <p>The maximum batching size for a resolver.</p>
   */
  maxBatchSize?: number;

  /**
   * @public
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   */
  runtime?: AppSyncRuntime;

  /**
   * @public
   * <p>The <code>resolver</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   */
  code?: string;
}

/**
 * @public
 * <p>Describes a resolver.</p>
 */
export interface Resolver {
  /**
   * @public
   * <p>The resolver type name.</p>
   */
  typeName?: string;

  /**
   * @public
   * <p>The resolver field name.</p>
   */
  fieldName?: string;

  /**
   * @public
   * <p>The resolver data source name.</p>
   */
  dataSourceName?: string;

  /**
   * @public
   * <p>The resolver Amazon Resource Name (ARN).</p>
   */
  resolverArn?: string;

  /**
   * @public
   * <p>The request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * @public
   * <p>The response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * @public
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
   */
  kind?: ResolverKind;

  /**
   * @public
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;

  /**
   * @public
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned data source.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * @public
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;

  /**
   * @public
   * <p>The maximum batching size for a resolver.</p>
   */
  maxBatchSize?: number;

  /**
   * @public
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   */
  runtime?: AppSyncRuntime;

  /**
   * @public
   * <p>The <code>resolver</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   */
  code?: string;
}

/**
 * @public
 */
export interface CreateResolverResponse {
  /**
   * @public
   * <p>The <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
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
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p>
   *          <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL
   *             documentation</a>.</p>
   */
  definition: string | undefined;

  /**
   * @public
   * <p>The type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | undefined;
}

/**
 * @public
 * <p>Describes a type.</p>
 */
export interface Type {
  /**
   * @public
   * <p>The type name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The type description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The type Amazon Resource Name (ARN).</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The type definition.</p>
   */
  definition?: string;

  /**
   * @public
   * <p>The type format: SDL or JSON.</p>
   */
  format?: TypeDefinitionFormat;
}

/**
 * @public
 */
export interface CreateTypeResponse {
  /**
   * @public
   * <p>The <code>Type</code> object.</p>
   */
  type?: Type;
}

/**
 * @public
 * <p>Represents the input of a <code>DeleteApiCache</code> operation.</p>
 */
export interface DeleteApiCacheRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>DeleteApiCache</code> operation.</p>
 */
export interface DeleteApiCacheResponse {}

/**
 * @public
 */
export interface DeleteApiKeyRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The ID for the API key.</p>
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
export interface DeleteDataSourceRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The name of the data source.</p>
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
   * @public
   * <p>The domain name.</p>
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
   * @public
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The <code>Function</code> ID.</p>
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
   * @public
   * <p>The API ID.</p>
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
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The name of the resolver type.</p>
   */
  typeName: string | undefined;

  /**
   * @public
   * <p>The resolver field name.</p>
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
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The type name.</p>
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
   * @public
   * <p>The domain name.</p>
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
   * @public
   * <p>The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source
   *          APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs
   *          from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.</p>
   */
  sourceApiIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID generated by the AppSync service for the source API association.</p>
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMergedGraphqlApiResponse {
  /**
   * @public
   * <p>The state of the source API association.</p>
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus;
}

/**
 * @public
 */
export interface DisassociateSourceGraphqlApiRequest {
  /**
   * @public
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.</p>
   */
  mergedApiIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID generated by the AppSync service for the source API association.</p>
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceGraphqlApiResponse {
  /**
   * @public
   * <p>The state of the source API association.</p>
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus;
}

/**
 * @public
 */
export interface EvaluateCodeRequest {
  /**
   * @public
   * <p>The runtime to be used when evaluating the code. Currently, only the
   *             <code>APPSYNC_JS</code> runtime is supported.</p>
   */
  runtime: AppSyncRuntime | undefined;

  /**
   * @public
   * <p>The code definition to be evaluated. Note that <code>code</code> and
   *             <code>runtime</code> are both required for this action. The <code>runtime</code> value
   *          must be <code>APPSYNC_JS</code>.</p>
   */
  code: string | undefined;

  /**
   * @public
   * <p>The map that holds all of the contextual information for your resolver invocation. A
   *             <code>context</code> is required for this action.</p>
   */
  context: string | undefined;

  /**
   * @public
   * <p>The function within the code to be evaluated. If provided, the valid values are
   *             <code>request</code> and <code>response</code>.</p>
   */
  function?: string;
}

/**
 * @public
 * <p>Contains the list of errors from a code evaluation response.</p>
 */
export interface EvaluateCodeErrorDetail {
  /**
   * @public
   * <p>The error payload.</p>
   */
  message?: string;

  /**
   * @public
   * <p>Contains the list of <code>CodeError</code> objects.</p>
   */
  codeErrors?: CodeError[];
}

/**
 * @public
 */
export interface EvaluateCodeResponse {
  /**
   * @public
   * <p>The result of the evaluation operation.</p>
   */
  evaluationResult?: string;

  /**
   * @public
   * <p>Contains the payload of the response error.</p>
   */
  error?: EvaluateCodeErrorDetail;

  /**
   * @public
   * <p>A list of logs that were generated by calls to <code>util.log.info</code> and
   *             <code>util.log.error</code> in the evaluated code.</p>
   */
  logs?: string[];
}

/**
 * @public
 */
export interface EvaluateMappingTemplateRequest {
  /**
   * @public
   * <p>The mapping template; this can be a request or response template. A
   *             <code>template</code> is required for this action.</p>
   */
  template: string | undefined;

  /**
   * @public
   * <p>The map that holds all of the contextual information for your resolver invocation. A
   *             <code>context</code> is required for this action.</p>
   */
  context: string | undefined;
}

/**
 * @public
 * <p>Contains the list of errors generated. When using JavaScript, this will apply to the
 *          request or response function evaluation.</p>
 */
export interface ErrorDetail {
  /**
   * @public
   * <p>The error payload.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface EvaluateMappingTemplateResponse {
  /**
   * @public
   * <p>The mapping template; this can be a request or response template.</p>
   */
  evaluationResult?: string;

  /**
   * @public
   * <p>The <code>ErrorDetail</code> object.</p>
   */
  error?: ErrorDetail;

  /**
   * @public
   * <p>A list of logs that were generated by calls to <code>util.log.info</code> and
   *             <code>util.log.error</code> in the evaluated code.</p>
   */
  logs?: string[];
}

/**
 * @public
 * <p>Represents the input of a <code>FlushApiCache</code> operation.</p>
 */
export interface FlushApiCacheRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>FlushApiCache</code> operation.</p>
 */
export interface FlushApiCacheResponse {}

/**
 * @public
 */
export interface GetApiAssociationRequest {
  /**
   * @public
   * <p>The domain name.</p>
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface GetApiAssociationResponse {
  /**
   * @public
   * <p>The <code>ApiAssociation</code> object.</p>
   */
  apiAssociation?: ApiAssociation;
}

/**
 * @public
 * <p>Represents the input of a <code>GetApiCache</code> operation.</p>
 */
export interface GetApiCacheRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>GetApiCache</code> operation.</p>
 */
export interface GetApiCacheResponse {
  /**
   * @public
   * <p>The <code>ApiCache</code> object.</p>
   */
  apiCache?: ApiCache;
}

/**
 * @public
 */
export interface GetDataSourceRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The name of the data source.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceResponse {
  /**
   * @public
   * <p>The <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}

/**
 * @public
 */
export interface GetDomainNameRequest {
  /**
   * @public
   * <p>The domain name.</p>
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface GetDomainNameResponse {
  /**
   * @public
   * <p>The configuration for the <code>DomainName</code>.</p>
   */
  domainNameConfig?: DomainNameConfig;
}

/**
 * @public
 */
export interface GetFunctionRequest {
  /**
   * @public
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The <code>Function</code> ID.</p>
   */
  functionId: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionResponse {
  /**
   * @public
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
}

/**
 * @public
 */
export interface GetGraphqlApiRequest {
  /**
   * @public
   * <p>The API ID for the GraphQL API.</p>
   */
  apiId: string | undefined;
}

/**
 * @public
 */
export interface GetGraphqlApiResponse {
  /**
   * @public
   * <p>The <code>GraphqlApi</code> object.</p>
   */
  graphqlApi?: GraphqlApi;
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
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The schema format: SDL or JSON.</p>
   */
  format: OutputType | undefined;

  /**
   * @public
   * <p>A flag that specifies whether the schema introspection should contain directives.</p>
   */
  includeDirectives?: boolean;
}

/**
 * @public
 */
export interface GetIntrospectionSchemaResponse {
  /**
   * @public
   * <p>The schema, in GraphQL Schema Definition Language (SDL) format.</p>
   *          <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL
   *             documentation</a>.</p>
   */
  schema?: Uint8Array;
}

/**
 * @public
 * <p>The GraphQL schema is not valid.</p>
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
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The resolver type name.</p>
   */
  typeName: string | undefined;

  /**
   * @public
   * <p>The resolver field name.</p>
   */
  fieldName: string | undefined;
}

/**
 * @public
 */
export interface GetResolverResponse {
  /**
   * @public
   * <p>The <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
}

/**
 * @public
 */
export interface GetSchemaCreationStatusRequest {
  /**
   * @public
   * <p>The API ID.</p>
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
   * @public
   * <p>The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When
   *          the schema is in the ACTIVE state, you can add data.</p>
   */
  status?: SchemaStatus;

  /**
   * @public
   * <p>Detailed information about the status of the schema creation operation.</p>
   */
  details?: string;
}

/**
 * @public
 */
export interface GetSourceApiAssociationRequest {
  /**
   * @public
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.</p>
   */
  mergedApiIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID generated by the AppSync service for the source API association.</p>
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface GetSourceApiAssociationResponse {
  /**
   * @public
   * <p>The <code>SourceApiAssociation</code> object data.</p>
   */
  sourceApiAssociation?: SourceApiAssociation;
}

/**
 * @public
 */
export interface GetTypeRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The type name.</p>
   */
  typeName: string | undefined;

  /**
   * @public
   * <p>The type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | undefined;
}

/**
 * @public
 */
export interface GetTypeResponse {
  /**
   * @public
   * <p>The <code>Type</code> object.</p>
   */
  type?: Type;
}

/**
 * @public
 */
export interface ListApiKeysRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that you want the request to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListApiKeysResponse {
  /**
   * @public
   * <p>The <code>ApiKey</code> objects.</p>
   */
  apiKeys?: ApiKey[];

  /**
   * @public
   * <p>An identifier to pass in the next request to this operation to return the next set of
   *          items in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that you want the request to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * @public
   * <p>The <code>DataSource</code> objects.</p>
   */
  dataSources?: DataSource[];

  /**
   * @public
   * <p>An identifier to pass in the next request to this operation to return the next set of
   *          items in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDomainNamesRequest {
  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can use to return the
   *          next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that you want the request to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDomainNamesResponse {
  /**
   * @public
   * <p>Lists configurations for multiple domain names.</p>
   */
  domainNameConfigs?: DomainNameConfig[];

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can use to return the
   *          next set of items in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListFunctionsRequest {
  /**
   * @public
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that you want the request to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListFunctionsResponse {
  /**
   * @public
   * <p>A list of <code>Function</code> objects.</p>
   */
  functions?: FunctionConfiguration[];

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   */
  nextToken?: string;
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
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that you want the request to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The value that indicates whether the GraphQL API is a standard API (<code>GRAPHQL</code>) or merged API
   *          (<code>MERGED</code>).</p>
   */
  apiType?: GraphQLApiType;

  /**
   * @public
   * <p>The account owner of the GraphQL API.</p>
   */
  owner?: Ownership;
}

/**
 * @public
 */
export interface ListGraphqlApisResponse {
  /**
   * @public
   * <p>The <code>GraphqlApi</code> objects.</p>
   */
  graphqlApis?: GraphqlApi[];

  /**
   * @public
   * <p>An identifier to pass in the next request to this operation to return the next set of
   *          items in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListResolversRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The type name.</p>
   */
  typeName: string | undefined;

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that you want the request to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListResolversResponse {
  /**
   * @public
   * <p>The <code>Resolver</code> objects.</p>
   */
  resolvers?: Resolver[];

  /**
   * @public
   * <p>An identifier to pass in the next request to this operation to return the next set of
   *          items in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListResolversByFunctionRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The function ID.</p>
   */
  functionId: string | undefined;

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that you want the request to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListResolversByFunctionResponse {
  /**
   * @public
   * <p>The list of resolvers.</p>
   */
  resolvers?: Resolver[];

  /**
   * @public
   * <p>An identifier that you can use to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSourceApiAssociationsRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can use to return the
   *          next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that you want the request to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Describes the ARNs and IDs of associations, Merged APIs, and source APIs.</p>
 */
export interface SourceApiAssociationSummary {
  /**
   * @public
   * <p>The ID generated by the AppSync service for the source API association.</p>
   */
  associationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source API association.</p>
   */
  associationArn?: string;

  /**
   * @public
   * <p>The ID of the AppSync source API.</p>
   */
  sourceApiId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AppSync Source API.</p>
   */
  sourceApiArn?: string;

  /**
   * @public
   * <p>The ID of the AppSync Merged API.</p>
   */
  mergedApiId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AppSync Merged API.</p>
   */
  mergedApiArn?: string;

  /**
   * @public
   * <p>The description field.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListSourceApiAssociationsResponse {
  /**
   * @public
   * <p>The <code>SourceApiAssociationSummary</code> object data.</p>
   */
  sourceApiAssociationSummaries?: SourceApiAssociationSummary[];

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can use to return the
   *          next set of items in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The <code>GraphqlApi</code> Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A <code>TagMap</code> object.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTypesRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | undefined;

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that you want the request to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListTypesResponse {
  /**
   * @public
   * <p>The <code>Type</code> objects.</p>
   */
  types?: Type[];

  /**
   * @public
   * <p>An identifier to pass in the next request to this operation to return the next set of
   *          items in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTypesByAssociationRequest {
  /**
   * @public
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.</p>
   */
  mergedApiIdentifier: string | undefined;

  /**
   * @public
   * <p>The ID generated by the AppSync service for the source API association.</p>
   */
  associationId: string | undefined;

  /**
   * @public
   * <p>The format type.</p>
   */
  format: TypeDefinitionFormat | undefined;

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can use to return the
   *          next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that you want the request to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListTypesByAssociationResponse {
  /**
   * @public
   * <p>The <code>Type</code> objects.</p>
   */
  types?: Type[];

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which you can use to return the
   *          next set of items in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartSchemaCreationRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The schema definition, in GraphQL schema language format.</p>
   */
  definition: Uint8Array | undefined;
}

/**
 * @public
 */
export interface StartSchemaCreationResponse {
  /**
   * @public
   * <p>The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When
   *          the schema is in the ACTIVE state, you can add data.</p>
   */
  status?: SchemaStatus;
}

/**
 * @public
 */
export interface StartSchemaMergeRequest {
  /**
   * @public
   * <p>The ID generated by the AppSync service for the source API association.</p>
   */
  associationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.</p>
   */
  mergedApiIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartSchemaMergeResponse {
  /**
   * @public
   * <p>The state of the source API association.</p>
   */
  sourceApiAssociationStatus?: SourceApiAssociationStatus;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The <code>GraphqlApi</code> Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A <code>TagMap</code> object.</p>
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
   * @public
   * <p>The <code>GraphqlApi</code> Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of <code>TagKey</code> objects.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>Represents the input of a <code>UpdateApiCache</code> operation.</p>
 */
export interface UpdateApiCacheRequest {
  /**
   * @public
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are 1–3,600 seconds.</p>
   */
  ttl: number | undefined;

  /**
   * @public
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
  apiCachingBehavior: ApiCachingBehavior | undefined;

  /**
   * @public
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
  type: ApiCacheType | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>UpdateApiCache</code> operation.</p>
 */
export interface UpdateApiCacheResponse {
  /**
   * @public
   * <p>The <code>ApiCache</code> object.</p>
   */
  apiCache?: ApiCache;
}

/**
 * @public
 */
export interface UpdateApiKeyRequest {
  /**
   * @public
   * <p>The ID for the GraphQL API.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The API key ID.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>A description of the purpose of the API key.</p>
   */
  description?: string;

  /**
   * @public
   * <p>From the update time, the time after which the API key expires. The date is represented
   *          as seconds since the epoch. For more information, see .</p>
   */
  expires?: number;
}

/**
 * @public
 */
export interface UpdateApiKeyResponse {
  /**
   * @public
   * <p>The API key.</p>
   */
  apiKey?: ApiKey;
}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The new name for the data source.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The new description for the data source.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The new data source type.</p>
   */
  type: DataSourceType | undefined;

  /**
   * @public
   * <p>The new service role Amazon Resource Name (ARN) for the data source.</p>
   */
  serviceRoleArn?: string;

  /**
   * @public
   * <p>The new Amazon DynamoDB configuration.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;

  /**
   * @public
   * <p>The new Lambda configuration.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;

  /**
   * @public
   * <p>The new OpenSearch configuration.</p>
   *          <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This
   *          configuration is deprecated. Instead, use <a>UpdateDataSourceRequest$openSearchServiceConfig</a> to update an OpenSearch data source.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;

  /**
   * @public
   * <p>The new OpenSearch configuration.</p>
   */
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig;

  /**
   * @public
   * <p>The new HTTP endpoint configuration.</p>
   */
  httpConfig?: HttpDataSourceConfig;

  /**
   * @public
   * <p>The new relational database configuration.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;

  /**
   * @public
   * <p>The new Amazon EventBridge settings.</p>
   */
  eventBridgeConfig?: EventBridgeDataSourceConfig;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * @public
   * <p>The updated <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}

/**
 * @public
 */
export interface UpdateDomainNameRequest {
  /**
   * @public
   * <p>The domain name.</p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p>A description of the <code>DomainName</code>.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateDomainNameResponse {
  /**
   * @public
   * <p>The configuration for the <code>DomainName</code>.</p>
   */
  domainNameConfig?: DomainNameConfig;
}

/**
 * @public
 */
export interface UpdateFunctionRequest {
  /**
   * @public
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The <code>Function</code> name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The function ID.</p>
   */
  functionId: string | undefined;

  /**
   * @public
   * <p>The <code>Function</code>
   *             <code>DataSource</code> name.</p>
   */
  dataSourceName: string | undefined;

  /**
   * @public
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * @public
   * <p>The <code>Function</code> request mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * @public
   * <p>The <code>version</code> of the request mapping template. Currently, the supported value
   *          is 2018-05-29. Note that when using VTL and mapping templates, the
   *             <code>functionVersion</code> is required.</p>
   */
  functionVersion?: string;

  /**
   * @public
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the
   *          resolver is invoked.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * @public
   * <p>The maximum batching size for a resolver.</p>
   */
  maxBatchSize?: number;

  /**
   * @public
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   */
  runtime?: AppSyncRuntime;

  /**
   * @public
   * <p>The <code>function</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   */
  code?: string;
}

/**
 * @public
 */
export interface UpdateFunctionResponse {
  /**
   * @public
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
}

/**
 * @public
 */
export interface UpdateGraphqlApiRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The new name for the <code>GraphqlApi</code> object.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon CloudWatch Logs configuration for the <code>GraphqlApi</code> object.</p>
   */
  logConfig?: LogConfig;

  /**
   * @public
   * <p>The new authentication type for the <code>GraphqlApi</code> object.</p>
   */
  authenticationType?: AuthenticationType;

  /**
   * @public
   * <p>The new Amazon Cognito user pool configuration for the <code>~GraphqlApi</code>
   *          object.</p>
   */
  userPoolConfig?: UserPoolConfig;

  /**
   * @public
   * <p>The OpenID Connect configuration for the <code>GraphqlApi</code> object.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;

  /**
   * @public
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];

  /**
   * @public
   * <p>A flag indicating whether to use X-Ray tracing for the
   *             <code>GraphqlApi</code>.</p>
   */
  xrayEnabled?: boolean;

  /**
   * @public
   * <p>Configuration for Lambda function authorization.</p>
   */
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;

  /**
   * @public
   * <p>The Identity and Access Management service role ARN for a merged API. The AppSync
   *          service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to
   *          prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with the source API changes
   *          automatically.</p>
   */
  mergedApiExecutionRoleArn?: string;

  /**
   * @public
   * <p>The owner contact information for an API resource.</p>
   *          <p>This field accepts any string input with a length of 0 - 256 characters.</p>
   */
  ownerContact?: string;
}

/**
 * @public
 */
export interface UpdateGraphqlApiResponse {
  /**
   * @public
   * <p>The updated <code>GraphqlApi</code> object.</p>
   */
  graphqlApi?: GraphqlApi;
}

/**
 * @public
 */
export interface UpdateResolverRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The new type name.</p>
   */
  typeName: string | undefined;

  /**
   * @public
   * <p>The new field name.</p>
   */
  fieldName: string | undefined;

  /**
   * @public
   * <p>The new data source name.</p>
   */
  dataSourceName?: string;

  /**
   * @public
   * <p>The new request mapping template.</p>
   *          <p>A resolver uses a request mapping template to convert a GraphQL expression into a format
   *          that a data source can understand. Mapping templates are written in Apache Velocity
   *          Template Language (VTL).</p>
   *          <p>VTL request mapping templates are optional when using an Lambda data
   *          source. For all other data sources, VTL request and response mapping templates are
   *          required.</p>
   */
  requestMappingTemplate?: string;

  /**
   * @public
   * <p>The new response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * @public
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
   */
  kind?: ResolverKind;

  /**
   * @public
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;

  /**
   * @public
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned data source.</p>
   */
  syncConfig?: SyncConfig;

  /**
   * @public
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;

  /**
   * @public
   * <p>The maximum batching size for a resolver.</p>
   */
  maxBatchSize?: number;

  /**
   * @public
   * <p>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note
   *          that if a runtime is specified, code must also be specified.</p>
   */
  runtime?: AppSyncRuntime;

  /**
   * @public
   * <p>The <code>resolver</code> code that contains the request and response functions. When
   *          code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be
   *             <code>APPSYNC_JS</code>.</p>
   */
  code?: string;
}

/**
 * @public
 */
export interface UpdateResolverResponse {
  /**
   * @public
   * <p>The updated <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
}

/**
 * @public
 */
export interface UpdateSourceApiAssociationRequest {
  /**
   * @public
   * <p>The ID generated by the AppSync service for the source API association.</p>
   */
  associationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.</p>
   */
  mergedApiIdentifier: string | undefined;

  /**
   * @public
   * <p>The description field.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The <code>SourceApiAssociationConfig</code> object data.</p>
   */
  sourceApiAssociationConfig?: SourceApiAssociationConfig;
}

/**
 * @public
 */
export interface UpdateSourceApiAssociationResponse {
  /**
   * @public
   * <p>The <code>SourceApiAssociation</code> object data.</p>
   */
  sourceApiAssociation?: SourceApiAssociation;
}

/**
 * @public
 */
export interface UpdateTypeRequest {
  /**
   * @public
   * <p>The API ID.</p>
   */
  apiId: string | undefined;

  /**
   * @public
   * <p>The new type name.</p>
   */
  typeName: string | undefined;

  /**
   * @public
   * <p>The new definition.</p>
   */
  definition?: string;

  /**
   * @public
   * <p>The new type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | undefined;
}

/**
 * @public
 */
export interface UpdateTypeResponse {
  /**
   * @public
   * <p>The updated <code>Type</code> object.</p>
   */
  type?: Type;
}
