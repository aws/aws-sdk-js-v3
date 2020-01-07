"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ACMClient_1 = require("./ACMClient");
const AddTagsToCertificateCommand_1 = require("./commands/AddTagsToCertificateCommand");
const DeleteCertificateCommand_1 = require("./commands/DeleteCertificateCommand");
const DescribeCertificateCommand_1 = require("./commands/DescribeCertificateCommand");
const ExportCertificateCommand_1 = require("./commands/ExportCertificateCommand");
const GetCertificateCommand_1 = require("./commands/GetCertificateCommand");
const ImportCertificateCommand_1 = require("./commands/ImportCertificateCommand");
const ListCertificatesCommand_1 = require("./commands/ListCertificatesCommand");
const ListTagsForCertificateCommand_1 = require("./commands/ListTagsForCertificateCommand");
const RemoveTagsFromCertificateCommand_1 = require("./commands/RemoveTagsFromCertificateCommand");
const RenewCertificateCommand_1 = require("./commands/RenewCertificateCommand");
const RequestCertificateCommand_1 = require("./commands/RequestCertificateCommand");
const ResendValidationEmailCommand_1 = require("./commands/ResendValidationEmailCommand");
const UpdateCertificateOptionsCommand_1 = require("./commands/UpdateCertificateOptionsCommand");
/**
 * <fullname>AWS Certificate Manager</fullname>
 *          <p>Welcome to the AWS Certificate Manager (ACM) API documentation.</p>
 *          <p>You can use ACM to manage SSL/TLS certificates for your AWS-based websites and
 *       applications. For general information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">
 *                <i>AWS Certificate Manager User Guide</i>
 *             </a>.</p>
 */
class ACM extends ACMClient_1.ACMClient {
    addTagsToCertificate(args, optionsOrCb, cb) {
        const command = new AddTagsToCertificateCommand_1.AddTagsToCertificateCommand(args);
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
    deleteCertificate(args, optionsOrCb, cb) {
        const command = new DeleteCertificateCommand_1.DeleteCertificateCommand(args);
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
    describeCertificate(args, optionsOrCb, cb) {
        const command = new DescribeCertificateCommand_1.DescribeCertificateCommand(args);
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
    exportCertificate(args, optionsOrCb, cb) {
        const command = new ExportCertificateCommand_1.ExportCertificateCommand(args);
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
    getCertificate(args, optionsOrCb, cb) {
        const command = new GetCertificateCommand_1.GetCertificateCommand(args);
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
    importCertificate(args, optionsOrCb, cb) {
        const command = new ImportCertificateCommand_1.ImportCertificateCommand(args);
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
    listCertificates(args, optionsOrCb, cb) {
        const command = new ListCertificatesCommand_1.ListCertificatesCommand(args);
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
    listTagsForCertificate(args, optionsOrCb, cb) {
        const command = new ListTagsForCertificateCommand_1.ListTagsForCertificateCommand(args);
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
    removeTagsFromCertificate(args, optionsOrCb, cb) {
        const command = new RemoveTagsFromCertificateCommand_1.RemoveTagsFromCertificateCommand(args);
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
    renewCertificate(args, optionsOrCb, cb) {
        const command = new RenewCertificateCommand_1.RenewCertificateCommand(args);
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
    requestCertificate(args, optionsOrCb, cb) {
        const command = new RequestCertificateCommand_1.RequestCertificateCommand(args);
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
    resendValidationEmail(args, optionsOrCb, cb) {
        const command = new ResendValidationEmailCommand_1.ResendValidationEmailCommand(args);
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
    updateCertificateOptions(args, optionsOrCb, cb) {
        const command = new UpdateCertificateOptionsCommand_1.UpdateCertificateOptionsCommand(args);
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
exports.ACM = ACM;
//# sourceMappingURL=ACM.js.map