// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { UserStatus } from "./enums";

/**
 * The address associated with the specified user.
 *
 * @public
 */
export interface Address {
  /**
   * The street of the address.
   *
   * @public
   */
  StreetAddress?: string | undefined;

  /**
   * A string of the address locality.
   *
   * @public
   */
  Locality?: string | undefined;

  /**
   * The region of the address.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The postal code of the address.
   *
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * The country of the address.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * A string containing a formatted version of the address for display.
   *
   * @public
   */
  Formatted?: string | undefined;

  /**
   * A string representing the type of address. For example, "Home."
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * A Boolean value representing whether this is the primary address for the associated resource.
   *
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * The identifier issued to this resource by an external identity provider.
 *
 * @public
 */
export interface ExternalId {
  /**
   * The issuer for an external identifier.
   *
   * @public
   */
  Issuer: string | undefined;

  /**
   * The identifier issued to this resource by an external identity provider.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * An entity attribute that's unique to a specific entity.
 *
 * @public
 */
export interface UniqueAttribute {
  /**
   * A string representation of the path to a given attribute or sub-attribute. Supports JMESPath.
   *
   * @public
   */
  AttributePath: string | undefined;

  /**
   * The value of the attribute. This is a `Document` type. This type is not supported by Java V1, Go V1, and older versions of the CLI.
   *
   * @public
   */
  AttributeValue: __DocumentType | undefined;
}

/**
 * A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute.
 *
 * @public
 */
export type AlternateIdentifier =
  | AlternateIdentifier.ExternalIdMember
  | AlternateIdentifier.UniqueAttributeMember
  | AlternateIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace AlternateIdentifier {
  /**
   * The identifier issued to this resource by an external identity provider.
   *
   * @public
   */
  export interface ExternalIdMember {
    ExternalId: ExternalId;
    UniqueAttribute?: never;
    $unknown?: never;
  }

  /**
   * An entity attribute that's unique to a specific entity.
   *
   * @public
   */
  export interface UniqueAttributeMember {
    ExternalId?: never;
    UniqueAttribute: UniqueAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ExternalId?: never;
    UniqueAttribute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ExternalId: (value: ExternalId) => T;
    UniqueAttribute: (value: UniqueAttribute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An operation that applies to the requested group. This operation might add, replace, or remove an attribute.
 *
 * @public
 */
export interface AttributeOperation {
  /**
   * A string representation of the path to a given attribute or sub-attribute. Supports JMESPath.
   *
   * @public
   */
  AttributePath: string | undefined;

  /**
   * The value of the attribute. This is a `Document` type. This type is not supported by Java V1, Go V1, and older versions of the CLI.
   *
   * @public
   */
  AttributeValue?: __DocumentType | undefined;
}

/**
 * An object containing the identifier of a group member.
 *
 * @public
 */
export type MemberId =
  | MemberId.UserIdMember
  | MemberId.$UnknownMember;

/**
 * @public
 */
export namespace MemberId {
  /**
   * The identifier for a user in the identity store.
   *
   * You can specify the user by ID or by Amazon Resource Name (ARN). For example, user ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111` or user ARN `arn:aws:identitystore:::user/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  export interface UserIdMember {
    UserId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    UserId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    UserId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateGroupMembershipRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * You can specify the group by ID or by Amazon Resource Name (ARN). For example, group ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE22222` or group ARN `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * An object that contains the identifier of a group member. Setting the `UserID` field to the specific identifier for a user indicates that the user is a member of the group.
   *
   * @public
   */
  MemberId: MemberId | undefined;
}

/**
 * @public
 */
export interface CreateGroupMembershipResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a newly created `GroupMembership` in an identity store.
   *
   * @public
   */
  MembershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the newly created group membership in the identity store. For example, `arn:aws:identitystore:::membership/a1b2c3d4-5678-90ab-cdef-EXAMPLE33333`.
   *
   * @public
   */
  MembershipArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupMembershipRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a `GroupMembership` in an identity store.
   *
   * You can specify the group membership by ID or by Amazon Resource Name (ARN). For example, membership ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE33333` or membership ARN `arn:aws:identitystore:::membership/a1b2c3d4-5678-90ab-cdef-EXAMPLE33333`.
   *
   * @public
   */
  MembershipId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupMembershipResponse {}

/**
 * @public
 */
export interface DescribeGroupMembershipRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a `GroupMembership` in an identity store.
   *
   * You can specify the group membership by ID or by Amazon Resource Name (ARN). For example, membership ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE33333` or membership ARN `arn:aws:identitystore:::membership/a1b2c3d4-5678-90ab-cdef-EXAMPLE33333`.
   *
   * @public
   */
  MembershipId: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupMembershipResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a `GroupMembership` in an identity store.
   *
   * @public
   */
  MembershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group membership in the identity store. For example, `arn:aws:identitystore:::membership/a1b2c3d4-5678-90ab-cdef-EXAMPLE33333`.
   *
   * @public
   */
  MembershipArn: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * An object containing the identifier of a group member.
   *
   * @public
   */
  MemberId: MemberId | undefined;

  /**
   * The date and time the group membership was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time the group membership was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The identifier of the user or system that created the group membership.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The identifier of the user or system that last updated the group membership.
   *
   * @public
   */
  UpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupMembershipIdRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * You can specify the group by ID or by Amazon Resource Name (ARN). For example, group ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE22222` or group ARN `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * An object that contains the identifier of a group member. Setting the `UserID` field to the specific identifier for a user indicates that the user is a member of the group.
   *
   * @public
   */
  MemberId: MemberId | undefined;
}

/**
 * @public
 */
export interface GetGroupMembershipIdResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a `GroupMembership` in an identity store.
   *
   * @public
   */
  MembershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group membership in the identity store. For example, `arn:aws:identitystore:::membership/a1b2c3d4-5678-90ab-cdef-EXAMPLE33333`.
   *
   * @public
   */
  MembershipArn: string | undefined;
}

/**
 * @public
 */
export interface IsMemberInGroupsRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * An object containing the identifier of a group member.
   *
   * @public
   */
  MemberId: MemberId | undefined;

  /**
   * A list of identifiers for groups in the identity store.
   *
   * You can specify each group by ID or by Amazon Resource Name (ARN). For example, group ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE22222` or group ARN `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupIds: string[] | undefined;
}

/**
 * Indicates whether a resource is a member of a group in the identity store.
 *
 * @public
 */
export interface GroupMembershipExistenceResult {
  /**
   * The identifier for a group in the identity store.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * An object that contains the identifier of a group member. Setting the `UserID` field to the specific identifier for a user indicates that the user is a member of the group.
   *
   * @public
   */
  MemberId?: MemberId | undefined;

  /**
   * Indicates whether a membership relation exists or not.
   *
   * @public
   */
  MembershipExists?: boolean | undefined;
}

/**
 * @public
 */
export interface IsMemberInGroupsResponse {
  /**
   * A list containing the results of membership existence checks.
   *
   * @public
   */
  Results: GroupMembershipExistenceResult[] | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * You can specify the group by ID or by Amazon Resource Name (ARN). For example, group ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE22222` or group ARN `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The maximum number of results to be returned per request. This parameter is used in all `List` requests to specify how many results to return in one page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token used for the `ListUsers`, `ListGroups` and `ListGroupMemberships` API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the identifiers for a group, a group member, and a `GroupMembership` object in the identity store.
 *
 * @public
 */
export interface GroupMembership {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a `GroupMembership` object in an identity store.
   *
   * @public
   */
  MembershipId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group membership in the identity store. For example, `arn:aws:identitystore:::membership/a1b2c3d4-5678-90ab-cdef-EXAMPLE33333`.
   *
   * @public
   */
  MembershipArn: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * An object that contains the identifier of a group member. Setting the `UserID` field to the specific identifier for a user indicates that the user is a member of the group.
   *
   * @public
   */
  MemberId?: MemberId | undefined;

  /**
   * The date and time the group membership was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time the group membership was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The identifier of the user or system that created the group membership.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The identifier of the user or system that last updated the group membership.
   *
   * @public
   */
  UpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsResponse {
  /**
   * A list of `GroupMembership` objects in the group.
   *
   * @public
   */
  GroupMemberships: GroupMembership[] | undefined;

  /**
   * The pagination token used for the `ListUsers`, `ListGroups`, and `ListGroupMemberships` API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsForMemberRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * An object that contains the identifier of a group member. Setting the `UserID` field to the specific identifier for a user indicates that the user is a member of the group.
   *
   * @public
   */
  MemberId: MemberId | undefined;

  /**
   * The maximum number of results to be returned per request. This parameter is used in all `List` requests to specify how many results to return in one page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token used for the `ListUsers`, `ListGroups`, and `ListGroupMemberships` API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsForMemberResponse {
  /**
   * A list of `GroupMembership` objects in the group for a specified member.
   *
   * @public
   */
  GroupMemberships: GroupMembership[] | undefined;

  /**
   * The pagination token used for the `ListUsers`, `ListGroups`, and `ListGroupMemberships` API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * A string containing the name of the group. This value is commonly displayed when the group is referenced. `Administrator` and `AWSAdministrators` are reserved names and can't be used for users or groups.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A string containing the description of the group.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier of the newly created group in the identity store.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the newly created group in the identity store. For example, `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupArn: string | undefined;

  /**
   * The revision of the newly created group in the identity store.
   *
   * @public
   */
  Revision: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * You can specify the group by ID or by Amazon Resource Name (ARN). For example, group ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE22222` or group ARN `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The expected current revision of the group. When you provide this value, the group is deleted only if it matches the current revision of the group in the identity store. If the value doesn't match, the operation fails with a `ConflictException`. If you don't provide this value, the group is deleted regardless of its current revision.
   *
   * @public
   */
  Revision?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResponse {}

/**
 * @public
 */
export interface DescribeGroupRequest {
  /**
   * The globally unique identifier for the identity store, such as `d-1234567890`. In this example, `d-` is a fixed prefix, and `1234567890` is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * You can specify the group by ID or by Amazon Resource Name (ARN). For example, group ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE22222` or group ARN `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group in the identity store. For example, `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupArn: string | undefined;

  /**
   * The current revision of the group in the identity store. This value changes each time the group is modified.
   *
   * @public
   */
  Revision: string | undefined;

  /**
   * The group’s display name value. The length limit is 1,024 characters. This value can consist of letters, accented characters, symbols, numbers, punctuation, tab, new line, carriage return, space, and nonbreaking space in this attribute. This value is specified at the time that the group is created and stored as an attribute of the group object in the identity store.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A list of `ExternalId` objects that contains the identifiers issued to this resource by an external identity provider.
   *
   * @public
   */
  ExternalIds?: ExternalId[] | undefined;

  /**
   * A string containing a description of the group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time the group was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time the group was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The identifier of the user or system that created the group.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The identifier of the user or system that last updated the group.
   *
   * @public
   */
  UpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupIdRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute. For the unique attribute, the only valid path is `displayName`.
   *
   * @public
   */
  AlternateIdentifier: AlternateIdentifier | undefined;
}

/**
 * @public
 */
export interface GetGroupIdResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group in the identity store. For example, `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupArn: string | undefined;
}

/**
 * A query filter used by `ListUsers` and `ListGroups`. This filter object provides the attribute name and attribute value to search users or groups.
 *
 * @public
 */
export interface Filter {
  /**
   * The attribute path that is used to specify which attribute name to search. Length limit is 255 characters. For example, `UserName` is a valid attribute path for the `ListUsers` API, and `DisplayName` is a valid attribute path for the `ListGroups` API.
   *
   * @public
   */
  AttributePath: string | undefined;

  /**
   * Represents the data for an attribute. Each attribute value is described as a name-value pair.
   *
   * @public
   */
  AttributeValue: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * The globally unique identifier for the identity store, such as `d-1234567890`. In this example, `d-` is a fixed prefix, and `1234567890` is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The maximum number of results to be returned per request. This parameter is used in all `List` requests to specify how many results to return in one page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token used for the `ListUsers` and `ListGroups` API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of `Filter` objects, which is used in the `ListUsers` and `ListGroups` requests.
   *
   * @deprecated Using filters with ListGroups API is deprecated, please use GetGroupId API instead.
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * A group object that contains the metadata and attributes for a specified group.
 *
 * @public
 */
export interface Group {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group in the identity store. For example, `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupArn: string | undefined;

  /**
   * The current revision of the group in the identity store. This value changes each time the group is modified. You can provide it as the `Revision` parameter of an `UpdateGroup` or `DeleteGroup` request to make the operation conditional on the group not having changed. Treat this value as an opaque token: don't parse it or rely on its format or ordering.
   *
   * @public
   */
  Revision: string | undefined;

  /**
   * The display name value for the group. The length limit is 1,024 characters. This value can consist of letters, accented characters, symbols, numbers, punctuation, tab, new line, carriage return, space, and nonbreaking space in this attribute. This value is specified at the time the group is created and stored as an attribute of the group object in the identity store.
   *
   * Prefix search supports a maximum of 1,000 characters for the string.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A list of `ExternalId` objects that contains the identifiers issued to this resource by an external identity provider.
   *
   * @public
   */
  ExternalIds?: ExternalId[] | undefined;

  /**
   * A string containing a description of the specified group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time the group was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time the group was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The identifier of the user or system that created the group.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The identifier of the user or system that last updated the group.
   *
   * @public
   */
  UpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * A list of `Group` objects in the identity store.
   *
   * @public
   */
  Groups: Group[] | undefined;

  /**
   * The pagination token used for the `ListUsers` and `ListGroups` API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to retrieve the next page of results.
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
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * You can specify the group by ID or by Amazon Resource Name (ARN). For example, group ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE22222` or group ARN `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * A list of `AttributeOperation` objects to apply to the requested group. These operations might add, replace, or remove an attribute. For more information on the attributes that can be added, replaced, or removed, see [Group](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html).
   *
   * @public
   */
  Operations: AttributeOperation[] | undefined;

  /**
   * The expected current revision of the group. When you provide this value, the update is applied only if it matches the current revision of the group in the identity store, which prevents you from overwriting concurrent changes. If the value doesn't match, the operation fails with a `ConflictException`. If you don't provide this value, the update is applied unconditionally.
   *
   * @public
   */
  Revision?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a group in the identity store.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group in the identity store. For example, `arn:aws:identitystore:::group/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  GroupArn: string | undefined;

  /**
   * The revision of the group after the requested update is applied.
   *
   * @public
   */
  Revision: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityStoreRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;
}

/**
 * The network configuration that controls how an identity store can be accessed. This object is returned as part of service API responses.
 *
 * @public
 */
export interface NetworkConfigurationDetails {
  /**
   * Specifies whether the identity store can be accessed only through a virtual private cloud (VPC) endpoint. When set to `true`, requests must originate from a VPC endpoint.
   *
   * @public
   */
  VpceAccessRequired: boolean | undefined;

  /**
   * A list of virtual private cloud (VPC) IDs that are allowed to access the identity store API operations. A request is denied unless it originates from a VPC in this list, or from an IP address in `ApiAllowSourceIps` if one is configured. If this field is empty, access isn't restricted to specific VPCs, but the VPC endpoint requirement from `VpceAccessRequired` still applies.
   *
   * @public
   */
  ApiRestrictSourceVpcs?: string[] | undefined;

  /**
   * A list of IP address CIDR ranges that are allowed to access the identity store API operations. A request from an IP address in this list bypasses the identity store's other API network controls: it's permitted even if it doesn't come through a VPC endpoint required by `VpceAccessRequired`, and even if it doesn't originate from a VPC in `ApiRestrictSourceVpcs`. If this field is empty, no such IP address exception applies.
   *
   * @public
   */
  ApiAllowSourceIps?: string[] | undefined;

  /**
   * A list of IP address CIDR ranges that are allowed to access the identity store through the System for Cross-domain Identity Management (SCIM) protocol. Requests from IP addresses outside these ranges are denied. If this field is empty, SCIM requests remain subject to the identity store's other network controls, such as the VPC endpoint requirement.
   *
   * @public
   */
  ScimAllowSourceIps?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityStoreResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the identity store. For example, `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreArn: string | undefined;

  /**
   * The network configuration of the identity store. This configuration controls whether access through a virtual private cloud (VPC) endpoint is required, and which source VPCs and IP addresses are allowed.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfigurationDetails | undefined;
}

/**
 * @public
 */
export interface ListIdentityStoresRequest {
  /**
   * The maximum number of results to return per request. This parameter is used in all `List` operations to specify how many results to return on one page. If you don't specify a value, the operation uses a default page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token used for the `ListIdentityStores` API operation. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that contains the identifiers for an identity store: its globally unique identifier (ID) and Amazon Resource Name (ARN).
 *
 * @public
 */
export interface IdentityStore {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the identity store. For example, `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreArn: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityStoresResponse {
  /**
   * A list of `IdentityStore` objects, each of which contains the identifiers for an identity store that you have access to.
   *
   * @public
   */
  IdentityStores: IdentityStore[] | undefined;

  /**
   * The pagination token used for the `ListIdentityStores` API operation. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The network configuration that controls how an identity store can be accessed. You provide this object in a request.
 *
 * @public
 */
export interface NetworkConfiguration {
  /**
   * Specifies whether the identity store can be accessed only through a virtual private cloud (VPC) endpoint. When set to `true`, requests must originate from a VPC endpoint.
   *
   * This value must be set to either `true` or `false` when you provide `NetworkConfiguration` in a request.
   *
   * @public
   */
  VpceAccessRequired: boolean | undefined;

  /**
   * A list of virtual private cloud (VPC) IDs that are allowed to access the identity store API operations. A request is denied unless it originates from a VPC in this list, or from an IP address in `ApiAllowSourceIps` if you specified one. If you don't specify a value, access isn't restricted to specific VPCs, but the VPC endpoint requirement set by `VpceAccessRequired` still applies.
   *
   * @public
   */
  ApiRestrictSourceVpcs?: string[] | undefined;

  /**
   * A list of IP address CIDR ranges that are allowed to access the identity store API operations. A request from an IP address in this list bypasses the identity store's other API network controls: it's permitted even if it doesn't come through a VPC endpoint required by `VpceAccessRequired`, and even if it doesn't originate from a VPC in `ApiRestrictSourceVpcs`. If you don't specify a value, no such IP address exception applies.
   *
   * @public
   */
  ApiAllowSourceIps?: string[] | undefined;

  /**
   * A list of IP address CIDR ranges that are allowed to access the identity store through the System for Cross-domain Identity Management (SCIM) protocol. Requests from IP addresses outside these ranges are denied. If you don't specify a value, SCIM requests remain subject to the identity store's other network controls, such as the VPC endpoint requirement set by `VpceAccessRequired`.
   *
   * For example, to allow SCIM traffic from the public internet while still requiring the identity store API operations to be accessed through a VPC endpoint, set `VpceAccessRequired` to `true` and set this value to `0.0.0.0/0`.
   *
   * @public
   */
  ScimAllowSourceIps?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityStoreRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The network configuration to apply to the identity store. This controls whether access through a virtual private cloud (VPC) endpoint is required and the source VPCs and IP addresses that are allowed to access the identity store.
   *
   * When you provide `NetworkConfiguration` in a request, the service performs a full replacement of the identity store's current network configuration with the values you specify. Any values that you omit are cleared. To preserve or change the allowed source VPCs or IP address ranges, include the complete set of values that you want in the request. To clear a list, omit it; an empty list is not accepted.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityStoreResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the identity store. For example, `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreArn: string | undefined;
}

/**
 * The email address associated with the user.
 *
 * @public
 */
export interface Email {
  /**
   * A string containing an email address. For example, "johndoe@amazon.com."
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * A string representing the type of address. For example, "Work."
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * A Boolean value representing whether this is the primary email address for the associated resource.
   *
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * The full name of the user.
 *
 * @public
 */
export interface Name {
  /**
   * A string containing a formatted version of the name for display.
   *
   * @public
   */
  Formatted?: string | undefined;

  /**
   * The family name of the user.
   *
   * @public
   */
  FamilyName?: string | undefined;

  /**
   * The given name of the user.
   *
   * @public
   */
  GivenName?: string | undefined;

  /**
   * The middle name of the user.
   *
   * @public
   */
  MiddleName?: string | undefined;

  /**
   * The honorific prefix of the user. For example, "Dr."
   *
   * @public
   */
  HonorificPrefix?: string | undefined;

  /**
   * The honorific suffix of the user. For example, "M.D."
   *
   * @public
   */
  HonorificSuffix?: string | undefined;
}

/**
 * The phone number associated with the user.
 *
 * @public
 */
export interface PhoneNumber {
  /**
   * A string containing a phone number. For example, "8675309" or "+1 (800) 123-4567".
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * A string representing the type of a phone number. For example, "Mobile."
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * A Boolean value representing whether this is the primary phone number for the associated resource.
   *
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * Contains information about a user's photo. Users can have up to 3 photos, with one designated as primary. Supports common image formats, including jpg, jpeg, png, and gif.
 *
 * @public
 */
export interface Photo {
  /**
   * The photo data or URL. Supported formats include jpg, jpeg, png, and gif. This field is required for all photo entries.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The type of photo. This field is optional and can be used to categorize different types of photos.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * A human-readable description of the photo for display purposes. This optional field provides context about the photo.
   *
   * @public
   */
  Display?: string | undefined;

  /**
   * Specifies whether this is the user's primary photo. Default value is `false`. Only one photo can be designated as primary per user.
   *
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * The role associated with the user.
 *
 * @public
 */
export interface Role {
  /**
   * A string containing a role name. For example, "Researcher."
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * A string representing the type of role. For example, "Work."
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * A Boolean value representing whether this is the primary role for the associated resource.
   *
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store. `Administrator` and `AWSAdministrators` are reserved names and can't be used for users or groups.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * An object containing the name of the user. When used in IAM Identity Center, this parameter is required.
   *
   * @public
   */
  Name?: Name | undefined;

  /**
   * A string containing the name of the user. This value is typically formatted for display when the user is referenced. For example, "John Doe." When used in IAM Identity Center, this parameter is required.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A string containing an alternate name for the user.
   *
   * @public
   */
  NickName?: string | undefined;

  /**
   * A string containing a URL that might be associated with the user.
   *
   * @public
   */
  ProfileUrl?: string | undefined;

  /**
   * A list of `Email` objects containing email addresses associated with the user.
   *
   * @public
   */
  Emails?: Email[] | undefined;

  /**
   * A list of `Address` objects containing addresses associated with the user.
   *
   * @public
   */
  Addresses?: Address[] | undefined;

  /**
   * A list of `PhoneNumber` objects containing phone numbers associated with the user.
   *
   * @public
   */
  PhoneNumbers?: PhoneNumber[] | undefined;

  /**
   * A string indicating the type of user. Possible values are left unspecified. The value can vary based on your specific use case.
   *
   * @public
   */
  UserType?: string | undefined;

  /**
   * A string containing the title of the user. Possible values are left unspecified. The value can vary based on your specific use case.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * A string containing the preferred language of the user. For example, "American English" or "en-us."
   *
   * @public
   */
  PreferredLanguage?: string | undefined;

  /**
   * A string containing the geographical region or location of the user.
   *
   * @public
   */
  Locale?: string | undefined;

  /**
   * A string containing the time zone of the user.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * A list of photos associated with the user. You can add up to 3 photos per user. Each photo can include a value, type, display name, and primary designation.
   *
   * @public
   */
  Photos?: Photo[] | undefined;

  /**
   * The user's personal website or blog URL. This field allows users to provide a link to their personal or professional website.
   *
   * @public
   */
  Website?: string | undefined;

  /**
   * The user's birthdate in YYYY-MM-DD format. This field supports standard date format for storing personal information.
   *
   * @public
   */
  Birthdate?: string | undefined;

  /**
   * A list of `Role` objects containing roles associated with the user.
   *
   * @public
   */
  Roles?: Role[] | undefined;

  /**
   * A map with additional attribute extensions for the user. Each map key corresponds to an extension name, while map values represent extension data in `Document` type (not supported by Java V1, Go V1 and older versions of the CLI). `aws:identitystore:enterprise` is the only supported extension name.
   *
   * @public
   */
  Extensions?: Record<string, __DocumentType> | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier of the newly created user in the identity store.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the newly created user in the identity store. For example, `arn:aws:identitystore:::user/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  UserArn: string | undefined;

  /**
   * The revision of the newly created user in the identity store.
   *
   * @public
   */
  Revision: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a user in the identity store.
   *
   * You can specify the user by ID or by Amazon Resource Name (ARN). For example, user ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111` or user ARN `arn:aws:identitystore:::user/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The expected current revision of the user. When you provide this value, the user is deleted only if it matches the current revision of the user in the identity store. If the value doesn't match, the operation fails with a `ConflictException`. If you don't provide this value, the user is deleted regardless of its current revision.
   *
   * @public
   */
  Revision?: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * The globally unique identifier for the identity store, such as `d-1234567890`. In this example, `d-` is a fixed prefix, and `1234567890` is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a user in the identity store.
   *
   * You can specify the user by ID or by Amazon Resource Name (ARN). For example, user ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111` or user ARN `arn:aws:identitystore:::user/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * A collection of extension names indicating what extensions the service should retrieve alongside other user attributes. `aws:identitystore:enterprise` is the only supported extension name.
   *
   * @public
   */
  Extensions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a user in the identity store.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user in the identity store. For example, `arn:aws:identitystore:::user/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  UserArn: string | undefined;

  /**
   * The current revision of the user in the identity store. This value changes each time the user is modified.
   *
   * @public
   */
  Revision: string | undefined;

  /**
   * A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * A list of `ExternalId` objects that contains the identifiers issued to this resource by an external identity provider.
   *
   * @public
   */
  ExternalIds?: ExternalId[] | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  Name?: Name | undefined;

  /**
   * The display name of the user.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * An alternative descriptive name for the user.
   *
   * @public
   */
  NickName?: string | undefined;

  /**
   * A URL link for the user's profile.
   *
   * @public
   */
  ProfileUrl?: string | undefined;

  /**
   * The email address of the user.
   *
   * @public
   */
  Emails?: Email[] | undefined;

  /**
   * The physical address of the user.
   *
   * @public
   */
  Addresses?: Address[] | undefined;

  /**
   * A list of `PhoneNumber` objects associated with a user.
   *
   * @public
   */
  PhoneNumbers?: PhoneNumber[] | undefined;

  /**
   * A string indicating the type of user.
   *
   * @public
   */
  UserType?: string | undefined;

  /**
   * A string containing the title of the user.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The preferred language of the user.
   *
   * @public
   */
  PreferredLanguage?: string | undefined;

  /**
   * A string containing the geographical region or location of the user.
   *
   * @public
   */
  Locale?: string | undefined;

  /**
   * The time zone for a user.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * The current status of the user account.
   *
   * @public
   */
  UserStatus?: UserStatus | undefined;

  /**
   * A list of photos associated with the user. Returns up to 3 photos with their associated metadata including type, display name, and primary designation.
   *
   * @public
   */
  Photos?: Photo[] | undefined;

  /**
   * The user's personal website or blog URL. Returns the stored website information for the user.
   *
   * @public
   */
  Website?: string | undefined;

  /**
   * The user's birthdate in YYYY-MM-DD format. This field returns the stored birthdate information for the user.
   *
   * @public
   */
  Birthdate?: string | undefined;

  /**
   * The roles of the user.
   *
   * @public
   */
  Roles?: Role[] | undefined;

  /**
   * The date and time the user was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The identifier of the user or system that created the user.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time the user was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The identifier of the user or system that last updated the user.
   *
   * @public
   */
  UpdatedBy?: string | undefined;

  /**
   * A map of explicitly requested attribute extensions associated with the user. Not populated if the user has no requested extensions.
   *
   * @public
   */
  Extensions?: Record<string, __DocumentType> | undefined;
}

/**
 * @public
 */
export interface GetUserIdRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute. For the unique attribute, the only valid paths are `userName` and `emails.value`.
   *
   * @public
   */
  AlternateIdentifier: AlternateIdentifier | undefined;
}

/**
 * @public
 */
export interface GetUserIdResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a user in the identity store.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user in the identity store. For example, `arn:aws:identitystore:::user/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  UserArn: string | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * The globally unique identifier for the identity store, such as `d-1234567890`. In this example, `d-` is a fixed prefix, and `1234567890` is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * A collection of extension names indicating what extensions the service should retrieve alongside other user attributes. `aws:identitystore:enterprise` is the only supported extension name.
   *
   * @public
   */
  Extensions?: string[] | undefined;

  /**
   * The maximum number of results to be returned per request. This parameter is used in all `List` requests to specify how many results to return in one page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token used for the `ListUsers` and `ListGroups` API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of `Filter` objects, which is used in the `ListUsers` and `ListGroups` requests.
   *
   * @deprecated Using filters with ListUsers API is deprecated, please use GetUserId API instead.
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * A user object that contains the metadata and attributes for a specified user.
 *
 * @public
 */
export interface User {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a user in the identity store.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user in the identity store. For example, `arn:aws:identitystore:::user/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  UserArn: string | undefined;

  /**
   * The current revision of the user in the identity store. This value changes each time the user is modified. You can provide it as the `Revision` parameter of an `UpdateUser` or `DeleteUser` request to make the operation conditional on the user not having changed. Treat this value as an opaque token: don't parse it or rely on its format or ordering.
   *
   * @public
   */
  Revision: string | undefined;

  /**
   * A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * A list of `ExternalId` objects that contains the identifiers issued to this resource by an external identity provider.
   *
   * @public
   */
  ExternalIds?: ExternalId[] | undefined;

  /**
   * An object containing the name of the user.
   *
   * @public
   */
  Name?: Name | undefined;

  /**
   * A string containing the name of the user that is formatted for display when the user is referenced. For example, "John Doe."
   *
   * Prefix search supports a maximum of 1,000 characters for the string.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A string containing an alternate name for the user.
   *
   * @public
   */
  NickName?: string | undefined;

  /**
   * A string containing a URL that might be associated with the user.
   *
   * @public
   */
  ProfileUrl?: string | undefined;

  /**
   * A list of `Email` objects containing email addresses associated with the user.
   *
   * @public
   */
  Emails?: Email[] | undefined;

  /**
   * A list of `Address` objects containing addresses associated with the user.
   *
   * @public
   */
  Addresses?: Address[] | undefined;

  /**
   * A list of `PhoneNumber` objects containing phone numbers associated with the user.
   *
   * @public
   */
  PhoneNumbers?: PhoneNumber[] | undefined;

  /**
   * A string indicating the type of user. Possible values are left unspecified. The value can vary based on your specific use case.
   *
   * @public
   */
  UserType?: string | undefined;

  /**
   * A string containing the title of the user. Possible values are left unspecified. The value can vary based on your specific use case.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * A string containing the preferred language of the user. For example, "American English" or "en-us."
   *
   * @public
   */
  PreferredLanguage?: string | undefined;

  /**
   * A string containing the geographical region or location of the user.
   *
   * @public
   */
  Locale?: string | undefined;

  /**
   * A string containing the time zone of the user.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * The current status of the user account.
   *
   * @public
   */
  UserStatus?: UserStatus | undefined;

  /**
   * A list of photos associated with the user. Users can have up to 3 photos with metadata including type, display name, and primary designation.
   *
   * @public
   */
  Photos?: Photo[] | undefined;

  /**
   * The user's personal website or blog URL. This field stores website information for personal or professional use.
   *
   * @public
   */
  Website?: string | undefined;

  /**
   * The user's birthdate in YYYY-MM-DD format. This field stores personal birthdate information for the user.
   *
   * @public
   */
  Birthdate?: string | undefined;

  /**
   * A list of `Role` objects containing roles associated with the user.
   *
   * @public
   */
  Roles?: Role[] | undefined;

  /**
   * The date and time the user was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The identifier of the user or system that created the user.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time the user was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The identifier of the user or system that last updated the user.
   *
   * @public
   */
  UpdatedBy?: string | undefined;

  /**
   * A map of explicitly requested attribute extensions associated with the user. Not populated if the user has no requested extensions.
   *
   * @public
   */
  Extensions?: Record<string, __DocumentType> | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * A list of `User` objects in the identity store.
   *
   * @public
   */
  Users: User[] | undefined;

  /**
   * The pagination token used for the `ListUsers` and `ListGroups` API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * The globally unique identifier for the identity store.
   *
   * You can specify the identity store by ID or by Amazon Resource Name (ARN). For example, identity store ID `d-1234567890` or identity store ARN `arn:aws:identitystore::111122223333:identitystore/d-1234567890`.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a user in the identity store.
   *
   * You can specify the user by ID or by Amazon Resource Name (ARN). For example, user ID `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111` or user ARN `arn:aws:identitystore:::user/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * A list of `AttributeOperation` objects to apply to the requested user. These operations might add, replace, or remove an attribute. For more information on the attributes that can be added, replaced, or removed, see [User](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html).
   *
   * @public
   */
  Operations: AttributeOperation[] | undefined;

  /**
   * The expected current revision of the user. When you provide this value, the update is applied only if it matches the current revision of the user in the identity store, which prevents you from overwriting concurrent changes. If the value doesn't match, the operation fails with a `ConflictException`. If you don't provide this value, the update is applied unconditionally.
   *
   * @public
   */
  Revision?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * The globally unique identifier for the identity store.
   *
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * The identifier for a user in the identity store.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user in the identity store. For example, `arn:aws:identitystore:::user/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  UserArn: string | undefined;

  /**
   * The revision of the user after the requested update is applied.
   *
   * @public
   */
  Revision: string | undefined;
}
