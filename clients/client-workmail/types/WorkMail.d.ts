import { WorkMailClient } from "./WorkMailClient";
import { AssociateDelegateToResourceCommandInput, AssociateDelegateToResourceCommandOutput } from "./commands/AssociateDelegateToResourceCommand";
import { AssociateMemberToGroupCommandInput, AssociateMemberToGroupCommandOutput } from "./commands/AssociateMemberToGroupCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateResourceCommandInput, CreateResourceCommandOutput } from "./commands/CreateResourceCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteMailboxPermissionsCommandInput, DeleteMailboxPermissionsCommandOutput } from "./commands/DeleteMailboxPermissionsCommand";
import { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "./commands/DeleteResourceCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DeregisterFromWorkMailCommandInput, DeregisterFromWorkMailCommandOutput } from "./commands/DeregisterFromWorkMailCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import { DescribeOrganizationCommandInput, DescribeOrganizationCommandOutput } from "./commands/DescribeOrganizationCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "./commands/DescribeResourceCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import { DisassociateDelegateFromResourceCommandInput, DisassociateDelegateFromResourceCommandOutput } from "./commands/DisassociateDelegateFromResourceCommand";
import { DisassociateMemberFromGroupCommandInput, DisassociateMemberFromGroupCommandOutput } from "./commands/DisassociateMemberFromGroupCommand";
import { GetMailboxDetailsCommandInput, GetMailboxDetailsCommandOutput } from "./commands/GetMailboxDetailsCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import { ListGroupMembersCommandInput, ListGroupMembersCommandOutput } from "./commands/ListGroupMembersCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListMailboxPermissionsCommandInput, ListMailboxPermissionsCommandOutput } from "./commands/ListMailboxPermissionsCommand";
import { ListOrganizationsCommandInput, ListOrganizationsCommandOutput } from "./commands/ListOrganizationsCommand";
import { ListResourceDelegatesCommandInput, ListResourceDelegatesCommandOutput } from "./commands/ListResourceDelegatesCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { PutMailboxPermissionsCommandInput, PutMailboxPermissionsCommandOutput } from "./commands/PutMailboxPermissionsCommand";
import { RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput } from "./commands/RegisterToWorkMailCommand";
import { ResetPasswordCommandInput, ResetPasswordCommandOutput } from "./commands/ResetPasswordCommand";
import { UpdateMailboxQuotaCommandInput, UpdateMailboxQuotaCommandOutput } from "./commands/UpdateMailboxQuotaCommand";
import { UpdatePrimaryEmailAddressCommandInput, UpdatePrimaryEmailAddressCommandOutput } from "./commands/UpdatePrimaryEmailAddressCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon WorkMail is a secure, managed business email and calendaring service with support for
 *          existing desktop and mobile email clients. You can access your email, contacts, and
 *          calendars using Microsoft Outlook, your browser, or other native iOS and Android email
 *          applications. You can integrate WorkMail with your existing corporate directory and control
 *          both the keys that encrypt your data and the location in which your data is
 *          stored.</p>
 *          <p>The WorkMail API is designed for the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>Listing and describing organizations</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing users</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing groups</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing resources</p>
 *             </li>
 *          </ul>
 *          <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only
 *          require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles
 *          to help facilitate access, trust, and permission policies. By creating a role and allowing
 *          an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into
 *          the entire WorkMail organization (or as set in the IAM policy). This includes, but is not
 *          limited to, the ability to create, update, and delete users, groups, and resources. This
 *          allows developers to perform the scenarios listed above, as well as give users the ability
 *          to grant access on a selective basis using the IAM model.</p>
 */
