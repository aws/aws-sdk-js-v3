// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { SSOAdminServiceException as __BaseException } from "./SSOAdminServiceException";

/**
 * @public
 * <p>The value used for mapping a specified attribute to an identity source. For more
 *             information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/attributemappingsconcept.html">Attribute
 *                 mappings</a> in the <i>IAM Identity Center User Guide</i>.</p>
 */
export interface AccessControlAttributeValue {
  /**
   * @public
   * <p>The identity source to use when mapping a specified attribute to IAM Identity Center.</p>
   */
  Source: string[] | undefined;
}

/**
 * @public
 * <p>These are IAM Identity Center identity store attributes that you can configure for use in
 *             attributes-based access control (ABAC). You can create permissions policies that
 *             determine who can access your Amazon Web Services resources based upon the configured attribute
 *             values. When you enable ABAC and specify <code>AccessControlAttributes</code>, IAM Identity Center
 *             passes the attribute values of the authenticated user into IAM for use in policy
 *             evaluation.</p>
 */
export interface AccessControlAttribute {
  /**
   * @public
   * <p>The name of the attribute associated with your identities in your identity source.
   *             This is used to map a specified attribute in your identity source with an attribute in
   *             IAM Identity Center.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value used for mapping a specified attribute to an identity source.</p>
   */
  Value: AccessControlAttributeValue | undefined;
}

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  GROUP: "GROUP",
  USER: "USER",
} as const;

/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * <p>The assignment that indicates a principal's limited access to a specified Amazon Web Services
 *             account with a specified permission set.</p>
 *          <note>
 *             <p>The term <i>principal</i> here refers to a user or group that is
 *                 defined in IAM Identity Center.</p>
 *          </note>
 */
export interface AccountAssignment {
  /**
   * @public
   * <p>The identifier of the Amazon Web Services account.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ARN of the permission set. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  PermissionSetArn?: string;

  /**
   * @public
   * <p>The entity type for which the assignment will be created.</p>
   */
  PrincipalType?: PrincipalType;

  /**
   * @public
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   */
  PrincipalId?: string;
}

/**
 * @public
 * <p>A structure that describes an assignment of an Amazon Web Services account to a principal and the
 *             permissions that principal has in the account.</p>
 */
export interface AccountAssignmentForPrincipal {
  /**
   * @public
   * <p>The account ID number of the Amazon Web Services account.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ARN of the IAM Identity Center permission set assigned to this principal for this
   *             Amazon Web Services account.</p>
   */
  PermissionSetArn?: string;

  /**
   * @public
   * <p>The ID of the principal.</p>
   */
  PrincipalId?: string;

  /**
   * @public
   * <p>The type of the principal.</p>
   */
  PrincipalType?: PrincipalType;
}

/**
 * @public
 * @enum
 */
export const StatusValues = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type StatusValues = (typeof StatusValues)[keyof typeof StatusValues];

/**
 * @public
 * @enum
 */
export const TargetType = {
  AWS_ACCOUNT: "AWS_ACCOUNT",
} as const;

/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 * <p>The status of the creation or deletion operation of an assignment that a principal
 *             needs to access an account.</p>
 */
export interface AccountAssignmentOperationStatus {
  /**
   * @public
   * <p>The status of the permission set provisioning process.</p>
   */
  Status?: StatusValues;

  /**
   * @public
   * <p>The identifier for tracking the request operation that is generated by the universally
   *             unique identifier (UUID) workflow.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The message that contains an error or exception in case of an operation
   *             failure.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>TargetID is an Amazon Web Services account identifier, (For example, 123456789012).</p>
   */
  TargetId?: string;

  /**
   * @public
   * <p>The entity type for which the assignment will be created.</p>
   */
  TargetType?: TargetType;

  /**
   * @public
   * <p>The ARN of the permission set. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  PermissionSetArn?: string;

  /**
   * @public
   * <p>The entity type for which the assignment will be created.</p>
   */
  PrincipalType?: PrincipalType;

  /**
   * @public
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   */
  PrincipalId?: string;

  /**
   * @public
   * <p>The date that the permission set was created.</p>
   */
  CreatedDate?: Date;
}

/**
 * @public
 * <p>Provides information about the <a>AccountAssignment</a> creation
 *             request.</p>
 */
export interface AccountAssignmentOperationStatusMetadata {
  /**
   * @public
   * <p>The status of the permission set provisioning process.</p>
   */
  Status?: StatusValues;

  /**
   * @public
   * <p>The identifier for tracking the request operation that is generated by the universally
   *             unique identifier (UUID) workflow.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The date that the permission set was created.</p>
   */
  CreatedDate?: Date;
}

/**
 * @public
 * @enum
 */
export const SignInOrigin = {
  APPLICATION: "APPLICATION",
  IDENTITY_CENTER: "IDENTITY_CENTER",
} as const;

/**
 * @public
 */
export type SignInOrigin = (typeof SignInOrigin)[keyof typeof SignInOrigin];

/**
 * @public
 * <p>A structure that describes the sign-in options for an application portal.</p>
 */
export interface SignInOptions {
  /**
   * @public
   * <p>This determines how IAM Identity Center navigates the user to the target application. It can be one
   *             of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>APPLICATION</code>: IAM Identity Center redirects the customer to the configured
   *                         <code>ApplicationUrl</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IDENTITY_CENTER</code>: IAM Identity Center uses SAML identity-provider initiated
   *                     authentication to sign the customer directly into a SAML-based
   *                     application.</p>
   *             </li>
   *          </ul>
   */
  Origin: SignInOrigin | undefined;

  /**
   * @public
   * <p>The URL that accepts authentication requests for an application. This is a required
   *             parameter if the <code>Origin</code> parameter is <code>APPLICATION</code>.</p>
   */
  ApplicationUrl?: string;
}

/**
 * @public
 * @enum
 */
export const ApplicationVisibility = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ApplicationVisibility = (typeof ApplicationVisibility)[keyof typeof ApplicationVisibility];

/**
 * @public
 * <p>A structure that describes the options for the access portal associated with an
 *             application.</p>
 */
export interface PortalOptions {
  /**
   * @public
   * <p>A structure that describes the sign-in options for the access portal.</p>
   */
  SignInOptions?: SignInOptions;

  /**
   * @public
   * <p>Indicates whether this application is visible in the access portal.</p>
   */
  Visibility?: ApplicationVisibility;
}

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * <p>A structure that describes an application that uses IAM Identity Center for access
 *             management.</p>
 */
export interface Application {
  /**
   * @public
   * <p>The ARN of the application.</p>
   */
  ApplicationArn?: string;

  /**
   * @public
   * <p>The ARN of the application provider for this application.</p>
   */
  ApplicationProviderArn?: string;

  /**
   * @public
   * <p>The name of the application.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID number of the application.</p>
   */
  ApplicationAccount?: string;

  /**
   * @public
   * <p>The ARN of the instance of IAM Identity Center that is configured with this application.</p>
   */
  InstanceArn?: string;

  /**
   * @public
   * <p>The current status of the application in this instance of IAM Identity Center.</p>
   */
  Status?: ApplicationStatus;

  /**
   * @public
   * <p>A structure that describes the options for the access portal associated with this
   *             application.</p>
   */
  PortalOptions?: PortalOptions;

  /**
   * @public
   * <p>The description of the application.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time when the application was originally created.</p>
   */
  CreatedDate?: Date;
}

