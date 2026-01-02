// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import { UserStatus } from "./enums";

/**
 * <p>The address associated with the specified user.</p>
 * @public
 */
export interface Address {
  /**
   * <p>The street of the address.</p>
   * @public
   */
  StreetAddress?: string | undefined;

  /**
   * <p>A string of the address locality.</p>
   * @public
   */
  Locality?: string | undefined;

  /**
   * <p>The region of the address.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The postal code of the address.</p>
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * <p>The country of the address.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>A string containing a formatted version of the address for display.</p>
   * @public
   */
  Formatted?: string | undefined;

  /**
   * <p>A string representing the type of address. For example, "Home."</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>A Boolean value representing whether this is the primary address for the associated resource.</p>
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * <p>The identifier issued to this resource by an external identity provider.</p>
 * @public
 */
export interface ExternalId {
  /**
   * <p>The issuer for an external identifier.</p>
   * @public
   */
  Issuer: string | undefined;

  /**
   * <p>The identifier issued to this resource by an external identity provider.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>An entity attribute that's unique to a specific entity.</p>
 * @public
 */
export interface UniqueAttribute {
  /**
   * <p>A string representation of the path to a given attribute or sub-attribute. Supports JMESPath.</p>
   * @public
   */
  AttributePath: string | undefined;

  /**
   * <p>The value of the attribute. This is a <code>Document</code> type. This type is not supported by Java V1, Go V1, and older versions of the CLI.</p>
   * @public
   */
  AttributeValue: __DocumentType | undefined;
}

/**
 * <p>A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute.</p>
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
   * <p>The identifier issued to this resource by an external identity provider.</p>
   * @public
   */
  export interface ExternalIdMember {
    ExternalId: ExternalId;
    UniqueAttribute?: never;
    $unknown?: never;
  }

  /**
   * <p>An entity attribute that's unique to a specific entity.</p>
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
 * <p>An operation that applies to the requested group. This operation might add, replace, or remove an attribute.</p>
 * @public
 */
export interface AttributeOperation {
  /**
   * <p>A string representation of the path to a given attribute or sub-attribute. Supports JMESPath.</p>
   * @public
   */
  AttributePath: string | undefined;

  /**
   * <p>The value of the attribute. This is a <code>Document</code> type. This type is not supported by Java V1, Go V1, and older versions of the CLI.</p>
   * @public
   */
  AttributeValue?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface GetGroupIdRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute. For the unique attribute, the only valid path is <code> displayName</code>.</p>
   * @public
   */
  AlternateIdentifier: AlternateIdentifier | undefined;
}

/**
 * @public
 */
export interface GetGroupIdResponse {
  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;
}

/**
 * <p>An object containing the identifier of a group member.</p>
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
   * <p>An object containing the identifiers of resources that can be members.</p>
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
export interface GetGroupMembershipIdRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>An object that contains the identifier of a group member. Setting the <code>UserID</code> field to the specific identifier for a user indicates that the user is a member of the group.</p>
   * @public
   */
  MemberId: MemberId | undefined;
}

/**
 * @public
 */
export interface GetGroupMembershipIdResponse {
  /**
   * <p>The identifier for a <code>GroupMembership</code> in an identity store.</p>
   * @public
   */
  MembershipId: string | undefined;

  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;
}

/**
 * @public
 */
export interface GetUserIdRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute. For the unique attribute, the only valid paths are <code> userName</code> and <code>emails.value</code>.</p>
   * @public
   */
  AlternateIdentifier: AlternateIdentifier | undefined;
}

/**
 * @public
 */
export interface GetUserIdResponse {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a user in the identity store.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupMembershipRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>An object that contains the identifier of a group member. Setting the <code>UserID</code> field to the specific identifier for a user indicates that the user is a member of the group.</p>
   * @public
   */
  MemberId: MemberId | undefined;
}

/**
 * @public
 */
