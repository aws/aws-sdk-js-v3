import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AmbiguousRoleResolutionType {
  AUTHENTICATED_ROLE = "AuthenticatedRole",
  DENY = "Deny",
}

/**
 * <p>A provider representing an Amazon Cognito user pool and its client ID.</p>
 */
export interface CognitoIdentityProvider {
  /**
   * <p>The provider name for an Amazon Cognito user pool. For example,
   *             <code>cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789</code>.</p>
   */
  ProviderName?: string;

  /**
   * <p>The client ID for the Amazon Cognito user pool.</p>
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
   */
  ServerSideTokenCheck?: boolean;
}

export namespace CognitoIdentityProvider {
  export const filterSensitiveLog = (obj: CognitoIdentityProvider): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the CreateIdentityPool action.</p>
 */
export interface CreateIdentityPoolInput {
  /**
   * <p>A string that you provide.</p>
   */
  IdentityPoolName: string | undefined;

  /**
   * <p>TRUE if the identity pool supports unauthenticated logins.</p>
   */
  AllowUnauthenticatedIdentities: boolean | undefined;

  /**
   * <p>Enables or disables the Basic (Classic) authentication flow. For more information, see
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   */
  AllowClassicFlow?: boolean;

  /**
   * <p>Optional key:value pairs mapping provider names to provider app IDs.</p>
   */
  SupportedLoginProviders?: { [key: string]: string };

  /**
   * <p>The "domain" by which Cognito will refer to your users. This name acts as a
   *          placeholder that allows your backend and the Cognito service to communicate about the
   *          developer provider. For the <code>DeveloperProviderName</code>, you can use letters as well
   *          as period (<code>.</code>), underscore (<code>_</code>), and dash
   *          (<code>-</code>).</p>
   *          <p>Once you have set a developer provider name, you cannot change it. Please take care
   *          in setting this parameter.</p>
   */
  DeveloperProviderName?: string;

  /**
   * <p>A list of OpendID Connect provider ARNs.</p>
   */
  OpenIdConnectProviderARNs?: string[];

  /**
   * <p>An array of Amazon Cognito user pools and their client IDs.</p>
   */
  CognitoIdentityProviders?: CognitoIdentityProvider[];

  /**
   * <p>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity
   *          pool.</p>
   */
  SamlProviderARNs?: string[];

