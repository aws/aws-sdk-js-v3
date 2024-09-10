// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CognitoIdentityServiceException as __BaseException } from "./CognitoIdentityServiceException";

/**
 * @public
 * @enum
 */
export const AmbiguousRoleResolutionType = {
  AUTHENTICATED_ROLE: "AuthenticatedRole",
  DENY: "Deny",
} as const;

/**
 * @public
 */
export type AmbiguousRoleResolutionType =
  (typeof AmbiguousRoleResolutionType)[keyof typeof AmbiguousRoleResolutionType];

/**
 * <p>A provider representing an Amazon Cognito user pool and its client ID.</p>
 * @public
 */
export interface CognitoIdentityProvider {
  /**
   * <p>The provider name for an Amazon Cognito user pool. For example,
   *             <code>cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789</code>.</p>
   * @public
   */
  ProviderName?: string;

  /**
   * <p>The client ID for the Amazon Cognito user pool.</p>
   * @public
   */
  ClientId?: string;

  /**
   * <p>TRUE if server-side token validation is enabled for the identity provider’s
   *          token.</p>
   *          <p>Once you set <code>ServerSideTokenCheck</code> to TRUE for an identity pool, that
   *          identity pool will check with the integrated user pools to make sure that the user has not
   *          been globally signed out or deleted before the identity pool provides an OIDC token or AWS
   *          credentials for the user.</p>
   *          <p>If the user is signed out or deleted, the identity pool will return a 400 Not
   *          Authorized error.</p>
   * @public
   */
  ServerSideTokenCheck?: boolean;
}

/**
 * <p>Input to the CreateIdentityPool action.</p>
 * @public
 */
export interface CreateIdentityPoolInput {
  /**
   * <p>A string that you provide.</p>
   * @public
   */
  IdentityPoolName: string | undefined;

  /**
   * <p>TRUE if the identity pool supports unauthenticated logins.</p>
   * @public
   */
  AllowUnauthenticatedIdentities: boolean | undefined;

  /**
   * <p>Enables or disables the Basic (Classic) authentication flow. For more information, see
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   * @public
   */
  AllowClassicFlow?: boolean;

  /**
   * <p>Optional key:value pairs mapping provider names to provider app IDs.</p>
   * @public
   */
  SupportedLoginProviders?: Record<string, string>;

  /**
   * <p>The "domain" by which Cognito will refer to your users. This name acts as a
   *          placeholder that allows your backend and the Cognito service to communicate about the
   *          developer provider. For the <code>DeveloperProviderName</code>, you can use letters as well
   *          as period (<code>.</code>), underscore (<code>_</code>), and dash
   *          (<code>-</code>).</p>
   *          <p>Once you have set a developer provider name, you cannot change it. Please take care
   *          in setting this parameter.</p>
   * @public
   */
  DeveloperProviderName?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the OpenID Connect providers.</p>
   * @public
   */
  OpenIdConnectProviderARNs?: string[];

  /**
   * <p>An array of Amazon Cognito user pools and their client IDs.</p>
   * @public
   */
  CognitoIdentityProviders?: CognitoIdentityProvider[];

  /**
   * <p>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity
   *          pool.</p>
   * @public
   */
  SamlProviderARNs?: string[];

  /**
   * <p>Tags to assign to the identity pool. A tag is a label that you can apply to identity
   *          pools to categorize and manage them in different ways, such as by purpose, owner,
   *          environment, or other criteria.</p>
   * @public
   */
  IdentityPoolTags?: Record<string, string>;
}

/**
 * <p>An object representing an Amazon Cognito identity pool.</p>
 * @public
 */
export interface IdentityPool {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A string that you provide.</p>
   * @public
   */
  IdentityPoolName: string | undefined;

  /**
   * <p>TRUE if the identity pool supports unauthenticated logins.</p>
   * @public
   */
  AllowUnauthenticatedIdentities: boolean | undefined;

  /**
   * <p>Enables or disables the Basic (Classic) authentication flow. For more information, see
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   * @public
   */
  AllowClassicFlow?: boolean;

