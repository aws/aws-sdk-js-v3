import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateDelegateToResourceRequest {
  __type?: "AssociateDelegateToResourceRequest";
  /**
   * <p>The member (user or group) to associate to the resource.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The organization under which the resource exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The resource for which members (users or groups) are associated.</p>
   */
  ResourceId: string | undefined;
}

export namespace AssociateDelegateToResourceRequest {
  export const filterSensitiveLog = (obj: AssociateDelegateToResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateDelegateToResourceRequest =>
    __isa(o, "AssociateDelegateToResourceRequest");
}

export interface AssociateDelegateToResourceResponse {
  __type?: "AssociateDelegateToResourceResponse";
}

export namespace AssociateDelegateToResourceResponse {
  export const filterSensitiveLog = (obj: AssociateDelegateToResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateDelegateToResourceResponse =>
    __isa(o, "AssociateDelegateToResourceResponse");
}

export interface AssociateMemberToGroupRequest {
  __type?: "AssociateMemberToGroupRequest";
  /**
   * <p>The group to which the member (user or group) is associated.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The member (user or group) to associate to the group.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace AssociateMemberToGroupRequest {
  export const filterSensitiveLog = (obj: AssociateMemberToGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateMemberToGroupRequest => __isa(o, "AssociateMemberToGroupRequest");
}

export interface AssociateMemberToGroupResponse {
  __type?: "AssociateMemberToGroupResponse";
}

export namespace AssociateMemberToGroupResponse {
  export const filterSensitiveLog = (obj: AssociateMemberToGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateMemberToGroupResponse => __isa(o, "AssociateMemberToGroupResponse");
}

/**
 * <p>At least one delegate must be associated to the resource to disable automatic replies
 *          from the resource.</p>
 */
export interface BookingOptions {
  __type?: "BookingOptions";
  /**
   * <p>The resource's ability to automatically reply to requests. If disabled, delegates must be associated to the resource.</p>
   */
  AutoAcceptRequests?: boolean;

  /**
   * <p>The resource's ability to automatically decline any conflicting requests.</p>
   */
  AutoDeclineConflictingRequests?: boolean;

  /**
   * <p>The resource's ability to automatically decline any recurring requests.</p>
   */
  AutoDeclineRecurringRequests?: boolean;
}

export namespace BookingOptions {
  export const filterSensitiveLog = (obj: BookingOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BookingOptions => __isa(o, "BookingOptions");
}

export interface CreateAliasRequest {
  __type?: "CreateAliasRequest";
  /**
   * <p>The alias to add to the member set.</p>
   */
  Alias: string | undefined;

  /**
   * <p>The member (user or group) to which this alias is added.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The organization under which the member (user or group) exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace CreateAliasRequest {
  export const filterSensitiveLog = (obj: CreateAliasRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAliasRequest => __isa(o, "CreateAliasRequest");
}

export interface CreateAliasResponse {
  __type?: "CreateAliasResponse";
}

export namespace CreateAliasResponse {
  export const filterSensitiveLog = (obj: CreateAliasResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAliasResponse => __isa(o, "CreateAliasResponse");
}

export interface CreateGroupRequest {
  __type?: "CreateGroupRequest";
  /**
   * <p>The name of the group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The organization under which the group is to be created.</p>
   */
  OrganizationId: string | undefined;
}

export namespace CreateGroupRequest {
  export const filterSensitiveLog = (obj: CreateGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateGroupRequest => __isa(o, "CreateGroupRequest");
}

export interface CreateGroupResponse {
  __type?: "CreateGroupResponse";
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId?: string;
}

export namespace CreateGroupResponse {
  export const filterSensitiveLog = (obj: CreateGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateGroupResponse => __isa(o, "CreateGroupResponse");
}

export interface CreateResourceRequest {
  __type?: "CreateResourceRequest";
  /**
   * <p>The name of the new resource.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier associated with the organization for which the resource is
   *          created.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The type of the new resource. The available types are <code>equipment</code> and
   *             <code>room</code>.</p>
   */
  Type: ResourceType | string | undefined;
}

export namespace CreateResourceRequest {
  export const filterSensitiveLog = (obj: CreateResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateResourceRequest => __isa(o, "CreateResourceRequest");
}

export interface CreateResourceResponse {
  __type?: "CreateResourceResponse";
  /**
   * <p>The identifier of the new resource.</p>
   */
  ResourceId?: string;
}

export namespace CreateResourceResponse {
  export const filterSensitiveLog = (obj: CreateResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateResourceResponse => __isa(o, "CreateResourceResponse");
}

export interface CreateUserRequest {
  __type?: "CreateUserRequest";
  /**
   * <p>The display name for the new user.</p>
   */
  DisplayName: string | undefined;