/**
 * @public
 * <p>Occurs when a conflict with a previous successful write is detected. This generally
 *             occurs when the previous write did not have time to propagate to the host serving the
 *             current request. A retry (with appropriate backoff logic) is the recommended response to
 *             this exception.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteApplicationAccessScopeRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application with the access scope to delete.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies the name of the access scope to remove from the application.</p>
   */
  Scope: string | undefined;
}

/**
 * @public
 * <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Indicates that a requested resource is not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request failed because it contains a syntax error.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetApplicationAccessScopeRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application with the access scope that you want to
   *             retrieve.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies the name of the access scope for which you want the authorized
   *             targets.</p>
   */
  Scope: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationAccessScopeResponse {
  /**
   * @public
   * <p>The name of the access scope that can be used with the authorized targets.</p>
   */
  Scope: string | undefined;

  /**
   * @public
   * <p>An array of authorized targets associated with this access scope.</p>
   */
  AuthorizedTargets?: string[];
}

/**
 * @public
 */
export interface ListApplicationAccessScopesRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that describes an IAM Identity Center access scope and its authorized targets.</p>
 */
export interface ScopeDetails {
  /**
   * @public
   * <p>The name of the access scope.</p>
   */
  Scope: string | undefined;

  /**
   * @public
   * <p>An array list of ARNs of applications.</p>
   */
  AuthorizedTargets?: string[];
}

/**
 * @public
 */
export interface ListApplicationAccessScopesResponse {
  /**
   * @public
   * <p>An array list of access scopes and their authorized targets that are associated with
   *             the application.</p>
   */
  Scopes: ScopeDetails[] | undefined;

  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutApplicationAccessScopeRequest {
  /**
   * @public
   * <p>Specifies the name of the access scope to be associated with the specified
   *             targets.</p>
   */
  Scope: string | undefined;

  /**
   * @public
   * <p>Specifies an array list of ARNs that represent the authorized targets for this access
   *             scope.</p>
   */
  AuthorizedTargets?: string[];

  /**
   * @public
   * <p>Specifies the ARN of the application with the access scope with the targets to add or
   *             update.</p>
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 * <p>A structure that describes an assignment of a principal to an application.</p>
 */
export interface ApplicationAssignment {
  /**
   * @public
   * <p>The ARN of the application that has principals assigned.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the principal assigned to the application.</p>
   */
  PrincipalId: string | undefined;

  /**
   * @public
   * <p>The type of the principal assigned to the application.</p>
   */
  PrincipalType: PrincipalType | undefined;
}

/**
 * @public
 * <p>A structure that describes an application to which a principal is assigned.</p>
 */
export interface ApplicationAssignmentForPrincipal {
  /**
   * @public
   * <p>The ARN of the application to which the specified principal is assigned.</p>
   */
  ApplicationArn?: string;

  /**
   * @public
   * <p>The unique identifier of the principal assigned to the application.</p>
   */
  PrincipalId?: string;

  /**
   * @public
   * <p>The type of the principal assigned to the application.</p>
   */
  PrincipalType?: PrincipalType;
}

/**
 * @public
 * @enum
 */
export const AuthenticationMethodType = {
  IAM: "IAM",
} as const;

/**
 * @public
 */
export type AuthenticationMethodType = (typeof AuthenticationMethodType)[keyof typeof AuthenticationMethodType];

/**
 * @public
 */
export interface DeleteApplicationAuthenticationMethodRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application with the authentication method to delete.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies the authentication method type to delete from the application.</p>
   */
  AuthenticationMethodType: AuthenticationMethodType | undefined;
}

/**
 * @public
 */
export interface GetApplicationAuthenticationMethodRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies the type of authentication method for which you want details.</p>
   */
  AuthenticationMethodType: AuthenticationMethodType | undefined;
}

/**
 * @public
 * <p>A structure that describes details for authentication that uses IAM.</p>
 */
export interface IamAuthenticationMethod {
  /**
   * @public
   * <p>An IAM policy document in JSON.</p>
   */
  ActorPolicy: __DocumentType | undefined;
}

/**
 * @public
 * <p>A structure that describes an authentication method that can be used by an
 *             application.</p>
 */
export type AuthenticationMethod = AuthenticationMethod.IamMember | AuthenticationMethod.$UnknownMember;

/**
 * @public
 */
export namespace AuthenticationMethod {
  /**
   * @public
   * <p>A structure that describes details for IAM authentication.</p>
   */
  export interface IamMember {
    Iam: IamAuthenticationMethod;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Iam?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Iam: (value: IamAuthenticationMethod) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AuthenticationMethod, visitor: Visitor<T>): T => {
    if (value.Iam !== undefined) return visitor.Iam(value.Iam);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetApplicationAuthenticationMethodResponse {
  /**
   * @public
   * <p>A structure that contains details about the requested authentication method.</p>
   */
  AuthenticationMethod?: AuthenticationMethod;
}

/**
 * @public
 */
export interface ListApplicationAuthenticationMethodsRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application with the authentication methods you want to
   *             list.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that describes an authentication method and its type.</p>
 */
export interface AuthenticationMethodItem {
  /**
   * @public
   * <p>The type of authentication that is used by this method.</p>
   */
  AuthenticationMethodType?: AuthenticationMethodType;

  /**
   * @public
   * <p>A structure that describes an authentication method. The contents of this structure is
   *             determined by the <code>AuthenticationMethodType</code>.</p>
   */
  AuthenticationMethod?: AuthenticationMethod;
}

/**
 * @public
 */
export interface ListApplicationAuthenticationMethodsResponse {
  /**
   * @public
   * <p>An array list of authentication methods for the specified application.</p>
   */
  AuthenticationMethods?: AuthenticationMethodItem[];

  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutApplicationAuthenticationMethodRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application with the authentication method to add or
   *             update.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies the type of the authentication method that you want to add or update.</p>
   */
  AuthenticationMethodType: AuthenticationMethodType | undefined;

  /**
   * @public
   * <p>Specifies a structure that describes the authentication method to add or update. The
   *             structure type you provide is determined by the <code>AuthenticationMethodType</code>
   *             parameter.</p>
   */
  AuthenticationMethod: AuthenticationMethod | undefined;
}

/**
 * @public
 * @enum
 */
export const GrantType = {
  AUTHORIZATION_CODE: "authorization_code",
  JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer",
  REFRESH_TOKEN: "refresh_token",
  TOKEN_EXCHANGE: "urn:ietf:params:oauth:grant-type:token-exchange",
} as const;

/**
 * @public
 */
export type GrantType = (typeof GrantType)[keyof typeof GrantType];

/**
 * @public
 */
export interface DeleteApplicationGrantRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application with the grant to delete.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies the type of grant to delete from the application.</p>
   */
  GrantType: GrantType | undefined;
}

/**
 * @public
 */
export interface GetApplicationGrantRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application that contains the grant.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies the type of grant.</p>
   */
  GrantType: GrantType | undefined;
}

/**
 * @public
 * <p>A structure that defines configuration settings for an application that supports the OAuth 2.0 Authorization Code Grant.</p>
 */
export interface AuthorizationCodeGrant {
  /**
   * @public
   * <p>A list of URIs that are valid locations to redirect a user's browser after the user is authorized.</p>
   */
  RedirectUris?: string[];
}

/**
 * @public
 * <p>A structure that describes a trusted token issuer and associates it with a set of authorized
 *             audiences.</p>
 */
export interface AuthorizedTokenIssuer {
  /**
   * @public
   * <p>The ARN of the trusted token issuer.</p>
   */
  TrustedTokenIssuerArn?: string;

