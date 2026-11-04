// smithy-typescript generated code
import type { AmbiguousRoleResolutionType, ErrorCode, MappingRuleMatchType, RoleMappingType } from "./enums";

/**
 * A provider representing an Amazon Cognito user pool and its client ID.
 *
 * @public
 */
export interface CognitoIdentityProvider {
  /**
   * The provider name for an Amazon Cognito user pool. For example, `cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789`.
   *
   * @public
   */
  ProviderName?: string | undefined;

  /**
   * The client ID for the Amazon Cognito user pool.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * TRUE if server-side token validation is enabled for the identity provider’s token.
   *
   * Once you set `ServerSideTokenCheck` to TRUE for an identity pool, that identity pool will check with the integrated user pools to make sure that the user has not been globally signed out or deleted before the identity pool provides an OIDC token or Amazon Web Services credentials for the user.
   *
   * If the user is signed out or deleted, the identity pool will return a 400 Not Authorized error.
   *
   * @public
   */
  ServerSideTokenCheck?: boolean | undefined;
}

/**
 * Input to the CreateIdentityPool action.
 *
 * @public
 */
export interface CreateIdentityPoolInput {
  /**
   * A string that you provide.
   *
   * @public
   */
  IdentityPoolName: string | undefined;

  /**
   * TRUE if the identity pool supports unauthenticated logins.
   *
   * @public
   */
  AllowUnauthenticatedIdentities: boolean | undefined;

  /**
   * Enables or disables the Basic (Classic) authentication flow. For more information, see [Identity Pools (Federated Identities) Authentication Flow](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html) in the *Amazon Cognito Developer Guide*.
   *
   * @public
   */
  AllowClassicFlow?: boolean | undefined;

  /**
   * Optional key:value pairs mapping provider names to provider app IDs.
   *
   * @public
   */
  SupportedLoginProviders?: Record<string, string> | undefined;

  /**
   * The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the `DeveloperProviderName`, you can use letters as well as period (`.`), underscore (`_`), and dash (`-`).
   *
   * Once you have set a developer provider name, you cannot change it. Please take care in setting this parameter.
   *
   * @public
   */
  DeveloperProviderName?: string | undefined;

  /**
   * The Amazon Resource Names (ARN) of the OpenID Connect providers.
   *
   * @public
   */
  OpenIdConnectProviderARNs?: string[] | undefined;

  /**
   * An array of Amazon Cognito user pools and their client IDs.
   *
   * @public
   */
  CognitoIdentityProviders?: CognitoIdentityProvider[] | undefined;

  /**
   * An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.
   *
   * @public
   */
  SamlProviderARNs?: string[] | undefined;

  /**
   * Tags to assign to the identity pool. A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.
   *
   * @public
   */
  IdentityPoolTags?: Record<string, string> | undefined;
}

/**
 * An object representing an Amazon Cognito identity pool.
 *
 * @public
 */
export interface IdentityPool {
  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * A string that you provide.
   *
   * @public
   */
  IdentityPoolName: string | undefined;

  /**
   * TRUE if the identity pool supports unauthenticated logins.
   *
   * @public
   */
  AllowUnauthenticatedIdentities: boolean | undefined;

  /**
   * Enables or disables the Basic (Classic) authentication flow. For more information, see [Identity Pools (Federated Identities) Authentication Flow](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html) in the *Amazon Cognito Developer Guide*.
   *
   * @public
   */
  AllowClassicFlow?: boolean | undefined;

  /**
   * Optional key:value pairs mapping provider names to provider app IDs.
   *
   * @public
   */
  SupportedLoginProviders?: Record<string, string> | undefined;

  /**
   * The "domain" by which Cognito will refer to your users.
   *
   * @public
   */
  DeveloperProviderName?: string | undefined;

  /**
   * The ARNs of the OpenID Connect providers.
   *
   * @public
   */
  OpenIdConnectProviderARNs?: string[] | undefined;

  /**
   * A list representing an Amazon Cognito user pool and its client ID.
   *
   * @public
   */
  CognitoIdentityProviders?: CognitoIdentityProvider[] | undefined;

  /**
   * An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.
   *
   * @public
   */
  SamlProviderARNs?: string[] | undefined;