  /**
   * <p>Optional key:value pairs mapping provider names to provider app IDs.</p>
   * @public
   */
  SupportedLoginProviders?: Record<string, string>;

  /**
   * <p>The "domain" by which Cognito will refer to your users.</p>
   * @public
   */
  DeveloperProviderName?: string;

  /**
   * <p>The ARNs of the OpenID Connect providers.</p>
   * @public
   */
  OpenIdConnectProviderARNs?: string[];

  /**
   * <p>A list representing an Amazon Cognito user pool and its client ID.</p>
   * @public
   */
  CognitoIdentityProviders?: CognitoIdentityProvider[];

  /**
   * <p>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity
   *          pool.</p>
   * @public
   */
  SamlProviderARNs?: string[];

  /**
   * <p>The tags that are assigned to the identity pool. A tag is a label that you can apply to
   *          identity pools to categorize and manage them in different ways, such as by purpose, owner,
   *          environment, or other criteria.</p>
   * @public
   */
  IdentityPoolTags?: Record<string, string>;
}

/**
 * <p>Thrown when the service encounters an error during processing the request.</p>
 * @public
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
  }
}

/**
 * <p>Thrown for missing or bad input parameter(s).</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>Thrown when the total number of user pools has exceeded a preset limit.</p>
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
 * <p>Thrown when a user is not authorized to access the requested resource.</p>
 * @public
 */
export class NotAuthorizedException extends __BaseException {
  readonly name: "NotAuthorizedException" = "NotAuthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAuthorizedException, __BaseException>) {
    super({
      name: "NotAuthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAuthorizedException.prototype);
  }
}

/**
 * <p>Thrown when a user tries to use a login which is already linked to another
 *          account.</p>
 * @public
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
  }
}

/**
 * <p>Thrown when a request is throttled.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>Input to the <code>DeleteIdentities</code> action.</p>
 * @public
 */
export interface DeleteIdentitiesInput {
  /**
   * <p>A list of 1-60 identities that you want to delete.</p>
   * @public
   */
  IdentityIdsToDelete: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  ACCESS_DENIED: "AccessDenied",
  INTERNAL_SERVER_ERROR: "InternalServerError",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * <p>An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and
 *          IdentityId.</p>
 * @public
 */
export interface UnprocessedIdentityId {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId?: string;

  /**
   * <p>The error code indicating the type of error that occurred.</p>
   * @public
   */
  ErrorCode?: ErrorCode;
}

/**
 * <p>Returned in response to a successful <code>DeleteIdentities</code>
 *          operation.</p>
 * @public
 */
export interface DeleteIdentitiesResponse {
  /**
   * <p>An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and
   *          IdentityId.</p>
   * @public
   */
  UnprocessedIdentityIds?: UnprocessedIdentityId[];
}

/**
 * <p>Input to the DeleteIdentityPool action.</p>
 * @public
 */
export interface DeleteIdentityPoolInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
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
 * <p>Input to the <code>DescribeIdentity</code> action.</p>
 * @public
 */
export interface DescribeIdentityInput {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId: string | undefined;
}

/**
 * <p>A description of the identity.</p>
 * @public
 */
export interface IdentityDescription {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId?: string;

  /**
   * <p>The provider names.</p>
   * @public
   */
  Logins?: string[];

  /**
   * <p>Date on which the identity was created.</p>
   * @public
   */
  CreationDate?: Date;

  /**
   * <p>Date on which the identity was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date;
}

/**
 * <p>Input to the DescribeIdentityPool action.</p>
 * @public
 */
export interface DescribeIdentityPoolInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * <p>An exception thrown when a dependent service such as Facebook or Twitter is not
 *          responding</p>
 * @public
 */
export class ExternalServiceException extends __BaseException {
  readonly name: "ExternalServiceException" = "ExternalServiceException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExternalServiceException, __BaseException>) {
    super({
      name: "ExternalServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExternalServiceException.prototype);
  }
}

/**
 * <p>Input to the <code>GetCredentialsForIdentity</code> action.</p>
 * @public
 */
export interface GetCredentialsForIdentityInput {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId: string | undefined;