  /**
   * @public
   * <p>An array list of authorized audiences, or applications, that can consume the tokens
   *             generated by the associated trusted token issuer.</p>
   */
  AuthorizedAudiences?: string[];
}

/**
 * @public
 * <p>A structure that defines configuration settings for an application that supports the JWT Bearer Token Authorization Grant.</p>
 */
export interface JwtBearerGrant {
  /**
   * @public
   * <p>A list of allowed token issuers trusted by the Identity Center instances for this application.</p>
   */
  AuthorizedTokenIssuers?: AuthorizedTokenIssuer[];
}

/**
 * @public
 * <p>A structure that defines configuration settings for an application that supports the OAuth 2.0 Refresh Token Grant.</p>
 */
export interface RefreshTokenGrant {}

/**
 * @public
 * <p>A structure that defines configuration settings for an application that supports the OAuth 2.0 Token Exchange Grant.</p>
 */
export interface TokenExchangeGrant {}

/**
 * @public
 * <p>The Grant union represents the set of possible configuration options for the selected grant type. Exactly one member of the union must be specified, and must match the grant type selected.</p>
 */
export type Grant =
  | Grant.AuthorizationCodeMember
  | Grant.JwtBearerMember
  | Grant.RefreshTokenMember
  | Grant.TokenExchangeMember
  | Grant.$UnknownMember;

/**
 * @public
 */
export namespace Grant {
  /**
   * @public
   * <p>Configuration options for the <code>authorization_code</code> grant type.</p>
   */
  export interface AuthorizationCodeMember {
    AuthorizationCode: AuthorizationCodeGrant;
    JwtBearer?: never;
    RefreshToken?: never;
    TokenExchange?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Configuration options for the <code>urn:ietf:params:oauth:grant-type:jwt-bearer</code> grant type.</p>
   */
  export interface JwtBearerMember {
    AuthorizationCode?: never;
    JwtBearer: JwtBearerGrant;
    RefreshToken?: never;
    TokenExchange?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Configuration options for the <code>refresh_token</code> grant type.</p>
   */
  export interface RefreshTokenMember {
    AuthorizationCode?: never;
    JwtBearer?: never;
    RefreshToken: RefreshTokenGrant;
    TokenExchange?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Configuration options for the <code>urn:ietf:params:oauth:grant-type:token-exchange</code> grant type.</p>
   */
  export interface TokenExchangeMember {
    AuthorizationCode?: never;
    JwtBearer?: never;
    RefreshToken?: never;
    TokenExchange: TokenExchangeGrant;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AuthorizationCode?: never;
    JwtBearer?: never;
    RefreshToken?: never;
    TokenExchange?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    AuthorizationCode: (value: AuthorizationCodeGrant) => T;
    JwtBearer: (value: JwtBearerGrant) => T;
    RefreshToken: (value: RefreshTokenGrant) => T;
    TokenExchange: (value: TokenExchangeGrant) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Grant, visitor: Visitor<T>): T => {
    if (value.AuthorizationCode !== undefined) return visitor.AuthorizationCode(value.AuthorizationCode);
    if (value.JwtBearer !== undefined) return visitor.JwtBearer(value.JwtBearer);
    if (value.RefreshToken !== undefined) return visitor.RefreshToken(value.RefreshToken);
    if (value.TokenExchange !== undefined) return visitor.TokenExchange(value.TokenExchange);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetApplicationGrantResponse {
  /**
   * @public
   * <p>A structure that describes the requested grant.</p>
   */
  Grant: Grant | undefined;
}

/**
 * @public
 */
export interface ListApplicationGrantsRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application whose grants you want to list.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that defines a single grant and its configuration.</p>
 */
export interface GrantItem {
  /**
   * @public
   * <p>The type of the selected grant.</p>
   */
  GrantType: GrantType | undefined;

  /**
   * @public
   * <p>The configuration structure for the selected grant.</p>
   */
  Grant: Grant | undefined;
}

/**
 * @public
 */
export interface ListApplicationGrantsResponse {
  /**
   * @public
   * <p>An array list of structures that describe the requested grants.</p>
   */
  Grants: GrantItem[] | undefined;

  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutApplicationGrantRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application to update.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies the type of grant to update.</p>
   */
  GrantType: GrantType | undefined;

  /**
   * @public
   * <p>Specifies a structure that describes the grant to update.</p>
   */
  Grant: Grant | undefined;
}

/**
 * @public
 * <p>A structure that describes how the portal represents an application provider.</p>
 */
export interface DisplayData {
  /**
   * @public
   * <p>The name of the application provider that appears in the portal.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>A URL that points to an icon that represents the application provider.</p>
   */
  IconUrl?: string;

  /**
   * @public
   * <p>The description of the application provider that appears in the portal.</p>
   */
  Description?: string;
}

/**
 * @public
 * @enum
 */
export const FederationProtocol = {
  OAUTH: "OAUTH",
  SAML: "SAML",
} as const;

/**
 * @public
 */
export type FederationProtocol = (typeof FederationProtocol)[keyof typeof FederationProtocol];

/**
 * @public
 * <p>A structure that describes details for an IAM Identity Center access scope that is associated with a
 *             resource server.</p>
 */
export interface ResourceServerScopeDetails {
  /**
   * @public
   * <p>The description of an access scope for a resource server.</p>
   */
  LongDescription?: string;

  /**
   * @public
   * <p>The title of an access scope for a resource server.</p>
   */
  DetailedTitle?: string;
}

/**
 * @public
 * <p>A structure that describes the configuration of a resource server.</p>
 */
export interface ResourceServerConfig {
  /**
   * @public
   * <p>A list of the IAM Identity Center access scopes that are associated with this resource
   *             server.</p>
   */
  Scopes?: Record<string, ResourceServerScopeDetails>;
}

/**
 * @public
 * <p>A structure that describes a provider that can be used to connect an Amazon Web Services managed application or customer managed application to IAM Identity Center.</p>
 */
export interface ApplicationProvider {
  /**
   * @public
   * <p>The ARN of the application provider.</p>
   */
  ApplicationProviderArn: string | undefined;

  /**
   * @public
   * <p>The protocol that the application provider uses to perform federation.</p>
   */
  FederationProtocol?: FederationProtocol;

  /**
   * @public
   * <p>A structure that describes how IAM Identity Center represents the application provider in the
   *             portal.</p>
   */
  DisplayData?: DisplayData;

  /**
   * @public
   * <p>A structure that describes the application provider's resource server.</p>
   */
  ResourceServerConfig?: ResourceServerConfig;
}

/**
 * @public
 * <p>Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.</p>
 */
export interface CustomerManagedPolicyReference {
  /**
   * @public
   * <p>The name of the IAM policy that you have configured in each account where you want
   *             to deploy your permission set.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The path to the IAM policy that you have configured in each account where you want
   *             to deploy your permission set. The default is <code>/</code>. For more information, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User
   *             Guide</i>.</p>
   */
  Path?: string;
}

/**
 * @public
 */
export interface AttachCustomerManagedPolicyReferenceToPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>PermissionSet</code>.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.</p>
   */
  CustomerManagedPolicyReference: CustomerManagedPolicyReference | undefined;
}

/**
 * @public
 */
export interface AttachCustomerManagedPolicyReferenceToPermissionSetResponse {}

/**
 * @public
 * <p>Indicates that the principal has crossed the permitted number of resources that can be
 *             created.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A structure that stores the details of the Amazon Web Services managed policy.</p>
 */
export interface AttachedManagedPolicy {
  /**
   * @public
   * <p>The name of the Amazon Web Services managed policy.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the Amazon Web Services managed policy. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface AttachManagedPolicyToPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <a>PermissionSet</a> that the managed policy should be
   *             attached to.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services managed policy ARN to be attached to a permission set.</p>
   */
  ManagedPolicyArn: string | undefined;
}

/**
 * @public
 */
export interface AttachManagedPolicyToPermissionSetResponse {}

/**
 * @public
 */
export interface CreateAccountAssignmentRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>TargetID is an Amazon Web Services account identifier, (For example, 123456789012).</p>
   */
  TargetId: string | undefined;