  /**
   * The tags that are assigned to the identity pool. A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.
   *
   * @public
   */
  IdentityPoolTags?: Record<string, string> | undefined;
}

/**
 * Input to the `DeleteIdentities` action.
 *
 * @public
 */
export interface DeleteIdentitiesInput {
  /**
   * A list of 1-60 identities that you want to delete.
   *
   * @public
   */
  IdentityIdsToDelete: string[] | undefined;
}

/**
 * An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
 *
 * @public
 */
export interface UnprocessedIdentityId {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * The error code indicating the type of error that occurred.
   *
   * @public
   */
  ErrorCode?: ErrorCode | undefined;
}

/**
 * Returned in response to a successful `DeleteIdentities` operation.
 *
 * @public
 */
export interface DeleteIdentitiesResponse {
  /**
   * An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
   *
   * @public
   */
  UnprocessedIdentityIds?: UnprocessedIdentityId[] | undefined;
}

/**
 * Input to the DeleteIdentityPool action.
 *
 * @public
 */
export interface DeleteIdentityPoolInput {
  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * Input to the `DescribeIdentity` action.
 *
 * @public
 */
export interface DescribeIdentityInput {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId: string | undefined;
}

/**
 * A description of the identity.
 *
 * @public
 */
export interface IdentityDescription {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * The provider names.
   *
   * @public
   */
  Logins?: string[] | undefined;

  /**
   * Date on which the identity was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Date on which the identity was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;
}

/**
 * Input to the DescribeIdentityPool action.
 *
 * @public
 */
export interface DescribeIdentityPoolInput {
  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * Input to the `GetCredentialsForIdentity` action.
 *
 * @public
 */
export interface GetCredentialsForIdentityInput {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId: string | undefined;

  /**
   * A set of optional name-value pairs that map provider names to provider tokens. The name-value pair will follow the syntax "provider_name": "provider_user_identifier".
   *
   * Logins should not be specified when trying to get credentials for an unauthenticated identity.
   *
   * The Logins parameter is required when using identities associated with external identity providers such as Facebook. For examples of `Logins` maps, see the code examples in the [External Identity Providers](https://docs.aws.amazon.com/cognito/latest/developerguide/external-identity-providers.html) section of the Amazon Cognito Developer Guide.
   *
   * @public
   */
  Logins?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role to be assumed when multiple roles were received in the token from the identity provider. For example, a SAML-based identity provider. This parameter is optional for identity providers that do not support role customization.
   *
   * @public
   */
  CustomRoleArn?: string | undefined;
}

/**
 * Credentials for the provided identity ID.
 *
 * @public
 */
export interface Credentials {
  /**
   * The Access Key portion of the credentials.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The Secret Access Key portion of the credentials
   *
   * @public
   */
  SecretKey?: string | undefined;

  /**
   * The Session Token portion of the credentials
   *
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * The date at which these credentials will expire.
   *
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * Returned in response to a successful `GetCredentialsForIdentity` operation.
 *
 * @public
 */
export interface GetCredentialsForIdentityResponse {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * Credentials for the provided identity ID.
   *
   * @public
   */
  Credentials?: Credentials | undefined;
}

/**
 * Input to the GetId action.
 *
 * @public
 */
export interface GetIdInput {
  /**
   * A standard Amazon Web Services account ID (9+ digits).
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * A set of optional name-value pairs that map provider names to provider tokens. The available provider names for `Logins` are as follows:
   *
   * - Facebook: `graph.facebook.com`
   * - Amazon Cognito user pool: `cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>`, for example, `cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789`.
   * - Google: `accounts.google.com`
   * - Amazon: `www.amazon.com`
   * - Twitter: `api.twitter.com`
   * - Digits: `www.digits.com`
   *
   * @public
   */
  Logins?: Record<string, string> | undefined;
}

/**
 * Returned in response to a GetId request.
 *
 * @public
 */
export interface GetIdResponse {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId?: string | undefined;
}

/**
 * Input to the `GetIdentityPoolRoles` action.
 *
 * @public
 */
export interface GetIdentityPoolRolesInput {
  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * A rule that maps a claim name, a claim value, and a match type to a role ARN.
 *
 * @public
 */
export interface MappingRule {
  /**
   * The claim name that must be present in the token, for example, "isAdmin" or "paid".
   *
   * @public
   */
  Claim: string | undefined;