  /**
   * <p>A set of optional name-value pairs that map provider names to provider tokens. The
   *          name-value pair will follow the syntax "provider_name":
   *          "provider_user_identifier".</p>
   *          <p>Logins should not be specified when trying to get credentials for an unauthenticated
   *          identity.</p>
   *          <p>The Logins parameter is required when using identities associated with external
   *          identity providers such as Facebook. For examples of <code>Logins</code> maps, see the code
   *          examples in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/external-identity-providers.html">External Identity Providers</a> section of the Amazon Cognito Developer
   *          Guide.</p>
   * @public
   */
  Logins?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the role to be assumed when multiple roles were
   *          received in the token from the identity provider. For example, a SAML-based identity
   *          provider. This parameter is optional for identity providers that do not support role
   *          customization.</p>
   * @public
   */
  CustomRoleArn?: string;
}

/**
 * <p>Credentials for the provided identity ID.</p>
 * @public
 */
export interface Credentials {
  /**
   * <p>The Access Key portion of the credentials.</p>
   * @public
   */
  AccessKeyId?: string;

  /**
   * <p>The Secret Access Key portion of the credentials</p>
   * @public
   */
  SecretKey?: string;

  /**
   * <p>The Session Token portion of the credentials</p>
   * @public
   */
  SessionToken?: string;

  /**
   * <p>The date at which these credentials will expire.</p>
   * @public
   */
  Expiration?: Date;
}

/**
 * <p>Returned in response to a successful <code>GetCredentialsForIdentity</code>
 *          operation.</p>
 * @public
 */
export interface GetCredentialsForIdentityResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId?: string;

  /**
   * <p>Credentials for the provided identity ID.</p>
   * @public
   */
  Credentials?: Credentials;
}

/**
 * <p>Thrown if the identity pool has no role associated for the given auth type
 *          (auth/unauth) or if the AssumeRole fails.</p>
 * @public
 */
export class InvalidIdentityPoolConfigurationException extends __BaseException {
  readonly name: "InvalidIdentityPoolConfigurationException" = "InvalidIdentityPoolConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIdentityPoolConfigurationException, __BaseException>) {
    super({
      name: "InvalidIdentityPoolConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIdentityPoolConfigurationException.prototype);
  }
}

/**
 * <p>Input to the GetId action.</p>
 * @public
 */
export interface GetIdInput {
  /**
   * <p>A standard AWS account ID (9+ digits).</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A set of optional name-value pairs that map provider names to provider tokens. The
   *          available provider names for <code>Logins</code> are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>Facebook: <code>graph.facebook.com</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Cognito user pool:
   *                   <code>cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID></code>,
   *                for example, <code>cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789</code>.
   *             </p>
   *             </li>
   *             <li>
   *                <p>Google: <code>accounts.google.com</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon: <code>www.amazon.com</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Twitter: <code>api.twitter.com</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Digits: <code>www.digits.com</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Logins?: Record<string, string>;
}

/**
 * <p>Returned in response to a GetId request.</p>
 * @public
 */
export interface GetIdResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId?: string;
}

/**
 * <p>Input to the <code>GetIdentityPoolRoles</code> action.</p>
 * @public
 */
export interface GetIdentityPoolRolesInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MappingRuleMatchType = {
  CONTAINS: "Contains",
  EQUALS: "Equals",
  NOT_EQUAL: "NotEqual",
  STARTS_WITH: "StartsWith",
} as const;

/**
 * @public
 */
export type MappingRuleMatchType = (typeof MappingRuleMatchType)[keyof typeof MappingRuleMatchType];

/**
 * <p>A rule that maps a claim name, a claim value, and a match type to a role
 *          ARN.</p>
 * @public
 */
export interface MappingRule {
  /**
   * <p>The claim name that must be present in the token, for example, "isAdmin" or
   *          "paid".</p>
   * @public
   */
  Claim: string | undefined;

