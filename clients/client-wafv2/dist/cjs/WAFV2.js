"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WAFV2Client_1 = require("./WAFV2Client");
const AssociateWebACLCommand_1 = require("./commands/AssociateWebACLCommand");
const CheckCapacityCommand_1 = require("./commands/CheckCapacityCommand");
const CreateIPSetCommand_1 = require("./commands/CreateIPSetCommand");
const CreateRegexPatternSetCommand_1 = require("./commands/CreateRegexPatternSetCommand");
const CreateRuleGroupCommand_1 = require("./commands/CreateRuleGroupCommand");
const CreateWebACLCommand_1 = require("./commands/CreateWebACLCommand");
const DeleteIPSetCommand_1 = require("./commands/DeleteIPSetCommand");
const DeleteLoggingConfigurationCommand_1 = require("./commands/DeleteLoggingConfigurationCommand");
const DeleteRegexPatternSetCommand_1 = require("./commands/DeleteRegexPatternSetCommand");
const DeleteRuleGroupCommand_1 = require("./commands/DeleteRuleGroupCommand");
const DeleteWebACLCommand_1 = require("./commands/DeleteWebACLCommand");
const DescribeManagedRuleGroupCommand_1 = require("./commands/DescribeManagedRuleGroupCommand");
const DisassociateWebACLCommand_1 = require("./commands/DisassociateWebACLCommand");
const GetIPSetCommand_1 = require("./commands/GetIPSetCommand");
const GetLoggingConfigurationCommand_1 = require("./commands/GetLoggingConfigurationCommand");
const GetRateBasedStatementManagedKeysCommand_1 = require("./commands/GetRateBasedStatementManagedKeysCommand");
const GetRegexPatternSetCommand_1 = require("./commands/GetRegexPatternSetCommand");
const GetRuleGroupCommand_1 = require("./commands/GetRuleGroupCommand");
const GetSampledRequestsCommand_1 = require("./commands/GetSampledRequestsCommand");
const GetWebACLCommand_1 = require("./commands/GetWebACLCommand");
const GetWebACLForResourceCommand_1 = require("./commands/GetWebACLForResourceCommand");
const ListAvailableManagedRuleGroupsCommand_1 = require("./commands/ListAvailableManagedRuleGroupsCommand");
const ListIPSetsCommand_1 = require("./commands/ListIPSetsCommand");
const ListLoggingConfigurationsCommand_1 = require("./commands/ListLoggingConfigurationsCommand");
const ListRegexPatternSetsCommand_1 = require("./commands/ListRegexPatternSetsCommand");
const ListResourcesForWebACLCommand_1 = require("./commands/ListResourcesForWebACLCommand");
const ListRuleGroupsCommand_1 = require("./commands/ListRuleGroupsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListWebACLsCommand_1 = require("./commands/ListWebACLsCommand");
const PutLoggingConfigurationCommand_1 = require("./commands/PutLoggingConfigurationCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateIPSetCommand_1 = require("./commands/UpdateIPSetCommand");
const UpdateRegexPatternSetCommand_1 = require("./commands/UpdateRegexPatternSetCommand");
const UpdateRuleGroupCommand_1 = require("./commands/UpdateRuleGroupCommand");
const UpdateWebACLCommand_1 = require("./commands/UpdateWebACLCommand");
/**
 * <note>
 *             <p>This is the latest version of the <b>AWS WAF</b> API, released in
 *             November, 2019. The names of the entities that you use to access this API, like
 *             endpoints and namespaces, all have the versioning information added, like "V2" or "v2",
 *             to distinguish from the prior version. We recommend migrating your resources to this
 *             version, because it has a number of significant improvements.</p>
 *             <p>If you used AWS WAF prior to this release, you can't use this AWS WAFV2 API to access
 *             any AWS WAF resources that you created before. You can access your old rules, web ACLs,
 *             and other AWS WAF resources only through the AWS WAF Classic APIs. The AWS WAF Classic
 *             APIs have retained the prior names, endpoints, and namespaces. </p>
 *             <p>For information, including how to migrate your AWS WAF resources to this version, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF
 *                Developer Guide</a>. </p>
 *          </note>
 *          <p>AWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests
 *          that are forwarded to Amazon CloudFront, an Amazon API Gateway API, or an Application Load
 *          Balancer. AWS WAF also lets you control access to your content. Based on conditions that
 *          you specify, such as the IP addresses that requests originate from or the values of query
 *          strings, API Gateway, CloudFront, or the Application Load Balancer responds to requests
 *          either with the requested content or with an HTTP 403 status code (Forbidden). You also can
 *          configure CloudFront to return a custom error page when a request is blocked.</p>
 *          <p>This API guide is for developers who need detailed information about AWS WAF API
 *          actions, data types, and errors. For detailed information about AWS WAF features and an
 *          overview of how to use AWS WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 *          <p>You can make API calls using the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region">AWS Service Endpoints for AWS WAF</a>. </p>
 *          <ul>
 *             <li>
 *                <p>For regional applications, you can use any of the endpoints in the list.
 *                A regional application can be an Application Load Balancer (ALB) or an API Gateway stage. </p>
 *             </li>
 *             <li>
 *                <p>For AWS CloudFront applications, you must use the API endpoint listed for
 *                US East (N. Virginia): us-east-1.</p>
 *             </li>
 *          </ul>
 *          <p>Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the
 *          programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p>
 *          <p>We currently provide two versions of the AWS WAF API: this API and the prior versions,
 *          the classic AWS WAF APIs. This new API provides the same functionality as the older
 *          versions, with the following major improvements:</p>
 *          <ul>
 *             <li>
 *                <p>You use one API for both global and regional applications. Where you need to
 *                distinguish the scope, you specify a <code>Scope</code> parameter and set it to
 *                   <code>CLOUDFRONT</code> or <code>REGIONAL</code>. </p>
 *             </li>
 *             <li>
 *                <p>You can define a Web ACL or rule group with a single API call, and update it with a
 *                single call. You define all rule specifications in JSON format, and pass them to your
 *                rule group or Web ACL API calls.</p>
 *             </li>
 *             <li>
 *                <p>The limits AWS WAF places on the use of rules more closely reflects the cost of
 *                running each type of rule. Rule groups include capacity settings, so you know the
 *                maximum cost of a rule group when you use it.</p>
 *             </li>
 *          </ul>
 */
class WAFV2 extends WAFV2Client_1.WAFV2Client {
    associateWebACL(args, optionsOrCb, cb) {
        const command = new AssociateWebACLCommand_1.AssociateWebACLCommand(args);
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
    checkCapacity(args, optionsOrCb, cb) {
        const command = new CheckCapacityCommand_1.CheckCapacityCommand(args);
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
    createIPSet(args, optionsOrCb, cb) {
        const command = new CreateIPSetCommand_1.CreateIPSetCommand(args);
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
    createRegexPatternSet(args, optionsOrCb, cb) {
        const command = new CreateRegexPatternSetCommand_1.CreateRegexPatternSetCommand(args);
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
    createRuleGroup(args, optionsOrCb, cb) {
        const command = new CreateRuleGroupCommand_1.CreateRuleGroupCommand(args);
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
    createWebACL(args, optionsOrCb, cb) {
        const command = new CreateWebACLCommand_1.CreateWebACLCommand(args);
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
    deleteIPSet(args, optionsOrCb, cb) {
        const command = new DeleteIPSetCommand_1.DeleteIPSetCommand(args);
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
    deleteLoggingConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteLoggingConfigurationCommand_1.DeleteLoggingConfigurationCommand(args);
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
    deleteRegexPatternSet(args, optionsOrCb, cb) {
        const command = new DeleteRegexPatternSetCommand_1.DeleteRegexPatternSetCommand(args);
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
    deleteRuleGroup(args, optionsOrCb, cb) {
        const command = new DeleteRuleGroupCommand_1.DeleteRuleGroupCommand(args);
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
    deleteWebACL(args, optionsOrCb, cb) {
        const command = new DeleteWebACLCommand_1.DeleteWebACLCommand(args);
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
    describeManagedRuleGroup(args, optionsOrCb, cb) {
        const command = new DescribeManagedRuleGroupCommand_1.DescribeManagedRuleGroupCommand(args);
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
    disassociateWebACL(args, optionsOrCb, cb) {
        const command = new DisassociateWebACLCommand_1.DisassociateWebACLCommand(args);
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
    getIPSet(args, optionsOrCb, cb) {
        const command = new GetIPSetCommand_1.GetIPSetCommand(args);
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
    getLoggingConfiguration(args, optionsOrCb, cb) {
        const command = new GetLoggingConfigurationCommand_1.GetLoggingConfigurationCommand(args);
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
    getRateBasedStatementManagedKeys(args, optionsOrCb, cb) {
        const command = new GetRateBasedStatementManagedKeysCommand_1.GetRateBasedStatementManagedKeysCommand(args);
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
    getRegexPatternSet(args, optionsOrCb, cb) {
        const command = new GetRegexPatternSetCommand_1.GetRegexPatternSetCommand(args);
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
    getRuleGroup(args, optionsOrCb, cb) {
        const command = new GetRuleGroupCommand_1.GetRuleGroupCommand(args);
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
    getSampledRequests(args, optionsOrCb, cb) {
        const command = new GetSampledRequestsCommand_1.GetSampledRequestsCommand(args);
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
    getWebACL(args, optionsOrCb, cb) {
        const command = new GetWebACLCommand_1.GetWebACLCommand(args);
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
    getWebACLForResource(args, optionsOrCb, cb) {
        const command = new GetWebACLForResourceCommand_1.GetWebACLForResourceCommand(args);
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
    listAvailableManagedRuleGroups(args, optionsOrCb, cb) {
        const command = new ListAvailableManagedRuleGroupsCommand_1.ListAvailableManagedRuleGroupsCommand(args);
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
    listIPSets(args, optionsOrCb, cb) {
        const command = new ListIPSetsCommand_1.ListIPSetsCommand(args);
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
    listLoggingConfigurations(args, optionsOrCb, cb) {
        const command = new ListLoggingConfigurationsCommand_1.ListLoggingConfigurationsCommand(args);
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
    listRegexPatternSets(args, optionsOrCb, cb) {
        const command = new ListRegexPatternSetsCommand_1.ListRegexPatternSetsCommand(args);
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
    listResourcesForWebACL(args, optionsOrCb, cb) {
        const command = new ListResourcesForWebACLCommand_1.ListResourcesForWebACLCommand(args);
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
    listRuleGroups(args, optionsOrCb, cb) {
        const command = new ListRuleGroupsCommand_1.ListRuleGroupsCommand(args);
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
    listWebACLs(args, optionsOrCb, cb) {
        const command = new ListWebACLsCommand_1.ListWebACLsCommand(args);
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
    putLoggingConfiguration(args, optionsOrCb, cb) {
        const command = new PutLoggingConfigurationCommand_1.PutLoggingConfigurationCommand(args);
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
    updateIPSet(args, optionsOrCb, cb) {
        const command = new UpdateIPSetCommand_1.UpdateIPSetCommand(args);
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
    updateRegexPatternSet(args, optionsOrCb, cb) {
        const command = new UpdateRegexPatternSetCommand_1.UpdateRegexPatternSetCommand(args);
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
    updateRuleGroup(args, optionsOrCb, cb) {
        const command = new UpdateRuleGroupCommand_1.UpdateRuleGroupCommand(args);
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
    updateWebACL(args, optionsOrCb, cb) {
        const command = new UpdateWebACLCommand_1.UpdateWebACLCommand(args);
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
exports.WAFV2 = WAFV2;
//# sourceMappingURL=WAFV2.js.map