  /**
   * <p>The name for the new user. Simple AD or AD Connector user names have a maximum length of 20. All others have a maximum length of 64.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the organization for which the user is created.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The password for the new user.</p>
   */
  Password: string | undefined;
}

export namespace CreateUserRequest {
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateUserRequest => __isa(o, "CreateUserRequest");
}

export interface CreateUserResponse {
  __type?: "CreateUserResponse";
  /**
   * <p>The identifier for the new user.</p>
   */
  UserId?: string;
}

export namespace CreateUserResponse {
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateUserResponse => __isa(o, "CreateUserResponse");
}

/**
 * <p>The name of the attribute, which is one of the values defined in the UserAttribute
 *          enumeration.</p>
 */
export interface Delegate {
  __type?: "Delegate";
  /**
   * <p>The identifier for the user or group associated as the resource's delegate.</p>
   */
  Id: string | undefined;

  /**
   * <p>The type of the delegate: user or group.</p>
   */
  Type: MemberType | string | undefined;
}

export namespace Delegate {
  export const filterSensitiveLog = (obj: Delegate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Delegate => __isa(o, "Delegate");
}

export interface DeleteAliasRequest {
  __type?: "DeleteAliasRequest";
  /**
   * <p>The aliases to be removed from the user's set of aliases. Duplicate entries in the
   *          list are collapsed into single entries (the list is transformed into a set).</p>
   */
  Alias: string | undefined;

  /**
   * <p>The identifier for the member (user or group) from which to have the aliases
   *          removed.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier for the organization under which the user exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeleteAliasRequest {
  export const filterSensitiveLog = (obj: DeleteAliasRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAliasRequest => __isa(o, "DeleteAliasRequest");
}

export interface DeleteAliasResponse {
  __type?: "DeleteAliasResponse";
}

export namespace DeleteAliasResponse {
  export const filterSensitiveLog = (obj: DeleteAliasResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAliasResponse => __isa(o, "DeleteAliasResponse");
}

export interface DeleteGroupRequest {
  __type?: "DeleteGroupRequest";
  /**
   * <p>The identifier of the group to be deleted.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The organization that contains the group.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeleteGroupRequest {
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteGroupRequest => __isa(o, "DeleteGroupRequest");
}

export interface DeleteGroupResponse {
  __type?: "DeleteGroupResponse";
}

export namespace DeleteGroupResponse {
  export const filterSensitiveLog = (obj: DeleteGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteGroupResponse => __isa(o, "DeleteGroupResponse");
}

export interface DeleteMailboxPermissionsRequest {
  __type?: "DeleteMailboxPermissionsRequest";
  /**
   * <p>The identifier of the member (user or group)that owns the mailbox.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier of the member (user or group) for which to delete granted
   *          permissions.</p>
   */
  GranteeId: string | undefined;

  /**
   * <p>The identifier of the organization under which the member (user or group)
   *          exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeleteMailboxPermissionsRequest {
  export const filterSensitiveLog = (obj: DeleteMailboxPermissionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMailboxPermissionsRequest => __isa(o, "DeleteMailboxPermissionsRequest");
}

export interface DeleteMailboxPermissionsResponse {
  __type?: "DeleteMailboxPermissionsResponse";
}

export namespace DeleteMailboxPermissionsResponse {
  export const filterSensitiveLog = (obj: DeleteMailboxPermissionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMailboxPermissionsResponse => __isa(o, "DeleteMailboxPermissionsResponse");
}

export interface DeleteResourceRequest {
  __type?: "DeleteResourceRequest";
  /**
   * <p>The identifier associated with the organization from which the resource is
   *          deleted.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be deleted.</p>
   */
  ResourceId: string | undefined;
}

export namespace DeleteResourceRequest {
  export const filterSensitiveLog = (obj: DeleteResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteResourceRequest => __isa(o, "DeleteResourceRequest");
}

export interface DeleteResourceResponse {
  __type?: "DeleteResourceResponse";
}

export namespace DeleteResourceResponse {
  export const filterSensitiveLog = (obj: DeleteResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteResourceResponse => __isa(o, "DeleteResourceResponse");
}

export interface DeleteUserRequest {
  __type?: "DeleteUserRequest";
  /**
   * <p>The organization that contains the user to be deleted.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user to be deleted.</p>
   */
  UserId: string | undefined;
}

export namespace DeleteUserRequest {
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteUserRequest => __isa(o, "DeleteUserRequest");
}

export interface DeleteUserResponse {
  __type?: "DeleteUserResponse";
}

export namespace DeleteUserResponse {
  export const filterSensitiveLog = (obj: DeleteUserResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteUserResponse => __isa(o, "DeleteUserResponse");
}

export interface DeregisterFromWorkMailRequest {
  __type?: "DeregisterFromWorkMailRequest";
  /**
   * <p>The identifier for the member (user or group) to be updated.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier for the organization under which the Amazon WorkMail entity
   *          exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeregisterFromWorkMailRequest {
  export const filterSensitiveLog = (obj: DeregisterFromWorkMailRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeregisterFromWorkMailRequest => __isa(o, "DeregisterFromWorkMailRequest");
}

export interface DeregisterFromWorkMailResponse {
  __type?: "DeregisterFromWorkMailResponse";
}

export namespace DeregisterFromWorkMailResponse {
  export const filterSensitiveLog = (obj: DeregisterFromWorkMailResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeregisterFromWorkMailResponse => __isa(o, "DeregisterFromWorkMailResponse");
}

export interface DescribeGroupRequest {
  __type?: "DescribeGroupRequest";
  /**
   * <p>The identifier for the group to be described.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DescribeGroupRequest {
  export const filterSensitiveLog = (obj: DescribeGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeGroupRequest => __isa(o, "DescribeGroupRequest");
}

export interface DescribeGroupResponse {
  __type?: "DescribeGroupResponse";
  /**
   * <p>The date and time when a user was deregistered from WorkMail, in UNIX epoch time
   *          format.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The email of the described group.</p>
   */
  Email?: string;

