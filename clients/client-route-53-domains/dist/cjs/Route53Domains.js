"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Route53DomainsClient_1 = require("./Route53DomainsClient");
const CheckDomainAvailabilityCommand_1 = require("./commands/CheckDomainAvailabilityCommand");
const CheckDomainTransferabilityCommand_1 = require("./commands/CheckDomainTransferabilityCommand");
const DeleteTagsForDomainCommand_1 = require("./commands/DeleteTagsForDomainCommand");
const DisableDomainAutoRenewCommand_1 = require("./commands/DisableDomainAutoRenewCommand");
const DisableDomainTransferLockCommand_1 = require("./commands/DisableDomainTransferLockCommand");
const EnableDomainAutoRenewCommand_1 = require("./commands/EnableDomainAutoRenewCommand");
const EnableDomainTransferLockCommand_1 = require("./commands/EnableDomainTransferLockCommand");
const GetContactReachabilityStatusCommand_1 = require("./commands/GetContactReachabilityStatusCommand");
const GetDomainDetailCommand_1 = require("./commands/GetDomainDetailCommand");
const GetDomainSuggestionsCommand_1 = require("./commands/GetDomainSuggestionsCommand");
const GetOperationDetailCommand_1 = require("./commands/GetOperationDetailCommand");
const ListDomainsCommand_1 = require("./commands/ListDomainsCommand");
const ListOperationsCommand_1 = require("./commands/ListOperationsCommand");
const ListTagsForDomainCommand_1 = require("./commands/ListTagsForDomainCommand");
const RegisterDomainCommand_1 = require("./commands/RegisterDomainCommand");
const RenewDomainCommand_1 = require("./commands/RenewDomainCommand");
const ResendContactReachabilityEmailCommand_1 = require("./commands/ResendContactReachabilityEmailCommand");
const RetrieveDomainAuthCodeCommand_1 = require("./commands/RetrieveDomainAuthCodeCommand");
const TransferDomainCommand_1 = require("./commands/TransferDomainCommand");
const UpdateDomainContactCommand_1 = require("./commands/UpdateDomainContactCommand");
const UpdateDomainContactPrivacyCommand_1 = require("./commands/UpdateDomainContactPrivacyCommand");
const UpdateDomainNameserversCommand_1 = require("./commands/UpdateDomainNameserversCommand");
const UpdateTagsForDomainCommand_1 = require("./commands/UpdateTagsForDomainCommand");
const ViewBillingCommand_1 = require("./commands/ViewBillingCommand");
/**
 * <p>Amazon Route 53 API actions let you register domain names and perform related operations.</p>
 */
class Route53Domains extends Route53DomainsClient_1.Route53DomainsClient {
    checkDomainAvailability(args, optionsOrCb, cb) {
        const command = new CheckDomainAvailabilityCommand_1.CheckDomainAvailabilityCommand(args);
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
    checkDomainTransferability(args, optionsOrCb, cb) {
        const command = new CheckDomainTransferabilityCommand_1.CheckDomainTransferabilityCommand(args);
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
    deleteTagsForDomain(args, optionsOrCb, cb) {
        const command = new DeleteTagsForDomainCommand_1.DeleteTagsForDomainCommand(args);
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
    disableDomainAutoRenew(args, optionsOrCb, cb) {
        const command = new DisableDomainAutoRenewCommand_1.DisableDomainAutoRenewCommand(args);
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
    disableDomainTransferLock(args, optionsOrCb, cb) {
        const command = new DisableDomainTransferLockCommand_1.DisableDomainTransferLockCommand(args);
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
    enableDomainAutoRenew(args, optionsOrCb, cb) {
        const command = new EnableDomainAutoRenewCommand_1.EnableDomainAutoRenewCommand(args);
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
    enableDomainTransferLock(args, optionsOrCb, cb) {
        const command = new EnableDomainTransferLockCommand_1.EnableDomainTransferLockCommand(args);
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
    getContactReachabilityStatus(args, optionsOrCb, cb) {
        const command = new GetContactReachabilityStatusCommand_1.GetContactReachabilityStatusCommand(args);
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
    getDomainDetail(args, optionsOrCb, cb) {
        const command = new GetDomainDetailCommand_1.GetDomainDetailCommand(args);
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
    getDomainSuggestions(args, optionsOrCb, cb) {
        const command = new GetDomainSuggestionsCommand_1.GetDomainSuggestionsCommand(args);
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
    getOperationDetail(args, optionsOrCb, cb) {
        const command = new GetOperationDetailCommand_1.GetOperationDetailCommand(args);
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
    listDomains(args, optionsOrCb, cb) {
        const command = new ListDomainsCommand_1.ListDomainsCommand(args);
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
    listOperations(args, optionsOrCb, cb) {
        const command = new ListOperationsCommand_1.ListOperationsCommand(args);
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
    listTagsForDomain(args, optionsOrCb, cb) {
        const command = new ListTagsForDomainCommand_1.ListTagsForDomainCommand(args);
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
    registerDomain(args, optionsOrCb, cb) {
        const command = new RegisterDomainCommand_1.RegisterDomainCommand(args);
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
    renewDomain(args, optionsOrCb, cb) {
        const command = new RenewDomainCommand_1.RenewDomainCommand(args);
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
    resendContactReachabilityEmail(args, optionsOrCb, cb) {
        const command = new ResendContactReachabilityEmailCommand_1.ResendContactReachabilityEmailCommand(args);
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
    retrieveDomainAuthCode(args, optionsOrCb, cb) {
        const command = new RetrieveDomainAuthCodeCommand_1.RetrieveDomainAuthCodeCommand(args);
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
    transferDomain(args, optionsOrCb, cb) {
        const command = new TransferDomainCommand_1.TransferDomainCommand(args);
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
    updateDomainContact(args, optionsOrCb, cb) {
        const command = new UpdateDomainContactCommand_1.UpdateDomainContactCommand(args);
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
    updateDomainContactPrivacy(args, optionsOrCb, cb) {
        const command = new UpdateDomainContactPrivacyCommand_1.UpdateDomainContactPrivacyCommand(args);
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
    updateDomainNameservers(args, optionsOrCb, cb) {
        const command = new UpdateDomainNameserversCommand_1.UpdateDomainNameserversCommand(args);
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
    updateTagsForDomain(args, optionsOrCb, cb) {
        const command = new UpdateTagsForDomainCommand_1.UpdateTagsForDomainCommand(args);
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
    viewBilling(args, optionsOrCb, cb) {
        const command = new ViewBillingCommand_1.ViewBillingCommand(args);
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
exports.Route53Domains = Route53Domains;
//# sourceMappingURL=Route53Domains.js.map