  /**
   * The match condition that specifies how closely the claim value in the IdP token must match `Value`.
   *
   * @public
   */
  MatchType: MappingRuleMatchType | undefined;

  /**
   * A brief string that the claim must match, for example, "paid" or "yes".
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The role ARN.
   *
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * A container for rules.
 *
 * @public
 */
export interface RulesConfigurationType {
  /**
   * An array of rules. You can specify up to 25 rules per identity provider.
   *
   * Rules are evaluated in order. The first one to match specifies the role.
   *
   * @public
   */
  Rules: MappingRule[] | undefined;
}

/**
 * A role mapping.
 *
 * @public
 */
export interface RoleMapping {
  /**
   * The role mapping type. Token will use `cognito:roles` and `cognito:preferred_role` claims from the Cognito identity provider token to map groups to roles. Rules will attempt to match claims from the token to map to a role.
   *
   * @public
   */
  Type: RoleMappingType | undefined;

  /**
   * If you specify Token or Rules as the `Type`, `AmbiguousRoleResolution` is required.
   *
   * Specifies the action to be taken if either no rules match the claim value for the `Rules` type, or there is no `cognito:preferred_role` claim and there are multiple `cognito:roles` matches for the `Token` type.
   *
   * @public
   */
  AmbiguousRoleResolution?: AmbiguousRoleResolutionType | undefined;

  /**
   * The rules to be used for mapping users to roles.
   *
   * If you specify Rules as the role mapping type, `RulesConfiguration` is required.
   *
   * @public
   */
  RulesConfiguration?: RulesConfigurationType | undefined;
}

/**
 * Returned in response to a successful `GetIdentityPoolRoles` operation.
 *
 * @public
 */
export interface GetIdentityPoolRolesResponse {
  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * The map of roles associated with this pool. Currently only authenticated and unauthenticated roles are supported.
   *
   * @public
   */
  Roles?: Record<string, string> | undefined;

  /**
   * How users for a specific identity provider are to mapped to roles. This is a String-to-RoleMapping object map. The string identifies the identity provider, for example, `graph.facebook.com` or `cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id`.
   *
   * @public
   */
  RoleMappings?: Record<string, RoleMapping> | undefined;
}

/**
 * Input to the GetOpenIdToken action.
 *
 * @public
 */
export interface GetOpenIdTokenInput {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId: string | undefined;

  /**
   * A set of optional name-value pairs that map provider names to provider tokens. When using graph.facebook.com and www.amazon.com, supply the access_token returned from the provider's authflow. For accounts.google.com, an Amazon Cognito user pool provider, or any other OpenID Connect provider, always include the `id_token`.
   *
   * @public
   */
  Logins?: Record<string, string> | undefined;
}

/**
 * Returned in response to a successful GetOpenIdToken request.
 *
 * @public
 */
export interface GetOpenIdTokenResponse {
  /**
   * A unique identifier in the format REGION:GUID. Note that the IdentityId returned may not match the one passed on input.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * An OpenID token, valid for 10 minutes.
   *
   * @public
   */
  Token?: string | undefined;
}

/**
 * Input to the `GetOpenIdTokenForDeveloperIdentity` action.
 *
 * @public
 */
export interface GetOpenIdTokenForDeveloperIdentityInput {
  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * A set of optional name-value pairs that map provider names to provider tokens. Each name-value pair represents a user from a public provider or developer provider. If the user is from a developer provider, the name-value pair will follow the syntax `"developer_provider_name": "developer_user_identifier"`. The developer provider is the "domain" by which Cognito will refer to your users; you provided this domain while creating/updating the identity pool. The developer user identifier is an identifier from your backend that uniquely identifies a user. When you create an identity pool, you can specify the supported logins.
   *
   * @public
   */
  Logins: Record<string, string> | undefined;

  /**
   * Use this operation to configure attribute mappings for custom providers.
   *
   * @public
   */
  PrincipalTags?: Record<string, string> | undefined;