  /**
   * <p>The match condition that specifies how closely the claim value in the IdP token must
   *          match <code>Value</code>.</p>
   * @public
   */
  MatchType: MappingRuleMatchType | undefined;

  /**
   * <p>A brief string that the claim must match, for example, "paid" or "yes".</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The role ARN.</p>
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * <p>A container for rules.</p>
 * @public
 */
export interface RulesConfigurationType {
  /**
   * <p>An array of rules. You can specify up to 25 rules per identity provider.</p>
   *          <p>Rules are evaluated in order. The first one to match specifies the role.</p>
   * @public
   */
  Rules: MappingRule[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RoleMappingType = {
  RULES: "Rules",
  TOKEN: "Token",
} as const;

/**
 * @public
 */
export type RoleMappingType = (typeof RoleMappingType)[keyof typeof RoleMappingType];

/**
 * <p>A role mapping.</p>
 * @public
 */
export interface RoleMapping {
  /**
   * <p>The role mapping type. Token will use <code>cognito:roles</code> and
   *             <code>cognito:preferred_role</code> claims from the Cognito identity provider token to
   *          map groups to roles. Rules will attempt to match claims from the token to map to a
   *          role.</p>
   * @public
   */
  Type: RoleMappingType | undefined;

  /**
   * <p>If you specify Token or Rules as the <code>Type</code>,
   *             <code>AmbiguousRoleResolution</code> is required.</p>
   *          <p>Specifies the action to be taken if either no rules match the claim value for the
   *             <code>Rules</code> type, or there is no <code>cognito:preferred_role</code> claim and
   *          there are multiple <code>cognito:roles</code> matches for the <code>Token</code>
   *          type.</p>
   * @public
   */
  AmbiguousRoleResolution?: AmbiguousRoleResolutionType;

  /**
   * <p>The rules to be used for mapping users to roles.</p>
   *          <p>If you specify Rules as the role mapping type, <code>RulesConfiguration</code> is
   *          required.</p>
   * @public
   */
  RulesConfiguration?: RulesConfigurationType;
}

/**
 * <p>Returned in response to a successful <code>GetIdentityPoolRoles</code>
 *          operation.</p>
 * @public
 */
export interface GetIdentityPoolRolesResponse {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId?: string;

  /**
   * <p>The map of roles associated with this pool. Currently only authenticated and
   *          unauthenticated roles are supported.</p>
   * @public
   */
  Roles?: Record<string, string>;

  /**
   * <p>How users for a specific identity provider are to mapped to roles. This is a
   *             String-to-<a>RoleMapping</a> object map. The string identifies the identity
   *          provider, for example, "graph.facebook.com" or
   *          "cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".</p>
   * @public
   */
  RoleMappings?: Record<string, RoleMapping>;
}

/**
 * <p>Input to the GetOpenIdToken action.</p>
 * @public
 */
export interface GetOpenIdTokenInput {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId: string | undefined;

  /**
   * <p>A set of optional name-value pairs that map provider names to provider tokens. When
   *          using graph.facebook.com and www.amazon.com, supply the access_token returned from the
   *          provider's authflow. For accounts.google.com, an Amazon Cognito user pool provider, or any
   *          other OpenID Connect provider, always include the <code>id_token</code>.</p>
   * @public
   */
  Logins?: Record<string, string>;
}

/**
 * <p>Returned in response to a successful GetOpenIdToken request.</p>
 * @public
 */
export interface GetOpenIdTokenResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID. Note that the IdentityId returned may
   *          not match the one passed on input.</p>
   * @public
   */
  IdentityId?: string;

  /**
   * <p>An OpenID token, valid for 10 minutes.</p>
   * @public
   */
  Token?: string;
}

/**
 * <p>The provided developer user identifier is already registered with Cognito under a
 *          different identity ID.</p>
 * @public
 */
export class DeveloperUserAlreadyRegisteredException extends __BaseException {
  readonly name: "DeveloperUserAlreadyRegisteredException" = "DeveloperUserAlreadyRegisteredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeveloperUserAlreadyRegisteredException, __BaseException>) {
    super({
      name: "DeveloperUserAlreadyRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeveloperUserAlreadyRegisteredException.prototype);
  }
}

/**
 * <p>Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.</p>
 * @public
 */
export interface GetOpenIdTokenForDeveloperIdentityInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId?: string;