  /**
   * @public
   * <p>The entity type for which the assignment will be created.</p>
   */
  TargetType: TargetType | undefined;

  /**
   * @public
   * <p>The ARN of the permission set that the admin wants to grant the principal access
   *             to.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>The entity type for which the assignment will be created.</p>
   */
  PrincipalType: PrincipalType | undefined;

  /**
   * @public
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   */
  PrincipalId: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountAssignmentResponse {
  /**
   * @public
   * <p>The status object for the account assignment creation operation.</p>
   */
  AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
}

/**
 * @public
 * <p>A set of key-value pairs that are used to manage the resource. Tags can only be
 *             applied to permission sets and cannot be applied to corresponding roles that IAM Identity Center
 *             creates in Amazon Web Services accounts.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key for the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * @public
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the application provider under which the operation will run.</p>
   */
  ApplicationProviderArn: string | undefined;

  /**
   * @public
   * <p>The name of the .</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the .</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A structure that describes the options for the portal associated with an
   *             application.</p>
   */
  PortalOptions?: PortalOptions;

  /**
   * @public
   * <p>Specifies tags to be attached to the application.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Specifies whether the application is enabled or disabled.</p>
   */
  Status?: ApplicationStatus;

  /**
   * @public
   * <p>Specifies a unique, case-sensitive ID that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * @public
   * <p>Specifies the ARN of the application.</p>
   */
  ApplicationArn?: string;
}

/**
 * @public
 */
export interface CreateApplicationAssignmentRequest {
  /**
   * @public
   * <p>The ARN of the application provider under which the operation will run.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   */
  PrincipalId: string | undefined;