  /**
   * <p>The date and time when a user was registered to WorkMail, in UNIX epoch time
   *          format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the described group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the described group.</p>
   */
  Name?: string;

  /**
   * <p>The state of the user: enabled (registered to Amazon WorkMail) or disabled
   *          (deregistered or never registered to WorkMail).</p>
   */
  State?: EntityState | string;
}

export namespace DescribeGroupResponse {
  export const filterSensitiveLog = (obj: DescribeGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeGroupResponse => __isa(o, "DescribeGroupResponse");
}

export interface DescribeOrganizationRequest {
  __type?: "DescribeOrganizationRequest";
  /**
   * <p>The identifier for the organization to be described.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DescribeOrganizationRequest {
  export const filterSensitiveLog = (obj: DescribeOrganizationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeOrganizationRequest => __isa(o, "DescribeOrganizationRequest");
}

export interface DescribeOrganizationResponse {
  __type?: "DescribeOrganizationResponse";
  /**
   * <p>The alias for an organization.</p>
   */
  Alias?: string;

  /**
   * <p>The date at which the organization became usable in the WorkMail context, in UNIX epoch
   *          time format.</p>
   */
  CompletedDate?: Date;

  /**
   * <p>The default mail domain associated with the organization.</p>
   */
  DefaultMailDomain?: string;

  /**
   * <p>The identifier for the directory associated with an Amazon WorkMail
   *          organization.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The type of directory associated with the WorkMail organization.</p>
   */
  DirectoryType?: string;

  /**
   * <p>(Optional) The error message indicating if unexpected behavior was encountered with
   *          regards to the organization.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The identifier of an organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The state of an organization.</p>
   */
  State?: string;
}

export namespace DescribeOrganizationResponse {
  export const filterSensitiveLog = (obj: DescribeOrganizationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeOrganizationResponse => __isa(o, "DescribeOrganizationResponse");
}

export interface DescribeResourceRequest {
  __type?: "DescribeResourceRequest";
  /**
   * <p>The identifier associated with the organization for which the resource is
   *          described.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be described.</p>
   */
  ResourceId: string | undefined;
}

export namespace DescribeResourceRequest {
  export const filterSensitiveLog = (obj: DescribeResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeResourceRequest => __isa(o, "DescribeResourceRequest");
}

export interface DescribeResourceResponse {
  __type?: "DescribeResourceResponse";
  /**
   * <p>The booking options for the described resource.</p>
   */
  BookingOptions?: BookingOptions;

  /**
   * <p>The date and time when a resource was disabled from WorkMail, in UNIX epoch time
   *          format.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The email of the described resource.</p>
   */
  Email?: string;

  /**
   * <p>The date and time when a resource was enabled for WorkMail, in UNIX epoch time
   *          format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The name of the described resource.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the described resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The state of the resource: enabled (registered to Amazon WorkMail) or disabled
   *          (deregistered or never registered to WorkMail).</p>
   */
  State?: EntityState | string;

  /**
   * <p>The type of the described resource.</p>
   */
  Type?: ResourceType | string;
}

export namespace DescribeResourceResponse {
  export const filterSensitiveLog = (obj: DescribeResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeResourceResponse => __isa(o, "DescribeResourceResponse");
}

export interface DescribeUserRequest {
  __type?: "DescribeUserRequest";
  /**
   * <p>The identifier for the organization under which the user exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the user to be described.</p>
   */
  UserId: string | undefined;
}

export namespace DescribeUserRequest {
  export const filterSensitiveLog = (obj: DescribeUserRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeUserRequest => __isa(o, "DescribeUserRequest");
}

export interface DescribeUserResponse {
  __type?: "DescribeUserResponse";
  /**
   * <p>The date and time at which the user was disabled for Amazon WorkMail usage, in UNIX epoch time format.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The email of the user.</p>
   */
  Email?: string;

  /**
   * <p>The date and time at which the user was enabled for Amazon WorkMail usage, in UNIX epoch time format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The name for the user.</p>
   */
  Name?: string;

  /**
   * <p>The state of a user: enabled (registered to Amazon WorkMail) or disabled
   *          (deregistered or never registered to WorkMail).</p>
   */
  State?: EntityState | string;

  /**
   * <p>The identifier for the described user.</p>
   */
  UserId?: string;

