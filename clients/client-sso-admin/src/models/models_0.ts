// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { SSOAdminServiceException as __BaseException } from "./SSOAdminServiceException";

/**
 * <p>The value used for mapping a specified attribute to an identity source. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/attributemappingsconcept.html">Attribute mappings</a> in the <i>IAM Identity Center User Guide</i>.</p>
 * @public
 */
export interface AccessControlAttributeValue {
  /**
   * <p>The identity source to use when mapping a specified attribute to IAM Identity Center.</p>
   * @public
   */
  Source: string[] | undefined;
}

/**
 * <p>These are IAM Identity Center identity store attributes that you can configure for use in attributes-based access control (ABAC). You can create permissions policies that determine who can access your Amazon Web Services resources based upon the configured attribute values. When you enable ABAC and specify <code>AccessControlAttributes</code>, IAM Identity Center passes the attribute values of the authenticated user into IAM for use in policy evaluation.</p>
 * @public
 */
export interface AccessControlAttribute {
  /**
   * <p>The name of the attribute associated with your identities in your identity source. This is used to map a specified attribute in your identity source with an attribute in IAM Identity Center.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value used for mapping a specified attribute to an identity source.</p>
   * @public
   */
  Value: AccessControlAttributeValue | undefined;
}

/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  KMS_ACCESS_DENIED_EXCEPTION: "KMS_AccessDeniedException",
} as const;

/**
 * @public
 */
export type AccessDeniedExceptionReason =
  (typeof AccessDeniedExceptionReason)[keyof typeof AccessDeniedExceptionReason];

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The reason for the access denied exception.</p>
   * @public
   */
  Reason?: AccessDeniedExceptionReason | undefined;
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
    this.Reason = opts.Reason;
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
 * <p>The assignment that indicates a principal's limited access to a specified Amazon Web Services account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note>
 * @public
 */
export interface AccountAssignment {
  /**
   * <p>The identifier of the Amazon Web Services account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ARN of the permission set. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PermissionSetArn?: string | undefined;

  /**
   * <p>The entity type for which the assignment will be created.</p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   * @public
   */
  PrincipalId?: string | undefined;
}

/**
 * <p>A structure that describes an assignment of an Amazon Web Services account to a principal and the permissions that principal has in the account.</p>
 * @public
 */
export interface AccountAssignmentForPrincipal {
  /**
   * <p>The account ID number of the Amazon Web Services account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ARN of the IAM Identity Center permission set assigned to this principal for this Amazon Web Services account.</p>
   * @public
   */
  PermissionSetArn?: string | undefined;

  /**
   * <p>The ID of the principal.</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>The type of the principal.</p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;
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
 * <p>The status of the creation or deletion operation of an assignment that a principal needs to access an account.</p>
 * @public
 */
export interface AccountAssignmentOperationStatus {
  /**
   * <p>The status of the permission set provisioning process.</p>
   * @public
   */
  Status?: StatusValues | undefined;

  /**
   * <p>The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The message that contains an error or exception in case of an operation failure.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>TargetID is an Amazon Web Services account identifier, (For example, 123456789012).</p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>The entity type for which the assignment will be created.</p>
   * @public
   */
  TargetType?: TargetType | undefined;

  /**
   * <p>The ARN of the permission set. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PermissionSetArn?: string | undefined;

  /**
   * <p>The entity type for which the assignment will be created.</p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>The date that the permission set was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;
}

/**
 * <p>Provides information about the <a>AccountAssignment</a> creation request.</p>
 * @public
 */
export interface AccountAssignmentOperationStatusMetadata {
  /**
   * <p>The status of the permission set provisioning process.</p>
   * @public
   */
  Status?: StatusValues | undefined;

  /**
   * <p>The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The date that the permission set was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;
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
 * <p>A structure that describes the sign-in options for an application portal.</p>
 * @public
 */
export interface SignInOptions {
  /**
   * <p>This determines how IAM Identity Center navigates the user to the target application. It can be one of the following values:</p> <ul> <li> <p> <code>APPLICATION</code>: IAM Identity Center redirects the customer to the configured <code>ApplicationUrl</code>.</p> </li> <li> <p> <code>IDENTITY_CENTER</code>: IAM Identity Center uses SAML identity-provider initiated authentication to sign the customer directly into a SAML-based application.</p> </li> </ul>
   * @public
   */
  Origin: SignInOrigin | undefined;

  /**
   * <p>The URL that accepts authentication requests for an application. This is a required parameter if the <code>Origin</code> parameter is <code>APPLICATION</code>.</p>
   * @public
   */
  ApplicationUrl?: string | undefined;
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
 * <p>A structure that describes the options for the access portal associated with an application.</p>
 * @public
 */
export interface PortalOptions {
  /**
   * <p>A structure that describes the sign-in options for the access portal.</p>
   * @public
   */
  SignInOptions?: SignInOptions | undefined;

  /**
   * <p>Indicates whether this application is visible in the access portal.</p>
   * @public
   */
  Visibility?: ApplicationVisibility | undefined;
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
 * <p>A structure that describes an application that uses IAM Identity Center for access management.</p>
 * @public
 */
export interface Application {
  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The ARN of the application provider for this application.</p>
   * @public
   */
  ApplicationProviderArn?: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID number of the application.</p>
   * @public
   */
  ApplicationAccount?: string | undefined;

  /**
   * <p>The ARN of the instance of IAM Identity Center that is configured with this application.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The current status of the application in this instance of IAM Identity Center.</p>
   * @public
   */
  Status?: ApplicationStatus | undefined;