  /**
   * <p>A set of optional name-value pairs that map provider names to provider tokens. Each
   *          name-value pair represents a user from a public provider or developer provider. If the user
   *          is from a developer provider, the name-value pair will follow the syntax
   *             <code>"developer_provider_name": "developer_user_identifier"</code>. The developer
   *          provider is the "domain" by which Cognito will refer to your users; you provided this
   *          domain while creating/updating the identity pool. The developer user identifier is an
   *          identifier from your backend that uniquely identifies a user. When you create an identity
   *          pool, you can specify the supported logins.</p>
   * @public
   */
  Logins: Record<string, string> | undefined;

  /**
   * <p>Use this operation to configure attribute mappings for custom providers. </p>
   * @public
   */
  PrincipalTags?: Record<string, string>;

  /**
   * <p>The expiration time of the token, in seconds. You can specify a custom expiration
   *          time for the token so that you can cache it. If you don't provide an expiration time, the
   *          token is valid for 15 minutes. You can exchange the token with Amazon STS for temporary AWS
   *          credentials, which are valid for a maximum of one hour. The maximum token duration you can
   *          set is 24 hours. You should take care in setting the expiration time for a token, as there
   *          are significant security implications: an attacker could use a leaked token to access your
   *          AWS resources for the token's duration.</p>
   *          <note>
   *             <p>Please provide for a small grace period, usually no more than 5 minutes, to account for clock skew.</p>
   *          </note>
   * @public
   */
  TokenDuration?: number;
}

/**
 * <p>Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code>
 *          request.</p>
 * @public
 */
export interface GetOpenIdTokenForDeveloperIdentityResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId?: string;

  /**
   * <p>An OpenID token.</p>
   * @public
   */
  Token?: string;
}

/**
 * @public
 */
export interface GetPrincipalTagAttributeMapInput {
  /**
   * <p>You can use this operation to get the ID of the Identity Pool you setup attribute mappings for.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>You can use this operation to get the provider name.</p>
   * @public
   */
  IdentityProviderName: string | undefined;
}

/**
 * @public
 */
export interface GetPrincipalTagAttributeMapResponse {
  /**
   * <p>You can use this operation to get the ID of the Identity Pool you setup attribute mappings for.</p>
   * @public
   */
  IdentityPoolId?: string;

  /**
   * <p>You can use this operation to get the provider name.</p>
   * @public
   */
  IdentityProviderName?: string;

  /**
   * <p>You can use this operation to list </p>
   * @public
   */
  UseDefaults?: boolean;

  /**
   * <p>You can use this operation to add principal tags. The <code>PrincipalTags</code>operation enables you to reference user attributes in your IAM permissions policy.</p>
   * @public
   */
  PrincipalTags?: Record<string, string>;
}

/**
 * <p>Input to the ListIdentities action.</p>
 * @public
 */
export interface ListIdentitiesInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>The maximum number of identities to return.</p>
   * @public
   */
  MaxResults: number | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>An optional boolean parameter that allows you to hide disabled identities. If
   *          omitted, the ListIdentities API will include disabled identities in the response.</p>
   * @public
   */
  HideDisabled?: boolean;
}

/**
 * <p>The response to a ListIdentities request.</p>
 * @public
 */
export interface ListIdentitiesResponse {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId?: string;

  /**
   * <p>An object containing a set of identities and associated mappings.</p>
   * @public
   */
  Identities?: IdentityDescription[];

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Input to the ListIdentityPools action.</p>
 * @public
 */
export interface ListIdentityPoolsInput {
  /**
   * <p>The maximum number of identities to return.</p>
   * @public
   */
  MaxResults: number | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A description of the identity pool.</p>
 * @public
 */
export interface IdentityPoolShortDescription {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId?: string;