  /**
   * <p>In certain cases, other entities are modeled as users. If interoperability is
   *          enabled, resources are imported into Amazon WorkMail as users. Because different
   *          WorkMail organizations rely on different directory types, administrators can distinguish
   *          between an unregistered user (account is disabled and has a user role) and the directory
   *          administrators. The values are USER, RESOURCE, and SYSTEM_USER.</p>
   */
  UserRole?: UserRole | string;
}

export namespace DescribeUserResponse {
  export const filterSensitiveLog = (obj: DescribeUserResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeUserResponse => __isa(o, "DescribeUserResponse");
}

/**
 * <p>The directory service doesn't recognize the credentials supplied by
 *          WorkMail.</p>
 */
export interface DirectoryServiceAuthenticationFailedException extends __SmithyException, $MetadataBearer {
  name: "DirectoryServiceAuthenticationFailedException";
  $fault: "client";
  Message?: string;
}

export namespace DirectoryServiceAuthenticationFailedException {
  export const filterSensitiveLog = (obj: DirectoryServiceAuthenticationFailedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DirectoryServiceAuthenticationFailedException =>
    __isa(o, "DirectoryServiceAuthenticationFailedException");
}

/**
 * <p>The directory on which you are trying to perform operations isn't
 *          available.</p>
 */
export interface DirectoryUnavailableException extends __SmithyException, $MetadataBearer {
  name: "DirectoryUnavailableException";
  $fault: "client";
  Message?: string;
}

export namespace DirectoryUnavailableException {
  export const filterSensitiveLog = (obj: DirectoryUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DirectoryUnavailableException => __isa(o, "DirectoryUnavailableException");
}

export interface DisassociateDelegateFromResourceRequest {
  __type?: "DisassociateDelegateFromResourceRequest";
  /**
   * <p>The identifier for the member (user, group) to be removed from the resource's delegates.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier for the organization under which the resource exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource from which delegates' set members are removed. </p>
   */
  ResourceId: string | undefined;
}

export namespace DisassociateDelegateFromResourceRequest {
  export const filterSensitiveLog = (obj: DisassociateDelegateFromResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateDelegateFromResourceRequest =>
    __isa(o, "DisassociateDelegateFromResourceRequest");
}

export interface DisassociateDelegateFromResourceResponse {
  __type?: "DisassociateDelegateFromResourceResponse";
}

export namespace DisassociateDelegateFromResourceResponse {
  export const filterSensitiveLog = (obj: DisassociateDelegateFromResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateDelegateFromResourceResponse =>
    __isa(o, "DisassociateDelegateFromResourceResponse");
}

export interface DisassociateMemberFromGroupRequest {
  __type?: "DisassociateMemberFromGroupRequest";
  /**
   * <p>The identifier for the group from which members are removed.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The identifier for the member to be removed to the group.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DisassociateMemberFromGroupRequest {
  export const filterSensitiveLog = (obj: DisassociateMemberFromGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateMemberFromGroupRequest =>
    __isa(o, "DisassociateMemberFromGroupRequest");
}

export interface DisassociateMemberFromGroupResponse {
  __type?: "DisassociateMemberFromGroupResponse";
}

export namespace DisassociateMemberFromGroupResponse {
  export const filterSensitiveLog = (obj: DisassociateMemberFromGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateMemberFromGroupResponse =>
    __isa(o, "DisassociateMemberFromGroupResponse");
}

/**
 * <p>The email address that you're trying to assign is already created for a different
 *          user, group, or resource.</p>
 */
export interface EmailAddressInUseException extends __SmithyException, $MetadataBearer {
  name: "EmailAddressInUseException";
  $fault: "client";
  Message?: string;
}

export namespace EmailAddressInUseException {
  export const filterSensitiveLog = (obj: EmailAddressInUseException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmailAddressInUseException => __isa(o, "EmailAddressInUseException");
}

/**
 * <p>The user, group, or resource that you're trying to register is already registered.</p>
 */
export interface EntityAlreadyRegisteredException extends __SmithyException, $MetadataBearer {
  name: "EntityAlreadyRegisteredException";
  $fault: "client";
  Message?: string;
}

export namespace EntityAlreadyRegisteredException {
  export const filterSensitiveLog = (obj: EntityAlreadyRegisteredException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityAlreadyRegisteredException => __isa(o, "EntityAlreadyRegisteredException");
}

/**
 * <p>The identifier supplied for the user, group, or resource does not
 *          exist in your organization.</p>
 */
export interface EntityNotFoundException extends __SmithyException, $MetadataBearer {
  name: "EntityNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace EntityNotFoundException {
  export const filterSensitiveLog = (obj: EntityNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityNotFoundException => __isa(o, "EntityNotFoundException");
}

export enum EntityState {
  DELETED = "DELETED",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 */
export interface EntityStateException extends __SmithyException, $MetadataBearer {
  name: "EntityStateException";
  $fault: "client";
  Message?: string;
}

export namespace EntityStateException {
  export const filterSensitiveLog = (obj: EntityStateException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityStateException => __isa(o, "EntityStateException");
}

export interface GetMailboxDetailsRequest {
  __type?: "GetMailboxDetailsRequest";
  /**
   * <p>The identifier for the organization that contains the user whose mailbox details are
   *          being requested.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the user whose mailbox details are being requested.</p>
   */
  UserId: string | undefined;
}

export namespace GetMailboxDetailsRequest {
  export const filterSensitiveLog = (obj: GetMailboxDetailsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMailboxDetailsRequest => __isa(o, "GetMailboxDetailsRequest");
}

export interface GetMailboxDetailsResponse {
  __type?: "GetMailboxDetailsResponse";
  /**
   * <p>The maximum allowed mailbox size, in MB, for the specified user.</p>
   */
  MailboxQuota?: number;

