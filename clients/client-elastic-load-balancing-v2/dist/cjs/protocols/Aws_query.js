"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryAddListenerCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddListenerCertificatesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddListenerCertificates", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddListenerCertificatesCommand = serializeAws_queryAddListenerCertificatesCommand;
async function serializeAws_queryAddTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddTagsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddTags", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddTagsCommand = serializeAws_queryAddTagsCommand;
async function serializeAws_queryCreateListenerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateListenerInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateListener", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateListenerCommand = serializeAws_queryCreateListenerCommand;
async function serializeAws_queryCreateLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateLoadBalancerInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateLoadBalancer", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateLoadBalancerCommand = serializeAws_queryCreateLoadBalancerCommand;
async function serializeAws_queryCreateRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateRuleInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateRule", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateRuleCommand = serializeAws_queryCreateRuleCommand;
async function serializeAws_queryCreateTargetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateTargetGroupInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateTargetGroup", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateTargetGroupCommand = serializeAws_queryCreateTargetGroupCommand;
async function serializeAws_queryDeleteListenerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteListenerInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteListener", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteListenerCommand = serializeAws_queryDeleteListenerCommand;
async function serializeAws_queryDeleteLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteLoadBalancerInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteLoadBalancer", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteLoadBalancerCommand = serializeAws_queryDeleteLoadBalancerCommand;
async function serializeAws_queryDeleteRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteRuleInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteRule", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteRuleCommand = serializeAws_queryDeleteRuleCommand;
async function serializeAws_queryDeleteTargetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteTargetGroupInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteTargetGroup", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteTargetGroupCommand = serializeAws_queryDeleteTargetGroupCommand;
async function serializeAws_queryDeregisterTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeregisterTargetsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeregisterTargets", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeregisterTargetsCommand = serializeAws_queryDeregisterTargetsCommand;
async function serializeAws_queryDescribeAccountLimitsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAccountLimitsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAccountLimits", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAccountLimitsCommand = serializeAws_queryDescribeAccountLimitsCommand;
async function serializeAws_queryDescribeListenerCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeListenerCertificatesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeListenerCertificates", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeListenerCertificatesCommand = serializeAws_queryDescribeListenerCertificatesCommand;
async function serializeAws_queryDescribeListenersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeListenersInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeListeners", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeListenersCommand = serializeAws_queryDescribeListenersCommand;
async function serializeAws_queryDescribeLoadBalancerAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeLoadBalancerAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeLoadBalancerAttributes", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLoadBalancerAttributesCommand = serializeAws_queryDescribeLoadBalancerAttributesCommand;
async function serializeAws_queryDescribeLoadBalancersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeLoadBalancersInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeLoadBalancers", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeLoadBalancersCommand = serializeAws_queryDescribeLoadBalancersCommand;
async function serializeAws_queryDescribeRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeRulesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeRules", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeRulesCommand = serializeAws_queryDescribeRulesCommand;
async function serializeAws_queryDescribeSSLPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeSSLPoliciesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeSSLPolicies", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeSSLPoliciesCommand = serializeAws_queryDescribeSSLPoliciesCommand;
async function serializeAws_queryDescribeTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeTagsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeTags", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeTagsCommand = serializeAws_queryDescribeTagsCommand;
async function serializeAws_queryDescribeTargetGroupAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeTargetGroupAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeTargetGroupAttributes", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeTargetGroupAttributesCommand = serializeAws_queryDescribeTargetGroupAttributesCommand;
async function serializeAws_queryDescribeTargetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeTargetGroupsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeTargetGroups", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeTargetGroupsCommand = serializeAws_queryDescribeTargetGroupsCommand;
async function serializeAws_queryDescribeTargetHealthCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeTargetHealthInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeTargetHealth", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeTargetHealthCommand = serializeAws_queryDescribeTargetHealthCommand;
async function serializeAws_queryModifyListenerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyListenerInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyListener", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyListenerCommand = serializeAws_queryModifyListenerCommand;
async function serializeAws_queryModifyLoadBalancerAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyLoadBalancerAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyLoadBalancerAttributes", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyLoadBalancerAttributesCommand = serializeAws_queryModifyLoadBalancerAttributesCommand;
async function serializeAws_queryModifyRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyRuleInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyRule", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyRuleCommand = serializeAws_queryModifyRuleCommand;
async function serializeAws_queryModifyTargetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyTargetGroupInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyTargetGroup", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyTargetGroupCommand = serializeAws_queryModifyTargetGroupCommand;
async function serializeAws_queryModifyTargetGroupAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryModifyTargetGroupAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ModifyTargetGroupAttributes", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryModifyTargetGroupAttributesCommand = serializeAws_queryModifyTargetGroupAttributesCommand;
async function serializeAws_queryRegisterTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRegisterTargetsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RegisterTargets", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRegisterTargetsCommand = serializeAws_queryRegisterTargetsCommand;
async function serializeAws_queryRemoveListenerCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveListenerCertificatesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveListenerCertificates", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveListenerCertificatesCommand = serializeAws_queryRemoveListenerCertificatesCommand;
async function serializeAws_queryRemoveTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveTagsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveTags", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveTagsCommand = serializeAws_queryRemoveTagsCommand;
async function serializeAws_querySetIpAddressTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetIpAddressTypeInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetIpAddressType", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetIpAddressTypeCommand = serializeAws_querySetIpAddressTypeCommand;
async function serializeAws_querySetRulePrioritiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetRulePrioritiesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetRulePriorities", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetRulePrioritiesCommand = serializeAws_querySetRulePrioritiesCommand;
async function serializeAws_querySetSecurityGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetSecurityGroupsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetSecurityGroups", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetSecurityGroupsCommand = serializeAws_querySetSecurityGroupsCommand;
async function serializeAws_querySetSubnetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetSubnetsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetSubnets", Version: "2015-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetSubnetsCommand = serializeAws_querySetSubnetsCommand;
async function deserializeAws_queryAddListenerCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAddListenerCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAddListenerCertificatesOutput(data.AddListenerCertificatesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddListenerCertificatesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAddListenerCertificatesCommand = deserializeAws_queryAddListenerCertificatesCommand;
async function deserializeAws_queryAddListenerCertificatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateNotFoundException":
        case "com.amazon.elb.version_2015_12_01#CertificateNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCertificatesException":
        case "com.amazon.elb.version_2015_12_01#TooManyCertificatesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryAddTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAddTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAddTagsOutput(data.AddTagsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryAddTagsCommand = deserializeAws_queryAddTagsCommand;
async function deserializeAws_queryAddTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateTagKeysException":
        case "com.amazon.elb.version_2015_12_01#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.elb.version_2015_12_01#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateListenerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateListenerOutput(data.CreateListenerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateListenerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateListenerCommand = deserializeAws_queryCreateListenerCommand;
async function deserializeAws_queryCreateListenerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateNotFoundException":
        case "com.amazon.elb.version_2015_12_01#CertificateNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateListenerException":
        case "com.amazon.elb.version_2015_12_01#DuplicateListenerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleProtocolsException":
        case "com.amazon.elb.version_2015_12_01#IncompatibleProtocolsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLoadBalancerActionException":
        case "com.amazon.elb.version_2015_12_01#InvalidLoadBalancerActionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SSLPolicyNotFoundException":
        case "com.amazon.elb.version_2015_12_01#SSLPolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupAssociationLimitException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupAssociationLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyActionsException":
        case "com.amazon.elb.version_2015_12_01#TooManyActionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCertificatesException":
        case "com.amazon.elb.version_2015_12_01#TooManyCertificatesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyListenersException":
        case "com.amazon.elb.version_2015_12_01#TooManyListenersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyListenersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRegistrationsForTargetIdException":
        case "com.amazon.elb.version_2015_12_01#TooManyRegistrationsForTargetIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTargetsException":
        case "com.amazon.elb.version_2015_12_01#TooManyTargetsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUniqueTargetGroupsPerLoadBalancerException":
        case "com.amazon.elb.version_2015_12_01#TooManyUniqueTargetGroupsPerLoadBalancerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedProtocolException":
        case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateLoadBalancerOutput(data.CreateLoadBalancerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLoadBalancerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateLoadBalancerCommand = deserializeAws_queryCreateLoadBalancerCommand;
async function deserializeAws_queryCreateLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AllocationIdNotFoundException":
        case "com.amazon.elb.version_2015_12_01#AllocationIdNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAllocationIdNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AvailabilityZoneNotSupportedException":
        case "com.amazon.elb.version_2015_12_01#AvailabilityZoneNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateLoadBalancerNameException":
        case "com.amazon.elb.version_2015_12_01#DuplicateLoadBalancerNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.elb.version_2015_12_01#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSchemeException":
        case "com.amazon.elb.version_2015_12_01#InvalidSchemeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSchemeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecurityGroupException":
        case "com.amazon.elb.version_2015_12_01#InvalidSecurityGroupException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnetException":
        case "com.amazon.elb.version_2015_12_01#InvalidSubnetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazon.elb.version_2015_12_01#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetNotFoundException":
        case "com.amazon.elb.version_2015_12_01#SubnetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyLoadBalancersException":
        case "com.amazon.elb.version_2015_12_01#TooManyLoadBalancersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyLoadBalancersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.elb.version_2015_12_01#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateRuleOutput(data.CreateRuleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRuleOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateRuleCommand = deserializeAws_queryCreateRuleCommand;
async function deserializeAws_queryCreateRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IncompatibleProtocolsException":
        case "com.amazon.elb.version_2015_12_01#IncompatibleProtocolsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLoadBalancerActionException":
        case "com.amazon.elb.version_2015_12_01#InvalidLoadBalancerActionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PriorityInUseException":
        case "com.amazon.elb.version_2015_12_01#PriorityInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPriorityInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupAssociationLimitException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupAssociationLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyActionsException":
        case "com.amazon.elb.version_2015_12_01#TooManyActionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRegistrationsForTargetIdException":
        case "com.amazon.elb.version_2015_12_01#TooManyRegistrationsForTargetIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRulesException":
        case "com.amazon.elb.version_2015_12_01#TooManyRulesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyRulesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTargetGroupsException":
        case "com.amazon.elb.version_2015_12_01#TooManyTargetGroupsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyTargetGroupsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTargetsException":
        case "com.amazon.elb.version_2015_12_01#TooManyTargetsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUniqueTargetGroupsPerLoadBalancerException":
        case "com.amazon.elb.version_2015_12_01#TooManyUniqueTargetGroupsPerLoadBalancerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedProtocolException":
        case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateTargetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateTargetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateTargetGroupOutput(data.CreateTargetGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTargetGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateTargetGroupCommand = deserializeAws_queryCreateTargetGroupCommand;
async function deserializeAws_queryCreateTargetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateTargetGroupNameException":
        case "com.amazon.elb.version_2015_12_01#DuplicateTargetGroupNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateTargetGroupNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTargetGroupsException":
        case "com.amazon.elb.version_2015_12_01#TooManyTargetGroupsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyTargetGroupsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteListenerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteListenerOutput(data.DeleteListenerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteListenerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteListenerCommand = deserializeAws_queryDeleteListenerCommand;
async function deserializeAws_queryDeleteListenerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteLoadBalancerOutput(data.DeleteLoadBalancerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLoadBalancerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteLoadBalancerCommand = deserializeAws_queryDeleteLoadBalancerCommand;
async function deserializeAws_queryDeleteLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazon.elb.version_2015_12_01#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteRuleOutput(data.DeleteRuleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRuleOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteRuleCommand = deserializeAws_queryDeleteRuleCommand;
async function deserializeAws_queryDeleteRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedException":
        case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleNotFoundException":
        case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteTargetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteTargetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteTargetGroupOutput(data.DeleteTargetGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTargetGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteTargetGroupCommand = deserializeAws_queryDeleteTargetGroupCommand;
async function deserializeAws_queryDeleteTargetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceInUseException":
        case "com.amazon.elb.version_2015_12_01#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeregisterTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeregisterTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeregisterTargetsOutput(data.DeregisterTargetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterTargetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeregisterTargetsCommand = deserializeAws_queryDeregisterTargetsCommand;
async function deserializeAws_queryDeregisterTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTargetException":
        case "com.amazon.elb.version_2015_12_01#InvalidTargetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeAccountLimitsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAccountLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAccountLimitsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAccountLimitsCommand = deserializeAws_queryDescribeAccountLimitsCommand;
async function deserializeAws_queryDescribeAccountLimitsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeListenerCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeListenerCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeListenerCertificatesOutput(data.DescribeListenerCertificatesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeListenerCertificatesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeListenerCertificatesCommand = deserializeAws_queryDescribeListenerCertificatesCommand;
async function deserializeAws_queryDescribeListenerCertificatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeListenersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeListenersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeListenersOutput(data.DescribeListenersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeListenersOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeListenersCommand = deserializeAws_queryDescribeListenersCommand;
async function deserializeAws_queryDescribeListenersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedProtocolException":
        case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeLoadBalancerAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeLoadBalancerAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLoadBalancerAttributesOutput(data.DescribeLoadBalancerAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLoadBalancerAttributesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeLoadBalancerAttributesCommand = deserializeAws_queryDescribeLoadBalancerAttributesCommand;
async function deserializeAws_queryDescribeLoadBalancerAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeLoadBalancersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeLoadBalancersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLoadBalancersOutput(data.DescribeLoadBalancersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLoadBalancersOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeLoadBalancersCommand = deserializeAws_queryDescribeLoadBalancersCommand;
async function deserializeAws_queryDescribeLoadBalancersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeRulesOutput(data.DescribeRulesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRulesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeRulesCommand = deserializeAws_queryDescribeRulesCommand;
async function deserializeAws_queryDescribeRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleNotFoundException":
        case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedProtocolException":
        case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeSSLPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeSSLPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeSSLPoliciesOutput(data.DescribeSSLPoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSSLPoliciesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeSSLPoliciesCommand = deserializeAws_queryDescribeSSLPoliciesCommand;
async function deserializeAws_queryDescribeSSLPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "SSLPolicyNotFoundException":
        case "com.amazon.elb.version_2015_12_01#SSLPolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeTagsOutput(data.DescribeTagsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeTagsCommand = deserializeAws_queryDescribeTagsCommand;
async function deserializeAws_queryDescribeTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleNotFoundException":
        case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeTargetGroupAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeTargetGroupAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeTargetGroupAttributesOutput(data.DescribeTargetGroupAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTargetGroupAttributesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeTargetGroupAttributesCommand = deserializeAws_queryDescribeTargetGroupAttributesCommand;
async function deserializeAws_queryDescribeTargetGroupAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeTargetGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeTargetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeTargetGroupsOutput(data.DescribeTargetGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTargetGroupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeTargetGroupsCommand = deserializeAws_queryDescribeTargetGroupsCommand;
async function deserializeAws_queryDescribeTargetGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeTargetHealthCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeTargetHealthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeTargetHealthOutput(data.DescribeTargetHealthResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTargetHealthOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeTargetHealthCommand = deserializeAws_queryDescribeTargetHealthCommand;
async function deserializeAws_queryDescribeTargetHealthCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HealthUnavailableException":
        case "com.amazon.elb.version_2015_12_01#HealthUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryHealthUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetException":
        case "com.amazon.elb.version_2015_12_01#InvalidTargetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryModifyListenerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyListenerOutput(data.ModifyListenerResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyListenerOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyListenerCommand = deserializeAws_queryModifyListenerCommand;
async function deserializeAws_queryModifyListenerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateNotFoundException":
        case "com.amazon.elb.version_2015_12_01#CertificateNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateListenerException":
        case "com.amazon.elb.version_2015_12_01#DuplicateListenerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncompatibleProtocolsException":
        case "com.amazon.elb.version_2015_12_01#IncompatibleProtocolsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLoadBalancerActionException":
        case "com.amazon.elb.version_2015_12_01#InvalidLoadBalancerActionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SSLPolicyNotFoundException":
        case "com.amazon.elb.version_2015_12_01#SSLPolicyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupAssociationLimitException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupAssociationLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyActionsException":
        case "com.amazon.elb.version_2015_12_01#TooManyActionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyCertificatesException":
        case "com.amazon.elb.version_2015_12_01#TooManyCertificatesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyListenersException":
        case "com.amazon.elb.version_2015_12_01#TooManyListenersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyListenersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRegistrationsForTargetIdException":
        case "com.amazon.elb.version_2015_12_01#TooManyRegistrationsForTargetIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTargetsException":
        case "com.amazon.elb.version_2015_12_01#TooManyTargetsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUniqueTargetGroupsPerLoadBalancerException":
        case "com.amazon.elb.version_2015_12_01#TooManyUniqueTargetGroupsPerLoadBalancerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedProtocolException":
        case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryModifyLoadBalancerAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyLoadBalancerAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyLoadBalancerAttributesOutput(data.ModifyLoadBalancerAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyLoadBalancerAttributesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyLoadBalancerAttributesCommand = deserializeAws_queryModifyLoadBalancerAttributesCommand;
async function deserializeAws_queryModifyLoadBalancerAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryModifyRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyRuleOutput(data.ModifyRuleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyRuleOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyRuleCommand = deserializeAws_queryModifyRuleCommand;
async function deserializeAws_queryModifyRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IncompatibleProtocolsException":
        case "com.amazon.elb.version_2015_12_01#IncompatibleProtocolsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLoadBalancerActionException":
        case "com.amazon.elb.version_2015_12_01#InvalidLoadBalancerActionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleNotFoundException":
        case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupAssociationLimitException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupAssociationLimitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyActionsException":
        case "com.amazon.elb.version_2015_12_01#TooManyActionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRegistrationsForTargetIdException":
        case "com.amazon.elb.version_2015_12_01#TooManyRegistrationsForTargetIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTargetsException":
        case "com.amazon.elb.version_2015_12_01#TooManyTargetsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyUniqueTargetGroupsPerLoadBalancerException":
        case "com.amazon.elb.version_2015_12_01#TooManyUniqueTargetGroupsPerLoadBalancerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedProtocolException":
        case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryModifyTargetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyTargetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyTargetGroupOutput(data.ModifyTargetGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyTargetGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyTargetGroupCommand = deserializeAws_queryModifyTargetGroupCommand;
async function deserializeAws_queryModifyTargetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryModifyTargetGroupAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryModifyTargetGroupAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyTargetGroupAttributesOutput(data.ModifyTargetGroupAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ModifyTargetGroupAttributesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryModifyTargetGroupAttributesCommand = deserializeAws_queryModifyTargetGroupAttributesCommand;
async function deserializeAws_queryModifyTargetGroupAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryRegisterTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRegisterTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRegisterTargetsOutput(data.RegisterTargetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterTargetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRegisterTargetsCommand = deserializeAws_queryRegisterTargetsCommand;
async function deserializeAws_queryRegisterTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTargetException":
        case "com.amazon.elb.version_2015_12_01#InvalidTargetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRegistrationsForTargetIdException":
        case "com.amazon.elb.version_2015_12_01#TooManyRegistrationsForTargetIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTargetsException":
        case "com.amazon.elb.version_2015_12_01#TooManyTargetsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryRemoveListenerCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRemoveListenerCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRemoveListenerCertificatesOutput(data.RemoveListenerCertificatesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveListenerCertificatesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemoveListenerCertificatesCommand = deserializeAws_queryRemoveListenerCertificatesCommand;
async function deserializeAws_queryRemoveListenerCertificatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryRemoveTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRemoveTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRemoveTagsOutput(data.RemoveTagsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemoveTagsCommand = deserializeAws_queryRemoveTagsCommand;
async function deserializeAws_queryRemoveTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleNotFoundException":
        case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetGroupNotFoundException":
        case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.elb.version_2015_12_01#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetIpAddressTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetIpAddressTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIpAddressTypeOutput(data.SetIpAddressTypeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetIpAddressTypeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetIpAddressTypeCommand = deserializeAws_querySetIpAddressTypeCommand;
async function deserializeAws_querySetIpAddressTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnetException":
        case "com.amazon.elb.version_2015_12_01#InvalidSubnetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetRulePrioritiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetRulePrioritiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetRulePrioritiesOutput(data.SetRulePrioritiesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetRulePrioritiesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetRulePrioritiesCommand = deserializeAws_querySetRulePrioritiesCommand;
async function deserializeAws_querySetRulePrioritiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedException":
        case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PriorityInUseException":
        case "com.amazon.elb.version_2015_12_01#PriorityInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPriorityInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleNotFoundException":
        case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetSecurityGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetSecurityGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetSecurityGroupsOutput(data.SetSecurityGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetSecurityGroupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetSecurityGroupsCommand = deserializeAws_querySetSecurityGroupsCommand;
async function deserializeAws_querySetSecurityGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecurityGroupException":
        case "com.amazon.elb.version_2015_12_01#InvalidSecurityGroupException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetSubnetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetSubnetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetSubnetsOutput(data.SetSubnetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetSubnetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetSubnetsCommand = deserializeAws_querySetSubnetsCommand;
async function deserializeAws_querySetSubnetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AllocationIdNotFoundException":
        case "com.amazon.elb.version_2015_12_01#AllocationIdNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAllocationIdNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AvailabilityZoneNotSupportedException":
        case "com.amazon.elb.version_2015_12_01#AvailabilityZoneNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSubnetException":
        case "com.amazon.elb.version_2015_12_01#InvalidSubnetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubnetNotFoundException":
        case "com.amazon.elb.version_2015_12_01#SubnetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_queryAllocationIdNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAllocationIdNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "AllocationIdNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAvailabilityZoneNotSupportedException(body.Error, context);
    const contents = Object.assign({ name: "AvailabilityZoneNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCertificateNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCertificateNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "CertificateNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDuplicateListenerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateListenerException(body.Error, context);
    const contents = Object.assign({ name: "DuplicateListenerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateLoadBalancerNameException(body.Error, context);
    const contents = Object.assign({ name: "DuplicateLoadBalancerNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDuplicateTagKeysExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateTagKeysException(body.Error, context);
    const contents = Object.assign({ name: "DuplicateTagKeysException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDuplicateTargetGroupNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateTargetGroupNameException(body.Error, context);
    const contents = Object.assign({ name: "DuplicateTargetGroupNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryHealthUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHealthUnavailableException(body.Error, context);
    const contents = Object.assign({ name: "HealthUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryIncompatibleProtocolsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIncompatibleProtocolsException(body.Error, context);
    const contents = Object.assign({ name: "IncompatibleProtocolsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidConfigurationRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidConfigurationRequestException(body.Error, context);
    const contents = Object.assign({ name: "InvalidConfigurationRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidLoadBalancerActionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidLoadBalancerActionException(body.Error, context);
    const contents = Object.assign({ name: "InvalidLoadBalancerActionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidSchemeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSchemeException(body.Error, context);
    const contents = Object.assign({ name: "InvalidSchemeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidSecurityGroupExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSecurityGroupException(body.Error, context);
    const contents = Object.assign({ name: "InvalidSecurityGroupException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidSubnetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSubnetException(body.Error, context);
    const contents = Object.assign({ name: "InvalidSubnetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidTargetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTargetException(body.Error, context);
    const contents = Object.assign({ name: "InvalidTargetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryListenerNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryListenerNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "ListenerNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryLoadBalancerNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLoadBalancerNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "LoadBalancerNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryOperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOperationNotPermittedException(body.Error, context);
    const contents = Object.assign({ name: "OperationNotPermittedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryPriorityInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPriorityInUseException(body.Error, context);
    const contents = Object.assign({ name: "PriorityInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceInUseException(body.Error, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryRuleNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryRuleNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "RuleNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySSLPolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySSLPolicyNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "SSLPolicyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySubnetNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubnetNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "SubnetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTargetGroupAssociationLimitExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTargetGroupAssociationLimitException(body.Error, context);
    const contents = Object.assign({ name: "TargetGroupAssociationLimitException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTargetGroupNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTargetGroupNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "TargetGroupNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyActionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyActionsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyActionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyCertificatesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyCertificatesException(body.Error, context);
    const contents = Object.assign({ name: "TooManyCertificatesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyListenersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyListenersException(body.Error, context);
    const contents = Object.assign({ name: "TooManyListenersException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyLoadBalancersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyLoadBalancersException(body.Error, context);
    const contents = Object.assign({ name: "TooManyLoadBalancersException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyRegistrationsForTargetIdException(body.Error, context);
    const contents = Object.assign({ name: "TooManyRegistrationsForTargetIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyRulesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyRulesException(body.Error, context);
    const contents = Object.assign({ name: "TooManyRulesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyTagsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyTargetGroupsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyTargetGroupsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyTargetGroupsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyTargetsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyTargetsException(body.Error, context);
    const contents = Object.assign({ name: "TooManyTargetsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException(body.Error, context);
    const contents = Object.assign({ name: "TooManyUniqueTargetGroupsPerLoadBalancerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryUnsupportedProtocolExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnsupportedProtocolException(body.Error, context);
    const contents = Object.assign({ name: "UnsupportedProtocolException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryAction = (input, context) => {
    const entries = {};
    if (input.AuthenticateCognitoConfig !== undefined) {
        const memberEntries = serializeAws_queryAuthenticateCognitoActionConfig(input.AuthenticateCognitoConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AuthenticateCognitoConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.AuthenticateOidcConfig !== undefined) {
        const memberEntries = serializeAws_queryAuthenticateOidcActionConfig(input.AuthenticateOidcConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AuthenticateOidcConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.FixedResponseConfig !== undefined) {
        const memberEntries = serializeAws_queryFixedResponseActionConfig(input.FixedResponseConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `FixedResponseConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ForwardConfig !== undefined) {
        const memberEntries = serializeAws_queryForwardActionConfig(input.ForwardConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ForwardConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Order !== undefined) {
        entries["Order"] = input.Order;
    }
    if (input.RedirectConfig !== undefined) {
        const memberEntries = serializeAws_queryRedirectActionConfig(input.RedirectConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RedirectConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetGroupArn !== undefined) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Type !== undefined) {
        entries["Type"] = input.Type;
    }
    return entries;
};
const serializeAws_queryActions = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryAction(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryAddListenerCertificatesInput = (input, context) => {
    const entries = {};
    if (input.Certificates !== undefined) {
        const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Certificates.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ListenerArn !== undefined) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    return entries;
};
const serializeAws_queryAddTagsInput = (input, context) => {
    const entries = {};
    if (input.ResourceArns !== undefined) {
        const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourceArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input).forEach(key => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryAuthenticateCognitoActionConfig = (input, context) => {
    const entries = {};
    if (input.AuthenticationRequestExtraParams !== undefined) {
        const memberEntries = serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams(input.AuthenticationRequestExtraParams, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AuthenticationRequestExtraParams.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OnUnauthenticatedRequest !== undefined) {
        entries["OnUnauthenticatedRequest"] = input.OnUnauthenticatedRequest;
    }
    if (input.Scope !== undefined) {
        entries["Scope"] = input.Scope;
    }
    if (input.SessionCookieName !== undefined) {
        entries["SessionCookieName"] = input.SessionCookieName;
    }
    if (input.SessionTimeout !== undefined) {
        entries["SessionTimeout"] = input.SessionTimeout;
    }
    if (input.UserPoolArn !== undefined) {
        entries["UserPoolArn"] = input.UserPoolArn;
    }
    if (input.UserPoolClientId !== undefined) {
        entries["UserPoolClientId"] = input.UserPoolClientId;
    }
    if (input.UserPoolDomain !== undefined) {
        entries["UserPoolDomain"] = input.UserPoolDomain;
    }
    return entries;
};
const serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input).forEach(key => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryAuthenticateOidcActionConfig = (input, context) => {
    const entries = {};
    if (input.AuthenticationRequestExtraParams !== undefined) {
        const memberEntries = serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams(input.AuthenticationRequestExtraParams, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AuthenticationRequestExtraParams.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.AuthorizationEndpoint !== undefined) {
        entries["AuthorizationEndpoint"] = input.AuthorizationEndpoint;
    }
    if (input.ClientId !== undefined) {
        entries["ClientId"] = input.ClientId;
    }
    if (input.ClientSecret !== undefined) {
        entries["ClientSecret"] = input.ClientSecret;
    }
    if (input.Issuer !== undefined) {
        entries["Issuer"] = input.Issuer;
    }
    if (input.OnUnauthenticatedRequest !== undefined) {
        entries["OnUnauthenticatedRequest"] = input.OnUnauthenticatedRequest;
    }
    if (input.Scope !== undefined) {
        entries["Scope"] = input.Scope;
    }
    if (input.SessionCookieName !== undefined) {
        entries["SessionCookieName"] = input.SessionCookieName;
    }
    if (input.SessionTimeout !== undefined) {
        entries["SessionTimeout"] = input.SessionTimeout;
    }
    if (input.TokenEndpoint !== undefined) {
        entries["TokenEndpoint"] = input.TokenEndpoint;
    }
    if (input.UseExistingClientSecret !== undefined) {
        entries["UseExistingClientSecret"] = input.UseExistingClientSecret;
    }
    if (input.UserInfoEndpoint !== undefined) {
        entries["UserInfoEndpoint"] = input.UserInfoEndpoint;
    }
    return entries;
};
const serializeAws_queryCertificate = (input, context) => {
    const entries = {};
    if (input.CertificateArn !== undefined) {
        entries["CertificateArn"] = input.CertificateArn;
    }
    if (input.IsDefault !== undefined) {
        entries["IsDefault"] = input.IsDefault;
    }
    return entries;
};
const serializeAws_queryCertificateList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryCertificate(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryCreateListenerInput = (input, context) => {
    const entries = {};
    if (input.Certificates !== undefined) {
        const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Certificates.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DefaultActions !== undefined) {
        const memberEntries = serializeAws_queryActions(input.DefaultActions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DefaultActions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerArn !== undefined) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.Protocol !== undefined) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.SslPolicy !== undefined) {
        entries["SslPolicy"] = input.SslPolicy;
    }
    return entries;
};
const serializeAws_queryCreateLoadBalancerInput = (input, context) => {
    const entries = {};
    if (input.IpAddressType !== undefined) {
        entries["IpAddressType"] = input.IpAddressType;
    }
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Scheme !== undefined) {
        entries["Scheme"] = input.Scheme;
    }
    if (input.SecurityGroups !== undefined) {
        const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SecurityGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SubnetMappings !== undefined) {
        const memberEntries = serializeAws_querySubnetMappings(input.SubnetMappings, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SubnetMappings.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Subnets !== undefined) {
        const memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Subnets.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Type !== undefined) {
        entries["Type"] = input.Type;
    }
    return entries;
};
const serializeAws_queryCreateRuleInput = (input, context) => {
    const entries = {};
    if (input.Actions !== undefined) {
        const memberEntries = serializeAws_queryActions(input.Actions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Actions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Conditions !== undefined) {
        const memberEntries = serializeAws_queryRuleConditionList(input.Conditions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Conditions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ListenerArn !== undefined) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Priority !== undefined) {
        entries["Priority"] = input.Priority;
    }
    return entries;
};
const serializeAws_queryCreateTargetGroupInput = (input, context) => {
    const entries = {};
    if (input.HealthCheckEnabled !== undefined) {
        entries["HealthCheckEnabled"] = input.HealthCheckEnabled;
    }
    if (input.HealthCheckIntervalSeconds !== undefined) {
        entries["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
    }
    if (input.HealthCheckPath !== undefined) {
        entries["HealthCheckPath"] = input.HealthCheckPath;
    }
    if (input.HealthCheckPort !== undefined) {
        entries["HealthCheckPort"] = input.HealthCheckPort;
    }
    if (input.HealthCheckProtocol !== undefined) {
        entries["HealthCheckProtocol"] = input.HealthCheckProtocol;
    }
    if (input.HealthCheckTimeoutSeconds !== undefined) {
        entries["HealthCheckTimeoutSeconds"] = input.HealthCheckTimeoutSeconds;
    }
    if (input.HealthyThresholdCount !== undefined) {
        entries["HealthyThresholdCount"] = input.HealthyThresholdCount;
    }
    if (input.Matcher !== undefined) {
        const memberEntries = serializeAws_queryMatcher(input.Matcher, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Matcher.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.Protocol !== undefined) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.TargetType !== undefined) {
        entries["TargetType"] = input.TargetType;
    }
    if (input.UnhealthyThresholdCount !== undefined) {
        entries["UnhealthyThresholdCount"] = input.UnhealthyThresholdCount;
    }
    if (input.VpcId !== undefined) {
        entries["VpcId"] = input.VpcId;
    }
    return entries;
};
const serializeAws_queryDeleteListenerInput = (input, context) => {
    const entries = {};
    if (input.ListenerArn !== undefined) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    return entries;
};
const serializeAws_queryDeleteLoadBalancerInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    return entries;
};
const serializeAws_queryDeleteRuleInput = (input, context) => {
    const entries = {};
    if (input.RuleArn !== undefined) {
        entries["RuleArn"] = input.RuleArn;
    }
    return entries;
};
const serializeAws_queryDeleteTargetGroupInput = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    return entries;
};
const serializeAws_queryDeregisterTargetsInput = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Targets !== undefined) {
        const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Targets.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeAccountLimitsInput = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.PageSize !== undefined) {
        entries["PageSize"] = input.PageSize;
    }
    return entries;
};
const serializeAws_queryDescribeListenerCertificatesInput = (input, context) => {
    const entries = {};
    if (input.ListenerArn !== undefined) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.PageSize !== undefined) {
        entries["PageSize"] = input.PageSize;
    }
    return entries;
};
const serializeAws_queryDescribeListenersInput = (input, context) => {
    const entries = {};
    if (input.ListenerArns !== undefined) {
        const memberEntries = serializeAws_queryListenerArns(input.ListenerArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ListenerArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerArn !== undefined) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.PageSize !== undefined) {
        entries["PageSize"] = input.PageSize;
    }
    return entries;
};
const serializeAws_queryDescribeLoadBalancerAttributesInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    return entries;
};
const serializeAws_queryDescribeLoadBalancersInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArns !== undefined) {
        const memberEntries = serializeAws_queryLoadBalancerArns(input.LoadBalancerArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LoadBalancerArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.Names !== undefined) {
        const memberEntries = serializeAws_queryLoadBalancerNames(input.Names, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Names.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PageSize !== undefined) {
        entries["PageSize"] = input.PageSize;
    }
    return entries;
};
const serializeAws_queryDescribeRulesInput = (input, context) => {
    const entries = {};
    if (input.ListenerArn !== undefined) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.PageSize !== undefined) {
        entries["PageSize"] = input.PageSize;
    }
    if (input.RuleArns !== undefined) {
        const memberEntries = serializeAws_queryRuleArns(input.RuleArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RuleArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeSSLPoliciesInput = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.Names !== undefined) {
        const memberEntries = serializeAws_querySslPolicyNames(input.Names, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Names.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PageSize !== undefined) {
        entries["PageSize"] = input.PageSize;
    }
    return entries;
};
const serializeAws_queryDescribeTagsInput = (input, context) => {
    const entries = {};
    if (input.ResourceArns !== undefined) {
        const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourceArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeTargetGroupAttributesInput = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    return entries;
};
const serializeAws_queryDescribeTargetGroupsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.Names !== undefined) {
        const memberEntries = serializeAws_queryTargetGroupNames(input.Names, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Names.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PageSize !== undefined) {
        entries["PageSize"] = input.PageSize;
    }
    if (input.TargetGroupArns !== undefined) {
        const memberEntries = serializeAws_queryTargetGroupArns(input.TargetGroupArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TargetGroupArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeTargetHealthInput = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Targets !== undefined) {
        const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Targets.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryFixedResponseActionConfig = (input, context) => {
    const entries = {};
    if (input.ContentType !== undefined) {
        entries["ContentType"] = input.ContentType;
    }
    if (input.MessageBody !== undefined) {
        entries["MessageBody"] = input.MessageBody;
    }
    if (input.StatusCode !== undefined) {
        entries["StatusCode"] = input.StatusCode;
    }
    return entries;
};
const serializeAws_queryForwardActionConfig = (input, context) => {
    const entries = {};
    if (input.TargetGroupStickinessConfig !== undefined) {
        const memberEntries = serializeAws_queryTargetGroupStickinessConfig(input.TargetGroupStickinessConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TargetGroupStickinessConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetGroups !== undefined) {
        const memberEntries = serializeAws_queryTargetGroupList(input.TargetGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TargetGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryHostHeaderConditionConfig = (input, context) => {
    const entries = {};
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Values.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryHttpHeaderConditionConfig = (input, context) => {
    const entries = {};
    if (input.HttpHeaderName !== undefined) {
        entries["HttpHeaderName"] = input.HttpHeaderName;
    }
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Values.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryHttpRequestMethodConditionConfig = (input, context) => {
    const entries = {};
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Values.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryListOfString = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryListenerArns = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryLoadBalancerArns = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryLoadBalancerAttribute = (input, context) => {
    const entries = {};
    if (input.Key !== undefined) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryLoadBalancerAttributes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryLoadBalancerAttribute(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryLoadBalancerNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryMatcher = (input, context) => {
    const entries = {};
    if (input.HttpCode !== undefined) {
        entries["HttpCode"] = input.HttpCode;
    }
    return entries;
};
const serializeAws_queryModifyListenerInput = (input, context) => {
    const entries = {};
    if (input.Certificates !== undefined) {
        const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Certificates.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DefaultActions !== undefined) {
        const memberEntries = serializeAws_queryActions(input.DefaultActions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DefaultActions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ListenerArn !== undefined) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.Protocol !== undefined) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.SslPolicy !== undefined) {
        entries["SslPolicy"] = input.SslPolicy;
    }
    return entries;
};
const serializeAws_queryModifyLoadBalancerAttributesInput = (input, context) => {
    const entries = {};
    if (input.Attributes !== undefined) {
        const memberEntries = serializeAws_queryLoadBalancerAttributes(input.Attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Attributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LoadBalancerArn !== undefined) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    return entries;
};
const serializeAws_queryModifyRuleInput = (input, context) => {
    const entries = {};
    if (input.Actions !== undefined) {
        const memberEntries = serializeAws_queryActions(input.Actions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Actions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Conditions !== undefined) {
        const memberEntries = serializeAws_queryRuleConditionList(input.Conditions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Conditions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.RuleArn !== undefined) {
        entries["RuleArn"] = input.RuleArn;
    }
    return entries;
};
const serializeAws_queryModifyTargetGroupAttributesInput = (input, context) => {
    const entries = {};
    if (input.Attributes !== undefined) {
        const memberEntries = serializeAws_queryTargetGroupAttributes(input.Attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Attributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetGroupArn !== undefined) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    return entries;
};
const serializeAws_queryModifyTargetGroupInput = (input, context) => {
    const entries = {};
    if (input.HealthCheckEnabled !== undefined) {
        entries["HealthCheckEnabled"] = input.HealthCheckEnabled;
    }
    if (input.HealthCheckIntervalSeconds !== undefined) {
        entries["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
    }
    if (input.HealthCheckPath !== undefined) {
        entries["HealthCheckPath"] = input.HealthCheckPath;
    }
    if (input.HealthCheckPort !== undefined) {
        entries["HealthCheckPort"] = input.HealthCheckPort;
    }
    if (input.HealthCheckProtocol !== undefined) {
        entries["HealthCheckProtocol"] = input.HealthCheckProtocol;
    }
    if (input.HealthCheckTimeoutSeconds !== undefined) {
        entries["HealthCheckTimeoutSeconds"] = input.HealthCheckTimeoutSeconds;
    }
    if (input.HealthyThresholdCount !== undefined) {
        entries["HealthyThresholdCount"] = input.HealthyThresholdCount;
    }
    if (input.Matcher !== undefined) {
        const memberEntries = serializeAws_queryMatcher(input.Matcher, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Matcher.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TargetGroupArn !== undefined) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.UnhealthyThresholdCount !== undefined) {
        entries["UnhealthyThresholdCount"] = input.UnhealthyThresholdCount;
    }
    return entries;
};
const serializeAws_queryPathPatternConditionConfig = (input, context) => {
    const entries = {};
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Values.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryQueryStringConditionConfig = (input, context) => {
    const entries = {};
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryQueryStringKeyValuePairList(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Values.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryQueryStringKeyValuePair = (input, context) => {
    const entries = {};
    if (input.Key !== undefined) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryQueryStringKeyValuePairList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryQueryStringKeyValuePair(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryRedirectActionConfig = (input, context) => {
    const entries = {};
    if (input.Host !== undefined) {
        entries["Host"] = input.Host;
    }
    if (input.Path !== undefined) {
        entries["Path"] = input.Path;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    if (input.Protocol !== undefined) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.Query !== undefined) {
        entries["Query"] = input.Query;
    }
    if (input.StatusCode !== undefined) {
        entries["StatusCode"] = input.StatusCode;
    }
    return entries;
};
const serializeAws_queryRegisterTargetsInput = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Targets !== undefined) {
        const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Targets.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryRemoveListenerCertificatesInput = (input, context) => {
    const entries = {};
    if (input.Certificates !== undefined) {
        const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Certificates.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ListenerArn !== undefined) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    return entries;
};
const serializeAws_queryRemoveTagsInput = (input, context) => {
    const entries = {};
    if (input.ResourceArns !== undefined) {
        const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourceArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeys(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryResourceArns = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryRuleArns = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryRuleCondition = (input, context) => {
    const entries = {};
    if (input.Field !== undefined) {
        entries["Field"] = input.Field;
    }
    if (input.HostHeaderConfig !== undefined) {
        const memberEntries = serializeAws_queryHostHeaderConditionConfig(input.HostHeaderConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `HostHeaderConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.HttpHeaderConfig !== undefined) {
        const memberEntries = serializeAws_queryHttpHeaderConditionConfig(input.HttpHeaderConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `HttpHeaderConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.HttpRequestMethodConfig !== undefined) {
        const memberEntries = serializeAws_queryHttpRequestMethodConditionConfig(input.HttpRequestMethodConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `HttpRequestMethodConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PathPatternConfig !== undefined) {
        const memberEntries = serializeAws_queryPathPatternConditionConfig(input.PathPatternConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PathPatternConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.QueryStringConfig !== undefined) {
        const memberEntries = serializeAws_queryQueryStringConditionConfig(input.QueryStringConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `QueryStringConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SourceIpConfig !== undefined) {
        const memberEntries = serializeAws_querySourceIpConditionConfig(input.SourceIpConfig, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SourceIpConfig.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Values.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryRuleConditionList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryRuleCondition(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryRulePriorityList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryRulePriorityPair(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryRulePriorityPair = (input, context) => {
    const entries = {};
    if (input.Priority !== undefined) {
        entries["Priority"] = input.Priority;
    }
    if (input.RuleArn !== undefined) {
        entries["RuleArn"] = input.RuleArn;
    }
    return entries;
};
const serializeAws_querySecurityGroups = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySetIpAddressTypeInput = (input, context) => {
    const entries = {};
    if (input.IpAddressType !== undefined) {
        entries["IpAddressType"] = input.IpAddressType;
    }
    if (input.LoadBalancerArn !== undefined) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    return entries;
};
const serializeAws_querySetRulePrioritiesInput = (input, context) => {
    const entries = {};
    if (input.RulePriorities !== undefined) {
        const memberEntries = serializeAws_queryRulePriorityList(input.RulePriorities, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RulePriorities.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_querySetSecurityGroupsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.SecurityGroups !== undefined) {
        const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SecurityGroups.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_querySetSubnetsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.SubnetMappings !== undefined) {
        const memberEntries = serializeAws_querySubnetMappings(input.SubnetMappings, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SubnetMappings.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Subnets !== undefined) {
        const memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Subnets.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_querySourceIpConditionConfig = (input, context) => {
    const entries = {};
    if (input.Values !== undefined) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Values.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_querySslPolicyNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySubnetMapping = (input, context) => {
    const entries = {};
    if (input.AllocationId !== undefined) {
        entries["AllocationId"] = input.AllocationId;
    }
    if (input.PrivateIPv4Address !== undefined) {
        entries["PrivateIPv4Address"] = input.PrivateIPv4Address;
    }
    if (input.SubnetId !== undefined) {
        entries["SubnetId"] = input.SubnetId;
    }
    return entries;
};
const serializeAws_querySubnetMappings = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_querySubnetMapping(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_querySubnets = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryTagKeys = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetDescription = (input, context) => {
    const entries = {};
    if (input.AvailabilityZone !== undefined) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.Id !== undefined) {
        entries["Id"] = input.Id;
    }
    if (input.Port !== undefined) {
        entries["Port"] = input.Port;
    }
    return entries;
};
const serializeAws_queryTargetDescriptions = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryTargetDescription(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetGroupArns = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetGroupAttribute = (input, context) => {
    const entries = {};
    if (input.Key !== undefined) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryTargetGroupAttributes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryTargetGroupAttribute(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetGroupList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryTargetGroupTuple(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetGroupNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetGroupStickinessConfig = (input, context) => {
    const entries = {};
    if (input.DurationSeconds !== undefined) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_queryTargetGroupTuple = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Weight !== undefined) {
        entries["Weight"] = input.Weight;
    }
    return entries;
};
const deserializeAws_queryAction = (output, context) => {
    let contents = {
        __type: "Action",
        AuthenticateCognitoConfig: undefined,
        AuthenticateOidcConfig: undefined,
        FixedResponseConfig: undefined,
        ForwardConfig: undefined,
        Order: undefined,
        RedirectConfig: undefined,
        TargetGroupArn: undefined,
        Type: undefined
    };
    if (output["AuthenticateCognitoConfig"] !== undefined) {
        contents.AuthenticateCognitoConfig = deserializeAws_queryAuthenticateCognitoActionConfig(output["AuthenticateCognitoConfig"], context);
    }
    if (output["AuthenticateOidcConfig"] !== undefined) {
        contents.AuthenticateOidcConfig = deserializeAws_queryAuthenticateOidcActionConfig(output["AuthenticateOidcConfig"], context);
    }
    if (output["FixedResponseConfig"] !== undefined) {
        contents.FixedResponseConfig = deserializeAws_queryFixedResponseActionConfig(output["FixedResponseConfig"], context);
    }
    if (output["ForwardConfig"] !== undefined) {
        contents.ForwardConfig = deserializeAws_queryForwardActionConfig(output["ForwardConfig"], context);
    }
    if (output["Order"] !== undefined) {
        contents.Order = parseInt(output["Order"]);
    }
    if (output["RedirectConfig"] !== undefined) {
        contents.RedirectConfig = deserializeAws_queryRedirectActionConfig(output["RedirectConfig"], context);
    }
    if (output["TargetGroupArn"] !== undefined) {
        contents.TargetGroupArn = output["TargetGroupArn"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    return contents;
};
const deserializeAws_queryActions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAction(entry, context));
    });
    return contents;
};
const deserializeAws_queryAddListenerCertificatesOutput = (output, context) => {
    let contents = {
        __type: "AddListenerCertificatesOutput",
        Certificates: undefined
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined &&
        output["Certificates"]["member"] !== undefined) {
        const wrappedItem = output["Certificates"]["member"] instanceof Array
            ? output["Certificates"]["member"]
            : [output["Certificates"]["member"]];
        contents.Certificates = deserializeAws_queryCertificateList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryAddTagsOutput = (output, context) => {
    let contents = {
        __type: "AddTagsOutput"
    };
    return contents;
};
const deserializeAws_queryAllocationIdNotFoundException = (output, context) => {
    let contents = {
        __type: "AllocationIdNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = pair["value"];
    });
    return mapParams;
};
const deserializeAws_queryAuthenticateCognitoActionConfig = (output, context) => {
    let contents = {
        __type: "AuthenticateCognitoActionConfig",
        AuthenticationRequestExtraParams: undefined,
        OnUnauthenticatedRequest: undefined,
        Scope: undefined,
        SessionCookieName: undefined,
        SessionTimeout: undefined,
        UserPoolArn: undefined,
        UserPoolClientId: undefined,
        UserPoolDomain: undefined
    };
    if (output.AuthenticationRequestExtraParams === "") {
        contents.AuthenticationRequestExtraParams = {};
    }
    if (output["AuthenticationRequestExtraParams"] !== undefined &&
        output["AuthenticationRequestExtraParams"]["entry"] !== undefined) {
        const wrappedItem = output["AuthenticationRequestExtraParams"]["entry"] instanceof Array
            ? output["AuthenticationRequestExtraParams"]["entry"]
            : [output["AuthenticationRequestExtraParams"]["entry"]];
        contents.AuthenticationRequestExtraParams = deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams(wrappedItem, context);
    }
    if (output["OnUnauthenticatedRequest"] !== undefined) {
        contents.OnUnauthenticatedRequest = output["OnUnauthenticatedRequest"];
    }
    if (output["Scope"] !== undefined) {
        contents.Scope = output["Scope"];
    }
    if (output["SessionCookieName"] !== undefined) {
        contents.SessionCookieName = output["SessionCookieName"];
    }
    if (output["SessionTimeout"] !== undefined) {
        contents.SessionTimeout = parseInt(output["SessionTimeout"]);
    }
    if (output["UserPoolArn"] !== undefined) {
        contents.UserPoolArn = output["UserPoolArn"];
    }
    if (output["UserPoolClientId"] !== undefined) {
        contents.UserPoolClientId = output["UserPoolClientId"];
    }
    if (output["UserPoolDomain"] !== undefined) {
        contents.UserPoolDomain = output["UserPoolDomain"];
    }
    return contents;
};
const deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = pair["value"];
    });
    return mapParams;
};
const deserializeAws_queryAuthenticateOidcActionConfig = (output, context) => {
    let contents = {
        __type: "AuthenticateOidcActionConfig",
        AuthenticationRequestExtraParams: undefined,
        AuthorizationEndpoint: undefined,
        ClientId: undefined,
        ClientSecret: undefined,
        Issuer: undefined,
        OnUnauthenticatedRequest: undefined,
        Scope: undefined,
        SessionCookieName: undefined,
        SessionTimeout: undefined,
        TokenEndpoint: undefined,
        UseExistingClientSecret: undefined,
        UserInfoEndpoint: undefined
    };
    if (output.AuthenticationRequestExtraParams === "") {
        contents.AuthenticationRequestExtraParams = {};
    }
    if (output["AuthenticationRequestExtraParams"] !== undefined &&
        output["AuthenticationRequestExtraParams"]["entry"] !== undefined) {
        const wrappedItem = output["AuthenticationRequestExtraParams"]["entry"] instanceof Array
            ? output["AuthenticationRequestExtraParams"]["entry"]
            : [output["AuthenticationRequestExtraParams"]["entry"]];
        contents.AuthenticationRequestExtraParams = deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams(wrappedItem, context);
    }
    if (output["AuthorizationEndpoint"] !== undefined) {
        contents.AuthorizationEndpoint = output["AuthorizationEndpoint"];
    }
    if (output["ClientId"] !== undefined) {
        contents.ClientId = output["ClientId"];
    }
    if (output["ClientSecret"] !== undefined) {
        contents.ClientSecret = output["ClientSecret"];
    }
    if (output["Issuer"] !== undefined) {
        contents.Issuer = output["Issuer"];
    }
    if (output["OnUnauthenticatedRequest"] !== undefined) {
        contents.OnUnauthenticatedRequest = output["OnUnauthenticatedRequest"];
    }
    if (output["Scope"] !== undefined) {
        contents.Scope = output["Scope"];
    }
    if (output["SessionCookieName"] !== undefined) {
        contents.SessionCookieName = output["SessionCookieName"];
    }
    if (output["SessionTimeout"] !== undefined) {
        contents.SessionTimeout = parseInt(output["SessionTimeout"]);
    }
    if (output["TokenEndpoint"] !== undefined) {
        contents.TokenEndpoint = output["TokenEndpoint"];
    }
    if (output["UseExistingClientSecret"] !== undefined) {
        contents.UseExistingClientSecret =
            output["UseExistingClientSecret"] == "true";
    }
    if (output["UserInfoEndpoint"] !== undefined) {
        contents.UserInfoEndpoint = output["UserInfoEndpoint"];
    }
    return contents;
};
const deserializeAws_queryAvailabilityZone = (output, context) => {
    let contents = {
        __type: "AvailabilityZone",
        LoadBalancerAddresses: undefined,
        SubnetId: undefined,
        ZoneName: undefined
    };
    if (output.LoadBalancerAddresses === "") {
        contents.LoadBalancerAddresses = [];
    }
    if (output["LoadBalancerAddresses"] !== undefined &&
        output["LoadBalancerAddresses"]["member"] !== undefined) {
        const wrappedItem = output["LoadBalancerAddresses"]["member"] instanceof Array
            ? output["LoadBalancerAddresses"]["member"]
            : [output["LoadBalancerAddresses"]["member"]];
        contents.LoadBalancerAddresses = deserializeAws_queryLoadBalancerAddresses(wrappedItem, context);
    }
    if (output["SubnetId"] !== undefined) {
        contents.SubnetId = output["SubnetId"];
    }
    if (output["ZoneName"] !== undefined) {
        contents.ZoneName = output["ZoneName"];
    }
    return contents;
};
const deserializeAws_queryAvailabilityZoneNotSupportedException = (output, context) => {
    let contents = {
        __type: "AvailabilityZoneNotSupportedException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryAvailabilityZones = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAvailabilityZone(entry, context));
    });
    return contents;
};
const deserializeAws_queryCertificate = (output, context) => {
    let contents = {
        __type: "Certificate",
        CertificateArn: undefined,
        IsDefault: undefined
    };
    if (output["CertificateArn"] !== undefined) {
        contents.CertificateArn = output["CertificateArn"];
    }
    if (output["IsDefault"] !== undefined) {
        contents.IsDefault = output["IsDefault"] == "true";
    }
    return contents;
};
const deserializeAws_queryCertificateList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCertificate(entry, context));
    });
    return contents;
};
const deserializeAws_queryCertificateNotFoundException = (output, context) => {
    let contents = {
        __type: "CertificateNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryCipher = (output, context) => {
    let contents = {
        __type: "Cipher",
        Name: undefined,
        Priority: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Priority"] !== undefined) {
        contents.Priority = parseInt(output["Priority"]);
    }
    return contents;
};
const deserializeAws_queryCiphers = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCipher(entry, context));
    });
    return contents;
};
const deserializeAws_queryCreateListenerOutput = (output, context) => {
    let contents = {
        __type: "CreateListenerOutput",
        Listeners: undefined
    };
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined &&
        output["Listeners"]["member"] !== undefined) {
        const wrappedItem = output["Listeners"]["member"] instanceof Array
            ? output["Listeners"]["member"]
            : [output["Listeners"]["member"]];
        contents.Listeners = deserializeAws_queryListeners(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryCreateLoadBalancerOutput = (output, context) => {
    let contents = {
        __type: "CreateLoadBalancerOutput",
        LoadBalancers: undefined
    };
    if (output.LoadBalancers === "") {
        contents.LoadBalancers = [];
    }
    if (output["LoadBalancers"] !== undefined &&
        output["LoadBalancers"]["member"] !== undefined) {
        const wrappedItem = output["LoadBalancers"]["member"] instanceof Array
            ? output["LoadBalancers"]["member"]
            : [output["LoadBalancers"]["member"]];
        contents.LoadBalancers = deserializeAws_queryLoadBalancers(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryCreateRuleOutput = (output, context) => {
    let contents = {
        __type: "CreateRuleOutput",
        Rules: undefined
    };
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined &&
        output["Rules"]["member"] !== undefined) {
        const wrappedItem = output["Rules"]["member"] instanceof Array
            ? output["Rules"]["member"]
            : [output["Rules"]["member"]];
        contents.Rules = deserializeAws_queryRules(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryCreateTargetGroupOutput = (output, context) => {
    let contents = {
        __type: "CreateTargetGroupOutput",
        TargetGroups: undefined
    };
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined &&
        output["TargetGroups"]["member"] !== undefined) {
        const wrappedItem = output["TargetGroups"]["member"] instanceof Array
            ? output["TargetGroups"]["member"]
            : [output["TargetGroups"]["member"]];
        contents.TargetGroups = deserializeAws_queryTargetGroups(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDeleteListenerOutput = (output, context) => {
    let contents = {
        __type: "DeleteListenerOutput"
    };
    return contents;
};
const deserializeAws_queryDeleteLoadBalancerOutput = (output, context) => {
    let contents = {
        __type: "DeleteLoadBalancerOutput"
    };
    return contents;
};
const deserializeAws_queryDeleteRuleOutput = (output, context) => {
    let contents = {
        __type: "DeleteRuleOutput"
    };
    return contents;
};
const deserializeAws_queryDeleteTargetGroupOutput = (output, context) => {
    let contents = {
        __type: "DeleteTargetGroupOutput"
    };
    return contents;
};
const deserializeAws_queryDeregisterTargetsOutput = (output, context) => {
    let contents = {
        __type: "DeregisterTargetsOutput"
    };
    return contents;
};
const deserializeAws_queryDescribeAccountLimitsOutput = (output, context) => {
    let contents = {
        __type: "DescribeAccountLimitsOutput",
        Limits: undefined,
        NextMarker: undefined
    };
    if (output.Limits === "") {
        contents.Limits = [];
    }
    if (output["Limits"] !== undefined &&
        output["Limits"]["member"] !== undefined) {
        const wrappedItem = output["Limits"]["member"] instanceof Array
            ? output["Limits"]["member"]
            : [output["Limits"]["member"]];
        contents.Limits = deserializeAws_queryLimits(wrappedItem, context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
const deserializeAws_queryDescribeListenerCertificatesOutput = (output, context) => {
    let contents = {
        __type: "DescribeListenerCertificatesOutput",
        Certificates: undefined,
        NextMarker: undefined
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined &&
        output["Certificates"]["member"] !== undefined) {
        const wrappedItem = output["Certificates"]["member"] instanceof Array
            ? output["Certificates"]["member"]
            : [output["Certificates"]["member"]];
        contents.Certificates = deserializeAws_queryCertificateList(wrappedItem, context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
const deserializeAws_queryDescribeListenersOutput = (output, context) => {
    let contents = {
        __type: "DescribeListenersOutput",
        Listeners: undefined,
        NextMarker: undefined
    };
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined &&
        output["Listeners"]["member"] !== undefined) {
        const wrappedItem = output["Listeners"]["member"] instanceof Array
            ? output["Listeners"]["member"]
            : [output["Listeners"]["member"]];
        contents.Listeners = deserializeAws_queryListeners(wrappedItem, context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancerAttributesOutput = (output, context) => {
    let contents = {
        __type: "DescribeLoadBalancerAttributesOutput",
        Attributes: undefined
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined &&
        output["Attributes"]["member"] !== undefined) {
        const wrappedItem = output["Attributes"]["member"] instanceof Array
            ? output["Attributes"]["member"]
            : [output["Attributes"]["member"]];
        contents.Attributes = deserializeAws_queryLoadBalancerAttributes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancersOutput = (output, context) => {
    let contents = {
        __type: "DescribeLoadBalancersOutput",
        LoadBalancers: undefined,
        NextMarker: undefined
    };
    if (output.LoadBalancers === "") {
        contents.LoadBalancers = [];
    }
    if (output["LoadBalancers"] !== undefined &&
        output["LoadBalancers"]["member"] !== undefined) {
        const wrappedItem = output["LoadBalancers"]["member"] instanceof Array
            ? output["LoadBalancers"]["member"]
            : [output["LoadBalancers"]["member"]];
        contents.LoadBalancers = deserializeAws_queryLoadBalancers(wrappedItem, context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
const deserializeAws_queryDescribeRulesOutput = (output, context) => {
    let contents = {
        __type: "DescribeRulesOutput",
        NextMarker: undefined,
        Rules: undefined
    };
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined &&
        output["Rules"]["member"] !== undefined) {
        const wrappedItem = output["Rules"]["member"] instanceof Array
            ? output["Rules"]["member"]
            : [output["Rules"]["member"]];
        contents.Rules = deserializeAws_queryRules(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeSSLPoliciesOutput = (output, context) => {
    let contents = {
        __type: "DescribeSSLPoliciesOutput",
        NextMarker: undefined,
        SslPolicies: undefined
    };
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    if (output.SslPolicies === "") {
        contents.SslPolicies = [];
    }
    if (output["SslPolicies"] !== undefined &&
        output["SslPolicies"]["member"] !== undefined) {
        const wrappedItem = output["SslPolicies"]["member"] instanceof Array
            ? output["SslPolicies"]["member"]
            : [output["SslPolicies"]["member"]];
        contents.SslPolicies = deserializeAws_querySslPolicies(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeTagsOutput = (output, context) => {
    let contents = {
        __type: "DescribeTagsOutput",
        TagDescriptions: undefined
    };
    if (output.TagDescriptions === "") {
        contents.TagDescriptions = [];
    }
    if (output["TagDescriptions"] !== undefined &&
        output["TagDescriptions"]["member"] !== undefined) {
        const wrappedItem = output["TagDescriptions"]["member"] instanceof Array
            ? output["TagDescriptions"]["member"]
            : [output["TagDescriptions"]["member"]];
        contents.TagDescriptions = deserializeAws_queryTagDescriptions(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeTargetGroupAttributesOutput = (output, context) => {
    let contents = {
        __type: "DescribeTargetGroupAttributesOutput",
        Attributes: undefined
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined &&
        output["Attributes"]["member"] !== undefined) {
        const wrappedItem = output["Attributes"]["member"] instanceof Array
            ? output["Attributes"]["member"]
            : [output["Attributes"]["member"]];
        contents.Attributes = deserializeAws_queryTargetGroupAttributes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeTargetGroupsOutput = (output, context) => {
    let contents = {
        __type: "DescribeTargetGroupsOutput",
        NextMarker: undefined,
        TargetGroups: undefined
    };
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined &&
        output["TargetGroups"]["member"] !== undefined) {
        const wrappedItem = output["TargetGroups"]["member"] instanceof Array
            ? output["TargetGroups"]["member"]
            : [output["TargetGroups"]["member"]];
        contents.TargetGroups = deserializeAws_queryTargetGroups(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeTargetHealthOutput = (output, context) => {
    let contents = {
        __type: "DescribeTargetHealthOutput",
        TargetHealthDescriptions: undefined
    };
    if (output.TargetHealthDescriptions === "") {
        contents.TargetHealthDescriptions = [];
    }
    if (output["TargetHealthDescriptions"] !== undefined &&
        output["TargetHealthDescriptions"]["member"] !== undefined) {
        const wrappedItem = output["TargetHealthDescriptions"]["member"] instanceof Array
            ? output["TargetHealthDescriptions"]["member"]
            : [output["TargetHealthDescriptions"]["member"]];
        contents.TargetHealthDescriptions = deserializeAws_queryTargetHealthDescriptions(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDuplicateListenerException = (output, context) => {
    let contents = {
        __type: "DuplicateListenerException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDuplicateLoadBalancerNameException = (output, context) => {
    let contents = {
        __type: "DuplicateLoadBalancerNameException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDuplicateTagKeysException = (output, context) => {
    let contents = {
        __type: "DuplicateTagKeysException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDuplicateTargetGroupNameException = (output, context) => {
    let contents = {
        __type: "DuplicateTargetGroupNameException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryFixedResponseActionConfig = (output, context) => {
    let contents = {
        __type: "FixedResponseActionConfig",
        ContentType: undefined,
        MessageBody: undefined,
        StatusCode: undefined
    };
    if (output["ContentType"] !== undefined) {
        contents.ContentType = output["ContentType"];
    }
    if (output["MessageBody"] !== undefined) {
        contents.MessageBody = output["MessageBody"];
    }
    if (output["StatusCode"] !== undefined) {
        contents.StatusCode = output["StatusCode"];
    }
    return contents;
};
const deserializeAws_queryForwardActionConfig = (output, context) => {
    let contents = {
        __type: "ForwardActionConfig",
        TargetGroupStickinessConfig: undefined,
        TargetGroups: undefined
    };
    if (output["TargetGroupStickinessConfig"] !== undefined) {
        contents.TargetGroupStickinessConfig = deserializeAws_queryTargetGroupStickinessConfig(output["TargetGroupStickinessConfig"], context);
    }
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined &&
        output["TargetGroups"]["member"] !== undefined) {
        const wrappedItem = output["TargetGroups"]["member"] instanceof Array
            ? output["TargetGroups"]["member"]
            : [output["TargetGroups"]["member"]];
        contents.TargetGroups = deserializeAws_queryTargetGroupList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryHealthUnavailableException = (output, context) => {
    let contents = {
        __type: "HealthUnavailableException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryHostHeaderConditionConfig = (output, context) => {
    let contents = {
        __type: "HostHeaderConditionConfig",
        Values: undefined
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined &&
        output["Values"]["member"] !== undefined) {
        const wrappedItem = output["Values"]["member"] instanceof Array
            ? output["Values"]["member"]
            : [output["Values"]["member"]];
        contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryHttpHeaderConditionConfig = (output, context) => {
    let contents = {
        __type: "HttpHeaderConditionConfig",
        HttpHeaderName: undefined,
        Values: undefined
    };
    if (output["HttpHeaderName"] !== undefined) {
        contents.HttpHeaderName = output["HttpHeaderName"];
    }
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined &&
        output["Values"]["member"] !== undefined) {
        const wrappedItem = output["Values"]["member"] instanceof Array
            ? output["Values"]["member"]
            : [output["Values"]["member"]];
        contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryHttpRequestMethodConditionConfig = (output, context) => {
    let contents = {
        __type: "HttpRequestMethodConditionConfig",
        Values: undefined
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined &&
        output["Values"]["member"] !== undefined) {
        const wrappedItem = output["Values"]["member"] instanceof Array
            ? output["Values"]["member"]
            : [output["Values"]["member"]];
        contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryIncompatibleProtocolsException = (output, context) => {
    let contents = {
        __type: "IncompatibleProtocolsException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidConfigurationRequestException = (output, context) => {
    let contents = {
        __type: "InvalidConfigurationRequestException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidLoadBalancerActionException = (output, context) => {
    let contents = {
        __type: "InvalidLoadBalancerActionException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSchemeException = (output, context) => {
    let contents = {
        __type: "InvalidSchemeException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSecurityGroupException = (output, context) => {
    let contents = {
        __type: "InvalidSecurityGroupException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSubnetException = (output, context) => {
    let contents = {
        __type: "InvalidSubnetException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidTargetException = (output, context) => {
    let contents = {
        __type: "InvalidTargetException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryLimit = (output, context) => {
    let contents = {
        __type: "Limit",
        Max: undefined,
        Name: undefined
    };
    if (output["Max"] !== undefined) {
        contents.Max = output["Max"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryLimits = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLimit(entry, context));
    });
    return contents;
};
const deserializeAws_queryListOfString = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryListener = (output, context) => {
    let contents = {
        __type: "Listener",
        Certificates: undefined,
        DefaultActions: undefined,
        ListenerArn: undefined,
        LoadBalancerArn: undefined,
        Port: undefined,
        Protocol: undefined,
        SslPolicy: undefined
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined &&
        output["Certificates"]["member"] !== undefined) {
        const wrappedItem = output["Certificates"]["member"] instanceof Array
            ? output["Certificates"]["member"]
            : [output["Certificates"]["member"]];
        contents.Certificates = deserializeAws_queryCertificateList(wrappedItem, context);
    }
    if (output.DefaultActions === "") {
        contents.DefaultActions = [];
    }
    if (output["DefaultActions"] !== undefined &&
        output["DefaultActions"]["member"] !== undefined) {
        const wrappedItem = output["DefaultActions"]["member"] instanceof Array
            ? output["DefaultActions"]["member"]
            : [output["DefaultActions"]["member"]];
        contents.DefaultActions = deserializeAws_queryActions(wrappedItem, context);
    }
    if (output["ListenerArn"] !== undefined) {
        contents.ListenerArn = output["ListenerArn"];
    }
    if (output["LoadBalancerArn"] !== undefined) {
        contents.LoadBalancerArn = output["LoadBalancerArn"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["SslPolicy"] !== undefined) {
        contents.SslPolicy = output["SslPolicy"];
    }
    return contents;
};
const deserializeAws_queryListenerNotFoundException = (output, context) => {
    let contents = {
        __type: "ListenerNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryListeners = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryListener(entry, context));
    });
    return contents;
};
const deserializeAws_queryLoadBalancer = (output, context) => {
    let contents = {
        __type: "LoadBalancer",
        AvailabilityZones: undefined,
        CanonicalHostedZoneId: undefined,
        CreatedTime: undefined,
        DNSName: undefined,
        IpAddressType: undefined,
        LoadBalancerArn: undefined,
        LoadBalancerName: undefined,
        Scheme: undefined,
        SecurityGroups: undefined,
        State: undefined,
        Type: undefined,
        VpcId: undefined
    };
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined &&
        output["AvailabilityZones"]["member"] !== undefined) {
        const wrappedItem = output["AvailabilityZones"]["member"] instanceof Array
            ? output["AvailabilityZones"]["member"]
            : [output["AvailabilityZones"]["member"]];
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(wrappedItem, context);
    }
    if (output["CanonicalHostedZoneId"] !== undefined) {
        contents.CanonicalHostedZoneId = output["CanonicalHostedZoneId"];
    }
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = new Date(output["CreatedTime"]);
    }
    if (output["DNSName"] !== undefined) {
        contents.DNSName = output["DNSName"];
    }
    if (output["IpAddressType"] !== undefined) {
        contents.IpAddressType = output["IpAddressType"];
    }
    if (output["LoadBalancerArn"] !== undefined) {
        contents.LoadBalancerArn = output["LoadBalancerArn"];
    }
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
    }
    if (output["Scheme"] !== undefined) {
        contents.Scheme = output["Scheme"];
    }
    if (output.SecurityGroups === "") {
        contents.SecurityGroups = [];
    }
    if (output["SecurityGroups"] !== undefined &&
        output["SecurityGroups"]["member"] !== undefined) {
        const wrappedItem = output["SecurityGroups"]["member"] instanceof Array
            ? output["SecurityGroups"]["member"]
            : [output["SecurityGroups"]["member"]];
        contents.SecurityGroups = deserializeAws_querySecurityGroups(wrappedItem, context);
    }
    if (output["State"] !== undefined) {
        contents.State = deserializeAws_queryLoadBalancerState(output["State"], context);
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerAddress = (output, context) => {
    let contents = {
        __type: "LoadBalancerAddress",
        AllocationId: undefined,
        IpAddress: undefined,
        PrivateIPv4Address: undefined
    };
    if (output["AllocationId"] !== undefined) {
        contents.AllocationId = output["AllocationId"];
    }
    if (output["IpAddress"] !== undefined) {
        contents.IpAddress = output["IpAddress"];
    }
    if (output["PrivateIPv4Address"] !== undefined) {
        contents.PrivateIPv4Address = output["PrivateIPv4Address"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerAddresses = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLoadBalancerAddress(entry, context));
    });
    return contents;
};
const deserializeAws_queryLoadBalancerArns = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryLoadBalancerAttribute = (output, context) => {
    let contents = {
        __type: "LoadBalancerAttribute",
        Key: undefined,
        Value: undefined
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerAttributes = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLoadBalancerAttribute(entry, context));
    });
    return contents;
};
const deserializeAws_queryLoadBalancerNotFoundException = (output, context) => {
    let contents = {
        __type: "LoadBalancerNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerState = (output, context) => {
    let contents = {
        __type: "LoadBalancerState",
        Code: undefined,
        Reason: undefined
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Reason"] !== undefined) {
        contents.Reason = output["Reason"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancers = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryLoadBalancer(entry, context));
    });
    return contents;
};
const deserializeAws_queryMatcher = (output, context) => {
    let contents = {
        __type: "Matcher",
        HttpCode: undefined
    };
    if (output["HttpCode"] !== undefined) {
        contents.HttpCode = output["HttpCode"];
    }
    return contents;
};
const deserializeAws_queryModifyListenerOutput = (output, context) => {
    let contents = {
        __type: "ModifyListenerOutput",
        Listeners: undefined
    };
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined &&
        output["Listeners"]["member"] !== undefined) {
        const wrappedItem = output["Listeners"]["member"] instanceof Array
            ? output["Listeners"]["member"]
            : [output["Listeners"]["member"]];
        contents.Listeners = deserializeAws_queryListeners(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryModifyLoadBalancerAttributesOutput = (output, context) => {
    let contents = {
        __type: "ModifyLoadBalancerAttributesOutput",
        Attributes: undefined
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined &&
        output["Attributes"]["member"] !== undefined) {
        const wrappedItem = output["Attributes"]["member"] instanceof Array
            ? output["Attributes"]["member"]
            : [output["Attributes"]["member"]];
        contents.Attributes = deserializeAws_queryLoadBalancerAttributes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryModifyRuleOutput = (output, context) => {
    let contents = {
        __type: "ModifyRuleOutput",
        Rules: undefined
    };
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined &&
        output["Rules"]["member"] !== undefined) {
        const wrappedItem = output["Rules"]["member"] instanceof Array
            ? output["Rules"]["member"]
            : [output["Rules"]["member"]];
        contents.Rules = deserializeAws_queryRules(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryModifyTargetGroupAttributesOutput = (output, context) => {
    let contents = {
        __type: "ModifyTargetGroupAttributesOutput",
        Attributes: undefined
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined &&
        output["Attributes"]["member"] !== undefined) {
        const wrappedItem = output["Attributes"]["member"] instanceof Array
            ? output["Attributes"]["member"]
            : [output["Attributes"]["member"]];
        contents.Attributes = deserializeAws_queryTargetGroupAttributes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryModifyTargetGroupOutput = (output, context) => {
    let contents = {
        __type: "ModifyTargetGroupOutput",
        TargetGroups: undefined
    };
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined &&
        output["TargetGroups"]["member"] !== undefined) {
        const wrappedItem = output["TargetGroups"]["member"] instanceof Array
            ? output["TargetGroups"]["member"]
            : [output["TargetGroups"]["member"]];
        contents.TargetGroups = deserializeAws_queryTargetGroups(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryOperationNotPermittedException = (output, context) => {
    let contents = {
        __type: "OperationNotPermittedException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryPathPatternConditionConfig = (output, context) => {
    let contents = {
        __type: "PathPatternConditionConfig",
        Values: undefined
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined &&
        output["Values"]["member"] !== undefined) {
        const wrappedItem = output["Values"]["member"] instanceof Array
            ? output["Values"]["member"]
            : [output["Values"]["member"]];
        contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryPriorityInUseException = (output, context) => {
    let contents = {
        __type: "PriorityInUseException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryQueryStringConditionConfig = (output, context) => {
    let contents = {
        __type: "QueryStringConditionConfig",
        Values: undefined
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined &&
        output["Values"]["member"] !== undefined) {
        const wrappedItem = output["Values"]["member"] instanceof Array
            ? output["Values"]["member"]
            : [output["Values"]["member"]];
        contents.Values = deserializeAws_queryQueryStringKeyValuePairList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryQueryStringKeyValuePair = (output, context) => {
    let contents = {
        __type: "QueryStringKeyValuePair",
        Key: undefined,
        Value: undefined
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryQueryStringKeyValuePairList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryQueryStringKeyValuePair(entry, context));
    });
    return contents;
};
const deserializeAws_queryRedirectActionConfig = (output, context) => {
    let contents = {
        __type: "RedirectActionConfig",
        Host: undefined,
        Path: undefined,
        Port: undefined,
        Protocol: undefined,
        Query: undefined,
        StatusCode: undefined
    };
    if (output["Host"] !== undefined) {
        contents.Host = output["Host"];
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = output["Port"];
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["Query"] !== undefined) {
        contents.Query = output["Query"];
    }
    if (output["StatusCode"] !== undefined) {
        contents.StatusCode = output["StatusCode"];
    }
    return contents;
};
const deserializeAws_queryRegisterTargetsOutput = (output, context) => {
    let contents = {
        __type: "RegisterTargetsOutput"
    };
    return contents;
};
const deserializeAws_queryRemoveListenerCertificatesOutput = (output, context) => {
    let contents = {
        __type: "RemoveListenerCertificatesOutput"
    };
    return contents;
};
const deserializeAws_queryRemoveTagsOutput = (output, context) => {
    let contents = {
        __type: "RemoveTagsOutput"
    };
    return contents;
};
const deserializeAws_queryResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryRule = (output, context) => {
    let contents = {
        __type: "Rule",
        Actions: undefined,
        Conditions: undefined,
        IsDefault: undefined,
        Priority: undefined,
        RuleArn: undefined
    };
    if (output.Actions === "") {
        contents.Actions = [];
    }
    if (output["Actions"] !== undefined &&
        output["Actions"]["member"] !== undefined) {
        const wrappedItem = output["Actions"]["member"] instanceof Array
            ? output["Actions"]["member"]
            : [output["Actions"]["member"]];
        contents.Actions = deserializeAws_queryActions(wrappedItem, context);
    }
    if (output.Conditions === "") {
        contents.Conditions = [];
    }
    if (output["Conditions"] !== undefined &&
        output["Conditions"]["member"] !== undefined) {
        const wrappedItem = output["Conditions"]["member"] instanceof Array
            ? output["Conditions"]["member"]
            : [output["Conditions"]["member"]];
        contents.Conditions = deserializeAws_queryRuleConditionList(wrappedItem, context);
    }
    if (output["IsDefault"] !== undefined) {
        contents.IsDefault = output["IsDefault"] == "true";
    }
    if (output["Priority"] !== undefined) {
        contents.Priority = output["Priority"];
    }
    if (output["RuleArn"] !== undefined) {
        contents.RuleArn = output["RuleArn"];
    }
    return contents;
};
const deserializeAws_queryRuleCondition = (output, context) => {
    let contents = {
        __type: "RuleCondition",
        Field: undefined,
        HostHeaderConfig: undefined,
        HttpHeaderConfig: undefined,
        HttpRequestMethodConfig: undefined,
        PathPatternConfig: undefined,
        QueryStringConfig: undefined,
        SourceIpConfig: undefined,
        Values: undefined
    };
    if (output["Field"] !== undefined) {
        contents.Field = output["Field"];
    }
    if (output["HostHeaderConfig"] !== undefined) {
        contents.HostHeaderConfig = deserializeAws_queryHostHeaderConditionConfig(output["HostHeaderConfig"], context);
    }
    if (output["HttpHeaderConfig"] !== undefined) {
        contents.HttpHeaderConfig = deserializeAws_queryHttpHeaderConditionConfig(output["HttpHeaderConfig"], context);
    }
    if (output["HttpRequestMethodConfig"] !== undefined) {
        contents.HttpRequestMethodConfig = deserializeAws_queryHttpRequestMethodConditionConfig(output["HttpRequestMethodConfig"], context);
    }
    if (output["PathPatternConfig"] !== undefined) {
        contents.PathPatternConfig = deserializeAws_queryPathPatternConditionConfig(output["PathPatternConfig"], context);
    }
    if (output["QueryStringConfig"] !== undefined) {
        contents.QueryStringConfig = deserializeAws_queryQueryStringConditionConfig(output["QueryStringConfig"], context);
    }
    if (output["SourceIpConfig"] !== undefined) {
        contents.SourceIpConfig = deserializeAws_querySourceIpConditionConfig(output["SourceIpConfig"], context);
    }
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined &&
        output["Values"]["member"] !== undefined) {
        const wrappedItem = output["Values"]["member"] instanceof Array
            ? output["Values"]["member"]
            : [output["Values"]["member"]];
        contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryRuleConditionList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryRuleCondition(entry, context));
    });
    return contents;
};
const deserializeAws_queryRuleNotFoundException = (output, context) => {
    let contents = {
        __type: "RuleNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryRules = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryRule(entry, context));
    });
    return contents;
};
const deserializeAws_querySSLPolicyNotFoundException = (output, context) => {
    let contents = {
        __type: "SSLPolicyNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_querySecurityGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_querySetIpAddressTypeOutput = (output, context) => {
    let contents = {
        __type: "SetIpAddressTypeOutput",
        IpAddressType: undefined
    };
    if (output["IpAddressType"] !== undefined) {
        contents.IpAddressType = output["IpAddressType"];
    }
    return contents;
};
const deserializeAws_querySetRulePrioritiesOutput = (output, context) => {
    let contents = {
        __type: "SetRulePrioritiesOutput",
        Rules: undefined
    };
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined &&
        output["Rules"]["member"] !== undefined) {
        const wrappedItem = output["Rules"]["member"] instanceof Array
            ? output["Rules"]["member"]
            : [output["Rules"]["member"]];
        contents.Rules = deserializeAws_queryRules(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySetSecurityGroupsOutput = (output, context) => {
    let contents = {
        __type: "SetSecurityGroupsOutput",
        SecurityGroupIds: undefined
    };
    if (output.SecurityGroupIds === "") {
        contents.SecurityGroupIds = [];
    }
    if (output["SecurityGroupIds"] !== undefined &&
        output["SecurityGroupIds"]["member"] !== undefined) {
        const wrappedItem = output["SecurityGroupIds"]["member"] instanceof Array
            ? output["SecurityGroupIds"]["member"]
            : [output["SecurityGroupIds"]["member"]];
        contents.SecurityGroupIds = deserializeAws_querySecurityGroups(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySetSubnetsOutput = (output, context) => {
    let contents = {
        __type: "SetSubnetsOutput",
        AvailabilityZones: undefined
    };
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined &&
        output["AvailabilityZones"]["member"] !== undefined) {
        const wrappedItem = output["AvailabilityZones"]["member"] instanceof Array
            ? output["AvailabilityZones"]["member"]
            : [output["AvailabilityZones"]["member"]];
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySourceIpConditionConfig = (output, context) => {
    let contents = {
        __type: "SourceIpConditionConfig",
        Values: undefined
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined &&
        output["Values"]["member"] !== undefined) {
        const wrappedItem = output["Values"]["member"] instanceof Array
            ? output["Values"]["member"]
            : [output["Values"]["member"]];
        contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySslPolicies = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySslPolicy(entry, context));
    });
    return contents;
};
const deserializeAws_querySslPolicy = (output, context) => {
    let contents = {
        __type: "SslPolicy",
        Ciphers: undefined,
        Name: undefined,
        SslProtocols: undefined
    };
    if (output.Ciphers === "") {
        contents.Ciphers = [];
    }
    if (output["Ciphers"] !== undefined &&
        output["Ciphers"]["member"] !== undefined) {
        const wrappedItem = output["Ciphers"]["member"] instanceof Array
            ? output["Ciphers"]["member"]
            : [output["Ciphers"]["member"]];
        contents.Ciphers = deserializeAws_queryCiphers(wrappedItem, context);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output.SslProtocols === "") {
        contents.SslProtocols = [];
    }
    if (output["SslProtocols"] !== undefined &&
        output["SslProtocols"]["member"] !== undefined) {
        const wrappedItem = output["SslProtocols"]["member"] instanceof Array
            ? output["SslProtocols"]["member"]
            : [output["SslProtocols"]["member"]];
        contents.SslProtocols = deserializeAws_querySslProtocols(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySslProtocols = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_querySubnetNotFoundException = (output, context) => {
    let contents = {
        __type: "SubnetNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTag = (output, context) => {
    let contents = {
        __type: "Tag",
        Key: undefined,
        Value: undefined
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryTagDescription = (output, context) => {
    let contents = {
        __type: "TagDescription",
        ResourceArn: undefined,
        Tags: undefined
    };
    if (output["ResourceArn"] !== undefined) {
        contents.ResourceArn = output["ResourceArn"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryTagDescriptions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTagDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryTagList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTag(entry, context));
    });
    return contents;
};
const deserializeAws_queryTargetDescription = (output, context) => {
    let contents = {
        __type: "TargetDescription",
        AvailabilityZone: undefined,
        Id: undefined,
        Port: undefined
    };
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    return contents;
};
const deserializeAws_queryTargetGroup = (output, context) => {
    let contents = {
        __type: "TargetGroup",
        HealthCheckEnabled: undefined,
        HealthCheckIntervalSeconds: undefined,
        HealthCheckPath: undefined,
        HealthCheckPort: undefined,
        HealthCheckProtocol: undefined,
        HealthCheckTimeoutSeconds: undefined,
        HealthyThresholdCount: undefined,
        LoadBalancerArns: undefined,
        Matcher: undefined,
        Port: undefined,
        Protocol: undefined,
        TargetGroupArn: undefined,
        TargetGroupName: undefined,
        TargetType: undefined,
        UnhealthyThresholdCount: undefined,
        VpcId: undefined
    };
    if (output["HealthCheckEnabled"] !== undefined) {
        contents.HealthCheckEnabled = output["HealthCheckEnabled"] == "true";
    }
    if (output["HealthCheckIntervalSeconds"] !== undefined) {
        contents.HealthCheckIntervalSeconds = parseInt(output["HealthCheckIntervalSeconds"]);
    }
    if (output["HealthCheckPath"] !== undefined) {
        contents.HealthCheckPath = output["HealthCheckPath"];
    }
    if (output["HealthCheckPort"] !== undefined) {
        contents.HealthCheckPort = output["HealthCheckPort"];
    }
    if (output["HealthCheckProtocol"] !== undefined) {
        contents.HealthCheckProtocol = output["HealthCheckProtocol"];
    }
    if (output["HealthCheckTimeoutSeconds"] !== undefined) {
        contents.HealthCheckTimeoutSeconds = parseInt(output["HealthCheckTimeoutSeconds"]);
    }
    if (output["HealthyThresholdCount"] !== undefined) {
        contents.HealthyThresholdCount = parseInt(output["HealthyThresholdCount"]);
    }
    if (output.LoadBalancerArns === "") {
        contents.LoadBalancerArns = [];
    }
    if (output["LoadBalancerArns"] !== undefined &&
        output["LoadBalancerArns"]["member"] !== undefined) {
        const wrappedItem = output["LoadBalancerArns"]["member"] instanceof Array
            ? output["LoadBalancerArns"]["member"]
            : [output["LoadBalancerArns"]["member"]];
        contents.LoadBalancerArns = deserializeAws_queryLoadBalancerArns(wrappedItem, context);
    }
    if (output["Matcher"] !== undefined) {
        contents.Matcher = deserializeAws_queryMatcher(output["Matcher"], context);
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["TargetGroupArn"] !== undefined) {
        contents.TargetGroupArn = output["TargetGroupArn"];
    }
    if (output["TargetGroupName"] !== undefined) {
        contents.TargetGroupName = output["TargetGroupName"];
    }
    if (output["TargetType"] !== undefined) {
        contents.TargetType = output["TargetType"];
    }
    if (output["UnhealthyThresholdCount"] !== undefined) {
        contents.UnhealthyThresholdCount = parseInt(output["UnhealthyThresholdCount"]);
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    return contents;
};
const deserializeAws_queryTargetGroupAssociationLimitException = (output, context) => {
    let contents = {
        __type: "TargetGroupAssociationLimitException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTargetGroupAttribute = (output, context) => {
    let contents = {
        __type: "TargetGroupAttribute",
        Key: undefined,
        Value: undefined
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryTargetGroupAttributes = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTargetGroupAttribute(entry, context));
    });
    return contents;
};
const deserializeAws_queryTargetGroupList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTargetGroupTuple(entry, context));
    });
    return contents;
};
const deserializeAws_queryTargetGroupNotFoundException = (output, context) => {
    let contents = {
        __type: "TargetGroupNotFoundException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTargetGroupStickinessConfig = (output, context) => {
    let contents = {
        __type: "TargetGroupStickinessConfig",
        DurationSeconds: undefined,
        Enabled: undefined
    };
    if (output["DurationSeconds"] !== undefined) {
        contents.DurationSeconds = parseInt(output["DurationSeconds"]);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryTargetGroupTuple = (output, context) => {
    let contents = {
        __type: "TargetGroupTuple",
        TargetGroupArn: undefined,
        Weight: undefined
    };
    if (output["TargetGroupArn"] !== undefined) {
        contents.TargetGroupArn = output["TargetGroupArn"];
    }
    if (output["Weight"] !== undefined) {
        contents.Weight = parseInt(output["Weight"]);
    }
    return contents;
};
const deserializeAws_queryTargetGroups = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTargetGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryTargetHealth = (output, context) => {
    let contents = {
        __type: "TargetHealth",
        Description: undefined,
        Reason: undefined,
        State: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["Reason"] !== undefined) {
        contents.Reason = output["Reason"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    return contents;
};
const deserializeAws_queryTargetHealthDescription = (output, context) => {
    let contents = {
        __type: "TargetHealthDescription",
        HealthCheckPort: undefined,
        Target: undefined,
        TargetHealth: undefined
    };
    if (output["HealthCheckPort"] !== undefined) {
        contents.HealthCheckPort = output["HealthCheckPort"];
    }
    if (output["Target"] !== undefined) {
        contents.Target = deserializeAws_queryTargetDescription(output["Target"], context);
    }
    if (output["TargetHealth"] !== undefined) {
        contents.TargetHealth = deserializeAws_queryTargetHealth(output["TargetHealth"], context);
    }
    return contents;
};
const deserializeAws_queryTargetHealthDescriptions = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTargetHealthDescription(entry, context));
    });
    return contents;
};
const deserializeAws_queryTooManyActionsException = (output, context) => {
    let contents = {
        __type: "TooManyActionsException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyCertificatesException = (output, context) => {
    let contents = {
        __type: "TooManyCertificatesException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyListenersException = (output, context) => {
    let contents = {
        __type: "TooManyListenersException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyLoadBalancersException = (output, context) => {
    let contents = {
        __type: "TooManyLoadBalancersException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyRegistrationsForTargetIdException = (output, context) => {
    let contents = {
        __type: "TooManyRegistrationsForTargetIdException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyRulesException = (output, context) => {
    let contents = {
        __type: "TooManyRulesException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyTagsException = (output, context) => {
    let contents = {
        __type: "TooManyTagsException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyTargetGroupsException = (output, context) => {
    let contents = {
        __type: "TooManyTargetGroupsException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyTargetsException = (output, context) => {
    let contents = {
        __type: "TooManyTargetsException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException = (output, context) => {
    let contents = {
        __type: "TooManyUniqueTargetGroupsPerLoadBalancerException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryUnsupportedProtocolException = (output, context) => {
    let contents = {
        __type: "UnsupportedProtocolException",
        Message: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
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
const decodeEscapedXML = (str) => {
    return str
        .replace(/&amp;/g, "&")
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<");
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            const parsedObj = fast_xml_parser_1.parse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
            });
            const textNodeName = "#text";
            const key = Object.keys(parsedObj)[0];
            const parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return parsedObjToReturn;
        }
        return {};
    });
};
const buildFormUrlencodedString = (entries) => {
    return Object.keys(entries)
        .map(key => smithy_client_1.extendedEncodeURIComponent(key) +
        "=" +
        smithy_client_1.extendedEncodeURIComponent(entries[key]))
        .join("&");
};
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map