  /**
   * @public
   * <p>The entity type for which the assignment will be created.</p>
   */
  PrincipalType: PrincipalType | undefined;
}

/**
 * @public
 */
export interface CreateApplicationAssignmentResponse {}

/**
 * @public
 */
export interface CreateInstanceRequest {
  /**
   * @public
   * <p>The name of the instance of IAM Identity Center.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Specifies a unique, case-sensitive ID that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Specifies tags to be attached to the instance of IAM Identity Center.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateInstanceResponse {
  /**
   * @public
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run. </p>
   *          <p>For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn?: string;
}

/**
 * @public
 * <p>Specifies the attributes to add to your attribute-based access control (ABAC)
 *             configuration.</p>
 */
export interface InstanceAccessControlAttributeConfiguration {
  /**
   * @public
   * <p>Lists the attributes that are configured for ABAC in the specified IAM Identity Center
   *             instance.</p>
   */
  AccessControlAttributes: AccessControlAttribute[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>Specifies the IAM Identity Center identity store attributes to add to your ABAC configuration. When
   *             using an external identity provider as an identity source, you can pass attributes
   *             through the SAML assertion. Doing so provides an alternative to configuring attributes
   *             from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center
   *             will replace the attribute value with the value from the IAM Identity Center identity store.</p>
   */
  InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateInstanceAccessControlAttributeConfigurationResponse {}

/**
 * @public
 */
export interface CreatePermissionSetRequest {
  /**
   * @public
   * <p>The name of the <a>PermissionSet</a>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the <a>PermissionSet</a>.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The length of time that the application user sessions are valid in the ISO-8601
   *             standard.</p>
   */
  SessionDuration?: string;

  /**
   * @public
   * <p>Used to redirect users within the application during the federation authentication
   *             process.</p>
   */
  RelayState?: string;

  /**
   * @public
   * <p>The tags to attach to the new <a>PermissionSet</a>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>An entity that contains IAM policies.</p>
 */
export interface PermissionSet {
  /**
   * @public
   * <p>The name of the permission set.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the permission set. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  PermissionSetArn?: string;

  /**
   * @public
   * <p>The description of the <a>PermissionSet</a>.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date that the permission set was created.</p>
   */
  CreatedDate?: Date;

  /**
   * @public
   * <p>The length of time that the application user sessions are valid for in the ISO-8601
   *             standard.</p>
   */
  SessionDuration?: string;

  /**
   * @public
   * <p>Used to redirect users within the application during the federation authentication
   *             process.</p>
   */
  RelayState?: string;
}

/**
 * @public
 */
export interface CreatePermissionSetResponse {
  /**
   * @public
   * <p>Defines the level of access on an Amazon Web Services account.</p>
   */
  PermissionSet?: PermissionSet;
}

/**
 * @public
 * @enum
 */
export const JwksRetrievalOption = {
  OPEN_ID_DISCOVERY: "OPEN_ID_DISCOVERY",
} as const;

/**
 * @public
 */
export type JwksRetrievalOption = (typeof JwksRetrievalOption)[keyof typeof JwksRetrievalOption];

/**
 * @public
 * <p>A structure that describes configuration settings for a trusted token issuer that supports OpenID
 *             Connect (OIDC) and JSON Web Tokens (JWTs).</p>
 */
export interface OidcJwtConfiguration {
  /**
   * @public
   * <p>The URL that IAM Identity Center uses for OpenID Discovery. OpenID Discovery is used to obtain the information required to verify the tokens that the trusted token issuer generates.</p>
   */
  IssuerUrl: string | undefined;

  /**
   * @public
   * <p>The path of the source attribute in the JWT from the trusted token issuer. The attribute mapped by this JMESPath expression is compared against the attribute mapped by <code>IdentityStoreAttributePath</code> when a trusted token issuer token is exchanged for
   *             an IAM Identity Center token.</p>
   */
  ClaimAttributePath: string | undefined;

  /**
   * @public
   * <p>The path of the destination attribute in a JWT from IAM Identity Center. The attribute mapped by this JMESPath expression is compared against the attribute mapped by <code>ClaimAttributePath</code> when a trusted token issuer token is exchanged for
   *             an IAM Identity Center token. </p>
   */
  IdentityStoreAttributePath: string | undefined;

  /**
   * @public
   * <p>The method that the trusted token issuer can use to retrieve the JSON Web Key Set used to verify a
   *             JWT.</p>
   */
  JwksRetrievalOption: JwksRetrievalOption | undefined;
}

/**
 * @public
 * <p>A structure that describes the configuration of a trusted token issuer. The structure and available
 *             settings are determined by the type of the trusted token issuer.</p>
 */
export type TrustedTokenIssuerConfiguration =
  | TrustedTokenIssuerConfiguration.OidcJwtConfigurationMember
  | TrustedTokenIssuerConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace TrustedTokenIssuerConfiguration {
  /**
   * @public
   * <p>A structure that describes the settings for a trusted token issuer that works with OpenID Connect
   *             (OIDC) by using JSON Web Tokens (JWT).</p>
   */
  export interface OidcJwtConfigurationMember {
    OidcJwtConfiguration: OidcJwtConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    OidcJwtConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    OidcJwtConfiguration: (value: OidcJwtConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TrustedTokenIssuerConfiguration, visitor: Visitor<T>): T => {
    if (value.OidcJwtConfiguration !== undefined) return visitor.OidcJwtConfiguration(value.OidcJwtConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const TrustedTokenIssuerType = {
  OIDC_JWT: "OIDC_JWT",
} as const;

/**
 * @public
 */
export type TrustedTokenIssuerType = (typeof TrustedTokenIssuerType)[keyof typeof TrustedTokenIssuerType];

/**
 * @public
 */
export interface CreateTrustedTokenIssuerRequest {
  /**
   * @public
   * <p>Specifies the ARN of the instance of IAM Identity Center to contain the new trusted token issuer
   *             configuration.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>Specifies the name of the new trusted token issuer configuration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies the type of the new trusted token issuer.</p>
   */
  TrustedTokenIssuerType: TrustedTokenIssuerType | undefined;

  /**
   * @public
   * <p>Specifies settings that apply to the new trusted token issuer configuration. The settings that are
   *             available depend on what <code>TrustedTokenIssuerType</code> you specify.</p>
   */
  TrustedTokenIssuerConfiguration: TrustedTokenIssuerConfiguration | undefined;

  /**
   * @public
   * <p>Specifies a unique, case-sensitive ID that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Specifies tags to be attached to the new trusted token issuer configuration.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTrustedTokenIssuerResponse {
  /**
   * @public
   * <p>The ARN of the new trusted token issuer configuration.</p>
   */
  TrustedTokenIssuerArn?: string;
}

/**
 * @public
 */
export interface DeleteAccountAssignmentRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>TargetID is an Amazon Web Services account identifier, (For example, 123456789012).</p>
   */
  TargetId: string | undefined;

  /**
   * @public
   * <p>The entity type for which the assignment will be deleted.</p>
   */
  TargetType: TargetType | undefined;

  /**
   * @public
   * <p>The ARN of the permission set that will be used to remove access.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>The entity type for which the assignment will be deleted.</p>
   */
  PrincipalType: PrincipalType | undefined;

  /**
   * @public
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   */
  PrincipalId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountAssignmentResponse {
  /**
   * @public
   * <p>The status object for the account assignment deletion operation.</p>
   */
  AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>. </p>
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DeleteApplicationAssignmentRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   */
  PrincipalId: string | undefined;

  /**
   * @public
   * <p>The entity type for which the assignment will be deleted.</p>
   */
  PrincipalType: PrincipalType | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationAssignmentResponse {}

/**
 * @public
 */
export interface DeleteInlinePolicyFromPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the permission set that will be used to remove access.</p>
   */
  PermissionSetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInlinePolicyFromPermissionSetResponse {}

/**
 * @public
 */
export interface DeleteInstanceRequest {
  /**
   * @public
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run.</p>
   */
  InstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceResponse {}

/**
 * @public
 */
export interface DeleteInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.</p>
   */
  InstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceAccessControlAttributeConfigurationResponse {}

/**
 * @public
 */
export interface DeletePermissionsBoundaryFromPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>PermissionSet</code>.</p>
   */
  PermissionSetArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePermissionsBoundaryFromPermissionSetResponse {}

/**
 * @public
 */
export interface DeletePermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the permission set that should be deleted.</p>
   */
  PermissionSetArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePermissionSetResponse {}

/**
 * @public
 */
export interface DeleteTrustedTokenIssuerRequest {
  /**
   * @public
   * <p>Specifies the ARN of the trusted token issuer configuration to delete.</p>
   */
  TrustedTokenIssuerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrustedTokenIssuerResponse {}

/**
 * @public
 */
export interface DescribeAccountAssignmentCreationStatusRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The identifier that is used to track the request operation progress.</p>
   */
  AccountAssignmentCreationRequestId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAssignmentCreationStatusResponse {
  /**
   * @public
   * <p>The status object for the account assignment creation operation.</p>
   */
  AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
}

/**
 * @public
 */
export interface DescribeAccountAssignmentDeletionStatusRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The identifier that is used to track the request operation progress.</p>
   */
  AccountAssignmentDeletionRequestId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAssignmentDeletionStatusResponse {
  /**
   * @public
   * <p>The status object for the account assignment deletion operation.</p>
   */
  AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
}

/**
 * @public
 */
export interface DescribeApplicationRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * @public
   * <p>Specifies the ARN of the application.</p>
   */
  ApplicationArn?: string;

  /**
   * @public
   * <p>The ARN of the application provider under which the operation will run.</p>
   */
  ApplicationProviderArn?: string;

  /**
   * @public
   * <p>The application name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The account ID.</p>
   */
  ApplicationAccount?: string;

  /**
   * @public
   * <p>The ARN of the IAM Identity Center application under which the operation will run. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn?: string;

  /**
   * @public
   * <p>Specifies whether the application is enabled or disabled.</p>
   */
  Status?: ApplicationStatus;

  /**
   * @public
   * <p>A structure that describes the options for the portal associated with an
   *             application.</p>
   */
  PortalOptions?: PortalOptions;

  /**
   * @public
   * <p>The description of the .</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date the application was created.</p>
   */
  CreatedDate?: Date;
}

/**
 * @public
 */
export interface DescribeApplicationAssignmentRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   */
  PrincipalId: string | undefined;

  /**
   * @public
   * <p>The entity type for which the assignment will be created.</p>
   */
  PrincipalType: PrincipalType | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationAssignmentResponse {
  /**
   * @public
   * <p>The entity type for which the assignment will be created.</p>
   */
  PrincipalType?: PrincipalType;

  /**
   * @public
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   */
  PrincipalId?: string;

  /**
   * @public
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ApplicationArn?: string;
}

/**
 * @public
 */
export interface DescribeApplicationProviderRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application provider for which you want details.</p>
   */
  ApplicationProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationProviderResponse {
  /**
   * @public
   * <p>The ARN of the application provider.</p>
   */
  ApplicationProviderArn: string | undefined;

  /**
   * @public
   * <p>The protocol used to federate to the application provider.</p>
   */
  FederationProtocol?: FederationProtocol;

  /**
   * @public
   * <p>A structure with details about the display data for the application provider.</p>
   */
  DisplayData?: DisplayData;

  /**
   * @public
   * <p>A structure with details about the receiving application.</p>
   */
  ResourceServerConfig?: ResourceServerConfig;
}

/**
 * @public
 */
export interface DescribeInstanceRequest {
  /**
   * @public
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run.</p>
   */
  InstanceArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  ACTIVE: "ACTIVE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * @public
 */
export interface DescribeInstanceResponse {
  /**
   * @public
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn?: string;

  /**
   * @public
   * <p>The identifier of the identity store that is connected to the instance of
   *             IAM Identity Center.</p>
   */
  IdentityStoreId?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account for which the instance was created.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>Specifies the instance name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The date the instance was created.</p>
   */
  CreatedDate?: Date;

  /**
   * @public
   * <p>The status of the instance. </p>
   */
  Status?: InstanceStatus;
}

/**
 * @public
 */
export interface DescribeInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.</p>
   */
  InstanceArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceAccessControlAttributeConfigurationStatus = {
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type InstanceAccessControlAttributeConfigurationStatus =
  (typeof InstanceAccessControlAttributeConfigurationStatus)[keyof typeof InstanceAccessControlAttributeConfigurationStatus];

/**
 * @public
 */
export interface DescribeInstanceAccessControlAttributeConfigurationResponse {
  /**
   * @public
   * <p>The status of the attribute configuration process.</p>
   */
  Status?: InstanceAccessControlAttributeConfigurationStatus;

  /**
   * @public
   * <p>Provides more details about the current status of the specified attribute.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>Gets the list of IAM Identity Center identity store attributes that have been added to your ABAC
   *             configuration.</p>
   */
  InstanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfiguration;
}

/**
 * @public
 */
export interface DescribePermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the permission set. </p>
   */
  PermissionSetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribePermissionSetResponse {
  /**
   * @public
   * <p>Describes the level of access on an Amazon Web Services account.</p>
   */
  PermissionSet?: PermissionSet;
}

/**
 * @public
 */
export interface DescribePermissionSetProvisioningStatusRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The identifier that is provided by the <a>ProvisionPermissionSet</a> call
   *             to retrieve the current status of the provisioning workflow.</p>
   */
  ProvisionPermissionSetRequestId: string | undefined;
}

/**
 * @public
 * <p>A structure that is used to provide the status of the provisioning operation for a
 *             specified permission set.</p>
 */
export interface PermissionSetProvisioningStatus {
  /**
   * @public
   * <p>The status of the permission set provisioning process.</p>
   */
  Status?: StatusValues;

  /**
   * @public
   * <p>The identifier for tracking the request operation that is generated by the universally
   *             unique identifier (UUID) workflow.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account from which to list the assignments.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ARN of the permission set that is being provisioned. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  PermissionSetArn?: string;

  /**
   * @public
   * <p>The message that contains an error or exception in case of an operation
   *             failure.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The date that the permission set was created.</p>
   */
  CreatedDate?: Date;
}

/**
 * @public
 */
export interface DescribePermissionSetProvisioningStatusResponse {
  /**
   * @public
   * <p>The status object for the permission set provisioning operation.</p>
   */
  PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
}

/**
 * @public
 */
export interface DescribeTrustedTokenIssuerRequest {
  /**
   * @public
   * <p>Specifies the ARN of the trusted token issuer configuration that you want details about.</p>
   */
  TrustedTokenIssuerArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrustedTokenIssuerResponse {
  /**
   * @public
   * <p>The ARN of the trusted token issuer configuration.</p>
   */
  TrustedTokenIssuerArn?: string;

  /**
   * @public
   * <p>The name of the trusted token issuer configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the trusted token issuer.</p>
   */
  TrustedTokenIssuerType?: TrustedTokenIssuerType;

  /**
   * @public
   * <p>A structure the describes the settings that apply of this trusted token issuer.</p>
   */
  TrustedTokenIssuerConfiguration?: TrustedTokenIssuerConfiguration;
}

/**
 * @public
 */
export interface DetachCustomerManagedPolicyReferenceFromPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>PermissionSet</code>.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.</p>
   */
  CustomerManagedPolicyReference: CustomerManagedPolicyReference | undefined;
}

/**
 * @public
 */
export interface DetachCustomerManagedPolicyReferenceFromPermissionSetResponse {}

/**
 * @public
 */
export interface DetachManagedPolicyFromPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <a>PermissionSet</a> from which the policy should be
   *             detached.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services managed policy ARN to be detached from a permission set.</p>
   */
  ManagedPolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DetachManagedPolicyFromPermissionSetResponse {}

/**
 * @public
 */
export interface GetApplicationAssignmentConfigurationRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationAssignmentConfigurationResponse {
  /**
   * @public
   * <p>If <code>AssignmentsRequired</code> is <code>true</code> (default value), users don’t have access to the application unless an assignment is created using the
   *             <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html">CreateApplicationAssignment API</a>. If <code>false</code>, all users have access to the application. </p>
   */
  AssignmentRequired: boolean | undefined;
}

/**
 * @public
 */
export interface GetInlinePolicyForPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the permission set.</p>
   */
  PermissionSetArn: string | undefined;
}

/**
 * @public
 */
export interface GetInlinePolicyForPermissionSetResponse {
  /**
   * @public
   * <p>The inline policy that is attached to the permission set.</p>
   *          <note>
   *             <p>For <code>Length Constraints</code>, if a valid ARN is provided for a permission
   *                 set, it is possible for an empty inline policy to be returned.</p>
   *          </note>
   */
  InlinePolicy?: string;
}

/**
 * @public
 */
export interface GetPermissionsBoundaryForPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>PermissionSet</code>.</p>
   */
  PermissionSetArn: string | undefined;
}

/**
 * @public
 * <p>Specifies the configuration of the Amazon Web Services managed or customer managed policy that you
 *             want to set as a permissions boundary. Specify either
 *                 <code>CustomerManagedPolicyReference</code> to use the name and path of a customer
 *             managed policy, or <code>ManagedPolicyArn</code> to use the ARN of an Amazon Web Services managed
 *             policy. A permissions boundary represents the maximum permissions that any policy can
 *             grant your role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries
 *                 for IAM entities</a> in the <i>IAM User Guide</i>.</p>
 *          <important>
 *             <p>Policies used as permissions boundaries don't provide permissions. You must also
 *                 attach an IAM policy to the role. To learn how the effective permissions for a
 *                 role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON
 *                     policy evaluation logic</a> in the <i>IAM User
 *                 Guide</i>.</p>
 *          </important>
 */
export interface PermissionsBoundary {
  /**
   * @public
   * <p>Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.</p>
   */
  CustomerManagedPolicyReference?: CustomerManagedPolicyReference;

  /**
   * @public
   * <p>The Amazon Web Services managed policy ARN that you want to attach to a permission set as a
   *             permissions boundary.</p>
   */
  ManagedPolicyArn?: string;
}

/**
 * @public
 */
export interface GetPermissionsBoundaryForPermissionSetResponse {
  /**
   * @public
   * <p>The permissions boundary attached to the specified permission set.</p>
   */
  PermissionsBoundary?: PermissionsBoundary;
}

/**
 * @public
 * <p>Provides information about the IAM Identity Center instance.</p>
 */
export interface InstanceMetadata {
  /**
   * @public
   * <p>The ARN of the Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn?: string;

  /**
   * @public
   * <p>The identifier of the identity store that is connected to the Identity Center
   *             instance.</p>
   */
  IdentityStoreId?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID number of the owner of the Identity Center instance.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>The name of the Identity Center instance.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The date and time that the Identity Center instance was created.</p>
   */
  CreatedDate?: Date;

  /**
   * @public
   * <p>The current status of this Identity Center instance.</p>
   */
  Status?: InstanceStatus;
}

/**
 * @public
 * <p>Filters the operation status list based on the passed attribute value.</p>
 */
export interface OperationStatusFilter {
  /**
   * @public
   * <p>Filters the list operations result based on the status attribute.</p>
   */
  Status?: StatusValues;
}

/**
 * @public
 */
export interface ListAccountAssignmentCreationStatusRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to display for the assignment.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Filters results based on the passed attribute value.</p>
   */
  Filter?: OperationStatusFilter;
}

/**
 * @public
 */
export interface ListAccountAssignmentCreationStatusResponse {
  /**
   * @public
   * <p>The status object for the account assignment creation operation.</p>
   */
  AccountAssignmentsCreationStatus?: AccountAssignmentOperationStatusMetadata[];

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAccountAssignmentDeletionStatusRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to display for the assignment.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Filters results based on the passed attribute value.</p>
   */
  Filter?: OperationStatusFilter;
}

/**
 * @public
 */
export interface ListAccountAssignmentDeletionStatusResponse {
  /**
   * @public
   * <p>The status object for the account assignment deletion operation.</p>
   */
  AccountAssignmentsDeletionStatus?: AccountAssignmentOperationStatusMetadata[];

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAccountAssignmentsRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account from which to list the assignments.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The ARN of the permission set from which to list assignments.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to display for the assignment.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAccountAssignmentsResponse {
  /**
   * @public
   * <p>The list of assignments that match the input Amazon Web Services account and permission set.</p>
   */
  AccountAssignments?: AccountAssignment[];

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that describes a filter for account assignments.</p>
 */
export interface ListAccountAssignmentsFilter {
  /**
   * @public
   * <p>The ID number of an Amazon Web Services account that filters the results in the response.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListAccountAssignmentsForPrincipalRequest {
  /**
   * @public
   * <p>Specifies the ARN of the instance of IAM Identity Center that contains the principal.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>Specifies the principal for which you want to retrieve the list of account
   *             assignments.</p>
   */
  PrincipalId: string | undefined;

  /**
   * @public
   * <p>Specifies the type of the principal.</p>
   */
  PrincipalType: PrincipalType | undefined;

  /**
   * @public
   * <p>Specifies an Amazon Web Services account ID number. Results are filtered to only those that match
   *             this ID number.</p>
   */
  Filter?: ListAccountAssignmentsFilter;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAccountAssignmentsForPrincipalResponse {
  /**
   * @public
   * <p>An array list of the account assignments for the principal.</p>
   */
  AccountAssignments?: AccountAssignmentForPrincipal[];

  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ProvisioningStatus = {
  LATEST_PERMISSION_SET_NOT_PROVISIONED: "LATEST_PERMISSION_SET_NOT_PROVISIONED",
  LATEST_PERMISSION_SET_PROVISIONED: "LATEST_PERMISSION_SET_PROVISIONED",
} as const;

/**
 * @public
 */
export type ProvisioningStatus = (typeof ProvisioningStatus)[keyof typeof ProvisioningStatus];

/**
 * @public
 */
export interface ListAccountsForProvisionedPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <a>PermissionSet</a> from which the associated Amazon Web Services
   *             accounts will be listed.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>The permission set provisioning status for an Amazon Web Services account.</p>
   */
  ProvisioningStatus?: ProvisioningStatus;

  /**
   * @public
   * <p>The maximum number of results to display for the <a>PermissionSet</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAccountsForProvisionedPermissionSetResponse {
  /**
   * @public
   * <p>The list of Amazon Web Services <code>AccountIds</code>.</p>
   */
  AccountIds?: string[];

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationAssignmentsRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationAssignmentsResponse {
  /**
   * @public
   * <p>The list of users assigned to an application.</p>
   */
  ApplicationAssignments?: ApplicationAssignment[];

  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that describes a filter for application assignments.</p>
 */
export interface ListApplicationAssignmentsFilter {
  /**
   * @public
   * <p>The ARN of an application.</p>
   */
  ApplicationArn?: string;
}

/**
 * @public
 */
export interface ListApplicationAssignmentsForPrincipalRequest {
  /**
   * @public
   * <p>Specifies the instance of IAM Identity Center that contains principal and applications.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>Specifies the unique identifier of the principal for which you want to retrieve its
   *             assignments.</p>
   */
  PrincipalId: string | undefined;

  /**
   * @public
   * <p>Specifies the type of the principal for which you want to retrieve its
   *             assignments.</p>
   */
  PrincipalType: PrincipalType | undefined;

  /**
   * @public
   * <p>Filters the output to include only assignments associated with the application that
   *             has the specified ARN.</p>
   */
  Filter?: ListApplicationAssignmentsFilter;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListApplicationAssignmentsForPrincipalResponse {
  /**
   * @public
   * <p>An array list of the application assignments for the specified principal.</p>
   */
  ApplicationAssignments?: ApplicationAssignmentForPrincipal[];

  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationProvidersRequest {
  /**
   * @public
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationProvidersResponse {
  /**
   * @public
   * <p>An array list of structures that describe application providers.</p>
   */
  ApplicationProviders?: ApplicationProvider[];

  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that describes a filter for applications.</p>
 */
export interface ListApplicationsFilter {
  /**
   * @public
   * <p>An Amazon Web Services account ID number that filters the results in the response.</p>
   */
  ApplicationAccount?: string;

  /**
   * @public
   * <p>The ARN of an application provider that can filter the results in the response.</p>
   */
  ApplicationProvider?: string;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center application under which the operation will run.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Filters response results. </p>
   */
  Filter?: ListApplicationsFilter;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * @public
   * <p>Retrieves all applications associated with the instance.</p>
   */
  Applications?: Application[];

  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCustomerManagedPolicyReferencesInPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>PermissionSet</code>. </p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to display for the list call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of
   *             previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCustomerManagedPolicyReferencesInPermissionSetResponse {
  /**
   * @public
   * <p>Specifies the names and paths of the customer managed policies that you have attached
   *             to your permission set.</p>
   */
  CustomerManagedPolicyReferences?: CustomerManagedPolicyReference[];

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of
   *             previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * @public
   * <p>The maximum number of results to display for the instance.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * @public
   * <p>Lists the IAM Identity Center instances that the caller has access to.</p>
   */
  Instances?: InstanceMetadata[];

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListManagedPoliciesInPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <a>PermissionSet</a> whose managed policies will be
   *             listed.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to display for the <a>PermissionSet</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListManagedPoliciesInPermissionSetResponse {
  /**
   * @public
   * <p>An array of the <a>AttachedManagedPolicy</a> data type object.</p>
   */
  AttachedManagedPolicies?: AttachedManagedPolicy[];

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPermissionSetProvisioningStatusRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to display for the assignment.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Filters results based on the passed attribute value.</p>
   */
  Filter?: OperationStatusFilter;
}

/**
 * @public
 * <p>Provides information about the permission set provisioning status.</p>
 */
export interface PermissionSetProvisioningStatusMetadata {
  /**
   * @public
   * <p>The status of the permission set provisioning process.</p>
   */
  Status?: StatusValues;

  /**
   * @public
   * <p>The identifier for tracking the request operation that is generated by the universally
   *             unique identifier (UUID) workflow.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>The date that the permission set was created.</p>
   */
  CreatedDate?: Date;
}

/**
 * @public
 */
export interface ListPermissionSetProvisioningStatusResponse {
  /**
   * @public
   * <p>The status object for the permission set provisioning operation.</p>
   */
  PermissionSetsProvisioningStatus?: PermissionSetProvisioningStatusMetadata[];

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPermissionSetsRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to display for the assignment.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListPermissionSetsResponse {
  /**
   * @public
   * <p>Defines the level of access on an Amazon Web Services account.</p>
   */
  PermissionSets?: string[];

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPermissionSetsProvisionedToAccountRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account from which to list the assignments.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The status object for the permission set provisioning operation.</p>
   */
  ProvisioningStatus?: ProvisioningStatus;

  /**
   * @public
   * <p>The maximum number of results to display for the assignment.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPermissionSetsProvisionedToAccountResponse {
  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Defines the level of access that an Amazon Web Services account has.</p>
   */
  PermissionSets?: string[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn?: string;

  /**
   * @public
   * <p>The ARN of the resource with the tags to be listed.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A set of key-value pairs that are used to manage the resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTrustedTokenIssuersRequest {
  /**
   * @public
   * <p>Specifies the ARN of the instance of IAM Identity Center with the trusted token issuer configurations that you want
   *             to list.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that describes a trusted token issuer.</p>
 */
export interface TrustedTokenIssuerMetadata {
  /**
   * @public
   * <p>The ARN of the trusted token issuer configuration in the instance of IAM Identity Center.</p>
   */
  TrustedTokenIssuerArn?: string;

  /**
   * @public
   * <p>The name of the trusted token issuer configuration in the instance of IAM Identity Center.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of trusted token issuer.</p>
   */
  TrustedTokenIssuerType?: TrustedTokenIssuerType;
}

/**
 * @public
 */
export interface ListTrustedTokenIssuersResponse {
  /**
   * @public
   * <p>An array list of the trusted token issuer configurations.</p>
   */
  TrustedTokenIssuers?: TrustedTokenIssuerMetadata[];

  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that describes updated configuration settings for a trusted token issuer that supports
 *             OpenID Connect (OIDC) and JSON Web Tokens (JWTs).</p>
 */
export interface OidcJwtUpdateConfiguration {
  /**
   * @public
   * <p>The path of the source attribute in the JWT from the trusted token issuer. The attribute mapped by this JMESPath expression is compared against the attribute mapped by <code>IdentityStoreAttributePath</code> when a trusted token issuer token is exchanged for
   *             an IAM Identity Center token.</p>
   */
  ClaimAttributePath?: string;

  /**
   * @public
   * <p>The path of the destination attribute in a JWT from IAM Identity Center. The attribute mapped by this JMESPath expression is compared against the attribute mapped by <code>ClaimAttributePath</code> when a trusted token issuer token is exchanged for
   *             an IAM Identity Center token.</p>
   */
  IdentityStoreAttributePath?: string;

  /**
   * @public
   * <p>The method that the trusted token issuer can use to retrieve the JSON Web Key Set used to verify a
   *             JWT.</p>
   */
  JwksRetrievalOption?: JwksRetrievalOption;
}

/**
 * @public
 * @enum
 */
export const ProvisionTargetType = {
  ALL_PROVISIONED_ACCOUNTS: "ALL_PROVISIONED_ACCOUNTS",
  AWS_ACCOUNT: "AWS_ACCOUNT",
} as const;

/**
 * @public
 */
export type ProvisionTargetType = (typeof ProvisionTargetType)[keyof typeof ProvisionTargetType];

/**
 * @public
 */
export interface ProvisionPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the permission set.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>TargetID is an Amazon Web Services account identifier, (For example, 123456789012).</p>
   */
  TargetId?: string;

  /**
   * @public
   * <p>The entity type for which the assignment will be created.</p>
   */
  TargetType: ProvisionTargetType | undefined;
}

/**
 * @public
 */
export interface ProvisionPermissionSetResponse {
  /**
   * @public
   * <p>The status object for the permission set provisioning operation.</p>
   */
  PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
}

/**
 * @public
 */
export interface PutApplicationAssignmentConfigurationRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>If <code>AssignmentsRequired</code> is <code>true</code> (default value), users don’t have access to the application unless an assignment is created using the
   *             <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html">CreateApplicationAssignment API</a>. If <code>false</code>, all users have access to the application. </p>
   */
  AssignmentRequired: boolean | undefined;
}

/**
 * @public
 */
export interface PutApplicationAssignmentConfigurationResponse {}

/**
 * @public
 */
export interface PutInlinePolicyToPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the permission set.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>The inline policy to attach to a <a>PermissionSet</a>.</p>
   */
  InlinePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutInlinePolicyToPermissionSetResponse {}

/**
 * @public
 */
export interface PutPermissionsBoundaryToPermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>PermissionSet</code>.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>The permissions boundary that you want to attach to a
   *             <code>PermissionSet</code>.</p>
   */
  PermissionsBoundary: PermissionsBoundary | undefined;
}

/**
 * @public
 */
export interface PutPermissionsBoundaryToPermissionSetResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn?: string;

  /**
   * @public
   * <p>The ARN of the resource with the tags to be listed.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A set of key-value pairs that are used to manage the resource.</p>
   */
  Tags: Tag[] | undefined;
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn?: string;

  /**
   * @public
   * <p>The ARN of the resource with the tags to be listed.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of tags that are attached to the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>A structure that describes the options for the access portal associated with an application that can be updated.</p>
 */
export interface UpdateApplicationPortalOptions {
  /**
   * @public
   * <p>A structure that describes the sign-in options for an application portal.</p>
   */
  SignInOptions?: SignInOptions;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * @public
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ApplicationArn: string | undefined;

  /**
   * @public
   * <p>Specifies the updated name for the application.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the .</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies whether the application is enabled or disabled.</p>
   */
  Status?: ApplicationStatus;

  /**
   * @public
   * <p>A structure that describes the options for the portal associated with an
   *             application.</p>
   */
  PortalOptions?: UpdateApplicationPortalOptions;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}

/**
 * @public
 */
export interface UpdateInstanceRequest {
  /**
   * @public
   * <p>Updates the instance name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceResponse {}

/**
 * @public
 */
export interface UpdateInstanceAccessControlAttributeConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>Updates the attributes for your ABAC configuration.</p>
   */
  InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceAccessControlAttributeConfigurationResponse {}

/**
 * @public
 */
export interface UpdatePermissionSetRequest {
  /**
   * @public
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.
   *             For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   * Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  InstanceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the permission set.</p>
   */
  PermissionSetArn: string | undefined;

  /**
   * @public
   * <p>The description of the <a>PermissionSet</a>.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The length of time that the application user sessions are valid for in the ISO-8601
   *             standard.</p>
   */
  SessionDuration?: string;

  /**
   * @public
   * <p>Used to redirect users within the application during the federation authentication
   *             process.</p>
   */
  RelayState?: string;
}

/**
 * @public
 */
export interface UpdatePermissionSetResponse {}

/**
 * @public
 * <p>A structure that contains details to be updated for a trusted token issuer configuration. The
 *             structure and settings that you can include depend on the type of the trusted token issuer being
 *             updated.</p>
 */
export type TrustedTokenIssuerUpdateConfiguration =
  | TrustedTokenIssuerUpdateConfiguration.OidcJwtConfigurationMember
  | TrustedTokenIssuerUpdateConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace TrustedTokenIssuerUpdateConfiguration {
  /**
   * @public
   * <p>A structure that describes an updated configuration for a trusted token issuer that uses OpenID
   *             Connect (OIDC) with JSON web tokens (JWT).</p>
   */
  export interface OidcJwtConfigurationMember {
    OidcJwtConfiguration: OidcJwtUpdateConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    OidcJwtConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    OidcJwtConfiguration: (value: OidcJwtUpdateConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TrustedTokenIssuerUpdateConfiguration, visitor: Visitor<T>): T => {
    if (value.OidcJwtConfiguration !== undefined) return visitor.OidcJwtConfiguration(value.OidcJwtConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdateTrustedTokenIssuerRequest {
  /**
   * @public
   * <p>Specifies the ARN of the trusted token issuer configuration that you want to update.</p>
   */
  TrustedTokenIssuerArn: string | undefined;

  /**
   * @public
   * <p>Specifies the updated name to be applied to the trusted token issuer configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Specifies a structure with settings to apply to the specified trusted token issuer. The settings that
   *             you can provide are determined by the type of the trusted token issuer that you are updating.</p>
   */
  TrustedTokenIssuerConfiguration?: TrustedTokenIssuerUpdateConfiguration;
}

/**
 * @public
 */
export interface UpdateTrustedTokenIssuerResponse {}
