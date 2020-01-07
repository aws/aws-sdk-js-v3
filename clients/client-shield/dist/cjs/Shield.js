"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShieldClient_1 = require("./ShieldClient");
const AssociateDRTLogBucketCommand_1 = require("./commands/AssociateDRTLogBucketCommand");
const AssociateDRTRoleCommand_1 = require("./commands/AssociateDRTRoleCommand");
const CreateProtectionCommand_1 = require("./commands/CreateProtectionCommand");
const CreateSubscriptionCommand_1 = require("./commands/CreateSubscriptionCommand");
const DeleteProtectionCommand_1 = require("./commands/DeleteProtectionCommand");
const DeleteSubscriptionCommand_1 = require("./commands/DeleteSubscriptionCommand");
const DescribeAttackCommand_1 = require("./commands/DescribeAttackCommand");
const DescribeDRTAccessCommand_1 = require("./commands/DescribeDRTAccessCommand");
const DescribeEmergencyContactSettingsCommand_1 = require("./commands/DescribeEmergencyContactSettingsCommand");
const DescribeProtectionCommand_1 = require("./commands/DescribeProtectionCommand");
const DescribeSubscriptionCommand_1 = require("./commands/DescribeSubscriptionCommand");
const DisassociateDRTLogBucketCommand_1 = require("./commands/DisassociateDRTLogBucketCommand");
const DisassociateDRTRoleCommand_1 = require("./commands/DisassociateDRTRoleCommand");
const GetSubscriptionStateCommand_1 = require("./commands/GetSubscriptionStateCommand");
const ListAttacksCommand_1 = require("./commands/ListAttacksCommand");
const ListProtectionsCommand_1 = require("./commands/ListProtectionsCommand");
const UpdateEmergencyContactSettingsCommand_1 = require("./commands/UpdateEmergencyContactSettingsCommand");
const UpdateSubscriptionCommand_1 = require("./commands/UpdateSubscriptionCommand");
/**
 * <fullname>AWS Shield Advanced</fullname>
 *          <p>This is the <i>AWS Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the AWS Shield Advanced API actions,
 *          data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>.</p>
 */
class Shield extends ShieldClient_1.ShieldClient {
    associateDRTLogBucket(args, optionsOrCb, cb) {
        const command = new AssociateDRTLogBucketCommand_1.AssociateDRTLogBucketCommand(args);
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
    associateDRTRole(args, optionsOrCb, cb) {
        const command = new AssociateDRTRoleCommand_1.AssociateDRTRoleCommand(args);
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
    createProtection(args, optionsOrCb, cb) {
        const command = new CreateProtectionCommand_1.CreateProtectionCommand(args);
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
    createSubscription(args, optionsOrCb, cb) {
        const command = new CreateSubscriptionCommand_1.CreateSubscriptionCommand(args);
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
    deleteProtection(args, optionsOrCb, cb) {
        const command = new DeleteProtectionCommand_1.DeleteProtectionCommand(args);
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
    deleteSubscription(args, optionsOrCb, cb) {
        const command = new DeleteSubscriptionCommand_1.DeleteSubscriptionCommand(args);
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
    describeAttack(args, optionsOrCb, cb) {
        const command = new DescribeAttackCommand_1.DescribeAttackCommand(args);
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
    describeDRTAccess(args, optionsOrCb, cb) {
        const command = new DescribeDRTAccessCommand_1.DescribeDRTAccessCommand(args);
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
    describeEmergencyContactSettings(args, optionsOrCb, cb) {
        const command = new DescribeEmergencyContactSettingsCommand_1.DescribeEmergencyContactSettingsCommand(args);
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
    describeProtection(args, optionsOrCb, cb) {
        const command = new DescribeProtectionCommand_1.DescribeProtectionCommand(args);
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
    describeSubscription(args, optionsOrCb, cb) {
        const command = new DescribeSubscriptionCommand_1.DescribeSubscriptionCommand(args);
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
    disassociateDRTLogBucket(args, optionsOrCb, cb) {
        const command = new DisassociateDRTLogBucketCommand_1.DisassociateDRTLogBucketCommand(args);
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
    disassociateDRTRole(args, optionsOrCb, cb) {
        const command = new DisassociateDRTRoleCommand_1.DisassociateDRTRoleCommand(args);
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
    getSubscriptionState(args, optionsOrCb, cb) {
        const command = new GetSubscriptionStateCommand_1.GetSubscriptionStateCommand(args);
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
    listAttacks(args, optionsOrCb, cb) {
        const command = new ListAttacksCommand_1.ListAttacksCommand(args);
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
    listProtections(args, optionsOrCb, cb) {
        const command = new ListProtectionsCommand_1.ListProtectionsCommand(args);
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
    updateEmergencyContactSettings(args, optionsOrCb, cb) {
        const command = new UpdateEmergencyContactSettingsCommand_1.UpdateEmergencyContactSettingsCommand(args);
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
    updateSubscription(args, optionsOrCb, cb) {
        const command = new UpdateSubscriptionCommand_1.UpdateSubscriptionCommand(args);
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
exports.Shield = Shield;
//# sourceMappingURL=Shield.js.map