import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum AmbiguousRoleResolutionType {
    AUTHENTICATED_ROLE = "AuthenticatedRole",
    DENY = "Deny"
}
/**
 * <p>A provider representing an Amazon Cognito user pool and its client ID.</p>
 */
export interface CognitoIdentityProvider {
    __type?: "CognitoIdentityProvider";
    /**
     * <p>The client ID for the Amazon Cognito user pool.</p>
     */
    ClientId?: string;
    /**
     * <p>The provider name for an Amazon Cognito user pool. For example,
     *             <code>cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789</code>.</p>
     */
    ProviderName?: string;
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
export declare namespace CognitoIdentityProvider {
    function isa(o: any): o is CognitoIdentityProvider;
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
export declare namespace ConcurrentModificationException {
    function isa(o: any): o is ConcurrentModificationException;
}
/**
 * <p>Input to the CreateIdentityPool action.</p>
 */
export interface CreateIdentityPoolInput {
    __type?: "CreateIdentityPoolInput";
    /**
     * <p>Enables or disables the Basic (Classic) authentication flow. For more information, see
     *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
     */
    AllowClassicFlow?: boolean;
    /**
     * <p>TRUE if the identity pool supports unauthenticated logins.</p>
     */
    AllowUnauthenticatedIdentities: boolean | undefined;
    /**
     * <p>An array of Amazon Cognito user pools and their client IDs.</p>
     */
    CognitoIdentityProviders?: Array<CognitoIdentityProvider>;
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
     * <p>A string that you provide.</p>
     */
    IdentityPoolName: string | undefined;
    /**
     * <p>Tags to assign to the identity pool. A tag is a label that you can apply to identity
     *          pools to categorize and manage them in different ways, such as by purpose, owner,
     *          environment, or other criteria.</p>
     */
    IdentityPoolTags?: {
        [key: string]: string;
    };
    /**
     * <p>A list of OpendID Connect provider ARNs.</p>
     */
    OpenIdConnectProviderARNs?: Array<string>;
    /**
     * <p>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity
     *          pool.</p>
     */
    SamlProviderARNs?: Array<string>;
    /**
     * <p>Optional key:value pairs mapping provider names to provider app IDs.</p>
     */
    SupportedLoginProviders?: {
        [key: string]: string;
    };
}
export declare namespace CreateIdentityPoolInput {
    function isa(o: any): o is CreateIdentityPoolInput;
}
/**
 * <p>Credentials for the provided identity ID.</p>
 */
export interface Credentials {
    __type?: "Credentials";
    /**
     * <p>The Access Key portion of the credentials.</p>
     */
    AccessKeyId?: string;
    /**
     * <p>The date at which these credentials will expire.</p>
     */
    Expiration?: Date;
    /**
     * <p>The Secret Access Key portion of the credentials</p>
     */
    SecretKey?: string;
    /**
     * <p>The Session Token portion of the credentials</p>
     */
    SessionToken?: string;
}
export declare namespace Credentials {
    function isa(o: any): o is Credentials;
}
/**
 * <p>Input to the <code>DeleteIdentities</code> action.</p>
 */
export interface DeleteIdentitiesInput {
    __type?: "DeleteIdentitiesInput";
    /**
     * <p>A list of 1-60 identities that you want to delete.</p>
     */
    IdentityIdsToDelete: Array<string> | undefined;
}
export declare namespace DeleteIdentitiesInput {
    function isa(o: any): o is DeleteIdentitiesInput;
}
/**
 * <p>Returned in response to a successful <code>DeleteIdentities</code>
 *          operation.</p>
 */
export interface DeleteIdentitiesResponse {
    __type?: "DeleteIdentitiesResponse";
    /**
     * <p>An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and
     *          IdentityId.</p>
     */
    UnprocessedIdentityIds?: Array<UnprocessedIdentityId>;
}
export declare namespace DeleteIdentitiesResponse {
    function isa(o: any): o is DeleteIdentitiesResponse;
}
/**
 * <p>Input to the DeleteIdentityPool action.</p>
 */
export interface DeleteIdentityPoolInput {
    __type?: "DeleteIdentityPoolInput";
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
}
export declare namespace DeleteIdentityPoolInput {
    function isa(o: any): o is DeleteIdentityPoolInput;
}
/**
 * <p>Input to the <code>DescribeIdentity</code> action.</p>
 */
export interface DescribeIdentityInput {
    __type?: "DescribeIdentityInput";
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId: string | undefined;
}
export declare namespace DescribeIdentityInput {
    function isa(o: any): o is DescribeIdentityInput;
}
/**
 * <p>Input to the DescribeIdentityPool action.</p>
 */
export interface DescribeIdentityPoolInput {
    __type?: "DescribeIdentityPoolInput";
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
}
export declare namespace DescribeIdentityPoolInput {
    function isa(o: any): o is DescribeIdentityPoolInput;
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
export declare namespace DeveloperUserAlreadyRegisteredException {
    function isa(o: any): o is DeveloperUserAlreadyRegisteredException;
}
export declare enum ErrorCode {
    ACCESS_DENIED = "AccessDenied",
    INTERNAL_SERVER_ERROR = "InternalServerError"
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
export declare namespace ExternalServiceException {
    function isa(o: any): o is ExternalServiceException;
}
/**
 * <p>Input to the <code>GetCredentialsForIdentity</code> action.</p>
 */
export interface GetCredentialsForIdentityInput {
    __type?: "GetCredentialsForIdentityInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the role to be assumed when multiple roles were
     *          received in the token from the identity provider. For example, a SAML-based identity
     *          provider. This parameter is optional for identity providers that do not support role
     *          customization.</p>
     */
    CustomRoleArn?: string;
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
    Logins?: {
        [key: string]: string;
    };
}
export declare namespace GetCredentialsForIdentityInput {
    function isa(o: any): o is GetCredentialsForIdentityInput;
}
/**
 * <p>Returned in response to a successful <code>GetCredentialsForIdentity</code>
 *          operation.</p>
 */
export interface GetCredentialsForIdentityResponse {
    __type?: "GetCredentialsForIdentityResponse";
    /**
     * <p>Credentials for the provided identity ID.</p>
     */
    Credentials?: Credentials;
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
}
export declare namespace GetCredentialsForIdentityResponse {
    function isa(o: any): o is GetCredentialsForIdentityResponse;
}
/**
 * <p>Input to the GetId action.</p>
 */
export interface GetIdInput {
    __type?: "GetIdInput";
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
    Logins?: {
        [key: string]: string;
    };
}
export declare namespace GetIdInput {
    function isa(o: any): o is GetIdInput;
}
/**
 * <p>Returned in response to a GetId request.</p>
 */
export interface GetIdResponse {
    __type?: "GetIdResponse";
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
}
export declare namespace GetIdResponse {
    function isa(o: any): o is GetIdResponse;
}
/**
 * <p>Input to the <code>GetIdentityPoolRoles</code> action.</p>
 */
export interface GetIdentityPoolRolesInput {
    __type?: "GetIdentityPoolRolesInput";
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
}
export declare namespace GetIdentityPoolRolesInput {
    function isa(o: any): o is GetIdentityPoolRolesInput;
}
/**
 * <p>Returned in response to a successful <code>GetIdentityPoolRoles</code>
 *          operation.</p>
 */
export interface GetIdentityPoolRolesResponse {
    __type?: "GetIdentityPoolRolesResponse";
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId?: string;
    /**
     * <p>How users for a specific identity provider are to mapped to roles. This is a
     *             String-to-<a>RoleMapping</a> object map. The string identifies the identity
     *          provider, for example, "graph.facebook.com" or
     *          "cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".</p>
     */
    RoleMappings?: {
        [key: string]: RoleMapping;
    };
    /**
     * <p>The map of roles associated with this pool. Currently only authenticated and
     *          unauthenticated roles are supported.</p>
     */
    Roles?: {
        [key: string]: string;
    };
}
export declare namespace GetIdentityPoolRolesResponse {
    function isa(o: any): o is GetIdentityPoolRolesResponse;
}
/**
 * <p>Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.</p>
 */
export interface GetOpenIdTokenForDeveloperIdentityInput {
    __type?: "GetOpenIdTokenForDeveloperIdentityInput";
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
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
    Logins: {
        [key: string]: string;
    } | undefined;
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
export declare namespace GetOpenIdTokenForDeveloperIdentityInput {
    function isa(o: any): o is GetOpenIdTokenForDeveloperIdentityInput;
}
/**
 * <p>Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code>
 *          request.</p>
 */
export interface GetOpenIdTokenForDeveloperIdentityResponse {
    __type?: "GetOpenIdTokenForDeveloperIdentityResponse";
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
    /**
     * <p>An OpenID token.</p>
     */
    Token?: string;
}
export declare namespace GetOpenIdTokenForDeveloperIdentityResponse {
    function isa(o: any): o is GetOpenIdTokenForDeveloperIdentityResponse;
}
/**
 * <p>Input to the GetOpenIdToken action.</p>
 */
export interface GetOpenIdTokenInput {
    __type?: "GetOpenIdTokenInput";
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
    Logins?: {
        [key: string]: string;
    };
}
export declare namespace GetOpenIdTokenInput {
    function isa(o: any): o is GetOpenIdTokenInput;
}
/**
 * <p>Returned in response to a successful GetOpenIdToken request.</p>
 */
export interface GetOpenIdTokenResponse {
    __type?: "GetOpenIdTokenResponse";
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
export declare namespace GetOpenIdTokenResponse {
    function isa(o: any): o is GetOpenIdTokenResponse;
}
/**
 * <p>A description of the identity.</p>
 */
export interface IdentityDescription {
    __type?: "IdentityDescription";
    /**
     * <p>Date on which the identity was created.</p>
     */
    CreationDate?: Date;
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
    /**
     * <p>Date on which the identity was last modified.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>The provider names.</p>
     */
    Logins?: Array<string>;
}
export declare namespace IdentityDescription {
    function isa(o: any): o is IdentityDescription;
}
/**
 * <p>An object representing an Amazon Cognito identity pool.</p>
 */
export interface IdentityPool {
    __type?: "IdentityPool";
    /**
     * <p>Enables or disables the Basic (Classic) authentication flow. For more information, see
     *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
     */
    AllowClassicFlow?: boolean;
    /**
     * <p>TRUE if the identity pool supports unauthenticated logins.</p>
     */
    AllowUnauthenticatedIdentities: boolean | undefined;
    /**
     * <p>A list representing an Amazon Cognito user pool and its client ID.</p>
     */
    CognitoIdentityProviders?: Array<CognitoIdentityProvider>;
    /**
     * <p>The "domain" by which Cognito will refer to your users.</p>
     */
    DeveloperProviderName?: string;
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
    /**
     * <p>A string that you provide.</p>
     */
    IdentityPoolName: string | undefined;
    /**
     * <p>The tags that are assigned to the identity pool. A tag is a label that you can apply to
     *          identity pools to categorize and manage them in different ways, such as by purpose, owner,
     *          environment, or other criteria.</p>
     */
    IdentityPoolTags?: {
        [key: string]: string;
    };
    /**
     * <p>A list of OpendID Connect provider ARNs.</p>
     */
    OpenIdConnectProviderARNs?: Array<string>;
    /**
     * <p>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity
     *          pool.</p>
     */
    SamlProviderARNs?: Array<string>;
    /**
     * <p>Optional key:value pairs mapping provider names to provider app IDs.</p>
     */
    SupportedLoginProviders?: {
        [key: string]: string;
    };
}
export declare namespace IdentityPool {
    function isa(o: any): o is IdentityPool;
}
/**
 * <p>A description of the identity pool.</p>
 */
export interface IdentityPoolShortDescription {
    __type?: "IdentityPoolShortDescription";
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId?: string;
    /**
     * <p>A string that you provide.</p>
     */
    IdentityPoolName?: string;
}
export declare namespace IdentityPoolShortDescription {
    function isa(o: any): o is IdentityPoolShortDescription;
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
export declare namespace InternalErrorException {
    function isa(o: any): o is InternalErrorException;
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
export declare namespace InvalidIdentityPoolConfigurationException {
    function isa(o: any): o is InvalidIdentityPoolConfigurationException;
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
export declare namespace InvalidParameterException {
    function isa(o: any): o is InvalidParameterException;
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
export declare namespace LimitExceededException {
    function isa(o: any): o is LimitExceededException;
}
/**
 * <p>Input to the ListIdentities action.</p>
 */
export interface ListIdentitiesInput {
    __type?: "ListIdentitiesInput";
    /**
     * <p>An optional boolean parameter that allows you to hide disabled identities. If
     *          omitted, the ListIdentities API will include disabled identities in the response.</p>
     */
    HideDisabled?: boolean;
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
}
export declare namespace ListIdentitiesInput {
    function isa(o: any): o is ListIdentitiesInput;
}
/**
 * <p>The response to a ListIdentities request.</p>
 */
export interface ListIdentitiesResponse {
    __type?: "ListIdentitiesResponse";
    /**
     * <p>An object containing a set of identities and associated mappings.</p>
     */
    Identities?: Array<IdentityDescription>;
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId?: string;
    /**
     * <p>A pagination token.</p>
     */
    NextToken?: string;
}
export declare namespace ListIdentitiesResponse {
    function isa(o: any): o is ListIdentitiesResponse;
}
/**
 * <p>Input to the ListIdentityPools action.</p>
 */
export interface ListIdentityPoolsInput {
    __type?: "ListIdentityPoolsInput";
    /**
     * <p>The maximum number of identities to return.</p>
     */
    MaxResults: number | undefined;
    /**
     * <p>A pagination token.</p>
     */
    NextToken?: string;
}
export declare namespace ListIdentityPoolsInput {
    function isa(o: any): o is ListIdentityPoolsInput;
}
/**
 * <p>The result of a successful ListIdentityPools action.</p>
 */
export interface ListIdentityPoolsResponse {
    __type?: "ListIdentityPoolsResponse";
    /**
     * <p>The identity pools returned by the ListIdentityPools action.</p>
     */
    IdentityPools?: Array<IdentityPoolShortDescription>;
    /**
     * <p>A pagination token.</p>
     */
    NextToken?: string;
}
export declare namespace ListIdentityPoolsResponse {
    function isa(o: any): o is ListIdentityPoolsResponse;
}
export interface ListTagsForResourceInput {
    __type?: "ListTagsForResourceInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the identity pool that the tags are assigned
     *          to.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceInput {
    function isa(o: any): o is ListTagsForResourceInput;
}
export interface ListTagsForResourceResponse {
    __type?: "ListTagsForResourceResponse";
    /**
     * <p>The tags that are assigned to the identity pool.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    function isa(o: any): o is ListTagsForResourceResponse;
}
/**
 * <p>Input to the <code>LookupDeveloperIdentityInput</code> action.</p>
 */
export interface LookupDeveloperIdentityInput {
    __type?: "LookupDeveloperIdentityInput";
    /**
     * <p>A unique ID used by your backend authentication process to identify a user.
     *          Typically, a developer identity provider would issue many developer user identifiers, in
     *          keeping with the number of users.</p>
     */
    DeveloperUserIdentifier?: string;
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
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
export declare namespace LookupDeveloperIdentityInput {
    function isa(o: any): o is LookupDeveloperIdentityInput;
}
/**
 * <p>Returned in response to a successful <code>LookupDeveloperIdentity</code>
 *          action.</p>
 */
export interface LookupDeveloperIdentityResponse {
    __type?: "LookupDeveloperIdentityResponse";
    /**
     * <p>This is the list of developer user identifiers associated with an identity ID.
     *          Cognito supports the association of multiple developer user identifiers with an identity
     *          ID.</p>
     */
    DeveloperUserIdentifierList?: Array<string>;
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
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
export declare namespace LookupDeveloperIdentityResponse {
    function isa(o: any): o is LookupDeveloperIdentityResponse;
}
/**
 * <p>A rule that maps a claim name, a claim value, and a match type to a role
 *          ARN.</p>
 */
export interface MappingRule {
    __type?: "MappingRule";
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
     * <p>The role ARN.</p>
     */
    RoleARN: string | undefined;
    /**
     * <p>A brief string that the claim must match, for example, "paid" or "yes".</p>
     */
    Value: string | undefined;
}
export declare namespace MappingRule {
    function isa(o: any): o is MappingRule;
}
export declare enum MappingRuleMatchType {
    CONTAINS = "Contains",
    EQUALS = "Equals",
    NOT_EQUAL = "NotEqual",
    STARTS_WITH = "StartsWith"
}
/**
 * <p>Input to the <code>MergeDeveloperIdentities</code> action.</p>
 */
export interface MergeDeveloperIdentitiesInput {
    __type?: "MergeDeveloperIdentitiesInput";
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
    /**
     * <p>User identifier for the source user. The value should be a
     *             <code>DeveloperUserIdentifier</code>.</p>
     */
    SourceUserIdentifier: string | undefined;
}
export declare namespace MergeDeveloperIdentitiesInput {
    function isa(o: any): o is MergeDeveloperIdentitiesInput;
}
/**
 * <p>Returned in response to a successful <code>MergeDeveloperIdentities</code>
 *          action.</p>
 */
export interface MergeDeveloperIdentitiesResponse {
    __type?: "MergeDeveloperIdentitiesResponse";
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
}
export declare namespace MergeDeveloperIdentitiesResponse {
    function isa(o: any): o is MergeDeveloperIdentitiesResponse;
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
export declare namespace NotAuthorizedException {
    function isa(o: any): o is NotAuthorizedException;
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
export declare namespace ResourceConflictException {
    function isa(o: any): o is ResourceConflictException;
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
export declare namespace ResourceNotFoundException {
    function isa(o: any): o is ResourceNotFoundException;
}
/**
 * <p>A role mapping.</p>
 */
export interface RoleMapping {
    __type?: "RoleMapping";
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
    /**
     * <p>The role mapping type. Token will use <code>cognito:roles</code> and
     *             <code>cognito:preferred_role</code> claims from the Cognito identity provider token to
     *          map groups to roles. Rules will attempt to match claims from the token to map to a
     *          role.</p>
     */
    Type: RoleMappingType | string | undefined;
}
export declare namespace RoleMapping {
    function isa(o: any): o is RoleMapping;
}
export declare enum RoleMappingType {
    RULES = "Rules",
    TOKEN = "Token"
}
/**
 * <p>A container for rules.</p>
 */
export interface RulesConfigurationType {
    __type?: "RulesConfigurationType";
    /**
     * <p>An array of rules. You can specify up to 25 rules per identity provider.</p>
     *          <p>Rules are evaluated in order. The first one to match specifies the role.</p>
     */
    Rules: Array<MappingRule> | undefined;
}
export declare namespace RulesConfigurationType {
    function isa(o: any): o is RulesConfigurationType;
}
/**
 * <p>Input to the <code>SetIdentityPoolRoles</code> action.</p>
 */
export interface SetIdentityPoolRolesInput {
    __type?: "SetIdentityPoolRolesInput";
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
    /**
     * <p>How users for a specific identity provider are to mapped to roles. This is a string
     *          to <a>RoleMapping</a> object map. The string identifies the identity provider,
     *          for example, "graph.facebook.com" or
     *          "cognito-idp-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".</p>
     *          <p>Up to 25 rules can be specified per identity provider.</p>
     */
    RoleMappings?: {
        [key: string]: RoleMapping;
    };
    /**
     * <p>The map of roles associated with this pool. For a given role, the key will be either
     *          "authenticated" or "unauthenticated" and the value will be the Role ARN.</p>
     */
    Roles: {
        [key: string]: string;
    } | undefined;
}
export declare namespace SetIdentityPoolRolesInput {
    function isa(o: any): o is SetIdentityPoolRolesInput;
}
export interface TagResourceInput {
    __type?: "TagResourceInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the identity pool to assign the tags to.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tags to assign to the identity pool.</p>
     */
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceInput {
    function isa(o: any): o is TagResourceInput;
}
export interface TagResourceResponse {
    __type?: "TagResourceResponse";
}
export declare namespace TagResourceResponse {
    function isa(o: any): o is TagResourceResponse;
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
export declare namespace TooManyRequestsException {
    function isa(o: any): o is TooManyRequestsException;
}
/**
 * <p>Input to the <code>UnlinkDeveloperIdentity</code> action.</p>
 */
export interface UnlinkDeveloperIdentityInput {
    __type?: "UnlinkDeveloperIdentityInput";
    /**
     * <p>The "domain" by which Cognito will refer to your users.</p>
     */
    DeveloperProviderName: string | undefined;
    /**
     * <p>A unique ID used by your backend authentication process to identify a user.</p>
     */
    DeveloperUserIdentifier: string | undefined;
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId: string | undefined;
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string | undefined;
}
export declare namespace UnlinkDeveloperIdentityInput {
    function isa(o: any): o is UnlinkDeveloperIdentityInput;
}
/**
 * <p>Input to the UnlinkIdentity action.</p>
 */
export interface UnlinkIdentityInput {
    __type?: "UnlinkIdentityInput";
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId: string | undefined;
    /**
     * <p>A set of optional name-value pairs that map provider names to provider
     *          tokens.</p>
     */
    Logins: {
        [key: string]: string;
    } | undefined;
    /**
     * <p>Provider names to unlink from this identity.</p>
     */
    LoginsToRemove: Array<string> | undefined;
}
export declare namespace UnlinkIdentityInput {
    function isa(o: any): o is UnlinkIdentityInput;
}
/**
 * <p>An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and
 *          IdentityId.</p>
 */
export interface UnprocessedIdentityId {
    __type?: "UnprocessedIdentityId";
    /**
     * <p>The error code indicating the type of error that occurred.</p>
     */
    ErrorCode?: ErrorCode | string;
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;
}
export declare namespace UnprocessedIdentityId {
    function isa(o: any): o is UnprocessedIdentityId;
}
export interface UntagResourceInput {
    __type?: "UntagResourceInput";
    /**
     * <p>The Amazon Resource Name (ARN) of the identity pool that the tags are assigned
     *          to.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The keys of the tags to remove from the user pool.</p>
     */
    TagKeys: Array<string> | undefined;
}
export declare namespace UntagResourceInput {
    function isa(o: any): o is UntagResourceInput;
}
export interface UntagResourceResponse {
    __type?: "UntagResourceResponse";
}
export declare namespace UntagResourceResponse {
    function isa(o: any): o is UntagResourceResponse;
}