  /**
   * <p>A string that you provide.</p>
   * @public
   */
  IdentityPoolName?: string;
}

/**
 * <p>The result of a successful ListIdentityPools action.</p>
 * @public
 */
export interface ListIdentityPoolsResponse {
  /**
   * <p>The identity pools returned by the ListIdentityPools action.</p>
   * @public
   */
  IdentityPools?: IdentityPoolShortDescription[];

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the identity pool that the tags are assigned
   *          to.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are assigned to the identity pool.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Input to the <code>LookupDeveloperIdentityInput</code> action.</p>
 * @public
 */
export interface LookupDeveloperIdentityInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId?: string;

  /**
   * <p>A unique ID used by your backend authentication process to identify a user.
   *          Typically, a developer identity provider would issue many developer user identifiers, in
   *          keeping with the number of users.</p>
   * @public
   */
  DeveloperUserIdentifier?: string;

  /**
   * <p>The maximum number of identities to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A pagination token. The first call you make will have <code>NextToken</code> set to
   *          null. After that the service will return <code>NextToken</code> values as needed. For
   *          example, let's say you make a request with <code>MaxResults</code> set to 10, and there are
   *          20 matches in the database. The service will return a pagination token as a part of the
   *          response. This token can be used to call the API again and get results starting from the
   *          11th match.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Returned in response to a successful <code>LookupDeveloperIdentity</code>
 *          action.</p>
 * @public
 */
export interface LookupDeveloperIdentityResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId?: string;

  /**
   * <p>This is the list of developer user identifiers associated with an identity ID.
   *          Cognito supports the association of multiple developer user identifiers with an identity
   *          ID.</p>
   * @public
   */
  DeveloperUserIdentifierList?: string[];

  /**
   * <p>A pagination token. The first call you make will have <code>NextToken</code> set to
   *          null. After that the service will return <code>NextToken</code> values as needed. For
   *          example, let's say you make a request with <code>MaxResults</code> set to 10, and there are
   *          20 matches in the database. The service will return a pagination token as a part of the
   *          response. This token can be used to call the API again and get results starting from the
   *          11th match.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Input to the <code>MergeDeveloperIdentities</code> action.</p>
 * @public
 */
export interface MergeDeveloperIdentitiesInput {
  /**
   * <p>User identifier for the source user. The value should be a
   *             <code>DeveloperUserIdentifier</code>.</p>
   * @public
   */
  SourceUserIdentifier: string | undefined;

  /**
   * <p>User identifier for the destination user. The value should be a
   *             <code>DeveloperUserIdentifier</code>.</p>
   * @public
   */
  DestinationUserIdentifier: string | undefined;

  /**
   * <p>The "domain" by which Cognito will refer to your users. This is a (pseudo) domain
   *          name that you provide while creating an identity pool. This name acts as a placeholder that
   *          allows your backend and the Cognito service to communicate about the developer provider.
   *          For the <code>DeveloperProviderName</code>, you can use letters as well as period (.),
   *          underscore (_), and dash (-).</p>
   * @public
   */
  DeveloperProviderName: string | undefined;

  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * <p>Returned in response to a successful <code>MergeDeveloperIdentities</code>
 *          action.</p>
 * @public
 */
export interface MergeDeveloperIdentitiesResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId?: string;
}

/**
 * <p>Thrown if there are parallel requests to modify a resource.</p>
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
 * <p>Input to the <code>SetIdentityPoolRoles</code> action.</p>
 * @public
 */
export interface SetIdentityPoolRolesInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>The map of roles associated with this pool. For a given role, the key will be either
   *          "authenticated" or "unauthenticated" and the value will be the Role ARN.</p>
   * @public
   */
  Roles: Record<string, string> | undefined;

