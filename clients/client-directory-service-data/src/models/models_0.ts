// smithy-typescript generated code
import type { GroupScope, GroupType, MemberType, UpdateType } from "./enums";

/**
 * @public
 */
export interface AddGroupMemberRequest {
  /**
   * The identifier (ID) of the directory that's associated with the group.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The `SAMAccountName` of the user, group, or computer to add as a group member.
   *
   * @public
   */
  MemberName: string | undefined;

  /**
   * The domain name that's associated with the group member. This parameter is required only when adding a member outside of your Managed Microsoft AD domain to a group inside of your Managed Microsoft AD domain. This parameter defaults to the Managed Microsoft AD domain.
   *
   * > **Note:** This parameter is case insensitive.
   *
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * A unique and case-sensitive identifier that you provide to make sure the idempotency of the request, so multiple identical calls have the same effect as one single call.
   *
   * A client token is valid for 8 hours after the first request that uses it completes. After 8 hours, any request with the same client token is treated as a new request. If the request succeeds, any future uses of that token will be idempotent for another 8 hours.
   *
   * If you submit a request with the same client token but change one of the other parameters within the 8-hour idempotency window, Directory Service Data returns an `ConflictException`.
   *
   * > **Note:** This parameter is optional when using the CLI or SDK.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AddGroupMemberResult {}

/**
 * The data type for an attribute. Each attribute value is described as a name-value pair. The name is the AD schema name, and the value is the data itself. For a list of supported attributes, see [Directory Service Data Attributes](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html).
 *
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
   * Indicates that the attribute type value is a string. For example:
   *
   * `"S": "S Group"`
   *
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
   * Indicates that the attribute type value is a number. For example:
   *
   * `"N": "16"`
   *
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
   * Indicates that the attribute type value is a boolean. For example:
   *
   * `"BOOL": true`
   *
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
   * Indicates that the attribute type value is a string set. For example:
   *
   * `"SS": ["sample_service_class/host.sample.com:1234/sample_service_name_1", "sample_service_class/host.sample.com:1234/sample_service_name_2"]`
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S: (value: string) => T;
    N: (value: number) => T;
    BOOL: (value: boolean) => T;
    SS: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * The identifier (ID) of the directory that's associated with the group.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * The AD group type. For details, see [Active Directory security group type](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#how-active-directory-security-groups-work).
   *
   * @public
   */
  GroupType?: GroupType | undefined;

  /**
   * The scope of the AD group. For details, see [Active Directory security group scope](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#group-scope).
   *
   * @public
   */
  GroupScope?: GroupScope | undefined;

  /**
   * An expression that defines one or more attributes with the data type and value of each attribute.
   *
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;

  /**
   * A unique and case-sensitive identifier that you provide to make sure the idempotency of the request, so multiple identical calls have the same effect as one single call.
   *
   * A client token is valid for 8 hours after the first request that uses it completes. After 8 hours, any request with the same client token is treated as a new request. If the request succeeds, any future uses of that token will be idempotent for another 8 hours.
   *
   * If you submit a request with the same client token but change one of the other parameters within the 8-hour idempotency window, Directory Service Data returns an `ConflictException`.
   *
   * > **Note:** This parameter is optional when using the CLI or SDK.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupResult {
  /**
   * The identifier (ID) of the directory that's associated with the group.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  SAMAccountName?: string | undefined;

  /**
   * The unique security identifier (SID) of the group.
   *
   * @public
   */
  SID?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The identifier (ID) of the directory that’s associated with the user.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * The email address of the user.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The first name of the user.
   *
   * @public
   */
  GivenName?: string | undefined;

  /**
   * The last name of the user.
   *
   * @public
   */
  Surname?: string | undefined;