export declare class WorkMail extends WorkMailClient {
    /**
     * <p>Adds a member (user or group) to the resource's set of delegates.</p>
     */
    associateDelegateToResource(args: AssociateDelegateToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AssociateDelegateToResourceCommandOutput>;
    associateDelegateToResource(args: AssociateDelegateToResourceCommandInput, cb: (err: any, data?: AssociateDelegateToResourceCommandOutput) => void): void;
    associateDelegateToResource(args: AssociateDelegateToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateDelegateToResourceCommandOutput) => void): void;
    /**
     * <p>Adds a member (user or group) to the group's set.</p>
     */
    associateMemberToGroup(args: AssociateMemberToGroupCommandInput, options?: __HttpHandlerOptions): Promise<AssociateMemberToGroupCommandOutput>;
    associateMemberToGroup(args: AssociateMemberToGroupCommandInput, cb: (err: any, data?: AssociateMemberToGroupCommandOutput) => void): void;
    associateMemberToGroup(args: AssociateMemberToGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateMemberToGroupCommandOutput) => void): void;
    /**
     * <p>Adds an alias to the set of a given member (user or group) of Amazon WorkMail.</p>
     */
    createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
    createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
    createAlias(args: CreateAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
    /**
     * <p>Creates a group that can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a>
     *          operation.</p>
     */
    createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
    createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    createGroup(args: CreateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon WorkMail resource. </p>
     */
    createResource(args: CreateResourceCommandInput, options?: __HttpHandlerOptions): Promise<CreateResourceCommandOutput>;
    createResource(args: CreateResourceCommandInput, cb: (err: any, data?: CreateResourceCommandOutput) => void): void;
    createResource(args: CreateResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResourceCommandOutput) => void): void;
    /**
     * <p>Creates a user who can be used in Amazon WorkMail by calling the
     *             <a>RegisterToWorkMail</a> operation.</p>
     */
    createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
    createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    createUser(args: CreateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    /**
     * <p>Remove one or more specified aliases from a set of aliases for a given
     *          user.</p>
     */
    deleteAlias(args: DeleteAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAliasCommandOutput>;
    deleteAlias(args: DeleteAliasCommandInput, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
    deleteAlias(args: DeleteAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
    /**
     * <p>Deletes a group from Amazon WorkMail.</p>
     */
    deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
    deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    deleteGroup(args: DeleteGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    /**
     * <p>Deletes permissions granted to a member (user or group).</p>
     */
    deleteMailboxPermissions(args: DeleteMailboxPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMailboxPermissionsCommandOutput>;
    deleteMailboxPermissions(args: DeleteMailboxPermissionsCommandInput, cb: (err: any, data?: DeleteMailboxPermissionsCommandOutput) => void): void;
    deleteMailboxPermissions(args: DeleteMailboxPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMailboxPermissionsCommandOutput) => void): void;
    /**
     * <p>Deletes the specified resource. </p>
     */
    deleteResource(args: DeleteResourceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourceCommandOutput>;
    deleteResource(args: DeleteResourceCommandInput, cb: (err: any, data?: DeleteResourceCommandOutput) => void): void;
    deleteResource(args: DeleteResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourceCommandOutput) => void): void;
    /**
     * <p>Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a user, the
     *          user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to
     *          confirm the user state.</p>
     *          <p>Deleting a user is permanent and cannot be undone.
     *          WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * <p>Mark a user, group, or resource as no longer used in Amazon WorkMail. This action
     *          disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes
     *          for 30 days before they are permanently removed. The functionality in the console is
     *             <i>Disable</i>.</p>
     */
    deregisterFromWorkMail(args: DeregisterFromWorkMailCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterFromWorkMailCommandOutput>;
    deregisterFromWorkMail(args: DeregisterFromWorkMailCommandInput, cb: (err: any, data?: DeregisterFromWorkMailCommandOutput) => void): void;
    deregisterFromWorkMail(args: DeregisterFromWorkMailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterFromWorkMailCommandOutput) => void): void;
    /**
     * <p>Returns the data available for the group.</p>
     */
    describeGroup(args: DescribeGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGroupCommandOutput>;
    describeGroup(args: DescribeGroupCommandInput, cb: (err: any, data?: DescribeGroupCommandOutput) => void): void;
    describeGroup(args: DescribeGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGroupCommandOutput) => void): void;
    /**
     * <p>Provides more information regarding a given organization based on its identifier.</p>
     */
    describeOrganization(args: DescribeOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrganizationCommandOutput>;
    describeOrganization(args: DescribeOrganizationCommandInput, cb: (err: any, data?: DescribeOrganizationCommandOutput) => void): void;
    describeOrganization(args: DescribeOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrganizationCommandOutput) => void): void;
    /**
     * <p>Returns the data available for the resource.</p>
     */
    describeResource(args: DescribeResourceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeResourceCommandOutput>;
    describeResource(args: DescribeResourceCommandInput, cb: (err: any, data?: DescribeResourceCommandOutput) => void): void;
    describeResource(args: DescribeResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeResourceCommandOutput) => void): void;
    /**
     * <p>Provides information regarding the user.</p>
     */
    describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
    describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    describeUser(args: DescribeUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    /**
     * <p>Removes a member from the resource's set of delegates.</p>
     */
    disassociateDelegateFromResource(args: DisassociateDelegateFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateDelegateFromResourceCommandOutput>;
    disassociateDelegateFromResource(args: DisassociateDelegateFromResourceCommandInput, cb: (err: any, data?: DisassociateDelegateFromResourceCommandOutput) => void): void;
    disassociateDelegateFromResource(args: DisassociateDelegateFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateDelegateFromResourceCommandOutput) => void): void;
    /**
     * <p>Removes a member from a group.</p>
     */
    disassociateMemberFromGroup(args: DisassociateMemberFromGroupCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateMemberFromGroupCommandOutput>;
    disassociateMemberFromGroup(args: DisassociateMemberFromGroupCommandInput, cb: (err: any, data?: DisassociateMemberFromGroupCommandOutput) => void): void;
    disassociateMemberFromGroup(args: DisassociateMemberFromGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateMemberFromGroupCommandOutput) => void): void;
    /**
     * <p>Requests a user's mailbox details for a specified organization and user.</p>
     */
    getMailboxDetails(args: GetMailboxDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetMailboxDetailsCommandOutput>;
    getMailboxDetails(args: GetMailboxDetailsCommandInput, cb: (err: any, data?: GetMailboxDetailsCommandOutput) => void): void;
    getMailboxDetails(args: GetMailboxDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMailboxDetailsCommandOutput) => void): void;
    /**
     * <p>Creates a paginated call to list the aliases associated with a given entity.</p>
     */
    listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
    listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
    listAliases(args: ListAliasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
    /**
     * <p>Returns an overview of the members
     *          of a group. Users and groups can be members of a group.</p>
     */
    listGroupMembers(args: ListGroupMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupMembersCommandOutput>;
    listGroupMembers(args: ListGroupMembersCommandInput, cb: (err: any, data?: ListGroupMembersCommandOutput) => void): void;
    listGroupMembers(args: ListGroupMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupMembersCommandOutput) => void): void;
    /**
     * <p>Returns summaries of the organization's groups.</p>
     */
    listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
    listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    listGroups(args: ListGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    /**
     * <p>Lists the mailbox permissions associated with a user, group, or resource
     *          mailbox.</p>
     */
    listMailboxPermissions(args: ListMailboxPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<ListMailboxPermissionsCommandOutput>;
    listMailboxPermissions(args: ListMailboxPermissionsCommandInput, cb: (err: any, data?: ListMailboxPermissionsCommandOutput) => void): void;
    listMailboxPermissions(args: ListMailboxPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMailboxPermissionsCommandOutput) => void): void;
    /**
     * <p>Returns summaries of the customer's non-deleted organizations.</p>
     */
    listOrganizations(args: ListOrganizationsCommandInput, options?: __HttpHandlerOptions): Promise<ListOrganizationsCommandOutput>;
    listOrganizations(args: ListOrganizationsCommandInput, cb: (err: any, data?: ListOrganizationsCommandOutput) => void): void;
    listOrganizations(args: ListOrganizationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOrganizationsCommandOutput) => void): void;
    /**
     * <p>Lists the delegates associated with a resource. Users and groups can be resource
     *          delegates and answer requests on behalf of the resource.</p>
     */
    listResourceDelegates(args: ListResourceDelegatesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourceDelegatesCommandOutput>;
    listResourceDelegates(args: ListResourceDelegatesCommandInput, cb: (err: any, data?: ListResourceDelegatesCommandOutput) => void): void;
    listResourceDelegates(args: ListResourceDelegatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourceDelegatesCommandOutput) => void): void;
    /**
     * <p>Returns summaries of the organization's resources.</p>
     */
    listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
    listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    listResources(args: ListResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    /**
     * <p>Returns summaries of the organization's users.</p>
     */
    listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
    listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    listUsers(args: ListUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    /**
     * <p>Sets permissions for a user, group, or resource. This replaces any pre-existing
     *          permissions.</p>
     */
    putMailboxPermissions(args: PutMailboxPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<PutMailboxPermissionsCommandOutput>;
    putMailboxPermissions(args: PutMailboxPermissionsCommandInput, cb: (err: any, data?: PutMailboxPermissionsCommandOutput) => void): void;
    putMailboxPermissions(args: PutMailboxPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutMailboxPermissionsCommandOutput) => void): void;
    /**
     * <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by
     *          associating a mailbox and calendaring capabilities. It performs no change if the user,
     *          group, or resource is enabled and fails if the user, group, or resource is deleted. This
     *          operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com//workmail/pricing">Pricing</a>. The equivalent console
     *          functionality for this operation is <i>Enable</i>. </p>
     *          <p>Users can either be created by calling the <a>CreateUser</a> API operation or
     *          they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
     */
    registerToWorkMail(args: RegisterToWorkMailCommandInput, options?: __HttpHandlerOptions): Promise<RegisterToWorkMailCommandOutput>;
    registerToWorkMail(args: RegisterToWorkMailCommandInput, cb: (err: any, data?: RegisterToWorkMailCommandOutput) => void): void;
    registerToWorkMail(args: RegisterToWorkMailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterToWorkMailCommandOutput) => void): void;
    /**
     * <p>Allows the administrator to reset the password for a user.</p>
     */
    resetPassword(args: ResetPasswordCommandInput, options?: __HttpHandlerOptions): Promise<ResetPasswordCommandOutput>;
    resetPassword(args: ResetPasswordCommandInput, cb: (err: any, data?: ResetPasswordCommandOutput) => void): void;
    resetPassword(args: ResetPasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetPasswordCommandOutput) => void): void;
    /**
     * <p>Updates a user's current mailbox quota for a specified organization and user.</p>
     */
    updateMailboxQuota(args: UpdateMailboxQuotaCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMailboxQuotaCommandOutput>;
    updateMailboxQuota(args: UpdateMailboxQuotaCommandInput, cb: (err: any, data?: UpdateMailboxQuotaCommandOutput) => void): void;
    updateMailboxQuota(args: UpdateMailboxQuotaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMailboxQuotaCommandOutput) => void): void;
    /**
     * <p>Updates the primary email for a user, group, or resource. The current email is moved
     *          into the list of aliases (or swapped between an existing alias and the current primary
     *          email), and the email provided in the input is promoted as the primary.</p>
     */
    updatePrimaryEmailAddress(args: UpdatePrimaryEmailAddressCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePrimaryEmailAddressCommandOutput>;
    updatePrimaryEmailAddress(args: UpdatePrimaryEmailAddressCommandInput, cb: (err: any, data?: UpdatePrimaryEmailAddressCommandOutput) => void): void;
    updatePrimaryEmailAddress(args: UpdatePrimaryEmailAddressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePrimaryEmailAddressCommandOutput) => void): void;
    /**
     * <p>Updates data for the resource. To have the latest information, it must be preceded by
     *          a <a>DescribeResource</a> call. The dataset in the request should be the one
     *          expected when performing another <code>DescribeResource</code> call.</p>
     */
    updateResource(args: UpdateResourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResourceCommandOutput>;
    updateResource(args: UpdateResourceCommandInput, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
    updateResource(args: UpdateResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
}
