"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SupportClient_1 = require("./SupportClient");
const AddAttachmentsToSetCommand_1 = require("./commands/AddAttachmentsToSetCommand");
const AddCommunicationToCaseCommand_1 = require("./commands/AddCommunicationToCaseCommand");
const CreateCaseCommand_1 = require("./commands/CreateCaseCommand");
const DescribeAttachmentCommand_1 = require("./commands/DescribeAttachmentCommand");
const DescribeCasesCommand_1 = require("./commands/DescribeCasesCommand");
const DescribeCommunicationsCommand_1 = require("./commands/DescribeCommunicationsCommand");
const DescribeServicesCommand_1 = require("./commands/DescribeServicesCommand");
const DescribeSeverityLevelsCommand_1 = require("./commands/DescribeSeverityLevelsCommand");
const DescribeTrustedAdvisorCheckRefreshStatusesCommand_1 = require("./commands/DescribeTrustedAdvisorCheckRefreshStatusesCommand");
const DescribeTrustedAdvisorCheckResultCommand_1 = require("./commands/DescribeTrustedAdvisorCheckResultCommand");
const DescribeTrustedAdvisorCheckSummariesCommand_1 = require("./commands/DescribeTrustedAdvisorCheckSummariesCommand");
const DescribeTrustedAdvisorChecksCommand_1 = require("./commands/DescribeTrustedAdvisorChecksCommand");
const RefreshTrustedAdvisorCheckCommand_1 = require("./commands/RefreshTrustedAdvisorCheckCommand");
const ResolveCaseCommand_1 = require("./commands/ResolveCaseCommand");
/**
 * <fullname>AWS Support</fullname>
 *         <p>The AWS Support API reference is intended for programmers who need detailed
 *             information about the AWS Support operations and data types. This service enables you to
 *             manage your AWS Support cases programmatically. It uses HTTP methods that return results
 *             in JSON format.</p>
 *         <p>The AWS Support service also exposes a set of <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">Trusted Advisor</a> features. You can
 *             retrieve a list of checks and their descriptions, get check results, specify checks to
 *             refresh, and get the refresh status of checks.</p>
 *         <p>The following list describes the AWS Support case management operations:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>Service names, issue categories, and available severity
 *                         levels. </b>The <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return AWS service names,
 *                     service codes, service categories, and problem severity levels. You use these
 *                     values when you call the <a>CreateCase</a> operation.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Case creation, case details, and case
 *                         resolution.</b> The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations create AWS Support cases, retrieve
 *                     information about cases, and resolve cases.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Case communication.</b> The <a>DescribeCommunications</a>, <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add
 *                     communications and attachments to AWS Support cases.</p>
 *             </li>
 *          </ul>
 *         <p>The following list describes the operations available from the AWS Support service
 *             for Trusted Advisor:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorChecks</a> returns the list of checks that
 *                     run against your AWS resources.</p>
 *             </li>
 *             <li>
 *                 <p>Using the <code>checkId</code> for a specific check returned by <a>DescribeTrustedAdvisorChecks</a>, you can call <a>DescribeTrustedAdvisorCheckResult</a> to obtain the results for the
 *                     check you specified.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckSummaries</a> returns summarized
 *                     results for one or more Trusted Advisor checks.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>RefreshTrustedAdvisorCheck</a> requests that Trusted Advisor rerun
 *                     a specified check.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> reports the refresh
 *                     status of one or more checks.</p>
 *             </li>
 *          </ul>
 *         <p>For authentication of requests, AWS Support uses <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *                 Process</a>.</p>
 *         <p>See <a href="https://docs.aws.amazon.com/awssupport/latest/user/Welcome.html">About the
 *                 AWS Support API</a> in the <i>AWS Support User Guide</i> for
 *             information about how to use this service to create and manage your support cases, and
 *             how to call Trusted Advisor for results of checks on your resources.</p>
 */
class Support extends SupportClient_1.SupportClient {
    addAttachmentsToSet(args, optionsOrCb, cb) {
        const command = new AddAttachmentsToSetCommand_1.AddAttachmentsToSetCommand(args);
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
    addCommunicationToCase(args, optionsOrCb, cb) {
        const command = new AddCommunicationToCaseCommand_1.AddCommunicationToCaseCommand(args);
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
    createCase(args, optionsOrCb, cb) {
        const command = new CreateCaseCommand_1.CreateCaseCommand(args);
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
    describeAttachment(args, optionsOrCb, cb) {
        const command = new DescribeAttachmentCommand_1.DescribeAttachmentCommand(args);
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
    describeCases(args, optionsOrCb, cb) {
        const command = new DescribeCasesCommand_1.DescribeCasesCommand(args);
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
    describeCommunications(args, optionsOrCb, cb) {
        const command = new DescribeCommunicationsCommand_1.DescribeCommunicationsCommand(args);
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
    describeServices(args, optionsOrCb, cb) {
        const command = new DescribeServicesCommand_1.DescribeServicesCommand(args);
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
    describeSeverityLevels(args, optionsOrCb, cb) {
        const command = new DescribeSeverityLevelsCommand_1.DescribeSeverityLevelsCommand(args);
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
    resolveCase(args, optionsOrCb, cb) {
        const command = new ResolveCaseCommand_1.ResolveCaseCommand(args);
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
    describeTrustedAdvisorCheckRefreshStatuses(args, optionsOrCb, cb) {
        const command = new DescribeTrustedAdvisorCheckRefreshStatusesCommand_1.DescribeTrustedAdvisorCheckRefreshStatusesCommand(args);
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
    describeTrustedAdvisorCheckResult(args, optionsOrCb, cb) {
        const command = new DescribeTrustedAdvisorCheckResultCommand_1.DescribeTrustedAdvisorCheckResultCommand(args);
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
    describeTrustedAdvisorCheckSummaries(args, optionsOrCb, cb) {
        const command = new DescribeTrustedAdvisorCheckSummariesCommand_1.DescribeTrustedAdvisorCheckSummariesCommand(args);
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
    describeTrustedAdvisorChecks(args, optionsOrCb, cb) {
        const command = new DescribeTrustedAdvisorChecksCommand_1.DescribeTrustedAdvisorChecksCommand(args);
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
    refreshTrustedAdvisorCheck(args, optionsOrCb, cb) {
        const command = new RefreshTrustedAdvisorCheckCommand_1.RefreshTrustedAdvisorCheckCommand(args);
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
exports.Support = Support;
//# sourceMappingURL=Support.js.map