"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WAFClient_1 = require("./WAFClient");
const CreateByteMatchSetCommand_1 = require("./commands/CreateByteMatchSetCommand");
const CreateGeoMatchSetCommand_1 = require("./commands/CreateGeoMatchSetCommand");
const CreateIPSetCommand_1 = require("./commands/CreateIPSetCommand");
const CreateRateBasedRuleCommand_1 = require("./commands/CreateRateBasedRuleCommand");
const CreateRegexMatchSetCommand_1 = require("./commands/CreateRegexMatchSetCommand");
const CreateRegexPatternSetCommand_1 = require("./commands/CreateRegexPatternSetCommand");
const CreateRuleCommand_1 = require("./commands/CreateRuleCommand");
const CreateRuleGroupCommand_1 = require("./commands/CreateRuleGroupCommand");
const CreateSizeConstraintSetCommand_1 = require("./commands/CreateSizeConstraintSetCommand");
const CreateSqlInjectionMatchSetCommand_1 = require("./commands/CreateSqlInjectionMatchSetCommand");
const CreateWebACLCommand_1 = require("./commands/CreateWebACLCommand");
const CreateXssMatchSetCommand_1 = require("./commands/CreateXssMatchSetCommand");
const DeleteByteMatchSetCommand_1 = require("./commands/DeleteByteMatchSetCommand");
const DeleteGeoMatchSetCommand_1 = require("./commands/DeleteGeoMatchSetCommand");
const DeleteIPSetCommand_1 = require("./commands/DeleteIPSetCommand");
const DeleteLoggingConfigurationCommand_1 = require("./commands/DeleteLoggingConfigurationCommand");
const DeletePermissionPolicyCommand_1 = require("./commands/DeletePermissionPolicyCommand");
const DeleteRateBasedRuleCommand_1 = require("./commands/DeleteRateBasedRuleCommand");
const DeleteRegexMatchSetCommand_1 = require("./commands/DeleteRegexMatchSetCommand");
const DeleteRegexPatternSetCommand_1 = require("./commands/DeleteRegexPatternSetCommand");
const DeleteRuleCommand_1 = require("./commands/DeleteRuleCommand");
const DeleteRuleGroupCommand_1 = require("./commands/DeleteRuleGroupCommand");
const DeleteSizeConstraintSetCommand_1 = require("./commands/DeleteSizeConstraintSetCommand");
const DeleteSqlInjectionMatchSetCommand_1 = require("./commands/DeleteSqlInjectionMatchSetCommand");
const DeleteWebACLCommand_1 = require("./commands/DeleteWebACLCommand");
const DeleteXssMatchSetCommand_1 = require("./commands/DeleteXssMatchSetCommand");
const GetByteMatchSetCommand_1 = require("./commands/GetByteMatchSetCommand");
const GetChangeTokenCommand_1 = require("./commands/GetChangeTokenCommand");
const GetChangeTokenStatusCommand_1 = require("./commands/GetChangeTokenStatusCommand");
const GetGeoMatchSetCommand_1 = require("./commands/GetGeoMatchSetCommand");
const GetIPSetCommand_1 = require("./commands/GetIPSetCommand");
const GetLoggingConfigurationCommand_1 = require("./commands/GetLoggingConfigurationCommand");
const GetPermissionPolicyCommand_1 = require("./commands/GetPermissionPolicyCommand");
const GetRateBasedRuleCommand_1 = require("./commands/GetRateBasedRuleCommand");
const GetRateBasedRuleManagedKeysCommand_1 = require("./commands/GetRateBasedRuleManagedKeysCommand");
const GetRegexMatchSetCommand_1 = require("./commands/GetRegexMatchSetCommand");
const GetRegexPatternSetCommand_1 = require("./commands/GetRegexPatternSetCommand");
const GetRuleCommand_1 = require("./commands/GetRuleCommand");
const GetRuleGroupCommand_1 = require("./commands/GetRuleGroupCommand");
const GetSampledRequestsCommand_1 = require("./commands/GetSampledRequestsCommand");
const GetSizeConstraintSetCommand_1 = require("./commands/GetSizeConstraintSetCommand");
const GetSqlInjectionMatchSetCommand_1 = require("./commands/GetSqlInjectionMatchSetCommand");
const GetWebACLCommand_1 = require("./commands/GetWebACLCommand");
const GetXssMatchSetCommand_1 = require("./commands/GetXssMatchSetCommand");
const ListActivatedRulesInRuleGroupCommand_1 = require("./commands/ListActivatedRulesInRuleGroupCommand");
const ListByteMatchSetsCommand_1 = require("./commands/ListByteMatchSetsCommand");
const ListGeoMatchSetsCommand_1 = require("./commands/ListGeoMatchSetsCommand");
const ListIPSetsCommand_1 = require("./commands/ListIPSetsCommand");
const ListLoggingConfigurationsCommand_1 = require("./commands/ListLoggingConfigurationsCommand");
const ListRateBasedRulesCommand_1 = require("./commands/ListRateBasedRulesCommand");
const ListRegexMatchSetsCommand_1 = require("./commands/ListRegexMatchSetsCommand");
const ListRegexPatternSetsCommand_1 = require("./commands/ListRegexPatternSetsCommand");
const ListRuleGroupsCommand_1 = require("./commands/ListRuleGroupsCommand");
const ListRulesCommand_1 = require("./commands/ListRulesCommand");
const ListSizeConstraintSetsCommand_1 = require("./commands/ListSizeConstraintSetsCommand");
const ListSqlInjectionMatchSetsCommand_1 = require("./commands/ListSqlInjectionMatchSetsCommand");
const ListSubscribedRuleGroupsCommand_1 = require("./commands/ListSubscribedRuleGroupsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListWebACLsCommand_1 = require("./commands/ListWebACLsCommand");
const ListXssMatchSetsCommand_1 = require("./commands/ListXssMatchSetsCommand");
const PutLoggingConfigurationCommand_1 = require("./commands/PutLoggingConfigurationCommand");
const PutPermissionPolicyCommand_1 = require("./commands/PutPermissionPolicyCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateByteMatchSetCommand_1 = require("./commands/UpdateByteMatchSetCommand");
const UpdateGeoMatchSetCommand_1 = require("./commands/UpdateGeoMatchSetCommand");
const UpdateIPSetCommand_1 = require("./commands/UpdateIPSetCommand");
const UpdateRateBasedRuleCommand_1 = require("./commands/UpdateRateBasedRuleCommand");
const UpdateRegexMatchSetCommand_1 = require("./commands/UpdateRegexMatchSetCommand");
const UpdateRegexPatternSetCommand_1 = require("./commands/UpdateRegexPatternSetCommand");
const UpdateRuleCommand_1 = require("./commands/UpdateRuleCommand");
const UpdateRuleGroupCommand_1 = require("./commands/UpdateRuleGroupCommand");
const UpdateSizeConstraintSetCommand_1 = require("./commands/UpdateSizeConstraintSetCommand");
const UpdateSqlInjectionMatchSetCommand_1 = require("./commands/UpdateSqlInjectionMatchSetCommand");
const UpdateWebACLCommand_1 = require("./commands/UpdateWebACLCommand");
const UpdateXssMatchSetCommand_1 = require("./commands/UpdateXssMatchSetCommand");
/**
 * <p>This is the <i>AWS WAF API Reference</i> for using AWS WAF with Amazon CloudFront. The AWS WAF actions and data types listed in the reference are available for protecting Amazon CloudFront distributions. You can use these actions and data types via the endpoint <i>waf.amazonaws.com</i>. This guide is for developers who need detailed information about the AWS WAF API actions,
 * 			data types, and errors. For detailed information about AWS WAF features and an overview of how to use the AWS WAF API, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 */
class WAF extends WAFClient_1.WAFClient {
    createByteMatchSet(args, optionsOrCb, cb) {
        const command = new CreateByteMatchSetCommand_1.CreateByteMatchSetCommand(args);
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
    createGeoMatchSet(args, optionsOrCb, cb) {
        const command = new CreateGeoMatchSetCommand_1.CreateGeoMatchSetCommand(args);
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
    createRateBasedRule(args, optionsOrCb, cb) {
        const command = new CreateRateBasedRuleCommand_1.CreateRateBasedRuleCommand(args);
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
    createRegexMatchSet(args, optionsOrCb, cb) {
        const command = new CreateRegexMatchSetCommand_1.CreateRegexMatchSetCommand(args);
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
    createRule(args, optionsOrCb, cb) {
        const command = new CreateRuleCommand_1.CreateRuleCommand(args);
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
    createSizeConstraintSet(args, optionsOrCb, cb) {
        const command = new CreateSizeConstraintSetCommand_1.CreateSizeConstraintSetCommand(args);
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
    createSqlInjectionMatchSet(args, optionsOrCb, cb) {
        const command = new CreateSqlInjectionMatchSetCommand_1.CreateSqlInjectionMatchSetCommand(args);
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
    createXssMatchSet(args, optionsOrCb, cb) {
        const command = new CreateXssMatchSetCommand_1.CreateXssMatchSetCommand(args);
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
    deleteByteMatchSet(args, optionsOrCb, cb) {
        const command = new DeleteByteMatchSetCommand_1.DeleteByteMatchSetCommand(args);
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
    deleteGeoMatchSet(args, optionsOrCb, cb) {
        const command = new DeleteGeoMatchSetCommand_1.DeleteGeoMatchSetCommand(args);
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
    deletePermissionPolicy(args, optionsOrCb, cb) {
        const command = new DeletePermissionPolicyCommand_1.DeletePermissionPolicyCommand(args);
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
    deleteRateBasedRule(args, optionsOrCb, cb) {
        const command = new DeleteRateBasedRuleCommand_1.DeleteRateBasedRuleCommand(args);
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
    deleteRegexMatchSet(args, optionsOrCb, cb) {
        const command = new DeleteRegexMatchSetCommand_1.DeleteRegexMatchSetCommand(args);
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
    deleteRule(args, optionsOrCb, cb) {
        const command = new DeleteRuleCommand_1.DeleteRuleCommand(args);
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
    deleteSizeConstraintSet(args, optionsOrCb, cb) {
        const command = new DeleteSizeConstraintSetCommand_1.DeleteSizeConstraintSetCommand(args);
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
    deleteSqlInjectionMatchSet(args, optionsOrCb, cb) {
        const command = new DeleteSqlInjectionMatchSetCommand_1.DeleteSqlInjectionMatchSetCommand(args);
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
    deleteXssMatchSet(args, optionsOrCb, cb) {
        const command = new DeleteXssMatchSetCommand_1.DeleteXssMatchSetCommand(args);
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
    getByteMatchSet(args, optionsOrCb, cb) {
        const command = new GetByteMatchSetCommand_1.GetByteMatchSetCommand(args);
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
    getChangeToken(args, optionsOrCb, cb) {
        const command = new GetChangeTokenCommand_1.GetChangeTokenCommand(args);
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
    getChangeTokenStatus(args, optionsOrCb, cb) {
        const command = new GetChangeTokenStatusCommand_1.GetChangeTokenStatusCommand(args);
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
    getGeoMatchSet(args, optionsOrCb, cb) {
        const command = new GetGeoMatchSetCommand_1.GetGeoMatchSetCommand(args);
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
    getPermissionPolicy(args, optionsOrCb, cb) {
        const command = new GetPermissionPolicyCommand_1.GetPermissionPolicyCommand(args);
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
    getRateBasedRule(args, optionsOrCb, cb) {
        const command = new GetRateBasedRuleCommand_1.GetRateBasedRuleCommand(args);
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
    getRateBasedRuleManagedKeys(args, optionsOrCb, cb) {
        const command = new GetRateBasedRuleManagedKeysCommand_1.GetRateBasedRuleManagedKeysCommand(args);
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
    getRegexMatchSet(args, optionsOrCb, cb) {
        const command = new GetRegexMatchSetCommand_1.GetRegexMatchSetCommand(args);
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
    getRule(args, optionsOrCb, cb) {
        const command = new GetRuleCommand_1.GetRuleCommand(args);
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
    getSizeConstraintSet(args, optionsOrCb, cb) {
        const command = new GetSizeConstraintSetCommand_1.GetSizeConstraintSetCommand(args);
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
    getSqlInjectionMatchSet(args, optionsOrCb, cb) {
        const command = new GetSqlInjectionMatchSetCommand_1.GetSqlInjectionMatchSetCommand(args);
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
    getXssMatchSet(args, optionsOrCb, cb) {
        const command = new GetXssMatchSetCommand_1.GetXssMatchSetCommand(args);
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
    listActivatedRulesInRuleGroup(args, optionsOrCb, cb) {
        const command = new ListActivatedRulesInRuleGroupCommand_1.ListActivatedRulesInRuleGroupCommand(args);
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
    listByteMatchSets(args, optionsOrCb, cb) {
        const command = new ListByteMatchSetsCommand_1.ListByteMatchSetsCommand(args);
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
    listGeoMatchSets(args, optionsOrCb, cb) {
        const command = new ListGeoMatchSetsCommand_1.ListGeoMatchSetsCommand(args);
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
    listRateBasedRules(args, optionsOrCb, cb) {
        const command = new ListRateBasedRulesCommand_1.ListRateBasedRulesCommand(args);
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
    listRegexMatchSets(args, optionsOrCb, cb) {
        const command = new ListRegexMatchSetsCommand_1.ListRegexMatchSetsCommand(args);
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
    listRules(args, optionsOrCb, cb) {
        const command = new ListRulesCommand_1.ListRulesCommand(args);
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
    listSizeConstraintSets(args, optionsOrCb, cb) {
        const command = new ListSizeConstraintSetsCommand_1.ListSizeConstraintSetsCommand(args);
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
    listSqlInjectionMatchSets(args, optionsOrCb, cb) {
        const command = new ListSqlInjectionMatchSetsCommand_1.ListSqlInjectionMatchSetsCommand(args);
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
    listSubscribedRuleGroups(args, optionsOrCb, cb) {
        const command = new ListSubscribedRuleGroupsCommand_1.ListSubscribedRuleGroupsCommand(args);
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
    listXssMatchSets(args, optionsOrCb, cb) {
        const command = new ListXssMatchSetsCommand_1.ListXssMatchSetsCommand(args);
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
    putPermissionPolicy(args, optionsOrCb, cb) {
        const command = new PutPermissionPolicyCommand_1.PutPermissionPolicyCommand(args);
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
    updateByteMatchSet(args, optionsOrCb, cb) {
        const command = new UpdateByteMatchSetCommand_1.UpdateByteMatchSetCommand(args);
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
    updateGeoMatchSet(args, optionsOrCb, cb) {
        const command = new UpdateGeoMatchSetCommand_1.UpdateGeoMatchSetCommand(args);
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
    updateRateBasedRule(args, optionsOrCb, cb) {
        const command = new UpdateRateBasedRuleCommand_1.UpdateRateBasedRuleCommand(args);
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
    updateRegexMatchSet(args, optionsOrCb, cb) {
        const command = new UpdateRegexMatchSetCommand_1.UpdateRegexMatchSetCommand(args);
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
    updateRule(args, optionsOrCb, cb) {
        const command = new UpdateRuleCommand_1.UpdateRuleCommand(args);
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
    updateSizeConstraintSet(args, optionsOrCb, cb) {
        const command = new UpdateSizeConstraintSetCommand_1.UpdateSizeConstraintSetCommand(args);
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
    updateSqlInjectionMatchSet(args, optionsOrCb, cb) {
        const command = new UpdateSqlInjectionMatchSetCommand_1.UpdateSqlInjectionMatchSetCommand(args);
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
    updateXssMatchSet(args, optionsOrCb, cb) {
        const command = new UpdateXssMatchSetCommand_1.UpdateXssMatchSetCommand(args);
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
exports.WAF = WAF;
//# sourceMappingURL=WAF.js.map