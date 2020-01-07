"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WorkMailClient_1 = require("./WorkMailClient");
const AssociateDelegateToResourceCommand_1 = require("./commands/AssociateDelegateToResourceCommand");
const AssociateMemberToGroupCommand_1 = require("./commands/AssociateMemberToGroupCommand");
const CreateAliasCommand_1 = require("./commands/CreateAliasCommand");
const CreateGroupCommand_1 = require("./commands/CreateGroupCommand");
const CreateResourceCommand_1 = require("./commands/CreateResourceCommand");
const CreateUserCommand_1 = require("./commands/CreateUserCommand");
const DeleteAliasCommand_1 = require("./commands/DeleteAliasCommand");
const DeleteGroupCommand_1 = require("./commands/DeleteGroupCommand");
const DeleteMailboxPermissionsCommand_1 = require("./commands/DeleteMailboxPermissionsCommand");
const DeleteResourceCommand_1 = require("./commands/DeleteResourceCommand");
const DeleteUserCommand_1 = require("./commands/DeleteUserCommand");
const DeregisterFromWorkMailCommand_1 = require("./commands/DeregisterFromWorkMailCommand");
const DescribeGroupCommand_1 = require("./commands/DescribeGroupCommand");
const DescribeOrganizationCommand_1 = require("./commands/DescribeOrganizationCommand");
const DescribeResourceCommand_1 = require("./commands/DescribeResourceCommand");
const DescribeUserCommand_1 = require("./commands/DescribeUserCommand");
const DisassociateDelegateFromResourceCommand_1 = require("./commands/DisassociateDelegateFromResourceCommand");
const DisassociateMemberFromGroupCommand_1 = require("./commands/DisassociateMemberFromGroupCommand");
const GetMailboxDetailsCommand_1 = require("./commands/GetMailboxDetailsCommand");
const ListAliasesCommand_1 = require("./commands/ListAliasesCommand");
const ListGroupMembersCommand_1 = require("./commands/ListGroupMembersCommand");
const ListGroupsCommand_1 = require("./commands/ListGroupsCommand");
const ListMailboxPermissionsCommand_1 = require("./commands/ListMailboxPermissionsCommand");
const ListOrganizationsCommand_1 = require("./commands/ListOrganizationsCommand");
const ListResourceDelegatesCommand_1 = require("./commands/ListResourceDelegatesCommand");
const ListResourcesCommand_1 = require("./commands/ListResourcesCommand");
const ListUsersCommand_1 = require("./commands/ListUsersCommand");
const PutMailboxPermissionsCommand_1 = require("./commands/PutMailboxPermissionsCommand");
const RegisterToWorkMailCommand_1 = require("./commands/RegisterToWorkMailCommand");
const ResetPasswordCommand_1 = require("./commands/ResetPasswordCommand");
const UpdateMailboxQuotaCommand_1 = require("./commands/UpdateMailboxQuotaCommand");
const UpdatePrimaryEmailAddressCommand_1 = require("./commands/UpdatePrimaryEmailAddressCommand");
const UpdateResourceCommand_1 = require("./commands/UpdateResourceCommand");
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
class WorkMail extends WorkMailClient_1.WorkMailClient {
    associateDelegateToResource(args, optionsOrCb, cb) {
        const command = new AssociateDelegateToResourceCommand_1.AssociateDelegateToResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateMemberToGroup(args, optionsOrCb, cb) {
        const command = new AssociateMemberToGroupCommand_1.AssociateMemberToGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAlias(args, optionsOrCb, cb) {
        const command = new CreateAliasCommand_1.CreateAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createGroup(args, optionsOrCb, cb) {
        const command = new CreateGroupCommand_1.CreateGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createResource(args, optionsOrCb, cb) {
        const command = new CreateResourceCommand_1.CreateResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUser(args, optionsOrCb, cb) {
        const command = new CreateUserCommand_1.CreateUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAlias(args, optionsOrCb, cb) {
        const command = new DeleteAliasCommand_1.DeleteAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteGroup(args, optionsOrCb, cb) {
        const command = new DeleteGroupCommand_1.DeleteGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteMailboxPermissions(args, optionsOrCb, cb) {
        const command = new DeleteMailboxPermissionsCommand_1.DeleteMailboxPermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteResource(args, optionsOrCb, cb) {
        const command = new DeleteResourceCommand_1.DeleteResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUser(args, optionsOrCb, cb) {
        const command = new DeleteUserCommand_1.DeleteUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterFromWorkMail(args, optionsOrCb, cb) {
        const command = new DeregisterFromWorkMailCommand_1.DeregisterFromWorkMailCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGroup(args, optionsOrCb, cb) {
        const command = new DescribeGroupCommand_1.DescribeGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeOrganization(args, optionsOrCb, cb) {
        const command = new DescribeOrganizationCommand_1.DescribeOrganizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeResource(args, optionsOrCb, cb) {
        const command = new DescribeResourceCommand_1.DescribeResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUser(args, optionsOrCb, cb) {
        const command = new DescribeUserCommand_1.DescribeUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateDelegateFromResource(args, optionsOrCb, cb) {
        const command = new DisassociateDelegateFromResourceCommand_1.DisassociateDelegateFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateMemberFromGroup(args, optionsOrCb, cb) {
        const command = new DisassociateMemberFromGroupCommand_1.DisassociateMemberFromGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMailboxDetails(args, optionsOrCb, cb) {
        const command = new GetMailboxDetailsCommand_1.GetMailboxDetailsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAliases(args, optionsOrCb, cb) {
        const command = new ListAliasesCommand_1.ListAliasesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGroupMembers(args, optionsOrCb, cb) {
        const command = new ListGroupMembersCommand_1.ListGroupMembersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGroups(args, optionsOrCb, cb) {
        const command = new ListGroupsCommand_1.ListGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listMailboxPermissions(args, optionsOrCb, cb) {
        const command = new ListMailboxPermissionsCommand_1.ListMailboxPermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listOrganizations(args, optionsOrCb, cb) {
        const command = new ListOrganizationsCommand_1.ListOrganizationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResourceDelegates(args, optionsOrCb, cb) {
        const command = new ListResourceDelegatesCommand_1.ListResourceDelegatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResources(args, optionsOrCb, cb) {
        const command = new ListResourcesCommand_1.ListResourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUsers(args, optionsOrCb, cb) {
        const command = new ListUsersCommand_1.ListUsersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putMailboxPermissions(args, optionsOrCb, cb) {
        const command = new PutMailboxPermissionsCommand_1.PutMailboxPermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerToWorkMail(args, optionsOrCb, cb) {
        const command = new RegisterToWorkMailCommand_1.RegisterToWorkMailCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetPassword(args, optionsOrCb, cb) {
        const command = new ResetPasswordCommand_1.ResetPasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMailboxQuota(args, optionsOrCb, cb) {
        const command = new UpdateMailboxQuotaCommand_1.UpdateMailboxQuotaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updatePrimaryEmailAddress(args, optionsOrCb, cb) {
        const command = new UpdatePrimaryEmailAddressCommand_1.UpdatePrimaryEmailAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateResource(args, optionsOrCb, cb) {
        const command = new UpdateResourceCommand_1.UpdateResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.WorkMail = WorkMail;
//# sourceMappingURL=WorkMail.js.map