  /**
   * The expiration time of the token, in seconds. You can specify a custom expiration time for the token so that you can cache it. If you don't provide an expiration time, the token is valid for 15 minutes. You can exchange the token with Amazon STS for temporary Amazon Web Services credentials, which are valid for a maximum of one hour. The maximum token duration you can set is 24 hours. You should take care in setting the expiration time for a token, as there are significant security implications: an attacker could use a leaked token to access your Amazon Web Services resources for the token's duration.
   *
   * > **Note:** Please provide for a small grace period, usually no more than 5 minutes, to account for clock skew.
   *
   * @public
   */
  TokenDuration?: number | undefined;
}

/**
 * Returned in response to a successful `GetOpenIdTokenForDeveloperIdentity` request.
 *
 * @public
 */
export interface GetOpenIdTokenForDeveloperIdentityResponse {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * An OpenID token.
   *
   * @public
   */
  Token?: string | undefined;
}

/**
 * @public
 */
export interface GetPrincipalTagAttributeMapInput {
  /**
   * You can use this operation to get the ID of the Identity Pool you setup attribute mappings for.
   *
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * You can use this operation to get the provider name.
   *
   * @public
   */
  IdentityProviderName: string | undefined;
}

/**
 * @public
 */
export interface GetPrincipalTagAttributeMapResponse {
  /**
   * You can use this operation to get the ID of the Identity Pool you setup attribute mappings for.
   *
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * You can use this operation to get the provider name.
   *
   * @public
   */
  IdentityProviderName?: string | undefined;

  /**
   * You can use this operation to list
   *
   * @public
   */
  UseDefaults?: boolean | undefined;

  /**
   * You can use this operation to add principal tags. The `PrincipalTags`operation enables you to reference user attributes in your IAM permissions policy.
   *
   * @public
   */
  PrincipalTags?: Record<string, string> | undefined;
}

/**
 * Input to the ListIdentities action.
 *
 * @public
 */
export interface ListIdentitiesInput {
  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * The maximum number of identities to return.
   *
   * @public
   */
  MaxResults: number | undefined;

  /**
   * A pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional boolean parameter that allows you to hide disabled identities. If omitted, the ListIdentities API will include disabled identities in the response.
   *
   * @public
   */
  HideDisabled?: boolean | undefined;
}

/**
 * The response to a ListIdentities request.
 *
 * @public
 */
export interface ListIdentitiesResponse {
  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * An object containing a set of identities and associated mappings.
   *
   * @public
   */
  Identities?: IdentityDescription[] | undefined;

  /**
   * A pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input to the ListIdentityPools action.
 *
 * @public
 */
export interface ListIdentityPoolsInput {
  /**
   * The maximum number of identities to return.
   *
   * @public
   */
  MaxResults: number | undefined;

  /**
   * A pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A description of the identity pool.
 *
 * @public
 */
export interface IdentityPoolShortDescription {
  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * A string that you provide.
   *
   * @public
   */
  IdentityPoolName?: string | undefined;
}

/**
 * The result of a successful ListIdentityPools action.
 *
 * @public
 */
export interface ListIdentityPoolsResponse {
  /**
   * The identity pools returned by the ListIdentityPools action.
   *
   * @public
   */
  IdentityPools?: IdentityPoolShortDescription[] | undefined;

  /**
   * A pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the identity pool that the tags are assigned to.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags that are assigned to the identity pool.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Input to the `LookupDeveloperIdentityInput` action.
 *
 * @public
 */
export interface LookupDeveloperIdentityInput {
  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * A unique ID used by your backend authentication process to identify a user. Typically, a developer identity provider would issue many developer user identifiers, in keeping with the number of users.
   *
   * @public
   */
  DeveloperUserIdentifier?: string | undefined;

  /**
   * The maximum number of identities to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token. The first call you make will have `NextToken` set to null. After that the service will return `NextToken` values as needed. For example, let's say you make a request with `MaxResults` set to 10, and there are 20 matches in the database. The service will return a pagination token as a part of the response. This token can be used to call the API again and get results starting from the 11th match.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Returned in response to a successful `LookupDeveloperIdentity` action.
 *
 * @public
 */
export interface LookupDeveloperIdentityResponse {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * This is the list of developer user identifiers associated with an identity ID. Cognito supports the association of multiple developer user identifiers with an identity ID.
   *
   * @public
   */
  DeveloperUserIdentifierList?: string[] | undefined;