  /**
   * <p>A structure that describes the options for the access portal associated with this application.</p>
   * @public
   */
  PortalOptions?: PortalOptions | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time when the application was originally created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;
}

/**
 * <p>Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
   * <p>Specifies the ARN of the application with the access scope to delete.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies the name of the access scope to remove from the application.</p>
   * @public
   */
  Scope: string | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
 * @enum
 */
export const ResourceNotFoundExceptionReason = {
  KMS_NOT_FOUND_EXCEPTION: "KMS_NotFoundException",
} as const;

/**
 * @public
 */
export type ResourceNotFoundExceptionReason =
  (typeof ResourceNotFoundExceptionReason)[keyof typeof ResourceNotFoundExceptionReason];

/**
 * <p>Indicates that a requested resource is not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The reason for the resource not found exception.</p>
   * @public
   */
  Reason?: ResourceNotFoundExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 * @enum
 */
export const ThrottlingExceptionReason = {
  KMS_THROTTLING_EXCEPTION: "KMS_ThrottlingException",
} as const;

/**
 * @public
 */
export type ThrottlingExceptionReason = (typeof ThrottlingExceptionReason)[keyof typeof ThrottlingExceptionReason];

/**
 * <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The reason for the throttling exception.</p>
   * @public
   */
  Reason?: ThrottlingExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  KMS_DISABLED_EXCEPTION: "KMS_DisabledException",
  KMS_INVALID_KEY_USAGE_EXCEPTION: "KMS_InvalidKeyUsageException",
  KMS_INVALID_STATE_EXCEPTION: "KMS_InvalidStateException",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The request failed because it contains a syntax error.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The reason for the validation exception.</p>
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 */
export interface GetApplicationAccessScopeRequest {
  /**
   * <p>Specifies the ARN of the application with the access scope that you want to retrieve.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies the name of the access scope for which you want the authorized targets.</p>
   * @public
   */
  Scope: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationAccessScopeResponse {
  /**
   * <p>The name of the access scope that can be used with the authorized targets.</p>
   * @public
   */
  Scope: string | undefined;

  /**
   * <p>An array of authorized targets associated with this access scope.</p>
   * @public
   */
  AuthorizedTargets?: string[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationAccessScopesRequest {
  /**
   * <p>Specifies the ARN of the application.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure that describes an IAM Identity Center access scope and its authorized targets.</p>
 * @public
 */
export interface ScopeDetails {
  /**
   * <p>The name of the access scope.</p>
   * @public
   */
  Scope: string | undefined;

  /**
   * <p>An array list of ARNs of applications.</p>
   * @public
   */
  AuthorizedTargets?: string[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationAccessScopesResponse {
  /**
   * <p>An array list of access scopes and their authorized targets that are associated with the application.</p>
   * @public
   */
  Scopes: ScopeDetails[] | undefined;

  /**
   * <p>If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutApplicationAccessScopeRequest {
  /**
   * <p>Specifies the name of the access scope to be associated with the specified targets.</p>
   * @public
   */
  Scope: string | undefined;

  /**
   * <p>Specifies an array list of ARNs that represent the authorized targets for this access scope.</p>
   * @public
   */
  AuthorizedTargets?: string[] | undefined;

  /**
   * <p>Specifies the ARN of the application with the access scope with the targets to add or update.</p>
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * <p>A structure that describes an assignment of a principal to an application.</p>
 * @public
 */
export interface ApplicationAssignment {
  /**
   * <p>The ARN of the application that has principals assigned.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>The unique identifier of the principal assigned to the application.</p>
   * @public
   */
  PrincipalId: string | undefined;

  /**
   * <p>The type of the principal assigned to the application.</p>
   * @public
   */
  PrincipalType: PrincipalType | undefined;
}

/**
 * <p>A structure that describes an application to which a principal is assigned.</p>
 * @public
 */
export interface ApplicationAssignmentForPrincipal {
  /**
   * <p>The ARN of the application to which the specified principal is assigned.</p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The unique identifier of the principal assigned to the application.</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>The type of the principal assigned to the application.</p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;
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
   * <p>Specifies the ARN of the application with the authentication method to delete.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies the authentication method type to delete from the application.</p>
   * @public
   */
  AuthenticationMethodType: AuthenticationMethodType | undefined;
}

/**
 * @public
 */
export interface GetApplicationAuthenticationMethodRequest {
  /**
   * <p>Specifies the ARN of the application.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies the type of authentication method for which you want details.</p>
   * @public
   */
  AuthenticationMethodType: AuthenticationMethodType | undefined;
}

/**
 * <p>A structure that describes details for authentication that uses IAM.</p>
 * @public
 */
export interface IamAuthenticationMethod {
  /**
   * <p>An IAM policy document in JSON.</p>
   * @public
   */
  ActorPolicy: __DocumentType | undefined;
}

/**
 * <p>A structure that describes an authentication method that can be used by an application.</p>
 * @public
 */
export type AuthenticationMethod = AuthenticationMethod.IamMember | AuthenticationMethod.$UnknownMember;

/**
 * @public
 */
export namespace AuthenticationMethod {
  /**
   * <p>A structure that describes details for IAM authentication.</p>
   * @public
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
   * <p>A structure that contains details about the requested authentication method.</p>
   * @public
   */
  AuthenticationMethod?: AuthenticationMethod | undefined;
}

/**
 * @public
 */
export interface ListApplicationAuthenticationMethodsRequest {
  /**
   * <p>Specifies the ARN of the application with the authentication methods you want to list.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure that describes an authentication method and its type.</p>
 * @public
 */
export interface AuthenticationMethodItem {
  /**
   * <p>The type of authentication that is used by this method.</p>
   * @public
   */
  AuthenticationMethodType?: AuthenticationMethodType | undefined;

  /**
   * <p>A structure that describes an authentication method. The contents of this structure is determined by the <code>AuthenticationMethodType</code>.</p>
   * @public
   */
  AuthenticationMethod?: AuthenticationMethod | undefined;
}

/**
 * @public
 */
export interface ListApplicationAuthenticationMethodsResponse {
  /**
   * <p>An array list of authentication methods for the specified application.</p>
   * @public
   */
  AuthenticationMethods?: AuthenticationMethodItem[] | undefined;

  /**
   * <p>If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutApplicationAuthenticationMethodRequest {
  /**
   * <p>Specifies the ARN of the application with the authentication method to add or update.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies the type of the authentication method that you want to add or update.</p>
   * @public
   */
  AuthenticationMethodType: AuthenticationMethodType | undefined;

  /**
   * <p>Specifies a structure that describes the authentication method to add or update. The structure type you provide is determined by the <code>AuthenticationMethodType</code> parameter.</p>
   * @public
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
   * <p>Specifies the ARN of the application with the grant to delete.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies the type of grant to delete from the application.</p>
   * @public
   */
  GrantType: GrantType | undefined;
}

/**
 * @public
 */
export interface GetApplicationGrantRequest {
  /**
   * <p>Specifies the ARN of the application that contains the grant.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies the type of grant.</p>
   * @public
   */
  GrantType: GrantType | undefined;
}

/**
 * <p>A structure that defines configuration settings for an application that supports the OAuth 2.0 Authorization Code Grant.</p>
 * @public
 */
export interface AuthorizationCodeGrant {
  /**
   * <p>A list of URIs that are valid locations to redirect a user's browser after the user is authorized.</p> <note> <p>RedirectUris is required when the grant type is <code>authorization_code</code>.</p> </note>
   * @public
   */
  RedirectUris?: string[] | undefined;
}

/**
 * <p>A structure that describes a trusted token issuer and associates it with a set of authorized audiences.</p>
 * @public
 */
export interface AuthorizedTokenIssuer {
  /**
   * <p>The ARN of the trusted token issuer.</p>
   * @public
   */
  TrustedTokenIssuerArn?: string | undefined;

  /**
   * <p>An array list of authorized audiences, or applications, that can consume the tokens generated by the associated trusted token issuer.</p>
   * @public
   */
  AuthorizedAudiences?: string[] | undefined;
}

/**
 * <p>A structure that defines configuration settings for an application that supports the JWT Bearer Token Authorization Grant. The <code>AuthorizedAudience</code> field is the aud claim. For more information, see <a href="https://datatracker.ietf.org/doc/html/rfc7523">RFC 7523</a>.</p>
 * @public
 */
export interface JwtBearerGrant {
  /**
   * <p>A list of allowed token issuers trusted by the Identity Center instances for this application.</p> <note> <p> <code>AuthorizedTokenIssuers</code> is required when the grant type is <code>JwtBearerGrant</code>.</p> </note>
   * @public
   */
  AuthorizedTokenIssuers?: AuthorizedTokenIssuer[] | undefined;
}

/**
 * <p>A structure that defines configuration settings for an application that supports the OAuth 2.0 Refresh Token Grant. For more, see <a href="https://datatracker.ietf.org/doc/html/rfc6749#section-1.5">RFC 6749</a>.</p>
 * @public
 */
export interface RefreshTokenGrant {}

/**
 * <p>A structure that defines configuration settings for an application that supports the OAuth 2.0 Token Exchange Grant. For more information, see <a href="https://datatracker.ietf.org/doc/html/rfc8693">RFC 8693</a>.</p>
 * @public
 */
export interface TokenExchangeGrant {}

/**
 * <p>The Grant union represents the set of possible configuration options for the selected grant type. Exactly one member of the union must be specified, and must match the grant type selected.</p>
 * @public
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
   * <p>Configuration options for the <code>authorization_code</code> grant type.</p>
   * @public
   */
  export interface AuthorizationCodeMember {
    AuthorizationCode: AuthorizationCodeGrant;
    JwtBearer?: never;
    RefreshToken?: never;
    TokenExchange?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration options for the <code>urn:ietf:params:oauth:grant-type:jwt-bearer</code> grant type.</p>
   * @public
   */
  export interface JwtBearerMember {
    AuthorizationCode?: never;
    JwtBearer: JwtBearerGrant;
    RefreshToken?: never;
    TokenExchange?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration options for the <code>refresh_token</code> grant type.</p>
   * @public
   */
  export interface RefreshTokenMember {
    AuthorizationCode?: never;
    JwtBearer?: never;
    RefreshToken: RefreshTokenGrant;
    TokenExchange?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration options for the <code>urn:ietf:params:oauth:grant-type:token-exchange</code> grant type.</p>
   * @public
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
   * <p>A structure that describes the requested grant.</p>
   * @public
   */
  Grant: Grant | undefined;
}

/**
 * @public
 */
export interface ListApplicationGrantsRequest {
  /**
   * <p>Specifies the ARN of the application whose grants you want to list.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure that defines a single grant and its configuration.</p>
 * @public
 */
export interface GrantItem {
  /**
   * <p>The type of the selected grant.</p>
   * @public
   */
  GrantType: GrantType | undefined;

  /**
   * <p>The configuration structure for the selected grant.</p>
   * @public
   */
  Grant: Grant | undefined;
}

/**
 * @public
 */
export interface ListApplicationGrantsResponse {
  /**
   * <p>An array list of structures that describe the requested grants.</p>
   * @public
   */
  Grants: GrantItem[] | undefined;

  /**
   * <p>If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutApplicationGrantRequest {
  /**
   * <p>Specifies the ARN of the application to update.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies the type of grant to update.</p>
   * @public
   */
  GrantType: GrantType | undefined;

  /**
   * <p>Specifies a structure that describes the grant to update.</p>
   * @public
   */
  Grant: Grant | undefined;
}

/**
 * <p>A structure that describes how the portal represents an application provider.</p>
 * @public
 */
export interface DisplayData {
  /**
   * <p>The name of the application provider that appears in the portal.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A URL that points to an icon that represents the application provider.</p>
   * @public
   */
  IconUrl?: string | undefined;

  /**
   * <p>The description of the application provider that appears in the portal.</p>
   * @public
   */
  Description?: string | undefined;
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
 * <p>A structure that describes details for an IAM Identity Center access scope that is associated with a resource server.</p>
 * @public
 */
export interface ResourceServerScopeDetails {
  /**
   * <p>The description of an access scope for a resource server.</p>
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * <p>The title of an access scope for a resource server.</p>
   * @public
   */
  DetailedTitle?: string | undefined;
}

/**
 * <p>A structure that describes the configuration of a resource server.</p>
 * @public
 */
export interface ResourceServerConfig {
  /**
   * <p>A list of the IAM Identity Center access scopes that are associated with this resource server.</p>
   * @public
   */
  Scopes?: Record<string, ResourceServerScopeDetails> | undefined;
}

/**
 * <p>A structure that describes a provider that can be used to connect an Amazon Web Services managed application or customer managed application to IAM Identity Center.</p>
 * @public
 */
export interface ApplicationProvider {
  /**
   * <p>The ARN of the application provider.</p>
   * @public
   */
  ApplicationProviderArn: string | undefined;

  /**
   * <p>The protocol that the application provider uses to perform federation.</p>
   * @public
   */
  FederationProtocol?: FederationProtocol | undefined;

  /**
   * <p>A structure that describes how IAM Identity Center represents the application provider in the portal.</p>
   * @public
   */
  DisplayData?: DisplayData | undefined;

  /**
   * <p>A structure that describes the application provider's resource server.</p>
   * @public
   */
  ResourceServerConfig?: ResourceServerConfig | undefined;
}

/**
 * <p>Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.</p>
 * @public
 */
export interface CustomerManagedPolicyReference {
  /**
   * <p>The name of the IAM policy that you have configured in each account where you want to deploy your permission set.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The path to the IAM policy that you have configured in each account where you want to deploy your permission set. The default is <code>/</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  Path?: string | undefined;
}

/**
 * @public
 */
export interface AttachCustomerManagedPolicyReferenceToPermissionSetRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the <code>PermissionSet</code>.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.</p>
   * @public
   */
  CustomerManagedPolicyReference: CustomerManagedPolicyReference | undefined;
}

/**
 * @public
 */
export interface AttachCustomerManagedPolicyReferenceToPermissionSetResponse {}

/**
 * <p>Indicates that the principal has crossed the permitted number of resources that can be created.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>A structure that stores a list of managed policy ARNs that describe the associated Amazon Web Services managed policy.</p>
 * @public
 */
export interface AttachedManagedPolicy {
  /**
   * <p>The name of the Amazon Web Services managed policy.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the Amazon Web Services managed policy. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface AttachManagedPolicyToPermissionSetRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the <a>PermissionSet</a> that the managed policy should be attached to.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>The Amazon Web Services managed policy ARN to be attached to a permission set.</p>
   * @public
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>TargetID is an Amazon Web Services account identifier, (For example, 123456789012).</p>
   * @public
   */
  TargetId: string | undefined;

  /**
   * <p>The entity type for which the assignment will be created.</p>
   * @public
   */
  TargetType: TargetType | undefined;

  /**
   * <p>The ARN of the permission set that the admin wants to grant the principal access to.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>The entity type for which the assignment will be created.</p>
   * @public
   */
  PrincipalType: PrincipalType | undefined;

  /**
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   * @public
   */
  PrincipalId: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountAssignmentResponse {
  /**
   * <p>The status object for the account assignment creation operation.</p>
   * @public
   */
  AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus | undefined;
}

/**
 * <p>A set of key-value pairs that are used to manage the resource. Tags can only be applied to permission sets and cannot be applied to corresponding roles that IAM Identity Center creates in Amazon Web Services accounts.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key for the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the application provider under which the operation will run.</p>
   * @public
   */
  ApplicationProviderArn: string | undefined;

  /**
   * <p>The name of the .</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the .</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A structure that describes the options for the portal associated with an application.</p>
   * @public
   */
  PortalOptions?: PortalOptions | undefined;

  /**
   * <p>Specifies tags to be attached to the application.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies whether the application is enabled or disabled.</p>
   * @public
   */
  Status?: ApplicationStatus | undefined;

  /**
   * <p>Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>Specifies the ARN of the application.</p>
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationAssignmentRequest {
  /**
   * <p>The ARN of the application for which the assignment is created.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   * @public
   */
  PrincipalId: string | undefined;

  /**
   * <p>The entity type for which the assignment will be created.</p>
   * @public
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
   * <p>The name of the instance of IAM Identity Center.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Specifies tags to be attached to the instance of IAM Identity Center.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceResponse {
  /**
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run. </p> <p>For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn?: string | undefined;
}

/**
 * <p>Specifies the attributes to add to your attribute-based access control (ABAC) configuration.</p>
 * @public
 */
export interface InstanceAccessControlAttributeConfiguration {
  /**
   * <p>Lists the attributes that are configured for ABAC in the specified IAM Identity Center instance.</p>
   * @public
   */
  AccessControlAttributes: AccessControlAttribute[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceAccessControlAttributeConfigurationRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>Specifies the IAM Identity Center identity store attributes to add to your ABAC configuration. When using an external identity provider as an identity source, you can pass attributes through the SAML assertion. Doing so provides an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center will replace the attribute value with the value from the IAM Identity Center identity store.</p>
   * @public
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
   * <p>The name of the <a>PermissionSet</a>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the <a>PermissionSet</a>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The length of time that the application user sessions are valid in the ISO-8601 standard.</p>
   * @public
   */
  SessionDuration?: string | undefined;

  /**
   * <p>Used to redirect users within the application during the federation authentication process.</p>
   * @public
   */
  RelayState?: string | undefined;

  /**
   * <p>The tags to attach to the new <a>PermissionSet</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>An entity that contains IAM policies.</p>
 * @public
 */
export interface PermissionSet {
  /**
   * <p>The name of the permission set.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the permission set. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PermissionSetArn?: string | undefined;

  /**
   * <p>The description of the <a>PermissionSet</a>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date that the permission set was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The length of time that the application user sessions are valid for in the ISO-8601 standard.</p>
   * @public
   */
  SessionDuration?: string | undefined;

  /**
   * <p>Used to redirect users within the application during the federation authentication process.</p>
   * @public
   */
  RelayState?: string | undefined;
}

/**
 * @public
 */
export interface CreatePermissionSetResponse {
  /**
   * <p>Defines the level of access on an Amazon Web Services account.</p>
   * @public
   */
  PermissionSet?: PermissionSet | undefined;
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
 * <p>A structure that describes configuration settings for a trusted token issuer that supports OpenID Connect (OIDC) and JSON Web Tokens (JWTs).</p>
 * @public
 */
export interface OidcJwtConfiguration {
  /**
   * <p>The URL that IAM Identity Center uses for OpenID Discovery. OpenID Discovery is used to obtain the information required to verify the tokens that the trusted token issuer generates.</p>
   * @public
   */
  IssuerUrl: string | undefined;

  /**
   * <p>The path of the source attribute in the JWT from the trusted token issuer. The attribute mapped by this JMESPath expression is compared against the attribute mapped by <code>IdentityStoreAttributePath</code> when a trusted token issuer token is exchanged for an IAM Identity Center token.</p>
   * @public
   */
  ClaimAttributePath: string | undefined;

  /**
   * <p>The path of the destination attribute in a JWT from IAM Identity Center. The attribute mapped by this JMESPath expression is compared against the attribute mapped by <code>ClaimAttributePath</code> when a trusted token issuer token is exchanged for an IAM Identity Center token. </p>
   * @public
   */
  IdentityStoreAttributePath: string | undefined;

  /**
   * <p>The method that the trusted token issuer can use to retrieve the JSON Web Key Set used to verify a JWT.</p>
   * @public
   */
  JwksRetrievalOption: JwksRetrievalOption | undefined;
}

/**
 * <p>A structure that describes the configuration of a trusted token issuer. The structure and available settings are determined by the type of the trusted token issuer.</p>
 * @public
 */
export type TrustedTokenIssuerConfiguration =
  | TrustedTokenIssuerConfiguration.OidcJwtConfigurationMember
  | TrustedTokenIssuerConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace TrustedTokenIssuerConfiguration {
  /**
   * <p>A structure that describes the settings for a trusted token issuer that works with OpenID Connect (OIDC) by using JSON Web Tokens (JWT).</p>
   * @public
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
   * <p>Specifies the ARN of the instance of IAM Identity Center to contain the new trusted token issuer configuration.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>Specifies the name of the new trusted token issuer configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the type of the new trusted token issuer.</p>
   * @public
   */
  TrustedTokenIssuerType: TrustedTokenIssuerType | undefined;

  /**
   * <p>Specifies settings that apply to the new trusted token issuer configuration. The settings that are available depend on what <code>TrustedTokenIssuerType</code> you specify.</p>
   * @public
   */
  TrustedTokenIssuerConfiguration: TrustedTokenIssuerConfiguration | undefined;

  /**
   * <p>Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Specifies tags to be attached to the new trusted token issuer configuration.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrustedTokenIssuerResponse {
  /**
   * <p>The ARN of the new trusted token issuer configuration.</p>
   * @public
   */
  TrustedTokenIssuerArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountAssignmentRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>TargetID is an Amazon Web Services account identifier, (For example, 123456789012).</p>
   * @public
   */
  TargetId: string | undefined;

  /**
   * <p>The entity type for which the assignment will be deleted.</p>
   * @public
   */
  TargetType: TargetType | undefined;

  /**
   * <p>The ARN of the permission set that will be used to remove access.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>The entity type for which the assignment will be deleted.</p>
   * @public
   */
  PrincipalType: PrincipalType | undefined;

  /**
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   * @public
   */
  PrincipalId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountAssignmentResponse {
  /**
   * <p>The status object for the account assignment deletion operation.</p>
   * @public
   */
  AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>. </p>
   * @public
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
   * <p>Specifies the ARN of the application.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   * @public
   */
  PrincipalId: string | undefined;

  /**
   * <p>The entity type for which the assignment will be deleted.</p>
   * @public
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the permission set that will be used to remove access.</p>
   * @public
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
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run.</p>
   * @public
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.</p>
   * @public
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the <code>PermissionSet</code>.</p>
   * @public
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the permission set that should be deleted.</p>
   * @public
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
   * <p>Specifies the ARN of the trusted token issuer configuration to delete.</p>
   * @public
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The identifier that is used to track the request operation progress.</p>
   * @public
   */
  AccountAssignmentCreationRequestId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAssignmentCreationStatusResponse {
  /**
   * <p>The status object for the account assignment creation operation.</p>
   * @public
   */
  AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAssignmentDeletionStatusRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The identifier that is used to track the request operation progress.</p>
   * @public
   */
  AccountAssignmentDeletionRequestId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAssignmentDeletionStatusResponse {
  /**
   * <p>The status object for the account assignment deletion operation.</p>
   * @public
   */
  AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationRequest {
  /**
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * <p>Specifies the ARN of the application.</p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The ARN of the application provider under which the operation will run.</p>
   * @public
   */
  ApplicationProviderArn?: string | undefined;

  /**
   * <p>The application name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The account ID.</p>
   * @public
   */
  ApplicationAccount?: string | undefined;

  /**
   * <p>The ARN of the IAM Identity Center application under which the operation will run. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>Specifies whether the application is enabled or disabled.</p>
   * @public
   */
  Status?: ApplicationStatus | undefined;

  /**
   * <p>A structure that describes the options for the portal associated with an application.</p>
   * @public
   */
  PortalOptions?: PortalOptions | undefined;

  /**
   * <p>The description of the .</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date the application was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationAssignmentRequest {
  /**
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   * @public
   */
  PrincipalId: string | undefined;

  /**
   * <p>The entity type for which the assignment will be created.</p>
   * @public
   */
  PrincipalType: PrincipalType | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationAssignmentResponse {
  /**
   * <p>The entity type for which the assignment will be created.</p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * <p>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationProviderRequest {
  /**
   * <p>Specifies the ARN of the application provider for which you want details.</p>
   * @public
   */
  ApplicationProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationProviderResponse {
  /**
   * <p>The ARN of the application provider.</p>
   * @public
   */
  ApplicationProviderArn: string | undefined;

  /**
   * <p>The protocol used to federate to the application provider.</p>
   * @public
   */
  FederationProtocol?: FederationProtocol | undefined;

  /**
   * <p>A structure with details about the display data for the application provider.</p>
   * @public
   */
  DisplayData?: DisplayData | undefined;

  /**
   * <p>A structure with details about the receiving application.</p>
   * @public
   */
  ResourceServerConfig?: ResourceServerConfig | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceRequest {
  /**
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run.</p>
   * @public
   */
  InstanceArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const KmsKeyStatus = {
  ENABLED: "ENABLED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type KmsKeyStatus = (typeof KmsKeyStatus)[keyof typeof KmsKeyStatus];

/**
 * @public
 * @enum
 */
export const KmsKeyType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KEY: "CUSTOMER_MANAGED_KEY",
} as const;

/**
 * @public
 */
export type KmsKeyType = (typeof KmsKeyType)[keyof typeof KmsKeyType];

/**
 * <p>The encryption configuration of your IAM Identity Center instance, including the key type, KMS key ARN, and current encryption status. </p>
 * @public
 */
export interface EncryptionConfigurationDetails {
  /**
   * <p>The type of KMS key used for encryption.</p>
   * @public
   */
  KeyType?: KmsKeyType | undefined;

  /**
   * <p>The ARN of the KMS key currently used to encrypt data in your IAM Identity Center instance. </p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The current status of encryption configuration.</p>
   * @public
   */
  EncryptionStatus?: KmsKeyStatus | undefined;

  /**
   * <p>Provides additional context about the current encryption status. This field is particularly useful when the encryption status is UPDATE_FAILED. When encryption configuration update fails, this field contains information about the cause, which may include KMS key access issues, key not found errors, invalid key configuration, key in an invalid state, or a disabled key. </p>
   * @public
   */
  EncryptionStatusReason?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
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
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The identifier of the identity store that is connected to the instance of IAM Identity Center.</p>
   * @public
   */
  IdentityStoreId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account for which the instance was created.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>Specifies the instance name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The date the instance was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The status of the instance. </p>
   * @public
   */
  Status?: InstanceStatus | undefined;

  /**
   * <p>Provides additional context about the current status of the IAM Identity Center instance. This field is particularly useful when an instance is in a non-ACTIVE state, such as CREATE_FAILED. When an instance fails to create or update, this field contains information about the cause, which may include issues with KMS key configuration, permission problems with the specified KMS key, or service-related errors. </p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>Contains the encryption configuration for your IAM Identity Center instance, including the encryption status, KMS key type, and KMS key ARN.</p>
   * @public
   */
  EncryptionConfigurationDetails?: EncryptionConfigurationDetails | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceAccessControlAttributeConfigurationRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.</p>
   * @public
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
   * <p>The status of the attribute configuration process.</p>
   * @public
   */
  Status?: InstanceAccessControlAttributeConfigurationStatus | undefined;

  /**
   * <p>Provides more details about the current status of the specified attribute.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>Gets the list of IAM Identity Center identity store attributes that have been added to your ABAC configuration.</p>
   * @public
   */
  InstanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribePermissionSetRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the permission set. </p>
   * @public
   */
  PermissionSetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribePermissionSetResponse {
  /**
   * <p>Describes the level of access on an Amazon Web Services account.</p>
   * @public
   */
  PermissionSet?: PermissionSet | undefined;
}

/**
 * @public
 */
export interface DescribePermissionSetProvisioningStatusRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The identifier that is provided by the <a>ProvisionPermissionSet</a> call to retrieve the current status of the provisioning workflow.</p>
   * @public
   */
  ProvisionPermissionSetRequestId: string | undefined;
}

/**
 * <p>A structure that is used to provide the status of the provisioning operation for a specified permission set.</p>
 * @public
 */
export interface PermissionSetProvisioningStatus {
  /**
   * <p>The status of the permission set provisioning process.</p>
   * @public
   */
  Status?: StatusValues | undefined;

  /**
   * <p>The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account from which to list the assignments.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ARN of the permission set that is being provisioned. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PermissionSetArn?: string | undefined;

  /**
   * <p>The message that contains an error or exception in case of an operation failure.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The date that the permission set was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePermissionSetProvisioningStatusResponse {
  /**
   * <p>The status object for the permission set provisioning operation.</p>
   * @public
   */
  PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus | undefined;
}

/**
 * @public
 */
export interface DescribeTrustedTokenIssuerRequest {
  /**
   * <p>Specifies the ARN of the trusted token issuer configuration that you want details about.</p>
   * @public
   */
  TrustedTokenIssuerArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrustedTokenIssuerResponse {
  /**
   * <p>The ARN of the trusted token issuer configuration.</p>
   * @public
   */
  TrustedTokenIssuerArn?: string | undefined;

  /**
   * <p>The name of the trusted token issuer configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the trusted token issuer.</p>
   * @public
   */
  TrustedTokenIssuerType?: TrustedTokenIssuerType | undefined;

  /**
   * <p>A structure the describes the settings that apply of this trusted token issuer.</p>
   * @public
   */
  TrustedTokenIssuerConfiguration?: TrustedTokenIssuerConfiguration | undefined;
}

/**
 * @public
 */
export interface DetachCustomerManagedPolicyReferenceFromPermissionSetRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the <code>PermissionSet</code>.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.</p>
   * @public
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the <a>PermissionSet</a> from which the policy should be detached.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>The Amazon Web Services managed policy ARN to be detached from a permission set.</p>
   * @public
   */
  ManagedPolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DetachManagedPolicyFromPermissionSetResponse {}

/**
 * <p> A structure that specifies the KMS key type and KMS key ARN used to encrypt data in your IAM Identity Center instance.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>The type of KMS key used for encryption.</p>
   * @public
   */
  KeyType: KmsKeyType | undefined;

  /**
   * <p>The ARN of the KMS key used to encrypt data. Required when KeyType is CUSTOMER_MANAGED_KEY. Cannot be specified when KeyType is AWS_OWNED_KMS_KEY.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationAssignmentConfigurationRequest {
  /**
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationAssignmentConfigurationResponse {
  /**
   * <p>If <code>AssignmentsRequired</code> is <code>true</code> (default value), users don’t have access to the application unless an assignment is created using the <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html">CreateApplicationAssignment API</a>. If <code>false</code>, all users have access to the application. </p>
   * @public
   */
  AssignmentRequired: boolean | undefined;
}

/**
 * @public
 */
export interface GetApplicationSessionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application for which to retrieve the session configuration.</p>
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UserBackgroundSessionApplicationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type UserBackgroundSessionApplicationStatus =
  (typeof UserBackgroundSessionApplicationStatus)[keyof typeof UserBackgroundSessionApplicationStatus];

/**
 * @public
 */
export interface GetApplicationSessionConfigurationResponse {
  /**
   * <p>The status of user background sessions for the application. </p>
   * @public
   */
  UserBackgroundSessionApplicationStatus?: UserBackgroundSessionApplicationStatus | undefined;
}

/**
 * @public
 */
export interface GetInlinePolicyForPermissionSetRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the permission set.</p>
   * @public
   */
  PermissionSetArn: string | undefined;
}

/**
 * @public
 */
export interface GetInlinePolicyForPermissionSetResponse {
  /**
   * <p>The inline policy that is attached to the permission set.</p> <note> <p>For <code>Length Constraints</code>, if a valid ARN is provided for a permission set, it is possible for an empty inline policy to be returned.</p> </note>
   * @public
   */
  InlinePolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetPermissionsBoundaryForPermissionSetRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the <code>PermissionSet</code>.</p>
   * @public
   */
  PermissionSetArn: string | undefined;
}

/**
 * <p>Specifies the configuration of the Amazon Web Services managed or customer managed policy that you want to set as a permissions boundary. Specify either <code>CustomerManagedPolicyReference</code> to use the name and path of a customer managed policy, or <code>ManagedPolicyArn</code> to use the ARN of an Amazon Web Services managed policy. A permissions boundary represents the maximum permissions that any policy can grant your role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM entities</a> in the <i>IAM User Guide</i>.</p> <important> <p>Policies used as permissions boundaries don't provide permissions. You must also attach an IAM policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the <i>IAM User Guide</i>.</p> </important>
 * @public
 */
export interface PermissionsBoundary {
  /**
   * <p>Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.</p>
   * @public
   */
  CustomerManagedPolicyReference?: CustomerManagedPolicyReference | undefined;

  /**
   * <p>The Amazon Web Services managed policy ARN that you want to attach to a permission set as a permissions boundary.</p>
   * @public
   */
  ManagedPolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetPermissionsBoundaryForPermissionSetResponse {
  /**
   * <p>The permissions boundary attached to the specified permission set.</p>
   * @public
   */
  PermissionsBoundary?: PermissionsBoundary | undefined;
}

/**
 * <p>Provides information about the IAM Identity Center instance.</p>
 * @public
 */
export interface InstanceMetadata {
  /**
   * <p>The ARN of the Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The identifier of the identity store that is connected to the Identity Center instance.</p>
   * @public
   */
  IdentityStoreId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID number of the owner of the Identity Center instance.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The name of the Identity Center instance.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The date and time that the Identity Center instance was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The current status of this Identity Center instance.</p>
   * @public
   */
  Status?: InstanceStatus | undefined;

  /**
   * <p>Provides additional context about the current status of the IAM Identity Center instance. This field is particularly useful when an instance is in a non-ACTIVE state, such as CREATE_FAILED. When an instance creation fails, this field contains information about the cause, which may include issues with KMS key configuration or insufficient permissions. </p>
   * @public
   */
  StatusReason?: string | undefined;
}

/**
 * <p>Filters the operation status list based on the passed attribute value.</p>
 * @public
 */
export interface OperationStatusFilter {
  /**
   * <p>Filters the list operations result based on the status attribute.</p>
   * @public
   */
  Status?: StatusValues | undefined;
}

/**
 * @public
 */
export interface ListAccountAssignmentCreationStatusRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The maximum number of results to display for the assignment.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filters results based on the passed attribute value.</p>
   * @public
   */
  Filter?: OperationStatusFilter | undefined;
}

/**
 * @public
 */
export interface ListAccountAssignmentCreationStatusResponse {
  /**
   * <p>The status object for the account assignment creation operation.</p>
   * @public
   */
  AccountAssignmentsCreationStatus?: AccountAssignmentOperationStatusMetadata[] | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountAssignmentDeletionStatusRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The maximum number of results to display for the assignment.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filters results based on the passed attribute value.</p>
   * @public
   */
  Filter?: OperationStatusFilter | undefined;
}

/**
 * @public
 */
export interface ListAccountAssignmentDeletionStatusResponse {
  /**
   * <p>The status object for the account assignment deletion operation.</p>
   * @public
   */
  AccountAssignmentsDeletionStatus?: AccountAssignmentOperationStatusMetadata[] | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountAssignmentsRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account from which to list the assignments.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The ARN of the permission set from which to list assignments.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>The maximum number of results to display for the assignment.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountAssignmentsResponse {
  /**
   * <p>The list of assignments that match the input Amazon Web Services account and permission set.</p>
   * @public
   */
  AccountAssignments?: AccountAssignment[] | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure that describes a filter for account assignments.</p>
 * @public
 */
export interface ListAccountAssignmentsFilter {
  /**
   * <p>The ID number of an Amazon Web Services account that filters the results in the response.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountAssignmentsForPrincipalRequest {
  /**
   * <p>Specifies the ARN of the instance of IAM Identity Center that contains the principal.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>Specifies the principal for which you want to retrieve the list of account assignments.</p>
   * @public
   */
  PrincipalId: string | undefined;

  /**
   * <p>Specifies the type of the principal.</p>
   * @public
   */
  PrincipalType: PrincipalType | undefined;

  /**
   * <p>Specifies an Amazon Web Services account ID number. Results are filtered to only those that match this ID number.</p>
   * @public
   */
  Filter?: ListAccountAssignmentsFilter | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountAssignmentsForPrincipalResponse {
  /**
   * <p>An array list of the account assignments for the principal.</p>
   * @public
   */
  AccountAssignments?: AccountAssignmentForPrincipal[] | undefined;

  /**
   * <p>If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the <a>PermissionSet</a> from which the associated Amazon Web Services accounts will be listed.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>The permission set provisioning status for an Amazon Web Services account.</p>
   * @public
   */
  ProvisioningStatus?: ProvisioningStatus | undefined;

  /**
   * <p>The maximum number of results to display for the <a>PermissionSet</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountsForProvisionedPermissionSetResponse {
  /**
   * <p>The list of Amazon Web Services <code>AccountIds</code>.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationAssignmentsRequest {
  /**
   * <p>Specifies the ARN of the application.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationAssignmentsResponse {
  /**
   * <p>The list of users assigned to an application.</p>
   * @public
   */
  ApplicationAssignments?: ApplicationAssignment[] | undefined;

  /**
   * <p>If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure that describes a filter for application assignments.</p>
 * @public
 */
export interface ListApplicationAssignmentsFilter {
  /**
   * <p>The ARN of an application.</p>
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationAssignmentsForPrincipalRequest {
  /**
   * <p>Specifies the instance of IAM Identity Center that contains principal and applications.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>Specifies the unique identifier of the principal for which you want to retrieve its assignments.</p>
   * @public
   */
  PrincipalId: string | undefined;

  /**
   * <p>Specifies the type of the principal for which you want to retrieve its assignments.</p>
   * @public
   */
  PrincipalType: PrincipalType | undefined;

  /**
   * <p>Filters the output to include only assignments associated with the application that has the specified ARN.</p>
   * @public
   */
  Filter?: ListApplicationAssignmentsFilter | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApplicationAssignmentsForPrincipalResponse {
  /**
   * <p>An array list of the application assignments for the specified principal.</p>
   * @public
   */
  ApplicationAssignments?: ApplicationAssignmentForPrincipal[] | undefined;

  /**
   * <p>If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationProvidersRequest {
  /**
   * <p>Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationProvidersResponse {
  /**
   * <p>An array list of structures that describe application providers.</p>
   * @public
   */
  ApplicationProviders?: ApplicationProvider[] | undefined;

  /**
   * <p>If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure that describes a filter for applications.</p>
 * @public
 */
export interface ListApplicationsFilter {
  /**
   * <p>An Amazon Web Services account ID number that filters the results in the response.</p>
   * @public
   */
  ApplicationAccount?: string | undefined;

  /**
   * <p>The ARN of an application provider that can filter the results in the response.</p>
   * @public
   */
  ApplicationProvider?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>The ARN of the IAM Identity Center application under which the operation will run. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filters response results. </p>
   * @public
   */
  Filter?: ListApplicationsFilter | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>Retrieves all applications associated with the instance.</p>
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * <p>If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomerManagedPolicyReferencesInPermissionSetRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the <code>PermissionSet</code>. </p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>The maximum number of results to display for the list call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomerManagedPolicyReferencesInPermissionSetResponse {
  /**
   * <p>Specifies the names and paths of the customer managed policies that you have attached to your permission set.</p>
   * @public
   */
  CustomerManagedPolicyReferences?: CustomerManagedPolicyReference[] | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * <p>The maximum number of results to display for the instance.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * <p>Lists the IAM Identity Center instances that the caller has access to.</p>
   * @public
   */
  Instances?: InstanceMetadata[] | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedPoliciesInPermissionSetRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the <a>PermissionSet</a> whose managed policies will be listed.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>The maximum number of results to display for the <a>PermissionSet</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedPoliciesInPermissionSetResponse {
  /**
   * <p>An array of the <a>AttachedManagedPolicy</a> data type object.</p>
   * @public
   */
  AttachedManagedPolicies?: AttachedManagedPolicy[] | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionSetProvisioningStatusRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The maximum number of results to display for the assignment.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filters results based on the passed attribute value.</p>
   * @public
   */
  Filter?: OperationStatusFilter | undefined;
}

/**
 * <p>Provides information about the permission set provisioning status.</p>
 * @public
 */
export interface PermissionSetProvisioningStatusMetadata {
  /**
   * <p>The status of the permission set provisioning process.</p>
   * @public
   */
  Status?: StatusValues | undefined;

  /**
   * <p>The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The date that the permission set was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListPermissionSetProvisioningStatusResponse {
  /**
   * <p>The status object for the permission set provisioning operation.</p>
   * @public
   */
  PermissionSetsProvisioningStatus?: PermissionSetProvisioningStatusMetadata[] | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionSetsRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to display for the assignment.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPermissionSetsResponse {
  /**
   * <p>Defines the level of access on an Amazon Web Services account.</p>
   * @public
   */
  PermissionSets?: string[] | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionSetsProvisionedToAccountRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account from which to list the assignments.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The status object for the permission set provisioning operation.</p>
   * @public
   */
  ProvisioningStatus?: ProvisioningStatus | undefined;

  /**
   * <p>The maximum number of results to display for the assignment.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionSetsProvisionedToAccountResponse {
  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Defines the level of access that an Amazon Web Services account has.</p>
   * @public
   */
  PermissionSets?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The ARN of the resource with the tags to be listed.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A set of key-value pairs that are used to manage the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrustedTokenIssuersRequest {
  /**
   * <p>Specifies the ARN of the instance of IAM Identity Center with the trusted token issuer configurations that you want to list.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure that describes a trusted token issuer.</p>
 * @public
 */
export interface TrustedTokenIssuerMetadata {
  /**
   * <p>The ARN of the trusted token issuer configuration in the instance of IAM Identity Center.</p>
   * @public
   */
  TrustedTokenIssuerArn?: string | undefined;

  /**
   * <p>The name of the trusted token issuer configuration in the instance of IAM Identity Center.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of trusted token issuer.</p>
   * @public
   */
  TrustedTokenIssuerType?: TrustedTokenIssuerType | undefined;
}

/**
 * @public
 */
export interface ListTrustedTokenIssuersResponse {
  /**
   * <p>An array list of the trusted token issuer configurations.</p>
   * @public
   */
  TrustedTokenIssuers?: TrustedTokenIssuerMetadata[] | undefined;

  /**
   * <p>If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure that describes updated configuration settings for a trusted token issuer that supports OpenID Connect (OIDC) and JSON Web Tokens (JWTs).</p>
 * @public
 */
export interface OidcJwtUpdateConfiguration {
  /**
   * <p>The path of the source attribute in the JWT from the trusted token issuer. The attribute mapped by this JMESPath expression is compared against the attribute mapped by <code>IdentityStoreAttributePath</code> when a trusted token issuer token is exchanged for an IAM Identity Center token.</p>
   * @public
   */
  ClaimAttributePath?: string | undefined;

  /**
   * <p>The path of the destination attribute in a JWT from IAM Identity Center. The attribute mapped by this JMESPath expression is compared against the attribute mapped by <code>ClaimAttributePath</code> when a trusted token issuer token is exchanged for an IAM Identity Center token.</p>
   * @public
   */
  IdentityStoreAttributePath?: string | undefined;

  /**
   * <p>The method that the trusted token issuer can use to retrieve the JSON Web Key Set used to verify a JWT.</p>
   * @public
   */
  JwksRetrievalOption?: JwksRetrievalOption | undefined;
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the permission set.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>TargetID is an Amazon Web Services account identifier, (For example, 123456789012).</p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>The entity type for which the assignment will be created.</p>
   * @public
   */
  TargetType: ProvisionTargetType | undefined;
}

/**
 * @public
 */
export interface ProvisionPermissionSetResponse {
  /**
   * <p>The status object for the permission set provisioning operation.</p>
   * @public
   */
  PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus | undefined;
}

/**
 * @public
 */
export interface PutApplicationAssignmentConfigurationRequest {
  /**
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>If <code>AssignmentsRequired</code> is <code>true</code> (default value), users don’t have access to the application unless an assignment is created using the <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html">CreateApplicationAssignment API</a>. If <code>false</code>, all users have access to the application. </p>
   * @public
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
export interface PutApplicationSessionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application for which to update the session configuration.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>The status of user background sessions for the application.</p>
   * @public
   */
  UserBackgroundSessionApplicationStatus?: UserBackgroundSessionApplicationStatus | undefined;
}

/**
 * @public
 */
export interface PutApplicationSessionConfigurationResponse {}

/**
 * @public
 */
export interface PutInlinePolicyToPermissionSetRequest {
  /**
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the permission set.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>The inline policy to attach to a <a>PermissionSet</a>.</p>
   * @public
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. </p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the <code>PermissionSet</code>.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>The permissions boundary that you want to attach to a <code>PermissionSet</code>.</p>
   * @public
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The ARN of the resource with the tags to be listed.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A set of key-value pairs that are used to manage the resource.</p>
   * @public
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The ARN of the resource with the tags to be listed.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of tags that are attached to the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>A structure that describes the options for the access portal associated with an application that can be updated.</p>
 * @public
 */
export interface UpdateApplicationPortalOptions {
  /**
   * <p>A structure that describes the sign-in options for an application portal.</p>
   * @public
   */
  SignInOptions?: SignInOptions | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>Specifies the ARN of the application. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * <p>Specifies the updated name for the application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the .</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies whether the application is enabled or disabled.</p>
   * @public
   */
  Status?: ApplicationStatus | undefined;

  /**
   * <p>A structure that describes the options for the portal associated with an application.</p>
   * @public
   */
  PortalOptions?: UpdateApplicationPortalOptions | undefined;
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
   * <p>Updates the instance name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the instance of IAM Identity Center under which the operation will run. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>Specifies the encryption configuration for your IAM Identity Center instance. You can use this to configure customer managed KMS keys (CMK) or Amazon Web Services owned KMS keys for encrypting your instance data.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>Updates the attributes for your ABAC configuration.</p>
   * @public
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
   * <p>The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>The ARN of the permission set.</p>
   * @public
   */
  PermissionSetArn: string | undefined;

  /**
   * <p>The description of the <a>PermissionSet</a>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The length of time that the application user sessions are valid for in the ISO-8601 standard.</p>
   * @public
   */
  SessionDuration?: string | undefined;

  /**
   * <p>Used to redirect users within the application during the federation authentication process.</p>
   * @public
   */
  RelayState?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePermissionSetResponse {}

/**
 * <p>A structure that contains details to be updated for a trusted token issuer configuration. The structure and settings that you can include depend on the type of the trusted token issuer being updated.</p>
 * @public
 */
export type TrustedTokenIssuerUpdateConfiguration =
  | TrustedTokenIssuerUpdateConfiguration.OidcJwtConfigurationMember
  | TrustedTokenIssuerUpdateConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace TrustedTokenIssuerUpdateConfiguration {
  /**
   * <p>A structure that describes an updated configuration for a trusted token issuer that uses OpenID Connect (OIDC) with JSON web tokens (JWT).</p>
   * @public
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
   * <p>Specifies the ARN of the trusted token issuer configuration that you want to update.</p>
   * @public
   */
  TrustedTokenIssuerArn: string | undefined;

  /**
   * <p>Specifies the updated name to be applied to the trusted token issuer configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies a structure with settings to apply to the specified trusted token issuer. The settings that you can provide are determined by the type of the trusted token issuer that you are updating.</p>
   * @public
   */
  TrustedTokenIssuerConfiguration?: TrustedTokenIssuerUpdateConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateTrustedTokenIssuerResponse {}
