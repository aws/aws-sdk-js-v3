// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DirectoryServiceDataServiceException as __BaseException } from "./DirectoryServiceDataServiceException";

/**
 * @public
 * @enum
 */
export const AccessDeniedReason = {
  DATA_DISABLED: "DATA_DISABLED",
  DIRECTORY_AUTH: "DIRECTORY_AUTH",
  IAM_AUTH: "IAM_AUTH",
} as const;

/**
 * @public
 */
export type AccessDeniedReason = (typeof AccessDeniedReason)[keyof typeof AccessDeniedReason];

/**
 * <p> You don't have permission to perform the request or access the directory. It can also
 *       occur when the <code>DirectoryId</code> doesn't exist or the user, member, or group might be
 *       outside of your organizational unit (OU). </p>
 *          <p> Make sure that you have the authentication and authorization to perform the action.
 *       Review the directory information in the request, and make sure that the object isn't outside
 *       of your OU. </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p> Reason the request was unauthorized. </p>
   * @public
   */
  Reason?: AccessDeniedReason | undefined;
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
 */
export interface AddGroupMemberRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the group. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The name of the group. </p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p> The <code>SAMAccountName</code> of the user, group, or computer to add as a group member.
   *     </p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p> The domain name that's associated with the group member. This parameter is required only
   *       when adding a member outside of your Managed Microsoft AD domain to a group inside of your
   *       Managed Microsoft AD domain. This parameter defaults to the Managed Microsoft AD domain. </p>
   *          <note>
   *             <p> This parameter is case insensitive. </p>
   *          </note>
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * <p> A unique and case-sensitive identifier that you provide to make sure the idempotency of
   *       the request, so multiple identical calls have the same effect as one single call. </p>
   *          <p> A client token is valid for 8 hours after the first request that uses it completes. After
   *       8 hours, any request with the same client token is treated as a new request. If the request
   *       succeeds, any future uses of that token will be idempotent for another 8 hours. </p>
   *          <p> If you submit a request with the same client token but change one of the other parameters
   *       within the 8-hour idempotency window, Directory Service Data returns an <code>ConflictException</code>. </p>
   *          <note>
   *             <p> This parameter is optional when using the CLI or SDK. </p>
   *          </note>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AddGroupMemberResult {}

/**
 * <p> This error will occur when you try to create a resource that conflicts with an existing
 *       object. It can also occur when adding a member to a group that the member is already
 *       in.</p>
 *          <p> This error can be caused by a request sent within the 8-hour idempotency window with the
 *       same client token but different input parameters. Client tokens should not be re-used across
 *       different requests. After 8 hours, any request with the same client token is treated as a new
 *       request. </p>
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
 * @enum
 */
export const DirectoryUnavailableReason = {
  DIRECTORY_RESOURCES_EXCEEDED: "DIRECTORY_RESOURCES_EXCEEDED",
  DIRECTORY_TIMEOUT: "DIRECTORY_TIMEOUT",
  INVALID_DIRECTORY_STATE: "INVALID_DIRECTORY_STATE",
  NO_DISK_SPACE: "NO_DISK_SPACE",
  TRUST_AUTH_FAILURE: "TRUST_AUTH_FAILURE",
} as const;

/**
 * @public
 */
export type DirectoryUnavailableReason = (typeof DirectoryUnavailableReason)[keyof typeof DirectoryUnavailableReason];

/**
 * <p> The request could not be completed due to a problem in the configuration or current state
 *       of the specified directory. </p>
 * @public
 */