  /**
   * <p>How users for a specific identity provider are to mapped to roles. This is a string
   *          to <a>RoleMapping</a> object map. The string identifies the identity provider,
   *          for example, "graph.facebook.com" or
   *          "cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".</p>
   *          <p>Up to 25 rules can be specified per identity provider.</p>
   * @public
   */
  RoleMappings?: Record<string, RoleMapping>;
}

/**
 * @public
 */
export interface SetPrincipalTagAttributeMapInput {
  /**
   * <p>The ID of the Identity Pool you want to set attribute mappings for.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>The provider name you want to use for attribute mappings.</p>
   * @public
   */
  IdentityProviderName: string | undefined;

  /**
   * <p>You can use this operation to use default (username and clientID) attribute mappings.</p>
   * @public
   */
  UseDefaults?: boolean;

  /**
   * <p>You can use this operation to add principal tags.</p>
   * @public
   */
  PrincipalTags?: Record<string, string>;
}

/**
 * @public
 */
export interface SetPrincipalTagAttributeMapResponse {
  /**
   * <p>The ID of the Identity Pool you want to set attribute mappings for.</p>
   * @public
   */
  IdentityPoolId?: string;

  /**
   * <p>The provider name you want to use for attribute mappings.</p>
   * @public
   */
  IdentityProviderName?: string;

  /**
   * <p>You can use this operation to select default (username and clientID) attribute mappings.</p>
   * @public
   */
  UseDefaults?: boolean;

  /**
   * <p>You can use this operation to add principal tags. The <code>PrincipalTags</code>operation enables you to reference user attributes in your IAM permissions policy.</p>
   * @public
   */
  PrincipalTags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the identity pool.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to assign to the identity pool.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>Input to the <code>UnlinkDeveloperIdentity</code> action.</p>
 * @public
 */
export interface UnlinkDeveloperIdentityInput {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId: string | undefined;

  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>The "domain" by which Cognito will refer to your users.</p>
   * @public
   */
  DeveloperProviderName: string | undefined;

  /**
   * <p>A unique ID used by your backend authentication process to identify a user.</p>
   * @public
   */
  DeveloperUserIdentifier: string | undefined;
}

/**
 * <p>Input to the UnlinkIdentity action.</p>
 * @public
 */
export interface UnlinkIdentityInput {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   * @public
   */
  IdentityId: string | undefined;

  /**
   * <p>A set of optional name-value pairs that map provider names to provider
   *          tokens.</p>
   * @public
   */
  Logins: Record<string, string> | undefined;

  /**
   * <p>Provider names to unlink from this identity.</p>
   * @public
   */
  LoginsToRemove: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the identity pool.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the user pool.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @internal
 */
export const GetCredentialsForIdentityInputFilterSensitiveLog = (obj: GetCredentialsForIdentityInput): any => ({
  ...obj,
  ...(obj.Logins && { Logins: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CredentialsFilterSensitiveLog = (obj: Credentials): any => ({
  ...obj,
  ...(obj.SecretKey && { SecretKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetCredentialsForIdentityResponseFilterSensitiveLog = (obj: GetCredentialsForIdentityResponse): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});

/**
 * @internal
 */
export const GetIdInputFilterSensitiveLog = (obj: GetIdInput): any => ({
  ...obj,
  ...(obj.Logins && { Logins: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetOpenIdTokenInputFilterSensitiveLog = (obj: GetOpenIdTokenInput): any => ({
  ...obj,
  ...(obj.Logins && { Logins: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetOpenIdTokenResponseFilterSensitiveLog = (obj: GetOpenIdTokenResponse): any => ({
  ...obj,
  ...(obj.Token && { Token: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetOpenIdTokenForDeveloperIdentityInputFilterSensitiveLog = (
  obj: GetOpenIdTokenForDeveloperIdentityInput
): any => ({
  ...obj,
  ...(obj.Logins && { Logins: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetOpenIdTokenForDeveloperIdentityResponseFilterSensitiveLog = (
  obj: GetOpenIdTokenForDeveloperIdentityResponse
): any => ({
  ...obj,
  ...(obj.Token && { Token: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UnlinkIdentityInputFilterSensitiveLog = (obj: UnlinkIdentityInput): any => ({
  ...obj,
  ...(obj.Logins && { Logins: SENSITIVE_STRING }),
});
