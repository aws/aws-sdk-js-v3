"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FMSClient_1 = require("./FMSClient");
const AssociateAdminAccountCommand_1 = require("./commands/AssociateAdminAccountCommand");
const DeleteNotificationChannelCommand_1 = require("./commands/DeleteNotificationChannelCommand");
const DeletePolicyCommand_1 = require("./commands/DeletePolicyCommand");
const DisassociateAdminAccountCommand_1 = require("./commands/DisassociateAdminAccountCommand");
const GetAdminAccountCommand_1 = require("./commands/GetAdminAccountCommand");
const GetComplianceDetailCommand_1 = require("./commands/GetComplianceDetailCommand");
const GetNotificationChannelCommand_1 = require("./commands/GetNotificationChannelCommand");
const GetPolicyCommand_1 = require("./commands/GetPolicyCommand");
const GetProtectionStatusCommand_1 = require("./commands/GetProtectionStatusCommand");
const ListComplianceStatusCommand_1 = require("./commands/ListComplianceStatusCommand");
const ListMemberAccountsCommand_1 = require("./commands/ListMemberAccountsCommand");
const ListPoliciesCommand_1 = require("./commands/ListPoliciesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutNotificationChannelCommand_1 = require("./commands/PutNotificationChannelCommand");
const PutPolicyCommand_1 = require("./commands/PutPolicyCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
/**
 * <fullname>AWS Firewall Manager</fullname>
 *          <p>This is the <i>AWS Firewall Manager API Reference</i>. This guide is for
 *       developers who need detailed information about the AWS Firewall Manager API actions, data
 *       types, and errors. For detailed information about AWS Firewall Manager features, see the
 *         <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">AWS Firewall
 *         Manager Developer Guide</a>.</p>
 */
class FMS extends FMSClient_1.FMSClient {
    associateAdminAccount(args, optionsOrCb, cb) {
        const command = new AssociateAdminAccountCommand_1.AssociateAdminAccountCommand(args);
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
    deleteNotificationChannel(args, optionsOrCb, cb) {
        const command = new DeleteNotificationChannelCommand_1.DeleteNotificationChannelCommand(args);
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
    deletePolicy(args, optionsOrCb, cb) {
        const command = new DeletePolicyCommand_1.DeletePolicyCommand(args);
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
    disassociateAdminAccount(args, optionsOrCb, cb) {
        const command = new DisassociateAdminAccountCommand_1.DisassociateAdminAccountCommand(args);
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
    getAdminAccount(args, optionsOrCb, cb) {
        const command = new GetAdminAccountCommand_1.GetAdminAccountCommand(args);
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
    getComplianceDetail(args, optionsOrCb, cb) {
        const command = new GetComplianceDetailCommand_1.GetComplianceDetailCommand(args);
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
    getNotificationChannel(args, optionsOrCb, cb) {
        const command = new GetNotificationChannelCommand_1.GetNotificationChannelCommand(args);
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
    getPolicy(args, optionsOrCb, cb) {
        const command = new GetPolicyCommand_1.GetPolicyCommand(args);
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
    getProtectionStatus(args, optionsOrCb, cb) {
        const command = new GetProtectionStatusCommand_1.GetProtectionStatusCommand(args);
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
    listComplianceStatus(args, optionsOrCb, cb) {
        const command = new ListComplianceStatusCommand_1.ListComplianceStatusCommand(args);
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
    listMemberAccounts(args, optionsOrCb, cb) {
        const command = new ListMemberAccountsCommand_1.ListMemberAccountsCommand(args);
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
    listPolicies(args, optionsOrCb, cb) {
        const command = new ListPoliciesCommand_1.ListPoliciesCommand(args);
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
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
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
    putNotificationChannel(args, optionsOrCb, cb) {
        const command = new PutNotificationChannelCommand_1.PutNotificationChannelCommand(args);
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
    putPolicy(args, optionsOrCb, cb) {
        const command = new PutPolicyCommand_1.PutPolicyCommand(args);
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
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
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
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
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
exports.FMS = FMS;
//# sourceMappingURL=FMS.js.map