  /**
   * <p>Tags to assign to the identity pool. A tag is a label that you can apply to identity
   *          pools to categorize and manage them in different ways, such as by purpose, owner,
   *          environment, or other criteria.</p>
   */
  IdentityPoolTags?: { [key: string]: string };
}

export namespace CreateIdentityPoolInput {
  export const filterSensitiveLog = (obj: CreateIdentityPoolInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing an Amazon Cognito identity pool.</p>
 */
export interface IdentityPool {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A string that you provide.</p>
   */
  IdentityPoolName: string | undefined;

  /**
   * <p>TRUE if the identity pool supports unauthenticated logins.</p>
   */
  AllowUnauthenticatedIdentities: boolean | undefined;

  /**
   * <p>Enables or disables the Basic (Classic) authentication flow. For more information, see
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   */
  AllowClassicFlow?: boolean;

  /**
   * <p>Optional key:value pairs mapping provider names to provider app IDs.</p>
   */
  SupportedLoginProviders?: { [key: string]: string };

  /**
   * <p>The "domain" by which Cognito will refer to your users.</p>
   */
  DeveloperProviderName?: string;

  /**
   * <p>A list of OpendID Connect provider ARNs.</p>
   */
  OpenIdConnectProviderARNs?: string[];

  /**
   * <p>A list representing an Amazon Cognito user pool and its client ID.</p>
   */
  CognitoIdentityProviders?: CognitoIdentityProvider[];

  /**
   * <p>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity
   *          pool.</p>
   */
  SamlProviderARNs?: string[];

  /**
   * <p>The tags that are assigned to the identity pool. A tag is a label that you can apply to
   *          identity pools to categorize and manage them in different ways, such as by purpose, owner,
   *          environment, or other criteria.</p>
   */
  IdentityPoolTags?: { [key: string]: string };
}

export namespace IdentityPool {
  export const filterSensitiveLog = (obj: IdentityPool): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown when the service encounters an error during processing the request.</p>
 */
export interface InternalErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalErrorException";
  $fault: "server";
  /**
   * <p>The message returned by an InternalErrorException.</p>
   */
  message?: string;
}

export namespace InternalErrorException {
  export const filterSensitiveLog = (obj: InternalErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown for missing or bad input parameter(s).</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * <p>The message returned by an InvalidParameterException.</p>
   */
  message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown when the total number of user pools has exceeded a preset limit.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The message returned by a LimitExceededException.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown when a user is not authorized to access the requested resource.</p>
 */
export interface NotAuthorizedException extends __SmithyException, $MetadataBearer {
  name: "NotAuthorizedException";
  $fault: "client";
  /**
   * <p>The message returned by a NotAuthorizedException</p>
   */
  message?: string;
}

export namespace NotAuthorizedException {
  export const filterSensitiveLog = (obj: NotAuthorizedException): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown when a user tries to use a login which is already linked to another
 *          account.</p>
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  /**
   * <p>The message returned by a ResourceConflictException.</p>
   */
  message?: string;
}

export namespace ResourceConflictException {
  export const filterSensitiveLog = (obj: ResourceConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown when a request is throttled.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>Message returned by a TooManyRequestsException</p>
   */
  message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the <code>DeleteIdentities</code> action.</p>
 */
export interface DeleteIdentitiesInput {
  /**
   * <p>A list of 1-60 identities that you want to delete.</p>
   */
  IdentityIdsToDelete: string[] | undefined;
}

export namespace DeleteIdentitiesInput {
  export const filterSensitiveLog = (obj: DeleteIdentitiesInput): any => ({
    ...obj,
  });
}

export enum ErrorCode {
  ACCESS_DENIED = "AccessDenied",
  INTERNAL_SERVER_ERROR = "InternalServerError",
}

/**
 * <p>An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and
 *          IdentityId.</p>
 */
export interface UnprocessedIdentityId {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * <p>The error code indicating the type of error that occurred.</p>
   */
  ErrorCode?: ErrorCode | string;
}

export namespace UnprocessedIdentityId {
  export const filterSensitiveLog = (obj: UnprocessedIdentityId): any => ({
    ...obj,
  });
}

/**
 * <p>Returned in response to a successful <code>DeleteIdentities</code>
 *          operation.</p>
 */
export interface DeleteIdentitiesResponse {
  /**
   * <p>An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and
   *          IdentityId.</p>
   */
  UnprocessedIdentityIds?: UnprocessedIdentityId[];
}

export namespace DeleteIdentitiesResponse {
  export const filterSensitiveLog = (obj: DeleteIdentitiesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the DeleteIdentityPool action.</p>
 */
export interface DeleteIdentityPoolInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string | undefined;
}

export namespace DeleteIdentityPoolInput {
  export const filterSensitiveLog = (obj: DeleteIdentityPoolInput): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message returned by a ResourceNotFoundException.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the <code>DescribeIdentity</code> action.</p>
 */
export interface DescribeIdentityInput {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId: string | undefined;
}

export namespace DescribeIdentityInput {
  export const filterSensitiveLog = (obj: DescribeIdentityInput): any => ({
    ...obj,
  });
}

/**
 * <p>A description of the identity.</p>
 */
export interface IdentityDescription {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * <p>The provider names.</p>
   */
  Logins?: string[];

  /**
   * <p>Date on which the identity was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Date on which the identity was last modified.</p>
   */
  LastModifiedDate?: Date;
}

export namespace IdentityDescription {
  export const filterSensitiveLog = (obj: IdentityDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the DescribeIdentityPool action.</p>
 */
export interface DescribeIdentityPoolInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string | undefined;
}

export namespace DescribeIdentityPoolInput {
  export const filterSensitiveLog = (obj: DescribeIdentityPoolInput): any => ({
    ...obj,
  });
}

/**
 * <p>An exception thrown when a dependent service such as Facebook or Twitter is not
 *          responding</p>
 */
export interface ExternalServiceException extends __SmithyException, $MetadataBearer {
  name: "ExternalServiceException";
  $fault: "client";
  /**
   * <p>The message returned by an ExternalServiceException</p>
   */
  message?: string;
}

export namespace ExternalServiceException {
  export const filterSensitiveLog = (obj: ExternalServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the <code>GetCredentialsForIdentity</code> action.</p>
 */
export interface GetCredentialsForIdentityInput {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>A set of optional name-value pairs that map provider names to provider tokens. The
   *          name-value pair will follow the syntax "provider_name":
   *          "provider_user_identifier".</p>
   *          <p>Logins should not be specified when trying to get credentials for an unauthenticated
   *          identity.</p>
   *          <p>The Logins parameter is required when using identities associated with external
   *          identity providers such as FaceBook. For examples of <code>Logins</code> maps, see the code
   *          examples in the <a href="http://docs.aws.amazon.com/cognito/latest/developerguide/external-identity-providers.html">External Identity Providers</a> section of the Amazon Cognito Developer
   *          Guide.</p>
   */
  Logins?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the role to be assumed when multiple roles were
   *          received in the token from the identity provider. For example, a SAML-based identity
   *          provider. This parameter is optional for identity providers that do not support role
   *          customization.</p>
   */
  CustomRoleArn?: string;
}

export namespace GetCredentialsForIdentityInput {
  export const filterSensitiveLog = (obj: GetCredentialsForIdentityInput): any => ({
    ...obj,
  });
}

/**
 * <p>Credentials for the provided identity ID.</p>
 */
export interface Credentials {
  /**
   * <p>The Access Key portion of the credentials.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The Secret Access Key portion of the credentials</p>
   */
  SecretKey?: string;

  /**
   * <p>The Session Token portion of the credentials</p>
   */
  SessionToken?: string;

  /**
   * <p>The date at which these credentials will expire.</p>
   */
  Expiration?: Date;
}

export namespace Credentials {
  export const filterSensitiveLog = (obj: Credentials): any => ({
    ...obj,
  });
}

/**
 * <p>Returned in response to a successful <code>GetCredentialsForIdentity</code>
 *          operation.</p>
 */
export interface GetCredentialsForIdentityResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * <p>Credentials for the provided identity ID.</p>
   */
  Credentials?: Credentials;
}

export namespace GetCredentialsForIdentityResponse {
  export const filterSensitiveLog = (obj: GetCredentialsForIdentityResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown if the identity pool has no role associated for the given auth type
 *          (auth/unauth) or if the AssumeRole fails.</p>
 */
export interface InvalidIdentityPoolConfigurationException extends __SmithyException, $MetadataBearer {
  name: "InvalidIdentityPoolConfigurationException";
  $fault: "client";
  /**
   * <p>The message returned for an <code>InvalidIdentityPoolConfigurationException</code>
   *          </p>
   */
  message?: string;
}

export namespace InvalidIdentityPoolConfigurationException {
  export const filterSensitiveLog = (obj: InvalidIdentityPoolConfigurationException): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the GetId action.</p>
 */
export interface GetIdInput {
  /**
   * <p>A standard AWS account ID (9+ digits).</p>
   */
  AccountId?: string;

  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
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
   */
  Logins?: { [key: string]: string };
}

export namespace GetIdInput {
  export const filterSensitiveLog = (obj: GetIdInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returned in response to a GetId request.</p>
 */
export interface GetIdResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;
}

export namespace GetIdResponse {
  export const filterSensitiveLog = (obj: GetIdResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the <code>GetIdentityPoolRoles</code> action.</p>
 */
export interface GetIdentityPoolRolesInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string | undefined;
}

export namespace GetIdentityPoolRolesInput {
  export const filterSensitiveLog = (obj: GetIdentityPoolRolesInput): any => ({
    ...obj,
  });
}

export enum MappingRuleMatchType {
  CONTAINS = "Contains",
  EQUALS = "Equals",
  NOT_EQUAL = "NotEqual",
  STARTS_WITH = "StartsWith",
}

/**
 * <p>A rule that maps a claim name, a claim value, and a match type to a role
 *          ARN.</p>
 */
export interface MappingRule {
  /**
   * <p>The claim name that must be present in the token, for example, "isAdmin" or
   *          "paid".</p>
   */
  Claim: string | undefined;

  /**
   * <p>The match condition that specifies how closely the claim value in the IdP token must
   *          match <code>Value</code>.</p>
   */
  MatchType: MappingRuleMatchType | string | undefined;

  /**
   * <p>A brief string that the claim must match, for example, "paid" or "yes".</p>
   */
  Value: string | undefined;

  /**
   * <p>The role ARN.</p>
   */
  RoleARN: string | undefined;
}

export namespace MappingRule {
  export const filterSensitiveLog = (obj: MappingRule): any => ({
    ...obj,
  });
}

/**
 * <p>A container for rules.</p>
 */
export interface RulesConfigurationType {
  /**
   * <p>An array of rules. You can specify up to 25 rules per identity provider.</p>
   *          <p>Rules are evaluated in order. The first one to match specifies the role.</p>
   */
  Rules: MappingRule[] | undefined;
}

export namespace RulesConfigurationType {
  export const filterSensitiveLog = (obj: RulesConfigurationType): any => ({
    ...obj,
  });
}

export enum RoleMappingType {
  RULES = "Rules",
  TOKEN = "Token",
}

/**
 * <p>A role mapping.</p>
 */
export interface RoleMapping {
  /**
   * <p>The role mapping type. Token will use <code>cognito:roles</code> and
   *             <code>cognito:preferred_role</code> claims from the Cognito identity provider token to
   *          map groups to roles. Rules will attempt to match claims from the token to map to a
   *          role.</p>
   */
  Type: RoleMappingType | string | undefined;

  /**
   * <p>If you specify Token or Rules as the <code>Type</code>,
   *             <code>AmbiguousRoleResolution</code> is required.</p>
   *          <p>Specifies the action to be taken if either no rules match the claim value for the
   *             <code>Rules</code> type, or there is no <code>cognito:preferred_role</code> claim and
   *          there are multiple <code>cognito:roles</code> matches for the <code>Token</code>
   *          type.</p>
   */
  AmbiguousRoleResolution?: AmbiguousRoleResolutionType | string;

  /**
   * <p>The rules to be used for mapping users to roles.</p>
   *          <p>If you specify Rules as the role mapping type, <code>RulesConfiguration</code> is
   *          required.</p>
   */
  RulesConfiguration?: RulesConfigurationType;
}

export namespace RoleMapping {
  export const filterSensitiveLog = (obj: RoleMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Returned in response to a successful <code>GetIdentityPoolRoles</code>
 *          operation.</p>
 */
export interface GetIdentityPoolRolesResponse {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>The map of roles associated with this pool. Currently only authenticated and
   *          unauthenticated roles are supported.</p>
   */
  Roles?: { [key: string]: string };

  /**
   * <p>How users for a specific identity provider are to mapped to roles. This is a
   *             String-to-<a>RoleMapping</a> object map. The string identifies the identity
   *          provider, for example, "graph.facebook.com" or
   *          "cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".</p>
   */
  RoleMappings?: { [key: string]: RoleMapping };
}

export namespace GetIdentityPoolRolesResponse {
  export const filterSensitiveLog = (obj: GetIdentityPoolRolesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the GetOpenIdToken action.</p>
 */
export interface GetOpenIdTokenInput {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>A set of optional name-value pairs that map provider names to provider tokens. When
   *          using graph.facebook.com and www.amazon.com, supply the access_token returned from the
   *          provider's authflow. For accounts.google.com, an Amazon Cognito user pool provider, or any
   *          other OpenId Connect provider, always include the <code>id_token</code>.</p>
   */
  Logins?: { [key: string]: string };
}

export namespace GetOpenIdTokenInput {
  export const filterSensitiveLog = (obj: GetOpenIdTokenInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returned in response to a successful GetOpenIdToken request.</p>
 */
export interface GetOpenIdTokenResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID. Note that the IdentityId returned may
   *          not match the one passed on input.</p>
   */
  IdentityId?: string;

  /**
   * <p>An OpenID token, valid for 10 minutes.</p>
   */
  Token?: string;
}

export namespace GetOpenIdTokenResponse {
  export const filterSensitiveLog = (obj: GetOpenIdTokenResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The provided developer user identifier is already registered with Cognito under a
 *          different identity ID.</p>
 */
export interface DeveloperUserAlreadyRegisteredException extends __SmithyException, $MetadataBearer {
  name: "DeveloperUserAlreadyRegisteredException";
  $fault: "client";
  /**
   * <p>This developer user identifier is already registered with Cognito.</p>
   */
  message?: string;
}

export namespace DeveloperUserAlreadyRegisteredException {
  export const filterSensitiveLog = (obj: DeveloperUserAlreadyRegisteredException): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.</p>
 */
export interface GetOpenIdTokenForDeveloperIdentityInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
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
   */
  Logins: { [key: string]: string } | undefined;

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
   */
  TokenDuration?: number;
}

export namespace GetOpenIdTokenForDeveloperIdentityInput {
  export const filterSensitiveLog = (obj: GetOpenIdTokenForDeveloperIdentityInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code>
 *          request.</p>
 */
export interface GetOpenIdTokenForDeveloperIdentityResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * <p>An OpenID token.</p>
   */
  Token?: string;
}

export namespace GetOpenIdTokenForDeveloperIdentityResponse {
  export const filterSensitiveLog = (obj: GetOpenIdTokenForDeveloperIdentityResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the ListIdentities action.</p>
 */
export interface ListIdentitiesInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>The maximum number of identities to return.</p>
   */
  MaxResults: number | undefined;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>An optional boolean parameter that allows you to hide disabled identities. If
   *          omitted, the ListIdentities API will include disabled identities in the response.</p>
   */
  HideDisabled?: boolean;
}

export namespace ListIdentitiesInput {
  export const filterSensitiveLog = (obj: ListIdentitiesInput): any => ({
    ...obj,
  });
}

/**
 * <p>The response to a ListIdentities request.</p>
 */
export interface ListIdentitiesResponse {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>An object containing a set of identities and associated mappings.</p>
   */
  Identities?: IdentityDescription[];

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListIdentitiesResponse {
  export const filterSensitiveLog = (obj: ListIdentitiesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the ListIdentityPools action.</p>
 */
export interface ListIdentityPoolsInput {
  /**
   * <p>The maximum number of identities to return.</p>
   */
  MaxResults: number | undefined;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListIdentityPoolsInput {
  export const filterSensitiveLog = (obj: ListIdentityPoolsInput): any => ({
    ...obj,
  });
}

/**
 * <p>A description of the identity pool.</p>
 */
export interface IdentityPoolShortDescription {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>A string that you provide.</p>
   */
  IdentityPoolName?: string;
}

export namespace IdentityPoolShortDescription {
  export const filterSensitiveLog = (obj: IdentityPoolShortDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a successful ListIdentityPools action.</p>
 */
export interface ListIdentityPoolsResponse {
  /**
   * <p>The identity pools returned by the ListIdentityPools action.</p>
   */
  IdentityPools?: IdentityPoolShortDescription[];

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListIdentityPoolsResponse {
  export const filterSensitiveLog = (obj: ListIdentityPoolsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the identity pool that the tags are assigned
   *          to.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are assigned to the identity pool.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the <code>LookupDeveloperIdentityInput</code> action.</p>
 */
export interface LookupDeveloperIdentityInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * <p>A unique ID used by your backend authentication process to identify a user.
   *          Typically, a developer identity provider would issue many developer user identifiers, in
   *          keeping with the number of users.</p>
   */
  DeveloperUserIdentifier?: string;

  /**
   * <p>The maximum number of identities to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token. The first call you make will have <code>NextToken</code> set to
   *          null. After that the service will return <code>NextToken</code> values as needed. For
   *          example, let's say you make a request with <code>MaxResults</code> set to 10, and there are
   *          20 matches in the database. The service will return a pagination token as a part of the
   *          response. This token can be used to call the API again and get results starting from the
   *          11th match.</p>
   */
  NextToken?: string;
}

export namespace LookupDeveloperIdentityInput {
  export const filterSensitiveLog = (obj: LookupDeveloperIdentityInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returned in response to a successful <code>LookupDeveloperIdentity</code>
 *          action.</p>
 */
export interface LookupDeveloperIdentityResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * <p>This is the list of developer user identifiers associated with an identity ID.
   *          Cognito supports the association of multiple developer user identifiers with an identity
   *          ID.</p>
   */
  DeveloperUserIdentifierList?: string[];

  /**
   * <p>A pagination token. The first call you make will have <code>NextToken</code> set to
   *          null. After that the service will return <code>NextToken</code> values as needed. For
   *          example, let's say you make a request with <code>MaxResults</code> set to 10, and there are
   *          20 matches in the database. The service will return a pagination token as a part of the
   *          response. This token can be used to call the API again and get results starting from the
   *          11th match.</p>
   */
  NextToken?: string;
}

export namespace LookupDeveloperIdentityResponse {
  export const filterSensitiveLog = (obj: LookupDeveloperIdentityResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the <code>MergeDeveloperIdentities</code> action.</p>
 */
export interface MergeDeveloperIdentitiesInput {
  /**
   * <p>User identifier for the source user. The value should be a
   *             <code>DeveloperUserIdentifier</code>.</p>
   */
  SourceUserIdentifier: string | undefined;

  /**
   * <p>User identifier for the destination user. The value should be a
   *             <code>DeveloperUserIdentifier</code>.</p>
   */
  DestinationUserIdentifier: string | undefined;

  /**
   * <p>The "domain" by which Cognito will refer to your users. This is a (pseudo) domain
   *          name that you provide while creating an identity pool. This name acts as a placeholder that
   *          allows your backend and the Cognito service to communicate about the developer provider.
   *          For the <code>DeveloperProviderName</code>, you can use letters as well as period (.),
   *          underscore (_), and dash (-).</p>
   */
  DeveloperProviderName: string | undefined;

  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string | undefined;
}

export namespace MergeDeveloperIdentitiesInput {
  export const filterSensitiveLog = (obj: MergeDeveloperIdentitiesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returned in response to a successful <code>MergeDeveloperIdentities</code>
 *          action.</p>
 */
export interface MergeDeveloperIdentitiesResponse {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;
}

export namespace MergeDeveloperIdentitiesResponse {
  export const filterSensitiveLog = (obj: MergeDeveloperIdentitiesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Thrown if there are parallel requests to modify a resource.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  /**
   * <p>The message returned by a ConcurrentModificationException.</p>
   */
  message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the <code>SetIdentityPoolRoles</code> action.</p>
 */
export interface SetIdentityPoolRolesInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>The map of roles associated with this pool. For a given role, the key will be either
   *          "authenticated" or "unauthenticated" and the value will be the Role ARN.</p>
   */
  Roles: { [key: string]: string } | undefined;

  /**
   * <p>How users for a specific identity provider are to mapped to roles. This is a string
   *          to <a>RoleMapping</a> object map. The string identifies the identity provider,
   *          for example, "graph.facebook.com" or
   *          "cognito-idp-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".</p>
   *          <p>Up to 25 rules can be specified per identity provider.</p>
   */
  RoleMappings?: { [key: string]: RoleMapping };
}

export namespace SetIdentityPoolRolesInput {
  export const filterSensitiveLog = (obj: SetIdentityPoolRolesInput): any => ({
    ...obj,
  });
}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the identity pool to assign the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to assign to the identity pool.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceInput {
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the <code>UnlinkDeveloperIdentity</code> action.</p>
 */
export interface UnlinkDeveloperIdentityInput {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string | undefined;

  /**
   * <p>The "domain" by which Cognito will refer to your users.</p>
   */
  DeveloperProviderName: string | undefined;

  /**
   * <p>A unique ID used by your backend authentication process to identify a user.</p>
   */
  DeveloperUserIdentifier: string | undefined;
}

export namespace UnlinkDeveloperIdentityInput {
  export const filterSensitiveLog = (obj: UnlinkDeveloperIdentityInput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to the UnlinkIdentity action.</p>
 */
export interface UnlinkIdentityInput {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId: string | undefined;

  /**
   * <p>A set of optional name-value pairs that map provider names to provider
   *          tokens.</p>
   */
  Logins: { [key: string]: string } | undefined;

  /**
   * <p>Provider names to unlink from this identity.</p>
   */
  LoginsToRemove: string[] | undefined;
}

export namespace UnlinkIdentityInput {
  export const filterSensitiveLog = (obj: UnlinkIdentityInput): any => ({
    ...obj,
  });
}

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the identity pool that the tags are assigned
   *          to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the user pool.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}
