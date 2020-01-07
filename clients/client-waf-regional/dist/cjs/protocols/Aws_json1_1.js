"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.AssociateWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateWebACLCommand = serializeAws_json1_1AssociateWebACLCommand;
async function serializeAws_json1_1DisassociateWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DisassociateWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateWebACLCommand = serializeAws_json1_1DisassociateWebACLCommand;
async function serializeAws_json1_1GetWebACLForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetWebACLForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWebACLForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetWebACLForResourceCommand = serializeAws_json1_1GetWebACLForResourceCommand;
async function serializeAws_json1_1ListResourcesForWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListResourcesForWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesForWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourcesForWebACLCommand = serializeAws_json1_1ListResourcesForWebACLCommand;
async function serializeAws_json1_1CreateByteMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.CreateByteMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateByteMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateByteMatchSetCommand = serializeAws_json1_1CreateByteMatchSetCommand;
async function serializeAws_json1_1CreateGeoMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.CreateGeoMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGeoMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateGeoMatchSetCommand = serializeAws_json1_1CreateGeoMatchSetCommand;
async function serializeAws_json1_1CreateIPSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.CreateIPSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateIPSetCommand = serializeAws_json1_1CreateIPSetCommand;
async function serializeAws_json1_1CreateRateBasedRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.CreateRateBasedRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRateBasedRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRateBasedRuleCommand = serializeAws_json1_1CreateRateBasedRuleCommand;
async function serializeAws_json1_1CreateRegexMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.CreateRegexMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRegexMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRegexMatchSetCommand = serializeAws_json1_1CreateRegexMatchSetCommand;
async function serializeAws_json1_1CreateRegexPatternSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.CreateRegexPatternSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRegexPatternSetCommand = serializeAws_json1_1CreateRegexPatternSetCommand;
async function serializeAws_json1_1CreateRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.CreateRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRuleCommand = serializeAws_json1_1CreateRuleCommand;
async function serializeAws_json1_1CreateRuleGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.CreateRuleGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRuleGroupCommand = serializeAws_json1_1CreateRuleGroupCommand;
async function serializeAws_json1_1CreateSizeConstraintSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.CreateSizeConstraintSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSizeConstraintSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSizeConstraintSetCommand = serializeAws_json1_1CreateSizeConstraintSetCommand;
async function serializeAws_json1_1CreateSqlInjectionMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSqlInjectionMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSqlInjectionMatchSetCommand = serializeAws_json1_1CreateSqlInjectionMatchSetCommand;
async function serializeAws_json1_1CreateWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.CreateWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateWebACLCommand = serializeAws_json1_1CreateWebACLCommand;
async function serializeAws_json1_1CreateXssMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.CreateXssMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateXssMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateXssMatchSetCommand = serializeAws_json1_1CreateXssMatchSetCommand;
async function serializeAws_json1_1DeleteByteMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeleteByteMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteByteMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteByteMatchSetCommand = serializeAws_json1_1DeleteByteMatchSetCommand;
async function serializeAws_json1_1DeleteGeoMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeleteGeoMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGeoMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteGeoMatchSetCommand = serializeAws_json1_1DeleteGeoMatchSetCommand;
async function serializeAws_json1_1DeleteIPSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeleteIPSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteIPSetCommand = serializeAws_json1_1DeleteIPSetCommand;
async function serializeAws_json1_1DeleteLoggingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSWAF_Regional_20161128.DeleteLoggingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLoggingConfigurationCommand = serializeAws_json1_1DeleteLoggingConfigurationCommand;
async function serializeAws_json1_1DeletePermissionPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeletePermissionPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePermissionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePermissionPolicyCommand = serializeAws_json1_1DeletePermissionPolicyCommand;
async function serializeAws_json1_1DeleteRateBasedRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeleteRateBasedRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRateBasedRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRateBasedRuleCommand = serializeAws_json1_1DeleteRateBasedRuleCommand;
async function serializeAws_json1_1DeleteRegexMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeleteRegexMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRegexMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRegexMatchSetCommand = serializeAws_json1_1DeleteRegexMatchSetCommand;
async function serializeAws_json1_1DeleteRegexPatternSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeleteRegexPatternSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRegexPatternSetCommand = serializeAws_json1_1DeleteRegexPatternSetCommand;
async function serializeAws_json1_1DeleteRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeleteRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRuleCommand = serializeAws_json1_1DeleteRuleCommand;
async function serializeAws_json1_1DeleteRuleGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeleteRuleGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRuleGroupCommand = serializeAws_json1_1DeleteRuleGroupCommand;
async function serializeAws_json1_1DeleteSizeConstraintSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeleteSizeConstraintSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSizeConstraintSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSizeConstraintSetCommand = serializeAws_json1_1DeleteSizeConstraintSetCommand;
async function serializeAws_json1_1DeleteSqlInjectionMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSqlInjectionMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSqlInjectionMatchSetCommand = serializeAws_json1_1DeleteSqlInjectionMatchSetCommand;
async function serializeAws_json1_1DeleteWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeleteWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteWebACLCommand = serializeAws_json1_1DeleteWebACLCommand;
async function serializeAws_json1_1DeleteXssMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.DeleteXssMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteXssMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteXssMatchSetCommand = serializeAws_json1_1DeleteXssMatchSetCommand;
async function serializeAws_json1_1GetByteMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetByteMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetByteMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetByteMatchSetCommand = serializeAws_json1_1GetByteMatchSetCommand;
async function serializeAws_json1_1GetChangeTokenCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetChangeToken";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetChangeTokenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetChangeTokenCommand = serializeAws_json1_1GetChangeTokenCommand;
async function serializeAws_json1_1GetChangeTokenStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetChangeTokenStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetChangeTokenStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetChangeTokenStatusCommand = serializeAws_json1_1GetChangeTokenStatusCommand;
async function serializeAws_json1_1GetGeoMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetGeoMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetGeoMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetGeoMatchSetCommand = serializeAws_json1_1GetGeoMatchSetCommand;
async function serializeAws_json1_1GetIPSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetIPSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetIPSetCommand = serializeAws_json1_1GetIPSetCommand;
async function serializeAws_json1_1GetLoggingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetLoggingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLoggingConfigurationCommand = serializeAws_json1_1GetLoggingConfigurationCommand;
async function serializeAws_json1_1GetPermissionPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetPermissionPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPermissionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPermissionPolicyCommand = serializeAws_json1_1GetPermissionPolicyCommand;
async function serializeAws_json1_1GetRateBasedRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetRateBasedRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRateBasedRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRateBasedRuleCommand = serializeAws_json1_1GetRateBasedRuleCommand;
async function serializeAws_json1_1GetRateBasedRuleManagedKeysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRateBasedRuleManagedKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRateBasedRuleManagedKeysCommand = serializeAws_json1_1GetRateBasedRuleManagedKeysCommand;
async function serializeAws_json1_1GetRegexMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetRegexMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRegexMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRegexMatchSetCommand = serializeAws_json1_1GetRegexMatchSetCommand;
async function serializeAws_json1_1GetRegexPatternSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetRegexPatternSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRegexPatternSetCommand = serializeAws_json1_1GetRegexPatternSetCommand;
async function serializeAws_json1_1GetRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRuleCommand = serializeAws_json1_1GetRuleCommand;
async function serializeAws_json1_1GetRuleGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetRuleGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRuleGroupCommand = serializeAws_json1_1GetRuleGroupCommand;
async function serializeAws_json1_1GetSampledRequestsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetSampledRequests";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSampledRequestsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSampledRequestsCommand = serializeAws_json1_1GetSampledRequestsCommand;
async function serializeAws_json1_1GetSizeConstraintSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetSizeConstraintSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSizeConstraintSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSizeConstraintSetCommand = serializeAws_json1_1GetSizeConstraintSetCommand;
async function serializeAws_json1_1GetSqlInjectionMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetSqlInjectionMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSqlInjectionMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSqlInjectionMatchSetCommand = serializeAws_json1_1GetSqlInjectionMatchSetCommand;
async function serializeAws_json1_1GetWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetWebACLCommand = serializeAws_json1_1GetWebACLCommand;
async function serializeAws_json1_1GetXssMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.GetXssMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetXssMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetXssMatchSetCommand = serializeAws_json1_1GetXssMatchSetCommand;
async function serializeAws_json1_1ListActivatedRulesInRuleGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListActivatedRulesInRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListActivatedRulesInRuleGroupCommand = serializeAws_json1_1ListActivatedRulesInRuleGroupCommand;
async function serializeAws_json1_1ListByteMatchSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListByteMatchSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListByteMatchSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListByteMatchSetsCommand = serializeAws_json1_1ListByteMatchSetsCommand;
async function serializeAws_json1_1ListGeoMatchSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListGeoMatchSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGeoMatchSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListGeoMatchSetsCommand = serializeAws_json1_1ListGeoMatchSetsCommand;
async function serializeAws_json1_1ListIPSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListIPSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIPSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListIPSetsCommand = serializeAws_json1_1ListIPSetsCommand;
async function serializeAws_json1_1ListLoggingConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSWAF_Regional_20161128.ListLoggingConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLoggingConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLoggingConfigurationsCommand = serializeAws_json1_1ListLoggingConfigurationsCommand;
async function serializeAws_json1_1ListRateBasedRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListRateBasedRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRateBasedRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRateBasedRulesCommand = serializeAws_json1_1ListRateBasedRulesCommand;
async function serializeAws_json1_1ListRegexMatchSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListRegexMatchSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRegexMatchSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRegexMatchSetsCommand = serializeAws_json1_1ListRegexMatchSetsCommand;
async function serializeAws_json1_1ListRegexPatternSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListRegexPatternSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRegexPatternSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRegexPatternSetsCommand = serializeAws_json1_1ListRegexPatternSetsCommand;
async function serializeAws_json1_1ListRuleGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListRuleGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRuleGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRuleGroupsCommand = serializeAws_json1_1ListRuleGroupsCommand;
async function serializeAws_json1_1ListRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRulesCommand = serializeAws_json1_1ListRulesCommand;
async function serializeAws_json1_1ListSizeConstraintSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListSizeConstraintSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSizeConstraintSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSizeConstraintSetsCommand = serializeAws_json1_1ListSizeConstraintSetsCommand;
async function serializeAws_json1_1ListSqlInjectionMatchSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSWAF_Regional_20161128.ListSqlInjectionMatchSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSqlInjectionMatchSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSqlInjectionMatchSetsCommand = serializeAws_json1_1ListSqlInjectionMatchSetsCommand;
async function serializeAws_json1_1ListSubscribedRuleGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListSubscribedRuleGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSubscribedRuleGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSubscribedRuleGroupsCommand = serializeAws_json1_1ListSubscribedRuleGroupsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListWebACLsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListWebACLs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWebACLsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListWebACLsCommand = serializeAws_json1_1ListWebACLsCommand;
async function serializeAws_json1_1ListXssMatchSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.ListXssMatchSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListXssMatchSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListXssMatchSetsCommand = serializeAws_json1_1ListXssMatchSetsCommand;
async function serializeAws_json1_1PutLoggingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.PutLoggingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutLoggingConfigurationCommand = serializeAws_json1_1PutLoggingConfigurationCommand;
async function serializeAws_json1_1PutPermissionPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.PutPermissionPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutPermissionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutPermissionPolicyCommand = serializeAws_json1_1PutPermissionPolicyCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateByteMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UpdateByteMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateByteMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateByteMatchSetCommand = serializeAws_json1_1UpdateByteMatchSetCommand;
async function serializeAws_json1_1UpdateGeoMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UpdateGeoMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGeoMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateGeoMatchSetCommand = serializeAws_json1_1UpdateGeoMatchSetCommand;
async function serializeAws_json1_1UpdateIPSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UpdateIPSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateIPSetCommand = serializeAws_json1_1UpdateIPSetCommand;
async function serializeAws_json1_1UpdateRateBasedRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UpdateRateBasedRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRateBasedRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRateBasedRuleCommand = serializeAws_json1_1UpdateRateBasedRuleCommand;
async function serializeAws_json1_1UpdateRegexMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UpdateRegexMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRegexMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRegexMatchSetCommand = serializeAws_json1_1UpdateRegexMatchSetCommand;
async function serializeAws_json1_1UpdateRegexPatternSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UpdateRegexPatternSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRegexPatternSetCommand = serializeAws_json1_1UpdateRegexPatternSetCommand;
async function serializeAws_json1_1UpdateRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UpdateRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRuleCommand = serializeAws_json1_1UpdateRuleCommand;
async function serializeAws_json1_1UpdateRuleGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UpdateRuleGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRuleGroupCommand = serializeAws_json1_1UpdateRuleGroupCommand;
async function serializeAws_json1_1UpdateSizeConstraintSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UpdateSizeConstraintSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSizeConstraintSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSizeConstraintSetCommand = serializeAws_json1_1UpdateSizeConstraintSetCommand;
async function serializeAws_json1_1UpdateSqlInjectionMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSqlInjectionMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSqlInjectionMatchSetCommand = serializeAws_json1_1UpdateSqlInjectionMatchSetCommand;
async function serializeAws_json1_1UpdateWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UpdateWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateWebACLCommand = serializeAws_json1_1UpdateWebACLCommand;
async function serializeAws_json1_1UpdateXssMatchSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_Regional_20161128.UpdateXssMatchSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateXssMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateXssMatchSetCommand = serializeAws_json1_1UpdateXssMatchSetCommand;
async function deserializeAws_json1_1AssociateWebACLCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateWebACLResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateWebACLResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateWebACLCommand = deserializeAws_json1_1AssociateWebACLCommand;
async function deserializeAws_json1_1AssociateWebACLCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFUnavailableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateWebACLCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateWebACLResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateWebACLResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateWebACLCommand = deserializeAws_json1_1DisassociateWebACLCommand;
async function deserializeAws_json1_1DisassociateWebACLCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetWebACLForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetWebACLForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWebACLForResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetWebACLForResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetWebACLForResourceCommand = deserializeAws_json1_1GetWebACLForResourceCommand;
async function deserializeAws_json1_1GetWebACLForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFUnavailableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListResourcesForWebACLCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResourcesForWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourcesForWebACLResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResourcesForWebACLResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResourcesForWebACLCommand = deserializeAws_json1_1ListResourcesForWebACLCommand;
async function deserializeAws_json1_1ListResourcesForWebACLCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateByteMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateByteMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateByteMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateByteMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateByteMatchSetCommand = deserializeAws_json1_1CreateByteMatchSetCommand;
async function deserializeAws_json1_1CreateByteMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateGeoMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateGeoMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGeoMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateGeoMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateGeoMatchSetCommand = deserializeAws_json1_1CreateGeoMatchSetCommand;
async function deserializeAws_json1_1CreateGeoMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateIPSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateIPSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateIPSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateIPSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateIPSetCommand = deserializeAws_json1_1CreateIPSetCommand;
async function deserializeAws_json1_1CreateIPSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateRateBasedRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRateBasedRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRateBasedRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRateBasedRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRateBasedRuleCommand = deserializeAws_json1_1CreateRateBasedRuleCommand;
async function deserializeAws_json1_1CreateRateBasedRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFBadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateRegexMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRegexMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRegexMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRegexMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRegexMatchSetCommand = deserializeAws_json1_1CreateRegexMatchSetCommand;
async function deserializeAws_json1_1CreateRegexMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateRegexPatternSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRegexPatternSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRegexPatternSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRegexPatternSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRegexPatternSetCommand = deserializeAws_json1_1CreateRegexPatternSetCommand;
async function deserializeAws_json1_1CreateRegexPatternSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRuleCommand = deserializeAws_json1_1CreateRuleCommand;
async function deserializeAws_json1_1CreateRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFBadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateRuleGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRuleGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRuleGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRuleGroupCommand = deserializeAws_json1_1CreateRuleGroupCommand;
async function deserializeAws_json1_1CreateRuleGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFBadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateSizeConstraintSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSizeConstraintSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSizeConstraintSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSizeConstraintSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSizeConstraintSetCommand = deserializeAws_json1_1CreateSizeConstraintSetCommand;
async function deserializeAws_json1_1CreateSizeConstraintSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateSqlInjectionMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSqlInjectionMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSqlInjectionMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSqlInjectionMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSqlInjectionMatchSetCommand = deserializeAws_json1_1CreateSqlInjectionMatchSetCommand;
async function deserializeAws_json1_1CreateSqlInjectionMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateWebACLCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWebACLResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateWebACLResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateWebACLCommand = deserializeAws_json1_1CreateWebACLCommand;
async function deserializeAws_json1_1CreateWebACLCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFBadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateXssMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateXssMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateXssMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateXssMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateXssMatchSetCommand = deserializeAws_json1_1CreateXssMatchSetCommand;
async function deserializeAws_json1_1CreateXssMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteByteMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteByteMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteByteMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteByteMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteByteMatchSetCommand = deserializeAws_json1_1DeleteByteMatchSetCommand;
async function deserializeAws_json1_1DeleteByteMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteGeoMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteGeoMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGeoMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteGeoMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteGeoMatchSetCommand = deserializeAws_json1_1DeleteGeoMatchSetCommand;
async function deserializeAws_json1_1DeleteGeoMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteIPSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteIPSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteIPSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteIPSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteIPSetCommand = deserializeAws_json1_1DeleteIPSetCommand;
async function deserializeAws_json1_1DeleteIPSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteLoggingConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLoggingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLoggingConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLoggingConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLoggingConfigurationCommand = deserializeAws_json1_1DeleteLoggingConfigurationCommand;
async function deserializeAws_json1_1DeleteLoggingConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeletePermissionPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePermissionPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePermissionPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeletePermissionPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePermissionPolicyCommand = deserializeAws_json1_1DeletePermissionPolicyCommand;
async function deserializeAws_json1_1DeletePermissionPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteRateBasedRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRateBasedRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRateBasedRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRateBasedRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRateBasedRuleCommand = deserializeAws_json1_1DeleteRateBasedRuleCommand;
async function deserializeAws_json1_1DeleteRateBasedRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteRegexMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRegexMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRegexMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRegexMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRegexMatchSetCommand = deserializeAws_json1_1DeleteRegexMatchSetCommand;
async function deserializeAws_json1_1DeleteRegexMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteRegexPatternSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRegexPatternSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRegexPatternSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRegexPatternSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRegexPatternSetCommand = deserializeAws_json1_1DeleteRegexPatternSetCommand;
async function deserializeAws_json1_1DeleteRegexPatternSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRuleCommand = deserializeAws_json1_1DeleteRuleCommand;
async function deserializeAws_json1_1DeleteRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteRuleGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRuleGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRuleGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRuleGroupCommand = deserializeAws_json1_1DeleteRuleGroupCommand;
async function deserializeAws_json1_1DeleteRuleGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteSizeConstraintSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSizeConstraintSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSizeConstraintSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSizeConstraintSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSizeConstraintSetCommand = deserializeAws_json1_1DeleteSizeConstraintSetCommand;
async function deserializeAws_json1_1DeleteSizeConstraintSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteSqlInjectionMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSqlInjectionMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSqlInjectionMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSqlInjectionMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSqlInjectionMatchSetCommand = deserializeAws_json1_1DeleteSqlInjectionMatchSetCommand;
async function deserializeAws_json1_1DeleteSqlInjectionMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteWebACLCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWebACLResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteWebACLResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteWebACLCommand = deserializeAws_json1_1DeleteWebACLCommand;
async function deserializeAws_json1_1DeleteWebACLCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteXssMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteXssMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteXssMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteXssMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteXssMatchSetCommand = deserializeAws_json1_1DeleteXssMatchSetCommand;
async function deserializeAws_json1_1DeleteXssMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonEmptyEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetByteMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetByteMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetByteMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetByteMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetByteMatchSetCommand = deserializeAws_json1_1GetByteMatchSetCommand;
async function deserializeAws_json1_1GetByteMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetChangeTokenCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetChangeTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetChangeTokenResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetChangeTokenResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetChangeTokenCommand = deserializeAws_json1_1GetChangeTokenCommand;
async function deserializeAws_json1_1GetChangeTokenCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetChangeTokenStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetChangeTokenStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetChangeTokenStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetChangeTokenStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetChangeTokenStatusCommand = deserializeAws_json1_1GetChangeTokenStatusCommand;
async function deserializeAws_json1_1GetChangeTokenStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetGeoMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetGeoMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetGeoMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetGeoMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetGeoMatchSetCommand = deserializeAws_json1_1GetGeoMatchSetCommand;
async function deserializeAws_json1_1GetGeoMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetIPSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetIPSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetIPSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetIPSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetIPSetCommand = deserializeAws_json1_1GetIPSetCommand;
async function deserializeAws_json1_1GetIPSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetLoggingConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLoggingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLoggingConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLoggingConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLoggingConfigurationCommand = deserializeAws_json1_1GetLoggingConfigurationCommand;
async function deserializeAws_json1_1GetLoggingConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetPermissionPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPermissionPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPermissionPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPermissionPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPermissionPolicyCommand = deserializeAws_json1_1GetPermissionPolicyCommand;
async function deserializeAws_json1_1GetPermissionPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetRateBasedRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRateBasedRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRateBasedRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRateBasedRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRateBasedRuleCommand = deserializeAws_json1_1GetRateBasedRuleCommand;
async function deserializeAws_json1_1GetRateBasedRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRateBasedRuleManagedKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRateBasedRuleManagedKeysResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRateBasedRuleManagedKeysResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand = deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand;
async function deserializeAws_json1_1GetRateBasedRuleManagedKeysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetRegexMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRegexMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRegexMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRegexMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRegexMatchSetCommand = deserializeAws_json1_1GetRegexMatchSetCommand;
async function deserializeAws_json1_1GetRegexMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetRegexPatternSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRegexPatternSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRegexPatternSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRegexPatternSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRegexPatternSetCommand = deserializeAws_json1_1GetRegexPatternSetCommand;
async function deserializeAws_json1_1GetRegexPatternSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRuleCommand = deserializeAws_json1_1GetRuleCommand;
async function deserializeAws_json1_1GetRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetRuleGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRuleGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRuleGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRuleGroupCommand = deserializeAws_json1_1GetRuleGroupCommand;
async function deserializeAws_json1_1GetRuleGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetSampledRequestsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSampledRequestsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSampledRequestsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSampledRequestsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSampledRequestsCommand = deserializeAws_json1_1GetSampledRequestsCommand;
async function deserializeAws_json1_1GetSampledRequestsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetSizeConstraintSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSizeConstraintSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSizeConstraintSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSizeConstraintSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSizeConstraintSetCommand = deserializeAws_json1_1GetSizeConstraintSetCommand;
async function deserializeAws_json1_1GetSizeConstraintSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetSqlInjectionMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSqlInjectionMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSqlInjectionMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSqlInjectionMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSqlInjectionMatchSetCommand = deserializeAws_json1_1GetSqlInjectionMatchSetCommand;
async function deserializeAws_json1_1GetSqlInjectionMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetWebACLCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWebACLResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetWebACLResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetWebACLCommand = deserializeAws_json1_1GetWebACLCommand;
async function deserializeAws_json1_1GetWebACLCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetXssMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetXssMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetXssMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetXssMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetXssMatchSetCommand = deserializeAws_json1_1GetXssMatchSetCommand;
async function deserializeAws_json1_1GetXssMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListActivatedRulesInRuleGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListActivatedRulesInRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListActivatedRulesInRuleGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListActivatedRulesInRuleGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListActivatedRulesInRuleGroupCommand = deserializeAws_json1_1ListActivatedRulesInRuleGroupCommand;
async function deserializeAws_json1_1ListActivatedRulesInRuleGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListByteMatchSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListByteMatchSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListByteMatchSetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListByteMatchSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListByteMatchSetsCommand = deserializeAws_json1_1ListByteMatchSetsCommand;
async function deserializeAws_json1_1ListByteMatchSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListGeoMatchSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListGeoMatchSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGeoMatchSetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGeoMatchSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListGeoMatchSetsCommand = deserializeAws_json1_1ListGeoMatchSetsCommand;
async function deserializeAws_json1_1ListGeoMatchSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListIPSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListIPSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIPSetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListIPSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListIPSetsCommand = deserializeAws_json1_1ListIPSetsCommand;
async function deserializeAws_json1_1ListIPSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListLoggingConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLoggingConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLoggingConfigurationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLoggingConfigurationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLoggingConfigurationsCommand = deserializeAws_json1_1ListLoggingConfigurationsCommand;
async function deserializeAws_json1_1ListLoggingConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListRateBasedRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRateBasedRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRateBasedRulesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRateBasedRulesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRateBasedRulesCommand = deserializeAws_json1_1ListRateBasedRulesCommand;
async function deserializeAws_json1_1ListRateBasedRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListRegexMatchSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRegexMatchSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRegexMatchSetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRegexMatchSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRegexMatchSetsCommand = deserializeAws_json1_1ListRegexMatchSetsCommand;
async function deserializeAws_json1_1ListRegexMatchSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListRegexPatternSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRegexPatternSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRegexPatternSetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRegexPatternSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRegexPatternSetsCommand = deserializeAws_json1_1ListRegexPatternSetsCommand;
async function deserializeAws_json1_1ListRegexPatternSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListRuleGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRuleGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRuleGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRuleGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRuleGroupsCommand = deserializeAws_json1_1ListRuleGroupsCommand;
async function deserializeAws_json1_1ListRuleGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRulesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRulesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRulesCommand = deserializeAws_json1_1ListRulesCommand;
async function deserializeAws_json1_1ListRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListSizeConstraintSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSizeConstraintSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSizeConstraintSetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSizeConstraintSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSizeConstraintSetsCommand = deserializeAws_json1_1ListSizeConstraintSetsCommand;
async function deserializeAws_json1_1ListSizeConstraintSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListSqlInjectionMatchSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSqlInjectionMatchSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSqlInjectionMatchSetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSqlInjectionMatchSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSqlInjectionMatchSetsCommand = deserializeAws_json1_1ListSqlInjectionMatchSetsCommand;
async function deserializeAws_json1_1ListSqlInjectionMatchSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListSubscribedRuleGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSubscribedRuleGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSubscribedRuleGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSubscribedRuleGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSubscribedRuleGroupsCommand = deserializeAws_json1_1ListSubscribedRuleGroupsCommand;
async function deserializeAws_json1_1ListSubscribedRuleGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
async function deserializeAws_json1_1ListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFBadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListWebACLsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListWebACLsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWebACLsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListWebACLsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListWebACLsCommand = deserializeAws_json1_1ListWebACLsCommand;
async function deserializeAws_json1_1ListWebACLsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListXssMatchSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListXssMatchSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListXssMatchSetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListXssMatchSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListXssMatchSetsCommand = deserializeAws_json1_1ListXssMatchSetsCommand;
async function deserializeAws_json1_1ListXssMatchSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutLoggingConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutLoggingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutLoggingConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutLoggingConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutLoggingConfigurationCommand = deserializeAws_json1_1PutLoggingConfigurationCommand;
async function deserializeAws_json1_1PutLoggingConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFServiceLinkedRoleErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFServiceLinkedRoleErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutPermissionPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutPermissionPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutPermissionPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutPermissionPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutPermissionPolicyCommand = deserializeAws_json1_1PutPermissionPolicyCommand;
async function deserializeAws_json1_1PutPermissionPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidPermissionPolicyException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidPermissionPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidPermissionPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1TagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
async function deserializeAws_json1_1TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFBadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFBadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateByteMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateByteMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateByteMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateByteMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateByteMatchSetCommand = deserializeAws_json1_1UpdateByteMatchSetCommand;
async function deserializeAws_json1_1UpdateByteMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateGeoMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateGeoMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGeoMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateGeoMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateGeoMatchSetCommand = deserializeAws_json1_1UpdateGeoMatchSetCommand;
async function deserializeAws_json1_1UpdateGeoMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateIPSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateIPSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateIPSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateIPSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateIPSetCommand = deserializeAws_json1_1UpdateIPSetCommand;
async function deserializeAws_json1_1UpdateIPSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateRateBasedRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRateBasedRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRateBasedRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRateBasedRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRateBasedRuleCommand = deserializeAws_json1_1UpdateRateBasedRuleCommand;
async function deserializeAws_json1_1UpdateRateBasedRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateRegexMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRegexMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRegexMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRegexMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRegexMatchSetCommand = deserializeAws_json1_1UpdateRegexMatchSetCommand;
async function deserializeAws_json1_1UpdateRegexMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFDisallowedNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateRegexPatternSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRegexPatternSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRegexPatternSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRegexPatternSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRegexPatternSetCommand = deserializeAws_json1_1UpdateRegexPatternSetCommand;
async function deserializeAws_json1_1UpdateRegexPatternSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidRegexPatternException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidRegexPatternException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidRegexPatternExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRuleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRuleCommand = deserializeAws_json1_1UpdateRuleCommand;
async function deserializeAws_json1_1UpdateRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateRuleGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRuleGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRuleGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRuleGroupCommand = deserializeAws_json1_1UpdateRuleGroupCommand;
async function deserializeAws_json1_1UpdateRuleGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateSizeConstraintSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSizeConstraintSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSizeConstraintSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSizeConstraintSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSizeConstraintSetCommand = deserializeAws_json1_1UpdateSizeConstraintSetCommand;
async function deserializeAws_json1_1UpdateSizeConstraintSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateSqlInjectionMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSqlInjectionMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSqlInjectionMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSqlInjectionMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSqlInjectionMatchSetCommand = deserializeAws_json1_1UpdateSqlInjectionMatchSetCommand;
async function deserializeAws_json1_1UpdateSqlInjectionMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateWebACLCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateWebACLResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateWebACLResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateWebACLCommand = deserializeAws_json1_1UpdateWebACLCommand;
async function deserializeAws_json1_1UpdateWebACLCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFReferencedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFSubscriptionNotFoundException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFSubscriptionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateXssMatchSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateXssMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateXssMatchSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateXssMatchSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateXssMatchSetCommand = deserializeAws_json1_1UpdateXssMatchSetCommand;
async function deserializeAws_json1_1UpdateXssMatchSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentContainerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.gokucustomerapiservice.v20150409#WAFStaleDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1WAFBadRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFBadRequestException(body, context);
    const contents = Object.assign({ name: "WAFBadRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFDisallowedNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFDisallowedNameException(body, context);
    const contents = Object.assign({ name: "WAFDisallowedNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFInternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInternalErrorException(body, context);
    const contents = Object.assign({ name: "WAFInternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFInvalidAccountExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidAccountException(body, context);
    const contents = Object.assign({ name: "WAFInvalidAccountException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFInvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidOperationException(body, context);
    const contents = Object.assign({ name: "WAFInvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFInvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidParameterException(body, context);
    const contents = Object.assign({ name: "WAFInvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFInvalidPermissionPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidPermissionPolicyException(body, context);
    const contents = Object.assign({ name: "WAFInvalidPermissionPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFInvalidRegexPatternExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidRegexPatternException(body, context);
    const contents = Object.assign({ name: "WAFInvalidRegexPatternException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFLimitsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFLimitsExceededException(body, context);
    const contents = Object.assign({ name: "WAFLimitsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFNonEmptyEntityException(body, context);
    const contents = Object.assign({ name: "WAFNonEmptyEntityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFNonexistentContainerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFNonexistentContainerException(body, context);
    const contents = Object.assign({ name: "WAFNonexistentContainerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFNonexistentItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFNonexistentItemException(body, context);
    const contents = Object.assign({ name: "WAFNonexistentItemException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFReferencedItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFReferencedItemException(body, context);
    const contents = Object.assign({ name: "WAFReferencedItemException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFServiceLinkedRoleErrorException(body, context);
    const contents = Object.assign({ name: "WAFServiceLinkedRoleErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFStaleDataExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFStaleDataException(body, context);
    const contents = Object.assign({ name: "WAFStaleDataException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFSubscriptionNotFoundException(body, context);
    const contents = Object.assign({ name: "WAFSubscriptionNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFTagOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFTagOperationException(body, context);
    const contents = Object.assign({ name: "WAFTagOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFTagOperationInternalErrorException(body, context);
    const contents = Object.assign({ name: "WAFTagOperationInternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFUnavailableEntityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFUnavailableEntityException(body, context);
    const contents = Object.assign({ name: "WAFUnavailableEntityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.WebACLId !== undefined) {
        bodyParams["WebACLId"] = input.WebACLId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetWebACLForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourcesForWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.WebACLId !== undefined) {
        bodyParams["WebACLId"] = input.WebACLId;
    }
    return bodyParams;
};
const serializeAws_json1_1ActivatedRule = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = serializeAws_json1_1WafAction(input.Action, context);
    }
    if (input.ExcludedRules !== undefined) {
        bodyParams["ExcludedRules"] = serializeAws_json1_1ExcludedRules(input.ExcludedRules, context);
    }
    if (input.OverrideAction !== undefined) {
        bodyParams["OverrideAction"] = serializeAws_json1_1WafOverrideAction(input.OverrideAction, context);
    }
    if (input.Priority !== undefined) {
        bodyParams["Priority"] = input.Priority;
    }
    if (input.RuleId !== undefined) {
        bodyParams["RuleId"] = input.RuleId;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1ByteMatchSetUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.ByteMatchTuple !== undefined) {
        bodyParams["ByteMatchTuple"] = serializeAws_json1_1ByteMatchTuple(input.ByteMatchTuple, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ByteMatchSetUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ByteMatchSetUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ByteMatchTuple = (input, context) => {
    const bodyParams = {};
    if (input.FieldToMatch !== undefined) {
        bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(input.FieldToMatch, context);
    }
    if (input.PositionalConstraint !== undefined) {
        bodyParams["PositionalConstraint"] = input.PositionalConstraint;
    }
    if (input.TargetString !== undefined) {
        bodyParams["TargetString"] = Buffer.from(input.TargetString).toString("utf-8");
    }
    if (input.TextTransformation !== undefined) {
        bodyParams["TextTransformation"] = input.TextTransformation;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateByteMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateGeoMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateIPSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRateBasedRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.MetricName !== undefined) {
        bodyParams["MetricName"] = input.MetricName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RateKey !== undefined) {
        bodyParams["RateKey"] = input.RateKey;
    }
    if (input.RateLimit !== undefined) {
        bodyParams["RateLimit"] = input.RateLimit;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRegexMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRegexPatternSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRuleGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.MetricName !== undefined) {
        bodyParams["MetricName"] = input.MetricName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.MetricName !== undefined) {
        bodyParams["MetricName"] = input.MetricName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSizeConstraintSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSqlInjectionMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.DefaultAction !== undefined) {
        bodyParams["DefaultAction"] = serializeAws_json1_1WafAction(input.DefaultAction, context);
    }
    if (input.MetricName !== undefined) {
        bodyParams["MetricName"] = input.MetricName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateXssMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteByteMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ByteMatchSetId !== undefined) {
        bodyParams["ByteMatchSetId"] = input.ByteMatchSetId;
    }
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteGeoMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.GeoMatchSetId !== undefined) {
        bodyParams["GeoMatchSetId"] = input.GeoMatchSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteIPSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.IPSetId !== undefined) {
        bodyParams["IPSetId"] = input.IPSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLoggingConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePermissionPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRateBasedRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.RuleId !== undefined) {
        bodyParams["RuleId"] = input.RuleId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRegexMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.RegexMatchSetId !== undefined) {
        bodyParams["RegexMatchSetId"] = input.RegexMatchSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRegexPatternSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.RegexPatternSetId !== undefined) {
        bodyParams["RegexPatternSetId"] = input.RegexPatternSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRuleGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.RuleGroupId !== undefined) {
        bodyParams["RuleGroupId"] = input.RuleGroupId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.RuleId !== undefined) {
        bodyParams["RuleId"] = input.RuleId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSizeConstraintSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.SizeConstraintSetId !== undefined) {
        bodyParams["SizeConstraintSetId"] = input.SizeConstraintSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSqlInjectionMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.SqlInjectionMatchSetId !== undefined) {
        bodyParams["SqlInjectionMatchSetId"] = input.SqlInjectionMatchSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.WebACLId !== undefined) {
        bodyParams["WebACLId"] = input.WebACLId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteXssMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.XssMatchSetId !== undefined) {
        bodyParams["XssMatchSetId"] = input.XssMatchSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1ExcludedRule = (input, context) => {
    const bodyParams = {};
    if (input.RuleId !== undefined) {
        bodyParams["RuleId"] = input.RuleId;
    }
    return bodyParams;
};
const serializeAws_json1_1ExcludedRules = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ExcludedRule(entry, context));
    }
    return contents;
};
const serializeAws_json1_1FieldToMatch = (input, context) => {
    const bodyParams = {};
    if (input.Data !== undefined) {
        bodyParams["Data"] = input.Data;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1GeoMatchConstraint = (input, context) => {
    const bodyParams = {};
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1GeoMatchSetUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.GeoMatchConstraint !== undefined) {
        bodyParams["GeoMatchConstraint"] = serializeAws_json1_1GeoMatchConstraint(input.GeoMatchConstraint, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GeoMatchSetUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1GeoMatchSetUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetByteMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ByteMatchSetId !== undefined) {
        bodyParams["ByteMatchSetId"] = input.ByteMatchSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetChangeTokenRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetChangeTokenStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetGeoMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.GeoMatchSetId !== undefined) {
        bodyParams["GeoMatchSetId"] = input.GeoMatchSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetIPSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.IPSetId !== undefined) {
        bodyParams["IPSetId"] = input.IPSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLoggingConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPermissionPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRateBasedRuleManagedKeysRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    if (input.RuleId !== undefined) {
        bodyParams["RuleId"] = input.RuleId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRateBasedRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.RuleId !== undefined) {
        bodyParams["RuleId"] = input.RuleId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRegexMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.RegexMatchSetId !== undefined) {
        bodyParams["RegexMatchSetId"] = input.RegexMatchSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRegexPatternSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.RegexPatternSetId !== undefined) {
        bodyParams["RegexPatternSetId"] = input.RegexPatternSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRuleGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.RuleGroupId !== undefined) {
        bodyParams["RuleGroupId"] = input.RuleGroupId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.RuleId !== undefined) {
        bodyParams["RuleId"] = input.RuleId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSampledRequestsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxItems !== undefined) {
        bodyParams["MaxItems"] = input.MaxItems;
    }
    if (input.RuleId !== undefined) {
        bodyParams["RuleId"] = input.RuleId;
    }
    if (input.TimeWindow !== undefined) {
        bodyParams["TimeWindow"] = serializeAws_json1_1TimeWindow(input.TimeWindow, context);
    }
    if (input.WebAclId !== undefined) {
        bodyParams["WebAclId"] = input.WebAclId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSizeConstraintSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.SizeConstraintSetId !== undefined) {
        bodyParams["SizeConstraintSetId"] = input.SizeConstraintSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSqlInjectionMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.SqlInjectionMatchSetId !== undefined) {
        bodyParams["SqlInjectionMatchSetId"] = input.SqlInjectionMatchSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.WebACLId !== undefined) {
        bodyParams["WebACLId"] = input.WebACLId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetXssMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.XssMatchSetId !== undefined) {
        bodyParams["XssMatchSetId"] = input.XssMatchSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1IPSetDescriptor = (input, context) => {
    const bodyParams = {};
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1IPSetUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.IPSetDescriptor !== undefined) {
        bodyParams["IPSetDescriptor"] = serializeAws_json1_1IPSetDescriptor(input.IPSetDescriptor, context);
    }
    return bodyParams;
};
const serializeAws_json1_1IPSetUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1IPSetUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListActivatedRulesInRuleGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    if (input.RuleGroupId !== undefined) {
        bodyParams["RuleGroupId"] = input.RuleGroupId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListByteMatchSetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListGeoMatchSetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListIPSetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListLoggingConfigurationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRateBasedRulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRegexMatchSetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRegexPatternSetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRuleGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSizeConstraintSetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSqlInjectionMatchSetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSubscribedRuleGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1ListWebACLsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListXssMatchSetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    return bodyParams;
};
const serializeAws_json1_1LogDestinationConfigs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1LoggingConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.LogDestinationConfigs !== undefined) {
        bodyParams["LogDestinationConfigs"] = serializeAws_json1_1LogDestinationConfigs(input.LogDestinationConfigs, context);
    }
    if (input.RedactedFields !== undefined) {
        bodyParams["RedactedFields"] = serializeAws_json1_1RedactedFields(input.RedactedFields, context);
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1Predicate = (input, context) => {
    const bodyParams = {};
    if (input.DataId !== undefined) {
        bodyParams["DataId"] = input.DataId;
    }
    if (input.Negated !== undefined) {
        bodyParams["Negated"] = input.Negated;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1PutLoggingConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.LoggingConfiguration !== undefined) {
        bodyParams["LoggingConfiguration"] = serializeAws_json1_1LoggingConfiguration(input.LoggingConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutPermissionPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.Policy !== undefined) {
        bodyParams["Policy"] = input.Policy;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1RedactedFields = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1FieldToMatch(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RegexMatchSetUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.RegexMatchTuple !== undefined) {
        bodyParams["RegexMatchTuple"] = serializeAws_json1_1RegexMatchTuple(input.RegexMatchTuple, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RegexMatchSetUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RegexMatchSetUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RegexMatchTuple = (input, context) => {
    const bodyParams = {};
    if (input.FieldToMatch !== undefined) {
        bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(input.FieldToMatch, context);
    }
    if (input.RegexPatternSetId !== undefined) {
        bodyParams["RegexPatternSetId"] = input.RegexPatternSetId;
    }
    if (input.TextTransformation !== undefined) {
        bodyParams["TextTransformation"] = input.TextTransformation;
    }
    return bodyParams;
};
const serializeAws_json1_1RegexPatternSetUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.RegexPatternString !== undefined) {
        bodyParams["RegexPatternString"] = input.RegexPatternString;
    }
    return bodyParams;
};
const serializeAws_json1_1RegexPatternSetUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RegexPatternSetUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RuleGroupUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.ActivatedRule !== undefined) {
        bodyParams["ActivatedRule"] = serializeAws_json1_1ActivatedRule(input.ActivatedRule, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RuleGroupUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RuleGroupUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RuleUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.Predicate !== undefined) {
        bodyParams["Predicate"] = serializeAws_json1_1Predicate(input.Predicate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RuleUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RuleUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SizeConstraint = (input, context) => {
    const bodyParams = {};
    if (input.ComparisonOperator !== undefined) {
        bodyParams["ComparisonOperator"] = input.ComparisonOperator;
    }
    if (input.FieldToMatch !== undefined) {
        bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(input.FieldToMatch, context);
    }
    if (input.Size !== undefined) {
        bodyParams["Size"] = input.Size;
    }
    if (input.TextTransformation !== undefined) {
        bodyParams["TextTransformation"] = input.TextTransformation;
    }
    return bodyParams;
};
const serializeAws_json1_1SizeConstraintSetUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.SizeConstraint !== undefined) {
        bodyParams["SizeConstraint"] = serializeAws_json1_1SizeConstraint(input.SizeConstraint, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SizeConstraintSetUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SizeConstraintSetUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SqlInjectionMatchSetUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.SqlInjectionMatchTuple !== undefined) {
        bodyParams["SqlInjectionMatchTuple"] = serializeAws_json1_1SqlInjectionMatchTuple(input.SqlInjectionMatchTuple, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SqlInjectionMatchSetUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SqlInjectionMatchSetUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SqlInjectionMatchTuple = (input, context) => {
    const bodyParams = {};
    if (input.FieldToMatch !== undefined) {
        bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(input.FieldToMatch, context);
    }
    if (input.TextTransformation !== undefined) {
        bodyParams["TextTransformation"] = input.TextTransformation;
    }
    return bodyParams;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TimeWindow = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateByteMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ByteMatchSetId !== undefined) {
        bodyParams["ByteMatchSetId"] = input.ByteMatchSetId;
    }
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1ByteMatchSetUpdates(input.Updates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateGeoMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.GeoMatchSetId !== undefined) {
        bodyParams["GeoMatchSetId"] = input.GeoMatchSetId;
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1GeoMatchSetUpdates(input.Updates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateIPSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.IPSetId !== undefined) {
        bodyParams["IPSetId"] = input.IPSetId;
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1IPSetUpdates(input.Updates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRateBasedRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.RateLimit !== undefined) {
        bodyParams["RateLimit"] = input.RateLimit;
    }
    if (input.RuleId !== undefined) {
        bodyParams["RuleId"] = input.RuleId;
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1RuleUpdates(input.Updates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRegexMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.RegexMatchSetId !== undefined) {
        bodyParams["RegexMatchSetId"] = input.RegexMatchSetId;
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1RegexMatchSetUpdates(input.Updates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRegexPatternSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.RegexPatternSetId !== undefined) {
        bodyParams["RegexPatternSetId"] = input.RegexPatternSetId;
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1RegexPatternSetUpdates(input.Updates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRuleGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.RuleGroupId !== undefined) {
        bodyParams["RuleGroupId"] = input.RuleGroupId;
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1RuleGroupUpdates(input.Updates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRuleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.RuleId !== undefined) {
        bodyParams["RuleId"] = input.RuleId;
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1RuleUpdates(input.Updates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateSizeConstraintSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.SizeConstraintSetId !== undefined) {
        bodyParams["SizeConstraintSetId"] = input.SizeConstraintSetId;
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1SizeConstraintSetUpdates(input.Updates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateSqlInjectionMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.SqlInjectionMatchSetId !== undefined) {
        bodyParams["SqlInjectionMatchSetId"] = input.SqlInjectionMatchSetId;
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1SqlInjectionMatchSetUpdates(input.Updates, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.DefaultAction !== undefined) {
        bodyParams["DefaultAction"] = serializeAws_json1_1WafAction(input.DefaultAction, context);
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1WebACLUpdates(input.Updates, context);
    }
    if (input.WebACLId !== undefined) {
        bodyParams["WebACLId"] = input.WebACLId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateXssMatchSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ChangeToken !== undefined) {
        bodyParams["ChangeToken"] = input.ChangeToken;
    }
    if (input.Updates !== undefined) {
        bodyParams["Updates"] = serializeAws_json1_1XssMatchSetUpdates(input.Updates, context);
    }
    if (input.XssMatchSetId !== undefined) {
        bodyParams["XssMatchSetId"] = input.XssMatchSetId;
    }
    return bodyParams;
};
const serializeAws_json1_1WafAction = (input, context) => {
    const bodyParams = {};
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1WafOverrideAction = (input, context) => {
    const bodyParams = {};
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1WebACLUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.ActivatedRule !== undefined) {
        bodyParams["ActivatedRule"] = serializeAws_json1_1ActivatedRule(input.ActivatedRule, context);
    }
    return bodyParams;
};
const serializeAws_json1_1WebACLUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1WebACLUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1XssMatchSetUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.XssMatchTuple !== undefined) {
        bodyParams["XssMatchTuple"] = serializeAws_json1_1XssMatchTuple(input.XssMatchTuple, context);
    }
    return bodyParams;
};
const serializeAws_json1_1XssMatchSetUpdates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1XssMatchSetUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1XssMatchTuple = (input, context) => {
    const bodyParams = {};
    if (input.FieldToMatch !== undefined) {
        bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(input.FieldToMatch, context);
    }
    if (input.TextTransformation !== undefined) {
        bodyParams["TextTransformation"] = input.TextTransformation;
    }
    return bodyParams;
};
const deserializeAws_json1_1AssociateWebACLResponse = (output, context) => {
    let contents = {
        __type: "AssociateWebACLResponse"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateWebACLResponse = (output, context) => {
    let contents = {
        __type: "DisassociateWebACLResponse"
    };
    return contents;
};
const deserializeAws_json1_1GetWebACLForResourceResponse = (output, context) => {
    let contents = {
        __type: "GetWebACLForResourceResponse",
        WebACLSummary: undefined
    };
    if (output.WebACLSummary !== undefined && output.WebACLSummary !== null) {
        contents.WebACLSummary = deserializeAws_json1_1WebACLSummary(output.WebACLSummary, context);
    }
    return contents;
};
const deserializeAws_json1_1ListResourcesForWebACLResponse = (output, context) => {
    let contents = {
        __type: "ListResourcesForWebACLResponse",
        ResourceArns: undefined
    };
    if (output.ResourceArns !== undefined && output.ResourceArns !== null) {
        contents.ResourceArns = deserializeAws_json1_1ResourceArns(output.ResourceArns, context);
    }
    return contents;
};
const deserializeAws_json1_1ActivatedRule = (output, context) => {
    let contents = {
        __type: "ActivatedRule",
        Action: undefined,
        ExcludedRules: undefined,
        OverrideAction: undefined,
        Priority: undefined,
        RuleId: undefined,
        Type: undefined
    };
    if (output.Action !== undefined && output.Action !== null) {
        contents.Action = deserializeAws_json1_1WafAction(output.Action, context);
    }
    if (output.ExcludedRules !== undefined && output.ExcludedRules !== null) {
        contents.ExcludedRules = deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context);
    }
    if (output.OverrideAction !== undefined && output.OverrideAction !== null) {
        contents.OverrideAction = deserializeAws_json1_1WafOverrideAction(output.OverrideAction, context);
    }
    if (output.Priority !== undefined && output.Priority !== null) {
        contents.Priority = output.Priority;
    }
    if (output.RuleId !== undefined && output.RuleId !== null) {
        contents.RuleId = output.RuleId;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ActivatedRules = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ActivatedRule(entry, context));
};
const deserializeAws_json1_1ByteMatchSet = (output, context) => {
    let contents = {
        __type: "ByteMatchSet",
        ByteMatchSetId: undefined,
        ByteMatchTuples: undefined,
        Name: undefined
    };
    if (output.ByteMatchSetId !== undefined && output.ByteMatchSetId !== null) {
        contents.ByteMatchSetId = output.ByteMatchSetId;
    }
    if (output.ByteMatchTuples !== undefined && output.ByteMatchTuples !== null) {
        contents.ByteMatchTuples = deserializeAws_json1_1ByteMatchTuples(output.ByteMatchTuples, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1ByteMatchSetSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ByteMatchSetSummary(entry, context));
};
const deserializeAws_json1_1ByteMatchSetSummary = (output, context) => {
    let contents = {
        __type: "ByteMatchSetSummary",
        ByteMatchSetId: undefined,
        Name: undefined
    };
    if (output.ByteMatchSetId !== undefined && output.ByteMatchSetId !== null) {
        contents.ByteMatchSetId = output.ByteMatchSetId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1ByteMatchTuple = (output, context) => {
    let contents = {
        __type: "ByteMatchTuple",
        FieldToMatch: undefined,
        PositionalConstraint: undefined,
        TargetString: undefined,
        TextTransformation: undefined
    };
    if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
        contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context);
    }
    if (output.PositionalConstraint !== undefined &&
        output.PositionalConstraint !== null) {
        contents.PositionalConstraint = output.PositionalConstraint;
    }
    if (output.TargetString !== undefined && output.TargetString !== null) {
        contents.TargetString = Uint8Array.from(output.TargetString);
    }
    if (output.TextTransformation !== undefined &&
        output.TextTransformation !== null) {
        contents.TextTransformation = output.TextTransformation;
    }
    return contents;
};
const deserializeAws_json1_1ByteMatchTuples = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ByteMatchTuple(entry, context));
};
const deserializeAws_json1_1CreateByteMatchSetResponse = (output, context) => {
    let contents = {
        __type: "CreateByteMatchSetResponse",
        ByteMatchSet: undefined,
        ChangeToken: undefined
    };
    if (output.ByteMatchSet !== undefined && output.ByteMatchSet !== null) {
        contents.ByteMatchSet = deserializeAws_json1_1ByteMatchSet(output.ByteMatchSet, context);
    }
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1CreateGeoMatchSetResponse = (output, context) => {
    let contents = {
        __type: "CreateGeoMatchSetResponse",
        ChangeToken: undefined,
        GeoMatchSet: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    if (output.GeoMatchSet !== undefined && output.GeoMatchSet !== null) {
        contents.GeoMatchSet = deserializeAws_json1_1GeoMatchSet(output.GeoMatchSet, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateIPSetResponse = (output, context) => {
    let contents = {
        __type: "CreateIPSetResponse",
        ChangeToken: undefined,
        IPSet: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    if (output.IPSet !== undefined && output.IPSet !== null) {
        contents.IPSet = deserializeAws_json1_1IPSet(output.IPSet, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRateBasedRuleResponse = (output, context) => {
    let contents = {
        __type: "CreateRateBasedRuleResponse",
        ChangeToken: undefined,
        Rule: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    if (output.Rule !== undefined && output.Rule !== null) {
        contents.Rule = deserializeAws_json1_1RateBasedRule(output.Rule, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRegexMatchSetResponse = (output, context) => {
    let contents = {
        __type: "CreateRegexMatchSetResponse",
        ChangeToken: undefined,
        RegexMatchSet: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    if (output.RegexMatchSet !== undefined && output.RegexMatchSet !== null) {
        contents.RegexMatchSet = deserializeAws_json1_1RegexMatchSet(output.RegexMatchSet, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRegexPatternSetResponse = (output, context) => {
    let contents = {
        __type: "CreateRegexPatternSetResponse",
        ChangeToken: undefined,
        RegexPatternSet: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    if (output.RegexPatternSet !== undefined && output.RegexPatternSet !== null) {
        contents.RegexPatternSet = deserializeAws_json1_1RegexPatternSet(output.RegexPatternSet, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRuleGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateRuleGroupResponse",
        ChangeToken: undefined,
        RuleGroup: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    if (output.RuleGroup !== undefined && output.RuleGroup !== null) {
        contents.RuleGroup = deserializeAws_json1_1RuleGroup(output.RuleGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRuleResponse = (output, context) => {
    let contents = {
        __type: "CreateRuleResponse",
        ChangeToken: undefined,
        Rule: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    if (output.Rule !== undefined && output.Rule !== null) {
        contents.Rule = deserializeAws_json1_1Rule(output.Rule, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateSizeConstraintSetResponse = (output, context) => {
    let contents = {
        __type: "CreateSizeConstraintSetResponse",
        ChangeToken: undefined,
        SizeConstraintSet: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    if (output.SizeConstraintSet !== undefined &&
        output.SizeConstraintSet !== null) {
        contents.SizeConstraintSet = deserializeAws_json1_1SizeConstraintSet(output.SizeConstraintSet, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateSqlInjectionMatchSetResponse = (output, context) => {
    let contents = {
        __type: "CreateSqlInjectionMatchSetResponse",
        ChangeToken: undefined,
        SqlInjectionMatchSet: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    if (output.SqlInjectionMatchSet !== undefined &&
        output.SqlInjectionMatchSet !== null) {
        contents.SqlInjectionMatchSet = deserializeAws_json1_1SqlInjectionMatchSet(output.SqlInjectionMatchSet, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateWebACLResponse = (output, context) => {
    let contents = {
        __type: "CreateWebACLResponse",
        ChangeToken: undefined,
        WebACL: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    if (output.WebACL !== undefined && output.WebACL !== null) {
        contents.WebACL = deserializeAws_json1_1WebACL(output.WebACL, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateXssMatchSetResponse = (output, context) => {
    let contents = {
        __type: "CreateXssMatchSetResponse",
        ChangeToken: undefined,
        XssMatchSet: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    if (output.XssMatchSet !== undefined && output.XssMatchSet !== null) {
        contents.XssMatchSet = deserializeAws_json1_1XssMatchSet(output.XssMatchSet, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteByteMatchSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteByteMatchSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteGeoMatchSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteGeoMatchSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteIPSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteIPSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteLoggingConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DeleteLoggingConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeletePermissionPolicyResponse = (output, context) => {
    let contents = {
        __type: "DeletePermissionPolicyResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteRateBasedRuleResponse = (output, context) => {
    let contents = {
        __type: "DeleteRateBasedRuleResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteRegexMatchSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteRegexMatchSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteRegexPatternSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteRegexPatternSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteRuleGroupResponse = (output, context) => {
    let contents = {
        __type: "DeleteRuleGroupResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteRuleResponse = (output, context) => {
    let contents = {
        __type: "DeleteRuleResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteSizeConstraintSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteSizeConstraintSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteSqlInjectionMatchSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteSqlInjectionMatchSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteWebACLResponse = (output, context) => {
    let contents = {
        __type: "DeleteWebACLResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteXssMatchSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteXssMatchSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1ExcludedRule = (output, context) => {
    let contents = {
        __type: "ExcludedRule",
        RuleId: undefined
    };
    if (output.RuleId !== undefined && output.RuleId !== null) {
        contents.RuleId = output.RuleId;
    }
    return contents;
};
const deserializeAws_json1_1ExcludedRules = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExcludedRule(entry, context));
};
const deserializeAws_json1_1FieldToMatch = (output, context) => {
    let contents = {
        __type: "FieldToMatch",
        Data: undefined,
        Type: undefined
    };
    if (output.Data !== undefined && output.Data !== null) {
        contents.Data = output.Data;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1GeoMatchConstraint = (output, context) => {
    let contents = {
        __type: "GeoMatchConstraint",
        Type: undefined,
        Value: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1GeoMatchConstraints = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GeoMatchConstraint(entry, context));
};
const deserializeAws_json1_1GeoMatchSet = (output, context) => {
    let contents = {
        __type: "GeoMatchSet",
        GeoMatchConstraints: undefined,
        GeoMatchSetId: undefined,
        Name: undefined
    };
    if (output.GeoMatchConstraints !== undefined &&
        output.GeoMatchConstraints !== null) {
        contents.GeoMatchConstraints = deserializeAws_json1_1GeoMatchConstraints(output.GeoMatchConstraints, context);
    }
    if (output.GeoMatchSetId !== undefined && output.GeoMatchSetId !== null) {
        contents.GeoMatchSetId = output.GeoMatchSetId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1GeoMatchSetSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GeoMatchSetSummary(entry, context));
};
const deserializeAws_json1_1GeoMatchSetSummary = (output, context) => {
    let contents = {
        __type: "GeoMatchSetSummary",
        GeoMatchSetId: undefined,
        Name: undefined
    };
    if (output.GeoMatchSetId !== undefined && output.GeoMatchSetId !== null) {
        contents.GeoMatchSetId = output.GeoMatchSetId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1GetByteMatchSetResponse = (output, context) => {
    let contents = {
        __type: "GetByteMatchSetResponse",
        ByteMatchSet: undefined
    };
    if (output.ByteMatchSet !== undefined && output.ByteMatchSet !== null) {
        contents.ByteMatchSet = deserializeAws_json1_1ByteMatchSet(output.ByteMatchSet, context);
    }
    return contents;
};
const deserializeAws_json1_1GetChangeTokenResponse = (output, context) => {
    let contents = {
        __type: "GetChangeTokenResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1GetChangeTokenStatusResponse = (output, context) => {
    let contents = {
        __type: "GetChangeTokenStatusResponse",
        ChangeTokenStatus: undefined
    };
    if (output.ChangeTokenStatus !== undefined &&
        output.ChangeTokenStatus !== null) {
        contents.ChangeTokenStatus = output.ChangeTokenStatus;
    }
    return contents;
};
const deserializeAws_json1_1GetGeoMatchSetResponse = (output, context) => {
    let contents = {
        __type: "GetGeoMatchSetResponse",
        GeoMatchSet: undefined
    };
    if (output.GeoMatchSet !== undefined && output.GeoMatchSet !== null) {
        contents.GeoMatchSet = deserializeAws_json1_1GeoMatchSet(output.GeoMatchSet, context);
    }
    return contents;
};
const deserializeAws_json1_1GetIPSetResponse = (output, context) => {
    let contents = {
        __type: "GetIPSetResponse",
        IPSet: undefined
    };
    if (output.IPSet !== undefined && output.IPSet !== null) {
        contents.IPSet = deserializeAws_json1_1IPSet(output.IPSet, context);
    }
    return contents;
};
const deserializeAws_json1_1GetLoggingConfigurationResponse = (output, context) => {
    let contents = {
        __type: "GetLoggingConfigurationResponse",
        LoggingConfiguration: undefined
    };
    if (output.LoggingConfiguration !== undefined &&
        output.LoggingConfiguration !== null) {
        contents.LoggingConfiguration = deserializeAws_json1_1LoggingConfiguration(output.LoggingConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1GetPermissionPolicyResponse = (output, context) => {
    let contents = {
        __type: "GetPermissionPolicyResponse",
        Policy: undefined
    };
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = output.Policy;
    }
    return contents;
};
const deserializeAws_json1_1GetRateBasedRuleManagedKeysResponse = (output, context) => {
    let contents = {
        __type: "GetRateBasedRuleManagedKeysResponse",
        ManagedKeys: undefined,
        NextMarker: undefined
    };
    if (output.ManagedKeys !== undefined && output.ManagedKeys !== null) {
        contents.ManagedKeys = deserializeAws_json1_1ManagedKeys(output.ManagedKeys, context);
    }
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    return contents;
};
const deserializeAws_json1_1GetRateBasedRuleResponse = (output, context) => {
    let contents = {
        __type: "GetRateBasedRuleResponse",
        Rule: undefined
    };
    if (output.Rule !== undefined && output.Rule !== null) {
        contents.Rule = deserializeAws_json1_1RateBasedRule(output.Rule, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRegexMatchSetResponse = (output, context) => {
    let contents = {
        __type: "GetRegexMatchSetResponse",
        RegexMatchSet: undefined
    };
    if (output.RegexMatchSet !== undefined && output.RegexMatchSet !== null) {
        contents.RegexMatchSet = deserializeAws_json1_1RegexMatchSet(output.RegexMatchSet, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRegexPatternSetResponse = (output, context) => {
    let contents = {
        __type: "GetRegexPatternSetResponse",
        RegexPatternSet: undefined
    };
    if (output.RegexPatternSet !== undefined && output.RegexPatternSet !== null) {
        contents.RegexPatternSet = deserializeAws_json1_1RegexPatternSet(output.RegexPatternSet, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRuleGroupResponse = (output, context) => {
    let contents = {
        __type: "GetRuleGroupResponse",
        RuleGroup: undefined
    };
    if (output.RuleGroup !== undefined && output.RuleGroup !== null) {
        contents.RuleGroup = deserializeAws_json1_1RuleGroup(output.RuleGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRuleResponse = (output, context) => {
    let contents = {
        __type: "GetRuleResponse",
        Rule: undefined
    };
    if (output.Rule !== undefined && output.Rule !== null) {
        contents.Rule = deserializeAws_json1_1Rule(output.Rule, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSampledRequestsResponse = (output, context) => {
    let contents = {
        __type: "GetSampledRequestsResponse",
        PopulationSize: undefined,
        SampledRequests: undefined,
        TimeWindow: undefined
    };
    if (output.PopulationSize !== undefined && output.PopulationSize !== null) {
        contents.PopulationSize = output.PopulationSize;
    }
    if (output.SampledRequests !== undefined && output.SampledRequests !== null) {
        contents.SampledRequests = deserializeAws_json1_1SampledHTTPRequests(output.SampledRequests, context);
    }
    if (output.TimeWindow !== undefined && output.TimeWindow !== null) {
        contents.TimeWindow = deserializeAws_json1_1TimeWindow(output.TimeWindow, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSizeConstraintSetResponse = (output, context) => {
    let contents = {
        __type: "GetSizeConstraintSetResponse",
        SizeConstraintSet: undefined
    };
    if (output.SizeConstraintSet !== undefined &&
        output.SizeConstraintSet !== null) {
        contents.SizeConstraintSet = deserializeAws_json1_1SizeConstraintSet(output.SizeConstraintSet, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSqlInjectionMatchSetResponse = (output, context) => {
    let contents = {
        __type: "GetSqlInjectionMatchSetResponse",
        SqlInjectionMatchSet: undefined
    };
    if (output.SqlInjectionMatchSet !== undefined &&
        output.SqlInjectionMatchSet !== null) {
        contents.SqlInjectionMatchSet = deserializeAws_json1_1SqlInjectionMatchSet(output.SqlInjectionMatchSet, context);
    }
    return contents;
};
const deserializeAws_json1_1GetWebACLResponse = (output, context) => {
    let contents = {
        __type: "GetWebACLResponse",
        WebACL: undefined
    };
    if (output.WebACL !== undefined && output.WebACL !== null) {
        contents.WebACL = deserializeAws_json1_1WebACL(output.WebACL, context);
    }
    return contents;
};
const deserializeAws_json1_1GetXssMatchSetResponse = (output, context) => {
    let contents = {
        __type: "GetXssMatchSetResponse",
        XssMatchSet: undefined
    };
    if (output.XssMatchSet !== undefined && output.XssMatchSet !== null) {
        contents.XssMatchSet = deserializeAws_json1_1XssMatchSet(output.XssMatchSet, context);
    }
    return contents;
};
const deserializeAws_json1_1HTTPHeader = (output, context) => {
    let contents = {
        __type: "HTTPHeader",
        Name: undefined,
        Value: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1HTTPHeaders = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HTTPHeader(entry, context));
};
const deserializeAws_json1_1HTTPRequest = (output, context) => {
    let contents = {
        __type: "HTTPRequest",
        ClientIP: undefined,
        Country: undefined,
        HTTPVersion: undefined,
        Headers: undefined,
        Method: undefined,
        URI: undefined
    };
    if (output.ClientIP !== undefined && output.ClientIP !== null) {
        contents.ClientIP = output.ClientIP;
    }
    if (output.Country !== undefined && output.Country !== null) {
        contents.Country = output.Country;
    }
    if (output.HTTPVersion !== undefined && output.HTTPVersion !== null) {
        contents.HTTPVersion = output.HTTPVersion;
    }
    if (output.Headers !== undefined && output.Headers !== null) {
        contents.Headers = deserializeAws_json1_1HTTPHeaders(output.Headers, context);
    }
    if (output.Method !== undefined && output.Method !== null) {
        contents.Method = output.Method;
    }
    if (output.URI !== undefined && output.URI !== null) {
        contents.URI = output.URI;
    }
    return contents;
};
const deserializeAws_json1_1IPSet = (output, context) => {
    let contents = {
        __type: "IPSet",
        IPSetDescriptors: undefined,
        IPSetId: undefined,
        Name: undefined
    };
    if (output.IPSetDescriptors !== undefined &&
        output.IPSetDescriptors !== null) {
        contents.IPSetDescriptors = deserializeAws_json1_1IPSetDescriptors(output.IPSetDescriptors, context);
    }
    if (output.IPSetId !== undefined && output.IPSetId !== null) {
        contents.IPSetId = output.IPSetId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1IPSetDescriptor = (output, context) => {
    let contents = {
        __type: "IPSetDescriptor",
        Type: undefined,
        Value: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1IPSetDescriptors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IPSetDescriptor(entry, context));
};
const deserializeAws_json1_1IPSetSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IPSetSummary(entry, context));
};
const deserializeAws_json1_1IPSetSummary = (output, context) => {
    let contents = {
        __type: "IPSetSummary",
        IPSetId: undefined,
        Name: undefined
    };
    if (output.IPSetId !== undefined && output.IPSetId !== null) {
        contents.IPSetId = output.IPSetId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1ListActivatedRulesInRuleGroupResponse = (output, context) => {
    let contents = {
        __type: "ListActivatedRulesInRuleGroupResponse",
        ActivatedRules: undefined,
        NextMarker: undefined
    };
    if (output.ActivatedRules !== undefined && output.ActivatedRules !== null) {
        contents.ActivatedRules = deserializeAws_json1_1ActivatedRules(output.ActivatedRules, context);
    }
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    return contents;
};
const deserializeAws_json1_1ListByteMatchSetsResponse = (output, context) => {
    let contents = {
        __type: "ListByteMatchSetsResponse",
        ByteMatchSets: undefined,
        NextMarker: undefined
    };
    if (output.ByteMatchSets !== undefined && output.ByteMatchSets !== null) {
        contents.ByteMatchSets = deserializeAws_json1_1ByteMatchSetSummaries(output.ByteMatchSets, context);
    }
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    return contents;
};
const deserializeAws_json1_1ListGeoMatchSetsResponse = (output, context) => {
    let contents = {
        __type: "ListGeoMatchSetsResponse",
        GeoMatchSets: undefined,
        NextMarker: undefined
    };
    if (output.GeoMatchSets !== undefined && output.GeoMatchSets !== null) {
        contents.GeoMatchSets = deserializeAws_json1_1GeoMatchSetSummaries(output.GeoMatchSets, context);
    }
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    return contents;
};
const deserializeAws_json1_1ListIPSetsResponse = (output, context) => {
    let contents = {
        __type: "ListIPSetsResponse",
        IPSets: undefined,
        NextMarker: undefined
    };
    if (output.IPSets !== undefined && output.IPSets !== null) {
        contents.IPSets = deserializeAws_json1_1IPSetSummaries(output.IPSets, context);
    }
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    return contents;
};
const deserializeAws_json1_1ListLoggingConfigurationsResponse = (output, context) => {
    let contents = {
        __type: "ListLoggingConfigurationsResponse",
        LoggingConfigurations: undefined,
        NextMarker: undefined
    };
    if (output.LoggingConfigurations !== undefined &&
        output.LoggingConfigurations !== null) {
        contents.LoggingConfigurations = deserializeAws_json1_1LoggingConfigurations(output.LoggingConfigurations, context);
    }
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    return contents;
};
const deserializeAws_json1_1ListRateBasedRulesResponse = (output, context) => {
    let contents = {
        __type: "ListRateBasedRulesResponse",
        NextMarker: undefined,
        Rules: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.Rules !== undefined && output.Rules !== null) {
        contents.Rules = deserializeAws_json1_1RuleSummaries(output.Rules, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRegexMatchSetsResponse = (output, context) => {
    let contents = {
        __type: "ListRegexMatchSetsResponse",
        NextMarker: undefined,
        RegexMatchSets: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.RegexMatchSets !== undefined && output.RegexMatchSets !== null) {
        contents.RegexMatchSets = deserializeAws_json1_1RegexMatchSetSummaries(output.RegexMatchSets, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRegexPatternSetsResponse = (output, context) => {
    let contents = {
        __type: "ListRegexPatternSetsResponse",
        NextMarker: undefined,
        RegexPatternSets: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.RegexPatternSets !== undefined &&
        output.RegexPatternSets !== null) {
        contents.RegexPatternSets = deserializeAws_json1_1RegexPatternSetSummaries(output.RegexPatternSets, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRuleGroupsResponse = (output, context) => {
    let contents = {
        __type: "ListRuleGroupsResponse",
        NextMarker: undefined,
        RuleGroups: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.RuleGroups !== undefined && output.RuleGroups !== null) {
        contents.RuleGroups = deserializeAws_json1_1RuleGroupSummaries(output.RuleGroups, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRulesResponse = (output, context) => {
    let contents = {
        __type: "ListRulesResponse",
        NextMarker: undefined,
        Rules: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.Rules !== undefined && output.Rules !== null) {
        contents.Rules = deserializeAws_json1_1RuleSummaries(output.Rules, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSizeConstraintSetsResponse = (output, context) => {
    let contents = {
        __type: "ListSizeConstraintSetsResponse",
        NextMarker: undefined,
        SizeConstraintSets: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.SizeConstraintSets !== undefined &&
        output.SizeConstraintSets !== null) {
        contents.SizeConstraintSets = deserializeAws_json1_1SizeConstraintSetSummaries(output.SizeConstraintSets, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSqlInjectionMatchSetsResponse = (output, context) => {
    let contents = {
        __type: "ListSqlInjectionMatchSetsResponse",
        NextMarker: undefined,
        SqlInjectionMatchSets: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.SqlInjectionMatchSets !== undefined &&
        output.SqlInjectionMatchSets !== null) {
        contents.SqlInjectionMatchSets = deserializeAws_json1_1SqlInjectionMatchSetSummaries(output.SqlInjectionMatchSets, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSubscribedRuleGroupsResponse = (output, context) => {
    let contents = {
        __type: "ListSubscribedRuleGroupsResponse",
        NextMarker: undefined,
        RuleGroups: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.RuleGroups !== undefined && output.RuleGroups !== null) {
        contents.RuleGroups = deserializeAws_json1_1SubscribedRuleGroupSummaries(output.RuleGroups, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        NextMarker: undefined,
        TagInfoForResource: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.TagInfoForResource !== undefined &&
        output.TagInfoForResource !== null) {
        contents.TagInfoForResource = deserializeAws_json1_1TagInfoForResource(output.TagInfoForResource, context);
    }
    return contents;
};
const deserializeAws_json1_1ListWebACLsResponse = (output, context) => {
    let contents = {
        __type: "ListWebACLsResponse",
        NextMarker: undefined,
        WebACLs: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.WebACLs !== undefined && output.WebACLs !== null) {
        contents.WebACLs = deserializeAws_json1_1WebACLSummaries(output.WebACLs, context);
    }
    return contents;
};
const deserializeAws_json1_1ListXssMatchSetsResponse = (output, context) => {
    let contents = {
        __type: "ListXssMatchSetsResponse",
        NextMarker: undefined,
        XssMatchSets: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.XssMatchSets !== undefined && output.XssMatchSets !== null) {
        contents.XssMatchSets = deserializeAws_json1_1XssMatchSetSummaries(output.XssMatchSets, context);
    }
    return contents;
};
const deserializeAws_json1_1LogDestinationConfigs = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1LoggingConfiguration = (output, context) => {
    let contents = {
        __type: "LoggingConfiguration",
        LogDestinationConfigs: undefined,
        RedactedFields: undefined,
        ResourceArn: undefined
    };
    if (output.LogDestinationConfigs !== undefined &&
        output.LogDestinationConfigs !== null) {
        contents.LogDestinationConfigs = deserializeAws_json1_1LogDestinationConfigs(output.LogDestinationConfigs, context);
    }
    if (output.RedactedFields !== undefined && output.RedactedFields !== null) {
        contents.RedactedFields = deserializeAws_json1_1RedactedFields(output.RedactedFields, context);
    }
    if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
        contents.ResourceArn = output.ResourceArn;
    }
    return contents;
};
const deserializeAws_json1_1LoggingConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LoggingConfiguration(entry, context));
};
const deserializeAws_json1_1ManagedKeys = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Predicate = (output, context) => {
    let contents = {
        __type: "Predicate",
        DataId: undefined,
        Negated: undefined,
        Type: undefined
    };
    if (output.DataId !== undefined && output.DataId !== null) {
        contents.DataId = output.DataId;
    }
    if (output.Negated !== undefined && output.Negated !== null) {
        contents.Negated = output.Negated;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1Predicates = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Predicate(entry, context));
};
const deserializeAws_json1_1PutLoggingConfigurationResponse = (output, context) => {
    let contents = {
        __type: "PutLoggingConfigurationResponse",
        LoggingConfiguration: undefined
    };
    if (output.LoggingConfiguration !== undefined &&
        output.LoggingConfiguration !== null) {
        contents.LoggingConfiguration = deserializeAws_json1_1LoggingConfiguration(output.LoggingConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1PutPermissionPolicyResponse = (output, context) => {
    let contents = {
        __type: "PutPermissionPolicyResponse"
    };
    return contents;
};
const deserializeAws_json1_1RateBasedRule = (output, context) => {
    let contents = {
        __type: "RateBasedRule",
        MatchPredicates: undefined,
        MetricName: undefined,
        Name: undefined,
        RateKey: undefined,
        RateLimit: undefined,
        RuleId: undefined
    };
    if (output.MatchPredicates !== undefined && output.MatchPredicates !== null) {
        contents.MatchPredicates = deserializeAws_json1_1Predicates(output.MatchPredicates, context);
    }
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RateKey !== undefined && output.RateKey !== null) {
        contents.RateKey = output.RateKey;
    }
    if (output.RateLimit !== undefined && output.RateLimit !== null) {
        contents.RateLimit = output.RateLimit;
    }
    if (output.RuleId !== undefined && output.RuleId !== null) {
        contents.RuleId = output.RuleId;
    }
    return contents;
};
const deserializeAws_json1_1RedactedFields = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FieldToMatch(entry, context));
};
const deserializeAws_json1_1RegexMatchSet = (output, context) => {
    let contents = {
        __type: "RegexMatchSet",
        Name: undefined,
        RegexMatchSetId: undefined,
        RegexMatchTuples: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RegexMatchSetId !== undefined && output.RegexMatchSetId !== null) {
        contents.RegexMatchSetId = output.RegexMatchSetId;
    }
    if (output.RegexMatchTuples !== undefined &&
        output.RegexMatchTuples !== null) {
        contents.RegexMatchTuples = deserializeAws_json1_1RegexMatchTuples(output.RegexMatchTuples, context);
    }
    return contents;
};
const deserializeAws_json1_1RegexMatchSetSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RegexMatchSetSummary(entry, context));
};
const deserializeAws_json1_1RegexMatchSetSummary = (output, context) => {
    let contents = {
        __type: "RegexMatchSetSummary",
        Name: undefined,
        RegexMatchSetId: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RegexMatchSetId !== undefined && output.RegexMatchSetId !== null) {
        contents.RegexMatchSetId = output.RegexMatchSetId;
    }
    return contents;
};
const deserializeAws_json1_1RegexMatchTuple = (output, context) => {
    let contents = {
        __type: "RegexMatchTuple",
        FieldToMatch: undefined,
        RegexPatternSetId: undefined,
        TextTransformation: undefined
    };
    if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
        contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context);
    }
    if (output.RegexPatternSetId !== undefined &&
        output.RegexPatternSetId !== null) {
        contents.RegexPatternSetId = output.RegexPatternSetId;
    }
    if (output.TextTransformation !== undefined &&
        output.TextTransformation !== null) {
        contents.TextTransformation = output.TextTransformation;
    }
    return contents;
};
const deserializeAws_json1_1RegexMatchTuples = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RegexMatchTuple(entry, context));
};
const deserializeAws_json1_1RegexPatternSet = (output, context) => {
    let contents = {
        __type: "RegexPatternSet",
        Name: undefined,
        RegexPatternSetId: undefined,
        RegexPatternStrings: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RegexPatternSetId !== undefined &&
        output.RegexPatternSetId !== null) {
        contents.RegexPatternSetId = output.RegexPatternSetId;
    }
    if (output.RegexPatternStrings !== undefined &&
        output.RegexPatternStrings !== null) {
        contents.RegexPatternStrings = deserializeAws_json1_1RegexPatternStrings(output.RegexPatternStrings, context);
    }
    return contents;
};
const deserializeAws_json1_1RegexPatternSetSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RegexPatternSetSummary(entry, context));
};
const deserializeAws_json1_1RegexPatternSetSummary = (output, context) => {
    let contents = {
        __type: "RegexPatternSetSummary",
        Name: undefined,
        RegexPatternSetId: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RegexPatternSetId !== undefined &&
        output.RegexPatternSetId !== null) {
        contents.RegexPatternSetId = output.RegexPatternSetId;
    }
    return contents;
};
const deserializeAws_json1_1RegexPatternStrings = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ResourceArns = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Rule = (output, context) => {
    let contents = {
        __type: "Rule",
        MetricName: undefined,
        Name: undefined,
        Predicates: undefined,
        RuleId: undefined
    };
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Predicates !== undefined && output.Predicates !== null) {
        contents.Predicates = deserializeAws_json1_1Predicates(output.Predicates, context);
    }
    if (output.RuleId !== undefined && output.RuleId !== null) {
        contents.RuleId = output.RuleId;
    }
    return contents;
};
const deserializeAws_json1_1RuleGroup = (output, context) => {
    let contents = {
        __type: "RuleGroup",
        MetricName: undefined,
        Name: undefined,
        RuleGroupId: undefined
    };
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RuleGroupId !== undefined && output.RuleGroupId !== null) {
        contents.RuleGroupId = output.RuleGroupId;
    }
    return contents;
};
const deserializeAws_json1_1RuleGroupSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RuleGroupSummary(entry, context));
};
const deserializeAws_json1_1RuleGroupSummary = (output, context) => {
    let contents = {
        __type: "RuleGroupSummary",
        Name: undefined,
        RuleGroupId: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RuleGroupId !== undefined && output.RuleGroupId !== null) {
        contents.RuleGroupId = output.RuleGroupId;
    }
    return contents;
};
const deserializeAws_json1_1RuleSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RuleSummary(entry, context));
};
const deserializeAws_json1_1RuleSummary = (output, context) => {
    let contents = {
        __type: "RuleSummary",
        Name: undefined,
        RuleId: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RuleId !== undefined && output.RuleId !== null) {
        contents.RuleId = output.RuleId;
    }
    return contents;
};
const deserializeAws_json1_1SampledHTTPRequest = (output, context) => {
    let contents = {
        __type: "SampledHTTPRequest",
        Action: undefined,
        Request: undefined,
        RuleWithinRuleGroup: undefined,
        Timestamp: undefined,
        Weight: undefined
    };
    if (output.Action !== undefined && output.Action !== null) {
        contents.Action = output.Action;
    }
    if (output.Request !== undefined && output.Request !== null) {
        contents.Request = deserializeAws_json1_1HTTPRequest(output.Request, context);
    }
    if (output.RuleWithinRuleGroup !== undefined &&
        output.RuleWithinRuleGroup !== null) {
        contents.RuleWithinRuleGroup = output.RuleWithinRuleGroup;
    }
    if (output.Timestamp !== undefined && output.Timestamp !== null) {
        contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
    }
    if (output.Weight !== undefined && output.Weight !== null) {
        contents.Weight = output.Weight;
    }
    return contents;
};
const deserializeAws_json1_1SampledHTTPRequests = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SampledHTTPRequest(entry, context));
};
const deserializeAws_json1_1SizeConstraint = (output, context) => {
    let contents = {
        __type: "SizeConstraint",
        ComparisonOperator: undefined,
        FieldToMatch: undefined,
        Size: undefined,
        TextTransformation: undefined
    };
    if (output.ComparisonOperator !== undefined &&
        output.ComparisonOperator !== null) {
        contents.ComparisonOperator = output.ComparisonOperator;
    }
    if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
        contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context);
    }
    if (output.Size !== undefined && output.Size !== null) {
        contents.Size = output.Size;
    }
    if (output.TextTransformation !== undefined &&
        output.TextTransformation !== null) {
        contents.TextTransformation = output.TextTransformation;
    }
    return contents;
};
const deserializeAws_json1_1SizeConstraintSet = (output, context) => {
    let contents = {
        __type: "SizeConstraintSet",
        Name: undefined,
        SizeConstraintSetId: undefined,
        SizeConstraints: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SizeConstraintSetId !== undefined &&
        output.SizeConstraintSetId !== null) {
        contents.SizeConstraintSetId = output.SizeConstraintSetId;
    }
    if (output.SizeConstraints !== undefined && output.SizeConstraints !== null) {
        contents.SizeConstraints = deserializeAws_json1_1SizeConstraints(output.SizeConstraints, context);
    }
    return contents;
};
const deserializeAws_json1_1SizeConstraintSetSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SizeConstraintSetSummary(entry, context));
};
const deserializeAws_json1_1SizeConstraintSetSummary = (output, context) => {
    let contents = {
        __type: "SizeConstraintSetSummary",
        Name: undefined,
        SizeConstraintSetId: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SizeConstraintSetId !== undefined &&
        output.SizeConstraintSetId !== null) {
        contents.SizeConstraintSetId = output.SizeConstraintSetId;
    }
    return contents;
};
const deserializeAws_json1_1SizeConstraints = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SizeConstraint(entry, context));
};
const deserializeAws_json1_1SqlInjectionMatchSet = (output, context) => {
    let contents = {
        __type: "SqlInjectionMatchSet",
        Name: undefined,
        SqlInjectionMatchSetId: undefined,
        SqlInjectionMatchTuples: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SqlInjectionMatchSetId !== undefined &&
        output.SqlInjectionMatchSetId !== null) {
        contents.SqlInjectionMatchSetId = output.SqlInjectionMatchSetId;
    }
    if (output.SqlInjectionMatchTuples !== undefined &&
        output.SqlInjectionMatchTuples !== null) {
        contents.SqlInjectionMatchTuples = deserializeAws_json1_1SqlInjectionMatchTuples(output.SqlInjectionMatchTuples, context);
    }
    return contents;
};
const deserializeAws_json1_1SqlInjectionMatchSetSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SqlInjectionMatchSetSummary(entry, context));
};
const deserializeAws_json1_1SqlInjectionMatchSetSummary = (output, context) => {
    let contents = {
        __type: "SqlInjectionMatchSetSummary",
        Name: undefined,
        SqlInjectionMatchSetId: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SqlInjectionMatchSetId !== undefined &&
        output.SqlInjectionMatchSetId !== null) {
        contents.SqlInjectionMatchSetId = output.SqlInjectionMatchSetId;
    }
    return contents;
};
const deserializeAws_json1_1SqlInjectionMatchTuple = (output, context) => {
    let contents = {
        __type: "SqlInjectionMatchTuple",
        FieldToMatch: undefined,
        TextTransformation: undefined
    };
    if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
        contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context);
    }
    if (output.TextTransformation !== undefined &&
        output.TextTransformation !== null) {
        contents.TextTransformation = output.TextTransformation;
    }
    return contents;
};
const deserializeAws_json1_1SqlInjectionMatchTuples = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SqlInjectionMatchTuple(entry, context));
};
const deserializeAws_json1_1SubscribedRuleGroupSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SubscribedRuleGroupSummary(entry, context));
};
const deserializeAws_json1_1SubscribedRuleGroupSummary = (output, context) => {
    let contents = {
        __type: "SubscribedRuleGroupSummary",
        MetricName: undefined,
        Name: undefined,
        RuleGroupId: undefined
    };
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RuleGroupId !== undefined && output.RuleGroupId !== null) {
        contents.RuleGroupId = output.RuleGroupId;
    }
    return contents;
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        Key: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1TagInfoForResource = (output, context) => {
    let contents = {
        __type: "TagInfoForResource",
        ResourceARN: undefined,
        TagList: undefined
    };
    if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
        contents.ResourceARN = output.ResourceARN;
    }
    if (output.TagList !== undefined && output.TagList !== null) {
        contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1TimeWindow = (output, context) => {
    let contents = {
        __type: "TimeWindow",
        EndTime: undefined,
        StartTime: undefined
    };
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateByteMatchSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateByteMatchSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateGeoMatchSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateGeoMatchSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateIPSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateIPSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateRateBasedRuleResponse = (output, context) => {
    let contents = {
        __type: "UpdateRateBasedRuleResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateRegexMatchSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateRegexMatchSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateRegexPatternSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateRegexPatternSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateRuleGroupResponse = (output, context) => {
    let contents = {
        __type: "UpdateRuleGroupResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateRuleResponse = (output, context) => {
    let contents = {
        __type: "UpdateRuleResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateSizeConstraintSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateSizeConstraintSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateSqlInjectionMatchSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateSqlInjectionMatchSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateWebACLResponse = (output, context) => {
    let contents = {
        __type: "UpdateWebACLResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateXssMatchSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateXssMatchSetResponse",
        ChangeToken: undefined
    };
    if (output.ChangeToken !== undefined && output.ChangeToken !== null) {
        contents.ChangeToken = output.ChangeToken;
    }
    return contents;
};
const deserializeAws_json1_1WAFBadRequestException = (output, context) => {
    let contents = {
        __type: "WAFBadRequestException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFDisallowedNameException = (output, context) => {
    let contents = {
        __type: "WAFDisallowedNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFInternalErrorException = (output, context) => {
    let contents = {
        __type: "WAFInternalErrorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFInvalidAccountException = (output, context) => {
    let contents = {
        __type: "WAFInvalidAccountException"
    };
    return contents;
};
const deserializeAws_json1_1WAFInvalidOperationException = (output, context) => {
    let contents = {
        __type: "WAFInvalidOperationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFInvalidParameterException = (output, context) => {
    let contents = {
        __type: "WAFInvalidParameterException",
        field: undefined,
        parameter: undefined,
        reason: undefined
    };
    if (output.field !== undefined && output.field !== null) {
        contents.field = output.field;
    }
    if (output.parameter !== undefined && output.parameter !== null) {
        contents.parameter = output.parameter;
    }
    if (output.reason !== undefined && output.reason !== null) {
        contents.reason = output.reason;
    }
    return contents;
};
const deserializeAws_json1_1WAFInvalidPermissionPolicyException = (output, context) => {
    let contents = {
        __type: "WAFInvalidPermissionPolicyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFInvalidRegexPatternException = (output, context) => {
    let contents = {
        __type: "WAFInvalidRegexPatternException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFLimitsExceededException = (output, context) => {
    let contents = {
        __type: "WAFLimitsExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFNonEmptyEntityException = (output, context) => {
    let contents = {
        __type: "WAFNonEmptyEntityException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFNonexistentContainerException = (output, context) => {
    let contents = {
        __type: "WAFNonexistentContainerException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFNonexistentItemException = (output, context) => {
    let contents = {
        __type: "WAFNonexistentItemException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFReferencedItemException = (output, context) => {
    let contents = {
        __type: "WAFReferencedItemException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFServiceLinkedRoleErrorException = (output, context) => {
    let contents = {
        __type: "WAFServiceLinkedRoleErrorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFStaleDataException = (output, context) => {
    let contents = {
        __type: "WAFStaleDataException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFSubscriptionNotFoundException = (output, context) => {
    let contents = {
        __type: "WAFSubscriptionNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFTagOperationException = (output, context) => {
    let contents = {
        __type: "WAFTagOperationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFTagOperationInternalErrorException = (output, context) => {
    let contents = {
        __type: "WAFTagOperationInternalErrorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFUnavailableEntityException = (output, context) => {
    let contents = {
        __type: "WAFUnavailableEntityException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WafAction = (output, context) => {
    let contents = {
        __type: "WafAction",
        Type: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1WafOverrideAction = (output, context) => {
    let contents = {
        __type: "WafOverrideAction",
        Type: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1WebACL = (output, context) => {
    let contents = {
        __type: "WebACL",
        DefaultAction: undefined,
        MetricName: undefined,
        Name: undefined,
        Rules: undefined,
        WebACLArn: undefined,
        WebACLId: undefined
    };
    if (output.DefaultAction !== undefined && output.DefaultAction !== null) {
        contents.DefaultAction = deserializeAws_json1_1WafAction(output.DefaultAction, context);
    }
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Rules !== undefined && output.Rules !== null) {
        contents.Rules = deserializeAws_json1_1ActivatedRules(output.Rules, context);
    }
    if (output.WebACLArn !== undefined && output.WebACLArn !== null) {
        contents.WebACLArn = output.WebACLArn;
    }
    if (output.WebACLId !== undefined && output.WebACLId !== null) {
        contents.WebACLId = output.WebACLId;
    }
    return contents;
};
const deserializeAws_json1_1WebACLSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WebACLSummary(entry, context));
};
const deserializeAws_json1_1WebACLSummary = (output, context) => {
    let contents = {
        __type: "WebACLSummary",
        Name: undefined,
        WebACLId: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.WebACLId !== undefined && output.WebACLId !== null) {
        contents.WebACLId = output.WebACLId;
    }
    return contents;
};
const deserializeAws_json1_1XssMatchSet = (output, context) => {
    let contents = {
        __type: "XssMatchSet",
        Name: undefined,
        XssMatchSetId: undefined,
        XssMatchTuples: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.XssMatchSetId !== undefined && output.XssMatchSetId !== null) {
        contents.XssMatchSetId = output.XssMatchSetId;
    }
    if (output.XssMatchTuples !== undefined && output.XssMatchTuples !== null) {
        contents.XssMatchTuples = deserializeAws_json1_1XssMatchTuples(output.XssMatchTuples, context);
    }
    return contents;
};
const deserializeAws_json1_1XssMatchSetSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1XssMatchSetSummary(entry, context));
};
const deserializeAws_json1_1XssMatchSetSummary = (output, context) => {
    let contents = {
        __type: "XssMatchSetSummary",
        Name: undefined,
        XssMatchSetId: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.XssMatchSetId !== undefined && output.XssMatchSetId !== null) {
        contents.XssMatchSetId = output.XssMatchSetId;
    }
    return contents;
};
const deserializeAws_json1_1XssMatchTuple = (output, context) => {
    let contents = {
        __type: "XssMatchTuple",
        FieldToMatch: undefined,
        TextTransformation: undefined
    };
    if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
        contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context);
    }
    if (output.TextTransformation !== undefined &&
        output.TextTransformation !== null) {
        contents.TextTransformation = output.TextTransformation;
    }
    return contents;
};
const deserializeAws_json1_1XssMatchTuples = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1XssMatchTuple(entry, context));
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    httpHeaders: output.headers,
    requestId: output.headers["x-amzn-requestid"]
});
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody, context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return (context.streamCollector(streamBody) || Promise.resolve(new Uint8Array()));
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => {
    return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};
const buildHttpRpcRequest = (context, headers, path, resolvedHostname, body) => {
    const contents = Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", path: path, headers: headers });
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
//# sourceMappingURL=Aws_json1_1.js.map