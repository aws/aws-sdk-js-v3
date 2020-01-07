"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MacieClient_1 = require("./MacieClient");
const AssociateMemberAccountCommand_1 = require("./commands/AssociateMemberAccountCommand");
const AssociateS3ResourcesCommand_1 = require("./commands/AssociateS3ResourcesCommand");
const DisassociateMemberAccountCommand_1 = require("./commands/DisassociateMemberAccountCommand");
const DisassociateS3ResourcesCommand_1 = require("./commands/DisassociateS3ResourcesCommand");
const ListMemberAccountsCommand_1 = require("./commands/ListMemberAccountsCommand");
const ListS3ResourcesCommand_1 = require("./commands/ListS3ResourcesCommand");
const UpdateS3ResourcesCommand_1 = require("./commands/UpdateS3ResourcesCommand");
/**
 * <fullname>Amazon Macie</fullname>
 *          <p>Amazon Macie is a security service that uses machine learning to automatically
 *       discover, classify, and protect sensitive data in AWS. Macie recognizes sensitive data such as
 *       personally identifiable information (PII) or intellectual property, and provides you with
 *       dashboards and alerts that give visibility into how this data is being accessed or moved. For
 *       more information, see the <a href="https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html">Macie User
 *         Guide</a>. </p>
 */
class Macie extends MacieClient_1.MacieClient {
    associateMemberAccount(args, optionsOrCb, cb) {
        const command = new AssociateMemberAccountCommand_1.AssociateMemberAccountCommand(args);
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
    associateS3Resources(args, optionsOrCb, cb) {
        const command = new AssociateS3ResourcesCommand_1.AssociateS3ResourcesCommand(args);
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
    disassociateMemberAccount(args, optionsOrCb, cb) {
        const command = new DisassociateMemberAccountCommand_1.DisassociateMemberAccountCommand(args);
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
    disassociateS3Resources(args, optionsOrCb, cb) {
        const command = new DisassociateS3ResourcesCommand_1.DisassociateS3ResourcesCommand(args);
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
    listS3Resources(args, optionsOrCb, cb) {
        const command = new ListS3ResourcesCommand_1.ListS3ResourcesCommand(args);
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
    updateS3Resources(args, optionsOrCb, cb) {
        const command = new UpdateS3ResourcesCommand_1.UpdateS3ResourcesCommand(args);
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
exports.Macie = Macie;
//# sourceMappingURL=Macie.js.map