  /**
   * A pagination token. The first call you make will have `NextToken` set to null. After that the service will return `NextToken` values as needed. For example, let's say you make a request with `MaxResults` set to 10, and there are 20 matches in the database. The service will return a pagination token as a part of the response. This token can be used to call the API again and get results starting from the 11th match.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input to the `MergeDeveloperIdentities` action.
 *
 * @public
 */
export interface MergeDeveloperIdentitiesInput {
  /**
   * User identifier for the source user. The value should be a `DeveloperUserIdentifier`.
   *
   * @public
   */
  SourceUserIdentifier: string | undefined;

  /**
   * User identifier for the destination user. The value should be a `DeveloperUserIdentifier`.
   *
   * @public
   */
  DestinationUserIdentifier: string | undefined;

  /**
   * The "domain" by which Cognito will refer to your users. This is a (pseudo) domain name that you provide while creating an identity pool. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the `DeveloperProviderName`, you can use letters as well as period (.), underscore (_), and dash (-).
   *
   * @public
   */
  DeveloperProviderName: string | undefined;

  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;
}

/**
 * Returned in response to a successful `MergeDeveloperIdentities` action.
 *
 * @public
 */
export interface MergeDeveloperIdentitiesResponse {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId?: string | undefined;
}

/**
 * Input to the `SetIdentityPoolRoles` action.
 *
 * @public
 */
export interface SetIdentityPoolRolesInput {
  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * The map of roles associated with this pool. For a given role, the key will be either "authenticated" or "unauthenticated" and the value will be the Role ARN.
   *
   * @public
   */
  Roles: Record<string, string> | undefined;

  /**
   * How users for a specific identity provider are to mapped to roles. This is a string to RoleMapping object map. The string identifies the identity provider, for example, `graph.facebook.com` or `cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id`.
   *
   * Up to 25 rules can be specified per identity provider.
   *
   * @public
   */
  RoleMappings?: Record<string, RoleMapping> | undefined;
}

/**
 * @public
 */
export interface SetPrincipalTagAttributeMapInput {
  /**
   * The ID of the Identity Pool you want to set attribute mappings for.
   *
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * The provider name you want to use for attribute mappings.
   *
   * @public
   */
  IdentityProviderName: string | undefined;

  /**
   * You can use this operation to use default (username and clientID) attribute mappings.
   *
   * @public
   */
  UseDefaults?: boolean | undefined;

  /**
   * You can use this operation to add principal tags.
   *
   * @public
   */
  PrincipalTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SetPrincipalTagAttributeMapResponse {
  /**
   * The ID of the Identity Pool you want to set attribute mappings for.
   *
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * The provider name you want to use for attribute mappings.
   *
   * @public
   */
  IdentityProviderName?: string | undefined;

  /**
   * You can use this operation to select default (username and clientID) attribute mappings.
   *
   * @public
   */
  UseDefaults?: boolean | undefined;

  /**
   * You can use this operation to add principal tags. The `PrincipalTags`operation enables you to reference user attributes in your IAM permissions policy.
   *
   * @public
   */
  PrincipalTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the identity pool.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to assign to the identity pool.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * Input to the `UnlinkDeveloperIdentity` action.
 *
 * @public
 */
export interface UnlinkDeveloperIdentityInput {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId: string | undefined;

  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * The "domain" by which Cognito will refer to your users.
   *
   * @public
   */
  DeveloperProviderName: string | undefined;

  /**
   * A unique ID used by your backend authentication process to identify a user.
   *
   * @public
   */
  DeveloperUserIdentifier: string | undefined;
}

/**
 * Input to the UnlinkIdentity action.
 *
 * @public
 */
export interface UnlinkIdentityInput {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId: string | undefined;

  /**
   * A set of optional name-value pairs that map provider names to provider tokens.
   *
   * @public
   */
  Logins: Record<string, string> | undefined;

  /**
   * Provider names to unlink from this identity.
   *
   * @public
   */
  LoginsToRemove: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the identity pool.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the tags to remove from the user pool.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