export interface CreateGroupMembershipResponse {
  /**
   * <p>The identifier for a newly created <code>GroupMembership</code> in an identity store.</p>
   * @public
   */
  MembershipId: string | undefined;

  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupMembershipRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a <code>GroupMembership</code> in an identity store.</p>
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
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a <code>GroupMembership</code> in an identity store.</p>
   * @public
   */
  MembershipId: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupMembershipResponse {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a <code>GroupMembership</code> in an identity store.</p>
   * @public
   */
  MembershipId: string | undefined;

  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>An object containing the identifier of a group member.</p>
   * @public
   */
  MemberId: MemberId | undefined;

  /**
   * <p>The date and time the group membership was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time the group membership was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The identifier of the user or system that created the group membership.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The identifier of the user or system that last updated the group membership.</p>
   * @public
   */
  UpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request. This parameter is used in all <code> List</code> requests to specify how many results to return in one page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token used for the <code>ListUsers</code>, <code>ListGroups</code> and <code> ListGroupMemberships</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the identifiers for a group, a group member, and a <code>GroupMembership</code> object in the identity store.</p>
 * @public
 */
export interface GroupMembership {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a <code>GroupMembership</code> object in an identity store.</p>
   * @public
   */
  MembershipId?: string | undefined;

  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>An object that contains the identifier of a group member. Setting the <code>UserID</code> field to the specific identifier for a user indicates that the user is a member of the group.</p>
   * @public
   */
  MemberId?: MemberId | undefined;

  /**
   * <p>The date and time the group membership was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time the group membership was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The identifier of the user or system that created the group membership.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The identifier of the user or system that last updated the group membership.</p>
   * @public
   */
  UpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsResponse {
  /**
   * <p>A list of <code>GroupMembership</code> objects in the group.</p>
   * @public
   */
  GroupMemberships: GroupMembership[] | undefined;

  /**
   * <p>The pagination token used for the <code>ListUsers</code>, <code>ListGroups</code>, and <code> ListGroupMemberships</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>A string containing the name of the group. This value is commonly displayed when the group is referenced. <code>Administrator</code> and <code>AWSAdministrators</code> are reserved names and can't be used for users or groups.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A string containing the description of the group.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * <p>The identifier of the newly created group in the identity store.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId: string | undefined;
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
   * <p>The globally unique identifier for the identity store, such as <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and <code>1234567890</code> is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupResponse {
  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The group’s display name value. The length limit is 1,024 characters. This value can consist of letters, accented characters, symbols, numbers, punctuation, tab, new line, carriage return, space, and nonbreaking space in this attribute. This value is specified at the time that the group is created and stored as an attribute of the group object in the identity store.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A list of <code>ExternalId</code> objects that contains the identifiers issued to this resource by an external identity provider.</p>
   * @public
   */
  ExternalIds?: ExternalId[] | undefined;

  /**
   * <p>A string containing a description of the group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time the group was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time the group was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The identifier of the user or system that created the group.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The identifier of the user or system that last updated the group.</p>
   * @public
   */
  UpdatedBy?: string | undefined;

  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;
}

/**
 * <p>A query filter used by <code>ListUsers</code> and <code>ListGroups</code>. This filter object provides the attribute name and attribute value to search users or groups.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The attribute path that is used to specify which attribute name to search. Length limit is 255 characters. For example, <code>UserName</code> is a valid attribute path for the <code> ListUsers</code> API, and <code>DisplayName</code> is a valid attribute path for the <code> ListGroups</code> API.</p>
   * @public
   */
  AttributePath: string | undefined;

  /**
   * <p>Represents the data for an attribute. Each attribute value is described as a name-value pair. </p>
   * @public
   */
  AttributeValue: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * <p>The globally unique identifier for the identity store, such as <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and <code>1234567890</code> is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request. This parameter is used in the <code> ListUsers</code> and <code>ListGroups</code> requests to specify how many results to return in one page. The length limit is 50 characters.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of <code>Filter</code> objects, which is used in the <code>ListUsers</code> and <code> ListGroups</code> requests.</p>
   *
   * @deprecated Using filters with ListGroups API is deprecated, please use GetGroupId API instead.
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>A group object that contains the metadata and attributes for a specified group.</p>
 * @public
 */
export interface Group {
  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The display name value for the group. The length limit is 1,024 characters. This value can consist of letters, accented characters, symbols, numbers, punctuation, tab, new line, carriage return, space, and nonbreaking space in this attribute. This value is specified at the time the group is created and stored as an attribute of the group object in the identity store.</p> <p>Prefix search supports a maximum of 1,000 characters for the string.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A list of <code>ExternalId</code> objects that contains the identifiers issued to this resource by an external identity provider.</p>
   * @public
   */
  ExternalIds?: ExternalId[] | undefined;

  /**
   * <p>A string containing a description of the specified group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time the group was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time the group was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The identifier of the user or system that created the group.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The identifier of the user or system that last updated the group.</p>
   * @public
   */
  UpdatedBy?: string | undefined;

  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * <p>A list of <code>Group</code> objects in the identity store.</p>
   * @public
   */
  Groups: Group[] | undefined;

  /**
   * <p>The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>A list of <code>AttributeOperation</code> objects to apply to the requested group. These operations might add, replace, or remove an attribute. For more information on the attributes that can be added, replaced, or removed, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html">Group</a>.</p>
   * @public
   */
  Operations: AttributeOperation[] | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResponse {}

/**
 * @public
 */
export interface IsMemberInGroupsRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>An object containing the identifier of a group member.</p>
   * @public
   */
  MemberId: MemberId | undefined;

  /**
   * <p>A list of identifiers for groups in the identity store.</p>
   * @public
   */
  GroupIds: string[] | undefined;
}

/**
 * <p>Indicates whether a resource is a member of a group in the identity store.</p>
 * @public
 */
export interface GroupMembershipExistenceResult {
  /**
   * <p>The identifier for a group in the identity store.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>An object that contains the identifier of a group member. Setting the <code>UserID</code> field to the specific identifier for a user indicates that the user is a member of the group.</p>
   * @public
   */
  MemberId?: MemberId | undefined;

  /**
   * <p>Indicates whether a membership relation exists or not.</p>
   * @public
   */
  MembershipExists?: boolean | undefined;
}

/**
 * @public
 */
export interface IsMemberInGroupsResponse {
  /**
   * <p>A list containing the results of membership existence checks.</p>
   * @public
   */
  Results: GroupMembershipExistenceResult[] | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsForMemberRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>An object that contains the identifier of a group member. Setting the <code>UserID</code> field to the specific identifier for a user indicates that the user is a member of the group.</p>
   * @public
   */
  MemberId: MemberId | undefined;

  /**
   * <p>The maximum number of results to be returned per request. This parameter is used in the <code> ListUsers</code> and <code>ListGroups</code> requests to specify how many results to return in one page. The length limit is 50 characters.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token used for the <code>ListUsers</code>, <code>ListGroups</code>, and <code> ListGroupMemberships</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsForMemberResponse {
  /**
   * <p>A list of <code>GroupMembership</code> objects in the group for a specified member.</p>
   * @public
   */
  GroupMemberships: GroupMembership[] | undefined;

  /**
   * <p>The pagination token used for the <code>ListUsers</code>, <code>ListGroups</code>, and <code> ListGroupMemberships</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The email address associated with the user.</p>
 * @public
 */
export interface Email {
  /**
   * <p>A string containing an email address. For example, "johndoe@amazon.com."</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>A string representing the type of address. For example, "Work."</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>A Boolean value representing whether this is the primary email address for the associated resource.</p>
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * <p>The full name of the user.</p>
 * @public
 */
export interface Name {
  /**
   * <p>A string containing a formatted version of the name for display.</p>
   * @public
   */
  Formatted?: string | undefined;

  /**
   * <p>The family name of the user.</p>
   * @public
   */
  FamilyName?: string | undefined;

  /**
   * <p>The given name of the user.</p>
   * @public
   */
  GivenName?: string | undefined;

  /**
   * <p>The middle name of the user.</p>
   * @public
   */
  MiddleName?: string | undefined;

  /**
   * <p>The honorific prefix of the user. For example, "Dr."</p>
   * @public
   */
  HonorificPrefix?: string | undefined;

  /**
   * <p>The honorific suffix of the user. For example, "M.D."</p>
   * @public
   */
  HonorificSuffix?: string | undefined;
}

/**
 * <p>The phone number associated with the user.</p>
 * @public
 */
export interface PhoneNumber {
  /**
   * <p>A string containing a phone number. For example, "8675309" or "+1 (800) 123-4567". </p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>A string representing the type of a phone number. For example, "Mobile."</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>A Boolean value representing whether this is the primary phone number for the associated resource.</p>
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * <p>Contains information about a user's photo. Users can have up to 3 photos, with one designated as primary. Supports common image formats, including jpg, jpeg, png, and gif.</p>
 * @public
 */
export interface Photo {
  /**
   * <p>The photo data or URL. Supported formats include jpg, jpeg, png, and gif. This field is required for all photo entries.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The type of photo. This field is optional and can be used to categorize different types of photos.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>A human-readable description of the photo for display purposes. This optional field provides context about the photo.</p>
   * @public
   */
  Display?: string | undefined;

  /**
   * <p>Specifies whether this is the user's primary photo. Default value is <code>false</code>. Only one photo can be designated as primary per user.</p>
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * <p>The role associated with the user.</p>
 * @public
 */
export interface Role {
  /**
   * <p>A string containing a role name. For example, "Researcher."</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>A string representing the type of role. For example, "Work."</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>A Boolean value representing whether this is the primary role for the associated resource.</p>
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store. <code>Administrator</code> and <code>AWSAdministrators</code> are reserved names and can't be used for users or groups.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>An object containing the name of the user. When used in IAM Identity Center, this parameter is required.</p>
   * @public
   */
  Name?: Name | undefined;

  /**
   * <p>A string containing the name of the user. This value is typically formatted for display when the user is referenced. For example, "John Doe." When used in IAM Identity Center, this parameter is required.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A string containing an alternate name for the user.</p>
   * @public
   */
  NickName?: string | undefined;

  /**
   * <p>A string containing a URL that might be associated with the user.</p>
   * @public
   */
  ProfileUrl?: string | undefined;

  /**
   * <p>A list of <code>Email</code> objects containing email addresses associated with the user.</p>
   * @public
   */
  Emails?: Email[] | undefined;

  /**
   * <p>A list of <code>Address</code> objects containing addresses associated with the user.</p>
   * @public
   */
  Addresses?: Address[] | undefined;

  /**
   * <p>A list of <code>PhoneNumber</code> objects containing phone numbers associated with the user.</p>
   * @public
   */
  PhoneNumbers?: PhoneNumber[] | undefined;

  /**
   * <p>A string indicating the type of user. Possible values are left unspecified. The value can vary based on your specific use case.</p>
   * @public
   */
  UserType?: string | undefined;

  /**
   * <p>A string containing the title of the user. Possible values are left unspecified. The value can vary based on your specific use case.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>A string containing the preferred language of the user. For example, "American English" or "en-us."</p>
   * @public
   */
  PreferredLanguage?: string | undefined;

  /**
   * <p>A string containing the geographical region or location of the user.</p>
   * @public
   */
  Locale?: string | undefined;

  /**
   * <p>A string containing the time zone of the user.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>A list of photos associated with the user. You can add up to 3 photos per user. Each photo can include a value, type, display name, and primary designation.</p>
   * @public
   */
  Photos?: Photo[] | undefined;

  /**
   * <p>The user's personal website or blog URL. This field allows users to provide a link to their personal or professional website.</p>
   * @public
   */
  Website?: string | undefined;

  /**
   * <p>The user's birthdate in YYYY-MM-DD format. This field supports standard date format for storing personal information.</p>
   * @public
   */
  Birthdate?: string | undefined;

  /**
   * <p>A list of <code>Role</code> objects containing roles associated with the user.</p>
   * @public
   */
  Roles?: Role[] | undefined;

  /**
   * <p>A map with additional attribute extensions for the user. Each map key corresponds to an extension name, while map values represent extension data in <code>Document</code> type (not supported by Java V1, Go V1 and older versions of the CLI). <code>aws:identitystore:enterprise</code> is the only supported extension name.</p>
   * @public
   */
  Extensions?: Record<string, __DocumentType> | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier of the newly created user in the identity store.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a user in the identity store.</p>
   * @public
   */
  UserId: string | undefined;
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
   * <p>The globally unique identifier for the identity store, such as <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and <code>1234567890</code> is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a user in the identity store.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>A collection of extension names indicating what extensions the service should retrieve alongside other user attributes. <code>aws:identitystore:enterprise</code> is the only supported extension name.</p>
   * @public
   */
  Extensions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a user in the identity store.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>A list of <code>ExternalId</code> objects that contains the identifiers issued to this resource by an external identity provider.</p>
   * @public
   */
  ExternalIds?: ExternalId[] | undefined;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  Name?: Name | undefined;

  /**
   * <p>The display name of the user.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>An alternative descriptive name for the user.</p>
   * @public
   */
  NickName?: string | undefined;

  /**
   * <p>A URL link for the user's profile.</p>
   * @public
   */
  ProfileUrl?: string | undefined;

  /**
   * <p>The email address of the user.</p>
   * @public
   */
  Emails?: Email[] | undefined;

  /**
   * <p>The physical address of the user.</p>
   * @public
   */
  Addresses?: Address[] | undefined;

  /**
   * <p>A list of <code>PhoneNumber</code> objects associated with a user.</p>
   * @public
   */
  PhoneNumbers?: PhoneNumber[] | undefined;

  /**
   * <p>A string indicating the type of user.</p>
   * @public
   */
  UserType?: string | undefined;

  /**
   * <p>A string containing the title of the user.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The preferred language of the user.</p>
   * @public
   */
  PreferredLanguage?: string | undefined;

  /**
   * <p>A string containing the geographical region or location of the user.</p>
   * @public
   */
  Locale?: string | undefined;

  /**
   * <p>The time zone for a user.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>The current status of the user account.</p>
   * @public
   */
  UserStatus?: UserStatus | undefined;

  /**
   * <p>A list of photos associated with the user. Returns up to 3 photos with their associated metadata including type, display name, and primary designation.</p>
   * @public
   */
  Photos?: Photo[] | undefined;

  /**
   * <p>The user's personal website or blog URL. Returns the stored website information for the user.</p>
   * @public
   */
  Website?: string | undefined;

  /**
   * <p>The user's birthdate in YYYY-MM-DD format. This field returns the stored birthdate information for the user.</p>
   * @public
   */
  Birthdate?: string | undefined;

  /**
   * <p>The roles of the user.</p>
   * @public
   */
  Roles?: Role[] | undefined;

  /**
   * <p>The date and time the user was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The identifier of the user or system that created the user.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time the user was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The identifier of the user or system that last updated the user.</p>
   * @public
   */
  UpdatedBy?: string | undefined;

  /**
   * <p>A map of explicitly requested attribute extensions associated with the user. Not populated if the user has no requested extensions.</p>
   * @public
   */
  Extensions?: Record<string, __DocumentType> | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The globally unique identifier for the identity store, such as <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and <code>1234567890</code> is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>A collection of extension names indicating what extensions the service should retrieve alongside other user attributes. <code>aws:identitystore:enterprise</code> is the only supported extension name.</p>
   * @public
   */
  Extensions?: string[] | undefined;

  /**
   * <p>The maximum number of results to be returned per request. This parameter is used in the <code> ListUsers</code> and <code>ListGroups</code> requests to specify how many results to return in one page. The length limit is 50 characters.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of <code>Filter</code> objects, which is used in the <code>ListUsers</code> and <code> ListGroups</code> requests. </p>
   *
   * @deprecated Using filters with ListUsers API is deprecated, please use GetGroupId API instead.
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>A user object that contains the metadata and attributes for a specified user.</p>
 * @public
 */
export interface User {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a user in the identity store.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>A list of <code>ExternalId</code> objects that contains the identifiers issued to this resource by an external identity provider.</p>
   * @public
   */
  ExternalIds?: ExternalId[] | undefined;

  /**
   * <p>An object containing the name of the user.</p>
   * @public
   */
  Name?: Name | undefined;

  /**
   * <p>A string containing the name of the user that is formatted for display when the user is referenced. For example, "John Doe."</p> <p>Prefix search supports a maximum of 1,000 characters for the string.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A string containing an alternate name for the user.</p>
   * @public
   */
  NickName?: string | undefined;

  /**
   * <p>A string containing a URL that might be associated with the user.</p>
   * @public
   */
  ProfileUrl?: string | undefined;

  /**
   * <p>A list of <code>Email</code> objects containing email addresses associated with the user.</p>
   * @public
   */
  Emails?: Email[] | undefined;

  /**
   * <p>A list of <code>Address</code> objects containing addresses associated with the user.</p>
   * @public
   */
  Addresses?: Address[] | undefined;

  /**
   * <p>A list of <code>PhoneNumber</code> objects containing phone numbers associated with the user.</p>
   * @public
   */
  PhoneNumbers?: PhoneNumber[] | undefined;

  /**
   * <p>A string indicating the type of user. Possible values are left unspecified. The value can vary based on your specific use case.</p>
   * @public
   */
  UserType?: string | undefined;

  /**
   * <p>A string containing the title of the user. Possible values are left unspecified. The value can vary based on your specific use case.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>A string containing the preferred language of the user. For example, "American English" or "en-us."</p>
   * @public
   */
  PreferredLanguage?: string | undefined;

  /**
   * <p>A string containing the geographical region or location of the user.</p>
   * @public
   */
  Locale?: string | undefined;

  /**
   * <p>A string containing the time zone of the user.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>The current status of the user account.</p>
   * @public
   */
  UserStatus?: UserStatus | undefined;

  /**
   * <p>A list of photos associated with the user. Users can have up to 3 photos with metadata including type, display name, and primary designation.</p>
   * @public
   */
  Photos?: Photo[] | undefined;

  /**
   * <p>The user's personal website or blog URL. This field stores website information for personal or professional use.</p>
   * @public
   */
  Website?: string | undefined;

  /**
   * <p>The user's birthdate in YYYY-MM-DD format. This field stores personal birthdate information for the user.</p>
   * @public
   */
  Birthdate?: string | undefined;

  /**
   * <p>A list of <code>Role</code> objects containing roles associated with the user.</p>
   * @public
   */
  Roles?: Role[] | undefined;

  /**
   * <p>The date and time the user was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The identifier of the user or system that created the user.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time the user was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The identifier of the user or system that last updated the user.</p>
   * @public
   */
  UpdatedBy?: string | undefined;

  /**
   * <p>A map of explicitly requested attribute extensions associated with the user. Not populated if the user has no requested extensions.</p>
   * @public
   */
  Extensions?: Record<string, __DocumentType> | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>A list of <code>User</code> objects in the identity store.</p>
   * @public
   */
  Users: User[] | undefined;

  /**
   * <p>The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>The globally unique identifier for the identity store.</p>
   * @public
   */
  IdentityStoreId: string | undefined;

  /**
   * <p>The identifier for a user in the identity store.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>A list of <code>AttributeOperation</code> objects to apply to the requested user. These operations might add, replace, or remove an attribute. For more information on the attributes that can be added, replaced, or removed, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html">User</a>.</p>
   * @public
   */
  Operations: AttributeOperation[] | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {}