  /**
   * An expression that defines one or more attribute names with the data type and value of each attribute. A key is an attribute name, and the value is a list of maps. For a list of supported attributes, see [Directory Service Data Attributes](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html).
   *
   * > **Note:** Attribute names are case insensitive.
   *
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;

  /**
   * A unique and case-sensitive identifier that you provide to make sure the idempotency of the request, so multiple identical calls have the same effect as one single call.
   *
   * A client token is valid for 8 hours after the first request that uses it completes. After 8 hours, any request with the same client token is treated as a new request. If the request succeeds, any future uses of that token will be idempotent for another 8 hours.
   *
   * If you submit a request with the same client token but change one of the other parameters within the 8-hour idempotency window, Directory Service Data returns an `ConflictException`.
   *
   * > **Note:** This parameter is optional when using the CLI or SDK.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResult {
  /**
   * The identifier (ID) of the directory where the address block is added.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The unique security identifier (SID) of the user.
   *
   * @public
   */
  SID?: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  SAMAccountName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * The identifier (ID) of the directory that's associated with the group.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * A unique and case-sensitive identifier that you provide to make sure the idempotency of the request, so multiple identical calls have the same effect as one single call.
   *
   * A client token is valid for 8 hours after the first request that uses it completes. After 8 hours, any request with the same client token is treated as a new request. If the request succeeds, any future uses of that token will be idempotent for another 8 hours.
   *
   * If you submit a request with the same client token but change one of the other parameters within the 8-hour idempotency window, Directory Service Data returns an `ConflictException`.
   *
   * > **Note:** This parameter is optional when using the CLI or SDK.
   *
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
   * The identifier (ID) of the directory that's associated with the user.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * A unique and case-sensitive identifier that you provide to make sure the idempotency of the request, so multiple identical calls have the same effect as one single call.
   *
   * A client token is valid for 8 hours after the first request that uses it completes. After 8 hours, any request with the same client token is treated as a new request. If the request succeeds, any future uses of that token will be idempotent for another 8 hours.
   *
   * If you submit a request with the same client token but change one of the other parameters within the 8-hour idempotency window, Directory Service Data returns an `ConflictException`.
   *
   * > **Note:** This parameter is optional when using the CLI or SDK.
   *
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
   * The Identifier (ID) of the directory associated with the group.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The domain name that's associated with the group.
   *
   * > **Note:**
   * >
   * > This parameter is optional, so you can return groups outside of your Managed Microsoft AD domain. When no value is defined, only your Managed Microsoft AD groups are returned.
   * >
   * > This value is case insensitive.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * One or more attributes to be returned for the group. For a list of supported attributes, see [Directory Service Data Attributes](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html).
   *
   * @public
   */
  OtherAttributes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeGroupResult {
  /**
   * The identifier (ID) of the directory that's associated with the group.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The domain name that's associated with the group.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The unique security identifier (SID) of the group.
   *
   * @public
   */
  SID?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  SAMAccountName?: string | undefined;

  /**
   * The [distinguished name](https://learn.microsoft.com/en-us/windows/win32/ad/object-names-and-identities#distinguished-name) of the object.
   *
   * @public
   */
  DistinguishedName?: string | undefined;

  /**
   * The AD group type. For details, see [Active Directory security group type](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#how-active-directory-security-groups-work).
   *
   * @public
   */
  GroupType?: GroupType | undefined;

  /**
   * The scope of the AD group. For details, see [Active Directory security groups](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#group-scope).
   *
   * @public
   */
  GroupScope?: GroupScope | undefined;

  /**
   * The attribute values that are returned for the attribute names that are included in the request.
   *
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * The identifier (ID) of the directory that's associated with the user.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * One or more attribute names to be returned for the user. A key is an attribute name, and the value is a list of maps. For a list of supported attributes, see [Directory Service Data Attributes](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html).
   *
   * @public
   */
  OtherAttributes?: string[] | undefined;

  /**
   * The domain name that's associated with the user.
   *
   * > **Note:**
   * >
   * > This parameter is optional, so you can return users outside your Managed Microsoft AD domain. When no value is defined, only your Managed Microsoft AD users are returned.
   * >
   * > This value is case insensitive.
   *
   * @public
   */
  Realm?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserResult {
  /**
   * The identifier (ID) of the directory that's associated with the user.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The domain name that's associated with the user.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The unique security identifier (SID) of the user.
   *
   * @public
   */
  SID?: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  SAMAccountName?: string | undefined;

  /**
   * The [distinguished name](https://learn.microsoft.com/en-us/windows/win32/ad/object-names-and-identities#distinguished-name) of the object.
   *
   * @public
   */
  DistinguishedName?: string | undefined;

  /**
   * The UPN that is an Internet-style login name for a user and is based on the Internet standard [RFC 822](https://datatracker.ietf.org/doc/html/rfc822). The UPN is shorter than the distinguished name and easier to remember.
   *
   * @public
   */
  UserPrincipalName?: string | undefined;

  /**
   * The email address of the user.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The first name of the user.
   *
   * @public
   */
  GivenName?: string | undefined;

  /**
   * The last name of the user.
   *
   * @public
   */
  Surname?: string | undefined;

  /**
   * Indicates whether the user account is active.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The attribute values that are returned for the attribute names that are included in the request.
   *
   * > **Note:** Attribute names are case insensitive.
   *
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;
}

/**
 * @public
 */
export interface DisableUserRequest {
  /**
   * The identifier (ID) of the directory that's associated with the user.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * A unique and case-sensitive identifier that you provide to make sure the idempotency of the request, so multiple identical calls have the same effect as one single call.
   *
   * A client token is valid for 8 hours after the first request that uses it completes. After 8 hours, any request with the same client token is treated as a new request. If the request succeeds, any future uses of that token will be idempotent for another 8 hours.
   *
   * If you submit a request with the same client token but change one of the other parameters within the 8-hour idempotency window, Directory Service Data returns an `ConflictException`.
   *
   * > **Note:** This parameter is optional when using the CLI or SDK.
   *
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
   * The identifier (ID) of the directory that's associated with the group.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The domain name that's associated with the group.
   *
   * > **Note:**
   * >
   * > This parameter is optional, so you can return members from a group outside of your Managed Microsoft AD domain. When no value is defined, only members of your Managed Microsoft AD groups are returned.
   * >
   * > This value is case insensitive.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The domain name that's associated with the group member. This parameter defaults to the Managed Microsoft AD domain.
   *
   * > **Note:** This parameter is optional and case insensitive.
   *
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A member object that contains identifying information for a specified member.
 *
 * @public
 */
export interface Member {
  /**
   * The unique security identifier (SID) of the group member.
   *
   * @public
   */
  SID: string | undefined;

  /**
   * The name of the group member.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * The AD type of the member object.
   *
   * @public
   */
  MemberType: MemberType | undefined;
}

/**
 * @public
 */
export interface ListGroupMembersResult {
  /**
   * Identifier (ID) of the directory associated with the group.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The domain name that's associated with the group.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The domain name that's associated with the member.
   *
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * The member information that the request returns.
   *
   * @public
   */
  Members?: Member[] | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * The identifier (ID) of the directory that's associated with the group.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The domain name associated with the directory.
   *
   * > **Note:**
   * >
   * > This parameter is optional, so you can return groups outside of your Managed Microsoft AD domain. When no value is defined, only your Managed Microsoft AD groups are returned.
   * >
   * > This value is case insensitive.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A structure containing a subset of fields of a group object from a directory.
 *
 * @public
 */
export interface GroupSummary {
  /**
   * The unique security identifier (SID) of the group.
   *
   * @public
   */
  SID: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * The AD group type. For details, see [Active Directory security group type](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#how-active-directory-security-groups-work).
   *
   * @public
   */
  GroupType: GroupType | undefined;

  /**
   * The scope of the AD group. For details, see [Active Directory security groups](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#group-scope).
   *
   * @public
   */
  GroupScope: GroupScope | undefined;
}

/**
 * @public
 */
export interface ListGroupsResult {
  /**
   * The identifier (ID) of the directory that's associated with the group.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The domain name associated with the group.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The group information that the request returns.
   *
   * @public
   */
  Groups?: GroupSummary[] | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsForMemberRequest {
  /**
   * The identifier (ID) of the directory that's associated with the member.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The domain name that's associated with the group.
   *
   * > **Note:**
   * >
   * > This parameter is optional, so you can return groups outside of your Managed Microsoft AD domain. When no value is defined, only your Managed Microsoft AD groups are returned.
   * >
   * > This value is case insensitive and defaults to your Managed Microsoft AD domain.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The domain name that's associated with the group member.
   *
   * > **Note:**
   * >
   * > This parameter is optional, so you can limit your results to the group members in a specific domain.
   * >
   * > This parameter is case insensitive and defaults to `Realm`
   *
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * The `SAMAccountName` of the user, group, or computer that's a member of the group.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListGroupsForMemberResult {
  /**
   * The identifier (ID) of the directory that's associated with the member.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The domain that's associated with the group.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The domain that's associated with the member.
   *
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * The group information that the request returns.
   *
   * @public
   */
  Groups?: GroupSummary[] | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * The identifier (ID) of the directory that's associated with the user.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The domain name that's associated with the user.
   *
   * > **Note:**
   * >
   * > This parameter is optional, so you can return users outside of your Managed Microsoft AD domain. When no value is defined, only your Managed Microsoft AD users are returned.
   * >
   * > This value is case insensitive.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A structure containing a subset of the fields of a user object from a directory.
 *
 * @public
 */
export interface UserSummary {
  /**
   * The unique security identifier (SID) of the user.
   *
   * @public
   */
  SID: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * The first name of the user.
   *
   * @public
   */
  GivenName?: string | undefined;

  /**
   * The last name of the user.
   *
   * @public
   */
  Surname?: string | undefined;

  /**
   * Indicates whether the user account is active.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 */
export interface ListUsersResult {
  /**
   * The identifier (ID) of the directory that's associated with the user.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The domain that's associated with the user.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The user information that the request returns.
   *
   * @public
   */
  Users?: UserSummary[] | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RemoveGroupMemberRequest {
  /**
   * The identifier (ID) of the directory that's associated with the member.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The `SAMAccountName` of the user, group, or computer to remove from the group.
   *
   * @public
   */
  MemberName: string | undefined;

  /**
   * The domain name that's associated with the group member. This parameter defaults to the Managed Microsoft AD domain.
   *
   * > **Note:** This parameter is optional and case insensitive.
   *
   * @public
   */
  MemberRealm?: string | undefined;

  /**
   * A unique and case-sensitive identifier that you provide to make sure the idempotency of the request, so multiple identical calls have the same effect as one single call.
   *
   * A client token is valid for 8 hours after the first request that uses it completes. After 8 hours, any request with the same client token is treated as a new request. If the request succeeds, any future uses of that token will be idempotent for another 8 hours.
   *
   * If you submit a request with the same client token but change one of the other parameters within the 8-hour idempotency window, Directory Service Data returns an `ConflictException`.
   *
   * > **Note:** This parameter is optional when using the CLI or SDK.
   *
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
   * The identifier (ID) of the directory that's associated with the group.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The attribute value that you want to search for.
   *
   * > **Note:** Wildcard `(*)` searches aren't supported. For a list of supported attributes, see [Directory Service Data Attributes](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html).
   *
   * @public
   */
  SearchString: string | undefined;

  /**
   * One or more data attributes that are used to search for a group. For a list of supported attributes, see [Directory Service Data Attributes](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html).
   *
   * @public
   */
  SearchAttributes: string[] | undefined;

  /**
   * The domain name that's associated with the group.
   *
   * > **Note:**
   * >
   * > This parameter is optional, so you can return groups outside of your Managed Microsoft AD domain. When no value is defined, only your Managed Microsoft AD groups are returned.
   * >
   * > This value is case insensitive.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A group object that contains identifying information and attributes for a specified group.
 *
 * @public
 */
export interface Group {
  /**
   * The unique security identifier (SID) of the group.
   *
   * @public
   */
  SID?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * The [distinguished name](https://learn.microsoft.com/en-us/windows/win32/ad/object-names-and-identities#distinguished-name) of the object.
   *
   * @public
   */
  DistinguishedName?: string | undefined;

  /**
   * The AD group type. For details, see [Active Directory security group type](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#how-active-directory-security-groups-work).
   *
   * @public
   */
  GroupType?: GroupType | undefined;

  /**
   * The scope of the AD group. For details, see [Active Directory security groups](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#group-scope)
   *
   * @public
   */
  GroupScope?: GroupScope | undefined;

  /**
   * An expression of one or more attributes, data types, and the values of a group.
   *
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;
}

/**
 * @public
 */
export interface SearchGroupsResult {
  /**
   * The identifier (ID) of the directory that's associated with the group.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The domain that's associated with the group.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The group information that the request returns.
   *
   * @public
   */
  Groups?: Group[] | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * The identifier (ID) of the directory that's associated with the user.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The domain name that's associated with the user.
   *
   * > **Note:**
   * >
   * > This parameter is optional, so you can return users outside of your Managed Microsoft AD domain. When no value is defined, only your Managed Microsoft AD users are returned.
   * >
   * > This value is case insensitive.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The attribute value that you want to search for.
   *
   * > **Note:** Wildcard `(*)` searches aren't supported. For a list of supported attributes, see [Directory Service Data Attributes](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html).
   *
   * @public
   */
  SearchString: string | undefined;

  /**
   * One or more data attributes that are used to search for a user. For a list of supported attributes, see [Directory Service Data Attributes](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html).
   *
   * @public
   */
  SearchAttributes: string[] | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A user object that contains identifying information and attributes for a specified user.
 *
 * @public
 */
export interface User {
  /**
   * The unique security identifier (SID) of the user.
   *
   * @public
   */
  SID?: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * The [distinguished name](https://learn.microsoft.com/en-us/windows/win32/ad/object-names-and-identities#distinguished-name) of the object.
   *
   * @public
   */
  DistinguishedName?: string | undefined;

  /**
   * The UPN that is an internet-style login name for a user and based on the internet standard [RFC 822](https://datatracker.ietf.org/doc/html/rfc822). The UPN is shorter than the distinguished name and easier to remember.
   *
   * @public
   */
  UserPrincipalName?: string | undefined;

  /**
   * The email address of the user.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The first name of the user.
   *
   * @public
   */
  GivenName?: string | undefined;

  /**
   * The last name of the user.
   *
   * @public
   */
  Surname?: string | undefined;

  /**
   * Indicates whether the user account is active.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * An expression that includes one or more attributes, data types, and values of a user.
   *
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;
}

/**
 * @public
 */
export interface SearchUsersResult {
  /**
   * The identifier (ID) of the directory where the address block is added.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The domain that's associated with the user.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The user information that the request returns.
   *
   * @public
   */
  Users?: User[] | undefined;

  /**
   * An encoded paging token for paginated calls that can be passed back to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * The identifier (ID) of the directory that's associated with the group.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * The AD group type. For details, see [Active Directory security group type](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#how-active-directory-security-groups-work).
   *
   * @public
   */
  GroupType?: GroupType | undefined;

  /**
   * The scope of the AD group. For details, see [Active Directory security groups](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups#group-scope).
   *
   * @public
   */
  GroupScope?: GroupScope | undefined;

  /**
   * An expression that defines one or more attributes with the data type and the value of each attribute.
   *
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;

  /**
   * The type of update to be performed. If no value exists for the attribute, use `ADD`. Otherwise, use `REPLACE` to change an attribute value or `REMOVE` to clear the attribute value.
   *
   * @public
   */
  UpdateType?: UpdateType | undefined;

  /**
   * A unique and case-sensitive identifier that you provide to make sure the idempotency of the request, so multiple identical calls have the same effect as one single call.
   *
   * A client token is valid for 8 hours after the first request that uses it completes. After 8 hours, any request with the same client token is treated as a new request. If the request succeeds, any future uses of that token will be idempotent for another 8 hours.
   *
   * If you submit a request with the same client token but change one of the other parameters within the 8-hour idempotency window, Directory Service Data returns an `ConflictException`.
   *
   * > **Note:** This parameter is optional when using the CLI or SDK.
   *
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
   * The identifier (ID) of the directory that's associated with the user.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  SAMAccountName: string | undefined;

  /**
   * The email address of the user.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The first name of the user.
   *
   * @public
   */
  GivenName?: string | undefined;

  /**
   * The last name of the user.
   *
   * @public
   */
  Surname?: string | undefined;

  /**
   * An expression that defines one or more attribute names with the data type and value of each attribute. A key is an attribute name, and the value is a list of maps. For a list of supported attributes, see [Directory Service Data Attributes](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_data_attributes.html).
   *
   * > **Note:** Attribute names are case insensitive.
   *
   * @public
   */
  OtherAttributes?: Record<string, AttributeValue> | undefined;

  /**
   * The type of update to be performed. If no value exists for the attribute, use `ADD`. Otherwise, use `REPLACE` to change an attribute value or `REMOVE` to clear the attribute value.
   *
   * @public
   */
  UpdateType?: UpdateType | undefined;

  /**
   * A unique and case-sensitive identifier that you provide to make sure the idempotency of the request, so multiple identical calls have the same effect as one single call.
   *
   * A client token is valid for 8 hours after the first request that uses it completes. After 8 hours, any request with the same client token is treated as a new request. If the request succeeds, any future uses of that token will be idempotent for another 8 hours.
   *
   * If you submit a request with the same client token but change one of the other parameters within the 8-hour idempotency window, Directory Service Data returns an `ConflictException`.
   *
   * > **Note:** This parameter is optional when using the CLI or SDK.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserResult {}