export class DirectoryUnavailableException extends __BaseException {
  readonly name: "DirectoryUnavailableException" = "DirectoryUnavailableException";
  readonly $fault: "client" = "client";
  $retryable = {};
  Message?: string | undefined;
  /**
   * <p> Reason the request failed for the specified directory. </p>
   * @public
   */
  Reason?: DirectoryUnavailableReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryUnavailableException, __BaseException>) {
    super({
      name: "DirectoryUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryUnavailableException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * <p> The operation didn't succeed because an internal error occurred. Try again later. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
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
 * <p> The resource couldn't be found. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p> The limit on the number of requests per second has been exceeded. </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  Message: string | undefined;
  /**
   * <p> The recommended amount of seconds to retry after a throttling exception. </p>
   * @public
   */
  RetryAfterSeconds?: number | undefined;
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
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  ATTRIBUTE_EXISTS: "ATTRIBUTE_EXISTS",
  DUPLICATE_ATTRIBUTE: "DUPLICATE_ATTRIBUTE",
  INVALID_ATTRIBUTE_FOR_GROUP: "INVALID_ATTRIBUTE_FOR_GROUP",
  INVALID_ATTRIBUTE_FOR_MODIFY: "INVALID_ATTRIBUTE_FOR_MODIFY",
  INVALID_ATTRIBUTE_FOR_SEARCH: "INVALID_ATTRIBUTE_FOR_SEARCH",
  INVALID_ATTRIBUTE_FOR_USER: "INVALID_ATTRIBUTE_FOR_USER",
  INVALID_ATTRIBUTE_NAME: "INVALID_ATTRIBUTE_NAME",
  INVALID_ATTRIBUTE_VALUE: "INVALID_ATTRIBUTE_VALUE",
  INVALID_DIRECTORY_TYPE: "INVALID_DIRECTORY_TYPE",
  INVALID_NEXT_TOKEN: "INVALID_NEXT_TOKEN",
  INVALID_REALM: "INVALID_REALM",
  INVALID_SECONDARY_REGION: "INVALID_SECONDARY_REGION",
  LDAP_SIZE_LIMIT_EXCEEDED: "LDAP_SIZE_LIMIT_EXCEEDED",
  LDAP_UNSUPPORTED_OPERATION: "LDAP_UNSUPPORTED_OPERATION",
  MISSING_ATTRIBUTE: "MISSING_ATTRIBUTE",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p> The request isn't valid. Review the details in the error message to update the invalid
 *       parameters or values in your request. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p> Reason the request failed validation. </p>
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
 * <p> The data type for an attribute. Each attribute value is described as a name-value pair.
 *       The name is the AD schema name, and the value is the data itself. For a list of supported
 *       attributes, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html">Directory Service Data Attributes</a>.
 *     </p>
 * @public
 */
export type AttributeValue =
  | AttributeValue.BOOLMember
  | AttributeValue.NMember
  | AttributeValue.SMember
  | AttributeValue.SSMember
  | AttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace AttributeValue {
  /**
   * <p> Indicates that the attribute type value is a string. For example: </p>
   *          <p>
   *             <code>"S": "S Group"</code>
   *          </p>
   * @public
   */
  export interface SMember {
    S: string;
    N?: never;
    BOOL?: never;
    SS?: never;
    $unknown?: never;
  }

  /**
   * <p> Indicates that the attribute type value is a number. For example: </p>
   *          <p>
   *             <code>"N": "16"</code>
   *          </p>
   * @public
   */
  export interface NMember {
    S?: never;
    N: number;
    BOOL?: never;
    SS?: never;
    $unknown?: never;
  }

  /**
   * <p> Indicates that the attribute type value is a boolean. For example: </p>
   *          <p>
   *             <code>"BOOL": true</code>
   *          </p>
   * @public
   */
  export interface BOOLMember {
    S?: never;
    N?: never;
    BOOL: boolean;
    SS?: never;
    $unknown?: never;
  }

  /**
   * <p> Indicates that the attribute type value is a string set. For example: </p>
   *          <p>
   *             <code>"SS": ["sample_service_class/host.sample.com:1234/sample_service_name_1",
   *         "sample_service_class/host.sample.com:1234/sample_service_name_2"]</code>
   *          </p>
   * @public
   */
  export interface SSMember {
    S?: never;
    N?: never;
    BOOL?: never;
    SS: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S?: never;
    N?: never;
    BOOL?: never;
    SS?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    S: (value: string) => T;
    N: (value: number) => T;
    BOOL: (value: boolean) => T;
    SS: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AttributeValue, visitor: Visitor<T>): T => {
    if (value.S !== undefined) return visitor.S(value.S);
    if (value.N !== undefined) return visitor.N(value.N);
    if (value.BOOL !== undefined) return visitor.BOOL(value.BOOL);
    if (value.SS !== undefined) return visitor.SS(value.SS);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const GroupScope = {
  BUILTIN_LOCAL: "BuiltinLocal",
  DOMAIN_LOCAL: "DomainLocal",
  GLOBAL: "Global",
  UNIVERSAL: "Universal",
} as const;

/**
 * @public
 */
export type GroupScope = (typeof GroupScope)[keyof typeof GroupScope];

/**
 * @public
 * @enum
 */
export const GroupType = {
  DISTRIBUTION: "Distribution",
  SECURITY: "Security",
} as const;

/**
 * @public
 */
export type GroupType = (typeof GroupType)[keyof typeof GroupType];

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the group. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The name of the group. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> The AD group type. For details, see <a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#how-active-directory-security-groups-work">Active Directory security group type</a>.</p>
   * @public
   */
  GroupType?: GroupType | undefined;

  /**
   * <p> The scope of the AD group. For details, see <a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#group-scope">Active Directory security group scope</a>. </p>
   * @public
   */
  GroupScope?: GroupScope | undefined;

  /**
   * <p> An expression that defines one or more attributes with the data type and value of each
   *       attribute. </p>
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;

  /**
   * <p> A unique and case-sensitive identifier that you provide to make sure the idempotency of
   *       the request, so multiple identical calls have the same effect as one single call. </p>
   *          <p> A client token is valid for 8 hours after the first request that uses it completes. After
   *       8 hours, any request with the same client token is treated as a new request. If the request
   *       succeeds, any future uses of that token will be idempotent for another 8 hours. </p>
   *          <p> If you submit a request with the same client token but change one of the other parameters
   *       within the 8-hour idempotency window, Directory Service Data returns an <code>ConflictException</code>. </p>
   *          <note>
   *             <p> This parameter is optional when using the CLI or SDK. </p>
   *          </note>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupResult {
  /**
   * <p> The identifier (ID) of the directory that's associated with the group. </p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p> The name of the group. </p>
   * @public
   */
  SAMAccountName?: string | undefined;

  /**
   * <p> The unique security identifier (SID) of the group. </p>
   * @public
   */
  SID?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p> The identifier (ID) of the directory that’s associated with the user. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The name of the user. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> The email address of the user. </p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p> The first name of the user. </p>
   * @public
   */
  GivenName?: string | undefined;

  /**
   * <p> The last name of the user. </p>
   * @public
   */
  Surname?: string | undefined;

  /**
   * <p> An expression that defines one or more attribute names with the data type and value of
   *       each attribute. A key is an attribute name, and the value is a list of maps. For a list of
   *       supported attributes, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html">Directory Service Data Attributes</a>. </p>
   *          <note>
   *             <p> Attribute names are case insensitive. </p>
   *          </note>
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;

  /**
   * <p> A unique and case-sensitive identifier that you provide to make sure the idempotency of
   *       the request, so multiple identical calls have the same effect as one single call. </p>
   *          <p> A client token is valid for 8 hours after the first request that uses it completes. After
   *       8 hours, any request with the same client token is treated as a new request. If the request
   *       succeeds, any future uses of that token will be idempotent for another 8 hours. </p>
   *          <p> If you submit a request with the same client token but change one of the other parameters
   *       within the 8-hour idempotency window, Directory Service Data returns an <code>ConflictException</code>. </p>
   *          <note>
   *             <p> This parameter is optional when using the CLI or SDK. </p>
   *          </note>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResult {
  /**
   * <p> The identifier (ID) of the directory where the address block is added. </p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p> The unique security identifier (SID) of the user. </p>
   * @public
   */
  SID?: string | undefined;

  /**
   * <p> The name of the user. </p>
   * @public
   */
  SAMAccountName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the group. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The name of the group. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> A unique and case-sensitive identifier that you provide to make sure the idempotency of
   *       the request, so multiple identical calls have the same effect as one single call. </p>
   *          <p> A client token is valid for 8 hours after the first request that uses it completes. After
   *       8 hours, any request with the same client token is treated as a new request. If the request
   *       succeeds, any future uses of that token will be idempotent for another 8 hours. </p>
   *          <p> If you submit a request with the same client token but change one of the other parameters
   *       within the 8-hour idempotency window, Directory Service Data returns an <code>ConflictException</code>. </p>
   *          <note>
   *             <p> This parameter is optional when using the CLI or SDK. </p>
   *          </note>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResult {}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the user. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The name of the user. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> A unique and case-sensitive identifier that you provide to make sure the idempotency of
   *       the request, so multiple identical calls have the same effect as one single call. </p>
   *          <p> A client token is valid for 8 hours after the first request that uses it completes. After
   *       8 hours, any request with the same client token is treated as a new request. If the request
   *       succeeds, any future uses of that token will be idempotent for another 8 hours. </p>
   *          <p> If you submit a request with the same client token but change one of the other parameters
   *       within the 8-hour idempotency window, Directory Service Data returns an <code>ConflictException</code>. </p>
   *          <note>
   *             <p> This parameter is optional when using the CLI or SDK. </p>
   *          </note>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResult {}

/**
 * @public
 */
export interface DescribeGroupRequest {
  /**
   * <p>The Identifier (ID) of the directory associated with the group.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The domain name that's associated with the group. </p>
   *          <note>
   *             <p> This parameter is optional, so you can return groups outside of your Managed Microsoft AD
   *         domain. When no value is defined, only your Managed Microsoft AD groups are returned. </p>
   *             <p> This value is case insensitive. </p>
   *          </note>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The name of the group. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> One or more attributes to be returned for the group. For a list of supported attributes,
   *       see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html">Directory Service Data Attributes</a>.
   *     </p>
   * @public
   */
  OtherAttributes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeGroupResult {
  /**
   * <p> The identifier (ID) of the directory that's associated with the group. </p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p> The domain name that's associated with the group. </p>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The unique security identifier (SID) of the group. </p>
   * @public
   */
  SID?: string | undefined;

  /**
   * <p> The name of the group. </p>
   * @public
   */
  SAMAccountName?: string | undefined;

  /**
   * <p> The <a href="https://learn.microsoft.com/en-us/windows/win32/ad/object-names-and-identities#distinguished-name">distinguished name</a> of the object. </p>
   * @public
   */
  DistinguishedName?: string | undefined;

  /**
   * <p> The AD group type. For details, see <a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#how-active-directory-security-groups-work">Active Directory security group type</a>. </p>
   * @public
   */
  GroupType?: GroupType | undefined;

  /**
   * <p> The scope of the AD group. For details, see <a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#group-scope">Active Directory security groups</a>. </p>
   * @public
   */
  GroupScope?: GroupScope | undefined;

  /**
   * <p> The attribute values that are returned for the attribute names that are included in the
   *       request. </p>
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the user. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The name of the user. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> One or more attribute names to be returned for the user. A key is an attribute name, and
   *       the value is a list of maps. For a list of supported attributes, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html">Directory Service Data Attributes</a>. </p>
   * @public
   */
  OtherAttributes?: string[] | undefined;

  /**
   * <p> The domain name that's associated with the user. </p>
   *          <note>
   *             <p> This parameter is optional, so you can return users outside your Managed Microsoft AD domain.
   *         When no value is defined, only your Managed Microsoft AD users are returned. </p>
   *             <p> This value is case insensitive. </p>
   *          </note>
   * @public
   */
  Realm?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserResult {
  /**
   * <p> The identifier (ID) of the directory that's associated with the user. </p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p> The domain name that's associated with the user. </p>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The unique security identifier (SID) of the user. </p>
   * @public
   */
  SID?: string | undefined;

  /**
   * <p> The name of the user. </p>
   * @public
   */
  SAMAccountName?: string | undefined;

  /**
   * <p> The <a href="https://learn.microsoft.com/en-us/windows/win32/ad/object-names-and-identities#distinguished-name">distinguished name</a> of the object. </p>
   * @public
   */
  DistinguishedName?: string | undefined;

  /**
   * <p> The UPN that is an Internet-style login name for a user and is based on the Internet
   *       standard <a href="https://datatracker.ietf.org/doc/html/rfc822">RFC 822</a>. The UPN is shorter
   *       than the distinguished name and easier to remember. </p>
   * @public
   */
  UserPrincipalName?: string | undefined;

  /**
   * <p> The email address of the user. </p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p> The first name of the user. </p>
   * @public
   */
  GivenName?: string | undefined;

  /**
   * <p> The last name of the user. </p>
   * @public
   */
  Surname?: string | undefined;

  /**
   * <p> Indicates whether the user account is active. </p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p> The attribute values that are returned for the attribute names that are included in the
   *       request. </p>
   *          <note>
   *             <p> Attribute names are case insensitive. </p>
   *          </note>
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;
}

/**
 * @public
 */
export interface DisableUserRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the user. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The name of the user. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> A unique and case-sensitive identifier that you provide to make sure the idempotency of
   *       the request, so multiple identical calls have the same effect as one single call. </p>
   *          <p> A client token is valid for 8 hours after the first request that uses it completes. After
   *       8 hours, any request with the same client token is treated as a new request. If the request
   *       succeeds, any future uses of that token will be idempotent for another 8 hours. </p>
   *          <p> If you submit a request with the same client token but change one of the other parameters
   *       within the 8-hour idempotency window, Directory Service Data returns an <code>ConflictException</code>. </p>
   *          <note>
   *             <p> This parameter is optional when using the CLI or SDK. </p>
   *          </note>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisableUserResult {}

/**
 * @public
 */
export interface ListGroupMembersRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the group. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The domain name that's associated with the group. </p>
   *          <note>
   *             <p> This parameter is optional, so you can return members from a group outside of your
   *         Managed Microsoft AD domain. When no value is defined, only members of your Managed Microsoft AD groups are
   *         returned. </p>
   *             <p> This value is case insensitive. </p>
   *          </note>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The domain name that's associated with the group member. This parameter defaults to the
   *       Managed Microsoft AD domain. </p>
   *          <note>
   *             <p> This parameter is optional and case insensitive. </p>
   *          </note>
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * <p> The name of the group. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p>An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to be returned per request. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const MemberType = {
  COMPUTER: "COMPUTER",
  GROUP: "GROUP",
  USER: "USER",
} as const;

/**
 * @public
 */
export type MemberType = (typeof MemberType)[keyof typeof MemberType];

/**
 * <p>A member object that contains identifying information for a specified member.</p>
 * @public
 */
export interface Member {
  /**
   * <p> The unique security identifier (SID) of the group member. </p>
   * @public
   */
  SID: string | undefined;

  /**
   * <p> The name of the group member. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> The AD type of the member object.</p>
   * @public
   */
  MemberType: MemberType | undefined;
}

/**
 * @public
 */
export interface ListGroupMembersResult {
  /**
   * <p>Identifier (ID) of the directory associated with the group.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p> The domain name that's associated with the group. </p>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The domain name that's associated with the member. </p>
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * <p> The member information that the request returns. </p>
   * @public
   */
  Members?: Member[] | undefined;

  /**
   * <p> An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the group. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The domain name associated with the directory. </p>
   *          <note>
   *             <p> This parameter is optional, so you can return groups outside of your Managed Microsoft AD
   *         domain. When no value is defined, only your Managed Microsoft AD groups are returned. </p>
   *             <p> This value is case insensitive. </p>
   *          </note>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to be returned per request. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A structure containing a subset of fields of a group object from a directory.</p>
 * @public
 */
export interface GroupSummary {
  /**
   * <p>The unique security identifier (SID) of the group.</p>
   * @public
   */
  SID: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p>The AD group type. For details, see <a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#how-active-directory-security-groups-work">Active Directory security group type</a>.</p>
   * @public
   */
  GroupType: GroupType | undefined;

  /**
   * <p>The scope of the AD group. For details, see <a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#group-scope">Active Directory security groups</a>.</p>
   * @public
   */
  GroupScope: GroupScope | undefined;
}

/**
 * @public
 */
export interface ListGroupsResult {
  /**
   * <p> The identifier (ID) of the directory that's associated with the group. </p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The domain name associated with the group.</p>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The group information that the request returns. </p>
   * @public
   */
  Groups?: GroupSummary[] | undefined;

  /**
   * <p> An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsForMemberRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the member. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The domain name that's associated with the group. </p>
   *          <note>
   *             <p> This parameter is optional, so you can return groups outside of your Managed Microsoft AD
   *         domain. When no value is defined, only your Managed Microsoft AD groups are returned. </p>
   *             <p> This value is case insensitive and defaults to your Managed Microsoft AD domain. </p>
   *          </note>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The domain name that's associated with the group member. </p>
   *          <note>
   *             <p> This parameter is optional, so you can limit your results to the group members in a
   *         specific domain. </p>
   *             <p> This parameter is case insensitive and defaults to <code>Realm</code>
   *             </p>
   *          </note>
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * <p> The <code>SAMAccountName</code> of the user, group, or computer that's a member of the
   *       group. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to be returned per request. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListGroupsForMemberResult {
  /**
   * <p> The identifier (ID) of the directory that's associated with the member. </p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p> The domain that's associated with the group. </p>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The domain that's associated with the member. </p>
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * <p> The group information that the request returns. </p>
   * @public
   */
  Groups?: GroupSummary[] | undefined;

  /**
   * <p> An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the user. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The domain name that's associated with the user. </p>
   *          <note>
   *             <p> This parameter is optional, so you can return users outside of your Managed Microsoft AD
   *         domain. When no value is defined, only your Managed Microsoft AD users are returned. </p>
   *             <p> This value is case insensitive. </p>
   *          </note>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to be returned per request. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A structure containing a subset of the fields of a user object from a directory.</p>
 * @public
 */
export interface UserSummary {
  /**
   * <p> The unique security identifier (SID) of the user.</p>
   * @public
   */
  SID: string | undefined;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p>The first name of the user. </p>
   * @public
   */
  GivenName?: string | undefined;

  /**
   * <p>The last name of the user.</p>
   * @public
   */
  Surname?: string | undefined;

  /**
   * <p>Indicates whether the user account is active.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 */
export interface ListUsersResult {
  /**
   * <p> The identifier (ID) of the directory that's associated with the user. </p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p> The domain that's associated with the user. </p>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The user information that the request returns. </p>
   * @public
   */
  Users?: UserSummary[] | undefined;

  /**
   * <p> An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RemoveGroupMemberRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the member. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The name of the group. </p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p> The <code>SAMAccountName</code> of the user, group, or computer to remove from the group.
   *     </p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p> The domain name that's associated with the group member. This parameter defaults to the
   *       Managed Microsoft AD domain. </p>
   *          <note>
   *             <p> This parameter is optional and case insensitive. </p>
   *          </note>
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * <p> A unique and case-sensitive identifier that you provide to make sure the idempotency of
   *       the request, so multiple identical calls have the same effect as one single call. </p>
   *          <p> A client token is valid for 8 hours after the first request that uses it completes. After
   *       8 hours, any request with the same client token is treated as a new request. If the request
   *       succeeds, any future uses of that token will be idempotent for another 8 hours. </p>
   *          <p> If you submit a request with the same client token but change one of the other parameters
   *       within the 8-hour idempotency window, Directory Service Data returns an <code>ConflictException</code>. </p>
   *          <note>
   *             <p> This parameter is optional when using the CLI or SDK. </p>
   *          </note>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RemoveGroupMemberResult {}

/**
 * @public
 */
export interface SearchGroupsRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the group. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The attribute value that you want to search for. </p>
   *          <note>
   *             <p> Wildcard <code>(*)</code> searches aren't supported. For a list of supported
   *         attributes, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html">Directory Service Data
   *           Attributes</a>. </p>
   *          </note>
   * @public
   */
  SearchString: string | undefined;

  /**
   * <p> One or more data attributes that are used to search for a group. For a list of supported
   *       attributes, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html">Directory Service Data Attributes</a>.
   *     </p>
   * @public
   */
  SearchAttributes: string[] | undefined;

  /**
   * <p> The domain name that's associated with the group. </p>
   *          <note>
   *             <p> This parameter is optional, so you can return groups outside of your Managed Microsoft AD
   *         domain. When no value is defined, only your Managed Microsoft AD groups are returned. </p>
   *             <p> This value is case insensitive. </p>
   *          </note>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to be returned per request. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p> A group object that contains identifying information and attributes for a specified
 *       group. </p>
 * @public
 */
export interface Group {
  /**
   * <p> The unique security identifier (SID) of the group. </p>
   * @public
   */
  SID?: string | undefined;

  /**
   * <p> The name of the group. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p>The <a href="https://learn.microsoft.com/en-us/windows/win32/ad/object-names-and-identities#distinguished-name">distinguished name</a> of the object. </p>
   * @public
   */
  DistinguishedName?: string | undefined;

  /**
   * <p> The AD group type. For details, see <a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#how-active-directory-security-groups-work">Active Directory security group type</a>. </p>
   * @public
   */
  GroupType?: GroupType | undefined;

  /**
   * <p> The scope of the AD group. For details, see <a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#group-scope">Active Directory security groups</a>
   *          </p>
   * @public
   */
  GroupScope?: GroupScope | undefined;

  /**
   * <p> An expression of one or more attributes, data types, and the values of a group. </p>
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;
}

/**
 * @public
 */
export interface SearchGroupsResult {
  /**
   * <p> The identifier (ID) of the directory that's associated with the group. </p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p> The domain that's associated with the group. </p>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The group information that the request returns. </p>
   * @public
   */
  Groups?: Group[] | undefined;

  /**
   * <p> An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the user. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The domain name that's associated with the user. </p>
   *          <note>
   *             <p> This parameter is optional, so you can return users outside of your Managed Microsoft AD
   *         domain. When no value is defined, only your Managed Microsoft AD users are returned. </p>
   *             <p> This value is case insensitive. </p>
   *          </note>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The attribute value that you want to search for. </p>
   *          <note>
   *             <p> Wildcard <code>(*)</code> searches aren't supported. For a list of supported
   *         attributes, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html">Directory Service Data
   *           Attributes</a>. </p>
   *          </note>
   * @public
   */
  SearchString: string | undefined;

  /**
   * <p> One or more data attributes that are used to search for a user. For a list of supported
   *       attributes, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html">Directory Service Data Attributes</a>.
   *     </p>
   * @public
   */
  SearchAttributes: string[] | undefined;

  /**
   * <p> An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to be returned per request. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p> A user object that contains identifying information and attributes for a specified user.
 *     </p>
 * @public
 */
export interface User {
  /**
   * <p> The unique security identifier (SID) of the user. </p>
   * @public
   */
  SID?: string | undefined;

  /**
   * <p> The name of the user. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> The <a href="https://learn.microsoft.com/en-us/windows/win32/ad/object-names-and-identities#distinguished-name">distinguished name</a> of the object. </p>
   * @public
   */
  DistinguishedName?: string | undefined;

  /**
   * <p> The UPN that is an internet-style login name for a user and based on the internet
   *       standard <a href="https://datatracker.ietf.org/doc/html/rfc822">RFC 822</a>. The UPN is shorter
   *       than the distinguished name and easier to remember. </p>
   * @public
   */
  UserPrincipalName?: string | undefined;

  /**
   * <p> The email address of the user. </p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p> The first name of the user. </p>
   * @public
   */
  GivenName?: string | undefined;

  /**
   * <p> The last name of the user. </p>
   * @public
   */
  Surname?: string | undefined;

  /**
   * <p> Indicates whether the user account is active. </p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p> An expression that includes one or more attributes, data types, and values of a
   *       user.</p>
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;
}

/**
 * @public
 */
export interface SearchUsersResult {
  /**
   * <p> The identifier (ID) of the directory where the address block is added. </p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p> The domain that's associated with the user. </p>
   * @public
   */
  Realm?: string | undefined;

  /**
   * <p> The user information that the request returns. </p>
   * @public
   */
  Users?: User[] | undefined;

  /**
   * <p> An encoded paging token for paginated calls that can be passed back to retrieve the next
   *       page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UpdateType = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the group. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The name of the group. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> The AD group type. For details, see <a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#how-active-directory-security-groups-work">Active Directory security group type</a>. </p>
   * @public
   */
  GroupType?: GroupType | undefined;

  /**
   * <p> The scope of the AD group. For details, see <a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#group-scope">Active Directory security groups</a>. </p>
   * @public
   */
  GroupScope?: GroupScope | undefined;

  /**
   * <p> An expression that defines one or more attributes with the data type and the value of
   *       each attribute. </p>
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;

  /**
   * <p> The type of update to be performed. If no value exists for the attribute, use
   *         <code>ADD</code>. Otherwise, use <code>REPLACE</code> to change an attribute value or
   *         <code>REMOVE</code> to clear the attribute value. </p>
   * @public
   */
  UpdateType?: UpdateType | undefined;

  /**
   * <p> A unique and case-sensitive identifier that you provide to make sure the idempotency of
   *       the request, so multiple identical calls have the same effect as one single call. </p>
   *          <p> A client token is valid for 8 hours after the first request that uses it completes. After
   *       8 hours, any request with the same client token is treated as a new request. If the request
   *       succeeds, any future uses of that token will be idempotent for another 8 hours. </p>
   *          <p> If you submit a request with the same client token but change one of the other parameters
   *       within the 8-hour idempotency window, Directory Service Data returns an <code>ConflictException</code>. </p>
   *          <note>
   *             <p> This parameter is optional when using the CLI or SDK. </p>
   *          </note>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResult {}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p> The identifier (ID) of the directory that's associated with the user. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The name of the user. </p>
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * <p> The email address of the user. </p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p> The first name of the user. </p>
   * @public
   */
  GivenName?: string | undefined;

  /**
   * <p> The last name of the user. </p>
   * @public
   */
  Surname?: string | undefined;

  /**
   * <p> An expression that defines one or more attribute names with the data type and value of
   *       each attribute. A key is an attribute name, and the value is a list of maps. For a list of
   *       supported attributes, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html">Directory Service Data Attributes</a>. </p>
   *          <note>
   *             <p> Attribute names are case insensitive. </p>
   *          </note>
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;

  /**
   * <p> The type of update to be performed. If no value exists for the attribute, use
   *         <code>ADD</code>. Otherwise, use <code>REPLACE</code> to change an attribute value or
   *         <code>REMOVE</code> to clear the attribute value. </p>
   * @public
   */
  UpdateType?: UpdateType | undefined;

  /**
   * <p> A unique and case-sensitive identifier that you provide to make sure the idempotency of
   *       the request, so multiple identical calls have the same effect as one single call. </p>
   *          <p> A client token is valid for 8 hours after the first request that uses it completes. After
   *       8 hours, any request with the same client token is treated as a new request. If the request
   *       succeeds, any future uses of that token will be idempotent for another 8 hours. </p>
   *          <p> If you submit a request with the same client token but change one of the other parameters
   *       within the 8-hour idempotency window, Directory Service Data returns an <code>ConflictException</code>. </p>
   *          <note>
   *             <p> This parameter is optional when using the CLI or SDK. </p>
   *          </note>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserResult {}

/**
 * @internal
 */
export const AttributeValueFilterSensitiveLog = (obj: AttributeValue): any => {
  if (obj.S !== undefined) return { S: SENSITIVE_STRING };
  if (obj.N !== undefined) return { N: SENSITIVE_STRING };
  if (obj.BOOL !== undefined) return { BOOL: SENSITIVE_STRING };
  if (obj.SS !== undefined) return { SS: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateGroupRequestFilterSensitiveLog = (obj: CreateGroupRequest): any => ({
  ...obj,
  ...(obj.OtherAttributes && {
    OtherAttributes: Object.entries(obj.OtherAttributes).reduce(
      (acc: any, [key, value]: [string, AttributeValue]) => ((acc[key] = AttributeValueFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const CreateUserRequestFilterSensitiveLog = (obj: CreateUserRequest): any => ({
  ...obj,
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.GivenName && { GivenName: SENSITIVE_STRING }),
  ...(obj.Surname && { Surname: SENSITIVE_STRING }),
  ...(obj.OtherAttributes && {
    OtherAttributes: Object.entries(obj.OtherAttributes).reduce(
      (acc: any, [key, value]: [string, AttributeValue]) => ((acc[key] = AttributeValueFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const DescribeGroupResultFilterSensitiveLog = (obj: DescribeGroupResult): any => ({
  ...obj,
  ...(obj.DistinguishedName && { DistinguishedName: SENSITIVE_STRING }),
  ...(obj.OtherAttributes && {
    OtherAttributes: Object.entries(obj.OtherAttributes).reduce(
      (acc: any, [key, value]: [string, AttributeValue]) => ((acc[key] = AttributeValueFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const DescribeUserResultFilterSensitiveLog = (obj: DescribeUserResult): any => ({
  ...obj,
  ...(obj.DistinguishedName && { DistinguishedName: SENSITIVE_STRING }),
  ...(obj.UserPrincipalName && { UserPrincipalName: SENSITIVE_STRING }),
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.GivenName && { GivenName: SENSITIVE_STRING }),
  ...(obj.Surname && { Surname: SENSITIVE_STRING }),
  ...(obj.OtherAttributes && {
    OtherAttributes: Object.entries(obj.OtherAttributes).reduce(
      (acc: any, [key, value]: [string, AttributeValue]) => ((acc[key] = AttributeValueFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const ListGroupMembersRequestFilterSensitiveLog = (obj: ListGroupMembersRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListGroupMembersResultFilterSensitiveLog = (obj: ListGroupMembersResult): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListGroupsRequestFilterSensitiveLog = (obj: ListGroupsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListGroupsResultFilterSensitiveLog = (obj: ListGroupsResult): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListGroupsForMemberRequestFilterSensitiveLog = (obj: ListGroupsForMemberRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListGroupsForMemberResultFilterSensitiveLog = (obj: ListGroupsForMemberResult): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListUsersRequestFilterSensitiveLog = (obj: ListUsersRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserSummaryFilterSensitiveLog = (obj: UserSummary): any => ({
  ...obj,
  ...(obj.GivenName && { GivenName: SENSITIVE_STRING }),
  ...(obj.Surname && { Surname: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListUsersResultFilterSensitiveLog = (obj: ListUsersResult): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserSummaryFilterSensitiveLog(item)) }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchGroupsRequestFilterSensitiveLog = (obj: SearchGroupsRequest): any => ({
  ...obj,
  ...(obj.SearchString && { SearchString: SENSITIVE_STRING }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GroupFilterSensitiveLog = (obj: Group): any => ({
  ...obj,
  ...(obj.DistinguishedName && { DistinguishedName: SENSITIVE_STRING }),
  ...(obj.OtherAttributes && {
    OtherAttributes: Object.entries(obj.OtherAttributes).reduce(
      (acc: any, [key, value]: [string, AttributeValue]) => ((acc[key] = AttributeValueFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const SearchGroupsResultFilterSensitiveLog = (obj: SearchGroupsResult): any => ({
  ...obj,
  ...(obj.Groups && { Groups: obj.Groups.map((item) => GroupFilterSensitiveLog(item)) }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchUsersRequestFilterSensitiveLog = (obj: SearchUsersRequest): any => ({
  ...obj,
  ...(obj.SearchString && { SearchString: SENSITIVE_STRING }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserFilterSensitiveLog = (obj: User): any => ({
  ...obj,
  ...(obj.DistinguishedName && { DistinguishedName: SENSITIVE_STRING }),
  ...(obj.UserPrincipalName && { UserPrincipalName: SENSITIVE_STRING }),
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.GivenName && { GivenName: SENSITIVE_STRING }),
  ...(obj.Surname && { Surname: SENSITIVE_STRING }),
  ...(obj.OtherAttributes && {
    OtherAttributes: Object.entries(obj.OtherAttributes).reduce(
      (acc: any, [key, value]: [string, AttributeValue]) => ((acc[key] = AttributeValueFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const SearchUsersResultFilterSensitiveLog = (obj: SearchUsersResult): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserFilterSensitiveLog(item)) }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGroupRequestFilterSensitiveLog = (obj: UpdateGroupRequest): any => ({
  ...obj,
  ...(obj.OtherAttributes && {
    OtherAttributes: Object.entries(obj.OtherAttributes).reduce(
      (acc: any, [key, value]: [string, AttributeValue]) => ((acc[key] = AttributeValueFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const UpdateUserRequestFilterSensitiveLog = (obj: UpdateUserRequest): any => ({
  ...obj,
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.GivenName && { GivenName: SENSITIVE_STRING }),
  ...(obj.Surname && { Surname: SENSITIVE_STRING }),
  ...(obj.OtherAttributes && {
    OtherAttributes: Object.entries(obj.OtherAttributes).reduce(
      (acc: any, [key, value]: [string, AttributeValue]) => ((acc[key] = AttributeValueFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});
