"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ACMPCAClient_1 = require("./ACMPCAClient");
const CreateCertificateAuthorityAuditReportCommand_1 = require("./commands/CreateCertificateAuthorityAuditReportCommand");
const CreateCertificateAuthorityCommand_1 = require("./commands/CreateCertificateAuthorityCommand");
const CreatePermissionCommand_1 = require("./commands/CreatePermissionCommand");
const DeleteCertificateAuthorityCommand_1 = require("./commands/DeleteCertificateAuthorityCommand");
const DeletePermissionCommand_1 = require("./commands/DeletePermissionCommand");
const DescribeCertificateAuthorityAuditReportCommand_1 = require("./commands/DescribeCertificateAuthorityAuditReportCommand");
const DescribeCertificateAuthorityCommand_1 = require("./commands/DescribeCertificateAuthorityCommand");
const GetCertificateAuthorityCertificateCommand_1 = require("./commands/GetCertificateAuthorityCertificateCommand");
const GetCertificateAuthorityCsrCommand_1 = require("./commands/GetCertificateAuthorityCsrCommand");
const GetCertificateCommand_1 = require("./commands/GetCertificateCommand");
const ImportCertificateAuthorityCertificateCommand_1 = require("./commands/ImportCertificateAuthorityCertificateCommand");
const IssueCertificateCommand_1 = require("./commands/IssueCertificateCommand");
const ListCertificateAuthoritiesCommand_1 = require("./commands/ListCertificateAuthoritiesCommand");
const ListPermissionsCommand_1 = require("./commands/ListPermissionsCommand");
const ListTagsCommand_1 = require("./commands/ListTagsCommand");
const RestoreCertificateAuthorityCommand_1 = require("./commands/RestoreCertificateAuthorityCommand");
const RevokeCertificateCommand_1 = require("./commands/RevokeCertificateCommand");
const TagCertificateAuthorityCommand_1 = require("./commands/TagCertificateAuthorityCommand");
const UntagCertificateAuthorityCommand_1 = require("./commands/UntagCertificateAuthorityCommand");
const UpdateCertificateAuthorityCommand_1 = require("./commands/UpdateCertificateAuthorityCommand");
/**
 * <p>This is the <i>ACM Private CA API Reference</i>. It provides descriptions,
 * 			syntax, and usage examples for each of the actions and data types involved in creating
 * 			and managing private certificate authorities (CA) for your organization.</p>
 * 		       <p>The documentation for each action shows the Query API request parameters and the XML
 * 			response. Alternatively, you can use one of the AWS SDKs to access an API that's
 * 			tailored to the programming language or platform that you're using. For more
 * 			information, see <a href="https://aws.amazon.com/tools/#SDKs">AWS
 * 			SDKs</a>.</p>
 * 		       <note>
 * 			         <p>Each ACM Private CA API action has a throttling limit which determines the number of times
 * 				the action can be called per second. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaLimits.html#PcaLimits-api">API Rate Limits in ACM Private CA</a>
 * 				in the ACM Private CA user guide.</p>
 * 		       </note>
 */
class ACMPCA extends ACMPCAClient_1.ACMPCAClient {
    createCertificateAuthority(args, optionsOrCb, cb) {
        const command = new CreateCertificateAuthorityCommand_1.CreateCertificateAuthorityCommand(args);
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
    createCertificateAuthorityAuditReport(args, optionsOrCb, cb) {
        const command = new CreateCertificateAuthorityAuditReportCommand_1.CreateCertificateAuthorityAuditReportCommand(args);
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
    createPermission(args, optionsOrCb, cb) {
        const command = new CreatePermissionCommand_1.CreatePermissionCommand(args);
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
    deleteCertificateAuthority(args, optionsOrCb, cb) {
        const command = new DeleteCertificateAuthorityCommand_1.DeleteCertificateAuthorityCommand(args);
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
    deletePermission(args, optionsOrCb, cb) {
        const command = new DeletePermissionCommand_1.DeletePermissionCommand(args);
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
    describeCertificateAuthority(args, optionsOrCb, cb) {
        const command = new DescribeCertificateAuthorityCommand_1.DescribeCertificateAuthorityCommand(args);
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
    describeCertificateAuthorityAuditReport(args, optionsOrCb, cb) {
        const command = new DescribeCertificateAuthorityAuditReportCommand_1.DescribeCertificateAuthorityAuditReportCommand(args);
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
    getCertificateAuthorityCertificate(args, optionsOrCb, cb) {
        const command = new GetCertificateAuthorityCertificateCommand_1.GetCertificateAuthorityCertificateCommand(args);
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
    getCertificateAuthorityCsr(args, optionsOrCb, cb) {
        const command = new GetCertificateAuthorityCsrCommand_1.GetCertificateAuthorityCsrCommand(args);
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
    importCertificateAuthorityCertificate(args, optionsOrCb, cb) {
        const command = new ImportCertificateAuthorityCertificateCommand_1.ImportCertificateAuthorityCertificateCommand(args);
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
    issueCertificate(args, optionsOrCb, cb) {
        const command = new IssueCertificateCommand_1.IssueCertificateCommand(args);
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
    listCertificateAuthorities(args, optionsOrCb, cb) {
        const command = new ListCertificateAuthoritiesCommand_1.ListCertificateAuthoritiesCommand(args);
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
    listPermissions(args, optionsOrCb, cb) {
        const command = new ListPermissionsCommand_1.ListPermissionsCommand(args);
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
    listTags(args, optionsOrCb, cb) {
        const command = new ListTagsCommand_1.ListTagsCommand(args);
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
    restoreCertificateAuthority(args, optionsOrCb, cb) {
        const command = new RestoreCertificateAuthorityCommand_1.RestoreCertificateAuthorityCommand(args);
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
    revokeCertificate(args, optionsOrCb, cb) {
        const command = new RevokeCertificateCommand_1.RevokeCertificateCommand(args);
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
    tagCertificateAuthority(args, optionsOrCb, cb) {
        const command = new TagCertificateAuthorityCommand_1.TagCertificateAuthorityCommand(args);
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
    untagCertificateAuthority(args, optionsOrCb, cb) {
        const command = new UntagCertificateAuthorityCommand_1.UntagCertificateAuthorityCommand(args);
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
    updateCertificateAuthority(args, optionsOrCb, cb) {
        const command = new UpdateCertificateAuthorityCommand_1.UpdateCertificateAuthorityCommand(args);
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
exports.ACMPCA = ACMPCA;
//# sourceMappingURL=ACMPCA.js.map