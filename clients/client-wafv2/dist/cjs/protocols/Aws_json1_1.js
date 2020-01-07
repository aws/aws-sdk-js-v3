"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.AssociateWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateWebACLCommand = serializeAws_json1_1AssociateWebACLCommand;
async function serializeAws_json1_1CheckCapacityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.CheckCapacity";
    let body;
    body = JSON.stringify(serializeAws_json1_1CheckCapacityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CheckCapacityCommand = serializeAws_json1_1CheckCapacityCommand;
async function serializeAws_json1_1CreateIPSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.CreateIPSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateIPSetCommand = serializeAws_json1_1CreateIPSetCommand;
async function serializeAws_json1_1CreateRegexPatternSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.CreateRegexPatternSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRegexPatternSetCommand = serializeAws_json1_1CreateRegexPatternSetCommand;
async function serializeAws_json1_1CreateRuleGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.CreateRuleGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRuleGroupCommand = serializeAws_json1_1CreateRuleGroupCommand;
async function serializeAws_json1_1CreateWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.CreateWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateWebACLCommand = serializeAws_json1_1CreateWebACLCommand;
async function serializeAws_json1_1DeleteIPSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.DeleteIPSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteIPSetCommand = serializeAws_json1_1DeleteIPSetCommand;
async function serializeAws_json1_1DeleteLoggingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.DeleteLoggingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLoggingConfigurationCommand = serializeAws_json1_1DeleteLoggingConfigurationCommand;
async function serializeAws_json1_1DeleteRegexPatternSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.DeleteRegexPatternSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRegexPatternSetCommand = serializeAws_json1_1DeleteRegexPatternSetCommand;
async function serializeAws_json1_1DeleteRuleGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.DeleteRuleGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRuleGroupCommand = serializeAws_json1_1DeleteRuleGroupCommand;
async function serializeAws_json1_1DeleteWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.DeleteWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteWebACLCommand = serializeAws_json1_1DeleteWebACLCommand;
async function serializeAws_json1_1DescribeManagedRuleGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.DescribeManagedRuleGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeManagedRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeManagedRuleGroupCommand = serializeAws_json1_1DescribeManagedRuleGroupCommand;
async function serializeAws_json1_1DisassociateWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.DisassociateWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateWebACLCommand = serializeAws_json1_1DisassociateWebACLCommand;
async function serializeAws_json1_1GetIPSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.GetIPSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetIPSetCommand = serializeAws_json1_1GetIPSetCommand;
async function serializeAws_json1_1GetLoggingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.GetLoggingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLoggingConfigurationCommand = serializeAws_json1_1GetLoggingConfigurationCommand;
async function serializeAws_json1_1GetRateBasedStatementManagedKeysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.GetRateBasedStatementManagedKeys";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRateBasedStatementManagedKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRateBasedStatementManagedKeysCommand = serializeAws_json1_1GetRateBasedStatementManagedKeysCommand;
async function serializeAws_json1_1GetRegexPatternSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.GetRegexPatternSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRegexPatternSetCommand = serializeAws_json1_1GetRegexPatternSetCommand;
async function serializeAws_json1_1GetRuleGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.GetRuleGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRuleGroupCommand = serializeAws_json1_1GetRuleGroupCommand;
async function serializeAws_json1_1GetSampledRequestsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.GetSampledRequests";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSampledRequestsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSampledRequestsCommand = serializeAws_json1_1GetSampledRequestsCommand;
async function serializeAws_json1_1GetWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.GetWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetWebACLCommand = serializeAws_json1_1GetWebACLCommand;
async function serializeAws_json1_1GetWebACLForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.GetWebACLForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWebACLForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetWebACLForResourceCommand = serializeAws_json1_1GetWebACLForResourceCommand;
async function serializeAws_json1_1ListAvailableManagedRuleGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.ListAvailableManagedRuleGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAvailableManagedRuleGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAvailableManagedRuleGroupsCommand = serializeAws_json1_1ListAvailableManagedRuleGroupsCommand;
async function serializeAws_json1_1ListIPSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.ListIPSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIPSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListIPSetsCommand = serializeAws_json1_1ListIPSetsCommand;
async function serializeAws_json1_1ListLoggingConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.ListLoggingConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLoggingConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLoggingConfigurationsCommand = serializeAws_json1_1ListLoggingConfigurationsCommand;
async function serializeAws_json1_1ListRegexPatternSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.ListRegexPatternSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRegexPatternSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRegexPatternSetsCommand = serializeAws_json1_1ListRegexPatternSetsCommand;
async function serializeAws_json1_1ListResourcesForWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.ListResourcesForWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesForWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourcesForWebACLCommand = serializeAws_json1_1ListResourcesForWebACLCommand;
async function serializeAws_json1_1ListRuleGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.ListRuleGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRuleGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRuleGroupsCommand = serializeAws_json1_1ListRuleGroupsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListWebACLsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.ListWebACLs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWebACLsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListWebACLsCommand = serializeAws_json1_1ListWebACLsCommand;
async function serializeAws_json1_1PutLoggingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.PutLoggingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutLoggingConfigurationCommand = serializeAws_json1_1PutLoggingConfigurationCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateIPSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.UpdateIPSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateIPSetCommand = serializeAws_json1_1UpdateIPSetCommand;
async function serializeAws_json1_1UpdateRegexPatternSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.UpdateRegexPatternSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRegexPatternSetCommand = serializeAws_json1_1UpdateRegexPatternSetCommand;
async function serializeAws_json1_1UpdateRuleGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.UpdateRuleGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRuleGroupCommand = serializeAws_json1_1UpdateRuleGroupCommand;
async function serializeAws_json1_1UpdateWebACLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSWAF_20190729.UpdateWebACL";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateWebACLCommand = serializeAws_json1_1UpdateWebACLCommand;
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
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
async function deserializeAws_json1_1CheckCapacityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CheckCapacityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CheckCapacityResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CheckCapacityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CheckCapacityCommand = deserializeAws_json1_1CheckCapacityCommand;
async function deserializeAws_json1_1CheckCapacityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidResourceException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidResourceException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
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
        case "WAFAssociatedItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFAssociatedItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
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
async function deserializeAws_json1_1DescribeManagedRuleGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeManagedRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeManagedRuleGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeManagedRuleGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeManagedRuleGroupCommand = deserializeAws_json1_1DescribeManagedRuleGroupCommand;
async function deserializeAws_json1_1DescribeManagedRuleGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidResourceException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
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
async function deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRateBasedStatementManagedKeysResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand = deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand;
async function deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
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
async function deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAvailableManagedRuleGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand = deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand;
async function deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFServiceLinkedRoleErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFServiceLinkedRoleErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
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
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFInvalidResourceException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
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
const deserializeAws_json1_1WAFAssociatedItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFAssociatedItemException(body, context);
    const contents = Object.assign({ name: "WAFAssociatedItemException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFDuplicateItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFDuplicateItemException(body, context);
    const contents = Object.assign({ name: "WAFDuplicateItemException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFInternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInternalErrorException(body, context);
    const contents = Object.assign({ name: "WAFInternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFInvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidParameterException(body, context);
    const contents = Object.assign({ name: "WAFInvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFInvalidResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidResourceException(body, context);
    const contents = Object.assign({ name: "WAFInvalidResourceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFLimitsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFLimitsExceededException(body, context);
    const contents = Object.assign({ name: "WAFLimitsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFNonexistentItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFNonexistentItemException(body, context);
    const contents = Object.assign({ name: "WAFNonexistentItemException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFOptimisticLockExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFOptimisticLockException(body, context);
    const contents = Object.assign({ name: "WAFOptimisticLockException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFServiceLinkedRoleErrorException(body, context);
    const contents = Object.assign({ name: "WAFServiceLinkedRoleErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const serializeAws_json1_1AllQueryArguments = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1AllowAction = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1AndStatement = (input, context) => {
    const bodyParams = {};
    if (input.Statements !== undefined) {
        bodyParams["Statements"] = serializeAws_json1_1Statements(input.Statements, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.WebACLArn !== undefined) {
        bodyParams["WebACLArn"] = input.WebACLArn;
    }
    return bodyParams;
};
const serializeAws_json1_1BlockAction = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1Body = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1ByteMatchStatement = (input, context) => {
    const bodyParams = {};
    if (input.FieldToMatch !== undefined) {
        bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(input.FieldToMatch, context);
    }
    if (input.PositionalConstraint !== undefined) {
        bodyParams["PositionalConstraint"] = input.PositionalConstraint;
    }
    if (input.SearchString !== undefined) {
        bodyParams["SearchString"] = Buffer.from(input.SearchString).toString("utf-8");
    }
    if (input.TextTransformations !== undefined) {
        bodyParams["TextTransformations"] = serializeAws_json1_1TextTransformations(input.TextTransformations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CheckCapacityRequest = (input, context) => {
    const bodyParams = {};
    if (input.Rules !== undefined) {
        bodyParams["Rules"] = serializeAws_json1_1Rules(input.Rules, context);
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    return bodyParams;
};
const serializeAws_json1_1CountAction = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1CountryCodes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateIPSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Addresses !== undefined) {
        bodyParams["Addresses"] = serializeAws_json1_1IPAddresses(input.Addresses, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.IPAddressVersion !== undefined) {
        bodyParams["IPAddressVersion"] = input.IPAddressVersion;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRegexPatternSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RegularExpressionList !== undefined) {
        bodyParams["RegularExpressionList"] = serializeAws_json1_1RegularExpressionList(input.RegularExpressionList, context);
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRuleGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Capacity !== undefined) {
        bodyParams["Capacity"] = input.Capacity;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Rules !== undefined) {
        bodyParams["Rules"] = serializeAws_json1_1Rules(input.Rules, context);
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.VisibilityConfig !== undefined) {
        bodyParams["VisibilityConfig"] = serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.DefaultAction !== undefined) {
        bodyParams["DefaultAction"] = serializeAws_json1_1DefaultAction(input.DefaultAction, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Rules !== undefined) {
        bodyParams["Rules"] = serializeAws_json1_1Rules(input.Rules, context);
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.VisibilityConfig !== undefined) {
        bodyParams["VisibilityConfig"] = serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DefaultAction = (input, context) => {
    const bodyParams = {};
    if (input.Allow !== undefined) {
        bodyParams["Allow"] = serializeAws_json1_1AllowAction(input.Allow, context);
    }
    if (input.Block !== undefined) {
        bodyParams["Block"] = serializeAws_json1_1BlockAction(input.Block, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteIPSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.LockToken !== undefined) {
        bodyParams["LockToken"] = input.LockToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
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
const serializeAws_json1_1DeleteRegexPatternSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.LockToken !== undefined) {
        bodyParams["LockToken"] = input.LockToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRuleGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.LockToken !== undefined) {
        bodyParams["LockToken"] = input.LockToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.LockToken !== undefined) {
        bodyParams["LockToken"] = input.LockToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeManagedRuleGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    if (input.VendorName !== undefined) {
        bodyParams["VendorName"] = input.VendorName;
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
const serializeAws_json1_1ExcludedRule = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
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
    if (input.AllQueryArguments !== undefined) {
        bodyParams["AllQueryArguments"] = serializeAws_json1_1AllQueryArguments(input.AllQueryArguments, context);
    }
    if (input.Body !== undefined) {
        bodyParams["Body"] = serializeAws_json1_1Body(input.Body, context);
    }
    if (input.Method !== undefined) {
        bodyParams["Method"] = serializeAws_json1_1Method(input.Method, context);
    }
    if (input.QueryString !== undefined) {
        bodyParams["QueryString"] = serializeAws_json1_1QueryString(input.QueryString, context);
    }
    if (input.SingleHeader !== undefined) {
        bodyParams["SingleHeader"] = serializeAws_json1_1SingleHeader(input.SingleHeader, context);
    }
    if (input.SingleQueryArgument !== undefined) {
        bodyParams["SingleQueryArgument"] = serializeAws_json1_1SingleQueryArgument(input.SingleQueryArgument, context);
    }
    if (input.UriPath !== undefined) {
        bodyParams["UriPath"] = serializeAws_json1_1UriPath(input.UriPath, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GeoMatchStatement = (input, context) => {
    const bodyParams = {};
    if (input.CountryCodes !== undefined) {
        bodyParams["CountryCodes"] = serializeAws_json1_1CountryCodes(input.CountryCodes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetIPSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
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
const serializeAws_json1_1GetRateBasedStatementManagedKeysRequest = (input, context) => {
    const bodyParams = {};
    if (input.RuleName !== undefined) {
        bodyParams["RuleName"] = input.RuleName;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    if (input.WebACLId !== undefined) {
        bodyParams["WebACLId"] = input.WebACLId;
    }
    if (input.WebACLName !== undefined) {
        bodyParams["WebACLName"] = input.WebACLName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRegexPatternSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRuleGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSampledRequestsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxItems !== undefined) {
        bodyParams["MaxItems"] = input.MaxItems;
    }
    if (input.RuleMetricName !== undefined) {
        bodyParams["RuleMetricName"] = input.RuleMetricName;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    if (input.TimeWindow !== undefined) {
        bodyParams["TimeWindow"] = serializeAws_json1_1TimeWindow(input.TimeWindow, context);
    }
    if (input.WebAclArn !== undefined) {
        bodyParams["WebAclArn"] = input.WebAclArn;
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
const serializeAws_json1_1GetWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    return bodyParams;
};
const serializeAws_json1_1IPAddresses = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1IPSetReferenceStatement = (input, context) => {
    const bodyParams = {};
    if (input.ARN !== undefined) {
        bodyParams["ARN"] = input.ARN;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAvailableManagedRuleGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextMarker !== undefined) {
        bodyParams["NextMarker"] = input.NextMarker;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
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
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
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
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
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
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourcesForWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.WebACLArn !== undefined) {
        bodyParams["WebACLArn"] = input.WebACLArn;
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
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
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
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
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
const serializeAws_json1_1ManagedRuleGroupStatement = (input, context) => {
    const bodyParams = {};
    if (input.ExcludedRules !== undefined) {
        bodyParams["ExcludedRules"] = serializeAws_json1_1ExcludedRules(input.ExcludedRules, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.VendorName !== undefined) {
        bodyParams["VendorName"] = input.VendorName;
    }
    return bodyParams;
};
const serializeAws_json1_1Method = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1NoneAction = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1NotStatement = (input, context) => {
    const bodyParams = {};
    if (input.Statement !== undefined) {
        bodyParams["Statement"] = serializeAws_json1_1Statement(input.Statement, context);
    }
    return bodyParams;
};
const serializeAws_json1_1OrStatement = (input, context) => {
    const bodyParams = {};
    if (input.Statements !== undefined) {
        bodyParams["Statements"] = serializeAws_json1_1Statements(input.Statements, context);
    }
    return bodyParams;
};
const serializeAws_json1_1OverrideAction = (input, context) => {
    const bodyParams = {};
    if (input.Count !== undefined) {
        bodyParams["Count"] = serializeAws_json1_1CountAction(input.Count, context);
    }
    if (input.None !== undefined) {
        bodyParams["None"] = serializeAws_json1_1NoneAction(input.None, context);
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
const serializeAws_json1_1QueryString = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1RateBasedStatement = (input, context) => {
    const bodyParams = {};
    if (input.AggregateKeyType !== undefined) {
        bodyParams["AggregateKeyType"] = input.AggregateKeyType;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.ScopeDownStatement !== undefined) {
        bodyParams["ScopeDownStatement"] = serializeAws_json1_1Statement(input.ScopeDownStatement, context);
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
const serializeAws_json1_1Regex = (input, context) => {
    const bodyParams = {};
    if (input.RegexString !== undefined) {
        bodyParams["RegexString"] = input.RegexString;
    }
    return bodyParams;
};
const serializeAws_json1_1RegexPatternSetReferenceStatement = (input, context) => {
    const bodyParams = {};
    if (input.ARN !== undefined) {
        bodyParams["ARN"] = input.ARN;
    }
    if (input.FieldToMatch !== undefined) {
        bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(input.FieldToMatch, context);
    }
    if (input.TextTransformations !== undefined) {
        bodyParams["TextTransformations"] = serializeAws_json1_1TextTransformations(input.TextTransformations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RegularExpressionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Regex(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Rule = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = serializeAws_json1_1RuleAction(input.Action, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OverrideAction !== undefined) {
        bodyParams["OverrideAction"] = serializeAws_json1_1OverrideAction(input.OverrideAction, context);
    }
    if (input.Priority !== undefined) {
        bodyParams["Priority"] = input.Priority;
    }
    if (input.Statement !== undefined) {
        bodyParams["Statement"] = serializeAws_json1_1Statement(input.Statement, context);
    }
    if (input.VisibilityConfig !== undefined) {
        bodyParams["VisibilityConfig"] = serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RuleAction = (input, context) => {
    const bodyParams = {};
    if (input.Allow !== undefined) {
        bodyParams["Allow"] = serializeAws_json1_1AllowAction(input.Allow, context);
    }
    if (input.Block !== undefined) {
        bodyParams["Block"] = serializeAws_json1_1BlockAction(input.Block, context);
    }
    if (input.Count !== undefined) {
        bodyParams["Count"] = serializeAws_json1_1CountAction(input.Count, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RuleGroupReferenceStatement = (input, context) => {
    const bodyParams = {};
    if (input.ARN !== undefined) {
        bodyParams["ARN"] = input.ARN;
    }
    if (input.ExcludedRules !== undefined) {
        bodyParams["ExcludedRules"] = serializeAws_json1_1ExcludedRules(input.ExcludedRules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Rules = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Rule(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SingleHeader = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1SingleQueryArgument = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1SizeConstraintStatement = (input, context) => {
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
    if (input.TextTransformations !== undefined) {
        bodyParams["TextTransformations"] = serializeAws_json1_1TextTransformations(input.TextTransformations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SqliMatchStatement = (input, context) => {
    const bodyParams = {};
    if (input.FieldToMatch !== undefined) {
        bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(input.FieldToMatch, context);
    }
    if (input.TextTransformations !== undefined) {
        bodyParams["TextTransformations"] = serializeAws_json1_1TextTransformations(input.TextTransformations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Statement = (input, context) => {
    const bodyParams = {};
    if (input.AndStatement !== undefined) {
        bodyParams["AndStatement"] = serializeAws_json1_1AndStatement(input.AndStatement, context);
    }
    if (input.ByteMatchStatement !== undefined) {
        bodyParams["ByteMatchStatement"] = serializeAws_json1_1ByteMatchStatement(input.ByteMatchStatement, context);
    }
    if (input.GeoMatchStatement !== undefined) {
        bodyParams["GeoMatchStatement"] = serializeAws_json1_1GeoMatchStatement(input.GeoMatchStatement, context);
    }
    if (input.IPSetReferenceStatement !== undefined) {
        bodyParams["IPSetReferenceStatement"] = serializeAws_json1_1IPSetReferenceStatement(input.IPSetReferenceStatement, context);
    }
    if (input.ManagedRuleGroupStatement !== undefined) {
        bodyParams["ManagedRuleGroupStatement"] = serializeAws_json1_1ManagedRuleGroupStatement(input.ManagedRuleGroupStatement, context);
    }
    if (input.NotStatement !== undefined) {
        bodyParams["NotStatement"] = serializeAws_json1_1NotStatement(input.NotStatement, context);
    }
    if (input.OrStatement !== undefined) {
        bodyParams["OrStatement"] = serializeAws_json1_1OrStatement(input.OrStatement, context);
    }
    if (input.RateBasedStatement !== undefined) {
        bodyParams["RateBasedStatement"] = serializeAws_json1_1RateBasedStatement(input.RateBasedStatement, context);
    }
    if (input.RegexPatternSetReferenceStatement !== undefined) {
        bodyParams["RegexPatternSetReferenceStatement"] = serializeAws_json1_1RegexPatternSetReferenceStatement(input.RegexPatternSetReferenceStatement, context);
    }
    if (input.RuleGroupReferenceStatement !== undefined) {
        bodyParams["RuleGroupReferenceStatement"] = serializeAws_json1_1RuleGroupReferenceStatement(input.RuleGroupReferenceStatement, context);
    }
    if (input.SizeConstraintStatement !== undefined) {
        bodyParams["SizeConstraintStatement"] = serializeAws_json1_1SizeConstraintStatement(input.SizeConstraintStatement, context);
    }
    if (input.SqliMatchStatement !== undefined) {
        bodyParams["SqliMatchStatement"] = serializeAws_json1_1SqliMatchStatement(input.SqliMatchStatement, context);
    }
    if (input.XssMatchStatement !== undefined) {
        bodyParams["XssMatchStatement"] = serializeAws_json1_1XssMatchStatement(input.XssMatchStatement, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Statements = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Statement(entry, context));
    }
    return contents;
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
const serializeAws_json1_1TextTransformation = (input, context) => {
    const bodyParams = {};
    if (input.Priority !== undefined) {
        bodyParams["Priority"] = input.Priority;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1TextTransformations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TextTransformation(entry, context));
    }
    return contents;
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
const serializeAws_json1_1UpdateIPSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Addresses !== undefined) {
        bodyParams["Addresses"] = serializeAws_json1_1IPAddresses(input.Addresses, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.LockToken !== undefined) {
        bodyParams["LockToken"] = input.LockToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRegexPatternSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.LockToken !== undefined) {
        bodyParams["LockToken"] = input.LockToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RegularExpressionList !== undefined) {
        bodyParams["RegularExpressionList"] = serializeAws_json1_1RegularExpressionList(input.RegularExpressionList, context);
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRuleGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.LockToken !== undefined) {
        bodyParams["LockToken"] = input.LockToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Rules !== undefined) {
        bodyParams["Rules"] = serializeAws_json1_1Rules(input.Rules, context);
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    if (input.VisibilityConfig !== undefined) {
        bodyParams["VisibilityConfig"] = serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateWebACLRequest = (input, context) => {
    const bodyParams = {};
    if (input.DefaultAction !== undefined) {
        bodyParams["DefaultAction"] = serializeAws_json1_1DefaultAction(input.DefaultAction, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.LockToken !== undefined) {
        bodyParams["LockToken"] = input.LockToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Rules !== undefined) {
        bodyParams["Rules"] = serializeAws_json1_1Rules(input.Rules, context);
    }
    if (input.Scope !== undefined) {
        bodyParams["Scope"] = input.Scope;
    }
    if (input.VisibilityConfig !== undefined) {
        bodyParams["VisibilityConfig"] = serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UriPath = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1VisibilityConfig = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchMetricsEnabled !== undefined) {
        bodyParams["CloudWatchMetricsEnabled"] = input.CloudWatchMetricsEnabled;
    }
    if (input.MetricName !== undefined) {
        bodyParams["MetricName"] = input.MetricName;
    }
    if (input.SampledRequestsEnabled !== undefined) {
        bodyParams["SampledRequestsEnabled"] = input.SampledRequestsEnabled;
    }
    return bodyParams;
};
const serializeAws_json1_1XssMatchStatement = (input, context) => {
    const bodyParams = {};
    if (input.FieldToMatch !== undefined) {
        bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(input.FieldToMatch, context);
    }
    if (input.TextTransformations !== undefined) {
        bodyParams["TextTransformations"] = serializeAws_json1_1TextTransformations(input.TextTransformations, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1AllQueryArguments = (output, context) => {
    let contents = {
        __type: "AllQueryArguments"
    };
    return contents;
};
const deserializeAws_json1_1AllowAction = (output, context) => {
    let contents = {
        __type: "AllowAction"
    };
    return contents;
};
const deserializeAws_json1_1AndStatement = (output, context) => {
    let contents = {
        __type: "AndStatement",
        Statements: undefined
    };
    if (output.Statements !== undefined && output.Statements !== null) {
        contents.Statements = deserializeAws_json1_1Statements(output.Statements, context);
    }
    return contents;
};
const deserializeAws_json1_1AssociateWebACLResponse = (output, context) => {
    let contents = {
        __type: "AssociateWebACLResponse"
    };
    return contents;
};
const deserializeAws_json1_1BlockAction = (output, context) => {
    let contents = {
        __type: "BlockAction"
    };
    return contents;
};
const deserializeAws_json1_1Body = (output, context) => {
    let contents = {
        __type: "Body"
    };
    return contents;
};
const deserializeAws_json1_1ByteMatchStatement = (output, context) => {
    let contents = {
        __type: "ByteMatchStatement",
        FieldToMatch: undefined,
        PositionalConstraint: undefined,
        SearchString: undefined,
        TextTransformations: undefined
    };
    if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
        contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context);
    }
    if (output.PositionalConstraint !== undefined &&
        output.PositionalConstraint !== null) {
        contents.PositionalConstraint = output.PositionalConstraint;
    }
    if (output.SearchString !== undefined && output.SearchString !== null) {
        contents.SearchString = Uint8Array.from(output.SearchString);
    }
    if (output.TextTransformations !== undefined &&
        output.TextTransformations !== null) {
        contents.TextTransformations = deserializeAws_json1_1TextTransformations(output.TextTransformations, context);
    }
    return contents;
};
const deserializeAws_json1_1CheckCapacityResponse = (output, context) => {
    let contents = {
        __type: "CheckCapacityResponse",
        Capacity: undefined
    };
    if (output.Capacity !== undefined && output.Capacity !== null) {
        contents.Capacity = output.Capacity;
    }
    return contents;
};
const deserializeAws_json1_1CountAction = (output, context) => {
    let contents = {
        __type: "CountAction"
    };
    return contents;
};
const deserializeAws_json1_1CountryCodes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CreateIPSetResponse = (output, context) => {
    let contents = {
        __type: "CreateIPSetResponse",
        Summary: undefined
    };
    if (output.Summary !== undefined && output.Summary !== null) {
        contents.Summary = deserializeAws_json1_1IPSetSummary(output.Summary, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRegexPatternSetResponse = (output, context) => {
    let contents = {
        __type: "CreateRegexPatternSetResponse",
        Summary: undefined
    };
    if (output.Summary !== undefined && output.Summary !== null) {
        contents.Summary = deserializeAws_json1_1RegexPatternSetSummary(output.Summary, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRuleGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateRuleGroupResponse",
        Summary: undefined
    };
    if (output.Summary !== undefined && output.Summary !== null) {
        contents.Summary = deserializeAws_json1_1RuleGroupSummary(output.Summary, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateWebACLResponse = (output, context) => {
    let contents = {
        __type: "CreateWebACLResponse",
        Summary: undefined
    };
    if (output.Summary !== undefined && output.Summary !== null) {
        contents.Summary = deserializeAws_json1_1WebACLSummary(output.Summary, context);
    }
    return contents;
};
const deserializeAws_json1_1DefaultAction = (output, context) => {
    let contents = {
        __type: "DefaultAction",
        Allow: undefined,
        Block: undefined
    };
    if (output.Allow !== undefined && output.Allow !== null) {
        contents.Allow = deserializeAws_json1_1AllowAction(output.Allow, context);
    }
    if (output.Block !== undefined && output.Block !== null) {
        contents.Block = deserializeAws_json1_1BlockAction(output.Block, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteIPSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteIPSetResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteLoggingConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DeleteLoggingConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteRegexPatternSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteRegexPatternSetResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteRuleGroupResponse = (output, context) => {
    let contents = {
        __type: "DeleteRuleGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteWebACLResponse = (output, context) => {
    let contents = {
        __type: "DeleteWebACLResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeManagedRuleGroupResponse = (output, context) => {
    let contents = {
        __type: "DescribeManagedRuleGroupResponse",
        Capacity: undefined,
        Rules: undefined
    };
    if (output.Capacity !== undefined && output.Capacity !== null) {
        contents.Capacity = output.Capacity;
    }
    if (output.Rules !== undefined && output.Rules !== null) {
        contents.Rules = deserializeAws_json1_1RuleSummaries(output.Rules, context);
    }
    return contents;
};
const deserializeAws_json1_1DisassociateWebACLResponse = (output, context) => {
    let contents = {
        __type: "DisassociateWebACLResponse"
    };
    return contents;
};
const deserializeAws_json1_1ExcludedRule = (output, context) => {
    let contents = {
        __type: "ExcludedRule",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1ExcludedRules = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExcludedRule(entry, context));
};
const deserializeAws_json1_1FieldToMatch = (output, context) => {
    let contents = {
        __type: "FieldToMatch",
        AllQueryArguments: undefined,
        Body: undefined,
        Method: undefined,
        QueryString: undefined,
        SingleHeader: undefined,
        SingleQueryArgument: undefined,
        UriPath: undefined
    };
    if (output.AllQueryArguments !== undefined &&
        output.AllQueryArguments !== null) {
        contents.AllQueryArguments = deserializeAws_json1_1AllQueryArguments(output.AllQueryArguments, context);
    }
    if (output.Body !== undefined && output.Body !== null) {
        contents.Body = deserializeAws_json1_1Body(output.Body, context);
    }
    if (output.Method !== undefined && output.Method !== null) {
        contents.Method = deserializeAws_json1_1Method(output.Method, context);
    }
    if (output.QueryString !== undefined && output.QueryString !== null) {
        contents.QueryString = deserializeAws_json1_1QueryString(output.QueryString, context);
    }
    if (output.SingleHeader !== undefined && output.SingleHeader !== null) {
        contents.SingleHeader = deserializeAws_json1_1SingleHeader(output.SingleHeader, context);
    }
    if (output.SingleQueryArgument !== undefined &&
        output.SingleQueryArgument !== null) {
        contents.SingleQueryArgument = deserializeAws_json1_1SingleQueryArgument(output.SingleQueryArgument, context);
    }
    if (output.UriPath !== undefined && output.UriPath !== null) {
        contents.UriPath = deserializeAws_json1_1UriPath(output.UriPath, context);
    }
    return contents;
};
const deserializeAws_json1_1GeoMatchStatement = (output, context) => {
    let contents = {
        __type: "GeoMatchStatement",
        CountryCodes: undefined
    };
    if (output.CountryCodes !== undefined && output.CountryCodes !== null) {
        contents.CountryCodes = deserializeAws_json1_1CountryCodes(output.CountryCodes, context);
    }
    return contents;
};
const deserializeAws_json1_1GetIPSetResponse = (output, context) => {
    let contents = {
        __type: "GetIPSetResponse",
        IPSet: undefined,
        LockToken: undefined
    };
    if (output.IPSet !== undefined && output.IPSet !== null) {
        contents.IPSet = deserializeAws_json1_1IPSet(output.IPSet, context);
    }
    if (output.LockToken !== undefined && output.LockToken !== null) {
        contents.LockToken = output.LockToken;
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
const deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse = (output, context) => {
    let contents = {
        __type: "GetRateBasedStatementManagedKeysResponse",
        ManagedKeysIPV4: undefined,
        ManagedKeysIPV6: undefined
    };
    if (output.ManagedKeysIPV4 !== undefined && output.ManagedKeysIPV4 !== null) {
        contents.ManagedKeysIPV4 = deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(output.ManagedKeysIPV4, context);
    }
    if (output.ManagedKeysIPV6 !== undefined && output.ManagedKeysIPV6 !== null) {
        contents.ManagedKeysIPV6 = deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(output.ManagedKeysIPV6, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRegexPatternSetResponse = (output, context) => {
    let contents = {
        __type: "GetRegexPatternSetResponse",
        LockToken: undefined,
        RegexPatternSet: undefined
    };
    if (output.LockToken !== undefined && output.LockToken !== null) {
        contents.LockToken = output.LockToken;
    }
    if (output.RegexPatternSet !== undefined && output.RegexPatternSet !== null) {
        contents.RegexPatternSet = deserializeAws_json1_1RegexPatternSet(output.RegexPatternSet, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRuleGroupResponse = (output, context) => {
    let contents = {
        __type: "GetRuleGroupResponse",
        LockToken: undefined,
        RuleGroup: undefined
    };
    if (output.LockToken !== undefined && output.LockToken !== null) {
        contents.LockToken = output.LockToken;
    }
    if (output.RuleGroup !== undefined && output.RuleGroup !== null) {
        contents.RuleGroup = deserializeAws_json1_1RuleGroup(output.RuleGroup, context);
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
const deserializeAws_json1_1GetWebACLForResourceResponse = (output, context) => {
    let contents = {
        __type: "GetWebACLForResourceResponse",
        WebACL: undefined
    };
    if (output.WebACL !== undefined && output.WebACL !== null) {
        contents.WebACL = deserializeAws_json1_1WebACL(output.WebACL, context);
    }
    return contents;
};
const deserializeAws_json1_1GetWebACLResponse = (output, context) => {
    let contents = {
        __type: "GetWebACLResponse",
        LockToken: undefined,
        WebACL: undefined
    };
    if (output.LockToken !== undefined && output.LockToken !== null) {
        contents.LockToken = output.LockToken;
    }
    if (output.WebACL !== undefined && output.WebACL !== null) {
        contents.WebACL = deserializeAws_json1_1WebACL(output.WebACL, context);
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
const deserializeAws_json1_1IPAddresses = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1IPSet = (output, context) => {
    let contents = {
        __type: "IPSet",
        ARN: undefined,
        Addresses: undefined,
        Description: undefined,
        IPAddressVersion: undefined,
        Id: undefined,
        Name: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Addresses !== undefined && output.Addresses !== null) {
        contents.Addresses = deserializeAws_json1_1IPAddresses(output.Addresses, context);
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.IPAddressVersion !== undefined &&
        output.IPAddressVersion !== null) {
        contents.IPAddressVersion = output.IPAddressVersion;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1IPSetReferenceStatement = (output, context) => {
    let contents = {
        __type: "IPSetReferenceStatement",
        ARN: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    return contents;
};
const deserializeAws_json1_1IPSetSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IPSetSummary(entry, context));
};
const deserializeAws_json1_1IPSetSummary = (output, context) => {
    let contents = {
        __type: "IPSetSummary",
        ARN: undefined,
        Description: undefined,
        Id: undefined,
        LockToken: undefined,
        Name: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.LockToken !== undefined && output.LockToken !== null) {
        contents.LockToken = output.LockToken;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse = (output, context) => {
    let contents = {
        __type: "ListAvailableManagedRuleGroupsResponse",
        ManagedRuleGroups: undefined,
        NextMarker: undefined
    };
    if (output.ManagedRuleGroups !== undefined &&
        output.ManagedRuleGroups !== null) {
        contents.ManagedRuleGroups = deserializeAws_json1_1ManagedRuleGroupSummaries(output.ManagedRuleGroups, context);
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
const deserializeAws_json1_1ManagedRuleGroupStatement = (output, context) => {
    let contents = {
        __type: "ManagedRuleGroupStatement",
        ExcludedRules: undefined,
        Name: undefined,
        VendorName: undefined
    };
    if (output.ExcludedRules !== undefined && output.ExcludedRules !== null) {
        contents.ExcludedRules = deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.VendorName !== undefined && output.VendorName !== null) {
        contents.VendorName = output.VendorName;
    }
    return contents;
};
const deserializeAws_json1_1ManagedRuleGroupSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ManagedRuleGroupSummary(entry, context));
};
const deserializeAws_json1_1ManagedRuleGroupSummary = (output, context) => {
    let contents = {
        __type: "ManagedRuleGroupSummary",
        Description: undefined,
        Name: undefined,
        VendorName: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.VendorName !== undefined && output.VendorName !== null) {
        contents.VendorName = output.VendorName;
    }
    return contents;
};
const deserializeAws_json1_1Method = (output, context) => {
    let contents = {
        __type: "Method"
    };
    return contents;
};
const deserializeAws_json1_1NoneAction = (output, context) => {
    let contents = {
        __type: "NoneAction"
    };
    return contents;
};
const deserializeAws_json1_1NotStatement = (output, context) => {
    let contents = {
        __type: "NotStatement",
        Statement: undefined
    };
    if (output.Statement !== undefined && output.Statement !== null) {
        contents.Statement = deserializeAws_json1_1Statement(output.Statement, context);
    }
    return contents;
};
const deserializeAws_json1_1OrStatement = (output, context) => {
    let contents = {
        __type: "OrStatement",
        Statements: undefined
    };
    if (output.Statements !== undefined && output.Statements !== null) {
        contents.Statements = deserializeAws_json1_1Statements(output.Statements, context);
    }
    return contents;
};
const deserializeAws_json1_1OverrideAction = (output, context) => {
    let contents = {
        __type: "OverrideAction",
        Count: undefined,
        None: undefined
    };
    if (output.Count !== undefined && output.Count !== null) {
        contents.Count = deserializeAws_json1_1CountAction(output.Count, context);
    }
    if (output.None !== undefined && output.None !== null) {
        contents.None = deserializeAws_json1_1NoneAction(output.None, context);
    }
    return contents;
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
const deserializeAws_json1_1QueryString = (output, context) => {
    let contents = {
        __type: "QueryString"
    };
    return contents;
};
const deserializeAws_json1_1RateBasedStatement = (output, context) => {
    let contents = {
        __type: "RateBasedStatement",
        AggregateKeyType: undefined,
        Limit: undefined,
        ScopeDownStatement: undefined
    };
    if (output.AggregateKeyType !== undefined &&
        output.AggregateKeyType !== null) {
        contents.AggregateKeyType = output.AggregateKeyType;
    }
    if (output.Limit !== undefined && output.Limit !== null) {
        contents.Limit = output.Limit;
    }
    if (output.ScopeDownStatement !== undefined &&
        output.ScopeDownStatement !== null) {
        contents.ScopeDownStatement = deserializeAws_json1_1Statement(output.ScopeDownStatement, context);
    }
    return contents;
};
const deserializeAws_json1_1RateBasedStatementManagedKeysIPSet = (output, context) => {
    let contents = {
        __type: "RateBasedStatementManagedKeysIPSet",
        Addresses: undefined,
        IPAddressVersion: undefined
    };
    if (output.Addresses !== undefined && output.Addresses !== null) {
        contents.Addresses = deserializeAws_json1_1IPAddresses(output.Addresses, context);
    }
    if (output.IPAddressVersion !== undefined &&
        output.IPAddressVersion !== null) {
        contents.IPAddressVersion = output.IPAddressVersion;
    }
    return contents;
};
const deserializeAws_json1_1RedactedFields = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FieldToMatch(entry, context));
};
const deserializeAws_json1_1Regex = (output, context) => {
    let contents = {
        __type: "Regex",
        RegexString: undefined
    };
    if (output.RegexString !== undefined && output.RegexString !== null) {
        contents.RegexString = output.RegexString;
    }
    return contents;
};
const deserializeAws_json1_1RegexPatternSet = (output, context) => {
    let contents = {
        __type: "RegexPatternSet",
        ARN: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined,
        RegularExpressionList: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RegularExpressionList !== undefined &&
        output.RegularExpressionList !== null) {
        contents.RegularExpressionList = deserializeAws_json1_1RegularExpressionList(output.RegularExpressionList, context);
    }
    return contents;
};
const deserializeAws_json1_1RegexPatternSetReferenceStatement = (output, context) => {
    let contents = {
        __type: "RegexPatternSetReferenceStatement",
        ARN: undefined,
        FieldToMatch: undefined,
        TextTransformations: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
        contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context);
    }
    if (output.TextTransformations !== undefined &&
        output.TextTransformations !== null) {
        contents.TextTransformations = deserializeAws_json1_1TextTransformations(output.TextTransformations, context);
    }
    return contents;
};
const deserializeAws_json1_1RegexPatternSetSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RegexPatternSetSummary(entry, context));
};
const deserializeAws_json1_1RegexPatternSetSummary = (output, context) => {
    let contents = {
        __type: "RegexPatternSetSummary",
        ARN: undefined,
        Description: undefined,
        Id: undefined,
        LockToken: undefined,
        Name: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.LockToken !== undefined && output.LockToken !== null) {
        contents.LockToken = output.LockToken;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1RegularExpressionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Regex(entry, context));
};
const deserializeAws_json1_1ResourceArns = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Rule = (output, context) => {
    let contents = {
        __type: "Rule",
        Action: undefined,
        Name: undefined,
        OverrideAction: undefined,
        Priority: undefined,
        Statement: undefined,
        VisibilityConfig: undefined
    };
    if (output.Action !== undefined && output.Action !== null) {
        contents.Action = deserializeAws_json1_1RuleAction(output.Action, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OverrideAction !== undefined && output.OverrideAction !== null) {
        contents.OverrideAction = deserializeAws_json1_1OverrideAction(output.OverrideAction, context);
    }
    if (output.Priority !== undefined && output.Priority !== null) {
        contents.Priority = output.Priority;
    }
    if (output.Statement !== undefined && output.Statement !== null) {
        contents.Statement = deserializeAws_json1_1Statement(output.Statement, context);
    }
    if (output.VisibilityConfig !== undefined &&
        output.VisibilityConfig !== null) {
        contents.VisibilityConfig = deserializeAws_json1_1VisibilityConfig(output.VisibilityConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1RuleAction = (output, context) => {
    let contents = {
        __type: "RuleAction",
        Allow: undefined,
        Block: undefined,
        Count: undefined
    };
    if (output.Allow !== undefined && output.Allow !== null) {
        contents.Allow = deserializeAws_json1_1AllowAction(output.Allow, context);
    }
    if (output.Block !== undefined && output.Block !== null) {
        contents.Block = deserializeAws_json1_1BlockAction(output.Block, context);
    }
    if (output.Count !== undefined && output.Count !== null) {
        contents.Count = deserializeAws_json1_1CountAction(output.Count, context);
    }
    return contents;
};
const deserializeAws_json1_1RuleGroup = (output, context) => {
    let contents = {
        __type: "RuleGroup",
        ARN: undefined,
        Capacity: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined,
        Rules: undefined,
        VisibilityConfig: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Capacity !== undefined && output.Capacity !== null) {
        contents.Capacity = output.Capacity;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Rules !== undefined && output.Rules !== null) {
        contents.Rules = deserializeAws_json1_1Rules(output.Rules, context);
    }
    if (output.VisibilityConfig !== undefined &&
        output.VisibilityConfig !== null) {
        contents.VisibilityConfig = deserializeAws_json1_1VisibilityConfig(output.VisibilityConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1RuleGroupReferenceStatement = (output, context) => {
    let contents = {
        __type: "RuleGroupReferenceStatement",
        ARN: undefined,
        ExcludedRules: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.ExcludedRules !== undefined && output.ExcludedRules !== null) {
        contents.ExcludedRules = deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context);
    }
    return contents;
};
const deserializeAws_json1_1RuleGroupSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RuleGroupSummary(entry, context));
};
const deserializeAws_json1_1RuleGroupSummary = (output, context) => {
    let contents = {
        __type: "RuleGroupSummary",
        ARN: undefined,
        Description: undefined,
        Id: undefined,
        LockToken: undefined,
        Name: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.LockToken !== undefined && output.LockToken !== null) {
        contents.LockToken = output.LockToken;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1RuleSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RuleSummary(entry, context));
};
const deserializeAws_json1_1RuleSummary = (output, context) => {
    let contents = {
        __type: "RuleSummary",
        Action: undefined,
        Name: undefined
    };
    if (output.Action !== undefined && output.Action !== null) {
        contents.Action = deserializeAws_json1_1RuleAction(output.Action, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1Rules = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Rule(entry, context));
};
const deserializeAws_json1_1SampledHTTPRequest = (output, context) => {
    let contents = {
        __type: "SampledHTTPRequest",
        Action: undefined,
        Request: undefined,
        RuleNameWithinRuleGroup: undefined,
        Timestamp: undefined,
        Weight: undefined
    };
    if (output.Action !== undefined && output.Action !== null) {
        contents.Action = output.Action;
    }
    if (output.Request !== undefined && output.Request !== null) {
        contents.Request = deserializeAws_json1_1HTTPRequest(output.Request, context);
    }
    if (output.RuleNameWithinRuleGroup !== undefined &&
        output.RuleNameWithinRuleGroup !== null) {
        contents.RuleNameWithinRuleGroup = output.RuleNameWithinRuleGroup;
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
const deserializeAws_json1_1SingleHeader = (output, context) => {
    let contents = {
        __type: "SingleHeader",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1SingleQueryArgument = (output, context) => {
    let contents = {
        __type: "SingleQueryArgument",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1SizeConstraintStatement = (output, context) => {
    let contents = {
        __type: "SizeConstraintStatement",
        ComparisonOperator: undefined,
        FieldToMatch: undefined,
        Size: undefined,
        TextTransformations: undefined
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
    if (output.TextTransformations !== undefined &&
        output.TextTransformations !== null) {
        contents.TextTransformations = deserializeAws_json1_1TextTransformations(output.TextTransformations, context);
    }
    return contents;
};
const deserializeAws_json1_1SqliMatchStatement = (output, context) => {
    let contents = {
        __type: "SqliMatchStatement",
        FieldToMatch: undefined,
        TextTransformations: undefined
    };
    if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
        contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context);
    }
    if (output.TextTransformations !== undefined &&
        output.TextTransformations !== null) {
        contents.TextTransformations = deserializeAws_json1_1TextTransformations(output.TextTransformations, context);
    }
    return contents;
};
const deserializeAws_json1_1Statement = (output, context) => {
    let contents = {
        __type: "Statement",
        AndStatement: undefined,
        ByteMatchStatement: undefined,
        GeoMatchStatement: undefined,
        IPSetReferenceStatement: undefined,
        ManagedRuleGroupStatement: undefined,
        NotStatement: undefined,
        OrStatement: undefined,
        RateBasedStatement: undefined,
        RegexPatternSetReferenceStatement: undefined,
        RuleGroupReferenceStatement: undefined,
        SizeConstraintStatement: undefined,
        SqliMatchStatement: undefined,
        XssMatchStatement: undefined
    };
    if (output.AndStatement !== undefined && output.AndStatement !== null) {
        contents.AndStatement = deserializeAws_json1_1AndStatement(output.AndStatement, context);
    }
    if (output.ByteMatchStatement !== undefined &&
        output.ByteMatchStatement !== null) {
        contents.ByteMatchStatement = deserializeAws_json1_1ByteMatchStatement(output.ByteMatchStatement, context);
    }
    if (output.GeoMatchStatement !== undefined &&
        output.GeoMatchStatement !== null) {
        contents.GeoMatchStatement = deserializeAws_json1_1GeoMatchStatement(output.GeoMatchStatement, context);
    }
    if (output.IPSetReferenceStatement !== undefined &&
        output.IPSetReferenceStatement !== null) {
        contents.IPSetReferenceStatement = deserializeAws_json1_1IPSetReferenceStatement(output.IPSetReferenceStatement, context);
    }
    if (output.ManagedRuleGroupStatement !== undefined &&
        output.ManagedRuleGroupStatement !== null) {
        contents.ManagedRuleGroupStatement = deserializeAws_json1_1ManagedRuleGroupStatement(output.ManagedRuleGroupStatement, context);
    }
    if (output.NotStatement !== undefined && output.NotStatement !== null) {
        contents.NotStatement = deserializeAws_json1_1NotStatement(output.NotStatement, context);
    }
    if (output.OrStatement !== undefined && output.OrStatement !== null) {
        contents.OrStatement = deserializeAws_json1_1OrStatement(output.OrStatement, context);
    }
    if (output.RateBasedStatement !== undefined &&
        output.RateBasedStatement !== null) {
        contents.RateBasedStatement = deserializeAws_json1_1RateBasedStatement(output.RateBasedStatement, context);
    }
    if (output.RegexPatternSetReferenceStatement !== undefined &&
        output.RegexPatternSetReferenceStatement !== null) {
        contents.RegexPatternSetReferenceStatement = deserializeAws_json1_1RegexPatternSetReferenceStatement(output.RegexPatternSetReferenceStatement, context);
    }
    if (output.RuleGroupReferenceStatement !== undefined &&
        output.RuleGroupReferenceStatement !== null) {
        contents.RuleGroupReferenceStatement = deserializeAws_json1_1RuleGroupReferenceStatement(output.RuleGroupReferenceStatement, context);
    }
    if (output.SizeConstraintStatement !== undefined &&
        output.SizeConstraintStatement !== null) {
        contents.SizeConstraintStatement = deserializeAws_json1_1SizeConstraintStatement(output.SizeConstraintStatement, context);
    }
    if (output.SqliMatchStatement !== undefined &&
        output.SqliMatchStatement !== null) {
        contents.SqliMatchStatement = deserializeAws_json1_1SqliMatchStatement(output.SqliMatchStatement, context);
    }
    if (output.XssMatchStatement !== undefined &&
        output.XssMatchStatement !== null) {
        contents.XssMatchStatement = deserializeAws_json1_1XssMatchStatement(output.XssMatchStatement, context);
    }
    return contents;
};
const deserializeAws_json1_1Statements = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Statement(entry, context));
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
const deserializeAws_json1_1TextTransformation = (output, context) => {
    let contents = {
        __type: "TextTransformation",
        Priority: undefined,
        Type: undefined
    };
    if (output.Priority !== undefined && output.Priority !== null) {
        contents.Priority = output.Priority;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1TextTransformations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TextTransformation(entry, context));
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
const deserializeAws_json1_1UpdateIPSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateIPSetResponse",
        NextLockToken: undefined
    };
    if (output.NextLockToken !== undefined && output.NextLockToken !== null) {
        contents.NextLockToken = output.NextLockToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateRegexPatternSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateRegexPatternSetResponse",
        NextLockToken: undefined
    };
    if (output.NextLockToken !== undefined && output.NextLockToken !== null) {
        contents.NextLockToken = output.NextLockToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateRuleGroupResponse = (output, context) => {
    let contents = {
        __type: "UpdateRuleGroupResponse",
        NextLockToken: undefined
    };
    if (output.NextLockToken !== undefined && output.NextLockToken !== null) {
        contents.NextLockToken = output.NextLockToken;
    }
    return contents;
};
const deserializeAws_json1_1UpdateWebACLResponse = (output, context) => {
    let contents = {
        __type: "UpdateWebACLResponse",
        NextLockToken: undefined
    };
    if (output.NextLockToken !== undefined && output.NextLockToken !== null) {
        contents.NextLockToken = output.NextLockToken;
    }
    return contents;
};
const deserializeAws_json1_1UriPath = (output, context) => {
    let contents = {
        __type: "UriPath"
    };
    return contents;
};
const deserializeAws_json1_1VisibilityConfig = (output, context) => {
    let contents = {
        __type: "VisibilityConfig",
        CloudWatchMetricsEnabled: undefined,
        MetricName: undefined,
        SampledRequestsEnabled: undefined
    };
    if (output.CloudWatchMetricsEnabled !== undefined &&
        output.CloudWatchMetricsEnabled !== null) {
        contents.CloudWatchMetricsEnabled = output.CloudWatchMetricsEnabled;
    }
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.SampledRequestsEnabled !== undefined &&
        output.SampledRequestsEnabled !== null) {
        contents.SampledRequestsEnabled = output.SampledRequestsEnabled;
    }
    return contents;
};
const deserializeAws_json1_1WAFAssociatedItemException = (output, context) => {
    let contents = {
        __type: "WAFAssociatedItemException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1WAFDuplicateItemException = (output, context) => {
    let contents = {
        __type: "WAFDuplicateItemException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1WAFInternalErrorException = (output, context) => {
    let contents = {
        __type: "WAFInternalErrorException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1WAFInvalidParameterException = (output, context) => {
    let contents = {
        __type: "WAFInvalidParameterException",
        Field: undefined,
        Parameter: undefined,
        Reason: undefined,
        message: undefined
    };
    if (output.Field !== undefined && output.Field !== null) {
        contents.Field = output.Field;
    }
    if (output.Parameter !== undefined && output.Parameter !== null) {
        contents.Parameter = output.Parameter;
    }
    if (output.Reason !== undefined && output.Reason !== null) {
        contents.Reason = output.Reason;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1WAFInvalidResourceException = (output, context) => {
    let contents = {
        __type: "WAFInvalidResourceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1WAFLimitsExceededException = (output, context) => {
    let contents = {
        __type: "WAFLimitsExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1WAFNonexistentItemException = (output, context) => {
    let contents = {
        __type: "WAFNonexistentItemException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1WAFOptimisticLockException = (output, context) => {
    let contents = {
        __type: "WAFOptimisticLockException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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
const deserializeAws_json1_1WAFTagOperationException = (output, context) => {
    let contents = {
        __type: "WAFTagOperationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1WAFTagOperationInternalErrorException = (output, context) => {
    let contents = {
        __type: "WAFTagOperationInternalErrorException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1WAFUnavailableEntityException = (output, context) => {
    let contents = {
        __type: "WAFUnavailableEntityException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1WebACL = (output, context) => {
    let contents = {
        __type: "WebACL",
        ARN: undefined,
        Capacity: undefined,
        DefaultAction: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined,
        Rules: undefined,
        VisibilityConfig: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Capacity !== undefined && output.Capacity !== null) {
        contents.Capacity = output.Capacity;
    }
    if (output.DefaultAction !== undefined && output.DefaultAction !== null) {
        contents.DefaultAction = deserializeAws_json1_1DefaultAction(output.DefaultAction, context);
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Rules !== undefined && output.Rules !== null) {
        contents.Rules = deserializeAws_json1_1Rules(output.Rules, context);
    }
    if (output.VisibilityConfig !== undefined &&
        output.VisibilityConfig !== null) {
        contents.VisibilityConfig = deserializeAws_json1_1VisibilityConfig(output.VisibilityConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1WebACLSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WebACLSummary(entry, context));
};
const deserializeAws_json1_1WebACLSummary = (output, context) => {
    let contents = {
        __type: "WebACLSummary",
        ARN: undefined,
        Description: undefined,
        Id: undefined,
        LockToken: undefined,
        Name: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.LockToken !== undefined && output.LockToken !== null) {
        contents.LockToken = output.LockToken;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1XssMatchStatement = (output, context) => {
    let contents = {
        __type: "XssMatchStatement",
        FieldToMatch: undefined,
        TextTransformations: undefined
    };
    if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
        contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context);
    }
    if (output.TextTransformations !== undefined &&
        output.TextTransformations !== null) {
        contents.TextTransformations = deserializeAws_json1_1TextTransformations(output.TextTransformations, context);
    }
    return contents;
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