  /**
   * <p>The current mailbox size, in MB, for the specified user.</p>
   */
  MailboxSize?: number;
}

export namespace GetMailboxDetailsResponse {
  export const filterSensitiveLog = (obj: GetMailboxDetailsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMailboxDetailsResponse => __isa(o, "GetMailboxDetailsResponse");
}

/**
 * <p>The representation of an Amazon WorkMail group.</p>
 */
export interface Group {
  __type?: "Group";
  /**
   * <p>The date indicating when the group was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The email of the group.</p>
   */
  Email?: string;

  /**
   * <p>The date indicating when the group was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the group.</p>
   */
  Id?: string;

  /**
   * <p>The name of the group.</p>
   */
  Name?: string;

  /**
   * <p>The state of the group, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;
}

export namespace Group {
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Group => __isa(o, "Group");
}

/**
 * <p>The configuration for a resource isn't valid. A resource must either be able to
 *          auto-respond to requests or have at least one delegate associated that can do so on its
 *          behalf.</p>
 */
export interface InvalidConfigurationException extends __SmithyException, $MetadataBearer {
  name: "InvalidConfigurationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidConfigurationException {
  export const filterSensitiveLog = (obj: InvalidConfigurationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidConfigurationException => __isa(o, "InvalidConfigurationException");
}

/**
 * <p>One or more of the input parameters don't match the service's restrictions.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidParameterException => __isa(o, "InvalidParameterException");
}

/**
 * <p>The supplied password doesn't match the minimum security constraints, such as length
 *          or use of special characters.</p>
 */
export interface InvalidPasswordException extends __SmithyException, $MetadataBearer {
  name: "InvalidPasswordException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPasswordException {
  export const filterSensitiveLog = (obj: InvalidPasswordException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidPasswordException => __isa(o, "InvalidPasswordException");
}

export interface ListAliasesRequest {
  __type?: "ListAliasesRequest";
  /**
   * <p>The identifier for the entity for which to list the aliases.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization under which the entity exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListAliasesRequest {
  export const filterSensitiveLog = (obj: ListAliasesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAliasesRequest => __isa(o, "ListAliasesRequest");
}

export interface ListAliasesResponse {
  __type?: "ListAliasesResponse";
  /**
   * <p>The entity's paginated aliases.</p>
   */
  Aliases?: string[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace ListAliasesResponse {
  export const filterSensitiveLog = (obj: ListAliasesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAliasesResponse => __isa(o, "ListAliasesResponse");
}

export interface ListGroupMembersRequest {
  __type?: "ListGroupMembersRequest";
  /**
   * <p>The identifier for the group to which the members (users or groups) are associated.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p> The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListGroupMembersRequest {
  export const filterSensitiveLog = (obj: ListGroupMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListGroupMembersRequest => __isa(o, "ListGroupMembersRequest");
}

export interface ListGroupMembersResponse {
  __type?: "ListGroupMembersResponse";
  /**
   * <p>The members associated to the group.</p>
   */
  Members?: Member[];

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;
}

export namespace ListGroupMembersResponse {
  export const filterSensitiveLog = (obj: ListGroupMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListGroupMembersResponse => __isa(o, "ListGroupMembersResponse");
}

export interface ListGroupsRequest {
  __type?: "ListGroupsRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization under which the groups exist.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListGroupsRequest {
  export const filterSensitiveLog = (obj: ListGroupsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListGroupsRequest => __isa(o, "ListGroupsRequest");
}

export interface ListGroupsResponse {
  __type?: "ListGroupsResponse";
  /**
   * <p>The overview of groups for an organization.</p>
   */
  Groups?: Group[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace ListGroupsResponse {
  export const filterSensitiveLog = (obj: ListGroupsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListGroupsResponse => __isa(o, "ListGroupsResponse");
}

export interface ListMailboxPermissionsRequest {
  __type?: "ListMailboxPermissionsRequest";
  /**
   * <p>The identifier of the user, group, or resource for which to list mailbox
   *          permissions.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier of the organization under which the user, group, or resource
   *          exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListMailboxPermissionsRequest {
  export const filterSensitiveLog = (obj: ListMailboxPermissionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMailboxPermissionsRequest => __isa(o, "ListMailboxPermissionsRequest");
}

export interface ListMailboxPermissionsResponse {
  __type?: "ListMailboxPermissionsResponse";
  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>One page of the user, group, or resource mailbox permissions.</p>
   */
  Permissions?: Permission[];
}

export namespace ListMailboxPermissionsResponse {
  export const filterSensitiveLog = (obj: ListMailboxPermissionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMailboxPermissionsResponse => __isa(o, "ListMailboxPermissionsResponse");
}

export interface ListOrganizationsRequest {
  __type?: "ListOrganizationsRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;
}

export namespace ListOrganizationsRequest {
  export const filterSensitiveLog = (obj: ListOrganizationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListOrganizationsRequest => __isa(o, "ListOrganizationsRequest");
}

export interface ListOrganizationsResponse {
  __type?: "ListOrganizationsResponse";
  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The overview of owned organizations presented as a list of organization summaries.</p>
   */
  OrganizationSummaries?: OrganizationSummary[];
}

export namespace ListOrganizationsResponse {
  export const filterSensitiveLog = (obj: ListOrganizationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListOrganizationsResponse => __isa(o, "ListOrganizationsResponse");
}

export interface ListResourceDelegatesRequest {
  __type?: "ListResourceDelegatesRequest";
  /**
   * <p>The number of maximum results in a page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token used to paginate through the delegates associated with a resource.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization that contains the resource for which delegates
   *          are listed.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the resource whose delegates are listed.</p>
   */
  ResourceId: string | undefined;
}

export namespace ListResourceDelegatesRequest {
  export const filterSensitiveLog = (obj: ListResourceDelegatesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourceDelegatesRequest => __isa(o, "ListResourceDelegatesRequest");
}

export interface ListResourceDelegatesResponse {
  __type?: "ListResourceDelegatesResponse";
  /**
   * <p>One page of the resource's delegates.</p>
   */
  Delegates?: Delegate[];

  /**
   * <p>The token used to paginate through the delegates associated with a resource. While
   *          results are still available, it has an associated value. When the last page is reached, the
   *          token is empty. </p>
   */
  NextToken?: string;
}

export namespace ListResourceDelegatesResponse {
  export const filterSensitiveLog = (obj: ListResourceDelegatesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourceDelegatesResponse => __isa(o, "ListResourceDelegatesResponse");
}

export interface ListResourcesRequest {
  __type?: "ListResourcesRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization under which the resources exist.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListResourcesRequest {
  export const filterSensitiveLog = (obj: ListResourcesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourcesRequest => __isa(o, "ListResourcesRequest");
}

export interface ListResourcesResponse {
  __type?: "ListResourcesResponse";
  /**
   * <p> The token used to paginate through all the organization's resources. While results
   *          are still available, it has an associated value. When the last page is reached, the token
   *          is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>One page of the organization's resource representation.</p>
   */
  Resources?: Resource[];
}

export namespace ListResourcesResponse {
  export const filterSensitiveLog = (obj: ListResourcesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourcesResponse => __isa(o, "ListResourcesResponse");
}

export interface ListUsersRequest {
  __type?: "ListUsersRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization under which the users exist.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListUsersRequest {
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListUsersRequest => __isa(o, "ListUsersRequest");
}

export interface ListUsersResponse {
  __type?: "ListUsersResponse";
  /**
   * <p> The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The overview of users for an organization.</p>
   */
  Users?: User[];
}

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListUsersResponse => __isa(o, "ListUsersResponse");
}

/**
 * <p>For an email or alias to be created in Amazon WorkMail, the included domain must be
 *          defined in the organization.</p>
 */
export interface MailDomainNotFoundException extends __SmithyException, $MetadataBearer {
  name: "MailDomainNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace MailDomainNotFoundException {
  export const filterSensitiveLog = (obj: MailDomainNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MailDomainNotFoundException => __isa(o, "MailDomainNotFoundException");
}

/**
 * <p>After a domain has been added to the organization, it must be verified. The domain is
 *          not yet verified.</p>
 */
export interface MailDomainStateException extends __SmithyException, $MetadataBearer {
  name: "MailDomainStateException";
  $fault: "client";
  Message?: string;
}

export namespace MailDomainStateException {
  export const filterSensitiveLog = (obj: MailDomainStateException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MailDomainStateException => __isa(o, "MailDomainStateException");
}

/**
 * <p>The representation of a user or group.</p>
 */
export interface Member {
  __type?: "Member";
  /**
   * <p>The date indicating when the member was disabled from Amazon WorkMail
   *          use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The date indicating when the member was enabled for Amazon WorkMail
   *          use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the member.</p>
   */
  Id?: string;

  /**
   * <p>The name of the member.</p>
   */
  Name?: string;

  /**
   * <p>The state of the member, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>A member can be a user or group.</p>
   */
  Type?: MemberType | string;
}

export namespace Member {
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Member => __isa(o, "Member");
}

export enum MemberType {
  GROUP = "GROUP",
  USER = "USER",
}

/**
 * <p>The user, group, or resource name isn't unique in Amazon WorkMail.</p>
 */
export interface NameAvailabilityException extends __SmithyException, $MetadataBearer {
  name: "NameAvailabilityException";
  $fault: "client";
  Message?: string;
}

export namespace NameAvailabilityException {
  export const filterSensitiveLog = (obj: NameAvailabilityException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NameAvailabilityException => __isa(o, "NameAvailabilityException");
}

/**
 * <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 */
export interface OrganizationNotFoundException extends __SmithyException, $MetadataBearer {
  name: "OrganizationNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationNotFoundException {
  export const filterSensitiveLog = (obj: OrganizationNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OrganizationNotFoundException => __isa(o, "OrganizationNotFoundException");
}

/**
 * <p>The organization must have a valid state (Active or Synchronizing) to perform certain
 *          operations on the organization or its members.</p>
 */
export interface OrganizationStateException extends __SmithyException, $MetadataBearer {
  name: "OrganizationStateException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationStateException {
  export const filterSensitiveLog = (obj: OrganizationStateException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OrganizationStateException => __isa(o, "OrganizationStateException");
}

/**
 * <p>The representation of an organization.</p>
 */
export interface OrganizationSummary {
  __type?: "OrganizationSummary";
  /**
   * <p>The alias associated with the organization.</p>
   */
  Alias?: string;

  /**
   * <p>The error message associated with the organization. It is only  present if unexpected
   *          behavior has occurred with regards to the organization. It provides insight or solutions
   *          regarding unexpected behavior.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The identifier associated with the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The state associated with the organization.</p>
   */
  State?: string;
}

export namespace OrganizationSummary {
  export const filterSensitiveLog = (obj: OrganizationSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OrganizationSummary => __isa(o, "OrganizationSummary");
}

/**
 * <p>Permission granted to a user, group, or resource to access a certain aspect of
 *          another user, group, or resource mailbox.</p>
 */
export interface Permission {
  __type?: "Permission";
  /**
   * <p>The identifier of the user, group, or resource to which the permissions are
   *          granted.</p>
   */
  GranteeId: string | undefined;

  /**
   * <p>The type of user, group, or resource referred to in GranteeId.</p>
   */
  GranteeType: MemberType | string | undefined;

  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.</p>
   */
  PermissionValues: (PermissionType | string)[] | undefined;
}

export namespace Permission {
  export const filterSensitiveLog = (obj: Permission): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Permission => __isa(o, "Permission");
}

export enum PermissionType {
  FULL_ACCESS = "FULL_ACCESS",
  SEND_AS = "SEND_AS",
  SEND_ON_BEHALF = "SEND_ON_BEHALF",
}

export interface PutMailboxPermissionsRequest {
  __type?: "PutMailboxPermissionsRequest";
  /**
   * <p>The identifier of the user, group, or resource for which to update mailbox
   *          permissions.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier of the user, group, or resource to which to grant the
   *          permissions.</p>
   */
  GranteeId: string | undefined;

  /**
   * <p>The identifier of the organization under which the user, group, or resource
   *          exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.</p>
   */
  PermissionValues: (PermissionType | string)[] | undefined;
}

export namespace PutMailboxPermissionsRequest {
  export const filterSensitiveLog = (obj: PutMailboxPermissionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutMailboxPermissionsRequest => __isa(o, "PutMailboxPermissionsRequest");
}

export interface PutMailboxPermissionsResponse {
  __type?: "PutMailboxPermissionsResponse";
}

export namespace PutMailboxPermissionsResponse {
  export const filterSensitiveLog = (obj: PutMailboxPermissionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutMailboxPermissionsResponse => __isa(o, "PutMailboxPermissionsResponse");
}

export interface RegisterToWorkMailRequest {
  __type?: "RegisterToWorkMailRequest";
  /**
   * <p>The email for the user, group, or resource to be updated.</p>
   */
  Email: string | undefined;

  /**
   * <p>The identifier for the user, group, or resource to be updated.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier for the organization under which the user, group, or resource
   *          exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace RegisterToWorkMailRequest {
  export const filterSensitiveLog = (obj: RegisterToWorkMailRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RegisterToWorkMailRequest => __isa(o, "RegisterToWorkMailRequest");
}

export interface RegisterToWorkMailResponse {
  __type?: "RegisterToWorkMailResponse";
}

export namespace RegisterToWorkMailResponse {
  export const filterSensitiveLog = (obj: RegisterToWorkMailResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RegisterToWorkMailResponse => __isa(o, "RegisterToWorkMailResponse");
}

/**
 * <p>This user, group, or resource name is not allowed in Amazon WorkMail.</p>
 */
export interface ReservedNameException extends __SmithyException, $MetadataBearer {
  name: "ReservedNameException";
  $fault: "client";
  Message?: string;
}

export namespace ReservedNameException {
  export const filterSensitiveLog = (obj: ReservedNameException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReservedNameException => __isa(o, "ReservedNameException");
}

export interface ResetPasswordRequest {
  __type?: "ResetPasswordRequest";
  /**
   * <p>The identifier of the organization that contains the user for which the password is
   *          reset.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The new password for the user.</p>
   */
  Password: string | undefined;

  /**
   * <p>The identifier of the user for whom the password is reset.</p>
   */
  UserId: string | undefined;
}

export namespace ResetPasswordRequest {
  export const filterSensitiveLog = (obj: ResetPasswordRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is ResetPasswordRequest => __isa(o, "ResetPasswordRequest");
}

export interface ResetPasswordResponse {
  __type?: "ResetPasswordResponse";
}

export namespace ResetPasswordResponse {
  export const filterSensitiveLog = (obj: ResetPasswordResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResetPasswordResponse => __isa(o, "ResetPasswordResponse");
}

/**
 * <p>The representation of a resource.</p>
 */
export interface Resource {
  __type?: "Resource";
  /**
   * <p>The date indicating when the resource was disabled from Amazon WorkMail
   *          use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The email of the resource.</p>
   */
  Email?: string;

  /**
   * <p>The date indicating when the resource was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The state of the resource, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The type of the resource: equipment or room.</p>
   */
  Type?: ResourceType | string;
}

export namespace Resource {
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Resource => __isa(o, "Resource");
}

export enum ResourceType {
  EQUIPMENT = "EQUIPMENT",
  ROOM = "ROOM",
}

/**
 * <p>You can't perform a write operation against a read-only directory.</p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedOperationException {
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnsupportedOperationException => __isa(o, "UnsupportedOperationException");
}

export interface UpdateMailboxQuotaRequest {
  __type?: "UpdateMailboxQuotaRequest";
  /**
   * <p>The updated mailbox quota, in MB, for the specified user.</p>
   */
  MailboxQuota: number | undefined;

  /**
   * <p>The identifier for the organization that contains the user for whom to update the mailbox quota.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifer for the user for whom to update the mailbox quota.</p>
   */
  UserId: string | undefined;
}

export namespace UpdateMailboxQuotaRequest {
  export const filterSensitiveLog = (obj: UpdateMailboxQuotaRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateMailboxQuotaRequest => __isa(o, "UpdateMailboxQuotaRequest");
}

export interface UpdateMailboxQuotaResponse {
  __type?: "UpdateMailboxQuotaResponse";
}

export namespace UpdateMailboxQuotaResponse {
  export const filterSensitiveLog = (obj: UpdateMailboxQuotaResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateMailboxQuotaResponse => __isa(o, "UpdateMailboxQuotaResponse");
}

export interface UpdatePrimaryEmailAddressRequest {
  __type?: "UpdatePrimaryEmailAddressRequest";
  /**
   * <p>The value of the email to be updated as primary.</p>
   */
  Email: string | undefined;

  /**
   * <p>The user, group, or resource to update.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The organization that contains the user, group, or resource to update.</p>
   */
  OrganizationId: string | undefined;
}

export namespace UpdatePrimaryEmailAddressRequest {
  export const filterSensitiveLog = (obj: UpdatePrimaryEmailAddressRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdatePrimaryEmailAddressRequest => __isa(o, "UpdatePrimaryEmailAddressRequest");
}

export interface UpdatePrimaryEmailAddressResponse {
  __type?: "UpdatePrimaryEmailAddressResponse";
}

export namespace UpdatePrimaryEmailAddressResponse {
  export const filterSensitiveLog = (obj: UpdatePrimaryEmailAddressResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdatePrimaryEmailAddressResponse => __isa(o, "UpdatePrimaryEmailAddressResponse");
}

export interface UpdateResourceRequest {
  __type?: "UpdateResourceRequest";
  /**
   * <p>The resource's booking options to be updated.</p>
   */
  BookingOptions?: BookingOptions;

  /**
   * <p>The name of the resource to be updated.</p>
   */
  Name?: string;

  /**
   * <p>The identifier associated with the organization for which the resource is
   *          updated.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be updated.</p>
   */
  ResourceId: string | undefined;
}

export namespace UpdateResourceRequest {
  export const filterSensitiveLog = (obj: UpdateResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateResourceRequest => __isa(o, "UpdateResourceRequest");
}

export interface UpdateResourceResponse {
  __type?: "UpdateResourceResponse";
}

export namespace UpdateResourceResponse {
  export const filterSensitiveLog = (obj: UpdateResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateResourceResponse => __isa(o, "UpdateResourceResponse");
}

/**
 * <p>The representation of an Amazon WorkMail user.</p>
 */
export interface User {
  __type?: "User";
  /**
   * <p>The date indicating when the user was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The email of the user.</p>
   */
  Email?: string;

  /**
   * <p>The date indicating when the user was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the user.</p>
   */
  Id?: string;

  /**
   * <p>The name of the user.</p>
   */
  Name?: string;

  /**
   * <p>The state of the user, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The role of the user.</p>
   */
  UserRole?: UserRole | string;
}

export namespace User {
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
  });
  export const isa = (o: any): o is User => __isa(o, "User");
}

export enum UserRole {
  RESOURCE = "RESOURCE",
  SYSTEM_USER = "SYSTEM_USER",
  USER = "USER",
}
